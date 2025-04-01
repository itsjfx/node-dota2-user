import { EventEmitter } from 'node:events';
import { clearTimeout } from 'node:timers';

// Use import for ByteBuffer instead of type import
import ByteBuffer from 'bytebuffer';
import type SteamUser from 'steam-user';
const debug = require('debug')('dota2-user');

import { Router } from './router';
import { EGCBaseClientMsg, GCConnectionStatus } from './protobufs';
import type { DeepPartial } from './protobufs/protobuf-utils';
import type { ClientProtobufsType } from './protobufs/protobuf-mappings';
import { Dota2UserError, getProtobufForMessage } from './utils';

const INITIAL_HELLO_DELAY = 500;
const DEFAULT_HELLO_DELAY = 1000;
const EXPONENTIAL_HELLO_BACKOFF_MAX = 60000;

// The Router's events interface is already extended in router.ts
// No need for declare module here

export class Dota2User extends EventEmitter {
    static readonly STEAM_APPID = 570;
    router: Router = new Router();

    _steam: SteamUser;
    // State
    _haveGCSession = false;
    _inDota2 = false;
    _helloTimer: NodeJS.Timeout | undefined | null;
    _helloTimerMs?: number | undefined;
    _nextJobId = 1;
    _jobs = new Map<number, (payload: Buffer) => void>();

    constructor(steam: SteamUser) {
        if (steam.packageName !== 'steam-user' || !('packageVersion' in steam) || !steam.constructor) {
            throw new Dota2UserError('dota2-user v2 only supports steam-user v4.2.0 or later.');
        } else {
            const [major, minor] = steam.packageVersion.split('.');
            if (+major < 4 || (+major === 4 && +minor < 2)) {
                throw new Dota2UserError(`dota2-user v2 only supports steam-user v4.2.0 or later. ${steam.constructor.name} v${steam.packageVersion} given.`);
            }
        }

        super();
        this._steam = steam;

        this._hookSteamUserEvents();
        this._hookRouterEvents();
    }

    get inDota2(): boolean {
        return this._inDota2;
    }

    get haveGCSession(): boolean {
        return this._haveGCSession;
    }

    // there's NO validation as to whether events have been hooked
    // so only called in the constructor once
    _hookRouterEvents() {
        this.router.on(EGCBaseClientMsg.k_EMsgGCClientWelcome, (message) => {
            // Handle caches

            // this.inventory = this.inventory || [];
            debug('GC connection established');
            debug('Received welcome: %o', message);
            this._haveGCSession = true;
            this._clearHelloTimer();
            this.emit('connectedToGC');
        });

        this.router.on(EGCBaseClientMsg.k_EMsgGCClientConnectionStatus, (data) => {
            if (data.status !== GCConnectionStatus.GCConnectionStatus_HAVE_SESSION && this.haveGCSession) {
                debug('Connection status: %s; have session: %s', data.status, this.haveGCSession);
                this.emit('disconnectedFromGC', data.status);
                this._haveGCSession = false;
                this._connect(); // Try to reconnect
            }
        });

        // Handle job responses
        this.router.on('job', (jobId, payload) => {
            const callback = this._jobs.get(jobId);
            if (callback) {
                callback(payload);
                this._jobs.delete(jobId);
            }
        });
    }
    _hookSteamUserEvents() {
        this._steam.on('receivedFromGC', (appid, msgType, payload) => {
            if (appid !== Dota2User.STEAM_APPID) {
                return; // we don't care
            }

            // Extract job_id if present in the header
            let jobId = null;
            if (payload.readUInt32LE && payload.length >= 18) {
                // Most GC messages have a header with job_id at offset 10
                jobId = payload.readUInt32LE(10);
                if (jobId === 0xffffffff) {
                    jobId = null;
                }
            }

            if (jobId && this._jobs.has(jobId)) {
                this.router.emit('job', jobId, payload);
            }

            this.router.route(msgType, payload);
        });

        this._steam.on('appLaunched', (appid) => {
            if (this.inDota2 || appid !== Dota2User.STEAM_APPID) {
                return;
            }

            this._inDota2 = true;
            if (!this.haveGCSession) {
                this._connect();
            }
        });

        this._steam.on('appQuit', (appid) => {
            if (!this.inDota2 || appid !== Dota2User.STEAM_APPID) {
                return;
            }

            this._handleAppQuit(false);
        });

        this._steam.on('disconnected', () => {
            this._handleAppQuit(true);
        });

        this._steam.on('error', () => {
            this._handleAppQuit(true);
        });
    }

    send<T extends keyof ClientProtobufsType>(messageId: T, body: ClientProtobufsType[T]): void {
        const protobuf = getProtobufForMessage(messageId);
        if (!protobuf) {
            throw new Dota2UserError(`Unable to find protobuf for message: ${messageId}`);
        }
        const buffer = Buffer.from(protobuf.encode(body).finish());
        this.sendRawBuffer(messageId, buffer);
    }

    // send a partial message, where all payload properties are optional, and missing values are filled in best effort
    sendPartial<T extends keyof ClientProtobufsType>(messageId: T, body: DeepPartial<ClientProtobufsType[T]>): void {
        const protobuf = getProtobufForMessage(messageId);
        if (!protobuf) {
            throw new Dota2UserError(`Unable to find protobuf for message: ${messageId}`);
        }
        const buffer = Buffer.from(protobuf.encode(protobuf.fromPartial(body)).finish());
        this.sendRawBuffer(messageId, buffer);
    }

    sendWithCallback<T extends keyof ClientProtobufsType, R = Buffer>(messageId: T, body: DeepPartial<ClientProtobufsType[T]>, responseCallback: (response: R) => void): void {
        const jobId = this._getNextJobId();
        this._jobs.set(jobId, responseCallback as (payload: Buffer) => void);

        // Create a buffer and set the job_id in the header
        const protobuf = getProtobufForMessage(messageId);
        if (!protobuf) {
            throw new Dota2UserError(`Unable to find protobuf for message: ${messageId}`);
        }

        // Encode the message
        const messageBuffer = Buffer.from(protobuf.encode(protobuf.fromPartial(body)).finish());

        // Create a header with job_id
        const headerBuffer = Buffer.alloc(18);
        headerBuffer.writeUInt32LE(jobId, 10); // Set job_id at offset 10

        // Combine header and message
        const finalBuffer = Buffer.concat([headerBuffer, messageBuffer.slice(18)]);

        debug(`Sending GC message ${messageId} with job_id ${jobId}`);
        this._steam.sendToGC(Dota2User.STEAM_APPID, messageId, {}, finalBuffer);
    }

    sendRawBuffer(messageId: number, body: Buffer | ByteBuffer): void {
        if (!this._steam.steamID) {
            throw new Dota2UserError('Cannot send GC message, not logged into Steam Client');
        }
        debug('Sending GC message %s', messageId);
        // Convert ByteBuffer to Buffer
        let buffer = body;
        if (body instanceof ByteBuffer) {
            buffer = body.flip().toBuffer();
        }
        // TODO: not setting a callback, not sure how it functions
        this._steam.sendToGC(Dota2User.STEAM_APPID, messageId, {}, buffer);
    }

    _connect(): void {
        if (!this.inDota2 || this._helloTimer) {
            debug('Not trying to connect due to ' + (!this.inDota2 ? 'not in Dota 2' : 'has helloTimer'));
            return; // We're not in Dota 2 or we're already trying to connect
        }

        const sendHello = () => {
            if (!this.inDota2 || this.haveGCSession) {
                debug('Not sending hello because ' + (!this.inDota2 ? "we're no longer in Dota 2" : 'we have a session'));
                this._clearHelloTimer();
                return;
            }

            this.sendPartial(EGCBaseClientMsg.k_EMsgGCClientHello, {});
            this._helloTimerMs = Math.min(EXPONENTIAL_HELLO_BACKOFF_MAX, (this._helloTimerMs || DEFAULT_HELLO_DELAY) * 2);
            this._helloTimer = setTimeout(() => sendHello(), this._helloTimerMs);
            debug('Sending hello, setting timer for next attempt to %s ms', this._helloTimerMs);
        };

        this._helloTimer = setTimeout(() => sendHello(), INITIAL_HELLO_DELAY);
    }

    _handleAppQuit(emitDisconnectEvent: boolean): void {
        this._clearHelloTimer();

        if (this.haveGCSession && emitDisconnectEvent) {
            this.emit('disconnectedFromGC', GCConnectionStatus.GCConnectionStatus_NO_SESSION);
        }

        this._inDota2 = false;
        this._haveGCSession = false;
    }

    _clearHelloTimer(): void {
        if (this._helloTimer) {
            clearTimeout(this._helloTimer);
            this._helloTimer = null;
            this._helloTimerMs = undefined;
        }
    }

    _getNextJobId(): number {
        const jobId = this._nextJobId++;
        if (this._nextJobId >= 0x10000) {
            this._nextJobId = 1;
        }
        return jobId;
    }
}
