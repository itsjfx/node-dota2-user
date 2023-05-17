/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ELobbyMemberCoachRequestState,
  eLobbyMemberCoachRequestStateFromJSON,
  eLobbyMemberCoachRequestStateToJSON,
} from "./dota_gcmessages_common_lobby";
import { EMatchOutcome, eMatchOutcomeFromJSON, eMatchOutcomeToJSON } from "./dota_shared_enums";

export enum ECoachTeammateRating {
  k_ECoachTeammateRating_None = 0,
  k_ECoachTeammateRating_Positive = 1,
  k_ECoachTeammateRating_Negative = 2,
  k_ECoachTeammateRating_Abusive = 3,
}

export function eCoachTeammateRatingFromJSON(object: any): ECoachTeammateRating {
  switch (object) {
    case 0:
    case "k_ECoachTeammateRating_None":
      return ECoachTeammateRating.k_ECoachTeammateRating_None;
    case 1:
    case "k_ECoachTeammateRating_Positive":
      return ECoachTeammateRating.k_ECoachTeammateRating_Positive;
    case 2:
    case "k_ECoachTeammateRating_Negative":
      return ECoachTeammateRating.k_ECoachTeammateRating_Negative;
    case 3:
    case "k_ECoachTeammateRating_Abusive":
      return ECoachTeammateRating.k_ECoachTeammateRating_Abusive;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ECoachTeammateRating");
  }
}

export function eCoachTeammateRatingToJSON(object: ECoachTeammateRating): string {
  switch (object) {
    case ECoachTeammateRating.k_ECoachTeammateRating_None:
      return "k_ECoachTeammateRating_None";
    case ECoachTeammateRating.k_ECoachTeammateRating_Positive:
      return "k_ECoachTeammateRating_Positive";
    case ECoachTeammateRating.k_ECoachTeammateRating_Negative:
      return "k_ECoachTeammateRating_Negative";
    case ECoachTeammateRating.k_ECoachTeammateRating_Abusive:
      return "k_ECoachTeammateRating_Abusive";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ECoachTeammateRating");
  }
}

export enum EPrivateCoachingSessionState {
  k_ePrivateCoachingSessionState_Invalid = 0,
  k_ePrivateCoachingSessionState_SearchingForCoach = 1,
  k_ePrivateCoachingSessionState_CoachAssigned = 2,
  k_ePrivateCoachingSessionState_Finished = 3,
  k_ePrivateCoachingSessionState_Expired = 4,
  k_ePrivateCoachingSessionState_Abandoned = 5,
}

export function ePrivateCoachingSessionStateFromJSON(object: any): EPrivateCoachingSessionState {
  switch (object) {
    case 0:
    case "k_ePrivateCoachingSessionState_Invalid":
      return EPrivateCoachingSessionState.k_ePrivateCoachingSessionState_Invalid;
    case 1:
    case "k_ePrivateCoachingSessionState_SearchingForCoach":
      return EPrivateCoachingSessionState.k_ePrivateCoachingSessionState_SearchingForCoach;
    case 2:
    case "k_ePrivateCoachingSessionState_CoachAssigned":
      return EPrivateCoachingSessionState.k_ePrivateCoachingSessionState_CoachAssigned;
    case 3:
    case "k_ePrivateCoachingSessionState_Finished":
      return EPrivateCoachingSessionState.k_ePrivateCoachingSessionState_Finished;
    case 4:
    case "k_ePrivateCoachingSessionState_Expired":
      return EPrivateCoachingSessionState.k_ePrivateCoachingSessionState_Expired;
    case 5:
    case "k_ePrivateCoachingSessionState_Abandoned":
      return EPrivateCoachingSessionState.k_ePrivateCoachingSessionState_Abandoned;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EPrivateCoachingSessionState");
  }
}

export function ePrivateCoachingSessionStateToJSON(object: EPrivateCoachingSessionState): string {
  switch (object) {
    case EPrivateCoachingSessionState.k_ePrivateCoachingSessionState_Invalid:
      return "k_ePrivateCoachingSessionState_Invalid";
    case EPrivateCoachingSessionState.k_ePrivateCoachingSessionState_SearchingForCoach:
      return "k_ePrivateCoachingSessionState_SearchingForCoach";
    case EPrivateCoachingSessionState.k_ePrivateCoachingSessionState_CoachAssigned:
      return "k_ePrivateCoachingSessionState_CoachAssigned";
    case EPrivateCoachingSessionState.k_ePrivateCoachingSessionState_Finished:
      return "k_ePrivateCoachingSessionState_Finished";
    case EPrivateCoachingSessionState.k_ePrivateCoachingSessionState_Expired:
      return "k_ePrivateCoachingSessionState_Expired";
    case EPrivateCoachingSessionState.k_ePrivateCoachingSessionState_Abandoned:
      return "k_ePrivateCoachingSessionState_Abandoned";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EPrivateCoachingSessionState");
  }
}

export enum EPrivateCoachingSessionMemberFlag {
  k_EPrivateCoachingSessionMemberFlag_Requester = 1,
  k_EPrivateCoachingSessionMemberFlag_Coach = 2,
  k_EPrivateCoachingSessionMemberFlag_LeftSession = 4,
}

export function ePrivateCoachingSessionMemberFlagFromJSON(object: any): EPrivateCoachingSessionMemberFlag {
  switch (object) {
    case 1:
    case "k_EPrivateCoachingSessionMemberFlag_Requester":
      return EPrivateCoachingSessionMemberFlag.k_EPrivateCoachingSessionMemberFlag_Requester;
    case 2:
    case "k_EPrivateCoachingSessionMemberFlag_Coach":
      return EPrivateCoachingSessionMemberFlag.k_EPrivateCoachingSessionMemberFlag_Coach;
    case 4:
    case "k_EPrivateCoachingSessionMemberFlag_LeftSession":
      return EPrivateCoachingSessionMemberFlag.k_EPrivateCoachingSessionMemberFlag_LeftSession;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum EPrivateCoachingSessionMemberFlag",
      );
  }
}

export function ePrivateCoachingSessionMemberFlagToJSON(object: EPrivateCoachingSessionMemberFlag): string {
  switch (object) {
    case EPrivateCoachingSessionMemberFlag.k_EPrivateCoachingSessionMemberFlag_Requester:
      return "k_EPrivateCoachingSessionMemberFlag_Requester";
    case EPrivateCoachingSessionMemberFlag.k_EPrivateCoachingSessionMemberFlag_Coach:
      return "k_EPrivateCoachingSessionMemberFlag_Coach";
    case EPrivateCoachingSessionMemberFlag.k_EPrivateCoachingSessionMemberFlag_LeftSession:
      return "k_EPrivateCoachingSessionMemberFlag_LeftSession";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum EPrivateCoachingSessionMemberFlag",
      );
  }
}

export enum EPlayerCoachMatchFlag {
  k_EPlayerCoachMatchFlag_EligibleForRewards = 1,
  k_EPlayerCoachMatchFlag_PrivateCoach = 2,
}

export function ePlayerCoachMatchFlagFromJSON(object: any): EPlayerCoachMatchFlag {
  switch (object) {
    case 1:
    case "k_EPlayerCoachMatchFlag_EligibleForRewards":
      return EPlayerCoachMatchFlag.k_EPlayerCoachMatchFlag_EligibleForRewards;
    case 2:
    case "k_EPlayerCoachMatchFlag_PrivateCoach":
      return EPlayerCoachMatchFlag.k_EPlayerCoachMatchFlag_PrivateCoach;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EPlayerCoachMatchFlag");
  }
}

export function ePlayerCoachMatchFlagToJSON(object: EPlayerCoachMatchFlag): string {
  switch (object) {
    case EPlayerCoachMatchFlag.k_EPlayerCoachMatchFlag_EligibleForRewards:
      return "k_EPlayerCoachMatchFlag_EligibleForRewards";
    case EPlayerCoachMatchFlag.k_EPlayerCoachMatchFlag_PrivateCoach:
      return "k_EPlayerCoachMatchFlag_PrivateCoach";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EPlayerCoachMatchFlag");
  }
}

export interface CMsgPlayerCoachMatch {
  matchId: string;
  matchOutcome: EMatchOutcome;
  coachedTeam: number;
  startTime: number;
  duration: number;
  teammateRatings: ECoachTeammateRating[];
  coachFlags: number;
}

export interface CMsgPrivateCoachingSessionMember {
  accountId: number;
  memberFlags: number;
  memberSessionRating: ECoachTeammateRating;
}

export interface CMsgPrivateCoachingSession {
  privateCoachingSessionId: string;
  requestedTimestamp: number;
  requestedLanguage: number;
  coachingSessionState: EPrivateCoachingSessionState;
  sessionMembers: CMsgPrivateCoachingSessionMember[];
  currentLobbyId: string;
  currentServerSteamId: string;
  acceptedTimestamp: number;
  completedTimestamp: number;
}

export interface CMsgPrivateCoachingSessionStatus {
  requesterCompetitiveRankTier: number;
  requesterGamesPlayed: number;
}

export interface CMsgAvailablePrivateCoachingSession {
  coachingSession: CMsgPrivateCoachingSession | undefined;
  coachingSessionStatus: CMsgPrivateCoachingSessionStatus | undefined;
}

export interface CMsgAvailablePrivateCoachingSessionList {
  availableCoachingSessions: CMsgAvailablePrivateCoachingSession[];
}

export interface CMsgAvailablePrivateCoachingSessionSummary {
  coachingSessionCount: number;
}

export interface CMsgClientToGCRequestPlayerCoachMatches {
}

export interface CMsgClientToGCRequestPlayerCoachMatchesResponse {
  result: CMsgClientToGCRequestPlayerCoachMatchesResponse_EResponse;
  coachMatches: CMsgPlayerCoachMatch[];
}

export enum CMsgClientToGCRequestPlayerCoachMatchesResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
}

export function cMsgClientToGCRequestPlayerCoachMatchesResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCRequestPlayerCoachMatchesResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCRequestPlayerCoachMatchesResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCRequestPlayerCoachMatchesResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCRequestPlayerCoachMatchesResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCRequestPlayerCoachMatchesResponse_EResponse.k_eDisabled;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestPlayerCoachMatchesResponse_EResponse",
      );
  }
}

export function cMsgClientToGCRequestPlayerCoachMatchesResponse_EResponseToJSON(
  object: CMsgClientToGCRequestPlayerCoachMatchesResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCRequestPlayerCoachMatchesResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCRequestPlayerCoachMatchesResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCRequestPlayerCoachMatchesResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCRequestPlayerCoachMatchesResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestPlayerCoachMatchesResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCRequestPlayerCoachMatch {
  matchId: string;
}

export interface CMsgClientToGCRequestPlayerCoachMatchResponse {
  result: CMsgClientToGCRequestPlayerCoachMatchResponse_EResponse;
  coachMatch: CMsgPlayerCoachMatch | undefined;
}

export enum CMsgClientToGCRequestPlayerCoachMatchResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
}

export function cMsgClientToGCRequestPlayerCoachMatchResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCRequestPlayerCoachMatchResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCRequestPlayerCoachMatchResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCRequestPlayerCoachMatchResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCRequestPlayerCoachMatchResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCRequestPlayerCoachMatchResponse_EResponse.k_eDisabled;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestPlayerCoachMatchResponse_EResponse",
      );
  }
}

export function cMsgClientToGCRequestPlayerCoachMatchResponse_EResponseToJSON(
  object: CMsgClientToGCRequestPlayerCoachMatchResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCRequestPlayerCoachMatchResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCRequestPlayerCoachMatchResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCRequestPlayerCoachMatchResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCRequestPlayerCoachMatchResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestPlayerCoachMatchResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCSubmitCoachTeammateRating {
  matchId: string;
  coachAccountId: number;
  rating: ECoachTeammateRating;
  reason: string;
}

export interface CMsgClientToGCSubmitCoachTeammateRatingResponse {
  result: CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse;
}

export enum CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eInvalidInput = 4,
  k_eAlreadySubmitted = 5,
  k_eVotingFinished = 6,
  k_ePlayerNotInMatch = 7,
  k_eCoachNotInMatch = 8,
  k_ePlayerNotOnCoachTeam = 9,
  k_ePlayerInSamePartyAsCoach = 10,
  k_eMatchNotEligible = 11,
}

export function cMsgClientToGCSubmitCoachTeammateRatingResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eInvalidInput":
      return CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eInvalidInput;
    case 5:
    case "k_eAlreadySubmitted":
      return CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eAlreadySubmitted;
    case 6:
    case "k_eVotingFinished":
      return CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eVotingFinished;
    case 7:
    case "k_ePlayerNotInMatch":
      return CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_ePlayerNotInMatch;
    case 8:
    case "k_eCoachNotInMatch":
      return CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eCoachNotInMatch;
    case 9:
    case "k_ePlayerNotOnCoachTeam":
      return CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_ePlayerNotOnCoachTeam;
    case 10:
    case "k_ePlayerInSamePartyAsCoach":
      return CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_ePlayerInSamePartyAsCoach;
    case 11:
    case "k_eMatchNotEligible":
      return CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eMatchNotEligible;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse",
      );
  }
}

export function cMsgClientToGCSubmitCoachTeammateRatingResponse_EResponseToJSON(
  object: CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eInvalidInput:
      return "k_eInvalidInput";
    case CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eAlreadySubmitted:
      return "k_eAlreadySubmitted";
    case CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eVotingFinished:
      return "k_eVotingFinished";
    case CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_ePlayerNotInMatch:
      return "k_ePlayerNotInMatch";
    case CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eCoachNotInMatch:
      return "k_eCoachNotInMatch";
    case CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_ePlayerNotOnCoachTeam:
      return "k_ePlayerNotOnCoachTeam";
    case CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_ePlayerInSamePartyAsCoach:
      return "k_ePlayerInSamePartyAsCoach";
    case CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse.k_eMatchNotEligible:
      return "k_eMatchNotEligible";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCSubmitCoachTeammateRatingResponse_EResponse",
      );
  }
}

export interface CMsgGCToClientCoachTeammateRatingsChanged {
  coachMatch: CMsgPlayerCoachMatch | undefined;
}

export interface CMsgClientToGCRequestPrivateCoachingSession {
  language: number;
}

export interface CMsgClientToGCRequestPrivateCoachingSessionResponse {
  result: CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse;
  coachingSession: CMsgPrivateCoachingSession | undefined;
}

export enum CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eAlreadyInSession = 5,
  k_eBehaviorScoreTooLow = 6,
  k_eInvalidLobbyType = 7,
  k_eLowPriorityPlayer = 8,
  k_eLowPriorityLobby = 9,
  k_eLowPriorityParty = 10,
  k_eTextChatBan = 11,
  k_eVoiceChatBan = 12,
  k_eMatchBan = 13,
}

export function cMsgClientToGCRequestPrivateCoachingSessionResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eAlreadyInSession":
      return CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eAlreadyInSession;
    case 6:
    case "k_eBehaviorScoreTooLow":
      return CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eBehaviorScoreTooLow;
    case 7:
    case "k_eInvalidLobbyType":
      return CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eInvalidLobbyType;
    case 8:
    case "k_eLowPriorityPlayer":
      return CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eLowPriorityPlayer;
    case 9:
    case "k_eLowPriorityLobby":
      return CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eLowPriorityLobby;
    case 10:
    case "k_eLowPriorityParty":
      return CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eLowPriorityParty;
    case 11:
    case "k_eTextChatBan":
      return CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eTextChatBan;
    case 12:
    case "k_eVoiceChatBan":
      return CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eVoiceChatBan;
    case 13:
    case "k_eMatchBan":
      return CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eMatchBan;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse",
      );
  }
}

export function cMsgClientToGCRequestPrivateCoachingSessionResponse_EResponseToJSON(
  object: CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eAlreadyInSession:
      return "k_eAlreadyInSession";
    case CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eBehaviorScoreTooLow:
      return "k_eBehaviorScoreTooLow";
    case CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eInvalidLobbyType:
      return "k_eInvalidLobbyType";
    case CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eLowPriorityPlayer:
      return "k_eLowPriorityPlayer";
    case CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eLowPriorityLobby:
      return "k_eLowPriorityLobby";
    case CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eLowPriorityParty:
      return "k_eLowPriorityParty";
    case CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eTextChatBan:
      return "k_eTextChatBan";
    case CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eVoiceChatBan:
      return "k_eVoiceChatBan";
    case CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse.k_eMatchBan:
      return "k_eMatchBan";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRequestPrivateCoachingSessionResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCAcceptPrivateCoachingSession {
  coachingSessionId: string;
}

export interface CMsgClientToGCAcceptPrivateCoachingSessionResponse {
  result: CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse;
  coachingSession: CMsgPrivateCoachingSession | undefined;
}

export enum CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eUnknownSession = 5,
  k_eAlreadyHasCoach = 6,
  k_eAlreadyHasSession = 7,
  k_eInvalidUser = 8,
  k_eAlreadyFinished = 9,
  k_eInvalidLobbyType = 10,
  k_eAlreadyInLobby = 11,
  k_eLobbyIsLan = 12,
  k_eLobbyIsLeague = 13,
  k_eInvalidLobbyState = 14,
  k_eRequesterIsNotPlayer = 15,
  k_eTooManyCoaches = 16,
  k_eCoachWasPlayer = 17,
  k_eCoachBehaviorScoreTooLow = 18,
  k_eCoachRankNotCalibrated = 19,
  k_eCoachRankNotEligible = 20,
  k_eCoachRankTooLow = 21,
}

export function cMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eUnknownSession":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eUnknownSession;
    case 6:
    case "k_eAlreadyHasCoach":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eAlreadyHasCoach;
    case 7:
    case "k_eAlreadyHasSession":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eAlreadyHasSession;
    case 8:
    case "k_eInvalidUser":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eInvalidUser;
    case 9:
    case "k_eAlreadyFinished":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eAlreadyFinished;
    case 10:
    case "k_eInvalidLobbyType":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eInvalidLobbyType;
    case 11:
    case "k_eAlreadyInLobby":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eAlreadyInLobby;
    case 12:
    case "k_eLobbyIsLan":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eLobbyIsLan;
    case 13:
    case "k_eLobbyIsLeague":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eLobbyIsLeague;
    case 14:
    case "k_eInvalidLobbyState":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eInvalidLobbyState;
    case 15:
    case "k_eRequesterIsNotPlayer":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eRequesterIsNotPlayer;
    case 16:
    case "k_eTooManyCoaches":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eTooManyCoaches;
    case 17:
    case "k_eCoachWasPlayer":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eCoachWasPlayer;
    case 18:
    case "k_eCoachBehaviorScoreTooLow":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eCoachBehaviorScoreTooLow;
    case 19:
    case "k_eCoachRankNotCalibrated":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eCoachRankNotCalibrated;
    case 20:
    case "k_eCoachRankNotEligible":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eCoachRankNotEligible;
    case 21:
    case "k_eCoachRankTooLow":
      return CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eCoachRankTooLow;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse",
      );
  }
}

export function cMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponseToJSON(
  object: CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eUnknownSession:
      return "k_eUnknownSession";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eAlreadyHasCoach:
      return "k_eAlreadyHasCoach";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eAlreadyHasSession:
      return "k_eAlreadyHasSession";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eInvalidUser:
      return "k_eInvalidUser";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eAlreadyFinished:
      return "k_eAlreadyFinished";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eInvalidLobbyType:
      return "k_eInvalidLobbyType";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eAlreadyInLobby:
      return "k_eAlreadyInLobby";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eLobbyIsLan:
      return "k_eLobbyIsLan";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eLobbyIsLeague:
      return "k_eLobbyIsLeague";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eInvalidLobbyState:
      return "k_eInvalidLobbyState";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eRequesterIsNotPlayer:
      return "k_eRequesterIsNotPlayer";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eTooManyCoaches:
      return "k_eTooManyCoaches";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eCoachWasPlayer:
      return "k_eCoachWasPlayer";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eCoachBehaviorScoreTooLow:
      return "k_eCoachBehaviorScoreTooLow";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eCoachRankNotCalibrated:
      return "k_eCoachRankNotCalibrated";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eCoachRankNotEligible:
      return "k_eCoachRankNotEligible";
    case CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse.k_eCoachRankTooLow:
      return "k_eCoachRankTooLow";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCLeavePrivateCoachingSession {
}

export interface CMsgClientToGCLeavePrivateCoachingSessionResponse {
  result: CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse;
}

export enum CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eNoSession = 5,
  k_eAlreadyLeft = 6,
}

export function cMsgClientToGCLeavePrivateCoachingSessionResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eNoSession":
      return CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse.k_eNoSession;
    case 6:
    case "k_eAlreadyLeft":
      return CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse.k_eAlreadyLeft;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse",
      );
  }
}

export function cMsgClientToGCLeavePrivateCoachingSessionResponse_EResponseToJSON(
  object: CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse.k_eNoSession:
      return "k_eNoSession";
    case CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse.k_eAlreadyLeft:
      return "k_eAlreadyLeft";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCLeavePrivateCoachingSessionResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCGetCurrentPrivateCoachingSession {
}

export interface CMsgClientToGCGetCurrentPrivateCoachingSessionResponse {
  result: CMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponse;
  currentSession: CMsgPrivateCoachingSession | undefined;
}

export enum CMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
}

export function cMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponse.k_eTimeout;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponse",
      );
  }
}

export function cMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponseToJSON(
  object: CMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponse",
      );
  }
}

export interface CMsgGCToClientPrivateCoachingSessionUpdated {
  coachingSession: CMsgPrivateCoachingSession | undefined;
}

export interface CMsgClientToGCSubmitPrivateCoachingSessionRating {
  coachingSessionId: string;
  sessionRating: ECoachTeammateRating;
}

export interface CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse {
  result: CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse;
}

export enum CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eUnknownSession = 5,
  k_eNotMember = 6,
  k_eAlreadySubmitted = 7,
  k_eSessionActive = 8,
  k_eSessionTooShort = 9,
  k_eNoCoach = 10,
  k_eInvalidRating = 11,
}

export function cMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eUnknownSession":
      return CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eUnknownSession;
    case 6:
    case "k_eNotMember":
      return CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eNotMember;
    case 7:
    case "k_eAlreadySubmitted":
      return CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eAlreadySubmitted;
    case 8:
    case "k_eSessionActive":
      return CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eSessionActive;
    case 9:
    case "k_eSessionTooShort":
      return CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eSessionTooShort;
    case 10:
    case "k_eNoCoach":
      return CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eNoCoach;
    case 11:
    case "k_eInvalidRating":
      return CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eInvalidRating;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse",
      );
  }
}

export function cMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponseToJSON(
  object: CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eUnknownSession:
      return "k_eUnknownSession";
    case CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eNotMember:
      return "k_eNotMember";
    case CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eAlreadySubmitted:
      return "k_eAlreadySubmitted";
    case CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eSessionActive:
      return "k_eSessionActive";
    case CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eSessionTooShort:
      return "k_eSessionTooShort";
    case CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eNoCoach:
      return "k_eNoCoach";
    case CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse.k_eInvalidRating:
      return "k_eInvalidRating";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCGetAvailablePrivateCoachingSessions {
  language: number;
}

export interface CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse {
  result: CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponse;
  availableSessionsList: CMsgAvailablePrivateCoachingSessionList | undefined;
}

export enum CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
}

export function cMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponse.k_eTimeout;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponse",
      );
  }
}

export function cMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponseToJSON(
  object: CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCGetAvailablePrivateCoachingSessionsSummary {
}

export interface CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse {
  result: CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponse;
  coachingSessionSummary: CMsgAvailablePrivateCoachingSessionSummary | undefined;
}

export enum CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
}

export function cMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponse.k_eTimeout;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponse",
      );
  }
}

export function cMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponseToJSON(
  object: CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCJoinPrivateCoachingSessionLobby {
}

export interface CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse {
  result: CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse;
}

export enum CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eNoSession = 5,
  k_eSessionFinished = 6,
  k_eAlreadyLeft = 7,
  k_eNotACoach = 8,
  k_eNoLobby = 9,
  k_eCoachInThisLobby = 10,
  k_eCoachInALobby = 11,
  k_eLobbyIsLan = 12,
  k_eLobbyIsLeague = 13,
  k_eInvalidLobbyType = 14,
  k_eInvalidLobbyState = 15,
  k_eRequesterIsNotPlayer = 16,
  k_eTooManyCoaches = 17,
  k_eCoachWasPlayer = 18,
  k_eJoinFailed = 19,
}

export function cMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eNoSession":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eNoSession;
    case 6:
    case "k_eSessionFinished":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eSessionFinished;
    case 7:
    case "k_eAlreadyLeft":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eAlreadyLeft;
    case 8:
    case "k_eNotACoach":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eNotACoach;
    case 9:
    case "k_eNoLobby":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eNoLobby;
    case 10:
    case "k_eCoachInThisLobby":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eCoachInThisLobby;
    case 11:
    case "k_eCoachInALobby":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eCoachInALobby;
    case 12:
    case "k_eLobbyIsLan":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eLobbyIsLan;
    case 13:
    case "k_eLobbyIsLeague":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eLobbyIsLeague;
    case 14:
    case "k_eInvalidLobbyType":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eInvalidLobbyType;
    case 15:
    case "k_eInvalidLobbyState":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eInvalidLobbyState;
    case 16:
    case "k_eRequesterIsNotPlayer":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eRequesterIsNotPlayer;
    case 17:
    case "k_eTooManyCoaches":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eTooManyCoaches;
    case 18:
    case "k_eCoachWasPlayer":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eCoachWasPlayer;
    case 19:
    case "k_eJoinFailed":
      return CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eJoinFailed;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse",
      );
  }
}

export function cMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponseToJSON(
  object: CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eNoSession:
      return "k_eNoSession";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eSessionFinished:
      return "k_eSessionFinished";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eAlreadyLeft:
      return "k_eAlreadyLeft";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eNotACoach:
      return "k_eNotACoach";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eNoLobby:
      return "k_eNoLobby";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eCoachInThisLobby:
      return "k_eCoachInThisLobby";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eCoachInALobby:
      return "k_eCoachInALobby";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eLobbyIsLan:
      return "k_eLobbyIsLan";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eLobbyIsLeague:
      return "k_eLobbyIsLeague";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eInvalidLobbyType:
      return "k_eInvalidLobbyType";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eInvalidLobbyState:
      return "k_eInvalidLobbyState";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eRequesterIsNotPlayer:
      return "k_eRequesterIsNotPlayer";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eTooManyCoaches:
      return "k_eTooManyCoaches";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eCoachWasPlayer:
      return "k_eCoachWasPlayer";
    case CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse.k_eJoinFailed:
      return "k_eJoinFailed";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCCoachFriend {
  targetAccountId: number;
}

export interface CMsgClientToGCCoachFriendResponse {
  result: CMsgClientToGCCoachFriendResponse_EResponse;
}

export enum CMsgClientToGCCoachFriendResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eCoachNotSubscriber = 5,
  k_eLobbyNotFound = 6,
  k_eFriendsOnBothSides = 7,
  k_eNotFriends = 8,
  k_eCoachInThisLobby = 9,
  k_eCoachInALobby = 10,
  k_eLobbyIsLan = 11,
  k_eInvalidLobbyType = 12,
  k_eInvalidLobbyState = 13,
  k_eFriendIsNotAPlayer = 14,
  k_eTooManyCoaches = 15,
  k_eCoachSwitchedTeams = 16,
  k_eLobbyIsLeague = 17,
  k_eCoachWasPlayer = 18,
  k_eRequestRejected = 19,
}

export function cMsgClientToGCCoachFriendResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCCoachFriendResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eCoachNotSubscriber":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eCoachNotSubscriber;
    case 6:
    case "k_eLobbyNotFound":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eLobbyNotFound;
    case 7:
    case "k_eFriendsOnBothSides":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eFriendsOnBothSides;
    case 8:
    case "k_eNotFriends":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eNotFriends;
    case 9:
    case "k_eCoachInThisLobby":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eCoachInThisLobby;
    case 10:
    case "k_eCoachInALobby":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eCoachInALobby;
    case 11:
    case "k_eLobbyIsLan":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eLobbyIsLan;
    case 12:
    case "k_eInvalidLobbyType":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eInvalidLobbyType;
    case 13:
    case "k_eInvalidLobbyState":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eInvalidLobbyState;
    case 14:
    case "k_eFriendIsNotAPlayer":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eFriendIsNotAPlayer;
    case 15:
    case "k_eTooManyCoaches":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eTooManyCoaches;
    case 16:
    case "k_eCoachSwitchedTeams":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eCoachSwitchedTeams;
    case 17:
    case "k_eLobbyIsLeague":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eLobbyIsLeague;
    case 18:
    case "k_eCoachWasPlayer":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eCoachWasPlayer;
    case 19:
    case "k_eRequestRejected":
      return CMsgClientToGCCoachFriendResponse_EResponse.k_eRequestRejected;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCoachFriendResponse_EResponse",
      );
  }
}

export function cMsgClientToGCCoachFriendResponse_EResponseToJSON(
  object: CMsgClientToGCCoachFriendResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eCoachNotSubscriber:
      return "k_eCoachNotSubscriber";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eLobbyNotFound:
      return "k_eLobbyNotFound";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eFriendsOnBothSides:
      return "k_eFriendsOnBothSides";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eNotFriends:
      return "k_eNotFriends";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eCoachInThisLobby:
      return "k_eCoachInThisLobby";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eCoachInALobby:
      return "k_eCoachInALobby";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eLobbyIsLan:
      return "k_eLobbyIsLan";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eInvalidLobbyType:
      return "k_eInvalidLobbyType";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eInvalidLobbyState:
      return "k_eInvalidLobbyState";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eFriendIsNotAPlayer:
      return "k_eFriendIsNotAPlayer";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eTooManyCoaches:
      return "k_eTooManyCoaches";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eCoachSwitchedTeams:
      return "k_eCoachSwitchedTeams";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eLobbyIsLeague:
      return "k_eLobbyIsLeague";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eCoachWasPlayer:
      return "k_eCoachWasPlayer";
    case CMsgClientToGCCoachFriendResponse_EResponse.k_eRequestRejected:
      return "k_eRequestRejected";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCCoachFriendResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCRespondToCoachFriendRequest {
  coachAccountId: number;
  response: ELobbyMemberCoachRequestState;
}

export interface CMsgClientToGCRespondToCoachFriendRequestResponse {
  result: CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse;
}

export enum CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eLobbyNotFound = 5,
  k_eInvalidLobbyState = 6,
  k_eCoachNotInLobby = 7,
  k_ePlayerInvalidTeam = 8,
  k_eCoachInvalidTeam = 9,
  k_eNoRequest = 10,
  k_eInvalidResponse = 11,
  k_eAlreadyResponded = 12,
}

export function cMsgClientToGCRespondToCoachFriendRequestResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eLobbyNotFound":
      return CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eLobbyNotFound;
    case 6:
    case "k_eInvalidLobbyState":
      return CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eInvalidLobbyState;
    case 7:
    case "k_eCoachNotInLobby":
      return CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eCoachNotInLobby;
    case 8:
    case "k_ePlayerInvalidTeam":
      return CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_ePlayerInvalidTeam;
    case 9:
    case "k_eCoachInvalidTeam":
      return CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eCoachInvalidTeam;
    case 10:
    case "k_eNoRequest":
      return CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eNoRequest;
    case 11:
    case "k_eInvalidResponse":
      return CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eInvalidResponse;
    case 12:
    case "k_eAlreadyResponded":
      return CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eAlreadyResponded;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse",
      );
  }
}

export function cMsgClientToGCRespondToCoachFriendRequestResponse_EResponseToJSON(
  object: CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eLobbyNotFound:
      return "k_eLobbyNotFound";
    case CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eInvalidLobbyState:
      return "k_eInvalidLobbyState";
    case CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eCoachNotInLobby:
      return "k_eCoachNotInLobby";
    case CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_ePlayerInvalidTeam:
      return "k_ePlayerInvalidTeam";
    case CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eCoachInvalidTeam:
      return "k_eCoachInvalidTeam";
    case CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eNoRequest:
      return "k_eNoRequest";
    case CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eInvalidResponse:
      return "k_eInvalidResponse";
    case CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse.k_eAlreadyResponded:
      return "k_eAlreadyResponded";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCRespondToCoachFriendRequestResponse_EResponse",
      );
  }
}

function createBaseCMsgPlayerCoachMatch(): CMsgPlayerCoachMatch {
  return {
    matchId: "0",
    matchOutcome: 0,
    coachedTeam: 0,
    startTime: 0,
    duration: 0,
    teammateRatings: [],
    coachFlags: 0,
  };
}

export const CMsgPlayerCoachMatch = {
  encode(message: CMsgPlayerCoachMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.matchOutcome !== 0) {
      writer.uint32(16).int32(message.matchOutcome);
    }
    if (message.coachedTeam !== 0) {
      writer.uint32(24).uint32(message.coachedTeam);
    }
    if (message.startTime !== 0) {
      writer.uint32(37).fixed32(message.startTime);
    }
    if (message.duration !== 0) {
      writer.uint32(40).uint32(message.duration);
    }
    writer.uint32(50).fork();
    for (const v of message.teammateRatings) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.coachFlags !== 0) {
      writer.uint32(56).uint32(message.coachFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPlayerCoachMatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPlayerCoachMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.matchOutcome = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.coachedTeam = reader.uint32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.startTime = reader.fixed32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.duration = reader.uint32();
          continue;
        case 6:
          if (tag == 48) {
            message.teammateRatings.push(reader.int32() as any);
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.teammateRatings.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 7:
          if (tag != 56) {
            break;
          }

          message.coachFlags = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPlayerCoachMatch {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      matchOutcome: isSet(object.matchOutcome) ? eMatchOutcomeFromJSON(object.matchOutcome) : 0,
      coachedTeam: isSet(object.coachedTeam) ? Number(object.coachedTeam) : 0,
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      teammateRatings: Array.isArray(object?.teammateRatings)
        ? object.teammateRatings.map((e: any) => eCoachTeammateRatingFromJSON(e))
        : [],
      coachFlags: isSet(object.coachFlags) ? Number(object.coachFlags) : 0,
    };
  },

  toJSON(message: CMsgPlayerCoachMatch): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.matchOutcome !== undefined && (obj.matchOutcome = eMatchOutcomeToJSON(message.matchOutcome));
    message.coachedTeam !== undefined && (obj.coachedTeam = Math.round(message.coachedTeam));
    message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    if (message.teammateRatings) {
      obj.teammateRatings = message.teammateRatings.map((e) => eCoachTeammateRatingToJSON(e));
    } else {
      obj.teammateRatings = [];
    }
    message.coachFlags !== undefined && (obj.coachFlags = Math.round(message.coachFlags));
    return obj;
  },
};

function createBaseCMsgPrivateCoachingSessionMember(): CMsgPrivateCoachingSessionMember {
  return { accountId: 0, memberFlags: 0, memberSessionRating: 0 };
}

export const CMsgPrivateCoachingSessionMember = {
  encode(message: CMsgPrivateCoachingSessionMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.memberFlags !== 0) {
      writer.uint32(16).uint32(message.memberFlags);
    }
    if (message.memberSessionRating !== 0) {
      writer.uint32(24).int32(message.memberSessionRating);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPrivateCoachingSessionMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPrivateCoachingSessionMember();
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

          message.memberFlags = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.memberSessionRating = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPrivateCoachingSessionMember {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      memberFlags: isSet(object.memberFlags) ? Number(object.memberFlags) : 0,
      memberSessionRating: isSet(object.memberSessionRating)
        ? eCoachTeammateRatingFromJSON(object.memberSessionRating)
        : 0,
    };
  },

  toJSON(message: CMsgPrivateCoachingSessionMember): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.memberFlags !== undefined && (obj.memberFlags = Math.round(message.memberFlags));
    message.memberSessionRating !== undefined &&
      (obj.memberSessionRating = eCoachTeammateRatingToJSON(message.memberSessionRating));
    return obj;
  },
};

function createBaseCMsgPrivateCoachingSession(): CMsgPrivateCoachingSession {
  return {
    privateCoachingSessionId: "0",
    requestedTimestamp: 0,
    requestedLanguage: 0,
    coachingSessionState: 0,
    sessionMembers: [],
    currentLobbyId: "0",
    currentServerSteamId: "0",
    acceptedTimestamp: 0,
    completedTimestamp: 0,
  };
}

export const CMsgPrivateCoachingSession = {
  encode(message: CMsgPrivateCoachingSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.privateCoachingSessionId !== "0") {
      writer.uint32(8).uint64(message.privateCoachingSessionId);
    }
    if (message.requestedTimestamp !== 0) {
      writer.uint32(21).fixed32(message.requestedTimestamp);
    }
    if (message.requestedLanguage !== 0) {
      writer.uint32(24).uint32(message.requestedLanguage);
    }
    if (message.coachingSessionState !== 0) {
      writer.uint32(32).int32(message.coachingSessionState);
    }
    for (const v of message.sessionMembers) {
      CMsgPrivateCoachingSessionMember.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.currentLobbyId !== "0") {
      writer.uint32(48).uint64(message.currentLobbyId);
    }
    if (message.currentServerSteamId !== "0") {
      writer.uint32(56).uint64(message.currentServerSteamId);
    }
    if (message.acceptedTimestamp !== 0) {
      writer.uint32(69).fixed32(message.acceptedTimestamp);
    }
    if (message.completedTimestamp !== 0) {
      writer.uint32(77).fixed32(message.completedTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPrivateCoachingSession {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPrivateCoachingSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.privateCoachingSessionId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.requestedTimestamp = reader.fixed32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.requestedLanguage = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.coachingSessionState = reader.int32() as any;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.sessionMembers.push(CMsgPrivateCoachingSessionMember.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.currentLobbyId = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.currentServerSteamId = longToString(reader.uint64() as Long);
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.acceptedTimestamp = reader.fixed32();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.completedTimestamp = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPrivateCoachingSession {
    return {
      privateCoachingSessionId: isSet(object.privateCoachingSessionId) ? String(object.privateCoachingSessionId) : "0",
      requestedTimestamp: isSet(object.requestedTimestamp) ? Number(object.requestedTimestamp) : 0,
      requestedLanguage: isSet(object.requestedLanguage) ? Number(object.requestedLanguage) : 0,
      coachingSessionState: isSet(object.coachingSessionState)
        ? ePrivateCoachingSessionStateFromJSON(object.coachingSessionState)
        : 0,
      sessionMembers: Array.isArray(object?.sessionMembers)
        ? object.sessionMembers.map((e: any) => CMsgPrivateCoachingSessionMember.fromJSON(e))
        : [],
      currentLobbyId: isSet(object.currentLobbyId) ? String(object.currentLobbyId) : "0",
      currentServerSteamId: isSet(object.currentServerSteamId) ? String(object.currentServerSteamId) : "0",
      acceptedTimestamp: isSet(object.acceptedTimestamp) ? Number(object.acceptedTimestamp) : 0,
      completedTimestamp: isSet(object.completedTimestamp) ? Number(object.completedTimestamp) : 0,
    };
  },

  toJSON(message: CMsgPrivateCoachingSession): unknown {
    const obj: any = {};
    message.privateCoachingSessionId !== undefined && (obj.privateCoachingSessionId = message.privateCoachingSessionId);
    message.requestedTimestamp !== undefined && (obj.requestedTimestamp = Math.round(message.requestedTimestamp));
    message.requestedLanguage !== undefined && (obj.requestedLanguage = Math.round(message.requestedLanguage));
    message.coachingSessionState !== undefined &&
      (obj.coachingSessionState = ePrivateCoachingSessionStateToJSON(message.coachingSessionState));
    if (message.sessionMembers) {
      obj.sessionMembers = message.sessionMembers.map((e) =>
        e ? CMsgPrivateCoachingSessionMember.toJSON(e) : undefined
      );
    } else {
      obj.sessionMembers = [];
    }
    message.currentLobbyId !== undefined && (obj.currentLobbyId = message.currentLobbyId);
    message.currentServerSteamId !== undefined && (obj.currentServerSteamId = message.currentServerSteamId);
    message.acceptedTimestamp !== undefined && (obj.acceptedTimestamp = Math.round(message.acceptedTimestamp));
    message.completedTimestamp !== undefined && (obj.completedTimestamp = Math.round(message.completedTimestamp));
    return obj;
  },
};

function createBaseCMsgPrivateCoachingSessionStatus(): CMsgPrivateCoachingSessionStatus {
  return { requesterCompetitiveRankTier: 0, requesterGamesPlayed: 0 };
}

export const CMsgPrivateCoachingSessionStatus = {
  encode(message: CMsgPrivateCoachingSessionStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requesterCompetitiveRankTier !== 0) {
      writer.uint32(8).uint32(message.requesterCompetitiveRankTier);
    }
    if (message.requesterGamesPlayed !== 0) {
      writer.uint32(16).uint32(message.requesterGamesPlayed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPrivateCoachingSessionStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPrivateCoachingSessionStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.requesterCompetitiveRankTier = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.requesterGamesPlayed = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPrivateCoachingSessionStatus {
    return {
      requesterCompetitiveRankTier: isSet(object.requesterCompetitiveRankTier)
        ? Number(object.requesterCompetitiveRankTier)
        : 0,
      requesterGamesPlayed: isSet(object.requesterGamesPlayed) ? Number(object.requesterGamesPlayed) : 0,
    };
  },

  toJSON(message: CMsgPrivateCoachingSessionStatus): unknown {
    const obj: any = {};
    message.requesterCompetitiveRankTier !== undefined &&
      (obj.requesterCompetitiveRankTier = Math.round(message.requesterCompetitiveRankTier));
    message.requesterGamesPlayed !== undefined && (obj.requesterGamesPlayed = Math.round(message.requesterGamesPlayed));
    return obj;
  },
};

function createBaseCMsgAvailablePrivateCoachingSession(): CMsgAvailablePrivateCoachingSession {
  return { coachingSession: undefined, coachingSessionStatus: undefined };
}

export const CMsgAvailablePrivateCoachingSession = {
  encode(message: CMsgAvailablePrivateCoachingSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coachingSession !== undefined) {
      CMsgPrivateCoachingSession.encode(message.coachingSession, writer.uint32(10).fork()).ldelim();
    }
    if (message.coachingSessionStatus !== undefined) {
      CMsgPrivateCoachingSessionStatus.encode(message.coachingSessionStatus, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAvailablePrivateCoachingSession {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAvailablePrivateCoachingSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.coachingSession = CMsgPrivateCoachingSession.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.coachingSessionStatus = CMsgPrivateCoachingSessionStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgAvailablePrivateCoachingSession {
    return {
      coachingSession: isSet(object.coachingSession)
        ? CMsgPrivateCoachingSession.fromJSON(object.coachingSession)
        : undefined,
      coachingSessionStatus: isSet(object.coachingSessionStatus)
        ? CMsgPrivateCoachingSessionStatus.fromJSON(object.coachingSessionStatus)
        : undefined,
    };
  },

  toJSON(message: CMsgAvailablePrivateCoachingSession): unknown {
    const obj: any = {};
    message.coachingSession !== undefined && (obj.coachingSession = message.coachingSession
      ? CMsgPrivateCoachingSession.toJSON(message.coachingSession)
      : undefined);
    message.coachingSessionStatus !== undefined && (obj.coachingSessionStatus = message.coachingSessionStatus
      ? CMsgPrivateCoachingSessionStatus.toJSON(message.coachingSessionStatus)
      : undefined);
    return obj;
  },
};

function createBaseCMsgAvailablePrivateCoachingSessionList(): CMsgAvailablePrivateCoachingSessionList {
  return { availableCoachingSessions: [] };
}

export const CMsgAvailablePrivateCoachingSessionList = {
  encode(message: CMsgAvailablePrivateCoachingSessionList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.availableCoachingSessions) {
      CMsgAvailablePrivateCoachingSession.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAvailablePrivateCoachingSessionList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAvailablePrivateCoachingSessionList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.availableCoachingSessions.push(CMsgAvailablePrivateCoachingSession.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgAvailablePrivateCoachingSessionList {
    return {
      availableCoachingSessions: Array.isArray(object?.availableCoachingSessions)
        ? object.availableCoachingSessions.map((e: any) => CMsgAvailablePrivateCoachingSession.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgAvailablePrivateCoachingSessionList): unknown {
    const obj: any = {};
    if (message.availableCoachingSessions) {
      obj.availableCoachingSessions = message.availableCoachingSessions.map((e) =>
        e ? CMsgAvailablePrivateCoachingSession.toJSON(e) : undefined
      );
    } else {
      obj.availableCoachingSessions = [];
    }
    return obj;
  },
};

function createBaseCMsgAvailablePrivateCoachingSessionSummary(): CMsgAvailablePrivateCoachingSessionSummary {
  return { coachingSessionCount: 0 };
}

export const CMsgAvailablePrivateCoachingSessionSummary = {
  encode(message: CMsgAvailablePrivateCoachingSessionSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coachingSessionCount !== 0) {
      writer.uint32(8).uint32(message.coachingSessionCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAvailablePrivateCoachingSessionSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAvailablePrivateCoachingSessionSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.coachingSessionCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgAvailablePrivateCoachingSessionSummary {
    return { coachingSessionCount: isSet(object.coachingSessionCount) ? Number(object.coachingSessionCount) : 0 };
  },

  toJSON(message: CMsgAvailablePrivateCoachingSessionSummary): unknown {
    const obj: any = {};
    message.coachingSessionCount !== undefined && (obj.coachingSessionCount = Math.round(message.coachingSessionCount));
    return obj;
  },
};

function createBaseCMsgClientToGCRequestPlayerCoachMatches(): CMsgClientToGCRequestPlayerCoachMatches {
  return {};
}

export const CMsgClientToGCRequestPlayerCoachMatches = {
  encode(_: CMsgClientToGCRequestPlayerCoachMatches, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestPlayerCoachMatches {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestPlayerCoachMatches();
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

  fromJSON(_: any): CMsgClientToGCRequestPlayerCoachMatches {
    return {};
  },

  toJSON(_: CMsgClientToGCRequestPlayerCoachMatches): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgClientToGCRequestPlayerCoachMatchesResponse(): CMsgClientToGCRequestPlayerCoachMatchesResponse {
  return { result: 0, coachMatches: [] };
}

export const CMsgClientToGCRequestPlayerCoachMatchesResponse = {
  encode(
    message: CMsgClientToGCRequestPlayerCoachMatchesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    for (const v of message.coachMatches) {
      CMsgPlayerCoachMatch.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestPlayerCoachMatchesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestPlayerCoachMatchesResponse();
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

          message.coachMatches.push(CMsgPlayerCoachMatch.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCRequestPlayerCoachMatchesResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCRequestPlayerCoachMatchesResponse_EResponseFromJSON(object.result)
        : 0,
      coachMatches: Array.isArray(object?.coachMatches)
        ? object.coachMatches.map((e: any) => CMsgPlayerCoachMatch.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientToGCRequestPlayerCoachMatchesResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCRequestPlayerCoachMatchesResponse_EResponseToJSON(message.result));
    if (message.coachMatches) {
      obj.coachMatches = message.coachMatches.map((e) => e ? CMsgPlayerCoachMatch.toJSON(e) : undefined);
    } else {
      obj.coachMatches = [];
    }
    return obj;
  },
};

function createBaseCMsgClientToGCRequestPlayerCoachMatch(): CMsgClientToGCRequestPlayerCoachMatch {
  return { matchId: "0" };
}

export const CMsgClientToGCRequestPlayerCoachMatch = {
  encode(message: CMsgClientToGCRequestPlayerCoachMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestPlayerCoachMatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestPlayerCoachMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCRequestPlayerCoachMatch {
    return { matchId: isSet(object.matchId) ? String(object.matchId) : "0" };
  },

  toJSON(message: CMsgClientToGCRequestPlayerCoachMatch): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    return obj;
  },
};

function createBaseCMsgClientToGCRequestPlayerCoachMatchResponse(): CMsgClientToGCRequestPlayerCoachMatchResponse {
  return { result: 0, coachMatch: undefined };
}

export const CMsgClientToGCRequestPlayerCoachMatchResponse = {
  encode(message: CMsgClientToGCRequestPlayerCoachMatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.coachMatch !== undefined) {
      CMsgPlayerCoachMatch.encode(message.coachMatch, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestPlayerCoachMatchResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestPlayerCoachMatchResponse();
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

          message.coachMatch = CMsgPlayerCoachMatch.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCRequestPlayerCoachMatchResponse {
    return {
      result: isSet(object.result) ? cMsgClientToGCRequestPlayerCoachMatchResponse_EResponseFromJSON(object.result) : 0,
      coachMatch: isSet(object.coachMatch) ? CMsgPlayerCoachMatch.fromJSON(object.coachMatch) : undefined,
    };
  },

  toJSON(message: CMsgClientToGCRequestPlayerCoachMatchResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCRequestPlayerCoachMatchResponse_EResponseToJSON(message.result));
    message.coachMatch !== undefined &&
      (obj.coachMatch = message.coachMatch ? CMsgPlayerCoachMatch.toJSON(message.coachMatch) : undefined);
    return obj;
  },
};

function createBaseCMsgClientToGCSubmitCoachTeammateRating(): CMsgClientToGCSubmitCoachTeammateRating {
  return { matchId: "0", coachAccountId: 0, rating: 0, reason: "" };
}

export const CMsgClientToGCSubmitCoachTeammateRating = {
  encode(message: CMsgClientToGCSubmitCoachTeammateRating, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.coachAccountId !== 0) {
      writer.uint32(16).uint32(message.coachAccountId);
    }
    if (message.rating !== 0) {
      writer.uint32(24).int32(message.rating);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSubmitCoachTeammateRating {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSubmitCoachTeammateRating();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.coachAccountId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.rating = reader.int32() as any;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCSubmitCoachTeammateRating {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      coachAccountId: isSet(object.coachAccountId) ? Number(object.coachAccountId) : 0,
      rating: isSet(object.rating) ? eCoachTeammateRatingFromJSON(object.rating) : 0,
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: CMsgClientToGCSubmitCoachTeammateRating): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.coachAccountId !== undefined && (obj.coachAccountId = Math.round(message.coachAccountId));
    message.rating !== undefined && (obj.rating = eCoachTeammateRatingToJSON(message.rating));
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },
};

function createBaseCMsgClientToGCSubmitCoachTeammateRatingResponse(): CMsgClientToGCSubmitCoachTeammateRatingResponse {
  return { result: 0 };
}

export const CMsgClientToGCSubmitCoachTeammateRatingResponse = {
  encode(
    message: CMsgClientToGCSubmitCoachTeammateRatingResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSubmitCoachTeammateRatingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSubmitCoachTeammateRatingResponse();
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

  fromJSON(object: any): CMsgClientToGCSubmitCoachTeammateRatingResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCSubmitCoachTeammateRatingResponse_EResponseFromJSON(object.result)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCSubmitCoachTeammateRatingResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCSubmitCoachTeammateRatingResponse_EResponseToJSON(message.result));
    return obj;
  },
};

function createBaseCMsgGCToClientCoachTeammateRatingsChanged(): CMsgGCToClientCoachTeammateRatingsChanged {
  return { coachMatch: undefined };
}

export const CMsgGCToClientCoachTeammateRatingsChanged = {
  encode(message: CMsgGCToClientCoachTeammateRatingsChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coachMatch !== undefined) {
      CMsgPlayerCoachMatch.encode(message.coachMatch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientCoachTeammateRatingsChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientCoachTeammateRatingsChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.coachMatch = CMsgPlayerCoachMatch.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToClientCoachTeammateRatingsChanged {
    return { coachMatch: isSet(object.coachMatch) ? CMsgPlayerCoachMatch.fromJSON(object.coachMatch) : undefined };
  },

  toJSON(message: CMsgGCToClientCoachTeammateRatingsChanged): unknown {
    const obj: any = {};
    message.coachMatch !== undefined &&
      (obj.coachMatch = message.coachMatch ? CMsgPlayerCoachMatch.toJSON(message.coachMatch) : undefined);
    return obj;
  },
};

function createBaseCMsgClientToGCRequestPrivateCoachingSession(): CMsgClientToGCRequestPrivateCoachingSession {
  return { language: 0 };
}

export const CMsgClientToGCRequestPrivateCoachingSession = {
  encode(message: CMsgClientToGCRequestPrivateCoachingSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.language !== 0) {
      writer.uint32(8).uint32(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestPrivateCoachingSession {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestPrivateCoachingSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.language = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCRequestPrivateCoachingSession {
    return { language: isSet(object.language) ? Number(object.language) : 0 };
  },

  toJSON(message: CMsgClientToGCRequestPrivateCoachingSession): unknown {
    const obj: any = {};
    message.language !== undefined && (obj.language = Math.round(message.language));
    return obj;
  },
};

function createBaseCMsgClientToGCRequestPrivateCoachingSessionResponse(): CMsgClientToGCRequestPrivateCoachingSessionResponse {
  return { result: 0, coachingSession: undefined };
}

export const CMsgClientToGCRequestPrivateCoachingSessionResponse = {
  encode(
    message: CMsgClientToGCRequestPrivateCoachingSessionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.coachingSession !== undefined) {
      CMsgPrivateCoachingSession.encode(message.coachingSession, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestPrivateCoachingSessionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestPrivateCoachingSessionResponse();
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

          message.coachingSession = CMsgPrivateCoachingSession.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCRequestPrivateCoachingSessionResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCRequestPrivateCoachingSessionResponse_EResponseFromJSON(object.result)
        : 0,
      coachingSession: isSet(object.coachingSession)
        ? CMsgPrivateCoachingSession.fromJSON(object.coachingSession)
        : undefined,
    };
  },

  toJSON(message: CMsgClientToGCRequestPrivateCoachingSessionResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCRequestPrivateCoachingSessionResponse_EResponseToJSON(message.result));
    message.coachingSession !== undefined && (obj.coachingSession = message.coachingSession
      ? CMsgPrivateCoachingSession.toJSON(message.coachingSession)
      : undefined);
    return obj;
  },
};

function createBaseCMsgClientToGCAcceptPrivateCoachingSession(): CMsgClientToGCAcceptPrivateCoachingSession {
  return { coachingSessionId: "0" };
}

export const CMsgClientToGCAcceptPrivateCoachingSession = {
  encode(message: CMsgClientToGCAcceptPrivateCoachingSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coachingSessionId !== "0") {
      writer.uint32(8).uint64(message.coachingSessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCAcceptPrivateCoachingSession {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCAcceptPrivateCoachingSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.coachingSessionId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCAcceptPrivateCoachingSession {
    return { coachingSessionId: isSet(object.coachingSessionId) ? String(object.coachingSessionId) : "0" };
  },

  toJSON(message: CMsgClientToGCAcceptPrivateCoachingSession): unknown {
    const obj: any = {};
    message.coachingSessionId !== undefined && (obj.coachingSessionId = message.coachingSessionId);
    return obj;
  },
};

function createBaseCMsgClientToGCAcceptPrivateCoachingSessionResponse(): CMsgClientToGCAcceptPrivateCoachingSessionResponse {
  return { result: 0, coachingSession: undefined };
}

export const CMsgClientToGCAcceptPrivateCoachingSessionResponse = {
  encode(
    message: CMsgClientToGCAcceptPrivateCoachingSessionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.coachingSession !== undefined) {
      CMsgPrivateCoachingSession.encode(message.coachingSession, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCAcceptPrivateCoachingSessionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCAcceptPrivateCoachingSessionResponse();
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

          message.coachingSession = CMsgPrivateCoachingSession.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCAcceptPrivateCoachingSessionResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponseFromJSON(object.result)
        : 0,
      coachingSession: isSet(object.coachingSession)
        ? CMsgPrivateCoachingSession.fromJSON(object.coachingSession)
        : undefined,
    };
  },

  toJSON(message: CMsgClientToGCAcceptPrivateCoachingSessionResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCAcceptPrivateCoachingSessionResponse_EResponseToJSON(message.result));
    message.coachingSession !== undefined && (obj.coachingSession = message.coachingSession
      ? CMsgPrivateCoachingSession.toJSON(message.coachingSession)
      : undefined);
    return obj;
  },
};

function createBaseCMsgClientToGCLeavePrivateCoachingSession(): CMsgClientToGCLeavePrivateCoachingSession {
  return {};
}

export const CMsgClientToGCLeavePrivateCoachingSession = {
  encode(_: CMsgClientToGCLeavePrivateCoachingSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCLeavePrivateCoachingSession {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCLeavePrivateCoachingSession();
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

  fromJSON(_: any): CMsgClientToGCLeavePrivateCoachingSession {
    return {};
  },

  toJSON(_: CMsgClientToGCLeavePrivateCoachingSession): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgClientToGCLeavePrivateCoachingSessionResponse(): CMsgClientToGCLeavePrivateCoachingSessionResponse {
  return { result: 0 };
}

export const CMsgClientToGCLeavePrivateCoachingSessionResponse = {
  encode(
    message: CMsgClientToGCLeavePrivateCoachingSessionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCLeavePrivateCoachingSessionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCLeavePrivateCoachingSessionResponse();
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

  fromJSON(object: any): CMsgClientToGCLeavePrivateCoachingSessionResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCLeavePrivateCoachingSessionResponse_EResponseFromJSON(object.result)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCLeavePrivateCoachingSessionResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCLeavePrivateCoachingSessionResponse_EResponseToJSON(message.result));
    return obj;
  },
};

function createBaseCMsgClientToGCGetCurrentPrivateCoachingSession(): CMsgClientToGCGetCurrentPrivateCoachingSession {
  return {};
}

export const CMsgClientToGCGetCurrentPrivateCoachingSession = {
  encode(_: CMsgClientToGCGetCurrentPrivateCoachingSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetCurrentPrivateCoachingSession {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetCurrentPrivateCoachingSession();
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

  fromJSON(_: any): CMsgClientToGCGetCurrentPrivateCoachingSession {
    return {};
  },

  toJSON(_: CMsgClientToGCGetCurrentPrivateCoachingSession): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgClientToGCGetCurrentPrivateCoachingSessionResponse(): CMsgClientToGCGetCurrentPrivateCoachingSessionResponse {
  return { result: 0, currentSession: undefined };
}

export const CMsgClientToGCGetCurrentPrivateCoachingSessionResponse = {
  encode(
    message: CMsgClientToGCGetCurrentPrivateCoachingSessionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.currentSession !== undefined) {
      CMsgPrivateCoachingSession.encode(message.currentSession, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetCurrentPrivateCoachingSessionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetCurrentPrivateCoachingSessionResponse();
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

          message.currentSession = CMsgPrivateCoachingSession.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCGetCurrentPrivateCoachingSessionResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponseFromJSON(object.result)
        : 0,
      currentSession: isSet(object.currentSession)
        ? CMsgPrivateCoachingSession.fromJSON(object.currentSession)
        : undefined,
    };
  },

  toJSON(message: CMsgClientToGCGetCurrentPrivateCoachingSessionResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCGetCurrentPrivateCoachingSessionResponse_EResponseToJSON(message.result));
    message.currentSession !== undefined && (obj.currentSession = message.currentSession
      ? CMsgPrivateCoachingSession.toJSON(message.currentSession)
      : undefined);
    return obj;
  },
};

function createBaseCMsgGCToClientPrivateCoachingSessionUpdated(): CMsgGCToClientPrivateCoachingSessionUpdated {
  return { coachingSession: undefined };
}

export const CMsgGCToClientPrivateCoachingSessionUpdated = {
  encode(message: CMsgGCToClientPrivateCoachingSessionUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coachingSession !== undefined) {
      CMsgPrivateCoachingSession.encode(message.coachingSession, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientPrivateCoachingSessionUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientPrivateCoachingSessionUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.coachingSession = CMsgPrivateCoachingSession.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToClientPrivateCoachingSessionUpdated {
    return {
      coachingSession: isSet(object.coachingSession)
        ? CMsgPrivateCoachingSession.fromJSON(object.coachingSession)
        : undefined,
    };
  },

  toJSON(message: CMsgGCToClientPrivateCoachingSessionUpdated): unknown {
    const obj: any = {};
    message.coachingSession !== undefined && (obj.coachingSession = message.coachingSession
      ? CMsgPrivateCoachingSession.toJSON(message.coachingSession)
      : undefined);
    return obj;
  },
};

function createBaseCMsgClientToGCSubmitPrivateCoachingSessionRating(): CMsgClientToGCSubmitPrivateCoachingSessionRating {
  return { coachingSessionId: "0", sessionRating: 0 };
}

export const CMsgClientToGCSubmitPrivateCoachingSessionRating = {
  encode(
    message: CMsgClientToGCSubmitPrivateCoachingSessionRating,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.coachingSessionId !== "0") {
      writer.uint32(8).uint64(message.coachingSessionId);
    }
    if (message.sessionRating !== 0) {
      writer.uint32(16).int32(message.sessionRating);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSubmitPrivateCoachingSessionRating {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSubmitPrivateCoachingSessionRating();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.coachingSessionId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.sessionRating = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCSubmitPrivateCoachingSessionRating {
    return {
      coachingSessionId: isSet(object.coachingSessionId) ? String(object.coachingSessionId) : "0",
      sessionRating: isSet(object.sessionRating) ? eCoachTeammateRatingFromJSON(object.sessionRating) : 0,
    };
  },

  toJSON(message: CMsgClientToGCSubmitPrivateCoachingSessionRating): unknown {
    const obj: any = {};
    message.coachingSessionId !== undefined && (obj.coachingSessionId = message.coachingSessionId);
    message.sessionRating !== undefined && (obj.sessionRating = eCoachTeammateRatingToJSON(message.sessionRating));
    return obj;
  },
};

function createBaseCMsgClientToGCSubmitPrivateCoachingSessionRatingResponse(): CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse {
  return { result: 0 };
}

export const CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse = {
  encode(
    message: CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSubmitPrivateCoachingSessionRatingResponse();
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

  fromJSON(object: any): CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponseFromJSON(object.result)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCSubmitPrivateCoachingSessionRatingResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCSubmitPrivateCoachingSessionRatingResponse_EResponseToJSON(message.result));
    return obj;
  },
};

function createBaseCMsgClientToGCGetAvailablePrivateCoachingSessions(): CMsgClientToGCGetAvailablePrivateCoachingSessions {
  return { language: 0 };
}

export const CMsgClientToGCGetAvailablePrivateCoachingSessions = {
  encode(
    message: CMsgClientToGCGetAvailablePrivateCoachingSessions,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.language !== 0) {
      writer.uint32(8).uint32(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetAvailablePrivateCoachingSessions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetAvailablePrivateCoachingSessions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.language = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCGetAvailablePrivateCoachingSessions {
    return { language: isSet(object.language) ? Number(object.language) : 0 };
  },

  toJSON(message: CMsgClientToGCGetAvailablePrivateCoachingSessions): unknown {
    const obj: any = {};
    message.language !== undefined && (obj.language = Math.round(message.language));
    return obj;
  },
};

function createBaseCMsgClientToGCGetAvailablePrivateCoachingSessionsResponse(): CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse {
  return { result: 0, availableSessionsList: undefined };
}

export const CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse = {
  encode(
    message: CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.availableSessionsList !== undefined) {
      CMsgAvailablePrivateCoachingSessionList.encode(message.availableSessionsList, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetAvailablePrivateCoachingSessionsResponse();
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

          message.availableSessionsList = CMsgAvailablePrivateCoachingSessionList.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponseFromJSON(object.result)
        : 0,
      availableSessionsList: isSet(object.availableSessionsList)
        ? CMsgAvailablePrivateCoachingSessionList.fromJSON(object.availableSessionsList)
        : undefined,
    };
  },

  toJSON(message: CMsgClientToGCGetAvailablePrivateCoachingSessionsResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCGetAvailablePrivateCoachingSessionsResponse_EResponseToJSON(message.result));
    message.availableSessionsList !== undefined && (obj.availableSessionsList = message.availableSessionsList
      ? CMsgAvailablePrivateCoachingSessionList.toJSON(message.availableSessionsList)
      : undefined);
    return obj;
  },
};

function createBaseCMsgClientToGCGetAvailablePrivateCoachingSessionsSummary(): CMsgClientToGCGetAvailablePrivateCoachingSessionsSummary {
  return {};
}

export const CMsgClientToGCGetAvailablePrivateCoachingSessionsSummary = {
  encode(
    _: CMsgClientToGCGetAvailablePrivateCoachingSessionsSummary,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetAvailablePrivateCoachingSessionsSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetAvailablePrivateCoachingSessionsSummary();
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

  fromJSON(_: any): CMsgClientToGCGetAvailablePrivateCoachingSessionsSummary {
    return {};
  },

  toJSON(_: CMsgClientToGCGetAvailablePrivateCoachingSessionsSummary): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse(): CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse {
  return { result: 0, coachingSessionSummary: undefined };
}

export const CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse = {
  encode(
    message: CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.coachingSessionSummary !== undefined) {
      CMsgAvailablePrivateCoachingSessionSummary.encode(message.coachingSessionSummary, writer.uint32(18).fork())
        .ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse();
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

          message.coachingSessionSummary = CMsgAvailablePrivateCoachingSessionSummary.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponseFromJSON(object.result)
        : 0,
      coachingSessionSummary: isSet(object.coachingSessionSummary)
        ? CMsgAvailablePrivateCoachingSessionSummary.fromJSON(object.coachingSessionSummary)
        : undefined,
    };
  },

  toJSON(message: CMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse_EResponseToJSON(message.result));
    message.coachingSessionSummary !== undefined && (obj.coachingSessionSummary = message.coachingSessionSummary
      ? CMsgAvailablePrivateCoachingSessionSummary.toJSON(message.coachingSessionSummary)
      : undefined);
    return obj;
  },
};

function createBaseCMsgClientToGCJoinPrivateCoachingSessionLobby(): CMsgClientToGCJoinPrivateCoachingSessionLobby {
  return {};
}

export const CMsgClientToGCJoinPrivateCoachingSessionLobby = {
  encode(_: CMsgClientToGCJoinPrivateCoachingSessionLobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCJoinPrivateCoachingSessionLobby {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCJoinPrivateCoachingSessionLobby();
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

  fromJSON(_: any): CMsgClientToGCJoinPrivateCoachingSessionLobby {
    return {};
  },

  toJSON(_: CMsgClientToGCJoinPrivateCoachingSessionLobby): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgClientToGCJoinPrivateCoachingSessionLobbyResponse(): CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse {
  return { result: 0 };
}

export const CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse = {
  encode(
    message: CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCJoinPrivateCoachingSessionLobbyResponse();
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

  fromJSON(object: any): CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponseFromJSON(object.result)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCJoinPrivateCoachingSessionLobbyResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCJoinPrivateCoachingSessionLobbyResponse_EResponseToJSON(message.result));
    return obj;
  },
};

function createBaseCMsgClientToGCCoachFriend(): CMsgClientToGCCoachFriend {
  return { targetAccountId: 0 };
}

export const CMsgClientToGCCoachFriend = {
  encode(message: CMsgClientToGCCoachFriend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetAccountId !== 0) {
      writer.uint32(8).uint32(message.targetAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCoachFriend {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCoachFriend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
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

  fromJSON(object: any): CMsgClientToGCCoachFriend {
    return { targetAccountId: isSet(object.targetAccountId) ? Number(object.targetAccountId) : 0 };
  },

  toJSON(message: CMsgClientToGCCoachFriend): unknown {
    const obj: any = {};
    message.targetAccountId !== undefined && (obj.targetAccountId = Math.round(message.targetAccountId));
    return obj;
  },
};

function createBaseCMsgClientToGCCoachFriendResponse(): CMsgClientToGCCoachFriendResponse {
  return { result: 0 };
}

export const CMsgClientToGCCoachFriendResponse = {
  encode(message: CMsgClientToGCCoachFriendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCoachFriendResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCoachFriendResponse();
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

  fromJSON(object: any): CMsgClientToGCCoachFriendResponse {
    return { result: isSet(object.result) ? cMsgClientToGCCoachFriendResponse_EResponseFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgClientToGCCoachFriendResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = cMsgClientToGCCoachFriendResponse_EResponseToJSON(message.result));
    return obj;
  },
};

function createBaseCMsgClientToGCRespondToCoachFriendRequest(): CMsgClientToGCRespondToCoachFriendRequest {
  return { coachAccountId: 0, response: 0 };
}

export const CMsgClientToGCRespondToCoachFriendRequest = {
  encode(message: CMsgClientToGCRespondToCoachFriendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coachAccountId !== 0) {
      writer.uint32(8).uint32(message.coachAccountId);
    }
    if (message.response !== 0) {
      writer.uint32(16).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRespondToCoachFriendRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRespondToCoachFriendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.coachAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCRespondToCoachFriendRequest {
    return {
      coachAccountId: isSet(object.coachAccountId) ? Number(object.coachAccountId) : 0,
      response: isSet(object.response) ? eLobbyMemberCoachRequestStateFromJSON(object.response) : 0,
    };
  },

  toJSON(message: CMsgClientToGCRespondToCoachFriendRequest): unknown {
    const obj: any = {};
    message.coachAccountId !== undefined && (obj.coachAccountId = Math.round(message.coachAccountId));
    message.response !== undefined && (obj.response = eLobbyMemberCoachRequestStateToJSON(message.response));
    return obj;
  },
};

function createBaseCMsgClientToGCRespondToCoachFriendRequestResponse(): CMsgClientToGCRespondToCoachFriendRequestResponse {
  return { result: 0 };
}

export const CMsgClientToGCRespondToCoachFriendRequestResponse = {
  encode(
    message: CMsgClientToGCRespondToCoachFriendRequestResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRespondToCoachFriendRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRespondToCoachFriendRequestResponse();
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

  fromJSON(object: any): CMsgClientToGCRespondToCoachFriendRequestResponse {
    return {
      result: isSet(object.result)
        ? cMsgClientToGCRespondToCoachFriendRequestResponse_EResponseFromJSON(object.result)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCRespondToCoachFriendRequestResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgClientToGCRespondToCoachFriendRequestResponse_EResponseToJSON(message.result));
    return obj;
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
