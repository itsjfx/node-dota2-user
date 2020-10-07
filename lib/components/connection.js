const Dota2User = require('../index.js');
let handlers = Dota2User.prototype._handlers;

const INITIAL_HELLO_DELAY = 500;
const DEFAULT_HELLO_DELAY = 1000;
const EXPONENTIAL_HELLO_BACKOFF_MAX = 60000;

/**
 * @private
 */
Dota2User.prototype._connect = function() {
	if (!this._isInDota2 || this._helloTimer) {
		this.emit('debug', "Not trying to connect due to " + (!this._isInDota2 ? "not in Dota 2" : "has helloTimer"));
		return; // We're not in Dota 2 or we're already trying to connect
	}

	let sendHello = () => {
		if (!this._isInDota2 || this.haveGCSession) {
			this.emit('debug', "Not sending hello because " + (!this._isInDota2 ? "we're no longer in Dota 2" : "we have a session"));
			this._clearHelloTimer();
			return;
		}

		this._send(Dota2User.Protos.EGCBaseClientMsg.k_EMsgGCClientHello, {});
		this._helloTimerMs = Math.min(EXPONENTIAL_HELLO_BACKOFF_MAX, (this._helloTimerMs || DEFAULT_HELLO_DELAY) * 2); // exponential backoff, max 60 seconds
		this._helloTimer = setTimeout(sendHello, this._helloTimerMs);
		this.emit('debug', "Sending hello, setting timer for next attempt to " + this._helloTimerMs + " ms");
	};

	this._helloTimer = setTimeout(sendHello, INITIAL_HELLO_DELAY);
};

/**
 * @param {boolean} emitDisconnectEvent 
 * @private
 */
Dota2User.prototype._handleAppQuit = function(emitDisconnectEvent) {
	this._clearHelloTimer();

	if (this.haveGCSession && emitDisconnectEvent) {
		this.emit('disconnectedFromGC', Dota2User.GCConnectionStatus.NO_SESSION);
	}

	this._isInDota2 = false;
	this.haveGCSession = false;
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

// Handlers
handlers[Dota2User.Protos.EGCBaseClientMsg.k_EMsgGCClientWelcome] = function(message) {
	// Handle caches

	this.inventory = this.inventory || [];
	this.emit('debug', "GC connection established");
	this.haveGCSession = true;
	this._clearHelloTimer();
	this.emit('connectedToGC');
};
