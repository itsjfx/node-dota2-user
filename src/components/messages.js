const ByteBuffer = require('bytebuffer');

const Dota2User = require('../index.js');

// Mapping a message type to its protobuf for sending or receiving
const protobufs = {
    [Dota2User.Protos.EGCBaseClientMsg.k_EMsgGCClientHello]: Dota2User.Protos.CMsgClientHello,
    [Dota2User.Protos.EGCBaseClientMsg.k_EMsgGCClientWelcome]: Dota2User.Protos.CMsgClientWelcome,
};

// The protos we will search when looking for a message name
const PROTOS_TO_SEARCH = [
    Dota2User.Protos.EDOTAGCMsg,
    Dota2User.Protos.ESOMsg,
    Dota2User.Protos.EGCBaseClientMsg,
    Dota2User.Protos.EGCEconBaseMsg,
    Dota2User.Protos.EGCBaseMsg,
    Dota2User.Protos.EGCItemMsg,
    Dota2User.Protos.EGCMsgInitiateTradeResponse,
    Dota2User.Protos.EGCMsgResponse,
    Dota2User.Protos.EGCMsgUseItemResponse,
];

/**
 * @param {int} msgType
 * @param {object|Buffer} payload
 * @private
 */
Dota2User.prototype._handleMessage = function(msgType, payload) {
    let isProtobuf = !Buffer.isBuffer(payload);
    let handler = null;

    if (this._handlers[msgType]) {
        handler = this._handlers[msgType];
    }

    let msgName = Dota2User._getMessageName(msgType) || msgType;

    this.emit('debug', "Got " + (handler ? "handled" : "unhandled") + " GC message " + msgName + (isProtobuf ? " (protobuf)" : ""));
    if (handler) {
        let body = isProtobuf ? payload : ByteBuffer.wrap(payload, ByteBuffer.LITTLE_ENDIAN);
        // Decode here if we have a protobuf mapping
        if (protobufs[msgType]) {
            body = exports.decodeProto(protobufs[msgType], body);
        }
        handler.call(this, body);
    }
};

/**
 * @param {int} type
 * @param {object|Buffer|ByteBuffer} body
 * @param {Boolean} ignoreProtobuf
 * @private
 */
Dota2User.prototype._send = function(type, body, ignoreProtobuf) {
    if (!this._steam.steamID) {
        return false;
    }

    let msgName = Dota2User._getMessageName(type) || type;

    this.emit('debug', "Sending GC message " + msgName);

    let protobuf = protobufs[type];
    if (protobuf && !ignoreProtobuf) {
        this._steam.sendToGC(Dota2User.STEAM_APPID, type, {}, protobuf.encode(body).finish());
    } else { // This is a ByteBuffer or Buffer
        // Convert ByteBuffer to Buffer
        if (ByteBuffer.isByteBuffer(body)) {
            body = body.flip().toBuffer();
        }
        this._steam.sendToGC(Dota2User.STEAM_APPID, type, null, body);
    }

    return true;
};

/**
 * Finds the message name for a proto
 * @param {int} kMsg 
 * @private
 */
Dota2User._getMessageName = function(kMsg) {
    for (let proto of PROTOS_TO_SEARCH) {
        for (let i in proto) {
            if (proto.hasOwnProperty(i) && proto[i] == kMsg) {
                return i;
            }
        }
    }
};

/**
 * Decode a protobuf.
 * @param {object} proto - The protobuf class
 * @param {Buffer|ByteBuffer} encoded - The data to decode
 * @returns {object}
 */
exports.decodeProto = function(proto, encoded) {
    if (ByteBuffer.isByteBuffer(encoded)) {
        encoded = encoded.toBuffer();
    }

    let decoded = proto.decode(encoded);
    let objNoDefaults = proto.toObject(decoded, {"longs": String});
    let objWithDefaults = proto.toObject(decoded, {"defaults": true, "longs": String});
    return replaceDefaults(objNoDefaults, objWithDefaults);

    function replaceDefaults(noDefaults, withDefaults) {
        if (Array.isArray(withDefaults)) {
            return withDefaults.map((val, idx) => replaceDefaults(noDefaults[idx], val));
        }

        for (let i in withDefaults) {
            if (!withDefaults.hasOwnProperty(i)) {
                continue;
            }

            if (withDefaults[i] && typeof withDefaults[i] === 'object' && !Buffer.isBuffer(withDefaults[i])) {
                // Covers both object and array cases, both of which will work
                // Won't replace empty arrays, but that's desired behavior
                withDefaults[i] = replaceDefaults(noDefaults[i], withDefaults[i]);
            } else if (typeof noDefaults[i] === 'undefined' && isReplaceableDefaultValue(withDefaults[i])) {
                withDefaults[i] = null;
            }
        }

        return withDefaults;
    }

    function isReplaceableDefaultValue(val) {
        if (Buffer.isBuffer(val) && val.length == 0) {
            // empty buffer is replaceable
            return true;
        }

        if (Array.isArray(val)) {
            // empty array is not replaceable (empty repeated fields)
            return false;
        }

        if (val === '0') {
            // Zero as a string is replaceable (64-bit integer)
            return true;
        }

        // Anything falsy is true
        return !val;
    }
};
