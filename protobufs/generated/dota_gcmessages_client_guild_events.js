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
     * EGuildEventAuditAction enum.
     * @exports EGuildEventAuditAction
     * @enum {number}
     * @property {number} k_EGuildEventAuditAction_Invalid=0 k_EGuildEventAuditAction_Invalid value
     * @property {number} k_EGuildEventAuditAction_DevGrant=1 k_EGuildEventAuditAction_DevGrant value
     * @property {number} k_EGuildEventAuditAction_CompleteContract=2 k_EGuildEventAuditAction_CompleteContract value
     * @property {number} k_EGuildEventAuditAction_CompleteChallenge=3 k_EGuildEventAuditAction_CompleteChallenge value
     * @property {number} k_EGuildEventAuditAction_CompleteMatch_Winner=4 k_EGuildEventAuditAction_CompleteMatch_Winner value
     * @property {number} k_EGuildEventAuditAction_ChallengeProgress=5 k_EGuildEventAuditAction_ChallengeProgress value
     * @property {number} k_EGuildEventAuditAction_CompleteMatch_Loser=6 k_EGuildEventAuditAction_CompleteMatch_Loser value
     */
    $root.EGuildEventAuditAction = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EGuildEventAuditAction_Invalid"] = 0;
        values[valuesById[1] = "k_EGuildEventAuditAction_DevGrant"] = 1;
        values[valuesById[2] = "k_EGuildEventAuditAction_CompleteContract"] = 2;
        values[valuesById[3] = "k_EGuildEventAuditAction_CompleteChallenge"] = 3;
        values[valuesById[4] = "k_EGuildEventAuditAction_CompleteMatch_Winner"] = 4;
        values[valuesById[5] = "k_EGuildEventAuditAction_ChallengeProgress"] = 5;
        values[valuesById[6] = "k_EGuildEventAuditAction_CompleteMatch_Loser"] = 6;
        return values;
    })();
    
    $root.CMsgGuildContract = (function() {
    
        /**
         * Properties of a CMsgGuildContract.
         * @exports ICMsgGuildContract
         * @interface ICMsgGuildContract
         * @property {number|Long|null} [contract_id] CMsgGuildContract contract_id
         * @property {number|null} [challenge_instance_id] CMsgGuildContract challenge_instance_id
         * @property {number|null} [challenge_parameter] CMsgGuildContract challenge_parameter
         * @property {number|null} [challenge_timestamp] CMsgGuildContract challenge_timestamp
         * @property {number|null} [assigned_account_id] CMsgGuildContract assigned_account_id
         * @property {number|null} [contract_flags] CMsgGuildContract contract_flags
         */
    
        /**
         * Constructs a new CMsgGuildContract.
         * @exports CMsgGuildContract
         * @classdesc Represents a CMsgGuildContract.
         * @implements ICMsgGuildContract
         * @constructor
         * @param {ICMsgGuildContract=} [properties] Properties to set
         */
        function CMsgGuildContract(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGuildContract contract_id.
         * @member {number|Long} contract_id
         * @memberof CMsgGuildContract
         * @instance
         */
        CMsgGuildContract.prototype.contract_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgGuildContract challenge_instance_id.
         * @member {number} challenge_instance_id
         * @memberof CMsgGuildContract
         * @instance
         */
        CMsgGuildContract.prototype.challenge_instance_id = 0;
    
        /**
         * CMsgGuildContract challenge_parameter.
         * @member {number} challenge_parameter
         * @memberof CMsgGuildContract
         * @instance
         */
        CMsgGuildContract.prototype.challenge_parameter = 0;
    
        /**
         * CMsgGuildContract challenge_timestamp.
         * @member {number} challenge_timestamp
         * @memberof CMsgGuildContract
         * @instance
         */
        CMsgGuildContract.prototype.challenge_timestamp = 0;
    
        /**
         * CMsgGuildContract assigned_account_id.
         * @member {number} assigned_account_id
         * @memberof CMsgGuildContract
         * @instance
         */
        CMsgGuildContract.prototype.assigned_account_id = 0;
    
        /**
         * CMsgGuildContract contract_flags.
         * @member {number} contract_flags
         * @memberof CMsgGuildContract
         * @instance
         */
        CMsgGuildContract.prototype.contract_flags = 0;
    
        /**
         * Creates a new CMsgGuildContract instance using the specified properties.
         * @function create
         * @memberof CMsgGuildContract
         * @static
         * @param {ICMsgGuildContract=} [properties] Properties to set
         * @returns {CMsgGuildContract} CMsgGuildContract instance
         */
        CMsgGuildContract.create = function create(properties) {
            return new CMsgGuildContract(properties);
        };
    
        /**
         * Encodes the specified CMsgGuildContract message. Does not implicitly {@link CMsgGuildContract.verify|verify} messages.
         * @function encode
         * @memberof CMsgGuildContract
         * @static
         * @param {ICMsgGuildContract} message CMsgGuildContract message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildContract.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.contract_id != null && Object.hasOwnProperty.call(message, "contract_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.contract_id);
            if (message.challenge_instance_id != null && Object.hasOwnProperty.call(message, "challenge_instance_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.challenge_instance_id);
            if (message.challenge_parameter != null && Object.hasOwnProperty.call(message, "challenge_parameter"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.challenge_parameter);
            if (message.challenge_timestamp != null && Object.hasOwnProperty.call(message, "challenge_timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.challenge_timestamp);
            if (message.assigned_account_id != null && Object.hasOwnProperty.call(message, "assigned_account_id"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.assigned_account_id);
            if (message.contract_flags != null && Object.hasOwnProperty.call(message, "contract_flags"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.contract_flags);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGuildContract message, length delimited. Does not implicitly {@link CMsgGuildContract.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGuildContract
         * @static
         * @param {ICMsgGuildContract} message CMsgGuildContract message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildContract.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGuildContract message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGuildContract
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGuildContract} CMsgGuildContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildContract.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGuildContract();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.contract_id = reader.uint64();
                    break;
                case 2:
                    message.challenge_instance_id = reader.uint32();
                    break;
                case 3:
                    message.challenge_parameter = reader.uint32();
                    break;
                case 4:
                    message.challenge_timestamp = reader.uint32();
                    break;
                case 5:
                    message.assigned_account_id = reader.uint32();
                    break;
                case 6:
                    message.contract_flags = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGuildContract message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGuildContract
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGuildContract} CMsgGuildContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildContract.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGuildContract message.
         * @function verify
         * @memberof CMsgGuildContract
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGuildContract.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.contract_id != null && message.hasOwnProperty("contract_id"))
                if (!$util.isInteger(message.contract_id) && !(message.contract_id && $util.isInteger(message.contract_id.low) && $util.isInteger(message.contract_id.high)))
                    return "contract_id: integer|Long expected";
            if (message.challenge_instance_id != null && message.hasOwnProperty("challenge_instance_id"))
                if (!$util.isInteger(message.challenge_instance_id))
                    return "challenge_instance_id: integer expected";
            if (message.challenge_parameter != null && message.hasOwnProperty("challenge_parameter"))
                if (!$util.isInteger(message.challenge_parameter))
                    return "challenge_parameter: integer expected";
            if (message.challenge_timestamp != null && message.hasOwnProperty("challenge_timestamp"))
                if (!$util.isInteger(message.challenge_timestamp))
                    return "challenge_timestamp: integer expected";
            if (message.assigned_account_id != null && message.hasOwnProperty("assigned_account_id"))
                if (!$util.isInteger(message.assigned_account_id))
                    return "assigned_account_id: integer expected";
            if (message.contract_flags != null && message.hasOwnProperty("contract_flags"))
                if (!$util.isInteger(message.contract_flags))
                    return "contract_flags: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgGuildContract message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGuildContract
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGuildContract} CMsgGuildContract
         */
        CMsgGuildContract.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGuildContract)
                return object;
            var message = new $root.CMsgGuildContract();
            if (object.contract_id != null)
                if ($util.Long)
                    (message.contract_id = $util.Long.fromValue(object.contract_id)).unsigned = true;
                else if (typeof object.contract_id === "string")
                    message.contract_id = parseInt(object.contract_id, 10);
                else if (typeof object.contract_id === "number")
                    message.contract_id = object.contract_id;
                else if (typeof object.contract_id === "object")
                    message.contract_id = new $util.LongBits(object.contract_id.low >>> 0, object.contract_id.high >>> 0).toNumber(true);
            if (object.challenge_instance_id != null)
                message.challenge_instance_id = object.challenge_instance_id >>> 0;
            if (object.challenge_parameter != null)
                message.challenge_parameter = object.challenge_parameter >>> 0;
            if (object.challenge_timestamp != null)
                message.challenge_timestamp = object.challenge_timestamp >>> 0;
            if (object.assigned_account_id != null)
                message.assigned_account_id = object.assigned_account_id >>> 0;
            if (object.contract_flags != null)
                message.contract_flags = object.contract_flags >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGuildContract message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGuildContract
         * @static
         * @param {CMsgGuildContract} message CMsgGuildContract
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGuildContract.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.contract_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.contract_id = options.longs === String ? "0" : 0;
                object.challenge_instance_id = 0;
                object.challenge_parameter = 0;
                object.challenge_timestamp = 0;
                object.assigned_account_id = 0;
                object.contract_flags = 0;
            }
            if (message.contract_id != null && message.hasOwnProperty("contract_id"))
                if (typeof message.contract_id === "number")
                    object.contract_id = options.longs === String ? String(message.contract_id) : message.contract_id;
                else
                    object.contract_id = options.longs === String ? $util.Long.prototype.toString.call(message.contract_id) : options.longs === Number ? new $util.LongBits(message.contract_id.low >>> 0, message.contract_id.high >>> 0).toNumber(true) : message.contract_id;
            if (message.challenge_instance_id != null && message.hasOwnProperty("challenge_instance_id"))
                object.challenge_instance_id = message.challenge_instance_id;
            if (message.challenge_parameter != null && message.hasOwnProperty("challenge_parameter"))
                object.challenge_parameter = message.challenge_parameter;
            if (message.challenge_timestamp != null && message.hasOwnProperty("challenge_timestamp"))
                object.challenge_timestamp = message.challenge_timestamp;
            if (message.assigned_account_id != null && message.hasOwnProperty("assigned_account_id"))
                object.assigned_account_id = message.assigned_account_id;
            if (message.contract_flags != null && message.hasOwnProperty("contract_flags"))
                object.contract_flags = message.contract_flags;
            return object;
        };
    
        /**
         * Converts this CMsgGuildContract to JSON.
         * @function toJSON
         * @memberof CMsgGuildContract
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGuildContract.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGuildContract;
    })();
    
    $root.CMsgGuildContractSlot = (function() {
    
        /**
         * Properties of a CMsgGuildContractSlot.
         * @exports ICMsgGuildContractSlot
         * @interface ICMsgGuildContractSlot
         * @property {ICMsgGuildContract|null} [contract] CMsgGuildContractSlot contract
         */
    
        /**
         * Constructs a new CMsgGuildContractSlot.
         * @exports CMsgGuildContractSlot
         * @classdesc Represents a CMsgGuildContractSlot.
         * @implements ICMsgGuildContractSlot
         * @constructor
         * @param {ICMsgGuildContractSlot=} [properties] Properties to set
         */
        function CMsgGuildContractSlot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGuildContractSlot contract.
         * @member {ICMsgGuildContract|null|undefined} contract
         * @memberof CMsgGuildContractSlot
         * @instance
         */
        CMsgGuildContractSlot.prototype.contract = null;
    
        /**
         * Creates a new CMsgGuildContractSlot instance using the specified properties.
         * @function create
         * @memberof CMsgGuildContractSlot
         * @static
         * @param {ICMsgGuildContractSlot=} [properties] Properties to set
         * @returns {CMsgGuildContractSlot} CMsgGuildContractSlot instance
         */
        CMsgGuildContractSlot.create = function create(properties) {
            return new CMsgGuildContractSlot(properties);
        };
    
        /**
         * Encodes the specified CMsgGuildContractSlot message. Does not implicitly {@link CMsgGuildContractSlot.verify|verify} messages.
         * @function encode
         * @memberof CMsgGuildContractSlot
         * @static
         * @param {ICMsgGuildContractSlot} message CMsgGuildContractSlot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildContractSlot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.contract != null && Object.hasOwnProperty.call(message, "contract"))
                $root.CMsgGuildContract.encode(message.contract, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGuildContractSlot message, length delimited. Does not implicitly {@link CMsgGuildContractSlot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGuildContractSlot
         * @static
         * @param {ICMsgGuildContractSlot} message CMsgGuildContractSlot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildContractSlot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGuildContractSlot message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGuildContractSlot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGuildContractSlot} CMsgGuildContractSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildContractSlot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGuildContractSlot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.contract = $root.CMsgGuildContract.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGuildContractSlot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGuildContractSlot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGuildContractSlot} CMsgGuildContractSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildContractSlot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGuildContractSlot message.
         * @function verify
         * @memberof CMsgGuildContractSlot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGuildContractSlot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.contract != null && message.hasOwnProperty("contract")) {
                var error = $root.CMsgGuildContract.verify(message.contract);
                if (error)
                    return "contract." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgGuildContractSlot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGuildContractSlot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGuildContractSlot} CMsgGuildContractSlot
         */
        CMsgGuildContractSlot.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGuildContractSlot)
                return object;
            var message = new $root.CMsgGuildContractSlot();
            if (object.contract != null) {
                if (typeof object.contract !== "object")
                    throw TypeError(".CMsgGuildContractSlot.contract: object expected");
                message.contract = $root.CMsgGuildContract.fromObject(object.contract);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGuildContractSlot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGuildContractSlot
         * @static
         * @param {CMsgGuildContractSlot} message CMsgGuildContractSlot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGuildContractSlot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.contract = null;
            if (message.contract != null && message.hasOwnProperty("contract"))
                object.contract = $root.CMsgGuildContract.toObject(message.contract, options);
            return object;
        };
    
        /**
         * Converts this CMsgGuildContractSlot to JSON.
         * @function toJSON
         * @memberof CMsgGuildContractSlot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGuildContractSlot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGuildContractSlot;
    })();
    
    $root.CMsgAccountGuildEventData = (function() {
    
        /**
         * Properties of a CMsgAccountGuildEventData.
         * @exports ICMsgAccountGuildEventData
         * @interface ICMsgAccountGuildEventData
         * @property {number|null} [guild_points] CMsgAccountGuildEventData guild_points
         * @property {number|null} [contracts_refreshed_timestamp] CMsgAccountGuildEventData contracts_refreshed_timestamp
         * @property {Array.<ICMsgGuildContractSlot>|null} [contract_slots] CMsgAccountGuildEventData contract_slots
         * @property {number|null} [completed_challenge_count] CMsgAccountGuildEventData completed_challenge_count
         * @property {number|null} [challenges_refresh_timestamp] CMsgAccountGuildEventData challenges_refresh_timestamp
         */
    
        /**
         * Constructs a new CMsgAccountGuildEventData.
         * @exports CMsgAccountGuildEventData
         * @classdesc Represents a CMsgAccountGuildEventData.
         * @implements ICMsgAccountGuildEventData
         * @constructor
         * @param {ICMsgAccountGuildEventData=} [properties] Properties to set
         */
        function CMsgAccountGuildEventData(properties) {
            this.contract_slots = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgAccountGuildEventData guild_points.
         * @member {number} guild_points
         * @memberof CMsgAccountGuildEventData
         * @instance
         */
        CMsgAccountGuildEventData.prototype.guild_points = 0;
    
        /**
         * CMsgAccountGuildEventData contracts_refreshed_timestamp.
         * @member {number} contracts_refreshed_timestamp
         * @memberof CMsgAccountGuildEventData
         * @instance
         */
        CMsgAccountGuildEventData.prototype.contracts_refreshed_timestamp = 0;
    
        /**
         * CMsgAccountGuildEventData contract_slots.
         * @member {Array.<ICMsgGuildContractSlot>} contract_slots
         * @memberof CMsgAccountGuildEventData
         * @instance
         */
        CMsgAccountGuildEventData.prototype.contract_slots = $util.emptyArray;
    
        /**
         * CMsgAccountGuildEventData completed_challenge_count.
         * @member {number} completed_challenge_count
         * @memberof CMsgAccountGuildEventData
         * @instance
         */
        CMsgAccountGuildEventData.prototype.completed_challenge_count = 0;
    
        /**
         * CMsgAccountGuildEventData challenges_refresh_timestamp.
         * @member {number} challenges_refresh_timestamp
         * @memberof CMsgAccountGuildEventData
         * @instance
         */
        CMsgAccountGuildEventData.prototype.challenges_refresh_timestamp = 0;
    
        /**
         * Creates a new CMsgAccountGuildEventData instance using the specified properties.
         * @function create
         * @memberof CMsgAccountGuildEventData
         * @static
         * @param {ICMsgAccountGuildEventData=} [properties] Properties to set
         * @returns {CMsgAccountGuildEventData} CMsgAccountGuildEventData instance
         */
        CMsgAccountGuildEventData.create = function create(properties) {
            return new CMsgAccountGuildEventData(properties);
        };
    
        /**
         * Encodes the specified CMsgAccountGuildEventData message. Does not implicitly {@link CMsgAccountGuildEventData.verify|verify} messages.
         * @function encode
         * @memberof CMsgAccountGuildEventData
         * @static
         * @param {ICMsgAccountGuildEventData} message CMsgAccountGuildEventData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAccountGuildEventData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_points != null && Object.hasOwnProperty.call(message, "guild_points"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_points);
            if (message.contracts_refreshed_timestamp != null && Object.hasOwnProperty.call(message, "contracts_refreshed_timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.contracts_refreshed_timestamp);
            if (message.contract_slots != null && message.contract_slots.length)
                for (var i = 0; i < message.contract_slots.length; ++i)
                    $root.CMsgGuildContractSlot.encode(message.contract_slots[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.completed_challenge_count != null && Object.hasOwnProperty.call(message, "completed_challenge_count"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.completed_challenge_count);
            if (message.challenges_refresh_timestamp != null && Object.hasOwnProperty.call(message, "challenges_refresh_timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.challenges_refresh_timestamp);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgAccountGuildEventData message, length delimited. Does not implicitly {@link CMsgAccountGuildEventData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgAccountGuildEventData
         * @static
         * @param {ICMsgAccountGuildEventData} message CMsgAccountGuildEventData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAccountGuildEventData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgAccountGuildEventData message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgAccountGuildEventData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgAccountGuildEventData} CMsgAccountGuildEventData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAccountGuildEventData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgAccountGuildEventData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_points = reader.uint32();
                    break;
                case 2:
                    message.contracts_refreshed_timestamp = reader.uint32();
                    break;
                case 3:
                    if (!(message.contract_slots && message.contract_slots.length))
                        message.contract_slots = [];
                    message.contract_slots.push($root.CMsgGuildContractSlot.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.completed_challenge_count = reader.uint32();
                    break;
                case 5:
                    message.challenges_refresh_timestamp = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgAccountGuildEventData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgAccountGuildEventData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgAccountGuildEventData} CMsgAccountGuildEventData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAccountGuildEventData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgAccountGuildEventData message.
         * @function verify
         * @memberof CMsgAccountGuildEventData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgAccountGuildEventData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_points != null && message.hasOwnProperty("guild_points"))
                if (!$util.isInteger(message.guild_points))
                    return "guild_points: integer expected";
            if (message.contracts_refreshed_timestamp != null && message.hasOwnProperty("contracts_refreshed_timestamp"))
                if (!$util.isInteger(message.contracts_refreshed_timestamp))
                    return "contracts_refreshed_timestamp: integer expected";
            if (message.contract_slots != null && message.hasOwnProperty("contract_slots")) {
                if (!Array.isArray(message.contract_slots))
                    return "contract_slots: array expected";
                for (var i = 0; i < message.contract_slots.length; ++i) {
                    var error = $root.CMsgGuildContractSlot.verify(message.contract_slots[i]);
                    if (error)
                        return "contract_slots." + error;
                }
            }
            if (message.completed_challenge_count != null && message.hasOwnProperty("completed_challenge_count"))
                if (!$util.isInteger(message.completed_challenge_count))
                    return "completed_challenge_count: integer expected";
            if (message.challenges_refresh_timestamp != null && message.hasOwnProperty("challenges_refresh_timestamp"))
                if (!$util.isInteger(message.challenges_refresh_timestamp))
                    return "challenges_refresh_timestamp: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgAccountGuildEventData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgAccountGuildEventData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgAccountGuildEventData} CMsgAccountGuildEventData
         */
        CMsgAccountGuildEventData.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgAccountGuildEventData)
                return object;
            var message = new $root.CMsgAccountGuildEventData();
            if (object.guild_points != null)
                message.guild_points = object.guild_points >>> 0;
            if (object.contracts_refreshed_timestamp != null)
                message.contracts_refreshed_timestamp = object.contracts_refreshed_timestamp >>> 0;
            if (object.contract_slots) {
                if (!Array.isArray(object.contract_slots))
                    throw TypeError(".CMsgAccountGuildEventData.contract_slots: array expected");
                message.contract_slots = [];
                for (var i = 0; i < object.contract_slots.length; ++i) {
                    if (typeof object.contract_slots[i] !== "object")
                        throw TypeError(".CMsgAccountGuildEventData.contract_slots: object expected");
                    message.contract_slots[i] = $root.CMsgGuildContractSlot.fromObject(object.contract_slots[i]);
                }
            }
            if (object.completed_challenge_count != null)
                message.completed_challenge_count = object.completed_challenge_count >>> 0;
            if (object.challenges_refresh_timestamp != null)
                message.challenges_refresh_timestamp = object.challenges_refresh_timestamp >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgAccountGuildEventData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgAccountGuildEventData
         * @static
         * @param {CMsgAccountGuildEventData} message CMsgAccountGuildEventData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgAccountGuildEventData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.contract_slots = [];
            if (options.defaults) {
                object.guild_points = 0;
                object.contracts_refreshed_timestamp = 0;
                object.completed_challenge_count = 0;
                object.challenges_refresh_timestamp = 0;
            }
            if (message.guild_points != null && message.hasOwnProperty("guild_points"))
                object.guild_points = message.guild_points;
            if (message.contracts_refreshed_timestamp != null && message.hasOwnProperty("contracts_refreshed_timestamp"))
                object.contracts_refreshed_timestamp = message.contracts_refreshed_timestamp;
            if (message.contract_slots && message.contract_slots.length) {
                object.contract_slots = [];
                for (var j = 0; j < message.contract_slots.length; ++j)
                    object.contract_slots[j] = $root.CMsgGuildContractSlot.toObject(message.contract_slots[j], options);
            }
            if (message.completed_challenge_count != null && message.hasOwnProperty("completed_challenge_count"))
                object.completed_challenge_count = message.completed_challenge_count;
            if (message.challenges_refresh_timestamp != null && message.hasOwnProperty("challenges_refresh_timestamp"))
                object.challenges_refresh_timestamp = message.challenges_refresh_timestamp;
            return object;
        };
    
        /**
         * Converts this CMsgAccountGuildEventData to JSON.
         * @function toJSON
         * @memberof CMsgAccountGuildEventData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgAccountGuildEventData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgAccountGuildEventData;
    })();
    
    $root.CMsgGuildActiveContracts = (function() {
    
        /**
         * Properties of a CMsgGuildActiveContracts.
         * @exports ICMsgGuildActiveContracts
         * @interface ICMsgGuildActiveContracts
         * @property {number|null} [contracts_refreshed_timestamp] CMsgGuildActiveContracts contracts_refreshed_timestamp
         * @property {Array.<ICMsgGuildContract>|null} [contracts] CMsgGuildActiveContracts contracts
         */
    
        /**
         * Constructs a new CMsgGuildActiveContracts.
         * @exports CMsgGuildActiveContracts
         * @classdesc Represents a CMsgGuildActiveContracts.
         * @implements ICMsgGuildActiveContracts
         * @constructor
         * @param {ICMsgGuildActiveContracts=} [properties] Properties to set
         */
        function CMsgGuildActiveContracts(properties) {
            this.contracts = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGuildActiveContracts contracts_refreshed_timestamp.
         * @member {number} contracts_refreshed_timestamp
         * @memberof CMsgGuildActiveContracts
         * @instance
         */
        CMsgGuildActiveContracts.prototype.contracts_refreshed_timestamp = 0;
    
        /**
         * CMsgGuildActiveContracts contracts.
         * @member {Array.<ICMsgGuildContract>} contracts
         * @memberof CMsgGuildActiveContracts
         * @instance
         */
        CMsgGuildActiveContracts.prototype.contracts = $util.emptyArray;
    
        /**
         * Creates a new CMsgGuildActiveContracts instance using the specified properties.
         * @function create
         * @memberof CMsgGuildActiveContracts
         * @static
         * @param {ICMsgGuildActiveContracts=} [properties] Properties to set
         * @returns {CMsgGuildActiveContracts} CMsgGuildActiveContracts instance
         */
        CMsgGuildActiveContracts.create = function create(properties) {
            return new CMsgGuildActiveContracts(properties);
        };
    
        /**
         * Encodes the specified CMsgGuildActiveContracts message. Does not implicitly {@link CMsgGuildActiveContracts.verify|verify} messages.
         * @function encode
         * @memberof CMsgGuildActiveContracts
         * @static
         * @param {ICMsgGuildActiveContracts} message CMsgGuildActiveContracts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildActiveContracts.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.contracts_refreshed_timestamp != null && Object.hasOwnProperty.call(message, "contracts_refreshed_timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.contracts_refreshed_timestamp);
            if (message.contracts != null && message.contracts.length)
                for (var i = 0; i < message.contracts.length; ++i)
                    $root.CMsgGuildContract.encode(message.contracts[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGuildActiveContracts message, length delimited. Does not implicitly {@link CMsgGuildActiveContracts.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGuildActiveContracts
         * @static
         * @param {ICMsgGuildActiveContracts} message CMsgGuildActiveContracts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildActiveContracts.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGuildActiveContracts message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGuildActiveContracts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGuildActiveContracts} CMsgGuildActiveContracts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildActiveContracts.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGuildActiveContracts();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.contracts_refreshed_timestamp = reader.uint32();
                    break;
                case 2:
                    if (!(message.contracts && message.contracts.length))
                        message.contracts = [];
                    message.contracts.push($root.CMsgGuildContract.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGuildActiveContracts message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGuildActiveContracts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGuildActiveContracts} CMsgGuildActiveContracts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildActiveContracts.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGuildActiveContracts message.
         * @function verify
         * @memberof CMsgGuildActiveContracts
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGuildActiveContracts.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.contracts_refreshed_timestamp != null && message.hasOwnProperty("contracts_refreshed_timestamp"))
                if (!$util.isInteger(message.contracts_refreshed_timestamp))
                    return "contracts_refreshed_timestamp: integer expected";
            if (message.contracts != null && message.hasOwnProperty("contracts")) {
                if (!Array.isArray(message.contracts))
                    return "contracts: array expected";
                for (var i = 0; i < message.contracts.length; ++i) {
                    var error = $root.CMsgGuildContract.verify(message.contracts[i]);
                    if (error)
                        return "contracts." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgGuildActiveContracts message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGuildActiveContracts
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGuildActiveContracts} CMsgGuildActiveContracts
         */
        CMsgGuildActiveContracts.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGuildActiveContracts)
                return object;
            var message = new $root.CMsgGuildActiveContracts();
            if (object.contracts_refreshed_timestamp != null)
                message.contracts_refreshed_timestamp = object.contracts_refreshed_timestamp >>> 0;
            if (object.contracts) {
                if (!Array.isArray(object.contracts))
                    throw TypeError(".CMsgGuildActiveContracts.contracts: array expected");
                message.contracts = [];
                for (var i = 0; i < object.contracts.length; ++i) {
                    if (typeof object.contracts[i] !== "object")
                        throw TypeError(".CMsgGuildActiveContracts.contracts: object expected");
                    message.contracts[i] = $root.CMsgGuildContract.fromObject(object.contracts[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGuildActiveContracts message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGuildActiveContracts
         * @static
         * @param {CMsgGuildActiveContracts} message CMsgGuildActiveContracts
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGuildActiveContracts.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.contracts = [];
            if (options.defaults)
                object.contracts_refreshed_timestamp = 0;
            if (message.contracts_refreshed_timestamp != null && message.hasOwnProperty("contracts_refreshed_timestamp"))
                object.contracts_refreshed_timestamp = message.contracts_refreshed_timestamp;
            if (message.contracts && message.contracts.length) {
                object.contracts = [];
                for (var j = 0; j < message.contracts.length; ++j)
                    object.contracts[j] = $root.CMsgGuildContract.toObject(message.contracts[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgGuildActiveContracts to JSON.
         * @function toJSON
         * @memberof CMsgGuildActiveContracts
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGuildActiveContracts.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGuildActiveContracts;
    })();
    
    $root.CMsgGuildChallenge = (function() {
    
        /**
         * Properties of a CMsgGuildChallenge.
         * @exports ICMsgGuildChallenge
         * @interface ICMsgGuildChallenge
         * @property {number|null} [challenge_instance_id] CMsgGuildChallenge challenge_instance_id
         * @property {number|null} [challenge_parameter] CMsgGuildChallenge challenge_parameter
         * @property {number|null} [challenge_timestamp] CMsgGuildChallenge challenge_timestamp
         * @property {number|null} [challenge_progress] CMsgGuildChallenge challenge_progress
         * @property {number|null} [challenge_flags] CMsgGuildChallenge challenge_flags
         */
    
        /**
         * Constructs a new CMsgGuildChallenge.
         * @exports CMsgGuildChallenge
         * @classdesc Represents a CMsgGuildChallenge.
         * @implements ICMsgGuildChallenge
         * @constructor
         * @param {ICMsgGuildChallenge=} [properties] Properties to set
         */
        function CMsgGuildChallenge(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGuildChallenge challenge_instance_id.
         * @member {number} challenge_instance_id
         * @memberof CMsgGuildChallenge
         * @instance
         */
        CMsgGuildChallenge.prototype.challenge_instance_id = 0;
    
        /**
         * CMsgGuildChallenge challenge_parameter.
         * @member {number} challenge_parameter
         * @memberof CMsgGuildChallenge
         * @instance
         */
        CMsgGuildChallenge.prototype.challenge_parameter = 0;
    
        /**
         * CMsgGuildChallenge challenge_timestamp.
         * @member {number} challenge_timestamp
         * @memberof CMsgGuildChallenge
         * @instance
         */
        CMsgGuildChallenge.prototype.challenge_timestamp = 0;
    
        /**
         * CMsgGuildChallenge challenge_progress.
         * @member {number} challenge_progress
         * @memberof CMsgGuildChallenge
         * @instance
         */
        CMsgGuildChallenge.prototype.challenge_progress = 0;
    
        /**
         * CMsgGuildChallenge challenge_flags.
         * @member {number} challenge_flags
         * @memberof CMsgGuildChallenge
         * @instance
         */
        CMsgGuildChallenge.prototype.challenge_flags = 0;
    
        /**
         * Creates a new CMsgGuildChallenge instance using the specified properties.
         * @function create
         * @memberof CMsgGuildChallenge
         * @static
         * @param {ICMsgGuildChallenge=} [properties] Properties to set
         * @returns {CMsgGuildChallenge} CMsgGuildChallenge instance
         */
        CMsgGuildChallenge.create = function create(properties) {
            return new CMsgGuildChallenge(properties);
        };
    
        /**
         * Encodes the specified CMsgGuildChallenge message. Does not implicitly {@link CMsgGuildChallenge.verify|verify} messages.
         * @function encode
         * @memberof CMsgGuildChallenge
         * @static
         * @param {ICMsgGuildChallenge} message CMsgGuildChallenge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildChallenge.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.challenge_instance_id != null && Object.hasOwnProperty.call(message, "challenge_instance_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.challenge_instance_id);
            if (message.challenge_parameter != null && Object.hasOwnProperty.call(message, "challenge_parameter"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.challenge_parameter);
            if (message.challenge_timestamp != null && Object.hasOwnProperty.call(message, "challenge_timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.challenge_timestamp);
            if (message.challenge_progress != null && Object.hasOwnProperty.call(message, "challenge_progress"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.challenge_progress);
            if (message.challenge_flags != null && Object.hasOwnProperty.call(message, "challenge_flags"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.challenge_flags);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGuildChallenge message, length delimited. Does not implicitly {@link CMsgGuildChallenge.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGuildChallenge
         * @static
         * @param {ICMsgGuildChallenge} message CMsgGuildChallenge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildChallenge.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGuildChallenge message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGuildChallenge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGuildChallenge} CMsgGuildChallenge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildChallenge.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGuildChallenge();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.challenge_instance_id = reader.uint32();
                    break;
                case 2:
                    message.challenge_parameter = reader.uint32();
                    break;
                case 3:
                    message.challenge_timestamp = reader.uint32();
                    break;
                case 4:
                    message.challenge_progress = reader.uint32();
                    break;
                case 5:
                    message.challenge_flags = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGuildChallenge message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGuildChallenge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGuildChallenge} CMsgGuildChallenge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildChallenge.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGuildChallenge message.
         * @function verify
         * @memberof CMsgGuildChallenge
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGuildChallenge.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.challenge_instance_id != null && message.hasOwnProperty("challenge_instance_id"))
                if (!$util.isInteger(message.challenge_instance_id))
                    return "challenge_instance_id: integer expected";
            if (message.challenge_parameter != null && message.hasOwnProperty("challenge_parameter"))
                if (!$util.isInteger(message.challenge_parameter))
                    return "challenge_parameter: integer expected";
            if (message.challenge_timestamp != null && message.hasOwnProperty("challenge_timestamp"))
                if (!$util.isInteger(message.challenge_timestamp))
                    return "challenge_timestamp: integer expected";
            if (message.challenge_progress != null && message.hasOwnProperty("challenge_progress"))
                if (!$util.isInteger(message.challenge_progress))
                    return "challenge_progress: integer expected";
            if (message.challenge_flags != null && message.hasOwnProperty("challenge_flags"))
                if (!$util.isInteger(message.challenge_flags))
                    return "challenge_flags: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgGuildChallenge message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGuildChallenge
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGuildChallenge} CMsgGuildChallenge
         */
        CMsgGuildChallenge.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGuildChallenge)
                return object;
            var message = new $root.CMsgGuildChallenge();
            if (object.challenge_instance_id != null)
                message.challenge_instance_id = object.challenge_instance_id >>> 0;
            if (object.challenge_parameter != null)
                message.challenge_parameter = object.challenge_parameter >>> 0;
            if (object.challenge_timestamp != null)
                message.challenge_timestamp = object.challenge_timestamp >>> 0;
            if (object.challenge_progress != null)
                message.challenge_progress = object.challenge_progress >>> 0;
            if (object.challenge_flags != null)
                message.challenge_flags = object.challenge_flags >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGuildChallenge message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGuildChallenge
         * @static
         * @param {CMsgGuildChallenge} message CMsgGuildChallenge
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGuildChallenge.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.challenge_instance_id = 0;
                object.challenge_parameter = 0;
                object.challenge_timestamp = 0;
                object.challenge_progress = 0;
                object.challenge_flags = 0;
            }
            if (message.challenge_instance_id != null && message.hasOwnProperty("challenge_instance_id"))
                object.challenge_instance_id = message.challenge_instance_id;
            if (message.challenge_parameter != null && message.hasOwnProperty("challenge_parameter"))
                object.challenge_parameter = message.challenge_parameter;
            if (message.challenge_timestamp != null && message.hasOwnProperty("challenge_timestamp"))
                object.challenge_timestamp = message.challenge_timestamp;
            if (message.challenge_progress != null && message.hasOwnProperty("challenge_progress"))
                object.challenge_progress = message.challenge_progress;
            if (message.challenge_flags != null && message.hasOwnProperty("challenge_flags"))
                object.challenge_flags = message.challenge_flags;
            return object;
        };
    
        /**
         * Converts this CMsgGuildChallenge to JSON.
         * @function toJSON
         * @memberof CMsgGuildChallenge
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGuildChallenge.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGuildChallenge;
    })();
    
    $root.CMsgGuildEventMember = (function() {
    
        /**
         * Properties of a CMsgGuildEventMember.
         * @exports ICMsgGuildEventMember
         * @interface ICMsgGuildEventMember
         * @property {number|null} [account_id] CMsgGuildEventMember account_id
         * @property {number|null} [guild_points_earned] CMsgGuildEventMember guild_points_earned
         */
    
        /**
         * Constructs a new CMsgGuildEventMember.
         * @exports CMsgGuildEventMember
         * @classdesc Represents a CMsgGuildEventMember.
         * @implements ICMsgGuildEventMember
         * @constructor
         * @param {ICMsgGuildEventMember=} [properties] Properties to set
         */
        function CMsgGuildEventMember(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGuildEventMember account_id.
         * @member {number} account_id
         * @memberof CMsgGuildEventMember
         * @instance
         */
        CMsgGuildEventMember.prototype.account_id = 0;
    
        /**
         * CMsgGuildEventMember guild_points_earned.
         * @member {number} guild_points_earned
         * @memberof CMsgGuildEventMember
         * @instance
         */
        CMsgGuildEventMember.prototype.guild_points_earned = 0;
    
        /**
         * Creates a new CMsgGuildEventMember instance using the specified properties.
         * @function create
         * @memberof CMsgGuildEventMember
         * @static
         * @param {ICMsgGuildEventMember=} [properties] Properties to set
         * @returns {CMsgGuildEventMember} CMsgGuildEventMember instance
         */
        CMsgGuildEventMember.create = function create(properties) {
            return new CMsgGuildEventMember(properties);
        };
    
        /**
         * Encodes the specified CMsgGuildEventMember message. Does not implicitly {@link CMsgGuildEventMember.verify|verify} messages.
         * @function encode
         * @memberof CMsgGuildEventMember
         * @static
         * @param {ICMsgGuildEventMember} message CMsgGuildEventMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildEventMember.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.account_id);
            if (message.guild_points_earned != null && Object.hasOwnProperty.call(message, "guild_points_earned"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.guild_points_earned);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGuildEventMember message, length delimited. Does not implicitly {@link CMsgGuildEventMember.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGuildEventMember
         * @static
         * @param {ICMsgGuildEventMember} message CMsgGuildEventMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildEventMember.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGuildEventMember message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGuildEventMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGuildEventMember} CMsgGuildEventMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildEventMember.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGuildEventMember();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account_id = reader.uint32();
                    break;
                case 2:
                    message.guild_points_earned = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGuildEventMember message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGuildEventMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGuildEventMember} CMsgGuildEventMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildEventMember.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGuildEventMember message.
         * @function verify
         * @memberof CMsgGuildEventMember
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGuildEventMember.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account_id != null && message.hasOwnProperty("account_id"))
                if (!$util.isInteger(message.account_id))
                    return "account_id: integer expected";
            if (message.guild_points_earned != null && message.hasOwnProperty("guild_points_earned"))
                if (!$util.isInteger(message.guild_points_earned))
                    return "guild_points_earned: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgGuildEventMember message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGuildEventMember
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGuildEventMember} CMsgGuildEventMember
         */
        CMsgGuildEventMember.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGuildEventMember)
                return object;
            var message = new $root.CMsgGuildEventMember();
            if (object.account_id != null)
                message.account_id = object.account_id >>> 0;
            if (object.guild_points_earned != null)
                message.guild_points_earned = object.guild_points_earned >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGuildEventMember message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGuildEventMember
         * @static
         * @param {CMsgGuildEventMember} message CMsgGuildEventMember
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGuildEventMember.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account_id = 0;
                object.guild_points_earned = 0;
            }
            if (message.account_id != null && message.hasOwnProperty("account_id"))
                object.account_id = message.account_id;
            if (message.guild_points_earned != null && message.hasOwnProperty("guild_points_earned"))
                object.guild_points_earned = message.guild_points_earned;
            return object;
        };
    
        /**
         * Converts this CMsgGuildEventMember to JSON.
         * @function toJSON
         * @memberof CMsgGuildEventMember
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGuildEventMember.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGuildEventMember;
    })();
    
    $root.CMsgClientToGCRequestAccountGuildEventData = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestAccountGuildEventData.
         * @exports ICMsgClientToGCRequestAccountGuildEventData
         * @interface ICMsgClientToGCRequestAccountGuildEventData
         * @property {number|null} [guild_id] CMsgClientToGCRequestAccountGuildEventData guild_id
         * @property {EEvent|null} [event_id] CMsgClientToGCRequestAccountGuildEventData event_id
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestAccountGuildEventData.
         * @exports CMsgClientToGCRequestAccountGuildEventData
         * @classdesc Represents a CMsgClientToGCRequestAccountGuildEventData.
         * @implements ICMsgClientToGCRequestAccountGuildEventData
         * @constructor
         * @param {ICMsgClientToGCRequestAccountGuildEventData=} [properties] Properties to set
         */
        function CMsgClientToGCRequestAccountGuildEventData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestAccountGuildEventData guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCRequestAccountGuildEventData
         * @instance
         */
        CMsgClientToGCRequestAccountGuildEventData.prototype.guild_id = 0;
    
        /**
         * CMsgClientToGCRequestAccountGuildEventData event_id.
         * @member {EEvent} event_id
         * @memberof CMsgClientToGCRequestAccountGuildEventData
         * @instance
         */
        CMsgClientToGCRequestAccountGuildEventData.prototype.event_id = 0;
    
        /**
         * Creates a new CMsgClientToGCRequestAccountGuildEventData instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestAccountGuildEventData
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildEventData=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestAccountGuildEventData} CMsgClientToGCRequestAccountGuildEventData instance
         */
        CMsgClientToGCRequestAccountGuildEventData.create = function create(properties) {
            return new CMsgClientToGCRequestAccountGuildEventData(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestAccountGuildEventData message. Does not implicitly {@link CMsgClientToGCRequestAccountGuildEventData.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestAccountGuildEventData
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildEventData} message CMsgClientToGCRequestAccountGuildEventData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestAccountGuildEventData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.event_id != null && Object.hasOwnProperty.call(message, "event_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.event_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestAccountGuildEventData message, length delimited. Does not implicitly {@link CMsgClientToGCRequestAccountGuildEventData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestAccountGuildEventData
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildEventData} message CMsgClientToGCRequestAccountGuildEventData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestAccountGuildEventData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestAccountGuildEventData message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestAccountGuildEventData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestAccountGuildEventData} CMsgClientToGCRequestAccountGuildEventData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestAccountGuildEventData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestAccountGuildEventData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.event_id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestAccountGuildEventData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestAccountGuildEventData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestAccountGuildEventData} CMsgClientToGCRequestAccountGuildEventData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestAccountGuildEventData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestAccountGuildEventData message.
         * @function verify
         * @memberof CMsgClientToGCRequestAccountGuildEventData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestAccountGuildEventData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                switch (message.event_id) {
                default:
                    return "event_id: enum value expected";
                case 0:
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
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestAccountGuildEventData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestAccountGuildEventData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestAccountGuildEventData} CMsgClientToGCRequestAccountGuildEventData
         */
        CMsgClientToGCRequestAccountGuildEventData.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestAccountGuildEventData)
                return object;
            var message = new $root.CMsgClientToGCRequestAccountGuildEventData();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            switch (object.event_id) {
            case "EVENT_ID_NONE":
            case 0:
                message.event_id = 0;
                break;
            case "EVENT_ID_DIRETIDE":
            case 1:
                message.event_id = 1;
                break;
            case "EVENT_ID_SPRING_FESTIVAL":
            case 2:
                message.event_id = 2;
                break;
            case "EVENT_ID_FROSTIVUS_2013":
            case 3:
                message.event_id = 3;
                break;
            case "EVENT_ID_COMPENDIUM_2014":
            case 4:
                message.event_id = 4;
                break;
            case "EVENT_ID_NEXON_PC_BANG":
            case 5:
                message.event_id = 5;
                break;
            case "EVENT_ID_PWRD_DAC_2015":
            case 6:
                message.event_id = 6;
                break;
            case "EVENT_ID_NEW_BLOOM_2015":
            case 7:
                message.event_id = 7;
                break;
            case "EVENT_ID_INTERNATIONAL_2015":
            case 8:
                message.event_id = 8;
                break;
            case "EVENT_ID_FALL_MAJOR_2015":
            case 9:
                message.event_id = 9;
                break;
            case "EVENT_ID_ORACLE_PA":
            case 10:
                message.event_id = 10;
                break;
            case "EVENT_ID_NEW_BLOOM_2015_PREBEAST":
            case 11:
                message.event_id = 11;
                break;
            case "EVENT_ID_FROSTIVUS":
            case 12:
                message.event_id = 12;
                break;
            case "EVENT_ID_WINTER_MAJOR_2016":
            case 13:
                message.event_id = 13;
                break;
            case "EVENT_ID_INTERNATIONAL_2016":
            case 14:
                message.event_id = 14;
                break;
            case "EVENT_ID_FALL_MAJOR_2016":
            case 15:
                message.event_id = 15;
                break;
            case "EVENT_ID_WINTER_MAJOR_2017":
            case 16:
                message.event_id = 16;
                break;
            case "EVENT_ID_NEW_BLOOM_2017":
            case 17:
                message.event_id = 17;
                break;
            case "EVENT_ID_INTERNATIONAL_2017":
            case 18:
                message.event_id = 18;
                break;
            case "EVENT_ID_PLUS_SUBSCRIPTION":
            case 19:
                message.event_id = 19;
                break;
            case "EVENT_ID_SINGLES_DAY_2017":
            case 20:
                message.event_id = 20;
                break;
            case "EVENT_ID_FROSTIVUS_2017":
            case 21:
                message.event_id = 21;
                break;
            case "EVENT_ID_INTERNATIONAL_2018":
            case 22:
                message.event_id = 22;
                break;
            case "EVENT_ID_FROSTIVUS_2018":
            case 23:
                message.event_id = 23;
                break;
            case "EVENT_ID_NEW_BLOOM_2019":
            case 24:
                message.event_id = 24;
                break;
            case "EVENT_ID_INTERNATIONAL_2019":
            case 25:
                message.event_id = 25;
                break;
            case "EVENT_ID_NEW_PLAYER_EXPERIENCE":
            case 26:
                message.event_id = 26;
                break;
            case "EVENT_ID_FROSTIVUS_2019":
            case 27:
                message.event_id = 27;
                break;
            case "EVENT_ID_NEW_BLOOM_2020":
            case 28:
                message.event_id = 28;
                break;
            case "EVENT_ID_INTERNATIONAL_2020":
            case 29:
                message.event_id = 29;
                break;
            case "EVENT_ID_TEAM_FANDOM":
            case 30:
                message.event_id = 30;
                break;
            case "EVENT_ID_DIRETIDE_2020":
            case 31:
                message.event_id = 31;
                break;
            case "EVENT_ID_COUNT":
            case 32:
                message.event_id = 32;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestAccountGuildEventData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestAccountGuildEventData
         * @static
         * @param {CMsgClientToGCRequestAccountGuildEventData} message CMsgClientToGCRequestAccountGuildEventData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestAccountGuildEventData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.event_id = options.enums === String ? "EVENT_ID_NONE" : 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                object.event_id = options.enums === String ? $root.EEvent[message.event_id] : message.event_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestAccountGuildEventData to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestAccountGuildEventData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestAccountGuildEventData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCRequestAccountGuildEventData;
    })();
    
    $root.CMsgClientToGCRequestAccountGuildEventDataResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestAccountGuildEventDataResponse.
         * @exports ICMsgClientToGCRequestAccountGuildEventDataResponse
         * @interface ICMsgClientToGCRequestAccountGuildEventDataResponse
         * @property {CMsgClientToGCRequestAccountGuildEventDataResponse.EResponse|null} [result] CMsgClientToGCRequestAccountGuildEventDataResponse result
         * @property {EEvent|null} [event_id] CMsgClientToGCRequestAccountGuildEventDataResponse event_id
         * @property {ICMsgAccountGuildEventData|null} [event_data] CMsgClientToGCRequestAccountGuildEventDataResponse event_data
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestAccountGuildEventDataResponse.
         * @exports CMsgClientToGCRequestAccountGuildEventDataResponse
         * @classdesc Represents a CMsgClientToGCRequestAccountGuildEventDataResponse.
         * @implements ICMsgClientToGCRequestAccountGuildEventDataResponse
         * @constructor
         * @param {ICMsgClientToGCRequestAccountGuildEventDataResponse=} [properties] Properties to set
         */
        function CMsgClientToGCRequestAccountGuildEventDataResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestAccountGuildEventDataResponse result.
         * @member {CMsgClientToGCRequestAccountGuildEventDataResponse.EResponse} result
         * @memberof CMsgClientToGCRequestAccountGuildEventDataResponse
         * @instance
         */
        CMsgClientToGCRequestAccountGuildEventDataResponse.prototype.result = 0;
    
        /**
         * CMsgClientToGCRequestAccountGuildEventDataResponse event_id.
         * @member {EEvent} event_id
         * @memberof CMsgClientToGCRequestAccountGuildEventDataResponse
         * @instance
         */
        CMsgClientToGCRequestAccountGuildEventDataResponse.prototype.event_id = 0;
    
        /**
         * CMsgClientToGCRequestAccountGuildEventDataResponse event_data.
         * @member {ICMsgAccountGuildEventData|null|undefined} event_data
         * @memberof CMsgClientToGCRequestAccountGuildEventDataResponse
         * @instance
         */
        CMsgClientToGCRequestAccountGuildEventDataResponse.prototype.event_data = null;
    
        /**
         * Creates a new CMsgClientToGCRequestAccountGuildEventDataResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestAccountGuildEventDataResponse
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildEventDataResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestAccountGuildEventDataResponse} CMsgClientToGCRequestAccountGuildEventDataResponse instance
         */
        CMsgClientToGCRequestAccountGuildEventDataResponse.create = function create(properties) {
            return new CMsgClientToGCRequestAccountGuildEventDataResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestAccountGuildEventDataResponse message. Does not implicitly {@link CMsgClientToGCRequestAccountGuildEventDataResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestAccountGuildEventDataResponse
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildEventDataResponse} message CMsgClientToGCRequestAccountGuildEventDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestAccountGuildEventDataResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.event_id != null && Object.hasOwnProperty.call(message, "event_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.event_id);
            if (message.event_data != null && Object.hasOwnProperty.call(message, "event_data"))
                $root.CMsgAccountGuildEventData.encode(message.event_data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestAccountGuildEventDataResponse message, length delimited. Does not implicitly {@link CMsgClientToGCRequestAccountGuildEventDataResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestAccountGuildEventDataResponse
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildEventDataResponse} message CMsgClientToGCRequestAccountGuildEventDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestAccountGuildEventDataResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestAccountGuildEventDataResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestAccountGuildEventDataResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestAccountGuildEventDataResponse} CMsgClientToGCRequestAccountGuildEventDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestAccountGuildEventDataResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestAccountGuildEventDataResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.event_id = reader.int32();
                    break;
                case 3:
                    message.event_data = $root.CMsgAccountGuildEventData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestAccountGuildEventDataResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestAccountGuildEventDataResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestAccountGuildEventDataResponse} CMsgClientToGCRequestAccountGuildEventDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestAccountGuildEventDataResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestAccountGuildEventDataResponse message.
         * @function verify
         * @memberof CMsgClientToGCRequestAccountGuildEventDataResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestAccountGuildEventDataResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                switch (message.result) {
                default:
                    return "result: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                switch (message.event_id) {
                default:
                    return "event_id: enum value expected";
                case 0:
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
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                    break;
                }
            if (message.event_data != null && message.hasOwnProperty("event_data")) {
                var error = $root.CMsgAccountGuildEventData.verify(message.event_data);
                if (error)
                    return "event_data." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestAccountGuildEventDataResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestAccountGuildEventDataResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestAccountGuildEventDataResponse} CMsgClientToGCRequestAccountGuildEventDataResponse
         */
        CMsgClientToGCRequestAccountGuildEventDataResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestAccountGuildEventDataResponse)
                return object;
            var message = new $root.CMsgClientToGCRequestAccountGuildEventDataResponse();
            switch (object.result) {
            case "k_eInternalError":
            case 0:
                message.result = 0;
                break;
            case "k_eSuccess":
            case 1:
                message.result = 1;
                break;
            case "k_eTooBusy":
            case 2:
                message.result = 2;
                break;
            case "k_eDisabled":
            case 3:
                message.result = 3;
                break;
            case "k_eTimeout":
            case 4:
                message.result = 4;
                break;
            case "k_eInvalidEvent":
            case 5:
                message.result = 5;
                break;
            case "k_eInvalidGuild":
            case 6:
                message.result = 6;
                break;
            case "k_eNotMember":
            case 7:
                message.result = 7;
                break;
            case "k_eInvalidGuildEvent":
            case 8:
                message.result = 8;
                break;
            }
            switch (object.event_id) {
            case "EVENT_ID_NONE":
            case 0:
                message.event_id = 0;
                break;
            case "EVENT_ID_DIRETIDE":
            case 1:
                message.event_id = 1;
                break;
            case "EVENT_ID_SPRING_FESTIVAL":
            case 2:
                message.event_id = 2;
                break;
            case "EVENT_ID_FROSTIVUS_2013":
            case 3:
                message.event_id = 3;
                break;
            case "EVENT_ID_COMPENDIUM_2014":
            case 4:
                message.event_id = 4;
                break;
            case "EVENT_ID_NEXON_PC_BANG":
            case 5:
                message.event_id = 5;
                break;
            case "EVENT_ID_PWRD_DAC_2015":
            case 6:
                message.event_id = 6;
                break;
            case "EVENT_ID_NEW_BLOOM_2015":
            case 7:
                message.event_id = 7;
                break;
            case "EVENT_ID_INTERNATIONAL_2015":
            case 8:
                message.event_id = 8;
                break;
            case "EVENT_ID_FALL_MAJOR_2015":
            case 9:
                message.event_id = 9;
                break;
            case "EVENT_ID_ORACLE_PA":
            case 10:
                message.event_id = 10;
                break;
            case "EVENT_ID_NEW_BLOOM_2015_PREBEAST":
            case 11:
                message.event_id = 11;
                break;
            case "EVENT_ID_FROSTIVUS":
            case 12:
                message.event_id = 12;
                break;
            case "EVENT_ID_WINTER_MAJOR_2016":
            case 13:
                message.event_id = 13;
                break;
            case "EVENT_ID_INTERNATIONAL_2016":
            case 14:
                message.event_id = 14;
                break;
            case "EVENT_ID_FALL_MAJOR_2016":
            case 15:
                message.event_id = 15;
                break;
            case "EVENT_ID_WINTER_MAJOR_2017":
            case 16:
                message.event_id = 16;
                break;
            case "EVENT_ID_NEW_BLOOM_2017":
            case 17:
                message.event_id = 17;
                break;
            case "EVENT_ID_INTERNATIONAL_2017":
            case 18:
                message.event_id = 18;
                break;
            case "EVENT_ID_PLUS_SUBSCRIPTION":
            case 19:
                message.event_id = 19;
                break;
            case "EVENT_ID_SINGLES_DAY_2017":
            case 20:
                message.event_id = 20;
                break;
            case "EVENT_ID_FROSTIVUS_2017":
            case 21:
                message.event_id = 21;
                break;
            case "EVENT_ID_INTERNATIONAL_2018":
            case 22:
                message.event_id = 22;
                break;
            case "EVENT_ID_FROSTIVUS_2018":
            case 23:
                message.event_id = 23;
                break;
            case "EVENT_ID_NEW_BLOOM_2019":
            case 24:
                message.event_id = 24;
                break;
            case "EVENT_ID_INTERNATIONAL_2019":
            case 25:
                message.event_id = 25;
                break;
            case "EVENT_ID_NEW_PLAYER_EXPERIENCE":
            case 26:
                message.event_id = 26;
                break;
            case "EVENT_ID_FROSTIVUS_2019":
            case 27:
                message.event_id = 27;
                break;
            case "EVENT_ID_NEW_BLOOM_2020":
            case 28:
                message.event_id = 28;
                break;
            case "EVENT_ID_INTERNATIONAL_2020":
            case 29:
                message.event_id = 29;
                break;
            case "EVENT_ID_TEAM_FANDOM":
            case 30:
                message.event_id = 30;
                break;
            case "EVENT_ID_DIRETIDE_2020":
            case 31:
                message.event_id = 31;
                break;
            case "EVENT_ID_COUNT":
            case 32:
                message.event_id = 32;
                break;
            }
            if (object.event_data != null) {
                if (typeof object.event_data !== "object")
                    throw TypeError(".CMsgClientToGCRequestAccountGuildEventDataResponse.event_data: object expected");
                message.event_data = $root.CMsgAccountGuildEventData.fromObject(object.event_data);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestAccountGuildEventDataResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestAccountGuildEventDataResponse
         * @static
         * @param {CMsgClientToGCRequestAccountGuildEventDataResponse} message CMsgClientToGCRequestAccountGuildEventDataResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestAccountGuildEventDataResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = options.enums === String ? "k_eInternalError" : 0;
                object.event_id = options.enums === String ? "EVENT_ID_NONE" : 0;
                object.event_data = null;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCRequestAccountGuildEventDataResponse.EResponse[message.result] : message.result;
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                object.event_id = options.enums === String ? $root.EEvent[message.event_id] : message.event_id;
            if (message.event_data != null && message.hasOwnProperty("event_data"))
                object.event_data = $root.CMsgAccountGuildEventData.toObject(message.event_data, options);
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestAccountGuildEventDataResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestAccountGuildEventDataResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestAccountGuildEventDataResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCRequestAccountGuildEventDataResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidEvent=5 k_eInvalidEvent value
         * @property {number} k_eInvalidGuild=6 k_eInvalidGuild value
         * @property {number} k_eNotMember=7 k_eNotMember value
         * @property {number} k_eInvalidGuildEvent=8 k_eInvalidGuildEvent value
         */
        CMsgClientToGCRequestAccountGuildEventDataResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidEvent"] = 5;
            values[valuesById[6] = "k_eInvalidGuild"] = 6;
            values[valuesById[7] = "k_eNotMember"] = 7;
            values[valuesById[8] = "k_eInvalidGuildEvent"] = 8;
            return values;
        })();
    
        return CMsgClientToGCRequestAccountGuildEventDataResponse;
    })();
    
    $root.CMsgGCToClientAccountGuildEventDataUpdated = (function() {
    
        /**
         * Properties of a CMsgGCToClientAccountGuildEventDataUpdated.
         * @exports ICMsgGCToClientAccountGuildEventDataUpdated
         * @interface ICMsgGCToClientAccountGuildEventDataUpdated
         * @property {number|null} [guild_id] CMsgGCToClientAccountGuildEventDataUpdated guild_id
         * @property {EEvent|null} [event_id] CMsgGCToClientAccountGuildEventDataUpdated event_id
         * @property {number|null} [update_flags] CMsgGCToClientAccountGuildEventDataUpdated update_flags
         * @property {ICMsgAccountGuildEventData|null} [guild_event_data] CMsgGCToClientAccountGuildEventDataUpdated guild_event_data
         * @property {boolean|null} [contracts_updated] CMsgGCToClientAccountGuildEventDataUpdated contracts_updated
         */
    
        /**
         * Constructs a new CMsgGCToClientAccountGuildEventDataUpdated.
         * @exports CMsgGCToClientAccountGuildEventDataUpdated
         * @classdesc Represents a CMsgGCToClientAccountGuildEventDataUpdated.
         * @implements ICMsgGCToClientAccountGuildEventDataUpdated
         * @constructor
         * @param {ICMsgGCToClientAccountGuildEventDataUpdated=} [properties] Properties to set
         */
        function CMsgGCToClientAccountGuildEventDataUpdated(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGCToClientAccountGuildEventDataUpdated guild_id.
         * @member {number} guild_id
         * @memberof CMsgGCToClientAccountGuildEventDataUpdated
         * @instance
         */
        CMsgGCToClientAccountGuildEventDataUpdated.prototype.guild_id = 0;
    
        /**
         * CMsgGCToClientAccountGuildEventDataUpdated event_id.
         * @member {EEvent} event_id
         * @memberof CMsgGCToClientAccountGuildEventDataUpdated
         * @instance
         */
        CMsgGCToClientAccountGuildEventDataUpdated.prototype.event_id = 0;
    
        /**
         * CMsgGCToClientAccountGuildEventDataUpdated update_flags.
         * @member {number} update_flags
         * @memberof CMsgGCToClientAccountGuildEventDataUpdated
         * @instance
         */
        CMsgGCToClientAccountGuildEventDataUpdated.prototype.update_flags = 0;
    
        /**
         * CMsgGCToClientAccountGuildEventDataUpdated guild_event_data.
         * @member {ICMsgAccountGuildEventData|null|undefined} guild_event_data
         * @memberof CMsgGCToClientAccountGuildEventDataUpdated
         * @instance
         */
        CMsgGCToClientAccountGuildEventDataUpdated.prototype.guild_event_data = null;
    
        /**
         * CMsgGCToClientAccountGuildEventDataUpdated contracts_updated.
         * @member {boolean} contracts_updated
         * @memberof CMsgGCToClientAccountGuildEventDataUpdated
         * @instance
         */
        CMsgGCToClientAccountGuildEventDataUpdated.prototype.contracts_updated = false;
    
        /**
         * Creates a new CMsgGCToClientAccountGuildEventDataUpdated instance using the specified properties.
         * @function create
         * @memberof CMsgGCToClientAccountGuildEventDataUpdated
         * @static
         * @param {ICMsgGCToClientAccountGuildEventDataUpdated=} [properties] Properties to set
         * @returns {CMsgGCToClientAccountGuildEventDataUpdated} CMsgGCToClientAccountGuildEventDataUpdated instance
         */
        CMsgGCToClientAccountGuildEventDataUpdated.create = function create(properties) {
            return new CMsgGCToClientAccountGuildEventDataUpdated(properties);
        };
    
        /**
         * Encodes the specified CMsgGCToClientAccountGuildEventDataUpdated message. Does not implicitly {@link CMsgGCToClientAccountGuildEventDataUpdated.verify|verify} messages.
         * @function encode
         * @memberof CMsgGCToClientAccountGuildEventDataUpdated
         * @static
         * @param {ICMsgGCToClientAccountGuildEventDataUpdated} message CMsgGCToClientAccountGuildEventDataUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCToClientAccountGuildEventDataUpdated.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.event_id != null && Object.hasOwnProperty.call(message, "event_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.event_id);
            if (message.update_flags != null && Object.hasOwnProperty.call(message, "update_flags"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.update_flags);
            if (message.guild_event_data != null && Object.hasOwnProperty.call(message, "guild_event_data"))
                $root.CMsgAccountGuildEventData.encode(message.guild_event_data, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.contracts_updated != null && Object.hasOwnProperty.call(message, "contracts_updated"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.contracts_updated);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGCToClientAccountGuildEventDataUpdated message, length delimited. Does not implicitly {@link CMsgGCToClientAccountGuildEventDataUpdated.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGCToClientAccountGuildEventDataUpdated
         * @static
         * @param {ICMsgGCToClientAccountGuildEventDataUpdated} message CMsgGCToClientAccountGuildEventDataUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCToClientAccountGuildEventDataUpdated.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGCToClientAccountGuildEventDataUpdated message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGCToClientAccountGuildEventDataUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGCToClientAccountGuildEventDataUpdated} CMsgGCToClientAccountGuildEventDataUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCToClientAccountGuildEventDataUpdated.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCToClientAccountGuildEventDataUpdated();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.event_id = reader.int32();
                    break;
                case 3:
                    message.update_flags = reader.uint32();
                    break;
                case 4:
                    message.guild_event_data = $root.CMsgAccountGuildEventData.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.contracts_updated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGCToClientAccountGuildEventDataUpdated message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGCToClientAccountGuildEventDataUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGCToClientAccountGuildEventDataUpdated} CMsgGCToClientAccountGuildEventDataUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCToClientAccountGuildEventDataUpdated.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGCToClientAccountGuildEventDataUpdated message.
         * @function verify
         * @memberof CMsgGCToClientAccountGuildEventDataUpdated
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGCToClientAccountGuildEventDataUpdated.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                switch (message.event_id) {
                default:
                    return "event_id: enum value expected";
                case 0:
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
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                    break;
                }
            if (message.update_flags != null && message.hasOwnProperty("update_flags"))
                if (!$util.isInteger(message.update_flags))
                    return "update_flags: integer expected";
            if (message.guild_event_data != null && message.hasOwnProperty("guild_event_data")) {
                var error = $root.CMsgAccountGuildEventData.verify(message.guild_event_data);
                if (error)
                    return "guild_event_data." + error;
            }
            if (message.contracts_updated != null && message.hasOwnProperty("contracts_updated"))
                if (typeof message.contracts_updated !== "boolean")
                    return "contracts_updated: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgGCToClientAccountGuildEventDataUpdated message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGCToClientAccountGuildEventDataUpdated
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGCToClientAccountGuildEventDataUpdated} CMsgGCToClientAccountGuildEventDataUpdated
         */
        CMsgGCToClientAccountGuildEventDataUpdated.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGCToClientAccountGuildEventDataUpdated)
                return object;
            var message = new $root.CMsgGCToClientAccountGuildEventDataUpdated();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            switch (object.event_id) {
            case "EVENT_ID_NONE":
            case 0:
                message.event_id = 0;
                break;
            case "EVENT_ID_DIRETIDE":
            case 1:
                message.event_id = 1;
                break;
            case "EVENT_ID_SPRING_FESTIVAL":
            case 2:
                message.event_id = 2;
                break;
            case "EVENT_ID_FROSTIVUS_2013":
            case 3:
                message.event_id = 3;
                break;
            case "EVENT_ID_COMPENDIUM_2014":
            case 4:
                message.event_id = 4;
                break;
            case "EVENT_ID_NEXON_PC_BANG":
            case 5:
                message.event_id = 5;
                break;
            case "EVENT_ID_PWRD_DAC_2015":
            case 6:
                message.event_id = 6;
                break;
            case "EVENT_ID_NEW_BLOOM_2015":
            case 7:
                message.event_id = 7;
                break;
            case "EVENT_ID_INTERNATIONAL_2015":
            case 8:
                message.event_id = 8;
                break;
            case "EVENT_ID_FALL_MAJOR_2015":
            case 9:
                message.event_id = 9;
                break;
            case "EVENT_ID_ORACLE_PA":
            case 10:
                message.event_id = 10;
                break;
            case "EVENT_ID_NEW_BLOOM_2015_PREBEAST":
            case 11:
                message.event_id = 11;
                break;
            case "EVENT_ID_FROSTIVUS":
            case 12:
                message.event_id = 12;
                break;
            case "EVENT_ID_WINTER_MAJOR_2016":
            case 13:
                message.event_id = 13;
                break;
            case "EVENT_ID_INTERNATIONAL_2016":
            case 14:
                message.event_id = 14;
                break;
            case "EVENT_ID_FALL_MAJOR_2016":
            case 15:
                message.event_id = 15;
                break;
            case "EVENT_ID_WINTER_MAJOR_2017":
            case 16:
                message.event_id = 16;
                break;
            case "EVENT_ID_NEW_BLOOM_2017":
            case 17:
                message.event_id = 17;
                break;
            case "EVENT_ID_INTERNATIONAL_2017":
            case 18:
                message.event_id = 18;
                break;
            case "EVENT_ID_PLUS_SUBSCRIPTION":
            case 19:
                message.event_id = 19;
                break;
            case "EVENT_ID_SINGLES_DAY_2017":
            case 20:
                message.event_id = 20;
                break;
            case "EVENT_ID_FROSTIVUS_2017":
            case 21:
                message.event_id = 21;
                break;
            case "EVENT_ID_INTERNATIONAL_2018":
            case 22:
                message.event_id = 22;
                break;
            case "EVENT_ID_FROSTIVUS_2018":
            case 23:
                message.event_id = 23;
                break;
            case "EVENT_ID_NEW_BLOOM_2019":
            case 24:
                message.event_id = 24;
                break;
            case "EVENT_ID_INTERNATIONAL_2019":
            case 25:
                message.event_id = 25;
                break;
            case "EVENT_ID_NEW_PLAYER_EXPERIENCE":
            case 26:
                message.event_id = 26;
                break;
            case "EVENT_ID_FROSTIVUS_2019":
            case 27:
                message.event_id = 27;
                break;
            case "EVENT_ID_NEW_BLOOM_2020":
            case 28:
                message.event_id = 28;
                break;
            case "EVENT_ID_INTERNATIONAL_2020":
            case 29:
                message.event_id = 29;
                break;
            case "EVENT_ID_TEAM_FANDOM":
            case 30:
                message.event_id = 30;
                break;
            case "EVENT_ID_DIRETIDE_2020":
            case 31:
                message.event_id = 31;
                break;
            case "EVENT_ID_COUNT":
            case 32:
                message.event_id = 32;
                break;
            }
            if (object.update_flags != null)
                message.update_flags = object.update_flags >>> 0;
            if (object.guild_event_data != null) {
                if (typeof object.guild_event_data !== "object")
                    throw TypeError(".CMsgGCToClientAccountGuildEventDataUpdated.guild_event_data: object expected");
                message.guild_event_data = $root.CMsgAccountGuildEventData.fromObject(object.guild_event_data);
            }
            if (object.contracts_updated != null)
                message.contracts_updated = Boolean(object.contracts_updated);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGCToClientAccountGuildEventDataUpdated message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGCToClientAccountGuildEventDataUpdated
         * @static
         * @param {CMsgGCToClientAccountGuildEventDataUpdated} message CMsgGCToClientAccountGuildEventDataUpdated
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGCToClientAccountGuildEventDataUpdated.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.event_id = options.enums === String ? "EVENT_ID_NONE" : 0;
                object.update_flags = 0;
                object.guild_event_data = null;
                object.contracts_updated = false;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                object.event_id = options.enums === String ? $root.EEvent[message.event_id] : message.event_id;
            if (message.update_flags != null && message.hasOwnProperty("update_flags"))
                object.update_flags = message.update_flags;
            if (message.guild_event_data != null && message.hasOwnProperty("guild_event_data"))
                object.guild_event_data = $root.CMsgAccountGuildEventData.toObject(message.guild_event_data, options);
            if (message.contracts_updated != null && message.hasOwnProperty("contracts_updated"))
                object.contracts_updated = message.contracts_updated;
            return object;
        };
    
        /**
         * Converts this CMsgGCToClientAccountGuildEventDataUpdated to JSON.
         * @function toJSON
         * @memberof CMsgGCToClientAccountGuildEventDataUpdated
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGCToClientAccountGuildEventDataUpdated.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGCToClientAccountGuildEventDataUpdated;
    })();
    
    $root.CMsgClientToGCRequestActiveGuildContracts = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestActiveGuildContracts.
         * @exports ICMsgClientToGCRequestActiveGuildContracts
         * @interface ICMsgClientToGCRequestActiveGuildContracts
         * @property {number|null} [guild_id] CMsgClientToGCRequestActiveGuildContracts guild_id
         * @property {EEvent|null} [event_id] CMsgClientToGCRequestActiveGuildContracts event_id
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestActiveGuildContracts.
         * @exports CMsgClientToGCRequestActiveGuildContracts
         * @classdesc Represents a CMsgClientToGCRequestActiveGuildContracts.
         * @implements ICMsgClientToGCRequestActiveGuildContracts
         * @constructor
         * @param {ICMsgClientToGCRequestActiveGuildContracts=} [properties] Properties to set
         */
        function CMsgClientToGCRequestActiveGuildContracts(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestActiveGuildContracts guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCRequestActiveGuildContracts
         * @instance
         */
        CMsgClientToGCRequestActiveGuildContracts.prototype.guild_id = 0;
    
        /**
         * CMsgClientToGCRequestActiveGuildContracts event_id.
         * @member {EEvent} event_id
         * @memberof CMsgClientToGCRequestActiveGuildContracts
         * @instance
         */
        CMsgClientToGCRequestActiveGuildContracts.prototype.event_id = 0;
    
        /**
         * Creates a new CMsgClientToGCRequestActiveGuildContracts instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestActiveGuildContracts
         * @static
         * @param {ICMsgClientToGCRequestActiveGuildContracts=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestActiveGuildContracts} CMsgClientToGCRequestActiveGuildContracts instance
         */
        CMsgClientToGCRequestActiveGuildContracts.create = function create(properties) {
            return new CMsgClientToGCRequestActiveGuildContracts(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestActiveGuildContracts message. Does not implicitly {@link CMsgClientToGCRequestActiveGuildContracts.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestActiveGuildContracts
         * @static
         * @param {ICMsgClientToGCRequestActiveGuildContracts} message CMsgClientToGCRequestActiveGuildContracts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestActiveGuildContracts.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.event_id != null && Object.hasOwnProperty.call(message, "event_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.event_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestActiveGuildContracts message, length delimited. Does not implicitly {@link CMsgClientToGCRequestActiveGuildContracts.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestActiveGuildContracts
         * @static
         * @param {ICMsgClientToGCRequestActiveGuildContracts} message CMsgClientToGCRequestActiveGuildContracts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestActiveGuildContracts.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestActiveGuildContracts message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestActiveGuildContracts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestActiveGuildContracts} CMsgClientToGCRequestActiveGuildContracts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestActiveGuildContracts.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestActiveGuildContracts();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.event_id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestActiveGuildContracts message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestActiveGuildContracts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestActiveGuildContracts} CMsgClientToGCRequestActiveGuildContracts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestActiveGuildContracts.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestActiveGuildContracts message.
         * @function verify
         * @memberof CMsgClientToGCRequestActiveGuildContracts
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestActiveGuildContracts.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                switch (message.event_id) {
                default:
                    return "event_id: enum value expected";
                case 0:
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
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestActiveGuildContracts message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestActiveGuildContracts
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestActiveGuildContracts} CMsgClientToGCRequestActiveGuildContracts
         */
        CMsgClientToGCRequestActiveGuildContracts.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestActiveGuildContracts)
                return object;
            var message = new $root.CMsgClientToGCRequestActiveGuildContracts();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            switch (object.event_id) {
            case "EVENT_ID_NONE":
            case 0:
                message.event_id = 0;
                break;
            case "EVENT_ID_DIRETIDE":
            case 1:
                message.event_id = 1;
                break;
            case "EVENT_ID_SPRING_FESTIVAL":
            case 2:
                message.event_id = 2;
                break;
            case "EVENT_ID_FROSTIVUS_2013":
            case 3:
                message.event_id = 3;
                break;
            case "EVENT_ID_COMPENDIUM_2014":
            case 4:
                message.event_id = 4;
                break;
            case "EVENT_ID_NEXON_PC_BANG":
            case 5:
                message.event_id = 5;
                break;
            case "EVENT_ID_PWRD_DAC_2015":
            case 6:
                message.event_id = 6;
                break;
            case "EVENT_ID_NEW_BLOOM_2015":
            case 7:
                message.event_id = 7;
                break;
            case "EVENT_ID_INTERNATIONAL_2015":
            case 8:
                message.event_id = 8;
                break;
            case "EVENT_ID_FALL_MAJOR_2015":
            case 9:
                message.event_id = 9;
                break;
            case "EVENT_ID_ORACLE_PA":
            case 10:
                message.event_id = 10;
                break;
            case "EVENT_ID_NEW_BLOOM_2015_PREBEAST":
            case 11:
                message.event_id = 11;
                break;
            case "EVENT_ID_FROSTIVUS":
            case 12:
                message.event_id = 12;
                break;
            case "EVENT_ID_WINTER_MAJOR_2016":
            case 13:
                message.event_id = 13;
                break;
            case "EVENT_ID_INTERNATIONAL_2016":
            case 14:
                message.event_id = 14;
                break;
            case "EVENT_ID_FALL_MAJOR_2016":
            case 15:
                message.event_id = 15;
                break;
            case "EVENT_ID_WINTER_MAJOR_2017":
            case 16:
                message.event_id = 16;
                break;
            case "EVENT_ID_NEW_BLOOM_2017":
            case 17:
                message.event_id = 17;
                break;
            case "EVENT_ID_INTERNATIONAL_2017":
            case 18:
                message.event_id = 18;
                break;
            case "EVENT_ID_PLUS_SUBSCRIPTION":
            case 19:
                message.event_id = 19;
                break;
            case "EVENT_ID_SINGLES_DAY_2017":
            case 20:
                message.event_id = 20;
                break;
            case "EVENT_ID_FROSTIVUS_2017":
            case 21:
                message.event_id = 21;
                break;
            case "EVENT_ID_INTERNATIONAL_2018":
            case 22:
                message.event_id = 22;
                break;
            case "EVENT_ID_FROSTIVUS_2018":
            case 23:
                message.event_id = 23;
                break;
            case "EVENT_ID_NEW_BLOOM_2019":
            case 24:
                message.event_id = 24;
                break;
            case "EVENT_ID_INTERNATIONAL_2019":
            case 25:
                message.event_id = 25;
                break;
            case "EVENT_ID_NEW_PLAYER_EXPERIENCE":
            case 26:
                message.event_id = 26;
                break;
            case "EVENT_ID_FROSTIVUS_2019":
            case 27:
                message.event_id = 27;
                break;
            case "EVENT_ID_NEW_BLOOM_2020":
            case 28:
                message.event_id = 28;
                break;
            case "EVENT_ID_INTERNATIONAL_2020":
            case 29:
                message.event_id = 29;
                break;
            case "EVENT_ID_TEAM_FANDOM":
            case 30:
                message.event_id = 30;
                break;
            case "EVENT_ID_DIRETIDE_2020":
            case 31:
                message.event_id = 31;
                break;
            case "EVENT_ID_COUNT":
            case 32:
                message.event_id = 32;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestActiveGuildContracts message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestActiveGuildContracts
         * @static
         * @param {CMsgClientToGCRequestActiveGuildContracts} message CMsgClientToGCRequestActiveGuildContracts
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestActiveGuildContracts.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.event_id = options.enums === String ? "EVENT_ID_NONE" : 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                object.event_id = options.enums === String ? $root.EEvent[message.event_id] : message.event_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestActiveGuildContracts to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestActiveGuildContracts
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestActiveGuildContracts.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCRequestActiveGuildContracts;
    })();
    
    $root.CMsgClientToGCRequestActiveGuildContractsResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestActiveGuildContractsResponse.
         * @exports ICMsgClientToGCRequestActiveGuildContractsResponse
         * @interface ICMsgClientToGCRequestActiveGuildContractsResponse
         * @property {CMsgClientToGCRequestActiveGuildContractsResponse.EResponse|null} [result] CMsgClientToGCRequestActiveGuildContractsResponse result
         * @property {ICMsgGuildActiveContracts|null} [active_contracts] CMsgClientToGCRequestActiveGuildContractsResponse active_contracts
         * @property {ICMsgGuildChallenge|null} [active_challenges] CMsgClientToGCRequestActiveGuildContractsResponse active_challenges
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestActiveGuildContractsResponse.
         * @exports CMsgClientToGCRequestActiveGuildContractsResponse
         * @classdesc Represents a CMsgClientToGCRequestActiveGuildContractsResponse.
         * @implements ICMsgClientToGCRequestActiveGuildContractsResponse
         * @constructor
         * @param {ICMsgClientToGCRequestActiveGuildContractsResponse=} [properties] Properties to set
         */
        function CMsgClientToGCRequestActiveGuildContractsResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestActiveGuildContractsResponse result.
         * @member {CMsgClientToGCRequestActiveGuildContractsResponse.EResponse} result
         * @memberof CMsgClientToGCRequestActiveGuildContractsResponse
         * @instance
         */
        CMsgClientToGCRequestActiveGuildContractsResponse.prototype.result = 0;
    
        /**
         * CMsgClientToGCRequestActiveGuildContractsResponse active_contracts.
         * @member {ICMsgGuildActiveContracts|null|undefined} active_contracts
         * @memberof CMsgClientToGCRequestActiveGuildContractsResponse
         * @instance
         */
        CMsgClientToGCRequestActiveGuildContractsResponse.prototype.active_contracts = null;
    
        /**
         * CMsgClientToGCRequestActiveGuildContractsResponse active_challenges.
         * @member {ICMsgGuildChallenge|null|undefined} active_challenges
         * @memberof CMsgClientToGCRequestActiveGuildContractsResponse
         * @instance
         */
        CMsgClientToGCRequestActiveGuildContractsResponse.prototype.active_challenges = null;
    
        /**
         * Creates a new CMsgClientToGCRequestActiveGuildContractsResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestActiveGuildContractsResponse
         * @static
         * @param {ICMsgClientToGCRequestActiveGuildContractsResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestActiveGuildContractsResponse} CMsgClientToGCRequestActiveGuildContractsResponse instance
         */
        CMsgClientToGCRequestActiveGuildContractsResponse.create = function create(properties) {
            return new CMsgClientToGCRequestActiveGuildContractsResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestActiveGuildContractsResponse message. Does not implicitly {@link CMsgClientToGCRequestActiveGuildContractsResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestActiveGuildContractsResponse
         * @static
         * @param {ICMsgClientToGCRequestActiveGuildContractsResponse} message CMsgClientToGCRequestActiveGuildContractsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestActiveGuildContractsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.active_contracts != null && Object.hasOwnProperty.call(message, "active_contracts"))
                $root.CMsgGuildActiveContracts.encode(message.active_contracts, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.active_challenges != null && Object.hasOwnProperty.call(message, "active_challenges"))
                $root.CMsgGuildChallenge.encode(message.active_challenges, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestActiveGuildContractsResponse message, length delimited. Does not implicitly {@link CMsgClientToGCRequestActiveGuildContractsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestActiveGuildContractsResponse
         * @static
         * @param {ICMsgClientToGCRequestActiveGuildContractsResponse} message CMsgClientToGCRequestActiveGuildContractsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestActiveGuildContractsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestActiveGuildContractsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestActiveGuildContractsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestActiveGuildContractsResponse} CMsgClientToGCRequestActiveGuildContractsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestActiveGuildContractsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestActiveGuildContractsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.active_contracts = $root.CMsgGuildActiveContracts.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.active_challenges = $root.CMsgGuildChallenge.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestActiveGuildContractsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestActiveGuildContractsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestActiveGuildContractsResponse} CMsgClientToGCRequestActiveGuildContractsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestActiveGuildContractsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestActiveGuildContractsResponse message.
         * @function verify
         * @memberof CMsgClientToGCRequestActiveGuildContractsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestActiveGuildContractsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                switch (message.result) {
                default:
                    return "result: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
            if (message.active_contracts != null && message.hasOwnProperty("active_contracts")) {
                var error = $root.CMsgGuildActiveContracts.verify(message.active_contracts);
                if (error)
                    return "active_contracts." + error;
            }
            if (message.active_challenges != null && message.hasOwnProperty("active_challenges")) {
                var error = $root.CMsgGuildChallenge.verify(message.active_challenges);
                if (error)
                    return "active_challenges." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestActiveGuildContractsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestActiveGuildContractsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestActiveGuildContractsResponse} CMsgClientToGCRequestActiveGuildContractsResponse
         */
        CMsgClientToGCRequestActiveGuildContractsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestActiveGuildContractsResponse)
                return object;
            var message = new $root.CMsgClientToGCRequestActiveGuildContractsResponse();
            switch (object.result) {
            case "k_eInternalError":
            case 0:
                message.result = 0;
                break;
            case "k_eSuccess":
            case 1:
                message.result = 1;
                break;
            case "k_eTooBusy":
            case 2:
                message.result = 2;
                break;
            case "k_eDisabled":
            case 3:
                message.result = 3;
                break;
            case "k_eTimeout":
            case 4:
                message.result = 4;
                break;
            case "k_eInvalidEvent":
            case 5:
                message.result = 5;
                break;
            case "k_eInvalidGuild":
            case 6:
                message.result = 6;
                break;
            case "k_eNotMember":
            case 7:
                message.result = 7;
                break;
            case "k_eInvalidGuildEvent":
            case 8:
                message.result = 8;
                break;
            }
            if (object.active_contracts != null) {
                if (typeof object.active_contracts !== "object")
                    throw TypeError(".CMsgClientToGCRequestActiveGuildContractsResponse.active_contracts: object expected");
                message.active_contracts = $root.CMsgGuildActiveContracts.fromObject(object.active_contracts);
            }
            if (object.active_challenges != null) {
                if (typeof object.active_challenges !== "object")
                    throw TypeError(".CMsgClientToGCRequestActiveGuildContractsResponse.active_challenges: object expected");
                message.active_challenges = $root.CMsgGuildChallenge.fromObject(object.active_challenges);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestActiveGuildContractsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestActiveGuildContractsResponse
         * @static
         * @param {CMsgClientToGCRequestActiveGuildContractsResponse} message CMsgClientToGCRequestActiveGuildContractsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestActiveGuildContractsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = options.enums === String ? "k_eInternalError" : 0;
                object.active_contracts = null;
                object.active_challenges = null;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCRequestActiveGuildContractsResponse.EResponse[message.result] : message.result;
            if (message.active_contracts != null && message.hasOwnProperty("active_contracts"))
                object.active_contracts = $root.CMsgGuildActiveContracts.toObject(message.active_contracts, options);
            if (message.active_challenges != null && message.hasOwnProperty("active_challenges"))
                object.active_challenges = $root.CMsgGuildChallenge.toObject(message.active_challenges, options);
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestActiveGuildContractsResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestActiveGuildContractsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestActiveGuildContractsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCRequestActiveGuildContractsResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidEvent=5 k_eInvalidEvent value
         * @property {number} k_eInvalidGuild=6 k_eInvalidGuild value
         * @property {number} k_eNotMember=7 k_eNotMember value
         * @property {number} k_eInvalidGuildEvent=8 k_eInvalidGuildEvent value
         */
        CMsgClientToGCRequestActiveGuildContractsResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidEvent"] = 5;
            values[valuesById[6] = "k_eInvalidGuild"] = 6;
            values[valuesById[7] = "k_eNotMember"] = 7;
            values[valuesById[8] = "k_eInvalidGuildEvent"] = 8;
            return values;
        })();
    
        return CMsgClientToGCRequestActiveGuildContractsResponse;
    })();
    
    $root.CMsgGCToClientActiveGuildContractsUpdated = (function() {
    
        /**
         * Properties of a CMsgGCToClientActiveGuildContractsUpdated.
         * @exports ICMsgGCToClientActiveGuildContractsUpdated
         * @interface ICMsgGCToClientActiveGuildContractsUpdated
         * @property {number|null} [guild_id] CMsgGCToClientActiveGuildContractsUpdated guild_id
         * @property {EEvent|null} [event_id] CMsgGCToClientActiveGuildContractsUpdated event_id
         */
    
        /**
         * Constructs a new CMsgGCToClientActiveGuildContractsUpdated.
         * @exports CMsgGCToClientActiveGuildContractsUpdated
         * @classdesc Represents a CMsgGCToClientActiveGuildContractsUpdated.
         * @implements ICMsgGCToClientActiveGuildContractsUpdated
         * @constructor
         * @param {ICMsgGCToClientActiveGuildContractsUpdated=} [properties] Properties to set
         */
        function CMsgGCToClientActiveGuildContractsUpdated(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGCToClientActiveGuildContractsUpdated guild_id.
         * @member {number} guild_id
         * @memberof CMsgGCToClientActiveGuildContractsUpdated
         * @instance
         */
        CMsgGCToClientActiveGuildContractsUpdated.prototype.guild_id = 0;
    
        /**
         * CMsgGCToClientActiveGuildContractsUpdated event_id.
         * @member {EEvent} event_id
         * @memberof CMsgGCToClientActiveGuildContractsUpdated
         * @instance
         */
        CMsgGCToClientActiveGuildContractsUpdated.prototype.event_id = 0;
    
        /**
         * Creates a new CMsgGCToClientActiveGuildContractsUpdated instance using the specified properties.
         * @function create
         * @memberof CMsgGCToClientActiveGuildContractsUpdated
         * @static
         * @param {ICMsgGCToClientActiveGuildContractsUpdated=} [properties] Properties to set
         * @returns {CMsgGCToClientActiveGuildContractsUpdated} CMsgGCToClientActiveGuildContractsUpdated instance
         */
        CMsgGCToClientActiveGuildContractsUpdated.create = function create(properties) {
            return new CMsgGCToClientActiveGuildContractsUpdated(properties);
        };
    
        /**
         * Encodes the specified CMsgGCToClientActiveGuildContractsUpdated message. Does not implicitly {@link CMsgGCToClientActiveGuildContractsUpdated.verify|verify} messages.
         * @function encode
         * @memberof CMsgGCToClientActiveGuildContractsUpdated
         * @static
         * @param {ICMsgGCToClientActiveGuildContractsUpdated} message CMsgGCToClientActiveGuildContractsUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCToClientActiveGuildContractsUpdated.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.event_id != null && Object.hasOwnProperty.call(message, "event_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.event_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGCToClientActiveGuildContractsUpdated message, length delimited. Does not implicitly {@link CMsgGCToClientActiveGuildContractsUpdated.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGCToClientActiveGuildContractsUpdated
         * @static
         * @param {ICMsgGCToClientActiveGuildContractsUpdated} message CMsgGCToClientActiveGuildContractsUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCToClientActiveGuildContractsUpdated.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGCToClientActiveGuildContractsUpdated message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGCToClientActiveGuildContractsUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGCToClientActiveGuildContractsUpdated} CMsgGCToClientActiveGuildContractsUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCToClientActiveGuildContractsUpdated.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCToClientActiveGuildContractsUpdated();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.event_id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGCToClientActiveGuildContractsUpdated message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGCToClientActiveGuildContractsUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGCToClientActiveGuildContractsUpdated} CMsgGCToClientActiveGuildContractsUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCToClientActiveGuildContractsUpdated.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGCToClientActiveGuildContractsUpdated message.
         * @function verify
         * @memberof CMsgGCToClientActiveGuildContractsUpdated
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGCToClientActiveGuildContractsUpdated.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                switch (message.event_id) {
                default:
                    return "event_id: enum value expected";
                case 0:
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
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgGCToClientActiveGuildContractsUpdated message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGCToClientActiveGuildContractsUpdated
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGCToClientActiveGuildContractsUpdated} CMsgGCToClientActiveGuildContractsUpdated
         */
        CMsgGCToClientActiveGuildContractsUpdated.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGCToClientActiveGuildContractsUpdated)
                return object;
            var message = new $root.CMsgGCToClientActiveGuildContractsUpdated();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            switch (object.event_id) {
            case "EVENT_ID_NONE":
            case 0:
                message.event_id = 0;
                break;
            case "EVENT_ID_DIRETIDE":
            case 1:
                message.event_id = 1;
                break;
            case "EVENT_ID_SPRING_FESTIVAL":
            case 2:
                message.event_id = 2;
                break;
            case "EVENT_ID_FROSTIVUS_2013":
            case 3:
                message.event_id = 3;
                break;
            case "EVENT_ID_COMPENDIUM_2014":
            case 4:
                message.event_id = 4;
                break;
            case "EVENT_ID_NEXON_PC_BANG":
            case 5:
                message.event_id = 5;
                break;
            case "EVENT_ID_PWRD_DAC_2015":
            case 6:
                message.event_id = 6;
                break;
            case "EVENT_ID_NEW_BLOOM_2015":
            case 7:
                message.event_id = 7;
                break;
            case "EVENT_ID_INTERNATIONAL_2015":
            case 8:
                message.event_id = 8;
                break;
            case "EVENT_ID_FALL_MAJOR_2015":
            case 9:
                message.event_id = 9;
                break;
            case "EVENT_ID_ORACLE_PA":
            case 10:
                message.event_id = 10;
                break;
            case "EVENT_ID_NEW_BLOOM_2015_PREBEAST":
            case 11:
                message.event_id = 11;
                break;
            case "EVENT_ID_FROSTIVUS":
            case 12:
                message.event_id = 12;
                break;
            case "EVENT_ID_WINTER_MAJOR_2016":
            case 13:
                message.event_id = 13;
                break;
            case "EVENT_ID_INTERNATIONAL_2016":
            case 14:
                message.event_id = 14;
                break;
            case "EVENT_ID_FALL_MAJOR_2016":
            case 15:
                message.event_id = 15;
                break;
            case "EVENT_ID_WINTER_MAJOR_2017":
            case 16:
                message.event_id = 16;
                break;
            case "EVENT_ID_NEW_BLOOM_2017":
            case 17:
                message.event_id = 17;
                break;
            case "EVENT_ID_INTERNATIONAL_2017":
            case 18:
                message.event_id = 18;
                break;
            case "EVENT_ID_PLUS_SUBSCRIPTION":
            case 19:
                message.event_id = 19;
                break;
            case "EVENT_ID_SINGLES_DAY_2017":
            case 20:
                message.event_id = 20;
                break;
            case "EVENT_ID_FROSTIVUS_2017":
            case 21:
                message.event_id = 21;
                break;
            case "EVENT_ID_INTERNATIONAL_2018":
            case 22:
                message.event_id = 22;
                break;
            case "EVENT_ID_FROSTIVUS_2018":
            case 23:
                message.event_id = 23;
                break;
            case "EVENT_ID_NEW_BLOOM_2019":
            case 24:
                message.event_id = 24;
                break;
            case "EVENT_ID_INTERNATIONAL_2019":
            case 25:
                message.event_id = 25;
                break;
            case "EVENT_ID_NEW_PLAYER_EXPERIENCE":
            case 26:
                message.event_id = 26;
                break;
            case "EVENT_ID_FROSTIVUS_2019":
            case 27:
                message.event_id = 27;
                break;
            case "EVENT_ID_NEW_BLOOM_2020":
            case 28:
                message.event_id = 28;
                break;
            case "EVENT_ID_INTERNATIONAL_2020":
            case 29:
                message.event_id = 29;
                break;
            case "EVENT_ID_TEAM_FANDOM":
            case 30:
                message.event_id = 30;
                break;
            case "EVENT_ID_DIRETIDE_2020":
            case 31:
                message.event_id = 31;
                break;
            case "EVENT_ID_COUNT":
            case 32:
                message.event_id = 32;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGCToClientActiveGuildContractsUpdated message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGCToClientActiveGuildContractsUpdated
         * @static
         * @param {CMsgGCToClientActiveGuildContractsUpdated} message CMsgGCToClientActiveGuildContractsUpdated
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGCToClientActiveGuildContractsUpdated.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.event_id = options.enums === String ? "EVENT_ID_NONE" : 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                object.event_id = options.enums === String ? $root.EEvent[message.event_id] : message.event_id;
            return object;
        };
    
        /**
         * Converts this CMsgGCToClientActiveGuildContractsUpdated to JSON.
         * @function toJSON
         * @memberof CMsgGCToClientActiveGuildContractsUpdated
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGCToClientActiveGuildContractsUpdated.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGCToClientActiveGuildContractsUpdated;
    })();
    
    $root.CMsgClientToGCSelectGuildContract = (function() {
    
        /**
         * Properties of a CMsgClientToGCSelectGuildContract.
         * @exports ICMsgClientToGCSelectGuildContract
         * @interface ICMsgClientToGCSelectGuildContract
         * @property {number|null} [guild_id] CMsgClientToGCSelectGuildContract guild_id
         * @property {EEvent|null} [event_id] CMsgClientToGCSelectGuildContract event_id
         * @property {number|Long|null} [contract_id] CMsgClientToGCSelectGuildContract contract_id
         * @property {number|null} [contract_slot] CMsgClientToGCSelectGuildContract contract_slot
         */
    
        /**
         * Constructs a new CMsgClientToGCSelectGuildContract.
         * @exports CMsgClientToGCSelectGuildContract
         * @classdesc Represents a CMsgClientToGCSelectGuildContract.
         * @implements ICMsgClientToGCSelectGuildContract
         * @constructor
         * @param {ICMsgClientToGCSelectGuildContract=} [properties] Properties to set
         */
        function CMsgClientToGCSelectGuildContract(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCSelectGuildContract guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCSelectGuildContract
         * @instance
         */
        CMsgClientToGCSelectGuildContract.prototype.guild_id = 0;
    
        /**
         * CMsgClientToGCSelectGuildContract event_id.
         * @member {EEvent} event_id
         * @memberof CMsgClientToGCSelectGuildContract
         * @instance
         */
        CMsgClientToGCSelectGuildContract.prototype.event_id = 0;
    
        /**
         * CMsgClientToGCSelectGuildContract contract_id.
         * @member {number|Long} contract_id
         * @memberof CMsgClientToGCSelectGuildContract
         * @instance
         */
        CMsgClientToGCSelectGuildContract.prototype.contract_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgClientToGCSelectGuildContract contract_slot.
         * @member {number} contract_slot
         * @memberof CMsgClientToGCSelectGuildContract
         * @instance
         */
        CMsgClientToGCSelectGuildContract.prototype.contract_slot = 0;
    
        /**
         * Creates a new CMsgClientToGCSelectGuildContract instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCSelectGuildContract
         * @static
         * @param {ICMsgClientToGCSelectGuildContract=} [properties] Properties to set
         * @returns {CMsgClientToGCSelectGuildContract} CMsgClientToGCSelectGuildContract instance
         */
        CMsgClientToGCSelectGuildContract.create = function create(properties) {
            return new CMsgClientToGCSelectGuildContract(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCSelectGuildContract message. Does not implicitly {@link CMsgClientToGCSelectGuildContract.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCSelectGuildContract
         * @static
         * @param {ICMsgClientToGCSelectGuildContract} message CMsgClientToGCSelectGuildContract message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCSelectGuildContract.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.event_id != null && Object.hasOwnProperty.call(message, "event_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.event_id);
            if (message.contract_id != null && Object.hasOwnProperty.call(message, "contract_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.contract_id);
            if (message.contract_slot != null && Object.hasOwnProperty.call(message, "contract_slot"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.contract_slot);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCSelectGuildContract message, length delimited. Does not implicitly {@link CMsgClientToGCSelectGuildContract.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCSelectGuildContract
         * @static
         * @param {ICMsgClientToGCSelectGuildContract} message CMsgClientToGCSelectGuildContract message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCSelectGuildContract.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCSelectGuildContract message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCSelectGuildContract
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCSelectGuildContract} CMsgClientToGCSelectGuildContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCSelectGuildContract.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCSelectGuildContract();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.event_id = reader.int32();
                    break;
                case 3:
                    message.contract_id = reader.uint64();
                    break;
                case 4:
                    message.contract_slot = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCSelectGuildContract message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCSelectGuildContract
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCSelectGuildContract} CMsgClientToGCSelectGuildContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCSelectGuildContract.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCSelectGuildContract message.
         * @function verify
         * @memberof CMsgClientToGCSelectGuildContract
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCSelectGuildContract.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                switch (message.event_id) {
                default:
                    return "event_id: enum value expected";
                case 0:
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
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                    break;
                }
            if (message.contract_id != null && message.hasOwnProperty("contract_id"))
                if (!$util.isInteger(message.contract_id) && !(message.contract_id && $util.isInteger(message.contract_id.low) && $util.isInteger(message.contract_id.high)))
                    return "contract_id: integer|Long expected";
            if (message.contract_slot != null && message.hasOwnProperty("contract_slot"))
                if (!$util.isInteger(message.contract_slot))
                    return "contract_slot: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCSelectGuildContract message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCSelectGuildContract
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCSelectGuildContract} CMsgClientToGCSelectGuildContract
         */
        CMsgClientToGCSelectGuildContract.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCSelectGuildContract)
                return object;
            var message = new $root.CMsgClientToGCSelectGuildContract();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            switch (object.event_id) {
            case "EVENT_ID_NONE":
            case 0:
                message.event_id = 0;
                break;
            case "EVENT_ID_DIRETIDE":
            case 1:
                message.event_id = 1;
                break;
            case "EVENT_ID_SPRING_FESTIVAL":
            case 2:
                message.event_id = 2;
                break;
            case "EVENT_ID_FROSTIVUS_2013":
            case 3:
                message.event_id = 3;
                break;
            case "EVENT_ID_COMPENDIUM_2014":
            case 4:
                message.event_id = 4;
                break;
            case "EVENT_ID_NEXON_PC_BANG":
            case 5:
                message.event_id = 5;
                break;
            case "EVENT_ID_PWRD_DAC_2015":
            case 6:
                message.event_id = 6;
                break;
            case "EVENT_ID_NEW_BLOOM_2015":
            case 7:
                message.event_id = 7;
                break;
            case "EVENT_ID_INTERNATIONAL_2015":
            case 8:
                message.event_id = 8;
                break;
            case "EVENT_ID_FALL_MAJOR_2015":
            case 9:
                message.event_id = 9;
                break;
            case "EVENT_ID_ORACLE_PA":
            case 10:
                message.event_id = 10;
                break;
            case "EVENT_ID_NEW_BLOOM_2015_PREBEAST":
            case 11:
                message.event_id = 11;
                break;
            case "EVENT_ID_FROSTIVUS":
            case 12:
                message.event_id = 12;
                break;
            case "EVENT_ID_WINTER_MAJOR_2016":
            case 13:
                message.event_id = 13;
                break;
            case "EVENT_ID_INTERNATIONAL_2016":
            case 14:
                message.event_id = 14;
                break;
            case "EVENT_ID_FALL_MAJOR_2016":
            case 15:
                message.event_id = 15;
                break;
            case "EVENT_ID_WINTER_MAJOR_2017":
            case 16:
                message.event_id = 16;
                break;
            case "EVENT_ID_NEW_BLOOM_2017":
            case 17:
                message.event_id = 17;
                break;
            case "EVENT_ID_INTERNATIONAL_2017":
            case 18:
                message.event_id = 18;
                break;
            case "EVENT_ID_PLUS_SUBSCRIPTION":
            case 19:
                message.event_id = 19;
                break;
            case "EVENT_ID_SINGLES_DAY_2017":
            case 20:
                message.event_id = 20;
                break;
            case "EVENT_ID_FROSTIVUS_2017":
            case 21:
                message.event_id = 21;
                break;
            case "EVENT_ID_INTERNATIONAL_2018":
            case 22:
                message.event_id = 22;
                break;
            case "EVENT_ID_FROSTIVUS_2018":
            case 23:
                message.event_id = 23;
                break;
            case "EVENT_ID_NEW_BLOOM_2019":
            case 24:
                message.event_id = 24;
                break;
            case "EVENT_ID_INTERNATIONAL_2019":
            case 25:
                message.event_id = 25;
                break;
            case "EVENT_ID_NEW_PLAYER_EXPERIENCE":
            case 26:
                message.event_id = 26;
                break;
            case "EVENT_ID_FROSTIVUS_2019":
            case 27:
                message.event_id = 27;
                break;
            case "EVENT_ID_NEW_BLOOM_2020":
            case 28:
                message.event_id = 28;
                break;
            case "EVENT_ID_INTERNATIONAL_2020":
            case 29:
                message.event_id = 29;
                break;
            case "EVENT_ID_TEAM_FANDOM":
            case 30:
                message.event_id = 30;
                break;
            case "EVENT_ID_DIRETIDE_2020":
            case 31:
                message.event_id = 31;
                break;
            case "EVENT_ID_COUNT":
            case 32:
                message.event_id = 32;
                break;
            }
            if (object.contract_id != null)
                if ($util.Long)
                    (message.contract_id = $util.Long.fromValue(object.contract_id)).unsigned = true;
                else if (typeof object.contract_id === "string")
                    message.contract_id = parseInt(object.contract_id, 10);
                else if (typeof object.contract_id === "number")
                    message.contract_id = object.contract_id;
                else if (typeof object.contract_id === "object")
                    message.contract_id = new $util.LongBits(object.contract_id.low >>> 0, object.contract_id.high >>> 0).toNumber(true);
            if (object.contract_slot != null)
                message.contract_slot = object.contract_slot >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCSelectGuildContract message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCSelectGuildContract
         * @static
         * @param {CMsgClientToGCSelectGuildContract} message CMsgClientToGCSelectGuildContract
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCSelectGuildContract.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.event_id = options.enums === String ? "EVENT_ID_NONE" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.contract_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.contract_id = options.longs === String ? "0" : 0;
                object.contract_slot = 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                object.event_id = options.enums === String ? $root.EEvent[message.event_id] : message.event_id;
            if (message.contract_id != null && message.hasOwnProperty("contract_id"))
                if (typeof message.contract_id === "number")
                    object.contract_id = options.longs === String ? String(message.contract_id) : message.contract_id;
                else
                    object.contract_id = options.longs === String ? $util.Long.prototype.toString.call(message.contract_id) : options.longs === Number ? new $util.LongBits(message.contract_id.low >>> 0, message.contract_id.high >>> 0).toNumber(true) : message.contract_id;
            if (message.contract_slot != null && message.hasOwnProperty("contract_slot"))
                object.contract_slot = message.contract_slot;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCSelectGuildContract to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCSelectGuildContract
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCSelectGuildContract.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCSelectGuildContract;
    })();
    
    $root.CMsgClientToGCSelectGuildContractResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCSelectGuildContractResponse.
         * @exports ICMsgClientToGCSelectGuildContractResponse
         * @interface ICMsgClientToGCSelectGuildContractResponse
         * @property {CMsgClientToGCSelectGuildContractResponse.EResponse|null} [result] CMsgClientToGCSelectGuildContractResponse result
         */
    
        /**
         * Constructs a new CMsgClientToGCSelectGuildContractResponse.
         * @exports CMsgClientToGCSelectGuildContractResponse
         * @classdesc Represents a CMsgClientToGCSelectGuildContractResponse.
         * @implements ICMsgClientToGCSelectGuildContractResponse
         * @constructor
         * @param {ICMsgClientToGCSelectGuildContractResponse=} [properties] Properties to set
         */
        function CMsgClientToGCSelectGuildContractResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCSelectGuildContractResponse result.
         * @member {CMsgClientToGCSelectGuildContractResponse.EResponse} result
         * @memberof CMsgClientToGCSelectGuildContractResponse
         * @instance
         */
        CMsgClientToGCSelectGuildContractResponse.prototype.result = 0;
    
        /**
         * Creates a new CMsgClientToGCSelectGuildContractResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCSelectGuildContractResponse
         * @static
         * @param {ICMsgClientToGCSelectGuildContractResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCSelectGuildContractResponse} CMsgClientToGCSelectGuildContractResponse instance
         */
        CMsgClientToGCSelectGuildContractResponse.create = function create(properties) {
            return new CMsgClientToGCSelectGuildContractResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCSelectGuildContractResponse message. Does not implicitly {@link CMsgClientToGCSelectGuildContractResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCSelectGuildContractResponse
         * @static
         * @param {ICMsgClientToGCSelectGuildContractResponse} message CMsgClientToGCSelectGuildContractResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCSelectGuildContractResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCSelectGuildContractResponse message, length delimited. Does not implicitly {@link CMsgClientToGCSelectGuildContractResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCSelectGuildContractResponse
         * @static
         * @param {ICMsgClientToGCSelectGuildContractResponse} message CMsgClientToGCSelectGuildContractResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCSelectGuildContractResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCSelectGuildContractResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCSelectGuildContractResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCSelectGuildContractResponse} CMsgClientToGCSelectGuildContractResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCSelectGuildContractResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCSelectGuildContractResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCSelectGuildContractResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCSelectGuildContractResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCSelectGuildContractResponse} CMsgClientToGCSelectGuildContractResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCSelectGuildContractResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCSelectGuildContractResponse message.
         * @function verify
         * @memberof CMsgClientToGCSelectGuildContractResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCSelectGuildContractResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                switch (message.result) {
                default:
                    return "result: enum value expected";
                case 0:
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
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCSelectGuildContractResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCSelectGuildContractResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCSelectGuildContractResponse} CMsgClientToGCSelectGuildContractResponse
         */
        CMsgClientToGCSelectGuildContractResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCSelectGuildContractResponse)
                return object;
            var message = new $root.CMsgClientToGCSelectGuildContractResponse();
            switch (object.result) {
            case "k_eInternalError":
            case 0:
                message.result = 0;
                break;
            case "k_eSuccess":
            case 1:
                message.result = 1;
                break;
            case "k_eTooBusy":
            case 2:
                message.result = 2;
                break;
            case "k_eDisabled":
            case 3:
                message.result = 3;
                break;
            case "k_eTimeout":
            case 4:
                message.result = 4;
                break;
            case "k_eInvalidEvent":
            case 5:
                message.result = 5;
                break;
            case "k_eInvalidGuild":
            case 6:
                message.result = 6;
                break;
            case "k_eNotMember":
            case 7:
                message.result = 7;
                break;
            case "k_eInvalidGuildEvent":
            case 8:
                message.result = 8;
                break;
            case "k_eInvalidContractID":
            case 9:
                message.result = 9;
                break;
            case "k_eAlreadyAssigned":
            case 10:
                message.result = 10;
                break;
            case "k_eInvalidContractSlot":
            case 11:
                message.result = 11;
                break;
            case "k_eContractSlotLocked":
            case 12:
                message.result = 12;
                break;
            case "k_eContractSlotCooldown":
            case 13:
                message.result = 13;
                break;
            case "k_eContractDuplicate":
            case 14:
                message.result = 14;
                break;
            case "k_eContractSlotTimeError":
            case 15:
                message.result = 15;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCSelectGuildContractResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCSelectGuildContractResponse
         * @static
         * @param {CMsgClientToGCSelectGuildContractResponse} message CMsgClientToGCSelectGuildContractResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCSelectGuildContractResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = options.enums === String ? "k_eInternalError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCSelectGuildContractResponse.EResponse[message.result] : message.result;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCSelectGuildContractResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCSelectGuildContractResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCSelectGuildContractResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCSelectGuildContractResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidEvent=5 k_eInvalidEvent value
         * @property {number} k_eInvalidGuild=6 k_eInvalidGuild value
         * @property {number} k_eNotMember=7 k_eNotMember value
         * @property {number} k_eInvalidGuildEvent=8 k_eInvalidGuildEvent value
         * @property {number} k_eInvalidContractID=9 k_eInvalidContractID value
         * @property {number} k_eAlreadyAssigned=10 k_eAlreadyAssigned value
         * @property {number} k_eInvalidContractSlot=11 k_eInvalidContractSlot value
         * @property {number} k_eContractSlotLocked=12 k_eContractSlotLocked value
         * @property {number} k_eContractSlotCooldown=13 k_eContractSlotCooldown value
         * @property {number} k_eContractDuplicate=14 k_eContractDuplicate value
         * @property {number} k_eContractSlotTimeError=15 k_eContractSlotTimeError value
         */
        CMsgClientToGCSelectGuildContractResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidEvent"] = 5;
            values[valuesById[6] = "k_eInvalidGuild"] = 6;
            values[valuesById[7] = "k_eNotMember"] = 7;
            values[valuesById[8] = "k_eInvalidGuildEvent"] = 8;
            values[valuesById[9] = "k_eInvalidContractID"] = 9;
            values[valuesById[10] = "k_eAlreadyAssigned"] = 10;
            values[valuesById[11] = "k_eInvalidContractSlot"] = 11;
            values[valuesById[12] = "k_eContractSlotLocked"] = 12;
            values[valuesById[13] = "k_eContractSlotCooldown"] = 13;
            values[valuesById[14] = "k_eContractDuplicate"] = 14;
            values[valuesById[15] = "k_eContractSlotTimeError"] = 15;
            return values;
        })();
    
        return CMsgClientToGCSelectGuildContractResponse;
    })();
    
    $root.CMsgClientToGCRequestActiveGuildChallenge = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestActiveGuildChallenge.
         * @exports ICMsgClientToGCRequestActiveGuildChallenge
         * @interface ICMsgClientToGCRequestActiveGuildChallenge
         * @property {number|null} [guild_id] CMsgClientToGCRequestActiveGuildChallenge guild_id
         * @property {EEvent|null} [event_id] CMsgClientToGCRequestActiveGuildChallenge event_id
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestActiveGuildChallenge.
         * @exports CMsgClientToGCRequestActiveGuildChallenge
         * @classdesc Represents a CMsgClientToGCRequestActiveGuildChallenge.
         * @implements ICMsgClientToGCRequestActiveGuildChallenge
         * @constructor
         * @param {ICMsgClientToGCRequestActiveGuildChallenge=} [properties] Properties to set
         */
        function CMsgClientToGCRequestActiveGuildChallenge(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestActiveGuildChallenge guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCRequestActiveGuildChallenge
         * @instance
         */
        CMsgClientToGCRequestActiveGuildChallenge.prototype.guild_id = 0;
    
        /**
         * CMsgClientToGCRequestActiveGuildChallenge event_id.
         * @member {EEvent} event_id
         * @memberof CMsgClientToGCRequestActiveGuildChallenge
         * @instance
         */
        CMsgClientToGCRequestActiveGuildChallenge.prototype.event_id = 0;
    
        /**
         * Creates a new CMsgClientToGCRequestActiveGuildChallenge instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestActiveGuildChallenge
         * @static
         * @param {ICMsgClientToGCRequestActiveGuildChallenge=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestActiveGuildChallenge} CMsgClientToGCRequestActiveGuildChallenge instance
         */
        CMsgClientToGCRequestActiveGuildChallenge.create = function create(properties) {
            return new CMsgClientToGCRequestActiveGuildChallenge(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestActiveGuildChallenge message. Does not implicitly {@link CMsgClientToGCRequestActiveGuildChallenge.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestActiveGuildChallenge
         * @static
         * @param {ICMsgClientToGCRequestActiveGuildChallenge} message CMsgClientToGCRequestActiveGuildChallenge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestActiveGuildChallenge.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.event_id != null && Object.hasOwnProperty.call(message, "event_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.event_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestActiveGuildChallenge message, length delimited. Does not implicitly {@link CMsgClientToGCRequestActiveGuildChallenge.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestActiveGuildChallenge
         * @static
         * @param {ICMsgClientToGCRequestActiveGuildChallenge} message CMsgClientToGCRequestActiveGuildChallenge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestActiveGuildChallenge.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestActiveGuildChallenge message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestActiveGuildChallenge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestActiveGuildChallenge} CMsgClientToGCRequestActiveGuildChallenge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestActiveGuildChallenge.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestActiveGuildChallenge();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.event_id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestActiveGuildChallenge message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestActiveGuildChallenge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestActiveGuildChallenge} CMsgClientToGCRequestActiveGuildChallenge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestActiveGuildChallenge.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestActiveGuildChallenge message.
         * @function verify
         * @memberof CMsgClientToGCRequestActiveGuildChallenge
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestActiveGuildChallenge.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                switch (message.event_id) {
                default:
                    return "event_id: enum value expected";
                case 0:
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
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestActiveGuildChallenge message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestActiveGuildChallenge
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestActiveGuildChallenge} CMsgClientToGCRequestActiveGuildChallenge
         */
        CMsgClientToGCRequestActiveGuildChallenge.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestActiveGuildChallenge)
                return object;
            var message = new $root.CMsgClientToGCRequestActiveGuildChallenge();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            switch (object.event_id) {
            case "EVENT_ID_NONE":
            case 0:
                message.event_id = 0;
                break;
            case "EVENT_ID_DIRETIDE":
            case 1:
                message.event_id = 1;
                break;
            case "EVENT_ID_SPRING_FESTIVAL":
            case 2:
                message.event_id = 2;
                break;
            case "EVENT_ID_FROSTIVUS_2013":
            case 3:
                message.event_id = 3;
                break;
            case "EVENT_ID_COMPENDIUM_2014":
            case 4:
                message.event_id = 4;
                break;
            case "EVENT_ID_NEXON_PC_BANG":
            case 5:
                message.event_id = 5;
                break;
            case "EVENT_ID_PWRD_DAC_2015":
            case 6:
                message.event_id = 6;
                break;
            case "EVENT_ID_NEW_BLOOM_2015":
            case 7:
                message.event_id = 7;
                break;
            case "EVENT_ID_INTERNATIONAL_2015":
            case 8:
                message.event_id = 8;
                break;
            case "EVENT_ID_FALL_MAJOR_2015":
            case 9:
                message.event_id = 9;
                break;
            case "EVENT_ID_ORACLE_PA":
            case 10:
                message.event_id = 10;
                break;
            case "EVENT_ID_NEW_BLOOM_2015_PREBEAST":
            case 11:
                message.event_id = 11;
                break;
            case "EVENT_ID_FROSTIVUS":
            case 12:
                message.event_id = 12;
                break;
            case "EVENT_ID_WINTER_MAJOR_2016":
            case 13:
                message.event_id = 13;
                break;
            case "EVENT_ID_INTERNATIONAL_2016":
            case 14:
                message.event_id = 14;
                break;
            case "EVENT_ID_FALL_MAJOR_2016":
            case 15:
                message.event_id = 15;
                break;
            case "EVENT_ID_WINTER_MAJOR_2017":
            case 16:
                message.event_id = 16;
                break;
            case "EVENT_ID_NEW_BLOOM_2017":
            case 17:
                message.event_id = 17;
                break;
            case "EVENT_ID_INTERNATIONAL_2017":
            case 18:
                message.event_id = 18;
                break;
            case "EVENT_ID_PLUS_SUBSCRIPTION":
            case 19:
                message.event_id = 19;
                break;
            case "EVENT_ID_SINGLES_DAY_2017":
            case 20:
                message.event_id = 20;
                break;
            case "EVENT_ID_FROSTIVUS_2017":
            case 21:
                message.event_id = 21;
                break;
            case "EVENT_ID_INTERNATIONAL_2018":
            case 22:
                message.event_id = 22;
                break;
            case "EVENT_ID_FROSTIVUS_2018":
            case 23:
                message.event_id = 23;
                break;
            case "EVENT_ID_NEW_BLOOM_2019":
            case 24:
                message.event_id = 24;
                break;
            case "EVENT_ID_INTERNATIONAL_2019":
            case 25:
                message.event_id = 25;
                break;
            case "EVENT_ID_NEW_PLAYER_EXPERIENCE":
            case 26:
                message.event_id = 26;
                break;
            case "EVENT_ID_FROSTIVUS_2019":
            case 27:
                message.event_id = 27;
                break;
            case "EVENT_ID_NEW_BLOOM_2020":
            case 28:
                message.event_id = 28;
                break;
            case "EVENT_ID_INTERNATIONAL_2020":
            case 29:
                message.event_id = 29;
                break;
            case "EVENT_ID_TEAM_FANDOM":
            case 30:
                message.event_id = 30;
                break;
            case "EVENT_ID_DIRETIDE_2020":
            case 31:
                message.event_id = 31;
                break;
            case "EVENT_ID_COUNT":
            case 32:
                message.event_id = 32;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestActiveGuildChallenge message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestActiveGuildChallenge
         * @static
         * @param {CMsgClientToGCRequestActiveGuildChallenge} message CMsgClientToGCRequestActiveGuildChallenge
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestActiveGuildChallenge.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.event_id = options.enums === String ? "EVENT_ID_NONE" : 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                object.event_id = options.enums === String ? $root.EEvent[message.event_id] : message.event_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestActiveGuildChallenge to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestActiveGuildChallenge
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestActiveGuildChallenge.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCRequestActiveGuildChallenge;
    })();
    
    $root.CMsgClientToGCRequestActiveGuildChallengeResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestActiveGuildChallengeResponse.
         * @exports ICMsgClientToGCRequestActiveGuildChallengeResponse
         * @interface ICMsgClientToGCRequestActiveGuildChallengeResponse
         * @property {CMsgClientToGCRequestActiveGuildChallengeResponse.EResponse|null} [result] CMsgClientToGCRequestActiveGuildChallengeResponse result
         * @property {ICMsgGuildChallenge|null} [active_challenge] CMsgClientToGCRequestActiveGuildChallengeResponse active_challenge
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestActiveGuildChallengeResponse.
         * @exports CMsgClientToGCRequestActiveGuildChallengeResponse
         * @classdesc Represents a CMsgClientToGCRequestActiveGuildChallengeResponse.
         * @implements ICMsgClientToGCRequestActiveGuildChallengeResponse
         * @constructor
         * @param {ICMsgClientToGCRequestActiveGuildChallengeResponse=} [properties] Properties to set
         */
        function CMsgClientToGCRequestActiveGuildChallengeResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestActiveGuildChallengeResponse result.
         * @member {CMsgClientToGCRequestActiveGuildChallengeResponse.EResponse} result
         * @memberof CMsgClientToGCRequestActiveGuildChallengeResponse
         * @instance
         */
        CMsgClientToGCRequestActiveGuildChallengeResponse.prototype.result = 0;
    
        /**
         * CMsgClientToGCRequestActiveGuildChallengeResponse active_challenge.
         * @member {ICMsgGuildChallenge|null|undefined} active_challenge
         * @memberof CMsgClientToGCRequestActiveGuildChallengeResponse
         * @instance
         */
        CMsgClientToGCRequestActiveGuildChallengeResponse.prototype.active_challenge = null;
    
        /**
         * Creates a new CMsgClientToGCRequestActiveGuildChallengeResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestActiveGuildChallengeResponse
         * @static
         * @param {ICMsgClientToGCRequestActiveGuildChallengeResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestActiveGuildChallengeResponse} CMsgClientToGCRequestActiveGuildChallengeResponse instance
         */
        CMsgClientToGCRequestActiveGuildChallengeResponse.create = function create(properties) {
            return new CMsgClientToGCRequestActiveGuildChallengeResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestActiveGuildChallengeResponse message. Does not implicitly {@link CMsgClientToGCRequestActiveGuildChallengeResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestActiveGuildChallengeResponse
         * @static
         * @param {ICMsgClientToGCRequestActiveGuildChallengeResponse} message CMsgClientToGCRequestActiveGuildChallengeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestActiveGuildChallengeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.active_challenge != null && Object.hasOwnProperty.call(message, "active_challenge"))
                $root.CMsgGuildChallenge.encode(message.active_challenge, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestActiveGuildChallengeResponse message, length delimited. Does not implicitly {@link CMsgClientToGCRequestActiveGuildChallengeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestActiveGuildChallengeResponse
         * @static
         * @param {ICMsgClientToGCRequestActiveGuildChallengeResponse} message CMsgClientToGCRequestActiveGuildChallengeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestActiveGuildChallengeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestActiveGuildChallengeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestActiveGuildChallengeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestActiveGuildChallengeResponse} CMsgClientToGCRequestActiveGuildChallengeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestActiveGuildChallengeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestActiveGuildChallengeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.active_challenge = $root.CMsgGuildChallenge.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestActiveGuildChallengeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestActiveGuildChallengeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestActiveGuildChallengeResponse} CMsgClientToGCRequestActiveGuildChallengeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestActiveGuildChallengeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestActiveGuildChallengeResponse message.
         * @function verify
         * @memberof CMsgClientToGCRequestActiveGuildChallengeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestActiveGuildChallengeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                switch (message.result) {
                default:
                    return "result: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
            if (message.active_challenge != null && message.hasOwnProperty("active_challenge")) {
                var error = $root.CMsgGuildChallenge.verify(message.active_challenge);
                if (error)
                    return "active_challenge." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestActiveGuildChallengeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestActiveGuildChallengeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestActiveGuildChallengeResponse} CMsgClientToGCRequestActiveGuildChallengeResponse
         */
        CMsgClientToGCRequestActiveGuildChallengeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestActiveGuildChallengeResponse)
                return object;
            var message = new $root.CMsgClientToGCRequestActiveGuildChallengeResponse();
            switch (object.result) {
            case "k_eInternalError":
            case 0:
                message.result = 0;
                break;
            case "k_eSuccess":
            case 1:
                message.result = 1;
                break;
            case "k_eTooBusy":
            case 2:
                message.result = 2;
                break;
            case "k_eDisabled":
            case 3:
                message.result = 3;
                break;
            case "k_eTimeout":
            case 4:
                message.result = 4;
                break;
            case "k_eInvalidEvent":
            case 5:
                message.result = 5;
                break;
            case "k_eInvalidGuild":
            case 6:
                message.result = 6;
                break;
            case "k_eNotMember":
            case 7:
                message.result = 7;
                break;
            case "k_eInvalidGuildEvent":
            case 8:
                message.result = 8;
                break;
            }
            if (object.active_challenge != null) {
                if (typeof object.active_challenge !== "object")
                    throw TypeError(".CMsgClientToGCRequestActiveGuildChallengeResponse.active_challenge: object expected");
                message.active_challenge = $root.CMsgGuildChallenge.fromObject(object.active_challenge);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestActiveGuildChallengeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestActiveGuildChallengeResponse
         * @static
         * @param {CMsgClientToGCRequestActiveGuildChallengeResponse} message CMsgClientToGCRequestActiveGuildChallengeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestActiveGuildChallengeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = options.enums === String ? "k_eInternalError" : 0;
                object.active_challenge = null;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCRequestActiveGuildChallengeResponse.EResponse[message.result] : message.result;
            if (message.active_challenge != null && message.hasOwnProperty("active_challenge"))
                object.active_challenge = $root.CMsgGuildChallenge.toObject(message.active_challenge, options);
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestActiveGuildChallengeResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestActiveGuildChallengeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestActiveGuildChallengeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCRequestActiveGuildChallengeResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidEvent=5 k_eInvalidEvent value
         * @property {number} k_eInvalidGuild=6 k_eInvalidGuild value
         * @property {number} k_eNotMember=7 k_eNotMember value
         * @property {number} k_eInvalidGuildEvent=8 k_eInvalidGuildEvent value
         */
        CMsgClientToGCRequestActiveGuildChallengeResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidEvent"] = 5;
            values[valuesById[6] = "k_eInvalidGuild"] = 6;
            values[valuesById[7] = "k_eNotMember"] = 7;
            values[valuesById[8] = "k_eInvalidGuildEvent"] = 8;
            return values;
        })();
    
        return CMsgClientToGCRequestActiveGuildChallengeResponse;
    })();
    
    $root.CMsgGCToClientActiveGuildChallengeUpdated = (function() {
    
        /**
         * Properties of a CMsgGCToClientActiveGuildChallengeUpdated.
         * @exports ICMsgGCToClientActiveGuildChallengeUpdated
         * @interface ICMsgGCToClientActiveGuildChallengeUpdated
         * @property {number|null} [guild_id] CMsgGCToClientActiveGuildChallengeUpdated guild_id
         * @property {EEvent|null} [event_id] CMsgGCToClientActiveGuildChallengeUpdated event_id
         * @property {ICMsgGuildChallenge|null} [active_challenge] CMsgGCToClientActiveGuildChallengeUpdated active_challenge
         */
    
        /**
         * Constructs a new CMsgGCToClientActiveGuildChallengeUpdated.
         * @exports CMsgGCToClientActiveGuildChallengeUpdated
         * @classdesc Represents a CMsgGCToClientActiveGuildChallengeUpdated.
         * @implements ICMsgGCToClientActiveGuildChallengeUpdated
         * @constructor
         * @param {ICMsgGCToClientActiveGuildChallengeUpdated=} [properties] Properties to set
         */
        function CMsgGCToClientActiveGuildChallengeUpdated(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGCToClientActiveGuildChallengeUpdated guild_id.
         * @member {number} guild_id
         * @memberof CMsgGCToClientActiveGuildChallengeUpdated
         * @instance
         */
        CMsgGCToClientActiveGuildChallengeUpdated.prototype.guild_id = 0;
    
        /**
         * CMsgGCToClientActiveGuildChallengeUpdated event_id.
         * @member {EEvent} event_id
         * @memberof CMsgGCToClientActiveGuildChallengeUpdated
         * @instance
         */
        CMsgGCToClientActiveGuildChallengeUpdated.prototype.event_id = 0;
    
        /**
         * CMsgGCToClientActiveGuildChallengeUpdated active_challenge.
         * @member {ICMsgGuildChallenge|null|undefined} active_challenge
         * @memberof CMsgGCToClientActiveGuildChallengeUpdated
         * @instance
         */
        CMsgGCToClientActiveGuildChallengeUpdated.prototype.active_challenge = null;
    
        /**
         * Creates a new CMsgGCToClientActiveGuildChallengeUpdated instance using the specified properties.
         * @function create
         * @memberof CMsgGCToClientActiveGuildChallengeUpdated
         * @static
         * @param {ICMsgGCToClientActiveGuildChallengeUpdated=} [properties] Properties to set
         * @returns {CMsgGCToClientActiveGuildChallengeUpdated} CMsgGCToClientActiveGuildChallengeUpdated instance
         */
        CMsgGCToClientActiveGuildChallengeUpdated.create = function create(properties) {
            return new CMsgGCToClientActiveGuildChallengeUpdated(properties);
        };
    
        /**
         * Encodes the specified CMsgGCToClientActiveGuildChallengeUpdated message. Does not implicitly {@link CMsgGCToClientActiveGuildChallengeUpdated.verify|verify} messages.
         * @function encode
         * @memberof CMsgGCToClientActiveGuildChallengeUpdated
         * @static
         * @param {ICMsgGCToClientActiveGuildChallengeUpdated} message CMsgGCToClientActiveGuildChallengeUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCToClientActiveGuildChallengeUpdated.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.event_id != null && Object.hasOwnProperty.call(message, "event_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.event_id);
            if (message.active_challenge != null && Object.hasOwnProperty.call(message, "active_challenge"))
                $root.CMsgGuildChallenge.encode(message.active_challenge, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGCToClientActiveGuildChallengeUpdated message, length delimited. Does not implicitly {@link CMsgGCToClientActiveGuildChallengeUpdated.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGCToClientActiveGuildChallengeUpdated
         * @static
         * @param {ICMsgGCToClientActiveGuildChallengeUpdated} message CMsgGCToClientActiveGuildChallengeUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCToClientActiveGuildChallengeUpdated.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGCToClientActiveGuildChallengeUpdated message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGCToClientActiveGuildChallengeUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGCToClientActiveGuildChallengeUpdated} CMsgGCToClientActiveGuildChallengeUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCToClientActiveGuildChallengeUpdated.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCToClientActiveGuildChallengeUpdated();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.event_id = reader.int32();
                    break;
                case 3:
                    message.active_challenge = $root.CMsgGuildChallenge.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGCToClientActiveGuildChallengeUpdated message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGCToClientActiveGuildChallengeUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGCToClientActiveGuildChallengeUpdated} CMsgGCToClientActiveGuildChallengeUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCToClientActiveGuildChallengeUpdated.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGCToClientActiveGuildChallengeUpdated message.
         * @function verify
         * @memberof CMsgGCToClientActiveGuildChallengeUpdated
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGCToClientActiveGuildChallengeUpdated.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                switch (message.event_id) {
                default:
                    return "event_id: enum value expected";
                case 0:
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
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                    break;
                }
            if (message.active_challenge != null && message.hasOwnProperty("active_challenge")) {
                var error = $root.CMsgGuildChallenge.verify(message.active_challenge);
                if (error)
                    return "active_challenge." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgGCToClientActiveGuildChallengeUpdated message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGCToClientActiveGuildChallengeUpdated
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGCToClientActiveGuildChallengeUpdated} CMsgGCToClientActiveGuildChallengeUpdated
         */
        CMsgGCToClientActiveGuildChallengeUpdated.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGCToClientActiveGuildChallengeUpdated)
                return object;
            var message = new $root.CMsgGCToClientActiveGuildChallengeUpdated();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            switch (object.event_id) {
            case "EVENT_ID_NONE":
            case 0:
                message.event_id = 0;
                break;
            case "EVENT_ID_DIRETIDE":
            case 1:
                message.event_id = 1;
                break;
            case "EVENT_ID_SPRING_FESTIVAL":
            case 2:
                message.event_id = 2;
                break;
            case "EVENT_ID_FROSTIVUS_2013":
            case 3:
                message.event_id = 3;
                break;
            case "EVENT_ID_COMPENDIUM_2014":
            case 4:
                message.event_id = 4;
                break;
            case "EVENT_ID_NEXON_PC_BANG":
            case 5:
                message.event_id = 5;
                break;
            case "EVENT_ID_PWRD_DAC_2015":
            case 6:
                message.event_id = 6;
                break;
            case "EVENT_ID_NEW_BLOOM_2015":
            case 7:
                message.event_id = 7;
                break;
            case "EVENT_ID_INTERNATIONAL_2015":
            case 8:
                message.event_id = 8;
                break;
            case "EVENT_ID_FALL_MAJOR_2015":
            case 9:
                message.event_id = 9;
                break;
            case "EVENT_ID_ORACLE_PA":
            case 10:
                message.event_id = 10;
                break;
            case "EVENT_ID_NEW_BLOOM_2015_PREBEAST":
            case 11:
                message.event_id = 11;
                break;
            case "EVENT_ID_FROSTIVUS":
            case 12:
                message.event_id = 12;
                break;
            case "EVENT_ID_WINTER_MAJOR_2016":
            case 13:
                message.event_id = 13;
                break;
            case "EVENT_ID_INTERNATIONAL_2016":
            case 14:
                message.event_id = 14;
                break;
            case "EVENT_ID_FALL_MAJOR_2016":
            case 15:
                message.event_id = 15;
                break;
            case "EVENT_ID_WINTER_MAJOR_2017":
            case 16:
                message.event_id = 16;
                break;
            case "EVENT_ID_NEW_BLOOM_2017":
            case 17:
                message.event_id = 17;
                break;
            case "EVENT_ID_INTERNATIONAL_2017":
            case 18:
                message.event_id = 18;
                break;
            case "EVENT_ID_PLUS_SUBSCRIPTION":
            case 19:
                message.event_id = 19;
                break;
            case "EVENT_ID_SINGLES_DAY_2017":
            case 20:
                message.event_id = 20;
                break;
            case "EVENT_ID_FROSTIVUS_2017":
            case 21:
                message.event_id = 21;
                break;
            case "EVENT_ID_INTERNATIONAL_2018":
            case 22:
                message.event_id = 22;
                break;
            case "EVENT_ID_FROSTIVUS_2018":
            case 23:
                message.event_id = 23;
                break;
            case "EVENT_ID_NEW_BLOOM_2019":
            case 24:
                message.event_id = 24;
                break;
            case "EVENT_ID_INTERNATIONAL_2019":
            case 25:
                message.event_id = 25;
                break;
            case "EVENT_ID_NEW_PLAYER_EXPERIENCE":
            case 26:
                message.event_id = 26;
                break;
            case "EVENT_ID_FROSTIVUS_2019":
            case 27:
                message.event_id = 27;
                break;
            case "EVENT_ID_NEW_BLOOM_2020":
            case 28:
                message.event_id = 28;
                break;
            case "EVENT_ID_INTERNATIONAL_2020":
            case 29:
                message.event_id = 29;
                break;
            case "EVENT_ID_TEAM_FANDOM":
            case 30:
                message.event_id = 30;
                break;
            case "EVENT_ID_DIRETIDE_2020":
            case 31:
                message.event_id = 31;
                break;
            case "EVENT_ID_COUNT":
            case 32:
                message.event_id = 32;
                break;
            }
            if (object.active_challenge != null) {
                if (typeof object.active_challenge !== "object")
                    throw TypeError(".CMsgGCToClientActiveGuildChallengeUpdated.active_challenge: object expected");
                message.active_challenge = $root.CMsgGuildChallenge.fromObject(object.active_challenge);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGCToClientActiveGuildChallengeUpdated message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGCToClientActiveGuildChallengeUpdated
         * @static
         * @param {CMsgGCToClientActiveGuildChallengeUpdated} message CMsgGCToClientActiveGuildChallengeUpdated
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGCToClientActiveGuildChallengeUpdated.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.event_id = options.enums === String ? "EVENT_ID_NONE" : 0;
                object.active_challenge = null;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                object.event_id = options.enums === String ? $root.EEvent[message.event_id] : message.event_id;
            if (message.active_challenge != null && message.hasOwnProperty("active_challenge"))
                object.active_challenge = $root.CMsgGuildChallenge.toObject(message.active_challenge, options);
            return object;
        };
    
        /**
         * Converts this CMsgGCToClientActiveGuildChallengeUpdated to JSON.
         * @function toJSON
         * @memberof CMsgGCToClientActiveGuildChallengeUpdated
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGCToClientActiveGuildChallengeUpdated.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGCToClientActiveGuildChallengeUpdated;
    })();
    
    $root.CMsgClientToGCRequestGuildEventMembers = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestGuildEventMembers.
         * @exports ICMsgClientToGCRequestGuildEventMembers
         * @interface ICMsgClientToGCRequestGuildEventMembers
         * @property {number|null} [guild_id] CMsgClientToGCRequestGuildEventMembers guild_id
         * @property {EEvent|null} [event_id] CMsgClientToGCRequestGuildEventMembers event_id
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestGuildEventMembers.
         * @exports CMsgClientToGCRequestGuildEventMembers
         * @classdesc Represents a CMsgClientToGCRequestGuildEventMembers.
         * @implements ICMsgClientToGCRequestGuildEventMembers
         * @constructor
         * @param {ICMsgClientToGCRequestGuildEventMembers=} [properties] Properties to set
         */
        function CMsgClientToGCRequestGuildEventMembers(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestGuildEventMembers guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCRequestGuildEventMembers
         * @instance
         */
        CMsgClientToGCRequestGuildEventMembers.prototype.guild_id = 0;
    
        /**
         * CMsgClientToGCRequestGuildEventMembers event_id.
         * @member {EEvent} event_id
         * @memberof CMsgClientToGCRequestGuildEventMembers
         * @instance
         */
        CMsgClientToGCRequestGuildEventMembers.prototype.event_id = 0;
    
        /**
         * Creates a new CMsgClientToGCRequestGuildEventMembers instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestGuildEventMembers
         * @static
         * @param {ICMsgClientToGCRequestGuildEventMembers=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestGuildEventMembers} CMsgClientToGCRequestGuildEventMembers instance
         */
        CMsgClientToGCRequestGuildEventMembers.create = function create(properties) {
            return new CMsgClientToGCRequestGuildEventMembers(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildEventMembers message. Does not implicitly {@link CMsgClientToGCRequestGuildEventMembers.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestGuildEventMembers
         * @static
         * @param {ICMsgClientToGCRequestGuildEventMembers} message CMsgClientToGCRequestGuildEventMembers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildEventMembers.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.event_id != null && Object.hasOwnProperty.call(message, "event_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.event_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildEventMembers message, length delimited. Does not implicitly {@link CMsgClientToGCRequestGuildEventMembers.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestGuildEventMembers
         * @static
         * @param {ICMsgClientToGCRequestGuildEventMembers} message CMsgClientToGCRequestGuildEventMembers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildEventMembers.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestGuildEventMembers message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestGuildEventMembers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestGuildEventMembers} CMsgClientToGCRequestGuildEventMembers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildEventMembers.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestGuildEventMembers();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.event_id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestGuildEventMembers message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestGuildEventMembers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestGuildEventMembers} CMsgClientToGCRequestGuildEventMembers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildEventMembers.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestGuildEventMembers message.
         * @function verify
         * @memberof CMsgClientToGCRequestGuildEventMembers
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestGuildEventMembers.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                switch (message.event_id) {
                default:
                    return "event_id: enum value expected";
                case 0:
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
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestGuildEventMembers message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestGuildEventMembers
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestGuildEventMembers} CMsgClientToGCRequestGuildEventMembers
         */
        CMsgClientToGCRequestGuildEventMembers.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestGuildEventMembers)
                return object;
            var message = new $root.CMsgClientToGCRequestGuildEventMembers();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            switch (object.event_id) {
            case "EVENT_ID_NONE":
            case 0:
                message.event_id = 0;
                break;
            case "EVENT_ID_DIRETIDE":
            case 1:
                message.event_id = 1;
                break;
            case "EVENT_ID_SPRING_FESTIVAL":
            case 2:
                message.event_id = 2;
                break;
            case "EVENT_ID_FROSTIVUS_2013":
            case 3:
                message.event_id = 3;
                break;
            case "EVENT_ID_COMPENDIUM_2014":
            case 4:
                message.event_id = 4;
                break;
            case "EVENT_ID_NEXON_PC_BANG":
            case 5:
                message.event_id = 5;
                break;
            case "EVENT_ID_PWRD_DAC_2015":
            case 6:
                message.event_id = 6;
                break;
            case "EVENT_ID_NEW_BLOOM_2015":
            case 7:
                message.event_id = 7;
                break;
            case "EVENT_ID_INTERNATIONAL_2015":
            case 8:
                message.event_id = 8;
                break;
            case "EVENT_ID_FALL_MAJOR_2015":
            case 9:
                message.event_id = 9;
                break;
            case "EVENT_ID_ORACLE_PA":
            case 10:
                message.event_id = 10;
                break;
            case "EVENT_ID_NEW_BLOOM_2015_PREBEAST":
            case 11:
                message.event_id = 11;
                break;
            case "EVENT_ID_FROSTIVUS":
            case 12:
                message.event_id = 12;
                break;
            case "EVENT_ID_WINTER_MAJOR_2016":
            case 13:
                message.event_id = 13;
                break;
            case "EVENT_ID_INTERNATIONAL_2016":
            case 14:
                message.event_id = 14;
                break;
            case "EVENT_ID_FALL_MAJOR_2016":
            case 15:
                message.event_id = 15;
                break;
            case "EVENT_ID_WINTER_MAJOR_2017":
            case 16:
                message.event_id = 16;
                break;
            case "EVENT_ID_NEW_BLOOM_2017":
            case 17:
                message.event_id = 17;
                break;
            case "EVENT_ID_INTERNATIONAL_2017":
            case 18:
                message.event_id = 18;
                break;
            case "EVENT_ID_PLUS_SUBSCRIPTION":
            case 19:
                message.event_id = 19;
                break;
            case "EVENT_ID_SINGLES_DAY_2017":
            case 20:
                message.event_id = 20;
                break;
            case "EVENT_ID_FROSTIVUS_2017":
            case 21:
                message.event_id = 21;
                break;
            case "EVENT_ID_INTERNATIONAL_2018":
            case 22:
                message.event_id = 22;
                break;
            case "EVENT_ID_FROSTIVUS_2018":
            case 23:
                message.event_id = 23;
                break;
            case "EVENT_ID_NEW_BLOOM_2019":
            case 24:
                message.event_id = 24;
                break;
            case "EVENT_ID_INTERNATIONAL_2019":
            case 25:
                message.event_id = 25;
                break;
            case "EVENT_ID_NEW_PLAYER_EXPERIENCE":
            case 26:
                message.event_id = 26;
                break;
            case "EVENT_ID_FROSTIVUS_2019":
            case 27:
                message.event_id = 27;
                break;
            case "EVENT_ID_NEW_BLOOM_2020":
            case 28:
                message.event_id = 28;
                break;
            case "EVENT_ID_INTERNATIONAL_2020":
            case 29:
                message.event_id = 29;
                break;
            case "EVENT_ID_TEAM_FANDOM":
            case 30:
                message.event_id = 30;
                break;
            case "EVENT_ID_DIRETIDE_2020":
            case 31:
                message.event_id = 31;
                break;
            case "EVENT_ID_COUNT":
            case 32:
                message.event_id = 32;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestGuildEventMembers message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestGuildEventMembers
         * @static
         * @param {CMsgClientToGCRequestGuildEventMembers} message CMsgClientToGCRequestGuildEventMembers
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestGuildEventMembers.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.event_id = options.enums === String ? "EVENT_ID_NONE" : 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                object.event_id = options.enums === String ? $root.EEvent[message.event_id] : message.event_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestGuildEventMembers to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestGuildEventMembers
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestGuildEventMembers.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCRequestGuildEventMembers;
    })();
    
    $root.CMsgClientToGCRequestGuildEventMembersResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestGuildEventMembersResponse.
         * @exports ICMsgClientToGCRequestGuildEventMembersResponse
         * @interface ICMsgClientToGCRequestGuildEventMembersResponse
         * @property {CMsgClientToGCRequestGuildEventMembersResponse.EResponse|null} [result] CMsgClientToGCRequestGuildEventMembersResponse result
         * @property {Array.<ICMsgGuildEventMember>|null} [members] CMsgClientToGCRequestGuildEventMembersResponse members
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestGuildEventMembersResponse.
         * @exports CMsgClientToGCRequestGuildEventMembersResponse
         * @classdesc Represents a CMsgClientToGCRequestGuildEventMembersResponse.
         * @implements ICMsgClientToGCRequestGuildEventMembersResponse
         * @constructor
         * @param {ICMsgClientToGCRequestGuildEventMembersResponse=} [properties] Properties to set
         */
        function CMsgClientToGCRequestGuildEventMembersResponse(properties) {
            this.members = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestGuildEventMembersResponse result.
         * @member {CMsgClientToGCRequestGuildEventMembersResponse.EResponse} result
         * @memberof CMsgClientToGCRequestGuildEventMembersResponse
         * @instance
         */
        CMsgClientToGCRequestGuildEventMembersResponse.prototype.result = 0;
    
        /**
         * CMsgClientToGCRequestGuildEventMembersResponse members.
         * @member {Array.<ICMsgGuildEventMember>} members
         * @memberof CMsgClientToGCRequestGuildEventMembersResponse
         * @instance
         */
        CMsgClientToGCRequestGuildEventMembersResponse.prototype.members = $util.emptyArray;
    
        /**
         * Creates a new CMsgClientToGCRequestGuildEventMembersResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestGuildEventMembersResponse
         * @static
         * @param {ICMsgClientToGCRequestGuildEventMembersResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestGuildEventMembersResponse} CMsgClientToGCRequestGuildEventMembersResponse instance
         */
        CMsgClientToGCRequestGuildEventMembersResponse.create = function create(properties) {
            return new CMsgClientToGCRequestGuildEventMembersResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildEventMembersResponse message. Does not implicitly {@link CMsgClientToGCRequestGuildEventMembersResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestGuildEventMembersResponse
         * @static
         * @param {ICMsgClientToGCRequestGuildEventMembersResponse} message CMsgClientToGCRequestGuildEventMembersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildEventMembersResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.members != null && message.members.length)
                for (var i = 0; i < message.members.length; ++i)
                    $root.CMsgGuildEventMember.encode(message.members[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildEventMembersResponse message, length delimited. Does not implicitly {@link CMsgClientToGCRequestGuildEventMembersResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestGuildEventMembersResponse
         * @static
         * @param {ICMsgClientToGCRequestGuildEventMembersResponse} message CMsgClientToGCRequestGuildEventMembersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildEventMembersResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestGuildEventMembersResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestGuildEventMembersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestGuildEventMembersResponse} CMsgClientToGCRequestGuildEventMembersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildEventMembersResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestGuildEventMembersResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    if (!(message.members && message.members.length))
                        message.members = [];
                    message.members.push($root.CMsgGuildEventMember.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestGuildEventMembersResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestGuildEventMembersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestGuildEventMembersResponse} CMsgClientToGCRequestGuildEventMembersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildEventMembersResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestGuildEventMembersResponse message.
         * @function verify
         * @memberof CMsgClientToGCRequestGuildEventMembersResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestGuildEventMembersResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                switch (message.result) {
                default:
                    return "result: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
            if (message.members != null && message.hasOwnProperty("members")) {
                if (!Array.isArray(message.members))
                    return "members: array expected";
                for (var i = 0; i < message.members.length; ++i) {
                    var error = $root.CMsgGuildEventMember.verify(message.members[i]);
                    if (error)
                        return "members." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestGuildEventMembersResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestGuildEventMembersResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestGuildEventMembersResponse} CMsgClientToGCRequestGuildEventMembersResponse
         */
        CMsgClientToGCRequestGuildEventMembersResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestGuildEventMembersResponse)
                return object;
            var message = new $root.CMsgClientToGCRequestGuildEventMembersResponse();
            switch (object.result) {
            case "k_eInternalError":
            case 0:
                message.result = 0;
                break;
            case "k_eSuccess":
            case 1:
                message.result = 1;
                break;
            case "k_eTooBusy":
            case 2:
                message.result = 2;
                break;
            case "k_eDisabled":
            case 3:
                message.result = 3;
                break;
            case "k_eTimeout":
            case 4:
                message.result = 4;
                break;
            case "k_eInvalidEvent":
            case 5:
                message.result = 5;
                break;
            case "k_eInvalidGuild":
            case 6:
                message.result = 6;
                break;
            case "k_eNotMember":
            case 7:
                message.result = 7;
                break;
            case "k_eInvalidGuildEvent":
            case 8:
                message.result = 8;
                break;
            }
            if (object.members) {
                if (!Array.isArray(object.members))
                    throw TypeError(".CMsgClientToGCRequestGuildEventMembersResponse.members: array expected");
                message.members = [];
                for (var i = 0; i < object.members.length; ++i) {
                    if (typeof object.members[i] !== "object")
                        throw TypeError(".CMsgClientToGCRequestGuildEventMembersResponse.members: object expected");
                    message.members[i] = $root.CMsgGuildEventMember.fromObject(object.members[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestGuildEventMembersResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestGuildEventMembersResponse
         * @static
         * @param {CMsgClientToGCRequestGuildEventMembersResponse} message CMsgClientToGCRequestGuildEventMembersResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestGuildEventMembersResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.members = [];
            if (options.defaults)
                object.result = options.enums === String ? "k_eInternalError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCRequestGuildEventMembersResponse.EResponse[message.result] : message.result;
            if (message.members && message.members.length) {
                object.members = [];
                for (var j = 0; j < message.members.length; ++j)
                    object.members[j] = $root.CMsgGuildEventMember.toObject(message.members[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestGuildEventMembersResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestGuildEventMembersResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestGuildEventMembersResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCRequestGuildEventMembersResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidEvent=5 k_eInvalidEvent value
         * @property {number} k_eInvalidGuild=6 k_eInvalidGuild value
         * @property {number} k_eNotMember=7 k_eNotMember value
         * @property {number} k_eInvalidGuildEvent=8 k_eInvalidGuildEvent value
         */
        CMsgClientToGCRequestGuildEventMembersResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidEvent"] = 5;
            values[valuesById[6] = "k_eInvalidGuild"] = 6;
            values[valuesById[7] = "k_eNotMember"] = 7;
            values[valuesById[8] = "k_eInvalidGuildEvent"] = 8;
            return values;
        })();
    
        return CMsgClientToGCRequestGuildEventMembersResponse;
    })();
    
    /**
     * DOTA_GameMode enum.
     * @exports DOTA_GameMode
     * @enum {number}
     * @property {number} DOTA_GAMEMODE_NONE=0 DOTA_GAMEMODE_NONE value
     * @property {number} DOTA_GAMEMODE_AP=1 DOTA_GAMEMODE_AP value
     * @property {number} DOTA_GAMEMODE_CM=2 DOTA_GAMEMODE_CM value
     * @property {number} DOTA_GAMEMODE_RD=3 DOTA_GAMEMODE_RD value
     * @property {number} DOTA_GAMEMODE_SD=4 DOTA_GAMEMODE_SD value
     * @property {number} DOTA_GAMEMODE_AR=5 DOTA_GAMEMODE_AR value
     * @property {number} DOTA_GAMEMODE_INTRO=6 DOTA_GAMEMODE_INTRO value
     * @property {number} DOTA_GAMEMODE_HW=7 DOTA_GAMEMODE_HW value
     * @property {number} DOTA_GAMEMODE_REVERSE_CM=8 DOTA_GAMEMODE_REVERSE_CM value
     * @property {number} DOTA_GAMEMODE_XMAS=9 DOTA_GAMEMODE_XMAS value
     * @property {number} DOTA_GAMEMODE_TUTORIAL=10 DOTA_GAMEMODE_TUTORIAL value
     * @property {number} DOTA_GAMEMODE_MO=11 DOTA_GAMEMODE_MO value
     * @property {number} DOTA_GAMEMODE_LP=12 DOTA_GAMEMODE_LP value
     * @property {number} DOTA_GAMEMODE_POOL1=13 DOTA_GAMEMODE_POOL1 value
     * @property {number} DOTA_GAMEMODE_FH=14 DOTA_GAMEMODE_FH value
     * @property {number} DOTA_GAMEMODE_CUSTOM=15 DOTA_GAMEMODE_CUSTOM value
     * @property {number} DOTA_GAMEMODE_CD=16 DOTA_GAMEMODE_CD value
     * @property {number} DOTA_GAMEMODE_BD=17 DOTA_GAMEMODE_BD value
     * @property {number} DOTA_GAMEMODE_ABILITY_DRAFT=18 DOTA_GAMEMODE_ABILITY_DRAFT value
     * @property {number} DOTA_GAMEMODE_EVENT=19 DOTA_GAMEMODE_EVENT value
     * @property {number} DOTA_GAMEMODE_ARDM=20 DOTA_GAMEMODE_ARDM value
     * @property {number} DOTA_GAMEMODE_1V1MID=21 DOTA_GAMEMODE_1V1MID value
     * @property {number} DOTA_GAMEMODE_ALL_DRAFT=22 DOTA_GAMEMODE_ALL_DRAFT value
     * @property {number} DOTA_GAMEMODE_TURBO=23 DOTA_GAMEMODE_TURBO value
     * @property {number} DOTA_GAMEMODE_MUTATION=24 DOTA_GAMEMODE_MUTATION value
     * @property {number} DOTA_GAMEMODE_COACHES_CHALLENGE=25 DOTA_GAMEMODE_COACHES_CHALLENGE value
     */
    $root.DOTA_GameMode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DOTA_GAMEMODE_NONE"] = 0;
        values[valuesById[1] = "DOTA_GAMEMODE_AP"] = 1;
        values[valuesById[2] = "DOTA_GAMEMODE_CM"] = 2;
        values[valuesById[3] = "DOTA_GAMEMODE_RD"] = 3;
        values[valuesById[4] = "DOTA_GAMEMODE_SD"] = 4;
        values[valuesById[5] = "DOTA_GAMEMODE_AR"] = 5;
        values[valuesById[6] = "DOTA_GAMEMODE_INTRO"] = 6;
        values[valuesById[7] = "DOTA_GAMEMODE_HW"] = 7;
        values[valuesById[8] = "DOTA_GAMEMODE_REVERSE_CM"] = 8;
        values[valuesById[9] = "DOTA_GAMEMODE_XMAS"] = 9;
        values[valuesById[10] = "DOTA_GAMEMODE_TUTORIAL"] = 10;
        values[valuesById[11] = "DOTA_GAMEMODE_MO"] = 11;
        values[valuesById[12] = "DOTA_GAMEMODE_LP"] = 12;
        values[valuesById[13] = "DOTA_GAMEMODE_POOL1"] = 13;
        values[valuesById[14] = "DOTA_GAMEMODE_FH"] = 14;
        values[valuesById[15] = "DOTA_GAMEMODE_CUSTOM"] = 15;
        values[valuesById[16] = "DOTA_GAMEMODE_CD"] = 16;
        values[valuesById[17] = "DOTA_GAMEMODE_BD"] = 17;
        values[valuesById[18] = "DOTA_GAMEMODE_ABILITY_DRAFT"] = 18;
        values[valuesById[19] = "DOTA_GAMEMODE_EVENT"] = 19;
        values[valuesById[20] = "DOTA_GAMEMODE_ARDM"] = 20;
        values[valuesById[21] = "DOTA_GAMEMODE_1V1MID"] = 21;
        values[valuesById[22] = "DOTA_GAMEMODE_ALL_DRAFT"] = 22;
        values[valuesById[23] = "DOTA_GAMEMODE_TURBO"] = 23;
        values[valuesById[24] = "DOTA_GAMEMODE_MUTATION"] = 24;
        values[valuesById[25] = "DOTA_GAMEMODE_COACHES_CHALLENGE"] = 25;
        return values;
    })();
    
    /**
     * DOTA_GameState enum.
     * @exports DOTA_GameState
     * @enum {number}
     * @property {number} DOTA_GAMERULES_STATE_INIT=0 DOTA_GAMERULES_STATE_INIT value
     * @property {number} DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD=1 DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD value
     * @property {number} DOTA_GAMERULES_STATE_HERO_SELECTION=2 DOTA_GAMERULES_STATE_HERO_SELECTION value
     * @property {number} DOTA_GAMERULES_STATE_STRATEGY_TIME=3 DOTA_GAMERULES_STATE_STRATEGY_TIME value
     * @property {number} DOTA_GAMERULES_STATE_PRE_GAME=4 DOTA_GAMERULES_STATE_PRE_GAME value
     * @property {number} DOTA_GAMERULES_STATE_GAME_IN_PROGRESS=5 DOTA_GAMERULES_STATE_GAME_IN_PROGRESS value
     * @property {number} DOTA_GAMERULES_STATE_POST_GAME=6 DOTA_GAMERULES_STATE_POST_GAME value
     * @property {number} DOTA_GAMERULES_STATE_DISCONNECT=7 DOTA_GAMERULES_STATE_DISCONNECT value
     * @property {number} DOTA_GAMERULES_STATE_TEAM_SHOWCASE=8 DOTA_GAMERULES_STATE_TEAM_SHOWCASE value
     * @property {number} DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP=9 DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP value
     * @property {number} DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD=10 DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD value
     * @property {number} DOTA_GAMERULES_STATE_LAST=11 DOTA_GAMERULES_STATE_LAST value
     */
    $root.DOTA_GameState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DOTA_GAMERULES_STATE_INIT"] = 0;
        values[valuesById[1] = "DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD"] = 1;
        values[valuesById[2] = "DOTA_GAMERULES_STATE_HERO_SELECTION"] = 2;
        values[valuesById[3] = "DOTA_GAMERULES_STATE_STRATEGY_TIME"] = 3;
        values[valuesById[4] = "DOTA_GAMERULES_STATE_PRE_GAME"] = 4;
        values[valuesById[5] = "DOTA_GAMERULES_STATE_GAME_IN_PROGRESS"] = 5;
        values[valuesById[6] = "DOTA_GAMERULES_STATE_POST_GAME"] = 6;
        values[valuesById[7] = "DOTA_GAMERULES_STATE_DISCONNECT"] = 7;
        values[valuesById[8] = "DOTA_GAMERULES_STATE_TEAM_SHOWCASE"] = 8;
        values[valuesById[9] = "DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP"] = 9;
        values[valuesById[10] = "DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD"] = 10;
        values[valuesById[11] = "DOTA_GAMERULES_STATE_LAST"] = 11;
        return values;
    })();
    
    /**
     * DOTA_GC_TEAM enum.
     * @exports DOTA_GC_TEAM
     * @enum {number}
     * @property {number} DOTA_GC_TEAM_GOOD_GUYS=0 DOTA_GC_TEAM_GOOD_GUYS value
     * @property {number} DOTA_GC_TEAM_BAD_GUYS=1 DOTA_GC_TEAM_BAD_GUYS value
     * @property {number} DOTA_GC_TEAM_BROADCASTER=2 DOTA_GC_TEAM_BROADCASTER value
     * @property {number} DOTA_GC_TEAM_SPECTATOR=3 DOTA_GC_TEAM_SPECTATOR value
     * @property {number} DOTA_GC_TEAM_PLAYER_POOL=4 DOTA_GC_TEAM_PLAYER_POOL value
     * @property {number} DOTA_GC_TEAM_NOTEAM=5 DOTA_GC_TEAM_NOTEAM value
     */
    $root.DOTA_GC_TEAM = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DOTA_GC_TEAM_GOOD_GUYS"] = 0;
        values[valuesById[1] = "DOTA_GC_TEAM_BAD_GUYS"] = 1;
        values[valuesById[2] = "DOTA_GC_TEAM_BROADCASTER"] = 2;
        values[valuesById[3] = "DOTA_GC_TEAM_SPECTATOR"] = 3;
        values[valuesById[4] = "DOTA_GC_TEAM_PLAYER_POOL"] = 4;
        values[valuesById[5] = "DOTA_GC_TEAM_NOTEAM"] = 5;
        return values;
    })();
    
    /**
     * EEvent enum.
     * @exports EEvent
     * @enum {number}
     * @property {number} EVENT_ID_NONE=0 EVENT_ID_NONE value
     * @property {number} EVENT_ID_DIRETIDE=1 EVENT_ID_DIRETIDE value
     * @property {number} EVENT_ID_SPRING_FESTIVAL=2 EVENT_ID_SPRING_FESTIVAL value
     * @property {number} EVENT_ID_FROSTIVUS_2013=3 EVENT_ID_FROSTIVUS_2013 value
     * @property {number} EVENT_ID_COMPENDIUM_2014=4 EVENT_ID_COMPENDIUM_2014 value
     * @property {number} EVENT_ID_NEXON_PC_BANG=5 EVENT_ID_NEXON_PC_BANG value
     * @property {number} EVENT_ID_PWRD_DAC_2015=6 EVENT_ID_PWRD_DAC_2015 value
     * @property {number} EVENT_ID_NEW_BLOOM_2015=7 EVENT_ID_NEW_BLOOM_2015 value
     * @property {number} EVENT_ID_INTERNATIONAL_2015=8 EVENT_ID_INTERNATIONAL_2015 value
     * @property {number} EVENT_ID_FALL_MAJOR_2015=9 EVENT_ID_FALL_MAJOR_2015 value
     * @property {number} EVENT_ID_ORACLE_PA=10 EVENT_ID_ORACLE_PA value
     * @property {number} EVENT_ID_NEW_BLOOM_2015_PREBEAST=11 EVENT_ID_NEW_BLOOM_2015_PREBEAST value
     * @property {number} EVENT_ID_FROSTIVUS=12 EVENT_ID_FROSTIVUS value
     * @property {number} EVENT_ID_WINTER_MAJOR_2016=13 EVENT_ID_WINTER_MAJOR_2016 value
     * @property {number} EVENT_ID_INTERNATIONAL_2016=14 EVENT_ID_INTERNATIONAL_2016 value
     * @property {number} EVENT_ID_FALL_MAJOR_2016=15 EVENT_ID_FALL_MAJOR_2016 value
     * @property {number} EVENT_ID_WINTER_MAJOR_2017=16 EVENT_ID_WINTER_MAJOR_2017 value
     * @property {number} EVENT_ID_NEW_BLOOM_2017=17 EVENT_ID_NEW_BLOOM_2017 value
     * @property {number} EVENT_ID_INTERNATIONAL_2017=18 EVENT_ID_INTERNATIONAL_2017 value
     * @property {number} EVENT_ID_PLUS_SUBSCRIPTION=19 EVENT_ID_PLUS_SUBSCRIPTION value
     * @property {number} EVENT_ID_SINGLES_DAY_2017=20 EVENT_ID_SINGLES_DAY_2017 value
     * @property {number} EVENT_ID_FROSTIVUS_2017=21 EVENT_ID_FROSTIVUS_2017 value
     * @property {number} EVENT_ID_INTERNATIONAL_2018=22 EVENT_ID_INTERNATIONAL_2018 value
     * @property {number} EVENT_ID_FROSTIVUS_2018=23 EVENT_ID_FROSTIVUS_2018 value
     * @property {number} EVENT_ID_NEW_BLOOM_2019=24 EVENT_ID_NEW_BLOOM_2019 value
     * @property {number} EVENT_ID_INTERNATIONAL_2019=25 EVENT_ID_INTERNATIONAL_2019 value
     * @property {number} EVENT_ID_NEW_PLAYER_EXPERIENCE=26 EVENT_ID_NEW_PLAYER_EXPERIENCE value
     * @property {number} EVENT_ID_FROSTIVUS_2019=27 EVENT_ID_FROSTIVUS_2019 value
     * @property {number} EVENT_ID_NEW_BLOOM_2020=28 EVENT_ID_NEW_BLOOM_2020 value
     * @property {number} EVENT_ID_INTERNATIONAL_2020=29 EVENT_ID_INTERNATIONAL_2020 value
     * @property {number} EVENT_ID_TEAM_FANDOM=30 EVENT_ID_TEAM_FANDOM value
     * @property {number} EVENT_ID_DIRETIDE_2020=31 EVENT_ID_DIRETIDE_2020 value
     * @property {number} EVENT_ID_COUNT=32 EVENT_ID_COUNT value
     */
    $root.EEvent = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EVENT_ID_NONE"] = 0;
        values[valuesById[1] = "EVENT_ID_DIRETIDE"] = 1;
        values[valuesById[2] = "EVENT_ID_SPRING_FESTIVAL"] = 2;
        values[valuesById[3] = "EVENT_ID_FROSTIVUS_2013"] = 3;
        values[valuesById[4] = "EVENT_ID_COMPENDIUM_2014"] = 4;
        values[valuesById[5] = "EVENT_ID_NEXON_PC_BANG"] = 5;
        values[valuesById[6] = "EVENT_ID_PWRD_DAC_2015"] = 6;
        values[valuesById[7] = "EVENT_ID_NEW_BLOOM_2015"] = 7;
        values[valuesById[8] = "EVENT_ID_INTERNATIONAL_2015"] = 8;
        values[valuesById[9] = "EVENT_ID_FALL_MAJOR_2015"] = 9;
        values[valuesById[10] = "EVENT_ID_ORACLE_PA"] = 10;
        values[valuesById[11] = "EVENT_ID_NEW_BLOOM_2015_PREBEAST"] = 11;
        values[valuesById[12] = "EVENT_ID_FROSTIVUS"] = 12;
        values[valuesById[13] = "EVENT_ID_WINTER_MAJOR_2016"] = 13;
        values[valuesById[14] = "EVENT_ID_INTERNATIONAL_2016"] = 14;
        values[valuesById[15] = "EVENT_ID_FALL_MAJOR_2016"] = 15;
        values[valuesById[16] = "EVENT_ID_WINTER_MAJOR_2017"] = 16;
        values[valuesById[17] = "EVENT_ID_NEW_BLOOM_2017"] = 17;
        values[valuesById[18] = "EVENT_ID_INTERNATIONAL_2017"] = 18;
        values[valuesById[19] = "EVENT_ID_PLUS_SUBSCRIPTION"] = 19;
        values[valuesById[20] = "EVENT_ID_SINGLES_DAY_2017"] = 20;
        values[valuesById[21] = "EVENT_ID_FROSTIVUS_2017"] = 21;
        values[valuesById[22] = "EVENT_ID_INTERNATIONAL_2018"] = 22;
        values[valuesById[23] = "EVENT_ID_FROSTIVUS_2018"] = 23;
        values[valuesById[24] = "EVENT_ID_NEW_BLOOM_2019"] = 24;
        values[valuesById[25] = "EVENT_ID_INTERNATIONAL_2019"] = 25;
        values[valuesById[26] = "EVENT_ID_NEW_PLAYER_EXPERIENCE"] = 26;
        values[valuesById[27] = "EVENT_ID_FROSTIVUS_2019"] = 27;
        values[valuesById[28] = "EVENT_ID_NEW_BLOOM_2020"] = 28;
        values[valuesById[29] = "EVENT_ID_INTERNATIONAL_2020"] = 29;
        values[valuesById[30] = "EVENT_ID_TEAM_FANDOM"] = 30;
        values[valuesById[31] = "EVENT_ID_DIRETIDE_2020"] = 31;
        values[valuesById[32] = "EVENT_ID_COUNT"] = 32;
        return values;
    })();
    
    /**
     * DOTALeaverStatus_t enum.
     * @exports DOTALeaverStatus_t
     * @enum {number}
     * @property {number} DOTA_LEAVER_NONE=0 DOTA_LEAVER_NONE value
     * @property {number} DOTA_LEAVER_DISCONNECTED=1 DOTA_LEAVER_DISCONNECTED value
     * @property {number} DOTA_LEAVER_DISCONNECTED_TOO_LONG=2 DOTA_LEAVER_DISCONNECTED_TOO_LONG value
     * @property {number} DOTA_LEAVER_ABANDONED=3 DOTA_LEAVER_ABANDONED value
     * @property {number} DOTA_LEAVER_AFK=4 DOTA_LEAVER_AFK value
     * @property {number} DOTA_LEAVER_NEVER_CONNECTED=5 DOTA_LEAVER_NEVER_CONNECTED value
     * @property {number} DOTA_LEAVER_NEVER_CONNECTED_TOO_LONG=6 DOTA_LEAVER_NEVER_CONNECTED_TOO_LONG value
     * @property {number} DOTA_LEAVER_FAILED_TO_READY_UP=7 DOTA_LEAVER_FAILED_TO_READY_UP value
     * @property {number} DOTA_LEAVER_DECLINED=8 DOTA_LEAVER_DECLINED value
     */
    $root.DOTALeaverStatus_t = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DOTA_LEAVER_NONE"] = 0;
        values[valuesById[1] = "DOTA_LEAVER_DISCONNECTED"] = 1;
        values[valuesById[2] = "DOTA_LEAVER_DISCONNECTED_TOO_LONG"] = 2;
        values[valuesById[3] = "DOTA_LEAVER_ABANDONED"] = 3;
        values[valuesById[4] = "DOTA_LEAVER_AFK"] = 4;
        values[valuesById[5] = "DOTA_LEAVER_NEVER_CONNECTED"] = 5;
        values[valuesById[6] = "DOTA_LEAVER_NEVER_CONNECTED_TOO_LONG"] = 6;
        values[valuesById[7] = "DOTA_LEAVER_FAILED_TO_READY_UP"] = 7;
        values[valuesById[8] = "DOTA_LEAVER_DECLINED"] = 8;
        return values;
    })();
    
    /**
     * DOTAConnectionState_t enum.
     * @exports DOTAConnectionState_t
     * @enum {number}
     * @property {number} DOTA_CONNECTION_STATE_UNKNOWN=0 DOTA_CONNECTION_STATE_UNKNOWN value
     * @property {number} DOTA_CONNECTION_STATE_NOT_YET_CONNECTED=1 DOTA_CONNECTION_STATE_NOT_YET_CONNECTED value
     * @property {number} DOTA_CONNECTION_STATE_CONNECTED=2 DOTA_CONNECTION_STATE_CONNECTED value
     * @property {number} DOTA_CONNECTION_STATE_DISCONNECTED=3 DOTA_CONNECTION_STATE_DISCONNECTED value
     * @property {number} DOTA_CONNECTION_STATE_ABANDONED=4 DOTA_CONNECTION_STATE_ABANDONED value
     * @property {number} DOTA_CONNECTION_STATE_LOADING=5 DOTA_CONNECTION_STATE_LOADING value
     * @property {number} DOTA_CONNECTION_STATE_FAILED=6 DOTA_CONNECTION_STATE_FAILED value
     */
    $root.DOTAConnectionState_t = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DOTA_CONNECTION_STATE_UNKNOWN"] = 0;
        values[valuesById[1] = "DOTA_CONNECTION_STATE_NOT_YET_CONNECTED"] = 1;
        values[valuesById[2] = "DOTA_CONNECTION_STATE_CONNECTED"] = 2;
        values[valuesById[3] = "DOTA_CONNECTION_STATE_DISCONNECTED"] = 3;
        values[valuesById[4] = "DOTA_CONNECTION_STATE_ABANDONED"] = 4;
        values[valuesById[5] = "DOTA_CONNECTION_STATE_LOADING"] = 5;
        values[valuesById[6] = "DOTA_CONNECTION_STATE_FAILED"] = 6;
        return values;
    })();
    
    /**
     * Fantasy_Roles enum.
     * @exports Fantasy_Roles
     * @enum {number}
     * @property {number} FANTASY_ROLE_UNDEFINED=0 FANTASY_ROLE_UNDEFINED value
     * @property {number} FANTASY_ROLE_CORE=1 FANTASY_ROLE_CORE value
     * @property {number} FANTASY_ROLE_SUPPORT=2 FANTASY_ROLE_SUPPORT value
     * @property {number} FANTASY_ROLE_OFFLANE=3 FANTASY_ROLE_OFFLANE value
     * @property {number} FANTASY_ROLE_MID=4 FANTASY_ROLE_MID value
     */
    $root.Fantasy_Roles = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "FANTASY_ROLE_UNDEFINED"] = 0;
        values[valuesById[1] = "FANTASY_ROLE_CORE"] = 1;
        values[valuesById[2] = "FANTASY_ROLE_SUPPORT"] = 2;
        values[valuesById[3] = "FANTASY_ROLE_OFFLANE"] = 3;
        values[valuesById[4] = "FANTASY_ROLE_MID"] = 4;
        return values;
    })();
    
    /**
     * Fantasy_Team_Slots enum.
     * @exports Fantasy_Team_Slots
     * @enum {number}
     * @property {number} FANTASY_SLOT_NONE=0 FANTASY_SLOT_NONE value
     * @property {number} FANTASY_SLOT_CORE=1 FANTASY_SLOT_CORE value
     * @property {number} FANTASY_SLOT_SUPPORT=2 FANTASY_SLOT_SUPPORT value
     * @property {number} FANTASY_SLOT_ANY=3 FANTASY_SLOT_ANY value
     * @property {number} FANTASY_SLOT_BENCH=4 FANTASY_SLOT_BENCH value
     */
    $root.Fantasy_Team_Slots = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "FANTASY_SLOT_NONE"] = 0;
        values[valuesById[1] = "FANTASY_SLOT_CORE"] = 1;
        values[valuesById[2] = "FANTASY_SLOT_SUPPORT"] = 2;
        values[valuesById[3] = "FANTASY_SLOT_ANY"] = 3;
        values[valuesById[4] = "FANTASY_SLOT_BENCH"] = 4;
        return values;
    })();
    
    /**
     * Fantasy_Selection_Mode enum.
     * @exports Fantasy_Selection_Mode
     * @enum {number}
     * @property {number} FANTASY_SELECTION_INVALID=0 FANTASY_SELECTION_INVALID value
     * @property {number} FANTASY_SELECTION_LOCKED=1 FANTASY_SELECTION_LOCKED value
     * @property {number} FANTASY_SELECTION_SHUFFLE=2 FANTASY_SELECTION_SHUFFLE value
     * @property {number} FANTASY_SELECTION_FREE_PICK=3 FANTASY_SELECTION_FREE_PICK value
     * @property {number} FANTASY_SELECTION_ENDED=4 FANTASY_SELECTION_ENDED value
     * @property {number} FANTASY_SELECTION_PRE_SEASON=5 FANTASY_SELECTION_PRE_SEASON value
     * @property {number} FANTASY_SELECTION_PRE_DRAFT=6 FANTASY_SELECTION_PRE_DRAFT value
     * @property {number} FANTASY_SELECTION_DRAFTING=7 FANTASY_SELECTION_DRAFTING value
     * @property {number} FANTASY_SELECTION_REGULAR_SEASON=8 FANTASY_SELECTION_REGULAR_SEASON value
     * @property {number} FANTASY_SELECTION_CARD_BASED=9 FANTASY_SELECTION_CARD_BASED value
     */
    $root.Fantasy_Selection_Mode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "FANTASY_SELECTION_INVALID"] = 0;
        values[valuesById[1] = "FANTASY_SELECTION_LOCKED"] = 1;
        values[valuesById[2] = "FANTASY_SELECTION_SHUFFLE"] = 2;
        values[valuesById[3] = "FANTASY_SELECTION_FREE_PICK"] = 3;
        values[valuesById[4] = "FANTASY_SELECTION_ENDED"] = 4;
        values[valuesById[5] = "FANTASY_SELECTION_PRE_SEASON"] = 5;
        values[valuesById[6] = "FANTASY_SELECTION_PRE_DRAFT"] = 6;
        values[valuesById[7] = "FANTASY_SELECTION_DRAFTING"] = 7;
        values[valuesById[8] = "FANTASY_SELECTION_REGULAR_SEASON"] = 8;
        values[valuesById[9] = "FANTASY_SELECTION_CARD_BASED"] = 9;
        return values;
    })();
    
    /**
     * DOTAChatChannelType_t enum.
     * @exports DOTAChatChannelType_t
     * @enum {number}
     * @property {number} DOTAChannelType_Regional=0 DOTAChannelType_Regional value
     * @property {number} DOTAChannelType_Custom=1 DOTAChannelType_Custom value
     * @property {number} DOTAChannelType_Party=2 DOTAChannelType_Party value
     * @property {number} DOTAChannelType_Lobby=3 DOTAChannelType_Lobby value
     * @property {number} DOTAChannelType_Team=4 DOTAChannelType_Team value
     * @property {number} DOTAChannelType_Guild=5 DOTAChannelType_Guild value
     * @property {number} DOTAChannelType_Fantasy=6 DOTAChannelType_Fantasy value
     * @property {number} DOTAChannelType_Whisper=7 DOTAChannelType_Whisper value
     * @property {number} DOTAChannelType_Console=8 DOTAChannelType_Console value
     * @property {number} DOTAChannelType_Tab=9 DOTAChannelType_Tab value
     * @property {number} DOTAChannelType_Invalid=10 DOTAChannelType_Invalid value
     * @property {number} DOTAChannelType_GameAll=11 DOTAChannelType_GameAll value
     * @property {number} DOTAChannelType_GameAllies=12 DOTAChannelType_GameAllies value
     * @property {number} DOTAChannelType_GameSpectator=13 DOTAChannelType_GameSpectator value
     * @property {number} DOTAChannelType_Cafe=15 DOTAChannelType_Cafe value
     * @property {number} DOTAChannelType_CustomGame=16 DOTAChannelType_CustomGame value
     * @property {number} DOTAChannelType_Private=17 DOTAChannelType_Private value
     * @property {number} DOTAChannelType_PostGame=18 DOTAChannelType_PostGame value
     * @property {number} DOTAChannelType_BattleCup=19 DOTAChannelType_BattleCup value
     * @property {number} DOTAChannelType_HLTVSpectator=20 DOTAChannelType_HLTVSpectator value
     * @property {number} DOTAChannelType_GameEvents=21 DOTAChannelType_GameEvents value
     * @property {number} DOTAChannelType_Trivia=22 DOTAChannelType_Trivia value
     */
    $root.DOTAChatChannelType_t = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DOTAChannelType_Regional"] = 0;
        values[valuesById[1] = "DOTAChannelType_Custom"] = 1;
        values[valuesById[2] = "DOTAChannelType_Party"] = 2;
        values[valuesById[3] = "DOTAChannelType_Lobby"] = 3;
        values[valuesById[4] = "DOTAChannelType_Team"] = 4;
        values[valuesById[5] = "DOTAChannelType_Guild"] = 5;
        values[valuesById[6] = "DOTAChannelType_Fantasy"] = 6;
        values[valuesById[7] = "DOTAChannelType_Whisper"] = 7;
        values[valuesById[8] = "DOTAChannelType_Console"] = 8;
        values[valuesById[9] = "DOTAChannelType_Tab"] = 9;
        values[valuesById[10] = "DOTAChannelType_Invalid"] = 10;
        values[valuesById[11] = "DOTAChannelType_GameAll"] = 11;
        values[valuesById[12] = "DOTAChannelType_GameAllies"] = 12;
        values[valuesById[13] = "DOTAChannelType_GameSpectator"] = 13;
        values[valuesById[15] = "DOTAChannelType_Cafe"] = 15;
        values[valuesById[16] = "DOTAChannelType_CustomGame"] = 16;
        values[valuesById[17] = "DOTAChannelType_Private"] = 17;
        values[valuesById[18] = "DOTAChannelType_PostGame"] = 18;
        values[valuesById[19] = "DOTAChannelType_BattleCup"] = 19;
        values[valuesById[20] = "DOTAChannelType_HLTVSpectator"] = 20;
        values[valuesById[21] = "DOTAChannelType_GameEvents"] = 21;
        values[valuesById[22] = "DOTAChannelType_Trivia"] = 22;
        return values;
    })();
    
    /**
     * EProfileCardSlotType enum.
     * @exports EProfileCardSlotType
     * @enum {number}
     * @property {number} k_EProfileCardSlotType_Empty=0 k_EProfileCardSlotType_Empty value
     * @property {number} k_EProfileCardSlotType_Stat=1 k_EProfileCardSlotType_Stat value
     * @property {number} k_EProfileCardSlotType_Trophy=2 k_EProfileCardSlotType_Trophy value
     * @property {number} k_EProfileCardSlotType_Item=3 k_EProfileCardSlotType_Item value
     * @property {number} k_EProfileCardSlotType_Hero=4 k_EProfileCardSlotType_Hero value
     * @property {number} k_EProfileCardSlotType_Emoticon=5 k_EProfileCardSlotType_Emoticon value
     * @property {number} k_EProfileCardSlotType_Team=6 k_EProfileCardSlotType_Team value
     */
    $root.EProfileCardSlotType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EProfileCardSlotType_Empty"] = 0;
        values[valuesById[1] = "k_EProfileCardSlotType_Stat"] = 1;
        values[valuesById[2] = "k_EProfileCardSlotType_Trophy"] = 2;
        values[valuesById[3] = "k_EProfileCardSlotType_Item"] = 3;
        values[valuesById[4] = "k_EProfileCardSlotType_Hero"] = 4;
        values[valuesById[5] = "k_EProfileCardSlotType_Emoticon"] = 5;
        values[valuesById[6] = "k_EProfileCardSlotType_Team"] = 6;
        return values;
    })();
    
    /**
     * EMatchGroupServerStatus enum.
     * @exports EMatchGroupServerStatus
     * @enum {number}
     * @property {number} k_EMatchGroupServerStatus_OK=0 k_EMatchGroupServerStatus_OK value
     * @property {number} k_EMatchGroupServerStatus_LimitedAvailability=1 k_EMatchGroupServerStatus_LimitedAvailability value
     * @property {number} k_EMatchGroupServerStatus_Offline=2 k_EMatchGroupServerStatus_Offline value
     */
    $root.EMatchGroupServerStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EMatchGroupServerStatus_OK"] = 0;
        values[valuesById[1] = "k_EMatchGroupServerStatus_LimitedAvailability"] = 1;
        values[valuesById[2] = "k_EMatchGroupServerStatus_Offline"] = 2;
        return values;
    })();
    
    /**
     * DOTA_CM_PICK enum.
     * @exports DOTA_CM_PICK
     * @enum {number}
     * @property {number} DOTA_CM_RANDOM=0 DOTA_CM_RANDOM value
     * @property {number} DOTA_CM_GOOD_GUYS=1 DOTA_CM_GOOD_GUYS value
     * @property {number} DOTA_CM_BAD_GUYS=2 DOTA_CM_BAD_GUYS value
     */
    $root.DOTA_CM_PICK = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DOTA_CM_RANDOM"] = 0;
        values[valuesById[1] = "DOTA_CM_GOOD_GUYS"] = 1;
        values[valuesById[2] = "DOTA_CM_BAD_GUYS"] = 2;
        return values;
    })();
    
    /**
     * DOTALowPriorityBanType enum.
     * @exports DOTALowPriorityBanType
     * @enum {number}
     * @property {number} DOTA_LOW_PRIORITY_BAN_ABANDON=0 DOTA_LOW_PRIORITY_BAN_ABANDON value
     * @property {number} DOTA_LOW_PRIORITY_BAN_REPORTS=1 DOTA_LOW_PRIORITY_BAN_REPORTS value
     * @property {number} DOTA_LOW_PRIORITY_BAN_SECONDARY_ABANDON=2 DOTA_LOW_PRIORITY_BAN_SECONDARY_ABANDON value
     * @property {number} DOTA_LOW_PRIORITY_BAN_PRE_GAME_ROLE=3 DOTA_LOW_PRIORITY_BAN_PRE_GAME_ROLE value
     */
    $root.DOTALowPriorityBanType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DOTA_LOW_PRIORITY_BAN_ABANDON"] = 0;
        values[valuesById[1] = "DOTA_LOW_PRIORITY_BAN_REPORTS"] = 1;
        values[valuesById[2] = "DOTA_LOW_PRIORITY_BAN_SECONDARY_ABANDON"] = 2;
        values[valuesById[3] = "DOTA_LOW_PRIORITY_BAN_PRE_GAME_ROLE"] = 3;
        return values;
    })();
    
    /**
     * DOTALobbyReadyState enum.
     * @exports DOTALobbyReadyState
     * @enum {number}
     * @property {number} DOTALobbyReadyState_UNDECLARED=0 DOTALobbyReadyState_UNDECLARED value
     * @property {number} DOTALobbyReadyState_ACCEPTED=1 DOTALobbyReadyState_ACCEPTED value
     * @property {number} DOTALobbyReadyState_DECLINED=2 DOTALobbyReadyState_DECLINED value
     */
    $root.DOTALobbyReadyState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DOTALobbyReadyState_UNDECLARED"] = 0;
        values[valuesById[1] = "DOTALobbyReadyState_ACCEPTED"] = 1;
        values[valuesById[2] = "DOTALobbyReadyState_DECLINED"] = 2;
        return values;
    })();
    
    /**
     * DOTAGameVersion enum.
     * @exports DOTAGameVersion
     * @enum {number}
     * @property {number} GAME_VERSION_CURRENT=0 GAME_VERSION_CURRENT value
     * @property {number} GAME_VERSION_STABLE=1 GAME_VERSION_STABLE value
     */
    $root.DOTAGameVersion = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GAME_VERSION_CURRENT"] = 0;
        values[valuesById[1] = "GAME_VERSION_STABLE"] = 1;
        return values;
    })();
    
    /**
     * DOTAJoinLobbyResult enum.
     * @exports DOTAJoinLobbyResult
     * @enum {number}
     * @property {number} DOTA_JOIN_RESULT_SUCCESS=0 DOTA_JOIN_RESULT_SUCCESS value
     * @property {number} DOTA_JOIN_RESULT_ALREADY_IN_GAME=1 DOTA_JOIN_RESULT_ALREADY_IN_GAME value
     * @property {number} DOTA_JOIN_RESULT_INVALID_LOBBY=2 DOTA_JOIN_RESULT_INVALID_LOBBY value
     * @property {number} DOTA_JOIN_RESULT_INCORRECT_PASSWORD=3 DOTA_JOIN_RESULT_INCORRECT_PASSWORD value
     * @property {number} DOTA_JOIN_RESULT_ACCESS_DENIED=4 DOTA_JOIN_RESULT_ACCESS_DENIED value
     * @property {number} DOTA_JOIN_RESULT_GENERIC_ERROR=5 DOTA_JOIN_RESULT_GENERIC_ERROR value
     * @property {number} DOTA_JOIN_RESULT_INCORRECT_VERSION=6 DOTA_JOIN_RESULT_INCORRECT_VERSION value
     * @property {number} DOTA_JOIN_RESULT_IN_TEAM_PARTY=7 DOTA_JOIN_RESULT_IN_TEAM_PARTY value
     * @property {number} DOTA_JOIN_RESULT_NO_LOBBY_FOUND=8 DOTA_JOIN_RESULT_NO_LOBBY_FOUND value
     * @property {number} DOTA_JOIN_RESULT_LOBBY_FULL=9 DOTA_JOIN_RESULT_LOBBY_FULL value
     * @property {number} DOTA_JOIN_RESULT_CUSTOM_GAME_INCORRECT_VERSION=10 DOTA_JOIN_RESULT_CUSTOM_GAME_INCORRECT_VERSION value
     * @property {number} DOTA_JOIN_RESULT_TIMEOUT=11 DOTA_JOIN_RESULT_TIMEOUT value
     * @property {number} DOTA_JOIN_RESULT_CUSTOM_GAME_COOLDOWN=12 DOTA_JOIN_RESULT_CUSTOM_GAME_COOLDOWN value
     * @property {number} DOTA_JOIN_RESULT_BUSY=13 DOTA_JOIN_RESULT_BUSY value
     * @property {number} DOTA_JOIN_RESULT_NO_PLAYTIME=14 DOTA_JOIN_RESULT_NO_PLAYTIME value
     */
    $root.DOTAJoinLobbyResult = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DOTA_JOIN_RESULT_SUCCESS"] = 0;
        values[valuesById[1] = "DOTA_JOIN_RESULT_ALREADY_IN_GAME"] = 1;
        values[valuesById[2] = "DOTA_JOIN_RESULT_INVALID_LOBBY"] = 2;
        values[valuesById[3] = "DOTA_JOIN_RESULT_INCORRECT_PASSWORD"] = 3;
        values[valuesById[4] = "DOTA_JOIN_RESULT_ACCESS_DENIED"] = 4;
        values[valuesById[5] = "DOTA_JOIN_RESULT_GENERIC_ERROR"] = 5;
        values[valuesById[6] = "DOTA_JOIN_RESULT_INCORRECT_VERSION"] = 6;
        values[valuesById[7] = "DOTA_JOIN_RESULT_IN_TEAM_PARTY"] = 7;
        values[valuesById[8] = "DOTA_JOIN_RESULT_NO_LOBBY_FOUND"] = 8;
        values[valuesById[9] = "DOTA_JOIN_RESULT_LOBBY_FULL"] = 9;
        values[valuesById[10] = "DOTA_JOIN_RESULT_CUSTOM_GAME_INCORRECT_VERSION"] = 10;
        values[valuesById[11] = "DOTA_JOIN_RESULT_TIMEOUT"] = 11;
        values[valuesById[12] = "DOTA_JOIN_RESULT_CUSTOM_GAME_COOLDOWN"] = 12;
        values[valuesById[13] = "DOTA_JOIN_RESULT_BUSY"] = 13;
        values[valuesById[14] = "DOTA_JOIN_RESULT_NO_PLAYTIME"] = 14;
        return values;
    })();
    
    /**
     * DOTASelectionPriorityRules enum.
     * @exports DOTASelectionPriorityRules
     * @enum {number}
     * @property {number} k_DOTASelectionPriorityRules_Manual=0 k_DOTASelectionPriorityRules_Manual value
     * @property {number} k_DOTASelectionPriorityRules_Automatic=1 k_DOTASelectionPriorityRules_Automatic value
     */
    $root.DOTASelectionPriorityRules = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_DOTASelectionPriorityRules_Manual"] = 0;
        values[valuesById[1] = "k_DOTASelectionPriorityRules_Automatic"] = 1;
        return values;
    })();
    
    /**
     * DOTASelectionPriorityChoice enum.
     * @exports DOTASelectionPriorityChoice
     * @enum {number}
     * @property {number} k_DOTASelectionPriorityChoice_Invalid=0 k_DOTASelectionPriorityChoice_Invalid value
     * @property {number} k_DOTASelectionPriorityChoice_FirstPick=1 k_DOTASelectionPriorityChoice_FirstPick value
     * @property {number} k_DOTASelectionPriorityChoice_SecondPick=2 k_DOTASelectionPriorityChoice_SecondPick value
     * @property {number} k_DOTASelectionPriorityChoice_Radiant=3 k_DOTASelectionPriorityChoice_Radiant value
     * @property {number} k_DOTASelectionPriorityChoice_Dire=4 k_DOTASelectionPriorityChoice_Dire value
     */
    $root.DOTASelectionPriorityChoice = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_DOTASelectionPriorityChoice_Invalid"] = 0;
        values[valuesById[1] = "k_DOTASelectionPriorityChoice_FirstPick"] = 1;
        values[valuesById[2] = "k_DOTASelectionPriorityChoice_SecondPick"] = 2;
        values[valuesById[3] = "k_DOTASelectionPriorityChoice_Radiant"] = 3;
        values[valuesById[4] = "k_DOTASelectionPriorityChoice_Dire"] = 4;
        return values;
    })();
    
    /**
     * DOTAMatchVote enum.
     * @exports DOTAMatchVote
     * @enum {number}
     * @property {number} DOTAMatchVote_INVALID=0 DOTAMatchVote_INVALID value
     * @property {number} DOTAMatchVote_POSITIVE=1 DOTAMatchVote_POSITIVE value
     * @property {number} DOTAMatchVote_NEGATIVE=2 DOTAMatchVote_NEGATIVE value
     */
    $root.DOTAMatchVote = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DOTAMatchVote_INVALID"] = 0;
        values[valuesById[1] = "DOTAMatchVote_POSITIVE"] = 1;
        values[valuesById[2] = "DOTAMatchVote_NEGATIVE"] = 2;
        return values;
    })();
    
    /**
     * DOTALobbyVisibility enum.
     * @exports DOTALobbyVisibility
     * @enum {number}
     * @property {number} DOTALobbyVisibility_Public=0 DOTALobbyVisibility_Public value
     * @property {number} DOTALobbyVisibility_Friends=1 DOTALobbyVisibility_Friends value
     * @property {number} DOTALobbyVisibility_Unlisted=2 DOTALobbyVisibility_Unlisted value
     */
    $root.DOTALobbyVisibility = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DOTALobbyVisibility_Public"] = 0;
        values[valuesById[1] = "DOTALobbyVisibility_Friends"] = 1;
        values[valuesById[2] = "DOTALobbyVisibility_Unlisted"] = 2;
        return values;
    })();
    
    /**
     * EDOTAPlayerMMRType enum.
     * @exports EDOTAPlayerMMRType
     * @enum {number}
     * @property {number} k_EDOTAPlayerMMRType_Invalid=0 k_EDOTAPlayerMMRType_Invalid value
     * @property {number} k_EDOTAPlayerMMRType_GeneralHidden=1 k_EDOTAPlayerMMRType_GeneralHidden value
     * @property {number} k_EDOTAPlayerMMRType_GeneralCompetitive=3 k_EDOTAPlayerMMRType_GeneralCompetitive value
     * @property {number} k_EDOTAPlayerMMRType_SoloCompetitive2019=4 k_EDOTAPlayerMMRType_SoloCompetitive2019 value
     * @property {number} k_EDOTAPlayerMMRType_1v1Competitive_UNUSED=5 k_EDOTAPlayerMMRType_1v1Competitive_UNUSED value
     * @property {number} k_EDOTAPlayerMMRType_GeneralSeasonalRanked=6 k_EDOTAPlayerMMRType_GeneralSeasonalRanked value
     * @property {number} k_EDOTAPlayerMMRType_SoloSeasonalRanked=7 k_EDOTAPlayerMMRType_SoloSeasonalRanked value
     * @property {number} k_EDOTAPlayerMMRType_Competitive_Core=8 k_EDOTAPlayerMMRType_Competitive_Core value
     * @property {number} k_EDOTAPlayerMMRType_Competitive_Support=9 k_EDOTAPlayerMMRType_Competitive_Support value
     * @property {number} k_EDOTAPlayerMMRType_Competitive_Classic=10 k_EDOTAPlayerMMRType_Competitive_Classic value
     */
    $root.EDOTAPlayerMMRType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EDOTAPlayerMMRType_Invalid"] = 0;
        values[valuesById[1] = "k_EDOTAPlayerMMRType_GeneralHidden"] = 1;
        values[valuesById[3] = "k_EDOTAPlayerMMRType_GeneralCompetitive"] = 3;
        values[valuesById[4] = "k_EDOTAPlayerMMRType_SoloCompetitive2019"] = 4;
        values[valuesById[5] = "k_EDOTAPlayerMMRType_1v1Competitive_UNUSED"] = 5;
        values[valuesById[6] = "k_EDOTAPlayerMMRType_GeneralSeasonalRanked"] = 6;
        values[valuesById[7] = "k_EDOTAPlayerMMRType_SoloSeasonalRanked"] = 7;
        values[valuesById[8] = "k_EDOTAPlayerMMRType_Competitive_Core"] = 8;
        values[valuesById[9] = "k_EDOTAPlayerMMRType_Competitive_Support"] = 9;
        values[valuesById[10] = "k_EDOTAPlayerMMRType_Competitive_Classic"] = 10;
        return values;
    })();
    
    /**
     * EDOTAMMRBoostType enum.
     * @exports EDOTAMMRBoostType
     * @enum {number}
     * @property {number} k_EDOTAMMRBoostType_None=0 k_EDOTAMMRBoostType_None value
     * @property {number} k_EDOTAMMRBoostType_Leader=1 k_EDOTAMMRBoostType_Leader value
     * @property {number} k_EDOTAMMRBoostType_Follower=2 k_EDOTAMMRBoostType_Follower value
     */
    $root.EDOTAMMRBoostType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EDOTAMMRBoostType_None"] = 0;
        values[valuesById[1] = "k_EDOTAMMRBoostType_Leader"] = 1;
        values[valuesById[2] = "k_EDOTAMMRBoostType_Follower"] = 2;
        return values;
    })();
    
    /**
     * MatchType enum.
     * @exports MatchType
     * @enum {number}
     * @property {number} MATCH_TYPE_CASUAL=0 MATCH_TYPE_CASUAL value
     * @property {number} MATCH_TYPE_COOP_BOTS=1 MATCH_TYPE_COOP_BOTS value
     * @property {number} MATCH_TYPE_LEGACY_TEAM_RANKED=2 MATCH_TYPE_LEGACY_TEAM_RANKED value
     * @property {number} MATCH_TYPE_LEGACY_SOLO_QUEUE=3 MATCH_TYPE_LEGACY_SOLO_QUEUE value
     * @property {number} MATCH_TYPE_COMPETITIVE=4 MATCH_TYPE_COMPETITIVE value
     * @property {number} MATCH_TYPE_WEEKEND_TOURNEY=5 MATCH_TYPE_WEEKEND_TOURNEY value
     * @property {number} MATCH_TYPE_CASUAL_1V1=6 MATCH_TYPE_CASUAL_1V1 value
     * @property {number} MATCH_TYPE_EVENT=7 MATCH_TYPE_EVENT value
     * @property {number} MATCH_TYPE_SEASONAL_RANKED=8 MATCH_TYPE_SEASONAL_RANKED value
     * @property {number} MATCH_TYPE_LOWPRI_DEPRECATED=9 MATCH_TYPE_LOWPRI_DEPRECATED value
     * @property {number} MATCH_TYPE_STEAM_GROUP=10 MATCH_TYPE_STEAM_GROUP value
     * @property {number} MATCH_TYPE_MUTATION=11 MATCH_TYPE_MUTATION value
     * @property {number} MATCH_TYPE_COACHES_CHALLENGE=12 MATCH_TYPE_COACHES_CHALLENGE value
     * @property {number} MATCH_TYPE_GAUNTLET=13 MATCH_TYPE_GAUNTLET value
     */
    $root.MatchType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MATCH_TYPE_CASUAL"] = 0;
        values[valuesById[1] = "MATCH_TYPE_COOP_BOTS"] = 1;
        values[valuesById[2] = "MATCH_TYPE_LEGACY_TEAM_RANKED"] = 2;
        values[valuesById[3] = "MATCH_TYPE_LEGACY_SOLO_QUEUE"] = 3;
        values[valuesById[4] = "MATCH_TYPE_COMPETITIVE"] = 4;
        values[valuesById[5] = "MATCH_TYPE_WEEKEND_TOURNEY"] = 5;
        values[valuesById[6] = "MATCH_TYPE_CASUAL_1V1"] = 6;
        values[valuesById[7] = "MATCH_TYPE_EVENT"] = 7;
        values[valuesById[8] = "MATCH_TYPE_SEASONAL_RANKED"] = 8;
        values[valuesById[9] = "MATCH_TYPE_LOWPRI_DEPRECATED"] = 9;
        values[valuesById[10] = "MATCH_TYPE_STEAM_GROUP"] = 10;
        values[valuesById[11] = "MATCH_TYPE_MUTATION"] = 11;
        values[valuesById[12] = "MATCH_TYPE_COACHES_CHALLENGE"] = 12;
        values[valuesById[13] = "MATCH_TYPE_GAUNTLET"] = 13;
        return values;
    })();
    
    /**
     * DOTABotDifficulty enum.
     * @exports DOTABotDifficulty
     * @enum {number}
     * @property {number} BOT_DIFFICULTY_PASSIVE=0 BOT_DIFFICULTY_PASSIVE value
     * @property {number} BOT_DIFFICULTY_EASY=1 BOT_DIFFICULTY_EASY value
     * @property {number} BOT_DIFFICULTY_MEDIUM=2 BOT_DIFFICULTY_MEDIUM value
     * @property {number} BOT_DIFFICULTY_HARD=3 BOT_DIFFICULTY_HARD value
     * @property {number} BOT_DIFFICULTY_UNFAIR=4 BOT_DIFFICULTY_UNFAIR value
     * @property {number} BOT_DIFFICULTY_INVALID=5 BOT_DIFFICULTY_INVALID value
     * @property {number} BOT_DIFFICULTY_EXTRA1=6 BOT_DIFFICULTY_EXTRA1 value
     * @property {number} BOT_DIFFICULTY_EXTRA2=7 BOT_DIFFICULTY_EXTRA2 value
     * @property {number} BOT_DIFFICULTY_EXTRA3=8 BOT_DIFFICULTY_EXTRA3 value
     */
    $root.DOTABotDifficulty = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BOT_DIFFICULTY_PASSIVE"] = 0;
        values[valuesById[1] = "BOT_DIFFICULTY_EASY"] = 1;
        values[valuesById[2] = "BOT_DIFFICULTY_MEDIUM"] = 2;
        values[valuesById[3] = "BOT_DIFFICULTY_HARD"] = 3;
        values[valuesById[4] = "BOT_DIFFICULTY_UNFAIR"] = 4;
        values[valuesById[5] = "BOT_DIFFICULTY_INVALID"] = 5;
        values[valuesById[6] = "BOT_DIFFICULTY_EXTRA1"] = 6;
        values[valuesById[7] = "BOT_DIFFICULTY_EXTRA2"] = 7;
        values[valuesById[8] = "BOT_DIFFICULTY_EXTRA3"] = 8;
        return values;
    })();
    
    /**
     * DOTA_BOT_MODE enum.
     * @exports DOTA_BOT_MODE
     * @enum {number}
     * @property {number} DOTA_BOT_MODE_NONE=0 DOTA_BOT_MODE_NONE value
     * @property {number} DOTA_BOT_MODE_LANING=1 DOTA_BOT_MODE_LANING value
     * @property {number} DOTA_BOT_MODE_ATTACK=2 DOTA_BOT_MODE_ATTACK value
     * @property {number} DOTA_BOT_MODE_ROAM=3 DOTA_BOT_MODE_ROAM value
     * @property {number} DOTA_BOT_MODE_RETREAT=4 DOTA_BOT_MODE_RETREAT value
     * @property {number} DOTA_BOT_MODE_SECRET_SHOP=5 DOTA_BOT_MODE_SECRET_SHOP value
     * @property {number} DOTA_BOT_MODE_SIDE_SHOP=6 DOTA_BOT_MODE_SIDE_SHOP value
     * @property {number} DOTA_BOT_MODE_RUNE=7 DOTA_BOT_MODE_RUNE value
     * @property {number} DOTA_BOT_MODE_PUSH_TOWER_TOP=8 DOTA_BOT_MODE_PUSH_TOWER_TOP value
     * @property {number} DOTA_BOT_MODE_PUSH_TOWER_MID=9 DOTA_BOT_MODE_PUSH_TOWER_MID value
     * @property {number} DOTA_BOT_MODE_PUSH_TOWER_BOT=10 DOTA_BOT_MODE_PUSH_TOWER_BOT value
     * @property {number} DOTA_BOT_MODE_DEFEND_TOWER_TOP=11 DOTA_BOT_MODE_DEFEND_TOWER_TOP value
     * @property {number} DOTA_BOT_MODE_DEFEND_TOWER_MID=12 DOTA_BOT_MODE_DEFEND_TOWER_MID value
     * @property {number} DOTA_BOT_MODE_DEFEND_TOWER_BOT=13 DOTA_BOT_MODE_DEFEND_TOWER_BOT value
     * @property {number} DOTA_BOT_MODE_ASSEMBLE=14 DOTA_BOT_MODE_ASSEMBLE value
     * @property {number} DOTA_BOT_MODE_ASSEMBLE_WITH_HUMANS=15 DOTA_BOT_MODE_ASSEMBLE_WITH_HUMANS value
     * @property {number} DOTA_BOT_MODE_TEAM_ROAM=16 DOTA_BOT_MODE_TEAM_ROAM value
     * @property {number} DOTA_BOT_MODE_FARM=17 DOTA_BOT_MODE_FARM value
     * @property {number} DOTA_BOT_MODE_DEFEND_ALLY=18 DOTA_BOT_MODE_DEFEND_ALLY value
     * @property {number} DOTA_BOT_MODE_EVASIVE_MANEUVERS=19 DOTA_BOT_MODE_EVASIVE_MANEUVERS value
     * @property {number} DOTA_BOT_MODE_ROSHAN=20 DOTA_BOT_MODE_ROSHAN value
     * @property {number} DOTA_BOT_MODE_ITEM=21 DOTA_BOT_MODE_ITEM value
     * @property {number} DOTA_BOT_MODE_WARD=22 DOTA_BOT_MODE_WARD value
     * @property {number} DOTA_BOT_MODE_COMPANION=23 DOTA_BOT_MODE_COMPANION value
     * @property {number} DOTA_BOT_MODE_TUTORIAL_BOSS=24 DOTA_BOT_MODE_TUTORIAL_BOSS value
     * @property {number} DOTA_BOT_MODE_MINION=25 DOTA_BOT_MODE_MINION value
     */
    $root.DOTA_BOT_MODE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DOTA_BOT_MODE_NONE"] = 0;
        values[valuesById[1] = "DOTA_BOT_MODE_LANING"] = 1;
        values[valuesById[2] = "DOTA_BOT_MODE_ATTACK"] = 2;
        values[valuesById[3] = "DOTA_BOT_MODE_ROAM"] = 3;
        values[valuesById[4] = "DOTA_BOT_MODE_RETREAT"] = 4;
        values[valuesById[5] = "DOTA_BOT_MODE_SECRET_SHOP"] = 5;
        values[valuesById[6] = "DOTA_BOT_MODE_SIDE_SHOP"] = 6;
        values[valuesById[7] = "DOTA_BOT_MODE_RUNE"] = 7;
        values[valuesById[8] = "DOTA_BOT_MODE_PUSH_TOWER_TOP"] = 8;
        values[valuesById[9] = "DOTA_BOT_MODE_PUSH_TOWER_MID"] = 9;
        values[valuesById[10] = "DOTA_BOT_MODE_PUSH_TOWER_BOT"] = 10;
        values[valuesById[11] = "DOTA_BOT_MODE_DEFEND_TOWER_TOP"] = 11;
        values[valuesById[12] = "DOTA_BOT_MODE_DEFEND_TOWER_MID"] = 12;
        values[valuesById[13] = "DOTA_BOT_MODE_DEFEND_TOWER_BOT"] = 13;
        values[valuesById[14] = "DOTA_BOT_MODE_ASSEMBLE"] = 14;
        values[valuesById[15] = "DOTA_BOT_MODE_ASSEMBLE_WITH_HUMANS"] = 15;
        values[valuesById[16] = "DOTA_BOT_MODE_TEAM_ROAM"] = 16;
        values[valuesById[17] = "DOTA_BOT_MODE_FARM"] = 17;
        values[valuesById[18] = "DOTA_BOT_MODE_DEFEND_ALLY"] = 18;
        values[valuesById[19] = "DOTA_BOT_MODE_EVASIVE_MANEUVERS"] = 19;
        values[valuesById[20] = "DOTA_BOT_MODE_ROSHAN"] = 20;
        values[valuesById[21] = "DOTA_BOT_MODE_ITEM"] = 21;
        values[valuesById[22] = "DOTA_BOT_MODE_WARD"] = 22;
        values[valuesById[23] = "DOTA_BOT_MODE_COMPANION"] = 23;
        values[valuesById[24] = "DOTA_BOT_MODE_TUTORIAL_BOSS"] = 24;
        values[valuesById[25] = "DOTA_BOT_MODE_MINION"] = 25;
        return values;
    })();
    
    /**
     * MatchLanguages enum.
     * @exports MatchLanguages
     * @enum {number}
     * @property {number} MATCH_LANGUAGE_INVALID=0 MATCH_LANGUAGE_INVALID value
     * @property {number} MATCH_LANGUAGE_ENGLISH=1 MATCH_LANGUAGE_ENGLISH value
     * @property {number} MATCH_LANGUAGE_RUSSIAN=2 MATCH_LANGUAGE_RUSSIAN value
     * @property {number} MATCH_LANGUAGE_CHINESE=3 MATCH_LANGUAGE_CHINESE value
     * @property {number} MATCH_LANGUAGE_KOREAN=4 MATCH_LANGUAGE_KOREAN value
     * @property {number} MATCH_LANGUAGE_SPANISH=5 MATCH_LANGUAGE_SPANISH value
     * @property {number} MATCH_LANGUAGE_PORTUGUESE=6 MATCH_LANGUAGE_PORTUGUESE value
     * @property {number} MATCH_LANGUAGE_ENGLISH2=7 MATCH_LANGUAGE_ENGLISH2 value
     */
    $root.MatchLanguages = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MATCH_LANGUAGE_INVALID"] = 0;
        values[valuesById[1] = "MATCH_LANGUAGE_ENGLISH"] = 1;
        values[valuesById[2] = "MATCH_LANGUAGE_RUSSIAN"] = 2;
        values[valuesById[3] = "MATCH_LANGUAGE_CHINESE"] = 3;
        values[valuesById[4] = "MATCH_LANGUAGE_KOREAN"] = 4;
        values[valuesById[5] = "MATCH_LANGUAGE_SPANISH"] = 5;
        values[valuesById[6] = "MATCH_LANGUAGE_PORTUGUESE"] = 6;
        values[valuesById[7] = "MATCH_LANGUAGE_ENGLISH2"] = 7;
        return values;
    })();
    
    /**
     * ETourneyQueueDeadlineState enum.
     * @exports ETourneyQueueDeadlineState
     * @enum {number}
     * @property {number} k_ETourneyQueueDeadlineState_Normal=0 k_ETourneyQueueDeadlineState_Normal value
     * @property {number} k_ETourneyQueueDeadlineState_Missed=1 k_ETourneyQueueDeadlineState_Missed value
     * @property {number} k_ETourneyQueueDeadlineState_ExpiredOK=2 k_ETourneyQueueDeadlineState_ExpiredOK value
     * @property {number} k_ETourneyQueueDeadlineState_SeekingBye=3 k_ETourneyQueueDeadlineState_SeekingBye value
     * @property {number} k_ETourneyQueueDeadlineState_EligibleForRefund=4 k_ETourneyQueueDeadlineState_EligibleForRefund value
     * @property {number} k_ETourneyQueueDeadlineState_NA=-1 k_ETourneyQueueDeadlineState_NA value
     * @property {number} k_ETourneyQueueDeadlineState_ExpiringSoon=101 k_ETourneyQueueDeadlineState_ExpiringSoon value
     */
    $root.ETourneyQueueDeadlineState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ETourneyQueueDeadlineState_Normal"] = 0;
        values[valuesById[1] = "k_ETourneyQueueDeadlineState_Missed"] = 1;
        values[valuesById[2] = "k_ETourneyQueueDeadlineState_ExpiredOK"] = 2;
        values[valuesById[3] = "k_ETourneyQueueDeadlineState_SeekingBye"] = 3;
        values[valuesById[4] = "k_ETourneyQueueDeadlineState_EligibleForRefund"] = 4;
        values[valuesById[-1] = "k_ETourneyQueueDeadlineState_NA"] = -1;
        values[valuesById[101] = "k_ETourneyQueueDeadlineState_ExpiringSoon"] = 101;
        return values;
    })();
    
    /**
     * EMatchOutcome enum.
     * @exports EMatchOutcome
     * @enum {number}
     * @property {number} k_EMatchOutcome_Unknown=0 k_EMatchOutcome_Unknown value
     * @property {number} k_EMatchOutcome_RadVictory=2 k_EMatchOutcome_RadVictory value
     * @property {number} k_EMatchOutcome_DireVictory=3 k_EMatchOutcome_DireVictory value
     * @property {number} k_EMatchOutcome_NotScored_PoorNetworkConditions=64 k_EMatchOutcome_NotScored_PoorNetworkConditions value
     * @property {number} k_EMatchOutcome_NotScored_Leaver=65 k_EMatchOutcome_NotScored_Leaver value
     * @property {number} k_EMatchOutcome_NotScored_ServerCrash=66 k_EMatchOutcome_NotScored_ServerCrash value
     * @property {number} k_EMatchOutcome_NotScored_NeverStarted=67 k_EMatchOutcome_NotScored_NeverStarted value
     * @property {number} k_EMatchOutcome_NotScored_Canceled=68 k_EMatchOutcome_NotScored_Canceled value
     * @property {number} k_EMatchOutcome_NotScored_Suspicious=69 k_EMatchOutcome_NotScored_Suspicious value
     */
    $root.EMatchOutcome = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EMatchOutcome_Unknown"] = 0;
        values[valuesById[2] = "k_EMatchOutcome_RadVictory"] = 2;
        values[valuesById[3] = "k_EMatchOutcome_DireVictory"] = 3;
        values[valuesById[64] = "k_EMatchOutcome_NotScored_PoorNetworkConditions"] = 64;
        values[valuesById[65] = "k_EMatchOutcome_NotScored_Leaver"] = 65;
        values[valuesById[66] = "k_EMatchOutcome_NotScored_ServerCrash"] = 66;
        values[valuesById[67] = "k_EMatchOutcome_NotScored_NeverStarted"] = 67;
        values[valuesById[68] = "k_EMatchOutcome_NotScored_Canceled"] = 68;
        values[valuesById[69] = "k_EMatchOutcome_NotScored_Suspicious"] = 69;
        return values;
    })();
    
    /**
     * ELaneType enum.
     * @exports ELaneType
     * @enum {number}
     * @property {number} LANE_TYPE_UNKNOWN=0 LANE_TYPE_UNKNOWN value
     * @property {number} LANE_TYPE_SAFE=1 LANE_TYPE_SAFE value
     * @property {number} LANE_TYPE_OFF=2 LANE_TYPE_OFF value
     * @property {number} LANE_TYPE_MID=3 LANE_TYPE_MID value
     * @property {number} LANE_TYPE_JUNGLE=4 LANE_TYPE_JUNGLE value
     * @property {number} LANE_TYPE_ROAM=5 LANE_TYPE_ROAM value
     */
    $root.ELaneType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LANE_TYPE_UNKNOWN"] = 0;
        values[valuesById[1] = "LANE_TYPE_SAFE"] = 1;
        values[valuesById[2] = "LANE_TYPE_OFF"] = 2;
        values[valuesById[3] = "LANE_TYPE_MID"] = 3;
        values[valuesById[4] = "LANE_TYPE_JUNGLE"] = 4;
        values[valuesById[5] = "LANE_TYPE_ROAM"] = 5;
        return values;
    })();
    
    /**
     * EBadgeType enum.
     * @exports EBadgeType
     * @enum {number}
     * @property {number} k_EBadgeType_TI7_Midweek=1 k_EBadgeType_TI7_Midweek value
     * @property {number} k_EBadgeType_TI7_Finals=2 k_EBadgeType_TI7_Finals value
     * @property {number} k_EBadgeType_TI7_AllEvent=3 k_EBadgeType_TI7_AllEvent value
     * @property {number} k_EBadgeType_TI8_Midweek=4 k_EBadgeType_TI8_Midweek value
     * @property {number} k_EBadgeType_TI8_Finals=5 k_EBadgeType_TI8_Finals value
     * @property {number} k_EBadgeType_TI8_AllEvent=6 k_EBadgeType_TI8_AllEvent value
     */
    $root.EBadgeType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "k_EBadgeType_TI7_Midweek"] = 1;
        values[valuesById[2] = "k_EBadgeType_TI7_Finals"] = 2;
        values[valuesById[3] = "k_EBadgeType_TI7_AllEvent"] = 3;
        values[valuesById[4] = "k_EBadgeType_TI8_Midweek"] = 4;
        values[valuesById[5] = "k_EBadgeType_TI8_Finals"] = 5;
        values[valuesById[6] = "k_EBadgeType_TI8_AllEvent"] = 6;
        return values;
    })();
    
    /**
     * ELeagueStatus enum.
     * @exports ELeagueStatus
     * @enum {number}
     * @property {number} LEAGUE_STATUS_UNSET=0 LEAGUE_STATUS_UNSET value
     * @property {number} LEAGUE_STATUS_UNSUBMITTED=1 LEAGUE_STATUS_UNSUBMITTED value
     * @property {number} LEAGUE_STATUS_SUBMITTED=2 LEAGUE_STATUS_SUBMITTED value
     * @property {number} LEAGUE_STATUS_ACCEPTED=3 LEAGUE_STATUS_ACCEPTED value
     * @property {number} LEAGUE_STATUS_REJECTED=4 LEAGUE_STATUS_REJECTED value
     * @property {number} LEAGUE_STATUS_CONCLUDED=5 LEAGUE_STATUS_CONCLUDED value
     * @property {number} LEAGUE_STATUS_DELETED=6 LEAGUE_STATUS_DELETED value
     */
    $root.ELeagueStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LEAGUE_STATUS_UNSET"] = 0;
        values[valuesById[1] = "LEAGUE_STATUS_UNSUBMITTED"] = 1;
        values[valuesById[2] = "LEAGUE_STATUS_SUBMITTED"] = 2;
        values[valuesById[3] = "LEAGUE_STATUS_ACCEPTED"] = 3;
        values[valuesById[4] = "LEAGUE_STATUS_REJECTED"] = 4;
        values[valuesById[5] = "LEAGUE_STATUS_CONCLUDED"] = 5;
        values[valuesById[6] = "LEAGUE_STATUS_DELETED"] = 6;
        return values;
    })();
    
    /**
     * ELeagueRegion enum.
     * @exports ELeagueRegion
     * @enum {number}
     * @property {number} LEAGUE_REGION_UNSET=0 LEAGUE_REGION_UNSET value
     * @property {number} LEAGUE_REGION_NA=1 LEAGUE_REGION_NA value
     * @property {number} LEAGUE_REGION_SA=2 LEAGUE_REGION_SA value
     * @property {number} LEAGUE_REGION_EUROPE=3 LEAGUE_REGION_EUROPE value
     * @property {number} LEAGUE_REGION_CIS=4 LEAGUE_REGION_CIS value
     * @property {number} LEAGUE_REGION_CHINA=5 LEAGUE_REGION_CHINA value
     * @property {number} LEAGUE_REGION_SEA=6 LEAGUE_REGION_SEA value
     */
    $root.ELeagueRegion = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LEAGUE_REGION_UNSET"] = 0;
        values[valuesById[1] = "LEAGUE_REGION_NA"] = 1;
        values[valuesById[2] = "LEAGUE_REGION_SA"] = 2;
        values[valuesById[3] = "LEAGUE_REGION_EUROPE"] = 3;
        values[valuesById[4] = "LEAGUE_REGION_CIS"] = 4;
        values[valuesById[5] = "LEAGUE_REGION_CHINA"] = 5;
        values[valuesById[6] = "LEAGUE_REGION_SEA"] = 6;
        return values;
    })();
    
    /**
     * ELeagueTier enum.
     * @exports ELeagueTier
     * @enum {number}
     * @property {number} LEAGUE_TIER_UNSET=0 LEAGUE_TIER_UNSET value
     * @property {number} LEAGUE_TIER_AMATEUR=1 LEAGUE_TIER_AMATEUR value
     * @property {number} LEAGUE_TIER_PROFESSIONAL=2 LEAGUE_TIER_PROFESSIONAL value
     * @property {number} LEAGUE_TIER_MINOR=3 LEAGUE_TIER_MINOR value
     * @property {number} LEAGUE_TIER_MAJOR=4 LEAGUE_TIER_MAJOR value
     * @property {number} LEAGUE_TIER_INTERNATIONAL=5 LEAGUE_TIER_INTERNATIONAL value
     * @property {number} LEAGUE_TIER_DPC_QUALIFIER=6 LEAGUE_TIER_DPC_QUALIFIER value
     */
    $root.ELeagueTier = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LEAGUE_TIER_UNSET"] = 0;
        values[valuesById[1] = "LEAGUE_TIER_AMATEUR"] = 1;
        values[valuesById[2] = "LEAGUE_TIER_PROFESSIONAL"] = 2;
        values[valuesById[3] = "LEAGUE_TIER_MINOR"] = 3;
        values[valuesById[4] = "LEAGUE_TIER_MAJOR"] = 4;
        values[valuesById[5] = "LEAGUE_TIER_INTERNATIONAL"] = 5;
        values[valuesById[6] = "LEAGUE_TIER_DPC_QUALIFIER"] = 6;
        return values;
    })();
    
    /**
     * ELeagueTierCategory enum.
     * @exports ELeagueTierCategory
     * @enum {number}
     * @property {number} LEAGUE_TIER_CATEGORY_AMATEUR=1 LEAGUE_TIER_CATEGORY_AMATEUR value
     * @property {number} LEAGUE_TIER_CATEGORY_PROFESSIONAL=2 LEAGUE_TIER_CATEGORY_PROFESSIONAL value
     * @property {number} LEAGUE_TIER_CATEGORY_DPC=3 LEAGUE_TIER_CATEGORY_DPC value
     */
    $root.ELeagueTierCategory = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "LEAGUE_TIER_CATEGORY_AMATEUR"] = 1;
        values[valuesById[2] = "LEAGUE_TIER_CATEGORY_PROFESSIONAL"] = 2;
        values[valuesById[3] = "LEAGUE_TIER_CATEGORY_DPC"] = 3;
        return values;
    })();
    
    /**
     * ELeagueFlags enum.
     * @exports ELeagueFlags
     * @enum {number}
     * @property {number} LEAGUE_FLAGS_NONE=0 LEAGUE_FLAGS_NONE value
     * @property {number} LEAGUE_ACCEPTED_AGREEMENT=1 LEAGUE_ACCEPTED_AGREEMENT value
     * @property {number} LEAGUE_PAYMENT_EMAIL_SENT=2 LEAGUE_PAYMENT_EMAIL_SENT value
     * @property {number} LEAGUE_COMPENDIUM_ALLOWED=4 LEAGUE_COMPENDIUM_ALLOWED value
     * @property {number} LEAGUE_COMPENDIUM_PUBLIC=8 LEAGUE_COMPENDIUM_PUBLIC value
     */
    $root.ELeagueFlags = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LEAGUE_FLAGS_NONE"] = 0;
        values[valuesById[1] = "LEAGUE_ACCEPTED_AGREEMENT"] = 1;
        values[valuesById[2] = "LEAGUE_PAYMENT_EMAIL_SENT"] = 2;
        values[valuesById[4] = "LEAGUE_COMPENDIUM_ALLOWED"] = 4;
        values[valuesById[8] = "LEAGUE_COMPENDIUM_PUBLIC"] = 8;
        return values;
    })();
    
    /**
     * ELeagueBroadcastProvider enum.
     * @exports ELeagueBroadcastProvider
     * @enum {number}
     * @property {number} LEAGUE_BROADCAST_UNKNOWN=0 LEAGUE_BROADCAST_UNKNOWN value
     * @property {number} LEAGUE_BROADCAST_STEAM=1 LEAGUE_BROADCAST_STEAM value
     * @property {number} LEAGUE_BROADCAST_TWITCH=2 LEAGUE_BROADCAST_TWITCH value
     * @property {number} LEAGUE_BROADCAST_YOUTUBE=3 LEAGUE_BROADCAST_YOUTUBE value
     * @property {number} LEAGUE_BROADCAST_OTHER=100 LEAGUE_BROADCAST_OTHER value
     */
    $root.ELeagueBroadcastProvider = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LEAGUE_BROADCAST_UNKNOWN"] = 0;
        values[valuesById[1] = "LEAGUE_BROADCAST_STEAM"] = 1;
        values[valuesById[2] = "LEAGUE_BROADCAST_TWITCH"] = 2;
        values[valuesById[3] = "LEAGUE_BROADCAST_YOUTUBE"] = 3;
        values[valuesById[100] = "LEAGUE_BROADCAST_OTHER"] = 100;
        return values;
    })();
    
    /**
     * ELeaguePhase enum.
     * @exports ELeaguePhase
     * @enum {number}
     * @property {number} LEAGUE_PHASE_UNSET=0 LEAGUE_PHASE_UNSET value
     * @property {number} LEAGUE_PHASE_REGIONAL_QUALIFIER=1 LEAGUE_PHASE_REGIONAL_QUALIFIER value
     * @property {number} LEAGUE_PHASE_GROUP_STAGE=2 LEAGUE_PHASE_GROUP_STAGE value
     * @property {number} LEAGUE_PHASE_MAIN_EVENT=3 LEAGUE_PHASE_MAIN_EVENT value
     */
    $root.ELeaguePhase = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LEAGUE_PHASE_UNSET"] = 0;
        values[valuesById[1] = "LEAGUE_PHASE_REGIONAL_QUALIFIER"] = 1;
        values[valuesById[2] = "LEAGUE_PHASE_GROUP_STAGE"] = 2;
        values[valuesById[3] = "LEAGUE_PHASE_MAIN_EVENT"] = 3;
        return values;
    })();
    
    /**
     * ELeagueAuditAction enum.
     * @exports ELeagueAuditAction
     * @enum {number}
     * @property {number} LEAGUE_AUDIT_ACTION_INVALID=0 LEAGUE_AUDIT_ACTION_INVALID value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_CREATE=1 LEAGUE_AUDIT_ACTION_LEAGUE_CREATE value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_EDIT=2 LEAGUE_AUDIT_ACTION_LEAGUE_EDIT value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_DELETE=3 LEAGUE_AUDIT_ACTION_LEAGUE_DELETE value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_ADD=4 LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_ADD value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_REVOKE=5 LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_REVOKE value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_PROMOTE=6 LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_PROMOTE value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_ADD=7 LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_ADD value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_REMOVE=8 LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_REMOVE value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_IMAGE_UPDATED=9 LEAGUE_AUDIT_ACTION_LEAGUE_IMAGE_UPDATED value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_MESSAGE_ADDED=10 LEAGUE_AUDIT_ACTION_LEAGUE_MESSAGE_ADDED value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_SUBMITTED=11 LEAGUE_AUDIT_ACTION_LEAGUE_SUBMITTED value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_SET_PRIZE_POOL=12 LEAGUE_AUDIT_ACTION_LEAGUE_SET_PRIZE_POOL value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_ADD_PRIZE_POOL_ITEM=13 LEAGUE_AUDIT_ACTION_LEAGUE_ADD_PRIZE_POOL_ITEM value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_PRIZE_POOL_ITEM=14 LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_PRIZE_POOL_ITEM value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_START=15 LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_START value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_END=16 LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_END value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_ADD_INVITED_TEAM=17 LEAGUE_AUDIT_ACTION_LEAGUE_ADD_INVITED_TEAM value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_INVITED_TEAM=18 LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_INVITED_TEAM value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_STATUS_CHANGED=19 LEAGUE_AUDIT_ACTION_LEAGUE_STATUS_CHANGED value
     * @property {number} LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_EDIT=20 LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_EDIT value
     * @property {number} LEAGUE_AUDIT_ACTION_NODEGROUP_CREATE=100 LEAGUE_AUDIT_ACTION_NODEGROUP_CREATE value
     * @property {number} LEAGUE_AUDIT_ACTION_NODEGROUP_DESTROY=101 LEAGUE_AUDIT_ACTION_NODEGROUP_DESTROY value
     * @property {number} LEAGUE_AUDIT_ACTION_NODEGROUP_ADD_TEAM=102 LEAGUE_AUDIT_ACTION_NODEGROUP_ADD_TEAM value
     * @property {number} LEAGUE_AUDIT_ACTION_NODEGROUP_REMOVE_TEAM=103 LEAGUE_AUDIT_ACTION_NODEGROUP_REMOVE_TEAM value
     * @property {number} LEAGUE_AUDIT_ACTION_NODEGROUP_SET_ADVANCING=104 LEAGUE_AUDIT_ACTION_NODEGROUP_SET_ADVANCING value
     * @property {number} LEAGUE_AUDIT_ACTION_NODEGROUP_EDIT=105 LEAGUE_AUDIT_ACTION_NODEGROUP_EDIT value
     * @property {number} LEAGUE_AUDIT_ACTION_NODEGROUP_POPULATE=106 LEAGUE_AUDIT_ACTION_NODEGROUP_POPULATE value
     * @property {number} LEAGUE_AUDIT_ACTION_NODEGROUP_COMPLETED=107 LEAGUE_AUDIT_ACTION_NODEGROUP_COMPLETED value
     * @property {number} LEAGUE_AUDIT_ACTION_NODEGROUP_SET_SECONDARY_ADVANCING=108 LEAGUE_AUDIT_ACTION_NODEGROUP_SET_SECONDARY_ADVANCING value
     * @property {number} LEAGUE_AUDIT_ACTION_NODEGROUP_SET_TERTIARY_ADVANCING=109 LEAGUE_AUDIT_ACTION_NODEGROUP_SET_TERTIARY_ADVANCING value
     * @property {number} LEAGUE_AUDIT_ACTION_NODE_CREATE=200 LEAGUE_AUDIT_ACTION_NODE_CREATE value
     * @property {number} LEAGUE_AUDIT_ACTION_NODE_DESTROY=201 LEAGUE_AUDIT_ACTION_NODE_DESTROY value
     * @property {number} LEAGUE_AUDIT_ACTION_NODE_AUTOCREATE=202 LEAGUE_AUDIT_ACTION_NODE_AUTOCREATE value
     * @property {number} LEAGUE_AUDIT_ACTION_NODE_SET_TEAM=203 LEAGUE_AUDIT_ACTION_NODE_SET_TEAM value
     * @property {number} LEAGUE_AUDIT_ACTION_NODE_SET_SERIES_ID=204 LEAGUE_AUDIT_ACTION_NODE_SET_SERIES_ID value
     * @property {number} LEAGUE_AUDIT_ACTION_NODE_SET_ADVANCING=205 LEAGUE_AUDIT_ACTION_NODE_SET_ADVANCING value
     * @property {number} LEAGUE_AUDIT_ACTION_NODE_SET_TIME=206 LEAGUE_AUDIT_ACTION_NODE_SET_TIME value
     * @property {number} LEAGUE_AUDIT_ACTION_NODE_MATCH_COMPLETED=207 LEAGUE_AUDIT_ACTION_NODE_MATCH_COMPLETED value
     * @property {number} LEAGUE_AUDIT_ACTION_NODE_COMPLETED=208 LEAGUE_AUDIT_ACTION_NODE_COMPLETED value
     * @property {number} LEAGUE_AUDIT_ACTION_NODE_EDIT=209 LEAGUE_AUDIT_ACTION_NODE_EDIT value
     */
    $root.ELeagueAuditAction = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LEAGUE_AUDIT_ACTION_INVALID"] = 0;
        values[valuesById[1] = "LEAGUE_AUDIT_ACTION_LEAGUE_CREATE"] = 1;
        values[valuesById[2] = "LEAGUE_AUDIT_ACTION_LEAGUE_EDIT"] = 2;
        values[valuesById[3] = "LEAGUE_AUDIT_ACTION_LEAGUE_DELETE"] = 3;
        values[valuesById[4] = "LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_ADD"] = 4;
        values[valuesById[5] = "LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_REVOKE"] = 5;
        values[valuesById[6] = "LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_PROMOTE"] = 6;
        values[valuesById[7] = "LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_ADD"] = 7;
        values[valuesById[8] = "LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_REMOVE"] = 8;
        values[valuesById[9] = "LEAGUE_AUDIT_ACTION_LEAGUE_IMAGE_UPDATED"] = 9;
        values[valuesById[10] = "LEAGUE_AUDIT_ACTION_LEAGUE_MESSAGE_ADDED"] = 10;
        values[valuesById[11] = "LEAGUE_AUDIT_ACTION_LEAGUE_SUBMITTED"] = 11;
        values[valuesById[12] = "LEAGUE_AUDIT_ACTION_LEAGUE_SET_PRIZE_POOL"] = 12;
        values[valuesById[13] = "LEAGUE_AUDIT_ACTION_LEAGUE_ADD_PRIZE_POOL_ITEM"] = 13;
        values[valuesById[14] = "LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_PRIZE_POOL_ITEM"] = 14;
        values[valuesById[15] = "LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_START"] = 15;
        values[valuesById[16] = "LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_END"] = 16;
        values[valuesById[17] = "LEAGUE_AUDIT_ACTION_LEAGUE_ADD_INVITED_TEAM"] = 17;
        values[valuesById[18] = "LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_INVITED_TEAM"] = 18;
        values[valuesById[19] = "LEAGUE_AUDIT_ACTION_LEAGUE_STATUS_CHANGED"] = 19;
        values[valuesById[20] = "LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_EDIT"] = 20;
        values[valuesById[100] = "LEAGUE_AUDIT_ACTION_NODEGROUP_CREATE"] = 100;
        values[valuesById[101] = "LEAGUE_AUDIT_ACTION_NODEGROUP_DESTROY"] = 101;
        values[valuesById[102] = "LEAGUE_AUDIT_ACTION_NODEGROUP_ADD_TEAM"] = 102;
        values[valuesById[103] = "LEAGUE_AUDIT_ACTION_NODEGROUP_REMOVE_TEAM"] = 103;
        values[valuesById[104] = "LEAGUE_AUDIT_ACTION_NODEGROUP_SET_ADVANCING"] = 104;
        values[valuesById[105] = "LEAGUE_AUDIT_ACTION_NODEGROUP_EDIT"] = 105;
        values[valuesById[106] = "LEAGUE_AUDIT_ACTION_NODEGROUP_POPULATE"] = 106;
        values[valuesById[107] = "LEAGUE_AUDIT_ACTION_NODEGROUP_COMPLETED"] = 107;
        values[valuesById[108] = "LEAGUE_AUDIT_ACTION_NODEGROUP_SET_SECONDARY_ADVANCING"] = 108;
        values[valuesById[109] = "LEAGUE_AUDIT_ACTION_NODEGROUP_SET_TERTIARY_ADVANCING"] = 109;
        values[valuesById[200] = "LEAGUE_AUDIT_ACTION_NODE_CREATE"] = 200;
        values[valuesById[201] = "LEAGUE_AUDIT_ACTION_NODE_DESTROY"] = 201;
        values[valuesById[202] = "LEAGUE_AUDIT_ACTION_NODE_AUTOCREATE"] = 202;
        values[valuesById[203] = "LEAGUE_AUDIT_ACTION_NODE_SET_TEAM"] = 203;
        values[valuesById[204] = "LEAGUE_AUDIT_ACTION_NODE_SET_SERIES_ID"] = 204;
        values[valuesById[205] = "LEAGUE_AUDIT_ACTION_NODE_SET_ADVANCING"] = 205;
        values[valuesById[206] = "LEAGUE_AUDIT_ACTION_NODE_SET_TIME"] = 206;
        values[valuesById[207] = "LEAGUE_AUDIT_ACTION_NODE_MATCH_COMPLETED"] = 207;
        values[valuesById[208] = "LEAGUE_AUDIT_ACTION_NODE_COMPLETED"] = 208;
        values[valuesById[209] = "LEAGUE_AUDIT_ACTION_NODE_EDIT"] = 209;
        return values;
    })();
    
    /**
     * DOTA_COMBATLOG_TYPES enum.
     * @exports DOTA_COMBATLOG_TYPES
     * @enum {number}
     * @property {number} DOTA_COMBATLOG_INVALID=-1 DOTA_COMBATLOG_INVALID value
     * @property {number} DOTA_COMBATLOG_DAMAGE=0 DOTA_COMBATLOG_DAMAGE value
     * @property {number} DOTA_COMBATLOG_HEAL=1 DOTA_COMBATLOG_HEAL value
     * @property {number} DOTA_COMBATLOG_MODIFIER_ADD=2 DOTA_COMBATLOG_MODIFIER_ADD value
     * @property {number} DOTA_COMBATLOG_MODIFIER_REMOVE=3 DOTA_COMBATLOG_MODIFIER_REMOVE value
     * @property {number} DOTA_COMBATLOG_DEATH=4 DOTA_COMBATLOG_DEATH value
     * @property {number} DOTA_COMBATLOG_ABILITY=5 DOTA_COMBATLOG_ABILITY value
     * @property {number} DOTA_COMBATLOG_ITEM=6 DOTA_COMBATLOG_ITEM value
     * @property {number} DOTA_COMBATLOG_LOCATION=7 DOTA_COMBATLOG_LOCATION value
     * @property {number} DOTA_COMBATLOG_GOLD=8 DOTA_COMBATLOG_GOLD value
     * @property {number} DOTA_COMBATLOG_GAME_STATE=9 DOTA_COMBATLOG_GAME_STATE value
     * @property {number} DOTA_COMBATLOG_XP=10 DOTA_COMBATLOG_XP value
     * @property {number} DOTA_COMBATLOG_PURCHASE=11 DOTA_COMBATLOG_PURCHASE value
     * @property {number} DOTA_COMBATLOG_BUYBACK=12 DOTA_COMBATLOG_BUYBACK value
     * @property {number} DOTA_COMBATLOG_ABILITY_TRIGGER=13 DOTA_COMBATLOG_ABILITY_TRIGGER value
     * @property {number} DOTA_COMBATLOG_PLAYERSTATS=14 DOTA_COMBATLOG_PLAYERSTATS value
     * @property {number} DOTA_COMBATLOG_MULTIKILL=15 DOTA_COMBATLOG_MULTIKILL value
     * @property {number} DOTA_COMBATLOG_KILLSTREAK=16 DOTA_COMBATLOG_KILLSTREAK value
     * @property {number} DOTA_COMBATLOG_TEAM_BUILDING_KILL=17 DOTA_COMBATLOG_TEAM_BUILDING_KILL value
     * @property {number} DOTA_COMBATLOG_FIRST_BLOOD=18 DOTA_COMBATLOG_FIRST_BLOOD value
     * @property {number} DOTA_COMBATLOG_MODIFIER_STACK_EVENT=19 DOTA_COMBATLOG_MODIFIER_STACK_EVENT value
     * @property {number} DOTA_COMBATLOG_NEUTRAL_CAMP_STACK=20 DOTA_COMBATLOG_NEUTRAL_CAMP_STACK value
     * @property {number} DOTA_COMBATLOG_PICKUP_RUNE=21 DOTA_COMBATLOG_PICKUP_RUNE value
     * @property {number} DOTA_COMBATLOG_REVEALED_INVISIBLE=22 DOTA_COMBATLOG_REVEALED_INVISIBLE value
     * @property {number} DOTA_COMBATLOG_HERO_SAVED=23 DOTA_COMBATLOG_HERO_SAVED value
     * @property {number} DOTA_COMBATLOG_MANA_RESTORED=24 DOTA_COMBATLOG_MANA_RESTORED value
     * @property {number} DOTA_COMBATLOG_HERO_LEVELUP=25 DOTA_COMBATLOG_HERO_LEVELUP value
     * @property {number} DOTA_COMBATLOG_BOTTLE_HEAL_ALLY=26 DOTA_COMBATLOG_BOTTLE_HEAL_ALLY value
     * @property {number} DOTA_COMBATLOG_ENDGAME_STATS=27 DOTA_COMBATLOG_ENDGAME_STATS value
     * @property {number} DOTA_COMBATLOG_INTERRUPT_CHANNEL=28 DOTA_COMBATLOG_INTERRUPT_CHANNEL value
     * @property {number} DOTA_COMBATLOG_ALLIED_GOLD=29 DOTA_COMBATLOG_ALLIED_GOLD value
     * @property {number} DOTA_COMBATLOG_AEGIS_TAKEN=30 DOTA_COMBATLOG_AEGIS_TAKEN value
     * @property {number} DOTA_COMBATLOG_MANA_DAMAGE=31 DOTA_COMBATLOG_MANA_DAMAGE value
     * @property {number} DOTA_COMBATLOG_PHYSICAL_DAMAGE_PREVENTED=32 DOTA_COMBATLOG_PHYSICAL_DAMAGE_PREVENTED value
     * @property {number} DOTA_COMBATLOG_UNIT_SUMMONED=33 DOTA_COMBATLOG_UNIT_SUMMONED value
     * @property {number} DOTA_COMBATLOG_ATTACK_EVADE=34 DOTA_COMBATLOG_ATTACK_EVADE value
     * @property {number} DOTA_COMBATLOG_TREE_CUT=35 DOTA_COMBATLOG_TREE_CUT value
     * @property {number} DOTA_COMBATLOG_SUCCESSFUL_SCAN=36 DOTA_COMBATLOG_SUCCESSFUL_SCAN value
     * @property {number} DOTA_COMBATLOG_END_KILLSTREAK=37 DOTA_COMBATLOG_END_KILLSTREAK value
     * @property {number} DOTA_COMBATLOG_BLOODSTONE_CHARGE=38 DOTA_COMBATLOG_BLOODSTONE_CHARGE value
     * @property {number} DOTA_COMBATLOG_CRITICAL_DAMAGE=39 DOTA_COMBATLOG_CRITICAL_DAMAGE value
     * @property {number} DOTA_COMBATLOG_SPELL_ABSORB=40 DOTA_COMBATLOG_SPELL_ABSORB value
     * @property {number} DOTA_COMBATLOG_UNIT_TELEPORTED=41 DOTA_COMBATLOG_UNIT_TELEPORTED value
     * @property {number} DOTA_COMBATLOG_KILL_EATER_EVENT=42 DOTA_COMBATLOG_KILL_EATER_EVENT value
     */
    $root.DOTA_COMBATLOG_TYPES = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[-1] = "DOTA_COMBATLOG_INVALID"] = -1;
        values[valuesById[0] = "DOTA_COMBATLOG_DAMAGE"] = 0;
        values[valuesById[1] = "DOTA_COMBATLOG_HEAL"] = 1;
        values[valuesById[2] = "DOTA_COMBATLOG_MODIFIER_ADD"] = 2;
        values[valuesById[3] = "DOTA_COMBATLOG_MODIFIER_REMOVE"] = 3;
        values[valuesById[4] = "DOTA_COMBATLOG_DEATH"] = 4;
        values[valuesById[5] = "DOTA_COMBATLOG_ABILITY"] = 5;
        values[valuesById[6] = "DOTA_COMBATLOG_ITEM"] = 6;
        values[valuesById[7] = "DOTA_COMBATLOG_LOCATION"] = 7;
        values[valuesById[8] = "DOTA_COMBATLOG_GOLD"] = 8;
        values[valuesById[9] = "DOTA_COMBATLOG_GAME_STATE"] = 9;
        values[valuesById[10] = "DOTA_COMBATLOG_XP"] = 10;
        values[valuesById[11] = "DOTA_COMBATLOG_PURCHASE"] = 11;
        values[valuesById[12] = "DOTA_COMBATLOG_BUYBACK"] = 12;
        values[valuesById[13] = "DOTA_COMBATLOG_ABILITY_TRIGGER"] = 13;
        values[valuesById[14] = "DOTA_COMBATLOG_PLAYERSTATS"] = 14;
        values[valuesById[15] = "DOTA_COMBATLOG_MULTIKILL"] = 15;
        values[valuesById[16] = "DOTA_COMBATLOG_KILLSTREAK"] = 16;
        values[valuesById[17] = "DOTA_COMBATLOG_TEAM_BUILDING_KILL"] = 17;
        values[valuesById[18] = "DOTA_COMBATLOG_FIRST_BLOOD"] = 18;
        values[valuesById[19] = "DOTA_COMBATLOG_MODIFIER_STACK_EVENT"] = 19;
        values[valuesById[20] = "DOTA_COMBATLOG_NEUTRAL_CAMP_STACK"] = 20;
        values[valuesById[21] = "DOTA_COMBATLOG_PICKUP_RUNE"] = 21;
        values[valuesById[22] = "DOTA_COMBATLOG_REVEALED_INVISIBLE"] = 22;
        values[valuesById[23] = "DOTA_COMBATLOG_HERO_SAVED"] = 23;
        values[valuesById[24] = "DOTA_COMBATLOG_MANA_RESTORED"] = 24;
        values[valuesById[25] = "DOTA_COMBATLOG_HERO_LEVELUP"] = 25;
        values[valuesById[26] = "DOTA_COMBATLOG_BOTTLE_HEAL_ALLY"] = 26;
        values[valuesById[27] = "DOTA_COMBATLOG_ENDGAME_STATS"] = 27;
        values[valuesById[28] = "DOTA_COMBATLOG_INTERRUPT_CHANNEL"] = 28;
        values[valuesById[29] = "DOTA_COMBATLOG_ALLIED_GOLD"] = 29;
        values[valuesById[30] = "DOTA_COMBATLOG_AEGIS_TAKEN"] = 30;
        values[valuesById[31] = "DOTA_COMBATLOG_MANA_DAMAGE"] = 31;
        values[valuesById[32] = "DOTA_COMBATLOG_PHYSICAL_DAMAGE_PREVENTED"] = 32;
        values[valuesById[33] = "DOTA_COMBATLOG_UNIT_SUMMONED"] = 33;
        values[valuesById[34] = "DOTA_COMBATLOG_ATTACK_EVADE"] = 34;
        values[valuesById[35] = "DOTA_COMBATLOG_TREE_CUT"] = 35;
        values[valuesById[36] = "DOTA_COMBATLOG_SUCCESSFUL_SCAN"] = 36;
        values[valuesById[37] = "DOTA_COMBATLOG_END_KILLSTREAK"] = 37;
        values[valuesById[38] = "DOTA_COMBATLOG_BLOODSTONE_CHARGE"] = 38;
        values[valuesById[39] = "DOTA_COMBATLOG_CRITICAL_DAMAGE"] = 39;
        values[valuesById[40] = "DOTA_COMBATLOG_SPELL_ABSORB"] = 40;
        values[valuesById[41] = "DOTA_COMBATLOG_UNIT_TELEPORTED"] = 41;
        values[valuesById[42] = "DOTA_COMBATLOG_KILL_EATER_EVENT"] = 42;
        return values;
    })();
    
    /**
     * EDPCFavoriteType enum.
     * @exports EDPCFavoriteType
     * @enum {number}
     * @property {number} FAVORITE_TYPE_ALL=0 FAVORITE_TYPE_ALL value
     * @property {number} FAVORITE_TYPE_PLAYER=1 FAVORITE_TYPE_PLAYER value
     * @property {number} FAVORITE_TYPE_TEAM=2 FAVORITE_TYPE_TEAM value
     * @property {number} FAVORITE_TYPE_LEAGUE=3 FAVORITE_TYPE_LEAGUE value
     */
    $root.EDPCFavoriteType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "FAVORITE_TYPE_ALL"] = 0;
        values[valuesById[1] = "FAVORITE_TYPE_PLAYER"] = 1;
        values[valuesById[2] = "FAVORITE_TYPE_TEAM"] = 2;
        values[valuesById[3] = "FAVORITE_TYPE_LEAGUE"] = 3;
        return values;
    })();
    
    /**
     * EDPCPushNotification enum.
     * @exports EDPCPushNotification
     * @enum {number}
     * @property {number} DPC_PUSH_NOTIFICATION_MATCH_STARTING=1 DPC_PUSH_NOTIFICATION_MATCH_STARTING value
     * @property {number} DPC_PUSH_NOTIFICATION_PLAYER_LEFT_TEAM=10 DPC_PUSH_NOTIFICATION_PLAYER_LEFT_TEAM value
     * @property {number} DPC_PUSH_NOTIFICATION_PLAYER_JOINED_TEAM=11 DPC_PUSH_NOTIFICATION_PLAYER_JOINED_TEAM value
     * @property {number} DPC_PUSH_NOTIFICATION_LEAGUE_RESULT=20 DPC_PUSH_NOTIFICATION_LEAGUE_RESULT value
     * @property {number} DPC_PUSH_NOTIFICATION_PREDICTION_MATCHES_AVAILABLE=30 DPC_PUSH_NOTIFICATION_PREDICTION_MATCHES_AVAILABLE value
     * @property {number} DPC_PUSH_NOTIFICATION_PREDICTION_RESULT=31 DPC_PUSH_NOTIFICATION_PREDICTION_RESULT value
     * @property {number} DPC_PUSH_NOTIFICATION_FANTASY_PLAYER_CLEARED=40 DPC_PUSH_NOTIFICATION_FANTASY_PLAYER_CLEARED value
     * @property {number} DPC_PUSH_NOTIFICATION_FANTASY_DAILY_SUMMARY=41 DPC_PUSH_NOTIFICATION_FANTASY_DAILY_SUMMARY value
     * @property {number} DPC_PUSH_NOTIFICATION_FANTASY_FINAL_RESULTS=42 DPC_PUSH_NOTIFICATION_FANTASY_FINAL_RESULTS value
     */
    $root.EDPCPushNotification = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "DPC_PUSH_NOTIFICATION_MATCH_STARTING"] = 1;
        values[valuesById[10] = "DPC_PUSH_NOTIFICATION_PLAYER_LEFT_TEAM"] = 10;
        values[valuesById[11] = "DPC_PUSH_NOTIFICATION_PLAYER_JOINED_TEAM"] = 11;
        values[valuesById[20] = "DPC_PUSH_NOTIFICATION_LEAGUE_RESULT"] = 20;
        values[valuesById[30] = "DPC_PUSH_NOTIFICATION_PREDICTION_MATCHES_AVAILABLE"] = 30;
        values[valuesById[31] = "DPC_PUSH_NOTIFICATION_PREDICTION_RESULT"] = 31;
        values[valuesById[40] = "DPC_PUSH_NOTIFICATION_FANTASY_PLAYER_CLEARED"] = 40;
        values[valuesById[41] = "DPC_PUSH_NOTIFICATION_FANTASY_DAILY_SUMMARY"] = 41;
        values[valuesById[42] = "DPC_PUSH_NOTIFICATION_FANTASY_FINAL_RESULTS"] = 42;
        return values;
    })();
    
    /**
     * EEventActionScoreMode enum.
     * @exports EEventActionScoreMode
     * @enum {number}
     * @property {number} k_eEventActionScoreMode_Add=0 k_eEventActionScoreMode_Add value
     * @property {number} k_eEventActionScoreMode_Min=1 k_eEventActionScoreMode_Min value
     */
    $root.EEventActionScoreMode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_eEventActionScoreMode_Add"] = 0;
        values[valuesById[1] = "k_eEventActionScoreMode_Min"] = 1;
        return values;
    })();
    
    $root.CDOTAClientHardwareSpecs = (function() {
    
        /**
         * Properties of a CDOTAClientHardwareSpecs.
         * @exports ICDOTAClientHardwareSpecs
         * @interface ICDOTAClientHardwareSpecs
         * @property {number|null} [logical_processors] CDOTAClientHardwareSpecs logical_processors
         * @property {number|Long|null} [cpu_cycles_per_second] CDOTAClientHardwareSpecs cpu_cycles_per_second
         * @property {number|Long|null} [total_physical_memory] CDOTAClientHardwareSpecs total_physical_memory
         * @property {boolean|null} [is_64_bit_os] CDOTAClientHardwareSpecs is_64_bit_os
         * @property {number|Long|null} [upload_measurement] CDOTAClientHardwareSpecs upload_measurement
         * @property {boolean|null} [prefer_not_host] CDOTAClientHardwareSpecs prefer_not_host
         */
    
        /**
         * Constructs a new CDOTAClientHardwareSpecs.
         * @exports CDOTAClientHardwareSpecs
         * @classdesc Represents a CDOTAClientHardwareSpecs.
         * @implements ICDOTAClientHardwareSpecs
         * @constructor
         * @param {ICDOTAClientHardwareSpecs=} [properties] Properties to set
         */
        function CDOTAClientHardwareSpecs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDOTAClientHardwareSpecs logical_processors.
         * @member {number} logical_processors
         * @memberof CDOTAClientHardwareSpecs
         * @instance
         */
        CDOTAClientHardwareSpecs.prototype.logical_processors = 0;
    
        /**
         * CDOTAClientHardwareSpecs cpu_cycles_per_second.
         * @member {number|Long} cpu_cycles_per_second
         * @memberof CDOTAClientHardwareSpecs
         * @instance
         */
        CDOTAClientHardwareSpecs.prototype.cpu_cycles_per_second = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CDOTAClientHardwareSpecs total_physical_memory.
         * @member {number|Long} total_physical_memory
         * @memberof CDOTAClientHardwareSpecs
         * @instance
         */
        CDOTAClientHardwareSpecs.prototype.total_physical_memory = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CDOTAClientHardwareSpecs is_64_bit_os.
         * @member {boolean} is_64_bit_os
         * @memberof CDOTAClientHardwareSpecs
         * @instance
         */
        CDOTAClientHardwareSpecs.prototype.is_64_bit_os = false;
    
        /**
         * CDOTAClientHardwareSpecs upload_measurement.
         * @member {number|Long} upload_measurement
         * @memberof CDOTAClientHardwareSpecs
         * @instance
         */
        CDOTAClientHardwareSpecs.prototype.upload_measurement = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CDOTAClientHardwareSpecs prefer_not_host.
         * @member {boolean} prefer_not_host
         * @memberof CDOTAClientHardwareSpecs
         * @instance
         */
        CDOTAClientHardwareSpecs.prototype.prefer_not_host = false;
    
        /**
         * Creates a new CDOTAClientHardwareSpecs instance using the specified properties.
         * @function create
         * @memberof CDOTAClientHardwareSpecs
         * @static
         * @param {ICDOTAClientHardwareSpecs=} [properties] Properties to set
         * @returns {CDOTAClientHardwareSpecs} CDOTAClientHardwareSpecs instance
         */
        CDOTAClientHardwareSpecs.create = function create(properties) {
            return new CDOTAClientHardwareSpecs(properties);
        };
    
        /**
         * Encodes the specified CDOTAClientHardwareSpecs message. Does not implicitly {@link CDOTAClientHardwareSpecs.verify|verify} messages.
         * @function encode
         * @memberof CDOTAClientHardwareSpecs
         * @static
         * @param {ICDOTAClientHardwareSpecs} message CDOTAClientHardwareSpecs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDOTAClientHardwareSpecs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.logical_processors != null && Object.hasOwnProperty.call(message, "logical_processors"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.logical_processors);
            if (message.cpu_cycles_per_second != null && Object.hasOwnProperty.call(message, "cpu_cycles_per_second"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.cpu_cycles_per_second);
            if (message.total_physical_memory != null && Object.hasOwnProperty.call(message, "total_physical_memory"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.total_physical_memory);
            if (message.is_64_bit_os != null && Object.hasOwnProperty.call(message, "is_64_bit_os"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.is_64_bit_os);
            if (message.upload_measurement != null && Object.hasOwnProperty.call(message, "upload_measurement"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.upload_measurement);
            if (message.prefer_not_host != null && Object.hasOwnProperty.call(message, "prefer_not_host"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.prefer_not_host);
            return writer;
        };
    
        /**
         * Encodes the specified CDOTAClientHardwareSpecs message, length delimited. Does not implicitly {@link CDOTAClientHardwareSpecs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDOTAClientHardwareSpecs
         * @static
         * @param {ICDOTAClientHardwareSpecs} message CDOTAClientHardwareSpecs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDOTAClientHardwareSpecs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDOTAClientHardwareSpecs message from the specified reader or buffer.
         * @function decode
         * @memberof CDOTAClientHardwareSpecs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDOTAClientHardwareSpecs} CDOTAClientHardwareSpecs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDOTAClientHardwareSpecs.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDOTAClientHardwareSpecs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.logical_processors = reader.uint32();
                    break;
                case 2:
                    message.cpu_cycles_per_second = reader.fixed64();
                    break;
                case 3:
                    message.total_physical_memory = reader.fixed64();
                    break;
                case 4:
                    message.is_64_bit_os = reader.bool();
                    break;
                case 5:
                    message.upload_measurement = reader.uint64();
                    break;
                case 6:
                    message.prefer_not_host = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CDOTAClientHardwareSpecs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDOTAClientHardwareSpecs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDOTAClientHardwareSpecs} CDOTAClientHardwareSpecs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDOTAClientHardwareSpecs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDOTAClientHardwareSpecs message.
         * @function verify
         * @memberof CDOTAClientHardwareSpecs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDOTAClientHardwareSpecs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.logical_processors != null && message.hasOwnProperty("logical_processors"))
                if (!$util.isInteger(message.logical_processors))
                    return "logical_processors: integer expected";
            if (message.cpu_cycles_per_second != null && message.hasOwnProperty("cpu_cycles_per_second"))
                if (!$util.isInteger(message.cpu_cycles_per_second) && !(message.cpu_cycles_per_second && $util.isInteger(message.cpu_cycles_per_second.low) && $util.isInteger(message.cpu_cycles_per_second.high)))
                    return "cpu_cycles_per_second: integer|Long expected";
            if (message.total_physical_memory != null && message.hasOwnProperty("total_physical_memory"))
                if (!$util.isInteger(message.total_physical_memory) && !(message.total_physical_memory && $util.isInteger(message.total_physical_memory.low) && $util.isInteger(message.total_physical_memory.high)))
                    return "total_physical_memory: integer|Long expected";
            if (message.is_64_bit_os != null && message.hasOwnProperty("is_64_bit_os"))
                if (typeof message.is_64_bit_os !== "boolean")
                    return "is_64_bit_os: boolean expected";
            if (message.upload_measurement != null && message.hasOwnProperty("upload_measurement"))
                if (!$util.isInteger(message.upload_measurement) && !(message.upload_measurement && $util.isInteger(message.upload_measurement.low) && $util.isInteger(message.upload_measurement.high)))
                    return "upload_measurement: integer|Long expected";
            if (message.prefer_not_host != null && message.hasOwnProperty("prefer_not_host"))
                if (typeof message.prefer_not_host !== "boolean")
                    return "prefer_not_host: boolean expected";
            return null;
        };
    
        /**
         * Creates a CDOTAClientHardwareSpecs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDOTAClientHardwareSpecs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDOTAClientHardwareSpecs} CDOTAClientHardwareSpecs
         */
        CDOTAClientHardwareSpecs.fromObject = function fromObject(object) {
            if (object instanceof $root.CDOTAClientHardwareSpecs)
                return object;
            var message = new $root.CDOTAClientHardwareSpecs();
            if (object.logical_processors != null)
                message.logical_processors = object.logical_processors >>> 0;
            if (object.cpu_cycles_per_second != null)
                if ($util.Long)
                    (message.cpu_cycles_per_second = $util.Long.fromValue(object.cpu_cycles_per_second)).unsigned = false;
                else if (typeof object.cpu_cycles_per_second === "string")
                    message.cpu_cycles_per_second = parseInt(object.cpu_cycles_per_second, 10);
                else if (typeof object.cpu_cycles_per_second === "number")
                    message.cpu_cycles_per_second = object.cpu_cycles_per_second;
                else if (typeof object.cpu_cycles_per_second === "object")
                    message.cpu_cycles_per_second = new $util.LongBits(object.cpu_cycles_per_second.low >>> 0, object.cpu_cycles_per_second.high >>> 0).toNumber();
            if (object.total_physical_memory != null)
                if ($util.Long)
                    (message.total_physical_memory = $util.Long.fromValue(object.total_physical_memory)).unsigned = false;
                else if (typeof object.total_physical_memory === "string")
                    message.total_physical_memory = parseInt(object.total_physical_memory, 10);
                else if (typeof object.total_physical_memory === "number")
                    message.total_physical_memory = object.total_physical_memory;
                else if (typeof object.total_physical_memory === "object")
                    message.total_physical_memory = new $util.LongBits(object.total_physical_memory.low >>> 0, object.total_physical_memory.high >>> 0).toNumber();
            if (object.is_64_bit_os != null)
                message.is_64_bit_os = Boolean(object.is_64_bit_os);
            if (object.upload_measurement != null)
                if ($util.Long)
                    (message.upload_measurement = $util.Long.fromValue(object.upload_measurement)).unsigned = true;
                else if (typeof object.upload_measurement === "string")
                    message.upload_measurement = parseInt(object.upload_measurement, 10);
                else if (typeof object.upload_measurement === "number")
                    message.upload_measurement = object.upload_measurement;
                else if (typeof object.upload_measurement === "object")
                    message.upload_measurement = new $util.LongBits(object.upload_measurement.low >>> 0, object.upload_measurement.high >>> 0).toNumber(true);
            if (object.prefer_not_host != null)
                message.prefer_not_host = Boolean(object.prefer_not_host);
            return message;
        };
    
        /**
         * Creates a plain object from a CDOTAClientHardwareSpecs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDOTAClientHardwareSpecs
         * @static
         * @param {CDOTAClientHardwareSpecs} message CDOTAClientHardwareSpecs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDOTAClientHardwareSpecs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.logical_processors = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.cpu_cycles_per_second = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cpu_cycles_per_second = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.total_physical_memory = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total_physical_memory = options.longs === String ? "0" : 0;
                object.is_64_bit_os = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.upload_measurement = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.upload_measurement = options.longs === String ? "0" : 0;
                object.prefer_not_host = false;
            }
            if (message.logical_processors != null && message.hasOwnProperty("logical_processors"))
                object.logical_processors = message.logical_processors;
            if (message.cpu_cycles_per_second != null && message.hasOwnProperty("cpu_cycles_per_second"))
                if (typeof message.cpu_cycles_per_second === "number")
                    object.cpu_cycles_per_second = options.longs === String ? String(message.cpu_cycles_per_second) : message.cpu_cycles_per_second;
                else
                    object.cpu_cycles_per_second = options.longs === String ? $util.Long.prototype.toString.call(message.cpu_cycles_per_second) : options.longs === Number ? new $util.LongBits(message.cpu_cycles_per_second.low >>> 0, message.cpu_cycles_per_second.high >>> 0).toNumber() : message.cpu_cycles_per_second;
            if (message.total_physical_memory != null && message.hasOwnProperty("total_physical_memory"))
                if (typeof message.total_physical_memory === "number")
                    object.total_physical_memory = options.longs === String ? String(message.total_physical_memory) : message.total_physical_memory;
                else
                    object.total_physical_memory = options.longs === String ? $util.Long.prototype.toString.call(message.total_physical_memory) : options.longs === Number ? new $util.LongBits(message.total_physical_memory.low >>> 0, message.total_physical_memory.high >>> 0).toNumber() : message.total_physical_memory;
            if (message.is_64_bit_os != null && message.hasOwnProperty("is_64_bit_os"))
                object.is_64_bit_os = message.is_64_bit_os;
            if (message.upload_measurement != null && message.hasOwnProperty("upload_measurement"))
                if (typeof message.upload_measurement === "number")
                    object.upload_measurement = options.longs === String ? String(message.upload_measurement) : message.upload_measurement;
                else
                    object.upload_measurement = options.longs === String ? $util.Long.prototype.toString.call(message.upload_measurement) : options.longs === Number ? new $util.LongBits(message.upload_measurement.low >>> 0, message.upload_measurement.high >>> 0).toNumber(true) : message.upload_measurement;
            if (message.prefer_not_host != null && message.hasOwnProperty("prefer_not_host"))
                object.prefer_not_host = message.prefer_not_host;
            return object;
        };
    
        /**
         * Converts this CDOTAClientHardwareSpecs to JSON.
         * @function toJSON
         * @memberof CDOTAClientHardwareSpecs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDOTAClientHardwareSpecs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CDOTAClientHardwareSpecs;
    })();
    
    $root.CDOTASaveGame = (function() {
    
        /**
         * Properties of a CDOTASaveGame.
         * @exports ICDOTASaveGame
         * @interface ICDOTASaveGame
         * @property {number|Long|null} [match_id] CDOTASaveGame match_id
         * @property {number|null} [save_time] CDOTASaveGame save_time
         * @property {Array.<CDOTASaveGame.IPlayer>|null} [players] CDOTASaveGame players
         * @property {Array.<CDOTASaveGame.ISaveInstance>|null} [save_instances] CDOTASaveGame save_instances
         */
    
        /**
         * Constructs a new CDOTASaveGame.
         * @exports CDOTASaveGame
         * @classdesc Represents a CDOTASaveGame.
         * @implements ICDOTASaveGame
         * @constructor
         * @param {ICDOTASaveGame=} [properties] Properties to set
         */
        function CDOTASaveGame(properties) {
            this.players = [];
            this.save_instances = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDOTASaveGame match_id.
         * @member {number|Long} match_id
         * @memberof CDOTASaveGame
         * @instance
         */
        CDOTASaveGame.prototype.match_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CDOTASaveGame save_time.
         * @member {number} save_time
         * @memberof CDOTASaveGame
         * @instance
         */
        CDOTASaveGame.prototype.save_time = 0;
    
        /**
         * CDOTASaveGame players.
         * @member {Array.<CDOTASaveGame.IPlayer>} players
         * @memberof CDOTASaveGame
         * @instance
         */
        CDOTASaveGame.prototype.players = $util.emptyArray;
    
        /**
         * CDOTASaveGame save_instances.
         * @member {Array.<CDOTASaveGame.ISaveInstance>} save_instances
         * @memberof CDOTASaveGame
         * @instance
         */
        CDOTASaveGame.prototype.save_instances = $util.emptyArray;
    
        /**
         * Creates a new CDOTASaveGame instance using the specified properties.
         * @function create
         * @memberof CDOTASaveGame
         * @static
         * @param {ICDOTASaveGame=} [properties] Properties to set
         * @returns {CDOTASaveGame} CDOTASaveGame instance
         */
        CDOTASaveGame.create = function create(properties) {
            return new CDOTASaveGame(properties);
        };
    
        /**
         * Encodes the specified CDOTASaveGame message. Does not implicitly {@link CDOTASaveGame.verify|verify} messages.
         * @function encode
         * @memberof CDOTASaveGame
         * @static
         * @param {ICDOTASaveGame} message CDOTASaveGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDOTASaveGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.save_time != null && Object.hasOwnProperty.call(message, "save_time"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.save_time);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.CDOTASaveGame.Player.encode(message.players[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.save_instances != null && message.save_instances.length)
                for (var i = 0; i < message.save_instances.length; ++i)
                    $root.CDOTASaveGame.SaveInstance.encode(message.save_instances[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.match_id != null && Object.hasOwnProperty.call(message, "match_id"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.match_id);
            return writer;
        };
    
        /**
         * Encodes the specified CDOTASaveGame message, length delimited. Does not implicitly {@link CDOTASaveGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDOTASaveGame
         * @static
         * @param {ICDOTASaveGame} message CDOTASaveGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDOTASaveGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDOTASaveGame message from the specified reader or buffer.
         * @function decode
         * @memberof CDOTASaveGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDOTASaveGame} CDOTASaveGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDOTASaveGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDOTASaveGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 5:
                    message.match_id = reader.uint64();
                    break;
                case 2:
                    message.save_time = reader.uint32();
                    break;
                case 3:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.CDOTASaveGame.Player.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.save_instances && message.save_instances.length))
                        message.save_instances = [];
                    message.save_instances.push($root.CDOTASaveGame.SaveInstance.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CDOTASaveGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDOTASaveGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDOTASaveGame} CDOTASaveGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDOTASaveGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDOTASaveGame message.
         * @function verify
         * @memberof CDOTASaveGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDOTASaveGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.match_id != null && message.hasOwnProperty("match_id"))
                if (!$util.isInteger(message.match_id) && !(message.match_id && $util.isInteger(message.match_id.low) && $util.isInteger(message.match_id.high)))
                    return "match_id: integer|Long expected";
            if (message.save_time != null && message.hasOwnProperty("save_time"))
                if (!$util.isInteger(message.save_time))
                    return "save_time: integer expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.CDOTASaveGame.Player.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.save_instances != null && message.hasOwnProperty("save_instances")) {
                if (!Array.isArray(message.save_instances))
                    return "save_instances: array expected";
                for (var i = 0; i < message.save_instances.length; ++i) {
                    var error = $root.CDOTASaveGame.SaveInstance.verify(message.save_instances[i]);
                    if (error)
                        return "save_instances." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CDOTASaveGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDOTASaveGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDOTASaveGame} CDOTASaveGame
         */
        CDOTASaveGame.fromObject = function fromObject(object) {
            if (object instanceof $root.CDOTASaveGame)
                return object;
            var message = new $root.CDOTASaveGame();
            if (object.match_id != null)
                if ($util.Long)
                    (message.match_id = $util.Long.fromValue(object.match_id)).unsigned = true;
                else if (typeof object.match_id === "string")
                    message.match_id = parseInt(object.match_id, 10);
                else if (typeof object.match_id === "number")
                    message.match_id = object.match_id;
                else if (typeof object.match_id === "object")
                    message.match_id = new $util.LongBits(object.match_id.low >>> 0, object.match_id.high >>> 0).toNumber(true);
            if (object.save_time != null)
                message.save_time = object.save_time >>> 0;
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".CDOTASaveGame.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".CDOTASaveGame.players: object expected");
                    message.players[i] = $root.CDOTASaveGame.Player.fromObject(object.players[i]);
                }
            }
            if (object.save_instances) {
                if (!Array.isArray(object.save_instances))
                    throw TypeError(".CDOTASaveGame.save_instances: array expected");
                message.save_instances = [];
                for (var i = 0; i < object.save_instances.length; ++i) {
                    if (typeof object.save_instances[i] !== "object")
                        throw TypeError(".CDOTASaveGame.save_instances: object expected");
                    message.save_instances[i] = $root.CDOTASaveGame.SaveInstance.fromObject(object.save_instances[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CDOTASaveGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDOTASaveGame
         * @static
         * @param {CDOTASaveGame} message CDOTASaveGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDOTASaveGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.players = [];
                object.save_instances = [];
            }
            if (options.defaults) {
                object.save_time = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.match_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.match_id = options.longs === String ? "0" : 0;
            }
            if (message.save_time != null && message.hasOwnProperty("save_time"))
                object.save_time = message.save_time;
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.CDOTASaveGame.Player.toObject(message.players[j], options);
            }
            if (message.save_instances && message.save_instances.length) {
                object.save_instances = [];
                for (var j = 0; j < message.save_instances.length; ++j)
                    object.save_instances[j] = $root.CDOTASaveGame.SaveInstance.toObject(message.save_instances[j], options);
            }
            if (message.match_id != null && message.hasOwnProperty("match_id"))
                if (typeof message.match_id === "number")
                    object.match_id = options.longs === String ? String(message.match_id) : message.match_id;
                else
                    object.match_id = options.longs === String ? $util.Long.prototype.toString.call(message.match_id) : options.longs === Number ? new $util.LongBits(message.match_id.low >>> 0, message.match_id.high >>> 0).toNumber(true) : message.match_id;
            return object;
        };
    
        /**
         * Converts this CDOTASaveGame to JSON.
         * @function toJSON
         * @memberof CDOTASaveGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDOTASaveGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CDOTASaveGame.Player = (function() {
    
            /**
             * Properties of a Player.
             * @memberof CDOTASaveGame
             * @interface IPlayer
             * @property {DOTA_GC_TEAM|null} [team] Player team
             * @property {string|null} [name] Player name
             * @property {string|null} [hero] Player hero
             */
    
            /**
             * Constructs a new Player.
             * @memberof CDOTASaveGame
             * @classdesc Represents a Player.
             * @implements IPlayer
             * @constructor
             * @param {CDOTASaveGame.IPlayer=} [properties] Properties to set
             */
            function Player(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Player team.
             * @member {DOTA_GC_TEAM} team
             * @memberof CDOTASaveGame.Player
             * @instance
             */
            Player.prototype.team = 0;
    
            /**
             * Player name.
             * @member {string} name
             * @memberof CDOTASaveGame.Player
             * @instance
             */
            Player.prototype.name = "";
    
            /**
             * Player hero.
             * @member {string} hero
             * @memberof CDOTASaveGame.Player
             * @instance
             */
            Player.prototype.hero = "";
    
            /**
             * Creates a new Player instance using the specified properties.
             * @function create
             * @memberof CDOTASaveGame.Player
             * @static
             * @param {CDOTASaveGame.IPlayer=} [properties] Properties to set
             * @returns {CDOTASaveGame.Player} Player instance
             */
            Player.create = function create(properties) {
                return new Player(properties);
            };
    
            /**
             * Encodes the specified Player message. Does not implicitly {@link CDOTASaveGame.Player.verify|verify} messages.
             * @function encode
             * @memberof CDOTASaveGame.Player
             * @static
             * @param {CDOTASaveGame.IPlayer} message Player message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Player.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.team);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.hero != null && Object.hasOwnProperty.call(message, "hero"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.hero);
                return writer;
            };
    
            /**
             * Encodes the specified Player message, length delimited. Does not implicitly {@link CDOTASaveGame.Player.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CDOTASaveGame.Player
             * @static
             * @param {CDOTASaveGame.IPlayer} message Player message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Player.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Player message from the specified reader or buffer.
             * @function decode
             * @memberof CDOTASaveGame.Player
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CDOTASaveGame.Player} Player
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Player.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDOTASaveGame.Player();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.team = reader.int32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.hero = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Player message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CDOTASaveGame.Player
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CDOTASaveGame.Player} Player
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Player.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Player message.
             * @function verify
             * @memberof CDOTASaveGame.Player
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Player.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.team != null && message.hasOwnProperty("team"))
                    switch (message.team) {
                    default:
                        return "team: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.hero != null && message.hasOwnProperty("hero"))
                    if (!$util.isString(message.hero))
                        return "hero: string expected";
                return null;
            };
    
            /**
             * Creates a Player message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CDOTASaveGame.Player
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CDOTASaveGame.Player} Player
             */
            Player.fromObject = function fromObject(object) {
                if (object instanceof $root.CDOTASaveGame.Player)
                    return object;
                var message = new $root.CDOTASaveGame.Player();
                switch (object.team) {
                case "DOTA_GC_TEAM_GOOD_GUYS":
                case 0:
                    message.team = 0;
                    break;
                case "DOTA_GC_TEAM_BAD_GUYS":
                case 1:
                    message.team = 1;
                    break;
                case "DOTA_GC_TEAM_BROADCASTER":
                case 2:
                    message.team = 2;
                    break;
                case "DOTA_GC_TEAM_SPECTATOR":
                case 3:
                    message.team = 3;
                    break;
                case "DOTA_GC_TEAM_PLAYER_POOL":
                case 4:
                    message.team = 4;
                    break;
                case "DOTA_GC_TEAM_NOTEAM":
                case 5:
                    message.team = 5;
                    break;
                }
                if (object.name != null)
                    message.name = String(object.name);
                if (object.hero != null)
                    message.hero = String(object.hero);
                return message;
            };
    
            /**
             * Creates a plain object from a Player message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CDOTASaveGame.Player
             * @static
             * @param {CDOTASaveGame.Player} message Player
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Player.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.team = options.enums === String ? "DOTA_GC_TEAM_GOOD_GUYS" : 0;
                    object.name = "";
                    object.hero = "";
                }
                if (message.team != null && message.hasOwnProperty("team"))
                    object.team = options.enums === String ? $root.DOTA_GC_TEAM[message.team] : message.team;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.hero != null && message.hasOwnProperty("hero"))
                    object.hero = message.hero;
                return object;
            };
    
            /**
             * Converts this Player to JSON.
             * @function toJSON
             * @memberof CDOTASaveGame.Player
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Player.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Player;
        })();
    
        CDOTASaveGame.SaveInstance = (function() {
    
            /**
             * Properties of a SaveInstance.
             * @memberof CDOTASaveGame
             * @interface ISaveInstance
             * @property {number|null} [game_time] SaveInstance game_time
             * @property {number|null} [team1_score] SaveInstance team1_score
             * @property {number|null} [team2_score] SaveInstance team2_score
             * @property {Array.<CDOTASaveGame.SaveInstance.IPlayerPositions>|null} [player_positions] SaveInstance player_positions
             * @property {number|null} [save_id] SaveInstance save_id
             * @property {number|null} [save_time] SaveInstance save_time
             */
    
            /**
             * Constructs a new SaveInstance.
             * @memberof CDOTASaveGame
             * @classdesc Represents a SaveInstance.
             * @implements ISaveInstance
             * @constructor
             * @param {CDOTASaveGame.ISaveInstance=} [properties] Properties to set
             */
            function SaveInstance(properties) {
                this.player_positions = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SaveInstance game_time.
             * @member {number} game_time
             * @memberof CDOTASaveGame.SaveInstance
             * @instance
             */
            SaveInstance.prototype.game_time = 0;
    
            /**
             * SaveInstance team1_score.
             * @member {number} team1_score
             * @memberof CDOTASaveGame.SaveInstance
             * @instance
             */
            SaveInstance.prototype.team1_score = 0;
    
            /**
             * SaveInstance team2_score.
             * @member {number} team2_score
             * @memberof CDOTASaveGame.SaveInstance
             * @instance
             */
            SaveInstance.prototype.team2_score = 0;
    
            /**
             * SaveInstance player_positions.
             * @member {Array.<CDOTASaveGame.SaveInstance.IPlayerPositions>} player_positions
             * @memberof CDOTASaveGame.SaveInstance
             * @instance
             */
            SaveInstance.prototype.player_positions = $util.emptyArray;
    
            /**
             * SaveInstance save_id.
             * @member {number} save_id
             * @memberof CDOTASaveGame.SaveInstance
             * @instance
             */
            SaveInstance.prototype.save_id = 0;
    
            /**
             * SaveInstance save_time.
             * @member {number} save_time
             * @memberof CDOTASaveGame.SaveInstance
             * @instance
             */
            SaveInstance.prototype.save_time = 0;
    
            /**
             * Creates a new SaveInstance instance using the specified properties.
             * @function create
             * @memberof CDOTASaveGame.SaveInstance
             * @static
             * @param {CDOTASaveGame.ISaveInstance=} [properties] Properties to set
             * @returns {CDOTASaveGame.SaveInstance} SaveInstance instance
             */
            SaveInstance.create = function create(properties) {
                return new SaveInstance(properties);
            };
    
            /**
             * Encodes the specified SaveInstance message. Does not implicitly {@link CDOTASaveGame.SaveInstance.verify|verify} messages.
             * @function encode
             * @memberof CDOTASaveGame.SaveInstance
             * @static
             * @param {CDOTASaveGame.ISaveInstance} message SaveInstance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SaveInstance.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.game_time != null && Object.hasOwnProperty.call(message, "game_time"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.game_time);
                if (message.team1_score != null && Object.hasOwnProperty.call(message, "team1_score"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.team1_score);
                if (message.team2_score != null && Object.hasOwnProperty.call(message, "team2_score"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.team2_score);
                if (message.player_positions != null && message.player_positions.length)
                    for (var i = 0; i < message.player_positions.length; ++i)
                        $root.CDOTASaveGame.SaveInstance.PlayerPositions.encode(message.player_positions[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.save_id != null && Object.hasOwnProperty.call(message, "save_id"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.save_id);
                if (message.save_time != null && Object.hasOwnProperty.call(message, "save_time"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.save_time);
                return writer;
            };
    
            /**
             * Encodes the specified SaveInstance message, length delimited. Does not implicitly {@link CDOTASaveGame.SaveInstance.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CDOTASaveGame.SaveInstance
             * @static
             * @param {CDOTASaveGame.ISaveInstance} message SaveInstance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SaveInstance.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SaveInstance message from the specified reader or buffer.
             * @function decode
             * @memberof CDOTASaveGame.SaveInstance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CDOTASaveGame.SaveInstance} SaveInstance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SaveInstance.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDOTASaveGame.SaveInstance();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.game_time = reader.uint32();
                        break;
                    case 3:
                        message.team1_score = reader.uint32();
                        break;
                    case 4:
                        message.team2_score = reader.uint32();
                        break;
                    case 5:
                        if (!(message.player_positions && message.player_positions.length))
                            message.player_positions = [];
                        message.player_positions.push($root.CDOTASaveGame.SaveInstance.PlayerPositions.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        message.save_id = reader.uint32();
                        break;
                    case 7:
                        message.save_time = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SaveInstance message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CDOTASaveGame.SaveInstance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CDOTASaveGame.SaveInstance} SaveInstance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SaveInstance.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SaveInstance message.
             * @function verify
             * @memberof CDOTASaveGame.SaveInstance
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SaveInstance.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.game_time != null && message.hasOwnProperty("game_time"))
                    if (!$util.isInteger(message.game_time))
                        return "game_time: integer expected";
                if (message.team1_score != null && message.hasOwnProperty("team1_score"))
                    if (!$util.isInteger(message.team1_score))
                        return "team1_score: integer expected";
                if (message.team2_score != null && message.hasOwnProperty("team2_score"))
                    if (!$util.isInteger(message.team2_score))
                        return "team2_score: integer expected";
                if (message.player_positions != null && message.hasOwnProperty("player_positions")) {
                    if (!Array.isArray(message.player_positions))
                        return "player_positions: array expected";
                    for (var i = 0; i < message.player_positions.length; ++i) {
                        var error = $root.CDOTASaveGame.SaveInstance.PlayerPositions.verify(message.player_positions[i]);
                        if (error)
                            return "player_positions." + error;
                    }
                }
                if (message.save_id != null && message.hasOwnProperty("save_id"))
                    if (!$util.isInteger(message.save_id))
                        return "save_id: integer expected";
                if (message.save_time != null && message.hasOwnProperty("save_time"))
                    if (!$util.isInteger(message.save_time))
                        return "save_time: integer expected";
                return null;
            };
    
            /**
             * Creates a SaveInstance message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CDOTASaveGame.SaveInstance
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CDOTASaveGame.SaveInstance} SaveInstance
             */
            SaveInstance.fromObject = function fromObject(object) {
                if (object instanceof $root.CDOTASaveGame.SaveInstance)
                    return object;
                var message = new $root.CDOTASaveGame.SaveInstance();
                if (object.game_time != null)
                    message.game_time = object.game_time >>> 0;
                if (object.team1_score != null)
                    message.team1_score = object.team1_score >>> 0;
                if (object.team2_score != null)
                    message.team2_score = object.team2_score >>> 0;
                if (object.player_positions) {
                    if (!Array.isArray(object.player_positions))
                        throw TypeError(".CDOTASaveGame.SaveInstance.player_positions: array expected");
                    message.player_positions = [];
                    for (var i = 0; i < object.player_positions.length; ++i) {
                        if (typeof object.player_positions[i] !== "object")
                            throw TypeError(".CDOTASaveGame.SaveInstance.player_positions: object expected");
                        message.player_positions[i] = $root.CDOTASaveGame.SaveInstance.PlayerPositions.fromObject(object.player_positions[i]);
                    }
                }
                if (object.save_id != null)
                    message.save_id = object.save_id >>> 0;
                if (object.save_time != null)
                    message.save_time = object.save_time >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a SaveInstance message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CDOTASaveGame.SaveInstance
             * @static
             * @param {CDOTASaveGame.SaveInstance} message SaveInstance
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SaveInstance.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.player_positions = [];
                if (options.defaults) {
                    object.game_time = 0;
                    object.team1_score = 0;
                    object.team2_score = 0;
                    object.save_id = 0;
                    object.save_time = 0;
                }
                if (message.game_time != null && message.hasOwnProperty("game_time"))
                    object.game_time = message.game_time;
                if (message.team1_score != null && message.hasOwnProperty("team1_score"))
                    object.team1_score = message.team1_score;
                if (message.team2_score != null && message.hasOwnProperty("team2_score"))
                    object.team2_score = message.team2_score;
                if (message.player_positions && message.player_positions.length) {
                    object.player_positions = [];
                    for (var j = 0; j < message.player_positions.length; ++j)
                        object.player_positions[j] = $root.CDOTASaveGame.SaveInstance.PlayerPositions.toObject(message.player_positions[j], options);
                }
                if (message.save_id != null && message.hasOwnProperty("save_id"))
                    object.save_id = message.save_id;
                if (message.save_time != null && message.hasOwnProperty("save_time"))
                    object.save_time = message.save_time;
                return object;
            };
    
            /**
             * Converts this SaveInstance to JSON.
             * @function toJSON
             * @memberof CDOTASaveGame.SaveInstance
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SaveInstance.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            SaveInstance.PlayerPositions = (function() {
    
                /**
                 * Properties of a PlayerPositions.
                 * @memberof CDOTASaveGame.SaveInstance
                 * @interface IPlayerPositions
                 * @property {number|null} [x] PlayerPositions x
                 * @property {number|null} [y] PlayerPositions y
                 */
    
                /**
                 * Constructs a new PlayerPositions.
                 * @memberof CDOTASaveGame.SaveInstance
                 * @classdesc Represents a PlayerPositions.
                 * @implements IPlayerPositions
                 * @constructor
                 * @param {CDOTASaveGame.SaveInstance.IPlayerPositions=} [properties] Properties to set
                 */
                function PlayerPositions(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * PlayerPositions x.
                 * @member {number} x
                 * @memberof CDOTASaveGame.SaveInstance.PlayerPositions
                 * @instance
                 */
                PlayerPositions.prototype.x = 0;
    
                /**
                 * PlayerPositions y.
                 * @member {number} y
                 * @memberof CDOTASaveGame.SaveInstance.PlayerPositions
                 * @instance
                 */
                PlayerPositions.prototype.y = 0;
    
                /**
                 * Creates a new PlayerPositions instance using the specified properties.
                 * @function create
                 * @memberof CDOTASaveGame.SaveInstance.PlayerPositions
                 * @static
                 * @param {CDOTASaveGame.SaveInstance.IPlayerPositions=} [properties] Properties to set
                 * @returns {CDOTASaveGame.SaveInstance.PlayerPositions} PlayerPositions instance
                 */
                PlayerPositions.create = function create(properties) {
                    return new PlayerPositions(properties);
                };
    
                /**
                 * Encodes the specified PlayerPositions message. Does not implicitly {@link CDOTASaveGame.SaveInstance.PlayerPositions.verify|verify} messages.
                 * @function encode
                 * @memberof CDOTASaveGame.SaveInstance.PlayerPositions
                 * @static
                 * @param {CDOTASaveGame.SaveInstance.IPlayerPositions} message PlayerPositions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlayerPositions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                        writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
                    if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
                    return writer;
                };
    
                /**
                 * Encodes the specified PlayerPositions message, length delimited. Does not implicitly {@link CDOTASaveGame.SaveInstance.PlayerPositions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof CDOTASaveGame.SaveInstance.PlayerPositions
                 * @static
                 * @param {CDOTASaveGame.SaveInstance.IPlayerPositions} message PlayerPositions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlayerPositions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a PlayerPositions message from the specified reader or buffer.
                 * @function decode
                 * @memberof CDOTASaveGame.SaveInstance.PlayerPositions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {CDOTASaveGame.SaveInstance.PlayerPositions} PlayerPositions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlayerPositions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDOTASaveGame.SaveInstance.PlayerPositions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.x = reader.float();
                            break;
                        case 2:
                            message.y = reader.float();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a PlayerPositions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof CDOTASaveGame.SaveInstance.PlayerPositions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {CDOTASaveGame.SaveInstance.PlayerPositions} PlayerPositions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlayerPositions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a PlayerPositions message.
                 * @function verify
                 * @memberof CDOTASaveGame.SaveInstance.PlayerPositions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PlayerPositions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.x != null && message.hasOwnProperty("x"))
                        if (typeof message.x !== "number")
                            return "x: number expected";
                    if (message.y != null && message.hasOwnProperty("y"))
                        if (typeof message.y !== "number")
                            return "y: number expected";
                    return null;
                };
    
                /**
                 * Creates a PlayerPositions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof CDOTASaveGame.SaveInstance.PlayerPositions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {CDOTASaveGame.SaveInstance.PlayerPositions} PlayerPositions
                 */
                PlayerPositions.fromObject = function fromObject(object) {
                    if (object instanceof $root.CDOTASaveGame.SaveInstance.PlayerPositions)
                        return object;
                    var message = new $root.CDOTASaveGame.SaveInstance.PlayerPositions();
                    if (object.x != null)
                        message.x = Number(object.x);
                    if (object.y != null)
                        message.y = Number(object.y);
                    return message;
                };
    
                /**
                 * Creates a plain object from a PlayerPositions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof CDOTASaveGame.SaveInstance.PlayerPositions
                 * @static
                 * @param {CDOTASaveGame.SaveInstance.PlayerPositions} message PlayerPositions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PlayerPositions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.x = 0;
                        object.y = 0;
                    }
                    if (message.x != null && message.hasOwnProperty("x"))
                        object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                    if (message.y != null && message.hasOwnProperty("y"))
                        object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                    return object;
                };
    
                /**
                 * Converts this PlayerPositions to JSON.
                 * @function toJSON
                 * @memberof CDOTASaveGame.SaveInstance.PlayerPositions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PlayerPositions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return PlayerPositions;
            })();
    
            return SaveInstance;
        })();
    
        return CDOTASaveGame;
    })();
    
    $root.CMsgDOTACombatLogEntry = (function() {
    
        /**
         * Properties of a CMsgDOTACombatLogEntry.
         * @exports ICMsgDOTACombatLogEntry
         * @interface ICMsgDOTACombatLogEntry
         * @property {DOTA_COMBATLOG_TYPES|null} [type] CMsgDOTACombatLogEntry type
         * @property {number|null} [target_name] CMsgDOTACombatLogEntry target_name
         * @property {number|null} [target_source_name] CMsgDOTACombatLogEntry target_source_name
         * @property {number|null} [attacker_name] CMsgDOTACombatLogEntry attacker_name
         * @property {number|null} [damage_source_name] CMsgDOTACombatLogEntry damage_source_name
         * @property {number|null} [inflictor_name] CMsgDOTACombatLogEntry inflictor_name
         * @property {boolean|null} [is_attacker_illusion] CMsgDOTACombatLogEntry is_attacker_illusion
         * @property {boolean|null} [is_attacker_hero] CMsgDOTACombatLogEntry is_attacker_hero
         * @property {boolean|null} [is_target_illusion] CMsgDOTACombatLogEntry is_target_illusion
         * @property {boolean|null} [is_target_hero] CMsgDOTACombatLogEntry is_target_hero
         * @property {boolean|null} [is_visible_radiant] CMsgDOTACombatLogEntry is_visible_radiant
         * @property {boolean|null} [is_visible_dire] CMsgDOTACombatLogEntry is_visible_dire
         * @property {number|null} [value] CMsgDOTACombatLogEntry value
         * @property {number|null} [health] CMsgDOTACombatLogEntry health
         * @property {number|null} [timestamp] CMsgDOTACombatLogEntry timestamp
         * @property {number|null} [stun_duration] CMsgDOTACombatLogEntry stun_duration
         * @property {number|null} [slow_duration] CMsgDOTACombatLogEntry slow_duration
         * @property {boolean|null} [is_ability_toggle_on] CMsgDOTACombatLogEntry is_ability_toggle_on
         * @property {boolean|null} [is_ability_toggle_off] CMsgDOTACombatLogEntry is_ability_toggle_off
         * @property {number|null} [ability_level] CMsgDOTACombatLogEntry ability_level
         * @property {number|null} [location_x] CMsgDOTACombatLogEntry location_x
         * @property {number|null} [location_y] CMsgDOTACombatLogEntry location_y
         * @property {number|null} [gold_reason] CMsgDOTACombatLogEntry gold_reason
         * @property {number|null} [timestamp_raw] CMsgDOTACombatLogEntry timestamp_raw
         * @property {number|null} [modifier_duration] CMsgDOTACombatLogEntry modifier_duration
         * @property {number|null} [xp_reason] CMsgDOTACombatLogEntry xp_reason
         * @property {number|null} [last_hits] CMsgDOTACombatLogEntry last_hits
         * @property {number|null} [attacker_team] CMsgDOTACombatLogEntry attacker_team
         * @property {number|null} [target_team] CMsgDOTACombatLogEntry target_team
         * @property {number|null} [obs_wards_placed] CMsgDOTACombatLogEntry obs_wards_placed
         * @property {number|null} [assist_player0] CMsgDOTACombatLogEntry assist_player0
         * @property {number|null} [assist_player1] CMsgDOTACombatLogEntry assist_player1
         * @property {number|null} [assist_player2] CMsgDOTACombatLogEntry assist_player2
         * @property {number|null} [assist_player3] CMsgDOTACombatLogEntry assist_player3
         * @property {number|null} [stack_count] CMsgDOTACombatLogEntry stack_count
         * @property {boolean|null} [hidden_modifier] CMsgDOTACombatLogEntry hidden_modifier
         * @property {boolean|null} [is_target_building] CMsgDOTACombatLogEntry is_target_building
         * @property {number|null} [neutral_camp_type] CMsgDOTACombatLogEntry neutral_camp_type
         * @property {number|null} [rune_type] CMsgDOTACombatLogEntry rune_type
         * @property {Array.<number>|null} [assist_players] CMsgDOTACombatLogEntry assist_players
         * @property {boolean|null} [is_heal_save] CMsgDOTACombatLogEntry is_heal_save
         * @property {boolean|null} [is_ultimate_ability] CMsgDOTACombatLogEntry is_ultimate_ability
         * @property {number|null} [attacker_hero_level] CMsgDOTACombatLogEntry attacker_hero_level
         * @property {number|null} [target_hero_level] CMsgDOTACombatLogEntry target_hero_level
         * @property {number|null} [xpm] CMsgDOTACombatLogEntry xpm
         * @property {number|null} [gpm] CMsgDOTACombatLogEntry gpm
         * @property {number|null} [event_location] CMsgDOTACombatLogEntry event_location
         * @property {boolean|null} [target_is_self] CMsgDOTACombatLogEntry target_is_self
         * @property {number|null} [damage_type] CMsgDOTACombatLogEntry damage_type
         * @property {boolean|null} [invisibility_modifier] CMsgDOTACombatLogEntry invisibility_modifier
         * @property {number|null} [damage_category] CMsgDOTACombatLogEntry damage_category
         * @property {number|null} [networth] CMsgDOTACombatLogEntry networth
         * @property {number|null} [building_type] CMsgDOTACombatLogEntry building_type
         * @property {number|null} [modifier_elapsed_duration] CMsgDOTACombatLogEntry modifier_elapsed_duration
         * @property {boolean|null} [silence_modifier] CMsgDOTACombatLogEntry silence_modifier
         * @property {boolean|null} [heal_from_lifesteal] CMsgDOTACombatLogEntry heal_from_lifesteal
         * @property {boolean|null} [modifier_purged] CMsgDOTACombatLogEntry modifier_purged
         * @property {boolean|null} [spell_evaded] CMsgDOTACombatLogEntry spell_evaded
         * @property {boolean|null} [motion_controller_modifier] CMsgDOTACombatLogEntry motion_controller_modifier
         * @property {boolean|null} [long_range_kill] CMsgDOTACombatLogEntry long_range_kill
         * @property {number|null} [modifier_purge_ability] CMsgDOTACombatLogEntry modifier_purge_ability
         * @property {number|null} [modifier_purge_npc] CMsgDOTACombatLogEntry modifier_purge_npc
         * @property {boolean|null} [root_modifier] CMsgDOTACombatLogEntry root_modifier
         * @property {number|null} [total_unit_death_count] CMsgDOTACombatLogEntry total_unit_death_count
         * @property {boolean|null} [aura_modifier] CMsgDOTACombatLogEntry aura_modifier
         * @property {boolean|null} [armor_debuff_modifier] CMsgDOTACombatLogEntry armor_debuff_modifier
         * @property {boolean|null} [no_physical_damage_modifier] CMsgDOTACombatLogEntry no_physical_damage_modifier
         * @property {number|null} [modifier_ability] CMsgDOTACombatLogEntry modifier_ability
         * @property {boolean|null} [modifier_hidden] CMsgDOTACombatLogEntry modifier_hidden
         * @property {boolean|null} [inflictor_is_stolen_ability] CMsgDOTACombatLogEntry inflictor_is_stolen_ability
         * @property {number|null} [kill_eater_event] CMsgDOTACombatLogEntry kill_eater_event
         * @property {number|null} [unit_status_label] CMsgDOTACombatLogEntry unit_status_label
         * @property {boolean|null} [spell_generated_attack] CMsgDOTACombatLogEntry spell_generated_attack
         * @property {boolean|null} [at_night_time] CMsgDOTACombatLogEntry at_night_time
         * @property {boolean|null} [attacker_has_scepter] CMsgDOTACombatLogEntry attacker_has_scepter
         */
    
        /**
         * Constructs a new CMsgDOTACombatLogEntry.
         * @exports CMsgDOTACombatLogEntry
         * @classdesc Represents a CMsgDOTACombatLogEntry.
         * @implements ICMsgDOTACombatLogEntry
         * @constructor
         * @param {ICMsgDOTACombatLogEntry=} [properties] Properties to set
         */
        function CMsgDOTACombatLogEntry(properties) {
            this.assist_players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTACombatLogEntry type.
         * @member {DOTA_COMBATLOG_TYPES} type
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.type = -1;
    
        /**
         * CMsgDOTACombatLogEntry target_name.
         * @member {number} target_name
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.target_name = 0;
    
        /**
         * CMsgDOTACombatLogEntry target_source_name.
         * @member {number} target_source_name
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.target_source_name = 0;
    
        /**
         * CMsgDOTACombatLogEntry attacker_name.
         * @member {number} attacker_name
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.attacker_name = 0;
    
        /**
         * CMsgDOTACombatLogEntry damage_source_name.
         * @member {number} damage_source_name
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.damage_source_name = 0;
    
        /**
         * CMsgDOTACombatLogEntry inflictor_name.
         * @member {number} inflictor_name
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.inflictor_name = 0;
    
        /**
         * CMsgDOTACombatLogEntry is_attacker_illusion.
         * @member {boolean} is_attacker_illusion
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.is_attacker_illusion = false;
    
        /**
         * CMsgDOTACombatLogEntry is_attacker_hero.
         * @member {boolean} is_attacker_hero
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.is_attacker_hero = false;
    
        /**
         * CMsgDOTACombatLogEntry is_target_illusion.
         * @member {boolean} is_target_illusion
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.is_target_illusion = false;
    
        /**
         * CMsgDOTACombatLogEntry is_target_hero.
         * @member {boolean} is_target_hero
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.is_target_hero = false;
    
        /**
         * CMsgDOTACombatLogEntry is_visible_radiant.
         * @member {boolean} is_visible_radiant
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.is_visible_radiant = false;
    
        /**
         * CMsgDOTACombatLogEntry is_visible_dire.
         * @member {boolean} is_visible_dire
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.is_visible_dire = false;
    
        /**
         * CMsgDOTACombatLogEntry value.
         * @member {number} value
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.value = 0;
    
        /**
         * CMsgDOTACombatLogEntry health.
         * @member {number} health
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.health = 0;
    
        /**
         * CMsgDOTACombatLogEntry timestamp.
         * @member {number} timestamp
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.timestamp = 0;
    
        /**
         * CMsgDOTACombatLogEntry stun_duration.
         * @member {number} stun_duration
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.stun_duration = 0;
    
        /**
         * CMsgDOTACombatLogEntry slow_duration.
         * @member {number} slow_duration
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.slow_duration = 0;
    
        /**
         * CMsgDOTACombatLogEntry is_ability_toggle_on.
         * @member {boolean} is_ability_toggle_on
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.is_ability_toggle_on = false;
    
        /**
         * CMsgDOTACombatLogEntry is_ability_toggle_off.
         * @member {boolean} is_ability_toggle_off
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.is_ability_toggle_off = false;
    
        /**
         * CMsgDOTACombatLogEntry ability_level.
         * @member {number} ability_level
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.ability_level = 0;
    
        /**
         * CMsgDOTACombatLogEntry location_x.
         * @member {number} location_x
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.location_x = 0;
    
        /**
         * CMsgDOTACombatLogEntry location_y.
         * @member {number} location_y
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.location_y = 0;
    
        /**
         * CMsgDOTACombatLogEntry gold_reason.
         * @member {number} gold_reason
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.gold_reason = 0;
    
        /**
         * CMsgDOTACombatLogEntry timestamp_raw.
         * @member {number} timestamp_raw
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.timestamp_raw = 0;
    
        /**
         * CMsgDOTACombatLogEntry modifier_duration.
         * @member {number} modifier_duration
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.modifier_duration = 0;
    
        /**
         * CMsgDOTACombatLogEntry xp_reason.
         * @member {number} xp_reason
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.xp_reason = 0;
    
        /**
         * CMsgDOTACombatLogEntry last_hits.
         * @member {number} last_hits
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.last_hits = 0;
    
        /**
         * CMsgDOTACombatLogEntry attacker_team.
         * @member {number} attacker_team
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.attacker_team = 0;
    
        /**
         * CMsgDOTACombatLogEntry target_team.
         * @member {number} target_team
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.target_team = 0;
    
        /**
         * CMsgDOTACombatLogEntry obs_wards_placed.
         * @member {number} obs_wards_placed
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.obs_wards_placed = 0;
    
        /**
         * CMsgDOTACombatLogEntry assist_player0.
         * @member {number} assist_player0
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.assist_player0 = 0;
    
        /**
         * CMsgDOTACombatLogEntry assist_player1.
         * @member {number} assist_player1
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.assist_player1 = 0;
    
        /**
         * CMsgDOTACombatLogEntry assist_player2.
         * @member {number} assist_player2
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.assist_player2 = 0;
    
        /**
         * CMsgDOTACombatLogEntry assist_player3.
         * @member {number} assist_player3
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.assist_player3 = 0;
    
        /**
         * CMsgDOTACombatLogEntry stack_count.
         * @member {number} stack_count
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.stack_count = 0;
    
        /**
         * CMsgDOTACombatLogEntry hidden_modifier.
         * @member {boolean} hidden_modifier
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.hidden_modifier = false;
    
        /**
         * CMsgDOTACombatLogEntry is_target_building.
         * @member {boolean} is_target_building
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.is_target_building = false;
    
        /**
         * CMsgDOTACombatLogEntry neutral_camp_type.
         * @member {number} neutral_camp_type
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.neutral_camp_type = 0;
    
        /**
         * CMsgDOTACombatLogEntry rune_type.
         * @member {number} rune_type
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.rune_type = 0;
    
        /**
         * CMsgDOTACombatLogEntry assist_players.
         * @member {Array.<number>} assist_players
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.assist_players = $util.emptyArray;
    
        /**
         * CMsgDOTACombatLogEntry is_heal_save.
         * @member {boolean} is_heal_save
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.is_heal_save = false;
    
        /**
         * CMsgDOTACombatLogEntry is_ultimate_ability.
         * @member {boolean} is_ultimate_ability
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.is_ultimate_ability = false;
    
        /**
         * CMsgDOTACombatLogEntry attacker_hero_level.
         * @member {number} attacker_hero_level
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.attacker_hero_level = 0;
    
        /**
         * CMsgDOTACombatLogEntry target_hero_level.
         * @member {number} target_hero_level
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.target_hero_level = 0;
    
        /**
         * CMsgDOTACombatLogEntry xpm.
         * @member {number} xpm
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.xpm = 0;
    
        /**
         * CMsgDOTACombatLogEntry gpm.
         * @member {number} gpm
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.gpm = 0;
    
        /**
         * CMsgDOTACombatLogEntry event_location.
         * @member {number} event_location
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.event_location = 0;
    
        /**
         * CMsgDOTACombatLogEntry target_is_self.
         * @member {boolean} target_is_self
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.target_is_self = false;
    
        /**
         * CMsgDOTACombatLogEntry damage_type.
         * @member {number} damage_type
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.damage_type = 0;
    
        /**
         * CMsgDOTACombatLogEntry invisibility_modifier.
         * @member {boolean} invisibility_modifier
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.invisibility_modifier = false;
    
        /**
         * CMsgDOTACombatLogEntry damage_category.
         * @member {number} damage_category
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.damage_category = 0;
    
        /**
         * CMsgDOTACombatLogEntry networth.
         * @member {number} networth
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.networth = 0;
    
        /**
         * CMsgDOTACombatLogEntry building_type.
         * @member {number} building_type
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.building_type = 0;
    
        /**
         * CMsgDOTACombatLogEntry modifier_elapsed_duration.
         * @member {number} modifier_elapsed_duration
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.modifier_elapsed_duration = 0;
    
        /**
         * CMsgDOTACombatLogEntry silence_modifier.
         * @member {boolean} silence_modifier
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.silence_modifier = false;
    
        /**
         * CMsgDOTACombatLogEntry heal_from_lifesteal.
         * @member {boolean} heal_from_lifesteal
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.heal_from_lifesteal = false;
    
        /**
         * CMsgDOTACombatLogEntry modifier_purged.
         * @member {boolean} modifier_purged
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.modifier_purged = false;
    
        /**
         * CMsgDOTACombatLogEntry spell_evaded.
         * @member {boolean} spell_evaded
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.spell_evaded = false;
    
        /**
         * CMsgDOTACombatLogEntry motion_controller_modifier.
         * @member {boolean} motion_controller_modifier
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.motion_controller_modifier = false;
    
        /**
         * CMsgDOTACombatLogEntry long_range_kill.
         * @member {boolean} long_range_kill
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.long_range_kill = false;
    
        /**
         * CMsgDOTACombatLogEntry modifier_purge_ability.
         * @member {number} modifier_purge_ability
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.modifier_purge_ability = 0;
    
        /**
         * CMsgDOTACombatLogEntry modifier_purge_npc.
         * @member {number} modifier_purge_npc
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.modifier_purge_npc = 0;
    
        /**
         * CMsgDOTACombatLogEntry root_modifier.
         * @member {boolean} root_modifier
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.root_modifier = false;
    
        /**
         * CMsgDOTACombatLogEntry total_unit_death_count.
         * @member {number} total_unit_death_count
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.total_unit_death_count = 0;
    
        /**
         * CMsgDOTACombatLogEntry aura_modifier.
         * @member {boolean} aura_modifier
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.aura_modifier = false;
    
        /**
         * CMsgDOTACombatLogEntry armor_debuff_modifier.
         * @member {boolean} armor_debuff_modifier
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.armor_debuff_modifier = false;
    
        /**
         * CMsgDOTACombatLogEntry no_physical_damage_modifier.
         * @member {boolean} no_physical_damage_modifier
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.no_physical_damage_modifier = false;
    
        /**
         * CMsgDOTACombatLogEntry modifier_ability.
         * @member {number} modifier_ability
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.modifier_ability = 0;
    
        /**
         * CMsgDOTACombatLogEntry modifier_hidden.
         * @member {boolean} modifier_hidden
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.modifier_hidden = false;
    
        /**
         * CMsgDOTACombatLogEntry inflictor_is_stolen_ability.
         * @member {boolean} inflictor_is_stolen_ability
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.inflictor_is_stolen_ability = false;
    
        /**
         * CMsgDOTACombatLogEntry kill_eater_event.
         * @member {number} kill_eater_event
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.kill_eater_event = 0;
    
        /**
         * CMsgDOTACombatLogEntry unit_status_label.
         * @member {number} unit_status_label
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.unit_status_label = 0;
    
        /**
         * CMsgDOTACombatLogEntry spell_generated_attack.
         * @member {boolean} spell_generated_attack
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.spell_generated_attack = false;
    
        /**
         * CMsgDOTACombatLogEntry at_night_time.
         * @member {boolean} at_night_time
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.at_night_time = false;
    
        /**
         * CMsgDOTACombatLogEntry attacker_has_scepter.
         * @member {boolean} attacker_has_scepter
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         */
        CMsgDOTACombatLogEntry.prototype.attacker_has_scepter = false;
    
        /**
         * Creates a new CMsgDOTACombatLogEntry instance using the specified properties.
         * @function create
         * @memberof CMsgDOTACombatLogEntry
         * @static
         * @param {ICMsgDOTACombatLogEntry=} [properties] Properties to set
         * @returns {CMsgDOTACombatLogEntry} CMsgDOTACombatLogEntry instance
         */
        CMsgDOTACombatLogEntry.create = function create(properties) {
            return new CMsgDOTACombatLogEntry(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTACombatLogEntry message. Does not implicitly {@link CMsgDOTACombatLogEntry.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTACombatLogEntry
         * @static
         * @param {ICMsgDOTACombatLogEntry} message CMsgDOTACombatLogEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTACombatLogEntry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.target_name != null && Object.hasOwnProperty.call(message, "target_name"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.target_name);
            if (message.target_source_name != null && Object.hasOwnProperty.call(message, "target_source_name"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.target_source_name);
            if (message.attacker_name != null && Object.hasOwnProperty.call(message, "attacker_name"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.attacker_name);
            if (message.damage_source_name != null && Object.hasOwnProperty.call(message, "damage_source_name"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.damage_source_name);
            if (message.inflictor_name != null && Object.hasOwnProperty.call(message, "inflictor_name"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.inflictor_name);
            if (message.is_attacker_illusion != null && Object.hasOwnProperty.call(message, "is_attacker_illusion"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.is_attacker_illusion);
            if (message.is_attacker_hero != null && Object.hasOwnProperty.call(message, "is_attacker_hero"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.is_attacker_hero);
            if (message.is_target_illusion != null && Object.hasOwnProperty.call(message, "is_target_illusion"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.is_target_illusion);
            if (message.is_target_hero != null && Object.hasOwnProperty.call(message, "is_target_hero"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.is_target_hero);
            if (message.is_visible_radiant != null && Object.hasOwnProperty.call(message, "is_visible_radiant"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.is_visible_radiant);
            if (message.is_visible_dire != null && Object.hasOwnProperty.call(message, "is_visible_dire"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.is_visible_dire);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.value);
            if (message.health != null && Object.hasOwnProperty.call(message, "health"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.health);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 15, wireType 5 =*/125).float(message.timestamp);
            if (message.stun_duration != null && Object.hasOwnProperty.call(message, "stun_duration"))
                writer.uint32(/* id 16, wireType 5 =*/133).float(message.stun_duration);
            if (message.slow_duration != null && Object.hasOwnProperty.call(message, "slow_duration"))
                writer.uint32(/* id 17, wireType 5 =*/141).float(message.slow_duration);
            if (message.is_ability_toggle_on != null && Object.hasOwnProperty.call(message, "is_ability_toggle_on"))
                writer.uint32(/* id 18, wireType 0 =*/144).bool(message.is_ability_toggle_on);
            if (message.is_ability_toggle_off != null && Object.hasOwnProperty.call(message, "is_ability_toggle_off"))
                writer.uint32(/* id 19, wireType 0 =*/152).bool(message.is_ability_toggle_off);
            if (message.ability_level != null && Object.hasOwnProperty.call(message, "ability_level"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.ability_level);
            if (message.location_x != null && Object.hasOwnProperty.call(message, "location_x"))
                writer.uint32(/* id 21, wireType 5 =*/173).float(message.location_x);
            if (message.location_y != null && Object.hasOwnProperty.call(message, "location_y"))
                writer.uint32(/* id 22, wireType 5 =*/181).float(message.location_y);
            if (message.gold_reason != null && Object.hasOwnProperty.call(message, "gold_reason"))
                writer.uint32(/* id 23, wireType 0 =*/184).uint32(message.gold_reason);
            if (message.timestamp_raw != null && Object.hasOwnProperty.call(message, "timestamp_raw"))
                writer.uint32(/* id 24, wireType 5 =*/197).float(message.timestamp_raw);
            if (message.modifier_duration != null && Object.hasOwnProperty.call(message, "modifier_duration"))
                writer.uint32(/* id 25, wireType 5 =*/205).float(message.modifier_duration);
            if (message.xp_reason != null && Object.hasOwnProperty.call(message, "xp_reason"))
                writer.uint32(/* id 26, wireType 0 =*/208).uint32(message.xp_reason);
            if (message.last_hits != null && Object.hasOwnProperty.call(message, "last_hits"))
                writer.uint32(/* id 27, wireType 0 =*/216).uint32(message.last_hits);
            if (message.attacker_team != null && Object.hasOwnProperty.call(message, "attacker_team"))
                writer.uint32(/* id 28, wireType 0 =*/224).uint32(message.attacker_team);
            if (message.target_team != null && Object.hasOwnProperty.call(message, "target_team"))
                writer.uint32(/* id 29, wireType 0 =*/232).uint32(message.target_team);
            if (message.obs_wards_placed != null && Object.hasOwnProperty.call(message, "obs_wards_placed"))
                writer.uint32(/* id 30, wireType 0 =*/240).uint32(message.obs_wards_placed);
            if (message.assist_player0 != null && Object.hasOwnProperty.call(message, "assist_player0"))
                writer.uint32(/* id 31, wireType 0 =*/248).uint32(message.assist_player0);
            if (message.assist_player1 != null && Object.hasOwnProperty.call(message, "assist_player1"))
                writer.uint32(/* id 32, wireType 0 =*/256).uint32(message.assist_player1);
            if (message.assist_player2 != null && Object.hasOwnProperty.call(message, "assist_player2"))
                writer.uint32(/* id 33, wireType 0 =*/264).uint32(message.assist_player2);
            if (message.assist_player3 != null && Object.hasOwnProperty.call(message, "assist_player3"))
                writer.uint32(/* id 34, wireType 0 =*/272).uint32(message.assist_player3);
            if (message.stack_count != null && Object.hasOwnProperty.call(message, "stack_count"))
                writer.uint32(/* id 35, wireType 0 =*/280).uint32(message.stack_count);
            if (message.hidden_modifier != null && Object.hasOwnProperty.call(message, "hidden_modifier"))
                writer.uint32(/* id 36, wireType 0 =*/288).bool(message.hidden_modifier);
            if (message.is_target_building != null && Object.hasOwnProperty.call(message, "is_target_building"))
                writer.uint32(/* id 37, wireType 0 =*/296).bool(message.is_target_building);
            if (message.neutral_camp_type != null && Object.hasOwnProperty.call(message, "neutral_camp_type"))
                writer.uint32(/* id 38, wireType 0 =*/304).uint32(message.neutral_camp_type);
            if (message.rune_type != null && Object.hasOwnProperty.call(message, "rune_type"))
                writer.uint32(/* id 39, wireType 0 =*/312).uint32(message.rune_type);
            if (message.assist_players != null && message.assist_players.length)
                for (var i = 0; i < message.assist_players.length; ++i)
                    writer.uint32(/* id 40, wireType 0 =*/320).uint32(message.assist_players[i]);
            if (message.is_heal_save != null && Object.hasOwnProperty.call(message, "is_heal_save"))
                writer.uint32(/* id 41, wireType 0 =*/328).bool(message.is_heal_save);
            if (message.is_ultimate_ability != null && Object.hasOwnProperty.call(message, "is_ultimate_ability"))
                writer.uint32(/* id 42, wireType 0 =*/336).bool(message.is_ultimate_ability);
            if (message.attacker_hero_level != null && Object.hasOwnProperty.call(message, "attacker_hero_level"))
                writer.uint32(/* id 43, wireType 0 =*/344).uint32(message.attacker_hero_level);
            if (message.target_hero_level != null && Object.hasOwnProperty.call(message, "target_hero_level"))
                writer.uint32(/* id 44, wireType 0 =*/352).uint32(message.target_hero_level);
            if (message.xpm != null && Object.hasOwnProperty.call(message, "xpm"))
                writer.uint32(/* id 45, wireType 0 =*/360).uint32(message.xpm);
            if (message.gpm != null && Object.hasOwnProperty.call(message, "gpm"))
                writer.uint32(/* id 46, wireType 0 =*/368).uint32(message.gpm);
            if (message.event_location != null && Object.hasOwnProperty.call(message, "event_location"))
                writer.uint32(/* id 47, wireType 0 =*/376).uint32(message.event_location);
            if (message.target_is_self != null && Object.hasOwnProperty.call(message, "target_is_self"))
                writer.uint32(/* id 48, wireType 0 =*/384).bool(message.target_is_self);
            if (message.damage_type != null && Object.hasOwnProperty.call(message, "damage_type"))
                writer.uint32(/* id 49, wireType 0 =*/392).uint32(message.damage_type);
            if (message.invisibility_modifier != null && Object.hasOwnProperty.call(message, "invisibility_modifier"))
                writer.uint32(/* id 50, wireType 0 =*/400).bool(message.invisibility_modifier);
            if (message.damage_category != null && Object.hasOwnProperty.call(message, "damage_category"))
                writer.uint32(/* id 51, wireType 0 =*/408).uint32(message.damage_category);
            if (message.networth != null && Object.hasOwnProperty.call(message, "networth"))
                writer.uint32(/* id 52, wireType 0 =*/416).uint32(message.networth);
            if (message.building_type != null && Object.hasOwnProperty.call(message, "building_type"))
                writer.uint32(/* id 53, wireType 0 =*/424).uint32(message.building_type);
            if (message.modifier_elapsed_duration != null && Object.hasOwnProperty.call(message, "modifier_elapsed_duration"))
                writer.uint32(/* id 54, wireType 5 =*/437).float(message.modifier_elapsed_duration);
            if (message.silence_modifier != null && Object.hasOwnProperty.call(message, "silence_modifier"))
                writer.uint32(/* id 55, wireType 0 =*/440).bool(message.silence_modifier);
            if (message.heal_from_lifesteal != null && Object.hasOwnProperty.call(message, "heal_from_lifesteal"))
                writer.uint32(/* id 56, wireType 0 =*/448).bool(message.heal_from_lifesteal);
            if (message.modifier_purged != null && Object.hasOwnProperty.call(message, "modifier_purged"))
                writer.uint32(/* id 57, wireType 0 =*/456).bool(message.modifier_purged);
            if (message.spell_evaded != null && Object.hasOwnProperty.call(message, "spell_evaded"))
                writer.uint32(/* id 58, wireType 0 =*/464).bool(message.spell_evaded);
            if (message.motion_controller_modifier != null && Object.hasOwnProperty.call(message, "motion_controller_modifier"))
                writer.uint32(/* id 59, wireType 0 =*/472).bool(message.motion_controller_modifier);
            if (message.long_range_kill != null && Object.hasOwnProperty.call(message, "long_range_kill"))
                writer.uint32(/* id 60, wireType 0 =*/480).bool(message.long_range_kill);
            if (message.modifier_purge_ability != null && Object.hasOwnProperty.call(message, "modifier_purge_ability"))
                writer.uint32(/* id 61, wireType 0 =*/488).uint32(message.modifier_purge_ability);
            if (message.modifier_purge_npc != null && Object.hasOwnProperty.call(message, "modifier_purge_npc"))
                writer.uint32(/* id 62, wireType 0 =*/496).uint32(message.modifier_purge_npc);
            if (message.root_modifier != null && Object.hasOwnProperty.call(message, "root_modifier"))
                writer.uint32(/* id 63, wireType 0 =*/504).bool(message.root_modifier);
            if (message.total_unit_death_count != null && Object.hasOwnProperty.call(message, "total_unit_death_count"))
                writer.uint32(/* id 64, wireType 0 =*/512).uint32(message.total_unit_death_count);
            if (message.aura_modifier != null && Object.hasOwnProperty.call(message, "aura_modifier"))
                writer.uint32(/* id 65, wireType 0 =*/520).bool(message.aura_modifier);
            if (message.armor_debuff_modifier != null && Object.hasOwnProperty.call(message, "armor_debuff_modifier"))
                writer.uint32(/* id 66, wireType 0 =*/528).bool(message.armor_debuff_modifier);
            if (message.no_physical_damage_modifier != null && Object.hasOwnProperty.call(message, "no_physical_damage_modifier"))
                writer.uint32(/* id 67, wireType 0 =*/536).bool(message.no_physical_damage_modifier);
            if (message.modifier_ability != null && Object.hasOwnProperty.call(message, "modifier_ability"))
                writer.uint32(/* id 68, wireType 0 =*/544).uint32(message.modifier_ability);
            if (message.modifier_hidden != null && Object.hasOwnProperty.call(message, "modifier_hidden"))
                writer.uint32(/* id 69, wireType 0 =*/552).bool(message.modifier_hidden);
            if (message.inflictor_is_stolen_ability != null && Object.hasOwnProperty.call(message, "inflictor_is_stolen_ability"))
                writer.uint32(/* id 70, wireType 0 =*/560).bool(message.inflictor_is_stolen_ability);
            if (message.kill_eater_event != null && Object.hasOwnProperty.call(message, "kill_eater_event"))
                writer.uint32(/* id 71, wireType 0 =*/568).uint32(message.kill_eater_event);
            if (message.unit_status_label != null && Object.hasOwnProperty.call(message, "unit_status_label"))
                writer.uint32(/* id 72, wireType 0 =*/576).uint32(message.unit_status_label);
            if (message.spell_generated_attack != null && Object.hasOwnProperty.call(message, "spell_generated_attack"))
                writer.uint32(/* id 73, wireType 0 =*/584).bool(message.spell_generated_attack);
            if (message.at_night_time != null && Object.hasOwnProperty.call(message, "at_night_time"))
                writer.uint32(/* id 74, wireType 0 =*/592).bool(message.at_night_time);
            if (message.attacker_has_scepter != null && Object.hasOwnProperty.call(message, "attacker_has_scepter"))
                writer.uint32(/* id 75, wireType 0 =*/600).bool(message.attacker_has_scepter);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTACombatLogEntry message, length delimited. Does not implicitly {@link CMsgDOTACombatLogEntry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTACombatLogEntry
         * @static
         * @param {ICMsgDOTACombatLogEntry} message CMsgDOTACombatLogEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTACombatLogEntry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTACombatLogEntry message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTACombatLogEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTACombatLogEntry} CMsgDOTACombatLogEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTACombatLogEntry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTACombatLogEntry();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.target_name = reader.uint32();
                    break;
                case 3:
                    message.target_source_name = reader.uint32();
                    break;
                case 4:
                    message.attacker_name = reader.uint32();
                    break;
                case 5:
                    message.damage_source_name = reader.uint32();
                    break;
                case 6:
                    message.inflictor_name = reader.uint32();
                    break;
                case 7:
                    message.is_attacker_illusion = reader.bool();
                    break;
                case 8:
                    message.is_attacker_hero = reader.bool();
                    break;
                case 9:
                    message.is_target_illusion = reader.bool();
                    break;
                case 10:
                    message.is_target_hero = reader.bool();
                    break;
                case 11:
                    message.is_visible_radiant = reader.bool();
                    break;
                case 12:
                    message.is_visible_dire = reader.bool();
                    break;
                case 13:
                    message.value = reader.uint32();
                    break;
                case 14:
                    message.health = reader.int32();
                    break;
                case 15:
                    message.timestamp = reader.float();
                    break;
                case 16:
                    message.stun_duration = reader.float();
                    break;
                case 17:
                    message.slow_duration = reader.float();
                    break;
                case 18:
                    message.is_ability_toggle_on = reader.bool();
                    break;
                case 19:
                    message.is_ability_toggle_off = reader.bool();
                    break;
                case 20:
                    message.ability_level = reader.uint32();
                    break;
                case 21:
                    message.location_x = reader.float();
                    break;
                case 22:
                    message.location_y = reader.float();
                    break;
                case 23:
                    message.gold_reason = reader.uint32();
                    break;
                case 24:
                    message.timestamp_raw = reader.float();
                    break;
                case 25:
                    message.modifier_duration = reader.float();
                    break;
                case 26:
                    message.xp_reason = reader.uint32();
                    break;
                case 27:
                    message.last_hits = reader.uint32();
                    break;
                case 28:
                    message.attacker_team = reader.uint32();
                    break;
                case 29:
                    message.target_team = reader.uint32();
                    break;
                case 30:
                    message.obs_wards_placed = reader.uint32();
                    break;
                case 31:
                    message.assist_player0 = reader.uint32();
                    break;
                case 32:
                    message.assist_player1 = reader.uint32();
                    break;
                case 33:
                    message.assist_player2 = reader.uint32();
                    break;
                case 34:
                    message.assist_player3 = reader.uint32();
                    break;
                case 35:
                    message.stack_count = reader.uint32();
                    break;
                case 36:
                    message.hidden_modifier = reader.bool();
                    break;
                case 37:
                    message.is_target_building = reader.bool();
                    break;
                case 38:
                    message.neutral_camp_type = reader.uint32();
                    break;
                case 39:
                    message.rune_type = reader.uint32();
                    break;
                case 40:
                    if (!(message.assist_players && message.assist_players.length))
                        message.assist_players = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.assist_players.push(reader.uint32());
                    } else
                        message.assist_players.push(reader.uint32());
                    break;
                case 41:
                    message.is_heal_save = reader.bool();
                    break;
                case 42:
                    message.is_ultimate_ability = reader.bool();
                    break;
                case 43:
                    message.attacker_hero_level = reader.uint32();
                    break;
                case 44:
                    message.target_hero_level = reader.uint32();
                    break;
                case 45:
                    message.xpm = reader.uint32();
                    break;
                case 46:
                    message.gpm = reader.uint32();
                    break;
                case 47:
                    message.event_location = reader.uint32();
                    break;
                case 48:
                    message.target_is_self = reader.bool();
                    break;
                case 49:
                    message.damage_type = reader.uint32();
                    break;
                case 50:
                    message.invisibility_modifier = reader.bool();
                    break;
                case 51:
                    message.damage_category = reader.uint32();
                    break;
                case 52:
                    message.networth = reader.uint32();
                    break;
                case 53:
                    message.building_type = reader.uint32();
                    break;
                case 54:
                    message.modifier_elapsed_duration = reader.float();
                    break;
                case 55:
                    message.silence_modifier = reader.bool();
                    break;
                case 56:
                    message.heal_from_lifesteal = reader.bool();
                    break;
                case 57:
                    message.modifier_purged = reader.bool();
                    break;
                case 58:
                    message.spell_evaded = reader.bool();
                    break;
                case 59:
                    message.motion_controller_modifier = reader.bool();
                    break;
                case 60:
                    message.long_range_kill = reader.bool();
                    break;
                case 61:
                    message.modifier_purge_ability = reader.uint32();
                    break;
                case 62:
                    message.modifier_purge_npc = reader.uint32();
                    break;
                case 63:
                    message.root_modifier = reader.bool();
                    break;
                case 64:
                    message.total_unit_death_count = reader.uint32();
                    break;
                case 65:
                    message.aura_modifier = reader.bool();
                    break;
                case 66:
                    message.armor_debuff_modifier = reader.bool();
                    break;
                case 67:
                    message.no_physical_damage_modifier = reader.bool();
                    break;
                case 68:
                    message.modifier_ability = reader.uint32();
                    break;
                case 69:
                    message.modifier_hidden = reader.bool();
                    break;
                case 70:
                    message.inflictor_is_stolen_ability = reader.bool();
                    break;
                case 71:
                    message.kill_eater_event = reader.uint32();
                    break;
                case 72:
                    message.unit_status_label = reader.uint32();
                    break;
                case 73:
                    message.spell_generated_attack = reader.bool();
                    break;
                case 74:
                    message.at_night_time = reader.bool();
                    break;
                case 75:
                    message.attacker_has_scepter = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTACombatLogEntry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTACombatLogEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTACombatLogEntry} CMsgDOTACombatLogEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTACombatLogEntry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTACombatLogEntry message.
         * @function verify
         * @memberof CMsgDOTACombatLogEntry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTACombatLogEntry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case -1:
                case 0:
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
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                case 41:
                case 42:
                    break;
                }
            if (message.target_name != null && message.hasOwnProperty("target_name"))
                if (!$util.isInteger(message.target_name))
                    return "target_name: integer expected";
            if (message.target_source_name != null && message.hasOwnProperty("target_source_name"))
                if (!$util.isInteger(message.target_source_name))
                    return "target_source_name: integer expected";
            if (message.attacker_name != null && message.hasOwnProperty("attacker_name"))
                if (!$util.isInteger(message.attacker_name))
                    return "attacker_name: integer expected";
            if (message.damage_source_name != null && message.hasOwnProperty("damage_source_name"))
                if (!$util.isInteger(message.damage_source_name))
                    return "damage_source_name: integer expected";
            if (message.inflictor_name != null && message.hasOwnProperty("inflictor_name"))
                if (!$util.isInteger(message.inflictor_name))
                    return "inflictor_name: integer expected";
            if (message.is_attacker_illusion != null && message.hasOwnProperty("is_attacker_illusion"))
                if (typeof message.is_attacker_illusion !== "boolean")
                    return "is_attacker_illusion: boolean expected";
            if (message.is_attacker_hero != null && message.hasOwnProperty("is_attacker_hero"))
                if (typeof message.is_attacker_hero !== "boolean")
                    return "is_attacker_hero: boolean expected";
            if (message.is_target_illusion != null && message.hasOwnProperty("is_target_illusion"))
                if (typeof message.is_target_illusion !== "boolean")
                    return "is_target_illusion: boolean expected";
            if (message.is_target_hero != null && message.hasOwnProperty("is_target_hero"))
                if (typeof message.is_target_hero !== "boolean")
                    return "is_target_hero: boolean expected";
            if (message.is_visible_radiant != null && message.hasOwnProperty("is_visible_radiant"))
                if (typeof message.is_visible_radiant !== "boolean")
                    return "is_visible_radiant: boolean expected";
            if (message.is_visible_dire != null && message.hasOwnProperty("is_visible_dire"))
                if (typeof message.is_visible_dire !== "boolean")
                    return "is_visible_dire: boolean expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            if (message.health != null && message.hasOwnProperty("health"))
                if (!$util.isInteger(message.health))
                    return "health: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp !== "number")
                    return "timestamp: number expected";
            if (message.stun_duration != null && message.hasOwnProperty("stun_duration"))
                if (typeof message.stun_duration !== "number")
                    return "stun_duration: number expected";
            if (message.slow_duration != null && message.hasOwnProperty("slow_duration"))
                if (typeof message.slow_duration !== "number")
                    return "slow_duration: number expected";
            if (message.is_ability_toggle_on != null && message.hasOwnProperty("is_ability_toggle_on"))
                if (typeof message.is_ability_toggle_on !== "boolean")
                    return "is_ability_toggle_on: boolean expected";
            if (message.is_ability_toggle_off != null && message.hasOwnProperty("is_ability_toggle_off"))
                if (typeof message.is_ability_toggle_off !== "boolean")
                    return "is_ability_toggle_off: boolean expected";
            if (message.ability_level != null && message.hasOwnProperty("ability_level"))
                if (!$util.isInteger(message.ability_level))
                    return "ability_level: integer expected";
            if (message.location_x != null && message.hasOwnProperty("location_x"))
                if (typeof message.location_x !== "number")
                    return "location_x: number expected";
            if (message.location_y != null && message.hasOwnProperty("location_y"))
                if (typeof message.location_y !== "number")
                    return "location_y: number expected";
            if (message.gold_reason != null && message.hasOwnProperty("gold_reason"))
                if (!$util.isInteger(message.gold_reason))
                    return "gold_reason: integer expected";
            if (message.timestamp_raw != null && message.hasOwnProperty("timestamp_raw"))
                if (typeof message.timestamp_raw !== "number")
                    return "timestamp_raw: number expected";
            if (message.modifier_duration != null && message.hasOwnProperty("modifier_duration"))
                if (typeof message.modifier_duration !== "number")
                    return "modifier_duration: number expected";
            if (message.xp_reason != null && message.hasOwnProperty("xp_reason"))
                if (!$util.isInteger(message.xp_reason))
                    return "xp_reason: integer expected";
            if (message.last_hits != null && message.hasOwnProperty("last_hits"))
                if (!$util.isInteger(message.last_hits))
                    return "last_hits: integer expected";
            if (message.attacker_team != null && message.hasOwnProperty("attacker_team"))
                if (!$util.isInteger(message.attacker_team))
                    return "attacker_team: integer expected";
            if (message.target_team != null && message.hasOwnProperty("target_team"))
                if (!$util.isInteger(message.target_team))
                    return "target_team: integer expected";
            if (message.obs_wards_placed != null && message.hasOwnProperty("obs_wards_placed"))
                if (!$util.isInteger(message.obs_wards_placed))
                    return "obs_wards_placed: integer expected";
            if (message.assist_player0 != null && message.hasOwnProperty("assist_player0"))
                if (!$util.isInteger(message.assist_player0))
                    return "assist_player0: integer expected";
            if (message.assist_player1 != null && message.hasOwnProperty("assist_player1"))
                if (!$util.isInteger(message.assist_player1))
                    return "assist_player1: integer expected";
            if (message.assist_player2 != null && message.hasOwnProperty("assist_player2"))
                if (!$util.isInteger(message.assist_player2))
                    return "assist_player2: integer expected";
            if (message.assist_player3 != null && message.hasOwnProperty("assist_player3"))
                if (!$util.isInteger(message.assist_player3))
                    return "assist_player3: integer expected";
            if (message.stack_count != null && message.hasOwnProperty("stack_count"))
                if (!$util.isInteger(message.stack_count))
                    return "stack_count: integer expected";
            if (message.hidden_modifier != null && message.hasOwnProperty("hidden_modifier"))
                if (typeof message.hidden_modifier !== "boolean")
                    return "hidden_modifier: boolean expected";
            if (message.is_target_building != null && message.hasOwnProperty("is_target_building"))
                if (typeof message.is_target_building !== "boolean")
                    return "is_target_building: boolean expected";
            if (message.neutral_camp_type != null && message.hasOwnProperty("neutral_camp_type"))
                if (!$util.isInteger(message.neutral_camp_type))
                    return "neutral_camp_type: integer expected";
            if (message.rune_type != null && message.hasOwnProperty("rune_type"))
                if (!$util.isInteger(message.rune_type))
                    return "rune_type: integer expected";
            if (message.assist_players != null && message.hasOwnProperty("assist_players")) {
                if (!Array.isArray(message.assist_players))
                    return "assist_players: array expected";
                for (var i = 0; i < message.assist_players.length; ++i)
                    if (!$util.isInteger(message.assist_players[i]))
                        return "assist_players: integer[] expected";
            }
            if (message.is_heal_save != null && message.hasOwnProperty("is_heal_save"))
                if (typeof message.is_heal_save !== "boolean")
                    return "is_heal_save: boolean expected";
            if (message.is_ultimate_ability != null && message.hasOwnProperty("is_ultimate_ability"))
                if (typeof message.is_ultimate_ability !== "boolean")
                    return "is_ultimate_ability: boolean expected";
            if (message.attacker_hero_level != null && message.hasOwnProperty("attacker_hero_level"))
                if (!$util.isInteger(message.attacker_hero_level))
                    return "attacker_hero_level: integer expected";
            if (message.target_hero_level != null && message.hasOwnProperty("target_hero_level"))
                if (!$util.isInteger(message.target_hero_level))
                    return "target_hero_level: integer expected";
            if (message.xpm != null && message.hasOwnProperty("xpm"))
                if (!$util.isInteger(message.xpm))
                    return "xpm: integer expected";
            if (message.gpm != null && message.hasOwnProperty("gpm"))
                if (!$util.isInteger(message.gpm))
                    return "gpm: integer expected";
            if (message.event_location != null && message.hasOwnProperty("event_location"))
                if (!$util.isInteger(message.event_location))
                    return "event_location: integer expected";
            if (message.target_is_self != null && message.hasOwnProperty("target_is_self"))
                if (typeof message.target_is_self !== "boolean")
                    return "target_is_self: boolean expected";
            if (message.damage_type != null && message.hasOwnProperty("damage_type"))
                if (!$util.isInteger(message.damage_type))
                    return "damage_type: integer expected";
            if (message.invisibility_modifier != null && message.hasOwnProperty("invisibility_modifier"))
                if (typeof message.invisibility_modifier !== "boolean")
                    return "invisibility_modifier: boolean expected";
            if (message.damage_category != null && message.hasOwnProperty("damage_category"))
                if (!$util.isInteger(message.damage_category))
                    return "damage_category: integer expected";
            if (message.networth != null && message.hasOwnProperty("networth"))
                if (!$util.isInteger(message.networth))
                    return "networth: integer expected";
            if (message.building_type != null && message.hasOwnProperty("building_type"))
                if (!$util.isInteger(message.building_type))
                    return "building_type: integer expected";
            if (message.modifier_elapsed_duration != null && message.hasOwnProperty("modifier_elapsed_duration"))
                if (typeof message.modifier_elapsed_duration !== "number")
                    return "modifier_elapsed_duration: number expected";
            if (message.silence_modifier != null && message.hasOwnProperty("silence_modifier"))
                if (typeof message.silence_modifier !== "boolean")
                    return "silence_modifier: boolean expected";
            if (message.heal_from_lifesteal != null && message.hasOwnProperty("heal_from_lifesteal"))
                if (typeof message.heal_from_lifesteal !== "boolean")
                    return "heal_from_lifesteal: boolean expected";
            if (message.modifier_purged != null && message.hasOwnProperty("modifier_purged"))
                if (typeof message.modifier_purged !== "boolean")
                    return "modifier_purged: boolean expected";
            if (message.spell_evaded != null && message.hasOwnProperty("spell_evaded"))
                if (typeof message.spell_evaded !== "boolean")
                    return "spell_evaded: boolean expected";
            if (message.motion_controller_modifier != null && message.hasOwnProperty("motion_controller_modifier"))
                if (typeof message.motion_controller_modifier !== "boolean")
                    return "motion_controller_modifier: boolean expected";
            if (message.long_range_kill != null && message.hasOwnProperty("long_range_kill"))
                if (typeof message.long_range_kill !== "boolean")
                    return "long_range_kill: boolean expected";
            if (message.modifier_purge_ability != null && message.hasOwnProperty("modifier_purge_ability"))
                if (!$util.isInteger(message.modifier_purge_ability))
                    return "modifier_purge_ability: integer expected";
            if (message.modifier_purge_npc != null && message.hasOwnProperty("modifier_purge_npc"))
                if (!$util.isInteger(message.modifier_purge_npc))
                    return "modifier_purge_npc: integer expected";
            if (message.root_modifier != null && message.hasOwnProperty("root_modifier"))
                if (typeof message.root_modifier !== "boolean")
                    return "root_modifier: boolean expected";
            if (message.total_unit_death_count != null && message.hasOwnProperty("total_unit_death_count"))
                if (!$util.isInteger(message.total_unit_death_count))
                    return "total_unit_death_count: integer expected";
            if (message.aura_modifier != null && message.hasOwnProperty("aura_modifier"))
                if (typeof message.aura_modifier !== "boolean")
                    return "aura_modifier: boolean expected";
            if (message.armor_debuff_modifier != null && message.hasOwnProperty("armor_debuff_modifier"))
                if (typeof message.armor_debuff_modifier !== "boolean")
                    return "armor_debuff_modifier: boolean expected";
            if (message.no_physical_damage_modifier != null && message.hasOwnProperty("no_physical_damage_modifier"))
                if (typeof message.no_physical_damage_modifier !== "boolean")
                    return "no_physical_damage_modifier: boolean expected";
            if (message.modifier_ability != null && message.hasOwnProperty("modifier_ability"))
                if (!$util.isInteger(message.modifier_ability))
                    return "modifier_ability: integer expected";
            if (message.modifier_hidden != null && message.hasOwnProperty("modifier_hidden"))
                if (typeof message.modifier_hidden !== "boolean")
                    return "modifier_hidden: boolean expected";
            if (message.inflictor_is_stolen_ability != null && message.hasOwnProperty("inflictor_is_stolen_ability"))
                if (typeof message.inflictor_is_stolen_ability !== "boolean")
                    return "inflictor_is_stolen_ability: boolean expected";
            if (message.kill_eater_event != null && message.hasOwnProperty("kill_eater_event"))
                if (!$util.isInteger(message.kill_eater_event))
                    return "kill_eater_event: integer expected";
            if (message.unit_status_label != null && message.hasOwnProperty("unit_status_label"))
                if (!$util.isInteger(message.unit_status_label))
                    return "unit_status_label: integer expected";
            if (message.spell_generated_attack != null && message.hasOwnProperty("spell_generated_attack"))
                if (typeof message.spell_generated_attack !== "boolean")
                    return "spell_generated_attack: boolean expected";
            if (message.at_night_time != null && message.hasOwnProperty("at_night_time"))
                if (typeof message.at_night_time !== "boolean")
                    return "at_night_time: boolean expected";
            if (message.attacker_has_scepter != null && message.hasOwnProperty("attacker_has_scepter"))
                if (typeof message.attacker_has_scepter !== "boolean")
                    return "attacker_has_scepter: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgDOTACombatLogEntry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTACombatLogEntry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTACombatLogEntry} CMsgDOTACombatLogEntry
         */
        CMsgDOTACombatLogEntry.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTACombatLogEntry)
                return object;
            var message = new $root.CMsgDOTACombatLogEntry();
            switch (object.type) {
            case "DOTA_COMBATLOG_INVALID":
            case -1:
                message.type = -1;
                break;
            case "DOTA_COMBATLOG_DAMAGE":
            case 0:
                message.type = 0;
                break;
            case "DOTA_COMBATLOG_HEAL":
            case 1:
                message.type = 1;
                break;
            case "DOTA_COMBATLOG_MODIFIER_ADD":
            case 2:
                message.type = 2;
                break;
            case "DOTA_COMBATLOG_MODIFIER_REMOVE":
            case 3:
                message.type = 3;
                break;
            case "DOTA_COMBATLOG_DEATH":
            case 4:
                message.type = 4;
                break;
            case "DOTA_COMBATLOG_ABILITY":
            case 5:
                message.type = 5;
                break;
            case "DOTA_COMBATLOG_ITEM":
            case 6:
                message.type = 6;
                break;
            case "DOTA_COMBATLOG_LOCATION":
            case 7:
                message.type = 7;
                break;
            case "DOTA_COMBATLOG_GOLD":
            case 8:
                message.type = 8;
                break;
            case "DOTA_COMBATLOG_GAME_STATE":
            case 9:
                message.type = 9;
                break;
            case "DOTA_COMBATLOG_XP":
            case 10:
                message.type = 10;
                break;
            case "DOTA_COMBATLOG_PURCHASE":
            case 11:
                message.type = 11;
                break;
            case "DOTA_COMBATLOG_BUYBACK":
            case 12:
                message.type = 12;
                break;
            case "DOTA_COMBATLOG_ABILITY_TRIGGER":
            case 13:
                message.type = 13;
                break;
            case "DOTA_COMBATLOG_PLAYERSTATS":
            case 14:
                message.type = 14;
                break;
            case "DOTA_COMBATLOG_MULTIKILL":
            case 15:
                message.type = 15;
                break;
            case "DOTA_COMBATLOG_KILLSTREAK":
            case 16:
                message.type = 16;
                break;
            case "DOTA_COMBATLOG_TEAM_BUILDING_KILL":
            case 17:
                message.type = 17;
                break;
            case "DOTA_COMBATLOG_FIRST_BLOOD":
            case 18:
                message.type = 18;
                break;
            case "DOTA_COMBATLOG_MODIFIER_STACK_EVENT":
            case 19:
                message.type = 19;
                break;
            case "DOTA_COMBATLOG_NEUTRAL_CAMP_STACK":
            case 20:
                message.type = 20;
                break;
            case "DOTA_COMBATLOG_PICKUP_RUNE":
            case 21:
                message.type = 21;
                break;
            case "DOTA_COMBATLOG_REVEALED_INVISIBLE":
            case 22:
                message.type = 22;
                break;
            case "DOTA_COMBATLOG_HERO_SAVED":
            case 23:
                message.type = 23;
                break;
            case "DOTA_COMBATLOG_MANA_RESTORED":
            case 24:
                message.type = 24;
                break;
            case "DOTA_COMBATLOG_HERO_LEVELUP":
            case 25:
                message.type = 25;
                break;
            case "DOTA_COMBATLOG_BOTTLE_HEAL_ALLY":
            case 26:
                message.type = 26;
                break;
            case "DOTA_COMBATLOG_ENDGAME_STATS":
            case 27:
                message.type = 27;
                break;
            case "DOTA_COMBATLOG_INTERRUPT_CHANNEL":
            case 28:
                message.type = 28;
                break;
            case "DOTA_COMBATLOG_ALLIED_GOLD":
            case 29:
                message.type = 29;
                break;
            case "DOTA_COMBATLOG_AEGIS_TAKEN":
            case 30:
                message.type = 30;
                break;
            case "DOTA_COMBATLOG_MANA_DAMAGE":
            case 31:
                message.type = 31;
                break;
            case "DOTA_COMBATLOG_PHYSICAL_DAMAGE_PREVENTED":
            case 32:
                message.type = 32;
                break;
            case "DOTA_COMBATLOG_UNIT_SUMMONED":
            case 33:
                message.type = 33;
                break;
            case "DOTA_COMBATLOG_ATTACK_EVADE":
            case 34:
                message.type = 34;
                break;
            case "DOTA_COMBATLOG_TREE_CUT":
            case 35:
                message.type = 35;
                break;
            case "DOTA_COMBATLOG_SUCCESSFUL_SCAN":
            case 36:
                message.type = 36;
                break;
            case "DOTA_COMBATLOG_END_KILLSTREAK":
            case 37:
                message.type = 37;
                break;
            case "DOTA_COMBATLOG_BLOODSTONE_CHARGE":
            case 38:
                message.type = 38;
                break;
            case "DOTA_COMBATLOG_CRITICAL_DAMAGE":
            case 39:
                message.type = 39;
                break;
            case "DOTA_COMBATLOG_SPELL_ABSORB":
            case 40:
                message.type = 40;
                break;
            case "DOTA_COMBATLOG_UNIT_TELEPORTED":
            case 41:
                message.type = 41;
                break;
            case "DOTA_COMBATLOG_KILL_EATER_EVENT":
            case 42:
                message.type = 42;
                break;
            }
            if (object.target_name != null)
                message.target_name = object.target_name >>> 0;
            if (object.target_source_name != null)
                message.target_source_name = object.target_source_name >>> 0;
            if (object.attacker_name != null)
                message.attacker_name = object.attacker_name >>> 0;
            if (object.damage_source_name != null)
                message.damage_source_name = object.damage_source_name >>> 0;
            if (object.inflictor_name != null)
                message.inflictor_name = object.inflictor_name >>> 0;
            if (object.is_attacker_illusion != null)
                message.is_attacker_illusion = Boolean(object.is_attacker_illusion);
            if (object.is_attacker_hero != null)
                message.is_attacker_hero = Boolean(object.is_attacker_hero);
            if (object.is_target_illusion != null)
                message.is_target_illusion = Boolean(object.is_target_illusion);
            if (object.is_target_hero != null)
                message.is_target_hero = Boolean(object.is_target_hero);
            if (object.is_visible_radiant != null)
                message.is_visible_radiant = Boolean(object.is_visible_radiant);
            if (object.is_visible_dire != null)
                message.is_visible_dire = Boolean(object.is_visible_dire);
            if (object.value != null)
                message.value = object.value >>> 0;
            if (object.health != null)
                message.health = object.health | 0;
            if (object.timestamp != null)
                message.timestamp = Number(object.timestamp);
            if (object.stun_duration != null)
                message.stun_duration = Number(object.stun_duration);
            if (object.slow_duration != null)
                message.slow_duration = Number(object.slow_duration);
            if (object.is_ability_toggle_on != null)
                message.is_ability_toggle_on = Boolean(object.is_ability_toggle_on);
            if (object.is_ability_toggle_off != null)
                message.is_ability_toggle_off = Boolean(object.is_ability_toggle_off);
            if (object.ability_level != null)
                message.ability_level = object.ability_level >>> 0;
            if (object.location_x != null)
                message.location_x = Number(object.location_x);
            if (object.location_y != null)
                message.location_y = Number(object.location_y);
            if (object.gold_reason != null)
                message.gold_reason = object.gold_reason >>> 0;
            if (object.timestamp_raw != null)
                message.timestamp_raw = Number(object.timestamp_raw);
            if (object.modifier_duration != null)
                message.modifier_duration = Number(object.modifier_duration);
            if (object.xp_reason != null)
                message.xp_reason = object.xp_reason >>> 0;
            if (object.last_hits != null)
                message.last_hits = object.last_hits >>> 0;
            if (object.attacker_team != null)
                message.attacker_team = object.attacker_team >>> 0;
            if (object.target_team != null)
                message.target_team = object.target_team >>> 0;
            if (object.obs_wards_placed != null)
                message.obs_wards_placed = object.obs_wards_placed >>> 0;
            if (object.assist_player0 != null)
                message.assist_player0 = object.assist_player0 >>> 0;
            if (object.assist_player1 != null)
                message.assist_player1 = object.assist_player1 >>> 0;
            if (object.assist_player2 != null)
                message.assist_player2 = object.assist_player2 >>> 0;
            if (object.assist_player3 != null)
                message.assist_player3 = object.assist_player3 >>> 0;
            if (object.stack_count != null)
                message.stack_count = object.stack_count >>> 0;
            if (object.hidden_modifier != null)
                message.hidden_modifier = Boolean(object.hidden_modifier);
            if (object.is_target_building != null)
                message.is_target_building = Boolean(object.is_target_building);
            if (object.neutral_camp_type != null)
                message.neutral_camp_type = object.neutral_camp_type >>> 0;
            if (object.rune_type != null)
                message.rune_type = object.rune_type >>> 0;
            if (object.assist_players) {
                if (!Array.isArray(object.assist_players))
                    throw TypeError(".CMsgDOTACombatLogEntry.assist_players: array expected");
                message.assist_players = [];
                for (var i = 0; i < object.assist_players.length; ++i)
                    message.assist_players[i] = object.assist_players[i] >>> 0;
            }
            if (object.is_heal_save != null)
                message.is_heal_save = Boolean(object.is_heal_save);
            if (object.is_ultimate_ability != null)
                message.is_ultimate_ability = Boolean(object.is_ultimate_ability);
            if (object.attacker_hero_level != null)
                message.attacker_hero_level = object.attacker_hero_level >>> 0;
            if (object.target_hero_level != null)
                message.target_hero_level = object.target_hero_level >>> 0;
            if (object.xpm != null)
                message.xpm = object.xpm >>> 0;
            if (object.gpm != null)
                message.gpm = object.gpm >>> 0;
            if (object.event_location != null)
                message.event_location = object.event_location >>> 0;
            if (object.target_is_self != null)
                message.target_is_self = Boolean(object.target_is_self);
            if (object.damage_type != null)
                message.damage_type = object.damage_type >>> 0;
            if (object.invisibility_modifier != null)
                message.invisibility_modifier = Boolean(object.invisibility_modifier);
            if (object.damage_category != null)
                message.damage_category = object.damage_category >>> 0;
            if (object.networth != null)
                message.networth = object.networth >>> 0;
            if (object.building_type != null)
                message.building_type = object.building_type >>> 0;
            if (object.modifier_elapsed_duration != null)
                message.modifier_elapsed_duration = Number(object.modifier_elapsed_duration);
            if (object.silence_modifier != null)
                message.silence_modifier = Boolean(object.silence_modifier);
            if (object.heal_from_lifesteal != null)
                message.heal_from_lifesteal = Boolean(object.heal_from_lifesteal);
            if (object.modifier_purged != null)
                message.modifier_purged = Boolean(object.modifier_purged);
            if (object.spell_evaded != null)
                message.spell_evaded = Boolean(object.spell_evaded);
            if (object.motion_controller_modifier != null)
                message.motion_controller_modifier = Boolean(object.motion_controller_modifier);
            if (object.long_range_kill != null)
                message.long_range_kill = Boolean(object.long_range_kill);
            if (object.modifier_purge_ability != null)
                message.modifier_purge_ability = object.modifier_purge_ability >>> 0;
            if (object.modifier_purge_npc != null)
                message.modifier_purge_npc = object.modifier_purge_npc >>> 0;
            if (object.root_modifier != null)
                message.root_modifier = Boolean(object.root_modifier);
            if (object.total_unit_death_count != null)
                message.total_unit_death_count = object.total_unit_death_count >>> 0;
            if (object.aura_modifier != null)
                message.aura_modifier = Boolean(object.aura_modifier);
            if (object.armor_debuff_modifier != null)
                message.armor_debuff_modifier = Boolean(object.armor_debuff_modifier);
            if (object.no_physical_damage_modifier != null)
                message.no_physical_damage_modifier = Boolean(object.no_physical_damage_modifier);
            if (object.modifier_ability != null)
                message.modifier_ability = object.modifier_ability >>> 0;
            if (object.modifier_hidden != null)
                message.modifier_hidden = Boolean(object.modifier_hidden);
            if (object.inflictor_is_stolen_ability != null)
                message.inflictor_is_stolen_ability = Boolean(object.inflictor_is_stolen_ability);
            if (object.kill_eater_event != null)
                message.kill_eater_event = object.kill_eater_event >>> 0;
            if (object.unit_status_label != null)
                message.unit_status_label = object.unit_status_label >>> 0;
            if (object.spell_generated_attack != null)
                message.spell_generated_attack = Boolean(object.spell_generated_attack);
            if (object.at_night_time != null)
                message.at_night_time = Boolean(object.at_night_time);
            if (object.attacker_has_scepter != null)
                message.attacker_has_scepter = Boolean(object.attacker_has_scepter);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTACombatLogEntry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTACombatLogEntry
         * @static
         * @param {CMsgDOTACombatLogEntry} message CMsgDOTACombatLogEntry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTACombatLogEntry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.assist_players = [];
            if (options.defaults) {
                object.type = options.enums === String ? "DOTA_COMBATLOG_INVALID" : -1;
                object.target_name = 0;
                object.target_source_name = 0;
                object.attacker_name = 0;
                object.damage_source_name = 0;
                object.inflictor_name = 0;
                object.is_attacker_illusion = false;
                object.is_attacker_hero = false;
                object.is_target_illusion = false;
                object.is_target_hero = false;
                object.is_visible_radiant = false;
                object.is_visible_dire = false;
                object.value = 0;
                object.health = 0;
                object.timestamp = 0;
                object.stun_duration = 0;
                object.slow_duration = 0;
                object.is_ability_toggle_on = false;
                object.is_ability_toggle_off = false;
                object.ability_level = 0;
                object.location_x = 0;
                object.location_y = 0;
                object.gold_reason = 0;
                object.timestamp_raw = 0;
                object.modifier_duration = 0;
                object.xp_reason = 0;
                object.last_hits = 0;
                object.attacker_team = 0;
                object.target_team = 0;
                object.obs_wards_placed = 0;
                object.assist_player0 = 0;
                object.assist_player1 = 0;
                object.assist_player2 = 0;
                object.assist_player3 = 0;
                object.stack_count = 0;
                object.hidden_modifier = false;
                object.is_target_building = false;
                object.neutral_camp_type = 0;
                object.rune_type = 0;
                object.is_heal_save = false;
                object.is_ultimate_ability = false;
                object.attacker_hero_level = 0;
                object.target_hero_level = 0;
                object.xpm = 0;
                object.gpm = 0;
                object.event_location = 0;
                object.target_is_self = false;
                object.damage_type = 0;
                object.invisibility_modifier = false;
                object.damage_category = 0;
                object.networth = 0;
                object.building_type = 0;
                object.modifier_elapsed_duration = 0;
                object.silence_modifier = false;
                object.heal_from_lifesteal = false;
                object.modifier_purged = false;
                object.spell_evaded = false;
                object.motion_controller_modifier = false;
                object.long_range_kill = false;
                object.modifier_purge_ability = 0;
                object.modifier_purge_npc = 0;
                object.root_modifier = false;
                object.total_unit_death_count = 0;
                object.aura_modifier = false;
                object.armor_debuff_modifier = false;
                object.no_physical_damage_modifier = false;
                object.modifier_ability = 0;
                object.modifier_hidden = false;
                object.inflictor_is_stolen_ability = false;
                object.kill_eater_event = 0;
                object.unit_status_label = 0;
                object.spell_generated_attack = false;
                object.at_night_time = false;
                object.attacker_has_scepter = false;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.DOTA_COMBATLOG_TYPES[message.type] : message.type;
            if (message.target_name != null && message.hasOwnProperty("target_name"))
                object.target_name = message.target_name;
            if (message.target_source_name != null && message.hasOwnProperty("target_source_name"))
                object.target_source_name = message.target_source_name;
            if (message.attacker_name != null && message.hasOwnProperty("attacker_name"))
                object.attacker_name = message.attacker_name;
            if (message.damage_source_name != null && message.hasOwnProperty("damage_source_name"))
                object.damage_source_name = message.damage_source_name;
            if (message.inflictor_name != null && message.hasOwnProperty("inflictor_name"))
                object.inflictor_name = message.inflictor_name;
            if (message.is_attacker_illusion != null && message.hasOwnProperty("is_attacker_illusion"))
                object.is_attacker_illusion = message.is_attacker_illusion;
            if (message.is_attacker_hero != null && message.hasOwnProperty("is_attacker_hero"))
                object.is_attacker_hero = message.is_attacker_hero;
            if (message.is_target_illusion != null && message.hasOwnProperty("is_target_illusion"))
                object.is_target_illusion = message.is_target_illusion;
            if (message.is_target_hero != null && message.hasOwnProperty("is_target_hero"))
                object.is_target_hero = message.is_target_hero;
            if (message.is_visible_radiant != null && message.hasOwnProperty("is_visible_radiant"))
                object.is_visible_radiant = message.is_visible_radiant;
            if (message.is_visible_dire != null && message.hasOwnProperty("is_visible_dire"))
                object.is_visible_dire = message.is_visible_dire;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.health != null && message.hasOwnProperty("health"))
                object.health = message.health;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = options.json && !isFinite(message.timestamp) ? String(message.timestamp) : message.timestamp;
            if (message.stun_duration != null && message.hasOwnProperty("stun_duration"))
                object.stun_duration = options.json && !isFinite(message.stun_duration) ? String(message.stun_duration) : message.stun_duration;
            if (message.slow_duration != null && message.hasOwnProperty("slow_duration"))
                object.slow_duration = options.json && !isFinite(message.slow_duration) ? String(message.slow_duration) : message.slow_duration;
            if (message.is_ability_toggle_on != null && message.hasOwnProperty("is_ability_toggle_on"))
                object.is_ability_toggle_on = message.is_ability_toggle_on;
            if (message.is_ability_toggle_off != null && message.hasOwnProperty("is_ability_toggle_off"))
                object.is_ability_toggle_off = message.is_ability_toggle_off;
            if (message.ability_level != null && message.hasOwnProperty("ability_level"))
                object.ability_level = message.ability_level;
            if (message.location_x != null && message.hasOwnProperty("location_x"))
                object.location_x = options.json && !isFinite(message.location_x) ? String(message.location_x) : message.location_x;
            if (message.location_y != null && message.hasOwnProperty("location_y"))
                object.location_y = options.json && !isFinite(message.location_y) ? String(message.location_y) : message.location_y;
            if (message.gold_reason != null && message.hasOwnProperty("gold_reason"))
                object.gold_reason = message.gold_reason;
            if (message.timestamp_raw != null && message.hasOwnProperty("timestamp_raw"))
                object.timestamp_raw = options.json && !isFinite(message.timestamp_raw) ? String(message.timestamp_raw) : message.timestamp_raw;
            if (message.modifier_duration != null && message.hasOwnProperty("modifier_duration"))
                object.modifier_duration = options.json && !isFinite(message.modifier_duration) ? String(message.modifier_duration) : message.modifier_duration;
            if (message.xp_reason != null && message.hasOwnProperty("xp_reason"))
                object.xp_reason = message.xp_reason;
            if (message.last_hits != null && message.hasOwnProperty("last_hits"))
                object.last_hits = message.last_hits;
            if (message.attacker_team != null && message.hasOwnProperty("attacker_team"))
                object.attacker_team = message.attacker_team;
            if (message.target_team != null && message.hasOwnProperty("target_team"))
                object.target_team = message.target_team;
            if (message.obs_wards_placed != null && message.hasOwnProperty("obs_wards_placed"))
                object.obs_wards_placed = message.obs_wards_placed;
            if (message.assist_player0 != null && message.hasOwnProperty("assist_player0"))
                object.assist_player0 = message.assist_player0;
            if (message.assist_player1 != null && message.hasOwnProperty("assist_player1"))
                object.assist_player1 = message.assist_player1;
            if (message.assist_player2 != null && message.hasOwnProperty("assist_player2"))
                object.assist_player2 = message.assist_player2;
            if (message.assist_player3 != null && message.hasOwnProperty("assist_player3"))
                object.assist_player3 = message.assist_player3;
            if (message.stack_count != null && message.hasOwnProperty("stack_count"))
                object.stack_count = message.stack_count;
            if (message.hidden_modifier != null && message.hasOwnProperty("hidden_modifier"))
                object.hidden_modifier = message.hidden_modifier;
            if (message.is_target_building != null && message.hasOwnProperty("is_target_building"))
                object.is_target_building = message.is_target_building;
            if (message.neutral_camp_type != null && message.hasOwnProperty("neutral_camp_type"))
                object.neutral_camp_type = message.neutral_camp_type;
            if (message.rune_type != null && message.hasOwnProperty("rune_type"))
                object.rune_type = message.rune_type;
            if (message.assist_players && message.assist_players.length) {
                object.assist_players = [];
                for (var j = 0; j < message.assist_players.length; ++j)
                    object.assist_players[j] = message.assist_players[j];
            }
            if (message.is_heal_save != null && message.hasOwnProperty("is_heal_save"))
                object.is_heal_save = message.is_heal_save;
            if (message.is_ultimate_ability != null && message.hasOwnProperty("is_ultimate_ability"))
                object.is_ultimate_ability = message.is_ultimate_ability;
            if (message.attacker_hero_level != null && message.hasOwnProperty("attacker_hero_level"))
                object.attacker_hero_level = message.attacker_hero_level;
            if (message.target_hero_level != null && message.hasOwnProperty("target_hero_level"))
                object.target_hero_level = message.target_hero_level;
            if (message.xpm != null && message.hasOwnProperty("xpm"))
                object.xpm = message.xpm;
            if (message.gpm != null && message.hasOwnProperty("gpm"))
                object.gpm = message.gpm;
            if (message.event_location != null && message.hasOwnProperty("event_location"))
                object.event_location = message.event_location;
            if (message.target_is_self != null && message.hasOwnProperty("target_is_self"))
                object.target_is_self = message.target_is_self;
            if (message.damage_type != null && message.hasOwnProperty("damage_type"))
                object.damage_type = message.damage_type;
            if (message.invisibility_modifier != null && message.hasOwnProperty("invisibility_modifier"))
                object.invisibility_modifier = message.invisibility_modifier;
            if (message.damage_category != null && message.hasOwnProperty("damage_category"))
                object.damage_category = message.damage_category;
            if (message.networth != null && message.hasOwnProperty("networth"))
                object.networth = message.networth;
            if (message.building_type != null && message.hasOwnProperty("building_type"))
                object.building_type = message.building_type;
            if (message.modifier_elapsed_duration != null && message.hasOwnProperty("modifier_elapsed_duration"))
                object.modifier_elapsed_duration = options.json && !isFinite(message.modifier_elapsed_duration) ? String(message.modifier_elapsed_duration) : message.modifier_elapsed_duration;
            if (message.silence_modifier != null && message.hasOwnProperty("silence_modifier"))
                object.silence_modifier = message.silence_modifier;
            if (message.heal_from_lifesteal != null && message.hasOwnProperty("heal_from_lifesteal"))
                object.heal_from_lifesteal = message.heal_from_lifesteal;
            if (message.modifier_purged != null && message.hasOwnProperty("modifier_purged"))
                object.modifier_purged = message.modifier_purged;
            if (message.spell_evaded != null && message.hasOwnProperty("spell_evaded"))
                object.spell_evaded = message.spell_evaded;
            if (message.motion_controller_modifier != null && message.hasOwnProperty("motion_controller_modifier"))
                object.motion_controller_modifier = message.motion_controller_modifier;
            if (message.long_range_kill != null && message.hasOwnProperty("long_range_kill"))
                object.long_range_kill = message.long_range_kill;
            if (message.modifier_purge_ability != null && message.hasOwnProperty("modifier_purge_ability"))
                object.modifier_purge_ability = message.modifier_purge_ability;
            if (message.modifier_purge_npc != null && message.hasOwnProperty("modifier_purge_npc"))
                object.modifier_purge_npc = message.modifier_purge_npc;
            if (message.root_modifier != null && message.hasOwnProperty("root_modifier"))
                object.root_modifier = message.root_modifier;
            if (message.total_unit_death_count != null && message.hasOwnProperty("total_unit_death_count"))
                object.total_unit_death_count = message.total_unit_death_count;
            if (message.aura_modifier != null && message.hasOwnProperty("aura_modifier"))
                object.aura_modifier = message.aura_modifier;
            if (message.armor_debuff_modifier != null && message.hasOwnProperty("armor_debuff_modifier"))
                object.armor_debuff_modifier = message.armor_debuff_modifier;
            if (message.no_physical_damage_modifier != null && message.hasOwnProperty("no_physical_damage_modifier"))
                object.no_physical_damage_modifier = message.no_physical_damage_modifier;
            if (message.modifier_ability != null && message.hasOwnProperty("modifier_ability"))
                object.modifier_ability = message.modifier_ability;
            if (message.modifier_hidden != null && message.hasOwnProperty("modifier_hidden"))
                object.modifier_hidden = message.modifier_hidden;
            if (message.inflictor_is_stolen_ability != null && message.hasOwnProperty("inflictor_is_stolen_ability"))
                object.inflictor_is_stolen_ability = message.inflictor_is_stolen_ability;
            if (message.kill_eater_event != null && message.hasOwnProperty("kill_eater_event"))
                object.kill_eater_event = message.kill_eater_event;
            if (message.unit_status_label != null && message.hasOwnProperty("unit_status_label"))
                object.unit_status_label = message.unit_status_label;
            if (message.spell_generated_attack != null && message.hasOwnProperty("spell_generated_attack"))
                object.spell_generated_attack = message.spell_generated_attack;
            if (message.at_night_time != null && message.hasOwnProperty("at_night_time"))
                object.at_night_time = message.at_night_time;
            if (message.attacker_has_scepter != null && message.hasOwnProperty("attacker_has_scepter"))
                object.attacker_has_scepter = message.attacker_has_scepter;
            return object;
        };
    
        /**
         * Converts this CMsgDOTACombatLogEntry to JSON.
         * @function toJSON
         * @memberof CMsgDOTACombatLogEntry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTACombatLogEntry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgDOTACombatLogEntry;
    })();
    
    $root.CMsgPendingEventAward = (function() {
    
        /**
         * Properties of a CMsgPendingEventAward.
         * @exports ICMsgPendingEventAward
         * @interface ICMsgPendingEventAward
         * @property {EEvent|null} [event_id] CMsgPendingEventAward event_id
         * @property {number|null} [action_id] CMsgPendingEventAward action_id
         * @property {number|null} [num_to_grant] CMsgPendingEventAward num_to_grant
         * @property {EEventActionScoreMode|null} [score_mode] CMsgPendingEventAward score_mode
         * @property {number|null} [audit_action] CMsgPendingEventAward audit_action
         */
    
        /**
         * Constructs a new CMsgPendingEventAward.
         * @exports CMsgPendingEventAward
         * @classdesc Represents a CMsgPendingEventAward.
         * @implements ICMsgPendingEventAward
         * @constructor
         * @param {ICMsgPendingEventAward=} [properties] Properties to set
         */
        function CMsgPendingEventAward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgPendingEventAward event_id.
         * @member {EEvent} event_id
         * @memberof CMsgPendingEventAward
         * @instance
         */
        CMsgPendingEventAward.prototype.event_id = 0;
    
        /**
         * CMsgPendingEventAward action_id.
         * @member {number} action_id
         * @memberof CMsgPendingEventAward
         * @instance
         */
        CMsgPendingEventAward.prototype.action_id = 0;
    
        /**
         * CMsgPendingEventAward num_to_grant.
         * @member {number} num_to_grant
         * @memberof CMsgPendingEventAward
         * @instance
         */
        CMsgPendingEventAward.prototype.num_to_grant = 0;
    
        /**
         * CMsgPendingEventAward score_mode.
         * @member {EEventActionScoreMode} score_mode
         * @memberof CMsgPendingEventAward
         * @instance
         */
        CMsgPendingEventAward.prototype.score_mode = 0;
    
        /**
         * CMsgPendingEventAward audit_action.
         * @member {number} audit_action
         * @memberof CMsgPendingEventAward
         * @instance
         */
        CMsgPendingEventAward.prototype.audit_action = 0;
    
        /**
         * Creates a new CMsgPendingEventAward instance using the specified properties.
         * @function create
         * @memberof CMsgPendingEventAward
         * @static
         * @param {ICMsgPendingEventAward=} [properties] Properties to set
         * @returns {CMsgPendingEventAward} CMsgPendingEventAward instance
         */
        CMsgPendingEventAward.create = function create(properties) {
            return new CMsgPendingEventAward(properties);
        };
    
        /**
         * Encodes the specified CMsgPendingEventAward message. Does not implicitly {@link CMsgPendingEventAward.verify|verify} messages.
         * @function encode
         * @memberof CMsgPendingEventAward
         * @static
         * @param {ICMsgPendingEventAward} message CMsgPendingEventAward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPendingEventAward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event_id != null && Object.hasOwnProperty.call(message, "event_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.event_id);
            if (message.action_id != null && Object.hasOwnProperty.call(message, "action_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.action_id);
            if (message.num_to_grant != null && Object.hasOwnProperty.call(message, "num_to_grant"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.num_to_grant);
            if (message.score_mode != null && Object.hasOwnProperty.call(message, "score_mode"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.score_mode);
            if (message.audit_action != null && Object.hasOwnProperty.call(message, "audit_action"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.audit_action);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgPendingEventAward message, length delimited. Does not implicitly {@link CMsgPendingEventAward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgPendingEventAward
         * @static
         * @param {ICMsgPendingEventAward} message CMsgPendingEventAward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgPendingEventAward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgPendingEventAward message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgPendingEventAward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgPendingEventAward} CMsgPendingEventAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPendingEventAward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgPendingEventAward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.event_id = reader.int32();
                    break;
                case 2:
                    message.action_id = reader.uint32();
                    break;
                case 3:
                    message.num_to_grant = reader.uint32();
                    break;
                case 4:
                    message.score_mode = reader.int32();
                    break;
                case 5:
                    message.audit_action = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgPendingEventAward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgPendingEventAward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgPendingEventAward} CMsgPendingEventAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgPendingEventAward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgPendingEventAward message.
         * @function verify
         * @memberof CMsgPendingEventAward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgPendingEventAward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                switch (message.event_id) {
                default:
                    return "event_id: enum value expected";
                case 0:
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
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                    break;
                }
            if (message.action_id != null && message.hasOwnProperty("action_id"))
                if (!$util.isInteger(message.action_id))
                    return "action_id: integer expected";
            if (message.num_to_grant != null && message.hasOwnProperty("num_to_grant"))
                if (!$util.isInteger(message.num_to_grant))
                    return "num_to_grant: integer expected";
            if (message.score_mode != null && message.hasOwnProperty("score_mode"))
                switch (message.score_mode) {
                default:
                    return "score_mode: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.audit_action != null && message.hasOwnProperty("audit_action"))
                if (!$util.isInteger(message.audit_action))
                    return "audit_action: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgPendingEventAward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgPendingEventAward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgPendingEventAward} CMsgPendingEventAward
         */
        CMsgPendingEventAward.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgPendingEventAward)
                return object;
            var message = new $root.CMsgPendingEventAward();
            switch (object.event_id) {
            case "EVENT_ID_NONE":
            case 0:
                message.event_id = 0;
                break;
            case "EVENT_ID_DIRETIDE":
            case 1:
                message.event_id = 1;
                break;
            case "EVENT_ID_SPRING_FESTIVAL":
            case 2:
                message.event_id = 2;
                break;
            case "EVENT_ID_FROSTIVUS_2013":
            case 3:
                message.event_id = 3;
                break;
            case "EVENT_ID_COMPENDIUM_2014":
            case 4:
                message.event_id = 4;
                break;
            case "EVENT_ID_NEXON_PC_BANG":
            case 5:
                message.event_id = 5;
                break;
            case "EVENT_ID_PWRD_DAC_2015":
            case 6:
                message.event_id = 6;
                break;
            case "EVENT_ID_NEW_BLOOM_2015":
            case 7:
                message.event_id = 7;
                break;
            case "EVENT_ID_INTERNATIONAL_2015":
            case 8:
                message.event_id = 8;
                break;
            case "EVENT_ID_FALL_MAJOR_2015":
            case 9:
                message.event_id = 9;
                break;
            case "EVENT_ID_ORACLE_PA":
            case 10:
                message.event_id = 10;
                break;
            case "EVENT_ID_NEW_BLOOM_2015_PREBEAST":
            case 11:
                message.event_id = 11;
                break;
            case "EVENT_ID_FROSTIVUS":
            case 12:
                message.event_id = 12;
                break;
            case "EVENT_ID_WINTER_MAJOR_2016":
            case 13:
                message.event_id = 13;
                break;
            case "EVENT_ID_INTERNATIONAL_2016":
            case 14:
                message.event_id = 14;
                break;
            case "EVENT_ID_FALL_MAJOR_2016":
            case 15:
                message.event_id = 15;
                break;
            case "EVENT_ID_WINTER_MAJOR_2017":
            case 16:
                message.event_id = 16;
                break;
            case "EVENT_ID_NEW_BLOOM_2017":
            case 17:
                message.event_id = 17;
                break;
            case "EVENT_ID_INTERNATIONAL_2017":
            case 18:
                message.event_id = 18;
                break;
            case "EVENT_ID_PLUS_SUBSCRIPTION":
            case 19:
                message.event_id = 19;
                break;
            case "EVENT_ID_SINGLES_DAY_2017":
            case 20:
                message.event_id = 20;
                break;
            case "EVENT_ID_FROSTIVUS_2017":
            case 21:
                message.event_id = 21;
                break;
            case "EVENT_ID_INTERNATIONAL_2018":
            case 22:
                message.event_id = 22;
                break;
            case "EVENT_ID_FROSTIVUS_2018":
            case 23:
                message.event_id = 23;
                break;
            case "EVENT_ID_NEW_BLOOM_2019":
            case 24:
                message.event_id = 24;
                break;
            case "EVENT_ID_INTERNATIONAL_2019":
            case 25:
                message.event_id = 25;
                break;
            case "EVENT_ID_NEW_PLAYER_EXPERIENCE":
            case 26:
                message.event_id = 26;
                break;
            case "EVENT_ID_FROSTIVUS_2019":
            case 27:
                message.event_id = 27;
                break;
            case "EVENT_ID_NEW_BLOOM_2020":
            case 28:
                message.event_id = 28;
                break;
            case "EVENT_ID_INTERNATIONAL_2020":
            case 29:
                message.event_id = 29;
                break;
            case "EVENT_ID_TEAM_FANDOM":
            case 30:
                message.event_id = 30;
                break;
            case "EVENT_ID_DIRETIDE_2020":
            case 31:
                message.event_id = 31;
                break;
            case "EVENT_ID_COUNT":
            case 32:
                message.event_id = 32;
                break;
            }
            if (object.action_id != null)
                message.action_id = object.action_id >>> 0;
            if (object.num_to_grant != null)
                message.num_to_grant = object.num_to_grant >>> 0;
            switch (object.score_mode) {
            case "k_eEventActionScoreMode_Add":
            case 0:
                message.score_mode = 0;
                break;
            case "k_eEventActionScoreMode_Min":
            case 1:
                message.score_mode = 1;
                break;
            }
            if (object.audit_action != null)
                message.audit_action = object.audit_action >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgPendingEventAward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgPendingEventAward
         * @static
         * @param {CMsgPendingEventAward} message CMsgPendingEventAward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgPendingEventAward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.event_id = options.enums === String ? "EVENT_ID_NONE" : 0;
                object.action_id = 0;
                object.num_to_grant = 0;
                object.score_mode = options.enums === String ? "k_eEventActionScoreMode_Add" : 0;
                object.audit_action = 0;
            }
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                object.event_id = options.enums === String ? $root.EEvent[message.event_id] : message.event_id;
            if (message.action_id != null && message.hasOwnProperty("action_id"))
                object.action_id = message.action_id;
            if (message.num_to_grant != null && message.hasOwnProperty("num_to_grant"))
                object.num_to_grant = message.num_to_grant;
            if (message.score_mode != null && message.hasOwnProperty("score_mode"))
                object.score_mode = options.enums === String ? $root.EEventActionScoreMode[message.score_mode] : message.score_mode;
            if (message.audit_action != null && message.hasOwnProperty("audit_action"))
                object.audit_action = message.audit_action;
            return object;
        };
    
        /**
         * Converts this CMsgPendingEventAward to JSON.
         * @function toJSON
         * @memberof CMsgPendingEventAward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgPendingEventAward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgPendingEventAward;
    })();

    return $root;
});
