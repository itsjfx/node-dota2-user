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
     * ETournamentEvent enum.
     * @exports ETournamentEvent
     * @enum {number}
     * @property {number} k_ETournamentEvent_None=0 k_ETournamentEvent_None value
     * @property {number} k_ETournamentEvent_TournamentCreated=1 k_ETournamentEvent_TournamentCreated value
     * @property {number} k_ETournamentEvent_TournamentsMerged=2 k_ETournamentEvent_TournamentsMerged value
     * @property {number} k_ETournamentEvent_GameOutcome=3 k_ETournamentEvent_GameOutcome value
     * @property {number} k_ETournamentEvent_TeamGivenBye=4 k_ETournamentEvent_TeamGivenBye value
     * @property {number} k_ETournamentEvent_TournamentCanceledByAdmin=5 k_ETournamentEvent_TournamentCanceledByAdmin value
     * @property {number} k_ETournamentEvent_TeamAbandoned=6 k_ETournamentEvent_TeamAbandoned value
     * @property {number} k_ETournamentEvent_ScheduledGameStarted=7 k_ETournamentEvent_ScheduledGameStarted value
     * @property {number} k_ETournamentEvent_Canceled=8 k_ETournamentEvent_Canceled value
     * @property {number} k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeRefund=9 k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeRefund value
     * @property {number} k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeForfeit=10 k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeForfeit value
     * @property {number} k_ETournamentEvent_TeamParticipationTimedOut_GrantedVictory=11 k_ETournamentEvent_TeamParticipationTimedOut_GrantedVictory value
     */
    $root.ETournamentEvent = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ETournamentEvent_None"] = 0;
        values[valuesById[1] = "k_ETournamentEvent_TournamentCreated"] = 1;
        values[valuesById[2] = "k_ETournamentEvent_TournamentsMerged"] = 2;
        values[valuesById[3] = "k_ETournamentEvent_GameOutcome"] = 3;
        values[valuesById[4] = "k_ETournamentEvent_TeamGivenBye"] = 4;
        values[valuesById[5] = "k_ETournamentEvent_TournamentCanceledByAdmin"] = 5;
        values[valuesById[6] = "k_ETournamentEvent_TeamAbandoned"] = 6;
        values[valuesById[7] = "k_ETournamentEvent_ScheduledGameStarted"] = 7;
        values[valuesById[8] = "k_ETournamentEvent_Canceled"] = 8;
        values[valuesById[9] = "k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeRefund"] = 9;
        values[valuesById[10] = "k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeForfeit"] = 10;
        values[valuesById[11] = "k_ETournamentEvent_TeamParticipationTimedOut_GrantedVictory"] = 11;
        return values;
    })();
    
    $root.CMsgDOTATournamentInfo = (function() {
    
        /**
         * Properties of a CMsgDOTATournamentInfo.
         * @exports ICMsgDOTATournamentInfo
         * @interface ICMsgDOTATournamentInfo
         * @property {number|null} [league_id] CMsgDOTATournamentInfo league_id
         * @property {Array.<CMsgDOTATournamentInfo.IPhase>|null} [phase_list] CMsgDOTATournamentInfo phase_list
         * @property {Array.<CMsgDOTATournamentInfo.ITeam>|null} [teams_list] CMsgDOTATournamentInfo teams_list
         * @property {Array.<CMsgDOTATournamentInfo.IUpcomingMatch>|null} [upcoming_matches_list] CMsgDOTATournamentInfo upcoming_matches_list
         * @property {Array.<CMsgDOTATournamentInfo.INews>|null} [news_list] CMsgDOTATournamentInfo news_list
         */
    
        /**
         * Constructs a new CMsgDOTATournamentInfo.
         * @exports CMsgDOTATournamentInfo
         * @classdesc Represents a CMsgDOTATournamentInfo.
         * @implements ICMsgDOTATournamentInfo
         * @constructor
         * @param {ICMsgDOTATournamentInfo=} [properties] Properties to set
         */
        function CMsgDOTATournamentInfo(properties) {
            this.phase_list = [];
            this.teams_list = [];
            this.upcoming_matches_list = [];
            this.news_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTATournamentInfo league_id.
         * @member {number} league_id
         * @memberof CMsgDOTATournamentInfo
         * @instance
         */
        CMsgDOTATournamentInfo.prototype.league_id = 0;
    
        /**
         * CMsgDOTATournamentInfo phase_list.
         * @member {Array.<CMsgDOTATournamentInfo.IPhase>} phase_list
         * @memberof CMsgDOTATournamentInfo
         * @instance
         */
        CMsgDOTATournamentInfo.prototype.phase_list = $util.emptyArray;
    
        /**
         * CMsgDOTATournamentInfo teams_list.
         * @member {Array.<CMsgDOTATournamentInfo.ITeam>} teams_list
         * @memberof CMsgDOTATournamentInfo
         * @instance
         */
        CMsgDOTATournamentInfo.prototype.teams_list = $util.emptyArray;
    
        /**
         * CMsgDOTATournamentInfo upcoming_matches_list.
         * @member {Array.<CMsgDOTATournamentInfo.IUpcomingMatch>} upcoming_matches_list
         * @memberof CMsgDOTATournamentInfo
         * @instance
         */
        CMsgDOTATournamentInfo.prototype.upcoming_matches_list = $util.emptyArray;
    
        /**
         * CMsgDOTATournamentInfo news_list.
         * @member {Array.<CMsgDOTATournamentInfo.INews>} news_list
         * @memberof CMsgDOTATournamentInfo
         * @instance
         */
        CMsgDOTATournamentInfo.prototype.news_list = $util.emptyArray;
    
        /**
         * Creates a new CMsgDOTATournamentInfo instance using the specified properties.
         * @function create
         * @memberof CMsgDOTATournamentInfo
         * @static
         * @param {ICMsgDOTATournamentInfo=} [properties] Properties to set
         * @returns {CMsgDOTATournamentInfo} CMsgDOTATournamentInfo instance
         */
        CMsgDOTATournamentInfo.create = function create(properties) {
            return new CMsgDOTATournamentInfo(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTATournamentInfo message. Does not implicitly {@link CMsgDOTATournamentInfo.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTATournamentInfo
         * @static
         * @param {ICMsgDOTATournamentInfo} message CMsgDOTATournamentInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTATournamentInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.league_id != null && Object.hasOwnProperty.call(message, "league_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.league_id);
            if (message.phase_list != null && message.phase_list.length)
                for (var i = 0; i < message.phase_list.length; ++i)
                    $root.CMsgDOTATournamentInfo.Phase.encode(message.phase_list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.teams_list != null && message.teams_list.length)
                for (var i = 0; i < message.teams_list.length; ++i)
                    $root.CMsgDOTATournamentInfo.Team.encode(message.teams_list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.upcoming_matches_list != null && message.upcoming_matches_list.length)
                for (var i = 0; i < message.upcoming_matches_list.length; ++i)
                    $root.CMsgDOTATournamentInfo.UpcomingMatch.encode(message.upcoming_matches_list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.news_list != null && message.news_list.length)
                for (var i = 0; i < message.news_list.length; ++i)
                    $root.CMsgDOTATournamentInfo.News.encode(message.news_list[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTATournamentInfo message, length delimited. Does not implicitly {@link CMsgDOTATournamentInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTATournamentInfo
         * @static
         * @param {ICMsgDOTATournamentInfo} message CMsgDOTATournamentInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTATournamentInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTATournamentInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTATournamentInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTATournamentInfo} CMsgDOTATournamentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTATournamentInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTATournamentInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.league_id = reader.uint32();
                    break;
                case 2:
                    if (!(message.phase_list && message.phase_list.length))
                        message.phase_list = [];
                    message.phase_list.push($root.CMsgDOTATournamentInfo.Phase.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.teams_list && message.teams_list.length))
                        message.teams_list = [];
                    message.teams_list.push($root.CMsgDOTATournamentInfo.Team.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.upcoming_matches_list && message.upcoming_matches_list.length))
                        message.upcoming_matches_list = [];
                    message.upcoming_matches_list.push($root.CMsgDOTATournamentInfo.UpcomingMatch.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.news_list && message.news_list.length))
                        message.news_list = [];
                    message.news_list.push($root.CMsgDOTATournamentInfo.News.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTATournamentInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTATournamentInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTATournamentInfo} CMsgDOTATournamentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTATournamentInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTATournamentInfo message.
         * @function verify
         * @memberof CMsgDOTATournamentInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTATournamentInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.league_id != null && message.hasOwnProperty("league_id"))
                if (!$util.isInteger(message.league_id))
                    return "league_id: integer expected";
            if (message.phase_list != null && message.hasOwnProperty("phase_list")) {
                if (!Array.isArray(message.phase_list))
                    return "phase_list: array expected";
                for (var i = 0; i < message.phase_list.length; ++i) {
                    var error = $root.CMsgDOTATournamentInfo.Phase.verify(message.phase_list[i]);
                    if (error)
                        return "phase_list." + error;
                }
            }
            if (message.teams_list != null && message.hasOwnProperty("teams_list")) {
                if (!Array.isArray(message.teams_list))
                    return "teams_list: array expected";
                for (var i = 0; i < message.teams_list.length; ++i) {
                    var error = $root.CMsgDOTATournamentInfo.Team.verify(message.teams_list[i]);
                    if (error)
                        return "teams_list." + error;
                }
            }
            if (message.upcoming_matches_list != null && message.hasOwnProperty("upcoming_matches_list")) {
                if (!Array.isArray(message.upcoming_matches_list))
                    return "upcoming_matches_list: array expected";
                for (var i = 0; i < message.upcoming_matches_list.length; ++i) {
                    var error = $root.CMsgDOTATournamentInfo.UpcomingMatch.verify(message.upcoming_matches_list[i]);
                    if (error)
                        return "upcoming_matches_list." + error;
                }
            }
            if (message.news_list != null && message.hasOwnProperty("news_list")) {
                if (!Array.isArray(message.news_list))
                    return "news_list: array expected";
                for (var i = 0; i < message.news_list.length; ++i) {
                    var error = $root.CMsgDOTATournamentInfo.News.verify(message.news_list[i]);
                    if (error)
                        return "news_list." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgDOTATournamentInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTATournamentInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTATournamentInfo} CMsgDOTATournamentInfo
         */
        CMsgDOTATournamentInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTATournamentInfo)
                return object;
            var message = new $root.CMsgDOTATournamentInfo();
            if (object.league_id != null)
                message.league_id = object.league_id >>> 0;
            if (object.phase_list) {
                if (!Array.isArray(object.phase_list))
                    throw TypeError(".CMsgDOTATournamentInfo.phase_list: array expected");
                message.phase_list = [];
                for (var i = 0; i < object.phase_list.length; ++i) {
                    if (typeof object.phase_list[i] !== "object")
                        throw TypeError(".CMsgDOTATournamentInfo.phase_list: object expected");
                    message.phase_list[i] = $root.CMsgDOTATournamentInfo.Phase.fromObject(object.phase_list[i]);
                }
            }
            if (object.teams_list) {
                if (!Array.isArray(object.teams_list))
                    throw TypeError(".CMsgDOTATournamentInfo.teams_list: array expected");
                message.teams_list = [];
                for (var i = 0; i < object.teams_list.length; ++i) {
                    if (typeof object.teams_list[i] !== "object")
                        throw TypeError(".CMsgDOTATournamentInfo.teams_list: object expected");
                    message.teams_list[i] = $root.CMsgDOTATournamentInfo.Team.fromObject(object.teams_list[i]);
                }
            }
            if (object.upcoming_matches_list) {
                if (!Array.isArray(object.upcoming_matches_list))
                    throw TypeError(".CMsgDOTATournamentInfo.upcoming_matches_list: array expected");
                message.upcoming_matches_list = [];
                for (var i = 0; i < object.upcoming_matches_list.length; ++i) {
                    if (typeof object.upcoming_matches_list[i] !== "object")
                        throw TypeError(".CMsgDOTATournamentInfo.upcoming_matches_list: object expected");
                    message.upcoming_matches_list[i] = $root.CMsgDOTATournamentInfo.UpcomingMatch.fromObject(object.upcoming_matches_list[i]);
                }
            }
            if (object.news_list) {
                if (!Array.isArray(object.news_list))
                    throw TypeError(".CMsgDOTATournamentInfo.news_list: array expected");
                message.news_list = [];
                for (var i = 0; i < object.news_list.length; ++i) {
                    if (typeof object.news_list[i] !== "object")
                        throw TypeError(".CMsgDOTATournamentInfo.news_list: object expected");
                    message.news_list[i] = $root.CMsgDOTATournamentInfo.News.fromObject(object.news_list[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTATournamentInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTATournamentInfo
         * @static
         * @param {CMsgDOTATournamentInfo} message CMsgDOTATournamentInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTATournamentInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.phase_list = [];
                object.teams_list = [];
                object.upcoming_matches_list = [];
                object.news_list = [];
            }
            if (options.defaults)
                object.league_id = 0;
            if (message.league_id != null && message.hasOwnProperty("league_id"))
                object.league_id = message.league_id;
            if (message.phase_list && message.phase_list.length) {
                object.phase_list = [];
                for (var j = 0; j < message.phase_list.length; ++j)
                    object.phase_list[j] = $root.CMsgDOTATournamentInfo.Phase.toObject(message.phase_list[j], options);
            }
            if (message.teams_list && message.teams_list.length) {
                object.teams_list = [];
                for (var j = 0; j < message.teams_list.length; ++j)
                    object.teams_list[j] = $root.CMsgDOTATournamentInfo.Team.toObject(message.teams_list[j], options);
            }
            if (message.upcoming_matches_list && message.upcoming_matches_list.length) {
                object.upcoming_matches_list = [];
                for (var j = 0; j < message.upcoming_matches_list.length; ++j)
                    object.upcoming_matches_list[j] = $root.CMsgDOTATournamentInfo.UpcomingMatch.toObject(message.upcoming_matches_list[j], options);
            }
            if (message.news_list && message.news_list.length) {
                object.news_list = [];
                for (var j = 0; j < message.news_list.length; ++j)
                    object.news_list[j] = $root.CMsgDOTATournamentInfo.News.toObject(message.news_list[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgDOTATournamentInfo to JSON.
         * @function toJSON
         * @memberof CMsgDOTATournamentInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTATournamentInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgDOTATournamentInfo.PhaseGroup = (function() {
    
            /**
             * Properties of a PhaseGroup.
             * @memberof CMsgDOTATournamentInfo
             * @interface IPhaseGroup
             * @property {number|null} [group_id] PhaseGroup group_id
             * @property {string|null} [group_name] PhaseGroup group_name
             */
    
            /**
             * Constructs a new PhaseGroup.
             * @memberof CMsgDOTATournamentInfo
             * @classdesc Represents a PhaseGroup.
             * @implements IPhaseGroup
             * @constructor
             * @param {CMsgDOTATournamentInfo.IPhaseGroup=} [properties] Properties to set
             */
            function PhaseGroup(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PhaseGroup group_id.
             * @member {number} group_id
             * @memberof CMsgDOTATournamentInfo.PhaseGroup
             * @instance
             */
            PhaseGroup.prototype.group_id = 0;
    
            /**
             * PhaseGroup group_name.
             * @member {string} group_name
             * @memberof CMsgDOTATournamentInfo.PhaseGroup
             * @instance
             */
            PhaseGroup.prototype.group_name = "";
    
            /**
             * Creates a new PhaseGroup instance using the specified properties.
             * @function create
             * @memberof CMsgDOTATournamentInfo.PhaseGroup
             * @static
             * @param {CMsgDOTATournamentInfo.IPhaseGroup=} [properties] Properties to set
             * @returns {CMsgDOTATournamentInfo.PhaseGroup} PhaseGroup instance
             */
            PhaseGroup.create = function create(properties) {
                return new PhaseGroup(properties);
            };
    
            /**
             * Encodes the specified PhaseGroup message. Does not implicitly {@link CMsgDOTATournamentInfo.PhaseGroup.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTATournamentInfo.PhaseGroup
             * @static
             * @param {CMsgDOTATournamentInfo.IPhaseGroup} message PhaseGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhaseGroup.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.group_id != null && Object.hasOwnProperty.call(message, "group_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.group_id);
                if (message.group_name != null && Object.hasOwnProperty.call(message, "group_name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.group_name);
                return writer;
            };
    
            /**
             * Encodes the specified PhaseGroup message, length delimited. Does not implicitly {@link CMsgDOTATournamentInfo.PhaseGroup.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTATournamentInfo.PhaseGroup
             * @static
             * @param {CMsgDOTATournamentInfo.IPhaseGroup} message PhaseGroup message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhaseGroup.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PhaseGroup message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTATournamentInfo.PhaseGroup
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTATournamentInfo.PhaseGroup} PhaseGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhaseGroup.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTATournamentInfo.PhaseGroup();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.group_id = reader.uint32();
                        break;
                    case 2:
                        message.group_name = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PhaseGroup message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTATournamentInfo.PhaseGroup
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTATournamentInfo.PhaseGroup} PhaseGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhaseGroup.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PhaseGroup message.
             * @function verify
             * @memberof CMsgDOTATournamentInfo.PhaseGroup
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PhaseGroup.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.group_id != null && message.hasOwnProperty("group_id"))
                    if (!$util.isInteger(message.group_id))
                        return "group_id: integer expected";
                if (message.group_name != null && message.hasOwnProperty("group_name"))
                    if (!$util.isString(message.group_name))
                        return "group_name: string expected";
                return null;
            };
    
            /**
             * Creates a PhaseGroup message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTATournamentInfo.PhaseGroup
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTATournamentInfo.PhaseGroup} PhaseGroup
             */
            PhaseGroup.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTATournamentInfo.PhaseGroup)
                    return object;
                var message = new $root.CMsgDOTATournamentInfo.PhaseGroup();
                if (object.group_id != null)
                    message.group_id = object.group_id >>> 0;
                if (object.group_name != null)
                    message.group_name = String(object.group_name);
                return message;
            };
    
            /**
             * Creates a plain object from a PhaseGroup message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTATournamentInfo.PhaseGroup
             * @static
             * @param {CMsgDOTATournamentInfo.PhaseGroup} message PhaseGroup
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PhaseGroup.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.group_id = 0;
                    object.group_name = "";
                }
                if (message.group_id != null && message.hasOwnProperty("group_id"))
                    object.group_id = message.group_id;
                if (message.group_name != null && message.hasOwnProperty("group_name"))
                    object.group_name = message.group_name;
                return object;
            };
    
            /**
             * Converts this PhaseGroup to JSON.
             * @function toJSON
             * @memberof CMsgDOTATournamentInfo.PhaseGroup
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PhaseGroup.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PhaseGroup;
        })();
    
        CMsgDOTATournamentInfo.Phase = (function() {
    
            /**
             * Properties of a Phase.
             * @memberof CMsgDOTATournamentInfo
             * @interface IPhase
             * @property {number|null} [phase_id] Phase phase_id
             * @property {string|null} [phase_name] Phase phase_name
             * @property {number|null} [type_id] Phase type_id
             * @property {number|null} [iterations] Phase iterations
             * @property {number|null} [min_start_time] Phase min_start_time
             * @property {number|null} [max_start_time] Phase max_start_time
             * @property {Array.<CMsgDOTATournamentInfo.IPhaseGroup>|null} [group_list] Phase group_list
             */
    
            /**
             * Constructs a new Phase.
             * @memberof CMsgDOTATournamentInfo
             * @classdesc Represents a Phase.
             * @implements IPhase
             * @constructor
             * @param {CMsgDOTATournamentInfo.IPhase=} [properties] Properties to set
             */
            function Phase(properties) {
                this.group_list = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Phase phase_id.
             * @member {number} phase_id
             * @memberof CMsgDOTATournamentInfo.Phase
             * @instance
             */
            Phase.prototype.phase_id = 0;
    
            /**
             * Phase phase_name.
             * @member {string} phase_name
             * @memberof CMsgDOTATournamentInfo.Phase
             * @instance
             */
            Phase.prototype.phase_name = "";
    
            /**
             * Phase type_id.
             * @member {number} type_id
             * @memberof CMsgDOTATournamentInfo.Phase
             * @instance
             */
            Phase.prototype.type_id = 0;
    
            /**
             * Phase iterations.
             * @member {number} iterations
             * @memberof CMsgDOTATournamentInfo.Phase
             * @instance
             */
            Phase.prototype.iterations = 0;
    
            /**
             * Phase min_start_time.
             * @member {number} min_start_time
             * @memberof CMsgDOTATournamentInfo.Phase
             * @instance
             */
            Phase.prototype.min_start_time = 0;
    
            /**
             * Phase max_start_time.
             * @member {number} max_start_time
             * @memberof CMsgDOTATournamentInfo.Phase
             * @instance
             */
            Phase.prototype.max_start_time = 0;
    
            /**
             * Phase group_list.
             * @member {Array.<CMsgDOTATournamentInfo.IPhaseGroup>} group_list
             * @memberof CMsgDOTATournamentInfo.Phase
             * @instance
             */
            Phase.prototype.group_list = $util.emptyArray;
    
            /**
             * Creates a new Phase instance using the specified properties.
             * @function create
             * @memberof CMsgDOTATournamentInfo.Phase
             * @static
             * @param {CMsgDOTATournamentInfo.IPhase=} [properties] Properties to set
             * @returns {CMsgDOTATournamentInfo.Phase} Phase instance
             */
            Phase.create = function create(properties) {
                return new Phase(properties);
            };
    
            /**
             * Encodes the specified Phase message. Does not implicitly {@link CMsgDOTATournamentInfo.Phase.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTATournamentInfo.Phase
             * @static
             * @param {CMsgDOTATournamentInfo.IPhase} message Phase message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Phase.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.phase_id != null && Object.hasOwnProperty.call(message, "phase_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.phase_id);
                if (message.phase_name != null && Object.hasOwnProperty.call(message, "phase_name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.phase_name);
                if (message.type_id != null && Object.hasOwnProperty.call(message, "type_id"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.type_id);
                if (message.iterations != null && Object.hasOwnProperty.call(message, "iterations"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.iterations);
                if (message.min_start_time != null && Object.hasOwnProperty.call(message, "min_start_time"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.min_start_time);
                if (message.max_start_time != null && Object.hasOwnProperty.call(message, "max_start_time"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.max_start_time);
                if (message.group_list != null && message.group_list.length)
                    for (var i = 0; i < message.group_list.length; ++i)
                        $root.CMsgDOTATournamentInfo.PhaseGroup.encode(message.group_list[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Phase message, length delimited. Does not implicitly {@link CMsgDOTATournamentInfo.Phase.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTATournamentInfo.Phase
             * @static
             * @param {CMsgDOTATournamentInfo.IPhase} message Phase message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Phase.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Phase message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTATournamentInfo.Phase
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTATournamentInfo.Phase} Phase
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Phase.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTATournamentInfo.Phase();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.phase_id = reader.uint32();
                        break;
                    case 2:
                        message.phase_name = reader.string();
                        break;
                    case 3:
                        message.type_id = reader.uint32();
                        break;
                    case 4:
                        message.iterations = reader.uint32();
                        break;
                    case 5:
                        message.min_start_time = reader.uint32();
                        break;
                    case 6:
                        message.max_start_time = reader.uint32();
                        break;
                    case 7:
                        if (!(message.group_list && message.group_list.length))
                            message.group_list = [];
                        message.group_list.push($root.CMsgDOTATournamentInfo.PhaseGroup.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Phase message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTATournamentInfo.Phase
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTATournamentInfo.Phase} Phase
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Phase.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Phase message.
             * @function verify
             * @memberof CMsgDOTATournamentInfo.Phase
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Phase.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.phase_id != null && message.hasOwnProperty("phase_id"))
                    if (!$util.isInteger(message.phase_id))
                        return "phase_id: integer expected";
                if (message.phase_name != null && message.hasOwnProperty("phase_name"))
                    if (!$util.isString(message.phase_name))
                        return "phase_name: string expected";
                if (message.type_id != null && message.hasOwnProperty("type_id"))
                    if (!$util.isInteger(message.type_id))
                        return "type_id: integer expected";
                if (message.iterations != null && message.hasOwnProperty("iterations"))
                    if (!$util.isInteger(message.iterations))
                        return "iterations: integer expected";
                if (message.min_start_time != null && message.hasOwnProperty("min_start_time"))
                    if (!$util.isInteger(message.min_start_time))
                        return "min_start_time: integer expected";
                if (message.max_start_time != null && message.hasOwnProperty("max_start_time"))
                    if (!$util.isInteger(message.max_start_time))
                        return "max_start_time: integer expected";
                if (message.group_list != null && message.hasOwnProperty("group_list")) {
                    if (!Array.isArray(message.group_list))
                        return "group_list: array expected";
                    for (var i = 0; i < message.group_list.length; ++i) {
                        var error = $root.CMsgDOTATournamentInfo.PhaseGroup.verify(message.group_list[i]);
                        if (error)
                            return "group_list." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Phase message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTATournamentInfo.Phase
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTATournamentInfo.Phase} Phase
             */
            Phase.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTATournamentInfo.Phase)
                    return object;
                var message = new $root.CMsgDOTATournamentInfo.Phase();
                if (object.phase_id != null)
                    message.phase_id = object.phase_id >>> 0;
                if (object.phase_name != null)
                    message.phase_name = String(object.phase_name);
                if (object.type_id != null)
                    message.type_id = object.type_id >>> 0;
                if (object.iterations != null)
                    message.iterations = object.iterations >>> 0;
                if (object.min_start_time != null)
                    message.min_start_time = object.min_start_time >>> 0;
                if (object.max_start_time != null)
                    message.max_start_time = object.max_start_time >>> 0;
                if (object.group_list) {
                    if (!Array.isArray(object.group_list))
                        throw TypeError(".CMsgDOTATournamentInfo.Phase.group_list: array expected");
                    message.group_list = [];
                    for (var i = 0; i < object.group_list.length; ++i) {
                        if (typeof object.group_list[i] !== "object")
                            throw TypeError(".CMsgDOTATournamentInfo.Phase.group_list: object expected");
                        message.group_list[i] = $root.CMsgDOTATournamentInfo.PhaseGroup.fromObject(object.group_list[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Phase message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTATournamentInfo.Phase
             * @static
             * @param {CMsgDOTATournamentInfo.Phase} message Phase
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Phase.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.group_list = [];
                if (options.defaults) {
                    object.phase_id = 0;
                    object.phase_name = "";
                    object.type_id = 0;
                    object.iterations = 0;
                    object.min_start_time = 0;
                    object.max_start_time = 0;
                }
                if (message.phase_id != null && message.hasOwnProperty("phase_id"))
                    object.phase_id = message.phase_id;
                if (message.phase_name != null && message.hasOwnProperty("phase_name"))
                    object.phase_name = message.phase_name;
                if (message.type_id != null && message.hasOwnProperty("type_id"))
                    object.type_id = message.type_id;
                if (message.iterations != null && message.hasOwnProperty("iterations"))
                    object.iterations = message.iterations;
                if (message.min_start_time != null && message.hasOwnProperty("min_start_time"))
                    object.min_start_time = message.min_start_time;
                if (message.max_start_time != null && message.hasOwnProperty("max_start_time"))
                    object.max_start_time = message.max_start_time;
                if (message.group_list && message.group_list.length) {
                    object.group_list = [];
                    for (var j = 0; j < message.group_list.length; ++j)
                        object.group_list[j] = $root.CMsgDOTATournamentInfo.PhaseGroup.toObject(message.group_list[j], options);
                }
                return object;
            };
    
            /**
             * Converts this Phase to JSON.
             * @function toJSON
             * @memberof CMsgDOTATournamentInfo.Phase
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Phase.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Phase;
        })();
    
        CMsgDOTATournamentInfo.Team = (function() {
    
            /**
             * Properties of a Team.
             * @memberof CMsgDOTATournamentInfo
             * @interface ITeam
             * @property {number|null} [team_id] Team team_id
             * @property {string|null} [name] Team name
             * @property {string|null} [tag] Team tag
             * @property {number|Long|null} [team_logo] Team team_logo
             * @property {boolean|null} [eliminated] Team eliminated
             */
    
            /**
             * Constructs a new Team.
             * @memberof CMsgDOTATournamentInfo
             * @classdesc Represents a Team.
             * @implements ITeam
             * @constructor
             * @param {CMsgDOTATournamentInfo.ITeam=} [properties] Properties to set
             */
            function Team(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Team team_id.
             * @member {number} team_id
             * @memberof CMsgDOTATournamentInfo.Team
             * @instance
             */
            Team.prototype.team_id = 0;
    
            /**
             * Team name.
             * @member {string} name
             * @memberof CMsgDOTATournamentInfo.Team
             * @instance
             */
            Team.prototype.name = "";
    
            /**
             * Team tag.
             * @member {string} tag
             * @memberof CMsgDOTATournamentInfo.Team
             * @instance
             */
            Team.prototype.tag = "";
    
            /**
             * Team team_logo.
             * @member {number|Long} team_logo
             * @memberof CMsgDOTATournamentInfo.Team
             * @instance
             */
            Team.prototype.team_logo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Team eliminated.
             * @member {boolean} eliminated
             * @memberof CMsgDOTATournamentInfo.Team
             * @instance
             */
            Team.prototype.eliminated = false;
    
            /**
             * Creates a new Team instance using the specified properties.
             * @function create
             * @memberof CMsgDOTATournamentInfo.Team
             * @static
             * @param {CMsgDOTATournamentInfo.ITeam=} [properties] Properties to set
             * @returns {CMsgDOTATournamentInfo.Team} Team instance
             */
            Team.create = function create(properties) {
                return new Team(properties);
            };
    
            /**
             * Encodes the specified Team message. Does not implicitly {@link CMsgDOTATournamentInfo.Team.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTATournamentInfo.Team
             * @static
             * @param {CMsgDOTATournamentInfo.ITeam} message Team message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Team.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.team_id != null && Object.hasOwnProperty.call(message, "team_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.team_id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.tag);
                if (message.team_logo != null && Object.hasOwnProperty.call(message, "team_logo"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.team_logo);
                if (message.eliminated != null && Object.hasOwnProperty.call(message, "eliminated"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.eliminated);
                return writer;
            };
    
            /**
             * Encodes the specified Team message, length delimited. Does not implicitly {@link CMsgDOTATournamentInfo.Team.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTATournamentInfo.Team
             * @static
             * @param {CMsgDOTATournamentInfo.ITeam} message Team message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Team.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Team message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTATournamentInfo.Team
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTATournamentInfo.Team} Team
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Team.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTATournamentInfo.Team();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.team_id = reader.uint32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.tag = reader.string();
                        break;
                    case 4:
                        message.team_logo = reader.uint64();
                        break;
                    case 5:
                        message.eliminated = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Team message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTATournamentInfo.Team
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTATournamentInfo.Team} Team
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Team.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Team message.
             * @function verify
             * @memberof CMsgDOTATournamentInfo.Team
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Team.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.team_id != null && message.hasOwnProperty("team_id"))
                    if (!$util.isInteger(message.team_id))
                        return "team_id: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.tag != null && message.hasOwnProperty("tag"))
                    if (!$util.isString(message.tag))
                        return "tag: string expected";
                if (message.team_logo != null && message.hasOwnProperty("team_logo"))
                    if (!$util.isInteger(message.team_logo) && !(message.team_logo && $util.isInteger(message.team_logo.low) && $util.isInteger(message.team_logo.high)))
                        return "team_logo: integer|Long expected";
                if (message.eliminated != null && message.hasOwnProperty("eliminated"))
                    if (typeof message.eliminated !== "boolean")
                        return "eliminated: boolean expected";
                return null;
            };
    
            /**
             * Creates a Team message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTATournamentInfo.Team
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTATournamentInfo.Team} Team
             */
            Team.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTATournamentInfo.Team)
                    return object;
                var message = new $root.CMsgDOTATournamentInfo.Team();
                if (object.team_id != null)
                    message.team_id = object.team_id >>> 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.tag != null)
                    message.tag = String(object.tag);
                if (object.team_logo != null)
                    if ($util.Long)
                        (message.team_logo = $util.Long.fromValue(object.team_logo)).unsigned = true;
                    else if (typeof object.team_logo === "string")
                        message.team_logo = parseInt(object.team_logo, 10);
                    else if (typeof object.team_logo === "number")
                        message.team_logo = object.team_logo;
                    else if (typeof object.team_logo === "object")
                        message.team_logo = new $util.LongBits(object.team_logo.low >>> 0, object.team_logo.high >>> 0).toNumber(true);
                if (object.eliminated != null)
                    message.eliminated = Boolean(object.eliminated);
                return message;
            };
    
            /**
             * Creates a plain object from a Team message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTATournamentInfo.Team
             * @static
             * @param {CMsgDOTATournamentInfo.Team} message Team
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Team.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.team_id = 0;
                    object.name = "";
                    object.tag = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.team_logo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.team_logo = options.longs === String ? "0" : 0;
                    object.eliminated = false;
                }
                if (message.team_id != null && message.hasOwnProperty("team_id"))
                    object.team_id = message.team_id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.tag != null && message.hasOwnProperty("tag"))
                    object.tag = message.tag;
                if (message.team_logo != null && message.hasOwnProperty("team_logo"))
                    if (typeof message.team_logo === "number")
                        object.team_logo = options.longs === String ? String(message.team_logo) : message.team_logo;
                    else
                        object.team_logo = options.longs === String ? $util.Long.prototype.toString.call(message.team_logo) : options.longs === Number ? new $util.LongBits(message.team_logo.low >>> 0, message.team_logo.high >>> 0).toNumber(true) : message.team_logo;
                if (message.eliminated != null && message.hasOwnProperty("eliminated"))
                    object.eliminated = message.eliminated;
                return object;
            };
    
            /**
             * Converts this Team to JSON.
             * @function toJSON
             * @memberof CMsgDOTATournamentInfo.Team
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Team.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Team;
        })();
    
        CMsgDOTATournamentInfo.UpcomingMatch = (function() {
    
            /**
             * Properties of an UpcomingMatch.
             * @memberof CMsgDOTATournamentInfo
             * @interface IUpcomingMatch
             * @property {number|null} [series_id] UpcomingMatch series_id
             * @property {number|null} [team1_id] UpcomingMatch team1_id
             * @property {number|null} [team2_id] UpcomingMatch team2_id
             * @property {number|null} [bo] UpcomingMatch bo
             * @property {string|null} [stage_name] UpcomingMatch stage_name
             * @property {number|null} [start_time] UpcomingMatch start_time
             * @property {string|null} [winner_stage] UpcomingMatch winner_stage
             * @property {string|null} [loser_stage] UpcomingMatch loser_stage
             * @property {string|null} [team1_tag] UpcomingMatch team1_tag
             * @property {string|null} [team2_tag] UpcomingMatch team2_tag
             * @property {string|null} [team1_prev_opponent_tag] UpcomingMatch team1_prev_opponent_tag
             * @property {string|null} [team2_prev_opponent_tag] UpcomingMatch team2_prev_opponent_tag
             * @property {number|Long|null} [team1_logo] UpcomingMatch team1_logo
             * @property {number|Long|null} [team2_logo] UpcomingMatch team2_logo
             * @property {number|Long|null} [team1_prev_opponent_logo] UpcomingMatch team1_prev_opponent_logo
             * @property {number|Long|null} [team2_prev_opponent_logo] UpcomingMatch team2_prev_opponent_logo
             * @property {number|null} [team1_prev_opponent_id] UpcomingMatch team1_prev_opponent_id
             * @property {number|null} [team2_prev_opponent_id] UpcomingMatch team2_prev_opponent_id
             * @property {number|null} [team1_prev_match_score] UpcomingMatch team1_prev_match_score
             * @property {number|null} [team1_prev_match_opponent_score] UpcomingMatch team1_prev_match_opponent_score
             * @property {number|null} [team2_prev_match_score] UpcomingMatch team2_prev_match_score
             * @property {number|null} [team2_prev_match_opponent_score] UpcomingMatch team2_prev_match_opponent_score
             * @property {number|null} [phase_type] UpcomingMatch phase_type
             * @property {number|null} [team1_score] UpcomingMatch team1_score
             * @property {number|null} [team2_score] UpcomingMatch team2_score
             * @property {number|null} [phase_id] UpcomingMatch phase_id
             */
    
            /**
             * Constructs a new UpcomingMatch.
             * @memberof CMsgDOTATournamentInfo
             * @classdesc Represents an UpcomingMatch.
             * @implements IUpcomingMatch
             * @constructor
             * @param {CMsgDOTATournamentInfo.IUpcomingMatch=} [properties] Properties to set
             */
            function UpcomingMatch(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UpcomingMatch series_id.
             * @member {number} series_id
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.series_id = 0;
    
            /**
             * UpcomingMatch team1_id.
             * @member {number} team1_id
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team1_id = 0;
    
            /**
             * UpcomingMatch team2_id.
             * @member {number} team2_id
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team2_id = 0;
    
            /**
             * UpcomingMatch bo.
             * @member {number} bo
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.bo = 0;
    
            /**
             * UpcomingMatch stage_name.
             * @member {string} stage_name
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.stage_name = "";
    
            /**
             * UpcomingMatch start_time.
             * @member {number} start_time
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.start_time = 0;
    
            /**
             * UpcomingMatch winner_stage.
             * @member {string} winner_stage
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.winner_stage = "";
    
            /**
             * UpcomingMatch loser_stage.
             * @member {string} loser_stage
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.loser_stage = "";
    
            /**
             * UpcomingMatch team1_tag.
             * @member {string} team1_tag
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team1_tag = "";
    
            /**
             * UpcomingMatch team2_tag.
             * @member {string} team2_tag
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team2_tag = "";
    
            /**
             * UpcomingMatch team1_prev_opponent_tag.
             * @member {string} team1_prev_opponent_tag
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team1_prev_opponent_tag = "";
    
            /**
             * UpcomingMatch team2_prev_opponent_tag.
             * @member {string} team2_prev_opponent_tag
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team2_prev_opponent_tag = "";
    
            /**
             * UpcomingMatch team1_logo.
             * @member {number|Long} team1_logo
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team1_logo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * UpcomingMatch team2_logo.
             * @member {number|Long} team2_logo
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team2_logo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * UpcomingMatch team1_prev_opponent_logo.
             * @member {number|Long} team1_prev_opponent_logo
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team1_prev_opponent_logo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * UpcomingMatch team2_prev_opponent_logo.
             * @member {number|Long} team2_prev_opponent_logo
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team2_prev_opponent_logo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * UpcomingMatch team1_prev_opponent_id.
             * @member {number} team1_prev_opponent_id
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team1_prev_opponent_id = 0;
    
            /**
             * UpcomingMatch team2_prev_opponent_id.
             * @member {number} team2_prev_opponent_id
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team2_prev_opponent_id = 0;
    
            /**
             * UpcomingMatch team1_prev_match_score.
             * @member {number} team1_prev_match_score
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team1_prev_match_score = 0;
    
            /**
             * UpcomingMatch team1_prev_match_opponent_score.
             * @member {number} team1_prev_match_opponent_score
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team1_prev_match_opponent_score = 0;
    
            /**
             * UpcomingMatch team2_prev_match_score.
             * @member {number} team2_prev_match_score
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team2_prev_match_score = 0;
    
            /**
             * UpcomingMatch team2_prev_match_opponent_score.
             * @member {number} team2_prev_match_opponent_score
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team2_prev_match_opponent_score = 0;
    
            /**
             * UpcomingMatch phase_type.
             * @member {number} phase_type
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.phase_type = 0;
    
            /**
             * UpcomingMatch team1_score.
             * @member {number} team1_score
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team1_score = 0;
    
            /**
             * UpcomingMatch team2_score.
             * @member {number} team2_score
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.team2_score = 0;
    
            /**
             * UpcomingMatch phase_id.
             * @member {number} phase_id
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             */
            UpcomingMatch.prototype.phase_id = 0;
    
            /**
             * Creates a new UpcomingMatch instance using the specified properties.
             * @function create
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @static
             * @param {CMsgDOTATournamentInfo.IUpcomingMatch=} [properties] Properties to set
             * @returns {CMsgDOTATournamentInfo.UpcomingMatch} UpcomingMatch instance
             */
            UpcomingMatch.create = function create(properties) {
                return new UpcomingMatch(properties);
            };
    
            /**
             * Encodes the specified UpcomingMatch message. Does not implicitly {@link CMsgDOTATournamentInfo.UpcomingMatch.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @static
             * @param {CMsgDOTATournamentInfo.IUpcomingMatch} message UpcomingMatch message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpcomingMatch.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.series_id != null && Object.hasOwnProperty.call(message, "series_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.series_id);
                if (message.team1_id != null && Object.hasOwnProperty.call(message, "team1_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.team1_id);
                if (message.team2_id != null && Object.hasOwnProperty.call(message, "team2_id"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.team2_id);
                if (message.bo != null && Object.hasOwnProperty.call(message, "bo"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.bo);
                if (message.stage_name != null && Object.hasOwnProperty.call(message, "stage_name"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.stage_name);
                if (message.start_time != null && Object.hasOwnProperty.call(message, "start_time"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.start_time);
                if (message.winner_stage != null && Object.hasOwnProperty.call(message, "winner_stage"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.winner_stage);
                if (message.loser_stage != null && Object.hasOwnProperty.call(message, "loser_stage"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.loser_stage);
                if (message.team1_tag != null && Object.hasOwnProperty.call(message, "team1_tag"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.team1_tag);
                if (message.team2_tag != null && Object.hasOwnProperty.call(message, "team2_tag"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.team2_tag);
                if (message.team1_prev_opponent_tag != null && Object.hasOwnProperty.call(message, "team1_prev_opponent_tag"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.team1_prev_opponent_tag);
                if (message.team2_prev_opponent_tag != null && Object.hasOwnProperty.call(message, "team2_prev_opponent_tag"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.team2_prev_opponent_tag);
                if (message.team1_logo != null && Object.hasOwnProperty.call(message, "team1_logo"))
                    writer.uint32(/* id 13, wireType 0 =*/104).uint64(message.team1_logo);
                if (message.team2_logo != null && Object.hasOwnProperty.call(message, "team2_logo"))
                    writer.uint32(/* id 14, wireType 0 =*/112).uint64(message.team2_logo);
                if (message.team1_prev_opponent_logo != null && Object.hasOwnProperty.call(message, "team1_prev_opponent_logo"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint64(message.team1_prev_opponent_logo);
                if (message.team2_prev_opponent_logo != null && Object.hasOwnProperty.call(message, "team2_prev_opponent_logo"))
                    writer.uint32(/* id 16, wireType 0 =*/128).uint64(message.team2_prev_opponent_logo);
                if (message.team1_prev_opponent_id != null && Object.hasOwnProperty.call(message, "team1_prev_opponent_id"))
                    writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.team1_prev_opponent_id);
                if (message.team2_prev_opponent_id != null && Object.hasOwnProperty.call(message, "team2_prev_opponent_id"))
                    writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.team2_prev_opponent_id);
                if (message.team1_prev_match_score != null && Object.hasOwnProperty.call(message, "team1_prev_match_score"))
                    writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.team1_prev_match_score);
                if (message.team1_prev_match_opponent_score != null && Object.hasOwnProperty.call(message, "team1_prev_match_opponent_score"))
                    writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.team1_prev_match_opponent_score);
                if (message.team2_prev_match_score != null && Object.hasOwnProperty.call(message, "team2_prev_match_score"))
                    writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.team2_prev_match_score);
                if (message.team2_prev_match_opponent_score != null && Object.hasOwnProperty.call(message, "team2_prev_match_opponent_score"))
                    writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.team2_prev_match_opponent_score);
                if (message.phase_type != null && Object.hasOwnProperty.call(message, "phase_type"))
                    writer.uint32(/* id 23, wireType 0 =*/184).uint32(message.phase_type);
                if (message.team1_score != null && Object.hasOwnProperty.call(message, "team1_score"))
                    writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.team1_score);
                if (message.team2_score != null && Object.hasOwnProperty.call(message, "team2_score"))
                    writer.uint32(/* id 25, wireType 0 =*/200).uint32(message.team2_score);
                if (message.phase_id != null && Object.hasOwnProperty.call(message, "phase_id"))
                    writer.uint32(/* id 26, wireType 0 =*/208).uint32(message.phase_id);
                return writer;
            };
    
            /**
             * Encodes the specified UpcomingMatch message, length delimited. Does not implicitly {@link CMsgDOTATournamentInfo.UpcomingMatch.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @static
             * @param {CMsgDOTATournamentInfo.IUpcomingMatch} message UpcomingMatch message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpcomingMatch.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an UpcomingMatch message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTATournamentInfo.UpcomingMatch} UpcomingMatch
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpcomingMatch.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTATournamentInfo.UpcomingMatch();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.series_id = reader.uint32();
                        break;
                    case 2:
                        message.team1_id = reader.uint32();
                        break;
                    case 3:
                        message.team2_id = reader.uint32();
                        break;
                    case 4:
                        message.bo = reader.uint32();
                        break;
                    case 5:
                        message.stage_name = reader.string();
                        break;
                    case 6:
                        message.start_time = reader.uint32();
                        break;
                    case 7:
                        message.winner_stage = reader.string();
                        break;
                    case 8:
                        message.loser_stage = reader.string();
                        break;
                    case 9:
                        message.team1_tag = reader.string();
                        break;
                    case 10:
                        message.team2_tag = reader.string();
                        break;
                    case 11:
                        message.team1_prev_opponent_tag = reader.string();
                        break;
                    case 12:
                        message.team2_prev_opponent_tag = reader.string();
                        break;
                    case 13:
                        message.team1_logo = reader.uint64();
                        break;
                    case 14:
                        message.team2_logo = reader.uint64();
                        break;
                    case 15:
                        message.team1_prev_opponent_logo = reader.uint64();
                        break;
                    case 16:
                        message.team2_prev_opponent_logo = reader.uint64();
                        break;
                    case 17:
                        message.team1_prev_opponent_id = reader.uint32();
                        break;
                    case 18:
                        message.team2_prev_opponent_id = reader.uint32();
                        break;
                    case 19:
                        message.team1_prev_match_score = reader.uint32();
                        break;
                    case 20:
                        message.team1_prev_match_opponent_score = reader.uint32();
                        break;
                    case 21:
                        message.team2_prev_match_score = reader.uint32();
                        break;
                    case 22:
                        message.team2_prev_match_opponent_score = reader.uint32();
                        break;
                    case 23:
                        message.phase_type = reader.uint32();
                        break;
                    case 24:
                        message.team1_score = reader.uint32();
                        break;
                    case 25:
                        message.team2_score = reader.uint32();
                        break;
                    case 26:
                        message.phase_id = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an UpcomingMatch message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTATournamentInfo.UpcomingMatch} UpcomingMatch
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpcomingMatch.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an UpcomingMatch message.
             * @function verify
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpcomingMatch.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.series_id != null && message.hasOwnProperty("series_id"))
                    if (!$util.isInteger(message.series_id))
                        return "series_id: integer expected";
                if (message.team1_id != null && message.hasOwnProperty("team1_id"))
                    if (!$util.isInteger(message.team1_id))
                        return "team1_id: integer expected";
                if (message.team2_id != null && message.hasOwnProperty("team2_id"))
                    if (!$util.isInteger(message.team2_id))
                        return "team2_id: integer expected";
                if (message.bo != null && message.hasOwnProperty("bo"))
                    if (!$util.isInteger(message.bo))
                        return "bo: integer expected";
                if (message.stage_name != null && message.hasOwnProperty("stage_name"))
                    if (!$util.isString(message.stage_name))
                        return "stage_name: string expected";
                if (message.start_time != null && message.hasOwnProperty("start_time"))
                    if (!$util.isInteger(message.start_time))
                        return "start_time: integer expected";
                if (message.winner_stage != null && message.hasOwnProperty("winner_stage"))
                    if (!$util.isString(message.winner_stage))
                        return "winner_stage: string expected";
                if (message.loser_stage != null && message.hasOwnProperty("loser_stage"))
                    if (!$util.isString(message.loser_stage))
                        return "loser_stage: string expected";
                if (message.team1_tag != null && message.hasOwnProperty("team1_tag"))
                    if (!$util.isString(message.team1_tag))
                        return "team1_tag: string expected";
                if (message.team2_tag != null && message.hasOwnProperty("team2_tag"))
                    if (!$util.isString(message.team2_tag))
                        return "team2_tag: string expected";
                if (message.team1_prev_opponent_tag != null && message.hasOwnProperty("team1_prev_opponent_tag"))
                    if (!$util.isString(message.team1_prev_opponent_tag))
                        return "team1_prev_opponent_tag: string expected";
                if (message.team2_prev_opponent_tag != null && message.hasOwnProperty("team2_prev_opponent_tag"))
                    if (!$util.isString(message.team2_prev_opponent_tag))
                        return "team2_prev_opponent_tag: string expected";
                if (message.team1_logo != null && message.hasOwnProperty("team1_logo"))
                    if (!$util.isInteger(message.team1_logo) && !(message.team1_logo && $util.isInteger(message.team1_logo.low) && $util.isInteger(message.team1_logo.high)))
                        return "team1_logo: integer|Long expected";
                if (message.team2_logo != null && message.hasOwnProperty("team2_logo"))
                    if (!$util.isInteger(message.team2_logo) && !(message.team2_logo && $util.isInteger(message.team2_logo.low) && $util.isInteger(message.team2_logo.high)))
                        return "team2_logo: integer|Long expected";
                if (message.team1_prev_opponent_logo != null && message.hasOwnProperty("team1_prev_opponent_logo"))
                    if (!$util.isInteger(message.team1_prev_opponent_logo) && !(message.team1_prev_opponent_logo && $util.isInteger(message.team1_prev_opponent_logo.low) && $util.isInteger(message.team1_prev_opponent_logo.high)))
                        return "team1_prev_opponent_logo: integer|Long expected";
                if (message.team2_prev_opponent_logo != null && message.hasOwnProperty("team2_prev_opponent_logo"))
                    if (!$util.isInteger(message.team2_prev_opponent_logo) && !(message.team2_prev_opponent_logo && $util.isInteger(message.team2_prev_opponent_logo.low) && $util.isInteger(message.team2_prev_opponent_logo.high)))
                        return "team2_prev_opponent_logo: integer|Long expected";
                if (message.team1_prev_opponent_id != null && message.hasOwnProperty("team1_prev_opponent_id"))
                    if (!$util.isInteger(message.team1_prev_opponent_id))
                        return "team1_prev_opponent_id: integer expected";
                if (message.team2_prev_opponent_id != null && message.hasOwnProperty("team2_prev_opponent_id"))
                    if (!$util.isInteger(message.team2_prev_opponent_id))
                        return "team2_prev_opponent_id: integer expected";
                if (message.team1_prev_match_score != null && message.hasOwnProperty("team1_prev_match_score"))
                    if (!$util.isInteger(message.team1_prev_match_score))
                        return "team1_prev_match_score: integer expected";
                if (message.team1_prev_match_opponent_score != null && message.hasOwnProperty("team1_prev_match_opponent_score"))
                    if (!$util.isInteger(message.team1_prev_match_opponent_score))
                        return "team1_prev_match_opponent_score: integer expected";
                if (message.team2_prev_match_score != null && message.hasOwnProperty("team2_prev_match_score"))
                    if (!$util.isInteger(message.team2_prev_match_score))
                        return "team2_prev_match_score: integer expected";
                if (message.team2_prev_match_opponent_score != null && message.hasOwnProperty("team2_prev_match_opponent_score"))
                    if (!$util.isInteger(message.team2_prev_match_opponent_score))
                        return "team2_prev_match_opponent_score: integer expected";
                if (message.phase_type != null && message.hasOwnProperty("phase_type"))
                    if (!$util.isInteger(message.phase_type))
                        return "phase_type: integer expected";
                if (message.team1_score != null && message.hasOwnProperty("team1_score"))
                    if (!$util.isInteger(message.team1_score))
                        return "team1_score: integer expected";
                if (message.team2_score != null && message.hasOwnProperty("team2_score"))
                    if (!$util.isInteger(message.team2_score))
                        return "team2_score: integer expected";
                if (message.phase_id != null && message.hasOwnProperty("phase_id"))
                    if (!$util.isInteger(message.phase_id))
                        return "phase_id: integer expected";
                return null;
            };
    
            /**
             * Creates an UpcomingMatch message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTATournamentInfo.UpcomingMatch} UpcomingMatch
             */
            UpcomingMatch.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTATournamentInfo.UpcomingMatch)
                    return object;
                var message = new $root.CMsgDOTATournamentInfo.UpcomingMatch();
                if (object.series_id != null)
                    message.series_id = object.series_id >>> 0;
                if (object.team1_id != null)
                    message.team1_id = object.team1_id >>> 0;
                if (object.team2_id != null)
                    message.team2_id = object.team2_id >>> 0;
                if (object.bo != null)
                    message.bo = object.bo >>> 0;
                if (object.stage_name != null)
                    message.stage_name = String(object.stage_name);
                if (object.start_time != null)
                    message.start_time = object.start_time >>> 0;
                if (object.winner_stage != null)
                    message.winner_stage = String(object.winner_stage);
                if (object.loser_stage != null)
                    message.loser_stage = String(object.loser_stage);
                if (object.team1_tag != null)
                    message.team1_tag = String(object.team1_tag);
                if (object.team2_tag != null)
                    message.team2_tag = String(object.team2_tag);
                if (object.team1_prev_opponent_tag != null)
                    message.team1_prev_opponent_tag = String(object.team1_prev_opponent_tag);
                if (object.team2_prev_opponent_tag != null)
                    message.team2_prev_opponent_tag = String(object.team2_prev_opponent_tag);
                if (object.team1_logo != null)
                    if ($util.Long)
                        (message.team1_logo = $util.Long.fromValue(object.team1_logo)).unsigned = true;
                    else if (typeof object.team1_logo === "string")
                        message.team1_logo = parseInt(object.team1_logo, 10);
                    else if (typeof object.team1_logo === "number")
                        message.team1_logo = object.team1_logo;
                    else if (typeof object.team1_logo === "object")
                        message.team1_logo = new $util.LongBits(object.team1_logo.low >>> 0, object.team1_logo.high >>> 0).toNumber(true);
                if (object.team2_logo != null)
                    if ($util.Long)
                        (message.team2_logo = $util.Long.fromValue(object.team2_logo)).unsigned = true;
                    else if (typeof object.team2_logo === "string")
                        message.team2_logo = parseInt(object.team2_logo, 10);
                    else if (typeof object.team2_logo === "number")
                        message.team2_logo = object.team2_logo;
                    else if (typeof object.team2_logo === "object")
                        message.team2_logo = new $util.LongBits(object.team2_logo.low >>> 0, object.team2_logo.high >>> 0).toNumber(true);
                if (object.team1_prev_opponent_logo != null)
                    if ($util.Long)
                        (message.team1_prev_opponent_logo = $util.Long.fromValue(object.team1_prev_opponent_logo)).unsigned = true;
                    else if (typeof object.team1_prev_opponent_logo === "string")
                        message.team1_prev_opponent_logo = parseInt(object.team1_prev_opponent_logo, 10);
                    else if (typeof object.team1_prev_opponent_logo === "number")
                        message.team1_prev_opponent_logo = object.team1_prev_opponent_logo;
                    else if (typeof object.team1_prev_opponent_logo === "object")
                        message.team1_prev_opponent_logo = new $util.LongBits(object.team1_prev_opponent_logo.low >>> 0, object.team1_prev_opponent_logo.high >>> 0).toNumber(true);
                if (object.team2_prev_opponent_logo != null)
                    if ($util.Long)
                        (message.team2_prev_opponent_logo = $util.Long.fromValue(object.team2_prev_opponent_logo)).unsigned = true;
                    else if (typeof object.team2_prev_opponent_logo === "string")
                        message.team2_prev_opponent_logo = parseInt(object.team2_prev_opponent_logo, 10);
                    else if (typeof object.team2_prev_opponent_logo === "number")
                        message.team2_prev_opponent_logo = object.team2_prev_opponent_logo;
                    else if (typeof object.team2_prev_opponent_logo === "object")
                        message.team2_prev_opponent_logo = new $util.LongBits(object.team2_prev_opponent_logo.low >>> 0, object.team2_prev_opponent_logo.high >>> 0).toNumber(true);
                if (object.team1_prev_opponent_id != null)
                    message.team1_prev_opponent_id = object.team1_prev_opponent_id >>> 0;
                if (object.team2_prev_opponent_id != null)
                    message.team2_prev_opponent_id = object.team2_prev_opponent_id >>> 0;
                if (object.team1_prev_match_score != null)
                    message.team1_prev_match_score = object.team1_prev_match_score >>> 0;
                if (object.team1_prev_match_opponent_score != null)
                    message.team1_prev_match_opponent_score = object.team1_prev_match_opponent_score >>> 0;
                if (object.team2_prev_match_score != null)
                    message.team2_prev_match_score = object.team2_prev_match_score >>> 0;
                if (object.team2_prev_match_opponent_score != null)
                    message.team2_prev_match_opponent_score = object.team2_prev_match_opponent_score >>> 0;
                if (object.phase_type != null)
                    message.phase_type = object.phase_type >>> 0;
                if (object.team1_score != null)
                    message.team1_score = object.team1_score >>> 0;
                if (object.team2_score != null)
                    message.team2_score = object.team2_score >>> 0;
                if (object.phase_id != null)
                    message.phase_id = object.phase_id >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from an UpcomingMatch message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @static
             * @param {CMsgDOTATournamentInfo.UpcomingMatch} message UpcomingMatch
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpcomingMatch.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.series_id = 0;
                    object.team1_id = 0;
                    object.team2_id = 0;
                    object.bo = 0;
                    object.stage_name = "";
                    object.start_time = 0;
                    object.winner_stage = "";
                    object.loser_stage = "";
                    object.team1_tag = "";
                    object.team2_tag = "";
                    object.team1_prev_opponent_tag = "";
                    object.team2_prev_opponent_tag = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.team1_logo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.team1_logo = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.team2_logo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.team2_logo = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.team1_prev_opponent_logo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.team1_prev_opponent_logo = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.team2_prev_opponent_logo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.team2_prev_opponent_logo = options.longs === String ? "0" : 0;
                    object.team1_prev_opponent_id = 0;
                    object.team2_prev_opponent_id = 0;
                    object.team1_prev_match_score = 0;
                    object.team1_prev_match_opponent_score = 0;
                    object.team2_prev_match_score = 0;
                    object.team2_prev_match_opponent_score = 0;
                    object.phase_type = 0;
                    object.team1_score = 0;
                    object.team2_score = 0;
                    object.phase_id = 0;
                }
                if (message.series_id != null && message.hasOwnProperty("series_id"))
                    object.series_id = message.series_id;
                if (message.team1_id != null && message.hasOwnProperty("team1_id"))
                    object.team1_id = message.team1_id;
                if (message.team2_id != null && message.hasOwnProperty("team2_id"))
                    object.team2_id = message.team2_id;
                if (message.bo != null && message.hasOwnProperty("bo"))
                    object.bo = message.bo;
                if (message.stage_name != null && message.hasOwnProperty("stage_name"))
                    object.stage_name = message.stage_name;
                if (message.start_time != null && message.hasOwnProperty("start_time"))
                    object.start_time = message.start_time;
                if (message.winner_stage != null && message.hasOwnProperty("winner_stage"))
                    object.winner_stage = message.winner_stage;
                if (message.loser_stage != null && message.hasOwnProperty("loser_stage"))
                    object.loser_stage = message.loser_stage;
                if (message.team1_tag != null && message.hasOwnProperty("team1_tag"))
                    object.team1_tag = message.team1_tag;
                if (message.team2_tag != null && message.hasOwnProperty("team2_tag"))
                    object.team2_tag = message.team2_tag;
                if (message.team1_prev_opponent_tag != null && message.hasOwnProperty("team1_prev_opponent_tag"))
                    object.team1_prev_opponent_tag = message.team1_prev_opponent_tag;
                if (message.team2_prev_opponent_tag != null && message.hasOwnProperty("team2_prev_opponent_tag"))
                    object.team2_prev_opponent_tag = message.team2_prev_opponent_tag;
                if (message.team1_logo != null && message.hasOwnProperty("team1_logo"))
                    if (typeof message.team1_logo === "number")
                        object.team1_logo = options.longs === String ? String(message.team1_logo) : message.team1_logo;
                    else
                        object.team1_logo = options.longs === String ? $util.Long.prototype.toString.call(message.team1_logo) : options.longs === Number ? new $util.LongBits(message.team1_logo.low >>> 0, message.team1_logo.high >>> 0).toNumber(true) : message.team1_logo;
                if (message.team2_logo != null && message.hasOwnProperty("team2_logo"))
                    if (typeof message.team2_logo === "number")
                        object.team2_logo = options.longs === String ? String(message.team2_logo) : message.team2_logo;
                    else
                        object.team2_logo = options.longs === String ? $util.Long.prototype.toString.call(message.team2_logo) : options.longs === Number ? new $util.LongBits(message.team2_logo.low >>> 0, message.team2_logo.high >>> 0).toNumber(true) : message.team2_logo;
                if (message.team1_prev_opponent_logo != null && message.hasOwnProperty("team1_prev_opponent_logo"))
                    if (typeof message.team1_prev_opponent_logo === "number")
                        object.team1_prev_opponent_logo = options.longs === String ? String(message.team1_prev_opponent_logo) : message.team1_prev_opponent_logo;
                    else
                        object.team1_prev_opponent_logo = options.longs === String ? $util.Long.prototype.toString.call(message.team1_prev_opponent_logo) : options.longs === Number ? new $util.LongBits(message.team1_prev_opponent_logo.low >>> 0, message.team1_prev_opponent_logo.high >>> 0).toNumber(true) : message.team1_prev_opponent_logo;
                if (message.team2_prev_opponent_logo != null && message.hasOwnProperty("team2_prev_opponent_logo"))
                    if (typeof message.team2_prev_opponent_logo === "number")
                        object.team2_prev_opponent_logo = options.longs === String ? String(message.team2_prev_opponent_logo) : message.team2_prev_opponent_logo;
                    else
                        object.team2_prev_opponent_logo = options.longs === String ? $util.Long.prototype.toString.call(message.team2_prev_opponent_logo) : options.longs === Number ? new $util.LongBits(message.team2_prev_opponent_logo.low >>> 0, message.team2_prev_opponent_logo.high >>> 0).toNumber(true) : message.team2_prev_opponent_logo;
                if (message.team1_prev_opponent_id != null && message.hasOwnProperty("team1_prev_opponent_id"))
                    object.team1_prev_opponent_id = message.team1_prev_opponent_id;
                if (message.team2_prev_opponent_id != null && message.hasOwnProperty("team2_prev_opponent_id"))
                    object.team2_prev_opponent_id = message.team2_prev_opponent_id;
                if (message.team1_prev_match_score != null && message.hasOwnProperty("team1_prev_match_score"))
                    object.team1_prev_match_score = message.team1_prev_match_score;
                if (message.team1_prev_match_opponent_score != null && message.hasOwnProperty("team1_prev_match_opponent_score"))
                    object.team1_prev_match_opponent_score = message.team1_prev_match_opponent_score;
                if (message.team2_prev_match_score != null && message.hasOwnProperty("team2_prev_match_score"))
                    object.team2_prev_match_score = message.team2_prev_match_score;
                if (message.team2_prev_match_opponent_score != null && message.hasOwnProperty("team2_prev_match_opponent_score"))
                    object.team2_prev_match_opponent_score = message.team2_prev_match_opponent_score;
                if (message.phase_type != null && message.hasOwnProperty("phase_type"))
                    object.phase_type = message.phase_type;
                if (message.team1_score != null && message.hasOwnProperty("team1_score"))
                    object.team1_score = message.team1_score;
                if (message.team2_score != null && message.hasOwnProperty("team2_score"))
                    object.team2_score = message.team2_score;
                if (message.phase_id != null && message.hasOwnProperty("phase_id"))
                    object.phase_id = message.phase_id;
                return object;
            };
    
            /**
             * Converts this UpcomingMatch to JSON.
             * @function toJSON
             * @memberof CMsgDOTATournamentInfo.UpcomingMatch
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpcomingMatch.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UpcomingMatch;
        })();
    
        CMsgDOTATournamentInfo.News = (function() {
    
            /**
             * Properties of a News.
             * @memberof CMsgDOTATournamentInfo
             * @interface INews
             * @property {string|null} [link] News link
             * @property {string|null} [title] News title
             * @property {string|null} [image] News image
             * @property {number|null} [timestamp] News timestamp
             */
    
            /**
             * Constructs a new News.
             * @memberof CMsgDOTATournamentInfo
             * @classdesc Represents a News.
             * @implements INews
             * @constructor
             * @param {CMsgDOTATournamentInfo.INews=} [properties] Properties to set
             */
            function News(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * News link.
             * @member {string} link
             * @memberof CMsgDOTATournamentInfo.News
             * @instance
             */
            News.prototype.link = "";
    
            /**
             * News title.
             * @member {string} title
             * @memberof CMsgDOTATournamentInfo.News
             * @instance
             */
            News.prototype.title = "";
    
            /**
             * News image.
             * @member {string} image
             * @memberof CMsgDOTATournamentInfo.News
             * @instance
             */
            News.prototype.image = "";
    
            /**
             * News timestamp.
             * @member {number} timestamp
             * @memberof CMsgDOTATournamentInfo.News
             * @instance
             */
            News.prototype.timestamp = 0;
    
            /**
             * Creates a new News instance using the specified properties.
             * @function create
             * @memberof CMsgDOTATournamentInfo.News
             * @static
             * @param {CMsgDOTATournamentInfo.INews=} [properties] Properties to set
             * @returns {CMsgDOTATournamentInfo.News} News instance
             */
            News.create = function create(properties) {
                return new News(properties);
            };
    
            /**
             * Encodes the specified News message. Does not implicitly {@link CMsgDOTATournamentInfo.News.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTATournamentInfo.News
             * @static
             * @param {CMsgDOTATournamentInfo.INews} message News message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            News.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.link != null && Object.hasOwnProperty.call(message, "link"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.link);
                if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
                if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.image);
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.timestamp);
                return writer;
            };
    
            /**
             * Encodes the specified News message, length delimited. Does not implicitly {@link CMsgDOTATournamentInfo.News.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTATournamentInfo.News
             * @static
             * @param {CMsgDOTATournamentInfo.INews} message News message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            News.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a News message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTATournamentInfo.News
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTATournamentInfo.News} News
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            News.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTATournamentInfo.News();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.link = reader.string();
                        break;
                    case 2:
                        message.title = reader.string();
                        break;
                    case 3:
                        message.image = reader.string();
                        break;
                    case 4:
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
             * Decodes a News message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTATournamentInfo.News
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTATournamentInfo.News} News
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            News.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a News message.
             * @function verify
             * @memberof CMsgDOTATournamentInfo.News
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            News.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.link != null && message.hasOwnProperty("link"))
                    if (!$util.isString(message.link))
                        return "link: string expected";
                if (message.title != null && message.hasOwnProperty("title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.image != null && message.hasOwnProperty("image"))
                    if (!$util.isString(message.image))
                        return "image: string expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp))
                        return "timestamp: integer expected";
                return null;
            };
    
            /**
             * Creates a News message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTATournamentInfo.News
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTATournamentInfo.News} News
             */
            News.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTATournamentInfo.News)
                    return object;
                var message = new $root.CMsgDOTATournamentInfo.News();
                if (object.link != null)
                    message.link = String(object.link);
                if (object.title != null)
                    message.title = String(object.title);
                if (object.image != null)
                    message.image = String(object.image);
                if (object.timestamp != null)
                    message.timestamp = object.timestamp >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a News message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTATournamentInfo.News
             * @static
             * @param {CMsgDOTATournamentInfo.News} message News
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            News.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.link = "";
                    object.title = "";
                    object.image = "";
                    object.timestamp = 0;
                }
                if (message.link != null && message.hasOwnProperty("link"))
                    object.link = message.link;
                if (message.title != null && message.hasOwnProperty("title"))
                    object.title = message.title;
                if (message.image != null && message.hasOwnProperty("image"))
                    object.image = message.image;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = message.timestamp;
                return object;
            };
    
            /**
             * Converts this News to JSON.
             * @function toJSON
             * @memberof CMsgDOTATournamentInfo.News
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            News.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return News;
        })();
    
        return CMsgDOTATournamentInfo;
    })();
    
    $root.CMsgRequestWeekendTourneySchedule = (function() {
    
        /**
         * Properties of a CMsgRequestWeekendTourneySchedule.
         * @exports ICMsgRequestWeekendTourneySchedule
         * @interface ICMsgRequestWeekendTourneySchedule
         */
    
        /**
         * Constructs a new CMsgRequestWeekendTourneySchedule.
         * @exports CMsgRequestWeekendTourneySchedule
         * @classdesc Represents a CMsgRequestWeekendTourneySchedule.
         * @implements ICMsgRequestWeekendTourneySchedule
         * @constructor
         * @param {ICMsgRequestWeekendTourneySchedule=} [properties] Properties to set
         */
        function CMsgRequestWeekendTourneySchedule(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CMsgRequestWeekendTourneySchedule instance using the specified properties.
         * @function create
         * @memberof CMsgRequestWeekendTourneySchedule
         * @static
         * @param {ICMsgRequestWeekendTourneySchedule=} [properties] Properties to set
         * @returns {CMsgRequestWeekendTourneySchedule} CMsgRequestWeekendTourneySchedule instance
         */
        CMsgRequestWeekendTourneySchedule.create = function create(properties) {
            return new CMsgRequestWeekendTourneySchedule(properties);
        };
    
        /**
         * Encodes the specified CMsgRequestWeekendTourneySchedule message. Does not implicitly {@link CMsgRequestWeekendTourneySchedule.verify|verify} messages.
         * @function encode
         * @memberof CMsgRequestWeekendTourneySchedule
         * @static
         * @param {ICMsgRequestWeekendTourneySchedule} message CMsgRequestWeekendTourneySchedule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRequestWeekendTourneySchedule.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRequestWeekendTourneySchedule message, length delimited. Does not implicitly {@link CMsgRequestWeekendTourneySchedule.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRequestWeekendTourneySchedule
         * @static
         * @param {ICMsgRequestWeekendTourneySchedule} message CMsgRequestWeekendTourneySchedule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRequestWeekendTourneySchedule.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRequestWeekendTourneySchedule message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRequestWeekendTourneySchedule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRequestWeekendTourneySchedule} CMsgRequestWeekendTourneySchedule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRequestWeekendTourneySchedule.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRequestWeekendTourneySchedule();
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
         * Decodes a CMsgRequestWeekendTourneySchedule message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRequestWeekendTourneySchedule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRequestWeekendTourneySchedule} CMsgRequestWeekendTourneySchedule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRequestWeekendTourneySchedule.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRequestWeekendTourneySchedule message.
         * @function verify
         * @memberof CMsgRequestWeekendTourneySchedule
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRequestWeekendTourneySchedule.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CMsgRequestWeekendTourneySchedule message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRequestWeekendTourneySchedule
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRequestWeekendTourneySchedule} CMsgRequestWeekendTourneySchedule
         */
        CMsgRequestWeekendTourneySchedule.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRequestWeekendTourneySchedule)
                return object;
            return new $root.CMsgRequestWeekendTourneySchedule();
        };
    
        /**
         * Creates a plain object from a CMsgRequestWeekendTourneySchedule message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRequestWeekendTourneySchedule
         * @static
         * @param {CMsgRequestWeekendTourneySchedule} message CMsgRequestWeekendTourneySchedule
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRequestWeekendTourneySchedule.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CMsgRequestWeekendTourneySchedule to JSON.
         * @function toJSON
         * @memberof CMsgRequestWeekendTourneySchedule
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRequestWeekendTourneySchedule.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgRequestWeekendTourneySchedule;
    })();
    
    $root.CMsgWeekendTourneySchedule = (function() {
    
        /**
         * Properties of a CMsgWeekendTourneySchedule.
         * @exports ICMsgWeekendTourneySchedule
         * @interface ICMsgWeekendTourneySchedule
         * @property {Array.<CMsgWeekendTourneySchedule.IDivision>|null} [divisions] CMsgWeekendTourneySchedule divisions
         */
    
        /**
         * Constructs a new CMsgWeekendTourneySchedule.
         * @exports CMsgWeekendTourneySchedule
         * @classdesc Represents a CMsgWeekendTourneySchedule.
         * @implements ICMsgWeekendTourneySchedule
         * @constructor
         * @param {ICMsgWeekendTourneySchedule=} [properties] Properties to set
         */
        function CMsgWeekendTourneySchedule(properties) {
            this.divisions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgWeekendTourneySchedule divisions.
         * @member {Array.<CMsgWeekendTourneySchedule.IDivision>} divisions
         * @memberof CMsgWeekendTourneySchedule
         * @instance
         */
        CMsgWeekendTourneySchedule.prototype.divisions = $util.emptyArray;
    
        /**
         * Creates a new CMsgWeekendTourneySchedule instance using the specified properties.
         * @function create
         * @memberof CMsgWeekendTourneySchedule
         * @static
         * @param {ICMsgWeekendTourneySchedule=} [properties] Properties to set
         * @returns {CMsgWeekendTourneySchedule} CMsgWeekendTourneySchedule instance
         */
        CMsgWeekendTourneySchedule.create = function create(properties) {
            return new CMsgWeekendTourneySchedule(properties);
        };
    
        /**
         * Encodes the specified CMsgWeekendTourneySchedule message. Does not implicitly {@link CMsgWeekendTourneySchedule.verify|verify} messages.
         * @function encode
         * @memberof CMsgWeekendTourneySchedule
         * @static
         * @param {ICMsgWeekendTourneySchedule} message CMsgWeekendTourneySchedule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgWeekendTourneySchedule.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.divisions != null && message.divisions.length)
                for (var i = 0; i < message.divisions.length; ++i)
                    $root.CMsgWeekendTourneySchedule.Division.encode(message.divisions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgWeekendTourneySchedule message, length delimited. Does not implicitly {@link CMsgWeekendTourneySchedule.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgWeekendTourneySchedule
         * @static
         * @param {ICMsgWeekendTourneySchedule} message CMsgWeekendTourneySchedule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgWeekendTourneySchedule.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgWeekendTourneySchedule message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgWeekendTourneySchedule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgWeekendTourneySchedule} CMsgWeekendTourneySchedule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgWeekendTourneySchedule.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgWeekendTourneySchedule();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.divisions && message.divisions.length))
                        message.divisions = [];
                    message.divisions.push($root.CMsgWeekendTourneySchedule.Division.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgWeekendTourneySchedule message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgWeekendTourneySchedule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgWeekendTourneySchedule} CMsgWeekendTourneySchedule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgWeekendTourneySchedule.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgWeekendTourneySchedule message.
         * @function verify
         * @memberof CMsgWeekendTourneySchedule
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgWeekendTourneySchedule.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.divisions != null && message.hasOwnProperty("divisions")) {
                if (!Array.isArray(message.divisions))
                    return "divisions: array expected";
                for (var i = 0; i < message.divisions.length; ++i) {
                    var error = $root.CMsgWeekendTourneySchedule.Division.verify(message.divisions[i]);
                    if (error)
                        return "divisions." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgWeekendTourneySchedule message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgWeekendTourneySchedule
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgWeekendTourneySchedule} CMsgWeekendTourneySchedule
         */
        CMsgWeekendTourneySchedule.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgWeekendTourneySchedule)
                return object;
            var message = new $root.CMsgWeekendTourneySchedule();
            if (object.divisions) {
                if (!Array.isArray(object.divisions))
                    throw TypeError(".CMsgWeekendTourneySchedule.divisions: array expected");
                message.divisions = [];
                for (var i = 0; i < object.divisions.length; ++i) {
                    if (typeof object.divisions[i] !== "object")
                        throw TypeError(".CMsgWeekendTourneySchedule.divisions: object expected");
                    message.divisions[i] = $root.CMsgWeekendTourneySchedule.Division.fromObject(object.divisions[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgWeekendTourneySchedule message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgWeekendTourneySchedule
         * @static
         * @param {CMsgWeekendTourneySchedule} message CMsgWeekendTourneySchedule
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgWeekendTourneySchedule.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.divisions = [];
            if (message.divisions && message.divisions.length) {
                object.divisions = [];
                for (var j = 0; j < message.divisions.length; ++j)
                    object.divisions[j] = $root.CMsgWeekendTourneySchedule.Division.toObject(message.divisions[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgWeekendTourneySchedule to JSON.
         * @function toJSON
         * @memberof CMsgWeekendTourneySchedule
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgWeekendTourneySchedule.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgWeekendTourneySchedule.Division = (function() {
    
            /**
             * Properties of a Division.
             * @memberof CMsgWeekendTourneySchedule
             * @interface IDivision
             * @property {number|null} [division_code] Division division_code
             * @property {number|null} [time_window_open] Division time_window_open
             * @property {number|null} [time_window_close] Division time_window_close
             * @property {number|null} [time_window_open_next] Division time_window_open_next
             * @property {number|null} [trophy_id] Division trophy_id
             * @property {boolean|null} [free_weekend] Division free_weekend
             */
    
            /**
             * Constructs a new Division.
             * @memberof CMsgWeekendTourneySchedule
             * @classdesc Represents a Division.
             * @implements IDivision
             * @constructor
             * @param {CMsgWeekendTourneySchedule.IDivision=} [properties] Properties to set
             */
            function Division(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Division division_code.
             * @member {number} division_code
             * @memberof CMsgWeekendTourneySchedule.Division
             * @instance
             */
            Division.prototype.division_code = 0;
    
            /**
             * Division time_window_open.
             * @member {number} time_window_open
             * @memberof CMsgWeekendTourneySchedule.Division
             * @instance
             */
            Division.prototype.time_window_open = 0;
    
            /**
             * Division time_window_close.
             * @member {number} time_window_close
             * @memberof CMsgWeekendTourneySchedule.Division
             * @instance
             */
            Division.prototype.time_window_close = 0;
    
            /**
             * Division time_window_open_next.
             * @member {number} time_window_open_next
             * @memberof CMsgWeekendTourneySchedule.Division
             * @instance
             */
            Division.prototype.time_window_open_next = 0;
    
            /**
             * Division trophy_id.
             * @member {number} trophy_id
             * @memberof CMsgWeekendTourneySchedule.Division
             * @instance
             */
            Division.prototype.trophy_id = 0;
    
            /**
             * Division free_weekend.
             * @member {boolean} free_weekend
             * @memberof CMsgWeekendTourneySchedule.Division
             * @instance
             */
            Division.prototype.free_weekend = false;
    
            /**
             * Creates a new Division instance using the specified properties.
             * @function create
             * @memberof CMsgWeekendTourneySchedule.Division
             * @static
             * @param {CMsgWeekendTourneySchedule.IDivision=} [properties] Properties to set
             * @returns {CMsgWeekendTourneySchedule.Division} Division instance
             */
            Division.create = function create(properties) {
                return new Division(properties);
            };
    
            /**
             * Encodes the specified Division message. Does not implicitly {@link CMsgWeekendTourneySchedule.Division.verify|verify} messages.
             * @function encode
             * @memberof CMsgWeekendTourneySchedule.Division
             * @static
             * @param {CMsgWeekendTourneySchedule.IDivision} message Division message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Division.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.division_code != null && Object.hasOwnProperty.call(message, "division_code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.division_code);
                if (message.time_window_open != null && Object.hasOwnProperty.call(message, "time_window_open"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.time_window_open);
                if (message.time_window_close != null && Object.hasOwnProperty.call(message, "time_window_close"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.time_window_close);
                if (message.time_window_open_next != null && Object.hasOwnProperty.call(message, "time_window_open_next"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.time_window_open_next);
                if (message.trophy_id != null && Object.hasOwnProperty.call(message, "trophy_id"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.trophy_id);
                if (message.free_weekend != null && Object.hasOwnProperty.call(message, "free_weekend"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.free_weekend);
                return writer;
            };
    
            /**
             * Encodes the specified Division message, length delimited. Does not implicitly {@link CMsgWeekendTourneySchedule.Division.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgWeekendTourneySchedule.Division
             * @static
             * @param {CMsgWeekendTourneySchedule.IDivision} message Division message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Division.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Division message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgWeekendTourneySchedule.Division
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgWeekendTourneySchedule.Division} Division
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Division.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgWeekendTourneySchedule.Division();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.division_code = reader.uint32();
                        break;
                    case 2:
                        message.time_window_open = reader.uint32();
                        break;
                    case 3:
                        message.time_window_close = reader.uint32();
                        break;
                    case 4:
                        message.time_window_open_next = reader.uint32();
                        break;
                    case 5:
                        message.trophy_id = reader.uint32();
                        break;
                    case 6:
                        message.free_weekend = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Division message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgWeekendTourneySchedule.Division
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgWeekendTourneySchedule.Division} Division
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Division.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Division message.
             * @function verify
             * @memberof CMsgWeekendTourneySchedule.Division
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Division.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.division_code != null && message.hasOwnProperty("division_code"))
                    if (!$util.isInteger(message.division_code))
                        return "division_code: integer expected";
                if (message.time_window_open != null && message.hasOwnProperty("time_window_open"))
                    if (!$util.isInteger(message.time_window_open))
                        return "time_window_open: integer expected";
                if (message.time_window_close != null && message.hasOwnProperty("time_window_close"))
                    if (!$util.isInteger(message.time_window_close))
                        return "time_window_close: integer expected";
                if (message.time_window_open_next != null && message.hasOwnProperty("time_window_open_next"))
                    if (!$util.isInteger(message.time_window_open_next))
                        return "time_window_open_next: integer expected";
                if (message.trophy_id != null && message.hasOwnProperty("trophy_id"))
                    if (!$util.isInteger(message.trophy_id))
                        return "trophy_id: integer expected";
                if (message.free_weekend != null && message.hasOwnProperty("free_weekend"))
                    if (typeof message.free_weekend !== "boolean")
                        return "free_weekend: boolean expected";
                return null;
            };
    
            /**
             * Creates a Division message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgWeekendTourneySchedule.Division
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgWeekendTourneySchedule.Division} Division
             */
            Division.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgWeekendTourneySchedule.Division)
                    return object;
                var message = new $root.CMsgWeekendTourneySchedule.Division();
                if (object.division_code != null)
                    message.division_code = object.division_code >>> 0;
                if (object.time_window_open != null)
                    message.time_window_open = object.time_window_open >>> 0;
                if (object.time_window_close != null)
                    message.time_window_close = object.time_window_close >>> 0;
                if (object.time_window_open_next != null)
                    message.time_window_open_next = object.time_window_open_next >>> 0;
                if (object.trophy_id != null)
                    message.trophy_id = object.trophy_id >>> 0;
                if (object.free_weekend != null)
                    message.free_weekend = Boolean(object.free_weekend);
                return message;
            };
    
            /**
             * Creates a plain object from a Division message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgWeekendTourneySchedule.Division
             * @static
             * @param {CMsgWeekendTourneySchedule.Division} message Division
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Division.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.division_code = 0;
                    object.time_window_open = 0;
                    object.time_window_close = 0;
                    object.time_window_open_next = 0;
                    object.trophy_id = 0;
                    object.free_weekend = false;
                }
                if (message.division_code != null && message.hasOwnProperty("division_code"))
                    object.division_code = message.division_code;
                if (message.time_window_open != null && message.hasOwnProperty("time_window_open"))
                    object.time_window_open = message.time_window_open;
                if (message.time_window_close != null && message.hasOwnProperty("time_window_close"))
                    object.time_window_close = message.time_window_close;
                if (message.time_window_open_next != null && message.hasOwnProperty("time_window_open_next"))
                    object.time_window_open_next = message.time_window_open_next;
                if (message.trophy_id != null && message.hasOwnProperty("trophy_id"))
                    object.trophy_id = message.trophy_id;
                if (message.free_weekend != null && message.hasOwnProperty("free_weekend"))
                    object.free_weekend = message.free_weekend;
                return object;
            };
    
            /**
             * Converts this Division to JSON.
             * @function toJSON
             * @memberof CMsgWeekendTourneySchedule.Division
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Division.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Division;
        })();
    
        return CMsgWeekendTourneySchedule;
    })();
    
    $root.CMsgWeekendTourneyOpts = (function() {
    
        /**
         * Properties of a CMsgWeekendTourneyOpts.
         * @exports ICMsgWeekendTourneyOpts
         * @interface ICMsgWeekendTourneyOpts
         * @property {boolean|null} [participating] CMsgWeekendTourneyOpts participating
         * @property {number|null} [division_id] CMsgWeekendTourneyOpts division_id
         * @property {number|null} [buyin] CMsgWeekendTourneyOpts buyin
         * @property {number|null} [skill_level] CMsgWeekendTourneyOpts skill_level
         * @property {number|null} [match_groups] CMsgWeekendTourneyOpts match_groups
         * @property {number|null} [team_id] CMsgWeekendTourneyOpts team_id
         * @property {string|null} [pickup_team_name] CMsgWeekendTourneyOpts pickup_team_name
         * @property {number|Long|null} [pickup_team_logo] CMsgWeekendTourneyOpts pickup_team_logo
         */
    
        /**
         * Constructs a new CMsgWeekendTourneyOpts.
         * @exports CMsgWeekendTourneyOpts
         * @classdesc Represents a CMsgWeekendTourneyOpts.
         * @implements ICMsgWeekendTourneyOpts
         * @constructor
         * @param {ICMsgWeekendTourneyOpts=} [properties] Properties to set
         */
        function CMsgWeekendTourneyOpts(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgWeekendTourneyOpts participating.
         * @member {boolean} participating
         * @memberof CMsgWeekendTourneyOpts
         * @instance
         */
        CMsgWeekendTourneyOpts.prototype.participating = false;
    
        /**
         * CMsgWeekendTourneyOpts division_id.
         * @member {number} division_id
         * @memberof CMsgWeekendTourneyOpts
         * @instance
         */
        CMsgWeekendTourneyOpts.prototype.division_id = 0;
    
        /**
         * CMsgWeekendTourneyOpts buyin.
         * @member {number} buyin
         * @memberof CMsgWeekendTourneyOpts
         * @instance
         */
        CMsgWeekendTourneyOpts.prototype.buyin = 0;
    
        /**
         * CMsgWeekendTourneyOpts skill_level.
         * @member {number} skill_level
         * @memberof CMsgWeekendTourneyOpts
         * @instance
         */
        CMsgWeekendTourneyOpts.prototype.skill_level = 0;
    
        /**
         * CMsgWeekendTourneyOpts match_groups.
         * @member {number} match_groups
         * @memberof CMsgWeekendTourneyOpts
         * @instance
         */
        CMsgWeekendTourneyOpts.prototype.match_groups = 0;
    
        /**
         * CMsgWeekendTourneyOpts team_id.
         * @member {number} team_id
         * @memberof CMsgWeekendTourneyOpts
         * @instance
         */
        CMsgWeekendTourneyOpts.prototype.team_id = 0;
    
        /**
         * CMsgWeekendTourneyOpts pickup_team_name.
         * @member {string} pickup_team_name
         * @memberof CMsgWeekendTourneyOpts
         * @instance
         */
        CMsgWeekendTourneyOpts.prototype.pickup_team_name = "";
    
        /**
         * CMsgWeekendTourneyOpts pickup_team_logo.
         * @member {number|Long} pickup_team_logo
         * @memberof CMsgWeekendTourneyOpts
         * @instance
         */
        CMsgWeekendTourneyOpts.prototype.pickup_team_logo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CMsgWeekendTourneyOpts instance using the specified properties.
         * @function create
         * @memberof CMsgWeekendTourneyOpts
         * @static
         * @param {ICMsgWeekendTourneyOpts=} [properties] Properties to set
         * @returns {CMsgWeekendTourneyOpts} CMsgWeekendTourneyOpts instance
         */
        CMsgWeekendTourneyOpts.create = function create(properties) {
            return new CMsgWeekendTourneyOpts(properties);
        };
    
        /**
         * Encodes the specified CMsgWeekendTourneyOpts message. Does not implicitly {@link CMsgWeekendTourneyOpts.verify|verify} messages.
         * @function encode
         * @memberof CMsgWeekendTourneyOpts
         * @static
         * @param {ICMsgWeekendTourneyOpts} message CMsgWeekendTourneyOpts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgWeekendTourneyOpts.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.participating != null && Object.hasOwnProperty.call(message, "participating"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.participating);
            if (message.division_id != null && Object.hasOwnProperty.call(message, "division_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.division_id);
            if (message.buyin != null && Object.hasOwnProperty.call(message, "buyin"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.buyin);
            if (message.skill_level != null && Object.hasOwnProperty.call(message, "skill_level"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.skill_level);
            if (message.match_groups != null && Object.hasOwnProperty.call(message, "match_groups"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.match_groups);
            if (message.team_id != null && Object.hasOwnProperty.call(message, "team_id"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.team_id);
            if (message.pickup_team_name != null && Object.hasOwnProperty.call(message, "pickup_team_name"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.pickup_team_name);
            if (message.pickup_team_logo != null && Object.hasOwnProperty.call(message, "pickup_team_logo"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.pickup_team_logo);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgWeekendTourneyOpts message, length delimited. Does not implicitly {@link CMsgWeekendTourneyOpts.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgWeekendTourneyOpts
         * @static
         * @param {ICMsgWeekendTourneyOpts} message CMsgWeekendTourneyOpts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgWeekendTourneyOpts.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgWeekendTourneyOpts message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgWeekendTourneyOpts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgWeekendTourneyOpts} CMsgWeekendTourneyOpts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgWeekendTourneyOpts.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgWeekendTourneyOpts();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.participating = reader.bool();
                    break;
                case 2:
                    message.division_id = reader.uint32();
                    break;
                case 3:
                    message.buyin = reader.uint32();
                    break;
                case 4:
                    message.skill_level = reader.uint32();
                    break;
                case 5:
                    message.match_groups = reader.uint32();
                    break;
                case 6:
                    message.team_id = reader.uint32();
                    break;
                case 7:
                    message.pickup_team_name = reader.string();
                    break;
                case 8:
                    message.pickup_team_logo = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgWeekendTourneyOpts message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgWeekendTourneyOpts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgWeekendTourneyOpts} CMsgWeekendTourneyOpts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgWeekendTourneyOpts.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgWeekendTourneyOpts message.
         * @function verify
         * @memberof CMsgWeekendTourneyOpts
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgWeekendTourneyOpts.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.participating != null && message.hasOwnProperty("participating"))
                if (typeof message.participating !== "boolean")
                    return "participating: boolean expected";
            if (message.division_id != null && message.hasOwnProperty("division_id"))
                if (!$util.isInteger(message.division_id))
                    return "division_id: integer expected";
            if (message.buyin != null && message.hasOwnProperty("buyin"))
                if (!$util.isInteger(message.buyin))
                    return "buyin: integer expected";
            if (message.skill_level != null && message.hasOwnProperty("skill_level"))
                if (!$util.isInteger(message.skill_level))
                    return "skill_level: integer expected";
            if (message.match_groups != null && message.hasOwnProperty("match_groups"))
                if (!$util.isInteger(message.match_groups))
                    return "match_groups: integer expected";
            if (message.team_id != null && message.hasOwnProperty("team_id"))
                if (!$util.isInteger(message.team_id))
                    return "team_id: integer expected";
            if (message.pickup_team_name != null && message.hasOwnProperty("pickup_team_name"))
                if (!$util.isString(message.pickup_team_name))
                    return "pickup_team_name: string expected";
            if (message.pickup_team_logo != null && message.hasOwnProperty("pickup_team_logo"))
                if (!$util.isInteger(message.pickup_team_logo) && !(message.pickup_team_logo && $util.isInteger(message.pickup_team_logo.low) && $util.isInteger(message.pickup_team_logo.high)))
                    return "pickup_team_logo: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgWeekendTourneyOpts message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgWeekendTourneyOpts
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgWeekendTourneyOpts} CMsgWeekendTourneyOpts
         */
        CMsgWeekendTourneyOpts.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgWeekendTourneyOpts)
                return object;
            var message = new $root.CMsgWeekendTourneyOpts();
            if (object.participating != null)
                message.participating = Boolean(object.participating);
            if (object.division_id != null)
                message.division_id = object.division_id >>> 0;
            if (object.buyin != null)
                message.buyin = object.buyin >>> 0;
            if (object.skill_level != null)
                message.skill_level = object.skill_level >>> 0;
            if (object.match_groups != null)
                message.match_groups = object.match_groups >>> 0;
            if (object.team_id != null)
                message.team_id = object.team_id >>> 0;
            if (object.pickup_team_name != null)
                message.pickup_team_name = String(object.pickup_team_name);
            if (object.pickup_team_logo != null)
                if ($util.Long)
                    (message.pickup_team_logo = $util.Long.fromValue(object.pickup_team_logo)).unsigned = true;
                else if (typeof object.pickup_team_logo === "string")
                    message.pickup_team_logo = parseInt(object.pickup_team_logo, 10);
                else if (typeof object.pickup_team_logo === "number")
                    message.pickup_team_logo = object.pickup_team_logo;
                else if (typeof object.pickup_team_logo === "object")
                    message.pickup_team_logo = new $util.LongBits(object.pickup_team_logo.low >>> 0, object.pickup_team_logo.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgWeekendTourneyOpts message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgWeekendTourneyOpts
         * @static
         * @param {CMsgWeekendTourneyOpts} message CMsgWeekendTourneyOpts
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgWeekendTourneyOpts.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.participating = false;
                object.division_id = 0;
                object.buyin = 0;
                object.skill_level = 0;
                object.match_groups = 0;
                object.team_id = 0;
                object.pickup_team_name = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.pickup_team_logo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pickup_team_logo = options.longs === String ? "0" : 0;
            }
            if (message.participating != null && message.hasOwnProperty("participating"))
                object.participating = message.participating;
            if (message.division_id != null && message.hasOwnProperty("division_id"))
                object.division_id = message.division_id;
            if (message.buyin != null && message.hasOwnProperty("buyin"))
                object.buyin = message.buyin;
            if (message.skill_level != null && message.hasOwnProperty("skill_level"))
                object.skill_level = message.skill_level;
            if (message.match_groups != null && message.hasOwnProperty("match_groups"))
                object.match_groups = message.match_groups;
            if (message.team_id != null && message.hasOwnProperty("team_id"))
                object.team_id = message.team_id;
            if (message.pickup_team_name != null && message.hasOwnProperty("pickup_team_name"))
                object.pickup_team_name = message.pickup_team_name;
            if (message.pickup_team_logo != null && message.hasOwnProperty("pickup_team_logo"))
                if (typeof message.pickup_team_logo === "number")
                    object.pickup_team_logo = options.longs === String ? String(message.pickup_team_logo) : message.pickup_team_logo;
                else
                    object.pickup_team_logo = options.longs === String ? $util.Long.prototype.toString.call(message.pickup_team_logo) : options.longs === Number ? new $util.LongBits(message.pickup_team_logo.low >>> 0, message.pickup_team_logo.high >>> 0).toNumber(true) : message.pickup_team_logo;
            return object;
        };
    
        /**
         * Converts this CMsgWeekendTourneyOpts to JSON.
         * @function toJSON
         * @memberof CMsgWeekendTourneyOpts
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgWeekendTourneyOpts.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgWeekendTourneyOpts;
    })();
    
    $root.CMsgWeekendTourneyLeave = (function() {
    
        /**
         * Properties of a CMsgWeekendTourneyLeave.
         * @exports ICMsgWeekendTourneyLeave
         * @interface ICMsgWeekendTourneyLeave
         */
    
        /**
         * Constructs a new CMsgWeekendTourneyLeave.
         * @exports CMsgWeekendTourneyLeave
         * @classdesc Represents a CMsgWeekendTourneyLeave.
         * @implements ICMsgWeekendTourneyLeave
         * @constructor
         * @param {ICMsgWeekendTourneyLeave=} [properties] Properties to set
         */
        function CMsgWeekendTourneyLeave(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CMsgWeekendTourneyLeave instance using the specified properties.
         * @function create
         * @memberof CMsgWeekendTourneyLeave
         * @static
         * @param {ICMsgWeekendTourneyLeave=} [properties] Properties to set
         * @returns {CMsgWeekendTourneyLeave} CMsgWeekendTourneyLeave instance
         */
        CMsgWeekendTourneyLeave.create = function create(properties) {
            return new CMsgWeekendTourneyLeave(properties);
        };
    
        /**
         * Encodes the specified CMsgWeekendTourneyLeave message. Does not implicitly {@link CMsgWeekendTourneyLeave.verify|verify} messages.
         * @function encode
         * @memberof CMsgWeekendTourneyLeave
         * @static
         * @param {ICMsgWeekendTourneyLeave} message CMsgWeekendTourneyLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgWeekendTourneyLeave.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgWeekendTourneyLeave message, length delimited. Does not implicitly {@link CMsgWeekendTourneyLeave.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgWeekendTourneyLeave
         * @static
         * @param {ICMsgWeekendTourneyLeave} message CMsgWeekendTourneyLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgWeekendTourneyLeave.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgWeekendTourneyLeave message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgWeekendTourneyLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgWeekendTourneyLeave} CMsgWeekendTourneyLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgWeekendTourneyLeave.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgWeekendTourneyLeave();
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
         * Decodes a CMsgWeekendTourneyLeave message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgWeekendTourneyLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgWeekendTourneyLeave} CMsgWeekendTourneyLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgWeekendTourneyLeave.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgWeekendTourneyLeave message.
         * @function verify
         * @memberof CMsgWeekendTourneyLeave
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgWeekendTourneyLeave.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CMsgWeekendTourneyLeave message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgWeekendTourneyLeave
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgWeekendTourneyLeave} CMsgWeekendTourneyLeave
         */
        CMsgWeekendTourneyLeave.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgWeekendTourneyLeave)
                return object;
            return new $root.CMsgWeekendTourneyLeave();
        };
    
        /**
         * Creates a plain object from a CMsgWeekendTourneyLeave message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgWeekendTourneyLeave
         * @static
         * @param {CMsgWeekendTourneyLeave} message CMsgWeekendTourneyLeave
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgWeekendTourneyLeave.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CMsgWeekendTourneyLeave to JSON.
         * @function toJSON
         * @memberof CMsgWeekendTourneyLeave
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgWeekendTourneyLeave.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgWeekendTourneyLeave;
    })();
    
    $root.CMsgDOTATournament = (function() {
    
        /**
         * Properties of a CMsgDOTATournament.
         * @exports ICMsgDOTATournament
         * @interface ICMsgDOTATournament
         * @property {number|null} [tournament_id] CMsgDOTATournament tournament_id
         * @property {number|null} [division_id] CMsgDOTATournament division_id
         * @property {number|null} [schedule_time] CMsgDOTATournament schedule_time
         * @property {number|null} [skill_level] CMsgDOTATournament skill_level
         * @property {ETournamentTemplate|null} [tournament_template] CMsgDOTATournament tournament_template
         * @property {ETournamentState|null} [state] CMsgDOTATournament state
         * @property {number|null} [state_seq_num] CMsgDOTATournament state_seq_num
         * @property {number|null} [season_trophy_id] CMsgDOTATournament season_trophy_id
         * @property {Array.<CMsgDOTATournament.ITeam>|null} [teams] CMsgDOTATournament teams
         * @property {Array.<CMsgDOTATournament.IGame>|null} [games] CMsgDOTATournament games
         * @property {Array.<CMsgDOTATournament.INode>|null} [nodes] CMsgDOTATournament nodes
         */
    
        /**
         * Constructs a new CMsgDOTATournament.
         * @exports CMsgDOTATournament
         * @classdesc Represents a CMsgDOTATournament.
         * @implements ICMsgDOTATournament
         * @constructor
         * @param {ICMsgDOTATournament=} [properties] Properties to set
         */
        function CMsgDOTATournament(properties) {
            this.teams = [];
            this.games = [];
            this.nodes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTATournament tournament_id.
         * @member {number} tournament_id
         * @memberof CMsgDOTATournament
         * @instance
         */
        CMsgDOTATournament.prototype.tournament_id = 0;
    
        /**
         * CMsgDOTATournament division_id.
         * @member {number} division_id
         * @memberof CMsgDOTATournament
         * @instance
         */
        CMsgDOTATournament.prototype.division_id = 0;
    
        /**
         * CMsgDOTATournament schedule_time.
         * @member {number} schedule_time
         * @memberof CMsgDOTATournament
         * @instance
         */
        CMsgDOTATournament.prototype.schedule_time = 0;
    
        /**
         * CMsgDOTATournament skill_level.
         * @member {number} skill_level
         * @memberof CMsgDOTATournament
         * @instance
         */
        CMsgDOTATournament.prototype.skill_level = 0;
    
        /**
         * CMsgDOTATournament tournament_template.
         * @member {ETournamentTemplate} tournament_template
         * @memberof CMsgDOTATournament
         * @instance
         */
        CMsgDOTATournament.prototype.tournament_template = 0;
    
        /**
         * CMsgDOTATournament state.
         * @member {ETournamentState} state
         * @memberof CMsgDOTATournament
         * @instance
         */
        CMsgDOTATournament.prototype.state = 0;
    
        /**
         * CMsgDOTATournament state_seq_num.
         * @member {number} state_seq_num
         * @memberof CMsgDOTATournament
         * @instance
         */
        CMsgDOTATournament.prototype.state_seq_num = 0;
    
        /**
         * CMsgDOTATournament season_trophy_id.
         * @member {number} season_trophy_id
         * @memberof CMsgDOTATournament
         * @instance
         */
        CMsgDOTATournament.prototype.season_trophy_id = 0;
    
        /**
         * CMsgDOTATournament teams.
         * @member {Array.<CMsgDOTATournament.ITeam>} teams
         * @memberof CMsgDOTATournament
         * @instance
         */
        CMsgDOTATournament.prototype.teams = $util.emptyArray;
    
        /**
         * CMsgDOTATournament games.
         * @member {Array.<CMsgDOTATournament.IGame>} games
         * @memberof CMsgDOTATournament
         * @instance
         */
        CMsgDOTATournament.prototype.games = $util.emptyArray;
    
        /**
         * CMsgDOTATournament nodes.
         * @member {Array.<CMsgDOTATournament.INode>} nodes
         * @memberof CMsgDOTATournament
         * @instance
         */
        CMsgDOTATournament.prototype.nodes = $util.emptyArray;
    
        /**
         * Creates a new CMsgDOTATournament instance using the specified properties.
         * @function create
         * @memberof CMsgDOTATournament
         * @static
         * @param {ICMsgDOTATournament=} [properties] Properties to set
         * @returns {CMsgDOTATournament} CMsgDOTATournament instance
         */
        CMsgDOTATournament.create = function create(properties) {
            return new CMsgDOTATournament(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTATournament message. Does not implicitly {@link CMsgDOTATournament.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTATournament
         * @static
         * @param {ICMsgDOTATournament} message CMsgDOTATournament message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTATournament.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tournament_id != null && Object.hasOwnProperty.call(message, "tournament_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.tournament_id);
            if (message.division_id != null && Object.hasOwnProperty.call(message, "division_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.division_id);
            if (message.schedule_time != null && Object.hasOwnProperty.call(message, "schedule_time"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.schedule_time);
            if (message.skill_level != null && Object.hasOwnProperty.call(message, "skill_level"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.skill_level);
            if (message.tournament_template != null && Object.hasOwnProperty.call(message, "tournament_template"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.tournament_template);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.state);
            if (message.teams != null && message.teams.length)
                for (var i = 0; i < message.teams.length; ++i)
                    $root.CMsgDOTATournament.Team.encode(message.teams[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.games != null && message.games.length)
                for (var i = 0; i < message.games.length; ++i)
                    $root.CMsgDOTATournament.Game.encode(message.games[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.nodes != null && message.nodes.length)
                for (var i = 0; i < message.nodes.length; ++i)
                    $root.CMsgDOTATournament.Node.encode(message.nodes[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.state_seq_num != null && Object.hasOwnProperty.call(message, "state_seq_num"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.state_seq_num);
            if (message.season_trophy_id != null && Object.hasOwnProperty.call(message, "season_trophy_id"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.season_trophy_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTATournament message, length delimited. Does not implicitly {@link CMsgDOTATournament.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTATournament
         * @static
         * @param {ICMsgDOTATournament} message CMsgDOTATournament message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTATournament.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTATournament message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTATournament
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTATournament} CMsgDOTATournament
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTATournament.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTATournament();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tournament_id = reader.uint32();
                    break;
                case 2:
                    message.division_id = reader.uint32();
                    break;
                case 3:
                    message.schedule_time = reader.uint32();
                    break;
                case 4:
                    message.skill_level = reader.uint32();
                    break;
                case 5:
                    message.tournament_template = reader.int32();
                    break;
                case 6:
                    message.state = reader.int32();
                    break;
                case 10:
                    message.state_seq_num = reader.uint32();
                    break;
                case 11:
                    message.season_trophy_id = reader.uint32();
                    break;
                case 7:
                    if (!(message.teams && message.teams.length))
                        message.teams = [];
                    message.teams.push($root.CMsgDOTATournament.Team.decode(reader, reader.uint32()));
                    break;
                case 8:
                    if (!(message.games && message.games.length))
                        message.games = [];
                    message.games.push($root.CMsgDOTATournament.Game.decode(reader, reader.uint32()));
                    break;
                case 9:
                    if (!(message.nodes && message.nodes.length))
                        message.nodes = [];
                    message.nodes.push($root.CMsgDOTATournament.Node.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTATournament message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTATournament
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTATournament} CMsgDOTATournament
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTATournament.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTATournament message.
         * @function verify
         * @memberof CMsgDOTATournament
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTATournament.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tournament_id != null && message.hasOwnProperty("tournament_id"))
                if (!$util.isInteger(message.tournament_id))
                    return "tournament_id: integer expected";
            if (message.division_id != null && message.hasOwnProperty("division_id"))
                if (!$util.isInteger(message.division_id))
                    return "division_id: integer expected";
            if (message.schedule_time != null && message.hasOwnProperty("schedule_time"))
                if (!$util.isInteger(message.schedule_time))
                    return "schedule_time: integer expected";
            if (message.skill_level != null && message.hasOwnProperty("skill_level"))
                if (!$util.isInteger(message.skill_level))
                    return "skill_level: integer expected";
            if (message.tournament_template != null && message.hasOwnProperty("tournament_template"))
                switch (message.tournament_template) {
                default:
                    return "tournament_template: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
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
                case 100:
                case 101:
                    break;
                }
            if (message.state_seq_num != null && message.hasOwnProperty("state_seq_num"))
                if (!$util.isInteger(message.state_seq_num))
                    return "state_seq_num: integer expected";
            if (message.season_trophy_id != null && message.hasOwnProperty("season_trophy_id"))
                if (!$util.isInteger(message.season_trophy_id))
                    return "season_trophy_id: integer expected";
            if (message.teams != null && message.hasOwnProperty("teams")) {
                if (!Array.isArray(message.teams))
                    return "teams: array expected";
                for (var i = 0; i < message.teams.length; ++i) {
                    var error = $root.CMsgDOTATournament.Team.verify(message.teams[i]);
                    if (error)
                        return "teams." + error;
                }
            }
            if (message.games != null && message.hasOwnProperty("games")) {
                if (!Array.isArray(message.games))
                    return "games: array expected";
                for (var i = 0; i < message.games.length; ++i) {
                    var error = $root.CMsgDOTATournament.Game.verify(message.games[i]);
                    if (error)
                        return "games." + error;
                }
            }
            if (message.nodes != null && message.hasOwnProperty("nodes")) {
                if (!Array.isArray(message.nodes))
                    return "nodes: array expected";
                for (var i = 0; i < message.nodes.length; ++i) {
                    var error = $root.CMsgDOTATournament.Node.verify(message.nodes[i]);
                    if (error)
                        return "nodes." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgDOTATournament message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTATournament
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTATournament} CMsgDOTATournament
         */
        CMsgDOTATournament.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTATournament)
                return object;
            var message = new $root.CMsgDOTATournament();
            if (object.tournament_id != null)
                message.tournament_id = object.tournament_id >>> 0;
            if (object.division_id != null)
                message.division_id = object.division_id >>> 0;
            if (object.schedule_time != null)
                message.schedule_time = object.schedule_time >>> 0;
            if (object.skill_level != null)
                message.skill_level = object.skill_level >>> 0;
            switch (object.tournament_template) {
            case "k_ETournamentTemplate_None":
            case 0:
                message.tournament_template = 0;
                break;
            case "k_ETournamentTemplate_AutomatedWin3":
            case 1:
                message.tournament_template = 1;
                break;
            }
            switch (object.state) {
            case "k_ETournamentState_Unknown":
            case 0:
                message.state = 0;
                break;
            case "k_ETournamentState_CanceledByAdmin":
            case 1:
                message.state = 1;
                break;
            case "k_ETournamentState_Completed":
            case 2:
                message.state = 2;
                break;
            case "k_ETournamentState_Merged":
            case 3:
                message.state = 3;
                break;
            case "k_ETournamentState_ServerFailure":
            case 4:
                message.state = 4;
                break;
            case "k_ETournamentState_TeamAbandoned":
            case 5:
                message.state = 5;
                break;
            case "k_ETournamentState_TeamTimeoutForfeit":
            case 6:
                message.state = 6;
                break;
            case "k_ETournamentState_TeamTimeoutRefund":
            case 7:
                message.state = 7;
                break;
            case "k_ETournamentState_ServerFailureGrantedVictory":
            case 8:
                message.state = 8;
                break;
            case "k_ETournamentState_TeamTimeoutGrantedVictory":
            case 9:
                message.state = 9;
                break;
            case "k_ETournamentState_InProgress":
            case 100:
                message.state = 100;
                break;
            case "k_ETournamentState_WaitingToMerge":
            case 101:
                message.state = 101;
                break;
            }
            if (object.state_seq_num != null)
                message.state_seq_num = object.state_seq_num >>> 0;
            if (object.season_trophy_id != null)
                message.season_trophy_id = object.season_trophy_id >>> 0;
            if (object.teams) {
                if (!Array.isArray(object.teams))
                    throw TypeError(".CMsgDOTATournament.teams: array expected");
                message.teams = [];
                for (var i = 0; i < object.teams.length; ++i) {
                    if (typeof object.teams[i] !== "object")
                        throw TypeError(".CMsgDOTATournament.teams: object expected");
                    message.teams[i] = $root.CMsgDOTATournament.Team.fromObject(object.teams[i]);
                }
            }
            if (object.games) {
                if (!Array.isArray(object.games))
                    throw TypeError(".CMsgDOTATournament.games: array expected");
                message.games = [];
                for (var i = 0; i < object.games.length; ++i) {
                    if (typeof object.games[i] !== "object")
                        throw TypeError(".CMsgDOTATournament.games: object expected");
                    message.games[i] = $root.CMsgDOTATournament.Game.fromObject(object.games[i]);
                }
            }
            if (object.nodes) {
                if (!Array.isArray(object.nodes))
                    throw TypeError(".CMsgDOTATournament.nodes: array expected");
                message.nodes = [];
                for (var i = 0; i < object.nodes.length; ++i) {
                    if (typeof object.nodes[i] !== "object")
                        throw TypeError(".CMsgDOTATournament.nodes: object expected");
                    message.nodes[i] = $root.CMsgDOTATournament.Node.fromObject(object.nodes[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTATournament message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTATournament
         * @static
         * @param {CMsgDOTATournament} message CMsgDOTATournament
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTATournament.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.teams = [];
                object.games = [];
                object.nodes = [];
            }
            if (options.defaults) {
                object.tournament_id = 0;
                object.division_id = 0;
                object.schedule_time = 0;
                object.skill_level = 0;
                object.tournament_template = options.enums === String ? "k_ETournamentTemplate_None" : 0;
                object.state = options.enums === String ? "k_ETournamentState_Unknown" : 0;
                object.state_seq_num = 0;
                object.season_trophy_id = 0;
            }
            if (message.tournament_id != null && message.hasOwnProperty("tournament_id"))
                object.tournament_id = message.tournament_id;
            if (message.division_id != null && message.hasOwnProperty("division_id"))
                object.division_id = message.division_id;
            if (message.schedule_time != null && message.hasOwnProperty("schedule_time"))
                object.schedule_time = message.schedule_time;
            if (message.skill_level != null && message.hasOwnProperty("skill_level"))
                object.skill_level = message.skill_level;
            if (message.tournament_template != null && message.hasOwnProperty("tournament_template"))
                object.tournament_template = options.enums === String ? $root.ETournamentTemplate[message.tournament_template] : message.tournament_template;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.ETournamentState[message.state] : message.state;
            if (message.teams && message.teams.length) {
                object.teams = [];
                for (var j = 0; j < message.teams.length; ++j)
                    object.teams[j] = $root.CMsgDOTATournament.Team.toObject(message.teams[j], options);
            }
            if (message.games && message.games.length) {
                object.games = [];
                for (var j = 0; j < message.games.length; ++j)
                    object.games[j] = $root.CMsgDOTATournament.Game.toObject(message.games[j], options);
            }
            if (message.nodes && message.nodes.length) {
                object.nodes = [];
                for (var j = 0; j < message.nodes.length; ++j)
                    object.nodes[j] = $root.CMsgDOTATournament.Node.toObject(message.nodes[j], options);
            }
            if (message.state_seq_num != null && message.hasOwnProperty("state_seq_num"))
                object.state_seq_num = message.state_seq_num;
            if (message.season_trophy_id != null && message.hasOwnProperty("season_trophy_id"))
                object.season_trophy_id = message.season_trophy_id;
            return object;
        };
    
        /**
         * Converts this CMsgDOTATournament to JSON.
         * @function toJSON
         * @memberof CMsgDOTATournament
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTATournament.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgDOTATournament.Team = (function() {
    
            /**
             * Properties of a Team.
             * @memberof CMsgDOTATournament
             * @interface ITeam
             * @property {number|Long|null} [team_gid] Team team_gid
             * @property {number|null} [node_or_state] Team node_or_state
             * @property {Array.<number>|null} [players] Team players
             * @property {Array.<number>|null} [player_buyin] Team player_buyin
             * @property {Array.<number>|null} [player_skill_level] Team player_skill_level
             * @property {number|null} [match_group_mask] Team match_group_mask
             * @property {number|null} [team_id] Team team_id
             * @property {string|null} [team_name] Team team_name
             * @property {number|Long|null} [team_base_logo] Team team_base_logo
             * @property {number|Long|null} [team_ui_logo] Team team_ui_logo
             */
    
            /**
             * Constructs a new Team.
             * @memberof CMsgDOTATournament
             * @classdesc Represents a Team.
             * @implements ITeam
             * @constructor
             * @param {CMsgDOTATournament.ITeam=} [properties] Properties to set
             */
            function Team(properties) {
                this.players = [];
                this.player_buyin = [];
                this.player_skill_level = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Team team_gid.
             * @member {number|Long} team_gid
             * @memberof CMsgDOTATournament.Team
             * @instance
             */
            Team.prototype.team_gid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Team node_or_state.
             * @member {number} node_or_state
             * @memberof CMsgDOTATournament.Team
             * @instance
             */
            Team.prototype.node_or_state = 0;
    
            /**
             * Team players.
             * @member {Array.<number>} players
             * @memberof CMsgDOTATournament.Team
             * @instance
             */
            Team.prototype.players = $util.emptyArray;
    
            /**
             * Team player_buyin.
             * @member {Array.<number>} player_buyin
             * @memberof CMsgDOTATournament.Team
             * @instance
             */
            Team.prototype.player_buyin = $util.emptyArray;
    
            /**
             * Team player_skill_level.
             * @member {Array.<number>} player_skill_level
             * @memberof CMsgDOTATournament.Team
             * @instance
             */
            Team.prototype.player_skill_level = $util.emptyArray;
    
            /**
             * Team match_group_mask.
             * @member {number} match_group_mask
             * @memberof CMsgDOTATournament.Team
             * @instance
             */
            Team.prototype.match_group_mask = 0;
    
            /**
             * Team team_id.
             * @member {number} team_id
             * @memberof CMsgDOTATournament.Team
             * @instance
             */
            Team.prototype.team_id = 0;
    
            /**
             * Team team_name.
             * @member {string} team_name
             * @memberof CMsgDOTATournament.Team
             * @instance
             */
            Team.prototype.team_name = "";
    
            /**
             * Team team_base_logo.
             * @member {number|Long} team_base_logo
             * @memberof CMsgDOTATournament.Team
             * @instance
             */
            Team.prototype.team_base_logo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Team team_ui_logo.
             * @member {number|Long} team_ui_logo
             * @memberof CMsgDOTATournament.Team
             * @instance
             */
            Team.prototype.team_ui_logo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new Team instance using the specified properties.
             * @function create
             * @memberof CMsgDOTATournament.Team
             * @static
             * @param {CMsgDOTATournament.ITeam=} [properties] Properties to set
             * @returns {CMsgDOTATournament.Team} Team instance
             */
            Team.create = function create(properties) {
                return new Team(properties);
            };
    
            /**
             * Encodes the specified Team message. Does not implicitly {@link CMsgDOTATournament.Team.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTATournament.Team
             * @static
             * @param {CMsgDOTATournament.ITeam} message Team message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Team.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.team_gid != null && Object.hasOwnProperty.call(message, "team_gid"))
                    writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.team_gid);
                if (message.node_or_state != null && Object.hasOwnProperty.call(message, "node_or_state"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.node_or_state);
                if (message.players != null && message.players.length) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork();
                    for (var i = 0; i < message.players.length; ++i)
                        writer.uint32(message.players[i]);
                    writer.ldelim();
                }
                if (message.team_id != null && Object.hasOwnProperty.call(message, "team_id"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.team_id);
                if (message.team_name != null && Object.hasOwnProperty.call(message, "team_name"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.team_name);
                if (message.team_base_logo != null && Object.hasOwnProperty.call(message, "team_base_logo"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.team_base_logo);
                if (message.team_ui_logo != null && Object.hasOwnProperty.call(message, "team_ui_logo"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.team_ui_logo);
                if (message.player_buyin != null && message.player_buyin.length) {
                    writer.uint32(/* id 9, wireType 2 =*/74).fork();
                    for (var i = 0; i < message.player_buyin.length; ++i)
                        writer.uint32(message.player_buyin[i]);
                    writer.ldelim();
                }
                if (message.player_skill_level != null && message.player_skill_level.length) {
                    writer.uint32(/* id 10, wireType 2 =*/82).fork();
                    for (var i = 0; i < message.player_skill_level.length; ++i)
                        writer.uint32(message.player_skill_level[i]);
                    writer.ldelim();
                }
                if (message.match_group_mask != null && Object.hasOwnProperty.call(message, "match_group_mask"))
                    writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.match_group_mask);
                return writer;
            };
    
            /**
             * Encodes the specified Team message, length delimited. Does not implicitly {@link CMsgDOTATournament.Team.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTATournament.Team
             * @static
             * @param {CMsgDOTATournament.ITeam} message Team message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Team.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Team message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTATournament.Team
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTATournament.Team} Team
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Team.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTATournament.Team();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.team_gid = reader.fixed64();
                        break;
                    case 2:
                        message.node_or_state = reader.uint32();
                        break;
                    case 3:
                        if (!(message.players && message.players.length))
                            message.players = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.players.push(reader.uint32());
                        } else
                            message.players.push(reader.uint32());
                        break;
                    case 9:
                        if (!(message.player_buyin && message.player_buyin.length))
                            message.player_buyin = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.player_buyin.push(reader.uint32());
                        } else
                            message.player_buyin.push(reader.uint32());
                        break;
                    case 10:
                        if (!(message.player_skill_level && message.player_skill_level.length))
                            message.player_skill_level = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.player_skill_level.push(reader.uint32());
                        } else
                            message.player_skill_level.push(reader.uint32());
                        break;
                    case 12:
                        message.match_group_mask = reader.uint32();
                        break;
                    case 4:
                        message.team_id = reader.uint32();
                        break;
                    case 5:
                        message.team_name = reader.string();
                        break;
                    case 7:
                        message.team_base_logo = reader.uint64();
                        break;
                    case 8:
                        message.team_ui_logo = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Team message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTATournament.Team
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTATournament.Team} Team
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Team.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Team message.
             * @function verify
             * @memberof CMsgDOTATournament.Team
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Team.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.team_gid != null && message.hasOwnProperty("team_gid"))
                    if (!$util.isInteger(message.team_gid) && !(message.team_gid && $util.isInteger(message.team_gid.low) && $util.isInteger(message.team_gid.high)))
                        return "team_gid: integer|Long expected";
                if (message.node_or_state != null && message.hasOwnProperty("node_or_state"))
                    if (!$util.isInteger(message.node_or_state))
                        return "node_or_state: integer expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i)
                        if (!$util.isInteger(message.players[i]))
                            return "players: integer[] expected";
                }
                if (message.player_buyin != null && message.hasOwnProperty("player_buyin")) {
                    if (!Array.isArray(message.player_buyin))
                        return "player_buyin: array expected";
                    for (var i = 0; i < message.player_buyin.length; ++i)
                        if (!$util.isInteger(message.player_buyin[i]))
                            return "player_buyin: integer[] expected";
                }
                if (message.player_skill_level != null && message.hasOwnProperty("player_skill_level")) {
                    if (!Array.isArray(message.player_skill_level))
                        return "player_skill_level: array expected";
                    for (var i = 0; i < message.player_skill_level.length; ++i)
                        if (!$util.isInteger(message.player_skill_level[i]))
                            return "player_skill_level: integer[] expected";
                }
                if (message.match_group_mask != null && message.hasOwnProperty("match_group_mask"))
                    if (!$util.isInteger(message.match_group_mask))
                        return "match_group_mask: integer expected";
                if (message.team_id != null && message.hasOwnProperty("team_id"))
                    if (!$util.isInteger(message.team_id))
                        return "team_id: integer expected";
                if (message.team_name != null && message.hasOwnProperty("team_name"))
                    if (!$util.isString(message.team_name))
                        return "team_name: string expected";
                if (message.team_base_logo != null && message.hasOwnProperty("team_base_logo"))
                    if (!$util.isInteger(message.team_base_logo) && !(message.team_base_logo && $util.isInteger(message.team_base_logo.low) && $util.isInteger(message.team_base_logo.high)))
                        return "team_base_logo: integer|Long expected";
                if (message.team_ui_logo != null && message.hasOwnProperty("team_ui_logo"))
                    if (!$util.isInteger(message.team_ui_logo) && !(message.team_ui_logo && $util.isInteger(message.team_ui_logo.low) && $util.isInteger(message.team_ui_logo.high)))
                        return "team_ui_logo: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a Team message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTATournament.Team
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTATournament.Team} Team
             */
            Team.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTATournament.Team)
                    return object;
                var message = new $root.CMsgDOTATournament.Team();
                if (object.team_gid != null)
                    if ($util.Long)
                        (message.team_gid = $util.Long.fromValue(object.team_gid)).unsigned = false;
                    else if (typeof object.team_gid === "string")
                        message.team_gid = parseInt(object.team_gid, 10);
                    else if (typeof object.team_gid === "number")
                        message.team_gid = object.team_gid;
                    else if (typeof object.team_gid === "object")
                        message.team_gid = new $util.LongBits(object.team_gid.low >>> 0, object.team_gid.high >>> 0).toNumber();
                if (object.node_or_state != null)
                    message.node_or_state = object.node_or_state >>> 0;
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".CMsgDOTATournament.Team.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i)
                        message.players[i] = object.players[i] >>> 0;
                }
                if (object.player_buyin) {
                    if (!Array.isArray(object.player_buyin))
                        throw TypeError(".CMsgDOTATournament.Team.player_buyin: array expected");
                    message.player_buyin = [];
                    for (var i = 0; i < object.player_buyin.length; ++i)
                        message.player_buyin[i] = object.player_buyin[i] >>> 0;
                }
                if (object.player_skill_level) {
                    if (!Array.isArray(object.player_skill_level))
                        throw TypeError(".CMsgDOTATournament.Team.player_skill_level: array expected");
                    message.player_skill_level = [];
                    for (var i = 0; i < object.player_skill_level.length; ++i)
                        message.player_skill_level[i] = object.player_skill_level[i] >>> 0;
                }
                if (object.match_group_mask != null)
                    message.match_group_mask = object.match_group_mask >>> 0;
                if (object.team_id != null)
                    message.team_id = object.team_id >>> 0;
                if (object.team_name != null)
                    message.team_name = String(object.team_name);
                if (object.team_base_logo != null)
                    if ($util.Long)
                        (message.team_base_logo = $util.Long.fromValue(object.team_base_logo)).unsigned = true;
                    else if (typeof object.team_base_logo === "string")
                        message.team_base_logo = parseInt(object.team_base_logo, 10);
                    else if (typeof object.team_base_logo === "number")
                        message.team_base_logo = object.team_base_logo;
                    else if (typeof object.team_base_logo === "object")
                        message.team_base_logo = new $util.LongBits(object.team_base_logo.low >>> 0, object.team_base_logo.high >>> 0).toNumber(true);
                if (object.team_ui_logo != null)
                    if ($util.Long)
                        (message.team_ui_logo = $util.Long.fromValue(object.team_ui_logo)).unsigned = true;
                    else if (typeof object.team_ui_logo === "string")
                        message.team_ui_logo = parseInt(object.team_ui_logo, 10);
                    else if (typeof object.team_ui_logo === "number")
                        message.team_ui_logo = object.team_ui_logo;
                    else if (typeof object.team_ui_logo === "object")
                        message.team_ui_logo = new $util.LongBits(object.team_ui_logo.low >>> 0, object.team_ui_logo.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a Team message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTATournament.Team
             * @static
             * @param {CMsgDOTATournament.Team} message Team
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Team.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.players = [];
                    object.player_buyin = [];
                    object.player_skill_level = [];
                }
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.team_gid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.team_gid = options.longs === String ? "0" : 0;
                    object.node_or_state = 0;
                    object.team_id = 0;
                    object.team_name = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.team_base_logo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.team_base_logo = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.team_ui_logo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.team_ui_logo = options.longs === String ? "0" : 0;
                    object.match_group_mask = 0;
                }
                if (message.team_gid != null && message.hasOwnProperty("team_gid"))
                    if (typeof message.team_gid === "number")
                        object.team_gid = options.longs === String ? String(message.team_gid) : message.team_gid;
                    else
                        object.team_gid = options.longs === String ? $util.Long.prototype.toString.call(message.team_gid) : options.longs === Number ? new $util.LongBits(message.team_gid.low >>> 0, message.team_gid.high >>> 0).toNumber() : message.team_gid;
                if (message.node_or_state != null && message.hasOwnProperty("node_or_state"))
                    object.node_or_state = message.node_or_state;
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        object.players[j] = message.players[j];
                }
                if (message.team_id != null && message.hasOwnProperty("team_id"))
                    object.team_id = message.team_id;
                if (message.team_name != null && message.hasOwnProperty("team_name"))
                    object.team_name = message.team_name;
                if (message.team_base_logo != null && message.hasOwnProperty("team_base_logo"))
                    if (typeof message.team_base_logo === "number")
                        object.team_base_logo = options.longs === String ? String(message.team_base_logo) : message.team_base_logo;
                    else
                        object.team_base_logo = options.longs === String ? $util.Long.prototype.toString.call(message.team_base_logo) : options.longs === Number ? new $util.LongBits(message.team_base_logo.low >>> 0, message.team_base_logo.high >>> 0).toNumber(true) : message.team_base_logo;
                if (message.team_ui_logo != null && message.hasOwnProperty("team_ui_logo"))
                    if (typeof message.team_ui_logo === "number")
                        object.team_ui_logo = options.longs === String ? String(message.team_ui_logo) : message.team_ui_logo;
                    else
                        object.team_ui_logo = options.longs === String ? $util.Long.prototype.toString.call(message.team_ui_logo) : options.longs === Number ? new $util.LongBits(message.team_ui_logo.low >>> 0, message.team_ui_logo.high >>> 0).toNumber(true) : message.team_ui_logo;
                if (message.player_buyin && message.player_buyin.length) {
                    object.player_buyin = [];
                    for (var j = 0; j < message.player_buyin.length; ++j)
                        object.player_buyin[j] = message.player_buyin[j];
                }
                if (message.player_skill_level && message.player_skill_level.length) {
                    object.player_skill_level = [];
                    for (var j = 0; j < message.player_skill_level.length; ++j)
                        object.player_skill_level[j] = message.player_skill_level[j];
                }
                if (message.match_group_mask != null && message.hasOwnProperty("match_group_mask"))
                    object.match_group_mask = message.match_group_mask;
                return object;
            };
    
            /**
             * Converts this Team to JSON.
             * @function toJSON
             * @memberof CMsgDOTATournament.Team
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Team.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Team;
        })();
    
        CMsgDOTATournament.Game = (function() {
    
            /**
             * Properties of a Game.
             * @memberof CMsgDOTATournament
             * @interface IGame
             * @property {number|null} [node_idx] Game node_idx
             * @property {number|Long|null} [lobby_id] Game lobby_id
             * @property {number|Long|null} [match_id] Game match_id
             * @property {boolean|null} [team_a_good] Game team_a_good
             * @property {ETournamentGameState|null} [state] Game state
             * @property {number|null} [start_time] Game start_time
             */
    
            /**
             * Constructs a new Game.
             * @memberof CMsgDOTATournament
             * @classdesc Represents a Game.
             * @implements IGame
             * @constructor
             * @param {CMsgDOTATournament.IGame=} [properties] Properties to set
             */
            function Game(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Game node_idx.
             * @member {number} node_idx
             * @memberof CMsgDOTATournament.Game
             * @instance
             */
            Game.prototype.node_idx = 0;
    
            /**
             * Game lobby_id.
             * @member {number|Long} lobby_id
             * @memberof CMsgDOTATournament.Game
             * @instance
             */
            Game.prototype.lobby_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Game match_id.
             * @member {number|Long} match_id
             * @memberof CMsgDOTATournament.Game
             * @instance
             */
            Game.prototype.match_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Game team_a_good.
             * @member {boolean} team_a_good
             * @memberof CMsgDOTATournament.Game
             * @instance
             */
            Game.prototype.team_a_good = false;
    
            /**
             * Game state.
             * @member {ETournamentGameState} state
             * @memberof CMsgDOTATournament.Game
             * @instance
             */
            Game.prototype.state = 0;
    
            /**
             * Game start_time.
             * @member {number} start_time
             * @memberof CMsgDOTATournament.Game
             * @instance
             */
            Game.prototype.start_time = 0;
    
            /**
             * Creates a new Game instance using the specified properties.
             * @function create
             * @memberof CMsgDOTATournament.Game
             * @static
             * @param {CMsgDOTATournament.IGame=} [properties] Properties to set
             * @returns {CMsgDOTATournament.Game} Game instance
             */
            Game.create = function create(properties) {
                return new Game(properties);
            };
    
            /**
             * Encodes the specified Game message. Does not implicitly {@link CMsgDOTATournament.Game.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTATournament.Game
             * @static
             * @param {CMsgDOTATournament.IGame} message Game message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Game.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.node_idx != null && Object.hasOwnProperty.call(message, "node_idx"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.node_idx);
                if (message.lobby_id != null && Object.hasOwnProperty.call(message, "lobby_id"))
                    writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.lobby_id);
                if (message.match_id != null && Object.hasOwnProperty.call(message, "match_id"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.match_id);
                if (message.team_a_good != null && Object.hasOwnProperty.call(message, "team_a_good"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.team_a_good);
                if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
                if (message.start_time != null && Object.hasOwnProperty.call(message, "start_time"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.start_time);
                return writer;
            };
    
            /**
             * Encodes the specified Game message, length delimited. Does not implicitly {@link CMsgDOTATournament.Game.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTATournament.Game
             * @static
             * @param {CMsgDOTATournament.IGame} message Game message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Game.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Game message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTATournament.Game
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTATournament.Game} Game
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Game.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTATournament.Game();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.node_idx = reader.uint32();
                        break;
                    case 2:
                        message.lobby_id = reader.fixed64();
                        break;
                    case 3:
                        message.match_id = reader.uint64();
                        break;
                    case 4:
                        message.team_a_good = reader.bool();
                        break;
                    case 5:
                        message.state = reader.int32();
                        break;
                    case 6:
                        message.start_time = reader.uint32();
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
             * @memberof CMsgDOTATournament.Game
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTATournament.Game} Game
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
             * @memberof CMsgDOTATournament.Game
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Game.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.node_idx != null && message.hasOwnProperty("node_idx"))
                    if (!$util.isInteger(message.node_idx))
                        return "node_idx: integer expected";
                if (message.lobby_id != null && message.hasOwnProperty("lobby_id"))
                    if (!$util.isInteger(message.lobby_id) && !(message.lobby_id && $util.isInteger(message.lobby_id.low) && $util.isInteger(message.lobby_id.high)))
                        return "lobby_id: integer|Long expected";
                if (message.match_id != null && message.hasOwnProperty("match_id"))
                    if (!$util.isInteger(message.match_id) && !(message.match_id && $util.isInteger(message.match_id.low) && $util.isInteger(message.match_id.high)))
                        return "match_id: integer|Long expected";
                if (message.team_a_good != null && message.hasOwnProperty("team_a_good"))
                    if (typeof message.team_a_good !== "boolean")
                        return "team_a_good: boolean expected";
                if (message.state != null && message.hasOwnProperty("state"))
                    switch (message.state) {
                    default:
                        return "state: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 20:
                    case 21:
                    case 22:
                    case 23:
                    case 40:
                    case 41:
                        break;
                    }
                if (message.start_time != null && message.hasOwnProperty("start_time"))
                    if (!$util.isInteger(message.start_time))
                        return "start_time: integer expected";
                return null;
            };
    
            /**
             * Creates a Game message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTATournament.Game
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTATournament.Game} Game
             */
            Game.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTATournament.Game)
                    return object;
                var message = new $root.CMsgDOTATournament.Game();
                if (object.node_idx != null)
                    message.node_idx = object.node_idx >>> 0;
                if (object.lobby_id != null)
                    if ($util.Long)
                        (message.lobby_id = $util.Long.fromValue(object.lobby_id)).unsigned = false;
                    else if (typeof object.lobby_id === "string")
                        message.lobby_id = parseInt(object.lobby_id, 10);
                    else if (typeof object.lobby_id === "number")
                        message.lobby_id = object.lobby_id;
                    else if (typeof object.lobby_id === "object")
                        message.lobby_id = new $util.LongBits(object.lobby_id.low >>> 0, object.lobby_id.high >>> 0).toNumber();
                if (object.match_id != null)
                    if ($util.Long)
                        (message.match_id = $util.Long.fromValue(object.match_id)).unsigned = true;
                    else if (typeof object.match_id === "string")
                        message.match_id = parseInt(object.match_id, 10);
                    else if (typeof object.match_id === "number")
                        message.match_id = object.match_id;
                    else if (typeof object.match_id === "object")
                        message.match_id = new $util.LongBits(object.match_id.low >>> 0, object.match_id.high >>> 0).toNumber(true);
                if (object.team_a_good != null)
                    message.team_a_good = Boolean(object.team_a_good);
                switch (object.state) {
                case "k_ETournamentGameState_Unknown":
                case 0:
                    message.state = 0;
                    break;
                case "k_ETournamentGameState_Canceled":
                case 1:
                    message.state = 1;
                    break;
                case "k_ETournamentGameState_Scheduled":
                case 2:
                    message.state = 2;
                    break;
                case "k_ETournamentGameState_Active":
                case 3:
                    message.state = 3;
                    break;
                case "k_ETournamentGameState_RadVictory":
                case 20:
                    message.state = 20;
                    break;
                case "k_ETournamentGameState_DireVictory":
                case 21:
                    message.state = 21;
                    break;
                case "k_ETournamentGameState_RadVictoryByForfeit":
                case 22:
                    message.state = 22;
                    break;
                case "k_ETournamentGameState_DireVictoryByForfeit":
                case 23:
                    message.state = 23;
                    break;
                case "k_ETournamentGameState_ServerFailure":
                case 40:
                    message.state = 40;
                    break;
                case "k_ETournamentGameState_NotNeeded":
                case 41:
                    message.state = 41;
                    break;
                }
                if (object.start_time != null)
                    message.start_time = object.start_time >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Game message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTATournament.Game
             * @static
             * @param {CMsgDOTATournament.Game} message Game
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Game.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.node_idx = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.lobby_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.lobby_id = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.match_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.match_id = options.longs === String ? "0" : 0;
                    object.team_a_good = false;
                    object.state = options.enums === String ? "k_ETournamentGameState_Unknown" : 0;
                    object.start_time = 0;
                }
                if (message.node_idx != null && message.hasOwnProperty("node_idx"))
                    object.node_idx = message.node_idx;
                if (message.lobby_id != null && message.hasOwnProperty("lobby_id"))
                    if (typeof message.lobby_id === "number")
                        object.lobby_id = options.longs === String ? String(message.lobby_id) : message.lobby_id;
                    else
                        object.lobby_id = options.longs === String ? $util.Long.prototype.toString.call(message.lobby_id) : options.longs === Number ? new $util.LongBits(message.lobby_id.low >>> 0, message.lobby_id.high >>> 0).toNumber() : message.lobby_id;
                if (message.match_id != null && message.hasOwnProperty("match_id"))
                    if (typeof message.match_id === "number")
                        object.match_id = options.longs === String ? String(message.match_id) : message.match_id;
                    else
                        object.match_id = options.longs === String ? $util.Long.prototype.toString.call(message.match_id) : options.longs === Number ? new $util.LongBits(message.match_id.low >>> 0, message.match_id.high >>> 0).toNumber(true) : message.match_id;
                if (message.team_a_good != null && message.hasOwnProperty("team_a_good"))
                    object.team_a_good = message.team_a_good;
                if (message.state != null && message.hasOwnProperty("state"))
                    object.state = options.enums === String ? $root.ETournamentGameState[message.state] : message.state;
                if (message.start_time != null && message.hasOwnProperty("start_time"))
                    object.start_time = message.start_time;
                return object;
            };
    
            /**
             * Converts this Game to JSON.
             * @function toJSON
             * @memberof CMsgDOTATournament.Game
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Game.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Game;
        })();
    
        CMsgDOTATournament.Node = (function() {
    
            /**
             * Properties of a Node.
             * @memberof CMsgDOTATournament
             * @interface INode
             * @property {number|null} [node_id] Node node_id
             * @property {number|null} [team_idx_a] Node team_idx_a
             * @property {number|null} [team_idx_b] Node team_idx_b
             * @property {ETournamentNodeState|null} [node_state] Node node_state
             */
    
            /**
             * Constructs a new Node.
             * @memberof CMsgDOTATournament
             * @classdesc Represents a Node.
             * @implements INode
             * @constructor
             * @param {CMsgDOTATournament.INode=} [properties] Properties to set
             */
            function Node(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Node node_id.
             * @member {number} node_id
             * @memberof CMsgDOTATournament.Node
             * @instance
             */
            Node.prototype.node_id = 0;
    
            /**
             * Node team_idx_a.
             * @member {number} team_idx_a
             * @memberof CMsgDOTATournament.Node
             * @instance
             */
            Node.prototype.team_idx_a = 0;
    
            /**
             * Node team_idx_b.
             * @member {number} team_idx_b
             * @memberof CMsgDOTATournament.Node
             * @instance
             */
            Node.prototype.team_idx_b = 0;
    
            /**
             * Node node_state.
             * @member {ETournamentNodeState} node_state
             * @memberof CMsgDOTATournament.Node
             * @instance
             */
            Node.prototype.node_state = 0;
    
            /**
             * Creates a new Node instance using the specified properties.
             * @function create
             * @memberof CMsgDOTATournament.Node
             * @static
             * @param {CMsgDOTATournament.INode=} [properties] Properties to set
             * @returns {CMsgDOTATournament.Node} Node instance
             */
            Node.create = function create(properties) {
                return new Node(properties);
            };
    
            /**
             * Encodes the specified Node message. Does not implicitly {@link CMsgDOTATournament.Node.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTATournament.Node
             * @static
             * @param {CMsgDOTATournament.INode} message Node message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Node.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.node_id != null && Object.hasOwnProperty.call(message, "node_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.node_id);
                if (message.team_idx_a != null && Object.hasOwnProperty.call(message, "team_idx_a"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.team_idx_a);
                if (message.team_idx_b != null && Object.hasOwnProperty.call(message, "team_idx_b"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.team_idx_b);
                if (message.node_state != null && Object.hasOwnProperty.call(message, "node_state"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.node_state);
                return writer;
            };
    
            /**
             * Encodes the specified Node message, length delimited. Does not implicitly {@link CMsgDOTATournament.Node.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTATournament.Node
             * @static
             * @param {CMsgDOTATournament.INode} message Node message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Node.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Node message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTATournament.Node
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTATournament.Node} Node
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Node.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTATournament.Node();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.node_id = reader.uint32();
                        break;
                    case 2:
                        message.team_idx_a = reader.uint32();
                        break;
                    case 3:
                        message.team_idx_b = reader.uint32();
                        break;
                    case 4:
                        message.node_state = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Node message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTATournament.Node
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTATournament.Node} Node
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Node.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Node message.
             * @function verify
             * @memberof CMsgDOTATournament.Node
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Node.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.node_id != null && message.hasOwnProperty("node_id"))
                    if (!$util.isInteger(message.node_id))
                        return "node_id: integer expected";
                if (message.team_idx_a != null && message.hasOwnProperty("team_idx_a"))
                    if (!$util.isInteger(message.team_idx_a))
                        return "team_idx_a: integer expected";
                if (message.team_idx_b != null && message.hasOwnProperty("team_idx_b"))
                    if (!$util.isInteger(message.team_idx_b))
                        return "team_idx_b: integer expected";
                if (message.node_state != null && message.hasOwnProperty("node_state"))
                    switch (message.node_state) {
                    default:
                        return "node_state: enum value expected";
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
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a Node message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTATournament.Node
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTATournament.Node} Node
             */
            Node.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTATournament.Node)
                    return object;
                var message = new $root.CMsgDOTATournament.Node();
                if (object.node_id != null)
                    message.node_id = object.node_id >>> 0;
                if (object.team_idx_a != null)
                    message.team_idx_a = object.team_idx_a >>> 0;
                if (object.team_idx_b != null)
                    message.team_idx_b = object.team_idx_b >>> 0;
                switch (object.node_state) {
                case "k_ETournamentNodeState_Unknown":
                case 0:
                    message.node_state = 0;
                    break;
                case "k_ETournamentNodeState_Canceled":
                case 1:
                    message.node_state = 1;
                    break;
                case "k_ETournamentNodeState_TeamsNotYetAssigned":
                case 2:
                    message.node_state = 2;
                    break;
                case "k_ETournamentNodeState_InBetweenGames":
                case 3:
                    message.node_state = 3;
                    break;
                case "k_ETournamentNodeState_GameInProgress":
                case 4:
                    message.node_state = 4;
                    break;
                case "k_ETournamentNodeState_A_Won":
                case 5:
                    message.node_state = 5;
                    break;
                case "k_ETournamentNodeState_B_Won":
                case 6:
                    message.node_state = 6;
                    break;
                case "k_ETournamentNodeState_A_WonByForfeit":
                case 7:
                    message.node_state = 7;
                    break;
                case "k_ETournamentNodeState_B_WonByForfeit":
                case 8:
                    message.node_state = 8;
                    break;
                case "k_ETournamentNodeState_A_Bye":
                case 9:
                    message.node_state = 9;
                    break;
                case "k_ETournamentNodeState_A_Abandoned":
                case 10:
                    message.node_state = 10;
                    break;
                case "k_ETournamentNodeState_ServerFailure":
                case 11:
                    message.node_state = 11;
                    break;
                case "k_ETournamentNodeState_A_TimeoutForfeit":
                case 12:
                    message.node_state = 12;
                    break;
                case "k_ETournamentNodeState_A_TimeoutRefund":
                case 13:
                    message.node_state = 13;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Node message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTATournament.Node
             * @static
             * @param {CMsgDOTATournament.Node} message Node
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Node.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.node_id = 0;
                    object.team_idx_a = 0;
                    object.team_idx_b = 0;
                    object.node_state = options.enums === String ? "k_ETournamentNodeState_Unknown" : 0;
                }
                if (message.node_id != null && message.hasOwnProperty("node_id"))
                    object.node_id = message.node_id;
                if (message.team_idx_a != null && message.hasOwnProperty("team_idx_a"))
                    object.team_idx_a = message.team_idx_a;
                if (message.team_idx_b != null && message.hasOwnProperty("team_idx_b"))
                    object.team_idx_b = message.team_idx_b;
                if (message.node_state != null && message.hasOwnProperty("node_state"))
                    object.node_state = options.enums === String ? $root.ETournamentNodeState[message.node_state] : message.node_state;
                return object;
            };
    
            /**
             * Converts this Node to JSON.
             * @function toJSON
             * @memberof CMsgDOTATournament.Node
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Node.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Node;
        })();
    
        return CMsgDOTATournament;
    })();
    
    $root.CMsgDOTATournamentStateChange = (function() {
    
        /**
         * Properties of a CMsgDOTATournamentStateChange.
         * @exports ICMsgDOTATournamentStateChange
         * @interface ICMsgDOTATournamentStateChange
         * @property {number|null} [new_tournament_id] CMsgDOTATournamentStateChange new_tournament_id
         * @property {ETournamentEvent|null} [event] CMsgDOTATournamentStateChange event
         * @property {ETournamentState|null} [new_tournament_state] CMsgDOTATournamentStateChange new_tournament_state
         * @property {Array.<CMsgDOTATournamentStateChange.IGameChange>|null} [game_changes] CMsgDOTATournamentStateChange game_changes
         * @property {Array.<CMsgDOTATournamentStateChange.ITeamChange>|null} [team_changes] CMsgDOTATournamentStateChange team_changes
         * @property {Array.<number>|null} [merged_tournament_ids] CMsgDOTATournamentStateChange merged_tournament_ids
         * @property {number|null} [state_seq_num] CMsgDOTATournamentStateChange state_seq_num
         */
    
        /**
         * Constructs a new CMsgDOTATournamentStateChange.
         * @exports CMsgDOTATournamentStateChange
         * @classdesc Represents a CMsgDOTATournamentStateChange.
         * @implements ICMsgDOTATournamentStateChange
         * @constructor
         * @param {ICMsgDOTATournamentStateChange=} [properties] Properties to set
         */
        function CMsgDOTATournamentStateChange(properties) {
            this.game_changes = [];
            this.team_changes = [];
            this.merged_tournament_ids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTATournamentStateChange new_tournament_id.
         * @member {number} new_tournament_id
         * @memberof CMsgDOTATournamentStateChange
         * @instance
         */
        CMsgDOTATournamentStateChange.prototype.new_tournament_id = 0;
    
        /**
         * CMsgDOTATournamentStateChange event.
         * @member {ETournamentEvent} event
         * @memberof CMsgDOTATournamentStateChange
         * @instance
         */
        CMsgDOTATournamentStateChange.prototype.event = 0;
    
        /**
         * CMsgDOTATournamentStateChange new_tournament_state.
         * @member {ETournamentState} new_tournament_state
         * @memberof CMsgDOTATournamentStateChange
         * @instance
         */
        CMsgDOTATournamentStateChange.prototype.new_tournament_state = 0;
    
        /**
         * CMsgDOTATournamentStateChange game_changes.
         * @member {Array.<CMsgDOTATournamentStateChange.IGameChange>} game_changes
         * @memberof CMsgDOTATournamentStateChange
         * @instance
         */
        CMsgDOTATournamentStateChange.prototype.game_changes = $util.emptyArray;
    
        /**
         * CMsgDOTATournamentStateChange team_changes.
         * @member {Array.<CMsgDOTATournamentStateChange.ITeamChange>} team_changes
         * @memberof CMsgDOTATournamentStateChange
         * @instance
         */
        CMsgDOTATournamentStateChange.prototype.team_changes = $util.emptyArray;
    
        /**
         * CMsgDOTATournamentStateChange merged_tournament_ids.
         * @member {Array.<number>} merged_tournament_ids
         * @memberof CMsgDOTATournamentStateChange
         * @instance
         */
        CMsgDOTATournamentStateChange.prototype.merged_tournament_ids = $util.emptyArray;
    
        /**
         * CMsgDOTATournamentStateChange state_seq_num.
         * @member {number} state_seq_num
         * @memberof CMsgDOTATournamentStateChange
         * @instance
         */
        CMsgDOTATournamentStateChange.prototype.state_seq_num = 0;
    
        /**
         * Creates a new CMsgDOTATournamentStateChange instance using the specified properties.
         * @function create
         * @memberof CMsgDOTATournamentStateChange
         * @static
         * @param {ICMsgDOTATournamentStateChange=} [properties] Properties to set
         * @returns {CMsgDOTATournamentStateChange} CMsgDOTATournamentStateChange instance
         */
        CMsgDOTATournamentStateChange.create = function create(properties) {
            return new CMsgDOTATournamentStateChange(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTATournamentStateChange message. Does not implicitly {@link CMsgDOTATournamentStateChange.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTATournamentStateChange
         * @static
         * @param {ICMsgDOTATournamentStateChange} message CMsgDOTATournamentStateChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTATournamentStateChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.new_tournament_id != null && Object.hasOwnProperty.call(message, "new_tournament_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.new_tournament_id);
            if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.event);
            if (message.new_tournament_state != null && Object.hasOwnProperty.call(message, "new_tournament_state"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.new_tournament_state);
            if (message.game_changes != null && message.game_changes.length)
                for (var i = 0; i < message.game_changes.length; ++i)
                    $root.CMsgDOTATournamentStateChange.GameChange.encode(message.game_changes[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.team_changes != null && message.team_changes.length)
                for (var i = 0; i < message.team_changes.length; ++i)
                    $root.CMsgDOTATournamentStateChange.TeamChange.encode(message.team_changes[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.merged_tournament_ids != null && message.merged_tournament_ids.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (var i = 0; i < message.merged_tournament_ids.length; ++i)
                    writer.uint32(message.merged_tournament_ids[i]);
                writer.ldelim();
            }
            if (message.state_seq_num != null && Object.hasOwnProperty.call(message, "state_seq_num"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.state_seq_num);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTATournamentStateChange message, length delimited. Does not implicitly {@link CMsgDOTATournamentStateChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTATournamentStateChange
         * @static
         * @param {ICMsgDOTATournamentStateChange} message CMsgDOTATournamentStateChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTATournamentStateChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTATournamentStateChange message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTATournamentStateChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTATournamentStateChange} CMsgDOTATournamentStateChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTATournamentStateChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTATournamentStateChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.new_tournament_id = reader.uint32();
                    break;
                case 2:
                    message.event = reader.int32();
                    break;
                case 3:
                    message.new_tournament_state = reader.int32();
                    break;
                case 4:
                    if (!(message.game_changes && message.game_changes.length))
                        message.game_changes = [];
                    message.game_changes.push($root.CMsgDOTATournamentStateChange.GameChange.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.team_changes && message.team_changes.length))
                        message.team_changes = [];
                    message.team_changes.push($root.CMsgDOTATournamentStateChange.TeamChange.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.merged_tournament_ids && message.merged_tournament_ids.length))
                        message.merged_tournament_ids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.merged_tournament_ids.push(reader.uint32());
                    } else
                        message.merged_tournament_ids.push(reader.uint32());
                    break;
                case 7:
                    message.state_seq_num = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTATournamentStateChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTATournamentStateChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTATournamentStateChange} CMsgDOTATournamentStateChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTATournamentStateChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTATournamentStateChange message.
         * @function verify
         * @memberof CMsgDOTATournamentStateChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTATournamentStateChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.new_tournament_id != null && message.hasOwnProperty("new_tournament_id"))
                if (!$util.isInteger(message.new_tournament_id))
                    return "new_tournament_id: integer expected";
            if (message.event != null && message.hasOwnProperty("event"))
                switch (message.event) {
                default:
                    return "event: enum value expected";
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
                    break;
                }
            if (message.new_tournament_state != null && message.hasOwnProperty("new_tournament_state"))
                switch (message.new_tournament_state) {
                default:
                    return "new_tournament_state: enum value expected";
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
                case 100:
                case 101:
                    break;
                }
            if (message.game_changes != null && message.hasOwnProperty("game_changes")) {
                if (!Array.isArray(message.game_changes))
                    return "game_changes: array expected";
                for (var i = 0; i < message.game_changes.length; ++i) {
                    var error = $root.CMsgDOTATournamentStateChange.GameChange.verify(message.game_changes[i]);
                    if (error)
                        return "game_changes." + error;
                }
            }
            if (message.team_changes != null && message.hasOwnProperty("team_changes")) {
                if (!Array.isArray(message.team_changes))
                    return "team_changes: array expected";
                for (var i = 0; i < message.team_changes.length; ++i) {
                    var error = $root.CMsgDOTATournamentStateChange.TeamChange.verify(message.team_changes[i]);
                    if (error)
                        return "team_changes." + error;
                }
            }
            if (message.merged_tournament_ids != null && message.hasOwnProperty("merged_tournament_ids")) {
                if (!Array.isArray(message.merged_tournament_ids))
                    return "merged_tournament_ids: array expected";
                for (var i = 0; i < message.merged_tournament_ids.length; ++i)
                    if (!$util.isInteger(message.merged_tournament_ids[i]))
                        return "merged_tournament_ids: integer[] expected";
            }
            if (message.state_seq_num != null && message.hasOwnProperty("state_seq_num"))
                if (!$util.isInteger(message.state_seq_num))
                    return "state_seq_num: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgDOTATournamentStateChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTATournamentStateChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTATournamentStateChange} CMsgDOTATournamentStateChange
         */
        CMsgDOTATournamentStateChange.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTATournamentStateChange)
                return object;
            var message = new $root.CMsgDOTATournamentStateChange();
            if (object.new_tournament_id != null)
                message.new_tournament_id = object.new_tournament_id >>> 0;
            switch (object.event) {
            case "k_ETournamentEvent_None":
            case 0:
                message.event = 0;
                break;
            case "k_ETournamentEvent_TournamentCreated":
            case 1:
                message.event = 1;
                break;
            case "k_ETournamentEvent_TournamentsMerged":
            case 2:
                message.event = 2;
                break;
            case "k_ETournamentEvent_GameOutcome":
            case 3:
                message.event = 3;
                break;
            case "k_ETournamentEvent_TeamGivenBye":
            case 4:
                message.event = 4;
                break;
            case "k_ETournamentEvent_TournamentCanceledByAdmin":
            case 5:
                message.event = 5;
                break;
            case "k_ETournamentEvent_TeamAbandoned":
            case 6:
                message.event = 6;
                break;
            case "k_ETournamentEvent_ScheduledGameStarted":
            case 7:
                message.event = 7;
                break;
            case "k_ETournamentEvent_Canceled":
            case 8:
                message.event = 8;
                break;
            case "k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeRefund":
            case 9:
                message.event = 9;
                break;
            case "k_ETournamentEvent_TeamParticipationTimedOut_EntryFeeForfeit":
            case 10:
                message.event = 10;
                break;
            case "k_ETournamentEvent_TeamParticipationTimedOut_GrantedVictory":
            case 11:
                message.event = 11;
                break;
            }
            switch (object.new_tournament_state) {
            case "k_ETournamentState_Unknown":
            case 0:
                message.new_tournament_state = 0;
                break;
            case "k_ETournamentState_CanceledByAdmin":
            case 1:
                message.new_tournament_state = 1;
                break;
            case "k_ETournamentState_Completed":
            case 2:
                message.new_tournament_state = 2;
                break;
            case "k_ETournamentState_Merged":
            case 3:
                message.new_tournament_state = 3;
                break;
            case "k_ETournamentState_ServerFailure":
            case 4:
                message.new_tournament_state = 4;
                break;
            case "k_ETournamentState_TeamAbandoned":
            case 5:
                message.new_tournament_state = 5;
                break;
            case "k_ETournamentState_TeamTimeoutForfeit":
            case 6:
                message.new_tournament_state = 6;
                break;
            case "k_ETournamentState_TeamTimeoutRefund":
            case 7:
                message.new_tournament_state = 7;
                break;
            case "k_ETournamentState_ServerFailureGrantedVictory":
            case 8:
                message.new_tournament_state = 8;
                break;
            case "k_ETournamentState_TeamTimeoutGrantedVictory":
            case 9:
                message.new_tournament_state = 9;
                break;
            case "k_ETournamentState_InProgress":
            case 100:
                message.new_tournament_state = 100;
                break;
            case "k_ETournamentState_WaitingToMerge":
            case 101:
                message.new_tournament_state = 101;
                break;
            }
            if (object.game_changes) {
                if (!Array.isArray(object.game_changes))
                    throw TypeError(".CMsgDOTATournamentStateChange.game_changes: array expected");
                message.game_changes = [];
                for (var i = 0; i < object.game_changes.length; ++i) {
                    if (typeof object.game_changes[i] !== "object")
                        throw TypeError(".CMsgDOTATournamentStateChange.game_changes: object expected");
                    message.game_changes[i] = $root.CMsgDOTATournamentStateChange.GameChange.fromObject(object.game_changes[i]);
                }
            }
            if (object.team_changes) {
                if (!Array.isArray(object.team_changes))
                    throw TypeError(".CMsgDOTATournamentStateChange.team_changes: array expected");
                message.team_changes = [];
                for (var i = 0; i < object.team_changes.length; ++i) {
                    if (typeof object.team_changes[i] !== "object")
                        throw TypeError(".CMsgDOTATournamentStateChange.team_changes: object expected");
                    message.team_changes[i] = $root.CMsgDOTATournamentStateChange.TeamChange.fromObject(object.team_changes[i]);
                }
            }
            if (object.merged_tournament_ids) {
                if (!Array.isArray(object.merged_tournament_ids))
                    throw TypeError(".CMsgDOTATournamentStateChange.merged_tournament_ids: array expected");
                message.merged_tournament_ids = [];
                for (var i = 0; i < object.merged_tournament_ids.length; ++i)
                    message.merged_tournament_ids[i] = object.merged_tournament_ids[i] >>> 0;
            }
            if (object.state_seq_num != null)
                message.state_seq_num = object.state_seq_num >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTATournamentStateChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTATournamentStateChange
         * @static
         * @param {CMsgDOTATournamentStateChange} message CMsgDOTATournamentStateChange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTATournamentStateChange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.game_changes = [];
                object.team_changes = [];
                object.merged_tournament_ids = [];
            }
            if (options.defaults) {
                object.new_tournament_id = 0;
                object.event = options.enums === String ? "k_ETournamentEvent_None" : 0;
                object.new_tournament_state = options.enums === String ? "k_ETournamentState_Unknown" : 0;
                object.state_seq_num = 0;
            }
            if (message.new_tournament_id != null && message.hasOwnProperty("new_tournament_id"))
                object.new_tournament_id = message.new_tournament_id;
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = options.enums === String ? $root.ETournamentEvent[message.event] : message.event;
            if (message.new_tournament_state != null && message.hasOwnProperty("new_tournament_state"))
                object.new_tournament_state = options.enums === String ? $root.ETournamentState[message.new_tournament_state] : message.new_tournament_state;
            if (message.game_changes && message.game_changes.length) {
                object.game_changes = [];
                for (var j = 0; j < message.game_changes.length; ++j)
                    object.game_changes[j] = $root.CMsgDOTATournamentStateChange.GameChange.toObject(message.game_changes[j], options);
            }
            if (message.team_changes && message.team_changes.length) {
                object.team_changes = [];
                for (var j = 0; j < message.team_changes.length; ++j)
                    object.team_changes[j] = $root.CMsgDOTATournamentStateChange.TeamChange.toObject(message.team_changes[j], options);
            }
            if (message.merged_tournament_ids && message.merged_tournament_ids.length) {
                object.merged_tournament_ids = [];
                for (var j = 0; j < message.merged_tournament_ids.length; ++j)
                    object.merged_tournament_ids[j] = message.merged_tournament_ids[j];
            }
            if (message.state_seq_num != null && message.hasOwnProperty("state_seq_num"))
                object.state_seq_num = message.state_seq_num;
            return object;
        };
    
        /**
         * Converts this CMsgDOTATournamentStateChange to JSON.
         * @function toJSON
         * @memberof CMsgDOTATournamentStateChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTATournamentStateChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgDOTATournamentStateChange.GameChange = (function() {
    
            /**
             * Properties of a GameChange.
             * @memberof CMsgDOTATournamentStateChange
             * @interface IGameChange
             * @property {number|Long|null} [match_id] GameChange match_id
             * @property {ETournamentGameState|null} [new_state] GameChange new_state
             */
    
            /**
             * Constructs a new GameChange.
             * @memberof CMsgDOTATournamentStateChange
             * @classdesc Represents a GameChange.
             * @implements IGameChange
             * @constructor
             * @param {CMsgDOTATournamentStateChange.IGameChange=} [properties] Properties to set
             */
            function GameChange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameChange match_id.
             * @member {number|Long} match_id
             * @memberof CMsgDOTATournamentStateChange.GameChange
             * @instance
             */
            GameChange.prototype.match_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * GameChange new_state.
             * @member {ETournamentGameState} new_state
             * @memberof CMsgDOTATournamentStateChange.GameChange
             * @instance
             */
            GameChange.prototype.new_state = 0;
    
            /**
             * Creates a new GameChange instance using the specified properties.
             * @function create
             * @memberof CMsgDOTATournamentStateChange.GameChange
             * @static
             * @param {CMsgDOTATournamentStateChange.IGameChange=} [properties] Properties to set
             * @returns {CMsgDOTATournamentStateChange.GameChange} GameChange instance
             */
            GameChange.create = function create(properties) {
                return new GameChange(properties);
            };
    
            /**
             * Encodes the specified GameChange message. Does not implicitly {@link CMsgDOTATournamentStateChange.GameChange.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTATournamentStateChange.GameChange
             * @static
             * @param {CMsgDOTATournamentStateChange.IGameChange} message GameChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameChange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.match_id != null && Object.hasOwnProperty.call(message, "match_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.match_id);
                if (message.new_state != null && Object.hasOwnProperty.call(message, "new_state"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.new_state);
                return writer;
            };
    
            /**
             * Encodes the specified GameChange message, length delimited. Does not implicitly {@link CMsgDOTATournamentStateChange.GameChange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTATournamentStateChange.GameChange
             * @static
             * @param {CMsgDOTATournamentStateChange.IGameChange} message GameChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameChange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GameChange message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTATournamentStateChange.GameChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTATournamentStateChange.GameChange} GameChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameChange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTATournamentStateChange.GameChange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.match_id = reader.uint64();
                        break;
                    case 2:
                        message.new_state = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GameChange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTATournamentStateChange.GameChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTATournamentStateChange.GameChange} GameChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameChange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GameChange message.
             * @function verify
             * @memberof CMsgDOTATournamentStateChange.GameChange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameChange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.match_id != null && message.hasOwnProperty("match_id"))
                    if (!$util.isInteger(message.match_id) && !(message.match_id && $util.isInteger(message.match_id.low) && $util.isInteger(message.match_id.high)))
                        return "match_id: integer|Long expected";
                if (message.new_state != null && message.hasOwnProperty("new_state"))
                    switch (message.new_state) {
                    default:
                        return "new_state: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 20:
                    case 21:
                    case 22:
                    case 23:
                    case 40:
                    case 41:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a GameChange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTATournamentStateChange.GameChange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTATournamentStateChange.GameChange} GameChange
             */
            GameChange.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTATournamentStateChange.GameChange)
                    return object;
                var message = new $root.CMsgDOTATournamentStateChange.GameChange();
                if (object.match_id != null)
                    if ($util.Long)
                        (message.match_id = $util.Long.fromValue(object.match_id)).unsigned = true;
                    else if (typeof object.match_id === "string")
                        message.match_id = parseInt(object.match_id, 10);
                    else if (typeof object.match_id === "number")
                        message.match_id = object.match_id;
                    else if (typeof object.match_id === "object")
                        message.match_id = new $util.LongBits(object.match_id.low >>> 0, object.match_id.high >>> 0).toNumber(true);
                switch (object.new_state) {
                case "k_ETournamentGameState_Unknown":
                case 0:
                    message.new_state = 0;
                    break;
                case "k_ETournamentGameState_Canceled":
                case 1:
                    message.new_state = 1;
                    break;
                case "k_ETournamentGameState_Scheduled":
                case 2:
                    message.new_state = 2;
                    break;
                case "k_ETournamentGameState_Active":
                case 3:
                    message.new_state = 3;
                    break;
                case "k_ETournamentGameState_RadVictory":
                case 20:
                    message.new_state = 20;
                    break;
                case "k_ETournamentGameState_DireVictory":
                case 21:
                    message.new_state = 21;
                    break;
                case "k_ETournamentGameState_RadVictoryByForfeit":
                case 22:
                    message.new_state = 22;
                    break;
                case "k_ETournamentGameState_DireVictoryByForfeit":
                case 23:
                    message.new_state = 23;
                    break;
                case "k_ETournamentGameState_ServerFailure":
                case 40:
                    message.new_state = 40;
                    break;
                case "k_ETournamentGameState_NotNeeded":
                case 41:
                    message.new_state = 41;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a GameChange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTATournamentStateChange.GameChange
             * @static
             * @param {CMsgDOTATournamentStateChange.GameChange} message GameChange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameChange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.match_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.match_id = options.longs === String ? "0" : 0;
                    object.new_state = options.enums === String ? "k_ETournamentGameState_Unknown" : 0;
                }
                if (message.match_id != null && message.hasOwnProperty("match_id"))
                    if (typeof message.match_id === "number")
                        object.match_id = options.longs === String ? String(message.match_id) : message.match_id;
                    else
                        object.match_id = options.longs === String ? $util.Long.prototype.toString.call(message.match_id) : options.longs === Number ? new $util.LongBits(message.match_id.low >>> 0, message.match_id.high >>> 0).toNumber(true) : message.match_id;
                if (message.new_state != null && message.hasOwnProperty("new_state"))
                    object.new_state = options.enums === String ? $root.ETournamentGameState[message.new_state] : message.new_state;
                return object;
            };
    
            /**
             * Converts this GameChange to JSON.
             * @function toJSON
             * @memberof CMsgDOTATournamentStateChange.GameChange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameChange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GameChange;
        })();
    
        CMsgDOTATournamentStateChange.TeamChange = (function() {
    
            /**
             * Properties of a TeamChange.
             * @memberof CMsgDOTATournamentStateChange
             * @interface ITeamChange
             * @property {number|Long|null} [team_gid] TeamChange team_gid
             * @property {number|null} [new_node_or_state] TeamChange new_node_or_state
             * @property {number|null} [old_node_or_state] TeamChange old_node_or_state
             */
    
            /**
             * Constructs a new TeamChange.
             * @memberof CMsgDOTATournamentStateChange
             * @classdesc Represents a TeamChange.
             * @implements ITeamChange
             * @constructor
             * @param {CMsgDOTATournamentStateChange.ITeamChange=} [properties] Properties to set
             */
            function TeamChange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TeamChange team_gid.
             * @member {number|Long} team_gid
             * @memberof CMsgDOTATournamentStateChange.TeamChange
             * @instance
             */
            TeamChange.prototype.team_gid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * TeamChange new_node_or_state.
             * @member {number} new_node_or_state
             * @memberof CMsgDOTATournamentStateChange.TeamChange
             * @instance
             */
            TeamChange.prototype.new_node_or_state = 0;
    
            /**
             * TeamChange old_node_or_state.
             * @member {number} old_node_or_state
             * @memberof CMsgDOTATournamentStateChange.TeamChange
             * @instance
             */
            TeamChange.prototype.old_node_or_state = 0;
    
            /**
             * Creates a new TeamChange instance using the specified properties.
             * @function create
             * @memberof CMsgDOTATournamentStateChange.TeamChange
             * @static
             * @param {CMsgDOTATournamentStateChange.ITeamChange=} [properties] Properties to set
             * @returns {CMsgDOTATournamentStateChange.TeamChange} TeamChange instance
             */
            TeamChange.create = function create(properties) {
                return new TeamChange(properties);
            };
    
            /**
             * Encodes the specified TeamChange message. Does not implicitly {@link CMsgDOTATournamentStateChange.TeamChange.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTATournamentStateChange.TeamChange
             * @static
             * @param {CMsgDOTATournamentStateChange.ITeamChange} message TeamChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TeamChange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.team_gid != null && Object.hasOwnProperty.call(message, "team_gid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.team_gid);
                if (message.new_node_or_state != null && Object.hasOwnProperty.call(message, "new_node_or_state"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.new_node_or_state);
                if (message.old_node_or_state != null && Object.hasOwnProperty.call(message, "old_node_or_state"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.old_node_or_state);
                return writer;
            };
    
            /**
             * Encodes the specified TeamChange message, length delimited. Does not implicitly {@link CMsgDOTATournamentStateChange.TeamChange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTATournamentStateChange.TeamChange
             * @static
             * @param {CMsgDOTATournamentStateChange.ITeamChange} message TeamChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TeamChange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TeamChange message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTATournamentStateChange.TeamChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTATournamentStateChange.TeamChange} TeamChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TeamChange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTATournamentStateChange.TeamChange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.team_gid = reader.uint64();
                        break;
                    case 2:
                        message.new_node_or_state = reader.uint32();
                        break;
                    case 3:
                        message.old_node_or_state = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TeamChange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTATournamentStateChange.TeamChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTATournamentStateChange.TeamChange} TeamChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TeamChange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TeamChange message.
             * @function verify
             * @memberof CMsgDOTATournamentStateChange.TeamChange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TeamChange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.team_gid != null && message.hasOwnProperty("team_gid"))
                    if (!$util.isInteger(message.team_gid) && !(message.team_gid && $util.isInteger(message.team_gid.low) && $util.isInteger(message.team_gid.high)))
                        return "team_gid: integer|Long expected";
                if (message.new_node_or_state != null && message.hasOwnProperty("new_node_or_state"))
                    if (!$util.isInteger(message.new_node_or_state))
                        return "new_node_or_state: integer expected";
                if (message.old_node_or_state != null && message.hasOwnProperty("old_node_or_state"))
                    if (!$util.isInteger(message.old_node_or_state))
                        return "old_node_or_state: integer expected";
                return null;
            };
    
            /**
             * Creates a TeamChange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTATournamentStateChange.TeamChange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTATournamentStateChange.TeamChange} TeamChange
             */
            TeamChange.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTATournamentStateChange.TeamChange)
                    return object;
                var message = new $root.CMsgDOTATournamentStateChange.TeamChange();
                if (object.team_gid != null)
                    if ($util.Long)
                        (message.team_gid = $util.Long.fromValue(object.team_gid)).unsigned = true;
                    else if (typeof object.team_gid === "string")
                        message.team_gid = parseInt(object.team_gid, 10);
                    else if (typeof object.team_gid === "number")
                        message.team_gid = object.team_gid;
                    else if (typeof object.team_gid === "object")
                        message.team_gid = new $util.LongBits(object.team_gid.low >>> 0, object.team_gid.high >>> 0).toNumber(true);
                if (object.new_node_or_state != null)
                    message.new_node_or_state = object.new_node_or_state >>> 0;
                if (object.old_node_or_state != null)
                    message.old_node_or_state = object.old_node_or_state >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a TeamChange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTATournamentStateChange.TeamChange
             * @static
             * @param {CMsgDOTATournamentStateChange.TeamChange} message TeamChange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TeamChange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.team_gid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.team_gid = options.longs === String ? "0" : 0;
                    object.new_node_or_state = 0;
                    object.old_node_or_state = 0;
                }
                if (message.team_gid != null && message.hasOwnProperty("team_gid"))
                    if (typeof message.team_gid === "number")
                        object.team_gid = options.longs === String ? String(message.team_gid) : message.team_gid;
                    else
                        object.team_gid = options.longs === String ? $util.Long.prototype.toString.call(message.team_gid) : options.longs === Number ? new $util.LongBits(message.team_gid.low >>> 0, message.team_gid.high >>> 0).toNumber(true) : message.team_gid;
                if (message.new_node_or_state != null && message.hasOwnProperty("new_node_or_state"))
                    object.new_node_or_state = message.new_node_or_state;
                if (message.old_node_or_state != null && message.hasOwnProperty("old_node_or_state"))
                    object.old_node_or_state = message.old_node_or_state;
                return object;
            };
    
            /**
             * Converts this TeamChange to JSON.
             * @function toJSON
             * @memberof CMsgDOTATournamentStateChange.TeamChange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TeamChange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TeamChange;
        })();
    
        return CMsgDOTATournamentStateChange;
    })();
    
    $root.CMsgDOTATournamentRequest = (function() {
    
        /**
         * Properties of a CMsgDOTATournamentRequest.
         * @exports ICMsgDOTATournamentRequest
         * @interface ICMsgDOTATournamentRequest
         * @property {number|null} [tournament_id] CMsgDOTATournamentRequest tournament_id
         * @property {number|Long|null} [client_tournament_gid] CMsgDOTATournamentRequest client_tournament_gid
         */
    
        /**
         * Constructs a new CMsgDOTATournamentRequest.
         * @exports CMsgDOTATournamentRequest
         * @classdesc Represents a CMsgDOTATournamentRequest.
         * @implements ICMsgDOTATournamentRequest
         * @constructor
         * @param {ICMsgDOTATournamentRequest=} [properties] Properties to set
         */
        function CMsgDOTATournamentRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTATournamentRequest tournament_id.
         * @member {number} tournament_id
         * @memberof CMsgDOTATournamentRequest
         * @instance
         */
        CMsgDOTATournamentRequest.prototype.tournament_id = 0;
    
        /**
         * CMsgDOTATournamentRequest client_tournament_gid.
         * @member {number|Long} client_tournament_gid
         * @memberof CMsgDOTATournamentRequest
         * @instance
         */
        CMsgDOTATournamentRequest.prototype.client_tournament_gid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CMsgDOTATournamentRequest instance using the specified properties.
         * @function create
         * @memberof CMsgDOTATournamentRequest
         * @static
         * @param {ICMsgDOTATournamentRequest=} [properties] Properties to set
         * @returns {CMsgDOTATournamentRequest} CMsgDOTATournamentRequest instance
         */
        CMsgDOTATournamentRequest.create = function create(properties) {
            return new CMsgDOTATournamentRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTATournamentRequest message. Does not implicitly {@link CMsgDOTATournamentRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTATournamentRequest
         * @static
         * @param {ICMsgDOTATournamentRequest} message CMsgDOTATournamentRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTATournamentRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tournament_id != null && Object.hasOwnProperty.call(message, "tournament_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.tournament_id);
            if (message.client_tournament_gid != null && Object.hasOwnProperty.call(message, "client_tournament_gid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.client_tournament_gid);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTATournamentRequest message, length delimited. Does not implicitly {@link CMsgDOTATournamentRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTATournamentRequest
         * @static
         * @param {ICMsgDOTATournamentRequest} message CMsgDOTATournamentRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTATournamentRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTATournamentRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTATournamentRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTATournamentRequest} CMsgDOTATournamentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTATournamentRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTATournamentRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tournament_id = reader.uint32();
                    break;
                case 2:
                    message.client_tournament_gid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTATournamentRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTATournamentRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTATournamentRequest} CMsgDOTATournamentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTATournamentRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTATournamentRequest message.
         * @function verify
         * @memberof CMsgDOTATournamentRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTATournamentRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tournament_id != null && message.hasOwnProperty("tournament_id"))
                if (!$util.isInteger(message.tournament_id))
                    return "tournament_id: integer expected";
            if (message.client_tournament_gid != null && message.hasOwnProperty("client_tournament_gid"))
                if (!$util.isInteger(message.client_tournament_gid) && !(message.client_tournament_gid && $util.isInteger(message.client_tournament_gid.low) && $util.isInteger(message.client_tournament_gid.high)))
                    return "client_tournament_gid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgDOTATournamentRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTATournamentRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTATournamentRequest} CMsgDOTATournamentRequest
         */
        CMsgDOTATournamentRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTATournamentRequest)
                return object;
            var message = new $root.CMsgDOTATournamentRequest();
            if (object.tournament_id != null)
                message.tournament_id = object.tournament_id >>> 0;
            if (object.client_tournament_gid != null)
                if ($util.Long)
                    (message.client_tournament_gid = $util.Long.fromValue(object.client_tournament_gid)).unsigned = true;
                else if (typeof object.client_tournament_gid === "string")
                    message.client_tournament_gid = parseInt(object.client_tournament_gid, 10);
                else if (typeof object.client_tournament_gid === "number")
                    message.client_tournament_gid = object.client_tournament_gid;
                else if (typeof object.client_tournament_gid === "object")
                    message.client_tournament_gid = new $util.LongBits(object.client_tournament_gid.low >>> 0, object.client_tournament_gid.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTATournamentRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTATournamentRequest
         * @static
         * @param {CMsgDOTATournamentRequest} message CMsgDOTATournamentRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTATournamentRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tournament_id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.client_tournament_gid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_tournament_gid = options.longs === String ? "0" : 0;
            }
            if (message.tournament_id != null && message.hasOwnProperty("tournament_id"))
                object.tournament_id = message.tournament_id;
            if (message.client_tournament_gid != null && message.hasOwnProperty("client_tournament_gid"))
                if (typeof message.client_tournament_gid === "number")
                    object.client_tournament_gid = options.longs === String ? String(message.client_tournament_gid) : message.client_tournament_gid;
                else
                    object.client_tournament_gid = options.longs === String ? $util.Long.prototype.toString.call(message.client_tournament_gid) : options.longs === Number ? new $util.LongBits(message.client_tournament_gid.low >>> 0, message.client_tournament_gid.high >>> 0).toNumber(true) : message.client_tournament_gid;
            return object;
        };
    
        /**
         * Converts this CMsgDOTATournamentRequest to JSON.
         * @function toJSON
         * @memberof CMsgDOTATournamentRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTATournamentRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgDOTATournamentRequest;
    })();
    
    $root.CMsgDOTATournamentResponse = (function() {
    
        /**
         * Properties of a CMsgDOTATournamentResponse.
         * @exports ICMsgDOTATournamentResponse
         * @interface ICMsgDOTATournamentResponse
         * @property {number|null} [result] CMsgDOTATournamentResponse result
         * @property {ICMsgDOTATournament|null} [tournament] CMsgDOTATournamentResponse tournament
         */
    
        /**
         * Constructs a new CMsgDOTATournamentResponse.
         * @exports CMsgDOTATournamentResponse
         * @classdesc Represents a CMsgDOTATournamentResponse.
         * @implements ICMsgDOTATournamentResponse
         * @constructor
         * @param {ICMsgDOTATournamentResponse=} [properties] Properties to set
         */
        function CMsgDOTATournamentResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTATournamentResponse result.
         * @member {number} result
         * @memberof CMsgDOTATournamentResponse
         * @instance
         */
        CMsgDOTATournamentResponse.prototype.result = 2;
    
        /**
         * CMsgDOTATournamentResponse tournament.
         * @member {ICMsgDOTATournament|null|undefined} tournament
         * @memberof CMsgDOTATournamentResponse
         * @instance
         */
        CMsgDOTATournamentResponse.prototype.tournament = null;
    
        /**
         * Creates a new CMsgDOTATournamentResponse instance using the specified properties.
         * @function create
         * @memberof CMsgDOTATournamentResponse
         * @static
         * @param {ICMsgDOTATournamentResponse=} [properties] Properties to set
         * @returns {CMsgDOTATournamentResponse} CMsgDOTATournamentResponse instance
         */
        CMsgDOTATournamentResponse.create = function create(properties) {
            return new CMsgDOTATournamentResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTATournamentResponse message. Does not implicitly {@link CMsgDOTATournamentResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTATournamentResponse
         * @static
         * @param {ICMsgDOTATournamentResponse} message CMsgDOTATournamentResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTATournamentResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.result);
            if (message.tournament != null && Object.hasOwnProperty.call(message, "tournament"))
                $root.CMsgDOTATournament.encode(message.tournament, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTATournamentResponse message, length delimited. Does not implicitly {@link CMsgDOTATournamentResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTATournamentResponse
         * @static
         * @param {ICMsgDOTATournamentResponse} message CMsgDOTATournamentResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTATournamentResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTATournamentResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTATournamentResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTATournamentResponse} CMsgDOTATournamentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTATournamentResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTATournamentResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.uint32();
                    break;
                case 2:
                    message.tournament = $root.CMsgDOTATournament.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTATournamentResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTATournamentResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTATournamentResponse} CMsgDOTATournamentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTATournamentResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTATournamentResponse message.
         * @function verify
         * @memberof CMsgDOTATournamentResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTATournamentResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.tournament != null && message.hasOwnProperty("tournament")) {
                var error = $root.CMsgDOTATournament.verify(message.tournament);
                if (error)
                    return "tournament." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgDOTATournamentResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTATournamentResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTATournamentResponse} CMsgDOTATournamentResponse
         */
        CMsgDOTATournamentResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTATournamentResponse)
                return object;
            var message = new $root.CMsgDOTATournamentResponse();
            if (object.result != null)
                message.result = object.result >>> 0;
            if (object.tournament != null) {
                if (typeof object.tournament !== "object")
                    throw TypeError(".CMsgDOTATournamentResponse.tournament: object expected");
                message.tournament = $root.CMsgDOTATournament.fromObject(object.tournament);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTATournamentResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTATournamentResponse
         * @static
         * @param {CMsgDOTATournamentResponse} message CMsgDOTATournamentResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTATournamentResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = 2;
                object.tournament = null;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.tournament != null && message.hasOwnProperty("tournament"))
                object.tournament = $root.CMsgDOTATournament.toObject(message.tournament, options);
            return object;
        };
    
        /**
         * Converts this CMsgDOTATournamentResponse to JSON.
         * @function toJSON
         * @memberof CMsgDOTATournamentResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTATournamentResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgDOTATournamentResponse;
    })();
    
    $root.CMsgDOTAClearTournamentGame = (function() {
    
        /**
         * Properties of a CMsgDOTAClearTournamentGame.
         * @exports ICMsgDOTAClearTournamentGame
         * @interface ICMsgDOTAClearTournamentGame
         * @property {number|null} [tournament_id] CMsgDOTAClearTournamentGame tournament_id
         * @property {number|null} [game_id] CMsgDOTAClearTournamentGame game_id
         */
    
        /**
         * Constructs a new CMsgDOTAClearTournamentGame.
         * @exports CMsgDOTAClearTournamentGame
         * @classdesc Represents a CMsgDOTAClearTournamentGame.
         * @implements ICMsgDOTAClearTournamentGame
         * @constructor
         * @param {ICMsgDOTAClearTournamentGame=} [properties] Properties to set
         */
        function CMsgDOTAClearTournamentGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTAClearTournamentGame tournament_id.
         * @member {number} tournament_id
         * @memberof CMsgDOTAClearTournamentGame
         * @instance
         */
        CMsgDOTAClearTournamentGame.prototype.tournament_id = 0;
    
        /**
         * CMsgDOTAClearTournamentGame game_id.
         * @member {number} game_id
         * @memberof CMsgDOTAClearTournamentGame
         * @instance
         */
        CMsgDOTAClearTournamentGame.prototype.game_id = 0;
    
        /**
         * Creates a new CMsgDOTAClearTournamentGame instance using the specified properties.
         * @function create
         * @memberof CMsgDOTAClearTournamentGame
         * @static
         * @param {ICMsgDOTAClearTournamentGame=} [properties] Properties to set
         * @returns {CMsgDOTAClearTournamentGame} CMsgDOTAClearTournamentGame instance
         */
        CMsgDOTAClearTournamentGame.create = function create(properties) {
            return new CMsgDOTAClearTournamentGame(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTAClearTournamentGame message. Does not implicitly {@link CMsgDOTAClearTournamentGame.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTAClearTournamentGame
         * @static
         * @param {ICMsgDOTAClearTournamentGame} message CMsgDOTAClearTournamentGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTAClearTournamentGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tournament_id != null && Object.hasOwnProperty.call(message, "tournament_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.tournament_id);
            if (message.game_id != null && Object.hasOwnProperty.call(message, "game_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.game_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTAClearTournamentGame message, length delimited. Does not implicitly {@link CMsgDOTAClearTournamentGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTAClearTournamentGame
         * @static
         * @param {ICMsgDOTAClearTournamentGame} message CMsgDOTAClearTournamentGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTAClearTournamentGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTAClearTournamentGame message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTAClearTournamentGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTAClearTournamentGame} CMsgDOTAClearTournamentGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTAClearTournamentGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTAClearTournamentGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tournament_id = reader.uint32();
                    break;
                case 2:
                    message.game_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTAClearTournamentGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTAClearTournamentGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTAClearTournamentGame} CMsgDOTAClearTournamentGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTAClearTournamentGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTAClearTournamentGame message.
         * @function verify
         * @memberof CMsgDOTAClearTournamentGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTAClearTournamentGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tournament_id != null && message.hasOwnProperty("tournament_id"))
                if (!$util.isInteger(message.tournament_id))
                    return "tournament_id: integer expected";
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                if (!$util.isInteger(message.game_id))
                    return "game_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgDOTAClearTournamentGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTAClearTournamentGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTAClearTournamentGame} CMsgDOTAClearTournamentGame
         */
        CMsgDOTAClearTournamentGame.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTAClearTournamentGame)
                return object;
            var message = new $root.CMsgDOTAClearTournamentGame();
            if (object.tournament_id != null)
                message.tournament_id = object.tournament_id >>> 0;
            if (object.game_id != null)
                message.game_id = object.game_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTAClearTournamentGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTAClearTournamentGame
         * @static
         * @param {CMsgDOTAClearTournamentGame} message CMsgDOTAClearTournamentGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTAClearTournamentGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tournament_id = 0;
                object.game_id = 0;
            }
            if (message.tournament_id != null && message.hasOwnProperty("tournament_id"))
                object.tournament_id = message.tournament_id;
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                object.game_id = message.game_id;
            return object;
        };
    
        /**
         * Converts this CMsgDOTAClearTournamentGame to JSON.
         * @function toJSON
         * @memberof CMsgDOTAClearTournamentGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTAClearTournamentGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgDOTAClearTournamentGame;
    })();
    
    $root.CMsgDOTAWeekendTourneyPlayerSkillLevelStats = (function() {
    
        /**
         * Properties of a CMsgDOTAWeekendTourneyPlayerSkillLevelStats.
         * @exports ICMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @interface ICMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @property {number|null} [skill_level] CMsgDOTAWeekendTourneyPlayerSkillLevelStats skill_level
         * @property {number|null} [times_won_0] CMsgDOTAWeekendTourneyPlayerSkillLevelStats times_won_0
         * @property {number|null} [times_won_1] CMsgDOTAWeekendTourneyPlayerSkillLevelStats times_won_1
         * @property {number|null} [times_won_2] CMsgDOTAWeekendTourneyPlayerSkillLevelStats times_won_2
         * @property {number|null} [times_won_3] CMsgDOTAWeekendTourneyPlayerSkillLevelStats times_won_3
         * @property {number|null} [times_bye_and_lost] CMsgDOTAWeekendTourneyPlayerSkillLevelStats times_bye_and_lost
         * @property {number|null} [times_bye_and_won] CMsgDOTAWeekendTourneyPlayerSkillLevelStats times_bye_and_won
         * @property {number|null} [times_unusual_champ] CMsgDOTAWeekendTourneyPlayerSkillLevelStats times_unusual_champ
         * @property {number|null} [total_games_won] CMsgDOTAWeekendTourneyPlayerSkillLevelStats total_games_won
         * @property {number|null} [score] CMsgDOTAWeekendTourneyPlayerSkillLevelStats score
         */
    
        /**
         * Constructs a new CMsgDOTAWeekendTourneyPlayerSkillLevelStats.
         * @exports CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @classdesc Represents a CMsgDOTAWeekendTourneyPlayerSkillLevelStats.
         * @implements ICMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @constructor
         * @param {ICMsgDOTAWeekendTourneyPlayerSkillLevelStats=} [properties] Properties to set
         */
        function CMsgDOTAWeekendTourneyPlayerSkillLevelStats(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTAWeekendTourneyPlayerSkillLevelStats skill_level.
         * @member {number} skill_level
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.prototype.skill_level = 0;
    
        /**
         * CMsgDOTAWeekendTourneyPlayerSkillLevelStats times_won_0.
         * @member {number} times_won_0
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.prototype.times_won_0 = 0;
    
        /**
         * CMsgDOTAWeekendTourneyPlayerSkillLevelStats times_won_1.
         * @member {number} times_won_1
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.prototype.times_won_1 = 0;
    
        /**
         * CMsgDOTAWeekendTourneyPlayerSkillLevelStats times_won_2.
         * @member {number} times_won_2
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.prototype.times_won_2 = 0;
    
        /**
         * CMsgDOTAWeekendTourneyPlayerSkillLevelStats times_won_3.
         * @member {number} times_won_3
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.prototype.times_won_3 = 0;
    
        /**
         * CMsgDOTAWeekendTourneyPlayerSkillLevelStats times_bye_and_lost.
         * @member {number} times_bye_and_lost
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.prototype.times_bye_and_lost = 0;
    
        /**
         * CMsgDOTAWeekendTourneyPlayerSkillLevelStats times_bye_and_won.
         * @member {number} times_bye_and_won
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.prototype.times_bye_and_won = 0;
    
        /**
         * CMsgDOTAWeekendTourneyPlayerSkillLevelStats times_unusual_champ.
         * @member {number} times_unusual_champ
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.prototype.times_unusual_champ = 0;
    
        /**
         * CMsgDOTAWeekendTourneyPlayerSkillLevelStats total_games_won.
         * @member {number} total_games_won
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.prototype.total_games_won = 0;
    
        /**
         * CMsgDOTAWeekendTourneyPlayerSkillLevelStats score.
         * @member {number} score
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.prototype.score = 0;
    
        /**
         * Creates a new CMsgDOTAWeekendTourneyPlayerSkillLevelStats instance using the specified properties.
         * @function create
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @static
         * @param {ICMsgDOTAWeekendTourneyPlayerSkillLevelStats=} [properties] Properties to set
         * @returns {CMsgDOTAWeekendTourneyPlayerSkillLevelStats} CMsgDOTAWeekendTourneyPlayerSkillLevelStats instance
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.create = function create(properties) {
            return new CMsgDOTAWeekendTourneyPlayerSkillLevelStats(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTAWeekendTourneyPlayerSkillLevelStats message. Does not implicitly {@link CMsgDOTAWeekendTourneyPlayerSkillLevelStats.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @static
         * @param {ICMsgDOTAWeekendTourneyPlayerSkillLevelStats} message CMsgDOTAWeekendTourneyPlayerSkillLevelStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.skill_level != null && Object.hasOwnProperty.call(message, "skill_level"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.skill_level);
            if (message.times_won_0 != null && Object.hasOwnProperty.call(message, "times_won_0"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.times_won_0);
            if (message.times_won_1 != null && Object.hasOwnProperty.call(message, "times_won_1"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.times_won_1);
            if (message.times_won_2 != null && Object.hasOwnProperty.call(message, "times_won_2"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.times_won_2);
            if (message.times_won_3 != null && Object.hasOwnProperty.call(message, "times_won_3"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.times_won_3);
            if (message.times_bye_and_lost != null && Object.hasOwnProperty.call(message, "times_bye_and_lost"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.times_bye_and_lost);
            if (message.times_bye_and_won != null && Object.hasOwnProperty.call(message, "times_bye_and_won"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.times_bye_and_won);
            if (message.total_games_won != null && Object.hasOwnProperty.call(message, "total_games_won"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.total_games_won);
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.score);
            if (message.times_unusual_champ != null && Object.hasOwnProperty.call(message, "times_unusual_champ"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.times_unusual_champ);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTAWeekendTourneyPlayerSkillLevelStats message, length delimited. Does not implicitly {@link CMsgDOTAWeekendTourneyPlayerSkillLevelStats.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @static
         * @param {ICMsgDOTAWeekendTourneyPlayerSkillLevelStats} message CMsgDOTAWeekendTourneyPlayerSkillLevelStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTAWeekendTourneyPlayerSkillLevelStats message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTAWeekendTourneyPlayerSkillLevelStats} CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTAWeekendTourneyPlayerSkillLevelStats();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.skill_level = reader.uint32();
                    break;
                case 2:
                    message.times_won_0 = reader.uint32();
                    break;
                case 3:
                    message.times_won_1 = reader.uint32();
                    break;
                case 4:
                    message.times_won_2 = reader.uint32();
                    break;
                case 5:
                    message.times_won_3 = reader.uint32();
                    break;
                case 6:
                    message.times_bye_and_lost = reader.uint32();
                    break;
                case 7:
                    message.times_bye_and_won = reader.uint32();
                    break;
                case 10:
                    message.times_unusual_champ = reader.uint32();
                    break;
                case 8:
                    message.total_games_won = reader.uint32();
                    break;
                case 9:
                    message.score = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTAWeekendTourneyPlayerSkillLevelStats message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTAWeekendTourneyPlayerSkillLevelStats} CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTAWeekendTourneyPlayerSkillLevelStats message.
         * @function verify
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.skill_level != null && message.hasOwnProperty("skill_level"))
                if (!$util.isInteger(message.skill_level))
                    return "skill_level: integer expected";
            if (message.times_won_0 != null && message.hasOwnProperty("times_won_0"))
                if (!$util.isInteger(message.times_won_0))
                    return "times_won_0: integer expected";
            if (message.times_won_1 != null && message.hasOwnProperty("times_won_1"))
                if (!$util.isInteger(message.times_won_1))
                    return "times_won_1: integer expected";
            if (message.times_won_2 != null && message.hasOwnProperty("times_won_2"))
                if (!$util.isInteger(message.times_won_2))
                    return "times_won_2: integer expected";
            if (message.times_won_3 != null && message.hasOwnProperty("times_won_3"))
                if (!$util.isInteger(message.times_won_3))
                    return "times_won_3: integer expected";
            if (message.times_bye_and_lost != null && message.hasOwnProperty("times_bye_and_lost"))
                if (!$util.isInteger(message.times_bye_and_lost))
                    return "times_bye_and_lost: integer expected";
            if (message.times_bye_and_won != null && message.hasOwnProperty("times_bye_and_won"))
                if (!$util.isInteger(message.times_bye_and_won))
                    return "times_bye_and_won: integer expected";
            if (message.times_unusual_champ != null && message.hasOwnProperty("times_unusual_champ"))
                if (!$util.isInteger(message.times_unusual_champ))
                    return "times_unusual_champ: integer expected";
            if (message.total_games_won != null && message.hasOwnProperty("total_games_won"))
                if (!$util.isInteger(message.total_games_won))
                    return "total_games_won: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgDOTAWeekendTourneyPlayerSkillLevelStats message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTAWeekendTourneyPlayerSkillLevelStats} CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTAWeekendTourneyPlayerSkillLevelStats)
                return object;
            var message = new $root.CMsgDOTAWeekendTourneyPlayerSkillLevelStats();
            if (object.skill_level != null)
                message.skill_level = object.skill_level >>> 0;
            if (object.times_won_0 != null)
                message.times_won_0 = object.times_won_0 >>> 0;
            if (object.times_won_1 != null)
                message.times_won_1 = object.times_won_1 >>> 0;
            if (object.times_won_2 != null)
                message.times_won_2 = object.times_won_2 >>> 0;
            if (object.times_won_3 != null)
                message.times_won_3 = object.times_won_3 >>> 0;
            if (object.times_bye_and_lost != null)
                message.times_bye_and_lost = object.times_bye_and_lost >>> 0;
            if (object.times_bye_and_won != null)
                message.times_bye_and_won = object.times_bye_and_won >>> 0;
            if (object.times_unusual_champ != null)
                message.times_unusual_champ = object.times_unusual_champ >>> 0;
            if (object.total_games_won != null)
                message.total_games_won = object.total_games_won >>> 0;
            if (object.score != null)
                message.score = object.score >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTAWeekendTourneyPlayerSkillLevelStats message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @static
         * @param {CMsgDOTAWeekendTourneyPlayerSkillLevelStats} message CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.skill_level = 0;
                object.times_won_0 = 0;
                object.times_won_1 = 0;
                object.times_won_2 = 0;
                object.times_won_3 = 0;
                object.times_bye_and_lost = 0;
                object.times_bye_and_won = 0;
                object.total_games_won = 0;
                object.score = 0;
                object.times_unusual_champ = 0;
            }
            if (message.skill_level != null && message.hasOwnProperty("skill_level"))
                object.skill_level = message.skill_level;
            if (message.times_won_0 != null && message.hasOwnProperty("times_won_0"))
                object.times_won_0 = message.times_won_0;
            if (message.times_won_1 != null && message.hasOwnProperty("times_won_1"))
                object.times_won_1 = message.times_won_1;
            if (message.times_won_2 != null && message.hasOwnProperty("times_won_2"))
                object.times_won_2 = message.times_won_2;
            if (message.times_won_3 != null && message.hasOwnProperty("times_won_3"))
                object.times_won_3 = message.times_won_3;
            if (message.times_bye_and_lost != null && message.hasOwnProperty("times_bye_and_lost"))
                object.times_bye_and_lost = message.times_bye_and_lost;
            if (message.times_bye_and_won != null && message.hasOwnProperty("times_bye_and_won"))
                object.times_bye_and_won = message.times_bye_and_won;
            if (message.total_games_won != null && message.hasOwnProperty("total_games_won"))
                object.total_games_won = message.total_games_won;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            if (message.times_unusual_champ != null && message.hasOwnProperty("times_unusual_champ"))
                object.times_unusual_champ = message.times_unusual_champ;
            return object;
        };
    
        /**
         * Converts this CMsgDOTAWeekendTourneyPlayerSkillLevelStats to JSON.
         * @function toJSON
         * @memberof CMsgDOTAWeekendTourneyPlayerSkillLevelStats
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTAWeekendTourneyPlayerSkillLevelStats.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgDOTAWeekendTourneyPlayerSkillLevelStats;
    })();
    
    $root.CMsgDOTAWeekendTourneyPlayerStats = (function() {
    
        /**
         * Properties of a CMsgDOTAWeekendTourneyPlayerStats.
         * @exports ICMsgDOTAWeekendTourneyPlayerStats
         * @interface ICMsgDOTAWeekendTourneyPlayerStats
         * @property {number|null} [account_id] CMsgDOTAWeekendTourneyPlayerStats account_id
         * @property {number|null} [season_trophy_id] CMsgDOTAWeekendTourneyPlayerStats season_trophy_id
         * @property {Array.<ICMsgDOTAWeekendTourneyPlayerSkillLevelStats>|null} [skill_levels] CMsgDOTAWeekendTourneyPlayerStats skill_levels
         * @property {number|null} [current_tier] CMsgDOTAWeekendTourneyPlayerStats current_tier
         */
    
        /**
         * Constructs a new CMsgDOTAWeekendTourneyPlayerStats.
         * @exports CMsgDOTAWeekendTourneyPlayerStats
         * @classdesc Represents a CMsgDOTAWeekendTourneyPlayerStats.
         * @implements ICMsgDOTAWeekendTourneyPlayerStats
         * @constructor
         * @param {ICMsgDOTAWeekendTourneyPlayerStats=} [properties] Properties to set
         */
        function CMsgDOTAWeekendTourneyPlayerStats(properties) {
            this.skill_levels = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTAWeekendTourneyPlayerStats account_id.
         * @member {number} account_id
         * @memberof CMsgDOTAWeekendTourneyPlayerStats
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerStats.prototype.account_id = 0;
    
        /**
         * CMsgDOTAWeekendTourneyPlayerStats season_trophy_id.
         * @member {number} season_trophy_id
         * @memberof CMsgDOTAWeekendTourneyPlayerStats
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerStats.prototype.season_trophy_id = 0;
    
        /**
         * CMsgDOTAWeekendTourneyPlayerStats skill_levels.
         * @member {Array.<ICMsgDOTAWeekendTourneyPlayerSkillLevelStats>} skill_levels
         * @memberof CMsgDOTAWeekendTourneyPlayerStats
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerStats.prototype.skill_levels = $util.emptyArray;
    
        /**
         * CMsgDOTAWeekendTourneyPlayerStats current_tier.
         * @member {number} current_tier
         * @memberof CMsgDOTAWeekendTourneyPlayerStats
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerStats.prototype.current_tier = 0;
    
        /**
         * Creates a new CMsgDOTAWeekendTourneyPlayerStats instance using the specified properties.
         * @function create
         * @memberof CMsgDOTAWeekendTourneyPlayerStats
         * @static
         * @param {ICMsgDOTAWeekendTourneyPlayerStats=} [properties] Properties to set
         * @returns {CMsgDOTAWeekendTourneyPlayerStats} CMsgDOTAWeekendTourneyPlayerStats instance
         */
        CMsgDOTAWeekendTourneyPlayerStats.create = function create(properties) {
            return new CMsgDOTAWeekendTourneyPlayerStats(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTAWeekendTourneyPlayerStats message. Does not implicitly {@link CMsgDOTAWeekendTourneyPlayerStats.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTAWeekendTourneyPlayerStats
         * @static
         * @param {ICMsgDOTAWeekendTourneyPlayerStats} message CMsgDOTAWeekendTourneyPlayerStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTAWeekendTourneyPlayerStats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.account_id);
            if (message.season_trophy_id != null && Object.hasOwnProperty.call(message, "season_trophy_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.season_trophy_id);
            if (message.skill_levels != null && message.skill_levels.length)
                for (var i = 0; i < message.skill_levels.length; ++i)
                    $root.CMsgDOTAWeekendTourneyPlayerSkillLevelStats.encode(message.skill_levels[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.current_tier != null && Object.hasOwnProperty.call(message, "current_tier"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.current_tier);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTAWeekendTourneyPlayerStats message, length delimited. Does not implicitly {@link CMsgDOTAWeekendTourneyPlayerStats.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTAWeekendTourneyPlayerStats
         * @static
         * @param {ICMsgDOTAWeekendTourneyPlayerStats} message CMsgDOTAWeekendTourneyPlayerStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTAWeekendTourneyPlayerStats.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTAWeekendTourneyPlayerStats message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTAWeekendTourneyPlayerStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTAWeekendTourneyPlayerStats} CMsgDOTAWeekendTourneyPlayerStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTAWeekendTourneyPlayerStats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTAWeekendTourneyPlayerStats();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account_id = reader.uint32();
                    break;
                case 2:
                    message.season_trophy_id = reader.uint32();
                    break;
                case 3:
                    if (!(message.skill_levels && message.skill_levels.length))
                        message.skill_levels = [];
                    message.skill_levels.push($root.CMsgDOTAWeekendTourneyPlayerSkillLevelStats.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.current_tier = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTAWeekendTourneyPlayerStats message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTAWeekendTourneyPlayerStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTAWeekendTourneyPlayerStats} CMsgDOTAWeekendTourneyPlayerStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTAWeekendTourneyPlayerStats.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTAWeekendTourneyPlayerStats message.
         * @function verify
         * @memberof CMsgDOTAWeekendTourneyPlayerStats
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTAWeekendTourneyPlayerStats.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account_id != null && message.hasOwnProperty("account_id"))
                if (!$util.isInteger(message.account_id))
                    return "account_id: integer expected";
            if (message.season_trophy_id != null && message.hasOwnProperty("season_trophy_id"))
                if (!$util.isInteger(message.season_trophy_id))
                    return "season_trophy_id: integer expected";
            if (message.skill_levels != null && message.hasOwnProperty("skill_levels")) {
                if (!Array.isArray(message.skill_levels))
                    return "skill_levels: array expected";
                for (var i = 0; i < message.skill_levels.length; ++i) {
                    var error = $root.CMsgDOTAWeekendTourneyPlayerSkillLevelStats.verify(message.skill_levels[i]);
                    if (error)
                        return "skill_levels." + error;
                }
            }
            if (message.current_tier != null && message.hasOwnProperty("current_tier"))
                if (!$util.isInteger(message.current_tier))
                    return "current_tier: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgDOTAWeekendTourneyPlayerStats message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTAWeekendTourneyPlayerStats
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTAWeekendTourneyPlayerStats} CMsgDOTAWeekendTourneyPlayerStats
         */
        CMsgDOTAWeekendTourneyPlayerStats.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTAWeekendTourneyPlayerStats)
                return object;
            var message = new $root.CMsgDOTAWeekendTourneyPlayerStats();
            if (object.account_id != null)
                message.account_id = object.account_id >>> 0;
            if (object.season_trophy_id != null)
                message.season_trophy_id = object.season_trophy_id >>> 0;
            if (object.skill_levels) {
                if (!Array.isArray(object.skill_levels))
                    throw TypeError(".CMsgDOTAWeekendTourneyPlayerStats.skill_levels: array expected");
                message.skill_levels = [];
                for (var i = 0; i < object.skill_levels.length; ++i) {
                    if (typeof object.skill_levels[i] !== "object")
                        throw TypeError(".CMsgDOTAWeekendTourneyPlayerStats.skill_levels: object expected");
                    message.skill_levels[i] = $root.CMsgDOTAWeekendTourneyPlayerSkillLevelStats.fromObject(object.skill_levels[i]);
                }
            }
            if (object.current_tier != null)
                message.current_tier = object.current_tier >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTAWeekendTourneyPlayerStats message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTAWeekendTourneyPlayerStats
         * @static
         * @param {CMsgDOTAWeekendTourneyPlayerStats} message CMsgDOTAWeekendTourneyPlayerStats
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTAWeekendTourneyPlayerStats.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.skill_levels = [];
            if (options.defaults) {
                object.account_id = 0;
                object.season_trophy_id = 0;
                object.current_tier = 0;
            }
            if (message.account_id != null && message.hasOwnProperty("account_id"))
                object.account_id = message.account_id;
            if (message.season_trophy_id != null && message.hasOwnProperty("season_trophy_id"))
                object.season_trophy_id = message.season_trophy_id;
            if (message.skill_levels && message.skill_levels.length) {
                object.skill_levels = [];
                for (var j = 0; j < message.skill_levels.length; ++j)
                    object.skill_levels[j] = $root.CMsgDOTAWeekendTourneyPlayerSkillLevelStats.toObject(message.skill_levels[j], options);
            }
            if (message.current_tier != null && message.hasOwnProperty("current_tier"))
                object.current_tier = message.current_tier;
            return object;
        };
    
        /**
         * Converts this CMsgDOTAWeekendTourneyPlayerStats to JSON.
         * @function toJSON
         * @memberof CMsgDOTAWeekendTourneyPlayerStats
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTAWeekendTourneyPlayerStats.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgDOTAWeekendTourneyPlayerStats;
    })();
    
    $root.CMsgDOTAWeekendTourneyPlayerStatsRequest = (function() {
    
        /**
         * Properties of a CMsgDOTAWeekendTourneyPlayerStatsRequest.
         * @exports ICMsgDOTAWeekendTourneyPlayerStatsRequest
         * @interface ICMsgDOTAWeekendTourneyPlayerStatsRequest
         * @property {number|null} [account_id] CMsgDOTAWeekendTourneyPlayerStatsRequest account_id
         * @property {number|null} [season_trophy_id] CMsgDOTAWeekendTourneyPlayerStatsRequest season_trophy_id
         */
    
        /**
         * Constructs a new CMsgDOTAWeekendTourneyPlayerStatsRequest.
         * @exports CMsgDOTAWeekendTourneyPlayerStatsRequest
         * @classdesc Represents a CMsgDOTAWeekendTourneyPlayerStatsRequest.
         * @implements ICMsgDOTAWeekendTourneyPlayerStatsRequest
         * @constructor
         * @param {ICMsgDOTAWeekendTourneyPlayerStatsRequest=} [properties] Properties to set
         */
        function CMsgDOTAWeekendTourneyPlayerStatsRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTAWeekendTourneyPlayerStatsRequest account_id.
         * @member {number} account_id
         * @memberof CMsgDOTAWeekendTourneyPlayerStatsRequest
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerStatsRequest.prototype.account_id = 0;
    
        /**
         * CMsgDOTAWeekendTourneyPlayerStatsRequest season_trophy_id.
         * @member {number} season_trophy_id
         * @memberof CMsgDOTAWeekendTourneyPlayerStatsRequest
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerStatsRequest.prototype.season_trophy_id = 0;
    
        /**
         * Creates a new CMsgDOTAWeekendTourneyPlayerStatsRequest instance using the specified properties.
         * @function create
         * @memberof CMsgDOTAWeekendTourneyPlayerStatsRequest
         * @static
         * @param {ICMsgDOTAWeekendTourneyPlayerStatsRequest=} [properties] Properties to set
         * @returns {CMsgDOTAWeekendTourneyPlayerStatsRequest} CMsgDOTAWeekendTourneyPlayerStatsRequest instance
         */
        CMsgDOTAWeekendTourneyPlayerStatsRequest.create = function create(properties) {
            return new CMsgDOTAWeekendTourneyPlayerStatsRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTAWeekendTourneyPlayerStatsRequest message. Does not implicitly {@link CMsgDOTAWeekendTourneyPlayerStatsRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTAWeekendTourneyPlayerStatsRequest
         * @static
         * @param {ICMsgDOTAWeekendTourneyPlayerStatsRequest} message CMsgDOTAWeekendTourneyPlayerStatsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTAWeekendTourneyPlayerStatsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.account_id);
            if (message.season_trophy_id != null && Object.hasOwnProperty.call(message, "season_trophy_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.season_trophy_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTAWeekendTourneyPlayerStatsRequest message, length delimited. Does not implicitly {@link CMsgDOTAWeekendTourneyPlayerStatsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTAWeekendTourneyPlayerStatsRequest
         * @static
         * @param {ICMsgDOTAWeekendTourneyPlayerStatsRequest} message CMsgDOTAWeekendTourneyPlayerStatsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTAWeekendTourneyPlayerStatsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTAWeekendTourneyPlayerStatsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTAWeekendTourneyPlayerStatsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTAWeekendTourneyPlayerStatsRequest} CMsgDOTAWeekendTourneyPlayerStatsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTAWeekendTourneyPlayerStatsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTAWeekendTourneyPlayerStatsRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account_id = reader.uint32();
                    break;
                case 2:
                    message.season_trophy_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTAWeekendTourneyPlayerStatsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTAWeekendTourneyPlayerStatsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTAWeekendTourneyPlayerStatsRequest} CMsgDOTAWeekendTourneyPlayerStatsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTAWeekendTourneyPlayerStatsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTAWeekendTourneyPlayerStatsRequest message.
         * @function verify
         * @memberof CMsgDOTAWeekendTourneyPlayerStatsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTAWeekendTourneyPlayerStatsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account_id != null && message.hasOwnProperty("account_id"))
                if (!$util.isInteger(message.account_id))
                    return "account_id: integer expected";
            if (message.season_trophy_id != null && message.hasOwnProperty("season_trophy_id"))
                if (!$util.isInteger(message.season_trophy_id))
                    return "season_trophy_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgDOTAWeekendTourneyPlayerStatsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTAWeekendTourneyPlayerStatsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTAWeekendTourneyPlayerStatsRequest} CMsgDOTAWeekendTourneyPlayerStatsRequest
         */
        CMsgDOTAWeekendTourneyPlayerStatsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTAWeekendTourneyPlayerStatsRequest)
                return object;
            var message = new $root.CMsgDOTAWeekendTourneyPlayerStatsRequest();
            if (object.account_id != null)
                message.account_id = object.account_id >>> 0;
            if (object.season_trophy_id != null)
                message.season_trophy_id = object.season_trophy_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTAWeekendTourneyPlayerStatsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTAWeekendTourneyPlayerStatsRequest
         * @static
         * @param {CMsgDOTAWeekendTourneyPlayerStatsRequest} message CMsgDOTAWeekendTourneyPlayerStatsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTAWeekendTourneyPlayerStatsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account_id = 0;
                object.season_trophy_id = 0;
            }
            if (message.account_id != null && message.hasOwnProperty("account_id"))
                object.account_id = message.account_id;
            if (message.season_trophy_id != null && message.hasOwnProperty("season_trophy_id"))
                object.season_trophy_id = message.season_trophy_id;
            return object;
        };
    
        /**
         * Converts this CMsgDOTAWeekendTourneyPlayerStatsRequest to JSON.
         * @function toJSON
         * @memberof CMsgDOTAWeekendTourneyPlayerStatsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTAWeekendTourneyPlayerStatsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgDOTAWeekendTourneyPlayerStatsRequest;
    })();
    
    $root.CMsgDOTAWeekendTourneyPlayerHistoryRequest = (function() {
    
        /**
         * Properties of a CMsgDOTAWeekendTourneyPlayerHistoryRequest.
         * @exports ICMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @interface ICMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @property {number|null} [account_id] CMsgDOTAWeekendTourneyPlayerHistoryRequest account_id
         * @property {number|null} [season_trophy_id] CMsgDOTAWeekendTourneyPlayerHistoryRequest season_trophy_id
         */
    
        /**
         * Constructs a new CMsgDOTAWeekendTourneyPlayerHistoryRequest.
         * @exports CMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @classdesc Represents a CMsgDOTAWeekendTourneyPlayerHistoryRequest.
         * @implements ICMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @constructor
         * @param {ICMsgDOTAWeekendTourneyPlayerHistoryRequest=} [properties] Properties to set
         */
        function CMsgDOTAWeekendTourneyPlayerHistoryRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTAWeekendTourneyPlayerHistoryRequest account_id.
         * @member {number} account_id
         * @memberof CMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerHistoryRequest.prototype.account_id = 0;
    
        /**
         * CMsgDOTAWeekendTourneyPlayerHistoryRequest season_trophy_id.
         * @member {number} season_trophy_id
         * @memberof CMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerHistoryRequest.prototype.season_trophy_id = 0;
    
        /**
         * Creates a new CMsgDOTAWeekendTourneyPlayerHistoryRequest instance using the specified properties.
         * @function create
         * @memberof CMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @static
         * @param {ICMsgDOTAWeekendTourneyPlayerHistoryRequest=} [properties] Properties to set
         * @returns {CMsgDOTAWeekendTourneyPlayerHistoryRequest} CMsgDOTAWeekendTourneyPlayerHistoryRequest instance
         */
        CMsgDOTAWeekendTourneyPlayerHistoryRequest.create = function create(properties) {
            return new CMsgDOTAWeekendTourneyPlayerHistoryRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTAWeekendTourneyPlayerHistoryRequest message. Does not implicitly {@link CMsgDOTAWeekendTourneyPlayerHistoryRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @static
         * @param {ICMsgDOTAWeekendTourneyPlayerHistoryRequest} message CMsgDOTAWeekendTourneyPlayerHistoryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTAWeekendTourneyPlayerHistoryRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.account_id);
            if (message.season_trophy_id != null && Object.hasOwnProperty.call(message, "season_trophy_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.season_trophy_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTAWeekendTourneyPlayerHistoryRequest message, length delimited. Does not implicitly {@link CMsgDOTAWeekendTourneyPlayerHistoryRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @static
         * @param {ICMsgDOTAWeekendTourneyPlayerHistoryRequest} message CMsgDOTAWeekendTourneyPlayerHistoryRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTAWeekendTourneyPlayerHistoryRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTAWeekendTourneyPlayerHistoryRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTAWeekendTourneyPlayerHistoryRequest} CMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTAWeekendTourneyPlayerHistoryRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTAWeekendTourneyPlayerHistoryRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account_id = reader.uint32();
                    break;
                case 2:
                    message.season_trophy_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTAWeekendTourneyPlayerHistoryRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTAWeekendTourneyPlayerHistoryRequest} CMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTAWeekendTourneyPlayerHistoryRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTAWeekendTourneyPlayerHistoryRequest message.
         * @function verify
         * @memberof CMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTAWeekendTourneyPlayerHistoryRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account_id != null && message.hasOwnProperty("account_id"))
                if (!$util.isInteger(message.account_id))
                    return "account_id: integer expected";
            if (message.season_trophy_id != null && message.hasOwnProperty("season_trophy_id"))
                if (!$util.isInteger(message.season_trophy_id))
                    return "season_trophy_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgDOTAWeekendTourneyPlayerHistoryRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTAWeekendTourneyPlayerHistoryRequest} CMsgDOTAWeekendTourneyPlayerHistoryRequest
         */
        CMsgDOTAWeekendTourneyPlayerHistoryRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTAWeekendTourneyPlayerHistoryRequest)
                return object;
            var message = new $root.CMsgDOTAWeekendTourneyPlayerHistoryRequest();
            if (object.account_id != null)
                message.account_id = object.account_id >>> 0;
            if (object.season_trophy_id != null)
                message.season_trophy_id = object.season_trophy_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTAWeekendTourneyPlayerHistoryRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @static
         * @param {CMsgDOTAWeekendTourneyPlayerHistoryRequest} message CMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTAWeekendTourneyPlayerHistoryRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account_id = 0;
                object.season_trophy_id = 0;
            }
            if (message.account_id != null && message.hasOwnProperty("account_id"))
                object.account_id = message.account_id;
            if (message.season_trophy_id != null && message.hasOwnProperty("season_trophy_id"))
                object.season_trophy_id = message.season_trophy_id;
            return object;
        };
    
        /**
         * Converts this CMsgDOTAWeekendTourneyPlayerHistoryRequest to JSON.
         * @function toJSON
         * @memberof CMsgDOTAWeekendTourneyPlayerHistoryRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTAWeekendTourneyPlayerHistoryRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgDOTAWeekendTourneyPlayerHistoryRequest;
    })();
    
    $root.CMsgDOTAWeekendTourneyPlayerHistory = (function() {
    
        /**
         * Properties of a CMsgDOTAWeekendTourneyPlayerHistory.
         * @exports ICMsgDOTAWeekendTourneyPlayerHistory
         * @interface ICMsgDOTAWeekendTourneyPlayerHistory
         * @property {number|null} [account_id] CMsgDOTAWeekendTourneyPlayerHistory account_id
         * @property {Array.<CMsgDOTAWeekendTourneyPlayerHistory.ITournament>|null} [tournaments] CMsgDOTAWeekendTourneyPlayerHistory tournaments
         */
    
        /**
         * Constructs a new CMsgDOTAWeekendTourneyPlayerHistory.
         * @exports CMsgDOTAWeekendTourneyPlayerHistory
         * @classdesc Represents a CMsgDOTAWeekendTourneyPlayerHistory.
         * @implements ICMsgDOTAWeekendTourneyPlayerHistory
         * @constructor
         * @param {ICMsgDOTAWeekendTourneyPlayerHistory=} [properties] Properties to set
         */
        function CMsgDOTAWeekendTourneyPlayerHistory(properties) {
            this.tournaments = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTAWeekendTourneyPlayerHistory account_id.
         * @member {number} account_id
         * @memberof CMsgDOTAWeekendTourneyPlayerHistory
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerHistory.prototype.account_id = 0;
    
        /**
         * CMsgDOTAWeekendTourneyPlayerHistory tournaments.
         * @member {Array.<CMsgDOTAWeekendTourneyPlayerHistory.ITournament>} tournaments
         * @memberof CMsgDOTAWeekendTourneyPlayerHistory
         * @instance
         */
        CMsgDOTAWeekendTourneyPlayerHistory.prototype.tournaments = $util.emptyArray;
    
        /**
         * Creates a new CMsgDOTAWeekendTourneyPlayerHistory instance using the specified properties.
         * @function create
         * @memberof CMsgDOTAWeekendTourneyPlayerHistory
         * @static
         * @param {ICMsgDOTAWeekendTourneyPlayerHistory=} [properties] Properties to set
         * @returns {CMsgDOTAWeekendTourneyPlayerHistory} CMsgDOTAWeekendTourneyPlayerHistory instance
         */
        CMsgDOTAWeekendTourneyPlayerHistory.create = function create(properties) {
            return new CMsgDOTAWeekendTourneyPlayerHistory(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTAWeekendTourneyPlayerHistory message. Does not implicitly {@link CMsgDOTAWeekendTourneyPlayerHistory.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTAWeekendTourneyPlayerHistory
         * @static
         * @param {ICMsgDOTAWeekendTourneyPlayerHistory} message CMsgDOTAWeekendTourneyPlayerHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTAWeekendTourneyPlayerHistory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.account_id);
            if (message.tournaments != null && message.tournaments.length)
                for (var i = 0; i < message.tournaments.length; ++i)
                    $root.CMsgDOTAWeekendTourneyPlayerHistory.Tournament.encode(message.tournaments[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTAWeekendTourneyPlayerHistory message, length delimited. Does not implicitly {@link CMsgDOTAWeekendTourneyPlayerHistory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTAWeekendTourneyPlayerHistory
         * @static
         * @param {ICMsgDOTAWeekendTourneyPlayerHistory} message CMsgDOTAWeekendTourneyPlayerHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTAWeekendTourneyPlayerHistory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTAWeekendTourneyPlayerHistory message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTAWeekendTourneyPlayerHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTAWeekendTourneyPlayerHistory} CMsgDOTAWeekendTourneyPlayerHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTAWeekendTourneyPlayerHistory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTAWeekendTourneyPlayerHistory();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account_id = reader.uint32();
                    break;
                case 3:
                    if (!(message.tournaments && message.tournaments.length))
                        message.tournaments = [];
                    message.tournaments.push($root.CMsgDOTAWeekendTourneyPlayerHistory.Tournament.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTAWeekendTourneyPlayerHistory message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTAWeekendTourneyPlayerHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTAWeekendTourneyPlayerHistory} CMsgDOTAWeekendTourneyPlayerHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTAWeekendTourneyPlayerHistory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTAWeekendTourneyPlayerHistory message.
         * @function verify
         * @memberof CMsgDOTAWeekendTourneyPlayerHistory
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTAWeekendTourneyPlayerHistory.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account_id != null && message.hasOwnProperty("account_id"))
                if (!$util.isInteger(message.account_id))
                    return "account_id: integer expected";
            if (message.tournaments != null && message.hasOwnProperty("tournaments")) {
                if (!Array.isArray(message.tournaments))
                    return "tournaments: array expected";
                for (var i = 0; i < message.tournaments.length; ++i) {
                    var error = $root.CMsgDOTAWeekendTourneyPlayerHistory.Tournament.verify(message.tournaments[i]);
                    if (error)
                        return "tournaments." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgDOTAWeekendTourneyPlayerHistory message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTAWeekendTourneyPlayerHistory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTAWeekendTourneyPlayerHistory} CMsgDOTAWeekendTourneyPlayerHistory
         */
        CMsgDOTAWeekendTourneyPlayerHistory.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTAWeekendTourneyPlayerHistory)
                return object;
            var message = new $root.CMsgDOTAWeekendTourneyPlayerHistory();
            if (object.account_id != null)
                message.account_id = object.account_id >>> 0;
            if (object.tournaments) {
                if (!Array.isArray(object.tournaments))
                    throw TypeError(".CMsgDOTAWeekendTourneyPlayerHistory.tournaments: array expected");
                message.tournaments = [];
                for (var i = 0; i < object.tournaments.length; ++i) {
                    if (typeof object.tournaments[i] !== "object")
                        throw TypeError(".CMsgDOTAWeekendTourneyPlayerHistory.tournaments: object expected");
                    message.tournaments[i] = $root.CMsgDOTAWeekendTourneyPlayerHistory.Tournament.fromObject(object.tournaments[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTAWeekendTourneyPlayerHistory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTAWeekendTourneyPlayerHistory
         * @static
         * @param {CMsgDOTAWeekendTourneyPlayerHistory} message CMsgDOTAWeekendTourneyPlayerHistory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTAWeekendTourneyPlayerHistory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tournaments = [];
            if (options.defaults)
                object.account_id = 0;
            if (message.account_id != null && message.hasOwnProperty("account_id"))
                object.account_id = message.account_id;
            if (message.tournaments && message.tournaments.length) {
                object.tournaments = [];
                for (var j = 0; j < message.tournaments.length; ++j)
                    object.tournaments[j] = $root.CMsgDOTAWeekendTourneyPlayerHistory.Tournament.toObject(message.tournaments[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgDOTAWeekendTourneyPlayerHistory to JSON.
         * @function toJSON
         * @memberof CMsgDOTAWeekendTourneyPlayerHistory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTAWeekendTourneyPlayerHistory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgDOTAWeekendTourneyPlayerHistory.Tournament = (function() {
    
            /**
             * Properties of a Tournament.
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory
             * @interface ITournament
             * @property {number|null} [tournament_id] Tournament tournament_id
             * @property {number|null} [start_time] Tournament start_time
             * @property {number|null} [tournament_tier] Tournament tournament_tier
             * @property {number|null} [team_id] Tournament team_id
             * @property {number|null} [team_date] Tournament team_date
             * @property {number|null} [team_result] Tournament team_result
             * @property {Array.<number>|null} [account_id] Tournament account_id
             * @property {string|null} [team_name] Tournament team_name
             * @property {number|null} [season_trophy_id] Tournament season_trophy_id
             */
    
            /**
             * Constructs a new Tournament.
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory
             * @classdesc Represents a Tournament.
             * @implements ITournament
             * @constructor
             * @param {CMsgDOTAWeekendTourneyPlayerHistory.ITournament=} [properties] Properties to set
             */
            function Tournament(properties) {
                this.account_id = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Tournament tournament_id.
             * @member {number} tournament_id
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @instance
             */
            Tournament.prototype.tournament_id = 0;
    
            /**
             * Tournament start_time.
             * @member {number} start_time
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @instance
             */
            Tournament.prototype.start_time = 0;
    
            /**
             * Tournament tournament_tier.
             * @member {number} tournament_tier
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @instance
             */
            Tournament.prototype.tournament_tier = 0;
    
            /**
             * Tournament team_id.
             * @member {number} team_id
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @instance
             */
            Tournament.prototype.team_id = 0;
    
            /**
             * Tournament team_date.
             * @member {number} team_date
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @instance
             */
            Tournament.prototype.team_date = 0;
    
            /**
             * Tournament team_result.
             * @member {number} team_result
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @instance
             */
            Tournament.prototype.team_result = 0;
    
            /**
             * Tournament account_id.
             * @member {Array.<number>} account_id
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @instance
             */
            Tournament.prototype.account_id = $util.emptyArray;
    
            /**
             * Tournament team_name.
             * @member {string} team_name
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @instance
             */
            Tournament.prototype.team_name = "";
    
            /**
             * Tournament season_trophy_id.
             * @member {number} season_trophy_id
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @instance
             */
            Tournament.prototype.season_trophy_id = 0;
    
            /**
             * Creates a new Tournament instance using the specified properties.
             * @function create
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @static
             * @param {CMsgDOTAWeekendTourneyPlayerHistory.ITournament=} [properties] Properties to set
             * @returns {CMsgDOTAWeekendTourneyPlayerHistory.Tournament} Tournament instance
             */
            Tournament.create = function create(properties) {
                return new Tournament(properties);
            };
    
            /**
             * Encodes the specified Tournament message. Does not implicitly {@link CMsgDOTAWeekendTourneyPlayerHistory.Tournament.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @static
             * @param {CMsgDOTAWeekendTourneyPlayerHistory.ITournament} message Tournament message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tournament.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tournament_id != null && Object.hasOwnProperty.call(message, "tournament_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.tournament_id);
                if (message.start_time != null && Object.hasOwnProperty.call(message, "start_time"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.start_time);
                if (message.tournament_tier != null && Object.hasOwnProperty.call(message, "tournament_tier"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.tournament_tier);
                if (message.team_id != null && Object.hasOwnProperty.call(message, "team_id"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.team_id);
                if (message.team_date != null && Object.hasOwnProperty.call(message, "team_date"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.team_date);
                if (message.team_result != null && Object.hasOwnProperty.call(message, "team_result"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.team_result);
                if (message.account_id != null && message.account_id.length)
                    for (var i = 0; i < message.account_id.length; ++i)
                        writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.account_id[i]);
                if (message.team_name != null && Object.hasOwnProperty.call(message, "team_name"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.team_name);
                if (message.season_trophy_id != null && Object.hasOwnProperty.call(message, "season_trophy_id"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.season_trophy_id);
                return writer;
            };
    
            /**
             * Encodes the specified Tournament message, length delimited. Does not implicitly {@link CMsgDOTAWeekendTourneyPlayerHistory.Tournament.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @static
             * @param {CMsgDOTAWeekendTourneyPlayerHistory.ITournament} message Tournament message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tournament.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Tournament message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTAWeekendTourneyPlayerHistory.Tournament} Tournament
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tournament.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTAWeekendTourneyPlayerHistory.Tournament();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tournament_id = reader.uint32();
                        break;
                    case 2:
                        message.start_time = reader.uint32();
                        break;
                    case 3:
                        message.tournament_tier = reader.uint32();
                        break;
                    case 4:
                        message.team_id = reader.uint32();
                        break;
                    case 5:
                        message.team_date = reader.uint32();
                        break;
                    case 6:
                        message.team_result = reader.uint32();
                        break;
                    case 7:
                        if (!(message.account_id && message.account_id.length))
                            message.account_id = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.account_id.push(reader.uint32());
                        } else
                            message.account_id.push(reader.uint32());
                        break;
                    case 8:
                        message.team_name = reader.string();
                        break;
                    case 9:
                        message.season_trophy_id = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Tournament message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTAWeekendTourneyPlayerHistory.Tournament} Tournament
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tournament.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Tournament message.
             * @function verify
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Tournament.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tournament_id != null && message.hasOwnProperty("tournament_id"))
                    if (!$util.isInteger(message.tournament_id))
                        return "tournament_id: integer expected";
                if (message.start_time != null && message.hasOwnProperty("start_time"))
                    if (!$util.isInteger(message.start_time))
                        return "start_time: integer expected";
                if (message.tournament_tier != null && message.hasOwnProperty("tournament_tier"))
                    if (!$util.isInteger(message.tournament_tier))
                        return "tournament_tier: integer expected";
                if (message.team_id != null && message.hasOwnProperty("team_id"))
                    if (!$util.isInteger(message.team_id))
                        return "team_id: integer expected";
                if (message.team_date != null && message.hasOwnProperty("team_date"))
                    if (!$util.isInteger(message.team_date))
                        return "team_date: integer expected";
                if (message.team_result != null && message.hasOwnProperty("team_result"))
                    if (!$util.isInteger(message.team_result))
                        return "team_result: integer expected";
                if (message.account_id != null && message.hasOwnProperty("account_id")) {
                    if (!Array.isArray(message.account_id))
                        return "account_id: array expected";
                    for (var i = 0; i < message.account_id.length; ++i)
                        if (!$util.isInteger(message.account_id[i]))
                            return "account_id: integer[] expected";
                }
                if (message.team_name != null && message.hasOwnProperty("team_name"))
                    if (!$util.isString(message.team_name))
                        return "team_name: string expected";
                if (message.season_trophy_id != null && message.hasOwnProperty("season_trophy_id"))
                    if (!$util.isInteger(message.season_trophy_id))
                        return "season_trophy_id: integer expected";
                return null;
            };
    
            /**
             * Creates a Tournament message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTAWeekendTourneyPlayerHistory.Tournament} Tournament
             */
            Tournament.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTAWeekendTourneyPlayerHistory.Tournament)
                    return object;
                var message = new $root.CMsgDOTAWeekendTourneyPlayerHistory.Tournament();
                if (object.tournament_id != null)
                    message.tournament_id = object.tournament_id >>> 0;
                if (object.start_time != null)
                    message.start_time = object.start_time >>> 0;
                if (object.tournament_tier != null)
                    message.tournament_tier = object.tournament_tier >>> 0;
                if (object.team_id != null)
                    message.team_id = object.team_id >>> 0;
                if (object.team_date != null)
                    message.team_date = object.team_date >>> 0;
                if (object.team_result != null)
                    message.team_result = object.team_result >>> 0;
                if (object.account_id) {
                    if (!Array.isArray(object.account_id))
                        throw TypeError(".CMsgDOTAWeekendTourneyPlayerHistory.Tournament.account_id: array expected");
                    message.account_id = [];
                    for (var i = 0; i < object.account_id.length; ++i)
                        message.account_id[i] = object.account_id[i] >>> 0;
                }
                if (object.team_name != null)
                    message.team_name = String(object.team_name);
                if (object.season_trophy_id != null)
                    message.season_trophy_id = object.season_trophy_id >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Tournament message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @static
             * @param {CMsgDOTAWeekendTourneyPlayerHistory.Tournament} message Tournament
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Tournament.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.account_id = [];
                if (options.defaults) {
                    object.tournament_id = 0;
                    object.start_time = 0;
                    object.tournament_tier = 0;
                    object.team_id = 0;
                    object.team_date = 0;
                    object.team_result = 0;
                    object.team_name = "";
                    object.season_trophy_id = 0;
                }
                if (message.tournament_id != null && message.hasOwnProperty("tournament_id"))
                    object.tournament_id = message.tournament_id;
                if (message.start_time != null && message.hasOwnProperty("start_time"))
                    object.start_time = message.start_time;
                if (message.tournament_tier != null && message.hasOwnProperty("tournament_tier"))
                    object.tournament_tier = message.tournament_tier;
                if (message.team_id != null && message.hasOwnProperty("team_id"))
                    object.team_id = message.team_id;
                if (message.team_date != null && message.hasOwnProperty("team_date"))
                    object.team_date = message.team_date;
                if (message.team_result != null && message.hasOwnProperty("team_result"))
                    object.team_result = message.team_result;
                if (message.account_id && message.account_id.length) {
                    object.account_id = [];
                    for (var j = 0; j < message.account_id.length; ++j)
                        object.account_id[j] = message.account_id[j];
                }
                if (message.team_name != null && message.hasOwnProperty("team_name"))
                    object.team_name = message.team_name;
                if (message.season_trophy_id != null && message.hasOwnProperty("season_trophy_id"))
                    object.season_trophy_id = message.season_trophy_id;
                return object;
            };
    
            /**
             * Converts this Tournament to JSON.
             * @function toJSON
             * @memberof CMsgDOTAWeekendTourneyPlayerHistory.Tournament
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Tournament.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Tournament;
        })();
    
        return CMsgDOTAWeekendTourneyPlayerHistory;
    })();
    
    $root.CMsgDOTAWeekendTourneyParticipationDetails = (function() {
    
        /**
         * Properties of a CMsgDOTAWeekendTourneyParticipationDetails.
         * @exports ICMsgDOTAWeekendTourneyParticipationDetails
         * @interface ICMsgDOTAWeekendTourneyParticipationDetails
         * @property {Array.<CMsgDOTAWeekendTourneyParticipationDetails.IDivision>|null} [divisions] CMsgDOTAWeekendTourneyParticipationDetails divisions
         */
    
        /**
         * Constructs a new CMsgDOTAWeekendTourneyParticipationDetails.
         * @exports CMsgDOTAWeekendTourneyParticipationDetails
         * @classdesc Represents a CMsgDOTAWeekendTourneyParticipationDetails.
         * @implements ICMsgDOTAWeekendTourneyParticipationDetails
         * @constructor
         * @param {ICMsgDOTAWeekendTourneyParticipationDetails=} [properties] Properties to set
         */
        function CMsgDOTAWeekendTourneyParticipationDetails(properties) {
            this.divisions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgDOTAWeekendTourneyParticipationDetails divisions.
         * @member {Array.<CMsgDOTAWeekendTourneyParticipationDetails.IDivision>} divisions
         * @memberof CMsgDOTAWeekendTourneyParticipationDetails
         * @instance
         */
        CMsgDOTAWeekendTourneyParticipationDetails.prototype.divisions = $util.emptyArray;
    
        /**
         * Creates a new CMsgDOTAWeekendTourneyParticipationDetails instance using the specified properties.
         * @function create
         * @memberof CMsgDOTAWeekendTourneyParticipationDetails
         * @static
         * @param {ICMsgDOTAWeekendTourneyParticipationDetails=} [properties] Properties to set
         * @returns {CMsgDOTAWeekendTourneyParticipationDetails} CMsgDOTAWeekendTourneyParticipationDetails instance
         */
        CMsgDOTAWeekendTourneyParticipationDetails.create = function create(properties) {
            return new CMsgDOTAWeekendTourneyParticipationDetails(properties);
        };
    
        /**
         * Encodes the specified CMsgDOTAWeekendTourneyParticipationDetails message. Does not implicitly {@link CMsgDOTAWeekendTourneyParticipationDetails.verify|verify} messages.
         * @function encode
         * @memberof CMsgDOTAWeekendTourneyParticipationDetails
         * @static
         * @param {ICMsgDOTAWeekendTourneyParticipationDetails} message CMsgDOTAWeekendTourneyParticipationDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTAWeekendTourneyParticipationDetails.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.divisions != null && message.divisions.length)
                for (var i = 0; i < message.divisions.length; ++i)
                    $root.CMsgDOTAWeekendTourneyParticipationDetails.Division.encode(message.divisions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgDOTAWeekendTourneyParticipationDetails message, length delimited. Does not implicitly {@link CMsgDOTAWeekendTourneyParticipationDetails.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgDOTAWeekendTourneyParticipationDetails
         * @static
         * @param {ICMsgDOTAWeekendTourneyParticipationDetails} message CMsgDOTAWeekendTourneyParticipationDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgDOTAWeekendTourneyParticipationDetails.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgDOTAWeekendTourneyParticipationDetails message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgDOTAWeekendTourneyParticipationDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgDOTAWeekendTourneyParticipationDetails} CMsgDOTAWeekendTourneyParticipationDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTAWeekendTourneyParticipationDetails.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTAWeekendTourneyParticipationDetails();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.divisions && message.divisions.length))
                        message.divisions = [];
                    message.divisions.push($root.CMsgDOTAWeekendTourneyParticipationDetails.Division.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgDOTAWeekendTourneyParticipationDetails message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgDOTAWeekendTourneyParticipationDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgDOTAWeekendTourneyParticipationDetails} CMsgDOTAWeekendTourneyParticipationDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgDOTAWeekendTourneyParticipationDetails.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgDOTAWeekendTourneyParticipationDetails message.
         * @function verify
         * @memberof CMsgDOTAWeekendTourneyParticipationDetails
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgDOTAWeekendTourneyParticipationDetails.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.divisions != null && message.hasOwnProperty("divisions")) {
                if (!Array.isArray(message.divisions))
                    return "divisions: array expected";
                for (var i = 0; i < message.divisions.length; ++i) {
                    var error = $root.CMsgDOTAWeekendTourneyParticipationDetails.Division.verify(message.divisions[i]);
                    if (error)
                        return "divisions." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgDOTAWeekendTourneyParticipationDetails message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgDOTAWeekendTourneyParticipationDetails
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgDOTAWeekendTourneyParticipationDetails} CMsgDOTAWeekendTourneyParticipationDetails
         */
        CMsgDOTAWeekendTourneyParticipationDetails.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgDOTAWeekendTourneyParticipationDetails)
                return object;
            var message = new $root.CMsgDOTAWeekendTourneyParticipationDetails();
            if (object.divisions) {
                if (!Array.isArray(object.divisions))
                    throw TypeError(".CMsgDOTAWeekendTourneyParticipationDetails.divisions: array expected");
                message.divisions = [];
                for (var i = 0; i < object.divisions.length; ++i) {
                    if (typeof object.divisions[i] !== "object")
                        throw TypeError(".CMsgDOTAWeekendTourneyParticipationDetails.divisions: object expected");
                    message.divisions[i] = $root.CMsgDOTAWeekendTourneyParticipationDetails.Division.fromObject(object.divisions[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgDOTAWeekendTourneyParticipationDetails message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgDOTAWeekendTourneyParticipationDetails
         * @static
         * @param {CMsgDOTAWeekendTourneyParticipationDetails} message CMsgDOTAWeekendTourneyParticipationDetails
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgDOTAWeekendTourneyParticipationDetails.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.divisions = [];
            if (message.divisions && message.divisions.length) {
                object.divisions = [];
                for (var j = 0; j < message.divisions.length; ++j)
                    object.divisions[j] = $root.CMsgDOTAWeekendTourneyParticipationDetails.Division.toObject(message.divisions[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgDOTAWeekendTourneyParticipationDetails to JSON.
         * @function toJSON
         * @memberof CMsgDOTAWeekendTourneyParticipationDetails
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgDOTAWeekendTourneyParticipationDetails.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgDOTAWeekendTourneyParticipationDetails.Tier = (function() {
    
            /**
             * Properties of a Tier.
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails
             * @interface ITier
             * @property {number|null} [tier] Tier tier
             * @property {number|null} [players] Tier players
             * @property {number|null} [teams] Tier teams
             * @property {number|null} [winning_teams] Tier winning_teams
             * @property {number|null} [players_streak_2] Tier players_streak_2
             * @property {number|null} [players_streak_3] Tier players_streak_3
             * @property {number|null} [players_streak_4] Tier players_streak_4
             * @property {number|null} [players_streak_5] Tier players_streak_5
             */
    
            /**
             * Constructs a new Tier.
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails
             * @classdesc Represents a Tier.
             * @implements ITier
             * @constructor
             * @param {CMsgDOTAWeekendTourneyParticipationDetails.ITier=} [properties] Properties to set
             */
            function Tier(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Tier tier.
             * @member {number} tier
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Tier
             * @instance
             */
            Tier.prototype.tier = 0;
    
            /**
             * Tier players.
             * @member {number} players
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Tier
             * @instance
             */
            Tier.prototype.players = 0;
    
            /**
             * Tier teams.
             * @member {number} teams
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Tier
             * @instance
             */
            Tier.prototype.teams = 0;
    
            /**
             * Tier winning_teams.
             * @member {number} winning_teams
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Tier
             * @instance
             */
            Tier.prototype.winning_teams = 0;
    
            /**
             * Tier players_streak_2.
             * @member {number} players_streak_2
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Tier
             * @instance
             */
            Tier.prototype.players_streak_2 = 0;
    
            /**
             * Tier players_streak_3.
             * @member {number} players_streak_3
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Tier
             * @instance
             */
            Tier.prototype.players_streak_3 = 0;
    
            /**
             * Tier players_streak_4.
             * @member {number} players_streak_4
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Tier
             * @instance
             */
            Tier.prototype.players_streak_4 = 0;
    
            /**
             * Tier players_streak_5.
             * @member {number} players_streak_5
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Tier
             * @instance
             */
            Tier.prototype.players_streak_5 = 0;
    
            /**
             * Creates a new Tier instance using the specified properties.
             * @function create
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Tier
             * @static
             * @param {CMsgDOTAWeekendTourneyParticipationDetails.ITier=} [properties] Properties to set
             * @returns {CMsgDOTAWeekendTourneyParticipationDetails.Tier} Tier instance
             */
            Tier.create = function create(properties) {
                return new Tier(properties);
            };
    
            /**
             * Encodes the specified Tier message. Does not implicitly {@link CMsgDOTAWeekendTourneyParticipationDetails.Tier.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Tier
             * @static
             * @param {CMsgDOTAWeekendTourneyParticipationDetails.ITier} message Tier message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tier.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tier != null && Object.hasOwnProperty.call(message, "tier"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.tier);
                if (message.players != null && Object.hasOwnProperty.call(message, "players"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.players);
                if (message.teams != null && Object.hasOwnProperty.call(message, "teams"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.teams);
                if (message.winning_teams != null && Object.hasOwnProperty.call(message, "winning_teams"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.winning_teams);
                if (message.players_streak_2 != null && Object.hasOwnProperty.call(message, "players_streak_2"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.players_streak_2);
                if (message.players_streak_3 != null && Object.hasOwnProperty.call(message, "players_streak_3"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.players_streak_3);
                if (message.players_streak_4 != null && Object.hasOwnProperty.call(message, "players_streak_4"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.players_streak_4);
                if (message.players_streak_5 != null && Object.hasOwnProperty.call(message, "players_streak_5"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.players_streak_5);
                return writer;
            };
    
            /**
             * Encodes the specified Tier message, length delimited. Does not implicitly {@link CMsgDOTAWeekendTourneyParticipationDetails.Tier.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Tier
             * @static
             * @param {CMsgDOTAWeekendTourneyParticipationDetails.ITier} message Tier message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tier.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Tier message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Tier
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTAWeekendTourneyParticipationDetails.Tier} Tier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tier.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTAWeekendTourneyParticipationDetails.Tier();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tier = reader.uint32();
                        break;
                    case 2:
                        message.players = reader.uint32();
                        break;
                    case 3:
                        message.teams = reader.uint32();
                        break;
                    case 4:
                        message.winning_teams = reader.uint32();
                        break;
                    case 5:
                        message.players_streak_2 = reader.uint32();
                        break;
                    case 6:
                        message.players_streak_3 = reader.uint32();
                        break;
                    case 7:
                        message.players_streak_4 = reader.uint32();
                        break;
                    case 8:
                        message.players_streak_5 = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Tier message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Tier
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTAWeekendTourneyParticipationDetails.Tier} Tier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tier.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Tier message.
             * @function verify
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Tier
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Tier.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tier != null && message.hasOwnProperty("tier"))
                    if (!$util.isInteger(message.tier))
                        return "tier: integer expected";
                if (message.players != null && message.hasOwnProperty("players"))
                    if (!$util.isInteger(message.players))
                        return "players: integer expected";
                if (message.teams != null && message.hasOwnProperty("teams"))
                    if (!$util.isInteger(message.teams))
                        return "teams: integer expected";
                if (message.winning_teams != null && message.hasOwnProperty("winning_teams"))
                    if (!$util.isInteger(message.winning_teams))
                        return "winning_teams: integer expected";
                if (message.players_streak_2 != null && message.hasOwnProperty("players_streak_2"))
                    if (!$util.isInteger(message.players_streak_2))
                        return "players_streak_2: integer expected";
                if (message.players_streak_3 != null && message.hasOwnProperty("players_streak_3"))
                    if (!$util.isInteger(message.players_streak_3))
                        return "players_streak_3: integer expected";
                if (message.players_streak_4 != null && message.hasOwnProperty("players_streak_4"))
                    if (!$util.isInteger(message.players_streak_4))
                        return "players_streak_4: integer expected";
                if (message.players_streak_5 != null && message.hasOwnProperty("players_streak_5"))
                    if (!$util.isInteger(message.players_streak_5))
                        return "players_streak_5: integer expected";
                return null;
            };
    
            /**
             * Creates a Tier message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Tier
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTAWeekendTourneyParticipationDetails.Tier} Tier
             */
            Tier.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTAWeekendTourneyParticipationDetails.Tier)
                    return object;
                var message = new $root.CMsgDOTAWeekendTourneyParticipationDetails.Tier();
                if (object.tier != null)
                    message.tier = object.tier >>> 0;
                if (object.players != null)
                    message.players = object.players >>> 0;
                if (object.teams != null)
                    message.teams = object.teams >>> 0;
                if (object.winning_teams != null)
                    message.winning_teams = object.winning_teams >>> 0;
                if (object.players_streak_2 != null)
                    message.players_streak_2 = object.players_streak_2 >>> 0;
                if (object.players_streak_3 != null)
                    message.players_streak_3 = object.players_streak_3 >>> 0;
                if (object.players_streak_4 != null)
                    message.players_streak_4 = object.players_streak_4 >>> 0;
                if (object.players_streak_5 != null)
                    message.players_streak_5 = object.players_streak_5 >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Tier message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Tier
             * @static
             * @param {CMsgDOTAWeekendTourneyParticipationDetails.Tier} message Tier
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Tier.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.tier = 0;
                    object.players = 0;
                    object.teams = 0;
                    object.winning_teams = 0;
                    object.players_streak_2 = 0;
                    object.players_streak_3 = 0;
                    object.players_streak_4 = 0;
                    object.players_streak_5 = 0;
                }
                if (message.tier != null && message.hasOwnProperty("tier"))
                    object.tier = message.tier;
                if (message.players != null && message.hasOwnProperty("players"))
                    object.players = message.players;
                if (message.teams != null && message.hasOwnProperty("teams"))
                    object.teams = message.teams;
                if (message.winning_teams != null && message.hasOwnProperty("winning_teams"))
                    object.winning_teams = message.winning_teams;
                if (message.players_streak_2 != null && message.hasOwnProperty("players_streak_2"))
                    object.players_streak_2 = message.players_streak_2;
                if (message.players_streak_3 != null && message.hasOwnProperty("players_streak_3"))
                    object.players_streak_3 = message.players_streak_3;
                if (message.players_streak_4 != null && message.hasOwnProperty("players_streak_4"))
                    object.players_streak_4 = message.players_streak_4;
                if (message.players_streak_5 != null && message.hasOwnProperty("players_streak_5"))
                    object.players_streak_5 = message.players_streak_5;
                return object;
            };
    
            /**
             * Converts this Tier to JSON.
             * @function toJSON
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Tier
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Tier.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Tier;
        })();
    
        CMsgDOTAWeekendTourneyParticipationDetails.Division = (function() {
    
            /**
             * Properties of a Division.
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails
             * @interface IDivision
             * @property {number|null} [division_id] Division division_id
             * @property {number|null} [schedule_time] Division schedule_time
             * @property {Array.<CMsgDOTAWeekendTourneyParticipationDetails.ITier>|null} [tiers] Division tiers
             */
    
            /**
             * Constructs a new Division.
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails
             * @classdesc Represents a Division.
             * @implements IDivision
             * @constructor
             * @param {CMsgDOTAWeekendTourneyParticipationDetails.IDivision=} [properties] Properties to set
             */
            function Division(properties) {
                this.tiers = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Division division_id.
             * @member {number} division_id
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Division
             * @instance
             */
            Division.prototype.division_id = 0;
    
            /**
             * Division schedule_time.
             * @member {number} schedule_time
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Division
             * @instance
             */
            Division.prototype.schedule_time = 0;
    
            /**
             * Division tiers.
             * @member {Array.<CMsgDOTAWeekendTourneyParticipationDetails.ITier>} tiers
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Division
             * @instance
             */
            Division.prototype.tiers = $util.emptyArray;
    
            /**
             * Creates a new Division instance using the specified properties.
             * @function create
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Division
             * @static
             * @param {CMsgDOTAWeekendTourneyParticipationDetails.IDivision=} [properties] Properties to set
             * @returns {CMsgDOTAWeekendTourneyParticipationDetails.Division} Division instance
             */
            Division.create = function create(properties) {
                return new Division(properties);
            };
    
            /**
             * Encodes the specified Division message. Does not implicitly {@link CMsgDOTAWeekendTourneyParticipationDetails.Division.verify|verify} messages.
             * @function encode
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Division
             * @static
             * @param {CMsgDOTAWeekendTourneyParticipationDetails.IDivision} message Division message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Division.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.division_id != null && Object.hasOwnProperty.call(message, "division_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.division_id);
                if (message.schedule_time != null && Object.hasOwnProperty.call(message, "schedule_time"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.schedule_time);
                if (message.tiers != null && message.tiers.length)
                    for (var i = 0; i < message.tiers.length; ++i)
                        $root.CMsgDOTAWeekendTourneyParticipationDetails.Tier.encode(message.tiers[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Division message, length delimited. Does not implicitly {@link CMsgDOTAWeekendTourneyParticipationDetails.Division.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Division
             * @static
             * @param {CMsgDOTAWeekendTourneyParticipationDetails.IDivision} message Division message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Division.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Division message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Division
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgDOTAWeekendTourneyParticipationDetails.Division} Division
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Division.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgDOTAWeekendTourneyParticipationDetails.Division();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.division_id = reader.uint32();
                        break;
                    case 2:
                        message.schedule_time = reader.uint32();
                        break;
                    case 3:
                        if (!(message.tiers && message.tiers.length))
                            message.tiers = [];
                        message.tiers.push($root.CMsgDOTAWeekendTourneyParticipationDetails.Tier.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Division message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Division
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgDOTAWeekendTourneyParticipationDetails.Division} Division
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Division.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Division message.
             * @function verify
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Division
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Division.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.division_id != null && message.hasOwnProperty("division_id"))
                    if (!$util.isInteger(message.division_id))
                        return "division_id: integer expected";
                if (message.schedule_time != null && message.hasOwnProperty("schedule_time"))
                    if (!$util.isInteger(message.schedule_time))
                        return "schedule_time: integer expected";
                if (message.tiers != null && message.hasOwnProperty("tiers")) {
                    if (!Array.isArray(message.tiers))
                        return "tiers: array expected";
                    for (var i = 0; i < message.tiers.length; ++i) {
                        var error = $root.CMsgDOTAWeekendTourneyParticipationDetails.Tier.verify(message.tiers[i]);
                        if (error)
                            return "tiers." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Division message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Division
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgDOTAWeekendTourneyParticipationDetails.Division} Division
             */
            Division.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgDOTAWeekendTourneyParticipationDetails.Division)
                    return object;
                var message = new $root.CMsgDOTAWeekendTourneyParticipationDetails.Division();
                if (object.division_id != null)
                    message.division_id = object.division_id >>> 0;
                if (object.schedule_time != null)
                    message.schedule_time = object.schedule_time >>> 0;
                if (object.tiers) {
                    if (!Array.isArray(object.tiers))
                        throw TypeError(".CMsgDOTAWeekendTourneyParticipationDetails.Division.tiers: array expected");
                    message.tiers = [];
                    for (var i = 0; i < object.tiers.length; ++i) {
                        if (typeof object.tiers[i] !== "object")
                            throw TypeError(".CMsgDOTAWeekendTourneyParticipationDetails.Division.tiers: object expected");
                        message.tiers[i] = $root.CMsgDOTAWeekendTourneyParticipationDetails.Tier.fromObject(object.tiers[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Division message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Division
             * @static
             * @param {CMsgDOTAWeekendTourneyParticipationDetails.Division} message Division
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Division.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.tiers = [];
                if (options.defaults) {
                    object.division_id = 0;
                    object.schedule_time = 0;
                }
                if (message.division_id != null && message.hasOwnProperty("division_id"))
                    object.division_id = message.division_id;
                if (message.schedule_time != null && message.hasOwnProperty("schedule_time"))
                    object.schedule_time = message.schedule_time;
                if (message.tiers && message.tiers.length) {
                    object.tiers = [];
                    for (var j = 0; j < message.tiers.length; ++j)
                        object.tiers[j] = $root.CMsgDOTAWeekendTourneyParticipationDetails.Tier.toObject(message.tiers[j], options);
                }
                return object;
            };
    
            /**
             * Converts this Division to JSON.
             * @function toJSON
             * @memberof CMsgDOTAWeekendTourneyParticipationDetails.Division
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Division.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Division;
        })();
    
        return CMsgDOTAWeekendTourneyParticipationDetails;
    })();
    
    /**
     * ETournamentTemplate enum.
     * @exports ETournamentTemplate
     * @enum {number}
     * @property {number} k_ETournamentTemplate_None=0 k_ETournamentTemplate_None value
     * @property {number} k_ETournamentTemplate_AutomatedWin3=1 k_ETournamentTemplate_AutomatedWin3 value
     */
    $root.ETournamentTemplate = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ETournamentTemplate_None"] = 0;
        values[valuesById[1] = "k_ETournamentTemplate_AutomatedWin3"] = 1;
        return values;
    })();
    
    /**
     * ETournamentGameState enum.
     * @exports ETournamentGameState
     * @enum {number}
     * @property {number} k_ETournamentGameState_Unknown=0 k_ETournamentGameState_Unknown value
     * @property {number} k_ETournamentGameState_Canceled=1 k_ETournamentGameState_Canceled value
     * @property {number} k_ETournamentGameState_Scheduled=2 k_ETournamentGameState_Scheduled value
     * @property {number} k_ETournamentGameState_Active=3 k_ETournamentGameState_Active value
     * @property {number} k_ETournamentGameState_RadVictory=20 k_ETournamentGameState_RadVictory value
     * @property {number} k_ETournamentGameState_DireVictory=21 k_ETournamentGameState_DireVictory value
     * @property {number} k_ETournamentGameState_RadVictoryByForfeit=22 k_ETournamentGameState_RadVictoryByForfeit value
     * @property {number} k_ETournamentGameState_DireVictoryByForfeit=23 k_ETournamentGameState_DireVictoryByForfeit value
     * @property {number} k_ETournamentGameState_ServerFailure=40 k_ETournamentGameState_ServerFailure value
     * @property {number} k_ETournamentGameState_NotNeeded=41 k_ETournamentGameState_NotNeeded value
     */
    $root.ETournamentGameState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ETournamentGameState_Unknown"] = 0;
        values[valuesById[1] = "k_ETournamentGameState_Canceled"] = 1;
        values[valuesById[2] = "k_ETournamentGameState_Scheduled"] = 2;
        values[valuesById[3] = "k_ETournamentGameState_Active"] = 3;
        values[valuesById[20] = "k_ETournamentGameState_RadVictory"] = 20;
        values[valuesById[21] = "k_ETournamentGameState_DireVictory"] = 21;
        values[valuesById[22] = "k_ETournamentGameState_RadVictoryByForfeit"] = 22;
        values[valuesById[23] = "k_ETournamentGameState_DireVictoryByForfeit"] = 23;
        values[valuesById[40] = "k_ETournamentGameState_ServerFailure"] = 40;
        values[valuesById[41] = "k_ETournamentGameState_NotNeeded"] = 41;
        return values;
    })();
    
    /**
     * ETournamentTeamState enum.
     * @exports ETournamentTeamState
     * @enum {number}
     * @property {number} k_ETournamentTeamState_Unknown=0 k_ETournamentTeamState_Unknown value
     * @property {number} k_ETournamentTeamState_Node1=1 k_ETournamentTeamState_Node1 value
     * @property {number} k_ETournamentTeamState_NodeMax=1024 k_ETournamentTeamState_NodeMax value
     * @property {number} k_ETournamentTeamState_Eliminated=14003 k_ETournamentTeamState_Eliminated value
     * @property {number} k_ETournamentTeamState_Forfeited=14004 k_ETournamentTeamState_Forfeited value
     * @property {number} k_ETournamentTeamState_Finished1st=15001 k_ETournamentTeamState_Finished1st value
     * @property {number} k_ETournamentTeamState_Finished2nd=15002 k_ETournamentTeamState_Finished2nd value
     * @property {number} k_ETournamentTeamState_Finished3rd=15003 k_ETournamentTeamState_Finished3rd value
     * @property {number} k_ETournamentTeamState_Finished4th=15004 k_ETournamentTeamState_Finished4th value
     * @property {number} k_ETournamentTeamState_Finished5th=15005 k_ETournamentTeamState_Finished5th value
     * @property {number} k_ETournamentTeamState_Finished6th=15006 k_ETournamentTeamState_Finished6th value
     * @property {number} k_ETournamentTeamState_Finished7th=15007 k_ETournamentTeamState_Finished7th value
     * @property {number} k_ETournamentTeamState_Finished8th=15008 k_ETournamentTeamState_Finished8th value
     * @property {number} k_ETournamentTeamState_Finished9th=15009 k_ETournamentTeamState_Finished9th value
     * @property {number} k_ETournamentTeamState_Finished10th=15010 k_ETournamentTeamState_Finished10th value
     * @property {number} k_ETournamentTeamState_Finished11th=15011 k_ETournamentTeamState_Finished11th value
     * @property {number} k_ETournamentTeamState_Finished12th=15012 k_ETournamentTeamState_Finished12th value
     * @property {number} k_ETournamentTeamState_Finished13th=15013 k_ETournamentTeamState_Finished13th value
     * @property {number} k_ETournamentTeamState_Finished14th=15014 k_ETournamentTeamState_Finished14th value
     * @property {number} k_ETournamentTeamState_Finished15th=15015 k_ETournamentTeamState_Finished15th value
     * @property {number} k_ETournamentTeamState_Finished16th=15016 k_ETournamentTeamState_Finished16th value
     */
    $root.ETournamentTeamState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ETournamentTeamState_Unknown"] = 0;
        values[valuesById[1] = "k_ETournamentTeamState_Node1"] = 1;
        values[valuesById[1024] = "k_ETournamentTeamState_NodeMax"] = 1024;
        values[valuesById[14003] = "k_ETournamentTeamState_Eliminated"] = 14003;
        values[valuesById[14004] = "k_ETournamentTeamState_Forfeited"] = 14004;
        values[valuesById[15001] = "k_ETournamentTeamState_Finished1st"] = 15001;
        values[valuesById[15002] = "k_ETournamentTeamState_Finished2nd"] = 15002;
        values[valuesById[15003] = "k_ETournamentTeamState_Finished3rd"] = 15003;
        values[valuesById[15004] = "k_ETournamentTeamState_Finished4th"] = 15004;
        values[valuesById[15005] = "k_ETournamentTeamState_Finished5th"] = 15005;
        values[valuesById[15006] = "k_ETournamentTeamState_Finished6th"] = 15006;
        values[valuesById[15007] = "k_ETournamentTeamState_Finished7th"] = 15007;
        values[valuesById[15008] = "k_ETournamentTeamState_Finished8th"] = 15008;
        values[valuesById[15009] = "k_ETournamentTeamState_Finished9th"] = 15009;
        values[valuesById[15010] = "k_ETournamentTeamState_Finished10th"] = 15010;
        values[valuesById[15011] = "k_ETournamentTeamState_Finished11th"] = 15011;
        values[valuesById[15012] = "k_ETournamentTeamState_Finished12th"] = 15012;
        values[valuesById[15013] = "k_ETournamentTeamState_Finished13th"] = 15013;
        values[valuesById[15014] = "k_ETournamentTeamState_Finished14th"] = 15014;
        values[valuesById[15015] = "k_ETournamentTeamState_Finished15th"] = 15015;
        values[valuesById[15016] = "k_ETournamentTeamState_Finished16th"] = 15016;
        return values;
    })();
    
    /**
     * ETournamentState enum.
     * @exports ETournamentState
     * @enum {number}
     * @property {number} k_ETournamentState_Unknown=0 k_ETournamentState_Unknown value
     * @property {number} k_ETournamentState_CanceledByAdmin=1 k_ETournamentState_CanceledByAdmin value
     * @property {number} k_ETournamentState_Completed=2 k_ETournamentState_Completed value
     * @property {number} k_ETournamentState_Merged=3 k_ETournamentState_Merged value
     * @property {number} k_ETournamentState_ServerFailure=4 k_ETournamentState_ServerFailure value
     * @property {number} k_ETournamentState_TeamAbandoned=5 k_ETournamentState_TeamAbandoned value
     * @property {number} k_ETournamentState_TeamTimeoutForfeit=6 k_ETournamentState_TeamTimeoutForfeit value
     * @property {number} k_ETournamentState_TeamTimeoutRefund=7 k_ETournamentState_TeamTimeoutRefund value
     * @property {number} k_ETournamentState_ServerFailureGrantedVictory=8 k_ETournamentState_ServerFailureGrantedVictory value
     * @property {number} k_ETournamentState_TeamTimeoutGrantedVictory=9 k_ETournamentState_TeamTimeoutGrantedVictory value
     * @property {number} k_ETournamentState_InProgress=100 k_ETournamentState_InProgress value
     * @property {number} k_ETournamentState_WaitingToMerge=101 k_ETournamentState_WaitingToMerge value
     */
    $root.ETournamentState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ETournamentState_Unknown"] = 0;
        values[valuesById[1] = "k_ETournamentState_CanceledByAdmin"] = 1;
        values[valuesById[2] = "k_ETournamentState_Completed"] = 2;
        values[valuesById[3] = "k_ETournamentState_Merged"] = 3;
        values[valuesById[4] = "k_ETournamentState_ServerFailure"] = 4;
        values[valuesById[5] = "k_ETournamentState_TeamAbandoned"] = 5;
        values[valuesById[6] = "k_ETournamentState_TeamTimeoutForfeit"] = 6;
        values[valuesById[7] = "k_ETournamentState_TeamTimeoutRefund"] = 7;
        values[valuesById[8] = "k_ETournamentState_ServerFailureGrantedVictory"] = 8;
        values[valuesById[9] = "k_ETournamentState_TeamTimeoutGrantedVictory"] = 9;
        values[valuesById[100] = "k_ETournamentState_InProgress"] = 100;
        values[valuesById[101] = "k_ETournamentState_WaitingToMerge"] = 101;
        return values;
    })();
    
    /**
     * ETournamentNodeState enum.
     * @exports ETournamentNodeState
     * @enum {number}
     * @property {number} k_ETournamentNodeState_Unknown=0 k_ETournamentNodeState_Unknown value
     * @property {number} k_ETournamentNodeState_Canceled=1 k_ETournamentNodeState_Canceled value
     * @property {number} k_ETournamentNodeState_TeamsNotYetAssigned=2 k_ETournamentNodeState_TeamsNotYetAssigned value
     * @property {number} k_ETournamentNodeState_InBetweenGames=3 k_ETournamentNodeState_InBetweenGames value
     * @property {number} k_ETournamentNodeState_GameInProgress=4 k_ETournamentNodeState_GameInProgress value
     * @property {number} k_ETournamentNodeState_A_Won=5 k_ETournamentNodeState_A_Won value
     * @property {number} k_ETournamentNodeState_B_Won=6 k_ETournamentNodeState_B_Won value
     * @property {number} k_ETournamentNodeState_A_WonByForfeit=7 k_ETournamentNodeState_A_WonByForfeit value
     * @property {number} k_ETournamentNodeState_B_WonByForfeit=8 k_ETournamentNodeState_B_WonByForfeit value
     * @property {number} k_ETournamentNodeState_A_Bye=9 k_ETournamentNodeState_A_Bye value
     * @property {number} k_ETournamentNodeState_A_Abandoned=10 k_ETournamentNodeState_A_Abandoned value
     * @property {number} k_ETournamentNodeState_ServerFailure=11 k_ETournamentNodeState_ServerFailure value
     * @property {number} k_ETournamentNodeState_A_TimeoutForfeit=12 k_ETournamentNodeState_A_TimeoutForfeit value
     * @property {number} k_ETournamentNodeState_A_TimeoutRefund=13 k_ETournamentNodeState_A_TimeoutRefund value
     */
    $root.ETournamentNodeState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ETournamentNodeState_Unknown"] = 0;
        values[valuesById[1] = "k_ETournamentNodeState_Canceled"] = 1;
        values[valuesById[2] = "k_ETournamentNodeState_TeamsNotYetAssigned"] = 2;
        values[valuesById[3] = "k_ETournamentNodeState_InBetweenGames"] = 3;
        values[valuesById[4] = "k_ETournamentNodeState_GameInProgress"] = 4;
        values[valuesById[5] = "k_ETournamentNodeState_A_Won"] = 5;
        values[valuesById[6] = "k_ETournamentNodeState_B_Won"] = 6;
        values[valuesById[7] = "k_ETournamentNodeState_A_WonByForfeit"] = 7;
        values[valuesById[8] = "k_ETournamentNodeState_B_WonByForfeit"] = 8;
        values[valuesById[9] = "k_ETournamentNodeState_A_Bye"] = 9;
        values[valuesById[10] = "k_ETournamentNodeState_A_Abandoned"] = 10;
        values[valuesById[11] = "k_ETournamentNodeState_ServerFailure"] = 11;
        values[valuesById[12] = "k_ETournamentNodeState_A_TimeoutForfeit"] = 12;
        values[valuesById[13] = "k_ETournamentNodeState_A_TimeoutRefund"] = 13;
        return values;
    })();
    
    /**
     * EDOTAGroupMergeResult enum.
     * @exports EDOTAGroupMergeResult
     * @enum {number}
     * @property {number} k_EDOTAGroupMergeResult_OK=0 k_EDOTAGroupMergeResult_OK value
     * @property {number} k_EDOTAGroupMergeResult_FAILED_GENERIC=1 k_EDOTAGroupMergeResult_FAILED_GENERIC value
     * @property {number} k_EDOTAGroupMergeResult_NOT_LEADER=2 k_EDOTAGroupMergeResult_NOT_LEADER value
     * @property {number} k_EDOTAGroupMergeResult_TOO_MANY_PLAYERS=3 k_EDOTAGroupMergeResult_TOO_MANY_PLAYERS value
     * @property {number} k_EDOTAGroupMergeResult_TOO_MANY_COACHES=4 k_EDOTAGroupMergeResult_TOO_MANY_COACHES value
     * @property {number} k_EDOTAGroupMergeResult_ENGINE_MISMATCH=5 k_EDOTAGroupMergeResult_ENGINE_MISMATCH value
     * @property {number} k_EDOTAGroupMergeResult_NO_SUCH_GROUP=6 k_EDOTAGroupMergeResult_NO_SUCH_GROUP value
     * @property {number} k_EDOTAGroupMergeResult_OTHER_GROUP_NOT_OPEN=7 k_EDOTAGroupMergeResult_OTHER_GROUP_NOT_OPEN value
     * @property {number} k_EDOTAGroupMergeResult_ALREADY_INVITED=8 k_EDOTAGroupMergeResult_ALREADY_INVITED value
     * @property {number} k_EDOTAGroupMergeResult_NOT_INVITED=9 k_EDOTAGroupMergeResult_NOT_INVITED value
     */
    $root.EDOTAGroupMergeResult = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EDOTAGroupMergeResult_OK"] = 0;
        values[valuesById[1] = "k_EDOTAGroupMergeResult_FAILED_GENERIC"] = 1;
        values[valuesById[2] = "k_EDOTAGroupMergeResult_NOT_LEADER"] = 2;
        values[valuesById[3] = "k_EDOTAGroupMergeResult_TOO_MANY_PLAYERS"] = 3;
        values[valuesById[4] = "k_EDOTAGroupMergeResult_TOO_MANY_COACHES"] = 4;
        values[valuesById[5] = "k_EDOTAGroupMergeResult_ENGINE_MISMATCH"] = 5;
        values[valuesById[6] = "k_EDOTAGroupMergeResult_NO_SUCH_GROUP"] = 6;
        values[valuesById[7] = "k_EDOTAGroupMergeResult_OTHER_GROUP_NOT_OPEN"] = 7;
        values[valuesById[8] = "k_EDOTAGroupMergeResult_ALREADY_INVITED"] = 8;
        values[valuesById[9] = "k_EDOTAGroupMergeResult_NOT_INVITED"] = 9;
        return values;
    })();
    
    /**
     * EPartyBeaconType enum.
     * @exports EPartyBeaconType
     * @enum {number}
     * @property {number} k_EPartyBeaconType_Available=0 k_EPartyBeaconType_Available value
     * @property {number} k_EPartyBeaconType_Joinable=1 k_EPartyBeaconType_Joinable value
     */
    $root.EPartyBeaconType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EPartyBeaconType_Available"] = 0;
        values[valuesById[1] = "k_EPartyBeaconType_Joinable"] = 1;
        return values;
    })();

    return $root;
});
