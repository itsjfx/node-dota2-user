/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  DOTAGameState,
  dOTAGameStateFromJSON,
  dOTAGameStateToJSON,
  ETourneyQueueDeadlineState,
  eTourneyQueueDeadlineStateFromJSON,
  eTourneyQueueDeadlineStateToJSON,
  MatchType,
  matchTypeFromJSON,
  matchTypeToJSON,
} from "./dota_shared_enums";

export enum ELaneSelection {
  k_ELaneSelection_SAFELANE = 0,
  k_ELaneSelection_OFFLANE = 1,
  k_ELaneSelection_MIDLANE = 2,
  k_ELaneSelection_SUPPORT_SOFT = 3,
  k_ELaneSelection_SUPPORT_HARD = 4,
}

export function eLaneSelectionFromJSON(object: any): ELaneSelection {
  switch (object) {
    case 0:
    case "k_ELaneSelection_SAFELANE":
      return ELaneSelection.k_ELaneSelection_SAFELANE;
    case 1:
    case "k_ELaneSelection_OFFLANE":
      return ELaneSelection.k_ELaneSelection_OFFLANE;
    case 2:
    case "k_ELaneSelection_MIDLANE":
      return ELaneSelection.k_ELaneSelection_MIDLANE;
    case 3:
    case "k_ELaneSelection_SUPPORT_SOFT":
      return ELaneSelection.k_ELaneSelection_SUPPORT_SOFT;
    case 4:
    case "k_ELaneSelection_SUPPORT_HARD":
      return ELaneSelection.k_ELaneSelection_SUPPORT_HARD;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELaneSelection");
  }
}

export function eLaneSelectionToJSON(object: ELaneSelection): string {
  switch (object) {
    case ELaneSelection.k_ELaneSelection_SAFELANE:
      return "k_ELaneSelection_SAFELANE";
    case ELaneSelection.k_ELaneSelection_OFFLANE:
      return "k_ELaneSelection_OFFLANE";
    case ELaneSelection.k_ELaneSelection_MIDLANE:
      return "k_ELaneSelection_MIDLANE";
    case ELaneSelection.k_ELaneSelection_SUPPORT_SOFT:
      return "k_ELaneSelection_SUPPORT_SOFT";
    case ELaneSelection.k_ELaneSelection_SUPPORT_HARD:
      return "k_ELaneSelection_SUPPORT_HARD";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELaneSelection");
  }
}

export enum ELaneSelectionFlags {
  k_ELaneSelectionFlags_None = 0,
  k_ELaneSelectionFlags_SAFELANE = 1,
  k_ELaneSelectionFlags_OFFLANE = 2,
  k_ELaneSelectionFlags_MIDLANE = 4,
  k_ELaneSelectionFlags_SUPPORT_SOFT = 8,
  k_ELaneSelectionFlags_SUPPORT_HARD = 16,
  k_ELaneSelectionFlags_CORE = 7,
  k_ELaneSelectionFlags_SUPPORT = 24,
  k_ELaneSelectionFlags_ALL = 31,
}

export function eLaneSelectionFlagsFromJSON(object: any): ELaneSelectionFlags {
  switch (object) {
    case 0:
    case "k_ELaneSelectionFlags_None":
      return ELaneSelectionFlags.k_ELaneSelectionFlags_None;
    case 1:
    case "k_ELaneSelectionFlags_SAFELANE":
      return ELaneSelectionFlags.k_ELaneSelectionFlags_SAFELANE;
    case 2:
    case "k_ELaneSelectionFlags_OFFLANE":
      return ELaneSelectionFlags.k_ELaneSelectionFlags_OFFLANE;
    case 4:
    case "k_ELaneSelectionFlags_MIDLANE":
      return ELaneSelectionFlags.k_ELaneSelectionFlags_MIDLANE;
    case 8:
    case "k_ELaneSelectionFlags_SUPPORT_SOFT":
      return ELaneSelectionFlags.k_ELaneSelectionFlags_SUPPORT_SOFT;
    case 16:
    case "k_ELaneSelectionFlags_SUPPORT_HARD":
      return ELaneSelectionFlags.k_ELaneSelectionFlags_SUPPORT_HARD;
    case 7:
    case "k_ELaneSelectionFlags_CORE":
      return ELaneSelectionFlags.k_ELaneSelectionFlags_CORE;
    case 24:
    case "k_ELaneSelectionFlags_SUPPORT":
      return ELaneSelectionFlags.k_ELaneSelectionFlags_SUPPORT;
    case 31:
    case "k_ELaneSelectionFlags_ALL":
      return ELaneSelectionFlags.k_ELaneSelectionFlags_ALL;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELaneSelectionFlags");
  }
}

export function eLaneSelectionFlagsToJSON(object: ELaneSelectionFlags): string {
  switch (object) {
    case ELaneSelectionFlags.k_ELaneSelectionFlags_None:
      return "k_ELaneSelectionFlags_None";
    case ELaneSelectionFlags.k_ELaneSelectionFlags_SAFELANE:
      return "k_ELaneSelectionFlags_SAFELANE";
    case ELaneSelectionFlags.k_ELaneSelectionFlags_OFFLANE:
      return "k_ELaneSelectionFlags_OFFLANE";
    case ELaneSelectionFlags.k_ELaneSelectionFlags_MIDLANE:
      return "k_ELaneSelectionFlags_MIDLANE";
    case ELaneSelectionFlags.k_ELaneSelectionFlags_SUPPORT_SOFT:
      return "k_ELaneSelectionFlags_SUPPORT_SOFT";
    case ELaneSelectionFlags.k_ELaneSelectionFlags_SUPPORT_HARD:
      return "k_ELaneSelectionFlags_SUPPORT_HARD";
    case ELaneSelectionFlags.k_ELaneSelectionFlags_CORE:
      return "k_ELaneSelectionFlags_CORE";
    case ELaneSelectionFlags.k_ELaneSelectionFlags_SUPPORT:
      return "k_ELaneSelectionFlags_SUPPORT";
    case ELaneSelectionFlags.k_ELaneSelectionFlags_ALL:
      return "k_ELaneSelectionFlags_ALL";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELaneSelectionFlags");
  }
}

export enum EPartyMatchmakingFlags {
  k_EPartyMatchmakingFlags_None = 0,
  k_EPartyMatchmakingFlags_LargeRankSpread = 1,
}

export function ePartyMatchmakingFlagsFromJSON(object: any): EPartyMatchmakingFlags {
  switch (object) {
    case 0:
    case "k_EPartyMatchmakingFlags_None":
      return EPartyMatchmakingFlags.k_EPartyMatchmakingFlags_None;
    case 1:
    case "k_EPartyMatchmakingFlags_LargeRankSpread":
      return EPartyMatchmakingFlags.k_EPartyMatchmakingFlags_LargeRankSpread;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EPartyMatchmakingFlags");
  }
}

export function ePartyMatchmakingFlagsToJSON(object: EPartyMatchmakingFlags): string {
  switch (object) {
    case EPartyMatchmakingFlags.k_EPartyMatchmakingFlags_None:
      return "k_EPartyMatchmakingFlags_None";
    case EPartyMatchmakingFlags.k_EPartyMatchmakingFlags_LargeRankSpread:
      return "k_EPartyMatchmakingFlags_LargeRankSpread";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EPartyMatchmakingFlags");
  }
}

export enum EHighPriorityMMState {
  k_EHighPriorityMM_Unknown = 0,
  k_EHighPriorityMM_MissingMMData = 1,
  k_EHighPriorityMM_ResourceMissing = 2,
  k_EHighPriorityMM_ManuallyDisabled = 3,
  k_EHighPriorityMM_Min_Enabled = 64,
  k_EHighPriorityMM_AllRolesSelected = 65,
  k_EHighPriorityMM_UsingResource = 66,
  k_EHighPriorityMM_FiveStack = 67,
  k_EHighPriorityMM_HighDemand = 68,
}

export function eHighPriorityMMStateFromJSON(object: any): EHighPriorityMMState {
  switch (object) {
    case 0:
    case "k_EHighPriorityMM_Unknown":
      return EHighPriorityMMState.k_EHighPriorityMM_Unknown;
    case 1:
    case "k_EHighPriorityMM_MissingMMData":
      return EHighPriorityMMState.k_EHighPriorityMM_MissingMMData;
    case 2:
    case "k_EHighPriorityMM_ResourceMissing":
      return EHighPriorityMMState.k_EHighPriorityMM_ResourceMissing;
    case 3:
    case "k_EHighPriorityMM_ManuallyDisabled":
      return EHighPriorityMMState.k_EHighPriorityMM_ManuallyDisabled;
    case 64:
    case "k_EHighPriorityMM_Min_Enabled":
      return EHighPriorityMMState.k_EHighPriorityMM_Min_Enabled;
    case 65:
    case "k_EHighPriorityMM_AllRolesSelected":
      return EHighPriorityMMState.k_EHighPriorityMM_AllRolesSelected;
    case 66:
    case "k_EHighPriorityMM_UsingResource":
      return EHighPriorityMMState.k_EHighPriorityMM_UsingResource;
    case 67:
    case "k_EHighPriorityMM_FiveStack":
      return EHighPriorityMMState.k_EHighPriorityMM_FiveStack;
    case 68:
    case "k_EHighPriorityMM_HighDemand":
      return EHighPriorityMMState.k_EHighPriorityMM_HighDemand;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EHighPriorityMMState");
  }
}

export function eHighPriorityMMStateToJSON(object: EHighPriorityMMState): string {
  switch (object) {
    case EHighPriorityMMState.k_EHighPriorityMM_Unknown:
      return "k_EHighPriorityMM_Unknown";
    case EHighPriorityMMState.k_EHighPriorityMM_MissingMMData:
      return "k_EHighPriorityMM_MissingMMData";
    case EHighPriorityMMState.k_EHighPriorityMM_ResourceMissing:
      return "k_EHighPriorityMM_ResourceMissing";
    case EHighPriorityMMState.k_EHighPriorityMM_ManuallyDisabled:
      return "k_EHighPriorityMM_ManuallyDisabled";
    case EHighPriorityMMState.k_EHighPriorityMM_Min_Enabled:
      return "k_EHighPriorityMM_Min_Enabled";
    case EHighPriorityMMState.k_EHighPriorityMM_AllRolesSelected:
      return "k_EHighPriorityMM_AllRolesSelected";
    case EHighPriorityMMState.k_EHighPriorityMM_UsingResource:
      return "k_EHighPriorityMM_UsingResource";
    case EHighPriorityMMState.k_EHighPriorityMM_FiveStack:
      return "k_EHighPriorityMM_FiveStack";
    case EHighPriorityMMState.k_EHighPriorityMM_HighDemand:
      return "k_EHighPriorityMM_HighDemand";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EHighPriorityMMState");
  }
}

export enum EReadyCheckStatus {
  k_EReadyCheckStatus_Unknown = 0,
  k_EReadyCheckStatus_NotReady = 1,
  k_EReadyCheckStatus_Ready = 2,
}

export function eReadyCheckStatusFromJSON(object: any): EReadyCheckStatus {
  switch (object) {
    case 0:
    case "k_EReadyCheckStatus_Unknown":
      return EReadyCheckStatus.k_EReadyCheckStatus_Unknown;
    case 1:
    case "k_EReadyCheckStatus_NotReady":
      return EReadyCheckStatus.k_EReadyCheckStatus_NotReady;
    case 2:
    case "k_EReadyCheckStatus_Ready":
      return EReadyCheckStatus.k_EReadyCheckStatus_Ready;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EReadyCheckStatus");
  }
}

export function eReadyCheckStatusToJSON(object: EReadyCheckStatus): string {
  switch (object) {
    case EReadyCheckStatus.k_EReadyCheckStatus_Unknown:
      return "k_EReadyCheckStatus_Unknown";
    case EReadyCheckStatus.k_EReadyCheckStatus_NotReady:
      return "k_EReadyCheckStatus_NotReady";
    case EReadyCheckStatus.k_EReadyCheckStatus_Ready:
      return "k_EReadyCheckStatus_Ready";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EReadyCheckStatus");
  }
}

export enum EReadyCheckRequestResult {
  k_EReadyCheckRequestResult_Success = 0,
  k_EReadyCheckRequestResult_AlreadyInProgress = 1,
  k_EReadyCheckRequestResult_NotInParty = 2,
  k_EReadyCheckRequestResult_SendError = 3,
  k_EReadyCheckRequestResult_UnknownError = 4,
}

export function eReadyCheckRequestResultFromJSON(object: any): EReadyCheckRequestResult {
  switch (object) {
    case 0:
    case "k_EReadyCheckRequestResult_Success":
      return EReadyCheckRequestResult.k_EReadyCheckRequestResult_Success;
    case 1:
    case "k_EReadyCheckRequestResult_AlreadyInProgress":
      return EReadyCheckRequestResult.k_EReadyCheckRequestResult_AlreadyInProgress;
    case 2:
    case "k_EReadyCheckRequestResult_NotInParty":
      return EReadyCheckRequestResult.k_EReadyCheckRequestResult_NotInParty;
    case 3:
    case "k_EReadyCheckRequestResult_SendError":
      return EReadyCheckRequestResult.k_EReadyCheckRequestResult_SendError;
    case 4:
    case "k_EReadyCheckRequestResult_UnknownError":
      return EReadyCheckRequestResult.k_EReadyCheckRequestResult_UnknownError;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EReadyCheckRequestResult");
  }
}

export function eReadyCheckRequestResultToJSON(object: EReadyCheckRequestResult): string {
  switch (object) {
    case EReadyCheckRequestResult.k_EReadyCheckRequestResult_Success:
      return "k_EReadyCheckRequestResult_Success";
    case EReadyCheckRequestResult.k_EReadyCheckRequestResult_AlreadyInProgress:
      return "k_EReadyCheckRequestResult_AlreadyInProgress";
    case EReadyCheckRequestResult.k_EReadyCheckRequestResult_NotInParty:
      return "k_EReadyCheckRequestResult_NotInParty";
    case EReadyCheckRequestResult.k_EReadyCheckRequestResult_SendError:
      return "k_EReadyCheckRequestResult_SendError";
    case EReadyCheckRequestResult.k_EReadyCheckRequestResult_UnknownError:
      return "k_EReadyCheckRequestResult_UnknownError";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EReadyCheckRequestResult");
  }
}

export enum EMatchBehaviorScoreVariance {
  k_EMatchBehaviorScoreVariance_Invalid = 0,
  k_EMatchBehaviorScoreVariance_Low = 1,
  k_EMatchBehaviorScoreVariance_Medium = 2,
  k_EMatchBehaviorScoreVariance_High = 3,
}

export function eMatchBehaviorScoreVarianceFromJSON(object: any): EMatchBehaviorScoreVariance {
  switch (object) {
    case 0:
    case "k_EMatchBehaviorScoreVariance_Invalid":
      return EMatchBehaviorScoreVariance.k_EMatchBehaviorScoreVariance_Invalid;
    case 1:
    case "k_EMatchBehaviorScoreVariance_Low":
      return EMatchBehaviorScoreVariance.k_EMatchBehaviorScoreVariance_Low;
    case 2:
    case "k_EMatchBehaviorScoreVariance_Medium":
      return EMatchBehaviorScoreVariance.k_EMatchBehaviorScoreVariance_Medium;
    case 3:
    case "k_EMatchBehaviorScoreVariance_High":
      return EMatchBehaviorScoreVariance.k_EMatchBehaviorScoreVariance_High;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EMatchBehaviorScoreVariance");
  }
}

export function eMatchBehaviorScoreVarianceToJSON(object: EMatchBehaviorScoreVariance): string {
  switch (object) {
    case EMatchBehaviorScoreVariance.k_EMatchBehaviorScoreVariance_Invalid:
      return "k_EMatchBehaviorScoreVariance_Invalid";
    case EMatchBehaviorScoreVariance.k_EMatchBehaviorScoreVariance_Low:
      return "k_EMatchBehaviorScoreVariance_Low";
    case EMatchBehaviorScoreVariance.k_EMatchBehaviorScoreVariance_Medium:
      return "k_EMatchBehaviorScoreVariance_Medium";
    case EMatchBehaviorScoreVariance.k_EMatchBehaviorScoreVariance_High:
      return "k_EMatchBehaviorScoreVariance_High";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EMatchBehaviorScoreVariance");
  }
}

export interface CSODOTAPartyMember {
  isCoach: boolean;
  regionPingCodes: number[];
  regionPingTimes: number[];
  regionPingFailedBitmask: number;
  isPlusSubscriber: boolean;
  tourneySkillLevel: number;
  tourneyBuyin: number;
  tourneyPreventUntil: number;
  mmDataValid: boolean;
  laneSelectionFlags: number;
  highPriorityDisabled: boolean;
  hasHpResource: boolean;
  joinedFromPartyfinder: boolean;
  isSteamChina: boolean;
}

export interface CSODOTAParty {
  partyId: string;
  leaderId: string;
  memberIds: string[];
  gameModes: number;
  state: CSODOTAParty_State;
  effectiveStartedMatchmakingTime: number;
  rawStartedMatchmakingTime: number;
  attemptStartTime: number;
  attemptNum: number;
  matchgroups: number;
  lowPriorityAccountId: number;
  matchType: MatchType;
  teamId: number;
  teamName: string;
  teamUiLogo: string;
  teamBaseLogo: string;
  matchDisabledUntilDate: number;
  matchDisabledAccountId: number;
  matchmakingMaxRangeMinutes: number;
  matchlanguages: number;
  members: CSODOTAPartyMember[];
  lowPriorityGamesRemaining: number;
  openForJoinRequests: boolean;
  sentInvites: CSODOTAPartyInvite[];
  recvInvites: CSODOTAPartyInvite[];
  accountFlags: number;
  regionSelectFlags: number;
  exclusiveTournamentId: number;
  tourneyDivisionId: number;
  tourneyScheduleTime: number;
  tourneySkillLevel: number;
  tourneyBracketRound: number;
  tourneyQueueDeadlineTime: number;
  tourneyQueueDeadlineState: ETourneyQueueDeadlineState;
  partyBuilderSlotsToFill: number;
  partyBuilderMatchGroups: number;
  partyBuilderStartTime: number;
  soloQueue: boolean;
  steamClanAccountId: number;
  readyCheck: CMsgReadyCheckStatus | undefined;
  customGameDisabledUntilDate: number;
  customGameDisabledAccountId: number;
  isChallengeMatch: boolean;
  partySearchBeaconActive: boolean;
  matchmakingFlags: number;
  highPriorityState: EHighPriorityMMState;
  laneSelectionsEnabled: boolean;
  customGameDifficultyMask: number;
  isSteamChina: boolean;
  botDifficultyMask: number;
  botScriptIndexMask: number;
}

export enum CSODOTAParty_State {
  UI = 0,
  FINDING_MATCH = 1,
  IN_MATCH = 2,
}

export function cSODOTAParty_StateFromJSON(object: any): CSODOTAParty_State {
  switch (object) {
    case 0:
    case "UI":
      return CSODOTAParty_State.UI;
    case 1:
    case "FINDING_MATCH":
      return CSODOTAParty_State.FINDING_MATCH;
    case 2:
    case "IN_MATCH":
      return CSODOTAParty_State.IN_MATCH;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CSODOTAParty_State");
  }
}

export function cSODOTAParty_StateToJSON(object: CSODOTAParty_State): string {
  switch (object) {
    case CSODOTAParty_State.UI:
      return "UI";
    case CSODOTAParty_State.FINDING_MATCH:
      return "FINDING_MATCH";
    case CSODOTAParty_State.IN_MATCH:
      return "IN_MATCH";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CSODOTAParty_State");
  }
}

export interface CSODOTAPartyInvite {
  groupId: string;
  senderId: string;
  senderName: string;
  members: CSODOTAPartyInvite_PartyMember[];
  teamId: number;
  lowPriorityStatus: boolean;
  asCoach: boolean;
  inviteGid: string;
}

export interface CSODOTAPartyInvite_PartyMember {
  name: string;
  steamId: string;
  isCoach: boolean;
}

export interface CMsgLeaverState {
  lobbyState: number;
  gameState: DOTAGameState;
  leaverDetected: boolean;
  firstBloodHappened: boolean;
  discardMatchResults: boolean;
  massDisconnect: boolean;
}

export interface CMsgReadyCheckStatus {
  startTimestamp: number;
  finishTimestamp: number;
  initiatorAccountId: number;
  readyMembers: CMsgReadyCheckStatus_ReadyMember[];
}

export interface CMsgReadyCheckStatus_ReadyMember {
  accountId: number;
  readyStatus: EReadyCheckStatus;
}

export interface CMsgPartyReadyCheckRequest {
}

export interface CMsgPartyReadyCheckResponse {
  result: EReadyCheckRequestResult;
}

export interface CMsgPartyReadyCheckAcknowledge {
  readyStatus: EReadyCheckStatus;
}

export interface CMsgLobbyEventGameDetails {
  kvData: Buffer;
}

export interface CMsgMatchMatchmakingStats {
  averageQueueTime: number;
  maximumQueueTime: number;
  behaviorScoreVariance: EMatchBehaviorScoreVariance;
}

export interface CMvpData {
  mvps: CMvpData_MvpDatum[];
}

export interface CMvpData_MvpDatum {
  playerSlot: number;
  accolades: CMvpData_MvpDatum_MvpAccolade[];
}

export interface CMvpData_MvpDatum_MvpAccolade {
  type: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
  detailValue: number;
}

export enum CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType {
  kills = 1,
  deaths = 2,
  assists = 3,
  net_worth = 5,
  item_value = 6,
  support_gold_spent = 7,
  wards_placed = 8,
  dewards = 9,
  camps_stacked = 10,
  last_hits = 11,
  denies = 12,
  kKillEaterEvent_Killing_Sprees = 13,
  kKillEaterEvent_Godlike = 14,
  kKillEaterEvent_Towers_Destroyed = 15,
  kKillEaterEventType_Invoker_SunstrikeKills = 16,
  kKillEaterEventType_Axe_Culls = 17,
  kKillEaterEventType_Axe_BattleHungerKills = 18,
  kKillEaterEventType_LowHealthKills = 19,
  kKillEaterEventType_Invoker_TornadoKills = 20,
  kKillEaterEventType_Sven_DoubleStuns = 21,
  kKillEaterEventType_Sven_WarcryAssists = 22,
  kKillEaterEventType_Sven_CleaveDoubleKills = 23,
  kKillEaterEventType_Sven_TeleportInterrupts = 24,
  kKillEaterEventType_Faceless_MultiChrono = 25,
  kKillEaterEventType_Faceless_ChronoKills = 26,
  kKillEaterEventType_Ursa_MultiShocks = 27,
  kKillEaterEventType_RoshanKills = 28,
  kKillEaterEventType_Lion_FingerKills = 29,
  kKillEaterEventType_Riki_SmokedHeroKills = 32,
  kKillEaterEventType_HeroesRevealedWithDust = 33,
  kKillEaterEventType_SkeletonKing_ReincarnationKills = 34,
  kKillEaterEventType_Skywrath_FlareKills = 35,
  kKillEaterEventType_Leshrac_SplitEarthStuns = 36,
  kKillEaterEventType_Mirana_MaxStunArrows = 37,
  kKillEaterEventType_PhantomAssassin_CoupdeGraceCrits = 38,
  kKillEaterEventType_PhantomAssassin_DaggerCrits = 39,
  kKillEaterEventType_Meepo_Earthbinds = 40,
  kKillEaterEventType_Bloodseeker_RuptureKills = 41,
  kKillEaterEventType_Slark_LeashedEnemies = 42,
  kKillEaterEventType_Disruptor_FountainGlimpses = 43,
  kKillEaterEventType_Rubick_SpellsStolen = 44,
  kKillEaterEventType_Rubick_UltimatesStolen = 45,
  kKillEaterEventType_Doom_EnemiesDoomed = 46,
  kKillEaterEventType_Omniknight_Purifications = 47,
  kKillEaterEventType_Omniknight_AlliesRepelled = 48,
  kKillEaterEventType_Omniknight_EnemiesRepelled = 49,
  kKillEaterEventType_Warlock_FiveHeroFatalBonds = 50,
  kKillEaterEventType_CrystalMaiden_FrostbittenEnemies = 51,
  kKillEaterEventType_CrystalMaiden_CrystalNovas = 52,
  kKillEaterEventType_Kunkka_DoubleHeroTorrents = 53,
  kKillEaterEventType_Kunkka_TripleHeroGhostShips = 54,
  kKillEaterEventType_NagaSiren_EnemiesEnsnared = 55,
  kKillEaterEventType_NagaSiren_TripleHeroRipTides = 56,
  kKillEaterEventType_Lycan_KillsDuringShapeshift = 57,
  kKillEaterEventType_Pudge_DismemberKills = 58,
  kKillEaterEventType_Pudge_EnemyHeroesHooked = 59,
  kKillEaterEventType_Pudge_HookKills = 60,
  kKillEaterEventType_Pudge_UnseenEnemyHeroesHooked = 61,
  kKillEaterEventType_DrowRanger_EnemiesSilenced = 62,
  kKillEaterEventType_DrowRanger_MultiHeroSilences = 63,
  kKillEaterEventType_DrowRanger_SilencedKills = 64,
  kKillEaterEventType_DrowRanger_FrostArrowKills = 65,
  kKillEaterEventType_DragonKnight_KillsInDragonForm = 66,
  kKillEaterEventType_DragonKnight_BreatheFireKills = 67,
  kKillEaterEventType_DragonKnight_SplashKills = 68,
  kKillEaterEventType_WitchDoctor_CaskStuns = 69,
  kKillEaterEventType_WitchDoctor_MaledictKills = 70,
  kKillEaterEventType_WitchDoctor_MultiHeroMaledicts = 71,
  kKillEaterEventType_WitchDoctor_DeathWardKills = 72,
  kKillEaterEventType_Disruptor_ThunderStrikeKills = 73,
  kKillEaterEventType_Disruptor_HeroesGlimpsed = 74,
  kKillEaterEventType_CrystalMaiden_FreezingFieldKills = 75,
  kKillEaterEventType_Medusa_EnemiesPetrified = 77,
  kKillEaterEventType_Warlock_FatalBondsKills = 78,
  kKillEaterEventType_Warlock_GolemKills = 79,
  kKillEaterEventType_Tusk_WalrusPunches = 80,
  kKillEaterEventType_Tusk_SnowballStuns = 81,
  kKillEaterEventType_Earthshaker_FissureStuns = 82,
  kKillEaterEventType_Earthshaker_3HeroEchoslams = 83,
  kKillEaterEventType_SandKing_BurrowstrikeStuns = 84,
  kKillEaterEventType_SandKing_EpicenterKills = 85,
  kKillEaterEventType_SkywrathMage_AncientSealKills = 86,
  kKillEaterEventType_SkywrathMage_ConcussiveShotKills = 87,
  kKillEaterEventType_Luna_LucentBeamKills = 88,
  kKillEaterEventType_Luna_EclipseKills = 89,
  kKillEaterEventType_KeeperOfTheLight_IlluminateKills = 90,
  kKillEaterEventType_KeeperOfTheLight_ManaLeakStuns = 91,
  kKillEaterEventType_KeeperOfTheLight_TeammatesRecalled = 92,
  kKillEaterEventType_LegionCommander_DuelsWon = 93,
  kKillEaterEventType_Beastmaster_RoarKills = 94,
  kKillEaterEventType_Beastmaster_RoarMultiKills = 95,
  kKillEaterEventType_Windrunner_FocusFireBuildings = 96,
  kKillEaterEventType_Windrunner_PowershotKills = 97,
  kKillEaterEventType_PhantomAssassin_DaggerLastHits = 98,
  kKillEaterEventType_PhantomAssassin_PhantomStrikeKills = 99,
  kKillEaterEventType_DeathProphet_CryptSwarmKills = 100,
  kKillEaterEventType_DeathProphet_ExorcismBuildingKills = 101,
  kKillEaterEventType_DeathProphet_ExorcismSpiritsSummoned = 102,
  kKillEaterEventType_DeathProphet_MultiHeroSilences = 103,
  kKillEaterEventType_Abaddon_MistCoilKills = 104,
  kKillEaterEventType_Abaddon_MistCoilHealed = 105,
  kKillEaterEventType_Abaddon_AphoticShieldKills = 106,
  kKillEaterEventType_Lich_ChainFrostTripleKills = 107,
  kKillEaterEventType_Lich_ChainFrostMultiKills = 108,
  kKillEaterEventType_Lich_ChainFrostBounces = 109,
  kKillEaterEventType_Ursa_EnragedKills = 110,
  kKillEaterEventType_Ursa_EarthshockKills = 111,
  kKillEaterEventType_Lina_LagunaBladeKills = 112,
  kKillEaterEventType_Lina_DragonSlaveKills = 113,
  kKillEaterEventType_Lina_LightStrikeArrayStuns = 114,
  kKillEaterEvent_Barracks_Destroyed = 115,
  kKillEaterEvent_TemplarAssassin_MeldKills = 116,
  kKillEaterEvent_TemplarAssassin_HeroesSlowed = 117,
  kKillEaterEvent_Sniper_AssassinationKills = 118,
  kKillEaterEvent_Sniper_HeadshotStuns = 119,
  kKillEaterEvent_EarthSpirit_SmashStuns = 120,
  kKillEaterEvent_EarthSpirit_GripSilences = 121,
  kKillEaterEvent_ShadowShaman_ShackleKills = 122,
  kKillEaterEvent_ShadowShaman_HexKills = 123,
  kKillEaterEvent_Centaur_EnemiesStomped = 124,
  kKillEaterEvent_Centaur_DoubleEdgeKills = 125,
  kKillEaterEvent_Centaur_ReturnKills = 126,
  kKillEaterEvent_EmberSpirit_EnemiesChained = 127,
  kKillEaterEvent_EmberSpirit_SleightOfFistMultiKills = 128,
  kKillEaterEvent_Puck_OrbKills = 129,
  kKillEaterEvent_VengefulSpirit_EnemiesStunned = 130,
  kKillEaterEvent_Lifestealer_RageKills = 131,
  kKillEaterEvent_Lifestealer_OpenWoundsKills = 132,
  kKillEaterEvent_Lifestealer_InfestKills = 133,
  kKillEaterEvent_ElderTitan_SpiritKills = 134,
  kKillEaterEvent_ElderTitan_GoodStomps = 135,
  kKillEaterEvent_Clockwerk_RocketKills = 136,
  kKillEaterEvent_Clockwerk_BlindRocketKills = 137,
  kKillEaterEvent_StormSpirit_BallKills = 138,
  kKillEaterEvent_StormSpirit_DoubleRemnantKills = 139,
  kKillEaterEvent_StormSpirit_VortexKills = 140,
  kKillEaterEvent_Tinker_DoubleMissileKills = 141,
  kKillEaterEvent_Tinker_LaserKills = 142,
  kKillEaterEvent_Techies_SuicideKills = 143,
  kKillEaterEvent_Techies_LandMineKills = 144,
  kKillEaterEvent_Techies_StatisTrapStuns = 145,
  kKillEaterEvent_Techies_RemoteMineKills = 146,
  kKillEaterEvent_ShadowFiend_TripleRazeKills = 147,
  kKillEaterEvent_ShadowFiend_RequiemMultiKills = 148,
  kKillEaterEvent_ShadowFiend_QRazeKills = 149,
  kKillEaterEvent_ShadowFiend_WRazeKills = 150,
  kKillEaterEvent_ShadowFiend_ERazeKills = 151,
  kKillEaterEvent_Oracle_FatesEdictKills = 152,
  kKillEaterEvent_Oracle_FalsePromiseSaves = 153,
  kKillEaterEvent_Juggernaut_OmnislashKills = 154,
  kKillEaterEventType_SkeletonKing_SkeletonHeroKills = 157,
  kKillEaterEventType_DarkWillow_CursedCrownTripleStuns = 158,
  kKillEaterEventType_Dazzle_ShallowGraveSaves = 159,
  kKillEaterEventType_Dazzle_PoisonTouchKills = 160,
  kKillEaterEventType_ThreeManMeks = 161,
  kKillEaterEventType_Viper_PoisonAttackKills = 162,
  kKillEaterEventType_Viper_CorrosiveSkinKills = 163,
  kKillEaterEventType_ThreeHeroVeils = 164,
  kKillEaterEventType_Viper_KillsDuringViperStrike = 165,
  kKillEaterEventType_SolarCrestKills = 166,
  kKillEaterEventType_Tiny_TreeThrowKills = 167,
  kKillEaterEventType_Riki_BackstabKills = 168,
  kKillEaterEventType_Phoenix_ThreeHeroSupernovaStuns = 169,
  kKillEaterEventType_Terrorblade_MetamorphosisKills = 170,
  kKillEaterEventType_Lion_GreatFingerKills = 171,
  kKillEaterEventType_Antimage_SpellsBlockedWithAghanims = 172,
  kKillEaterEventType_Antimage_ThreeManManaVoids = 173,
  kKillEaterEventType_ArcWarden_TempestDoubleKills = 174,
  kKillEaterEventType_ArcWarden_SparkWraithKills = 175,
  kKillEaterEventType_Bane_BrainSapKills = 176,
  kKillEaterEventType_Bane_FiendsGripKills = 177,
  kKillEaterEventType_Batrider_TripleHeroFlamebreaks = 178,
  kKillEaterEventType_Batrider_DoubleHeroLassoes = 179,
  kKillEaterEventType_Brewmaster_KillsDuringPrimalSplit = 180,
  kKillEaterEventType_Bristleback_KillsUnderFourQuillStacks = 181,
  kKillEaterEventType_Bristleback_TripleHeroNasalGoo = 182,
  kKillEaterEventType_Broodmother_SpiderlingHeroKills = 183,
  kKillEaterEventType_Broodmother_KillsInsideWeb = 184,
  kKillEaterEventType_Centaur_ThreeHeroStampede = 185,
  kKillEaterEventType_ChaosKnight_RealityRiftKills = 186,
  kKillEaterEventType_Chen_KillsWithPenitence = 187,
  kKillEaterEventType_CrystalMaiden_TwoHeroCrystalNovas = 188,
  kKillEaterEventType_CrystalMaiden_ThreeHeroFreezingFields = 189,
  kKillEaterEventType_Dazzle_ShadowWaveKills = 190,
  kKillEaterEventType_DeathProphet_SiphonKills = 191,
  kKillEaterEventType_DeathProphet_ExorcismKillsDuringEuls = 192,
  kKillEaterEventType_Disruptor_ThreeHeroKineticFieldStaticStorm = 193,
  kKillEaterEventType_Doom_InfernalBladeBurnKills = 194,
  kKillEaterEventType_DrowRanger_PrecisionAuraCreepTowerKills = 195,
  kKillEaterEventType_EmberSpirit_RemnantKills = 196,
  kKillEaterEventType_EmberSpirit_SleightOfFistKills = 197,
  kKillEaterEventType_Enigma_MidnightPulseBlackHoleCombos = 198,
  kKillEaterEventType_Enigma_ThreeManBlackHoles = 199,
  kKillEaterEventType_FacelessVoid_MultiHeroTimeDilation = 200,
  kKillEaterEventType_Gyrocopter_ThreeHeroFlakCannon = 201,
  kKillEaterEventType_Gyrocopter_HomingMissileKills = 202,
  kKillEaterEventType_Gyrocopter_RocketBarrageKills = 203,
  kKillEaterEventType_Huskar_KillsDuringLifeBreak = 204,
  kKillEaterEventType_Huskar_BurningSpearKills = 205,
  kKillEaterEventType_Invoker_MultiHeroIceWall = 206,
  kKillEaterEventType_Invoker_ThreeHeroEMP = 207,
  kKillEaterEventType_Invoker_ThreeHeroDeafeningBlast = 208,
  kKillEaterEventType_Invoker_MultiHeroChaosMeteor = 209,
  kKillEaterEventType_Jakiro_MultiHeroDualBreath = 210,
  kKillEaterEventType_Jakiro_IcePathMacropyreCombos = 211,
  kKillEaterEventType_Leshrac_PulseNovaKills = 212,
  kKillEaterEventType_Leshrac_ThreeHeroLightningStorm = 213,
  kKillEaterEventType_Lion_ThreeHeroFingerOfDeath = 214,
  kKillEaterEventType_Meepo_PoofKills = 215,
  kKillEaterEventType_Meepo_MultiHeroEarthbinds = 216,
  kKillEaterEventType_NightStalker_NighttimeKills = 217,
  kKillEaterEventType_Morphling_KillsDuringReplicate = 218,
  kKillEaterEventType_OgreMagi_FireblastKills = 219,
  kKillEaterEventType_OgreMagi_IgniteKills = 220,
  kKillEaterEventType_DominatingKillStreaks = 221,
  kKillEaterEventType_MegaKillStreaks = 222,
  kKillEaterEventType_Alchemist_AghanimsGiven = 223,
  kKillEaterEventType_VeilsLeadingToKills = 224,
  kKillEaterEventType_DustLeadingToKills = 225,
  kKillEaterEventType_WitchDoctor_MultiHeroCaskStuns = 226,
  kKillEaterEventType_Weaver_ShukuchiKills = 227,
  kKillEaterEventType_Windrunner_ShackleFocusFireKills = 228,
  kKillEaterEventType_VengefulSpirit_VengeanceAuraIllusionKills = 229,
  kKillEaterEventType_Tusk_WalrusPunchKills = 230,
  kKillEaterEventType_Tinker_MultiHeroLasers = 231,
  kKillEaterEventType_TemplarAssassin_MultiHeroPsiBlades = 232,
  kKillEaterEventType_Sven_KillsDuringGodsStrength = 233,
  kKillEaterEventType_Sniper_ThreeHeroShrapnels = 234,
  kKillEaterEventType_Slark_KillsDuringShadowDance = 235,
  kKillEaterEventType_ShadowShaman_MultiHeroEtherShocks = 236,
  kKillEaterEventType_ShadowShaman_SerpentWardShackleKills = 237,
  kKillEaterEventType_Riki_ThreeHeroTricksOfTheTrade = 238,
  kKillEaterEventType_Razor_EyeOfTheStormKills = 239,
  kKillEaterEventType_Pugna_LifeDrainKills = 240,
  kKillEaterEventType_ObsidianDestroyer_SanitysEclipseKills = 241,
  kKillEaterEventType_Oracle_MultiHeroFortunesEnd = 242,
  kKillEaterEventType_Omniknight_PurificationKills = 243,
  kKillEaterEventType_NightStalker_EnemyMissesUnderCripplingFear = 244,
  kKillEaterEventType_Warlock_ThreeHeroFatalBonds = 245,
  kKillEaterEventType_Riki_TricksOfTheTradeKills = 246,
  kKillEaterEventType_Earthshaker_AftershockHits10 = 247,
  kKillEaterEventType_Earthshaker_5HeroEchoslams = 248,
  kKillEaterEventType_Lina_LagunaBladeHeroKills = 249,
  kKillEaterEventType_Lina_LightStrikeHeroStuns = 250,
  kKillEaterEventType_Earthshaker_FissureMultiStuns = 251,
  kKillEaterEventType_Earthshaker_TotemKills = 252,
  kKillEaterEventType_Pangolier_SwashbuckleKills = 253,
  kKillEaterEventType_Furion_EnemyHeroesTrapped = 254,
  kKillEaterEventType_Pangolier_HeartpiercerKills = 255,
  kKillEaterEventType_Medusa_MultiHeroStoneGaze = 256,
  kKillEaterEventType_Medusa_SplitShotKills = 257,
  kKillEaterEventType_Mirana_MultiHeroStarstorm = 258,
  kKillEaterEventType_Mirana_KillsFromMoonlightShadow = 259,
  kKillEaterEventType_Magnus_MultiHeroSkewers = 260,
  kKillEaterEventType_Magnus_MultiHeroReversePolarity = 261,
  kKillEaterEventType_Magnus_HeroesSlowedWithShockwave = 262,
  kKillEaterEventType_NagaSiren_MultiHeroSong = 263,
  kKillEaterEventType_NagaSiren_AlliesHealedBySong = 264,
  kKillEaterEventType_LoneDruid_MultiHeroRoar = 265,
  kKillEaterEventType_LoneDruid_BattleCryKills = 266,
  kKillEaterEventType_WinterWyvern_ThreeHeroCurses = 267,
  kKillEaterEventType_Antimage_SpellsBlockedWithCounterspell = 268,
  kKillEaterEventType_Mars_EnemiesKilledInArena = 269,
  kKillEaterEventType_Mars_MultiHeroGodsRebuke = 270,
  kKillEaterEventType_Mars_GodsRebukeKills = 271,
  kKillEaterEventType_Snapfire_LizardBlobsKills = 272,
  kKillEaterEventType_Snapfire_TwoHeroCookieStuns = 273,
  Custom_KillStreak = 274,
  kKillEaterEventType_Muerta_DeadShotKills = 275,
  kKillEaterEventType_Muerta_PierceTheVeilKills = 276,
  kKillEaterEventType_Muerta_MultiHeroDeadShot = 277,
  kKillEaterEventType_Muerta_DeadShotsIntoTheCalling = 278,
}

export function cMvpData_MvpDatum_MvpAccolade_MvpAccoladeTypeFromJSON(
  object: any,
): CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType {
  switch (object) {
    case 1:
    case "kills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kills;
    case 2:
    case "deaths":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.deaths;
    case 3:
    case "assists":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.assists;
    case 5:
    case "net_worth":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.net_worth;
    case 6:
    case "item_value":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.item_value;
    case 7:
    case "support_gold_spent":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.support_gold_spent;
    case 8:
    case "wards_placed":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.wards_placed;
    case 9:
    case "dewards":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.dewards;
    case 10:
    case "camps_stacked":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.camps_stacked;
    case 11:
    case "last_hits":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.last_hits;
    case 12:
    case "denies":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.denies;
    case 13:
    case "kKillEaterEvent_Killing_Sprees":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Killing_Sprees;
    case 14:
    case "kKillEaterEvent_Godlike":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Godlike;
    case 15:
    case "kKillEaterEvent_Towers_Destroyed":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Towers_Destroyed;
    case 16:
    case "kKillEaterEventType_Invoker_SunstrikeKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Invoker_SunstrikeKills;
    case 17:
    case "kKillEaterEventType_Axe_Culls":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Axe_Culls;
    case 18:
    case "kKillEaterEventType_Axe_BattleHungerKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Axe_BattleHungerKills;
    case 19:
    case "kKillEaterEventType_LowHealthKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_LowHealthKills;
    case 20:
    case "kKillEaterEventType_Invoker_TornadoKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Invoker_TornadoKills;
    case 21:
    case "kKillEaterEventType_Sven_DoubleStuns":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Sven_DoubleStuns;
    case 22:
    case "kKillEaterEventType_Sven_WarcryAssists":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Sven_WarcryAssists;
    case 23:
    case "kKillEaterEventType_Sven_CleaveDoubleKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Sven_CleaveDoubleKills;
    case 24:
    case "kKillEaterEventType_Sven_TeleportInterrupts":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Sven_TeleportInterrupts;
    case 25:
    case "kKillEaterEventType_Faceless_MultiChrono":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Faceless_MultiChrono;
    case 26:
    case "kKillEaterEventType_Faceless_ChronoKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Faceless_ChronoKills;
    case 27:
    case "kKillEaterEventType_Ursa_MultiShocks":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Ursa_MultiShocks;
    case 28:
    case "kKillEaterEventType_RoshanKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_RoshanKills;
    case 29:
    case "kKillEaterEventType_Lion_FingerKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lion_FingerKills;
    case 32:
    case "kKillEaterEventType_Riki_SmokedHeroKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Riki_SmokedHeroKills;
    case 33:
    case "kKillEaterEventType_HeroesRevealedWithDust":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_HeroesRevealedWithDust;
    case 34:
    case "kKillEaterEventType_SkeletonKing_ReincarnationKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_SkeletonKing_ReincarnationKills;
    case 35:
    case "kKillEaterEventType_Skywrath_FlareKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Skywrath_FlareKills;
    case 36:
    case "kKillEaterEventType_Leshrac_SplitEarthStuns":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Leshrac_SplitEarthStuns;
    case 37:
    case "kKillEaterEventType_Mirana_MaxStunArrows":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Mirana_MaxStunArrows;
    case 38:
    case "kKillEaterEventType_PhantomAssassin_CoupdeGraceCrits":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_PhantomAssassin_CoupdeGraceCrits;
    case 39:
    case "kKillEaterEventType_PhantomAssassin_DaggerCrits":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_PhantomAssassin_DaggerCrits;
    case 40:
    case "kKillEaterEventType_Meepo_Earthbinds":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Meepo_Earthbinds;
    case 41:
    case "kKillEaterEventType_Bloodseeker_RuptureKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Bloodseeker_RuptureKills;
    case 42:
    case "kKillEaterEventType_Slark_LeashedEnemies":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Slark_LeashedEnemies;
    case 43:
    case "kKillEaterEventType_Disruptor_FountainGlimpses":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Disruptor_FountainGlimpses;
    case 44:
    case "kKillEaterEventType_Rubick_SpellsStolen":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Rubick_SpellsStolen;
    case 45:
    case "kKillEaterEventType_Rubick_UltimatesStolen":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Rubick_UltimatesStolen;
    case 46:
    case "kKillEaterEventType_Doom_EnemiesDoomed":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Doom_EnemiesDoomed;
    case 47:
    case "kKillEaterEventType_Omniknight_Purifications":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Omniknight_Purifications;
    case 48:
    case "kKillEaterEventType_Omniknight_AlliesRepelled":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Omniknight_AlliesRepelled;
    case 49:
    case "kKillEaterEventType_Omniknight_EnemiesRepelled":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Omniknight_EnemiesRepelled;
    case 50:
    case "kKillEaterEventType_Warlock_FiveHeroFatalBonds":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Warlock_FiveHeroFatalBonds;
    case 51:
    case "kKillEaterEventType_CrystalMaiden_FrostbittenEnemies":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_CrystalMaiden_FrostbittenEnemies;
    case 52:
    case "kKillEaterEventType_CrystalMaiden_CrystalNovas":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_CrystalMaiden_CrystalNovas;
    case 53:
    case "kKillEaterEventType_Kunkka_DoubleHeroTorrents":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Kunkka_DoubleHeroTorrents;
    case 54:
    case "kKillEaterEventType_Kunkka_TripleHeroGhostShips":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Kunkka_TripleHeroGhostShips;
    case 55:
    case "kKillEaterEventType_NagaSiren_EnemiesEnsnared":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_NagaSiren_EnemiesEnsnared;
    case 56:
    case "kKillEaterEventType_NagaSiren_TripleHeroRipTides":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_NagaSiren_TripleHeroRipTides;
    case 57:
    case "kKillEaterEventType_Lycan_KillsDuringShapeshift":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lycan_KillsDuringShapeshift;
    case 58:
    case "kKillEaterEventType_Pudge_DismemberKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Pudge_DismemberKills;
    case 59:
    case "kKillEaterEventType_Pudge_EnemyHeroesHooked":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Pudge_EnemyHeroesHooked;
    case 60:
    case "kKillEaterEventType_Pudge_HookKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Pudge_HookKills;
    case 61:
    case "kKillEaterEventType_Pudge_UnseenEnemyHeroesHooked":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Pudge_UnseenEnemyHeroesHooked;
    case 62:
    case "kKillEaterEventType_DrowRanger_EnemiesSilenced":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DrowRanger_EnemiesSilenced;
    case 63:
    case "kKillEaterEventType_DrowRanger_MultiHeroSilences":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DrowRanger_MultiHeroSilences;
    case 64:
    case "kKillEaterEventType_DrowRanger_SilencedKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DrowRanger_SilencedKills;
    case 65:
    case "kKillEaterEventType_DrowRanger_FrostArrowKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DrowRanger_FrostArrowKills;
    case 66:
    case "kKillEaterEventType_DragonKnight_KillsInDragonForm":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DragonKnight_KillsInDragonForm;
    case 67:
    case "kKillEaterEventType_DragonKnight_BreatheFireKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DragonKnight_BreatheFireKills;
    case 68:
    case "kKillEaterEventType_DragonKnight_SplashKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DragonKnight_SplashKills;
    case 69:
    case "kKillEaterEventType_WitchDoctor_CaskStuns":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_WitchDoctor_CaskStuns;
    case 70:
    case "kKillEaterEventType_WitchDoctor_MaledictKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_WitchDoctor_MaledictKills;
    case 71:
    case "kKillEaterEventType_WitchDoctor_MultiHeroMaledicts":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_WitchDoctor_MultiHeroMaledicts;
    case 72:
    case "kKillEaterEventType_WitchDoctor_DeathWardKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_WitchDoctor_DeathWardKills;
    case 73:
    case "kKillEaterEventType_Disruptor_ThunderStrikeKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Disruptor_ThunderStrikeKills;
    case 74:
    case "kKillEaterEventType_Disruptor_HeroesGlimpsed":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Disruptor_HeroesGlimpsed;
    case 75:
    case "kKillEaterEventType_CrystalMaiden_FreezingFieldKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_CrystalMaiden_FreezingFieldKills;
    case 77:
    case "kKillEaterEventType_Medusa_EnemiesPetrified":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Medusa_EnemiesPetrified;
    case 78:
    case "kKillEaterEventType_Warlock_FatalBondsKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Warlock_FatalBondsKills;
    case 79:
    case "kKillEaterEventType_Warlock_GolemKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Warlock_GolemKills;
    case 80:
    case "kKillEaterEventType_Tusk_WalrusPunches":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Tusk_WalrusPunches;
    case 81:
    case "kKillEaterEventType_Tusk_SnowballStuns":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Tusk_SnowballStuns;
    case 82:
    case "kKillEaterEventType_Earthshaker_FissureStuns":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Earthshaker_FissureStuns;
    case 83:
    case "kKillEaterEventType_Earthshaker_3HeroEchoslams":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Earthshaker_3HeroEchoslams;
    case 84:
    case "kKillEaterEventType_SandKing_BurrowstrikeStuns":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_SandKing_BurrowstrikeStuns;
    case 85:
    case "kKillEaterEventType_SandKing_EpicenterKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_SandKing_EpicenterKills;
    case 86:
    case "kKillEaterEventType_SkywrathMage_AncientSealKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_SkywrathMage_AncientSealKills;
    case 87:
    case "kKillEaterEventType_SkywrathMage_ConcussiveShotKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_SkywrathMage_ConcussiveShotKills;
    case 88:
    case "kKillEaterEventType_Luna_LucentBeamKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Luna_LucentBeamKills;
    case 89:
    case "kKillEaterEventType_Luna_EclipseKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Luna_EclipseKills;
    case 90:
    case "kKillEaterEventType_KeeperOfTheLight_IlluminateKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_KeeperOfTheLight_IlluminateKills;
    case 91:
    case "kKillEaterEventType_KeeperOfTheLight_ManaLeakStuns":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_KeeperOfTheLight_ManaLeakStuns;
    case 92:
    case "kKillEaterEventType_KeeperOfTheLight_TeammatesRecalled":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_KeeperOfTheLight_TeammatesRecalled;
    case 93:
    case "kKillEaterEventType_LegionCommander_DuelsWon":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_LegionCommander_DuelsWon;
    case 94:
    case "kKillEaterEventType_Beastmaster_RoarKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Beastmaster_RoarKills;
    case 95:
    case "kKillEaterEventType_Beastmaster_RoarMultiKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Beastmaster_RoarMultiKills;
    case 96:
    case "kKillEaterEventType_Windrunner_FocusFireBuildings":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Windrunner_FocusFireBuildings;
    case 97:
    case "kKillEaterEventType_Windrunner_PowershotKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Windrunner_PowershotKills;
    case 98:
    case "kKillEaterEventType_PhantomAssassin_DaggerLastHits":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_PhantomAssassin_DaggerLastHits;
    case 99:
    case "kKillEaterEventType_PhantomAssassin_PhantomStrikeKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_PhantomAssassin_PhantomStrikeKills;
    case 100:
    case "kKillEaterEventType_DeathProphet_CryptSwarmKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DeathProphet_CryptSwarmKills;
    case 101:
    case "kKillEaterEventType_DeathProphet_ExorcismBuildingKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DeathProphet_ExorcismBuildingKills;
    case 102:
    case "kKillEaterEventType_DeathProphet_ExorcismSpiritsSummoned":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DeathProphet_ExorcismSpiritsSummoned;
    case 103:
    case "kKillEaterEventType_DeathProphet_MultiHeroSilences":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DeathProphet_MultiHeroSilences;
    case 104:
    case "kKillEaterEventType_Abaddon_MistCoilKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Abaddon_MistCoilKills;
    case 105:
    case "kKillEaterEventType_Abaddon_MistCoilHealed":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Abaddon_MistCoilHealed;
    case 106:
    case "kKillEaterEventType_Abaddon_AphoticShieldKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Abaddon_AphoticShieldKills;
    case 107:
    case "kKillEaterEventType_Lich_ChainFrostTripleKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lich_ChainFrostTripleKills;
    case 108:
    case "kKillEaterEventType_Lich_ChainFrostMultiKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lich_ChainFrostMultiKills;
    case 109:
    case "kKillEaterEventType_Lich_ChainFrostBounces":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lich_ChainFrostBounces;
    case 110:
    case "kKillEaterEventType_Ursa_EnragedKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Ursa_EnragedKills;
    case 111:
    case "kKillEaterEventType_Ursa_EarthshockKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Ursa_EarthshockKills;
    case 112:
    case "kKillEaterEventType_Lina_LagunaBladeKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lina_LagunaBladeKills;
    case 113:
    case "kKillEaterEventType_Lina_DragonSlaveKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lina_DragonSlaveKills;
    case 114:
    case "kKillEaterEventType_Lina_LightStrikeArrayStuns":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lina_LightStrikeArrayStuns;
    case 115:
    case "kKillEaterEvent_Barracks_Destroyed":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Barracks_Destroyed;
    case 116:
    case "kKillEaterEvent_TemplarAssassin_MeldKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_TemplarAssassin_MeldKills;
    case 117:
    case "kKillEaterEvent_TemplarAssassin_HeroesSlowed":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_TemplarAssassin_HeroesSlowed;
    case 118:
    case "kKillEaterEvent_Sniper_AssassinationKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Sniper_AssassinationKills;
    case 119:
    case "kKillEaterEvent_Sniper_HeadshotStuns":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Sniper_HeadshotStuns;
    case 120:
    case "kKillEaterEvent_EarthSpirit_SmashStuns":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_EarthSpirit_SmashStuns;
    case 121:
    case "kKillEaterEvent_EarthSpirit_GripSilences":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_EarthSpirit_GripSilences;
    case 122:
    case "kKillEaterEvent_ShadowShaman_ShackleKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ShadowShaman_ShackleKills;
    case 123:
    case "kKillEaterEvent_ShadowShaman_HexKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ShadowShaman_HexKills;
    case 124:
    case "kKillEaterEvent_Centaur_EnemiesStomped":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Centaur_EnemiesStomped;
    case 125:
    case "kKillEaterEvent_Centaur_DoubleEdgeKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Centaur_DoubleEdgeKills;
    case 126:
    case "kKillEaterEvent_Centaur_ReturnKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Centaur_ReturnKills;
    case 127:
    case "kKillEaterEvent_EmberSpirit_EnemiesChained":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_EmberSpirit_EnemiesChained;
    case 128:
    case "kKillEaterEvent_EmberSpirit_SleightOfFistMultiKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_EmberSpirit_SleightOfFistMultiKills;
    case 129:
    case "kKillEaterEvent_Puck_OrbKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Puck_OrbKills;
    case 130:
    case "kKillEaterEvent_VengefulSpirit_EnemiesStunned":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_VengefulSpirit_EnemiesStunned;
    case 131:
    case "kKillEaterEvent_Lifestealer_RageKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Lifestealer_RageKills;
    case 132:
    case "kKillEaterEvent_Lifestealer_OpenWoundsKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Lifestealer_OpenWoundsKills;
    case 133:
    case "kKillEaterEvent_Lifestealer_InfestKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Lifestealer_InfestKills;
    case 134:
    case "kKillEaterEvent_ElderTitan_SpiritKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ElderTitan_SpiritKills;
    case 135:
    case "kKillEaterEvent_ElderTitan_GoodStomps":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ElderTitan_GoodStomps;
    case 136:
    case "kKillEaterEvent_Clockwerk_RocketKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Clockwerk_RocketKills;
    case 137:
    case "kKillEaterEvent_Clockwerk_BlindRocketKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Clockwerk_BlindRocketKills;
    case 138:
    case "kKillEaterEvent_StormSpirit_BallKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_StormSpirit_BallKills;
    case 139:
    case "kKillEaterEvent_StormSpirit_DoubleRemnantKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_StormSpirit_DoubleRemnantKills;
    case 140:
    case "kKillEaterEvent_StormSpirit_VortexKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_StormSpirit_VortexKills;
    case 141:
    case "kKillEaterEvent_Tinker_DoubleMissileKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Tinker_DoubleMissileKills;
    case 142:
    case "kKillEaterEvent_Tinker_LaserKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Tinker_LaserKills;
    case 143:
    case "kKillEaterEvent_Techies_SuicideKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Techies_SuicideKills;
    case 144:
    case "kKillEaterEvent_Techies_LandMineKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Techies_LandMineKills;
    case 145:
    case "kKillEaterEvent_Techies_StatisTrapStuns":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Techies_StatisTrapStuns;
    case 146:
    case "kKillEaterEvent_Techies_RemoteMineKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Techies_RemoteMineKills;
    case 147:
    case "kKillEaterEvent_ShadowFiend_TripleRazeKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ShadowFiend_TripleRazeKills;
    case 148:
    case "kKillEaterEvent_ShadowFiend_RequiemMultiKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ShadowFiend_RequiemMultiKills;
    case 149:
    case "kKillEaterEvent_ShadowFiend_QRazeKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ShadowFiend_QRazeKills;
    case 150:
    case "kKillEaterEvent_ShadowFiend_WRazeKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ShadowFiend_WRazeKills;
    case 151:
    case "kKillEaterEvent_ShadowFiend_ERazeKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ShadowFiend_ERazeKills;
    case 152:
    case "kKillEaterEvent_Oracle_FatesEdictKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Oracle_FatesEdictKills;
    case 153:
    case "kKillEaterEvent_Oracle_FalsePromiseSaves":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Oracle_FalsePromiseSaves;
    case 154:
    case "kKillEaterEvent_Juggernaut_OmnislashKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Juggernaut_OmnislashKills;
    case 157:
    case "kKillEaterEventType_SkeletonKing_SkeletonHeroKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_SkeletonKing_SkeletonHeroKills;
    case 158:
    case "kKillEaterEventType_DarkWillow_CursedCrownTripleStuns":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DarkWillow_CursedCrownTripleStuns;
    case 159:
    case "kKillEaterEventType_Dazzle_ShallowGraveSaves":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Dazzle_ShallowGraveSaves;
    case 160:
    case "kKillEaterEventType_Dazzle_PoisonTouchKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Dazzle_PoisonTouchKills;
    case 161:
    case "kKillEaterEventType_ThreeManMeks":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_ThreeManMeks;
    case 162:
    case "kKillEaterEventType_Viper_PoisonAttackKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Viper_PoisonAttackKills;
    case 163:
    case "kKillEaterEventType_Viper_CorrosiveSkinKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Viper_CorrosiveSkinKills;
    case 164:
    case "kKillEaterEventType_ThreeHeroVeils":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_ThreeHeroVeils;
    case 165:
    case "kKillEaterEventType_Viper_KillsDuringViperStrike":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Viper_KillsDuringViperStrike;
    case 166:
    case "kKillEaterEventType_SolarCrestKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_SolarCrestKills;
    case 167:
    case "kKillEaterEventType_Tiny_TreeThrowKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Tiny_TreeThrowKills;
    case 168:
    case "kKillEaterEventType_Riki_BackstabKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Riki_BackstabKills;
    case 169:
    case "kKillEaterEventType_Phoenix_ThreeHeroSupernovaStuns":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Phoenix_ThreeHeroSupernovaStuns;
    case 170:
    case "kKillEaterEventType_Terrorblade_MetamorphosisKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Terrorblade_MetamorphosisKills;
    case 171:
    case "kKillEaterEventType_Lion_GreatFingerKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lion_GreatFingerKills;
    case 172:
    case "kKillEaterEventType_Antimage_SpellsBlockedWithAghanims":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Antimage_SpellsBlockedWithAghanims;
    case 173:
    case "kKillEaterEventType_Antimage_ThreeManManaVoids":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Antimage_ThreeManManaVoids;
    case 174:
    case "kKillEaterEventType_ArcWarden_TempestDoubleKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_ArcWarden_TempestDoubleKills;
    case 175:
    case "kKillEaterEventType_ArcWarden_SparkWraithKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_ArcWarden_SparkWraithKills;
    case 176:
    case "kKillEaterEventType_Bane_BrainSapKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Bane_BrainSapKills;
    case 177:
    case "kKillEaterEventType_Bane_FiendsGripKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Bane_FiendsGripKills;
    case 178:
    case "kKillEaterEventType_Batrider_TripleHeroFlamebreaks":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Batrider_TripleHeroFlamebreaks;
    case 179:
    case "kKillEaterEventType_Batrider_DoubleHeroLassoes":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Batrider_DoubleHeroLassoes;
    case 180:
    case "kKillEaterEventType_Brewmaster_KillsDuringPrimalSplit":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Brewmaster_KillsDuringPrimalSplit;
    case 181:
    case "kKillEaterEventType_Bristleback_KillsUnderFourQuillStacks":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Bristleback_KillsUnderFourQuillStacks;
    case 182:
    case "kKillEaterEventType_Bristleback_TripleHeroNasalGoo":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Bristleback_TripleHeroNasalGoo;
    case 183:
    case "kKillEaterEventType_Broodmother_SpiderlingHeroKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Broodmother_SpiderlingHeroKills;
    case 184:
    case "kKillEaterEventType_Broodmother_KillsInsideWeb":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Broodmother_KillsInsideWeb;
    case 185:
    case "kKillEaterEventType_Centaur_ThreeHeroStampede":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Centaur_ThreeHeroStampede;
    case 186:
    case "kKillEaterEventType_ChaosKnight_RealityRiftKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_ChaosKnight_RealityRiftKills;
    case 187:
    case "kKillEaterEventType_Chen_KillsWithPenitence":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Chen_KillsWithPenitence;
    case 188:
    case "kKillEaterEventType_CrystalMaiden_TwoHeroCrystalNovas":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_CrystalMaiden_TwoHeroCrystalNovas;
    case 189:
    case "kKillEaterEventType_CrystalMaiden_ThreeHeroFreezingFields":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_CrystalMaiden_ThreeHeroFreezingFields;
    case 190:
    case "kKillEaterEventType_Dazzle_ShadowWaveKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Dazzle_ShadowWaveKills;
    case 191:
    case "kKillEaterEventType_DeathProphet_SiphonKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DeathProphet_SiphonKills;
    case 192:
    case "kKillEaterEventType_DeathProphet_ExorcismKillsDuringEuls":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DeathProphet_ExorcismKillsDuringEuls;
    case 193:
    case "kKillEaterEventType_Disruptor_ThreeHeroKineticFieldStaticStorm":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType
        .kKillEaterEventType_Disruptor_ThreeHeroKineticFieldStaticStorm;
    case 194:
    case "kKillEaterEventType_Doom_InfernalBladeBurnKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Doom_InfernalBladeBurnKills;
    case 195:
    case "kKillEaterEventType_DrowRanger_PrecisionAuraCreepTowerKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DrowRanger_PrecisionAuraCreepTowerKills;
    case 196:
    case "kKillEaterEventType_EmberSpirit_RemnantKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_EmberSpirit_RemnantKills;
    case 197:
    case "kKillEaterEventType_EmberSpirit_SleightOfFistKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_EmberSpirit_SleightOfFistKills;
    case 198:
    case "kKillEaterEventType_Enigma_MidnightPulseBlackHoleCombos":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Enigma_MidnightPulseBlackHoleCombos;
    case 199:
    case "kKillEaterEventType_Enigma_ThreeManBlackHoles":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Enigma_ThreeManBlackHoles;
    case 200:
    case "kKillEaterEventType_FacelessVoid_MultiHeroTimeDilation":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_FacelessVoid_MultiHeroTimeDilation;
    case 201:
    case "kKillEaterEventType_Gyrocopter_ThreeHeroFlakCannon":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Gyrocopter_ThreeHeroFlakCannon;
    case 202:
    case "kKillEaterEventType_Gyrocopter_HomingMissileKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Gyrocopter_HomingMissileKills;
    case 203:
    case "kKillEaterEventType_Gyrocopter_RocketBarrageKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Gyrocopter_RocketBarrageKills;
    case 204:
    case "kKillEaterEventType_Huskar_KillsDuringLifeBreak":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Huskar_KillsDuringLifeBreak;
    case 205:
    case "kKillEaterEventType_Huskar_BurningSpearKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Huskar_BurningSpearKills;
    case 206:
    case "kKillEaterEventType_Invoker_MultiHeroIceWall":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Invoker_MultiHeroIceWall;
    case 207:
    case "kKillEaterEventType_Invoker_ThreeHeroEMP":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Invoker_ThreeHeroEMP;
    case 208:
    case "kKillEaterEventType_Invoker_ThreeHeroDeafeningBlast":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Invoker_ThreeHeroDeafeningBlast;
    case 209:
    case "kKillEaterEventType_Invoker_MultiHeroChaosMeteor":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Invoker_MultiHeroChaosMeteor;
    case 210:
    case "kKillEaterEventType_Jakiro_MultiHeroDualBreath":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Jakiro_MultiHeroDualBreath;
    case 211:
    case "kKillEaterEventType_Jakiro_IcePathMacropyreCombos":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Jakiro_IcePathMacropyreCombos;
    case 212:
    case "kKillEaterEventType_Leshrac_PulseNovaKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Leshrac_PulseNovaKills;
    case 213:
    case "kKillEaterEventType_Leshrac_ThreeHeroLightningStorm":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Leshrac_ThreeHeroLightningStorm;
    case 214:
    case "kKillEaterEventType_Lion_ThreeHeroFingerOfDeath":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lion_ThreeHeroFingerOfDeath;
    case 215:
    case "kKillEaterEventType_Meepo_PoofKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Meepo_PoofKills;
    case 216:
    case "kKillEaterEventType_Meepo_MultiHeroEarthbinds":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Meepo_MultiHeroEarthbinds;
    case 217:
    case "kKillEaterEventType_NightStalker_NighttimeKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_NightStalker_NighttimeKills;
    case 218:
    case "kKillEaterEventType_Morphling_KillsDuringReplicate":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Morphling_KillsDuringReplicate;
    case 219:
    case "kKillEaterEventType_OgreMagi_FireblastKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_OgreMagi_FireblastKills;
    case 220:
    case "kKillEaterEventType_OgreMagi_IgniteKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_OgreMagi_IgniteKills;
    case 221:
    case "kKillEaterEventType_DominatingKillStreaks":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DominatingKillStreaks;
    case 222:
    case "kKillEaterEventType_MegaKillStreaks":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_MegaKillStreaks;
    case 223:
    case "kKillEaterEventType_Alchemist_AghanimsGiven":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Alchemist_AghanimsGiven;
    case 224:
    case "kKillEaterEventType_VeilsLeadingToKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_VeilsLeadingToKills;
    case 225:
    case "kKillEaterEventType_DustLeadingToKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DustLeadingToKills;
    case 226:
    case "kKillEaterEventType_WitchDoctor_MultiHeroCaskStuns":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_WitchDoctor_MultiHeroCaskStuns;
    case 227:
    case "kKillEaterEventType_Weaver_ShukuchiKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Weaver_ShukuchiKills;
    case 228:
    case "kKillEaterEventType_Windrunner_ShackleFocusFireKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Windrunner_ShackleFocusFireKills;
    case 229:
    case "kKillEaterEventType_VengefulSpirit_VengeanceAuraIllusionKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType
        .kKillEaterEventType_VengefulSpirit_VengeanceAuraIllusionKills;
    case 230:
    case "kKillEaterEventType_Tusk_WalrusPunchKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Tusk_WalrusPunchKills;
    case 231:
    case "kKillEaterEventType_Tinker_MultiHeroLasers":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Tinker_MultiHeroLasers;
    case 232:
    case "kKillEaterEventType_TemplarAssassin_MultiHeroPsiBlades":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_TemplarAssassin_MultiHeroPsiBlades;
    case 233:
    case "kKillEaterEventType_Sven_KillsDuringGodsStrength":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Sven_KillsDuringGodsStrength;
    case 234:
    case "kKillEaterEventType_Sniper_ThreeHeroShrapnels":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Sniper_ThreeHeroShrapnels;
    case 235:
    case "kKillEaterEventType_Slark_KillsDuringShadowDance":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Slark_KillsDuringShadowDance;
    case 236:
    case "kKillEaterEventType_ShadowShaman_MultiHeroEtherShocks":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_ShadowShaman_MultiHeroEtherShocks;
    case 237:
    case "kKillEaterEventType_ShadowShaman_SerpentWardShackleKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_ShadowShaman_SerpentWardShackleKills;
    case 238:
    case "kKillEaterEventType_Riki_ThreeHeroTricksOfTheTrade":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Riki_ThreeHeroTricksOfTheTrade;
    case 239:
    case "kKillEaterEventType_Razor_EyeOfTheStormKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Razor_EyeOfTheStormKills;
    case 240:
    case "kKillEaterEventType_Pugna_LifeDrainKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Pugna_LifeDrainKills;
    case 241:
    case "kKillEaterEventType_ObsidianDestroyer_SanitysEclipseKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_ObsidianDestroyer_SanitysEclipseKills;
    case 242:
    case "kKillEaterEventType_Oracle_MultiHeroFortunesEnd":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Oracle_MultiHeroFortunesEnd;
    case 243:
    case "kKillEaterEventType_Omniknight_PurificationKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Omniknight_PurificationKills;
    case 244:
    case "kKillEaterEventType_NightStalker_EnemyMissesUnderCripplingFear":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType
        .kKillEaterEventType_NightStalker_EnemyMissesUnderCripplingFear;
    case 245:
    case "kKillEaterEventType_Warlock_ThreeHeroFatalBonds":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Warlock_ThreeHeroFatalBonds;
    case 246:
    case "kKillEaterEventType_Riki_TricksOfTheTradeKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Riki_TricksOfTheTradeKills;
    case 247:
    case "kKillEaterEventType_Earthshaker_AftershockHits10":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Earthshaker_AftershockHits10;
    case 248:
    case "kKillEaterEventType_Earthshaker_5HeroEchoslams":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Earthshaker_5HeroEchoslams;
    case 249:
    case "kKillEaterEventType_Lina_LagunaBladeHeroKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lina_LagunaBladeHeroKills;
    case 250:
    case "kKillEaterEventType_Lina_LightStrikeHeroStuns":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lina_LightStrikeHeroStuns;
    case 251:
    case "kKillEaterEventType_Earthshaker_FissureMultiStuns":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Earthshaker_FissureMultiStuns;
    case 252:
    case "kKillEaterEventType_Earthshaker_TotemKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Earthshaker_TotemKills;
    case 253:
    case "kKillEaterEventType_Pangolier_SwashbuckleKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Pangolier_SwashbuckleKills;
    case 254:
    case "kKillEaterEventType_Furion_EnemyHeroesTrapped":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Furion_EnemyHeroesTrapped;
    case 255:
    case "kKillEaterEventType_Pangolier_HeartpiercerKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Pangolier_HeartpiercerKills;
    case 256:
    case "kKillEaterEventType_Medusa_MultiHeroStoneGaze":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Medusa_MultiHeroStoneGaze;
    case 257:
    case "kKillEaterEventType_Medusa_SplitShotKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Medusa_SplitShotKills;
    case 258:
    case "kKillEaterEventType_Mirana_MultiHeroStarstorm":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Mirana_MultiHeroStarstorm;
    case 259:
    case "kKillEaterEventType_Mirana_KillsFromMoonlightShadow":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Mirana_KillsFromMoonlightShadow;
    case 260:
    case "kKillEaterEventType_Magnus_MultiHeroSkewers":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Magnus_MultiHeroSkewers;
    case 261:
    case "kKillEaterEventType_Magnus_MultiHeroReversePolarity":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Magnus_MultiHeroReversePolarity;
    case 262:
    case "kKillEaterEventType_Magnus_HeroesSlowedWithShockwave":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Magnus_HeroesSlowedWithShockwave;
    case 263:
    case "kKillEaterEventType_NagaSiren_MultiHeroSong":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_NagaSiren_MultiHeroSong;
    case 264:
    case "kKillEaterEventType_NagaSiren_AlliesHealedBySong":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_NagaSiren_AlliesHealedBySong;
    case 265:
    case "kKillEaterEventType_LoneDruid_MultiHeroRoar":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_LoneDruid_MultiHeroRoar;
    case 266:
    case "kKillEaterEventType_LoneDruid_BattleCryKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_LoneDruid_BattleCryKills;
    case 267:
    case "kKillEaterEventType_WinterWyvern_ThreeHeroCurses":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_WinterWyvern_ThreeHeroCurses;
    case 268:
    case "kKillEaterEventType_Antimage_SpellsBlockedWithCounterspell":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Antimage_SpellsBlockedWithCounterspell;
    case 269:
    case "kKillEaterEventType_Mars_EnemiesKilledInArena":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Mars_EnemiesKilledInArena;
    case 270:
    case "kKillEaterEventType_Mars_MultiHeroGodsRebuke":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Mars_MultiHeroGodsRebuke;
    case 271:
    case "kKillEaterEventType_Mars_GodsRebukeKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Mars_GodsRebukeKills;
    case 272:
    case "kKillEaterEventType_Snapfire_LizardBlobsKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Snapfire_LizardBlobsKills;
    case 273:
    case "kKillEaterEventType_Snapfire_TwoHeroCookieStuns":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Snapfire_TwoHeroCookieStuns;
    case 274:
    case "Custom_KillStreak":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.Custom_KillStreak;
    case 275:
    case "kKillEaterEventType_Muerta_DeadShotKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Muerta_DeadShotKills;
    case 276:
    case "kKillEaterEventType_Muerta_PierceTheVeilKills":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Muerta_PierceTheVeilKills;
    case 277:
    case "kKillEaterEventType_Muerta_MultiHeroDeadShot":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Muerta_MultiHeroDeadShot;
    case 278:
    case "kKillEaterEventType_Muerta_DeadShotsIntoTheCalling":
      return CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Muerta_DeadShotsIntoTheCalling;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType",
      );
  }
}

export function cMvpData_MvpDatum_MvpAccolade_MvpAccoladeTypeToJSON(
  object: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType,
): string {
  switch (object) {
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kills:
      return "kills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.deaths:
      return "deaths";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.assists:
      return "assists";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.net_worth:
      return "net_worth";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.item_value:
      return "item_value";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.support_gold_spent:
      return "support_gold_spent";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.wards_placed:
      return "wards_placed";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.dewards:
      return "dewards";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.camps_stacked:
      return "camps_stacked";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.last_hits:
      return "last_hits";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.denies:
      return "denies";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Killing_Sprees:
      return "kKillEaterEvent_Killing_Sprees";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Godlike:
      return "kKillEaterEvent_Godlike";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Towers_Destroyed:
      return "kKillEaterEvent_Towers_Destroyed";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Invoker_SunstrikeKills:
      return "kKillEaterEventType_Invoker_SunstrikeKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Axe_Culls:
      return "kKillEaterEventType_Axe_Culls";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Axe_BattleHungerKills:
      return "kKillEaterEventType_Axe_BattleHungerKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_LowHealthKills:
      return "kKillEaterEventType_LowHealthKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Invoker_TornadoKills:
      return "kKillEaterEventType_Invoker_TornadoKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Sven_DoubleStuns:
      return "kKillEaterEventType_Sven_DoubleStuns";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Sven_WarcryAssists:
      return "kKillEaterEventType_Sven_WarcryAssists";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Sven_CleaveDoubleKills:
      return "kKillEaterEventType_Sven_CleaveDoubleKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Sven_TeleportInterrupts:
      return "kKillEaterEventType_Sven_TeleportInterrupts";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Faceless_MultiChrono:
      return "kKillEaterEventType_Faceless_MultiChrono";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Faceless_ChronoKills:
      return "kKillEaterEventType_Faceless_ChronoKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Ursa_MultiShocks:
      return "kKillEaterEventType_Ursa_MultiShocks";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_RoshanKills:
      return "kKillEaterEventType_RoshanKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lion_FingerKills:
      return "kKillEaterEventType_Lion_FingerKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Riki_SmokedHeroKills:
      return "kKillEaterEventType_Riki_SmokedHeroKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_HeroesRevealedWithDust:
      return "kKillEaterEventType_HeroesRevealedWithDust";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_SkeletonKing_ReincarnationKills:
      return "kKillEaterEventType_SkeletonKing_ReincarnationKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Skywrath_FlareKills:
      return "kKillEaterEventType_Skywrath_FlareKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Leshrac_SplitEarthStuns:
      return "kKillEaterEventType_Leshrac_SplitEarthStuns";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Mirana_MaxStunArrows:
      return "kKillEaterEventType_Mirana_MaxStunArrows";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_PhantomAssassin_CoupdeGraceCrits:
      return "kKillEaterEventType_PhantomAssassin_CoupdeGraceCrits";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_PhantomAssassin_DaggerCrits:
      return "kKillEaterEventType_PhantomAssassin_DaggerCrits";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Meepo_Earthbinds:
      return "kKillEaterEventType_Meepo_Earthbinds";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Bloodseeker_RuptureKills:
      return "kKillEaterEventType_Bloodseeker_RuptureKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Slark_LeashedEnemies:
      return "kKillEaterEventType_Slark_LeashedEnemies";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Disruptor_FountainGlimpses:
      return "kKillEaterEventType_Disruptor_FountainGlimpses";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Rubick_SpellsStolen:
      return "kKillEaterEventType_Rubick_SpellsStolen";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Rubick_UltimatesStolen:
      return "kKillEaterEventType_Rubick_UltimatesStolen";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Doom_EnemiesDoomed:
      return "kKillEaterEventType_Doom_EnemiesDoomed";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Omniknight_Purifications:
      return "kKillEaterEventType_Omniknight_Purifications";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Omniknight_AlliesRepelled:
      return "kKillEaterEventType_Omniknight_AlliesRepelled";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Omniknight_EnemiesRepelled:
      return "kKillEaterEventType_Omniknight_EnemiesRepelled";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Warlock_FiveHeroFatalBonds:
      return "kKillEaterEventType_Warlock_FiveHeroFatalBonds";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_CrystalMaiden_FrostbittenEnemies:
      return "kKillEaterEventType_CrystalMaiden_FrostbittenEnemies";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_CrystalMaiden_CrystalNovas:
      return "kKillEaterEventType_CrystalMaiden_CrystalNovas";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Kunkka_DoubleHeroTorrents:
      return "kKillEaterEventType_Kunkka_DoubleHeroTorrents";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Kunkka_TripleHeroGhostShips:
      return "kKillEaterEventType_Kunkka_TripleHeroGhostShips";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_NagaSiren_EnemiesEnsnared:
      return "kKillEaterEventType_NagaSiren_EnemiesEnsnared";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_NagaSiren_TripleHeroRipTides:
      return "kKillEaterEventType_NagaSiren_TripleHeroRipTides";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lycan_KillsDuringShapeshift:
      return "kKillEaterEventType_Lycan_KillsDuringShapeshift";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Pudge_DismemberKills:
      return "kKillEaterEventType_Pudge_DismemberKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Pudge_EnemyHeroesHooked:
      return "kKillEaterEventType_Pudge_EnemyHeroesHooked";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Pudge_HookKills:
      return "kKillEaterEventType_Pudge_HookKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Pudge_UnseenEnemyHeroesHooked:
      return "kKillEaterEventType_Pudge_UnseenEnemyHeroesHooked";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DrowRanger_EnemiesSilenced:
      return "kKillEaterEventType_DrowRanger_EnemiesSilenced";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DrowRanger_MultiHeroSilences:
      return "kKillEaterEventType_DrowRanger_MultiHeroSilences";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DrowRanger_SilencedKills:
      return "kKillEaterEventType_DrowRanger_SilencedKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DrowRanger_FrostArrowKills:
      return "kKillEaterEventType_DrowRanger_FrostArrowKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DragonKnight_KillsInDragonForm:
      return "kKillEaterEventType_DragonKnight_KillsInDragonForm";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DragonKnight_BreatheFireKills:
      return "kKillEaterEventType_DragonKnight_BreatheFireKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DragonKnight_SplashKills:
      return "kKillEaterEventType_DragonKnight_SplashKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_WitchDoctor_CaskStuns:
      return "kKillEaterEventType_WitchDoctor_CaskStuns";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_WitchDoctor_MaledictKills:
      return "kKillEaterEventType_WitchDoctor_MaledictKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_WitchDoctor_MultiHeroMaledicts:
      return "kKillEaterEventType_WitchDoctor_MultiHeroMaledicts";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_WitchDoctor_DeathWardKills:
      return "kKillEaterEventType_WitchDoctor_DeathWardKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Disruptor_ThunderStrikeKills:
      return "kKillEaterEventType_Disruptor_ThunderStrikeKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Disruptor_HeroesGlimpsed:
      return "kKillEaterEventType_Disruptor_HeroesGlimpsed";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_CrystalMaiden_FreezingFieldKills:
      return "kKillEaterEventType_CrystalMaiden_FreezingFieldKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Medusa_EnemiesPetrified:
      return "kKillEaterEventType_Medusa_EnemiesPetrified";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Warlock_FatalBondsKills:
      return "kKillEaterEventType_Warlock_FatalBondsKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Warlock_GolemKills:
      return "kKillEaterEventType_Warlock_GolemKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Tusk_WalrusPunches:
      return "kKillEaterEventType_Tusk_WalrusPunches";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Tusk_SnowballStuns:
      return "kKillEaterEventType_Tusk_SnowballStuns";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Earthshaker_FissureStuns:
      return "kKillEaterEventType_Earthshaker_FissureStuns";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Earthshaker_3HeroEchoslams:
      return "kKillEaterEventType_Earthshaker_3HeroEchoslams";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_SandKing_BurrowstrikeStuns:
      return "kKillEaterEventType_SandKing_BurrowstrikeStuns";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_SandKing_EpicenterKills:
      return "kKillEaterEventType_SandKing_EpicenterKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_SkywrathMage_AncientSealKills:
      return "kKillEaterEventType_SkywrathMage_AncientSealKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_SkywrathMage_ConcussiveShotKills:
      return "kKillEaterEventType_SkywrathMage_ConcussiveShotKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Luna_LucentBeamKills:
      return "kKillEaterEventType_Luna_LucentBeamKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Luna_EclipseKills:
      return "kKillEaterEventType_Luna_EclipseKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_KeeperOfTheLight_IlluminateKills:
      return "kKillEaterEventType_KeeperOfTheLight_IlluminateKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_KeeperOfTheLight_ManaLeakStuns:
      return "kKillEaterEventType_KeeperOfTheLight_ManaLeakStuns";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_KeeperOfTheLight_TeammatesRecalled:
      return "kKillEaterEventType_KeeperOfTheLight_TeammatesRecalled";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_LegionCommander_DuelsWon:
      return "kKillEaterEventType_LegionCommander_DuelsWon";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Beastmaster_RoarKills:
      return "kKillEaterEventType_Beastmaster_RoarKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Beastmaster_RoarMultiKills:
      return "kKillEaterEventType_Beastmaster_RoarMultiKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Windrunner_FocusFireBuildings:
      return "kKillEaterEventType_Windrunner_FocusFireBuildings";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Windrunner_PowershotKills:
      return "kKillEaterEventType_Windrunner_PowershotKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_PhantomAssassin_DaggerLastHits:
      return "kKillEaterEventType_PhantomAssassin_DaggerLastHits";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_PhantomAssassin_PhantomStrikeKills:
      return "kKillEaterEventType_PhantomAssassin_PhantomStrikeKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DeathProphet_CryptSwarmKills:
      return "kKillEaterEventType_DeathProphet_CryptSwarmKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DeathProphet_ExorcismBuildingKills:
      return "kKillEaterEventType_DeathProphet_ExorcismBuildingKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DeathProphet_ExorcismSpiritsSummoned:
      return "kKillEaterEventType_DeathProphet_ExorcismSpiritsSummoned";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DeathProphet_MultiHeroSilences:
      return "kKillEaterEventType_DeathProphet_MultiHeroSilences";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Abaddon_MistCoilKills:
      return "kKillEaterEventType_Abaddon_MistCoilKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Abaddon_MistCoilHealed:
      return "kKillEaterEventType_Abaddon_MistCoilHealed";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Abaddon_AphoticShieldKills:
      return "kKillEaterEventType_Abaddon_AphoticShieldKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lich_ChainFrostTripleKills:
      return "kKillEaterEventType_Lich_ChainFrostTripleKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lich_ChainFrostMultiKills:
      return "kKillEaterEventType_Lich_ChainFrostMultiKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lich_ChainFrostBounces:
      return "kKillEaterEventType_Lich_ChainFrostBounces";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Ursa_EnragedKills:
      return "kKillEaterEventType_Ursa_EnragedKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Ursa_EarthshockKills:
      return "kKillEaterEventType_Ursa_EarthshockKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lina_LagunaBladeKills:
      return "kKillEaterEventType_Lina_LagunaBladeKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lina_DragonSlaveKills:
      return "kKillEaterEventType_Lina_DragonSlaveKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lina_LightStrikeArrayStuns:
      return "kKillEaterEventType_Lina_LightStrikeArrayStuns";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Barracks_Destroyed:
      return "kKillEaterEvent_Barracks_Destroyed";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_TemplarAssassin_MeldKills:
      return "kKillEaterEvent_TemplarAssassin_MeldKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_TemplarAssassin_HeroesSlowed:
      return "kKillEaterEvent_TemplarAssassin_HeroesSlowed";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Sniper_AssassinationKills:
      return "kKillEaterEvent_Sniper_AssassinationKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Sniper_HeadshotStuns:
      return "kKillEaterEvent_Sniper_HeadshotStuns";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_EarthSpirit_SmashStuns:
      return "kKillEaterEvent_EarthSpirit_SmashStuns";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_EarthSpirit_GripSilences:
      return "kKillEaterEvent_EarthSpirit_GripSilences";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ShadowShaman_ShackleKills:
      return "kKillEaterEvent_ShadowShaman_ShackleKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ShadowShaman_HexKills:
      return "kKillEaterEvent_ShadowShaman_HexKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Centaur_EnemiesStomped:
      return "kKillEaterEvent_Centaur_EnemiesStomped";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Centaur_DoubleEdgeKills:
      return "kKillEaterEvent_Centaur_DoubleEdgeKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Centaur_ReturnKills:
      return "kKillEaterEvent_Centaur_ReturnKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_EmberSpirit_EnemiesChained:
      return "kKillEaterEvent_EmberSpirit_EnemiesChained";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_EmberSpirit_SleightOfFistMultiKills:
      return "kKillEaterEvent_EmberSpirit_SleightOfFistMultiKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Puck_OrbKills:
      return "kKillEaterEvent_Puck_OrbKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_VengefulSpirit_EnemiesStunned:
      return "kKillEaterEvent_VengefulSpirit_EnemiesStunned";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Lifestealer_RageKills:
      return "kKillEaterEvent_Lifestealer_RageKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Lifestealer_OpenWoundsKills:
      return "kKillEaterEvent_Lifestealer_OpenWoundsKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Lifestealer_InfestKills:
      return "kKillEaterEvent_Lifestealer_InfestKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ElderTitan_SpiritKills:
      return "kKillEaterEvent_ElderTitan_SpiritKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ElderTitan_GoodStomps:
      return "kKillEaterEvent_ElderTitan_GoodStomps";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Clockwerk_RocketKills:
      return "kKillEaterEvent_Clockwerk_RocketKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Clockwerk_BlindRocketKills:
      return "kKillEaterEvent_Clockwerk_BlindRocketKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_StormSpirit_BallKills:
      return "kKillEaterEvent_StormSpirit_BallKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_StormSpirit_DoubleRemnantKills:
      return "kKillEaterEvent_StormSpirit_DoubleRemnantKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_StormSpirit_VortexKills:
      return "kKillEaterEvent_StormSpirit_VortexKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Tinker_DoubleMissileKills:
      return "kKillEaterEvent_Tinker_DoubleMissileKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Tinker_LaserKills:
      return "kKillEaterEvent_Tinker_LaserKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Techies_SuicideKills:
      return "kKillEaterEvent_Techies_SuicideKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Techies_LandMineKills:
      return "kKillEaterEvent_Techies_LandMineKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Techies_StatisTrapStuns:
      return "kKillEaterEvent_Techies_StatisTrapStuns";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Techies_RemoteMineKills:
      return "kKillEaterEvent_Techies_RemoteMineKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ShadowFiend_TripleRazeKills:
      return "kKillEaterEvent_ShadowFiend_TripleRazeKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ShadowFiend_RequiemMultiKills:
      return "kKillEaterEvent_ShadowFiend_RequiemMultiKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ShadowFiend_QRazeKills:
      return "kKillEaterEvent_ShadowFiend_QRazeKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ShadowFiend_WRazeKills:
      return "kKillEaterEvent_ShadowFiend_WRazeKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_ShadowFiend_ERazeKills:
      return "kKillEaterEvent_ShadowFiend_ERazeKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Oracle_FatesEdictKills:
      return "kKillEaterEvent_Oracle_FatesEdictKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Oracle_FalsePromiseSaves:
      return "kKillEaterEvent_Oracle_FalsePromiseSaves";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEvent_Juggernaut_OmnislashKills:
      return "kKillEaterEvent_Juggernaut_OmnislashKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_SkeletonKing_SkeletonHeroKills:
      return "kKillEaterEventType_SkeletonKing_SkeletonHeroKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DarkWillow_CursedCrownTripleStuns:
      return "kKillEaterEventType_DarkWillow_CursedCrownTripleStuns";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Dazzle_ShallowGraveSaves:
      return "kKillEaterEventType_Dazzle_ShallowGraveSaves";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Dazzle_PoisonTouchKills:
      return "kKillEaterEventType_Dazzle_PoisonTouchKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_ThreeManMeks:
      return "kKillEaterEventType_ThreeManMeks";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Viper_PoisonAttackKills:
      return "kKillEaterEventType_Viper_PoisonAttackKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Viper_CorrosiveSkinKills:
      return "kKillEaterEventType_Viper_CorrosiveSkinKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_ThreeHeroVeils:
      return "kKillEaterEventType_ThreeHeroVeils";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Viper_KillsDuringViperStrike:
      return "kKillEaterEventType_Viper_KillsDuringViperStrike";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_SolarCrestKills:
      return "kKillEaterEventType_SolarCrestKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Tiny_TreeThrowKills:
      return "kKillEaterEventType_Tiny_TreeThrowKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Riki_BackstabKills:
      return "kKillEaterEventType_Riki_BackstabKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Phoenix_ThreeHeroSupernovaStuns:
      return "kKillEaterEventType_Phoenix_ThreeHeroSupernovaStuns";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Terrorblade_MetamorphosisKills:
      return "kKillEaterEventType_Terrorblade_MetamorphosisKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lion_GreatFingerKills:
      return "kKillEaterEventType_Lion_GreatFingerKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Antimage_SpellsBlockedWithAghanims:
      return "kKillEaterEventType_Antimage_SpellsBlockedWithAghanims";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Antimage_ThreeManManaVoids:
      return "kKillEaterEventType_Antimage_ThreeManManaVoids";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_ArcWarden_TempestDoubleKills:
      return "kKillEaterEventType_ArcWarden_TempestDoubleKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_ArcWarden_SparkWraithKills:
      return "kKillEaterEventType_ArcWarden_SparkWraithKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Bane_BrainSapKills:
      return "kKillEaterEventType_Bane_BrainSapKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Bane_FiendsGripKills:
      return "kKillEaterEventType_Bane_FiendsGripKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Batrider_TripleHeroFlamebreaks:
      return "kKillEaterEventType_Batrider_TripleHeroFlamebreaks";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Batrider_DoubleHeroLassoes:
      return "kKillEaterEventType_Batrider_DoubleHeroLassoes";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Brewmaster_KillsDuringPrimalSplit:
      return "kKillEaterEventType_Brewmaster_KillsDuringPrimalSplit";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Bristleback_KillsUnderFourQuillStacks:
      return "kKillEaterEventType_Bristleback_KillsUnderFourQuillStacks";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Bristleback_TripleHeroNasalGoo:
      return "kKillEaterEventType_Bristleback_TripleHeroNasalGoo";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Broodmother_SpiderlingHeroKills:
      return "kKillEaterEventType_Broodmother_SpiderlingHeroKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Broodmother_KillsInsideWeb:
      return "kKillEaterEventType_Broodmother_KillsInsideWeb";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Centaur_ThreeHeroStampede:
      return "kKillEaterEventType_Centaur_ThreeHeroStampede";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_ChaosKnight_RealityRiftKills:
      return "kKillEaterEventType_ChaosKnight_RealityRiftKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Chen_KillsWithPenitence:
      return "kKillEaterEventType_Chen_KillsWithPenitence";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_CrystalMaiden_TwoHeroCrystalNovas:
      return "kKillEaterEventType_CrystalMaiden_TwoHeroCrystalNovas";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_CrystalMaiden_ThreeHeroFreezingFields:
      return "kKillEaterEventType_CrystalMaiden_ThreeHeroFreezingFields";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Dazzle_ShadowWaveKills:
      return "kKillEaterEventType_Dazzle_ShadowWaveKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DeathProphet_SiphonKills:
      return "kKillEaterEventType_DeathProphet_SiphonKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DeathProphet_ExorcismKillsDuringEuls:
      return "kKillEaterEventType_DeathProphet_ExorcismKillsDuringEuls";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Disruptor_ThreeHeroKineticFieldStaticStorm:
      return "kKillEaterEventType_Disruptor_ThreeHeroKineticFieldStaticStorm";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Doom_InfernalBladeBurnKills:
      return "kKillEaterEventType_Doom_InfernalBladeBurnKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DrowRanger_PrecisionAuraCreepTowerKills:
      return "kKillEaterEventType_DrowRanger_PrecisionAuraCreepTowerKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_EmberSpirit_RemnantKills:
      return "kKillEaterEventType_EmberSpirit_RemnantKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_EmberSpirit_SleightOfFistKills:
      return "kKillEaterEventType_EmberSpirit_SleightOfFistKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Enigma_MidnightPulseBlackHoleCombos:
      return "kKillEaterEventType_Enigma_MidnightPulseBlackHoleCombos";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Enigma_ThreeManBlackHoles:
      return "kKillEaterEventType_Enigma_ThreeManBlackHoles";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_FacelessVoid_MultiHeroTimeDilation:
      return "kKillEaterEventType_FacelessVoid_MultiHeroTimeDilation";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Gyrocopter_ThreeHeroFlakCannon:
      return "kKillEaterEventType_Gyrocopter_ThreeHeroFlakCannon";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Gyrocopter_HomingMissileKills:
      return "kKillEaterEventType_Gyrocopter_HomingMissileKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Gyrocopter_RocketBarrageKills:
      return "kKillEaterEventType_Gyrocopter_RocketBarrageKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Huskar_KillsDuringLifeBreak:
      return "kKillEaterEventType_Huskar_KillsDuringLifeBreak";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Huskar_BurningSpearKills:
      return "kKillEaterEventType_Huskar_BurningSpearKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Invoker_MultiHeroIceWall:
      return "kKillEaterEventType_Invoker_MultiHeroIceWall";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Invoker_ThreeHeroEMP:
      return "kKillEaterEventType_Invoker_ThreeHeroEMP";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Invoker_ThreeHeroDeafeningBlast:
      return "kKillEaterEventType_Invoker_ThreeHeroDeafeningBlast";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Invoker_MultiHeroChaosMeteor:
      return "kKillEaterEventType_Invoker_MultiHeroChaosMeteor";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Jakiro_MultiHeroDualBreath:
      return "kKillEaterEventType_Jakiro_MultiHeroDualBreath";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Jakiro_IcePathMacropyreCombos:
      return "kKillEaterEventType_Jakiro_IcePathMacropyreCombos";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Leshrac_PulseNovaKills:
      return "kKillEaterEventType_Leshrac_PulseNovaKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Leshrac_ThreeHeroLightningStorm:
      return "kKillEaterEventType_Leshrac_ThreeHeroLightningStorm";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lion_ThreeHeroFingerOfDeath:
      return "kKillEaterEventType_Lion_ThreeHeroFingerOfDeath";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Meepo_PoofKills:
      return "kKillEaterEventType_Meepo_PoofKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Meepo_MultiHeroEarthbinds:
      return "kKillEaterEventType_Meepo_MultiHeroEarthbinds";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_NightStalker_NighttimeKills:
      return "kKillEaterEventType_NightStalker_NighttimeKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Morphling_KillsDuringReplicate:
      return "kKillEaterEventType_Morphling_KillsDuringReplicate";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_OgreMagi_FireblastKills:
      return "kKillEaterEventType_OgreMagi_FireblastKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_OgreMagi_IgniteKills:
      return "kKillEaterEventType_OgreMagi_IgniteKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DominatingKillStreaks:
      return "kKillEaterEventType_DominatingKillStreaks";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_MegaKillStreaks:
      return "kKillEaterEventType_MegaKillStreaks";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Alchemist_AghanimsGiven:
      return "kKillEaterEventType_Alchemist_AghanimsGiven";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_VeilsLeadingToKills:
      return "kKillEaterEventType_VeilsLeadingToKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_DustLeadingToKills:
      return "kKillEaterEventType_DustLeadingToKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_WitchDoctor_MultiHeroCaskStuns:
      return "kKillEaterEventType_WitchDoctor_MultiHeroCaskStuns";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Weaver_ShukuchiKills:
      return "kKillEaterEventType_Weaver_ShukuchiKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Windrunner_ShackleFocusFireKills:
      return "kKillEaterEventType_Windrunner_ShackleFocusFireKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_VengefulSpirit_VengeanceAuraIllusionKills:
      return "kKillEaterEventType_VengefulSpirit_VengeanceAuraIllusionKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Tusk_WalrusPunchKills:
      return "kKillEaterEventType_Tusk_WalrusPunchKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Tinker_MultiHeroLasers:
      return "kKillEaterEventType_Tinker_MultiHeroLasers";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_TemplarAssassin_MultiHeroPsiBlades:
      return "kKillEaterEventType_TemplarAssassin_MultiHeroPsiBlades";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Sven_KillsDuringGodsStrength:
      return "kKillEaterEventType_Sven_KillsDuringGodsStrength";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Sniper_ThreeHeroShrapnels:
      return "kKillEaterEventType_Sniper_ThreeHeroShrapnels";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Slark_KillsDuringShadowDance:
      return "kKillEaterEventType_Slark_KillsDuringShadowDance";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_ShadowShaman_MultiHeroEtherShocks:
      return "kKillEaterEventType_ShadowShaman_MultiHeroEtherShocks";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_ShadowShaman_SerpentWardShackleKills:
      return "kKillEaterEventType_ShadowShaman_SerpentWardShackleKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Riki_ThreeHeroTricksOfTheTrade:
      return "kKillEaterEventType_Riki_ThreeHeroTricksOfTheTrade";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Razor_EyeOfTheStormKills:
      return "kKillEaterEventType_Razor_EyeOfTheStormKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Pugna_LifeDrainKills:
      return "kKillEaterEventType_Pugna_LifeDrainKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_ObsidianDestroyer_SanitysEclipseKills:
      return "kKillEaterEventType_ObsidianDestroyer_SanitysEclipseKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Oracle_MultiHeroFortunesEnd:
      return "kKillEaterEventType_Oracle_MultiHeroFortunesEnd";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Omniknight_PurificationKills:
      return "kKillEaterEventType_Omniknight_PurificationKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_NightStalker_EnemyMissesUnderCripplingFear:
      return "kKillEaterEventType_NightStalker_EnemyMissesUnderCripplingFear";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Warlock_ThreeHeroFatalBonds:
      return "kKillEaterEventType_Warlock_ThreeHeroFatalBonds";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Riki_TricksOfTheTradeKills:
      return "kKillEaterEventType_Riki_TricksOfTheTradeKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Earthshaker_AftershockHits10:
      return "kKillEaterEventType_Earthshaker_AftershockHits10";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Earthshaker_5HeroEchoslams:
      return "kKillEaterEventType_Earthshaker_5HeroEchoslams";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lina_LagunaBladeHeroKills:
      return "kKillEaterEventType_Lina_LagunaBladeHeroKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Lina_LightStrikeHeroStuns:
      return "kKillEaterEventType_Lina_LightStrikeHeroStuns";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Earthshaker_FissureMultiStuns:
      return "kKillEaterEventType_Earthshaker_FissureMultiStuns";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Earthshaker_TotemKills:
      return "kKillEaterEventType_Earthshaker_TotemKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Pangolier_SwashbuckleKills:
      return "kKillEaterEventType_Pangolier_SwashbuckleKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Furion_EnemyHeroesTrapped:
      return "kKillEaterEventType_Furion_EnemyHeroesTrapped";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Pangolier_HeartpiercerKills:
      return "kKillEaterEventType_Pangolier_HeartpiercerKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Medusa_MultiHeroStoneGaze:
      return "kKillEaterEventType_Medusa_MultiHeroStoneGaze";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Medusa_SplitShotKills:
      return "kKillEaterEventType_Medusa_SplitShotKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Mirana_MultiHeroStarstorm:
      return "kKillEaterEventType_Mirana_MultiHeroStarstorm";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Mirana_KillsFromMoonlightShadow:
      return "kKillEaterEventType_Mirana_KillsFromMoonlightShadow";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Magnus_MultiHeroSkewers:
      return "kKillEaterEventType_Magnus_MultiHeroSkewers";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Magnus_MultiHeroReversePolarity:
      return "kKillEaterEventType_Magnus_MultiHeroReversePolarity";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Magnus_HeroesSlowedWithShockwave:
      return "kKillEaterEventType_Magnus_HeroesSlowedWithShockwave";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_NagaSiren_MultiHeroSong:
      return "kKillEaterEventType_NagaSiren_MultiHeroSong";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_NagaSiren_AlliesHealedBySong:
      return "kKillEaterEventType_NagaSiren_AlliesHealedBySong";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_LoneDruid_MultiHeroRoar:
      return "kKillEaterEventType_LoneDruid_MultiHeroRoar";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_LoneDruid_BattleCryKills:
      return "kKillEaterEventType_LoneDruid_BattleCryKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_WinterWyvern_ThreeHeroCurses:
      return "kKillEaterEventType_WinterWyvern_ThreeHeroCurses";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Antimage_SpellsBlockedWithCounterspell:
      return "kKillEaterEventType_Antimage_SpellsBlockedWithCounterspell";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Mars_EnemiesKilledInArena:
      return "kKillEaterEventType_Mars_EnemiesKilledInArena";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Mars_MultiHeroGodsRebuke:
      return "kKillEaterEventType_Mars_MultiHeroGodsRebuke";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Mars_GodsRebukeKills:
      return "kKillEaterEventType_Mars_GodsRebukeKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Snapfire_LizardBlobsKills:
      return "kKillEaterEventType_Snapfire_LizardBlobsKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Snapfire_TwoHeroCookieStuns:
      return "kKillEaterEventType_Snapfire_TwoHeroCookieStuns";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.Custom_KillStreak:
      return "Custom_KillStreak";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Muerta_DeadShotKills:
      return "kKillEaterEventType_Muerta_DeadShotKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Muerta_PierceTheVeilKills:
      return "kKillEaterEventType_Muerta_PierceTheVeilKills";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Muerta_MultiHeroDeadShot:
      return "kKillEaterEventType_Muerta_MultiHeroDeadShot";
    case CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType.kKillEaterEventType_Muerta_DeadShotsIntoTheCalling:
      return "kKillEaterEventType_Muerta_DeadShotsIntoTheCalling";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType",
      );
  }
}

function createBaseCSODOTAPartyMember(): CSODOTAPartyMember {
  return {
    isCoach: false,
    regionPingCodes: [],
    regionPingTimes: [],
    regionPingFailedBitmask: 0,
    isPlusSubscriber: false,
    tourneySkillLevel: 0,
    tourneyBuyin: 0,
    tourneyPreventUntil: 0,
    mmDataValid: false,
    laneSelectionFlags: 0,
    highPriorityDisabled: false,
    hasHpResource: false,
    joinedFromPartyfinder: false,
    isSteamChina: false,
  };
}

export const CSODOTAPartyMember = {
  encode(message: CSODOTAPartyMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isCoach === true) {
      writer.uint32(16).bool(message.isCoach);
    }
    writer.uint32(34).fork();
    for (const v of message.regionPingCodes) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.regionPingTimes) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.regionPingFailedBitmask !== 0) {
      writer.uint32(48).uint32(message.regionPingFailedBitmask);
    }
    if (message.isPlusSubscriber === true) {
      writer.uint32(80).bool(message.isPlusSubscriber);
    }
    if (message.tourneySkillLevel !== 0) {
      writer.uint32(56).uint32(message.tourneySkillLevel);
    }
    if (message.tourneyBuyin !== 0) {
      writer.uint32(64).uint32(message.tourneyBuyin);
    }
    if (message.tourneyPreventUntil !== 0) {
      writer.uint32(72).uint32(message.tourneyPreventUntil);
    }
    if (message.mmDataValid === true) {
      writer.uint32(104).bool(message.mmDataValid);
    }
    if (message.laneSelectionFlags !== 0) {
      writer.uint32(88).uint32(message.laneSelectionFlags);
    }
    if (message.highPriorityDisabled === true) {
      writer.uint32(112).bool(message.highPriorityDisabled);
    }
    if (message.hasHpResource === true) {
      writer.uint32(120).bool(message.hasHpResource);
    }
    if (message.joinedFromPartyfinder === true) {
      writer.uint32(96).bool(message.joinedFromPartyfinder);
    }
    if (message.isSteamChina === true) {
      writer.uint32(128).bool(message.isSteamChina);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTAPartyMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTAPartyMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.isCoach = reader.bool();
          continue;
        case 4:
          if (tag == 32) {
            message.regionPingCodes.push(reader.uint32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.regionPingCodes.push(reader.uint32());
            }

            continue;
          }

          break;
        case 5:
          if (tag == 40) {
            message.regionPingTimes.push(reader.uint32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.regionPingTimes.push(reader.uint32());
            }

            continue;
          }

          break;
        case 6:
          if (tag != 48) {
            break;
          }

          message.regionPingFailedBitmask = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.isPlusSubscriber = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.tourneySkillLevel = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.tourneyBuyin = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.tourneyPreventUntil = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.mmDataValid = reader.bool();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.laneSelectionFlags = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.highPriorityDisabled = reader.bool();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.hasHpResource = reader.bool();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.joinedFromPartyfinder = reader.bool();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.isSteamChina = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSODOTAPartyMember {
    return {
      isCoach: isSet(object.isCoach) ? Boolean(object.isCoach) : false,
      regionPingCodes: Array.isArray(object?.regionPingCodes) ? object.regionPingCodes.map((e: any) => Number(e)) : [],
      regionPingTimes: Array.isArray(object?.regionPingTimes) ? object.regionPingTimes.map((e: any) => Number(e)) : [],
      regionPingFailedBitmask: isSet(object.regionPingFailedBitmask) ? Number(object.regionPingFailedBitmask) : 0,
      isPlusSubscriber: isSet(object.isPlusSubscriber) ? Boolean(object.isPlusSubscriber) : false,
      tourneySkillLevel: isSet(object.tourneySkillLevel) ? Number(object.tourneySkillLevel) : 0,
      tourneyBuyin: isSet(object.tourneyBuyin) ? Number(object.tourneyBuyin) : 0,
      tourneyPreventUntil: isSet(object.tourneyPreventUntil) ? Number(object.tourneyPreventUntil) : 0,
      mmDataValid: isSet(object.mmDataValid) ? Boolean(object.mmDataValid) : false,
      laneSelectionFlags: isSet(object.laneSelectionFlags) ? Number(object.laneSelectionFlags) : 0,
      highPriorityDisabled: isSet(object.highPriorityDisabled) ? Boolean(object.highPriorityDisabled) : false,
      hasHpResource: isSet(object.hasHpResource) ? Boolean(object.hasHpResource) : false,
      joinedFromPartyfinder: isSet(object.joinedFromPartyfinder) ? Boolean(object.joinedFromPartyfinder) : false,
      isSteamChina: isSet(object.isSteamChina) ? Boolean(object.isSteamChina) : false,
    };
  },

  toJSON(message: CSODOTAPartyMember): unknown {
    const obj: any = {};
    message.isCoach !== undefined && (obj.isCoach = message.isCoach);
    if (message.regionPingCodes) {
      obj.regionPingCodes = message.regionPingCodes.map((e) => Math.round(e));
    } else {
      obj.regionPingCodes = [];
    }
    if (message.regionPingTimes) {
      obj.regionPingTimes = message.regionPingTimes.map((e) => Math.round(e));
    } else {
      obj.regionPingTimes = [];
    }
    message.regionPingFailedBitmask !== undefined &&
      (obj.regionPingFailedBitmask = Math.round(message.regionPingFailedBitmask));
    message.isPlusSubscriber !== undefined && (obj.isPlusSubscriber = message.isPlusSubscriber);
    message.tourneySkillLevel !== undefined && (obj.tourneySkillLevel = Math.round(message.tourneySkillLevel));
    message.tourneyBuyin !== undefined && (obj.tourneyBuyin = Math.round(message.tourneyBuyin));
    message.tourneyPreventUntil !== undefined && (obj.tourneyPreventUntil = Math.round(message.tourneyPreventUntil));
    message.mmDataValid !== undefined && (obj.mmDataValid = message.mmDataValid);
    message.laneSelectionFlags !== undefined && (obj.laneSelectionFlags = Math.round(message.laneSelectionFlags));
    message.highPriorityDisabled !== undefined && (obj.highPriorityDisabled = message.highPriorityDisabled);
    message.hasHpResource !== undefined && (obj.hasHpResource = message.hasHpResource);
    message.joinedFromPartyfinder !== undefined && (obj.joinedFromPartyfinder = message.joinedFromPartyfinder);
    message.isSteamChina !== undefined && (obj.isSteamChina = message.isSteamChina);
    return obj;
  },

  create(base?: DeepPartial<CSODOTAPartyMember>): CSODOTAPartyMember {
    return CSODOTAPartyMember.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSODOTAPartyMember>): CSODOTAPartyMember {
    const message = createBaseCSODOTAPartyMember();
    message.isCoach = object.isCoach ?? false;
    message.regionPingCodes = object.regionPingCodes?.map((e) => e) || [];
    message.regionPingTimes = object.regionPingTimes?.map((e) => e) || [];
    message.regionPingFailedBitmask = object.regionPingFailedBitmask ?? 0;
    message.isPlusSubscriber = object.isPlusSubscriber ?? false;
    message.tourneySkillLevel = object.tourneySkillLevel ?? 0;
    message.tourneyBuyin = object.tourneyBuyin ?? 0;
    message.tourneyPreventUntil = object.tourneyPreventUntil ?? 0;
    message.mmDataValid = object.mmDataValid ?? false;
    message.laneSelectionFlags = object.laneSelectionFlags ?? 0;
    message.highPriorityDisabled = object.highPriorityDisabled ?? false;
    message.hasHpResource = object.hasHpResource ?? false;
    message.joinedFromPartyfinder = object.joinedFromPartyfinder ?? false;
    message.isSteamChina = object.isSteamChina ?? false;
    return message;
  },
};

function createBaseCSODOTAParty(): CSODOTAParty {
  return {
    partyId: "0",
    leaderId: "0",
    memberIds: [],
    gameModes: 0,
    state: 0,
    effectiveStartedMatchmakingTime: 0,
    rawStartedMatchmakingTime: 0,
    attemptStartTime: 0,
    attemptNum: 0,
    matchgroups: 0,
    lowPriorityAccountId: 0,
    matchType: 0,
    teamId: 0,
    teamName: "",
    teamUiLogo: "0",
    teamBaseLogo: "0",
    matchDisabledUntilDate: 0,
    matchDisabledAccountId: 0,
    matchmakingMaxRangeMinutes: 0,
    matchlanguages: 0,
    members: [],
    lowPriorityGamesRemaining: 0,
    openForJoinRequests: false,
    sentInvites: [],
    recvInvites: [],
    accountFlags: 0,
    regionSelectFlags: 0,
    exclusiveTournamentId: 0,
    tourneyDivisionId: 0,
    tourneyScheduleTime: 0,
    tourneySkillLevel: 0,
    tourneyBracketRound: 0,
    tourneyQueueDeadlineTime: 0,
    tourneyQueueDeadlineState: 0,
    partyBuilderSlotsToFill: 0,
    partyBuilderMatchGroups: 0,
    partyBuilderStartTime: 0,
    soloQueue: false,
    steamClanAccountId: 0,
    readyCheck: undefined,
    customGameDisabledUntilDate: 0,
    customGameDisabledAccountId: 0,
    isChallengeMatch: false,
    partySearchBeaconActive: false,
    matchmakingFlags: 0,
    highPriorityState: 0,
    laneSelectionsEnabled: false,
    customGameDifficultyMask: 0,
    isSteamChina: false,
    botDifficultyMask: 0,
    botScriptIndexMask: 0,
  };
}

export const CSODOTAParty = {
  encode(message: CSODOTAParty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.partyId !== "0") {
      writer.uint32(8).uint64(message.partyId);
    }
    if (message.leaderId !== "0") {
      writer.uint32(17).fixed64(message.leaderId);
    }
    writer.uint32(26).fork();
    for (const v of message.memberIds) {
      writer.fixed64(v);
    }
    writer.ldelim();
    if (message.gameModes !== 0) {
      writer.uint32(32).uint32(message.gameModes);
    }
    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }
    if (message.effectiveStartedMatchmakingTime !== 0) {
      writer.uint32(56).uint32(message.effectiveStartedMatchmakingTime);
    }
    if (message.rawStartedMatchmakingTime !== 0) {
      writer.uint32(256).uint32(message.rawStartedMatchmakingTime);
    }
    if (message.attemptStartTime !== 0) {
      writer.uint32(264).uint32(message.attemptStartTime);
    }
    if (message.attemptNum !== 0) {
      writer.uint32(272).uint32(message.attemptNum);
    }
    if (message.matchgroups !== 0) {
      writer.uint32(88).uint32(message.matchgroups);
    }
    if (message.lowPriorityAccountId !== 0) {
      writer.uint32(152).uint32(message.lowPriorityAccountId);
    }
    if (message.matchType !== 0) {
      writer.uint32(168).int32(message.matchType);
    }
    if (message.teamId !== 0) {
      writer.uint32(184).uint32(message.teamId);
    }
    if (message.teamName !== "") {
      writer.uint32(410).string(message.teamName);
    }
    if (message.teamUiLogo !== "0") {
      writer.uint32(416).uint64(message.teamUiLogo);
    }
    if (message.teamBaseLogo !== "0") {
      writer.uint32(424).uint64(message.teamBaseLogo);
    }
    if (message.matchDisabledUntilDate !== 0) {
      writer.uint32(192).uint32(message.matchDisabledUntilDate);
    }
    if (message.matchDisabledAccountId !== 0) {
      writer.uint32(200).uint32(message.matchDisabledAccountId);
    }
    if (message.matchmakingMaxRangeMinutes !== 0) {
      writer.uint32(208).uint32(message.matchmakingMaxRangeMinutes);
    }
    if (message.matchlanguages !== 0) {
      writer.uint32(216).uint32(message.matchlanguages);
    }
    for (const v of message.members) {
      CSODOTAPartyMember.encode(v!, writer.uint32(234).fork()).ldelim();
    }
    if (message.lowPriorityGamesRemaining !== 0) {
      writer.uint32(280).uint32(message.lowPriorityGamesRemaining);
    }
    if (message.openForJoinRequests === true) {
      writer.uint32(320).bool(message.openForJoinRequests);
    }
    for (const v of message.sentInvites) {
      CSODOTAPartyInvite.encode(v!, writer.uint32(330).fork()).ldelim();
    }
    for (const v of message.recvInvites) {
      CSODOTAPartyInvite.encode(v!, writer.uint32(338).fork()).ldelim();
    }
    if (message.accountFlags !== 0) {
      writer.uint32(344).uint32(message.accountFlags);
    }
    if (message.regionSelectFlags !== 0) {
      writer.uint32(352).uint32(message.regionSelectFlags);
    }
    if (message.exclusiveTournamentId !== 0) {
      writer.uint32(360).uint32(message.exclusiveTournamentId);
    }
    if (message.tourneyDivisionId !== 0) {
      writer.uint32(376).uint32(message.tourneyDivisionId);
    }
    if (message.tourneyScheduleTime !== 0) {
      writer.uint32(384).uint32(message.tourneyScheduleTime);
    }
    if (message.tourneySkillLevel !== 0) {
      writer.uint32(392).uint32(message.tourneySkillLevel);
    }
    if (message.tourneyBracketRound !== 0) {
      writer.uint32(400).uint32(message.tourneyBracketRound);
    }
    if (message.tourneyQueueDeadlineTime !== 0) {
      writer.uint32(432).uint32(message.tourneyQueueDeadlineTime);
    }
    if (message.tourneyQueueDeadlineState !== 0) {
      writer.uint32(440).int32(message.tourneyQueueDeadlineState);
    }
    if (message.partyBuilderSlotsToFill !== 0) {
      writer.uint32(448).uint32(message.partyBuilderSlotsToFill);
    }
    if (message.partyBuilderMatchGroups !== 0) {
      writer.uint32(456).uint32(message.partyBuilderMatchGroups);
    }
    if (message.partyBuilderStartTime !== 0) {
      writer.uint32(464).uint32(message.partyBuilderStartTime);
    }
    if (message.soloQueue === true) {
      writer.uint32(472).bool(message.soloQueue);
    }
    if (message.steamClanAccountId !== 0) {
      writer.uint32(488).uint32(message.steamClanAccountId);
    }
    if (message.readyCheck !== undefined) {
      CMsgReadyCheckStatus.encode(message.readyCheck, writer.uint32(498).fork()).ldelim();
    }
    if (message.customGameDisabledUntilDate !== 0) {
      writer.uint32(504).uint32(message.customGameDisabledUntilDate);
    }
    if (message.customGameDisabledAccountId !== 0) {
      writer.uint32(512).uint32(message.customGameDisabledAccountId);
    }
    if (message.isChallengeMatch === true) {
      writer.uint32(520).bool(message.isChallengeMatch);
    }
    if (message.partySearchBeaconActive === true) {
      writer.uint32(528).bool(message.partySearchBeaconActive);
    }
    if (message.matchmakingFlags !== 0) {
      writer.uint32(536).uint32(message.matchmakingFlags);
    }
    if (message.highPriorityState !== 0) {
      writer.uint32(544).int32(message.highPriorityState);
    }
    if (message.laneSelectionsEnabled === true) {
      writer.uint32(552).bool(message.laneSelectionsEnabled);
    }
    if (message.customGameDifficultyMask !== 0) {
      writer.uint32(560).uint32(message.customGameDifficultyMask);
    }
    if (message.isSteamChina === true) {
      writer.uint32(568).bool(message.isSteamChina);
    }
    if (message.botDifficultyMask !== 0) {
      writer.uint32(576).uint32(message.botDifficultyMask);
    }
    if (message.botScriptIndexMask !== 0) {
      writer.uint32(584).uint32(message.botScriptIndexMask);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTAParty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTAParty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.partyId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.leaderId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag == 25) {
            message.memberIds.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.memberIds.push(longToString(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 4:
          if (tag != 32) {
            break;
          }

          message.gameModes = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.effectiveStartedMatchmakingTime = reader.uint32();
          continue;
        case 32:
          if (tag != 256) {
            break;
          }

          message.rawStartedMatchmakingTime = reader.uint32();
          continue;
        case 33:
          if (tag != 264) {
            break;
          }

          message.attemptStartTime = reader.uint32();
          continue;
        case 34:
          if (tag != 272) {
            break;
          }

          message.attemptNum = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.matchgroups = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.lowPriorityAccountId = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.matchType = reader.int32() as any;
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 51:
          if (tag != 410) {
            break;
          }

          message.teamName = reader.string();
          continue;
        case 52:
          if (tag != 416) {
            break;
          }

          message.teamUiLogo = longToString(reader.uint64() as Long);
          continue;
        case 53:
          if (tag != 424) {
            break;
          }

          message.teamBaseLogo = longToString(reader.uint64() as Long);
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.matchDisabledUntilDate = reader.uint32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.matchDisabledAccountId = reader.uint32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.matchmakingMaxRangeMinutes = reader.uint32();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.matchlanguages = reader.uint32();
          continue;
        case 29:
          if (tag != 234) {
            break;
          }

          message.members.push(CSODOTAPartyMember.decode(reader, reader.uint32()));
          continue;
        case 35:
          if (tag != 280) {
            break;
          }

          message.lowPriorityGamesRemaining = reader.uint32();
          continue;
        case 40:
          if (tag != 320) {
            break;
          }

          message.openForJoinRequests = reader.bool();
          continue;
        case 41:
          if (tag != 330) {
            break;
          }

          message.sentInvites.push(CSODOTAPartyInvite.decode(reader, reader.uint32()));
          continue;
        case 42:
          if (tag != 338) {
            break;
          }

          message.recvInvites.push(CSODOTAPartyInvite.decode(reader, reader.uint32()));
          continue;
        case 43:
          if (tag != 344) {
            break;
          }

          message.accountFlags = reader.uint32();
          continue;
        case 44:
          if (tag != 352) {
            break;
          }

          message.regionSelectFlags = reader.uint32();
          continue;
        case 45:
          if (tag != 360) {
            break;
          }

          message.exclusiveTournamentId = reader.uint32();
          continue;
        case 47:
          if (tag != 376) {
            break;
          }

          message.tourneyDivisionId = reader.uint32();
          continue;
        case 48:
          if (tag != 384) {
            break;
          }

          message.tourneyScheduleTime = reader.uint32();
          continue;
        case 49:
          if (tag != 392) {
            break;
          }

          message.tourneySkillLevel = reader.uint32();
          continue;
        case 50:
          if (tag != 400) {
            break;
          }

          message.tourneyBracketRound = reader.uint32();
          continue;
        case 54:
          if (tag != 432) {
            break;
          }

          message.tourneyQueueDeadlineTime = reader.uint32();
          continue;
        case 55:
          if (tag != 440) {
            break;
          }

          message.tourneyQueueDeadlineState = reader.int32() as any;
          continue;
        case 56:
          if (tag != 448) {
            break;
          }

          message.partyBuilderSlotsToFill = reader.uint32();
          continue;
        case 57:
          if (tag != 456) {
            break;
          }

          message.partyBuilderMatchGroups = reader.uint32();
          continue;
        case 58:
          if (tag != 464) {
            break;
          }

          message.partyBuilderStartTime = reader.uint32();
          continue;
        case 59:
          if (tag != 472) {
            break;
          }

          message.soloQueue = reader.bool();
          continue;
        case 61:
          if (tag != 488) {
            break;
          }

          message.steamClanAccountId = reader.uint32();
          continue;
        case 62:
          if (tag != 498) {
            break;
          }

          message.readyCheck = CMsgReadyCheckStatus.decode(reader, reader.uint32());
          continue;
        case 63:
          if (tag != 504) {
            break;
          }

          message.customGameDisabledUntilDate = reader.uint32();
          continue;
        case 64:
          if (tag != 512) {
            break;
          }

          message.customGameDisabledAccountId = reader.uint32();
          continue;
        case 65:
          if (tag != 520) {
            break;
          }

          message.isChallengeMatch = reader.bool();
          continue;
        case 66:
          if (tag != 528) {
            break;
          }

          message.partySearchBeaconActive = reader.bool();
          continue;
        case 67:
          if (tag != 536) {
            break;
          }

          message.matchmakingFlags = reader.uint32();
          continue;
        case 68:
          if (tag != 544) {
            break;
          }

          message.highPriorityState = reader.int32() as any;
          continue;
        case 69:
          if (tag != 552) {
            break;
          }

          message.laneSelectionsEnabled = reader.bool();
          continue;
        case 70:
          if (tag != 560) {
            break;
          }

          message.customGameDifficultyMask = reader.uint32();
          continue;
        case 71:
          if (tag != 568) {
            break;
          }

          message.isSteamChina = reader.bool();
          continue;
        case 72:
          if (tag != 576) {
            break;
          }

          message.botDifficultyMask = reader.uint32();
          continue;
        case 73:
          if (tag != 584) {
            break;
          }

          message.botScriptIndexMask = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSODOTAParty {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "0",
      leaderId: isSet(object.leaderId) ? String(object.leaderId) : "0",
      memberIds: Array.isArray(object?.memberIds) ? object.memberIds.map((e: any) => String(e)) : [],
      gameModes: isSet(object.gameModes) ? Number(object.gameModes) : 0,
      state: isSet(object.state) ? cSODOTAParty_StateFromJSON(object.state) : 0,
      effectiveStartedMatchmakingTime: isSet(object.effectiveStartedMatchmakingTime)
        ? Number(object.effectiveStartedMatchmakingTime)
        : 0,
      rawStartedMatchmakingTime: isSet(object.rawStartedMatchmakingTime) ? Number(object.rawStartedMatchmakingTime) : 0,
      attemptStartTime: isSet(object.attemptStartTime) ? Number(object.attemptStartTime) : 0,
      attemptNum: isSet(object.attemptNum) ? Number(object.attemptNum) : 0,
      matchgroups: isSet(object.matchgroups) ? Number(object.matchgroups) : 0,
      lowPriorityAccountId: isSet(object.lowPriorityAccountId) ? Number(object.lowPriorityAccountId) : 0,
      matchType: isSet(object.matchType) ? matchTypeFromJSON(object.matchType) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      teamName: isSet(object.teamName) ? String(object.teamName) : "",
      teamUiLogo: isSet(object.teamUiLogo) ? String(object.teamUiLogo) : "0",
      teamBaseLogo: isSet(object.teamBaseLogo) ? String(object.teamBaseLogo) : "0",
      matchDisabledUntilDate: isSet(object.matchDisabledUntilDate) ? Number(object.matchDisabledUntilDate) : 0,
      matchDisabledAccountId: isSet(object.matchDisabledAccountId) ? Number(object.matchDisabledAccountId) : 0,
      matchmakingMaxRangeMinutes: isSet(object.matchmakingMaxRangeMinutes)
        ? Number(object.matchmakingMaxRangeMinutes)
        : 0,
      matchlanguages: isSet(object.matchlanguages) ? Number(object.matchlanguages) : 0,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => CSODOTAPartyMember.fromJSON(e)) : [],
      lowPriorityGamesRemaining: isSet(object.lowPriorityGamesRemaining) ? Number(object.lowPriorityGamesRemaining) : 0,
      openForJoinRequests: isSet(object.openForJoinRequests) ? Boolean(object.openForJoinRequests) : false,
      sentInvites: Array.isArray(object?.sentInvites)
        ? object.sentInvites.map((e: any) => CSODOTAPartyInvite.fromJSON(e))
        : [],
      recvInvites: Array.isArray(object?.recvInvites)
        ? object.recvInvites.map((e: any) => CSODOTAPartyInvite.fromJSON(e))
        : [],
      accountFlags: isSet(object.accountFlags) ? Number(object.accountFlags) : 0,
      regionSelectFlags: isSet(object.regionSelectFlags) ? Number(object.regionSelectFlags) : 0,
      exclusiveTournamentId: isSet(object.exclusiveTournamentId) ? Number(object.exclusiveTournamentId) : 0,
      tourneyDivisionId: isSet(object.tourneyDivisionId) ? Number(object.tourneyDivisionId) : 0,
      tourneyScheduleTime: isSet(object.tourneyScheduleTime) ? Number(object.tourneyScheduleTime) : 0,
      tourneySkillLevel: isSet(object.tourneySkillLevel) ? Number(object.tourneySkillLevel) : 0,
      tourneyBracketRound: isSet(object.tourneyBracketRound) ? Number(object.tourneyBracketRound) : 0,
      tourneyQueueDeadlineTime: isSet(object.tourneyQueueDeadlineTime) ? Number(object.tourneyQueueDeadlineTime) : 0,
      tourneyQueueDeadlineState: isSet(object.tourneyQueueDeadlineState)
        ? eTourneyQueueDeadlineStateFromJSON(object.tourneyQueueDeadlineState)
        : 0,
      partyBuilderSlotsToFill: isSet(object.partyBuilderSlotsToFill) ? Number(object.partyBuilderSlotsToFill) : 0,
      partyBuilderMatchGroups: isSet(object.partyBuilderMatchGroups) ? Number(object.partyBuilderMatchGroups) : 0,
      partyBuilderStartTime: isSet(object.partyBuilderStartTime) ? Number(object.partyBuilderStartTime) : 0,
      soloQueue: isSet(object.soloQueue) ? Boolean(object.soloQueue) : false,
      steamClanAccountId: isSet(object.steamClanAccountId) ? Number(object.steamClanAccountId) : 0,
      readyCheck: isSet(object.readyCheck) ? CMsgReadyCheckStatus.fromJSON(object.readyCheck) : undefined,
      customGameDisabledUntilDate: isSet(object.customGameDisabledUntilDate)
        ? Number(object.customGameDisabledUntilDate)
        : 0,
      customGameDisabledAccountId: isSet(object.customGameDisabledAccountId)
        ? Number(object.customGameDisabledAccountId)
        : 0,
      isChallengeMatch: isSet(object.isChallengeMatch) ? Boolean(object.isChallengeMatch) : false,
      partySearchBeaconActive: isSet(object.partySearchBeaconActive) ? Boolean(object.partySearchBeaconActive) : false,
      matchmakingFlags: isSet(object.matchmakingFlags) ? Number(object.matchmakingFlags) : 0,
      highPriorityState: isSet(object.highPriorityState) ? eHighPriorityMMStateFromJSON(object.highPriorityState) : 0,
      laneSelectionsEnabled: isSet(object.laneSelectionsEnabled) ? Boolean(object.laneSelectionsEnabled) : false,
      customGameDifficultyMask: isSet(object.customGameDifficultyMask) ? Number(object.customGameDifficultyMask) : 0,
      isSteamChina: isSet(object.isSteamChina) ? Boolean(object.isSteamChina) : false,
      botDifficultyMask: isSet(object.botDifficultyMask) ? Number(object.botDifficultyMask) : 0,
      botScriptIndexMask: isSet(object.botScriptIndexMask) ? Number(object.botScriptIndexMask) : 0,
    };
  },

  toJSON(message: CSODOTAParty): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.leaderId !== undefined && (obj.leaderId = message.leaderId);
    if (message.memberIds) {
      obj.memberIds = message.memberIds.map((e) => e);
    } else {
      obj.memberIds = [];
    }
    message.gameModes !== undefined && (obj.gameModes = Math.round(message.gameModes));
    message.state !== undefined && (obj.state = cSODOTAParty_StateToJSON(message.state));
    message.effectiveStartedMatchmakingTime !== undefined &&
      (obj.effectiveStartedMatchmakingTime = Math.round(message.effectiveStartedMatchmakingTime));
    message.rawStartedMatchmakingTime !== undefined &&
      (obj.rawStartedMatchmakingTime = Math.round(message.rawStartedMatchmakingTime));
    message.attemptStartTime !== undefined && (obj.attemptStartTime = Math.round(message.attemptStartTime));
    message.attemptNum !== undefined && (obj.attemptNum = Math.round(message.attemptNum));
    message.matchgroups !== undefined && (obj.matchgroups = Math.round(message.matchgroups));
    message.lowPriorityAccountId !== undefined && (obj.lowPriorityAccountId = Math.round(message.lowPriorityAccountId));
    message.matchType !== undefined && (obj.matchType = matchTypeToJSON(message.matchType));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.teamName !== undefined && (obj.teamName = message.teamName);
    message.teamUiLogo !== undefined && (obj.teamUiLogo = message.teamUiLogo);
    message.teamBaseLogo !== undefined && (obj.teamBaseLogo = message.teamBaseLogo);
    message.matchDisabledUntilDate !== undefined &&
      (obj.matchDisabledUntilDate = Math.round(message.matchDisabledUntilDate));
    message.matchDisabledAccountId !== undefined &&
      (obj.matchDisabledAccountId = Math.round(message.matchDisabledAccountId));
    message.matchmakingMaxRangeMinutes !== undefined &&
      (obj.matchmakingMaxRangeMinutes = Math.round(message.matchmakingMaxRangeMinutes));
    message.matchlanguages !== undefined && (obj.matchlanguages = Math.round(message.matchlanguages));
    if (message.members) {
      obj.members = message.members.map((e) => e ? CSODOTAPartyMember.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.lowPriorityGamesRemaining !== undefined &&
      (obj.lowPriorityGamesRemaining = Math.round(message.lowPriorityGamesRemaining));
    message.openForJoinRequests !== undefined && (obj.openForJoinRequests = message.openForJoinRequests);
    if (message.sentInvites) {
      obj.sentInvites = message.sentInvites.map((e) => e ? CSODOTAPartyInvite.toJSON(e) : undefined);
    } else {
      obj.sentInvites = [];
    }
    if (message.recvInvites) {
      obj.recvInvites = message.recvInvites.map((e) => e ? CSODOTAPartyInvite.toJSON(e) : undefined);
    } else {
      obj.recvInvites = [];
    }
    message.accountFlags !== undefined && (obj.accountFlags = Math.round(message.accountFlags));
    message.regionSelectFlags !== undefined && (obj.regionSelectFlags = Math.round(message.regionSelectFlags));
    message.exclusiveTournamentId !== undefined &&
      (obj.exclusiveTournamentId = Math.round(message.exclusiveTournamentId));
    message.tourneyDivisionId !== undefined && (obj.tourneyDivisionId = Math.round(message.tourneyDivisionId));
    message.tourneyScheduleTime !== undefined && (obj.tourneyScheduleTime = Math.round(message.tourneyScheduleTime));
    message.tourneySkillLevel !== undefined && (obj.tourneySkillLevel = Math.round(message.tourneySkillLevel));
    message.tourneyBracketRound !== undefined && (obj.tourneyBracketRound = Math.round(message.tourneyBracketRound));
    message.tourneyQueueDeadlineTime !== undefined &&
      (obj.tourneyQueueDeadlineTime = Math.round(message.tourneyQueueDeadlineTime));
    message.tourneyQueueDeadlineState !== undefined &&
      (obj.tourneyQueueDeadlineState = eTourneyQueueDeadlineStateToJSON(message.tourneyQueueDeadlineState));
    message.partyBuilderSlotsToFill !== undefined &&
      (obj.partyBuilderSlotsToFill = Math.round(message.partyBuilderSlotsToFill));
    message.partyBuilderMatchGroups !== undefined &&
      (obj.partyBuilderMatchGroups = Math.round(message.partyBuilderMatchGroups));
    message.partyBuilderStartTime !== undefined &&
      (obj.partyBuilderStartTime = Math.round(message.partyBuilderStartTime));
    message.soloQueue !== undefined && (obj.soloQueue = message.soloQueue);
    message.steamClanAccountId !== undefined && (obj.steamClanAccountId = Math.round(message.steamClanAccountId));
    message.readyCheck !== undefined &&
      (obj.readyCheck = message.readyCheck ? CMsgReadyCheckStatus.toJSON(message.readyCheck) : undefined);
    message.customGameDisabledUntilDate !== undefined &&
      (obj.customGameDisabledUntilDate = Math.round(message.customGameDisabledUntilDate));
    message.customGameDisabledAccountId !== undefined &&
      (obj.customGameDisabledAccountId = Math.round(message.customGameDisabledAccountId));
    message.isChallengeMatch !== undefined && (obj.isChallengeMatch = message.isChallengeMatch);
    message.partySearchBeaconActive !== undefined && (obj.partySearchBeaconActive = message.partySearchBeaconActive);
    message.matchmakingFlags !== undefined && (obj.matchmakingFlags = Math.round(message.matchmakingFlags));
    message.highPriorityState !== undefined &&
      (obj.highPriorityState = eHighPriorityMMStateToJSON(message.highPriorityState));
    message.laneSelectionsEnabled !== undefined && (obj.laneSelectionsEnabled = message.laneSelectionsEnabled);
    message.customGameDifficultyMask !== undefined &&
      (obj.customGameDifficultyMask = Math.round(message.customGameDifficultyMask));
    message.isSteamChina !== undefined && (obj.isSteamChina = message.isSteamChina);
    message.botDifficultyMask !== undefined && (obj.botDifficultyMask = Math.round(message.botDifficultyMask));
    message.botScriptIndexMask !== undefined && (obj.botScriptIndexMask = Math.round(message.botScriptIndexMask));
    return obj;
  },

  create(base?: DeepPartial<CSODOTAParty>): CSODOTAParty {
    return CSODOTAParty.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSODOTAParty>): CSODOTAParty {
    const message = createBaseCSODOTAParty();
    message.partyId = object.partyId ?? "0";
    message.leaderId = object.leaderId ?? "0";
    message.memberIds = object.memberIds?.map((e) => e) || [];
    message.gameModes = object.gameModes ?? 0;
    message.state = object.state ?? 0;
    message.effectiveStartedMatchmakingTime = object.effectiveStartedMatchmakingTime ?? 0;
    message.rawStartedMatchmakingTime = object.rawStartedMatchmakingTime ?? 0;
    message.attemptStartTime = object.attemptStartTime ?? 0;
    message.attemptNum = object.attemptNum ?? 0;
    message.matchgroups = object.matchgroups ?? 0;
    message.lowPriorityAccountId = object.lowPriorityAccountId ?? 0;
    message.matchType = object.matchType ?? 0;
    message.teamId = object.teamId ?? 0;
    message.teamName = object.teamName ?? "";
    message.teamUiLogo = object.teamUiLogo ?? "0";
    message.teamBaseLogo = object.teamBaseLogo ?? "0";
    message.matchDisabledUntilDate = object.matchDisabledUntilDate ?? 0;
    message.matchDisabledAccountId = object.matchDisabledAccountId ?? 0;
    message.matchmakingMaxRangeMinutes = object.matchmakingMaxRangeMinutes ?? 0;
    message.matchlanguages = object.matchlanguages ?? 0;
    message.members = object.members?.map((e) => CSODOTAPartyMember.fromPartial(e)) || [];
    message.lowPriorityGamesRemaining = object.lowPriorityGamesRemaining ?? 0;
    message.openForJoinRequests = object.openForJoinRequests ?? false;
    message.sentInvites = object.sentInvites?.map((e) => CSODOTAPartyInvite.fromPartial(e)) || [];
    message.recvInvites = object.recvInvites?.map((e) => CSODOTAPartyInvite.fromPartial(e)) || [];
    message.accountFlags = object.accountFlags ?? 0;
    message.regionSelectFlags = object.regionSelectFlags ?? 0;
    message.exclusiveTournamentId = object.exclusiveTournamentId ?? 0;
    message.tourneyDivisionId = object.tourneyDivisionId ?? 0;
    message.tourneyScheduleTime = object.tourneyScheduleTime ?? 0;
    message.tourneySkillLevel = object.tourneySkillLevel ?? 0;
    message.tourneyBracketRound = object.tourneyBracketRound ?? 0;
    message.tourneyQueueDeadlineTime = object.tourneyQueueDeadlineTime ?? 0;
    message.tourneyQueueDeadlineState = object.tourneyQueueDeadlineState ?? 0;
    message.partyBuilderSlotsToFill = object.partyBuilderSlotsToFill ?? 0;
    message.partyBuilderMatchGroups = object.partyBuilderMatchGroups ?? 0;
    message.partyBuilderStartTime = object.partyBuilderStartTime ?? 0;
    message.soloQueue = object.soloQueue ?? false;
    message.steamClanAccountId = object.steamClanAccountId ?? 0;
    message.readyCheck = (object.readyCheck !== undefined && object.readyCheck !== null)
      ? CMsgReadyCheckStatus.fromPartial(object.readyCheck)
      : undefined;
    message.customGameDisabledUntilDate = object.customGameDisabledUntilDate ?? 0;
    message.customGameDisabledAccountId = object.customGameDisabledAccountId ?? 0;
    message.isChallengeMatch = object.isChallengeMatch ?? false;
    message.partySearchBeaconActive = object.partySearchBeaconActive ?? false;
    message.matchmakingFlags = object.matchmakingFlags ?? 0;
    message.highPriorityState = object.highPriorityState ?? 0;
    message.laneSelectionsEnabled = object.laneSelectionsEnabled ?? false;
    message.customGameDifficultyMask = object.customGameDifficultyMask ?? 0;
    message.isSteamChina = object.isSteamChina ?? false;
    message.botDifficultyMask = object.botDifficultyMask ?? 0;
    message.botScriptIndexMask = object.botScriptIndexMask ?? 0;
    return message;
  },
};

function createBaseCSODOTAPartyInvite(): CSODOTAPartyInvite {
  return {
    groupId: "0",
    senderId: "0",
    senderName: "",
    members: [],
    teamId: 0,
    lowPriorityStatus: false,
    asCoach: false,
    inviteGid: "0",
  };
}

export const CSODOTAPartyInvite = {
  encode(message: CSODOTAPartyInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CSODOTAPartyInvite_PartyMember.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.teamId !== 0) {
      writer.uint32(40).uint32(message.teamId);
    }
    if (message.lowPriorityStatus === true) {
      writer.uint32(48).bool(message.lowPriorityStatus);
    }
    if (message.asCoach === true) {
      writer.uint32(56).bool(message.asCoach);
    }
    if (message.inviteGid !== "0") {
      writer.uint32(65).fixed64(message.inviteGid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTAPartyInvite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTAPartyInvite();
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

          message.members.push(CSODOTAPartyInvite_PartyMember.decode(reader, reader.uint32()));
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

          message.lowPriorityStatus = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.asCoach = reader.bool();
          continue;
        case 8:
          if (tag != 65) {
            break;
          }

          message.inviteGid = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSODOTAPartyInvite {
    return {
      groupId: isSet(object.groupId) ? String(object.groupId) : "0",
      senderId: isSet(object.senderId) ? String(object.senderId) : "0",
      senderName: isSet(object.senderName) ? String(object.senderName) : "",
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => CSODOTAPartyInvite_PartyMember.fromJSON(e))
        : [],
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      lowPriorityStatus: isSet(object.lowPriorityStatus) ? Boolean(object.lowPriorityStatus) : false,
      asCoach: isSet(object.asCoach) ? Boolean(object.asCoach) : false,
      inviteGid: isSet(object.inviteGid) ? String(object.inviteGid) : "0",
    };
  },

  toJSON(message: CSODOTAPartyInvite): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.senderId !== undefined && (obj.senderId = message.senderId);
    message.senderName !== undefined && (obj.senderName = message.senderName);
    if (message.members) {
      obj.members = message.members.map((e) => e ? CSODOTAPartyInvite_PartyMember.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.lowPriorityStatus !== undefined && (obj.lowPriorityStatus = message.lowPriorityStatus);
    message.asCoach !== undefined && (obj.asCoach = message.asCoach);
    message.inviteGid !== undefined && (obj.inviteGid = message.inviteGid);
    return obj;
  },

  create(base?: DeepPartial<CSODOTAPartyInvite>): CSODOTAPartyInvite {
    return CSODOTAPartyInvite.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSODOTAPartyInvite>): CSODOTAPartyInvite {
    const message = createBaseCSODOTAPartyInvite();
    message.groupId = object.groupId ?? "0";
    message.senderId = object.senderId ?? "0";
    message.senderName = object.senderName ?? "";
    message.members = object.members?.map((e) => CSODOTAPartyInvite_PartyMember.fromPartial(e)) || [];
    message.teamId = object.teamId ?? 0;
    message.lowPriorityStatus = object.lowPriorityStatus ?? false;
    message.asCoach = object.asCoach ?? false;
    message.inviteGid = object.inviteGid ?? "0";
    return message;
  },
};

function createBaseCSODOTAPartyInvite_PartyMember(): CSODOTAPartyInvite_PartyMember {
  return { name: "", steamId: "0", isCoach: false };
}

export const CSODOTAPartyInvite_PartyMember = {
  encode(message: CSODOTAPartyInvite_PartyMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.steamId !== "0") {
      writer.uint32(17).fixed64(message.steamId);
    }
    if (message.isCoach === true) {
      writer.uint32(32).bool(message.isCoach);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTAPartyInvite_PartyMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTAPartyInvite_PartyMember();
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
        case 4:
          if (tag != 32) {
            break;
          }

          message.isCoach = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSODOTAPartyInvite_PartyMember {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      isCoach: isSet(object.isCoach) ? Boolean(object.isCoach) : false,
    };
  },

  toJSON(message: CSODOTAPartyInvite_PartyMember): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.isCoach !== undefined && (obj.isCoach = message.isCoach);
    return obj;
  },

  create(base?: DeepPartial<CSODOTAPartyInvite_PartyMember>): CSODOTAPartyInvite_PartyMember {
    return CSODOTAPartyInvite_PartyMember.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSODOTAPartyInvite_PartyMember>): CSODOTAPartyInvite_PartyMember {
    const message = createBaseCSODOTAPartyInvite_PartyMember();
    message.name = object.name ?? "";
    message.steamId = object.steamId ?? "0";
    message.isCoach = object.isCoach ?? false;
    return message;
  },
};

function createBaseCMsgLeaverState(): CMsgLeaverState {
  return {
    lobbyState: 0,
    gameState: 0,
    leaverDetected: false,
    firstBloodHappened: false,
    discardMatchResults: false,
    massDisconnect: false,
  };
}

export const CMsgLeaverState = {
  encode(message: CMsgLeaverState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lobbyState !== 0) {
      writer.uint32(8).uint32(message.lobbyState);
    }
    if (message.gameState !== 0) {
      writer.uint32(16).int32(message.gameState);
    }
    if (message.leaverDetected === true) {
      writer.uint32(24).bool(message.leaverDetected);
    }
    if (message.firstBloodHappened === true) {
      writer.uint32(32).bool(message.firstBloodHappened);
    }
    if (message.discardMatchResults === true) {
      writer.uint32(40).bool(message.discardMatchResults);
    }
    if (message.massDisconnect === true) {
      writer.uint32(48).bool(message.massDisconnect);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLeaverState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLeaverState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.lobbyState = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gameState = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.leaverDetected = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.firstBloodHappened = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.discardMatchResults = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.massDisconnect = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgLeaverState {
    return {
      lobbyState: isSet(object.lobbyState) ? Number(object.lobbyState) : 0,
      gameState: isSet(object.gameState) ? dOTAGameStateFromJSON(object.gameState) : 0,
      leaverDetected: isSet(object.leaverDetected) ? Boolean(object.leaverDetected) : false,
      firstBloodHappened: isSet(object.firstBloodHappened) ? Boolean(object.firstBloodHappened) : false,
      discardMatchResults: isSet(object.discardMatchResults) ? Boolean(object.discardMatchResults) : false,
      massDisconnect: isSet(object.massDisconnect) ? Boolean(object.massDisconnect) : false,
    };
  },

  toJSON(message: CMsgLeaverState): unknown {
    const obj: any = {};
    message.lobbyState !== undefined && (obj.lobbyState = Math.round(message.lobbyState));
    message.gameState !== undefined && (obj.gameState = dOTAGameStateToJSON(message.gameState));
    message.leaverDetected !== undefined && (obj.leaverDetected = message.leaverDetected);
    message.firstBloodHappened !== undefined && (obj.firstBloodHappened = message.firstBloodHappened);
    message.discardMatchResults !== undefined && (obj.discardMatchResults = message.discardMatchResults);
    message.massDisconnect !== undefined && (obj.massDisconnect = message.massDisconnect);
    return obj;
  },

  create(base?: DeepPartial<CMsgLeaverState>): CMsgLeaverState {
    return CMsgLeaverState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgLeaverState>): CMsgLeaverState {
    const message = createBaseCMsgLeaverState();
    message.lobbyState = object.lobbyState ?? 0;
    message.gameState = object.gameState ?? 0;
    message.leaverDetected = object.leaverDetected ?? false;
    message.firstBloodHappened = object.firstBloodHappened ?? false;
    message.discardMatchResults = object.discardMatchResults ?? false;
    message.massDisconnect = object.massDisconnect ?? false;
    return message;
  },
};

function createBaseCMsgReadyCheckStatus(): CMsgReadyCheckStatus {
  return { startTimestamp: 0, finishTimestamp: 0, initiatorAccountId: 0, readyMembers: [] };
}

export const CMsgReadyCheckStatus = {
  encode(message: CMsgReadyCheckStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startTimestamp !== 0) {
      writer.uint32(8).uint32(message.startTimestamp);
    }
    if (message.finishTimestamp !== 0) {
      writer.uint32(16).uint32(message.finishTimestamp);
    }
    if (message.initiatorAccountId !== 0) {
      writer.uint32(24).uint32(message.initiatorAccountId);
    }
    for (const v of message.readyMembers) {
      CMsgReadyCheckStatus_ReadyMember.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgReadyCheckStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgReadyCheckStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.startTimestamp = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.finishTimestamp = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.initiatorAccountId = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.readyMembers.push(CMsgReadyCheckStatus_ReadyMember.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgReadyCheckStatus {
    return {
      startTimestamp: isSet(object.startTimestamp) ? Number(object.startTimestamp) : 0,
      finishTimestamp: isSet(object.finishTimestamp) ? Number(object.finishTimestamp) : 0,
      initiatorAccountId: isSet(object.initiatorAccountId) ? Number(object.initiatorAccountId) : 0,
      readyMembers: Array.isArray(object?.readyMembers)
        ? object.readyMembers.map((e: any) => CMsgReadyCheckStatus_ReadyMember.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgReadyCheckStatus): unknown {
    const obj: any = {};
    message.startTimestamp !== undefined && (obj.startTimestamp = Math.round(message.startTimestamp));
    message.finishTimestamp !== undefined && (obj.finishTimestamp = Math.round(message.finishTimestamp));
    message.initiatorAccountId !== undefined && (obj.initiatorAccountId = Math.round(message.initiatorAccountId));
    if (message.readyMembers) {
      obj.readyMembers = message.readyMembers.map((e) => e ? CMsgReadyCheckStatus_ReadyMember.toJSON(e) : undefined);
    } else {
      obj.readyMembers = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgReadyCheckStatus>): CMsgReadyCheckStatus {
    return CMsgReadyCheckStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgReadyCheckStatus>): CMsgReadyCheckStatus {
    const message = createBaseCMsgReadyCheckStatus();
    message.startTimestamp = object.startTimestamp ?? 0;
    message.finishTimestamp = object.finishTimestamp ?? 0;
    message.initiatorAccountId = object.initiatorAccountId ?? 0;
    message.readyMembers = object.readyMembers?.map((e) => CMsgReadyCheckStatus_ReadyMember.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgReadyCheckStatus_ReadyMember(): CMsgReadyCheckStatus_ReadyMember {
  return { accountId: 0, readyStatus: 0 };
}

export const CMsgReadyCheckStatus_ReadyMember = {
  encode(message: CMsgReadyCheckStatus_ReadyMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.readyStatus !== 0) {
      writer.uint32(16).int32(message.readyStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgReadyCheckStatus_ReadyMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgReadyCheckStatus_ReadyMember();
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

          message.readyStatus = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgReadyCheckStatus_ReadyMember {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      readyStatus: isSet(object.readyStatus) ? eReadyCheckStatusFromJSON(object.readyStatus) : 0,
    };
  },

  toJSON(message: CMsgReadyCheckStatus_ReadyMember): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.readyStatus !== undefined && (obj.readyStatus = eReadyCheckStatusToJSON(message.readyStatus));
    return obj;
  },

  create(base?: DeepPartial<CMsgReadyCheckStatus_ReadyMember>): CMsgReadyCheckStatus_ReadyMember {
    return CMsgReadyCheckStatus_ReadyMember.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgReadyCheckStatus_ReadyMember>): CMsgReadyCheckStatus_ReadyMember {
    const message = createBaseCMsgReadyCheckStatus_ReadyMember();
    message.accountId = object.accountId ?? 0;
    message.readyStatus = object.readyStatus ?? 0;
    return message;
  },
};

function createBaseCMsgPartyReadyCheckRequest(): CMsgPartyReadyCheckRequest {
  return {};
}

export const CMsgPartyReadyCheckRequest = {
  encode(_: CMsgPartyReadyCheckRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPartyReadyCheckRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPartyReadyCheckRequest();
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

  fromJSON(_: any): CMsgPartyReadyCheckRequest {
    return {};
  },

  toJSON(_: CMsgPartyReadyCheckRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CMsgPartyReadyCheckRequest>): CMsgPartyReadyCheckRequest {
    return CMsgPartyReadyCheckRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CMsgPartyReadyCheckRequest>): CMsgPartyReadyCheckRequest {
    const message = createBaseCMsgPartyReadyCheckRequest();
    return message;
  },
};

function createBaseCMsgPartyReadyCheckResponse(): CMsgPartyReadyCheckResponse {
  return { result: 0 };
}

export const CMsgPartyReadyCheckResponse = {
  encode(message: CMsgPartyReadyCheckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPartyReadyCheckResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPartyReadyCheckResponse();
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

  fromJSON(object: any): CMsgPartyReadyCheckResponse {
    return { result: isSet(object.result) ? eReadyCheckRequestResultFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgPartyReadyCheckResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = eReadyCheckRequestResultToJSON(message.result));
    return obj;
  },

  create(base?: DeepPartial<CMsgPartyReadyCheckResponse>): CMsgPartyReadyCheckResponse {
    return CMsgPartyReadyCheckResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgPartyReadyCheckResponse>): CMsgPartyReadyCheckResponse {
    const message = createBaseCMsgPartyReadyCheckResponse();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseCMsgPartyReadyCheckAcknowledge(): CMsgPartyReadyCheckAcknowledge {
  return { readyStatus: 0 };
}

export const CMsgPartyReadyCheckAcknowledge = {
  encode(message: CMsgPartyReadyCheckAcknowledge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.readyStatus !== 0) {
      writer.uint32(8).int32(message.readyStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPartyReadyCheckAcknowledge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPartyReadyCheckAcknowledge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.readyStatus = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPartyReadyCheckAcknowledge {
    return { readyStatus: isSet(object.readyStatus) ? eReadyCheckStatusFromJSON(object.readyStatus) : 0 };
  },

  toJSON(message: CMsgPartyReadyCheckAcknowledge): unknown {
    const obj: any = {};
    message.readyStatus !== undefined && (obj.readyStatus = eReadyCheckStatusToJSON(message.readyStatus));
    return obj;
  },

  create(base?: DeepPartial<CMsgPartyReadyCheckAcknowledge>): CMsgPartyReadyCheckAcknowledge {
    return CMsgPartyReadyCheckAcknowledge.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgPartyReadyCheckAcknowledge>): CMsgPartyReadyCheckAcknowledge {
    const message = createBaseCMsgPartyReadyCheckAcknowledge();
    message.readyStatus = object.readyStatus ?? 0;
    return message;
  },
};

function createBaseCMsgLobbyEventGameDetails(): CMsgLobbyEventGameDetails {
  return { kvData: Buffer.alloc(0) };
}

export const CMsgLobbyEventGameDetails = {
  encode(message: CMsgLobbyEventGameDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kvData.length !== 0) {
      writer.uint32(10).bytes(message.kvData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyEventGameDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyEventGameDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.kvData = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgLobbyEventGameDetails {
    return { kvData: isSet(object.kvData) ? Buffer.from(bytesFromBase64(object.kvData)) : Buffer.alloc(0) };
  },

  toJSON(message: CMsgLobbyEventGameDetails): unknown {
    const obj: any = {};
    message.kvData !== undefined &&
      (obj.kvData = base64FromBytes(message.kvData !== undefined ? message.kvData : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CMsgLobbyEventGameDetails>): CMsgLobbyEventGameDetails {
    return CMsgLobbyEventGameDetails.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgLobbyEventGameDetails>): CMsgLobbyEventGameDetails {
    const message = createBaseCMsgLobbyEventGameDetails();
    message.kvData = object.kvData ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgMatchMatchmakingStats(): CMsgMatchMatchmakingStats {
  return { averageQueueTime: 0, maximumQueueTime: 0, behaviorScoreVariance: 0 };
}

export const CMsgMatchMatchmakingStats = {
  encode(message: CMsgMatchMatchmakingStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.averageQueueTime !== 0) {
      writer.uint32(8).uint32(message.averageQueueTime);
    }
    if (message.maximumQueueTime !== 0) {
      writer.uint32(16).uint32(message.maximumQueueTime);
    }
    if (message.behaviorScoreVariance !== 0) {
      writer.uint32(24).int32(message.behaviorScoreVariance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMatchMatchmakingStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMatchMatchmakingStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.averageQueueTime = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.maximumQueueTime = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.behaviorScoreVariance = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgMatchMatchmakingStats {
    return {
      averageQueueTime: isSet(object.averageQueueTime) ? Number(object.averageQueueTime) : 0,
      maximumQueueTime: isSet(object.maximumQueueTime) ? Number(object.maximumQueueTime) : 0,
      behaviorScoreVariance: isSet(object.behaviorScoreVariance)
        ? eMatchBehaviorScoreVarianceFromJSON(object.behaviorScoreVariance)
        : 0,
    };
  },

  toJSON(message: CMsgMatchMatchmakingStats): unknown {
    const obj: any = {};
    message.averageQueueTime !== undefined && (obj.averageQueueTime = Math.round(message.averageQueueTime));
    message.maximumQueueTime !== undefined && (obj.maximumQueueTime = Math.round(message.maximumQueueTime));
    message.behaviorScoreVariance !== undefined &&
      (obj.behaviorScoreVariance = eMatchBehaviorScoreVarianceToJSON(message.behaviorScoreVariance));
    return obj;
  },

  create(base?: DeepPartial<CMsgMatchMatchmakingStats>): CMsgMatchMatchmakingStats {
    return CMsgMatchMatchmakingStats.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgMatchMatchmakingStats>): CMsgMatchMatchmakingStats {
    const message = createBaseCMsgMatchMatchmakingStats();
    message.averageQueueTime = object.averageQueueTime ?? 0;
    message.maximumQueueTime = object.maximumQueueTime ?? 0;
    message.behaviorScoreVariance = object.behaviorScoreVariance ?? 0;
    return message;
  },
};

function createBaseCMvpData(): CMvpData {
  return { mvps: [] };
}

export const CMvpData = {
  encode(message: CMvpData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mvps) {
      CMvpData_MvpDatum.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMvpData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMvpData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.mvps.push(CMvpData_MvpDatum.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMvpData {
    return { mvps: Array.isArray(object?.mvps) ? object.mvps.map((e: any) => CMvpData_MvpDatum.fromJSON(e)) : [] };
  },

  toJSON(message: CMvpData): unknown {
    const obj: any = {};
    if (message.mvps) {
      obj.mvps = message.mvps.map((e) => e ? CMvpData_MvpDatum.toJSON(e) : undefined);
    } else {
      obj.mvps = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMvpData>): CMvpData {
    return CMvpData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMvpData>): CMvpData {
    const message = createBaseCMvpData();
    message.mvps = object.mvps?.map((e) => CMvpData_MvpDatum.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMvpData_MvpDatum(): CMvpData_MvpDatum {
  return { playerSlot: 0, accolades: [] };
}

export const CMvpData_MvpDatum = {
  encode(message: CMvpData_MvpDatum, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerSlot !== 0) {
      writer.uint32(8).uint32(message.playerSlot);
    }
    for (const v of message.accolades) {
      CMvpData_MvpDatum_MvpAccolade.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMvpData_MvpDatum {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMvpData_MvpDatum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerSlot = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.accolades.push(CMvpData_MvpDatum_MvpAccolade.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMvpData_MvpDatum {
    return {
      playerSlot: isSet(object.playerSlot) ? Number(object.playerSlot) : 0,
      accolades: Array.isArray(object?.accolades)
        ? object.accolades.map((e: any) => CMvpData_MvpDatum_MvpAccolade.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMvpData_MvpDatum): unknown {
    const obj: any = {};
    message.playerSlot !== undefined && (obj.playerSlot = Math.round(message.playerSlot));
    if (message.accolades) {
      obj.accolades = message.accolades.map((e) => e ? CMvpData_MvpDatum_MvpAccolade.toJSON(e) : undefined);
    } else {
      obj.accolades = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMvpData_MvpDatum>): CMvpData_MvpDatum {
    return CMvpData_MvpDatum.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMvpData_MvpDatum>): CMvpData_MvpDatum {
    const message = createBaseCMvpData_MvpDatum();
    message.playerSlot = object.playerSlot ?? 0;
    message.accolades = object.accolades?.map((e) => CMvpData_MvpDatum_MvpAccolade.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMvpData_MvpDatum_MvpAccolade(): CMvpData_MvpDatum_MvpAccolade {
  return { type: 1, detailValue: 0 };
}

export const CMvpData_MvpDatum_MvpAccolade = {
  encode(message: CMvpData_MvpDatum_MvpAccolade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 1) {
      writer.uint32(8).int32(message.type);
    }
    if (message.detailValue !== 0) {
      writer.uint32(21).float(message.detailValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMvpData_MvpDatum_MvpAccolade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMvpData_MvpDatum_MvpAccolade();
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
          if (tag != 21) {
            break;
          }

          message.detailValue = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMvpData_MvpDatum_MvpAccolade {
    return {
      type: isSet(object.type) ? cMvpData_MvpDatum_MvpAccolade_MvpAccoladeTypeFromJSON(object.type) : 1,
      detailValue: isSet(object.detailValue) ? Number(object.detailValue) : 0,
    };
  },

  toJSON(message: CMvpData_MvpDatum_MvpAccolade): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = cMvpData_MvpDatum_MvpAccolade_MvpAccoladeTypeToJSON(message.type));
    message.detailValue !== undefined && (obj.detailValue = message.detailValue);
    return obj;
  },

  create(base?: DeepPartial<CMvpData_MvpDatum_MvpAccolade>): CMvpData_MvpDatum_MvpAccolade {
    return CMvpData_MvpDatum_MvpAccolade.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMvpData_MvpDatum_MvpAccolade>): CMvpData_MvpDatum_MvpAccolade {
    const message = createBaseCMvpData_MvpDatum_MvpAccolade();
    message.type = object.type ?? 1;
    message.detailValue = object.detailValue ?? 0;
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
