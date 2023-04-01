import { EventEmitter } from 'events';
import SteamUser from 'steam-user';

const STEAM_APPID = 570;

class Dota2User extends EventEmitter {
    private _steam: SteamUser;

    // state
    haveGCSession: boolean;
    private _inDota2: boolean;

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
            if (appid !== STEAM_APPID) {
                return; // we don't care
            }
    
            this._handleMessage(msgType, payload);
        });

        this._steam.on('appLaunched', (appid) => {
            if (this._isInDota2) {
                return; // we don't care if it was launched again
            }
    
            if (appid == STEAM_APPID) {
                this._isInDota2 = true;
                if (!this.haveGCSession) {
                    this._connect();
                }
            }
        });

        this._steam.on('appQuit', (appid) => {
            if (!this._isInDota2) {
                return;
            }
    
            if (appid == STEAM_APPID) {
                this._handleAppQuit(false);
            }
        });
    
        this._steam.on('disconnected', () => {
            this._handleAppQuit(true);
        });
    
        this._steam.on('error', (err) => {
            this._handleAppQuit(true);
        });
    }
}

Dota2User.prototype._handlers = {};

module.exports = Dota2User;

// Tack on our protos
Dota2User.Protos = require('../protobufs/generated/_load.js');
Dota2User.STEAM_APPID = STEAM_APPID;

// And finally, require all the components that add their own methods to the class' prototype
require('./components/connection.js');
require('./components/messages.js');
