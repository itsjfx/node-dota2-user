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
    
    $root.CPublishedFile_Subscribe_Request = (function() {
    
        /**
         * Properties of a CPublishedFile_Subscribe_Request.
         * @exports ICPublishedFile_Subscribe_Request
         * @interface ICPublishedFile_Subscribe_Request
         * @property {number|Long|null} [publishedfileid] CPublishedFile_Subscribe_Request publishedfileid
         * @property {number|null} [list_type] CPublishedFile_Subscribe_Request list_type
         * @property {number|null} [appid] CPublishedFile_Subscribe_Request appid
         * @property {boolean|null} [notify_client] CPublishedFile_Subscribe_Request notify_client
         */
    
        /**
         * Constructs a new CPublishedFile_Subscribe_Request.
         * @exports CPublishedFile_Subscribe_Request
         * @classdesc Represents a CPublishedFile_Subscribe_Request.
         * @implements ICPublishedFile_Subscribe_Request
         * @constructor
         * @param {ICPublishedFile_Subscribe_Request=} [properties] Properties to set
         */
        function CPublishedFile_Subscribe_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_Subscribe_Request publishedfileid.
         * @member {number|Long} publishedfileid
         * @memberof CPublishedFile_Subscribe_Request
         * @instance
         */
        CPublishedFile_Subscribe_Request.prototype.publishedfileid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CPublishedFile_Subscribe_Request list_type.
         * @member {number} list_type
         * @memberof CPublishedFile_Subscribe_Request
         * @instance
         */
        CPublishedFile_Subscribe_Request.prototype.list_type = 0;
    
        /**
         * CPublishedFile_Subscribe_Request appid.
         * @member {number} appid
         * @memberof CPublishedFile_Subscribe_Request
         * @instance
         */
        CPublishedFile_Subscribe_Request.prototype.appid = 0;
    
        /**
         * CPublishedFile_Subscribe_Request notify_client.
         * @member {boolean} notify_client
         * @memberof CPublishedFile_Subscribe_Request
         * @instance
         */
        CPublishedFile_Subscribe_Request.prototype.notify_client = false;
    
        /**
         * Creates a new CPublishedFile_Subscribe_Request instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_Subscribe_Request
         * @static
         * @param {ICPublishedFile_Subscribe_Request=} [properties] Properties to set
         * @returns {CPublishedFile_Subscribe_Request} CPublishedFile_Subscribe_Request instance
         */
        CPublishedFile_Subscribe_Request.create = function create(properties) {
            return new CPublishedFile_Subscribe_Request(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_Subscribe_Request message. Does not implicitly {@link CPublishedFile_Subscribe_Request.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_Subscribe_Request
         * @static
         * @param {ICPublishedFile_Subscribe_Request} message CPublishedFile_Subscribe_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Subscribe_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publishedfileid != null && Object.hasOwnProperty.call(message, "publishedfileid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.publishedfileid);
            if (message.list_type != null && Object.hasOwnProperty.call(message, "list_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.list_type);
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.appid);
            if (message.notify_client != null && Object.hasOwnProperty.call(message, "notify_client"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.notify_client);
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_Subscribe_Request message, length delimited. Does not implicitly {@link CPublishedFile_Subscribe_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_Subscribe_Request
         * @static
         * @param {ICPublishedFile_Subscribe_Request} message CPublishedFile_Subscribe_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Subscribe_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_Subscribe_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_Subscribe_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_Subscribe_Request} CPublishedFile_Subscribe_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Subscribe_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_Subscribe_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.publishedfileid = reader.uint64();
                    break;
                case 2:
                    message.list_type = reader.uint32();
                    break;
                case 3:
                    message.appid = reader.int32();
                    break;
                case 4:
                    message.notify_client = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPublishedFile_Subscribe_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_Subscribe_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_Subscribe_Request} CPublishedFile_Subscribe_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Subscribe_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_Subscribe_Request message.
         * @function verify
         * @memberof CPublishedFile_Subscribe_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_Subscribe_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (!$util.isInteger(message.publishedfileid) && !(message.publishedfileid && $util.isInteger(message.publishedfileid.low) && $util.isInteger(message.publishedfileid.high)))
                    return "publishedfileid: integer|Long expected";
            if (message.list_type != null && message.hasOwnProperty("list_type"))
                if (!$util.isInteger(message.list_type))
                    return "list_type: integer expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.notify_client != null && message.hasOwnProperty("notify_client"))
                if (typeof message.notify_client !== "boolean")
                    return "notify_client: boolean expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_Subscribe_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_Subscribe_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_Subscribe_Request} CPublishedFile_Subscribe_Request
         */
        CPublishedFile_Subscribe_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_Subscribe_Request)
                return object;
            var message = new $root.CPublishedFile_Subscribe_Request();
            if (object.publishedfileid != null)
                if ($util.Long)
                    (message.publishedfileid = $util.Long.fromValue(object.publishedfileid)).unsigned = true;
                else if (typeof object.publishedfileid === "string")
                    message.publishedfileid = parseInt(object.publishedfileid, 10);
                else if (typeof object.publishedfileid === "number")
                    message.publishedfileid = object.publishedfileid;
                else if (typeof object.publishedfileid === "object")
                    message.publishedfileid = new $util.LongBits(object.publishedfileid.low >>> 0, object.publishedfileid.high >>> 0).toNumber(true);
            if (object.list_type != null)
                message.list_type = object.list_type >>> 0;
            if (object.appid != null)
                message.appid = object.appid | 0;
            if (object.notify_client != null)
                message.notify_client = Boolean(object.notify_client);
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_Subscribe_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_Subscribe_Request
         * @static
         * @param {CPublishedFile_Subscribe_Request} message CPublishedFile_Subscribe_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_Subscribe_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.publishedfileid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.publishedfileid = options.longs === String ? "0" : 0;
                object.list_type = 0;
                object.appid = 0;
                object.notify_client = false;
            }
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (typeof message.publishedfileid === "number")
                    object.publishedfileid = options.longs === String ? String(message.publishedfileid) : message.publishedfileid;
                else
                    object.publishedfileid = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileid) : options.longs === Number ? new $util.LongBits(message.publishedfileid.low >>> 0, message.publishedfileid.high >>> 0).toNumber(true) : message.publishedfileid;
            if (message.list_type != null && message.hasOwnProperty("list_type"))
                object.list_type = message.list_type;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.notify_client != null && message.hasOwnProperty("notify_client"))
                object.notify_client = message.notify_client;
            return object;
        };
    
        /**
         * Converts this CPublishedFile_Subscribe_Request to JSON.
         * @function toJSON
         * @memberof CPublishedFile_Subscribe_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_Subscribe_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPublishedFile_Subscribe_Request;
    })();
    
    $root.CPublishedFile_Subscribe_Response = (function() {
    
        /**
         * Properties of a CPublishedFile_Subscribe_Response.
         * @exports ICPublishedFile_Subscribe_Response
         * @interface ICPublishedFile_Subscribe_Response
         */
    
        /**
         * Constructs a new CPublishedFile_Subscribe_Response.
         * @exports CPublishedFile_Subscribe_Response
         * @classdesc Represents a CPublishedFile_Subscribe_Response.
         * @implements ICPublishedFile_Subscribe_Response
         * @constructor
         * @param {ICPublishedFile_Subscribe_Response=} [properties] Properties to set
         */
        function CPublishedFile_Subscribe_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPublishedFile_Subscribe_Response instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_Subscribe_Response
         * @static
         * @param {ICPublishedFile_Subscribe_Response=} [properties] Properties to set
         * @returns {CPublishedFile_Subscribe_Response} CPublishedFile_Subscribe_Response instance
         */
        CPublishedFile_Subscribe_Response.create = function create(properties) {
            return new CPublishedFile_Subscribe_Response(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_Subscribe_Response message. Does not implicitly {@link CPublishedFile_Subscribe_Response.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_Subscribe_Response
         * @static
         * @param {ICPublishedFile_Subscribe_Response} message CPublishedFile_Subscribe_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Subscribe_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_Subscribe_Response message, length delimited. Does not implicitly {@link CPublishedFile_Subscribe_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_Subscribe_Response
         * @static
         * @param {ICPublishedFile_Subscribe_Response} message CPublishedFile_Subscribe_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Subscribe_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_Subscribe_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_Subscribe_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_Subscribe_Response} CPublishedFile_Subscribe_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Subscribe_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_Subscribe_Response();
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
         * Decodes a CPublishedFile_Subscribe_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_Subscribe_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_Subscribe_Response} CPublishedFile_Subscribe_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Subscribe_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_Subscribe_Response message.
         * @function verify
         * @memberof CPublishedFile_Subscribe_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_Subscribe_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_Subscribe_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_Subscribe_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_Subscribe_Response} CPublishedFile_Subscribe_Response
         */
        CPublishedFile_Subscribe_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_Subscribe_Response)
                return object;
            return new $root.CPublishedFile_Subscribe_Response();
        };
    
        /**
         * Creates a plain object from a CPublishedFile_Subscribe_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_Subscribe_Response
         * @static
         * @param {CPublishedFile_Subscribe_Response} message CPublishedFile_Subscribe_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_Subscribe_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPublishedFile_Subscribe_Response to JSON.
         * @function toJSON
         * @memberof CPublishedFile_Subscribe_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_Subscribe_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPublishedFile_Subscribe_Response;
    })();
    
    $root.CPublishedFile_Unsubscribe_Request = (function() {
    
        /**
         * Properties of a CPublishedFile_Unsubscribe_Request.
         * @exports ICPublishedFile_Unsubscribe_Request
         * @interface ICPublishedFile_Unsubscribe_Request
         * @property {number|Long|null} [publishedfileid] CPublishedFile_Unsubscribe_Request publishedfileid
         * @property {number|null} [list_type] CPublishedFile_Unsubscribe_Request list_type
         * @property {number|null} [appid] CPublishedFile_Unsubscribe_Request appid
         * @property {boolean|null} [notify_client] CPublishedFile_Unsubscribe_Request notify_client
         */
    
        /**
         * Constructs a new CPublishedFile_Unsubscribe_Request.
         * @exports CPublishedFile_Unsubscribe_Request
         * @classdesc Represents a CPublishedFile_Unsubscribe_Request.
         * @implements ICPublishedFile_Unsubscribe_Request
         * @constructor
         * @param {ICPublishedFile_Unsubscribe_Request=} [properties] Properties to set
         */
        function CPublishedFile_Unsubscribe_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_Unsubscribe_Request publishedfileid.
         * @member {number|Long} publishedfileid
         * @memberof CPublishedFile_Unsubscribe_Request
         * @instance
         */
        CPublishedFile_Unsubscribe_Request.prototype.publishedfileid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CPublishedFile_Unsubscribe_Request list_type.
         * @member {number} list_type
         * @memberof CPublishedFile_Unsubscribe_Request
         * @instance
         */
        CPublishedFile_Unsubscribe_Request.prototype.list_type = 0;
    
        /**
         * CPublishedFile_Unsubscribe_Request appid.
         * @member {number} appid
         * @memberof CPublishedFile_Unsubscribe_Request
         * @instance
         */
        CPublishedFile_Unsubscribe_Request.prototype.appid = 0;
    
        /**
         * CPublishedFile_Unsubscribe_Request notify_client.
         * @member {boolean} notify_client
         * @memberof CPublishedFile_Unsubscribe_Request
         * @instance
         */
        CPublishedFile_Unsubscribe_Request.prototype.notify_client = false;
    
        /**
         * Creates a new CPublishedFile_Unsubscribe_Request instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_Unsubscribe_Request
         * @static
         * @param {ICPublishedFile_Unsubscribe_Request=} [properties] Properties to set
         * @returns {CPublishedFile_Unsubscribe_Request} CPublishedFile_Unsubscribe_Request instance
         */
        CPublishedFile_Unsubscribe_Request.create = function create(properties) {
            return new CPublishedFile_Unsubscribe_Request(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_Unsubscribe_Request message. Does not implicitly {@link CPublishedFile_Unsubscribe_Request.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_Unsubscribe_Request
         * @static
         * @param {ICPublishedFile_Unsubscribe_Request} message CPublishedFile_Unsubscribe_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Unsubscribe_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publishedfileid != null && Object.hasOwnProperty.call(message, "publishedfileid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.publishedfileid);
            if (message.list_type != null && Object.hasOwnProperty.call(message, "list_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.list_type);
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.appid);
            if (message.notify_client != null && Object.hasOwnProperty.call(message, "notify_client"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.notify_client);
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_Unsubscribe_Request message, length delimited. Does not implicitly {@link CPublishedFile_Unsubscribe_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_Unsubscribe_Request
         * @static
         * @param {ICPublishedFile_Unsubscribe_Request} message CPublishedFile_Unsubscribe_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Unsubscribe_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_Unsubscribe_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_Unsubscribe_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_Unsubscribe_Request} CPublishedFile_Unsubscribe_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Unsubscribe_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_Unsubscribe_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.publishedfileid = reader.uint64();
                    break;
                case 2:
                    message.list_type = reader.uint32();
                    break;
                case 3:
                    message.appid = reader.int32();
                    break;
                case 4:
                    message.notify_client = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPublishedFile_Unsubscribe_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_Unsubscribe_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_Unsubscribe_Request} CPublishedFile_Unsubscribe_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Unsubscribe_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_Unsubscribe_Request message.
         * @function verify
         * @memberof CPublishedFile_Unsubscribe_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_Unsubscribe_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (!$util.isInteger(message.publishedfileid) && !(message.publishedfileid && $util.isInteger(message.publishedfileid.low) && $util.isInteger(message.publishedfileid.high)))
                    return "publishedfileid: integer|Long expected";
            if (message.list_type != null && message.hasOwnProperty("list_type"))
                if (!$util.isInteger(message.list_type))
                    return "list_type: integer expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.notify_client != null && message.hasOwnProperty("notify_client"))
                if (typeof message.notify_client !== "boolean")
                    return "notify_client: boolean expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_Unsubscribe_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_Unsubscribe_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_Unsubscribe_Request} CPublishedFile_Unsubscribe_Request
         */
        CPublishedFile_Unsubscribe_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_Unsubscribe_Request)
                return object;
            var message = new $root.CPublishedFile_Unsubscribe_Request();
            if (object.publishedfileid != null)
                if ($util.Long)
                    (message.publishedfileid = $util.Long.fromValue(object.publishedfileid)).unsigned = true;
                else if (typeof object.publishedfileid === "string")
                    message.publishedfileid = parseInt(object.publishedfileid, 10);
                else if (typeof object.publishedfileid === "number")
                    message.publishedfileid = object.publishedfileid;
                else if (typeof object.publishedfileid === "object")
                    message.publishedfileid = new $util.LongBits(object.publishedfileid.low >>> 0, object.publishedfileid.high >>> 0).toNumber(true);
            if (object.list_type != null)
                message.list_type = object.list_type >>> 0;
            if (object.appid != null)
                message.appid = object.appid | 0;
            if (object.notify_client != null)
                message.notify_client = Boolean(object.notify_client);
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_Unsubscribe_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_Unsubscribe_Request
         * @static
         * @param {CPublishedFile_Unsubscribe_Request} message CPublishedFile_Unsubscribe_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_Unsubscribe_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.publishedfileid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.publishedfileid = options.longs === String ? "0" : 0;
                object.list_type = 0;
                object.appid = 0;
                object.notify_client = false;
            }
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (typeof message.publishedfileid === "number")
                    object.publishedfileid = options.longs === String ? String(message.publishedfileid) : message.publishedfileid;
                else
                    object.publishedfileid = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileid) : options.longs === Number ? new $util.LongBits(message.publishedfileid.low >>> 0, message.publishedfileid.high >>> 0).toNumber(true) : message.publishedfileid;
            if (message.list_type != null && message.hasOwnProperty("list_type"))
                object.list_type = message.list_type;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.notify_client != null && message.hasOwnProperty("notify_client"))
                object.notify_client = message.notify_client;
            return object;
        };
    
        /**
         * Converts this CPublishedFile_Unsubscribe_Request to JSON.
         * @function toJSON
         * @memberof CPublishedFile_Unsubscribe_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_Unsubscribe_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPublishedFile_Unsubscribe_Request;
    })();
    
    $root.CPublishedFile_Unsubscribe_Response = (function() {
    
        /**
         * Properties of a CPublishedFile_Unsubscribe_Response.
         * @exports ICPublishedFile_Unsubscribe_Response
         * @interface ICPublishedFile_Unsubscribe_Response
         */
    
        /**
         * Constructs a new CPublishedFile_Unsubscribe_Response.
         * @exports CPublishedFile_Unsubscribe_Response
         * @classdesc Represents a CPublishedFile_Unsubscribe_Response.
         * @implements ICPublishedFile_Unsubscribe_Response
         * @constructor
         * @param {ICPublishedFile_Unsubscribe_Response=} [properties] Properties to set
         */
        function CPublishedFile_Unsubscribe_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPublishedFile_Unsubscribe_Response instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_Unsubscribe_Response
         * @static
         * @param {ICPublishedFile_Unsubscribe_Response=} [properties] Properties to set
         * @returns {CPublishedFile_Unsubscribe_Response} CPublishedFile_Unsubscribe_Response instance
         */
        CPublishedFile_Unsubscribe_Response.create = function create(properties) {
            return new CPublishedFile_Unsubscribe_Response(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_Unsubscribe_Response message. Does not implicitly {@link CPublishedFile_Unsubscribe_Response.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_Unsubscribe_Response
         * @static
         * @param {ICPublishedFile_Unsubscribe_Response} message CPublishedFile_Unsubscribe_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Unsubscribe_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_Unsubscribe_Response message, length delimited. Does not implicitly {@link CPublishedFile_Unsubscribe_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_Unsubscribe_Response
         * @static
         * @param {ICPublishedFile_Unsubscribe_Response} message CPublishedFile_Unsubscribe_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Unsubscribe_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_Unsubscribe_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_Unsubscribe_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_Unsubscribe_Response} CPublishedFile_Unsubscribe_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Unsubscribe_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_Unsubscribe_Response();
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
         * Decodes a CPublishedFile_Unsubscribe_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_Unsubscribe_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_Unsubscribe_Response} CPublishedFile_Unsubscribe_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Unsubscribe_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_Unsubscribe_Response message.
         * @function verify
         * @memberof CPublishedFile_Unsubscribe_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_Unsubscribe_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_Unsubscribe_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_Unsubscribe_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_Unsubscribe_Response} CPublishedFile_Unsubscribe_Response
         */
        CPublishedFile_Unsubscribe_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_Unsubscribe_Response)
                return object;
            return new $root.CPublishedFile_Unsubscribe_Response();
        };
    
        /**
         * Creates a plain object from a CPublishedFile_Unsubscribe_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_Unsubscribe_Response
         * @static
         * @param {CPublishedFile_Unsubscribe_Response} message CPublishedFile_Unsubscribe_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_Unsubscribe_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPublishedFile_Unsubscribe_Response to JSON.
         * @function toJSON
         * @memberof CPublishedFile_Unsubscribe_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_Unsubscribe_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPublishedFile_Unsubscribe_Response;
    })();
    
    $root.CPublishedFile_Publish_Request = (function() {
    
        /**
         * Properties of a CPublishedFile_Publish_Request.
         * @exports ICPublishedFile_Publish_Request
         * @interface ICPublishedFile_Publish_Request
         * @property {number|null} [appid] CPublishedFile_Publish_Request appid
         * @property {number|null} [consumer_appid] CPublishedFile_Publish_Request consumer_appid
         * @property {string|null} [cloudfilename] CPublishedFile_Publish_Request cloudfilename
         * @property {string|null} [preview_cloudfilename] CPublishedFile_Publish_Request preview_cloudfilename
         * @property {string|null} [title] CPublishedFile_Publish_Request title
         * @property {string|null} [file_description] CPublishedFile_Publish_Request file_description
         * @property {number|null} [file_type] CPublishedFile_Publish_Request file_type
         * @property {string|null} [consumer_shortcut_name] CPublishedFile_Publish_Request consumer_shortcut_name
         * @property {string|null} [youtube_username] CPublishedFile_Publish_Request youtube_username
         * @property {string|null} [youtube_videoid] CPublishedFile_Publish_Request youtube_videoid
         * @property {number|null} [visibility] CPublishedFile_Publish_Request visibility
         * @property {string|null} [redirect_uri] CPublishedFile_Publish_Request redirect_uri
         * @property {Array.<string>|null} [tags] CPublishedFile_Publish_Request tags
         * @property {string|null} [collection_type] CPublishedFile_Publish_Request collection_type
         * @property {string|null} [game_type] CPublishedFile_Publish_Request game_type
         * @property {string|null} [url] CPublishedFile_Publish_Request url
         */
    
        /**
         * Constructs a new CPublishedFile_Publish_Request.
         * @exports CPublishedFile_Publish_Request
         * @classdesc Represents a CPublishedFile_Publish_Request.
         * @implements ICPublishedFile_Publish_Request
         * @constructor
         * @param {ICPublishedFile_Publish_Request=} [properties] Properties to set
         */
        function CPublishedFile_Publish_Request(properties) {
            this.tags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_Publish_Request appid.
         * @member {number} appid
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.appid = 0;
    
        /**
         * CPublishedFile_Publish_Request consumer_appid.
         * @member {number} consumer_appid
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.consumer_appid = 0;
    
        /**
         * CPublishedFile_Publish_Request cloudfilename.
         * @member {string} cloudfilename
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.cloudfilename = "";
    
        /**
         * CPublishedFile_Publish_Request preview_cloudfilename.
         * @member {string} preview_cloudfilename
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.preview_cloudfilename = "";
    
        /**
         * CPublishedFile_Publish_Request title.
         * @member {string} title
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.title = "";
    
        /**
         * CPublishedFile_Publish_Request file_description.
         * @member {string} file_description
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.file_description = "";
    
        /**
         * CPublishedFile_Publish_Request file_type.
         * @member {number} file_type
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.file_type = 0;
    
        /**
         * CPublishedFile_Publish_Request consumer_shortcut_name.
         * @member {string} consumer_shortcut_name
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.consumer_shortcut_name = "";
    
        /**
         * CPublishedFile_Publish_Request youtube_username.
         * @member {string} youtube_username
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.youtube_username = "";
    
        /**
         * CPublishedFile_Publish_Request youtube_videoid.
         * @member {string} youtube_videoid
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.youtube_videoid = "";
    
        /**
         * CPublishedFile_Publish_Request visibility.
         * @member {number} visibility
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.visibility = 0;
    
        /**
         * CPublishedFile_Publish_Request redirect_uri.
         * @member {string} redirect_uri
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.redirect_uri = "";
    
        /**
         * CPublishedFile_Publish_Request tags.
         * @member {Array.<string>} tags
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.tags = $util.emptyArray;
    
        /**
         * CPublishedFile_Publish_Request collection_type.
         * @member {string} collection_type
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.collection_type = "";
    
        /**
         * CPublishedFile_Publish_Request game_type.
         * @member {string} game_type
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.game_type = "";
    
        /**
         * CPublishedFile_Publish_Request url.
         * @member {string} url
         * @memberof CPublishedFile_Publish_Request
         * @instance
         */
        CPublishedFile_Publish_Request.prototype.url = "";
    
        /**
         * Creates a new CPublishedFile_Publish_Request instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_Publish_Request
         * @static
         * @param {ICPublishedFile_Publish_Request=} [properties] Properties to set
         * @returns {CPublishedFile_Publish_Request} CPublishedFile_Publish_Request instance
         */
        CPublishedFile_Publish_Request.create = function create(properties) {
            return new CPublishedFile_Publish_Request(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_Publish_Request message. Does not implicitly {@link CPublishedFile_Publish_Request.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_Publish_Request
         * @static
         * @param {ICPublishedFile_Publish_Request} message CPublishedFile_Publish_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Publish_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.consumer_appid != null && Object.hasOwnProperty.call(message, "consumer_appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.consumer_appid);
            if (message.cloudfilename != null && Object.hasOwnProperty.call(message, "cloudfilename"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.cloudfilename);
            if (message.preview_cloudfilename != null && Object.hasOwnProperty.call(message, "preview_cloudfilename"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.preview_cloudfilename);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.title);
            if (message.file_description != null && Object.hasOwnProperty.call(message, "file_description"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.file_description);
            if (message.file_type != null && Object.hasOwnProperty.call(message, "file_type"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.file_type);
            if (message.consumer_shortcut_name != null && Object.hasOwnProperty.call(message, "consumer_shortcut_name"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.consumer_shortcut_name);
            if (message.youtube_username != null && Object.hasOwnProperty.call(message, "youtube_username"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.youtube_username);
            if (message.youtube_videoid != null && Object.hasOwnProperty.call(message, "youtube_videoid"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.youtube_videoid);
            if (message.visibility != null && Object.hasOwnProperty.call(message, "visibility"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.visibility);
            if (message.redirect_uri != null && Object.hasOwnProperty.call(message, "redirect_uri"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.redirect_uri);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.tags[i]);
            if (message.collection_type != null && Object.hasOwnProperty.call(message, "collection_type"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.collection_type);
            if (message.game_type != null && Object.hasOwnProperty.call(message, "game_type"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.game_type);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.url);
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_Publish_Request message, length delimited. Does not implicitly {@link CPublishedFile_Publish_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_Publish_Request
         * @static
         * @param {ICPublishedFile_Publish_Request} message CPublishedFile_Publish_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Publish_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_Publish_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_Publish_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_Publish_Request} CPublishedFile_Publish_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Publish_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_Publish_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.consumer_appid = reader.uint32();
                    break;
                case 3:
                    message.cloudfilename = reader.string();
                    break;
                case 4:
                    message.preview_cloudfilename = reader.string();
                    break;
                case 5:
                    message.title = reader.string();
                    break;
                case 6:
                    message.file_description = reader.string();
                    break;
                case 7:
                    message.file_type = reader.uint32();
                    break;
                case 8:
                    message.consumer_shortcut_name = reader.string();
                    break;
                case 9:
                    message.youtube_username = reader.string();
                    break;
                case 10:
                    message.youtube_videoid = reader.string();
                    break;
                case 11:
                    message.visibility = reader.uint32();
                    break;
                case 12:
                    message.redirect_uri = reader.string();
                    break;
                case 13:
                    if (!(message.tags && message.tags.length))
                        message.tags = [];
                    message.tags.push(reader.string());
                    break;
                case 14:
                    message.collection_type = reader.string();
                    break;
                case 15:
                    message.game_type = reader.string();
                    break;
                case 16:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPublishedFile_Publish_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_Publish_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_Publish_Request} CPublishedFile_Publish_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Publish_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_Publish_Request message.
         * @function verify
         * @memberof CPublishedFile_Publish_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_Publish_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.consumer_appid != null && message.hasOwnProperty("consumer_appid"))
                if (!$util.isInteger(message.consumer_appid))
                    return "consumer_appid: integer expected";
            if (message.cloudfilename != null && message.hasOwnProperty("cloudfilename"))
                if (!$util.isString(message.cloudfilename))
                    return "cloudfilename: string expected";
            if (message.preview_cloudfilename != null && message.hasOwnProperty("preview_cloudfilename"))
                if (!$util.isString(message.preview_cloudfilename))
                    return "preview_cloudfilename: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.file_description != null && message.hasOwnProperty("file_description"))
                if (!$util.isString(message.file_description))
                    return "file_description: string expected";
            if (message.file_type != null && message.hasOwnProperty("file_type"))
                if (!$util.isInteger(message.file_type))
                    return "file_type: integer expected";
            if (message.consumer_shortcut_name != null && message.hasOwnProperty("consumer_shortcut_name"))
                if (!$util.isString(message.consumer_shortcut_name))
                    return "consumer_shortcut_name: string expected";
            if (message.youtube_username != null && message.hasOwnProperty("youtube_username"))
                if (!$util.isString(message.youtube_username))
                    return "youtube_username: string expected";
            if (message.youtube_videoid != null && message.hasOwnProperty("youtube_videoid"))
                if (!$util.isString(message.youtube_videoid))
                    return "youtube_videoid: string expected";
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                if (!$util.isInteger(message.visibility))
                    return "visibility: integer expected";
            if (message.redirect_uri != null && message.hasOwnProperty("redirect_uri"))
                if (!$util.isString(message.redirect_uri))
                    return "redirect_uri: string expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i)
                    if (!$util.isString(message.tags[i]))
                        return "tags: string[] expected";
            }
            if (message.collection_type != null && message.hasOwnProperty("collection_type"))
                if (!$util.isString(message.collection_type))
                    return "collection_type: string expected";
            if (message.game_type != null && message.hasOwnProperty("game_type"))
                if (!$util.isString(message.game_type))
                    return "game_type: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_Publish_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_Publish_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_Publish_Request} CPublishedFile_Publish_Request
         */
        CPublishedFile_Publish_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_Publish_Request)
                return object;
            var message = new $root.CPublishedFile_Publish_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.consumer_appid != null)
                message.consumer_appid = object.consumer_appid >>> 0;
            if (object.cloudfilename != null)
                message.cloudfilename = String(object.cloudfilename);
            if (object.preview_cloudfilename != null)
                message.preview_cloudfilename = String(object.preview_cloudfilename);
            if (object.title != null)
                message.title = String(object.title);
            if (object.file_description != null)
                message.file_description = String(object.file_description);
            if (object.file_type != null)
                message.file_type = object.file_type >>> 0;
            if (object.consumer_shortcut_name != null)
                message.consumer_shortcut_name = String(object.consumer_shortcut_name);
            if (object.youtube_username != null)
                message.youtube_username = String(object.youtube_username);
            if (object.youtube_videoid != null)
                message.youtube_videoid = String(object.youtube_videoid);
            if (object.visibility != null)
                message.visibility = object.visibility >>> 0;
            if (object.redirect_uri != null)
                message.redirect_uri = String(object.redirect_uri);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".CPublishedFile_Publish_Request.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i)
                    message.tags[i] = String(object.tags[i]);
            }
            if (object.collection_type != null)
                message.collection_type = String(object.collection_type);
            if (object.game_type != null)
                message.game_type = String(object.game_type);
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_Publish_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_Publish_Request
         * @static
         * @param {CPublishedFile_Publish_Request} message CPublishedFile_Publish_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_Publish_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tags = [];
            if (options.defaults) {
                object.appid = 0;
                object.consumer_appid = 0;
                object.cloudfilename = "";
                object.preview_cloudfilename = "";
                object.title = "";
                object.file_description = "";
                object.file_type = 0;
                object.consumer_shortcut_name = "";
                object.youtube_username = "";
                object.youtube_videoid = "";
                object.visibility = 0;
                object.redirect_uri = "";
                object.collection_type = "";
                object.game_type = "";
                object.url = "";
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.consumer_appid != null && message.hasOwnProperty("consumer_appid"))
                object.consumer_appid = message.consumer_appid;
            if (message.cloudfilename != null && message.hasOwnProperty("cloudfilename"))
                object.cloudfilename = message.cloudfilename;
            if (message.preview_cloudfilename != null && message.hasOwnProperty("preview_cloudfilename"))
                object.preview_cloudfilename = message.preview_cloudfilename;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.file_description != null && message.hasOwnProperty("file_description"))
                object.file_description = message.file_description;
            if (message.file_type != null && message.hasOwnProperty("file_type"))
                object.file_type = message.file_type;
            if (message.consumer_shortcut_name != null && message.hasOwnProperty("consumer_shortcut_name"))
                object.consumer_shortcut_name = message.consumer_shortcut_name;
            if (message.youtube_username != null && message.hasOwnProperty("youtube_username"))
                object.youtube_username = message.youtube_username;
            if (message.youtube_videoid != null && message.hasOwnProperty("youtube_videoid"))
                object.youtube_videoid = message.youtube_videoid;
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                object.visibility = message.visibility;
            if (message.redirect_uri != null && message.hasOwnProperty("redirect_uri"))
                object.redirect_uri = message.redirect_uri;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = message.tags[j];
            }
            if (message.collection_type != null && message.hasOwnProperty("collection_type"))
                object.collection_type = message.collection_type;
            if (message.game_type != null && message.hasOwnProperty("game_type"))
                object.game_type = message.game_type;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };
    
        /**
         * Converts this CPublishedFile_Publish_Request to JSON.
         * @function toJSON
         * @memberof CPublishedFile_Publish_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_Publish_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPublishedFile_Publish_Request;
    })();
    
    $root.CPublishedFile_Publish_Response = (function() {
    
        /**
         * Properties of a CPublishedFile_Publish_Response.
         * @exports ICPublishedFile_Publish_Response
         * @interface ICPublishedFile_Publish_Response
         * @property {number|Long|null} [publishedfileid] CPublishedFile_Publish_Response publishedfileid
         * @property {string|null} [redirect_uri] CPublishedFile_Publish_Response redirect_uri
         */
    
        /**
         * Constructs a new CPublishedFile_Publish_Response.
         * @exports CPublishedFile_Publish_Response
         * @classdesc Represents a CPublishedFile_Publish_Response.
         * @implements ICPublishedFile_Publish_Response
         * @constructor
         * @param {ICPublishedFile_Publish_Response=} [properties] Properties to set
         */
        function CPublishedFile_Publish_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_Publish_Response publishedfileid.
         * @member {number|Long} publishedfileid
         * @memberof CPublishedFile_Publish_Response
         * @instance
         */
        CPublishedFile_Publish_Response.prototype.publishedfileid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CPublishedFile_Publish_Response redirect_uri.
         * @member {string} redirect_uri
         * @memberof CPublishedFile_Publish_Response
         * @instance
         */
        CPublishedFile_Publish_Response.prototype.redirect_uri = "";
    
        /**
         * Creates a new CPublishedFile_Publish_Response instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_Publish_Response
         * @static
         * @param {ICPublishedFile_Publish_Response=} [properties] Properties to set
         * @returns {CPublishedFile_Publish_Response} CPublishedFile_Publish_Response instance
         */
        CPublishedFile_Publish_Response.create = function create(properties) {
            return new CPublishedFile_Publish_Response(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_Publish_Response message. Does not implicitly {@link CPublishedFile_Publish_Response.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_Publish_Response
         * @static
         * @param {ICPublishedFile_Publish_Response} message CPublishedFile_Publish_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Publish_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publishedfileid != null && Object.hasOwnProperty.call(message, "publishedfileid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.publishedfileid);
            if (message.redirect_uri != null && Object.hasOwnProperty.call(message, "redirect_uri"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.redirect_uri);
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_Publish_Response message, length delimited. Does not implicitly {@link CPublishedFile_Publish_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_Publish_Response
         * @static
         * @param {ICPublishedFile_Publish_Response} message CPublishedFile_Publish_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Publish_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_Publish_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_Publish_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_Publish_Response} CPublishedFile_Publish_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Publish_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_Publish_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.publishedfileid = reader.uint64();
                    break;
                case 2:
                    message.redirect_uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPublishedFile_Publish_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_Publish_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_Publish_Response} CPublishedFile_Publish_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Publish_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_Publish_Response message.
         * @function verify
         * @memberof CPublishedFile_Publish_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_Publish_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (!$util.isInteger(message.publishedfileid) && !(message.publishedfileid && $util.isInteger(message.publishedfileid.low) && $util.isInteger(message.publishedfileid.high)))
                    return "publishedfileid: integer|Long expected";
            if (message.redirect_uri != null && message.hasOwnProperty("redirect_uri"))
                if (!$util.isString(message.redirect_uri))
                    return "redirect_uri: string expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_Publish_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_Publish_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_Publish_Response} CPublishedFile_Publish_Response
         */
        CPublishedFile_Publish_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_Publish_Response)
                return object;
            var message = new $root.CPublishedFile_Publish_Response();
            if (object.publishedfileid != null)
                if ($util.Long)
                    (message.publishedfileid = $util.Long.fromValue(object.publishedfileid)).unsigned = true;
                else if (typeof object.publishedfileid === "string")
                    message.publishedfileid = parseInt(object.publishedfileid, 10);
                else if (typeof object.publishedfileid === "number")
                    message.publishedfileid = object.publishedfileid;
                else if (typeof object.publishedfileid === "object")
                    message.publishedfileid = new $util.LongBits(object.publishedfileid.low >>> 0, object.publishedfileid.high >>> 0).toNumber(true);
            if (object.redirect_uri != null)
                message.redirect_uri = String(object.redirect_uri);
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_Publish_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_Publish_Response
         * @static
         * @param {CPublishedFile_Publish_Response} message CPublishedFile_Publish_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_Publish_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.publishedfileid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.publishedfileid = options.longs === String ? "0" : 0;
                object.redirect_uri = "";
            }
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (typeof message.publishedfileid === "number")
                    object.publishedfileid = options.longs === String ? String(message.publishedfileid) : message.publishedfileid;
                else
                    object.publishedfileid = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileid) : options.longs === Number ? new $util.LongBits(message.publishedfileid.low >>> 0, message.publishedfileid.high >>> 0).toNumber(true) : message.publishedfileid;
            if (message.redirect_uri != null && message.hasOwnProperty("redirect_uri"))
                object.redirect_uri = message.redirect_uri;
            return object;
        };
    
        /**
         * Converts this CPublishedFile_Publish_Response to JSON.
         * @function toJSON
         * @memberof CPublishedFile_Publish_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_Publish_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPublishedFile_Publish_Response;
    })();
    
    $root.CPublishedFile_GetDetails_Request = (function() {
    
        /**
         * Properties of a CPublishedFile_GetDetails_Request.
         * @exports ICPublishedFile_GetDetails_Request
         * @interface ICPublishedFile_GetDetails_Request
         * @property {Array.<number|Long>|null} [publishedfileids] CPublishedFile_GetDetails_Request publishedfileids
         * @property {boolean|null} [includetags] CPublishedFile_GetDetails_Request includetags
         * @property {boolean|null} [includeadditionalpreviews] CPublishedFile_GetDetails_Request includeadditionalpreviews
         * @property {boolean|null} [includechildren] CPublishedFile_GetDetails_Request includechildren
         * @property {boolean|null} [includekvtags] CPublishedFile_GetDetails_Request includekvtags
         * @property {boolean|null} [includevotes] CPublishedFile_GetDetails_Request includevotes
         * @property {boolean|null} [short_description] CPublishedFile_GetDetails_Request short_description
         */
    
        /**
         * Constructs a new CPublishedFile_GetDetails_Request.
         * @exports CPublishedFile_GetDetails_Request
         * @classdesc Represents a CPublishedFile_GetDetails_Request.
         * @implements ICPublishedFile_GetDetails_Request
         * @constructor
         * @param {ICPublishedFile_GetDetails_Request=} [properties] Properties to set
         */
        function CPublishedFile_GetDetails_Request(properties) {
            this.publishedfileids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_GetDetails_Request publishedfileids.
         * @member {Array.<number|Long>} publishedfileids
         * @memberof CPublishedFile_GetDetails_Request
         * @instance
         */
        CPublishedFile_GetDetails_Request.prototype.publishedfileids = $util.emptyArray;
    
        /**
         * CPublishedFile_GetDetails_Request includetags.
         * @member {boolean} includetags
         * @memberof CPublishedFile_GetDetails_Request
         * @instance
         */
        CPublishedFile_GetDetails_Request.prototype.includetags = false;
    
        /**
         * CPublishedFile_GetDetails_Request includeadditionalpreviews.
         * @member {boolean} includeadditionalpreviews
         * @memberof CPublishedFile_GetDetails_Request
         * @instance
         */
        CPublishedFile_GetDetails_Request.prototype.includeadditionalpreviews = false;
    
        /**
         * CPublishedFile_GetDetails_Request includechildren.
         * @member {boolean} includechildren
         * @memberof CPublishedFile_GetDetails_Request
         * @instance
         */
        CPublishedFile_GetDetails_Request.prototype.includechildren = false;
    
        /**
         * CPublishedFile_GetDetails_Request includekvtags.
         * @member {boolean} includekvtags
         * @memberof CPublishedFile_GetDetails_Request
         * @instance
         */
        CPublishedFile_GetDetails_Request.prototype.includekvtags = false;
    
        /**
         * CPublishedFile_GetDetails_Request includevotes.
         * @member {boolean} includevotes
         * @memberof CPublishedFile_GetDetails_Request
         * @instance
         */
        CPublishedFile_GetDetails_Request.prototype.includevotes = false;
    
        /**
         * CPublishedFile_GetDetails_Request short_description.
         * @member {boolean} short_description
         * @memberof CPublishedFile_GetDetails_Request
         * @instance
         */
        CPublishedFile_GetDetails_Request.prototype.short_description = false;
    
        /**
         * Creates a new CPublishedFile_GetDetails_Request instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_GetDetails_Request
         * @static
         * @param {ICPublishedFile_GetDetails_Request=} [properties] Properties to set
         * @returns {CPublishedFile_GetDetails_Request} CPublishedFile_GetDetails_Request instance
         */
        CPublishedFile_GetDetails_Request.create = function create(properties) {
            return new CPublishedFile_GetDetails_Request(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_GetDetails_Request message. Does not implicitly {@link CPublishedFile_GetDetails_Request.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_GetDetails_Request
         * @static
         * @param {ICPublishedFile_GetDetails_Request} message CPublishedFile_GetDetails_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_GetDetails_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publishedfileids != null && message.publishedfileids.length)
                for (var i = 0; i < message.publishedfileids.length; ++i)
                    writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.publishedfileids[i]);
            if (message.includetags != null && Object.hasOwnProperty.call(message, "includetags"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.includetags);
            if (message.includeadditionalpreviews != null && Object.hasOwnProperty.call(message, "includeadditionalpreviews"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.includeadditionalpreviews);
            if (message.includechildren != null && Object.hasOwnProperty.call(message, "includechildren"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.includechildren);
            if (message.includekvtags != null && Object.hasOwnProperty.call(message, "includekvtags"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.includekvtags);
            if (message.includevotes != null && Object.hasOwnProperty.call(message, "includevotes"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.includevotes);
            if (message.short_description != null && Object.hasOwnProperty.call(message, "short_description"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.short_description);
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_GetDetails_Request message, length delimited. Does not implicitly {@link CPublishedFile_GetDetails_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_GetDetails_Request
         * @static
         * @param {ICPublishedFile_GetDetails_Request} message CPublishedFile_GetDetails_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_GetDetails_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_GetDetails_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_GetDetails_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_GetDetails_Request} CPublishedFile_GetDetails_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_GetDetails_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_GetDetails_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.publishedfileids && message.publishedfileids.length))
                        message.publishedfileids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.publishedfileids.push(reader.fixed64());
                    } else
                        message.publishedfileids.push(reader.fixed64());
                    break;
                case 2:
                    message.includetags = reader.bool();
                    break;
                case 3:
                    message.includeadditionalpreviews = reader.bool();
                    break;
                case 4:
                    message.includechildren = reader.bool();
                    break;
                case 5:
                    message.includekvtags = reader.bool();
                    break;
                case 6:
                    message.includevotes = reader.bool();
                    break;
                case 8:
                    message.short_description = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPublishedFile_GetDetails_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_GetDetails_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_GetDetails_Request} CPublishedFile_GetDetails_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_GetDetails_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_GetDetails_Request message.
         * @function verify
         * @memberof CPublishedFile_GetDetails_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_GetDetails_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publishedfileids != null && message.hasOwnProperty("publishedfileids")) {
                if (!Array.isArray(message.publishedfileids))
                    return "publishedfileids: array expected";
                for (var i = 0; i < message.publishedfileids.length; ++i)
                    if (!$util.isInteger(message.publishedfileids[i]) && !(message.publishedfileids[i] && $util.isInteger(message.publishedfileids[i].low) && $util.isInteger(message.publishedfileids[i].high)))
                        return "publishedfileids: integer|Long[] expected";
            }
            if (message.includetags != null && message.hasOwnProperty("includetags"))
                if (typeof message.includetags !== "boolean")
                    return "includetags: boolean expected";
            if (message.includeadditionalpreviews != null && message.hasOwnProperty("includeadditionalpreviews"))
                if (typeof message.includeadditionalpreviews !== "boolean")
                    return "includeadditionalpreviews: boolean expected";
            if (message.includechildren != null && message.hasOwnProperty("includechildren"))
                if (typeof message.includechildren !== "boolean")
                    return "includechildren: boolean expected";
            if (message.includekvtags != null && message.hasOwnProperty("includekvtags"))
                if (typeof message.includekvtags !== "boolean")
                    return "includekvtags: boolean expected";
            if (message.includevotes != null && message.hasOwnProperty("includevotes"))
                if (typeof message.includevotes !== "boolean")
                    return "includevotes: boolean expected";
            if (message.short_description != null && message.hasOwnProperty("short_description"))
                if (typeof message.short_description !== "boolean")
                    return "short_description: boolean expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_GetDetails_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_GetDetails_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_GetDetails_Request} CPublishedFile_GetDetails_Request
         */
        CPublishedFile_GetDetails_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_GetDetails_Request)
                return object;
            var message = new $root.CPublishedFile_GetDetails_Request();
            if (object.publishedfileids) {
                if (!Array.isArray(object.publishedfileids))
                    throw TypeError(".CPublishedFile_GetDetails_Request.publishedfileids: array expected");
                message.publishedfileids = [];
                for (var i = 0; i < object.publishedfileids.length; ++i)
                    if ($util.Long)
                        (message.publishedfileids[i] = $util.Long.fromValue(object.publishedfileids[i])).unsigned = false;
                    else if (typeof object.publishedfileids[i] === "string")
                        message.publishedfileids[i] = parseInt(object.publishedfileids[i], 10);
                    else if (typeof object.publishedfileids[i] === "number")
                        message.publishedfileids[i] = object.publishedfileids[i];
                    else if (typeof object.publishedfileids[i] === "object")
                        message.publishedfileids[i] = new $util.LongBits(object.publishedfileids[i].low >>> 0, object.publishedfileids[i].high >>> 0).toNumber();
            }
            if (object.includetags != null)
                message.includetags = Boolean(object.includetags);
            if (object.includeadditionalpreviews != null)
                message.includeadditionalpreviews = Boolean(object.includeadditionalpreviews);
            if (object.includechildren != null)
                message.includechildren = Boolean(object.includechildren);
            if (object.includekvtags != null)
                message.includekvtags = Boolean(object.includekvtags);
            if (object.includevotes != null)
                message.includevotes = Boolean(object.includevotes);
            if (object.short_description != null)
                message.short_description = Boolean(object.short_description);
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_GetDetails_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_GetDetails_Request
         * @static
         * @param {CPublishedFile_GetDetails_Request} message CPublishedFile_GetDetails_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_GetDetails_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.publishedfileids = [];
            if (options.defaults) {
                object.includetags = false;
                object.includeadditionalpreviews = false;
                object.includechildren = false;
                object.includekvtags = false;
                object.includevotes = false;
                object.short_description = false;
            }
            if (message.publishedfileids && message.publishedfileids.length) {
                object.publishedfileids = [];
                for (var j = 0; j < message.publishedfileids.length; ++j)
                    if (typeof message.publishedfileids[j] === "number")
                        object.publishedfileids[j] = options.longs === String ? String(message.publishedfileids[j]) : message.publishedfileids[j];
                    else
                        object.publishedfileids[j] = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileids[j]) : options.longs === Number ? new $util.LongBits(message.publishedfileids[j].low >>> 0, message.publishedfileids[j].high >>> 0).toNumber() : message.publishedfileids[j];
            }
            if (message.includetags != null && message.hasOwnProperty("includetags"))
                object.includetags = message.includetags;
            if (message.includeadditionalpreviews != null && message.hasOwnProperty("includeadditionalpreviews"))
                object.includeadditionalpreviews = message.includeadditionalpreviews;
            if (message.includechildren != null && message.hasOwnProperty("includechildren"))
                object.includechildren = message.includechildren;
            if (message.includekvtags != null && message.hasOwnProperty("includekvtags"))
                object.includekvtags = message.includekvtags;
            if (message.includevotes != null && message.hasOwnProperty("includevotes"))
                object.includevotes = message.includevotes;
            if (message.short_description != null && message.hasOwnProperty("short_description"))
                object.short_description = message.short_description;
            return object;
        };
    
        /**
         * Converts this CPublishedFile_GetDetails_Request to JSON.
         * @function toJSON
         * @memberof CPublishedFile_GetDetails_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_GetDetails_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPublishedFile_GetDetails_Request;
    })();
    
    $root.PublishedFileDetails = (function() {
    
        /**
         * Properties of a PublishedFileDetails.
         * @exports IPublishedFileDetails
         * @interface IPublishedFileDetails
         * @property {number|null} [result] PublishedFileDetails result
         * @property {number|Long|null} [publishedfileid] PublishedFileDetails publishedfileid
         * @property {number|Long|null} [creator] PublishedFileDetails creator
         * @property {number|null} [creator_appid] PublishedFileDetails creator_appid
         * @property {number|null} [consumer_appid] PublishedFileDetails consumer_appid
         * @property {number|null} [consumer_shortcutid] PublishedFileDetails consumer_shortcutid
         * @property {string|null} [filename] PublishedFileDetails filename
         * @property {number|Long|null} [file_size] PublishedFileDetails file_size
         * @property {number|Long|null} [preview_file_size] PublishedFileDetails preview_file_size
         * @property {string|null} [file_url] PublishedFileDetails file_url
         * @property {string|null} [preview_url] PublishedFileDetails preview_url
         * @property {string|null} [youtubevideoid] PublishedFileDetails youtubevideoid
         * @property {string|null} [url] PublishedFileDetails url
         * @property {number|Long|null} [hcontent_file] PublishedFileDetails hcontent_file
         * @property {number|Long|null} [hcontent_preview] PublishedFileDetails hcontent_preview
         * @property {string|null} [title] PublishedFileDetails title
         * @property {string|null} [file_description] PublishedFileDetails file_description
         * @property {string|null} [short_description] PublishedFileDetails short_description
         * @property {number|null} [time_created] PublishedFileDetails time_created
         * @property {number|null} [time_updated] PublishedFileDetails time_updated
         * @property {number|null} [visibility] PublishedFileDetails visibility
         * @property {number|null} [flags] PublishedFileDetails flags
         * @property {boolean|null} [workshop_file] PublishedFileDetails workshop_file
         * @property {boolean|null} [workshop_accepted] PublishedFileDetails workshop_accepted
         * @property {boolean|null} [show_subscribe_all] PublishedFileDetails show_subscribe_all
         * @property {number|null} [num_comments_developer] PublishedFileDetails num_comments_developer
         * @property {number|null} [num_comments_public] PublishedFileDetails num_comments_public
         * @property {boolean|null} [banned] PublishedFileDetails banned
         * @property {string|null} [ban_reason] PublishedFileDetails ban_reason
         * @property {number|Long|null} [banner] PublishedFileDetails banner
         * @property {boolean|null} [can_be_deleted] PublishedFileDetails can_be_deleted
         * @property {boolean|null} [incompatible] PublishedFileDetails incompatible
         * @property {string|null} [app_name] PublishedFileDetails app_name
         * @property {number|null} [file_type] PublishedFileDetails file_type
         * @property {boolean|null} [can_subscribe] PublishedFileDetails can_subscribe
         * @property {number|null} [subscriptions] PublishedFileDetails subscriptions
         * @property {number|null} [favorited] PublishedFileDetails favorited
         * @property {number|null} [followers] PublishedFileDetails followers
         * @property {number|null} [lifetime_subscriptions] PublishedFileDetails lifetime_subscriptions
         * @property {number|null} [lifetime_favorited] PublishedFileDetails lifetime_favorited
         * @property {number|null} [lifetime_followers] PublishedFileDetails lifetime_followers
         * @property {number|null} [views] PublishedFileDetails views
         * @property {number|null} [image_width] PublishedFileDetails image_width
         * @property {number|null} [image_height] PublishedFileDetails image_height
         * @property {string|null} [image_url] PublishedFileDetails image_url
         * @property {boolean|null} [spoiler_tag] PublishedFileDetails spoiler_tag
         * @property {number|null} [shortcutid] PublishedFileDetails shortcutid
         * @property {string|null} [shortcutname] PublishedFileDetails shortcutname
         * @property {number|null} [num_children] PublishedFileDetails num_children
         * @property {number|null} [num_reports] PublishedFileDetails num_reports
         * @property {Array.<PublishedFileDetails.IPreview>|null} [previews] PublishedFileDetails previews
         * @property {Array.<PublishedFileDetails.ITag>|null} [tags] PublishedFileDetails tags
         * @property {Array.<PublishedFileDetails.IChild>|null} [children] PublishedFileDetails children
         * @property {Array.<PublishedFileDetails.IKVTag>|null} [kvtags] PublishedFileDetails kvtags
         * @property {PublishedFileDetails.IVoteData|null} [vote_data] PublishedFileDetails vote_data
         * @property {number|null} [time_subscribed] PublishedFileDetails time_subscribed
         */
    
        /**
         * Constructs a new PublishedFileDetails.
         * @exports PublishedFileDetails
         * @classdesc Represents a PublishedFileDetails.
         * @implements IPublishedFileDetails
         * @constructor
         * @param {IPublishedFileDetails=} [properties] Properties to set
         */
        function PublishedFileDetails(properties) {
            this.previews = [];
            this.tags = [];
            this.children = [];
            this.kvtags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PublishedFileDetails result.
         * @member {number} result
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.result = 0;
    
        /**
         * PublishedFileDetails publishedfileid.
         * @member {number|Long} publishedfileid
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.publishedfileid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * PublishedFileDetails creator.
         * @member {number|Long} creator
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.creator = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * PublishedFileDetails creator_appid.
         * @member {number} creator_appid
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.creator_appid = 0;
    
        /**
         * PublishedFileDetails consumer_appid.
         * @member {number} consumer_appid
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.consumer_appid = 0;
    
        /**
         * PublishedFileDetails consumer_shortcutid.
         * @member {number} consumer_shortcutid
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.consumer_shortcutid = 0;
    
        /**
         * PublishedFileDetails filename.
         * @member {string} filename
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.filename = "";
    
        /**
         * PublishedFileDetails file_size.
         * @member {number|Long} file_size
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.file_size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * PublishedFileDetails preview_file_size.
         * @member {number|Long} preview_file_size
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.preview_file_size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * PublishedFileDetails file_url.
         * @member {string} file_url
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.file_url = "";
    
        /**
         * PublishedFileDetails preview_url.
         * @member {string} preview_url
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.preview_url = "";
    
        /**
         * PublishedFileDetails youtubevideoid.
         * @member {string} youtubevideoid
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.youtubevideoid = "";
    
        /**
         * PublishedFileDetails url.
         * @member {string} url
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.url = "";
    
        /**
         * PublishedFileDetails hcontent_file.
         * @member {number|Long} hcontent_file
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.hcontent_file = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * PublishedFileDetails hcontent_preview.
         * @member {number|Long} hcontent_preview
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.hcontent_preview = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * PublishedFileDetails title.
         * @member {string} title
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.title = "";
    
        /**
         * PublishedFileDetails file_description.
         * @member {string} file_description
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.file_description = "";
    
        /**
         * PublishedFileDetails short_description.
         * @member {string} short_description
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.short_description = "";
    
        /**
         * PublishedFileDetails time_created.
         * @member {number} time_created
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.time_created = 0;
    
        /**
         * PublishedFileDetails time_updated.
         * @member {number} time_updated
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.time_updated = 0;
    
        /**
         * PublishedFileDetails visibility.
         * @member {number} visibility
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.visibility = 0;
    
        /**
         * PublishedFileDetails flags.
         * @member {number} flags
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.flags = 0;
    
        /**
         * PublishedFileDetails workshop_file.
         * @member {boolean} workshop_file
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.workshop_file = false;
    
        /**
         * PublishedFileDetails workshop_accepted.
         * @member {boolean} workshop_accepted
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.workshop_accepted = false;
    
        /**
         * PublishedFileDetails show_subscribe_all.
         * @member {boolean} show_subscribe_all
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.show_subscribe_all = false;
    
        /**
         * PublishedFileDetails num_comments_developer.
         * @member {number} num_comments_developer
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.num_comments_developer = 0;
    
        /**
         * PublishedFileDetails num_comments_public.
         * @member {number} num_comments_public
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.num_comments_public = 0;
    
        /**
         * PublishedFileDetails banned.
         * @member {boolean} banned
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.banned = false;
    
        /**
         * PublishedFileDetails ban_reason.
         * @member {string} ban_reason
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.ban_reason = "";
    
        /**
         * PublishedFileDetails banner.
         * @member {number|Long} banner
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.banner = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * PublishedFileDetails can_be_deleted.
         * @member {boolean} can_be_deleted
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.can_be_deleted = false;
    
        /**
         * PublishedFileDetails incompatible.
         * @member {boolean} incompatible
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.incompatible = false;
    
        /**
         * PublishedFileDetails app_name.
         * @member {string} app_name
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.app_name = "";
    
        /**
         * PublishedFileDetails file_type.
         * @member {number} file_type
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.file_type = 0;
    
        /**
         * PublishedFileDetails can_subscribe.
         * @member {boolean} can_subscribe
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.can_subscribe = false;
    
        /**
         * PublishedFileDetails subscriptions.
         * @member {number} subscriptions
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.subscriptions = 0;
    
        /**
         * PublishedFileDetails favorited.
         * @member {number} favorited
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.favorited = 0;
    
        /**
         * PublishedFileDetails followers.
         * @member {number} followers
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.followers = 0;
    
        /**
         * PublishedFileDetails lifetime_subscriptions.
         * @member {number} lifetime_subscriptions
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.lifetime_subscriptions = 0;
    
        /**
         * PublishedFileDetails lifetime_favorited.
         * @member {number} lifetime_favorited
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.lifetime_favorited = 0;
    
        /**
         * PublishedFileDetails lifetime_followers.
         * @member {number} lifetime_followers
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.lifetime_followers = 0;
    
        /**
         * PublishedFileDetails views.
         * @member {number} views
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.views = 0;
    
        /**
         * PublishedFileDetails image_width.
         * @member {number} image_width
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.image_width = 0;
    
        /**
         * PublishedFileDetails image_height.
         * @member {number} image_height
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.image_height = 0;
    
        /**
         * PublishedFileDetails image_url.
         * @member {string} image_url
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.image_url = "";
    
        /**
         * PublishedFileDetails spoiler_tag.
         * @member {boolean} spoiler_tag
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.spoiler_tag = false;
    
        /**
         * PublishedFileDetails shortcutid.
         * @member {number} shortcutid
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.shortcutid = 0;
    
        /**
         * PublishedFileDetails shortcutname.
         * @member {string} shortcutname
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.shortcutname = "";
    
        /**
         * PublishedFileDetails num_children.
         * @member {number} num_children
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.num_children = 0;
    
        /**
         * PublishedFileDetails num_reports.
         * @member {number} num_reports
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.num_reports = 0;
    
        /**
         * PublishedFileDetails previews.
         * @member {Array.<PublishedFileDetails.IPreview>} previews
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.previews = $util.emptyArray;
    
        /**
         * PublishedFileDetails tags.
         * @member {Array.<PublishedFileDetails.ITag>} tags
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.tags = $util.emptyArray;
    
        /**
         * PublishedFileDetails children.
         * @member {Array.<PublishedFileDetails.IChild>} children
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.children = $util.emptyArray;
    
        /**
         * PublishedFileDetails kvtags.
         * @member {Array.<PublishedFileDetails.IKVTag>} kvtags
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.kvtags = $util.emptyArray;
    
        /**
         * PublishedFileDetails vote_data.
         * @member {PublishedFileDetails.IVoteData|null|undefined} vote_data
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.vote_data = null;
    
        /**
         * PublishedFileDetails time_subscribed.
         * @member {number} time_subscribed
         * @memberof PublishedFileDetails
         * @instance
         */
        PublishedFileDetails.prototype.time_subscribed = 0;
    
        /**
         * Creates a new PublishedFileDetails instance using the specified properties.
         * @function create
         * @memberof PublishedFileDetails
         * @static
         * @param {IPublishedFileDetails=} [properties] Properties to set
         * @returns {PublishedFileDetails} PublishedFileDetails instance
         */
        PublishedFileDetails.create = function create(properties) {
            return new PublishedFileDetails(properties);
        };
    
        /**
         * Encodes the specified PublishedFileDetails message. Does not implicitly {@link PublishedFileDetails.verify|verify} messages.
         * @function encode
         * @memberof PublishedFileDetails
         * @static
         * @param {IPublishedFileDetails} message PublishedFileDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublishedFileDetails.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.result);
            if (message.publishedfileid != null && Object.hasOwnProperty.call(message, "publishedfileid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.publishedfileid);
            if (message.creator != null && Object.hasOwnProperty.call(message, "creator"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.creator);
            if (message.creator_appid != null && Object.hasOwnProperty.call(message, "creator_appid"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.creator_appid);
            if (message.consumer_appid != null && Object.hasOwnProperty.call(message, "consumer_appid"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.consumer_appid);
            if (message.consumer_shortcutid != null && Object.hasOwnProperty.call(message, "consumer_shortcutid"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.consumer_shortcutid);
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.filename);
            if (message.file_size != null && Object.hasOwnProperty.call(message, "file_size"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.file_size);
            if (message.preview_file_size != null && Object.hasOwnProperty.call(message, "preview_file_size"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.preview_file_size);
            if (message.file_url != null && Object.hasOwnProperty.call(message, "file_url"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.file_url);
            if (message.preview_url != null && Object.hasOwnProperty.call(message, "preview_url"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.preview_url);
            if (message.youtubevideoid != null && Object.hasOwnProperty.call(message, "youtubevideoid"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.youtubevideoid);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.url);
            if (message.hcontent_file != null && Object.hasOwnProperty.call(message, "hcontent_file"))
                writer.uint32(/* id 14, wireType 1 =*/113).fixed64(message.hcontent_file);
            if (message.hcontent_preview != null && Object.hasOwnProperty.call(message, "hcontent_preview"))
                writer.uint32(/* id 15, wireType 1 =*/121).fixed64(message.hcontent_preview);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.title);
            if (message.file_description != null && Object.hasOwnProperty.call(message, "file_description"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.file_description);
            if (message.short_description != null && Object.hasOwnProperty.call(message, "short_description"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.short_description);
            if (message.time_created != null && Object.hasOwnProperty.call(message, "time_created"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.time_created);
            if (message.time_updated != null && Object.hasOwnProperty.call(message, "time_updated"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.time_updated);
            if (message.visibility != null && Object.hasOwnProperty.call(message, "visibility"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.visibility);
            if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.flags);
            if (message.workshop_file != null && Object.hasOwnProperty.call(message, "workshop_file"))
                writer.uint32(/* id 23, wireType 0 =*/184).bool(message.workshop_file);
            if (message.workshop_accepted != null && Object.hasOwnProperty.call(message, "workshop_accepted"))
                writer.uint32(/* id 24, wireType 0 =*/192).bool(message.workshop_accepted);
            if (message.show_subscribe_all != null && Object.hasOwnProperty.call(message, "show_subscribe_all"))
                writer.uint32(/* id 25, wireType 0 =*/200).bool(message.show_subscribe_all);
            if (message.num_comments_developer != null && Object.hasOwnProperty.call(message, "num_comments_developer"))
                writer.uint32(/* id 26, wireType 0 =*/208).int32(message.num_comments_developer);
            if (message.num_comments_public != null && Object.hasOwnProperty.call(message, "num_comments_public"))
                writer.uint32(/* id 27, wireType 0 =*/216).int32(message.num_comments_public);
            if (message.banned != null && Object.hasOwnProperty.call(message, "banned"))
                writer.uint32(/* id 28, wireType 0 =*/224).bool(message.banned);
            if (message.ban_reason != null && Object.hasOwnProperty.call(message, "ban_reason"))
                writer.uint32(/* id 29, wireType 2 =*/234).string(message.ban_reason);
            if (message.banner != null && Object.hasOwnProperty.call(message, "banner"))
                writer.uint32(/* id 30, wireType 1 =*/241).fixed64(message.banner);
            if (message.can_be_deleted != null && Object.hasOwnProperty.call(message, "can_be_deleted"))
                writer.uint32(/* id 31, wireType 0 =*/248).bool(message.can_be_deleted);
            if (message.incompatible != null && Object.hasOwnProperty.call(message, "incompatible"))
                writer.uint32(/* id 32, wireType 0 =*/256).bool(message.incompatible);
            if (message.app_name != null && Object.hasOwnProperty.call(message, "app_name"))
                writer.uint32(/* id 33, wireType 2 =*/266).string(message.app_name);
            if (message.file_type != null && Object.hasOwnProperty.call(message, "file_type"))
                writer.uint32(/* id 34, wireType 0 =*/272).uint32(message.file_type);
            if (message.can_subscribe != null && Object.hasOwnProperty.call(message, "can_subscribe"))
                writer.uint32(/* id 35, wireType 0 =*/280).bool(message.can_subscribe);
            if (message.subscriptions != null && Object.hasOwnProperty.call(message, "subscriptions"))
                writer.uint32(/* id 36, wireType 0 =*/288).uint32(message.subscriptions);
            if (message.favorited != null && Object.hasOwnProperty.call(message, "favorited"))
                writer.uint32(/* id 37, wireType 0 =*/296).uint32(message.favorited);
            if (message.followers != null && Object.hasOwnProperty.call(message, "followers"))
                writer.uint32(/* id 38, wireType 0 =*/304).uint32(message.followers);
            if (message.lifetime_subscriptions != null && Object.hasOwnProperty.call(message, "lifetime_subscriptions"))
                writer.uint32(/* id 39, wireType 0 =*/312).uint32(message.lifetime_subscriptions);
            if (message.lifetime_favorited != null && Object.hasOwnProperty.call(message, "lifetime_favorited"))
                writer.uint32(/* id 40, wireType 0 =*/320).uint32(message.lifetime_favorited);
            if (message.lifetime_followers != null && Object.hasOwnProperty.call(message, "lifetime_followers"))
                writer.uint32(/* id 41, wireType 0 =*/328).uint32(message.lifetime_followers);
            if (message.views != null && Object.hasOwnProperty.call(message, "views"))
                writer.uint32(/* id 42, wireType 0 =*/336).uint32(message.views);
            if (message.image_width != null && Object.hasOwnProperty.call(message, "image_width"))
                writer.uint32(/* id 43, wireType 0 =*/344).uint32(message.image_width);
            if (message.image_height != null && Object.hasOwnProperty.call(message, "image_height"))
                writer.uint32(/* id 44, wireType 0 =*/352).uint32(message.image_height);
            if (message.image_url != null && Object.hasOwnProperty.call(message, "image_url"))
                writer.uint32(/* id 45, wireType 2 =*/362).string(message.image_url);
            if (message.spoiler_tag != null && Object.hasOwnProperty.call(message, "spoiler_tag"))
                writer.uint32(/* id 46, wireType 0 =*/368).bool(message.spoiler_tag);
            if (message.shortcutid != null && Object.hasOwnProperty.call(message, "shortcutid"))
                writer.uint32(/* id 47, wireType 0 =*/376).uint32(message.shortcutid);
            if (message.shortcutname != null && Object.hasOwnProperty.call(message, "shortcutname"))
                writer.uint32(/* id 48, wireType 2 =*/386).string(message.shortcutname);
            if (message.num_children != null && Object.hasOwnProperty.call(message, "num_children"))
                writer.uint32(/* id 49, wireType 0 =*/392).uint32(message.num_children);
            if (message.num_reports != null && Object.hasOwnProperty.call(message, "num_reports"))
                writer.uint32(/* id 50, wireType 0 =*/400).uint32(message.num_reports);
            if (message.previews != null && message.previews.length)
                for (var i = 0; i < message.previews.length; ++i)
                    $root.PublishedFileDetails.Preview.encode(message.previews[i], writer.uint32(/* id 51, wireType 2 =*/410).fork()).ldelim();
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    $root.PublishedFileDetails.Tag.encode(message.tags[i], writer.uint32(/* id 52, wireType 2 =*/418).fork()).ldelim();
            if (message.children != null && message.children.length)
                for (var i = 0; i < message.children.length; ++i)
                    $root.PublishedFileDetails.Child.encode(message.children[i], writer.uint32(/* id 53, wireType 2 =*/426).fork()).ldelim();
            if (message.kvtags != null && message.kvtags.length)
                for (var i = 0; i < message.kvtags.length; ++i)
                    $root.PublishedFileDetails.KVTag.encode(message.kvtags[i], writer.uint32(/* id 54, wireType 2 =*/434).fork()).ldelim();
            if (message.vote_data != null && Object.hasOwnProperty.call(message, "vote_data"))
                $root.PublishedFileDetails.VoteData.encode(message.vote_data, writer.uint32(/* id 55, wireType 2 =*/442).fork()).ldelim();
            if (message.time_subscribed != null && Object.hasOwnProperty.call(message, "time_subscribed"))
                writer.uint32(/* id 56, wireType 0 =*/448).uint32(message.time_subscribed);
            return writer;
        };
    
        /**
         * Encodes the specified PublishedFileDetails message, length delimited. Does not implicitly {@link PublishedFileDetails.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PublishedFileDetails
         * @static
         * @param {IPublishedFileDetails} message PublishedFileDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublishedFileDetails.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PublishedFileDetails message from the specified reader or buffer.
         * @function decode
         * @memberof PublishedFileDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PublishedFileDetails} PublishedFileDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublishedFileDetails.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublishedFileDetails();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.uint32();
                    break;
                case 2:
                    message.publishedfileid = reader.uint64();
                    break;
                case 3:
                    message.creator = reader.fixed64();
                    break;
                case 4:
                    message.creator_appid = reader.uint32();
                    break;
                case 5:
                    message.consumer_appid = reader.uint32();
                    break;
                case 6:
                    message.consumer_shortcutid = reader.uint32();
                    break;
                case 7:
                    message.filename = reader.string();
                    break;
                case 8:
                    message.file_size = reader.uint64();
                    break;
                case 9:
                    message.preview_file_size = reader.uint64();
                    break;
                case 10:
                    message.file_url = reader.string();
                    break;
                case 11:
                    message.preview_url = reader.string();
                    break;
                case 12:
                    message.youtubevideoid = reader.string();
                    break;
                case 13:
                    message.url = reader.string();
                    break;
                case 14:
                    message.hcontent_file = reader.fixed64();
                    break;
                case 15:
                    message.hcontent_preview = reader.fixed64();
                    break;
                case 16:
                    message.title = reader.string();
                    break;
                case 17:
                    message.file_description = reader.string();
                    break;
                case 18:
                    message.short_description = reader.string();
                    break;
                case 19:
                    message.time_created = reader.uint32();
                    break;
                case 20:
                    message.time_updated = reader.uint32();
                    break;
                case 21:
                    message.visibility = reader.uint32();
                    break;
                case 22:
                    message.flags = reader.uint32();
                    break;
                case 23:
                    message.workshop_file = reader.bool();
                    break;
                case 24:
                    message.workshop_accepted = reader.bool();
                    break;
                case 25:
                    message.show_subscribe_all = reader.bool();
                    break;
                case 26:
                    message.num_comments_developer = reader.int32();
                    break;
                case 27:
                    message.num_comments_public = reader.int32();
                    break;
                case 28:
                    message.banned = reader.bool();
                    break;
                case 29:
                    message.ban_reason = reader.string();
                    break;
                case 30:
                    message.banner = reader.fixed64();
                    break;
                case 31:
                    message.can_be_deleted = reader.bool();
                    break;
                case 32:
                    message.incompatible = reader.bool();
                    break;
                case 33:
                    message.app_name = reader.string();
                    break;
                case 34:
                    message.file_type = reader.uint32();
                    break;
                case 35:
                    message.can_subscribe = reader.bool();
                    break;
                case 36:
                    message.subscriptions = reader.uint32();
                    break;
                case 37:
                    message.favorited = reader.uint32();
                    break;
                case 38:
                    message.followers = reader.uint32();
                    break;
                case 39:
                    message.lifetime_subscriptions = reader.uint32();
                    break;
                case 40:
                    message.lifetime_favorited = reader.uint32();
                    break;
                case 41:
                    message.lifetime_followers = reader.uint32();
                    break;
                case 42:
                    message.views = reader.uint32();
                    break;
                case 43:
                    message.image_width = reader.uint32();
                    break;
                case 44:
                    message.image_height = reader.uint32();
                    break;
                case 45:
                    message.image_url = reader.string();
                    break;
                case 46:
                    message.spoiler_tag = reader.bool();
                    break;
                case 47:
                    message.shortcutid = reader.uint32();
                    break;
                case 48:
                    message.shortcutname = reader.string();
                    break;
                case 49:
                    message.num_children = reader.uint32();
                    break;
                case 50:
                    message.num_reports = reader.uint32();
                    break;
                case 51:
                    if (!(message.previews && message.previews.length))
                        message.previews = [];
                    message.previews.push($root.PublishedFileDetails.Preview.decode(reader, reader.uint32()));
                    break;
                case 52:
                    if (!(message.tags && message.tags.length))
                        message.tags = [];
                    message.tags.push($root.PublishedFileDetails.Tag.decode(reader, reader.uint32()));
                    break;
                case 53:
                    if (!(message.children && message.children.length))
                        message.children = [];
                    message.children.push($root.PublishedFileDetails.Child.decode(reader, reader.uint32()));
                    break;
                case 54:
                    if (!(message.kvtags && message.kvtags.length))
                        message.kvtags = [];
                    message.kvtags.push($root.PublishedFileDetails.KVTag.decode(reader, reader.uint32()));
                    break;
                case 55:
                    message.vote_data = $root.PublishedFileDetails.VoteData.decode(reader, reader.uint32());
                    break;
                case 56:
                    message.time_subscribed = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PublishedFileDetails message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PublishedFileDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PublishedFileDetails} PublishedFileDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublishedFileDetails.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PublishedFileDetails message.
         * @function verify
         * @memberof PublishedFileDetails
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PublishedFileDetails.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (!$util.isInteger(message.publishedfileid) && !(message.publishedfileid && $util.isInteger(message.publishedfileid.low) && $util.isInteger(message.publishedfileid.high)))
                    return "publishedfileid: integer|Long expected";
            if (message.creator != null && message.hasOwnProperty("creator"))
                if (!$util.isInteger(message.creator) && !(message.creator && $util.isInteger(message.creator.low) && $util.isInteger(message.creator.high)))
                    return "creator: integer|Long expected";
            if (message.creator_appid != null && message.hasOwnProperty("creator_appid"))
                if (!$util.isInteger(message.creator_appid))
                    return "creator_appid: integer expected";
            if (message.consumer_appid != null && message.hasOwnProperty("consumer_appid"))
                if (!$util.isInteger(message.consumer_appid))
                    return "consumer_appid: integer expected";
            if (message.consumer_shortcutid != null && message.hasOwnProperty("consumer_shortcutid"))
                if (!$util.isInteger(message.consumer_shortcutid))
                    return "consumer_shortcutid: integer expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.file_size != null && message.hasOwnProperty("file_size"))
                if (!$util.isInteger(message.file_size) && !(message.file_size && $util.isInteger(message.file_size.low) && $util.isInteger(message.file_size.high)))
                    return "file_size: integer|Long expected";
            if (message.preview_file_size != null && message.hasOwnProperty("preview_file_size"))
                if (!$util.isInteger(message.preview_file_size) && !(message.preview_file_size && $util.isInteger(message.preview_file_size.low) && $util.isInteger(message.preview_file_size.high)))
                    return "preview_file_size: integer|Long expected";
            if (message.file_url != null && message.hasOwnProperty("file_url"))
                if (!$util.isString(message.file_url))
                    return "file_url: string expected";
            if (message.preview_url != null && message.hasOwnProperty("preview_url"))
                if (!$util.isString(message.preview_url))
                    return "preview_url: string expected";
            if (message.youtubevideoid != null && message.hasOwnProperty("youtubevideoid"))
                if (!$util.isString(message.youtubevideoid))
                    return "youtubevideoid: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.hcontent_file != null && message.hasOwnProperty("hcontent_file"))
                if (!$util.isInteger(message.hcontent_file) && !(message.hcontent_file && $util.isInteger(message.hcontent_file.low) && $util.isInteger(message.hcontent_file.high)))
                    return "hcontent_file: integer|Long expected";
            if (message.hcontent_preview != null && message.hasOwnProperty("hcontent_preview"))
                if (!$util.isInteger(message.hcontent_preview) && !(message.hcontent_preview && $util.isInteger(message.hcontent_preview.low) && $util.isInteger(message.hcontent_preview.high)))
                    return "hcontent_preview: integer|Long expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.file_description != null && message.hasOwnProperty("file_description"))
                if (!$util.isString(message.file_description))
                    return "file_description: string expected";
            if (message.short_description != null && message.hasOwnProperty("short_description"))
                if (!$util.isString(message.short_description))
                    return "short_description: string expected";
            if (message.time_created != null && message.hasOwnProperty("time_created"))
                if (!$util.isInteger(message.time_created))
                    return "time_created: integer expected";
            if (message.time_updated != null && message.hasOwnProperty("time_updated"))
                if (!$util.isInteger(message.time_updated))
                    return "time_updated: integer expected";
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                if (!$util.isInteger(message.visibility))
                    return "visibility: integer expected";
            if (message.flags != null && message.hasOwnProperty("flags"))
                if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
            if (message.workshop_file != null && message.hasOwnProperty("workshop_file"))
                if (typeof message.workshop_file !== "boolean")
                    return "workshop_file: boolean expected";
            if (message.workshop_accepted != null && message.hasOwnProperty("workshop_accepted"))
                if (typeof message.workshop_accepted !== "boolean")
                    return "workshop_accepted: boolean expected";
            if (message.show_subscribe_all != null && message.hasOwnProperty("show_subscribe_all"))
                if (typeof message.show_subscribe_all !== "boolean")
                    return "show_subscribe_all: boolean expected";
            if (message.num_comments_developer != null && message.hasOwnProperty("num_comments_developer"))
                if (!$util.isInteger(message.num_comments_developer))
                    return "num_comments_developer: integer expected";
            if (message.num_comments_public != null && message.hasOwnProperty("num_comments_public"))
                if (!$util.isInteger(message.num_comments_public))
                    return "num_comments_public: integer expected";
            if (message.banned != null && message.hasOwnProperty("banned"))
                if (typeof message.banned !== "boolean")
                    return "banned: boolean expected";
            if (message.ban_reason != null && message.hasOwnProperty("ban_reason"))
                if (!$util.isString(message.ban_reason))
                    return "ban_reason: string expected";
            if (message.banner != null && message.hasOwnProperty("banner"))
                if (!$util.isInteger(message.banner) && !(message.banner && $util.isInteger(message.banner.low) && $util.isInteger(message.banner.high)))
                    return "banner: integer|Long expected";
            if (message.can_be_deleted != null && message.hasOwnProperty("can_be_deleted"))
                if (typeof message.can_be_deleted !== "boolean")
                    return "can_be_deleted: boolean expected";
            if (message.incompatible != null && message.hasOwnProperty("incompatible"))
                if (typeof message.incompatible !== "boolean")
                    return "incompatible: boolean expected";
            if (message.app_name != null && message.hasOwnProperty("app_name"))
                if (!$util.isString(message.app_name))
                    return "app_name: string expected";
            if (message.file_type != null && message.hasOwnProperty("file_type"))
                if (!$util.isInteger(message.file_type))
                    return "file_type: integer expected";
            if (message.can_subscribe != null && message.hasOwnProperty("can_subscribe"))
                if (typeof message.can_subscribe !== "boolean")
                    return "can_subscribe: boolean expected";
            if (message.subscriptions != null && message.hasOwnProperty("subscriptions"))
                if (!$util.isInteger(message.subscriptions))
                    return "subscriptions: integer expected";
            if (message.favorited != null && message.hasOwnProperty("favorited"))
                if (!$util.isInteger(message.favorited))
                    return "favorited: integer expected";
            if (message.followers != null && message.hasOwnProperty("followers"))
                if (!$util.isInteger(message.followers))
                    return "followers: integer expected";
            if (message.lifetime_subscriptions != null && message.hasOwnProperty("lifetime_subscriptions"))
                if (!$util.isInteger(message.lifetime_subscriptions))
                    return "lifetime_subscriptions: integer expected";
            if (message.lifetime_favorited != null && message.hasOwnProperty("lifetime_favorited"))
                if (!$util.isInteger(message.lifetime_favorited))
                    return "lifetime_favorited: integer expected";
            if (message.lifetime_followers != null && message.hasOwnProperty("lifetime_followers"))
                if (!$util.isInteger(message.lifetime_followers))
                    return "lifetime_followers: integer expected";
            if (message.views != null && message.hasOwnProperty("views"))
                if (!$util.isInteger(message.views))
                    return "views: integer expected";
            if (message.image_width != null && message.hasOwnProperty("image_width"))
                if (!$util.isInteger(message.image_width))
                    return "image_width: integer expected";
            if (message.image_height != null && message.hasOwnProperty("image_height"))
                if (!$util.isInteger(message.image_height))
                    return "image_height: integer expected";
            if (message.image_url != null && message.hasOwnProperty("image_url"))
                if (!$util.isString(message.image_url))
                    return "image_url: string expected";
            if (message.spoiler_tag != null && message.hasOwnProperty("spoiler_tag"))
                if (typeof message.spoiler_tag !== "boolean")
                    return "spoiler_tag: boolean expected";
            if (message.shortcutid != null && message.hasOwnProperty("shortcutid"))
                if (!$util.isInteger(message.shortcutid))
                    return "shortcutid: integer expected";
            if (message.shortcutname != null && message.hasOwnProperty("shortcutname"))
                if (!$util.isString(message.shortcutname))
                    return "shortcutname: string expected";
            if (message.num_children != null && message.hasOwnProperty("num_children"))
                if (!$util.isInteger(message.num_children))
                    return "num_children: integer expected";
            if (message.num_reports != null && message.hasOwnProperty("num_reports"))
                if (!$util.isInteger(message.num_reports))
                    return "num_reports: integer expected";
            if (message.previews != null && message.hasOwnProperty("previews")) {
                if (!Array.isArray(message.previews))
                    return "previews: array expected";
                for (var i = 0; i < message.previews.length; ++i) {
                    var error = $root.PublishedFileDetails.Preview.verify(message.previews[i]);
                    if (error)
                        return "previews." + error;
                }
            }
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i) {
                    var error = $root.PublishedFileDetails.Tag.verify(message.tags[i]);
                    if (error)
                        return "tags." + error;
                }
            }
            if (message.children != null && message.hasOwnProperty("children")) {
                if (!Array.isArray(message.children))
                    return "children: array expected";
                for (var i = 0; i < message.children.length; ++i) {
                    var error = $root.PublishedFileDetails.Child.verify(message.children[i]);
                    if (error)
                        return "children." + error;
                }
            }
            if (message.kvtags != null && message.hasOwnProperty("kvtags")) {
                if (!Array.isArray(message.kvtags))
                    return "kvtags: array expected";
                for (var i = 0; i < message.kvtags.length; ++i) {
                    var error = $root.PublishedFileDetails.KVTag.verify(message.kvtags[i]);
                    if (error)
                        return "kvtags." + error;
                }
            }
            if (message.vote_data != null && message.hasOwnProperty("vote_data")) {
                var error = $root.PublishedFileDetails.VoteData.verify(message.vote_data);
                if (error)
                    return "vote_data." + error;
            }
            if (message.time_subscribed != null && message.hasOwnProperty("time_subscribed"))
                if (!$util.isInteger(message.time_subscribed))
                    return "time_subscribed: integer expected";
            return null;
        };
    
        /**
         * Creates a PublishedFileDetails message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PublishedFileDetails
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PublishedFileDetails} PublishedFileDetails
         */
        PublishedFileDetails.fromObject = function fromObject(object) {
            if (object instanceof $root.PublishedFileDetails)
                return object;
            var message = new $root.PublishedFileDetails();
            if (object.result != null)
                message.result = object.result >>> 0;
            if (object.publishedfileid != null)
                if ($util.Long)
                    (message.publishedfileid = $util.Long.fromValue(object.publishedfileid)).unsigned = true;
                else if (typeof object.publishedfileid === "string")
                    message.publishedfileid = parseInt(object.publishedfileid, 10);
                else if (typeof object.publishedfileid === "number")
                    message.publishedfileid = object.publishedfileid;
                else if (typeof object.publishedfileid === "object")
                    message.publishedfileid = new $util.LongBits(object.publishedfileid.low >>> 0, object.publishedfileid.high >>> 0).toNumber(true);
            if (object.creator != null)
                if ($util.Long)
                    (message.creator = $util.Long.fromValue(object.creator)).unsigned = false;
                else if (typeof object.creator === "string")
                    message.creator = parseInt(object.creator, 10);
                else if (typeof object.creator === "number")
                    message.creator = object.creator;
                else if (typeof object.creator === "object")
                    message.creator = new $util.LongBits(object.creator.low >>> 0, object.creator.high >>> 0).toNumber();
            if (object.creator_appid != null)
                message.creator_appid = object.creator_appid >>> 0;
            if (object.consumer_appid != null)
                message.consumer_appid = object.consumer_appid >>> 0;
            if (object.consumer_shortcutid != null)
                message.consumer_shortcutid = object.consumer_shortcutid >>> 0;
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.file_size != null)
                if ($util.Long)
                    (message.file_size = $util.Long.fromValue(object.file_size)).unsigned = true;
                else if (typeof object.file_size === "string")
                    message.file_size = parseInt(object.file_size, 10);
                else if (typeof object.file_size === "number")
                    message.file_size = object.file_size;
                else if (typeof object.file_size === "object")
                    message.file_size = new $util.LongBits(object.file_size.low >>> 0, object.file_size.high >>> 0).toNumber(true);
            if (object.preview_file_size != null)
                if ($util.Long)
                    (message.preview_file_size = $util.Long.fromValue(object.preview_file_size)).unsigned = true;
                else if (typeof object.preview_file_size === "string")
                    message.preview_file_size = parseInt(object.preview_file_size, 10);
                else if (typeof object.preview_file_size === "number")
                    message.preview_file_size = object.preview_file_size;
                else if (typeof object.preview_file_size === "object")
                    message.preview_file_size = new $util.LongBits(object.preview_file_size.low >>> 0, object.preview_file_size.high >>> 0).toNumber(true);
            if (object.file_url != null)
                message.file_url = String(object.file_url);
            if (object.preview_url != null)
                message.preview_url = String(object.preview_url);
            if (object.youtubevideoid != null)
                message.youtubevideoid = String(object.youtubevideoid);
            if (object.url != null)
                message.url = String(object.url);
            if (object.hcontent_file != null)
                if ($util.Long)
                    (message.hcontent_file = $util.Long.fromValue(object.hcontent_file)).unsigned = false;
                else if (typeof object.hcontent_file === "string")
                    message.hcontent_file = parseInt(object.hcontent_file, 10);
                else if (typeof object.hcontent_file === "number")
                    message.hcontent_file = object.hcontent_file;
                else if (typeof object.hcontent_file === "object")
                    message.hcontent_file = new $util.LongBits(object.hcontent_file.low >>> 0, object.hcontent_file.high >>> 0).toNumber();
            if (object.hcontent_preview != null)
                if ($util.Long)
                    (message.hcontent_preview = $util.Long.fromValue(object.hcontent_preview)).unsigned = false;
                else if (typeof object.hcontent_preview === "string")
                    message.hcontent_preview = parseInt(object.hcontent_preview, 10);
                else if (typeof object.hcontent_preview === "number")
                    message.hcontent_preview = object.hcontent_preview;
                else if (typeof object.hcontent_preview === "object")
                    message.hcontent_preview = new $util.LongBits(object.hcontent_preview.low >>> 0, object.hcontent_preview.high >>> 0).toNumber();
            if (object.title != null)
                message.title = String(object.title);
            if (object.file_description != null)
                message.file_description = String(object.file_description);
            if (object.short_description != null)
                message.short_description = String(object.short_description);
            if (object.time_created != null)
                message.time_created = object.time_created >>> 0;
            if (object.time_updated != null)
                message.time_updated = object.time_updated >>> 0;
            if (object.visibility != null)
                message.visibility = object.visibility >>> 0;
            if (object.flags != null)
                message.flags = object.flags >>> 0;
            if (object.workshop_file != null)
                message.workshop_file = Boolean(object.workshop_file);
            if (object.workshop_accepted != null)
                message.workshop_accepted = Boolean(object.workshop_accepted);
            if (object.show_subscribe_all != null)
                message.show_subscribe_all = Boolean(object.show_subscribe_all);
            if (object.num_comments_developer != null)
                message.num_comments_developer = object.num_comments_developer | 0;
            if (object.num_comments_public != null)
                message.num_comments_public = object.num_comments_public | 0;
            if (object.banned != null)
                message.banned = Boolean(object.banned);
            if (object.ban_reason != null)
                message.ban_reason = String(object.ban_reason);
            if (object.banner != null)
                if ($util.Long)
                    (message.banner = $util.Long.fromValue(object.banner)).unsigned = false;
                else if (typeof object.banner === "string")
                    message.banner = parseInt(object.banner, 10);
                else if (typeof object.banner === "number")
                    message.banner = object.banner;
                else if (typeof object.banner === "object")
                    message.banner = new $util.LongBits(object.banner.low >>> 0, object.banner.high >>> 0).toNumber();
            if (object.can_be_deleted != null)
                message.can_be_deleted = Boolean(object.can_be_deleted);
            if (object.incompatible != null)
                message.incompatible = Boolean(object.incompatible);
            if (object.app_name != null)
                message.app_name = String(object.app_name);
            if (object.file_type != null)
                message.file_type = object.file_type >>> 0;
            if (object.can_subscribe != null)
                message.can_subscribe = Boolean(object.can_subscribe);
            if (object.subscriptions != null)
                message.subscriptions = object.subscriptions >>> 0;
            if (object.favorited != null)
                message.favorited = object.favorited >>> 0;
            if (object.followers != null)
                message.followers = object.followers >>> 0;
            if (object.lifetime_subscriptions != null)
                message.lifetime_subscriptions = object.lifetime_subscriptions >>> 0;
            if (object.lifetime_favorited != null)
                message.lifetime_favorited = object.lifetime_favorited >>> 0;
            if (object.lifetime_followers != null)
                message.lifetime_followers = object.lifetime_followers >>> 0;
            if (object.views != null)
                message.views = object.views >>> 0;
            if (object.image_width != null)
                message.image_width = object.image_width >>> 0;
            if (object.image_height != null)
                message.image_height = object.image_height >>> 0;
            if (object.image_url != null)
                message.image_url = String(object.image_url);
            if (object.spoiler_tag != null)
                message.spoiler_tag = Boolean(object.spoiler_tag);
            if (object.shortcutid != null)
                message.shortcutid = object.shortcutid >>> 0;
            if (object.shortcutname != null)
                message.shortcutname = String(object.shortcutname);
            if (object.num_children != null)
                message.num_children = object.num_children >>> 0;
            if (object.num_reports != null)
                message.num_reports = object.num_reports >>> 0;
            if (object.previews) {
                if (!Array.isArray(object.previews))
                    throw TypeError(".PublishedFileDetails.previews: array expected");
                message.previews = [];
                for (var i = 0; i < object.previews.length; ++i) {
                    if (typeof object.previews[i] !== "object")
                        throw TypeError(".PublishedFileDetails.previews: object expected");
                    message.previews[i] = $root.PublishedFileDetails.Preview.fromObject(object.previews[i]);
                }
            }
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".PublishedFileDetails.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i) {
                    if (typeof object.tags[i] !== "object")
                        throw TypeError(".PublishedFileDetails.tags: object expected");
                    message.tags[i] = $root.PublishedFileDetails.Tag.fromObject(object.tags[i]);
                }
            }
            if (object.children) {
                if (!Array.isArray(object.children))
                    throw TypeError(".PublishedFileDetails.children: array expected");
                message.children = [];
                for (var i = 0; i < object.children.length; ++i) {
                    if (typeof object.children[i] !== "object")
                        throw TypeError(".PublishedFileDetails.children: object expected");
                    message.children[i] = $root.PublishedFileDetails.Child.fromObject(object.children[i]);
                }
            }
            if (object.kvtags) {
                if (!Array.isArray(object.kvtags))
                    throw TypeError(".PublishedFileDetails.kvtags: array expected");
                message.kvtags = [];
                for (var i = 0; i < object.kvtags.length; ++i) {
                    if (typeof object.kvtags[i] !== "object")
                        throw TypeError(".PublishedFileDetails.kvtags: object expected");
                    message.kvtags[i] = $root.PublishedFileDetails.KVTag.fromObject(object.kvtags[i]);
                }
            }
            if (object.vote_data != null) {
                if (typeof object.vote_data !== "object")
                    throw TypeError(".PublishedFileDetails.vote_data: object expected");
                message.vote_data = $root.PublishedFileDetails.VoteData.fromObject(object.vote_data);
            }
            if (object.time_subscribed != null)
                message.time_subscribed = object.time_subscribed >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a PublishedFileDetails message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PublishedFileDetails
         * @static
         * @param {PublishedFileDetails} message PublishedFileDetails
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PublishedFileDetails.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.previews = [];
                object.tags = [];
                object.children = [];
                object.kvtags = [];
            }
            if (options.defaults) {
                object.result = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.publishedfileid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.publishedfileid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.creator = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.creator = options.longs === String ? "0" : 0;
                object.creator_appid = 0;
                object.consumer_appid = 0;
                object.consumer_shortcutid = 0;
                object.filename = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.file_size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.file_size = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.preview_file_size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.preview_file_size = options.longs === String ? "0" : 0;
                object.file_url = "";
                object.preview_url = "";
                object.youtubevideoid = "";
                object.url = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.hcontent_file = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.hcontent_file = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.hcontent_preview = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.hcontent_preview = options.longs === String ? "0" : 0;
                object.title = "";
                object.file_description = "";
                object.short_description = "";
                object.time_created = 0;
                object.time_updated = 0;
                object.visibility = 0;
                object.flags = 0;
                object.workshop_file = false;
                object.workshop_accepted = false;
                object.show_subscribe_all = false;
                object.num_comments_developer = 0;
                object.num_comments_public = 0;
                object.banned = false;
                object.ban_reason = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.banner = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.banner = options.longs === String ? "0" : 0;
                object.can_be_deleted = false;
                object.incompatible = false;
                object.app_name = "";
                object.file_type = 0;
                object.can_subscribe = false;
                object.subscriptions = 0;
                object.favorited = 0;
                object.followers = 0;
                object.lifetime_subscriptions = 0;
                object.lifetime_favorited = 0;
                object.lifetime_followers = 0;
                object.views = 0;
                object.image_width = 0;
                object.image_height = 0;
                object.image_url = "";
                object.spoiler_tag = false;
                object.shortcutid = 0;
                object.shortcutname = "";
                object.num_children = 0;
                object.num_reports = 0;
                object.vote_data = null;
                object.time_subscribed = 0;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (typeof message.publishedfileid === "number")
                    object.publishedfileid = options.longs === String ? String(message.publishedfileid) : message.publishedfileid;
                else
                    object.publishedfileid = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileid) : options.longs === Number ? new $util.LongBits(message.publishedfileid.low >>> 0, message.publishedfileid.high >>> 0).toNumber(true) : message.publishedfileid;
            if (message.creator != null && message.hasOwnProperty("creator"))
                if (typeof message.creator === "number")
                    object.creator = options.longs === String ? String(message.creator) : message.creator;
                else
                    object.creator = options.longs === String ? $util.Long.prototype.toString.call(message.creator) : options.longs === Number ? new $util.LongBits(message.creator.low >>> 0, message.creator.high >>> 0).toNumber() : message.creator;
            if (message.creator_appid != null && message.hasOwnProperty("creator_appid"))
                object.creator_appid = message.creator_appid;
            if (message.consumer_appid != null && message.hasOwnProperty("consumer_appid"))
                object.consumer_appid = message.consumer_appid;
            if (message.consumer_shortcutid != null && message.hasOwnProperty("consumer_shortcutid"))
                object.consumer_shortcutid = message.consumer_shortcutid;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.file_size != null && message.hasOwnProperty("file_size"))
                if (typeof message.file_size === "number")
                    object.file_size = options.longs === String ? String(message.file_size) : message.file_size;
                else
                    object.file_size = options.longs === String ? $util.Long.prototype.toString.call(message.file_size) : options.longs === Number ? new $util.LongBits(message.file_size.low >>> 0, message.file_size.high >>> 0).toNumber(true) : message.file_size;
            if (message.preview_file_size != null && message.hasOwnProperty("preview_file_size"))
                if (typeof message.preview_file_size === "number")
                    object.preview_file_size = options.longs === String ? String(message.preview_file_size) : message.preview_file_size;
                else
                    object.preview_file_size = options.longs === String ? $util.Long.prototype.toString.call(message.preview_file_size) : options.longs === Number ? new $util.LongBits(message.preview_file_size.low >>> 0, message.preview_file_size.high >>> 0).toNumber(true) : message.preview_file_size;
            if (message.file_url != null && message.hasOwnProperty("file_url"))
                object.file_url = message.file_url;
            if (message.preview_url != null && message.hasOwnProperty("preview_url"))
                object.preview_url = message.preview_url;
            if (message.youtubevideoid != null && message.hasOwnProperty("youtubevideoid"))
                object.youtubevideoid = message.youtubevideoid;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.hcontent_file != null && message.hasOwnProperty("hcontent_file"))
                if (typeof message.hcontent_file === "number")
                    object.hcontent_file = options.longs === String ? String(message.hcontent_file) : message.hcontent_file;
                else
                    object.hcontent_file = options.longs === String ? $util.Long.prototype.toString.call(message.hcontent_file) : options.longs === Number ? new $util.LongBits(message.hcontent_file.low >>> 0, message.hcontent_file.high >>> 0).toNumber() : message.hcontent_file;
            if (message.hcontent_preview != null && message.hasOwnProperty("hcontent_preview"))
                if (typeof message.hcontent_preview === "number")
                    object.hcontent_preview = options.longs === String ? String(message.hcontent_preview) : message.hcontent_preview;
                else
                    object.hcontent_preview = options.longs === String ? $util.Long.prototype.toString.call(message.hcontent_preview) : options.longs === Number ? new $util.LongBits(message.hcontent_preview.low >>> 0, message.hcontent_preview.high >>> 0).toNumber() : message.hcontent_preview;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.file_description != null && message.hasOwnProperty("file_description"))
                object.file_description = message.file_description;
            if (message.short_description != null && message.hasOwnProperty("short_description"))
                object.short_description = message.short_description;
            if (message.time_created != null && message.hasOwnProperty("time_created"))
                object.time_created = message.time_created;
            if (message.time_updated != null && message.hasOwnProperty("time_updated"))
                object.time_updated = message.time_updated;
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                object.visibility = message.visibility;
            if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
            if (message.workshop_file != null && message.hasOwnProperty("workshop_file"))
                object.workshop_file = message.workshop_file;
            if (message.workshop_accepted != null && message.hasOwnProperty("workshop_accepted"))
                object.workshop_accepted = message.workshop_accepted;
            if (message.show_subscribe_all != null && message.hasOwnProperty("show_subscribe_all"))
                object.show_subscribe_all = message.show_subscribe_all;
            if (message.num_comments_developer != null && message.hasOwnProperty("num_comments_developer"))
                object.num_comments_developer = message.num_comments_developer;
            if (message.num_comments_public != null && message.hasOwnProperty("num_comments_public"))
                object.num_comments_public = message.num_comments_public;
            if (message.banned != null && message.hasOwnProperty("banned"))
                object.banned = message.banned;
            if (message.ban_reason != null && message.hasOwnProperty("ban_reason"))
                object.ban_reason = message.ban_reason;
            if (message.banner != null && message.hasOwnProperty("banner"))
                if (typeof message.banner === "number")
                    object.banner = options.longs === String ? String(message.banner) : message.banner;
                else
                    object.banner = options.longs === String ? $util.Long.prototype.toString.call(message.banner) : options.longs === Number ? new $util.LongBits(message.banner.low >>> 0, message.banner.high >>> 0).toNumber() : message.banner;
            if (message.can_be_deleted != null && message.hasOwnProperty("can_be_deleted"))
                object.can_be_deleted = message.can_be_deleted;
            if (message.incompatible != null && message.hasOwnProperty("incompatible"))
                object.incompatible = message.incompatible;
            if (message.app_name != null && message.hasOwnProperty("app_name"))
                object.app_name = message.app_name;
            if (message.file_type != null && message.hasOwnProperty("file_type"))
                object.file_type = message.file_type;
            if (message.can_subscribe != null && message.hasOwnProperty("can_subscribe"))
                object.can_subscribe = message.can_subscribe;
            if (message.subscriptions != null && message.hasOwnProperty("subscriptions"))
                object.subscriptions = message.subscriptions;
            if (message.favorited != null && message.hasOwnProperty("favorited"))
                object.favorited = message.favorited;
            if (message.followers != null && message.hasOwnProperty("followers"))
                object.followers = message.followers;
            if (message.lifetime_subscriptions != null && message.hasOwnProperty("lifetime_subscriptions"))
                object.lifetime_subscriptions = message.lifetime_subscriptions;
            if (message.lifetime_favorited != null && message.hasOwnProperty("lifetime_favorited"))
                object.lifetime_favorited = message.lifetime_favorited;
            if (message.lifetime_followers != null && message.hasOwnProperty("lifetime_followers"))
                object.lifetime_followers = message.lifetime_followers;
            if (message.views != null && message.hasOwnProperty("views"))
                object.views = message.views;
            if (message.image_width != null && message.hasOwnProperty("image_width"))
                object.image_width = message.image_width;
            if (message.image_height != null && message.hasOwnProperty("image_height"))
                object.image_height = message.image_height;
            if (message.image_url != null && message.hasOwnProperty("image_url"))
                object.image_url = message.image_url;
            if (message.spoiler_tag != null && message.hasOwnProperty("spoiler_tag"))
                object.spoiler_tag = message.spoiler_tag;
            if (message.shortcutid != null && message.hasOwnProperty("shortcutid"))
                object.shortcutid = message.shortcutid;
            if (message.shortcutname != null && message.hasOwnProperty("shortcutname"))
                object.shortcutname = message.shortcutname;
            if (message.num_children != null && message.hasOwnProperty("num_children"))
                object.num_children = message.num_children;
            if (message.num_reports != null && message.hasOwnProperty("num_reports"))
                object.num_reports = message.num_reports;
            if (message.previews && message.previews.length) {
                object.previews = [];
                for (var j = 0; j < message.previews.length; ++j)
                    object.previews[j] = $root.PublishedFileDetails.Preview.toObject(message.previews[j], options);
            }
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = $root.PublishedFileDetails.Tag.toObject(message.tags[j], options);
            }
            if (message.children && message.children.length) {
                object.children = [];
                for (var j = 0; j < message.children.length; ++j)
                    object.children[j] = $root.PublishedFileDetails.Child.toObject(message.children[j], options);
            }
            if (message.kvtags && message.kvtags.length) {
                object.kvtags = [];
                for (var j = 0; j < message.kvtags.length; ++j)
                    object.kvtags[j] = $root.PublishedFileDetails.KVTag.toObject(message.kvtags[j], options);
            }
            if (message.vote_data != null && message.hasOwnProperty("vote_data"))
                object.vote_data = $root.PublishedFileDetails.VoteData.toObject(message.vote_data, options);
            if (message.time_subscribed != null && message.hasOwnProperty("time_subscribed"))
                object.time_subscribed = message.time_subscribed;
            return object;
        };
    
        /**
         * Converts this PublishedFileDetails to JSON.
         * @function toJSON
         * @memberof PublishedFileDetails
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PublishedFileDetails.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        PublishedFileDetails.Tag = (function() {
    
            /**
             * Properties of a Tag.
             * @memberof PublishedFileDetails
             * @interface ITag
             * @property {string|null} [tag] Tag tag
             * @property {boolean|null} [adminonly] Tag adminonly
             */
    
            /**
             * Constructs a new Tag.
             * @memberof PublishedFileDetails
             * @classdesc Represents a Tag.
             * @implements ITag
             * @constructor
             * @param {PublishedFileDetails.ITag=} [properties] Properties to set
             */
            function Tag(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Tag tag.
             * @member {string} tag
             * @memberof PublishedFileDetails.Tag
             * @instance
             */
            Tag.prototype.tag = "";
    
            /**
             * Tag adminonly.
             * @member {boolean} adminonly
             * @memberof PublishedFileDetails.Tag
             * @instance
             */
            Tag.prototype.adminonly = false;
    
            /**
             * Creates a new Tag instance using the specified properties.
             * @function create
             * @memberof PublishedFileDetails.Tag
             * @static
             * @param {PublishedFileDetails.ITag=} [properties] Properties to set
             * @returns {PublishedFileDetails.Tag} Tag instance
             */
            Tag.create = function create(properties) {
                return new Tag(properties);
            };
    
            /**
             * Encodes the specified Tag message. Does not implicitly {@link PublishedFileDetails.Tag.verify|verify} messages.
             * @function encode
             * @memberof PublishedFileDetails.Tag
             * @static
             * @param {PublishedFileDetails.ITag} message Tag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tag.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.tag);
                if (message.adminonly != null && Object.hasOwnProperty.call(message, "adminonly"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.adminonly);
                return writer;
            };
    
            /**
             * Encodes the specified Tag message, length delimited. Does not implicitly {@link PublishedFileDetails.Tag.verify|verify} messages.
             * @function encodeDelimited
             * @memberof PublishedFileDetails.Tag
             * @static
             * @param {PublishedFileDetails.ITag} message Tag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tag.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Tag message from the specified reader or buffer.
             * @function decode
             * @memberof PublishedFileDetails.Tag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {PublishedFileDetails.Tag} Tag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tag.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublishedFileDetails.Tag();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tag = reader.string();
                        break;
                    case 2:
                        message.adminonly = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Tag message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof PublishedFileDetails.Tag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {PublishedFileDetails.Tag} Tag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tag.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Tag message.
             * @function verify
             * @memberof PublishedFileDetails.Tag
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Tag.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tag != null && message.hasOwnProperty("tag"))
                    if (!$util.isString(message.tag))
                        return "tag: string expected";
                if (message.adminonly != null && message.hasOwnProperty("adminonly"))
                    if (typeof message.adminonly !== "boolean")
                        return "adminonly: boolean expected";
                return null;
            };
    
            /**
             * Creates a Tag message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof PublishedFileDetails.Tag
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {PublishedFileDetails.Tag} Tag
             */
            Tag.fromObject = function fromObject(object) {
                if (object instanceof $root.PublishedFileDetails.Tag)
                    return object;
                var message = new $root.PublishedFileDetails.Tag();
                if (object.tag != null)
                    message.tag = String(object.tag);
                if (object.adminonly != null)
                    message.adminonly = Boolean(object.adminonly);
                return message;
            };
    
            /**
             * Creates a plain object from a Tag message. Also converts values to other types if specified.
             * @function toObject
             * @memberof PublishedFileDetails.Tag
             * @static
             * @param {PublishedFileDetails.Tag} message Tag
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Tag.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.tag = "";
                    object.adminonly = false;
                }
                if (message.tag != null && message.hasOwnProperty("tag"))
                    object.tag = message.tag;
                if (message.adminonly != null && message.hasOwnProperty("adminonly"))
                    object.adminonly = message.adminonly;
                return object;
            };
    
            /**
             * Converts this Tag to JSON.
             * @function toJSON
             * @memberof PublishedFileDetails.Tag
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Tag.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Tag;
        })();
    
        PublishedFileDetails.Preview = (function() {
    
            /**
             * Properties of a Preview.
             * @memberof PublishedFileDetails
             * @interface IPreview
             * @property {number|Long|null} [previewid] Preview previewid
             * @property {number|null} [sortorder] Preview sortorder
             * @property {string|null} [url] Preview url
             * @property {number|null} [size] Preview size
             * @property {string|null} [filename] Preview filename
             * @property {string|null} [youtubevideoid] Preview youtubevideoid
             */
    
            /**
             * Constructs a new Preview.
             * @memberof PublishedFileDetails
             * @classdesc Represents a Preview.
             * @implements IPreview
             * @constructor
             * @param {PublishedFileDetails.IPreview=} [properties] Properties to set
             */
            function Preview(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Preview previewid.
             * @member {number|Long} previewid
             * @memberof PublishedFileDetails.Preview
             * @instance
             */
            Preview.prototype.previewid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Preview sortorder.
             * @member {number} sortorder
             * @memberof PublishedFileDetails.Preview
             * @instance
             */
            Preview.prototype.sortorder = 0;
    
            /**
             * Preview url.
             * @member {string} url
             * @memberof PublishedFileDetails.Preview
             * @instance
             */
            Preview.prototype.url = "";
    
            /**
             * Preview size.
             * @member {number} size
             * @memberof PublishedFileDetails.Preview
             * @instance
             */
            Preview.prototype.size = 0;
    
            /**
             * Preview filename.
             * @member {string} filename
             * @memberof PublishedFileDetails.Preview
             * @instance
             */
            Preview.prototype.filename = "";
    
            /**
             * Preview youtubevideoid.
             * @member {string} youtubevideoid
             * @memberof PublishedFileDetails.Preview
             * @instance
             */
            Preview.prototype.youtubevideoid = "";
    
            /**
             * Creates a new Preview instance using the specified properties.
             * @function create
             * @memberof PublishedFileDetails.Preview
             * @static
             * @param {PublishedFileDetails.IPreview=} [properties] Properties to set
             * @returns {PublishedFileDetails.Preview} Preview instance
             */
            Preview.create = function create(properties) {
                return new Preview(properties);
            };
    
            /**
             * Encodes the specified Preview message. Does not implicitly {@link PublishedFileDetails.Preview.verify|verify} messages.
             * @function encode
             * @memberof PublishedFileDetails.Preview
             * @static
             * @param {PublishedFileDetails.IPreview} message Preview message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Preview.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.previewid != null && Object.hasOwnProperty.call(message, "previewid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.previewid);
                if (message.sortorder != null && Object.hasOwnProperty.call(message, "sortorder"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.sortorder);
                if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.url);
                if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.size);
                if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.filename);
                if (message.youtubevideoid != null && Object.hasOwnProperty.call(message, "youtubevideoid"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.youtubevideoid);
                return writer;
            };
    
            /**
             * Encodes the specified Preview message, length delimited. Does not implicitly {@link PublishedFileDetails.Preview.verify|verify} messages.
             * @function encodeDelimited
             * @memberof PublishedFileDetails.Preview
             * @static
             * @param {PublishedFileDetails.IPreview} message Preview message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Preview.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Preview message from the specified reader or buffer.
             * @function decode
             * @memberof PublishedFileDetails.Preview
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {PublishedFileDetails.Preview} Preview
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Preview.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublishedFileDetails.Preview();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.previewid = reader.uint64();
                        break;
                    case 2:
                        message.sortorder = reader.uint32();
                        break;
                    case 3:
                        message.url = reader.string();
                        break;
                    case 4:
                        message.size = reader.uint32();
                        break;
                    case 5:
                        message.filename = reader.string();
                        break;
                    case 6:
                        message.youtubevideoid = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Preview message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof PublishedFileDetails.Preview
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {PublishedFileDetails.Preview} Preview
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Preview.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Preview message.
             * @function verify
             * @memberof PublishedFileDetails.Preview
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Preview.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.previewid != null && message.hasOwnProperty("previewid"))
                    if (!$util.isInteger(message.previewid) && !(message.previewid && $util.isInteger(message.previewid.low) && $util.isInteger(message.previewid.high)))
                        return "previewid: integer|Long expected";
                if (message.sortorder != null && message.hasOwnProperty("sortorder"))
                    if (!$util.isInteger(message.sortorder))
                        return "sortorder: integer expected";
                if (message.url != null && message.hasOwnProperty("url"))
                    if (!$util.isString(message.url))
                        return "url: string expected";
                if (message.size != null && message.hasOwnProperty("size"))
                    if (!$util.isInteger(message.size))
                        return "size: integer expected";
                if (message.filename != null && message.hasOwnProperty("filename"))
                    if (!$util.isString(message.filename))
                        return "filename: string expected";
                if (message.youtubevideoid != null && message.hasOwnProperty("youtubevideoid"))
                    if (!$util.isString(message.youtubevideoid))
                        return "youtubevideoid: string expected";
                return null;
            };
    
            /**
             * Creates a Preview message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof PublishedFileDetails.Preview
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {PublishedFileDetails.Preview} Preview
             */
            Preview.fromObject = function fromObject(object) {
                if (object instanceof $root.PublishedFileDetails.Preview)
                    return object;
                var message = new $root.PublishedFileDetails.Preview();
                if (object.previewid != null)
                    if ($util.Long)
                        (message.previewid = $util.Long.fromValue(object.previewid)).unsigned = true;
                    else if (typeof object.previewid === "string")
                        message.previewid = parseInt(object.previewid, 10);
                    else if (typeof object.previewid === "number")
                        message.previewid = object.previewid;
                    else if (typeof object.previewid === "object")
                        message.previewid = new $util.LongBits(object.previewid.low >>> 0, object.previewid.high >>> 0).toNumber(true);
                if (object.sortorder != null)
                    message.sortorder = object.sortorder >>> 0;
                if (object.url != null)
                    message.url = String(object.url);
                if (object.size != null)
                    message.size = object.size >>> 0;
                if (object.filename != null)
                    message.filename = String(object.filename);
                if (object.youtubevideoid != null)
                    message.youtubevideoid = String(object.youtubevideoid);
                return message;
            };
    
            /**
             * Creates a plain object from a Preview message. Also converts values to other types if specified.
             * @function toObject
             * @memberof PublishedFileDetails.Preview
             * @static
             * @param {PublishedFileDetails.Preview} message Preview
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Preview.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.previewid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.previewid = options.longs === String ? "0" : 0;
                    object.sortorder = 0;
                    object.url = "";
                    object.size = 0;
                    object.filename = "";
                    object.youtubevideoid = "";
                }
                if (message.previewid != null && message.hasOwnProperty("previewid"))
                    if (typeof message.previewid === "number")
                        object.previewid = options.longs === String ? String(message.previewid) : message.previewid;
                    else
                        object.previewid = options.longs === String ? $util.Long.prototype.toString.call(message.previewid) : options.longs === Number ? new $util.LongBits(message.previewid.low >>> 0, message.previewid.high >>> 0).toNumber(true) : message.previewid;
                if (message.sortorder != null && message.hasOwnProperty("sortorder"))
                    object.sortorder = message.sortorder;
                if (message.url != null && message.hasOwnProperty("url"))
                    object.url = message.url;
                if (message.size != null && message.hasOwnProperty("size"))
                    object.size = message.size;
                if (message.filename != null && message.hasOwnProperty("filename"))
                    object.filename = message.filename;
                if (message.youtubevideoid != null && message.hasOwnProperty("youtubevideoid"))
                    object.youtubevideoid = message.youtubevideoid;
                return object;
            };
    
            /**
             * Converts this Preview to JSON.
             * @function toJSON
             * @memberof PublishedFileDetails.Preview
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Preview.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Preview;
        })();
    
        PublishedFileDetails.Child = (function() {
    
            /**
             * Properties of a Child.
             * @memberof PublishedFileDetails
             * @interface IChild
             * @property {number|Long|null} [publishedfileid] Child publishedfileid
             * @property {number|null} [sortorder] Child sortorder
             * @property {number|null} [file_type] Child file_type
             */
    
            /**
             * Constructs a new Child.
             * @memberof PublishedFileDetails
             * @classdesc Represents a Child.
             * @implements IChild
             * @constructor
             * @param {PublishedFileDetails.IChild=} [properties] Properties to set
             */
            function Child(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Child publishedfileid.
             * @member {number|Long} publishedfileid
             * @memberof PublishedFileDetails.Child
             * @instance
             */
            Child.prototype.publishedfileid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Child sortorder.
             * @member {number} sortorder
             * @memberof PublishedFileDetails.Child
             * @instance
             */
            Child.prototype.sortorder = 0;
    
            /**
             * Child file_type.
             * @member {number} file_type
             * @memberof PublishedFileDetails.Child
             * @instance
             */
            Child.prototype.file_type = 0;
    
            /**
             * Creates a new Child instance using the specified properties.
             * @function create
             * @memberof PublishedFileDetails.Child
             * @static
             * @param {PublishedFileDetails.IChild=} [properties] Properties to set
             * @returns {PublishedFileDetails.Child} Child instance
             */
            Child.create = function create(properties) {
                return new Child(properties);
            };
    
            /**
             * Encodes the specified Child message. Does not implicitly {@link PublishedFileDetails.Child.verify|verify} messages.
             * @function encode
             * @memberof PublishedFileDetails.Child
             * @static
             * @param {PublishedFileDetails.IChild} message Child message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Child.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.publishedfileid != null && Object.hasOwnProperty.call(message, "publishedfileid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.publishedfileid);
                if (message.sortorder != null && Object.hasOwnProperty.call(message, "sortorder"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.sortorder);
                if (message.file_type != null && Object.hasOwnProperty.call(message, "file_type"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.file_type);
                return writer;
            };
    
            /**
             * Encodes the specified Child message, length delimited. Does not implicitly {@link PublishedFileDetails.Child.verify|verify} messages.
             * @function encodeDelimited
             * @memberof PublishedFileDetails.Child
             * @static
             * @param {PublishedFileDetails.IChild} message Child message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Child.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Child message from the specified reader or buffer.
             * @function decode
             * @memberof PublishedFileDetails.Child
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {PublishedFileDetails.Child} Child
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Child.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublishedFileDetails.Child();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.publishedfileid = reader.uint64();
                        break;
                    case 2:
                        message.sortorder = reader.uint32();
                        break;
                    case 3:
                        message.file_type = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Child message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof PublishedFileDetails.Child
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {PublishedFileDetails.Child} Child
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Child.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Child message.
             * @function verify
             * @memberof PublishedFileDetails.Child
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Child.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                    if (!$util.isInteger(message.publishedfileid) && !(message.publishedfileid && $util.isInteger(message.publishedfileid.low) && $util.isInteger(message.publishedfileid.high)))
                        return "publishedfileid: integer|Long expected";
                if (message.sortorder != null && message.hasOwnProperty("sortorder"))
                    if (!$util.isInteger(message.sortorder))
                        return "sortorder: integer expected";
                if (message.file_type != null && message.hasOwnProperty("file_type"))
                    if (!$util.isInteger(message.file_type))
                        return "file_type: integer expected";
                return null;
            };
    
            /**
             * Creates a Child message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof PublishedFileDetails.Child
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {PublishedFileDetails.Child} Child
             */
            Child.fromObject = function fromObject(object) {
                if (object instanceof $root.PublishedFileDetails.Child)
                    return object;
                var message = new $root.PublishedFileDetails.Child();
                if (object.publishedfileid != null)
                    if ($util.Long)
                        (message.publishedfileid = $util.Long.fromValue(object.publishedfileid)).unsigned = true;
                    else if (typeof object.publishedfileid === "string")
                        message.publishedfileid = parseInt(object.publishedfileid, 10);
                    else if (typeof object.publishedfileid === "number")
                        message.publishedfileid = object.publishedfileid;
                    else if (typeof object.publishedfileid === "object")
                        message.publishedfileid = new $util.LongBits(object.publishedfileid.low >>> 0, object.publishedfileid.high >>> 0).toNumber(true);
                if (object.sortorder != null)
                    message.sortorder = object.sortorder >>> 0;
                if (object.file_type != null)
                    message.file_type = object.file_type >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Child message. Also converts values to other types if specified.
             * @function toObject
             * @memberof PublishedFileDetails.Child
             * @static
             * @param {PublishedFileDetails.Child} message Child
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Child.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.publishedfileid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.publishedfileid = options.longs === String ? "0" : 0;
                    object.sortorder = 0;
                    object.file_type = 0;
                }
                if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                    if (typeof message.publishedfileid === "number")
                        object.publishedfileid = options.longs === String ? String(message.publishedfileid) : message.publishedfileid;
                    else
                        object.publishedfileid = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileid) : options.longs === Number ? new $util.LongBits(message.publishedfileid.low >>> 0, message.publishedfileid.high >>> 0).toNumber(true) : message.publishedfileid;
                if (message.sortorder != null && message.hasOwnProperty("sortorder"))
                    object.sortorder = message.sortorder;
                if (message.file_type != null && message.hasOwnProperty("file_type"))
                    object.file_type = message.file_type;
                return object;
            };
    
            /**
             * Converts this Child to JSON.
             * @function toJSON
             * @memberof PublishedFileDetails.Child
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Child.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Child;
        })();
    
        PublishedFileDetails.KVTag = (function() {
    
            /**
             * Properties of a KVTag.
             * @memberof PublishedFileDetails
             * @interface IKVTag
             * @property {string|null} [key] KVTag key
             * @property {string|null} [value] KVTag value
             */
    
            /**
             * Constructs a new KVTag.
             * @memberof PublishedFileDetails
             * @classdesc Represents a KVTag.
             * @implements IKVTag
             * @constructor
             * @param {PublishedFileDetails.IKVTag=} [properties] Properties to set
             */
            function KVTag(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * KVTag key.
             * @member {string} key
             * @memberof PublishedFileDetails.KVTag
             * @instance
             */
            KVTag.prototype.key = "";
    
            /**
             * KVTag value.
             * @member {string} value
             * @memberof PublishedFileDetails.KVTag
             * @instance
             */
            KVTag.prototype.value = "";
    
            /**
             * Creates a new KVTag instance using the specified properties.
             * @function create
             * @memberof PublishedFileDetails.KVTag
             * @static
             * @param {PublishedFileDetails.IKVTag=} [properties] Properties to set
             * @returns {PublishedFileDetails.KVTag} KVTag instance
             */
            KVTag.create = function create(properties) {
                return new KVTag(properties);
            };
    
            /**
             * Encodes the specified KVTag message. Does not implicitly {@link PublishedFileDetails.KVTag.verify|verify} messages.
             * @function encode
             * @memberof PublishedFileDetails.KVTag
             * @static
             * @param {PublishedFileDetails.IKVTag} message KVTag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KVTag.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified KVTag message, length delimited. Does not implicitly {@link PublishedFileDetails.KVTag.verify|verify} messages.
             * @function encodeDelimited
             * @memberof PublishedFileDetails.KVTag
             * @static
             * @param {PublishedFileDetails.IKVTag} message KVTag message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KVTag.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a KVTag message from the specified reader or buffer.
             * @function decode
             * @memberof PublishedFileDetails.KVTag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {PublishedFileDetails.KVTag} KVTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KVTag.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublishedFileDetails.KVTag();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.string();
                        break;
                    case 2:
                        message.value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a KVTag message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof PublishedFileDetails.KVTag
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {PublishedFileDetails.KVTag} KVTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KVTag.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a KVTag message.
             * @function verify
             * @memberof PublishedFileDetails.KVTag
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            KVTag.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };
    
            /**
             * Creates a KVTag message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof PublishedFileDetails.KVTag
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {PublishedFileDetails.KVTag} KVTag
             */
            KVTag.fromObject = function fromObject(object) {
                if (object instanceof $root.PublishedFileDetails.KVTag)
                    return object;
                var message = new $root.PublishedFileDetails.KVTag();
                if (object.key != null)
                    message.key = String(object.key);
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };
    
            /**
             * Creates a plain object from a KVTag message. Also converts values to other types if specified.
             * @function toObject
             * @memberof PublishedFileDetails.KVTag
             * @static
             * @param {PublishedFileDetails.KVTag} message KVTag
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            KVTag.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.key = "";
                    object.value = "";
                }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };
    
            /**
             * Converts this KVTag to JSON.
             * @function toJSON
             * @memberof PublishedFileDetails.KVTag
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            KVTag.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return KVTag;
        })();
    
        PublishedFileDetails.VoteData = (function() {
    
            /**
             * Properties of a VoteData.
             * @memberof PublishedFileDetails
             * @interface IVoteData
             * @property {number|null} [score] VoteData score
             * @property {number|null} [votes_up] VoteData votes_up
             * @property {number|null} [votes_down] VoteData votes_down
             */
    
            /**
             * Constructs a new VoteData.
             * @memberof PublishedFileDetails
             * @classdesc Represents a VoteData.
             * @implements IVoteData
             * @constructor
             * @param {PublishedFileDetails.IVoteData=} [properties] Properties to set
             */
            function VoteData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * VoteData score.
             * @member {number} score
             * @memberof PublishedFileDetails.VoteData
             * @instance
             */
            VoteData.prototype.score = 0;
    
            /**
             * VoteData votes_up.
             * @member {number} votes_up
             * @memberof PublishedFileDetails.VoteData
             * @instance
             */
            VoteData.prototype.votes_up = 0;
    
            /**
             * VoteData votes_down.
             * @member {number} votes_down
             * @memberof PublishedFileDetails.VoteData
             * @instance
             */
            VoteData.prototype.votes_down = 0;
    
            /**
             * Creates a new VoteData instance using the specified properties.
             * @function create
             * @memberof PublishedFileDetails.VoteData
             * @static
             * @param {PublishedFileDetails.IVoteData=} [properties] Properties to set
             * @returns {PublishedFileDetails.VoteData} VoteData instance
             */
            VoteData.create = function create(properties) {
                return new VoteData(properties);
            };
    
            /**
             * Encodes the specified VoteData message. Does not implicitly {@link PublishedFileDetails.VoteData.verify|verify} messages.
             * @function encode
             * @memberof PublishedFileDetails.VoteData
             * @static
             * @param {PublishedFileDetails.IVoteData} message VoteData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VoteData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.score);
                if (message.votes_up != null && Object.hasOwnProperty.call(message, "votes_up"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.votes_up);
                if (message.votes_down != null && Object.hasOwnProperty.call(message, "votes_down"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.votes_down);
                return writer;
            };
    
            /**
             * Encodes the specified VoteData message, length delimited. Does not implicitly {@link PublishedFileDetails.VoteData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof PublishedFileDetails.VoteData
             * @static
             * @param {PublishedFileDetails.IVoteData} message VoteData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VoteData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a VoteData message from the specified reader or buffer.
             * @function decode
             * @memberof PublishedFileDetails.VoteData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {PublishedFileDetails.VoteData} VoteData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VoteData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublishedFileDetails.VoteData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.score = reader.float();
                        break;
                    case 2:
                        message.votes_up = reader.uint32();
                        break;
                    case 3:
                        message.votes_down = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a VoteData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof PublishedFileDetails.VoteData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {PublishedFileDetails.VoteData} VoteData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VoteData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a VoteData message.
             * @function verify
             * @memberof PublishedFileDetails.VoteData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VoteData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.score != null && message.hasOwnProperty("score"))
                    if (typeof message.score !== "number")
                        return "score: number expected";
                if (message.votes_up != null && message.hasOwnProperty("votes_up"))
                    if (!$util.isInteger(message.votes_up))
                        return "votes_up: integer expected";
                if (message.votes_down != null && message.hasOwnProperty("votes_down"))
                    if (!$util.isInteger(message.votes_down))
                        return "votes_down: integer expected";
                return null;
            };
    
            /**
             * Creates a VoteData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof PublishedFileDetails.VoteData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {PublishedFileDetails.VoteData} VoteData
             */
            VoteData.fromObject = function fromObject(object) {
                if (object instanceof $root.PublishedFileDetails.VoteData)
                    return object;
                var message = new $root.PublishedFileDetails.VoteData();
                if (object.score != null)
                    message.score = Number(object.score);
                if (object.votes_up != null)
                    message.votes_up = object.votes_up >>> 0;
                if (object.votes_down != null)
                    message.votes_down = object.votes_down >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a VoteData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof PublishedFileDetails.VoteData
             * @static
             * @param {PublishedFileDetails.VoteData} message VoteData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VoteData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.score = 0;
                    object.votes_up = 0;
                    object.votes_down = 0;
                }
                if (message.score != null && message.hasOwnProperty("score"))
                    object.score = options.json && !isFinite(message.score) ? String(message.score) : message.score;
                if (message.votes_up != null && message.hasOwnProperty("votes_up"))
                    object.votes_up = message.votes_up;
                if (message.votes_down != null && message.hasOwnProperty("votes_down"))
                    object.votes_down = message.votes_down;
                return object;
            };
    
            /**
             * Converts this VoteData to JSON.
             * @function toJSON
             * @memberof PublishedFileDetails.VoteData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VoteData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return VoteData;
        })();
    
        return PublishedFileDetails;
    })();
    
    $root.CPublishedFile_GetDetails_Response = (function() {
    
        /**
         * Properties of a CPublishedFile_GetDetails_Response.
         * @exports ICPublishedFile_GetDetails_Response
         * @interface ICPublishedFile_GetDetails_Response
         * @property {Array.<IPublishedFileDetails>|null} [publishedfiledetails] CPublishedFile_GetDetails_Response publishedfiledetails
         */
    
        /**
         * Constructs a new CPublishedFile_GetDetails_Response.
         * @exports CPublishedFile_GetDetails_Response
         * @classdesc Represents a CPublishedFile_GetDetails_Response.
         * @implements ICPublishedFile_GetDetails_Response
         * @constructor
         * @param {ICPublishedFile_GetDetails_Response=} [properties] Properties to set
         */
        function CPublishedFile_GetDetails_Response(properties) {
            this.publishedfiledetails = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_GetDetails_Response publishedfiledetails.
         * @member {Array.<IPublishedFileDetails>} publishedfiledetails
         * @memberof CPublishedFile_GetDetails_Response
         * @instance
         */
        CPublishedFile_GetDetails_Response.prototype.publishedfiledetails = $util.emptyArray;
    
        /**
         * Creates a new CPublishedFile_GetDetails_Response instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_GetDetails_Response
         * @static
         * @param {ICPublishedFile_GetDetails_Response=} [properties] Properties to set
         * @returns {CPublishedFile_GetDetails_Response} CPublishedFile_GetDetails_Response instance
         */
        CPublishedFile_GetDetails_Response.create = function create(properties) {
            return new CPublishedFile_GetDetails_Response(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_GetDetails_Response message. Does not implicitly {@link CPublishedFile_GetDetails_Response.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_GetDetails_Response
         * @static
         * @param {ICPublishedFile_GetDetails_Response} message CPublishedFile_GetDetails_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_GetDetails_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publishedfiledetails != null && message.publishedfiledetails.length)
                for (var i = 0; i < message.publishedfiledetails.length; ++i)
                    $root.PublishedFileDetails.encode(message.publishedfiledetails[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_GetDetails_Response message, length delimited. Does not implicitly {@link CPublishedFile_GetDetails_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_GetDetails_Response
         * @static
         * @param {ICPublishedFile_GetDetails_Response} message CPublishedFile_GetDetails_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_GetDetails_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_GetDetails_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_GetDetails_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_GetDetails_Response} CPublishedFile_GetDetails_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_GetDetails_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_GetDetails_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.publishedfiledetails && message.publishedfiledetails.length))
                        message.publishedfiledetails = [];
                    message.publishedfiledetails.push($root.PublishedFileDetails.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPublishedFile_GetDetails_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_GetDetails_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_GetDetails_Response} CPublishedFile_GetDetails_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_GetDetails_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_GetDetails_Response message.
         * @function verify
         * @memberof CPublishedFile_GetDetails_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_GetDetails_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publishedfiledetails != null && message.hasOwnProperty("publishedfiledetails")) {
                if (!Array.isArray(message.publishedfiledetails))
                    return "publishedfiledetails: array expected";
                for (var i = 0; i < message.publishedfiledetails.length; ++i) {
                    var error = $root.PublishedFileDetails.verify(message.publishedfiledetails[i]);
                    if (error)
                        return "publishedfiledetails." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CPublishedFile_GetDetails_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_GetDetails_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_GetDetails_Response} CPublishedFile_GetDetails_Response
         */
        CPublishedFile_GetDetails_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_GetDetails_Response)
                return object;
            var message = new $root.CPublishedFile_GetDetails_Response();
            if (object.publishedfiledetails) {
                if (!Array.isArray(object.publishedfiledetails))
                    throw TypeError(".CPublishedFile_GetDetails_Response.publishedfiledetails: array expected");
                message.publishedfiledetails = [];
                for (var i = 0; i < object.publishedfiledetails.length; ++i) {
                    if (typeof object.publishedfiledetails[i] !== "object")
                        throw TypeError(".CPublishedFile_GetDetails_Response.publishedfiledetails: object expected");
                    message.publishedfiledetails[i] = $root.PublishedFileDetails.fromObject(object.publishedfiledetails[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_GetDetails_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_GetDetails_Response
         * @static
         * @param {CPublishedFile_GetDetails_Response} message CPublishedFile_GetDetails_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_GetDetails_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.publishedfiledetails = [];
            if (message.publishedfiledetails && message.publishedfiledetails.length) {
                object.publishedfiledetails = [];
                for (var j = 0; j < message.publishedfiledetails.length; ++j)
                    object.publishedfiledetails[j] = $root.PublishedFileDetails.toObject(message.publishedfiledetails[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CPublishedFile_GetDetails_Response to JSON.
         * @function toJSON
         * @memberof CPublishedFile_GetDetails_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_GetDetails_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPublishedFile_GetDetails_Response;
    })();
    
    $root.CPublishedFile_GetUserFiles_Request = (function() {
    
        /**
         * Properties of a CPublishedFile_GetUserFiles_Request.
         * @exports ICPublishedFile_GetUserFiles_Request
         * @interface ICPublishedFile_GetUserFiles_Request
         * @property {number|null} [appid] CPublishedFile_GetUserFiles_Request appid
         * @property {number|null} [page] CPublishedFile_GetUserFiles_Request page
         * @property {number|null} [numperpage] CPublishedFile_GetUserFiles_Request numperpage
         * @property {string|null} [sortmethod] CPublishedFile_GetUserFiles_Request sortmethod
         * @property {boolean|null} [totalonly] CPublishedFile_GetUserFiles_Request totalonly
         * @property {number|null} [privacy] CPublishedFile_GetUserFiles_Request privacy
         * @property {boolean|null} [ids_only] CPublishedFile_GetUserFiles_Request ids_only
         * @property {Array.<string>|null} [requiredtags] CPublishedFile_GetUserFiles_Request requiredtags
         * @property {Array.<string>|null} [excludedtags] CPublishedFile_GetUserFiles_Request excludedtags
         */
    
        /**
         * Constructs a new CPublishedFile_GetUserFiles_Request.
         * @exports CPublishedFile_GetUserFiles_Request
         * @classdesc Represents a CPublishedFile_GetUserFiles_Request.
         * @implements ICPublishedFile_GetUserFiles_Request
         * @constructor
         * @param {ICPublishedFile_GetUserFiles_Request=} [properties] Properties to set
         */
        function CPublishedFile_GetUserFiles_Request(properties) {
            this.requiredtags = [];
            this.excludedtags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_GetUserFiles_Request appid.
         * @member {number} appid
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.appid = 0;
    
        /**
         * CPublishedFile_GetUserFiles_Request page.
         * @member {number} page
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.page = 1;
    
        /**
         * CPublishedFile_GetUserFiles_Request numperpage.
         * @member {number} numperpage
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.numperpage = 1;
    
        /**
         * CPublishedFile_GetUserFiles_Request sortmethod.
         * @member {string} sortmethod
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.sortmethod = "lastupdated";
    
        /**
         * CPublishedFile_GetUserFiles_Request totalonly.
         * @member {boolean} totalonly
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.totalonly = false;
    
        /**
         * CPublishedFile_GetUserFiles_Request privacy.
         * @member {number} privacy
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.privacy = 0;
    
        /**
         * CPublishedFile_GetUserFiles_Request ids_only.
         * @member {boolean} ids_only
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.ids_only = false;
    
        /**
         * CPublishedFile_GetUserFiles_Request requiredtags.
         * @member {Array.<string>} requiredtags
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.requiredtags = $util.emptyArray;
    
        /**
         * CPublishedFile_GetUserFiles_Request excludedtags.
         * @member {Array.<string>} excludedtags
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         */
        CPublishedFile_GetUserFiles_Request.prototype.excludedtags = $util.emptyArray;
    
        /**
         * Creates a new CPublishedFile_GetUserFiles_Request instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_GetUserFiles_Request
         * @static
         * @param {ICPublishedFile_GetUserFiles_Request=} [properties] Properties to set
         * @returns {CPublishedFile_GetUserFiles_Request} CPublishedFile_GetUserFiles_Request instance
         */
        CPublishedFile_GetUserFiles_Request.create = function create(properties) {
            return new CPublishedFile_GetUserFiles_Request(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_GetUserFiles_Request message. Does not implicitly {@link CPublishedFile_GetUserFiles_Request.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_GetUserFiles_Request
         * @static
         * @param {ICPublishedFile_GetUserFiles_Request} message CPublishedFile_GetUserFiles_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_GetUserFiles_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.page);
            if (message.numperpage != null && Object.hasOwnProperty.call(message, "numperpage"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.numperpage);
            if (message.sortmethod != null && Object.hasOwnProperty.call(message, "sortmethod"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.sortmethod);
            if (message.totalonly != null && Object.hasOwnProperty.call(message, "totalonly"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.totalonly);
            if (message.privacy != null && Object.hasOwnProperty.call(message, "privacy"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.privacy);
            if (message.ids_only != null && Object.hasOwnProperty.call(message, "ids_only"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.ids_only);
            if (message.requiredtags != null && message.requiredtags.length)
                for (var i = 0; i < message.requiredtags.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.requiredtags[i]);
            if (message.excludedtags != null && message.excludedtags.length)
                for (var i = 0; i < message.excludedtags.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.excludedtags[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_GetUserFiles_Request message, length delimited. Does not implicitly {@link CPublishedFile_GetUserFiles_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_GetUserFiles_Request
         * @static
         * @param {ICPublishedFile_GetUserFiles_Request} message CPublishedFile_GetUserFiles_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_GetUserFiles_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_GetUserFiles_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_GetUserFiles_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_GetUserFiles_Request} CPublishedFile_GetUserFiles_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_GetUserFiles_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_GetUserFiles_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 3:
                    message.page = reader.uint32();
                    break;
                case 4:
                    message.numperpage = reader.uint32();
                    break;
                case 6:
                    message.sortmethod = reader.string();
                    break;
                case 7:
                    message.totalonly = reader.bool();
                    break;
                case 9:
                    message.privacy = reader.uint32();
                    break;
                case 10:
                    message.ids_only = reader.bool();
                    break;
                case 11:
                    if (!(message.requiredtags && message.requiredtags.length))
                        message.requiredtags = [];
                    message.requiredtags.push(reader.string());
                    break;
                case 12:
                    if (!(message.excludedtags && message.excludedtags.length))
                        message.excludedtags = [];
                    message.excludedtags.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPublishedFile_GetUserFiles_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_GetUserFiles_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_GetUserFiles_Request} CPublishedFile_GetUserFiles_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_GetUserFiles_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_GetUserFiles_Request message.
         * @function verify
         * @memberof CPublishedFile_GetUserFiles_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_GetUserFiles_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.numperpage != null && message.hasOwnProperty("numperpage"))
                if (!$util.isInteger(message.numperpage))
                    return "numperpage: integer expected";
            if (message.sortmethod != null && message.hasOwnProperty("sortmethod"))
                if (!$util.isString(message.sortmethod))
                    return "sortmethod: string expected";
            if (message.totalonly != null && message.hasOwnProperty("totalonly"))
                if (typeof message.totalonly !== "boolean")
                    return "totalonly: boolean expected";
            if (message.privacy != null && message.hasOwnProperty("privacy"))
                if (!$util.isInteger(message.privacy))
                    return "privacy: integer expected";
            if (message.ids_only != null && message.hasOwnProperty("ids_only"))
                if (typeof message.ids_only !== "boolean")
                    return "ids_only: boolean expected";
            if (message.requiredtags != null && message.hasOwnProperty("requiredtags")) {
                if (!Array.isArray(message.requiredtags))
                    return "requiredtags: array expected";
                for (var i = 0; i < message.requiredtags.length; ++i)
                    if (!$util.isString(message.requiredtags[i]))
                        return "requiredtags: string[] expected";
            }
            if (message.excludedtags != null && message.hasOwnProperty("excludedtags")) {
                if (!Array.isArray(message.excludedtags))
                    return "excludedtags: array expected";
                for (var i = 0; i < message.excludedtags.length; ++i)
                    if (!$util.isString(message.excludedtags[i]))
                        return "excludedtags: string[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CPublishedFile_GetUserFiles_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_GetUserFiles_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_GetUserFiles_Request} CPublishedFile_GetUserFiles_Request
         */
        CPublishedFile_GetUserFiles_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_GetUserFiles_Request)
                return object;
            var message = new $root.CPublishedFile_GetUserFiles_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.page != null)
                message.page = object.page >>> 0;
            if (object.numperpage != null)
                message.numperpage = object.numperpage >>> 0;
            if (object.sortmethod != null)
                message.sortmethod = String(object.sortmethod);
            if (object.totalonly != null)
                message.totalonly = Boolean(object.totalonly);
            if (object.privacy != null)
                message.privacy = object.privacy >>> 0;
            if (object.ids_only != null)
                message.ids_only = Boolean(object.ids_only);
            if (object.requiredtags) {
                if (!Array.isArray(object.requiredtags))
                    throw TypeError(".CPublishedFile_GetUserFiles_Request.requiredtags: array expected");
                message.requiredtags = [];
                for (var i = 0; i < object.requiredtags.length; ++i)
                    message.requiredtags[i] = String(object.requiredtags[i]);
            }
            if (object.excludedtags) {
                if (!Array.isArray(object.excludedtags))
                    throw TypeError(".CPublishedFile_GetUserFiles_Request.excludedtags: array expected");
                message.excludedtags = [];
                for (var i = 0; i < object.excludedtags.length; ++i)
                    message.excludedtags[i] = String(object.excludedtags[i]);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_GetUserFiles_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_GetUserFiles_Request
         * @static
         * @param {CPublishedFile_GetUserFiles_Request} message CPublishedFile_GetUserFiles_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_GetUserFiles_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.requiredtags = [];
                object.excludedtags = [];
            }
            if (options.defaults) {
                object.appid = 0;
                object.page = 1;
                object.numperpage = 1;
                object.sortmethod = "lastupdated";
                object.totalonly = false;
                object.privacy = 0;
                object.ids_only = false;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.numperpage != null && message.hasOwnProperty("numperpage"))
                object.numperpage = message.numperpage;
            if (message.sortmethod != null && message.hasOwnProperty("sortmethod"))
                object.sortmethod = message.sortmethod;
            if (message.totalonly != null && message.hasOwnProperty("totalonly"))
                object.totalonly = message.totalonly;
            if (message.privacy != null && message.hasOwnProperty("privacy"))
                object.privacy = message.privacy;
            if (message.ids_only != null && message.hasOwnProperty("ids_only"))
                object.ids_only = message.ids_only;
            if (message.requiredtags && message.requiredtags.length) {
                object.requiredtags = [];
                for (var j = 0; j < message.requiredtags.length; ++j)
                    object.requiredtags[j] = message.requiredtags[j];
            }
            if (message.excludedtags && message.excludedtags.length) {
                object.excludedtags = [];
                for (var j = 0; j < message.excludedtags.length; ++j)
                    object.excludedtags[j] = message.excludedtags[j];
            }
            return object;
        };
    
        /**
         * Converts this CPublishedFile_GetUserFiles_Request to JSON.
         * @function toJSON
         * @memberof CPublishedFile_GetUserFiles_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_GetUserFiles_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPublishedFile_GetUserFiles_Request;
    })();
    
    $root.CPublishedFile_GetUserFiles_Response = (function() {
    
        /**
         * Properties of a CPublishedFile_GetUserFiles_Response.
         * @exports ICPublishedFile_GetUserFiles_Response
         * @interface ICPublishedFile_GetUserFiles_Response
         * @property {number|null} [total] CPublishedFile_GetUserFiles_Response total
         * @property {number|null} [startindex] CPublishedFile_GetUserFiles_Response startindex
         * @property {Array.<IPublishedFileDetails>|null} [publishedfiledetails] CPublishedFile_GetUserFiles_Response publishedfiledetails
         * @property {Array.<CPublishedFile_GetUserFiles_Response.IApp>|null} [apps] CPublishedFile_GetUserFiles_Response apps
         */
    
        /**
         * Constructs a new CPublishedFile_GetUserFiles_Response.
         * @exports CPublishedFile_GetUserFiles_Response
         * @classdesc Represents a CPublishedFile_GetUserFiles_Response.
         * @implements ICPublishedFile_GetUserFiles_Response
         * @constructor
         * @param {ICPublishedFile_GetUserFiles_Response=} [properties] Properties to set
         */
        function CPublishedFile_GetUserFiles_Response(properties) {
            this.publishedfiledetails = [];
            this.apps = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_GetUserFiles_Response total.
         * @member {number} total
         * @memberof CPublishedFile_GetUserFiles_Response
         * @instance
         */
        CPublishedFile_GetUserFiles_Response.prototype.total = 0;
    
        /**
         * CPublishedFile_GetUserFiles_Response startindex.
         * @member {number} startindex
         * @memberof CPublishedFile_GetUserFiles_Response
         * @instance
         */
        CPublishedFile_GetUserFiles_Response.prototype.startindex = 0;
    
        /**
         * CPublishedFile_GetUserFiles_Response publishedfiledetails.
         * @member {Array.<IPublishedFileDetails>} publishedfiledetails
         * @memberof CPublishedFile_GetUserFiles_Response
         * @instance
         */
        CPublishedFile_GetUserFiles_Response.prototype.publishedfiledetails = $util.emptyArray;
    
        /**
         * CPublishedFile_GetUserFiles_Response apps.
         * @member {Array.<CPublishedFile_GetUserFiles_Response.IApp>} apps
         * @memberof CPublishedFile_GetUserFiles_Response
         * @instance
         */
        CPublishedFile_GetUserFiles_Response.prototype.apps = $util.emptyArray;
    
        /**
         * Creates a new CPublishedFile_GetUserFiles_Response instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_GetUserFiles_Response
         * @static
         * @param {ICPublishedFile_GetUserFiles_Response=} [properties] Properties to set
         * @returns {CPublishedFile_GetUserFiles_Response} CPublishedFile_GetUserFiles_Response instance
         */
        CPublishedFile_GetUserFiles_Response.create = function create(properties) {
            return new CPublishedFile_GetUserFiles_Response(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_GetUserFiles_Response message. Does not implicitly {@link CPublishedFile_GetUserFiles_Response.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_GetUserFiles_Response
         * @static
         * @param {ICPublishedFile_GetUserFiles_Response} message CPublishedFile_GetUserFiles_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_GetUserFiles_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.total);
            if (message.startindex != null && Object.hasOwnProperty.call(message, "startindex"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.startindex);
            if (message.publishedfiledetails != null && message.publishedfiledetails.length)
                for (var i = 0; i < message.publishedfiledetails.length; ++i)
                    $root.PublishedFileDetails.encode(message.publishedfiledetails[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.apps != null && message.apps.length)
                for (var i = 0; i < message.apps.length; ++i)
                    $root.CPublishedFile_GetUserFiles_Response.App.encode(message.apps[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_GetUserFiles_Response message, length delimited. Does not implicitly {@link CPublishedFile_GetUserFiles_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_GetUserFiles_Response
         * @static
         * @param {ICPublishedFile_GetUserFiles_Response} message CPublishedFile_GetUserFiles_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_GetUserFiles_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_GetUserFiles_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_GetUserFiles_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_GetUserFiles_Response} CPublishedFile_GetUserFiles_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_GetUserFiles_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_GetUserFiles_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.total = reader.uint32();
                    break;
                case 2:
                    message.startindex = reader.uint32();
                    break;
                case 3:
                    if (!(message.publishedfiledetails && message.publishedfiledetails.length))
                        message.publishedfiledetails = [];
                    message.publishedfiledetails.push($root.PublishedFileDetails.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.apps && message.apps.length))
                        message.apps = [];
                    message.apps.push($root.CPublishedFile_GetUserFiles_Response.App.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPublishedFile_GetUserFiles_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_GetUserFiles_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_GetUserFiles_Response} CPublishedFile_GetUserFiles_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_GetUserFiles_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_GetUserFiles_Response message.
         * @function verify
         * @memberof CPublishedFile_GetUserFiles_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_GetUserFiles_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            if (message.startindex != null && message.hasOwnProperty("startindex"))
                if (!$util.isInteger(message.startindex))
                    return "startindex: integer expected";
            if (message.publishedfiledetails != null && message.hasOwnProperty("publishedfiledetails")) {
                if (!Array.isArray(message.publishedfiledetails))
                    return "publishedfiledetails: array expected";
                for (var i = 0; i < message.publishedfiledetails.length; ++i) {
                    var error = $root.PublishedFileDetails.verify(message.publishedfiledetails[i]);
                    if (error)
                        return "publishedfiledetails." + error;
                }
            }
            if (message.apps != null && message.hasOwnProperty("apps")) {
                if (!Array.isArray(message.apps))
                    return "apps: array expected";
                for (var i = 0; i < message.apps.length; ++i) {
                    var error = $root.CPublishedFile_GetUserFiles_Response.App.verify(message.apps[i]);
                    if (error)
                        return "apps." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CPublishedFile_GetUserFiles_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_GetUserFiles_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_GetUserFiles_Response} CPublishedFile_GetUserFiles_Response
         */
        CPublishedFile_GetUserFiles_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_GetUserFiles_Response)
                return object;
            var message = new $root.CPublishedFile_GetUserFiles_Response();
            if (object.total != null)
                message.total = object.total >>> 0;
            if (object.startindex != null)
                message.startindex = object.startindex >>> 0;
            if (object.publishedfiledetails) {
                if (!Array.isArray(object.publishedfiledetails))
                    throw TypeError(".CPublishedFile_GetUserFiles_Response.publishedfiledetails: array expected");
                message.publishedfiledetails = [];
                for (var i = 0; i < object.publishedfiledetails.length; ++i) {
                    if (typeof object.publishedfiledetails[i] !== "object")
                        throw TypeError(".CPublishedFile_GetUserFiles_Response.publishedfiledetails: object expected");
                    message.publishedfiledetails[i] = $root.PublishedFileDetails.fromObject(object.publishedfiledetails[i]);
                }
            }
            if (object.apps) {
                if (!Array.isArray(object.apps))
                    throw TypeError(".CPublishedFile_GetUserFiles_Response.apps: array expected");
                message.apps = [];
                for (var i = 0; i < object.apps.length; ++i) {
                    if (typeof object.apps[i] !== "object")
                        throw TypeError(".CPublishedFile_GetUserFiles_Response.apps: object expected");
                    message.apps[i] = $root.CPublishedFile_GetUserFiles_Response.App.fromObject(object.apps[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_GetUserFiles_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_GetUserFiles_Response
         * @static
         * @param {CPublishedFile_GetUserFiles_Response} message CPublishedFile_GetUserFiles_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_GetUserFiles_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.publishedfiledetails = [];
                object.apps = [];
            }
            if (options.defaults) {
                object.total = 0;
                object.startindex = 0;
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            if (message.startindex != null && message.hasOwnProperty("startindex"))
                object.startindex = message.startindex;
            if (message.publishedfiledetails && message.publishedfiledetails.length) {
                object.publishedfiledetails = [];
                for (var j = 0; j < message.publishedfiledetails.length; ++j)
                    object.publishedfiledetails[j] = $root.PublishedFileDetails.toObject(message.publishedfiledetails[j], options);
            }
            if (message.apps && message.apps.length) {
                object.apps = [];
                for (var j = 0; j < message.apps.length; ++j)
                    object.apps[j] = $root.CPublishedFile_GetUserFiles_Response.App.toObject(message.apps[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CPublishedFile_GetUserFiles_Response to JSON.
         * @function toJSON
         * @memberof CPublishedFile_GetUserFiles_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_GetUserFiles_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CPublishedFile_GetUserFiles_Response.App = (function() {
    
            /**
             * Properties of an App.
             * @memberof CPublishedFile_GetUserFiles_Response
             * @interface IApp
             * @property {number|null} [appid] App appid
             * @property {string|null} [name] App name
             * @property {number|null} [shortcutid] App shortcutid
             * @property {boolean|null} ["private"] App private
             */
    
            /**
             * Constructs a new App.
             * @memberof CPublishedFile_GetUserFiles_Response
             * @classdesc Represents an App.
             * @implements IApp
             * @constructor
             * @param {CPublishedFile_GetUserFiles_Response.IApp=} [properties] Properties to set
             */
            function App(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * App appid.
             * @member {number} appid
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @instance
             */
            App.prototype.appid = 0;
    
            /**
             * App name.
             * @member {string} name
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @instance
             */
            App.prototype.name = "";
    
            /**
             * App shortcutid.
             * @member {number} shortcutid
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @instance
             */
            App.prototype.shortcutid = 0;
    
            /**
             * App private.
             * @member {boolean} private
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @instance
             */
            App.prototype["private"] = false;
    
            /**
             * Creates a new App instance using the specified properties.
             * @function create
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @static
             * @param {CPublishedFile_GetUserFiles_Response.IApp=} [properties] Properties to set
             * @returns {CPublishedFile_GetUserFiles_Response.App} App instance
             */
            App.create = function create(properties) {
                return new App(properties);
            };
    
            /**
             * Encodes the specified App message. Does not implicitly {@link CPublishedFile_GetUserFiles_Response.App.verify|verify} messages.
             * @function encode
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @static
             * @param {CPublishedFile_GetUserFiles_Response.IApp} message App message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            App.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.shortcutid != null && Object.hasOwnProperty.call(message, "shortcutid"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.shortcutid);
                if (message["private"] != null && Object.hasOwnProperty.call(message, "private"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message["private"]);
                return writer;
            };
    
            /**
             * Encodes the specified App message, length delimited. Does not implicitly {@link CPublishedFile_GetUserFiles_Response.App.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @static
             * @param {CPublishedFile_GetUserFiles_Response.IApp} message App message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            App.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an App message from the specified reader or buffer.
             * @function decode
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CPublishedFile_GetUserFiles_Response.App} App
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            App.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_GetUserFiles_Response.App();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.appid = reader.uint32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.shortcutid = reader.uint32();
                        break;
                    case 4:
                        message["private"] = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an App message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CPublishedFile_GetUserFiles_Response.App} App
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            App.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an App message.
             * @function verify
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            App.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.appid != null && message.hasOwnProperty("appid"))
                    if (!$util.isInteger(message.appid))
                        return "appid: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.shortcutid != null && message.hasOwnProperty("shortcutid"))
                    if (!$util.isInteger(message.shortcutid))
                        return "shortcutid: integer expected";
                if (message["private"] != null && message.hasOwnProperty("private"))
                    if (typeof message["private"] !== "boolean")
                        return "private: boolean expected";
                return null;
            };
    
            /**
             * Creates an App message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CPublishedFile_GetUserFiles_Response.App} App
             */
            App.fromObject = function fromObject(object) {
                if (object instanceof $root.CPublishedFile_GetUserFiles_Response.App)
                    return object;
                var message = new $root.CPublishedFile_GetUserFiles_Response.App();
                if (object.appid != null)
                    message.appid = object.appid >>> 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.shortcutid != null)
                    message.shortcutid = object.shortcutid >>> 0;
                if (object["private"] != null)
                    message["private"] = Boolean(object["private"]);
                return message;
            };
    
            /**
             * Creates a plain object from an App message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @static
             * @param {CPublishedFile_GetUserFiles_Response.App} message App
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            App.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.appid = 0;
                    object.name = "";
                    object.shortcutid = 0;
                    object["private"] = false;
                }
                if (message.appid != null && message.hasOwnProperty("appid"))
                    object.appid = message.appid;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.shortcutid != null && message.hasOwnProperty("shortcutid"))
                    object.shortcutid = message.shortcutid;
                if (message["private"] != null && message.hasOwnProperty("private"))
                    object["private"] = message["private"];
                return object;
            };
    
            /**
             * Converts this App to JSON.
             * @function toJSON
             * @memberof CPublishedFile_GetUserFiles_Response.App
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            App.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return App;
        })();
    
        return CPublishedFile_GetUserFiles_Response;
    })();
    
    $root.CPublishedFile_Update_Request = (function() {
    
        /**
         * Properties of a CPublishedFile_Update_Request.
         * @exports ICPublishedFile_Update_Request
         * @interface ICPublishedFile_Update_Request
         * @property {number|null} [appid] CPublishedFile_Update_Request appid
         * @property {number|Long|null} [publishedfileid] CPublishedFile_Update_Request publishedfileid
         * @property {string|null} [title] CPublishedFile_Update_Request title
         * @property {string|null} [file_description] CPublishedFile_Update_Request file_description
         * @property {number|null} [visibility] CPublishedFile_Update_Request visibility
         * @property {Array.<string>|null} [tags] CPublishedFile_Update_Request tags
         * @property {string|null} [filename] CPublishedFile_Update_Request filename
         * @property {string|null} [preview_filename] CPublishedFile_Update_Request preview_filename
         */
    
        /**
         * Constructs a new CPublishedFile_Update_Request.
         * @exports CPublishedFile_Update_Request
         * @classdesc Represents a CPublishedFile_Update_Request.
         * @implements ICPublishedFile_Update_Request
         * @constructor
         * @param {ICPublishedFile_Update_Request=} [properties] Properties to set
         */
        function CPublishedFile_Update_Request(properties) {
            this.tags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_Update_Request appid.
         * @member {number} appid
         * @memberof CPublishedFile_Update_Request
         * @instance
         */
        CPublishedFile_Update_Request.prototype.appid = 0;
    
        /**
         * CPublishedFile_Update_Request publishedfileid.
         * @member {number|Long} publishedfileid
         * @memberof CPublishedFile_Update_Request
         * @instance
         */
        CPublishedFile_Update_Request.prototype.publishedfileid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CPublishedFile_Update_Request title.
         * @member {string} title
         * @memberof CPublishedFile_Update_Request
         * @instance
         */
        CPublishedFile_Update_Request.prototype.title = "";
    
        /**
         * CPublishedFile_Update_Request file_description.
         * @member {string} file_description
         * @memberof CPublishedFile_Update_Request
         * @instance
         */
        CPublishedFile_Update_Request.prototype.file_description = "";
    
        /**
         * CPublishedFile_Update_Request visibility.
         * @member {number} visibility
         * @memberof CPublishedFile_Update_Request
         * @instance
         */
        CPublishedFile_Update_Request.prototype.visibility = 0;
    
        /**
         * CPublishedFile_Update_Request tags.
         * @member {Array.<string>} tags
         * @memberof CPublishedFile_Update_Request
         * @instance
         */
        CPublishedFile_Update_Request.prototype.tags = $util.emptyArray;
    
        /**
         * CPublishedFile_Update_Request filename.
         * @member {string} filename
         * @memberof CPublishedFile_Update_Request
         * @instance
         */
        CPublishedFile_Update_Request.prototype.filename = "";
    
        /**
         * CPublishedFile_Update_Request preview_filename.
         * @member {string} preview_filename
         * @memberof CPublishedFile_Update_Request
         * @instance
         */
        CPublishedFile_Update_Request.prototype.preview_filename = "";
    
        /**
         * Creates a new CPublishedFile_Update_Request instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_Update_Request
         * @static
         * @param {ICPublishedFile_Update_Request=} [properties] Properties to set
         * @returns {CPublishedFile_Update_Request} CPublishedFile_Update_Request instance
         */
        CPublishedFile_Update_Request.create = function create(properties) {
            return new CPublishedFile_Update_Request(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_Update_Request message. Does not implicitly {@link CPublishedFile_Update_Request.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_Update_Request
         * @static
         * @param {ICPublishedFile_Update_Request} message CPublishedFile_Update_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Update_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.publishedfileid != null && Object.hasOwnProperty.call(message, "publishedfileid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.publishedfileid);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            if (message.file_description != null && Object.hasOwnProperty.call(message, "file_description"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.file_description);
            if (message.visibility != null && Object.hasOwnProperty.call(message, "visibility"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.visibility);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.tags[i]);
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.filename);
            if (message.preview_filename != null && Object.hasOwnProperty.call(message, "preview_filename"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.preview_filename);
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_Update_Request message, length delimited. Does not implicitly {@link CPublishedFile_Update_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_Update_Request
         * @static
         * @param {ICPublishedFile_Update_Request} message CPublishedFile_Update_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Update_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_Update_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_Update_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_Update_Request} CPublishedFile_Update_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Update_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_Update_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.publishedfileid = reader.fixed64();
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 4:
                    message.file_description = reader.string();
                    break;
                case 5:
                    message.visibility = reader.uint32();
                    break;
                case 6:
                    if (!(message.tags && message.tags.length))
                        message.tags = [];
                    message.tags.push(reader.string());
                    break;
                case 7:
                    message.filename = reader.string();
                    break;
                case 8:
                    message.preview_filename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPublishedFile_Update_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_Update_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_Update_Request} CPublishedFile_Update_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Update_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_Update_Request message.
         * @function verify
         * @memberof CPublishedFile_Update_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_Update_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (!$util.isInteger(message.publishedfileid) && !(message.publishedfileid && $util.isInteger(message.publishedfileid.low) && $util.isInteger(message.publishedfileid.high)))
                    return "publishedfileid: integer|Long expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.file_description != null && message.hasOwnProperty("file_description"))
                if (!$util.isString(message.file_description))
                    return "file_description: string expected";
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                if (!$util.isInteger(message.visibility))
                    return "visibility: integer expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i)
                    if (!$util.isString(message.tags[i]))
                        return "tags: string[] expected";
            }
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.preview_filename != null && message.hasOwnProperty("preview_filename"))
                if (!$util.isString(message.preview_filename))
                    return "preview_filename: string expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_Update_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_Update_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_Update_Request} CPublishedFile_Update_Request
         */
        CPublishedFile_Update_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_Update_Request)
                return object;
            var message = new $root.CPublishedFile_Update_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.publishedfileid != null)
                if ($util.Long)
                    (message.publishedfileid = $util.Long.fromValue(object.publishedfileid)).unsigned = false;
                else if (typeof object.publishedfileid === "string")
                    message.publishedfileid = parseInt(object.publishedfileid, 10);
                else if (typeof object.publishedfileid === "number")
                    message.publishedfileid = object.publishedfileid;
                else if (typeof object.publishedfileid === "object")
                    message.publishedfileid = new $util.LongBits(object.publishedfileid.low >>> 0, object.publishedfileid.high >>> 0).toNumber();
            if (object.title != null)
                message.title = String(object.title);
            if (object.file_description != null)
                message.file_description = String(object.file_description);
            if (object.visibility != null)
                message.visibility = object.visibility >>> 0;
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".CPublishedFile_Update_Request.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i)
                    message.tags[i] = String(object.tags[i]);
            }
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.preview_filename != null)
                message.preview_filename = String(object.preview_filename);
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_Update_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_Update_Request
         * @static
         * @param {CPublishedFile_Update_Request} message CPublishedFile_Update_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_Update_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tags = [];
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.publishedfileid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.publishedfileid = options.longs === String ? "0" : 0;
                object.title = "";
                object.file_description = "";
                object.visibility = 0;
                object.filename = "";
                object.preview_filename = "";
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (typeof message.publishedfileid === "number")
                    object.publishedfileid = options.longs === String ? String(message.publishedfileid) : message.publishedfileid;
                else
                    object.publishedfileid = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileid) : options.longs === Number ? new $util.LongBits(message.publishedfileid.low >>> 0, message.publishedfileid.high >>> 0).toNumber() : message.publishedfileid;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.file_description != null && message.hasOwnProperty("file_description"))
                object.file_description = message.file_description;
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                object.visibility = message.visibility;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = message.tags[j];
            }
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.preview_filename != null && message.hasOwnProperty("preview_filename"))
                object.preview_filename = message.preview_filename;
            return object;
        };
    
        /**
         * Converts this CPublishedFile_Update_Request to JSON.
         * @function toJSON
         * @memberof CPublishedFile_Update_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_Update_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPublishedFile_Update_Request;
    })();
    
    $root.CPublishedFile_Update_Response = (function() {
    
        /**
         * Properties of a CPublishedFile_Update_Response.
         * @exports ICPublishedFile_Update_Response
         * @interface ICPublishedFile_Update_Response
         */
    
        /**
         * Constructs a new CPublishedFile_Update_Response.
         * @exports CPublishedFile_Update_Response
         * @classdesc Represents a CPublishedFile_Update_Response.
         * @implements ICPublishedFile_Update_Response
         * @constructor
         * @param {ICPublishedFile_Update_Response=} [properties] Properties to set
         */
        function CPublishedFile_Update_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPublishedFile_Update_Response instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_Update_Response
         * @static
         * @param {ICPublishedFile_Update_Response=} [properties] Properties to set
         * @returns {CPublishedFile_Update_Response} CPublishedFile_Update_Response instance
         */
        CPublishedFile_Update_Response.create = function create(properties) {
            return new CPublishedFile_Update_Response(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_Update_Response message. Does not implicitly {@link CPublishedFile_Update_Response.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_Update_Response
         * @static
         * @param {ICPublishedFile_Update_Response} message CPublishedFile_Update_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Update_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_Update_Response message, length delimited. Does not implicitly {@link CPublishedFile_Update_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_Update_Response
         * @static
         * @param {ICPublishedFile_Update_Response} message CPublishedFile_Update_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_Update_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_Update_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_Update_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_Update_Response} CPublishedFile_Update_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Update_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_Update_Response();
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
         * Decodes a CPublishedFile_Update_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_Update_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_Update_Response} CPublishedFile_Update_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_Update_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_Update_Response message.
         * @function verify
         * @memberof CPublishedFile_Update_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_Update_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_Update_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_Update_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_Update_Response} CPublishedFile_Update_Response
         */
        CPublishedFile_Update_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_Update_Response)
                return object;
            return new $root.CPublishedFile_Update_Response();
        };
    
        /**
         * Creates a plain object from a CPublishedFile_Update_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_Update_Response
         * @static
         * @param {CPublishedFile_Update_Response} message CPublishedFile_Update_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_Update_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPublishedFile_Update_Response to JSON.
         * @function toJSON
         * @memberof CPublishedFile_Update_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_Update_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPublishedFile_Update_Response;
    })();
    
    $root.CPublishedFile_RefreshVotingQueue_Request = (function() {
    
        /**
         * Properties of a CPublishedFile_RefreshVotingQueue_Request.
         * @exports ICPublishedFile_RefreshVotingQueue_Request
         * @interface ICPublishedFile_RefreshVotingQueue_Request
         * @property {number|null} [appid] CPublishedFile_RefreshVotingQueue_Request appid
         * @property {number|null} [matching_file_type] CPublishedFile_RefreshVotingQueue_Request matching_file_type
         * @property {Array.<string>|null} [tags] CPublishedFile_RefreshVotingQueue_Request tags
         * @property {boolean|null} [match_all_tags] CPublishedFile_RefreshVotingQueue_Request match_all_tags
         * @property {Array.<string>|null} [excluded_tags] CPublishedFile_RefreshVotingQueue_Request excluded_tags
         * @property {number|null} [desired_queue_size] CPublishedFile_RefreshVotingQueue_Request desired_queue_size
         */
    
        /**
         * Constructs a new CPublishedFile_RefreshVotingQueue_Request.
         * @exports CPublishedFile_RefreshVotingQueue_Request
         * @classdesc Represents a CPublishedFile_RefreshVotingQueue_Request.
         * @implements ICPublishedFile_RefreshVotingQueue_Request
         * @constructor
         * @param {ICPublishedFile_RefreshVotingQueue_Request=} [properties] Properties to set
         */
        function CPublishedFile_RefreshVotingQueue_Request(properties) {
            this.tags = [];
            this.excluded_tags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CPublishedFile_RefreshVotingQueue_Request appid.
         * @member {number} appid
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @instance
         */
        CPublishedFile_RefreshVotingQueue_Request.prototype.appid = 0;
    
        /**
         * CPublishedFile_RefreshVotingQueue_Request matching_file_type.
         * @member {number} matching_file_type
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @instance
         */
        CPublishedFile_RefreshVotingQueue_Request.prototype.matching_file_type = 0;
    
        /**
         * CPublishedFile_RefreshVotingQueue_Request tags.
         * @member {Array.<string>} tags
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @instance
         */
        CPublishedFile_RefreshVotingQueue_Request.prototype.tags = $util.emptyArray;
    
        /**
         * CPublishedFile_RefreshVotingQueue_Request match_all_tags.
         * @member {boolean} match_all_tags
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @instance
         */
        CPublishedFile_RefreshVotingQueue_Request.prototype.match_all_tags = true;
    
        /**
         * CPublishedFile_RefreshVotingQueue_Request excluded_tags.
         * @member {Array.<string>} excluded_tags
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @instance
         */
        CPublishedFile_RefreshVotingQueue_Request.prototype.excluded_tags = $util.emptyArray;
    
        /**
         * CPublishedFile_RefreshVotingQueue_Request desired_queue_size.
         * @member {number} desired_queue_size
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @instance
         */
        CPublishedFile_RefreshVotingQueue_Request.prototype.desired_queue_size = 0;
    
        /**
         * Creates a new CPublishedFile_RefreshVotingQueue_Request instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @static
         * @param {ICPublishedFile_RefreshVotingQueue_Request=} [properties] Properties to set
         * @returns {CPublishedFile_RefreshVotingQueue_Request} CPublishedFile_RefreshVotingQueue_Request instance
         */
        CPublishedFile_RefreshVotingQueue_Request.create = function create(properties) {
            return new CPublishedFile_RefreshVotingQueue_Request(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_RefreshVotingQueue_Request message. Does not implicitly {@link CPublishedFile_RefreshVotingQueue_Request.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @static
         * @param {ICPublishedFile_RefreshVotingQueue_Request} message CPublishedFile_RefreshVotingQueue_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_RefreshVotingQueue_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.matching_file_type != null && Object.hasOwnProperty.call(message, "matching_file_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.matching_file_type);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.tags[i]);
            if (message.match_all_tags != null && Object.hasOwnProperty.call(message, "match_all_tags"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.match_all_tags);
            if (message.excluded_tags != null && message.excluded_tags.length)
                for (var i = 0; i < message.excluded_tags.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.excluded_tags[i]);
            if (message.desired_queue_size != null && Object.hasOwnProperty.call(message, "desired_queue_size"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.desired_queue_size);
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_RefreshVotingQueue_Request message, length delimited. Does not implicitly {@link CPublishedFile_RefreshVotingQueue_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @static
         * @param {ICPublishedFile_RefreshVotingQueue_Request} message CPublishedFile_RefreshVotingQueue_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_RefreshVotingQueue_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_RefreshVotingQueue_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_RefreshVotingQueue_Request} CPublishedFile_RefreshVotingQueue_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_RefreshVotingQueue_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_RefreshVotingQueue_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.matching_file_type = reader.uint32();
                    break;
                case 3:
                    if (!(message.tags && message.tags.length))
                        message.tags = [];
                    message.tags.push(reader.string());
                    break;
                case 4:
                    message.match_all_tags = reader.bool();
                    break;
                case 5:
                    if (!(message.excluded_tags && message.excluded_tags.length))
                        message.excluded_tags = [];
                    message.excluded_tags.push(reader.string());
                    break;
                case 6:
                    message.desired_queue_size = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CPublishedFile_RefreshVotingQueue_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_RefreshVotingQueue_Request} CPublishedFile_RefreshVotingQueue_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_RefreshVotingQueue_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_RefreshVotingQueue_Request message.
         * @function verify
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_RefreshVotingQueue_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.matching_file_type != null && message.hasOwnProperty("matching_file_type"))
                if (!$util.isInteger(message.matching_file_type))
                    return "matching_file_type: integer expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i)
                    if (!$util.isString(message.tags[i]))
                        return "tags: string[] expected";
            }
            if (message.match_all_tags != null && message.hasOwnProperty("match_all_tags"))
                if (typeof message.match_all_tags !== "boolean")
                    return "match_all_tags: boolean expected";
            if (message.excluded_tags != null && message.hasOwnProperty("excluded_tags")) {
                if (!Array.isArray(message.excluded_tags))
                    return "excluded_tags: array expected";
                for (var i = 0; i < message.excluded_tags.length; ++i)
                    if (!$util.isString(message.excluded_tags[i]))
                        return "excluded_tags: string[] expected";
            }
            if (message.desired_queue_size != null && message.hasOwnProperty("desired_queue_size"))
                if (!$util.isInteger(message.desired_queue_size))
                    return "desired_queue_size: integer expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_RefreshVotingQueue_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_RefreshVotingQueue_Request} CPublishedFile_RefreshVotingQueue_Request
         */
        CPublishedFile_RefreshVotingQueue_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_RefreshVotingQueue_Request)
                return object;
            var message = new $root.CPublishedFile_RefreshVotingQueue_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.matching_file_type != null)
                message.matching_file_type = object.matching_file_type >>> 0;
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".CPublishedFile_RefreshVotingQueue_Request.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i)
                    message.tags[i] = String(object.tags[i]);
            }
            if (object.match_all_tags != null)
                message.match_all_tags = Boolean(object.match_all_tags);
            if (object.excluded_tags) {
                if (!Array.isArray(object.excluded_tags))
                    throw TypeError(".CPublishedFile_RefreshVotingQueue_Request.excluded_tags: array expected");
                message.excluded_tags = [];
                for (var i = 0; i < object.excluded_tags.length; ++i)
                    message.excluded_tags[i] = String(object.excluded_tags[i]);
            }
            if (object.desired_queue_size != null)
                message.desired_queue_size = object.desired_queue_size >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CPublishedFile_RefreshVotingQueue_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @static
         * @param {CPublishedFile_RefreshVotingQueue_Request} message CPublishedFile_RefreshVotingQueue_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_RefreshVotingQueue_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.tags = [];
                object.excluded_tags = [];
            }
            if (options.defaults) {
                object.appid = 0;
                object.matching_file_type = 0;
                object.match_all_tags = true;
                object.desired_queue_size = 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.matching_file_type != null && message.hasOwnProperty("matching_file_type"))
                object.matching_file_type = message.matching_file_type;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = message.tags[j];
            }
            if (message.match_all_tags != null && message.hasOwnProperty("match_all_tags"))
                object.match_all_tags = message.match_all_tags;
            if (message.excluded_tags && message.excluded_tags.length) {
                object.excluded_tags = [];
                for (var j = 0; j < message.excluded_tags.length; ++j)
                    object.excluded_tags[j] = message.excluded_tags[j];
            }
            if (message.desired_queue_size != null && message.hasOwnProperty("desired_queue_size"))
                object.desired_queue_size = message.desired_queue_size;
            return object;
        };
    
        /**
         * Converts this CPublishedFile_RefreshVotingQueue_Request to JSON.
         * @function toJSON
         * @memberof CPublishedFile_RefreshVotingQueue_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_RefreshVotingQueue_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPublishedFile_RefreshVotingQueue_Request;
    })();
    
    $root.CPublishedFile_RefreshVotingQueue_Response = (function() {
    
        /**
         * Properties of a CPublishedFile_RefreshVotingQueue_Response.
         * @exports ICPublishedFile_RefreshVotingQueue_Response
         * @interface ICPublishedFile_RefreshVotingQueue_Response
         */
    
        /**
         * Constructs a new CPublishedFile_RefreshVotingQueue_Response.
         * @exports CPublishedFile_RefreshVotingQueue_Response
         * @classdesc Represents a CPublishedFile_RefreshVotingQueue_Response.
         * @implements ICPublishedFile_RefreshVotingQueue_Response
         * @constructor
         * @param {ICPublishedFile_RefreshVotingQueue_Response=} [properties] Properties to set
         */
        function CPublishedFile_RefreshVotingQueue_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CPublishedFile_RefreshVotingQueue_Response instance using the specified properties.
         * @function create
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @static
         * @param {ICPublishedFile_RefreshVotingQueue_Response=} [properties] Properties to set
         * @returns {CPublishedFile_RefreshVotingQueue_Response} CPublishedFile_RefreshVotingQueue_Response instance
         */
        CPublishedFile_RefreshVotingQueue_Response.create = function create(properties) {
            return new CPublishedFile_RefreshVotingQueue_Response(properties);
        };
    
        /**
         * Encodes the specified CPublishedFile_RefreshVotingQueue_Response message. Does not implicitly {@link CPublishedFile_RefreshVotingQueue_Response.verify|verify} messages.
         * @function encode
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @static
         * @param {ICPublishedFile_RefreshVotingQueue_Response} message CPublishedFile_RefreshVotingQueue_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_RefreshVotingQueue_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CPublishedFile_RefreshVotingQueue_Response message, length delimited. Does not implicitly {@link CPublishedFile_RefreshVotingQueue_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @static
         * @param {ICPublishedFile_RefreshVotingQueue_Response} message CPublishedFile_RefreshVotingQueue_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CPublishedFile_RefreshVotingQueue_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CPublishedFile_RefreshVotingQueue_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CPublishedFile_RefreshVotingQueue_Response} CPublishedFile_RefreshVotingQueue_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_RefreshVotingQueue_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPublishedFile_RefreshVotingQueue_Response();
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
         * Decodes a CPublishedFile_RefreshVotingQueue_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CPublishedFile_RefreshVotingQueue_Response} CPublishedFile_RefreshVotingQueue_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CPublishedFile_RefreshVotingQueue_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CPublishedFile_RefreshVotingQueue_Response message.
         * @function verify
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CPublishedFile_RefreshVotingQueue_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CPublishedFile_RefreshVotingQueue_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CPublishedFile_RefreshVotingQueue_Response} CPublishedFile_RefreshVotingQueue_Response
         */
        CPublishedFile_RefreshVotingQueue_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CPublishedFile_RefreshVotingQueue_Response)
                return object;
            return new $root.CPublishedFile_RefreshVotingQueue_Response();
        };
    
        /**
         * Creates a plain object from a CPublishedFile_RefreshVotingQueue_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @static
         * @param {CPublishedFile_RefreshVotingQueue_Response} message CPublishedFile_RefreshVotingQueue_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CPublishedFile_RefreshVotingQueue_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CPublishedFile_RefreshVotingQueue_Response to JSON.
         * @function toJSON
         * @memberof CPublishedFile_RefreshVotingQueue_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CPublishedFile_RefreshVotingQueue_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CPublishedFile_RefreshVotingQueue_Response;
    })();
    
    $root.PublishedFile = (function() {
    
        /**
         * Constructs a new PublishedFile service.
         * @exports PublishedFile
         * @classdesc Represents a PublishedFile
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function PublishedFile(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (PublishedFile.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PublishedFile;
    
        /**
         * Creates new PublishedFile service using the specified rpc implementation.
         * @function create
         * @memberof PublishedFile
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {PublishedFile} RPC service. Useful where requests and/or responses are streamed.
         */
        PublishedFile.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link PublishedFile#subscribe}.
         * @memberof PublishedFile
         * @typedef SubscribeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPublishedFile_Subscribe_Response} [response] CPublishedFile_Subscribe_Response
         */
    
        /**
         * Calls Subscribe.
         * @function subscribe
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_Subscribe_Request} request CPublishedFile_Subscribe_Request message or plain object
         * @param {PublishedFile.SubscribeCallback} callback Node-style callback called with the error, if any, and CPublishedFile_Subscribe_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PublishedFile.prototype.subscribe = function subscribe(request, callback) {
            return this.rpcCall(subscribe, $root.CPublishedFile_Subscribe_Request, $root.CPublishedFile_Subscribe_Response, request, callback);
        }, "name", { value: "Subscribe" });
    
        /**
         * Calls Subscribe.
         * @function subscribe
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_Subscribe_Request} request CPublishedFile_Subscribe_Request message or plain object
         * @returns {Promise<CPublishedFile_Subscribe_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link PublishedFile#unsubscribe}.
         * @memberof PublishedFile
         * @typedef UnsubscribeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPublishedFile_Unsubscribe_Response} [response] CPublishedFile_Unsubscribe_Response
         */
    
        /**
         * Calls Unsubscribe.
         * @function unsubscribe
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_Unsubscribe_Request} request CPublishedFile_Unsubscribe_Request message or plain object
         * @param {PublishedFile.UnsubscribeCallback} callback Node-style callback called with the error, if any, and CPublishedFile_Unsubscribe_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PublishedFile.prototype.unsubscribe = function unsubscribe(request, callback) {
            return this.rpcCall(unsubscribe, $root.CPublishedFile_Unsubscribe_Request, $root.CPublishedFile_Unsubscribe_Response, request, callback);
        }, "name", { value: "Unsubscribe" });
    
        /**
         * Calls Unsubscribe.
         * @function unsubscribe
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_Unsubscribe_Request} request CPublishedFile_Unsubscribe_Request message or plain object
         * @returns {Promise<CPublishedFile_Unsubscribe_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link PublishedFile#publish}.
         * @memberof PublishedFile
         * @typedef PublishCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPublishedFile_Publish_Response} [response] CPublishedFile_Publish_Response
         */
    
        /**
         * Calls Publish.
         * @function publish
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_Publish_Request} request CPublishedFile_Publish_Request message or plain object
         * @param {PublishedFile.PublishCallback} callback Node-style callback called with the error, if any, and CPublishedFile_Publish_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PublishedFile.prototype.publish = function publish(request, callback) {
            return this.rpcCall(publish, $root.CPublishedFile_Publish_Request, $root.CPublishedFile_Publish_Response, request, callback);
        }, "name", { value: "Publish" });
    
        /**
         * Calls Publish.
         * @function publish
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_Publish_Request} request CPublishedFile_Publish_Request message or plain object
         * @returns {Promise<CPublishedFile_Publish_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link PublishedFile#getDetails}.
         * @memberof PublishedFile
         * @typedef GetDetailsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPublishedFile_GetDetails_Response} [response] CPublishedFile_GetDetails_Response
         */
    
        /**
         * Calls GetDetails.
         * @function getDetails
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_GetDetails_Request} request CPublishedFile_GetDetails_Request message or plain object
         * @param {PublishedFile.GetDetailsCallback} callback Node-style callback called with the error, if any, and CPublishedFile_GetDetails_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PublishedFile.prototype.getDetails = function getDetails(request, callback) {
            return this.rpcCall(getDetails, $root.CPublishedFile_GetDetails_Request, $root.CPublishedFile_GetDetails_Response, request, callback);
        }, "name", { value: "GetDetails" });
    
        /**
         * Calls GetDetails.
         * @function getDetails
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_GetDetails_Request} request CPublishedFile_GetDetails_Request message or plain object
         * @returns {Promise<CPublishedFile_GetDetails_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link PublishedFile#getUserFiles}.
         * @memberof PublishedFile
         * @typedef GetUserFilesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPublishedFile_GetUserFiles_Response} [response] CPublishedFile_GetUserFiles_Response
         */
    
        /**
         * Calls GetUserFiles.
         * @function getUserFiles
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_GetUserFiles_Request} request CPublishedFile_GetUserFiles_Request message or plain object
         * @param {PublishedFile.GetUserFilesCallback} callback Node-style callback called with the error, if any, and CPublishedFile_GetUserFiles_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PublishedFile.prototype.getUserFiles = function getUserFiles(request, callback) {
            return this.rpcCall(getUserFiles, $root.CPublishedFile_GetUserFiles_Request, $root.CPublishedFile_GetUserFiles_Response, request, callback);
        }, "name", { value: "GetUserFiles" });
    
        /**
         * Calls GetUserFiles.
         * @function getUserFiles
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_GetUserFiles_Request} request CPublishedFile_GetUserFiles_Request message or plain object
         * @returns {Promise<CPublishedFile_GetUserFiles_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link PublishedFile#update}.
         * @memberof PublishedFile
         * @typedef UpdateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPublishedFile_Update_Response} [response] CPublishedFile_Update_Response
         */
    
        /**
         * Calls Update.
         * @function update
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_Update_Request} request CPublishedFile_Update_Request message or plain object
         * @param {PublishedFile.UpdateCallback} callback Node-style callback called with the error, if any, and CPublishedFile_Update_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PublishedFile.prototype.update = function update(request, callback) {
            return this.rpcCall(update, $root.CPublishedFile_Update_Request, $root.CPublishedFile_Update_Response, request, callback);
        }, "name", { value: "Update" });
    
        /**
         * Calls Update.
         * @function update
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_Update_Request} request CPublishedFile_Update_Request message or plain object
         * @returns {Promise<CPublishedFile_Update_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link PublishedFile#refreshVotingQueue}.
         * @memberof PublishedFile
         * @typedef RefreshVotingQueueCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CPublishedFile_RefreshVotingQueue_Response} [response] CPublishedFile_RefreshVotingQueue_Response
         */
    
        /**
         * Calls RefreshVotingQueue.
         * @function refreshVotingQueue
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_RefreshVotingQueue_Request} request CPublishedFile_RefreshVotingQueue_Request message or plain object
         * @param {PublishedFile.RefreshVotingQueueCallback} callback Node-style callback called with the error, if any, and CPublishedFile_RefreshVotingQueue_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PublishedFile.prototype.refreshVotingQueue = function refreshVotingQueue(request, callback) {
            return this.rpcCall(refreshVotingQueue, $root.CPublishedFile_RefreshVotingQueue_Request, $root.CPublishedFile_RefreshVotingQueue_Response, request, callback);
        }, "name", { value: "RefreshVotingQueue" });
    
        /**
         * Calls RefreshVotingQueue.
         * @function refreshVotingQueue
         * @memberof PublishedFile
         * @instance
         * @param {ICPublishedFile_RefreshVotingQueue_Request} request CPublishedFile_RefreshVotingQueue_Request message or plain object
         * @returns {Promise<CPublishedFile_RefreshVotingQueue_Response>} Promise
         * @variation 2
         */
    
        return PublishedFile;
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
