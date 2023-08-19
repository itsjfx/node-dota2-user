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

export function eGuildAuditActionFromJSON(object: any): EGuildAuditAction {
  switch (object) {
    case 0:
    case "k_EGuildAuditAction_Invalid":
      return EGuildAuditAction.k_EGuildAuditAction_Invalid;
    case 1:
    case "k_EGuildAuditAction_GuildCreated":
      return EGuildAuditAction.k_EGuildAuditAction_GuildCreated;
    case 2:
    case "k_EGuildAuditAction_GuildLanguageChanged":
      return EGuildAuditAction.k_EGuildAuditAction_GuildLanguageChanged;
    case 3:
    case "k_EGuildAuditAction_GuildFlagsChanged":
      return EGuildAuditAction.k_EGuildAuditAction_GuildFlagsChanged;
    case 5:
    case "k_EGuildAuditAction_GuildMemberJoined":
      return EGuildAuditAction.k_EGuildAuditAction_GuildMemberJoined;
    case 6:
    case "k_EGuildAuditAction_GuildMemberLeft":
      return EGuildAuditAction.k_EGuildAuditAction_GuildMemberLeft;
    case 7:
    case "k_EGuildAuditAction_GuildMemberKicked":
      return EGuildAuditAction.k_EGuildAuditAction_GuildMemberKicked;
    case 8:
    case "k_EGuildAuditAction_GuildMemberRoleChanged":
      return EGuildAuditAction.k_EGuildAuditAction_GuildMemberRoleChanged;
    case 9:
    case "k_EGuildAuditAction_GuildLogoChanged":
      return EGuildAuditAction.k_EGuildAuditAction_GuildLogoChanged;
    case 10:
    case "k_EGuildAuditAction_GuildRegionChanged":
      return EGuildAuditAction.k_EGuildAuditAction_GuildRegionChanged;
    case 11:
    case "k_EGuildAuditAction_GuildDescriptionChanged":
      return EGuildAuditAction.k_EGuildAuditAction_GuildDescriptionChanged;
    case 12:
    case "k_EGuildAuditAction_GuildPrimaryColorChanged":
      return EGuildAuditAction.k_EGuildAuditAction_GuildPrimaryColorChanged;
    case 13:
    case "k_EGuildAuditAction_GuildSecondaryColorChanged":
      return EGuildAuditAction.k_EGuildAuditAction_GuildSecondaryColorChanged;
    case 14:
    case "k_EGuildAuditAction_GuildPatternChanged":
      return EGuildAuditAction.k_EGuildAuditAction_GuildPatternChanged;
    case 15:
    case "k_EGuildAuditAction_AdminClearedLogo":
      return EGuildAuditAction.k_EGuildAuditAction_AdminClearedLogo;
    case 16:
    case "k_EGuildAuditAction_GuildRequiredRankChanged":
      return EGuildAuditAction.k_EGuildAuditAction_GuildRequiredRankChanged;
    case 18:
    case "k_EGuildAuditAction_GuildMotDChanged":
      return EGuildAuditAction.k_EGuildAuditAction_GuildMotDChanged;
    case 19:
    case "k_EGuildAuditAction_AdminResetName":
      return EGuildAuditAction.k_EGuildAuditAction_AdminResetName;
    case 20:
    case "k_EGuildAuditAction_AdminResetTag":
      return EGuildAuditAction.k_EGuildAuditAction_AdminResetTag;
    case 21:
    case "k_EGuildAuditAction_AdminLock":
      return EGuildAuditAction.k_EGuildAuditAction_AdminLock;
    case 22:
    case "k_EGuildAuditAction_GuildNameChanged":
      return EGuildAuditAction.k_EGuildAuditAction_GuildNameChanged;
    case 23:
    case "k_EGuildAuditAction_GuildTagChanged":
      return EGuildAuditAction.k_EGuildAuditAction_GuildTagChanged;
    case 24:
    case "k_EGuildAuditAction_AdminPermitted":
      return EGuildAuditAction.k_EGuildAuditAction_AdminPermitted;
    case 25:
    case "k_EGuildAuditAction_AdminBlocked":
      return EGuildAuditAction.k_EGuildAuditAction_AdminBlocked;
    case 26:
    case "k_EGuildAuditAction_AdminBannedUser":
      return EGuildAuditAction.k_EGuildAuditAction_AdminBannedUser;
    case 27:
    case "k_EGuildAuditAction_AdminExonerated":
      return EGuildAuditAction.k_EGuildAuditAction_AdminExonerated;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGuildAuditAction");
  }
}

export function eGuildAuditActionToJSON(object: EGuildAuditAction): string {
  switch (object) {
    case EGuildAuditAction.k_EGuildAuditAction_Invalid:
      return "k_EGuildAuditAction_Invalid";
    case EGuildAuditAction.k_EGuildAuditAction_GuildCreated:
      return "k_EGuildAuditAction_GuildCreated";
    case EGuildAuditAction.k_EGuildAuditAction_GuildLanguageChanged:
      return "k_EGuildAuditAction_GuildLanguageChanged";
    case EGuildAuditAction.k_EGuildAuditAction_GuildFlagsChanged:
      return "k_EGuildAuditAction_GuildFlagsChanged";
    case EGuildAuditAction.k_EGuildAuditAction_GuildMemberJoined:
      return "k_EGuildAuditAction_GuildMemberJoined";
    case EGuildAuditAction.k_EGuildAuditAction_GuildMemberLeft:
      return "k_EGuildAuditAction_GuildMemberLeft";
    case EGuildAuditAction.k_EGuildAuditAction_GuildMemberKicked:
      return "k_EGuildAuditAction_GuildMemberKicked";
    case EGuildAuditAction.k_EGuildAuditAction_GuildMemberRoleChanged:
      return "k_EGuildAuditAction_GuildMemberRoleChanged";
    case EGuildAuditAction.k_EGuildAuditAction_GuildLogoChanged:
      return "k_EGuildAuditAction_GuildLogoChanged";
    case EGuildAuditAction.k_EGuildAuditAction_GuildRegionChanged:
      return "k_EGuildAuditAction_GuildRegionChanged";
    case EGuildAuditAction.k_EGuildAuditAction_GuildDescriptionChanged:
      return "k_EGuildAuditAction_GuildDescriptionChanged";
    case EGuildAuditAction.k_EGuildAuditAction_GuildPrimaryColorChanged:
      return "k_EGuildAuditAction_GuildPrimaryColorChanged";
    case EGuildAuditAction.k_EGuildAuditAction_GuildSecondaryColorChanged:
      return "k_EGuildAuditAction_GuildSecondaryColorChanged";
    case EGuildAuditAction.k_EGuildAuditAction_GuildPatternChanged:
      return "k_EGuildAuditAction_GuildPatternChanged";
    case EGuildAuditAction.k_EGuildAuditAction_AdminClearedLogo:
      return "k_EGuildAuditAction_AdminClearedLogo";
    case EGuildAuditAction.k_EGuildAuditAction_GuildRequiredRankChanged:
      return "k_EGuildAuditAction_GuildRequiredRankChanged";
    case EGuildAuditAction.k_EGuildAuditAction_GuildMotDChanged:
      return "k_EGuildAuditAction_GuildMotDChanged";
    case EGuildAuditAction.k_EGuildAuditAction_AdminResetName:
      return "k_EGuildAuditAction_AdminResetName";
    case EGuildAuditAction.k_EGuildAuditAction_AdminResetTag:
      return "k_EGuildAuditAction_AdminResetTag";
    case EGuildAuditAction.k_EGuildAuditAction_AdminLock:
      return "k_EGuildAuditAction_AdminLock";
    case EGuildAuditAction.k_EGuildAuditAction_GuildNameChanged:
      return "k_EGuildAuditAction_GuildNameChanged";
    case EGuildAuditAction.k_EGuildAuditAction_GuildTagChanged:
      return "k_EGuildAuditAction_GuildTagChanged";
    case EGuildAuditAction.k_EGuildAuditAction_AdminPermitted:
      return "k_EGuildAuditAction_AdminPermitted";
    case EGuildAuditAction.k_EGuildAuditAction_AdminBlocked:
      return "k_EGuildAuditAction_AdminBlocked";
    case EGuildAuditAction.k_EGuildAuditAction_AdminBannedUser:
      return "k_EGuildAuditAction_AdminBannedUser";
    case EGuildAuditAction.k_EGuildAuditAction_AdminExonerated:
      return "k_EGuildAuditAction_AdminExonerated";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGuildAuditAction");
  }
}

export enum EGuildChatType {
  k_EGuildChatType_Unspecified = 0,
  k_EGuildChatType_SteamChatGroup = 1,
  k_EGuildChatType_GC = 2,
}

export function eGuildChatTypeFromJSON(object: any): EGuildChatType {
  switch (object) {
    case 0:
    case "k_EGuildChatType_Unspecified":
      return EGuildChatType.k_EGuildChatType_Unspecified;
    case 1:
    case "k_EGuildChatType_SteamChatGroup":
      return EGuildChatType.k_EGuildChatType_SteamChatGroup;
    case 2:
    case "k_EGuildChatType_GC":
      return EGuildChatType.k_EGuildChatType_GC;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGuildChatType");
  }
}

export function eGuildChatTypeToJSON(object: EGuildChatType): string {
  switch (object) {
    case EGuildChatType.k_EGuildChatType_Unspecified:
      return "k_EGuildChatType_Unspecified";
    case EGuildChatType.k_EGuildChatType_SteamChatGroup:
      return "k_EGuildChatType_SteamChatGroup";
    case EGuildChatType.k_EGuildChatType_GC:
      return "k_EGuildChatType_GC";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGuildChatType");
  }
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
  k_eFreeTrialNotAllowed = 16,
}

export function cMsgClientToGCCreateGuildResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCCreateGuildResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCCreateGuildResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCCreateGuildResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCCreateGuildResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCCreateGuildResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCCreateGuildResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidName":
      return CMsgClientToGCCreateGuildResponse_EResponse.k_eInvalidName;
    case 6:
    case "k_eNameAlreadyUsed":
      return CMsgClientToGCCreateGuildResponse_EResponse.k_eNameAlreadyUsed;
    case 7:
    case "k_eInvalidTag":
      return CMsgClientToGCCreateGuildResponse_EResponse.k_eInvalidTag;
    case 8:
    case "k_eTagAlreadyUsed":
      return CMsgClientToGCCreateGuildResponse_EResponse.k_eTagAlreadyUsed;
    case 9:
    case "k_eInvalidDescription":
      return CMsgClientToGCCreateGuildResponse_EResponse.k_eInvalidDescription;
    case 10:
    case "k_eInvalidRegion":
      return CMsgClientToGCCreateGuildResponse_EResponse.k_eInvalidRegion;
    case 11:
    case "k_eInvalidLogo":
      return CMsgClientToGCCreateGuildResponse_EResponse.k_eInvalidLogo;
    case 12:
    case "k_eDoesNotOwnEvent":
      return CMsgClientToGCCreateGuildResponse_EResponse.k_eDoesNotOwnEvent;
    case 13:
    case "k_eGuildLimit":
      return CMsgClientToGCCreateGuildResponse_EResponse.k_eGuildLimit;
    case 14:
    case "k_eInvalidMotD":
      return CMsgClientToGCCreateGuildResponse_EResponse.k_eInvalidMotD;
    case 15:
    case "k_eBlocked":
      return CMsgClientToGCCreateGuildResponse_EResponse.k_eBlocked;
    case 16:
    case "k_eFreeTrialNotAllowed":
      return CMsgClientToGCCreateGuildResponse_EResponse.k_eFreeTrialNotAllowed;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCreateGuildResponse_EResponse",
      );
  }
}

export function cMsgClientToGCCreateGuildResponse_EResponseToJSON(
  object: CMsgClientToGCCreateGuildResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCCreateGuildResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCCreateGuildResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCCreateGuildResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCCreateGuildResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCCreateGuildResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCCreateGuildResponse_EResponse.k_eInvalidName:
      return "k_eInvalidName";
    case CMsgClientToGCCreateGuildResponse_EResponse.k_eNameAlreadyUsed:
      return "k_eNameAlreadyUsed";
    case CMsgClientToGCCreateGuildResponse_EResponse.k_eInvalidTag:
      return "k_eInvalidTag";
    case CMsgClientToGCCreateGuildResponse_EResponse.k_eTagAlreadyUsed:
      return "k_eTagAlreadyUsed";
    case CMsgClientToGCCreateGuildResponse_EResponse.k_eInvalidDescription:
      return "k_eInvalidDescription";
    case CMsgClientToGCCreateGuildResponse_EResponse.k_eInvalidRegion:
      return "k_eInvalidRegion";
    case CMsgClientToGCCreateGuildResponse_EResponse.k_eInvalidLogo:
      return "k_eInvalidLogo";
    case CMsgClientToGCCreateGuildResponse_EResponse.k_eDoesNotOwnEvent:
      return "k_eDoesNotOwnEvent";
    case CMsgClientToGCCreateGuildResponse_EResponse.k_eGuildLimit:
      return "k_eGuildLimit";
    case CMsgClientToGCCreateGuildResponse_EResponse.k_eInvalidMotD:
      return "k_eInvalidMotD";
    case CMsgClientToGCCreateGuildResponse_EResponse.k_eBlocked:
      return "k_eBlocked";
    case CMsgClientToGCCreateGuildResponse_EResponse.k_eFreeTrialNotAllowed:
      return "k_eFreeTrialNotAllowed";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCreateGuildResponse_EResponse",
      );
  }
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

export function cMsgClientToGCSetGuildInfoResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCSetGuildInfoResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCSetGuildInfoResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCSetGuildInfoResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCSetGuildInfoResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCSetGuildInfoResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCSetGuildInfoResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidGuild":
      return CMsgClientToGCSetGuildInfoResponse_EResponse.k_eInvalidGuild;
    case 6:
    case "k_eNotMember":
      return CMsgClientToGCSetGuildInfoResponse_EResponse.k_eNotMember;
    case 7:
    case "k_eNoPermission":
      return CMsgClientToGCSetGuildInfoResponse_EResponse.k_eNoPermission;
    case 8:
    case "k_eMotDTooLong":
      return CMsgClientToGCSetGuildInfoResponse_EResponse.k_eMotDTooLong;
    case 9:
    case "k_eNameChangeNoPermissions":
      return CMsgClientToGCSetGuildInfoResponse_EResponse.k_eNameChangeNoPermissions;
    case 10:
    case "k_eTagChangeNoPermissions":
      return CMsgClientToGCSetGuildInfoResponse_EResponse.k_eTagChangeNoPermissions;
    case 11:
    case "k_eNameInvalid":
      return CMsgClientToGCSetGuildInfoResponse_EResponse.k_eNameInvalid;
    case 12:
    case "k_eTagInvalid":
      return CMsgClientToGCSetGuildInfoResponse_EResponse.k_eTagInvalid;
    case 13:
    case "k_eDescriptionInvalid":
      return CMsgClientToGCSetGuildInfoResponse_EResponse.k_eDescriptionInvalid;
    case 14:
    case "k_eBlocked":
      return CMsgClientToGCSetGuildInfoResponse_EResponse.k_eBlocked;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCSetGuildInfoResponse_EResponse",
      );
  }
}

export function cMsgClientToGCSetGuildInfoResponse_EResponseToJSON(
  object: CMsgClientToGCSetGuildInfoResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCSetGuildInfoResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCSetGuildInfoResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCSetGuildInfoResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCSetGuildInfoResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCSetGuildInfoResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCSetGuildInfoResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCSetGuildInfoResponse_EResponse.k_eNotMember:
      return "k_eNotMember";
    case CMsgClientToGCSetGuildInfoResponse_EResponse.k_eNoPermission:
      return "k_eNoPermission";
    case CMsgClientToGCSetGuildInfoResponse_EResponse.k_eMotDTooLong:
      return "k_eMotDTooLong";
    case CMsgClientToGCSetGuildInfoResponse_EResponse.k_eNameChangeNoPermissions:
      return "k_eNameChangeNoPermissions";
    case CMsgClientToGCSetGuildInfoResponse_EResponse.k_eTagChangeNoPermissions:
      return "k_eTagChangeNoPermissions";
    case CMsgClientToGCSetGuildInfoResponse_EResponse.k_eNameInvalid:
      return "k_eNameInvalid";
    case CMsgClientToGCSetGuildInfoResponse_EResponse.k_eTagInvalid:
      return "k_eTagInvalid";
    case CMsgClientToGCSetGuildInfoResponse_EResponse.k_eDescriptionInvalid:
      return "k_eDescriptionInvalid";
    case CMsgClientToGCSetGuildInfoResponse_EResponse.k_eBlocked:
      return "k_eBlocked";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCSetGuildInfoResponse_EResponse",
      );
  }
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

export function cMsgClientToGCRequestGuildDataResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCRequestGuildDataResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCRequestGuildDataResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCRequestGuildDataResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCRequestGuildDataResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCRequestGuildDataResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCRequestGuildDataResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidGuild":
      return CMsgClientToGCRequestGuildDataResponse_EResponse.k_eInvalidGuild;
    case 6:
    case "k_eNotMember":
      return CMsgClientToGCRequestGuildDataResponse_EResponse.k_eNotMember;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestGuildDataResponse_EResponse",
      );
  }
}

export function cMsgClientToGCRequestGuildDataResponse_EResponseToJSON(
  object: CMsgClientToGCRequestGuildDataResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCRequestGuildDataResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCRequestGuildDataResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCRequestGuildDataResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCRequestGuildDataResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCRequestGuildDataResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCRequestGuildDataResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCRequestGuildDataResponse_EResponse.k_eNotMember:
      return "k_eNotMember";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestGuildDataResponse_EResponse",
      );
  }
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

export function cMsgClientToGCRequestGuildMembershipResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCRequestGuildMembershipResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCRequestGuildMembershipResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCRequestGuildMembershipResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCRequestGuildMembershipResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCRequestGuildMembershipResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCRequestGuildMembershipResponse_EResponse.k_eTimeout;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestGuildMembershipResponse_EResponse",
      );
  }
}

export function cMsgClientToGCRequestGuildMembershipResponse_EResponseToJSON(
  object: CMsgClientToGCRequestGuildMembershipResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCRequestGuildMembershipResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCRequestGuildMembershipResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCRequestGuildMembershipResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCRequestGuildMembershipResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCRequestGuildMembershipResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestGuildMembershipResponse_EResponse",
      );
  }
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

export function cMsgClientToGCJoinGuildResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCJoinGuildResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCJoinGuildResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCJoinGuildResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCJoinGuildResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCJoinGuildResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCJoinGuildResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidGuild":
      return CMsgClientToGCJoinGuildResponse_EResponse.k_eInvalidGuild;
    case 6:
    case "k_eGuildFull":
      return CMsgClientToGCJoinGuildResponse_EResponse.k_eGuildFull;
    case 7:
    case "k_eAlreadyMember":
      return CMsgClientToGCJoinGuildResponse_EResponse.k_eAlreadyMember;
    case 8:
    case "k_eGuildLimit":
      return CMsgClientToGCJoinGuildResponse_EResponse.k_eGuildLimit;
    case 9:
    case "k_eGuildRequiresInvite":
      return CMsgClientToGCJoinGuildResponse_EResponse.k_eGuildRequiresInvite;
    case 10:
    case "k_eGuildRankTooLow":
      return CMsgClientToGCJoinGuildResponse_EResponse.k_eGuildRankTooLow;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCJoinGuildResponse_EResponse",
      );
  }
}

export function cMsgClientToGCJoinGuildResponse_EResponseToJSON(
  object: CMsgClientToGCJoinGuildResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCJoinGuildResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCJoinGuildResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCJoinGuildResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCJoinGuildResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCJoinGuildResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCJoinGuildResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCJoinGuildResponse_EResponse.k_eGuildFull:
      return "k_eGuildFull";
    case CMsgClientToGCJoinGuildResponse_EResponse.k_eAlreadyMember:
      return "k_eAlreadyMember";
    case CMsgClientToGCJoinGuildResponse_EResponse.k_eGuildLimit:
      return "k_eGuildLimit";
    case CMsgClientToGCJoinGuildResponse_EResponse.k_eGuildRequiresInvite:
      return "k_eGuildRequiresInvite";
    case CMsgClientToGCJoinGuildResponse_EResponse.k_eGuildRankTooLow:
      return "k_eGuildRankTooLow";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCJoinGuildResponse_EResponse",
      );
  }
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

export function cMsgClientToGCLeaveGuildResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCLeaveGuildResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCLeaveGuildResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCLeaveGuildResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCLeaveGuildResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCLeaveGuildResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCLeaveGuildResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidGuild":
      return CMsgClientToGCLeaveGuildResponse_EResponse.k_eInvalidGuild;
    case 6:
    case "k_eNotMember":
      return CMsgClientToGCLeaveGuildResponse_EResponse.k_eNotMember;
    case 7:
    case "k_eLastAdmin":
      return CMsgClientToGCLeaveGuildResponse_EResponse.k_eLastAdmin;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCLeaveGuildResponse_EResponse",
      );
  }
}

export function cMsgClientToGCLeaveGuildResponse_EResponseToJSON(
  object: CMsgClientToGCLeaveGuildResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCLeaveGuildResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCLeaveGuildResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCLeaveGuildResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCLeaveGuildResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCLeaveGuildResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCLeaveGuildResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCLeaveGuildResponse_EResponse.k_eNotMember:
      return "k_eNotMember";
    case CMsgClientToGCLeaveGuildResponse_EResponse.k_eLastAdmin:
      return "k_eLastAdmin";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCLeaveGuildResponse_EResponse",
      );
  }
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

export function cMsgClientToGCKickGuildMemberResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCKickGuildMemberResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCKickGuildMemberResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCKickGuildMemberResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCKickGuildMemberResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCKickGuildMemberResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCKickGuildMemberResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidGuild":
      return CMsgClientToGCKickGuildMemberResponse_EResponse.k_eInvalidGuild;
    case 6:
    case "k_eRequesterNotMember":
      return CMsgClientToGCKickGuildMemberResponse_EResponse.k_eRequesterNotMember;
    case 7:
    case "k_eTargetNotMember":
      return CMsgClientToGCKickGuildMemberResponse_EResponse.k_eTargetNotMember;
    case 8:
    case "k_eNoPermission":
      return CMsgClientToGCKickGuildMemberResponse_EResponse.k_eNoPermission;
    case 9:
    case "k_eCantKickSelf":
      return CMsgClientToGCKickGuildMemberResponse_EResponse.k_eCantKickSelf;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCKickGuildMemberResponse_EResponse",
      );
  }
}

export function cMsgClientToGCKickGuildMemberResponse_EResponseToJSON(
  object: CMsgClientToGCKickGuildMemberResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCKickGuildMemberResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCKickGuildMemberResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCKickGuildMemberResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCKickGuildMemberResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCKickGuildMemberResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCKickGuildMemberResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCKickGuildMemberResponse_EResponse.k_eRequesterNotMember:
      return "k_eRequesterNotMember";
    case CMsgClientToGCKickGuildMemberResponse_EResponse.k_eTargetNotMember:
      return "k_eTargetNotMember";
    case CMsgClientToGCKickGuildMemberResponse_EResponse.k_eNoPermission:
      return "k_eNoPermission";
    case CMsgClientToGCKickGuildMemberResponse_EResponse.k_eCantKickSelf:
      return "k_eCantKickSelf";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCKickGuildMemberResponse_EResponse",
      );
  }
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

export function cMsgClientToGCSetGuildMemberRoleResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCSetGuildMemberRoleResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidGuild":
      return CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eInvalidGuild;
    case 6:
    case "k_eRequesterNotMember":
      return CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eRequesterNotMember;
    case 7:
    case "k_eTargetNotMember":
      return CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eTargetNotMember;
    case 8:
    case "k_eNoPermission":
      return CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eNoPermission;
    case 9:
    case "k_eInvalidRole":
      return CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eInvalidRole;
    case 10:
    case "k_eAdminViolation":
      return CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eAdminViolation;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCSetGuildMemberRoleResponse_EResponse",
      );
  }
}

export function cMsgClientToGCSetGuildMemberRoleResponse_EResponseToJSON(
  object: CMsgClientToGCSetGuildMemberRoleResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eRequesterNotMember:
      return "k_eRequesterNotMember";
    case CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eTargetNotMember:
      return "k_eTargetNotMember";
    case CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eNoPermission:
      return "k_eNoPermission";
    case CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eInvalidRole:
      return "k_eInvalidRole";
    case CMsgClientToGCSetGuildMemberRoleResponse_EResponse.k_eAdminViolation:
      return "k_eAdminViolation";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCSetGuildMemberRoleResponse_EResponse",
      );
  }
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

export function cMsgClientToGCInviteToGuildResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCInviteToGuildResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCInviteToGuildResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCInviteToGuildResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCInviteToGuildResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCInviteToGuildResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCInviteToGuildResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidGuild":
      return CMsgClientToGCInviteToGuildResponse_EResponse.k_eInvalidGuild;
    case 6:
    case "k_eGuildFull":
      return CMsgClientToGCInviteToGuildResponse_EResponse.k_eGuildFull;
    case 7:
    case "k_eRequesterNotMember":
      return CMsgClientToGCInviteToGuildResponse_EResponse.k_eRequesterNotMember;
    case 8:
    case "k_eAlreadyAMember":
      return CMsgClientToGCInviteToGuildResponse_EResponse.k_eAlreadyAMember;
    case 9:
    case "k_eAlreadyInvited":
      return CMsgClientToGCInviteToGuildResponse_EResponse.k_eAlreadyInvited;
    case 10:
    case "k_eNoInvitePermissions":
      return CMsgClientToGCInviteToGuildResponse_EResponse.k_eNoInvitePermissions;
    case 11:
    case "k_eTooManyInvites":
      return CMsgClientToGCInviteToGuildResponse_EResponse.k_eTooManyInvites;
    case 12:
    case "k_eInvalidUser":
      return CMsgClientToGCInviteToGuildResponse_EResponse.k_eInvalidUser;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCInviteToGuildResponse_EResponse",
      );
  }
}

export function cMsgClientToGCInviteToGuildResponse_EResponseToJSON(
  object: CMsgClientToGCInviteToGuildResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCInviteToGuildResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCInviteToGuildResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCInviteToGuildResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCInviteToGuildResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCInviteToGuildResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCInviteToGuildResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCInviteToGuildResponse_EResponse.k_eGuildFull:
      return "k_eGuildFull";
    case CMsgClientToGCInviteToGuildResponse_EResponse.k_eRequesterNotMember:
      return "k_eRequesterNotMember";
    case CMsgClientToGCInviteToGuildResponse_EResponse.k_eAlreadyAMember:
      return "k_eAlreadyAMember";
    case CMsgClientToGCInviteToGuildResponse_EResponse.k_eAlreadyInvited:
      return "k_eAlreadyInvited";
    case CMsgClientToGCInviteToGuildResponse_EResponse.k_eNoInvitePermissions:
      return "k_eNoInvitePermissions";
    case CMsgClientToGCInviteToGuildResponse_EResponse.k_eTooManyInvites:
      return "k_eTooManyInvites";
    case CMsgClientToGCInviteToGuildResponse_EResponse.k_eInvalidUser:
      return "k_eInvalidUser";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCInviteToGuildResponse_EResponse",
      );
  }
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

export function cMsgClientToGCDeclineInviteToGuildResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCDeclineInviteToGuildResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCDeclineInviteToGuildResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCDeclineInviteToGuildResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCDeclineInviteToGuildResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCDeclineInviteToGuildResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCDeclineInviteToGuildResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidGuild":
      return CMsgClientToGCDeclineInviteToGuildResponse_EResponse.k_eInvalidGuild;
    case 6:
    case "k_eNoInviteFound":
      return CMsgClientToGCDeclineInviteToGuildResponse_EResponse.k_eNoInviteFound;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCDeclineInviteToGuildResponse_EResponse",
      );
  }
}

export function cMsgClientToGCDeclineInviteToGuildResponse_EResponseToJSON(
  object: CMsgClientToGCDeclineInviteToGuildResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCDeclineInviteToGuildResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCDeclineInviteToGuildResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCDeclineInviteToGuildResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCDeclineInviteToGuildResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCDeclineInviteToGuildResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCDeclineInviteToGuildResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCDeclineInviteToGuildResponse_EResponse.k_eNoInviteFound:
      return "k_eNoInviteFound";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCDeclineInviteToGuildResponse_EResponse",
      );
  }
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

export function cMsgClientToGCAcceptInviteToGuildResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCAcceptInviteToGuildResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidGuild":
      return CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eInvalidGuild;
    case 6:
    case "k_eNoInviteFound":
      return CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eNoInviteFound;
    case 7:
    case "k_eGuildFull":
      return CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eGuildFull;
    case 8:
    case "k_eGuildLimit":
      return CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eGuildLimit;
    case 9:
    case "k_eInvalidInviter":
      return CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eInvalidInviter;
    case 10:
    case "k_eAlreadyInGuild":
      return CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eAlreadyInGuild;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCAcceptInviteToGuildResponse_EResponse",
      );
  }
}

export function cMsgClientToGCAcceptInviteToGuildResponse_EResponseToJSON(
  object: CMsgClientToGCAcceptInviteToGuildResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eNoInviteFound:
      return "k_eNoInviteFound";
    case CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eGuildFull:
      return "k_eGuildFull";
    case CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eGuildLimit:
      return "k_eGuildLimit";
    case CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eInvalidInviter:
      return "k_eInvalidInviter";
    case CMsgClientToGCAcceptInviteToGuildResponse_EResponse.k_eAlreadyInGuild:
      return "k_eAlreadyInGuild";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCAcceptInviteToGuildResponse_EResponse",
      );
  }
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

export function cMsgClientToGCCancelInviteToGuildResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCCancelInviteToGuildResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCCancelInviteToGuildResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCCancelInviteToGuildResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCCancelInviteToGuildResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCCancelInviteToGuildResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCCancelInviteToGuildResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidGuild":
      return CMsgClientToGCCancelInviteToGuildResponse_EResponse.k_eInvalidGuild;
    case 6:
    case "k_eNoInviteFound":
      return CMsgClientToGCCancelInviteToGuildResponse_EResponse.k_eNoInviteFound;
    case 7:
    case "k_eNoPermissions":
      return CMsgClientToGCCancelInviteToGuildResponse_EResponse.k_eNoPermissions;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCancelInviteToGuildResponse_EResponse",
      );
  }
}

export function cMsgClientToGCCancelInviteToGuildResponse_EResponseToJSON(
  object: CMsgClientToGCCancelInviteToGuildResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCCancelInviteToGuildResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCCancelInviteToGuildResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCCancelInviteToGuildResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCCancelInviteToGuildResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCCancelInviteToGuildResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCCancelInviteToGuildResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCCancelInviteToGuildResponse_EResponse.k_eNoInviteFound:
      return "k_eNoInviteFound";
    case CMsgClientToGCCancelInviteToGuildResponse_EResponse.k_eNoPermissions:
      return "k_eNoPermissions";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCancelInviteToGuildResponse_EResponse",
      );
  }
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

export function cMsgClientToGCAddGuildRoleResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCAddGuildRoleResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCAddGuildRoleResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCAddGuildRoleResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCAddGuildRoleResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCAddGuildRoleResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCAddGuildRoleResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidGuild":
      return CMsgClientToGCAddGuildRoleResponse_EResponse.k_eInvalidGuild;
    case 6:
    case "k_eNameAlreadyUsed":
      return CMsgClientToGCAddGuildRoleResponse_EResponse.k_eNameAlreadyUsed;
    case 7:
    case "k_eNoPermissions":
      return CMsgClientToGCAddGuildRoleResponse_EResponse.k_eNoPermissions;
    case 8:
    case "k_eInvalidFlags":
      return CMsgClientToGCAddGuildRoleResponse_EResponse.k_eInvalidFlags;
    case 9:
    case "k_eInvalidName":
      return CMsgClientToGCAddGuildRoleResponse_EResponse.k_eInvalidName;
    case 10:
    case "k_eAdminViolation":
      return CMsgClientToGCAddGuildRoleResponse_EResponse.k_eAdminViolation;
    case 11:
    case "k_eTooManyRoles":
      return CMsgClientToGCAddGuildRoleResponse_EResponse.k_eTooManyRoles;
    case 12:
    case "k_eBlocked":
      return CMsgClientToGCAddGuildRoleResponse_EResponse.k_eBlocked;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCAddGuildRoleResponse_EResponse",
      );
  }
}

export function cMsgClientToGCAddGuildRoleResponse_EResponseToJSON(
  object: CMsgClientToGCAddGuildRoleResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCAddGuildRoleResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCAddGuildRoleResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCAddGuildRoleResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCAddGuildRoleResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCAddGuildRoleResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCAddGuildRoleResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCAddGuildRoleResponse_EResponse.k_eNameAlreadyUsed:
      return "k_eNameAlreadyUsed";
    case CMsgClientToGCAddGuildRoleResponse_EResponse.k_eNoPermissions:
      return "k_eNoPermissions";
    case CMsgClientToGCAddGuildRoleResponse_EResponse.k_eInvalidFlags:
      return "k_eInvalidFlags";
    case CMsgClientToGCAddGuildRoleResponse_EResponse.k_eInvalidName:
      return "k_eInvalidName";
    case CMsgClientToGCAddGuildRoleResponse_EResponse.k_eAdminViolation:
      return "k_eAdminViolation";
    case CMsgClientToGCAddGuildRoleResponse_EResponse.k_eTooManyRoles:
      return "k_eTooManyRoles";
    case CMsgClientToGCAddGuildRoleResponse_EResponse.k_eBlocked:
      return "k_eBlocked";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCAddGuildRoleResponse_EResponse",
      );
  }
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

export function cMsgClientToGCModifyGuildRoleResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCModifyGuildRoleResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidGuild":
      return CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eInvalidGuild;
    case 6:
    case "k_eInvalidRole":
      return CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eInvalidRole;
    case 7:
    case "k_eNameAlreadyUsed":
      return CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eNameAlreadyUsed;
    case 8:
    case "k_eInvalidFlags":
      return CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eInvalidFlags;
    case 9:
    case "k_eInvalidName":
      return CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eInvalidName;
    case 10:
    case "k_eNoPermissions":
      return CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eNoPermissions;
    case 11:
    case "k_eAdminViolation":
      return CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eAdminViolation;
    case 12:
    case "k_eBlocked":
      return CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eBlocked;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCModifyGuildRoleResponse_EResponse",
      );
  }
}

export function cMsgClientToGCModifyGuildRoleResponse_EResponseToJSON(
  object: CMsgClientToGCModifyGuildRoleResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eInvalidRole:
      return "k_eInvalidRole";
    case CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eNameAlreadyUsed:
      return "k_eNameAlreadyUsed";
    case CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eInvalidFlags:
      return "k_eInvalidFlags";
    case CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eInvalidName:
      return "k_eInvalidName";
    case CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eNoPermissions:
      return "k_eNoPermissions";
    case CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eAdminViolation:
      return "k_eAdminViolation";
    case CMsgClientToGCModifyGuildRoleResponse_EResponse.k_eBlocked:
      return "k_eBlocked";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCModifyGuildRoleResponse_EResponse",
      );
  }
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

export function cMsgClientToGCRemoveGuildRoleResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCRemoveGuildRoleResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidGuild":
      return CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eInvalidGuild;
    case 6:
    case "k_eInvalidRole":
      return CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eInvalidRole;
    case 7:
    case "k_eRoleNotEmpty":
      return CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eRoleNotEmpty;
    case 8:
    case "k_eNoPermissions":
      return CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eNoPermissions;
    case 9:
    case "k_eAdminViolation":
      return CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eAdminViolation;
    case 10:
    case "k_eCantRemoveDefaultRole":
      return CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eCantRemoveDefaultRole;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRemoveGuildRoleResponse_EResponse",
      );
  }
}

export function cMsgClientToGCRemoveGuildRoleResponse_EResponseToJSON(
  object: CMsgClientToGCRemoveGuildRoleResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eInvalidRole:
      return "k_eInvalidRole";
    case CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eRoleNotEmpty:
      return "k_eRoleNotEmpty";
    case CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eNoPermissions:
      return "k_eNoPermissions";
    case CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eAdminViolation:
      return "k_eAdminViolation";
    case CMsgClientToGCRemoveGuildRoleResponse_EResponse.k_eCantRemoveDefaultRole:
      return "k_eCantRemoveDefaultRole";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRemoveGuildRoleResponse_EResponse",
      );
  }
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

export function cMsgClientToGCSetGuildRoleOrderResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCSetGuildRoleOrderResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidGuild":
      return CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eInvalidGuild;
    case 6:
    case "k_eInvalidRole":
      return CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eInvalidRole;
    case 7:
    case "k_eInvalidOrder":
      return CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eInvalidOrder;
    case 8:
    case "k_eNoPermissions":
      return CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eNoPermissions;
    case 9:
    case "k_eAdminViolation":
      return CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eAdminViolation;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCSetGuildRoleOrderResponse_EResponse",
      );
  }
}

export function cMsgClientToGCSetGuildRoleOrderResponse_EResponseToJSON(
  object: CMsgClientToGCSetGuildRoleOrderResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eInvalidRole:
      return "k_eInvalidRole";
    case CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eInvalidOrder:
      return "k_eInvalidOrder";
    case CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eNoPermissions:
      return "k_eNoPermissions";
    case CMsgClientToGCSetGuildRoleOrderResponse_EResponse.k_eAdminViolation:
      return "k_eAdminViolation";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCSetGuildRoleOrderResponse_EResponse",
      );
  }
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

export function cMsgClientToGCRequestGuildFeedResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCRequestGuildFeedResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCRequestGuildFeedResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCRequestGuildFeedResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCRequestGuildFeedResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCRequestGuildFeedResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCRequestGuildFeedResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidGuild":
      return CMsgClientToGCRequestGuildFeedResponse_EResponse.k_eInvalidGuild;
    case 6:
    case "k_eNoPermissions":
      return CMsgClientToGCRequestGuildFeedResponse_EResponse.k_eNoPermissions;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestGuildFeedResponse_EResponse",
      );
  }
}

export function cMsgClientToGCRequestGuildFeedResponse_EResponseToJSON(
  object: CMsgClientToGCRequestGuildFeedResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCRequestGuildFeedResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCRequestGuildFeedResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCRequestGuildFeedResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCRequestGuildFeedResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCRequestGuildFeedResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCRequestGuildFeedResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCRequestGuildFeedResponse_EResponse.k_eNoPermissions:
      return "k_eNoPermissions";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestGuildFeedResponse_EResponse",
      );
  }
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

export function cMsgClientToGCAddPlayerToGuildChatResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCAddPlayerToGuildChatResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCAddPlayerToGuildChatResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCAddPlayerToGuildChatResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCAddPlayerToGuildChatResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCAddPlayerToGuildChatResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCAddPlayerToGuildChatResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidGuild":
      return CMsgClientToGCAddPlayerToGuildChatResponse_EResponse.k_eInvalidGuild;
    case 6:
    case "k_eNotMember":
      return CMsgClientToGCAddPlayerToGuildChatResponse_EResponse.k_eNotMember;
    case 7:
    case "k_eSteamChatNotEnabled":
      return CMsgClientToGCAddPlayerToGuildChatResponse_EResponse.k_eSteamChatNotEnabled;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCAddPlayerToGuildChatResponse_EResponse",
      );
  }
}

export function cMsgClientToGCAddPlayerToGuildChatResponse_EResponseToJSON(
  object: CMsgClientToGCAddPlayerToGuildChatResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCAddPlayerToGuildChatResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCAddPlayerToGuildChatResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCAddPlayerToGuildChatResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCAddPlayerToGuildChatResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCAddPlayerToGuildChatResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCAddPlayerToGuildChatResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCAddPlayerToGuildChatResponse_EResponse.k_eNotMember:
      return "k_eNotMember";
    case CMsgClientToGCAddPlayerToGuildChatResponse_EResponse.k_eSteamChatNotEnabled:
      return "k_eSteamChatNotEnabled";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCAddPlayerToGuildChatResponse_EResponse",
      );
  }
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

export function cMsgFindGuildByTagResponse_EResponseFromJSON(object: any): CMsgFindGuildByTagResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgFindGuildByTagResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgFindGuildByTagResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgFindGuildByTagResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgFindGuildByTagResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgFindGuildByTagResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidTag":
      return CMsgFindGuildByTagResponse_EResponse.k_eInvalidTag;
    case 6:
    case "k_eGuildNotFound":
      return CMsgFindGuildByTagResponse_EResponse.k_eGuildNotFound;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgFindGuildByTagResponse_EResponse",
      );
  }
}

export function cMsgFindGuildByTagResponse_EResponseToJSON(object: CMsgFindGuildByTagResponse_EResponse): string {
  switch (object) {
    case CMsgFindGuildByTagResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgFindGuildByTagResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgFindGuildByTagResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgFindGuildByTagResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgFindGuildByTagResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgFindGuildByTagResponse_EResponse.k_eInvalidTag:
      return "k_eInvalidTag";
    case CMsgFindGuildByTagResponse_EResponse.k_eGuildNotFound:
      return "k_eGuildNotFound";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgFindGuildByTagResponse_EResponse",
      );
  }
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

export function cMsgSearchForOpenGuildsResponse_EResponseFromJSON(
  object: any,
): CMsgSearchForOpenGuildsResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgSearchForOpenGuildsResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgSearchForOpenGuildsResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgSearchForOpenGuildsResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgSearchForOpenGuildsResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgSearchForOpenGuildsResponse_EResponse.k_eTimeout;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSearchForOpenGuildsResponse_EResponse",
      );
  }
}

export function cMsgSearchForOpenGuildsResponse_EResponseToJSON(
  object: CMsgSearchForOpenGuildsResponse_EResponse,
): string {
  switch (object) {
    case CMsgSearchForOpenGuildsResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgSearchForOpenGuildsResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgSearchForOpenGuildsResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgSearchForOpenGuildsResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgSearchForOpenGuildsResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSearchForOpenGuildsResponse_EResponse",
      );
  }
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

export function cMsgClientToGCReportGuildContent_EContentFlagsFromJSON(
  object: any,
): CMsgClientToGCReportGuildContent_EContentFlags {
  switch (object) {
    case 0:
    case "k_eNone":
      return CMsgClientToGCReportGuildContent_EContentFlags.k_eNone;
    case 1:
    case "k_eInappropriateName":
      return CMsgClientToGCReportGuildContent_EContentFlags.k_eInappropriateName;
    case 2:
    case "k_eInappropriateTag":
      return CMsgClientToGCReportGuildContent_EContentFlags.k_eInappropriateTag;
    case 4:
    case "k_eInappropriateLogo":
      return CMsgClientToGCReportGuildContent_EContentFlags.k_eInappropriateLogo;
    case 7:
    case "k_eValidFlags":
      return CMsgClientToGCReportGuildContent_EContentFlags.k_eValidFlags;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCReportGuildContent_EContentFlags",
      );
  }
}

export function cMsgClientToGCReportGuildContent_EContentFlagsToJSON(
  object: CMsgClientToGCReportGuildContent_EContentFlags,
): string {
  switch (object) {
    case CMsgClientToGCReportGuildContent_EContentFlags.k_eNone:
      return "k_eNone";
    case CMsgClientToGCReportGuildContent_EContentFlags.k_eInappropriateName:
      return "k_eInappropriateName";
    case CMsgClientToGCReportGuildContent_EContentFlags.k_eInappropriateTag:
      return "k_eInappropriateTag";
    case CMsgClientToGCReportGuildContent_EContentFlags.k_eInappropriateLogo:
      return "k_eInappropriateLogo";
    case CMsgClientToGCReportGuildContent_EContentFlags.k_eValidFlags:
      return "k_eValidFlags";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCReportGuildContent_EContentFlags",
      );
  }
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

export function cMsgClientToGCReportGuildContentResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCReportGuildContentResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCReportGuildContentResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCReportGuildContentResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCReportGuildContentResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCReportGuildContentResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCReportGuildContentResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eGuildNotFound":
      return CMsgClientToGCReportGuildContentResponse_EResponse.k_eGuildNotFound;
    case 6:
    case "k_eFlagsInvalid":
      return CMsgClientToGCReportGuildContentResponse_EResponse.k_eFlagsInvalid;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCReportGuildContentResponse_EResponse",
      );
  }
}

export function cMsgClientToGCReportGuildContentResponse_EResponseToJSON(
  object: CMsgClientToGCReportGuildContentResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCReportGuildContentResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCReportGuildContentResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCReportGuildContentResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCReportGuildContentResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCReportGuildContentResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCReportGuildContentResponse_EResponse.k_eGuildNotFound:
      return "k_eGuildNotFound";
    case CMsgClientToGCReportGuildContentResponse_EResponse.k_eFlagsInvalid:
      return "k_eFlagsInvalid";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCReportGuildContentResponse_EResponse",
      );
  }
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

export function cMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidAccount":
      return CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse.k_eInvalidAccount;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse",
      );
  }
}

export function cMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponseToJSON(
  object: CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse.k_eInvalidAccount:
      return "k_eInvalidAccount";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse",
      );
  }
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

export function cMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidRequest":
      return CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse.k_eInvalidRequest;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse",
      );
  }
}

export function cMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponseToJSON(
  object: CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse.k_eInvalidRequest:
      return "k_eInvalidRequest";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse",
      );
  }
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

  fromJSON(object: any): CMsgGuildInfo {
    return {
      guildName: isSet(object.guildName) ? String(object.guildName) : "",
      guildTag: isSet(object.guildTag) ? String(object.guildTag) : "",
      createdTimestamp: isSet(object.createdTimestamp) ? Number(object.createdTimestamp) : 0,
      guildLanguage: isSet(object.guildLanguage) ? Number(object.guildLanguage) : 0,
      guildFlags: isSet(object.guildFlags) ? Number(object.guildFlags) : 0,
      guildLogo: isSet(object.guildLogo) ? String(object.guildLogo) : "0",
      guildRegion: isSet(object.guildRegion) ? Number(object.guildRegion) : 0,
      guildChatGroupId: isSet(object.guildChatGroupId) ? String(object.guildChatGroupId) : "0",
      guildDescription: isSet(object.guildDescription) ? String(object.guildDescription) : "",
      defaultChatChannelId: isSet(object.defaultChatChannelId) ? String(object.defaultChatChannelId) : "0",
      guildPrimaryColor: isSet(object.guildPrimaryColor) ? Number(object.guildPrimaryColor) : 0,
      guildSecondaryColor: isSet(object.guildSecondaryColor) ? Number(object.guildSecondaryColor) : 0,
      guildPattern: isSet(object.guildPattern) ? Number(object.guildPattern) : 0,
      guildRefreshTimeOffset: isSet(object.guildRefreshTimeOffset) ? Number(object.guildRefreshTimeOffset) : 0,
      guildRequiredRankTier: isSet(object.guildRequiredRankTier) ? Number(object.guildRequiredRankTier) : 0,
      guildMotdTimestamp: isSet(object.guildMotdTimestamp) ? Number(object.guildMotdTimestamp) : 0,
      guildMotd: isSet(object.guildMotd) ? String(object.guildMotd) : "",
    };
  },

  toJSON(message: CMsgGuildInfo): unknown {
    const obj: any = {};
    message.guildName !== undefined && (obj.guildName = message.guildName);
    message.guildTag !== undefined && (obj.guildTag = message.guildTag);
    message.createdTimestamp !== undefined && (obj.createdTimestamp = Math.round(message.createdTimestamp));
    message.guildLanguage !== undefined && (obj.guildLanguage = Math.round(message.guildLanguage));
    message.guildFlags !== undefined && (obj.guildFlags = Math.round(message.guildFlags));
    message.guildLogo !== undefined && (obj.guildLogo = message.guildLogo);
    message.guildRegion !== undefined && (obj.guildRegion = Math.round(message.guildRegion));
    message.guildChatGroupId !== undefined && (obj.guildChatGroupId = message.guildChatGroupId);
    message.guildDescription !== undefined && (obj.guildDescription = message.guildDescription);
    message.defaultChatChannelId !== undefined && (obj.defaultChatChannelId = message.defaultChatChannelId);
    message.guildPrimaryColor !== undefined && (obj.guildPrimaryColor = Math.round(message.guildPrimaryColor));
    message.guildSecondaryColor !== undefined && (obj.guildSecondaryColor = Math.round(message.guildSecondaryColor));
    message.guildPattern !== undefined && (obj.guildPattern = Math.round(message.guildPattern));
    message.guildRefreshTimeOffset !== undefined &&
      (obj.guildRefreshTimeOffset = Math.round(message.guildRefreshTimeOffset));
    message.guildRequiredRankTier !== undefined &&
      (obj.guildRequiredRankTier = Math.round(message.guildRequiredRankTier));
    message.guildMotdTimestamp !== undefined && (obj.guildMotdTimestamp = Math.round(message.guildMotdTimestamp));
    message.guildMotd !== undefined && (obj.guildMotd = message.guildMotd);
    return obj;
  },

  create(base?: DeepPartial<CMsgGuildInfo>): CMsgGuildInfo {
    return CMsgGuildInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGuildInfo>): CMsgGuildInfo {
    const message = createBaseCMsgGuildInfo();
    message.guildName = object.guildName ?? "";
    message.guildTag = object.guildTag ?? "";
    message.createdTimestamp = object.createdTimestamp ?? 0;
    message.guildLanguage = object.guildLanguage ?? 0;
    message.guildFlags = object.guildFlags ?? 0;
    message.guildLogo = object.guildLogo ?? "0";
    message.guildRegion = object.guildRegion ?? 0;
    message.guildChatGroupId = object.guildChatGroupId ?? "0";
    message.guildDescription = object.guildDescription ?? "";
    message.defaultChatChannelId = object.defaultChatChannelId ?? "0";
    message.guildPrimaryColor = object.guildPrimaryColor ?? 0;
    message.guildSecondaryColor = object.guildSecondaryColor ?? 0;
    message.guildPattern = object.guildPattern ?? 0;
    message.guildRefreshTimeOffset = object.guildRefreshTimeOffset ?? 0;
    message.guildRequiredRankTier = object.guildRequiredRankTier ?? 0;
    message.guildMotdTimestamp = object.guildMotdTimestamp ?? 0;
    message.guildMotd = object.guildMotd ?? "";
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

  fromJSON(object: any): CMsgGuildSummary {
    return {
      guildInfo: isSet(object.guildInfo) ? CMsgGuildInfo.fromJSON(object.guildInfo) : undefined,
      memberCount: isSet(object.memberCount) ? Number(object.memberCount) : 0,
      eventPoints: Array.isArray(object?.eventPoints)
        ? object.eventPoints.map((e: any) => CMsgGuildSummary_EventPoints.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGuildSummary): unknown {
    const obj: any = {};
    message.guildInfo !== undefined &&
      (obj.guildInfo = message.guildInfo ? CMsgGuildInfo.toJSON(message.guildInfo) : undefined);
    message.memberCount !== undefined && (obj.memberCount = Math.round(message.memberCount));
    if (message.eventPoints) {
      obj.eventPoints = message.eventPoints.map((e) => e ? CMsgGuildSummary_EventPoints.toJSON(e) : undefined);
    } else {
      obj.eventPoints = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGuildSummary>): CMsgGuildSummary {
    return CMsgGuildSummary.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGuildSummary>): CMsgGuildSummary {
    const message = createBaseCMsgGuildSummary();
    message.guildInfo = (object.guildInfo !== undefined && object.guildInfo !== null)
      ? CMsgGuildInfo.fromPartial(object.guildInfo)
      : undefined;
    message.memberCount = object.memberCount ?? 0;
    message.eventPoints = object.eventPoints?.map((e) => CMsgGuildSummary_EventPoints.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgGuildSummary_EventPoints {
    return {
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      guildPoints: isSet(object.guildPoints) ? Number(object.guildPoints) : 0,
      guildRank: isSet(object.guildRank) ? Number(object.guildRank) : 0,
      guildWeeklyRank: isSet(object.guildWeeklyRank) ? Number(object.guildWeeklyRank) : 0,
      guildWeeklyPercentile: isSet(object.guildWeeklyPercentile) ? Number(object.guildWeeklyPercentile) : 0,
      guildCurrentPercentile: isSet(object.guildCurrentPercentile) ? Number(object.guildCurrentPercentile) : 0,
    };
  },

  toJSON(message: CMsgGuildSummary_EventPoints): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    message.guildPoints !== undefined && (obj.guildPoints = Math.round(message.guildPoints));
    message.guildRank !== undefined && (obj.guildRank = Math.round(message.guildRank));
    message.guildWeeklyRank !== undefined && (obj.guildWeeklyRank = Math.round(message.guildWeeklyRank));
    message.guildWeeklyPercentile !== undefined &&
      (obj.guildWeeklyPercentile = Math.round(message.guildWeeklyPercentile));
    message.guildCurrentPercentile !== undefined &&
      (obj.guildCurrentPercentile = Math.round(message.guildCurrentPercentile));
    return obj;
  },

  create(base?: DeepPartial<CMsgGuildSummary_EventPoints>): CMsgGuildSummary_EventPoints {
    return CMsgGuildSummary_EventPoints.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGuildSummary_EventPoints>): CMsgGuildSummary_EventPoints {
    const message = createBaseCMsgGuildSummary_EventPoints();
    message.eventId = object.eventId ?? 0;
    message.guildPoints = object.guildPoints ?? 0;
    message.guildRank = object.guildRank ?? 0;
    message.guildWeeklyRank = object.guildWeeklyRank ?? 0;
    message.guildWeeklyPercentile = object.guildWeeklyPercentile ?? 0;
    message.guildCurrentPercentile = object.guildCurrentPercentile ?? 0;
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

  fromJSON(object: any): CMsgGuildRole {
    return {
      roleId: isSet(object.roleId) ? Number(object.roleId) : 0,
      roleName: isSet(object.roleName) ? String(object.roleName) : "",
      roleFlags: isSet(object.roleFlags) ? Number(object.roleFlags) : 0,
      roleOrder: isSet(object.roleOrder) ? Number(object.roleOrder) : 0,
    };
  },

  toJSON(message: CMsgGuildRole): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = Math.round(message.roleId));
    message.roleName !== undefined && (obj.roleName = message.roleName);
    message.roleFlags !== undefined && (obj.roleFlags = Math.round(message.roleFlags));
    message.roleOrder !== undefined && (obj.roleOrder = Math.round(message.roleOrder));
    return obj;
  },

  create(base?: DeepPartial<CMsgGuildRole>): CMsgGuildRole {
    return CMsgGuildRole.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGuildRole>): CMsgGuildRole {
    const message = createBaseCMsgGuildRole();
    message.roleId = object.roleId ?? 0;
    message.roleName = object.roleName ?? "";
    message.roleFlags = object.roleFlags ?? 0;
    message.roleOrder = object.roleOrder ?? 0;
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

  fromJSON(object: any): CMsgGuildMember {
    return {
      memberAccountId: isSet(object.memberAccountId) ? Number(object.memberAccountId) : 0,
      memberRoleId: isSet(object.memberRoleId) ? Number(object.memberRoleId) : 0,
      memberJoinedTimestamp: isSet(object.memberJoinedTimestamp) ? Number(object.memberJoinedTimestamp) : 0,
      memberLastActiveTimestamp: isSet(object.memberLastActiveTimestamp) ? Number(object.memberLastActiveTimestamp) : 0,
    };
  },

  toJSON(message: CMsgGuildMember): unknown {
    const obj: any = {};
    message.memberAccountId !== undefined && (obj.memberAccountId = Math.round(message.memberAccountId));
    message.memberRoleId !== undefined && (obj.memberRoleId = Math.round(message.memberRoleId));
    message.memberJoinedTimestamp !== undefined &&
      (obj.memberJoinedTimestamp = Math.round(message.memberJoinedTimestamp));
    message.memberLastActiveTimestamp !== undefined &&
      (obj.memberLastActiveTimestamp = Math.round(message.memberLastActiveTimestamp));
    return obj;
  },

  create(base?: DeepPartial<CMsgGuildMember>): CMsgGuildMember {
    return CMsgGuildMember.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGuildMember>): CMsgGuildMember {
    const message = createBaseCMsgGuildMember();
    message.memberAccountId = object.memberAccountId ?? 0;
    message.memberRoleId = object.memberRoleId ?? 0;
    message.memberJoinedTimestamp = object.memberJoinedTimestamp ?? 0;
    message.memberLastActiveTimestamp = object.memberLastActiveTimestamp ?? 0;
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

  fromJSON(object: any): CMsgGuildInvite {
    return {
      requesterAccountId: isSet(object.requesterAccountId) ? Number(object.requesterAccountId) : 0,
      targetAccountId: isSet(object.targetAccountId) ? Number(object.targetAccountId) : 0,
      timestampSent: isSet(object.timestampSent) ? Number(object.timestampSent) : 0,
    };
  },

  toJSON(message: CMsgGuildInvite): unknown {
    const obj: any = {};
    message.requesterAccountId !== undefined && (obj.requesterAccountId = Math.round(message.requesterAccountId));
    message.targetAccountId !== undefined && (obj.targetAccountId = Math.round(message.targetAccountId));
    message.timestampSent !== undefined && (obj.timestampSent = Math.round(message.timestampSent));
    return obj;
  },

  create(base?: DeepPartial<CMsgGuildInvite>): CMsgGuildInvite {
    return CMsgGuildInvite.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGuildInvite>): CMsgGuildInvite {
    const message = createBaseCMsgGuildInvite();
    message.requesterAccountId = object.requesterAccountId ?? 0;
    message.targetAccountId = object.targetAccountId ?? 0;
    message.timestampSent = object.timestampSent ?? 0;
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

  fromJSON(object: any): CMsgGuildData {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      guildInfo: isSet(object.guildInfo) ? CMsgGuildInfo.fromJSON(object.guildInfo) : undefined,
      guildRoles: Array.isArray(object?.guildRoles) ? object.guildRoles.map((e: any) => CMsgGuildRole.fromJSON(e)) : [],
      guildMembers: Array.isArray(object?.guildMembers)
        ? object.guildMembers.map((e: any) => CMsgGuildMember.fromJSON(e))
        : [],
      guildInvites: Array.isArray(object?.guildInvites)
        ? object.guildInvites.map((e: any) => CMsgGuildInvite.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGuildData): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.guildInfo !== undefined &&
      (obj.guildInfo = message.guildInfo ? CMsgGuildInfo.toJSON(message.guildInfo) : undefined);
    if (message.guildRoles) {
      obj.guildRoles = message.guildRoles.map((e) => e ? CMsgGuildRole.toJSON(e) : undefined);
    } else {
      obj.guildRoles = [];
    }
    if (message.guildMembers) {
      obj.guildMembers = message.guildMembers.map((e) => e ? CMsgGuildMember.toJSON(e) : undefined);
    } else {
      obj.guildMembers = [];
    }
    if (message.guildInvites) {
      obj.guildInvites = message.guildInvites.map((e) => e ? CMsgGuildInvite.toJSON(e) : undefined);
    } else {
      obj.guildInvites = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGuildData>): CMsgGuildData {
    return CMsgGuildData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGuildData>): CMsgGuildData {
    const message = createBaseCMsgGuildData();
    message.guildId = object.guildId ?? 0;
    message.guildInfo = (object.guildInfo !== undefined && object.guildInfo !== null)
      ? CMsgGuildInfo.fromPartial(object.guildInfo)
      : undefined;
    message.guildRoles = object.guildRoles?.map((e) => CMsgGuildRole.fromPartial(e)) || [];
    message.guildMembers = object.guildMembers?.map((e) => CMsgGuildMember.fromPartial(e)) || [];
    message.guildInvites = object.guildInvites?.map((e) => CMsgGuildInvite.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgAccountGuildInvite {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      requesterAccountId: isSet(object.requesterAccountId) ? Number(object.requesterAccountId) : 0,
      timestampSent: isSet(object.timestampSent) ? Number(object.timestampSent) : 0,
    };
  },

  toJSON(message: CMsgAccountGuildInvite): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.requesterAccountId !== undefined && (obj.requesterAccountId = Math.round(message.requesterAccountId));
    message.timestampSent !== undefined && (obj.timestampSent = Math.round(message.timestampSent));
    return obj;
  },

  create(base?: DeepPartial<CMsgAccountGuildInvite>): CMsgAccountGuildInvite {
    return CMsgAccountGuildInvite.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAccountGuildInvite>): CMsgAccountGuildInvite {
    const message = createBaseCMsgAccountGuildInvite();
    message.guildId = object.guildId ?? 0;
    message.requesterAccountId = object.requesterAccountId ?? 0;
    message.timestampSent = object.timestampSent ?? 0;
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

  fromJSON(object: any): CMsgAccountGuildMemberships {
    return {
      guildIds: Array.isArray(object?.guildIds) ? object.guildIds.map((e: any) => Number(e)) : [],
      guildInvites: Array.isArray(object?.guildInvites)
        ? object.guildInvites.map((e: any) => CMsgAccountGuildInvite.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgAccountGuildMemberships): unknown {
    const obj: any = {};
    if (message.guildIds) {
      obj.guildIds = message.guildIds.map((e) => Math.round(e));
    } else {
      obj.guildIds = [];
    }
    if (message.guildInvites) {
      obj.guildInvites = message.guildInvites.map((e) => e ? CMsgAccountGuildInvite.toJSON(e) : undefined);
    } else {
      obj.guildInvites = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgAccountGuildMemberships>): CMsgAccountGuildMemberships {
    return CMsgAccountGuildMemberships.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAccountGuildMemberships>): CMsgAccountGuildMemberships {
    const message = createBaseCMsgAccountGuildMemberships();
    message.guildIds = object.guildIds?.map((e) => e) || [];
    message.guildInvites = object.guildInvites?.map((e) => CMsgAccountGuildInvite.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgGuildPersonaInfo {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      guildTag: isSet(object.guildTag) ? String(object.guildTag) : "",
      guildFlags: isSet(object.guildFlags) ? Number(object.guildFlags) : 0,
    };
  },

  toJSON(message: CMsgGuildPersonaInfo): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.guildTag !== undefined && (obj.guildTag = message.guildTag);
    message.guildFlags !== undefined && (obj.guildFlags = Math.round(message.guildFlags));
    return obj;
  },

  create(base?: DeepPartial<CMsgGuildPersonaInfo>): CMsgGuildPersonaInfo {
    return CMsgGuildPersonaInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGuildPersonaInfo>): CMsgGuildPersonaInfo {
    const message = createBaseCMsgGuildPersonaInfo();
    message.guildId = object.guildId ?? 0;
    message.guildTag = object.guildTag ?? "";
    message.guildFlags = object.guildFlags ?? 0;
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

  fromJSON(object: any): CMsgAccountGuildsPersonaInfo {
    return {
      guildPersonaInfos: Array.isArray(object?.guildPersonaInfos)
        ? object.guildPersonaInfos.map((e: any) => CMsgGuildPersonaInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgAccountGuildsPersonaInfo): unknown {
    const obj: any = {};
    if (message.guildPersonaInfos) {
      obj.guildPersonaInfos = message.guildPersonaInfos.map((e) => e ? CMsgGuildPersonaInfo.toJSON(e) : undefined);
    } else {
      obj.guildPersonaInfos = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgAccountGuildsPersonaInfo>): CMsgAccountGuildsPersonaInfo {
    return CMsgAccountGuildsPersonaInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAccountGuildsPersonaInfo>): CMsgAccountGuildsPersonaInfo {
    const message = createBaseCMsgAccountGuildsPersonaInfo();
    message.guildPersonaInfos = object.guildPersonaInfos?.map((e) => CMsgGuildPersonaInfo.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgGuildFeedEvent {
    return {
      feedEventId: isSet(object.feedEventId) ? String(object.feedEventId) : "0",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      eventType: isSet(object.eventType) ? Number(object.eventType) : 0,
      paramUint1: isSet(object.paramUint1) ? Number(object.paramUint1) : 0,
      paramUint2: isSet(object.paramUint2) ? Number(object.paramUint2) : 0,
      paramUint3: isSet(object.paramUint3) ? Number(object.paramUint3) : 0,
    };
  },

  toJSON(message: CMsgGuildFeedEvent): unknown {
    const obj: any = {};
    message.feedEventId !== undefined && (obj.feedEventId = message.feedEventId);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.eventType !== undefined && (obj.eventType = Math.round(message.eventType));
    message.paramUint1 !== undefined && (obj.paramUint1 = Math.round(message.paramUint1));
    message.paramUint2 !== undefined && (obj.paramUint2 = Math.round(message.paramUint2));
    message.paramUint3 !== undefined && (obj.paramUint3 = Math.round(message.paramUint3));
    return obj;
  },

  create(base?: DeepPartial<CMsgGuildFeedEvent>): CMsgGuildFeedEvent {
    return CMsgGuildFeedEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGuildFeedEvent>): CMsgGuildFeedEvent {
    const message = createBaseCMsgGuildFeedEvent();
    message.feedEventId = object.feedEventId ?? "0";
    message.timestamp = object.timestamp ?? 0;
    message.eventType = object.eventType ?? 0;
    message.paramUint1 = object.paramUint1 ?? 0;
    message.paramUint2 = object.paramUint2 ?? 0;
    message.paramUint3 = object.paramUint3 ?? 0;
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

  fromJSON(object: any): CMsgClientToGCCreateGuild {
    return {
      guildInfo: isSet(object.guildInfo) ? CMsgGuildInfo.fromJSON(object.guildInfo) : undefined,
      guildChatType: isSet(object.guildChatType) ? eGuildChatTypeFromJSON(object.guildChatType) : 0,
    };
  },

  toJSON(message: CMsgClientToGCCreateGuild): unknown {
    const obj: any = {};
    message.guildInfo !== undefined &&
      (obj.guildInfo = message.guildInfo ? CMsgGuildInfo.toJSON(message.guildInfo) : undefined);
    message.guildChatType !== undefined && (obj.guildChatType = eGuildChatTypeToJSON(message.guildChatType));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCreateGuild>): CMsgClientToGCCreateGuild {
    return CMsgClientToGCCreateGuild.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCCreateGuild>): CMsgClientToGCCreateGuild {
    const message = createBaseCMsgClientToGCCreateGuild();
    message.guildInfo = (object.guildInfo !== undefined && object.guildInfo !== null)
      ? CMsgGuildInfo.fromPartial(object.guildInfo)
      : undefined;
    message.guildChatType = object.guildChatType ?? 0;
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

  fromJSON(object: any): CMsgClientToGCCreateGuildResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCCreateGuildResponse_EResponseFromJSON(object.result) : 0,
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCCreateGuildResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = cMsgClientToGCCreateGuildResponse_EResponseToJSON(message.result));
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCreateGuildResponse>): CMsgClientToGCCreateGuildResponse {
    return CMsgClientToGCCreateGuildResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCCreateGuildResponse>): CMsgClientToGCCreateGuildResponse {
    const message = createBaseCMsgClientToGCCreateGuildResponse();
    message.result = object.result ?? 0;
    message.guildId = object.guildId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCSetGuildInfo {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      guildInfo: isSet(object.guildInfo) ? CMsgGuildInfo.fromJSON(object.guildInfo) : undefined,
      guildChatType: isSet(object.guildChatType) ? eGuildChatTypeFromJSON(object.guildChatType) : 0,
    };
  },

  toJSON(message: CMsgClientToGCSetGuildInfo): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.guildInfo !== undefined &&
      (obj.guildInfo = message.guildInfo ? CMsgGuildInfo.toJSON(message.guildInfo) : undefined);
    message.guildChatType !== undefined && (obj.guildChatType = eGuildChatTypeToJSON(message.guildChatType));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCSetGuildInfo>): CMsgClientToGCSetGuildInfo {
    return CMsgClientToGCSetGuildInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCSetGuildInfo>): CMsgClientToGCSetGuildInfo {
    const message = createBaseCMsgClientToGCSetGuildInfo();
    message.guildId = object.guildId ?? 0;
    message.guildInfo = (object.guildInfo !== undefined && object.guildInfo !== null)
      ? CMsgGuildInfo.fromPartial(object.guildInfo)
      : undefined;
    message.guildChatType = object.guildChatType ?? 0;
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

  fromJSON(object: any): CMsgClientToGCSetGuildInfoResponse {
    return { result: isSet(object.result) ? cMsgClientToGCSetGuildInfoResponse_EResponseFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgClientToGCSetGuildInfoResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = cMsgClientToGCSetGuildInfoResponse_EResponseToJSON(message.result));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCSetGuildInfoResponse>): CMsgClientToGCSetGuildInfoResponse {
    return CMsgClientToGCSetGuildInfoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCSetGuildInfoResponse>): CMsgClientToGCSetGuildInfoResponse {
    const message = createBaseCMsgClientToGCSetGuildInfoResponse();
    message.result = object.result ?? 0;
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

  fromJSON(object: any): CMsgClientToGCRequestGuildData {
    return { guildId: isSet(object.guildId) ? Number(object.guildId) : 0 };
  },

  toJSON(message: CMsgClientToGCRequestGuildData): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCRequestGuildData>): CMsgClientToGCRequestGuildData {
    return CMsgClientToGCRequestGuildData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCRequestGuildData>): CMsgClientToGCRequestGuildData {
    const message = createBaseCMsgClientToGCRequestGuildData();
    message.guildId = object.guildId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCRequestGuildDataResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCRequestGuildDataResponse_EResponseFromJSON(object.result) : 0,
      guildData: isSet(object.guildData) ? CMsgGuildData.fromJSON(object.guildData) : undefined,
    };
  },

  toJSON(message: CMsgClientToGCRequestGuildDataResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCRequestGuildDataResponse_EResponseToJSON(message.result));
    message.guildData !== undefined &&
      (obj.guildData = message.guildData ? CMsgGuildData.toJSON(message.guildData) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCRequestGuildDataResponse>): CMsgClientToGCRequestGuildDataResponse {
    return CMsgClientToGCRequestGuildDataResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCRequestGuildDataResponse>): CMsgClientToGCRequestGuildDataResponse {
    const message = createBaseCMsgClientToGCRequestGuildDataResponse();
    message.result = object.result ?? 0;
    message.guildData = (object.guildData !== undefined && object.guildData !== null)
      ? CMsgGuildData.fromPartial(object.guildData)
      : undefined;
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

  fromJSON(object: any): CMsgGCToClientGuildDataUpdated {
    return {
      guildData: isSet(object.guildData) ? CMsgGuildData.fromJSON(object.guildData) : undefined,
      updateFlags: isSet(object.updateFlags) ? Number(object.updateFlags) : 0,
    };
  },

  toJSON(message: CMsgGCToClientGuildDataUpdated): unknown {
    const obj: any = {};
    message.guildData !== undefined &&
      (obj.guildData = message.guildData ? CMsgGuildData.toJSON(message.guildData) : undefined);
    message.updateFlags !== undefined && (obj.updateFlags = Math.round(message.updateFlags));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToClientGuildDataUpdated>): CMsgGCToClientGuildDataUpdated {
    return CMsgGCToClientGuildDataUpdated.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToClientGuildDataUpdated>): CMsgGCToClientGuildDataUpdated {
    const message = createBaseCMsgGCToClientGuildDataUpdated();
    message.guildData = (object.guildData !== undefined && object.guildData !== null)
      ? CMsgGuildData.fromPartial(object.guildData)
      : undefined;
    message.updateFlags = object.updateFlags ?? 0;
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

  fromJSON(object: any): CMsgGCToClientGuildMembersDataUpdated {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      membersData: Array.isArray(object?.membersData)
        ? object.membersData.map((e: any) => CMsgGuildMember.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGCToClientGuildMembersDataUpdated): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    if (message.membersData) {
      obj.membersData = message.membersData.map((e) => e ? CMsgGuildMember.toJSON(e) : undefined);
    } else {
      obj.membersData = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToClientGuildMembersDataUpdated>): CMsgGCToClientGuildMembersDataUpdated {
    return CMsgGCToClientGuildMembersDataUpdated.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToClientGuildMembersDataUpdated>): CMsgGCToClientGuildMembersDataUpdated {
    const message = createBaseCMsgGCToClientGuildMembersDataUpdated();
    message.guildId = object.guildId ?? 0;
    message.membersData = object.membersData?.map((e) => CMsgGuildMember.fromPartial(e)) || [];
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

  fromJSON(_: any): CMsgClientToGCRequestGuildMembership {
    return {};
  },

  toJSON(_: CMsgClientToGCRequestGuildMembership): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCRequestGuildMembership>): CMsgClientToGCRequestGuildMembership {
    return CMsgClientToGCRequestGuildMembership.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CMsgClientToGCRequestGuildMembership>): CMsgClientToGCRequestGuildMembership {
    const message = createBaseCMsgClientToGCRequestGuildMembership();
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

  fromJSON(object: any): CMsgClientToGCRequestGuildMembershipResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCRequestGuildMembershipResponse_EResponseFromJSON(object.result) : 0,
      guildMemberships: isSet(object.guildMemberships)
        ? CMsgAccountGuildMemberships.fromJSON(object.guildMemberships)
        : undefined,
    };
  },

  toJSON(message: CMsgClientToGCRequestGuildMembershipResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCRequestGuildMembershipResponse_EResponseToJSON(message.result));
    message.guildMemberships !== undefined && (obj.guildMemberships = message.guildMemberships
      ? CMsgAccountGuildMemberships.toJSON(message.guildMemberships)
      : undefined);
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCRequestGuildMembershipResponse>,
  ): CMsgClientToGCRequestGuildMembershipResponse {
    return CMsgClientToGCRequestGuildMembershipResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCRequestGuildMembershipResponse>,
  ): CMsgClientToGCRequestGuildMembershipResponse {
    const message = createBaseCMsgClientToGCRequestGuildMembershipResponse();
    message.result = object.result ?? 0;
    message.guildMemberships = (object.guildMemberships !== undefined && object.guildMemberships !== null)
      ? CMsgAccountGuildMemberships.fromPartial(object.guildMemberships)
      : undefined;
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

  fromJSON(object: any): CMsgGCToClientGuildMembershipUpdated {
    return {
      guildMemberships: isSet(object.guildMemberships)
        ? CMsgAccountGuildMemberships.fromJSON(object.guildMemberships)
        : undefined,
    };
  },

  toJSON(message: CMsgGCToClientGuildMembershipUpdated): unknown {
    const obj: any = {};
    message.guildMemberships !== undefined && (obj.guildMemberships = message.guildMemberships
      ? CMsgAccountGuildMemberships.toJSON(message.guildMemberships)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToClientGuildMembershipUpdated>): CMsgGCToClientGuildMembershipUpdated {
    return CMsgGCToClientGuildMembershipUpdated.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToClientGuildMembershipUpdated>): CMsgGCToClientGuildMembershipUpdated {
    const message = createBaseCMsgGCToClientGuildMembershipUpdated();
    message.guildMemberships = (object.guildMemberships !== undefined && object.guildMemberships !== null)
      ? CMsgAccountGuildMemberships.fromPartial(object.guildMemberships)
      : undefined;
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

  fromJSON(object: any): CMsgClientToGCJoinGuild {
    return { guildId: isSet(object.guildId) ? Number(object.guildId) : 0 };
  },

  toJSON(message: CMsgClientToGCJoinGuild): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCJoinGuild>): CMsgClientToGCJoinGuild {
    return CMsgClientToGCJoinGuild.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCJoinGuild>): CMsgClientToGCJoinGuild {
    const message = createBaseCMsgClientToGCJoinGuild();
    message.guildId = object.guildId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCJoinGuildResponse {
    return { result: isSet(object.result) ? cMsgClientToGCJoinGuildResponse_EResponseFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgClientToGCJoinGuildResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = cMsgClientToGCJoinGuildResponse_EResponseToJSON(message.result));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCJoinGuildResponse>): CMsgClientToGCJoinGuildResponse {
    return CMsgClientToGCJoinGuildResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCJoinGuildResponse>): CMsgClientToGCJoinGuildResponse {
    const message = createBaseCMsgClientToGCJoinGuildResponse();
    message.result = object.result ?? 0;
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

  fromJSON(object: any): CMsgClientToGCLeaveGuild {
    return { guildId: isSet(object.guildId) ? Number(object.guildId) : 0 };
  },

  toJSON(message: CMsgClientToGCLeaveGuild): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCLeaveGuild>): CMsgClientToGCLeaveGuild {
    return CMsgClientToGCLeaveGuild.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCLeaveGuild>): CMsgClientToGCLeaveGuild {
    const message = createBaseCMsgClientToGCLeaveGuild();
    message.guildId = object.guildId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCLeaveGuildResponse {
    return { result: isSet(object.result) ? cMsgClientToGCLeaveGuildResponse_EResponseFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgClientToGCLeaveGuildResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = cMsgClientToGCLeaveGuildResponse_EResponseToJSON(message.result));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCLeaveGuildResponse>): CMsgClientToGCLeaveGuildResponse {
    return CMsgClientToGCLeaveGuildResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCLeaveGuildResponse>): CMsgClientToGCLeaveGuildResponse {
    const message = createBaseCMsgClientToGCLeaveGuildResponse();
    message.result = object.result ?? 0;
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

  fromJSON(object: any): CMsgClientToGCKickGuildMember {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      targetAccountId: isSet(object.targetAccountId) ? Number(object.targetAccountId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCKickGuildMember): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.targetAccountId !== undefined && (obj.targetAccountId = Math.round(message.targetAccountId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCKickGuildMember>): CMsgClientToGCKickGuildMember {
    return CMsgClientToGCKickGuildMember.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCKickGuildMember>): CMsgClientToGCKickGuildMember {
    const message = createBaseCMsgClientToGCKickGuildMember();
    message.guildId = object.guildId ?? 0;
    message.targetAccountId = object.targetAccountId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCKickGuildMemberResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCKickGuildMemberResponse_EResponseFromJSON(object.result) : 0,
    };
  },

  toJSON(message: CMsgClientToGCKickGuildMemberResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCKickGuildMemberResponse_EResponseToJSON(message.result));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCKickGuildMemberResponse>): CMsgClientToGCKickGuildMemberResponse {
    return CMsgClientToGCKickGuildMemberResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCKickGuildMemberResponse>): CMsgClientToGCKickGuildMemberResponse {
    const message = createBaseCMsgClientToGCKickGuildMemberResponse();
    message.result = object.result ?? 0;
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

  fromJSON(object: any): CMsgClientToGCSetGuildMemberRole {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      targetAccountId: isSet(object.targetAccountId) ? Number(object.targetAccountId) : 0,
      targetRoleId: isSet(object.targetRoleId) ? Number(object.targetRoleId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCSetGuildMemberRole): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.targetAccountId !== undefined && (obj.targetAccountId = Math.round(message.targetAccountId));
    message.targetRoleId !== undefined && (obj.targetRoleId = Math.round(message.targetRoleId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCSetGuildMemberRole>): CMsgClientToGCSetGuildMemberRole {
    return CMsgClientToGCSetGuildMemberRole.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCSetGuildMemberRole>): CMsgClientToGCSetGuildMemberRole {
    const message = createBaseCMsgClientToGCSetGuildMemberRole();
    message.guildId = object.guildId ?? 0;
    message.targetAccountId = object.targetAccountId ?? 0;
    message.targetRoleId = object.targetRoleId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCSetGuildMemberRoleResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCSetGuildMemberRoleResponse_EResponseFromJSON(object.result) : 0,
    };
  },

  toJSON(message: CMsgClientToGCSetGuildMemberRoleResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCSetGuildMemberRoleResponse_EResponseToJSON(message.result));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCSetGuildMemberRoleResponse>): CMsgClientToGCSetGuildMemberRoleResponse {
    return CMsgClientToGCSetGuildMemberRoleResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCSetGuildMemberRoleResponse>): CMsgClientToGCSetGuildMemberRoleResponse {
    const message = createBaseCMsgClientToGCSetGuildMemberRoleResponse();
    message.result = object.result ?? 0;
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

  fromJSON(object: any): CMsgClientToGCInviteToGuild {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      targetAccountId: isSet(object.targetAccountId) ? Number(object.targetAccountId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCInviteToGuild): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.targetAccountId !== undefined && (obj.targetAccountId = Math.round(message.targetAccountId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCInviteToGuild>): CMsgClientToGCInviteToGuild {
    return CMsgClientToGCInviteToGuild.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCInviteToGuild>): CMsgClientToGCInviteToGuild {
    const message = createBaseCMsgClientToGCInviteToGuild();
    message.guildId = object.guildId ?? 0;
    message.targetAccountId = object.targetAccountId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCInviteToGuildResponse {
    return { result: isSet(object.result) ? cMsgClientToGCInviteToGuildResponse_EResponseFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgClientToGCInviteToGuildResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = cMsgClientToGCInviteToGuildResponse_EResponseToJSON(message.result));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCInviteToGuildResponse>): CMsgClientToGCInviteToGuildResponse {
    return CMsgClientToGCInviteToGuildResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCInviteToGuildResponse>): CMsgClientToGCInviteToGuildResponse {
    const message = createBaseCMsgClientToGCInviteToGuildResponse();
    message.result = object.result ?? 0;
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

  fromJSON(object: any): CMsgClientToGCDeclineInviteToGuild {
    return { guildId: isSet(object.guildId) ? Number(object.guildId) : 0 };
  },

  toJSON(message: CMsgClientToGCDeclineInviteToGuild): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCDeclineInviteToGuild>): CMsgClientToGCDeclineInviteToGuild {
    return CMsgClientToGCDeclineInviteToGuild.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCDeclineInviteToGuild>): CMsgClientToGCDeclineInviteToGuild {
    const message = createBaseCMsgClientToGCDeclineInviteToGuild();
    message.guildId = object.guildId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCDeclineInviteToGuildResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCDeclineInviteToGuildResponse_EResponseFromJSON(object.result) : 0,
    };
  },

  toJSON(message: CMsgClientToGCDeclineInviteToGuildResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCDeclineInviteToGuildResponse_EResponseToJSON(message.result));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCDeclineInviteToGuildResponse>): CMsgClientToGCDeclineInviteToGuildResponse {
    return CMsgClientToGCDeclineInviteToGuildResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCDeclineInviteToGuildResponse>,
  ): CMsgClientToGCDeclineInviteToGuildResponse {
    const message = createBaseCMsgClientToGCDeclineInviteToGuildResponse();
    message.result = object.result ?? 0;
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

  fromJSON(object: any): CMsgClientToGCAcceptInviteToGuild {
    return { guildId: isSet(object.guildId) ? Number(object.guildId) : 0 };
  },

  toJSON(message: CMsgClientToGCAcceptInviteToGuild): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCAcceptInviteToGuild>): CMsgClientToGCAcceptInviteToGuild {
    return CMsgClientToGCAcceptInviteToGuild.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCAcceptInviteToGuild>): CMsgClientToGCAcceptInviteToGuild {
    const message = createBaseCMsgClientToGCAcceptInviteToGuild();
    message.guildId = object.guildId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCAcceptInviteToGuildResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCAcceptInviteToGuildResponse_EResponseFromJSON(object.result) : 0,
    };
  },

  toJSON(message: CMsgClientToGCAcceptInviteToGuildResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCAcceptInviteToGuildResponse_EResponseToJSON(message.result));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCAcceptInviteToGuildResponse>): CMsgClientToGCAcceptInviteToGuildResponse {
    return CMsgClientToGCAcceptInviteToGuildResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCAcceptInviteToGuildResponse>,
  ): CMsgClientToGCAcceptInviteToGuildResponse {
    const message = createBaseCMsgClientToGCAcceptInviteToGuildResponse();
    message.result = object.result ?? 0;
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

  fromJSON(object: any): CMsgClientToGCCancelInviteToGuild {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      targetAccountId: isSet(object.targetAccountId) ? Number(object.targetAccountId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCCancelInviteToGuild): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.targetAccountId !== undefined && (obj.targetAccountId = Math.round(message.targetAccountId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCancelInviteToGuild>): CMsgClientToGCCancelInviteToGuild {
    return CMsgClientToGCCancelInviteToGuild.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCCancelInviteToGuild>): CMsgClientToGCCancelInviteToGuild {
    const message = createBaseCMsgClientToGCCancelInviteToGuild();
    message.guildId = object.guildId ?? 0;
    message.targetAccountId = object.targetAccountId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCCancelInviteToGuildResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCCancelInviteToGuildResponse_EResponseFromJSON(object.result) : 0,
    };
  },

  toJSON(message: CMsgClientToGCCancelInviteToGuildResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCCancelInviteToGuildResponse_EResponseToJSON(message.result));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCCancelInviteToGuildResponse>): CMsgClientToGCCancelInviteToGuildResponse {
    return CMsgClientToGCCancelInviteToGuildResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCCancelInviteToGuildResponse>,
  ): CMsgClientToGCCancelInviteToGuildResponse {
    const message = createBaseCMsgClientToGCCancelInviteToGuildResponse();
    message.result = object.result ?? 0;
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

  fromJSON(object: any): CMsgClientToGCAddGuildRole {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      roleName: isSet(object.roleName) ? String(object.roleName) : "",
      roleFlags: isSet(object.roleFlags) ? Number(object.roleFlags) : 0,
    };
  },

  toJSON(message: CMsgClientToGCAddGuildRole): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.roleName !== undefined && (obj.roleName = message.roleName);
    message.roleFlags !== undefined && (obj.roleFlags = Math.round(message.roleFlags));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCAddGuildRole>): CMsgClientToGCAddGuildRole {
    return CMsgClientToGCAddGuildRole.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCAddGuildRole>): CMsgClientToGCAddGuildRole {
    const message = createBaseCMsgClientToGCAddGuildRole();
    message.guildId = object.guildId ?? 0;
    message.roleName = object.roleName ?? "";
    message.roleFlags = object.roleFlags ?? 0;
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

  fromJSON(object: any): CMsgClientToGCAddGuildRoleResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCAddGuildRoleResponse_EResponseFromJSON(object.result) : 0,
      roleId: isSet(object.roleId) ? Number(object.roleId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCAddGuildRoleResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = cMsgClientToGCAddGuildRoleResponse_EResponseToJSON(message.result));
    message.roleId !== undefined && (obj.roleId = Math.round(message.roleId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCAddGuildRoleResponse>): CMsgClientToGCAddGuildRoleResponse {
    return CMsgClientToGCAddGuildRoleResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCAddGuildRoleResponse>): CMsgClientToGCAddGuildRoleResponse {
    const message = createBaseCMsgClientToGCAddGuildRoleResponse();
    message.result = object.result ?? 0;
    message.roleId = object.roleId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCModifyGuildRole {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      roleId: isSet(object.roleId) ? Number(object.roleId) : 0,
      roleName: isSet(object.roleName) ? String(object.roleName) : "",
      roleFlags: isSet(object.roleFlags) ? Number(object.roleFlags) : 0,
    };
  },

  toJSON(message: CMsgClientToGCModifyGuildRole): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.roleId !== undefined && (obj.roleId = Math.round(message.roleId));
    message.roleName !== undefined && (obj.roleName = message.roleName);
    message.roleFlags !== undefined && (obj.roleFlags = Math.round(message.roleFlags));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCModifyGuildRole>): CMsgClientToGCModifyGuildRole {
    return CMsgClientToGCModifyGuildRole.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCModifyGuildRole>): CMsgClientToGCModifyGuildRole {
    const message = createBaseCMsgClientToGCModifyGuildRole();
    message.guildId = object.guildId ?? 0;
    message.roleId = object.roleId ?? 0;
    message.roleName = object.roleName ?? "";
    message.roleFlags = object.roleFlags ?? 0;
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

  fromJSON(object: any): CMsgClientToGCModifyGuildRoleResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCModifyGuildRoleResponse_EResponseFromJSON(object.result) : 0,
    };
  },

  toJSON(message: CMsgClientToGCModifyGuildRoleResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCModifyGuildRoleResponse_EResponseToJSON(message.result));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCModifyGuildRoleResponse>): CMsgClientToGCModifyGuildRoleResponse {
    return CMsgClientToGCModifyGuildRoleResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCModifyGuildRoleResponse>): CMsgClientToGCModifyGuildRoleResponse {
    const message = createBaseCMsgClientToGCModifyGuildRoleResponse();
    message.result = object.result ?? 0;
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

  fromJSON(object: any): CMsgClientToGCRemoveGuildRole {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      roleId: isSet(object.roleId) ? Number(object.roleId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCRemoveGuildRole): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.roleId !== undefined && (obj.roleId = Math.round(message.roleId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCRemoveGuildRole>): CMsgClientToGCRemoveGuildRole {
    return CMsgClientToGCRemoveGuildRole.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCRemoveGuildRole>): CMsgClientToGCRemoveGuildRole {
    const message = createBaseCMsgClientToGCRemoveGuildRole();
    message.guildId = object.guildId ?? 0;
    message.roleId = object.roleId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCRemoveGuildRoleResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCRemoveGuildRoleResponse_EResponseFromJSON(object.result) : 0,
    };
  },

  toJSON(message: CMsgClientToGCRemoveGuildRoleResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCRemoveGuildRoleResponse_EResponseToJSON(message.result));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCRemoveGuildRoleResponse>): CMsgClientToGCRemoveGuildRoleResponse {
    return CMsgClientToGCRemoveGuildRoleResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCRemoveGuildRoleResponse>): CMsgClientToGCRemoveGuildRoleResponse {
    const message = createBaseCMsgClientToGCRemoveGuildRoleResponse();
    message.result = object.result ?? 0;
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

  fromJSON(object: any): CMsgClientToGCSetGuildRoleOrder {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      requestedRoleIds: Array.isArray(object?.requestedRoleIds)
        ? object.requestedRoleIds.map((e: any) => Number(e))
        : [],
      previousRoleIds: Array.isArray(object?.previousRoleIds) ? object.previousRoleIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgClientToGCSetGuildRoleOrder): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    if (message.requestedRoleIds) {
      obj.requestedRoleIds = message.requestedRoleIds.map((e) => Math.round(e));
    } else {
      obj.requestedRoleIds = [];
    }
    if (message.previousRoleIds) {
      obj.previousRoleIds = message.previousRoleIds.map((e) => Math.round(e));
    } else {
      obj.previousRoleIds = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCSetGuildRoleOrder>): CMsgClientToGCSetGuildRoleOrder {
    return CMsgClientToGCSetGuildRoleOrder.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCSetGuildRoleOrder>): CMsgClientToGCSetGuildRoleOrder {
    const message = createBaseCMsgClientToGCSetGuildRoleOrder();
    message.guildId = object.guildId ?? 0;
    message.requestedRoleIds = object.requestedRoleIds?.map((e) => e) || [];
    message.previousRoleIds = object.previousRoleIds?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgClientToGCSetGuildRoleOrderResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCSetGuildRoleOrderResponse_EResponseFromJSON(object.result) : 0,
      confirmedRoleIds: Array.isArray(object?.confirmedRoleIds)
        ? object.confirmedRoleIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CMsgClientToGCSetGuildRoleOrderResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCSetGuildRoleOrderResponse_EResponseToJSON(message.result));
    if (message.confirmedRoleIds) {
      obj.confirmedRoleIds = message.confirmedRoleIds.map((e) => Math.round(e));
    } else {
      obj.confirmedRoleIds = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCSetGuildRoleOrderResponse>): CMsgClientToGCSetGuildRoleOrderResponse {
    return CMsgClientToGCSetGuildRoleOrderResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCSetGuildRoleOrderResponse>): CMsgClientToGCSetGuildRoleOrderResponse {
    const message = createBaseCMsgClientToGCSetGuildRoleOrderResponse();
    message.result = object.result ?? 0;
    message.confirmedRoleIds = object.confirmedRoleIds?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgClientToGCGuildFeedRequest {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      lastSeenId: isSet(object.lastSeenId) ? String(object.lastSeenId) : "0",
    };
  },

  toJSON(message: CMsgClientToGCGuildFeedRequest): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.lastSeenId !== undefined && (obj.lastSeenId = message.lastSeenId);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCGuildFeedRequest>): CMsgClientToGCGuildFeedRequest {
    return CMsgClientToGCGuildFeedRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCGuildFeedRequest>): CMsgClientToGCGuildFeedRequest {
    const message = createBaseCMsgClientToGCGuildFeedRequest();
    message.guildId = object.guildId ?? 0;
    message.lastSeenId = object.lastSeenId ?? "0";
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

  fromJSON(object: any): CMsgClientToGCRequestGuildFeedResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCRequestGuildFeedResponse_EResponseFromJSON(object.result) : 0,
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      feedEvents: Array.isArray(object?.feedEvents)
        ? object.feedEvents.map((e: any) => CMsgGuildFeedEvent.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientToGCRequestGuildFeedResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCRequestGuildFeedResponse_EResponseToJSON(message.result));
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    if (message.feedEvents) {
      obj.feedEvents = message.feedEvents.map((e) => e ? CMsgGuildFeedEvent.toJSON(e) : undefined);
    } else {
      obj.feedEvents = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCRequestGuildFeedResponse>): CMsgClientToGCRequestGuildFeedResponse {
    return CMsgClientToGCRequestGuildFeedResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCRequestGuildFeedResponse>): CMsgClientToGCRequestGuildFeedResponse {
    const message = createBaseCMsgClientToGCRequestGuildFeedResponse();
    message.result = object.result ?? 0;
    message.guildId = object.guildId ?? 0;
    message.feedEvents = object.feedEvents?.map((e) => CMsgGuildFeedEvent.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgGCToClientGuildFeedUpdated {
    return { guildId: isSet(object.guildId) ? Number(object.guildId) : 0 };
  },

  toJSON(message: CMsgGCToClientGuildFeedUpdated): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToClientGuildFeedUpdated>): CMsgGCToClientGuildFeedUpdated {
    return CMsgGCToClientGuildFeedUpdated.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToClientGuildFeedUpdated>): CMsgGCToClientGuildFeedUpdated {
    const message = createBaseCMsgGCToClientGuildFeedUpdated();
    message.guildId = object.guildId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCAddPlayerToGuildChat {
    return { guildId: isSet(object.guildId) ? Number(object.guildId) : 0 };
  },

  toJSON(message: CMsgClientToGCAddPlayerToGuildChat): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCAddPlayerToGuildChat>): CMsgClientToGCAddPlayerToGuildChat {
    return CMsgClientToGCAddPlayerToGuildChat.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCAddPlayerToGuildChat>): CMsgClientToGCAddPlayerToGuildChat {
    const message = createBaseCMsgClientToGCAddPlayerToGuildChat();
    message.guildId = object.guildId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCAddPlayerToGuildChatResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCAddPlayerToGuildChatResponse_EResponseFromJSON(object.result) : 0,
    };
  },

  toJSON(message: CMsgClientToGCAddPlayerToGuildChatResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCAddPlayerToGuildChatResponse_EResponseToJSON(message.result));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCAddPlayerToGuildChatResponse>): CMsgClientToGCAddPlayerToGuildChatResponse {
    return CMsgClientToGCAddPlayerToGuildChatResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCAddPlayerToGuildChatResponse>,
  ): CMsgClientToGCAddPlayerToGuildChatResponse {
    const message = createBaseCMsgClientToGCAddPlayerToGuildChatResponse();
    message.result = object.result ?? 0;
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

  fromJSON(object: any): CMsgFindGuildByTagResponse {
    return {
      result: isSet(object.result) ? cMsgFindGuildByTagResponse_EResponseFromJSON(object.result) : 0,
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      guildSummary: isSet(object.guildSummary) ? CMsgGuildSummary.fromJSON(object.guildSummary) : undefined,
    };
  },

  toJSON(message: CMsgFindGuildByTagResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = cMsgFindGuildByTagResponse_EResponseToJSON(message.result));
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.guildSummary !== undefined &&
      (obj.guildSummary = message.guildSummary ? CMsgGuildSummary.toJSON(message.guildSummary) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgFindGuildByTagResponse>): CMsgFindGuildByTagResponse {
    return CMsgFindGuildByTagResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgFindGuildByTagResponse>): CMsgFindGuildByTagResponse {
    const message = createBaseCMsgFindGuildByTagResponse();
    message.result = object.result ?? 0;
    message.guildId = object.guildId ?? 0;
    message.guildSummary = (object.guildSummary !== undefined && object.guildSummary !== null)
      ? CMsgGuildSummary.fromPartial(object.guildSummary)
      : undefined;
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

  fromJSON(object: any): CMsgSearchForOpenGuildsResponse {
    return {
      result: isSet(object.result) ? cMsgSearchForOpenGuildsResponse_EResponseFromJSON(object.result) : 0,
      searchResults: Array.isArray(object?.searchResults)
        ? object.searchResults.map((e: any) => CMsgSearchForOpenGuildsResponse_SearchResult.fromJSON(e))
        : [],
      useWhitelist: isSet(object.useWhitelist) ? Boolean(object.useWhitelist) : false,
    };
  },

  toJSON(message: CMsgSearchForOpenGuildsResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = cMsgSearchForOpenGuildsResponse_EResponseToJSON(message.result));
    if (message.searchResults) {
      obj.searchResults = message.searchResults.map((e) =>
        e ? CMsgSearchForOpenGuildsResponse_SearchResult.toJSON(e) : undefined
      );
    } else {
      obj.searchResults = [];
    }
    message.useWhitelist !== undefined && (obj.useWhitelist = message.useWhitelist);
    return obj;
  },

  create(base?: DeepPartial<CMsgSearchForOpenGuildsResponse>): CMsgSearchForOpenGuildsResponse {
    return CMsgSearchForOpenGuildsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSearchForOpenGuildsResponse>): CMsgSearchForOpenGuildsResponse {
    const message = createBaseCMsgSearchForOpenGuildsResponse();
    message.result = object.result ?? 0;
    message.searchResults =
      object.searchResults?.map((e) => CMsgSearchForOpenGuildsResponse_SearchResult.fromPartial(e)) || [];
    message.useWhitelist = object.useWhitelist ?? false;
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

  fromJSON(object: any): CMsgSearchForOpenGuildsResponse_SearchResult {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      guildSummary: isSet(object.guildSummary) ? CMsgGuildSummary.fromJSON(object.guildSummary) : undefined,
    };
  },

  toJSON(message: CMsgSearchForOpenGuildsResponse_SearchResult): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.guildSummary !== undefined &&
      (obj.guildSummary = message.guildSummary ? CMsgGuildSummary.toJSON(message.guildSummary) : undefined);
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSearchForOpenGuildsResponse_SearchResult>,
  ): CMsgSearchForOpenGuildsResponse_SearchResult {
    return CMsgSearchForOpenGuildsResponse_SearchResult.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSearchForOpenGuildsResponse_SearchResult>,
  ): CMsgSearchForOpenGuildsResponse_SearchResult {
    const message = createBaseCMsgSearchForOpenGuildsResponse_SearchResult();
    message.guildId = object.guildId ?? 0;
    message.guildSummary = (object.guildSummary !== undefined && object.guildSummary !== null)
      ? CMsgGuildSummary.fromPartial(object.guildSummary)
      : undefined;
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

  fromJSON(object: any): CMsgClientToGCReportGuildContent {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      guildContentFlags: isSet(object.guildContentFlags) ? Number(object.guildContentFlags) : 0,
    };
  },

  toJSON(message: CMsgClientToGCReportGuildContent): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.guildContentFlags !== undefined && (obj.guildContentFlags = Math.round(message.guildContentFlags));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCReportGuildContent>): CMsgClientToGCReportGuildContent {
    return CMsgClientToGCReportGuildContent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCReportGuildContent>): CMsgClientToGCReportGuildContent {
    const message = createBaseCMsgClientToGCReportGuildContent();
    message.guildId = object.guildId ?? 0;
    message.guildContentFlags = object.guildContentFlags ?? 0;
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

  fromJSON(object: any): CMsgClientToGCReportGuildContentResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCReportGuildContentResponse_EResponseFromJSON(object.result) : 0,
    };
  },

  toJSON(message: CMsgClientToGCReportGuildContentResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCReportGuildContentResponse_EResponseToJSON(message.result));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCReportGuildContentResponse>): CMsgClientToGCReportGuildContentResponse {
    return CMsgClientToGCReportGuildContentResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCReportGuildContentResponse>): CMsgClientToGCReportGuildContentResponse {
    const message = createBaseCMsgClientToGCReportGuildContentResponse();
    message.result = object.result ?? 0;
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

  fromJSON(object: any): CMsgClientToGCRequestAccountGuildPersonaInfo {
    return { accountId: isSet(object.accountId) ? Number(object.accountId) : 0 };
  },

  toJSON(message: CMsgClientToGCRequestAccountGuildPersonaInfo): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCRequestAccountGuildPersonaInfo>,
  ): CMsgClientToGCRequestAccountGuildPersonaInfo {
    return CMsgClientToGCRequestAccountGuildPersonaInfo.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCRequestAccountGuildPersonaInfo>,
  ): CMsgClientToGCRequestAccountGuildPersonaInfo {
    const message = createBaseCMsgClientToGCRequestAccountGuildPersonaInfo();
    message.accountId = object.accountId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCRequestAccountGuildPersonaInfoResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponseFromJSON(object.result)
        : 0,
      personaInfo: isSet(object.personaInfo) ? CMsgAccountGuildsPersonaInfo.fromJSON(object.personaInfo) : undefined,
    };
  },

  toJSON(message: CMsgClientToGCRequestAccountGuildPersonaInfoResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponseToJSON(message.result));
    message.personaInfo !== undefined &&
      (obj.personaInfo = message.personaInfo ? CMsgAccountGuildsPersonaInfo.toJSON(message.personaInfo) : undefined);
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCRequestAccountGuildPersonaInfoResponse>,
  ): CMsgClientToGCRequestAccountGuildPersonaInfoResponse {
    return CMsgClientToGCRequestAccountGuildPersonaInfoResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCRequestAccountGuildPersonaInfoResponse>,
  ): CMsgClientToGCRequestAccountGuildPersonaInfoResponse {
    const message = createBaseCMsgClientToGCRequestAccountGuildPersonaInfoResponse();
    message.result = object.result ?? 0;
    message.personaInfo = (object.personaInfo !== undefined && object.personaInfo !== null)
      ? CMsgAccountGuildsPersonaInfo.fromPartial(object.personaInfo)
      : undefined;
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

  fromJSON(object: any): CMsgClientToGCRequestAccountGuildPersonaInfoBatch {
    return { accountIds: Array.isArray(object?.accountIds) ? object.accountIds.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CMsgClientToGCRequestAccountGuildPersonaInfoBatch): unknown {
    const obj: any = {};
    if (message.accountIds) {
      obj.accountIds = message.accountIds.map((e) => Math.round(e));
    } else {
      obj.accountIds = [];
    }
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCRequestAccountGuildPersonaInfoBatch>,
  ): CMsgClientToGCRequestAccountGuildPersonaInfoBatch {
    return CMsgClientToGCRequestAccountGuildPersonaInfoBatch.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCRequestAccountGuildPersonaInfoBatch>,
  ): CMsgClientToGCRequestAccountGuildPersonaInfoBatch {
    const message = createBaseCMsgClientToGCRequestAccountGuildPersonaInfoBatch();
    message.accountIds = object.accountIds?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponseFromJSON(object.result)
        : 0,
      personaInfos: Array.isArray(object?.personaInfos)
        ? object.personaInfos.map((e: any) => CMsgAccountGuildsPersonaInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponseToJSON(message.result));
    if (message.personaInfos) {
      obj.personaInfos = message.personaInfos.map((e) => e ? CMsgAccountGuildsPersonaInfo.toJSON(e) : undefined);
    } else {
      obj.personaInfos = [];
    }
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse>,
  ): CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse {
    return CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse>,
  ): CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse {
    const message = createBaseCMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse();
    message.result = object.result ?? 0;
    message.personaInfos = object.personaInfos?.map((e) => CMsgAccountGuildsPersonaInfo.fromPartial(e)) || [];
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
