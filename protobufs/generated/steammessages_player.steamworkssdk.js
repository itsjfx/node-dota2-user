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
     * ENotificationSetting enum.
     * @exports ENotificationSetting
     * @enum {number}
     * @property {number} k_ENotificationSettingNotifyUseDefault=0 k_ENotificationSettingNotifyUseDefault value
     * @property {number} k_ENotificationSettingAlways=1 k_ENotificationSettingAlways value
     * @property {number} k_ENotificationSettingNever=2 k_ENotificationSettingNever value
     */
    $root.ENotificationSetting = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ENotificationSettingNotifyUseDefault"] = 0;
        values[valuesById[1] = "k_ENotificationSettingAlways"] = 1;
        values[valuesById[2] = "k_ENotificationSettingNever"] = 2;
        return values;
    })();
    
    $root.CPlayer_GetMutualFriendsForIncomingInvites_Request = (function() {
    
        /**
         * Properties of a CPlayer_GetMutualFriendsForIncomingInvites_Request.
         * @exports ICPlayer_GetMutualFriendsForIncomingInvites_Request
         * @interface ICPlayer_GetMutualFriendsForIncomingInvites_Request
         */
    
        /**
         * Constructs a new CPlayer_GetMutualFriendsForIncomingInvites_Request.
         * @exports CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @classdesc Represents a CPlayer_GetMutualFriendsForIncomingInvites_Request.
         * @implements ICPlayer_GetMutualFriendsForIncomingInvites_Request
         * @constructor
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Request=} [properties] Properties to set
         */
        function CPlayer_GetMutualFriendsForIncomingInvites_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_GetMutualFriendsForIncomingInvites_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @static
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Request=} [properties] Properties to set
         * @returns {CPlayer_GetMutualFriendsForIncomingInvites_Request} CPlayer_GetMutualFriendsForIncomingInvites_Request instance
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.create = function create(properties) {
            return new CPlayer_GetMutualFriendsForIncomingInvites_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetMutualFriendsForIncomingInvites_Request message. Does not implicitly {@link CPlayer_GetMutualFriendsForIncomingInvites_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @static
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Request} message CPlayer_GetMutualFriendsForIncomingInvites_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetMutualFriendsForIncomingInvites_Request message, length delimited. Does not implicitly {@link CPlayer_GetMutualFriendsForIncomingInvites_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @static
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Request} message CPlayer_GetMutualFriendsForIncomingInvites_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetMutualFriendsForIncomingInvites_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetMutualFriendsForIncomingInvites_Request} CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetMutualFriendsForIncomingInvites_Request();
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
         * Decodes a CPlayer_GetMutualFriendsForIncomingInvites_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetMutualFriendsForIncomingInvites_Request} CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetMutualFriendsForIncomingInvites_Request message.
         * @function verify
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetMutualFriendsForIncomingInvites_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetMutualFriendsForIncomingInvites_Request} CPlayer_GetMutualFriendsForIncomingInvites_Request
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetMutualFriendsForIncomingInvites_Request)
                return object;
            return new $root.CPlayer_GetMutualFriendsForIncomingInvites_Request();
        };
    
        /**
         * Creates a plain object from a CPlayer_GetMutualFriendsForIncomingInvites_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @static
         * @param {CPlayer_GetMutualFriendsForIncomingInvites_Request} message CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_GetMutualFriendsForIncomingInvites_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_GetMutualFriendsForIncomingInvites_Request;
    })();
    
    $root.CPlayer_IncomingInviteMutualFriendList = (function() {
    
        /**
         * Properties of a CPlayer_IncomingInviteMutualFriendList.
         * @exports ICPlayer_IncomingInviteMutualFriendList
         * @interface ICPlayer_IncomingInviteMutualFriendList
         * @property {number|Long|null} [steamid] CPlayer_IncomingInviteMutualFriendList steamid
         * @property {Array.<number>|null} [mutual_friend_account_ids] CPlayer_IncomingInviteMutualFriendList mutual_friend_account_ids
         */
    
        /**
         * Constructs a new CPlayer_IncomingInviteMutualFriendList.
         * @exports CPlayer_IncomingInviteMutualFriendList
         * @classdesc Represents a CPlayer_IncomingInviteMutualFriendList.
         * @implements ICPlayer_IncomingInviteMutualFriendList
         * @constructor
         * @param {ICPlayer_IncomingInviteMutualFriendList=} [properties] Properties to set
         */
        function CPlayer_IncomingInviteMutualFriendList(properties) {
            this.mutual_friend_account_ids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_IncomingInviteMutualFriendList steamid.
         * @member {number|Long} steamid
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @instance
         */
        CPlayer_IncomingInviteMutualFriendList.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CPlayer_IncomingInviteMutualFriendList mutual_friend_account_ids.
         * @member {Array.<number>} mutual_friend_account_ids
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @instance
         */
        CPlayer_IncomingInviteMutualFriendList.prototype.mutual_friend_account_ids = $util.emptyArray;
    
        /**
         * Creates a new CPlayer_IncomingInviteMutualFriendList instance using the specified properties.
         * @function create
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @static
         * @param {ICPlayer_IncomingInviteMutualFriendList=} [properties] Properties to set
         * @returns {CPlayer_IncomingInviteMutualFriendList} CPlayer_IncomingInviteMutualFriendList instance
         */
        CPlayer_IncomingInviteMutualFriendList.create = function create(properties) {
            return new CPlayer_IncomingInviteMutualFriendList(properties);
        };
    
        /**
         * Encodes the specified CPlayer_IncomingInviteMutualFriendList message. Does not implicitly {@link CPlayer_IncomingInviteMutualFriendList.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @static
         * @param {ICPlayer_IncomingInviteMutualFriendList} message CPlayer_IncomingInviteMutualFriendList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_IncomingInviteMutualFriendList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.mutual_friend_account_ids != null && message.mutual_friend_account_ids.length)
                for (var i = 0; i < message.mutual_friend_account_ids.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.mutual_friend_account_ids[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_IncomingInviteMutualFriendList message, length delimited. Does not implicitly {@link CPlayer_IncomingInviteMutualFriendList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @static
         * @param {ICPlayer_IncomingInviteMutualFriendList} message CPlayer_IncomingInviteMutualFriendList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_IncomingInviteMutualFriendList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_IncomingInviteMutualFriendList message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_IncomingInviteMutualFriendList} CPlayer_IncomingInviteMutualFriendList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_IncomingInviteMutualFriendList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_IncomingInviteMutualFriendList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    if (!(message.mutual_friend_account_ids && message.mutual_friend_account_ids.length))
                        message.mutual_friend_account_ids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.mutual_friend_account_ids.push(reader.uint32());
                    } else
                        message.mutual_friend_account_ids.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_IncomingInviteMutualFriendList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_IncomingInviteMutualFriendList} CPlayer_IncomingInviteMutualFriendList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_IncomingInviteMutualFriendList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_IncomingInviteMutualFriendList message.
         * @function verify
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_IncomingInviteMutualFriendList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.mutual_friend_account_ids != null && message.hasOwnProperty("mutual_friend_account_ids")) {
                if (!Array.isArray(message.mutual_friend_account_ids))
                    return "mutual_friend_account_ids: array expected";
                for (var i = 0; i < message.mutual_friend_account_ids.length; ++i)
                    if (!$util.isInteger(message.mutual_friend_account_ids[i]))
                        return "mutual_friend_account_ids: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_IncomingInviteMutualFriendList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_IncomingInviteMutualFriendList} CPlayer_IncomingInviteMutualFriendList
         */
        CPlayer_IncomingInviteMutualFriendList.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_IncomingInviteMutualFriendList)
                return object;
            var message = new $root.CPlayer_IncomingInviteMutualFriendList();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.mutual_friend_account_ids) {
                if (!Array.isArray(object.mutual_friend_account_ids))
                    throw TypeError(".CPlayer_IncomingInviteMutualFriendList.mutual_friend_account_ids: array expected");
                message.mutual_friend_account_ids = [];
                for (var i = 0; i < object.mutual_friend_account_ids.length; ++i)
                    message.mutual_friend_account_ids[i] = object.mutual_friend_account_ids[i] >>> 0;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_IncomingInviteMutualFriendList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @static
         * @param {CPlayer_IncomingInviteMutualFriendList} message CPlayer_IncomingInviteMutualFriendList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_IncomingInviteMutualFriendList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.mutual_friend_account_ids = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.mutual_friend_account_ids && message.mutual_friend_account_ids.length) {
                object.mutual_friend_account_ids = [];
                for (var j = 0; j < message.mutual_friend_account_ids.length; ++j)
                    object.mutual_friend_account_ids[j] = message.mutual_friend_account_ids[j];
            }
            return object;
        };
    
        /**
         * Converts this CPlayer_IncomingInviteMutualFriendList to JSON.
         * @function toJSON
         * @memberof CPlayer_IncomingInviteMutualFriendList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_IncomingInviteMutualFriendList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_IncomingInviteMutualFriendList;
    })();
    
    $root.CPlayer_GetMutualFriendsForIncomingInvites_Response = (function() {
    
        /**
         * Properties of a CPlayer_GetMutualFriendsForIncomingInvites_Response.
         * @exports ICPlayer_GetMutualFriendsForIncomingInvites_Response
         * @interface ICPlayer_GetMutualFriendsForIncomingInvites_Response
         * @property {Array.<ICPlayer_IncomingInviteMutualFriendList>|null} [incoming_invite_mutual_friends_lists] CPlayer_GetMutualFriendsForIncomingInvites_Response incoming_invite_mutual_friends_lists
         */
    
        /**
         * Constructs a new CPlayer_GetMutualFriendsForIncomingInvites_Response.
         * @exports CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @classdesc Represents a CPlayer_GetMutualFriendsForIncomingInvites_Response.
         * @implements ICPlayer_GetMutualFriendsForIncomingInvites_Response
         * @constructor
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Response=} [properties] Properties to set
         */
        function CPlayer_GetMutualFriendsForIncomingInvites_Response(properties) {
            this.incoming_invite_mutual_friends_lists = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetMutualFriendsForIncomingInvites_Response incoming_invite_mutual_friends_lists.
         * @member {Array.<ICPlayer_IncomingInviteMutualFriendList>} incoming_invite_mutual_friends_lists
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @instance
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.prototype.incoming_invite_mutual_friends_lists = $util.emptyArray;
    
        /**
         * Creates a new CPlayer_GetMutualFriendsForIncomingInvites_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @static
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Response=} [properties] Properties to set
         * @returns {CPlayer_GetMutualFriendsForIncomingInvites_Response} CPlayer_GetMutualFriendsForIncomingInvites_Response instance
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.create = function create(properties) {
            return new CPlayer_GetMutualFriendsForIncomingInvites_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetMutualFriendsForIncomingInvites_Response message. Does not implicitly {@link CPlayer_GetMutualFriendsForIncomingInvites_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @static
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Response} message CPlayer_GetMutualFriendsForIncomingInvites_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.incoming_invite_mutual_friends_lists != null && message.incoming_invite_mutual_friends_lists.length)
                for (var i = 0; i < message.incoming_invite_mutual_friends_lists.length; ++i)
                    $root.CPlayer_IncomingInviteMutualFriendList.encode(message.incoming_invite_mutual_friends_lists[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetMutualFriendsForIncomingInvites_Response message, length delimited. Does not implicitly {@link CPlayer_GetMutualFriendsForIncomingInvites_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @static
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Response} message CPlayer_GetMutualFriendsForIncomingInvites_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetMutualFriendsForIncomingInvites_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetMutualFriendsForIncomingInvites_Response} CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetMutualFriendsForIncomingInvites_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.incoming_invite_mutual_friends_lists && message.incoming_invite_mutual_friends_lists.length))
                        message.incoming_invite_mutual_friends_lists = [];
                    message.incoming_invite_mutual_friends_lists.push($root.CPlayer_IncomingInviteMutualFriendList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_GetMutualFriendsForIncomingInvites_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetMutualFriendsForIncomingInvites_Response} CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetMutualFriendsForIncomingInvites_Response message.
         * @function verify
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.incoming_invite_mutual_friends_lists != null && message.hasOwnProperty("incoming_invite_mutual_friends_lists")) {
                if (!Array.isArray(message.incoming_invite_mutual_friends_lists))
                    return "incoming_invite_mutual_friends_lists: array expected";
                for (var i = 0; i < message.incoming_invite_mutual_friends_lists.length; ++i) {
                    var error = $root.CPlayer_IncomingInviteMutualFriendList.verify(message.incoming_invite_mutual_friends_lists[i]);
                    if (error)
                        return "incoming_invite_mutual_friends_lists." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_GetMutualFriendsForIncomingInvites_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetMutualFriendsForIncomingInvites_Response} CPlayer_GetMutualFriendsForIncomingInvites_Response
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetMutualFriendsForIncomingInvites_Response)
                return object;
            var message = new $root.CPlayer_GetMutualFriendsForIncomingInvites_Response();
            if (object.incoming_invite_mutual_friends_lists) {
                if (!Array.isArray(object.incoming_invite_mutual_friends_lists))
                    throw TypeError(".CPlayer_GetMutualFriendsForIncomingInvites_Response.incoming_invite_mutual_friends_lists: array expected");
                message.incoming_invite_mutual_friends_lists = [];
                for (var i = 0; i < object.incoming_invite_mutual_friends_lists.length; ++i) {
                    if (typeof object.incoming_invite_mutual_friends_lists[i] !== "object")
                        throw TypeError(".CPlayer_GetMutualFriendsForIncomingInvites_Response.incoming_invite_mutual_friends_lists: object expected");
                    message.incoming_invite_mutual_friends_lists[i] = $root.CPlayer_IncomingInviteMutualFriendList.fromObject(object.incoming_invite_mutual_friends_lists[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetMutualFriendsForIncomingInvites_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @static
         * @param {CPlayer_GetMutualFriendsForIncomingInvites_Response} message CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.incoming_invite_mutual_friends_lists = [];
            if (message.incoming_invite_mutual_friends_lists && message.incoming_invite_mutual_friends_lists.length) {
                object.incoming_invite_mutual_friends_lists = [];
                for (var j = 0; j < message.incoming_invite_mutual_friends_lists.length; ++j)
                    object.incoming_invite_mutual_friends_lists[j] = $root.CPlayer_IncomingInviteMutualFriendList.toObject(message.incoming_invite_mutual_friends_lists[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CPlayer_GetMutualFriendsForIncomingInvites_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetMutualFriendsForIncomingInvites_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_GetMutualFriendsForIncomingInvites_Response;
    })();
    
    $root.CPlayer_GetFriendsGameplayInfo_Request = (function() {
    
        /**
         * Properties of a CPlayer_GetFriendsGameplayInfo_Request.
         * @exports ICPlayer_GetFriendsGameplayInfo_Request
         * @interface ICPlayer_GetFriendsGameplayInfo_Request
         * @property {number|null} [appid] CPlayer_GetFriendsGameplayInfo_Request appid
         */
    
        /**
         * Constructs a new CPlayer_GetFriendsGameplayInfo_Request.
         * @exports CPlayer_GetFriendsGameplayInfo_Request
         * @classdesc Represents a CPlayer_GetFriendsGameplayInfo_Request.
         * @implements ICPlayer_GetFriendsGameplayInfo_Request
         * @constructor
         * @param {ICPlayer_GetFriendsGameplayInfo_Request=} [properties] Properties to set
         */
        function CPlayer_GetFriendsGameplayInfo_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetFriendsGameplayInfo_Request appid.
         * @member {number} appid
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @instance
         */
        CPlayer_GetFriendsGameplayInfo_Request.prototype.appid = 0;
    
        /**
         * Creates a new CPlayer_GetFriendsGameplayInfo_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @static
         * @param {ICPlayer_GetFriendsGameplayInfo_Request=} [properties] Properties to set
         * @returns {CPlayer_GetFriendsGameplayInfo_Request} CPlayer_GetFriendsGameplayInfo_Request instance
         */
        CPlayer_GetFriendsGameplayInfo_Request.create = function create(properties) {
            return new CPlayer_GetFriendsGameplayInfo_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetFriendsGameplayInfo_Request message. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @static
         * @param {ICPlayer_GetFriendsGameplayInfo_Request} message CPlayer_GetFriendsGameplayInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetFriendsGameplayInfo_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetFriendsGameplayInfo_Request message, length delimited. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @static
         * @param {ICPlayer_GetFriendsGameplayInfo_Request} message CPlayer_GetFriendsGameplayInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetFriendsGameplayInfo_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetFriendsGameplayInfo_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetFriendsGameplayInfo_Request} CPlayer_GetFriendsGameplayInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetFriendsGameplayInfo_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetFriendsGameplayInfo_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_GetFriendsGameplayInfo_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetFriendsGameplayInfo_Request} CPlayer_GetFriendsGameplayInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetFriendsGameplayInfo_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetFriendsGameplayInfo_Request message.
         * @function verify
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetFriendsGameplayInfo_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetFriendsGameplayInfo_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetFriendsGameplayInfo_Request} CPlayer_GetFriendsGameplayInfo_Request
         */
        CPlayer_GetFriendsGameplayInfo_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetFriendsGameplayInfo_Request)
                return object;
            var message = new $root.CPlayer_GetFriendsGameplayInfo_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetFriendsGameplayInfo_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @static
         * @param {CPlayer_GetFriendsGameplayInfo_Request} message CPlayer_GetFriendsGameplayInfo_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetFriendsGameplayInfo_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.appid = 0;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            return object;
        };
    
        /**
         * Converts this CPlayer_GetFriendsGameplayInfo_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_GetFriendsGameplayInfo_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetFriendsGameplayInfo_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_GetFriendsGameplayInfo_Request;
    })();
    
    $root.CPlayer_GetFriendsGameplayInfo_Response = (function() {
    
        /**
         * Properties of a CPlayer_GetFriendsGameplayInfo_Response.
         * @exports ICPlayer_GetFriendsGameplayInfo_Response
         * @interface ICPlayer_GetFriendsGameplayInfo_Response
         * @property {CPlayer_GetFriendsGameplayInfo_Response.IOwnGameplayInfo|null} [your_info] CPlayer_GetFriendsGameplayInfo_Response your_info
         * @property {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>|null} [in_game] CPlayer_GetFriendsGameplayInfo_Response in_game
         * @property {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>|null} [played_recently] CPlayer_GetFriendsGameplayInfo_Response played_recently
         * @property {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>|null} [played_ever] CPlayer_GetFriendsGameplayInfo_Response played_ever
         * @property {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>|null} [owns] CPlayer_GetFriendsGameplayInfo_Response owns
         * @property {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>|null} [in_wishlist] CPlayer_GetFriendsGameplayInfo_Response in_wishlist
         */
    
        /**
         * Constructs a new CPlayer_GetFriendsGameplayInfo_Response.
         * @exports CPlayer_GetFriendsGameplayInfo_Response
         * @classdesc Represents a CPlayer_GetFriendsGameplayInfo_Response.
         * @implements ICPlayer_GetFriendsGameplayInfo_Response
         * @constructor
         * @param {ICPlayer_GetFriendsGameplayInfo_Response=} [properties] Properties to set
         */
        function CPlayer_GetFriendsGameplayInfo_Response(properties) {
            this.in_game = [];
            this.played_recently = [];
            this.played_ever = [];
            this.owns = [];
            this.in_wishlist = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetFriendsGameplayInfo_Response your_info.
         * @member {CPlayer_GetFriendsGameplayInfo_Response.IOwnGameplayInfo|null|undefined} your_info
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @instance
         */
        CPlayer_GetFriendsGameplayInfo_Response.prototype.your_info = null;
    
        /**
         * CPlayer_GetFriendsGameplayInfo_Response in_game.
         * @member {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>} in_game
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @instance
         */
        CPlayer_GetFriendsGameplayInfo_Response.prototype.in_game = $util.emptyArray;
    
        /**
         * CPlayer_GetFriendsGameplayInfo_Response played_recently.
         * @member {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>} played_recently
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @instance
         */
        CPlayer_GetFriendsGameplayInfo_Response.prototype.played_recently = $util.emptyArray;
    
        /**
         * CPlayer_GetFriendsGameplayInfo_Response played_ever.
         * @member {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>} played_ever
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @instance
         */
        CPlayer_GetFriendsGameplayInfo_Response.prototype.played_ever = $util.emptyArray;
    
        /**
         * CPlayer_GetFriendsGameplayInfo_Response owns.
         * @member {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>} owns
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @instance
         */
        CPlayer_GetFriendsGameplayInfo_Response.prototype.owns = $util.emptyArray;
    
        /**
         * CPlayer_GetFriendsGameplayInfo_Response in_wishlist.
         * @member {Array.<CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo>} in_wishlist
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @instance
         */
        CPlayer_GetFriendsGameplayInfo_Response.prototype.in_wishlist = $util.emptyArray;
    
        /**
         * Creates a new CPlayer_GetFriendsGameplayInfo_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @static
         * @param {ICPlayer_GetFriendsGameplayInfo_Response=} [properties] Properties to set
         * @returns {CPlayer_GetFriendsGameplayInfo_Response} CPlayer_GetFriendsGameplayInfo_Response instance
         */
        CPlayer_GetFriendsGameplayInfo_Response.create = function create(properties) {
            return new CPlayer_GetFriendsGameplayInfo_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetFriendsGameplayInfo_Response message. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @static
         * @param {ICPlayer_GetFriendsGameplayInfo_Response} message CPlayer_GetFriendsGameplayInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetFriendsGameplayInfo_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.your_info != null && Object.hasOwnProperty.call(message, "your_info"))
                $root.CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo.encode(message.your_info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.in_game != null && message.in_game.length)
                for (var i = 0; i < message.in_game.length; ++i)
                    $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.encode(message.in_game[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.played_recently != null && message.played_recently.length)
                for (var i = 0; i < message.played_recently.length; ++i)
                    $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.encode(message.played_recently[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.played_ever != null && message.played_ever.length)
                for (var i = 0; i < message.played_ever.length; ++i)
                    $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.encode(message.played_ever[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.owns != null && message.owns.length)
                for (var i = 0; i < message.owns.length; ++i)
                    $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.encode(message.owns[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.in_wishlist != null && message.in_wishlist.length)
                for (var i = 0; i < message.in_wishlist.length; ++i)
                    $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.encode(message.in_wishlist[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetFriendsGameplayInfo_Response message, length delimited. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @static
         * @param {ICPlayer_GetFriendsGameplayInfo_Response} message CPlayer_GetFriendsGameplayInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetFriendsGameplayInfo_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetFriendsGameplayInfo_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetFriendsGameplayInfo_Response} CPlayer_GetFriendsGameplayInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetFriendsGameplayInfo_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetFriendsGameplayInfo_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.your_info = $root.CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.in_game && message.in_game.length))
                        message.in_game = [];
                    message.in_game.push($root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.played_recently && message.played_recently.length))
                        message.played_recently = [];
                    message.played_recently.push($root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.played_ever && message.played_ever.length))
                        message.played_ever = [];
                    message.played_ever.push($root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.owns && message.owns.length))
                        message.owns = [];
                    message.owns.push($root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.in_wishlist && message.in_wishlist.length))
                        message.in_wishlist = [];
                    message.in_wishlist.push($root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_GetFriendsGameplayInfo_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetFriendsGameplayInfo_Response} CPlayer_GetFriendsGameplayInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetFriendsGameplayInfo_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetFriendsGameplayInfo_Response message.
         * @function verify
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetFriendsGameplayInfo_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.your_info != null && message.hasOwnProperty("your_info")) {
                var error = $root.CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo.verify(message.your_info);
                if (error)
                    return "your_info." + error;
            }
            if (message.in_game != null && message.hasOwnProperty("in_game")) {
                if (!Array.isArray(message.in_game))
                    return "in_game: array expected";
                for (var i = 0; i < message.in_game.length; ++i) {
                    var error = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.verify(message.in_game[i]);
                    if (error)
                        return "in_game." + error;
                }
            }
            if (message.played_recently != null && message.hasOwnProperty("played_recently")) {
                if (!Array.isArray(message.played_recently))
                    return "played_recently: array expected";
                for (var i = 0; i < message.played_recently.length; ++i) {
                    var error = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.verify(message.played_recently[i]);
                    if (error)
                        return "played_recently." + error;
                }
            }
            if (message.played_ever != null && message.hasOwnProperty("played_ever")) {
                if (!Array.isArray(message.played_ever))
                    return "played_ever: array expected";
                for (var i = 0; i < message.played_ever.length; ++i) {
                    var error = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.verify(message.played_ever[i]);
                    if (error)
                        return "played_ever." + error;
                }
            }
            if (message.owns != null && message.hasOwnProperty("owns")) {
                if (!Array.isArray(message.owns))
                    return "owns: array expected";
                for (var i = 0; i < message.owns.length; ++i) {
                    var error = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.verify(message.owns[i]);
                    if (error)
                        return "owns." + error;
                }
            }
            if (message.in_wishlist != null && message.hasOwnProperty("in_wishlist")) {
                if (!Array.isArray(message.in_wishlist))
                    return "in_wishlist: array expected";
                for (var i = 0; i < message.in_wishlist.length; ++i) {
                    var error = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.verify(message.in_wishlist[i]);
                    if (error)
                        return "in_wishlist." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_GetFriendsGameplayInfo_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetFriendsGameplayInfo_Response} CPlayer_GetFriendsGameplayInfo_Response
         */
        CPlayer_GetFriendsGameplayInfo_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetFriendsGameplayInfo_Response)
                return object;
            var message = new $root.CPlayer_GetFriendsGameplayInfo_Response();
            if (object.your_info != null) {
                if (typeof object.your_info !== "object")
                    throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.your_info: object expected");
                message.your_info = $root.CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo.fromObject(object.your_info);
            }
            if (object.in_game) {
                if (!Array.isArray(object.in_game))
                    throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.in_game: array expected");
                message.in_game = [];
                for (var i = 0; i < object.in_game.length; ++i) {
                    if (typeof object.in_game[i] !== "object")
                        throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.in_game: object expected");
                    message.in_game[i] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.fromObject(object.in_game[i]);
                }
            }
            if (object.played_recently) {
                if (!Array.isArray(object.played_recently))
                    throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.played_recently: array expected");
                message.played_recently = [];
                for (var i = 0; i < object.played_recently.length; ++i) {
                    if (typeof object.played_recently[i] !== "object")
                        throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.played_recently: object expected");
                    message.played_recently[i] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.fromObject(object.played_recently[i]);
                }
            }
            if (object.played_ever) {
                if (!Array.isArray(object.played_ever))
                    throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.played_ever: array expected");
                message.played_ever = [];
                for (var i = 0; i < object.played_ever.length; ++i) {
                    if (typeof object.played_ever[i] !== "object")
                        throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.played_ever: object expected");
                    message.played_ever[i] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.fromObject(object.played_ever[i]);
                }
            }
            if (object.owns) {
                if (!Array.isArray(object.owns))
                    throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.owns: array expected");
                message.owns = [];
                for (var i = 0; i < object.owns.length; ++i) {
                    if (typeof object.owns[i] !== "object")
                        throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.owns: object expected");
                    message.owns[i] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.fromObject(object.owns[i]);
                }
            }
            if (object.in_wishlist) {
                if (!Array.isArray(object.in_wishlist))
                    throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.in_wishlist: array expected");
                message.in_wishlist = [];
                for (var i = 0; i < object.in_wishlist.length; ++i) {
                    if (typeof object.in_wishlist[i] !== "object")
                        throw TypeError(".CPlayer_GetFriendsGameplayInfo_Response.in_wishlist: object expected");
                    message.in_wishlist[i] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.fromObject(object.in_wishlist[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetFriendsGameplayInfo_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @static
         * @param {CPlayer_GetFriendsGameplayInfo_Response} message CPlayer_GetFriendsGameplayInfo_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetFriendsGameplayInfo_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.in_game = [];
                object.played_recently = [];
                object.played_ever = [];
                object.owns = [];
                object.in_wishlist = [];
            }
            if (options.defaults)
                object.your_info = null;
            if (message.your_info != null && message.hasOwnProperty("your_info"))
                object.your_info = $root.CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo.toObject(message.your_info, options);
            if (message.in_game && message.in_game.length) {
                object.in_game = [];
                for (var j = 0; j < message.in_game.length; ++j)
                    object.in_game[j] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.toObject(message.in_game[j], options);
            }
            if (message.played_recently && message.played_recently.length) {
                object.played_recently = [];
                for (var j = 0; j < message.played_recently.length; ++j)
                    object.played_recently[j] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.toObject(message.played_recently[j], options);
            }
            if (message.played_ever && message.played_ever.length) {
                object.played_ever = [];
                for (var j = 0; j < message.played_ever.length; ++j)
                    object.played_ever[j] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.toObject(message.played_ever[j], options);
            }
            if (message.owns && message.owns.length) {
                object.owns = [];
                for (var j = 0; j < message.owns.length; ++j)
                    object.owns[j] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.toObject(message.owns[j], options);
            }
            if (message.in_wishlist && message.in_wishlist.length) {
                object.in_wishlist = [];
                for (var j = 0; j < message.in_wishlist.length; ++j)
                    object.in_wishlist[j] = $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.toObject(message.in_wishlist[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CPlayer_GetFriendsGameplayInfo_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_GetFriendsGameplayInfo_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetFriendsGameplayInfo_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo = (function() {
    
            /**
             * Properties of a FriendsGameplayInfo.
             * @memberof CPlayer_GetFriendsGameplayInfo_Response
             * @interface IFriendsGameplayInfo
             * @property {number|Long|null} [steamid] FriendsGameplayInfo steamid
             * @property {number|null} [minutes_played] FriendsGameplayInfo minutes_played
             * @property {number|null} [minutes_played_forever] FriendsGameplayInfo minutes_played_forever
             */
    
            /**
             * Constructs a new FriendsGameplayInfo.
             * @memberof CPlayer_GetFriendsGameplayInfo_Response
             * @classdesc Represents a FriendsGameplayInfo.
             * @implements IFriendsGameplayInfo
             * @constructor
             * @param {CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo=} [properties] Properties to set
             */
            function FriendsGameplayInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FriendsGameplayInfo steamid.
             * @member {number|Long} steamid
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @instance
             */
            FriendsGameplayInfo.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * FriendsGameplayInfo minutes_played.
             * @member {number} minutes_played
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @instance
             */
            FriendsGameplayInfo.prototype.minutes_played = 0;
    
            /**
             * FriendsGameplayInfo minutes_played_forever.
             * @member {number} minutes_played_forever
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @instance
             */
            FriendsGameplayInfo.prototype.minutes_played_forever = 0;
    
            /**
             * Creates a new FriendsGameplayInfo instance using the specified properties.
             * @function create
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @static
             * @param {CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo=} [properties] Properties to set
             * @returns {CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo} FriendsGameplayInfo instance
             */
            FriendsGameplayInfo.create = function create(properties) {
                return new FriendsGameplayInfo(properties);
            };
    
            /**
             * Encodes the specified FriendsGameplayInfo message. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.verify|verify} messages.
             * @function encode
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @static
             * @param {CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo} message FriendsGameplayInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FriendsGameplayInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                    writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
                if (message.minutes_played != null && Object.hasOwnProperty.call(message, "minutes_played"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.minutes_played);
                if (message.minutes_played_forever != null && Object.hasOwnProperty.call(message, "minutes_played_forever"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.minutes_played_forever);
                return writer;
            };
    
            /**
             * Encodes the specified FriendsGameplayInfo message, length delimited. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @static
             * @param {CPlayer_GetFriendsGameplayInfo_Response.IFriendsGameplayInfo} message FriendsGameplayInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FriendsGameplayInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a FriendsGameplayInfo message from the specified reader or buffer.
             * @function decode
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo} FriendsGameplayInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FriendsGameplayInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.steamid = reader.fixed64();
                        break;
                    case 2:
                        message.minutes_played = reader.uint32();
                        break;
                    case 3:
                        message.minutes_played_forever = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a FriendsGameplayInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo} FriendsGameplayInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FriendsGameplayInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FriendsGameplayInfo message.
             * @function verify
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FriendsGameplayInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                        return "steamid: integer|Long expected";
                if (message.minutes_played != null && message.hasOwnProperty("minutes_played"))
                    if (!$util.isInteger(message.minutes_played))
                        return "minutes_played: integer expected";
                if (message.minutes_played_forever != null && message.hasOwnProperty("minutes_played_forever"))
                    if (!$util.isInteger(message.minutes_played_forever))
                        return "minutes_played_forever: integer expected";
                return null;
            };
    
            /**
             * Creates a FriendsGameplayInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo} FriendsGameplayInfo
             */
            FriendsGameplayInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo)
                    return object;
                var message = new $root.CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo();
                if (object.steamid != null)
                    if ($util.Long)
                        (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                    else if (typeof object.steamid === "string")
                        message.steamid = parseInt(object.steamid, 10);
                    else if (typeof object.steamid === "number")
                        message.steamid = object.steamid;
                    else if (typeof object.steamid === "object")
                        message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
                if (object.minutes_played != null)
                    message.minutes_played = object.minutes_played >>> 0;
                if (object.minutes_played_forever != null)
                    message.minutes_played_forever = object.minutes_played_forever >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a FriendsGameplayInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @static
             * @param {CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo} message FriendsGameplayInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FriendsGameplayInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.steamid = options.longs === String ? "0" : 0;
                    object.minutes_played = 0;
                    object.minutes_played_forever = 0;
                }
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (typeof message.steamid === "number")
                        object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                    else
                        object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
                if (message.minutes_played != null && message.hasOwnProperty("minutes_played"))
                    object.minutes_played = message.minutes_played;
                if (message.minutes_played_forever != null && message.hasOwnProperty("minutes_played_forever"))
                    object.minutes_played_forever = message.minutes_played_forever;
                return object;
            };
    
            /**
             * Converts this FriendsGameplayInfo to JSON.
             * @function toJSON
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FriendsGameplayInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return FriendsGameplayInfo;
        })();
    
        CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo = (function() {
    
            /**
             * Properties of an OwnGameplayInfo.
             * @memberof CPlayer_GetFriendsGameplayInfo_Response
             * @interface IOwnGameplayInfo
             * @property {number|Long|null} [steamid] OwnGameplayInfo steamid
             * @property {number|null} [minutes_played] OwnGameplayInfo minutes_played
             * @property {number|null} [minutes_played_forever] OwnGameplayInfo minutes_played_forever
             * @property {boolean|null} [in_wishlist] OwnGameplayInfo in_wishlist
             * @property {boolean|null} [owned] OwnGameplayInfo owned
             */
    
            /**
             * Constructs a new OwnGameplayInfo.
             * @memberof CPlayer_GetFriendsGameplayInfo_Response
             * @classdesc Represents an OwnGameplayInfo.
             * @implements IOwnGameplayInfo
             * @constructor
             * @param {CPlayer_GetFriendsGameplayInfo_Response.IOwnGameplayInfo=} [properties] Properties to set
             */
            function OwnGameplayInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * OwnGameplayInfo steamid.
             * @member {number|Long} steamid
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @instance
             */
            OwnGameplayInfo.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * OwnGameplayInfo minutes_played.
             * @member {number} minutes_played
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @instance
             */
            OwnGameplayInfo.prototype.minutes_played = 0;
    
            /**
             * OwnGameplayInfo minutes_played_forever.
             * @member {number} minutes_played_forever
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @instance
             */
            OwnGameplayInfo.prototype.minutes_played_forever = 0;
    
            /**
             * OwnGameplayInfo in_wishlist.
             * @member {boolean} in_wishlist
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @instance
             */
            OwnGameplayInfo.prototype.in_wishlist = false;
    
            /**
             * OwnGameplayInfo owned.
             * @member {boolean} owned
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @instance
             */
            OwnGameplayInfo.prototype.owned = false;
    
            /**
             * Creates a new OwnGameplayInfo instance using the specified properties.
             * @function create
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @static
             * @param {CPlayer_GetFriendsGameplayInfo_Response.IOwnGameplayInfo=} [properties] Properties to set
             * @returns {CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo} OwnGameplayInfo instance
             */
            OwnGameplayInfo.create = function create(properties) {
                return new OwnGameplayInfo(properties);
            };
    
            /**
             * Encodes the specified OwnGameplayInfo message. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo.verify|verify} messages.
             * @function encode
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @static
             * @param {CPlayer_GetFriendsGameplayInfo_Response.IOwnGameplayInfo} message OwnGameplayInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnGameplayInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                    writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
                if (message.minutes_played != null && Object.hasOwnProperty.call(message, "minutes_played"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.minutes_played);
                if (message.minutes_played_forever != null && Object.hasOwnProperty.call(message, "minutes_played_forever"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.minutes_played_forever);
                if (message.in_wishlist != null && Object.hasOwnProperty.call(message, "in_wishlist"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.in_wishlist);
                if (message.owned != null && Object.hasOwnProperty.call(message, "owned"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.owned);
                return writer;
            };
    
            /**
             * Encodes the specified OwnGameplayInfo message, length delimited. Does not implicitly {@link CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @static
             * @param {CPlayer_GetFriendsGameplayInfo_Response.IOwnGameplayInfo} message OwnGameplayInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OwnGameplayInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an OwnGameplayInfo message from the specified reader or buffer.
             * @function decode
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo} OwnGameplayInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnGameplayInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.steamid = reader.fixed64();
                        break;
                    case 2:
                        message.minutes_played = reader.uint32();
                        break;
                    case 3:
                        message.minutes_played_forever = reader.uint32();
                        break;
                    case 4:
                        message.in_wishlist = reader.bool();
                        break;
                    case 5:
                        message.owned = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an OwnGameplayInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo} OwnGameplayInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OwnGameplayInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an OwnGameplayInfo message.
             * @function verify
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OwnGameplayInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                        return "steamid: integer|Long expected";
                if (message.minutes_played != null && message.hasOwnProperty("minutes_played"))
                    if (!$util.isInteger(message.minutes_played))
                        return "minutes_played: integer expected";
                if (message.minutes_played_forever != null && message.hasOwnProperty("minutes_played_forever"))
                    if (!$util.isInteger(message.minutes_played_forever))
                        return "minutes_played_forever: integer expected";
                if (message.in_wishlist != null && message.hasOwnProperty("in_wishlist"))
                    if (typeof message.in_wishlist !== "boolean")
                        return "in_wishlist: boolean expected";
                if (message.owned != null && message.hasOwnProperty("owned"))
                    if (typeof message.owned !== "boolean")
                        return "owned: boolean expected";
                return null;
            };
    
            /**
             * Creates an OwnGameplayInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo} OwnGameplayInfo
             */
            OwnGameplayInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo)
                    return object;
                var message = new $root.CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo();
                if (object.steamid != null)
                    if ($util.Long)
                        (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                    else if (typeof object.steamid === "string")
                        message.steamid = parseInt(object.steamid, 10);
                    else if (typeof object.steamid === "number")
                        message.steamid = object.steamid;
                    else if (typeof object.steamid === "object")
                        message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
                if (object.minutes_played != null)
                    message.minutes_played = object.minutes_played >>> 0;
                if (object.minutes_played_forever != null)
                    message.minutes_played_forever = object.minutes_played_forever >>> 0;
                if (object.in_wishlist != null)
                    message.in_wishlist = Boolean(object.in_wishlist);
                if (object.owned != null)
                    message.owned = Boolean(object.owned);
                return message;
            };
    
            /**
             * Creates a plain object from an OwnGameplayInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @static
             * @param {CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo} message OwnGameplayInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OwnGameplayInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.steamid = options.longs === String ? "0" : 0;
                    object.minutes_played = 0;
                    object.minutes_played_forever = 0;
                    object.in_wishlist = false;
                    object.owned = false;
                }
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (typeof message.steamid === "number")
                        object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                    else
                        object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
                if (message.minutes_played != null && message.hasOwnProperty("minutes_played"))
                    object.minutes_played = message.minutes_played;
                if (message.minutes_played_forever != null && message.hasOwnProperty("minutes_played_forever"))
                    object.minutes_played_forever = message.minutes_played_forever;
                if (message.in_wishlist != null && message.hasOwnProperty("in_wishlist"))
                    object.in_wishlist = message.in_wishlist;
                if (message.owned != null && message.hasOwnProperty("owned"))
                    object.owned = message.owned;
                return object;
            };
    
            /**
             * Converts this OwnGameplayInfo to JSON.
             * @function toJSON
             * @memberof CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OwnGameplayInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return OwnGameplayInfo;
        })();
    
        return CPlayer_GetFriendsGameplayInfo_Response;
    })();
    
    $root.CPlayer_GetGameBadgeLevels_Request = (function() {
    
        /**
         * Properties of a CPlayer_GetGameBadgeLevels_Request.
         * @exports ICPlayer_GetGameBadgeLevels_Request
         * @interface ICPlayer_GetGameBadgeLevels_Request
         * @property {number|null} [appid] CPlayer_GetGameBadgeLevels_Request appid
         */
    
        /**
         * Constructs a new CPlayer_GetGameBadgeLevels_Request.
         * @exports CPlayer_GetGameBadgeLevels_Request
         * @classdesc Represents a CPlayer_GetGameBadgeLevels_Request.
         * @implements ICPlayer_GetGameBadgeLevels_Request
         * @constructor
         * @param {ICPlayer_GetGameBadgeLevels_Request=} [properties] Properties to set
         */
        function CPlayer_GetGameBadgeLevels_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetGameBadgeLevels_Request appid.
         * @member {number} appid
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @instance
         */
        CPlayer_GetGameBadgeLevels_Request.prototype.appid = 0;
    
        /**
         * Creates a new CPlayer_GetGameBadgeLevels_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @static
         * @param {ICPlayer_GetGameBadgeLevels_Request=} [properties] Properties to set
         * @returns {CPlayer_GetGameBadgeLevels_Request} CPlayer_GetGameBadgeLevels_Request instance
         */
        CPlayer_GetGameBadgeLevels_Request.create = function create(properties) {
            return new CPlayer_GetGameBadgeLevels_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetGameBadgeLevels_Request message. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @static
         * @param {ICPlayer_GetGameBadgeLevels_Request} message CPlayer_GetGameBadgeLevels_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetGameBadgeLevels_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetGameBadgeLevels_Request message, length delimited. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @static
         * @param {ICPlayer_GetGameBadgeLevels_Request} message CPlayer_GetGameBadgeLevels_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetGameBadgeLevels_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetGameBadgeLevels_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetGameBadgeLevels_Request} CPlayer_GetGameBadgeLevels_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetGameBadgeLevels_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetGameBadgeLevels_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_GetGameBadgeLevels_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetGameBadgeLevels_Request} CPlayer_GetGameBadgeLevels_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetGameBadgeLevels_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetGameBadgeLevels_Request message.
         * @function verify
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetGameBadgeLevels_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetGameBadgeLevels_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetGameBadgeLevels_Request} CPlayer_GetGameBadgeLevels_Request
         */
        CPlayer_GetGameBadgeLevels_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetGameBadgeLevels_Request)
                return object;
            var message = new $root.CPlayer_GetGameBadgeLevels_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetGameBadgeLevels_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @static
         * @param {CPlayer_GetGameBadgeLevels_Request} message CPlayer_GetGameBadgeLevels_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetGameBadgeLevels_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.appid = 0;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            return object;
        };
    
        /**
         * Converts this CPlayer_GetGameBadgeLevels_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_GetGameBadgeLevels_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetGameBadgeLevels_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_GetGameBadgeLevels_Request;
    })();
    
    $root.CPlayer_GetGameBadgeLevels_Response = (function() {
    
        /**
         * Properties of a CPlayer_GetGameBadgeLevels_Response.
         * @exports ICPlayer_GetGameBadgeLevels_Response
         * @interface ICPlayer_GetGameBadgeLevels_Response
         * @property {number|null} [player_level] CPlayer_GetGameBadgeLevels_Response player_level
         * @property {Array.<CPlayer_GetGameBadgeLevels_Response.IBadge>|null} [badges] CPlayer_GetGameBadgeLevels_Response badges
         */
    
        /**
         * Constructs a new CPlayer_GetGameBadgeLevels_Response.
         * @exports CPlayer_GetGameBadgeLevels_Response
         * @classdesc Represents a CPlayer_GetGameBadgeLevels_Response.
         * @implements ICPlayer_GetGameBadgeLevels_Response
         * @constructor
         * @param {ICPlayer_GetGameBadgeLevels_Response=} [properties] Properties to set
         */
        function CPlayer_GetGameBadgeLevels_Response(properties) {
            this.badges = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetGameBadgeLevels_Response player_level.
         * @member {number} player_level
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @instance
         */
        CPlayer_GetGameBadgeLevels_Response.prototype.player_level = 0;
    
        /**
         * CPlayer_GetGameBadgeLevels_Response badges.
         * @member {Array.<CPlayer_GetGameBadgeLevels_Response.IBadge>} badges
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @instance
         */
        CPlayer_GetGameBadgeLevels_Response.prototype.badges = $util.emptyArray;
    
        /**
         * Creates a new CPlayer_GetGameBadgeLevels_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @static
         * @param {ICPlayer_GetGameBadgeLevels_Response=} [properties] Properties to set
         * @returns {CPlayer_GetGameBadgeLevels_Response} CPlayer_GetGameBadgeLevels_Response instance
         */
        CPlayer_GetGameBadgeLevels_Response.create = function create(properties) {
            return new CPlayer_GetGameBadgeLevels_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetGameBadgeLevels_Response message. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @static
         * @param {ICPlayer_GetGameBadgeLevels_Response} message CPlayer_GetGameBadgeLevels_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetGameBadgeLevels_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player_level != null && Object.hasOwnProperty.call(message, "player_level"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.player_level);
            if (message.badges != null && message.badges.length)
                for (var i = 0; i < message.badges.length; ++i)
                    $root.CPlayer_GetGameBadgeLevels_Response.Badge.encode(message.badges[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetGameBadgeLevels_Response message, length delimited. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @static
         * @param {ICPlayer_GetGameBadgeLevels_Response} message CPlayer_GetGameBadgeLevels_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetGameBadgeLevels_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetGameBadgeLevels_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetGameBadgeLevels_Response} CPlayer_GetGameBadgeLevels_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetGameBadgeLevels_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetGameBadgeLevels_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player_level = reader.uint32();
                    break;
                case 2:
                    if (!(message.badges && message.badges.length))
                        message.badges = [];
                    message.badges.push($root.CPlayer_GetGameBadgeLevels_Response.Badge.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_GetGameBadgeLevels_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetGameBadgeLevels_Response} CPlayer_GetGameBadgeLevels_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetGameBadgeLevels_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetGameBadgeLevels_Response message.
         * @function verify
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetGameBadgeLevels_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player_level != null && message.hasOwnProperty("player_level"))
                if (!$util.isInteger(message.player_level))
                    return "player_level: integer expected";
            if (message.badges != null && message.hasOwnProperty("badges")) {
                if (!Array.isArray(message.badges))
                    return "badges: array expected";
                for (var i = 0; i < message.badges.length; ++i) {
                    var error = $root.CPlayer_GetGameBadgeLevels_Response.Badge.verify(message.badges[i]);
                    if (error)
                        return "badges." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_GetGameBadgeLevels_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetGameBadgeLevels_Response} CPlayer_GetGameBadgeLevels_Response
         */
        CPlayer_GetGameBadgeLevels_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetGameBadgeLevels_Response)
                return object;
            var message = new $root.CPlayer_GetGameBadgeLevels_Response();
            if (object.player_level != null)
                message.player_level = object.player_level >>> 0;
            if (object.badges) {
                if (!Array.isArray(object.badges))
                    throw TypeError(".CPlayer_GetGameBadgeLevels_Response.badges: array expected");
                message.badges = [];
                for (var i = 0; i < object.badges.length; ++i) {
                    if (typeof object.badges[i] !== "object")
                        throw TypeError(".CPlayer_GetGameBadgeLevels_Response.badges: object expected");
                    message.badges[i] = $root.CPlayer_GetGameBadgeLevels_Response.Badge.fromObject(object.badges[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetGameBadgeLevels_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @static
         * @param {CPlayer_GetGameBadgeLevels_Response} message CPlayer_GetGameBadgeLevels_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetGameBadgeLevels_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.badges = [];
            if (options.defaults)
                object.player_level = 0;
            if (message.player_level != null && message.hasOwnProperty("player_level"))
                object.player_level = message.player_level;
            if (message.badges && message.badges.length) {
                object.badges = [];
                for (var j = 0; j < message.badges.length; ++j)
                    object.badges[j] = $root.CPlayer_GetGameBadgeLevels_Response.Badge.toObject(message.badges[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CPlayer_GetGameBadgeLevels_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_GetGameBadgeLevels_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetGameBadgeLevels_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CPlayer_GetGameBadgeLevels_Response.Badge = (function() {
    
            /**
             * Properties of a Badge.
             * @memberof CPlayer_GetGameBadgeLevels_Response
             * @interface IBadge
             * @property {number|null} [level] Badge level
             * @property {number|null} [series] Badge series
             * @property {number|null} [border_color] Badge border_color
             */
    
            /**
             * Constructs a new Badge.
             * @memberof CPlayer_GetGameBadgeLevels_Response
             * @classdesc Represents a Badge.
             * @implements IBadge
             * @constructor
             * @param {CPlayer_GetGameBadgeLevels_Response.IBadge=} [properties] Properties to set
             */
            function Badge(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Badge level.
             * @member {number} level
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @instance
             */
            Badge.prototype.level = 0;
    
            /**
             * Badge series.
             * @member {number} series
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @instance
             */
            Badge.prototype.series = 0;
    
            /**
             * Badge border_color.
             * @member {number} border_color
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @instance
             */
            Badge.prototype.border_color = 0;
    
            /**
             * Creates a new Badge instance using the specified properties.
             * @function create
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @static
             * @param {CPlayer_GetGameBadgeLevels_Response.IBadge=} [properties] Properties to set
             * @returns {CPlayer_GetGameBadgeLevels_Response.Badge} Badge instance
             */
            Badge.create = function create(properties) {
                return new Badge(properties);
            };
    
            /**
             * Encodes the specified Badge message. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Response.Badge.verify|verify} messages.
             * @function encode
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @static
             * @param {CPlayer_GetGameBadgeLevels_Response.IBadge} message Badge message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Badge.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.level);
                if (message.series != null && Object.hasOwnProperty.call(message, "series"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.series);
                if (message.border_color != null && Object.hasOwnProperty.call(message, "border_color"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.border_color);
                return writer;
            };
    
            /**
             * Encodes the specified Badge message, length delimited. Does not implicitly {@link CPlayer_GetGameBadgeLevels_Response.Badge.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @static
             * @param {CPlayer_GetGameBadgeLevels_Response.IBadge} message Badge message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Badge.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Badge message from the specified reader or buffer.
             * @function decode
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CPlayer_GetGameBadgeLevels_Response.Badge} Badge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Badge.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetGameBadgeLevels_Response.Badge();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.level = reader.int32();
                        break;
                    case 2:
                        message.series = reader.int32();
                        break;
                    case 3:
                        message.border_color = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Badge message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CPlayer_GetGameBadgeLevels_Response.Badge} Badge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Badge.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Badge message.
             * @function verify
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Badge.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.series != null && message.hasOwnProperty("series"))
                    if (!$util.isInteger(message.series))
                        return "series: integer expected";
                if (message.border_color != null && message.hasOwnProperty("border_color"))
                    if (!$util.isInteger(message.border_color))
                        return "border_color: integer expected";
                return null;
            };
    
            /**
             * Creates a Badge message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CPlayer_GetGameBadgeLevels_Response.Badge} Badge
             */
            Badge.fromObject = function fromObject(object) {
                if (object instanceof $root.CPlayer_GetGameBadgeLevels_Response.Badge)
                    return object;
                var message = new $root.CPlayer_GetGameBadgeLevels_Response.Badge();
                if (object.level != null)
                    message.level = object.level | 0;
                if (object.series != null)
                    message.series = object.series | 0;
                if (object.border_color != null)
                    message.border_color = object.border_color >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Badge message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @static
             * @param {CPlayer_GetGameBadgeLevels_Response.Badge} message Badge
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Badge.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.level = 0;
                    object.series = 0;
                    object.border_color = 0;
                }
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.series != null && message.hasOwnProperty("series"))
                    object.series = message.series;
                if (message.border_color != null && message.hasOwnProperty("border_color"))
                    object.border_color = message.border_color;
                return object;
            };
    
            /**
             * Converts this Badge to JSON.
             * @function toJSON
             * @memberof CPlayer_GetGameBadgeLevels_Response.Badge
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Badge.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Badge;
        })();
    
        return CPlayer_GetGameBadgeLevels_Response;
    })();
    
    $root.CPlayer_GetLastPlayedTimes_Request = (function() {
    
        /**
         * Properties of a CPlayer_GetLastPlayedTimes_Request.
         * @exports ICPlayer_GetLastPlayedTimes_Request
         * @interface ICPlayer_GetLastPlayedTimes_Request
         * @property {number|null} [min_last_played] CPlayer_GetLastPlayedTimes_Request min_last_played
         */
    
        /**
         * Constructs a new CPlayer_GetLastPlayedTimes_Request.
         * @exports CPlayer_GetLastPlayedTimes_Request
         * @classdesc Represents a CPlayer_GetLastPlayedTimes_Request.
         * @implements ICPlayer_GetLastPlayedTimes_Request
         * @constructor
         * @param {ICPlayer_GetLastPlayedTimes_Request=} [properties] Properties to set
         */
        function CPlayer_GetLastPlayedTimes_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetLastPlayedTimes_Request min_last_played.
         * @member {number} min_last_played
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @instance
         */
        CPlayer_GetLastPlayedTimes_Request.prototype.min_last_played = 0;
    
        /**
         * Creates a new CPlayer_GetLastPlayedTimes_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @static
         * @param {ICPlayer_GetLastPlayedTimes_Request=} [properties] Properties to set
         * @returns {CPlayer_GetLastPlayedTimes_Request} CPlayer_GetLastPlayedTimes_Request instance
         */
        CPlayer_GetLastPlayedTimes_Request.create = function create(properties) {
            return new CPlayer_GetLastPlayedTimes_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetLastPlayedTimes_Request message. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @static
         * @param {ICPlayer_GetLastPlayedTimes_Request} message CPlayer_GetLastPlayedTimes_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetLastPlayedTimes_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.min_last_played != null && Object.hasOwnProperty.call(message, "min_last_played"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.min_last_played);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetLastPlayedTimes_Request message, length delimited. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @static
         * @param {ICPlayer_GetLastPlayedTimes_Request} message CPlayer_GetLastPlayedTimes_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetLastPlayedTimes_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetLastPlayedTimes_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetLastPlayedTimes_Request} CPlayer_GetLastPlayedTimes_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetLastPlayedTimes_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetLastPlayedTimes_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.min_last_played = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_GetLastPlayedTimes_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetLastPlayedTimes_Request} CPlayer_GetLastPlayedTimes_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetLastPlayedTimes_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetLastPlayedTimes_Request message.
         * @function verify
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetLastPlayedTimes_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.min_last_played != null && message.hasOwnProperty("min_last_played"))
                if (!$util.isInteger(message.min_last_played))
                    return "min_last_played: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetLastPlayedTimes_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetLastPlayedTimes_Request} CPlayer_GetLastPlayedTimes_Request
         */
        CPlayer_GetLastPlayedTimes_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetLastPlayedTimes_Request)
                return object;
            var message = new $root.CPlayer_GetLastPlayedTimes_Request();
            if (object.min_last_played != null)
                message.min_last_played = object.min_last_played >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetLastPlayedTimes_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @static
         * @param {CPlayer_GetLastPlayedTimes_Request} message CPlayer_GetLastPlayedTimes_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetLastPlayedTimes_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.min_last_played = 0;
            if (message.min_last_played != null && message.hasOwnProperty("min_last_played"))
                object.min_last_played = message.min_last_played;
            return object;
        };
    
        /**
         * Converts this CPlayer_GetLastPlayedTimes_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_GetLastPlayedTimes_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetLastPlayedTimes_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_GetLastPlayedTimes_Request;
    })();
    
    $root.CPlayer_GetLastPlayedTimes_Response = (function() {
    
        /**
         * Properties of a CPlayer_GetLastPlayedTimes_Response.
         * @exports ICPlayer_GetLastPlayedTimes_Response
         * @interface ICPlayer_GetLastPlayedTimes_Response
         * @property {Array.<CPlayer_GetLastPlayedTimes_Response.IGame>|null} [games] CPlayer_GetLastPlayedTimes_Response games
         */
    
        /**
         * Constructs a new CPlayer_GetLastPlayedTimes_Response.
         * @exports CPlayer_GetLastPlayedTimes_Response
         * @classdesc Represents a CPlayer_GetLastPlayedTimes_Response.
         * @implements ICPlayer_GetLastPlayedTimes_Response
         * @constructor
         * @param {ICPlayer_GetLastPlayedTimes_Response=} [properties] Properties to set
         */
        function CPlayer_GetLastPlayedTimes_Response(properties) {
            this.games = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetLastPlayedTimes_Response games.
         * @member {Array.<CPlayer_GetLastPlayedTimes_Response.IGame>} games
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @instance
         */
        CPlayer_GetLastPlayedTimes_Response.prototype.games = $util.emptyArray;
    
        /**
         * Creates a new CPlayer_GetLastPlayedTimes_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @static
         * @param {ICPlayer_GetLastPlayedTimes_Response=} [properties] Properties to set
         * @returns {CPlayer_GetLastPlayedTimes_Response} CPlayer_GetLastPlayedTimes_Response instance
         */
        CPlayer_GetLastPlayedTimes_Response.create = function create(properties) {
            return new CPlayer_GetLastPlayedTimes_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetLastPlayedTimes_Response message. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @static
         * @param {ICPlayer_GetLastPlayedTimes_Response} message CPlayer_GetLastPlayedTimes_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetLastPlayedTimes_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.games != null && message.games.length)
                for (var i = 0; i < message.games.length; ++i)
                    $root.CPlayer_GetLastPlayedTimes_Response.Game.encode(message.games[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetLastPlayedTimes_Response message, length delimited. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @static
         * @param {ICPlayer_GetLastPlayedTimes_Response} message CPlayer_GetLastPlayedTimes_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetLastPlayedTimes_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetLastPlayedTimes_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetLastPlayedTimes_Response} CPlayer_GetLastPlayedTimes_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetLastPlayedTimes_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetLastPlayedTimes_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.games && message.games.length))
                        message.games = [];
                    message.games.push($root.CPlayer_GetLastPlayedTimes_Response.Game.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_GetLastPlayedTimes_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetLastPlayedTimes_Response} CPlayer_GetLastPlayedTimes_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetLastPlayedTimes_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetLastPlayedTimes_Response message.
         * @function verify
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetLastPlayedTimes_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.games != null && message.hasOwnProperty("games")) {
                if (!Array.isArray(message.games))
                    return "games: array expected";
                for (var i = 0; i < message.games.length; ++i) {
                    var error = $root.CPlayer_GetLastPlayedTimes_Response.Game.verify(message.games[i]);
                    if (error)
                        return "games." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_GetLastPlayedTimes_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetLastPlayedTimes_Response} CPlayer_GetLastPlayedTimes_Response
         */
        CPlayer_GetLastPlayedTimes_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetLastPlayedTimes_Response)
                return object;
            var message = new $root.CPlayer_GetLastPlayedTimes_Response();
            if (object.games) {
                if (!Array.isArray(object.games))
                    throw TypeError(".CPlayer_GetLastPlayedTimes_Response.games: array expected");
                message.games = [];
                for (var i = 0; i < object.games.length; ++i) {
                    if (typeof object.games[i] !== "object")
                        throw TypeError(".CPlayer_GetLastPlayedTimes_Response.games: object expected");
                    message.games[i] = $root.CPlayer_GetLastPlayedTimes_Response.Game.fromObject(object.games[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetLastPlayedTimes_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @static
         * @param {CPlayer_GetLastPlayedTimes_Response} message CPlayer_GetLastPlayedTimes_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetLastPlayedTimes_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.games = [];
            if (message.games && message.games.length) {
                object.games = [];
                for (var j = 0; j < message.games.length; ++j)
                    object.games[j] = $root.CPlayer_GetLastPlayedTimes_Response.Game.toObject(message.games[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CPlayer_GetLastPlayedTimes_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_GetLastPlayedTimes_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetLastPlayedTimes_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CPlayer_GetLastPlayedTimes_Response.Game = (function() {
    
            /**
             * Properties of a Game.
             * @memberof CPlayer_GetLastPlayedTimes_Response
             * @interface IGame
             * @property {number|null} [appid] Game appid
             * @property {number|null} [last_playtime] Game last_playtime
             * @property {number|null} [playtime_2weeks] Game playtime_2weeks
             * @property {number|null} [playtime_forever] Game playtime_forever
             * @property {number|null} [first_playtime] Game first_playtime
             */
    
            /**
             * Constructs a new Game.
             * @memberof CPlayer_GetLastPlayedTimes_Response
             * @classdesc Represents a Game.
             * @implements IGame
             * @constructor
             * @param {CPlayer_GetLastPlayedTimes_Response.IGame=} [properties] Properties to set
             */
            function Game(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Game appid.
             * @member {number} appid
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @instance
             */
            Game.prototype.appid = 0;
    
            /**
             * Game last_playtime.
             * @member {number} last_playtime
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @instance
             */
            Game.prototype.last_playtime = 0;
    
            /**
             * Game playtime_2weeks.
             * @member {number} playtime_2weeks
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @instance
             */
            Game.prototype.playtime_2weeks = 0;
    
            /**
             * Game playtime_forever.
             * @member {number} playtime_forever
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @instance
             */
            Game.prototype.playtime_forever = 0;
    
            /**
             * Game first_playtime.
             * @member {number} first_playtime
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @instance
             */
            Game.prototype.first_playtime = 0;
    
            /**
             * Creates a new Game instance using the specified properties.
             * @function create
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @static
             * @param {CPlayer_GetLastPlayedTimes_Response.IGame=} [properties] Properties to set
             * @returns {CPlayer_GetLastPlayedTimes_Response.Game} Game instance
             */
            Game.create = function create(properties) {
                return new Game(properties);
            };
    
            /**
             * Encodes the specified Game message. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Response.Game.verify|verify} messages.
             * @function encode
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @static
             * @param {CPlayer_GetLastPlayedTimes_Response.IGame} message Game message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Game.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.appid);
                if (message.last_playtime != null && Object.hasOwnProperty.call(message, "last_playtime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.last_playtime);
                if (message.playtime_2weeks != null && Object.hasOwnProperty.call(message, "playtime_2weeks"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playtime_2weeks);
                if (message.playtime_forever != null && Object.hasOwnProperty.call(message, "playtime_forever"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.playtime_forever);
                if (message.first_playtime != null && Object.hasOwnProperty.call(message, "first_playtime"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.first_playtime);
                return writer;
            };
    
            /**
             * Encodes the specified Game message, length delimited. Does not implicitly {@link CPlayer_GetLastPlayedTimes_Response.Game.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @static
             * @param {CPlayer_GetLastPlayedTimes_Response.IGame} message Game message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Game.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Game message from the specified reader or buffer.
             * @function decode
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CPlayer_GetLastPlayedTimes_Response.Game} Game
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Game.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetLastPlayedTimes_Response.Game();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.appid = reader.int32();
                        break;
                    case 2:
                        message.last_playtime = reader.uint32();
                        break;
                    case 3:
                        message.playtime_2weeks = reader.int32();
                        break;
                    case 4:
                        message.playtime_forever = reader.int32();
                        break;
                    case 5:
                        message.first_playtime = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Game message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CPlayer_GetLastPlayedTimes_Response.Game} Game
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Game.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Game message.
             * @function verify
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Game.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.appid != null && message.hasOwnProperty("appid"))
                    if (!$util.isInteger(message.appid))
                        return "appid: integer expected";
                if (message.last_playtime != null && message.hasOwnProperty("last_playtime"))
                    if (!$util.isInteger(message.last_playtime))
                        return "last_playtime: integer expected";
                if (message.playtime_2weeks != null && message.hasOwnProperty("playtime_2weeks"))
                    if (!$util.isInteger(message.playtime_2weeks))
                        return "playtime_2weeks: integer expected";
                if (message.playtime_forever != null && message.hasOwnProperty("playtime_forever"))
                    if (!$util.isInteger(message.playtime_forever))
                        return "playtime_forever: integer expected";
                if (message.first_playtime != null && message.hasOwnProperty("first_playtime"))
                    if (!$util.isInteger(message.first_playtime))
                        return "first_playtime: integer expected";
                return null;
            };
    
            /**
             * Creates a Game message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CPlayer_GetLastPlayedTimes_Response.Game} Game
             */
            Game.fromObject = function fromObject(object) {
                if (object instanceof $root.CPlayer_GetLastPlayedTimes_Response.Game)
                    return object;
                var message = new $root.CPlayer_GetLastPlayedTimes_Response.Game();
                if (object.appid != null)
                    message.appid = object.appid | 0;
                if (object.last_playtime != null)
                    message.last_playtime = object.last_playtime >>> 0;
                if (object.playtime_2weeks != null)
                    message.playtime_2weeks = object.playtime_2weeks | 0;
                if (object.playtime_forever != null)
                    message.playtime_forever = object.playtime_forever | 0;
                if (object.first_playtime != null)
                    message.first_playtime = object.first_playtime >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Game message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @static
             * @param {CPlayer_GetLastPlayedTimes_Response.Game} message Game
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Game.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.appid = 0;
                    object.last_playtime = 0;
                    object.playtime_2weeks = 0;
                    object.playtime_forever = 0;
                    object.first_playtime = 0;
                }
                if (message.appid != null && message.hasOwnProperty("appid"))
                    object.appid = message.appid;
                if (message.last_playtime != null && message.hasOwnProperty("last_playtime"))
                    object.last_playtime = message.last_playtime;
                if (message.playtime_2weeks != null && message.hasOwnProperty("playtime_2weeks"))
                    object.playtime_2weeks = message.playtime_2weeks;
                if (message.playtime_forever != null && message.hasOwnProperty("playtime_forever"))
                    object.playtime_forever = message.playtime_forever;
                if (message.first_playtime != null && message.hasOwnProperty("first_playtime"))
                    object.first_playtime = message.first_playtime;
                return object;
            };
    
            /**
             * Converts this Game to JSON.
             * @function toJSON
             * @memberof CPlayer_GetLastPlayedTimes_Response.Game
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Game.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Game;
        })();
    
        return CPlayer_GetLastPlayedTimes_Response;
    })();
    
    $root.CPlayer_AcceptSSA_Request = (function() {
    
        /**
         * Properties of a CPlayer_AcceptSSA_Request.
         * @exports ICPlayer_AcceptSSA_Request
         * @interface ICPlayer_AcceptSSA_Request
         */
    
        /**
         * Constructs a new CPlayer_AcceptSSA_Request.
         * @exports CPlayer_AcceptSSA_Request
         * @classdesc Represents a CPlayer_AcceptSSA_Request.
         * @implements ICPlayer_AcceptSSA_Request
         * @constructor
         * @param {ICPlayer_AcceptSSA_Request=} [properties] Properties to set
         */
        function CPlayer_AcceptSSA_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_AcceptSSA_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_AcceptSSA_Request
         * @static
         * @param {ICPlayer_AcceptSSA_Request=} [properties] Properties to set
         * @returns {CPlayer_AcceptSSA_Request} CPlayer_AcceptSSA_Request instance
         */
        CPlayer_AcceptSSA_Request.create = function create(properties) {
            return new CPlayer_AcceptSSA_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_AcceptSSA_Request message. Does not implicitly {@link CPlayer_AcceptSSA_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_AcceptSSA_Request
         * @static
         * @param {ICPlayer_AcceptSSA_Request} message CPlayer_AcceptSSA_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_AcceptSSA_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_AcceptSSA_Request message, length delimited. Does not implicitly {@link CPlayer_AcceptSSA_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_AcceptSSA_Request
         * @static
         * @param {ICPlayer_AcceptSSA_Request} message CPlayer_AcceptSSA_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_AcceptSSA_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_AcceptSSA_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_AcceptSSA_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_AcceptSSA_Request} CPlayer_AcceptSSA_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_AcceptSSA_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_AcceptSSA_Request();
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
         * Decodes a CPlayer_AcceptSSA_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_AcceptSSA_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_AcceptSSA_Request} CPlayer_AcceptSSA_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_AcceptSSA_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_AcceptSSA_Request message.
         * @function verify
         * @memberof CPlayer_AcceptSSA_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_AcceptSSA_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_AcceptSSA_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_AcceptSSA_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_AcceptSSA_Request} CPlayer_AcceptSSA_Request
         */
        CPlayer_AcceptSSA_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_AcceptSSA_Request)
                return object;
            return new $root.CPlayer_AcceptSSA_Request();
        };
    
        /**
         * Creates a plain object from a CPlayer_AcceptSSA_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_AcceptSSA_Request
         * @static
         * @param {CPlayer_AcceptSSA_Request} message CPlayer_AcceptSSA_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_AcceptSSA_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_AcceptSSA_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_AcceptSSA_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_AcceptSSA_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_AcceptSSA_Request;
    })();
    
    $root.CPlayer_AcceptSSA_Response = (function() {
    
        /**
         * Properties of a CPlayer_AcceptSSA_Response.
         * @exports ICPlayer_AcceptSSA_Response
         * @interface ICPlayer_AcceptSSA_Response
         */
    
        /**
         * Constructs a new CPlayer_AcceptSSA_Response.
         * @exports CPlayer_AcceptSSA_Response
         * @classdesc Represents a CPlayer_AcceptSSA_Response.
         * @implements ICPlayer_AcceptSSA_Response
         * @constructor
         * @param {ICPlayer_AcceptSSA_Response=} [properties] Properties to set
         */
        function CPlayer_AcceptSSA_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_AcceptSSA_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_AcceptSSA_Response
         * @static
         * @param {ICPlayer_AcceptSSA_Response=} [properties] Properties to set
         * @returns {CPlayer_AcceptSSA_Response} CPlayer_AcceptSSA_Response instance
         */
        CPlayer_AcceptSSA_Response.create = function create(properties) {
            return new CPlayer_AcceptSSA_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_AcceptSSA_Response message. Does not implicitly {@link CPlayer_AcceptSSA_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_AcceptSSA_Response
         * @static
         * @param {ICPlayer_AcceptSSA_Response} message CPlayer_AcceptSSA_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_AcceptSSA_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_AcceptSSA_Response message, length delimited. Does not implicitly {@link CPlayer_AcceptSSA_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_AcceptSSA_Response
         * @static
         * @param {ICPlayer_AcceptSSA_Response} message CPlayer_AcceptSSA_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_AcceptSSA_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_AcceptSSA_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_AcceptSSA_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_AcceptSSA_Response} CPlayer_AcceptSSA_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_AcceptSSA_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_AcceptSSA_Response();
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
         * Decodes a CPlayer_AcceptSSA_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_AcceptSSA_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_AcceptSSA_Response} CPlayer_AcceptSSA_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_AcceptSSA_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_AcceptSSA_Response message.
         * @function verify
         * @memberof CPlayer_AcceptSSA_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_AcceptSSA_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_AcceptSSA_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_AcceptSSA_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_AcceptSSA_Response} CPlayer_AcceptSSA_Response
         */
        CPlayer_AcceptSSA_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_AcceptSSA_Response)
                return object;
            return new $root.CPlayer_AcceptSSA_Response();
        };
    
        /**
         * Creates a plain object from a CPlayer_AcceptSSA_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_AcceptSSA_Response
         * @static
         * @param {CPlayer_AcceptSSA_Response} message CPlayer_AcceptSSA_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_AcceptSSA_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_AcceptSSA_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_AcceptSSA_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_AcceptSSA_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_AcceptSSA_Response;
    })();
    
    $root.CPlayer_GetNicknameList_Request = (function() {
    
        /**
         * Properties of a CPlayer_GetNicknameList_Request.
         * @exports ICPlayer_GetNicknameList_Request
         * @interface ICPlayer_GetNicknameList_Request
         */
    
        /**
         * Constructs a new CPlayer_GetNicknameList_Request.
         * @exports CPlayer_GetNicknameList_Request
         * @classdesc Represents a CPlayer_GetNicknameList_Request.
         * @implements ICPlayer_GetNicknameList_Request
         * @constructor
         * @param {ICPlayer_GetNicknameList_Request=} [properties] Properties to set
         */
        function CPlayer_GetNicknameList_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_GetNicknameList_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetNicknameList_Request
         * @static
         * @param {ICPlayer_GetNicknameList_Request=} [properties] Properties to set
         * @returns {CPlayer_GetNicknameList_Request} CPlayer_GetNicknameList_Request instance
         */
        CPlayer_GetNicknameList_Request.create = function create(properties) {
            return new CPlayer_GetNicknameList_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetNicknameList_Request message. Does not implicitly {@link CPlayer_GetNicknameList_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetNicknameList_Request
         * @static
         * @param {ICPlayer_GetNicknameList_Request} message CPlayer_GetNicknameList_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetNicknameList_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetNicknameList_Request message, length delimited. Does not implicitly {@link CPlayer_GetNicknameList_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetNicknameList_Request
         * @static
         * @param {ICPlayer_GetNicknameList_Request} message CPlayer_GetNicknameList_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetNicknameList_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetNicknameList_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetNicknameList_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetNicknameList_Request} CPlayer_GetNicknameList_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetNicknameList_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetNicknameList_Request();
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
         * Decodes a CPlayer_GetNicknameList_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetNicknameList_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetNicknameList_Request} CPlayer_GetNicknameList_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetNicknameList_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetNicknameList_Request message.
         * @function verify
         * @memberof CPlayer_GetNicknameList_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetNicknameList_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetNicknameList_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetNicknameList_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetNicknameList_Request} CPlayer_GetNicknameList_Request
         */
        CPlayer_GetNicknameList_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetNicknameList_Request)
                return object;
            return new $root.CPlayer_GetNicknameList_Request();
        };
    
        /**
         * Creates a plain object from a CPlayer_GetNicknameList_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetNicknameList_Request
         * @static
         * @param {CPlayer_GetNicknameList_Request} message CPlayer_GetNicknameList_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetNicknameList_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_GetNicknameList_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_GetNicknameList_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetNicknameList_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_GetNicknameList_Request;
    })();
    
    $root.CPlayer_GetNicknameList_Response = (function() {
    
        /**
         * Properties of a CPlayer_GetNicknameList_Response.
         * @exports ICPlayer_GetNicknameList_Response
         * @interface ICPlayer_GetNicknameList_Response
         * @property {Array.<CPlayer_GetNicknameList_Response.IPlayerNickname>|null} [nicknames] CPlayer_GetNicknameList_Response nicknames
         */
    
        /**
         * Constructs a new CPlayer_GetNicknameList_Response.
         * @exports CPlayer_GetNicknameList_Response
         * @classdesc Represents a CPlayer_GetNicknameList_Response.
         * @implements ICPlayer_GetNicknameList_Response
         * @constructor
         * @param {ICPlayer_GetNicknameList_Response=} [properties] Properties to set
         */
        function CPlayer_GetNicknameList_Response(properties) {
            this.nicknames = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetNicknameList_Response nicknames.
         * @member {Array.<CPlayer_GetNicknameList_Response.IPlayerNickname>} nicknames
         * @memberof CPlayer_GetNicknameList_Response
         * @instance
         */
        CPlayer_GetNicknameList_Response.prototype.nicknames = $util.emptyArray;
    
        /**
         * Creates a new CPlayer_GetNicknameList_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetNicknameList_Response
         * @static
         * @param {ICPlayer_GetNicknameList_Response=} [properties] Properties to set
         * @returns {CPlayer_GetNicknameList_Response} CPlayer_GetNicknameList_Response instance
         */
        CPlayer_GetNicknameList_Response.create = function create(properties) {
            return new CPlayer_GetNicknameList_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetNicknameList_Response message. Does not implicitly {@link CPlayer_GetNicknameList_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetNicknameList_Response
         * @static
         * @param {ICPlayer_GetNicknameList_Response} message CPlayer_GetNicknameList_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetNicknameList_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nicknames != null && message.nicknames.length)
                for (var i = 0; i < message.nicknames.length; ++i)
                    $root.CPlayer_GetNicknameList_Response.PlayerNickname.encode(message.nicknames[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetNicknameList_Response message, length delimited. Does not implicitly {@link CPlayer_GetNicknameList_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetNicknameList_Response
         * @static
         * @param {ICPlayer_GetNicknameList_Response} message CPlayer_GetNicknameList_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetNicknameList_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetNicknameList_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetNicknameList_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetNicknameList_Response} CPlayer_GetNicknameList_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetNicknameList_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetNicknameList_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.nicknames && message.nicknames.length))
                        message.nicknames = [];
                    message.nicknames.push($root.CPlayer_GetNicknameList_Response.PlayerNickname.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_GetNicknameList_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetNicknameList_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetNicknameList_Response} CPlayer_GetNicknameList_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetNicknameList_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetNicknameList_Response message.
         * @function verify
         * @memberof CPlayer_GetNicknameList_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetNicknameList_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nicknames != null && message.hasOwnProperty("nicknames")) {
                if (!Array.isArray(message.nicknames))
                    return "nicknames: array expected";
                for (var i = 0; i < message.nicknames.length; ++i) {
                    var error = $root.CPlayer_GetNicknameList_Response.PlayerNickname.verify(message.nicknames[i]);
                    if (error)
                        return "nicknames." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_GetNicknameList_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetNicknameList_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetNicknameList_Response} CPlayer_GetNicknameList_Response
         */
        CPlayer_GetNicknameList_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetNicknameList_Response)
                return object;
            var message = new $root.CPlayer_GetNicknameList_Response();
            if (object.nicknames) {
                if (!Array.isArray(object.nicknames))
                    throw TypeError(".CPlayer_GetNicknameList_Response.nicknames: array expected");
                message.nicknames = [];
                for (var i = 0; i < object.nicknames.length; ++i) {
                    if (typeof object.nicknames[i] !== "object")
                        throw TypeError(".CPlayer_GetNicknameList_Response.nicknames: object expected");
                    message.nicknames[i] = $root.CPlayer_GetNicknameList_Response.PlayerNickname.fromObject(object.nicknames[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetNicknameList_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetNicknameList_Response
         * @static
         * @param {CPlayer_GetNicknameList_Response} message CPlayer_GetNicknameList_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetNicknameList_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.nicknames = [];
            if (message.nicknames && message.nicknames.length) {
                object.nicknames = [];
                for (var j = 0; j < message.nicknames.length; ++j)
                    object.nicknames[j] = $root.CPlayer_GetNicknameList_Response.PlayerNickname.toObject(message.nicknames[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CPlayer_GetNicknameList_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_GetNicknameList_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetNicknameList_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CPlayer_GetNicknameList_Response.PlayerNickname = (function() {
    
            /**
             * Properties of a PlayerNickname.
             * @memberof CPlayer_GetNicknameList_Response
             * @interface IPlayerNickname
             * @property {number|null} [accountid] PlayerNickname accountid
             * @property {string|null} [nickname] PlayerNickname nickname
             */
    
            /**
             * Constructs a new PlayerNickname.
             * @memberof CPlayer_GetNicknameList_Response
             * @classdesc Represents a PlayerNickname.
             * @implements IPlayerNickname
             * @constructor
             * @param {CPlayer_GetNicknameList_Response.IPlayerNickname=} [properties] Properties to set
             */
            function PlayerNickname(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlayerNickname accountid.
             * @member {number} accountid
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @instance
             */
            PlayerNickname.prototype.accountid = 0;
    
            /**
             * PlayerNickname nickname.
             * @member {string} nickname
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @instance
             */
            PlayerNickname.prototype.nickname = "";
    
            /**
             * Creates a new PlayerNickname instance using the specified properties.
             * @function create
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @static
             * @param {CPlayer_GetNicknameList_Response.IPlayerNickname=} [properties] Properties to set
             * @returns {CPlayer_GetNicknameList_Response.PlayerNickname} PlayerNickname instance
             */
            PlayerNickname.create = function create(properties) {
                return new PlayerNickname(properties);
            };
    
            /**
             * Encodes the specified PlayerNickname message. Does not implicitly {@link CPlayer_GetNicknameList_Response.PlayerNickname.verify|verify} messages.
             * @function encode
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @static
             * @param {CPlayer_GetNicknameList_Response.IPlayerNickname} message PlayerNickname message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerNickname.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.accountid != null && Object.hasOwnProperty.call(message, "accountid"))
                    writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.accountid);
                if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
                return writer;
            };
    
            /**
             * Encodes the specified PlayerNickname message, length delimited. Does not implicitly {@link CPlayer_GetNicknameList_Response.PlayerNickname.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @static
             * @param {CPlayer_GetNicknameList_Response.IPlayerNickname} message PlayerNickname message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerNickname.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PlayerNickname message from the specified reader or buffer.
             * @function decode
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CPlayer_GetNicknameList_Response.PlayerNickname} PlayerNickname
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerNickname.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetNicknameList_Response.PlayerNickname();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.accountid = reader.fixed32();
                        break;
                    case 2:
                        message.nickname = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PlayerNickname message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CPlayer_GetNicknameList_Response.PlayerNickname} PlayerNickname
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerNickname.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PlayerNickname message.
             * @function verify
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerNickname.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.accountid != null && message.hasOwnProperty("accountid"))
                    if (!$util.isInteger(message.accountid))
                        return "accountid: integer expected";
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    if (!$util.isString(message.nickname))
                        return "nickname: string expected";
                return null;
            };
    
            /**
             * Creates a PlayerNickname message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CPlayer_GetNicknameList_Response.PlayerNickname} PlayerNickname
             */
            PlayerNickname.fromObject = function fromObject(object) {
                if (object instanceof $root.CPlayer_GetNicknameList_Response.PlayerNickname)
                    return object;
                var message = new $root.CPlayer_GetNicknameList_Response.PlayerNickname();
                if (object.accountid != null)
                    message.accountid = object.accountid >>> 0;
                if (object.nickname != null)
                    message.nickname = String(object.nickname);
                return message;
            };
    
            /**
             * Creates a plain object from a PlayerNickname message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @static
             * @param {CPlayer_GetNicknameList_Response.PlayerNickname} message PlayerNickname
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerNickname.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.accountid = 0;
                    object.nickname = "";
                }
                if (message.accountid != null && message.hasOwnProperty("accountid"))
                    object.accountid = message.accountid;
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    object.nickname = message.nickname;
                return object;
            };
    
            /**
             * Converts this PlayerNickname to JSON.
             * @function toJSON
             * @memberof CPlayer_GetNicknameList_Response.PlayerNickname
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerNickname.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PlayerNickname;
        })();
    
        return CPlayer_GetNicknameList_Response;
    })();
    
    $root.CPlayer_GetPerFriendPreferences_Request = (function() {
    
        /**
         * Properties of a CPlayer_GetPerFriendPreferences_Request.
         * @exports ICPlayer_GetPerFriendPreferences_Request
         * @interface ICPlayer_GetPerFriendPreferences_Request
         */
    
        /**
         * Constructs a new CPlayer_GetPerFriendPreferences_Request.
         * @exports CPlayer_GetPerFriendPreferences_Request
         * @classdesc Represents a CPlayer_GetPerFriendPreferences_Request.
         * @implements ICPlayer_GetPerFriendPreferences_Request
         * @constructor
         * @param {ICPlayer_GetPerFriendPreferences_Request=} [properties] Properties to set
         */
        function CPlayer_GetPerFriendPreferences_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_GetPerFriendPreferences_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @static
         * @param {ICPlayer_GetPerFriendPreferences_Request=} [properties] Properties to set
         * @returns {CPlayer_GetPerFriendPreferences_Request} CPlayer_GetPerFriendPreferences_Request instance
         */
        CPlayer_GetPerFriendPreferences_Request.create = function create(properties) {
            return new CPlayer_GetPerFriendPreferences_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetPerFriendPreferences_Request message. Does not implicitly {@link CPlayer_GetPerFriendPreferences_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @static
         * @param {ICPlayer_GetPerFriendPreferences_Request} message CPlayer_GetPerFriendPreferences_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetPerFriendPreferences_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetPerFriendPreferences_Request message, length delimited. Does not implicitly {@link CPlayer_GetPerFriendPreferences_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @static
         * @param {ICPlayer_GetPerFriendPreferences_Request} message CPlayer_GetPerFriendPreferences_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetPerFriendPreferences_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetPerFriendPreferences_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetPerFriendPreferences_Request} CPlayer_GetPerFriendPreferences_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetPerFriendPreferences_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetPerFriendPreferences_Request();
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
         * Decodes a CPlayer_GetPerFriendPreferences_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetPerFriendPreferences_Request} CPlayer_GetPerFriendPreferences_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetPerFriendPreferences_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetPerFriendPreferences_Request message.
         * @function verify
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetPerFriendPreferences_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetPerFriendPreferences_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetPerFriendPreferences_Request} CPlayer_GetPerFriendPreferences_Request
         */
        CPlayer_GetPerFriendPreferences_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetPerFriendPreferences_Request)
                return object;
            return new $root.CPlayer_GetPerFriendPreferences_Request();
        };
    
        /**
         * Creates a plain object from a CPlayer_GetPerFriendPreferences_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @static
         * @param {CPlayer_GetPerFriendPreferences_Request} message CPlayer_GetPerFriendPreferences_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetPerFriendPreferences_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_GetPerFriendPreferences_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_GetPerFriendPreferences_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetPerFriendPreferences_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_GetPerFriendPreferences_Request;
    })();
    
    $root.PerFriendPreferences = (function() {
    
        /**
         * Properties of a PerFriendPreferences.
         * @exports IPerFriendPreferences
         * @interface IPerFriendPreferences
         * @property {number|null} [accountid] PerFriendPreferences accountid
         * @property {string|null} [nickname] PerFriendPreferences nickname
         * @property {ENotificationSetting|null} [notifications_showingame] PerFriendPreferences notifications_showingame
         * @property {ENotificationSetting|null} [notifications_showonline] PerFriendPreferences notifications_showonline
         * @property {ENotificationSetting|null} [notifications_showmessages] PerFriendPreferences notifications_showmessages
         * @property {ENotificationSetting|null} [sounds_showingame] PerFriendPreferences sounds_showingame
         * @property {ENotificationSetting|null} [sounds_showonline] PerFriendPreferences sounds_showonline
         * @property {ENotificationSetting|null} [sounds_showmessages] PerFriendPreferences sounds_showmessages
         * @property {ENotificationSetting|null} [notifications_sendmobile] PerFriendPreferences notifications_sendmobile
         */
    
        /**
         * Constructs a new PerFriendPreferences.
         * @exports PerFriendPreferences
         * @classdesc Represents a PerFriendPreferences.
         * @implements IPerFriendPreferences
         * @constructor
         * @param {IPerFriendPreferences=} [properties] Properties to set
         */
        function PerFriendPreferences(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PerFriendPreferences accountid.
         * @member {number} accountid
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.accountid = 0;
    
        /**
         * PerFriendPreferences nickname.
         * @member {string} nickname
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.nickname = "";
    
        /**
         * PerFriendPreferences notifications_showingame.
         * @member {ENotificationSetting} notifications_showingame
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.notifications_showingame = 0;
    
        /**
         * PerFriendPreferences notifications_showonline.
         * @member {ENotificationSetting} notifications_showonline
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.notifications_showonline = 0;
    
        /**
         * PerFriendPreferences notifications_showmessages.
         * @member {ENotificationSetting} notifications_showmessages
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.notifications_showmessages = 0;
    
        /**
         * PerFriendPreferences sounds_showingame.
         * @member {ENotificationSetting} sounds_showingame
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.sounds_showingame = 0;
    
        /**
         * PerFriendPreferences sounds_showonline.
         * @member {ENotificationSetting} sounds_showonline
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.sounds_showonline = 0;
    
        /**
         * PerFriendPreferences sounds_showmessages.
         * @member {ENotificationSetting} sounds_showmessages
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.sounds_showmessages = 0;
    
        /**
         * PerFriendPreferences notifications_sendmobile.
         * @member {ENotificationSetting} notifications_sendmobile
         * @memberof PerFriendPreferences
         * @instance
         */
        PerFriendPreferences.prototype.notifications_sendmobile = 0;
    
        /**
         * Creates a new PerFriendPreferences instance using the specified properties.
         * @function create
         * @memberof PerFriendPreferences
         * @static
         * @param {IPerFriendPreferences=} [properties] Properties to set
         * @returns {PerFriendPreferences} PerFriendPreferences instance
         */
        PerFriendPreferences.create = function create(properties) {
            return new PerFriendPreferences(properties);
        };
    
        /**
         * Encodes the specified PerFriendPreferences message. Does not implicitly {@link PerFriendPreferences.verify|verify} messages.
         * @function encode
         * @memberof PerFriendPreferences
         * @static
         * @param {IPerFriendPreferences} message PerFriendPreferences message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PerFriendPreferences.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountid != null && Object.hasOwnProperty.call(message, "accountid"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.accountid);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.notifications_showingame != null && Object.hasOwnProperty.call(message, "notifications_showingame"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.notifications_showingame);
            if (message.notifications_showonline != null && Object.hasOwnProperty.call(message, "notifications_showonline"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.notifications_showonline);
            if (message.notifications_showmessages != null && Object.hasOwnProperty.call(message, "notifications_showmessages"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.notifications_showmessages);
            if (message.sounds_showingame != null && Object.hasOwnProperty.call(message, "sounds_showingame"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.sounds_showingame);
            if (message.sounds_showonline != null && Object.hasOwnProperty.call(message, "sounds_showonline"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.sounds_showonline);
            if (message.sounds_showmessages != null && Object.hasOwnProperty.call(message, "sounds_showmessages"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.sounds_showmessages);
            if (message.notifications_sendmobile != null && Object.hasOwnProperty.call(message, "notifications_sendmobile"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.notifications_sendmobile);
            return writer;
        };
    
        /**
         * Encodes the specified PerFriendPreferences message, length delimited. Does not implicitly {@link PerFriendPreferences.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PerFriendPreferences
         * @static
         * @param {IPerFriendPreferences} message PerFriendPreferences message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PerFriendPreferences.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PerFriendPreferences message from the specified reader or buffer.
         * @function decode
         * @memberof PerFriendPreferences
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PerFriendPreferences} PerFriendPreferences
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PerFriendPreferences.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PerFriendPreferences();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.fixed32();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.notifications_showingame = reader.int32();
                    break;
                case 4:
                    message.notifications_showonline = reader.int32();
                    break;
                case 5:
                    message.notifications_showmessages = reader.int32();
                    break;
                case 6:
                    message.sounds_showingame = reader.int32();
                    break;
                case 7:
                    message.sounds_showonline = reader.int32();
                    break;
                case 8:
                    message.sounds_showmessages = reader.int32();
                    break;
                case 9:
                    message.notifications_sendmobile = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PerFriendPreferences message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PerFriendPreferences
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PerFriendPreferences} PerFriendPreferences
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PerFriendPreferences.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PerFriendPreferences message.
         * @function verify
         * @memberof PerFriendPreferences
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PerFriendPreferences.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.notifications_showingame != null && message.hasOwnProperty("notifications_showingame"))
                switch (message.notifications_showingame) {
                default:
                    return "notifications_showingame: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.notifications_showonline != null && message.hasOwnProperty("notifications_showonline"))
                switch (message.notifications_showonline) {
                default:
                    return "notifications_showonline: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.notifications_showmessages != null && message.hasOwnProperty("notifications_showmessages"))
                switch (message.notifications_showmessages) {
                default:
                    return "notifications_showmessages: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.sounds_showingame != null && message.hasOwnProperty("sounds_showingame"))
                switch (message.sounds_showingame) {
                default:
                    return "sounds_showingame: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.sounds_showonline != null && message.hasOwnProperty("sounds_showonline"))
                switch (message.sounds_showonline) {
                default:
                    return "sounds_showonline: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.sounds_showmessages != null && message.hasOwnProperty("sounds_showmessages"))
                switch (message.sounds_showmessages) {
                default:
                    return "sounds_showmessages: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.notifications_sendmobile != null && message.hasOwnProperty("notifications_sendmobile"))
                switch (message.notifications_sendmobile) {
                default:
                    return "notifications_sendmobile: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a PerFriendPreferences message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PerFriendPreferences
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PerFriendPreferences} PerFriendPreferences
         */
        PerFriendPreferences.fromObject = function fromObject(object) {
            if (object instanceof $root.PerFriendPreferences)
                return object;
            var message = new $root.PerFriendPreferences();
            if (object.accountid != null)
                message.accountid = object.accountid >>> 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            switch (object.notifications_showingame) {
            case "k_ENotificationSettingNotifyUseDefault":
            case 0:
                message.notifications_showingame = 0;
                break;
            case "k_ENotificationSettingAlways":
            case 1:
                message.notifications_showingame = 1;
                break;
            case "k_ENotificationSettingNever":
            case 2:
                message.notifications_showingame = 2;
                break;
            }
            switch (object.notifications_showonline) {
            case "k_ENotificationSettingNotifyUseDefault":
            case 0:
                message.notifications_showonline = 0;
                break;
            case "k_ENotificationSettingAlways":
            case 1:
                message.notifications_showonline = 1;
                break;
            case "k_ENotificationSettingNever":
            case 2:
                message.notifications_showonline = 2;
                break;
            }
            switch (object.notifications_showmessages) {
            case "k_ENotificationSettingNotifyUseDefault":
            case 0:
                message.notifications_showmessages = 0;
                break;
            case "k_ENotificationSettingAlways":
            case 1:
                message.notifications_showmessages = 1;
                break;
            case "k_ENotificationSettingNever":
            case 2:
                message.notifications_showmessages = 2;
                break;
            }
            switch (object.sounds_showingame) {
            case "k_ENotificationSettingNotifyUseDefault":
            case 0:
                message.sounds_showingame = 0;
                break;
            case "k_ENotificationSettingAlways":
            case 1:
                message.sounds_showingame = 1;
                break;
            case "k_ENotificationSettingNever":
            case 2:
                message.sounds_showingame = 2;
                break;
            }
            switch (object.sounds_showonline) {
            case "k_ENotificationSettingNotifyUseDefault":
            case 0:
                message.sounds_showonline = 0;
                break;
            case "k_ENotificationSettingAlways":
            case 1:
                message.sounds_showonline = 1;
                break;
            case "k_ENotificationSettingNever":
            case 2:
                message.sounds_showonline = 2;
                break;
            }
            switch (object.sounds_showmessages) {
            case "k_ENotificationSettingNotifyUseDefault":
            case 0:
                message.sounds_showmessages = 0;
                break;
            case "k_ENotificationSettingAlways":
            case 1:
                message.sounds_showmessages = 1;
                break;
            case "k_ENotificationSettingNever":
            case 2:
                message.sounds_showmessages = 2;
                break;
            }
            switch (object.notifications_sendmobile) {
            case "k_ENotificationSettingNotifyUseDefault":
            case 0:
                message.notifications_sendmobile = 0;
                break;
            case "k_ENotificationSettingAlways":
            case 1:
                message.notifications_sendmobile = 1;
                break;
            case "k_ENotificationSettingNever":
            case 2:
                message.notifications_sendmobile = 2;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a PerFriendPreferences message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PerFriendPreferences
         * @static
         * @param {PerFriendPreferences} message PerFriendPreferences
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PerFriendPreferences.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accountid = 0;
                object.nickname = "";
                object.notifications_showingame = options.enums === String ? "k_ENotificationSettingNotifyUseDefault" : 0;
                object.notifications_showonline = options.enums === String ? "k_ENotificationSettingNotifyUseDefault" : 0;
                object.notifications_showmessages = options.enums === String ? "k_ENotificationSettingNotifyUseDefault" : 0;
                object.sounds_showingame = options.enums === String ? "k_ENotificationSettingNotifyUseDefault" : 0;
                object.sounds_showonline = options.enums === String ? "k_ENotificationSettingNotifyUseDefault" : 0;
                object.sounds_showmessages = options.enums === String ? "k_ENotificationSettingNotifyUseDefault" : 0;
                object.notifications_sendmobile = options.enums === String ? "k_ENotificationSettingNotifyUseDefault" : 0;
            }
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                object.accountid = message.accountid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.notifications_showingame != null && message.hasOwnProperty("notifications_showingame"))
                object.notifications_showingame = options.enums === String ? $root.ENotificationSetting[message.notifications_showingame] : message.notifications_showingame;
            if (message.notifications_showonline != null && message.hasOwnProperty("notifications_showonline"))
                object.notifications_showonline = options.enums === String ? $root.ENotificationSetting[message.notifications_showonline] : message.notifications_showonline;
            if (message.notifications_showmessages != null && message.hasOwnProperty("notifications_showmessages"))
                object.notifications_showmessages = options.enums === String ? $root.ENotificationSetting[message.notifications_showmessages] : message.notifications_showmessages;
            if (message.sounds_showingame != null && message.hasOwnProperty("sounds_showingame"))
                object.sounds_showingame = options.enums === String ? $root.ENotificationSetting[message.sounds_showingame] : message.sounds_showingame;
            if (message.sounds_showonline != null && message.hasOwnProperty("sounds_showonline"))
                object.sounds_showonline = options.enums === String ? $root.ENotificationSetting[message.sounds_showonline] : message.sounds_showonline;
            if (message.sounds_showmessages != null && message.hasOwnProperty("sounds_showmessages"))
                object.sounds_showmessages = options.enums === String ? $root.ENotificationSetting[message.sounds_showmessages] : message.sounds_showmessages;
            if (message.notifications_sendmobile != null && message.hasOwnProperty("notifications_sendmobile"))
                object.notifications_sendmobile = options.enums === String ? $root.ENotificationSetting[message.notifications_sendmobile] : message.notifications_sendmobile;
            return object;
        };
    
        /**
         * Converts this PerFriendPreferences to JSON.
         * @function toJSON
         * @memberof PerFriendPreferences
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PerFriendPreferences.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PerFriendPreferences;
    })();
    
    $root.CPlayer_GetPerFriendPreferences_Response = (function() {
    
        /**
         * Properties of a CPlayer_GetPerFriendPreferences_Response.
         * @exports ICPlayer_GetPerFriendPreferences_Response
         * @interface ICPlayer_GetPerFriendPreferences_Response
         * @property {Array.<IPerFriendPreferences>|null} [preferences] CPlayer_GetPerFriendPreferences_Response preferences
         */
    
        /**
         * Constructs a new CPlayer_GetPerFriendPreferences_Response.
         * @exports CPlayer_GetPerFriendPreferences_Response
         * @classdesc Represents a CPlayer_GetPerFriendPreferences_Response.
         * @implements ICPlayer_GetPerFriendPreferences_Response
         * @constructor
         * @param {ICPlayer_GetPerFriendPreferences_Response=} [properties] Properties to set
         */
        function CPlayer_GetPerFriendPreferences_Response(properties) {
            this.preferences = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetPerFriendPreferences_Response preferences.
         * @member {Array.<IPerFriendPreferences>} preferences
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @instance
         */
        CPlayer_GetPerFriendPreferences_Response.prototype.preferences = $util.emptyArray;
    
        /**
         * Creates a new CPlayer_GetPerFriendPreferences_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @static
         * @param {ICPlayer_GetPerFriendPreferences_Response=} [properties] Properties to set
         * @returns {CPlayer_GetPerFriendPreferences_Response} CPlayer_GetPerFriendPreferences_Response instance
         */
        CPlayer_GetPerFriendPreferences_Response.create = function create(properties) {
            return new CPlayer_GetPerFriendPreferences_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetPerFriendPreferences_Response message. Does not implicitly {@link CPlayer_GetPerFriendPreferences_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @static
         * @param {ICPlayer_GetPerFriendPreferences_Response} message CPlayer_GetPerFriendPreferences_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetPerFriendPreferences_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.preferences != null && message.preferences.length)
                for (var i = 0; i < message.preferences.length; ++i)
                    $root.PerFriendPreferences.encode(message.preferences[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetPerFriendPreferences_Response message, length delimited. Does not implicitly {@link CPlayer_GetPerFriendPreferences_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @static
         * @param {ICPlayer_GetPerFriendPreferences_Response} message CPlayer_GetPerFriendPreferences_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetPerFriendPreferences_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetPerFriendPreferences_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetPerFriendPreferences_Response} CPlayer_GetPerFriendPreferences_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetPerFriendPreferences_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetPerFriendPreferences_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.preferences && message.preferences.length))
                        message.preferences = [];
                    message.preferences.push($root.PerFriendPreferences.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_GetPerFriendPreferences_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetPerFriendPreferences_Response} CPlayer_GetPerFriendPreferences_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetPerFriendPreferences_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetPerFriendPreferences_Response message.
         * @function verify
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetPerFriendPreferences_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.preferences != null && message.hasOwnProperty("preferences")) {
                if (!Array.isArray(message.preferences))
                    return "preferences: array expected";
                for (var i = 0; i < message.preferences.length; ++i) {
                    var error = $root.PerFriendPreferences.verify(message.preferences[i]);
                    if (error)
                        return "preferences." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_GetPerFriendPreferences_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetPerFriendPreferences_Response} CPlayer_GetPerFriendPreferences_Response
         */
        CPlayer_GetPerFriendPreferences_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetPerFriendPreferences_Response)
                return object;
            var message = new $root.CPlayer_GetPerFriendPreferences_Response();
            if (object.preferences) {
                if (!Array.isArray(object.preferences))
                    throw TypeError(".CPlayer_GetPerFriendPreferences_Response.preferences: array expected");
                message.preferences = [];
                for (var i = 0; i < object.preferences.length; ++i) {
                    if (typeof object.preferences[i] !== "object")
                        throw TypeError(".CPlayer_GetPerFriendPreferences_Response.preferences: object expected");
                    message.preferences[i] = $root.PerFriendPreferences.fromObject(object.preferences[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetPerFriendPreferences_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @static
         * @param {CPlayer_GetPerFriendPreferences_Response} message CPlayer_GetPerFriendPreferences_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetPerFriendPreferences_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.preferences = [];
            if (message.preferences && message.preferences.length) {
                object.preferences = [];
                for (var j = 0; j < message.preferences.length; ++j)
                    object.preferences[j] = $root.PerFriendPreferences.toObject(message.preferences[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CPlayer_GetPerFriendPreferences_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_GetPerFriendPreferences_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetPerFriendPreferences_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_GetPerFriendPreferences_Response;
    })();
    
    $root.CPlayer_SetPerFriendPreferences_Request = (function() {
    
        /**
         * Properties of a CPlayer_SetPerFriendPreferences_Request.
         * @exports ICPlayer_SetPerFriendPreferences_Request
         * @interface ICPlayer_SetPerFriendPreferences_Request
         * @property {IPerFriendPreferences|null} [preferences] CPlayer_SetPerFriendPreferences_Request preferences
         */
    
        /**
         * Constructs a new CPlayer_SetPerFriendPreferences_Request.
         * @exports CPlayer_SetPerFriendPreferences_Request
         * @classdesc Represents a CPlayer_SetPerFriendPreferences_Request.
         * @implements ICPlayer_SetPerFriendPreferences_Request
         * @constructor
         * @param {ICPlayer_SetPerFriendPreferences_Request=} [properties] Properties to set
         */
        function CPlayer_SetPerFriendPreferences_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_SetPerFriendPreferences_Request preferences.
         * @member {IPerFriendPreferences|null|undefined} preferences
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @instance
         */
        CPlayer_SetPerFriendPreferences_Request.prototype.preferences = null;
    
        /**
         * Creates a new CPlayer_SetPerFriendPreferences_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @static
         * @param {ICPlayer_SetPerFriendPreferences_Request=} [properties] Properties to set
         * @returns {CPlayer_SetPerFriendPreferences_Request} CPlayer_SetPerFriendPreferences_Request instance
         */
        CPlayer_SetPerFriendPreferences_Request.create = function create(properties) {
            return new CPlayer_SetPerFriendPreferences_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_SetPerFriendPreferences_Request message. Does not implicitly {@link CPlayer_SetPerFriendPreferences_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @static
         * @param {ICPlayer_SetPerFriendPreferences_Request} message CPlayer_SetPerFriendPreferences_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_SetPerFriendPreferences_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.preferences != null && Object.hasOwnProperty.call(message, "preferences"))
                $root.PerFriendPreferences.encode(message.preferences, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_SetPerFriendPreferences_Request message, length delimited. Does not implicitly {@link CPlayer_SetPerFriendPreferences_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @static
         * @param {ICPlayer_SetPerFriendPreferences_Request} message CPlayer_SetPerFriendPreferences_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_SetPerFriendPreferences_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_SetPerFriendPreferences_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_SetPerFriendPreferences_Request} CPlayer_SetPerFriendPreferences_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_SetPerFriendPreferences_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_SetPerFriendPreferences_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.preferences = $root.PerFriendPreferences.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_SetPerFriendPreferences_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_SetPerFriendPreferences_Request} CPlayer_SetPerFriendPreferences_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_SetPerFriendPreferences_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_SetPerFriendPreferences_Request message.
         * @function verify
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_SetPerFriendPreferences_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.preferences != null && message.hasOwnProperty("preferences")) {
                var error = $root.PerFriendPreferences.verify(message.preferences);
                if (error)
                    return "preferences." + error;
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_SetPerFriendPreferences_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_SetPerFriendPreferences_Request} CPlayer_SetPerFriendPreferences_Request
         */
        CPlayer_SetPerFriendPreferences_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_SetPerFriendPreferences_Request)
                return object;
            var message = new $root.CPlayer_SetPerFriendPreferences_Request();
            if (object.preferences != null) {
                if (typeof object.preferences !== "object")
                    throw TypeError(".CPlayer_SetPerFriendPreferences_Request.preferences: object expected");
                message.preferences = $root.PerFriendPreferences.fromObject(object.preferences);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_SetPerFriendPreferences_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @static
         * @param {CPlayer_SetPerFriendPreferences_Request} message CPlayer_SetPerFriendPreferences_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_SetPerFriendPreferences_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.preferences = null;
            if (message.preferences != null && message.hasOwnProperty("preferences"))
                object.preferences = $root.PerFriendPreferences.toObject(message.preferences, options);
            return object;
        };
    
        /**
         * Converts this CPlayer_SetPerFriendPreferences_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_SetPerFriendPreferences_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_SetPerFriendPreferences_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_SetPerFriendPreferences_Request;
    })();
    
    $root.CPlayer_SetPerFriendPreferences_Response = (function() {
    
        /**
         * Properties of a CPlayer_SetPerFriendPreferences_Response.
         * @exports ICPlayer_SetPerFriendPreferences_Response
         * @interface ICPlayer_SetPerFriendPreferences_Response
         */
    
        /**
         * Constructs a new CPlayer_SetPerFriendPreferences_Response.
         * @exports CPlayer_SetPerFriendPreferences_Response
         * @classdesc Represents a CPlayer_SetPerFriendPreferences_Response.
         * @implements ICPlayer_SetPerFriendPreferences_Response
         * @constructor
         * @param {ICPlayer_SetPerFriendPreferences_Response=} [properties] Properties to set
         */
        function CPlayer_SetPerFriendPreferences_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_SetPerFriendPreferences_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @static
         * @param {ICPlayer_SetPerFriendPreferences_Response=} [properties] Properties to set
         * @returns {CPlayer_SetPerFriendPreferences_Response} CPlayer_SetPerFriendPreferences_Response instance
         */
        CPlayer_SetPerFriendPreferences_Response.create = function create(properties) {
            return new CPlayer_SetPerFriendPreferences_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_SetPerFriendPreferences_Response message. Does not implicitly {@link CPlayer_SetPerFriendPreferences_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @static
         * @param {ICPlayer_SetPerFriendPreferences_Response} message CPlayer_SetPerFriendPreferences_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_SetPerFriendPreferences_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_SetPerFriendPreferences_Response message, length delimited. Does not implicitly {@link CPlayer_SetPerFriendPreferences_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @static
         * @param {ICPlayer_SetPerFriendPreferences_Response} message CPlayer_SetPerFriendPreferences_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_SetPerFriendPreferences_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_SetPerFriendPreferences_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_SetPerFriendPreferences_Response} CPlayer_SetPerFriendPreferences_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_SetPerFriendPreferences_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_SetPerFriendPreferences_Response();
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
         * Decodes a CPlayer_SetPerFriendPreferences_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_SetPerFriendPreferences_Response} CPlayer_SetPerFriendPreferences_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_SetPerFriendPreferences_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_SetPerFriendPreferences_Response message.
         * @function verify
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_SetPerFriendPreferences_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_SetPerFriendPreferences_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_SetPerFriendPreferences_Response} CPlayer_SetPerFriendPreferences_Response
         */
        CPlayer_SetPerFriendPreferences_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_SetPerFriendPreferences_Response)
                return object;
            return new $root.CPlayer_SetPerFriendPreferences_Response();
        };
    
        /**
         * Creates a plain object from a CPlayer_SetPerFriendPreferences_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @static
         * @param {CPlayer_SetPerFriendPreferences_Response} message CPlayer_SetPerFriendPreferences_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_SetPerFriendPreferences_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_SetPerFriendPreferences_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_SetPerFriendPreferences_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_SetPerFriendPreferences_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_SetPerFriendPreferences_Response;
    })();
    
    $root.CPlayer_AddFriend_Request = (function() {
    
        /**
         * Properties of a CPlayer_AddFriend_Request.
         * @exports ICPlayer_AddFriend_Request
         * @interface ICPlayer_AddFriend_Request
         * @property {number|Long|null} [steamid] CPlayer_AddFriend_Request steamid
         */
    
        /**
         * Constructs a new CPlayer_AddFriend_Request.
         * @exports CPlayer_AddFriend_Request
         * @classdesc Represents a CPlayer_AddFriend_Request.
         * @implements ICPlayer_AddFriend_Request
         * @constructor
         * @param {ICPlayer_AddFriend_Request=} [properties] Properties to set
         */
        function CPlayer_AddFriend_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_AddFriend_Request steamid.
         * @member {number|Long} steamid
         * @memberof CPlayer_AddFriend_Request
         * @instance
         */
        CPlayer_AddFriend_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CPlayer_AddFriend_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_AddFriend_Request
         * @static
         * @param {ICPlayer_AddFriend_Request=} [properties] Properties to set
         * @returns {CPlayer_AddFriend_Request} CPlayer_AddFriend_Request instance
         */
        CPlayer_AddFriend_Request.create = function create(properties) {
            return new CPlayer_AddFriend_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_AddFriend_Request message. Does not implicitly {@link CPlayer_AddFriend_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_AddFriend_Request
         * @static
         * @param {ICPlayer_AddFriend_Request} message CPlayer_AddFriend_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_AddFriend_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_AddFriend_Request message, length delimited. Does not implicitly {@link CPlayer_AddFriend_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_AddFriend_Request
         * @static
         * @param {ICPlayer_AddFriend_Request} message CPlayer_AddFriend_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_AddFriend_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_AddFriend_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_AddFriend_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_AddFriend_Request} CPlayer_AddFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_AddFriend_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_AddFriend_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_AddFriend_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_AddFriend_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_AddFriend_Request} CPlayer_AddFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_AddFriend_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_AddFriend_Request message.
         * @function verify
         * @memberof CPlayer_AddFriend_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_AddFriend_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_AddFriend_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_AddFriend_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_AddFriend_Request} CPlayer_AddFriend_Request
         */
        CPlayer_AddFriend_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_AddFriend_Request)
                return object;
            var message = new $root.CPlayer_AddFriend_Request();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_AddFriend_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_AddFriend_Request
         * @static
         * @param {CPlayer_AddFriend_Request} message CPlayer_AddFriend_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_AddFriend_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            return object;
        };
    
        /**
         * Converts this CPlayer_AddFriend_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_AddFriend_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_AddFriend_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_AddFriend_Request;
    })();
    
    $root.CPlayer_AddFriend_Response = (function() {
    
        /**
         * Properties of a CPlayer_AddFriend_Response.
         * @exports ICPlayer_AddFriend_Response
         * @interface ICPlayer_AddFriend_Response
         * @property {boolean|null} [invite_sent] CPlayer_AddFriend_Response invite_sent
         * @property {number|null} [friend_relationship] CPlayer_AddFriend_Response friend_relationship
         */
    
        /**
         * Constructs a new CPlayer_AddFriend_Response.
         * @exports CPlayer_AddFriend_Response
         * @classdesc Represents a CPlayer_AddFriend_Response.
         * @implements ICPlayer_AddFriend_Response
         * @constructor
         * @param {ICPlayer_AddFriend_Response=} [properties] Properties to set
         */
        function CPlayer_AddFriend_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_AddFriend_Response invite_sent.
         * @member {boolean} invite_sent
         * @memberof CPlayer_AddFriend_Response
         * @instance
         */
        CPlayer_AddFriend_Response.prototype.invite_sent = false;
    
        /**
         * CPlayer_AddFriend_Response friend_relationship.
         * @member {number} friend_relationship
         * @memberof CPlayer_AddFriend_Response
         * @instance
         */
        CPlayer_AddFriend_Response.prototype.friend_relationship = 0;
    
        /**
         * Creates a new CPlayer_AddFriend_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_AddFriend_Response
         * @static
         * @param {ICPlayer_AddFriend_Response=} [properties] Properties to set
         * @returns {CPlayer_AddFriend_Response} CPlayer_AddFriend_Response instance
         */
        CPlayer_AddFriend_Response.create = function create(properties) {
            return new CPlayer_AddFriend_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_AddFriend_Response message. Does not implicitly {@link CPlayer_AddFriend_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_AddFriend_Response
         * @static
         * @param {ICPlayer_AddFriend_Response} message CPlayer_AddFriend_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_AddFriend_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.invite_sent != null && Object.hasOwnProperty.call(message, "invite_sent"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.invite_sent);
            if (message.friend_relationship != null && Object.hasOwnProperty.call(message, "friend_relationship"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.friend_relationship);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_AddFriend_Response message, length delimited. Does not implicitly {@link CPlayer_AddFriend_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_AddFriend_Response
         * @static
         * @param {ICPlayer_AddFriend_Response} message CPlayer_AddFriend_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_AddFriend_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_AddFriend_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_AddFriend_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_AddFriend_Response} CPlayer_AddFriend_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_AddFriend_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_AddFriend_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.invite_sent = reader.bool();
                    break;
                case 2:
                    message.friend_relationship = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_AddFriend_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_AddFriend_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_AddFriend_Response} CPlayer_AddFriend_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_AddFriend_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_AddFriend_Response message.
         * @function verify
         * @memberof CPlayer_AddFriend_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_AddFriend_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.invite_sent != null && message.hasOwnProperty("invite_sent"))
                if (typeof message.invite_sent !== "boolean")
                    return "invite_sent: boolean expected";
            if (message.friend_relationship != null && message.hasOwnProperty("friend_relationship"))
                if (!$util.isInteger(message.friend_relationship))
                    return "friend_relationship: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_AddFriend_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_AddFriend_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_AddFriend_Response} CPlayer_AddFriend_Response
         */
        CPlayer_AddFriend_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_AddFriend_Response)
                return object;
            var message = new $root.CPlayer_AddFriend_Response();
            if (object.invite_sent != null)
                message.invite_sent = Boolean(object.invite_sent);
            if (object.friend_relationship != null)
                message.friend_relationship = object.friend_relationship >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_AddFriend_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_AddFriend_Response
         * @static
         * @param {CPlayer_AddFriend_Response} message CPlayer_AddFriend_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_AddFriend_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.invite_sent = false;
                object.friend_relationship = 0;
            }
            if (message.invite_sent != null && message.hasOwnProperty("invite_sent"))
                object.invite_sent = message.invite_sent;
            if (message.friend_relationship != null && message.hasOwnProperty("friend_relationship"))
                object.friend_relationship = message.friend_relationship;
            return object;
        };
    
        /**
         * Converts this CPlayer_AddFriend_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_AddFriend_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_AddFriend_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_AddFriend_Response;
    })();
    
    $root.CPlayer_RemoveFriend_Request = (function() {
    
        /**
         * Properties of a CPlayer_RemoveFriend_Request.
         * @exports ICPlayer_RemoveFriend_Request
         * @interface ICPlayer_RemoveFriend_Request
         * @property {number|Long|null} [steamid] CPlayer_RemoveFriend_Request steamid
         */
    
        /**
         * Constructs a new CPlayer_RemoveFriend_Request.
         * @exports CPlayer_RemoveFriend_Request
         * @classdesc Represents a CPlayer_RemoveFriend_Request.
         * @implements ICPlayer_RemoveFriend_Request
         * @constructor
         * @param {ICPlayer_RemoveFriend_Request=} [properties] Properties to set
         */
        function CPlayer_RemoveFriend_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_RemoveFriend_Request steamid.
         * @member {number|Long} steamid
         * @memberof CPlayer_RemoveFriend_Request
         * @instance
         */
        CPlayer_RemoveFriend_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CPlayer_RemoveFriend_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_RemoveFriend_Request
         * @static
         * @param {ICPlayer_RemoveFriend_Request=} [properties] Properties to set
         * @returns {CPlayer_RemoveFriend_Request} CPlayer_RemoveFriend_Request instance
         */
        CPlayer_RemoveFriend_Request.create = function create(properties) {
            return new CPlayer_RemoveFriend_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_RemoveFriend_Request message. Does not implicitly {@link CPlayer_RemoveFriend_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_RemoveFriend_Request
         * @static
         * @param {ICPlayer_RemoveFriend_Request} message CPlayer_RemoveFriend_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_RemoveFriend_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_RemoveFriend_Request message, length delimited. Does not implicitly {@link CPlayer_RemoveFriend_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_RemoveFriend_Request
         * @static
         * @param {ICPlayer_RemoveFriend_Request} message CPlayer_RemoveFriend_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_RemoveFriend_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_RemoveFriend_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_RemoveFriend_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_RemoveFriend_Request} CPlayer_RemoveFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_RemoveFriend_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_RemoveFriend_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_RemoveFriend_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_RemoveFriend_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_RemoveFriend_Request} CPlayer_RemoveFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_RemoveFriend_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_RemoveFriend_Request message.
         * @function verify
         * @memberof CPlayer_RemoveFriend_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_RemoveFriend_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_RemoveFriend_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_RemoveFriend_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_RemoveFriend_Request} CPlayer_RemoveFriend_Request
         */
        CPlayer_RemoveFriend_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_RemoveFriend_Request)
                return object;
            var message = new $root.CPlayer_RemoveFriend_Request();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_RemoveFriend_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_RemoveFriend_Request
         * @static
         * @param {CPlayer_RemoveFriend_Request} message CPlayer_RemoveFriend_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_RemoveFriend_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            return object;
        };
    
        /**
         * Converts this CPlayer_RemoveFriend_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_RemoveFriend_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_RemoveFriend_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_RemoveFriend_Request;
    })();
    
    $root.CPlayer_RemoveFriend_Response = (function() {
    
        /**
         * Properties of a CPlayer_RemoveFriend_Response.
         * @exports ICPlayer_RemoveFriend_Response
         * @interface ICPlayer_RemoveFriend_Response
         * @property {number|null} [friend_relationship] CPlayer_RemoveFriend_Response friend_relationship
         */
    
        /**
         * Constructs a new CPlayer_RemoveFriend_Response.
         * @exports CPlayer_RemoveFriend_Response
         * @classdesc Represents a CPlayer_RemoveFriend_Response.
         * @implements ICPlayer_RemoveFriend_Response
         * @constructor
         * @param {ICPlayer_RemoveFriend_Response=} [properties] Properties to set
         */
        function CPlayer_RemoveFriend_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_RemoveFriend_Response friend_relationship.
         * @member {number} friend_relationship
         * @memberof CPlayer_RemoveFriend_Response
         * @instance
         */
        CPlayer_RemoveFriend_Response.prototype.friend_relationship = 0;
    
        /**
         * Creates a new CPlayer_RemoveFriend_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_RemoveFriend_Response
         * @static
         * @param {ICPlayer_RemoveFriend_Response=} [properties] Properties to set
         * @returns {CPlayer_RemoveFriend_Response} CPlayer_RemoveFriend_Response instance
         */
        CPlayer_RemoveFriend_Response.create = function create(properties) {
            return new CPlayer_RemoveFriend_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_RemoveFriend_Response message. Does not implicitly {@link CPlayer_RemoveFriend_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_RemoveFriend_Response
         * @static
         * @param {ICPlayer_RemoveFriend_Response} message CPlayer_RemoveFriend_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_RemoveFriend_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.friend_relationship != null && Object.hasOwnProperty.call(message, "friend_relationship"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.friend_relationship);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_RemoveFriend_Response message, length delimited. Does not implicitly {@link CPlayer_RemoveFriend_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_RemoveFriend_Response
         * @static
         * @param {ICPlayer_RemoveFriend_Response} message CPlayer_RemoveFriend_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_RemoveFriend_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_RemoveFriend_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_RemoveFriend_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_RemoveFriend_Response} CPlayer_RemoveFriend_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_RemoveFriend_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_RemoveFriend_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.friend_relationship = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_RemoveFriend_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_RemoveFriend_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_RemoveFriend_Response} CPlayer_RemoveFriend_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_RemoveFriend_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_RemoveFriend_Response message.
         * @function verify
         * @memberof CPlayer_RemoveFriend_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_RemoveFriend_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.friend_relationship != null && message.hasOwnProperty("friend_relationship"))
                if (!$util.isInteger(message.friend_relationship))
                    return "friend_relationship: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_RemoveFriend_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_RemoveFriend_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_RemoveFriend_Response} CPlayer_RemoveFriend_Response
         */
        CPlayer_RemoveFriend_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_RemoveFriend_Response)
                return object;
            var message = new $root.CPlayer_RemoveFriend_Response();
            if (object.friend_relationship != null)
                message.friend_relationship = object.friend_relationship >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_RemoveFriend_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_RemoveFriend_Response
         * @static
         * @param {CPlayer_RemoveFriend_Response} message CPlayer_RemoveFriend_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_RemoveFriend_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.friend_relationship = 0;
            if (message.friend_relationship != null && message.hasOwnProperty("friend_relationship"))
                object.friend_relationship = message.friend_relationship;
            return object;
        };
    
        /**
         * Converts this CPlayer_RemoveFriend_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_RemoveFriend_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_RemoveFriend_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_RemoveFriend_Response;
    })();
    
    $root.CPlayer_IgnoreFriend_Request = (function() {
    
        /**
         * Properties of a CPlayer_IgnoreFriend_Request.
         * @exports ICPlayer_IgnoreFriend_Request
         * @interface ICPlayer_IgnoreFriend_Request
         * @property {number|Long|null} [steamid] CPlayer_IgnoreFriend_Request steamid
         * @property {boolean|null} [unignore] CPlayer_IgnoreFriend_Request unignore
         */
    
        /**
         * Constructs a new CPlayer_IgnoreFriend_Request.
         * @exports CPlayer_IgnoreFriend_Request
         * @classdesc Represents a CPlayer_IgnoreFriend_Request.
         * @implements ICPlayer_IgnoreFriend_Request
         * @constructor
         * @param {ICPlayer_IgnoreFriend_Request=} [properties] Properties to set
         */
        function CPlayer_IgnoreFriend_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_IgnoreFriend_Request steamid.
         * @member {number|Long} steamid
         * @memberof CPlayer_IgnoreFriend_Request
         * @instance
         */
        CPlayer_IgnoreFriend_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CPlayer_IgnoreFriend_Request unignore.
         * @member {boolean} unignore
         * @memberof CPlayer_IgnoreFriend_Request
         * @instance
         */
        CPlayer_IgnoreFriend_Request.prototype.unignore = false;
    
        /**
         * Creates a new CPlayer_IgnoreFriend_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_IgnoreFriend_Request
         * @static
         * @param {ICPlayer_IgnoreFriend_Request=} [properties] Properties to set
         * @returns {CPlayer_IgnoreFriend_Request} CPlayer_IgnoreFriend_Request instance
         */
        CPlayer_IgnoreFriend_Request.create = function create(properties) {
            return new CPlayer_IgnoreFriend_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_IgnoreFriend_Request message. Does not implicitly {@link CPlayer_IgnoreFriend_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_IgnoreFriend_Request
         * @static
         * @param {ICPlayer_IgnoreFriend_Request} message CPlayer_IgnoreFriend_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_IgnoreFriend_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.unignore != null && Object.hasOwnProperty.call(message, "unignore"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.unignore);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_IgnoreFriend_Request message, length delimited. Does not implicitly {@link CPlayer_IgnoreFriend_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_IgnoreFriend_Request
         * @static
         * @param {ICPlayer_IgnoreFriend_Request} message CPlayer_IgnoreFriend_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_IgnoreFriend_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_IgnoreFriend_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_IgnoreFriend_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_IgnoreFriend_Request} CPlayer_IgnoreFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_IgnoreFriend_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_IgnoreFriend_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.unignore = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_IgnoreFriend_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_IgnoreFriend_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_IgnoreFriend_Request} CPlayer_IgnoreFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_IgnoreFriend_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_IgnoreFriend_Request message.
         * @function verify
         * @memberof CPlayer_IgnoreFriend_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_IgnoreFriend_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.unignore != null && message.hasOwnProperty("unignore"))
                if (typeof message.unignore !== "boolean")
                    return "unignore: boolean expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_IgnoreFriend_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_IgnoreFriend_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_IgnoreFriend_Request} CPlayer_IgnoreFriend_Request
         */
        CPlayer_IgnoreFriend_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_IgnoreFriend_Request)
                return object;
            var message = new $root.CPlayer_IgnoreFriend_Request();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.unignore != null)
                message.unignore = Boolean(object.unignore);
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_IgnoreFriend_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_IgnoreFriend_Request
         * @static
         * @param {CPlayer_IgnoreFriend_Request} message CPlayer_IgnoreFriend_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_IgnoreFriend_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.unignore = false;
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.unignore != null && message.hasOwnProperty("unignore"))
                object.unignore = message.unignore;
            return object;
        };
    
        /**
         * Converts this CPlayer_IgnoreFriend_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_IgnoreFriend_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_IgnoreFriend_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_IgnoreFriend_Request;
    })();
    
    $root.CPlayer_IgnoreFriend_Response = (function() {
    
        /**
         * Properties of a CPlayer_IgnoreFriend_Response.
         * @exports ICPlayer_IgnoreFriend_Response
         * @interface ICPlayer_IgnoreFriend_Response
         * @property {number|null} [friend_relationship] CPlayer_IgnoreFriend_Response friend_relationship
         */
    
        /**
         * Constructs a new CPlayer_IgnoreFriend_Response.
         * @exports CPlayer_IgnoreFriend_Response
         * @classdesc Represents a CPlayer_IgnoreFriend_Response.
         * @implements ICPlayer_IgnoreFriend_Response
         * @constructor
         * @param {ICPlayer_IgnoreFriend_Response=} [properties] Properties to set
         */
        function CPlayer_IgnoreFriend_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_IgnoreFriend_Response friend_relationship.
         * @member {number} friend_relationship
         * @memberof CPlayer_IgnoreFriend_Response
         * @instance
         */
        CPlayer_IgnoreFriend_Response.prototype.friend_relationship = 0;
    
        /**
         * Creates a new CPlayer_IgnoreFriend_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_IgnoreFriend_Response
         * @static
         * @param {ICPlayer_IgnoreFriend_Response=} [properties] Properties to set
         * @returns {CPlayer_IgnoreFriend_Response} CPlayer_IgnoreFriend_Response instance
         */
        CPlayer_IgnoreFriend_Response.create = function create(properties) {
            return new CPlayer_IgnoreFriend_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_IgnoreFriend_Response message. Does not implicitly {@link CPlayer_IgnoreFriend_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_IgnoreFriend_Response
         * @static
         * @param {ICPlayer_IgnoreFriend_Response} message CPlayer_IgnoreFriend_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_IgnoreFriend_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.friend_relationship != null && Object.hasOwnProperty.call(message, "friend_relationship"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.friend_relationship);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_IgnoreFriend_Response message, length delimited. Does not implicitly {@link CPlayer_IgnoreFriend_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_IgnoreFriend_Response
         * @static
         * @param {ICPlayer_IgnoreFriend_Response} message CPlayer_IgnoreFriend_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_IgnoreFriend_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_IgnoreFriend_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_IgnoreFriend_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_IgnoreFriend_Response} CPlayer_IgnoreFriend_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_IgnoreFriend_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_IgnoreFriend_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.friend_relationship = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_IgnoreFriend_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_IgnoreFriend_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_IgnoreFriend_Response} CPlayer_IgnoreFriend_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_IgnoreFriend_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_IgnoreFriend_Response message.
         * @function verify
         * @memberof CPlayer_IgnoreFriend_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_IgnoreFriend_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.friend_relationship != null && message.hasOwnProperty("friend_relationship"))
                if (!$util.isInteger(message.friend_relationship))
                    return "friend_relationship: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_IgnoreFriend_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_IgnoreFriend_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_IgnoreFriend_Response} CPlayer_IgnoreFriend_Response
         */
        CPlayer_IgnoreFriend_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_IgnoreFriend_Response)
                return object;
            var message = new $root.CPlayer_IgnoreFriend_Response();
            if (object.friend_relationship != null)
                message.friend_relationship = object.friend_relationship >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_IgnoreFriend_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_IgnoreFriend_Response
         * @static
         * @param {CPlayer_IgnoreFriend_Response} message CPlayer_IgnoreFriend_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_IgnoreFriend_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.friend_relationship = 0;
            if (message.friend_relationship != null && message.hasOwnProperty("friend_relationship"))
                object.friend_relationship = message.friend_relationship;
            return object;
        };
    
        /**
         * Converts this CPlayer_IgnoreFriend_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_IgnoreFriend_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_IgnoreFriend_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_IgnoreFriend_Response;
    })();
    
    $root.CPlayer_GetCommunityPreferences_Request = (function() {
    
        /**
         * Properties of a CPlayer_GetCommunityPreferences_Request.
         * @exports ICPlayer_GetCommunityPreferences_Request
         * @interface ICPlayer_GetCommunityPreferences_Request
         */
    
        /**
         * Constructs a new CPlayer_GetCommunityPreferences_Request.
         * @exports CPlayer_GetCommunityPreferences_Request
         * @classdesc Represents a CPlayer_GetCommunityPreferences_Request.
         * @implements ICPlayer_GetCommunityPreferences_Request
         * @constructor
         * @param {ICPlayer_GetCommunityPreferences_Request=} [properties] Properties to set
         */
        function CPlayer_GetCommunityPreferences_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_GetCommunityPreferences_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @static
         * @param {ICPlayer_GetCommunityPreferences_Request=} [properties] Properties to set
         * @returns {CPlayer_GetCommunityPreferences_Request} CPlayer_GetCommunityPreferences_Request instance
         */
        CPlayer_GetCommunityPreferences_Request.create = function create(properties) {
            return new CPlayer_GetCommunityPreferences_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetCommunityPreferences_Request message. Does not implicitly {@link CPlayer_GetCommunityPreferences_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @static
         * @param {ICPlayer_GetCommunityPreferences_Request} message CPlayer_GetCommunityPreferences_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetCommunityPreferences_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetCommunityPreferences_Request message, length delimited. Does not implicitly {@link CPlayer_GetCommunityPreferences_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @static
         * @param {ICPlayer_GetCommunityPreferences_Request} message CPlayer_GetCommunityPreferences_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetCommunityPreferences_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetCommunityPreferences_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetCommunityPreferences_Request} CPlayer_GetCommunityPreferences_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetCommunityPreferences_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetCommunityPreferences_Request();
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
         * Decodes a CPlayer_GetCommunityPreferences_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetCommunityPreferences_Request} CPlayer_GetCommunityPreferences_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetCommunityPreferences_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetCommunityPreferences_Request message.
         * @function verify
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetCommunityPreferences_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetCommunityPreferences_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetCommunityPreferences_Request} CPlayer_GetCommunityPreferences_Request
         */
        CPlayer_GetCommunityPreferences_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetCommunityPreferences_Request)
                return object;
            return new $root.CPlayer_GetCommunityPreferences_Request();
        };
    
        /**
         * Creates a plain object from a CPlayer_GetCommunityPreferences_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @static
         * @param {CPlayer_GetCommunityPreferences_Request} message CPlayer_GetCommunityPreferences_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetCommunityPreferences_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_GetCommunityPreferences_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_GetCommunityPreferences_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetCommunityPreferences_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_GetCommunityPreferences_Request;
    })();
    
    $root.CPlayer_CommunityPreferences = (function() {
    
        /**
         * Properties of a CPlayer_CommunityPreferences.
         * @exports ICPlayer_CommunityPreferences
         * @interface ICPlayer_CommunityPreferences
         * @property {boolean|null} [hide_adult_content_violence] CPlayer_CommunityPreferences hide_adult_content_violence
         * @property {boolean|null} [hide_adult_content_sex] CPlayer_CommunityPreferences hide_adult_content_sex
         * @property {boolean|null} [parenthesize_nicknames] CPlayer_CommunityPreferences parenthesize_nicknames
         * @property {number|null} [timestamp_updated] CPlayer_CommunityPreferences timestamp_updated
         */
    
        /**
         * Constructs a new CPlayer_CommunityPreferences.
         * @exports CPlayer_CommunityPreferences
         * @classdesc Represents a CPlayer_CommunityPreferences.
         * @implements ICPlayer_CommunityPreferences
         * @constructor
         * @param {ICPlayer_CommunityPreferences=} [properties] Properties to set
         */
        function CPlayer_CommunityPreferences(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_CommunityPreferences hide_adult_content_violence.
         * @member {boolean} hide_adult_content_violence
         * @memberof CPlayer_CommunityPreferences
         * @instance
         */
        CPlayer_CommunityPreferences.prototype.hide_adult_content_violence = true;
    
        /**
         * CPlayer_CommunityPreferences hide_adult_content_sex.
         * @member {boolean} hide_adult_content_sex
         * @memberof CPlayer_CommunityPreferences
         * @instance
         */
        CPlayer_CommunityPreferences.prototype.hide_adult_content_sex = true;
    
        /**
         * CPlayer_CommunityPreferences parenthesize_nicknames.
         * @member {boolean} parenthesize_nicknames
         * @memberof CPlayer_CommunityPreferences
         * @instance
         */
        CPlayer_CommunityPreferences.prototype.parenthesize_nicknames = false;
    
        /**
         * CPlayer_CommunityPreferences timestamp_updated.
         * @member {number} timestamp_updated
         * @memberof CPlayer_CommunityPreferences
         * @instance
         */
        CPlayer_CommunityPreferences.prototype.timestamp_updated = 0;
    
        /**
         * Creates a new CPlayer_CommunityPreferences instance using the specified properties.
         * @function create
         * @memberof CPlayer_CommunityPreferences
         * @static
         * @param {ICPlayer_CommunityPreferences=} [properties] Properties to set
         * @returns {CPlayer_CommunityPreferences} CPlayer_CommunityPreferences instance
         */
        CPlayer_CommunityPreferences.create = function create(properties) {
            return new CPlayer_CommunityPreferences(properties);
        };
    
        /**
         * Encodes the specified CPlayer_CommunityPreferences message. Does not implicitly {@link CPlayer_CommunityPreferences.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_CommunityPreferences
         * @static
         * @param {ICPlayer_CommunityPreferences} message CPlayer_CommunityPreferences message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_CommunityPreferences.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hide_adult_content_violence != null && Object.hasOwnProperty.call(message, "hide_adult_content_violence"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.hide_adult_content_violence);
            if (message.hide_adult_content_sex != null && Object.hasOwnProperty.call(message, "hide_adult_content_sex"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hide_adult_content_sex);
            if (message.timestamp_updated != null && Object.hasOwnProperty.call(message, "timestamp_updated"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.timestamp_updated);
            if (message.parenthesize_nicknames != null && Object.hasOwnProperty.call(message, "parenthesize_nicknames"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.parenthesize_nicknames);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_CommunityPreferences message, length delimited. Does not implicitly {@link CPlayer_CommunityPreferences.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_CommunityPreferences
         * @static
         * @param {ICPlayer_CommunityPreferences} message CPlayer_CommunityPreferences message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_CommunityPreferences.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_CommunityPreferences message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_CommunityPreferences
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_CommunityPreferences} CPlayer_CommunityPreferences
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_CommunityPreferences.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_CommunityPreferences();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hide_adult_content_violence = reader.bool();
                    break;
                case 2:
                    message.hide_adult_content_sex = reader.bool();
                    break;
                case 4:
                    message.parenthesize_nicknames = reader.bool();
                    break;
                case 3:
                    message.timestamp_updated = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_CommunityPreferences message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_CommunityPreferences
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_CommunityPreferences} CPlayer_CommunityPreferences
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_CommunityPreferences.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_CommunityPreferences message.
         * @function verify
         * @memberof CPlayer_CommunityPreferences
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_CommunityPreferences.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hide_adult_content_violence != null && message.hasOwnProperty("hide_adult_content_violence"))
                if (typeof message.hide_adult_content_violence !== "boolean")
                    return "hide_adult_content_violence: boolean expected";
            if (message.hide_adult_content_sex != null && message.hasOwnProperty("hide_adult_content_sex"))
                if (typeof message.hide_adult_content_sex !== "boolean")
                    return "hide_adult_content_sex: boolean expected";
            if (message.parenthesize_nicknames != null && message.hasOwnProperty("parenthesize_nicknames"))
                if (typeof message.parenthesize_nicknames !== "boolean")
                    return "parenthesize_nicknames: boolean expected";
            if (message.timestamp_updated != null && message.hasOwnProperty("timestamp_updated"))
                if (!$util.isInteger(message.timestamp_updated))
                    return "timestamp_updated: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_CommunityPreferences message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_CommunityPreferences
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_CommunityPreferences} CPlayer_CommunityPreferences
         */
        CPlayer_CommunityPreferences.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_CommunityPreferences)
                return object;
            var message = new $root.CPlayer_CommunityPreferences();
            if (object.hide_adult_content_violence != null)
                message.hide_adult_content_violence = Boolean(object.hide_adult_content_violence);
            if (object.hide_adult_content_sex != null)
                message.hide_adult_content_sex = Boolean(object.hide_adult_content_sex);
            if (object.parenthesize_nicknames != null)
                message.parenthesize_nicknames = Boolean(object.parenthesize_nicknames);
            if (object.timestamp_updated != null)
                message.timestamp_updated = object.timestamp_updated >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_CommunityPreferences message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_CommunityPreferences
         * @static
         * @param {CPlayer_CommunityPreferences} message CPlayer_CommunityPreferences
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_CommunityPreferences.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.hide_adult_content_violence = true;
                object.hide_adult_content_sex = true;
                object.timestamp_updated = 0;
                object.parenthesize_nicknames = false;
            }
            if (message.hide_adult_content_violence != null && message.hasOwnProperty("hide_adult_content_violence"))
                object.hide_adult_content_violence = message.hide_adult_content_violence;
            if (message.hide_adult_content_sex != null && message.hasOwnProperty("hide_adult_content_sex"))
                object.hide_adult_content_sex = message.hide_adult_content_sex;
            if (message.timestamp_updated != null && message.hasOwnProperty("timestamp_updated"))
                object.timestamp_updated = message.timestamp_updated;
            if (message.parenthesize_nicknames != null && message.hasOwnProperty("parenthesize_nicknames"))
                object.parenthesize_nicknames = message.parenthesize_nicknames;
            return object;
        };
    
        /**
         * Converts this CPlayer_CommunityPreferences to JSON.
         * @function toJSON
         * @memberof CPlayer_CommunityPreferences
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_CommunityPreferences.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_CommunityPreferences;
    })();
    
    $root.CPlayer_GetCommunityPreferences_Response = (function() {
    
        /**
         * Properties of a CPlayer_GetCommunityPreferences_Response.
         * @exports ICPlayer_GetCommunityPreferences_Response
         * @interface ICPlayer_GetCommunityPreferences_Response
         * @property {ICPlayer_CommunityPreferences|null} [preferences] CPlayer_GetCommunityPreferences_Response preferences
         */
    
        /**
         * Constructs a new CPlayer_GetCommunityPreferences_Response.
         * @exports CPlayer_GetCommunityPreferences_Response
         * @classdesc Represents a CPlayer_GetCommunityPreferences_Response.
         * @implements ICPlayer_GetCommunityPreferences_Response
         * @constructor
         * @param {ICPlayer_GetCommunityPreferences_Response=} [properties] Properties to set
         */
        function CPlayer_GetCommunityPreferences_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetCommunityPreferences_Response preferences.
         * @member {ICPlayer_CommunityPreferences|null|undefined} preferences
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @instance
         */
        CPlayer_GetCommunityPreferences_Response.prototype.preferences = null;
    
        /**
         * Creates a new CPlayer_GetCommunityPreferences_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @static
         * @param {ICPlayer_GetCommunityPreferences_Response=} [properties] Properties to set
         * @returns {CPlayer_GetCommunityPreferences_Response} CPlayer_GetCommunityPreferences_Response instance
         */
        CPlayer_GetCommunityPreferences_Response.create = function create(properties) {
            return new CPlayer_GetCommunityPreferences_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetCommunityPreferences_Response message. Does not implicitly {@link CPlayer_GetCommunityPreferences_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @static
         * @param {ICPlayer_GetCommunityPreferences_Response} message CPlayer_GetCommunityPreferences_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetCommunityPreferences_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.preferences != null && Object.hasOwnProperty.call(message, "preferences"))
                $root.CPlayer_CommunityPreferences.encode(message.preferences, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetCommunityPreferences_Response message, length delimited. Does not implicitly {@link CPlayer_GetCommunityPreferences_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @static
         * @param {ICPlayer_GetCommunityPreferences_Response} message CPlayer_GetCommunityPreferences_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetCommunityPreferences_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetCommunityPreferences_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetCommunityPreferences_Response} CPlayer_GetCommunityPreferences_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetCommunityPreferences_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetCommunityPreferences_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.preferences = $root.CPlayer_CommunityPreferences.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_GetCommunityPreferences_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetCommunityPreferences_Response} CPlayer_GetCommunityPreferences_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetCommunityPreferences_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetCommunityPreferences_Response message.
         * @function verify
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetCommunityPreferences_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.preferences != null && message.hasOwnProperty("preferences")) {
                var error = $root.CPlayer_CommunityPreferences.verify(message.preferences);
                if (error)
                    return "preferences." + error;
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_GetCommunityPreferences_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetCommunityPreferences_Response} CPlayer_GetCommunityPreferences_Response
         */
        CPlayer_GetCommunityPreferences_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetCommunityPreferences_Response)
                return object;
            var message = new $root.CPlayer_GetCommunityPreferences_Response();
            if (object.preferences != null) {
                if (typeof object.preferences !== "object")
                    throw TypeError(".CPlayer_GetCommunityPreferences_Response.preferences: object expected");
                message.preferences = $root.CPlayer_CommunityPreferences.fromObject(object.preferences);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetCommunityPreferences_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @static
         * @param {CPlayer_GetCommunityPreferences_Response} message CPlayer_GetCommunityPreferences_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetCommunityPreferences_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.preferences = null;
            if (message.preferences != null && message.hasOwnProperty("preferences"))
                object.preferences = $root.CPlayer_CommunityPreferences.toObject(message.preferences, options);
            return object;
        };
    
        /**
         * Converts this CPlayer_GetCommunityPreferences_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_GetCommunityPreferences_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetCommunityPreferences_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_GetCommunityPreferences_Response;
    })();
    
    $root.CPlayer_SetCommunityPreferences_Request = (function() {
    
        /**
         * Properties of a CPlayer_SetCommunityPreferences_Request.
         * @exports ICPlayer_SetCommunityPreferences_Request
         * @interface ICPlayer_SetCommunityPreferences_Request
         * @property {ICPlayer_CommunityPreferences|null} [preferences] CPlayer_SetCommunityPreferences_Request preferences
         */
    
        /**
         * Constructs a new CPlayer_SetCommunityPreferences_Request.
         * @exports CPlayer_SetCommunityPreferences_Request
         * @classdesc Represents a CPlayer_SetCommunityPreferences_Request.
         * @implements ICPlayer_SetCommunityPreferences_Request
         * @constructor
         * @param {ICPlayer_SetCommunityPreferences_Request=} [properties] Properties to set
         */
        function CPlayer_SetCommunityPreferences_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_SetCommunityPreferences_Request preferences.
         * @member {ICPlayer_CommunityPreferences|null|undefined} preferences
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @instance
         */
        CPlayer_SetCommunityPreferences_Request.prototype.preferences = null;
    
        /**
         * Creates a new CPlayer_SetCommunityPreferences_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @static
         * @param {ICPlayer_SetCommunityPreferences_Request=} [properties] Properties to set
         * @returns {CPlayer_SetCommunityPreferences_Request} CPlayer_SetCommunityPreferences_Request instance
         */
        CPlayer_SetCommunityPreferences_Request.create = function create(properties) {
            return new CPlayer_SetCommunityPreferences_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_SetCommunityPreferences_Request message. Does not implicitly {@link CPlayer_SetCommunityPreferences_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @static
         * @param {ICPlayer_SetCommunityPreferences_Request} message CPlayer_SetCommunityPreferences_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_SetCommunityPreferences_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.preferences != null && Object.hasOwnProperty.call(message, "preferences"))
                $root.CPlayer_CommunityPreferences.encode(message.preferences, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_SetCommunityPreferences_Request message, length delimited. Does not implicitly {@link CPlayer_SetCommunityPreferences_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @static
         * @param {ICPlayer_SetCommunityPreferences_Request} message CPlayer_SetCommunityPreferences_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_SetCommunityPreferences_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_SetCommunityPreferences_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_SetCommunityPreferences_Request} CPlayer_SetCommunityPreferences_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_SetCommunityPreferences_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_SetCommunityPreferences_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.preferences = $root.CPlayer_CommunityPreferences.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_SetCommunityPreferences_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_SetCommunityPreferences_Request} CPlayer_SetCommunityPreferences_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_SetCommunityPreferences_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_SetCommunityPreferences_Request message.
         * @function verify
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_SetCommunityPreferences_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.preferences != null && message.hasOwnProperty("preferences")) {
                var error = $root.CPlayer_CommunityPreferences.verify(message.preferences);
                if (error)
                    return "preferences." + error;
            }
            return null;
        };
    
        /**
         * Creates a CPlayer_SetCommunityPreferences_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_SetCommunityPreferences_Request} CPlayer_SetCommunityPreferences_Request
         */
        CPlayer_SetCommunityPreferences_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_SetCommunityPreferences_Request)
                return object;
            var message = new $root.CPlayer_SetCommunityPreferences_Request();
            if (object.preferences != null) {
                if (typeof object.preferences !== "object")
                    throw TypeError(".CPlayer_SetCommunityPreferences_Request.preferences: object expected");
                message.preferences = $root.CPlayer_CommunityPreferences.fromObject(object.preferences);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_SetCommunityPreferences_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @static
         * @param {CPlayer_SetCommunityPreferences_Request} message CPlayer_SetCommunityPreferences_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_SetCommunityPreferences_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.preferences = null;
            if (message.preferences != null && message.hasOwnProperty("preferences"))
                object.preferences = $root.CPlayer_CommunityPreferences.toObject(message.preferences, options);
            return object;
        };
    
        /**
         * Converts this CPlayer_SetCommunityPreferences_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_SetCommunityPreferences_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_SetCommunityPreferences_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_SetCommunityPreferences_Request;
    })();
    
    $root.CPlayer_SetCommunityPreferences_Response = (function() {
    
        /**
         * Properties of a CPlayer_SetCommunityPreferences_Response.
         * @exports ICPlayer_SetCommunityPreferences_Response
         * @interface ICPlayer_SetCommunityPreferences_Response
         */
    
        /**
         * Constructs a new CPlayer_SetCommunityPreferences_Response.
         * @exports CPlayer_SetCommunityPreferences_Response
         * @classdesc Represents a CPlayer_SetCommunityPreferences_Response.
         * @implements ICPlayer_SetCommunityPreferences_Response
         * @constructor
         * @param {ICPlayer_SetCommunityPreferences_Response=} [properties] Properties to set
         */
        function CPlayer_SetCommunityPreferences_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_SetCommunityPreferences_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @static
         * @param {ICPlayer_SetCommunityPreferences_Response=} [properties] Properties to set
         * @returns {CPlayer_SetCommunityPreferences_Response} CPlayer_SetCommunityPreferences_Response instance
         */
        CPlayer_SetCommunityPreferences_Response.create = function create(properties) {
            return new CPlayer_SetCommunityPreferences_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_SetCommunityPreferences_Response message. Does not implicitly {@link CPlayer_SetCommunityPreferences_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @static
         * @param {ICPlayer_SetCommunityPreferences_Response} message CPlayer_SetCommunityPreferences_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_SetCommunityPreferences_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_SetCommunityPreferences_Response message, length delimited. Does not implicitly {@link CPlayer_SetCommunityPreferences_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @static
         * @param {ICPlayer_SetCommunityPreferences_Response} message CPlayer_SetCommunityPreferences_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_SetCommunityPreferences_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_SetCommunityPreferences_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_SetCommunityPreferences_Response} CPlayer_SetCommunityPreferences_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_SetCommunityPreferences_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_SetCommunityPreferences_Response();
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
         * Decodes a CPlayer_SetCommunityPreferences_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_SetCommunityPreferences_Response} CPlayer_SetCommunityPreferences_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_SetCommunityPreferences_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_SetCommunityPreferences_Response message.
         * @function verify
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_SetCommunityPreferences_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_SetCommunityPreferences_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_SetCommunityPreferences_Response} CPlayer_SetCommunityPreferences_Response
         */
        CPlayer_SetCommunityPreferences_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_SetCommunityPreferences_Response)
                return object;
            return new $root.CPlayer_SetCommunityPreferences_Response();
        };
    
        /**
         * Creates a plain object from a CPlayer_SetCommunityPreferences_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @static
         * @param {CPlayer_SetCommunityPreferences_Response} message CPlayer_SetCommunityPreferences_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_SetCommunityPreferences_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_SetCommunityPreferences_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_SetCommunityPreferences_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_SetCommunityPreferences_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_SetCommunityPreferences_Response;
    })();
    
    $root.CPlayer_GetNewSteamAnnouncementState_Request = (function() {
    
        /**
         * Properties of a CPlayer_GetNewSteamAnnouncementState_Request.
         * @exports ICPlayer_GetNewSteamAnnouncementState_Request
         * @interface ICPlayer_GetNewSteamAnnouncementState_Request
         * @property {number|null} [language] CPlayer_GetNewSteamAnnouncementState_Request language
         */
    
        /**
         * Constructs a new CPlayer_GetNewSteamAnnouncementState_Request.
         * @exports CPlayer_GetNewSteamAnnouncementState_Request
         * @classdesc Represents a CPlayer_GetNewSteamAnnouncementState_Request.
         * @implements ICPlayer_GetNewSteamAnnouncementState_Request
         * @constructor
         * @param {ICPlayer_GetNewSteamAnnouncementState_Request=} [properties] Properties to set
         */
        function CPlayer_GetNewSteamAnnouncementState_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetNewSteamAnnouncementState_Request language.
         * @member {number} language
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @instance
         */
        CPlayer_GetNewSteamAnnouncementState_Request.prototype.language = 0;
    
        /**
         * Creates a new CPlayer_GetNewSteamAnnouncementState_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @static
         * @param {ICPlayer_GetNewSteamAnnouncementState_Request=} [properties] Properties to set
         * @returns {CPlayer_GetNewSteamAnnouncementState_Request} CPlayer_GetNewSteamAnnouncementState_Request instance
         */
        CPlayer_GetNewSteamAnnouncementState_Request.create = function create(properties) {
            return new CPlayer_GetNewSteamAnnouncementState_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetNewSteamAnnouncementState_Request message. Does not implicitly {@link CPlayer_GetNewSteamAnnouncementState_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @static
         * @param {ICPlayer_GetNewSteamAnnouncementState_Request} message CPlayer_GetNewSteamAnnouncementState_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetNewSteamAnnouncementState_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.language);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetNewSteamAnnouncementState_Request message, length delimited. Does not implicitly {@link CPlayer_GetNewSteamAnnouncementState_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @static
         * @param {ICPlayer_GetNewSteamAnnouncementState_Request} message CPlayer_GetNewSteamAnnouncementState_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetNewSteamAnnouncementState_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetNewSteamAnnouncementState_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetNewSteamAnnouncementState_Request} CPlayer_GetNewSteamAnnouncementState_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetNewSteamAnnouncementState_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetNewSteamAnnouncementState_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.language = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_GetNewSteamAnnouncementState_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetNewSteamAnnouncementState_Request} CPlayer_GetNewSteamAnnouncementState_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetNewSteamAnnouncementState_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetNewSteamAnnouncementState_Request message.
         * @function verify
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetNewSteamAnnouncementState_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isInteger(message.language))
                    return "language: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetNewSteamAnnouncementState_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetNewSteamAnnouncementState_Request} CPlayer_GetNewSteamAnnouncementState_Request
         */
        CPlayer_GetNewSteamAnnouncementState_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetNewSteamAnnouncementState_Request)
                return object;
            var message = new $root.CPlayer_GetNewSteamAnnouncementState_Request();
            if (object.language != null)
                message.language = object.language | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetNewSteamAnnouncementState_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @static
         * @param {CPlayer_GetNewSteamAnnouncementState_Request} message CPlayer_GetNewSteamAnnouncementState_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetNewSteamAnnouncementState_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.language = 0;
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            return object;
        };
    
        /**
         * Converts this CPlayer_GetNewSteamAnnouncementState_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_GetNewSteamAnnouncementState_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetNewSteamAnnouncementState_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_GetNewSteamAnnouncementState_Request;
    })();
    
    $root.CPlayer_GetNewSteamAnnouncementState_Response = (function() {
    
        /**
         * Properties of a CPlayer_GetNewSteamAnnouncementState_Response.
         * @exports ICPlayer_GetNewSteamAnnouncementState_Response
         * @interface ICPlayer_GetNewSteamAnnouncementState_Response
         * @property {number|null} [state] CPlayer_GetNewSteamAnnouncementState_Response state
         * @property {string|null} [announcement_headline] CPlayer_GetNewSteamAnnouncementState_Response announcement_headline
         * @property {string|null} [announcement_url] CPlayer_GetNewSteamAnnouncementState_Response announcement_url
         * @property {number|null} [time_posted] CPlayer_GetNewSteamAnnouncementState_Response time_posted
         * @property {number|Long|null} [announcement_gid] CPlayer_GetNewSteamAnnouncementState_Response announcement_gid
         */
    
        /**
         * Constructs a new CPlayer_GetNewSteamAnnouncementState_Response.
         * @exports CPlayer_GetNewSteamAnnouncementState_Response
         * @classdesc Represents a CPlayer_GetNewSteamAnnouncementState_Response.
         * @implements ICPlayer_GetNewSteamAnnouncementState_Response
         * @constructor
         * @param {ICPlayer_GetNewSteamAnnouncementState_Response=} [properties] Properties to set
         */
        function CPlayer_GetNewSteamAnnouncementState_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_GetNewSteamAnnouncementState_Response state.
         * @member {number} state
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @instance
         */
        CPlayer_GetNewSteamAnnouncementState_Response.prototype.state = 0;
    
        /**
         * CPlayer_GetNewSteamAnnouncementState_Response announcement_headline.
         * @member {string} announcement_headline
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @instance
         */
        CPlayer_GetNewSteamAnnouncementState_Response.prototype.announcement_headline = "";
    
        /**
         * CPlayer_GetNewSteamAnnouncementState_Response announcement_url.
         * @member {string} announcement_url
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @instance
         */
        CPlayer_GetNewSteamAnnouncementState_Response.prototype.announcement_url = "";
    
        /**
         * CPlayer_GetNewSteamAnnouncementState_Response time_posted.
         * @member {number} time_posted
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @instance
         */
        CPlayer_GetNewSteamAnnouncementState_Response.prototype.time_posted = 0;
    
        /**
         * CPlayer_GetNewSteamAnnouncementState_Response announcement_gid.
         * @member {number|Long} announcement_gid
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @instance
         */
        CPlayer_GetNewSteamAnnouncementState_Response.prototype.announcement_gid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CPlayer_GetNewSteamAnnouncementState_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @static
         * @param {ICPlayer_GetNewSteamAnnouncementState_Response=} [properties] Properties to set
         * @returns {CPlayer_GetNewSteamAnnouncementState_Response} CPlayer_GetNewSteamAnnouncementState_Response instance
         */
        CPlayer_GetNewSteamAnnouncementState_Response.create = function create(properties) {
            return new CPlayer_GetNewSteamAnnouncementState_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_GetNewSteamAnnouncementState_Response message. Does not implicitly {@link CPlayer_GetNewSteamAnnouncementState_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @static
         * @param {ICPlayer_GetNewSteamAnnouncementState_Response} message CPlayer_GetNewSteamAnnouncementState_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetNewSteamAnnouncementState_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            if (message.announcement_headline != null && Object.hasOwnProperty.call(message, "announcement_headline"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.announcement_headline);
            if (message.announcement_url != null && Object.hasOwnProperty.call(message, "announcement_url"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.announcement_url);
            if (message.time_posted != null && Object.hasOwnProperty.call(message, "time_posted"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.time_posted);
            if (message.announcement_gid != null && Object.hasOwnProperty.call(message, "announcement_gid"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.announcement_gid);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_GetNewSteamAnnouncementState_Response message, length delimited. Does not implicitly {@link CPlayer_GetNewSteamAnnouncementState_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @static
         * @param {ICPlayer_GetNewSteamAnnouncementState_Response} message CPlayer_GetNewSteamAnnouncementState_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_GetNewSteamAnnouncementState_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_GetNewSteamAnnouncementState_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_GetNewSteamAnnouncementState_Response} CPlayer_GetNewSteamAnnouncementState_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetNewSteamAnnouncementState_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_GetNewSteamAnnouncementState_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.announcement_headline = reader.string();
                    break;
                case 3:
                    message.announcement_url = reader.string();
                    break;
                case 4:
                    message.time_posted = reader.uint32();
                    break;
                case 5:
                    message.announcement_gid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_GetNewSteamAnnouncementState_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_GetNewSteamAnnouncementState_Response} CPlayer_GetNewSteamAnnouncementState_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_GetNewSteamAnnouncementState_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_GetNewSteamAnnouncementState_Response message.
         * @function verify
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_GetNewSteamAnnouncementState_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.announcement_headline != null && message.hasOwnProperty("announcement_headline"))
                if (!$util.isString(message.announcement_headline))
                    return "announcement_headline: string expected";
            if (message.announcement_url != null && message.hasOwnProperty("announcement_url"))
                if (!$util.isString(message.announcement_url))
                    return "announcement_url: string expected";
            if (message.time_posted != null && message.hasOwnProperty("time_posted"))
                if (!$util.isInteger(message.time_posted))
                    return "time_posted: integer expected";
            if (message.announcement_gid != null && message.hasOwnProperty("announcement_gid"))
                if (!$util.isInteger(message.announcement_gid) && !(message.announcement_gid && $util.isInteger(message.announcement_gid.low) && $util.isInteger(message.announcement_gid.high)))
                    return "announcement_gid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_GetNewSteamAnnouncementState_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_GetNewSteamAnnouncementState_Response} CPlayer_GetNewSteamAnnouncementState_Response
         */
        CPlayer_GetNewSteamAnnouncementState_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_GetNewSteamAnnouncementState_Response)
                return object;
            var message = new $root.CPlayer_GetNewSteamAnnouncementState_Response();
            if (object.state != null)
                message.state = object.state | 0;
            if (object.announcement_headline != null)
                message.announcement_headline = String(object.announcement_headline);
            if (object.announcement_url != null)
                message.announcement_url = String(object.announcement_url);
            if (object.time_posted != null)
                message.time_posted = object.time_posted >>> 0;
            if (object.announcement_gid != null)
                if ($util.Long)
                    (message.announcement_gid = $util.Long.fromValue(object.announcement_gid)).unsigned = true;
                else if (typeof object.announcement_gid === "string")
                    message.announcement_gid = parseInt(object.announcement_gid, 10);
                else if (typeof object.announcement_gid === "number")
                    message.announcement_gid = object.announcement_gid;
                else if (typeof object.announcement_gid === "object")
                    message.announcement_gid = new $util.LongBits(object.announcement_gid.low >>> 0, object.announcement_gid.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_GetNewSteamAnnouncementState_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @static
         * @param {CPlayer_GetNewSteamAnnouncementState_Response} message CPlayer_GetNewSteamAnnouncementState_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_GetNewSteamAnnouncementState_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.state = 0;
                object.announcement_headline = "";
                object.announcement_url = "";
                object.time_posted = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.announcement_gid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.announcement_gid = options.longs === String ? "0" : 0;
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.announcement_headline != null && message.hasOwnProperty("announcement_headline"))
                object.announcement_headline = message.announcement_headline;
            if (message.announcement_url != null && message.hasOwnProperty("announcement_url"))
                object.announcement_url = message.announcement_url;
            if (message.time_posted != null && message.hasOwnProperty("time_posted"))
                object.time_posted = message.time_posted;
            if (message.announcement_gid != null && message.hasOwnProperty("announcement_gid"))
                if (typeof message.announcement_gid === "number")
                    object.announcement_gid = options.longs === String ? String(message.announcement_gid) : message.announcement_gid;
                else
                    object.announcement_gid = options.longs === String ? $util.Long.prototype.toString.call(message.announcement_gid) : options.longs === Number ? new $util.LongBits(message.announcement_gid.low >>> 0, message.announcement_gid.high >>> 0).toNumber(true) : message.announcement_gid;
            return object;
        };
    
        /**
         * Converts this CPlayer_GetNewSteamAnnouncementState_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_GetNewSteamAnnouncementState_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_GetNewSteamAnnouncementState_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_GetNewSteamAnnouncementState_Response;
    })();
    
    $root.CPlayer_UpdateSteamAnnouncementLastRead_Request = (function() {
    
        /**
         * Properties of a CPlayer_UpdateSteamAnnouncementLastRead_Request.
         * @exports ICPlayer_UpdateSteamAnnouncementLastRead_Request
         * @interface ICPlayer_UpdateSteamAnnouncementLastRead_Request
         * @property {number|Long|null} [announcement_gid] CPlayer_UpdateSteamAnnouncementLastRead_Request announcement_gid
         * @property {number|null} [time_posted] CPlayer_UpdateSteamAnnouncementLastRead_Request time_posted
         */
    
        /**
         * Constructs a new CPlayer_UpdateSteamAnnouncementLastRead_Request.
         * @exports CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @classdesc Represents a CPlayer_UpdateSteamAnnouncementLastRead_Request.
         * @implements ICPlayer_UpdateSteamAnnouncementLastRead_Request
         * @constructor
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Request=} [properties] Properties to set
         */
        function CPlayer_UpdateSteamAnnouncementLastRead_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPlayer_UpdateSteamAnnouncementLastRead_Request announcement_gid.
         * @member {number|Long} announcement_gid
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @instance
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.prototype.announcement_gid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CPlayer_UpdateSteamAnnouncementLastRead_Request time_posted.
         * @member {number} time_posted
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @instance
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.prototype.time_posted = 0;
    
        /**
         * Creates a new CPlayer_UpdateSteamAnnouncementLastRead_Request instance using the specified properties.
         * @function create
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @static
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Request=} [properties] Properties to set
         * @returns {CPlayer_UpdateSteamAnnouncementLastRead_Request} CPlayer_UpdateSteamAnnouncementLastRead_Request instance
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.create = function create(properties) {
            return new CPlayer_UpdateSteamAnnouncementLastRead_Request(properties);
        };
    
        /**
         * Encodes the specified CPlayer_UpdateSteamAnnouncementLastRead_Request message. Does not implicitly {@link CPlayer_UpdateSteamAnnouncementLastRead_Request.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @static
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Request} message CPlayer_UpdateSteamAnnouncementLastRead_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.announcement_gid != null && Object.hasOwnProperty.call(message, "announcement_gid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.announcement_gid);
            if (message.time_posted != null && Object.hasOwnProperty.call(message, "time_posted"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.time_posted);
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_UpdateSteamAnnouncementLastRead_Request message, length delimited. Does not implicitly {@link CPlayer_UpdateSteamAnnouncementLastRead_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @static
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Request} message CPlayer_UpdateSteamAnnouncementLastRead_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_UpdateSteamAnnouncementLastRead_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_UpdateSteamAnnouncementLastRead_Request} CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_UpdateSteamAnnouncementLastRead_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.announcement_gid = reader.uint64();
                    break;
                case 2:
                    message.time_posted = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPlayer_UpdateSteamAnnouncementLastRead_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_UpdateSteamAnnouncementLastRead_Request} CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_UpdateSteamAnnouncementLastRead_Request message.
         * @function verify
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.announcement_gid != null && message.hasOwnProperty("announcement_gid"))
                if (!$util.isInteger(message.announcement_gid) && !(message.announcement_gid && $util.isInteger(message.announcement_gid.low) && $util.isInteger(message.announcement_gid.high)))
                    return "announcement_gid: integer|Long expected";
            if (message.time_posted != null && message.hasOwnProperty("time_posted"))
                if (!$util.isInteger(message.time_posted))
                    return "time_posted: integer expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_UpdateSteamAnnouncementLastRead_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_UpdateSteamAnnouncementLastRead_Request} CPlayer_UpdateSteamAnnouncementLastRead_Request
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_UpdateSteamAnnouncementLastRead_Request)
                return object;
            var message = new $root.CPlayer_UpdateSteamAnnouncementLastRead_Request();
            if (object.announcement_gid != null)
                if ($util.Long)
                    (message.announcement_gid = $util.Long.fromValue(object.announcement_gid)).unsigned = true;
                else if (typeof object.announcement_gid === "string")
                    message.announcement_gid = parseInt(object.announcement_gid, 10);
                else if (typeof object.announcement_gid === "number")
                    message.announcement_gid = object.announcement_gid;
                else if (typeof object.announcement_gid === "object")
                    message.announcement_gid = new $util.LongBits(object.announcement_gid.low >>> 0, object.announcement_gid.high >>> 0).toNumber(true);
            if (object.time_posted != null)
                message.time_posted = object.time_posted >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPlayer_UpdateSteamAnnouncementLastRead_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @static
         * @param {CPlayer_UpdateSteamAnnouncementLastRead_Request} message CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.announcement_gid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.announcement_gid = options.longs === String ? "0" : 0;
                object.time_posted = 0;
            }
            if (message.announcement_gid != null && message.hasOwnProperty("announcement_gid"))
                if (typeof message.announcement_gid === "number")
                    object.announcement_gid = options.longs === String ? String(message.announcement_gid) : message.announcement_gid;
                else
                    object.announcement_gid = options.longs === String ? $util.Long.prototype.toString.call(message.announcement_gid) : options.longs === Number ? new $util.LongBits(message.announcement_gid.low >>> 0, message.announcement_gid.high >>> 0).toNumber(true) : message.announcement_gid;
            if (message.time_posted != null && message.hasOwnProperty("time_posted"))
                object.time_posted = message.time_posted;
            return object;
        };
    
        /**
         * Converts this CPlayer_UpdateSteamAnnouncementLastRead_Request to JSON.
         * @function toJSON
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_UpdateSteamAnnouncementLastRead_Request;
    })();
    
    $root.CPlayer_UpdateSteamAnnouncementLastRead_Response = (function() {
    
        /**
         * Properties of a CPlayer_UpdateSteamAnnouncementLastRead_Response.
         * @exports ICPlayer_UpdateSteamAnnouncementLastRead_Response
         * @interface ICPlayer_UpdateSteamAnnouncementLastRead_Response
         */
    
        /**
         * Constructs a new CPlayer_UpdateSteamAnnouncementLastRead_Response.
         * @exports CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @classdesc Represents a CPlayer_UpdateSteamAnnouncementLastRead_Response.
         * @implements ICPlayer_UpdateSteamAnnouncementLastRead_Response
         * @constructor
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Response=} [properties] Properties to set
         */
        function CPlayer_UpdateSteamAnnouncementLastRead_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPlayer_UpdateSteamAnnouncementLastRead_Response instance using the specified properties.
         * @function create
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @static
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Response=} [properties] Properties to set
         * @returns {CPlayer_UpdateSteamAnnouncementLastRead_Response} CPlayer_UpdateSteamAnnouncementLastRead_Response instance
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.create = function create(properties) {
            return new CPlayer_UpdateSteamAnnouncementLastRead_Response(properties);
        };
    
        /**
         * Encodes the specified CPlayer_UpdateSteamAnnouncementLastRead_Response message. Does not implicitly {@link CPlayer_UpdateSteamAnnouncementLastRead_Response.verify|verify} messages.
         * @function encode
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @static
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Response} message CPlayer_UpdateSteamAnnouncementLastRead_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPlayer_UpdateSteamAnnouncementLastRead_Response message, length delimited. Does not implicitly {@link CPlayer_UpdateSteamAnnouncementLastRead_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @static
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Response} message CPlayer_UpdateSteamAnnouncementLastRead_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPlayer_UpdateSteamAnnouncementLastRead_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPlayer_UpdateSteamAnnouncementLastRead_Response} CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPlayer_UpdateSteamAnnouncementLastRead_Response();
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
         * Decodes a CPlayer_UpdateSteamAnnouncementLastRead_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPlayer_UpdateSteamAnnouncementLastRead_Response} CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPlayer_UpdateSteamAnnouncementLastRead_Response message.
         * @function verify
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPlayer_UpdateSteamAnnouncementLastRead_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPlayer_UpdateSteamAnnouncementLastRead_Response} CPlayer_UpdateSteamAnnouncementLastRead_Response
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPlayer_UpdateSteamAnnouncementLastRead_Response)
                return object;
            return new $root.CPlayer_UpdateSteamAnnouncementLastRead_Response();
        };
    
        /**
         * Creates a plain object from a CPlayer_UpdateSteamAnnouncementLastRead_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @static
         * @param {CPlayer_UpdateSteamAnnouncementLastRead_Response} message CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPlayer_UpdateSteamAnnouncementLastRead_Response to JSON.
         * @function toJSON
         * @memberof CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPlayer_UpdateSteamAnnouncementLastRead_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPlayer_UpdateSteamAnnouncementLastRead_Response;
    })();
    
    $root.Player = (function() {
    
        /**
         * Constructs a new Player service.
         * @exports Player
         * @classdesc Represents a Player
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Player(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (Player.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Player;
    
        /**
         * Creates new Player service using the specified rpc implementation.
         * @function create
         * @memberof Player
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Player} RPC service. Useful where requests and/or responses are streamed.
         */
        Player.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link Player#getMutualFriendsForIncomingInvites}.
         * @memberof Player
         * @typedef GetMutualFriendsForIncomingInvitesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_GetMutualFriendsForIncomingInvites_Response} [response] CPlayer_GetMutualFriendsForIncomingInvites_Response
         */
    
        /**
         * Calls GetMutualFriendsForIncomingInvites.
         * @function getMutualFriendsForIncomingInvites
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Request} request CPlayer_GetMutualFriendsForIncomingInvites_Request message or plain object
         * @param {Player.GetMutualFriendsForIncomingInvitesCallback} callback Node-style callback called with the error, if any, and CPlayer_GetMutualFriendsForIncomingInvites_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.getMutualFriendsForIncomingInvites = function getMutualFriendsForIncomingInvites(request, callback) {
            return this.rpcCall(getMutualFriendsForIncomingInvites, $root.CPlayer_GetMutualFriendsForIncomingInvites_Request, $root.CPlayer_GetMutualFriendsForIncomingInvites_Response, request, callback);
        }, "name", { value: "GetMutualFriendsForIncomingInvites" });
    
        /**
         * Calls GetMutualFriendsForIncomingInvites.
         * @function getMutualFriendsForIncomingInvites
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetMutualFriendsForIncomingInvites_Request} request CPlayer_GetMutualFriendsForIncomingInvites_Request message or plain object
         * @returns {Promise<CPlayer_GetMutualFriendsForIncomingInvites_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#getFriendsGameplayInfo}.
         * @memberof Player
         * @typedef GetFriendsGameplayInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_GetFriendsGameplayInfo_Response} [response] CPlayer_GetFriendsGameplayInfo_Response
         */
    
        /**
         * Calls GetFriendsGameplayInfo.
         * @function getFriendsGameplayInfo
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetFriendsGameplayInfo_Request} request CPlayer_GetFriendsGameplayInfo_Request message or plain object
         * @param {Player.GetFriendsGameplayInfoCallback} callback Node-style callback called with the error, if any, and CPlayer_GetFriendsGameplayInfo_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.getFriendsGameplayInfo = function getFriendsGameplayInfo(request, callback) {
            return this.rpcCall(getFriendsGameplayInfo, $root.CPlayer_GetFriendsGameplayInfo_Request, $root.CPlayer_GetFriendsGameplayInfo_Response, request, callback);
        }, "name", { value: "GetFriendsGameplayInfo" });
    
        /**
         * Calls GetFriendsGameplayInfo.
         * @function getFriendsGameplayInfo
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetFriendsGameplayInfo_Request} request CPlayer_GetFriendsGameplayInfo_Request message or plain object
         * @returns {Promise<CPlayer_GetFriendsGameplayInfo_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#getGameBadgeLevels}.
         * @memberof Player
         * @typedef GetGameBadgeLevelsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_GetGameBadgeLevels_Response} [response] CPlayer_GetGameBadgeLevels_Response
         */
    
        /**
         * Calls GetGameBadgeLevels.
         * @function getGameBadgeLevels
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetGameBadgeLevels_Request} request CPlayer_GetGameBadgeLevels_Request message or plain object
         * @param {Player.GetGameBadgeLevelsCallback} callback Node-style callback called with the error, if any, and CPlayer_GetGameBadgeLevels_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.getGameBadgeLevels = function getGameBadgeLevels(request, callback) {
            return this.rpcCall(getGameBadgeLevels, $root.CPlayer_GetGameBadgeLevels_Request, $root.CPlayer_GetGameBadgeLevels_Response, request, callback);
        }, "name", { value: "GetGameBadgeLevels" });
    
        /**
         * Calls GetGameBadgeLevels.
         * @function getGameBadgeLevels
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetGameBadgeLevels_Request} request CPlayer_GetGameBadgeLevels_Request message or plain object
         * @returns {Promise<CPlayer_GetGameBadgeLevels_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#clientGetLastPlayedTimes}.
         * @memberof Player
         * @typedef ClientGetLastPlayedTimesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_GetLastPlayedTimes_Response} [response] CPlayer_GetLastPlayedTimes_Response
         */
    
        /**
         * Calls ClientGetLastPlayedTimes.
         * @function clientGetLastPlayedTimes
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetLastPlayedTimes_Request} request CPlayer_GetLastPlayedTimes_Request message or plain object
         * @param {Player.ClientGetLastPlayedTimesCallback} callback Node-style callback called with the error, if any, and CPlayer_GetLastPlayedTimes_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.clientGetLastPlayedTimes = function clientGetLastPlayedTimes(request, callback) {
            return this.rpcCall(clientGetLastPlayedTimes, $root.CPlayer_GetLastPlayedTimes_Request, $root.CPlayer_GetLastPlayedTimes_Response, request, callback);
        }, "name", { value: "ClientGetLastPlayedTimes" });
    
        /**
         * Calls ClientGetLastPlayedTimes.
         * @function clientGetLastPlayedTimes
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetLastPlayedTimes_Request} request CPlayer_GetLastPlayedTimes_Request message or plain object
         * @returns {Promise<CPlayer_GetLastPlayedTimes_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#acceptSSA}.
         * @memberof Player
         * @typedef AcceptSSACallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_AcceptSSA_Response} [response] CPlayer_AcceptSSA_Response
         */
    
        /**
         * Calls AcceptSSA.
         * @function acceptSSA
         * @memberof Player
         * @instance
         * @param {ICPlayer_AcceptSSA_Request} request CPlayer_AcceptSSA_Request message or plain object
         * @param {Player.AcceptSSACallback} callback Node-style callback called with the error, if any, and CPlayer_AcceptSSA_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.acceptSSA = function acceptSSA(request, callback) {
            return this.rpcCall(acceptSSA, $root.CPlayer_AcceptSSA_Request, $root.CPlayer_AcceptSSA_Response, request, callback);
        }, "name", { value: "AcceptSSA" });
    
        /**
         * Calls AcceptSSA.
         * @function acceptSSA
         * @memberof Player
         * @instance
         * @param {ICPlayer_AcceptSSA_Request} request CPlayer_AcceptSSA_Request message or plain object
         * @returns {Promise<CPlayer_AcceptSSA_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#getNicknameList}.
         * @memberof Player
         * @typedef GetNicknameListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_GetNicknameList_Response} [response] CPlayer_GetNicknameList_Response
         */
    
        /**
         * Calls GetNicknameList.
         * @function getNicknameList
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetNicknameList_Request} request CPlayer_GetNicknameList_Request message or plain object
         * @param {Player.GetNicknameListCallback} callback Node-style callback called with the error, if any, and CPlayer_GetNicknameList_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.getNicknameList = function getNicknameList(request, callback) {
            return this.rpcCall(getNicknameList, $root.CPlayer_GetNicknameList_Request, $root.CPlayer_GetNicknameList_Response, request, callback);
        }, "name", { value: "GetNicknameList" });
    
        /**
         * Calls GetNicknameList.
         * @function getNicknameList
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetNicknameList_Request} request CPlayer_GetNicknameList_Request message or plain object
         * @returns {Promise<CPlayer_GetNicknameList_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#getPerFriendPreferences}.
         * @memberof Player
         * @typedef GetPerFriendPreferencesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_GetPerFriendPreferences_Response} [response] CPlayer_GetPerFriendPreferences_Response
         */
    
        /**
         * Calls GetPerFriendPreferences.
         * @function getPerFriendPreferences
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetPerFriendPreferences_Request} request CPlayer_GetPerFriendPreferences_Request message or plain object
         * @param {Player.GetPerFriendPreferencesCallback} callback Node-style callback called with the error, if any, and CPlayer_GetPerFriendPreferences_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.getPerFriendPreferences = function getPerFriendPreferences(request, callback) {
            return this.rpcCall(getPerFriendPreferences, $root.CPlayer_GetPerFriendPreferences_Request, $root.CPlayer_GetPerFriendPreferences_Response, request, callback);
        }, "name", { value: "GetPerFriendPreferences" });
    
        /**
         * Calls GetPerFriendPreferences.
         * @function getPerFriendPreferences
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetPerFriendPreferences_Request} request CPlayer_GetPerFriendPreferences_Request message or plain object
         * @returns {Promise<CPlayer_GetPerFriendPreferences_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#setPerFriendPreferences}.
         * @memberof Player
         * @typedef SetPerFriendPreferencesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_SetPerFriendPreferences_Response} [response] CPlayer_SetPerFriendPreferences_Response
         */
    
        /**
         * Calls SetPerFriendPreferences.
         * @function setPerFriendPreferences
         * @memberof Player
         * @instance
         * @param {ICPlayer_SetPerFriendPreferences_Request} request CPlayer_SetPerFriendPreferences_Request message or plain object
         * @param {Player.SetPerFriendPreferencesCallback} callback Node-style callback called with the error, if any, and CPlayer_SetPerFriendPreferences_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.setPerFriendPreferences = function setPerFriendPreferences(request, callback) {
            return this.rpcCall(setPerFriendPreferences, $root.CPlayer_SetPerFriendPreferences_Request, $root.CPlayer_SetPerFriendPreferences_Response, request, callback);
        }, "name", { value: "SetPerFriendPreferences" });
    
        /**
         * Calls SetPerFriendPreferences.
         * @function setPerFriendPreferences
         * @memberof Player
         * @instance
         * @param {ICPlayer_SetPerFriendPreferences_Request} request CPlayer_SetPerFriendPreferences_Request message or plain object
         * @returns {Promise<CPlayer_SetPerFriendPreferences_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#addFriend}.
         * @memberof Player
         * @typedef AddFriendCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_AddFriend_Response} [response] CPlayer_AddFriend_Response
         */
    
        /**
         * Calls AddFriend.
         * @function addFriend
         * @memberof Player
         * @instance
         * @param {ICPlayer_AddFriend_Request} request CPlayer_AddFriend_Request message or plain object
         * @param {Player.AddFriendCallback} callback Node-style callback called with the error, if any, and CPlayer_AddFriend_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.addFriend = function addFriend(request, callback) {
            return this.rpcCall(addFriend, $root.CPlayer_AddFriend_Request, $root.CPlayer_AddFriend_Response, request, callback);
        }, "name", { value: "AddFriend" });
    
        /**
         * Calls AddFriend.
         * @function addFriend
         * @memberof Player
         * @instance
         * @param {ICPlayer_AddFriend_Request} request CPlayer_AddFriend_Request message or plain object
         * @returns {Promise<CPlayer_AddFriend_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#removeFriend}.
         * @memberof Player
         * @typedef RemoveFriendCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_RemoveFriend_Response} [response] CPlayer_RemoveFriend_Response
         */
    
        /**
         * Calls RemoveFriend.
         * @function removeFriend
         * @memberof Player
         * @instance
         * @param {ICPlayer_RemoveFriend_Request} request CPlayer_RemoveFriend_Request message or plain object
         * @param {Player.RemoveFriendCallback} callback Node-style callback called with the error, if any, and CPlayer_RemoveFriend_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.removeFriend = function removeFriend(request, callback) {
            return this.rpcCall(removeFriend, $root.CPlayer_RemoveFriend_Request, $root.CPlayer_RemoveFriend_Response, request, callback);
        }, "name", { value: "RemoveFriend" });
    
        /**
         * Calls RemoveFriend.
         * @function removeFriend
         * @memberof Player
         * @instance
         * @param {ICPlayer_RemoveFriend_Request} request CPlayer_RemoveFriend_Request message or plain object
         * @returns {Promise<CPlayer_RemoveFriend_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#ignoreFriend}.
         * @memberof Player
         * @typedef IgnoreFriendCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_IgnoreFriend_Response} [response] CPlayer_IgnoreFriend_Response
         */
    
        /**
         * Calls IgnoreFriend.
         * @function ignoreFriend
         * @memberof Player
         * @instance
         * @param {ICPlayer_IgnoreFriend_Request} request CPlayer_IgnoreFriend_Request message or plain object
         * @param {Player.IgnoreFriendCallback} callback Node-style callback called with the error, if any, and CPlayer_IgnoreFriend_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.ignoreFriend = function ignoreFriend(request, callback) {
            return this.rpcCall(ignoreFriend, $root.CPlayer_IgnoreFriend_Request, $root.CPlayer_IgnoreFriend_Response, request, callback);
        }, "name", { value: "IgnoreFriend" });
    
        /**
         * Calls IgnoreFriend.
         * @function ignoreFriend
         * @memberof Player
         * @instance
         * @param {ICPlayer_IgnoreFriend_Request} request CPlayer_IgnoreFriend_Request message or plain object
         * @returns {Promise<CPlayer_IgnoreFriend_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#getCommunityPreferences}.
         * @memberof Player
         * @typedef GetCommunityPreferencesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_GetCommunityPreferences_Response} [response] CPlayer_GetCommunityPreferences_Response
         */
    
        /**
         * Calls GetCommunityPreferences.
         * @function getCommunityPreferences
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetCommunityPreferences_Request} request CPlayer_GetCommunityPreferences_Request message or plain object
         * @param {Player.GetCommunityPreferencesCallback} callback Node-style callback called with the error, if any, and CPlayer_GetCommunityPreferences_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.getCommunityPreferences = function getCommunityPreferences(request, callback) {
            return this.rpcCall(getCommunityPreferences, $root.CPlayer_GetCommunityPreferences_Request, $root.CPlayer_GetCommunityPreferences_Response, request, callback);
        }, "name", { value: "GetCommunityPreferences" });
    
        /**
         * Calls GetCommunityPreferences.
         * @function getCommunityPreferences
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetCommunityPreferences_Request} request CPlayer_GetCommunityPreferences_Request message or plain object
         * @returns {Promise<CPlayer_GetCommunityPreferences_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#setCommunityPreferences}.
         * @memberof Player
         * @typedef SetCommunityPreferencesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_SetCommunityPreferences_Response} [response] CPlayer_SetCommunityPreferences_Response
         */
    
        /**
         * Calls SetCommunityPreferences.
         * @function setCommunityPreferences
         * @memberof Player
         * @instance
         * @param {ICPlayer_SetCommunityPreferences_Request} request CPlayer_SetCommunityPreferences_Request message or plain object
         * @param {Player.SetCommunityPreferencesCallback} callback Node-style callback called with the error, if any, and CPlayer_SetCommunityPreferences_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.setCommunityPreferences = function setCommunityPreferences(request, callback) {
            return this.rpcCall(setCommunityPreferences, $root.CPlayer_SetCommunityPreferences_Request, $root.CPlayer_SetCommunityPreferences_Response, request, callback);
        }, "name", { value: "SetCommunityPreferences" });
    
        /**
         * Calls SetCommunityPreferences.
         * @function setCommunityPreferences
         * @memberof Player
         * @instance
         * @param {ICPlayer_SetCommunityPreferences_Request} request CPlayer_SetCommunityPreferences_Request message or plain object
         * @returns {Promise<CPlayer_SetCommunityPreferences_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#getNewSteamAnnouncementState}.
         * @memberof Player
         * @typedef GetNewSteamAnnouncementStateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_GetNewSteamAnnouncementState_Response} [response] CPlayer_GetNewSteamAnnouncementState_Response
         */
    
        /**
         * Calls GetNewSteamAnnouncementState.
         * @function getNewSteamAnnouncementState
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetNewSteamAnnouncementState_Request} request CPlayer_GetNewSteamAnnouncementState_Request message or plain object
         * @param {Player.GetNewSteamAnnouncementStateCallback} callback Node-style callback called with the error, if any, and CPlayer_GetNewSteamAnnouncementState_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.getNewSteamAnnouncementState = function getNewSteamAnnouncementState(request, callback) {
            return this.rpcCall(getNewSteamAnnouncementState, $root.CPlayer_GetNewSteamAnnouncementState_Request, $root.CPlayer_GetNewSteamAnnouncementState_Response, request, callback);
        }, "name", { value: "GetNewSteamAnnouncementState" });
    
        /**
         * Calls GetNewSteamAnnouncementState.
         * @function getNewSteamAnnouncementState
         * @memberof Player
         * @instance
         * @param {ICPlayer_GetNewSteamAnnouncementState_Request} request CPlayer_GetNewSteamAnnouncementState_Request message or plain object
         * @returns {Promise<CPlayer_GetNewSteamAnnouncementState_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Player#updateSteamAnnouncementLastRead}.
         * @memberof Player
         * @typedef UpdateSteamAnnouncementLastReadCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPlayer_UpdateSteamAnnouncementLastRead_Response} [response] CPlayer_UpdateSteamAnnouncementLastRead_Response
         */
    
        /**
         * Calls UpdateSteamAnnouncementLastRead.
         * @function updateSteamAnnouncementLastRead
         * @memberof Player
         * @instance
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Request} request CPlayer_UpdateSteamAnnouncementLastRead_Request message or plain object
         * @param {Player.UpdateSteamAnnouncementLastReadCallback} callback Node-style callback called with the error, if any, and CPlayer_UpdateSteamAnnouncementLastRead_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Player.prototype.updateSteamAnnouncementLastRead = function updateSteamAnnouncementLastRead(request, callback) {
            return this.rpcCall(updateSteamAnnouncementLastRead, $root.CPlayer_UpdateSteamAnnouncementLastRead_Request, $root.CPlayer_UpdateSteamAnnouncementLastRead_Response, request, callback);
        }, "name", { value: "UpdateSteamAnnouncementLastRead" });
    
        /**
         * Calls UpdateSteamAnnouncementLastRead.
         * @function updateSteamAnnouncementLastRead
         * @memberof Player
         * @instance
         * @param {ICPlayer_UpdateSteamAnnouncementLastRead_Request} request CPlayer_UpdateSteamAnnouncementLastRead_Request message or plain object
         * @returns {Promise<CPlayer_UpdateSteamAnnouncementLastRead_Response>} Promise
         * @variation 2
         */
    
        return Player;
    })();
    
    /**
     * EProtoExecutionSite enum.
     * @exports EProtoExecutionSite
     * @enum {number}
     * @property {number} k_EProtoExecutionSiteUnknown=0 k_EProtoExecutionSiteUnknown value
     * @property {number} k_EProtoExecutionSiteSteamClient=3 k_EProtoExecutionSiteSteamClient value
     */
    $root.EProtoExecutionSite = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EProtoExecutionSiteUnknown"] = 0;
        values[valuesById[3] = "k_EProtoExecutionSiteSteamClient"] = 3;
        return values;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.FileDescriptorSet = (function() {
    
                /**
                 * Properties of a FileDescriptorSet.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorSet
                 * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
                 */
    
                /**
                 * Constructs a new FileDescriptorSet.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorSet.
                 * @implements IFileDescriptorSet
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 */
                function FileDescriptorSet(properties) {
                    this.file = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorSet file.
                 * @member {Array.<google.protobuf.IFileDescriptorProto>} file
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 */
                FileDescriptorSet.prototype.file = $util.emptyArray;
    
                /**
                 * Creates a new FileDescriptorSet instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
                 */
                FileDescriptorSet.create = function create(properties) {
                    return new FileDescriptorSet(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file != null && message.file.length)
                        for (var i = 0; i < message.file.length; ++i)
                            $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.file && message.file.length))
                                message.file = [];
                            message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorSet message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorSet.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.file != null && message.hasOwnProperty("file")) {
                        if (!Array.isArray(message.file))
                            return "file: array expected";
                        for (var i = 0; i < message.file.length; ++i) {
                            var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                            if (error)
                                return "file." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorSet)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorSet();
                    if (object.file) {
                        if (!Array.isArray(object.file))
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                        message.file = [];
                        for (var i = 0; i < object.file.length; ++i) {
                            if (typeof object.file[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                            message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorSet.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.file = [];
                    if (message.file && message.file.length) {
                        object.file = [];
                        for (var j = 0; j < message.file.length; ++j)
                            object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorSet to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorSet.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorSet;
            })();
    
            protobuf.FileDescriptorProto = (function() {
    
                /**
                 * Properties of a FileDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorProto
                 * @property {string|null} [name] FileDescriptorProto name
                 * @property {string|null} ["package"] FileDescriptorProto package
                 * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [message_type] FileDescriptorProto message_type
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enum_type] FileDescriptorProto enum_type
                 * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
                 * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
                 * @property {google.protobuf.ISourceCodeInfo|null} [source_code_info] FileDescriptorProto source_code_info
                 */
    
                /**
                 * Constructs a new FileDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorProto.
                 * @implements IFileDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 */
                function FileDescriptorProto(properties) {
                    this.dependency = [];
                    this.message_type = [];
                    this.enum_type = [];
                    this.service = [];
                    this.extension = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.name = "";
    
                /**
                 * FileDescriptorProto package.
                 * @member {string} package
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype["package"] = "";
    
                /**
                 * FileDescriptorProto dependency.
                 * @member {Array.<string>} dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto message_type.
                 * @member {Array.<google.protobuf.IDescriptorProto>} message_type
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.message_type = $util.emptyArray;
    
                /**
                 * FileDescriptorProto enum_type.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enum_type
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.enum_type = $util.emptyArray;
    
                /**
                 * FileDescriptorProto service.
                 * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.service = $util.emptyArray;
    
                /**
                 * FileDescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * FileDescriptorProto options.
                 * @member {google.protobuf.IFileOptions|null|undefined} options
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.options = null;
    
                /**
                 * FileDescriptorProto source_code_info.
                 * @member {google.protobuf.ISourceCodeInfo|null|undefined} source_code_info
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.source_code_info = null;
    
                /**
                 * Creates a new FileDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
                 */
                FileDescriptorProto.create = function create(properties) {
                    return new FileDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                    if (message.dependency != null && message.dependency.length)
                        for (var i = 0; i < message.dependency.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                    if (message.message_type != null && message.message_type.length)
                        for (var i = 0; i < message.message_type.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.message_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.enum_type != null && message.enum_type.length)
                        for (var i = 0; i < message.enum_type.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.service != null && message.service.length)
                        for (var i = 0; i < message.service.length; ++i)
                            $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.source_code_info != null && Object.hasOwnProperty.call(message, "source_code_info"))
                        $root.google.protobuf.SourceCodeInfo.encode(message.source_code_info, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message["package"] = reader.string();
                            break;
                        case 3:
                            if (!(message.dependency && message.dependency.length))
                                message.dependency = [];
                            message.dependency.push(reader.string());
                            break;
                        case 4:
                            if (!(message.message_type && message.message_type.length))
                                message.message_type = [];
                            message.message_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.enum_type && message.enum_type.length))
                                message.enum_type = [];
                            message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.service && message.service.length))
                                message.service = [];
                            message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.source_code_info = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        if (!$util.isString(message["package"]))
                            return "package: string expected";
                    if (message.dependency != null && message.hasOwnProperty("dependency")) {
                        if (!Array.isArray(message.dependency))
                            return "dependency: array expected";
                        for (var i = 0; i < message.dependency.length; ++i)
                            if (!$util.isString(message.dependency[i]))
                                return "dependency: string[] expected";
                    }
                    if (message.message_type != null && message.hasOwnProperty("message_type")) {
                        if (!Array.isArray(message.message_type))
                            return "message_type: array expected";
                        for (var i = 0; i < message.message_type.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.message_type[i]);
                            if (error)
                                return "message_type." + error;
                        }
                    }
                    if (message.enum_type != null && message.hasOwnProperty("enum_type")) {
                        if (!Array.isArray(message.enum_type))
                            return "enum_type: array expected";
                        for (var i = 0; i < message.enum_type.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i]);
                            if (error)
                                return "enum_type." + error;
                        }
                    }
                    if (message.service != null && message.hasOwnProperty("service")) {
                        if (!Array.isArray(message.service))
                            return "service: array expected";
                        for (var i = 0; i < message.service.length; ++i) {
                            var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                            if (error)
                                return "service." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FileOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.source_code_info != null && message.hasOwnProperty("source_code_info")) {
                        var error = $root.google.protobuf.SourceCodeInfo.verify(message.source_code_info);
                        if (error)
                            return "source_code_info." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object["package"] != null)
                        message["package"] = String(object["package"]);
                    if (object.dependency) {
                        if (!Array.isArray(object.dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                        message.dependency = [];
                        for (var i = 0; i < object.dependency.length; ++i)
                            message.dependency[i] = String(object.dependency[i]);
                    }
                    if (object.message_type) {
                        if (!Array.isArray(object.message_type))
                            throw TypeError(".google.protobuf.FileDescriptorProto.message_type: array expected");
                        message.message_type = [];
                        for (var i = 0; i < object.message_type.length; ++i) {
                            if (typeof object.message_type[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.message_type: object expected");
                            message.message_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.message_type[i]);
                        }
                    }
                    if (object.enum_type) {
                        if (!Array.isArray(object.enum_type))
                            throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: array expected");
                        message.enum_type = [];
                        for (var i = 0; i < object.enum_type.length; ++i) {
                            if (typeof object.enum_type[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: object expected");
                            message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i]);
                        }
                    }
                    if (object.service) {
                        if (!Array.isArray(object.service))
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                        message.service = [];
                        for (var i = 0; i < object.service.length; ++i) {
                            if (typeof object.service[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                            message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                    }
                    if (object.source_code_info != null) {
                        if (typeof object.source_code_info !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.source_code_info: object expected");
                        message.source_code_info = $root.google.protobuf.SourceCodeInfo.fromObject(object.source_code_info);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.dependency = [];
                        object.message_type = [];
                        object.enum_type = [];
                        object.service = [];
                        object.extension = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object["package"] = "";
                        object.options = null;
                        object.source_code_info = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        object["package"] = message["package"];
                    if (message.dependency && message.dependency.length) {
                        object.dependency = [];
                        for (var j = 0; j < message.dependency.length; ++j)
                            object.dependency[j] = message.dependency[j];
                    }
                    if (message.message_type && message.message_type.length) {
                        object.message_type = [];
                        for (var j = 0; j < message.message_type.length; ++j)
                            object.message_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.message_type[j], options);
                    }
                    if (message.enum_type && message.enum_type.length) {
                        object.enum_type = [];
                        for (var j = 0; j < message.enum_type.length; ++j)
                            object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options);
                    }
                    if (message.service && message.service.length) {
                        object.service = [];
                        for (var j = 0; j < message.service.length; ++j)
                            object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                    if (message.source_code_info != null && message.hasOwnProperty("source_code_info"))
                        object.source_code_info = $root.google.protobuf.SourceCodeInfo.toObject(message.source_code_info, options);
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorProto;
            })();
    
            protobuf.DescriptorProto = (function() {
    
                /**
                 * Properties of a DescriptorProto.
                 * @memberof google.protobuf
                 * @interface IDescriptorProto
                 * @property {string|null} [name] DescriptorProto name
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [nested_type] DescriptorProto nested_type
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enum_type] DescriptorProto enum_type
                 * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extension_range] DescriptorProto extension_range
                 * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
                 */
    
                /**
                 * Constructs a new DescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a DescriptorProto.
                 * @implements IDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 */
                function DescriptorProto(properties) {
                    this.field = [];
                    this.extension = [];
                    this.nested_type = [];
                    this.enum_type = [];
                    this.extension_range = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.name = "";
    
                /**
                 * DescriptorProto field.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.field = $util.emptyArray;
    
                /**
                 * DescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * DescriptorProto nested_type.
                 * @member {Array.<google.protobuf.IDescriptorProto>} nested_type
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.nested_type = $util.emptyArray;
    
                /**
                 * DescriptorProto enum_type.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enum_type
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.enum_type = $util.emptyArray;
    
                /**
                 * DescriptorProto extension_range.
                 * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extension_range
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension_range = $util.emptyArray;
    
                /**
                 * DescriptorProto options.
                 * @member {google.protobuf.IMessageOptions|null|undefined} options
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new DescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
                 */
                DescriptorProto.create = function create(properties) {
                    return new DescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.field != null && message.field.length)
                        for (var i = 0; i < message.field.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.nested_type != null && message.nested_type.length)
                        for (var i = 0; i < message.nested_type.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.nested_type[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.enum_type != null && message.enum_type.length)
                        for (var i = 0; i < message.enum_type.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.extension_range != null && message.extension_range.length)
                        for (var i = 0; i < message.extension_range.length; ++i)
                            $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extension_range[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.field && message.field.length))
                                message.field = [];
                            message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            if (!(message.nested_type && message.nested_type.length))
                                message.nested_type = [];
                            message.nested_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            if (!(message.enum_type && message.enum_type.length))
                                message.enum_type = [];
                            message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.extension_range && message.extension_range.length))
                                message.extension_range = [];
                            message.extension_range.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.field != null && message.hasOwnProperty("field")) {
                        if (!Array.isArray(message.field))
                            return "field: array expected";
                        for (var i = 0; i < message.field.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                            if (error)
                                return "field." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.nested_type != null && message.hasOwnProperty("nested_type")) {
                        if (!Array.isArray(message.nested_type))
                            return "nested_type: array expected";
                        for (var i = 0; i < message.nested_type.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.nested_type[i]);
                            if (error)
                                return "nested_type." + error;
                        }
                    }
                    if (message.enum_type != null && message.hasOwnProperty("enum_type")) {
                        if (!Array.isArray(message.enum_type))
                            return "enum_type: array expected";
                        for (var i = 0; i < message.enum_type.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i]);
                            if (error)
                                return "enum_type." + error;
                        }
                    }
                    if (message.extension_range != null && message.hasOwnProperty("extension_range")) {
                        if (!Array.isArray(message.extension_range))
                            return "extension_range: array expected";
                        for (var i = 0; i < message.extension_range.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extension_range[i]);
                            if (error)
                                return "extension_range." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MessageOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.field) {
                        if (!Array.isArray(object.field))
                            throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                        message.field = [];
                        for (var i = 0; i < object.field.length; ++i) {
                            if (typeof object.field[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                            message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.nested_type) {
                        if (!Array.isArray(object.nested_type))
                            throw TypeError(".google.protobuf.DescriptorProto.nested_type: array expected");
                        message.nested_type = [];
                        for (var i = 0; i < object.nested_type.length; ++i) {
                            if (typeof object.nested_type[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.nested_type: object expected");
                            message.nested_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nested_type[i]);
                        }
                    }
                    if (object.enum_type) {
                        if (!Array.isArray(object.enum_type))
                            throw TypeError(".google.protobuf.DescriptorProto.enum_type: array expected");
                        message.enum_type = [];
                        for (var i = 0; i < object.enum_type.length; ++i) {
                            if (typeof object.enum_type[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.enum_type: object expected");
                            message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i]);
                        }
                    }
                    if (object.extension_range) {
                        if (!Array.isArray(object.extension_range))
                            throw TypeError(".google.protobuf.DescriptorProto.extension_range: array expected");
                        message.extension_range = [];
                        for (var i = 0; i < object.extension_range.length; ++i) {
                            if (typeof object.extension_range[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension_range: object expected");
                            message.extension_range[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extension_range[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.DescriptorProto} message DescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.field = [];
                        object.nested_type = [];
                        object.enum_type = [];
                        object.extension_range = [];
                        object.extension = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.field && message.field.length) {
                        object.field = [];
                        for (var j = 0; j < message.field.length; ++j)
                            object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                    }
                    if (message.nested_type && message.nested_type.length) {
                        object.nested_type = [];
                        for (var j = 0; j < message.nested_type.length; ++j)
                            object.nested_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.nested_type[j], options);
                    }
                    if (message.enum_type && message.enum_type.length) {
                        object.enum_type = [];
                        for (var j = 0; j < message.enum_type.length; ++j)
                            object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options);
                    }
                    if (message.extension_range && message.extension_range.length) {
                        object.extension_range = [];
                        for (var j = 0; j < message.extension_range.length; ++j)
                            object.extension_range[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extension_range[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this DescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                DescriptorProto.ExtensionRange = (function() {
    
                    /**
                     * Properties of an ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IExtensionRange
                     * @property {number|null} [start] ExtensionRange start
                     * @property {number|null} [end] ExtensionRange end
                     */
    
                    /**
                     * Constructs a new ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents an ExtensionRange.
                     * @implements IExtensionRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     */
                    function ExtensionRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ExtensionRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.start = 0;
    
                    /**
                     * ExtensionRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.end = 0;
    
                    /**
                     * Creates a new ExtensionRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                     */
                    ExtensionRange.create = function create(properties) {
                        return new ExtensionRange(properties);
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an ExtensionRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ExtensionRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExtensionRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ExtensionRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExtensionRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ExtensionRange;
                })();
    
                return DescriptorProto;
            })();
    
            protobuf.FieldDescriptorProto = (function() {
    
                /**
                 * Properties of a FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFieldDescriptorProto
                 * @property {string|null} [name] FieldDescriptorProto name
                 * @property {number|null} [number] FieldDescriptorProto number
                 * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
                 * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
                 * @property {string|null} [type_name] FieldDescriptorProto type_name
                 * @property {string|null} [extendee] FieldDescriptorProto extendee
                 * @property {string|null} [default_value] FieldDescriptorProto default_value
                 * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
                 */
    
                /**
                 * Constructs a new FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldDescriptorProto.
                 * @implements IFieldDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 */
                function FieldDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.name = "";
    
                /**
                 * FieldDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.number = 0;
    
                /**
                 * FieldDescriptorProto label.
                 * @member {google.protobuf.FieldDescriptorProto.Label} label
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.label = 1;
    
                /**
                 * FieldDescriptorProto type.
                 * @member {google.protobuf.FieldDescriptorProto.Type} type
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type = 1;
    
                /**
                 * FieldDescriptorProto type_name.
                 * @member {string} type_name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type_name = "";
    
                /**
                 * FieldDescriptorProto extendee.
                 * @member {string} extendee
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.extendee = "";
    
                /**
                 * FieldDescriptorProto default_value.
                 * @member {string} default_value
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.default_value = "";
    
                /**
                 * FieldDescriptorProto options.
                 * @member {google.protobuf.IFieldOptions|null|undefined} options
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new FieldDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
                 */
                FieldDescriptorProto.create = function create(properties) {
                    return new FieldDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                    if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                    if (message.type_name != null && Object.hasOwnProperty.call(message, "type_name"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.type_name);
                    if (message.default_value != null && Object.hasOwnProperty.call(message, "default_value"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.default_value);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.number = reader.int32();
                            break;
                        case 4:
                            message.label = reader.int32();
                            break;
                        case 5:
                            message.type = reader.int32();
                            break;
                        case 6:
                            message.type_name = reader.string();
                            break;
                        case 2:
                            message.extendee = reader.string();
                            break;
                        case 7:
                            message.default_value = reader.string();
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.label != null && message.hasOwnProperty("label"))
                        switch (message.label) {
                        default:
                            return "label: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                            break;
                        }
                    if (message.type_name != null && message.hasOwnProperty("type_name"))
                        if (!$util.isString(message.type_name))
                            return "type_name: string expected";
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        if (!$util.isString(message.extendee))
                            return "extendee: string expected";
                    if (message.default_value != null && message.hasOwnProperty("default_value"))
                        if (!$util.isString(message.default_value))
                            return "default_value: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FieldOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FieldDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    switch (object.label) {
                    case "LABEL_OPTIONAL":
                    case 1:
                        message.label = 1;
                        break;
                    case "LABEL_REQUIRED":
                    case 2:
                        message.label = 2;
                        break;
                    case "LABEL_REPEATED":
                    case 3:
                        message.label = 3;
                        break;
                    }
                    switch (object.type) {
                    case "TYPE_DOUBLE":
                    case 1:
                        message.type = 1;
                        break;
                    case "TYPE_FLOAT":
                    case 2:
                        message.type = 2;
                        break;
                    case "TYPE_INT64":
                    case 3:
                        message.type = 3;
                        break;
                    case "TYPE_UINT64":
                    case 4:
                        message.type = 4;
                        break;
                    case "TYPE_INT32":
                    case 5:
                        message.type = 5;
                        break;
                    case "TYPE_FIXED64":
                    case 6:
                        message.type = 6;
                        break;
                    case "TYPE_FIXED32":
                    case 7:
                        message.type = 7;
                        break;
                    case "TYPE_BOOL":
                    case 8:
                        message.type = 8;
                        break;
                    case "TYPE_STRING":
                    case 9:
                        message.type = 9;
                        break;
                    case "TYPE_GROUP":
                    case 10:
                        message.type = 10;
                        break;
                    case "TYPE_MESSAGE":
                    case 11:
                        message.type = 11;
                        break;
                    case "TYPE_BYTES":
                    case 12:
                        message.type = 12;
                        break;
                    case "TYPE_UINT32":
                    case 13:
                        message.type = 13;
                        break;
                    case "TYPE_ENUM":
                    case 14:
                        message.type = 14;
                        break;
                    case "TYPE_SFIXED32":
                    case 15:
                        message.type = 15;
                        break;
                    case "TYPE_SFIXED64":
                    case 16:
                        message.type = 16;
                        break;
                    case "TYPE_SINT32":
                    case 17:
                        message.type = 17;
                        break;
                    case "TYPE_SINT64":
                    case 18:
                        message.type = 18;
                        break;
                    }
                    if (object.type_name != null)
                        message.type_name = String(object.type_name);
                    if (object.extendee != null)
                        message.extendee = String(object.extendee);
                    if (object.default_value != null)
                        message.default_value = String(object.default_value);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.extendee = "";
                        object.number = 0;
                        object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                        object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                        object.type_name = "";
                        object.default_value = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        object.extendee = message.extendee;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.label != null && message.hasOwnProperty("label"))
                        object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                    if (message.type_name != null && message.hasOwnProperty("type_name"))
                        object.type_name = message.type_name;
                    if (message.default_value != null && message.hasOwnProperty("default_value"))
                        object.default_value = message.default_value;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this FieldDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Type enum.
                 * @name google.protobuf.FieldDescriptorProto.Type
                 * @enum {number}
                 * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
                 * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
                 * @property {number} TYPE_INT64=3 TYPE_INT64 value
                 * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
                 * @property {number} TYPE_INT32=5 TYPE_INT32 value
                 * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
                 * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
                 * @property {number} TYPE_BOOL=8 TYPE_BOOL value
                 * @property {number} TYPE_STRING=9 TYPE_STRING value
                 * @property {number} TYPE_GROUP=10 TYPE_GROUP value
                 * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
                 * @property {number} TYPE_BYTES=12 TYPE_BYTES value
                 * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
                 * @property {number} TYPE_ENUM=14 TYPE_ENUM value
                 * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
                 * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
                 * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
                 * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
                 */
                FieldDescriptorProto.Type = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                    values[valuesById[2] = "TYPE_FLOAT"] = 2;
                    values[valuesById[3] = "TYPE_INT64"] = 3;
                    values[valuesById[4] = "TYPE_UINT64"] = 4;
                    values[valuesById[5] = "TYPE_INT32"] = 5;
                    values[valuesById[6] = "TYPE_FIXED64"] = 6;
                    values[valuesById[7] = "TYPE_FIXED32"] = 7;
                    values[valuesById[8] = "TYPE_BOOL"] = 8;
                    values[valuesById[9] = "TYPE_STRING"] = 9;
                    values[valuesById[10] = "TYPE_GROUP"] = 10;
                    values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                    values[valuesById[12] = "TYPE_BYTES"] = 12;
                    values[valuesById[13] = "TYPE_UINT32"] = 13;
                    values[valuesById[14] = "TYPE_ENUM"] = 14;
                    values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                    values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                    values[valuesById[17] = "TYPE_SINT32"] = 17;
                    values[valuesById[18] = "TYPE_SINT64"] = 18;
                    return values;
                })();
    
                /**
                 * Label enum.
                 * @name google.protobuf.FieldDescriptorProto.Label
                 * @enum {number}
                 * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
                 * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
                 * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
                 */
                FieldDescriptorProto.Label = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                    values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                    values[valuesById[3] = "LABEL_REPEATED"] = 3;
                    return values;
                })();
    
                return FieldDescriptorProto;
            })();
    
            protobuf.EnumDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumDescriptorProto
                 * @property {string|null} [name] EnumDescriptorProto name
                 * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
                 * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumDescriptorProto.
                 * @implements IEnumDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 */
                function EnumDescriptorProto(properties) {
                    this.value = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.name = "";
    
                /**
                 * EnumDescriptorProto value.
                 * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.value = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto options.
                 * @member {google.protobuf.IEnumOptions|null|undefined} options
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
                 */
                EnumDescriptorProto.create = function create(properties) {
                    return new EnumDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.value != null && message.value.length)
                        for (var i = 0; i < message.value.length; ++i)
                            $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.value && message.value.length))
                                message.value = [];
                            message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.value != null && message.hasOwnProperty("value")) {
                        if (!Array.isArray(message.value))
                            return "value: array expected";
                        for (var i = 0; i < message.value.length; ++i) {
                            var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                            if (error)
                                return "value." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.value) {
                        if (!Array.isArray(object.value))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                        message.value = [];
                        for (var i = 0; i < object.value.length; ++i) {
                            if (typeof object.value[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                            message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.value = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.value && message.value.length) {
                        object.value = [];
                        for (var j = 0; j < message.value.length; ++j)
                            object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumDescriptorProto;
            })();
    
            protobuf.EnumValueDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumValueDescriptorProto
                 * @property {string|null} [name] EnumValueDescriptorProto name
                 * @property {number|null} [number] EnumValueDescriptorProto number
                 * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueDescriptorProto.
                 * @implements IEnumValueDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 */
                function EnumValueDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.name = "";
    
                /**
                 * EnumValueDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.number = 0;
    
                /**
                 * EnumValueDescriptorProto options.
                 * @member {google.protobuf.IEnumValueOptions|null|undefined} options
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumValueDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
                 */
                EnumValueDescriptorProto.create = function create(properties) {
                    return new EnumValueDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.number = reader.int32();
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumValueDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.number = 0;
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumValueDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueDescriptorProto;
            })();
    
            protobuf.ServiceDescriptorProto = (function() {
    
                /**
                 * Properties of a ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IServiceDescriptorProto
                 * @property {string|null} [name] ServiceDescriptorProto name
                 * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
                 * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
                 */
    
                /**
                 * Constructs a new ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceDescriptorProto.
                 * @implements IServiceDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 */
                function ServiceDescriptorProto(properties) {
                    this.method = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.name = "";
    
                /**
                 * ServiceDescriptorProto method.
                 * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.method = $util.emptyArray;
    
                /**
                 * ServiceDescriptorProto options.
                 * @member {google.protobuf.IServiceOptions|null|undefined} options
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new ServiceDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
                 */
                ServiceDescriptorProto.create = function create(properties) {
                    return new ServiceDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.method != null && message.method.length)
                        for (var i = 0; i < message.method.length; ++i)
                            $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.method && message.method.length))
                                message.method = [];
                            message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.method != null && message.hasOwnProperty("method")) {
                        if (!Array.isArray(message.method))
                            return "method: array expected";
                        for (var i = 0; i < message.method.length; ++i) {
                            var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                            if (error)
                                return "method." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.ServiceDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.method) {
                        if (!Array.isArray(object.method))
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                        message.method = [];
                        for (var i = 0; i < object.method.length; ++i) {
                            if (typeof object.method[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                            message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.method = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.method && message.method.length) {
                        object.method = [];
                        for (var j = 0; j < message.method.length; ++j)
                            object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this ServiceDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceDescriptorProto;
            })();
    
            protobuf.MethodDescriptorProto = (function() {
    
                /**
                 * Properties of a MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IMethodDescriptorProto
                 * @property {string|null} [name] MethodDescriptorProto name
                 * @property {string|null} [input_type] MethodDescriptorProto input_type
                 * @property {string|null} [output_type] MethodDescriptorProto output_type
                 * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
                 */
    
                /**
                 * Constructs a new MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodDescriptorProto.
                 * @implements IMethodDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 */
                function MethodDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.name = "";
    
                /**
                 * MethodDescriptorProto input_type.
                 * @member {string} input_type
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.input_type = "";
    
                /**
                 * MethodDescriptorProto output_type.
                 * @member {string} output_type
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.output_type = "";
    
                /**
                 * MethodDescriptorProto options.
                 * @member {google.protobuf.IMethodOptions|null|undefined} options
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new MethodDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
                 */
                MethodDescriptorProto.create = function create(properties) {
                    return new MethodDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.input_type != null && Object.hasOwnProperty.call(message, "input_type"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.input_type);
                    if (message.output_type != null && Object.hasOwnProperty.call(message, "output_type"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.output_type);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.input_type = reader.string();
                            break;
                        case 3:
                            message.output_type = reader.string();
                            break;
                        case 4:
                            message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.input_type != null && message.hasOwnProperty("input_type"))
                        if (!$util.isString(message.input_type))
                            return "input_type: string expected";
                    if (message.output_type != null && message.hasOwnProperty("output_type"))
                        if (!$util.isString(message.output_type))
                            return "output_type: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MethodOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.MethodDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.input_type != null)
                        message.input_type = String(object.input_type);
                    if (object.output_type != null)
                        message.output_type = String(object.output_type);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.input_type = "";
                        object.output_type = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.input_type != null && message.hasOwnProperty("input_type"))
                        object.input_type = message.input_type;
                    if (message.output_type != null && message.hasOwnProperty("output_type"))
                        object.output_type = message.output_type;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this MethodDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MethodDescriptorProto;
            })();
    
            protobuf.FileOptions = (function() {
    
                /**
                 * Properties of a FileOptions.
                 * @memberof google.protobuf
                 * @interface IFileOptions
                 * @property {string|null} [java_package] FileOptions java_package
                 * @property {string|null} [java_outer_classname] FileOptions java_outer_classname
                 * @property {boolean|null} [java_multiple_files] FileOptions java_multiple_files
                 * @property {boolean|null} [java_generate_equals_and_hash] FileOptions java_generate_equals_and_hash
                 * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimize_for] FileOptions optimize_for
                 * @property {boolean|null} [cc_generic_services] FileOptions cc_generic_services
                 * @property {boolean|null} [java_generic_services] FileOptions java_generic_services
                 * @property {boolean|null} [py_generic_services] FileOptions py_generic_services
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FileOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new FileOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileOptions.
                 * @implements IFileOptions
                 * @constructor
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 */
                function FileOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileOptions java_package.
                 * @member {string} java_package
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_package = "";
    
                /**
                 * FileOptions java_outer_classname.
                 * @member {string} java_outer_classname
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_outer_classname = "";
    
                /**
                 * FileOptions java_multiple_files.
                 * @member {boolean} java_multiple_files
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_multiple_files = false;
    
                /**
                 * FileOptions java_generate_equals_and_hash.
                 * @member {boolean} java_generate_equals_and_hash
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_generate_equals_and_hash = false;
    
                /**
                 * FileOptions optimize_for.
                 * @member {google.protobuf.FileOptions.OptimizeMode} optimize_for
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.optimize_for = 1;
    
                /**
                 * FileOptions cc_generic_services.
                 * @member {boolean} cc_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.cc_generic_services = false;
    
                /**
                 * FileOptions java_generic_services.
                 * @member {boolean} java_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_generic_services = false;
    
                /**
                 * FileOptions py_generic_services.
                 * @member {boolean} py_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.py_generic_services = false;
    
                /**
                 * FileOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new FileOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FileOptions} FileOptions instance
                 */
                FileOptions.create = function create(properties) {
                    return new FileOptions(properties);
                };
    
                /**
                 * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.java_package != null && Object.hasOwnProperty.call(message, "java_package"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.java_package);
                    if (message.java_outer_classname != null && Object.hasOwnProperty.call(message, "java_outer_classname"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.java_outer_classname);
                    if (message.optimize_for != null && Object.hasOwnProperty.call(message, "optimize_for"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimize_for);
                    if (message.java_multiple_files != null && Object.hasOwnProperty.call(message, "java_multiple_files"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.java_multiple_files);
                    if (message.cc_generic_services != null && Object.hasOwnProperty.call(message, "cc_generic_services"))
                        writer.uint32(/* id 16, wireType 0 =*/128).bool(message.cc_generic_services);
                    if (message.java_generic_services != null && Object.hasOwnProperty.call(message, "java_generic_services"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.java_generic_services);
                    if (message.py_generic_services != null && Object.hasOwnProperty.call(message, "py_generic_services"))
                        writer.uint32(/* id 18, wireType 0 =*/144).bool(message.py_generic_services);
                    if (message.java_generate_equals_and_hash != null && Object.hasOwnProperty.call(message, "java_generate_equals_and_hash"))
                        writer.uint32(/* id 20, wireType 0 =*/160).bool(message.java_generate_equals_and_hash);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.java_package = reader.string();
                            break;
                        case 8:
                            message.java_outer_classname = reader.string();
                            break;
                        case 10:
                            message.java_multiple_files = reader.bool();
                            break;
                        case 20:
                            message.java_generate_equals_and_hash = reader.bool();
                            break;
                        case 9:
                            message.optimize_for = reader.int32();
                            break;
                        case 16:
                            message.cc_generic_services = reader.bool();
                            break;
                        case 17:
                            message.java_generic_services = reader.bool();
                            break;
                        case 18:
                            message.py_generic_services = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileOptions message.
                 * @function verify
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.java_package != null && message.hasOwnProperty("java_package"))
                        if (!$util.isString(message.java_package))
                            return "java_package: string expected";
                    if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                        if (!$util.isString(message.java_outer_classname))
                            return "java_outer_classname: string expected";
                    if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                        if (typeof message.java_multiple_files !== "boolean")
                            return "java_multiple_files: boolean expected";
                    if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                        if (typeof message.java_generate_equals_and_hash !== "boolean")
                            return "java_generate_equals_and_hash: boolean expected";
                    if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                        switch (message.optimize_for) {
                        default:
                            return "optimize_for: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                        if (typeof message.cc_generic_services !== "boolean")
                            return "cc_generic_services: boolean expected";
                    if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                        if (typeof message.java_generic_services !== "boolean")
                            return "java_generic_services: boolean expected";
                    if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                        if (typeof message.py_generic_services !== "boolean")
                            return "py_generic_services: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileOptions)
                        return object;
                    var message = new $root.google.protobuf.FileOptions();
                    if (object.java_package != null)
                        message.java_package = String(object.java_package);
                    if (object.java_outer_classname != null)
                        message.java_outer_classname = String(object.java_outer_classname);
                    if (object.java_multiple_files != null)
                        message.java_multiple_files = Boolean(object.java_multiple_files);
                    if (object.java_generate_equals_and_hash != null)
                        message.java_generate_equals_and_hash = Boolean(object.java_generate_equals_and_hash);
                    switch (object.optimize_for) {
                    case "SPEED":
                    case 1:
                        message.optimize_for = 1;
                        break;
                    case "CODE_SIZE":
                    case 2:
                        message.optimize_for = 2;
                        break;
                    case "LITE_RUNTIME":
                    case 3:
                        message.optimize_for = 3;
                        break;
                    }
                    if (object.cc_generic_services != null)
                        message.cc_generic_services = Boolean(object.cc_generic_services);
                    if (object.java_generic_services != null)
                        message.java_generic_services = Boolean(object.java_generic_services);
                    if (object.py_generic_services != null)
                        message.py_generic_services = Boolean(object.py_generic_services);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.FileOptions} message FileOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.java_package = "";
                        object.java_outer_classname = "";
                        object.optimize_for = options.enums === String ? "SPEED" : 1;
                        object.java_multiple_files = false;
                        object.cc_generic_services = false;
                        object.java_generic_services = false;
                        object.py_generic_services = false;
                        object.java_generate_equals_and_hash = false;
                    }
                    if (message.java_package != null && message.hasOwnProperty("java_package"))
                        object.java_package = message.java_package;
                    if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                        object.java_outer_classname = message.java_outer_classname;
                    if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                        object.optimize_for = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimize_for] : message.optimize_for;
                    if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                        object.java_multiple_files = message.java_multiple_files;
                    if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                        object.cc_generic_services = message.cc_generic_services;
                    if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                        object.java_generic_services = message.java_generic_services;
                    if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                        object.py_generic_services = message.py_generic_services;
                    if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                        object.java_generate_equals_and_hash = message.java_generate_equals_and_hash;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * OptimizeMode enum.
                 * @name google.protobuf.FileOptions.OptimizeMode
                 * @enum {number}
                 * @property {number} SPEED=1 SPEED value
                 * @property {number} CODE_SIZE=2 CODE_SIZE value
                 * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
                 */
                FileOptions.OptimizeMode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "SPEED"] = 1;
                    values[valuesById[2] = "CODE_SIZE"] = 2;
                    values[valuesById[3] = "LITE_RUNTIME"] = 3;
                    return values;
                })();
    
                return FileOptions;
            })();
    
            protobuf.MessageOptions = (function() {
    
                /**
                 * Properties of a MessageOptions.
                 * @memberof google.protobuf
                 * @interface IMessageOptions
                 * @property {boolean|null} [message_set_wire_format] MessageOptions message_set_wire_format
                 * @property {boolean|null} [no_standard_descriptor_accessor] MessageOptions no_standard_descriptor_accessor
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] MessageOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new MessageOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MessageOptions.
                 * @implements IMessageOptions
                 * @constructor
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 */
                function MessageOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MessageOptions message_set_wire_format.
                 * @member {boolean} message_set_wire_format
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.message_set_wire_format = false;
    
                /**
                 * MessageOptions no_standard_descriptor_accessor.
                 * @member {boolean} no_standard_descriptor_accessor
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.no_standard_descriptor_accessor = false;
    
                /**
                 * MessageOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new MessageOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MessageOptions} MessageOptions instance
                 */
                MessageOptions.create = function create(properties) {
                    return new MessageOptions(properties);
                };
    
                /**
                 * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.message_set_wire_format != null && Object.hasOwnProperty.call(message, "message_set_wire_format"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.message_set_wire_format);
                    if (message.no_standard_descriptor_accessor != null && Object.hasOwnProperty.call(message, "no_standard_descriptor_accessor"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.no_standard_descriptor_accessor);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.message_set_wire_format = reader.bool();
                            break;
                        case 2:
                            message.no_standard_descriptor_accessor = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MessageOptions message.
                 * @function verify
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                        if (typeof message.message_set_wire_format !== "boolean")
                            return "message_set_wire_format: boolean expected";
                    if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                        if (typeof message.no_standard_descriptor_accessor !== "boolean")
                            return "no_standard_descriptor_accessor: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MessageOptions)
                        return object;
                    var message = new $root.google.protobuf.MessageOptions();
                    if (object.message_set_wire_format != null)
                        message.message_set_wire_format = Boolean(object.message_set_wire_format);
                    if (object.no_standard_descriptor_accessor != null)
                        message.no_standard_descriptor_accessor = Boolean(object.no_standard_descriptor_accessor);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.MessageOptions} message MessageOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.message_set_wire_format = false;
                        object.no_standard_descriptor_accessor = false;
                    }
                    if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                        object.message_set_wire_format = message.message_set_wire_format;
                    if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                        object.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this MessageOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MessageOptions;
            })();
    
            protobuf.FieldOptions = (function() {
    
                /**
                 * Properties of a FieldOptions.
                 * @memberof google.protobuf
                 * @interface IFieldOptions
                 * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
                 * @property {boolean|null} [packed] FieldOptions packed
                 * @property {boolean|null} [deprecated] FieldOptions deprecated
                 * @property {string|null} [experimental_map_key] FieldOptions experimental_map_key
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FieldOptions uninterpreted_option
                 * @property {string|null} [".description"] FieldOptions .description
                 */
    
                /**
                 * Constructs a new FieldOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldOptions.
                 * @implements IFieldOptions
                 * @constructor
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 */
                function FieldOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldOptions ctype.
                 * @member {google.protobuf.FieldOptions.CType} ctype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.ctype = 0;
    
                /**
                 * FieldOptions packed.
                 * @member {boolean} packed
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.packed = false;
    
                /**
                 * FieldOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.deprecated = false;
    
                /**
                 * FieldOptions experimental_map_key.
                 * @member {string} experimental_map_key
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.experimental_map_key = "";
    
                /**
                 * FieldOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * FieldOptions .description.
                 * @member {string} .description
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype[".description"] = "";
    
                /**
                 * Creates a new FieldOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FieldOptions} FieldOptions instance
                 */
                FieldOptions.create = function create(properties) {
                    return new FieldOptions(properties);
                };
    
                /**
                 * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                    if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                    if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.experimental_map_key != null && Object.hasOwnProperty.call(message, "experimental_map_key"))
                        writer.uint32(/* id 9, wireType 2 =*/74).string(message.experimental_map_key);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".description"] != null && Object.hasOwnProperty.call(message, ".description"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".description"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.ctype = reader.int32();
                            break;
                        case 2:
                            message.packed = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 9:
                            message.experimental_map_key = reader.string();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 50000:
                            message[".description"] = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldOptions message.
                 * @function verify
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        switch (message.ctype) {
                        default:
                            return "ctype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        if (typeof message.packed !== "boolean")
                            return "packed: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.experimental_map_key != null && message.hasOwnProperty("experimental_map_key"))
                        if (!$util.isString(message.experimental_map_key))
                            return "experimental_map_key: string expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".description"] != null && message.hasOwnProperty(".description"))
                        if (!$util.isString(message[".description"]))
                            return ".description: string expected";
                    return null;
                };
    
                /**
                 * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldOptions)
                        return object;
                    var message = new $root.google.protobuf.FieldOptions();
                    switch (object.ctype) {
                    case "STRING":
                    case 0:
                        message.ctype = 0;
                        break;
                    case "CORD":
                    case 1:
                        message.ctype = 1;
                        break;
                    case "STRING_PIECE":
                    case 2:
                        message.ctype = 2;
                        break;
                    }
                    if (object.packed != null)
                        message.packed = Boolean(object.packed);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.experimental_map_key != null)
                        message.experimental_map_key = String(object.experimental_map_key);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".description"] != null)
                        message[".description"] = String(object[".description"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.FieldOptions} message FieldOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.ctype = options.enums === String ? "STRING" : 0;
                        object.packed = false;
                        object.deprecated = false;
                        object.experimental_map_key = "";
                        object[".description"] = "";
                    }
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        object.packed = message.packed;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.experimental_map_key != null && message.hasOwnProperty("experimental_map_key"))
                        object.experimental_map_key = message.experimental_map_key;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".description"] != null && message.hasOwnProperty(".description"))
                        object[".description"] = message[".description"];
                    return object;
                };
    
                /**
                 * Converts this FieldOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * CType enum.
                 * @name google.protobuf.FieldOptions.CType
                 * @enum {number}
                 * @property {number} STRING=0 STRING value
                 * @property {number} CORD=1 CORD value
                 * @property {number} STRING_PIECE=2 STRING_PIECE value
                 */
                FieldOptions.CType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STRING"] = 0;
                    values[valuesById[1] = "CORD"] = 1;
                    values[valuesById[2] = "STRING_PIECE"] = 2;
                    return values;
                })();
    
                return FieldOptions;
            })();
    
            protobuf.EnumOptions = (function() {
    
                /**
                 * Properties of an EnumOptions.
                 * @memberof google.protobuf
                 * @interface IEnumOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] EnumOptions uninterpreted_option
                 * @property {string|null} [".enum_description"] EnumOptions .enum_description
                 */
    
                /**
                 * Constructs a new EnumOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumOptions.
                 * @implements IEnumOptions
                 * @constructor
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 */
                function EnumOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * EnumOptions .enum_description.
                 * @member {string} .enum_description
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype[".enum_description"] = "";
    
                /**
                 * Creates a new EnumOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumOptions} EnumOptions instance
                 */
                EnumOptions.create = function create(properties) {
                    return new EnumOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".enum_description"] != null && Object.hasOwnProperty.call(message, ".enum_description"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".enum_description"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 50000:
                            message[".enum_description"] = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".enum_description"] != null && message.hasOwnProperty(".enum_description"))
                        if (!$util.isString(message[".enum_description"]))
                            return ".enum_description: string expected";
                    return null;
                };
    
                /**
                 * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumOptions();
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".enum_description"] != null)
                        message[".enum_description"] = String(object[".enum_description"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.EnumOptions} message EnumOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults)
                        object[".enum_description"] = "";
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".enum_description"] != null && message.hasOwnProperty(".enum_description"))
                        object[".enum_description"] = message[".enum_description"];
                    return object;
                };
    
                /**
                 * Converts this EnumOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumOptions;
            })();
    
            protobuf.EnumValueOptions = (function() {
    
                /**
                 * Properties of an EnumValueOptions.
                 * @memberof google.protobuf
                 * @interface IEnumValueOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] EnumValueOptions uninterpreted_option
                 * @property {string|null} [".enum_value_description"] EnumValueOptions .enum_value_description
                 */
    
                /**
                 * Constructs a new EnumValueOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueOptions.
                 * @implements IEnumValueOptions
                 * @constructor
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 */
                function EnumValueOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * EnumValueOptions .enum_value_description.
                 * @member {string} .enum_value_description
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype[".enum_value_description"] = "";
    
                /**
                 * Creates a new EnumValueOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
                 */
                EnumValueOptions.create = function create(properties) {
                    return new EnumValueOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".enum_value_description"] != null && Object.hasOwnProperty.call(message, ".enum_value_description"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".enum_value_description"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 50000:
                            message[".enum_value_description"] = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".enum_value_description"] != null && message.hasOwnProperty(".enum_value_description"))
                        if (!$util.isString(message[".enum_value_description"]))
                            return ".enum_value_description: string expected";
                    return null;
                };
    
                /**
                 * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumValueOptions();
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".enum_value_description"] != null)
                        message[".enum_value_description"] = String(object[".enum_value_description"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults)
                        object[".enum_value_description"] = "";
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".enum_value_description"] != null && message.hasOwnProperty(".enum_value_description"))
                        object[".enum_value_description"] = message[".enum_value_description"];
                    return object;
                };
    
                /**
                 * Converts this EnumValueOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueOptions;
            })();
    
            protobuf.ServiceOptions = (function() {
    
                /**
                 * Properties of a ServiceOptions.
                 * @memberof google.protobuf
                 * @interface IServiceOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] ServiceOptions uninterpreted_option
                 * @property {string|null} [".service_description"] ServiceOptions .service_description
                 * @property {EProtoExecutionSite|null} [".service_execution_site"] ServiceOptions .service_execution_site
                 */
    
                /**
                 * Constructs a new ServiceOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceOptions.
                 * @implements IServiceOptions
                 * @constructor
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 */
                function ServiceOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * ServiceOptions .service_description.
                 * @member {string} .service_description
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype[".service_description"] = "";
    
                /**
                 * ServiceOptions .service_execution_site.
                 * @member {EProtoExecutionSite} .service_execution_site
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype[".service_execution_site"] = 0;
    
                /**
                 * Creates a new ServiceOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
                 */
                ServiceOptions.create = function create(properties) {
                    return new ServiceOptions(properties);
                };
    
                /**
                 * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".service_description"] != null && Object.hasOwnProperty.call(message, ".service_description"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".service_description"]);
                    if (message[".service_execution_site"] != null && Object.hasOwnProperty.call(message, ".service_execution_site"))
                        writer.uint32(/* id 50008, wireType 0 =*/400064).int32(message[".service_execution_site"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 50000:
                            message[".service_description"] = reader.string();
                            break;
                        case 50008:
                            message[".service_execution_site"] = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceOptions message.
                 * @function verify
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".service_description"] != null && message.hasOwnProperty(".service_description"))
                        if (!$util.isString(message[".service_description"]))
                            return ".service_description: string expected";
                    if (message[".service_execution_site"] != null && message.hasOwnProperty(".service_execution_site"))
                        switch (message[".service_execution_site"]) {
                        default:
                            return ".service_execution_site: enum value expected";
                        case 0:
                        case 3:
                            break;
                        }
                    return null;
                };
    
                /**
                 * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceOptions)
                        return object;
                    var message = new $root.google.protobuf.ServiceOptions();
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".service_description"] != null)
                        message[".service_description"] = String(object[".service_description"]);
                    switch (object[".service_execution_site"]) {
                    case "k_EProtoExecutionSiteUnknown":
                    case 0:
                        message[".service_execution_site"] = 0;
                        break;
                    case "k_EProtoExecutionSiteSteamClient":
                    case 3:
                        message[".service_execution_site"] = 3;
                        break;
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.ServiceOptions} message ServiceOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object[".service_description"] = "";
                        object[".service_execution_site"] = options.enums === String ? "k_EProtoExecutionSiteUnknown" : 0;
                    }
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".service_description"] != null && message.hasOwnProperty(".service_description"))
                        object[".service_description"] = message[".service_description"];
                    if (message[".service_execution_site"] != null && message.hasOwnProperty(".service_execution_site"))
                        object[".service_execution_site"] = options.enums === String ? $root.EProtoExecutionSite[message[".service_execution_site"]] : message[".service_execution_site"];
                    return object;
                };
    
                /**
                 * Converts this ServiceOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceOptions;
            })();
    
            protobuf.MethodOptions = (function() {
    
                /**
                 * Properties of a MethodOptions.
                 * @memberof google.protobuf
                 * @interface IMethodOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] MethodOptions uninterpreted_option
                 * @property {string|null} [".method_description"] MethodOptions .method_description
                 */
    
                /**
                 * Constructs a new MethodOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodOptions.
                 * @implements IMethodOptions
                 * @constructor
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 */
                function MethodOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * MethodOptions .method_description.
                 * @member {string} .method_description
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype[".method_description"] = "";
    
                /**
                 * Creates a new MethodOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MethodOptions} MethodOptions instance
                 */
                MethodOptions.create = function create(properties) {
                    return new MethodOptions(properties);
                };
    
                /**
                 * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".method_description"] != null && Object.hasOwnProperty.call(message, ".method_description"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".method_description"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 50000:
                            message[".method_description"] = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodOptions message.
                 * @function verify
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".method_description"] != null && message.hasOwnProperty(".method_description"))
                        if (!$util.isString(message[".method_description"]))
                            return ".method_description: string expected";
                    return null;
                };
    
                /**
                 * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodOptions)
                        return object;
                    var message = new $root.google.protobuf.MethodOptions();
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".method_description"] != null)
                        message[".method_description"] = String(object[".method_description"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.MethodOptions} message MethodOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults)
                        object[".method_description"] = "";
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".method_description"] != null && message.hasOwnProperty(".method_description"))
                        object[".method_description"] = message[".method_description"];
                    return object;
                };
    
                /**
                 * Converts this MethodOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MethodOptions;
            })();
    
            protobuf.UninterpretedOption = (function() {
    
                /**
                 * Properties of an UninterpretedOption.
                 * @memberof google.protobuf
                 * @interface IUninterpretedOption
                 * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
                 * @property {string|null} [identifier_value] UninterpretedOption identifier_value
                 * @property {number|Long|null} [positive_int_value] UninterpretedOption positive_int_value
                 * @property {number|Long|null} [negative_int_value] UninterpretedOption negative_int_value
                 * @property {number|null} [double_value] UninterpretedOption double_value
                 * @property {Uint8Array|null} [string_value] UninterpretedOption string_value
                 * @property {string|null} [aggregate_value] UninterpretedOption aggregate_value
                 */
    
                /**
                 * Constructs a new UninterpretedOption.
                 * @memberof google.protobuf
                 * @classdesc Represents an UninterpretedOption.
                 * @implements IUninterpretedOption
                 * @constructor
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 */
                function UninterpretedOption(properties) {
                    this.name = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UninterpretedOption name.
                 * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.name = $util.emptyArray;
    
                /**
                 * UninterpretedOption identifier_value.
                 * @member {string} identifier_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.identifier_value = "";
    
                /**
                 * UninterpretedOption positive_int_value.
                 * @member {number|Long} positive_int_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.positive_int_value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * UninterpretedOption negative_int_value.
                 * @member {number|Long} negative_int_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.negative_int_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * UninterpretedOption double_value.
                 * @member {number} double_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.double_value = 0;
    
                /**
                 * UninterpretedOption string_value.
                 * @member {Uint8Array} string_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.string_value = $util.newBuffer([]);
    
                /**
                 * UninterpretedOption aggregate_value.
                 * @member {string} aggregate_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.aggregate_value = "";
    
                /**
                 * Creates a new UninterpretedOption instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
                 */
                UninterpretedOption.create = function create(properties) {
                    return new UninterpretedOption(properties);
                };
    
                /**
                 * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.name.length)
                        for (var i = 0; i < message.name.length; ++i)
                            $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.identifier_value != null && Object.hasOwnProperty.call(message, "identifier_value"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifier_value);
                    if (message.positive_int_value != null && Object.hasOwnProperty.call(message, "positive_int_value"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positive_int_value);
                    if (message.negative_int_value != null && Object.hasOwnProperty.call(message, "negative_int_value"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negative_int_value);
                    if (message.double_value != null && Object.hasOwnProperty.call(message, "double_value"))
                        writer.uint32(/* id 6, wireType 1 =*/49).double(message.double_value);
                    if (message.string_value != null && Object.hasOwnProperty.call(message, "string_value"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.string_value);
                    if (message.aggregate_value != null && Object.hasOwnProperty.call(message, "aggregate_value"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregate_value);
                    return writer;
                };
    
                /**
                 * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            if (!(message.name && message.name.length))
                                message.name = [];
                            message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.identifier_value = reader.string();
                            break;
                        case 4:
                            message.positive_int_value = reader.uint64();
                            break;
                        case 5:
                            message.negative_int_value = reader.int64();
                            break;
                        case 6:
                            message.double_value = reader.double();
                            break;
                        case 7:
                            message.string_value = reader.bytes();
                            break;
                        case 8:
                            message.aggregate_value = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UninterpretedOption message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UninterpretedOption.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name")) {
                        if (!Array.isArray(message.name))
                            return "name: array expected";
                        for (var i = 0; i < message.name.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                            if (error)
                                return "name." + error;
                        }
                    }
                    if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                        if (!$util.isString(message.identifier_value))
                            return "identifier_value: string expected";
                    if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                        if (!$util.isInteger(message.positive_int_value) && !(message.positive_int_value && $util.isInteger(message.positive_int_value.low) && $util.isInteger(message.positive_int_value.high)))
                            return "positive_int_value: integer|Long expected";
                    if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                        if (!$util.isInteger(message.negative_int_value) && !(message.negative_int_value && $util.isInteger(message.negative_int_value.low) && $util.isInteger(message.negative_int_value.high)))
                            return "negative_int_value: integer|Long expected";
                    if (message.double_value != null && message.hasOwnProperty("double_value"))
                        if (typeof message.double_value !== "number")
                            return "double_value: number expected";
                    if (message.string_value != null && message.hasOwnProperty("string_value"))
                        if (!(message.string_value && typeof message.string_value.length === "number" || $util.isString(message.string_value)))
                            return "string_value: buffer expected";
                    if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                        if (!$util.isString(message.aggregate_value))
                            return "aggregate_value: string expected";
                    return null;
                };
    
                /**
                 * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption();
                    if (object.name) {
                        if (!Array.isArray(object.name))
                            throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                        message.name = [];
                        for (var i = 0; i < object.name.length; ++i) {
                            if (typeof object.name[i] !== "object")
                                throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                            message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                        }
                    }
                    if (object.identifier_value != null)
                        message.identifier_value = String(object.identifier_value);
                    if (object.positive_int_value != null)
                        if ($util.Long)
                            (message.positive_int_value = $util.Long.fromValue(object.positive_int_value)).unsigned = true;
                        else if (typeof object.positive_int_value === "string")
                            message.positive_int_value = parseInt(object.positive_int_value, 10);
                        else if (typeof object.positive_int_value === "number")
                            message.positive_int_value = object.positive_int_value;
                        else if (typeof object.positive_int_value === "object")
                            message.positive_int_value = new $util.LongBits(object.positive_int_value.low >>> 0, object.positive_int_value.high >>> 0).toNumber(true);
                    if (object.negative_int_value != null)
                        if ($util.Long)
                            (message.negative_int_value = $util.Long.fromValue(object.negative_int_value)).unsigned = false;
                        else if (typeof object.negative_int_value === "string")
                            message.negative_int_value = parseInt(object.negative_int_value, 10);
                        else if (typeof object.negative_int_value === "number")
                            message.negative_int_value = object.negative_int_value;
                        else if (typeof object.negative_int_value === "object")
                            message.negative_int_value = new $util.LongBits(object.negative_int_value.low >>> 0, object.negative_int_value.high >>> 0).toNumber();
                    if (object.double_value != null)
                        message.double_value = Number(object.double_value);
                    if (object.string_value != null)
                        if (typeof object.string_value === "string")
                            $util.base64.decode(object.string_value, message.string_value = $util.newBuffer($util.base64.length(object.string_value)), 0);
                        else if (object.string_value.length)
                            message.string_value = object.string_value;
                    if (object.aggregate_value != null)
                        message.aggregate_value = String(object.aggregate_value);
                    return message;
                };
    
                /**
                 * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UninterpretedOption.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.name = [];
                    if (options.defaults) {
                        object.identifier_value = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.positive_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.positive_int_value = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.negative_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.negative_int_value = options.longs === String ? "0" : 0;
                        object.double_value = 0;
                        if (options.bytes === String)
                            object.string_value = "";
                        else {
                            object.string_value = [];
                            if (options.bytes !== Array)
                                object.string_value = $util.newBuffer(object.string_value);
                        }
                        object.aggregate_value = "";
                    }
                    if (message.name && message.name.length) {
                        object.name = [];
                        for (var j = 0; j < message.name.length; ++j)
                            object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                    }
                    if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                        object.identifier_value = message.identifier_value;
                    if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                        if (typeof message.positive_int_value === "number")
                            object.positive_int_value = options.longs === String ? String(message.positive_int_value) : message.positive_int_value;
                        else
                            object.positive_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.positive_int_value) : options.longs === Number ? new $util.LongBits(message.positive_int_value.low >>> 0, message.positive_int_value.high >>> 0).toNumber(true) : message.positive_int_value;
                    if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                        if (typeof message.negative_int_value === "number")
                            object.negative_int_value = options.longs === String ? String(message.negative_int_value) : message.negative_int_value;
                        else
                            object.negative_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.negative_int_value) : options.longs === Number ? new $util.LongBits(message.negative_int_value.low >>> 0, message.negative_int_value.high >>> 0).toNumber() : message.negative_int_value;
                    if (message.double_value != null && message.hasOwnProperty("double_value"))
                        object.double_value = options.json && !isFinite(message.double_value) ? String(message.double_value) : message.double_value;
                    if (message.string_value != null && message.hasOwnProperty("string_value"))
                        object.string_value = options.bytes === String ? $util.base64.encode(message.string_value, 0, message.string_value.length) : options.bytes === Array ? Array.prototype.slice.call(message.string_value) : message.string_value;
                    if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                        object.aggregate_value = message.aggregate_value;
                    return object;
                };
    
                /**
                 * Converts this UninterpretedOption to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UninterpretedOption.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                UninterpretedOption.NamePart = (function() {
    
                    /**
                     * Properties of a NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @interface INamePart
                     * @property {string} name_part NamePart name_part
                     * @property {boolean} is_extension NamePart is_extension
                     */
    
                    /**
                     * Constructs a new NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @classdesc Represents a NamePart.
                     * @implements INamePart
                     * @constructor
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     */
                    function NamePart(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NamePart name_part.
                     * @member {string} name_part
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.name_part = "";
    
                    /**
                     * NamePart is_extension.
                     * @member {boolean} is_extension
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.is_extension = false;
    
                    /**
                     * Creates a new NamePart instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                     */
                    NamePart.create = function create(properties) {
                        return new NamePart(properties);
                    };
    
                    /**
                     * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name_part);
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_extension);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name_part = reader.string();
                                break;
                            case 2:
                                message.is_extension = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("name_part"))
                            throw $util.ProtocolError("missing required 'name_part'", { instance: message });
                        if (!message.hasOwnProperty("is_extension"))
                            throw $util.ProtocolError("missing required 'is_extension'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NamePart message.
                     * @function verify
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NamePart.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.name_part))
                            return "name_part: string expected";
                        if (typeof message.is_extension !== "boolean")
                            return "is_extension: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                            return object;
                        var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        if (object.name_part != null)
                            message.name_part = String(object.name_part);
                        if (object.is_extension != null)
                            message.is_extension = Boolean(object.is_extension);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NamePart.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.name_part = "";
                            object.is_extension = false;
                        }
                        if (message.name_part != null && message.hasOwnProperty("name_part"))
                            object.name_part = message.name_part;
                        if (message.is_extension != null && message.hasOwnProperty("is_extension"))
                            object.is_extension = message.is_extension;
                        return object;
                    };
    
                    /**
                     * Converts this NamePart to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NamePart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return NamePart;
                })();
    
                return UninterpretedOption;
            })();
    
            protobuf.SourceCodeInfo = (function() {
    
                /**
                 * Properties of a SourceCodeInfo.
                 * @memberof google.protobuf
                 * @interface ISourceCodeInfo
                 * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
                 */
    
                /**
                 * Constructs a new SourceCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a SourceCodeInfo.
                 * @implements ISourceCodeInfo
                 * @constructor
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 */
                function SourceCodeInfo(properties) {
                    this.location = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SourceCodeInfo location.
                 * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 */
                SourceCodeInfo.prototype.location = $util.emptyArray;
    
                /**
                 * Creates a new SourceCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
                 */
                SourceCodeInfo.create = function create(properties) {
                    return new SourceCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.location != null && message.location.length)
                        for (var i = 0; i < message.location.length; ++i)
                            $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.location && message.location.length))
                                message.location = [];
                            message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SourceCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SourceCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.location != null && message.hasOwnProperty("location")) {
                        if (!Array.isArray(message.location))
                            return "location: array expected";
                        for (var i = 0; i < message.location.length; ++i) {
                            var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                            if (error)
                                return "location." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo();
                    if (object.location) {
                        if (!Array.isArray(object.location))
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                        message.location = [];
                        for (var i = 0; i < object.location.length; ++i) {
                            if (typeof object.location[i] !== "object")
                                throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                            message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SourceCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.location = [];
                    if (message.location && message.location.length) {
                        object.location = [];
                        for (var j = 0; j < message.location.length; ++j)
                            object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this SourceCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SourceCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                SourceCodeInfo.Location = (function() {
    
                    /**
                     * Properties of a Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @interface ILocation
                     * @property {Array.<number>|null} [path] Location path
                     * @property {Array.<number>|null} [span] Location span
                     */
    
                    /**
                     * Constructs a new Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @classdesc Represents a Location.
                     * @implements ILocation
                     * @constructor
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     */
                    function Location(properties) {
                        this.path = [];
                        this.span = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Location path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.path = $util.emptyArray;
    
                    /**
                     * Location span.
                     * @member {Array.<number>} span
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.span = $util.emptyArray;
    
                    /**
                     * Creates a new Location instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                     */
                    Location.create = function create(properties) {
                        return new Location(properties);
                    };
    
                    /**
                     * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.span != null && message.span.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.span.length; ++i)
                                writer.int32(message.span[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            case 2:
                                if (!(message.span && message.span.length))
                                    message.span = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.span.push(reader.int32());
                                } else
                                    message.span.push(reader.int32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Location message.
                     * @function verify
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Location.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.span != null && message.hasOwnProperty("span")) {
                            if (!Array.isArray(message.span))
                                return "span: array expected";
                            for (var i = 0; i < message.span.length; ++i)
                                if (!$util.isInteger(message.span[i]))
                                    return "span: integer[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                            return object;
                        var message = new $root.google.protobuf.SourceCodeInfo.Location();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.span) {
                            if (!Array.isArray(object.span))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                            message.span = [];
                            for (var i = 0; i < object.span.length; ++i)
                                message.span[i] = object.span[i] | 0;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.Location} message Location
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.path = [];
                            object.span = [];
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.span && message.span.length) {
                            object.span = [];
                            for (var j = 0; j < message.span.length; ++j)
                                object.span[j] = message.span[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this Location to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Location.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Location;
                })();
    
                return SourceCodeInfo;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
