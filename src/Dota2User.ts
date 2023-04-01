import { EventEmitter } from 'events';
import SteamUser from 'steam-user';
const Protos = require('../protobufs/generated/_load.js'); // TODO move to src

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
    static Protos = Protos;

    _steam: SteamUser; // private

    // state
    haveGCSession: boolean;
    _inDota2: boolean; // private

    // TODO
    _helloTimer: NodeJS.Timer | undefined | null;
    _helloTimerMs: number | undefined;

    constructor(steam: SteamUser) {
        if (steam.packageName !== 'steam-user' || !('packageVersion' in steam) || !steam.constructor) {
            throw new Error('dota2-user v2 only supports steam-user v4.2.0 or later.');
        } else {
            const [major, minor] = steam.packageVersion.split('.');
            if (+major < 4 || +minor < 2) {
                throw new Error(`dota2-user v2 only supports steam-user v4.2.0 or later. ${steam.constructor.name} v${steam.packageVersion} given.`);
            }
        }

        super();
        this._steam = steam;
        this.haveGCSession = false;
        this._inDota2 = false;

        // Hook our steam-user events
        this._steam.on('receivedFromGC', (appid, msgType, payload) => {
            if (appid !== Dota2User.STEAM_APPID) {
                return; // we don't care
            }
    
            this._handleMessage(msgType, payload);
        });

        this._steam.on('appLaunched', (appid) => {
            if (this._inDota2 || appid !== Dota2User.STEAM_APPID) {
                return;
            }
    
            this._inDota2 = true;
            if (!this.haveGCSession) {
                this._connect();
            }
        });

        this._steam.on('appQuit', (appid) => {
            if (!this._inDota2 || appid !== Dota2User.STEAM_APPID) {
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
    }
}
// @ts-ignore
Dota2User.prototype._handlers = {}; // private

// And finally, require all the components that add their own methods to the class' prototype
require('./components/connection.js');
require('./components/messages.js');
