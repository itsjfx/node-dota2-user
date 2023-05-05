/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgDOTAMatch } from "./dota_gcmessages_common";
import { CDOTAMatchMetadata } from "./dota_match_metadata";
import { ELeagueDivision, ELeagueRegion } from "./dota_shared_enums";

export enum ETeamFanContentStatus {
  TEAM_FAN_CONTENT_STATUS_INVALID = 0,
  TEAM_FAN_CONTENT_STATUS_PENDING = 1,
  TEAM_FAN_CONTENT_STATUS_EVALUATED = 2,
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

export enum ETeamFanContentAssetStatus {
  k_eFanContentAssetStatus_None = 0,
  k_eFanContentAssetStatus_Approved = 1,
  k_eFanContentAssetStatus_Rejected = 2,
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

export enum CMsgDPCEvent_ELeagueEventType {
  UNKNOWN = 0,
  LEAGUE = 1,
  MAJOR = 2,
  INTERNATIONAL_QUALIFIERS = 3,
  INTERNATIONAL = 4,
  LEAGUE_FINALS = 5,
}

export enum CMsgDPCEvent_ETour {
  TOUR_NONE = 0,
  TOUR_1 = 1,
  TOUR_2 = 2,
  TOUR_3 = 3,
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

export interface CMsgChatToxicityReport {
  numMatchesSeen: number;
  numMessages: number;
  numMessagesHumanThinksToxic: number;
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
};

function createBaseCMsgChatToxicityReport(): CMsgChatToxicityReport {
  return {
    numMatchesSeen: 0,
    numMessages: 0,
    numMessagesHumanThinksToxic: 0,
    numMessagesMlThinksToxic: 0,
    status: "",
    result: 0,
    message: "",
  };
}

export const CMsgChatToxicityReport = {
  encode(message: CMsgChatToxicityReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numMatchesSeen !== 0) {
      writer.uint32(8).uint32(message.numMatchesSeen);
    }
    if (message.numMessages !== 0) {
      writer.uint32(16).uint32(message.numMessages);
    }
    if (message.numMessagesHumanThinksToxic !== 0) {
      writer.uint32(24).uint32(message.numMessagesHumanThinksToxic);
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
        case 3:
          if (tag != 24) {
            break;
          }

          message.numMessagesHumanThinksToxic = reader.uint32();
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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
