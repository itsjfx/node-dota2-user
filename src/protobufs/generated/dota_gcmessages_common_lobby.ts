/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  CDOTASaveGame,
  CMsgPendingEventAward,
  DOTABotDifficulty,
  dOTABotDifficultyFromJSON,
  dOTABotDifficultyToJSON,
  dotaCmPick,
  dotaCmPickFromJSON,
  dotaCmPickToJSON,
  DOTAGameState,
  dOTAGameStateFromJSON,
  dOTAGameStateToJSON,
  dotaGcTeam,
  dotaGcTeamFromJSON,
  dotaGcTeamToJSON,
  DOTALeaverStatusT,
  dOTALeaverStatusTFromJSON,
  dOTALeaverStatusTToJSON,
  DOTALobbyVisibility,
  dOTALobbyVisibilityFromJSON,
  dOTALobbyVisibilityToJSON,
  DOTASelectionPriorityChoice,
  dOTASelectionPriorityChoiceFromJSON,
  dOTASelectionPriorityChoiceToJSON,
  DOTASelectionPriorityRules,
  dOTASelectionPriorityRulesFromJSON,
  dOTASelectionPriorityRulesToJSON,
  EDOTAMMRBoostType,
  eDOTAMMRBoostTypeFromJSON,
  eDOTAMMRBoostTypeToJSON,
  EEvent,
  eEventFromJSON,
  eEventToJSON,
  EMatchOutcome,
  eMatchOutcomeFromJSON,
  eMatchOutcomeToJSON,
  MatchType,
  matchTypeFromJSON,
  matchTypeToJSON,
} from "./dota_shared_enums";

export enum ELobbyMemberCoachRequestState {
  k_eLobbyMemberCoachRequestState_None = 0,
  k_eLobbyMemberCoachRequestState_Accepted = 1,
  k_eLobbyMemberCoachRequestState_Rejected = 2,
}

export function eLobbyMemberCoachRequestStateFromJSON(object: any): ELobbyMemberCoachRequestState {
  switch (object) {
    case 0:
    case "k_eLobbyMemberCoachRequestState_None":
      return ELobbyMemberCoachRequestState.k_eLobbyMemberCoachRequestState_None;
    case 1:
    case "k_eLobbyMemberCoachRequestState_Accepted":
      return ELobbyMemberCoachRequestState.k_eLobbyMemberCoachRequestState_Accepted;
    case 2:
    case "k_eLobbyMemberCoachRequestState_Rejected":
      return ELobbyMemberCoachRequestState.k_eLobbyMemberCoachRequestState_Rejected;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum ELobbyMemberCoachRequestState",
      );
  }
}

export function eLobbyMemberCoachRequestStateToJSON(object: ELobbyMemberCoachRequestState): string {
  switch (object) {
    case ELobbyMemberCoachRequestState.k_eLobbyMemberCoachRequestState_None:
      return "k_eLobbyMemberCoachRequestState_None";
    case ELobbyMemberCoachRequestState.k_eLobbyMemberCoachRequestState_Accepted:
      return "k_eLobbyMemberCoachRequestState_Accepted";
    case ELobbyMemberCoachRequestState.k_eLobbyMemberCoachRequestState_Rejected:
      return "k_eLobbyMemberCoachRequestState_Rejected";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum ELobbyMemberCoachRequestState",
      );
  }
}

export enum LobbyDotaTVDelay {
  LobbyDotaTV_10 = 0,
  LobbyDotaTV_120 = 1,
  LobbyDotaTV_300 = 2,
  LobbyDotaTV_900 = 3,
}

export function lobbyDotaTVDelayFromJSON(object: any): LobbyDotaTVDelay {
  switch (object) {
    case 0:
    case "LobbyDotaTV_10":
      return LobbyDotaTVDelay.LobbyDotaTV_10;
    case 1:
    case "LobbyDotaTV_120":
      return LobbyDotaTVDelay.LobbyDotaTV_120;
    case 2:
    case "LobbyDotaTV_300":
      return LobbyDotaTVDelay.LobbyDotaTV_300;
    case 3:
    case "LobbyDotaTV_900":
      return LobbyDotaTVDelay.LobbyDotaTV_900;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum LobbyDotaTVDelay");
  }
}

export function lobbyDotaTVDelayToJSON(object: LobbyDotaTVDelay): string {
  switch (object) {
    case LobbyDotaTVDelay.LobbyDotaTV_10:
      return "LobbyDotaTV_10";
    case LobbyDotaTVDelay.LobbyDotaTV_120:
      return "LobbyDotaTV_120";
    case LobbyDotaTVDelay.LobbyDotaTV_300:
      return "LobbyDotaTV_300";
    case LobbyDotaTVDelay.LobbyDotaTV_900:
      return "LobbyDotaTV_900";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum LobbyDotaTVDelay");
  }
}

export enum LobbyDotaPauseSetting {
  LobbyDotaPauseSetting_Unlimited = 0,
  LobbyDotaPauseSetting_Limited = 1,
  LobbyDotaPauseSetting_Disabled = 2,
}

export function lobbyDotaPauseSettingFromJSON(object: any): LobbyDotaPauseSetting {
  switch (object) {
    case 0:
    case "LobbyDotaPauseSetting_Unlimited":
      return LobbyDotaPauseSetting.LobbyDotaPauseSetting_Unlimited;
    case 1:
    case "LobbyDotaPauseSetting_Limited":
      return LobbyDotaPauseSetting.LobbyDotaPauseSetting_Limited;
    case 2:
    case "LobbyDotaPauseSetting_Disabled":
      return LobbyDotaPauseSetting.LobbyDotaPauseSetting_Disabled;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum LobbyDotaPauseSetting");
  }
}

export function lobbyDotaPauseSettingToJSON(object: LobbyDotaPauseSetting): string {
  switch (object) {
    case LobbyDotaPauseSetting.LobbyDotaPauseSetting_Unlimited:
      return "LobbyDotaPauseSetting_Unlimited";
    case LobbyDotaPauseSetting.LobbyDotaPauseSetting_Limited:
      return "LobbyDotaPauseSetting_Limited";
    case LobbyDotaPauseSetting.LobbyDotaPauseSetting_Disabled:
      return "LobbyDotaPauseSetting_Disabled";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum LobbyDotaPauseSetting");
  }
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

export function cSODOTALobby_StateFromJSON(object: any): CSODOTALobby_State {
  switch (object) {
    case 0:
    case "UI":
      return CSODOTALobby_State.UI;
    case 4:
    case "READYUP":
      return CSODOTALobby_State.READYUP;
    case 1:
    case "SERVERSETUP":
      return CSODOTALobby_State.SERVERSETUP;
    case 2:
    case "RUN":
      return CSODOTALobby_State.RUN;
    case 3:
    case "POSTGAME":
      return CSODOTALobby_State.POSTGAME;
    case 5:
    case "NOTREADY":
      return CSODOTALobby_State.NOTREADY;
    case 6:
    case "SERVERASSIGN":
      return CSODOTALobby_State.SERVERASSIGN;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CSODOTALobby_State");
  }
}

export function cSODOTALobby_StateToJSON(object: CSODOTALobby_State): string {
  switch (object) {
    case CSODOTALobby_State.UI:
      return "UI";
    case CSODOTALobby_State.READYUP:
      return "READYUP";
    case CSODOTALobby_State.SERVERSETUP:
      return "SERVERSETUP";
    case CSODOTALobby_State.RUN:
      return "RUN";
    case CSODOTALobby_State.POSTGAME:
      return "POSTGAME";
    case CSODOTALobby_State.NOTREADY:
      return "NOTREADY";
    case CSODOTALobby_State.SERVERASSIGN:
      return "SERVERASSIGN";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CSODOTALobby_State");
  }
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

export function cSODOTALobby_LobbyTypeFromJSON(object: any): CSODOTALobby_LobbyType {
  switch (object) {
    case -1:
    case "INVALID":
      return CSODOTALobby_LobbyType.INVALID;
    case 0:
    case "CASUAL_MATCH":
      return CSODOTALobby_LobbyType.CASUAL_MATCH;
    case 1:
    case "PRACTICE":
      return CSODOTALobby_LobbyType.PRACTICE;
    case 4:
    case "COOP_BOT_MATCH":
      return CSODOTALobby_LobbyType.COOP_BOT_MATCH;
    case 7:
    case "COMPETITIVE_MATCH":
      return CSODOTALobby_LobbyType.COMPETITIVE_MATCH;
    case 9:
    case "WEEKEND_TOURNEY":
      return CSODOTALobby_LobbyType.WEEKEND_TOURNEY;
    case 10:
    case "LOCAL_BOT_MATCH":
      return CSODOTALobby_LobbyType.LOCAL_BOT_MATCH;
    case 11:
    case "SPECTATOR":
      return CSODOTALobby_LobbyType.SPECTATOR;
    case 12:
    case "EVENT_MATCH":
      return CSODOTALobby_LobbyType.EVENT_MATCH;
    case 14:
    case "NEW_PLAYER_POOL":
      return CSODOTALobby_LobbyType.NEW_PLAYER_POOL;
    case 15:
    case "FEATURED_GAMEMODE":
      return CSODOTALobby_LobbyType.FEATURED_GAMEMODE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CSODOTALobby_LobbyType");
  }
}

export function cSODOTALobby_LobbyTypeToJSON(object: CSODOTALobby_LobbyType): string {
  switch (object) {
    case CSODOTALobby_LobbyType.INVALID:
      return "INVALID";
    case CSODOTALobby_LobbyType.CASUAL_MATCH:
      return "CASUAL_MATCH";
    case CSODOTALobby_LobbyType.PRACTICE:
      return "PRACTICE";
    case CSODOTALobby_LobbyType.COOP_BOT_MATCH:
      return "COOP_BOT_MATCH";
    case CSODOTALobby_LobbyType.COMPETITIVE_MATCH:
      return "COMPETITIVE_MATCH";
    case CSODOTALobby_LobbyType.WEEKEND_TOURNEY:
      return "WEEKEND_TOURNEY";
    case CSODOTALobby_LobbyType.LOCAL_BOT_MATCH:
      return "LOCAL_BOT_MATCH";
    case CSODOTALobby_LobbyType.SPECTATOR:
      return "SPECTATOR";
    case CSODOTALobby_LobbyType.EVENT_MATCH:
      return "EVENT_MATCH";
    case CSODOTALobby_LobbyType.NEW_PLAYER_POOL:
      return "NEW_PLAYER_POOL";
    case CSODOTALobby_LobbyType.FEATURED_GAMEMODE:
      return "FEATURED_GAMEMODE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CSODOTALobby_LobbyType");
  }
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

  fromJSON(object: any): CMsgLobbyCoachFriendRequest {
    return {
      coachAccountId: isSet(object.coachAccountId) ? Number(object.coachAccountId) : 0,
      playerAccountId: isSet(object.playerAccountId) ? Number(object.playerAccountId) : 0,
      requestState: isSet(object.requestState) ? eLobbyMemberCoachRequestStateFromJSON(object.requestState) : 0,
    };
  },

  toJSON(message: CMsgLobbyCoachFriendRequest): unknown {
    const obj: any = {};
    message.coachAccountId !== undefined && (obj.coachAccountId = Math.round(message.coachAccountId));
    message.playerAccountId !== undefined && (obj.playerAccountId = Math.round(message.playerAccountId));
    message.requestState !== undefined &&
      (obj.requestState = eLobbyMemberCoachRequestStateToJSON(message.requestState));
    return obj;
  },

  create(base?: DeepPartial<CMsgLobbyCoachFriendRequest>): CMsgLobbyCoachFriendRequest {
    return CMsgLobbyCoachFriendRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgLobbyCoachFriendRequest>): CMsgLobbyCoachFriendRequest {
    const message = createBaseCMsgLobbyCoachFriendRequest();
    message.coachAccountId = object.coachAccountId ?? 0;
    message.playerAccountId = object.playerAccountId ?? 0;
    message.requestState = object.requestState ?? 0;
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

  fromJSON(object: any): CMsgLobbyPlayerPlusSubscriptionData {
    return {
      heroBadges: Array.isArray(object?.heroBadges)
        ? object.heroBadges.map((e: any) => CMsgLobbyPlayerPlusSubscriptionData_HeroBadge.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgLobbyPlayerPlusSubscriptionData): unknown {
    const obj: any = {};
    if (message.heroBadges) {
      obj.heroBadges = message.heroBadges.map((e) =>
        e ? CMsgLobbyPlayerPlusSubscriptionData_HeroBadge.toJSON(e) : undefined
      );
    } else {
      obj.heroBadges = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgLobbyPlayerPlusSubscriptionData>): CMsgLobbyPlayerPlusSubscriptionData {
    return CMsgLobbyPlayerPlusSubscriptionData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgLobbyPlayerPlusSubscriptionData>): CMsgLobbyPlayerPlusSubscriptionData {
    const message = createBaseCMsgLobbyPlayerPlusSubscriptionData();
    message.heroBadges = object.heroBadges?.map((e) => CMsgLobbyPlayerPlusSubscriptionData_HeroBadge.fromPartial(e)) ||
      [];
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

  fromJSON(object: any): CMsgLobbyPlayerPlusSubscriptionData_HeroBadge {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      heroBadgeXp: isSet(object.heroBadgeXp) ? Number(object.heroBadgeXp) : 0,
    };
  },

  toJSON(message: CMsgLobbyPlayerPlusSubscriptionData_HeroBadge): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.heroBadgeXp !== undefined && (obj.heroBadgeXp = Math.round(message.heroBadgeXp));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgLobbyPlayerPlusSubscriptionData_HeroBadge>,
  ): CMsgLobbyPlayerPlusSubscriptionData_HeroBadge {
    return CMsgLobbyPlayerPlusSubscriptionData_HeroBadge.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgLobbyPlayerPlusSubscriptionData_HeroBadge>,
  ): CMsgLobbyPlayerPlusSubscriptionData_HeroBadge {
    const message = createBaseCMsgLobbyPlayerPlusSubscriptionData_HeroBadge();
    message.heroId = object.heroId ?? 0;
    message.heroBadgeXp = object.heroBadgeXp ?? 0;
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

  fromJSON(object: any): CMsgLobbyEventPoints {
    return {
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      accountPoints: Array.isArray(object?.accountPoints)
        ? object.accountPoints.map((e: any) => CMsgLobbyEventPoints_AccountPoints.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgLobbyEventPoints): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    if (message.accountPoints) {
      obj.accountPoints = message.accountPoints.map((e) =>
        e ? CMsgLobbyEventPoints_AccountPoints.toJSON(e) : undefined
      );
    } else {
      obj.accountPoints = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgLobbyEventPoints>): CMsgLobbyEventPoints {
    return CMsgLobbyEventPoints.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgLobbyEventPoints>): CMsgLobbyEventPoints {
    const message = createBaseCMsgLobbyEventPoints();
    message.eventId = object.eventId ?? 0;
    message.accountPoints = object.accountPoints?.map((e) => CMsgLobbyEventPoints_AccountPoints.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgLobbyEventPoints_PeriodicResourceData {
    return {
      periodicResourceId: isSet(object.periodicResourceId) ? Number(object.periodicResourceId) : 0,
      remaining: isSet(object.remaining) ? Number(object.remaining) : 0,
      max: isSet(object.max) ? Number(object.max) : 0,
    };
  },

  toJSON(message: CMsgLobbyEventPoints_PeriodicResourceData): unknown {
    const obj: any = {};
    message.periodicResourceId !== undefined && (obj.periodicResourceId = Math.round(message.periodicResourceId));
    message.remaining !== undefined && (obj.remaining = Math.round(message.remaining));
    message.max !== undefined && (obj.max = Math.round(message.max));
    return obj;
  },

  create(base?: DeepPartial<CMsgLobbyEventPoints_PeriodicResourceData>): CMsgLobbyEventPoints_PeriodicResourceData {
    return CMsgLobbyEventPoints_PeriodicResourceData.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgLobbyEventPoints_PeriodicResourceData>,
  ): CMsgLobbyEventPoints_PeriodicResourceData {
    const message = createBaseCMsgLobbyEventPoints_PeriodicResourceData();
    message.periodicResourceId = object.periodicResourceId ?? 0;
    message.remaining = object.remaining ?? 0;
    message.max = object.max ?? 0;
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

  fromJSON(object: any): CMsgLobbyEventPoints_NetworkedEventAction {
    return {
      actionId: isSet(object.actionId) ? Number(object.actionId) : 0,
      timesGranted: isSet(object.timesGranted) ? Number(object.timesGranted) : 0,
    };
  },

  toJSON(message: CMsgLobbyEventPoints_NetworkedEventAction): unknown {
    const obj: any = {};
    message.actionId !== undefined && (obj.actionId = Math.round(message.actionId));
    message.timesGranted !== undefined && (obj.timesGranted = Math.round(message.timesGranted));
    return obj;
  },

  create(base?: DeepPartial<CMsgLobbyEventPoints_NetworkedEventAction>): CMsgLobbyEventPoints_NetworkedEventAction {
    return CMsgLobbyEventPoints_NetworkedEventAction.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgLobbyEventPoints_NetworkedEventAction>,
  ): CMsgLobbyEventPoints_NetworkedEventAction {
    const message = createBaseCMsgLobbyEventPoints_NetworkedEventAction();
    message.actionId = object.actionId ?? 0;
    message.timesGranted = object.timesGranted ?? 0;
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

  fromJSON(object: any): CMsgLobbyEventPoints_AccountPoints {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      normalPoints: isSet(object.normalPoints) ? Number(object.normalPoints) : 0,
      premiumPoints: isSet(object.premiumPoints) ? Number(object.premiumPoints) : 0,
      owned: isSet(object.owned) ? Boolean(object.owned) : false,
      activeEffectsMask: isSet(object.activeEffectsMask) ? String(object.activeEffectsMask) : "0",
      wagerStreak: isSet(object.wagerStreak) ? Number(object.wagerStreak) : 0,
      eventGameCustomActions: Array.isArray(object?.eventGameCustomActions)
        ? object.eventGameCustomActions.map((e: any) => CMsgLobbyEventPoints_NetworkedEventAction.fromJSON(e))
        : [],
      tipAmountIndex: isSet(object.tipAmountIndex) ? Number(object.tipAmountIndex) : 0,
      activeEventSeasonId: isSet(object.activeEventSeasonId) ? Number(object.activeEventSeasonId) : 0,
      teleportFxLevel: isSet(object.teleportFxLevel) ? Number(object.teleportFxLevel) : 0,
      networkedEventActions: Array.isArray(object?.networkedEventActions)
        ? object.networkedEventActions.map((e: any) => CMsgLobbyEventPoints_NetworkedEventAction.fromJSON(e))
        : [],
      periodicResources: Array.isArray(object?.periodicResources)
        ? object.periodicResources.map((e: any) => CMsgLobbyEventPoints_PeriodicResourceData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgLobbyEventPoints_AccountPoints): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.normalPoints !== undefined && (obj.normalPoints = Math.round(message.normalPoints));
    message.premiumPoints !== undefined && (obj.premiumPoints = Math.round(message.premiumPoints));
    message.owned !== undefined && (obj.owned = message.owned);
    message.activeEffectsMask !== undefined && (obj.activeEffectsMask = message.activeEffectsMask);
    message.wagerStreak !== undefined && (obj.wagerStreak = Math.round(message.wagerStreak));
    if (message.eventGameCustomActions) {
      obj.eventGameCustomActions = message.eventGameCustomActions.map((e) =>
        e ? CMsgLobbyEventPoints_NetworkedEventAction.toJSON(e) : undefined
      );
    } else {
      obj.eventGameCustomActions = [];
    }
    message.tipAmountIndex !== undefined && (obj.tipAmountIndex = Math.round(message.tipAmountIndex));
    message.activeEventSeasonId !== undefined && (obj.activeEventSeasonId = Math.round(message.activeEventSeasonId));
    message.teleportFxLevel !== undefined && (obj.teleportFxLevel = Math.round(message.teleportFxLevel));
    if (message.networkedEventActions) {
      obj.networkedEventActions = message.networkedEventActions.map((e) =>
        e ? CMsgLobbyEventPoints_NetworkedEventAction.toJSON(e) : undefined
      );
    } else {
      obj.networkedEventActions = [];
    }
    if (message.periodicResources) {
      obj.periodicResources = message.periodicResources.map((e) =>
        e ? CMsgLobbyEventPoints_PeriodicResourceData.toJSON(e) : undefined
      );
    } else {
      obj.periodicResources = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgLobbyEventPoints_AccountPoints>): CMsgLobbyEventPoints_AccountPoints {
    return CMsgLobbyEventPoints_AccountPoints.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgLobbyEventPoints_AccountPoints>): CMsgLobbyEventPoints_AccountPoints {
    const message = createBaseCMsgLobbyEventPoints_AccountPoints();
    message.accountId = object.accountId ?? 0;
    message.normalPoints = object.normalPoints ?? 0;
    message.premiumPoints = object.premiumPoints ?? 0;
    message.owned = object.owned ?? false;
    message.activeEffectsMask = object.activeEffectsMask ?? "0";
    message.wagerStreak = object.wagerStreak ?? 0;
    message.eventGameCustomActions =
      object.eventGameCustomActions?.map((e) => CMsgLobbyEventPoints_NetworkedEventAction.fromPartial(e)) || [];
    message.tipAmountIndex = object.tipAmountIndex ?? 0;
    message.activeEventSeasonId = object.activeEventSeasonId ?? 0;
    message.teleportFxLevel = object.teleportFxLevel ?? 0;
    message.networkedEventActions =
      object.networkedEventActions?.map((e) => CMsgLobbyEventPoints_NetworkedEventAction.fromPartial(e)) || [];
    message.periodicResources =
      object.periodicResources?.map((e) => CMsgLobbyEventPoints_PeriodicResourceData.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgLobbyEventGameData {
    return {
      gameSeed: isSet(object.gameSeed) ? Number(object.gameSeed) : 0,
      eventWindowStartTime: isSet(object.eventWindowStartTime) ? Number(object.eventWindowStartTime) : 0,
    };
  },

  toJSON(message: CMsgLobbyEventGameData): unknown {
    const obj: any = {};
    message.gameSeed !== undefined && (obj.gameSeed = Math.round(message.gameSeed));
    message.eventWindowStartTime !== undefined && (obj.eventWindowStartTime = Math.round(message.eventWindowStartTime));
    return obj;
  },

  create(base?: DeepPartial<CMsgLobbyEventGameData>): CMsgLobbyEventGameData {
    return CMsgLobbyEventGameData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgLobbyEventGameData>): CMsgLobbyEventGameData {
    const message = createBaseCMsgLobbyEventGameData();
    message.gameSeed = object.gameSeed ?? 0;
    message.eventWindowStartTime = object.eventWindowStartTime ?? 0;
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

  fromJSON(object: any): CSODOTALobbyInvite {
    return {
      groupId: isSet(object.groupId) ? String(object.groupId) : "0",
      senderId: isSet(object.senderId) ? String(object.senderId) : "0",
      senderName: isSet(object.senderName) ? String(object.senderName) : "",
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => CSODOTALobbyInvite_LobbyMember.fromJSON(e))
        : [],
      customGameId: isSet(object.customGameId) ? String(object.customGameId) : "0",
      inviteGid: isSet(object.inviteGid) ? String(object.inviteGid) : "0",
      customGameCrc: isSet(object.customGameCrc) ? String(object.customGameCrc) : "0",
      customGameTimestamp: isSet(object.customGameTimestamp) ? Number(object.customGameTimestamp) : 0,
    };
  },

  toJSON(message: CSODOTALobbyInvite): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.senderId !== undefined && (obj.senderId = message.senderId);
    message.senderName !== undefined && (obj.senderName = message.senderName);
    if (message.members) {
      obj.members = message.members.map((e) => e ? CSODOTALobbyInvite_LobbyMember.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.customGameId !== undefined && (obj.customGameId = message.customGameId);
    message.inviteGid !== undefined && (obj.inviteGid = message.inviteGid);
    message.customGameCrc !== undefined && (obj.customGameCrc = message.customGameCrc);
    message.customGameTimestamp !== undefined && (obj.customGameTimestamp = Math.round(message.customGameTimestamp));
    return obj;
  },

  create(base?: DeepPartial<CSODOTALobbyInvite>): CSODOTALobbyInvite {
    return CSODOTALobbyInvite.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSODOTALobbyInvite>): CSODOTALobbyInvite {
    const message = createBaseCSODOTALobbyInvite();
    message.groupId = object.groupId ?? "0";
    message.senderId = object.senderId ?? "0";
    message.senderName = object.senderName ?? "";
    message.members = object.members?.map((e) => CSODOTALobbyInvite_LobbyMember.fromPartial(e)) || [];
    message.customGameId = object.customGameId ?? "0";
    message.inviteGid = object.inviteGid ?? "0";
    message.customGameCrc = object.customGameCrc ?? "0";
    message.customGameTimestamp = object.customGameTimestamp ?? 0;
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

  fromJSON(object: any): CSODOTALobbyInvite_LobbyMember {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
    };
  },

  toJSON(message: CSODOTALobbyInvite_LobbyMember): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.steamId !== undefined && (obj.steamId = message.steamId);
    return obj;
  },

  create(base?: DeepPartial<CSODOTALobbyInvite_LobbyMember>): CSODOTALobbyInvite_LobbyMember {
    return CSODOTALobbyInvite_LobbyMember.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSODOTALobbyInvite_LobbyMember>): CSODOTALobbyInvite_LobbyMember {
    const message = createBaseCSODOTALobbyInvite_LobbyMember();
    message.name = object.name ?? "";
    message.steamId = object.steamId ?? "0";
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

  fromJSON(object: any): CSODOTALobbyMember {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      team: isSet(object.team) ? dotaGcTeamFromJSON(object.team) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      slot: isSet(object.slot) ? Number(object.slot) : 0,
      partyId: isSet(object.partyId) ? String(object.partyId) : "0",
      metaLevel: isSet(object.metaLevel) ? Number(object.metaLevel) : 0,
      metaXp: isSet(object.metaXp) ? Number(object.metaXp) : 0,
      metaXpAwarded: isSet(object.metaXpAwarded) ? Number(object.metaXpAwarded) : 0,
      leaverStatus: isSet(object.leaverStatus) ? dOTALeaverStatusTFromJSON(object.leaverStatus) : 0,
      leaverActions: isSet(object.leaverActions) ? Number(object.leaverActions) : 0,
      channel: isSet(object.channel) ? Number(object.channel) : 0,
      disabledHeroId: Array.isArray(object?.disabledHeroId) ? object.disabledHeroId.map((e: any) => Number(e)) : [],
      enabledHeroId: Array.isArray(object?.enabledHeroId) ? object.enabledHeroId.map((e: any) => Number(e)) : [],
      coachTeam: isSet(object.coachTeam) ? dotaGcTeamFromJSON(object.coachTeam) : 0,
      coachedAccountIds: Array.isArray(object?.coachedAccountIds)
        ? object.coachedAccountIds.map((e: any) => Number(e))
        : [],
      coachRating: isSet(object.coachRating) ? Number(object.coachRating) : 0,
      pwrdCyberCafeId: isSet(object.pwrdCyberCafeId) ? Number(object.pwrdCyberCafeId) : 0,
      pwrdCyberCafeName: isSet(object.pwrdCyberCafeName) ? String(object.pwrdCyberCafeName) : "",
      disabledRandomHeroBits: Array.isArray(object?.disabledRandomHeroBits)
        ? object.disabledRandomHeroBits.map((e: any) => Number(e))
        : [],
      rankChange: isSet(object.rankChange) ? Number(object.rankChange) : 0,
      cameraman: isSet(object.cameraman) ? Boolean(object.cameraman) : false,
      customGameProductIds: Array.isArray(object?.customGameProductIds)
        ? object.customGameProductIds.map((e: any) => Number(e))
        : [],
      searchMatchType: isSet(object.searchMatchType) ? matchTypeFromJSON(object.searchMatchType) : 0,
      favoriteTeamPacked: isSet(object.favoriteTeamPacked) ? String(object.favoriteTeamPacked) : "0",
      isPlusSubscriber: isSet(object.isPlusSubscriber) ? Boolean(object.isPlusSubscriber) : false,
      laneSelectionFlags: isSet(object.laneSelectionFlags) ? Number(object.laneSelectionFlags) : 0,
      canEarnRewards: isSet(object.canEarnRewards) ? Boolean(object.canEarnRewards) : false,
      liveSpectatorTeam: isSet(object.liveSpectatorTeam) ? dotaGcTeamFromJSON(object.liveSpectatorTeam) : 0,
      wasMvpLastGame: isSet(object.wasMvpLastGame) ? Boolean(object.wasMvpLastGame) : false,
      pendingAwards: Array.isArray(object?.pendingAwards)
        ? object.pendingAwards.map((e: any) => CMsgPendingEventAward.fromJSON(e))
        : [],
      pendingAwardsOnVictory: Array.isArray(object?.pendingAwardsOnVictory)
        ? object.pendingAwardsOnVictory.map((e: any) => CMsgPendingEventAward.fromJSON(e))
        : [],
      rankMmrBoostType: isSet(object.rankMmrBoostType) ? eDOTAMMRBoostTypeFromJSON(object.rankMmrBoostType) : 0,
      queuePointAdjustment: isSet(object.queuePointAdjustment) ? Number(object.queuePointAdjustment) : 0,
      rankTier: isSet(object.rankTier) ? Number(object.rankTier) : 0,
      title: isSet(object.title) ? Number(object.title) : 0,
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      reportsAvailable: isSet(object.reportsAvailable) ? Number(object.reportsAvailable) : 0,
      isSteamChina: isSet(object.isSteamChina) ? Boolean(object.isSteamChina) : false,
      liveSpectatorAccountId: isSet(object.liveSpectatorAccountId) ? Number(object.liveSpectatorAccountId) : 0,
      commsReportsAvailable: isSet(object.commsReportsAvailable) ? Number(object.commsReportsAvailable) : 0,
    };
  },

  toJSON(message: CSODOTALobbyMember): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.team !== undefined && (obj.team = dotaGcTeamToJSON(message.team));
    message.name !== undefined && (obj.name = message.name);
    message.slot !== undefined && (obj.slot = Math.round(message.slot));
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.metaLevel !== undefined && (obj.metaLevel = Math.round(message.metaLevel));
    message.metaXp !== undefined && (obj.metaXp = Math.round(message.metaXp));
    message.metaXpAwarded !== undefined && (obj.metaXpAwarded = Math.round(message.metaXpAwarded));
    message.leaverStatus !== undefined && (obj.leaverStatus = dOTALeaverStatusTToJSON(message.leaverStatus));
    message.leaverActions !== undefined && (obj.leaverActions = Math.round(message.leaverActions));
    message.channel !== undefined && (obj.channel = Math.round(message.channel));
    if (message.disabledHeroId) {
      obj.disabledHeroId = message.disabledHeroId.map((e) => Math.round(e));
    } else {
      obj.disabledHeroId = [];
    }
    if (message.enabledHeroId) {
      obj.enabledHeroId = message.enabledHeroId.map((e) => Math.round(e));
    } else {
      obj.enabledHeroId = [];
    }
    message.coachTeam !== undefined && (obj.coachTeam = dotaGcTeamToJSON(message.coachTeam));
    if (message.coachedAccountIds) {
      obj.coachedAccountIds = message.coachedAccountIds.map((e) => Math.round(e));
    } else {
      obj.coachedAccountIds = [];
    }
    message.coachRating !== undefined && (obj.coachRating = Math.round(message.coachRating));
    message.pwrdCyberCafeId !== undefined && (obj.pwrdCyberCafeId = Math.round(message.pwrdCyberCafeId));
    message.pwrdCyberCafeName !== undefined && (obj.pwrdCyberCafeName = message.pwrdCyberCafeName);
    if (message.disabledRandomHeroBits) {
      obj.disabledRandomHeroBits = message.disabledRandomHeroBits.map((e) => Math.round(e));
    } else {
      obj.disabledRandomHeroBits = [];
    }
    message.rankChange !== undefined && (obj.rankChange = Math.round(message.rankChange));
    message.cameraman !== undefined && (obj.cameraman = message.cameraman);
    if (message.customGameProductIds) {
      obj.customGameProductIds = message.customGameProductIds.map((e) => Math.round(e));
    } else {
      obj.customGameProductIds = [];
    }
    message.searchMatchType !== undefined && (obj.searchMatchType = matchTypeToJSON(message.searchMatchType));
    message.favoriteTeamPacked !== undefined && (obj.favoriteTeamPacked = message.favoriteTeamPacked);
    message.isPlusSubscriber !== undefined && (obj.isPlusSubscriber = message.isPlusSubscriber);
    message.laneSelectionFlags !== undefined && (obj.laneSelectionFlags = Math.round(message.laneSelectionFlags));
    message.canEarnRewards !== undefined && (obj.canEarnRewards = message.canEarnRewards);
    message.liveSpectatorTeam !== undefined && (obj.liveSpectatorTeam = dotaGcTeamToJSON(message.liveSpectatorTeam));
    message.wasMvpLastGame !== undefined && (obj.wasMvpLastGame = message.wasMvpLastGame);
    if (message.pendingAwards) {
      obj.pendingAwards = message.pendingAwards.map((e) => e ? CMsgPendingEventAward.toJSON(e) : undefined);
    } else {
      obj.pendingAwards = [];
    }
    if (message.pendingAwardsOnVictory) {
      obj.pendingAwardsOnVictory = message.pendingAwardsOnVictory.map((e) =>
        e ? CMsgPendingEventAward.toJSON(e) : undefined
      );
    } else {
      obj.pendingAwardsOnVictory = [];
    }
    message.rankMmrBoostType !== undefined &&
      (obj.rankMmrBoostType = eDOTAMMRBoostTypeToJSON(message.rankMmrBoostType));
    message.queuePointAdjustment !== undefined && (obj.queuePointAdjustment = Math.round(message.queuePointAdjustment));
    message.rankTier !== undefined && (obj.rankTier = Math.round(message.rankTier));
    message.title !== undefined && (obj.title = Math.round(message.title));
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.reportsAvailable !== undefined && (obj.reportsAvailable = Math.round(message.reportsAvailable));
    message.isSteamChina !== undefined && (obj.isSteamChina = message.isSteamChina);
    message.liveSpectatorAccountId !== undefined &&
      (obj.liveSpectatorAccountId = Math.round(message.liveSpectatorAccountId));
    message.commsReportsAvailable !== undefined &&
      (obj.commsReportsAvailable = Math.round(message.commsReportsAvailable));
    return obj;
  },

  create(base?: DeepPartial<CSODOTALobbyMember>): CSODOTALobbyMember {
    return CSODOTALobbyMember.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSODOTALobbyMember>): CSODOTALobbyMember {
    const message = createBaseCSODOTALobbyMember();
    message.id = object.id ?? "0";
    message.heroId = object.heroId ?? 0;
    message.team = object.team ?? 0;
    message.name = object.name ?? "";
    message.slot = object.slot ?? 0;
    message.partyId = object.partyId ?? "0";
    message.metaLevel = object.metaLevel ?? 0;
    message.metaXp = object.metaXp ?? 0;
    message.metaXpAwarded = object.metaXpAwarded ?? 0;
    message.leaverStatus = object.leaverStatus ?? 0;
    message.leaverActions = object.leaverActions ?? 0;
    message.channel = object.channel ?? 0;
    message.disabledHeroId = object.disabledHeroId?.map((e) => e) || [];
    message.enabledHeroId = object.enabledHeroId?.map((e) => e) || [];
    message.coachTeam = object.coachTeam ?? 0;
    message.coachedAccountIds = object.coachedAccountIds?.map((e) => e) || [];
    message.coachRating = object.coachRating ?? 0;
    message.pwrdCyberCafeId = object.pwrdCyberCafeId ?? 0;
    message.pwrdCyberCafeName = object.pwrdCyberCafeName ?? "";
    message.disabledRandomHeroBits = object.disabledRandomHeroBits?.map((e) => e) || [];
    message.rankChange = object.rankChange ?? 0;
    message.cameraman = object.cameraman ?? false;
    message.customGameProductIds = object.customGameProductIds?.map((e) => e) || [];
    message.searchMatchType = object.searchMatchType ?? 0;
    message.favoriteTeamPacked = object.favoriteTeamPacked ?? "0";
    message.isPlusSubscriber = object.isPlusSubscriber ?? false;
    message.laneSelectionFlags = object.laneSelectionFlags ?? 0;
    message.canEarnRewards = object.canEarnRewards ?? false;
    message.liveSpectatorTeam = object.liveSpectatorTeam ?? 0;
    message.wasMvpLastGame = object.wasMvpLastGame ?? false;
    message.pendingAwards = object.pendingAwards?.map((e) => CMsgPendingEventAward.fromPartial(e)) || [];
    message.pendingAwardsOnVictory = object.pendingAwardsOnVictory?.map((e) => CMsgPendingEventAward.fromPartial(e)) ||
      [];
    message.rankMmrBoostType = object.rankMmrBoostType ?? 0;
    message.queuePointAdjustment = object.queuePointAdjustment ?? 0;
    message.rankTier = object.rankTier ?? 0;
    message.title = object.title ?? 0;
    message.guildId = object.guildId ?? 0;
    message.reportsAvailable = object.reportsAvailable ?? 0;
    message.isSteamChina = object.isSteamChina ?? false;
    message.liveSpectatorAccountId = object.liveSpectatorAccountId ?? 0;
    message.commsReportsAvailable = object.commsReportsAvailable ?? 0;
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

  fromJSON(_: any): CSODOTAServerLobbyMember {
    return {};
  },

  toJSON(_: CSODOTAServerLobbyMember): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CSODOTAServerLobbyMember>): CSODOTAServerLobbyMember {
    return CSODOTAServerLobbyMember.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CSODOTAServerLobbyMember>): CSODOTAServerLobbyMember {
    const message = createBaseCSODOTAServerLobbyMember();
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

  fromJSON(_: any): CSODOTAStaticLobbyMember {
    return {};
  },

  toJSON(_: CSODOTAStaticLobbyMember): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CSODOTAStaticLobbyMember>): CSODOTAStaticLobbyMember {
    return CSODOTAStaticLobbyMember.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CSODOTAStaticLobbyMember>): CSODOTAStaticLobbyMember {
    const message = createBaseCSODOTAStaticLobbyMember();
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

  fromJSON(_: any): CSODOTAServerStaticLobbyMember {
    return {};
  },

  toJSON(_: CSODOTAServerStaticLobbyMember): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CSODOTAServerStaticLobbyMember>): CSODOTAServerStaticLobbyMember {
    return CSODOTAServerStaticLobbyMember.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CSODOTAServerStaticLobbyMember>): CSODOTAServerStaticLobbyMember {
    const message = createBaseCSODOTAServerStaticLobbyMember();
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

  fromJSON(object: any): CLobbyTeamDetails {
    return {
      teamName: isSet(object.teamName) ? String(object.teamName) : "",
      teamTag: isSet(object.teamTag) ? String(object.teamTag) : "",
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      teamLogo: isSet(object.teamLogo) ? String(object.teamLogo) : "0",
      teamBaseLogo: isSet(object.teamBaseLogo) ? String(object.teamBaseLogo) : "0",
      teamBannerLogo: isSet(object.teamBannerLogo) ? String(object.teamBannerLogo) : "0",
      teamComplete: isSet(object.teamComplete) ? Boolean(object.teamComplete) : false,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      rankChange: isSet(object.rankChange) ? Number(object.rankChange) : 0,
      isHomeTeam: isSet(object.isHomeTeam) ? Boolean(object.isHomeTeam) : false,
      isChallengeMatch: isSet(object.isChallengeMatch) ? Boolean(object.isChallengeMatch) : false,
      challengeMatchTokenAccount: isSet(object.challengeMatchTokenAccount)
        ? String(object.challengeMatchTokenAccount)
        : "0",
      teamLogoUrl: isSet(object.teamLogoUrl) ? String(object.teamLogoUrl) : "",
      teamAbbreviation: isSet(object.teamAbbreviation) ? String(object.teamAbbreviation) : "",
    };
  },

  toJSON(message: CLobbyTeamDetails): unknown {
    const obj: any = {};
    message.teamName !== undefined && (obj.teamName = message.teamName);
    message.teamTag !== undefined && (obj.teamTag = message.teamTag);
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.teamLogo !== undefined && (obj.teamLogo = message.teamLogo);
    message.teamBaseLogo !== undefined && (obj.teamBaseLogo = message.teamBaseLogo);
    message.teamBannerLogo !== undefined && (obj.teamBannerLogo = message.teamBannerLogo);
    message.teamComplete !== undefined && (obj.teamComplete = message.teamComplete);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.rankChange !== undefined && (obj.rankChange = Math.round(message.rankChange));
    message.isHomeTeam !== undefined && (obj.isHomeTeam = message.isHomeTeam);
    message.isChallengeMatch !== undefined && (obj.isChallengeMatch = message.isChallengeMatch);
    message.challengeMatchTokenAccount !== undefined &&
      (obj.challengeMatchTokenAccount = message.challengeMatchTokenAccount);
    message.teamLogoUrl !== undefined && (obj.teamLogoUrl = message.teamLogoUrl);
    message.teamAbbreviation !== undefined && (obj.teamAbbreviation = message.teamAbbreviation);
    return obj;
  },

  create(base?: DeepPartial<CLobbyTeamDetails>): CLobbyTeamDetails {
    return CLobbyTeamDetails.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CLobbyTeamDetails>): CLobbyTeamDetails {
    const message = createBaseCLobbyTeamDetails();
    message.teamName = object.teamName ?? "";
    message.teamTag = object.teamTag ?? "";
    message.teamId = object.teamId ?? 0;
    message.teamLogo = object.teamLogo ?? "0";
    message.teamBaseLogo = object.teamBaseLogo ?? "0";
    message.teamBannerLogo = object.teamBannerLogo ?? "0";
    message.teamComplete = object.teamComplete ?? false;
    message.rank = object.rank ?? 0;
    message.rankChange = object.rankChange ?? 0;
    message.isHomeTeam = object.isHomeTeam ?? false;
    message.isChallengeMatch = object.isChallengeMatch ?? false;
    message.challengeMatchTokenAccount = object.challengeMatchTokenAccount ?? "0";
    message.teamLogoUrl = object.teamLogoUrl ?? "";
    message.teamAbbreviation = object.teamAbbreviation ?? "";
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

  fromJSON(object: any): CLobbyGuildDetails {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      guildPrimaryColor: isSet(object.guildPrimaryColor) ? Number(object.guildPrimaryColor) : 0,
      guildSecondaryColor: isSet(object.guildSecondaryColor) ? Number(object.guildSecondaryColor) : 0,
      guildPattern: isSet(object.guildPattern) ? Number(object.guildPattern) : 0,
      guildLogo: isSet(object.guildLogo) ? String(object.guildLogo) : "0",
      guildPoints: isSet(object.guildPoints) ? Number(object.guildPoints) : 0,
      guildEvent: isSet(object.guildEvent) ? Number(object.guildEvent) : 0,
      guildFlags: isSet(object.guildFlags) ? Number(object.guildFlags) : 0,
      teamForGuild: isSet(object.teamForGuild) ? dotaGcTeamFromJSON(object.teamForGuild) : 0,
      guildTag: isSet(object.guildTag) ? String(object.guildTag) : "",
      guildWeeklyPercentile: isSet(object.guildWeeklyPercentile) ? Number(object.guildWeeklyPercentile) : 0,
    };
  },

  toJSON(message: CLobbyGuildDetails): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.guildPrimaryColor !== undefined && (obj.guildPrimaryColor = Math.round(message.guildPrimaryColor));
    message.guildSecondaryColor !== undefined && (obj.guildSecondaryColor = Math.round(message.guildSecondaryColor));
    message.guildPattern !== undefined && (obj.guildPattern = Math.round(message.guildPattern));
    message.guildLogo !== undefined && (obj.guildLogo = message.guildLogo);
    message.guildPoints !== undefined && (obj.guildPoints = Math.round(message.guildPoints));
    message.guildEvent !== undefined && (obj.guildEvent = Math.round(message.guildEvent));
    message.guildFlags !== undefined && (obj.guildFlags = Math.round(message.guildFlags));
    message.teamForGuild !== undefined && (obj.teamForGuild = dotaGcTeamToJSON(message.teamForGuild));
    message.guildTag !== undefined && (obj.guildTag = message.guildTag);
    message.guildWeeklyPercentile !== undefined &&
      (obj.guildWeeklyPercentile = Math.round(message.guildWeeklyPercentile));
    return obj;
  },

  create(base?: DeepPartial<CLobbyGuildDetails>): CLobbyGuildDetails {
    return CLobbyGuildDetails.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CLobbyGuildDetails>): CLobbyGuildDetails {
    const message = createBaseCLobbyGuildDetails();
    message.guildId = object.guildId ?? 0;
    message.guildPrimaryColor = object.guildPrimaryColor ?? 0;
    message.guildSecondaryColor = object.guildSecondaryColor ?? 0;
    message.guildPattern = object.guildPattern ?? 0;
    message.guildLogo = object.guildLogo ?? "0";
    message.guildPoints = object.guildPoints ?? 0;
    message.guildEvent = object.guildEvent ?? 0;
    message.guildFlags = object.guildFlags ?? 0;
    message.teamForGuild = object.teamForGuild ?? 0;
    message.guildTag = object.guildTag ?? "";
    message.guildWeeklyPercentile = object.guildWeeklyPercentile ?? 0;
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

  fromJSON(object: any): CLobbyTimedRewardDetails {
    return {
      itemDefIndex: isSet(object.itemDefIndex) ? Number(object.itemDefIndex) : 0,
      isSupplyCrate: isSet(object.isSupplyCrate) ? Boolean(object.isSupplyCrate) : false,
      isTimedDrop: isSet(object.isTimedDrop) ? Boolean(object.isTimedDrop) : false,
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      origin: isSet(object.origin) ? Number(object.origin) : 0,
    };
  },

  toJSON(message: CLobbyTimedRewardDetails): unknown {
    const obj: any = {};
    message.itemDefIndex !== undefined && (obj.itemDefIndex = Math.round(message.itemDefIndex));
    message.isSupplyCrate !== undefined && (obj.isSupplyCrate = message.isSupplyCrate);
    message.isTimedDrop !== undefined && (obj.isTimedDrop = message.isTimedDrop);
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.origin !== undefined && (obj.origin = Math.round(message.origin));
    return obj;
  },

  create(base?: DeepPartial<CLobbyTimedRewardDetails>): CLobbyTimedRewardDetails {
    return CLobbyTimedRewardDetails.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CLobbyTimedRewardDetails>): CLobbyTimedRewardDetails {
    const message = createBaseCLobbyTimedRewardDetails();
    message.itemDefIndex = object.itemDefIndex ?? 0;
    message.isSupplyCrate = object.isSupplyCrate ?? false;
    message.isTimedDrop = object.isTimedDrop ?? false;
    message.accountId = object.accountId ?? 0;
    message.origin = object.origin ?? 0;
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

  fromJSON(object: any): CLobbyBroadcastChannelInfo {
    return {
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0,
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      description: isSet(object.description) ? String(object.description) : "",
      languageCode: isSet(object.languageCode) ? String(object.languageCode) : "",
    };
  },

  toJSON(message: CLobbyBroadcastChannelInfo): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.description !== undefined && (obj.description = message.description);
    message.languageCode !== undefined && (obj.languageCode = message.languageCode);
    return obj;
  },

  create(base?: DeepPartial<CLobbyBroadcastChannelInfo>): CLobbyBroadcastChannelInfo {
    return CLobbyBroadcastChannelInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CLobbyBroadcastChannelInfo>): CLobbyBroadcastChannelInfo {
    const message = createBaseCLobbyBroadcastChannelInfo();
    message.channelId = object.channelId ?? 0;
    message.countryCode = object.countryCode ?? "";
    message.description = object.description ?? "";
    message.languageCode = object.languageCode ?? "";
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

  fromJSON(object: any): CLobbyGuildChallenge {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      challengeInstanceId: isSet(object.challengeInstanceId) ? Number(object.challengeInstanceId) : 0,
      challengeParameter: isSet(object.challengeParameter) ? Number(object.challengeParameter) : 0,
      challengeTimestamp: isSet(object.challengeTimestamp) ? Number(object.challengeTimestamp) : 0,
      challengePeriodSerial: isSet(object.challengePeriodSerial) ? Number(object.challengePeriodSerial) : 0,
      challengeProgressAtStart: isSet(object.challengeProgressAtStart) ? Number(object.challengeProgressAtStart) : 0,
      eligibleAccountIds: Array.isArray(object?.eligibleAccountIds)
        ? object.eligibleAccountIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CLobbyGuildChallenge): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.challengeInstanceId !== undefined && (obj.challengeInstanceId = Math.round(message.challengeInstanceId));
    message.challengeParameter !== undefined && (obj.challengeParameter = Math.round(message.challengeParameter));
    message.challengeTimestamp !== undefined && (obj.challengeTimestamp = Math.round(message.challengeTimestamp));
    message.challengePeriodSerial !== undefined &&
      (obj.challengePeriodSerial = Math.round(message.challengePeriodSerial));
    message.challengeProgressAtStart !== undefined &&
      (obj.challengeProgressAtStart = Math.round(message.challengeProgressAtStart));
    if (message.eligibleAccountIds) {
      obj.eligibleAccountIds = message.eligibleAccountIds.map((e) => Math.round(e));
    } else {
      obj.eligibleAccountIds = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CLobbyGuildChallenge>): CLobbyGuildChallenge {
    return CLobbyGuildChallenge.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CLobbyGuildChallenge>): CLobbyGuildChallenge {
    const message = createBaseCLobbyGuildChallenge();
    message.guildId = object.guildId ?? 0;
    message.eventId = object.eventId ?? 0;
    message.challengeInstanceId = object.challengeInstanceId ?? 0;
    message.challengeParameter = object.challengeParameter ?? 0;
    message.challengeTimestamp = object.challengeTimestamp ?? 0;
    message.challengePeriodSerial = object.challengePeriodSerial ?? 0;
    message.challengeProgressAtStart = object.challengeProgressAtStart ?? 0;
    message.eligibleAccountIds = object.eligibleAccountIds?.map((e) => e) || [];
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

  fromJSON(object: any): CSODOTALobby {
    return {
      lobbyId: isSet(object.lobbyId) ? String(object.lobbyId) : "0",
      allMembers: Array.isArray(object?.allMembers)
        ? object.allMembers.map((e: any) => CSODOTALobbyMember.fromJSON(e))
        : [],
      memberIndices: Array.isArray(object?.memberIndices) ? object.memberIndices.map((e: any) => Number(e)) : [],
      leftMemberIndices: Array.isArray(object?.leftMemberIndices)
        ? object.leftMemberIndices.map((e: any) => Number(e))
        : [],
      freeMemberIndices: Array.isArray(object?.freeMemberIndices)
        ? object.freeMemberIndices.map((e: any) => Number(e))
        : [],
      leaderId: isSet(object.leaderId) ? String(object.leaderId) : "0",
      serverId: isSet(object.serverId) ? String(object.serverId) : "0",
      gameMode: isSet(object.gameMode) ? Number(object.gameMode) : 0,
      pendingInvites: Array.isArray(object?.pendingInvites) ? object.pendingInvites.map((e: any) => String(e)) : [],
      state: isSet(object.state) ? cSODOTALobby_StateFromJSON(object.state) : 0,
      connect: isSet(object.connect) ? String(object.connect) : "",
      lobbyType: isSet(object.lobbyType) ? cSODOTALobby_LobbyTypeFromJSON(object.lobbyType) : 0,
      allowCheats: isSet(object.allowCheats) ? Boolean(object.allowCheats) : false,
      fillWithBots: isSet(object.fillWithBots) ? Boolean(object.fillWithBots) : false,
      introMode: isSet(object.introMode) ? Boolean(object.introMode) : false,
      gameName: isSet(object.gameName) ? String(object.gameName) : "",
      teamDetails: Array.isArray(object?.teamDetails)
        ? object.teamDetails.map((e: any) => CLobbyTeamDetails.fromJSON(e))
        : [],
      tutorialLesson: isSet(object.tutorialLesson) ? Number(object.tutorialLesson) : 0,
      tournamentId: isSet(object.tournamentId) ? Number(object.tournamentId) : 0,
      tournamentGameId: isSet(object.tournamentGameId) ? Number(object.tournamentGameId) : 0,
      serverRegion: isSet(object.serverRegion) ? Number(object.serverRegion) : 0,
      gameState: isSet(object.gameState) ? dOTAGameStateFromJSON(object.gameState) : 0,
      numSpectators: isSet(object.numSpectators) ? Number(object.numSpectators) : 0,
      matchgroup: isSet(object.matchgroup) ? Number(object.matchgroup) : 0,
      cmPick: isSet(object.cmPick) ? dotaCmPickFromJSON(object.cmPick) : 0,
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      allowSpectating: isSet(object.allowSpectating) ? Boolean(object.allowSpectating) : false,
      botDifficultyRadiant: isSet(object.botDifficultyRadiant)
        ? dOTABotDifficultyFromJSON(object.botDifficultyRadiant)
        : 0,
      timedRewardDetails: Array.isArray(object?.timedRewardDetails)
        ? object.timedRewardDetails.map((e: any) => CLobbyTimedRewardDetails.fromJSON(e))
        : [],
      passKey: isSet(object.passKey) ? String(object.passKey) : "",
      leagueid: isSet(object.leagueid) ? Number(object.leagueid) : 0,
      penaltyLevelRadiant: isSet(object.penaltyLevelRadiant) ? Number(object.penaltyLevelRadiant) : 0,
      penaltyLevelDire: isSet(object.penaltyLevelDire) ? Number(object.penaltyLevelDire) : 0,
      loadGameId: isSet(object.loadGameId) ? Number(object.loadGameId) : 0,
      seriesType: isSet(object.seriesType) ? Number(object.seriesType) : 0,
      radiantSeriesWins: isSet(object.radiantSeriesWins) ? Number(object.radiantSeriesWins) : 0,
      direSeriesWins: isSet(object.direSeriesWins) ? Number(object.direSeriesWins) : 0,
      lootGenerated: isSet(object.lootGenerated) ? Number(object.lootGenerated) : 0,
      lootAwarded: isSet(object.lootAwarded) ? Number(object.lootAwarded) : 0,
      allchat: isSet(object.allchat) ? Boolean(object.allchat) : false,
      dotaTvDelay: isSet(object.dotaTvDelay) ? lobbyDotaTVDelayFromJSON(object.dotaTvDelay) : 0,
      customGameMode: isSet(object.customGameMode) ? String(object.customGameMode) : "",
      customMapName: isSet(object.customMapName) ? String(object.customMapName) : "",
      customDifficulty: isSet(object.customDifficulty) ? Number(object.customDifficulty) : 0,
      lan: isSet(object.lan) ? Boolean(object.lan) : false,
      broadcastChannelInfo: Array.isArray(object?.broadcastChannelInfo)
        ? object.broadcastChannelInfo.map((e: any) => CLobbyBroadcastChannelInfo.fromJSON(e))
        : [],
      firstLeaverAccountid: isSet(object.firstLeaverAccountid) ? Number(object.firstLeaverAccountid) : 0,
      seriesId: isSet(object.seriesId) ? Number(object.seriesId) : 0,
      lowPriority: isSet(object.lowPriority) ? Boolean(object.lowPriority) : false,
      extraMessages: Array.isArray(object?.extraMessages)
        ? object.extraMessages.map((e: any) => CSODOTALobby_CExtraMsg.fromJSON(e))
        : [],
      saveGame: isSet(object.saveGame) ? CDOTASaveGame.fromJSON(object.saveGame) : undefined,
      firstBloodHappened: isSet(object.firstBloodHappened) ? Boolean(object.firstBloodHappened) : false,
      matchOutcome: isSet(object.matchOutcome) ? eMatchOutcomeFromJSON(object.matchOutcome) : 0,
      massDisconnect: isSet(object.massDisconnect) ? Boolean(object.massDisconnect) : false,
      customGameId: isSet(object.customGameId) ? String(object.customGameId) : "0",
      customMinPlayers: isSet(object.customMinPlayers) ? Number(object.customMinPlayers) : 0,
      customMaxPlayers: isSet(object.customMaxPlayers) ? Number(object.customMaxPlayers) : 0,
      visibility: isSet(object.visibility) ? dOTALobbyVisibilityFromJSON(object.visibility) : 0,
      customGameCrc: isSet(object.customGameCrc) ? String(object.customGameCrc) : "0",
      customGameAutoCreatedLobby: isSet(object.customGameAutoCreatedLobby)
        ? Boolean(object.customGameAutoCreatedLobby)
        : false,
      customGameTimestamp: isSet(object.customGameTimestamp) ? Number(object.customGameTimestamp) : 0,
      previousSeriesMatches: Array.isArray(object?.previousSeriesMatches)
        ? object.previousSeriesMatches.map((e: any) => String(e))
        : [],
      previousMatchOverride: isSet(object.previousMatchOverride) ? String(object.previousMatchOverride) : "0",
      gameStartTime: isSet(object.gameStartTime) ? Number(object.gameStartTime) : 0,
      pauseSetting: isSet(object.pauseSetting) ? lobbyDotaPauseSettingFromJSON(object.pauseSetting) : 0,
      weekendTourneyDivisionId: isSet(object.weekendTourneyDivisionId) ? Number(object.weekendTourneyDivisionId) : 0,
      weekendTourneySkillLevel: isSet(object.weekendTourneySkillLevel) ? Number(object.weekendTourneySkillLevel) : 0,
      weekendTourneyBracketRound: isSet(object.weekendTourneyBracketRound)
        ? Number(object.weekendTourneyBracketRound)
        : 0,
      botDifficultyDire: isSet(object.botDifficultyDire) ? dOTABotDifficultyFromJSON(object.botDifficultyDire) : 0,
      botRadiant: isSet(object.botRadiant) ? String(object.botRadiant) : "0",
      botDire: isSet(object.botDire) ? String(object.botDire) : "0",
      eventProgressionEnabled: Array.isArray(object?.eventProgressionEnabled)
        ? object.eventProgressionEnabled.map((e: any) => eEventFromJSON(e))
        : [],
      selectionPriorityRules: isSet(object.selectionPriorityRules)
        ? dOTASelectionPriorityRulesFromJSON(object.selectionPriorityRules)
        : 0,
      seriesPreviousSelectionPriorityTeamId: isSet(object.seriesPreviousSelectionPriorityTeamId)
        ? Number(object.seriesPreviousSelectionPriorityTeamId)
        : 0,
      seriesCurrentSelectionPriorityTeamId: isSet(object.seriesCurrentSelectionPriorityTeamId)
        ? Number(object.seriesCurrentSelectionPriorityTeamId)
        : 0,
      seriesCurrentPriorityTeamChoice: isSet(object.seriesCurrentPriorityTeamChoice)
        ? dOTASelectionPriorityChoiceFromJSON(object.seriesCurrentPriorityTeamChoice)
        : 0,
      seriesCurrentNonPriorityTeamChoice: isSet(object.seriesCurrentNonPriorityTeamChoice)
        ? dOTASelectionPriorityChoiceFromJSON(object.seriesCurrentNonPriorityTeamChoice)
        : 0,
      seriesCurrentSelectionPriorityUsedCoinToss: isSet(object.seriesCurrentSelectionPriorityUsedCoinToss)
        ? Boolean(object.seriesCurrentSelectionPriorityUsedCoinToss)
        : false,
      currentPrimaryEvent: isSet(object.currentPrimaryEvent) ? eEventFromJSON(object.currentPrimaryEvent) : 0,
      emergencyDisabledHeroIds: Array.isArray(object?.emergencyDisabledHeroIds)
        ? object.emergencyDisabledHeroIds.map((e: any) => Number(e))
        : [],
      customGamePrivateKey: isSet(object.customGamePrivateKey) ? String(object.customGamePrivateKey) : "0",
      customGamePenalties: isSet(object.customGamePenalties) ? Boolean(object.customGamePenalties) : false,
      lanHostPingLocation: isSet(object.lanHostPingLocation) ? String(object.lanHostPingLocation) : "",
      leagueNodeId: isSet(object.leagueNodeId) ? Number(object.leagueNodeId) : 0,
      matchDuration: isSet(object.matchDuration) ? Number(object.matchDuration) : 0,
      leaguePhase: isSet(object.leaguePhase) ? Number(object.leaguePhase) : 0,
      recordDetailedStats: isSet(object.recordDetailedStats) ? Boolean(object.recordDetailedStats) : false,
      experimentalGameplayEnabled: isSet(object.experimentalGameplayEnabled)
        ? Boolean(object.experimentalGameplayEnabled)
        : false,
      guildChallenges: Array.isArray(object?.guildChallenges)
        ? object.guildChallenges.map((e: any) => CLobbyGuildChallenge.fromJSON(e))
        : [],
      guildDetails: Array.isArray(object?.guildDetails)
        ? object.guildDetails.map((e: any) => CLobbyGuildDetails.fromJSON(e))
        : [],
      lobbyEventPoints: Array.isArray(object?.lobbyEventPoints)
        ? object.lobbyEventPoints.map((e: any) => CMsgLobbyEventPoints.fromJSON(e))
        : [],
      requestedHeroIds: Array.isArray(object?.requestedHeroIds)
        ? object.requestedHeroIds.map((e: any) => Number(e))
        : [],
      coachFriendRequests: Array.isArray(object?.coachFriendRequests)
        ? object.coachFriendRequests.map((e: any) => CMsgLobbyCoachFriendRequest.fromJSON(e))
        : [],
      isInSteamChina: isSet(object.isInSteamChina) ? Boolean(object.isInSteamChina) : false,
      withScenarioSave: isSet(object.withScenarioSave) ? Boolean(object.withScenarioSave) : false,
      lobbyCreationTime: isSet(object.lobbyCreationTime) ? Number(object.lobbyCreationTime) : 0,
      eventGameDefinition: isSet(object.eventGameDefinition) ? String(object.eventGameDefinition) : "",
      extraStartupMessages: Array.isArray(object?.extraStartupMessages)
        ? object.extraStartupMessages.map((e: any) => CSODOTALobby_CExtraMsg.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSODOTALobby): unknown {
    const obj: any = {};
    message.lobbyId !== undefined && (obj.lobbyId = message.lobbyId);
    if (message.allMembers) {
      obj.allMembers = message.allMembers.map((e) => e ? CSODOTALobbyMember.toJSON(e) : undefined);
    } else {
      obj.allMembers = [];
    }
    if (message.memberIndices) {
      obj.memberIndices = message.memberIndices.map((e) => Math.round(e));
    } else {
      obj.memberIndices = [];
    }
    if (message.leftMemberIndices) {
      obj.leftMemberIndices = message.leftMemberIndices.map((e) => Math.round(e));
    } else {
      obj.leftMemberIndices = [];
    }
    if (message.freeMemberIndices) {
      obj.freeMemberIndices = message.freeMemberIndices.map((e) => Math.round(e));
    } else {
      obj.freeMemberIndices = [];
    }
    message.leaderId !== undefined && (obj.leaderId = message.leaderId);
    message.serverId !== undefined && (obj.serverId = message.serverId);
    message.gameMode !== undefined && (obj.gameMode = Math.round(message.gameMode));
    if (message.pendingInvites) {
      obj.pendingInvites = message.pendingInvites.map((e) => e);
    } else {
      obj.pendingInvites = [];
    }
    message.state !== undefined && (obj.state = cSODOTALobby_StateToJSON(message.state));
    message.connect !== undefined && (obj.connect = message.connect);
    message.lobbyType !== undefined && (obj.lobbyType = cSODOTALobby_LobbyTypeToJSON(message.lobbyType));
    message.allowCheats !== undefined && (obj.allowCheats = message.allowCheats);
    message.fillWithBots !== undefined && (obj.fillWithBots = message.fillWithBots);
    message.introMode !== undefined && (obj.introMode = message.introMode);
    message.gameName !== undefined && (obj.gameName = message.gameName);
    if (message.teamDetails) {
      obj.teamDetails = message.teamDetails.map((e) => e ? CLobbyTeamDetails.toJSON(e) : undefined);
    } else {
      obj.teamDetails = [];
    }
    message.tutorialLesson !== undefined && (obj.tutorialLesson = Math.round(message.tutorialLesson));
    message.tournamentId !== undefined && (obj.tournamentId = Math.round(message.tournamentId));
    message.tournamentGameId !== undefined && (obj.tournamentGameId = Math.round(message.tournamentGameId));
    message.serverRegion !== undefined && (obj.serverRegion = Math.round(message.serverRegion));
    message.gameState !== undefined && (obj.gameState = dOTAGameStateToJSON(message.gameState));
    message.numSpectators !== undefined && (obj.numSpectators = Math.round(message.numSpectators));
    message.matchgroup !== undefined && (obj.matchgroup = Math.round(message.matchgroup));
    message.cmPick !== undefined && (obj.cmPick = dotaCmPickToJSON(message.cmPick));
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.allowSpectating !== undefined && (obj.allowSpectating = message.allowSpectating);
    message.botDifficultyRadiant !== undefined &&
      (obj.botDifficultyRadiant = dOTABotDifficultyToJSON(message.botDifficultyRadiant));
    if (message.timedRewardDetails) {
      obj.timedRewardDetails = message.timedRewardDetails.map((e) =>
        e ? CLobbyTimedRewardDetails.toJSON(e) : undefined
      );
    } else {
      obj.timedRewardDetails = [];
    }
    message.passKey !== undefined && (obj.passKey = message.passKey);
    message.leagueid !== undefined && (obj.leagueid = Math.round(message.leagueid));
    message.penaltyLevelRadiant !== undefined && (obj.penaltyLevelRadiant = Math.round(message.penaltyLevelRadiant));
    message.penaltyLevelDire !== undefined && (obj.penaltyLevelDire = Math.round(message.penaltyLevelDire));
    message.loadGameId !== undefined && (obj.loadGameId = Math.round(message.loadGameId));
    message.seriesType !== undefined && (obj.seriesType = Math.round(message.seriesType));
    message.radiantSeriesWins !== undefined && (obj.radiantSeriesWins = Math.round(message.radiantSeriesWins));
    message.direSeriesWins !== undefined && (obj.direSeriesWins = Math.round(message.direSeriesWins));
    message.lootGenerated !== undefined && (obj.lootGenerated = Math.round(message.lootGenerated));
    message.lootAwarded !== undefined && (obj.lootAwarded = Math.round(message.lootAwarded));
    message.allchat !== undefined && (obj.allchat = message.allchat);
    message.dotaTvDelay !== undefined && (obj.dotaTvDelay = lobbyDotaTVDelayToJSON(message.dotaTvDelay));
    message.customGameMode !== undefined && (obj.customGameMode = message.customGameMode);
    message.customMapName !== undefined && (obj.customMapName = message.customMapName);
    message.customDifficulty !== undefined && (obj.customDifficulty = Math.round(message.customDifficulty));
    message.lan !== undefined && (obj.lan = message.lan);
    if (message.broadcastChannelInfo) {
      obj.broadcastChannelInfo = message.broadcastChannelInfo.map((e) =>
        e ? CLobbyBroadcastChannelInfo.toJSON(e) : undefined
      );
    } else {
      obj.broadcastChannelInfo = [];
    }
    message.firstLeaverAccountid !== undefined && (obj.firstLeaverAccountid = Math.round(message.firstLeaverAccountid));
    message.seriesId !== undefined && (obj.seriesId = Math.round(message.seriesId));
    message.lowPriority !== undefined && (obj.lowPriority = message.lowPriority);
    if (message.extraMessages) {
      obj.extraMessages = message.extraMessages.map((e) => e ? CSODOTALobby_CExtraMsg.toJSON(e) : undefined);
    } else {
      obj.extraMessages = [];
    }
    message.saveGame !== undefined &&
      (obj.saveGame = message.saveGame ? CDOTASaveGame.toJSON(message.saveGame) : undefined);
    message.firstBloodHappened !== undefined && (obj.firstBloodHappened = message.firstBloodHappened);
    message.matchOutcome !== undefined && (obj.matchOutcome = eMatchOutcomeToJSON(message.matchOutcome));
    message.massDisconnect !== undefined && (obj.massDisconnect = message.massDisconnect);
    message.customGameId !== undefined && (obj.customGameId = message.customGameId);
    message.customMinPlayers !== undefined && (obj.customMinPlayers = Math.round(message.customMinPlayers));
    message.customMaxPlayers !== undefined && (obj.customMaxPlayers = Math.round(message.customMaxPlayers));
    message.visibility !== undefined && (obj.visibility = dOTALobbyVisibilityToJSON(message.visibility));
    message.customGameCrc !== undefined && (obj.customGameCrc = message.customGameCrc);
    message.customGameAutoCreatedLobby !== undefined &&
      (obj.customGameAutoCreatedLobby = message.customGameAutoCreatedLobby);
    message.customGameTimestamp !== undefined && (obj.customGameTimestamp = Math.round(message.customGameTimestamp));
    if (message.previousSeriesMatches) {
      obj.previousSeriesMatches = message.previousSeriesMatches.map((e) => e);
    } else {
      obj.previousSeriesMatches = [];
    }
    message.previousMatchOverride !== undefined && (obj.previousMatchOverride = message.previousMatchOverride);
    message.gameStartTime !== undefined && (obj.gameStartTime = Math.round(message.gameStartTime));
    message.pauseSetting !== undefined && (obj.pauseSetting = lobbyDotaPauseSettingToJSON(message.pauseSetting));
    message.weekendTourneyDivisionId !== undefined &&
      (obj.weekendTourneyDivisionId = Math.round(message.weekendTourneyDivisionId));
    message.weekendTourneySkillLevel !== undefined &&
      (obj.weekendTourneySkillLevel = Math.round(message.weekendTourneySkillLevel));
    message.weekendTourneyBracketRound !== undefined &&
      (obj.weekendTourneyBracketRound = Math.round(message.weekendTourneyBracketRound));
    message.botDifficultyDire !== undefined &&
      (obj.botDifficultyDire = dOTABotDifficultyToJSON(message.botDifficultyDire));
    message.botRadiant !== undefined && (obj.botRadiant = message.botRadiant);
    message.botDire !== undefined && (obj.botDire = message.botDire);
    if (message.eventProgressionEnabled) {
      obj.eventProgressionEnabled = message.eventProgressionEnabled.map((e) => eEventToJSON(e));
    } else {
      obj.eventProgressionEnabled = [];
    }
    message.selectionPriorityRules !== undefined &&
      (obj.selectionPriorityRules = dOTASelectionPriorityRulesToJSON(message.selectionPriorityRules));
    message.seriesPreviousSelectionPriorityTeamId !== undefined &&
      (obj.seriesPreviousSelectionPriorityTeamId = Math.round(message.seriesPreviousSelectionPriorityTeamId));
    message.seriesCurrentSelectionPriorityTeamId !== undefined &&
      (obj.seriesCurrentSelectionPriorityTeamId = Math.round(message.seriesCurrentSelectionPriorityTeamId));
    message.seriesCurrentPriorityTeamChoice !== undefined &&
      (obj.seriesCurrentPriorityTeamChoice = dOTASelectionPriorityChoiceToJSON(
        message.seriesCurrentPriorityTeamChoice,
      ));
    message.seriesCurrentNonPriorityTeamChoice !== undefined &&
      (obj.seriesCurrentNonPriorityTeamChoice = dOTASelectionPriorityChoiceToJSON(
        message.seriesCurrentNonPriorityTeamChoice,
      ));
    message.seriesCurrentSelectionPriorityUsedCoinToss !== undefined &&
      (obj.seriesCurrentSelectionPriorityUsedCoinToss = message.seriesCurrentSelectionPriorityUsedCoinToss);
    message.currentPrimaryEvent !== undefined && (obj.currentPrimaryEvent = eEventToJSON(message.currentPrimaryEvent));
    if (message.emergencyDisabledHeroIds) {
      obj.emergencyDisabledHeroIds = message.emergencyDisabledHeroIds.map((e) => Math.round(e));
    } else {
      obj.emergencyDisabledHeroIds = [];
    }
    message.customGamePrivateKey !== undefined && (obj.customGamePrivateKey = message.customGamePrivateKey);
    message.customGamePenalties !== undefined && (obj.customGamePenalties = message.customGamePenalties);
    message.lanHostPingLocation !== undefined && (obj.lanHostPingLocation = message.lanHostPingLocation);
    message.leagueNodeId !== undefined && (obj.leagueNodeId = Math.round(message.leagueNodeId));
    message.matchDuration !== undefined && (obj.matchDuration = Math.round(message.matchDuration));
    message.leaguePhase !== undefined && (obj.leaguePhase = Math.round(message.leaguePhase));
    message.recordDetailedStats !== undefined && (obj.recordDetailedStats = message.recordDetailedStats);
    message.experimentalGameplayEnabled !== undefined &&
      (obj.experimentalGameplayEnabled = message.experimentalGameplayEnabled);
    if (message.guildChallenges) {
      obj.guildChallenges = message.guildChallenges.map((e) => e ? CLobbyGuildChallenge.toJSON(e) : undefined);
    } else {
      obj.guildChallenges = [];
    }
    if (message.guildDetails) {
      obj.guildDetails = message.guildDetails.map((e) => e ? CLobbyGuildDetails.toJSON(e) : undefined);
    } else {
      obj.guildDetails = [];
    }
    if (message.lobbyEventPoints) {
      obj.lobbyEventPoints = message.lobbyEventPoints.map((e) => e ? CMsgLobbyEventPoints.toJSON(e) : undefined);
    } else {
      obj.lobbyEventPoints = [];
    }
    if (message.requestedHeroIds) {
      obj.requestedHeroIds = message.requestedHeroIds.map((e) => Math.round(e));
    } else {
      obj.requestedHeroIds = [];
    }
    if (message.coachFriendRequests) {
      obj.coachFriendRequests = message.coachFriendRequests.map((e) =>
        e ? CMsgLobbyCoachFriendRequest.toJSON(e) : undefined
      );
    } else {
      obj.coachFriendRequests = [];
    }
    message.isInSteamChina !== undefined && (obj.isInSteamChina = message.isInSteamChina);
    message.withScenarioSave !== undefined && (obj.withScenarioSave = message.withScenarioSave);
    message.lobbyCreationTime !== undefined && (obj.lobbyCreationTime = Math.round(message.lobbyCreationTime));
    message.eventGameDefinition !== undefined && (obj.eventGameDefinition = message.eventGameDefinition);
    if (message.extraStartupMessages) {
      obj.extraStartupMessages = message.extraStartupMessages.map((e) =>
        e ? CSODOTALobby_CExtraMsg.toJSON(e) : undefined
      );
    } else {
      obj.extraStartupMessages = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CSODOTALobby>): CSODOTALobby {
    return CSODOTALobby.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSODOTALobby>): CSODOTALobby {
    const message = createBaseCSODOTALobby();
    message.lobbyId = object.lobbyId ?? "0";
    message.allMembers = object.allMembers?.map((e) => CSODOTALobbyMember.fromPartial(e)) || [];
    message.memberIndices = object.memberIndices?.map((e) => e) || [];
    message.leftMemberIndices = object.leftMemberIndices?.map((e) => e) || [];
    message.freeMemberIndices = object.freeMemberIndices?.map((e) => e) || [];
    message.leaderId = object.leaderId ?? "0";
    message.serverId = object.serverId ?? "0";
    message.gameMode = object.gameMode ?? 0;
    message.pendingInvites = object.pendingInvites?.map((e) => e) || [];
    message.state = object.state ?? 0;
    message.connect = object.connect ?? "";
    message.lobbyType = object.lobbyType ?? 0;
    message.allowCheats = object.allowCheats ?? false;
    message.fillWithBots = object.fillWithBots ?? false;
    message.introMode = object.introMode ?? false;
    message.gameName = object.gameName ?? "";
    message.teamDetails = object.teamDetails?.map((e) => CLobbyTeamDetails.fromPartial(e)) || [];
    message.tutorialLesson = object.tutorialLesson ?? 0;
    message.tournamentId = object.tournamentId ?? 0;
    message.tournamentGameId = object.tournamentGameId ?? 0;
    message.serverRegion = object.serverRegion ?? 0;
    message.gameState = object.gameState ?? 0;
    message.numSpectators = object.numSpectators ?? 0;
    message.matchgroup = object.matchgroup ?? 0;
    message.cmPick = object.cmPick ?? 0;
    message.matchId = object.matchId ?? "0";
    message.allowSpectating = object.allowSpectating ?? false;
    message.botDifficultyRadiant = object.botDifficultyRadiant ?? 0;
    message.timedRewardDetails = object.timedRewardDetails?.map((e) => CLobbyTimedRewardDetails.fromPartial(e)) || [];
    message.passKey = object.passKey ?? "";
    message.leagueid = object.leagueid ?? 0;
    message.penaltyLevelRadiant = object.penaltyLevelRadiant ?? 0;
    message.penaltyLevelDire = object.penaltyLevelDire ?? 0;
    message.loadGameId = object.loadGameId ?? 0;
    message.seriesType = object.seriesType ?? 0;
    message.radiantSeriesWins = object.radiantSeriesWins ?? 0;
    message.direSeriesWins = object.direSeriesWins ?? 0;
    message.lootGenerated = object.lootGenerated ?? 0;
    message.lootAwarded = object.lootAwarded ?? 0;
    message.allchat = object.allchat ?? false;
    message.dotaTvDelay = object.dotaTvDelay ?? 0;
    message.customGameMode = object.customGameMode ?? "";
    message.customMapName = object.customMapName ?? "";
    message.customDifficulty = object.customDifficulty ?? 0;
    message.lan = object.lan ?? false;
    message.broadcastChannelInfo = object.broadcastChannelInfo?.map((e) => CLobbyBroadcastChannelInfo.fromPartial(e)) ||
      [];
    message.firstLeaverAccountid = object.firstLeaverAccountid ?? 0;
    message.seriesId = object.seriesId ?? 0;
    message.lowPriority = object.lowPriority ?? false;
    message.extraMessages = object.extraMessages?.map((e) => CSODOTALobby_CExtraMsg.fromPartial(e)) || [];
    message.saveGame = (object.saveGame !== undefined && object.saveGame !== null)
      ? CDOTASaveGame.fromPartial(object.saveGame)
      : undefined;
    message.firstBloodHappened = object.firstBloodHappened ?? false;
    message.matchOutcome = object.matchOutcome ?? 0;
    message.massDisconnect = object.massDisconnect ?? false;
    message.customGameId = object.customGameId ?? "0";
    message.customMinPlayers = object.customMinPlayers ?? 0;
    message.customMaxPlayers = object.customMaxPlayers ?? 0;
    message.visibility = object.visibility ?? 0;
    message.customGameCrc = object.customGameCrc ?? "0";
    message.customGameAutoCreatedLobby = object.customGameAutoCreatedLobby ?? false;
    message.customGameTimestamp = object.customGameTimestamp ?? 0;
    message.previousSeriesMatches = object.previousSeriesMatches?.map((e) => e) || [];
    message.previousMatchOverride = object.previousMatchOverride ?? "0";
    message.gameStartTime = object.gameStartTime ?? 0;
    message.pauseSetting = object.pauseSetting ?? 0;
    message.weekendTourneyDivisionId = object.weekendTourneyDivisionId ?? 0;
    message.weekendTourneySkillLevel = object.weekendTourneySkillLevel ?? 0;
    message.weekendTourneyBracketRound = object.weekendTourneyBracketRound ?? 0;
    message.botDifficultyDire = object.botDifficultyDire ?? 0;
    message.botRadiant = object.botRadiant ?? "0";
    message.botDire = object.botDire ?? "0";
    message.eventProgressionEnabled = object.eventProgressionEnabled?.map((e) => e) || [];
    message.selectionPriorityRules = object.selectionPriorityRules ?? 0;
    message.seriesPreviousSelectionPriorityTeamId = object.seriesPreviousSelectionPriorityTeamId ?? 0;
    message.seriesCurrentSelectionPriorityTeamId = object.seriesCurrentSelectionPriorityTeamId ?? 0;
    message.seriesCurrentPriorityTeamChoice = object.seriesCurrentPriorityTeamChoice ?? 0;
    message.seriesCurrentNonPriorityTeamChoice = object.seriesCurrentNonPriorityTeamChoice ?? 0;
    message.seriesCurrentSelectionPriorityUsedCoinToss = object.seriesCurrentSelectionPriorityUsedCoinToss ?? false;
    message.currentPrimaryEvent = object.currentPrimaryEvent ?? 0;
    message.emergencyDisabledHeroIds = object.emergencyDisabledHeroIds?.map((e) => e) || [];
    message.customGamePrivateKey = object.customGamePrivateKey ?? "0";
    message.customGamePenalties = object.customGamePenalties ?? false;
    message.lanHostPingLocation = object.lanHostPingLocation ?? "";
    message.leagueNodeId = object.leagueNodeId ?? 0;
    message.matchDuration = object.matchDuration ?? 0;
    message.leaguePhase = object.leaguePhase ?? 0;
    message.recordDetailedStats = object.recordDetailedStats ?? false;
    message.experimentalGameplayEnabled = object.experimentalGameplayEnabled ?? false;
    message.guildChallenges = object.guildChallenges?.map((e) => CLobbyGuildChallenge.fromPartial(e)) || [];
    message.guildDetails = object.guildDetails?.map((e) => CLobbyGuildDetails.fromPartial(e)) || [];
    message.lobbyEventPoints = object.lobbyEventPoints?.map((e) => CMsgLobbyEventPoints.fromPartial(e)) || [];
    message.requestedHeroIds = object.requestedHeroIds?.map((e) => e) || [];
    message.coachFriendRequests = object.coachFriendRequests?.map((e) => CMsgLobbyCoachFriendRequest.fromPartial(e)) ||
      [];
    message.isInSteamChina = object.isInSteamChina ?? false;
    message.withScenarioSave = object.withScenarioSave ?? false;
    message.lobbyCreationTime = object.lobbyCreationTime ?? 0;
    message.eventGameDefinition = object.eventGameDefinition ?? "";
    message.extraStartupMessages = object.extraStartupMessages?.map((e) => CSODOTALobby_CExtraMsg.fromPartial(e)) || [];
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

  fromJSON(object: any): CSODOTALobby_CExtraMsg {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      contents: isSet(object.contents) ? Buffer.from(bytesFromBase64(object.contents)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CSODOTALobby_CExtraMsg): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.contents !== undefined &&
      (obj.contents = base64FromBytes(message.contents !== undefined ? message.contents : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CSODOTALobby_CExtraMsg>): CSODOTALobby_CExtraMsg {
    return CSODOTALobby_CExtraMsg.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSODOTALobby_CExtraMsg>): CSODOTALobby_CExtraMsg {
    const message = createBaseCSODOTALobby_CExtraMsg();
    message.id = object.id ?? 0;
    message.contents = object.contents ?? Buffer.alloc(0);
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

  fromJSON(object: any): CSODOTAServerLobby {
    return {
      allMembers: Array.isArray(object?.allMembers)
        ? object.allMembers.map((e: any) => CSODOTAServerLobbyMember.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSODOTAServerLobby): unknown {
    const obj: any = {};
    if (message.allMembers) {
      obj.allMembers = message.allMembers.map((e) => e ? CSODOTAServerLobbyMember.toJSON(e) : undefined);
    } else {
      obj.allMembers = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CSODOTAServerLobby>): CSODOTAServerLobby {
    return CSODOTAServerLobby.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSODOTAServerLobby>): CSODOTAServerLobby {
    const message = createBaseCSODOTAServerLobby();
    message.allMembers = object.allMembers?.map((e) => CSODOTAServerLobbyMember.fromPartial(e)) || [];
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

  fromJSON(object: any): CSODOTAStaticLobby {
    return {
      allMembers: Array.isArray(object?.allMembers)
        ? object.allMembers.map((e: any) => CSODOTAStaticLobbyMember.fromJSON(e))
        : [],
      isPlayerDraft: isSet(object.isPlayerDraft) ? Boolean(object.isPlayerDraft) : false,
    };
  },

  toJSON(message: CSODOTAStaticLobby): unknown {
    const obj: any = {};
    if (message.allMembers) {
      obj.allMembers = message.allMembers.map((e) => e ? CSODOTAStaticLobbyMember.toJSON(e) : undefined);
    } else {
      obj.allMembers = [];
    }
    message.isPlayerDraft !== undefined && (obj.isPlayerDraft = message.isPlayerDraft);
    return obj;
  },

  create(base?: DeepPartial<CSODOTAStaticLobby>): CSODOTAStaticLobby {
    return CSODOTAStaticLobby.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSODOTAStaticLobby>): CSODOTAStaticLobby {
    const message = createBaseCSODOTAStaticLobby();
    message.allMembers = object.allMembers?.map((e) => CSODOTAStaticLobbyMember.fromPartial(e)) || [];
    message.isPlayerDraft = object.isPlayerDraft ?? false;
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

  fromJSON(object: any): CSODOTAServerStaticLobby {
    return {
      allMembers: Array.isArray(object?.allMembers)
        ? object.allMembers.map((e: any) => CSODOTAServerStaticLobbyMember.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSODOTAServerStaticLobby): unknown {
    const obj: any = {};
    if (message.allMembers) {
      obj.allMembers = message.allMembers.map((e) => e ? CSODOTAServerStaticLobbyMember.toJSON(e) : undefined);
    } else {
      obj.allMembers = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CSODOTAServerStaticLobby>): CSODOTAServerStaticLobby {
    return CSODOTAServerStaticLobby.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSODOTAServerStaticLobby>): CSODOTAServerStaticLobby {
    const message = createBaseCSODOTAServerStaticLobby();
    message.allMembers = object.allMembers?.map((e) => CSODOTAServerStaticLobbyMember.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgAdditionalLobbyStartupAccountData {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      plusData: isSet(object.plusData) ? CMsgLobbyPlayerPlusSubscriptionData.fromJSON(object.plusData) : undefined,
      unlockedChatWheelMessageRanges: Array.isArray(object?.unlockedChatWheelMessageRanges)
        ? object.unlockedChatWheelMessageRanges.map((e: any) =>
          CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange.fromJSON(e)
        )
        : [],
      unlockedPingWheelMessageRanges: Array.isArray(object?.unlockedPingWheelMessageRanges)
        ? object.unlockedPingWheelMessageRanges.map((e: any) =>
          CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CMsgAdditionalLobbyStartupAccountData): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.plusData !== undefined &&
      (obj.plusData = message.plusData ? CMsgLobbyPlayerPlusSubscriptionData.toJSON(message.plusData) : undefined);
    if (message.unlockedChatWheelMessageRanges) {
      obj.unlockedChatWheelMessageRanges = message.unlockedChatWheelMessageRanges.map((e) =>
        e ? CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange.toJSON(e) : undefined
      );
    } else {
      obj.unlockedChatWheelMessageRanges = [];
    }
    if (message.unlockedPingWheelMessageRanges) {
      obj.unlockedPingWheelMessageRanges = message.unlockedPingWheelMessageRanges.map((e) =>
        e ? CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange.toJSON(e) : undefined
      );
    } else {
      obj.unlockedPingWheelMessageRanges = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgAdditionalLobbyStartupAccountData>): CMsgAdditionalLobbyStartupAccountData {
    return CMsgAdditionalLobbyStartupAccountData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgAdditionalLobbyStartupAccountData>): CMsgAdditionalLobbyStartupAccountData {
    const message = createBaseCMsgAdditionalLobbyStartupAccountData();
    message.accountId = object.accountId ?? 0;
    message.plusData = (object.plusData !== undefined && object.plusData !== null)
      ? CMsgLobbyPlayerPlusSubscriptionData.fromPartial(object.plusData)
      : undefined;
    message.unlockedChatWheelMessageRanges =
      object.unlockedChatWheelMessageRanges?.map((e) =>
        CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange.fromPartial(e)
      ) || [];
    message.unlockedPingWheelMessageRanges =
      object.unlockedPingWheelMessageRanges?.map((e) =>
        CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange.fromPartial(e)
      ) || [];
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

  fromJSON(object: any): CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange {
    return {
      messageIdStart: isSet(object.messageIdStart) ? Number(object.messageIdStart) : 0,
      messageIdEnd: isSet(object.messageIdEnd) ? Number(object.messageIdEnd) : 0,
    };
  },

  toJSON(message: CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange): unknown {
    const obj: any = {};
    message.messageIdStart !== undefined && (obj.messageIdStart = Math.round(message.messageIdStart));
    message.messageIdEnd !== undefined && (obj.messageIdEnd = Math.round(message.messageIdEnd));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange>,
  ): CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange {
    return CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange>,
  ): CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange {
    const message = createBaseCMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange();
    message.messageIdStart = object.messageIdStart ?? 0;
    message.messageIdEnd = object.messageIdEnd ?? 0;
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

  fromJSON(object: any): CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange {
    return {
      messageIdStart: isSet(object.messageIdStart) ? Number(object.messageIdStart) : 0,
      messageIdEnd: isSet(object.messageIdEnd) ? Number(object.messageIdEnd) : 0,
    };
  },

  toJSON(message: CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange): unknown {
    const obj: any = {};
    message.messageIdStart !== undefined && (obj.messageIdStart = Math.round(message.messageIdStart));
    message.messageIdEnd !== undefined && (obj.messageIdEnd = Math.round(message.messageIdEnd));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange>,
  ): CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange {
    return CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange>,
  ): CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange {
    const message = createBaseCMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange();
    message.messageIdStart = object.messageIdStart ?? 0;
    message.messageIdEnd = object.messageIdEnd ?? 0;
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

  fromJSON(_: any): CMsgLobbyInitializationComplete {
    return {};
  },

  toJSON(_: CMsgLobbyInitializationComplete): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CMsgLobbyInitializationComplete>): CMsgLobbyInitializationComplete {
    return CMsgLobbyInitializationComplete.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CMsgLobbyInitializationComplete>): CMsgLobbyInitializationComplete {
    const message = createBaseCMsgLobbyInitializationComplete();
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

  fromJSON(object: any): CMsgLobbyPlaytestDetails {
    return { json: isSet(object.json) ? String(object.json) : "" };
  },

  toJSON(message: CMsgLobbyPlaytestDetails): unknown {
    const obj: any = {};
    message.json !== undefined && (obj.json = message.json);
    return obj;
  },

  create(base?: DeepPartial<CMsgLobbyPlaytestDetails>): CMsgLobbyPlaytestDetails {
    return CMsgLobbyPlaytestDetails.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgLobbyPlaytestDetails>): CMsgLobbyPlaytestDetails {
    const message = createBaseCMsgLobbyPlaytestDetails();
    message.json = object.json ?? "";
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

  fromJSON(object: any): CMsgLocalServerGuildData {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      guildPoints: isSet(object.guildPoints) ? Number(object.guildPoints) : 0,
      guildLogo: isSet(object.guildLogo) ? String(object.guildLogo) : "0",
      guildPrimaryColor: isSet(object.guildPrimaryColor) ? Number(object.guildPrimaryColor) : 0,
      guildSecondaryColor: isSet(object.guildSecondaryColor) ? Number(object.guildSecondaryColor) : 0,
      guildPattern: isSet(object.guildPattern) ? Number(object.guildPattern) : 0,
      guildFlags: isSet(object.guildFlags) ? Number(object.guildFlags) : 0,
      guildWeeklyPercentile: isSet(object.guildWeeklyPercentile) ? Number(object.guildWeeklyPercentile) : 0,
    };
  },

  toJSON(message: CMsgLocalServerGuildData): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.guildPoints !== undefined && (obj.guildPoints = Math.round(message.guildPoints));
    message.guildLogo !== undefined && (obj.guildLogo = message.guildLogo);
    message.guildPrimaryColor !== undefined && (obj.guildPrimaryColor = Math.round(message.guildPrimaryColor));
    message.guildSecondaryColor !== undefined && (obj.guildSecondaryColor = Math.round(message.guildSecondaryColor));
    message.guildPattern !== undefined && (obj.guildPattern = Math.round(message.guildPattern));
    message.guildFlags !== undefined && (obj.guildFlags = Math.round(message.guildFlags));
    message.guildWeeklyPercentile !== undefined &&
      (obj.guildWeeklyPercentile = Math.round(message.guildWeeklyPercentile));
    return obj;
  },

  create(base?: DeepPartial<CMsgLocalServerGuildData>): CMsgLocalServerGuildData {
    return CMsgLocalServerGuildData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgLocalServerGuildData>): CMsgLocalServerGuildData {
    const message = createBaseCMsgLocalServerGuildData();
    message.guildId = object.guildId ?? 0;
    message.eventId = object.eventId ?? 0;
    message.guildPoints = object.guildPoints ?? 0;
    message.guildLogo = object.guildLogo ?? "0";
    message.guildPrimaryColor = object.guildPrimaryColor ?? 0;
    message.guildSecondaryColor = object.guildSecondaryColor ?? 0;
    message.guildPattern = object.guildPattern ?? 0;
    message.guildFlags = object.guildFlags ?? 0;
    message.guildWeeklyPercentile = object.guildWeeklyPercentile ?? 0;
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

  fromJSON(object: any): CMsgLocalServerFakeLobbyData {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      eventPoints: Array.isArray(object?.eventPoints)
        ? object.eventPoints.map((e: any) => CMsgLobbyEventPoints.fromJSON(e))
        : [],
      isPlusSubscriber: isSet(object.isPlusSubscriber) ? Boolean(object.isPlusSubscriber) : false,
      primaryEventId: isSet(object.primaryEventId) ? Number(object.primaryEventId) : 0,
      favoriteTeam: isSet(object.favoriteTeam) ? Number(object.favoriteTeam) : 0,
      favoriteTeamQuality: isSet(object.favoriteTeamQuality) ? Number(object.favoriteTeamQuality) : 0,
      guildInfo: isSet(object.guildInfo) ? CMsgLocalServerGuildData.fromJSON(object.guildInfo) : undefined,
      teleportFxLevel: isSet(object.teleportFxLevel) ? Number(object.teleportFxLevel) : 0,
      additionalData: isSet(object.additionalData)
        ? CMsgAdditionalLobbyStartupAccountData.fromJSON(object.additionalData)
        : undefined,
    };
  },

  toJSON(message: CMsgLocalServerFakeLobbyData): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    if (message.eventPoints) {
      obj.eventPoints = message.eventPoints.map((e) => e ? CMsgLobbyEventPoints.toJSON(e) : undefined);
    } else {
      obj.eventPoints = [];
    }
    message.isPlusSubscriber !== undefined && (obj.isPlusSubscriber = message.isPlusSubscriber);
    message.primaryEventId !== undefined && (obj.primaryEventId = Math.round(message.primaryEventId));
    message.favoriteTeam !== undefined && (obj.favoriteTeam = Math.round(message.favoriteTeam));
    message.favoriteTeamQuality !== undefined && (obj.favoriteTeamQuality = Math.round(message.favoriteTeamQuality));
    message.guildInfo !== undefined &&
      (obj.guildInfo = message.guildInfo ? CMsgLocalServerGuildData.toJSON(message.guildInfo) : undefined);
    message.teleportFxLevel !== undefined && (obj.teleportFxLevel = Math.round(message.teleportFxLevel));
    message.additionalData !== undefined && (obj.additionalData = message.additionalData
      ? CMsgAdditionalLobbyStartupAccountData.toJSON(message.additionalData)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgLocalServerFakeLobbyData>): CMsgLocalServerFakeLobbyData {
    return CMsgLocalServerFakeLobbyData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgLocalServerFakeLobbyData>): CMsgLocalServerFakeLobbyData {
    const message = createBaseCMsgLocalServerFakeLobbyData();
    message.accountId = object.accountId ?? 0;
    message.eventPoints = object.eventPoints?.map((e) => CMsgLobbyEventPoints.fromPartial(e)) || [];
    message.isPlusSubscriber = object.isPlusSubscriber ?? false;
    message.primaryEventId = object.primaryEventId ?? 0;
    message.favoriteTeam = object.favoriteTeam ?? 0;
    message.favoriteTeamQuality = object.favoriteTeamQuality ?? 0;
    message.guildInfo = (object.guildInfo !== undefined && object.guildInfo !== null)
      ? CMsgLocalServerGuildData.fromPartial(object.guildInfo)
      : undefined;
    message.teleportFxLevel = object.teleportFxLevel ?? 0;
    message.additionalData = (object.additionalData !== undefined && object.additionalData !== null)
      ? CMsgAdditionalLobbyStartupAccountData.fromPartial(object.additionalData)
      : undefined;
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

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
