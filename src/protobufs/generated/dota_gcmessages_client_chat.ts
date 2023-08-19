/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  DOTAChatChannelTypeT,
  dOTAChatChannelTypeTFromJSON,
  dOTAChatChannelTypeTToJSON,
  EChatSpecialPrivileges,
  eChatSpecialPrivilegesFromJSON,
  eChatSpecialPrivilegesToJSON,
} from "./dota_shared_enums";

export interface CMsgClientToGCPrivateChatInvite {
  privateChatChannelName: string;
  invitedAccountId: number;
}

export interface CMsgClientToGCPrivateChatKick {
  privateChatChannelName: string;
  kickAccountId: number;
}

export interface CMsgClientToGCPrivateChatPromote {
  privateChatChannelName: string;
  promoteAccountId: number;
}

export interface CMsgClientToGCPrivateChatDemote {
  privateChatChannelName: string;
  demoteAccountId: number;
}

export interface CMsgGCToClientPrivateChatResponse {
  privateChatChannelName: string;
  result: CMsgGCToClientPrivateChatResponse_Result;
  username: string;
}

export enum CMsgGCToClientPrivateChatResponse_Result {
  SUCCESS = 0,
  FAILURE_CREATION_LOCK = 1,
  FAILURE_SQL_TRANSACTION = 2,
  FAILURE_SDO_LOAD = 3,
  FAILURE_NO_PERMISSION = 4,
  FAILURE_ALREADY_MEMBER = 5,
  FAILURE_NOT_A_MEMBER = 7,
  FAILURE_NO_REMAINING_ADMINS = 8,
  FAILURE_NO_ROOM = 9,
  FAILURE_CREATION_RATE_LIMITED = 10,
  FAILURE_UNKNOWN_CHANNEL_NAME = 11,
  FAILURE_UNKNOWN_USER = 12,
  FAILURE_UNKNOWN_ERROR = 13,
  FAILURE_CANNOT_KICK_ADMIN = 14,
  FAILURE_ALREADY_ADMIN = 15,
}

export function cMsgGCToClientPrivateChatResponse_ResultFromJSON(
  object: any,
): CMsgGCToClientPrivateChatResponse_Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return CMsgGCToClientPrivateChatResponse_Result.SUCCESS;
    case 1:
    case "FAILURE_CREATION_LOCK":
      return CMsgGCToClientPrivateChatResponse_Result.FAILURE_CREATION_LOCK;
    case 2:
    case "FAILURE_SQL_TRANSACTION":
      return CMsgGCToClientPrivateChatResponse_Result.FAILURE_SQL_TRANSACTION;
    case 3:
    case "FAILURE_SDO_LOAD":
      return CMsgGCToClientPrivateChatResponse_Result.FAILURE_SDO_LOAD;
    case 4:
    case "FAILURE_NO_PERMISSION":
      return CMsgGCToClientPrivateChatResponse_Result.FAILURE_NO_PERMISSION;
    case 5:
    case "FAILURE_ALREADY_MEMBER":
      return CMsgGCToClientPrivateChatResponse_Result.FAILURE_ALREADY_MEMBER;
    case 7:
    case "FAILURE_NOT_A_MEMBER":
      return CMsgGCToClientPrivateChatResponse_Result.FAILURE_NOT_A_MEMBER;
    case 8:
    case "FAILURE_NO_REMAINING_ADMINS":
      return CMsgGCToClientPrivateChatResponse_Result.FAILURE_NO_REMAINING_ADMINS;
    case 9:
    case "FAILURE_NO_ROOM":
      return CMsgGCToClientPrivateChatResponse_Result.FAILURE_NO_ROOM;
    case 10:
    case "FAILURE_CREATION_RATE_LIMITED":
      return CMsgGCToClientPrivateChatResponse_Result.FAILURE_CREATION_RATE_LIMITED;
    case 11:
    case "FAILURE_UNKNOWN_CHANNEL_NAME":
      return CMsgGCToClientPrivateChatResponse_Result.FAILURE_UNKNOWN_CHANNEL_NAME;
    case 12:
    case "FAILURE_UNKNOWN_USER":
      return CMsgGCToClientPrivateChatResponse_Result.FAILURE_UNKNOWN_USER;
    case 13:
    case "FAILURE_UNKNOWN_ERROR":
      return CMsgGCToClientPrivateChatResponse_Result.FAILURE_UNKNOWN_ERROR;
    case 14:
    case "FAILURE_CANNOT_KICK_ADMIN":
      return CMsgGCToClientPrivateChatResponse_Result.FAILURE_CANNOT_KICK_ADMIN;
    case 15:
    case "FAILURE_ALREADY_ADMIN":
      return CMsgGCToClientPrivateChatResponse_Result.FAILURE_ALREADY_ADMIN;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGCToClientPrivateChatResponse_Result",
      );
  }
}

export function cMsgGCToClientPrivateChatResponse_ResultToJSON(
  object: CMsgGCToClientPrivateChatResponse_Result,
): string {
  switch (object) {
    case CMsgGCToClientPrivateChatResponse_Result.SUCCESS:
      return "SUCCESS";
    case CMsgGCToClientPrivateChatResponse_Result.FAILURE_CREATION_LOCK:
      return "FAILURE_CREATION_LOCK";
    case CMsgGCToClientPrivateChatResponse_Result.FAILURE_SQL_TRANSACTION:
      return "FAILURE_SQL_TRANSACTION";
    case CMsgGCToClientPrivateChatResponse_Result.FAILURE_SDO_LOAD:
      return "FAILURE_SDO_LOAD";
    case CMsgGCToClientPrivateChatResponse_Result.FAILURE_NO_PERMISSION:
      return "FAILURE_NO_PERMISSION";
    case CMsgGCToClientPrivateChatResponse_Result.FAILURE_ALREADY_MEMBER:
      return "FAILURE_ALREADY_MEMBER";
    case CMsgGCToClientPrivateChatResponse_Result.FAILURE_NOT_A_MEMBER:
      return "FAILURE_NOT_A_MEMBER";
    case CMsgGCToClientPrivateChatResponse_Result.FAILURE_NO_REMAINING_ADMINS:
      return "FAILURE_NO_REMAINING_ADMINS";
    case CMsgGCToClientPrivateChatResponse_Result.FAILURE_NO_ROOM:
      return "FAILURE_NO_ROOM";
    case CMsgGCToClientPrivateChatResponse_Result.FAILURE_CREATION_RATE_LIMITED:
      return "FAILURE_CREATION_RATE_LIMITED";
    case CMsgGCToClientPrivateChatResponse_Result.FAILURE_UNKNOWN_CHANNEL_NAME:
      return "FAILURE_UNKNOWN_CHANNEL_NAME";
    case CMsgGCToClientPrivateChatResponse_Result.FAILURE_UNKNOWN_USER:
      return "FAILURE_UNKNOWN_USER";
    case CMsgGCToClientPrivateChatResponse_Result.FAILURE_UNKNOWN_ERROR:
      return "FAILURE_UNKNOWN_ERROR";
    case CMsgGCToClientPrivateChatResponse_Result.FAILURE_CANNOT_KICK_ADMIN:
      return "FAILURE_CANNOT_KICK_ADMIN";
    case CMsgGCToClientPrivateChatResponse_Result.FAILURE_ALREADY_ADMIN:
      return "FAILURE_ALREADY_ADMIN";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGCToClientPrivateChatResponse_Result",
      );
  }
}

export interface CMsgDOTAJoinChatChannel {
  channelName: string;
  channelType: DOTAChatChannelTypeT;
  silentRejection: boolean;
}

export interface CMsgDOTALeaveChatChannel {
  channelId: string;
}

export interface CMsgGCChatReportPublicSpam {
  channelId: string;
  channelUserId: number;
}

export interface CMsgDOTAChatModeratorBan {
  channelId: string;
  accountId: number;
  duration: number;
}

export interface CMsgDOTAChatMessage {
  accountId: number;
  channelId: string;
  personaName: string;
  text: string;
  timestamp: number;
  suggestInviteAccountId: number;
  suggestInviteName: string;
  fantasyDraftOwnerAccountId: number;
  fantasyDraftPlayerAccountId: number;
  eventId: number;
  suggestInviteToLobby: boolean;
  eventPoints: number;
  coinFlip: boolean;
  playerId: number;
  shareProfileAccountId: number;
  channelUserId: number;
  diceRoll: CMsgDOTAChatMessage_DiceRoll | undefined;
  sharePartyId: string;
  shareLobbyId: string;
  shareLobbyCustomGameId: string;
  shareLobbyPasskey: string;
  privateChatChannelId: number;
  status: number;
  legacyBattleCupVictory: boolean;
  battleCupStreak: number;
  badgeLevel: number;
  suggestPickHeroId: number;
  suggestPickHeroRole: string;
  suggestBanHeroId: number;
  triviaAnswer: CMsgDOTAChatMessage_TriviaAnswered | undefined;
  requestedAbilityId: number;
  chatFlags: number;
  startedFindingMatch: boolean;
  ctrlIsDown: boolean;
  favoriteTeamId: number;
  favoriteTeamQuality: number;
  suggestPlayerDraftPick: number;
  playerDraftPick: CMsgDOTAChatMessage_PlayerDraftPick | undefined;
}

export interface CMsgDOTAChatMessage_DiceRoll {
  rollMin: number;
  rollMax: number;
  result: number;
}

export interface CMsgDOTAChatMessage_TriviaAnswered {
  questionId: number;
  answerIndex: number;
  partyQuestionsCorrect: number;
  partyQuestionsViewed: number;
  partyTriviaPoints: number;
}

export interface CMsgDOTAChatMessage_PlayerDraftPick {
  playerId: number;
  team: number;
}

export interface CMsgDOTAChatMember {
  steamId: string;
  personaName: string;
  channelUserId: number;
  status: number;
}

export interface CMsgDOTAJoinChatChannelResponse {
  response: number;
  channelName: string;
  channelId: string;
  maxMembers: number;
  members: CMsgDOTAChatMember[];
  channelType: DOTAChatChannelTypeT;
  result: CMsgDOTAJoinChatChannelResponse_Result;
  gcInitiatedJoin: boolean;
  channelUserId: number;
  welcomeMessage: string;
  specialPrivileges: EChatSpecialPrivileges;
}

export enum CMsgDOTAJoinChatChannelResponse_Result {
  JOIN_SUCCESS = 0,
  INVALID_CHANNEL_TYPE = 1,
  ACCOUNT_NOT_FOUND = 2,
  ACH_FAILED = 3,
  USER_IN_TOO_MANY_CHANNELS = 4,
  RATE_LIMIT_EXCEEDED = 5,
  CHANNEL_FULL = 6,
  CHANNEL_FULL_OVERFLOWED = 7,
  FAILED_TO_ADD_USER = 8,
  CHANNEL_TYPE_DISABLED = 9,
  PRIVATE_CHAT_CREATE_FAILED = 10,
  PRIVATE_CHAT_NO_PERMISSION = 11,
  PRIVATE_CHAT_CREATE_LOCK_FAILED = 12,
  PRIVATE_CHAT_KICKED = 13,
  USER_NOT_ALLOWED = 14,
  ENSURE_SPECIAL_PRIVILEGES_FAILED = 15,
  NEW_PLAYER_USER_NOT_ELIGIBLE = 16,
  SILENT_ERROR = 17,
  NEW_PLAYER_USER_BANNED = 18,
}

export function cMsgDOTAJoinChatChannelResponse_ResultFromJSON(object: any): CMsgDOTAJoinChatChannelResponse_Result {
  switch (object) {
    case 0:
    case "JOIN_SUCCESS":
      return CMsgDOTAJoinChatChannelResponse_Result.JOIN_SUCCESS;
    case 1:
    case "INVALID_CHANNEL_TYPE":
      return CMsgDOTAJoinChatChannelResponse_Result.INVALID_CHANNEL_TYPE;
    case 2:
    case "ACCOUNT_NOT_FOUND":
      return CMsgDOTAJoinChatChannelResponse_Result.ACCOUNT_NOT_FOUND;
    case 3:
    case "ACH_FAILED":
      return CMsgDOTAJoinChatChannelResponse_Result.ACH_FAILED;
    case 4:
    case "USER_IN_TOO_MANY_CHANNELS":
      return CMsgDOTAJoinChatChannelResponse_Result.USER_IN_TOO_MANY_CHANNELS;
    case 5:
    case "RATE_LIMIT_EXCEEDED":
      return CMsgDOTAJoinChatChannelResponse_Result.RATE_LIMIT_EXCEEDED;
    case 6:
    case "CHANNEL_FULL":
      return CMsgDOTAJoinChatChannelResponse_Result.CHANNEL_FULL;
    case 7:
    case "CHANNEL_FULL_OVERFLOWED":
      return CMsgDOTAJoinChatChannelResponse_Result.CHANNEL_FULL_OVERFLOWED;
    case 8:
    case "FAILED_TO_ADD_USER":
      return CMsgDOTAJoinChatChannelResponse_Result.FAILED_TO_ADD_USER;
    case 9:
    case "CHANNEL_TYPE_DISABLED":
      return CMsgDOTAJoinChatChannelResponse_Result.CHANNEL_TYPE_DISABLED;
    case 10:
    case "PRIVATE_CHAT_CREATE_FAILED":
      return CMsgDOTAJoinChatChannelResponse_Result.PRIVATE_CHAT_CREATE_FAILED;
    case 11:
    case "PRIVATE_CHAT_NO_PERMISSION":
      return CMsgDOTAJoinChatChannelResponse_Result.PRIVATE_CHAT_NO_PERMISSION;
    case 12:
    case "PRIVATE_CHAT_CREATE_LOCK_FAILED":
      return CMsgDOTAJoinChatChannelResponse_Result.PRIVATE_CHAT_CREATE_LOCK_FAILED;
    case 13:
    case "PRIVATE_CHAT_KICKED":
      return CMsgDOTAJoinChatChannelResponse_Result.PRIVATE_CHAT_KICKED;
    case 14:
    case "USER_NOT_ALLOWED":
      return CMsgDOTAJoinChatChannelResponse_Result.USER_NOT_ALLOWED;
    case 15:
    case "ENSURE_SPECIAL_PRIVILEGES_FAILED":
      return CMsgDOTAJoinChatChannelResponse_Result.ENSURE_SPECIAL_PRIVILEGES_FAILED;
    case 16:
    case "NEW_PLAYER_USER_NOT_ELIGIBLE":
      return CMsgDOTAJoinChatChannelResponse_Result.NEW_PLAYER_USER_NOT_ELIGIBLE;
    case 17:
    case "SILENT_ERROR":
      return CMsgDOTAJoinChatChannelResponse_Result.SILENT_ERROR;
    case 18:
    case "NEW_PLAYER_USER_BANNED":
      return CMsgDOTAJoinChatChannelResponse_Result.NEW_PLAYER_USER_BANNED;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTAJoinChatChannelResponse_Result",
      );
  }
}

export function cMsgDOTAJoinChatChannelResponse_ResultToJSON(object: CMsgDOTAJoinChatChannelResponse_Result): string {
  switch (object) {
    case CMsgDOTAJoinChatChannelResponse_Result.JOIN_SUCCESS:
      return "JOIN_SUCCESS";
    case CMsgDOTAJoinChatChannelResponse_Result.INVALID_CHANNEL_TYPE:
      return "INVALID_CHANNEL_TYPE";
    case CMsgDOTAJoinChatChannelResponse_Result.ACCOUNT_NOT_FOUND:
      return "ACCOUNT_NOT_FOUND";
    case CMsgDOTAJoinChatChannelResponse_Result.ACH_FAILED:
      return "ACH_FAILED";
    case CMsgDOTAJoinChatChannelResponse_Result.USER_IN_TOO_MANY_CHANNELS:
      return "USER_IN_TOO_MANY_CHANNELS";
    case CMsgDOTAJoinChatChannelResponse_Result.RATE_LIMIT_EXCEEDED:
      return "RATE_LIMIT_EXCEEDED";
    case CMsgDOTAJoinChatChannelResponse_Result.CHANNEL_FULL:
      return "CHANNEL_FULL";
    case CMsgDOTAJoinChatChannelResponse_Result.CHANNEL_FULL_OVERFLOWED:
      return "CHANNEL_FULL_OVERFLOWED";
    case CMsgDOTAJoinChatChannelResponse_Result.FAILED_TO_ADD_USER:
      return "FAILED_TO_ADD_USER";
    case CMsgDOTAJoinChatChannelResponse_Result.CHANNEL_TYPE_DISABLED:
      return "CHANNEL_TYPE_DISABLED";
    case CMsgDOTAJoinChatChannelResponse_Result.PRIVATE_CHAT_CREATE_FAILED:
      return "PRIVATE_CHAT_CREATE_FAILED";
    case CMsgDOTAJoinChatChannelResponse_Result.PRIVATE_CHAT_NO_PERMISSION:
      return "PRIVATE_CHAT_NO_PERMISSION";
    case CMsgDOTAJoinChatChannelResponse_Result.PRIVATE_CHAT_CREATE_LOCK_FAILED:
      return "PRIVATE_CHAT_CREATE_LOCK_FAILED";
    case CMsgDOTAJoinChatChannelResponse_Result.PRIVATE_CHAT_KICKED:
      return "PRIVATE_CHAT_KICKED";
    case CMsgDOTAJoinChatChannelResponse_Result.USER_NOT_ALLOWED:
      return "USER_NOT_ALLOWED";
    case CMsgDOTAJoinChatChannelResponse_Result.ENSURE_SPECIAL_PRIVILEGES_FAILED:
      return "ENSURE_SPECIAL_PRIVILEGES_FAILED";
    case CMsgDOTAJoinChatChannelResponse_Result.NEW_PLAYER_USER_NOT_ELIGIBLE:
      return "NEW_PLAYER_USER_NOT_ELIGIBLE";
    case CMsgDOTAJoinChatChannelResponse_Result.SILENT_ERROR:
      return "SILENT_ERROR";
    case CMsgDOTAJoinChatChannelResponse_Result.NEW_PLAYER_USER_BANNED:
      return "NEW_PLAYER_USER_BANNED";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTAJoinChatChannelResponse_Result",
      );
  }
}

export interface CMsgDOTAOtherJoinedChatChannel {
  channelId: string;
  personaName: string;
  steamId: string;
  channelUserId: number;
  status: number;
}

export interface CMsgDOTAOtherLeftChatChannel {
  channelId: string;
  steamId: string;
  channelUserId: number;
}

export interface CMsgDOTARequestChatChannelList {
}

export interface CMsgDOTARequestChatChannelListResponse {
  channels: CMsgDOTARequestChatChannelListResponse_ChatChannel[];
}

export interface CMsgDOTARequestChatChannelListResponse_ChatChannel {
  channelName: string;
  numMembers: number;
  channelType: DOTAChatChannelTypeT;
}

export interface CMsgDOTAChatGetUserListResponse {
  channelId: string;
  members: CMsgDOTAChatGetUserListResponse_Member[];
}

export interface CMsgDOTAChatGetUserListResponse_Member {
  steamId: string;
  personaName: string;
  channelUserId: number;
  status: number;
}

export interface CMsgDOTAChatGetMemberCount {
  channelName: string;
  channelType: DOTAChatChannelTypeT;
}

export interface CMsgDOTAChatGetMemberCountResponse {
  channelName: string;
  channelType: DOTAChatChannelTypeT;
  memberCount: number;
}

export interface CMsgDOTAChatRegionsEnabled {
  enableAllRegions: boolean;
  enabledRegions: CMsgDOTAChatRegionsEnabled_Region[];
}

export interface CMsgDOTAChatRegionsEnabled_Region {
  minLatitude: number;
  maxLatitude: number;
  minLongitude: number;
  maxLongitude: number;
}

function createBaseCMsgClientToGCPrivateChatInvite(): CMsgClientToGCPrivateChatInvite {
  return { privateChatChannelName: "", invitedAccountId: 0 };
}

export const CMsgClientToGCPrivateChatInvite = {
  encode(message: CMsgClientToGCPrivateChatInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.privateChatChannelName !== "") {
      writer.uint32(10).string(message.privateChatChannelName);
    }
    if (message.invitedAccountId !== 0) {
      writer.uint32(16).uint32(message.invitedAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCPrivateChatInvite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCPrivateChatInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.privateChatChannelName = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.invitedAccountId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCPrivateChatInvite {
    return {
      privateChatChannelName: isSet(object.privateChatChannelName) ? String(object.privateChatChannelName) : "",
      invitedAccountId: isSet(object.invitedAccountId) ? Number(object.invitedAccountId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCPrivateChatInvite): unknown {
    const obj: any = {};
    message.privateChatChannelName !== undefined && (obj.privateChatChannelName = message.privateChatChannelName);
    message.invitedAccountId !== undefined && (obj.invitedAccountId = Math.round(message.invitedAccountId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCPrivateChatInvite>): CMsgClientToGCPrivateChatInvite {
    return CMsgClientToGCPrivateChatInvite.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCPrivateChatInvite>): CMsgClientToGCPrivateChatInvite {
    const message = createBaseCMsgClientToGCPrivateChatInvite();
    message.privateChatChannelName = object.privateChatChannelName ?? "";
    message.invitedAccountId = object.invitedAccountId ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCPrivateChatKick(): CMsgClientToGCPrivateChatKick {
  return { privateChatChannelName: "", kickAccountId: 0 };
}

export const CMsgClientToGCPrivateChatKick = {
  encode(message: CMsgClientToGCPrivateChatKick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.privateChatChannelName !== "") {
      writer.uint32(10).string(message.privateChatChannelName);
    }
    if (message.kickAccountId !== 0) {
      writer.uint32(16).uint32(message.kickAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCPrivateChatKick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCPrivateChatKick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.privateChatChannelName = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.kickAccountId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCPrivateChatKick {
    return {
      privateChatChannelName: isSet(object.privateChatChannelName) ? String(object.privateChatChannelName) : "",
      kickAccountId: isSet(object.kickAccountId) ? Number(object.kickAccountId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCPrivateChatKick): unknown {
    const obj: any = {};
    message.privateChatChannelName !== undefined && (obj.privateChatChannelName = message.privateChatChannelName);
    message.kickAccountId !== undefined && (obj.kickAccountId = Math.round(message.kickAccountId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCPrivateChatKick>): CMsgClientToGCPrivateChatKick {
    return CMsgClientToGCPrivateChatKick.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCPrivateChatKick>): CMsgClientToGCPrivateChatKick {
    const message = createBaseCMsgClientToGCPrivateChatKick();
    message.privateChatChannelName = object.privateChatChannelName ?? "";
    message.kickAccountId = object.kickAccountId ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCPrivateChatPromote(): CMsgClientToGCPrivateChatPromote {
  return { privateChatChannelName: "", promoteAccountId: 0 };
}

export const CMsgClientToGCPrivateChatPromote = {
  encode(message: CMsgClientToGCPrivateChatPromote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.privateChatChannelName !== "") {
      writer.uint32(10).string(message.privateChatChannelName);
    }
    if (message.promoteAccountId !== 0) {
      writer.uint32(16).uint32(message.promoteAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCPrivateChatPromote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCPrivateChatPromote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.privateChatChannelName = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.promoteAccountId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCPrivateChatPromote {
    return {
      privateChatChannelName: isSet(object.privateChatChannelName) ? String(object.privateChatChannelName) : "",
      promoteAccountId: isSet(object.promoteAccountId) ? Number(object.promoteAccountId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCPrivateChatPromote): unknown {
    const obj: any = {};
    message.privateChatChannelName !== undefined && (obj.privateChatChannelName = message.privateChatChannelName);
    message.promoteAccountId !== undefined && (obj.promoteAccountId = Math.round(message.promoteAccountId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCPrivateChatPromote>): CMsgClientToGCPrivateChatPromote {
    return CMsgClientToGCPrivateChatPromote.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCPrivateChatPromote>): CMsgClientToGCPrivateChatPromote {
    const message = createBaseCMsgClientToGCPrivateChatPromote();
    message.privateChatChannelName = object.privateChatChannelName ?? "";
    message.promoteAccountId = object.promoteAccountId ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCPrivateChatDemote(): CMsgClientToGCPrivateChatDemote {
  return { privateChatChannelName: "", demoteAccountId: 0 };
}

export const CMsgClientToGCPrivateChatDemote = {
  encode(message: CMsgClientToGCPrivateChatDemote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.privateChatChannelName !== "") {
      writer.uint32(10).string(message.privateChatChannelName);
    }
    if (message.demoteAccountId !== 0) {
      writer.uint32(16).uint32(message.demoteAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCPrivateChatDemote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCPrivateChatDemote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.privateChatChannelName = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.demoteAccountId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCPrivateChatDemote {
    return {
      privateChatChannelName: isSet(object.privateChatChannelName) ? String(object.privateChatChannelName) : "",
      demoteAccountId: isSet(object.demoteAccountId) ? Number(object.demoteAccountId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCPrivateChatDemote): unknown {
    const obj: any = {};
    message.privateChatChannelName !== undefined && (obj.privateChatChannelName = message.privateChatChannelName);
    message.demoteAccountId !== undefined && (obj.demoteAccountId = Math.round(message.demoteAccountId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCPrivateChatDemote>): CMsgClientToGCPrivateChatDemote {
    return CMsgClientToGCPrivateChatDemote.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCPrivateChatDemote>): CMsgClientToGCPrivateChatDemote {
    const message = createBaseCMsgClientToGCPrivateChatDemote();
    message.privateChatChannelName = object.privateChatChannelName ?? "";
    message.demoteAccountId = object.demoteAccountId ?? 0;
    return message;
  },
};

function createBaseCMsgGCToClientPrivateChatResponse(): CMsgGCToClientPrivateChatResponse {
  return { privateChatChannelName: "", result: 0, username: "" };
}

export const CMsgGCToClientPrivateChatResponse = {
  encode(message: CMsgGCToClientPrivateChatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.privateChatChannelName !== "") {
      writer.uint32(10).string(message.privateChatChannelName);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    if (message.username !== "") {
      writer.uint32(26).string(message.username);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientPrivateChatResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientPrivateChatResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.privateChatChannelName = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.username = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToClientPrivateChatResponse {
    return {
      privateChatChannelName: isSet(object.privateChatChannelName) ? String(object.privateChatChannelName) : "",
      result: isSet(object.result) ? cMsgGCToClientPrivateChatResponse_ResultFromJSON(object.result) : 0,
      username: isSet(object.username) ? String(object.username) : "",
    };
  },

  toJSON(message: CMsgGCToClientPrivateChatResponse): unknown {
    const obj: any = {};
    message.privateChatChannelName !== undefined && (obj.privateChatChannelName = message.privateChatChannelName);
    message.result !== undefined && (obj.result = cMsgGCToClientPrivateChatResponse_ResultToJSON(message.result));
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToClientPrivateChatResponse>): CMsgGCToClientPrivateChatResponse {
    return CMsgGCToClientPrivateChatResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCToClientPrivateChatResponse>): CMsgGCToClientPrivateChatResponse {
    const message = createBaseCMsgGCToClientPrivateChatResponse();
    message.privateChatChannelName = object.privateChatChannelName ?? "";
    message.result = object.result ?? 0;
    message.username = object.username ?? "";
    return message;
  },
};

function createBaseCMsgDOTAJoinChatChannel(): CMsgDOTAJoinChatChannel {
  return { channelName: "", channelType: 0, silentRejection: false };
}

export const CMsgDOTAJoinChatChannel = {
  encode(message: CMsgDOTAJoinChatChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelName !== "") {
      writer.uint32(18).string(message.channelName);
    }
    if (message.channelType !== 0) {
      writer.uint32(32).int32(message.channelType);
    }
    if (message.silentRejection === true) {
      writer.uint32(40).bool(message.silentRejection);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAJoinChatChannel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAJoinChatChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.channelName = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.channelType = reader.int32() as any;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.silentRejection = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAJoinChatChannel {
    return {
      channelName: isSet(object.channelName) ? String(object.channelName) : "",
      channelType: isSet(object.channelType) ? dOTAChatChannelTypeTFromJSON(object.channelType) : 0,
      silentRejection: isSet(object.silentRejection) ? Boolean(object.silentRejection) : false,
    };
  },

  toJSON(message: CMsgDOTAJoinChatChannel): unknown {
    const obj: any = {};
    message.channelName !== undefined && (obj.channelName = message.channelName);
    message.channelType !== undefined && (obj.channelType = dOTAChatChannelTypeTToJSON(message.channelType));
    message.silentRejection !== undefined && (obj.silentRejection = message.silentRejection);
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTAJoinChatChannel>): CMsgDOTAJoinChatChannel {
    return CMsgDOTAJoinChatChannel.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTAJoinChatChannel>): CMsgDOTAJoinChatChannel {
    const message = createBaseCMsgDOTAJoinChatChannel();
    message.channelName = object.channelName ?? "";
    message.channelType = object.channelType ?? 0;
    message.silentRejection = object.silentRejection ?? false;
    return message;
  },
};

function createBaseCMsgDOTALeaveChatChannel(): CMsgDOTALeaveChatChannel {
  return { channelId: "0" };
}

export const CMsgDOTALeaveChatChannel = {
  encode(message: CMsgDOTALeaveChatChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(8).uint64(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeaveChatChannel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeaveChatChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.channelId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTALeaveChatChannel {
    return { channelId: isSet(object.channelId) ? String(object.channelId) : "0" };
  },

  toJSON(message: CMsgDOTALeaveChatChannel): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTALeaveChatChannel>): CMsgDOTALeaveChatChannel {
    return CMsgDOTALeaveChatChannel.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTALeaveChatChannel>): CMsgDOTALeaveChatChannel {
    const message = createBaseCMsgDOTALeaveChatChannel();
    message.channelId = object.channelId ?? "0";
    return message;
  },
};

function createBaseCMsgGCChatReportPublicSpam(): CMsgGCChatReportPublicSpam {
  return { channelId: "0", channelUserId: 0 };
}

export const CMsgGCChatReportPublicSpam = {
  encode(message: CMsgGCChatReportPublicSpam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(8).uint64(message.channelId);
    }
    if (message.channelUserId !== 0) {
      writer.uint32(16).uint32(message.channelUserId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCChatReportPublicSpam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCChatReportPublicSpam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.channelId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.channelUserId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCChatReportPublicSpam {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "0",
      channelUserId: isSet(object.channelUserId) ? Number(object.channelUserId) : 0,
    };
  },

  toJSON(message: CMsgGCChatReportPublicSpam): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.channelUserId !== undefined && (obj.channelUserId = Math.round(message.channelUserId));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCChatReportPublicSpam>): CMsgGCChatReportPublicSpam {
    return CMsgGCChatReportPublicSpam.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGCChatReportPublicSpam>): CMsgGCChatReportPublicSpam {
    const message = createBaseCMsgGCChatReportPublicSpam();
    message.channelId = object.channelId ?? "0";
    message.channelUserId = object.channelUserId ?? 0;
    return message;
  },
};

function createBaseCMsgDOTAChatModeratorBan(): CMsgDOTAChatModeratorBan {
  return { channelId: "0", accountId: 0, duration: 0 };
}

export const CMsgDOTAChatModeratorBan = {
  encode(message: CMsgDOTAChatModeratorBan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(8).uint64(message.channelId);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    if (message.duration !== 0) {
      writer.uint32(24).uint32(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAChatModeratorBan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAChatModeratorBan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.channelId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.duration = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAChatModeratorBan {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "0",
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: CMsgDOTAChatModeratorBan): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTAChatModeratorBan>): CMsgDOTAChatModeratorBan {
    return CMsgDOTAChatModeratorBan.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTAChatModeratorBan>): CMsgDOTAChatModeratorBan {
    const message = createBaseCMsgDOTAChatModeratorBan();
    message.channelId = object.channelId ?? "0";
    message.accountId = object.accountId ?? 0;
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseCMsgDOTAChatMessage(): CMsgDOTAChatMessage {
  return {
    accountId: 0,
    channelId: "0",
    personaName: "",
    text: "",
    timestamp: 0,
    suggestInviteAccountId: 0,
    suggestInviteName: "",
    fantasyDraftOwnerAccountId: 0,
    fantasyDraftPlayerAccountId: 0,
    eventId: 0,
    suggestInviteToLobby: false,
    eventPoints: 0,
    coinFlip: false,
    playerId: 0,
    shareProfileAccountId: 0,
    channelUserId: 0,
    diceRoll: undefined,
    sharePartyId: "0",
    shareLobbyId: "0",
    shareLobbyCustomGameId: "0",
    shareLobbyPasskey: "",
    privateChatChannelId: 0,
    status: 0,
    legacyBattleCupVictory: false,
    battleCupStreak: 0,
    badgeLevel: 0,
    suggestPickHeroId: 0,
    suggestPickHeroRole: "",
    suggestBanHeroId: 0,
    triviaAnswer: undefined,
    requestedAbilityId: 0,
    chatFlags: 0,
    startedFindingMatch: false,
    ctrlIsDown: false,
    favoriteTeamId: 0,
    favoriteTeamQuality: 0,
    suggestPlayerDraftPick: 0,
    playerDraftPick: undefined,
  };
}

export const CMsgDOTAChatMessage = {
  encode(message: CMsgDOTAChatMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.channelId !== "0") {
      writer.uint32(16).uint64(message.channelId);
    }
    if (message.personaName !== "") {
      writer.uint32(26).string(message.personaName);
    }
    if (message.text !== "") {
      writer.uint32(34).string(message.text);
    }
    if (message.timestamp !== 0) {
      writer.uint32(40).uint32(message.timestamp);
    }
    if (message.suggestInviteAccountId !== 0) {
      writer.uint32(48).uint32(message.suggestInviteAccountId);
    }
    if (message.suggestInviteName !== "") {
      writer.uint32(58).string(message.suggestInviteName);
    }
    if (message.fantasyDraftOwnerAccountId !== 0) {
      writer.uint32(64).uint32(message.fantasyDraftOwnerAccountId);
    }
    if (message.fantasyDraftPlayerAccountId !== 0) {
      writer.uint32(72).uint32(message.fantasyDraftPlayerAccountId);
    }
    if (message.eventId !== 0) {
      writer.uint32(80).uint32(message.eventId);
    }
    if (message.suggestInviteToLobby === true) {
      writer.uint32(88).bool(message.suggestInviteToLobby);
    }
    if (message.eventPoints !== 0) {
      writer.uint32(96).uint32(message.eventPoints);
    }
    if (message.coinFlip === true) {
      writer.uint32(104).bool(message.coinFlip);
    }
    if (message.playerId !== 0) {
      writer.uint32(112).int32(message.playerId);
    }
    if (message.shareProfileAccountId !== 0) {
      writer.uint32(120).uint32(message.shareProfileAccountId);
    }
    if (message.channelUserId !== 0) {
      writer.uint32(128).uint32(message.channelUserId);
    }
    if (message.diceRoll !== undefined) {
      CMsgDOTAChatMessage_DiceRoll.encode(message.diceRoll, writer.uint32(138).fork()).ldelim();
    }
    if (message.sharePartyId !== "0") {
      writer.uint32(144).uint64(message.sharePartyId);
    }
    if (message.shareLobbyId !== "0") {
      writer.uint32(152).uint64(message.shareLobbyId);
    }
    if (message.shareLobbyCustomGameId !== "0") {
      writer.uint32(160).uint64(message.shareLobbyCustomGameId);
    }
    if (message.shareLobbyPasskey !== "") {
      writer.uint32(170).string(message.shareLobbyPasskey);
    }
    if (message.privateChatChannelId !== 0) {
      writer.uint32(176).uint32(message.privateChatChannelId);
    }
    if (message.status !== 0) {
      writer.uint32(184).uint32(message.status);
    }
    if (message.legacyBattleCupVictory === true) {
      writer.uint32(192).bool(message.legacyBattleCupVictory);
    }
    if (message.battleCupStreak !== 0) {
      writer.uint32(232).uint32(message.battleCupStreak);
    }
    if (message.badgeLevel !== 0) {
      writer.uint32(200).uint32(message.badgeLevel);
    }
    if (message.suggestPickHeroId !== 0) {
      writer.uint32(208).uint32(message.suggestPickHeroId);
    }
    if (message.suggestPickHeroRole !== "") {
      writer.uint32(218).string(message.suggestPickHeroRole);
    }
    if (message.suggestBanHeroId !== 0) {
      writer.uint32(240).uint32(message.suggestBanHeroId);
    }
    if (message.triviaAnswer !== undefined) {
      CMsgDOTAChatMessage_TriviaAnswered.encode(message.triviaAnswer, writer.uint32(258).fork()).ldelim();
    }
    if (message.requestedAbilityId !== 0) {
      writer.uint32(264).int32(message.requestedAbilityId);
    }
    if (message.chatFlags !== 0) {
      writer.uint32(272).uint32(message.chatFlags);
    }
    if (message.startedFindingMatch === true) {
      writer.uint32(280).bool(message.startedFindingMatch);
    }
    if (message.ctrlIsDown === true) {
      writer.uint32(288).bool(message.ctrlIsDown);
    }
    if (message.favoriteTeamId !== 0) {
      writer.uint32(296).uint32(message.favoriteTeamId);
    }
    if (message.favoriteTeamQuality !== 0) {
      writer.uint32(304).uint32(message.favoriteTeamQuality);
    }
    if (message.suggestPlayerDraftPick !== 0) {
      writer.uint32(312).int32(message.suggestPlayerDraftPick);
    }
    if (message.playerDraftPick !== undefined) {
      CMsgDOTAChatMessage_PlayerDraftPick.encode(message.playerDraftPick, writer.uint32(322).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAChatMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAChatMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.channelId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.personaName = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.text = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.suggestInviteAccountId = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.suggestInviteName = reader.string();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.fantasyDraftOwnerAccountId = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.fantasyDraftPlayerAccountId = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.suggestInviteToLobby = reader.bool();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.eventPoints = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.coinFlip = reader.bool();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.playerId = reader.int32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.shareProfileAccountId = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.channelUserId = reader.uint32();
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.diceRoll = CMsgDOTAChatMessage_DiceRoll.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.sharePartyId = longToString(reader.uint64() as Long);
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.shareLobbyId = longToString(reader.uint64() as Long);
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.shareLobbyCustomGameId = longToString(reader.uint64() as Long);
          continue;
        case 21:
          if (tag != 170) {
            break;
          }

          message.shareLobbyPasskey = reader.string();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.privateChatChannelId = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.status = reader.uint32();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.legacyBattleCupVictory = reader.bool();
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.battleCupStreak = reader.uint32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.badgeLevel = reader.uint32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.suggestPickHeroId = reader.uint32();
          continue;
        case 27:
          if (tag != 218) {
            break;
          }

          message.suggestPickHeroRole = reader.string();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.suggestBanHeroId = reader.uint32();
          continue;
        case 32:
          if (tag != 258) {
            break;
          }

          message.triviaAnswer = CMsgDOTAChatMessage_TriviaAnswered.decode(reader, reader.uint32());
          continue;
        case 33:
          if (tag != 264) {
            break;
          }

          message.requestedAbilityId = reader.int32();
          continue;
        case 34:
          if (tag != 272) {
            break;
          }

          message.chatFlags = reader.uint32();
          continue;
        case 35:
          if (tag != 280) {
            break;
          }

          message.startedFindingMatch = reader.bool();
          continue;
        case 36:
          if (tag != 288) {
            break;
          }

          message.ctrlIsDown = reader.bool();
          continue;
        case 37:
          if (tag != 296) {
            break;
          }

          message.favoriteTeamId = reader.uint32();
          continue;
        case 38:
          if (tag != 304) {
            break;
          }

          message.favoriteTeamQuality = reader.uint32();
          continue;
        case 39:
          if (tag != 312) {
            break;
          }

          message.suggestPlayerDraftPick = reader.int32();
          continue;
        case 40:
          if (tag != 322) {
            break;
          }

          message.playerDraftPick = CMsgDOTAChatMessage_PlayerDraftPick.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAChatMessage {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      channelId: isSet(object.channelId) ? String(object.channelId) : "0",
      personaName: isSet(object.personaName) ? String(object.personaName) : "",
      text: isSet(object.text) ? String(object.text) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      suggestInviteAccountId: isSet(object.suggestInviteAccountId) ? Number(object.suggestInviteAccountId) : 0,
      suggestInviteName: isSet(object.suggestInviteName) ? String(object.suggestInviteName) : "",
      fantasyDraftOwnerAccountId: isSet(object.fantasyDraftOwnerAccountId)
        ? Number(object.fantasyDraftOwnerAccountId)
        : 0,
      fantasyDraftPlayerAccountId: isSet(object.fantasyDraftPlayerAccountId)
        ? Number(object.fantasyDraftPlayerAccountId)
        : 0,
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      suggestInviteToLobby: isSet(object.suggestInviteToLobby) ? Boolean(object.suggestInviteToLobby) : false,
      eventPoints: isSet(object.eventPoints) ? Number(object.eventPoints) : 0,
      coinFlip: isSet(object.coinFlip) ? Boolean(object.coinFlip) : false,
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      shareProfileAccountId: isSet(object.shareProfileAccountId) ? Number(object.shareProfileAccountId) : 0,
      channelUserId: isSet(object.channelUserId) ? Number(object.channelUserId) : 0,
      diceRoll: isSet(object.diceRoll) ? CMsgDOTAChatMessage_DiceRoll.fromJSON(object.diceRoll) : undefined,
      sharePartyId: isSet(object.sharePartyId) ? String(object.sharePartyId) : "0",
      shareLobbyId: isSet(object.shareLobbyId) ? String(object.shareLobbyId) : "0",
      shareLobbyCustomGameId: isSet(object.shareLobbyCustomGameId) ? String(object.shareLobbyCustomGameId) : "0",
      shareLobbyPasskey: isSet(object.shareLobbyPasskey) ? String(object.shareLobbyPasskey) : "",
      privateChatChannelId: isSet(object.privateChatChannelId) ? Number(object.privateChatChannelId) : 0,
      status: isSet(object.status) ? Number(object.status) : 0,
      legacyBattleCupVictory: isSet(object.legacyBattleCupVictory) ? Boolean(object.legacyBattleCupVictory) : false,
      battleCupStreak: isSet(object.battleCupStreak) ? Number(object.battleCupStreak) : 0,
      badgeLevel: isSet(object.badgeLevel) ? Number(object.badgeLevel) : 0,
      suggestPickHeroId: isSet(object.suggestPickHeroId) ? Number(object.suggestPickHeroId) : 0,
      suggestPickHeroRole: isSet(object.suggestPickHeroRole) ? String(object.suggestPickHeroRole) : "",
      suggestBanHeroId: isSet(object.suggestBanHeroId) ? Number(object.suggestBanHeroId) : 0,
      triviaAnswer: isSet(object.triviaAnswer)
        ? CMsgDOTAChatMessage_TriviaAnswered.fromJSON(object.triviaAnswer)
        : undefined,
      requestedAbilityId: isSet(object.requestedAbilityId) ? Number(object.requestedAbilityId) : 0,
      chatFlags: isSet(object.chatFlags) ? Number(object.chatFlags) : 0,
      startedFindingMatch: isSet(object.startedFindingMatch) ? Boolean(object.startedFindingMatch) : false,
      ctrlIsDown: isSet(object.ctrlIsDown) ? Boolean(object.ctrlIsDown) : false,
      favoriteTeamId: isSet(object.favoriteTeamId) ? Number(object.favoriteTeamId) : 0,
      favoriteTeamQuality: isSet(object.favoriteTeamQuality) ? Number(object.favoriteTeamQuality) : 0,
      suggestPlayerDraftPick: isSet(object.suggestPlayerDraftPick) ? Number(object.suggestPlayerDraftPick) : 0,
      playerDraftPick: isSet(object.playerDraftPick)
        ? CMsgDOTAChatMessage_PlayerDraftPick.fromJSON(object.playerDraftPick)
        : undefined,
    };
  },

  toJSON(message: CMsgDOTAChatMessage): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.personaName !== undefined && (obj.personaName = message.personaName);
    message.text !== undefined && (obj.text = message.text);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.suggestInviteAccountId !== undefined &&
      (obj.suggestInviteAccountId = Math.round(message.suggestInviteAccountId));
    message.suggestInviteName !== undefined && (obj.suggestInviteName = message.suggestInviteName);
    message.fantasyDraftOwnerAccountId !== undefined &&
      (obj.fantasyDraftOwnerAccountId = Math.round(message.fantasyDraftOwnerAccountId));
    message.fantasyDraftPlayerAccountId !== undefined &&
      (obj.fantasyDraftPlayerAccountId = Math.round(message.fantasyDraftPlayerAccountId));
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    message.suggestInviteToLobby !== undefined && (obj.suggestInviteToLobby = message.suggestInviteToLobby);
    message.eventPoints !== undefined && (obj.eventPoints = Math.round(message.eventPoints));
    message.coinFlip !== undefined && (obj.coinFlip = message.coinFlip);
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.shareProfileAccountId !== undefined &&
      (obj.shareProfileAccountId = Math.round(message.shareProfileAccountId));
    message.channelUserId !== undefined && (obj.channelUserId = Math.round(message.channelUserId));
    message.diceRoll !== undefined &&
      (obj.diceRoll = message.diceRoll ? CMsgDOTAChatMessage_DiceRoll.toJSON(message.diceRoll) : undefined);
    message.sharePartyId !== undefined && (obj.sharePartyId = message.sharePartyId);
    message.shareLobbyId !== undefined && (obj.shareLobbyId = message.shareLobbyId);
    message.shareLobbyCustomGameId !== undefined && (obj.shareLobbyCustomGameId = message.shareLobbyCustomGameId);
    message.shareLobbyPasskey !== undefined && (obj.shareLobbyPasskey = message.shareLobbyPasskey);
    message.privateChatChannelId !== undefined && (obj.privateChatChannelId = Math.round(message.privateChatChannelId));
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.legacyBattleCupVictory !== undefined && (obj.legacyBattleCupVictory = message.legacyBattleCupVictory);
    message.battleCupStreak !== undefined && (obj.battleCupStreak = Math.round(message.battleCupStreak));
    message.badgeLevel !== undefined && (obj.badgeLevel = Math.round(message.badgeLevel));
    message.suggestPickHeroId !== undefined && (obj.suggestPickHeroId = Math.round(message.suggestPickHeroId));
    message.suggestPickHeroRole !== undefined && (obj.suggestPickHeroRole = message.suggestPickHeroRole);
    message.suggestBanHeroId !== undefined && (obj.suggestBanHeroId = Math.round(message.suggestBanHeroId));
    message.triviaAnswer !== undefined && (obj.triviaAnswer = message.triviaAnswer
      ? CMsgDOTAChatMessage_TriviaAnswered.toJSON(message.triviaAnswer)
      : undefined);
    message.requestedAbilityId !== undefined && (obj.requestedAbilityId = Math.round(message.requestedAbilityId));
    message.chatFlags !== undefined && (obj.chatFlags = Math.round(message.chatFlags));
    message.startedFindingMatch !== undefined && (obj.startedFindingMatch = message.startedFindingMatch);
    message.ctrlIsDown !== undefined && (obj.ctrlIsDown = message.ctrlIsDown);
    message.favoriteTeamId !== undefined && (obj.favoriteTeamId = Math.round(message.favoriteTeamId));
    message.favoriteTeamQuality !== undefined && (obj.favoriteTeamQuality = Math.round(message.favoriteTeamQuality));
    message.suggestPlayerDraftPick !== undefined &&
      (obj.suggestPlayerDraftPick = Math.round(message.suggestPlayerDraftPick));
    message.playerDraftPick !== undefined && (obj.playerDraftPick = message.playerDraftPick
      ? CMsgDOTAChatMessage_PlayerDraftPick.toJSON(message.playerDraftPick)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTAChatMessage>): CMsgDOTAChatMessage {
    return CMsgDOTAChatMessage.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTAChatMessage>): CMsgDOTAChatMessage {
    const message = createBaseCMsgDOTAChatMessage();
    message.accountId = object.accountId ?? 0;
    message.channelId = object.channelId ?? "0";
    message.personaName = object.personaName ?? "";
    message.text = object.text ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.suggestInviteAccountId = object.suggestInviteAccountId ?? 0;
    message.suggestInviteName = object.suggestInviteName ?? "";
    message.fantasyDraftOwnerAccountId = object.fantasyDraftOwnerAccountId ?? 0;
    message.fantasyDraftPlayerAccountId = object.fantasyDraftPlayerAccountId ?? 0;
    message.eventId = object.eventId ?? 0;
    message.suggestInviteToLobby = object.suggestInviteToLobby ?? false;
    message.eventPoints = object.eventPoints ?? 0;
    message.coinFlip = object.coinFlip ?? false;
    message.playerId = object.playerId ?? 0;
    message.shareProfileAccountId = object.shareProfileAccountId ?? 0;
    message.channelUserId = object.channelUserId ?? 0;
    message.diceRoll = (object.diceRoll !== undefined && object.diceRoll !== null)
      ? CMsgDOTAChatMessage_DiceRoll.fromPartial(object.diceRoll)
      : undefined;
    message.sharePartyId = object.sharePartyId ?? "0";
    message.shareLobbyId = object.shareLobbyId ?? "0";
    message.shareLobbyCustomGameId = object.shareLobbyCustomGameId ?? "0";
    message.shareLobbyPasskey = object.shareLobbyPasskey ?? "";
    message.privateChatChannelId = object.privateChatChannelId ?? 0;
    message.status = object.status ?? 0;
    message.legacyBattleCupVictory = object.legacyBattleCupVictory ?? false;
    message.battleCupStreak = object.battleCupStreak ?? 0;
    message.badgeLevel = object.badgeLevel ?? 0;
    message.suggestPickHeroId = object.suggestPickHeroId ?? 0;
    message.suggestPickHeroRole = object.suggestPickHeroRole ?? "";
    message.suggestBanHeroId = object.suggestBanHeroId ?? 0;
    message.triviaAnswer = (object.triviaAnswer !== undefined && object.triviaAnswer !== null)
      ? CMsgDOTAChatMessage_TriviaAnswered.fromPartial(object.triviaAnswer)
      : undefined;
    message.requestedAbilityId = object.requestedAbilityId ?? 0;
    message.chatFlags = object.chatFlags ?? 0;
    message.startedFindingMatch = object.startedFindingMatch ?? false;
    message.ctrlIsDown = object.ctrlIsDown ?? false;
    message.favoriteTeamId = object.favoriteTeamId ?? 0;
    message.favoriteTeamQuality = object.favoriteTeamQuality ?? 0;
    message.suggestPlayerDraftPick = object.suggestPlayerDraftPick ?? 0;
    message.playerDraftPick = (object.playerDraftPick !== undefined && object.playerDraftPick !== null)
      ? CMsgDOTAChatMessage_PlayerDraftPick.fromPartial(object.playerDraftPick)
      : undefined;
    return message;
  },
};

function createBaseCMsgDOTAChatMessage_DiceRoll(): CMsgDOTAChatMessage_DiceRoll {
  return { rollMin: 0, rollMax: 0, result: 0 };
}

export const CMsgDOTAChatMessage_DiceRoll = {
  encode(message: CMsgDOTAChatMessage_DiceRoll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rollMin !== 0) {
      writer.uint32(8).int32(message.rollMin);
    }
    if (message.rollMax !== 0) {
      writer.uint32(16).int32(message.rollMax);
    }
    if (message.result !== 0) {
      writer.uint32(24).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAChatMessage_DiceRoll {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAChatMessage_DiceRoll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.rollMin = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.rollMax = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.result = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAChatMessage_DiceRoll {
    return {
      rollMin: isSet(object.rollMin) ? Number(object.rollMin) : 0,
      rollMax: isSet(object.rollMax) ? Number(object.rollMax) : 0,
      result: isSet(object.result) ? Number(object.result) : 0,
    };
  },

  toJSON(message: CMsgDOTAChatMessage_DiceRoll): unknown {
    const obj: any = {};
    message.rollMin !== undefined && (obj.rollMin = Math.round(message.rollMin));
    message.rollMax !== undefined && (obj.rollMax = Math.round(message.rollMax));
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTAChatMessage_DiceRoll>): CMsgDOTAChatMessage_DiceRoll {
    return CMsgDOTAChatMessage_DiceRoll.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTAChatMessage_DiceRoll>): CMsgDOTAChatMessage_DiceRoll {
    const message = createBaseCMsgDOTAChatMessage_DiceRoll();
    message.rollMin = object.rollMin ?? 0;
    message.rollMax = object.rollMax ?? 0;
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseCMsgDOTAChatMessage_TriviaAnswered(): CMsgDOTAChatMessage_TriviaAnswered {
  return { questionId: 0, answerIndex: 0, partyQuestionsCorrect: 0, partyQuestionsViewed: 0, partyTriviaPoints: 0 };
}

export const CMsgDOTAChatMessage_TriviaAnswered = {
  encode(message: CMsgDOTAChatMessage_TriviaAnswered, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.questionId !== 0) {
      writer.uint32(8).uint32(message.questionId);
    }
    if (message.answerIndex !== 0) {
      writer.uint32(16).uint32(message.answerIndex);
    }
    if (message.partyQuestionsCorrect !== 0) {
      writer.uint32(24).uint32(message.partyQuestionsCorrect);
    }
    if (message.partyQuestionsViewed !== 0) {
      writer.uint32(32).uint32(message.partyQuestionsViewed);
    }
    if (message.partyTriviaPoints !== 0) {
      writer.uint32(40).uint32(message.partyTriviaPoints);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAChatMessage_TriviaAnswered {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAChatMessage_TriviaAnswered();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.questionId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.answerIndex = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.partyQuestionsCorrect = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.partyQuestionsViewed = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.partyTriviaPoints = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAChatMessage_TriviaAnswered {
    return {
      questionId: isSet(object.questionId) ? Number(object.questionId) : 0,
      answerIndex: isSet(object.answerIndex) ? Number(object.answerIndex) : 0,
      partyQuestionsCorrect: isSet(object.partyQuestionsCorrect) ? Number(object.partyQuestionsCorrect) : 0,
      partyQuestionsViewed: isSet(object.partyQuestionsViewed) ? Number(object.partyQuestionsViewed) : 0,
      partyTriviaPoints: isSet(object.partyTriviaPoints) ? Number(object.partyTriviaPoints) : 0,
    };
  },

  toJSON(message: CMsgDOTAChatMessage_TriviaAnswered): unknown {
    const obj: any = {};
    message.questionId !== undefined && (obj.questionId = Math.round(message.questionId));
    message.answerIndex !== undefined && (obj.answerIndex = Math.round(message.answerIndex));
    message.partyQuestionsCorrect !== undefined &&
      (obj.partyQuestionsCorrect = Math.round(message.partyQuestionsCorrect));
    message.partyQuestionsViewed !== undefined && (obj.partyQuestionsViewed = Math.round(message.partyQuestionsViewed));
    message.partyTriviaPoints !== undefined && (obj.partyTriviaPoints = Math.round(message.partyTriviaPoints));
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTAChatMessage_TriviaAnswered>): CMsgDOTAChatMessage_TriviaAnswered {
    return CMsgDOTAChatMessage_TriviaAnswered.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTAChatMessage_TriviaAnswered>): CMsgDOTAChatMessage_TriviaAnswered {
    const message = createBaseCMsgDOTAChatMessage_TriviaAnswered();
    message.questionId = object.questionId ?? 0;
    message.answerIndex = object.answerIndex ?? 0;
    message.partyQuestionsCorrect = object.partyQuestionsCorrect ?? 0;
    message.partyQuestionsViewed = object.partyQuestionsViewed ?? 0;
    message.partyTriviaPoints = object.partyTriviaPoints ?? 0;
    return message;
  },
};

function createBaseCMsgDOTAChatMessage_PlayerDraftPick(): CMsgDOTAChatMessage_PlayerDraftPick {
  return { playerId: 0, team: 0 };
}

export const CMsgDOTAChatMessage_PlayerDraftPick = {
  encode(message: CMsgDOTAChatMessage_PlayerDraftPick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.team !== 0) {
      writer.uint32(16).int32(message.team);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAChatMessage_PlayerDraftPick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAChatMessage_PlayerDraftPick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.team = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAChatMessage_PlayerDraftPick {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      team: isSet(object.team) ? Number(object.team) : 0,
    };
  },

  toJSON(message: CMsgDOTAChatMessage_PlayerDraftPick): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.team !== undefined && (obj.team = Math.round(message.team));
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTAChatMessage_PlayerDraftPick>): CMsgDOTAChatMessage_PlayerDraftPick {
    return CMsgDOTAChatMessage_PlayerDraftPick.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTAChatMessage_PlayerDraftPick>): CMsgDOTAChatMessage_PlayerDraftPick {
    const message = createBaseCMsgDOTAChatMessage_PlayerDraftPick();
    message.playerId = object.playerId ?? 0;
    message.team = object.team ?? 0;
    return message;
  },
};

function createBaseCMsgDOTAChatMember(): CMsgDOTAChatMember {
  return { steamId: "0", personaName: "", channelUserId: 0, status: 0 };
}

export const CMsgDOTAChatMember = {
  encode(message: CMsgDOTAChatMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.personaName !== "") {
      writer.uint32(18).string(message.personaName);
    }
    if (message.channelUserId !== 0) {
      writer.uint32(24).uint32(message.channelUserId);
    }
    if (message.status !== 0) {
      writer.uint32(32).uint32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAChatMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAChatMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.personaName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.channelUserId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.status = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAChatMember {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      personaName: isSet(object.personaName) ? String(object.personaName) : "",
      channelUserId: isSet(object.channelUserId) ? Number(object.channelUserId) : 0,
      status: isSet(object.status) ? Number(object.status) : 0,
    };
  },

  toJSON(message: CMsgDOTAChatMember): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.personaName !== undefined && (obj.personaName = message.personaName);
    message.channelUserId !== undefined && (obj.channelUserId = Math.round(message.channelUserId));
    message.status !== undefined && (obj.status = Math.round(message.status));
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTAChatMember>): CMsgDOTAChatMember {
    return CMsgDOTAChatMember.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTAChatMember>): CMsgDOTAChatMember {
    const message = createBaseCMsgDOTAChatMember();
    message.steamId = object.steamId ?? "0";
    message.personaName = object.personaName ?? "";
    message.channelUserId = object.channelUserId ?? 0;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseCMsgDOTAJoinChatChannelResponse(): CMsgDOTAJoinChatChannelResponse {
  return {
    response: 0,
    channelName: "",
    channelId: "0",
    maxMembers: 0,
    members: [],
    channelType: 0,
    result: 0,
    gcInitiatedJoin: false,
    channelUserId: 0,
    welcomeMessage: "",
    specialPrivileges: 0,
  };
}

export const CMsgDOTAJoinChatChannelResponse = {
  encode(message: CMsgDOTAJoinChatChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).uint32(message.response);
    }
    if (message.channelName !== "") {
      writer.uint32(18).string(message.channelName);
    }
    if (message.channelId !== "0") {
      writer.uint32(25).fixed64(message.channelId);
    }
    if (message.maxMembers !== 0) {
      writer.uint32(32).uint32(message.maxMembers);
    }
    for (const v of message.members) {
      CMsgDOTAChatMember.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.channelType !== 0) {
      writer.uint32(48).int32(message.channelType);
    }
    if (message.result !== 0) {
      writer.uint32(56).int32(message.result);
    }
    if (message.gcInitiatedJoin === true) {
      writer.uint32(64).bool(message.gcInitiatedJoin);
    }
    if (message.channelUserId !== 0) {
      writer.uint32(72).uint32(message.channelUserId);
    }
    if (message.welcomeMessage !== "") {
      writer.uint32(82).string(message.welcomeMessage);
    }
    if (message.specialPrivileges !== 0) {
      writer.uint32(88).int32(message.specialPrivileges);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAJoinChatChannelResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAJoinChatChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.channelName = reader.string();
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.channelId = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.maxMembers = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.members.push(CMsgDOTAChatMember.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.channelType = reader.int32() as any;
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.gcInitiatedJoin = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.channelUserId = reader.uint32();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.welcomeMessage = reader.string();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.specialPrivileges = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAJoinChatChannelResponse {
    return {
      response: isSet(object.response) ? Number(object.response) : 0,
      channelName: isSet(object.channelName) ? String(object.channelName) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "0",
      maxMembers: isSet(object.maxMembers) ? Number(object.maxMembers) : 0,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => CMsgDOTAChatMember.fromJSON(e)) : [],
      channelType: isSet(object.channelType) ? dOTAChatChannelTypeTFromJSON(object.channelType) : 0,
      result: isSet(object.result) ? cMsgDOTAJoinChatChannelResponse_ResultFromJSON(object.result) : 0,
      gcInitiatedJoin: isSet(object.gcInitiatedJoin) ? Boolean(object.gcInitiatedJoin) : false,
      channelUserId: isSet(object.channelUserId) ? Number(object.channelUserId) : 0,
      welcomeMessage: isSet(object.welcomeMessage) ? String(object.welcomeMessage) : "",
      specialPrivileges: isSet(object.specialPrivileges) ? eChatSpecialPrivilegesFromJSON(object.specialPrivileges) : 0,
    };
  },

  toJSON(message: CMsgDOTAJoinChatChannelResponse): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = Math.round(message.response));
    message.channelName !== undefined && (obj.channelName = message.channelName);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.maxMembers !== undefined && (obj.maxMembers = Math.round(message.maxMembers));
    if (message.members) {
      obj.members = message.members.map((e) => e ? CMsgDOTAChatMember.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.channelType !== undefined && (obj.channelType = dOTAChatChannelTypeTToJSON(message.channelType));
    message.result !== undefined && (obj.result = cMsgDOTAJoinChatChannelResponse_ResultToJSON(message.result));
    message.gcInitiatedJoin !== undefined && (obj.gcInitiatedJoin = message.gcInitiatedJoin);
    message.channelUserId !== undefined && (obj.channelUserId = Math.round(message.channelUserId));
    message.welcomeMessage !== undefined && (obj.welcomeMessage = message.welcomeMessage);
    message.specialPrivileges !== undefined &&
      (obj.specialPrivileges = eChatSpecialPrivilegesToJSON(message.specialPrivileges));
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTAJoinChatChannelResponse>): CMsgDOTAJoinChatChannelResponse {
    return CMsgDOTAJoinChatChannelResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTAJoinChatChannelResponse>): CMsgDOTAJoinChatChannelResponse {
    const message = createBaseCMsgDOTAJoinChatChannelResponse();
    message.response = object.response ?? 0;
    message.channelName = object.channelName ?? "";
    message.channelId = object.channelId ?? "0";
    message.maxMembers = object.maxMembers ?? 0;
    message.members = object.members?.map((e) => CMsgDOTAChatMember.fromPartial(e)) || [];
    message.channelType = object.channelType ?? 0;
    message.result = object.result ?? 0;
    message.gcInitiatedJoin = object.gcInitiatedJoin ?? false;
    message.channelUserId = object.channelUserId ?? 0;
    message.welcomeMessage = object.welcomeMessage ?? "";
    message.specialPrivileges = object.specialPrivileges ?? 0;
    return message;
  },
};

function createBaseCMsgDOTAOtherJoinedChatChannel(): CMsgDOTAOtherJoinedChatChannel {
  return { channelId: "0", personaName: "", steamId: "0", channelUserId: 0, status: 0 };
}

export const CMsgDOTAOtherJoinedChatChannel = {
  encode(message: CMsgDOTAOtherJoinedChatChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.personaName !== "") {
      writer.uint32(18).string(message.personaName);
    }
    if (message.steamId !== "0") {
      writer.uint32(25).fixed64(message.steamId);
    }
    if (message.channelUserId !== 0) {
      writer.uint32(32).uint32(message.channelUserId);
    }
    if (message.status !== 0) {
      writer.uint32(40).uint32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAOtherJoinedChatChannel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAOtherJoinedChatChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.channelId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.personaName = reader.string();
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.steamId = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.channelUserId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.status = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAOtherJoinedChatChannel {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "0",
      personaName: isSet(object.personaName) ? String(object.personaName) : "",
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      channelUserId: isSet(object.channelUserId) ? Number(object.channelUserId) : 0,
      status: isSet(object.status) ? Number(object.status) : 0,
    };
  },

  toJSON(message: CMsgDOTAOtherJoinedChatChannel): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.personaName !== undefined && (obj.personaName = message.personaName);
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.channelUserId !== undefined && (obj.channelUserId = Math.round(message.channelUserId));
    message.status !== undefined && (obj.status = Math.round(message.status));
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTAOtherJoinedChatChannel>): CMsgDOTAOtherJoinedChatChannel {
    return CMsgDOTAOtherJoinedChatChannel.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTAOtherJoinedChatChannel>): CMsgDOTAOtherJoinedChatChannel {
    const message = createBaseCMsgDOTAOtherJoinedChatChannel();
    message.channelId = object.channelId ?? "0";
    message.personaName = object.personaName ?? "";
    message.steamId = object.steamId ?? "0";
    message.channelUserId = object.channelUserId ?? 0;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseCMsgDOTAOtherLeftChatChannel(): CMsgDOTAOtherLeftChatChannel {
  return { channelId: "0", steamId: "0", channelUserId: 0 };
}

export const CMsgDOTAOtherLeftChatChannel = {
  encode(message: CMsgDOTAOtherLeftChatChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.steamId !== "0") {
      writer.uint32(17).fixed64(message.steamId);
    }
    if (message.channelUserId !== 0) {
      writer.uint32(24).uint32(message.channelUserId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAOtherLeftChatChannel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAOtherLeftChatChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.channelId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.steamId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.channelUserId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAOtherLeftChatChannel {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "0",
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      channelUserId: isSet(object.channelUserId) ? Number(object.channelUserId) : 0,
    };
  },

  toJSON(message: CMsgDOTAOtherLeftChatChannel): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.channelUserId !== undefined && (obj.channelUserId = Math.round(message.channelUserId));
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTAOtherLeftChatChannel>): CMsgDOTAOtherLeftChatChannel {
    return CMsgDOTAOtherLeftChatChannel.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTAOtherLeftChatChannel>): CMsgDOTAOtherLeftChatChannel {
    const message = createBaseCMsgDOTAOtherLeftChatChannel();
    message.channelId = object.channelId ?? "0";
    message.steamId = object.steamId ?? "0";
    message.channelUserId = object.channelUserId ?? 0;
    return message;
  },
};

function createBaseCMsgDOTARequestChatChannelList(): CMsgDOTARequestChatChannelList {
  return {};
}

export const CMsgDOTARequestChatChannelList = {
  encode(_: CMsgDOTARequestChatChannelList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARequestChatChannelList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARequestChatChannelList();
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

  fromJSON(_: any): CMsgDOTARequestChatChannelList {
    return {};
  },

  toJSON(_: CMsgDOTARequestChatChannelList): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTARequestChatChannelList>): CMsgDOTARequestChatChannelList {
    return CMsgDOTARequestChatChannelList.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CMsgDOTARequestChatChannelList>): CMsgDOTARequestChatChannelList {
    const message = createBaseCMsgDOTARequestChatChannelList();
    return message;
  },
};

function createBaseCMsgDOTARequestChatChannelListResponse(): CMsgDOTARequestChatChannelListResponse {
  return { channels: [] };
}

export const CMsgDOTARequestChatChannelListResponse = {
  encode(message: CMsgDOTARequestChatChannelListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.channels) {
      CMsgDOTARequestChatChannelListResponse_ChatChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARequestChatChannelListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARequestChatChannelListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.channels.push(CMsgDOTARequestChatChannelListResponse_ChatChannel.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTARequestChatChannelListResponse {
    return {
      channels: Array.isArray(object?.channels)
        ? object.channels.map((e: any) => CMsgDOTARequestChatChannelListResponse_ChatChannel.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTARequestChatChannelListResponse): unknown {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map((e) =>
        e ? CMsgDOTARequestChatChannelListResponse_ChatChannel.toJSON(e) : undefined
      );
    } else {
      obj.channels = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTARequestChatChannelListResponse>): CMsgDOTARequestChatChannelListResponse {
    return CMsgDOTARequestChatChannelListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTARequestChatChannelListResponse>): CMsgDOTARequestChatChannelListResponse {
    const message = createBaseCMsgDOTARequestChatChannelListResponse();
    message.channels = object.channels?.map((e) => CMsgDOTARequestChatChannelListResponse_ChatChannel.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseCMsgDOTARequestChatChannelListResponse_ChatChannel(): CMsgDOTARequestChatChannelListResponse_ChatChannel {
  return { channelName: "", numMembers: 0, channelType: 0 };
}

export const CMsgDOTARequestChatChannelListResponse_ChatChannel = {
  encode(
    message: CMsgDOTARequestChatChannelListResponse_ChatChannel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.channelName !== "") {
      writer.uint32(10).string(message.channelName);
    }
    if (message.numMembers !== 0) {
      writer.uint32(16).uint32(message.numMembers);
    }
    if (message.channelType !== 0) {
      writer.uint32(24).int32(message.channelType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARequestChatChannelListResponse_ChatChannel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARequestChatChannelListResponse_ChatChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.channelName = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.numMembers = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.channelType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTARequestChatChannelListResponse_ChatChannel {
    return {
      channelName: isSet(object.channelName) ? String(object.channelName) : "",
      numMembers: isSet(object.numMembers) ? Number(object.numMembers) : 0,
      channelType: isSet(object.channelType) ? dOTAChatChannelTypeTFromJSON(object.channelType) : 0,
    };
  },

  toJSON(message: CMsgDOTARequestChatChannelListResponse_ChatChannel): unknown {
    const obj: any = {};
    message.channelName !== undefined && (obj.channelName = message.channelName);
    message.numMembers !== undefined && (obj.numMembers = Math.round(message.numMembers));
    message.channelType !== undefined && (obj.channelType = dOTAChatChannelTypeTToJSON(message.channelType));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgDOTARequestChatChannelListResponse_ChatChannel>,
  ): CMsgDOTARequestChatChannelListResponse_ChatChannel {
    return CMsgDOTARequestChatChannelListResponse_ChatChannel.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgDOTARequestChatChannelListResponse_ChatChannel>,
  ): CMsgDOTARequestChatChannelListResponse_ChatChannel {
    const message = createBaseCMsgDOTARequestChatChannelListResponse_ChatChannel();
    message.channelName = object.channelName ?? "";
    message.numMembers = object.numMembers ?? 0;
    message.channelType = object.channelType ?? 0;
    return message;
  },
};

function createBaseCMsgDOTAChatGetUserListResponse(): CMsgDOTAChatGetUserListResponse {
  return { channelId: "0", members: [] };
}

export const CMsgDOTAChatGetUserListResponse = {
  encode(message: CMsgDOTAChatGetUserListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    for (const v of message.members) {
      CMsgDOTAChatGetUserListResponse_Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAChatGetUserListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAChatGetUserListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.channelId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.members.push(CMsgDOTAChatGetUserListResponse_Member.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAChatGetUserListResponse {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "0",
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => CMsgDOTAChatGetUserListResponse_Member.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTAChatGetUserListResponse): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    if (message.members) {
      obj.members = message.members.map((e) => e ? CMsgDOTAChatGetUserListResponse_Member.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTAChatGetUserListResponse>): CMsgDOTAChatGetUserListResponse {
    return CMsgDOTAChatGetUserListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTAChatGetUserListResponse>): CMsgDOTAChatGetUserListResponse {
    const message = createBaseCMsgDOTAChatGetUserListResponse();
    message.channelId = object.channelId ?? "0";
    message.members = object.members?.map((e) => CMsgDOTAChatGetUserListResponse_Member.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgDOTAChatGetUserListResponse_Member(): CMsgDOTAChatGetUserListResponse_Member {
  return { steamId: "0", personaName: "", channelUserId: 0, status: 0 };
}

export const CMsgDOTAChatGetUserListResponse_Member = {
  encode(message: CMsgDOTAChatGetUserListResponse_Member, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.personaName !== "") {
      writer.uint32(18).string(message.personaName);
    }
    if (message.channelUserId !== 0) {
      writer.uint32(24).uint32(message.channelUserId);
    }
    if (message.status !== 0) {
      writer.uint32(32).uint32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAChatGetUserListResponse_Member {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAChatGetUserListResponse_Member();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.personaName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.channelUserId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.status = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAChatGetUserListResponse_Member {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      personaName: isSet(object.personaName) ? String(object.personaName) : "",
      channelUserId: isSet(object.channelUserId) ? Number(object.channelUserId) : 0,
      status: isSet(object.status) ? Number(object.status) : 0,
    };
  },

  toJSON(message: CMsgDOTAChatGetUserListResponse_Member): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.personaName !== undefined && (obj.personaName = message.personaName);
    message.channelUserId !== undefined && (obj.channelUserId = Math.round(message.channelUserId));
    message.status !== undefined && (obj.status = Math.round(message.status));
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTAChatGetUserListResponse_Member>): CMsgDOTAChatGetUserListResponse_Member {
    return CMsgDOTAChatGetUserListResponse_Member.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTAChatGetUserListResponse_Member>): CMsgDOTAChatGetUserListResponse_Member {
    const message = createBaseCMsgDOTAChatGetUserListResponse_Member();
    message.steamId = object.steamId ?? "0";
    message.personaName = object.personaName ?? "";
    message.channelUserId = object.channelUserId ?? 0;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseCMsgDOTAChatGetMemberCount(): CMsgDOTAChatGetMemberCount {
  return { channelName: "", channelType: 0 };
}

export const CMsgDOTAChatGetMemberCount = {
  encode(message: CMsgDOTAChatGetMemberCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelName !== "") {
      writer.uint32(10).string(message.channelName);
    }
    if (message.channelType !== 0) {
      writer.uint32(16).int32(message.channelType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAChatGetMemberCount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAChatGetMemberCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.channelName = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.channelType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAChatGetMemberCount {
    return {
      channelName: isSet(object.channelName) ? String(object.channelName) : "",
      channelType: isSet(object.channelType) ? dOTAChatChannelTypeTFromJSON(object.channelType) : 0,
    };
  },

  toJSON(message: CMsgDOTAChatGetMemberCount): unknown {
    const obj: any = {};
    message.channelName !== undefined && (obj.channelName = message.channelName);
    message.channelType !== undefined && (obj.channelType = dOTAChatChannelTypeTToJSON(message.channelType));
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTAChatGetMemberCount>): CMsgDOTAChatGetMemberCount {
    return CMsgDOTAChatGetMemberCount.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTAChatGetMemberCount>): CMsgDOTAChatGetMemberCount {
    const message = createBaseCMsgDOTAChatGetMemberCount();
    message.channelName = object.channelName ?? "";
    message.channelType = object.channelType ?? 0;
    return message;
  },
};

function createBaseCMsgDOTAChatGetMemberCountResponse(): CMsgDOTAChatGetMemberCountResponse {
  return { channelName: "", channelType: 0, memberCount: 0 };
}

export const CMsgDOTAChatGetMemberCountResponse = {
  encode(message: CMsgDOTAChatGetMemberCountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelName !== "") {
      writer.uint32(10).string(message.channelName);
    }
    if (message.channelType !== 0) {
      writer.uint32(16).int32(message.channelType);
    }
    if (message.memberCount !== 0) {
      writer.uint32(24).uint32(message.memberCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAChatGetMemberCountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAChatGetMemberCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.channelName = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.channelType = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.memberCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAChatGetMemberCountResponse {
    return {
      channelName: isSet(object.channelName) ? String(object.channelName) : "",
      channelType: isSet(object.channelType) ? dOTAChatChannelTypeTFromJSON(object.channelType) : 0,
      memberCount: isSet(object.memberCount) ? Number(object.memberCount) : 0,
    };
  },

  toJSON(message: CMsgDOTAChatGetMemberCountResponse): unknown {
    const obj: any = {};
    message.channelName !== undefined && (obj.channelName = message.channelName);
    message.channelType !== undefined && (obj.channelType = dOTAChatChannelTypeTToJSON(message.channelType));
    message.memberCount !== undefined && (obj.memberCount = Math.round(message.memberCount));
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTAChatGetMemberCountResponse>): CMsgDOTAChatGetMemberCountResponse {
    return CMsgDOTAChatGetMemberCountResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTAChatGetMemberCountResponse>): CMsgDOTAChatGetMemberCountResponse {
    const message = createBaseCMsgDOTAChatGetMemberCountResponse();
    message.channelName = object.channelName ?? "";
    message.channelType = object.channelType ?? 0;
    message.memberCount = object.memberCount ?? 0;
    return message;
  },
};

function createBaseCMsgDOTAChatRegionsEnabled(): CMsgDOTAChatRegionsEnabled {
  return { enableAllRegions: false, enabledRegions: [] };
}

export const CMsgDOTAChatRegionsEnabled = {
  encode(message: CMsgDOTAChatRegionsEnabled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableAllRegions === true) {
      writer.uint32(8).bool(message.enableAllRegions);
    }
    for (const v of message.enabledRegions) {
      CMsgDOTAChatRegionsEnabled_Region.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAChatRegionsEnabled {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAChatRegionsEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.enableAllRegions = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.enabledRegions.push(CMsgDOTAChatRegionsEnabled_Region.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAChatRegionsEnabled {
    return {
      enableAllRegions: isSet(object.enableAllRegions) ? Boolean(object.enableAllRegions) : false,
      enabledRegions: Array.isArray(object?.enabledRegions)
        ? object.enabledRegions.map((e: any) => CMsgDOTAChatRegionsEnabled_Region.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTAChatRegionsEnabled): unknown {
    const obj: any = {};
    message.enableAllRegions !== undefined && (obj.enableAllRegions = message.enableAllRegions);
    if (message.enabledRegions) {
      obj.enabledRegions = message.enabledRegions.map((e) =>
        e ? CMsgDOTAChatRegionsEnabled_Region.toJSON(e) : undefined
      );
    } else {
      obj.enabledRegions = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTAChatRegionsEnabled>): CMsgDOTAChatRegionsEnabled {
    return CMsgDOTAChatRegionsEnabled.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTAChatRegionsEnabled>): CMsgDOTAChatRegionsEnabled {
    const message = createBaseCMsgDOTAChatRegionsEnabled();
    message.enableAllRegions = object.enableAllRegions ?? false;
    message.enabledRegions = object.enabledRegions?.map((e) => CMsgDOTAChatRegionsEnabled_Region.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgDOTAChatRegionsEnabled_Region(): CMsgDOTAChatRegionsEnabled_Region {
  return { minLatitude: 0, maxLatitude: 0, minLongitude: 0, maxLongitude: 0 };
}

export const CMsgDOTAChatRegionsEnabled_Region = {
  encode(message: CMsgDOTAChatRegionsEnabled_Region, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minLatitude !== 0) {
      writer.uint32(13).float(message.minLatitude);
    }
    if (message.maxLatitude !== 0) {
      writer.uint32(21).float(message.maxLatitude);
    }
    if (message.minLongitude !== 0) {
      writer.uint32(29).float(message.minLongitude);
    }
    if (message.maxLongitude !== 0) {
      writer.uint32(37).float(message.maxLongitude);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAChatRegionsEnabled_Region {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAChatRegionsEnabled_Region();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.minLatitude = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.maxLatitude = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.minLongitude = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.maxLongitude = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAChatRegionsEnabled_Region {
    return {
      minLatitude: isSet(object.minLatitude) ? Number(object.minLatitude) : 0,
      maxLatitude: isSet(object.maxLatitude) ? Number(object.maxLatitude) : 0,
      minLongitude: isSet(object.minLongitude) ? Number(object.minLongitude) : 0,
      maxLongitude: isSet(object.maxLongitude) ? Number(object.maxLongitude) : 0,
    };
  },

  toJSON(message: CMsgDOTAChatRegionsEnabled_Region): unknown {
    const obj: any = {};
    message.minLatitude !== undefined && (obj.minLatitude = message.minLatitude);
    message.maxLatitude !== undefined && (obj.maxLatitude = message.maxLatitude);
    message.minLongitude !== undefined && (obj.minLongitude = message.minLongitude);
    message.maxLongitude !== undefined && (obj.maxLongitude = message.maxLongitude);
    return obj;
  },

  create(base?: DeepPartial<CMsgDOTAChatRegionsEnabled_Region>): CMsgDOTAChatRegionsEnabled_Region {
    return CMsgDOTAChatRegionsEnabled_Region.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDOTAChatRegionsEnabled_Region>): CMsgDOTAChatRegionsEnabled_Region {
    const message = createBaseCMsgDOTAChatRegionsEnabled_Region();
    message.minLatitude = object.minLatitude ?? 0;
    message.maxLatitude = object.maxLatitude ?? 0;
    message.minLongitude = object.minLongitude ?? 0;
    message.maxLongitude = object.maxLongitude ?? 0;
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
