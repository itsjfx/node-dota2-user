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
     * ELeagueNodeGroupType enum.
     * @exports ELeagueNodeGroupType
     * @enum {number}
     * @property {number} INVALID_GROUP_TYPE=0 INVALID_GROUP_TYPE value
     * @property {number} ORGANIZATIONAL=1 ORGANIZATIONAL value
     * @property {number} ROUND_ROBIN=2 ROUND_ROBIN value
     * @property {number} SWISS=3 SWISS value
     * @property {number} BRACKET_SINGLE=4 BRACKET_SINGLE value
     * @property {number} BRACKET_DOUBLE_SEED_LOSER=5 BRACKET_DOUBLE_SEED_LOSER value
     * @property {number} BRACKET_DOUBLE_ALL_WINNER=6 BRACKET_DOUBLE_ALL_WINNER value
     * @property {number} SHOWMATCH=7 SHOWMATCH value
     * @property {number} GSL=8 GSL value
     */
    $root.ELeagueNodeGroupType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INVALID_GROUP_TYPE"] = 0;
        values[valuesById[1] = "ORGANIZATIONAL"] = 1;
        values[valuesById[2] = "ROUND_ROBIN"] = 2;
        values[valuesById[3] = "SWISS"] = 3;
        values[valuesById[4] = "BRACKET_SINGLE"] = 4;
        values[valuesById[5] = "BRACKET_DOUBLE_SEED_LOSER"] = 5;
        values[valuesById[6] = "BRACKET_DOUBLE_ALL_WINNER"] = 6;
        values[valuesById[7] = "SHOWMATCH"] = 7;
        values[valuesById[8] = "GSL"] = 8;
        return values;
    })();
    
    /**
     * ELeagueNodeType enum.
     * @exports ELeagueNodeType
     * @enum {number}
     * @property {number} INVALID_NODE_TYPE=0 INVALID_NODE_TYPE value
     * @property {number} BEST_OF_ONE=1 BEST_OF_ONE value
     * @property {number} BEST_OF_THREE=2 BEST_OF_THREE value
     * @property {number} BEST_OF_FIVE=3 BEST_OF_FIVE value
     * @property {number} BEST_OF_TWO=4 BEST_OF_TWO value
     */
    $root.ELeagueNodeType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INVALID_NODE_TYPE"] = 0;
        values[valuesById[1] = "BEST_OF_ONE"] = 1;
        values[valuesById[2] = "BEST_OF_THREE"] = 2;
        values[valuesById[3] = "BEST_OF_FIVE"] = 3;
        values[valuesById[4] = "BEST_OF_TWO"] = 4;
        return values;
    })();
    
    $root.CMsgDOTALeagueNode = (function() {
    
        /**
         * Properties of a CMsgDOTALeagueNode.
         * @exports ICMsgDOTALeagueNode
         * @interface ICMsgDOTALeagueNode
         * @property {string|null} [name] CMsgDOTALeagueNode name
         * @property {number|null} [node_id] CMsgDOTALeagueNode node_id
         * @property {number|null} [node_group_id] CMsgDOTALeagueNode node_group_id
         * @property {number|null} [winning_node_id] CMsgDOTALeagueNode winning_node_id
         * @property {number|null} [losing_node_id] CMsgDOTALeagueNode losing_node_id
         * @property {number|null} [incoming_node_id_1] CMsgDOTALeagueNode incoming_node_id_1
         * @property {number|null} [incoming_node_id_2] CMsgDOTALeagueNode incoming_node_id_2
         * @property {ELeagueNodeType|null} [node_type] CMsgDOTALeagueNode node_type
         * @property {number|null} [scheduled_time] CMsgDOTALeagueNode scheduled_time
         * @property {number|null} [actual_time] CMsgDOTALeagueNode actual_time
         * @property {number|null} [series_id] CMsgDOTALeagueNode series_id
         * @property {number|null} [team_id_1] CMsgDOTALeagueNode team_id_1
         * @property {number|null} [team_id_2] CMsgDOTALeagueNode team_id_2
         * @property {Array.<CMsgDOTALeagueNode.IMatchDetails>|null} [matches] CMsgDOTALeagueNode matches
         * @property {number|null} [team_1_wins] CMsgDOTALeagueNode team_1_wins
         * @property {number|null} [team_2_wins] CMsgDOTALeagueNode team_2_wins
         * @property {boolean|null} [has_started] CMsgDOTALeagueNode has_started
         * @property {boolean|null} [is_completed] CMsgDOTALeagueNode is_completed
         * @property {Array.<number>|null} [stream_ids] CMsgDOTALeagueNode stream_ids
         */
    
        /**
         * Constructs a new CMsgDOTALeagueNode.
         * @exports CMsgDOTALeagueNode
         * @classdesc Represents a CMsgDOTALeagueNode.
         * @implements ICMsgDOTALeagueNode
         * @constructor
         * @param {ICMsgDOTALeagueNode=} [properties] Properties to set
         */
        function CMsgDOTALeagueNode(properties) {
            this.matches = [];
            this.stream_ids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTALeagueNode name.
         * @member {string} name
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.name = "";
    
        /**
         * CMsgDOTALeagueNode node_id.
         * @member {number} node_id
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.node_id = 0;
    
        /**
         * CMsgDOTALeagueNode node_group_id.
         * @member {number} node_group_id
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.node_group_id = 0;
    
        /**
         * CMsgDOTALeagueNode winning_node_id.
         * @member {number} winning_node_id
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.winning_node_id = 0;
    
        /**
         * CMsgDOTALeagueNode losing_node_id.
         * @member {number} losing_node_id
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.losing_node_id = 0;
    
        /**
         * CMsgDOTALeagueNode incoming_node_id_1.
         * @member {number} incoming_node_id_1
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.incoming_node_id_1 = 0;
    
        /**
         * CMsgDOTALeagueNode incoming_node_id_2.
         * @member {number} incoming_node_id_2
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.incoming_node_id_2 = 0;
    
        /**
         * CMsgDOTALeagueNode node_type.
         * @member {ELeagueNodeType} node_type
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.node_type = 0;
    
        /**
         * CMsgDOTALeagueNode scheduled_time.
         * @member {number} scheduled_time
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.scheduled_time = 0;
    
        /**
         * CMsgDOTALeagueNode actual_time.
         * @member {number} actual_time
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.actual_time = 0;
    
        /**
         * CMsgDOTALeagueNode series_id.
         * @member {number} series_id
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.series_id = 0;
    
        /**
         * CMsgDOTALeagueNode team_id_1.
         * @member {number} team_id_1
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.team_id_1 = 0;
    
        /**
         * CMsgDOTALeagueNode team_id_2.
         * @member {number} team_id_2
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.team_id_2 = 0;
    
        /**
         * CMsgDOTALeagueNode matches.
         * @member {Array.<CMsgDOTALeagueNode.IMatchDetails>} matches
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.matches = $util.emptyArray;
    
        /**
         * CMsgDOTALeagueNode team_1_wins.
         * @member {number} team_1_wins
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.team_1_wins = 0;
    
        /**
         * CMsgDOTALeagueNode team_2_wins.
         * @member {number} team_2_wins
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.team_2_wins = 0;
    
        /**
         * CMsgDOTALeagueNode has_started.
         * @member {boolean} has_started
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.has_started = false;
    
        /**
         * CMsgDOTALeagueNode is_completed.
         * @member {boolean} is_completed
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.is_completed = false;
    
        /**
         * CMsgDOTALeagueNode stream_ids.
         * @member {Array.<number>} stream_ids
         * @memberof CMsgDOTALeagueNode
         * @instance
         */
        CMsgDOTALeagueNode.prototype.stream_ids = $util.emptyArray;
    
        /**
         * Creates a new CMsgDOTALeagueNode instance using the specified properties.
         * @function create
         * @memberof CMsgDOTALeagueNode
         * @static
         * @param {ICMsgDOTALeagueNode=} [properties] Properties to set
         * @returns {CMsgDOTALeagueNode} CMsgDOTALeagueNode instance
         */
        CMsgDOTALeagueNode.create = function create(properties) {
            return new CMsgDOTALeagueNode(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueNode message. Does not implicitly {@link CMsgDOTALeagueNode.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTALeagueNode
         * @static
         * @param {ICMsgDOTALeagueNode} message CMsgDOTALeagueNode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueNode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.node_id != null && Object.hasOwnProperty.call(message, "node_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.node_id);
            if (message.node_group_id != null && Object.hasOwnProperty.call(message, "node_group_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.node_group_id);
            if (message.winning_node_id != null && Object.hasOwnProperty.call(message, "winning_node_id"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.winning_node_id);
            if (message.losing_node_id != null && Object.hasOwnProperty.call(message, "losing_node_id"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.losing_node_id);
            if (message.incoming_node_id_1 != null && Object.hasOwnProperty.call(message, "incoming_node_id_1"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.incoming_node_id_1);
            if (message.incoming_node_id_2 != null && Object.hasOwnProperty.call(message, "incoming_node_id_2"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.incoming_node_id_2);
            if (message.node_type != null && Object.hasOwnProperty.call(message, "node_type"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.node_type);
            if (message.scheduled_time != null && Object.hasOwnProperty.call(message, "scheduled_time"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.scheduled_time);
            if (message.series_id != null && Object.hasOwnProperty.call(message, "series_id"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.series_id);
            if (message.team_id_1 != null && Object.hasOwnProperty.call(message, "team_id_1"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.team_id_1);
            if (message.team_id_2 != null && Object.hasOwnProperty.call(message, "team_id_2"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.team_id_2);
            if (message.matches != null && message.matches.length)
                for (var i = 0; i < message.matches.length; ++i)
                    $root.CMsgDOTALeagueNode.MatchDetails.encode(message.matches[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.team_1_wins != null && Object.hasOwnProperty.call(message, "team_1_wins"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.team_1_wins);
            if (message.team_2_wins != null && Object.hasOwnProperty.call(message, "team_2_wins"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.team_2_wins);
            if (message.has_started != null && Object.hasOwnProperty.call(message, "has_started"))
                writer.uint32(/* id 16, wireType 0 =*/128).bool(message.has_started);
            if (message.is_completed != null && Object.hasOwnProperty.call(message, "is_completed"))
                writer.uint32(/* id 17, wireType 0 =*/136).bool(message.is_completed);
            if (message.stream_ids != null && message.stream_ids.length)
                for (var i = 0; i < message.stream_ids.length; ++i)
                    writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.stream_ids[i]);
            if (message.actual_time != null && Object.hasOwnProperty.call(message, "actual_time"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.actual_time);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueNode message, length delimited. Does not implicitly {@link CMsgDOTALeagueNode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTALeagueNode
         * @static
         * @param {ICMsgDOTALeagueNode} message CMsgDOTALeagueNode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueNode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTALeagueNode message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTALeagueNode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTALeagueNode} CMsgDOTALeagueNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueNode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueNode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.node_id = reader.uint32();
                    break;
                case 3:
                    message.node_group_id = reader.uint32();
                    break;
                case 4:
                    message.winning_node_id = reader.uint32();
                    break;
                case 5:
                    message.losing_node_id = reader.uint32();
                    break;
                case 6:
                    message.incoming_node_id_1 = reader.uint32();
                    break;
                case 7:
                    message.incoming_node_id_2 = reader.uint32();
                    break;
                case 8:
                    message.node_type = reader.int32();
                    break;
                case 9:
                    message.scheduled_time = reader.uint32();
                    break;
                case 19:
                    message.actual_time = reader.uint32();
                    break;
                case 10:
                    message.series_id = reader.uint32();
                    break;
                case 11:
                    message.team_id_1 = reader.uint32();
                    break;
                case 12:
                    message.team_id_2 = reader.uint32();
                    break;
                case 13:
                    if (!(message.matches && message.matches.length))
                        message.matches = [];
                    message.matches.push($root.CMsgDOTALeagueNode.MatchDetails.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.team_1_wins = reader.uint32();
                    break;
                case 15:
                    message.team_2_wins = reader.uint32();
                    break;
                case 16:
                    message.has_started = reader.bool();
                    break;
                case 17:
                    message.is_completed = reader.bool();
                    break;
                case 18:
                    if (!(message.stream_ids && message.stream_ids.length))
                        message.stream_ids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.stream_ids.push(reader.uint32());
                    } else
                        message.stream_ids.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTALeagueNode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTALeagueNode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTALeagueNode} CMsgDOTALeagueNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueNode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTALeagueNode message.
         * @function verify
         * @memberof CMsgDOTALeagueNode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTALeagueNode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.node_id != null && message.hasOwnProperty("node_id"))
                if (!$util.isInteger(message.node_id))
                    return "node_id: integer expected";
            if (message.node_group_id != null && message.hasOwnProperty("node_group_id"))
                if (!$util.isInteger(message.node_group_id))
                    return "node_group_id: integer expected";
            if (message.winning_node_id != null && message.hasOwnProperty("winning_node_id"))
                if (!$util.isInteger(message.winning_node_id))
                    return "winning_node_id: integer expected";
            if (message.losing_node_id != null && message.hasOwnProperty("losing_node_id"))
                if (!$util.isInteger(message.losing_node_id))
                    return "losing_node_id: integer expected";
            if (message.incoming_node_id_1 != null && message.hasOwnProperty("incoming_node_id_1"))
                if (!$util.isInteger(message.incoming_node_id_1))
                    return "incoming_node_id_1: integer expected";
            if (message.incoming_node_id_2 != null && message.hasOwnProperty("incoming_node_id_2"))
                if (!$util.isInteger(message.incoming_node_id_2))
                    return "incoming_node_id_2: integer expected";
            if (message.node_type != null && message.hasOwnProperty("node_type"))
                switch (message.node_type) {
                default:
                    return "node_type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.scheduled_time != null && message.hasOwnProperty("scheduled_time"))
                if (!$util.isInteger(message.scheduled_time))
                    return "scheduled_time: integer expected";
            if (message.actual_time != null && message.hasOwnProperty("actual_time"))
                if (!$util.isInteger(message.actual_time))
                    return "actual_time: integer expected";
            if (message.series_id != null && message.hasOwnProperty("series_id"))
                if (!$util.isInteger(message.series_id))
                    return "series_id: integer expected";
            if (message.team_id_1 != null && message.hasOwnProperty("team_id_1"))
                if (!$util.isInteger(message.team_id_1))
                    return "team_id_1: integer expected";
            if (message.team_id_2 != null && message.hasOwnProperty("team_id_2"))
                if (!$util.isInteger(message.team_id_2))
                    return "team_id_2: integer expected";
            if (message.matches != null && message.hasOwnProperty("matches")) {
                if (!Array.isArray(message.matches))
                    return "matches: array expected";
                for (var i = 0; i < message.matches.length; ++i) {
                    var error = $root.CMsgDOTALeagueNode.MatchDetails.verify(message.matches[i]);
                    if (error)
                        return "matches." + error;
                }
            }
            if (message.team_1_wins != null && message.hasOwnProperty("team_1_wins"))
                if (!$util.isInteger(message.team_1_wins))
                    return "team_1_wins: integer expected";
            if (message.team_2_wins != null && message.hasOwnProperty("team_2_wins"))
                if (!$util.isInteger(message.team_2_wins))
                    return "team_2_wins: integer expected";
            if (message.has_started != null && message.hasOwnProperty("has_started"))
                if (typeof message.has_started !== "boolean")
                    return "has_started: boolean expected";
            if (message.is_completed != null && message.hasOwnProperty("is_completed"))
                if (typeof message.is_completed !== "boolean")
                    return "is_completed: boolean expected";
            if (message.stream_ids != null && message.hasOwnProperty("stream_ids")) {
                if (!Array.isArray(message.stream_ids))
                    return "stream_ids: array expected";
                for (var i = 0; i < message.stream_ids.length; ++i)
                    if (!$util.isInteger(message.stream_ids[i]))
                        return "stream_ids: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgDOTALeagueNode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTALeagueNode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTALeagueNode} CMsgDOTALeagueNode
         */
        CMsgDOTALeagueNode.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTALeagueNode)
                return object;
            var message = new $root.CMsgDOTALeagueNode();
            if (object.name != null)
                message.name = String(object.name);
            if (object.node_id != null)
                message.node_id = object.node_id >>> 0;
            if (object.node_group_id != null)
                message.node_group_id = object.node_group_id >>> 0;
            if (object.winning_node_id != null)
                message.winning_node_id = object.winning_node_id >>> 0;
            if (object.losing_node_id != null)
                message.losing_node_id = object.losing_node_id >>> 0;
            if (object.incoming_node_id_1 != null)
                message.incoming_node_id_1 = object.incoming_node_id_1 >>> 0;
            if (object.incoming_node_id_2 != null)
                message.incoming_node_id_2 = object.incoming_node_id_2 >>> 0;
            switch (object.node_type) {
            case "INVALID_NODE_TYPE":
            case 0:
                message.node_type = 0;
                break;
            case "BEST_OF_ONE":
            case 1:
                message.node_type = 1;
                break;
            case "BEST_OF_THREE":
            case 2:
                message.node_type = 2;
                break;
            case "BEST_OF_FIVE":
            case 3:
                message.node_type = 3;
                break;
            case "BEST_OF_TWO":
            case 4:
                message.node_type = 4;
                break;
            }
            if (object.scheduled_time != null)
                message.scheduled_time = object.scheduled_time >>> 0;
            if (object.actual_time != null)
                message.actual_time = object.actual_time >>> 0;
            if (object.series_id != null)
                message.series_id = object.series_id >>> 0;
            if (object.team_id_1 != null)
                message.team_id_1 = object.team_id_1 >>> 0;
            if (object.team_id_2 != null)
                message.team_id_2 = object.team_id_2 >>> 0;
            if (object.matches) {
                if (!Array.isArray(object.matches))
                    throw TypeError(".CMsgDOTALeagueNode.matches: array expected");
                message.matches = [];
                for (var i = 0; i < object.matches.length; ++i) {
                    if (typeof object.matches[i] !== "object")
                        throw TypeError(".CMsgDOTALeagueNode.matches: object expected");
                    message.matches[i] = $root.CMsgDOTALeagueNode.MatchDetails.fromObject(object.matches[i]);
                }
            }
            if (object.team_1_wins != null)
                message.team_1_wins = object.team_1_wins >>> 0;
            if (object.team_2_wins != null)
                message.team_2_wins = object.team_2_wins >>> 0;
            if (object.has_started != null)
                message.has_started = Boolean(object.has_started);
            if (object.is_completed != null)
                message.is_completed = Boolean(object.is_completed);
            if (object.stream_ids) {
                if (!Array.isArray(object.stream_ids))
                    throw TypeError(".CMsgDOTALeagueNode.stream_ids: array expected");
                message.stream_ids = [];
                for (var i = 0; i < object.stream_ids.length; ++i)
                    message.stream_ids[i] = object.stream_ids[i] >>> 0;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTALeagueNode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTALeagueNode
         * @static
         * @param {CMsgDOTALeagueNode} message CMsgDOTALeagueNode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTALeagueNode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.matches = [];
                object.stream_ids = [];
            }
            if (options.defaults) {
                object.name = "";
                object.node_id = 0;
                object.node_group_id = 0;
                object.winning_node_id = 0;
                object.losing_node_id = 0;
                object.incoming_node_id_1 = 0;
                object.incoming_node_id_2 = 0;
                object.node_type = options.enums === String ? "INVALID_NODE_TYPE" : 0;
                object.scheduled_time = 0;
                object.series_id = 0;
                object.team_id_1 = 0;
                object.team_id_2 = 0;
                object.team_1_wins = 0;
                object.team_2_wins = 0;
                object.has_started = false;
                object.is_completed = false;
                object.actual_time = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.node_id != null && message.hasOwnProperty("node_id"))
                object.node_id = message.node_id;
            if (message.node_group_id != null && message.hasOwnProperty("node_group_id"))
                object.node_group_id = message.node_group_id;
            if (message.winning_node_id != null && message.hasOwnProperty("winning_node_id"))
                object.winning_node_id = message.winning_node_id;
            if (message.losing_node_id != null && message.hasOwnProperty("losing_node_id"))
                object.losing_node_id = message.losing_node_id;
            if (message.incoming_node_id_1 != null && message.hasOwnProperty("incoming_node_id_1"))
                object.incoming_node_id_1 = message.incoming_node_id_1;
            if (message.incoming_node_id_2 != null && message.hasOwnProperty("incoming_node_id_2"))
                object.incoming_node_id_2 = message.incoming_node_id_2;
            if (message.node_type != null && message.hasOwnProperty("node_type"))
                object.node_type = options.enums === String ? $root.ELeagueNodeType[message.node_type] : message.node_type;
            if (message.scheduled_time != null && message.hasOwnProperty("scheduled_time"))
                object.scheduled_time = message.scheduled_time;
            if (message.series_id != null && message.hasOwnProperty("series_id"))
                object.series_id = message.series_id;
            if (message.team_id_1 != null && message.hasOwnProperty("team_id_1"))
                object.team_id_1 = message.team_id_1;
            if (message.team_id_2 != null && message.hasOwnProperty("team_id_2"))
                object.team_id_2 = message.team_id_2;
            if (message.matches && message.matches.length) {
                object.matches = [];
                for (var j = 0; j < message.matches.length; ++j)
                    object.matches[j] = $root.CMsgDOTALeagueNode.MatchDetails.toObject(message.matches[j], options);
            }
            if (message.team_1_wins != null && message.hasOwnProperty("team_1_wins"))
                object.team_1_wins = message.team_1_wins;
            if (message.team_2_wins != null && message.hasOwnProperty("team_2_wins"))
                object.team_2_wins = message.team_2_wins;
            if (message.has_started != null && message.hasOwnProperty("has_started"))
                object.has_started = message.has_started;
            if (message.is_completed != null && message.hasOwnProperty("is_completed"))
                object.is_completed = message.is_completed;
            if (message.stream_ids && message.stream_ids.length) {
                object.stream_ids = [];
                for (var j = 0; j < message.stream_ids.length; ++j)
                    object.stream_ids[j] = message.stream_ids[j];
            }
            if (message.actual_time != null && message.hasOwnProperty("actual_time"))
                object.actual_time = message.actual_time;
            return object;
        };
    
        /**
         * Converts this CMsgDOTALeagueNode to JSON.
         * @function toJSON
         * @memberof CMsgDOTALeagueNode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTALeagueNode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgDOTALeagueNode.MatchDetails = (function() {
    
            /**
             * Properties of a MatchDetails.
             * @memberof CMsgDOTALeagueNode
             * @interface IMatchDetails
             * @property {number|Long|null} [match_id] MatchDetails match_id
             * @property {number|null} [winning_team_id] MatchDetails winning_team_id
             */
    
            /**
             * Constructs a new MatchDetails.
             * @memberof CMsgDOTALeagueNode
             * @classdesc Represents a MatchDetails.
             * @implements IMatchDetails
             * @constructor
             * @param {CMsgDOTALeagueNode.IMatchDetails=} [properties] Properties to set
             */
            function MatchDetails(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MatchDetails match_id.
             * @member {number|Long} match_id
             * @memberof CMsgDOTALeagueNode.MatchDetails
             * @instance
             */
            MatchDetails.prototype.match_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * MatchDetails winning_team_id.
             * @member {number} winning_team_id
             * @memberof CMsgDOTALeagueNode.MatchDetails
             * @instance
             */
            MatchDetails.prototype.winning_team_id = 0;
    
            /**
             * Creates a new MatchDetails instance using the specified properties.
             * @function create
             * @memberof CMsgDOTALeagueNode.MatchDetails
             * @static
             * @param {CMsgDOTALeagueNode.IMatchDetails=} [properties] Properties to set
             * @returns {CMsgDOTALeagueNode.MatchDetails} MatchDetails instance
             */
            MatchDetails.create = function create(properties) {
                return new MatchDetails(properties);
            };
    
            /**
             * Encodes the specified MatchDetails message. Does not implicitly {@link CMsgDOTALeagueNode.MatchDetails.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTALeagueNode.MatchDetails
             * @static
             * @param {CMsgDOTALeagueNode.IMatchDetails} message MatchDetails message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MatchDetails.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.match_id != null && Object.hasOwnProperty.call(message, "match_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.match_id);
                if (message.winning_team_id != null && Object.hasOwnProperty.call(message, "winning_team_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.winning_team_id);
                return writer;
            };
    
            /**
             * Encodes the specified MatchDetails message, length delimited. Does not implicitly {@link CMsgDOTALeagueNode.MatchDetails.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTALeagueNode.MatchDetails
             * @static
             * @param {CMsgDOTALeagueNode.IMatchDetails} message MatchDetails message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MatchDetails.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MatchDetails message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTALeagueNode.MatchDetails
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTALeagueNode.MatchDetails} MatchDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MatchDetails.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueNode.MatchDetails();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.match_id = reader.uint64();
                        break;
                    case 2:
                        message.winning_team_id = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MatchDetails message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTALeagueNode.MatchDetails
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTALeagueNode.MatchDetails} MatchDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MatchDetails.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MatchDetails message.
             * @function verify
             * @memberof CMsgDOTALeagueNode.MatchDetails
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MatchDetails.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.match_id != null && message.hasOwnProperty("match_id"))
                    if (!$util.isInteger(message.match_id) && !(message.match_id && $util.isInteger(message.match_id.low) && $util.isInteger(message.match_id.high)))
                        return "match_id: integer|Long expected";
                if (message.winning_team_id != null && message.hasOwnProperty("winning_team_id"))
                    if (!$util.isInteger(message.winning_team_id))
                        return "winning_team_id: integer expected";
                return null;
            };
    
            /**
             * Creates a MatchDetails message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTALeagueNode.MatchDetails
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTALeagueNode.MatchDetails} MatchDetails
             */
            MatchDetails.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTALeagueNode.MatchDetails)
                    return object;
                var message = new $root.CMsgDOTALeagueNode.MatchDetails();
                if (object.match_id != null)
                    if ($util.Long)
                        (message.match_id = $util.Long.fromValue(object.match_id)).unsigned = true;
                    else if (typeof object.match_id === "string")
                        message.match_id = parseInt(object.match_id, 10);
                    else if (typeof object.match_id === "number")
                        message.match_id = object.match_id;
                    else if (typeof object.match_id === "object")
                        message.match_id = new $util.LongBits(object.match_id.low >>> 0, object.match_id.high >>> 0).toNumber(true);
                if (object.winning_team_id != null)
                    message.winning_team_id = object.winning_team_id >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a MatchDetails message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTALeagueNode.MatchDetails
             * @static
             * @param {CMsgDOTALeagueNode.MatchDetails} message MatchDetails
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MatchDetails.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.match_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.match_id = options.longs === String ? "0" : 0;
                    object.winning_team_id = 0;
                }
                if (message.match_id != null && message.hasOwnProperty("match_id"))
                    if (typeof message.match_id === "number")
                        object.match_id = options.longs === String ? String(message.match_id) : message.match_id;
                    else
                        object.match_id = options.longs === String ? $util.Long.prototype.toString.call(message.match_id) : options.longs === Number ? new $util.LongBits(message.match_id.low >>> 0, message.match_id.high >>> 0).toNumber(true) : message.match_id;
                if (message.winning_team_id != null && message.hasOwnProperty("winning_team_id"))
                    object.winning_team_id = message.winning_team_id;
                return object;
            };
    
            /**
             * Converts this MatchDetails to JSON.
             * @function toJSON
             * @memberof CMsgDOTALeagueNode.MatchDetails
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MatchDetails.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MatchDetails;
        })();
    
        return CMsgDOTALeagueNode;
    })();
    
    $root.CMsgDOTALeagueNodeGroup = (function() {
    
        /**
         * Properties of a CMsgDOTALeagueNodeGroup.
         * @exports ICMsgDOTALeagueNodeGroup
         * @interface ICMsgDOTALeagueNodeGroup
         * @property {string|null} [name] CMsgDOTALeagueNodeGroup name
         * @property {number|null} [node_group_id] CMsgDOTALeagueNodeGroup node_group_id
         * @property {number|null} [parent_node_group_id] CMsgDOTALeagueNodeGroup parent_node_group_id
         * @property {Array.<number>|null} [incoming_node_group_ids] CMsgDOTALeagueNodeGroup incoming_node_group_ids
         * @property {number|null} [advancing_node_group_id] CMsgDOTALeagueNodeGroup advancing_node_group_id
         * @property {number|null} [advancing_team_count] CMsgDOTALeagueNodeGroup advancing_team_count
         * @property {number|null} [team_count] CMsgDOTALeagueNodeGroup team_count
         * @property {ELeagueNodeGroupType|null} [node_group_type] CMsgDOTALeagueNodeGroup node_group_type
         * @property {ELeagueNodeType|null} [default_node_type] CMsgDOTALeagueNodeGroup default_node_type
         * @property {number|null} [round] CMsgDOTALeagueNodeGroup round
         * @property {number|null} [max_rounds] CMsgDOTALeagueNodeGroup max_rounds
         * @property {boolean|null} [is_tiebreaker] CMsgDOTALeagueNodeGroup is_tiebreaker
         * @property {boolean|null} [is_final_group] CMsgDOTALeagueNodeGroup is_final_group
         * @property {boolean|null} [is_completed] CMsgDOTALeagueNodeGroup is_completed
         * @property {ELeaguePhase|null} [phase] CMsgDOTALeagueNodeGroup phase
         * @property {ELeagueRegion|null} [region] CMsgDOTALeagueNodeGroup region
         * @property {number|null} [start_time] CMsgDOTALeagueNodeGroup start_time
         * @property {number|null} [end_time] CMsgDOTALeagueNodeGroup end_time
         * @property {number|null} [secondary_advancing_node_group_id] CMsgDOTALeagueNodeGroup secondary_advancing_node_group_id
         * @property {number|null} [secondary_advancing_team_count] CMsgDOTALeagueNodeGroup secondary_advancing_team_count
         * @property {number|null} [tertiary_advancing_node_group_id] CMsgDOTALeagueNodeGroup tertiary_advancing_node_group_id
         * @property {number|null} [tertiary_advancing_team_count] CMsgDOTALeagueNodeGroup tertiary_advancing_team_count
         * @property {number|null} [elimination_dpc_points] CMsgDOTALeagueNodeGroup elimination_dpc_points
         * @property {Array.<CMsgDOTALeagueNodeGroup.ITeamStanding>|null} [team_standings] CMsgDOTALeagueNodeGroup team_standings
         * @property {Array.<ICMsgDOTALeagueNode>|null} [nodes] CMsgDOTALeagueNodeGroup nodes
         * @property {Array.<ICMsgDOTALeagueNodeGroup>|null} [node_groups] CMsgDOTALeagueNodeGroup node_groups
         */
    
        /**
         * Constructs a new CMsgDOTALeagueNodeGroup.
         * @exports CMsgDOTALeagueNodeGroup
         * @classdesc Represents a CMsgDOTALeagueNodeGroup.
         * @implements ICMsgDOTALeagueNodeGroup
         * @constructor
         * @param {ICMsgDOTALeagueNodeGroup=} [properties] Properties to set
         */
        function CMsgDOTALeagueNodeGroup(properties) {
            this.incoming_node_group_ids = [];
            this.team_standings = [];
            this.nodes = [];
            this.node_groups = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTALeagueNodeGroup name.
         * @member {string} name
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.name = "";
    
        /**
         * CMsgDOTALeagueNodeGroup node_group_id.
         * @member {number} node_group_id
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.node_group_id = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup parent_node_group_id.
         * @member {number} parent_node_group_id
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.parent_node_group_id = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup incoming_node_group_ids.
         * @member {Array.<number>} incoming_node_group_ids
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.incoming_node_group_ids = $util.emptyArray;
    
        /**
         * CMsgDOTALeagueNodeGroup advancing_node_group_id.
         * @member {number} advancing_node_group_id
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.advancing_node_group_id = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup advancing_team_count.
         * @member {number} advancing_team_count
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.advancing_team_count = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup team_count.
         * @member {number} team_count
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.team_count = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup node_group_type.
         * @member {ELeagueNodeGroupType} node_group_type
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.node_group_type = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup default_node_type.
         * @member {ELeagueNodeType} default_node_type
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.default_node_type = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup round.
         * @member {number} round
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.round = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup max_rounds.
         * @member {number} max_rounds
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.max_rounds = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup is_tiebreaker.
         * @member {boolean} is_tiebreaker
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.is_tiebreaker = false;
    
        /**
         * CMsgDOTALeagueNodeGroup is_final_group.
         * @member {boolean} is_final_group
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.is_final_group = false;
    
        /**
         * CMsgDOTALeagueNodeGroup is_completed.
         * @member {boolean} is_completed
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.is_completed = false;
    
        /**
         * CMsgDOTALeagueNodeGroup phase.
         * @member {ELeaguePhase} phase
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.phase = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup region.
         * @member {ELeagueRegion} region
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.region = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup start_time.
         * @member {number} start_time
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.start_time = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup end_time.
         * @member {number} end_time
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.end_time = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup secondary_advancing_node_group_id.
         * @member {number} secondary_advancing_node_group_id
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.secondary_advancing_node_group_id = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup secondary_advancing_team_count.
         * @member {number} secondary_advancing_team_count
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.secondary_advancing_team_count = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup tertiary_advancing_node_group_id.
         * @member {number} tertiary_advancing_node_group_id
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.tertiary_advancing_node_group_id = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup tertiary_advancing_team_count.
         * @member {number} tertiary_advancing_team_count
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.tertiary_advancing_team_count = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup elimination_dpc_points.
         * @member {number} elimination_dpc_points
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.elimination_dpc_points = 0;
    
        /**
         * CMsgDOTALeagueNodeGroup team_standings.
         * @member {Array.<CMsgDOTALeagueNodeGroup.ITeamStanding>} team_standings
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.team_standings = $util.emptyArray;
    
        /**
         * CMsgDOTALeagueNodeGroup nodes.
         * @member {Array.<ICMsgDOTALeagueNode>} nodes
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.nodes = $util.emptyArray;
    
        /**
         * CMsgDOTALeagueNodeGroup node_groups.
         * @member {Array.<ICMsgDOTALeagueNodeGroup>} node_groups
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         */
        CMsgDOTALeagueNodeGroup.prototype.node_groups = $util.emptyArray;
    
        /**
         * Creates a new CMsgDOTALeagueNodeGroup instance using the specified properties.
         * @function create
         * @memberof CMsgDOTALeagueNodeGroup
         * @static
         * @param {ICMsgDOTALeagueNodeGroup=} [properties] Properties to set
         * @returns {CMsgDOTALeagueNodeGroup} CMsgDOTALeagueNodeGroup instance
         */
        CMsgDOTALeagueNodeGroup.create = function create(properties) {
            return new CMsgDOTALeagueNodeGroup(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueNodeGroup message. Does not implicitly {@link CMsgDOTALeagueNodeGroup.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTALeagueNodeGroup
         * @static
         * @param {ICMsgDOTALeagueNodeGroup} message CMsgDOTALeagueNodeGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueNodeGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.node_group_id != null && Object.hasOwnProperty.call(message, "node_group_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.node_group_id);
            if (message.parent_node_group_id != null && Object.hasOwnProperty.call(message, "parent_node_group_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.parent_node_group_id);
            if (message.incoming_node_group_ids != null && message.incoming_node_group_ids.length)
                for (var i = 0; i < message.incoming_node_group_ids.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.incoming_node_group_ids[i]);
            if (message.advancing_node_group_id != null && Object.hasOwnProperty.call(message, "advancing_node_group_id"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.advancing_node_group_id);
            if (message.advancing_team_count != null && Object.hasOwnProperty.call(message, "advancing_team_count"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.advancing_team_count);
            if (message.team_count != null && Object.hasOwnProperty.call(message, "team_count"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.team_count);
            if (message.node_group_type != null && Object.hasOwnProperty.call(message, "node_group_type"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.node_group_type);
            if (message.default_node_type != null && Object.hasOwnProperty.call(message, "default_node_type"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.default_node_type);
            if (message.round != null && Object.hasOwnProperty.call(message, "round"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.round);
            if (message.max_rounds != null && Object.hasOwnProperty.call(message, "max_rounds"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.max_rounds);
            if (message.is_tiebreaker != null && Object.hasOwnProperty.call(message, "is_tiebreaker"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.is_tiebreaker);
            if (message.is_final_group != null && Object.hasOwnProperty.call(message, "is_final_group"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.is_final_group);
            if (message.is_completed != null && Object.hasOwnProperty.call(message, "is_completed"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.is_completed);
            if (message.team_standings != null && message.team_standings.length)
                for (var i = 0; i < message.team_standings.length; ++i)
                    $root.CMsgDOTALeagueNodeGroup.TeamStanding.encode(message.team_standings[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.nodes != null && message.nodes.length)
                for (var i = 0; i < message.nodes.length; ++i)
                    $root.CMsgDOTALeagueNode.encode(message.nodes[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.node_groups != null && message.node_groups.length)
                for (var i = 0; i < message.node_groups.length; ++i)
                    $root.CMsgDOTALeagueNodeGroup.encode(message.node_groups[i], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.phase != null && Object.hasOwnProperty.call(message, "phase"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.phase);
            if (message.region != null && Object.hasOwnProperty.call(message, "region"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.region);
            if (message.start_time != null && Object.hasOwnProperty.call(message, "start_time"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.start_time);
            if (message.end_time != null && Object.hasOwnProperty.call(message, "end_time"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.end_time);
            if (message.secondary_advancing_node_group_id != null && Object.hasOwnProperty.call(message, "secondary_advancing_node_group_id"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.secondary_advancing_node_group_id);
            if (message.secondary_advancing_team_count != null && Object.hasOwnProperty.call(message, "secondary_advancing_team_count"))
                writer.uint32(/* id 23, wireType 0 =*/184).uint32(message.secondary_advancing_team_count);
            if (message.tertiary_advancing_node_group_id != null && Object.hasOwnProperty.call(message, "tertiary_advancing_node_group_id"))
                writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.tertiary_advancing_node_group_id);
            if (message.tertiary_advancing_team_count != null && Object.hasOwnProperty.call(message, "tertiary_advancing_team_count"))
                writer.uint32(/* id 25, wireType 0 =*/200).uint32(message.tertiary_advancing_team_count);
            if (message.elimination_dpc_points != null && Object.hasOwnProperty.call(message, "elimination_dpc_points"))
                writer.uint32(/* id 26, wireType 0 =*/208).uint32(message.elimination_dpc_points);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueNodeGroup message, length delimited. Does not implicitly {@link CMsgDOTALeagueNodeGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTALeagueNodeGroup
         * @static
         * @param {ICMsgDOTALeagueNodeGroup} message CMsgDOTALeagueNodeGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueNodeGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTALeagueNodeGroup message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTALeagueNodeGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTALeagueNodeGroup} CMsgDOTALeagueNodeGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueNodeGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueNodeGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.node_group_id = reader.uint32();
                    break;
                case 3:
                    message.parent_node_group_id = reader.uint32();
                    break;
                case 4:
                    if (!(message.incoming_node_group_ids && message.incoming_node_group_ids.length))
                        message.incoming_node_group_ids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.incoming_node_group_ids.push(reader.uint32());
                    } else
                        message.incoming_node_group_ids.push(reader.uint32());
                    break;
                case 5:
                    message.advancing_node_group_id = reader.uint32();
                    break;
                case 6:
                    message.advancing_team_count = reader.uint32();
                    break;
                case 7:
                    message.team_count = reader.uint32();
                    break;
                case 8:
                    message.node_group_type = reader.int32();
                    break;
                case 9:
                    message.default_node_type = reader.int32();
                    break;
                case 10:
                    message.round = reader.uint32();
                    break;
                case 11:
                    message.max_rounds = reader.uint32();
                    break;
                case 12:
                    message.is_tiebreaker = reader.bool();
                    break;
                case 13:
                    message.is_final_group = reader.bool();
                    break;
                case 14:
                    message.is_completed = reader.bool();
                    break;
                case 18:
                    message.phase = reader.int32();
                    break;
                case 19:
                    message.region = reader.int32();
                    break;
                case 20:
                    message.start_time = reader.uint32();
                    break;
                case 21:
                    message.end_time = reader.uint32();
                    break;
                case 22:
                    message.secondary_advancing_node_group_id = reader.uint32();
                    break;
                case 23:
                    message.secondary_advancing_team_count = reader.uint32();
                    break;
                case 24:
                    message.tertiary_advancing_node_group_id = reader.uint32();
                    break;
                case 25:
                    message.tertiary_advancing_team_count = reader.uint32();
                    break;
                case 26:
                    message.elimination_dpc_points = reader.uint32();
                    break;
                case 15:
                    if (!(message.team_standings && message.team_standings.length))
                        message.team_standings = [];
                    message.team_standings.push($root.CMsgDOTALeagueNodeGroup.TeamStanding.decode(reader, reader.uint32()));
                    break;
                case 16:
                    if (!(message.nodes && message.nodes.length))
                        message.nodes = [];
                    message.nodes.push($root.CMsgDOTALeagueNode.decode(reader, reader.uint32()));
                    break;
                case 17:
                    if (!(message.node_groups && message.node_groups.length))
                        message.node_groups = [];
                    message.node_groups.push($root.CMsgDOTALeagueNodeGroup.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTALeagueNodeGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTALeagueNodeGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTALeagueNodeGroup} CMsgDOTALeagueNodeGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueNodeGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTALeagueNodeGroup message.
         * @function verify
         * @memberof CMsgDOTALeagueNodeGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTALeagueNodeGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.node_group_id != null && message.hasOwnProperty("node_group_id"))
                if (!$util.isInteger(message.node_group_id))
                    return "node_group_id: integer expected";
            if (message.parent_node_group_id != null && message.hasOwnProperty("parent_node_group_id"))
                if (!$util.isInteger(message.parent_node_group_id))
                    return "parent_node_group_id: integer expected";
            if (message.incoming_node_group_ids != null && message.hasOwnProperty("incoming_node_group_ids")) {
                if (!Array.isArray(message.incoming_node_group_ids))
                    return "incoming_node_group_ids: array expected";
                for (var i = 0; i < message.incoming_node_group_ids.length; ++i)
                    if (!$util.isInteger(message.incoming_node_group_ids[i]))
                        return "incoming_node_group_ids: integer[] expected";
            }
            if (message.advancing_node_group_id != null && message.hasOwnProperty("advancing_node_group_id"))
                if (!$util.isInteger(message.advancing_node_group_id))
                    return "advancing_node_group_id: integer expected";
            if (message.advancing_team_count != null && message.hasOwnProperty("advancing_team_count"))
                if (!$util.isInteger(message.advancing_team_count))
                    return "advancing_team_count: integer expected";
            if (message.team_count != null && message.hasOwnProperty("team_count"))
                if (!$util.isInteger(message.team_count))
                    return "team_count: integer expected";
            if (message.node_group_type != null && message.hasOwnProperty("node_group_type"))
                switch (message.node_group_type) {
                default:
                    return "node_group_type: enum value expected";
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
            if (message.default_node_type != null && message.hasOwnProperty("default_node_type"))
                switch (message.default_node_type) {
                default:
                    return "default_node_type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.round != null && message.hasOwnProperty("round"))
                if (!$util.isInteger(message.round))
                    return "round: integer expected";
            if (message.max_rounds != null && message.hasOwnProperty("max_rounds"))
                if (!$util.isInteger(message.max_rounds))
                    return "max_rounds: integer expected";
            if (message.is_tiebreaker != null && message.hasOwnProperty("is_tiebreaker"))
                if (typeof message.is_tiebreaker !== "boolean")
                    return "is_tiebreaker: boolean expected";
            if (message.is_final_group != null && message.hasOwnProperty("is_final_group"))
                if (typeof message.is_final_group !== "boolean")
                    return "is_final_group: boolean expected";
            if (message.is_completed != null && message.hasOwnProperty("is_completed"))
                if (typeof message.is_completed !== "boolean")
                    return "is_completed: boolean expected";
            if (message.phase != null && message.hasOwnProperty("phase"))
                switch (message.phase) {
                default:
                    return "phase: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.region != null && message.hasOwnProperty("region"))
                switch (message.region) {
                default:
                    return "region: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.start_time != null && message.hasOwnProperty("start_time"))
                if (!$util.isInteger(message.start_time))
                    return "start_time: integer expected";
            if (message.end_time != null && message.hasOwnProperty("end_time"))
                if (!$util.isInteger(message.end_time))
                    return "end_time: integer expected";
            if (message.secondary_advancing_node_group_id != null && message.hasOwnProperty("secondary_advancing_node_group_id"))
                if (!$util.isInteger(message.secondary_advancing_node_group_id))
                    return "secondary_advancing_node_group_id: integer expected";
            if (message.secondary_advancing_team_count != null && message.hasOwnProperty("secondary_advancing_team_count"))
                if (!$util.isInteger(message.secondary_advancing_team_count))
                    return "secondary_advancing_team_count: integer expected";
            if (message.tertiary_advancing_node_group_id != null && message.hasOwnProperty("tertiary_advancing_node_group_id"))
                if (!$util.isInteger(message.tertiary_advancing_node_group_id))
                    return "tertiary_advancing_node_group_id: integer expected";
            if (message.tertiary_advancing_team_count != null && message.hasOwnProperty("tertiary_advancing_team_count"))
                if (!$util.isInteger(message.tertiary_advancing_team_count))
                    return "tertiary_advancing_team_count: integer expected";
            if (message.elimination_dpc_points != null && message.hasOwnProperty("elimination_dpc_points"))
                if (!$util.isInteger(message.elimination_dpc_points))
                    return "elimination_dpc_points: integer expected";
            if (message.team_standings != null && message.hasOwnProperty("team_standings")) {
                if (!Array.isArray(message.team_standings))
                    return "team_standings: array expected";
                for (var i = 0; i < message.team_standings.length; ++i) {
                    var error = $root.CMsgDOTALeagueNodeGroup.TeamStanding.verify(message.team_standings[i]);
                    if (error)
                        return "team_standings." + error;
                }
            }
            if (message.nodes != null && message.hasOwnProperty("nodes")) {
                if (!Array.isArray(message.nodes))
                    return "nodes: array expected";
                for (var i = 0; i < message.nodes.length; ++i) {
                    var error = $root.CMsgDOTALeagueNode.verify(message.nodes[i]);
                    if (error)
                        return "nodes." + error;
                }
            }
            if (message.node_groups != null && message.hasOwnProperty("node_groups")) {
                if (!Array.isArray(message.node_groups))
                    return "node_groups: array expected";
                for (var i = 0; i < message.node_groups.length; ++i) {
                    var error = $root.CMsgDOTALeagueNodeGroup.verify(message.node_groups[i]);
                    if (error)
                        return "node_groups." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgDOTALeagueNodeGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTALeagueNodeGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTALeagueNodeGroup} CMsgDOTALeagueNodeGroup
         */
        CMsgDOTALeagueNodeGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTALeagueNodeGroup)
                return object;
            var message = new $root.CMsgDOTALeagueNodeGroup();
            if (object.name != null)
                message.name = String(object.name);
            if (object.node_group_id != null)
                message.node_group_id = object.node_group_id >>> 0;
            if (object.parent_node_group_id != null)
                message.parent_node_group_id = object.parent_node_group_id >>> 0;
            if (object.incoming_node_group_ids) {
                if (!Array.isArray(object.incoming_node_group_ids))
                    throw TypeError(".CMsgDOTALeagueNodeGroup.incoming_node_group_ids: array expected");
                message.incoming_node_group_ids = [];
                for (var i = 0; i < object.incoming_node_group_ids.length; ++i)
                    message.incoming_node_group_ids[i] = object.incoming_node_group_ids[i] >>> 0;
            }
            if (object.advancing_node_group_id != null)
                message.advancing_node_group_id = object.advancing_node_group_id >>> 0;
            if (object.advancing_team_count != null)
                message.advancing_team_count = object.advancing_team_count >>> 0;
            if (object.team_count != null)
                message.team_count = object.team_count >>> 0;
            switch (object.node_group_type) {
            case "INVALID_GROUP_TYPE":
            case 0:
                message.node_group_type = 0;
                break;
            case "ORGANIZATIONAL":
            case 1:
                message.node_group_type = 1;
                break;
            case "ROUND_ROBIN":
            case 2:
                message.node_group_type = 2;
                break;
            case "SWISS":
            case 3:
                message.node_group_type = 3;
                break;
            case "BRACKET_SINGLE":
            case 4:
                message.node_group_type = 4;
                break;
            case "BRACKET_DOUBLE_SEED_LOSER":
            case 5:
                message.node_group_type = 5;
                break;
            case "BRACKET_DOUBLE_ALL_WINNER":
            case 6:
                message.node_group_type = 6;
                break;
            case "SHOWMATCH":
            case 7:
                message.node_group_type = 7;
                break;
            case "GSL":
            case 8:
                message.node_group_type = 8;
                break;
            }
            switch (object.default_node_type) {
            case "INVALID_NODE_TYPE":
            case 0:
                message.default_node_type = 0;
                break;
            case "BEST_OF_ONE":
            case 1:
                message.default_node_type = 1;
                break;
            case "BEST_OF_THREE":
            case 2:
                message.default_node_type = 2;
                break;
            case "BEST_OF_FIVE":
            case 3:
                message.default_node_type = 3;
                break;
            case "BEST_OF_TWO":
            case 4:
                message.default_node_type = 4;
                break;
            }
            if (object.round != null)
                message.round = object.round >>> 0;
            if (object.max_rounds != null)
                message.max_rounds = object.max_rounds >>> 0;
            if (object.is_tiebreaker != null)
                message.is_tiebreaker = Boolean(object.is_tiebreaker);
            if (object.is_final_group != null)
                message.is_final_group = Boolean(object.is_final_group);
            if (object.is_completed != null)
                message.is_completed = Boolean(object.is_completed);
            switch (object.phase) {
            case "LEAGUE_PHASE_UNSET":
            case 0:
                message.phase = 0;
                break;
            case "LEAGUE_PHASE_REGIONAL_QUALIFIER":
            case 1:
                message.phase = 1;
                break;
            case "LEAGUE_PHASE_GROUP_STAGE":
            case 2:
                message.phase = 2;
                break;
            case "LEAGUE_PHASE_MAIN_EVENT":
            case 3:
                message.phase = 3;
                break;
            }
            switch (object.region) {
            case "LEAGUE_REGION_UNSET":
            case 0:
                message.region = 0;
                break;
            case "LEAGUE_REGION_NA":
            case 1:
                message.region = 1;
                break;
            case "LEAGUE_REGION_SA":
            case 2:
                message.region = 2;
                break;
            case "LEAGUE_REGION_EUROPE":
            case 3:
                message.region = 3;
                break;
            case "LEAGUE_REGION_CIS":
            case 4:
                message.region = 4;
                break;
            case "LEAGUE_REGION_CHINA":
            case 5:
                message.region = 5;
                break;
            case "LEAGUE_REGION_SEA":
            case 6:
                message.region = 6;
                break;
            }
            if (object.start_time != null)
                message.start_time = object.start_time >>> 0;
            if (object.end_time != null)
                message.end_time = object.end_time >>> 0;
            if (object.secondary_advancing_node_group_id != null)
                message.secondary_advancing_node_group_id = object.secondary_advancing_node_group_id >>> 0;
            if (object.secondary_advancing_team_count != null)
                message.secondary_advancing_team_count = object.secondary_advancing_team_count >>> 0;
            if (object.tertiary_advancing_node_group_id != null)
                message.tertiary_advancing_node_group_id = object.tertiary_advancing_node_group_id >>> 0;
            if (object.tertiary_advancing_team_count != null)
                message.tertiary_advancing_team_count = object.tertiary_advancing_team_count >>> 0;
            if (object.elimination_dpc_points != null)
                message.elimination_dpc_points = object.elimination_dpc_points >>> 0;
            if (object.team_standings) {
                if (!Array.isArray(object.team_standings))
                    throw TypeError(".CMsgDOTALeagueNodeGroup.team_standings: array expected");
                message.team_standings = [];
                for (var i = 0; i < object.team_standings.length; ++i) {
                    if (typeof object.team_standings[i] !== "object")
                        throw TypeError(".CMsgDOTALeagueNodeGroup.team_standings: object expected");
                    message.team_standings[i] = $root.CMsgDOTALeagueNodeGroup.TeamStanding.fromObject(object.team_standings[i]);
                }
            }
            if (object.nodes) {
                if (!Array.isArray(object.nodes))
                    throw TypeError(".CMsgDOTALeagueNodeGroup.nodes: array expected");
                message.nodes = [];
                for (var i = 0; i < object.nodes.length; ++i) {
                    if (typeof object.nodes[i] !== "object")
                        throw TypeError(".CMsgDOTALeagueNodeGroup.nodes: object expected");
                    message.nodes[i] = $root.CMsgDOTALeagueNode.fromObject(object.nodes[i]);
                }
            }
            if (object.node_groups) {
                if (!Array.isArray(object.node_groups))
                    throw TypeError(".CMsgDOTALeagueNodeGroup.node_groups: array expected");
                message.node_groups = [];
                for (var i = 0; i < object.node_groups.length; ++i) {
                    if (typeof object.node_groups[i] !== "object")
                        throw TypeError(".CMsgDOTALeagueNodeGroup.node_groups: object expected");
                    message.node_groups[i] = $root.CMsgDOTALeagueNodeGroup.fromObject(object.node_groups[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTALeagueNodeGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTALeagueNodeGroup
         * @static
         * @param {CMsgDOTALeagueNodeGroup} message CMsgDOTALeagueNodeGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTALeagueNodeGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.incoming_node_group_ids = [];
                object.team_standings = [];
                object.nodes = [];
                object.node_groups = [];
            }
            if (options.defaults) {
                object.name = "";
                object.node_group_id = 0;
                object.parent_node_group_id = 0;
                object.advancing_node_group_id = 0;
                object.advancing_team_count = 0;
                object.team_count = 0;
                object.node_group_type = options.enums === String ? "INVALID_GROUP_TYPE" : 0;
                object.default_node_type = options.enums === String ? "INVALID_NODE_TYPE" : 0;
                object.round = 0;
                object.max_rounds = 0;
                object.is_tiebreaker = false;
                object.is_final_group = false;
                object.is_completed = false;
                object.phase = options.enums === String ? "LEAGUE_PHASE_UNSET" : 0;
                object.region = options.enums === String ? "LEAGUE_REGION_UNSET" : 0;
                object.start_time = 0;
                object.end_time = 0;
                object.secondary_advancing_node_group_id = 0;
                object.secondary_advancing_team_count = 0;
                object.tertiary_advancing_node_group_id = 0;
                object.tertiary_advancing_team_count = 0;
                object.elimination_dpc_points = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.node_group_id != null && message.hasOwnProperty("node_group_id"))
                object.node_group_id = message.node_group_id;
            if (message.parent_node_group_id != null && message.hasOwnProperty("parent_node_group_id"))
                object.parent_node_group_id = message.parent_node_group_id;
            if (message.incoming_node_group_ids && message.incoming_node_group_ids.length) {
                object.incoming_node_group_ids = [];
                for (var j = 0; j < message.incoming_node_group_ids.length; ++j)
                    object.incoming_node_group_ids[j] = message.incoming_node_group_ids[j];
            }
            if (message.advancing_node_group_id != null && message.hasOwnProperty("advancing_node_group_id"))
                object.advancing_node_group_id = message.advancing_node_group_id;
            if (message.advancing_team_count != null && message.hasOwnProperty("advancing_team_count"))
                object.advancing_team_count = message.advancing_team_count;
            if (message.team_count != null && message.hasOwnProperty("team_count"))
                object.team_count = message.team_count;
            if (message.node_group_type != null && message.hasOwnProperty("node_group_type"))
                object.node_group_type = options.enums === String ? $root.ELeagueNodeGroupType[message.node_group_type] : message.node_group_type;
            if (message.default_node_type != null && message.hasOwnProperty("default_node_type"))
                object.default_node_type = options.enums === String ? $root.ELeagueNodeType[message.default_node_type] : message.default_node_type;
            if (message.round != null && message.hasOwnProperty("round"))
                object.round = message.round;
            if (message.max_rounds != null && message.hasOwnProperty("max_rounds"))
                object.max_rounds = message.max_rounds;
            if (message.is_tiebreaker != null && message.hasOwnProperty("is_tiebreaker"))
                object.is_tiebreaker = message.is_tiebreaker;
            if (message.is_final_group != null && message.hasOwnProperty("is_final_group"))
                object.is_final_group = message.is_final_group;
            if (message.is_completed != null && message.hasOwnProperty("is_completed"))
                object.is_completed = message.is_completed;
            if (message.team_standings && message.team_standings.length) {
                object.team_standings = [];
                for (var j = 0; j < message.team_standings.length; ++j)
                    object.team_standings[j] = $root.CMsgDOTALeagueNodeGroup.TeamStanding.toObject(message.team_standings[j], options);
            }
            if (message.nodes && message.nodes.length) {
                object.nodes = [];
                for (var j = 0; j < message.nodes.length; ++j)
                    object.nodes[j] = $root.CMsgDOTALeagueNode.toObject(message.nodes[j], options);
            }
            if (message.node_groups && message.node_groups.length) {
                object.node_groups = [];
                for (var j = 0; j < message.node_groups.length; ++j)
                    object.node_groups[j] = $root.CMsgDOTALeagueNodeGroup.toObject(message.node_groups[j], options);
            }
            if (message.phase != null && message.hasOwnProperty("phase"))
                object.phase = options.enums === String ? $root.ELeaguePhase[message.phase] : message.phase;
            if (message.region != null && message.hasOwnProperty("region"))
                object.region = options.enums === String ? $root.ELeagueRegion[message.region] : message.region;
            if (message.start_time != null && message.hasOwnProperty("start_time"))
                object.start_time = message.start_time;
            if (message.end_time != null && message.hasOwnProperty("end_time"))
                object.end_time = message.end_time;
            if (message.secondary_advancing_node_group_id != null && message.hasOwnProperty("secondary_advancing_node_group_id"))
                object.secondary_advancing_node_group_id = message.secondary_advancing_node_group_id;
            if (message.secondary_advancing_team_count != null && message.hasOwnProperty("secondary_advancing_team_count"))
                object.secondary_advancing_team_count = message.secondary_advancing_team_count;
            if (message.tertiary_advancing_node_group_id != null && message.hasOwnProperty("tertiary_advancing_node_group_id"))
                object.tertiary_advancing_node_group_id = message.tertiary_advancing_node_group_id;
            if (message.tertiary_advancing_team_count != null && message.hasOwnProperty("tertiary_advancing_team_count"))
                object.tertiary_advancing_team_count = message.tertiary_advancing_team_count;
            if (message.elimination_dpc_points != null && message.hasOwnProperty("elimination_dpc_points"))
                object.elimination_dpc_points = message.elimination_dpc_points;
            return object;
        };
    
        /**
         * Converts this CMsgDOTALeagueNodeGroup to JSON.
         * @function toJSON
         * @memberof CMsgDOTALeagueNodeGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTALeagueNodeGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgDOTALeagueNodeGroup.TeamStanding = (function() {
    
            /**
             * Properties of a TeamStanding.
             * @memberof CMsgDOTALeagueNodeGroup
             * @interface ITeamStanding
             * @property {number|null} [standing] TeamStanding standing
             * @property {number|null} [team_id] TeamStanding team_id
             * @property {string|null} [team_name] TeamStanding team_name
             * @property {string|null} [team_tag] TeamStanding team_tag
             * @property {number|Long|null} [team_logo] TeamStanding team_logo
             * @property {string|null} [team_logo_url] TeamStanding team_logo_url
             * @property {number|null} [wins] TeamStanding wins
             * @property {number|null} [losses] TeamStanding losses
             * @property {number|Long|null} [score] TeamStanding score
             */
    
            /**
             * Constructs a new TeamStanding.
             * @memberof CMsgDOTALeagueNodeGroup
             * @classdesc Represents a TeamStanding.
             * @implements ITeamStanding
             * @constructor
             * @param {CMsgDOTALeagueNodeGroup.ITeamStanding=} [properties] Properties to set
             */
            function TeamStanding(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TeamStanding standing.
             * @member {number} standing
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @instance
             */
            TeamStanding.prototype.standing = 0;
    
            /**
             * TeamStanding team_id.
             * @member {number} team_id
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @instance
             */
            TeamStanding.prototype.team_id = 0;
    
            /**
             * TeamStanding team_name.
             * @member {string} team_name
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @instance
             */
            TeamStanding.prototype.team_name = "";
    
            /**
             * TeamStanding team_tag.
             * @member {string} team_tag
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @instance
             */
            TeamStanding.prototype.team_tag = "";
    
            /**
             * TeamStanding team_logo.
             * @member {number|Long} team_logo
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @instance
             */
            TeamStanding.prototype.team_logo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * TeamStanding team_logo_url.
             * @member {string} team_logo_url
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @instance
             */
            TeamStanding.prototype.team_logo_url = "";
    
            /**
             * TeamStanding wins.
             * @member {number} wins
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @instance
             */
            TeamStanding.prototype.wins = 0;
    
            /**
             * TeamStanding losses.
             * @member {number} losses
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @instance
             */
            TeamStanding.prototype.losses = 0;
    
            /**
             * TeamStanding score.
             * @member {number|Long} score
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @instance
             */
            TeamStanding.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new TeamStanding instance using the specified properties.
             * @function create
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @static
             * @param {CMsgDOTALeagueNodeGroup.ITeamStanding=} [properties] Properties to set
             * @returns {CMsgDOTALeagueNodeGroup.TeamStanding} TeamStanding instance
             */
            TeamStanding.create = function create(properties) {
                return new TeamStanding(properties);
            };
    
            /**
             * Encodes the specified TeamStanding message. Does not implicitly {@link CMsgDOTALeagueNodeGroup.TeamStanding.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @static
             * @param {CMsgDOTALeagueNodeGroup.ITeamStanding} message TeamStanding message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TeamStanding.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.standing != null && Object.hasOwnProperty.call(message, "standing"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.standing);
                if (message.team_id != null && Object.hasOwnProperty.call(message, "team_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.team_id);
                if (message.team_name != null && Object.hasOwnProperty.call(message, "team_name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.team_name);
                if (message.team_tag != null && Object.hasOwnProperty.call(message, "team_tag"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.team_tag);
                if (message.team_logo != null && Object.hasOwnProperty.call(message, "team_logo"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.team_logo);
                if (message.team_logo_url != null && Object.hasOwnProperty.call(message, "team_logo_url"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.team_logo_url);
                if (message.wins != null && Object.hasOwnProperty.call(message, "wins"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.wins);
                if (message.losses != null && Object.hasOwnProperty.call(message, "losses"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.losses);
                if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int64(message.score);
                return writer;
            };
    
            /**
             * Encodes the specified TeamStanding message, length delimited. Does not implicitly {@link CMsgDOTALeagueNodeGroup.TeamStanding.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @static
             * @param {CMsgDOTALeagueNodeGroup.ITeamStanding} message TeamStanding message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TeamStanding.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TeamStanding message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTALeagueNodeGroup.TeamStanding} TeamStanding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TeamStanding.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueNodeGroup.TeamStanding();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.standing = reader.uint32();
                        break;
                    case 2:
                        message.team_id = reader.uint32();
                        break;
                    case 3:
                        message.team_name = reader.string();
                        break;
                    case 4:
                        message.team_tag = reader.string();
                        break;
                    case 5:
                        message.team_logo = reader.uint64();
                        break;
                    case 6:
                        message.team_logo_url = reader.string();
                        break;
                    case 7:
                        message.wins = reader.uint32();
                        break;
                    case 8:
                        message.losses = reader.uint32();
                        break;
                    case 9:
                        message.score = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TeamStanding message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTALeagueNodeGroup.TeamStanding} TeamStanding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TeamStanding.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TeamStanding message.
             * @function verify
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TeamStanding.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.standing != null && message.hasOwnProperty("standing"))
                    if (!$util.isInteger(message.standing))
                        return "standing: integer expected";
                if (message.team_id != null && message.hasOwnProperty("team_id"))
                    if (!$util.isInteger(message.team_id))
                        return "team_id: integer expected";
                if (message.team_name != null && message.hasOwnProperty("team_name"))
                    if (!$util.isString(message.team_name))
                        return "team_name: string expected";
                if (message.team_tag != null && message.hasOwnProperty("team_tag"))
                    if (!$util.isString(message.team_tag))
                        return "team_tag: string expected";
                if (message.team_logo != null && message.hasOwnProperty("team_logo"))
                    if (!$util.isInteger(message.team_logo) && !(message.team_logo && $util.isInteger(message.team_logo.low) && $util.isInteger(message.team_logo.high)))
                        return "team_logo: integer|Long expected";
                if (message.team_logo_url != null && message.hasOwnProperty("team_logo_url"))
                    if (!$util.isString(message.team_logo_url))
                        return "team_logo_url: string expected";
                if (message.wins != null && message.hasOwnProperty("wins"))
                    if (!$util.isInteger(message.wins))
                        return "wins: integer expected";
                if (message.losses != null && message.hasOwnProperty("losses"))
                    if (!$util.isInteger(message.losses))
                        return "losses: integer expected";
                if (message.score != null && message.hasOwnProperty("score"))
                    if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                        return "score: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a TeamStanding message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTALeagueNodeGroup.TeamStanding} TeamStanding
             */
            TeamStanding.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTALeagueNodeGroup.TeamStanding)
                    return object;
                var message = new $root.CMsgDOTALeagueNodeGroup.TeamStanding();
                if (object.standing != null)
                    message.standing = object.standing >>> 0;
                if (object.team_id != null)
                    message.team_id = object.team_id >>> 0;
                if (object.team_name != null)
                    message.team_name = String(object.team_name);
                if (object.team_tag != null)
                    message.team_tag = String(object.team_tag);
                if (object.team_logo != null)
                    if ($util.Long)
                        (message.team_logo = $util.Long.fromValue(object.team_logo)).unsigned = true;
                    else if (typeof object.team_logo === "string")
                        message.team_logo = parseInt(object.team_logo, 10);
                    else if (typeof object.team_logo === "number")
                        message.team_logo = object.team_logo;
                    else if (typeof object.team_logo === "object")
                        message.team_logo = new $util.LongBits(object.team_logo.low >>> 0, object.team_logo.high >>> 0).toNumber(true);
                if (object.team_logo_url != null)
                    message.team_logo_url = String(object.team_logo_url);
                if (object.wins != null)
                    message.wins = object.wins >>> 0;
                if (object.losses != null)
                    message.losses = object.losses >>> 0;
                if (object.score != null)
                    if ($util.Long)
                        (message.score = $util.Long.fromValue(object.score)).unsigned = false;
                    else if (typeof object.score === "string")
                        message.score = parseInt(object.score, 10);
                    else if (typeof object.score === "number")
                        message.score = object.score;
                    else if (typeof object.score === "object")
                        message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from a TeamStanding message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @static
             * @param {CMsgDOTALeagueNodeGroup.TeamStanding} message TeamStanding
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TeamStanding.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.standing = 0;
                    object.team_id = 0;
                    object.team_name = "";
                    object.team_tag = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.team_logo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.team_logo = options.longs === String ? "0" : 0;
                    object.team_logo_url = "";
                    object.wins = 0;
                    object.losses = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.score = options.longs === String ? "0" : 0;
                }
                if (message.standing != null && message.hasOwnProperty("standing"))
                    object.standing = message.standing;
                if (message.team_id != null && message.hasOwnProperty("team_id"))
                    object.team_id = message.team_id;
                if (message.team_name != null && message.hasOwnProperty("team_name"))
                    object.team_name = message.team_name;
                if (message.team_tag != null && message.hasOwnProperty("team_tag"))
                    object.team_tag = message.team_tag;
                if (message.team_logo != null && message.hasOwnProperty("team_logo"))
                    if (typeof message.team_logo === "number")
                        object.team_logo = options.longs === String ? String(message.team_logo) : message.team_logo;
                    else
                        object.team_logo = options.longs === String ? $util.Long.prototype.toString.call(message.team_logo) : options.longs === Number ? new $util.LongBits(message.team_logo.low >>> 0, message.team_logo.high >>> 0).toNumber(true) : message.team_logo;
                if (message.team_logo_url != null && message.hasOwnProperty("team_logo_url"))
                    object.team_logo_url = message.team_logo_url;
                if (message.wins != null && message.hasOwnProperty("wins"))
                    object.wins = message.wins;
                if (message.losses != null && message.hasOwnProperty("losses"))
                    object.losses = message.losses;
                if (message.score != null && message.hasOwnProperty("score"))
                    if (typeof message.score === "number")
                        object.score = options.longs === String ? String(message.score) : message.score;
                    else
                        object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
                return object;
            };
    
            /**
             * Converts this TeamStanding to JSON.
             * @function toJSON
             * @memberof CMsgDOTALeagueNodeGroup.TeamStanding
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TeamStanding.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TeamStanding;
        })();
    
        return CMsgDOTALeagueNodeGroup;
    })();
    
    $root.CMsgDOTALeague = (function() {
    
        /**
         * Properties of a CMsgDOTALeague.
         * @exports ICMsgDOTALeague
         * @interface ICMsgDOTALeague
         * @property {CMsgDOTALeague.IInfo|null} [info] CMsgDOTALeague info
         * @property {CMsgDOTALeague.IPrizePool|null} [prize_pool] CMsgDOTALeague prize_pool
         * @property {Array.<CMsgDOTALeague.IAdmin>|null} [admins] CMsgDOTALeague admins
         * @property {Array.<CMsgDOTALeague.IStream>|null} [streams] CMsgDOTALeague streams
         * @property {Array.<ICMsgDOTALeagueNodeGroup>|null} [node_groups] CMsgDOTALeague node_groups
         * @property {Array.<CMsgDOTALeague.ISeriesInfo>|null} [series_infos] CMsgDOTALeague series_infos
         * @property {Array.<CMsgDOTALeague.IPlayer>|null} [registered_players] CMsgDOTALeague registered_players
         */
    
        /**
         * Constructs a new CMsgDOTALeague.
         * @exports CMsgDOTALeague
         * @classdesc Represents a CMsgDOTALeague.
         * @implements ICMsgDOTALeague
         * @constructor
         * @param {ICMsgDOTALeague=} [properties] Properties to set
         */
        function CMsgDOTALeague(properties) {
            this.admins = [];
            this.streams = [];
            this.node_groups = [];
            this.series_infos = [];
            this.registered_players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTALeague info.
         * @member {CMsgDOTALeague.IInfo|null|undefined} info
         * @memberof CMsgDOTALeague
         * @instance
         */
        CMsgDOTALeague.prototype.info = null;
    
        /**
         * CMsgDOTALeague prize_pool.
         * @member {CMsgDOTALeague.IPrizePool|null|undefined} prize_pool
         * @memberof CMsgDOTALeague
         * @instance
         */
        CMsgDOTALeague.prototype.prize_pool = null;
    
        /**
         * CMsgDOTALeague admins.
         * @member {Array.<CMsgDOTALeague.IAdmin>} admins
         * @memberof CMsgDOTALeague
         * @instance
         */
        CMsgDOTALeague.prototype.admins = $util.emptyArray;
    
        /**
         * CMsgDOTALeague streams.
         * @member {Array.<CMsgDOTALeague.IStream>} streams
         * @memberof CMsgDOTALeague
         * @instance
         */
        CMsgDOTALeague.prototype.streams = $util.emptyArray;
    
        /**
         * CMsgDOTALeague node_groups.
         * @member {Array.<ICMsgDOTALeagueNodeGroup>} node_groups
         * @memberof CMsgDOTALeague
         * @instance
         */
        CMsgDOTALeague.prototype.node_groups = $util.emptyArray;
    
        /**
         * CMsgDOTALeague series_infos.
         * @member {Array.<CMsgDOTALeague.ISeriesInfo>} series_infos
         * @memberof CMsgDOTALeague
         * @instance
         */
        CMsgDOTALeague.prototype.series_infos = $util.emptyArray;
    
        /**
         * CMsgDOTALeague registered_players.
         * @member {Array.<CMsgDOTALeague.IPlayer>} registered_players
         * @memberof CMsgDOTALeague
         * @instance
         */
        CMsgDOTALeague.prototype.registered_players = $util.emptyArray;
    
        /**
         * Creates a new CMsgDOTALeague instance using the specified properties.
         * @function create
         * @memberof CMsgDOTALeague
         * @static
         * @param {ICMsgDOTALeague=} [properties] Properties to set
         * @returns {CMsgDOTALeague} CMsgDOTALeague instance
         */
        CMsgDOTALeague.create = function create(properties) {
            return new CMsgDOTALeague(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTALeague message. Does not implicitly {@link CMsgDOTALeague.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTALeague
         * @static
         * @param {ICMsgDOTALeague} message CMsgDOTALeague message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeague.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.info != null && Object.hasOwnProperty.call(message, "info"))
                $root.CMsgDOTALeague.Info.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.prize_pool != null && Object.hasOwnProperty.call(message, "prize_pool"))
                $root.CMsgDOTALeague.PrizePool.encode(message.prize_pool, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.admins != null && message.admins.length)
                for (var i = 0; i < message.admins.length; ++i)
                    $root.CMsgDOTALeague.Admin.encode(message.admins[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.streams != null && message.streams.length)
                for (var i = 0; i < message.streams.length; ++i)
                    $root.CMsgDOTALeague.Stream.encode(message.streams[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.node_groups != null && message.node_groups.length)
                for (var i = 0; i < message.node_groups.length; ++i)
                    $root.CMsgDOTALeagueNodeGroup.encode(message.node_groups[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.series_infos != null && message.series_infos.length)
                for (var i = 0; i < message.series_infos.length; ++i)
                    $root.CMsgDOTALeague.SeriesInfo.encode(message.series_infos[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.registered_players != null && message.registered_players.length)
                for (var i = 0; i < message.registered_players.length; ++i)
                    $root.CMsgDOTALeague.Player.encode(message.registered_players[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTALeague message, length delimited. Does not implicitly {@link CMsgDOTALeague.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTALeague
         * @static
         * @param {ICMsgDOTALeague} message CMsgDOTALeague message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeague.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTALeague message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTALeague
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTALeague} CMsgDOTALeague
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeague.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeague();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.info = $root.CMsgDOTALeague.Info.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.prize_pool = $root.CMsgDOTALeague.PrizePool.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.admins && message.admins.length))
                        message.admins = [];
                    message.admins.push($root.CMsgDOTALeague.Admin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.streams && message.streams.length))
                        message.streams = [];
                    message.streams.push($root.CMsgDOTALeague.Stream.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.node_groups && message.node_groups.length))
                        message.node_groups = [];
                    message.node_groups.push($root.CMsgDOTALeagueNodeGroup.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.series_infos && message.series_infos.length))
                        message.series_infos = [];
                    message.series_infos.push($root.CMsgDOTALeague.SeriesInfo.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.registered_players && message.registered_players.length))
                        message.registered_players = [];
                    message.registered_players.push($root.CMsgDOTALeague.Player.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTALeague message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTALeague
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTALeague} CMsgDOTALeague
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeague.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTALeague message.
         * @function verify
         * @memberof CMsgDOTALeague
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTALeague.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.info != null && message.hasOwnProperty("info")) {
                var error = $root.CMsgDOTALeague.Info.verify(message.info);
                if (error)
                    return "info." + error;
            }
            if (message.prize_pool != null && message.hasOwnProperty("prize_pool")) {
                var error = $root.CMsgDOTALeague.PrizePool.verify(message.prize_pool);
                if (error)
                    return "prize_pool." + error;
            }
            if (message.admins != null && message.hasOwnProperty("admins")) {
                if (!Array.isArray(message.admins))
                    return "admins: array expected";
                for (var i = 0; i < message.admins.length; ++i) {
                    var error = $root.CMsgDOTALeague.Admin.verify(message.admins[i]);
                    if (error)
                        return "admins." + error;
                }
            }
            if (message.streams != null && message.hasOwnProperty("streams")) {
                if (!Array.isArray(message.streams))
                    return "streams: array expected";
                for (var i = 0; i < message.streams.length; ++i) {
                    var error = $root.CMsgDOTALeague.Stream.verify(message.streams[i]);
                    if (error)
                        return "streams." + error;
                }
            }
            if (message.node_groups != null && message.hasOwnProperty("node_groups")) {
                if (!Array.isArray(message.node_groups))
                    return "node_groups: array expected";
                for (var i = 0; i < message.node_groups.length; ++i) {
                    var error = $root.CMsgDOTALeagueNodeGroup.verify(message.node_groups[i]);
                    if (error)
                        return "node_groups." + error;
                }
            }
            if (message.series_infos != null && message.hasOwnProperty("series_infos")) {
                if (!Array.isArray(message.series_infos))
                    return "series_infos: array expected";
                for (var i = 0; i < message.series_infos.length; ++i) {
                    var error = $root.CMsgDOTALeague.SeriesInfo.verify(message.series_infos[i]);
                    if (error)
                        return "series_infos." + error;
                }
            }
            if (message.registered_players != null && message.hasOwnProperty("registered_players")) {
                if (!Array.isArray(message.registered_players))
                    return "registered_players: array expected";
                for (var i = 0; i < message.registered_players.length; ++i) {
                    var error = $root.CMsgDOTALeague.Player.verify(message.registered_players[i]);
                    if (error)
                        return "registered_players." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgDOTALeague message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTALeague
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTALeague} CMsgDOTALeague
         */
        CMsgDOTALeague.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTALeague)
                return object;
            var message = new $root.CMsgDOTALeague();
            if (object.info != null) {
                if (typeof object.info !== "object")
                    throw TypeError(".CMsgDOTALeague.info: object expected");
                message.info = $root.CMsgDOTALeague.Info.fromObject(object.info);
            }
            if (object.prize_pool != null) {
                if (typeof object.prize_pool !== "object")
                    throw TypeError(".CMsgDOTALeague.prize_pool: object expected");
                message.prize_pool = $root.CMsgDOTALeague.PrizePool.fromObject(object.prize_pool);
            }
            if (object.admins) {
                if (!Array.isArray(object.admins))
                    throw TypeError(".CMsgDOTALeague.admins: array expected");
                message.admins = [];
                for (var i = 0; i < object.admins.length; ++i) {
                    if (typeof object.admins[i] !== "object")
                        throw TypeError(".CMsgDOTALeague.admins: object expected");
                    message.admins[i] = $root.CMsgDOTALeague.Admin.fromObject(object.admins[i]);
                }
            }
            if (object.streams) {
                if (!Array.isArray(object.streams))
                    throw TypeError(".CMsgDOTALeague.streams: array expected");
                message.streams = [];
                for (var i = 0; i < object.streams.length; ++i) {
                    if (typeof object.streams[i] !== "object")
                        throw TypeError(".CMsgDOTALeague.streams: object expected");
                    message.streams[i] = $root.CMsgDOTALeague.Stream.fromObject(object.streams[i]);
                }
            }
            if (object.node_groups) {
                if (!Array.isArray(object.node_groups))
                    throw TypeError(".CMsgDOTALeague.node_groups: array expected");
                message.node_groups = [];
                for (var i = 0; i < object.node_groups.length; ++i) {
                    if (typeof object.node_groups[i] !== "object")
                        throw TypeError(".CMsgDOTALeague.node_groups: object expected");
                    message.node_groups[i] = $root.CMsgDOTALeagueNodeGroup.fromObject(object.node_groups[i]);
                }
            }
            if (object.series_infos) {
                if (!Array.isArray(object.series_infos))
                    throw TypeError(".CMsgDOTALeague.series_infos: array expected");
                message.series_infos = [];
                for (var i = 0; i < object.series_infos.length; ++i) {
                    if (typeof object.series_infos[i] !== "object")
                        throw TypeError(".CMsgDOTALeague.series_infos: object expected");
                    message.series_infos[i] = $root.CMsgDOTALeague.SeriesInfo.fromObject(object.series_infos[i]);
                }
            }
            if (object.registered_players) {
                if (!Array.isArray(object.registered_players))
                    throw TypeError(".CMsgDOTALeague.registered_players: array expected");
                message.registered_players = [];
                for (var i = 0; i < object.registered_players.length; ++i) {
                    if (typeof object.registered_players[i] !== "object")
                        throw TypeError(".CMsgDOTALeague.registered_players: object expected");
                    message.registered_players[i] = $root.CMsgDOTALeague.Player.fromObject(object.registered_players[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTALeague message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTALeague
         * @static
         * @param {CMsgDOTALeague} message CMsgDOTALeague
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTALeague.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.admins = [];
                object.streams = [];
                object.node_groups = [];
                object.series_infos = [];
                object.registered_players = [];
            }
            if (options.defaults) {
                object.info = null;
                object.prize_pool = null;
            }
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = $root.CMsgDOTALeague.Info.toObject(message.info, options);
            if (message.prize_pool != null && message.hasOwnProperty("prize_pool"))
                object.prize_pool = $root.CMsgDOTALeague.PrizePool.toObject(message.prize_pool, options);
            if (message.admins && message.admins.length) {
                object.admins = [];
                for (var j = 0; j < message.admins.length; ++j)
                    object.admins[j] = $root.CMsgDOTALeague.Admin.toObject(message.admins[j], options);
            }
            if (message.streams && message.streams.length) {
                object.streams = [];
                for (var j = 0; j < message.streams.length; ++j)
                    object.streams[j] = $root.CMsgDOTALeague.Stream.toObject(message.streams[j], options);
            }
            if (message.node_groups && message.node_groups.length) {
                object.node_groups = [];
                for (var j = 0; j < message.node_groups.length; ++j)
                    object.node_groups[j] = $root.CMsgDOTALeagueNodeGroup.toObject(message.node_groups[j], options);
            }
            if (message.series_infos && message.series_infos.length) {
                object.series_infos = [];
                for (var j = 0; j < message.series_infos.length; ++j)
                    object.series_infos[j] = $root.CMsgDOTALeague.SeriesInfo.toObject(message.series_infos[j], options);
            }
            if (message.registered_players && message.registered_players.length) {
                object.registered_players = [];
                for (var j = 0; j < message.registered_players.length; ++j)
                    object.registered_players[j] = $root.CMsgDOTALeague.Player.toObject(message.registered_players[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgDOTALeague to JSON.
         * @function toJSON
         * @memberof CMsgDOTALeague
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTALeague.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgDOTALeague.Info = (function() {
    
            /**
             * Properties of an Info.
             * @memberof CMsgDOTALeague
             * @interface IInfo
             * @property {number|null} [league_id] Info league_id
             * @property {string|null} [name] Info name
             * @property {ELeagueTier|null} [tier] Info tier
             * @property {ELeagueRegion|null} [region] Info region
             * @property {string|null} [url] Info url
             * @property {string|null} [description] Info description
             * @property {string|null} [notes] Info notes
             * @property {number|null} [start_timestamp] Info start_timestamp
             * @property {number|null} [end_timestamp] Info end_timestamp
             * @property {number|null} [pro_circuit_points] Info pro_circuit_points
             * @property {number|null} [image_bits] Info image_bits
             * @property {ELeagueStatus|null} [status] Info status
             * @property {number|null} [most_recent_activity] Info most_recent_activity
             * @property {number|null} [registration_period] Info registration_period
             */
    
            /**
             * Constructs a new Info.
             * @memberof CMsgDOTALeague
             * @classdesc Represents an Info.
             * @implements IInfo
             * @constructor
             * @param {CMsgDOTALeague.IInfo=} [properties] Properties to set
             */
            function Info(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Info league_id.
             * @member {number} league_id
             * @memberof CMsgDOTALeague.Info
             * @instance
             */
            Info.prototype.league_id = 0;
    
            /**
             * Info name.
             * @member {string} name
             * @memberof CMsgDOTALeague.Info
             * @instance
             */
            Info.prototype.name = "";
    
            /**
             * Info tier.
             * @member {ELeagueTier} tier
             * @memberof CMsgDOTALeague.Info
             * @instance
             */
            Info.prototype.tier = 0;
    
            /**
             * Info region.
             * @member {ELeagueRegion} region
             * @memberof CMsgDOTALeague.Info
             * @instance
             */
            Info.prototype.region = 0;
    
            /**
             * Info url.
             * @member {string} url
             * @memberof CMsgDOTALeague.Info
             * @instance
             */
            Info.prototype.url = "";
    
            /**
             * Info description.
             * @member {string} description
             * @memberof CMsgDOTALeague.Info
             * @instance
             */
            Info.prototype.description = "";
    
            /**
             * Info notes.
             * @member {string} notes
             * @memberof CMsgDOTALeague.Info
             * @instance
             */
            Info.prototype.notes = "";
    
            /**
             * Info start_timestamp.
             * @member {number} start_timestamp
             * @memberof CMsgDOTALeague.Info
             * @instance
             */
            Info.prototype.start_timestamp = 0;
    
            /**
             * Info end_timestamp.
             * @member {number} end_timestamp
             * @memberof CMsgDOTALeague.Info
             * @instance
             */
            Info.prototype.end_timestamp = 0;
    
            /**
             * Info pro_circuit_points.
             * @member {number} pro_circuit_points
             * @memberof CMsgDOTALeague.Info
             * @instance
             */
            Info.prototype.pro_circuit_points = 0;
    
            /**
             * Info image_bits.
             * @member {number} image_bits
             * @memberof CMsgDOTALeague.Info
             * @instance
             */
            Info.prototype.image_bits = 0;
    
            /**
             * Info status.
             * @member {ELeagueStatus} status
             * @memberof CMsgDOTALeague.Info
             * @instance
             */
            Info.prototype.status = 0;
    
            /**
             * Info most_recent_activity.
             * @member {number} most_recent_activity
             * @memberof CMsgDOTALeague.Info
             * @instance
             */
            Info.prototype.most_recent_activity = 0;
    
            /**
             * Info registration_period.
             * @member {number} registration_period
             * @memberof CMsgDOTALeague.Info
             * @instance
             */
            Info.prototype.registration_period = 0;
    
            /**
             * Creates a new Info instance using the specified properties.
             * @function create
             * @memberof CMsgDOTALeague.Info
             * @static
             * @param {CMsgDOTALeague.IInfo=} [properties] Properties to set
             * @returns {CMsgDOTALeague.Info} Info instance
             */
            Info.create = function create(properties) {
                return new Info(properties);
            };
    
            /**
             * Encodes the specified Info message. Does not implicitly {@link CMsgDOTALeague.Info.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTALeague.Info
             * @static
             * @param {CMsgDOTALeague.IInfo} message Info message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Info.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.league_id != null && Object.hasOwnProperty.call(message, "league_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.league_id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.tier != null && Object.hasOwnProperty.call(message, "tier"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.tier);
                if (message.region != null && Object.hasOwnProperty.call(message, "region"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.region);
                if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.url);
                if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.description);
                if (message.notes != null && Object.hasOwnProperty.call(message, "notes"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.notes);
                if (message.start_timestamp != null && Object.hasOwnProperty.call(message, "start_timestamp"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.start_timestamp);
                if (message.end_timestamp != null && Object.hasOwnProperty.call(message, "end_timestamp"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.end_timestamp);
                if (message.pro_circuit_points != null && Object.hasOwnProperty.call(message, "pro_circuit_points"))
                    writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.pro_circuit_points);
                if (message.image_bits != null && Object.hasOwnProperty.call(message, "image_bits"))
                    writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.image_bits);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 12, wireType 0 =*/96).int32(message.status);
                if (message.most_recent_activity != null && Object.hasOwnProperty.call(message, "most_recent_activity"))
                    writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.most_recent_activity);
                if (message.registration_period != null && Object.hasOwnProperty.call(message, "registration_period"))
                    writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.registration_period);
                return writer;
            };
    
            /**
             * Encodes the specified Info message, length delimited. Does not implicitly {@link CMsgDOTALeague.Info.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTALeague.Info
             * @static
             * @param {CMsgDOTALeague.IInfo} message Info message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Info.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Info message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTALeague.Info
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTALeague.Info} Info
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Info.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeague.Info();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.league_id = reader.uint32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.tier = reader.int32();
                        break;
                    case 4:
                        message.region = reader.int32();
                        break;
                    case 5:
                        message.url = reader.string();
                        break;
                    case 6:
                        message.description = reader.string();
                        break;
                    case 7:
                        message.notes = reader.string();
                        break;
                    case 8:
                        message.start_timestamp = reader.uint32();
                        break;
                    case 9:
                        message.end_timestamp = reader.uint32();
                        break;
                    case 10:
                        message.pro_circuit_points = reader.uint32();
                        break;
                    case 11:
                        message.image_bits = reader.uint32();
                        break;
                    case 12:
                        message.status = reader.int32();
                        break;
                    case 13:
                        message.most_recent_activity = reader.uint32();
                        break;
                    case 14:
                        message.registration_period = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Info message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTALeague.Info
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTALeague.Info} Info
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Info.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Info message.
             * @function verify
             * @memberof CMsgDOTALeague.Info
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Info.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.league_id != null && message.hasOwnProperty("league_id"))
                    if (!$util.isInteger(message.league_id))
                        return "league_id: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.tier != null && message.hasOwnProperty("tier"))
                    switch (message.tier) {
                    default:
                        return "tier: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    }
                if (message.region != null && message.hasOwnProperty("region"))
                    switch (message.region) {
                    default:
                        return "region: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    }
                if (message.url != null && message.hasOwnProperty("url"))
                    if (!$util.isString(message.url))
                        return "url: string expected";
                if (message.description != null && message.hasOwnProperty("description"))
                    if (!$util.isString(message.description))
                        return "description: string expected";
                if (message.notes != null && message.hasOwnProperty("notes"))
                    if (!$util.isString(message.notes))
                        return "notes: string expected";
                if (message.start_timestamp != null && message.hasOwnProperty("start_timestamp"))
                    if (!$util.isInteger(message.start_timestamp))
                        return "start_timestamp: integer expected";
                if (message.end_timestamp != null && message.hasOwnProperty("end_timestamp"))
                    if (!$util.isInteger(message.end_timestamp))
                        return "end_timestamp: integer expected";
                if (message.pro_circuit_points != null && message.hasOwnProperty("pro_circuit_points"))
                    if (!$util.isInteger(message.pro_circuit_points))
                        return "pro_circuit_points: integer expected";
                if (message.image_bits != null && message.hasOwnProperty("image_bits"))
                    if (!$util.isInteger(message.image_bits))
                        return "image_bits: integer expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    }
                if (message.most_recent_activity != null && message.hasOwnProperty("most_recent_activity"))
                    if (!$util.isInteger(message.most_recent_activity))
                        return "most_recent_activity: integer expected";
                if (message.registration_period != null && message.hasOwnProperty("registration_period"))
                    if (!$util.isInteger(message.registration_period))
                        return "registration_period: integer expected";
                return null;
            };
    
            /**
             * Creates an Info message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTALeague.Info
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTALeague.Info} Info
             */
            Info.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTALeague.Info)
                    return object;
                var message = new $root.CMsgDOTALeague.Info();
                if (object.league_id != null)
                    message.league_id = object.league_id >>> 0;
                if (object.name != null)
                    message.name = String(object.name);
                switch (object.tier) {
                case "LEAGUE_TIER_UNSET":
                case 0:
                    message.tier = 0;
                    break;
                case "LEAGUE_TIER_AMATEUR":
                case 1:
                    message.tier = 1;
                    break;
                case "LEAGUE_TIER_PROFESSIONAL":
                case 2:
                    message.tier = 2;
                    break;
                case "LEAGUE_TIER_MINOR":
                case 3:
                    message.tier = 3;
                    break;
                case "LEAGUE_TIER_MAJOR":
                case 4:
                    message.tier = 4;
                    break;
                case "LEAGUE_TIER_INTERNATIONAL":
                case 5:
                    message.tier = 5;
                    break;
                case "LEAGUE_TIER_DPC_QUALIFIER":
                case 6:
                    message.tier = 6;
                    break;
                }
                switch (object.region) {
                case "LEAGUE_REGION_UNSET":
                case 0:
                    message.region = 0;
                    break;
                case "LEAGUE_REGION_NA":
                case 1:
                    message.region = 1;
                    break;
                case "LEAGUE_REGION_SA":
                case 2:
                    message.region = 2;
                    break;
                case "LEAGUE_REGION_EUROPE":
                case 3:
                    message.region = 3;
                    break;
                case "LEAGUE_REGION_CIS":
                case 4:
                    message.region = 4;
                    break;
                case "LEAGUE_REGION_CHINA":
                case 5:
                    message.region = 5;
                    break;
                case "LEAGUE_REGION_SEA":
                case 6:
                    message.region = 6;
                    break;
                }
                if (object.url != null)
                    message.url = String(object.url);
                if (object.description != null)
                    message.description = String(object.description);
                if (object.notes != null)
                    message.notes = String(object.notes);
                if (object.start_timestamp != null)
                    message.start_timestamp = object.start_timestamp >>> 0;
                if (object.end_timestamp != null)
                    message.end_timestamp = object.end_timestamp >>> 0;
                if (object.pro_circuit_points != null)
                    message.pro_circuit_points = object.pro_circuit_points >>> 0;
                if (object.image_bits != null)
                    message.image_bits = object.image_bits >>> 0;
                switch (object.status) {
                case "LEAGUE_STATUS_UNSET":
                case 0:
                    message.status = 0;
                    break;
                case "LEAGUE_STATUS_UNSUBMITTED":
                case 1:
                    message.status = 1;
                    break;
                case "LEAGUE_STATUS_SUBMITTED":
                case 2:
                    message.status = 2;
                    break;
                case "LEAGUE_STATUS_ACCEPTED":
                case 3:
                    message.status = 3;
                    break;
                case "LEAGUE_STATUS_REJECTED":
                case 4:
                    message.status = 4;
                    break;
                case "LEAGUE_STATUS_CONCLUDED":
                case 5:
                    message.status = 5;
                    break;
                case "LEAGUE_STATUS_DELETED":
                case 6:
                    message.status = 6;
                    break;
                }
                if (object.most_recent_activity != null)
                    message.most_recent_activity = object.most_recent_activity >>> 0;
                if (object.registration_period != null)
                    message.registration_period = object.registration_period >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from an Info message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTALeague.Info
             * @static
             * @param {CMsgDOTALeague.Info} message Info
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Info.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.league_id = 0;
                    object.name = "";
                    object.tier = options.enums === String ? "LEAGUE_TIER_UNSET" : 0;
                    object.region = options.enums === String ? "LEAGUE_REGION_UNSET" : 0;
                    object.url = "";
                    object.description = "";
                    object.notes = "";
                    object.start_timestamp = 0;
                    object.end_timestamp = 0;
                    object.pro_circuit_points = 0;
                    object.image_bits = 0;
                    object.status = options.enums === String ? "LEAGUE_STATUS_UNSET" : 0;
                    object.most_recent_activity = 0;
                    object.registration_period = 0;
                }
                if (message.league_id != null && message.hasOwnProperty("league_id"))
                    object.league_id = message.league_id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.tier != null && message.hasOwnProperty("tier"))
                    object.tier = options.enums === String ? $root.ELeagueTier[message.tier] : message.tier;
                if (message.region != null && message.hasOwnProperty("region"))
                    object.region = options.enums === String ? $root.ELeagueRegion[message.region] : message.region;
                if (message.url != null && message.hasOwnProperty("url"))
                    object.url = message.url;
                if (message.description != null && message.hasOwnProperty("description"))
                    object.description = message.description;
                if (message.notes != null && message.hasOwnProperty("notes"))
                    object.notes = message.notes;
                if (message.start_timestamp != null && message.hasOwnProperty("start_timestamp"))
                    object.start_timestamp = message.start_timestamp;
                if (message.end_timestamp != null && message.hasOwnProperty("end_timestamp"))
                    object.end_timestamp = message.end_timestamp;
                if (message.pro_circuit_points != null && message.hasOwnProperty("pro_circuit_points"))
                    object.pro_circuit_points = message.pro_circuit_points;
                if (message.image_bits != null && message.hasOwnProperty("image_bits"))
                    object.image_bits = message.image_bits;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.ELeagueStatus[message.status] : message.status;
                if (message.most_recent_activity != null && message.hasOwnProperty("most_recent_activity"))
                    object.most_recent_activity = message.most_recent_activity;
                if (message.registration_period != null && message.hasOwnProperty("registration_period"))
                    object.registration_period = message.registration_period;
                return object;
            };
    
            /**
             * Converts this Info to JSON.
             * @function toJSON
             * @memberof CMsgDOTALeague.Info
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Info.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Info;
        })();
    
        CMsgDOTALeague.Admin = (function() {
    
            /**
             * Properties of an Admin.
             * @memberof CMsgDOTALeague
             * @interface IAdmin
             * @property {number|null} [account_id] Admin account_id
             * @property {boolean|null} [is_primary] Admin is_primary
             * @property {string|null} [email_address] Admin email_address
             */
    
            /**
             * Constructs a new Admin.
             * @memberof CMsgDOTALeague
             * @classdesc Represents an Admin.
             * @implements IAdmin
             * @constructor
             * @param {CMsgDOTALeague.IAdmin=} [properties] Properties to set
             */
            function Admin(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Admin account_id.
             * @member {number} account_id
             * @memberof CMsgDOTALeague.Admin
             * @instance
             */
            Admin.prototype.account_id = 0;
    
            /**
             * Admin is_primary.
             * @member {boolean} is_primary
             * @memberof CMsgDOTALeague.Admin
             * @instance
             */
            Admin.prototype.is_primary = false;
    
            /**
             * Admin email_address.
             * @member {string} email_address
             * @memberof CMsgDOTALeague.Admin
             * @instance
             */
            Admin.prototype.email_address = "";
    
            /**
             * Creates a new Admin instance using the specified properties.
             * @function create
             * @memberof CMsgDOTALeague.Admin
             * @static
             * @param {CMsgDOTALeague.IAdmin=} [properties] Properties to set
             * @returns {CMsgDOTALeague.Admin} Admin instance
             */
            Admin.create = function create(properties) {
                return new Admin(properties);
            };
    
            /**
             * Encodes the specified Admin message. Does not implicitly {@link CMsgDOTALeague.Admin.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTALeague.Admin
             * @static
             * @param {CMsgDOTALeague.IAdmin} message Admin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Admin.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.account_id);
                if (message.is_primary != null && Object.hasOwnProperty.call(message, "is_primary"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_primary);
                if (message.email_address != null && Object.hasOwnProperty.call(message, "email_address"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.email_address);
                return writer;
            };
    
            /**
             * Encodes the specified Admin message, length delimited. Does not implicitly {@link CMsgDOTALeague.Admin.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTALeague.Admin
             * @static
             * @param {CMsgDOTALeague.IAdmin} message Admin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Admin.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Admin message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTALeague.Admin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTALeague.Admin} Admin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Admin.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeague.Admin();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.account_id = reader.uint32();
                        break;
                    case 2:
                        message.is_primary = reader.bool();
                        break;
                    case 3:
                        message.email_address = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Admin message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTALeague.Admin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTALeague.Admin} Admin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Admin.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Admin message.
             * @function verify
             * @memberof CMsgDOTALeague.Admin
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Admin.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    if (!$util.isInteger(message.account_id))
                        return "account_id: integer expected";
                if (message.is_primary != null && message.hasOwnProperty("is_primary"))
                    if (typeof message.is_primary !== "boolean")
                        return "is_primary: boolean expected";
                if (message.email_address != null && message.hasOwnProperty("email_address"))
                    if (!$util.isString(message.email_address))
                        return "email_address: string expected";
                return null;
            };
    
            /**
             * Creates an Admin message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTALeague.Admin
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTALeague.Admin} Admin
             */
            Admin.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTALeague.Admin)
                    return object;
                var message = new $root.CMsgDOTALeague.Admin();
                if (object.account_id != null)
                    message.account_id = object.account_id >>> 0;
                if (object.is_primary != null)
                    message.is_primary = Boolean(object.is_primary);
                if (object.email_address != null)
                    message.email_address = String(object.email_address);
                return message;
            };
    
            /**
             * Creates a plain object from an Admin message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTALeague.Admin
             * @static
             * @param {CMsgDOTALeague.Admin} message Admin
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Admin.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.account_id = 0;
                    object.is_primary = false;
                    object.email_address = "";
                }
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    object.account_id = message.account_id;
                if (message.is_primary != null && message.hasOwnProperty("is_primary"))
                    object.is_primary = message.is_primary;
                if (message.email_address != null && message.hasOwnProperty("email_address"))
                    object.email_address = message.email_address;
                return object;
            };
    
            /**
             * Converts this Admin to JSON.
             * @function toJSON
             * @memberof CMsgDOTALeague.Admin
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Admin.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Admin;
        })();
    
        CMsgDOTALeague.PrizePoolItem = (function() {
    
            /**
             * Properties of a PrizePoolItem.
             * @memberof CMsgDOTALeague
             * @interface IPrizePoolItem
             * @property {number|null} [item_def] PrizePoolItem item_def
             * @property {number|null} [sales_stop_timestamp] PrizePoolItem sales_stop_timestamp
             * @property {number|null} [revenue_pct] PrizePoolItem revenue_pct
             * @property {number|null} [revenue_cents_per_sale] PrizePoolItem revenue_cents_per_sale
             */
    
            /**
             * Constructs a new PrizePoolItem.
             * @memberof CMsgDOTALeague
             * @classdesc Represents a PrizePoolItem.
             * @implements IPrizePoolItem
             * @constructor
             * @param {CMsgDOTALeague.IPrizePoolItem=} [properties] Properties to set
             */
            function PrizePoolItem(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PrizePoolItem item_def.
             * @member {number} item_def
             * @memberof CMsgDOTALeague.PrizePoolItem
             * @instance
             */
            PrizePoolItem.prototype.item_def = 0;
    
            /**
             * PrizePoolItem sales_stop_timestamp.
             * @member {number} sales_stop_timestamp
             * @memberof CMsgDOTALeague.PrizePoolItem
             * @instance
             */
            PrizePoolItem.prototype.sales_stop_timestamp = 0;
    
            /**
             * PrizePoolItem revenue_pct.
             * @member {number} revenue_pct
             * @memberof CMsgDOTALeague.PrizePoolItem
             * @instance
             */
            PrizePoolItem.prototype.revenue_pct = 0;
    
            /**
             * PrizePoolItem revenue_cents_per_sale.
             * @member {number} revenue_cents_per_sale
             * @memberof CMsgDOTALeague.PrizePoolItem
             * @instance
             */
            PrizePoolItem.prototype.revenue_cents_per_sale = 0;
    
            /**
             * Creates a new PrizePoolItem instance using the specified properties.
             * @function create
             * @memberof CMsgDOTALeague.PrizePoolItem
             * @static
             * @param {CMsgDOTALeague.IPrizePoolItem=} [properties] Properties to set
             * @returns {CMsgDOTALeague.PrizePoolItem} PrizePoolItem instance
             */
            PrizePoolItem.create = function create(properties) {
                return new PrizePoolItem(properties);
            };
    
            /**
             * Encodes the specified PrizePoolItem message. Does not implicitly {@link CMsgDOTALeague.PrizePoolItem.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTALeague.PrizePoolItem
             * @static
             * @param {CMsgDOTALeague.IPrizePoolItem} message PrizePoolItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrizePoolItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.item_def != null && Object.hasOwnProperty.call(message, "item_def"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.item_def);
                if (message.sales_stop_timestamp != null && Object.hasOwnProperty.call(message, "sales_stop_timestamp"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.sales_stop_timestamp);
                if (message.revenue_pct != null && Object.hasOwnProperty.call(message, "revenue_pct"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.revenue_pct);
                if (message.revenue_cents_per_sale != null && Object.hasOwnProperty.call(message, "revenue_cents_per_sale"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.revenue_cents_per_sale);
                return writer;
            };
    
            /**
             * Encodes the specified PrizePoolItem message, length delimited. Does not implicitly {@link CMsgDOTALeague.PrizePoolItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTALeague.PrizePoolItem
             * @static
             * @param {CMsgDOTALeague.IPrizePoolItem} message PrizePoolItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrizePoolItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PrizePoolItem message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTALeague.PrizePoolItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTALeague.PrizePoolItem} PrizePoolItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrizePoolItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeague.PrizePoolItem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.item_def = reader.uint32();
                        break;
                    case 2:
                        message.sales_stop_timestamp = reader.uint32();
                        break;
                    case 3:
                        message.revenue_pct = reader.uint32();
                        break;
                    case 4:
                        message.revenue_cents_per_sale = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PrizePoolItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTALeague.PrizePoolItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTALeague.PrizePoolItem} PrizePoolItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrizePoolItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PrizePoolItem message.
             * @function verify
             * @memberof CMsgDOTALeague.PrizePoolItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PrizePoolItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.item_def != null && message.hasOwnProperty("item_def"))
                    if (!$util.isInteger(message.item_def))
                        return "item_def: integer expected";
                if (message.sales_stop_timestamp != null && message.hasOwnProperty("sales_stop_timestamp"))
                    if (!$util.isInteger(message.sales_stop_timestamp))
                        return "sales_stop_timestamp: integer expected";
                if (message.revenue_pct != null && message.hasOwnProperty("revenue_pct"))
                    if (!$util.isInteger(message.revenue_pct))
                        return "revenue_pct: integer expected";
                if (message.revenue_cents_per_sale != null && message.hasOwnProperty("revenue_cents_per_sale"))
                    if (!$util.isInteger(message.revenue_cents_per_sale))
                        return "revenue_cents_per_sale: integer expected";
                return null;
            };
    
            /**
             * Creates a PrizePoolItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTALeague.PrizePoolItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTALeague.PrizePoolItem} PrizePoolItem
             */
            PrizePoolItem.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTALeague.PrizePoolItem)
                    return object;
                var message = new $root.CMsgDOTALeague.PrizePoolItem();
                if (object.item_def != null)
                    message.item_def = object.item_def >>> 0;
                if (object.sales_stop_timestamp != null)
                    message.sales_stop_timestamp = object.sales_stop_timestamp >>> 0;
                if (object.revenue_pct != null)
                    message.revenue_pct = object.revenue_pct >>> 0;
                if (object.revenue_cents_per_sale != null)
                    message.revenue_cents_per_sale = object.revenue_cents_per_sale >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a PrizePoolItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTALeague.PrizePoolItem
             * @static
             * @param {CMsgDOTALeague.PrizePoolItem} message PrizePoolItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PrizePoolItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.item_def = 0;
                    object.sales_stop_timestamp = 0;
                    object.revenue_pct = 0;
                    object.revenue_cents_per_sale = 0;
                }
                if (message.item_def != null && message.hasOwnProperty("item_def"))
                    object.item_def = message.item_def;
                if (message.sales_stop_timestamp != null && message.hasOwnProperty("sales_stop_timestamp"))
                    object.sales_stop_timestamp = message.sales_stop_timestamp;
                if (message.revenue_pct != null && message.hasOwnProperty("revenue_pct"))
                    object.revenue_pct = message.revenue_pct;
                if (message.revenue_cents_per_sale != null && message.hasOwnProperty("revenue_cents_per_sale"))
                    object.revenue_cents_per_sale = message.revenue_cents_per_sale;
                return object;
            };
    
            /**
             * Converts this PrizePoolItem to JSON.
             * @function toJSON
             * @memberof CMsgDOTALeague.PrizePoolItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PrizePoolItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PrizePoolItem;
        })();
    
        CMsgDOTALeague.PrizePool = (function() {
    
            /**
             * Properties of a PrizePool.
             * @memberof CMsgDOTALeague
             * @interface IPrizePool
             * @property {number|null} [base_prize_pool] PrizePool base_prize_pool
             * @property {number|null} [total_prize_pool] PrizePool total_prize_pool
             * @property {Array.<number>|null} [prize_split_pct_x100] PrizePool prize_split_pct_x100
             * @property {Array.<CMsgDOTALeague.IPrizePoolItem>|null} [prize_pool_items] PrizePool prize_pool_items
             */
    
            /**
             * Constructs a new PrizePool.
             * @memberof CMsgDOTALeague
             * @classdesc Represents a PrizePool.
             * @implements IPrizePool
             * @constructor
             * @param {CMsgDOTALeague.IPrizePool=} [properties] Properties to set
             */
            function PrizePool(properties) {
                this.prize_split_pct_x100 = [];
                this.prize_pool_items = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PrizePool base_prize_pool.
             * @member {number} base_prize_pool
             * @memberof CMsgDOTALeague.PrizePool
             * @instance
             */
            PrizePool.prototype.base_prize_pool = 0;
    
            /**
             * PrizePool total_prize_pool.
             * @member {number} total_prize_pool
             * @memberof CMsgDOTALeague.PrizePool
             * @instance
             */
            PrizePool.prototype.total_prize_pool = 0;
    
            /**
             * PrizePool prize_split_pct_x100.
             * @member {Array.<number>} prize_split_pct_x100
             * @memberof CMsgDOTALeague.PrizePool
             * @instance
             */
            PrizePool.prototype.prize_split_pct_x100 = $util.emptyArray;
    
            /**
             * PrizePool prize_pool_items.
             * @member {Array.<CMsgDOTALeague.IPrizePoolItem>} prize_pool_items
             * @memberof CMsgDOTALeague.PrizePool
             * @instance
             */
            PrizePool.prototype.prize_pool_items = $util.emptyArray;
    
            /**
             * Creates a new PrizePool instance using the specified properties.
             * @function create
             * @memberof CMsgDOTALeague.PrizePool
             * @static
             * @param {CMsgDOTALeague.IPrizePool=} [properties] Properties to set
             * @returns {CMsgDOTALeague.PrizePool} PrizePool instance
             */
            PrizePool.create = function create(properties) {
                return new PrizePool(properties);
            };
    
            /**
             * Encodes the specified PrizePool message. Does not implicitly {@link CMsgDOTALeague.PrizePool.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTALeague.PrizePool
             * @static
             * @param {CMsgDOTALeague.IPrizePool} message PrizePool message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrizePool.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.base_prize_pool != null && Object.hasOwnProperty.call(message, "base_prize_pool"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.base_prize_pool);
                if (message.total_prize_pool != null && Object.hasOwnProperty.call(message, "total_prize_pool"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.total_prize_pool);
                if (message.prize_split_pct_x100 != null && message.prize_split_pct_x100.length)
                    for (var i = 0; i < message.prize_split_pct_x100.length; ++i)
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.prize_split_pct_x100[i]);
                if (message.prize_pool_items != null && message.prize_pool_items.length)
                    for (var i = 0; i < message.prize_pool_items.length; ++i)
                        $root.CMsgDOTALeague.PrizePoolItem.encode(message.prize_pool_items[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified PrizePool message, length delimited. Does not implicitly {@link CMsgDOTALeague.PrizePool.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTALeague.PrizePool
             * @static
             * @param {CMsgDOTALeague.IPrizePool} message PrizePool message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PrizePool.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PrizePool message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTALeague.PrizePool
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTALeague.PrizePool} PrizePool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrizePool.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeague.PrizePool();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.base_prize_pool = reader.uint32();
                        break;
                    case 2:
                        message.total_prize_pool = reader.uint32();
                        break;
                    case 3:
                        if (!(message.prize_split_pct_x100 && message.prize_split_pct_x100.length))
                            message.prize_split_pct_x100 = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.prize_split_pct_x100.push(reader.uint32());
                        } else
                            message.prize_split_pct_x100.push(reader.uint32());
                        break;
                    case 4:
                        if (!(message.prize_pool_items && message.prize_pool_items.length))
                            message.prize_pool_items = [];
                        message.prize_pool_items.push($root.CMsgDOTALeague.PrizePoolItem.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PrizePool message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTALeague.PrizePool
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTALeague.PrizePool} PrizePool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PrizePool.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PrizePool message.
             * @function verify
             * @memberof CMsgDOTALeague.PrizePool
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PrizePool.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.base_prize_pool != null && message.hasOwnProperty("base_prize_pool"))
                    if (!$util.isInteger(message.base_prize_pool))
                        return "base_prize_pool: integer expected";
                if (message.total_prize_pool != null && message.hasOwnProperty("total_prize_pool"))
                    if (!$util.isInteger(message.total_prize_pool))
                        return "total_prize_pool: integer expected";
                if (message.prize_split_pct_x100 != null && message.hasOwnProperty("prize_split_pct_x100")) {
                    if (!Array.isArray(message.prize_split_pct_x100))
                        return "prize_split_pct_x100: array expected";
                    for (var i = 0; i < message.prize_split_pct_x100.length; ++i)
                        if (!$util.isInteger(message.prize_split_pct_x100[i]))
                            return "prize_split_pct_x100: integer[] expected";
                }
                if (message.prize_pool_items != null && message.hasOwnProperty("prize_pool_items")) {
                    if (!Array.isArray(message.prize_pool_items))
                        return "prize_pool_items: array expected";
                    for (var i = 0; i < message.prize_pool_items.length; ++i) {
                        var error = $root.CMsgDOTALeague.PrizePoolItem.verify(message.prize_pool_items[i]);
                        if (error)
                            return "prize_pool_items." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a PrizePool message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTALeague.PrizePool
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTALeague.PrizePool} PrizePool
             */
            PrizePool.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTALeague.PrizePool)
                    return object;
                var message = new $root.CMsgDOTALeague.PrizePool();
                if (object.base_prize_pool != null)
                    message.base_prize_pool = object.base_prize_pool >>> 0;
                if (object.total_prize_pool != null)
                    message.total_prize_pool = object.total_prize_pool >>> 0;
                if (object.prize_split_pct_x100) {
                    if (!Array.isArray(object.prize_split_pct_x100))
                        throw TypeError(".CMsgDOTALeague.PrizePool.prize_split_pct_x100: array expected");
                    message.prize_split_pct_x100 = [];
                    for (var i = 0; i < object.prize_split_pct_x100.length; ++i)
                        message.prize_split_pct_x100[i] = object.prize_split_pct_x100[i] >>> 0;
                }
                if (object.prize_pool_items) {
                    if (!Array.isArray(object.prize_pool_items))
                        throw TypeError(".CMsgDOTALeague.PrizePool.prize_pool_items: array expected");
                    message.prize_pool_items = [];
                    for (var i = 0; i < object.prize_pool_items.length; ++i) {
                        if (typeof object.prize_pool_items[i] !== "object")
                            throw TypeError(".CMsgDOTALeague.PrizePool.prize_pool_items: object expected");
                        message.prize_pool_items[i] = $root.CMsgDOTALeague.PrizePoolItem.fromObject(object.prize_pool_items[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a PrizePool message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTALeague.PrizePool
             * @static
             * @param {CMsgDOTALeague.PrizePool} message PrizePool
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PrizePool.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.prize_split_pct_x100 = [];
                    object.prize_pool_items = [];
                }
                if (options.defaults) {
                    object.base_prize_pool = 0;
                    object.total_prize_pool = 0;
                }
                if (message.base_prize_pool != null && message.hasOwnProperty("base_prize_pool"))
                    object.base_prize_pool = message.base_prize_pool;
                if (message.total_prize_pool != null && message.hasOwnProperty("total_prize_pool"))
                    object.total_prize_pool = message.total_prize_pool;
                if (message.prize_split_pct_x100 && message.prize_split_pct_x100.length) {
                    object.prize_split_pct_x100 = [];
                    for (var j = 0; j < message.prize_split_pct_x100.length; ++j)
                        object.prize_split_pct_x100[j] = message.prize_split_pct_x100[j];
                }
                if (message.prize_pool_items && message.prize_pool_items.length) {
                    object.prize_pool_items = [];
                    for (var j = 0; j < message.prize_pool_items.length; ++j)
                        object.prize_pool_items[j] = $root.CMsgDOTALeague.PrizePoolItem.toObject(message.prize_pool_items[j], options);
                }
                return object;
            };
    
            /**
             * Converts this PrizePool to JSON.
             * @function toJSON
             * @memberof CMsgDOTALeague.PrizePool
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PrizePool.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PrizePool;
        })();
    
        CMsgDOTALeague.Stream = (function() {
    
            /**
             * Properties of a Stream.
             * @memberof CMsgDOTALeague
             * @interface IStream
             * @property {number|null} [stream_id] Stream stream_id
             * @property {number|null} [language] Stream language
             * @property {string|null} [name] Stream name
             * @property {ELeagueBroadcastProvider|null} [broadcast_provider] Stream broadcast_provider
             * @property {string|null} [stream_url] Stream stream_url
             * @property {string|null} [vod_url] Stream vod_url
             */
    
            /**
             * Constructs a new Stream.
             * @memberof CMsgDOTALeague
             * @classdesc Represents a Stream.
             * @implements IStream
             * @constructor
             * @param {CMsgDOTALeague.IStream=} [properties] Properties to set
             */
            function Stream(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Stream stream_id.
             * @member {number} stream_id
             * @memberof CMsgDOTALeague.Stream
             * @instance
             */
            Stream.prototype.stream_id = 0;
    
            /**
             * Stream language.
             * @member {number} language
             * @memberof CMsgDOTALeague.Stream
             * @instance
             */
            Stream.prototype.language = 0;
    
            /**
             * Stream name.
             * @member {string} name
             * @memberof CMsgDOTALeague.Stream
             * @instance
             */
            Stream.prototype.name = "";
    
            /**
             * Stream broadcast_provider.
             * @member {ELeagueBroadcastProvider} broadcast_provider
             * @memberof CMsgDOTALeague.Stream
             * @instance
             */
            Stream.prototype.broadcast_provider = 0;
    
            /**
             * Stream stream_url.
             * @member {string} stream_url
             * @memberof CMsgDOTALeague.Stream
             * @instance
             */
            Stream.prototype.stream_url = "";
    
            /**
             * Stream vod_url.
             * @member {string} vod_url
             * @memberof CMsgDOTALeague.Stream
             * @instance
             */
            Stream.prototype.vod_url = "";
    
            /**
             * Creates a new Stream instance using the specified properties.
             * @function create
             * @memberof CMsgDOTALeague.Stream
             * @static
             * @param {CMsgDOTALeague.IStream=} [properties] Properties to set
             * @returns {CMsgDOTALeague.Stream} Stream instance
             */
            Stream.create = function create(properties) {
                return new Stream(properties);
            };
    
            /**
             * Encodes the specified Stream message. Does not implicitly {@link CMsgDOTALeague.Stream.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTALeague.Stream
             * @static
             * @param {CMsgDOTALeague.IStream} message Stream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Stream.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.stream_id != null && Object.hasOwnProperty.call(message, "stream_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.stream_id);
                if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.language);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                if (message.broadcast_provider != null && Object.hasOwnProperty.call(message, "broadcast_provider"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.broadcast_provider);
                if (message.stream_url != null && Object.hasOwnProperty.call(message, "stream_url"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.stream_url);
                if (message.vod_url != null && Object.hasOwnProperty.call(message, "vod_url"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.vod_url);
                return writer;
            };
    
            /**
             * Encodes the specified Stream message, length delimited. Does not implicitly {@link CMsgDOTALeague.Stream.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTALeague.Stream
             * @static
             * @param {CMsgDOTALeague.IStream} message Stream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Stream.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Stream message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTALeague.Stream
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTALeague.Stream} Stream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Stream.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeague.Stream();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.stream_id = reader.uint32();
                        break;
                    case 2:
                        message.language = reader.uint32();
                        break;
                    case 3:
                        message.name = reader.string();
                        break;
                    case 4:
                        message.broadcast_provider = reader.int32();
                        break;
                    case 5:
                        message.stream_url = reader.string();
                        break;
                    case 6:
                        message.vod_url = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Stream message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTALeague.Stream
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTALeague.Stream} Stream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Stream.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Stream message.
             * @function verify
             * @memberof CMsgDOTALeague.Stream
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Stream.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.stream_id != null && message.hasOwnProperty("stream_id"))
                    if (!$util.isInteger(message.stream_id))
                        return "stream_id: integer expected";
                if (message.language != null && message.hasOwnProperty("language"))
                    if (!$util.isInteger(message.language))
                        return "language: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.broadcast_provider != null && message.hasOwnProperty("broadcast_provider"))
                    switch (message.broadcast_provider) {
                    default:
                        return "broadcast_provider: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 100:
                        break;
                    }
                if (message.stream_url != null && message.hasOwnProperty("stream_url"))
                    if (!$util.isString(message.stream_url))
                        return "stream_url: string expected";
                if (message.vod_url != null && message.hasOwnProperty("vod_url"))
                    if (!$util.isString(message.vod_url))
                        return "vod_url: string expected";
                return null;
            };
    
            /**
             * Creates a Stream message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTALeague.Stream
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTALeague.Stream} Stream
             */
            Stream.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTALeague.Stream)
                    return object;
                var message = new $root.CMsgDOTALeague.Stream();
                if (object.stream_id != null)
                    message.stream_id = object.stream_id >>> 0;
                if (object.language != null)
                    message.language = object.language >>> 0;
                if (object.name != null)
                    message.name = String(object.name);
                switch (object.broadcast_provider) {
                case "LEAGUE_BROADCAST_UNKNOWN":
                case 0:
                    message.broadcast_provider = 0;
                    break;
                case "LEAGUE_BROADCAST_STEAM":
                case 1:
                    message.broadcast_provider = 1;
                    break;
                case "LEAGUE_BROADCAST_TWITCH":
                case 2:
                    message.broadcast_provider = 2;
                    break;
                case "LEAGUE_BROADCAST_YOUTUBE":
                case 3:
                    message.broadcast_provider = 3;
                    break;
                case "LEAGUE_BROADCAST_OTHER":
                case 100:
                    message.broadcast_provider = 100;
                    break;
                }
                if (object.stream_url != null)
                    message.stream_url = String(object.stream_url);
                if (object.vod_url != null)
                    message.vod_url = String(object.vod_url);
                return message;
            };
    
            /**
             * Creates a plain object from a Stream message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTALeague.Stream
             * @static
             * @param {CMsgDOTALeague.Stream} message Stream
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Stream.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.stream_id = 0;
                    object.language = 0;
                    object.name = "";
                    object.broadcast_provider = options.enums === String ? "LEAGUE_BROADCAST_UNKNOWN" : 0;
                    object.stream_url = "";
                    object.vod_url = "";
                }
                if (message.stream_id != null && message.hasOwnProperty("stream_id"))
                    object.stream_id = message.stream_id;
                if (message.language != null && message.hasOwnProperty("language"))
                    object.language = message.language;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.broadcast_provider != null && message.hasOwnProperty("broadcast_provider"))
                    object.broadcast_provider = options.enums === String ? $root.ELeagueBroadcastProvider[message.broadcast_provider] : message.broadcast_provider;
                if (message.stream_url != null && message.hasOwnProperty("stream_url"))
                    object.stream_url = message.stream_url;
                if (message.vod_url != null && message.hasOwnProperty("vod_url"))
                    object.vod_url = message.vod_url;
                return object;
            };
    
            /**
             * Converts this Stream to JSON.
             * @function toJSON
             * @memberof CMsgDOTALeague.Stream
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Stream.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Stream;
        })();
    
        CMsgDOTALeague.SeriesInfo = (function() {
    
            /**
             * Properties of a SeriesInfo.
             * @memberof CMsgDOTALeague
             * @interface ISeriesInfo
             * @property {number|null} [series_id] SeriesInfo series_id
             * @property {number|null} [series_type] SeriesInfo series_type
             * @property {number|null} [start_time] SeriesInfo start_time
             * @property {Array.<number|Long>|null} [match_ids] SeriesInfo match_ids
             * @property {number|null} [team_id_1] SeriesInfo team_id_1
             * @property {number|null} [team_id_2] SeriesInfo team_id_2
             */
    
            /**
             * Constructs a new SeriesInfo.
             * @memberof CMsgDOTALeague
             * @classdesc Represents a SeriesInfo.
             * @implements ISeriesInfo
             * @constructor
             * @param {CMsgDOTALeague.ISeriesInfo=} [properties] Properties to set
             */
            function SeriesInfo(properties) {
                this.match_ids = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SeriesInfo series_id.
             * @member {number} series_id
             * @memberof CMsgDOTALeague.SeriesInfo
             * @instance
             */
            SeriesInfo.prototype.series_id = 0;
    
            /**
             * SeriesInfo series_type.
             * @member {number} series_type
             * @memberof CMsgDOTALeague.SeriesInfo
             * @instance
             */
            SeriesInfo.prototype.series_type = 0;
    
            /**
             * SeriesInfo start_time.
             * @member {number} start_time
             * @memberof CMsgDOTALeague.SeriesInfo
             * @instance
             */
            SeriesInfo.prototype.start_time = 0;
    
            /**
             * SeriesInfo match_ids.
             * @member {Array.<number|Long>} match_ids
             * @memberof CMsgDOTALeague.SeriesInfo
             * @instance
             */
            SeriesInfo.prototype.match_ids = $util.emptyArray;
    
            /**
             * SeriesInfo team_id_1.
             * @member {number} team_id_1
             * @memberof CMsgDOTALeague.SeriesInfo
             * @instance
             */
            SeriesInfo.prototype.team_id_1 = 0;
    
            /**
             * SeriesInfo team_id_2.
             * @member {number} team_id_2
             * @memberof CMsgDOTALeague.SeriesInfo
             * @instance
             */
            SeriesInfo.prototype.team_id_2 = 0;
    
            /**
             * Creates a new SeriesInfo instance using the specified properties.
             * @function create
             * @memberof CMsgDOTALeague.SeriesInfo
             * @static
             * @param {CMsgDOTALeague.ISeriesInfo=} [properties] Properties to set
             * @returns {CMsgDOTALeague.SeriesInfo} SeriesInfo instance
             */
            SeriesInfo.create = function create(properties) {
                return new SeriesInfo(properties);
            };
    
            /**
             * Encodes the specified SeriesInfo message. Does not implicitly {@link CMsgDOTALeague.SeriesInfo.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTALeague.SeriesInfo
             * @static
             * @param {CMsgDOTALeague.ISeriesInfo} message SeriesInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SeriesInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.series_id != null && Object.hasOwnProperty.call(message, "series_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.series_id);
                if (message.series_type != null && Object.hasOwnProperty.call(message, "series_type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.series_type);
                if (message.start_time != null && Object.hasOwnProperty.call(message, "start_time"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.start_time);
                if (message.match_ids != null && message.match_ids.length)
                    for (var i = 0; i < message.match_ids.length; ++i)
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.match_ids[i]);
                if (message.team_id_1 != null && Object.hasOwnProperty.call(message, "team_id_1"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.team_id_1);
                if (message.team_id_2 != null && Object.hasOwnProperty.call(message, "team_id_2"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.team_id_2);
                return writer;
            };
    
            /**
             * Encodes the specified SeriesInfo message, length delimited. Does not implicitly {@link CMsgDOTALeague.SeriesInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTALeague.SeriesInfo
             * @static
             * @param {CMsgDOTALeague.ISeriesInfo} message SeriesInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SeriesInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SeriesInfo message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTALeague.SeriesInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTALeague.SeriesInfo} SeriesInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SeriesInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeague.SeriesInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.series_id = reader.uint32();
                        break;
                    case 2:
                        message.series_type = reader.uint32();
                        break;
                    case 3:
                        message.start_time = reader.uint32();
                        break;
                    case 4:
                        if (!(message.match_ids && message.match_ids.length))
                            message.match_ids = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.match_ids.push(reader.uint64());
                        } else
                            message.match_ids.push(reader.uint64());
                        break;
                    case 5:
                        message.team_id_1 = reader.uint32();
                        break;
                    case 6:
                        message.team_id_2 = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SeriesInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTALeague.SeriesInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTALeague.SeriesInfo} SeriesInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SeriesInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SeriesInfo message.
             * @function verify
             * @memberof CMsgDOTALeague.SeriesInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SeriesInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.series_id != null && message.hasOwnProperty("series_id"))
                    if (!$util.isInteger(message.series_id))
                        return "series_id: integer expected";
                if (message.series_type != null && message.hasOwnProperty("series_type"))
                    if (!$util.isInteger(message.series_type))
                        return "series_type: integer expected";
                if (message.start_time != null && message.hasOwnProperty("start_time"))
                    if (!$util.isInteger(message.start_time))
                        return "start_time: integer expected";
                if (message.match_ids != null && message.hasOwnProperty("match_ids")) {
                    if (!Array.isArray(message.match_ids))
                        return "match_ids: array expected";
                    for (var i = 0; i < message.match_ids.length; ++i)
                        if (!$util.isInteger(message.match_ids[i]) && !(message.match_ids[i] && $util.isInteger(message.match_ids[i].low) && $util.isInteger(message.match_ids[i].high)))
                            return "match_ids: integer|Long[] expected";
                }
                if (message.team_id_1 != null && message.hasOwnProperty("team_id_1"))
                    if (!$util.isInteger(message.team_id_1))
                        return "team_id_1: integer expected";
                if (message.team_id_2 != null && message.hasOwnProperty("team_id_2"))
                    if (!$util.isInteger(message.team_id_2))
                        return "team_id_2: integer expected";
                return null;
            };
    
            /**
             * Creates a SeriesInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTALeague.SeriesInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTALeague.SeriesInfo} SeriesInfo
             */
            SeriesInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTALeague.SeriesInfo)
                    return object;
                var message = new $root.CMsgDOTALeague.SeriesInfo();
                if (object.series_id != null)
                    message.series_id = object.series_id >>> 0;
                if (object.series_type != null)
                    message.series_type = object.series_type >>> 0;
                if (object.start_time != null)
                    message.start_time = object.start_time >>> 0;
                if (object.match_ids) {
                    if (!Array.isArray(object.match_ids))
                        throw TypeError(".CMsgDOTALeague.SeriesInfo.match_ids: array expected");
                    message.match_ids = [];
                    for (var i = 0; i < object.match_ids.length; ++i)
                        if ($util.Long)
                            (message.match_ids[i] = $util.Long.fromValue(object.match_ids[i])).unsigned = true;
                        else if (typeof object.match_ids[i] === "string")
                            message.match_ids[i] = parseInt(object.match_ids[i], 10);
                        else if (typeof object.match_ids[i] === "number")
                            message.match_ids[i] = object.match_ids[i];
                        else if (typeof object.match_ids[i] === "object")
                            message.match_ids[i] = new $util.LongBits(object.match_ids[i].low >>> 0, object.match_ids[i].high >>> 0).toNumber(true);
                }
                if (object.team_id_1 != null)
                    message.team_id_1 = object.team_id_1 >>> 0;
                if (object.team_id_2 != null)
                    message.team_id_2 = object.team_id_2 >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a SeriesInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTALeague.SeriesInfo
             * @static
             * @param {CMsgDOTALeague.SeriesInfo} message SeriesInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SeriesInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.match_ids = [];
                if (options.defaults) {
                    object.series_id = 0;
                    object.series_type = 0;
                    object.start_time = 0;
                    object.team_id_1 = 0;
                    object.team_id_2 = 0;
                }
                if (message.series_id != null && message.hasOwnProperty("series_id"))
                    object.series_id = message.series_id;
                if (message.series_type != null && message.hasOwnProperty("series_type"))
                    object.series_type = message.series_type;
                if (message.start_time != null && message.hasOwnProperty("start_time"))
                    object.start_time = message.start_time;
                if (message.match_ids && message.match_ids.length) {
                    object.match_ids = [];
                    for (var j = 0; j < message.match_ids.length; ++j)
                        if (typeof message.match_ids[j] === "number")
                            object.match_ids[j] = options.longs === String ? String(message.match_ids[j]) : message.match_ids[j];
                        else
                            object.match_ids[j] = options.longs === String ? $util.Long.prototype.toString.call(message.match_ids[j]) : options.longs === Number ? new $util.LongBits(message.match_ids[j].low >>> 0, message.match_ids[j].high >>> 0).toNumber(true) : message.match_ids[j];
                }
                if (message.team_id_1 != null && message.hasOwnProperty("team_id_1"))
                    object.team_id_1 = message.team_id_1;
                if (message.team_id_2 != null && message.hasOwnProperty("team_id_2"))
                    object.team_id_2 = message.team_id_2;
                return object;
            };
    
            /**
             * Converts this SeriesInfo to JSON.
             * @function toJSON
             * @memberof CMsgDOTALeague.SeriesInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SeriesInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SeriesInfo;
        })();
    
        CMsgDOTALeague.Player = (function() {
    
            /**
             * Properties of a Player.
             * @memberof CMsgDOTALeague
             * @interface IPlayer
             * @property {number|null} [account_id] Player account_id
             * @property {string|null} [name] Player name
             * @property {number|null} [team_id] Player team_id
             */
    
            /**
             * Constructs a new Player.
             * @memberof CMsgDOTALeague
             * @classdesc Represents a Player.
             * @implements IPlayer
             * @constructor
             * @param {CMsgDOTALeague.IPlayer=} [properties] Properties to set
             */
            function Player(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Player account_id.
             * @member {number} account_id
             * @memberof CMsgDOTALeague.Player
             * @instance
             */
            Player.prototype.account_id = 0;
    
            /**
             * Player name.
             * @member {string} name
             * @memberof CMsgDOTALeague.Player
             * @instance
             */
            Player.prototype.name = "";
    
            /**
             * Player team_id.
             * @member {number} team_id
             * @memberof CMsgDOTALeague.Player
             * @instance
             */
            Player.prototype.team_id = 0;
    
            /**
             * Creates a new Player instance using the specified properties.
             * @function create
             * @memberof CMsgDOTALeague.Player
             * @static
             * @param {CMsgDOTALeague.IPlayer=} [properties] Properties to set
             * @returns {CMsgDOTALeague.Player} Player instance
             */
            Player.create = function create(properties) {
                return new Player(properties);
            };
    
            /**
             * Encodes the specified Player message. Does not implicitly {@link CMsgDOTALeague.Player.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTALeague.Player
             * @static
             * @param {CMsgDOTALeague.IPlayer} message Player message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Player.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.account_id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.team_id != null && Object.hasOwnProperty.call(message, "team_id"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.team_id);
                return writer;
            };
    
            /**
             * Encodes the specified Player message, length delimited. Does not implicitly {@link CMsgDOTALeague.Player.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTALeague.Player
             * @static
             * @param {CMsgDOTALeague.IPlayer} message Player message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Player.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Player message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTALeague.Player
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTALeague.Player} Player
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Player.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeague.Player();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.account_id = reader.uint32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.team_id = reader.uint32();
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
             * @memberof CMsgDOTALeague.Player
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTALeague.Player} Player
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
             * @memberof CMsgDOTALeague.Player
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Player.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    if (!$util.isInteger(message.account_id))
                        return "account_id: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.team_id != null && message.hasOwnProperty("team_id"))
                    if (!$util.isInteger(message.team_id))
                        return "team_id: integer expected";
                return null;
            };
    
            /**
             * Creates a Player message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTALeague.Player
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTALeague.Player} Player
             */
            Player.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTALeague.Player)
                    return object;
                var message = new $root.CMsgDOTALeague.Player();
                if (object.account_id != null)
                    message.account_id = object.account_id >>> 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.team_id != null)
                    message.team_id = object.team_id >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Player message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTALeague.Player
             * @static
             * @param {CMsgDOTALeague.Player} message Player
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Player.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.account_id = 0;
                    object.name = "";
                    object.team_id = 0;
                }
                if (message.account_id != null && message.hasOwnProperty("account_id"))
                    object.account_id = message.account_id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.team_id != null && message.hasOwnProperty("team_id"))
                    object.team_id = message.team_id;
                return object;
            };
    
            /**
             * Converts this Player to JSON.
             * @function toJSON
             * @memberof CMsgDOTALeague.Player
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Player.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Player;
        })();
    
        return CMsgDOTALeague;
    })();
    
    $root.CMsgDOTALeagueInfo = (function() {
    
        /**
         * Properties of a CMsgDOTALeagueInfo.
         * @exports ICMsgDOTALeagueInfo
         * @interface ICMsgDOTALeagueInfo
         * @property {number|null} [league_id] CMsgDOTALeagueInfo league_id
         * @property {string|null} [name] CMsgDOTALeagueInfo name
         * @property {ELeagueTier|null} [tier] CMsgDOTALeagueInfo tier
         * @property {ELeagueRegion|null} [region] CMsgDOTALeagueInfo region
         * @property {number|null} [most_recent_activity] CMsgDOTALeagueInfo most_recent_activity
         * @property {number|null} [total_prize_pool] CMsgDOTALeagueInfo total_prize_pool
         * @property {number|null} [start_timestamp] CMsgDOTALeagueInfo start_timestamp
         * @property {number|null} [end_timestamp] CMsgDOTALeagueInfo end_timestamp
         * @property {number|null} [status] CMsgDOTALeagueInfo status
         */
    
        /**
         * Constructs a new CMsgDOTALeagueInfo.
         * @exports CMsgDOTALeagueInfo
         * @classdesc Represents a CMsgDOTALeagueInfo.
         * @implements ICMsgDOTALeagueInfo
         * @constructor
         * @param {ICMsgDOTALeagueInfo=} [properties] Properties to set
         */
        function CMsgDOTALeagueInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTALeagueInfo league_id.
         * @member {number} league_id
         * @memberof CMsgDOTALeagueInfo
         * @instance
         */
        CMsgDOTALeagueInfo.prototype.league_id = 0;
    
        /**
         * CMsgDOTALeagueInfo name.
         * @member {string} name
         * @memberof CMsgDOTALeagueInfo
         * @instance
         */
        CMsgDOTALeagueInfo.prototype.name = "";
    
        /**
         * CMsgDOTALeagueInfo tier.
         * @member {ELeagueTier} tier
         * @memberof CMsgDOTALeagueInfo
         * @instance
         */
        CMsgDOTALeagueInfo.prototype.tier = 0;
    
        /**
         * CMsgDOTALeagueInfo region.
         * @member {ELeagueRegion} region
         * @memberof CMsgDOTALeagueInfo
         * @instance
         */
        CMsgDOTALeagueInfo.prototype.region = 0;
    
        /**
         * CMsgDOTALeagueInfo most_recent_activity.
         * @member {number} most_recent_activity
         * @memberof CMsgDOTALeagueInfo
         * @instance
         */
        CMsgDOTALeagueInfo.prototype.most_recent_activity = 0;
    
        /**
         * CMsgDOTALeagueInfo total_prize_pool.
         * @member {number} total_prize_pool
         * @memberof CMsgDOTALeagueInfo
         * @instance
         */
        CMsgDOTALeagueInfo.prototype.total_prize_pool = 0;
    
        /**
         * CMsgDOTALeagueInfo start_timestamp.
         * @member {number} start_timestamp
         * @memberof CMsgDOTALeagueInfo
         * @instance
         */
        CMsgDOTALeagueInfo.prototype.start_timestamp = 0;
    
        /**
         * CMsgDOTALeagueInfo end_timestamp.
         * @member {number} end_timestamp
         * @memberof CMsgDOTALeagueInfo
         * @instance
         */
        CMsgDOTALeagueInfo.prototype.end_timestamp = 0;
    
        /**
         * CMsgDOTALeagueInfo status.
         * @member {number} status
         * @memberof CMsgDOTALeagueInfo
         * @instance
         */
        CMsgDOTALeagueInfo.prototype.status = 0;
    
        /**
         * Creates a new CMsgDOTALeagueInfo instance using the specified properties.
         * @function create
         * @memberof CMsgDOTALeagueInfo
         * @static
         * @param {ICMsgDOTALeagueInfo=} [properties] Properties to set
         * @returns {CMsgDOTALeagueInfo} CMsgDOTALeagueInfo instance
         */
        CMsgDOTALeagueInfo.create = function create(properties) {
            return new CMsgDOTALeagueInfo(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueInfo message. Does not implicitly {@link CMsgDOTALeagueInfo.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTALeagueInfo
         * @static
         * @param {ICMsgDOTALeagueInfo} message CMsgDOTALeagueInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.league_id != null && Object.hasOwnProperty.call(message, "league_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.league_id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.tier != null && Object.hasOwnProperty.call(message, "tier"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.tier);
            if (message.region != null && Object.hasOwnProperty.call(message, "region"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.region);
            if (message.most_recent_activity != null && Object.hasOwnProperty.call(message, "most_recent_activity"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.most_recent_activity);
            if (message.total_prize_pool != null && Object.hasOwnProperty.call(message, "total_prize_pool"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.total_prize_pool);
            if (message.start_timestamp != null && Object.hasOwnProperty.call(message, "start_timestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.start_timestamp);
            if (message.end_timestamp != null && Object.hasOwnProperty.call(message, "end_timestamp"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.end_timestamp);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.status);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueInfo message, length delimited. Does not implicitly {@link CMsgDOTALeagueInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTALeagueInfo
         * @static
         * @param {ICMsgDOTALeagueInfo} message CMsgDOTALeagueInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTALeagueInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTALeagueInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTALeagueInfo} CMsgDOTALeagueInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.league_id = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.tier = reader.int32();
                    break;
                case 4:
                    message.region = reader.int32();
                    break;
                case 5:
                    message.most_recent_activity = reader.uint32();
                    break;
                case 6:
                    message.total_prize_pool = reader.uint32();
                    break;
                case 7:
                    message.start_timestamp = reader.uint32();
                    break;
                case 8:
                    message.end_timestamp = reader.uint32();
                    break;
                case 9:
                    message.status = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTALeagueInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTALeagueInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTALeagueInfo} CMsgDOTALeagueInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTALeagueInfo message.
         * @function verify
         * @memberof CMsgDOTALeagueInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTALeagueInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.league_id != null && message.hasOwnProperty("league_id"))
                if (!$util.isInteger(message.league_id))
                    return "league_id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.tier != null && message.hasOwnProperty("tier"))
                switch (message.tier) {
                default:
                    return "tier: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.region != null && message.hasOwnProperty("region"))
                switch (message.region) {
                default:
                    return "region: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.most_recent_activity != null && message.hasOwnProperty("most_recent_activity"))
                if (!$util.isInteger(message.most_recent_activity))
                    return "most_recent_activity: integer expected";
            if (message.total_prize_pool != null && message.hasOwnProperty("total_prize_pool"))
                if (!$util.isInteger(message.total_prize_pool))
                    return "total_prize_pool: integer expected";
            if (message.start_timestamp != null && message.hasOwnProperty("start_timestamp"))
                if (!$util.isInteger(message.start_timestamp))
                    return "start_timestamp: integer expected";
            if (message.end_timestamp != null && message.hasOwnProperty("end_timestamp"))
                if (!$util.isInteger(message.end_timestamp))
                    return "end_timestamp: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgDOTALeagueInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTALeagueInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTALeagueInfo} CMsgDOTALeagueInfo
         */
        CMsgDOTALeagueInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTALeagueInfo)
                return object;
            var message = new $root.CMsgDOTALeagueInfo();
            if (object.league_id != null)
                message.league_id = object.league_id >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            switch (object.tier) {
            case "LEAGUE_TIER_UNSET":
            case 0:
                message.tier = 0;
                break;
            case "LEAGUE_TIER_AMATEUR":
            case 1:
                message.tier = 1;
                break;
            case "LEAGUE_TIER_PROFESSIONAL":
            case 2:
                message.tier = 2;
                break;
            case "LEAGUE_TIER_MINOR":
            case 3:
                message.tier = 3;
                break;
            case "LEAGUE_TIER_MAJOR":
            case 4:
                message.tier = 4;
                break;
            case "LEAGUE_TIER_INTERNATIONAL":
            case 5:
                message.tier = 5;
                break;
            case "LEAGUE_TIER_DPC_QUALIFIER":
            case 6:
                message.tier = 6;
                break;
            }
            switch (object.region) {
            case "LEAGUE_REGION_UNSET":
            case 0:
                message.region = 0;
                break;
            case "LEAGUE_REGION_NA":
            case 1:
                message.region = 1;
                break;
            case "LEAGUE_REGION_SA":
            case 2:
                message.region = 2;
                break;
            case "LEAGUE_REGION_EUROPE":
            case 3:
                message.region = 3;
                break;
            case "LEAGUE_REGION_CIS":
            case 4:
                message.region = 4;
                break;
            case "LEAGUE_REGION_CHINA":
            case 5:
                message.region = 5;
                break;
            case "LEAGUE_REGION_SEA":
            case 6:
                message.region = 6;
                break;
            }
            if (object.most_recent_activity != null)
                message.most_recent_activity = object.most_recent_activity >>> 0;
            if (object.total_prize_pool != null)
                message.total_prize_pool = object.total_prize_pool >>> 0;
            if (object.start_timestamp != null)
                message.start_timestamp = object.start_timestamp >>> 0;
            if (object.end_timestamp != null)
                message.end_timestamp = object.end_timestamp >>> 0;
            if (object.status != null)
                message.status = object.status >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTALeagueInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTALeagueInfo
         * @static
         * @param {CMsgDOTALeagueInfo} message CMsgDOTALeagueInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTALeagueInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.league_id = 0;
                object.name = "";
                object.tier = options.enums === String ? "LEAGUE_TIER_UNSET" : 0;
                object.region = options.enums === String ? "LEAGUE_REGION_UNSET" : 0;
                object.most_recent_activity = 0;
                object.total_prize_pool = 0;
                object.start_timestamp = 0;
                object.end_timestamp = 0;
                object.status = 0;
            }
            if (message.league_id != null && message.hasOwnProperty("league_id"))
                object.league_id = message.league_id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.tier != null && message.hasOwnProperty("tier"))
                object.tier = options.enums === String ? $root.ELeagueTier[message.tier] : message.tier;
            if (message.region != null && message.hasOwnProperty("region"))
                object.region = options.enums === String ? $root.ELeagueRegion[message.region] : message.region;
            if (message.most_recent_activity != null && message.hasOwnProperty("most_recent_activity"))
                object.most_recent_activity = message.most_recent_activity;
            if (message.total_prize_pool != null && message.hasOwnProperty("total_prize_pool"))
                object.total_prize_pool = message.total_prize_pool;
            if (message.start_timestamp != null && message.hasOwnProperty("start_timestamp"))
                object.start_timestamp = message.start_timestamp;
            if (message.end_timestamp != null && message.hasOwnProperty("end_timestamp"))
                object.end_timestamp = message.end_timestamp;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };
    
        /**
         * Converts this CMsgDOTALeagueInfo to JSON.
         * @function toJSON
         * @memberof CMsgDOTALeagueInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTALeagueInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgDOTALeagueInfo;
    })();
    
    $root.CMsgDOTALeagueInfoList = (function() {
    
        /**
         * Properties of a CMsgDOTALeagueInfoList.
         * @exports ICMsgDOTALeagueInfoList
         * @interface ICMsgDOTALeagueInfoList
         * @property {Array.<ICMsgDOTALeagueInfo>|null} [infos] CMsgDOTALeagueInfoList infos
         */
    
        /**
         * Constructs a new CMsgDOTALeagueInfoList.
         * @exports CMsgDOTALeagueInfoList
         * @classdesc Represents a CMsgDOTALeagueInfoList.
         * @implements ICMsgDOTALeagueInfoList
         * @constructor
         * @param {ICMsgDOTALeagueInfoList=} [properties] Properties to set
         */
        function CMsgDOTALeagueInfoList(properties) {
            this.infos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTALeagueInfoList infos.
         * @member {Array.<ICMsgDOTALeagueInfo>} infos
         * @memberof CMsgDOTALeagueInfoList
         * @instance
         */
        CMsgDOTALeagueInfoList.prototype.infos = $util.emptyArray;
    
        /**
         * Creates a new CMsgDOTALeagueInfoList instance using the specified properties.
         * @function create
         * @memberof CMsgDOTALeagueInfoList
         * @static
         * @param {ICMsgDOTALeagueInfoList=} [properties] Properties to set
         * @returns {CMsgDOTALeagueInfoList} CMsgDOTALeagueInfoList instance
         */
        CMsgDOTALeagueInfoList.create = function create(properties) {
            return new CMsgDOTALeagueInfoList(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueInfoList message. Does not implicitly {@link CMsgDOTALeagueInfoList.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTALeagueInfoList
         * @static
         * @param {ICMsgDOTALeagueInfoList} message CMsgDOTALeagueInfoList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueInfoList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.infos != null && message.infos.length)
                for (var i = 0; i < message.infos.length; ++i)
                    $root.CMsgDOTALeagueInfo.encode(message.infos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueInfoList message, length delimited. Does not implicitly {@link CMsgDOTALeagueInfoList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTALeagueInfoList
         * @static
         * @param {ICMsgDOTALeagueInfoList} message CMsgDOTALeagueInfoList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueInfoList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTALeagueInfoList message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTALeagueInfoList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTALeagueInfoList} CMsgDOTALeagueInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueInfoList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueInfoList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.infos && message.infos.length))
                        message.infos = [];
                    message.infos.push($root.CMsgDOTALeagueInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTALeagueInfoList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTALeagueInfoList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTALeagueInfoList} CMsgDOTALeagueInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueInfoList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTALeagueInfoList message.
         * @function verify
         * @memberof CMsgDOTALeagueInfoList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTALeagueInfoList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.infos != null && message.hasOwnProperty("infos")) {
                if (!Array.isArray(message.infos))
                    return "infos: array expected";
                for (var i = 0; i < message.infos.length; ++i) {
                    var error = $root.CMsgDOTALeagueInfo.verify(message.infos[i]);
                    if (error)
                        return "infos." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgDOTALeagueInfoList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTALeagueInfoList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTALeagueInfoList} CMsgDOTALeagueInfoList
         */
        CMsgDOTALeagueInfoList.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTALeagueInfoList)
                return object;
            var message = new $root.CMsgDOTALeagueInfoList();
            if (object.infos) {
                if (!Array.isArray(object.infos))
                    throw TypeError(".CMsgDOTALeagueInfoList.infos: array expected");
                message.infos = [];
                for (var i = 0; i < object.infos.length; ++i) {
                    if (typeof object.infos[i] !== "object")
                        throw TypeError(".CMsgDOTALeagueInfoList.infos: object expected");
                    message.infos[i] = $root.CMsgDOTALeagueInfo.fromObject(object.infos[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTALeagueInfoList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTALeagueInfoList
         * @static
         * @param {CMsgDOTALeagueInfoList} message CMsgDOTALeagueInfoList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTALeagueInfoList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.infos = [];
            if (message.infos && message.infos.length) {
                object.infos = [];
                for (var j = 0; j < message.infos.length; ++j)
                    object.infos[j] = $root.CMsgDOTALeagueInfo.toObject(message.infos[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgDOTALeagueInfoList to JSON.
         * @function toJSON
         * @memberof CMsgDOTALeagueInfoList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTALeagueInfoList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgDOTALeagueInfoList;
    })();
    
    $root.CMsgDOTALeagueLiveGames = (function() {
    
        /**
         * Properties of a CMsgDOTALeagueLiveGames.
         * @exports ICMsgDOTALeagueLiveGames
         * @interface ICMsgDOTALeagueLiveGames
         * @property {Array.<CMsgDOTALeagueLiveGames.ILiveGame>|null} [games] CMsgDOTALeagueLiveGames games
         */
    
        /**
         * Constructs a new CMsgDOTALeagueLiveGames.
         * @exports CMsgDOTALeagueLiveGames
         * @classdesc Represents a CMsgDOTALeagueLiveGames.
         * @implements ICMsgDOTALeagueLiveGames
         * @constructor
         * @param {ICMsgDOTALeagueLiveGames=} [properties] Properties to set
         */
        function CMsgDOTALeagueLiveGames(properties) {
            this.games = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTALeagueLiveGames games.
         * @member {Array.<CMsgDOTALeagueLiveGames.ILiveGame>} games
         * @memberof CMsgDOTALeagueLiveGames
         * @instance
         */
        CMsgDOTALeagueLiveGames.prototype.games = $util.emptyArray;
    
        /**
         * Creates a new CMsgDOTALeagueLiveGames instance using the specified properties.
         * @function create
         * @memberof CMsgDOTALeagueLiveGames
         * @static
         * @param {ICMsgDOTALeagueLiveGames=} [properties] Properties to set
         * @returns {CMsgDOTALeagueLiveGames} CMsgDOTALeagueLiveGames instance
         */
        CMsgDOTALeagueLiveGames.create = function create(properties) {
            return new CMsgDOTALeagueLiveGames(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueLiveGames message. Does not implicitly {@link CMsgDOTALeagueLiveGames.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTALeagueLiveGames
         * @static
         * @param {ICMsgDOTALeagueLiveGames} message CMsgDOTALeagueLiveGames message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueLiveGames.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.games != null && message.games.length)
                for (var i = 0; i < message.games.length; ++i)
                    $root.CMsgDOTALeagueLiveGames.LiveGame.encode(message.games[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueLiveGames message, length delimited. Does not implicitly {@link CMsgDOTALeagueLiveGames.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTALeagueLiveGames
         * @static
         * @param {ICMsgDOTALeagueLiveGames} message CMsgDOTALeagueLiveGames message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueLiveGames.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTALeagueLiveGames message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTALeagueLiveGames
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTALeagueLiveGames} CMsgDOTALeagueLiveGames
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueLiveGames.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueLiveGames();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.games && message.games.length))
                        message.games = [];
                    message.games.push($root.CMsgDOTALeagueLiveGames.LiveGame.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTALeagueLiveGames message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTALeagueLiveGames
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTALeagueLiveGames} CMsgDOTALeagueLiveGames
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueLiveGames.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTALeagueLiveGames message.
         * @function verify
         * @memberof CMsgDOTALeagueLiveGames
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTALeagueLiveGames.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.games != null && message.hasOwnProperty("games")) {
                if (!Array.isArray(message.games))
                    return "games: array expected";
                for (var i = 0; i < message.games.length; ++i) {
                    var error = $root.CMsgDOTALeagueLiveGames.LiveGame.verify(message.games[i]);
                    if (error)
                        return "games." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgDOTALeagueLiveGames message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTALeagueLiveGames
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTALeagueLiveGames} CMsgDOTALeagueLiveGames
         */
        CMsgDOTALeagueLiveGames.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTALeagueLiveGames)
                return object;
            var message = new $root.CMsgDOTALeagueLiveGames();
            if (object.games) {
                if (!Array.isArray(object.games))
                    throw TypeError(".CMsgDOTALeagueLiveGames.games: array expected");
                message.games = [];
                for (var i = 0; i < object.games.length; ++i) {
                    if (typeof object.games[i] !== "object")
                        throw TypeError(".CMsgDOTALeagueLiveGames.games: object expected");
                    message.games[i] = $root.CMsgDOTALeagueLiveGames.LiveGame.fromObject(object.games[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTALeagueLiveGames message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTALeagueLiveGames
         * @static
         * @param {CMsgDOTALeagueLiveGames} message CMsgDOTALeagueLiveGames
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTALeagueLiveGames.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.games = [];
            if (message.games && message.games.length) {
                object.games = [];
                for (var j = 0; j < message.games.length; ++j)
                    object.games[j] = $root.CMsgDOTALeagueLiveGames.LiveGame.toObject(message.games[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgDOTALeagueLiveGames to JSON.
         * @function toJSON
         * @memberof CMsgDOTALeagueLiveGames
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTALeagueLiveGames.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgDOTALeagueLiveGames.LiveGame = (function() {
    
            /**
             * Properties of a LiveGame.
             * @memberof CMsgDOTALeagueLiveGames
             * @interface ILiveGame
             * @property {number|null} [league_id] LiveGame league_id
             * @property {number|Long|null} [server_steam_id] LiveGame server_steam_id
             * @property {string|null} [radiant_name] LiveGame radiant_name
             * @property {number|Long|null} [radiant_logo] LiveGame radiant_logo
             * @property {number|null} [radiant_team_id] LiveGame radiant_team_id
             * @property {string|null} [dire_name] LiveGame dire_name
             * @property {number|Long|null} [dire_logo] LiveGame dire_logo
             * @property {number|null} [dire_team_id] LiveGame dire_team_id
             * @property {number|null} [time] LiveGame time
             * @property {number|null} [spectators] LiveGame spectators
             */
    
            /**
             * Constructs a new LiveGame.
             * @memberof CMsgDOTALeagueLiveGames
             * @classdesc Represents a LiveGame.
             * @implements ILiveGame
             * @constructor
             * @param {CMsgDOTALeagueLiveGames.ILiveGame=} [properties] Properties to set
             */
            function LiveGame(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LiveGame league_id.
             * @member {number} league_id
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @instance
             */
            LiveGame.prototype.league_id = 0;
    
            /**
             * LiveGame server_steam_id.
             * @member {number|Long} server_steam_id
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @instance
             */
            LiveGame.prototype.server_steam_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * LiveGame radiant_name.
             * @member {string} radiant_name
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @instance
             */
            LiveGame.prototype.radiant_name = "";
    
            /**
             * LiveGame radiant_logo.
             * @member {number|Long} radiant_logo
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @instance
             */
            LiveGame.prototype.radiant_logo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * LiveGame radiant_team_id.
             * @member {number} radiant_team_id
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @instance
             */
            LiveGame.prototype.radiant_team_id = 0;
    
            /**
             * LiveGame dire_name.
             * @member {string} dire_name
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @instance
             */
            LiveGame.prototype.dire_name = "";
    
            /**
             * LiveGame dire_logo.
             * @member {number|Long} dire_logo
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @instance
             */
            LiveGame.prototype.dire_logo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * LiveGame dire_team_id.
             * @member {number} dire_team_id
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @instance
             */
            LiveGame.prototype.dire_team_id = 0;
    
            /**
             * LiveGame time.
             * @member {number} time
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @instance
             */
            LiveGame.prototype.time = 0;
    
            /**
             * LiveGame spectators.
             * @member {number} spectators
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @instance
             */
            LiveGame.prototype.spectators = 0;
    
            /**
             * Creates a new LiveGame instance using the specified properties.
             * @function create
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @static
             * @param {CMsgDOTALeagueLiveGames.ILiveGame=} [properties] Properties to set
             * @returns {CMsgDOTALeagueLiveGames.LiveGame} LiveGame instance
             */
            LiveGame.create = function create(properties) {
                return new LiveGame(properties);
            };
    
            /**
             * Encodes the specified LiveGame message. Does not implicitly {@link CMsgDOTALeagueLiveGames.LiveGame.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @static
             * @param {CMsgDOTALeagueLiveGames.ILiveGame} message LiveGame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LiveGame.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.league_id != null && Object.hasOwnProperty.call(message, "league_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.league_id);
                if (message.server_steam_id != null && Object.hasOwnProperty.call(message, "server_steam_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.server_steam_id);
                if (message.radiant_name != null && Object.hasOwnProperty.call(message, "radiant_name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.radiant_name);
                if (message.radiant_logo != null && Object.hasOwnProperty.call(message, "radiant_logo"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.radiant_logo);
                if (message.dire_name != null && Object.hasOwnProperty.call(message, "dire_name"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.dire_name);
                if (message.dire_logo != null && Object.hasOwnProperty.call(message, "dire_logo"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.dire_logo);
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.time);
                if (message.spectators != null && Object.hasOwnProperty.call(message, "spectators"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.spectators);
                if (message.radiant_team_id != null && Object.hasOwnProperty.call(message, "radiant_team_id"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.radiant_team_id);
                if (message.dire_team_id != null && Object.hasOwnProperty.call(message, "dire_team_id"))
                    writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.dire_team_id);
                return writer;
            };
    
            /**
             * Encodes the specified LiveGame message, length delimited. Does not implicitly {@link CMsgDOTALeagueLiveGames.LiveGame.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @static
             * @param {CMsgDOTALeagueLiveGames.ILiveGame} message LiveGame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LiveGame.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a LiveGame message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTALeagueLiveGames.LiveGame} LiveGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LiveGame.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueLiveGames.LiveGame();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.league_id = reader.uint32();
                        break;
                    case 2:
                        message.server_steam_id = reader.uint64();
                        break;
                    case 3:
                        message.radiant_name = reader.string();
                        break;
                    case 4:
                        message.radiant_logo = reader.uint64();
                        break;
                    case 9:
                        message.radiant_team_id = reader.uint32();
                        break;
                    case 5:
                        message.dire_name = reader.string();
                        break;
                    case 6:
                        message.dire_logo = reader.uint64();
                        break;
                    case 10:
                        message.dire_team_id = reader.uint32();
                        break;
                    case 7:
                        message.time = reader.uint32();
                        break;
                    case 8:
                        message.spectators = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a LiveGame message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTALeagueLiveGames.LiveGame} LiveGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LiveGame.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a LiveGame message.
             * @function verify
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LiveGame.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.league_id != null && message.hasOwnProperty("league_id"))
                    if (!$util.isInteger(message.league_id))
                        return "league_id: integer expected";
                if (message.server_steam_id != null && message.hasOwnProperty("server_steam_id"))
                    if (!$util.isInteger(message.server_steam_id) && !(message.server_steam_id && $util.isInteger(message.server_steam_id.low) && $util.isInteger(message.server_steam_id.high)))
                        return "server_steam_id: integer|Long expected";
                if (message.radiant_name != null && message.hasOwnProperty("radiant_name"))
                    if (!$util.isString(message.radiant_name))
                        return "radiant_name: string expected";
                if (message.radiant_logo != null && message.hasOwnProperty("radiant_logo"))
                    if (!$util.isInteger(message.radiant_logo) && !(message.radiant_logo && $util.isInteger(message.radiant_logo.low) && $util.isInteger(message.radiant_logo.high)))
                        return "radiant_logo: integer|Long expected";
                if (message.radiant_team_id != null && message.hasOwnProperty("radiant_team_id"))
                    if (!$util.isInteger(message.radiant_team_id))
                        return "radiant_team_id: integer expected";
                if (message.dire_name != null && message.hasOwnProperty("dire_name"))
                    if (!$util.isString(message.dire_name))
                        return "dire_name: string expected";
                if (message.dire_logo != null && message.hasOwnProperty("dire_logo"))
                    if (!$util.isInteger(message.dire_logo) && !(message.dire_logo && $util.isInteger(message.dire_logo.low) && $util.isInteger(message.dire_logo.high)))
                        return "dire_logo: integer|Long expected";
                if (message.dire_team_id != null && message.hasOwnProperty("dire_team_id"))
                    if (!$util.isInteger(message.dire_team_id))
                        return "dire_team_id: integer expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time))
                        return "time: integer expected";
                if (message.spectators != null && message.hasOwnProperty("spectators"))
                    if (!$util.isInteger(message.spectators))
                        return "spectators: integer expected";
                return null;
            };
    
            /**
             * Creates a LiveGame message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTALeagueLiveGames.LiveGame} LiveGame
             */
            LiveGame.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTALeagueLiveGames.LiveGame)
                    return object;
                var message = new $root.CMsgDOTALeagueLiveGames.LiveGame();
                if (object.league_id != null)
                    message.league_id = object.league_id >>> 0;
                if (object.server_steam_id != null)
                    if ($util.Long)
                        (message.server_steam_id = $util.Long.fromValue(object.server_steam_id)).unsigned = true;
                    else if (typeof object.server_steam_id === "string")
                        message.server_steam_id = parseInt(object.server_steam_id, 10);
                    else if (typeof object.server_steam_id === "number")
                        message.server_steam_id = object.server_steam_id;
                    else if (typeof object.server_steam_id === "object")
                        message.server_steam_id = new $util.LongBits(object.server_steam_id.low >>> 0, object.server_steam_id.high >>> 0).toNumber(true);
                if (object.radiant_name != null)
                    message.radiant_name = String(object.radiant_name);
                if (object.radiant_logo != null)
                    if ($util.Long)
                        (message.radiant_logo = $util.Long.fromValue(object.radiant_logo)).unsigned = true;
                    else if (typeof object.radiant_logo === "string")
                        message.radiant_logo = parseInt(object.radiant_logo, 10);
                    else if (typeof object.radiant_logo === "number")
                        message.radiant_logo = object.radiant_logo;
                    else if (typeof object.radiant_logo === "object")
                        message.radiant_logo = new $util.LongBits(object.radiant_logo.low >>> 0, object.radiant_logo.high >>> 0).toNumber(true);
                if (object.radiant_team_id != null)
                    message.radiant_team_id = object.radiant_team_id >>> 0;
                if (object.dire_name != null)
                    message.dire_name = String(object.dire_name);
                if (object.dire_logo != null)
                    if ($util.Long)
                        (message.dire_logo = $util.Long.fromValue(object.dire_logo)).unsigned = true;
                    else if (typeof object.dire_logo === "string")
                        message.dire_logo = parseInt(object.dire_logo, 10);
                    else if (typeof object.dire_logo === "number")
                        message.dire_logo = object.dire_logo;
                    else if (typeof object.dire_logo === "object")
                        message.dire_logo = new $util.LongBits(object.dire_logo.low >>> 0, object.dire_logo.high >>> 0).toNumber(true);
                if (object.dire_team_id != null)
                    message.dire_team_id = object.dire_team_id >>> 0;
                if (object.time != null)
                    message.time = object.time >>> 0;
                if (object.spectators != null)
                    message.spectators = object.spectators >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a LiveGame message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @static
             * @param {CMsgDOTALeagueLiveGames.LiveGame} message LiveGame
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LiveGame.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.league_id = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.server_steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.server_steam_id = options.longs === String ? "0" : 0;
                    object.radiant_name = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.radiant_logo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.radiant_logo = options.longs === String ? "0" : 0;
                    object.dire_name = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.dire_logo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.dire_logo = options.longs === String ? "0" : 0;
                    object.time = 0;
                    object.spectators = 0;
                    object.radiant_team_id = 0;
                    object.dire_team_id = 0;
                }
                if (message.league_id != null && message.hasOwnProperty("league_id"))
                    object.league_id = message.league_id;
                if (message.server_steam_id != null && message.hasOwnProperty("server_steam_id"))
                    if (typeof message.server_steam_id === "number")
                        object.server_steam_id = options.longs === String ? String(message.server_steam_id) : message.server_steam_id;
                    else
                        object.server_steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.server_steam_id) : options.longs === Number ? new $util.LongBits(message.server_steam_id.low >>> 0, message.server_steam_id.high >>> 0).toNumber(true) : message.server_steam_id;
                if (message.radiant_name != null && message.hasOwnProperty("radiant_name"))
                    object.radiant_name = message.radiant_name;
                if (message.radiant_logo != null && message.hasOwnProperty("radiant_logo"))
                    if (typeof message.radiant_logo === "number")
                        object.radiant_logo = options.longs === String ? String(message.radiant_logo) : message.radiant_logo;
                    else
                        object.radiant_logo = options.longs === String ? $util.Long.prototype.toString.call(message.radiant_logo) : options.longs === Number ? new $util.LongBits(message.radiant_logo.low >>> 0, message.radiant_logo.high >>> 0).toNumber(true) : message.radiant_logo;
                if (message.dire_name != null && message.hasOwnProperty("dire_name"))
                    object.dire_name = message.dire_name;
                if (message.dire_logo != null && message.hasOwnProperty("dire_logo"))
                    if (typeof message.dire_logo === "number")
                        object.dire_logo = options.longs === String ? String(message.dire_logo) : message.dire_logo;
                    else
                        object.dire_logo = options.longs === String ? $util.Long.prototype.toString.call(message.dire_logo) : options.longs === Number ? new $util.LongBits(message.dire_logo.low >>> 0, message.dire_logo.high >>> 0).toNumber(true) : message.dire_logo;
                if (message.time != null && message.hasOwnProperty("time"))
                    object.time = message.time;
                if (message.spectators != null && message.hasOwnProperty("spectators"))
                    object.spectators = message.spectators;
                if (message.radiant_team_id != null && message.hasOwnProperty("radiant_team_id"))
                    object.radiant_team_id = message.radiant_team_id;
                if (message.dire_team_id != null && message.hasOwnProperty("dire_team_id"))
                    object.dire_team_id = message.dire_team_id;
                return object;
            };
    
            /**
             * Converts this LiveGame to JSON.
             * @function toJSON
             * @memberof CMsgDOTALeagueLiveGames.LiveGame
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LiveGame.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return LiveGame;
        })();
    
        return CMsgDOTALeagueLiveGames;
    })();
    
    $root.CMsgDOTALeagueMessages = (function() {
    
        /**
         * Properties of a CMsgDOTALeagueMessages.
         * @exports ICMsgDOTALeagueMessages
         * @interface ICMsgDOTALeagueMessages
         * @property {Array.<CMsgDOTALeagueMessages.IMessage>|null} [messages] CMsgDOTALeagueMessages messages
         */
    
        /**
         * Constructs a new CMsgDOTALeagueMessages.
         * @exports CMsgDOTALeagueMessages
         * @classdesc Represents a CMsgDOTALeagueMessages.
         * @implements ICMsgDOTALeagueMessages
         * @constructor
         * @param {ICMsgDOTALeagueMessages=} [properties] Properties to set
         */
        function CMsgDOTALeagueMessages(properties) {
            this.messages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTALeagueMessages messages.
         * @member {Array.<CMsgDOTALeagueMessages.IMessage>} messages
         * @memberof CMsgDOTALeagueMessages
         * @instance
         */
        CMsgDOTALeagueMessages.prototype.messages = $util.emptyArray;
    
        /**
         * Creates a new CMsgDOTALeagueMessages instance using the specified properties.
         * @function create
         * @memberof CMsgDOTALeagueMessages
         * @static
         * @param {ICMsgDOTALeagueMessages=} [properties] Properties to set
         * @returns {CMsgDOTALeagueMessages} CMsgDOTALeagueMessages instance
         */
        CMsgDOTALeagueMessages.create = function create(properties) {
            return new CMsgDOTALeagueMessages(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueMessages message. Does not implicitly {@link CMsgDOTALeagueMessages.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTALeagueMessages
         * @static
         * @param {ICMsgDOTALeagueMessages} message CMsgDOTALeagueMessages message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueMessages.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messages != null && message.messages.length)
                for (var i = 0; i < message.messages.length; ++i)
                    $root.CMsgDOTALeagueMessages.Message.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueMessages message, length delimited. Does not implicitly {@link CMsgDOTALeagueMessages.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTALeagueMessages
         * @static
         * @param {ICMsgDOTALeagueMessages} message CMsgDOTALeagueMessages message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueMessages.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTALeagueMessages message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTALeagueMessages
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTALeagueMessages} CMsgDOTALeagueMessages
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueMessages.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueMessages();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.messages && message.messages.length))
                        message.messages = [];
                    message.messages.push($root.CMsgDOTALeagueMessages.Message.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTALeagueMessages message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTALeagueMessages
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTALeagueMessages} CMsgDOTALeagueMessages
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueMessages.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTALeagueMessages message.
         * @function verify
         * @memberof CMsgDOTALeagueMessages
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTALeagueMessages.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (var i = 0; i < message.messages.length; ++i) {
                    var error = $root.CMsgDOTALeagueMessages.Message.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgDOTALeagueMessages message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTALeagueMessages
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTALeagueMessages} CMsgDOTALeagueMessages
         */
        CMsgDOTALeagueMessages.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTALeagueMessages)
                return object;
            var message = new $root.CMsgDOTALeagueMessages();
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".CMsgDOTALeagueMessages.messages: array expected");
                message.messages = [];
                for (var i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".CMsgDOTALeagueMessages.messages: object expected");
                    message.messages[i] = $root.CMsgDOTALeagueMessages.Message.fromObject(object.messages[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTALeagueMessages message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTALeagueMessages
         * @static
         * @param {CMsgDOTALeagueMessages} message CMsgDOTALeagueMessages
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTALeagueMessages.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (var j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.CMsgDOTALeagueMessages.Message.toObject(message.messages[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgDOTALeagueMessages to JSON.
         * @function toJSON
         * @memberof CMsgDOTALeagueMessages
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTALeagueMessages.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgDOTALeagueMessages.Message = (function() {
    
            /**
             * Properties of a Message.
             * @memberof CMsgDOTALeagueMessages
             * @interface IMessage
             * @property {number|null} [author_account_id] Message author_account_id
             * @property {number|null} [timestamp] Message timestamp
             * @property {string|null} [message] Message message
             */
    
            /**
             * Constructs a new Message.
             * @memberof CMsgDOTALeagueMessages
             * @classdesc Represents a Message.
             * @implements IMessage
             * @constructor
             * @param {CMsgDOTALeagueMessages.IMessage=} [properties] Properties to set
             */
            function Message(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Message author_account_id.
             * @member {number} author_account_id
             * @memberof CMsgDOTALeagueMessages.Message
             * @instance
             */
            Message.prototype.author_account_id = 0;
    
            /**
             * Message timestamp.
             * @member {number} timestamp
             * @memberof CMsgDOTALeagueMessages.Message
             * @instance
             */
            Message.prototype.timestamp = 0;
    
            /**
             * Message message.
             * @member {string} message
             * @memberof CMsgDOTALeagueMessages.Message
             * @instance
             */
            Message.prototype.message = "";
    
            /**
             * Creates a new Message instance using the specified properties.
             * @function create
             * @memberof CMsgDOTALeagueMessages.Message
             * @static
             * @param {CMsgDOTALeagueMessages.IMessage=} [properties] Properties to set
             * @returns {CMsgDOTALeagueMessages.Message} Message instance
             */
            Message.create = function create(properties) {
                return new Message(properties);
            };
    
            /**
             * Encodes the specified Message message. Does not implicitly {@link CMsgDOTALeagueMessages.Message.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTALeagueMessages.Message
             * @static
             * @param {CMsgDOTALeagueMessages.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.author_account_id != null && Object.hasOwnProperty.call(message, "author_account_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.author_account_id);
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestamp);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
                return writer;
            };
    
            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link CMsgDOTALeagueMessages.Message.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTALeagueMessages.Message
             * @static
             * @param {CMsgDOTALeagueMessages.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Message message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTALeagueMessages.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTALeagueMessages.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueMessages.Message();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.author_account_id = reader.uint32();
                        break;
                    case 2:
                        message.timestamp = reader.uint32();
                        break;
                    case 3:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTALeagueMessages.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTALeagueMessages.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Message message.
             * @function verify
             * @memberof CMsgDOTALeagueMessages.Message
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Message.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.author_account_id != null && message.hasOwnProperty("author_account_id"))
                    if (!$util.isInteger(message.author_account_id))
                        return "author_account_id: integer expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp))
                        return "timestamp: integer expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };
    
            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTALeagueMessages.Message
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTALeagueMessages.Message} Message
             */
            Message.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTALeagueMessages.Message)
                    return object;
                var message = new $root.CMsgDOTALeagueMessages.Message();
                if (object.author_account_id != null)
                    message.author_account_id = object.author_account_id >>> 0;
                if (object.timestamp != null)
                    message.timestamp = object.timestamp >>> 0;
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };
    
            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTALeagueMessages.Message
             * @static
             * @param {CMsgDOTALeagueMessages.Message} message Message
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Message.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.author_account_id = 0;
                    object.timestamp = 0;
                    object.message = "";
                }
                if (message.author_account_id != null && message.hasOwnProperty("author_account_id"))
                    object.author_account_id = message.author_account_id;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = message.timestamp;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };
    
            /**
             * Converts this Message to JSON.
             * @function toJSON
             * @memberof CMsgDOTALeagueMessages.Message
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Message.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Message;
        })();
    
        return CMsgDOTALeagueMessages;
    })();
    
    $root.CMsgDOTALeaguePrizePool = (function() {
    
        /**
         * Properties of a CMsgDOTALeaguePrizePool.
         * @exports ICMsgDOTALeaguePrizePool
         * @interface ICMsgDOTALeaguePrizePool
         * @property {number|null} [prize_pool] CMsgDOTALeaguePrizePool prize_pool
         * @property {number|null} [increment_per_second] CMsgDOTALeaguePrizePool increment_per_second
         */
    
        /**
         * Constructs a new CMsgDOTALeaguePrizePool.
         * @exports CMsgDOTALeaguePrizePool
         * @classdesc Represents a CMsgDOTALeaguePrizePool.
         * @implements ICMsgDOTALeaguePrizePool
         * @constructor
         * @param {ICMsgDOTALeaguePrizePool=} [properties] Properties to set
         */
        function CMsgDOTALeaguePrizePool(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTALeaguePrizePool prize_pool.
         * @member {number} prize_pool
         * @memberof CMsgDOTALeaguePrizePool
         * @instance
         */
        CMsgDOTALeaguePrizePool.prototype.prize_pool = 0;
    
        /**
         * CMsgDOTALeaguePrizePool increment_per_second.
         * @member {number} increment_per_second
         * @memberof CMsgDOTALeaguePrizePool
         * @instance
         */
        CMsgDOTALeaguePrizePool.prototype.increment_per_second = 0;
    
        /**
         * Creates a new CMsgDOTALeaguePrizePool instance using the specified properties.
         * @function create
         * @memberof CMsgDOTALeaguePrizePool
         * @static
         * @param {ICMsgDOTALeaguePrizePool=} [properties] Properties to set
         * @returns {CMsgDOTALeaguePrizePool} CMsgDOTALeaguePrizePool instance
         */
        CMsgDOTALeaguePrizePool.create = function create(properties) {
            return new CMsgDOTALeaguePrizePool(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTALeaguePrizePool message. Does not implicitly {@link CMsgDOTALeaguePrizePool.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTALeaguePrizePool
         * @static
         * @param {ICMsgDOTALeaguePrizePool} message CMsgDOTALeaguePrizePool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeaguePrizePool.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.prize_pool != null && Object.hasOwnProperty.call(message, "prize_pool"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.prize_pool);
            if (message.increment_per_second != null && Object.hasOwnProperty.call(message, "increment_per_second"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.increment_per_second);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTALeaguePrizePool message, length delimited. Does not implicitly {@link CMsgDOTALeaguePrizePool.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTALeaguePrizePool
         * @static
         * @param {ICMsgDOTALeaguePrizePool} message CMsgDOTALeaguePrizePool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeaguePrizePool.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTALeaguePrizePool message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTALeaguePrizePool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTALeaguePrizePool} CMsgDOTALeaguePrizePool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeaguePrizePool.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeaguePrizePool();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.prize_pool = reader.uint32();
                    break;
                case 2:
                    message.increment_per_second = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTALeaguePrizePool message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTALeaguePrizePool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTALeaguePrizePool} CMsgDOTALeaguePrizePool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeaguePrizePool.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTALeaguePrizePool message.
         * @function verify
         * @memberof CMsgDOTALeaguePrizePool
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTALeaguePrizePool.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.prize_pool != null && message.hasOwnProperty("prize_pool"))
                if (!$util.isInteger(message.prize_pool))
                    return "prize_pool: integer expected";
            if (message.increment_per_second != null && message.hasOwnProperty("increment_per_second"))
                if (typeof message.increment_per_second !== "number")
                    return "increment_per_second: number expected";
            return null;
        };
    
        /**
         * Creates a CMsgDOTALeaguePrizePool message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTALeaguePrizePool
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTALeaguePrizePool} CMsgDOTALeaguePrizePool
         */
        CMsgDOTALeaguePrizePool.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTALeaguePrizePool)
                return object;
            var message = new $root.CMsgDOTALeaguePrizePool();
            if (object.prize_pool != null)
                message.prize_pool = object.prize_pool >>> 0;
            if (object.increment_per_second != null)
                message.increment_per_second = Number(object.increment_per_second);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTALeaguePrizePool message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTALeaguePrizePool
         * @static
         * @param {CMsgDOTALeaguePrizePool} message CMsgDOTALeaguePrizePool
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTALeaguePrizePool.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.prize_pool = 0;
                object.increment_per_second = 0;
            }
            if (message.prize_pool != null && message.hasOwnProperty("prize_pool"))
                object.prize_pool = message.prize_pool;
            if (message.increment_per_second != null && message.hasOwnProperty("increment_per_second"))
                object.increment_per_second = options.json && !isFinite(message.increment_per_second) ? String(message.increment_per_second) : message.increment_per_second;
            return object;
        };
    
        /**
         * Converts this CMsgDOTALeaguePrizePool to JSON.
         * @function toJSON
         * @memberof CMsgDOTALeaguePrizePool
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTALeaguePrizePool.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgDOTALeaguePrizePool;
    })();
    
    $root.CMsgDOTALeagueInfoListAdminsRequest = (function() {
    
        /**
         * Properties of a CMsgDOTALeagueInfoListAdminsRequest.
         * @exports ICMsgDOTALeagueInfoListAdminsRequest
         * @interface ICMsgDOTALeagueInfoListAdminsRequest
         */
    
        /**
         * Constructs a new CMsgDOTALeagueInfoListAdminsRequest.
         * @exports CMsgDOTALeagueInfoListAdminsRequest
         * @classdesc Represents a CMsgDOTALeagueInfoListAdminsRequest.
         * @implements ICMsgDOTALeagueInfoListAdminsRequest
         * @constructor
         * @param {ICMsgDOTALeagueInfoListAdminsRequest=} [properties] Properties to set
         */
        function CMsgDOTALeagueInfoListAdminsRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CMsgDOTALeagueInfoListAdminsRequest instance using the specified properties.
         * @function create
         * @memberof CMsgDOTALeagueInfoListAdminsRequest
         * @static
         * @param {ICMsgDOTALeagueInfoListAdminsRequest=} [properties] Properties to set
         * @returns {CMsgDOTALeagueInfoListAdminsRequest} CMsgDOTALeagueInfoListAdminsRequest instance
         */
        CMsgDOTALeagueInfoListAdminsRequest.create = function create(properties) {
            return new CMsgDOTALeagueInfoListAdminsRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueInfoListAdminsRequest message. Does not implicitly {@link CMsgDOTALeagueInfoListAdminsRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTALeagueInfoListAdminsRequest
         * @static
         * @param {ICMsgDOTALeagueInfoListAdminsRequest} message CMsgDOTALeagueInfoListAdminsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueInfoListAdminsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueInfoListAdminsRequest message, length delimited. Does not implicitly {@link CMsgDOTALeagueInfoListAdminsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTALeagueInfoListAdminsRequest
         * @static
         * @param {ICMsgDOTALeagueInfoListAdminsRequest} message CMsgDOTALeagueInfoListAdminsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueInfoListAdminsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTALeagueInfoListAdminsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTALeagueInfoListAdminsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTALeagueInfoListAdminsRequest} CMsgDOTALeagueInfoListAdminsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueInfoListAdminsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueInfoListAdminsRequest();
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
         * Decodes a CMsgDOTALeagueInfoListAdminsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTALeagueInfoListAdminsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTALeagueInfoListAdminsRequest} CMsgDOTALeagueInfoListAdminsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueInfoListAdminsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTALeagueInfoListAdminsRequest message.
         * @function verify
         * @memberof CMsgDOTALeagueInfoListAdminsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTALeagueInfoListAdminsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CMsgDOTALeagueInfoListAdminsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTALeagueInfoListAdminsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTALeagueInfoListAdminsRequest} CMsgDOTALeagueInfoListAdminsRequest
         */
        CMsgDOTALeagueInfoListAdminsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTALeagueInfoListAdminsRequest)
                return object;
            return new $root.CMsgDOTALeagueInfoListAdminsRequest();
        };
    
        /**
         * Creates a plain object from a CMsgDOTALeagueInfoListAdminsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTALeagueInfoListAdminsRequest
         * @static
         * @param {CMsgDOTALeagueInfoListAdminsRequest} message CMsgDOTALeagueInfoListAdminsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTALeagueInfoListAdminsRequest.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CMsgDOTALeagueInfoListAdminsRequest to JSON.
         * @function toJSON
         * @memberof CMsgDOTALeagueInfoListAdminsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTALeagueInfoListAdminsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgDOTALeagueInfoListAdminsRequest;
    })();
    
    $root.CMsgDOTALeagueNodeRequest = (function() {
    
        /**
         * Properties of a CMsgDOTALeagueNodeRequest.
         * @exports ICMsgDOTALeagueNodeRequest
         * @interface ICMsgDOTALeagueNodeRequest
         * @property {number|null} [league_id] CMsgDOTALeagueNodeRequest league_id
         * @property {number|null} [node_id] CMsgDOTALeagueNodeRequest node_id
         */
    
        /**
         * Constructs a new CMsgDOTALeagueNodeRequest.
         * @exports CMsgDOTALeagueNodeRequest
         * @classdesc Represents a CMsgDOTALeagueNodeRequest.
         * @implements ICMsgDOTALeagueNodeRequest
         * @constructor
         * @param {ICMsgDOTALeagueNodeRequest=} [properties] Properties to set
         */
        function CMsgDOTALeagueNodeRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTALeagueNodeRequest league_id.
         * @member {number} league_id
         * @memberof CMsgDOTALeagueNodeRequest
         * @instance
         */
        CMsgDOTALeagueNodeRequest.prototype.league_id = 0;
    
        /**
         * CMsgDOTALeagueNodeRequest node_id.
         * @member {number} node_id
         * @memberof CMsgDOTALeagueNodeRequest
         * @instance
         */
        CMsgDOTALeagueNodeRequest.prototype.node_id = 0;
    
        /**
         * Creates a new CMsgDOTALeagueNodeRequest instance using the specified properties.
         * @function create
         * @memberof CMsgDOTALeagueNodeRequest
         * @static
         * @param {ICMsgDOTALeagueNodeRequest=} [properties] Properties to set
         * @returns {CMsgDOTALeagueNodeRequest} CMsgDOTALeagueNodeRequest instance
         */
        CMsgDOTALeagueNodeRequest.create = function create(properties) {
            return new CMsgDOTALeagueNodeRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueNodeRequest message. Does not implicitly {@link CMsgDOTALeagueNodeRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTALeagueNodeRequest
         * @static
         * @param {ICMsgDOTALeagueNodeRequest} message CMsgDOTALeagueNodeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueNodeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.league_id != null && Object.hasOwnProperty.call(message, "league_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.league_id);
            if (message.node_id != null && Object.hasOwnProperty.call(message, "node_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.node_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueNodeRequest message, length delimited. Does not implicitly {@link CMsgDOTALeagueNodeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTALeagueNodeRequest
         * @static
         * @param {ICMsgDOTALeagueNodeRequest} message CMsgDOTALeagueNodeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueNodeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTALeagueNodeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTALeagueNodeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTALeagueNodeRequest} CMsgDOTALeagueNodeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueNodeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueNodeRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.league_id = reader.uint32();
                    break;
                case 2:
                    message.node_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTALeagueNodeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTALeagueNodeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTALeagueNodeRequest} CMsgDOTALeagueNodeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueNodeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTALeagueNodeRequest message.
         * @function verify
         * @memberof CMsgDOTALeagueNodeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTALeagueNodeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.league_id != null && message.hasOwnProperty("league_id"))
                if (!$util.isInteger(message.league_id))
                    return "league_id: integer expected";
            if (message.node_id != null && message.hasOwnProperty("node_id"))
                if (!$util.isInteger(message.node_id))
                    return "node_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgDOTALeagueNodeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTALeagueNodeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTALeagueNodeRequest} CMsgDOTALeagueNodeRequest
         */
        CMsgDOTALeagueNodeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTALeagueNodeRequest)
                return object;
            var message = new $root.CMsgDOTALeagueNodeRequest();
            if (object.league_id != null)
                message.league_id = object.league_id >>> 0;
            if (object.node_id != null)
                message.node_id = object.node_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTALeagueNodeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTALeagueNodeRequest
         * @static
         * @param {CMsgDOTALeagueNodeRequest} message CMsgDOTALeagueNodeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTALeagueNodeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.league_id = 0;
                object.node_id = 0;
            }
            if (message.league_id != null && message.hasOwnProperty("league_id"))
                object.league_id = message.league_id;
            if (message.node_id != null && message.hasOwnProperty("node_id"))
                object.node_id = message.node_id;
            return object;
        };
    
        /**
         * Converts this CMsgDOTALeagueNodeRequest to JSON.
         * @function toJSON
         * @memberof CMsgDOTALeagueNodeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTALeagueNodeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgDOTALeagueNodeRequest;
    })();
    
    $root.CMsgDOTALeagueNodeResponse = (function() {
    
        /**
         * Properties of a CMsgDOTALeagueNodeResponse.
         * @exports ICMsgDOTALeagueNodeResponse
         * @interface ICMsgDOTALeagueNodeResponse
         * @property {ICMsgDOTALeagueNode|null} [node] CMsgDOTALeagueNodeResponse node
         */
    
        /**
         * Constructs a new CMsgDOTALeagueNodeResponse.
         * @exports CMsgDOTALeagueNodeResponse
         * @classdesc Represents a CMsgDOTALeagueNodeResponse.
         * @implements ICMsgDOTALeagueNodeResponse
         * @constructor
         * @param {ICMsgDOTALeagueNodeResponse=} [properties] Properties to set
         */
        function CMsgDOTALeagueNodeResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTALeagueNodeResponse node.
         * @member {ICMsgDOTALeagueNode|null|undefined} node
         * @memberof CMsgDOTALeagueNodeResponse
         * @instance
         */
        CMsgDOTALeagueNodeResponse.prototype.node = null;
    
        /**
         * Creates a new CMsgDOTALeagueNodeResponse instance using the specified properties.
         * @function create
         * @memberof CMsgDOTALeagueNodeResponse
         * @static
         * @param {ICMsgDOTALeagueNodeResponse=} [properties] Properties to set
         * @returns {CMsgDOTALeagueNodeResponse} CMsgDOTALeagueNodeResponse instance
         */
        CMsgDOTALeagueNodeResponse.create = function create(properties) {
            return new CMsgDOTALeagueNodeResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueNodeResponse message. Does not implicitly {@link CMsgDOTALeagueNodeResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTALeagueNodeResponse
         * @static
         * @param {ICMsgDOTALeagueNodeResponse} message CMsgDOTALeagueNodeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueNodeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.node != null && Object.hasOwnProperty.call(message, "node"))
                $root.CMsgDOTALeagueNode.encode(message.node, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueNodeResponse message, length delimited. Does not implicitly {@link CMsgDOTALeagueNodeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTALeagueNodeResponse
         * @static
         * @param {ICMsgDOTALeagueNodeResponse} message CMsgDOTALeagueNodeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueNodeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTALeagueNodeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTALeagueNodeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTALeagueNodeResponse} CMsgDOTALeagueNodeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueNodeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueNodeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.node = $root.CMsgDOTALeagueNode.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTALeagueNodeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTALeagueNodeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTALeagueNodeResponse} CMsgDOTALeagueNodeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueNodeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTALeagueNodeResponse message.
         * @function verify
         * @memberof CMsgDOTALeagueNodeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTALeagueNodeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.node != null && message.hasOwnProperty("node")) {
                var error = $root.CMsgDOTALeagueNode.verify(message.node);
                if (error)
                    return "node." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgDOTALeagueNodeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTALeagueNodeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTALeagueNodeResponse} CMsgDOTALeagueNodeResponse
         */
        CMsgDOTALeagueNodeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTALeagueNodeResponse)
                return object;
            var message = new $root.CMsgDOTALeagueNodeResponse();
            if (object.node != null) {
                if (typeof object.node !== "object")
                    throw TypeError(".CMsgDOTALeagueNodeResponse.node: object expected");
                message.node = $root.CMsgDOTALeagueNode.fromObject(object.node);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTALeagueNodeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTALeagueNodeResponse
         * @static
         * @param {CMsgDOTALeagueNodeResponse} message CMsgDOTALeagueNodeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTALeagueNodeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.node = null;
            if (message.node != null && message.hasOwnProperty("node"))
                object.node = $root.CMsgDOTALeagueNode.toObject(message.node, options);
            return object;
        };
    
        /**
         * Converts this CMsgDOTALeagueNodeResponse to JSON.
         * @function toJSON
         * @memberof CMsgDOTALeagueNodeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTALeagueNodeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgDOTALeagueNodeResponse;
    })();
    
    $root.CMsgDOTALeagueAvailableLobbyNodesRequest = (function() {
    
        /**
         * Properties of a CMsgDOTALeagueAvailableLobbyNodesRequest.
         * @exports ICMsgDOTALeagueAvailableLobbyNodesRequest
         * @interface ICMsgDOTALeagueAvailableLobbyNodesRequest
         * @property {number|null} [league_id] CMsgDOTALeagueAvailableLobbyNodesRequest league_id
         */
    
        /**
         * Constructs a new CMsgDOTALeagueAvailableLobbyNodesRequest.
         * @exports CMsgDOTALeagueAvailableLobbyNodesRequest
         * @classdesc Represents a CMsgDOTALeagueAvailableLobbyNodesRequest.
         * @implements ICMsgDOTALeagueAvailableLobbyNodesRequest
         * @constructor
         * @param {ICMsgDOTALeagueAvailableLobbyNodesRequest=} [properties] Properties to set
         */
        function CMsgDOTALeagueAvailableLobbyNodesRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTALeagueAvailableLobbyNodesRequest league_id.
         * @member {number} league_id
         * @memberof CMsgDOTALeagueAvailableLobbyNodesRequest
         * @instance
         */
        CMsgDOTALeagueAvailableLobbyNodesRequest.prototype.league_id = 0;
    
        /**
         * Creates a new CMsgDOTALeagueAvailableLobbyNodesRequest instance using the specified properties.
         * @function create
         * @memberof CMsgDOTALeagueAvailableLobbyNodesRequest
         * @static
         * @param {ICMsgDOTALeagueAvailableLobbyNodesRequest=} [properties] Properties to set
         * @returns {CMsgDOTALeagueAvailableLobbyNodesRequest} CMsgDOTALeagueAvailableLobbyNodesRequest instance
         */
        CMsgDOTALeagueAvailableLobbyNodesRequest.create = function create(properties) {
            return new CMsgDOTALeagueAvailableLobbyNodesRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueAvailableLobbyNodesRequest message. Does not implicitly {@link CMsgDOTALeagueAvailableLobbyNodesRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTALeagueAvailableLobbyNodesRequest
         * @static
         * @param {ICMsgDOTALeagueAvailableLobbyNodesRequest} message CMsgDOTALeagueAvailableLobbyNodesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueAvailableLobbyNodesRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.league_id != null && Object.hasOwnProperty.call(message, "league_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.league_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueAvailableLobbyNodesRequest message, length delimited. Does not implicitly {@link CMsgDOTALeagueAvailableLobbyNodesRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTALeagueAvailableLobbyNodesRequest
         * @static
         * @param {ICMsgDOTALeagueAvailableLobbyNodesRequest} message CMsgDOTALeagueAvailableLobbyNodesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueAvailableLobbyNodesRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTALeagueAvailableLobbyNodesRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTALeagueAvailableLobbyNodesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTALeagueAvailableLobbyNodesRequest} CMsgDOTALeagueAvailableLobbyNodesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueAvailableLobbyNodesRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueAvailableLobbyNodesRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.league_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTALeagueAvailableLobbyNodesRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTALeagueAvailableLobbyNodesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTALeagueAvailableLobbyNodesRequest} CMsgDOTALeagueAvailableLobbyNodesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueAvailableLobbyNodesRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTALeagueAvailableLobbyNodesRequest message.
         * @function verify
         * @memberof CMsgDOTALeagueAvailableLobbyNodesRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTALeagueAvailableLobbyNodesRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.league_id != null && message.hasOwnProperty("league_id"))
                if (!$util.isInteger(message.league_id))
                    return "league_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgDOTALeagueAvailableLobbyNodesRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTALeagueAvailableLobbyNodesRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTALeagueAvailableLobbyNodesRequest} CMsgDOTALeagueAvailableLobbyNodesRequest
         */
        CMsgDOTALeagueAvailableLobbyNodesRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTALeagueAvailableLobbyNodesRequest)
                return object;
            var message = new $root.CMsgDOTALeagueAvailableLobbyNodesRequest();
            if (object.league_id != null)
                message.league_id = object.league_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTALeagueAvailableLobbyNodesRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTALeagueAvailableLobbyNodesRequest
         * @static
         * @param {CMsgDOTALeagueAvailableLobbyNodesRequest} message CMsgDOTALeagueAvailableLobbyNodesRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTALeagueAvailableLobbyNodesRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.league_id = 0;
            if (message.league_id != null && message.hasOwnProperty("league_id"))
                object.league_id = message.league_id;
            return object;
        };
    
        /**
         * Converts this CMsgDOTALeagueAvailableLobbyNodesRequest to JSON.
         * @function toJSON
         * @memberof CMsgDOTALeagueAvailableLobbyNodesRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTALeagueAvailableLobbyNodesRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgDOTALeagueAvailableLobbyNodesRequest;
    })();
    
    $root.CMsgDOTALeagueAvailableLobbyNodes = (function() {
    
        /**
         * Properties of a CMsgDOTALeagueAvailableLobbyNodes.
         * @exports ICMsgDOTALeagueAvailableLobbyNodes
         * @interface ICMsgDOTALeagueAvailableLobbyNodes
         * @property {Array.<CMsgDOTALeagueAvailableLobbyNodes.INodeInfo>|null} [node_infos] CMsgDOTALeagueAvailableLobbyNodes node_infos
         */
    
        /**
         * Constructs a new CMsgDOTALeagueAvailableLobbyNodes.
         * @exports CMsgDOTALeagueAvailableLobbyNodes
         * @classdesc Represents a CMsgDOTALeagueAvailableLobbyNodes.
         * @implements ICMsgDOTALeagueAvailableLobbyNodes
         * @constructor
         * @param {ICMsgDOTALeagueAvailableLobbyNodes=} [properties] Properties to set
         */
        function CMsgDOTALeagueAvailableLobbyNodes(properties) {
            this.node_infos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTALeagueAvailableLobbyNodes node_infos.
         * @member {Array.<CMsgDOTALeagueAvailableLobbyNodes.INodeInfo>} node_infos
         * @memberof CMsgDOTALeagueAvailableLobbyNodes
         * @instance
         */
        CMsgDOTALeagueAvailableLobbyNodes.prototype.node_infos = $util.emptyArray;
    
        /**
         * Creates a new CMsgDOTALeagueAvailableLobbyNodes instance using the specified properties.
         * @function create
         * @memberof CMsgDOTALeagueAvailableLobbyNodes
         * @static
         * @param {ICMsgDOTALeagueAvailableLobbyNodes=} [properties] Properties to set
         * @returns {CMsgDOTALeagueAvailableLobbyNodes} CMsgDOTALeagueAvailableLobbyNodes instance
         */
        CMsgDOTALeagueAvailableLobbyNodes.create = function create(properties) {
            return new CMsgDOTALeagueAvailableLobbyNodes(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueAvailableLobbyNodes message. Does not implicitly {@link CMsgDOTALeagueAvailableLobbyNodes.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTALeagueAvailableLobbyNodes
         * @static
         * @param {ICMsgDOTALeagueAvailableLobbyNodes} message CMsgDOTALeagueAvailableLobbyNodes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueAvailableLobbyNodes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.node_infos != null && message.node_infos.length)
                for (var i = 0; i < message.node_infos.length; ++i)
                    $root.CMsgDOTALeagueAvailableLobbyNodes.NodeInfo.encode(message.node_infos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueAvailableLobbyNodes message, length delimited. Does not implicitly {@link CMsgDOTALeagueAvailableLobbyNodes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTALeagueAvailableLobbyNodes
         * @static
         * @param {ICMsgDOTALeagueAvailableLobbyNodes} message CMsgDOTALeagueAvailableLobbyNodes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueAvailableLobbyNodes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTALeagueAvailableLobbyNodes message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTALeagueAvailableLobbyNodes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTALeagueAvailableLobbyNodes} CMsgDOTALeagueAvailableLobbyNodes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueAvailableLobbyNodes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueAvailableLobbyNodes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.node_infos && message.node_infos.length))
                        message.node_infos = [];
                    message.node_infos.push($root.CMsgDOTALeagueAvailableLobbyNodes.NodeInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTALeagueAvailableLobbyNodes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTALeagueAvailableLobbyNodes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTALeagueAvailableLobbyNodes} CMsgDOTALeagueAvailableLobbyNodes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueAvailableLobbyNodes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTALeagueAvailableLobbyNodes message.
         * @function verify
         * @memberof CMsgDOTALeagueAvailableLobbyNodes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTALeagueAvailableLobbyNodes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.node_infos != null && message.hasOwnProperty("node_infos")) {
                if (!Array.isArray(message.node_infos))
                    return "node_infos: array expected";
                for (var i = 0; i < message.node_infos.length; ++i) {
                    var error = $root.CMsgDOTALeagueAvailableLobbyNodes.NodeInfo.verify(message.node_infos[i]);
                    if (error)
                        return "node_infos." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgDOTALeagueAvailableLobbyNodes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTALeagueAvailableLobbyNodes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTALeagueAvailableLobbyNodes} CMsgDOTALeagueAvailableLobbyNodes
         */
        CMsgDOTALeagueAvailableLobbyNodes.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTALeagueAvailableLobbyNodes)
                return object;
            var message = new $root.CMsgDOTALeagueAvailableLobbyNodes();
            if (object.node_infos) {
                if (!Array.isArray(object.node_infos))
                    throw TypeError(".CMsgDOTALeagueAvailableLobbyNodes.node_infos: array expected");
                message.node_infos = [];
                for (var i = 0; i < object.node_infos.length; ++i) {
                    if (typeof object.node_infos[i] !== "object")
                        throw TypeError(".CMsgDOTALeagueAvailableLobbyNodes.node_infos: object expected");
                    message.node_infos[i] = $root.CMsgDOTALeagueAvailableLobbyNodes.NodeInfo.fromObject(object.node_infos[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTALeagueAvailableLobbyNodes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTALeagueAvailableLobbyNodes
         * @static
         * @param {CMsgDOTALeagueAvailableLobbyNodes} message CMsgDOTALeagueAvailableLobbyNodes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTALeagueAvailableLobbyNodes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.node_infos = [];
            if (message.node_infos && message.node_infos.length) {
                object.node_infos = [];
                for (var j = 0; j < message.node_infos.length; ++j)
                    object.node_infos[j] = $root.CMsgDOTALeagueAvailableLobbyNodes.NodeInfo.toObject(message.node_infos[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgDOTALeagueAvailableLobbyNodes to JSON.
         * @function toJSON
         * @memberof CMsgDOTALeagueAvailableLobbyNodes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTALeagueAvailableLobbyNodes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgDOTALeagueAvailableLobbyNodes.NodeInfo = (function() {
    
            /**
             * Properties of a NodeInfo.
             * @memberof CMsgDOTALeagueAvailableLobbyNodes
             * @interface INodeInfo
             * @property {number|null} [node_id] NodeInfo node_id
             * @property {string|null} [node_name] NodeInfo node_name
             * @property {string|null} [node_group_name] NodeInfo node_group_name
             * @property {number|null} [team_id_1] NodeInfo team_id_1
             * @property {number|null} [team_id_2] NodeInfo team_id_2
             */
    
            /**
             * Constructs a new NodeInfo.
             * @memberof CMsgDOTALeagueAvailableLobbyNodes
             * @classdesc Represents a NodeInfo.
             * @implements INodeInfo
             * @constructor
             * @param {CMsgDOTALeagueAvailableLobbyNodes.INodeInfo=} [properties] Properties to set
             */
            function NodeInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * NodeInfo node_id.
             * @member {number} node_id
             * @memberof CMsgDOTALeagueAvailableLobbyNodes.NodeInfo
             * @instance
             */
            NodeInfo.prototype.node_id = 0;
    
            /**
             * NodeInfo node_name.
             * @member {string} node_name
             * @memberof CMsgDOTALeagueAvailableLobbyNodes.NodeInfo
             * @instance
             */
            NodeInfo.prototype.node_name = "";
    
            /**
             * NodeInfo node_group_name.
             * @member {string} node_group_name
             * @memberof CMsgDOTALeagueAvailableLobbyNodes.NodeInfo
             * @instance
             */
            NodeInfo.prototype.node_group_name = "";
    
            /**
             * NodeInfo team_id_1.
             * @member {number} team_id_1
             * @memberof CMsgDOTALeagueAvailableLobbyNodes.NodeInfo
             * @instance
             */
            NodeInfo.prototype.team_id_1 = 0;
    
            /**
             * NodeInfo team_id_2.
             * @member {number} team_id_2
             * @memberof CMsgDOTALeagueAvailableLobbyNodes.NodeInfo
             * @instance
             */
            NodeInfo.prototype.team_id_2 = 0;
    
            /**
             * Creates a new NodeInfo instance using the specified properties.
             * @function create
             * @memberof CMsgDOTALeagueAvailableLobbyNodes.NodeInfo
             * @static
             * @param {CMsgDOTALeagueAvailableLobbyNodes.INodeInfo=} [properties] Properties to set
             * @returns {CMsgDOTALeagueAvailableLobbyNodes.NodeInfo} NodeInfo instance
             */
            NodeInfo.create = function create(properties) {
                return new NodeInfo(properties);
            };
    
            /**
             * Encodes the specified NodeInfo message. Does not implicitly {@link CMsgDOTALeagueAvailableLobbyNodes.NodeInfo.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTALeagueAvailableLobbyNodes.NodeInfo
             * @static
             * @param {CMsgDOTALeagueAvailableLobbyNodes.INodeInfo} message NodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.node_id != null && Object.hasOwnProperty.call(message, "node_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.node_id);
                if (message.node_name != null && Object.hasOwnProperty.call(message, "node_name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.node_name);
                if (message.node_group_name != null && Object.hasOwnProperty.call(message, "node_group_name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.node_group_name);
                if (message.team_id_1 != null && Object.hasOwnProperty.call(message, "team_id_1"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.team_id_1);
                if (message.team_id_2 != null && Object.hasOwnProperty.call(message, "team_id_2"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.team_id_2);
                return writer;
            };
    
            /**
             * Encodes the specified NodeInfo message, length delimited. Does not implicitly {@link CMsgDOTALeagueAvailableLobbyNodes.NodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTALeagueAvailableLobbyNodes.NodeInfo
             * @static
             * @param {CMsgDOTALeagueAvailableLobbyNodes.INodeInfo} message NodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a NodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTALeagueAvailableLobbyNodes.NodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTALeagueAvailableLobbyNodes.NodeInfo} NodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueAvailableLobbyNodes.NodeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.node_id = reader.uint32();
                        break;
                    case 2:
                        message.node_name = reader.string();
                        break;
                    case 3:
                        message.node_group_name = reader.string();
                        break;
                    case 4:
                        message.team_id_1 = reader.uint32();
                        break;
                    case 5:
                        message.team_id_2 = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a NodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTALeagueAvailableLobbyNodes.NodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTALeagueAvailableLobbyNodes.NodeInfo} NodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a NodeInfo message.
             * @function verify
             * @memberof CMsgDOTALeagueAvailableLobbyNodes.NodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.node_id != null && message.hasOwnProperty("node_id"))
                    if (!$util.isInteger(message.node_id))
                        return "node_id: integer expected";
                if (message.node_name != null && message.hasOwnProperty("node_name"))
                    if (!$util.isString(message.node_name))
                        return "node_name: string expected";
                if (message.node_group_name != null && message.hasOwnProperty("node_group_name"))
                    if (!$util.isString(message.node_group_name))
                        return "node_group_name: string expected";
                if (message.team_id_1 != null && message.hasOwnProperty("team_id_1"))
                    if (!$util.isInteger(message.team_id_1))
                        return "team_id_1: integer expected";
                if (message.team_id_2 != null && message.hasOwnProperty("team_id_2"))
                    if (!$util.isInteger(message.team_id_2))
                        return "team_id_2: integer expected";
                return null;
            };
    
            /**
             * Creates a NodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTALeagueAvailableLobbyNodes.NodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTALeagueAvailableLobbyNodes.NodeInfo} NodeInfo
             */
            NodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTALeagueAvailableLobbyNodes.NodeInfo)
                    return object;
                var message = new $root.CMsgDOTALeagueAvailableLobbyNodes.NodeInfo();
                if (object.node_id != null)
                    message.node_id = object.node_id >>> 0;
                if (object.node_name != null)
                    message.node_name = String(object.node_name);
                if (object.node_group_name != null)
                    message.node_group_name = String(object.node_group_name);
                if (object.team_id_1 != null)
                    message.team_id_1 = object.team_id_1 >>> 0;
                if (object.team_id_2 != null)
                    message.team_id_2 = object.team_id_2 >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a NodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTALeagueAvailableLobbyNodes.NodeInfo
             * @static
             * @param {CMsgDOTALeagueAvailableLobbyNodes.NodeInfo} message NodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.node_id = 0;
                    object.node_name = "";
                    object.node_group_name = "";
                    object.team_id_1 = 0;
                    object.team_id_2 = 0;
                }
                if (message.node_id != null && message.hasOwnProperty("node_id"))
                    object.node_id = message.node_id;
                if (message.node_name != null && message.hasOwnProperty("node_name"))
                    object.node_name = message.node_name;
                if (message.node_group_name != null && message.hasOwnProperty("node_group_name"))
                    object.node_group_name = message.node_group_name;
                if (message.team_id_1 != null && message.hasOwnProperty("team_id_1"))
                    object.team_id_1 = message.team_id_1;
                if (message.team_id_2 != null && message.hasOwnProperty("team_id_2"))
                    object.team_id_2 = message.team_id_2;
                return object;
            };
    
            /**
             * Converts this NodeInfo to JSON.
             * @function toJSON
             * @memberof CMsgDOTALeagueAvailableLobbyNodes.NodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return NodeInfo;
        })();
    
        return CMsgDOTALeagueAvailableLobbyNodes;
    })();
    
    $root.CMsgDOTALeagueNodeResults = (function() {
    
        /**
         * Properties of a CMsgDOTALeagueNodeResults.
         * @exports ICMsgDOTALeagueNodeResults
         * @interface ICMsgDOTALeagueNodeResults
         * @property {Array.<CMsgDOTALeagueNodeResults.IResult>|null} [node_results] CMsgDOTALeagueNodeResults node_results
         */
    
        /**
         * Constructs a new CMsgDOTALeagueNodeResults.
         * @exports CMsgDOTALeagueNodeResults
         * @classdesc Represents a CMsgDOTALeagueNodeResults.
         * @implements ICMsgDOTALeagueNodeResults
         * @constructor
         * @param {ICMsgDOTALeagueNodeResults=} [properties] Properties to set
         */
        function CMsgDOTALeagueNodeResults(properties) {
            this.node_results = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTALeagueNodeResults node_results.
         * @member {Array.<CMsgDOTALeagueNodeResults.IResult>} node_results
         * @memberof CMsgDOTALeagueNodeResults
         * @instance
         */
        CMsgDOTALeagueNodeResults.prototype.node_results = $util.emptyArray;
    
        /**
         * Creates a new CMsgDOTALeagueNodeResults instance using the specified properties.
         * @function create
         * @memberof CMsgDOTALeagueNodeResults
         * @static
         * @param {ICMsgDOTALeagueNodeResults=} [properties] Properties to set
         * @returns {CMsgDOTALeagueNodeResults} CMsgDOTALeagueNodeResults instance
         */
        CMsgDOTALeagueNodeResults.create = function create(properties) {
            return new CMsgDOTALeagueNodeResults(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueNodeResults message. Does not implicitly {@link CMsgDOTALeagueNodeResults.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTALeagueNodeResults
         * @static
         * @param {ICMsgDOTALeagueNodeResults} message CMsgDOTALeagueNodeResults message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueNodeResults.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.node_results != null && message.node_results.length)
                for (var i = 0; i < message.node_results.length; ++i)
                    $root.CMsgDOTALeagueNodeResults.Result.encode(message.node_results[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTALeagueNodeResults message, length delimited. Does not implicitly {@link CMsgDOTALeagueNodeResults.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTALeagueNodeResults
         * @static
         * @param {ICMsgDOTALeagueNodeResults} message CMsgDOTALeagueNodeResults message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTALeagueNodeResults.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTALeagueNodeResults message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTALeagueNodeResults
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTALeagueNodeResults} CMsgDOTALeagueNodeResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueNodeResults.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueNodeResults();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.node_results && message.node_results.length))
                        message.node_results = [];
                    message.node_results.push($root.CMsgDOTALeagueNodeResults.Result.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTALeagueNodeResults message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTALeagueNodeResults
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTALeagueNodeResults} CMsgDOTALeagueNodeResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTALeagueNodeResults.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTALeagueNodeResults message.
         * @function verify
         * @memberof CMsgDOTALeagueNodeResults
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTALeagueNodeResults.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.node_results != null && message.hasOwnProperty("node_results")) {
                if (!Array.isArray(message.node_results))
                    return "node_results: array expected";
                for (var i = 0; i < message.node_results.length; ++i) {
                    var error = $root.CMsgDOTALeagueNodeResults.Result.verify(message.node_results[i]);
                    if (error)
                        return "node_results." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgDOTALeagueNodeResults message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTALeagueNodeResults
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTALeagueNodeResults} CMsgDOTALeagueNodeResults
         */
        CMsgDOTALeagueNodeResults.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTALeagueNodeResults)
                return object;
            var message = new $root.CMsgDOTALeagueNodeResults();
            if (object.node_results) {
                if (!Array.isArray(object.node_results))
                    throw TypeError(".CMsgDOTALeagueNodeResults.node_results: array expected");
                message.node_results = [];
                for (var i = 0; i < object.node_results.length; ++i) {
                    if (typeof object.node_results[i] !== "object")
                        throw TypeError(".CMsgDOTALeagueNodeResults.node_results: object expected");
                    message.node_results[i] = $root.CMsgDOTALeagueNodeResults.Result.fromObject(object.node_results[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTALeagueNodeResults message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTALeagueNodeResults
         * @static
         * @param {CMsgDOTALeagueNodeResults} message CMsgDOTALeagueNodeResults
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTALeagueNodeResults.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.node_results = [];
            if (message.node_results && message.node_results.length) {
                object.node_results = [];
                for (var j = 0; j < message.node_results.length; ++j)
                    object.node_results[j] = $root.CMsgDOTALeagueNodeResults.Result.toObject(message.node_results[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgDOTALeagueNodeResults to JSON.
         * @function toJSON
         * @memberof CMsgDOTALeagueNodeResults
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTALeagueNodeResults.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgDOTALeagueNodeResults.Result = (function() {
    
            /**
             * Properties of a Result.
             * @memberof CMsgDOTALeagueNodeResults
             * @interface IResult
             * @property {number|null} [node_id] Result node_id
             * @property {number|null} [winning_node_id] Result winning_node_id
             * @property {number|null} [losing_node_id] Result losing_node_id
             * @property {number|null} [incoming_node_id_1] Result incoming_node_id_1
             * @property {number|null} [incoming_node_id_2] Result incoming_node_id_2
             * @property {number|null} [team_id_1] Result team_id_1
             * @property {number|null} [team_id_2] Result team_id_2
             * @property {string|null} [team_1_name] Result team_1_name
             * @property {string|null} [team_2_name] Result team_2_name
             * @property {number|null} [team_1_wins] Result team_1_wins
             * @property {number|null} [team_2_wins] Result team_2_wins
             * @property {number|null} [winning_team_id] Result winning_team_id
             * @property {number|null} [losing_team_id] Result losing_team_id
             * @property {boolean|null} [has_started] Result has_started
             * @property {boolean|null} [is_completed] Result is_completed
             * @property {number|null} [scheduled_time] Result scheduled_time
             * @property {Array.<number|Long>|null} [match_ids] Result match_ids
             */
    
            /**
             * Constructs a new Result.
             * @memberof CMsgDOTALeagueNodeResults
             * @classdesc Represents a Result.
             * @implements IResult
             * @constructor
             * @param {CMsgDOTALeagueNodeResults.IResult=} [properties] Properties to set
             */
            function Result(properties) {
                this.match_ids = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Result node_id.
             * @member {number} node_id
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             */
            Result.prototype.node_id = 0;
    
            /**
             * Result winning_node_id.
             * @member {number} winning_node_id
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             */
            Result.prototype.winning_node_id = 0;
    
            /**
             * Result losing_node_id.
             * @member {number} losing_node_id
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             */
            Result.prototype.losing_node_id = 0;
    
            /**
             * Result incoming_node_id_1.
             * @member {number} incoming_node_id_1
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             */
            Result.prototype.incoming_node_id_1 = 0;
    
            /**
             * Result incoming_node_id_2.
             * @member {number} incoming_node_id_2
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             */
            Result.prototype.incoming_node_id_2 = 0;
    
            /**
             * Result team_id_1.
             * @member {number} team_id_1
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             */
            Result.prototype.team_id_1 = 0;
    
            /**
             * Result team_id_2.
             * @member {number} team_id_2
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             */
            Result.prototype.team_id_2 = 0;
    
            /**
             * Result team_1_name.
             * @member {string} team_1_name
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             */
            Result.prototype.team_1_name = "";
    
            /**
             * Result team_2_name.
             * @member {string} team_2_name
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             */
            Result.prototype.team_2_name = "";
    
            /**
             * Result team_1_wins.
             * @member {number} team_1_wins
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             */
            Result.prototype.team_1_wins = 0;
    
            /**
             * Result team_2_wins.
             * @member {number} team_2_wins
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             */
            Result.prototype.team_2_wins = 0;
    
            /**
             * Result winning_team_id.
             * @member {number} winning_team_id
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             */
            Result.prototype.winning_team_id = 0;
    
            /**
             * Result losing_team_id.
             * @member {number} losing_team_id
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             */
            Result.prototype.losing_team_id = 0;
    
            /**
             * Result has_started.
             * @member {boolean} has_started
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             */
            Result.prototype.has_started = false;
    
            /**
             * Result is_completed.
             * @member {boolean} is_completed
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             */
            Result.prototype.is_completed = false;
    
            /**
             * Result scheduled_time.
             * @member {number} scheduled_time
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             */
            Result.prototype.scheduled_time = 0;
    
            /**
             * Result match_ids.
             * @member {Array.<number|Long>} match_ids
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             */
            Result.prototype.match_ids = $util.emptyArray;
    
            /**
             * Creates a new Result instance using the specified properties.
             * @function create
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @static
             * @param {CMsgDOTALeagueNodeResults.IResult=} [properties] Properties to set
             * @returns {CMsgDOTALeagueNodeResults.Result} Result instance
             */
            Result.create = function create(properties) {
                return new Result(properties);
            };
    
            /**
             * Encodes the specified Result message. Does not implicitly {@link CMsgDOTALeagueNodeResults.Result.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @static
             * @param {CMsgDOTALeagueNodeResults.IResult} message Result message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Result.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.node_id != null && Object.hasOwnProperty.call(message, "node_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.node_id);
                if (message.winning_node_id != null && Object.hasOwnProperty.call(message, "winning_node_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.winning_node_id);
                if (message.losing_node_id != null && Object.hasOwnProperty.call(message, "losing_node_id"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.losing_node_id);
                if (message.incoming_node_id_1 != null && Object.hasOwnProperty.call(message, "incoming_node_id_1"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.incoming_node_id_1);
                if (message.incoming_node_id_2 != null && Object.hasOwnProperty.call(message, "incoming_node_id_2"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.incoming_node_id_2);
                if (message.team_id_1 != null && Object.hasOwnProperty.call(message, "team_id_1"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.team_id_1);
                if (message.team_id_2 != null && Object.hasOwnProperty.call(message, "team_id_2"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.team_id_2);
                if (message.team_1_name != null && Object.hasOwnProperty.call(message, "team_1_name"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.team_1_name);
                if (message.team_2_name != null && Object.hasOwnProperty.call(message, "team_2_name"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.team_2_name);
                if (message.team_1_wins != null && Object.hasOwnProperty.call(message, "team_1_wins"))
                    writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.team_1_wins);
                if (message.team_2_wins != null && Object.hasOwnProperty.call(message, "team_2_wins"))
                    writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.team_2_wins);
                if (message.winning_team_id != null && Object.hasOwnProperty.call(message, "winning_team_id"))
                    writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.winning_team_id);
                if (message.losing_team_id != null && Object.hasOwnProperty.call(message, "losing_team_id"))
                    writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.losing_team_id);
                if (message.has_started != null && Object.hasOwnProperty.call(message, "has_started"))
                    writer.uint32(/* id 14, wireType 0 =*/112).bool(message.has_started);
                if (message.is_completed != null && Object.hasOwnProperty.call(message, "is_completed"))
                    writer.uint32(/* id 15, wireType 0 =*/120).bool(message.is_completed);
                if (message.scheduled_time != null && Object.hasOwnProperty.call(message, "scheduled_time"))
                    writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.scheduled_time);
                if (message.match_ids != null && message.match_ids.length)
                    for (var i = 0; i < message.match_ids.length; ++i)
                        writer.uint32(/* id 17, wireType 0 =*/136).uint64(message.match_ids[i]);
                return writer;
            };
    
            /**
             * Encodes the specified Result message, length delimited. Does not implicitly {@link CMsgDOTALeagueNodeResults.Result.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @static
             * @param {CMsgDOTALeagueNodeResults.IResult} message Result message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Result.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Result message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTALeagueNodeResults.Result} Result
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Result.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTALeagueNodeResults.Result();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.node_id = reader.uint32();
                        break;
                    case 2:
                        message.winning_node_id = reader.uint32();
                        break;
                    case 3:
                        message.losing_node_id = reader.uint32();
                        break;
                    case 4:
                        message.incoming_node_id_1 = reader.uint32();
                        break;
                    case 5:
                        message.incoming_node_id_2 = reader.uint32();
                        break;
                    case 6:
                        message.team_id_1 = reader.uint32();
                        break;
                    case 7:
                        message.team_id_2 = reader.uint32();
                        break;
                    case 8:
                        message.team_1_name = reader.string();
                        break;
                    case 9:
                        message.team_2_name = reader.string();
                        break;
                    case 10:
                        message.team_1_wins = reader.uint32();
                        break;
                    case 11:
                        message.team_2_wins = reader.uint32();
                        break;
                    case 12:
                        message.winning_team_id = reader.uint32();
                        break;
                    case 13:
                        message.losing_team_id = reader.uint32();
                        break;
                    case 14:
                        message.has_started = reader.bool();
                        break;
                    case 15:
                        message.is_completed = reader.bool();
                        break;
                    case 16:
                        message.scheduled_time = reader.uint32();
                        break;
                    case 17:
                        if (!(message.match_ids && message.match_ids.length))
                            message.match_ids = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.match_ids.push(reader.uint64());
                        } else
                            message.match_ids.push(reader.uint64());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Result message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTALeagueNodeResults.Result} Result
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Result.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Result message.
             * @function verify
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Result.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.node_id != null && message.hasOwnProperty("node_id"))
                    if (!$util.isInteger(message.node_id))
                        return "node_id: integer expected";
                if (message.winning_node_id != null && message.hasOwnProperty("winning_node_id"))
                    if (!$util.isInteger(message.winning_node_id))
                        return "winning_node_id: integer expected";
                if (message.losing_node_id != null && message.hasOwnProperty("losing_node_id"))
                    if (!$util.isInteger(message.losing_node_id))
                        return "losing_node_id: integer expected";
                if (message.incoming_node_id_1 != null && message.hasOwnProperty("incoming_node_id_1"))
                    if (!$util.isInteger(message.incoming_node_id_1))
                        return "incoming_node_id_1: integer expected";
                if (message.incoming_node_id_2 != null && message.hasOwnProperty("incoming_node_id_2"))
                    if (!$util.isInteger(message.incoming_node_id_2))
                        return "incoming_node_id_2: integer expected";
                if (message.team_id_1 != null && message.hasOwnProperty("team_id_1"))
                    if (!$util.isInteger(message.team_id_1))
                        return "team_id_1: integer expected";
                if (message.team_id_2 != null && message.hasOwnProperty("team_id_2"))
                    if (!$util.isInteger(message.team_id_2))
                        return "team_id_2: integer expected";
                if (message.team_1_name != null && message.hasOwnProperty("team_1_name"))
                    if (!$util.isString(message.team_1_name))
                        return "team_1_name: string expected";
                if (message.team_2_name != null && message.hasOwnProperty("team_2_name"))
                    if (!$util.isString(message.team_2_name))
                        return "team_2_name: string expected";
                if (message.team_1_wins != null && message.hasOwnProperty("team_1_wins"))
                    if (!$util.isInteger(message.team_1_wins))
                        return "team_1_wins: integer expected";
                if (message.team_2_wins != null && message.hasOwnProperty("team_2_wins"))
                    if (!$util.isInteger(message.team_2_wins))
                        return "team_2_wins: integer expected";
                if (message.winning_team_id != null && message.hasOwnProperty("winning_team_id"))
                    if (!$util.isInteger(message.winning_team_id))
                        return "winning_team_id: integer expected";
                if (message.losing_team_id != null && message.hasOwnProperty("losing_team_id"))
                    if (!$util.isInteger(message.losing_team_id))
                        return "losing_team_id: integer expected";
                if (message.has_started != null && message.hasOwnProperty("has_started"))
                    if (typeof message.has_started !== "boolean")
                        return "has_started: boolean expected";
                if (message.is_completed != null && message.hasOwnProperty("is_completed"))
                    if (typeof message.is_completed !== "boolean")
                        return "is_completed: boolean expected";
                if (message.scheduled_time != null && message.hasOwnProperty("scheduled_time"))
                    if (!$util.isInteger(message.scheduled_time))
                        return "scheduled_time: integer expected";
                if (message.match_ids != null && message.hasOwnProperty("match_ids")) {
                    if (!Array.isArray(message.match_ids))
                        return "match_ids: array expected";
                    for (var i = 0; i < message.match_ids.length; ++i)
                        if (!$util.isInteger(message.match_ids[i]) && !(message.match_ids[i] && $util.isInteger(message.match_ids[i].low) && $util.isInteger(message.match_ids[i].high)))
                            return "match_ids: integer|Long[] expected";
                }
                return null;
            };
    
            /**
             * Creates a Result message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTALeagueNodeResults.Result} Result
             */
            Result.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTALeagueNodeResults.Result)
                    return object;
                var message = new $root.CMsgDOTALeagueNodeResults.Result();
                if (object.node_id != null)
                    message.node_id = object.node_id >>> 0;
                if (object.winning_node_id != null)
                    message.winning_node_id = object.winning_node_id >>> 0;
                if (object.losing_node_id != null)
                    message.losing_node_id = object.losing_node_id >>> 0;
                if (object.incoming_node_id_1 != null)
                    message.incoming_node_id_1 = object.incoming_node_id_1 >>> 0;
                if (object.incoming_node_id_2 != null)
                    message.incoming_node_id_2 = object.incoming_node_id_2 >>> 0;
                if (object.team_id_1 != null)
                    message.team_id_1 = object.team_id_1 >>> 0;
                if (object.team_id_2 != null)
                    message.team_id_2 = object.team_id_2 >>> 0;
                if (object.team_1_name != null)
                    message.team_1_name = String(object.team_1_name);
                if (object.team_2_name != null)
                    message.team_2_name = String(object.team_2_name);
                if (object.team_1_wins != null)
                    message.team_1_wins = object.team_1_wins >>> 0;
                if (object.team_2_wins != null)
                    message.team_2_wins = object.team_2_wins >>> 0;
                if (object.winning_team_id != null)
                    message.winning_team_id = object.winning_team_id >>> 0;
                if (object.losing_team_id != null)
                    message.losing_team_id = object.losing_team_id >>> 0;
                if (object.has_started != null)
                    message.has_started = Boolean(object.has_started);
                if (object.is_completed != null)
                    message.is_completed = Boolean(object.is_completed);
                if (object.scheduled_time != null)
                    message.scheduled_time = object.scheduled_time >>> 0;
                if (object.match_ids) {
                    if (!Array.isArray(object.match_ids))
                        throw TypeError(".CMsgDOTALeagueNodeResults.Result.match_ids: array expected");
                    message.match_ids = [];
                    for (var i = 0; i < object.match_ids.length; ++i)
                        if ($util.Long)
                            (message.match_ids[i] = $util.Long.fromValue(object.match_ids[i])).unsigned = true;
                        else if (typeof object.match_ids[i] === "string")
                            message.match_ids[i] = parseInt(object.match_ids[i], 10);
                        else if (typeof object.match_ids[i] === "number")
                            message.match_ids[i] = object.match_ids[i];
                        else if (typeof object.match_ids[i] === "object")
                            message.match_ids[i] = new $util.LongBits(object.match_ids[i].low >>> 0, object.match_ids[i].high >>> 0).toNumber(true);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Result message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @static
             * @param {CMsgDOTALeagueNodeResults.Result} message Result
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Result.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.match_ids = [];
                if (options.defaults) {
                    object.node_id = 0;
                    object.winning_node_id = 0;
                    object.losing_node_id = 0;
                    object.incoming_node_id_1 = 0;
                    object.incoming_node_id_2 = 0;
                    object.team_id_1 = 0;
                    object.team_id_2 = 0;
                    object.team_1_name = "";
                    object.team_2_name = "";
                    object.team_1_wins = 0;
                    object.team_2_wins = 0;
                    object.winning_team_id = 0;
                    object.losing_team_id = 0;
                    object.has_started = false;
                    object.is_completed = false;
                    object.scheduled_time = 0;
                }
                if (message.node_id != null && message.hasOwnProperty("node_id"))
                    object.node_id = message.node_id;
                if (message.winning_node_id != null && message.hasOwnProperty("winning_node_id"))
                    object.winning_node_id = message.winning_node_id;
                if (message.losing_node_id != null && message.hasOwnProperty("losing_node_id"))
                    object.losing_node_id = message.losing_node_id;
                if (message.incoming_node_id_1 != null && message.hasOwnProperty("incoming_node_id_1"))
                    object.incoming_node_id_1 = message.incoming_node_id_1;
                if (message.incoming_node_id_2 != null && message.hasOwnProperty("incoming_node_id_2"))
                    object.incoming_node_id_2 = message.incoming_node_id_2;
                if (message.team_id_1 != null && message.hasOwnProperty("team_id_1"))
                    object.team_id_1 = message.team_id_1;
                if (message.team_id_2 != null && message.hasOwnProperty("team_id_2"))
                    object.team_id_2 = message.team_id_2;
                if (message.team_1_name != null && message.hasOwnProperty("team_1_name"))
                    object.team_1_name = message.team_1_name;
                if (message.team_2_name != null && message.hasOwnProperty("team_2_name"))
                    object.team_2_name = message.team_2_name;
                if (message.team_1_wins != null && message.hasOwnProperty("team_1_wins"))
                    object.team_1_wins = message.team_1_wins;
                if (message.team_2_wins != null && message.hasOwnProperty("team_2_wins"))
                    object.team_2_wins = message.team_2_wins;
                if (message.winning_team_id != null && message.hasOwnProperty("winning_team_id"))
                    object.winning_team_id = message.winning_team_id;
                if (message.losing_team_id != null && message.hasOwnProperty("losing_team_id"))
                    object.losing_team_id = message.losing_team_id;
                if (message.has_started != null && message.hasOwnProperty("has_started"))
                    object.has_started = message.has_started;
                if (message.is_completed != null && message.hasOwnProperty("is_completed"))
                    object.is_completed = message.is_completed;
                if (message.scheduled_time != null && message.hasOwnProperty("scheduled_time"))
                    object.scheduled_time = message.scheduled_time;
                if (message.match_ids && message.match_ids.length) {
                    object.match_ids = [];
                    for (var j = 0; j < message.match_ids.length; ++j)
                        if (typeof message.match_ids[j] === "number")
                            object.match_ids[j] = options.longs === String ? String(message.match_ids[j]) : message.match_ids[j];
                        else
                            object.match_ids[j] = options.longs === String ? $util.Long.prototype.toString.call(message.match_ids[j]) : options.longs === Number ? new $util.LongBits(message.match_ids[j].low >>> 0, message.match_ids[j].high >>> 0).toNumber(true) : message.match_ids[j];
                }
                return object;
            };
    
            /**
             * Converts this Result to JSON.
             * @function toJSON
             * @memberof CMsgDOTALeagueNodeResults.Result
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Result.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Result;
        })();
    
        return CMsgDOTALeagueNodeResults;
    })();
    
    $root.CMsgDOTADPCLeagueResults = (function() {
    
        /**
         * Properties of a CMsgDOTADPCLeagueResults.
         * @exports ICMsgDOTADPCLeagueResults
         * @interface ICMsgDOTADPCLeagueResults
         * @property {Array.<CMsgDOTADPCLeagueResults.IResult>|null} [results] CMsgDOTADPCLeagueResults results
         * @property {Array.<number>|null} [points] CMsgDOTADPCLeagueResults points
         * @property {Array.<number>|null} [dollars] CMsgDOTADPCLeagueResults dollars
         */
    
        /**
         * Constructs a new CMsgDOTADPCLeagueResults.
         * @exports CMsgDOTADPCLeagueResults
         * @classdesc Represents a CMsgDOTADPCLeagueResults.
         * @implements ICMsgDOTADPCLeagueResults
         * @constructor
         * @param {ICMsgDOTADPCLeagueResults=} [properties] Properties to set
         */
        function CMsgDOTADPCLeagueResults(properties) {
            this.results = [];
            this.points = [];
            this.dollars = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTADPCLeagueResults results.
         * @member {Array.<CMsgDOTADPCLeagueResults.IResult>} results
         * @memberof CMsgDOTADPCLeagueResults
         * @instance
         */
        CMsgDOTADPCLeagueResults.prototype.results = $util.emptyArray;
    
        /**
         * CMsgDOTADPCLeagueResults points.
         * @member {Array.<number>} points
         * @memberof CMsgDOTADPCLeagueResults
         * @instance
         */
        CMsgDOTADPCLeagueResults.prototype.points = $util.emptyArray;
    
        /**
         * CMsgDOTADPCLeagueResults dollars.
         * @member {Array.<number>} dollars
         * @memberof CMsgDOTADPCLeagueResults
         * @instance
         */
        CMsgDOTADPCLeagueResults.prototype.dollars = $util.emptyArray;
    
        /**
         * Creates a new CMsgDOTADPCLeagueResults instance using the specified properties.
         * @function create
         * @memberof CMsgDOTADPCLeagueResults
         * @static
         * @param {ICMsgDOTADPCLeagueResults=} [properties] Properties to set
         * @returns {CMsgDOTADPCLeagueResults} CMsgDOTADPCLeagueResults instance
         */
        CMsgDOTADPCLeagueResults.create = function create(properties) {
            return new CMsgDOTADPCLeagueResults(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTADPCLeagueResults message. Does not implicitly {@link CMsgDOTADPCLeagueResults.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTADPCLeagueResults
         * @static
         * @param {ICMsgDOTADPCLeagueResults} message CMsgDOTADPCLeagueResults message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTADPCLeagueResults.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.results != null && message.results.length)
                for (var i = 0; i < message.results.length; ++i)
                    $root.CMsgDOTADPCLeagueResults.Result.encode(message.results[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.points != null && message.points.length)
                for (var i = 0; i < message.points.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.points[i]);
            if (message.dollars != null && message.dollars.length)
                for (var i = 0; i < message.dollars.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.dollars[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTADPCLeagueResults message, length delimited. Does not implicitly {@link CMsgDOTADPCLeagueResults.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTADPCLeagueResults
         * @static
         * @param {ICMsgDOTADPCLeagueResults} message CMsgDOTADPCLeagueResults message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTADPCLeagueResults.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTADPCLeagueResults message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTADPCLeagueResults
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTADPCLeagueResults} CMsgDOTADPCLeagueResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTADPCLeagueResults.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTADPCLeagueResults();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.results && message.results.length))
                        message.results = [];
                    message.results.push($root.CMsgDOTADPCLeagueResults.Result.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.points && message.points.length))
                        message.points = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.points.push(reader.uint32());
                    } else
                        message.points.push(reader.uint32());
                    break;
                case 3:
                    if (!(message.dollars && message.dollars.length))
                        message.dollars = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.dollars.push(reader.uint32());
                    } else
                        message.dollars.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTADPCLeagueResults message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTADPCLeagueResults
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTADPCLeagueResults} CMsgDOTADPCLeagueResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTADPCLeagueResults.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTADPCLeagueResults message.
         * @function verify
         * @memberof CMsgDOTADPCLeagueResults
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTADPCLeagueResults.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (var i = 0; i < message.results.length; ++i) {
                    var error = $root.CMsgDOTADPCLeagueResults.Result.verify(message.results[i]);
                    if (error)
                        return "results." + error;
                }
            }
            if (message.points != null && message.hasOwnProperty("points")) {
                if (!Array.isArray(message.points))
                    return "points: array expected";
                for (var i = 0; i < message.points.length; ++i)
                    if (!$util.isInteger(message.points[i]))
                        return "points: integer[] expected";
            }
            if (message.dollars != null && message.hasOwnProperty("dollars")) {
                if (!Array.isArray(message.dollars))
                    return "dollars: array expected";
                for (var i = 0; i < message.dollars.length; ++i)
                    if (!$util.isInteger(message.dollars[i]))
                        return "dollars: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgDOTADPCLeagueResults message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTADPCLeagueResults
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTADPCLeagueResults} CMsgDOTADPCLeagueResults
         */
        CMsgDOTADPCLeagueResults.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTADPCLeagueResults)
                return object;
            var message = new $root.CMsgDOTADPCLeagueResults();
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".CMsgDOTADPCLeagueResults.results: array expected");
                message.results = [];
                for (var i = 0; i < object.results.length; ++i) {
                    if (typeof object.results[i] !== "object")
                        throw TypeError(".CMsgDOTADPCLeagueResults.results: object expected");
                    message.results[i] = $root.CMsgDOTADPCLeagueResults.Result.fromObject(object.results[i]);
                }
            }
            if (object.points) {
                if (!Array.isArray(object.points))
                    throw TypeError(".CMsgDOTADPCLeagueResults.points: array expected");
                message.points = [];
                for (var i = 0; i < object.points.length; ++i)
                    message.points[i] = object.points[i] >>> 0;
            }
            if (object.dollars) {
                if (!Array.isArray(object.dollars))
                    throw TypeError(".CMsgDOTADPCLeagueResults.dollars: array expected");
                message.dollars = [];
                for (var i = 0; i < object.dollars.length; ++i)
                    message.dollars[i] = object.dollars[i] >>> 0;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTADPCLeagueResults message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTADPCLeagueResults
         * @static
         * @param {CMsgDOTADPCLeagueResults} message CMsgDOTADPCLeagueResults
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTADPCLeagueResults.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.results = [];
                object.points = [];
                object.dollars = [];
            }
            if (message.results && message.results.length) {
                object.results = [];
                for (var j = 0; j < message.results.length; ++j)
                    object.results[j] = $root.CMsgDOTADPCLeagueResults.Result.toObject(message.results[j], options);
            }
            if (message.points && message.points.length) {
                object.points = [];
                for (var j = 0; j < message.points.length; ++j)
                    object.points[j] = message.points[j];
            }
            if (message.dollars && message.dollars.length) {
                object.dollars = [];
                for (var j = 0; j < message.dollars.length; ++j)
                    object.dollars[j] = message.dollars[j];
            }
            return object;
        };
    
        /**
         * Converts this CMsgDOTADPCLeagueResults to JSON.
         * @function toJSON
         * @memberof CMsgDOTADPCLeagueResults
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTADPCLeagueResults.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgDOTADPCLeagueResults.Result = (function() {
    
            /**
             * Properties of a Result.
             * @memberof CMsgDOTADPCLeagueResults
             * @interface IResult
             * @property {number|null} [standing] Result standing
             * @property {number|null} [team_id] Result team_id
             * @property {string|null} [team_name] Result team_name
             * @property {number|Long|null} [team_logo] Result team_logo
             * @property {string|null} [team_logo_url] Result team_logo_url
             * @property {number|null} [points] Result points
             * @property {number|null} [earnings] Result earnings
             * @property {number|null} [timestamp] Result timestamp
             * @property {ELeaguePhase|null} [phase] Result phase
             */
    
            /**
             * Constructs a new Result.
             * @memberof CMsgDOTADPCLeagueResults
             * @classdesc Represents a Result.
             * @implements IResult
             * @constructor
             * @param {CMsgDOTADPCLeagueResults.IResult=} [properties] Properties to set
             */
            function Result(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Result standing.
             * @member {number} standing
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @instance
             */
            Result.prototype.standing = 0;
    
            /**
             * Result team_id.
             * @member {number} team_id
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @instance
             */
            Result.prototype.team_id = 0;
    
            /**
             * Result team_name.
             * @member {string} team_name
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @instance
             */
            Result.prototype.team_name = "";
    
            /**
             * Result team_logo.
             * @member {number|Long} team_logo
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @instance
             */
            Result.prototype.team_logo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Result team_logo_url.
             * @member {string} team_logo_url
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @instance
             */
            Result.prototype.team_logo_url = "";
    
            /**
             * Result points.
             * @member {number} points
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @instance
             */
            Result.prototype.points = 0;
    
            /**
             * Result earnings.
             * @member {number} earnings
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @instance
             */
            Result.prototype.earnings = 0;
    
            /**
             * Result timestamp.
             * @member {number} timestamp
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @instance
             */
            Result.prototype.timestamp = 0;
    
            /**
             * Result phase.
             * @member {ELeaguePhase} phase
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @instance
             */
            Result.prototype.phase = 0;
    
            /**
             * Creates a new Result instance using the specified properties.
             * @function create
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @static
             * @param {CMsgDOTADPCLeagueResults.IResult=} [properties] Properties to set
             * @returns {CMsgDOTADPCLeagueResults.Result} Result instance
             */
            Result.create = function create(properties) {
                return new Result(properties);
            };
    
            /**
             * Encodes the specified Result message. Does not implicitly {@link CMsgDOTADPCLeagueResults.Result.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @static
             * @param {CMsgDOTADPCLeagueResults.IResult} message Result message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Result.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.standing != null && Object.hasOwnProperty.call(message, "standing"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.standing);
                if (message.team_id != null && Object.hasOwnProperty.call(message, "team_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.team_id);
                if (message.team_name != null && Object.hasOwnProperty.call(message, "team_name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.team_name);
                if (message.team_logo != null && Object.hasOwnProperty.call(message, "team_logo"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.team_logo);
                if (message.team_logo_url != null && Object.hasOwnProperty.call(message, "team_logo_url"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.team_logo_url);
                if (message.points != null && Object.hasOwnProperty.call(message, "points"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.points);
                if (message.earnings != null && Object.hasOwnProperty.call(message, "earnings"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.earnings);
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.timestamp);
                if (message.phase != null && Object.hasOwnProperty.call(message, "phase"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.phase);
                return writer;
            };
    
            /**
             * Encodes the specified Result message, length delimited. Does not implicitly {@link CMsgDOTADPCLeagueResults.Result.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @static
             * @param {CMsgDOTADPCLeagueResults.IResult} message Result message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Result.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Result message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTADPCLeagueResults.Result} Result
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Result.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTADPCLeagueResults.Result();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.standing = reader.uint32();
                        break;
                    case 2:
                        message.team_id = reader.uint32();
                        break;
                    case 3:
                        message.team_name = reader.string();
                        break;
                    case 4:
                        message.team_logo = reader.uint64();
                        break;
                    case 5:
                        message.team_logo_url = reader.string();
                        break;
                    case 6:
                        message.points = reader.uint32();
                        break;
                    case 7:
                        message.earnings = reader.uint32();
                        break;
                    case 8:
                        message.timestamp = reader.uint32();
                        break;
                    case 9:
                        message.phase = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Result message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTADPCLeagueResults.Result} Result
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Result.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Result message.
             * @function verify
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Result.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.standing != null && message.hasOwnProperty("standing"))
                    if (!$util.isInteger(message.standing))
                        return "standing: integer expected";
                if (message.team_id != null && message.hasOwnProperty("team_id"))
                    if (!$util.isInteger(message.team_id))
                        return "team_id: integer expected";
                if (message.team_name != null && message.hasOwnProperty("team_name"))
                    if (!$util.isString(message.team_name))
                        return "team_name: string expected";
                if (message.team_logo != null && message.hasOwnProperty("team_logo"))
                    if (!$util.isInteger(message.team_logo) && !(message.team_logo && $util.isInteger(message.team_logo.low) && $util.isInteger(message.team_logo.high)))
                        return "team_logo: integer|Long expected";
                if (message.team_logo_url != null && message.hasOwnProperty("team_logo_url"))
                    if (!$util.isString(message.team_logo_url))
                        return "team_logo_url: string expected";
                if (message.points != null && message.hasOwnProperty("points"))
                    if (!$util.isInteger(message.points))
                        return "points: integer expected";
                if (message.earnings != null && message.hasOwnProperty("earnings"))
                    if (!$util.isInteger(message.earnings))
                        return "earnings: integer expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp))
                        return "timestamp: integer expected";
                if (message.phase != null && message.hasOwnProperty("phase"))
                    switch (message.phase) {
                    default:
                        return "phase: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a Result message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTADPCLeagueResults.Result} Result
             */
            Result.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTADPCLeagueResults.Result)
                    return object;
                var message = new $root.CMsgDOTADPCLeagueResults.Result();
                if (object.standing != null)
                    message.standing = object.standing >>> 0;
                if (object.team_id != null)
                    message.team_id = object.team_id >>> 0;
                if (object.team_name != null)
                    message.team_name = String(object.team_name);
                if (object.team_logo != null)
                    if ($util.Long)
                        (message.team_logo = $util.Long.fromValue(object.team_logo)).unsigned = true;
                    else if (typeof object.team_logo === "string")
                        message.team_logo = parseInt(object.team_logo, 10);
                    else if (typeof object.team_logo === "number")
                        message.team_logo = object.team_logo;
                    else if (typeof object.team_logo === "object")
                        message.team_logo = new $util.LongBits(object.team_logo.low >>> 0, object.team_logo.high >>> 0).toNumber(true);
                if (object.team_logo_url != null)
                    message.team_logo_url = String(object.team_logo_url);
                if (object.points != null)
                    message.points = object.points >>> 0;
                if (object.earnings != null)
                    message.earnings = object.earnings >>> 0;
                if (object.timestamp != null)
                    message.timestamp = object.timestamp >>> 0;
                switch (object.phase) {
                case "LEAGUE_PHASE_UNSET":
                case 0:
                    message.phase = 0;
                    break;
                case "LEAGUE_PHASE_REGIONAL_QUALIFIER":
                case 1:
                    message.phase = 1;
                    break;
                case "LEAGUE_PHASE_GROUP_STAGE":
                case 2:
                    message.phase = 2;
                    break;
                case "LEAGUE_PHASE_MAIN_EVENT":
                case 3:
                    message.phase = 3;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Result message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @static
             * @param {CMsgDOTADPCLeagueResults.Result} message Result
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Result.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.standing = 0;
                    object.team_id = 0;
                    object.team_name = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.team_logo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.team_logo = options.longs === String ? "0" : 0;
                    object.team_logo_url = "";
                    object.points = 0;
                    object.earnings = 0;
                    object.timestamp = 0;
                    object.phase = options.enums === String ? "LEAGUE_PHASE_UNSET" : 0;
                }
                if (message.standing != null && message.hasOwnProperty("standing"))
                    object.standing = message.standing;
                if (message.team_id != null && message.hasOwnProperty("team_id"))
                    object.team_id = message.team_id;
                if (message.team_name != null && message.hasOwnProperty("team_name"))
                    object.team_name = message.team_name;
                if (message.team_logo != null && message.hasOwnProperty("team_logo"))
                    if (typeof message.team_logo === "number")
                        object.team_logo = options.longs === String ? String(message.team_logo) : message.team_logo;
                    else
                        object.team_logo = options.longs === String ? $util.Long.prototype.toString.call(message.team_logo) : options.longs === Number ? new $util.LongBits(message.team_logo.low >>> 0, message.team_logo.high >>> 0).toNumber(true) : message.team_logo;
                if (message.team_logo_url != null && message.hasOwnProperty("team_logo_url"))
                    object.team_logo_url = message.team_logo_url;
                if (message.points != null && message.hasOwnProperty("points"))
                    object.points = message.points;
                if (message.earnings != null && message.hasOwnProperty("earnings"))
                    object.earnings = message.earnings;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = message.timestamp;
                if (message.phase != null && message.hasOwnProperty("phase"))
                    object.phase = options.enums === String ? $root.ELeaguePhase[message.phase] : message.phase;
                return object;
            };
    
            /**
             * Converts this Result to JSON.
             * @function toJSON
             * @memberof CMsgDOTADPCLeagueResults.Result
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Result.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Result;
        })();
    
        return CMsgDOTADPCLeagueResults;
    })();
    
    $root.CMsgDOTADPCTeamResults = (function() {
    
        /**
         * Properties of a CMsgDOTADPCTeamResults.
         * @exports ICMsgDOTADPCTeamResults
         * @interface ICMsgDOTADPCTeamResults
         * @property {Array.<CMsgDOTADPCTeamResults.IResult>|null} [results] CMsgDOTADPCTeamResults results
         */
    
        /**
         * Constructs a new CMsgDOTADPCTeamResults.
         * @exports CMsgDOTADPCTeamResults
         * @classdesc Represents a CMsgDOTADPCTeamResults.
         * @implements ICMsgDOTADPCTeamResults
         * @constructor
         * @param {ICMsgDOTADPCTeamResults=} [properties] Properties to set
         */
        function CMsgDOTADPCTeamResults(properties) {
            this.results = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTADPCTeamResults results.
         * @member {Array.<CMsgDOTADPCTeamResults.IResult>} results
         * @memberof CMsgDOTADPCTeamResults
         * @instance
         */
        CMsgDOTADPCTeamResults.prototype.results = $util.emptyArray;
    
        /**
         * Creates a new CMsgDOTADPCTeamResults instance using the specified properties.
         * @function create
         * @memberof CMsgDOTADPCTeamResults
         * @static
         * @param {ICMsgDOTADPCTeamResults=} [properties] Properties to set
         * @returns {CMsgDOTADPCTeamResults} CMsgDOTADPCTeamResults instance
         */
        CMsgDOTADPCTeamResults.create = function create(properties) {
            return new CMsgDOTADPCTeamResults(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTADPCTeamResults message. Does not implicitly {@link CMsgDOTADPCTeamResults.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTADPCTeamResults
         * @static
         * @param {ICMsgDOTADPCTeamResults} message CMsgDOTADPCTeamResults message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTADPCTeamResults.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.results != null && message.results.length)
                for (var i = 0; i < message.results.length; ++i)
                    $root.CMsgDOTADPCTeamResults.Result.encode(message.results[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTADPCTeamResults message, length delimited. Does not implicitly {@link CMsgDOTADPCTeamResults.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTADPCTeamResults
         * @static
         * @param {ICMsgDOTADPCTeamResults} message CMsgDOTADPCTeamResults message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTADPCTeamResults.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTADPCTeamResults message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTADPCTeamResults
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTADPCTeamResults} CMsgDOTADPCTeamResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTADPCTeamResults.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTADPCTeamResults();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.results && message.results.length))
                        message.results = [];
                    message.results.push($root.CMsgDOTADPCTeamResults.Result.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTADPCTeamResults message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTADPCTeamResults
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTADPCTeamResults} CMsgDOTADPCTeamResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTADPCTeamResults.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTADPCTeamResults message.
         * @function verify
         * @memberof CMsgDOTADPCTeamResults
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTADPCTeamResults.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (var i = 0; i < message.results.length; ++i) {
                    var error = $root.CMsgDOTADPCTeamResults.Result.verify(message.results[i]);
                    if (error)
                        return "results." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgDOTADPCTeamResults message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTADPCTeamResults
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTADPCTeamResults} CMsgDOTADPCTeamResults
         */
        CMsgDOTADPCTeamResults.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTADPCTeamResults)
                return object;
            var message = new $root.CMsgDOTADPCTeamResults();
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".CMsgDOTADPCTeamResults.results: array expected");
                message.results = [];
                for (var i = 0; i < object.results.length; ++i) {
                    if (typeof object.results[i] !== "object")
                        throw TypeError(".CMsgDOTADPCTeamResults.results: object expected");
                    message.results[i] = $root.CMsgDOTADPCTeamResults.Result.fromObject(object.results[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTADPCTeamResults message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTADPCTeamResults
         * @static
         * @param {CMsgDOTADPCTeamResults} message CMsgDOTADPCTeamResults
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTADPCTeamResults.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.results = [];
            if (message.results && message.results.length) {
                object.results = [];
                for (var j = 0; j < message.results.length; ++j)
                    object.results[j] = $root.CMsgDOTADPCTeamResults.Result.toObject(message.results[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgDOTADPCTeamResults to JSON.
         * @function toJSON
         * @memberof CMsgDOTADPCTeamResults
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTADPCTeamResults.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgDOTADPCTeamResults.Result = (function() {
    
            /**
             * Properties of a Result.
             * @memberof CMsgDOTADPCTeamResults
             * @interface IResult
             * @property {number|null} [league_id] Result league_id
             * @property {number|null} [standing] Result standing
             * @property {number|null} [points] Result points
             * @property {number|null} [earnings] Result earnings
             * @property {number|null} [timestamp] Result timestamp
             */
    
            /**
             * Constructs a new Result.
             * @memberof CMsgDOTADPCTeamResults
             * @classdesc Represents a Result.
             * @implements IResult
             * @constructor
             * @param {CMsgDOTADPCTeamResults.IResult=} [properties] Properties to set
             */
            function Result(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Result league_id.
             * @member {number} league_id
             * @memberof CMsgDOTADPCTeamResults.Result
             * @instance
             */
            Result.prototype.league_id = 0;
    
            /**
             * Result standing.
             * @member {number} standing
             * @memberof CMsgDOTADPCTeamResults.Result
             * @instance
             */
            Result.prototype.standing = 0;
    
            /**
             * Result points.
             * @member {number} points
             * @memberof CMsgDOTADPCTeamResults.Result
             * @instance
             */
            Result.prototype.points = 0;
    
            /**
             * Result earnings.
             * @member {number} earnings
             * @memberof CMsgDOTADPCTeamResults.Result
             * @instance
             */
            Result.prototype.earnings = 0;
    
            /**
             * Result timestamp.
             * @member {number} timestamp
             * @memberof CMsgDOTADPCTeamResults.Result
             * @instance
             */
            Result.prototype.timestamp = 0;
    
            /**
             * Creates a new Result instance using the specified properties.
             * @function create
             * @memberof CMsgDOTADPCTeamResults.Result
             * @static
             * @param {CMsgDOTADPCTeamResults.IResult=} [properties] Properties to set
             * @returns {CMsgDOTADPCTeamResults.Result} Result instance
             */
            Result.create = function create(properties) {
                return new Result(properties);
            };
    
            /**
             * Encodes the specified Result message. Does not implicitly {@link CMsgDOTADPCTeamResults.Result.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTADPCTeamResults.Result
             * @static
             * @param {CMsgDOTADPCTeamResults.IResult} message Result message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Result.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.league_id != null && Object.hasOwnProperty.call(message, "league_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.league_id);
                if (message.standing != null && Object.hasOwnProperty.call(message, "standing"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.standing);
                if (message.points != null && Object.hasOwnProperty.call(message, "points"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.points);
                if (message.earnings != null && Object.hasOwnProperty.call(message, "earnings"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.earnings);
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.timestamp);
                return writer;
            };
    
            /**
             * Encodes the specified Result message, length delimited. Does not implicitly {@link CMsgDOTADPCTeamResults.Result.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTADPCTeamResults.Result
             * @static
             * @param {CMsgDOTADPCTeamResults.IResult} message Result message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Result.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Result message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTADPCTeamResults.Result
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTADPCTeamResults.Result} Result
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Result.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTADPCTeamResults.Result();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.league_id = reader.uint32();
                        break;
                    case 2:
                        message.standing = reader.uint32();
                        break;
                    case 3:
                        message.points = reader.uint32();
                        break;
                    case 4:
                        message.earnings = reader.uint32();
                        break;
                    case 5:
                        message.timestamp = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Result message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTADPCTeamResults.Result
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTADPCTeamResults.Result} Result
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Result.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Result message.
             * @function verify
             * @memberof CMsgDOTADPCTeamResults.Result
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Result.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.league_id != null && message.hasOwnProperty("league_id"))
                    if (!$util.isInteger(message.league_id))
                        return "league_id: integer expected";
                if (message.standing != null && message.hasOwnProperty("standing"))
                    if (!$util.isInteger(message.standing))
                        return "standing: integer expected";
                if (message.points != null && message.hasOwnProperty("points"))
                    if (!$util.isInteger(message.points))
                        return "points: integer expected";
                if (message.earnings != null && message.hasOwnProperty("earnings"))
                    if (!$util.isInteger(message.earnings))
                        return "earnings: integer expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp))
                        return "timestamp: integer expected";
                return null;
            };
    
            /**
             * Creates a Result message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTADPCTeamResults.Result
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTADPCTeamResults.Result} Result
             */
            Result.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTADPCTeamResults.Result)
                    return object;
                var message = new $root.CMsgDOTADPCTeamResults.Result();
                if (object.league_id != null)
                    message.league_id = object.league_id >>> 0;
                if (object.standing != null)
                    message.standing = object.standing >>> 0;
                if (object.points != null)
                    message.points = object.points >>> 0;
                if (object.earnings != null)
                    message.earnings = object.earnings >>> 0;
                if (object.timestamp != null)
                    message.timestamp = object.timestamp >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Result message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTADPCTeamResults.Result
             * @static
             * @param {CMsgDOTADPCTeamResults.Result} message Result
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Result.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.league_id = 0;
                    object.standing = 0;
                    object.points = 0;
                    object.earnings = 0;
                    object.timestamp = 0;
                }
                if (message.league_id != null && message.hasOwnProperty("league_id"))
                    object.league_id = message.league_id;
                if (message.standing != null && message.hasOwnProperty("standing"))
                    object.standing = message.standing;
                if (message.points != null && message.hasOwnProperty("points"))
                    object.points = message.points;
                if (message.earnings != null && message.hasOwnProperty("earnings"))
                    object.earnings = message.earnings;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = message.timestamp;
                return object;
            };
    
            /**
             * Converts this Result to JSON.
             * @function toJSON
             * @memberof CMsgDOTADPCTeamResults.Result
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Result.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Result;
        })();
    
        return CMsgDOTADPCTeamResults;
    })();
    
    $root.CMsgDOTADPCSeasonResults = (function() {
    
        /**
         * Properties of a CMsgDOTADPCSeasonResults.
         * @exports ICMsgDOTADPCSeasonResults
         * @interface ICMsgDOTADPCSeasonResults
         * @property {Array.<CMsgDOTADPCSeasonResults.ITeamResult>|null} [results] CMsgDOTADPCSeasonResults results
         */
    
        /**
         * Constructs a new CMsgDOTADPCSeasonResults.
         * @exports CMsgDOTADPCSeasonResults
         * @classdesc Represents a CMsgDOTADPCSeasonResults.
         * @implements ICMsgDOTADPCSeasonResults
         * @constructor
         * @param {ICMsgDOTADPCSeasonResults=} [properties] Properties to set
         */
        function CMsgDOTADPCSeasonResults(properties) {
            this.results = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTADPCSeasonResults results.
         * @member {Array.<CMsgDOTADPCSeasonResults.ITeamResult>} results
         * @memberof CMsgDOTADPCSeasonResults
         * @instance
         */
        CMsgDOTADPCSeasonResults.prototype.results = $util.emptyArray;
    
        /**
         * Creates a new CMsgDOTADPCSeasonResults instance using the specified properties.
         * @function create
         * @memberof CMsgDOTADPCSeasonResults
         * @static
         * @param {ICMsgDOTADPCSeasonResults=} [properties] Properties to set
         * @returns {CMsgDOTADPCSeasonResults} CMsgDOTADPCSeasonResults instance
         */
        CMsgDOTADPCSeasonResults.create = function create(properties) {
            return new CMsgDOTADPCSeasonResults(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTADPCSeasonResults message. Does not implicitly {@link CMsgDOTADPCSeasonResults.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTADPCSeasonResults
         * @static
         * @param {ICMsgDOTADPCSeasonResults} message CMsgDOTADPCSeasonResults message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTADPCSeasonResults.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.results != null && message.results.length)
                for (var i = 0; i < message.results.length; ++i)
                    $root.CMsgDOTADPCSeasonResults.TeamResult.encode(message.results[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTADPCSeasonResults message, length delimited. Does not implicitly {@link CMsgDOTADPCSeasonResults.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTADPCSeasonResults
         * @static
         * @param {ICMsgDOTADPCSeasonResults} message CMsgDOTADPCSeasonResults message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTADPCSeasonResults.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTADPCSeasonResults message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTADPCSeasonResults
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTADPCSeasonResults} CMsgDOTADPCSeasonResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTADPCSeasonResults.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTADPCSeasonResults();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.results && message.results.length))
                        message.results = [];
                    message.results.push($root.CMsgDOTADPCSeasonResults.TeamResult.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTADPCSeasonResults message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTADPCSeasonResults
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTADPCSeasonResults} CMsgDOTADPCSeasonResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTADPCSeasonResults.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTADPCSeasonResults message.
         * @function verify
         * @memberof CMsgDOTADPCSeasonResults
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTADPCSeasonResults.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (var i = 0; i < message.results.length; ++i) {
                    var error = $root.CMsgDOTADPCSeasonResults.TeamResult.verify(message.results[i]);
                    if (error)
                        return "results." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgDOTADPCSeasonResults message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTADPCSeasonResults
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTADPCSeasonResults} CMsgDOTADPCSeasonResults
         */
        CMsgDOTADPCSeasonResults.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTADPCSeasonResults)
                return object;
            var message = new $root.CMsgDOTADPCSeasonResults();
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".CMsgDOTADPCSeasonResults.results: array expected");
                message.results = [];
                for (var i = 0; i < object.results.length; ++i) {
                    if (typeof object.results[i] !== "object")
                        throw TypeError(".CMsgDOTADPCSeasonResults.results: object expected");
                    message.results[i] = $root.CMsgDOTADPCSeasonResults.TeamResult.fromObject(object.results[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTADPCSeasonResults message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTADPCSeasonResults
         * @static
         * @param {CMsgDOTADPCSeasonResults} message CMsgDOTADPCSeasonResults
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTADPCSeasonResults.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.results = [];
            if (message.results && message.results.length) {
                object.results = [];
                for (var j = 0; j < message.results.length; ++j)
                    object.results[j] = $root.CMsgDOTADPCSeasonResults.TeamResult.toObject(message.results[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgDOTADPCSeasonResults to JSON.
         * @function toJSON
         * @memberof CMsgDOTADPCSeasonResults
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTADPCSeasonResults.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgDOTADPCSeasonResults.TeamLeagueResult = (function() {
    
            /**
             * Properties of a TeamLeagueResult.
             * @memberof CMsgDOTADPCSeasonResults
             * @interface ITeamLeagueResult
             * @property {number|null} [timestamp] TeamLeagueResult timestamp
             * @property {number|null} [league_id] TeamLeagueResult league_id
             * @property {number|null} [standing] TeamLeagueResult standing
             * @property {number|null} [points] TeamLeagueResult points
             * @property {number|null} [earnings] TeamLeagueResult earnings
             * @property {number|null} [audit_action] TeamLeagueResult audit_action
             */
    
            /**
             * Constructs a new TeamLeagueResult.
             * @memberof CMsgDOTADPCSeasonResults
             * @classdesc Represents a TeamLeagueResult.
             * @implements ITeamLeagueResult
             * @constructor
             * @param {CMsgDOTADPCSeasonResults.ITeamLeagueResult=} [properties] Properties to set
             */
            function TeamLeagueResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TeamLeagueResult timestamp.
             * @member {number} timestamp
             * @memberof CMsgDOTADPCSeasonResults.TeamLeagueResult
             * @instance
             */
            TeamLeagueResult.prototype.timestamp = 0;
    
            /**
             * TeamLeagueResult league_id.
             * @member {number} league_id
             * @memberof CMsgDOTADPCSeasonResults.TeamLeagueResult
             * @instance
             */
            TeamLeagueResult.prototype.league_id = 0;
    
            /**
             * TeamLeagueResult standing.
             * @member {number} standing
             * @memberof CMsgDOTADPCSeasonResults.TeamLeagueResult
             * @instance
             */
            TeamLeagueResult.prototype.standing = 0;
    
            /**
             * TeamLeagueResult points.
             * @member {number} points
             * @memberof CMsgDOTADPCSeasonResults.TeamLeagueResult
             * @instance
             */
            TeamLeagueResult.prototype.points = 0;
    
            /**
             * TeamLeagueResult earnings.
             * @member {number} earnings
             * @memberof CMsgDOTADPCSeasonResults.TeamLeagueResult
             * @instance
             */
            TeamLeagueResult.prototype.earnings = 0;
    
            /**
             * TeamLeagueResult audit_action.
             * @member {number} audit_action
             * @memberof CMsgDOTADPCSeasonResults.TeamLeagueResult
             * @instance
             */
            TeamLeagueResult.prototype.audit_action = 0;
    
            /**
             * Creates a new TeamLeagueResult instance using the specified properties.
             * @function create
             * @memberof CMsgDOTADPCSeasonResults.TeamLeagueResult
             * @static
             * @param {CMsgDOTADPCSeasonResults.ITeamLeagueResult=} [properties] Properties to set
             * @returns {CMsgDOTADPCSeasonResults.TeamLeagueResult} TeamLeagueResult instance
             */
            TeamLeagueResult.create = function create(properties) {
                return new TeamLeagueResult(properties);
            };
    
            /**
             * Encodes the specified TeamLeagueResult message. Does not implicitly {@link CMsgDOTADPCSeasonResults.TeamLeagueResult.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTADPCSeasonResults.TeamLeagueResult
             * @static
             * @param {CMsgDOTADPCSeasonResults.ITeamLeagueResult} message TeamLeagueResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TeamLeagueResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.timestamp);
                if (message.league_id != null && Object.hasOwnProperty.call(message, "league_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.league_id);
                if (message.standing != null && Object.hasOwnProperty.call(message, "standing"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.standing);
                if (message.points != null && Object.hasOwnProperty.call(message, "points"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.points);
                if (message.earnings != null && Object.hasOwnProperty.call(message, "earnings"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.earnings);
                if (message.audit_action != null && Object.hasOwnProperty.call(message, "audit_action"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.audit_action);
                return writer;
            };
    
            /**
             * Encodes the specified TeamLeagueResult message, length delimited. Does not implicitly {@link CMsgDOTADPCSeasonResults.TeamLeagueResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTADPCSeasonResults.TeamLeagueResult
             * @static
             * @param {CMsgDOTADPCSeasonResults.ITeamLeagueResult} message TeamLeagueResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TeamLeagueResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TeamLeagueResult message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTADPCSeasonResults.TeamLeagueResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTADPCSeasonResults.TeamLeagueResult} TeamLeagueResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TeamLeagueResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTADPCSeasonResults.TeamLeagueResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.timestamp = reader.uint32();
                        break;
                    case 2:
                        message.league_id = reader.uint32();
                        break;
                    case 3:
                        message.standing = reader.uint32();
                        break;
                    case 4:
                        message.points = reader.uint32();
                        break;
                    case 5:
                        message.earnings = reader.uint32();
                        break;
                    case 6:
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
             * Decodes a TeamLeagueResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTADPCSeasonResults.TeamLeagueResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTADPCSeasonResults.TeamLeagueResult} TeamLeagueResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TeamLeagueResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TeamLeagueResult message.
             * @function verify
             * @memberof CMsgDOTADPCSeasonResults.TeamLeagueResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TeamLeagueResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp))
                        return "timestamp: integer expected";
                if (message.league_id != null && message.hasOwnProperty("league_id"))
                    if (!$util.isInteger(message.league_id))
                        return "league_id: integer expected";
                if (message.standing != null && message.hasOwnProperty("standing"))
                    if (!$util.isInteger(message.standing))
                        return "standing: integer expected";
                if (message.points != null && message.hasOwnProperty("points"))
                    if (!$util.isInteger(message.points))
                        return "points: integer expected";
                if (message.earnings != null && message.hasOwnProperty("earnings"))
                    if (!$util.isInteger(message.earnings))
                        return "earnings: integer expected";
                if (message.audit_action != null && message.hasOwnProperty("audit_action"))
                    if (!$util.isInteger(message.audit_action))
                        return "audit_action: integer expected";
                return null;
            };
    
            /**
             * Creates a TeamLeagueResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTADPCSeasonResults.TeamLeagueResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTADPCSeasonResults.TeamLeagueResult} TeamLeagueResult
             */
            TeamLeagueResult.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTADPCSeasonResults.TeamLeagueResult)
                    return object;
                var message = new $root.CMsgDOTADPCSeasonResults.TeamLeagueResult();
                if (object.timestamp != null)
                    message.timestamp = object.timestamp >>> 0;
                if (object.league_id != null)
                    message.league_id = object.league_id >>> 0;
                if (object.standing != null)
                    message.standing = object.standing >>> 0;
                if (object.points != null)
                    message.points = object.points >>> 0;
                if (object.earnings != null)
                    message.earnings = object.earnings >>> 0;
                if (object.audit_action != null)
                    message.audit_action = object.audit_action >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a TeamLeagueResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTADPCSeasonResults.TeamLeagueResult
             * @static
             * @param {CMsgDOTADPCSeasonResults.TeamLeagueResult} message TeamLeagueResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TeamLeagueResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.timestamp = 0;
                    object.league_id = 0;
                    object.standing = 0;
                    object.points = 0;
                    object.earnings = 0;
                    object.audit_action = 0;
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = message.timestamp;
                if (message.league_id != null && message.hasOwnProperty("league_id"))
                    object.league_id = message.league_id;
                if (message.standing != null && message.hasOwnProperty("standing"))
                    object.standing = message.standing;
                if (message.points != null && message.hasOwnProperty("points"))
                    object.points = message.points;
                if (message.earnings != null && message.hasOwnProperty("earnings"))
                    object.earnings = message.earnings;
                if (message.audit_action != null && message.hasOwnProperty("audit_action"))
                    object.audit_action = message.audit_action;
                return object;
            };
    
            /**
             * Converts this TeamLeagueResult to JSON.
             * @function toJSON
             * @memberof CMsgDOTADPCSeasonResults.TeamLeagueResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TeamLeagueResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TeamLeagueResult;
        })();
    
        CMsgDOTADPCSeasonResults.TeamResult = (function() {
    
            /**
             * Properties of a TeamResult.
             * @memberof CMsgDOTADPCSeasonResults
             * @interface ITeamResult
             * @property {number|null} [team_id] TeamResult team_id
             * @property {string|null} [team_name] TeamResult team_name
             * @property {number|Long|null} [team_logo] TeamResult team_logo
             * @property {string|null} [team_logo_url] TeamResult team_logo_url
             * @property {number|null} [total_points] TeamResult total_points
             * @property {number|null} [total_earnings] TeamResult total_earnings
             * @property {Array.<CMsgDOTADPCSeasonResults.ITeamLeagueResult>|null} [league_results] TeamResult league_results
             */
    
            /**
             * Constructs a new TeamResult.
             * @memberof CMsgDOTADPCSeasonResults
             * @classdesc Represents a TeamResult.
             * @implements ITeamResult
             * @constructor
             * @param {CMsgDOTADPCSeasonResults.ITeamResult=} [properties] Properties to set
             */
            function TeamResult(properties) {
                this.league_results = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TeamResult team_id.
             * @member {number} team_id
             * @memberof CMsgDOTADPCSeasonResults.TeamResult
             * @instance
             */
            TeamResult.prototype.team_id = 0;
    
            /**
             * TeamResult team_name.
             * @member {string} team_name
             * @memberof CMsgDOTADPCSeasonResults.TeamResult
             * @instance
             */
            TeamResult.prototype.team_name = "";
    
            /**
             * TeamResult team_logo.
             * @member {number|Long} team_logo
             * @memberof CMsgDOTADPCSeasonResults.TeamResult
             * @instance
             */
            TeamResult.prototype.team_logo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * TeamResult team_logo_url.
             * @member {string} team_logo_url
             * @memberof CMsgDOTADPCSeasonResults.TeamResult
             * @instance
             */
            TeamResult.prototype.team_logo_url = "";
    
            /**
             * TeamResult total_points.
             * @member {number} total_points
             * @memberof CMsgDOTADPCSeasonResults.TeamResult
             * @instance
             */
            TeamResult.prototype.total_points = 0;
    
            /**
             * TeamResult total_earnings.
             * @member {number} total_earnings
             * @memberof CMsgDOTADPCSeasonResults.TeamResult
             * @instance
             */
            TeamResult.prototype.total_earnings = 0;
    
            /**
             * TeamResult league_results.
             * @member {Array.<CMsgDOTADPCSeasonResults.ITeamLeagueResult>} league_results
             * @memberof CMsgDOTADPCSeasonResults.TeamResult
             * @instance
             */
            TeamResult.prototype.league_results = $util.emptyArray;
    
            /**
             * Creates a new TeamResult instance using the specified properties.
             * @function create
             * @memberof CMsgDOTADPCSeasonResults.TeamResult
             * @static
             * @param {CMsgDOTADPCSeasonResults.ITeamResult=} [properties] Properties to set
             * @returns {CMsgDOTADPCSeasonResults.TeamResult} TeamResult instance
             */
            TeamResult.create = function create(properties) {
                return new TeamResult(properties);
            };
    
            /**
             * Encodes the specified TeamResult message. Does not implicitly {@link CMsgDOTADPCSeasonResults.TeamResult.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTADPCSeasonResults.TeamResult
             * @static
             * @param {CMsgDOTADPCSeasonResults.ITeamResult} message TeamResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TeamResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.team_id != null && Object.hasOwnProperty.call(message, "team_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.team_id);
                if (message.team_name != null && Object.hasOwnProperty.call(message, "team_name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.team_name);
                if (message.team_logo != null && Object.hasOwnProperty.call(message, "team_logo"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.team_logo);
                if (message.team_logo_url != null && Object.hasOwnProperty.call(message, "team_logo_url"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.team_logo_url);
                if (message.total_points != null && Object.hasOwnProperty.call(message, "total_points"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.total_points);
                if (message.total_earnings != null && Object.hasOwnProperty.call(message, "total_earnings"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.total_earnings);
                if (message.league_results != null && message.league_results.length)
                    for (var i = 0; i < message.league_results.length; ++i)
                        $root.CMsgDOTADPCSeasonResults.TeamLeagueResult.encode(message.league_results[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified TeamResult message, length delimited. Does not implicitly {@link CMsgDOTADPCSeasonResults.TeamResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTADPCSeasonResults.TeamResult
             * @static
             * @param {CMsgDOTADPCSeasonResults.ITeamResult} message TeamResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TeamResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TeamResult message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTADPCSeasonResults.TeamResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTADPCSeasonResults.TeamResult} TeamResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TeamResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTADPCSeasonResults.TeamResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.team_id = reader.uint32();
                        break;
                    case 2:
                        message.team_name = reader.string();
                        break;
                    case 3:
                        message.team_logo = reader.uint64();
                        break;
                    case 4:
                        message.team_logo_url = reader.string();
                        break;
                    case 5:
                        message.total_points = reader.uint32();
                        break;
                    case 6:
                        message.total_earnings = reader.uint32();
                        break;
                    case 7:
                        if (!(message.league_results && message.league_results.length))
                            message.league_results = [];
                        message.league_results.push($root.CMsgDOTADPCSeasonResults.TeamLeagueResult.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TeamResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTADPCSeasonResults.TeamResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTADPCSeasonResults.TeamResult} TeamResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TeamResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TeamResult message.
             * @function verify
             * @memberof CMsgDOTADPCSeasonResults.TeamResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TeamResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.team_id != null && message.hasOwnProperty("team_id"))
                    if (!$util.isInteger(message.team_id))
                        return "team_id: integer expected";
                if (message.team_name != null && message.hasOwnProperty("team_name"))
                    if (!$util.isString(message.team_name))
                        return "team_name: string expected";
                if (message.team_logo != null && message.hasOwnProperty("team_logo"))
                    if (!$util.isInteger(message.team_logo) && !(message.team_logo && $util.isInteger(message.team_logo.low) && $util.isInteger(message.team_logo.high)))
                        return "team_logo: integer|Long expected";
                if (message.team_logo_url != null && message.hasOwnProperty("team_logo_url"))
                    if (!$util.isString(message.team_logo_url))
                        return "team_logo_url: string expected";
                if (message.total_points != null && message.hasOwnProperty("total_points"))
                    if (!$util.isInteger(message.total_points))
                        return "total_points: integer expected";
                if (message.total_earnings != null && message.hasOwnProperty("total_earnings"))
                    if (!$util.isInteger(message.total_earnings))
                        return "total_earnings: integer expected";
                if (message.league_results != null && message.hasOwnProperty("league_results")) {
                    if (!Array.isArray(message.league_results))
                        return "league_results: array expected";
                    for (var i = 0; i < message.league_results.length; ++i) {
                        var error = $root.CMsgDOTADPCSeasonResults.TeamLeagueResult.verify(message.league_results[i]);
                        if (error)
                            return "league_results." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a TeamResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTADPCSeasonResults.TeamResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTADPCSeasonResults.TeamResult} TeamResult
             */
            TeamResult.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTADPCSeasonResults.TeamResult)
                    return object;
                var message = new $root.CMsgDOTADPCSeasonResults.TeamResult();
                if (object.team_id != null)
                    message.team_id = object.team_id >>> 0;
                if (object.team_name != null)
                    message.team_name = String(object.team_name);
                if (object.team_logo != null)
                    if ($util.Long)
                        (message.team_logo = $util.Long.fromValue(object.team_logo)).unsigned = true;
                    else if (typeof object.team_logo === "string")
                        message.team_logo = parseInt(object.team_logo, 10);
                    else if (typeof object.team_logo === "number")
                        message.team_logo = object.team_logo;
                    else if (typeof object.team_logo === "object")
                        message.team_logo = new $util.LongBits(object.team_logo.low >>> 0, object.team_logo.high >>> 0).toNumber(true);
                if (object.team_logo_url != null)
                    message.team_logo_url = String(object.team_logo_url);
                if (object.total_points != null)
                    message.total_points = object.total_points >>> 0;
                if (object.total_earnings != null)
                    message.total_earnings = object.total_earnings >>> 0;
                if (object.league_results) {
                    if (!Array.isArray(object.league_results))
                        throw TypeError(".CMsgDOTADPCSeasonResults.TeamResult.league_results: array expected");
                    message.league_results = [];
                    for (var i = 0; i < object.league_results.length; ++i) {
                        if (typeof object.league_results[i] !== "object")
                            throw TypeError(".CMsgDOTADPCSeasonResults.TeamResult.league_results: object expected");
                        message.league_results[i] = $root.CMsgDOTADPCSeasonResults.TeamLeagueResult.fromObject(object.league_results[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TeamResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTADPCSeasonResults.TeamResult
             * @static
             * @param {CMsgDOTADPCSeasonResults.TeamResult} message TeamResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TeamResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.league_results = [];
                if (options.defaults) {
                    object.team_id = 0;
                    object.team_name = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.team_logo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.team_logo = options.longs === String ? "0" : 0;
                    object.team_logo_url = "";
                    object.total_points = 0;
                    object.total_earnings = 0;
                }
                if (message.team_id != null && message.hasOwnProperty("team_id"))
                    object.team_id = message.team_id;
                if (message.team_name != null && message.hasOwnProperty("team_name"))
                    object.team_name = message.team_name;
                if (message.team_logo != null && message.hasOwnProperty("team_logo"))
                    if (typeof message.team_logo === "number")
                        object.team_logo = options.longs === String ? String(message.team_logo) : message.team_logo;
                    else
                        object.team_logo = options.longs === String ? $util.Long.prototype.toString.call(message.team_logo) : options.longs === Number ? new $util.LongBits(message.team_logo.low >>> 0, message.team_logo.high >>> 0).toNumber(true) : message.team_logo;
                if (message.team_logo_url != null && message.hasOwnProperty("team_logo_url"))
                    object.team_logo_url = message.team_logo_url;
                if (message.total_points != null && message.hasOwnProperty("total_points"))
                    object.total_points = message.total_points;
                if (message.total_earnings != null && message.hasOwnProperty("total_earnings"))
                    object.total_earnings = message.total_earnings;
                if (message.league_results && message.league_results.length) {
                    object.league_results = [];
                    for (var j = 0; j < message.league_results.length; ++j)
                        object.league_results[j] = $root.CMsgDOTADPCSeasonResults.TeamLeagueResult.toObject(message.league_results[j], options);
                }
                return object;
            };
    
            /**
             * Converts this TeamResult to JSON.
             * @function toJSON
             * @memberof CMsgDOTADPCSeasonResults.TeamResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TeamResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TeamResult;
        })();
    
        return CMsgDOTADPCSeasonResults;
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
