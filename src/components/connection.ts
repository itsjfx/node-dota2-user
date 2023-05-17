const debug = require('debug')('dota2-user:connection');

import { Dota2User } from '../Dota2User.js';
import { EGCBaseClientMsg, GCConnectionStatus } from '../protobufs';

const INITIAL_HELLO_DELAY = 500;
const DEFAULT_HELLO_DELAY = 1000;
const EXPONENTIAL_HELLO_BACKOFF_MAX = 60000;

// this is legacy connection code
// not very happy with it, but it works, and simple that I see no harm keeping it around for the time being

/**
 * @private
 */
Dota2User.prototype._connect = function() {
    if (!this.inDota2 || this._helloTimer) {
        debug('Not trying to connect due to ' + (!this.inDota2 ? 'not in Dota 2' : 'has helloTimer'));
        return; // We're not in Dota 2 or we're already trying to connect
    }

    const sendHello = () => {
        if (!this.inDota2 || this.haveGCSession) {
            debug('Not sending hello because ' + (!this.inDota2 ? 'we\'re no longer in Dota 2' : 'we have a session'));
            this._clearHelloTimer();
            return;
        }

        this.sendRaw(EGCBaseClientMsg.k_EMsgGCClientHello, {});
        this._helloTimerMs = Math.min(EXPONENTIAL_HELLO_BACKOFF_MAX, (this._helloTimerMs || DEFAULT_HELLO_DELAY) * 2); // exponential backoff, max 60 seconds
        this._helloTimer = setTimeout(() => sendHello(), this._helloTimerMs);
        debug('Sending hello, setting timer for next attempt to %s ms', this._helloTimerMs);
    };

    this._helloTimer = setTimeout(() => sendHello(), INITIAL_HELLO_DELAY);
};

/**
 * @param {boolean} emitDisconnectEvent
 * @private
 */
Dota2User.prototype._handleAppQuit = function(emitDisconnectEvent: boolean) {
    this._clearHelloTimer();

    if (this.haveGCSession && emitDisconnectEvent) {
        this.emit('disconnectedFromGC', GCConnectionStatus.GCConnectionStatus_NO_SESSION);
    }

    this._inDota2 = false;
    this._haveGCSession = false;
};

/**
 * @private
 */
Dota2User.prototype._clearHelloTimer = function() {
    if (this._helloTimer) {
        clearTimeout(this._helloTimer);
        this._helloTimer = null;
        delete this._helloTimerMs;
    }
};
