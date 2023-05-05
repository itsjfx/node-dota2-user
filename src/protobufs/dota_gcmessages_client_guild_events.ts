/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { EEvent } from "./dota_shared_enums";

export enum EGuildEventAuditAction {
  k_EGuildEventAuditAction_Invalid = 0,
  k_EGuildEventAuditAction_DevGrant = 1,
  k_EGuildEventAuditAction_CompleteContract = 2,
  k_EGuildEventAuditAction_CompleteChallenge = 3,
  k_EGuildEventAuditAction_CompleteMatch_Winner = 4,
  k_EGuildEventAuditAction_ChallengeProgress = 5,
  k_EGuildEventAuditAction_CompleteMatch_Loser = 6,
  k_EGuildEventAuditAction_WeeklyLeaderboard = 7,
  k_EGuildEventAuditAction_ManualGrant = 8,
}

export interface CMsgGuildContract {
  contractId: string;
  challengeInstanceId: number;
  challengeParameter: number;
  challengeTimestamp: number;
  assignedAccountId: number;
  contractFlags: number;
}

export interface CMsgGuildContractSlot {
  contract: CMsgGuildContract | undefined;
}

export interface CMsgAccountGuildEventData {
  guildPoints: number;
  contractsRefreshedTimestamp: number;
  contractSlots: CMsgGuildContractSlot[];
  completedChallengeCount: number;
  challengesRefreshTimestamp: number;
  guildWeeklyPercentile: number;
  guildWeeklyLastTimestamp: number;
  lastWeeklyClaimTime: number;
  guildCurrentPercentile: number;
}

export interface CMsgGuildActiveContracts {
  contractsRefreshedTimestamp: number;
  contracts: CMsgGuildContract[];
}

export interface CMsgGuildChallenge {
  challengeInstanceId: number;
  challengeParameter: number;
  challengeTimestamp: number;
  challengeProgress: number;
  challengeFlags: number;
}

export interface CMsgGuildEventMember {
  accountId: number;
  guildPointsEarned: number;
}

export interface CMsgClientToGCRequestAccountGuildEventData {
  guildId: number;
  eventId: EEvent;
}

export interface CMsgClientToGCRequestAccountGuildEventDataResponse {
  result: CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse;
  eventId: EEvent;
  eventData: CMsgAccountGuildEventData | undefined;
}

export enum CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidEvent = 5,
  k_eInvalidGuild = 6,
  k_eNotMember = 7,
  k_eInvalidGuildEvent = 8,
}

export interface CMsgGCToClientAccountGuildEventDataUpdated {
  guildId: number;
  eventId: EEvent;
  updateFlags: number;
  guildEventData: CMsgAccountGuildEventData | undefined;
  contractsUpdated: boolean;
}

export interface CMsgClientToGCRequestActiveGuildContracts {
  guildId: number;
  eventId: EEvent;
}

export interface CMsgClientToGCRequestActiveGuildContractsResponse {
  result: CMsgClientToGCRequestActiveGuildContractsResponse_EResponse;
  activeContracts: CMsgGuildActiveContracts | undefined;
  activeChallenges: CMsgGuildChallenge | undefined;
}

export enum CMsgClientToGCRequestActiveGuildContractsResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidEvent = 5,
  k_eInvalidGuild = 6,
  k_eNotMember = 7,
  k_eInvalidGuildEvent = 8,
}

export interface CMsgGCToClientActiveGuildContractsUpdated {
  guildId: number;
  eventId: EEvent;
}

export interface CMsgClientToGCSelectGuildContract {
  guildId: number;
  eventId: EEvent;
  contractId: string;
  contractSlot: number;
}

export interface CMsgClientToGCSelectGuildContractResponse {
  result: CMsgClientToGCSelectGuildContractResponse_EResponse;
}

export enum CMsgClientToGCSelectGuildContractResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidEvent = 5,
  k_eInvalidGuild = 6,
  k_eNotMember = 7,
  k_eInvalidGuildEvent = 8,
  k_eInvalidContractID = 9,
  k_eAlreadyAssigned = 10,
  k_eInvalidContractSlot = 11,
  k_eContractSlotLockedGuild = 12,
  k_eContractSlotCooldown = 13,
  k_eContractDuplicate = 14,
  k_eContractSlotTimeError = 15,
  k_eContractSlotLockedDotaPlus = 16,
}

export interface CMsgClientToGCRequestActiveGuildChallenge {
  guildId: number;
  eventId: EEvent;
}

export interface CMsgClientToGCRequestActiveGuildChallengeResponse {
  result: CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse;
  activeChallenge: CMsgGuildChallenge | undefined;
}

export enum CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidEvent = 5,
  k_eInvalidGuild = 6,
  k_eNotMember = 7,
  k_eInvalidGuildEvent = 8,
}

export interface CMsgGCToClientActiveGuildChallengeUpdated {
  guildId: number;
  eventId: EEvent;
  activeChallenge: CMsgGuildChallenge | undefined;
}

export interface CMsgClientToGCRequestGuildEventMembers {
  guildId: number;
  eventId: EEvent;
}

export interface CMsgClientToGCRequestGuildEventMembersResponse {
  result: CMsgClientToGCRequestGuildEventMembersResponse_EResponse;
  members: CMsgGuildEventMember[];
}

export enum CMsgClientToGCRequestGuildEventMembersResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidEvent = 5,
  k_eInvalidGuild = 6,
  k_eNotMember = 7,
  k_eInvalidGuildEvent = 8,
}

export interface CMsgGuildLeaderboardCombinedResponse {
  eventId: EEvent;
  region: number;
  lastUpdated: number;
  guildId: number[];
  rank: number[];
  currentPercentile: number[];
  weeklyPercentile: number[];
  points: number[];
}

export interface CMsgClientToGCClaimLeaderboardRewards {
  guildId: number;
  eventId: EEvent;
}

export interface CMsgClientToGCClaimLeaderboardRewardsResponse {
  result: CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse;
  eventPoints: number;
}

export enum CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidEvent = 5,
  k_eInvalidGuild = 6,
  k_eNotMember = 7,
  k_eInvalidGuildEvent = 8,
  k_eDoesNotQualify = 9,
  k_eAlreadyClaimed = 10,
}

function createBaseCMsgGuildContract(): CMsgGuildContract {
  return {
    contractId: "0",
    challengeInstanceId: 0,
    challengeParameter: 0,
    challengeTimestamp: 0,
    assignedAccountId: 0,
    contractFlags: 0,
  };
}

export const CMsgGuildContract = {
  encode(message: CMsgGuildContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractId !== "0") {
      writer.uint32(8).uint64(message.contractId);
    }
    if (message.challengeInstanceId !== 0) {
      writer.uint32(16).uint32(message.challengeInstanceId);
    }
    if (message.challengeParameter !== 0) {
      writer.uint32(24).uint32(message.challengeParameter);
    }
    if (message.challengeTimestamp !== 0) {
      writer.uint32(32).uint32(message.challengeTimestamp);
    }
    if (message.assignedAccountId !== 0) {
      writer.uint32(40).uint32(message.assignedAccountId);
    }
    if (message.contractFlags !== 0) {
      writer.uint32(48).uint32(message.contractFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGuildContract {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGuildContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.contractId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.challengeInstanceId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.challengeParameter = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.challengeTimestamp = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.assignedAccountId = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.contractFlags = reader.uint32();
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

function createBaseCMsgGuildContractSlot(): CMsgGuildContractSlot {
  return { contract: undefined };
}

export const CMsgGuildContractSlot = {
  encode(message: CMsgGuildContractSlot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract !== undefined) {
      CMsgGuildContract.encode(message.contract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGuildContractSlot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGuildContractSlot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.contract = CMsgGuildContract.decode(reader, reader.uint32());
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

function createBaseCMsgAccountGuildEventData(): CMsgAccountGuildEventData {
  return {
    guildPoints: 0,
    contractsRefreshedTimestamp: 0,
    contractSlots: [],
    completedChallengeCount: 0,
    challengesRefreshTimestamp: 0,
    guildWeeklyPercentile: 0,
    guildWeeklyLastTimestamp: 0,
    lastWeeklyClaimTime: 0,
    guildCurrentPercentile: 0,
  };
}

export const CMsgAccountGuildEventData = {
  encode(message: CMsgAccountGuildEventData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildPoints !== 0) {
      writer.uint32(8).uint32(message.guildPoints);
    }
    if (message.contractsRefreshedTimestamp !== 0) {
      writer.uint32(16).uint32(message.contractsRefreshedTimestamp);
    }
    for (const v of message.contractSlots) {
      CMsgGuildContractSlot.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.completedChallengeCount !== 0) {
      writer.uint32(32).uint32(message.completedChallengeCount);
    }
    if (message.challengesRefreshTimestamp !== 0) {
      writer.uint32(40).uint32(message.challengesRefreshTimestamp);
    }
    if (message.guildWeeklyPercentile !== 0) {
      writer.uint32(48).uint32(message.guildWeeklyPercentile);
    }
    if (message.guildWeeklyLastTimestamp !== 0) {
      writer.uint32(56).uint32(message.guildWeeklyLastTimestamp);
    }
    if (message.lastWeeklyClaimTime !== 0) {
      writer.uint32(64).uint32(message.lastWeeklyClaimTime);
    }
    if (message.guildCurrentPercentile !== 0) {
      writer.uint32(72).uint32(message.guildCurrentPercentile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAccountGuildEventData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAccountGuildEventData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildPoints = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.contractsRefreshedTimestamp = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.contractSlots.push(CMsgGuildContractSlot.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.completedChallengeCount = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.challengesRefreshTimestamp = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.guildWeeklyPercentile = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.guildWeeklyLastTimestamp = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.lastWeeklyClaimTime = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
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

function createBaseCMsgGuildActiveContracts(): CMsgGuildActiveContracts {
  return { contractsRefreshedTimestamp: 0, contracts: [] };
}

export const CMsgGuildActiveContracts = {
  encode(message: CMsgGuildActiveContracts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractsRefreshedTimestamp !== 0) {
      writer.uint32(8).uint32(message.contractsRefreshedTimestamp);
    }
    for (const v of message.contracts) {
      CMsgGuildContract.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGuildActiveContracts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGuildActiveContracts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.contractsRefreshedTimestamp = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.contracts.push(CMsgGuildContract.decode(reader, reader.uint32()));
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

function createBaseCMsgGuildChallenge(): CMsgGuildChallenge {
  return {
    challengeInstanceId: 0,
    challengeParameter: 0,
    challengeTimestamp: 0,
    challengeProgress: 0,
    challengeFlags: 0,
  };
}

export const CMsgGuildChallenge = {
  encode(message: CMsgGuildChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challengeInstanceId !== 0) {
      writer.uint32(8).uint32(message.challengeInstanceId);
    }
    if (message.challengeParameter !== 0) {
      writer.uint32(16).uint32(message.challengeParameter);
    }
    if (message.challengeTimestamp !== 0) {
      writer.uint32(24).uint32(message.challengeTimestamp);
    }
    if (message.challengeProgress !== 0) {
      writer.uint32(32).uint32(message.challengeProgress);
    }
    if (message.challengeFlags !== 0) {
      writer.uint32(40).uint32(message.challengeFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGuildChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGuildChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.challengeInstanceId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.challengeParameter = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.challengeTimestamp = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.challengeProgress = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.challengeFlags = reader.uint32();
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

function createBaseCMsgGuildEventMember(): CMsgGuildEventMember {
  return { accountId: 0, guildPointsEarned: 0 };
}

export const CMsgGuildEventMember = {
  encode(message: CMsgGuildEventMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.guildPointsEarned !== 0) {
      writer.uint32(16).uint32(message.guildPointsEarned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGuildEventMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGuildEventMember();
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

          message.guildPointsEarned = reader.uint32();
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

function createBaseCMsgClientToGCRequestAccountGuildEventData(): CMsgClientToGCRequestAccountGuildEventData {
  return { guildId: 0, eventId: 0 };
}

export const CMsgClientToGCRequestAccountGuildEventData = {
  encode(message: CMsgClientToGCRequestAccountGuildEventData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestAccountGuildEventData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestAccountGuildEventData();
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

          message.eventId = reader.int32() as any;
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

function createBaseCMsgClientToGCRequestAccountGuildEventDataResponse(): CMsgClientToGCRequestAccountGuildEventDataResponse {
  return { result: 0, eventId: 0, eventData: undefined };
}

export const CMsgClientToGCRequestAccountGuildEventDataResponse = {
  encode(
    message: CMsgClientToGCRequestAccountGuildEventDataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    if (message.eventData !== undefined) {
      CMsgAccountGuildEventData.encode(message.eventData, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestAccountGuildEventDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestAccountGuildEventDataResponse();
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

          message.eventId = reader.int32() as any;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.eventData = CMsgAccountGuildEventData.decode(reader, reader.uint32());
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

function createBaseCMsgGCToClientAccountGuildEventDataUpdated(): CMsgGCToClientAccountGuildEventDataUpdated {
  return { guildId: 0, eventId: 0, updateFlags: 0, guildEventData: undefined, contractsUpdated: false };
}

export const CMsgGCToClientAccountGuildEventDataUpdated = {
  encode(message: CMsgGCToClientAccountGuildEventDataUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    if (message.updateFlags !== 0) {
      writer.uint32(24).uint32(message.updateFlags);
    }
    if (message.guildEventData !== undefined) {
      CMsgAccountGuildEventData.encode(message.guildEventData, writer.uint32(34).fork()).ldelim();
    }
    if (message.contractsUpdated === true) {
      writer.uint32(40).bool(message.contractsUpdated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientAccountGuildEventDataUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientAccountGuildEventDataUpdated();
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

          message.eventId = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.updateFlags = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.guildEventData = CMsgAccountGuildEventData.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.contractsUpdated = reader.bool();
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

function createBaseCMsgClientToGCRequestActiveGuildContracts(): CMsgClientToGCRequestActiveGuildContracts {
  return { guildId: 0, eventId: 0 };
}

export const CMsgClientToGCRequestActiveGuildContracts = {
  encode(message: CMsgClientToGCRequestActiveGuildContracts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestActiveGuildContracts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestActiveGuildContracts();
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

          message.eventId = reader.int32() as any;
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

function createBaseCMsgClientToGCRequestActiveGuildContractsResponse(): CMsgClientToGCRequestActiveGuildContractsResponse {
  return { result: 0, activeContracts: undefined, activeChallenges: undefined };
}

export const CMsgClientToGCRequestActiveGuildContractsResponse = {
  encode(
    message: CMsgClientToGCRequestActiveGuildContractsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.activeContracts !== undefined) {
      CMsgGuildActiveContracts.encode(message.activeContracts, writer.uint32(18).fork()).ldelim();
    }
    if (message.activeChallenges !== undefined) {
      CMsgGuildChallenge.encode(message.activeChallenges, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestActiveGuildContractsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestActiveGuildContractsResponse();
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

          message.activeContracts = CMsgGuildActiveContracts.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.activeChallenges = CMsgGuildChallenge.decode(reader, reader.uint32());
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

function createBaseCMsgGCToClientActiveGuildContractsUpdated(): CMsgGCToClientActiveGuildContractsUpdated {
  return { guildId: 0, eventId: 0 };
}

export const CMsgGCToClientActiveGuildContractsUpdated = {
  encode(message: CMsgGCToClientActiveGuildContractsUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientActiveGuildContractsUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientActiveGuildContractsUpdated();
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

          message.eventId = reader.int32() as any;
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

function createBaseCMsgClientToGCSelectGuildContract(): CMsgClientToGCSelectGuildContract {
  return { guildId: 0, eventId: 0, contractId: "0", contractSlot: 0 };
}

export const CMsgClientToGCSelectGuildContract = {
  encode(message: CMsgClientToGCSelectGuildContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    if (message.contractId !== "0") {
      writer.uint32(24).uint64(message.contractId);
    }
    if (message.contractSlot !== 0) {
      writer.uint32(32).uint32(message.contractSlot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSelectGuildContract {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSelectGuildContract();
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

          message.eventId = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.contractId = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.contractSlot = reader.uint32();
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

function createBaseCMsgClientToGCSelectGuildContractResponse(): CMsgClientToGCSelectGuildContractResponse {
  return { result: 0 };
}

export const CMsgClientToGCSelectGuildContractResponse = {
  encode(message: CMsgClientToGCSelectGuildContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSelectGuildContractResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSelectGuildContractResponse();
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

function createBaseCMsgClientToGCRequestActiveGuildChallenge(): CMsgClientToGCRequestActiveGuildChallenge {
  return { guildId: 0, eventId: 0 };
}

export const CMsgClientToGCRequestActiveGuildChallenge = {
  encode(message: CMsgClientToGCRequestActiveGuildChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestActiveGuildChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestActiveGuildChallenge();
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

          message.eventId = reader.int32() as any;
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

function createBaseCMsgClientToGCRequestActiveGuildChallengeResponse(): CMsgClientToGCRequestActiveGuildChallengeResponse {
  return { result: 0, activeChallenge: undefined };
}

export const CMsgClientToGCRequestActiveGuildChallengeResponse = {
  encode(
    message: CMsgClientToGCRequestActiveGuildChallengeResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.activeChallenge !== undefined) {
      CMsgGuildChallenge.encode(message.activeChallenge, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestActiveGuildChallengeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestActiveGuildChallengeResponse();
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

          message.activeChallenge = CMsgGuildChallenge.decode(reader, reader.uint32());
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

function createBaseCMsgGCToClientActiveGuildChallengeUpdated(): CMsgGCToClientActiveGuildChallengeUpdated {
  return { guildId: 0, eventId: 0, activeChallenge: undefined };
}

export const CMsgGCToClientActiveGuildChallengeUpdated = {
  encode(message: CMsgGCToClientActiveGuildChallengeUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    if (message.activeChallenge !== undefined) {
      CMsgGuildChallenge.encode(message.activeChallenge, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientActiveGuildChallengeUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientActiveGuildChallengeUpdated();
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

          message.eventId = reader.int32() as any;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.activeChallenge = CMsgGuildChallenge.decode(reader, reader.uint32());
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

function createBaseCMsgClientToGCRequestGuildEventMembers(): CMsgClientToGCRequestGuildEventMembers {
  return { guildId: 0, eventId: 0 };
}

export const CMsgClientToGCRequestGuildEventMembers = {
  encode(message: CMsgClientToGCRequestGuildEventMembers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestGuildEventMembers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestGuildEventMembers();
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

          message.eventId = reader.int32() as any;
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

function createBaseCMsgClientToGCRequestGuildEventMembersResponse(): CMsgClientToGCRequestGuildEventMembersResponse {
  return { result: 0, members: [] };
}

export const CMsgClientToGCRequestGuildEventMembersResponse = {
  encode(
    message: CMsgClientToGCRequestGuildEventMembersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    for (const v of message.members) {
      CMsgGuildEventMember.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestGuildEventMembersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestGuildEventMembersResponse();
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

          message.members.push(CMsgGuildEventMember.decode(reader, reader.uint32()));
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

function createBaseCMsgGuildLeaderboardCombinedResponse(): CMsgGuildLeaderboardCombinedResponse {
  return {
    eventId: 0,
    region: 0,
    lastUpdated: 0,
    guildId: [],
    rank: [],
    currentPercentile: [],
    weeklyPercentile: [],
    points: [],
  };
}

export const CMsgGuildLeaderboardCombinedResponse = {
  encode(message: CMsgGuildLeaderboardCombinedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.region !== 0) {
      writer.uint32(16).uint32(message.region);
    }
    if (message.lastUpdated !== 0) {
      writer.uint32(24).uint32(message.lastUpdated);
    }
    writer.uint32(34).fork();
    for (const v of message.guildId) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.rank) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.currentPercentile) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.weeklyPercentile) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(66).fork();
    for (const v of message.points) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGuildLeaderboardCombinedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGuildLeaderboardCombinedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventId = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.region = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.lastUpdated = reader.uint32();
          continue;
        case 4:
          if (tag == 32) {
            message.guildId.push(reader.uint32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.guildId.push(reader.uint32());
            }

            continue;
          }

          break;
        case 5:
          if (tag == 40) {
            message.rank.push(reader.uint32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.rank.push(reader.uint32());
            }

            continue;
          }

          break;
        case 6:
          if (tag == 48) {
            message.currentPercentile.push(reader.uint32());
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.currentPercentile.push(reader.uint32());
            }

            continue;
          }

          break;
        case 7:
          if (tag == 56) {
            message.weeklyPercentile.push(reader.uint32());
            continue;
          }

          if (tag == 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weeklyPercentile.push(reader.uint32());
            }

            continue;
          }

          break;
        case 8:
          if (tag == 64) {
            message.points.push(reader.uint32());
            continue;
          }

          if (tag == 66) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.points.push(reader.uint32());
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

function createBaseCMsgClientToGCClaimLeaderboardRewards(): CMsgClientToGCClaimLeaderboardRewards {
  return { guildId: 0, eventId: 0 };
}

export const CMsgClientToGCClaimLeaderboardRewards = {
  encode(message: CMsgClientToGCClaimLeaderboardRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCClaimLeaderboardRewards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCClaimLeaderboardRewards();
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

          message.eventId = reader.int32() as any;
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

function createBaseCMsgClientToGCClaimLeaderboardRewardsResponse(): CMsgClientToGCClaimLeaderboardRewardsResponse {
  return { result: 0, eventPoints: 0 };
}

export const CMsgClientToGCClaimLeaderboardRewardsResponse = {
  encode(message: CMsgClientToGCClaimLeaderboardRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.eventPoints !== 0) {
      writer.uint32(16).uint32(message.eventPoints);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCClaimLeaderboardRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCClaimLeaderboardRewardsResponse();
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

          message.eventPoints = reader.uint32();
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
