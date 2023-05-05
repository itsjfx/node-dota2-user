/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DOTAChatChannelTypeT, EChatSpecialPrivileges } from "./dota_shared_enums";

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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
