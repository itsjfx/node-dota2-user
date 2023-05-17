import { EventEmitter } from 'node:events';

import ByteBuffer from 'bytebuffer';
import SteamUser from 'steam-user';
const debug = require('debug')('dota2-user');

import { Router } from './router';
import { EGCBaseClientMsg, GCConnectionStatus } from './protobufs';
import { ProtobufDataMapType } from './known-protobufs';
import { Dota2UserError, getProtobufForMessage } from './utils';

// TODO... there has to be a better way
export interface Dota2User {
    _connect(): void;
    _handleAppQuit(emitDisconnectEvent: boolean): void;
    _clearHelloTimer(): void;
}

export class Dota2User extends EventEmitter {
    static STEAM_APPID = 570;
    router: Router;

    _steam: SteamUser;
    // State
    _haveGCSession: boolean;
    _inDota2: boolean;
    // TODO
    _helloTimer: NodeJS.Timer | undefined | null;
    _helloTimerMs: number | undefined;

    constructor(steam: SteamUser) {
        if (steam.packageName !== 'steam-user' || !('packageVersion' in steam) || !steam.constructor) {
            throw new Dota2UserError('dota2-user v2 only supports steam-user v4.2.0 or later.');
        } else {
            const [major, minor] = steam.packageVersion.split('.');
            if (+major < 4 || +minor < 2) {
                throw new Dota2UserError(`dota2-user v2 only supports steam-user v4.2.0 or later. ${steam.constructor.name} v${steam.packageVersion} given.`);
            }
        }

        // TODO: EventEmitter args
        super();
        this.router = new Router();
        this._steam = steam;
        this._haveGCSession = false;
        this._inDota2 = false;

        // Hook our steam-user events
        // TODO should this be happening in the constructor or ...
        this._steam.on('receivedFromGC', (appid, msgType, payload) => {
            if (appid !== Dota2User.STEAM_APPID) {
                return; // we don't care
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
    }

    get inDota2() {
        return this._inDota2;
    }

    get haveGCSession() {
        return this._haveGCSession;
    }

    // TODO read about extends and typeof in TypeScript
    send<T extends keyof ProtobufDataMapType>(messageId: T, body: ProtobufDataMapType[T]) {
        const protobuf = getProtobufForMessage(messageId);
        const buffer = Buffer.from(protobuf.encode(body).finish());
        return this.sendRawBuffer(messageId, buffer);
    }

    // this may get deprecated
    // a "raw" / not entirely type-safe way of sending data
    sendRaw(messageId: keyof ProtobufDataMapType, body: object) {
        const protobuf = getProtobufForMessage(messageId);
        const buffer = Buffer.from(protobuf.encode(protobuf.fromJSON(body)).finish());
        return this.sendRawBuffer(messageId, buffer);
    }

    sendRawBuffer(messageId: number, body: Buffer|ByteBuffer) {
        if (!this._steam.steamID) {
            throw new Dota2UserError('Cannot send GC message, not logged into Steam Client');
        }
        debug('Sending GC message %s', messageId);
        // Convert ByteBuffer to Buffer
        if (body instanceof ByteBuffer) {
            body = body.flip().toBuffer();
        }
        // TODO: not setting a callback, not sure how it functions
        this._steam.sendToGC(Dota2User.STEAM_APPID, messageId, {}, body);
    }
}

// And finally, require all the components that add their own methods to the class' prototype
require('./components/connection.js');
