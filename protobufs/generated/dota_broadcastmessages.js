/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    /**
     * EDotaBroadcastMessages enum.
     * @exports EDotaBroadcastMessages
     * @enum {number}
     * @property {number} DOTA_BM_LANLobbyRequest=1 DOTA_BM_LANLobbyRequest value
     * @property {number} DOTA_BM_LANLobbyReply=2 DOTA_BM_LANLobbyReply value
     */
    $root.EDotaBroadcastMessages = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "DOTA_BM_LANLobbyRequest"] = 1;
        values[valuesById[2] = "DOTA_BM_LANLobbyReply"] = 2;
        return values;
    })();
    
    $root.CDOTABroadcastMsg = (function() {
    
        /**
         * Properties of a CDOTABroadcastMsg.
         * @exports ICDOTABroadcastMsg
         * @interface ICDOTABroadcastMsg
         * @property {EDotaBroadcastMessages} type CDOTABroadcastMsg type
         * @property {Uint8Array|null} [msg] CDOTABroadcastMsg msg
         */
    
        /**
         * Constructs a new CDOTABroadcastMsg.
         * @exports CDOTABroadcastMsg
         * @classdesc Represents a CDOTABroadcastMsg.
         * @implements ICDOTABroadcastMsg
         * @constructor
         * @param {ICDOTABroadcastMsg=} [properties] Properties to set
         */
        function CDOTABroadcastMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDOTABroadcastMsg type.
         * @member {EDotaBroadcastMessages} type
         * @memberof CDOTABroadcastMsg
         * @instance
         */
        CDOTABroadcastMsg.prototype.type = 1;
    
        /**
         * CDOTABroadcastMsg msg.
         * @member {Uint8Array} msg
         * @memberof CDOTABroadcastMsg
         * @instance
         */
        CDOTABroadcastMsg.prototype.msg = $util.newBuffer([]);
    
        /**
         * Creates a new CDOTABroadcastMsg instance using the specified properties.
         * @function create
         * @memberof CDOTABroadcastMsg
         * @static
         * @param {ICDOTABroadcastMsg=} [properties] Properties to set
         * @returns {CDOTABroadcastMsg} CDOTABroadcastMsg instance
         */
        CDOTABroadcastMsg.create = function create(properties) {
            return new CDOTABroadcastMsg(properties);
        };
    
        /**
         * Encodes the specified CDOTABroadcastMsg message. Does not implicitly {@link CDOTABroadcastMsg.verify|verify} messages.
         * @function encode
         * @memberof CDOTABroadcastMsg
         * @static
         * @param {ICDOTABroadcastMsg} message CDOTABroadcastMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDOTABroadcastMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.msg);
            return writer;
        };
    
        /**
         * Encodes the specified CDOTABroadcastMsg message, length delimited. Does not implicitly {@link CDOTABroadcastMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDOTABroadcastMsg
         * @static
         * @param {ICDOTABroadcastMsg} message CDOTABroadcastMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDOTABroadcastMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDOTABroadcastMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CDOTABroadcastMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDOTABroadcastMsg} CDOTABroadcastMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDOTABroadcastMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDOTABroadcastMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.msg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CDOTABroadcastMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDOTABroadcastMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDOTABroadcastMsg} CDOTABroadcastMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDOTABroadcastMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDOTABroadcastMsg message.
         * @function verify
         * @memberof CDOTABroadcastMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDOTABroadcastMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 1:
            case 2:
                break;
            }
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!(message.msg && typeof message.msg.length === "number" || $util.isString(message.msg)))
                    return "msg: buffer expected";
            return null;
        };
    
        /**
         * Creates a CDOTABroadcastMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDOTABroadcastMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDOTABroadcastMsg} CDOTABroadcastMsg
         */
        CDOTABroadcastMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CDOTABroadcastMsg)
                return object;
            var message = new $root.CDOTABroadcastMsg();
            switch (object.type) {
            case "DOTA_BM_LANLobbyRequest":
            case 1:
                message.type = 1;
                break;
            case "DOTA_BM_LANLobbyReply":
            case 2:
                message.type = 2;
                break;
            }
            if (object.msg != null)
                if (typeof object.msg === "string")
                    $util.base64.decode(object.msg, message.msg = $util.newBuffer($util.base64.length(object.msg)), 0);
                else if (object.msg.length)
                    message.msg = object.msg;
            return message;
        };
    
        /**
         * Creates a plain object from a CDOTABroadcastMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDOTABroadcastMsg
         * @static
         * @param {CDOTABroadcastMsg} message CDOTABroadcastMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDOTABroadcastMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "DOTA_BM_LANLobbyRequest" : 1;
                if (options.bytes === String)
                    object.msg = "";
                else {
                    object.msg = [];
                    if (options.bytes !== Array)
                        object.msg = $util.newBuffer(object.msg);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.EDotaBroadcastMessages[message.type] : message.type;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = options.bytes === String ? $util.base64.encode(message.msg, 0, message.msg.length) : options.bytes === Array ? Array.prototype.slice.call(message.msg) : message.msg;
            return object;
        };
    
        /**
         * Converts this CDOTABroadcastMsg to JSON.
         * @function toJSON
         * @memberof CDOTABroadcastMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDOTABroadcastMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CDOTABroadcastMsg;
    })();
    
    $root.CDOTABroadcastMsg_LANLobbyRequest = (function() {
    
        /**
         * Properties of a CDOTABroadcastMsg_LANLobbyRequest.
         * @exports ICDOTABroadcastMsg_LANLobbyRequest
         * @interface ICDOTABroadcastMsg_LANLobbyRequest
         */
    
        /**
         * Constructs a new CDOTABroadcastMsg_LANLobbyRequest.
         * @exports CDOTABroadcastMsg_LANLobbyRequest
         * @classdesc Represents a CDOTABroadcastMsg_LANLobbyRequest.
         * @implements ICDOTABroadcastMsg_LANLobbyRequest
         * @constructor
         * @param {ICDOTABroadcastMsg_LANLobbyRequest=} [properties] Properties to set
         */
        function CDOTABroadcastMsg_LANLobbyRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CDOTABroadcastMsg_LANLobbyRequest instance using the specified properties.
         * @function create
         * @memberof CDOTABroadcastMsg_LANLobbyRequest
         * @static
         * @param {ICDOTABroadcastMsg_LANLobbyRequest=} [properties] Properties to set
         * @returns {CDOTABroadcastMsg_LANLobbyRequest} CDOTABroadcastMsg_LANLobbyRequest instance
         */
        CDOTABroadcastMsg_LANLobbyRequest.create = function create(properties) {
            return new CDOTABroadcastMsg_LANLobbyRequest(properties);
        };
    
        /**
         * Encodes the specified CDOTABroadcastMsg_LANLobbyRequest message. Does not implicitly {@link CDOTABroadcastMsg_LANLobbyRequest.verify|verify} messages.
         * @function encode
         * @memberof CDOTABroadcastMsg_LANLobbyRequest
         * @static
         * @param {ICDOTABroadcastMsg_LANLobbyRequest} message CDOTABroadcastMsg_LANLobbyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDOTABroadcastMsg_LANLobbyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CDOTABroadcastMsg_LANLobbyRequest message, length delimited. Does not implicitly {@link CDOTABroadcastMsg_LANLobbyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDOTABroadcastMsg_LANLobbyRequest
         * @static
         * @param {ICDOTABroadcastMsg_LANLobbyRequest} message CDOTABroadcastMsg_LANLobbyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDOTABroadcastMsg_LANLobbyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDOTABroadcastMsg_LANLobbyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CDOTABroadcastMsg_LANLobbyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDOTABroadcastMsg_LANLobbyRequest} CDOTABroadcastMsg_LANLobbyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDOTABroadcastMsg_LANLobbyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDOTABroadcastMsg_LANLobbyRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CDOTABroadcastMsg_LANLobbyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDOTABroadcastMsg_LANLobbyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDOTABroadcastMsg_LANLobbyRequest} CDOTABroadcastMsg_LANLobbyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDOTABroadcastMsg_LANLobbyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDOTABroadcastMsg_LANLobbyRequest message.
         * @function verify
         * @memberof CDOTABroadcastMsg_LANLobbyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDOTABroadcastMsg_LANLobbyRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CDOTABroadcastMsg_LANLobbyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDOTABroadcastMsg_LANLobbyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDOTABroadcastMsg_LANLobbyRequest} CDOTABroadcastMsg_LANLobbyRequest
         */
        CDOTABroadcastMsg_LANLobbyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CDOTABroadcastMsg_LANLobbyRequest)
                return object;
            return new $root.CDOTABroadcastMsg_LANLobbyRequest();
        };
    
        /**
         * Creates a plain object from a CDOTABroadcastMsg_LANLobbyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDOTABroadcastMsg_LANLobbyRequest
         * @static
         * @param {CDOTABroadcastMsg_LANLobbyRequest} message CDOTABroadcastMsg_LANLobbyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDOTABroadcastMsg_LANLobbyRequest.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CDOTABroadcastMsg_LANLobbyRequest to JSON.
         * @function toJSON
         * @memberof CDOTABroadcastMsg_LANLobbyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDOTABroadcastMsg_LANLobbyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CDOTABroadcastMsg_LANLobbyRequest;
    })();
    
    $root.CDOTABroadcastMsg_LANLobbyReply = (function() {
    
        /**
         * Properties of a CDOTABroadcastMsg_LANLobbyReply.
         * @exports ICDOTABroadcastMsg_LANLobbyReply
         * @interface ICDOTABroadcastMsg_LANLobbyReply
         * @property {number|Long|null} [id] CDOTABroadcastMsg_LANLobbyReply id
         * @property {number|null} [tournament_id] CDOTABroadcastMsg_LANLobbyReply tournament_id
         * @property {number|null} [tournament_game_id] CDOTABroadcastMsg_LANLobbyReply tournament_game_id
         * @property {Array.<CDOTABroadcastMsg_LANLobbyReply.ICLobbyMember>|null} [members] CDOTABroadcastMsg_LANLobbyReply members
         * @property {boolean|null} [requires_pass_key] CDOTABroadcastMsg_LANLobbyReply requires_pass_key
         * @property {number|null} [leader_account_id] CDOTABroadcastMsg_LANLobbyReply leader_account_id
         * @property {number|null} [game_mode] CDOTABroadcastMsg_LANLobbyReply game_mode
         * @property {string|null} [name] CDOTABroadcastMsg_LANLobbyReply name
         * @property {number|null} [players] CDOTABroadcastMsg_LANLobbyReply players
         */
    
        /**
         * Constructs a new CDOTABroadcastMsg_LANLobbyReply.
         * @exports CDOTABroadcastMsg_LANLobbyReply
         * @classdesc Represents a CDOTABroadcastMsg_LANLobbyReply.
         * @implements ICDOTABroadcastMsg_LANLobbyReply
         * @constructor
         * @param {ICDOTABroadcastMsg_LANLobbyReply=} [properties] Properties to set
         */
        function CDOTABroadcastMsg_LANLobbyReply(properties) {
            this.members = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDOTABroadcastMsg_LANLobbyReply id.
         * @member {number|Long} id
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @instance
         */
        CDOTABroadcastMsg_LANLobbyReply.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CDOTABroadcastMsg_LANLobbyReply tournament_id.
         * @member {number} tournament_id
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @instance
         */
        CDOTABroadcastMsg_LANLobbyReply.prototype.tournament_id = 0;
    
        /**
         * CDOTABroadcastMsg_LANLobbyReply tournament_game_id.
         * @member {number} tournament_game_id
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @instance
         */
        CDOTABroadcastMsg_LANLobbyReply.prototype.tournament_game_id = 0;
    
        /**
         * CDOTABroadcastMsg_LANLobbyReply members.
         * @member {Array.<CDOTABroadcastMsg_LANLobbyReply.ICLobbyMember>} members
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @instance
         */
        CDOTABroadcastMsg_LANLobbyReply.prototype.members = $util.emptyArray;
    
        /**
         * CDOTABroadcastMsg_LANLobbyReply requires_pass_key.
         * @member {boolean} requires_pass_key
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @instance
         */
        CDOTABroadcastMsg_LANLobbyReply.prototype.requires_pass_key = false;
    
        /**
         * CDOTABroadcastMsg_LANLobbyReply leader_account_id.
         * @member {number} leader_account_id
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @instance
         */
        CDOTABroadcastMsg_LANLobbyReply.prototype.leader_account_id = 0;
    
        /**
         * CDOTABroadcastMsg_LANLobbyReply game_mode.
         * @member {number} game_mode
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @instance
         */
        CDOTABroadcastMsg_LANLobbyReply.prototype.game_mode = 0;
    
        /**
         * CDOTABroadcastMsg_LANLobbyReply name.
         * @member {string} name
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @instance
         */
        CDOTABroadcastMsg_LANLobbyReply.prototype.name = "";
    
        /**
         * CDOTABroadcastMsg_LANLobbyReply players.
         * @member {number} players
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @instance
         */
        CDOTABroadcastMsg_LANLobbyReply.prototype.players = 0;
    
        /**
         * Creates a new CDOTABroadcastMsg_LANLobbyReply instance using the specified properties.
         * @function create
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @static
         * @param {ICDOTABroadcastMsg_LANLobbyReply=} [properties] Properties to set
         * @returns {CDOTABroadcastMsg_LANLobbyReply} CDOTABroadcastMsg_LANLobbyReply instance
         */
        CDOTABroadcastMsg_LANLobbyReply.create = function create(properties) {
            return new CDOTABroadcastMsg_LANLobbyReply(properties);
        };
    
        /**
         * Encodes the specified CDOTABroadcastMsg_LANLobbyReply message. Does not implicitly {@link CDOTABroadcastMsg_LANLobbyReply.verify|verify} messages.
         * @function encode
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @static
         * @param {ICDOTABroadcastMsg_LANLobbyReply} message CDOTABroadcastMsg_LANLobbyReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDOTABroadcastMsg_LANLobbyReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            if (message.tournament_id != null && Object.hasOwnProperty.call(message, "tournament_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.tournament_id);
            if (message.tournament_game_id != null && Object.hasOwnProperty.call(message, "tournament_game_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.tournament_game_id);
            if (message.members != null && message.members.length)
                for (var i = 0; i < message.members.length; ++i)
                    $root.CDOTABroadcastMsg_LANLobbyReply.CLobbyMember.encode(message.members[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.requires_pass_key != null && Object.hasOwnProperty.call(message, "requires_pass_key"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.requires_pass_key);
            if (message.leader_account_id != null && Object.hasOwnProperty.call(message, "leader_account_id"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.leader_account_id);
            if (message.game_mode != null && Object.hasOwnProperty.call(message, "game_mode"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.game_mode);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.name);
            if (message.players != null && Object.hasOwnProperty.call(message, "players"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.players);
            return writer;
        };
    
        /**
         * Encodes the specified CDOTABroadcastMsg_LANLobbyReply message, length delimited. Does not implicitly {@link CDOTABroadcastMsg_LANLobbyReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @static
         * @param {ICDOTABroadcastMsg_LANLobbyReply} message CDOTABroadcastMsg_LANLobbyReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDOTABroadcastMsg_LANLobbyReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDOTABroadcastMsg_LANLobbyReply message from the specified reader or buffer.
         * @function decode
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDOTABroadcastMsg_LANLobbyReply} CDOTABroadcastMsg_LANLobbyReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDOTABroadcastMsg_LANLobbyReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDOTABroadcastMsg_LANLobbyReply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.tournament_id = reader.uint32();
                    break;
                case 3:
                    message.tournament_game_id = reader.uint32();
                    break;
                case 4:
                    if (!(message.members && message.members.length))
                        message.members = [];
                    message.members.push($root.CDOTABroadcastMsg_LANLobbyReply.CLobbyMember.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.requires_pass_key = reader.bool();
                    break;
                case 6:
                    message.leader_account_id = reader.uint32();
                    break;
                case 7:
                    message.game_mode = reader.uint32();
                    break;
                case 8:
                    message.name = reader.string();
                    break;
                case 9:
                    message.players = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CDOTABroadcastMsg_LANLobbyReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDOTABroadcastMsg_LANLobbyReply} CDOTABroadcastMsg_LANLobbyReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDOTABroadcastMsg_LANLobbyReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDOTABroadcastMsg_LANLobbyReply message.
         * @function verify
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDOTABroadcastMsg_LANLobbyReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.tournament_id != null && message.hasOwnProperty("tournament_id"))
                if (!$util.isInteger(message.tournament_id))
                    return "tournament_id: integer expected";
            if (message.tournament_game_id != null && message.hasOwnProperty("tournament_game_id"))
                if (!$util.isInteger(message.tournament_game_id))
                    return "tournament_game_id: integer expected";
            if (message.members != null && message.hasOwnProperty("members")) {
                if (!Array.isArray(message.members))
                    return "members: array expected";
                for (var i = 0; i < message.members.length; ++i) {
                    var error = $root.CDOTABroadcastMsg_LANLobbyReply.CLobbyMember.verify(message.members[i]);
                    if (error)
                        return "members." + error;
                }
            }
            if (message.requires_pass_key != null && message.hasOwnProperty("requires_pass_key"))
                if (typeof message.requires_pass_key !== "boolean")
                    return "requires_pass_key: boolean expected";
            if (message.leader_account_id != null && message.hasOwnProperty("leader_account_id"))
                if (!$util.isInteger(message.leader_account_id))
                    return "leader_account_id: integer expected";
            if (message.game_mode != null && message.hasOwnProperty("game_mode"))
                if (!$util.isInteger(message.game_mode))
                    return "game_mode: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.players != null && message.hasOwnProperty("players"))
                if (!$util.isInteger(message.players))
                    return "players: integer expected";
            return null;
        };
    
        /**
         * Creates a CDOTABroadcastMsg_LANLobbyReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDOTABroadcastMsg_LANLobbyReply} CDOTABroadcastMsg_LANLobbyReply
         */
        CDOTABroadcastMsg_LANLobbyReply.fromObject = function fromObject(object) {
            if (object instanceof $root.CDOTABroadcastMsg_LANLobbyReply)
                return object;
            var message = new $root.CDOTABroadcastMsg_LANLobbyReply();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.tournament_id != null)
                message.tournament_id = object.tournament_id >>> 0;
            if (object.tournament_game_id != null)
                message.tournament_game_id = object.tournament_game_id >>> 0;
            if (object.members) {
                if (!Array.isArray(object.members))
                    throw TypeError(".CDOTABroadcastMsg_LANLobbyReply.members: array expected");
                message.members = [];
                for (var i = 0; i < object.members.length; ++i) {
                    if (typeof object.members[i] !== "object")
                        throw TypeError(".CDOTABroadcastMsg_LANLobbyReply.members: object expected");
                    message.members[i] = $root.CDOTABroadcastMsg_LANLobbyReply.CLobbyMember.fromObject(object.members[i]);
                }
            }
            if (object.requires_pass_key != null)
                message.requires_pass_key = Boolean(object.requires_pass_key);
            if (object.leader_account_id != null)
                message.leader_account_id = object.leader_account_id >>> 0;
            if (object.game_mode != null)
                message.game_mode = object.game_mode >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.players != null)
                message.players = object.players >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CDOTABroadcastMsg_LANLobbyReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @static
         * @param {CDOTABroadcastMsg_LANLobbyReply} message CDOTABroadcastMsg_LANLobbyReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDOTABroadcastMsg_LANLobbyReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.members = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.tournament_id = 0;
                object.tournament_game_id = 0;
                object.requires_pass_key = false;
                object.leader_account_id = 0;
                object.game_mode = 0;
                object.name = "";
                object.players = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.tournament_id != null && message.hasOwnProperty("tournament_id"))
                object.tournament_id = message.tournament_id;
            if (message.tournament_game_id != null && message.hasOwnProperty("tournament_game_id"))
                object.tournament_game_id = message.tournament_game_id;
            if (message.members && message.members.length) {
                object.members = [];
                for (var j = 0; j < message.members.length; ++j)
                    object.members[j] = $root.CDOTABroadcastMsg_LANLobbyReply.CLobbyMember.toObject(message.members[j], options);
            }
            if (message.requires_pass_key != null && message.hasOwnProperty("requires_pass_key"))
                object.requires_pass_key = message.requires_pass_key;
            if (message.leader_account_id != null && message.hasOwnProperty("leader_account_id"))
                object.leader_account_id = message.leader_account_id;
            if (message.game_mode != null && message.hasOwnProperty("game_mode"))
                object.game_mode = message.game_mode;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.players != null && message.hasOwnProperty("players"))
                object.players = message.players;
            return object;
        };
    
        /**
         * Converts this CDOTABroadcastMsg_LANLobbyReply to JSON.
         * @function toJSON
         * @memberof CDOTABroadcastMsg_LANLobbyReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDOTABroadcastMsg_LANLobbyReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CDOTABroadcastMsg_LANLobbyReply.CLobbyMember = (function() {
    
            /**
             * Properties of a CLobbyMember.
             * @memberof CDOTABroadcastMsg_LANLobbyReply
             * @interface ICLobbyMember
             * @property {number|null} [account_id] CLobbyMember account_id
             * @property {string|null} [player_name] CLobbyMember player_name
             */
    
            /**
             * Constructs a new CLobbyMember.
             * @memberof CDOTABroadcastMsg_LANLobbyReply
             * @classdesc Represents a CLobbyMember.
             * @implements ICLobbyMember
             * @constructor
             * @param {CDOTABroadcastMsg_LANLobbyReply.ICLobbyMember=} [properties] Properties to set
             */
            function CLobbyMember(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CLobbyMember account_id.
             * @member {number} account_id
             * @memberof CDOTABroadcastMsg_LANLobbyReply.CLobbyMember
             * @instance
             */
            CLobbyMember.prototype.account_id = 0;
    
            /**
             * CLobbyMember player_name.
             * @member {string} player_name
             * @memberof CDOTABroadcastMsg_LANLobbyReply.CLobbyMember
             * @instance
             */
            CLobbyMember.prototype.player_name = "";
    
            /**
             * Creates a new CLobbyMember instance using the specified properties.
             * @function create
             * @memberof CDOTABroadcastMsg_LANLobbyReply.CLobbyMember
             * @static
             * @param {CDOTABroadcastMsg_LANLobbyReply.ICLobbyMember=} [properties] Properties to set
             * @returns {CDOTABroadcastMsg_LANLobbyReply.CLobbyMember} CLobbyMember instance
             */
            CLobbyMember.create = function create(properties) {
                return new CLobbyMember(properties);
            };
    
            /**
             * Encodes the specified CLobbyMember message. Does not implicitly {@link CDOTABroadcastMsg_LANLobbyReply.CLobbyMember.verify|verify} messages.
             * @function encode
             * @memberof CDOTABroadcastMsg_LANLobbyReply.CLobbyMember
             * @static
             * @param {CDOTABroadcastMsg_LANLobbyReply.ICLobbyMember} message CLobbyMember message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CLobbyMember.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.account_id);
                if (message.player_name != null && Object.hasOwnProperty.call(message, "player_name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.player_name);
                return writer;
            };
    
            /**
             * Encodes the specified CLobbyMember message, length delimited. Does not implicitly {@link CDOTABroadcastMsg_LANLobbyReply.CLobbyMember.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CDOTABroadcastMsg_LANLobbyReply.CLobbyMember
             * @static
             * @param {CDOTABroadcastMsg_LANLobbyReply.ICLobbyMember} message CLobbyMember message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CLobbyMember.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CLobbyMember message from the specified reader or buffer.
             * @function decode
             * @memberof CDOTABroadcastMsg_LANLobbyReply.CLobbyMember
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CDOTABroadcastMsg_LANLobbyReply.CLobbyMember} CLobbyMember
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CLobbyMember.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDOTABroadcastMsg_LANLobbyReply.CLobbyMember();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.account_id = reader.uint32();
                        break;
                    case 2:
                        message.player_name = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CLobbyMember message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CDOTABroadcastMsg_LANLobbyReply.CLobbyMember
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CDOTABroadcastMsg_LANLobbyReply.CLobbyMember} CLobbyMember
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CLobbyMember.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CLobbyMember message.
             * @function verify
             * @memberof CDOTABroadcastMsg_LANLobbyReply.CLobbyMember
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CLobbyMember.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    if (!$util.isInteger(message.account_id))
                        return "account_id: integer expected";
                if (message.player_name != null && message.hasOwnProperty("player_name"))
                    if (!$util.isString(message.player_name))
                        return "player_name: string expected";
                return null;
            };
    
            /**
             * Creates a CLobbyMember message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CDOTABroadcastMsg_LANLobbyReply.CLobbyMember
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CDOTABroadcastMsg_LANLobbyReply.CLobbyMember} CLobbyMember
             */
            CLobbyMember.fromObject = function fromObject(object) {
                if (object instanceof $root.CDOTABroadcastMsg_LANLobbyReply.CLobbyMember)
                    return object;
                var message = new $root.CDOTABroadcastMsg_LANLobbyReply.CLobbyMember();
                if (object.account_id != null)
                    message.account_id = object.account_id >>> 0;
                if (object.player_name != null)
                    message.player_name = String(object.player_name);
                return message;
            };
    
            /**
             * Creates a plain object from a CLobbyMember message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CDOTABroadcastMsg_LANLobbyReply.CLobbyMember
             * @static
             * @param {CDOTABroadcastMsg_LANLobbyReply.CLobbyMember} message CLobbyMember
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CLobbyMember.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.account_id = 0;
                    object.player_name = "";
                }
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    object.account_id = message.account_id;
                if (message.player_name != null && message.hasOwnProperty("player_name"))
                    object.player_name = message.player_name;
                return object;
            };
    
            /**
             * Converts this CLobbyMember to JSON.
             * @function toJSON
             * @memberof CDOTABroadcastMsg_LANLobbyReply.CLobbyMember
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CLobbyMember.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CLobbyMember;
        })();
    
        return CDOTABroadcastMsg_LANLobbyReply;
    })();

    return $root;
});
