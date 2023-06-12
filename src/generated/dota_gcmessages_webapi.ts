/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgDOTAMatch } from "./dota_gcmessages_common";
import { CDOTAMatchMetadata } from "./dota_match_metadata";
import {
  ELeagueDivision,
  eLeagueDivisionFromJSON,
  eLeagueDivisionToJSON,
  ELeagueRegion,
  eLeagueRegionFromJSON,
  eLeagueRegionToJSON,
} from "./dota_shared_enums";

export enum ETeamFanContentStatus {
  TEAM_FAN_CONTENT_STATUS_INVALID = 0,
  TEAM_FAN_CONTENT_STATUS_PENDING = 1,
  TEAM_FAN_CONTENT_STATUS_EVALUATED = 2,
}

export function eTeamFanContentStatusFromJSON(object: any): ETeamFanContentStatus {
  switch (object) {
    case 0:
    case "TEAM_FAN_CONTENT_STATUS_INVALID":
      return ETeamFanContentStatus.TEAM_FAN_CONTENT_STATUS_INVALID;
    case 1:
    case "TEAM_FAN_CONTENT_STATUS_PENDING":
      return ETeamFanContentStatus.TEAM_FAN_CONTENT_STATUS_PENDING;
    case 2:
    case "TEAM_FAN_CONTENT_STATUS_EVALUATED":
      return ETeamFanContentStatus.TEAM_FAN_CONTENT_STATUS_EVALUATED;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETeamFanContentStatus");
  }
}

export function eTeamFanContentStatusToJSON(object: ETeamFanContentStatus): string {
  switch (object) {
    case ETeamFanContentStatus.TEAM_FAN_CONTENT_STATUS_INVALID:
      return "TEAM_FAN_CONTENT_STATUS_INVALID";
    case ETeamFanContentStatus.TEAM_FAN_CONTENT_STATUS_PENDING:
      return "TEAM_FAN_CONTENT_STATUS_PENDING";
    case ETeamFanContentStatus.TEAM_FAN_CONTENT_STATUS_EVALUATED:
      return "TEAM_FAN_CONTENT_STATUS_EVALUATED";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETeamFanContentStatus");
  }
}

export enum ETeamFanContentAssetType {
  k_eFanContentAssetType_LogoPNG = 1,
  k_eFanContentAssetType_LogoSVG = 2,
  k_eFanContentAssetType_Logo3D = 3,
  k_eFanContentAssetType_Players = 4,
  k_eFanContentAssetType_Sprays = 5,
  k_eFanContentAssetType_Wallpapers = 6,
  k_eFanContentAssetType_Emoticons = 7,
  k_eFanContentAssetType_VoiceLines = 8,
  k_eFanContentAssetType_Localization = 9,
}

export function eTeamFanContentAssetTypeFromJSON(object: any): ETeamFanContentAssetType {
  switch (object) {
    case 1:
    case "k_eFanContentAssetType_LogoPNG":
      return ETeamFanContentAssetType.k_eFanContentAssetType_LogoPNG;
    case 2:
    case "k_eFanContentAssetType_LogoSVG":
      return ETeamFanContentAssetType.k_eFanContentAssetType_LogoSVG;
    case 3:
    case "k_eFanContentAssetType_Logo3D":
      return ETeamFanContentAssetType.k_eFanContentAssetType_Logo3D;
    case 4:
    case "k_eFanContentAssetType_Players":
      return ETeamFanContentAssetType.k_eFanContentAssetType_Players;
    case 5:
    case "k_eFanContentAssetType_Sprays":
      return ETeamFanContentAssetType.k_eFanContentAssetType_Sprays;
    case 6:
    case "k_eFanContentAssetType_Wallpapers":
      return ETeamFanContentAssetType.k_eFanContentAssetType_Wallpapers;
    case 7:
    case "k_eFanContentAssetType_Emoticons":
      return ETeamFanContentAssetType.k_eFanContentAssetType_Emoticons;
    case 8:
    case "k_eFanContentAssetType_VoiceLines":
      return ETeamFanContentAssetType.k_eFanContentAssetType_VoiceLines;
    case 9:
    case "k_eFanContentAssetType_Localization":
      return ETeamFanContentAssetType.k_eFanContentAssetType_Localization;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETeamFanContentAssetType");
  }
}

export function eTeamFanContentAssetTypeToJSON(object: ETeamFanContentAssetType): string {
  switch (object) {
    case ETeamFanContentAssetType.k_eFanContentAssetType_LogoPNG:
      return "k_eFanContentAssetType_LogoPNG";
    case ETeamFanContentAssetType.k_eFanContentAssetType_LogoSVG:
      return "k_eFanContentAssetType_LogoSVG";
    case ETeamFanContentAssetType.k_eFanContentAssetType_Logo3D:
      return "k_eFanContentAssetType_Logo3D";
    case ETeamFanContentAssetType.k_eFanContentAssetType_Players:
      return "k_eFanContentAssetType_Players";
    case ETeamFanContentAssetType.k_eFanContentAssetType_Sprays:
      return "k_eFanContentAssetType_Sprays";
    case ETeamFanContentAssetType.k_eFanContentAssetType_Wallpapers:
      return "k_eFanContentAssetType_Wallpapers";
    case ETeamFanContentAssetType.k_eFanContentAssetType_Emoticons:
      return "k_eFanContentAssetType_Emoticons";
    case ETeamFanContentAssetType.k_eFanContentAssetType_VoiceLines:
      return "k_eFanContentAssetType_VoiceLines";
    case ETeamFanContentAssetType.k_eFanContentAssetType_Localization:
      return "k_eFanContentAssetType_Localization";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETeamFanContentAssetType");
  }
}

export enum ETeamFanContentAssetStatus {
  k_eFanContentAssetStatus_None = 0,
  k_eFanContentAssetStatus_Approved = 1,
  k_eFanContentAssetStatus_Rejected = 2,
}

export function eTeamFanContentAssetStatusFromJSON(object: any): ETeamFanContentAssetStatus {
  switch (object) {
    case 0:
    case "k_eFanContentAssetStatus_None":
      return ETeamFanContentAssetStatus.k_eFanContentAssetStatus_None;
    case 1:
    case "k_eFanContentAssetStatus_Approved":
      return ETeamFanContentAssetStatus.k_eFanContentAssetStatus_Approved;
    case 2:
    case "k_eFanContentAssetStatus_Rejected":
      return ETeamFanContentAssetStatus.k_eFanContentAssetStatus_Rejected;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETeamFanContentAssetStatus");
  }
}

export function eTeamFanContentAssetStatusToJSON(object: ETeamFanContentAssetStatus): string {
  switch (object) {
    case ETeamFanContentAssetStatus.k_eFanContentAssetStatus_None:
      return "k_eFanContentAssetStatus_None";
    case ETeamFanContentAssetStatus.k_eFanContentAssetStatus_Approved:
      return "k_eFanContentAssetStatus_Approved";
    case ETeamFanContentAssetStatus.k_eFanContentAssetStatus_Rejected:
      return "k_eFanContentAssetStatus_Rejected";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETeamFanContentAssetStatus");
  }
}

export interface CMsgArcanaVotes {
  matches: CMsgArcanaVotes_Match[];
  roundTimeRemaining: number;
  roundNumber: number;
  votingState: number;
  isCurrentRoundCalibrating: boolean;
  closestActiveMatchId: number;
  eventId: number;
  votingStartTime: number;
}

export enum CMsgArcanaVotes_VotingState {
  FINISHED = 0,
  IN_PROGRESS = 1,
  IN_FUTURE = 2,
}

export function cMsgArcanaVotes_VotingStateFromJSON(object: any): CMsgArcanaVotes_VotingState {
  switch (object) {
    case 0:
    case "FINISHED":
      return CMsgArcanaVotes_VotingState.FINISHED;
    case 1:
    case "IN_PROGRESS":
      return CMsgArcanaVotes_VotingState.IN_PROGRESS;
    case 2:
    case "IN_FUTURE":
      return CMsgArcanaVotes_VotingState.IN_FUTURE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgArcanaVotes_VotingState");
  }
}

export function cMsgArcanaVotes_VotingStateToJSON(object: CMsgArcanaVotes_VotingState): string {
  switch (object) {
    case CMsgArcanaVotes_VotingState.FINISHED:
      return "FINISHED";
    case CMsgArcanaVotes_VotingState.IN_PROGRESS:
      return "IN_PROGRESS";
    case CMsgArcanaVotes_VotingState.IN_FUTURE:
      return "IN_FUTURE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgArcanaVotes_VotingState");
  }
}

export interface CMsgArcanaVotes_Match {
  matchId: number;
  heroId0: number;
  heroId1: number;
  heroSeeding0: number;
  heroSeeding1: number;
  voteCount0: number;
  voteCount1: number;
  votingState: number;
  roundNumber: number;
  isVotesHidden: boolean;
  calibrationTimeRemaining: number;
}

export interface CMsgDOTADPCFeed {
  elements: CMsgDOTADPCFeed_Element[];
}

export enum CMsgDOTADPCFeed_EFeedElementType {
  FEED_SERIES_RESULT = 1,
  FEED_MATCH_POPULAR = 2,
  FEED_TEAM_UPCOMING_MATCH = 3,
  FEED_TEAM_LEAGUE_RESULT = 4,
  FEED_TEAM_ADD_PLAYER = 5,
  FEED_TEAM_REMOVE_PLAYER = 6,
  FEED_TEAM_DISBAND = 7,
  FEED_LEAGUE_UPCOMING = 8,
  FEED_LEAGUE_CONCLUDED = 9,
  FEED_DPC_STANDINGS = 10,
  FEED_ALERT_PREDICTIONS = 11,
  FEED_ALERT_FANTASY = 12,
  FEED_LEAGUE_LIVE_MATCH = 13,
  FEED_LEAGUE_INPROGRESS_SERIES = 14,
}

export function cMsgDOTADPCFeed_EFeedElementTypeFromJSON(object: any): CMsgDOTADPCFeed_EFeedElementType {
  switch (object) {
    case 1:
    case "FEED_SERIES_RESULT":
      return CMsgDOTADPCFeed_EFeedElementType.FEED_SERIES_RESULT;
    case 2:
    case "FEED_MATCH_POPULAR":
      return CMsgDOTADPCFeed_EFeedElementType.FEED_MATCH_POPULAR;
    case 3:
    case "FEED_TEAM_UPCOMING_MATCH":
      return CMsgDOTADPCFeed_EFeedElementType.FEED_TEAM_UPCOMING_MATCH;
    case 4:
    case "FEED_TEAM_LEAGUE_RESULT":
      return CMsgDOTADPCFeed_EFeedElementType.FEED_TEAM_LEAGUE_RESULT;
    case 5:
    case "FEED_TEAM_ADD_PLAYER":
      return CMsgDOTADPCFeed_EFeedElementType.FEED_TEAM_ADD_PLAYER;
    case 6:
    case "FEED_TEAM_REMOVE_PLAYER":
      return CMsgDOTADPCFeed_EFeedElementType.FEED_TEAM_REMOVE_PLAYER;
    case 7:
    case "FEED_TEAM_DISBAND":
      return CMsgDOTADPCFeed_EFeedElementType.FEED_TEAM_DISBAND;
    case 8:
    case "FEED_LEAGUE_UPCOMING":
      return CMsgDOTADPCFeed_EFeedElementType.FEED_LEAGUE_UPCOMING;
    case 9:
    case "FEED_LEAGUE_CONCLUDED":
      return CMsgDOTADPCFeed_EFeedElementType.FEED_LEAGUE_CONCLUDED;
    case 10:
    case "FEED_DPC_STANDINGS":
      return CMsgDOTADPCFeed_EFeedElementType.FEED_DPC_STANDINGS;
    case 11:
    case "FEED_ALERT_PREDICTIONS":
      return CMsgDOTADPCFeed_EFeedElementType.FEED_ALERT_PREDICTIONS;
    case 12:
    case "FEED_ALERT_FANTASY":
      return CMsgDOTADPCFeed_EFeedElementType.FEED_ALERT_FANTASY;
    case 13:
    case "FEED_LEAGUE_LIVE_MATCH":
      return CMsgDOTADPCFeed_EFeedElementType.FEED_LEAGUE_LIVE_MATCH;
    case 14:
    case "FEED_LEAGUE_INPROGRESS_SERIES":
      return CMsgDOTADPCFeed_EFeedElementType.FEED_LEAGUE_INPROGRESS_SERIES;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTADPCFeed_EFeedElementType",
      );
  }
}

export function cMsgDOTADPCFeed_EFeedElementTypeToJSON(object: CMsgDOTADPCFeed_EFeedElementType): string {
  switch (object) {
    case CMsgDOTADPCFeed_EFeedElementType.FEED_SERIES_RESULT:
      return "FEED_SERIES_RESULT";
    case CMsgDOTADPCFeed_EFeedElementType.FEED_MATCH_POPULAR:
      return "FEED_MATCH_POPULAR";
    case CMsgDOTADPCFeed_EFeedElementType.FEED_TEAM_UPCOMING_MATCH:
      return "FEED_TEAM_UPCOMING_MATCH";
    case CMsgDOTADPCFeed_EFeedElementType.FEED_TEAM_LEAGUE_RESULT:
      return "FEED_TEAM_LEAGUE_RESULT";
    case CMsgDOTADPCFeed_EFeedElementType.FEED_TEAM_ADD_PLAYER:
      return "FEED_TEAM_ADD_PLAYER";
    case CMsgDOTADPCFeed_EFeedElementType.FEED_TEAM_REMOVE_PLAYER:
      return "FEED_TEAM_REMOVE_PLAYER";
    case CMsgDOTADPCFeed_EFeedElementType.FEED_TEAM_DISBAND:
      return "FEED_TEAM_DISBAND";
    case CMsgDOTADPCFeed_EFeedElementType.FEED_LEAGUE_UPCOMING:
      return "FEED_LEAGUE_UPCOMING";
    case CMsgDOTADPCFeed_EFeedElementType.FEED_LEAGUE_CONCLUDED:
      return "FEED_LEAGUE_CONCLUDED";
    case CMsgDOTADPCFeed_EFeedElementType.FEED_DPC_STANDINGS:
      return "FEED_DPC_STANDINGS";
    case CMsgDOTADPCFeed_EFeedElementType.FEED_ALERT_PREDICTIONS:
      return "FEED_ALERT_PREDICTIONS";
    case CMsgDOTADPCFeed_EFeedElementType.FEED_ALERT_FANTASY:
      return "FEED_ALERT_FANTASY";
    case CMsgDOTADPCFeed_EFeedElementType.FEED_LEAGUE_LIVE_MATCH:
      return "FEED_LEAGUE_LIVE_MATCH";
    case CMsgDOTADPCFeed_EFeedElementType.FEED_LEAGUE_INPROGRESS_SERIES:
      return "FEED_LEAGUE_INPROGRESS_SERIES";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTADPCFeed_EFeedElementType",
      );
  }
}

export interface CMsgDOTADPCFeed_Element {
  type: CMsgDOTADPCFeed_EFeedElementType;
  timestamp: number;
  seriesId: number;
  matchId: string;
  teamId: number;
  accountId: number;
  leagueId: number;
  nodeId: number;
  serverSteamId: string;
  data1: number;
  data2: number;
  data3: number;
  data4: number;
}

export interface CMsgDOTADPCUserInfo {
  isPlusSubscriber: boolean;
}

export interface CMsgDraftTrivia {
  hasValidMatch: boolean;
  matchHeroInfo: CMsgDraftTrivia_DraftTriviaMatchInfo | undefined;
  matchRankTier: number;
  endTime: number;
  eventId: number;
  currentMatchVotedRadiant: boolean;
  previousResult: CMsgDraftTrivia_PreviousResult | undefined;
  currentStreak: number;
}

export interface CMsgDraftTrivia_DraftTriviaHeroInfo {
  heroId: number;
  role: number;
}

export interface CMsgDraftTrivia_DraftTriviaMatchInfo {
  radiantHeroes: CMsgDraftTrivia_DraftTriviaHeroInfo[];
  direHeroes: CMsgDraftTrivia_DraftTriviaHeroInfo[];
}

export interface CMsgDraftTrivia_PreviousResult {
  votedCorrectly: boolean;
  votedRadiant: boolean;
  matchHeroInfo: CMsgDraftTrivia_DraftTriviaMatchInfo | undefined;
  matchRankTier: number;
  endTime: number;
  matchId: string;
}

export interface CMsgTeamFanContentAssetStatus {
  assetType: ETeamFanContentAssetType;
  assetIndex: number;
  assetStatus: ETeamFanContentAssetStatus;
  crc: number;
}

export interface CMsgTeamFanContentAssetStatusResponse {
  result: CMsgTeamFanContentAssetStatusResponse_EResult;
}

export enum CMsgTeamFanContentAssetStatusResponse_EResult {
  k_eSuccess = 0,
  k_eInternalError = 1,
}

export function cMsgTeamFanContentAssetStatusResponse_EResultFromJSON(
  object: any,
): CMsgTeamFanContentAssetStatusResponse_EResult {
  switch (object) {
    case 0:
    case "k_eSuccess":
      return CMsgTeamFanContentAssetStatusResponse_EResult.k_eSuccess;
    case 1:
    case "k_eInternalError":
      return CMsgTeamFanContentAssetStatusResponse_EResult.k_eInternalError;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgTeamFanContentAssetStatusResponse_EResult",
      );
  }
}

export function cMsgTeamFanContentAssetStatusResponse_EResultToJSON(
  object: CMsgTeamFanContentAssetStatusResponse_EResult,
): string {
  switch (object) {
    case CMsgTeamFanContentAssetStatusResponse_EResult.k_eSuccess:
      return "k_eSuccess";
    case CMsgTeamFanContentAssetStatusResponse_EResult.k_eInternalError:
      return "k_eInternalError";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgTeamFanContentAssetStatusResponse_EResult",
      );
  }
}

export interface CMsgTeamFanContentStatus {
  teamStatusList: CMsgTeamFanContentStatus_TeamStatus[];
}

export interface CMsgTeamFanContentStatus_TeamStatus {
  name: string;
  teamId: number;
  logoUrl: string;
  status: ETeamFanContentStatus;
  timestamp: number;
  ugcLogo: string;
  workshopAccountId: number;
  abbreviation: string;
  voicelineCount: number;
  sprayCount: number;
  emoticonCount: number;
  wallpaperCount: number;
  comment: string;
  commentTimestamp: number;
  assetStatus: CMsgTeamFanContentAssetStatus[];
  emailTimestamp: number;
  emailTier: number;
  languages: string;
}

export interface CMsgTeamFanContentAutographStatus {
  teamAutographs: CMsgTeamFanContentAutographStatus_TeamStatus[];
}

export interface CMsgTeamFanContentAutographStatus_AutographStatus {
  proName: string;
  accountId: number;
  timestamp: number;
  file: string;
}

export interface CMsgTeamFanContentAutographStatus_TeamStatus {
  name: string;
  teamId: number;
  autographs: CMsgTeamFanContentAutographStatus_AutographStatus[];
  workshopAccountId: number;
}

export interface CMsgDPCEvent {
  event: CMsgDPCEvent_ELeagueEvent;
  eventType: CMsgDPCEvent_ELeagueEventType;
  leagues: CMsgDPCEvent_League[];
  registrationPeriod: number;
  isEventUpcoming: boolean;
  isEventCompleted: boolean;
  eventName: string;
  multicastLeagueId: number;
  multicastStreams: number[];
  tour: CMsgDPCEvent_ETour;
  timestampDropLock: number;
  timestampAddLock: number;
  timestampContentDeadline: number;
  isFantasyEnabled: boolean;
  timestampContentReviewDeadline: number;
}

export enum CMsgDPCEvent_ELeagueEvent {
  EVENT_INVALID = 0,
  SPRING_2021_LEAGUE = 1,
  SPRING_2021_MAJOR = 2,
  INTERNATIONAL_2021_QUALIFIERS = 3,
  INTERNATIONAL_2021 = 4,
  WINTER_2021_LEAGUE = 5,
  WINTER_2021_LEAGUE_FINALS = 6,
  SPRING_2022_LEAGUE = 7,
  SPRING_2022_MAJOR = 8,
  SUMMER_2022_LEAGUE = 9,
  SUMMER_2022_MAJOR = 10,
  INTERNATIONAL_2022 = 11,
  CHINA_REGIONAL_FINALS = 12,
  INTERNATIONAL_2022_REGIONAL_QUALIFIERS = 13,
  INTERNATIONAL_2022_LAST_CHANCE_QUALIFIERS = 14,
  WINTER_2023_LEAGUE = 15,
  WINTER_2023_MAJOR = 16,
  SPRING_2023_LEAGUE = 17,
  SPRING_2023_MAJOR = 18,
  SUMMER_2023_LEAGUE = 19,
  SUMMER_2023_MAJOR = 20,
  INTERNATIONAL_2023 = 21,
}

export function cMsgDPCEvent_ELeagueEventFromJSON(object: any): CMsgDPCEvent_ELeagueEvent {
  switch (object) {
    case 0:
    case "EVENT_INVALID":
      return CMsgDPCEvent_ELeagueEvent.EVENT_INVALID;
    case 1:
    case "SPRING_2021_LEAGUE":
      return CMsgDPCEvent_ELeagueEvent.SPRING_2021_LEAGUE;
    case 2:
    case "SPRING_2021_MAJOR":
      return CMsgDPCEvent_ELeagueEvent.SPRING_2021_MAJOR;
    case 3:
    case "INTERNATIONAL_2021_QUALIFIERS":
      return CMsgDPCEvent_ELeagueEvent.INTERNATIONAL_2021_QUALIFIERS;
    case 4:
    case "INTERNATIONAL_2021":
      return CMsgDPCEvent_ELeagueEvent.INTERNATIONAL_2021;
    case 5:
    case "WINTER_2021_LEAGUE":
      return CMsgDPCEvent_ELeagueEvent.WINTER_2021_LEAGUE;
    case 6:
    case "WINTER_2021_LEAGUE_FINALS":
      return CMsgDPCEvent_ELeagueEvent.WINTER_2021_LEAGUE_FINALS;
    case 7:
    case "SPRING_2022_LEAGUE":
      return CMsgDPCEvent_ELeagueEvent.SPRING_2022_LEAGUE;
    case 8:
    case "SPRING_2022_MAJOR":
      return CMsgDPCEvent_ELeagueEvent.SPRING_2022_MAJOR;
    case 9:
    case "SUMMER_2022_LEAGUE":
      return CMsgDPCEvent_ELeagueEvent.SUMMER_2022_LEAGUE;
    case 10:
    case "SUMMER_2022_MAJOR":
      return CMsgDPCEvent_ELeagueEvent.SUMMER_2022_MAJOR;
    case 11:
    case "INTERNATIONAL_2022":
      return CMsgDPCEvent_ELeagueEvent.INTERNATIONAL_2022;
    case 12:
    case "CHINA_REGIONAL_FINALS":
      return CMsgDPCEvent_ELeagueEvent.CHINA_REGIONAL_FINALS;
    case 13:
    case "INTERNATIONAL_2022_REGIONAL_QUALIFIERS":
      return CMsgDPCEvent_ELeagueEvent.INTERNATIONAL_2022_REGIONAL_QUALIFIERS;
    case 14:
    case "INTERNATIONAL_2022_LAST_CHANCE_QUALIFIERS":
      return CMsgDPCEvent_ELeagueEvent.INTERNATIONAL_2022_LAST_CHANCE_QUALIFIERS;
    case 15:
    case "WINTER_2023_LEAGUE":
      return CMsgDPCEvent_ELeagueEvent.WINTER_2023_LEAGUE;
    case 16:
    case "WINTER_2023_MAJOR":
      return CMsgDPCEvent_ELeagueEvent.WINTER_2023_MAJOR;
    case 17:
    case "SPRING_2023_LEAGUE":
      return CMsgDPCEvent_ELeagueEvent.SPRING_2023_LEAGUE;
    case 18:
    case "SPRING_2023_MAJOR":
      return CMsgDPCEvent_ELeagueEvent.SPRING_2023_MAJOR;
    case 19:
    case "SUMMER_2023_LEAGUE":
      return CMsgDPCEvent_ELeagueEvent.SUMMER_2023_LEAGUE;
    case 20:
    case "SUMMER_2023_MAJOR":
      return CMsgDPCEvent_ELeagueEvent.SUMMER_2023_MAJOR;
    case 21:
    case "INTERNATIONAL_2023":
      return CMsgDPCEvent_ELeagueEvent.INTERNATIONAL_2023;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgDPCEvent_ELeagueEvent");
  }
}

export function cMsgDPCEvent_ELeagueEventToJSON(object: CMsgDPCEvent_ELeagueEvent): string {
  switch (object) {
    case CMsgDPCEvent_ELeagueEvent.EVENT_INVALID:
      return "EVENT_INVALID";
    case CMsgDPCEvent_ELeagueEvent.SPRING_2021_LEAGUE:
      return "SPRING_2021_LEAGUE";
    case CMsgDPCEvent_ELeagueEvent.SPRING_2021_MAJOR:
      return "SPRING_2021_MAJOR";
    case CMsgDPCEvent_ELeagueEvent.INTERNATIONAL_2021_QUALIFIERS:
      return "INTERNATIONAL_2021_QUALIFIERS";
    case CMsgDPCEvent_ELeagueEvent.INTERNATIONAL_2021:
      return "INTERNATIONAL_2021";
    case CMsgDPCEvent_ELeagueEvent.WINTER_2021_LEAGUE:
      return "WINTER_2021_LEAGUE";
    case CMsgDPCEvent_ELeagueEvent.WINTER_2021_LEAGUE_FINALS:
      return "WINTER_2021_LEAGUE_FINALS";
    case CMsgDPCEvent_ELeagueEvent.SPRING_2022_LEAGUE:
      return "SPRING_2022_LEAGUE";
    case CMsgDPCEvent_ELeagueEvent.SPRING_2022_MAJOR:
      return "SPRING_2022_MAJOR";
    case CMsgDPCEvent_ELeagueEvent.SUMMER_2022_LEAGUE:
      return "SUMMER_2022_LEAGUE";
    case CMsgDPCEvent_ELeagueEvent.SUMMER_2022_MAJOR:
      return "SUMMER_2022_MAJOR";
    case CMsgDPCEvent_ELeagueEvent.INTERNATIONAL_2022:
      return "INTERNATIONAL_2022";
    case CMsgDPCEvent_ELeagueEvent.CHINA_REGIONAL_FINALS:
      return "CHINA_REGIONAL_FINALS";
    case CMsgDPCEvent_ELeagueEvent.INTERNATIONAL_2022_REGIONAL_QUALIFIERS:
      return "INTERNATIONAL_2022_REGIONAL_QUALIFIERS";
    case CMsgDPCEvent_ELeagueEvent.INTERNATIONAL_2022_LAST_CHANCE_QUALIFIERS:
      return "INTERNATIONAL_2022_LAST_CHANCE_QUALIFIERS";
    case CMsgDPCEvent_ELeagueEvent.WINTER_2023_LEAGUE:
      return "WINTER_2023_LEAGUE";
    case CMsgDPCEvent_ELeagueEvent.WINTER_2023_MAJOR:
      return "WINTER_2023_MAJOR";
    case CMsgDPCEvent_ELeagueEvent.SPRING_2023_LEAGUE:
      return "SPRING_2023_LEAGUE";
    case CMsgDPCEvent_ELeagueEvent.SPRING_2023_MAJOR:
      return "SPRING_2023_MAJOR";
    case CMsgDPCEvent_ELeagueEvent.SUMMER_2023_LEAGUE:
      return "SUMMER_2023_LEAGUE";
    case CMsgDPCEvent_ELeagueEvent.SUMMER_2023_MAJOR:
      return "SUMMER_2023_MAJOR";
    case CMsgDPCEvent_ELeagueEvent.INTERNATIONAL_2023:
      return "INTERNATIONAL_2023";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgDPCEvent_ELeagueEvent");
  }
}

export enum CMsgDPCEvent_ELeagueEventPhase {
  PHASE_INVALID = 0,
  WILD_CARD = 1,
  GROUP_STAGE = 2,
  GROUP_A = 3,
  GROUP_B = 4,
  OVERALL = 5,
  PLAYOFF = 6,
  RESULTS = 7,
}

export function cMsgDPCEvent_ELeagueEventPhaseFromJSON(object: any): CMsgDPCEvent_ELeagueEventPhase {
  switch (object) {
    case 0:
    case "PHASE_INVALID":
      return CMsgDPCEvent_ELeagueEventPhase.PHASE_INVALID;
    case 1:
    case "WILD_CARD":
      return CMsgDPCEvent_ELeagueEventPhase.WILD_CARD;
    case 2:
    case "GROUP_STAGE":
      return CMsgDPCEvent_ELeagueEventPhase.GROUP_STAGE;
    case 3:
    case "GROUP_A":
      return CMsgDPCEvent_ELeagueEventPhase.GROUP_A;
    case 4:
    case "GROUP_B":
      return CMsgDPCEvent_ELeagueEventPhase.GROUP_B;
    case 5:
    case "OVERALL":
      return CMsgDPCEvent_ELeagueEventPhase.OVERALL;
    case 6:
    case "PLAYOFF":
      return CMsgDPCEvent_ELeagueEventPhase.PLAYOFF;
    case 7:
    case "RESULTS":
      return CMsgDPCEvent_ELeagueEventPhase.RESULTS;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDPCEvent_ELeagueEventPhase",
      );
  }
}

export function cMsgDPCEvent_ELeagueEventPhaseToJSON(object: CMsgDPCEvent_ELeagueEventPhase): string {
  switch (object) {
    case CMsgDPCEvent_ELeagueEventPhase.PHASE_INVALID:
      return "PHASE_INVALID";
    case CMsgDPCEvent_ELeagueEventPhase.WILD_CARD:
      return "WILD_CARD";
    case CMsgDPCEvent_ELeagueEventPhase.GROUP_STAGE:
      return "GROUP_STAGE";
    case CMsgDPCEvent_ELeagueEventPhase.GROUP_A:
      return "GROUP_A";
    case CMsgDPCEvent_ELeagueEventPhase.GROUP_B:
      return "GROUP_B";
    case CMsgDPCEvent_ELeagueEventPhase.OVERALL:
      return "OVERALL";
    case CMsgDPCEvent_ELeagueEventPhase.PLAYOFF:
      return "PLAYOFF";
    case CMsgDPCEvent_ELeagueEventPhase.RESULTS:
      return "RESULTS";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDPCEvent_ELeagueEventPhase",
      );
  }
}

export enum CMsgDPCEvent_ELeagueEventType {
  UNKNOWN = 0,
  LEAGUE = 1,
  MAJOR = 2,
  INTERNATIONAL_QUALIFIERS = 3,
  INTERNATIONAL = 4,
  LEAGUE_FINALS = 5,
}

export function cMsgDPCEvent_ELeagueEventTypeFromJSON(object: any): CMsgDPCEvent_ELeagueEventType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return CMsgDPCEvent_ELeagueEventType.UNKNOWN;
    case 1:
    case "LEAGUE":
      return CMsgDPCEvent_ELeagueEventType.LEAGUE;
    case 2:
    case "MAJOR":
      return CMsgDPCEvent_ELeagueEventType.MAJOR;
    case 3:
    case "INTERNATIONAL_QUALIFIERS":
      return CMsgDPCEvent_ELeagueEventType.INTERNATIONAL_QUALIFIERS;
    case 4:
    case "INTERNATIONAL":
      return CMsgDPCEvent_ELeagueEventType.INTERNATIONAL;
    case 5:
    case "LEAGUE_FINALS":
      return CMsgDPCEvent_ELeagueEventType.LEAGUE_FINALS;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDPCEvent_ELeagueEventType",
      );
  }
}

export function cMsgDPCEvent_ELeagueEventTypeToJSON(object: CMsgDPCEvent_ELeagueEventType): string {
  switch (object) {
    case CMsgDPCEvent_ELeagueEventType.UNKNOWN:
      return "UNKNOWN";
    case CMsgDPCEvent_ELeagueEventType.LEAGUE:
      return "LEAGUE";
    case CMsgDPCEvent_ELeagueEventType.MAJOR:
      return "MAJOR";
    case CMsgDPCEvent_ELeagueEventType.INTERNATIONAL_QUALIFIERS:
      return "INTERNATIONAL_QUALIFIERS";
    case CMsgDPCEvent_ELeagueEventType.INTERNATIONAL:
      return "INTERNATIONAL";
    case CMsgDPCEvent_ELeagueEventType.LEAGUE_FINALS:
      return "LEAGUE_FINALS";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDPCEvent_ELeagueEventType",
      );
  }
}

export enum CMsgDPCEvent_ETour {
  TOUR_NONE = 0,
  TOUR_1 = 1,
  TOUR_2 = 2,
  TOUR_3 = 3,
}

export function cMsgDPCEvent_ETourFromJSON(object: any): CMsgDPCEvent_ETour {
  switch (object) {
    case 0:
    case "TOUR_NONE":
      return CMsgDPCEvent_ETour.TOUR_NONE;
    case 1:
    case "TOUR_1":
      return CMsgDPCEvent_ETour.TOUR_1;
    case 2:
    case "TOUR_2":
      return CMsgDPCEvent_ETour.TOUR_2;
    case 3:
    case "TOUR_3":
      return CMsgDPCEvent_ETour.TOUR_3;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgDPCEvent_ETour");
  }
}

export function cMsgDPCEvent_ETourToJSON(object: CMsgDPCEvent_ETour): string {
  switch (object) {
    case CMsgDPCEvent_ETour.TOUR_NONE:
      return "TOUR_NONE";
    case CMsgDPCEvent_ETour.TOUR_1:
      return "TOUR_1";
    case CMsgDPCEvent_ETour.TOUR_2:
      return "TOUR_2";
    case CMsgDPCEvent_ETour.TOUR_3:
      return "TOUR_3";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgDPCEvent_ETour");
  }
}

export interface CMsgDPCEvent_PhaseInfo {
  phase: CMsgDPCEvent_ELeagueEventPhase;
  nodeGroupId: number;
}

export interface CMsgDPCEvent_League {
  region: ELeagueRegion;
  division: ELeagueDivision;
  leagueId: number;
  phases: CMsgDPCEvent_PhaseInfo[];
}

export interface CMsgDPCEventList {
  events: CMsgDPCEvent[];
}

export interface CMsgDOTAFantasyCardLineup {
  periods: CMsgDOTAFantasyCardLineup_Period[];
}

export interface CMsgDOTAFantasyCardLineup_CardBonus {
  bonusStat: number;
  bonusValue: number;
}

export interface CMsgDOTAFantasyCardLineup_Card {
  playerAccountId: number;
  playerName: string;
  teamId: number;
  teamName: string;
  role: number;
  bonuses: CMsgDOTAFantasyCardLineup_CardBonus[];
  score: number;
  finalized: boolean;
  itemId: string;
}

export interface CMsgDOTAFantasyCardLineup_League {
  leagueId: number;
  cards: CMsgDOTAFantasyCardLineup_Card[];
  score: number;
}

export interface CMsgDOTAFantasyCardLineup_Period {
  fantasyPeriod: number;
  timestampStart: number;
  timestampEnd: number;
  leagues: CMsgDOTAFantasyCardLineup_League[];
}

export interface CMsgDOTAFantasyCardList {
  cards: CMsgDOTAFantasyCardList_Card[];
}

export interface CMsgDOTAFantasyCardList_CardBonus {
  bonusStat: number;
  bonusValue: number;
}

export interface CMsgDOTAFantasyCardList_Card {
  playerAccountId: number;
  playerName: string;
  teamId: number;
  teamName: string;
  role: number;
  bonuses: CMsgDOTAFantasyCardList_CardBonus[];
  itemId: string;
}

export interface CMsgChatToxicityToxicPlayerMatchesReport {
  rows: CMsgChatToxicityToxicPlayerMatchesReport_IndividualRow[];
}

export interface CMsgChatToxicityToxicPlayerMatchesReport_IndividualRow {
  playerAccountId: number;
  numMatchesSeen: number;
  numMessages: number;
  numMessagesToxic: number;
  firstMatchSeen: string;
  lastMatchSeen: string;
}

export interface CMsgChatToxicityReport {
  numMatchesSeen: number;
  numMessages: number;
  numMessagesMlThinksToxic: number;
  status: string;
  result: number;
  message: string;
}

export interface CMsgGetTeamAuditInformation {
  teamId: number;
  teamName: string;
  actions: CMsgGetTeamAuditInformation_Action[];
  lastUpdated: number;
}

export interface CMsgGetTeamAuditInformation_Action {
  registrationPeriod: number;
  accountId: number;
  action: number;
  timestamp: number;
  playerName: string;
  playerRealName: string;
}

export interface CMsgDOTADPCMatch {
  match: CMsgDOTAMatch | undefined;
  metadata: CDOTAMatchMetadata | undefined;
}

function createBaseCMsgArcanaVotes(): CMsgArcanaVotes {
  return {
    matches: [],
    roundTimeRemaining: 0,
    roundNumber: 0,
    votingState: 0,
    isCurrentRoundCalibrating: false,
    closestActiveMatchId: 0,
    eventId: 0,
    votingStartTime: 0,
  };
}

export const CMsgArcanaVotes = {
  encode(message: CMsgArcanaVotes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.matches) {
      CMsgArcanaVotes_Match.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.roundTimeRemaining !== 0) {
      writer.uint32(16).uint32(message.roundTimeRemaining);
    }
    if (message.roundNumber !== 0) {
      writer.uint32(24).uint32(message.roundNumber);
    }
    if (message.votingState !== 0) {
      writer.uint32(32).uint32(message.votingState);
    }
    if (message.isCurrentRoundCalibrating === true) {
      writer.uint32(40).bool(message.isCurrentRoundCalibrating);
    }
    if (message.closestActiveMatchId !== 0) {
      writer.uint32(48).uint32(message.closestActiveMatchId);
    }
    if (message.eventId !== 0) {
      writer.uint32(56).uint32(message.eventId);
    }
    if (message.votingStartTime !== 0) {
      writer.uint32(64).uint32(message.votingStartTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgArcanaVotes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgArcanaVotes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.matches.push(CMsgArcanaVotes_Match.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.roundTimeRemaining = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.roundNumber = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.votingState = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.isCurrentRoundCalibrating = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.closestActiveMatchId = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.votingStartTime = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgArcanaVotes {
    return {
      matches: Array.isArray(object?.matches) ? object.matches.map((e: any) => CMsgArcanaVotes_Match.fromJSON(e)) : [],
      roundTimeRemaining: isSet(object.roundTimeRemaining) ? Number(object.roundTimeRemaining) : 0,
      roundNumber: isSet(object.roundNumber) ? Number(object.roundNumber) : 0,
      votingState: isSet(object.votingState) ? Number(object.votingState) : 0,
      isCurrentRoundCalibrating: isSet(object.isCurrentRoundCalibrating)
        ? Boolean(object.isCurrentRoundCalibrating)
        : false,
      closestActiveMatchId: isSet(object.closestActiveMatchId) ? Number(object.closestActiveMatchId) : 0,
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      votingStartTime: isSet(object.votingStartTime) ? Number(object.votingStartTime) : 0,
    };
  },

  toJSON(message: CMsgArcanaVotes): unknown {
    const obj: any = {};
    if (message.matches) {
      obj.matches = message.matches.map((e) => e ? CMsgArcanaVotes_Match.toJSON(e) : undefined);
    } else {
      obj.matches = [];
    }
    message.roundTimeRemaining !== undefined && (obj.roundTimeRemaining = Math.round(message.roundTimeRemaining));
    message.roundNumber !== undefined && (obj.roundNumber = Math.round(message.roundNumber));
    message.votingState !== undefined && (obj.votingState = Math.round(message.votingState));
    message.isCurrentRoundCalibrating !== undefined &&
      (obj.isCurrentRoundCalibrating = message.isCurrentRoundCalibrating);
    message.closestActiveMatchId !== undefined && (obj.closestActiveMatchId = Math.round(message.closestActiveMatchId));
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    message.votingStartTime !== undefined && (obj.votingStartTime = Math.round(message.votingStartTime));
    return obj;
  },
};

function createBaseCMsgArcanaVotes_Match(): CMsgArcanaVotes_Match {
  return {
    matchId: 0,
    heroId0: 0,
    heroId1: 0,
    heroSeeding0: 0,
    heroSeeding1: 0,
    voteCount0: 0,
    voteCount1: 0,
    votingState: 0,
    roundNumber: 0,
    isVotesHidden: false,
    calibrationTimeRemaining: 0,
  };
}

export const CMsgArcanaVotes_Match = {
  encode(message: CMsgArcanaVotes_Match, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== 0) {
      writer.uint32(8).uint32(message.matchId);
    }
    if (message.heroId0 !== 0) {
      writer.uint32(16).uint32(message.heroId0);
    }
    if (message.heroId1 !== 0) {
      writer.uint32(24).uint32(message.heroId1);
    }
    if (message.heroSeeding0 !== 0) {
      writer.uint32(32).uint32(message.heroSeeding0);
    }
    if (message.heroSeeding1 !== 0) {
      writer.uint32(40).uint32(message.heroSeeding1);
    }
    if (message.voteCount0 !== 0) {
      writer.uint32(48).uint32(message.voteCount0);
    }
    if (message.voteCount1 !== 0) {
      writer.uint32(56).uint32(message.voteCount1);
    }
    if (message.votingState !== 0) {
      writer.uint32(64).uint32(message.votingState);
    }
    if (message.roundNumber !== 0) {
      writer.uint32(72).uint32(message.roundNumber);
    }
    if (message.isVotesHidden === true) {
      writer.uint32(80).bool(message.isVotesHidden);
    }
    if (message.calibrationTimeRemaining !== 0) {
      writer.uint32(88).uint32(message.calibrationTimeRemaining);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgArcanaVotes_Match {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgArcanaVotes_Match();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.matchId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.heroId0 = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.heroId1 = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.heroSeeding0 = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.heroSeeding1 = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.voteCount0 = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.voteCount1 = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.votingState = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.roundNumber = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.isVotesHidden = reader.bool();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.calibrationTimeRemaining = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgArcanaVotes_Match {
    return {
      matchId: isSet(object.matchId) ? Number(object.matchId) : 0,
      heroId0: isSet(object.heroId0) ? Number(object.heroId0) : 0,
      heroId1: isSet(object.heroId1) ? Number(object.heroId1) : 0,
      heroSeeding0: isSet(object.heroSeeding0) ? Number(object.heroSeeding0) : 0,
      heroSeeding1: isSet(object.heroSeeding1) ? Number(object.heroSeeding1) : 0,
      voteCount0: isSet(object.voteCount0) ? Number(object.voteCount0) : 0,
      voteCount1: isSet(object.voteCount1) ? Number(object.voteCount1) : 0,
      votingState: isSet(object.votingState) ? Number(object.votingState) : 0,
      roundNumber: isSet(object.roundNumber) ? Number(object.roundNumber) : 0,
      isVotesHidden: isSet(object.isVotesHidden) ? Boolean(object.isVotesHidden) : false,
      calibrationTimeRemaining: isSet(object.calibrationTimeRemaining) ? Number(object.calibrationTimeRemaining) : 0,
    };
  },

  toJSON(message: CMsgArcanaVotes_Match): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = Math.round(message.matchId));
    message.heroId0 !== undefined && (obj.heroId0 = Math.round(message.heroId0));
    message.heroId1 !== undefined && (obj.heroId1 = Math.round(message.heroId1));
    message.heroSeeding0 !== undefined && (obj.heroSeeding0 = Math.round(message.heroSeeding0));
    message.heroSeeding1 !== undefined && (obj.heroSeeding1 = Math.round(message.heroSeeding1));
    message.voteCount0 !== undefined && (obj.voteCount0 = Math.round(message.voteCount0));
    message.voteCount1 !== undefined && (obj.voteCount1 = Math.round(message.voteCount1));
    message.votingState !== undefined && (obj.votingState = Math.round(message.votingState));
    message.roundNumber !== undefined && (obj.roundNumber = Math.round(message.roundNumber));
    message.isVotesHidden !== undefined && (obj.isVotesHidden = message.isVotesHidden);
    message.calibrationTimeRemaining !== undefined &&
      (obj.calibrationTimeRemaining = Math.round(message.calibrationTimeRemaining));
    return obj;
  },
};

function createBaseCMsgDOTADPCFeed(): CMsgDOTADPCFeed {
  return { elements: [] };
}

export const CMsgDOTADPCFeed = {
  encode(message: CMsgDOTADPCFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.elements) {
      CMsgDOTADPCFeed_Element.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCFeed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.elements.push(CMsgDOTADPCFeed_Element.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTADPCFeed {
    return {
      elements: Array.isArray(object?.elements)
        ? object.elements.map((e: any) => CMsgDOTADPCFeed_Element.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTADPCFeed): unknown {
    const obj: any = {};
    if (message.elements) {
      obj.elements = message.elements.map((e) => e ? CMsgDOTADPCFeed_Element.toJSON(e) : undefined);
    } else {
      obj.elements = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTADPCFeed_Element(): CMsgDOTADPCFeed_Element {
  return {
    type: 1,
    timestamp: 0,
    seriesId: 0,
    matchId: "0",
    teamId: 0,
    accountId: 0,
    leagueId: 0,
    nodeId: 0,
    serverSteamId: "0",
    data1: 0,
    data2: 0,
    data3: 0,
    data4: 0,
  };
}

export const CMsgDOTADPCFeed_Element = {
  encode(message: CMsgDOTADPCFeed_Element, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 1) {
      writer.uint32(8).int32(message.type);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.seriesId !== 0) {
      writer.uint32(24).uint32(message.seriesId);
    }
    if (message.matchId !== "0") {
      writer.uint32(32).uint64(message.matchId);
    }
    if (message.teamId !== 0) {
      writer.uint32(40).uint32(message.teamId);
    }
    if (message.accountId !== 0) {
      writer.uint32(48).uint32(message.accountId);
    }
    if (message.leagueId !== 0) {
      writer.uint32(56).uint32(message.leagueId);
    }
    if (message.nodeId !== 0) {
      writer.uint32(64).uint32(message.nodeId);
    }
    if (message.serverSteamId !== "0") {
      writer.uint32(104).uint64(message.serverSteamId);
    }
    if (message.data1 !== 0) {
      writer.uint32(72).uint32(message.data1);
    }
    if (message.data2 !== 0) {
      writer.uint32(80).uint32(message.data2);
    }
    if (message.data3 !== 0) {
      writer.uint32(88).uint32(message.data3);
    }
    if (message.data4 !== 0) {
      writer.uint32(96).uint32(message.data4);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCFeed_Element {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCFeed_Element();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.int32() as any;
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

          message.seriesId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.nodeId = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.serverSteamId = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.data1 = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.data2 = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.data3 = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.data4 = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTADPCFeed_Element {
    return {
      type: isSet(object.type) ? cMsgDOTADPCFeed_EFeedElementTypeFromJSON(object.type) : 1,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      seriesId: isSet(object.seriesId) ? Number(object.seriesId) : 0,
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      nodeId: isSet(object.nodeId) ? Number(object.nodeId) : 0,
      serverSteamId: isSet(object.serverSteamId) ? String(object.serverSteamId) : "0",
      data1: isSet(object.data1) ? Number(object.data1) : 0,
      data2: isSet(object.data2) ? Number(object.data2) : 0,
      data3: isSet(object.data3) ? Number(object.data3) : 0,
      data4: isSet(object.data4) ? Number(object.data4) : 0,
    };
  },

  toJSON(message: CMsgDOTADPCFeed_Element): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = cMsgDOTADPCFeed_EFeedElementTypeToJSON(message.type));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.seriesId !== undefined && (obj.seriesId = Math.round(message.seriesId));
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.nodeId !== undefined && (obj.nodeId = Math.round(message.nodeId));
    message.serverSteamId !== undefined && (obj.serverSteamId = message.serverSteamId);
    message.data1 !== undefined && (obj.data1 = Math.round(message.data1));
    message.data2 !== undefined && (obj.data2 = Math.round(message.data2));
    message.data3 !== undefined && (obj.data3 = Math.round(message.data3));
    message.data4 !== undefined && (obj.data4 = Math.round(message.data4));
    return obj;
  },
};

function createBaseCMsgDOTADPCUserInfo(): CMsgDOTADPCUserInfo {
  return { isPlusSubscriber: false };
}

export const CMsgDOTADPCUserInfo = {
  encode(message: CMsgDOTADPCUserInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isPlusSubscriber === true) {
      writer.uint32(8).bool(message.isPlusSubscriber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCUserInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCUserInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isPlusSubscriber = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTADPCUserInfo {
    return { isPlusSubscriber: isSet(object.isPlusSubscriber) ? Boolean(object.isPlusSubscriber) : false };
  },

  toJSON(message: CMsgDOTADPCUserInfo): unknown {
    const obj: any = {};
    message.isPlusSubscriber !== undefined && (obj.isPlusSubscriber = message.isPlusSubscriber);
    return obj;
  },
};

function createBaseCMsgDraftTrivia(): CMsgDraftTrivia {
  return {
    hasValidMatch: false,
    matchHeroInfo: undefined,
    matchRankTier: 0,
    endTime: 0,
    eventId: 0,
    currentMatchVotedRadiant: false,
    previousResult: undefined,
    currentStreak: 0,
  };
}

export const CMsgDraftTrivia = {
  encode(message: CMsgDraftTrivia, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hasValidMatch === true) {
      writer.uint32(8).bool(message.hasValidMatch);
    }
    if (message.matchHeroInfo !== undefined) {
      CMsgDraftTrivia_DraftTriviaMatchInfo.encode(message.matchHeroInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.matchRankTier !== 0) {
      writer.uint32(24).uint32(message.matchRankTier);
    }
    if (message.endTime !== 0) {
      writer.uint32(32).uint32(message.endTime);
    }
    if (message.eventId !== 0) {
      writer.uint32(40).uint32(message.eventId);
    }
    if (message.currentMatchVotedRadiant === true) {
      writer.uint32(48).bool(message.currentMatchVotedRadiant);
    }
    if (message.previousResult !== undefined) {
      CMsgDraftTrivia_PreviousResult.encode(message.previousResult, writer.uint32(58).fork()).ldelim();
    }
    if (message.currentStreak !== 0) {
      writer.uint32(64).uint32(message.currentStreak);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDraftTrivia {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDraftTrivia();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.hasValidMatch = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.matchHeroInfo = CMsgDraftTrivia_DraftTriviaMatchInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.matchRankTier = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.endTime = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.currentMatchVotedRadiant = reader.bool();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.previousResult = CMsgDraftTrivia_PreviousResult.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.currentStreak = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDraftTrivia {
    return {
      hasValidMatch: isSet(object.hasValidMatch) ? Boolean(object.hasValidMatch) : false,
      matchHeroInfo: isSet(object.matchHeroInfo)
        ? CMsgDraftTrivia_DraftTriviaMatchInfo.fromJSON(object.matchHeroInfo)
        : undefined,
      matchRankTier: isSet(object.matchRankTier) ? Number(object.matchRankTier) : 0,
      endTime: isSet(object.endTime) ? Number(object.endTime) : 0,
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      currentMatchVotedRadiant: isSet(object.currentMatchVotedRadiant)
        ? Boolean(object.currentMatchVotedRadiant)
        : false,
      previousResult: isSet(object.previousResult)
        ? CMsgDraftTrivia_PreviousResult.fromJSON(object.previousResult)
        : undefined,
      currentStreak: isSet(object.currentStreak) ? Number(object.currentStreak) : 0,
    };
  },

  toJSON(message: CMsgDraftTrivia): unknown {
    const obj: any = {};
    message.hasValidMatch !== undefined && (obj.hasValidMatch = message.hasValidMatch);
    message.matchHeroInfo !== undefined && (obj.matchHeroInfo = message.matchHeroInfo
      ? CMsgDraftTrivia_DraftTriviaMatchInfo.toJSON(message.matchHeroInfo)
      : undefined);
    message.matchRankTier !== undefined && (obj.matchRankTier = Math.round(message.matchRankTier));
    message.endTime !== undefined && (obj.endTime = Math.round(message.endTime));
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    message.currentMatchVotedRadiant !== undefined && (obj.currentMatchVotedRadiant = message.currentMatchVotedRadiant);
    message.previousResult !== undefined && (obj.previousResult = message.previousResult
      ? CMsgDraftTrivia_PreviousResult.toJSON(message.previousResult)
      : undefined);
    message.currentStreak !== undefined && (obj.currentStreak = Math.round(message.currentStreak));
    return obj;
  },
};

function createBaseCMsgDraftTrivia_DraftTriviaHeroInfo(): CMsgDraftTrivia_DraftTriviaHeroInfo {
  return { heroId: 0, role: 0 };
}

export const CMsgDraftTrivia_DraftTriviaHeroInfo = {
  encode(message: CMsgDraftTrivia_DraftTriviaHeroInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.role !== 0) {
      writer.uint32(16).uint32(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDraftTrivia_DraftTriviaHeroInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDraftTrivia_DraftTriviaHeroInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.role = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDraftTrivia_DraftTriviaHeroInfo {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      role: isSet(object.role) ? Number(object.role) : 0,
    };
  },

  toJSON(message: CMsgDraftTrivia_DraftTriviaHeroInfo): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.role !== undefined && (obj.role = Math.round(message.role));
    return obj;
  },
};

function createBaseCMsgDraftTrivia_DraftTriviaMatchInfo(): CMsgDraftTrivia_DraftTriviaMatchInfo {
  return { radiantHeroes: [], direHeroes: [] };
}

export const CMsgDraftTrivia_DraftTriviaMatchInfo = {
  encode(message: CMsgDraftTrivia_DraftTriviaMatchInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.radiantHeroes) {
      CMsgDraftTrivia_DraftTriviaHeroInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.direHeroes) {
      CMsgDraftTrivia_DraftTriviaHeroInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDraftTrivia_DraftTriviaMatchInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDraftTrivia_DraftTriviaMatchInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.radiantHeroes.push(CMsgDraftTrivia_DraftTriviaHeroInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.direHeroes.push(CMsgDraftTrivia_DraftTriviaHeroInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDraftTrivia_DraftTriviaMatchInfo {
    return {
      radiantHeroes: Array.isArray(object?.radiantHeroes)
        ? object.radiantHeroes.map((e: any) => CMsgDraftTrivia_DraftTriviaHeroInfo.fromJSON(e))
        : [],
      direHeroes: Array.isArray(object?.direHeroes)
        ? object.direHeroes.map((e: any) => CMsgDraftTrivia_DraftTriviaHeroInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDraftTrivia_DraftTriviaMatchInfo): unknown {
    const obj: any = {};
    if (message.radiantHeroes) {
      obj.radiantHeroes = message.radiantHeroes.map((e) =>
        e ? CMsgDraftTrivia_DraftTriviaHeroInfo.toJSON(e) : undefined
      );
    } else {
      obj.radiantHeroes = [];
    }
    if (message.direHeroes) {
      obj.direHeroes = message.direHeroes.map((e) => e ? CMsgDraftTrivia_DraftTriviaHeroInfo.toJSON(e) : undefined);
    } else {
      obj.direHeroes = [];
    }
    return obj;
  },
};

function createBaseCMsgDraftTrivia_PreviousResult(): CMsgDraftTrivia_PreviousResult {
  return {
    votedCorrectly: false,
    votedRadiant: false,
    matchHeroInfo: undefined,
    matchRankTier: 0,
    endTime: 0,
    matchId: "0",
  };
}

export const CMsgDraftTrivia_PreviousResult = {
  encode(message: CMsgDraftTrivia_PreviousResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.votedCorrectly === true) {
      writer.uint32(8).bool(message.votedCorrectly);
    }
    if (message.votedRadiant === true) {
      writer.uint32(16).bool(message.votedRadiant);
    }
    if (message.matchHeroInfo !== undefined) {
      CMsgDraftTrivia_DraftTriviaMatchInfo.encode(message.matchHeroInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.matchRankTier !== 0) {
      writer.uint32(32).uint32(message.matchRankTier);
    }
    if (message.endTime !== 0) {
      writer.uint32(40).uint32(message.endTime);
    }
    if (message.matchId !== "0") {
      writer.uint32(48).uint64(message.matchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDraftTrivia_PreviousResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDraftTrivia_PreviousResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.votedCorrectly = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.votedRadiant = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.matchHeroInfo = CMsgDraftTrivia_DraftTriviaMatchInfo.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.matchRankTier = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.endTime = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
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

  fromJSON(object: any): CMsgDraftTrivia_PreviousResult {
    return {
      votedCorrectly: isSet(object.votedCorrectly) ? Boolean(object.votedCorrectly) : false,
      votedRadiant: isSet(object.votedRadiant) ? Boolean(object.votedRadiant) : false,
      matchHeroInfo: isSet(object.matchHeroInfo)
        ? CMsgDraftTrivia_DraftTriviaMatchInfo.fromJSON(object.matchHeroInfo)
        : undefined,
      matchRankTier: isSet(object.matchRankTier) ? Number(object.matchRankTier) : 0,
      endTime: isSet(object.endTime) ? Number(object.endTime) : 0,
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
    };
  },

  toJSON(message: CMsgDraftTrivia_PreviousResult): unknown {
    const obj: any = {};
    message.votedCorrectly !== undefined && (obj.votedCorrectly = message.votedCorrectly);
    message.votedRadiant !== undefined && (obj.votedRadiant = message.votedRadiant);
    message.matchHeroInfo !== undefined && (obj.matchHeroInfo = message.matchHeroInfo
      ? CMsgDraftTrivia_DraftTriviaMatchInfo.toJSON(message.matchHeroInfo)
      : undefined);
    message.matchRankTier !== undefined && (obj.matchRankTier = Math.round(message.matchRankTier));
    message.endTime !== undefined && (obj.endTime = Math.round(message.endTime));
    message.matchId !== undefined && (obj.matchId = message.matchId);
    return obj;
  },
};

function createBaseCMsgTeamFanContentAssetStatus(): CMsgTeamFanContentAssetStatus {
  return { assetType: 1, assetIndex: 0, assetStatus: 0, crc: 0 };
}

export const CMsgTeamFanContentAssetStatus = {
  encode(message: CMsgTeamFanContentAssetStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetType !== 1) {
      writer.uint32(8).int32(message.assetType);
    }
    if (message.assetIndex !== 0) {
      writer.uint32(16).uint32(message.assetIndex);
    }
    if (message.assetStatus !== 0) {
      writer.uint32(24).int32(message.assetStatus);
    }
    if (message.crc !== 0) {
      writer.uint32(32).uint32(message.crc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTeamFanContentAssetStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTeamFanContentAssetStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.assetType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.assetIndex = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.assetStatus = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.crc = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTeamFanContentAssetStatus {
    return {
      assetType: isSet(object.assetType) ? eTeamFanContentAssetTypeFromJSON(object.assetType) : 1,
      assetIndex: isSet(object.assetIndex) ? Number(object.assetIndex) : 0,
      assetStatus: isSet(object.assetStatus) ? eTeamFanContentAssetStatusFromJSON(object.assetStatus) : 0,
      crc: isSet(object.crc) ? Number(object.crc) : 0,
    };
  },

  toJSON(message: CMsgTeamFanContentAssetStatus): unknown {
    const obj: any = {};
    message.assetType !== undefined && (obj.assetType = eTeamFanContentAssetTypeToJSON(message.assetType));
    message.assetIndex !== undefined && (obj.assetIndex = Math.round(message.assetIndex));
    message.assetStatus !== undefined && (obj.assetStatus = eTeamFanContentAssetStatusToJSON(message.assetStatus));
    message.crc !== undefined && (obj.crc = Math.round(message.crc));
    return obj;
  },
};

function createBaseCMsgTeamFanContentAssetStatusResponse(): CMsgTeamFanContentAssetStatusResponse {
  return { result: 0 };
}

export const CMsgTeamFanContentAssetStatusResponse = {
  encode(message: CMsgTeamFanContentAssetStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTeamFanContentAssetStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTeamFanContentAssetStatusResponse();
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

  fromJSON(object: any): CMsgTeamFanContentAssetStatusResponse {
    return { result: isSet(object.result) ? cMsgTeamFanContentAssetStatusResponse_EResultFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgTeamFanContentAssetStatusResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = cMsgTeamFanContentAssetStatusResponse_EResultToJSON(message.result));
    return obj;
  },
};

function createBaseCMsgTeamFanContentStatus(): CMsgTeamFanContentStatus {
  return { teamStatusList: [] };
}

export const CMsgTeamFanContentStatus = {
  encode(message: CMsgTeamFanContentStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.teamStatusList) {
      CMsgTeamFanContentStatus_TeamStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTeamFanContentStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTeamFanContentStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.teamStatusList.push(CMsgTeamFanContentStatus_TeamStatus.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTeamFanContentStatus {
    return {
      teamStatusList: Array.isArray(object?.teamStatusList)
        ? object.teamStatusList.map((e: any) => CMsgTeamFanContentStatus_TeamStatus.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgTeamFanContentStatus): unknown {
    const obj: any = {};
    if (message.teamStatusList) {
      obj.teamStatusList = message.teamStatusList.map((e) =>
        e ? CMsgTeamFanContentStatus_TeamStatus.toJSON(e) : undefined
      );
    } else {
      obj.teamStatusList = [];
    }
    return obj;
  },
};

function createBaseCMsgTeamFanContentStatus_TeamStatus(): CMsgTeamFanContentStatus_TeamStatus {
  return {
    name: "",
    teamId: 0,
    logoUrl: "",
    status: 0,
    timestamp: 0,
    ugcLogo: "0",
    workshopAccountId: 0,
    abbreviation: "",
    voicelineCount: 0,
    sprayCount: 0,
    emoticonCount: 0,
    wallpaperCount: 0,
    comment: "",
    commentTimestamp: 0,
    assetStatus: [],
    emailTimestamp: 0,
    emailTier: 0,
    languages: "",
  };
}

export const CMsgTeamFanContentStatus_TeamStatus = {
  encode(message: CMsgTeamFanContentStatus_TeamStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).uint32(message.teamId);
    }
    if (message.logoUrl !== "") {
      writer.uint32(26).string(message.logoUrl);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.timestamp !== 0) {
      writer.uint32(40).uint32(message.timestamp);
    }
    if (message.ugcLogo !== "0") {
      writer.uint32(56).uint64(message.ugcLogo);
    }
    if (message.workshopAccountId !== 0) {
      writer.uint32(64).uint32(message.workshopAccountId);
    }
    if (message.abbreviation !== "") {
      writer.uint32(74).string(message.abbreviation);
    }
    if (message.voicelineCount !== 0) {
      writer.uint32(80).uint32(message.voicelineCount);
    }
    if (message.sprayCount !== 0) {
      writer.uint32(88).uint32(message.sprayCount);
    }
    if (message.emoticonCount !== 0) {
      writer.uint32(96).uint32(message.emoticonCount);
    }
    if (message.wallpaperCount !== 0) {
      writer.uint32(104).uint32(message.wallpaperCount);
    }
    if (message.comment !== "") {
      writer.uint32(114).string(message.comment);
    }
    if (message.commentTimestamp !== 0) {
      writer.uint32(120).uint32(message.commentTimestamp);
    }
    for (const v of message.assetStatus) {
      CMsgTeamFanContentAssetStatus.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    if (message.emailTimestamp !== 0) {
      writer.uint32(136).uint32(message.emailTimestamp);
    }
    if (message.emailTier !== 0) {
      writer.uint32(144).uint32(message.emailTier);
    }
    if (message.languages !== "") {
      writer.uint32(154).string(message.languages);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTeamFanContentStatus_TeamStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTeamFanContentStatus_TeamStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.logoUrl = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.ugcLogo = longToString(reader.uint64() as Long);
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.workshopAccountId = reader.uint32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.abbreviation = reader.string();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.voicelineCount = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.sprayCount = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.emoticonCount = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.wallpaperCount = reader.uint32();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.comment = reader.string();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.commentTimestamp = reader.uint32();
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.assetStatus.push(CMsgTeamFanContentAssetStatus.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.emailTimestamp = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.emailTier = reader.uint32();
          continue;
        case 19:
          if (tag != 154) {
            break;
          }

          message.languages = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTeamFanContentStatus_TeamStatus {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      logoUrl: isSet(object.logoUrl) ? String(object.logoUrl) : "",
      status: isSet(object.status) ? eTeamFanContentStatusFromJSON(object.status) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      ugcLogo: isSet(object.ugcLogo) ? String(object.ugcLogo) : "0",
      workshopAccountId: isSet(object.workshopAccountId) ? Number(object.workshopAccountId) : 0,
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
      voicelineCount: isSet(object.voicelineCount) ? Number(object.voicelineCount) : 0,
      sprayCount: isSet(object.sprayCount) ? Number(object.sprayCount) : 0,
      emoticonCount: isSet(object.emoticonCount) ? Number(object.emoticonCount) : 0,
      wallpaperCount: isSet(object.wallpaperCount) ? Number(object.wallpaperCount) : 0,
      comment: isSet(object.comment) ? String(object.comment) : "",
      commentTimestamp: isSet(object.commentTimestamp) ? Number(object.commentTimestamp) : 0,
      assetStatus: Array.isArray(object?.assetStatus)
        ? object.assetStatus.map((e: any) => CMsgTeamFanContentAssetStatus.fromJSON(e))
        : [],
      emailTimestamp: isSet(object.emailTimestamp) ? Number(object.emailTimestamp) : 0,
      emailTier: isSet(object.emailTier) ? Number(object.emailTier) : 0,
      languages: isSet(object.languages) ? String(object.languages) : "",
    };
  },

  toJSON(message: CMsgTeamFanContentStatus_TeamStatus): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.logoUrl !== undefined && (obj.logoUrl = message.logoUrl);
    message.status !== undefined && (obj.status = eTeamFanContentStatusToJSON(message.status));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.ugcLogo !== undefined && (obj.ugcLogo = message.ugcLogo);
    message.workshopAccountId !== undefined && (obj.workshopAccountId = Math.round(message.workshopAccountId));
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    message.voicelineCount !== undefined && (obj.voicelineCount = Math.round(message.voicelineCount));
    message.sprayCount !== undefined && (obj.sprayCount = Math.round(message.sprayCount));
    message.emoticonCount !== undefined && (obj.emoticonCount = Math.round(message.emoticonCount));
    message.wallpaperCount !== undefined && (obj.wallpaperCount = Math.round(message.wallpaperCount));
    message.comment !== undefined && (obj.comment = message.comment);
    message.commentTimestamp !== undefined && (obj.commentTimestamp = Math.round(message.commentTimestamp));
    if (message.assetStatus) {
      obj.assetStatus = message.assetStatus.map((e) => e ? CMsgTeamFanContentAssetStatus.toJSON(e) : undefined);
    } else {
      obj.assetStatus = [];
    }
    message.emailTimestamp !== undefined && (obj.emailTimestamp = Math.round(message.emailTimestamp));
    message.emailTier !== undefined && (obj.emailTier = Math.round(message.emailTier));
    message.languages !== undefined && (obj.languages = message.languages);
    return obj;
  },
};

function createBaseCMsgTeamFanContentAutographStatus(): CMsgTeamFanContentAutographStatus {
  return { teamAutographs: [] };
}

export const CMsgTeamFanContentAutographStatus = {
  encode(message: CMsgTeamFanContentAutographStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.teamAutographs) {
      CMsgTeamFanContentAutographStatus_TeamStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTeamFanContentAutographStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTeamFanContentAutographStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.teamAutographs.push(CMsgTeamFanContentAutographStatus_TeamStatus.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTeamFanContentAutographStatus {
    return {
      teamAutographs: Array.isArray(object?.teamAutographs)
        ? object.teamAutographs.map((e: any) => CMsgTeamFanContentAutographStatus_TeamStatus.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgTeamFanContentAutographStatus): unknown {
    const obj: any = {};
    if (message.teamAutographs) {
      obj.teamAutographs = message.teamAutographs.map((e) =>
        e ? CMsgTeamFanContentAutographStatus_TeamStatus.toJSON(e) : undefined
      );
    } else {
      obj.teamAutographs = [];
    }
    return obj;
  },
};

function createBaseCMsgTeamFanContentAutographStatus_AutographStatus(): CMsgTeamFanContentAutographStatus_AutographStatus {
  return { proName: "", accountId: 0, timestamp: 0, file: "" };
}

export const CMsgTeamFanContentAutographStatus_AutographStatus = {
  encode(
    message: CMsgTeamFanContentAutographStatus_AutographStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.proName !== "") {
      writer.uint32(10).string(message.proName);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).uint32(message.timestamp);
    }
    if (message.file !== "") {
      writer.uint32(34).string(message.file);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTeamFanContentAutographStatus_AutographStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTeamFanContentAutographStatus_AutographStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.proName = reader.string();
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

          message.timestamp = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.file = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTeamFanContentAutographStatus_AutographStatus {
    return {
      proName: isSet(object.proName) ? String(object.proName) : "",
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      file: isSet(object.file) ? String(object.file) : "",
    };
  },

  toJSON(message: CMsgTeamFanContentAutographStatus_AutographStatus): unknown {
    const obj: any = {};
    message.proName !== undefined && (obj.proName = message.proName);
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.file !== undefined && (obj.file = message.file);
    return obj;
  },
};

function createBaseCMsgTeamFanContentAutographStatus_TeamStatus(): CMsgTeamFanContentAutographStatus_TeamStatus {
  return { name: "", teamId: 0, autographs: [], workshopAccountId: 0 };
}

export const CMsgTeamFanContentAutographStatus_TeamStatus = {
  encode(message: CMsgTeamFanContentAutographStatus_TeamStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).uint32(message.teamId);
    }
    for (const v of message.autographs) {
      CMsgTeamFanContentAutographStatus_AutographStatus.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.workshopAccountId !== 0) {
      writer.uint32(32).uint32(message.workshopAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTeamFanContentAutographStatus_TeamStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTeamFanContentAutographStatus_TeamStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.autographs.push(CMsgTeamFanContentAutographStatus_AutographStatus.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.workshopAccountId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTeamFanContentAutographStatus_TeamStatus {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      autographs: Array.isArray(object?.autographs)
        ? object.autographs.map((e: any) => CMsgTeamFanContentAutographStatus_AutographStatus.fromJSON(e))
        : [],
      workshopAccountId: isSet(object.workshopAccountId) ? Number(object.workshopAccountId) : 0,
    };
  },

  toJSON(message: CMsgTeamFanContentAutographStatus_TeamStatus): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    if (message.autographs) {
      obj.autographs = message.autographs.map((e) =>
        e ? CMsgTeamFanContentAutographStatus_AutographStatus.toJSON(e) : undefined
      );
    } else {
      obj.autographs = [];
    }
    message.workshopAccountId !== undefined && (obj.workshopAccountId = Math.round(message.workshopAccountId));
    return obj;
  },
};

function createBaseCMsgDPCEvent(): CMsgDPCEvent {
  return {
    event: 0,
    eventType: 0,
    leagues: [],
    registrationPeriod: 0,
    isEventUpcoming: false,
    isEventCompleted: false,
    eventName: "",
    multicastLeagueId: 0,
    multicastStreams: [],
    tour: 0,
    timestampDropLock: 0,
    timestampAddLock: 0,
    timestampContentDeadline: 0,
    isFantasyEnabled: false,
    timestampContentReviewDeadline: 0,
  };
}

export const CMsgDPCEvent = {
  encode(message: CMsgDPCEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== 0) {
      writer.uint32(8).int32(message.event);
    }
    if (message.eventType !== 0) {
      writer.uint32(16).int32(message.eventType);
    }
    for (const v of message.leagues) {
      CMsgDPCEvent_League.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.registrationPeriod !== 0) {
      writer.uint32(32).uint32(message.registrationPeriod);
    }
    if (message.isEventUpcoming === true) {
      writer.uint32(40).bool(message.isEventUpcoming);
    }
    if (message.isEventCompleted === true) {
      writer.uint32(48).bool(message.isEventCompleted);
    }
    if (message.eventName !== "") {
      writer.uint32(58).string(message.eventName);
    }
    if (message.multicastLeagueId !== 0) {
      writer.uint32(64).uint32(message.multicastLeagueId);
    }
    writer.uint32(74).fork();
    for (const v of message.multicastStreams) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.tour !== 0) {
      writer.uint32(80).int32(message.tour);
    }
    if (message.timestampDropLock !== 0) {
      writer.uint32(96).uint32(message.timestampDropLock);
    }
    if (message.timestampAddLock !== 0) {
      writer.uint32(104).uint32(message.timestampAddLock);
    }
    if (message.timestampContentDeadline !== 0) {
      writer.uint32(112).uint32(message.timestampContentDeadline);
    }
    if (message.isFantasyEnabled === true) {
      writer.uint32(120).bool(message.isFantasyEnabled);
    }
    if (message.timestampContentReviewDeadline !== 0) {
      writer.uint32(128).uint32(message.timestampContentReviewDeadline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDPCEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDPCEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.event = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.eventType = reader.int32() as any;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.leagues.push(CMsgDPCEvent_League.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.registrationPeriod = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.isEventUpcoming = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.isEventCompleted = reader.bool();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.eventName = reader.string();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.multicastLeagueId = reader.uint32();
          continue;
        case 9:
          if (tag == 72) {
            message.multicastStreams.push(reader.uint32());
            continue;
          }

          if (tag == 74) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.multicastStreams.push(reader.uint32());
            }

            continue;
          }

          break;
        case 10:
          if (tag != 80) {
            break;
          }

          message.tour = reader.int32() as any;
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.timestampDropLock = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.timestampAddLock = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.timestampContentDeadline = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.isFantasyEnabled = reader.bool();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.timestampContentReviewDeadline = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDPCEvent {
    return {
      event: isSet(object.event) ? cMsgDPCEvent_ELeagueEventFromJSON(object.event) : 0,
      eventType: isSet(object.eventType) ? cMsgDPCEvent_ELeagueEventTypeFromJSON(object.eventType) : 0,
      leagues: Array.isArray(object?.leagues) ? object.leagues.map((e: any) => CMsgDPCEvent_League.fromJSON(e)) : [],
      registrationPeriod: isSet(object.registrationPeriod) ? Number(object.registrationPeriod) : 0,
      isEventUpcoming: isSet(object.isEventUpcoming) ? Boolean(object.isEventUpcoming) : false,
      isEventCompleted: isSet(object.isEventCompleted) ? Boolean(object.isEventCompleted) : false,
      eventName: isSet(object.eventName) ? String(object.eventName) : "",
      multicastLeagueId: isSet(object.multicastLeagueId) ? Number(object.multicastLeagueId) : 0,
      multicastStreams: Array.isArray(object?.multicastStreams)
        ? object.multicastStreams.map((e: any) => Number(e))
        : [],
      tour: isSet(object.tour) ? cMsgDPCEvent_ETourFromJSON(object.tour) : 0,
      timestampDropLock: isSet(object.timestampDropLock) ? Number(object.timestampDropLock) : 0,
      timestampAddLock: isSet(object.timestampAddLock) ? Number(object.timestampAddLock) : 0,
      timestampContentDeadline: isSet(object.timestampContentDeadline) ? Number(object.timestampContentDeadline) : 0,
      isFantasyEnabled: isSet(object.isFantasyEnabled) ? Boolean(object.isFantasyEnabled) : false,
      timestampContentReviewDeadline: isSet(object.timestampContentReviewDeadline)
        ? Number(object.timestampContentReviewDeadline)
        : 0,
    };
  },

  toJSON(message: CMsgDPCEvent): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = cMsgDPCEvent_ELeagueEventToJSON(message.event));
    message.eventType !== undefined && (obj.eventType = cMsgDPCEvent_ELeagueEventTypeToJSON(message.eventType));
    if (message.leagues) {
      obj.leagues = message.leagues.map((e) => e ? CMsgDPCEvent_League.toJSON(e) : undefined);
    } else {
      obj.leagues = [];
    }
    message.registrationPeriod !== undefined && (obj.registrationPeriod = Math.round(message.registrationPeriod));
    message.isEventUpcoming !== undefined && (obj.isEventUpcoming = message.isEventUpcoming);
    message.isEventCompleted !== undefined && (obj.isEventCompleted = message.isEventCompleted);
    message.eventName !== undefined && (obj.eventName = message.eventName);
    message.multicastLeagueId !== undefined && (obj.multicastLeagueId = Math.round(message.multicastLeagueId));
    if (message.multicastStreams) {
      obj.multicastStreams = message.multicastStreams.map((e) => Math.round(e));
    } else {
      obj.multicastStreams = [];
    }
    message.tour !== undefined && (obj.tour = cMsgDPCEvent_ETourToJSON(message.tour));
    message.timestampDropLock !== undefined && (obj.timestampDropLock = Math.round(message.timestampDropLock));
    message.timestampAddLock !== undefined && (obj.timestampAddLock = Math.round(message.timestampAddLock));
    message.timestampContentDeadline !== undefined &&
      (obj.timestampContentDeadline = Math.round(message.timestampContentDeadline));
    message.isFantasyEnabled !== undefined && (obj.isFantasyEnabled = message.isFantasyEnabled);
    message.timestampContentReviewDeadline !== undefined &&
      (obj.timestampContentReviewDeadline = Math.round(message.timestampContentReviewDeadline));
    return obj;
  },
};

function createBaseCMsgDPCEvent_PhaseInfo(): CMsgDPCEvent_PhaseInfo {
  return { phase: 0, nodeGroupId: 0 };
}

export const CMsgDPCEvent_PhaseInfo = {
  encode(message: CMsgDPCEvent_PhaseInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phase !== 0) {
      writer.uint32(8).int32(message.phase);
    }
    if (message.nodeGroupId !== 0) {
      writer.uint32(16).uint32(message.nodeGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDPCEvent_PhaseInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDPCEvent_PhaseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.phase = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.nodeGroupId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDPCEvent_PhaseInfo {
    return {
      phase: isSet(object.phase) ? cMsgDPCEvent_ELeagueEventPhaseFromJSON(object.phase) : 0,
      nodeGroupId: isSet(object.nodeGroupId) ? Number(object.nodeGroupId) : 0,
    };
  },

  toJSON(message: CMsgDPCEvent_PhaseInfo): unknown {
    const obj: any = {};
    message.phase !== undefined && (obj.phase = cMsgDPCEvent_ELeagueEventPhaseToJSON(message.phase));
    message.nodeGroupId !== undefined && (obj.nodeGroupId = Math.round(message.nodeGroupId));
    return obj;
  },
};

function createBaseCMsgDPCEvent_League(): CMsgDPCEvent_League {
  return { region: 0, division: 0, leagueId: 0, phases: [] };
}

export const CMsgDPCEvent_League = {
  encode(message: CMsgDPCEvent_League, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.region !== 0) {
      writer.uint32(8).int32(message.region);
    }
    if (message.division !== 0) {
      writer.uint32(16).int32(message.division);
    }
    if (message.leagueId !== 0) {
      writer.uint32(24).uint32(message.leagueId);
    }
    for (const v of message.phases) {
      CMsgDPCEvent_PhaseInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDPCEvent_League {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDPCEvent_League();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.region = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.division = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.phases.push(CMsgDPCEvent_PhaseInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDPCEvent_League {
    return {
      region: isSet(object.region) ? eLeagueRegionFromJSON(object.region) : 0,
      division: isSet(object.division) ? eLeagueDivisionFromJSON(object.division) : 0,
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      phases: Array.isArray(object?.phases) ? object.phases.map((e: any) => CMsgDPCEvent_PhaseInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgDPCEvent_League): unknown {
    const obj: any = {};
    message.region !== undefined && (obj.region = eLeagueRegionToJSON(message.region));
    message.division !== undefined && (obj.division = eLeagueDivisionToJSON(message.division));
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    if (message.phases) {
      obj.phases = message.phases.map((e) => e ? CMsgDPCEvent_PhaseInfo.toJSON(e) : undefined);
    } else {
      obj.phases = [];
    }
    return obj;
  },
};

function createBaseCMsgDPCEventList(): CMsgDPCEventList {
  return { events: [] };
}

export const CMsgDPCEventList = {
  encode(message: CMsgDPCEventList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      CMsgDPCEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDPCEventList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDPCEventList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.events.push(CMsgDPCEvent.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDPCEventList {
    return { events: Array.isArray(object?.events) ? object.events.map((e: any) => CMsgDPCEvent.fromJSON(e)) : [] };
  },

  toJSON(message: CMsgDPCEventList): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => e ? CMsgDPCEvent.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTAFantasyCardLineup(): CMsgDOTAFantasyCardLineup {
  return { periods: [] };
}

export const CMsgDOTAFantasyCardLineup = {
  encode(message: CMsgDOTAFantasyCardLineup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.periods) {
      CMsgDOTAFantasyCardLineup_Period.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAFantasyCardLineup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAFantasyCardLineup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.periods.push(CMsgDOTAFantasyCardLineup_Period.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAFantasyCardLineup {
    return {
      periods: Array.isArray(object?.periods)
        ? object.periods.map((e: any) => CMsgDOTAFantasyCardLineup_Period.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTAFantasyCardLineup): unknown {
    const obj: any = {};
    if (message.periods) {
      obj.periods = message.periods.map((e) => e ? CMsgDOTAFantasyCardLineup_Period.toJSON(e) : undefined);
    } else {
      obj.periods = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTAFantasyCardLineup_CardBonus(): CMsgDOTAFantasyCardLineup_CardBonus {
  return { bonusStat: 0, bonusValue: 0 };
}

export const CMsgDOTAFantasyCardLineup_CardBonus = {
  encode(message: CMsgDOTAFantasyCardLineup_CardBonus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bonusStat !== 0) {
      writer.uint32(8).uint32(message.bonusStat);
    }
    if (message.bonusValue !== 0) {
      writer.uint32(16).uint32(message.bonusValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAFantasyCardLineup_CardBonus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAFantasyCardLineup_CardBonus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.bonusStat = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.bonusValue = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAFantasyCardLineup_CardBonus {
    return {
      bonusStat: isSet(object.bonusStat) ? Number(object.bonusStat) : 0,
      bonusValue: isSet(object.bonusValue) ? Number(object.bonusValue) : 0,
    };
  },

  toJSON(message: CMsgDOTAFantasyCardLineup_CardBonus): unknown {
    const obj: any = {};
    message.bonusStat !== undefined && (obj.bonusStat = Math.round(message.bonusStat));
    message.bonusValue !== undefined && (obj.bonusValue = Math.round(message.bonusValue));
    return obj;
  },
};

function createBaseCMsgDOTAFantasyCardLineup_Card(): CMsgDOTAFantasyCardLineup_Card {
  return {
    playerAccountId: 0,
    playerName: "",
    teamId: 0,
    teamName: "",
    role: 0,
    bonuses: [],
    score: 0,
    finalized: false,
    itemId: "0",
  };
}

export const CMsgDOTAFantasyCardLineup_Card = {
  encode(message: CMsgDOTAFantasyCardLineup_Card, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerAccountId !== 0) {
      writer.uint32(8).uint32(message.playerAccountId);
    }
    if (message.playerName !== "") {
      writer.uint32(18).string(message.playerName);
    }
    if (message.teamId !== 0) {
      writer.uint32(24).uint32(message.teamId);
    }
    if (message.teamName !== "") {
      writer.uint32(34).string(message.teamName);
    }
    if (message.role !== 0) {
      writer.uint32(40).uint32(message.role);
    }
    for (const v of message.bonuses) {
      CMsgDOTAFantasyCardLineup_CardBonus.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.score !== 0) {
      writer.uint32(61).float(message.score);
    }
    if (message.finalized === true) {
      writer.uint32(64).bool(message.finalized);
    }
    if (message.itemId !== "0") {
      writer.uint32(72).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAFantasyCardLineup_Card {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAFantasyCardLineup_Card();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.playerName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.teamName = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.role = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.bonuses.push(CMsgDOTAFantasyCardLineup_CardBonus.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.score = reader.float();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.finalized = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAFantasyCardLineup_Card {
    return {
      playerAccountId: isSet(object.playerAccountId) ? Number(object.playerAccountId) : 0,
      playerName: isSet(object.playerName) ? String(object.playerName) : "",
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      teamName: isSet(object.teamName) ? String(object.teamName) : "",
      role: isSet(object.role) ? Number(object.role) : 0,
      bonuses: Array.isArray(object?.bonuses)
        ? object.bonuses.map((e: any) => CMsgDOTAFantasyCardLineup_CardBonus.fromJSON(e))
        : [],
      score: isSet(object.score) ? Number(object.score) : 0,
      finalized: isSet(object.finalized) ? Boolean(object.finalized) : false,
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
    };
  },

  toJSON(message: CMsgDOTAFantasyCardLineup_Card): unknown {
    const obj: any = {};
    message.playerAccountId !== undefined && (obj.playerAccountId = Math.round(message.playerAccountId));
    message.playerName !== undefined && (obj.playerName = message.playerName);
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.teamName !== undefined && (obj.teamName = message.teamName);
    message.role !== undefined && (obj.role = Math.round(message.role));
    if (message.bonuses) {
      obj.bonuses = message.bonuses.map((e) => e ? CMsgDOTAFantasyCardLineup_CardBonus.toJSON(e) : undefined);
    } else {
      obj.bonuses = [];
    }
    message.score !== undefined && (obj.score = message.score);
    message.finalized !== undefined && (obj.finalized = message.finalized);
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },
};

function createBaseCMsgDOTAFantasyCardLineup_League(): CMsgDOTAFantasyCardLineup_League {
  return { leagueId: 0, cards: [], score: 0 };
}

export const CMsgDOTAFantasyCardLineup_League = {
  encode(message: CMsgDOTAFantasyCardLineup_League, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    for (const v of message.cards) {
      CMsgDOTAFantasyCardLineup_Card.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.score !== 0) {
      writer.uint32(29).float(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAFantasyCardLineup_League {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAFantasyCardLineup_League();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.cards.push(CMsgDOTAFantasyCardLineup_Card.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.score = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAFantasyCardLineup_League {
    return {
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      cards: Array.isArray(object?.cards)
        ? object.cards.map((e: any) => CMsgDOTAFantasyCardLineup_Card.fromJSON(e))
        : [],
      score: isSet(object.score) ? Number(object.score) : 0,
    };
  },

  toJSON(message: CMsgDOTAFantasyCardLineup_League): unknown {
    const obj: any = {};
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    if (message.cards) {
      obj.cards = message.cards.map((e) => e ? CMsgDOTAFantasyCardLineup_Card.toJSON(e) : undefined);
    } else {
      obj.cards = [];
    }
    message.score !== undefined && (obj.score = message.score);
    return obj;
  },
};

function createBaseCMsgDOTAFantasyCardLineup_Period(): CMsgDOTAFantasyCardLineup_Period {
  return { fantasyPeriod: 0, timestampStart: 0, timestampEnd: 0, leagues: [] };
}

export const CMsgDOTAFantasyCardLineup_Period = {
  encode(message: CMsgDOTAFantasyCardLineup_Period, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fantasyPeriod !== 0) {
      writer.uint32(8).uint32(message.fantasyPeriod);
    }
    if (message.timestampStart !== 0) {
      writer.uint32(16).uint32(message.timestampStart);
    }
    if (message.timestampEnd !== 0) {
      writer.uint32(24).uint32(message.timestampEnd);
    }
    for (const v of message.leagues) {
      CMsgDOTAFantasyCardLineup_League.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAFantasyCardLineup_Period {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAFantasyCardLineup_Period();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.fantasyPeriod = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.timestampStart = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.timestampEnd = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.leagues.push(CMsgDOTAFantasyCardLineup_League.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAFantasyCardLineup_Period {
    return {
      fantasyPeriod: isSet(object.fantasyPeriod) ? Number(object.fantasyPeriod) : 0,
      timestampStart: isSet(object.timestampStart) ? Number(object.timestampStart) : 0,
      timestampEnd: isSet(object.timestampEnd) ? Number(object.timestampEnd) : 0,
      leagues: Array.isArray(object?.leagues)
        ? object.leagues.map((e: any) => CMsgDOTAFantasyCardLineup_League.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTAFantasyCardLineup_Period): unknown {
    const obj: any = {};
    message.fantasyPeriod !== undefined && (obj.fantasyPeriod = Math.round(message.fantasyPeriod));
    message.timestampStart !== undefined && (obj.timestampStart = Math.round(message.timestampStart));
    message.timestampEnd !== undefined && (obj.timestampEnd = Math.round(message.timestampEnd));
    if (message.leagues) {
      obj.leagues = message.leagues.map((e) => e ? CMsgDOTAFantasyCardLineup_League.toJSON(e) : undefined);
    } else {
      obj.leagues = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTAFantasyCardList(): CMsgDOTAFantasyCardList {
  return { cards: [] };
}

export const CMsgDOTAFantasyCardList = {
  encode(message: CMsgDOTAFantasyCardList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cards) {
      CMsgDOTAFantasyCardList_Card.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAFantasyCardList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAFantasyCardList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.cards.push(CMsgDOTAFantasyCardList_Card.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAFantasyCardList {
    return {
      cards: Array.isArray(object?.cards) ? object.cards.map((e: any) => CMsgDOTAFantasyCardList_Card.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgDOTAFantasyCardList): unknown {
    const obj: any = {};
    if (message.cards) {
      obj.cards = message.cards.map((e) => e ? CMsgDOTAFantasyCardList_Card.toJSON(e) : undefined);
    } else {
      obj.cards = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTAFantasyCardList_CardBonus(): CMsgDOTAFantasyCardList_CardBonus {
  return { bonusStat: 0, bonusValue: 0 };
}

export const CMsgDOTAFantasyCardList_CardBonus = {
  encode(message: CMsgDOTAFantasyCardList_CardBonus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bonusStat !== 0) {
      writer.uint32(8).uint32(message.bonusStat);
    }
    if (message.bonusValue !== 0) {
      writer.uint32(16).uint32(message.bonusValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAFantasyCardList_CardBonus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAFantasyCardList_CardBonus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.bonusStat = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.bonusValue = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAFantasyCardList_CardBonus {
    return {
      bonusStat: isSet(object.bonusStat) ? Number(object.bonusStat) : 0,
      bonusValue: isSet(object.bonusValue) ? Number(object.bonusValue) : 0,
    };
  },

  toJSON(message: CMsgDOTAFantasyCardList_CardBonus): unknown {
    const obj: any = {};
    message.bonusStat !== undefined && (obj.bonusStat = Math.round(message.bonusStat));
    message.bonusValue !== undefined && (obj.bonusValue = Math.round(message.bonusValue));
    return obj;
  },
};

function createBaseCMsgDOTAFantasyCardList_Card(): CMsgDOTAFantasyCardList_Card {
  return { playerAccountId: 0, playerName: "", teamId: 0, teamName: "", role: 0, bonuses: [], itemId: "0" };
}

export const CMsgDOTAFantasyCardList_Card = {
  encode(message: CMsgDOTAFantasyCardList_Card, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerAccountId !== 0) {
      writer.uint32(8).uint32(message.playerAccountId);
    }
    if (message.playerName !== "") {
      writer.uint32(18).string(message.playerName);
    }
    if (message.teamId !== 0) {
      writer.uint32(24).uint32(message.teamId);
    }
    if (message.teamName !== "") {
      writer.uint32(34).string(message.teamName);
    }
    if (message.role !== 0) {
      writer.uint32(40).uint32(message.role);
    }
    for (const v of message.bonuses) {
      CMsgDOTAFantasyCardList_CardBonus.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.itemId !== "0") {
      writer.uint32(64).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAFantasyCardList_Card {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAFantasyCardList_Card();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.playerName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.teamName = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.role = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.bonuses.push(CMsgDOTAFantasyCardList_CardBonus.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAFantasyCardList_Card {
    return {
      playerAccountId: isSet(object.playerAccountId) ? Number(object.playerAccountId) : 0,
      playerName: isSet(object.playerName) ? String(object.playerName) : "",
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      teamName: isSet(object.teamName) ? String(object.teamName) : "",
      role: isSet(object.role) ? Number(object.role) : 0,
      bonuses: Array.isArray(object?.bonuses)
        ? object.bonuses.map((e: any) => CMsgDOTAFantasyCardList_CardBonus.fromJSON(e))
        : [],
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
    };
  },

  toJSON(message: CMsgDOTAFantasyCardList_Card): unknown {
    const obj: any = {};
    message.playerAccountId !== undefined && (obj.playerAccountId = Math.round(message.playerAccountId));
    message.playerName !== undefined && (obj.playerName = message.playerName);
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.teamName !== undefined && (obj.teamName = message.teamName);
    message.role !== undefined && (obj.role = Math.round(message.role));
    if (message.bonuses) {
      obj.bonuses = message.bonuses.map((e) => e ? CMsgDOTAFantasyCardList_CardBonus.toJSON(e) : undefined);
    } else {
      obj.bonuses = [];
    }
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },
};

function createBaseCMsgChatToxicityToxicPlayerMatchesReport(): CMsgChatToxicityToxicPlayerMatchesReport {
  return { rows: [] };
}

export const CMsgChatToxicityToxicPlayerMatchesReport = {
  encode(message: CMsgChatToxicityToxicPlayerMatchesReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rows) {
      CMsgChatToxicityToxicPlayerMatchesReport_IndividualRow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgChatToxicityToxicPlayerMatchesReport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgChatToxicityToxicPlayerMatchesReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.rows.push(CMsgChatToxicityToxicPlayerMatchesReport_IndividualRow.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgChatToxicityToxicPlayerMatchesReport {
    return {
      rows: Array.isArray(object?.rows)
        ? object.rows.map((e: any) => CMsgChatToxicityToxicPlayerMatchesReport_IndividualRow.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgChatToxicityToxicPlayerMatchesReport): unknown {
    const obj: any = {};
    if (message.rows) {
      obj.rows = message.rows.map((e) =>
        e ? CMsgChatToxicityToxicPlayerMatchesReport_IndividualRow.toJSON(e) : undefined
      );
    } else {
      obj.rows = [];
    }
    return obj;
  },
};

function createBaseCMsgChatToxicityToxicPlayerMatchesReport_IndividualRow(): CMsgChatToxicityToxicPlayerMatchesReport_IndividualRow {
  return {
    playerAccountId: 0,
    numMatchesSeen: 0,
    numMessages: 0,
    numMessagesToxic: 0,
    firstMatchSeen: "0",
    lastMatchSeen: "0",
  };
}

export const CMsgChatToxicityToxicPlayerMatchesReport_IndividualRow = {
  encode(
    message: CMsgChatToxicityToxicPlayerMatchesReport_IndividualRow,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playerAccountId !== 0) {
      writer.uint32(8).uint32(message.playerAccountId);
    }
    if (message.numMatchesSeen !== 0) {
      writer.uint32(16).uint32(message.numMatchesSeen);
    }
    if (message.numMessages !== 0) {
      writer.uint32(24).uint32(message.numMessages);
    }
    if (message.numMessagesToxic !== 0) {
      writer.uint32(32).uint32(message.numMessagesToxic);
    }
    if (message.firstMatchSeen !== "0") {
      writer.uint32(40).uint64(message.firstMatchSeen);
    }
    if (message.lastMatchSeen !== "0") {
      writer.uint32(48).uint64(message.lastMatchSeen);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgChatToxicityToxicPlayerMatchesReport_IndividualRow {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgChatToxicityToxicPlayerMatchesReport_IndividualRow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.numMatchesSeen = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.numMessages = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.numMessagesToxic = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.firstMatchSeen = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.lastMatchSeen = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgChatToxicityToxicPlayerMatchesReport_IndividualRow {
    return {
      playerAccountId: isSet(object.playerAccountId) ? Number(object.playerAccountId) : 0,
      numMatchesSeen: isSet(object.numMatchesSeen) ? Number(object.numMatchesSeen) : 0,
      numMessages: isSet(object.numMessages) ? Number(object.numMessages) : 0,
      numMessagesToxic: isSet(object.numMessagesToxic) ? Number(object.numMessagesToxic) : 0,
      firstMatchSeen: isSet(object.firstMatchSeen) ? String(object.firstMatchSeen) : "0",
      lastMatchSeen: isSet(object.lastMatchSeen) ? String(object.lastMatchSeen) : "0",
    };
  },

  toJSON(message: CMsgChatToxicityToxicPlayerMatchesReport_IndividualRow): unknown {
    const obj: any = {};
    message.playerAccountId !== undefined && (obj.playerAccountId = Math.round(message.playerAccountId));
    message.numMatchesSeen !== undefined && (obj.numMatchesSeen = Math.round(message.numMatchesSeen));
    message.numMessages !== undefined && (obj.numMessages = Math.round(message.numMessages));
    message.numMessagesToxic !== undefined && (obj.numMessagesToxic = Math.round(message.numMessagesToxic));
    message.firstMatchSeen !== undefined && (obj.firstMatchSeen = message.firstMatchSeen);
    message.lastMatchSeen !== undefined && (obj.lastMatchSeen = message.lastMatchSeen);
    return obj;
  },
};

function createBaseCMsgChatToxicityReport(): CMsgChatToxicityReport {
  return { numMatchesSeen: 0, numMessages: 0, numMessagesMlThinksToxic: 0, status: "", result: 0, message: "" };
}

export const CMsgChatToxicityReport = {
  encode(message: CMsgChatToxicityReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numMatchesSeen !== 0) {
      writer.uint32(8).uint32(message.numMatchesSeen);
    }
    if (message.numMessages !== 0) {
      writer.uint32(16).uint32(message.numMessages);
    }
    if (message.numMessagesMlThinksToxic !== 0) {
      writer.uint32(32).uint32(message.numMessagesMlThinksToxic);
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    if (message.result !== 0) {
      writer.uint32(48).uint32(message.result);
    }
    if (message.message !== "") {
      writer.uint32(58).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgChatToxicityReport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgChatToxicityReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.numMatchesSeen = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.numMessages = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.numMessagesMlThinksToxic = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.status = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgChatToxicityReport {
    return {
      numMatchesSeen: isSet(object.numMatchesSeen) ? Number(object.numMatchesSeen) : 0,
      numMessages: isSet(object.numMessages) ? Number(object.numMessages) : 0,
      numMessagesMlThinksToxic: isSet(object.numMessagesMlThinksToxic) ? Number(object.numMessagesMlThinksToxic) : 0,
      status: isSet(object.status) ? String(object.status) : "",
      result: isSet(object.result) ? Number(object.result) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: CMsgChatToxicityReport): unknown {
    const obj: any = {};
    message.numMatchesSeen !== undefined && (obj.numMatchesSeen = Math.round(message.numMatchesSeen));
    message.numMessages !== undefined && (obj.numMessages = Math.round(message.numMessages));
    message.numMessagesMlThinksToxic !== undefined &&
      (obj.numMessagesMlThinksToxic = Math.round(message.numMessagesMlThinksToxic));
    message.status !== undefined && (obj.status = message.status);
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },
};

function createBaseCMsgGetTeamAuditInformation(): CMsgGetTeamAuditInformation {
  return { teamId: 0, teamName: "", actions: [], lastUpdated: 0 };
}

export const CMsgGetTeamAuditInformation = {
  encode(message: CMsgGetTeamAuditInformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).uint32(message.teamId);
    }
    if (message.teamName !== "") {
      writer.uint32(18).string(message.teamName);
    }
    for (const v of message.actions) {
      CMsgGetTeamAuditInformation_Action.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastUpdated !== 0) {
      writer.uint32(32).uint32(message.lastUpdated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGetTeamAuditInformation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGetTeamAuditInformation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.teamName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.actions.push(CMsgGetTeamAuditInformation_Action.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.lastUpdated = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGetTeamAuditInformation {
    return {
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      teamName: isSet(object.teamName) ? String(object.teamName) : "",
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => CMsgGetTeamAuditInformation_Action.fromJSON(e))
        : [],
      lastUpdated: isSet(object.lastUpdated) ? Number(object.lastUpdated) : 0,
    };
  },

  toJSON(message: CMsgGetTeamAuditInformation): unknown {
    const obj: any = {};
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.teamName !== undefined && (obj.teamName = message.teamName);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e ? CMsgGetTeamAuditInformation_Action.toJSON(e) : undefined);
    } else {
      obj.actions = [];
    }
    message.lastUpdated !== undefined && (obj.lastUpdated = Math.round(message.lastUpdated));
    return obj;
  },
};

function createBaseCMsgGetTeamAuditInformation_Action(): CMsgGetTeamAuditInformation_Action {
  return { registrationPeriod: 0, accountId: 0, action: 0, timestamp: 0, playerName: "", playerRealName: "" };
}

export const CMsgGetTeamAuditInformation_Action = {
  encode(message: CMsgGetTeamAuditInformation_Action, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registrationPeriod !== 0) {
      writer.uint32(8).uint32(message.registrationPeriod);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    if (message.action !== 0) {
      writer.uint32(24).uint32(message.action);
    }
    if (message.timestamp !== 0) {
      writer.uint32(32).uint32(message.timestamp);
    }
    if (message.playerName !== "") {
      writer.uint32(42).string(message.playerName);
    }
    if (message.playerRealName !== "") {
      writer.uint32(50).string(message.playerRealName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGetTeamAuditInformation_Action {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGetTeamAuditInformation_Action();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.registrationPeriod = reader.uint32();
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

          message.action = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.playerName = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.playerRealName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGetTeamAuditInformation_Action {
    return {
      registrationPeriod: isSet(object.registrationPeriod) ? Number(object.registrationPeriod) : 0,
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      action: isSet(object.action) ? Number(object.action) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      playerName: isSet(object.playerName) ? String(object.playerName) : "",
      playerRealName: isSet(object.playerRealName) ? String(object.playerRealName) : "",
    };
  },

  toJSON(message: CMsgGetTeamAuditInformation_Action): unknown {
    const obj: any = {};
    message.registrationPeriod !== undefined && (obj.registrationPeriod = Math.round(message.registrationPeriod));
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.action !== undefined && (obj.action = Math.round(message.action));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.playerName !== undefined && (obj.playerName = message.playerName);
    message.playerRealName !== undefined && (obj.playerRealName = message.playerRealName);
    return obj;
  },
};

function createBaseCMsgDOTADPCMatch(): CMsgDOTADPCMatch {
  return { match: undefined, metadata: undefined };
}

export const CMsgDOTADPCMatch = {
  encode(message: CMsgDOTADPCMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.match !== undefined) {
      CMsgDOTAMatch.encode(message.match, writer.uint32(10).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      CDOTAMatchMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCMatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.match = CMsgDOTAMatch.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.metadata = CDOTAMatchMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTADPCMatch {
    return {
      match: isSet(object.match) ? CMsgDOTAMatch.fromJSON(object.match) : undefined,
      metadata: isSet(object.metadata) ? CDOTAMatchMetadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: CMsgDOTADPCMatch): unknown {
    const obj: any = {};
    message.match !== undefined && (obj.match = message.match ? CMsgDOTAMatch.toJSON(message.match) : undefined);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? CDOTAMatchMetadata.toJSON(message.metadata) : undefined);
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
