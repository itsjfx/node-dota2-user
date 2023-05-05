/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  CDOTASaveGame,
  CMsgPendingEventAward,
  DOTABotDifficulty,
  dotaCmPick,
  DOTAGameState,
  dotaGcTeam,
  DOTALeaverStatusT,
  DOTALobbyVisibility,
  DOTASelectionPriorityChoice,
  DOTASelectionPriorityRules,
  EDOTAMMRBoostType,
  EEvent,
  EMatchOutcome,
  MatchType,
} from "./dota_shared_enums";

export enum ELobbyMemberCoachRequestState {
  k_eLobbyMemberCoachRequestState_None = 0,
  k_eLobbyMemberCoachRequestState_Accepted = 1,
  k_eLobbyMemberCoachRequestState_Rejected = 2,
}

export enum LobbyDotaTVDelay {
  LobbyDotaTV_10 = 0,
  LobbyDotaTV_120 = 1,
  LobbyDotaTV_300 = 2,
  LobbyDotaTV_900 = 3,
}

export enum LobbyDotaPauseSetting {
  LobbyDotaPauseSetting_Unlimited = 0,
  LobbyDotaPauseSetting_Limited = 1,
  LobbyDotaPauseSetting_Disabled = 2,
}

export interface CMsgLobbyCoachFriendRequest {
  coachAccountId: number;
  playerAccountId: number;
  requestState: ELobbyMemberCoachRequestState;
}

export interface CMsgLobbyPlayerPlusSubscriptionData {
  heroBadges: CMsgLobbyPlayerPlusSubscriptionData_HeroBadge[];
}

export interface CMsgLobbyPlayerPlusSubscriptionData_HeroBadge {
  heroId: number;
  heroBadgeXp: number;
}

export interface CMsgLobbyEventPoints {
  eventId: number;
  accountPoints: CMsgLobbyEventPoints_AccountPoints[];
}

export interface CMsgLobbyEventPoints_PeriodicResourceData {
  periodicResourceId: number;
  remaining: number;
  max: number;
}

export interface CMsgLobbyEventPoints_NetworkedEventAction {
  actionId: number;
  timesGranted: number;
}

export interface CMsgLobbyEventPoints_AccountPoints {
  accountId: number;
  normalPoints: number;
  premiumPoints: number;
  owned: boolean;
  activeEffectsMask: string;
  wagerStreak: number;
  eventGameCustomActions: CMsgLobbyEventPoints_NetworkedEventAction[];
  tipAmountIndex: number;
  activeEventSeasonId: number;
  teleportFxLevel: number;
  networkedEventActions: CMsgLobbyEventPoints_NetworkedEventAction[];
  periodicResources: CMsgLobbyEventPoints_PeriodicResourceData[];
}

export interface CMsgLobbyEventGameData {
  gameSeed: number;
  eventWindowStartTime: number;
}

export interface CSODOTALobbyInvite {
  groupId: string;
  senderId: string;
  senderName: string;
  members: CSODOTALobbyInvite_LobbyMember[];
  customGameId: string;
  inviteGid: string;
  customGameCrc: string;
  customGameTimestamp: number;
}

export interface CSODOTALobbyInvite_LobbyMember {
  name: string;
  steamId: string;
}

export interface CSODOTALobbyMember {
  id: string;
  heroId: number;
  team: dotaGcTeam;
  name: string;
  slot: number;
  partyId: string;
  metaLevel: number;
  metaXp: number;
  metaXpAwarded: number;
  leaverStatus: DOTALeaverStatusT;
  leaverActions: number;
  channel: number;
  disabledHeroId: number[];
  enabledHeroId: number[];
  coachTeam: dotaGcTeam;
  coachedAccountIds: number[];
  coachRating: number;
  pwrdCyberCafeId: number;
  pwrdCyberCafeName: string;
  disabledRandomHeroBits: number[];
  rankChange: number;
  cameraman: boolean;
  customGameProductIds: number[];
  searchMatchType: MatchType;
  favoriteTeamPacked: string;
  isPlusSubscriber: boolean;
  laneSelectionFlags: number;
  canEarnRewards: boolean;
  liveSpectatorTeam: dotaGcTeam;
  wasMvpLastGame: boolean;
  pendingAwards: CMsgPendingEventAward[];
  pendingAwardsOnVictory: CMsgPendingEventAward[];
  rankMmrBoostType: EDOTAMMRBoostType;
  queuePointAdjustment: number;
  rankTier: number;
  title: number;
  guildId: number;
  reportsAvailable: number;
  isSteamChina: boolean;
  liveSpectatorAccountId: number;
  commsReportsAvailable: number;
}

export interface CSODOTAServerLobbyMember {
}

export interface CSODOTAStaticLobbyMember {
}

export interface CSODOTAServerStaticLobbyMember {
}

export interface CLobbyTeamDetails {
  teamName: string;
  teamTag: string;
  teamId: number;
  teamLogo: string;
  teamBaseLogo: string;
  teamBannerLogo: string;
  teamComplete: boolean;
  rank: number;
  rankChange: number;
  isHomeTeam: boolean;
  isChallengeMatch: boolean;
  challengeMatchTokenAccount: string;
  teamLogoUrl: string;
  teamAbbreviation: string;
}

export interface CLobbyGuildDetails {
  guildId: number;
  guildPrimaryColor: number;
  guildSecondaryColor: number;
  guildPattern: number;
  guildLogo: string;
  guildPoints: number;
  guildEvent: number;
  guildFlags: number;
  teamForGuild: dotaGcTeam;
  guildTag: string;
  guildWeeklyPercentile: number;
}

export interface CLobbyTimedRewardDetails {
  itemDefIndex: number;
  isSupplyCrate: boolean;
  isTimedDrop: boolean;
  accountId: number;
  origin: number;
}

export interface CLobbyBroadcastChannelInfo {
  channelId: number;
  countryCode: string;
  description: string;
  languageCode: string;
}

export interface CLobbyGuildChallenge {
  guildId: number;
  eventId: EEvent;
  challengeInstanceId: number;
  challengeParameter: number;
  challengeTimestamp: number;
  challengePeriodSerial: number;
  challengeProgressAtStart: number;
  eligibleAccountIds: number[];
}

export interface CSODOTALobby {
  lobbyId: string;
  allMembers: CSODOTALobbyMember[];
  memberIndices: number[];
  leftMemberIndices: number[];
  freeMemberIndices: number[];
  leaderId: string;
  serverId: string;
  gameMode: number;
  pendingInvites: string[];
  state: CSODOTALobby_State;
  connect: string;
  lobbyType: CSODOTALobby_LobbyType;
  allowCheats: boolean;
  fillWithBots: boolean;
  introMode: boolean;
  gameName: string;
  teamDetails: CLobbyTeamDetails[];
  tutorialLesson: number;
  tournamentId: number;
  tournamentGameId: number;
  serverRegion: number;
  gameState: DOTAGameState;
  numSpectators: number;
  matchgroup: number;
  cmPick: dotaCmPick;
  matchId: string;
  allowSpectating: boolean;
  botDifficultyRadiant: DOTABotDifficulty;
  timedRewardDetails: CLobbyTimedRewardDetails[];
  passKey: string;
  leagueid: number;
  penaltyLevelRadiant: number;
  penaltyLevelDire: number;
  loadGameId: number;
  seriesType: number;
  radiantSeriesWins: number;
  direSeriesWins: number;
  lootGenerated: number;
  lootAwarded: number;
  allchat: boolean;
  dotaTvDelay: LobbyDotaTVDelay;
  customGameMode: string;
  customMapName: string;
  customDifficulty: number;
  lan: boolean;
  broadcastChannelInfo: CLobbyBroadcastChannelInfo[];
  firstLeaverAccountid: number;
  seriesId: number;
  lowPriority: boolean;
  extraMessages: CSODOTALobby_CExtraMsg[];
  saveGame: CDOTASaveGame | undefined;
  firstBloodHappened: boolean;
  matchOutcome: EMatchOutcome;
  massDisconnect: boolean;
  customGameId: string;
  customMinPlayers: number;
  customMaxPlayers: number;
  visibility: DOTALobbyVisibility;
  customGameCrc: string;
  customGameAutoCreatedLobby: boolean;
  customGameTimestamp: number;
  previousSeriesMatches: string[];
  previousMatchOverride: string;
  gameStartTime: number;
  pauseSetting: LobbyDotaPauseSetting;
  weekendTourneyDivisionId: number;
  weekendTourneySkillLevel: number;
  weekendTourneyBracketRound: number;
  botDifficultyDire: DOTABotDifficulty;
  botRadiant: string;
  botDire: string;
  eventProgressionEnabled: EEvent[];
  selectionPriorityRules: DOTASelectionPriorityRules;
  seriesPreviousSelectionPriorityTeamId: number;
  seriesCurrentSelectionPriorityTeamId: number;
  seriesCurrentPriorityTeamChoice: DOTASelectionPriorityChoice;
  seriesCurrentNonPriorityTeamChoice: DOTASelectionPriorityChoice;
  seriesCurrentSelectionPriorityUsedCoinToss: boolean;
  currentPrimaryEvent: EEvent;
  emergencyDisabledHeroIds: number[];
  customGamePrivateKey: string;
  customGamePenalties: boolean;
  lanHostPingLocation: string;
  leagueNodeId: number;
  matchDuration: number;
  leaguePhase: number;
  recordDetailedStats: boolean;
  experimentalGameplayEnabled: boolean;
  guildChallenges: CLobbyGuildChallenge[];
  guildDetails: CLobbyGuildDetails[];
  lobbyEventPoints: CMsgLobbyEventPoints[];
  requestedHeroIds: number[];
  coachFriendRequests: CMsgLobbyCoachFriendRequest[];
  isInSteamChina: boolean;
  withScenarioSave: boolean;
  lobbyCreationTime: number;
  eventGameDefinition: string;
  extraStartupMessages: CSODOTALobby_CExtraMsg[];
}

export enum CSODOTALobby_State {
  UI = 0,
  READYUP = 4,
  SERVERSETUP = 1,
  RUN = 2,
  POSTGAME = 3,
  NOTREADY = 5,
  SERVERASSIGN = 6,
}

export enum CSODOTALobby_LobbyType {
  INVALID = -1,
  CASUAL_MATCH = 0,
  PRACTICE = 1,
  COOP_BOT_MATCH = 4,
  COMPETITIVE_MATCH = 7,
  WEEKEND_TOURNEY = 9,
  LOCAL_BOT_MATCH = 10,
  SPECTATOR = 11,
  EVENT_MATCH = 12,
  NEW_PLAYER_POOL = 14,
  FEATURED_GAMEMODE = 15,
}

export interface CSODOTALobby_CExtraMsg {
  id: number;
  contents: Buffer;
}

export interface CSODOTAServerLobby {
  allMembers: CSODOTAServerLobbyMember[];
}

export interface CSODOTAStaticLobby {
  allMembers: CSODOTAStaticLobbyMember[];
  isPlayerDraft: boolean;
}

export interface CSODOTAServerStaticLobby {
  allMembers: CSODOTAServerStaticLobbyMember[];
}

export interface CMsgAdditionalLobbyStartupAccountData {
  accountId: number;
  plusData: CMsgLobbyPlayerPlusSubscriptionData | undefined;
  unlockedChatWheelMessageRanges: CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange[];
  unlockedPingWheelMessageRanges: CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange[];
}

export interface CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange {
  messageIdStart: number;
  messageIdEnd: number;
}

export interface CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange {
  messageIdStart: number;
  messageIdEnd: number;
}

export interface CMsgLobbyInitializationComplete {
}

export interface CMsgLobbyPlaytestDetails {
  json: string;
}

export interface CMsgLocalServerGuildData {
  guildId: number;
  eventId: EEvent;
  guildPoints: number;
  guildLogo: string;
  guildPrimaryColor: number;
  guildSecondaryColor: number;
  guildPattern: number;
  guildFlags: number;
  guildWeeklyPercentile: number;
}

export interface CMsgLocalServerFakeLobbyData {
  accountId: number;
  eventPoints: CMsgLobbyEventPoints[];
  isPlusSubscriber: boolean;
  primaryEventId: number;
  favoriteTeam: number;
  favoriteTeamQuality: number;
  guildInfo: CMsgLocalServerGuildData | undefined;
  teleportFxLevel: number;
  additionalData: CMsgAdditionalLobbyStartupAccountData | undefined;
}

function createBaseCMsgLobbyCoachFriendRequest(): CMsgLobbyCoachFriendRequest {
  return { coachAccountId: 0, playerAccountId: 0, requestState: 0 };
}

export const CMsgLobbyCoachFriendRequest = {
  encode(message: CMsgLobbyCoachFriendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coachAccountId !== 0) {
      writer.uint32(8).uint32(message.coachAccountId);
    }
    if (message.playerAccountId !== 0) {
      writer.uint32(16).uint32(message.playerAccountId);
    }
    if (message.requestState !== 0) {
      writer.uint32(24).int32(message.requestState);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyCoachFriendRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyCoachFriendRequest();
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

          message.playerAccountId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.requestState = reader.int32() as any;
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

function createBaseCMsgLobbyPlayerPlusSubscriptionData(): CMsgLobbyPlayerPlusSubscriptionData {
  return { heroBadges: [] };
}

export const CMsgLobbyPlayerPlusSubscriptionData = {
  encode(message: CMsgLobbyPlayerPlusSubscriptionData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.heroBadges) {
      CMsgLobbyPlayerPlusSubscriptionData_HeroBadge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyPlayerPlusSubscriptionData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyPlayerPlusSubscriptionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.heroBadges.push(CMsgLobbyPlayerPlusSubscriptionData_HeroBadge.decode(reader, reader.uint32()));
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

function createBaseCMsgLobbyPlayerPlusSubscriptionData_HeroBadge(): CMsgLobbyPlayerPlusSubscriptionData_HeroBadge {
  return { heroId: 0, heroBadgeXp: 0 };
}

export const CMsgLobbyPlayerPlusSubscriptionData_HeroBadge = {
  encode(message: CMsgLobbyPlayerPlusSubscriptionData_HeroBadge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.heroBadgeXp !== 0) {
      writer.uint32(16).uint32(message.heroBadgeXp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyPlayerPlusSubscriptionData_HeroBadge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyPlayerPlusSubscriptionData_HeroBadge();
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

          message.heroBadgeXp = reader.uint32();
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

function createBaseCMsgLobbyEventPoints(): CMsgLobbyEventPoints {
  return { eventId: 0, accountPoints: [] };
}

export const CMsgLobbyEventPoints = {
  encode(message: CMsgLobbyEventPoints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    for (const v of message.accountPoints) {
      CMsgLobbyEventPoints_AccountPoints.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyEventPoints {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyEventPoints();
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
          if (tag != 18) {
            break;
          }

          message.accountPoints.push(CMsgLobbyEventPoints_AccountPoints.decode(reader, reader.uint32()));
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

function createBaseCMsgLobbyEventPoints_PeriodicResourceData(): CMsgLobbyEventPoints_PeriodicResourceData {
  return { periodicResourceId: 0, remaining: 0, max: 0 };
}

export const CMsgLobbyEventPoints_PeriodicResourceData = {
  encode(message: CMsgLobbyEventPoints_PeriodicResourceData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.periodicResourceId !== 0) {
      writer.uint32(8).uint32(message.periodicResourceId);
    }
    if (message.remaining !== 0) {
      writer.uint32(16).uint32(message.remaining);
    }
    if (message.max !== 0) {
      writer.uint32(24).uint32(message.max);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyEventPoints_PeriodicResourceData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyEventPoints_PeriodicResourceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.periodicResourceId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.remaining = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.max = reader.uint32();
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

function createBaseCMsgLobbyEventPoints_NetworkedEventAction(): CMsgLobbyEventPoints_NetworkedEventAction {
  return { actionId: 0, timesGranted: 0 };
}

export const CMsgLobbyEventPoints_NetworkedEventAction = {
  encode(message: CMsgLobbyEventPoints_NetworkedEventAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionId !== 0) {
      writer.uint32(8).uint32(message.actionId);
    }
    if (message.timesGranted !== 0) {
      writer.uint32(16).uint32(message.timesGranted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyEventPoints_NetworkedEventAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyEventPoints_NetworkedEventAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.actionId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.timesGranted = reader.uint32();
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

function createBaseCMsgLobbyEventPoints_AccountPoints(): CMsgLobbyEventPoints_AccountPoints {
  return {
    accountId: 0,
    normalPoints: 0,
    premiumPoints: 0,
    owned: false,
    activeEffectsMask: "0",
    wagerStreak: 0,
    eventGameCustomActions: [],
    tipAmountIndex: 0,
    activeEventSeasonId: 0,
    teleportFxLevel: 0,
    networkedEventActions: [],
    periodicResources: [],
  };
}

export const CMsgLobbyEventPoints_AccountPoints = {
  encode(message: CMsgLobbyEventPoints_AccountPoints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.normalPoints !== 0) {
      writer.uint32(16).uint32(message.normalPoints);
    }
    if (message.premiumPoints !== 0) {
      writer.uint32(24).uint32(message.premiumPoints);
    }
    if (message.owned === true) {
      writer.uint32(32).bool(message.owned);
    }
    if (message.activeEffectsMask !== "0") {
      writer.uint32(96).uint64(message.activeEffectsMask);
    }
    if (message.wagerStreak !== 0) {
      writer.uint32(184).uint32(message.wagerStreak);
    }
    for (const v of message.eventGameCustomActions) {
      CMsgLobbyEventPoints_NetworkedEventAction.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    if (message.tipAmountIndex !== 0) {
      writer.uint32(208).uint32(message.tipAmountIndex);
    }
    if (message.activeEventSeasonId !== 0) {
      writer.uint32(216).uint32(message.activeEventSeasonId);
    }
    if (message.teleportFxLevel !== 0) {
      writer.uint32(224).uint32(message.teleportFxLevel);
    }
    for (const v of message.networkedEventActions) {
      CMsgLobbyEventPoints_NetworkedEventAction.encode(v!, writer.uint32(242).fork()).ldelim();
    }
    for (const v of message.periodicResources) {
      CMsgLobbyEventPoints_PeriodicResourceData.encode(v!, writer.uint32(250).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyEventPoints_AccountPoints {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyEventPoints_AccountPoints();
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

          message.normalPoints = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.premiumPoints = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.owned = reader.bool();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.activeEffectsMask = longToString(reader.uint64() as Long);
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.wagerStreak = reader.uint32();
          continue;
        case 25:
          if (tag != 202) {
            break;
          }

          message.eventGameCustomActions.push(
            CMsgLobbyEventPoints_NetworkedEventAction.decode(reader, reader.uint32()),
          );
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.tipAmountIndex = reader.uint32();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.activeEventSeasonId = reader.uint32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.teleportFxLevel = reader.uint32();
          continue;
        case 30:
          if (tag != 242) {
            break;
          }

          message.networkedEventActions.push(CMsgLobbyEventPoints_NetworkedEventAction.decode(reader, reader.uint32()));
          continue;
        case 31:
          if (tag != 250) {
            break;
          }

          message.periodicResources.push(CMsgLobbyEventPoints_PeriodicResourceData.decode(reader, reader.uint32()));
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

function createBaseCMsgLobbyEventGameData(): CMsgLobbyEventGameData {
  return { gameSeed: 0, eventWindowStartTime: 0 };
}

export const CMsgLobbyEventGameData = {
  encode(message: CMsgLobbyEventGameData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameSeed !== 0) {
      writer.uint32(8).uint32(message.gameSeed);
    }
    if (message.eventWindowStartTime !== 0) {
      writer.uint32(16).uint32(message.eventWindowStartTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyEventGameData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyEventGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gameSeed = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.eventWindowStartTime = reader.uint32();
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

function createBaseCSODOTALobbyInvite(): CSODOTALobbyInvite {
  return {
    groupId: "0",
    senderId: "0",
    senderName: "",
    members: [],
    customGameId: "0",
    inviteGid: "0",
    customGameCrc: "0",
    customGameTimestamp: 0,
  };
}

export const CSODOTALobbyInvite = {
  encode(message: CSODOTALobbyInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "0") {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.senderId !== "0") {
      writer.uint32(17).fixed64(message.senderId);
    }
    if (message.senderName !== "") {
      writer.uint32(26).string(message.senderName);
    }
    for (const v of message.members) {
      CSODOTALobbyInvite_LobbyMember.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.customGameId !== "0") {
      writer.uint32(40).uint64(message.customGameId);
    }
    if (message.inviteGid !== "0") {
      writer.uint32(49).fixed64(message.inviteGid);
    }
    if (message.customGameCrc !== "0") {
      writer.uint32(57).fixed64(message.customGameCrc);
    }
    if (message.customGameTimestamp !== 0) {
      writer.uint32(69).fixed32(message.customGameTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTALobbyInvite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTALobbyInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.groupId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.senderId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.senderName = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.members.push(CSODOTALobbyInvite_LobbyMember.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.customGameId = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag != 49) {
            break;
          }

          message.inviteGid = longToString(reader.fixed64() as Long);
          continue;
        case 7:
          if (tag != 57) {
            break;
          }

          message.customGameCrc = longToString(reader.fixed64() as Long);
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.customGameTimestamp = reader.fixed32();
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

function createBaseCSODOTALobbyInvite_LobbyMember(): CSODOTALobbyInvite_LobbyMember {
  return { name: "", steamId: "0" };
}

export const CSODOTALobbyInvite_LobbyMember = {
  encode(message: CSODOTALobbyInvite_LobbyMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.steamId !== "0") {
      writer.uint32(17).fixed64(message.steamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTALobbyInvite_LobbyMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTALobbyInvite_LobbyMember();
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
          if (tag != 17) {
            break;
          }

          message.steamId = longToString(reader.fixed64() as Long);
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

function createBaseCSODOTALobbyMember(): CSODOTALobbyMember {
  return {
    id: "0",
    heroId: 0,
    team: 0,
    name: "",
    slot: 0,
    partyId: "0",
    metaLevel: 0,
    metaXp: 0,
    metaXpAwarded: 0,
    leaverStatus: 0,
    leaverActions: 0,
    channel: 0,
    disabledHeroId: [],
    enabledHeroId: [],
    coachTeam: 0,
    coachedAccountIds: [],
    coachRating: 0,
    pwrdCyberCafeId: 0,
    pwrdCyberCafeName: "",
    disabledRandomHeroBits: [],
    rankChange: 0,
    cameraman: false,
    customGameProductIds: [],
    searchMatchType: 0,
    favoriteTeamPacked: "0",
    isPlusSubscriber: false,
    laneSelectionFlags: 0,
    canEarnRewards: false,
    liveSpectatorTeam: 0,
    wasMvpLastGame: false,
    pendingAwards: [],
    pendingAwardsOnVictory: [],
    rankMmrBoostType: 0,
    queuePointAdjustment: 0,
    rankTier: 0,
    title: 0,
    guildId: 0,
    reportsAvailable: 0,
    isSteamChina: false,
    liveSpectatorAccountId: 0,
    commsReportsAvailable: 0,
  };
}

export const CSODOTALobbyMember = {
  encode(message: CSODOTALobbyMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(9).fixed64(message.id);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).uint32(message.heroId);
    }
    if (message.team !== 0) {
      writer.uint32(24).int32(message.team);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.slot !== 0) {
      writer.uint32(56).uint32(message.slot);
    }
    if (message.partyId !== "0") {
      writer.uint32(96).uint64(message.partyId);
    }
    if (message.metaLevel !== 0) {
      writer.uint32(104).uint32(message.metaLevel);
    }
    if (message.metaXp !== 0) {
      writer.uint32(112).uint32(message.metaXp);
    }
    if (message.metaXpAwarded !== 0) {
      writer.uint32(120).uint32(message.metaXpAwarded);
    }
    if (message.leaverStatus !== 0) {
      writer.uint32(128).int32(message.leaverStatus);
    }
    if (message.leaverActions !== 0) {
      writer.uint32(224).uint32(message.leaverActions);
    }
    if (message.channel !== 0) {
      writer.uint32(136).uint32(message.channel);
    }
    writer.uint32(162).fork();
    for (const v of message.disabledHeroId) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(178).fork();
    for (const v of message.enabledHeroId) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.coachTeam !== 0) {
      writer.uint32(184).int32(message.coachTeam);
    }
    writer.uint32(426).fork();
    for (const v of message.coachedAccountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.coachRating !== 0) {
      writer.uint32(336).uint32(message.coachRating);
    }
    if (message.pwrdCyberCafeId !== 0) {
      writer.uint32(192).uint32(message.pwrdCyberCafeId);
    }
    if (message.pwrdCyberCafeName !== "") {
      writer.uint32(202).string(message.pwrdCyberCafeName);
    }
    writer.uint32(330).fork();
    for (const v of message.disabledRandomHeroBits) {
      writer.fixed32(v);
    }
    writer.ldelim();
    if (message.rankChange !== 0) {
      writer.uint32(232).sint32(message.rankChange);
    }
    if (message.cameraman === true) {
      writer.uint32(240).bool(message.cameraman);
    }
    writer.uint32(250).fork();
    for (const v of message.customGameProductIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.searchMatchType !== 0) {
      writer.uint32(264).int32(message.searchMatchType);
    }
    if (message.favoriteTeamPacked !== "0") {
      writer.uint32(280).uint64(message.favoriteTeamPacked);
    }
    if (message.isPlusSubscriber === true) {
      writer.uint32(288).bool(message.isPlusSubscriber);
    }
    if (message.laneSelectionFlags !== 0) {
      writer.uint32(304).uint32(message.laneSelectionFlags);
    }
    if (message.canEarnRewards === true) {
      writer.uint32(312).bool(message.canEarnRewards);
    }
    if (message.liveSpectatorTeam !== 0) {
      writer.uint32(320).int32(message.liveSpectatorTeam);
    }
    if (message.wasMvpLastGame === true) {
      writer.uint32(344).bool(message.wasMvpLastGame);
    }
    for (const v of message.pendingAwards) {
      CMsgPendingEventAward.encode(v!, writer.uint32(354).fork()).ldelim();
    }
    for (const v of message.pendingAwardsOnVictory) {
      CMsgPendingEventAward.encode(v!, writer.uint32(362).fork()).ldelim();
    }
    if (message.rankMmrBoostType !== 0) {
      writer.uint32(368).int32(message.rankMmrBoostType);
    }
    if (message.queuePointAdjustment !== 0) {
      writer.uint32(376).sint32(message.queuePointAdjustment);
    }
    if (message.rankTier !== 0) {
      writer.uint32(384).int32(message.rankTier);
    }
    if (message.title !== 0) {
      writer.uint32(400).uint32(message.title);
    }
    if (message.guildId !== 0) {
      writer.uint32(408).uint32(message.guildId);
    }
    if (message.reportsAvailable !== 0) {
      writer.uint32(416).uint32(message.reportsAvailable);
    }
    if (message.isSteamChina === true) {
      writer.uint32(432).bool(message.isSteamChina);
    }
    if (message.liveSpectatorAccountId !== 0) {
      writer.uint32(440).uint32(message.liveSpectatorAccountId);
    }
    if (message.commsReportsAvailable !== 0) {
      writer.uint32(448).uint32(message.commsReportsAvailable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTALobbyMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTALobbyMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.id = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.team = reader.int32() as any;
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.name = reader.string();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.slot = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.partyId = longToString(reader.uint64() as Long);
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.metaLevel = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.metaXp = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.metaXpAwarded = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.leaverStatus = reader.int32() as any;
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.leaverActions = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.channel = reader.uint32();
          continue;
        case 20:
          if (tag == 160) {
            message.disabledHeroId.push(reader.uint32());
            continue;
          }

          if (tag == 162) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.disabledHeroId.push(reader.uint32());
            }

            continue;
          }

          break;
        case 22:
          if (tag == 176) {
            message.enabledHeroId.push(reader.uint32());
            continue;
          }

          if (tag == 178) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enabledHeroId.push(reader.uint32());
            }

            continue;
          }

          break;
        case 23:
          if (tag != 184) {
            break;
          }

          message.coachTeam = reader.int32() as any;
          continue;
        case 53:
          if (tag == 424) {
            message.coachedAccountIds.push(reader.uint32());
            continue;
          }

          if (tag == 426) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.coachedAccountIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 42:
          if (tag != 336) {
            break;
          }

          message.coachRating = reader.uint32();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.pwrdCyberCafeId = reader.uint32();
          continue;
        case 25:
          if (tag != 202) {
            break;
          }

          message.pwrdCyberCafeName = reader.string();
          continue;
        case 41:
          if (tag == 333) {
            message.disabledRandomHeroBits.push(reader.fixed32());
            continue;
          }

          if (tag == 330) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.disabledRandomHeroBits.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 29:
          if (tag != 232) {
            break;
          }

          message.rankChange = reader.sint32();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.cameraman = reader.bool();
          continue;
        case 31:
          if (tag == 248) {
            message.customGameProductIds.push(reader.uint32());
            continue;
          }

          if (tag == 250) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.customGameProductIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 33:
          if (tag != 264) {
            break;
          }

          message.searchMatchType = reader.int32() as any;
          continue;
        case 35:
          if (tag != 280) {
            break;
          }

          message.favoriteTeamPacked = longToString(reader.uint64() as Long);
          continue;
        case 36:
          if (tag != 288) {
            break;
          }

          message.isPlusSubscriber = reader.bool();
          continue;
        case 38:
          if (tag != 304) {
            break;
          }

          message.laneSelectionFlags = reader.uint32();
          continue;
        case 39:
          if (tag != 312) {
            break;
          }

          message.canEarnRewards = reader.bool();
          continue;
        case 40:
          if (tag != 320) {
            break;
          }

          message.liveSpectatorTeam = reader.int32() as any;
          continue;
        case 43:
          if (tag != 344) {
            break;
          }

          message.wasMvpLastGame = reader.bool();
          continue;
        case 44:
          if (tag != 354) {
            break;
          }

          message.pendingAwards.push(CMsgPendingEventAward.decode(reader, reader.uint32()));
          continue;
        case 45:
          if (tag != 362) {
            break;
          }

          message.pendingAwardsOnVictory.push(CMsgPendingEventAward.decode(reader, reader.uint32()));
          continue;
        case 46:
          if (tag != 368) {
            break;
          }

          message.rankMmrBoostType = reader.int32() as any;
          continue;
        case 47:
          if (tag != 376) {
            break;
          }

          message.queuePointAdjustment = reader.sint32();
          continue;
        case 48:
          if (tag != 384) {
            break;
          }

          message.rankTier = reader.int32();
          continue;
        case 50:
          if (tag != 400) {
            break;
          }

          message.title = reader.uint32();
          continue;
        case 51:
          if (tag != 408) {
            break;
          }

          message.guildId = reader.uint32();
          continue;
        case 52:
          if (tag != 416) {
            break;
          }

          message.reportsAvailable = reader.uint32();
          continue;
        case 54:
          if (tag != 432) {
            break;
          }

          message.isSteamChina = reader.bool();
          continue;
        case 55:
          if (tag != 440) {
            break;
          }

          message.liveSpectatorAccountId = reader.uint32();
          continue;
        case 56:
          if (tag != 448) {
            break;
          }

          message.commsReportsAvailable = reader.uint32();
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

function createBaseCSODOTAServerLobbyMember(): CSODOTAServerLobbyMember {
  return {};
}

export const CSODOTAServerLobbyMember = {
  encode(_: CSODOTAServerLobbyMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTAServerLobbyMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTAServerLobbyMember();
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

function createBaseCSODOTAStaticLobbyMember(): CSODOTAStaticLobbyMember {
  return {};
}

export const CSODOTAStaticLobbyMember = {
  encode(_: CSODOTAStaticLobbyMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTAStaticLobbyMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTAStaticLobbyMember();
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

function createBaseCSODOTAServerStaticLobbyMember(): CSODOTAServerStaticLobbyMember {
  return {};
}

export const CSODOTAServerStaticLobbyMember = {
  encode(_: CSODOTAServerStaticLobbyMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTAServerStaticLobbyMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTAServerStaticLobbyMember();
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

function createBaseCLobbyTeamDetails(): CLobbyTeamDetails {
  return {
    teamName: "",
    teamTag: "",
    teamId: 0,
    teamLogo: "0",
    teamBaseLogo: "0",
    teamBannerLogo: "0",
    teamComplete: false,
    rank: 0,
    rankChange: 0,
    isHomeTeam: false,
    isChallengeMatch: false,
    challengeMatchTokenAccount: "0",
    teamLogoUrl: "",
    teamAbbreviation: "",
  };
}

export const CLobbyTeamDetails = {
  encode(message: CLobbyTeamDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamName !== "") {
      writer.uint32(10).string(message.teamName);
    }
    if (message.teamTag !== "") {
      writer.uint32(26).string(message.teamTag);
    }
    if (message.teamId !== 0) {
      writer.uint32(32).uint32(message.teamId);
    }
    if (message.teamLogo !== "0") {
      writer.uint32(40).uint64(message.teamLogo);
    }
    if (message.teamBaseLogo !== "0") {
      writer.uint32(48).uint64(message.teamBaseLogo);
    }
    if (message.teamBannerLogo !== "0") {
      writer.uint32(56).uint64(message.teamBannerLogo);
    }
    if (message.teamComplete === true) {
      writer.uint32(64).bool(message.teamComplete);
    }
    if (message.rank !== 0) {
      writer.uint32(120).uint32(message.rank);
    }
    if (message.rankChange !== 0) {
      writer.uint32(128).sint32(message.rankChange);
    }
    if (message.isHomeTeam === true) {
      writer.uint32(136).bool(message.isHomeTeam);
    }
    if (message.isChallengeMatch === true) {
      writer.uint32(144).bool(message.isChallengeMatch);
    }
    if (message.challengeMatchTokenAccount !== "0") {
      writer.uint32(152).uint64(message.challengeMatchTokenAccount);
    }
    if (message.teamLogoUrl !== "") {
      writer.uint32(162).string(message.teamLogoUrl);
    }
    if (message.teamAbbreviation !== "") {
      writer.uint32(170).string(message.teamAbbreviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CLobbyTeamDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCLobbyTeamDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.teamName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.teamTag = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.teamLogo = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.teamBaseLogo = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.teamBannerLogo = longToString(reader.uint64() as Long);
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.teamComplete = reader.bool();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.rank = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.rankChange = reader.sint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.isHomeTeam = reader.bool();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.isChallengeMatch = reader.bool();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.challengeMatchTokenAccount = longToString(reader.uint64() as Long);
          continue;
        case 20:
          if (tag != 162) {
            break;
          }

          message.teamLogoUrl = reader.string();
          continue;
        case 21:
          if (tag != 170) {
            break;
          }

          message.teamAbbreviation = reader.string();
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

function createBaseCLobbyGuildDetails(): CLobbyGuildDetails {
  return {
    guildId: 0,
    guildPrimaryColor: 0,
    guildSecondaryColor: 0,
    guildPattern: 0,
    guildLogo: "0",
    guildPoints: 0,
    guildEvent: 0,
    guildFlags: 0,
    teamForGuild: 0,
    guildTag: "",
    guildWeeklyPercentile: 0,
  };
}

export const CLobbyGuildDetails = {
  encode(message: CLobbyGuildDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.guildPrimaryColor !== 0) {
      writer.uint32(16).uint32(message.guildPrimaryColor);
    }
    if (message.guildSecondaryColor !== 0) {
      writer.uint32(24).uint32(message.guildSecondaryColor);
    }
    if (message.guildPattern !== 0) {
      writer.uint32(32).uint32(message.guildPattern);
    }
    if (message.guildLogo !== "0") {
      writer.uint32(40).uint64(message.guildLogo);
    }
    if (message.guildPoints !== 0) {
      writer.uint32(48).uint32(message.guildPoints);
    }
    if (message.guildEvent !== 0) {
      writer.uint32(56).uint32(message.guildEvent);
    }
    if (message.guildFlags !== 0) {
      writer.uint32(64).uint32(message.guildFlags);
    }
    if (message.teamForGuild !== 0) {
      writer.uint32(72).int32(message.teamForGuild);
    }
    if (message.guildTag !== "") {
      writer.uint32(82).string(message.guildTag);
    }
    if (message.guildWeeklyPercentile !== 0) {
      writer.uint32(88).uint32(message.guildWeeklyPercentile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CLobbyGuildDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCLobbyGuildDetails();
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

          message.guildPrimaryColor = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.guildSecondaryColor = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.guildPattern = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.guildLogo = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.guildPoints = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.guildEvent = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.guildFlags = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.teamForGuild = reader.int32() as any;
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.guildTag = reader.string();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.guildWeeklyPercentile = reader.uint32();
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

function createBaseCLobbyTimedRewardDetails(): CLobbyTimedRewardDetails {
  return { itemDefIndex: 0, isSupplyCrate: false, isTimedDrop: false, accountId: 0, origin: 0 };
}

export const CLobbyTimedRewardDetails = {
  encode(message: CLobbyTimedRewardDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDefIndex !== 0) {
      writer.uint32(16).uint32(message.itemDefIndex);
    }
    if (message.isSupplyCrate === true) {
      writer.uint32(24).bool(message.isSupplyCrate);
    }
    if (message.isTimedDrop === true) {
      writer.uint32(32).bool(message.isTimedDrop);
    }
    if (message.accountId !== 0) {
      writer.uint32(40).uint32(message.accountId);
    }
    if (message.origin !== 0) {
      writer.uint32(48).uint32(message.origin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CLobbyTimedRewardDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCLobbyTimedRewardDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.itemDefIndex = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isSupplyCrate = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.isTimedDrop = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.origin = reader.uint32();
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

function createBaseCLobbyBroadcastChannelInfo(): CLobbyBroadcastChannelInfo {
  return { channelId: 0, countryCode: "", description: "", languageCode: "" };
}

export const CLobbyBroadcastChannelInfo = {
  encode(message: CLobbyBroadcastChannelInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== 0) {
      writer.uint32(8).uint32(message.channelId);
    }
    if (message.countryCode !== "") {
      writer.uint32(18).string(message.countryCode);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.languageCode !== "") {
      writer.uint32(34).string(message.languageCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CLobbyBroadcastChannelInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCLobbyBroadcastChannelInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.channelId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.countryCode = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.languageCode = reader.string();
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

function createBaseCLobbyGuildChallenge(): CLobbyGuildChallenge {
  return {
    guildId: 0,
    eventId: 0,
    challengeInstanceId: 0,
    challengeParameter: 0,
    challengeTimestamp: 0,
    challengePeriodSerial: 0,
    challengeProgressAtStart: 0,
    eligibleAccountIds: [],
  };
}

export const CLobbyGuildChallenge = {
  encode(message: CLobbyGuildChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    if (message.challengeInstanceId !== 0) {
      writer.uint32(24).uint32(message.challengeInstanceId);
    }
    if (message.challengeParameter !== 0) {
      writer.uint32(32).uint32(message.challengeParameter);
    }
    if (message.challengeTimestamp !== 0) {
      writer.uint32(40).uint32(message.challengeTimestamp);
    }
    if (message.challengePeriodSerial !== 0) {
      writer.uint32(48).uint32(message.challengePeriodSerial);
    }
    if (message.challengeProgressAtStart !== 0) {
      writer.uint32(56).uint32(message.challengeProgressAtStart);
    }
    writer.uint32(66).fork();
    for (const v of message.eligibleAccountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CLobbyGuildChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCLobbyGuildChallenge();
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

          message.challengeInstanceId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.challengeParameter = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.challengeTimestamp = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.challengePeriodSerial = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.challengeProgressAtStart = reader.uint32();
          continue;
        case 8:
          if (tag == 64) {
            message.eligibleAccountIds.push(reader.uint32());
            continue;
          }

          if (tag == 66) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.eligibleAccountIds.push(reader.uint32());
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

function createBaseCSODOTALobby(): CSODOTALobby {
  return {
    lobbyId: "0",
    allMembers: [],
    memberIndices: [],
    leftMemberIndices: [],
    freeMemberIndices: [],
    leaderId: "0",
    serverId: "0",
    gameMode: 0,
    pendingInvites: [],
    state: 0,
    connect: "",
    lobbyType: 0,
    allowCheats: false,
    fillWithBots: false,
    introMode: false,
    gameName: "",
    teamDetails: [],
    tutorialLesson: 0,
    tournamentId: 0,
    tournamentGameId: 0,
    serverRegion: 0,
    gameState: 0,
    numSpectators: 0,
    matchgroup: 0,
    cmPick: 0,
    matchId: "0",
    allowSpectating: false,
    botDifficultyRadiant: 0,
    timedRewardDetails: [],
    passKey: "",
    leagueid: 0,
    penaltyLevelRadiant: 0,
    penaltyLevelDire: 0,
    loadGameId: 0,
    seriesType: 0,
    radiantSeriesWins: 0,
    direSeriesWins: 0,
    lootGenerated: 0,
    lootAwarded: 0,
    allchat: false,
    dotaTvDelay: 0,
    customGameMode: "",
    customMapName: "",
    customDifficulty: 0,
    lan: false,
    broadcastChannelInfo: [],
    firstLeaverAccountid: 0,
    seriesId: 0,
    lowPriority: false,
    extraMessages: [],
    saveGame: undefined,
    firstBloodHappened: false,
    matchOutcome: 0,
    massDisconnect: false,
    customGameId: "0",
    customMinPlayers: 0,
    customMaxPlayers: 0,
    visibility: 0,
    customGameCrc: "0",
    customGameAutoCreatedLobby: false,
    customGameTimestamp: 0,
    previousSeriesMatches: [],
    previousMatchOverride: "0",
    gameStartTime: 0,
    pauseSetting: 0,
    weekendTourneyDivisionId: 0,
    weekendTourneySkillLevel: 0,
    weekendTourneyBracketRound: 0,
    botDifficultyDire: 0,
    botRadiant: "0",
    botDire: "0",
    eventProgressionEnabled: [],
    selectionPriorityRules: 0,
    seriesPreviousSelectionPriorityTeamId: 0,
    seriesCurrentSelectionPriorityTeamId: 0,
    seriesCurrentPriorityTeamChoice: 0,
    seriesCurrentNonPriorityTeamChoice: 0,
    seriesCurrentSelectionPriorityUsedCoinToss: false,
    currentPrimaryEvent: 0,
    emergencyDisabledHeroIds: [],
    customGamePrivateKey: "0",
    customGamePenalties: false,
    lanHostPingLocation: "",
    leagueNodeId: 0,
    matchDuration: 0,
    leaguePhase: 0,
    recordDetailedStats: false,
    experimentalGameplayEnabled: false,
    guildChallenges: [],
    guildDetails: [],
    lobbyEventPoints: [],
    requestedHeroIds: [],
    coachFriendRequests: [],
    isInSteamChina: false,
    withScenarioSave: false,
    lobbyCreationTime: 0,
    eventGameDefinition: "",
    extraStartupMessages: [],
  };
}

export const CSODOTALobby = {
  encode(message: CSODOTALobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lobbyId !== "0") {
      writer.uint32(8).uint64(message.lobbyId);
    }
    for (const v of message.allMembers) {
      CSODOTALobbyMember.encode(v!, writer.uint32(962).fork()).ldelim();
    }
    writer.uint32(970).fork();
    for (const v of message.memberIndices) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(978).fork();
    for (const v of message.leftMemberIndices) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(986).fork();
    for (const v of message.freeMemberIndices) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.leaderId !== "0") {
      writer.uint32(89).fixed64(message.leaderId);
    }
    if (message.serverId !== "0") {
      writer.uint32(49).fixed64(message.serverId);
    }
    if (message.gameMode !== 0) {
      writer.uint32(24).uint32(message.gameMode);
    }
    writer.uint32(82).fork();
    for (const v of message.pendingInvites) {
      writer.fixed64(v);
    }
    writer.ldelim();
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.connect !== "") {
      writer.uint32(42).string(message.connect);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(96).int32(message.lobbyType);
    }
    if (message.allowCheats === true) {
      writer.uint32(104).bool(message.allowCheats);
    }
    if (message.fillWithBots === true) {
      writer.uint32(112).bool(message.fillWithBots);
    }
    if (message.introMode === true) {
      writer.uint32(120).bool(message.introMode);
    }
    if (message.gameName !== "") {
      writer.uint32(130).string(message.gameName);
    }
    for (const v of message.teamDetails) {
      CLobbyTeamDetails.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    if (message.tutorialLesson !== 0) {
      writer.uint32(144).uint32(message.tutorialLesson);
    }
    if (message.tournamentId !== 0) {
      writer.uint32(152).uint32(message.tournamentId);
    }
    if (message.tournamentGameId !== 0) {
      writer.uint32(160).uint32(message.tournamentGameId);
    }
    if (message.serverRegion !== 0) {
      writer.uint32(168).uint32(message.serverRegion);
    }
    if (message.gameState !== 0) {
      writer.uint32(176).int32(message.gameState);
    }
    if (message.numSpectators !== 0) {
      writer.uint32(184).uint32(message.numSpectators);
    }
    if (message.matchgroup !== 0) {
      writer.uint32(200).uint32(message.matchgroup);
    }
    if (message.cmPick !== 0) {
      writer.uint32(224).int32(message.cmPick);
    }
    if (message.matchId !== "0") {
      writer.uint32(240).uint64(message.matchId);
    }
    if (message.allowSpectating === true) {
      writer.uint32(248).bool(message.allowSpectating);
    }
    if (message.botDifficultyRadiant !== 0) {
      writer.uint32(288).int32(message.botDifficultyRadiant);
    }
    for (const v of message.timedRewardDetails) {
      CLobbyTimedRewardDetails.encode(v!, writer.uint32(306).fork()).ldelim();
    }
    if (message.passKey !== "") {
      writer.uint32(314).string(message.passKey);
    }
    if (message.leagueid !== 0) {
      writer.uint32(336).uint32(message.leagueid);
    }
    if (message.penaltyLevelRadiant !== 0) {
      writer.uint32(344).uint32(message.penaltyLevelRadiant);
    }
    if (message.penaltyLevelDire !== 0) {
      writer.uint32(352).uint32(message.penaltyLevelDire);
    }
    if (message.loadGameId !== 0) {
      writer.uint32(360).uint32(message.loadGameId);
    }
    if (message.seriesType !== 0) {
      writer.uint32(368).uint32(message.seriesType);
    }
    if (message.radiantSeriesWins !== 0) {
      writer.uint32(376).uint32(message.radiantSeriesWins);
    }
    if (message.direSeriesWins !== 0) {
      writer.uint32(384).uint32(message.direSeriesWins);
    }
    if (message.lootGenerated !== 0) {
      writer.uint32(392).uint32(message.lootGenerated);
    }
    if (message.lootAwarded !== 0) {
      writer.uint32(400).uint32(message.lootAwarded);
    }
    if (message.allchat === true) {
      writer.uint32(408).bool(message.allchat);
    }
    if (message.dotaTvDelay !== 0) {
      writer.uint32(424).int32(message.dotaTvDelay);
    }
    if (message.customGameMode !== "") {
      writer.uint32(434).string(message.customGameMode);
    }
    if (message.customMapName !== "") {
      writer.uint32(442).string(message.customMapName);
    }
    if (message.customDifficulty !== 0) {
      writer.uint32(448).uint32(message.customDifficulty);
    }
    if (message.lan === true) {
      writer.uint32(456).bool(message.lan);
    }
    for (const v of message.broadcastChannelInfo) {
      CLobbyBroadcastChannelInfo.encode(v!, writer.uint32(466).fork()).ldelim();
    }
    if (message.firstLeaverAccountid !== 0) {
      writer.uint32(472).uint32(message.firstLeaverAccountid);
    }
    if (message.seriesId !== 0) {
      writer.uint32(480).uint32(message.seriesId);
    }
    if (message.lowPriority === true) {
      writer.uint32(488).bool(message.lowPriority);
    }
    for (const v of message.extraMessages) {
      CSODOTALobby_CExtraMsg.encode(v!, writer.uint32(498).fork()).ldelim();
    }
    if (message.saveGame !== undefined) {
      CDOTASaveGame.encode(message.saveGame, writer.uint32(506).fork()).ldelim();
    }
    if (message.firstBloodHappened === true) {
      writer.uint32(520).bool(message.firstBloodHappened);
    }
    if (message.matchOutcome !== 0) {
      writer.uint32(560).int32(message.matchOutcome);
    }
    if (message.massDisconnect === true) {
      writer.uint32(536).bool(message.massDisconnect);
    }
    if (message.customGameId !== "0") {
      writer.uint32(544).uint64(message.customGameId);
    }
    if (message.customMinPlayers !== 0) {
      writer.uint32(568).uint32(message.customMinPlayers);
    }
    if (message.customMaxPlayers !== 0) {
      writer.uint32(576).uint32(message.customMaxPlayers);
    }
    if (message.visibility !== 0) {
      writer.uint32(600).int32(message.visibility);
    }
    if (message.customGameCrc !== "0") {
      writer.uint32(609).fixed64(message.customGameCrc);
    }
    if (message.customGameAutoCreatedLobby === true) {
      writer.uint32(616).bool(message.customGameAutoCreatedLobby);
    }
    if (message.customGameTimestamp !== 0) {
      writer.uint32(645).fixed32(message.customGameTimestamp);
    }
    writer.uint32(650).fork();
    for (const v of message.previousSeriesMatches) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.previousMatchOverride !== "0") {
      writer.uint32(656).uint64(message.previousMatchOverride);
    }
    if (message.gameStartTime !== 0) {
      writer.uint32(696).uint32(message.gameStartTime);
    }
    if (message.pauseSetting !== 0) {
      writer.uint32(704).int32(message.pauseSetting);
    }
    if (message.weekendTourneyDivisionId !== 0) {
      writer.uint32(720).uint32(message.weekendTourneyDivisionId);
    }
    if (message.weekendTourneySkillLevel !== 0) {
      writer.uint32(728).uint32(message.weekendTourneySkillLevel);
    }
    if (message.weekendTourneyBracketRound !== 0) {
      writer.uint32(736).uint32(message.weekendTourneyBracketRound);
    }
    if (message.botDifficultyDire !== 0) {
      writer.uint32(744).int32(message.botDifficultyDire);
    }
    if (message.botRadiant !== "0") {
      writer.uint32(752).uint64(message.botRadiant);
    }
    if (message.botDire !== "0") {
      writer.uint32(760).uint64(message.botDire);
    }
    writer.uint32(770).fork();
    for (const v of message.eventProgressionEnabled) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.selectionPriorityRules !== 0) {
      writer.uint32(776).int32(message.selectionPriorityRules);
    }
    if (message.seriesPreviousSelectionPriorityTeamId !== 0) {
      writer.uint32(784).uint32(message.seriesPreviousSelectionPriorityTeamId);
    }
    if (message.seriesCurrentSelectionPriorityTeamId !== 0) {
      writer.uint32(792).uint32(message.seriesCurrentSelectionPriorityTeamId);
    }
    if (message.seriesCurrentPriorityTeamChoice !== 0) {
      writer.uint32(800).int32(message.seriesCurrentPriorityTeamChoice);
    }
    if (message.seriesCurrentNonPriorityTeamChoice !== 0) {
      writer.uint32(808).int32(message.seriesCurrentNonPriorityTeamChoice);
    }
    if (message.seriesCurrentSelectionPriorityUsedCoinToss === true) {
      writer.uint32(816).bool(message.seriesCurrentSelectionPriorityUsedCoinToss);
    }
    if (message.currentPrimaryEvent !== 0) {
      writer.uint32(824).int32(message.currentPrimaryEvent);
    }
    writer.uint32(842).fork();
    for (const v of message.emergencyDisabledHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.customGamePrivateKey !== "0") {
      writer.uint32(849).fixed64(message.customGamePrivateKey);
    }
    if (message.customGamePenalties === true) {
      writer.uint32(856).bool(message.customGamePenalties);
    }
    if (message.lanHostPingLocation !== "") {
      writer.uint32(874).string(message.lanHostPingLocation);
    }
    if (message.leagueNodeId !== 0) {
      writer.uint32(880).uint32(message.leagueNodeId);
    }
    if (message.matchDuration !== 0) {
      writer.uint32(888).uint32(message.matchDuration);
    }
    if (message.leaguePhase !== 0) {
      writer.uint32(904).uint32(message.leaguePhase);
    }
    if (message.recordDetailedStats === true) {
      writer.uint32(912).bool(message.recordDetailedStats);
    }
    if (message.experimentalGameplayEnabled === true) {
      writer.uint32(928).bool(message.experimentalGameplayEnabled);
    }
    for (const v of message.guildChallenges) {
      CLobbyGuildChallenge.encode(v!, writer.uint32(938).fork()).ldelim();
    }
    for (const v of message.guildDetails) {
      CLobbyGuildDetails.encode(v!, writer.uint32(946).fork()).ldelim();
    }
    for (const v of message.lobbyEventPoints) {
      CMsgLobbyEventPoints.encode(v!, writer.uint32(954).fork()).ldelim();
    }
    writer.uint32(994).fork();
    for (const v of message.requestedHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.coachFriendRequests) {
      CMsgLobbyCoachFriendRequest.encode(v!, writer.uint32(1002).fork()).ldelim();
    }
    if (message.isInSteamChina === true) {
      writer.uint32(1008).bool(message.isInSteamChina);
    }
    if (message.withScenarioSave === true) {
      writer.uint32(1016).bool(message.withScenarioSave);
    }
    if (message.lobbyCreationTime !== 0) {
      writer.uint32(1024).uint32(message.lobbyCreationTime);
    }
    if (message.eventGameDefinition !== "") {
      writer.uint32(1034).string(message.eventGameDefinition);
    }
    for (const v of message.extraStartupMessages) {
      CSODOTALobby_CExtraMsg.encode(v!, writer.uint32(1042).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTALobby {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTALobby();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.lobbyId = longToString(reader.uint64() as Long);
          continue;
        case 120:
          if (tag != 962) {
            break;
          }

          message.allMembers.push(CSODOTALobbyMember.decode(reader, reader.uint32()));
          continue;
        case 121:
          if (tag == 968) {
            message.memberIndices.push(reader.uint32());
            continue;
          }

          if (tag == 970) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.memberIndices.push(reader.uint32());
            }

            continue;
          }

          break;
        case 122:
          if (tag == 976) {
            message.leftMemberIndices.push(reader.uint32());
            continue;
          }

          if (tag == 978) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.leftMemberIndices.push(reader.uint32());
            }

            continue;
          }

          break;
        case 123:
          if (tag == 984) {
            message.freeMemberIndices.push(reader.uint32());
            continue;
          }

          if (tag == 986) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.freeMemberIndices.push(reader.uint32());
            }

            continue;
          }

          break;
        case 11:
          if (tag != 89) {
            break;
          }

          message.leaderId = longToString(reader.fixed64() as Long);
          continue;
        case 6:
          if (tag != 49) {
            break;
          }

          message.serverId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.gameMode = reader.uint32();
          continue;
        case 10:
          if (tag == 81) {
            message.pendingInvites.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 82) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pendingInvites.push(longToString(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 4:
          if (tag != 32) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.connect = reader.string();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.lobbyType = reader.int32() as any;
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.allowCheats = reader.bool();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.fillWithBots = reader.bool();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.introMode = reader.bool();
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.gameName = reader.string();
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.teamDetails.push(CLobbyTeamDetails.decode(reader, reader.uint32()));
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.tutorialLesson = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.tournamentId = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.tournamentGameId = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.serverRegion = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.gameState = reader.int32() as any;
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.numSpectators = reader.uint32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.matchgroup = reader.uint32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.cmPick = reader.int32() as any;
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.allowSpectating = reader.bool();
          continue;
        case 36:
          if (tag != 288) {
            break;
          }

          message.botDifficultyRadiant = reader.int32() as any;
          continue;
        case 38:
          if (tag != 306) {
            break;
          }

          message.timedRewardDetails.push(CLobbyTimedRewardDetails.decode(reader, reader.uint32()));
          continue;
        case 39:
          if (tag != 314) {
            break;
          }

          message.passKey = reader.string();
          continue;
        case 42:
          if (tag != 336) {
            break;
          }

          message.leagueid = reader.uint32();
          continue;
        case 43:
          if (tag != 344) {
            break;
          }

          message.penaltyLevelRadiant = reader.uint32();
          continue;
        case 44:
          if (tag != 352) {
            break;
          }

          message.penaltyLevelDire = reader.uint32();
          continue;
        case 45:
          if (tag != 360) {
            break;
          }

          message.loadGameId = reader.uint32();
          continue;
        case 46:
          if (tag != 368) {
            break;
          }

          message.seriesType = reader.uint32();
          continue;
        case 47:
          if (tag != 376) {
            break;
          }

          message.radiantSeriesWins = reader.uint32();
          continue;
        case 48:
          if (tag != 384) {
            break;
          }

          message.direSeriesWins = reader.uint32();
          continue;
        case 49:
          if (tag != 392) {
            break;
          }

          message.lootGenerated = reader.uint32();
          continue;
        case 50:
          if (tag != 400) {
            break;
          }

          message.lootAwarded = reader.uint32();
          continue;
        case 51:
          if (tag != 408) {
            break;
          }

          message.allchat = reader.bool();
          continue;
        case 53:
          if (tag != 424) {
            break;
          }

          message.dotaTvDelay = reader.int32() as any;
          continue;
        case 54:
          if (tag != 434) {
            break;
          }

          message.customGameMode = reader.string();
          continue;
        case 55:
          if (tag != 442) {
            break;
          }

          message.customMapName = reader.string();
          continue;
        case 56:
          if (tag != 448) {
            break;
          }

          message.customDifficulty = reader.uint32();
          continue;
        case 57:
          if (tag != 456) {
            break;
          }

          message.lan = reader.bool();
          continue;
        case 58:
          if (tag != 466) {
            break;
          }

          message.broadcastChannelInfo.push(CLobbyBroadcastChannelInfo.decode(reader, reader.uint32()));
          continue;
        case 59:
          if (tag != 472) {
            break;
          }

          message.firstLeaverAccountid = reader.uint32();
          continue;
        case 60:
          if (tag != 480) {
            break;
          }

          message.seriesId = reader.uint32();
          continue;
        case 61:
          if (tag != 488) {
            break;
          }

          message.lowPriority = reader.bool();
          continue;
        case 62:
          if (tag != 498) {
            break;
          }

          message.extraMessages.push(CSODOTALobby_CExtraMsg.decode(reader, reader.uint32()));
          continue;
        case 63:
          if (tag != 506) {
            break;
          }

          message.saveGame = CDOTASaveGame.decode(reader, reader.uint32());
          continue;
        case 65:
          if (tag != 520) {
            break;
          }

          message.firstBloodHappened = reader.bool();
          continue;
        case 70:
          if (tag != 560) {
            break;
          }

          message.matchOutcome = reader.int32() as any;
          continue;
        case 67:
          if (tag != 536) {
            break;
          }

          message.massDisconnect = reader.bool();
          continue;
        case 68:
          if (tag != 544) {
            break;
          }

          message.customGameId = longToString(reader.uint64() as Long);
          continue;
        case 71:
          if (tag != 568) {
            break;
          }

          message.customMinPlayers = reader.uint32();
          continue;
        case 72:
          if (tag != 576) {
            break;
          }

          message.customMaxPlayers = reader.uint32();
          continue;
        case 75:
          if (tag != 600) {
            break;
          }

          message.visibility = reader.int32() as any;
          continue;
        case 76:
          if (tag != 609) {
            break;
          }

          message.customGameCrc = longToString(reader.fixed64() as Long);
          continue;
        case 77:
          if (tag != 616) {
            break;
          }

          message.customGameAutoCreatedLobby = reader.bool();
          continue;
        case 80:
          if (tag != 645) {
            break;
          }

          message.customGameTimestamp = reader.fixed32();
          continue;
        case 81:
          if (tag == 648) {
            message.previousSeriesMatches.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 650) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.previousSeriesMatches.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 82:
          if (tag != 656) {
            break;
          }

          message.previousMatchOverride = longToString(reader.uint64() as Long);
          continue;
        case 87:
          if (tag != 696) {
            break;
          }

          message.gameStartTime = reader.uint32();
          continue;
        case 88:
          if (tag != 704) {
            break;
          }

          message.pauseSetting = reader.int32() as any;
          continue;
        case 90:
          if (tag != 720) {
            break;
          }

          message.weekendTourneyDivisionId = reader.uint32();
          continue;
        case 91:
          if (tag != 728) {
            break;
          }

          message.weekendTourneySkillLevel = reader.uint32();
          continue;
        case 92:
          if (tag != 736) {
            break;
          }

          message.weekendTourneyBracketRound = reader.uint32();
          continue;
        case 93:
          if (tag != 744) {
            break;
          }

          message.botDifficultyDire = reader.int32() as any;
          continue;
        case 94:
          if (tag != 752) {
            break;
          }

          message.botRadiant = longToString(reader.uint64() as Long);
          continue;
        case 95:
          if (tag != 760) {
            break;
          }

          message.botDire = longToString(reader.uint64() as Long);
          continue;
        case 96:
          if (tag == 768) {
            message.eventProgressionEnabled.push(reader.int32() as any);
            continue;
          }

          if (tag == 770) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.eventProgressionEnabled.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 97:
          if (tag != 776) {
            break;
          }

          message.selectionPriorityRules = reader.int32() as any;
          continue;
        case 98:
          if (tag != 784) {
            break;
          }

          message.seriesPreviousSelectionPriorityTeamId = reader.uint32();
          continue;
        case 99:
          if (tag != 792) {
            break;
          }

          message.seriesCurrentSelectionPriorityTeamId = reader.uint32();
          continue;
        case 100:
          if (tag != 800) {
            break;
          }

          message.seriesCurrentPriorityTeamChoice = reader.int32() as any;
          continue;
        case 101:
          if (tag != 808) {
            break;
          }

          message.seriesCurrentNonPriorityTeamChoice = reader.int32() as any;
          continue;
        case 102:
          if (tag != 816) {
            break;
          }

          message.seriesCurrentSelectionPriorityUsedCoinToss = reader.bool();
          continue;
        case 103:
          if (tag != 824) {
            break;
          }

          message.currentPrimaryEvent = reader.int32() as any;
          continue;
        case 105:
          if (tag == 840) {
            message.emergencyDisabledHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 842) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.emergencyDisabledHeroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 106:
          if (tag != 849) {
            break;
          }

          message.customGamePrivateKey = longToString(reader.fixed64() as Long);
          continue;
        case 107:
          if (tag != 856) {
            break;
          }

          message.customGamePenalties = reader.bool();
          continue;
        case 109:
          if (tag != 874) {
            break;
          }

          message.lanHostPingLocation = reader.string();
          continue;
        case 110:
          if (tag != 880) {
            break;
          }

          message.leagueNodeId = reader.uint32();
          continue;
        case 111:
          if (tag != 888) {
            break;
          }

          message.matchDuration = reader.uint32();
          continue;
        case 113:
          if (tag != 904) {
            break;
          }

          message.leaguePhase = reader.uint32();
          continue;
        case 114:
          if (tag != 912) {
            break;
          }

          message.recordDetailedStats = reader.bool();
          continue;
        case 116:
          if (tag != 928) {
            break;
          }

          message.experimentalGameplayEnabled = reader.bool();
          continue;
        case 117:
          if (tag != 938) {
            break;
          }

          message.guildChallenges.push(CLobbyGuildChallenge.decode(reader, reader.uint32()));
          continue;
        case 118:
          if (tag != 946) {
            break;
          }

          message.guildDetails.push(CLobbyGuildDetails.decode(reader, reader.uint32()));
          continue;
        case 119:
          if (tag != 954) {
            break;
          }

          message.lobbyEventPoints.push(CMsgLobbyEventPoints.decode(reader, reader.uint32()));
          continue;
        case 124:
          if (tag == 992) {
            message.requestedHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 994) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.requestedHeroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 125:
          if (tag != 1002) {
            break;
          }

          message.coachFriendRequests.push(CMsgLobbyCoachFriendRequest.decode(reader, reader.uint32()));
          continue;
        case 126:
          if (tag != 1008) {
            break;
          }

          message.isInSteamChina = reader.bool();
          continue;
        case 127:
          if (tag != 1016) {
            break;
          }

          message.withScenarioSave = reader.bool();
          continue;
        case 128:
          if (tag != 1024) {
            break;
          }

          message.lobbyCreationTime = reader.uint32();
          continue;
        case 129:
          if (tag != 1034) {
            break;
          }

          message.eventGameDefinition = reader.string();
          continue;
        case 130:
          if (tag != 1042) {
            break;
          }

          message.extraStartupMessages.push(CSODOTALobby_CExtraMsg.decode(reader, reader.uint32()));
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

function createBaseCSODOTALobby_CExtraMsg(): CSODOTALobby_CExtraMsg {
  return { id: 0, contents: Buffer.alloc(0) };
}

export const CSODOTALobby_CExtraMsg = {
  encode(message: CSODOTALobby_CExtraMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.contents.length !== 0) {
      writer.uint32(18).bytes(message.contents);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTALobby_CExtraMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTALobby_CExtraMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.contents = reader.bytes() as Buffer;
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

function createBaseCSODOTAServerLobby(): CSODOTAServerLobby {
  return { allMembers: [] };
}

export const CSODOTAServerLobby = {
  encode(message: CSODOTAServerLobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allMembers) {
      CSODOTAServerLobbyMember.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTAServerLobby {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTAServerLobby();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.allMembers.push(CSODOTAServerLobbyMember.decode(reader, reader.uint32()));
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

function createBaseCSODOTAStaticLobby(): CSODOTAStaticLobby {
  return { allMembers: [], isPlayerDraft: false };
}

export const CSODOTAStaticLobby = {
  encode(message: CSODOTAStaticLobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allMembers) {
      CSODOTAStaticLobbyMember.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.isPlayerDraft === true) {
      writer.uint32(16).bool(message.isPlayerDraft);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTAStaticLobby {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTAStaticLobby();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.allMembers.push(CSODOTAStaticLobbyMember.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isPlayerDraft = reader.bool();
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

function createBaseCSODOTAServerStaticLobby(): CSODOTAServerStaticLobby {
  return { allMembers: [] };
}

export const CSODOTAServerStaticLobby = {
  encode(message: CSODOTAServerStaticLobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allMembers) {
      CSODOTAServerStaticLobbyMember.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTAServerStaticLobby {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTAServerStaticLobby();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.allMembers.push(CSODOTAServerStaticLobbyMember.decode(reader, reader.uint32()));
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

function createBaseCMsgAdditionalLobbyStartupAccountData(): CMsgAdditionalLobbyStartupAccountData {
  return { accountId: 0, plusData: undefined, unlockedChatWheelMessageRanges: [], unlockedPingWheelMessageRanges: [] };
}

export const CMsgAdditionalLobbyStartupAccountData = {
  encode(message: CMsgAdditionalLobbyStartupAccountData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.plusData !== undefined) {
      CMsgLobbyPlayerPlusSubscriptionData.encode(message.plusData, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.unlockedChatWheelMessageRanges) {
      CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.unlockedPingWheelMessageRanges) {
      CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAdditionalLobbyStartupAccountData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAdditionalLobbyStartupAccountData();
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
          if (tag != 18) {
            break;
          }

          message.plusData = CMsgLobbyPlayerPlusSubscriptionData.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.unlockedChatWheelMessageRanges.push(
            CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.unlockedPingWheelMessageRanges.push(
            CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange.decode(reader, reader.uint32()),
          );
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

function createBaseCMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange(): CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange {
  return { messageIdStart: 0, messageIdEnd: 0 };
}

export const CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange = {
  encode(
    message: CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.messageIdStart !== 0) {
      writer.uint32(8).uint32(message.messageIdStart);
    }
    if (message.messageIdEnd !== 0) {
      writer.uint32(16).uint32(message.messageIdEnd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.messageIdStart = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.messageIdEnd = reader.uint32();
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

function createBaseCMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange(): CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange {
  return { messageIdStart: 0, messageIdEnd: 0 };
}

export const CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange = {
  encode(
    message: CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.messageIdStart !== 0) {
      writer.uint32(8).uint32(message.messageIdStart);
    }
    if (message.messageIdEnd !== 0) {
      writer.uint32(16).uint32(message.messageIdEnd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.messageIdStart = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.messageIdEnd = reader.uint32();
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

function createBaseCMsgLobbyInitializationComplete(): CMsgLobbyInitializationComplete {
  return {};
}

export const CMsgLobbyInitializationComplete = {
  encode(_: CMsgLobbyInitializationComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyInitializationComplete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyInitializationComplete();
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

function createBaseCMsgLobbyPlaytestDetails(): CMsgLobbyPlaytestDetails {
  return { json: "" };
}

export const CMsgLobbyPlaytestDetails = {
  encode(message: CMsgLobbyPlaytestDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.json !== "") {
      writer.uint32(10).string(message.json);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyPlaytestDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyPlaytestDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.json = reader.string();
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

function createBaseCMsgLocalServerGuildData(): CMsgLocalServerGuildData {
  return {
    guildId: 0,
    eventId: 0,
    guildPoints: 0,
    guildLogo: "0",
    guildPrimaryColor: 0,
    guildSecondaryColor: 0,
    guildPattern: 0,
    guildFlags: 0,
    guildWeeklyPercentile: 0,
  };
}

export const CMsgLocalServerGuildData = {
  encode(message: CMsgLocalServerGuildData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    if (message.guildPoints !== 0) {
      writer.uint32(24).uint32(message.guildPoints);
    }
    if (message.guildLogo !== "0") {
      writer.uint32(32).uint64(message.guildLogo);
    }
    if (message.guildPrimaryColor !== 0) {
      writer.uint32(40).uint32(message.guildPrimaryColor);
    }
    if (message.guildSecondaryColor !== 0) {
      writer.uint32(48).uint32(message.guildSecondaryColor);
    }
    if (message.guildPattern !== 0) {
      writer.uint32(56).uint32(message.guildPattern);
    }
    if (message.guildFlags !== 0) {
      writer.uint32(64).uint32(message.guildFlags);
    }
    if (message.guildWeeklyPercentile !== 0) {
      writer.uint32(72).uint32(message.guildWeeklyPercentile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLocalServerGuildData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLocalServerGuildData();
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

          message.guildPoints = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.guildLogo = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.guildPrimaryColor = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.guildSecondaryColor = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.guildPattern = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.guildFlags = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.guildWeeklyPercentile = reader.uint32();
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

function createBaseCMsgLocalServerFakeLobbyData(): CMsgLocalServerFakeLobbyData {
  return {
    accountId: 0,
    eventPoints: [],
    isPlusSubscriber: false,
    primaryEventId: 0,
    favoriteTeam: 0,
    favoriteTeamQuality: 0,
    guildInfo: undefined,
    teleportFxLevel: 0,
    additionalData: undefined,
  };
}

export const CMsgLocalServerFakeLobbyData = {
  encode(message: CMsgLocalServerFakeLobbyData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    for (const v of message.eventPoints) {
      CMsgLobbyEventPoints.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.isPlusSubscriber === true) {
      writer.uint32(24).bool(message.isPlusSubscriber);
    }
    if (message.primaryEventId !== 0) {
      writer.uint32(32).uint32(message.primaryEventId);
    }
    if (message.favoriteTeam !== 0) {
      writer.uint32(40).uint32(message.favoriteTeam);
    }
    if (message.favoriteTeamQuality !== 0) {
      writer.uint32(48).uint32(message.favoriteTeamQuality);
    }
    if (message.guildInfo !== undefined) {
      CMsgLocalServerGuildData.encode(message.guildInfo, writer.uint32(58).fork()).ldelim();
    }
    if (message.teleportFxLevel !== 0) {
      writer.uint32(64).uint32(message.teleportFxLevel);
    }
    if (message.additionalData !== undefined) {
      CMsgAdditionalLobbyStartupAccountData.encode(message.additionalData, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLocalServerFakeLobbyData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLocalServerFakeLobbyData();
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
          if (tag != 18) {
            break;
          }

          message.eventPoints.push(CMsgLobbyEventPoints.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isPlusSubscriber = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.primaryEventId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.favoriteTeam = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.favoriteTeamQuality = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.guildInfo = CMsgLocalServerGuildData.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.teleportFxLevel = reader.uint32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.additionalData = CMsgAdditionalLobbyStartupAccountData.decode(reader, reader.uint32());
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
