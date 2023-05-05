/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export enum EGuildAuditAction {
  k_EGuildAuditAction_Invalid = 0,
  k_EGuildAuditAction_GuildCreated = 1,
  k_EGuildAuditAction_GuildLanguageChanged = 2,
  k_EGuildAuditAction_GuildFlagsChanged = 3,
  k_EGuildAuditAction_GuildMemberJoined = 5,
  k_EGuildAuditAction_GuildMemberLeft = 6,
  k_EGuildAuditAction_GuildMemberKicked = 7,
  k_EGuildAuditAction_GuildMemberRoleChanged = 8,
  k_EGuildAuditAction_GuildLogoChanged = 9,
  k_EGuildAuditAction_GuildRegionChanged = 10,
  k_EGuildAuditAction_GuildDescriptionChanged = 11,
  k_EGuildAuditAction_GuildPrimaryColorChanged = 12,
  k_EGuildAuditAction_GuildSecondaryColorChanged = 13,
  k_EGuildAuditAction_GuildPatternChanged = 14,
  k_EGuildAuditAction_AdminClearedLogo = 15,
  k_EGuildAuditAction_GuildRequiredRankChanged = 16,
  k_EGuildAuditAction_GuildMotDChanged = 18,
  k_EGuildAuditAction_AdminResetName = 19,
  k_EGuildAuditAction_AdminResetTag = 20,
  k_EGuildAuditAction_AdminLock = 21,
  k_EGuildAuditAction_GuildNameChanged = 22,
  k_EGuildAuditAction_GuildTagChanged = 23,
  k_EGuildAuditAction_AdminPermitted = 24,
  k_EGuildAuditAction_AdminBlocked = 25,
  k_EGuildAuditAction_AdminBannedUser = 26,
  k_EGuildAuditAction_AdminExonerated = 27,
}

export enum EGuildChatType {
  k_EGuildChatType_Unspecified = 0,
  k_EGuildChatType_SteamChatGroup = 1,
  k_EGuildChatType_GC = 2,
}

export interface CMsgGuildInfo {
  guildName: string;
  guildTag: string;
  createdTimestamp: number;
  guildLanguage: number;
  guildFlags: number;
  guildLogo: string;
  guildRegion: number;
  guildChatGroupId: string;
  guildDescription: string;
  defaultChatChannelId: string;
  guildPrimaryColor: number;
  guildSecondaryColor: number;
  guildPattern: number;
  guildRefreshTimeOffset: number;
  guildRequiredRankTier: number;
  guildMotdTimestamp: number;
  guildMotd: string;
}

export interface CMsgGuildSummary {
  guildInfo: CMsgGuildInfo | undefined;
  memberCount: number;
  eventPoints: CMsgGuildSummary_EventPoints[];
}

export interface CMsgGuildSummary_EventPoints {
  eventId: number;
  guildPoints: number;
  guildRank: number;
  guildWeeklyRank: number;
  guildWeeklyPercentile: number;
  guildCurrentPercentile: number;
}

export interface CMsgGuildRole {
  roleId: number;
  roleName: string;
  roleFlags: number;
  roleOrder: number;
}

export interface CMsgGuildMember {
  memberAccountId: number;
  memberRoleId: number;
  memberJoinedTimestamp: number;
  memberLastActiveTimestamp: number;
}

export interface CMsgGuildInvite {
  requesterAccountId: number;
  targetAccountId: number;
  timestampSent: number;
}

export interface CMsgGuildData {
  guildId: number;
  guildInfo: CMsgGuildInfo | undefined;
  guildRoles: CMsgGuildRole[];
  guildMembers: CMsgGuildMember[];
  guildInvites: CMsgGuildInvite[];
}

export interface CMsgAccountGuildInvite {
  guildId: number;
  requesterAccountId: number;
  timestampSent: number;
}

export interface CMsgAccountGuildMemberships {
  guildIds: number[];
  guildInvites: CMsgAccountGuildInvite[];
}

export interface CMsgGuildPersonaInfo {
  guildId: number;
  guildTag: string;
  guildFlags: number;
}

export interface CMsgAccountGuildsPersonaInfo {
  guildPersonaInfos: CMsgGuildPersonaInfo[];
}

export interface CMsgGuildFeedEvent {
  feedEventId: string;
  timestamp: number;
  eventType: number;
  paramUint1: number;
  paramUint2: number;
  paramUint3: number;
}

export interface CMsgClientToGCCreateGuild {
  guildInfo: CMsgGuildInfo | undefined;
  guildChatType: EGuildChatType;
}

export interface CMsgClientToGCCreateGuildResponse {
  result: CMsgClientToGCCreateGuildResponse_EResponse;
  guildId: number;
}

export enum CMsgClientToGCCreateGuildResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidName = 5,
  k_eNameAlreadyUsed = 6,
  k_eInvalidTag = 7,
  k_eTagAlreadyUsed = 8,
  k_eInvalidDescription = 9,
  k_eInvalidRegion = 10,
  k_eInvalidLogo = 11,
  k_eDoesNotOwnEvent = 12,
  k_eGuildLimit = 13,
  k_eInvalidMotD = 14,
  k_eBlocked = 15,
}

export interface CMsgClientToGCSetGuildInfo {
  guildId: number;
  guildInfo: CMsgGuildInfo | undefined;
  guildChatType: EGuildChatType;
}

export interface CMsgClientToGCSetGuildInfoResponse {
  result: CMsgClientToGCSetGuildInfoResponse_EResponse;
}

export enum CMsgClientToGCSetGuildInfoResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidGuild = 5,
  k_eNotMember = 6,
  k_eNoPermission = 7,
  k_eMotDTooLong = 8,
  k_eNameChangeNoPermissions = 9,
  k_eTagChangeNoPermissions = 10,
  k_eNameInvalid = 11,
  k_eTagInvalid = 12,
  k_eDescriptionInvalid = 13,
  k_eBlocked = 14,
}

export interface CMsgClientToGCRequestGuildData {
  guildId: number;
}

export interface CMsgClientToGCRequestGuildDataResponse {
  result: CMsgClientToGCRequestGuildDataResponse_EResponse;
  guildData: CMsgGuildData | undefined;
}

export enum CMsgClientToGCRequestGuildDataResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidGuild = 5,
  k_eNotMember = 6,
}

export interface CMsgGCToClientGuildDataUpdated {
  guildData: CMsgGuildData | undefined;
  updateFlags: number;
}

export interface CMsgGCToClientGuildMembersDataUpdated {
  guildId: number;
  membersData: CMsgGuildMember[];
}

export interface CMsgClientToGCRequestGuildMembership {
}

export interface CMsgClientToGCRequestGuildMembershipResponse {
  result: CMsgClientToGCRequestGuildMembershipResponse_EResponse;
  guildMemberships: CMsgAccountGuildMemberships | undefined;
}

export enum CMsgClientToGCRequestGuildMembershipResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
}

export interface CMsgGCToClientGuildMembershipUpdated {
  guildMemberships: CMsgAccountGuildMemberships | undefined;
}

export interface CMsgClientToGCJoinGuild {
  guildId: number;
}

export interface CMsgClientToGCJoinGuildResponse {
  result: CMsgClientToGCJoinGuildResponse_EResponse;
}

export enum CMsgClientToGCJoinGuildResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidGuild = 5,
  k_eGuildFull = 6,
  k_eAlreadyMember = 7,
  k_eGuildLimit = 8,
  k_eGuildRequiresInvite = 9,
  k_eGuildRankTooLow = 10,
}

export interface CMsgClientToGCLeaveGuild {
  guildId: number;
}

export interface CMsgClientToGCLeaveGuildResponse {
  result: CMsgClientToGCLeaveGuildResponse_EResponse;
}

export enum CMsgClientToGCLeaveGuildResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidGuild = 5,
  k_eNotMember = 6,
  k_eLastAdmin = 7,
}

export interface CMsgClientToGCKickGuildMember {
  guildId: number;
  targetAccountId: number;
}

export interface CMsgClientToGCKickGuildMemberResponse {
  result: CMsgClientToGCKickGuildMemberResponse_EResponse;
}

export enum CMsgClientToGCKickGuildMemberResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidGuild = 5,
  k_eRequesterNotMember = 6,
  k_eTargetNotMember = 7,
  k_eNoPermission = 8,
  k_eCantKickSelf = 9,
}

export interface CMsgClientToGCSetGuildMemberRole {
  guildId: number;
  targetAccountId: number;
  targetRoleId: number;
}

export interface CMsgClientToGCSetGuildMemberRoleResponse {
  result: CMsgClientToGCSetGuildMemberRoleResponse_EResponse;
}

export enum CMsgClientToGCSetGuildMemberRoleResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidGuild = 5,
  k_eRequesterNotMember = 6,
  k_eTargetNotMember = 7,
  k_eNoPermission = 8,
  k_eInvalidRole = 9,
  k_eAdminViolation = 10,
}

export interface CMsgClientToGCInviteToGuild {
  guildId: number;
  targetAccountId: number;
}

export interface CMsgClientToGCInviteToGuildResponse {
  result: CMsgClientToGCInviteToGuildResponse_EResponse;
}

export enum CMsgClientToGCInviteToGuildResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidGuild = 5,
  k_eGuildFull = 6,
  k_eRequesterNotMember = 7,
  k_eAlreadyAMember = 8,
  k_eAlreadyInvited = 9,
  k_eNoInvitePermissions = 10,
  k_eTooManyInvites = 11,
  k_eInvalidUser = 12,
}

export interface CMsgClientToGCDeclineInviteToGuild {
  guildId: number;
}

export interface CMsgClientToGCDeclineInviteToGuildResponse {
  result: CMsgClientToGCDeclineInviteToGuildResponse_EResponse;
}

export enum CMsgClientToGCDeclineInviteToGuildResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidGuild = 5,
  k_eNoInviteFound = 6,
}

export interface CMsgClientToGCAcceptInviteToGuild {
  guildId: number;
}

export interface CMsgClientToGCAcceptInviteToGuildResponse {
  result: CMsgClientToGCAcceptInviteToGuildResponse_EResponse;
}

export enum CMsgClientToGCAcceptInviteToGuildResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidGuild = 5,
  k_eNoInviteFound = 6,
  k_eGuildFull = 7,
  k_eGuildLimit = 8,
  k_eInvalidInviter = 9,
  k_eAlreadyInGuild = 10,
}

export interface CMsgClientToGCCancelInviteToGuild {
  guildId: number;
  targetAccountId: number;
}

export interface CMsgClientToGCCancelInviteToGuildResponse {
  result: CMsgClientToGCCancelInviteToGuildResponse_EResponse;
}

export enum CMsgClientToGCCancelInviteToGuildResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidGuild = 5,
  k_eNoInviteFound = 6,
  k_eNoPermissions = 7,
}

export interface CMsgClientToGCAddGuildRole {
  guildId: number;
  roleName: string;
  roleFlags: number;
}

export interface CMsgClientToGCAddGuildRoleResponse {
  result: CMsgClientToGCAddGuildRoleResponse_EResponse;
  roleId: number;
}

export enum CMsgClientToGCAddGuildRoleResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidGuild = 5,
  k_eNameAlreadyUsed = 6,
  k_eNoPermissions = 7,
  k_eInvalidFlags = 8,
  k_eInvalidName = 9,
  k_eAdminViolation = 10,
  k_eTooManyRoles = 11,
  k_eBlocked = 12,
}

export interface CMsgClientToGCModifyGuildRole {
  guildId: number;
  roleId: number;
  roleName: string;
  roleFlags: number;
}

export interface CMsgClientToGCModifyGuildRoleResponse {
  result: CMsgClientToGCModifyGuildRoleResponse_EResponse;
}

export enum CMsgClientToGCModifyGuildRoleResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidGuild = 5,
  k_eInvalidRole = 6,
  k_eNameAlreadyUsed = 7,
  k_eInvalidFlags = 8,
  k_eInvalidName = 9,
  k_eNoPermissions = 10,
  k_eAdminViolation = 11,
  k_eBlocked = 12,
}

export interface CMsgClientToGCRemoveGuildRole {
  guildId: number;
  roleId: number;
}

export interface CMsgClientToGCRemoveGuildRoleResponse {
  result: CMsgClientToGCRemoveGuildRoleResponse_EResponse;
}

export enum CMsgClientToGCRemoveGuildRoleResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidGuild = 5,
  k_eInvalidRole = 6,
  k_eRoleNotEmpty = 7,
  k_eNoPermissions = 8,
  k_eAdminViolation = 9,
  k_eCantRemoveDefaultRole = 10,
}

export interface CMsgClientToGCSetGuildRoleOrder {
  guildId: number;
  requestedRoleIds: number[];
  previousRoleIds: number[];
}

export interface CMsgClientToGCSetGuildRoleOrderResponse {
  result: CMsgClientToGCSetGuildRoleOrderResponse_EResponse;
  confirmedRoleIds: number[];
}

export enum CMsgClientToGCSetGuildRoleOrderResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidGuild = 5,
  k_eInvalidRole = 6,
  k_eInvalidOrder = 7,
  k_eNoPermissions = 8,
  k_eAdminViolation = 9,
}

export interface CMsgClientToGCGuildFeedRequest {
  guildId: number;
  lastSeenId: string;
}

export interface CMsgClientToGCRequestGuildFeedResponse {
  result: CMsgClientToGCRequestGuildFeedResponse_EResponse;
  guildId: number;
  feedEvents: CMsgGuildFeedEvent[];
}

export enum CMsgClientToGCRequestGuildFeedResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidGuild = 5,
  k_eNoPermissions = 6,
}

export interface CMsgGCToClientGuildFeedUpdated {
  guildId: number;
}

export interface CMsgClientToGCAddPlayerToGuildChat {
  guildId: number;
}

export interface CMsgClientToGCAddPlayerToGuildChatResponse {
  result: CMsgClientToGCAddPlayerToGuildChatResponse_EResponse;
}

export enum CMsgClientToGCAddPlayerToGuildChatResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidGuild = 5,
  k_eNotMember = 6,
  k_eSteamChatNotEnabled = 7,
}

export interface CMsgFindGuildByTagResponse {
  result: CMsgFindGuildByTagResponse_EResponse;
  guildId: number;
  guildSummary: CMsgGuildSummary | undefined;
}

export enum CMsgFindGuildByTagResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidTag = 5,
  k_eGuildNotFound = 6,
}

export interface CMsgSearchForOpenGuildsResponse {
  result: CMsgSearchForOpenGuildsResponse_EResponse;
  searchResults: CMsgSearchForOpenGuildsResponse_SearchResult[];
  useWhitelist: boolean;
}

export enum CMsgSearchForOpenGuildsResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
}

export interface CMsgSearchForOpenGuildsResponse_SearchResult {
  guildId: number;
  guildSummary: CMsgGuildSummary | undefined;
}

export interface CMsgClientToGCReportGuildContent {
  guildId: number;
  guildContentFlags: number;
}

export enum CMsgClientToGCReportGuildContent_EContentFlags {
  k_eNone = 0,
  k_eInappropriateName = 1,
  k_eInappropriateTag = 2,
  k_eInappropriateLogo = 4,
  k_eValidFlags = 7,
}

export interface CMsgClientToGCReportGuildContentResponse {
  result: CMsgClientToGCReportGuildContentResponse_EResponse;
}

export enum CMsgClientToGCReportGuildContentResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eGuildNotFound = 5,
  k_eFlagsInvalid = 6,
}

export interface CMsgClientToGCRequestAccountGuildPersonaInfo {
  accountId: number;
}

export interface CMsgClientToGCRequestAccountGuildPersonaInfoResponse {
  result: CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse;
  personaInfo: CMsgAccountGuildsPersonaInfo | undefined;
}

export enum CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidAccount = 5,
}

export interface CMsgClientToGCRequestAccountGuildPersonaInfoBatch {
  accountIds: number[];
}

export interface CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse {
  result: CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse;
  personaInfos: CMsgAccountGuildsPersonaInfo[];
}

export enum CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidRequest = 5,
}

function createBaseCMsgGuildInfo(): CMsgGuildInfo {
  return {
    guildName: "",
    guildTag: "",
    createdTimestamp: 0,
    guildLanguage: 0,
    guildFlags: 0,
    guildLogo: "0",
    guildRegion: 0,
    guildChatGroupId: "0",
    guildDescription: "",
    defaultChatChannelId: "0",
    guildPrimaryColor: 0,
    guildSecondaryColor: 0,
    guildPattern: 0,
    guildRefreshTimeOffset: 0,
    guildRequiredRankTier: 0,
    guildMotdTimestamp: 0,
    guildMotd: "",
  };
}

export const CMsgGuildInfo = {
  encode(message: CMsgGuildInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildName !== "") {
      writer.uint32(10).string(message.guildName);
    }
    if (message.guildTag !== "") {
      writer.uint32(18).string(message.guildTag);
    }
    if (message.createdTimestamp !== 0) {
      writer.uint32(24).uint32(message.createdTimestamp);
    }
    if (message.guildLanguage !== 0) {
      writer.uint32(32).uint32(message.guildLanguage);
    }
    if (message.guildFlags !== 0) {
      writer.uint32(40).uint32(message.guildFlags);
    }
    if (message.guildLogo !== "0") {
      writer.uint32(56).uint64(message.guildLogo);
    }
    if (message.guildRegion !== 0) {
      writer.uint32(64).uint32(message.guildRegion);
    }
    if (message.guildChatGroupId !== "0") {
      writer.uint32(72).uint64(message.guildChatGroupId);
    }
    if (message.guildDescription !== "") {
      writer.uint32(82).string(message.guildDescription);
    }
    if (message.defaultChatChannelId !== "0") {
      writer.uint32(88).uint64(message.defaultChatChannelId);
    }
    if (message.guildPrimaryColor !== 0) {
      writer.uint32(96).uint32(message.guildPrimaryColor);
    }
    if (message.guildSecondaryColor !== 0) {
      writer.uint32(104).uint32(message.guildSecondaryColor);
    }
    if (message.guildPattern !== 0) {
      writer.uint32(112).uint32(message.guildPattern);
    }
    if (message.guildRefreshTimeOffset !== 0) {
      writer.uint32(120).uint32(message.guildRefreshTimeOffset);
    }
    if (message.guildRequiredRankTier !== 0) {
      writer.uint32(128).uint32(message.guildRequiredRankTier);
    }
    if (message.guildMotdTimestamp !== 0) {
      writer.uint32(136).uint32(message.guildMotdTimestamp);
    }
    if (message.guildMotd !== "") {
      writer.uint32(146).string(message.guildMotd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGuildInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGuildInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.guildName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.guildTag = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.createdTimestamp = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.guildLanguage = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.guildFlags = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.guildLogo = longToString(reader.uint64() as Long);
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.guildRegion = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.guildChatGroupId = longToString(reader.uint64() as Long);
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.guildDescription = reader.string();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.defaultChatChannelId = longToString(reader.uint64() as Long);
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.guildPrimaryColor = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.guildSecondaryColor = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.guildPattern = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.guildRefreshTimeOffset = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.guildRequiredRankTier = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.guildMotdTimestamp = reader.uint32();
          continue;
        case 18:
          if (tag != 146) {
            break;
          }

          message.guildMotd = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGuildSummary(): CMsgGuildSummary {
  return { guildInfo: undefined, memberCount: 0, eventPoints: [] };
}

export const CMsgGuildSummary = {
  encode(message: CMsgGuildSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildInfo !== undefined) {
      CMsgGuildInfo.encode(message.guildInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.memberCount !== 0) {
      writer.uint32(16).uint32(message.memberCount);
    }
    for (const v of message.eventPoints) {
      CMsgGuildSummary_EventPoints.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGuildSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGuildSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.guildInfo = CMsgGuildInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.memberCount = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.eventPoints.push(CMsgGuildSummary_EventPoints.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGuildSummary_EventPoints(): CMsgGuildSummary_EventPoints {
  return {
    eventId: 0,
    guildPoints: 0,
    guildRank: 0,
    guildWeeklyRank: 0,
    guildWeeklyPercentile: 0,
    guildCurrentPercentile: 0,
  };
}

export const CMsgGuildSummary_EventPoints = {
  encode(message: CMsgGuildSummary_EventPoints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.guildPoints !== 0) {
      writer.uint32(16).uint32(message.guildPoints);
    }
    if (message.guildRank !== 0) {
      writer.uint32(24).uint32(message.guildRank);
    }
    if (message.guildWeeklyRank !== 0) {
      writer.uint32(32).uint32(message.guildWeeklyRank);
    }
    if (message.guildWeeklyPercentile !== 0) {
      writer.uint32(40).uint32(message.guildWeeklyPercentile);
    }
    if (message.guildCurrentPercentile !== 0) {
      writer.uint32(48).uint32(message.guildCurrentPercentile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGuildSummary_EventPoints {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGuildSummary_EventPoints();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.guildPoints = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.guildRank = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.guildWeeklyRank = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.guildWeeklyPercentile = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.guildCurrentPercentile = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGuildRole(): CMsgGuildRole {
  return { roleId: 0, roleName: "", roleFlags: 0, roleOrder: 0 };
}

export const CMsgGuildRole = {
  encode(message: CMsgGuildRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roleId !== 0) {
      writer.uint32(8).uint32(message.roleId);
    }
    if (message.roleName !== "") {
      writer.uint32(18).string(message.roleName);
    }
    if (message.roleFlags !== 0) {
      writer.uint32(24).uint32(message.roleFlags);
    }
    if (message.roleOrder !== 0) {
      writer.uint32(32).uint32(message.roleOrder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGuildRole {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGuildRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.roleId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.roleName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.roleFlags = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.roleOrder = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGuildMember(): CMsgGuildMember {
  return { memberAccountId: 0, memberRoleId: 0, memberJoinedTimestamp: 0, memberLastActiveTimestamp: 0 };
}

export const CMsgGuildMember = {
  encode(message: CMsgGuildMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memberAccountId !== 0) {
      writer.uint32(8).uint32(message.memberAccountId);
    }
    if (message.memberRoleId !== 0) {
      writer.uint32(16).uint32(message.memberRoleId);
    }
    if (message.memberJoinedTimestamp !== 0) {
      writer.uint32(24).uint32(message.memberJoinedTimestamp);
    }
    if (message.memberLastActiveTimestamp !== 0) {
      writer.uint32(32).uint32(message.memberLastActiveTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGuildMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGuildMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.memberAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.memberRoleId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.memberJoinedTimestamp = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.memberLastActiveTimestamp = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGuildInvite(): CMsgGuildInvite {
  return { requesterAccountId: 0, targetAccountId: 0, timestampSent: 0 };
}

export const CMsgGuildInvite = {
  encode(message: CMsgGuildInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requesterAccountId !== 0) {
      writer.uint32(8).uint32(message.requesterAccountId);
    }
    if (message.targetAccountId !== 0) {
      writer.uint32(16).uint32(message.targetAccountId);
    }
    if (message.timestampSent !== 0) {
      writer.uint32(24).uint32(message.timestampSent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGuildInvite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGuildInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.requesterAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetAccountId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.timestampSent = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGuildData(): CMsgGuildData {
  return { guildId: 0, guildInfo: undefined, guildRoles: [], guildMembers: [], guildInvites: [] };
}

export const CMsgGuildData = {
  encode(message: CMsgGuildData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.guildInfo !== undefined) {
      CMsgGuildInfo.encode(message.guildInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.guildRoles) {
      CMsgGuildRole.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.guildMembers) {
      CMsgGuildMember.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.guildInvites) {
      CMsgGuildInvite.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGuildData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGuildData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.guildInfo = CMsgGuildInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.guildRoles.push(CMsgGuildRole.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.guildMembers.push(CMsgGuildMember.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.guildInvites.push(CMsgGuildInvite.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgAccountGuildInvite(): CMsgAccountGuildInvite {
  return { guildId: 0, requesterAccountId: 0, timestampSent: 0 };
}

export const CMsgAccountGuildInvite = {
  encode(message: CMsgAccountGuildInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.requesterAccountId !== 0) {
      writer.uint32(16).uint32(message.requesterAccountId);
    }
    if (message.timestampSent !== 0) {
      writer.uint32(24).uint32(message.timestampSent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAccountGuildInvite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAccountGuildInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.requesterAccountId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.timestampSent = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgAccountGuildMemberships(): CMsgAccountGuildMemberships {
  return { guildIds: [], guildInvites: [] };
}

export const CMsgAccountGuildMemberships = {
  encode(message: CMsgAccountGuildMemberships, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.guildIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.guildInvites) {
      CMsgAccountGuildInvite.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAccountGuildMemberships {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAccountGuildMemberships();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.guildIds.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.guildIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 2:
          if (tag != 18) {
            break;
          }

          message.guildInvites.push(CMsgAccountGuildInvite.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGuildPersonaInfo(): CMsgGuildPersonaInfo {
  return { guildId: 0, guildTag: "", guildFlags: 0 };
}

export const CMsgGuildPersonaInfo = {
  encode(message: CMsgGuildPersonaInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.guildTag !== "") {
      writer.uint32(18).string(message.guildTag);
    }
    if (message.guildFlags !== 0) {
      writer.uint32(24).uint32(message.guildFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGuildPersonaInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGuildPersonaInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.guildTag = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.guildFlags = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgAccountGuildsPersonaInfo(): CMsgAccountGuildsPersonaInfo {
  return { guildPersonaInfos: [] };
}

export const CMsgAccountGuildsPersonaInfo = {
  encode(message: CMsgAccountGuildsPersonaInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.guildPersonaInfos) {
      CMsgGuildPersonaInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAccountGuildsPersonaInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAccountGuildsPersonaInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.guildPersonaInfos.push(CMsgGuildPersonaInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGuildFeedEvent(): CMsgGuildFeedEvent {
  return { feedEventId: "0", timestamp: 0, eventType: 0, paramUint1: 0, paramUint2: 0, paramUint3: 0 };
}

export const CMsgGuildFeedEvent = {
  encode(message: CMsgGuildFeedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedEventId !== "0") {
      writer.uint32(8).uint64(message.feedEventId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.eventType !== 0) {
      writer.uint32(24).uint32(message.eventType);
    }
    if (message.paramUint1 !== 0) {
      writer.uint32(32).uint32(message.paramUint1);
    }
    if (message.paramUint2 !== 0) {
      writer.uint32(40).uint32(message.paramUint2);
    }
    if (message.paramUint3 !== 0) {
      writer.uint32(48).uint32(message.paramUint3);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGuildFeedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGuildFeedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.feedEventId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.eventType = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.paramUint1 = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.paramUint2 = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.paramUint3 = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCreateGuild(): CMsgClientToGCCreateGuild {
  return { guildInfo: undefined, guildChatType: 0 };
}

export const CMsgClientToGCCreateGuild = {
  encode(message: CMsgClientToGCCreateGuild, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildInfo !== undefined) {
      CMsgGuildInfo.encode(message.guildInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.guildChatType !== 0) {
      writer.uint32(16).int32(message.guildChatType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCreateGuild {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCreateGuild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.guildInfo = CMsgGuildInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.guildChatType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCreateGuildResponse(): CMsgClientToGCCreateGuildResponse {
  return { result: 0, guildId: 0 };
}

export const CMsgClientToGCCreateGuildResponse = {
  encode(message: CMsgClientToGCCreateGuildResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.guildId !== 0) {
      writer.uint32(16).uint32(message.guildId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCreateGuildResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCreateGuildResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSetGuildInfo(): CMsgClientToGCSetGuildInfo {
  return { guildId: 0, guildInfo: undefined, guildChatType: 0 };
}

export const CMsgClientToGCSetGuildInfo = {
  encode(message: CMsgClientToGCSetGuildInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.guildInfo !== undefined) {
      CMsgGuildInfo.encode(message.guildInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.guildChatType !== 0) {
      writer.uint32(24).int32(message.guildChatType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetGuildInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetGuildInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.guildInfo = CMsgGuildInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.guildChatType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSetGuildInfoResponse(): CMsgClientToGCSetGuildInfoResponse {
  return { result: 0 };
}

export const CMsgClientToGCSetGuildInfoResponse = {
  encode(message: CMsgClientToGCSetGuildInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetGuildInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetGuildInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestGuildData(): CMsgClientToGCRequestGuildData {
  return { guildId: 0 };
}

export const CMsgClientToGCRequestGuildData = {
  encode(message: CMsgClientToGCRequestGuildData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestGuildData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestGuildData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestGuildDataResponse(): CMsgClientToGCRequestGuildDataResponse {
  return { result: 0, guildData: undefined };
}

export const CMsgClientToGCRequestGuildDataResponse = {
  encode(message: CMsgClientToGCRequestGuildDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.guildData !== undefined) {
      CMsgGuildData.encode(message.guildData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestGuildDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestGuildDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.guildData = CMsgGuildData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientGuildDataUpdated(): CMsgGCToClientGuildDataUpdated {
  return { guildData: undefined, updateFlags: 0 };
}

export const CMsgGCToClientGuildDataUpdated = {
  encode(message: CMsgGCToClientGuildDataUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildData !== undefined) {
      CMsgGuildData.encode(message.guildData, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateFlags !== 0) {
      writer.uint32(16).uint32(message.updateFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientGuildDataUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientGuildDataUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.guildData = CMsgGuildData.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.updateFlags = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientGuildMembersDataUpdated(): CMsgGCToClientGuildMembersDataUpdated {
  return { guildId: 0, membersData: [] };
}

export const CMsgGCToClientGuildMembersDataUpdated = {
  encode(message: CMsgGCToClientGuildMembersDataUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    for (const v of message.membersData) {
      CMsgGuildMember.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientGuildMembersDataUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientGuildMembersDataUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.membersData.push(CMsgGuildMember.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestGuildMembership(): CMsgClientToGCRequestGuildMembership {
  return {};
}

export const CMsgClientToGCRequestGuildMembership = {
  encode(_: CMsgClientToGCRequestGuildMembership, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestGuildMembership {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestGuildMembership();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestGuildMembershipResponse(): CMsgClientToGCRequestGuildMembershipResponse {
  return { result: 0, guildMemberships: undefined };
}

export const CMsgClientToGCRequestGuildMembershipResponse = {
  encode(message: CMsgClientToGCRequestGuildMembershipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.guildMemberships !== undefined) {
      CMsgAccountGuildMemberships.encode(message.guildMemberships, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestGuildMembershipResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestGuildMembershipResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.guildMemberships = CMsgAccountGuildMemberships.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientGuildMembershipUpdated(): CMsgGCToClientGuildMembershipUpdated {
  return { guildMemberships: undefined };
}

export const CMsgGCToClientGuildMembershipUpdated = {
  encode(message: CMsgGCToClientGuildMembershipUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildMemberships !== undefined) {
      CMsgAccountGuildMemberships.encode(message.guildMemberships, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientGuildMembershipUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientGuildMembershipUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.guildMemberships = CMsgAccountGuildMemberships.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCJoinGuild(): CMsgClientToGCJoinGuild {
  return { guildId: 0 };
}

export const CMsgClientToGCJoinGuild = {
  encode(message: CMsgClientToGCJoinGuild, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCJoinGuild {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCJoinGuild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCJoinGuildResponse(): CMsgClientToGCJoinGuildResponse {
  return { result: 0 };
}

export const CMsgClientToGCJoinGuildResponse = {
  encode(message: CMsgClientToGCJoinGuildResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCJoinGuildResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCJoinGuildResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCLeaveGuild(): CMsgClientToGCLeaveGuild {
  return { guildId: 0 };
}

export const CMsgClientToGCLeaveGuild = {
  encode(message: CMsgClientToGCLeaveGuild, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCLeaveGuild {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCLeaveGuild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCLeaveGuildResponse(): CMsgClientToGCLeaveGuildResponse {
  return { result: 0 };
}

export const CMsgClientToGCLeaveGuildResponse = {
  encode(message: CMsgClientToGCLeaveGuildResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCLeaveGuildResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCLeaveGuildResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCKickGuildMember(): CMsgClientToGCKickGuildMember {
  return { guildId: 0, targetAccountId: 0 };
}

export const CMsgClientToGCKickGuildMember = {
  encode(message: CMsgClientToGCKickGuildMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.targetAccountId !== 0) {
      writer.uint32(16).uint32(message.targetAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCKickGuildMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCKickGuildMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetAccountId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCKickGuildMemberResponse(): CMsgClientToGCKickGuildMemberResponse {
  return { result: 0 };
}

export const CMsgClientToGCKickGuildMemberResponse = {
  encode(message: CMsgClientToGCKickGuildMemberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCKickGuildMemberResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCKickGuildMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSetGuildMemberRole(): CMsgClientToGCSetGuildMemberRole {
  return { guildId: 0, targetAccountId: 0, targetRoleId: 0 };
}

export const CMsgClientToGCSetGuildMemberRole = {
  encode(message: CMsgClientToGCSetGuildMemberRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.targetAccountId !== 0) {
      writer.uint32(16).uint32(message.targetAccountId);
    }
    if (message.targetRoleId !== 0) {
      writer.uint32(24).uint32(message.targetRoleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetGuildMemberRole {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetGuildMemberRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetAccountId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.targetRoleId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSetGuildMemberRoleResponse(): CMsgClientToGCSetGuildMemberRoleResponse {
  return { result: 0 };
}

export const CMsgClientToGCSetGuildMemberRoleResponse = {
  encode(message: CMsgClientToGCSetGuildMemberRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetGuildMemberRoleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetGuildMemberRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCInviteToGuild(): CMsgClientToGCInviteToGuild {
  return { guildId: 0, targetAccountId: 0 };
}

export const CMsgClientToGCInviteToGuild = {
  encode(message: CMsgClientToGCInviteToGuild, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.targetAccountId !== 0) {
      writer.uint32(16).uint32(message.targetAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCInviteToGuild {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCInviteToGuild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetAccountId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCInviteToGuildResponse(): CMsgClientToGCInviteToGuildResponse {
  return { result: 0 };
}

export const CMsgClientToGCInviteToGuildResponse = {
  encode(message: CMsgClientToGCInviteToGuildResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCInviteToGuildResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCInviteToGuildResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCDeclineInviteToGuild(): CMsgClientToGCDeclineInviteToGuild {
  return { guildId: 0 };
}

export const CMsgClientToGCDeclineInviteToGuild = {
  encode(message: CMsgClientToGCDeclineInviteToGuild, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCDeclineInviteToGuild {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCDeclineInviteToGuild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCDeclineInviteToGuildResponse(): CMsgClientToGCDeclineInviteToGuildResponse {
  return { result: 0 };
}

export const CMsgClientToGCDeclineInviteToGuildResponse = {
  encode(message: CMsgClientToGCDeclineInviteToGuildResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCDeclineInviteToGuildResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCDeclineInviteToGuildResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCAcceptInviteToGuild(): CMsgClientToGCAcceptInviteToGuild {
  return { guildId: 0 };
}

export const CMsgClientToGCAcceptInviteToGuild = {
  encode(message: CMsgClientToGCAcceptInviteToGuild, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCAcceptInviteToGuild {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCAcceptInviteToGuild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCAcceptInviteToGuildResponse(): CMsgClientToGCAcceptInviteToGuildResponse {
  return { result: 0 };
}

export const CMsgClientToGCAcceptInviteToGuildResponse = {
  encode(message: CMsgClientToGCAcceptInviteToGuildResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCAcceptInviteToGuildResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCAcceptInviteToGuildResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCancelInviteToGuild(): CMsgClientToGCCancelInviteToGuild {
  return { guildId: 0, targetAccountId: 0 };
}

export const CMsgClientToGCCancelInviteToGuild = {
  encode(message: CMsgClientToGCCancelInviteToGuild, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.targetAccountId !== 0) {
      writer.uint32(16).uint32(message.targetAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCancelInviteToGuild {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCancelInviteToGuild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetAccountId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCancelInviteToGuildResponse(): CMsgClientToGCCancelInviteToGuildResponse {
  return { result: 0 };
}

export const CMsgClientToGCCancelInviteToGuildResponse = {
  encode(message: CMsgClientToGCCancelInviteToGuildResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCancelInviteToGuildResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCancelInviteToGuildResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCAddGuildRole(): CMsgClientToGCAddGuildRole {
  return { guildId: 0, roleName: "", roleFlags: 0 };
}

export const CMsgClientToGCAddGuildRole = {
  encode(message: CMsgClientToGCAddGuildRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.roleName !== "") {
      writer.uint32(18).string(message.roleName);
    }
    if (message.roleFlags !== 0) {
      writer.uint32(24).uint32(message.roleFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCAddGuildRole {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCAddGuildRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.roleName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.roleFlags = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCAddGuildRoleResponse(): CMsgClientToGCAddGuildRoleResponse {
  return { result: 0, roleId: 0 };
}

export const CMsgClientToGCAddGuildRoleResponse = {
  encode(message: CMsgClientToGCAddGuildRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.roleId !== 0) {
      writer.uint32(16).uint32(message.roleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCAddGuildRoleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCAddGuildRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.roleId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCModifyGuildRole(): CMsgClientToGCModifyGuildRole {
  return { guildId: 0, roleId: 0, roleName: "", roleFlags: 0 };
}

export const CMsgClientToGCModifyGuildRole = {
  encode(message: CMsgClientToGCModifyGuildRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.roleId !== 0) {
      writer.uint32(16).uint32(message.roleId);
    }
    if (message.roleName !== "") {
      writer.uint32(26).string(message.roleName);
    }
    if (message.roleFlags !== 0) {
      writer.uint32(32).uint32(message.roleFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCModifyGuildRole {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCModifyGuildRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.roleId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.roleName = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.roleFlags = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCModifyGuildRoleResponse(): CMsgClientToGCModifyGuildRoleResponse {
  return { result: 0 };
}

export const CMsgClientToGCModifyGuildRoleResponse = {
  encode(message: CMsgClientToGCModifyGuildRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCModifyGuildRoleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCModifyGuildRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRemoveGuildRole(): CMsgClientToGCRemoveGuildRole {
  return { guildId: 0, roleId: 0 };
}

export const CMsgClientToGCRemoveGuildRole = {
  encode(message: CMsgClientToGCRemoveGuildRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.roleId !== 0) {
      writer.uint32(16).uint32(message.roleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRemoveGuildRole {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRemoveGuildRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.roleId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRemoveGuildRoleResponse(): CMsgClientToGCRemoveGuildRoleResponse {
  return { result: 0 };
}

export const CMsgClientToGCRemoveGuildRoleResponse = {
  encode(message: CMsgClientToGCRemoveGuildRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRemoveGuildRoleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRemoveGuildRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSetGuildRoleOrder(): CMsgClientToGCSetGuildRoleOrder {
  return { guildId: 0, requestedRoleIds: [], previousRoleIds: [] };
}

export const CMsgClientToGCSetGuildRoleOrder = {
  encode(message: CMsgClientToGCSetGuildRoleOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    writer.uint32(18).fork();
    for (const v of message.requestedRoleIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.previousRoleIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetGuildRoleOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetGuildRoleOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 2:
          if (tag == 16) {
            message.requestedRoleIds.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.requestedRoleIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 3:
          if (tag == 24) {
            message.previousRoleIds.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.previousRoleIds.push(reader.uint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSetGuildRoleOrderResponse(): CMsgClientToGCSetGuildRoleOrderResponse {
  return { result: 0, confirmedRoleIds: [] };
}

export const CMsgClientToGCSetGuildRoleOrderResponse = {
  encode(message: CMsgClientToGCSetGuildRoleOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.confirmedRoleIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetGuildRoleOrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetGuildRoleOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag == 16) {
            message.confirmedRoleIds.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.confirmedRoleIds.push(reader.uint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCGuildFeedRequest(): CMsgClientToGCGuildFeedRequest {
  return { guildId: 0, lastSeenId: "0" };
}

export const CMsgClientToGCGuildFeedRequest = {
  encode(message: CMsgClientToGCGuildFeedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.lastSeenId !== "0") {
      writer.uint32(16).uint64(message.lastSeenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGuildFeedRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGuildFeedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.lastSeenId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestGuildFeedResponse(): CMsgClientToGCRequestGuildFeedResponse {
  return { result: 0, guildId: 0, feedEvents: [] };
}

export const CMsgClientToGCRequestGuildFeedResponse = {
  encode(message: CMsgClientToGCRequestGuildFeedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.guildId !== 0) {
      writer.uint32(16).uint32(message.guildId);
    }
    for (const v of message.feedEvents) {
      CMsgGuildFeedEvent.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestGuildFeedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestGuildFeedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.feedEvents.push(CMsgGuildFeedEvent.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientGuildFeedUpdated(): CMsgGCToClientGuildFeedUpdated {
  return { guildId: 0 };
}

export const CMsgGCToClientGuildFeedUpdated = {
  encode(message: CMsgGCToClientGuildFeedUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientGuildFeedUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientGuildFeedUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCAddPlayerToGuildChat(): CMsgClientToGCAddPlayerToGuildChat {
  return { guildId: 0 };
}

export const CMsgClientToGCAddPlayerToGuildChat = {
  encode(message: CMsgClientToGCAddPlayerToGuildChat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCAddPlayerToGuildChat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCAddPlayerToGuildChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCAddPlayerToGuildChatResponse(): CMsgClientToGCAddPlayerToGuildChatResponse {
  return { result: 0 };
}

export const CMsgClientToGCAddPlayerToGuildChatResponse = {
  encode(message: CMsgClientToGCAddPlayerToGuildChatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCAddPlayerToGuildChatResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCAddPlayerToGuildChatResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgFindGuildByTagResponse(): CMsgFindGuildByTagResponse {
  return { result: 0, guildId: 0, guildSummary: undefined };
}

export const CMsgFindGuildByTagResponse = {
  encode(message: CMsgFindGuildByTagResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.guildId !== 0) {
      writer.uint32(16).uint32(message.guildId);
    }
    if (message.guildSummary !== undefined) {
      CMsgGuildSummary.encode(message.guildSummary, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgFindGuildByTagResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgFindGuildByTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.guildSummary = CMsgGuildSummary.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgSearchForOpenGuildsResponse(): CMsgSearchForOpenGuildsResponse {
  return { result: 0, searchResults: [], useWhitelist: false };
}

export const CMsgSearchForOpenGuildsResponse = {
  encode(message: CMsgSearchForOpenGuildsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    for (const v of message.searchResults) {
      CMsgSearchForOpenGuildsResponse_SearchResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.useWhitelist === true) {
      writer.uint32(24).bool(message.useWhitelist);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSearchForOpenGuildsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSearchForOpenGuildsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.searchResults.push(CMsgSearchForOpenGuildsResponse_SearchResult.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.useWhitelist = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgSearchForOpenGuildsResponse_SearchResult(): CMsgSearchForOpenGuildsResponse_SearchResult {
  return { guildId: 0, guildSummary: undefined };
}

export const CMsgSearchForOpenGuildsResponse_SearchResult = {
  encode(message: CMsgSearchForOpenGuildsResponse_SearchResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.guildSummary !== undefined) {
      CMsgGuildSummary.encode(message.guildSummary, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSearchForOpenGuildsResponse_SearchResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSearchForOpenGuildsResponse_SearchResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.guildSummary = CMsgGuildSummary.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCReportGuildContent(): CMsgClientToGCReportGuildContent {
  return { guildId: 0, guildContentFlags: 0 };
}

export const CMsgClientToGCReportGuildContent = {
  encode(message: CMsgClientToGCReportGuildContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.guildContentFlags !== 0) {
      writer.uint32(16).uint32(message.guildContentFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCReportGuildContent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCReportGuildContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.guildContentFlags = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCReportGuildContentResponse(): CMsgClientToGCReportGuildContentResponse {
  return { result: 0 };
}

export const CMsgClientToGCReportGuildContentResponse = {
  encode(message: CMsgClientToGCReportGuildContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCReportGuildContentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCReportGuildContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestAccountGuildPersonaInfo(): CMsgClientToGCRequestAccountGuildPersonaInfo {
  return { accountId: 0 };
}

export const CMsgClientToGCRequestAccountGuildPersonaInfo = {
  encode(message: CMsgClientToGCRequestAccountGuildPersonaInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestAccountGuildPersonaInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestAccountGuildPersonaInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestAccountGuildPersonaInfoResponse(): CMsgClientToGCRequestAccountGuildPersonaInfoResponse {
  return { result: 0, personaInfo: undefined };
}

export const CMsgClientToGCRequestAccountGuildPersonaInfoResponse = {
  encode(
    message: CMsgClientToGCRequestAccountGuildPersonaInfoResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.personaInfo !== undefined) {
      CMsgAccountGuildsPersonaInfo.encode(message.personaInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestAccountGuildPersonaInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestAccountGuildPersonaInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.personaInfo = CMsgAccountGuildsPersonaInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestAccountGuildPersonaInfoBatch(): CMsgClientToGCRequestAccountGuildPersonaInfoBatch {
  return { accountIds: [] };
}

export const CMsgClientToGCRequestAccountGuildPersonaInfoBatch = {
  encode(
    message: CMsgClientToGCRequestAccountGuildPersonaInfoBatch,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.accountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestAccountGuildPersonaInfoBatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestAccountGuildPersonaInfoBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.accountIds.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountIds.push(reader.uint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse(): CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse {
  return { result: 0, personaInfos: [] };
}

export const CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse = {
  encode(
    message: CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    for (const v of message.personaInfos) {
      CMsgAccountGuildsPersonaInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.personaInfos.push(CMsgAccountGuildsPersonaInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
