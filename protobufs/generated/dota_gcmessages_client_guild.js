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
     * EGuildAuditAction enum.
     * @exports EGuildAuditAction
     * @enum {number}
     * @property {number} k_EGuildAuditAction_Invalid=0 k_EGuildAuditAction_Invalid value
     * @property {number} k_EGuildAuditAction_GuildCreated=1 k_EGuildAuditAction_GuildCreated value
     * @property {number} k_EGuildAuditAction_GuildLanguageChanged=2 k_EGuildAuditAction_GuildLanguageChanged value
     * @property {number} k_EGuildAuditAction_GuildFlagsChanged=3 k_EGuildAuditAction_GuildFlagsChanged value
     * @property {number} k_EGuildAuditAction_GuildMemberJoined=5 k_EGuildAuditAction_GuildMemberJoined value
     * @property {number} k_EGuildAuditAction_GuildMemberLeft=6 k_EGuildAuditAction_GuildMemberLeft value
     * @property {number} k_EGuildAuditAction_GuildMemberKicked=7 k_EGuildAuditAction_GuildMemberKicked value
     * @property {number} k_EGuildAuditAction_GuildMemberRoleChanged=8 k_EGuildAuditAction_GuildMemberRoleChanged value
     * @property {number} k_EGuildAuditAction_GuildLogoChanged=9 k_EGuildAuditAction_GuildLogoChanged value
     * @property {number} k_EGuildAuditAction_GuildRegionChanged=10 k_EGuildAuditAction_GuildRegionChanged value
     * @property {number} k_EGuildAuditAction_GuildDescriptionChanged=11 k_EGuildAuditAction_GuildDescriptionChanged value
     * @property {number} k_EGuildAuditAction_GuildPrimaryColorChanged=12 k_EGuildAuditAction_GuildPrimaryColorChanged value
     * @property {number} k_EGuildAuditAction_GuildSecondaryColorChanged=13 k_EGuildAuditAction_GuildSecondaryColorChanged value
     * @property {number} k_EGuildAuditAction_GuildPatternChanged=14 k_EGuildAuditAction_GuildPatternChanged value
     * @property {number} k_EGuildAuditAction_AdminClearedLogo=15 k_EGuildAuditAction_AdminClearedLogo value
     * @property {number} k_EGuildAuditAction_GuildRequiredRankChanged=16 k_EGuildAuditAction_GuildRequiredRankChanged value
     * @property {number} k_EGuildAuditAction_GuildMotDChanged=18 k_EGuildAuditAction_GuildMotDChanged value
     * @property {number} k_EGuildAuditAction_AdminResetName=19 k_EGuildAuditAction_AdminResetName value
     * @property {number} k_EGuildAuditAction_AdminResetTag=20 k_EGuildAuditAction_AdminResetTag value
     * @property {number} k_EGuildAuditAction_AdminLock=21 k_EGuildAuditAction_AdminLock value
     * @property {number} k_EGuildAuditAction_GuildNameChanged=22 k_EGuildAuditAction_GuildNameChanged value
     * @property {number} k_EGuildAuditAction_GuildTagChanged=23 k_EGuildAuditAction_GuildTagChanged value
     * @property {number} k_EGuildAuditAction_AdminPermitted=24 k_EGuildAuditAction_AdminPermitted value
     * @property {number} k_EGuildAuditAction_AdminBlocked=25 k_EGuildAuditAction_AdminBlocked value
     * @property {number} k_EGuildAuditAction_AdminBannedUser=26 k_EGuildAuditAction_AdminBannedUser value
     */
    $root.EGuildAuditAction = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EGuildAuditAction_Invalid"] = 0;
        values[valuesById[1] = "k_EGuildAuditAction_GuildCreated"] = 1;
        values[valuesById[2] = "k_EGuildAuditAction_GuildLanguageChanged"] = 2;
        values[valuesById[3] = "k_EGuildAuditAction_GuildFlagsChanged"] = 3;
        values[valuesById[5] = "k_EGuildAuditAction_GuildMemberJoined"] = 5;
        values[valuesById[6] = "k_EGuildAuditAction_GuildMemberLeft"] = 6;
        values[valuesById[7] = "k_EGuildAuditAction_GuildMemberKicked"] = 7;
        values[valuesById[8] = "k_EGuildAuditAction_GuildMemberRoleChanged"] = 8;
        values[valuesById[9] = "k_EGuildAuditAction_GuildLogoChanged"] = 9;
        values[valuesById[10] = "k_EGuildAuditAction_GuildRegionChanged"] = 10;
        values[valuesById[11] = "k_EGuildAuditAction_GuildDescriptionChanged"] = 11;
        values[valuesById[12] = "k_EGuildAuditAction_GuildPrimaryColorChanged"] = 12;
        values[valuesById[13] = "k_EGuildAuditAction_GuildSecondaryColorChanged"] = 13;
        values[valuesById[14] = "k_EGuildAuditAction_GuildPatternChanged"] = 14;
        values[valuesById[15] = "k_EGuildAuditAction_AdminClearedLogo"] = 15;
        values[valuesById[16] = "k_EGuildAuditAction_GuildRequiredRankChanged"] = 16;
        values[valuesById[18] = "k_EGuildAuditAction_GuildMotDChanged"] = 18;
        values[valuesById[19] = "k_EGuildAuditAction_AdminResetName"] = 19;
        values[valuesById[20] = "k_EGuildAuditAction_AdminResetTag"] = 20;
        values[valuesById[21] = "k_EGuildAuditAction_AdminLock"] = 21;
        values[valuesById[22] = "k_EGuildAuditAction_GuildNameChanged"] = 22;
        values[valuesById[23] = "k_EGuildAuditAction_GuildTagChanged"] = 23;
        values[valuesById[24] = "k_EGuildAuditAction_AdminPermitted"] = 24;
        values[valuesById[25] = "k_EGuildAuditAction_AdminBlocked"] = 25;
        values[valuesById[26] = "k_EGuildAuditAction_AdminBannedUser"] = 26;
        return values;
    })();
    
    /**
     * EGuildChatType enum.
     * @exports EGuildChatType
     * @enum {number}
     * @property {number} k_EGuildChatType_Unspecified=0 k_EGuildChatType_Unspecified value
     * @property {number} k_EGuildChatType_SteamChatGroup=1 k_EGuildChatType_SteamChatGroup value
     * @property {number} k_EGuildChatType_GC=2 k_EGuildChatType_GC value
     */
    $root.EGuildChatType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EGuildChatType_Unspecified"] = 0;
        values[valuesById[1] = "k_EGuildChatType_SteamChatGroup"] = 1;
        values[valuesById[2] = "k_EGuildChatType_GC"] = 2;
        return values;
    })();
    
    $root.CMsgGuildInfo = (function() {
    
        /**
         * Properties of a CMsgGuildInfo.
         * @exports ICMsgGuildInfo
         * @interface ICMsgGuildInfo
         * @property {string|null} [guild_name] CMsgGuildInfo guild_name
         * @property {string|null} [guild_tag] CMsgGuildInfo guild_tag
         * @property {number|null} [created_timestamp] CMsgGuildInfo created_timestamp
         * @property {number|null} [guild_language] CMsgGuildInfo guild_language
         * @property {number|null} [guild_flags] CMsgGuildInfo guild_flags
         * @property {number|Long|null} [guild_logo] CMsgGuildInfo guild_logo
         * @property {number|null} [guild_region] CMsgGuildInfo guild_region
         * @property {number|Long|null} [guild_chat_group_id] CMsgGuildInfo guild_chat_group_id
         * @property {string|null} [guild_description] CMsgGuildInfo guild_description
         * @property {number|Long|null} [default_chat_channel_id] CMsgGuildInfo default_chat_channel_id
         * @property {number|null} [guild_primary_color] CMsgGuildInfo guild_primary_color
         * @property {number|null} [guild_secondary_color] CMsgGuildInfo guild_secondary_color
         * @property {number|null} [guild_pattern] CMsgGuildInfo guild_pattern
         * @property {number|null} [guild_refresh_time_offset] CMsgGuildInfo guild_refresh_time_offset
         * @property {number|null} [guild_required_rank_tier] CMsgGuildInfo guild_required_rank_tier
         * @property {number|null} [guild_motd_timestamp] CMsgGuildInfo guild_motd_timestamp
         * @property {string|null} [guild_motd] CMsgGuildInfo guild_motd
         */
    
        /**
         * Constructs a new CMsgGuildInfo.
         * @exports CMsgGuildInfo
         * @classdesc Represents a CMsgGuildInfo.
         * @implements ICMsgGuildInfo
         * @constructor
         * @param {ICMsgGuildInfo=} [properties] Properties to set
         */
        function CMsgGuildInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGuildInfo guild_name.
         * @member {string} guild_name
         * @memberof CMsgGuildInfo
         * @instance
         */
        CMsgGuildInfo.prototype.guild_name = "";
    
        /**
         * CMsgGuildInfo guild_tag.
         * @member {string} guild_tag
         * @memberof CMsgGuildInfo
         * @instance
         */
        CMsgGuildInfo.prototype.guild_tag = "";
    
        /**
         * CMsgGuildInfo created_timestamp.
         * @member {number} created_timestamp
         * @memberof CMsgGuildInfo
         * @instance
         */
        CMsgGuildInfo.prototype.created_timestamp = 0;
    
        /**
         * CMsgGuildInfo guild_language.
         * @member {number} guild_language
         * @memberof CMsgGuildInfo
         * @instance
         */
        CMsgGuildInfo.prototype.guild_language = 0;
    
        /**
         * CMsgGuildInfo guild_flags.
         * @member {number} guild_flags
         * @memberof CMsgGuildInfo
         * @instance
         */
        CMsgGuildInfo.prototype.guild_flags = 0;
    
        /**
         * CMsgGuildInfo guild_logo.
         * @member {number|Long} guild_logo
         * @memberof CMsgGuildInfo
         * @instance
         */
        CMsgGuildInfo.prototype.guild_logo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgGuildInfo guild_region.
         * @member {number} guild_region
         * @memberof CMsgGuildInfo
         * @instance
         */
        CMsgGuildInfo.prototype.guild_region = 0;
    
        /**
         * CMsgGuildInfo guild_chat_group_id.
         * @member {number|Long} guild_chat_group_id
         * @memberof CMsgGuildInfo
         * @instance
         */
        CMsgGuildInfo.prototype.guild_chat_group_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgGuildInfo guild_description.
         * @member {string} guild_description
         * @memberof CMsgGuildInfo
         * @instance
         */
        CMsgGuildInfo.prototype.guild_description = "";
    
        /**
         * CMsgGuildInfo default_chat_channel_id.
         * @member {number|Long} default_chat_channel_id
         * @memberof CMsgGuildInfo
         * @instance
         */
        CMsgGuildInfo.prototype.default_chat_channel_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgGuildInfo guild_primary_color.
         * @member {number} guild_primary_color
         * @memberof CMsgGuildInfo
         * @instance
         */
        CMsgGuildInfo.prototype.guild_primary_color = 0;
    
        /**
         * CMsgGuildInfo guild_secondary_color.
         * @member {number} guild_secondary_color
         * @memberof CMsgGuildInfo
         * @instance
         */
        CMsgGuildInfo.prototype.guild_secondary_color = 0;
    
        /**
         * CMsgGuildInfo guild_pattern.
         * @member {number} guild_pattern
         * @memberof CMsgGuildInfo
         * @instance
         */
        CMsgGuildInfo.prototype.guild_pattern = 0;
    
        /**
         * CMsgGuildInfo guild_refresh_time_offset.
         * @member {number} guild_refresh_time_offset
         * @memberof CMsgGuildInfo
         * @instance
         */
        CMsgGuildInfo.prototype.guild_refresh_time_offset = 0;
    
        /**
         * CMsgGuildInfo guild_required_rank_tier.
         * @member {number} guild_required_rank_tier
         * @memberof CMsgGuildInfo
         * @instance
         */
        CMsgGuildInfo.prototype.guild_required_rank_tier = 0;
    
        /**
         * CMsgGuildInfo guild_motd_timestamp.
         * @member {number} guild_motd_timestamp
         * @memberof CMsgGuildInfo
         * @instance
         */
        CMsgGuildInfo.prototype.guild_motd_timestamp = 0;
    
        /**
         * CMsgGuildInfo guild_motd.
         * @member {string} guild_motd
         * @memberof CMsgGuildInfo
         * @instance
         */
        CMsgGuildInfo.prototype.guild_motd = "";
    
        /**
         * Creates a new CMsgGuildInfo instance using the specified properties.
         * @function create
         * @memberof CMsgGuildInfo
         * @static
         * @param {ICMsgGuildInfo=} [properties] Properties to set
         * @returns {CMsgGuildInfo} CMsgGuildInfo instance
         */
        CMsgGuildInfo.create = function create(properties) {
            return new CMsgGuildInfo(properties);
        };
    
        /**
         * Encodes the specified CMsgGuildInfo message. Does not implicitly {@link CMsgGuildInfo.verify|verify} messages.
         * @function encode
         * @memberof CMsgGuildInfo
         * @static
         * @param {ICMsgGuildInfo} message CMsgGuildInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_name != null && Object.hasOwnProperty.call(message, "guild_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.guild_name);
            if (message.guild_tag != null && Object.hasOwnProperty.call(message, "guild_tag"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.guild_tag);
            if (message.created_timestamp != null && Object.hasOwnProperty.call(message, "created_timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.created_timestamp);
            if (message.guild_language != null && Object.hasOwnProperty.call(message, "guild_language"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.guild_language);
            if (message.guild_flags != null && Object.hasOwnProperty.call(message, "guild_flags"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.guild_flags);
            if (message.guild_logo != null && Object.hasOwnProperty.call(message, "guild_logo"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.guild_logo);
            if (message.guild_region != null && Object.hasOwnProperty.call(message, "guild_region"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.guild_region);
            if (message.guild_chat_group_id != null && Object.hasOwnProperty.call(message, "guild_chat_group_id"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.guild_chat_group_id);
            if (message.guild_description != null && Object.hasOwnProperty.call(message, "guild_description"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.guild_description);
            if (message.default_chat_channel_id != null && Object.hasOwnProperty.call(message, "default_chat_channel_id"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.default_chat_channel_id);
            if (message.guild_primary_color != null && Object.hasOwnProperty.call(message, "guild_primary_color"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.guild_primary_color);
            if (message.guild_secondary_color != null && Object.hasOwnProperty.call(message, "guild_secondary_color"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.guild_secondary_color);
            if (message.guild_pattern != null && Object.hasOwnProperty.call(message, "guild_pattern"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.guild_pattern);
            if (message.guild_refresh_time_offset != null && Object.hasOwnProperty.call(message, "guild_refresh_time_offset"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.guild_refresh_time_offset);
            if (message.guild_required_rank_tier != null && Object.hasOwnProperty.call(message, "guild_required_rank_tier"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.guild_required_rank_tier);
            if (message.guild_motd_timestamp != null && Object.hasOwnProperty.call(message, "guild_motd_timestamp"))
                writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.guild_motd_timestamp);
            if (message.guild_motd != null && Object.hasOwnProperty.call(message, "guild_motd"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.guild_motd);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGuildInfo message, length delimited. Does not implicitly {@link CMsgGuildInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGuildInfo
         * @static
         * @param {ICMsgGuildInfo} message CMsgGuildInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGuildInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGuildInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGuildInfo} CMsgGuildInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGuildInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_name = reader.string();
                    break;
                case 2:
                    message.guild_tag = reader.string();
                    break;
                case 3:
                    message.created_timestamp = reader.uint32();
                    break;
                case 4:
                    message.guild_language = reader.uint32();
                    break;
                case 5:
                    message.guild_flags = reader.uint32();
                    break;
                case 7:
                    message.guild_logo = reader.uint64();
                    break;
                case 8:
                    message.guild_region = reader.uint32();
                    break;
                case 9:
                    message.guild_chat_group_id = reader.uint64();
                    break;
                case 10:
                    message.guild_description = reader.string();
                    break;
                case 11:
                    message.default_chat_channel_id = reader.uint64();
                    break;
                case 12:
                    message.guild_primary_color = reader.uint32();
                    break;
                case 13:
                    message.guild_secondary_color = reader.uint32();
                    break;
                case 14:
                    message.guild_pattern = reader.uint32();
                    break;
                case 15:
                    message.guild_refresh_time_offset = reader.uint32();
                    break;
                case 16:
                    message.guild_required_rank_tier = reader.uint32();
                    break;
                case 17:
                    message.guild_motd_timestamp = reader.uint32();
                    break;
                case 18:
                    message.guild_motd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGuildInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGuildInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGuildInfo} CMsgGuildInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGuildInfo message.
         * @function verify
         * @memberof CMsgGuildInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGuildInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_name != null && message.hasOwnProperty("guild_name"))
                if (!$util.isString(message.guild_name))
                    return "guild_name: string expected";
            if (message.guild_tag != null && message.hasOwnProperty("guild_tag"))
                if (!$util.isString(message.guild_tag))
                    return "guild_tag: string expected";
            if (message.created_timestamp != null && message.hasOwnProperty("created_timestamp"))
                if (!$util.isInteger(message.created_timestamp))
                    return "created_timestamp: integer expected";
            if (message.guild_language != null && message.hasOwnProperty("guild_language"))
                if (!$util.isInteger(message.guild_language))
                    return "guild_language: integer expected";
            if (message.guild_flags != null && message.hasOwnProperty("guild_flags"))
                if (!$util.isInteger(message.guild_flags))
                    return "guild_flags: integer expected";
            if (message.guild_logo != null && message.hasOwnProperty("guild_logo"))
                if (!$util.isInteger(message.guild_logo) && !(message.guild_logo && $util.isInteger(message.guild_logo.low) && $util.isInteger(message.guild_logo.high)))
                    return "guild_logo: integer|Long expected";
            if (message.guild_region != null && message.hasOwnProperty("guild_region"))
                if (!$util.isInteger(message.guild_region))
                    return "guild_region: integer expected";
            if (message.guild_chat_group_id != null && message.hasOwnProperty("guild_chat_group_id"))
                if (!$util.isInteger(message.guild_chat_group_id) && !(message.guild_chat_group_id && $util.isInteger(message.guild_chat_group_id.low) && $util.isInteger(message.guild_chat_group_id.high)))
                    return "guild_chat_group_id: integer|Long expected";
            if (message.guild_description != null && message.hasOwnProperty("guild_description"))
                if (!$util.isString(message.guild_description))
                    return "guild_description: string expected";
            if (message.default_chat_channel_id != null && message.hasOwnProperty("default_chat_channel_id"))
                if (!$util.isInteger(message.default_chat_channel_id) && !(message.default_chat_channel_id && $util.isInteger(message.default_chat_channel_id.low) && $util.isInteger(message.default_chat_channel_id.high)))
                    return "default_chat_channel_id: integer|Long expected";
            if (message.guild_primary_color != null && message.hasOwnProperty("guild_primary_color"))
                if (!$util.isInteger(message.guild_primary_color))
                    return "guild_primary_color: integer expected";
            if (message.guild_secondary_color != null && message.hasOwnProperty("guild_secondary_color"))
                if (!$util.isInteger(message.guild_secondary_color))
                    return "guild_secondary_color: integer expected";
            if (message.guild_pattern != null && message.hasOwnProperty("guild_pattern"))
                if (!$util.isInteger(message.guild_pattern))
                    return "guild_pattern: integer expected";
            if (message.guild_refresh_time_offset != null && message.hasOwnProperty("guild_refresh_time_offset"))
                if (!$util.isInteger(message.guild_refresh_time_offset))
                    return "guild_refresh_time_offset: integer expected";
            if (message.guild_required_rank_tier != null && message.hasOwnProperty("guild_required_rank_tier"))
                if (!$util.isInteger(message.guild_required_rank_tier))
                    return "guild_required_rank_tier: integer expected";
            if (message.guild_motd_timestamp != null && message.hasOwnProperty("guild_motd_timestamp"))
                if (!$util.isInteger(message.guild_motd_timestamp))
                    return "guild_motd_timestamp: integer expected";
            if (message.guild_motd != null && message.hasOwnProperty("guild_motd"))
                if (!$util.isString(message.guild_motd))
                    return "guild_motd: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgGuildInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGuildInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGuildInfo} CMsgGuildInfo
         */
        CMsgGuildInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGuildInfo)
                return object;
            var message = new $root.CMsgGuildInfo();
            if (object.guild_name != null)
                message.guild_name = String(object.guild_name);
            if (object.guild_tag != null)
                message.guild_tag = String(object.guild_tag);
            if (object.created_timestamp != null)
                message.created_timestamp = object.created_timestamp >>> 0;
            if (object.guild_language != null)
                message.guild_language = object.guild_language >>> 0;
            if (object.guild_flags != null)
                message.guild_flags = object.guild_flags >>> 0;
            if (object.guild_logo != null)
                if ($util.Long)
                    (message.guild_logo = $util.Long.fromValue(object.guild_logo)).unsigned = true;
                else if (typeof object.guild_logo === "string")
                    message.guild_logo = parseInt(object.guild_logo, 10);
                else if (typeof object.guild_logo === "number")
                    message.guild_logo = object.guild_logo;
                else if (typeof object.guild_logo === "object")
                    message.guild_logo = new $util.LongBits(object.guild_logo.low >>> 0, object.guild_logo.high >>> 0).toNumber(true);
            if (object.guild_region != null)
                message.guild_region = object.guild_region >>> 0;
            if (object.guild_chat_group_id != null)
                if ($util.Long)
                    (message.guild_chat_group_id = $util.Long.fromValue(object.guild_chat_group_id)).unsigned = true;
                else if (typeof object.guild_chat_group_id === "string")
                    message.guild_chat_group_id = parseInt(object.guild_chat_group_id, 10);
                else if (typeof object.guild_chat_group_id === "number")
                    message.guild_chat_group_id = object.guild_chat_group_id;
                else if (typeof object.guild_chat_group_id === "object")
                    message.guild_chat_group_id = new $util.LongBits(object.guild_chat_group_id.low >>> 0, object.guild_chat_group_id.high >>> 0).toNumber(true);
            if (object.guild_description != null)
                message.guild_description = String(object.guild_description);
            if (object.default_chat_channel_id != null)
                if ($util.Long)
                    (message.default_chat_channel_id = $util.Long.fromValue(object.default_chat_channel_id)).unsigned = true;
                else if (typeof object.default_chat_channel_id === "string")
                    message.default_chat_channel_id = parseInt(object.default_chat_channel_id, 10);
                else if (typeof object.default_chat_channel_id === "number")
                    message.default_chat_channel_id = object.default_chat_channel_id;
                else if (typeof object.default_chat_channel_id === "object")
                    message.default_chat_channel_id = new $util.LongBits(object.default_chat_channel_id.low >>> 0, object.default_chat_channel_id.high >>> 0).toNumber(true);
            if (object.guild_primary_color != null)
                message.guild_primary_color = object.guild_primary_color >>> 0;
            if (object.guild_secondary_color != null)
                message.guild_secondary_color = object.guild_secondary_color >>> 0;
            if (object.guild_pattern != null)
                message.guild_pattern = object.guild_pattern >>> 0;
            if (object.guild_refresh_time_offset != null)
                message.guild_refresh_time_offset = object.guild_refresh_time_offset >>> 0;
            if (object.guild_required_rank_tier != null)
                message.guild_required_rank_tier = object.guild_required_rank_tier >>> 0;
            if (object.guild_motd_timestamp != null)
                message.guild_motd_timestamp = object.guild_motd_timestamp >>> 0;
            if (object.guild_motd != null)
                message.guild_motd = String(object.guild_motd);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGuildInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGuildInfo
         * @static
         * @param {CMsgGuildInfo} message CMsgGuildInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGuildInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_name = "";
                object.guild_tag = "";
                object.created_timestamp = 0;
                object.guild_language = 0;
                object.guild_flags = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.guild_logo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.guild_logo = options.longs === String ? "0" : 0;
                object.guild_region = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.guild_chat_group_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.guild_chat_group_id = options.longs === String ? "0" : 0;
                object.guild_description = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.default_chat_channel_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.default_chat_channel_id = options.longs === String ? "0" : 0;
                object.guild_primary_color = 0;
                object.guild_secondary_color = 0;
                object.guild_pattern = 0;
                object.guild_refresh_time_offset = 0;
                object.guild_required_rank_tier = 0;
                object.guild_motd_timestamp = 0;
                object.guild_motd = "";
            }
            if (message.guild_name != null && message.hasOwnProperty("guild_name"))
                object.guild_name = message.guild_name;
            if (message.guild_tag != null && message.hasOwnProperty("guild_tag"))
                object.guild_tag = message.guild_tag;
            if (message.created_timestamp != null && message.hasOwnProperty("created_timestamp"))
                object.created_timestamp = message.created_timestamp;
            if (message.guild_language != null && message.hasOwnProperty("guild_language"))
                object.guild_language = message.guild_language;
            if (message.guild_flags != null && message.hasOwnProperty("guild_flags"))
                object.guild_flags = message.guild_flags;
            if (message.guild_logo != null && message.hasOwnProperty("guild_logo"))
                if (typeof message.guild_logo === "number")
                    object.guild_logo = options.longs === String ? String(message.guild_logo) : message.guild_logo;
                else
                    object.guild_logo = options.longs === String ? $util.Long.prototype.toString.call(message.guild_logo) : options.longs === Number ? new $util.LongBits(message.guild_logo.low >>> 0, message.guild_logo.high >>> 0).toNumber(true) : message.guild_logo;
            if (message.guild_region != null && message.hasOwnProperty("guild_region"))
                object.guild_region = message.guild_region;
            if (message.guild_chat_group_id != null && message.hasOwnProperty("guild_chat_group_id"))
                if (typeof message.guild_chat_group_id === "number")
                    object.guild_chat_group_id = options.longs === String ? String(message.guild_chat_group_id) : message.guild_chat_group_id;
                else
                    object.guild_chat_group_id = options.longs === String ? $util.Long.prototype.toString.call(message.guild_chat_group_id) : options.longs === Number ? new $util.LongBits(message.guild_chat_group_id.low >>> 0, message.guild_chat_group_id.high >>> 0).toNumber(true) : message.guild_chat_group_id;
            if (message.guild_description != null && message.hasOwnProperty("guild_description"))
                object.guild_description = message.guild_description;
            if (message.default_chat_channel_id != null && message.hasOwnProperty("default_chat_channel_id"))
                if (typeof message.default_chat_channel_id === "number")
                    object.default_chat_channel_id = options.longs === String ? String(message.default_chat_channel_id) : message.default_chat_channel_id;
                else
                    object.default_chat_channel_id = options.longs === String ? $util.Long.prototype.toString.call(message.default_chat_channel_id) : options.longs === Number ? new $util.LongBits(message.default_chat_channel_id.low >>> 0, message.default_chat_channel_id.high >>> 0).toNumber(true) : message.default_chat_channel_id;
            if (message.guild_primary_color != null && message.hasOwnProperty("guild_primary_color"))
                object.guild_primary_color = message.guild_primary_color;
            if (message.guild_secondary_color != null && message.hasOwnProperty("guild_secondary_color"))
                object.guild_secondary_color = message.guild_secondary_color;
            if (message.guild_pattern != null && message.hasOwnProperty("guild_pattern"))
                object.guild_pattern = message.guild_pattern;
            if (message.guild_refresh_time_offset != null && message.hasOwnProperty("guild_refresh_time_offset"))
                object.guild_refresh_time_offset = message.guild_refresh_time_offset;
            if (message.guild_required_rank_tier != null && message.hasOwnProperty("guild_required_rank_tier"))
                object.guild_required_rank_tier = message.guild_required_rank_tier;
            if (message.guild_motd_timestamp != null && message.hasOwnProperty("guild_motd_timestamp"))
                object.guild_motd_timestamp = message.guild_motd_timestamp;
            if (message.guild_motd != null && message.hasOwnProperty("guild_motd"))
                object.guild_motd = message.guild_motd;
            return object;
        };
    
        /**
         * Converts this CMsgGuildInfo to JSON.
         * @function toJSON
         * @memberof CMsgGuildInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGuildInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGuildInfo;
    })();
    
    $root.CMsgGuildSummary = (function() {
    
        /**
         * Properties of a CMsgGuildSummary.
         * @exports ICMsgGuildSummary
         * @interface ICMsgGuildSummary
         * @property {ICMsgGuildInfo|null} [guild_info] CMsgGuildSummary guild_info
         * @property {number|null} [member_count] CMsgGuildSummary member_count
         * @property {Array.<CMsgGuildSummary.IEventPoints>|null} [event_points] CMsgGuildSummary event_points
         */
    
        /**
         * Constructs a new CMsgGuildSummary.
         * @exports CMsgGuildSummary
         * @classdesc Represents a CMsgGuildSummary.
         * @implements ICMsgGuildSummary
         * @constructor
         * @param {ICMsgGuildSummary=} [properties] Properties to set
         */
        function CMsgGuildSummary(properties) {
            this.event_points = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGuildSummary guild_info.
         * @member {ICMsgGuildInfo|null|undefined} guild_info
         * @memberof CMsgGuildSummary
         * @instance
         */
        CMsgGuildSummary.prototype.guild_info = null;
    
        /**
         * CMsgGuildSummary member_count.
         * @member {number} member_count
         * @memberof CMsgGuildSummary
         * @instance
         */
        CMsgGuildSummary.prototype.member_count = 0;
    
        /**
         * CMsgGuildSummary event_points.
         * @member {Array.<CMsgGuildSummary.IEventPoints>} event_points
         * @memberof CMsgGuildSummary
         * @instance
         */
        CMsgGuildSummary.prototype.event_points = $util.emptyArray;
    
        /**
         * Creates a new CMsgGuildSummary instance using the specified properties.
         * @function create
         * @memberof CMsgGuildSummary
         * @static
         * @param {ICMsgGuildSummary=} [properties] Properties to set
         * @returns {CMsgGuildSummary} CMsgGuildSummary instance
         */
        CMsgGuildSummary.create = function create(properties) {
            return new CMsgGuildSummary(properties);
        };
    
        /**
         * Encodes the specified CMsgGuildSummary message. Does not implicitly {@link CMsgGuildSummary.verify|verify} messages.
         * @function encode
         * @memberof CMsgGuildSummary
         * @static
         * @param {ICMsgGuildSummary} message CMsgGuildSummary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildSummary.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_info != null && Object.hasOwnProperty.call(message, "guild_info"))
                $root.CMsgGuildInfo.encode(message.guild_info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.member_count != null && Object.hasOwnProperty.call(message, "member_count"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.member_count);
            if (message.event_points != null && message.event_points.length)
                for (var i = 0; i < message.event_points.length; ++i)
                    $root.CMsgGuildSummary.EventPoints.encode(message.event_points[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGuildSummary message, length delimited. Does not implicitly {@link CMsgGuildSummary.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGuildSummary
         * @static
         * @param {ICMsgGuildSummary} message CMsgGuildSummary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildSummary.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGuildSummary message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGuildSummary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGuildSummary} CMsgGuildSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildSummary.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGuildSummary();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_info = $root.CMsgGuildInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.member_count = reader.uint32();
                    break;
                case 3:
                    if (!(message.event_points && message.event_points.length))
                        message.event_points = [];
                    message.event_points.push($root.CMsgGuildSummary.EventPoints.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGuildSummary message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGuildSummary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGuildSummary} CMsgGuildSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildSummary.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGuildSummary message.
         * @function verify
         * @memberof CMsgGuildSummary
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGuildSummary.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_info != null && message.hasOwnProperty("guild_info")) {
                var error = $root.CMsgGuildInfo.verify(message.guild_info);
                if (error)
                    return "guild_info." + error;
            }
            if (message.member_count != null && message.hasOwnProperty("member_count"))
                if (!$util.isInteger(message.member_count))
                    return "member_count: integer expected";
            if (message.event_points != null && message.hasOwnProperty("event_points")) {
                if (!Array.isArray(message.event_points))
                    return "event_points: array expected";
                for (var i = 0; i < message.event_points.length; ++i) {
                    var error = $root.CMsgGuildSummary.EventPoints.verify(message.event_points[i]);
                    if (error)
                        return "event_points." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgGuildSummary message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGuildSummary
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGuildSummary} CMsgGuildSummary
         */
        CMsgGuildSummary.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGuildSummary)
                return object;
            var message = new $root.CMsgGuildSummary();
            if (object.guild_info != null) {
                if (typeof object.guild_info !== "object")
                    throw TypeError(".CMsgGuildSummary.guild_info: object expected");
                message.guild_info = $root.CMsgGuildInfo.fromObject(object.guild_info);
            }
            if (object.member_count != null)
                message.member_count = object.member_count >>> 0;
            if (object.event_points) {
                if (!Array.isArray(object.event_points))
                    throw TypeError(".CMsgGuildSummary.event_points: array expected");
                message.event_points = [];
                for (var i = 0; i < object.event_points.length; ++i) {
                    if (typeof object.event_points[i] !== "object")
                        throw TypeError(".CMsgGuildSummary.event_points: object expected");
                    message.event_points[i] = $root.CMsgGuildSummary.EventPoints.fromObject(object.event_points[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGuildSummary message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGuildSummary
         * @static
         * @param {CMsgGuildSummary} message CMsgGuildSummary
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGuildSummary.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.event_points = [];
            if (options.defaults) {
                object.guild_info = null;
                object.member_count = 0;
            }
            if (message.guild_info != null && message.hasOwnProperty("guild_info"))
                object.guild_info = $root.CMsgGuildInfo.toObject(message.guild_info, options);
            if (message.member_count != null && message.hasOwnProperty("member_count"))
                object.member_count = message.member_count;
            if (message.event_points && message.event_points.length) {
                object.event_points = [];
                for (var j = 0; j < message.event_points.length; ++j)
                    object.event_points[j] = $root.CMsgGuildSummary.EventPoints.toObject(message.event_points[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgGuildSummary to JSON.
         * @function toJSON
         * @memberof CMsgGuildSummary
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGuildSummary.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgGuildSummary.EventPoints = (function() {
    
            /**
             * Properties of an EventPoints.
             * @memberof CMsgGuildSummary
             * @interface IEventPoints
             * @property {number|null} [event_id] EventPoints event_id
             * @property {number|null} [guild_points] EventPoints guild_points
             */
    
            /**
             * Constructs a new EventPoints.
             * @memberof CMsgGuildSummary
             * @classdesc Represents an EventPoints.
             * @implements IEventPoints
             * @constructor
             * @param {CMsgGuildSummary.IEventPoints=} [properties] Properties to set
             */
            function EventPoints(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * EventPoints event_id.
             * @member {number} event_id
             * @memberof CMsgGuildSummary.EventPoints
             * @instance
             */
            EventPoints.prototype.event_id = 0;
    
            /**
             * EventPoints guild_points.
             * @member {number} guild_points
             * @memberof CMsgGuildSummary.EventPoints
             * @instance
             */
            EventPoints.prototype.guild_points = 0;
    
            /**
             * Creates a new EventPoints instance using the specified properties.
             * @function create
             * @memberof CMsgGuildSummary.EventPoints
             * @static
             * @param {CMsgGuildSummary.IEventPoints=} [properties] Properties to set
             * @returns {CMsgGuildSummary.EventPoints} EventPoints instance
             */
            EventPoints.create = function create(properties) {
                return new EventPoints(properties);
            };
    
            /**
             * Encodes the specified EventPoints message. Does not implicitly {@link CMsgGuildSummary.EventPoints.verify|verify} messages.
             * @function encode
             * @memberof CMsgGuildSummary.EventPoints
             * @static
             * @param {CMsgGuildSummary.IEventPoints} message EventPoints message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventPoints.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.event_id != null && Object.hasOwnProperty.call(message, "event_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.event_id);
                if (message.guild_points != null && Object.hasOwnProperty.call(message, "guild_points"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.guild_points);
                return writer;
            };
    
            /**
             * Encodes the specified EventPoints message, length delimited. Does not implicitly {@link CMsgGuildSummary.EventPoints.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgGuildSummary.EventPoints
             * @static
             * @param {CMsgGuildSummary.IEventPoints} message EventPoints message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventPoints.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an EventPoints message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgGuildSummary.EventPoints
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgGuildSummary.EventPoints} EventPoints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventPoints.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGuildSummary.EventPoints();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.event_id = reader.uint32();
                        break;
                    case 2:
                        message.guild_points = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an EventPoints message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgGuildSummary.EventPoints
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgGuildSummary.EventPoints} EventPoints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventPoints.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an EventPoints message.
             * @function verify
             * @memberof CMsgGuildSummary.EventPoints
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EventPoints.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.event_id != null && message.hasOwnProperty("event_id"))
                    if (!$util.isInteger(message.event_id))
                        return "event_id: integer expected";
                if (message.guild_points != null && message.hasOwnProperty("guild_points"))
                    if (!$util.isInteger(message.guild_points))
                        return "guild_points: integer expected";
                return null;
            };
    
            /**
             * Creates an EventPoints message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgGuildSummary.EventPoints
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgGuildSummary.EventPoints} EventPoints
             */
            EventPoints.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgGuildSummary.EventPoints)
                    return object;
                var message = new $root.CMsgGuildSummary.EventPoints();
                if (object.event_id != null)
                    message.event_id = object.event_id >>> 0;
                if (object.guild_points != null)
                    message.guild_points = object.guild_points >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from an EventPoints message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgGuildSummary.EventPoints
             * @static
             * @param {CMsgGuildSummary.EventPoints} message EventPoints
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EventPoints.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.event_id = 0;
                    object.guild_points = 0;
                }
                if (message.event_id != null && message.hasOwnProperty("event_id"))
                    object.event_id = message.event_id;
                if (message.guild_points != null && message.hasOwnProperty("guild_points"))
                    object.guild_points = message.guild_points;
                return object;
            };
    
            /**
             * Converts this EventPoints to JSON.
             * @function toJSON
             * @memberof CMsgGuildSummary.EventPoints
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EventPoints.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return EventPoints;
        })();
    
        return CMsgGuildSummary;
    })();
    
    $root.CMsgGuildRole = (function() {
    
        /**
         * Properties of a CMsgGuildRole.
         * @exports ICMsgGuildRole
         * @interface ICMsgGuildRole
         * @property {number|null} [role_id] CMsgGuildRole role_id
         * @property {string|null} [role_name] CMsgGuildRole role_name
         * @property {number|null} [role_flags] CMsgGuildRole role_flags
         * @property {number|null} [role_order] CMsgGuildRole role_order
         */
    
        /**
         * Constructs a new CMsgGuildRole.
         * @exports CMsgGuildRole
         * @classdesc Represents a CMsgGuildRole.
         * @implements ICMsgGuildRole
         * @constructor
         * @param {ICMsgGuildRole=} [properties] Properties to set
         */
        function CMsgGuildRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGuildRole role_id.
         * @member {number} role_id
         * @memberof CMsgGuildRole
         * @instance
         */
        CMsgGuildRole.prototype.role_id = 0;
    
        /**
         * CMsgGuildRole role_name.
         * @member {string} role_name
         * @memberof CMsgGuildRole
         * @instance
         */
        CMsgGuildRole.prototype.role_name = "";
    
        /**
         * CMsgGuildRole role_flags.
         * @member {number} role_flags
         * @memberof CMsgGuildRole
         * @instance
         */
        CMsgGuildRole.prototype.role_flags = 0;
    
        /**
         * CMsgGuildRole role_order.
         * @member {number} role_order
         * @memberof CMsgGuildRole
         * @instance
         */
        CMsgGuildRole.prototype.role_order = 0;
    
        /**
         * Creates a new CMsgGuildRole instance using the specified properties.
         * @function create
         * @memberof CMsgGuildRole
         * @static
         * @param {ICMsgGuildRole=} [properties] Properties to set
         * @returns {CMsgGuildRole} CMsgGuildRole instance
         */
        CMsgGuildRole.create = function create(properties) {
            return new CMsgGuildRole(properties);
        };
    
        /**
         * Encodes the specified CMsgGuildRole message. Does not implicitly {@link CMsgGuildRole.verify|verify} messages.
         * @function encode
         * @memberof CMsgGuildRole
         * @static
         * @param {ICMsgGuildRole} message CMsgGuildRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.role_id != null && Object.hasOwnProperty.call(message, "role_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.role_id);
            if (message.role_name != null && Object.hasOwnProperty.call(message, "role_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.role_name);
            if (message.role_flags != null && Object.hasOwnProperty.call(message, "role_flags"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.role_flags);
            if (message.role_order != null && Object.hasOwnProperty.call(message, "role_order"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.role_order);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGuildRole message, length delimited. Does not implicitly {@link CMsgGuildRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGuildRole
         * @static
         * @param {ICMsgGuildRole} message CMsgGuildRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGuildRole message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGuildRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGuildRole} CMsgGuildRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGuildRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.role_id = reader.uint32();
                    break;
                case 2:
                    message.role_name = reader.string();
                    break;
                case 3:
                    message.role_flags = reader.uint32();
                    break;
                case 4:
                    message.role_order = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGuildRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGuildRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGuildRole} CMsgGuildRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGuildRole message.
         * @function verify
         * @memberof CMsgGuildRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGuildRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.role_id != null && message.hasOwnProperty("role_id"))
                if (!$util.isInteger(message.role_id))
                    return "role_id: integer expected";
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                if (!$util.isString(message.role_name))
                    return "role_name: string expected";
            if (message.role_flags != null && message.hasOwnProperty("role_flags"))
                if (!$util.isInteger(message.role_flags))
                    return "role_flags: integer expected";
            if (message.role_order != null && message.hasOwnProperty("role_order"))
                if (!$util.isInteger(message.role_order))
                    return "role_order: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgGuildRole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGuildRole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGuildRole} CMsgGuildRole
         */
        CMsgGuildRole.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGuildRole)
                return object;
            var message = new $root.CMsgGuildRole();
            if (object.role_id != null)
                message.role_id = object.role_id >>> 0;
            if (object.role_name != null)
                message.role_name = String(object.role_name);
            if (object.role_flags != null)
                message.role_flags = object.role_flags >>> 0;
            if (object.role_order != null)
                message.role_order = object.role_order >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGuildRole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGuildRole
         * @static
         * @param {CMsgGuildRole} message CMsgGuildRole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGuildRole.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.role_id = 0;
                object.role_name = "";
                object.role_flags = 0;
                object.role_order = 0;
            }
            if (message.role_id != null && message.hasOwnProperty("role_id"))
                object.role_id = message.role_id;
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                object.role_name = message.role_name;
            if (message.role_flags != null && message.hasOwnProperty("role_flags"))
                object.role_flags = message.role_flags;
            if (message.role_order != null && message.hasOwnProperty("role_order"))
                object.role_order = message.role_order;
            return object;
        };
    
        /**
         * Converts this CMsgGuildRole to JSON.
         * @function toJSON
         * @memberof CMsgGuildRole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGuildRole.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGuildRole;
    })();
    
    $root.CMsgGuildMember = (function() {
    
        /**
         * Properties of a CMsgGuildMember.
         * @exports ICMsgGuildMember
         * @interface ICMsgGuildMember
         * @property {number|null} [member_account_id] CMsgGuildMember member_account_id
         * @property {number|null} [member_role_id] CMsgGuildMember member_role_id
         * @property {number|null} [member_joined_timestamp] CMsgGuildMember member_joined_timestamp
         * @property {number|null} [member_last_active_timestamp] CMsgGuildMember member_last_active_timestamp
         */
    
        /**
         * Constructs a new CMsgGuildMember.
         * @exports CMsgGuildMember
         * @classdesc Represents a CMsgGuildMember.
         * @implements ICMsgGuildMember
         * @constructor
         * @param {ICMsgGuildMember=} [properties] Properties to set
         */
        function CMsgGuildMember(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGuildMember member_account_id.
         * @member {number} member_account_id
         * @memberof CMsgGuildMember
         * @instance
         */
        CMsgGuildMember.prototype.member_account_id = 0;
    
        /**
         * CMsgGuildMember member_role_id.
         * @member {number} member_role_id
         * @memberof CMsgGuildMember
         * @instance
         */
        CMsgGuildMember.prototype.member_role_id = 0;
    
        /**
         * CMsgGuildMember member_joined_timestamp.
         * @member {number} member_joined_timestamp
         * @memberof CMsgGuildMember
         * @instance
         */
        CMsgGuildMember.prototype.member_joined_timestamp = 0;
    
        /**
         * CMsgGuildMember member_last_active_timestamp.
         * @member {number} member_last_active_timestamp
         * @memberof CMsgGuildMember
         * @instance
         */
        CMsgGuildMember.prototype.member_last_active_timestamp = 0;
    
        /**
         * Creates a new CMsgGuildMember instance using the specified properties.
         * @function create
         * @memberof CMsgGuildMember
         * @static
         * @param {ICMsgGuildMember=} [properties] Properties to set
         * @returns {CMsgGuildMember} CMsgGuildMember instance
         */
        CMsgGuildMember.create = function create(properties) {
            return new CMsgGuildMember(properties);
        };
    
        /**
         * Encodes the specified CMsgGuildMember message. Does not implicitly {@link CMsgGuildMember.verify|verify} messages.
         * @function encode
         * @memberof CMsgGuildMember
         * @static
         * @param {ICMsgGuildMember} message CMsgGuildMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildMember.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.member_account_id != null && Object.hasOwnProperty.call(message, "member_account_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.member_account_id);
            if (message.member_role_id != null && Object.hasOwnProperty.call(message, "member_role_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.member_role_id);
            if (message.member_joined_timestamp != null && Object.hasOwnProperty.call(message, "member_joined_timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.member_joined_timestamp);
            if (message.member_last_active_timestamp != null && Object.hasOwnProperty.call(message, "member_last_active_timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.member_last_active_timestamp);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGuildMember message, length delimited. Does not implicitly {@link CMsgGuildMember.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGuildMember
         * @static
         * @param {ICMsgGuildMember} message CMsgGuildMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildMember.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGuildMember message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGuildMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGuildMember} CMsgGuildMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildMember.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGuildMember();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.member_account_id = reader.uint32();
                    break;
                case 2:
                    message.member_role_id = reader.uint32();
                    break;
                case 3:
                    message.member_joined_timestamp = reader.uint32();
                    break;
                case 4:
                    message.member_last_active_timestamp = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGuildMember message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGuildMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGuildMember} CMsgGuildMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildMember.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGuildMember message.
         * @function verify
         * @memberof CMsgGuildMember
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGuildMember.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.member_account_id != null && message.hasOwnProperty("member_account_id"))
                if (!$util.isInteger(message.member_account_id))
                    return "member_account_id: integer expected";
            if (message.member_role_id != null && message.hasOwnProperty("member_role_id"))
                if (!$util.isInteger(message.member_role_id))
                    return "member_role_id: integer expected";
            if (message.member_joined_timestamp != null && message.hasOwnProperty("member_joined_timestamp"))
                if (!$util.isInteger(message.member_joined_timestamp))
                    return "member_joined_timestamp: integer expected";
            if (message.member_last_active_timestamp != null && message.hasOwnProperty("member_last_active_timestamp"))
                if (!$util.isInteger(message.member_last_active_timestamp))
                    return "member_last_active_timestamp: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgGuildMember message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGuildMember
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGuildMember} CMsgGuildMember
         */
        CMsgGuildMember.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGuildMember)
                return object;
            var message = new $root.CMsgGuildMember();
            if (object.member_account_id != null)
                message.member_account_id = object.member_account_id >>> 0;
            if (object.member_role_id != null)
                message.member_role_id = object.member_role_id >>> 0;
            if (object.member_joined_timestamp != null)
                message.member_joined_timestamp = object.member_joined_timestamp >>> 0;
            if (object.member_last_active_timestamp != null)
                message.member_last_active_timestamp = object.member_last_active_timestamp >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGuildMember message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGuildMember
         * @static
         * @param {CMsgGuildMember} message CMsgGuildMember
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGuildMember.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.member_account_id = 0;
                object.member_role_id = 0;
                object.member_joined_timestamp = 0;
                object.member_last_active_timestamp = 0;
            }
            if (message.member_account_id != null && message.hasOwnProperty("member_account_id"))
                object.member_account_id = message.member_account_id;
            if (message.member_role_id != null && message.hasOwnProperty("member_role_id"))
                object.member_role_id = message.member_role_id;
            if (message.member_joined_timestamp != null && message.hasOwnProperty("member_joined_timestamp"))
                object.member_joined_timestamp = message.member_joined_timestamp;
            if (message.member_last_active_timestamp != null && message.hasOwnProperty("member_last_active_timestamp"))
                object.member_last_active_timestamp = message.member_last_active_timestamp;
            return object;
        };
    
        /**
         * Converts this CMsgGuildMember to JSON.
         * @function toJSON
         * @memberof CMsgGuildMember
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGuildMember.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGuildMember;
    })();
    
    $root.CMsgGuildInvite = (function() {
    
        /**
         * Properties of a CMsgGuildInvite.
         * @exports ICMsgGuildInvite
         * @interface ICMsgGuildInvite
         * @property {number|null} [requester_account_id] CMsgGuildInvite requester_account_id
         * @property {number|null} [target_account_id] CMsgGuildInvite target_account_id
         * @property {number|null} [timestamp_sent] CMsgGuildInvite timestamp_sent
         */
    
        /**
         * Constructs a new CMsgGuildInvite.
         * @exports CMsgGuildInvite
         * @classdesc Represents a CMsgGuildInvite.
         * @implements ICMsgGuildInvite
         * @constructor
         * @param {ICMsgGuildInvite=} [properties] Properties to set
         */
        function CMsgGuildInvite(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGuildInvite requester_account_id.
         * @member {number} requester_account_id
         * @memberof CMsgGuildInvite
         * @instance
         */
        CMsgGuildInvite.prototype.requester_account_id = 0;
    
        /**
         * CMsgGuildInvite target_account_id.
         * @member {number} target_account_id
         * @memberof CMsgGuildInvite
         * @instance
         */
        CMsgGuildInvite.prototype.target_account_id = 0;
    
        /**
         * CMsgGuildInvite timestamp_sent.
         * @member {number} timestamp_sent
         * @memberof CMsgGuildInvite
         * @instance
         */
        CMsgGuildInvite.prototype.timestamp_sent = 0;
    
        /**
         * Creates a new CMsgGuildInvite instance using the specified properties.
         * @function create
         * @memberof CMsgGuildInvite
         * @static
         * @param {ICMsgGuildInvite=} [properties] Properties to set
         * @returns {CMsgGuildInvite} CMsgGuildInvite instance
         */
        CMsgGuildInvite.create = function create(properties) {
            return new CMsgGuildInvite(properties);
        };
    
        /**
         * Encodes the specified CMsgGuildInvite message. Does not implicitly {@link CMsgGuildInvite.verify|verify} messages.
         * @function encode
         * @memberof CMsgGuildInvite
         * @static
         * @param {ICMsgGuildInvite} message CMsgGuildInvite message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildInvite.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.requester_account_id != null && Object.hasOwnProperty.call(message, "requester_account_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requester_account_id);
            if (message.target_account_id != null && Object.hasOwnProperty.call(message, "target_account_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.target_account_id);
            if (message.timestamp_sent != null && Object.hasOwnProperty.call(message, "timestamp_sent"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.timestamp_sent);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGuildInvite message, length delimited. Does not implicitly {@link CMsgGuildInvite.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGuildInvite
         * @static
         * @param {ICMsgGuildInvite} message CMsgGuildInvite message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildInvite.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGuildInvite message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGuildInvite
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGuildInvite} CMsgGuildInvite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildInvite.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGuildInvite();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requester_account_id = reader.uint32();
                    break;
                case 2:
                    message.target_account_id = reader.uint32();
                    break;
                case 3:
                    message.timestamp_sent = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGuildInvite message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGuildInvite
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGuildInvite} CMsgGuildInvite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildInvite.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGuildInvite message.
         * @function verify
         * @memberof CMsgGuildInvite
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGuildInvite.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.requester_account_id != null && message.hasOwnProperty("requester_account_id"))
                if (!$util.isInteger(message.requester_account_id))
                    return "requester_account_id: integer expected";
            if (message.target_account_id != null && message.hasOwnProperty("target_account_id"))
                if (!$util.isInteger(message.target_account_id))
                    return "target_account_id: integer expected";
            if (message.timestamp_sent != null && message.hasOwnProperty("timestamp_sent"))
                if (!$util.isInteger(message.timestamp_sent))
                    return "timestamp_sent: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgGuildInvite message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGuildInvite
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGuildInvite} CMsgGuildInvite
         */
        CMsgGuildInvite.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGuildInvite)
                return object;
            var message = new $root.CMsgGuildInvite();
            if (object.requester_account_id != null)
                message.requester_account_id = object.requester_account_id >>> 0;
            if (object.target_account_id != null)
                message.target_account_id = object.target_account_id >>> 0;
            if (object.timestamp_sent != null)
                message.timestamp_sent = object.timestamp_sent >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGuildInvite message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGuildInvite
         * @static
         * @param {CMsgGuildInvite} message CMsgGuildInvite
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGuildInvite.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.requester_account_id = 0;
                object.target_account_id = 0;
                object.timestamp_sent = 0;
            }
            if (message.requester_account_id != null && message.hasOwnProperty("requester_account_id"))
                object.requester_account_id = message.requester_account_id;
            if (message.target_account_id != null && message.hasOwnProperty("target_account_id"))
                object.target_account_id = message.target_account_id;
            if (message.timestamp_sent != null && message.hasOwnProperty("timestamp_sent"))
                object.timestamp_sent = message.timestamp_sent;
            return object;
        };
    
        /**
         * Converts this CMsgGuildInvite to JSON.
         * @function toJSON
         * @memberof CMsgGuildInvite
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGuildInvite.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGuildInvite;
    })();
    
    $root.CMsgGuildData = (function() {
    
        /**
         * Properties of a CMsgGuildData.
         * @exports ICMsgGuildData
         * @interface ICMsgGuildData
         * @property {number|null} [guild_id] CMsgGuildData guild_id
         * @property {ICMsgGuildInfo|null} [guild_info] CMsgGuildData guild_info
         * @property {Array.<ICMsgGuildRole>|null} [guild_roles] CMsgGuildData guild_roles
         * @property {Array.<ICMsgGuildMember>|null} [guild_members] CMsgGuildData guild_members
         * @property {Array.<ICMsgGuildInvite>|null} [guild_invites] CMsgGuildData guild_invites
         */
    
        /**
         * Constructs a new CMsgGuildData.
         * @exports CMsgGuildData
         * @classdesc Represents a CMsgGuildData.
         * @implements ICMsgGuildData
         * @constructor
         * @param {ICMsgGuildData=} [properties] Properties to set
         */
        function CMsgGuildData(properties) {
            this.guild_roles = [];
            this.guild_members = [];
            this.guild_invites = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGuildData guild_id.
         * @member {number} guild_id
         * @memberof CMsgGuildData
         * @instance
         */
        CMsgGuildData.prototype.guild_id = 0;
    
        /**
         * CMsgGuildData guild_info.
         * @member {ICMsgGuildInfo|null|undefined} guild_info
         * @memberof CMsgGuildData
         * @instance
         */
        CMsgGuildData.prototype.guild_info = null;
    
        /**
         * CMsgGuildData guild_roles.
         * @member {Array.<ICMsgGuildRole>} guild_roles
         * @memberof CMsgGuildData
         * @instance
         */
        CMsgGuildData.prototype.guild_roles = $util.emptyArray;
    
        /**
         * CMsgGuildData guild_members.
         * @member {Array.<ICMsgGuildMember>} guild_members
         * @memberof CMsgGuildData
         * @instance
         */
        CMsgGuildData.prototype.guild_members = $util.emptyArray;
    
        /**
         * CMsgGuildData guild_invites.
         * @member {Array.<ICMsgGuildInvite>} guild_invites
         * @memberof CMsgGuildData
         * @instance
         */
        CMsgGuildData.prototype.guild_invites = $util.emptyArray;
    
        /**
         * Creates a new CMsgGuildData instance using the specified properties.
         * @function create
         * @memberof CMsgGuildData
         * @static
         * @param {ICMsgGuildData=} [properties] Properties to set
         * @returns {CMsgGuildData} CMsgGuildData instance
         */
        CMsgGuildData.create = function create(properties) {
            return new CMsgGuildData(properties);
        };
    
        /**
         * Encodes the specified CMsgGuildData message. Does not implicitly {@link CMsgGuildData.verify|verify} messages.
         * @function encode
         * @memberof CMsgGuildData
         * @static
         * @param {ICMsgGuildData} message CMsgGuildData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.guild_info != null && Object.hasOwnProperty.call(message, "guild_info"))
                $root.CMsgGuildInfo.encode(message.guild_info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.guild_roles != null && message.guild_roles.length)
                for (var i = 0; i < message.guild_roles.length; ++i)
                    $root.CMsgGuildRole.encode(message.guild_roles[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.guild_members != null && message.guild_members.length)
                for (var i = 0; i < message.guild_members.length; ++i)
                    $root.CMsgGuildMember.encode(message.guild_members[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.guild_invites != null && message.guild_invites.length)
                for (var i = 0; i < message.guild_invites.length; ++i)
                    $root.CMsgGuildInvite.encode(message.guild_invites[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGuildData message, length delimited. Does not implicitly {@link CMsgGuildData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGuildData
         * @static
         * @param {ICMsgGuildData} message CMsgGuildData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGuildData message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGuildData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGuildData} CMsgGuildData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGuildData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.guild_info = $root.CMsgGuildInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.guild_roles && message.guild_roles.length))
                        message.guild_roles = [];
                    message.guild_roles.push($root.CMsgGuildRole.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.guild_members && message.guild_members.length))
                        message.guild_members = [];
                    message.guild_members.push($root.CMsgGuildMember.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.guild_invites && message.guild_invites.length))
                        message.guild_invites = [];
                    message.guild_invites.push($root.CMsgGuildInvite.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGuildData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGuildData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGuildData} CMsgGuildData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGuildData message.
         * @function verify
         * @memberof CMsgGuildData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGuildData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.guild_info != null && message.hasOwnProperty("guild_info")) {
                var error = $root.CMsgGuildInfo.verify(message.guild_info);
                if (error)
                    return "guild_info." + error;
            }
            if (message.guild_roles != null && message.hasOwnProperty("guild_roles")) {
                if (!Array.isArray(message.guild_roles))
                    return "guild_roles: array expected";
                for (var i = 0; i < message.guild_roles.length; ++i) {
                    var error = $root.CMsgGuildRole.verify(message.guild_roles[i]);
                    if (error)
                        return "guild_roles." + error;
                }
            }
            if (message.guild_members != null && message.hasOwnProperty("guild_members")) {
                if (!Array.isArray(message.guild_members))
                    return "guild_members: array expected";
                for (var i = 0; i < message.guild_members.length; ++i) {
                    var error = $root.CMsgGuildMember.verify(message.guild_members[i]);
                    if (error)
                        return "guild_members." + error;
                }
            }
            if (message.guild_invites != null && message.hasOwnProperty("guild_invites")) {
                if (!Array.isArray(message.guild_invites))
                    return "guild_invites: array expected";
                for (var i = 0; i < message.guild_invites.length; ++i) {
                    var error = $root.CMsgGuildInvite.verify(message.guild_invites[i]);
                    if (error)
                        return "guild_invites." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgGuildData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGuildData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGuildData} CMsgGuildData
         */
        CMsgGuildData.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGuildData)
                return object;
            var message = new $root.CMsgGuildData();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            if (object.guild_info != null) {
                if (typeof object.guild_info !== "object")
                    throw TypeError(".CMsgGuildData.guild_info: object expected");
                message.guild_info = $root.CMsgGuildInfo.fromObject(object.guild_info);
            }
            if (object.guild_roles) {
                if (!Array.isArray(object.guild_roles))
                    throw TypeError(".CMsgGuildData.guild_roles: array expected");
                message.guild_roles = [];
                for (var i = 0; i < object.guild_roles.length; ++i) {
                    if (typeof object.guild_roles[i] !== "object")
                        throw TypeError(".CMsgGuildData.guild_roles: object expected");
                    message.guild_roles[i] = $root.CMsgGuildRole.fromObject(object.guild_roles[i]);
                }
            }
            if (object.guild_members) {
                if (!Array.isArray(object.guild_members))
                    throw TypeError(".CMsgGuildData.guild_members: array expected");
                message.guild_members = [];
                for (var i = 0; i < object.guild_members.length; ++i) {
                    if (typeof object.guild_members[i] !== "object")
                        throw TypeError(".CMsgGuildData.guild_members: object expected");
                    message.guild_members[i] = $root.CMsgGuildMember.fromObject(object.guild_members[i]);
                }
            }
            if (object.guild_invites) {
                if (!Array.isArray(object.guild_invites))
                    throw TypeError(".CMsgGuildData.guild_invites: array expected");
                message.guild_invites = [];
                for (var i = 0; i < object.guild_invites.length; ++i) {
                    if (typeof object.guild_invites[i] !== "object")
                        throw TypeError(".CMsgGuildData.guild_invites: object expected");
                    message.guild_invites[i] = $root.CMsgGuildInvite.fromObject(object.guild_invites[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGuildData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGuildData
         * @static
         * @param {CMsgGuildData} message CMsgGuildData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGuildData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.guild_roles = [];
                object.guild_members = [];
                object.guild_invites = [];
            }
            if (options.defaults) {
                object.guild_id = 0;
                object.guild_info = null;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.guild_info != null && message.hasOwnProperty("guild_info"))
                object.guild_info = $root.CMsgGuildInfo.toObject(message.guild_info, options);
            if (message.guild_roles && message.guild_roles.length) {
                object.guild_roles = [];
                for (var j = 0; j < message.guild_roles.length; ++j)
                    object.guild_roles[j] = $root.CMsgGuildRole.toObject(message.guild_roles[j], options);
            }
            if (message.guild_members && message.guild_members.length) {
                object.guild_members = [];
                for (var j = 0; j < message.guild_members.length; ++j)
                    object.guild_members[j] = $root.CMsgGuildMember.toObject(message.guild_members[j], options);
            }
            if (message.guild_invites && message.guild_invites.length) {
                object.guild_invites = [];
                for (var j = 0; j < message.guild_invites.length; ++j)
                    object.guild_invites[j] = $root.CMsgGuildInvite.toObject(message.guild_invites[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgGuildData to JSON.
         * @function toJSON
         * @memberof CMsgGuildData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGuildData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGuildData;
    })();
    
    $root.CMsgAccountGuildInvite = (function() {
    
        /**
         * Properties of a CMsgAccountGuildInvite.
         * @exports ICMsgAccountGuildInvite
         * @interface ICMsgAccountGuildInvite
         * @property {number|null} [guild_id] CMsgAccountGuildInvite guild_id
         * @property {number|null} [requester_account_id] CMsgAccountGuildInvite requester_account_id
         * @property {number|null} [timestamp_sent] CMsgAccountGuildInvite timestamp_sent
         */
    
        /**
         * Constructs a new CMsgAccountGuildInvite.
         * @exports CMsgAccountGuildInvite
         * @classdesc Represents a CMsgAccountGuildInvite.
         * @implements ICMsgAccountGuildInvite
         * @constructor
         * @param {ICMsgAccountGuildInvite=} [properties] Properties to set
         */
        function CMsgAccountGuildInvite(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgAccountGuildInvite guild_id.
         * @member {number} guild_id
         * @memberof CMsgAccountGuildInvite
         * @instance
         */
        CMsgAccountGuildInvite.prototype.guild_id = 0;
    
        /**
         * CMsgAccountGuildInvite requester_account_id.
         * @member {number} requester_account_id
         * @memberof CMsgAccountGuildInvite
         * @instance
         */
        CMsgAccountGuildInvite.prototype.requester_account_id = 0;
    
        /**
         * CMsgAccountGuildInvite timestamp_sent.
         * @member {number} timestamp_sent
         * @memberof CMsgAccountGuildInvite
         * @instance
         */
        CMsgAccountGuildInvite.prototype.timestamp_sent = 0;
    
        /**
         * Creates a new CMsgAccountGuildInvite instance using the specified properties.
         * @function create
         * @memberof CMsgAccountGuildInvite
         * @static
         * @param {ICMsgAccountGuildInvite=} [properties] Properties to set
         * @returns {CMsgAccountGuildInvite} CMsgAccountGuildInvite instance
         */
        CMsgAccountGuildInvite.create = function create(properties) {
            return new CMsgAccountGuildInvite(properties);
        };
    
        /**
         * Encodes the specified CMsgAccountGuildInvite message. Does not implicitly {@link CMsgAccountGuildInvite.verify|verify} messages.
         * @function encode
         * @memberof CMsgAccountGuildInvite
         * @static
         * @param {ICMsgAccountGuildInvite} message CMsgAccountGuildInvite message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAccountGuildInvite.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.requester_account_id != null && Object.hasOwnProperty.call(message, "requester_account_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.requester_account_id);
            if (message.timestamp_sent != null && Object.hasOwnProperty.call(message, "timestamp_sent"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.timestamp_sent);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgAccountGuildInvite message, length delimited. Does not implicitly {@link CMsgAccountGuildInvite.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgAccountGuildInvite
         * @static
         * @param {ICMsgAccountGuildInvite} message CMsgAccountGuildInvite message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAccountGuildInvite.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgAccountGuildInvite message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgAccountGuildInvite
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgAccountGuildInvite} CMsgAccountGuildInvite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAccountGuildInvite.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgAccountGuildInvite();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.requester_account_id = reader.uint32();
                    break;
                case 3:
                    message.timestamp_sent = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgAccountGuildInvite message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgAccountGuildInvite
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgAccountGuildInvite} CMsgAccountGuildInvite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAccountGuildInvite.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgAccountGuildInvite message.
         * @function verify
         * @memberof CMsgAccountGuildInvite
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgAccountGuildInvite.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.requester_account_id != null && message.hasOwnProperty("requester_account_id"))
                if (!$util.isInteger(message.requester_account_id))
                    return "requester_account_id: integer expected";
            if (message.timestamp_sent != null && message.hasOwnProperty("timestamp_sent"))
                if (!$util.isInteger(message.timestamp_sent))
                    return "timestamp_sent: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgAccountGuildInvite message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgAccountGuildInvite
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgAccountGuildInvite} CMsgAccountGuildInvite
         */
        CMsgAccountGuildInvite.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgAccountGuildInvite)
                return object;
            var message = new $root.CMsgAccountGuildInvite();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            if (object.requester_account_id != null)
                message.requester_account_id = object.requester_account_id >>> 0;
            if (object.timestamp_sent != null)
                message.timestamp_sent = object.timestamp_sent >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgAccountGuildInvite message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgAccountGuildInvite
         * @static
         * @param {CMsgAccountGuildInvite} message CMsgAccountGuildInvite
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgAccountGuildInvite.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.requester_account_id = 0;
                object.timestamp_sent = 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.requester_account_id != null && message.hasOwnProperty("requester_account_id"))
                object.requester_account_id = message.requester_account_id;
            if (message.timestamp_sent != null && message.hasOwnProperty("timestamp_sent"))
                object.timestamp_sent = message.timestamp_sent;
            return object;
        };
    
        /**
         * Converts this CMsgAccountGuildInvite to JSON.
         * @function toJSON
         * @memberof CMsgAccountGuildInvite
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgAccountGuildInvite.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgAccountGuildInvite;
    })();
    
    $root.CMsgAccountGuildMemberships = (function() {
    
        /**
         * Properties of a CMsgAccountGuildMemberships.
         * @exports ICMsgAccountGuildMemberships
         * @interface ICMsgAccountGuildMemberships
         * @property {Array.<number>|null} [guild_ids] CMsgAccountGuildMemberships guild_ids
         * @property {Array.<ICMsgAccountGuildInvite>|null} [guild_invites] CMsgAccountGuildMemberships guild_invites
         */
    
        /**
         * Constructs a new CMsgAccountGuildMemberships.
         * @exports CMsgAccountGuildMemberships
         * @classdesc Represents a CMsgAccountGuildMemberships.
         * @implements ICMsgAccountGuildMemberships
         * @constructor
         * @param {ICMsgAccountGuildMemberships=} [properties] Properties to set
         */
        function CMsgAccountGuildMemberships(properties) {
            this.guild_ids = [];
            this.guild_invites = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgAccountGuildMemberships guild_ids.
         * @member {Array.<number>} guild_ids
         * @memberof CMsgAccountGuildMemberships
         * @instance
         */
        CMsgAccountGuildMemberships.prototype.guild_ids = $util.emptyArray;
    
        /**
         * CMsgAccountGuildMemberships guild_invites.
         * @member {Array.<ICMsgAccountGuildInvite>} guild_invites
         * @memberof CMsgAccountGuildMemberships
         * @instance
         */
        CMsgAccountGuildMemberships.prototype.guild_invites = $util.emptyArray;
    
        /**
         * Creates a new CMsgAccountGuildMemberships instance using the specified properties.
         * @function create
         * @memberof CMsgAccountGuildMemberships
         * @static
         * @param {ICMsgAccountGuildMemberships=} [properties] Properties to set
         * @returns {CMsgAccountGuildMemberships} CMsgAccountGuildMemberships instance
         */
        CMsgAccountGuildMemberships.create = function create(properties) {
            return new CMsgAccountGuildMemberships(properties);
        };
    
        /**
         * Encodes the specified CMsgAccountGuildMemberships message. Does not implicitly {@link CMsgAccountGuildMemberships.verify|verify} messages.
         * @function encode
         * @memberof CMsgAccountGuildMemberships
         * @static
         * @param {ICMsgAccountGuildMemberships} message CMsgAccountGuildMemberships message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAccountGuildMemberships.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_ids != null && message.guild_ids.length)
                for (var i = 0; i < message.guild_ids.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_ids[i]);
            if (message.guild_invites != null && message.guild_invites.length)
                for (var i = 0; i < message.guild_invites.length; ++i)
                    $root.CMsgAccountGuildInvite.encode(message.guild_invites[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgAccountGuildMemberships message, length delimited. Does not implicitly {@link CMsgAccountGuildMemberships.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgAccountGuildMemberships
         * @static
         * @param {ICMsgAccountGuildMemberships} message CMsgAccountGuildMemberships message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAccountGuildMemberships.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgAccountGuildMemberships message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgAccountGuildMemberships
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgAccountGuildMemberships} CMsgAccountGuildMemberships
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAccountGuildMemberships.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgAccountGuildMemberships();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.guild_ids && message.guild_ids.length))
                        message.guild_ids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.guild_ids.push(reader.uint32());
                    } else
                        message.guild_ids.push(reader.uint32());
                    break;
                case 2:
                    if (!(message.guild_invites && message.guild_invites.length))
                        message.guild_invites = [];
                    message.guild_invites.push($root.CMsgAccountGuildInvite.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgAccountGuildMemberships message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgAccountGuildMemberships
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgAccountGuildMemberships} CMsgAccountGuildMemberships
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAccountGuildMemberships.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgAccountGuildMemberships message.
         * @function verify
         * @memberof CMsgAccountGuildMemberships
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgAccountGuildMemberships.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_ids != null && message.hasOwnProperty("guild_ids")) {
                if (!Array.isArray(message.guild_ids))
                    return "guild_ids: array expected";
                for (var i = 0; i < message.guild_ids.length; ++i)
                    if (!$util.isInteger(message.guild_ids[i]))
                        return "guild_ids: integer[] expected";
            }
            if (message.guild_invites != null && message.hasOwnProperty("guild_invites")) {
                if (!Array.isArray(message.guild_invites))
                    return "guild_invites: array expected";
                for (var i = 0; i < message.guild_invites.length; ++i) {
                    var error = $root.CMsgAccountGuildInvite.verify(message.guild_invites[i]);
                    if (error)
                        return "guild_invites." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgAccountGuildMemberships message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgAccountGuildMemberships
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgAccountGuildMemberships} CMsgAccountGuildMemberships
         */
        CMsgAccountGuildMemberships.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgAccountGuildMemberships)
                return object;
            var message = new $root.CMsgAccountGuildMemberships();
            if (object.guild_ids) {
                if (!Array.isArray(object.guild_ids))
                    throw TypeError(".CMsgAccountGuildMemberships.guild_ids: array expected");
                message.guild_ids = [];
                for (var i = 0; i < object.guild_ids.length; ++i)
                    message.guild_ids[i] = object.guild_ids[i] >>> 0;
            }
            if (object.guild_invites) {
                if (!Array.isArray(object.guild_invites))
                    throw TypeError(".CMsgAccountGuildMemberships.guild_invites: array expected");
                message.guild_invites = [];
                for (var i = 0; i < object.guild_invites.length; ++i) {
                    if (typeof object.guild_invites[i] !== "object")
                        throw TypeError(".CMsgAccountGuildMemberships.guild_invites: object expected");
                    message.guild_invites[i] = $root.CMsgAccountGuildInvite.fromObject(object.guild_invites[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgAccountGuildMemberships message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgAccountGuildMemberships
         * @static
         * @param {CMsgAccountGuildMemberships} message CMsgAccountGuildMemberships
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgAccountGuildMemberships.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.guild_ids = [];
                object.guild_invites = [];
            }
            if (message.guild_ids && message.guild_ids.length) {
                object.guild_ids = [];
                for (var j = 0; j < message.guild_ids.length; ++j)
                    object.guild_ids[j] = message.guild_ids[j];
            }
            if (message.guild_invites && message.guild_invites.length) {
                object.guild_invites = [];
                for (var j = 0; j < message.guild_invites.length; ++j)
                    object.guild_invites[j] = $root.CMsgAccountGuildInvite.toObject(message.guild_invites[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgAccountGuildMemberships to JSON.
         * @function toJSON
         * @memberof CMsgAccountGuildMemberships
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgAccountGuildMemberships.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgAccountGuildMemberships;
    })();
    
    $root.CMsgGuildPersonaInfo = (function() {
    
        /**
         * Properties of a CMsgGuildPersonaInfo.
         * @exports ICMsgGuildPersonaInfo
         * @interface ICMsgGuildPersonaInfo
         * @property {number|null} [guild_id] CMsgGuildPersonaInfo guild_id
         * @property {string|null} [guild_tag] CMsgGuildPersonaInfo guild_tag
         * @property {number|null} [guild_flags] CMsgGuildPersonaInfo guild_flags
         */
    
        /**
         * Constructs a new CMsgGuildPersonaInfo.
         * @exports CMsgGuildPersonaInfo
         * @classdesc Represents a CMsgGuildPersonaInfo.
         * @implements ICMsgGuildPersonaInfo
         * @constructor
         * @param {ICMsgGuildPersonaInfo=} [properties] Properties to set
         */
        function CMsgGuildPersonaInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGuildPersonaInfo guild_id.
         * @member {number} guild_id
         * @memberof CMsgGuildPersonaInfo
         * @instance
         */
        CMsgGuildPersonaInfo.prototype.guild_id = 0;
    
        /**
         * CMsgGuildPersonaInfo guild_tag.
         * @member {string} guild_tag
         * @memberof CMsgGuildPersonaInfo
         * @instance
         */
        CMsgGuildPersonaInfo.prototype.guild_tag = "";
    
        /**
         * CMsgGuildPersonaInfo guild_flags.
         * @member {number} guild_flags
         * @memberof CMsgGuildPersonaInfo
         * @instance
         */
        CMsgGuildPersonaInfo.prototype.guild_flags = 0;
    
        /**
         * Creates a new CMsgGuildPersonaInfo instance using the specified properties.
         * @function create
         * @memberof CMsgGuildPersonaInfo
         * @static
         * @param {ICMsgGuildPersonaInfo=} [properties] Properties to set
         * @returns {CMsgGuildPersonaInfo} CMsgGuildPersonaInfo instance
         */
        CMsgGuildPersonaInfo.create = function create(properties) {
            return new CMsgGuildPersonaInfo(properties);
        };
    
        /**
         * Encodes the specified CMsgGuildPersonaInfo message. Does not implicitly {@link CMsgGuildPersonaInfo.verify|verify} messages.
         * @function encode
         * @memberof CMsgGuildPersonaInfo
         * @static
         * @param {ICMsgGuildPersonaInfo} message CMsgGuildPersonaInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildPersonaInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.guild_tag != null && Object.hasOwnProperty.call(message, "guild_tag"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.guild_tag);
            if (message.guild_flags != null && Object.hasOwnProperty.call(message, "guild_flags"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.guild_flags);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGuildPersonaInfo message, length delimited. Does not implicitly {@link CMsgGuildPersonaInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGuildPersonaInfo
         * @static
         * @param {ICMsgGuildPersonaInfo} message CMsgGuildPersonaInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildPersonaInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGuildPersonaInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGuildPersonaInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGuildPersonaInfo} CMsgGuildPersonaInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildPersonaInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGuildPersonaInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.guild_tag = reader.string();
                    break;
                case 3:
                    message.guild_flags = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGuildPersonaInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGuildPersonaInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGuildPersonaInfo} CMsgGuildPersonaInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildPersonaInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGuildPersonaInfo message.
         * @function verify
         * @memberof CMsgGuildPersonaInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGuildPersonaInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.guild_tag != null && message.hasOwnProperty("guild_tag"))
                if (!$util.isString(message.guild_tag))
                    return "guild_tag: string expected";
            if (message.guild_flags != null && message.hasOwnProperty("guild_flags"))
                if (!$util.isInteger(message.guild_flags))
                    return "guild_flags: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgGuildPersonaInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGuildPersonaInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGuildPersonaInfo} CMsgGuildPersonaInfo
         */
        CMsgGuildPersonaInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGuildPersonaInfo)
                return object;
            var message = new $root.CMsgGuildPersonaInfo();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            if (object.guild_tag != null)
                message.guild_tag = String(object.guild_tag);
            if (object.guild_flags != null)
                message.guild_flags = object.guild_flags >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGuildPersonaInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGuildPersonaInfo
         * @static
         * @param {CMsgGuildPersonaInfo} message CMsgGuildPersonaInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGuildPersonaInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.guild_tag = "";
                object.guild_flags = 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.guild_tag != null && message.hasOwnProperty("guild_tag"))
                object.guild_tag = message.guild_tag;
            if (message.guild_flags != null && message.hasOwnProperty("guild_flags"))
                object.guild_flags = message.guild_flags;
            return object;
        };
    
        /**
         * Converts this CMsgGuildPersonaInfo to JSON.
         * @function toJSON
         * @memberof CMsgGuildPersonaInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGuildPersonaInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGuildPersonaInfo;
    })();
    
    $root.CMsgAccountGuildsPersonaInfo = (function() {
    
        /**
         * Properties of a CMsgAccountGuildsPersonaInfo.
         * @exports ICMsgAccountGuildsPersonaInfo
         * @interface ICMsgAccountGuildsPersonaInfo
         * @property {Array.<ICMsgGuildPersonaInfo>|null} [guild_persona_infos] CMsgAccountGuildsPersonaInfo guild_persona_infos
         */
    
        /**
         * Constructs a new CMsgAccountGuildsPersonaInfo.
         * @exports CMsgAccountGuildsPersonaInfo
         * @classdesc Represents a CMsgAccountGuildsPersonaInfo.
         * @implements ICMsgAccountGuildsPersonaInfo
         * @constructor
         * @param {ICMsgAccountGuildsPersonaInfo=} [properties] Properties to set
         */
        function CMsgAccountGuildsPersonaInfo(properties) {
            this.guild_persona_infos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgAccountGuildsPersonaInfo guild_persona_infos.
         * @member {Array.<ICMsgGuildPersonaInfo>} guild_persona_infos
         * @memberof CMsgAccountGuildsPersonaInfo
         * @instance
         */
        CMsgAccountGuildsPersonaInfo.prototype.guild_persona_infos = $util.emptyArray;
    
        /**
         * Creates a new CMsgAccountGuildsPersonaInfo instance using the specified properties.
         * @function create
         * @memberof CMsgAccountGuildsPersonaInfo
         * @static
         * @param {ICMsgAccountGuildsPersonaInfo=} [properties] Properties to set
         * @returns {CMsgAccountGuildsPersonaInfo} CMsgAccountGuildsPersonaInfo instance
         */
        CMsgAccountGuildsPersonaInfo.create = function create(properties) {
            return new CMsgAccountGuildsPersonaInfo(properties);
        };
    
        /**
         * Encodes the specified CMsgAccountGuildsPersonaInfo message. Does not implicitly {@link CMsgAccountGuildsPersonaInfo.verify|verify} messages.
         * @function encode
         * @memberof CMsgAccountGuildsPersonaInfo
         * @static
         * @param {ICMsgAccountGuildsPersonaInfo} message CMsgAccountGuildsPersonaInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAccountGuildsPersonaInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_persona_infos != null && message.guild_persona_infos.length)
                for (var i = 0; i < message.guild_persona_infos.length; ++i)
                    $root.CMsgGuildPersonaInfo.encode(message.guild_persona_infos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgAccountGuildsPersonaInfo message, length delimited. Does not implicitly {@link CMsgAccountGuildsPersonaInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgAccountGuildsPersonaInfo
         * @static
         * @param {ICMsgAccountGuildsPersonaInfo} message CMsgAccountGuildsPersonaInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAccountGuildsPersonaInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgAccountGuildsPersonaInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgAccountGuildsPersonaInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgAccountGuildsPersonaInfo} CMsgAccountGuildsPersonaInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAccountGuildsPersonaInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgAccountGuildsPersonaInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.guild_persona_infos && message.guild_persona_infos.length))
                        message.guild_persona_infos = [];
                    message.guild_persona_infos.push($root.CMsgGuildPersonaInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgAccountGuildsPersonaInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgAccountGuildsPersonaInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgAccountGuildsPersonaInfo} CMsgAccountGuildsPersonaInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAccountGuildsPersonaInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgAccountGuildsPersonaInfo message.
         * @function verify
         * @memberof CMsgAccountGuildsPersonaInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgAccountGuildsPersonaInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_persona_infos != null && message.hasOwnProperty("guild_persona_infos")) {
                if (!Array.isArray(message.guild_persona_infos))
                    return "guild_persona_infos: array expected";
                for (var i = 0; i < message.guild_persona_infos.length; ++i) {
                    var error = $root.CMsgGuildPersonaInfo.verify(message.guild_persona_infos[i]);
                    if (error)
                        return "guild_persona_infos." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgAccountGuildsPersonaInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgAccountGuildsPersonaInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgAccountGuildsPersonaInfo} CMsgAccountGuildsPersonaInfo
         */
        CMsgAccountGuildsPersonaInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgAccountGuildsPersonaInfo)
                return object;
            var message = new $root.CMsgAccountGuildsPersonaInfo();
            if (object.guild_persona_infos) {
                if (!Array.isArray(object.guild_persona_infos))
                    throw TypeError(".CMsgAccountGuildsPersonaInfo.guild_persona_infos: array expected");
                message.guild_persona_infos = [];
                for (var i = 0; i < object.guild_persona_infos.length; ++i) {
                    if (typeof object.guild_persona_infos[i] !== "object")
                        throw TypeError(".CMsgAccountGuildsPersonaInfo.guild_persona_infos: object expected");
                    message.guild_persona_infos[i] = $root.CMsgGuildPersonaInfo.fromObject(object.guild_persona_infos[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgAccountGuildsPersonaInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgAccountGuildsPersonaInfo
         * @static
         * @param {CMsgAccountGuildsPersonaInfo} message CMsgAccountGuildsPersonaInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgAccountGuildsPersonaInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.guild_persona_infos = [];
            if (message.guild_persona_infos && message.guild_persona_infos.length) {
                object.guild_persona_infos = [];
                for (var j = 0; j < message.guild_persona_infos.length; ++j)
                    object.guild_persona_infos[j] = $root.CMsgGuildPersonaInfo.toObject(message.guild_persona_infos[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgAccountGuildsPersonaInfo to JSON.
         * @function toJSON
         * @memberof CMsgAccountGuildsPersonaInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgAccountGuildsPersonaInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgAccountGuildsPersonaInfo;
    })();
    
    $root.CMsgGuildFeedEvent = (function() {
    
        /**
         * Properties of a CMsgGuildFeedEvent.
         * @exports ICMsgGuildFeedEvent
         * @interface ICMsgGuildFeedEvent
         * @property {number|Long|null} [feed_event_id] CMsgGuildFeedEvent feed_event_id
         * @property {number|null} [timestamp] CMsgGuildFeedEvent timestamp
         * @property {number|null} [event_type] CMsgGuildFeedEvent event_type
         * @property {number|null} [param_uint_1] CMsgGuildFeedEvent param_uint_1
         * @property {number|null} [param_uint_2] CMsgGuildFeedEvent param_uint_2
         * @property {number|null} [param_uint_3] CMsgGuildFeedEvent param_uint_3
         */
    
        /**
         * Constructs a new CMsgGuildFeedEvent.
         * @exports CMsgGuildFeedEvent
         * @classdesc Represents a CMsgGuildFeedEvent.
         * @implements ICMsgGuildFeedEvent
         * @constructor
         * @param {ICMsgGuildFeedEvent=} [properties] Properties to set
         */
        function CMsgGuildFeedEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGuildFeedEvent feed_event_id.
         * @member {number|Long} feed_event_id
         * @memberof CMsgGuildFeedEvent
         * @instance
         */
        CMsgGuildFeedEvent.prototype.feed_event_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgGuildFeedEvent timestamp.
         * @member {number} timestamp
         * @memberof CMsgGuildFeedEvent
         * @instance
         */
        CMsgGuildFeedEvent.prototype.timestamp = 0;
    
        /**
         * CMsgGuildFeedEvent event_type.
         * @member {number} event_type
         * @memberof CMsgGuildFeedEvent
         * @instance
         */
        CMsgGuildFeedEvent.prototype.event_type = 0;
    
        /**
         * CMsgGuildFeedEvent param_uint_1.
         * @member {number} param_uint_1
         * @memberof CMsgGuildFeedEvent
         * @instance
         */
        CMsgGuildFeedEvent.prototype.param_uint_1 = 0;
    
        /**
         * CMsgGuildFeedEvent param_uint_2.
         * @member {number} param_uint_2
         * @memberof CMsgGuildFeedEvent
         * @instance
         */
        CMsgGuildFeedEvent.prototype.param_uint_2 = 0;
    
        /**
         * CMsgGuildFeedEvent param_uint_3.
         * @member {number} param_uint_3
         * @memberof CMsgGuildFeedEvent
         * @instance
         */
        CMsgGuildFeedEvent.prototype.param_uint_3 = 0;
    
        /**
         * Creates a new CMsgGuildFeedEvent instance using the specified properties.
         * @function create
         * @memberof CMsgGuildFeedEvent
         * @static
         * @param {ICMsgGuildFeedEvent=} [properties] Properties to set
         * @returns {CMsgGuildFeedEvent} CMsgGuildFeedEvent instance
         */
        CMsgGuildFeedEvent.create = function create(properties) {
            return new CMsgGuildFeedEvent(properties);
        };
    
        /**
         * Encodes the specified CMsgGuildFeedEvent message. Does not implicitly {@link CMsgGuildFeedEvent.verify|verify} messages.
         * @function encode
         * @memberof CMsgGuildFeedEvent
         * @static
         * @param {ICMsgGuildFeedEvent} message CMsgGuildFeedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildFeedEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.feed_event_id != null && Object.hasOwnProperty.call(message, "feed_event_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.feed_event_id);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestamp);
            if (message.event_type != null && Object.hasOwnProperty.call(message, "event_type"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.event_type);
            if (message.param_uint_1 != null && Object.hasOwnProperty.call(message, "param_uint_1"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.param_uint_1);
            if (message.param_uint_2 != null && Object.hasOwnProperty.call(message, "param_uint_2"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.param_uint_2);
            if (message.param_uint_3 != null && Object.hasOwnProperty.call(message, "param_uint_3"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.param_uint_3);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGuildFeedEvent message, length delimited. Does not implicitly {@link CMsgGuildFeedEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGuildFeedEvent
         * @static
         * @param {ICMsgGuildFeedEvent} message CMsgGuildFeedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGuildFeedEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGuildFeedEvent message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGuildFeedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGuildFeedEvent} CMsgGuildFeedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildFeedEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGuildFeedEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.feed_event_id = reader.uint64();
                    break;
                case 2:
                    message.timestamp = reader.uint32();
                    break;
                case 3:
                    message.event_type = reader.uint32();
                    break;
                case 4:
                    message.param_uint_1 = reader.uint32();
                    break;
                case 5:
                    message.param_uint_2 = reader.uint32();
                    break;
                case 6:
                    message.param_uint_3 = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGuildFeedEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGuildFeedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGuildFeedEvent} CMsgGuildFeedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGuildFeedEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGuildFeedEvent message.
         * @function verify
         * @memberof CMsgGuildFeedEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGuildFeedEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.feed_event_id != null && message.hasOwnProperty("feed_event_id"))
                if (!$util.isInteger(message.feed_event_id) && !(message.feed_event_id && $util.isInteger(message.feed_event_id.low) && $util.isInteger(message.feed_event_id.high)))
                    return "feed_event_id: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.event_type != null && message.hasOwnProperty("event_type"))
                if (!$util.isInteger(message.event_type))
                    return "event_type: integer expected";
            if (message.param_uint_1 != null && message.hasOwnProperty("param_uint_1"))
                if (!$util.isInteger(message.param_uint_1))
                    return "param_uint_1: integer expected";
            if (message.param_uint_2 != null && message.hasOwnProperty("param_uint_2"))
                if (!$util.isInteger(message.param_uint_2))
                    return "param_uint_2: integer expected";
            if (message.param_uint_3 != null && message.hasOwnProperty("param_uint_3"))
                if (!$util.isInteger(message.param_uint_3))
                    return "param_uint_3: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgGuildFeedEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGuildFeedEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGuildFeedEvent} CMsgGuildFeedEvent
         */
        CMsgGuildFeedEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGuildFeedEvent)
                return object;
            var message = new $root.CMsgGuildFeedEvent();
            if (object.feed_event_id != null)
                if ($util.Long)
                    (message.feed_event_id = $util.Long.fromValue(object.feed_event_id)).unsigned = true;
                else if (typeof object.feed_event_id === "string")
                    message.feed_event_id = parseInt(object.feed_event_id, 10);
                else if (typeof object.feed_event_id === "number")
                    message.feed_event_id = object.feed_event_id;
                else if (typeof object.feed_event_id === "object")
                    message.feed_event_id = new $util.LongBits(object.feed_event_id.low >>> 0, object.feed_event_id.high >>> 0).toNumber(true);
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            if (object.event_type != null)
                message.event_type = object.event_type >>> 0;
            if (object.param_uint_1 != null)
                message.param_uint_1 = object.param_uint_1 >>> 0;
            if (object.param_uint_2 != null)
                message.param_uint_2 = object.param_uint_2 >>> 0;
            if (object.param_uint_3 != null)
                message.param_uint_3 = object.param_uint_3 >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGuildFeedEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGuildFeedEvent
         * @static
         * @param {CMsgGuildFeedEvent} message CMsgGuildFeedEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGuildFeedEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.feed_event_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.feed_event_id = options.longs === String ? "0" : 0;
                object.timestamp = 0;
                object.event_type = 0;
                object.param_uint_1 = 0;
                object.param_uint_2 = 0;
                object.param_uint_3 = 0;
            }
            if (message.feed_event_id != null && message.hasOwnProperty("feed_event_id"))
                if (typeof message.feed_event_id === "number")
                    object.feed_event_id = options.longs === String ? String(message.feed_event_id) : message.feed_event_id;
                else
                    object.feed_event_id = options.longs === String ? $util.Long.prototype.toString.call(message.feed_event_id) : options.longs === Number ? new $util.LongBits(message.feed_event_id.low >>> 0, message.feed_event_id.high >>> 0).toNumber(true) : message.feed_event_id;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.event_type != null && message.hasOwnProperty("event_type"))
                object.event_type = message.event_type;
            if (message.param_uint_1 != null && message.hasOwnProperty("param_uint_1"))
                object.param_uint_1 = message.param_uint_1;
            if (message.param_uint_2 != null && message.hasOwnProperty("param_uint_2"))
                object.param_uint_2 = message.param_uint_2;
            if (message.param_uint_3 != null && message.hasOwnProperty("param_uint_3"))
                object.param_uint_3 = message.param_uint_3;
            return object;
        };
    
        /**
         * Converts this CMsgGuildFeedEvent to JSON.
         * @function toJSON
         * @memberof CMsgGuildFeedEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGuildFeedEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGuildFeedEvent;
    })();
    
    $root.CMsgClientToGCCreateGuild = (function() {
    
        /**
         * Properties of a CMsgClientToGCCreateGuild.
         * @exports ICMsgClientToGCCreateGuild
         * @interface ICMsgClientToGCCreateGuild
         * @property {ICMsgGuildInfo|null} [guild_info] CMsgClientToGCCreateGuild guild_info
         * @property {EGuildChatType|null} [guild_chat_type] CMsgClientToGCCreateGuild guild_chat_type
         */
    
        /**
         * Constructs a new CMsgClientToGCCreateGuild.
         * @exports CMsgClientToGCCreateGuild
         * @classdesc Represents a CMsgClientToGCCreateGuild.
         * @implements ICMsgClientToGCCreateGuild
         * @constructor
         * @param {ICMsgClientToGCCreateGuild=} [properties] Properties to set
         */
        function CMsgClientToGCCreateGuild(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCCreateGuild guild_info.
         * @member {ICMsgGuildInfo|null|undefined} guild_info
         * @memberof CMsgClientToGCCreateGuild
         * @instance
         */
        CMsgClientToGCCreateGuild.prototype.guild_info = null;
    
        /**
         * CMsgClientToGCCreateGuild guild_chat_type.
         * @member {EGuildChatType} guild_chat_type
         * @memberof CMsgClientToGCCreateGuild
         * @instance
         */
        CMsgClientToGCCreateGuild.prototype.guild_chat_type = 0;
    
        /**
         * Creates a new CMsgClientToGCCreateGuild instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCCreateGuild
         * @static
         * @param {ICMsgClientToGCCreateGuild=} [properties] Properties to set
         * @returns {CMsgClientToGCCreateGuild} CMsgClientToGCCreateGuild instance
         */
        CMsgClientToGCCreateGuild.create = function create(properties) {
            return new CMsgClientToGCCreateGuild(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCCreateGuild message. Does not implicitly {@link CMsgClientToGCCreateGuild.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCCreateGuild
         * @static
         * @param {ICMsgClientToGCCreateGuild} message CMsgClientToGCCreateGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCCreateGuild.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_info != null && Object.hasOwnProperty.call(message, "guild_info"))
                $root.CMsgGuildInfo.encode(message.guild_info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.guild_chat_type != null && Object.hasOwnProperty.call(message, "guild_chat_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.guild_chat_type);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCCreateGuild message, length delimited. Does not implicitly {@link CMsgClientToGCCreateGuild.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCCreateGuild
         * @static
         * @param {ICMsgClientToGCCreateGuild} message CMsgClientToGCCreateGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCCreateGuild.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCCreateGuild message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCCreateGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCCreateGuild} CMsgClientToGCCreateGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCCreateGuild.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCCreateGuild();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_info = $root.CMsgGuildInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.guild_chat_type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCCreateGuild message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCCreateGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCCreateGuild} CMsgClientToGCCreateGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCCreateGuild.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCCreateGuild message.
         * @function verify
         * @memberof CMsgClientToGCCreateGuild
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCCreateGuild.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_info != null && message.hasOwnProperty("guild_info")) {
                var error = $root.CMsgGuildInfo.verify(message.guild_info);
                if (error)
                    return "guild_info." + error;
            }
            if (message.guild_chat_type != null && message.hasOwnProperty("guild_chat_type"))
                switch (message.guild_chat_type) {
                default:
                    return "guild_chat_type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCCreateGuild message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCCreateGuild
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCCreateGuild} CMsgClientToGCCreateGuild
         */
        CMsgClientToGCCreateGuild.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCCreateGuild)
                return object;
            var message = new $root.CMsgClientToGCCreateGuild();
            if (object.guild_info != null) {
                if (typeof object.guild_info !== "object")
                    throw TypeError(".CMsgClientToGCCreateGuild.guild_info: object expected");
                message.guild_info = $root.CMsgGuildInfo.fromObject(object.guild_info);
            }
            switch (object.guild_chat_type) {
            case "k_EGuildChatType_Unspecified":
            case 0:
                message.guild_chat_type = 0;
                break;
            case "k_EGuildChatType_SteamChatGroup":
            case 1:
                message.guild_chat_type = 1;
                break;
            case "k_EGuildChatType_GC":
            case 2:
                message.guild_chat_type = 2;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCCreateGuild message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCCreateGuild
         * @static
         * @param {CMsgClientToGCCreateGuild} message CMsgClientToGCCreateGuild
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCCreateGuild.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_info = null;
                object.guild_chat_type = options.enums === String ? "k_EGuildChatType_Unspecified" : 0;
            }
            if (message.guild_info != null && message.hasOwnProperty("guild_info"))
                object.guild_info = $root.CMsgGuildInfo.toObject(message.guild_info, options);
            if (message.guild_chat_type != null && message.hasOwnProperty("guild_chat_type"))
                object.guild_chat_type = options.enums === String ? $root.EGuildChatType[message.guild_chat_type] : message.guild_chat_type;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCCreateGuild to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCCreateGuild
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCCreateGuild.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCCreateGuild;
    })();
    
    $root.CMsgClientToGCCreateGuildResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCCreateGuildResponse.
         * @exports ICMsgClientToGCCreateGuildResponse
         * @interface ICMsgClientToGCCreateGuildResponse
         * @property {CMsgClientToGCCreateGuildResponse.EResponse|null} [result] CMsgClientToGCCreateGuildResponse result
         * @property {number|null} [guild_id] CMsgClientToGCCreateGuildResponse guild_id
         */
    
        /**
         * Constructs a new CMsgClientToGCCreateGuildResponse.
         * @exports CMsgClientToGCCreateGuildResponse
         * @classdesc Represents a CMsgClientToGCCreateGuildResponse.
         * @implements ICMsgClientToGCCreateGuildResponse
         * @constructor
         * @param {ICMsgClientToGCCreateGuildResponse=} [properties] Properties to set
         */
        function CMsgClientToGCCreateGuildResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCCreateGuildResponse result.
         * @member {CMsgClientToGCCreateGuildResponse.EResponse} result
         * @memberof CMsgClientToGCCreateGuildResponse
         * @instance
         */
        CMsgClientToGCCreateGuildResponse.prototype.result = 0;
    
        /**
         * CMsgClientToGCCreateGuildResponse guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCCreateGuildResponse
         * @instance
         */
        CMsgClientToGCCreateGuildResponse.prototype.guild_id = 0;
    
        /**
         * Creates a new CMsgClientToGCCreateGuildResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCCreateGuildResponse
         * @static
         * @param {ICMsgClientToGCCreateGuildResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCCreateGuildResponse} CMsgClientToGCCreateGuildResponse instance
         */
        CMsgClientToGCCreateGuildResponse.create = function create(properties) {
            return new CMsgClientToGCCreateGuildResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCCreateGuildResponse message. Does not implicitly {@link CMsgClientToGCCreateGuildResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCCreateGuildResponse
         * @static
         * @param {ICMsgClientToGCCreateGuildResponse} message CMsgClientToGCCreateGuildResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCCreateGuildResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.guild_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCCreateGuildResponse message, length delimited. Does not implicitly {@link CMsgClientToGCCreateGuildResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCCreateGuildResponse
         * @static
         * @param {ICMsgClientToGCCreateGuildResponse} message CMsgClientToGCCreateGuildResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCCreateGuildResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCCreateGuildResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCCreateGuildResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCCreateGuildResponse} CMsgClientToGCCreateGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCCreateGuildResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCCreateGuildResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.guild_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCCreateGuildResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCCreateGuildResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCCreateGuildResponse} CMsgClientToGCCreateGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCCreateGuildResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCCreateGuildResponse message.
         * @function verify
         * @memberof CMsgClientToGCCreateGuildResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCCreateGuildResponse.verify = function verify(message) {
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
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCCreateGuildResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCCreateGuildResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCCreateGuildResponse} CMsgClientToGCCreateGuildResponse
         */
        CMsgClientToGCCreateGuildResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCCreateGuildResponse)
                return object;
            var message = new $root.CMsgClientToGCCreateGuildResponse();
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
            case "k_eInvalidName":
            case 5:
                message.result = 5;
                break;
            case "k_eNameAlreadyUsed":
            case 6:
                message.result = 6;
                break;
            case "k_eInvalidTag":
            case 7:
                message.result = 7;
                break;
            case "k_eTagAlreadyUsed":
            case 8:
                message.result = 8;
                break;
            case "k_eInvalidDescription":
            case 9:
                message.result = 9;
                break;
            case "k_eInvalidRegion":
            case 10:
                message.result = 10;
                break;
            case "k_eInvalidLogo":
            case 11:
                message.result = 11;
                break;
            case "k_eDoesNotOwnEvent":
            case 12:
                message.result = 12;
                break;
            case "k_eGuildLimit":
            case 13:
                message.result = 13;
                break;
            case "k_eInvalidMotD":
            case 14:
                message.result = 14;
                break;
            case "k_eBlocked":
            case 15:
                message.result = 15;
                break;
            }
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCCreateGuildResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCCreateGuildResponse
         * @static
         * @param {CMsgClientToGCCreateGuildResponse} message CMsgClientToGCCreateGuildResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCCreateGuildResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = options.enums === String ? "k_eInternalError" : 0;
                object.guild_id = 0;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCCreateGuildResponse.EResponse[message.result] : message.result;
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCCreateGuildResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCCreateGuildResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCCreateGuildResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCCreateGuildResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidName=5 k_eInvalidName value
         * @property {number} k_eNameAlreadyUsed=6 k_eNameAlreadyUsed value
         * @property {number} k_eInvalidTag=7 k_eInvalidTag value
         * @property {number} k_eTagAlreadyUsed=8 k_eTagAlreadyUsed value
         * @property {number} k_eInvalidDescription=9 k_eInvalidDescription value
         * @property {number} k_eInvalidRegion=10 k_eInvalidRegion value
         * @property {number} k_eInvalidLogo=11 k_eInvalidLogo value
         * @property {number} k_eDoesNotOwnEvent=12 k_eDoesNotOwnEvent value
         * @property {number} k_eGuildLimit=13 k_eGuildLimit value
         * @property {number} k_eInvalidMotD=14 k_eInvalidMotD value
         * @property {number} k_eBlocked=15 k_eBlocked value
         */
        CMsgClientToGCCreateGuildResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidName"] = 5;
            values[valuesById[6] = "k_eNameAlreadyUsed"] = 6;
            values[valuesById[7] = "k_eInvalidTag"] = 7;
            values[valuesById[8] = "k_eTagAlreadyUsed"] = 8;
            values[valuesById[9] = "k_eInvalidDescription"] = 9;
            values[valuesById[10] = "k_eInvalidRegion"] = 10;
            values[valuesById[11] = "k_eInvalidLogo"] = 11;
            values[valuesById[12] = "k_eDoesNotOwnEvent"] = 12;
            values[valuesById[13] = "k_eGuildLimit"] = 13;
            values[valuesById[14] = "k_eInvalidMotD"] = 14;
            values[valuesById[15] = "k_eBlocked"] = 15;
            return values;
        })();
    
        return CMsgClientToGCCreateGuildResponse;
    })();
    
    $root.CMsgClientToGCSetGuildInfo = (function() {
    
        /**
         * Properties of a CMsgClientToGCSetGuildInfo.
         * @exports ICMsgClientToGCSetGuildInfo
         * @interface ICMsgClientToGCSetGuildInfo
         * @property {number|null} [guild_id] CMsgClientToGCSetGuildInfo guild_id
         * @property {ICMsgGuildInfo|null} [guild_info] CMsgClientToGCSetGuildInfo guild_info
         * @property {EGuildChatType|null} [guild_chat_type] CMsgClientToGCSetGuildInfo guild_chat_type
         */
    
        /**
         * Constructs a new CMsgClientToGCSetGuildInfo.
         * @exports CMsgClientToGCSetGuildInfo
         * @classdesc Represents a CMsgClientToGCSetGuildInfo.
         * @implements ICMsgClientToGCSetGuildInfo
         * @constructor
         * @param {ICMsgClientToGCSetGuildInfo=} [properties] Properties to set
         */
        function CMsgClientToGCSetGuildInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCSetGuildInfo guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCSetGuildInfo
         * @instance
         */
        CMsgClientToGCSetGuildInfo.prototype.guild_id = 0;
    
        /**
         * CMsgClientToGCSetGuildInfo guild_info.
         * @member {ICMsgGuildInfo|null|undefined} guild_info
         * @memberof CMsgClientToGCSetGuildInfo
         * @instance
         */
        CMsgClientToGCSetGuildInfo.prototype.guild_info = null;
    
        /**
         * CMsgClientToGCSetGuildInfo guild_chat_type.
         * @member {EGuildChatType} guild_chat_type
         * @memberof CMsgClientToGCSetGuildInfo
         * @instance
         */
        CMsgClientToGCSetGuildInfo.prototype.guild_chat_type = 0;
    
        /**
         * Creates a new CMsgClientToGCSetGuildInfo instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCSetGuildInfo
         * @static
         * @param {ICMsgClientToGCSetGuildInfo=} [properties] Properties to set
         * @returns {CMsgClientToGCSetGuildInfo} CMsgClientToGCSetGuildInfo instance
         */
        CMsgClientToGCSetGuildInfo.create = function create(properties) {
            return new CMsgClientToGCSetGuildInfo(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCSetGuildInfo message. Does not implicitly {@link CMsgClientToGCSetGuildInfo.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCSetGuildInfo
         * @static
         * @param {ICMsgClientToGCSetGuildInfo} message CMsgClientToGCSetGuildInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCSetGuildInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.guild_info != null && Object.hasOwnProperty.call(message, "guild_info"))
                $root.CMsgGuildInfo.encode(message.guild_info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.guild_chat_type != null && Object.hasOwnProperty.call(message, "guild_chat_type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.guild_chat_type);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCSetGuildInfo message, length delimited. Does not implicitly {@link CMsgClientToGCSetGuildInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCSetGuildInfo
         * @static
         * @param {ICMsgClientToGCSetGuildInfo} message CMsgClientToGCSetGuildInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCSetGuildInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCSetGuildInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCSetGuildInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCSetGuildInfo} CMsgClientToGCSetGuildInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCSetGuildInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCSetGuildInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.guild_info = $root.CMsgGuildInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.guild_chat_type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCSetGuildInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCSetGuildInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCSetGuildInfo} CMsgClientToGCSetGuildInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCSetGuildInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCSetGuildInfo message.
         * @function verify
         * @memberof CMsgClientToGCSetGuildInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCSetGuildInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.guild_info != null && message.hasOwnProperty("guild_info")) {
                var error = $root.CMsgGuildInfo.verify(message.guild_info);
                if (error)
                    return "guild_info." + error;
            }
            if (message.guild_chat_type != null && message.hasOwnProperty("guild_chat_type"))
                switch (message.guild_chat_type) {
                default:
                    return "guild_chat_type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCSetGuildInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCSetGuildInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCSetGuildInfo} CMsgClientToGCSetGuildInfo
         */
        CMsgClientToGCSetGuildInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCSetGuildInfo)
                return object;
            var message = new $root.CMsgClientToGCSetGuildInfo();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            if (object.guild_info != null) {
                if (typeof object.guild_info !== "object")
                    throw TypeError(".CMsgClientToGCSetGuildInfo.guild_info: object expected");
                message.guild_info = $root.CMsgGuildInfo.fromObject(object.guild_info);
            }
            switch (object.guild_chat_type) {
            case "k_EGuildChatType_Unspecified":
            case 0:
                message.guild_chat_type = 0;
                break;
            case "k_EGuildChatType_SteamChatGroup":
            case 1:
                message.guild_chat_type = 1;
                break;
            case "k_EGuildChatType_GC":
            case 2:
                message.guild_chat_type = 2;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCSetGuildInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCSetGuildInfo
         * @static
         * @param {CMsgClientToGCSetGuildInfo} message CMsgClientToGCSetGuildInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCSetGuildInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.guild_info = null;
                object.guild_chat_type = options.enums === String ? "k_EGuildChatType_Unspecified" : 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.guild_info != null && message.hasOwnProperty("guild_info"))
                object.guild_info = $root.CMsgGuildInfo.toObject(message.guild_info, options);
            if (message.guild_chat_type != null && message.hasOwnProperty("guild_chat_type"))
                object.guild_chat_type = options.enums === String ? $root.EGuildChatType[message.guild_chat_type] : message.guild_chat_type;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCSetGuildInfo to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCSetGuildInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCSetGuildInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCSetGuildInfo;
    })();
    
    $root.CMsgClientToGCSetGuildInfoResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCSetGuildInfoResponse.
         * @exports ICMsgClientToGCSetGuildInfoResponse
         * @interface ICMsgClientToGCSetGuildInfoResponse
         * @property {CMsgClientToGCSetGuildInfoResponse.EResponse|null} [result] CMsgClientToGCSetGuildInfoResponse result
         */
    
        /**
         * Constructs a new CMsgClientToGCSetGuildInfoResponse.
         * @exports CMsgClientToGCSetGuildInfoResponse
         * @classdesc Represents a CMsgClientToGCSetGuildInfoResponse.
         * @implements ICMsgClientToGCSetGuildInfoResponse
         * @constructor
         * @param {ICMsgClientToGCSetGuildInfoResponse=} [properties] Properties to set
         */
        function CMsgClientToGCSetGuildInfoResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCSetGuildInfoResponse result.
         * @member {CMsgClientToGCSetGuildInfoResponse.EResponse} result
         * @memberof CMsgClientToGCSetGuildInfoResponse
         * @instance
         */
        CMsgClientToGCSetGuildInfoResponse.prototype.result = 0;
    
        /**
         * Creates a new CMsgClientToGCSetGuildInfoResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCSetGuildInfoResponse
         * @static
         * @param {ICMsgClientToGCSetGuildInfoResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCSetGuildInfoResponse} CMsgClientToGCSetGuildInfoResponse instance
         */
        CMsgClientToGCSetGuildInfoResponse.create = function create(properties) {
            return new CMsgClientToGCSetGuildInfoResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCSetGuildInfoResponse message. Does not implicitly {@link CMsgClientToGCSetGuildInfoResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCSetGuildInfoResponse
         * @static
         * @param {ICMsgClientToGCSetGuildInfoResponse} message CMsgClientToGCSetGuildInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCSetGuildInfoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCSetGuildInfoResponse message, length delimited. Does not implicitly {@link CMsgClientToGCSetGuildInfoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCSetGuildInfoResponse
         * @static
         * @param {ICMsgClientToGCSetGuildInfoResponse} message CMsgClientToGCSetGuildInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCSetGuildInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCSetGuildInfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCSetGuildInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCSetGuildInfoResponse} CMsgClientToGCSetGuildInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCSetGuildInfoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCSetGuildInfoResponse();
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
         * Decodes a CMsgClientToGCSetGuildInfoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCSetGuildInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCSetGuildInfoResponse} CMsgClientToGCSetGuildInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCSetGuildInfoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCSetGuildInfoResponse message.
         * @function verify
         * @memberof CMsgClientToGCSetGuildInfoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCSetGuildInfoResponse.verify = function verify(message) {
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
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCSetGuildInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCSetGuildInfoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCSetGuildInfoResponse} CMsgClientToGCSetGuildInfoResponse
         */
        CMsgClientToGCSetGuildInfoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCSetGuildInfoResponse)
                return object;
            var message = new $root.CMsgClientToGCSetGuildInfoResponse();
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
            case "k_eInvalidGuild":
            case 5:
                message.result = 5;
                break;
            case "k_eNotMember":
            case 6:
                message.result = 6;
                break;
            case "k_eNoPermission":
            case 7:
                message.result = 7;
                break;
            case "k_eMotDTooLong":
            case 8:
                message.result = 8;
                break;
            case "k_eNameChangeNoPermissions":
            case 9:
                message.result = 9;
                break;
            case "k_eTagChangeNoPermissions":
            case 10:
                message.result = 10;
                break;
            case "k_eNameInvalid":
            case 11:
                message.result = 11;
                break;
            case "k_eTagInvalid":
            case 12:
                message.result = 12;
                break;
            case "k_eDescriptionInvalid":
            case 13:
                message.result = 13;
                break;
            case "k_eBlocked":
            case 14:
                message.result = 14;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCSetGuildInfoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCSetGuildInfoResponse
         * @static
         * @param {CMsgClientToGCSetGuildInfoResponse} message CMsgClientToGCSetGuildInfoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCSetGuildInfoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = options.enums === String ? "k_eInternalError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCSetGuildInfoResponse.EResponse[message.result] : message.result;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCSetGuildInfoResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCSetGuildInfoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCSetGuildInfoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCSetGuildInfoResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidGuild=5 k_eInvalidGuild value
         * @property {number} k_eNotMember=6 k_eNotMember value
         * @property {number} k_eNoPermission=7 k_eNoPermission value
         * @property {number} k_eMotDTooLong=8 k_eMotDTooLong value
         * @property {number} k_eNameChangeNoPermissions=9 k_eNameChangeNoPermissions value
         * @property {number} k_eTagChangeNoPermissions=10 k_eTagChangeNoPermissions value
         * @property {number} k_eNameInvalid=11 k_eNameInvalid value
         * @property {number} k_eTagInvalid=12 k_eTagInvalid value
         * @property {number} k_eDescriptionInvalid=13 k_eDescriptionInvalid value
         * @property {number} k_eBlocked=14 k_eBlocked value
         */
        CMsgClientToGCSetGuildInfoResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidGuild"] = 5;
            values[valuesById[6] = "k_eNotMember"] = 6;
            values[valuesById[7] = "k_eNoPermission"] = 7;
            values[valuesById[8] = "k_eMotDTooLong"] = 8;
            values[valuesById[9] = "k_eNameChangeNoPermissions"] = 9;
            values[valuesById[10] = "k_eTagChangeNoPermissions"] = 10;
            values[valuesById[11] = "k_eNameInvalid"] = 11;
            values[valuesById[12] = "k_eTagInvalid"] = 12;
            values[valuesById[13] = "k_eDescriptionInvalid"] = 13;
            values[valuesById[14] = "k_eBlocked"] = 14;
            return values;
        })();
    
        return CMsgClientToGCSetGuildInfoResponse;
    })();
    
    $root.CMsgClientToGCRequestGuildData = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestGuildData.
         * @exports ICMsgClientToGCRequestGuildData
         * @interface ICMsgClientToGCRequestGuildData
         * @property {number|null} [guild_id] CMsgClientToGCRequestGuildData guild_id
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestGuildData.
         * @exports CMsgClientToGCRequestGuildData
         * @classdesc Represents a CMsgClientToGCRequestGuildData.
         * @implements ICMsgClientToGCRequestGuildData
         * @constructor
         * @param {ICMsgClientToGCRequestGuildData=} [properties] Properties to set
         */
        function CMsgClientToGCRequestGuildData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestGuildData guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCRequestGuildData
         * @instance
         */
        CMsgClientToGCRequestGuildData.prototype.guild_id = 0;
    
        /**
         * Creates a new CMsgClientToGCRequestGuildData instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestGuildData
         * @static
         * @param {ICMsgClientToGCRequestGuildData=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestGuildData} CMsgClientToGCRequestGuildData instance
         */
        CMsgClientToGCRequestGuildData.create = function create(properties) {
            return new CMsgClientToGCRequestGuildData(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildData message. Does not implicitly {@link CMsgClientToGCRequestGuildData.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestGuildData
         * @static
         * @param {ICMsgClientToGCRequestGuildData} message CMsgClientToGCRequestGuildData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildData message, length delimited. Does not implicitly {@link CMsgClientToGCRequestGuildData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestGuildData
         * @static
         * @param {ICMsgClientToGCRequestGuildData} message CMsgClientToGCRequestGuildData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestGuildData message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestGuildData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestGuildData} CMsgClientToGCRequestGuildData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestGuildData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestGuildData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestGuildData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestGuildData} CMsgClientToGCRequestGuildData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestGuildData message.
         * @function verify
         * @memberof CMsgClientToGCRequestGuildData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestGuildData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestGuildData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestGuildData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestGuildData} CMsgClientToGCRequestGuildData
         */
        CMsgClientToGCRequestGuildData.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestGuildData)
                return object;
            var message = new $root.CMsgClientToGCRequestGuildData();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestGuildData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestGuildData
         * @static
         * @param {CMsgClientToGCRequestGuildData} message CMsgClientToGCRequestGuildData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestGuildData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.guild_id = 0;
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestGuildData to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestGuildData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestGuildData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCRequestGuildData;
    })();
    
    $root.CMsgClientToGCRequestGuildDataResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestGuildDataResponse.
         * @exports ICMsgClientToGCRequestGuildDataResponse
         * @interface ICMsgClientToGCRequestGuildDataResponse
         * @property {CMsgClientToGCRequestGuildDataResponse.EResponse|null} [result] CMsgClientToGCRequestGuildDataResponse result
         * @property {ICMsgGuildData|null} [guild_data] CMsgClientToGCRequestGuildDataResponse guild_data
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestGuildDataResponse.
         * @exports CMsgClientToGCRequestGuildDataResponse
         * @classdesc Represents a CMsgClientToGCRequestGuildDataResponse.
         * @implements ICMsgClientToGCRequestGuildDataResponse
         * @constructor
         * @param {ICMsgClientToGCRequestGuildDataResponse=} [properties] Properties to set
         */
        function CMsgClientToGCRequestGuildDataResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestGuildDataResponse result.
         * @member {CMsgClientToGCRequestGuildDataResponse.EResponse} result
         * @memberof CMsgClientToGCRequestGuildDataResponse
         * @instance
         */
        CMsgClientToGCRequestGuildDataResponse.prototype.result = 0;
    
        /**
         * CMsgClientToGCRequestGuildDataResponse guild_data.
         * @member {ICMsgGuildData|null|undefined} guild_data
         * @memberof CMsgClientToGCRequestGuildDataResponse
         * @instance
         */
        CMsgClientToGCRequestGuildDataResponse.prototype.guild_data = null;
    
        /**
         * Creates a new CMsgClientToGCRequestGuildDataResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestGuildDataResponse
         * @static
         * @param {ICMsgClientToGCRequestGuildDataResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestGuildDataResponse} CMsgClientToGCRequestGuildDataResponse instance
         */
        CMsgClientToGCRequestGuildDataResponse.create = function create(properties) {
            return new CMsgClientToGCRequestGuildDataResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildDataResponse message. Does not implicitly {@link CMsgClientToGCRequestGuildDataResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestGuildDataResponse
         * @static
         * @param {ICMsgClientToGCRequestGuildDataResponse} message CMsgClientToGCRequestGuildDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildDataResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.guild_data != null && Object.hasOwnProperty.call(message, "guild_data"))
                $root.CMsgGuildData.encode(message.guild_data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildDataResponse message, length delimited. Does not implicitly {@link CMsgClientToGCRequestGuildDataResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestGuildDataResponse
         * @static
         * @param {ICMsgClientToGCRequestGuildDataResponse} message CMsgClientToGCRequestGuildDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildDataResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestGuildDataResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestGuildDataResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestGuildDataResponse} CMsgClientToGCRequestGuildDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildDataResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestGuildDataResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.guild_data = $root.CMsgGuildData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestGuildDataResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestGuildDataResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestGuildDataResponse} CMsgClientToGCRequestGuildDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildDataResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestGuildDataResponse message.
         * @function verify
         * @memberof CMsgClientToGCRequestGuildDataResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestGuildDataResponse.verify = function verify(message) {
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
                    break;
                }
            if (message.guild_data != null && message.hasOwnProperty("guild_data")) {
                var error = $root.CMsgGuildData.verify(message.guild_data);
                if (error)
                    return "guild_data." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestGuildDataResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestGuildDataResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestGuildDataResponse} CMsgClientToGCRequestGuildDataResponse
         */
        CMsgClientToGCRequestGuildDataResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestGuildDataResponse)
                return object;
            var message = new $root.CMsgClientToGCRequestGuildDataResponse();
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
            case "k_eInvalidGuild":
            case 5:
                message.result = 5;
                break;
            case "k_eNotMember":
            case 6:
                message.result = 6;
                break;
            }
            if (object.guild_data != null) {
                if (typeof object.guild_data !== "object")
                    throw TypeError(".CMsgClientToGCRequestGuildDataResponse.guild_data: object expected");
                message.guild_data = $root.CMsgGuildData.fromObject(object.guild_data);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestGuildDataResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestGuildDataResponse
         * @static
         * @param {CMsgClientToGCRequestGuildDataResponse} message CMsgClientToGCRequestGuildDataResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestGuildDataResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = options.enums === String ? "k_eInternalError" : 0;
                object.guild_data = null;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCRequestGuildDataResponse.EResponse[message.result] : message.result;
            if (message.guild_data != null && message.hasOwnProperty("guild_data"))
                object.guild_data = $root.CMsgGuildData.toObject(message.guild_data, options);
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestGuildDataResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestGuildDataResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestGuildDataResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCRequestGuildDataResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidGuild=5 k_eInvalidGuild value
         * @property {number} k_eNotMember=6 k_eNotMember value
         */
        CMsgClientToGCRequestGuildDataResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidGuild"] = 5;
            values[valuesById[6] = "k_eNotMember"] = 6;
            return values;
        })();
    
        return CMsgClientToGCRequestGuildDataResponse;
    })();
    
    $root.CMsgGCToClientGuildDataUpdated = (function() {
    
        /**
         * Properties of a CMsgGCToClientGuildDataUpdated.
         * @exports ICMsgGCToClientGuildDataUpdated
         * @interface ICMsgGCToClientGuildDataUpdated
         * @property {ICMsgGuildData|null} [guild_data] CMsgGCToClientGuildDataUpdated guild_data
         * @property {number|null} [update_flags] CMsgGCToClientGuildDataUpdated update_flags
         */
    
        /**
         * Constructs a new CMsgGCToClientGuildDataUpdated.
         * @exports CMsgGCToClientGuildDataUpdated
         * @classdesc Represents a CMsgGCToClientGuildDataUpdated.
         * @implements ICMsgGCToClientGuildDataUpdated
         * @constructor
         * @param {ICMsgGCToClientGuildDataUpdated=} [properties] Properties to set
         */
        function CMsgGCToClientGuildDataUpdated(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGCToClientGuildDataUpdated guild_data.
         * @member {ICMsgGuildData|null|undefined} guild_data
         * @memberof CMsgGCToClientGuildDataUpdated
         * @instance
         */
        CMsgGCToClientGuildDataUpdated.prototype.guild_data = null;
    
        /**
         * CMsgGCToClientGuildDataUpdated update_flags.
         * @member {number} update_flags
         * @memberof CMsgGCToClientGuildDataUpdated
         * @instance
         */
        CMsgGCToClientGuildDataUpdated.prototype.update_flags = 0;
    
        /**
         * Creates a new CMsgGCToClientGuildDataUpdated instance using the specified properties.
         * @function create
         * @memberof CMsgGCToClientGuildDataUpdated
         * @static
         * @param {ICMsgGCToClientGuildDataUpdated=} [properties] Properties to set
         * @returns {CMsgGCToClientGuildDataUpdated} CMsgGCToClientGuildDataUpdated instance
         */
        CMsgGCToClientGuildDataUpdated.create = function create(properties) {
            return new CMsgGCToClientGuildDataUpdated(properties);
        };
    
        /**
         * Encodes the specified CMsgGCToClientGuildDataUpdated message. Does not implicitly {@link CMsgGCToClientGuildDataUpdated.verify|verify} messages.
         * @function encode
         * @memberof CMsgGCToClientGuildDataUpdated
         * @static
         * @param {ICMsgGCToClientGuildDataUpdated} message CMsgGCToClientGuildDataUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCToClientGuildDataUpdated.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_data != null && Object.hasOwnProperty.call(message, "guild_data"))
                $root.CMsgGuildData.encode(message.guild_data, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.update_flags != null && Object.hasOwnProperty.call(message, "update_flags"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.update_flags);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGCToClientGuildDataUpdated message, length delimited. Does not implicitly {@link CMsgGCToClientGuildDataUpdated.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGCToClientGuildDataUpdated
         * @static
         * @param {ICMsgGCToClientGuildDataUpdated} message CMsgGCToClientGuildDataUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCToClientGuildDataUpdated.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGCToClientGuildDataUpdated message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGCToClientGuildDataUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGCToClientGuildDataUpdated} CMsgGCToClientGuildDataUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCToClientGuildDataUpdated.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCToClientGuildDataUpdated();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_data = $root.CMsgGuildData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.update_flags = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGCToClientGuildDataUpdated message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGCToClientGuildDataUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGCToClientGuildDataUpdated} CMsgGCToClientGuildDataUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCToClientGuildDataUpdated.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGCToClientGuildDataUpdated message.
         * @function verify
         * @memberof CMsgGCToClientGuildDataUpdated
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGCToClientGuildDataUpdated.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_data != null && message.hasOwnProperty("guild_data")) {
                var error = $root.CMsgGuildData.verify(message.guild_data);
                if (error)
                    return "guild_data." + error;
            }
            if (message.update_flags != null && message.hasOwnProperty("update_flags"))
                if (!$util.isInteger(message.update_flags))
                    return "update_flags: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgGCToClientGuildDataUpdated message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGCToClientGuildDataUpdated
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGCToClientGuildDataUpdated} CMsgGCToClientGuildDataUpdated
         */
        CMsgGCToClientGuildDataUpdated.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGCToClientGuildDataUpdated)
                return object;
            var message = new $root.CMsgGCToClientGuildDataUpdated();
            if (object.guild_data != null) {
                if (typeof object.guild_data !== "object")
                    throw TypeError(".CMsgGCToClientGuildDataUpdated.guild_data: object expected");
                message.guild_data = $root.CMsgGuildData.fromObject(object.guild_data);
            }
            if (object.update_flags != null)
                message.update_flags = object.update_flags >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGCToClientGuildDataUpdated message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGCToClientGuildDataUpdated
         * @static
         * @param {CMsgGCToClientGuildDataUpdated} message CMsgGCToClientGuildDataUpdated
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGCToClientGuildDataUpdated.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_data = null;
                object.update_flags = 0;
            }
            if (message.guild_data != null && message.hasOwnProperty("guild_data"))
                object.guild_data = $root.CMsgGuildData.toObject(message.guild_data, options);
            if (message.update_flags != null && message.hasOwnProperty("update_flags"))
                object.update_flags = message.update_flags;
            return object;
        };
    
        /**
         * Converts this CMsgGCToClientGuildDataUpdated to JSON.
         * @function toJSON
         * @memberof CMsgGCToClientGuildDataUpdated
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGCToClientGuildDataUpdated.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGCToClientGuildDataUpdated;
    })();
    
    $root.CMsgGCToClientGuildMembersDataUpdated = (function() {
    
        /**
         * Properties of a CMsgGCToClientGuildMembersDataUpdated.
         * @exports ICMsgGCToClientGuildMembersDataUpdated
         * @interface ICMsgGCToClientGuildMembersDataUpdated
         * @property {number|null} [guild_id] CMsgGCToClientGuildMembersDataUpdated guild_id
         * @property {Array.<ICMsgGuildMember>|null} [members_data] CMsgGCToClientGuildMembersDataUpdated members_data
         */
    
        /**
         * Constructs a new CMsgGCToClientGuildMembersDataUpdated.
         * @exports CMsgGCToClientGuildMembersDataUpdated
         * @classdesc Represents a CMsgGCToClientGuildMembersDataUpdated.
         * @implements ICMsgGCToClientGuildMembersDataUpdated
         * @constructor
         * @param {ICMsgGCToClientGuildMembersDataUpdated=} [properties] Properties to set
         */
        function CMsgGCToClientGuildMembersDataUpdated(properties) {
            this.members_data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGCToClientGuildMembersDataUpdated guild_id.
         * @member {number} guild_id
         * @memberof CMsgGCToClientGuildMembersDataUpdated
         * @instance
         */
        CMsgGCToClientGuildMembersDataUpdated.prototype.guild_id = 0;
    
        /**
         * CMsgGCToClientGuildMembersDataUpdated members_data.
         * @member {Array.<ICMsgGuildMember>} members_data
         * @memberof CMsgGCToClientGuildMembersDataUpdated
         * @instance
         */
        CMsgGCToClientGuildMembersDataUpdated.prototype.members_data = $util.emptyArray;
    
        /**
         * Creates a new CMsgGCToClientGuildMembersDataUpdated instance using the specified properties.
         * @function create
         * @memberof CMsgGCToClientGuildMembersDataUpdated
         * @static
         * @param {ICMsgGCToClientGuildMembersDataUpdated=} [properties] Properties to set
         * @returns {CMsgGCToClientGuildMembersDataUpdated} CMsgGCToClientGuildMembersDataUpdated instance
         */
        CMsgGCToClientGuildMembersDataUpdated.create = function create(properties) {
            return new CMsgGCToClientGuildMembersDataUpdated(properties);
        };
    
        /**
         * Encodes the specified CMsgGCToClientGuildMembersDataUpdated message. Does not implicitly {@link CMsgGCToClientGuildMembersDataUpdated.verify|verify} messages.
         * @function encode
         * @memberof CMsgGCToClientGuildMembersDataUpdated
         * @static
         * @param {ICMsgGCToClientGuildMembersDataUpdated} message CMsgGCToClientGuildMembersDataUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCToClientGuildMembersDataUpdated.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.members_data != null && message.members_data.length)
                for (var i = 0; i < message.members_data.length; ++i)
                    $root.CMsgGuildMember.encode(message.members_data[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGCToClientGuildMembersDataUpdated message, length delimited. Does not implicitly {@link CMsgGCToClientGuildMembersDataUpdated.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGCToClientGuildMembersDataUpdated
         * @static
         * @param {ICMsgGCToClientGuildMembersDataUpdated} message CMsgGCToClientGuildMembersDataUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCToClientGuildMembersDataUpdated.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGCToClientGuildMembersDataUpdated message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGCToClientGuildMembersDataUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGCToClientGuildMembersDataUpdated} CMsgGCToClientGuildMembersDataUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCToClientGuildMembersDataUpdated.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCToClientGuildMembersDataUpdated();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    if (!(message.members_data && message.members_data.length))
                        message.members_data = [];
                    message.members_data.push($root.CMsgGuildMember.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGCToClientGuildMembersDataUpdated message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGCToClientGuildMembersDataUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGCToClientGuildMembersDataUpdated} CMsgGCToClientGuildMembersDataUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCToClientGuildMembersDataUpdated.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGCToClientGuildMembersDataUpdated message.
         * @function verify
         * @memberof CMsgGCToClientGuildMembersDataUpdated
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGCToClientGuildMembersDataUpdated.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.members_data != null && message.hasOwnProperty("members_data")) {
                if (!Array.isArray(message.members_data))
                    return "members_data: array expected";
                for (var i = 0; i < message.members_data.length; ++i) {
                    var error = $root.CMsgGuildMember.verify(message.members_data[i]);
                    if (error)
                        return "members_data." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgGCToClientGuildMembersDataUpdated message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGCToClientGuildMembersDataUpdated
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGCToClientGuildMembersDataUpdated} CMsgGCToClientGuildMembersDataUpdated
         */
        CMsgGCToClientGuildMembersDataUpdated.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGCToClientGuildMembersDataUpdated)
                return object;
            var message = new $root.CMsgGCToClientGuildMembersDataUpdated();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            if (object.members_data) {
                if (!Array.isArray(object.members_data))
                    throw TypeError(".CMsgGCToClientGuildMembersDataUpdated.members_data: array expected");
                message.members_data = [];
                for (var i = 0; i < object.members_data.length; ++i) {
                    if (typeof object.members_data[i] !== "object")
                        throw TypeError(".CMsgGCToClientGuildMembersDataUpdated.members_data: object expected");
                    message.members_data[i] = $root.CMsgGuildMember.fromObject(object.members_data[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGCToClientGuildMembersDataUpdated message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGCToClientGuildMembersDataUpdated
         * @static
         * @param {CMsgGCToClientGuildMembersDataUpdated} message CMsgGCToClientGuildMembersDataUpdated
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGCToClientGuildMembersDataUpdated.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.members_data = [];
            if (options.defaults)
                object.guild_id = 0;
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.members_data && message.members_data.length) {
                object.members_data = [];
                for (var j = 0; j < message.members_data.length; ++j)
                    object.members_data[j] = $root.CMsgGuildMember.toObject(message.members_data[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgGCToClientGuildMembersDataUpdated to JSON.
         * @function toJSON
         * @memberof CMsgGCToClientGuildMembersDataUpdated
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGCToClientGuildMembersDataUpdated.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGCToClientGuildMembersDataUpdated;
    })();
    
    $root.CMsgClientToGCRequestGuildMembership = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestGuildMembership.
         * @exports ICMsgClientToGCRequestGuildMembership
         * @interface ICMsgClientToGCRequestGuildMembership
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestGuildMembership.
         * @exports CMsgClientToGCRequestGuildMembership
         * @classdesc Represents a CMsgClientToGCRequestGuildMembership.
         * @implements ICMsgClientToGCRequestGuildMembership
         * @constructor
         * @param {ICMsgClientToGCRequestGuildMembership=} [properties] Properties to set
         */
        function CMsgClientToGCRequestGuildMembership(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CMsgClientToGCRequestGuildMembership instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestGuildMembership
         * @static
         * @param {ICMsgClientToGCRequestGuildMembership=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestGuildMembership} CMsgClientToGCRequestGuildMembership instance
         */
        CMsgClientToGCRequestGuildMembership.create = function create(properties) {
            return new CMsgClientToGCRequestGuildMembership(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildMembership message. Does not implicitly {@link CMsgClientToGCRequestGuildMembership.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestGuildMembership
         * @static
         * @param {ICMsgClientToGCRequestGuildMembership} message CMsgClientToGCRequestGuildMembership message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildMembership.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildMembership message, length delimited. Does not implicitly {@link CMsgClientToGCRequestGuildMembership.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestGuildMembership
         * @static
         * @param {ICMsgClientToGCRequestGuildMembership} message CMsgClientToGCRequestGuildMembership message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildMembership.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestGuildMembership message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestGuildMembership
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestGuildMembership} CMsgClientToGCRequestGuildMembership
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildMembership.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestGuildMembership();
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
         * Decodes a CMsgClientToGCRequestGuildMembership message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestGuildMembership
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestGuildMembership} CMsgClientToGCRequestGuildMembership
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildMembership.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestGuildMembership message.
         * @function verify
         * @memberof CMsgClientToGCRequestGuildMembership
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestGuildMembership.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestGuildMembership message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestGuildMembership
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestGuildMembership} CMsgClientToGCRequestGuildMembership
         */
        CMsgClientToGCRequestGuildMembership.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestGuildMembership)
                return object;
            return new $root.CMsgClientToGCRequestGuildMembership();
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestGuildMembership message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestGuildMembership
         * @static
         * @param {CMsgClientToGCRequestGuildMembership} message CMsgClientToGCRequestGuildMembership
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestGuildMembership.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CMsgClientToGCRequestGuildMembership to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestGuildMembership
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestGuildMembership.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCRequestGuildMembership;
    })();
    
    $root.CMsgClientToGCRequestGuildMembershipResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestGuildMembershipResponse.
         * @exports ICMsgClientToGCRequestGuildMembershipResponse
         * @interface ICMsgClientToGCRequestGuildMembershipResponse
         * @property {CMsgClientToGCRequestGuildMembershipResponse.EResponse|null} [result] CMsgClientToGCRequestGuildMembershipResponse result
         * @property {ICMsgAccountGuildMemberships|null} [guild_memberships] CMsgClientToGCRequestGuildMembershipResponse guild_memberships
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestGuildMembershipResponse.
         * @exports CMsgClientToGCRequestGuildMembershipResponse
         * @classdesc Represents a CMsgClientToGCRequestGuildMembershipResponse.
         * @implements ICMsgClientToGCRequestGuildMembershipResponse
         * @constructor
         * @param {ICMsgClientToGCRequestGuildMembershipResponse=} [properties] Properties to set
         */
        function CMsgClientToGCRequestGuildMembershipResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestGuildMembershipResponse result.
         * @member {CMsgClientToGCRequestGuildMembershipResponse.EResponse} result
         * @memberof CMsgClientToGCRequestGuildMembershipResponse
         * @instance
         */
        CMsgClientToGCRequestGuildMembershipResponse.prototype.result = 0;
    
        /**
         * CMsgClientToGCRequestGuildMembershipResponse guild_memberships.
         * @member {ICMsgAccountGuildMemberships|null|undefined} guild_memberships
         * @memberof CMsgClientToGCRequestGuildMembershipResponse
         * @instance
         */
        CMsgClientToGCRequestGuildMembershipResponse.prototype.guild_memberships = null;
    
        /**
         * Creates a new CMsgClientToGCRequestGuildMembershipResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestGuildMembershipResponse
         * @static
         * @param {ICMsgClientToGCRequestGuildMembershipResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestGuildMembershipResponse} CMsgClientToGCRequestGuildMembershipResponse instance
         */
        CMsgClientToGCRequestGuildMembershipResponse.create = function create(properties) {
            return new CMsgClientToGCRequestGuildMembershipResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildMembershipResponse message. Does not implicitly {@link CMsgClientToGCRequestGuildMembershipResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestGuildMembershipResponse
         * @static
         * @param {ICMsgClientToGCRequestGuildMembershipResponse} message CMsgClientToGCRequestGuildMembershipResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildMembershipResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.guild_memberships != null && Object.hasOwnProperty.call(message, "guild_memberships"))
                $root.CMsgAccountGuildMemberships.encode(message.guild_memberships, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildMembershipResponse message, length delimited. Does not implicitly {@link CMsgClientToGCRequestGuildMembershipResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestGuildMembershipResponse
         * @static
         * @param {ICMsgClientToGCRequestGuildMembershipResponse} message CMsgClientToGCRequestGuildMembershipResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildMembershipResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestGuildMembershipResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestGuildMembershipResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestGuildMembershipResponse} CMsgClientToGCRequestGuildMembershipResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildMembershipResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestGuildMembershipResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.guild_memberships = $root.CMsgAccountGuildMemberships.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestGuildMembershipResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestGuildMembershipResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestGuildMembershipResponse} CMsgClientToGCRequestGuildMembershipResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildMembershipResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestGuildMembershipResponse message.
         * @function verify
         * @memberof CMsgClientToGCRequestGuildMembershipResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestGuildMembershipResponse.verify = function verify(message) {
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
                    break;
                }
            if (message.guild_memberships != null && message.hasOwnProperty("guild_memberships")) {
                var error = $root.CMsgAccountGuildMemberships.verify(message.guild_memberships);
                if (error)
                    return "guild_memberships." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestGuildMembershipResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestGuildMembershipResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestGuildMembershipResponse} CMsgClientToGCRequestGuildMembershipResponse
         */
        CMsgClientToGCRequestGuildMembershipResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestGuildMembershipResponse)
                return object;
            var message = new $root.CMsgClientToGCRequestGuildMembershipResponse();
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
            }
            if (object.guild_memberships != null) {
                if (typeof object.guild_memberships !== "object")
                    throw TypeError(".CMsgClientToGCRequestGuildMembershipResponse.guild_memberships: object expected");
                message.guild_memberships = $root.CMsgAccountGuildMemberships.fromObject(object.guild_memberships);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestGuildMembershipResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestGuildMembershipResponse
         * @static
         * @param {CMsgClientToGCRequestGuildMembershipResponse} message CMsgClientToGCRequestGuildMembershipResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestGuildMembershipResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = options.enums === String ? "k_eInternalError" : 0;
                object.guild_memberships = null;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCRequestGuildMembershipResponse.EResponse[message.result] : message.result;
            if (message.guild_memberships != null && message.hasOwnProperty("guild_memberships"))
                object.guild_memberships = $root.CMsgAccountGuildMemberships.toObject(message.guild_memberships, options);
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestGuildMembershipResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestGuildMembershipResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestGuildMembershipResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCRequestGuildMembershipResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         */
        CMsgClientToGCRequestGuildMembershipResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            return values;
        })();
    
        return CMsgClientToGCRequestGuildMembershipResponse;
    })();
    
    $root.CMsgGCToClientGuildMembershipUpdated = (function() {
    
        /**
         * Properties of a CMsgGCToClientGuildMembershipUpdated.
         * @exports ICMsgGCToClientGuildMembershipUpdated
         * @interface ICMsgGCToClientGuildMembershipUpdated
         * @property {ICMsgAccountGuildMemberships|null} [guild_memberships] CMsgGCToClientGuildMembershipUpdated guild_memberships
         */
    
        /**
         * Constructs a new CMsgGCToClientGuildMembershipUpdated.
         * @exports CMsgGCToClientGuildMembershipUpdated
         * @classdesc Represents a CMsgGCToClientGuildMembershipUpdated.
         * @implements ICMsgGCToClientGuildMembershipUpdated
         * @constructor
         * @param {ICMsgGCToClientGuildMembershipUpdated=} [properties] Properties to set
         */
        function CMsgGCToClientGuildMembershipUpdated(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGCToClientGuildMembershipUpdated guild_memberships.
         * @member {ICMsgAccountGuildMemberships|null|undefined} guild_memberships
         * @memberof CMsgGCToClientGuildMembershipUpdated
         * @instance
         */
        CMsgGCToClientGuildMembershipUpdated.prototype.guild_memberships = null;
    
        /**
         * Creates a new CMsgGCToClientGuildMembershipUpdated instance using the specified properties.
         * @function create
         * @memberof CMsgGCToClientGuildMembershipUpdated
         * @static
         * @param {ICMsgGCToClientGuildMembershipUpdated=} [properties] Properties to set
         * @returns {CMsgGCToClientGuildMembershipUpdated} CMsgGCToClientGuildMembershipUpdated instance
         */
        CMsgGCToClientGuildMembershipUpdated.create = function create(properties) {
            return new CMsgGCToClientGuildMembershipUpdated(properties);
        };
    
        /**
         * Encodes the specified CMsgGCToClientGuildMembershipUpdated message. Does not implicitly {@link CMsgGCToClientGuildMembershipUpdated.verify|verify} messages.
         * @function encode
         * @memberof CMsgGCToClientGuildMembershipUpdated
         * @static
         * @param {ICMsgGCToClientGuildMembershipUpdated} message CMsgGCToClientGuildMembershipUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCToClientGuildMembershipUpdated.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_memberships != null && Object.hasOwnProperty.call(message, "guild_memberships"))
                $root.CMsgAccountGuildMemberships.encode(message.guild_memberships, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGCToClientGuildMembershipUpdated message, length delimited. Does not implicitly {@link CMsgGCToClientGuildMembershipUpdated.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGCToClientGuildMembershipUpdated
         * @static
         * @param {ICMsgGCToClientGuildMembershipUpdated} message CMsgGCToClientGuildMembershipUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCToClientGuildMembershipUpdated.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGCToClientGuildMembershipUpdated message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGCToClientGuildMembershipUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGCToClientGuildMembershipUpdated} CMsgGCToClientGuildMembershipUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCToClientGuildMembershipUpdated.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCToClientGuildMembershipUpdated();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_memberships = $root.CMsgAccountGuildMemberships.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGCToClientGuildMembershipUpdated message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGCToClientGuildMembershipUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGCToClientGuildMembershipUpdated} CMsgGCToClientGuildMembershipUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCToClientGuildMembershipUpdated.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGCToClientGuildMembershipUpdated message.
         * @function verify
         * @memberof CMsgGCToClientGuildMembershipUpdated
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGCToClientGuildMembershipUpdated.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_memberships != null && message.hasOwnProperty("guild_memberships")) {
                var error = $root.CMsgAccountGuildMemberships.verify(message.guild_memberships);
                if (error)
                    return "guild_memberships." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgGCToClientGuildMembershipUpdated message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGCToClientGuildMembershipUpdated
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGCToClientGuildMembershipUpdated} CMsgGCToClientGuildMembershipUpdated
         */
        CMsgGCToClientGuildMembershipUpdated.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGCToClientGuildMembershipUpdated)
                return object;
            var message = new $root.CMsgGCToClientGuildMembershipUpdated();
            if (object.guild_memberships != null) {
                if (typeof object.guild_memberships !== "object")
                    throw TypeError(".CMsgGCToClientGuildMembershipUpdated.guild_memberships: object expected");
                message.guild_memberships = $root.CMsgAccountGuildMemberships.fromObject(object.guild_memberships);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGCToClientGuildMembershipUpdated message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGCToClientGuildMembershipUpdated
         * @static
         * @param {CMsgGCToClientGuildMembershipUpdated} message CMsgGCToClientGuildMembershipUpdated
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGCToClientGuildMembershipUpdated.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.guild_memberships = null;
            if (message.guild_memberships != null && message.hasOwnProperty("guild_memberships"))
                object.guild_memberships = $root.CMsgAccountGuildMemberships.toObject(message.guild_memberships, options);
            return object;
        };
    
        /**
         * Converts this CMsgGCToClientGuildMembershipUpdated to JSON.
         * @function toJSON
         * @memberof CMsgGCToClientGuildMembershipUpdated
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGCToClientGuildMembershipUpdated.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGCToClientGuildMembershipUpdated;
    })();
    
    $root.CMsgClientToGCRequestGuildSummary = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestGuildSummary.
         * @exports ICMsgClientToGCRequestGuildSummary
         * @interface ICMsgClientToGCRequestGuildSummary
         * @property {number|null} [guild_id] CMsgClientToGCRequestGuildSummary guild_id
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestGuildSummary.
         * @exports CMsgClientToGCRequestGuildSummary
         * @classdesc Represents a CMsgClientToGCRequestGuildSummary.
         * @implements ICMsgClientToGCRequestGuildSummary
         * @constructor
         * @param {ICMsgClientToGCRequestGuildSummary=} [properties] Properties to set
         */
        function CMsgClientToGCRequestGuildSummary(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestGuildSummary guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCRequestGuildSummary
         * @instance
         */
        CMsgClientToGCRequestGuildSummary.prototype.guild_id = 0;
    
        /**
         * Creates a new CMsgClientToGCRequestGuildSummary instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestGuildSummary
         * @static
         * @param {ICMsgClientToGCRequestGuildSummary=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestGuildSummary} CMsgClientToGCRequestGuildSummary instance
         */
        CMsgClientToGCRequestGuildSummary.create = function create(properties) {
            return new CMsgClientToGCRequestGuildSummary(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildSummary message. Does not implicitly {@link CMsgClientToGCRequestGuildSummary.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestGuildSummary
         * @static
         * @param {ICMsgClientToGCRequestGuildSummary} message CMsgClientToGCRequestGuildSummary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildSummary.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildSummary message, length delimited. Does not implicitly {@link CMsgClientToGCRequestGuildSummary.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestGuildSummary
         * @static
         * @param {ICMsgClientToGCRequestGuildSummary} message CMsgClientToGCRequestGuildSummary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildSummary.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestGuildSummary message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestGuildSummary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestGuildSummary} CMsgClientToGCRequestGuildSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildSummary.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestGuildSummary();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestGuildSummary message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestGuildSummary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestGuildSummary} CMsgClientToGCRequestGuildSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildSummary.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestGuildSummary message.
         * @function verify
         * @memberof CMsgClientToGCRequestGuildSummary
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestGuildSummary.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestGuildSummary message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestGuildSummary
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestGuildSummary} CMsgClientToGCRequestGuildSummary
         */
        CMsgClientToGCRequestGuildSummary.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestGuildSummary)
                return object;
            var message = new $root.CMsgClientToGCRequestGuildSummary();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestGuildSummary message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestGuildSummary
         * @static
         * @param {CMsgClientToGCRequestGuildSummary} message CMsgClientToGCRequestGuildSummary
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestGuildSummary.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.guild_id = 0;
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestGuildSummary to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestGuildSummary
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestGuildSummary.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCRequestGuildSummary;
    })();
    
    $root.CMsgClientToGCRequestGuildSummaryResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestGuildSummaryResponse.
         * @exports ICMsgClientToGCRequestGuildSummaryResponse
         * @interface ICMsgClientToGCRequestGuildSummaryResponse
         * @property {CMsgClientToGCRequestGuildSummaryResponse.EResponse|null} [result] CMsgClientToGCRequestGuildSummaryResponse result
         * @property {ICMsgGuildSummary|null} [guild_summary] CMsgClientToGCRequestGuildSummaryResponse guild_summary
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestGuildSummaryResponse.
         * @exports CMsgClientToGCRequestGuildSummaryResponse
         * @classdesc Represents a CMsgClientToGCRequestGuildSummaryResponse.
         * @implements ICMsgClientToGCRequestGuildSummaryResponse
         * @constructor
         * @param {ICMsgClientToGCRequestGuildSummaryResponse=} [properties] Properties to set
         */
        function CMsgClientToGCRequestGuildSummaryResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestGuildSummaryResponse result.
         * @member {CMsgClientToGCRequestGuildSummaryResponse.EResponse} result
         * @memberof CMsgClientToGCRequestGuildSummaryResponse
         * @instance
         */
        CMsgClientToGCRequestGuildSummaryResponse.prototype.result = 0;
    
        /**
         * CMsgClientToGCRequestGuildSummaryResponse guild_summary.
         * @member {ICMsgGuildSummary|null|undefined} guild_summary
         * @memberof CMsgClientToGCRequestGuildSummaryResponse
         * @instance
         */
        CMsgClientToGCRequestGuildSummaryResponse.prototype.guild_summary = null;
    
        /**
         * Creates a new CMsgClientToGCRequestGuildSummaryResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestGuildSummaryResponse
         * @static
         * @param {ICMsgClientToGCRequestGuildSummaryResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestGuildSummaryResponse} CMsgClientToGCRequestGuildSummaryResponse instance
         */
        CMsgClientToGCRequestGuildSummaryResponse.create = function create(properties) {
            return new CMsgClientToGCRequestGuildSummaryResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildSummaryResponse message. Does not implicitly {@link CMsgClientToGCRequestGuildSummaryResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestGuildSummaryResponse
         * @static
         * @param {ICMsgClientToGCRequestGuildSummaryResponse} message CMsgClientToGCRequestGuildSummaryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildSummaryResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.guild_summary != null && Object.hasOwnProperty.call(message, "guild_summary"))
                $root.CMsgGuildSummary.encode(message.guild_summary, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildSummaryResponse message, length delimited. Does not implicitly {@link CMsgClientToGCRequestGuildSummaryResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestGuildSummaryResponse
         * @static
         * @param {ICMsgClientToGCRequestGuildSummaryResponse} message CMsgClientToGCRequestGuildSummaryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildSummaryResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestGuildSummaryResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestGuildSummaryResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestGuildSummaryResponse} CMsgClientToGCRequestGuildSummaryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildSummaryResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestGuildSummaryResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.guild_summary = $root.CMsgGuildSummary.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestGuildSummaryResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestGuildSummaryResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestGuildSummaryResponse} CMsgClientToGCRequestGuildSummaryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildSummaryResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestGuildSummaryResponse message.
         * @function verify
         * @memberof CMsgClientToGCRequestGuildSummaryResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestGuildSummaryResponse.verify = function verify(message) {
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
                    break;
                }
            if (message.guild_summary != null && message.hasOwnProperty("guild_summary")) {
                var error = $root.CMsgGuildSummary.verify(message.guild_summary);
                if (error)
                    return "guild_summary." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestGuildSummaryResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestGuildSummaryResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestGuildSummaryResponse} CMsgClientToGCRequestGuildSummaryResponse
         */
        CMsgClientToGCRequestGuildSummaryResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestGuildSummaryResponse)
                return object;
            var message = new $root.CMsgClientToGCRequestGuildSummaryResponse();
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
            case "k_eInvalidGuild":
            case 5:
                message.result = 5;
                break;
            }
            if (object.guild_summary != null) {
                if (typeof object.guild_summary !== "object")
                    throw TypeError(".CMsgClientToGCRequestGuildSummaryResponse.guild_summary: object expected");
                message.guild_summary = $root.CMsgGuildSummary.fromObject(object.guild_summary);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestGuildSummaryResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestGuildSummaryResponse
         * @static
         * @param {CMsgClientToGCRequestGuildSummaryResponse} message CMsgClientToGCRequestGuildSummaryResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestGuildSummaryResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = options.enums === String ? "k_eInternalError" : 0;
                object.guild_summary = null;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCRequestGuildSummaryResponse.EResponse[message.result] : message.result;
            if (message.guild_summary != null && message.hasOwnProperty("guild_summary"))
                object.guild_summary = $root.CMsgGuildSummary.toObject(message.guild_summary, options);
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestGuildSummaryResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestGuildSummaryResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestGuildSummaryResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCRequestGuildSummaryResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidGuild=5 k_eInvalidGuild value
         */
        CMsgClientToGCRequestGuildSummaryResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidGuild"] = 5;
            return values;
        })();
    
        return CMsgClientToGCRequestGuildSummaryResponse;
    })();
    
    $root.CMsgClientToGCJoinGuild = (function() {
    
        /**
         * Properties of a CMsgClientToGCJoinGuild.
         * @exports ICMsgClientToGCJoinGuild
         * @interface ICMsgClientToGCJoinGuild
         * @property {number|null} [guild_id] CMsgClientToGCJoinGuild guild_id
         */
    
        /**
         * Constructs a new CMsgClientToGCJoinGuild.
         * @exports CMsgClientToGCJoinGuild
         * @classdesc Represents a CMsgClientToGCJoinGuild.
         * @implements ICMsgClientToGCJoinGuild
         * @constructor
         * @param {ICMsgClientToGCJoinGuild=} [properties] Properties to set
         */
        function CMsgClientToGCJoinGuild(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCJoinGuild guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCJoinGuild
         * @instance
         */
        CMsgClientToGCJoinGuild.prototype.guild_id = 0;
    
        /**
         * Creates a new CMsgClientToGCJoinGuild instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCJoinGuild
         * @static
         * @param {ICMsgClientToGCJoinGuild=} [properties] Properties to set
         * @returns {CMsgClientToGCJoinGuild} CMsgClientToGCJoinGuild instance
         */
        CMsgClientToGCJoinGuild.create = function create(properties) {
            return new CMsgClientToGCJoinGuild(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCJoinGuild message. Does not implicitly {@link CMsgClientToGCJoinGuild.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCJoinGuild
         * @static
         * @param {ICMsgClientToGCJoinGuild} message CMsgClientToGCJoinGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCJoinGuild.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCJoinGuild message, length delimited. Does not implicitly {@link CMsgClientToGCJoinGuild.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCJoinGuild
         * @static
         * @param {ICMsgClientToGCJoinGuild} message CMsgClientToGCJoinGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCJoinGuild.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCJoinGuild message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCJoinGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCJoinGuild} CMsgClientToGCJoinGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCJoinGuild.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCJoinGuild();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCJoinGuild message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCJoinGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCJoinGuild} CMsgClientToGCJoinGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCJoinGuild.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCJoinGuild message.
         * @function verify
         * @memberof CMsgClientToGCJoinGuild
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCJoinGuild.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCJoinGuild message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCJoinGuild
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCJoinGuild} CMsgClientToGCJoinGuild
         */
        CMsgClientToGCJoinGuild.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCJoinGuild)
                return object;
            var message = new $root.CMsgClientToGCJoinGuild();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCJoinGuild message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCJoinGuild
         * @static
         * @param {CMsgClientToGCJoinGuild} message CMsgClientToGCJoinGuild
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCJoinGuild.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.guild_id = 0;
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCJoinGuild to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCJoinGuild
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCJoinGuild.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCJoinGuild;
    })();
    
    $root.CMsgClientToGCJoinGuildResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCJoinGuildResponse.
         * @exports ICMsgClientToGCJoinGuildResponse
         * @interface ICMsgClientToGCJoinGuildResponse
         * @property {CMsgClientToGCJoinGuildResponse.EResponse|null} [result] CMsgClientToGCJoinGuildResponse result
         */
    
        /**
         * Constructs a new CMsgClientToGCJoinGuildResponse.
         * @exports CMsgClientToGCJoinGuildResponse
         * @classdesc Represents a CMsgClientToGCJoinGuildResponse.
         * @implements ICMsgClientToGCJoinGuildResponse
         * @constructor
         * @param {ICMsgClientToGCJoinGuildResponse=} [properties] Properties to set
         */
        function CMsgClientToGCJoinGuildResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCJoinGuildResponse result.
         * @member {CMsgClientToGCJoinGuildResponse.EResponse} result
         * @memberof CMsgClientToGCJoinGuildResponse
         * @instance
         */
        CMsgClientToGCJoinGuildResponse.prototype.result = 0;
    
        /**
         * Creates a new CMsgClientToGCJoinGuildResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCJoinGuildResponse
         * @static
         * @param {ICMsgClientToGCJoinGuildResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCJoinGuildResponse} CMsgClientToGCJoinGuildResponse instance
         */
        CMsgClientToGCJoinGuildResponse.create = function create(properties) {
            return new CMsgClientToGCJoinGuildResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCJoinGuildResponse message. Does not implicitly {@link CMsgClientToGCJoinGuildResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCJoinGuildResponse
         * @static
         * @param {ICMsgClientToGCJoinGuildResponse} message CMsgClientToGCJoinGuildResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCJoinGuildResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCJoinGuildResponse message, length delimited. Does not implicitly {@link CMsgClientToGCJoinGuildResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCJoinGuildResponse
         * @static
         * @param {ICMsgClientToGCJoinGuildResponse} message CMsgClientToGCJoinGuildResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCJoinGuildResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCJoinGuildResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCJoinGuildResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCJoinGuildResponse} CMsgClientToGCJoinGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCJoinGuildResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCJoinGuildResponse();
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
         * Decodes a CMsgClientToGCJoinGuildResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCJoinGuildResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCJoinGuildResponse} CMsgClientToGCJoinGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCJoinGuildResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCJoinGuildResponse message.
         * @function verify
         * @memberof CMsgClientToGCJoinGuildResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCJoinGuildResponse.verify = function verify(message) {
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
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCJoinGuildResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCJoinGuildResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCJoinGuildResponse} CMsgClientToGCJoinGuildResponse
         */
        CMsgClientToGCJoinGuildResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCJoinGuildResponse)
                return object;
            var message = new $root.CMsgClientToGCJoinGuildResponse();
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
            case "k_eInvalidGuild":
            case 5:
                message.result = 5;
                break;
            case "k_eGuildFull":
            case 6:
                message.result = 6;
                break;
            case "k_eAlreadyMember":
            case 7:
                message.result = 7;
                break;
            case "k_eGuildLimit":
            case 8:
                message.result = 8;
                break;
            case "k_eGuildRequiresInvite":
            case 9:
                message.result = 9;
                break;
            case "k_eGuildRankTooLow":
            case 10:
                message.result = 10;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCJoinGuildResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCJoinGuildResponse
         * @static
         * @param {CMsgClientToGCJoinGuildResponse} message CMsgClientToGCJoinGuildResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCJoinGuildResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = options.enums === String ? "k_eInternalError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCJoinGuildResponse.EResponse[message.result] : message.result;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCJoinGuildResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCJoinGuildResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCJoinGuildResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCJoinGuildResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidGuild=5 k_eInvalidGuild value
         * @property {number} k_eGuildFull=6 k_eGuildFull value
         * @property {number} k_eAlreadyMember=7 k_eAlreadyMember value
         * @property {number} k_eGuildLimit=8 k_eGuildLimit value
         * @property {number} k_eGuildRequiresInvite=9 k_eGuildRequiresInvite value
         * @property {number} k_eGuildRankTooLow=10 k_eGuildRankTooLow value
         */
        CMsgClientToGCJoinGuildResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidGuild"] = 5;
            values[valuesById[6] = "k_eGuildFull"] = 6;
            values[valuesById[7] = "k_eAlreadyMember"] = 7;
            values[valuesById[8] = "k_eGuildLimit"] = 8;
            values[valuesById[9] = "k_eGuildRequiresInvite"] = 9;
            values[valuesById[10] = "k_eGuildRankTooLow"] = 10;
            return values;
        })();
    
        return CMsgClientToGCJoinGuildResponse;
    })();
    
    $root.CMsgClientToGCLeaveGuild = (function() {
    
        /**
         * Properties of a CMsgClientToGCLeaveGuild.
         * @exports ICMsgClientToGCLeaveGuild
         * @interface ICMsgClientToGCLeaveGuild
         * @property {number|null} [guild_id] CMsgClientToGCLeaveGuild guild_id
         */
    
        /**
         * Constructs a new CMsgClientToGCLeaveGuild.
         * @exports CMsgClientToGCLeaveGuild
         * @classdesc Represents a CMsgClientToGCLeaveGuild.
         * @implements ICMsgClientToGCLeaveGuild
         * @constructor
         * @param {ICMsgClientToGCLeaveGuild=} [properties] Properties to set
         */
        function CMsgClientToGCLeaveGuild(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCLeaveGuild guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCLeaveGuild
         * @instance
         */
        CMsgClientToGCLeaveGuild.prototype.guild_id = 0;
    
        /**
         * Creates a new CMsgClientToGCLeaveGuild instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCLeaveGuild
         * @static
         * @param {ICMsgClientToGCLeaveGuild=} [properties] Properties to set
         * @returns {CMsgClientToGCLeaveGuild} CMsgClientToGCLeaveGuild instance
         */
        CMsgClientToGCLeaveGuild.create = function create(properties) {
            return new CMsgClientToGCLeaveGuild(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCLeaveGuild message. Does not implicitly {@link CMsgClientToGCLeaveGuild.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCLeaveGuild
         * @static
         * @param {ICMsgClientToGCLeaveGuild} message CMsgClientToGCLeaveGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCLeaveGuild.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCLeaveGuild message, length delimited. Does not implicitly {@link CMsgClientToGCLeaveGuild.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCLeaveGuild
         * @static
         * @param {ICMsgClientToGCLeaveGuild} message CMsgClientToGCLeaveGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCLeaveGuild.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCLeaveGuild message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCLeaveGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCLeaveGuild} CMsgClientToGCLeaveGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCLeaveGuild.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCLeaveGuild();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCLeaveGuild message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCLeaveGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCLeaveGuild} CMsgClientToGCLeaveGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCLeaveGuild.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCLeaveGuild message.
         * @function verify
         * @memberof CMsgClientToGCLeaveGuild
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCLeaveGuild.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCLeaveGuild message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCLeaveGuild
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCLeaveGuild} CMsgClientToGCLeaveGuild
         */
        CMsgClientToGCLeaveGuild.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCLeaveGuild)
                return object;
            var message = new $root.CMsgClientToGCLeaveGuild();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCLeaveGuild message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCLeaveGuild
         * @static
         * @param {CMsgClientToGCLeaveGuild} message CMsgClientToGCLeaveGuild
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCLeaveGuild.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.guild_id = 0;
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCLeaveGuild to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCLeaveGuild
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCLeaveGuild.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCLeaveGuild;
    })();
    
    $root.CMsgClientToGCLeaveGuildResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCLeaveGuildResponse.
         * @exports ICMsgClientToGCLeaveGuildResponse
         * @interface ICMsgClientToGCLeaveGuildResponse
         * @property {CMsgClientToGCLeaveGuildResponse.EResponse|null} [result] CMsgClientToGCLeaveGuildResponse result
         */
    
        /**
         * Constructs a new CMsgClientToGCLeaveGuildResponse.
         * @exports CMsgClientToGCLeaveGuildResponse
         * @classdesc Represents a CMsgClientToGCLeaveGuildResponse.
         * @implements ICMsgClientToGCLeaveGuildResponse
         * @constructor
         * @param {ICMsgClientToGCLeaveGuildResponse=} [properties] Properties to set
         */
        function CMsgClientToGCLeaveGuildResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCLeaveGuildResponse result.
         * @member {CMsgClientToGCLeaveGuildResponse.EResponse} result
         * @memberof CMsgClientToGCLeaveGuildResponse
         * @instance
         */
        CMsgClientToGCLeaveGuildResponse.prototype.result = 0;
    
        /**
         * Creates a new CMsgClientToGCLeaveGuildResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCLeaveGuildResponse
         * @static
         * @param {ICMsgClientToGCLeaveGuildResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCLeaveGuildResponse} CMsgClientToGCLeaveGuildResponse instance
         */
        CMsgClientToGCLeaveGuildResponse.create = function create(properties) {
            return new CMsgClientToGCLeaveGuildResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCLeaveGuildResponse message. Does not implicitly {@link CMsgClientToGCLeaveGuildResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCLeaveGuildResponse
         * @static
         * @param {ICMsgClientToGCLeaveGuildResponse} message CMsgClientToGCLeaveGuildResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCLeaveGuildResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCLeaveGuildResponse message, length delimited. Does not implicitly {@link CMsgClientToGCLeaveGuildResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCLeaveGuildResponse
         * @static
         * @param {ICMsgClientToGCLeaveGuildResponse} message CMsgClientToGCLeaveGuildResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCLeaveGuildResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCLeaveGuildResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCLeaveGuildResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCLeaveGuildResponse} CMsgClientToGCLeaveGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCLeaveGuildResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCLeaveGuildResponse();
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
         * Decodes a CMsgClientToGCLeaveGuildResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCLeaveGuildResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCLeaveGuildResponse} CMsgClientToGCLeaveGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCLeaveGuildResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCLeaveGuildResponse message.
         * @function verify
         * @memberof CMsgClientToGCLeaveGuildResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCLeaveGuildResponse.verify = function verify(message) {
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
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCLeaveGuildResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCLeaveGuildResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCLeaveGuildResponse} CMsgClientToGCLeaveGuildResponse
         */
        CMsgClientToGCLeaveGuildResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCLeaveGuildResponse)
                return object;
            var message = new $root.CMsgClientToGCLeaveGuildResponse();
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
            case "k_eInvalidGuild":
            case 5:
                message.result = 5;
                break;
            case "k_eNotMember":
            case 6:
                message.result = 6;
                break;
            case "k_eLastAdmin":
            case 7:
                message.result = 7;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCLeaveGuildResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCLeaveGuildResponse
         * @static
         * @param {CMsgClientToGCLeaveGuildResponse} message CMsgClientToGCLeaveGuildResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCLeaveGuildResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = options.enums === String ? "k_eInternalError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCLeaveGuildResponse.EResponse[message.result] : message.result;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCLeaveGuildResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCLeaveGuildResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCLeaveGuildResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCLeaveGuildResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidGuild=5 k_eInvalidGuild value
         * @property {number} k_eNotMember=6 k_eNotMember value
         * @property {number} k_eLastAdmin=7 k_eLastAdmin value
         */
        CMsgClientToGCLeaveGuildResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidGuild"] = 5;
            values[valuesById[6] = "k_eNotMember"] = 6;
            values[valuesById[7] = "k_eLastAdmin"] = 7;
            return values;
        })();
    
        return CMsgClientToGCLeaveGuildResponse;
    })();
    
    $root.CMsgClientToGCKickGuildMember = (function() {
    
        /**
         * Properties of a CMsgClientToGCKickGuildMember.
         * @exports ICMsgClientToGCKickGuildMember
         * @interface ICMsgClientToGCKickGuildMember
         * @property {number|null} [guild_id] CMsgClientToGCKickGuildMember guild_id
         * @property {number|null} [target_account_id] CMsgClientToGCKickGuildMember target_account_id
         */
    
        /**
         * Constructs a new CMsgClientToGCKickGuildMember.
         * @exports CMsgClientToGCKickGuildMember
         * @classdesc Represents a CMsgClientToGCKickGuildMember.
         * @implements ICMsgClientToGCKickGuildMember
         * @constructor
         * @param {ICMsgClientToGCKickGuildMember=} [properties] Properties to set
         */
        function CMsgClientToGCKickGuildMember(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCKickGuildMember guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCKickGuildMember
         * @instance
         */
        CMsgClientToGCKickGuildMember.prototype.guild_id = 0;
    
        /**
         * CMsgClientToGCKickGuildMember target_account_id.
         * @member {number} target_account_id
         * @memberof CMsgClientToGCKickGuildMember
         * @instance
         */
        CMsgClientToGCKickGuildMember.prototype.target_account_id = 0;
    
        /**
         * Creates a new CMsgClientToGCKickGuildMember instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCKickGuildMember
         * @static
         * @param {ICMsgClientToGCKickGuildMember=} [properties] Properties to set
         * @returns {CMsgClientToGCKickGuildMember} CMsgClientToGCKickGuildMember instance
         */
        CMsgClientToGCKickGuildMember.create = function create(properties) {
            return new CMsgClientToGCKickGuildMember(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCKickGuildMember message. Does not implicitly {@link CMsgClientToGCKickGuildMember.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCKickGuildMember
         * @static
         * @param {ICMsgClientToGCKickGuildMember} message CMsgClientToGCKickGuildMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCKickGuildMember.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.target_account_id != null && Object.hasOwnProperty.call(message, "target_account_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.target_account_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCKickGuildMember message, length delimited. Does not implicitly {@link CMsgClientToGCKickGuildMember.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCKickGuildMember
         * @static
         * @param {ICMsgClientToGCKickGuildMember} message CMsgClientToGCKickGuildMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCKickGuildMember.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCKickGuildMember message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCKickGuildMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCKickGuildMember} CMsgClientToGCKickGuildMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCKickGuildMember.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCKickGuildMember();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.target_account_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCKickGuildMember message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCKickGuildMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCKickGuildMember} CMsgClientToGCKickGuildMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCKickGuildMember.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCKickGuildMember message.
         * @function verify
         * @memberof CMsgClientToGCKickGuildMember
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCKickGuildMember.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.target_account_id != null && message.hasOwnProperty("target_account_id"))
                if (!$util.isInteger(message.target_account_id))
                    return "target_account_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCKickGuildMember message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCKickGuildMember
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCKickGuildMember} CMsgClientToGCKickGuildMember
         */
        CMsgClientToGCKickGuildMember.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCKickGuildMember)
                return object;
            var message = new $root.CMsgClientToGCKickGuildMember();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            if (object.target_account_id != null)
                message.target_account_id = object.target_account_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCKickGuildMember message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCKickGuildMember
         * @static
         * @param {CMsgClientToGCKickGuildMember} message CMsgClientToGCKickGuildMember
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCKickGuildMember.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.target_account_id = 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.target_account_id != null && message.hasOwnProperty("target_account_id"))
                object.target_account_id = message.target_account_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCKickGuildMember to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCKickGuildMember
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCKickGuildMember.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCKickGuildMember;
    })();
    
    $root.CMsgClientToGCKickGuildMemberResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCKickGuildMemberResponse.
         * @exports ICMsgClientToGCKickGuildMemberResponse
         * @interface ICMsgClientToGCKickGuildMemberResponse
         * @property {CMsgClientToGCKickGuildMemberResponse.EResponse|null} [result] CMsgClientToGCKickGuildMemberResponse result
         */
    
        /**
         * Constructs a new CMsgClientToGCKickGuildMemberResponse.
         * @exports CMsgClientToGCKickGuildMemberResponse
         * @classdesc Represents a CMsgClientToGCKickGuildMemberResponse.
         * @implements ICMsgClientToGCKickGuildMemberResponse
         * @constructor
         * @param {ICMsgClientToGCKickGuildMemberResponse=} [properties] Properties to set
         */
        function CMsgClientToGCKickGuildMemberResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCKickGuildMemberResponse result.
         * @member {CMsgClientToGCKickGuildMemberResponse.EResponse} result
         * @memberof CMsgClientToGCKickGuildMemberResponse
         * @instance
         */
        CMsgClientToGCKickGuildMemberResponse.prototype.result = 0;
    
        /**
         * Creates a new CMsgClientToGCKickGuildMemberResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCKickGuildMemberResponse
         * @static
         * @param {ICMsgClientToGCKickGuildMemberResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCKickGuildMemberResponse} CMsgClientToGCKickGuildMemberResponse instance
         */
        CMsgClientToGCKickGuildMemberResponse.create = function create(properties) {
            return new CMsgClientToGCKickGuildMemberResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCKickGuildMemberResponse message. Does not implicitly {@link CMsgClientToGCKickGuildMemberResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCKickGuildMemberResponse
         * @static
         * @param {ICMsgClientToGCKickGuildMemberResponse} message CMsgClientToGCKickGuildMemberResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCKickGuildMemberResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCKickGuildMemberResponse message, length delimited. Does not implicitly {@link CMsgClientToGCKickGuildMemberResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCKickGuildMemberResponse
         * @static
         * @param {ICMsgClientToGCKickGuildMemberResponse} message CMsgClientToGCKickGuildMemberResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCKickGuildMemberResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCKickGuildMemberResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCKickGuildMemberResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCKickGuildMemberResponse} CMsgClientToGCKickGuildMemberResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCKickGuildMemberResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCKickGuildMemberResponse();
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
         * Decodes a CMsgClientToGCKickGuildMemberResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCKickGuildMemberResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCKickGuildMemberResponse} CMsgClientToGCKickGuildMemberResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCKickGuildMemberResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCKickGuildMemberResponse message.
         * @function verify
         * @memberof CMsgClientToGCKickGuildMemberResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCKickGuildMemberResponse.verify = function verify(message) {
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
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCKickGuildMemberResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCKickGuildMemberResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCKickGuildMemberResponse} CMsgClientToGCKickGuildMemberResponse
         */
        CMsgClientToGCKickGuildMemberResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCKickGuildMemberResponse)
                return object;
            var message = new $root.CMsgClientToGCKickGuildMemberResponse();
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
            case "k_eInvalidGuild":
            case 5:
                message.result = 5;
                break;
            case "k_eRequesterNotMember":
            case 6:
                message.result = 6;
                break;
            case "k_eTargetNotMember":
            case 7:
                message.result = 7;
                break;
            case "k_eNoPermission":
            case 8:
                message.result = 8;
                break;
            case "k_eCantKickSelf":
            case 9:
                message.result = 9;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCKickGuildMemberResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCKickGuildMemberResponse
         * @static
         * @param {CMsgClientToGCKickGuildMemberResponse} message CMsgClientToGCKickGuildMemberResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCKickGuildMemberResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = options.enums === String ? "k_eInternalError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCKickGuildMemberResponse.EResponse[message.result] : message.result;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCKickGuildMemberResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCKickGuildMemberResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCKickGuildMemberResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCKickGuildMemberResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidGuild=5 k_eInvalidGuild value
         * @property {number} k_eRequesterNotMember=6 k_eRequesterNotMember value
         * @property {number} k_eTargetNotMember=7 k_eTargetNotMember value
         * @property {number} k_eNoPermission=8 k_eNoPermission value
         * @property {number} k_eCantKickSelf=9 k_eCantKickSelf value
         */
        CMsgClientToGCKickGuildMemberResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidGuild"] = 5;
            values[valuesById[6] = "k_eRequesterNotMember"] = 6;
            values[valuesById[7] = "k_eTargetNotMember"] = 7;
            values[valuesById[8] = "k_eNoPermission"] = 8;
            values[valuesById[9] = "k_eCantKickSelf"] = 9;
            return values;
        })();
    
        return CMsgClientToGCKickGuildMemberResponse;
    })();
    
    $root.CMsgClientToGCSetGuildMemberRole = (function() {
    
        /**
         * Properties of a CMsgClientToGCSetGuildMemberRole.
         * @exports ICMsgClientToGCSetGuildMemberRole
         * @interface ICMsgClientToGCSetGuildMemberRole
         * @property {number|null} [guild_id] CMsgClientToGCSetGuildMemberRole guild_id
         * @property {number|null} [target_account_id] CMsgClientToGCSetGuildMemberRole target_account_id
         * @property {number|null} [target_role_id] CMsgClientToGCSetGuildMemberRole target_role_id
         */
    
        /**
         * Constructs a new CMsgClientToGCSetGuildMemberRole.
         * @exports CMsgClientToGCSetGuildMemberRole
         * @classdesc Represents a CMsgClientToGCSetGuildMemberRole.
         * @implements ICMsgClientToGCSetGuildMemberRole
         * @constructor
         * @param {ICMsgClientToGCSetGuildMemberRole=} [properties] Properties to set
         */
        function CMsgClientToGCSetGuildMemberRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCSetGuildMemberRole guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCSetGuildMemberRole
         * @instance
         */
        CMsgClientToGCSetGuildMemberRole.prototype.guild_id = 0;
    
        /**
         * CMsgClientToGCSetGuildMemberRole target_account_id.
         * @member {number} target_account_id
         * @memberof CMsgClientToGCSetGuildMemberRole
         * @instance
         */
        CMsgClientToGCSetGuildMemberRole.prototype.target_account_id = 0;
    
        /**
         * CMsgClientToGCSetGuildMemberRole target_role_id.
         * @member {number} target_role_id
         * @memberof CMsgClientToGCSetGuildMemberRole
         * @instance
         */
        CMsgClientToGCSetGuildMemberRole.prototype.target_role_id = 0;
    
        /**
         * Creates a new CMsgClientToGCSetGuildMemberRole instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCSetGuildMemberRole
         * @static
         * @param {ICMsgClientToGCSetGuildMemberRole=} [properties] Properties to set
         * @returns {CMsgClientToGCSetGuildMemberRole} CMsgClientToGCSetGuildMemberRole instance
         */
        CMsgClientToGCSetGuildMemberRole.create = function create(properties) {
            return new CMsgClientToGCSetGuildMemberRole(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCSetGuildMemberRole message. Does not implicitly {@link CMsgClientToGCSetGuildMemberRole.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCSetGuildMemberRole
         * @static
         * @param {ICMsgClientToGCSetGuildMemberRole} message CMsgClientToGCSetGuildMemberRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCSetGuildMemberRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.target_account_id != null && Object.hasOwnProperty.call(message, "target_account_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.target_account_id);
            if (message.target_role_id != null && Object.hasOwnProperty.call(message, "target_role_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.target_role_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCSetGuildMemberRole message, length delimited. Does not implicitly {@link CMsgClientToGCSetGuildMemberRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCSetGuildMemberRole
         * @static
         * @param {ICMsgClientToGCSetGuildMemberRole} message CMsgClientToGCSetGuildMemberRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCSetGuildMemberRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCSetGuildMemberRole message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCSetGuildMemberRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCSetGuildMemberRole} CMsgClientToGCSetGuildMemberRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCSetGuildMemberRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCSetGuildMemberRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.target_account_id = reader.uint32();
                    break;
                case 3:
                    message.target_role_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCSetGuildMemberRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCSetGuildMemberRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCSetGuildMemberRole} CMsgClientToGCSetGuildMemberRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCSetGuildMemberRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCSetGuildMemberRole message.
         * @function verify
         * @memberof CMsgClientToGCSetGuildMemberRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCSetGuildMemberRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.target_account_id != null && message.hasOwnProperty("target_account_id"))
                if (!$util.isInteger(message.target_account_id))
                    return "target_account_id: integer expected";
            if (message.target_role_id != null && message.hasOwnProperty("target_role_id"))
                if (!$util.isInteger(message.target_role_id))
                    return "target_role_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCSetGuildMemberRole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCSetGuildMemberRole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCSetGuildMemberRole} CMsgClientToGCSetGuildMemberRole
         */
        CMsgClientToGCSetGuildMemberRole.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCSetGuildMemberRole)
                return object;
            var message = new $root.CMsgClientToGCSetGuildMemberRole();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            if (object.target_account_id != null)
                message.target_account_id = object.target_account_id >>> 0;
            if (object.target_role_id != null)
                message.target_role_id = object.target_role_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCSetGuildMemberRole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCSetGuildMemberRole
         * @static
         * @param {CMsgClientToGCSetGuildMemberRole} message CMsgClientToGCSetGuildMemberRole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCSetGuildMemberRole.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.target_account_id = 0;
                object.target_role_id = 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.target_account_id != null && message.hasOwnProperty("target_account_id"))
                object.target_account_id = message.target_account_id;
            if (message.target_role_id != null && message.hasOwnProperty("target_role_id"))
                object.target_role_id = message.target_role_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCSetGuildMemberRole to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCSetGuildMemberRole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCSetGuildMemberRole.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCSetGuildMemberRole;
    })();
    
    $root.CMsgClientToGCSetGuildMemberRoleResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCSetGuildMemberRoleResponse.
         * @exports ICMsgClientToGCSetGuildMemberRoleResponse
         * @interface ICMsgClientToGCSetGuildMemberRoleResponse
         * @property {CMsgClientToGCSetGuildMemberRoleResponse.EResponse|null} [result] CMsgClientToGCSetGuildMemberRoleResponse result
         */
    
        /**
         * Constructs a new CMsgClientToGCSetGuildMemberRoleResponse.
         * @exports CMsgClientToGCSetGuildMemberRoleResponse
         * @classdesc Represents a CMsgClientToGCSetGuildMemberRoleResponse.
         * @implements ICMsgClientToGCSetGuildMemberRoleResponse
         * @constructor
         * @param {ICMsgClientToGCSetGuildMemberRoleResponse=} [properties] Properties to set
         */
        function CMsgClientToGCSetGuildMemberRoleResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCSetGuildMemberRoleResponse result.
         * @member {CMsgClientToGCSetGuildMemberRoleResponse.EResponse} result
         * @memberof CMsgClientToGCSetGuildMemberRoleResponse
         * @instance
         */
        CMsgClientToGCSetGuildMemberRoleResponse.prototype.result = 0;
    
        /**
         * Creates a new CMsgClientToGCSetGuildMemberRoleResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCSetGuildMemberRoleResponse
         * @static
         * @param {ICMsgClientToGCSetGuildMemberRoleResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCSetGuildMemberRoleResponse} CMsgClientToGCSetGuildMemberRoleResponse instance
         */
        CMsgClientToGCSetGuildMemberRoleResponse.create = function create(properties) {
            return new CMsgClientToGCSetGuildMemberRoleResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCSetGuildMemberRoleResponse message. Does not implicitly {@link CMsgClientToGCSetGuildMemberRoleResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCSetGuildMemberRoleResponse
         * @static
         * @param {ICMsgClientToGCSetGuildMemberRoleResponse} message CMsgClientToGCSetGuildMemberRoleResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCSetGuildMemberRoleResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCSetGuildMemberRoleResponse message, length delimited. Does not implicitly {@link CMsgClientToGCSetGuildMemberRoleResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCSetGuildMemberRoleResponse
         * @static
         * @param {ICMsgClientToGCSetGuildMemberRoleResponse} message CMsgClientToGCSetGuildMemberRoleResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCSetGuildMemberRoleResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCSetGuildMemberRoleResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCSetGuildMemberRoleResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCSetGuildMemberRoleResponse} CMsgClientToGCSetGuildMemberRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCSetGuildMemberRoleResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCSetGuildMemberRoleResponse();
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
         * Decodes a CMsgClientToGCSetGuildMemberRoleResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCSetGuildMemberRoleResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCSetGuildMemberRoleResponse} CMsgClientToGCSetGuildMemberRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCSetGuildMemberRoleResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCSetGuildMemberRoleResponse message.
         * @function verify
         * @memberof CMsgClientToGCSetGuildMemberRoleResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCSetGuildMemberRoleResponse.verify = function verify(message) {
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
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCSetGuildMemberRoleResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCSetGuildMemberRoleResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCSetGuildMemberRoleResponse} CMsgClientToGCSetGuildMemberRoleResponse
         */
        CMsgClientToGCSetGuildMemberRoleResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCSetGuildMemberRoleResponse)
                return object;
            var message = new $root.CMsgClientToGCSetGuildMemberRoleResponse();
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
            case "k_eInvalidGuild":
            case 5:
                message.result = 5;
                break;
            case "k_eRequesterNotMember":
            case 6:
                message.result = 6;
                break;
            case "k_eTargetNotMember":
            case 7:
                message.result = 7;
                break;
            case "k_eNoPermission":
            case 8:
                message.result = 8;
                break;
            case "k_eInvalidRole":
            case 9:
                message.result = 9;
                break;
            case "k_eAdminViolation":
            case 10:
                message.result = 10;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCSetGuildMemberRoleResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCSetGuildMemberRoleResponse
         * @static
         * @param {CMsgClientToGCSetGuildMemberRoleResponse} message CMsgClientToGCSetGuildMemberRoleResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCSetGuildMemberRoleResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = options.enums === String ? "k_eInternalError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCSetGuildMemberRoleResponse.EResponse[message.result] : message.result;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCSetGuildMemberRoleResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCSetGuildMemberRoleResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCSetGuildMemberRoleResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCSetGuildMemberRoleResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidGuild=5 k_eInvalidGuild value
         * @property {number} k_eRequesterNotMember=6 k_eRequesterNotMember value
         * @property {number} k_eTargetNotMember=7 k_eTargetNotMember value
         * @property {number} k_eNoPermission=8 k_eNoPermission value
         * @property {number} k_eInvalidRole=9 k_eInvalidRole value
         * @property {number} k_eAdminViolation=10 k_eAdminViolation value
         */
        CMsgClientToGCSetGuildMemberRoleResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidGuild"] = 5;
            values[valuesById[6] = "k_eRequesterNotMember"] = 6;
            values[valuesById[7] = "k_eTargetNotMember"] = 7;
            values[valuesById[8] = "k_eNoPermission"] = 8;
            values[valuesById[9] = "k_eInvalidRole"] = 9;
            values[valuesById[10] = "k_eAdminViolation"] = 10;
            return values;
        })();
    
        return CMsgClientToGCSetGuildMemberRoleResponse;
    })();
    
    $root.CMsgClientToGCInviteToGuild = (function() {
    
        /**
         * Properties of a CMsgClientToGCInviteToGuild.
         * @exports ICMsgClientToGCInviteToGuild
         * @interface ICMsgClientToGCInviteToGuild
         * @property {number|null} [guild_id] CMsgClientToGCInviteToGuild guild_id
         * @property {number|null} [target_account_id] CMsgClientToGCInviteToGuild target_account_id
         */
    
        /**
         * Constructs a new CMsgClientToGCInviteToGuild.
         * @exports CMsgClientToGCInviteToGuild
         * @classdesc Represents a CMsgClientToGCInviteToGuild.
         * @implements ICMsgClientToGCInviteToGuild
         * @constructor
         * @param {ICMsgClientToGCInviteToGuild=} [properties] Properties to set
         */
        function CMsgClientToGCInviteToGuild(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCInviteToGuild guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCInviteToGuild
         * @instance
         */
        CMsgClientToGCInviteToGuild.prototype.guild_id = 0;
    
        /**
         * CMsgClientToGCInviteToGuild target_account_id.
         * @member {number} target_account_id
         * @memberof CMsgClientToGCInviteToGuild
         * @instance
         */
        CMsgClientToGCInviteToGuild.prototype.target_account_id = 0;
    
        /**
         * Creates a new CMsgClientToGCInviteToGuild instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCInviteToGuild
         * @static
         * @param {ICMsgClientToGCInviteToGuild=} [properties] Properties to set
         * @returns {CMsgClientToGCInviteToGuild} CMsgClientToGCInviteToGuild instance
         */
        CMsgClientToGCInviteToGuild.create = function create(properties) {
            return new CMsgClientToGCInviteToGuild(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCInviteToGuild message. Does not implicitly {@link CMsgClientToGCInviteToGuild.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCInviteToGuild
         * @static
         * @param {ICMsgClientToGCInviteToGuild} message CMsgClientToGCInviteToGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCInviteToGuild.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.target_account_id != null && Object.hasOwnProperty.call(message, "target_account_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.target_account_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCInviteToGuild message, length delimited. Does not implicitly {@link CMsgClientToGCInviteToGuild.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCInviteToGuild
         * @static
         * @param {ICMsgClientToGCInviteToGuild} message CMsgClientToGCInviteToGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCInviteToGuild.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCInviteToGuild message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCInviteToGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCInviteToGuild} CMsgClientToGCInviteToGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCInviteToGuild.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCInviteToGuild();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.target_account_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCInviteToGuild message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCInviteToGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCInviteToGuild} CMsgClientToGCInviteToGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCInviteToGuild.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCInviteToGuild message.
         * @function verify
         * @memberof CMsgClientToGCInviteToGuild
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCInviteToGuild.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.target_account_id != null && message.hasOwnProperty("target_account_id"))
                if (!$util.isInteger(message.target_account_id))
                    return "target_account_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCInviteToGuild message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCInviteToGuild
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCInviteToGuild} CMsgClientToGCInviteToGuild
         */
        CMsgClientToGCInviteToGuild.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCInviteToGuild)
                return object;
            var message = new $root.CMsgClientToGCInviteToGuild();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            if (object.target_account_id != null)
                message.target_account_id = object.target_account_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCInviteToGuild message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCInviteToGuild
         * @static
         * @param {CMsgClientToGCInviteToGuild} message CMsgClientToGCInviteToGuild
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCInviteToGuild.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.target_account_id = 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.target_account_id != null && message.hasOwnProperty("target_account_id"))
                object.target_account_id = message.target_account_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCInviteToGuild to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCInviteToGuild
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCInviteToGuild.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCInviteToGuild;
    })();
    
    $root.CMsgClientToGCInviteToGuildResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCInviteToGuildResponse.
         * @exports ICMsgClientToGCInviteToGuildResponse
         * @interface ICMsgClientToGCInviteToGuildResponse
         * @property {CMsgClientToGCInviteToGuildResponse.EResponse|null} [result] CMsgClientToGCInviteToGuildResponse result
         */
    
        /**
         * Constructs a new CMsgClientToGCInviteToGuildResponse.
         * @exports CMsgClientToGCInviteToGuildResponse
         * @classdesc Represents a CMsgClientToGCInviteToGuildResponse.
         * @implements ICMsgClientToGCInviteToGuildResponse
         * @constructor
         * @param {ICMsgClientToGCInviteToGuildResponse=} [properties] Properties to set
         */
        function CMsgClientToGCInviteToGuildResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCInviteToGuildResponse result.
         * @member {CMsgClientToGCInviteToGuildResponse.EResponse} result
         * @memberof CMsgClientToGCInviteToGuildResponse
         * @instance
         */
        CMsgClientToGCInviteToGuildResponse.prototype.result = 0;
    
        /**
         * Creates a new CMsgClientToGCInviteToGuildResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCInviteToGuildResponse
         * @static
         * @param {ICMsgClientToGCInviteToGuildResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCInviteToGuildResponse} CMsgClientToGCInviteToGuildResponse instance
         */
        CMsgClientToGCInviteToGuildResponse.create = function create(properties) {
            return new CMsgClientToGCInviteToGuildResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCInviteToGuildResponse message. Does not implicitly {@link CMsgClientToGCInviteToGuildResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCInviteToGuildResponse
         * @static
         * @param {ICMsgClientToGCInviteToGuildResponse} message CMsgClientToGCInviteToGuildResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCInviteToGuildResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCInviteToGuildResponse message, length delimited. Does not implicitly {@link CMsgClientToGCInviteToGuildResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCInviteToGuildResponse
         * @static
         * @param {ICMsgClientToGCInviteToGuildResponse} message CMsgClientToGCInviteToGuildResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCInviteToGuildResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCInviteToGuildResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCInviteToGuildResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCInviteToGuildResponse} CMsgClientToGCInviteToGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCInviteToGuildResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCInviteToGuildResponse();
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
         * Decodes a CMsgClientToGCInviteToGuildResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCInviteToGuildResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCInviteToGuildResponse} CMsgClientToGCInviteToGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCInviteToGuildResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCInviteToGuildResponse message.
         * @function verify
         * @memberof CMsgClientToGCInviteToGuildResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCInviteToGuildResponse.verify = function verify(message) {
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
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCInviteToGuildResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCInviteToGuildResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCInviteToGuildResponse} CMsgClientToGCInviteToGuildResponse
         */
        CMsgClientToGCInviteToGuildResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCInviteToGuildResponse)
                return object;
            var message = new $root.CMsgClientToGCInviteToGuildResponse();
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
            case "k_eInvalidGuild":
            case 5:
                message.result = 5;
                break;
            case "k_eGuildFull":
            case 6:
                message.result = 6;
                break;
            case "k_eRequesterNotMember":
            case 7:
                message.result = 7;
                break;
            case "k_eAlreadyAMember":
            case 8:
                message.result = 8;
                break;
            case "k_eAlreadyInvited":
            case 9:
                message.result = 9;
                break;
            case "k_eNoInvitePermissions":
            case 10:
                message.result = 10;
                break;
            case "k_eTooManyInvites":
            case 11:
                message.result = 11;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCInviteToGuildResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCInviteToGuildResponse
         * @static
         * @param {CMsgClientToGCInviteToGuildResponse} message CMsgClientToGCInviteToGuildResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCInviteToGuildResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = options.enums === String ? "k_eInternalError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCInviteToGuildResponse.EResponse[message.result] : message.result;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCInviteToGuildResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCInviteToGuildResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCInviteToGuildResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCInviteToGuildResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidGuild=5 k_eInvalidGuild value
         * @property {number} k_eGuildFull=6 k_eGuildFull value
         * @property {number} k_eRequesterNotMember=7 k_eRequesterNotMember value
         * @property {number} k_eAlreadyAMember=8 k_eAlreadyAMember value
         * @property {number} k_eAlreadyInvited=9 k_eAlreadyInvited value
         * @property {number} k_eNoInvitePermissions=10 k_eNoInvitePermissions value
         * @property {number} k_eTooManyInvites=11 k_eTooManyInvites value
         */
        CMsgClientToGCInviteToGuildResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidGuild"] = 5;
            values[valuesById[6] = "k_eGuildFull"] = 6;
            values[valuesById[7] = "k_eRequesterNotMember"] = 7;
            values[valuesById[8] = "k_eAlreadyAMember"] = 8;
            values[valuesById[9] = "k_eAlreadyInvited"] = 9;
            values[valuesById[10] = "k_eNoInvitePermissions"] = 10;
            values[valuesById[11] = "k_eTooManyInvites"] = 11;
            return values;
        })();
    
        return CMsgClientToGCInviteToGuildResponse;
    })();
    
    $root.CMsgClientToGCDeclineInviteToGuild = (function() {
    
        /**
         * Properties of a CMsgClientToGCDeclineInviteToGuild.
         * @exports ICMsgClientToGCDeclineInviteToGuild
         * @interface ICMsgClientToGCDeclineInviteToGuild
         * @property {number|null} [guild_id] CMsgClientToGCDeclineInviteToGuild guild_id
         */
    
        /**
         * Constructs a new CMsgClientToGCDeclineInviteToGuild.
         * @exports CMsgClientToGCDeclineInviteToGuild
         * @classdesc Represents a CMsgClientToGCDeclineInviteToGuild.
         * @implements ICMsgClientToGCDeclineInviteToGuild
         * @constructor
         * @param {ICMsgClientToGCDeclineInviteToGuild=} [properties] Properties to set
         */
        function CMsgClientToGCDeclineInviteToGuild(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCDeclineInviteToGuild guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCDeclineInviteToGuild
         * @instance
         */
        CMsgClientToGCDeclineInviteToGuild.prototype.guild_id = 0;
    
        /**
         * Creates a new CMsgClientToGCDeclineInviteToGuild instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCDeclineInviteToGuild
         * @static
         * @param {ICMsgClientToGCDeclineInviteToGuild=} [properties] Properties to set
         * @returns {CMsgClientToGCDeclineInviteToGuild} CMsgClientToGCDeclineInviteToGuild instance
         */
        CMsgClientToGCDeclineInviteToGuild.create = function create(properties) {
            return new CMsgClientToGCDeclineInviteToGuild(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCDeclineInviteToGuild message. Does not implicitly {@link CMsgClientToGCDeclineInviteToGuild.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCDeclineInviteToGuild
         * @static
         * @param {ICMsgClientToGCDeclineInviteToGuild} message CMsgClientToGCDeclineInviteToGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCDeclineInviteToGuild.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCDeclineInviteToGuild message, length delimited. Does not implicitly {@link CMsgClientToGCDeclineInviteToGuild.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCDeclineInviteToGuild
         * @static
         * @param {ICMsgClientToGCDeclineInviteToGuild} message CMsgClientToGCDeclineInviteToGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCDeclineInviteToGuild.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCDeclineInviteToGuild message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCDeclineInviteToGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCDeclineInviteToGuild} CMsgClientToGCDeclineInviteToGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCDeclineInviteToGuild.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCDeclineInviteToGuild();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCDeclineInviteToGuild message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCDeclineInviteToGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCDeclineInviteToGuild} CMsgClientToGCDeclineInviteToGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCDeclineInviteToGuild.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCDeclineInviteToGuild message.
         * @function verify
         * @memberof CMsgClientToGCDeclineInviteToGuild
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCDeclineInviteToGuild.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCDeclineInviteToGuild message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCDeclineInviteToGuild
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCDeclineInviteToGuild} CMsgClientToGCDeclineInviteToGuild
         */
        CMsgClientToGCDeclineInviteToGuild.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCDeclineInviteToGuild)
                return object;
            var message = new $root.CMsgClientToGCDeclineInviteToGuild();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCDeclineInviteToGuild message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCDeclineInviteToGuild
         * @static
         * @param {CMsgClientToGCDeclineInviteToGuild} message CMsgClientToGCDeclineInviteToGuild
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCDeclineInviteToGuild.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.guild_id = 0;
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCDeclineInviteToGuild to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCDeclineInviteToGuild
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCDeclineInviteToGuild.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCDeclineInviteToGuild;
    })();
    
    $root.CMsgClientToGCDeclineInviteToGuildResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCDeclineInviteToGuildResponse.
         * @exports ICMsgClientToGCDeclineInviteToGuildResponse
         * @interface ICMsgClientToGCDeclineInviteToGuildResponse
         * @property {CMsgClientToGCDeclineInviteToGuildResponse.EResponse|null} [result] CMsgClientToGCDeclineInviteToGuildResponse result
         */
    
        /**
         * Constructs a new CMsgClientToGCDeclineInviteToGuildResponse.
         * @exports CMsgClientToGCDeclineInviteToGuildResponse
         * @classdesc Represents a CMsgClientToGCDeclineInviteToGuildResponse.
         * @implements ICMsgClientToGCDeclineInviteToGuildResponse
         * @constructor
         * @param {ICMsgClientToGCDeclineInviteToGuildResponse=} [properties] Properties to set
         */
        function CMsgClientToGCDeclineInviteToGuildResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCDeclineInviteToGuildResponse result.
         * @member {CMsgClientToGCDeclineInviteToGuildResponse.EResponse} result
         * @memberof CMsgClientToGCDeclineInviteToGuildResponse
         * @instance
         */
        CMsgClientToGCDeclineInviteToGuildResponse.prototype.result = 0;
    
        /**
         * Creates a new CMsgClientToGCDeclineInviteToGuildResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCDeclineInviteToGuildResponse
         * @static
         * @param {ICMsgClientToGCDeclineInviteToGuildResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCDeclineInviteToGuildResponse} CMsgClientToGCDeclineInviteToGuildResponse instance
         */
        CMsgClientToGCDeclineInviteToGuildResponse.create = function create(properties) {
            return new CMsgClientToGCDeclineInviteToGuildResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCDeclineInviteToGuildResponse message. Does not implicitly {@link CMsgClientToGCDeclineInviteToGuildResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCDeclineInviteToGuildResponse
         * @static
         * @param {ICMsgClientToGCDeclineInviteToGuildResponse} message CMsgClientToGCDeclineInviteToGuildResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCDeclineInviteToGuildResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCDeclineInviteToGuildResponse message, length delimited. Does not implicitly {@link CMsgClientToGCDeclineInviteToGuildResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCDeclineInviteToGuildResponse
         * @static
         * @param {ICMsgClientToGCDeclineInviteToGuildResponse} message CMsgClientToGCDeclineInviteToGuildResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCDeclineInviteToGuildResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCDeclineInviteToGuildResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCDeclineInviteToGuildResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCDeclineInviteToGuildResponse} CMsgClientToGCDeclineInviteToGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCDeclineInviteToGuildResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCDeclineInviteToGuildResponse();
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
         * Decodes a CMsgClientToGCDeclineInviteToGuildResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCDeclineInviteToGuildResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCDeclineInviteToGuildResponse} CMsgClientToGCDeclineInviteToGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCDeclineInviteToGuildResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCDeclineInviteToGuildResponse message.
         * @function verify
         * @memberof CMsgClientToGCDeclineInviteToGuildResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCDeclineInviteToGuildResponse.verify = function verify(message) {
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
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCDeclineInviteToGuildResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCDeclineInviteToGuildResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCDeclineInviteToGuildResponse} CMsgClientToGCDeclineInviteToGuildResponse
         */
        CMsgClientToGCDeclineInviteToGuildResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCDeclineInviteToGuildResponse)
                return object;
            var message = new $root.CMsgClientToGCDeclineInviteToGuildResponse();
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
            case "k_eInvalidGuild":
            case 5:
                message.result = 5;
                break;
            case "k_eNoInviteFound":
            case 6:
                message.result = 6;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCDeclineInviteToGuildResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCDeclineInviteToGuildResponse
         * @static
         * @param {CMsgClientToGCDeclineInviteToGuildResponse} message CMsgClientToGCDeclineInviteToGuildResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCDeclineInviteToGuildResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = options.enums === String ? "k_eInternalError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCDeclineInviteToGuildResponse.EResponse[message.result] : message.result;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCDeclineInviteToGuildResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCDeclineInviteToGuildResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCDeclineInviteToGuildResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCDeclineInviteToGuildResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidGuild=5 k_eInvalidGuild value
         * @property {number} k_eNoInviteFound=6 k_eNoInviteFound value
         */
        CMsgClientToGCDeclineInviteToGuildResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidGuild"] = 5;
            values[valuesById[6] = "k_eNoInviteFound"] = 6;
            return values;
        })();
    
        return CMsgClientToGCDeclineInviteToGuildResponse;
    })();
    
    $root.CMsgClientToGCAcceptInviteToGuild = (function() {
    
        /**
         * Properties of a CMsgClientToGCAcceptInviteToGuild.
         * @exports ICMsgClientToGCAcceptInviteToGuild
         * @interface ICMsgClientToGCAcceptInviteToGuild
         * @property {number|null} [guild_id] CMsgClientToGCAcceptInviteToGuild guild_id
         */
    
        /**
         * Constructs a new CMsgClientToGCAcceptInviteToGuild.
         * @exports CMsgClientToGCAcceptInviteToGuild
         * @classdesc Represents a CMsgClientToGCAcceptInviteToGuild.
         * @implements ICMsgClientToGCAcceptInviteToGuild
         * @constructor
         * @param {ICMsgClientToGCAcceptInviteToGuild=} [properties] Properties to set
         */
        function CMsgClientToGCAcceptInviteToGuild(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCAcceptInviteToGuild guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCAcceptInviteToGuild
         * @instance
         */
        CMsgClientToGCAcceptInviteToGuild.prototype.guild_id = 0;
    
        /**
         * Creates a new CMsgClientToGCAcceptInviteToGuild instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCAcceptInviteToGuild
         * @static
         * @param {ICMsgClientToGCAcceptInviteToGuild=} [properties] Properties to set
         * @returns {CMsgClientToGCAcceptInviteToGuild} CMsgClientToGCAcceptInviteToGuild instance
         */
        CMsgClientToGCAcceptInviteToGuild.create = function create(properties) {
            return new CMsgClientToGCAcceptInviteToGuild(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCAcceptInviteToGuild message. Does not implicitly {@link CMsgClientToGCAcceptInviteToGuild.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCAcceptInviteToGuild
         * @static
         * @param {ICMsgClientToGCAcceptInviteToGuild} message CMsgClientToGCAcceptInviteToGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCAcceptInviteToGuild.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCAcceptInviteToGuild message, length delimited. Does not implicitly {@link CMsgClientToGCAcceptInviteToGuild.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCAcceptInviteToGuild
         * @static
         * @param {ICMsgClientToGCAcceptInviteToGuild} message CMsgClientToGCAcceptInviteToGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCAcceptInviteToGuild.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCAcceptInviteToGuild message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCAcceptInviteToGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCAcceptInviteToGuild} CMsgClientToGCAcceptInviteToGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCAcceptInviteToGuild.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCAcceptInviteToGuild();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCAcceptInviteToGuild message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCAcceptInviteToGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCAcceptInviteToGuild} CMsgClientToGCAcceptInviteToGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCAcceptInviteToGuild.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCAcceptInviteToGuild message.
         * @function verify
         * @memberof CMsgClientToGCAcceptInviteToGuild
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCAcceptInviteToGuild.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCAcceptInviteToGuild message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCAcceptInviteToGuild
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCAcceptInviteToGuild} CMsgClientToGCAcceptInviteToGuild
         */
        CMsgClientToGCAcceptInviteToGuild.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCAcceptInviteToGuild)
                return object;
            var message = new $root.CMsgClientToGCAcceptInviteToGuild();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCAcceptInviteToGuild message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCAcceptInviteToGuild
         * @static
         * @param {CMsgClientToGCAcceptInviteToGuild} message CMsgClientToGCAcceptInviteToGuild
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCAcceptInviteToGuild.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.guild_id = 0;
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCAcceptInviteToGuild to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCAcceptInviteToGuild
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCAcceptInviteToGuild.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCAcceptInviteToGuild;
    })();
    
    $root.CMsgClientToGCAcceptInviteToGuildResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCAcceptInviteToGuildResponse.
         * @exports ICMsgClientToGCAcceptInviteToGuildResponse
         * @interface ICMsgClientToGCAcceptInviteToGuildResponse
         * @property {CMsgClientToGCAcceptInviteToGuildResponse.EResponse|null} [result] CMsgClientToGCAcceptInviteToGuildResponse result
         */
    
        /**
         * Constructs a new CMsgClientToGCAcceptInviteToGuildResponse.
         * @exports CMsgClientToGCAcceptInviteToGuildResponse
         * @classdesc Represents a CMsgClientToGCAcceptInviteToGuildResponse.
         * @implements ICMsgClientToGCAcceptInviteToGuildResponse
         * @constructor
         * @param {ICMsgClientToGCAcceptInviteToGuildResponse=} [properties] Properties to set
         */
        function CMsgClientToGCAcceptInviteToGuildResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCAcceptInviteToGuildResponse result.
         * @member {CMsgClientToGCAcceptInviteToGuildResponse.EResponse} result
         * @memberof CMsgClientToGCAcceptInviteToGuildResponse
         * @instance
         */
        CMsgClientToGCAcceptInviteToGuildResponse.prototype.result = 0;
    
        /**
         * Creates a new CMsgClientToGCAcceptInviteToGuildResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCAcceptInviteToGuildResponse
         * @static
         * @param {ICMsgClientToGCAcceptInviteToGuildResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCAcceptInviteToGuildResponse} CMsgClientToGCAcceptInviteToGuildResponse instance
         */
        CMsgClientToGCAcceptInviteToGuildResponse.create = function create(properties) {
            return new CMsgClientToGCAcceptInviteToGuildResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCAcceptInviteToGuildResponse message. Does not implicitly {@link CMsgClientToGCAcceptInviteToGuildResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCAcceptInviteToGuildResponse
         * @static
         * @param {ICMsgClientToGCAcceptInviteToGuildResponse} message CMsgClientToGCAcceptInviteToGuildResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCAcceptInviteToGuildResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCAcceptInviteToGuildResponse message, length delimited. Does not implicitly {@link CMsgClientToGCAcceptInviteToGuildResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCAcceptInviteToGuildResponse
         * @static
         * @param {ICMsgClientToGCAcceptInviteToGuildResponse} message CMsgClientToGCAcceptInviteToGuildResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCAcceptInviteToGuildResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCAcceptInviteToGuildResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCAcceptInviteToGuildResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCAcceptInviteToGuildResponse} CMsgClientToGCAcceptInviteToGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCAcceptInviteToGuildResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCAcceptInviteToGuildResponse();
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
         * Decodes a CMsgClientToGCAcceptInviteToGuildResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCAcceptInviteToGuildResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCAcceptInviteToGuildResponse} CMsgClientToGCAcceptInviteToGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCAcceptInviteToGuildResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCAcceptInviteToGuildResponse message.
         * @function verify
         * @memberof CMsgClientToGCAcceptInviteToGuildResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCAcceptInviteToGuildResponse.verify = function verify(message) {
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
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCAcceptInviteToGuildResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCAcceptInviteToGuildResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCAcceptInviteToGuildResponse} CMsgClientToGCAcceptInviteToGuildResponse
         */
        CMsgClientToGCAcceptInviteToGuildResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCAcceptInviteToGuildResponse)
                return object;
            var message = new $root.CMsgClientToGCAcceptInviteToGuildResponse();
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
            case "k_eInvalidGuild":
            case 5:
                message.result = 5;
                break;
            case "k_eNoInviteFound":
            case 6:
                message.result = 6;
                break;
            case "k_eGuildFull":
            case 7:
                message.result = 7;
                break;
            case "k_eGuildLimit":
            case 8:
                message.result = 8;
                break;
            case "k_eInvalidInviter":
            case 9:
                message.result = 9;
                break;
            case "k_eAlreadyInGuild":
            case 10:
                message.result = 10;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCAcceptInviteToGuildResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCAcceptInviteToGuildResponse
         * @static
         * @param {CMsgClientToGCAcceptInviteToGuildResponse} message CMsgClientToGCAcceptInviteToGuildResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCAcceptInviteToGuildResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = options.enums === String ? "k_eInternalError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCAcceptInviteToGuildResponse.EResponse[message.result] : message.result;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCAcceptInviteToGuildResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCAcceptInviteToGuildResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCAcceptInviteToGuildResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCAcceptInviteToGuildResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidGuild=5 k_eInvalidGuild value
         * @property {number} k_eNoInviteFound=6 k_eNoInviteFound value
         * @property {number} k_eGuildFull=7 k_eGuildFull value
         * @property {number} k_eGuildLimit=8 k_eGuildLimit value
         * @property {number} k_eInvalidInviter=9 k_eInvalidInviter value
         * @property {number} k_eAlreadyInGuild=10 k_eAlreadyInGuild value
         */
        CMsgClientToGCAcceptInviteToGuildResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidGuild"] = 5;
            values[valuesById[6] = "k_eNoInviteFound"] = 6;
            values[valuesById[7] = "k_eGuildFull"] = 7;
            values[valuesById[8] = "k_eGuildLimit"] = 8;
            values[valuesById[9] = "k_eInvalidInviter"] = 9;
            values[valuesById[10] = "k_eAlreadyInGuild"] = 10;
            return values;
        })();
    
        return CMsgClientToGCAcceptInviteToGuildResponse;
    })();
    
    $root.CMsgClientToGCCancelInviteToGuild = (function() {
    
        /**
         * Properties of a CMsgClientToGCCancelInviteToGuild.
         * @exports ICMsgClientToGCCancelInviteToGuild
         * @interface ICMsgClientToGCCancelInviteToGuild
         * @property {number|null} [guild_id] CMsgClientToGCCancelInviteToGuild guild_id
         * @property {number|null} [target_account_id] CMsgClientToGCCancelInviteToGuild target_account_id
         */
    
        /**
         * Constructs a new CMsgClientToGCCancelInviteToGuild.
         * @exports CMsgClientToGCCancelInviteToGuild
         * @classdesc Represents a CMsgClientToGCCancelInviteToGuild.
         * @implements ICMsgClientToGCCancelInviteToGuild
         * @constructor
         * @param {ICMsgClientToGCCancelInviteToGuild=} [properties] Properties to set
         */
        function CMsgClientToGCCancelInviteToGuild(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCCancelInviteToGuild guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCCancelInviteToGuild
         * @instance
         */
        CMsgClientToGCCancelInviteToGuild.prototype.guild_id = 0;
    
        /**
         * CMsgClientToGCCancelInviteToGuild target_account_id.
         * @member {number} target_account_id
         * @memberof CMsgClientToGCCancelInviteToGuild
         * @instance
         */
        CMsgClientToGCCancelInviteToGuild.prototype.target_account_id = 0;
    
        /**
         * Creates a new CMsgClientToGCCancelInviteToGuild instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCCancelInviteToGuild
         * @static
         * @param {ICMsgClientToGCCancelInviteToGuild=} [properties] Properties to set
         * @returns {CMsgClientToGCCancelInviteToGuild} CMsgClientToGCCancelInviteToGuild instance
         */
        CMsgClientToGCCancelInviteToGuild.create = function create(properties) {
            return new CMsgClientToGCCancelInviteToGuild(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCCancelInviteToGuild message. Does not implicitly {@link CMsgClientToGCCancelInviteToGuild.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCCancelInviteToGuild
         * @static
         * @param {ICMsgClientToGCCancelInviteToGuild} message CMsgClientToGCCancelInviteToGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCCancelInviteToGuild.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.target_account_id != null && Object.hasOwnProperty.call(message, "target_account_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.target_account_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCCancelInviteToGuild message, length delimited. Does not implicitly {@link CMsgClientToGCCancelInviteToGuild.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCCancelInviteToGuild
         * @static
         * @param {ICMsgClientToGCCancelInviteToGuild} message CMsgClientToGCCancelInviteToGuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCCancelInviteToGuild.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCCancelInviteToGuild message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCCancelInviteToGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCCancelInviteToGuild} CMsgClientToGCCancelInviteToGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCCancelInviteToGuild.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCCancelInviteToGuild();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.target_account_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCCancelInviteToGuild message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCCancelInviteToGuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCCancelInviteToGuild} CMsgClientToGCCancelInviteToGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCCancelInviteToGuild.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCCancelInviteToGuild message.
         * @function verify
         * @memberof CMsgClientToGCCancelInviteToGuild
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCCancelInviteToGuild.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.target_account_id != null && message.hasOwnProperty("target_account_id"))
                if (!$util.isInteger(message.target_account_id))
                    return "target_account_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCCancelInviteToGuild message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCCancelInviteToGuild
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCCancelInviteToGuild} CMsgClientToGCCancelInviteToGuild
         */
        CMsgClientToGCCancelInviteToGuild.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCCancelInviteToGuild)
                return object;
            var message = new $root.CMsgClientToGCCancelInviteToGuild();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            if (object.target_account_id != null)
                message.target_account_id = object.target_account_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCCancelInviteToGuild message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCCancelInviteToGuild
         * @static
         * @param {CMsgClientToGCCancelInviteToGuild} message CMsgClientToGCCancelInviteToGuild
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCCancelInviteToGuild.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.target_account_id = 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.target_account_id != null && message.hasOwnProperty("target_account_id"))
                object.target_account_id = message.target_account_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCCancelInviteToGuild to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCCancelInviteToGuild
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCCancelInviteToGuild.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCCancelInviteToGuild;
    })();
    
    $root.CMsgClientToGCCancelInviteToGuildResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCCancelInviteToGuildResponse.
         * @exports ICMsgClientToGCCancelInviteToGuildResponse
         * @interface ICMsgClientToGCCancelInviteToGuildResponse
         * @property {CMsgClientToGCCancelInviteToGuildResponse.EResponse|null} [result] CMsgClientToGCCancelInviteToGuildResponse result
         */
    
        /**
         * Constructs a new CMsgClientToGCCancelInviteToGuildResponse.
         * @exports CMsgClientToGCCancelInviteToGuildResponse
         * @classdesc Represents a CMsgClientToGCCancelInviteToGuildResponse.
         * @implements ICMsgClientToGCCancelInviteToGuildResponse
         * @constructor
         * @param {ICMsgClientToGCCancelInviteToGuildResponse=} [properties] Properties to set
         */
        function CMsgClientToGCCancelInviteToGuildResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCCancelInviteToGuildResponse result.
         * @member {CMsgClientToGCCancelInviteToGuildResponse.EResponse} result
         * @memberof CMsgClientToGCCancelInviteToGuildResponse
         * @instance
         */
        CMsgClientToGCCancelInviteToGuildResponse.prototype.result = 0;
    
        /**
         * Creates a new CMsgClientToGCCancelInviteToGuildResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCCancelInviteToGuildResponse
         * @static
         * @param {ICMsgClientToGCCancelInviteToGuildResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCCancelInviteToGuildResponse} CMsgClientToGCCancelInviteToGuildResponse instance
         */
        CMsgClientToGCCancelInviteToGuildResponse.create = function create(properties) {
            return new CMsgClientToGCCancelInviteToGuildResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCCancelInviteToGuildResponse message. Does not implicitly {@link CMsgClientToGCCancelInviteToGuildResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCCancelInviteToGuildResponse
         * @static
         * @param {ICMsgClientToGCCancelInviteToGuildResponse} message CMsgClientToGCCancelInviteToGuildResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCCancelInviteToGuildResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCCancelInviteToGuildResponse message, length delimited. Does not implicitly {@link CMsgClientToGCCancelInviteToGuildResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCCancelInviteToGuildResponse
         * @static
         * @param {ICMsgClientToGCCancelInviteToGuildResponse} message CMsgClientToGCCancelInviteToGuildResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCCancelInviteToGuildResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCCancelInviteToGuildResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCCancelInviteToGuildResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCCancelInviteToGuildResponse} CMsgClientToGCCancelInviteToGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCCancelInviteToGuildResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCCancelInviteToGuildResponse();
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
         * Decodes a CMsgClientToGCCancelInviteToGuildResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCCancelInviteToGuildResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCCancelInviteToGuildResponse} CMsgClientToGCCancelInviteToGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCCancelInviteToGuildResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCCancelInviteToGuildResponse message.
         * @function verify
         * @memberof CMsgClientToGCCancelInviteToGuildResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCCancelInviteToGuildResponse.verify = function verify(message) {
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
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCCancelInviteToGuildResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCCancelInviteToGuildResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCCancelInviteToGuildResponse} CMsgClientToGCCancelInviteToGuildResponse
         */
        CMsgClientToGCCancelInviteToGuildResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCCancelInviteToGuildResponse)
                return object;
            var message = new $root.CMsgClientToGCCancelInviteToGuildResponse();
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
            case "k_eInvalidGuild":
            case 5:
                message.result = 5;
                break;
            case "k_eNoInviteFound":
            case 6:
                message.result = 6;
                break;
            case "k_eNoPermissions":
            case 7:
                message.result = 7;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCCancelInviteToGuildResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCCancelInviteToGuildResponse
         * @static
         * @param {CMsgClientToGCCancelInviteToGuildResponse} message CMsgClientToGCCancelInviteToGuildResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCCancelInviteToGuildResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = options.enums === String ? "k_eInternalError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCCancelInviteToGuildResponse.EResponse[message.result] : message.result;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCCancelInviteToGuildResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCCancelInviteToGuildResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCCancelInviteToGuildResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCCancelInviteToGuildResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidGuild=5 k_eInvalidGuild value
         * @property {number} k_eNoInviteFound=6 k_eNoInviteFound value
         * @property {number} k_eNoPermissions=7 k_eNoPermissions value
         */
        CMsgClientToGCCancelInviteToGuildResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidGuild"] = 5;
            values[valuesById[6] = "k_eNoInviteFound"] = 6;
            values[valuesById[7] = "k_eNoPermissions"] = 7;
            return values;
        })();
    
        return CMsgClientToGCCancelInviteToGuildResponse;
    })();
    
    $root.CMsgClientToGCAddGuildRole = (function() {
    
        /**
         * Properties of a CMsgClientToGCAddGuildRole.
         * @exports ICMsgClientToGCAddGuildRole
         * @interface ICMsgClientToGCAddGuildRole
         * @property {number|null} [guild_id] CMsgClientToGCAddGuildRole guild_id
         * @property {string|null} [role_name] CMsgClientToGCAddGuildRole role_name
         * @property {number|null} [role_flags] CMsgClientToGCAddGuildRole role_flags
         */
    
        /**
         * Constructs a new CMsgClientToGCAddGuildRole.
         * @exports CMsgClientToGCAddGuildRole
         * @classdesc Represents a CMsgClientToGCAddGuildRole.
         * @implements ICMsgClientToGCAddGuildRole
         * @constructor
         * @param {ICMsgClientToGCAddGuildRole=} [properties] Properties to set
         */
        function CMsgClientToGCAddGuildRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCAddGuildRole guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCAddGuildRole
         * @instance
         */
        CMsgClientToGCAddGuildRole.prototype.guild_id = 0;
    
        /**
         * CMsgClientToGCAddGuildRole role_name.
         * @member {string} role_name
         * @memberof CMsgClientToGCAddGuildRole
         * @instance
         */
        CMsgClientToGCAddGuildRole.prototype.role_name = "";
    
        /**
         * CMsgClientToGCAddGuildRole role_flags.
         * @member {number} role_flags
         * @memberof CMsgClientToGCAddGuildRole
         * @instance
         */
        CMsgClientToGCAddGuildRole.prototype.role_flags = 0;
    
        /**
         * Creates a new CMsgClientToGCAddGuildRole instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCAddGuildRole
         * @static
         * @param {ICMsgClientToGCAddGuildRole=} [properties] Properties to set
         * @returns {CMsgClientToGCAddGuildRole} CMsgClientToGCAddGuildRole instance
         */
        CMsgClientToGCAddGuildRole.create = function create(properties) {
            return new CMsgClientToGCAddGuildRole(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCAddGuildRole message. Does not implicitly {@link CMsgClientToGCAddGuildRole.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCAddGuildRole
         * @static
         * @param {ICMsgClientToGCAddGuildRole} message CMsgClientToGCAddGuildRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCAddGuildRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.role_name != null && Object.hasOwnProperty.call(message, "role_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.role_name);
            if (message.role_flags != null && Object.hasOwnProperty.call(message, "role_flags"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.role_flags);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCAddGuildRole message, length delimited. Does not implicitly {@link CMsgClientToGCAddGuildRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCAddGuildRole
         * @static
         * @param {ICMsgClientToGCAddGuildRole} message CMsgClientToGCAddGuildRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCAddGuildRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCAddGuildRole message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCAddGuildRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCAddGuildRole} CMsgClientToGCAddGuildRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCAddGuildRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCAddGuildRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.role_name = reader.string();
                    break;
                case 3:
                    message.role_flags = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCAddGuildRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCAddGuildRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCAddGuildRole} CMsgClientToGCAddGuildRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCAddGuildRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCAddGuildRole message.
         * @function verify
         * @memberof CMsgClientToGCAddGuildRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCAddGuildRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                if (!$util.isString(message.role_name))
                    return "role_name: string expected";
            if (message.role_flags != null && message.hasOwnProperty("role_flags"))
                if (!$util.isInteger(message.role_flags))
                    return "role_flags: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCAddGuildRole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCAddGuildRole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCAddGuildRole} CMsgClientToGCAddGuildRole
         */
        CMsgClientToGCAddGuildRole.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCAddGuildRole)
                return object;
            var message = new $root.CMsgClientToGCAddGuildRole();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            if (object.role_name != null)
                message.role_name = String(object.role_name);
            if (object.role_flags != null)
                message.role_flags = object.role_flags >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCAddGuildRole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCAddGuildRole
         * @static
         * @param {CMsgClientToGCAddGuildRole} message CMsgClientToGCAddGuildRole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCAddGuildRole.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.role_name = "";
                object.role_flags = 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                object.role_name = message.role_name;
            if (message.role_flags != null && message.hasOwnProperty("role_flags"))
                object.role_flags = message.role_flags;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCAddGuildRole to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCAddGuildRole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCAddGuildRole.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCAddGuildRole;
    })();
    
    $root.CMsgClientToGCAddGuildRoleResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCAddGuildRoleResponse.
         * @exports ICMsgClientToGCAddGuildRoleResponse
         * @interface ICMsgClientToGCAddGuildRoleResponse
         * @property {CMsgClientToGCAddGuildRoleResponse.EResponse|null} [result] CMsgClientToGCAddGuildRoleResponse result
         * @property {number|null} [role_id] CMsgClientToGCAddGuildRoleResponse role_id
         */
    
        /**
         * Constructs a new CMsgClientToGCAddGuildRoleResponse.
         * @exports CMsgClientToGCAddGuildRoleResponse
         * @classdesc Represents a CMsgClientToGCAddGuildRoleResponse.
         * @implements ICMsgClientToGCAddGuildRoleResponse
         * @constructor
         * @param {ICMsgClientToGCAddGuildRoleResponse=} [properties] Properties to set
         */
        function CMsgClientToGCAddGuildRoleResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCAddGuildRoleResponse result.
         * @member {CMsgClientToGCAddGuildRoleResponse.EResponse} result
         * @memberof CMsgClientToGCAddGuildRoleResponse
         * @instance
         */
        CMsgClientToGCAddGuildRoleResponse.prototype.result = 0;
    
        /**
         * CMsgClientToGCAddGuildRoleResponse role_id.
         * @member {number} role_id
         * @memberof CMsgClientToGCAddGuildRoleResponse
         * @instance
         */
        CMsgClientToGCAddGuildRoleResponse.prototype.role_id = 0;
    
        /**
         * Creates a new CMsgClientToGCAddGuildRoleResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCAddGuildRoleResponse
         * @static
         * @param {ICMsgClientToGCAddGuildRoleResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCAddGuildRoleResponse} CMsgClientToGCAddGuildRoleResponse instance
         */
        CMsgClientToGCAddGuildRoleResponse.create = function create(properties) {
            return new CMsgClientToGCAddGuildRoleResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCAddGuildRoleResponse message. Does not implicitly {@link CMsgClientToGCAddGuildRoleResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCAddGuildRoleResponse
         * @static
         * @param {ICMsgClientToGCAddGuildRoleResponse} message CMsgClientToGCAddGuildRoleResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCAddGuildRoleResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.role_id != null && Object.hasOwnProperty.call(message, "role_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.role_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCAddGuildRoleResponse message, length delimited. Does not implicitly {@link CMsgClientToGCAddGuildRoleResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCAddGuildRoleResponse
         * @static
         * @param {ICMsgClientToGCAddGuildRoleResponse} message CMsgClientToGCAddGuildRoleResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCAddGuildRoleResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCAddGuildRoleResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCAddGuildRoleResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCAddGuildRoleResponse} CMsgClientToGCAddGuildRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCAddGuildRoleResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCAddGuildRoleResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.role_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCAddGuildRoleResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCAddGuildRoleResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCAddGuildRoleResponse} CMsgClientToGCAddGuildRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCAddGuildRoleResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCAddGuildRoleResponse message.
         * @function verify
         * @memberof CMsgClientToGCAddGuildRoleResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCAddGuildRoleResponse.verify = function verify(message) {
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
                    break;
                }
            if (message.role_id != null && message.hasOwnProperty("role_id"))
                if (!$util.isInteger(message.role_id))
                    return "role_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCAddGuildRoleResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCAddGuildRoleResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCAddGuildRoleResponse} CMsgClientToGCAddGuildRoleResponse
         */
        CMsgClientToGCAddGuildRoleResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCAddGuildRoleResponse)
                return object;
            var message = new $root.CMsgClientToGCAddGuildRoleResponse();
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
            case "k_eInvalidGuild":
            case 5:
                message.result = 5;
                break;
            case "k_eNameAlreadyUsed":
            case 6:
                message.result = 6;
                break;
            case "k_eNoPermissions":
            case 7:
                message.result = 7;
                break;
            case "k_eInvalidFlags":
            case 8:
                message.result = 8;
                break;
            case "k_eInvalidName":
            case 9:
                message.result = 9;
                break;
            case "k_eAdminViolation":
            case 10:
                message.result = 10;
                break;
            case "k_eTooManyRoles":
            case 11:
                message.result = 11;
                break;
            case "k_eBlocked":
            case 12:
                message.result = 12;
                break;
            }
            if (object.role_id != null)
                message.role_id = object.role_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCAddGuildRoleResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCAddGuildRoleResponse
         * @static
         * @param {CMsgClientToGCAddGuildRoleResponse} message CMsgClientToGCAddGuildRoleResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCAddGuildRoleResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = options.enums === String ? "k_eInternalError" : 0;
                object.role_id = 0;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCAddGuildRoleResponse.EResponse[message.result] : message.result;
            if (message.role_id != null && message.hasOwnProperty("role_id"))
                object.role_id = message.role_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCAddGuildRoleResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCAddGuildRoleResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCAddGuildRoleResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCAddGuildRoleResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidGuild=5 k_eInvalidGuild value
         * @property {number} k_eNameAlreadyUsed=6 k_eNameAlreadyUsed value
         * @property {number} k_eNoPermissions=7 k_eNoPermissions value
         * @property {number} k_eInvalidFlags=8 k_eInvalidFlags value
         * @property {number} k_eInvalidName=9 k_eInvalidName value
         * @property {number} k_eAdminViolation=10 k_eAdminViolation value
         * @property {number} k_eTooManyRoles=11 k_eTooManyRoles value
         * @property {number} k_eBlocked=12 k_eBlocked value
         */
        CMsgClientToGCAddGuildRoleResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidGuild"] = 5;
            values[valuesById[6] = "k_eNameAlreadyUsed"] = 6;
            values[valuesById[7] = "k_eNoPermissions"] = 7;
            values[valuesById[8] = "k_eInvalidFlags"] = 8;
            values[valuesById[9] = "k_eInvalidName"] = 9;
            values[valuesById[10] = "k_eAdminViolation"] = 10;
            values[valuesById[11] = "k_eTooManyRoles"] = 11;
            values[valuesById[12] = "k_eBlocked"] = 12;
            return values;
        })();
    
        return CMsgClientToGCAddGuildRoleResponse;
    })();
    
    $root.CMsgClientToGCModifyGuildRole = (function() {
    
        /**
         * Properties of a CMsgClientToGCModifyGuildRole.
         * @exports ICMsgClientToGCModifyGuildRole
         * @interface ICMsgClientToGCModifyGuildRole
         * @property {number|null} [guild_id] CMsgClientToGCModifyGuildRole guild_id
         * @property {number|null} [role_id] CMsgClientToGCModifyGuildRole role_id
         * @property {string|null} [role_name] CMsgClientToGCModifyGuildRole role_name
         * @property {number|null} [role_flags] CMsgClientToGCModifyGuildRole role_flags
         */
    
        /**
         * Constructs a new CMsgClientToGCModifyGuildRole.
         * @exports CMsgClientToGCModifyGuildRole
         * @classdesc Represents a CMsgClientToGCModifyGuildRole.
         * @implements ICMsgClientToGCModifyGuildRole
         * @constructor
         * @param {ICMsgClientToGCModifyGuildRole=} [properties] Properties to set
         */
        function CMsgClientToGCModifyGuildRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCModifyGuildRole guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCModifyGuildRole
         * @instance
         */
        CMsgClientToGCModifyGuildRole.prototype.guild_id = 0;
    
        /**
         * CMsgClientToGCModifyGuildRole role_id.
         * @member {number} role_id
         * @memberof CMsgClientToGCModifyGuildRole
         * @instance
         */
        CMsgClientToGCModifyGuildRole.prototype.role_id = 0;
    
        /**
         * CMsgClientToGCModifyGuildRole role_name.
         * @member {string} role_name
         * @memberof CMsgClientToGCModifyGuildRole
         * @instance
         */
        CMsgClientToGCModifyGuildRole.prototype.role_name = "";
    
        /**
         * CMsgClientToGCModifyGuildRole role_flags.
         * @member {number} role_flags
         * @memberof CMsgClientToGCModifyGuildRole
         * @instance
         */
        CMsgClientToGCModifyGuildRole.prototype.role_flags = 0;
    
        /**
         * Creates a new CMsgClientToGCModifyGuildRole instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCModifyGuildRole
         * @static
         * @param {ICMsgClientToGCModifyGuildRole=} [properties] Properties to set
         * @returns {CMsgClientToGCModifyGuildRole} CMsgClientToGCModifyGuildRole instance
         */
        CMsgClientToGCModifyGuildRole.create = function create(properties) {
            return new CMsgClientToGCModifyGuildRole(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCModifyGuildRole message. Does not implicitly {@link CMsgClientToGCModifyGuildRole.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCModifyGuildRole
         * @static
         * @param {ICMsgClientToGCModifyGuildRole} message CMsgClientToGCModifyGuildRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCModifyGuildRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.role_id != null && Object.hasOwnProperty.call(message, "role_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.role_id);
            if (message.role_name != null && Object.hasOwnProperty.call(message, "role_name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.role_name);
            if (message.role_flags != null && Object.hasOwnProperty.call(message, "role_flags"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.role_flags);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCModifyGuildRole message, length delimited. Does not implicitly {@link CMsgClientToGCModifyGuildRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCModifyGuildRole
         * @static
         * @param {ICMsgClientToGCModifyGuildRole} message CMsgClientToGCModifyGuildRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCModifyGuildRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCModifyGuildRole message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCModifyGuildRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCModifyGuildRole} CMsgClientToGCModifyGuildRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCModifyGuildRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCModifyGuildRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.role_id = reader.uint32();
                    break;
                case 3:
                    message.role_name = reader.string();
                    break;
                case 4:
                    message.role_flags = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCModifyGuildRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCModifyGuildRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCModifyGuildRole} CMsgClientToGCModifyGuildRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCModifyGuildRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCModifyGuildRole message.
         * @function verify
         * @memberof CMsgClientToGCModifyGuildRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCModifyGuildRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.role_id != null && message.hasOwnProperty("role_id"))
                if (!$util.isInteger(message.role_id))
                    return "role_id: integer expected";
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                if (!$util.isString(message.role_name))
                    return "role_name: string expected";
            if (message.role_flags != null && message.hasOwnProperty("role_flags"))
                if (!$util.isInteger(message.role_flags))
                    return "role_flags: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCModifyGuildRole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCModifyGuildRole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCModifyGuildRole} CMsgClientToGCModifyGuildRole
         */
        CMsgClientToGCModifyGuildRole.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCModifyGuildRole)
                return object;
            var message = new $root.CMsgClientToGCModifyGuildRole();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            if (object.role_id != null)
                message.role_id = object.role_id >>> 0;
            if (object.role_name != null)
                message.role_name = String(object.role_name);
            if (object.role_flags != null)
                message.role_flags = object.role_flags >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCModifyGuildRole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCModifyGuildRole
         * @static
         * @param {CMsgClientToGCModifyGuildRole} message CMsgClientToGCModifyGuildRole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCModifyGuildRole.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.role_id = 0;
                object.role_name = "";
                object.role_flags = 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.role_id != null && message.hasOwnProperty("role_id"))
                object.role_id = message.role_id;
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                object.role_name = message.role_name;
            if (message.role_flags != null && message.hasOwnProperty("role_flags"))
                object.role_flags = message.role_flags;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCModifyGuildRole to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCModifyGuildRole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCModifyGuildRole.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCModifyGuildRole;
    })();
    
    $root.CMsgClientToGCModifyGuildRoleResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCModifyGuildRoleResponse.
         * @exports ICMsgClientToGCModifyGuildRoleResponse
         * @interface ICMsgClientToGCModifyGuildRoleResponse
         * @property {CMsgClientToGCModifyGuildRoleResponse.EResponse|null} [result] CMsgClientToGCModifyGuildRoleResponse result
         */
    
        /**
         * Constructs a new CMsgClientToGCModifyGuildRoleResponse.
         * @exports CMsgClientToGCModifyGuildRoleResponse
         * @classdesc Represents a CMsgClientToGCModifyGuildRoleResponse.
         * @implements ICMsgClientToGCModifyGuildRoleResponse
         * @constructor
         * @param {ICMsgClientToGCModifyGuildRoleResponse=} [properties] Properties to set
         */
        function CMsgClientToGCModifyGuildRoleResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCModifyGuildRoleResponse result.
         * @member {CMsgClientToGCModifyGuildRoleResponse.EResponse} result
         * @memberof CMsgClientToGCModifyGuildRoleResponse
         * @instance
         */
        CMsgClientToGCModifyGuildRoleResponse.prototype.result = 0;
    
        /**
         * Creates a new CMsgClientToGCModifyGuildRoleResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCModifyGuildRoleResponse
         * @static
         * @param {ICMsgClientToGCModifyGuildRoleResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCModifyGuildRoleResponse} CMsgClientToGCModifyGuildRoleResponse instance
         */
        CMsgClientToGCModifyGuildRoleResponse.create = function create(properties) {
            return new CMsgClientToGCModifyGuildRoleResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCModifyGuildRoleResponse message. Does not implicitly {@link CMsgClientToGCModifyGuildRoleResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCModifyGuildRoleResponse
         * @static
         * @param {ICMsgClientToGCModifyGuildRoleResponse} message CMsgClientToGCModifyGuildRoleResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCModifyGuildRoleResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCModifyGuildRoleResponse message, length delimited. Does not implicitly {@link CMsgClientToGCModifyGuildRoleResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCModifyGuildRoleResponse
         * @static
         * @param {ICMsgClientToGCModifyGuildRoleResponse} message CMsgClientToGCModifyGuildRoleResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCModifyGuildRoleResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCModifyGuildRoleResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCModifyGuildRoleResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCModifyGuildRoleResponse} CMsgClientToGCModifyGuildRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCModifyGuildRoleResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCModifyGuildRoleResponse();
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
         * Decodes a CMsgClientToGCModifyGuildRoleResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCModifyGuildRoleResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCModifyGuildRoleResponse} CMsgClientToGCModifyGuildRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCModifyGuildRoleResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCModifyGuildRoleResponse message.
         * @function verify
         * @memberof CMsgClientToGCModifyGuildRoleResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCModifyGuildRoleResponse.verify = function verify(message) {
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
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCModifyGuildRoleResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCModifyGuildRoleResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCModifyGuildRoleResponse} CMsgClientToGCModifyGuildRoleResponse
         */
        CMsgClientToGCModifyGuildRoleResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCModifyGuildRoleResponse)
                return object;
            var message = new $root.CMsgClientToGCModifyGuildRoleResponse();
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
            case "k_eInvalidGuild":
            case 5:
                message.result = 5;
                break;
            case "k_eInvalidRole":
            case 6:
                message.result = 6;
                break;
            case "k_eNameAlreadyUsed":
            case 7:
                message.result = 7;
                break;
            case "k_eInvalidFlags":
            case 8:
                message.result = 8;
                break;
            case "k_eInvalidName":
            case 9:
                message.result = 9;
                break;
            case "k_eNoPermissions":
            case 10:
                message.result = 10;
                break;
            case "k_eAdminViolation":
            case 11:
                message.result = 11;
                break;
            case "k_eBlocked":
            case 12:
                message.result = 12;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCModifyGuildRoleResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCModifyGuildRoleResponse
         * @static
         * @param {CMsgClientToGCModifyGuildRoleResponse} message CMsgClientToGCModifyGuildRoleResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCModifyGuildRoleResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = options.enums === String ? "k_eInternalError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCModifyGuildRoleResponse.EResponse[message.result] : message.result;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCModifyGuildRoleResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCModifyGuildRoleResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCModifyGuildRoleResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCModifyGuildRoleResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidGuild=5 k_eInvalidGuild value
         * @property {number} k_eInvalidRole=6 k_eInvalidRole value
         * @property {number} k_eNameAlreadyUsed=7 k_eNameAlreadyUsed value
         * @property {number} k_eInvalidFlags=8 k_eInvalidFlags value
         * @property {number} k_eInvalidName=9 k_eInvalidName value
         * @property {number} k_eNoPermissions=10 k_eNoPermissions value
         * @property {number} k_eAdminViolation=11 k_eAdminViolation value
         * @property {number} k_eBlocked=12 k_eBlocked value
         */
        CMsgClientToGCModifyGuildRoleResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidGuild"] = 5;
            values[valuesById[6] = "k_eInvalidRole"] = 6;
            values[valuesById[7] = "k_eNameAlreadyUsed"] = 7;
            values[valuesById[8] = "k_eInvalidFlags"] = 8;
            values[valuesById[9] = "k_eInvalidName"] = 9;
            values[valuesById[10] = "k_eNoPermissions"] = 10;
            values[valuesById[11] = "k_eAdminViolation"] = 11;
            values[valuesById[12] = "k_eBlocked"] = 12;
            return values;
        })();
    
        return CMsgClientToGCModifyGuildRoleResponse;
    })();
    
    $root.CMsgClientToGCRemoveGuildRole = (function() {
    
        /**
         * Properties of a CMsgClientToGCRemoveGuildRole.
         * @exports ICMsgClientToGCRemoveGuildRole
         * @interface ICMsgClientToGCRemoveGuildRole
         * @property {number|null} [guild_id] CMsgClientToGCRemoveGuildRole guild_id
         * @property {number|null} [role_id] CMsgClientToGCRemoveGuildRole role_id
         */
    
        /**
         * Constructs a new CMsgClientToGCRemoveGuildRole.
         * @exports CMsgClientToGCRemoveGuildRole
         * @classdesc Represents a CMsgClientToGCRemoveGuildRole.
         * @implements ICMsgClientToGCRemoveGuildRole
         * @constructor
         * @param {ICMsgClientToGCRemoveGuildRole=} [properties] Properties to set
         */
        function CMsgClientToGCRemoveGuildRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRemoveGuildRole guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCRemoveGuildRole
         * @instance
         */
        CMsgClientToGCRemoveGuildRole.prototype.guild_id = 0;
    
        /**
         * CMsgClientToGCRemoveGuildRole role_id.
         * @member {number} role_id
         * @memberof CMsgClientToGCRemoveGuildRole
         * @instance
         */
        CMsgClientToGCRemoveGuildRole.prototype.role_id = 0;
    
        /**
         * Creates a new CMsgClientToGCRemoveGuildRole instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRemoveGuildRole
         * @static
         * @param {ICMsgClientToGCRemoveGuildRole=} [properties] Properties to set
         * @returns {CMsgClientToGCRemoveGuildRole} CMsgClientToGCRemoveGuildRole instance
         */
        CMsgClientToGCRemoveGuildRole.create = function create(properties) {
            return new CMsgClientToGCRemoveGuildRole(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRemoveGuildRole message. Does not implicitly {@link CMsgClientToGCRemoveGuildRole.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRemoveGuildRole
         * @static
         * @param {ICMsgClientToGCRemoveGuildRole} message CMsgClientToGCRemoveGuildRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRemoveGuildRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.role_id != null && Object.hasOwnProperty.call(message, "role_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.role_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRemoveGuildRole message, length delimited. Does not implicitly {@link CMsgClientToGCRemoveGuildRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRemoveGuildRole
         * @static
         * @param {ICMsgClientToGCRemoveGuildRole} message CMsgClientToGCRemoveGuildRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRemoveGuildRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRemoveGuildRole message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRemoveGuildRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRemoveGuildRole} CMsgClientToGCRemoveGuildRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRemoveGuildRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRemoveGuildRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.role_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRemoveGuildRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRemoveGuildRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRemoveGuildRole} CMsgClientToGCRemoveGuildRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRemoveGuildRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRemoveGuildRole message.
         * @function verify
         * @memberof CMsgClientToGCRemoveGuildRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRemoveGuildRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.role_id != null && message.hasOwnProperty("role_id"))
                if (!$util.isInteger(message.role_id))
                    return "role_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRemoveGuildRole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRemoveGuildRole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRemoveGuildRole} CMsgClientToGCRemoveGuildRole
         */
        CMsgClientToGCRemoveGuildRole.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRemoveGuildRole)
                return object;
            var message = new $root.CMsgClientToGCRemoveGuildRole();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            if (object.role_id != null)
                message.role_id = object.role_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRemoveGuildRole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRemoveGuildRole
         * @static
         * @param {CMsgClientToGCRemoveGuildRole} message CMsgClientToGCRemoveGuildRole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRemoveGuildRole.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.role_id = 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.role_id != null && message.hasOwnProperty("role_id"))
                object.role_id = message.role_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRemoveGuildRole to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRemoveGuildRole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRemoveGuildRole.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCRemoveGuildRole;
    })();
    
    $root.CMsgClientToGCRemoveGuildRoleResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCRemoveGuildRoleResponse.
         * @exports ICMsgClientToGCRemoveGuildRoleResponse
         * @interface ICMsgClientToGCRemoveGuildRoleResponse
         * @property {CMsgClientToGCRemoveGuildRoleResponse.EResponse|null} [result] CMsgClientToGCRemoveGuildRoleResponse result
         */
    
        /**
         * Constructs a new CMsgClientToGCRemoveGuildRoleResponse.
         * @exports CMsgClientToGCRemoveGuildRoleResponse
         * @classdesc Represents a CMsgClientToGCRemoveGuildRoleResponse.
         * @implements ICMsgClientToGCRemoveGuildRoleResponse
         * @constructor
         * @param {ICMsgClientToGCRemoveGuildRoleResponse=} [properties] Properties to set
         */
        function CMsgClientToGCRemoveGuildRoleResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRemoveGuildRoleResponse result.
         * @member {CMsgClientToGCRemoveGuildRoleResponse.EResponse} result
         * @memberof CMsgClientToGCRemoveGuildRoleResponse
         * @instance
         */
        CMsgClientToGCRemoveGuildRoleResponse.prototype.result = 0;
    
        /**
         * Creates a new CMsgClientToGCRemoveGuildRoleResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRemoveGuildRoleResponse
         * @static
         * @param {ICMsgClientToGCRemoveGuildRoleResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCRemoveGuildRoleResponse} CMsgClientToGCRemoveGuildRoleResponse instance
         */
        CMsgClientToGCRemoveGuildRoleResponse.create = function create(properties) {
            return new CMsgClientToGCRemoveGuildRoleResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRemoveGuildRoleResponse message. Does not implicitly {@link CMsgClientToGCRemoveGuildRoleResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRemoveGuildRoleResponse
         * @static
         * @param {ICMsgClientToGCRemoveGuildRoleResponse} message CMsgClientToGCRemoveGuildRoleResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRemoveGuildRoleResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRemoveGuildRoleResponse message, length delimited. Does not implicitly {@link CMsgClientToGCRemoveGuildRoleResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRemoveGuildRoleResponse
         * @static
         * @param {ICMsgClientToGCRemoveGuildRoleResponse} message CMsgClientToGCRemoveGuildRoleResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRemoveGuildRoleResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRemoveGuildRoleResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRemoveGuildRoleResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRemoveGuildRoleResponse} CMsgClientToGCRemoveGuildRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRemoveGuildRoleResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRemoveGuildRoleResponse();
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
         * Decodes a CMsgClientToGCRemoveGuildRoleResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRemoveGuildRoleResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRemoveGuildRoleResponse} CMsgClientToGCRemoveGuildRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRemoveGuildRoleResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRemoveGuildRoleResponse message.
         * @function verify
         * @memberof CMsgClientToGCRemoveGuildRoleResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRemoveGuildRoleResponse.verify = function verify(message) {
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
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRemoveGuildRoleResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRemoveGuildRoleResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRemoveGuildRoleResponse} CMsgClientToGCRemoveGuildRoleResponse
         */
        CMsgClientToGCRemoveGuildRoleResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRemoveGuildRoleResponse)
                return object;
            var message = new $root.CMsgClientToGCRemoveGuildRoleResponse();
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
            case "k_eInvalidGuild":
            case 5:
                message.result = 5;
                break;
            case "k_eInvalidRole":
            case 6:
                message.result = 6;
                break;
            case "k_eRoleNotEmpty":
            case 7:
                message.result = 7;
                break;
            case "k_eNoPermissions":
            case 8:
                message.result = 8;
                break;
            case "k_eAdminViolation":
            case 9:
                message.result = 9;
                break;
            case "k_eCantRemoveDefaultRole":
            case 10:
                message.result = 10;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRemoveGuildRoleResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRemoveGuildRoleResponse
         * @static
         * @param {CMsgClientToGCRemoveGuildRoleResponse} message CMsgClientToGCRemoveGuildRoleResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRemoveGuildRoleResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = options.enums === String ? "k_eInternalError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCRemoveGuildRoleResponse.EResponse[message.result] : message.result;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRemoveGuildRoleResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRemoveGuildRoleResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRemoveGuildRoleResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCRemoveGuildRoleResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidGuild=5 k_eInvalidGuild value
         * @property {number} k_eInvalidRole=6 k_eInvalidRole value
         * @property {number} k_eRoleNotEmpty=7 k_eRoleNotEmpty value
         * @property {number} k_eNoPermissions=8 k_eNoPermissions value
         * @property {number} k_eAdminViolation=9 k_eAdminViolation value
         * @property {number} k_eCantRemoveDefaultRole=10 k_eCantRemoveDefaultRole value
         */
        CMsgClientToGCRemoveGuildRoleResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidGuild"] = 5;
            values[valuesById[6] = "k_eInvalidRole"] = 6;
            values[valuesById[7] = "k_eRoleNotEmpty"] = 7;
            values[valuesById[8] = "k_eNoPermissions"] = 8;
            values[valuesById[9] = "k_eAdminViolation"] = 9;
            values[valuesById[10] = "k_eCantRemoveDefaultRole"] = 10;
            return values;
        })();
    
        return CMsgClientToGCRemoveGuildRoleResponse;
    })();
    
    $root.CMsgClientToGCSetGuildRoleOrder = (function() {
    
        /**
         * Properties of a CMsgClientToGCSetGuildRoleOrder.
         * @exports ICMsgClientToGCSetGuildRoleOrder
         * @interface ICMsgClientToGCSetGuildRoleOrder
         * @property {number|null} [guild_id] CMsgClientToGCSetGuildRoleOrder guild_id
         * @property {Array.<number>|null} [requested_role_ids] CMsgClientToGCSetGuildRoleOrder requested_role_ids
         * @property {Array.<number>|null} [previous_role_ids] CMsgClientToGCSetGuildRoleOrder previous_role_ids
         */
    
        /**
         * Constructs a new CMsgClientToGCSetGuildRoleOrder.
         * @exports CMsgClientToGCSetGuildRoleOrder
         * @classdesc Represents a CMsgClientToGCSetGuildRoleOrder.
         * @implements ICMsgClientToGCSetGuildRoleOrder
         * @constructor
         * @param {ICMsgClientToGCSetGuildRoleOrder=} [properties] Properties to set
         */
        function CMsgClientToGCSetGuildRoleOrder(properties) {
            this.requested_role_ids = [];
            this.previous_role_ids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCSetGuildRoleOrder guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCSetGuildRoleOrder
         * @instance
         */
        CMsgClientToGCSetGuildRoleOrder.prototype.guild_id = 0;
    
        /**
         * CMsgClientToGCSetGuildRoleOrder requested_role_ids.
         * @member {Array.<number>} requested_role_ids
         * @memberof CMsgClientToGCSetGuildRoleOrder
         * @instance
         */
        CMsgClientToGCSetGuildRoleOrder.prototype.requested_role_ids = $util.emptyArray;
    
        /**
         * CMsgClientToGCSetGuildRoleOrder previous_role_ids.
         * @member {Array.<number>} previous_role_ids
         * @memberof CMsgClientToGCSetGuildRoleOrder
         * @instance
         */
        CMsgClientToGCSetGuildRoleOrder.prototype.previous_role_ids = $util.emptyArray;
    
        /**
         * Creates a new CMsgClientToGCSetGuildRoleOrder instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCSetGuildRoleOrder
         * @static
         * @param {ICMsgClientToGCSetGuildRoleOrder=} [properties] Properties to set
         * @returns {CMsgClientToGCSetGuildRoleOrder} CMsgClientToGCSetGuildRoleOrder instance
         */
        CMsgClientToGCSetGuildRoleOrder.create = function create(properties) {
            return new CMsgClientToGCSetGuildRoleOrder(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCSetGuildRoleOrder message. Does not implicitly {@link CMsgClientToGCSetGuildRoleOrder.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCSetGuildRoleOrder
         * @static
         * @param {ICMsgClientToGCSetGuildRoleOrder} message CMsgClientToGCSetGuildRoleOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCSetGuildRoleOrder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.requested_role_ids != null && message.requested_role_ids.length)
                for (var i = 0; i < message.requested_role_ids.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.requested_role_ids[i]);
            if (message.previous_role_ids != null && message.previous_role_ids.length)
                for (var i = 0; i < message.previous_role_ids.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.previous_role_ids[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCSetGuildRoleOrder message, length delimited. Does not implicitly {@link CMsgClientToGCSetGuildRoleOrder.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCSetGuildRoleOrder
         * @static
         * @param {ICMsgClientToGCSetGuildRoleOrder} message CMsgClientToGCSetGuildRoleOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCSetGuildRoleOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCSetGuildRoleOrder message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCSetGuildRoleOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCSetGuildRoleOrder} CMsgClientToGCSetGuildRoleOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCSetGuildRoleOrder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCSetGuildRoleOrder();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    if (!(message.requested_role_ids && message.requested_role_ids.length))
                        message.requested_role_ids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.requested_role_ids.push(reader.uint32());
                    } else
                        message.requested_role_ids.push(reader.uint32());
                    break;
                case 3:
                    if (!(message.previous_role_ids && message.previous_role_ids.length))
                        message.previous_role_ids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.previous_role_ids.push(reader.uint32());
                    } else
                        message.previous_role_ids.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCSetGuildRoleOrder message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCSetGuildRoleOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCSetGuildRoleOrder} CMsgClientToGCSetGuildRoleOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCSetGuildRoleOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCSetGuildRoleOrder message.
         * @function verify
         * @memberof CMsgClientToGCSetGuildRoleOrder
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCSetGuildRoleOrder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.requested_role_ids != null && message.hasOwnProperty("requested_role_ids")) {
                if (!Array.isArray(message.requested_role_ids))
                    return "requested_role_ids: array expected";
                for (var i = 0; i < message.requested_role_ids.length; ++i)
                    if (!$util.isInteger(message.requested_role_ids[i]))
                        return "requested_role_ids: integer[] expected";
            }
            if (message.previous_role_ids != null && message.hasOwnProperty("previous_role_ids")) {
                if (!Array.isArray(message.previous_role_ids))
                    return "previous_role_ids: array expected";
                for (var i = 0; i < message.previous_role_ids.length; ++i)
                    if (!$util.isInteger(message.previous_role_ids[i]))
                        return "previous_role_ids: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCSetGuildRoleOrder message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCSetGuildRoleOrder
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCSetGuildRoleOrder} CMsgClientToGCSetGuildRoleOrder
         */
        CMsgClientToGCSetGuildRoleOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCSetGuildRoleOrder)
                return object;
            var message = new $root.CMsgClientToGCSetGuildRoleOrder();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            if (object.requested_role_ids) {
                if (!Array.isArray(object.requested_role_ids))
                    throw TypeError(".CMsgClientToGCSetGuildRoleOrder.requested_role_ids: array expected");
                message.requested_role_ids = [];
                for (var i = 0; i < object.requested_role_ids.length; ++i)
                    message.requested_role_ids[i] = object.requested_role_ids[i] >>> 0;
            }
            if (object.previous_role_ids) {
                if (!Array.isArray(object.previous_role_ids))
                    throw TypeError(".CMsgClientToGCSetGuildRoleOrder.previous_role_ids: array expected");
                message.previous_role_ids = [];
                for (var i = 0; i < object.previous_role_ids.length; ++i)
                    message.previous_role_ids[i] = object.previous_role_ids[i] >>> 0;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCSetGuildRoleOrder message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCSetGuildRoleOrder
         * @static
         * @param {CMsgClientToGCSetGuildRoleOrder} message CMsgClientToGCSetGuildRoleOrder
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCSetGuildRoleOrder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.requested_role_ids = [];
                object.previous_role_ids = [];
            }
            if (options.defaults)
                object.guild_id = 0;
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.requested_role_ids && message.requested_role_ids.length) {
                object.requested_role_ids = [];
                for (var j = 0; j < message.requested_role_ids.length; ++j)
                    object.requested_role_ids[j] = message.requested_role_ids[j];
            }
            if (message.previous_role_ids && message.previous_role_ids.length) {
                object.previous_role_ids = [];
                for (var j = 0; j < message.previous_role_ids.length; ++j)
                    object.previous_role_ids[j] = message.previous_role_ids[j];
            }
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCSetGuildRoleOrder to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCSetGuildRoleOrder
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCSetGuildRoleOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCSetGuildRoleOrder;
    })();
    
    $root.CMsgClientToGCSetGuildRoleOrderResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCSetGuildRoleOrderResponse.
         * @exports ICMsgClientToGCSetGuildRoleOrderResponse
         * @interface ICMsgClientToGCSetGuildRoleOrderResponse
         * @property {CMsgClientToGCSetGuildRoleOrderResponse.EResponse|null} [result] CMsgClientToGCSetGuildRoleOrderResponse result
         * @property {Array.<number>|null} [confirmed_role_ids] CMsgClientToGCSetGuildRoleOrderResponse confirmed_role_ids
         */
    
        /**
         * Constructs a new CMsgClientToGCSetGuildRoleOrderResponse.
         * @exports CMsgClientToGCSetGuildRoleOrderResponse
         * @classdesc Represents a CMsgClientToGCSetGuildRoleOrderResponse.
         * @implements ICMsgClientToGCSetGuildRoleOrderResponse
         * @constructor
         * @param {ICMsgClientToGCSetGuildRoleOrderResponse=} [properties] Properties to set
         */
        function CMsgClientToGCSetGuildRoleOrderResponse(properties) {
            this.confirmed_role_ids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCSetGuildRoleOrderResponse result.
         * @member {CMsgClientToGCSetGuildRoleOrderResponse.EResponse} result
         * @memberof CMsgClientToGCSetGuildRoleOrderResponse
         * @instance
         */
        CMsgClientToGCSetGuildRoleOrderResponse.prototype.result = 0;
    
        /**
         * CMsgClientToGCSetGuildRoleOrderResponse confirmed_role_ids.
         * @member {Array.<number>} confirmed_role_ids
         * @memberof CMsgClientToGCSetGuildRoleOrderResponse
         * @instance
         */
        CMsgClientToGCSetGuildRoleOrderResponse.prototype.confirmed_role_ids = $util.emptyArray;
    
        /**
         * Creates a new CMsgClientToGCSetGuildRoleOrderResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCSetGuildRoleOrderResponse
         * @static
         * @param {ICMsgClientToGCSetGuildRoleOrderResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCSetGuildRoleOrderResponse} CMsgClientToGCSetGuildRoleOrderResponse instance
         */
        CMsgClientToGCSetGuildRoleOrderResponse.create = function create(properties) {
            return new CMsgClientToGCSetGuildRoleOrderResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCSetGuildRoleOrderResponse message. Does not implicitly {@link CMsgClientToGCSetGuildRoleOrderResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCSetGuildRoleOrderResponse
         * @static
         * @param {ICMsgClientToGCSetGuildRoleOrderResponse} message CMsgClientToGCSetGuildRoleOrderResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCSetGuildRoleOrderResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.confirmed_role_ids != null && message.confirmed_role_ids.length)
                for (var i = 0; i < message.confirmed_role_ids.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.confirmed_role_ids[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCSetGuildRoleOrderResponse message, length delimited. Does not implicitly {@link CMsgClientToGCSetGuildRoleOrderResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCSetGuildRoleOrderResponse
         * @static
         * @param {ICMsgClientToGCSetGuildRoleOrderResponse} message CMsgClientToGCSetGuildRoleOrderResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCSetGuildRoleOrderResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCSetGuildRoleOrderResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCSetGuildRoleOrderResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCSetGuildRoleOrderResponse} CMsgClientToGCSetGuildRoleOrderResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCSetGuildRoleOrderResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCSetGuildRoleOrderResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    if (!(message.confirmed_role_ids && message.confirmed_role_ids.length))
                        message.confirmed_role_ids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.confirmed_role_ids.push(reader.uint32());
                    } else
                        message.confirmed_role_ids.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCSetGuildRoleOrderResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCSetGuildRoleOrderResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCSetGuildRoleOrderResponse} CMsgClientToGCSetGuildRoleOrderResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCSetGuildRoleOrderResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCSetGuildRoleOrderResponse message.
         * @function verify
         * @memberof CMsgClientToGCSetGuildRoleOrderResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCSetGuildRoleOrderResponse.verify = function verify(message) {
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
                    break;
                }
            if (message.confirmed_role_ids != null && message.hasOwnProperty("confirmed_role_ids")) {
                if (!Array.isArray(message.confirmed_role_ids))
                    return "confirmed_role_ids: array expected";
                for (var i = 0; i < message.confirmed_role_ids.length; ++i)
                    if (!$util.isInteger(message.confirmed_role_ids[i]))
                        return "confirmed_role_ids: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCSetGuildRoleOrderResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCSetGuildRoleOrderResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCSetGuildRoleOrderResponse} CMsgClientToGCSetGuildRoleOrderResponse
         */
        CMsgClientToGCSetGuildRoleOrderResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCSetGuildRoleOrderResponse)
                return object;
            var message = new $root.CMsgClientToGCSetGuildRoleOrderResponse();
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
            case "k_eInvalidGuild":
            case 5:
                message.result = 5;
                break;
            case "k_eInvalidRole":
            case 6:
                message.result = 6;
                break;
            case "k_eInvalidOrder":
            case 7:
                message.result = 7;
                break;
            case "k_eNoPermissions":
            case 8:
                message.result = 8;
                break;
            case "k_eAdminViolation":
            case 9:
                message.result = 9;
                break;
            }
            if (object.confirmed_role_ids) {
                if (!Array.isArray(object.confirmed_role_ids))
                    throw TypeError(".CMsgClientToGCSetGuildRoleOrderResponse.confirmed_role_ids: array expected");
                message.confirmed_role_ids = [];
                for (var i = 0; i < object.confirmed_role_ids.length; ++i)
                    message.confirmed_role_ids[i] = object.confirmed_role_ids[i] >>> 0;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCSetGuildRoleOrderResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCSetGuildRoleOrderResponse
         * @static
         * @param {CMsgClientToGCSetGuildRoleOrderResponse} message CMsgClientToGCSetGuildRoleOrderResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCSetGuildRoleOrderResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.confirmed_role_ids = [];
            if (options.defaults)
                object.result = options.enums === String ? "k_eInternalError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCSetGuildRoleOrderResponse.EResponse[message.result] : message.result;
            if (message.confirmed_role_ids && message.confirmed_role_ids.length) {
                object.confirmed_role_ids = [];
                for (var j = 0; j < message.confirmed_role_ids.length; ++j)
                    object.confirmed_role_ids[j] = message.confirmed_role_ids[j];
            }
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCSetGuildRoleOrderResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCSetGuildRoleOrderResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCSetGuildRoleOrderResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCSetGuildRoleOrderResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidGuild=5 k_eInvalidGuild value
         * @property {number} k_eInvalidRole=6 k_eInvalidRole value
         * @property {number} k_eInvalidOrder=7 k_eInvalidOrder value
         * @property {number} k_eNoPermissions=8 k_eNoPermissions value
         * @property {number} k_eAdminViolation=9 k_eAdminViolation value
         */
        CMsgClientToGCSetGuildRoleOrderResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidGuild"] = 5;
            values[valuesById[6] = "k_eInvalidRole"] = 6;
            values[valuesById[7] = "k_eInvalidOrder"] = 7;
            values[valuesById[8] = "k_eNoPermissions"] = 8;
            values[valuesById[9] = "k_eAdminViolation"] = 9;
            return values;
        })();
    
        return CMsgClientToGCSetGuildRoleOrderResponse;
    })();
    
    $root.CMsgClientToGCGuildFeedRequest = (function() {
    
        /**
         * Properties of a CMsgClientToGCGuildFeedRequest.
         * @exports ICMsgClientToGCGuildFeedRequest
         * @interface ICMsgClientToGCGuildFeedRequest
         * @property {number|null} [guild_id] CMsgClientToGCGuildFeedRequest guild_id
         * @property {number|Long|null} [last_seen_id] CMsgClientToGCGuildFeedRequest last_seen_id
         */
    
        /**
         * Constructs a new CMsgClientToGCGuildFeedRequest.
         * @exports CMsgClientToGCGuildFeedRequest
         * @classdesc Represents a CMsgClientToGCGuildFeedRequest.
         * @implements ICMsgClientToGCGuildFeedRequest
         * @constructor
         * @param {ICMsgClientToGCGuildFeedRequest=} [properties] Properties to set
         */
        function CMsgClientToGCGuildFeedRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCGuildFeedRequest guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCGuildFeedRequest
         * @instance
         */
        CMsgClientToGCGuildFeedRequest.prototype.guild_id = 0;
    
        /**
         * CMsgClientToGCGuildFeedRequest last_seen_id.
         * @member {number|Long} last_seen_id
         * @memberof CMsgClientToGCGuildFeedRequest
         * @instance
         */
        CMsgClientToGCGuildFeedRequest.prototype.last_seen_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CMsgClientToGCGuildFeedRequest instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCGuildFeedRequest
         * @static
         * @param {ICMsgClientToGCGuildFeedRequest=} [properties] Properties to set
         * @returns {CMsgClientToGCGuildFeedRequest} CMsgClientToGCGuildFeedRequest instance
         */
        CMsgClientToGCGuildFeedRequest.create = function create(properties) {
            return new CMsgClientToGCGuildFeedRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCGuildFeedRequest message. Does not implicitly {@link CMsgClientToGCGuildFeedRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCGuildFeedRequest
         * @static
         * @param {ICMsgClientToGCGuildFeedRequest} message CMsgClientToGCGuildFeedRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCGuildFeedRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.last_seen_id != null && Object.hasOwnProperty.call(message, "last_seen_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.last_seen_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCGuildFeedRequest message, length delimited. Does not implicitly {@link CMsgClientToGCGuildFeedRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCGuildFeedRequest
         * @static
         * @param {ICMsgClientToGCGuildFeedRequest} message CMsgClientToGCGuildFeedRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCGuildFeedRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCGuildFeedRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCGuildFeedRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCGuildFeedRequest} CMsgClientToGCGuildFeedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCGuildFeedRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCGuildFeedRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.last_seen_id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCGuildFeedRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCGuildFeedRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCGuildFeedRequest} CMsgClientToGCGuildFeedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCGuildFeedRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCGuildFeedRequest message.
         * @function verify
         * @memberof CMsgClientToGCGuildFeedRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCGuildFeedRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.last_seen_id != null && message.hasOwnProperty("last_seen_id"))
                if (!$util.isInteger(message.last_seen_id) && !(message.last_seen_id && $util.isInteger(message.last_seen_id.low) && $util.isInteger(message.last_seen_id.high)))
                    return "last_seen_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCGuildFeedRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCGuildFeedRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCGuildFeedRequest} CMsgClientToGCGuildFeedRequest
         */
        CMsgClientToGCGuildFeedRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCGuildFeedRequest)
                return object;
            var message = new $root.CMsgClientToGCGuildFeedRequest();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            if (object.last_seen_id != null)
                if ($util.Long)
                    (message.last_seen_id = $util.Long.fromValue(object.last_seen_id)).unsigned = true;
                else if (typeof object.last_seen_id === "string")
                    message.last_seen_id = parseInt(object.last_seen_id, 10);
                else if (typeof object.last_seen_id === "number")
                    message.last_seen_id = object.last_seen_id;
                else if (typeof object.last_seen_id === "object")
                    message.last_seen_id = new $util.LongBits(object.last_seen_id.low >>> 0, object.last_seen_id.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCGuildFeedRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCGuildFeedRequest
         * @static
         * @param {CMsgClientToGCGuildFeedRequest} message CMsgClientToGCGuildFeedRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCGuildFeedRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.last_seen_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.last_seen_id = options.longs === String ? "0" : 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.last_seen_id != null && message.hasOwnProperty("last_seen_id"))
                if (typeof message.last_seen_id === "number")
                    object.last_seen_id = options.longs === String ? String(message.last_seen_id) : message.last_seen_id;
                else
                    object.last_seen_id = options.longs === String ? $util.Long.prototype.toString.call(message.last_seen_id) : options.longs === Number ? new $util.LongBits(message.last_seen_id.low >>> 0, message.last_seen_id.high >>> 0).toNumber(true) : message.last_seen_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCGuildFeedRequest to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCGuildFeedRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCGuildFeedRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCGuildFeedRequest;
    })();
    
    $root.CMsgClientToGCRequestGuildFeedResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestGuildFeedResponse.
         * @exports ICMsgClientToGCRequestGuildFeedResponse
         * @interface ICMsgClientToGCRequestGuildFeedResponse
         * @property {CMsgClientToGCRequestGuildFeedResponse.EResponse|null} [result] CMsgClientToGCRequestGuildFeedResponse result
         * @property {number|null} [guild_id] CMsgClientToGCRequestGuildFeedResponse guild_id
         * @property {Array.<ICMsgGuildFeedEvent>|null} [feed_events] CMsgClientToGCRequestGuildFeedResponse feed_events
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestGuildFeedResponse.
         * @exports CMsgClientToGCRequestGuildFeedResponse
         * @classdesc Represents a CMsgClientToGCRequestGuildFeedResponse.
         * @implements ICMsgClientToGCRequestGuildFeedResponse
         * @constructor
         * @param {ICMsgClientToGCRequestGuildFeedResponse=} [properties] Properties to set
         */
        function CMsgClientToGCRequestGuildFeedResponse(properties) {
            this.feed_events = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestGuildFeedResponse result.
         * @member {CMsgClientToGCRequestGuildFeedResponse.EResponse} result
         * @memberof CMsgClientToGCRequestGuildFeedResponse
         * @instance
         */
        CMsgClientToGCRequestGuildFeedResponse.prototype.result = 0;
    
        /**
         * CMsgClientToGCRequestGuildFeedResponse guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCRequestGuildFeedResponse
         * @instance
         */
        CMsgClientToGCRequestGuildFeedResponse.prototype.guild_id = 0;
    
        /**
         * CMsgClientToGCRequestGuildFeedResponse feed_events.
         * @member {Array.<ICMsgGuildFeedEvent>} feed_events
         * @memberof CMsgClientToGCRequestGuildFeedResponse
         * @instance
         */
        CMsgClientToGCRequestGuildFeedResponse.prototype.feed_events = $util.emptyArray;
    
        /**
         * Creates a new CMsgClientToGCRequestGuildFeedResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestGuildFeedResponse
         * @static
         * @param {ICMsgClientToGCRequestGuildFeedResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestGuildFeedResponse} CMsgClientToGCRequestGuildFeedResponse instance
         */
        CMsgClientToGCRequestGuildFeedResponse.create = function create(properties) {
            return new CMsgClientToGCRequestGuildFeedResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildFeedResponse message. Does not implicitly {@link CMsgClientToGCRequestGuildFeedResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestGuildFeedResponse
         * @static
         * @param {ICMsgClientToGCRequestGuildFeedResponse} message CMsgClientToGCRequestGuildFeedResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildFeedResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.guild_id);
            if (message.feed_events != null && message.feed_events.length)
                for (var i = 0; i < message.feed_events.length; ++i)
                    $root.CMsgGuildFeedEvent.encode(message.feed_events[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestGuildFeedResponse message, length delimited. Does not implicitly {@link CMsgClientToGCRequestGuildFeedResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestGuildFeedResponse
         * @static
         * @param {ICMsgClientToGCRequestGuildFeedResponse} message CMsgClientToGCRequestGuildFeedResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestGuildFeedResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestGuildFeedResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestGuildFeedResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestGuildFeedResponse} CMsgClientToGCRequestGuildFeedResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildFeedResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestGuildFeedResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.guild_id = reader.uint32();
                    break;
                case 3:
                    if (!(message.feed_events && message.feed_events.length))
                        message.feed_events = [];
                    message.feed_events.push($root.CMsgGuildFeedEvent.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestGuildFeedResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestGuildFeedResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestGuildFeedResponse} CMsgClientToGCRequestGuildFeedResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestGuildFeedResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestGuildFeedResponse message.
         * @function verify
         * @memberof CMsgClientToGCRequestGuildFeedResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestGuildFeedResponse.verify = function verify(message) {
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
                    break;
                }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.feed_events != null && message.hasOwnProperty("feed_events")) {
                if (!Array.isArray(message.feed_events))
                    return "feed_events: array expected";
                for (var i = 0; i < message.feed_events.length; ++i) {
                    var error = $root.CMsgGuildFeedEvent.verify(message.feed_events[i]);
                    if (error)
                        return "feed_events." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestGuildFeedResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestGuildFeedResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestGuildFeedResponse} CMsgClientToGCRequestGuildFeedResponse
         */
        CMsgClientToGCRequestGuildFeedResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestGuildFeedResponse)
                return object;
            var message = new $root.CMsgClientToGCRequestGuildFeedResponse();
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
            case "k_eInvalidGuild":
            case 5:
                message.result = 5;
                break;
            case "k_eNoPermissions":
            case 6:
                message.result = 6;
                break;
            }
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            if (object.feed_events) {
                if (!Array.isArray(object.feed_events))
                    throw TypeError(".CMsgClientToGCRequestGuildFeedResponse.feed_events: array expected");
                message.feed_events = [];
                for (var i = 0; i < object.feed_events.length; ++i) {
                    if (typeof object.feed_events[i] !== "object")
                        throw TypeError(".CMsgClientToGCRequestGuildFeedResponse.feed_events: object expected");
                    message.feed_events[i] = $root.CMsgGuildFeedEvent.fromObject(object.feed_events[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestGuildFeedResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestGuildFeedResponse
         * @static
         * @param {CMsgClientToGCRequestGuildFeedResponse} message CMsgClientToGCRequestGuildFeedResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestGuildFeedResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.feed_events = [];
            if (options.defaults) {
                object.result = options.enums === String ? "k_eInternalError" : 0;
                object.guild_id = 0;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCRequestGuildFeedResponse.EResponse[message.result] : message.result;
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.feed_events && message.feed_events.length) {
                object.feed_events = [];
                for (var j = 0; j < message.feed_events.length; ++j)
                    object.feed_events[j] = $root.CMsgGuildFeedEvent.toObject(message.feed_events[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestGuildFeedResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestGuildFeedResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestGuildFeedResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCRequestGuildFeedResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidGuild=5 k_eInvalidGuild value
         * @property {number} k_eNoPermissions=6 k_eNoPermissions value
         */
        CMsgClientToGCRequestGuildFeedResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidGuild"] = 5;
            values[valuesById[6] = "k_eNoPermissions"] = 6;
            return values;
        })();
    
        return CMsgClientToGCRequestGuildFeedResponse;
    })();
    
    $root.CMsgGCToClientGuildFeedUpdated = (function() {
    
        /**
         * Properties of a CMsgGCToClientGuildFeedUpdated.
         * @exports ICMsgGCToClientGuildFeedUpdated
         * @interface ICMsgGCToClientGuildFeedUpdated
         * @property {number|null} [guild_id] CMsgGCToClientGuildFeedUpdated guild_id
         */
    
        /**
         * Constructs a new CMsgGCToClientGuildFeedUpdated.
         * @exports CMsgGCToClientGuildFeedUpdated
         * @classdesc Represents a CMsgGCToClientGuildFeedUpdated.
         * @implements ICMsgGCToClientGuildFeedUpdated
         * @constructor
         * @param {ICMsgGCToClientGuildFeedUpdated=} [properties] Properties to set
         */
        function CMsgGCToClientGuildFeedUpdated(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgGCToClientGuildFeedUpdated guild_id.
         * @member {number} guild_id
         * @memberof CMsgGCToClientGuildFeedUpdated
         * @instance
         */
        CMsgGCToClientGuildFeedUpdated.prototype.guild_id = 0;
    
        /**
         * Creates a new CMsgGCToClientGuildFeedUpdated instance using the specified properties.
         * @function create
         * @memberof CMsgGCToClientGuildFeedUpdated
         * @static
         * @param {ICMsgGCToClientGuildFeedUpdated=} [properties] Properties to set
         * @returns {CMsgGCToClientGuildFeedUpdated} CMsgGCToClientGuildFeedUpdated instance
         */
        CMsgGCToClientGuildFeedUpdated.create = function create(properties) {
            return new CMsgGCToClientGuildFeedUpdated(properties);
        };
    
        /**
         * Encodes the specified CMsgGCToClientGuildFeedUpdated message. Does not implicitly {@link CMsgGCToClientGuildFeedUpdated.verify|verify} messages.
         * @function encode
         * @memberof CMsgGCToClientGuildFeedUpdated
         * @static
         * @param {ICMsgGCToClientGuildFeedUpdated} message CMsgGCToClientGuildFeedUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCToClientGuildFeedUpdated.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgGCToClientGuildFeedUpdated message, length delimited. Does not implicitly {@link CMsgGCToClientGuildFeedUpdated.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgGCToClientGuildFeedUpdated
         * @static
         * @param {ICMsgGCToClientGuildFeedUpdated} message CMsgGCToClientGuildFeedUpdated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgGCToClientGuildFeedUpdated.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgGCToClientGuildFeedUpdated message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgGCToClientGuildFeedUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgGCToClientGuildFeedUpdated} CMsgGCToClientGuildFeedUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCToClientGuildFeedUpdated.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgGCToClientGuildFeedUpdated();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgGCToClientGuildFeedUpdated message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgGCToClientGuildFeedUpdated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgGCToClientGuildFeedUpdated} CMsgGCToClientGuildFeedUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgGCToClientGuildFeedUpdated.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgGCToClientGuildFeedUpdated message.
         * @function verify
         * @memberof CMsgGCToClientGuildFeedUpdated
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgGCToClientGuildFeedUpdated.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgGCToClientGuildFeedUpdated message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgGCToClientGuildFeedUpdated
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgGCToClientGuildFeedUpdated} CMsgGCToClientGuildFeedUpdated
         */
        CMsgGCToClientGuildFeedUpdated.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgGCToClientGuildFeedUpdated)
                return object;
            var message = new $root.CMsgGCToClientGuildFeedUpdated();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgGCToClientGuildFeedUpdated message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgGCToClientGuildFeedUpdated
         * @static
         * @param {CMsgGCToClientGuildFeedUpdated} message CMsgGCToClientGuildFeedUpdated
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgGCToClientGuildFeedUpdated.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.guild_id = 0;
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            return object;
        };
    
        /**
         * Converts this CMsgGCToClientGuildFeedUpdated to JSON.
         * @function toJSON
         * @memberof CMsgGCToClientGuildFeedUpdated
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgGCToClientGuildFeedUpdated.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgGCToClientGuildFeedUpdated;
    })();
    
    $root.CMsgClientToGCAddPlayerToGuildChat = (function() {
    
        /**
         * Properties of a CMsgClientToGCAddPlayerToGuildChat.
         * @exports ICMsgClientToGCAddPlayerToGuildChat
         * @interface ICMsgClientToGCAddPlayerToGuildChat
         * @property {number|null} [guild_id] CMsgClientToGCAddPlayerToGuildChat guild_id
         */
    
        /**
         * Constructs a new CMsgClientToGCAddPlayerToGuildChat.
         * @exports CMsgClientToGCAddPlayerToGuildChat
         * @classdesc Represents a CMsgClientToGCAddPlayerToGuildChat.
         * @implements ICMsgClientToGCAddPlayerToGuildChat
         * @constructor
         * @param {ICMsgClientToGCAddPlayerToGuildChat=} [properties] Properties to set
         */
        function CMsgClientToGCAddPlayerToGuildChat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCAddPlayerToGuildChat guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCAddPlayerToGuildChat
         * @instance
         */
        CMsgClientToGCAddPlayerToGuildChat.prototype.guild_id = 0;
    
        /**
         * Creates a new CMsgClientToGCAddPlayerToGuildChat instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCAddPlayerToGuildChat
         * @static
         * @param {ICMsgClientToGCAddPlayerToGuildChat=} [properties] Properties to set
         * @returns {CMsgClientToGCAddPlayerToGuildChat} CMsgClientToGCAddPlayerToGuildChat instance
         */
        CMsgClientToGCAddPlayerToGuildChat.create = function create(properties) {
            return new CMsgClientToGCAddPlayerToGuildChat(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCAddPlayerToGuildChat message. Does not implicitly {@link CMsgClientToGCAddPlayerToGuildChat.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCAddPlayerToGuildChat
         * @static
         * @param {ICMsgClientToGCAddPlayerToGuildChat} message CMsgClientToGCAddPlayerToGuildChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCAddPlayerToGuildChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCAddPlayerToGuildChat message, length delimited. Does not implicitly {@link CMsgClientToGCAddPlayerToGuildChat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCAddPlayerToGuildChat
         * @static
         * @param {ICMsgClientToGCAddPlayerToGuildChat} message CMsgClientToGCAddPlayerToGuildChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCAddPlayerToGuildChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCAddPlayerToGuildChat message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCAddPlayerToGuildChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCAddPlayerToGuildChat} CMsgClientToGCAddPlayerToGuildChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCAddPlayerToGuildChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCAddPlayerToGuildChat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCAddPlayerToGuildChat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCAddPlayerToGuildChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCAddPlayerToGuildChat} CMsgClientToGCAddPlayerToGuildChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCAddPlayerToGuildChat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCAddPlayerToGuildChat message.
         * @function verify
         * @memberof CMsgClientToGCAddPlayerToGuildChat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCAddPlayerToGuildChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCAddPlayerToGuildChat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCAddPlayerToGuildChat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCAddPlayerToGuildChat} CMsgClientToGCAddPlayerToGuildChat
         */
        CMsgClientToGCAddPlayerToGuildChat.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCAddPlayerToGuildChat)
                return object;
            var message = new $root.CMsgClientToGCAddPlayerToGuildChat();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCAddPlayerToGuildChat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCAddPlayerToGuildChat
         * @static
         * @param {CMsgClientToGCAddPlayerToGuildChat} message CMsgClientToGCAddPlayerToGuildChat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCAddPlayerToGuildChat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.guild_id = 0;
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCAddPlayerToGuildChat to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCAddPlayerToGuildChat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCAddPlayerToGuildChat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCAddPlayerToGuildChat;
    })();
    
    $root.CMsgClientToGCAddPlayerToGuildChatResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCAddPlayerToGuildChatResponse.
         * @exports ICMsgClientToGCAddPlayerToGuildChatResponse
         * @interface ICMsgClientToGCAddPlayerToGuildChatResponse
         * @property {CMsgClientToGCAddPlayerToGuildChatResponse.EResponse|null} [result] CMsgClientToGCAddPlayerToGuildChatResponse result
         */
    
        /**
         * Constructs a new CMsgClientToGCAddPlayerToGuildChatResponse.
         * @exports CMsgClientToGCAddPlayerToGuildChatResponse
         * @classdesc Represents a CMsgClientToGCAddPlayerToGuildChatResponse.
         * @implements ICMsgClientToGCAddPlayerToGuildChatResponse
         * @constructor
         * @param {ICMsgClientToGCAddPlayerToGuildChatResponse=} [properties] Properties to set
         */
        function CMsgClientToGCAddPlayerToGuildChatResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCAddPlayerToGuildChatResponse result.
         * @member {CMsgClientToGCAddPlayerToGuildChatResponse.EResponse} result
         * @memberof CMsgClientToGCAddPlayerToGuildChatResponse
         * @instance
         */
        CMsgClientToGCAddPlayerToGuildChatResponse.prototype.result = 0;
    
        /**
         * Creates a new CMsgClientToGCAddPlayerToGuildChatResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCAddPlayerToGuildChatResponse
         * @static
         * @param {ICMsgClientToGCAddPlayerToGuildChatResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCAddPlayerToGuildChatResponse} CMsgClientToGCAddPlayerToGuildChatResponse instance
         */
        CMsgClientToGCAddPlayerToGuildChatResponse.create = function create(properties) {
            return new CMsgClientToGCAddPlayerToGuildChatResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCAddPlayerToGuildChatResponse message. Does not implicitly {@link CMsgClientToGCAddPlayerToGuildChatResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCAddPlayerToGuildChatResponse
         * @static
         * @param {ICMsgClientToGCAddPlayerToGuildChatResponse} message CMsgClientToGCAddPlayerToGuildChatResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCAddPlayerToGuildChatResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCAddPlayerToGuildChatResponse message, length delimited. Does not implicitly {@link CMsgClientToGCAddPlayerToGuildChatResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCAddPlayerToGuildChatResponse
         * @static
         * @param {ICMsgClientToGCAddPlayerToGuildChatResponse} message CMsgClientToGCAddPlayerToGuildChatResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCAddPlayerToGuildChatResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCAddPlayerToGuildChatResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCAddPlayerToGuildChatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCAddPlayerToGuildChatResponse} CMsgClientToGCAddPlayerToGuildChatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCAddPlayerToGuildChatResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCAddPlayerToGuildChatResponse();
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
         * Decodes a CMsgClientToGCAddPlayerToGuildChatResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCAddPlayerToGuildChatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCAddPlayerToGuildChatResponse} CMsgClientToGCAddPlayerToGuildChatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCAddPlayerToGuildChatResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCAddPlayerToGuildChatResponse message.
         * @function verify
         * @memberof CMsgClientToGCAddPlayerToGuildChatResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCAddPlayerToGuildChatResponse.verify = function verify(message) {
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
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCAddPlayerToGuildChatResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCAddPlayerToGuildChatResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCAddPlayerToGuildChatResponse} CMsgClientToGCAddPlayerToGuildChatResponse
         */
        CMsgClientToGCAddPlayerToGuildChatResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCAddPlayerToGuildChatResponse)
                return object;
            var message = new $root.CMsgClientToGCAddPlayerToGuildChatResponse();
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
            case "k_eInvalidGuild":
            case 5:
                message.result = 5;
                break;
            case "k_eNotMember":
            case 6:
                message.result = 6;
                break;
            case "k_eSteamChatNotEnabled":
            case 7:
                message.result = 7;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCAddPlayerToGuildChatResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCAddPlayerToGuildChatResponse
         * @static
         * @param {CMsgClientToGCAddPlayerToGuildChatResponse} message CMsgClientToGCAddPlayerToGuildChatResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCAddPlayerToGuildChatResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = options.enums === String ? "k_eInternalError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCAddPlayerToGuildChatResponse.EResponse[message.result] : message.result;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCAddPlayerToGuildChatResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCAddPlayerToGuildChatResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCAddPlayerToGuildChatResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCAddPlayerToGuildChatResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidGuild=5 k_eInvalidGuild value
         * @property {number} k_eNotMember=6 k_eNotMember value
         * @property {number} k_eSteamChatNotEnabled=7 k_eSteamChatNotEnabled value
         */
        CMsgClientToGCAddPlayerToGuildChatResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidGuild"] = 5;
            values[valuesById[6] = "k_eNotMember"] = 6;
            values[valuesById[7] = "k_eSteamChatNotEnabled"] = 7;
            return values;
        })();
    
        return CMsgClientToGCAddPlayerToGuildChatResponse;
    })();
    
    $root.CMsgFindGuildByTagResponse = (function() {
    
        /**
         * Properties of a CMsgFindGuildByTagResponse.
         * @exports ICMsgFindGuildByTagResponse
         * @interface ICMsgFindGuildByTagResponse
         * @property {CMsgFindGuildByTagResponse.EResponse|null} [result] CMsgFindGuildByTagResponse result
         * @property {number|null} [guild_id] CMsgFindGuildByTagResponse guild_id
         * @property {ICMsgGuildSummary|null} [guild_summary] CMsgFindGuildByTagResponse guild_summary
         */
    
        /**
         * Constructs a new CMsgFindGuildByTagResponse.
         * @exports CMsgFindGuildByTagResponse
         * @classdesc Represents a CMsgFindGuildByTagResponse.
         * @implements ICMsgFindGuildByTagResponse
         * @constructor
         * @param {ICMsgFindGuildByTagResponse=} [properties] Properties to set
         */
        function CMsgFindGuildByTagResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgFindGuildByTagResponse result.
         * @member {CMsgFindGuildByTagResponse.EResponse} result
         * @memberof CMsgFindGuildByTagResponse
         * @instance
         */
        CMsgFindGuildByTagResponse.prototype.result = 0;
    
        /**
         * CMsgFindGuildByTagResponse guild_id.
         * @member {number} guild_id
         * @memberof CMsgFindGuildByTagResponse
         * @instance
         */
        CMsgFindGuildByTagResponse.prototype.guild_id = 0;
    
        /**
         * CMsgFindGuildByTagResponse guild_summary.
         * @member {ICMsgGuildSummary|null|undefined} guild_summary
         * @memberof CMsgFindGuildByTagResponse
         * @instance
         */
        CMsgFindGuildByTagResponse.prototype.guild_summary = null;
    
        /**
         * Creates a new CMsgFindGuildByTagResponse instance using the specified properties.
         * @function create
         * @memberof CMsgFindGuildByTagResponse
         * @static
         * @param {ICMsgFindGuildByTagResponse=} [properties] Properties to set
         * @returns {CMsgFindGuildByTagResponse} CMsgFindGuildByTagResponse instance
         */
        CMsgFindGuildByTagResponse.create = function create(properties) {
            return new CMsgFindGuildByTagResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgFindGuildByTagResponse message. Does not implicitly {@link CMsgFindGuildByTagResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgFindGuildByTagResponse
         * @static
         * @param {ICMsgFindGuildByTagResponse} message CMsgFindGuildByTagResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgFindGuildByTagResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.guild_id);
            if (message.guild_summary != null && Object.hasOwnProperty.call(message, "guild_summary"))
                $root.CMsgGuildSummary.encode(message.guild_summary, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgFindGuildByTagResponse message, length delimited. Does not implicitly {@link CMsgFindGuildByTagResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgFindGuildByTagResponse
         * @static
         * @param {ICMsgFindGuildByTagResponse} message CMsgFindGuildByTagResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgFindGuildByTagResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgFindGuildByTagResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgFindGuildByTagResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgFindGuildByTagResponse} CMsgFindGuildByTagResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgFindGuildByTagResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgFindGuildByTagResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.guild_id = reader.uint32();
                    break;
                case 3:
                    message.guild_summary = $root.CMsgGuildSummary.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgFindGuildByTagResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgFindGuildByTagResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgFindGuildByTagResponse} CMsgFindGuildByTagResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgFindGuildByTagResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgFindGuildByTagResponse message.
         * @function verify
         * @memberof CMsgFindGuildByTagResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgFindGuildByTagResponse.verify = function verify(message) {
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
                    break;
                }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.guild_summary != null && message.hasOwnProperty("guild_summary")) {
                var error = $root.CMsgGuildSummary.verify(message.guild_summary);
                if (error)
                    return "guild_summary." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgFindGuildByTagResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgFindGuildByTagResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgFindGuildByTagResponse} CMsgFindGuildByTagResponse
         */
        CMsgFindGuildByTagResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgFindGuildByTagResponse)
                return object;
            var message = new $root.CMsgFindGuildByTagResponse();
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
            case "k_eInvalidTag":
            case 5:
                message.result = 5;
                break;
            case "k_eGuildNotFound":
            case 6:
                message.result = 6;
                break;
            }
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            if (object.guild_summary != null) {
                if (typeof object.guild_summary !== "object")
                    throw TypeError(".CMsgFindGuildByTagResponse.guild_summary: object expected");
                message.guild_summary = $root.CMsgGuildSummary.fromObject(object.guild_summary);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgFindGuildByTagResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgFindGuildByTagResponse
         * @static
         * @param {CMsgFindGuildByTagResponse} message CMsgFindGuildByTagResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgFindGuildByTagResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = options.enums === String ? "k_eInternalError" : 0;
                object.guild_id = 0;
                object.guild_summary = null;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgFindGuildByTagResponse.EResponse[message.result] : message.result;
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.guild_summary != null && message.hasOwnProperty("guild_summary"))
                object.guild_summary = $root.CMsgGuildSummary.toObject(message.guild_summary, options);
            return object;
        };
    
        /**
         * Converts this CMsgFindGuildByTagResponse to JSON.
         * @function toJSON
         * @memberof CMsgFindGuildByTagResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgFindGuildByTagResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgFindGuildByTagResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidTag=5 k_eInvalidTag value
         * @property {number} k_eGuildNotFound=6 k_eGuildNotFound value
         */
        CMsgFindGuildByTagResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidTag"] = 5;
            values[valuesById[6] = "k_eGuildNotFound"] = 6;
            return values;
        })();
    
        return CMsgFindGuildByTagResponse;
    })();
    
    $root.CMsgSearchForOpenGuildsResponse = (function() {
    
        /**
         * Properties of a CMsgSearchForOpenGuildsResponse.
         * @exports ICMsgSearchForOpenGuildsResponse
         * @interface ICMsgSearchForOpenGuildsResponse
         * @property {CMsgSearchForOpenGuildsResponse.EResponse|null} [result] CMsgSearchForOpenGuildsResponse result
         * @property {Array.<CMsgSearchForOpenGuildsResponse.ISearchResult>|null} [search_results] CMsgSearchForOpenGuildsResponse search_results
         * @property {boolean|null} [use_whitelist] CMsgSearchForOpenGuildsResponse use_whitelist
         */
    
        /**
         * Constructs a new CMsgSearchForOpenGuildsResponse.
         * @exports CMsgSearchForOpenGuildsResponse
         * @classdesc Represents a CMsgSearchForOpenGuildsResponse.
         * @implements ICMsgSearchForOpenGuildsResponse
         * @constructor
         * @param {ICMsgSearchForOpenGuildsResponse=} [properties] Properties to set
         */
        function CMsgSearchForOpenGuildsResponse(properties) {
            this.search_results = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSearchForOpenGuildsResponse result.
         * @member {CMsgSearchForOpenGuildsResponse.EResponse} result
         * @memberof CMsgSearchForOpenGuildsResponse
         * @instance
         */
        CMsgSearchForOpenGuildsResponse.prototype.result = 0;
    
        /**
         * CMsgSearchForOpenGuildsResponse search_results.
         * @member {Array.<CMsgSearchForOpenGuildsResponse.ISearchResult>} search_results
         * @memberof CMsgSearchForOpenGuildsResponse
         * @instance
         */
        CMsgSearchForOpenGuildsResponse.prototype.search_results = $util.emptyArray;
    
        /**
         * CMsgSearchForOpenGuildsResponse use_whitelist.
         * @member {boolean} use_whitelist
         * @memberof CMsgSearchForOpenGuildsResponse
         * @instance
         */
        CMsgSearchForOpenGuildsResponse.prototype.use_whitelist = false;
    
        /**
         * Creates a new CMsgSearchForOpenGuildsResponse instance using the specified properties.
         * @function create
         * @memberof CMsgSearchForOpenGuildsResponse
         * @static
         * @param {ICMsgSearchForOpenGuildsResponse=} [properties] Properties to set
         * @returns {CMsgSearchForOpenGuildsResponse} CMsgSearchForOpenGuildsResponse instance
         */
        CMsgSearchForOpenGuildsResponse.create = function create(properties) {
            return new CMsgSearchForOpenGuildsResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgSearchForOpenGuildsResponse message. Does not implicitly {@link CMsgSearchForOpenGuildsResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgSearchForOpenGuildsResponse
         * @static
         * @param {ICMsgSearchForOpenGuildsResponse} message CMsgSearchForOpenGuildsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSearchForOpenGuildsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.search_results != null && message.search_results.length)
                for (var i = 0; i < message.search_results.length; ++i)
                    $root.CMsgSearchForOpenGuildsResponse.SearchResult.encode(message.search_results[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.use_whitelist != null && Object.hasOwnProperty.call(message, "use_whitelist"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.use_whitelist);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSearchForOpenGuildsResponse message, length delimited. Does not implicitly {@link CMsgSearchForOpenGuildsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSearchForOpenGuildsResponse
         * @static
         * @param {ICMsgSearchForOpenGuildsResponse} message CMsgSearchForOpenGuildsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSearchForOpenGuildsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSearchForOpenGuildsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSearchForOpenGuildsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSearchForOpenGuildsResponse} CMsgSearchForOpenGuildsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSearchForOpenGuildsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSearchForOpenGuildsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    if (!(message.search_results && message.search_results.length))
                        message.search_results = [];
                    message.search_results.push($root.CMsgSearchForOpenGuildsResponse.SearchResult.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.use_whitelist = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSearchForOpenGuildsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSearchForOpenGuildsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSearchForOpenGuildsResponse} CMsgSearchForOpenGuildsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSearchForOpenGuildsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSearchForOpenGuildsResponse message.
         * @function verify
         * @memberof CMsgSearchForOpenGuildsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSearchForOpenGuildsResponse.verify = function verify(message) {
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
                    break;
                }
            if (message.search_results != null && message.hasOwnProperty("search_results")) {
                if (!Array.isArray(message.search_results))
                    return "search_results: array expected";
                for (var i = 0; i < message.search_results.length; ++i) {
                    var error = $root.CMsgSearchForOpenGuildsResponse.SearchResult.verify(message.search_results[i]);
                    if (error)
                        return "search_results." + error;
                }
            }
            if (message.use_whitelist != null && message.hasOwnProperty("use_whitelist"))
                if (typeof message.use_whitelist !== "boolean")
                    return "use_whitelist: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgSearchForOpenGuildsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSearchForOpenGuildsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSearchForOpenGuildsResponse} CMsgSearchForOpenGuildsResponse
         */
        CMsgSearchForOpenGuildsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSearchForOpenGuildsResponse)
                return object;
            var message = new $root.CMsgSearchForOpenGuildsResponse();
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
            }
            if (object.search_results) {
                if (!Array.isArray(object.search_results))
                    throw TypeError(".CMsgSearchForOpenGuildsResponse.search_results: array expected");
                message.search_results = [];
                for (var i = 0; i < object.search_results.length; ++i) {
                    if (typeof object.search_results[i] !== "object")
                        throw TypeError(".CMsgSearchForOpenGuildsResponse.search_results: object expected");
                    message.search_results[i] = $root.CMsgSearchForOpenGuildsResponse.SearchResult.fromObject(object.search_results[i]);
                }
            }
            if (object.use_whitelist != null)
                message.use_whitelist = Boolean(object.use_whitelist);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSearchForOpenGuildsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSearchForOpenGuildsResponse
         * @static
         * @param {CMsgSearchForOpenGuildsResponse} message CMsgSearchForOpenGuildsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSearchForOpenGuildsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.search_results = [];
            if (options.defaults) {
                object.result = options.enums === String ? "k_eInternalError" : 0;
                object.use_whitelist = false;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgSearchForOpenGuildsResponse.EResponse[message.result] : message.result;
            if (message.search_results && message.search_results.length) {
                object.search_results = [];
                for (var j = 0; j < message.search_results.length; ++j)
                    object.search_results[j] = $root.CMsgSearchForOpenGuildsResponse.SearchResult.toObject(message.search_results[j], options);
            }
            if (message.use_whitelist != null && message.hasOwnProperty("use_whitelist"))
                object.use_whitelist = message.use_whitelist;
            return object;
        };
    
        /**
         * Converts this CMsgSearchForOpenGuildsResponse to JSON.
         * @function toJSON
         * @memberof CMsgSearchForOpenGuildsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSearchForOpenGuildsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgSearchForOpenGuildsResponse.SearchResult = (function() {
    
            /**
             * Properties of a SearchResult.
             * @memberof CMsgSearchForOpenGuildsResponse
             * @interface ISearchResult
             * @property {number|null} [guild_id] SearchResult guild_id
             * @property {ICMsgGuildSummary|null} [guild_summary] SearchResult guild_summary
             */
    
            /**
             * Constructs a new SearchResult.
             * @memberof CMsgSearchForOpenGuildsResponse
             * @classdesc Represents a SearchResult.
             * @implements ISearchResult
             * @constructor
             * @param {CMsgSearchForOpenGuildsResponse.ISearchResult=} [properties] Properties to set
             */
            function SearchResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SearchResult guild_id.
             * @member {number} guild_id
             * @memberof CMsgSearchForOpenGuildsResponse.SearchResult
             * @instance
             */
            SearchResult.prototype.guild_id = 0;
    
            /**
             * SearchResult guild_summary.
             * @member {ICMsgGuildSummary|null|undefined} guild_summary
             * @memberof CMsgSearchForOpenGuildsResponse.SearchResult
             * @instance
             */
            SearchResult.prototype.guild_summary = null;
    
            /**
             * Creates a new SearchResult instance using the specified properties.
             * @function create
             * @memberof CMsgSearchForOpenGuildsResponse.SearchResult
             * @static
             * @param {CMsgSearchForOpenGuildsResponse.ISearchResult=} [properties] Properties to set
             * @returns {CMsgSearchForOpenGuildsResponse.SearchResult} SearchResult instance
             */
            SearchResult.create = function create(properties) {
                return new SearchResult(properties);
            };
    
            /**
             * Encodes the specified SearchResult message. Does not implicitly {@link CMsgSearchForOpenGuildsResponse.SearchResult.verify|verify} messages.
             * @function encode
             * @memberof CMsgSearchForOpenGuildsResponse.SearchResult
             * @static
             * @param {CMsgSearchForOpenGuildsResponse.ISearchResult} message SearchResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
                if (message.guild_summary != null && Object.hasOwnProperty.call(message, "guild_summary"))
                    $root.CMsgGuildSummary.encode(message.guild_summary, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified SearchResult message, length delimited. Does not implicitly {@link CMsgSearchForOpenGuildsResponse.SearchResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgSearchForOpenGuildsResponse.SearchResult
             * @static
             * @param {CMsgSearchForOpenGuildsResponse.ISearchResult} message SearchResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SearchResult message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgSearchForOpenGuildsResponse.SearchResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgSearchForOpenGuildsResponse.SearchResult} SearchResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSearchForOpenGuildsResponse.SearchResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.guild_id = reader.uint32();
                        break;
                    case 2:
                        message.guild_summary = $root.CMsgGuildSummary.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SearchResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgSearchForOpenGuildsResponse.SearchResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgSearchForOpenGuildsResponse.SearchResult} SearchResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SearchResult message.
             * @function verify
             * @memberof CMsgSearchForOpenGuildsResponse.SearchResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SearchResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                    if (!$util.isInteger(message.guild_id))
                        return "guild_id: integer expected";
                if (message.guild_summary != null && message.hasOwnProperty("guild_summary")) {
                    var error = $root.CMsgGuildSummary.verify(message.guild_summary);
                    if (error)
                        return "guild_summary." + error;
                }
                return null;
            };
    
            /**
             * Creates a SearchResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgSearchForOpenGuildsResponse.SearchResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgSearchForOpenGuildsResponse.SearchResult} SearchResult
             */
            SearchResult.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgSearchForOpenGuildsResponse.SearchResult)
                    return object;
                var message = new $root.CMsgSearchForOpenGuildsResponse.SearchResult();
                if (object.guild_id != null)
                    message.guild_id = object.guild_id >>> 0;
                if (object.guild_summary != null) {
                    if (typeof object.guild_summary !== "object")
                        throw TypeError(".CMsgSearchForOpenGuildsResponse.SearchResult.guild_summary: object expected");
                    message.guild_summary = $root.CMsgGuildSummary.fromObject(object.guild_summary);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SearchResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgSearchForOpenGuildsResponse.SearchResult
             * @static
             * @param {CMsgSearchForOpenGuildsResponse.SearchResult} message SearchResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SearchResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.guild_id = 0;
                    object.guild_summary = null;
                }
                if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                    object.guild_id = message.guild_id;
                if (message.guild_summary != null && message.hasOwnProperty("guild_summary"))
                    object.guild_summary = $root.CMsgGuildSummary.toObject(message.guild_summary, options);
                return object;
            };
    
            /**
             * Converts this SearchResult to JSON.
             * @function toJSON
             * @memberof CMsgSearchForOpenGuildsResponse.SearchResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SearchResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SearchResult;
        })();
    
        /**
         * EResponse enum.
         * @name CMsgSearchForOpenGuildsResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         */
        CMsgSearchForOpenGuildsResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            return values;
        })();
    
        return CMsgSearchForOpenGuildsResponse;
    })();
    
    $root.CMsgClientToGCReportGuildContent = (function() {
    
        /**
         * Properties of a CMsgClientToGCReportGuildContent.
         * @exports ICMsgClientToGCReportGuildContent
         * @interface ICMsgClientToGCReportGuildContent
         * @property {number|null} [guild_id] CMsgClientToGCReportGuildContent guild_id
         * @property {number|null} [guild_content_flags] CMsgClientToGCReportGuildContent guild_content_flags
         */
    
        /**
         * Constructs a new CMsgClientToGCReportGuildContent.
         * @exports CMsgClientToGCReportGuildContent
         * @classdesc Represents a CMsgClientToGCReportGuildContent.
         * @implements ICMsgClientToGCReportGuildContent
         * @constructor
         * @param {ICMsgClientToGCReportGuildContent=} [properties] Properties to set
         */
        function CMsgClientToGCReportGuildContent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCReportGuildContent guild_id.
         * @member {number} guild_id
         * @memberof CMsgClientToGCReportGuildContent
         * @instance
         */
        CMsgClientToGCReportGuildContent.prototype.guild_id = 0;
    
        /**
         * CMsgClientToGCReportGuildContent guild_content_flags.
         * @member {number} guild_content_flags
         * @memberof CMsgClientToGCReportGuildContent
         * @instance
         */
        CMsgClientToGCReportGuildContent.prototype.guild_content_flags = 0;
    
        /**
         * Creates a new CMsgClientToGCReportGuildContent instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCReportGuildContent
         * @static
         * @param {ICMsgClientToGCReportGuildContent=} [properties] Properties to set
         * @returns {CMsgClientToGCReportGuildContent} CMsgClientToGCReportGuildContent instance
         */
        CMsgClientToGCReportGuildContent.create = function create(properties) {
            return new CMsgClientToGCReportGuildContent(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCReportGuildContent message. Does not implicitly {@link CMsgClientToGCReportGuildContent.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCReportGuildContent
         * @static
         * @param {ICMsgClientToGCReportGuildContent} message CMsgClientToGCReportGuildContent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCReportGuildContent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guild_id != null && Object.hasOwnProperty.call(message, "guild_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.guild_id);
            if (message.guild_content_flags != null && Object.hasOwnProperty.call(message, "guild_content_flags"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.guild_content_flags);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCReportGuildContent message, length delimited. Does not implicitly {@link CMsgClientToGCReportGuildContent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCReportGuildContent
         * @static
         * @param {ICMsgClientToGCReportGuildContent} message CMsgClientToGCReportGuildContent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCReportGuildContent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCReportGuildContent message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCReportGuildContent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCReportGuildContent} CMsgClientToGCReportGuildContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCReportGuildContent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCReportGuildContent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guild_id = reader.uint32();
                    break;
                case 2:
                    message.guild_content_flags = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCReportGuildContent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCReportGuildContent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCReportGuildContent} CMsgClientToGCReportGuildContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCReportGuildContent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCReportGuildContent message.
         * @function verify
         * @memberof CMsgClientToGCReportGuildContent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCReportGuildContent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                if (!$util.isInteger(message.guild_id))
                    return "guild_id: integer expected";
            if (message.guild_content_flags != null && message.hasOwnProperty("guild_content_flags"))
                if (!$util.isInteger(message.guild_content_flags))
                    return "guild_content_flags: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCReportGuildContent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCReportGuildContent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCReportGuildContent} CMsgClientToGCReportGuildContent
         */
        CMsgClientToGCReportGuildContent.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCReportGuildContent)
                return object;
            var message = new $root.CMsgClientToGCReportGuildContent();
            if (object.guild_id != null)
                message.guild_id = object.guild_id >>> 0;
            if (object.guild_content_flags != null)
                message.guild_content_flags = object.guild_content_flags >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCReportGuildContent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCReportGuildContent
         * @static
         * @param {CMsgClientToGCReportGuildContent} message CMsgClientToGCReportGuildContent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCReportGuildContent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.guild_id = 0;
                object.guild_content_flags = 0;
            }
            if (message.guild_id != null && message.hasOwnProperty("guild_id"))
                object.guild_id = message.guild_id;
            if (message.guild_content_flags != null && message.hasOwnProperty("guild_content_flags"))
                object.guild_content_flags = message.guild_content_flags;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCReportGuildContent to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCReportGuildContent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCReportGuildContent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EContentFlags enum.
         * @name CMsgClientToGCReportGuildContent.EContentFlags
         * @enum {number}
         * @property {number} k_eNone=0 k_eNone value
         * @property {number} k_eInappropriateName=1 k_eInappropriateName value
         * @property {number} k_eInappropriateTag=2 k_eInappropriateTag value
         * @property {number} k_eInappropriateLogo=4 k_eInappropriateLogo value
         * @property {number} k_eValidFlags=7 k_eValidFlags value
         */
        CMsgClientToGCReportGuildContent.EContentFlags = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eNone"] = 0;
            values[valuesById[1] = "k_eInappropriateName"] = 1;
            values[valuesById[2] = "k_eInappropriateTag"] = 2;
            values[valuesById[4] = "k_eInappropriateLogo"] = 4;
            values[valuesById[7] = "k_eValidFlags"] = 7;
            return values;
        })();
    
        return CMsgClientToGCReportGuildContent;
    })();
    
    $root.CMsgClientToGCReportGuildContentResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCReportGuildContentResponse.
         * @exports ICMsgClientToGCReportGuildContentResponse
         * @interface ICMsgClientToGCReportGuildContentResponse
         * @property {CMsgClientToGCReportGuildContentResponse.EResponse|null} [result] CMsgClientToGCReportGuildContentResponse result
         */
    
        /**
         * Constructs a new CMsgClientToGCReportGuildContentResponse.
         * @exports CMsgClientToGCReportGuildContentResponse
         * @classdesc Represents a CMsgClientToGCReportGuildContentResponse.
         * @implements ICMsgClientToGCReportGuildContentResponse
         * @constructor
         * @param {ICMsgClientToGCReportGuildContentResponse=} [properties] Properties to set
         */
        function CMsgClientToGCReportGuildContentResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCReportGuildContentResponse result.
         * @member {CMsgClientToGCReportGuildContentResponse.EResponse} result
         * @memberof CMsgClientToGCReportGuildContentResponse
         * @instance
         */
        CMsgClientToGCReportGuildContentResponse.prototype.result = 0;
    
        /**
         * Creates a new CMsgClientToGCReportGuildContentResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCReportGuildContentResponse
         * @static
         * @param {ICMsgClientToGCReportGuildContentResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCReportGuildContentResponse} CMsgClientToGCReportGuildContentResponse instance
         */
        CMsgClientToGCReportGuildContentResponse.create = function create(properties) {
            return new CMsgClientToGCReportGuildContentResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCReportGuildContentResponse message. Does not implicitly {@link CMsgClientToGCReportGuildContentResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCReportGuildContentResponse
         * @static
         * @param {ICMsgClientToGCReportGuildContentResponse} message CMsgClientToGCReportGuildContentResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCReportGuildContentResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCReportGuildContentResponse message, length delimited. Does not implicitly {@link CMsgClientToGCReportGuildContentResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCReportGuildContentResponse
         * @static
         * @param {ICMsgClientToGCReportGuildContentResponse} message CMsgClientToGCReportGuildContentResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCReportGuildContentResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCReportGuildContentResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCReportGuildContentResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCReportGuildContentResponse} CMsgClientToGCReportGuildContentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCReportGuildContentResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCReportGuildContentResponse();
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
         * Decodes a CMsgClientToGCReportGuildContentResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCReportGuildContentResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCReportGuildContentResponse} CMsgClientToGCReportGuildContentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCReportGuildContentResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCReportGuildContentResponse message.
         * @function verify
         * @memberof CMsgClientToGCReportGuildContentResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCReportGuildContentResponse.verify = function verify(message) {
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
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCReportGuildContentResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCReportGuildContentResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCReportGuildContentResponse} CMsgClientToGCReportGuildContentResponse
         */
        CMsgClientToGCReportGuildContentResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCReportGuildContentResponse)
                return object;
            var message = new $root.CMsgClientToGCReportGuildContentResponse();
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
            case "k_eGuildNotFound":
            case 5:
                message.result = 5;
                break;
            case "k_eFlagsInvalid":
            case 6:
                message.result = 6;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCReportGuildContentResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCReportGuildContentResponse
         * @static
         * @param {CMsgClientToGCReportGuildContentResponse} message CMsgClientToGCReportGuildContentResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCReportGuildContentResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = options.enums === String ? "k_eInternalError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCReportGuildContentResponse.EResponse[message.result] : message.result;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCReportGuildContentResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCReportGuildContentResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCReportGuildContentResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCReportGuildContentResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eGuildNotFound=5 k_eGuildNotFound value
         * @property {number} k_eFlagsInvalid=6 k_eFlagsInvalid value
         */
        CMsgClientToGCReportGuildContentResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eGuildNotFound"] = 5;
            values[valuesById[6] = "k_eFlagsInvalid"] = 6;
            return values;
        })();
    
        return CMsgClientToGCReportGuildContentResponse;
    })();
    
    $root.CMsgClientToGCRequestAccountGuildPersonaInfo = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestAccountGuildPersonaInfo.
         * @exports ICMsgClientToGCRequestAccountGuildPersonaInfo
         * @interface ICMsgClientToGCRequestAccountGuildPersonaInfo
         * @property {number|null} [account_id] CMsgClientToGCRequestAccountGuildPersonaInfo account_id
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestAccountGuildPersonaInfo.
         * @exports CMsgClientToGCRequestAccountGuildPersonaInfo
         * @classdesc Represents a CMsgClientToGCRequestAccountGuildPersonaInfo.
         * @implements ICMsgClientToGCRequestAccountGuildPersonaInfo
         * @constructor
         * @param {ICMsgClientToGCRequestAccountGuildPersonaInfo=} [properties] Properties to set
         */
        function CMsgClientToGCRequestAccountGuildPersonaInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestAccountGuildPersonaInfo account_id.
         * @member {number} account_id
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfo
         * @instance
         */
        CMsgClientToGCRequestAccountGuildPersonaInfo.prototype.account_id = 0;
    
        /**
         * Creates a new CMsgClientToGCRequestAccountGuildPersonaInfo instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfo
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildPersonaInfo=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestAccountGuildPersonaInfo} CMsgClientToGCRequestAccountGuildPersonaInfo instance
         */
        CMsgClientToGCRequestAccountGuildPersonaInfo.create = function create(properties) {
            return new CMsgClientToGCRequestAccountGuildPersonaInfo(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestAccountGuildPersonaInfo message. Does not implicitly {@link CMsgClientToGCRequestAccountGuildPersonaInfo.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfo
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildPersonaInfo} message CMsgClientToGCRequestAccountGuildPersonaInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestAccountGuildPersonaInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account_id != null && Object.hasOwnProperty.call(message, "account_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.account_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestAccountGuildPersonaInfo message, length delimited. Does not implicitly {@link CMsgClientToGCRequestAccountGuildPersonaInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfo
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildPersonaInfo} message CMsgClientToGCRequestAccountGuildPersonaInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestAccountGuildPersonaInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestAccountGuildPersonaInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestAccountGuildPersonaInfo} CMsgClientToGCRequestAccountGuildPersonaInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestAccountGuildPersonaInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestAccountGuildPersonaInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestAccountGuildPersonaInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestAccountGuildPersonaInfo} CMsgClientToGCRequestAccountGuildPersonaInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestAccountGuildPersonaInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestAccountGuildPersonaInfo message.
         * @function verify
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestAccountGuildPersonaInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account_id != null && message.hasOwnProperty("account_id"))
                if (!$util.isInteger(message.account_id))
                    return "account_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestAccountGuildPersonaInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestAccountGuildPersonaInfo} CMsgClientToGCRequestAccountGuildPersonaInfo
         */
        CMsgClientToGCRequestAccountGuildPersonaInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestAccountGuildPersonaInfo)
                return object;
            var message = new $root.CMsgClientToGCRequestAccountGuildPersonaInfo();
            if (object.account_id != null)
                message.account_id = object.account_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestAccountGuildPersonaInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfo
         * @static
         * @param {CMsgClientToGCRequestAccountGuildPersonaInfo} message CMsgClientToGCRequestAccountGuildPersonaInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestAccountGuildPersonaInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.account_id = 0;
            if (message.account_id != null && message.hasOwnProperty("account_id"))
                object.account_id = message.account_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestAccountGuildPersonaInfo to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestAccountGuildPersonaInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCRequestAccountGuildPersonaInfo;
    })();
    
    $root.CMsgClientToGCRequestAccountGuildPersonaInfoResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestAccountGuildPersonaInfoResponse.
         * @exports ICMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @interface ICMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @property {CMsgClientToGCRequestAccountGuildPersonaInfoResponse.EResponse|null} [result] CMsgClientToGCRequestAccountGuildPersonaInfoResponse result
         * @property {ICMsgAccountGuildsPersonaInfo|null} [persona_info] CMsgClientToGCRequestAccountGuildPersonaInfoResponse persona_info
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestAccountGuildPersonaInfoResponse.
         * @exports CMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @classdesc Represents a CMsgClientToGCRequestAccountGuildPersonaInfoResponse.
         * @implements ICMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @constructor
         * @param {ICMsgClientToGCRequestAccountGuildPersonaInfoResponse=} [properties] Properties to set
         */
        function CMsgClientToGCRequestAccountGuildPersonaInfoResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestAccountGuildPersonaInfoResponse result.
         * @member {CMsgClientToGCRequestAccountGuildPersonaInfoResponse.EResponse} result
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @instance
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoResponse.prototype.result = 0;
    
        /**
         * CMsgClientToGCRequestAccountGuildPersonaInfoResponse persona_info.
         * @member {ICMsgAccountGuildsPersonaInfo|null|undefined} persona_info
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @instance
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoResponse.prototype.persona_info = null;
    
        /**
         * Creates a new CMsgClientToGCRequestAccountGuildPersonaInfoResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildPersonaInfoResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestAccountGuildPersonaInfoResponse} CMsgClientToGCRequestAccountGuildPersonaInfoResponse instance
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoResponse.create = function create(properties) {
            return new CMsgClientToGCRequestAccountGuildPersonaInfoResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestAccountGuildPersonaInfoResponse message. Does not implicitly {@link CMsgClientToGCRequestAccountGuildPersonaInfoResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildPersonaInfoResponse} message CMsgClientToGCRequestAccountGuildPersonaInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.persona_info != null && Object.hasOwnProperty.call(message, "persona_info"))
                $root.CMsgAccountGuildsPersonaInfo.encode(message.persona_info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestAccountGuildPersonaInfoResponse message, length delimited. Does not implicitly {@link CMsgClientToGCRequestAccountGuildPersonaInfoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildPersonaInfoResponse} message CMsgClientToGCRequestAccountGuildPersonaInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestAccountGuildPersonaInfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestAccountGuildPersonaInfoResponse} CMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestAccountGuildPersonaInfoResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.persona_info = $root.CMsgAccountGuildsPersonaInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestAccountGuildPersonaInfoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestAccountGuildPersonaInfoResponse} CMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestAccountGuildPersonaInfoResponse message.
         * @function verify
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoResponse.verify = function verify(message) {
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
                    break;
                }
            if (message.persona_info != null && message.hasOwnProperty("persona_info")) {
                var error = $root.CMsgAccountGuildsPersonaInfo.verify(message.persona_info);
                if (error)
                    return "persona_info." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestAccountGuildPersonaInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestAccountGuildPersonaInfoResponse} CMsgClientToGCRequestAccountGuildPersonaInfoResponse
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestAccountGuildPersonaInfoResponse)
                return object;
            var message = new $root.CMsgClientToGCRequestAccountGuildPersonaInfoResponse();
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
            case "k_eInvalidAccount":
            case 5:
                message.result = 5;
                break;
            }
            if (object.persona_info != null) {
                if (typeof object.persona_info !== "object")
                    throw TypeError(".CMsgClientToGCRequestAccountGuildPersonaInfoResponse.persona_info: object expected");
                message.persona_info = $root.CMsgAccountGuildsPersonaInfo.fromObject(object.persona_info);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestAccountGuildPersonaInfoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @static
         * @param {CMsgClientToGCRequestAccountGuildPersonaInfoResponse} message CMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = options.enums === String ? "k_eInternalError" : 0;
                object.persona_info = null;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCRequestAccountGuildPersonaInfoResponse.EResponse[message.result] : message.result;
            if (message.persona_info != null && message.hasOwnProperty("persona_info"))
                object.persona_info = $root.CMsgAccountGuildsPersonaInfo.toObject(message.persona_info, options);
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestAccountGuildPersonaInfoResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCRequestAccountGuildPersonaInfoResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidAccount=5 k_eInvalidAccount value
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidAccount"] = 5;
            return values;
        })();
    
        return CMsgClientToGCRequestAccountGuildPersonaInfoResponse;
    })();
    
    $root.CMsgClientToGCRequestAccountGuildPersonaInfoBatch = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestAccountGuildPersonaInfoBatch.
         * @exports ICMsgClientToGCRequestAccountGuildPersonaInfoBatch
         * @interface ICMsgClientToGCRequestAccountGuildPersonaInfoBatch
         * @property {Array.<number>|null} [account_ids] CMsgClientToGCRequestAccountGuildPersonaInfoBatch account_ids
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestAccountGuildPersonaInfoBatch.
         * @exports CMsgClientToGCRequestAccountGuildPersonaInfoBatch
         * @classdesc Represents a CMsgClientToGCRequestAccountGuildPersonaInfoBatch.
         * @implements ICMsgClientToGCRequestAccountGuildPersonaInfoBatch
         * @constructor
         * @param {ICMsgClientToGCRequestAccountGuildPersonaInfoBatch=} [properties] Properties to set
         */
        function CMsgClientToGCRequestAccountGuildPersonaInfoBatch(properties) {
            this.account_ids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestAccountGuildPersonaInfoBatch account_ids.
         * @member {Array.<number>} account_ids
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatch
         * @instance
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatch.prototype.account_ids = $util.emptyArray;
    
        /**
         * Creates a new CMsgClientToGCRequestAccountGuildPersonaInfoBatch instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatch
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildPersonaInfoBatch=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestAccountGuildPersonaInfoBatch} CMsgClientToGCRequestAccountGuildPersonaInfoBatch instance
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatch.create = function create(properties) {
            return new CMsgClientToGCRequestAccountGuildPersonaInfoBatch(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestAccountGuildPersonaInfoBatch message. Does not implicitly {@link CMsgClientToGCRequestAccountGuildPersonaInfoBatch.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatch
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildPersonaInfoBatch} message CMsgClientToGCRequestAccountGuildPersonaInfoBatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account_ids != null && message.account_ids.length)
                for (var i = 0; i < message.account_ids.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.account_ids[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestAccountGuildPersonaInfoBatch message, length delimited. Does not implicitly {@link CMsgClientToGCRequestAccountGuildPersonaInfoBatch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatch
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildPersonaInfoBatch} message CMsgClientToGCRequestAccountGuildPersonaInfoBatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestAccountGuildPersonaInfoBatch message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestAccountGuildPersonaInfoBatch} CMsgClientToGCRequestAccountGuildPersonaInfoBatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatch.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestAccountGuildPersonaInfoBatch();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.account_ids && message.account_ids.length))
                        message.account_ids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.account_ids.push(reader.uint32());
                    } else
                        message.account_ids.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestAccountGuildPersonaInfoBatch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestAccountGuildPersonaInfoBatch} CMsgClientToGCRequestAccountGuildPersonaInfoBatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestAccountGuildPersonaInfoBatch message.
         * @function verify
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account_ids != null && message.hasOwnProperty("account_ids")) {
                if (!Array.isArray(message.account_ids))
                    return "account_ids: array expected";
                for (var i = 0; i < message.account_ids.length; ++i)
                    if (!$util.isInteger(message.account_ids[i]))
                        return "account_ids: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestAccountGuildPersonaInfoBatch message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatch
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestAccountGuildPersonaInfoBatch} CMsgClientToGCRequestAccountGuildPersonaInfoBatch
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatch.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestAccountGuildPersonaInfoBatch)
                return object;
            var message = new $root.CMsgClientToGCRequestAccountGuildPersonaInfoBatch();
            if (object.account_ids) {
                if (!Array.isArray(object.account_ids))
                    throw TypeError(".CMsgClientToGCRequestAccountGuildPersonaInfoBatch.account_ids: array expected");
                message.account_ids = [];
                for (var i = 0; i < object.account_ids.length; ++i)
                    message.account_ids[i] = object.account_ids[i] >>> 0;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestAccountGuildPersonaInfoBatch message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatch
         * @static
         * @param {CMsgClientToGCRequestAccountGuildPersonaInfoBatch} message CMsgClientToGCRequestAccountGuildPersonaInfoBatch
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatch.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.account_ids = [];
            if (message.account_ids && message.account_ids.length) {
                object.account_ids = [];
                for (var j = 0; j < message.account_ids.length; ++j)
                    object.account_ids[j] = message.account_ids[j];
            }
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestAccountGuildPersonaInfoBatch to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatch
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatch.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientToGCRequestAccountGuildPersonaInfoBatch;
    })();
    
    $root.CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse = (function() {
    
        /**
         * Properties of a CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.
         * @exports ICMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @interface ICMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @property {CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.EResponse|null} [result] CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse result
         * @property {Array.<ICMsgAccountGuildsPersonaInfo>|null} [persona_infos] CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse persona_infos
         */
    
        /**
         * Constructs a new CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.
         * @exports CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @classdesc Represents a CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.
         * @implements ICMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @constructor
         * @param {ICMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse=} [properties] Properties to set
         */
        function CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse(properties) {
            this.persona_infos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse result.
         * @member {CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.EResponse} result
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @instance
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.prototype.result = 0;
    
        /**
         * CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse persona_infos.
         * @member {Array.<ICMsgAccountGuildsPersonaInfo>} persona_infos
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @instance
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.prototype.persona_infos = $util.emptyArray;
    
        /**
         * Creates a new CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse=} [properties] Properties to set
         * @returns {CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse} CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse instance
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.create = function create(properties) {
            return new CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse message. Does not implicitly {@link CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse} message CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.persona_infos != null && message.persona_infos.length)
                for (var i = 0; i < message.persona_infos.length; ++i)
                    $root.CMsgAccountGuildsPersonaInfo.encode(message.persona_infos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse message, length delimited. Does not implicitly {@link CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @static
         * @param {ICMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse} message CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse} CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    if (!(message.persona_infos && message.persona_infos.length))
                        message.persona_infos = [];
                    message.persona_infos.push($root.CMsgAccountGuildsPersonaInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse} CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse message.
         * @function verify
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.verify = function verify(message) {
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
                    break;
                }
            if (message.persona_infos != null && message.hasOwnProperty("persona_infos")) {
                if (!Array.isArray(message.persona_infos))
                    return "persona_infos: array expected";
                for (var i = 0; i < message.persona_infos.length; ++i) {
                    var error = $root.CMsgAccountGuildsPersonaInfo.verify(message.persona_infos[i]);
                    if (error)
                        return "persona_infos." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse} CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse)
                return object;
            var message = new $root.CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse();
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
            case "k_eInvalidRequest":
            case 5:
                message.result = 5;
                break;
            }
            if (object.persona_infos) {
                if (!Array.isArray(object.persona_infos))
                    throw TypeError(".CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.persona_infos: array expected");
                message.persona_infos = [];
                for (var i = 0; i < object.persona_infos.length; ++i) {
                    if (typeof object.persona_infos[i] !== "object")
                        throw TypeError(".CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.persona_infos: object expected");
                    message.persona_infos[i] = $root.CMsgAccountGuildsPersonaInfo.fromObject(object.persona_infos[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @static
         * @param {CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse} message CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.persona_infos = [];
            if (options.defaults)
                object.result = options.enums === String ? "k_eInternalError" : 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.EResponse[message.result] : message.result;
            if (message.persona_infos && message.persona_infos.length) {
                object.persona_infos = [];
                for (var j = 0; j < message.persona_infos.length; ++j)
                    object.persona_infos[j] = $root.CMsgAccountGuildsPersonaInfo.toObject(message.persona_infos[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EResponse enum.
         * @name CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.EResponse
         * @enum {number}
         * @property {number} k_eInternalError=0 k_eInternalError value
         * @property {number} k_eSuccess=1 k_eSuccess value
         * @property {number} k_eTooBusy=2 k_eTooBusy value
         * @property {number} k_eDisabled=3 k_eDisabled value
         * @property {number} k_eTimeout=4 k_eTimeout value
         * @property {number} k_eInvalidRequest=5 k_eInvalidRequest value
         */
        CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.EResponse = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_eInternalError"] = 0;
            values[valuesById[1] = "k_eSuccess"] = 1;
            values[valuesById[2] = "k_eTooBusy"] = 2;
            values[valuesById[3] = "k_eDisabled"] = 3;
            values[valuesById[4] = "k_eTimeout"] = 4;
            values[valuesById[5] = "k_eInvalidRequest"] = 5;
            return values;
        })();
    
        return CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse;
    })();

    return $root;
});
