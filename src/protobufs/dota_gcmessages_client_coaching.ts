/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ELobbyMemberCoachRequestState } from "./dota_gcmessages_common_lobby";
import { EMatchOutcome } from "./dota_shared_enums";

export enum ECoachTeammateRating {
  k_ECoachTeammateRating_None = 0,
  k_ECoachTeammateRating_Positive = 1,
  k_ECoachTeammateRating_Negative = 2,
  k_ECoachTeammateRating_Abusive = 3,
}

export enum EPrivateCoachingSessionState {
  k_ePrivateCoachingSessionState_Invalid = 0,
  k_ePrivateCoachingSessionState_SearchingForCoach = 1,
  k_ePrivateCoachingSessionState_CoachAssigned = 2,
  k_ePrivateCoachingSessionState_Finished = 3,
  k_ePrivateCoachingSessionState_Expired = 4,
  k_ePrivateCoachingSessionState_Abandoned = 5,
}

export enum EPrivateCoachingSessionMemberFlag {
  k_EPrivateCoachingSessionMemberFlag_Requester = 1,
  k_EPrivateCoachingSessionMemberFlag_Coach = 2,
  k_EPrivateCoachingSessionMemberFlag_LeftSession = 4,
}

export enum EPlayerCoachMatchFlag {
  k_EPlayerCoachMatchFlag_EligibleForRewards = 1,
  k_EPlayerCoachMatchFlag_PrivateCoach = 2,
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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
