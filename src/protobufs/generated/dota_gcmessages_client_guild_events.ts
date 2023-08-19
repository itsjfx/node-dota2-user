/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { EEvent, eEventFromJSON, eEventToJSON } from "./dota_shared_enums";

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

export function eGuildEventAuditActionFromJSON(object: any): EGuildEventAuditAction {
  switch (object) {
    case 0:
    case "k_EGuildEventAuditAction_Invalid":
      return EGuildEventAuditAction.k_EGuildEventAuditAction_Invalid;
    case 1:
    case "k_EGuildEventAuditAction_DevGrant":
      return EGuildEventAuditAction.k_EGuildEventAuditAction_DevGrant;
    case 2:
    case "k_EGuildEventAuditAction_CompleteContract":
      return EGuildEventAuditAction.k_EGuildEventAuditAction_CompleteContract;
    case 3:
    case "k_EGuildEventAuditAction_CompleteChallenge":
      return EGuildEventAuditAction.k_EGuildEventAuditAction_CompleteChallenge;
    case 4:
    case "k_EGuildEventAuditAction_CompleteMatch_Winner":
      return EGuildEventAuditAction.k_EGuildEventAuditAction_CompleteMatch_Winner;
    case 5:
    case "k_EGuildEventAuditAction_ChallengeProgress":
      return EGuildEventAuditAction.k_EGuildEventAuditAction_ChallengeProgress;
    case 6:
    case "k_EGuildEventAuditAction_CompleteMatch_Loser":
      return EGuildEventAuditAction.k_EGuildEventAuditAction_CompleteMatch_Loser;
    case 7:
    case "k_EGuildEventAuditAction_WeeklyLeaderboard":
      return EGuildEventAuditAction.k_EGuildEventAuditAction_WeeklyLeaderboard;
    case 8:
    case "k_EGuildEventAuditAction_ManualGrant":
      return EGuildEventAuditAction.k_EGuildEventAuditAction_ManualGrant;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGuildEventAuditAction");
  }
}

export function eGuildEventAuditActionToJSON(object: EGuildEventAuditAction): string {
  switch (object) {
    case EGuildEventAuditAction.k_EGuildEventAuditAction_Invalid:
      return "k_EGuildEventAuditAction_Invalid";
    case EGuildEventAuditAction.k_EGuildEventAuditAction_DevGrant:
      return "k_EGuildEventAuditAction_DevGrant";
    case EGuildEventAuditAction.k_EGuildEventAuditAction_CompleteContract:
      return "k_EGuildEventAuditAction_CompleteContract";
    case EGuildEventAuditAction.k_EGuildEventAuditAction_CompleteChallenge:
      return "k_EGuildEventAuditAction_CompleteChallenge";
    case EGuildEventAuditAction.k_EGuildEventAuditAction_CompleteMatch_Winner:
      return "k_EGuildEventAuditAction_CompleteMatch_Winner";
    case EGuildEventAuditAction.k_EGuildEventAuditAction_ChallengeProgress:
      return "k_EGuildEventAuditAction_ChallengeProgress";
    case EGuildEventAuditAction.k_EGuildEventAuditAction_CompleteMatch_Loser:
      return "k_EGuildEventAuditAction_CompleteMatch_Loser";
    case EGuildEventAuditAction.k_EGuildEventAuditAction_WeeklyLeaderboard:
      return "k_EGuildEventAuditAction_WeeklyLeaderboard";
    case EGuildEventAuditAction.k_EGuildEventAuditAction_ManualGrant:
      return "k_EGuildEventAuditAction_ManualGrant";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EGuildEventAuditAction");
  }
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

export function cMsgClientToGCRequestAccountGuildEventDataResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidEvent":
      return CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eInvalidEvent;
    case 6:
    case "k_eInvalidGuild":
      return CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eInvalidGuild;
    case 7:
    case "k_eNotMember":
      return CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eNotMember;
    case 8:
    case "k_eInvalidGuildEvent":
      return CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eInvalidGuildEvent;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse",
      );
  }
}

export function cMsgClientToGCRequestAccountGuildEventDataResponse_EResponseToJSON(
  object: CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eInvalidEvent:
      return "k_eInvalidEvent";
    case CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eNotMember:
      return "k_eNotMember";
    case CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse.k_eInvalidGuildEvent:
      return "k_eInvalidGuildEvent";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse",
      );
  }
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

export function cMsgClientToGCRequestActiveGuildContractsResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCRequestActiveGuildContractsResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidEvent":
      return CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eInvalidEvent;
    case 6:
    case "k_eInvalidGuild":
      return CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eInvalidGuild;
    case 7:
    case "k_eNotMember":
      return CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eNotMember;
    case 8:
    case "k_eInvalidGuildEvent":
      return CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eInvalidGuildEvent;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestActiveGuildContractsResponse_EResponse",
      );
  }
}

export function cMsgClientToGCRequestActiveGuildContractsResponse_EResponseToJSON(
  object: CMsgClientToGCRequestActiveGuildContractsResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eInvalidEvent:
      return "k_eInvalidEvent";
    case CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eNotMember:
      return "k_eNotMember";
    case CMsgClientToGCRequestActiveGuildContractsResponse_EResponse.k_eInvalidGuildEvent:
      return "k_eInvalidGuildEvent";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestActiveGuildContractsResponse_EResponse",
      );
  }
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

export function cMsgClientToGCSelectGuildContractResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCSelectGuildContractResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCSelectGuildContractResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCSelectGuildContractResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCSelectGuildContractResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCSelectGuildContractResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCSelectGuildContractResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidEvent":
      return CMsgClientToGCSelectGuildContractResponse_EResponse.k_eInvalidEvent;
    case 6:
    case "k_eInvalidGuild":
      return CMsgClientToGCSelectGuildContractResponse_EResponse.k_eInvalidGuild;
    case 7:
    case "k_eNotMember":
      return CMsgClientToGCSelectGuildContractResponse_EResponse.k_eNotMember;
    case 8:
    case "k_eInvalidGuildEvent":
      return CMsgClientToGCSelectGuildContractResponse_EResponse.k_eInvalidGuildEvent;
    case 9:
    case "k_eInvalidContractID":
      return CMsgClientToGCSelectGuildContractResponse_EResponse.k_eInvalidContractID;
    case 10:
    case "k_eAlreadyAssigned":
      return CMsgClientToGCSelectGuildContractResponse_EResponse.k_eAlreadyAssigned;
    case 11:
    case "k_eInvalidContractSlot":
      return CMsgClientToGCSelectGuildContractResponse_EResponse.k_eInvalidContractSlot;
    case 12:
    case "k_eContractSlotLockedGuild":
      return CMsgClientToGCSelectGuildContractResponse_EResponse.k_eContractSlotLockedGuild;
    case 13:
    case "k_eContractSlotCooldown":
      return CMsgClientToGCSelectGuildContractResponse_EResponse.k_eContractSlotCooldown;
    case 14:
    case "k_eContractDuplicate":
      return CMsgClientToGCSelectGuildContractResponse_EResponse.k_eContractDuplicate;
    case 15:
    case "k_eContractSlotTimeError":
      return CMsgClientToGCSelectGuildContractResponse_EResponse.k_eContractSlotTimeError;
    case 16:
    case "k_eContractSlotLockedDotaPlus":
      return CMsgClientToGCSelectGuildContractResponse_EResponse.k_eContractSlotLockedDotaPlus;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCSelectGuildContractResponse_EResponse",
      );
  }
}

export function cMsgClientToGCSelectGuildContractResponse_EResponseToJSON(
  object: CMsgClientToGCSelectGuildContractResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCSelectGuildContractResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCSelectGuildContractResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCSelectGuildContractResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCSelectGuildContractResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCSelectGuildContractResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCSelectGuildContractResponse_EResponse.k_eInvalidEvent:
      return "k_eInvalidEvent";
    case CMsgClientToGCSelectGuildContractResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCSelectGuildContractResponse_EResponse.k_eNotMember:
      return "k_eNotMember";
    case CMsgClientToGCSelectGuildContractResponse_EResponse.k_eInvalidGuildEvent:
      return "k_eInvalidGuildEvent";
    case CMsgClientToGCSelectGuildContractResponse_EResponse.k_eInvalidContractID:
      return "k_eInvalidContractID";
    case CMsgClientToGCSelectGuildContractResponse_EResponse.k_eAlreadyAssigned:
      return "k_eAlreadyAssigned";
    case CMsgClientToGCSelectGuildContractResponse_EResponse.k_eInvalidContractSlot:
      return "k_eInvalidContractSlot";
    case CMsgClientToGCSelectGuildContractResponse_EResponse.k_eContractSlotLockedGuild:
      return "k_eContractSlotLockedGuild";
    case CMsgClientToGCSelectGuildContractResponse_EResponse.k_eContractSlotCooldown:
      return "k_eContractSlotCooldown";
    case CMsgClientToGCSelectGuildContractResponse_EResponse.k_eContractDuplicate:
      return "k_eContractDuplicate";
    case CMsgClientToGCSelectGuildContractResponse_EResponse.k_eContractSlotTimeError:
      return "k_eContractSlotTimeError";
    case CMsgClientToGCSelectGuildContractResponse_EResponse.k_eContractSlotLockedDotaPlus:
      return "k_eContractSlotLockedDotaPlus";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCSelectGuildContractResponse_EResponse",
      );
  }
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

export function cMsgClientToGCRequestActiveGuildChallengeResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidEvent":
      return CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eInvalidEvent;
    case 6:
    case "k_eInvalidGuild":
      return CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eInvalidGuild;
    case 7:
    case "k_eNotMember":
      return CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eNotMember;
    case 8:
    case "k_eInvalidGuildEvent":
      return CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eInvalidGuildEvent;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse",
      );
  }
}

export function cMsgClientToGCRequestActiveGuildChallengeResponse_EResponseToJSON(
  object: CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eInvalidEvent:
      return "k_eInvalidEvent";
    case CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eNotMember:
      return "k_eNotMember";
    case CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse.k_eInvalidGuildEvent:
      return "k_eInvalidGuildEvent";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse",
      );
  }
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

export function cMsgClientToGCRequestGuildEventMembersResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCRequestGuildEventMembersResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidEvent":
      return CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eInvalidEvent;
    case 6:
    case "k_eInvalidGuild":
      return CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eInvalidGuild;
    case 7:
    case "k_eNotMember":
      return CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eNotMember;
    case 8:
    case "k_eInvalidGuildEvent":
      return CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eInvalidGuildEvent;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestGuildEventMembersResponse_EResponse",
      );
  }
}

export function cMsgClientToGCRequestGuildEventMembersResponse_EResponseToJSON(
  object: CMsgClientToGCRequestGuildEventMembersResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eInvalidEvent:
      return "k_eInvalidEvent";
    case CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eNotMember:
      return "k_eNotMember";
    case CMsgClientToGCRequestGuildEventMembersResponse_EResponse.k_eInvalidGuildEvent:
      return "k_eInvalidGuildEvent";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestGuildEventMembersResponse_EResponse",
      );
  }
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

export function cMsgClientToGCClaimLeaderboardRewardsResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eInvalidEvent":
      return CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eInvalidEvent;
    case 6:
    case "k_eInvalidGuild":
      return CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eInvalidGuild;
    case 7:
    case "k_eNotMember":
      return CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eNotMember;
    case 8:
    case "k_eInvalidGuildEvent":
      return CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eInvalidGuildEvent;
    case 9:
    case "k_eDoesNotQualify":
      return CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eDoesNotQualify;
    case 10:
    case "k_eAlreadyClaimed":
      return CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eAlreadyClaimed;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse",
      );
  }
}

export function cMsgClientToGCClaimLeaderboardRewardsResponse_EResponseToJSON(
  object: CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eInvalidEvent:
      return "k_eInvalidEvent";
    case CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eInvalidGuild:
      return "k_eInvalidGuild";
    case CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eNotMember:
      return "k_eNotMember";
    case CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eInvalidGuildEvent:
      return "k_eInvalidGuildEvent";
    case CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eDoesNotQualify:
      return "k_eDoesNotQualify";
    case CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse.k_eAlreadyClaimed:
      return "k_eAlreadyClaimed";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse",
      );
  }
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

  fromJSON(object: any): CMsgGuildContract {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "0",
      challengeInstanceId: isSet(object.challengeInstanceId) ? Number(object.challengeInstanceId) : 0,
      challengeParameter: isSet(object.challengeParameter) ? Number(object.challengeParameter) : 0,
      challengeTimestamp: isSet(object.challengeTimestamp) ? Number(object.challengeTimestamp) : 0,
      assignedAccountId: isSet(object.assignedAccountId) ? Number(object.assignedAccountId) : 0,
      contractFlags: isSet(object.contractFlags) ? Number(object.contractFlags) : 0,
    };
  },

  toJSON(message: CMsgGuildContract): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.challengeInstanceId !== undefined && (obj.challengeInstanceId = Math.round(message.challengeInstanceId));
    message.challengeParameter !== undefined && (obj.challengeParameter = Math.round(message.challengeParameter));
    message.challengeTimestamp !== undefined && (obj.challengeTimestamp = Math.round(message.challengeTimestamp));
    message.assignedAccountId !== undefined && (obj.assignedAccountId = Math.round(message.assignedAccountId));
    message.contractFlags !== undefined && (obj.contractFlags = Math.round(message.contractFlags));
    return obj;
  },

  create(base?: DeepPartial<CMsgGuildContract>): CMsgGuildContract {
    return CMsgGuildContract.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGuildContract>): CMsgGuildContract {
    const message = createBaseCMsgGuildContract();
    message.contractId = object.contractId ?? "0";
    message.challengeInstanceId = object.challengeInstanceId ?? 0;
    message.challengeParameter = object.challengeParameter ?? 0;
    message.challengeTimestamp = object.challengeTimestamp ?? 0;
    message.assignedAccountId = object.assignedAccountId ?? 0;
    message.contractFlags = object.contractFlags ?? 0;
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

  fromJSON(object: any): CMsgGuildContractSlot {
    return { contract: isSet(object.contract) ? CMsgGuildContract.fromJSON(object.contract) : undefined };
  },

  toJSON(message: CMsgGuildContractSlot): unknown {
    const obj: any = {};
    message.contract !== undefined &&
      (obj.contract = message.contract ? CMsgGuildContract.toJSON(message.contract) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgGuildContractSlot>): CMsgGuildContractSlot {
    return CMsgGuildContractSlot.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGuildContractSlot>): CMsgGuildContractSlot {
    const message = createBaseCMsgGuildContractSlot();
    message.contract = (object.contract !== undefined && object.contract !== null)
      ? CMsgGuildContract.fromPartial(object.contract)
      : undefined;
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

  fromJSON(object: any): CMsgAccountGuildEventData {
    return {
      guildPoints: isSet(object.guildPoints) ? Number(object.guildPoints) : 0,
      contractsRefreshedTimestamp: isSet(object.contractsRefreshedTimestamp)
        ? Number(object.contractsRefreshedTimestamp)
        : 0,
      contractSlots: Array.isArray(object?.contractSlots)
        ? object.contractSlots.map((e: any) => CMsgGuildContractSlot.fromJSON(e))
        : [],
      completedChallengeCount: isSet(object.completedChallengeCount) ? Number(object.completedChallengeCount) : 0,
      challengesRefreshTimestamp: isSet(object.challengesRefreshTimestamp)
        ? Number(object.challengesRefreshTimestamp)
        : 0,
      guildWeeklyPercentile: isSet(object.guildWeeklyPercentile) ? Number(object.guildWeeklyPercentile) : 0,
      guildWeeklyLastTimestamp: isSet(object.guildWeeklyLastTimestamp) ? Number(object.guildWeeklyLastTimestamp) : 0,
      lastWeeklyClaimTime: isSet(object.lastWeeklyClaimTime) ? Number(object.lastWeeklyClaimTime) : 0,
      guildCurrentPercentile: isSet(object.guildCurrentPercentile) ? Number(object.guildCurrentPercentile) : 0,
    };
  },

  toJSON(message: CMsgAccountGuildEventData): unknown {
    const obj: any = {};
    message.guildPoints !== undefined && (obj.guildPoints = Math.round(message.guildPoints));
    message.contractsRefreshedTimestamp !== undefined &&
      (obj.contractsRefreshedTimestamp = Math.round(message.contractsRefreshedTimestamp));
    if (message.contractSlots) {
      obj.contractSlots = message.contractSlots.map((e) => e ? CMsgGuildContractSlot.toJSON(e) : undefined);
    } else {
      obj.contractSlots = [];
    }
    message.completedChallengeCount !== undefined &&
      (obj.completedChallengeCount = Math.round(message.completedChallengeCount));
    message.challengesRefreshTimestamp !== undefined &&
      (obj.challengesRefreshTimestamp = Math.round(message.challengesRefreshTimestamp));
    message.guildWeeklyPercentile !== undefined &&
      (obj.guildWeeklyPercentile = Math.round(message.guildWeeklyPercentile));
    message.guildWeeklyLastTimestamp !== undefined &&
      (obj.guildWeeklyLastTimestamp = Math.round(message.guildWeeklyLastTimestamp));
    message.lastWeeklyClaimTime !== undefined && (obj.lastWeeklyClaimTime = Math.round(message.lastWeeklyClaimTime));
    message.guildCurrentPercentile !== undefined &&
      (obj.guildCurrentPercentile = Math.round(message.guildCurrentPercentile));
    return obj;
  },

  create(base?: DeepPartial<CMsgAccountGuildEventData>): CMsgAccountGuildEventData {
    return CMsgAccountGuildEventData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAccountGuildEventData>): CMsgAccountGuildEventData {
    const message = createBaseCMsgAccountGuildEventData();
    message.guildPoints = object.guildPoints ?? 0;
    message.contractsRefreshedTimestamp = object.contractsRefreshedTimestamp ?? 0;
    message.contractSlots = object.contractSlots?.map((e) => CMsgGuildContractSlot.fromPartial(e)) || [];
    message.completedChallengeCount = object.completedChallengeCount ?? 0;
    message.challengesRefreshTimestamp = object.challengesRefreshTimestamp ?? 0;
    message.guildWeeklyPercentile = object.guildWeeklyPercentile ?? 0;
    message.guildWeeklyLastTimestamp = object.guildWeeklyLastTimestamp ?? 0;
    message.lastWeeklyClaimTime = object.lastWeeklyClaimTime ?? 0;
    message.guildCurrentPercentile = object.guildCurrentPercentile ?? 0;
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

  fromJSON(object: any): CMsgGuildActiveContracts {
    return {
      contractsRefreshedTimestamp: isSet(object.contractsRefreshedTimestamp)
        ? Number(object.contractsRefreshedTimestamp)
        : 0,
      contracts: Array.isArray(object?.contracts)
        ? object.contracts.map((e: any) => CMsgGuildContract.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGuildActiveContracts): unknown {
    const obj: any = {};
    message.contractsRefreshedTimestamp !== undefined &&
      (obj.contractsRefreshedTimestamp = Math.round(message.contractsRefreshedTimestamp));
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e ? CMsgGuildContract.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGuildActiveContracts>): CMsgGuildActiveContracts {
    return CMsgGuildActiveContracts.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGuildActiveContracts>): CMsgGuildActiveContracts {
    const message = createBaseCMsgGuildActiveContracts();
    message.contractsRefreshedTimestamp = object.contractsRefreshedTimestamp ?? 0;
    message.contracts = object.contracts?.map((e) => CMsgGuildContract.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgGuildChallenge {
    return {
      challengeInstanceId: isSet(object.challengeInstanceId) ? Number(object.challengeInstanceId) : 0,
      challengeParameter: isSet(object.challengeParameter) ? Number(object.challengeParameter) : 0,
      challengeTimestamp: isSet(object.challengeTimestamp) ? Number(object.challengeTimestamp) : 0,
      challengeProgress: isSet(object.challengeProgress) ? Number(object.challengeProgress) : 0,
      challengeFlags: isSet(object.challengeFlags) ? Number(object.challengeFlags) : 0,
    };
  },

  toJSON(message: CMsgGuildChallenge): unknown {
    const obj: any = {};
    message.challengeInstanceId !== undefined && (obj.challengeInstanceId = Math.round(message.challengeInstanceId));
    message.challengeParameter !== undefined && (obj.challengeParameter = Math.round(message.challengeParameter));
    message.challengeTimestamp !== undefined && (obj.challengeTimestamp = Math.round(message.challengeTimestamp));
    message.challengeProgress !== undefined && (obj.challengeProgress = Math.round(message.challengeProgress));
    message.challengeFlags !== undefined && (obj.challengeFlags = Math.round(message.challengeFlags));
    return obj;
  },

  create(base?: DeepPartial<CMsgGuildChallenge>): CMsgGuildChallenge {
    return CMsgGuildChallenge.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGuildChallenge>): CMsgGuildChallenge {
    const message = createBaseCMsgGuildChallenge();
    message.challengeInstanceId = object.challengeInstanceId ?? 0;
    message.challengeParameter = object.challengeParameter ?? 0;
    message.challengeTimestamp = object.challengeTimestamp ?? 0;
    message.challengeProgress = object.challengeProgress ?? 0;
    message.challengeFlags = object.challengeFlags ?? 0;
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

  fromJSON(object: any): CMsgGuildEventMember {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      guildPointsEarned: isSet(object.guildPointsEarned) ? Number(object.guildPointsEarned) : 0,
    };
  },

  toJSON(message: CMsgGuildEventMember): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.guildPointsEarned !== undefined && (obj.guildPointsEarned = Math.round(message.guildPointsEarned));
    return obj;
  },

  create(base?: DeepPartial<CMsgGuildEventMember>): CMsgGuildEventMember {
    return CMsgGuildEventMember.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGuildEventMember>): CMsgGuildEventMember {
    const message = createBaseCMsgGuildEventMember();
    message.accountId = object.accountId ?? 0;
    message.guildPointsEarned = object.guildPointsEarned ?? 0;
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

  fromJSON(object: any): CMsgClientToGCRequestAccountGuildEventData {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCRequestAccountGuildEventData): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCRequestAccountGuildEventData>): CMsgClientToGCRequestAccountGuildEventData {
    return CMsgClientToGCRequestAccountGuildEventData.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCRequestAccountGuildEventData>,
  ): CMsgClientToGCRequestAccountGuildEventData {
    const message = createBaseCMsgClientToGCRequestAccountGuildEventData();
    message.guildId = object.guildId ?? 0;
    message.eventId = object.eventId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCRequestAccountGuildEventDataResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCRequestAccountGuildEventDataResponse_EResponseFromJSON(object.result)
        : 0,
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      eventData: isSet(object.eventData) ? CMsgAccountGuildEventData.fromJSON(object.eventData) : undefined,
    };
  },

  toJSON(message: CMsgClientToGCRequestAccountGuildEventDataResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCRequestAccountGuildEventDataResponse_EResponseToJSON(message.result));
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.eventData !== undefined &&
      (obj.eventData = message.eventData ? CMsgAccountGuildEventData.toJSON(message.eventData) : undefined);
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCRequestAccountGuildEventDataResponse>,
  ): CMsgClientToGCRequestAccountGuildEventDataResponse {
    return CMsgClientToGCRequestAccountGuildEventDataResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCRequestAccountGuildEventDataResponse>,
  ): CMsgClientToGCRequestAccountGuildEventDataResponse {
    const message = createBaseCMsgClientToGCRequestAccountGuildEventDataResponse();
    message.result = object.result ?? 0;
    message.eventId = object.eventId ?? 0;
    message.eventData = (object.eventData !== undefined && object.eventData !== null)
      ? CMsgAccountGuildEventData.fromPartial(object.eventData)
      : undefined;
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

  fromJSON(object: any): CMsgGCToClientAccountGuildEventDataUpdated {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      updateFlags: isSet(object.updateFlags) ? Number(object.updateFlags) : 0,
      guildEventData: isSet(object.guildEventData)
        ? CMsgAccountGuildEventData.fromJSON(object.guildEventData)
        : undefined,
      contractsUpdated: isSet(object.contractsUpdated) ? Boolean(object.contractsUpdated) : false,
    };
  },

  toJSON(message: CMsgGCToClientAccountGuildEventDataUpdated): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.updateFlags !== undefined && (obj.updateFlags = Math.round(message.updateFlags));
    message.guildEventData !== undefined && (obj.guildEventData = message.guildEventData
      ? CMsgAccountGuildEventData.toJSON(message.guildEventData)
      : undefined);
    message.contractsUpdated !== undefined && (obj.contractsUpdated = message.contractsUpdated);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToClientAccountGuildEventDataUpdated>): CMsgGCToClientAccountGuildEventDataUpdated {
    return CMsgGCToClientAccountGuildEventDataUpdated.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgGCToClientAccountGuildEventDataUpdated>,
  ): CMsgGCToClientAccountGuildEventDataUpdated {
    const message = createBaseCMsgGCToClientAccountGuildEventDataUpdated();
    message.guildId = object.guildId ?? 0;
    message.eventId = object.eventId ?? 0;
    message.updateFlags = object.updateFlags ?? 0;
    message.guildEventData = (object.guildEventData !== undefined && object.guildEventData !== null)
      ? CMsgAccountGuildEventData.fromPartial(object.guildEventData)
      : undefined;
    message.contractsUpdated = object.contractsUpdated ?? false;
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

  fromJSON(object: any): CMsgClientToGCRequestActiveGuildContracts {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCRequestActiveGuildContracts): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCRequestActiveGuildContracts>): CMsgClientToGCRequestActiveGuildContracts {
    return CMsgClientToGCRequestActiveGuildContracts.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCRequestActiveGuildContracts>,
  ): CMsgClientToGCRequestActiveGuildContracts {
    const message = createBaseCMsgClientToGCRequestActiveGuildContracts();
    message.guildId = object.guildId ?? 0;
    message.eventId = object.eventId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCRequestActiveGuildContractsResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCRequestActiveGuildContractsResponse_EResponseFromJSON(object.result)
        : 0,
      activeContracts: isSet(object.activeContracts)
        ? CMsgGuildActiveContracts.fromJSON(object.activeContracts)
        : undefined,
      activeChallenges: isSet(object.activeChallenges)
        ? CMsgGuildChallenge.fromJSON(object.activeChallenges)
        : undefined,
    };
  },

  toJSON(message: CMsgClientToGCRequestActiveGuildContractsResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCRequestActiveGuildContractsResponse_EResponseToJSON(message.result));
    message.activeContracts !== undefined && (obj.activeContracts = message.activeContracts
      ? CMsgGuildActiveContracts.toJSON(message.activeContracts)
      : undefined);
    message.activeChallenges !== undefined &&
      (obj.activeChallenges = message.activeChallenges
        ? CMsgGuildChallenge.toJSON(message.activeChallenges)
        : undefined);
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCRequestActiveGuildContractsResponse>,
  ): CMsgClientToGCRequestActiveGuildContractsResponse {
    return CMsgClientToGCRequestActiveGuildContractsResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCRequestActiveGuildContractsResponse>,
  ): CMsgClientToGCRequestActiveGuildContractsResponse {
    const message = createBaseCMsgClientToGCRequestActiveGuildContractsResponse();
    message.result = object.result ?? 0;
    message.activeContracts = (object.activeContracts !== undefined && object.activeContracts !== null)
      ? CMsgGuildActiveContracts.fromPartial(object.activeContracts)
      : undefined;
    message.activeChallenges = (object.activeChallenges !== undefined && object.activeChallenges !== null)
      ? CMsgGuildChallenge.fromPartial(object.activeChallenges)
      : undefined;
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

  fromJSON(object: any): CMsgGCToClientActiveGuildContractsUpdated {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
    };
  },

  toJSON(message: CMsgGCToClientActiveGuildContractsUpdated): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToClientActiveGuildContractsUpdated>): CMsgGCToClientActiveGuildContractsUpdated {
    return CMsgGCToClientActiveGuildContractsUpdated.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgGCToClientActiveGuildContractsUpdated>,
  ): CMsgGCToClientActiveGuildContractsUpdated {
    const message = createBaseCMsgGCToClientActiveGuildContractsUpdated();
    message.guildId = object.guildId ?? 0;
    message.eventId = object.eventId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCSelectGuildContract {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      contractId: isSet(object.contractId) ? String(object.contractId) : "0",
      contractSlot: isSet(object.contractSlot) ? Number(object.contractSlot) : 0,
    };
  },

  toJSON(message: CMsgClientToGCSelectGuildContract): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.contractSlot !== undefined && (obj.contractSlot = Math.round(message.contractSlot));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCSelectGuildContract>): CMsgClientToGCSelectGuildContract {
    return CMsgClientToGCSelectGuildContract.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCSelectGuildContract>): CMsgClientToGCSelectGuildContract {
    const message = createBaseCMsgClientToGCSelectGuildContract();
    message.guildId = object.guildId ?? 0;
    message.eventId = object.eventId ?? 0;
    message.contractId = object.contractId ?? "0";
    message.contractSlot = object.contractSlot ?? 0;
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

  fromJSON(object: any): CMsgClientToGCSelectGuildContractResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCSelectGuildContractResponse_EResponseFromJSON(object.result) : 0,
    };
  },

  toJSON(message: CMsgClientToGCSelectGuildContractResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCSelectGuildContractResponse_EResponseToJSON(message.result));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCSelectGuildContractResponse>): CMsgClientToGCSelectGuildContractResponse {
    return CMsgClientToGCSelectGuildContractResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCSelectGuildContractResponse>,
  ): CMsgClientToGCSelectGuildContractResponse {
    const message = createBaseCMsgClientToGCSelectGuildContractResponse();
    message.result = object.result ?? 0;
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

  fromJSON(object: any): CMsgClientToGCRequestActiveGuildChallenge {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCRequestActiveGuildChallenge): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCRequestActiveGuildChallenge>): CMsgClientToGCRequestActiveGuildChallenge {
    return CMsgClientToGCRequestActiveGuildChallenge.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCRequestActiveGuildChallenge>,
  ): CMsgClientToGCRequestActiveGuildChallenge {
    const message = createBaseCMsgClientToGCRequestActiveGuildChallenge();
    message.guildId = object.guildId ?? 0;
    message.eventId = object.eventId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCRequestActiveGuildChallengeResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCRequestActiveGuildChallengeResponse_EResponseFromJSON(object.result)
        : 0,
      activeChallenge: isSet(object.activeChallenge) ? CMsgGuildChallenge.fromJSON(object.activeChallenge) : undefined,
    };
  },

  toJSON(message: CMsgClientToGCRequestActiveGuildChallengeResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCRequestActiveGuildChallengeResponse_EResponseToJSON(message.result));
    message.activeChallenge !== undefined &&
      (obj.activeChallenge = message.activeChallenge ? CMsgGuildChallenge.toJSON(message.activeChallenge) : undefined);
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCRequestActiveGuildChallengeResponse>,
  ): CMsgClientToGCRequestActiveGuildChallengeResponse {
    return CMsgClientToGCRequestActiveGuildChallengeResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCRequestActiveGuildChallengeResponse>,
  ): CMsgClientToGCRequestActiveGuildChallengeResponse {
    const message = createBaseCMsgClientToGCRequestActiveGuildChallengeResponse();
    message.result = object.result ?? 0;
    message.activeChallenge = (object.activeChallenge !== undefined && object.activeChallenge !== null)
      ? CMsgGuildChallenge.fromPartial(object.activeChallenge)
      : undefined;
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

  fromJSON(object: any): CMsgGCToClientActiveGuildChallengeUpdated {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      activeChallenge: isSet(object.activeChallenge) ? CMsgGuildChallenge.fromJSON(object.activeChallenge) : undefined,
    };
  },

  toJSON(message: CMsgGCToClientActiveGuildChallengeUpdated): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.activeChallenge !== undefined &&
      (obj.activeChallenge = message.activeChallenge ? CMsgGuildChallenge.toJSON(message.activeChallenge) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgGCToClientActiveGuildChallengeUpdated>): CMsgGCToClientActiveGuildChallengeUpdated {
    return CMsgGCToClientActiveGuildChallengeUpdated.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgGCToClientActiveGuildChallengeUpdated>,
  ): CMsgGCToClientActiveGuildChallengeUpdated {
    const message = createBaseCMsgGCToClientActiveGuildChallengeUpdated();
    message.guildId = object.guildId ?? 0;
    message.eventId = object.eventId ?? 0;
    message.activeChallenge = (object.activeChallenge !== undefined && object.activeChallenge !== null)
      ? CMsgGuildChallenge.fromPartial(object.activeChallenge)
      : undefined;
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

  fromJSON(object: any): CMsgClientToGCRequestGuildEventMembers {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCRequestGuildEventMembers): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCRequestGuildEventMembers>): CMsgClientToGCRequestGuildEventMembers {
    return CMsgClientToGCRequestGuildEventMembers.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCRequestGuildEventMembers>): CMsgClientToGCRequestGuildEventMembers {
    const message = createBaseCMsgClientToGCRequestGuildEventMembers();
    message.guildId = object.guildId ?? 0;
    message.eventId = object.eventId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCRequestGuildEventMembersResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCRequestGuildEventMembersResponse_EResponseFromJSON(object.result)
        : 0,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => CMsgGuildEventMember.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgClientToGCRequestGuildEventMembersResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCRequestGuildEventMembersResponse_EResponseToJSON(message.result));
    if (message.members) {
      obj.members = message.members.map((e) => e ? CMsgGuildEventMember.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCRequestGuildEventMembersResponse>,
  ): CMsgClientToGCRequestGuildEventMembersResponse {
    return CMsgClientToGCRequestGuildEventMembersResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCRequestGuildEventMembersResponse>,
  ): CMsgClientToGCRequestGuildEventMembersResponse {
    const message = createBaseCMsgClientToGCRequestGuildEventMembersResponse();
    message.result = object.result ?? 0;
    message.members = object.members?.map((e) => CMsgGuildEventMember.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgGuildLeaderboardCombinedResponse {
    return {
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      region: isSet(object.region) ? Number(object.region) : 0,
      lastUpdated: isSet(object.lastUpdated) ? Number(object.lastUpdated) : 0,
      guildId: Array.isArray(object?.guildId) ? object.guildId.map((e: any) => Number(e)) : [],
      rank: Array.isArray(object?.rank) ? object.rank.map((e: any) => Number(e)) : [],
      currentPercentile: Array.isArray(object?.currentPercentile)
        ? object.currentPercentile.map((e: any) => Number(e))
        : [],
      weeklyPercentile: Array.isArray(object?.weeklyPercentile)
        ? object.weeklyPercentile.map((e: any) => Number(e))
        : [],
      points: Array.isArray(object?.points) ? object.points.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgGuildLeaderboardCombinedResponse): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.region !== undefined && (obj.region = Math.round(message.region));
    message.lastUpdated !== undefined && (obj.lastUpdated = Math.round(message.lastUpdated));
    if (message.guildId) {
      obj.guildId = message.guildId.map((e) => Math.round(e));
    } else {
      obj.guildId = [];
    }
    if (message.rank) {
      obj.rank = message.rank.map((e) => Math.round(e));
    } else {
      obj.rank = [];
    }
    if (message.currentPercentile) {
      obj.currentPercentile = message.currentPercentile.map((e) => Math.round(e));
    } else {
      obj.currentPercentile = [];
    }
    if (message.weeklyPercentile) {
      obj.weeklyPercentile = message.weeklyPercentile.map((e) => Math.round(e));
    } else {
      obj.weeklyPercentile = [];
    }
    if (message.points) {
      obj.points = message.points.map((e) => Math.round(e));
    } else {
      obj.points = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgGuildLeaderboardCombinedResponse>): CMsgGuildLeaderboardCombinedResponse {
    return CMsgGuildLeaderboardCombinedResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgGuildLeaderboardCombinedResponse>): CMsgGuildLeaderboardCombinedResponse {
    const message = createBaseCMsgGuildLeaderboardCombinedResponse();
    message.eventId = object.eventId ?? 0;
    message.region = object.region ?? 0;
    message.lastUpdated = object.lastUpdated ?? 0;
    message.guildId = object.guildId?.map((e) => e) || [];
    message.rank = object.rank?.map((e) => e) || [];
    message.currentPercentile = object.currentPercentile?.map((e) => e) || [];
    message.weeklyPercentile = object.weeklyPercentile?.map((e) => e) || [];
    message.points = object.points?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgClientToGCClaimLeaderboardRewards {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCClaimLeaderboardRewards): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCClaimLeaderboardRewards>): CMsgClientToGCClaimLeaderboardRewards {
    return CMsgClientToGCClaimLeaderboardRewards.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientToGCClaimLeaderboardRewards>): CMsgClientToGCClaimLeaderboardRewards {
    const message = createBaseCMsgClientToGCClaimLeaderboardRewards();
    message.guildId = object.guildId ?? 0;
    message.eventId = object.eventId ?? 0;
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

  fromJSON(object: any): CMsgClientToGCClaimLeaderboardRewardsResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCClaimLeaderboardRewardsResponse_EResponseFromJSON(object.result) : 0,
      eventPoints: isSet(object.eventPoints) ? Number(object.eventPoints) : 0,
    };
  },

  toJSON(message: CMsgClientToGCClaimLeaderboardRewardsResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCClaimLeaderboardRewardsResponse_EResponseToJSON(message.result));
    message.eventPoints !== undefined && (obj.eventPoints = Math.round(message.eventPoints));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCClaimLeaderboardRewardsResponse>,
  ): CMsgClientToGCClaimLeaderboardRewardsResponse {
    return CMsgClientToGCClaimLeaderboardRewardsResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientToGCClaimLeaderboardRewardsResponse>,
  ): CMsgClientToGCClaimLeaderboardRewardsResponse {
    const message = createBaseCMsgClientToGCClaimLeaderboardRewardsResponse();
    message.result = object.result ?? 0;
    message.eventPoints = object.eventPoints ?? 0;
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
