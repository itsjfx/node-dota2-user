import ByteBuffer from 'bytebuffer';
import { EventEmitter } from 'node:events';
import SteamUser from 'steam-user';
import { Router } from './router';
import { EGCBaseClientMsg } from './generated-protobufs';
import { protobufsMap } from './known-protobufs';
const debug = require('debug')('dota2-user');

// TODO... there has to be a better way
export interface Dota2User {
    _connect(): void;
    _handleAppQuit(emitDisconnectEvent: boolean): void;
    _clearHelloTimer(): void;
    _handleMessage(msgType: number, payload: Object | Buffer): void;
    _send(type: number, body: Buffer|ByteBuffer, ignoreProtobuf?: boolean): boolean;
}

export class Dota2User extends EventEmitter {
    static STEAM_APPID = 570;

    _steam: SteamUser; // private

    // state
    haveGCSession: boolean;
    _inDota2: boolean; // private

    // TODO
    _helloTimer: NodeJS.Timer | undefined | null;
    _helloTimerMs: number | undefined;
    router: Router;

    constructor(steam: SteamUser) {
        if (steam.packageName !== 'steam-user' || !('packageVersion' in steam) || !steam.constructor) {
            throw new Error('dota2-user v2 only supports steam-user v4.2.0 or later.');
        } else {
            const [major, minor] = steam.packageVersion.split('.');
            if (+major < 4 || +minor < 2) {
                throw new Error(`dota2-user v2 only supports steam-user v4.2.0 or later. ${steam.constructor.name} v${steam.packageVersion} given.`);
            }
        }

        // TODO: EventEmitter args
        super();
        this.router = new Router();
        this._steam = steam;
        this.haveGCSession = false;
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
    
        this._steam.on('error', (err) => {
            this._handleAppQuit(true);
        });

        this.router.on(EGCBaseClientMsg.k_EMsgGCClientWelcome, (message) => {
            // Handle caches

            // this.inventory = this.inventory || [];
            debug("GC connection established");
            debug('Received welcome: %o', message)
            this.haveGCSession = true;
            this._clearHelloTimer();
            this.emit('connectedToGC');
        });
    }

    get inDota2() {
        return this._inDota2;
    }

    // TODO: people should probably not use the fromJSON calls, cause it won't be typed
    // This to be sendRaw instead
    send(type: number, body: Object) {
        if (!this._steam.steamID) {
            return false;
        }

        const protobuf = protobufsMap[type];
        if (protobuf) {
            const buffer = Buffer.from(protobuf.encode(protobuf.fromJSON(body)).finish());
            debug("Sending GC message %s", type);
            this._steam.sendToGC(Dota2User.STEAM_APPID, type, {}, buffer);
        } else {
            debug('Unable to send message, no protobuf found');
            return false;
        }

        return true;
    };

    sendRaw(type: number, body: Buffer|ByteBuffer) {
        if (!this._steam.steamID) {
            return false;
        }

        debug("Sending raw GC message %s", type);
        // Convert ByteBuffer to Buffer
        if (body instanceof ByteBuffer && ByteBuffer.isByteBuffer(body)) {
            body = body.flip().toBuffer();
        }
        this._steam.sendToGC(Dota2User.STEAM_APPID, type, null, body as Buffer);
    }
}

// And finally, require all the components that add their own methods to the class' prototype
require('./components/connection.js');
