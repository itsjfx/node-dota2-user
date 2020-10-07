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
     * EGCEconBaseMsg enum.
     * @exports EGCEconBaseMsg
     * @enum {number}
     * @property {number} k_EMsgGCGenericResult=2579 k_EMsgGCGenericResult value
     */
    $root.EGCEconBaseMsg = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[2579] = "k_EMsgGCGenericResult"] = 2579;
        return values;
    })();
    
    /**
     * EGCMsgResponse enum.
     * @exports EGCMsgResponse
     * @enum {number}
     * @property {number} k_EGCMsgResponseOK=0 k_EGCMsgResponseOK value
     * @property {number} k_EGCMsgResponseDenied=1 k_EGCMsgResponseDenied value
     * @property {number} k_EGCMsgResponseServerError=2 k_EGCMsgResponseServerError value
     * @property {number} k_EGCMsgResponseTimeout=3 k_EGCMsgResponseTimeout value
     * @property {number} k_EGCMsgResponseInvalid=4 k_EGCMsgResponseInvalid value
     * @property {number} k_EGCMsgResponseNoMatch=5 k_EGCMsgResponseNoMatch value
     * @property {number} k_EGCMsgResponseUnknownError=6 k_EGCMsgResponseUnknownError value
     * @property {number} k_EGCMsgResponseNotLoggedOn=7 k_EGCMsgResponseNotLoggedOn value
     * @property {number} k_EGCMsgFailedToCreate=8 k_EGCMsgFailedToCreate value
     */
    $root.EGCMsgResponse = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EGCMsgResponseOK"] = 0;
        values[valuesById[1] = "k_EGCMsgResponseDenied"] = 1;
        values[valuesById[2] = "k_EGCMsgResponseServerError"] = 2;
        values[valuesById[3] = "k_EGCMsgResponseTimeout"] = 3;
        values[valuesById[4] = "k_EGCMsgResponseInvalid"] = 4;
        values[valuesById[5] = "k_EGCMsgResponseNoMatch"] = 5;
        values[valuesById[6] = "k_EGCMsgResponseUnknownError"] = 6;
        values[valuesById[7] = "k_EGCMsgResponseNotLoggedOn"] = 7;
        values[valuesById[8] = "k_EGCMsgFailedToCreate"] = 8;
        return values;
    })();
    
    /**
     * EGCPartnerRequestResponse enum.
     * @exports EGCPartnerRequestResponse
     * @enum {number}
     * @property {number} k_EPartnerRequestOK=1 k_EPartnerRequestOK value
     * @property {number} k_EPartnerRequestBadAccount=2 k_EPartnerRequestBadAccount value
     * @property {number} k_EPartnerRequestNotLinked=3 k_EPartnerRequestNotLinked value
     * @property {number} k_EPartnerRequestUnsupportedPartnerType=4 k_EPartnerRequestUnsupportedPartnerType value
     */
    $root.EGCPartnerRequestResponse = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "k_EPartnerRequestOK"] = 1;
        values[valuesById[2] = "k_EPartnerRequestBadAccount"] = 2;
        values[valuesById[3] = "k_EPartnerRequestNotLinked"] = 3;
        values[valuesById[4] = "k_EPartnerRequestUnsupportedPartnerType"] = 4;
        return values;
    })();
    
    /**
     * EGCMsgUseItemResponse enum.
     * @exports EGCMsgUseItemResponse
     * @enum {number}
     * @property {number} k_EGCMsgUseItemResponse_ItemUsed=0 k_EGCMsgUseItemResponse_ItemUsed value
     * @property {number} k_EGCMsgUseItemResponse_GiftNoOtherPlayers=1 k_EGCMsgUseItemResponse_GiftNoOtherPlayers value
     * @property {number} k_EGCMsgUseItemResponse_ServerError=2 k_EGCMsgUseItemResponse_ServerError value
     * @property {number} k_EGCMsgUseItemResponse_MiniGameAlreadyStarted=3 k_EGCMsgUseItemResponse_MiniGameAlreadyStarted value
     * @property {number} k_EGCMsgUseItemResponse_ItemUsed_ItemsGranted=4 k_EGCMsgUseItemResponse_ItemUsed_ItemsGranted value
     * @property {number} k_EGCMsgUseItemResponse_DropRateBonusAlreadyGranted=5 k_EGCMsgUseItemResponse_DropRateBonusAlreadyGranted value
     * @property {number} k_EGCMsgUseItemResponse_NotInLowPriorityPool=6 k_EGCMsgUseItemResponse_NotInLowPriorityPool value
     * @property {number} k_EGCMsgUseItemResponse_NotHighEnoughLevel=7 k_EGCMsgUseItemResponse_NotHighEnoughLevel value
     * @property {number} k_EGCMsgUseItemResponse_EventNotActive=8 k_EGCMsgUseItemResponse_EventNotActive value
     * @property {number} k_EGCMsgUseItemResponse_ItemUsed_EventPointsGranted=9 k_EGCMsgUseItemResponse_ItemUsed_EventPointsGranted value
     * @property {number} k_EGCMsgUseItemResponse_MissingRequirement=10 k_EGCMsgUseItemResponse_MissingRequirement value
     * @property {number} k_EGCMsgUseItemResponse_EmoticonUnlock_NoNew=11 k_EGCMsgUseItemResponse_EmoticonUnlock_NoNew value
     * @property {number} k_EGCMsgUseItemResponse_EmoticonUnlock_Complete=12 k_EGCMsgUseItemResponse_EmoticonUnlock_Complete value
     * @property {number} k_EGCMsgUseItemResponse_ItemUsed_Compendium=13 k_EGCMsgUseItemResponse_ItemUsed_Compendium value
     */
    $root.EGCMsgUseItemResponse = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EGCMsgUseItemResponse_ItemUsed"] = 0;
        values[valuesById[1] = "k_EGCMsgUseItemResponse_GiftNoOtherPlayers"] = 1;
        values[valuesById[2] = "k_EGCMsgUseItemResponse_ServerError"] = 2;
        values[valuesById[3] = "k_EGCMsgUseItemResponse_MiniGameAlreadyStarted"] = 3;
        values[valuesById[4] = "k_EGCMsgUseItemResponse_ItemUsed_ItemsGranted"] = 4;
        values[valuesById[5] = "k_EGCMsgUseItemResponse_DropRateBonusAlreadyGranted"] = 5;
        values[valuesById[6] = "k_EGCMsgUseItemResponse_NotInLowPriorityPool"] = 6;
        values[valuesById[7] = "k_EGCMsgUseItemResponse_NotHighEnoughLevel"] = 7;
        values[valuesById[8] = "k_EGCMsgUseItemResponse_EventNotActive"] = 8;
        values[valuesById[9] = "k_EGCMsgUseItemResponse_ItemUsed_EventPointsGranted"] = 9;
        values[valuesById[10] = "k_EGCMsgUseItemResponse_MissingRequirement"] = 10;
        values[valuesById[11] = "k_EGCMsgUseItemResponse_EmoticonUnlock_NoNew"] = 11;
        values[valuesById[12] = "k_EGCMsgUseItemResponse_EmoticonUnlock_Complete"] = 12;
        values[valuesById[13] = "k_EGCMsgUseItemResponse_ItemUsed_Compendium"] = 13;
        return values;
    })();
    
    $root.CMsgGenericResult = (function() {
    
        /**
         * Properties of a CMsgGenericResult.
         * @exports ICMsgGenericResult
         * @interface ICMsgGenericResult
         * @property {number|null} [eresult] CMsgGenericResult eresult
         * @property {string|null} [debug_message] CMsgGenericResult debug_message
         */
    
        /**
         * Constructs a new CMsgGenericResult.
         * @exports CMsgGenericResult
         * @classdesc Represents a CMsgGenericResult.
         * @implements ICMsgGenericResult
         * @constructor
         * @param {ICMsgGenericResult=} [properties] Properties to set
         */
        function CMsgGenericResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGenericResult eresult.
         * @member {number} eresult
         * @memberof CMsgGenericResult
         * @instance
         */
        CMsgGenericResult.prototype.eresult = 2;
    
        /**
         * CMsgGenericResult debug_message.
         * @member {string} debug_message
         * @memberof CMsgGenericResult
         * @instance
         */
        CMsgGenericResult.prototype.debug_message = "";
    
        /**
         * Creates a new CMsgGenericResult instance using the specified properties.
         * @function create
         * @memberof CMsgGenericResult
         * @static
         * @param {ICMsgGenericResult=} [properties] Properties to set
         * @returns {CMsgGenericResult} CMsgGenericResult instance
         */
        CMsgGenericResult.create = function create(properties) {
            return new CMsgGenericResult(properties);
        };
    
        /**
         * Encodes the specified CMsgGenericResult message. Does not implicitly {@link CMsgGenericResult.verify|verify} messages.
         * @function encode
         * @memberof CMsgGenericResult
         * @static
         * @param {ICMsgGenericResult} message CMsgGenericResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGenericResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eresult != null && Object.hasOwnProperty.call(message, "eresult"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.eresult);
            if (message.debug_message != null && Object.hasOwnProperty.call(message, "debug_message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.debug_message);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGenericResult message, length delimited. Does not implicitly {@link CMsgGenericResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGenericResult
         * @static
         * @param {ICMsgGenericResult} message CMsgGenericResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGenericResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGenericResult message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGenericResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGenericResult} CMsgGenericResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGenericResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGenericResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.uint32();
                    break;
                case 2:
                    message.debug_message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGenericResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGenericResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGenericResult} CMsgGenericResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGenericResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGenericResult message.
         * @function verify
         * @memberof CMsgGenericResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGenericResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            if (message.debug_message != null && message.hasOwnProperty("debug_message"))
                if (!$util.isString(message.debug_message))
                    return "debug_message: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgGenericResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGenericResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGenericResult} CMsgGenericResult
         */
        CMsgGenericResult.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGenericResult)
                return object;
            var message = new $root.CMsgGenericResult();
            if (object.eresult != null)
                message.eresult = object.eresult >>> 0;
            if (object.debug_message != null)
                message.debug_message = String(object.debug_message);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGenericResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGenericResult
         * @static
         * @param {CMsgGenericResult} message CMsgGenericResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGenericResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eresult = 2;
                object.debug_message = "";
            }
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                object.eresult = message.eresult;
            if (message.debug_message != null && message.hasOwnProperty("debug_message"))
                object.debug_message = message.debug_message;
            return object;
        };
    
        /**
         * Converts this CMsgGenericResult to JSON.
         * @function toJSON
         * @memberof CMsgGenericResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGenericResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGenericResult;
    })();

    return $root;
});
