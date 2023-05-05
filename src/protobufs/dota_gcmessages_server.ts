/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  CMatchAdditionalUnitInventory,
  CMatchHeroSelectEvent,
  CMatchPlayerAbilityUpgrade,
  CMatchPlayerPermanentBuff,
  CMatchPlayerTimedStats,
  CMatchTeamTimedStats,
  CMsgClientToGCRerollPlayerChallenge,
  CMsgDOTAFantasyPlayerStats,
  CMsgDOTAMatch,
  CMsgDOTARealtimeGameStatsTerse,
  CMsgMapStatsSnapshot,
  CMsgStickerHeroes,
  CProtoItemHeroStatue,
  DOTATournamentEvents,
  dOTATournamentEventsFromJSON,
  dOTATournamentEventsToJSON,
} from "./dota_gcmessages_common";
import { CLobbyTimedRewardDetails, CSODOTALobbyMember } from "./dota_gcmessages_common_lobby";
import { CMsgLeaverState, CMvpData } from "./dota_gcmessages_common_match_management";
import {
  CMsgDOTACombatLogEntry,
  DOTABotDifficulty,
  dOTABotDifficultyFromJSON,
  dOTABotDifficultyToJSON,
  DOTAGameState,
  dOTAGameStateFromJSON,
  dOTAGameStateToJSON,
  dotaGcTeam,
  dotaGcTeamFromJSON,
  dotaGcTeamToJSON,
  DOTALeaverStatusT,
  dOTALeaverStatusTFromJSON,
  dOTALeaverStatusTToJSON,
  EEvent,
  eEventFromJSON,
  eEventToJSON,
  EPlayerChallengeHistoryType,
  ePlayerChallengeHistoryTypeFromJSON,
  ePlayerChallengeHistoryTypeToJSON,
} from "./dota_shared_enums";
import { CMsgEconPlayerStrangeCountAdjustment } from "./econ_gcmessages";
import { CExtraMsgBlock } from "./gcsdk_gcmessages";
import {
  ENetworkDisconnectionReason,
  eNetworkDisconnectionReasonFromJSON,
  eNetworkDisconnectionReasonToJSON,
} from "./network_connection";
import { CMsgSteamLearnHMACKeys } from "./steammessages_steamlearn.steamworkssdk";

export enum EPoorNetworkConditionsType {
  k_EPoorNetworkConditions_None = 0,
  k_EPoorNetworkConditions_Unknown = 1,
  k_EPoorNetworkConditions_MassDisconnect = 2,
  k_EPoorNetworkConditions_ExcessBadQosIntervals = 3,
}

export function ePoorNetworkConditionsTypeFromJSON(object: any): EPoorNetworkConditionsType {
  switch (object) {
    case 0:
    case "k_EPoorNetworkConditions_None":
      return EPoorNetworkConditionsType.k_EPoorNetworkConditions_None;
    case 1:
    case "k_EPoorNetworkConditions_Unknown":
      return EPoorNetworkConditionsType.k_EPoorNetworkConditions_Unknown;
    case 2:
    case "k_EPoorNetworkConditions_MassDisconnect":
      return EPoorNetworkConditionsType.k_EPoorNetworkConditions_MassDisconnect;
    case 3:
    case "k_EPoorNetworkConditions_ExcessBadQosIntervals":
      return EPoorNetworkConditionsType.k_EPoorNetworkConditions_ExcessBadQosIntervals;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EPoorNetworkConditionsType");
  }
}

export function ePoorNetworkConditionsTypeToJSON(object: EPoorNetworkConditionsType): string {
  switch (object) {
    case EPoorNetworkConditionsType.k_EPoorNetworkConditions_None:
      return "k_EPoorNetworkConditions_None";
    case EPoorNetworkConditionsType.k_EPoorNetworkConditions_Unknown:
      return "k_EPoorNetworkConditions_Unknown";
    case EPoorNetworkConditionsType.k_EPoorNetworkConditions_MassDisconnect:
      return "k_EPoorNetworkConditions_MassDisconnect";
    case EPoorNetworkConditionsType.k_EPoorNetworkConditions_ExcessBadQosIntervals:
      return "k_EPoorNetworkConditions_ExcessBadQosIntervals";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EPoorNetworkConditionsType");
  }
}

export interface CMsgPoorNetworkConditions {
  detectionType: EPoorNetworkConditionsType;
  players: CMsgPoorNetworkConditions_Player[];
}

export interface CMsgPoorNetworkConditions_Player {
  accountId: number;
  disconnectReason: ENetworkDisconnectionReason;
  numBadIntervals: number;
  peakLossPct: number;
}

export interface CMsgGameserverCrash {
  matchId: string;
  lobbyId: string;
  gameState: DOTAGameState;
  sentinelSaveTime: number;
  customGameId: string;
  tournamentId: number;
  serverSteamId: string;
  serverPublicIpAddr: number;
  serverPort: number;
  serverCluster: number;
  pid: number;
  engine: number;
}

export interface CMsgConnectedPlayers {
  connectedPlayers: CMsgConnectedPlayers_Player[];
  disconnectedPlayers: CMsgConnectedPlayers_Player[];
  gameState: DOTAGameState;
  firstBloodHappened: boolean;
  poorNetworkConditions: CMsgPoorNetworkConditions | undefined;
  sendReason: CMsgConnectedPlayers_SendReason;
  radiantKills: number;
  direKills: number;
  radiantLead: number;
  buildingState: number;
  playerDraft: CMsgConnectedPlayers_PlayerDraft[];
}

export enum CMsgConnectedPlayers_SendReason {
  INVALID = 0,
  HEARTBEAT = 1,
  GAME_STATE = 2,
  FIRST_BLOOD = 3,
  PLAYER_CONNECTED = 4,
  PLAYER_HERO = 5,
  PLAYER_DISCONNECTED_CONSEQUENCES = 6,
  PLAYER_DISCONNECTED_NOCONSEQUENCES = 7,
  GAMESTATE_TIMEOUT = 10,
  MASS_DISCONNECT = 11,
  KILLS = 13,
  BUILDING_STATE = 14,
}

export function cMsgConnectedPlayers_SendReasonFromJSON(object: any): CMsgConnectedPlayers_SendReason {
  switch (object) {
    case 0:
    case "INVALID":
      return CMsgConnectedPlayers_SendReason.INVALID;
    case 1:
    case "HEARTBEAT":
      return CMsgConnectedPlayers_SendReason.HEARTBEAT;
    case 2:
    case "GAME_STATE":
      return CMsgConnectedPlayers_SendReason.GAME_STATE;
    case 3:
    case "FIRST_BLOOD":
      return CMsgConnectedPlayers_SendReason.FIRST_BLOOD;
    case 4:
    case "PLAYER_CONNECTED":
      return CMsgConnectedPlayers_SendReason.PLAYER_CONNECTED;
    case 5:
    case "PLAYER_HERO":
      return CMsgConnectedPlayers_SendReason.PLAYER_HERO;
    case 6:
    case "PLAYER_DISCONNECTED_CONSEQUENCES":
      return CMsgConnectedPlayers_SendReason.PLAYER_DISCONNECTED_CONSEQUENCES;
    case 7:
    case "PLAYER_DISCONNECTED_NOCONSEQUENCES":
      return CMsgConnectedPlayers_SendReason.PLAYER_DISCONNECTED_NOCONSEQUENCES;
    case 10:
    case "GAMESTATE_TIMEOUT":
      return CMsgConnectedPlayers_SendReason.GAMESTATE_TIMEOUT;
    case 11:
    case "MASS_DISCONNECT":
      return CMsgConnectedPlayers_SendReason.MASS_DISCONNECT;
    case 13:
    case "KILLS":
      return CMsgConnectedPlayers_SendReason.KILLS;
    case 14:
    case "BUILDING_STATE":
      return CMsgConnectedPlayers_SendReason.BUILDING_STATE;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgConnectedPlayers_SendReason",
      );
  }
}

export function cMsgConnectedPlayers_SendReasonToJSON(object: CMsgConnectedPlayers_SendReason): string {
  switch (object) {
    case CMsgConnectedPlayers_SendReason.INVALID:
      return "INVALID";
    case CMsgConnectedPlayers_SendReason.HEARTBEAT:
      return "HEARTBEAT";
    case CMsgConnectedPlayers_SendReason.GAME_STATE:
      return "GAME_STATE";
    case CMsgConnectedPlayers_SendReason.FIRST_BLOOD:
      return "FIRST_BLOOD";
    case CMsgConnectedPlayers_SendReason.PLAYER_CONNECTED:
      return "PLAYER_CONNECTED";
    case CMsgConnectedPlayers_SendReason.PLAYER_HERO:
      return "PLAYER_HERO";
    case CMsgConnectedPlayers_SendReason.PLAYER_DISCONNECTED_CONSEQUENCES:
      return "PLAYER_DISCONNECTED_CONSEQUENCES";
    case CMsgConnectedPlayers_SendReason.PLAYER_DISCONNECTED_NOCONSEQUENCES:
      return "PLAYER_DISCONNECTED_NOCONSEQUENCES";
    case CMsgConnectedPlayers_SendReason.GAMESTATE_TIMEOUT:
      return "GAMESTATE_TIMEOUT";
    case CMsgConnectedPlayers_SendReason.MASS_DISCONNECT:
      return "MASS_DISCONNECT";
    case CMsgConnectedPlayers_SendReason.KILLS:
      return "KILLS";
    case CMsgConnectedPlayers_SendReason.BUILDING_STATE:
      return "BUILDING_STATE";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgConnectedPlayers_SendReason",
      );
  }
}

export interface CMsgConnectedPlayers_Player {
  steamId: string;
  heroId: number;
  leaverState: CMsgLeaverState | undefined;
  disconnectReason: ENetworkDisconnectionReason;
}

export interface CMsgConnectedPlayers_PlayerDraft {
  steamId: string;
  team: dotaGcTeam;
  teamSlot: number;
}

export interface CMsgGameServerInfo {
  serverPublicIpAddr: number;
  serverPrivateIpAddr: number;
  serverPort: number;
  serverTvPort: number;
  assignedServerTvPort: number;
  legacyServerSteamdatagramAddress: Buffer;
  serverKey: string;
  serverHibernation: boolean;
  serverType: CMsgGameServerInfo_ServerType;
  serverRegion: number;
  serverLoadavg: number;
  serverTvBroadcastTime: number;
  serverGameTime: number;
  serverRelayConnectedSteamId: string;
  relaySlotsMax: number;
  relaysConnected: number;
  relayClientsConnected: number;
  relayedGameServerSteamId: string;
  parentRelayCount: number;
  tvSecretCode: string;
  serverVersion: number;
  serverCluster: number;
  allowCustomGames: CMsgGameServerInfo_CustomGames;
  buildVersion: number;
  tfServerCount: number;
  srcdsInstance: number;
  devForceServerType: boolean;
  isRecordingMatchTrainingData: boolean;
}

export enum CMsgGameServerInfo_ServerType {
  UNSPECIFIED = 0,
  GAME = 1,
  PROXY = 2,
  TENSORFLOW = 3,
  DOTA_ONLY = 4,
  CUSTOM_GAME_ONLY = 5,
  EVENT_GAME_ONLY = 6,
}

export function cMsgGameServerInfo_ServerTypeFromJSON(object: any): CMsgGameServerInfo_ServerType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return CMsgGameServerInfo_ServerType.UNSPECIFIED;
    case 1:
    case "GAME":
      return CMsgGameServerInfo_ServerType.GAME;
    case 2:
    case "PROXY":
      return CMsgGameServerInfo_ServerType.PROXY;
    case 3:
    case "TENSORFLOW":
      return CMsgGameServerInfo_ServerType.TENSORFLOW;
    case 4:
    case "DOTA_ONLY":
      return CMsgGameServerInfo_ServerType.DOTA_ONLY;
    case 5:
    case "CUSTOM_GAME_ONLY":
      return CMsgGameServerInfo_ServerType.CUSTOM_GAME_ONLY;
    case 6:
    case "EVENT_GAME_ONLY":
      return CMsgGameServerInfo_ServerType.EVENT_GAME_ONLY;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGameServerInfo_ServerType",
      );
  }
}

export function cMsgGameServerInfo_ServerTypeToJSON(object: CMsgGameServerInfo_ServerType): string {
  switch (object) {
    case CMsgGameServerInfo_ServerType.UNSPECIFIED:
      return "UNSPECIFIED";
    case CMsgGameServerInfo_ServerType.GAME:
      return "GAME";
    case CMsgGameServerInfo_ServerType.PROXY:
      return "PROXY";
    case CMsgGameServerInfo_ServerType.TENSORFLOW:
      return "TENSORFLOW";
    case CMsgGameServerInfo_ServerType.DOTA_ONLY:
      return "DOTA_ONLY";
    case CMsgGameServerInfo_ServerType.CUSTOM_GAME_ONLY:
      return "CUSTOM_GAME_ONLY";
    case CMsgGameServerInfo_ServerType.EVENT_GAME_ONLY:
      return "EVENT_GAME_ONLY";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGameServerInfo_ServerType",
      );
  }
}

export enum CMsgGameServerInfo_CustomGames {
  BOTH = 0,
  NONE = 1,
  ONLY = 2,
  EVENT = 3,
}

export function cMsgGameServerInfo_CustomGamesFromJSON(object: any): CMsgGameServerInfo_CustomGames {
  switch (object) {
    case 0:
    case "BOTH":
      return CMsgGameServerInfo_CustomGames.BOTH;
    case 1:
    case "NONE":
      return CMsgGameServerInfo_CustomGames.NONE;
    case 2:
    case "ONLY":
      return CMsgGameServerInfo_CustomGames.ONLY;
    case 3:
    case "EVENT":
      return CMsgGameServerInfo_CustomGames.EVENT;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGameServerInfo_CustomGames",
      );
  }
}

export function cMsgGameServerInfo_CustomGamesToJSON(object: CMsgGameServerInfo_CustomGames): string {
  switch (object) {
    case CMsgGameServerInfo_CustomGames.BOTH:
      return "BOTH";
    case CMsgGameServerInfo_CustomGames.NONE:
      return "NONE";
    case CMsgGameServerInfo_CustomGames.ONLY:
      return "ONLY";
    case CMsgGameServerInfo_CustomGames.EVENT:
      return "EVENT";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGameServerInfo_CustomGames",
      );
  }
}

export interface CMsgLeaverDetected {
  steamId: string;
  leaverStatus: DOTALeaverStatusT;
  leaverState: CMsgLeaverState | undefined;
  serverCluster: number;
  disconnectReason: ENetworkDisconnectionReason;
  poorNetworkConditions: CMsgPoorNetworkConditions | undefined;
}

export interface CMsgLeaverDetectedResponse {
  result: number;
}

export interface CMsgDOTAFantasyFinalPlayerStats {
  stats: CMsgDOTAFantasyPlayerStats[];
}

export interface CMsgDOTAFantasyLivePlayerStats {
  stats: CMsgDOTAFantasyPlayerStats[];
}

export interface CMsgServerToGCRealtimeStats {
  delayed: CMsgDOTARealtimeGameStatsTerse | undefined;
}

export interface CMsgGCToServerRealtimeStatsStartStop {
  delayed: boolean;
}

export interface CMsgGCToServerUpdateSteamBroadcasting {
  active: boolean;
}

export interface CMsgSignOutGameplayStats {
  teams: CMsgSignOutGameplayStats_CTeam[];
}

export interface CMsgSignOutGameplayStats_CPlayer {
  steamId: string;
  playerSlot: number;
  heroId: number;
  timedPlayerStats: CMatchPlayerTimedStats[];
}

export interface CMsgSignOutGameplayStats_CTeam {
  isWinningTeam: boolean;
  isRadiantTeam: boolean;
  timedTeamStats: CMatchTeamTimedStats[];
  players: CMsgSignOutGameplayStats_CPlayer[];
}

export interface CMsgGameMatchSignOut {
  matchId: string;
  duration: number;
  goodGuysWin: boolean;
  date: number;
  teams: CMsgGameMatchSignOut_CTeam[];
  towerStatus: number[];
  barracksStatus: number[];
  cluster: number;
  serverAddr: string;
  firstBloodTime: number;
  eventScore: number;
  picksBans: CMatchHeroSelectEvent[];
  fantasyStats: CMsgDOTAFantasyPlayerStats[];
  playerStrangeCountAdjustments: CMsgEconPlayerStrangeCountAdjustment[];
  automaticSurrender: boolean;
  serverVersion: number;
  poorNetworkConditions: CMsgPoorNetworkConditions | undefined;
  additionalMsgs: CMsgGameMatchSignOut_CAdditionalSignoutMsg[];
  socialFeedEvents: CMsgGameMatchSignOut_CSocialFeedMatchEvent[];
  averageNetworthDelta: number;
  customGameData: CMsgGameMatchSignOut_CCustomGameData | undefined;
  matchFlags: number;
  teamScores: number[];
  preGameDuration: number;
  eventGameLeaderboardEntries: CMsgGameMatchSignOut_EventGameLeaderboardEntry[];
  wardPlacements: CMsgGameMatchSignOut_WardPlacement[];
  gameplayStats: CMsgSignOutGameplayStats | undefined;
  extraMessages: CExtraMsgBlock[];
  trainingDataRecorded: boolean;
  winningTeam: dotaGcTeam;
  normalizedWinProbabilityDiff: number;
}

export interface CMsgGameMatchSignOut_CTeam {
  players: CMsgGameMatchSignOut_CTeam_CPlayer[];
}

export interface CMsgGameMatchSignOut_CTeam_CPlayer {
  steamId: string;
  heroId: number;
  items: number[];
  itemPurchaseTimes: number[];
  gold: number;
  kills: number;
  deaths: number;
  assists: number;
  leaverStatus: number;
  lastHits: number;
  denies: number;
  goldPerMin: number;
  xpPerMinute: number;
  goldSpent: number;
  level: number;
  scaledHeroDamage: number;
  scaledTowerDamage: number;
  scaledHeroHealing: number;
  timeLastSeen: number;
  supportAbilityValue: number;
  partyId: string;
  claimedFarmGold: number;
  supportGold: number;
  claimedDenies: number;
  claimedMisses: number;
  misses: number;
  netWorth: number;
  heroDamage: number;
  towerDamage: number;
  heroHealing: number;
  abilityUpgrades: CMatchPlayerAbilityUpgrade[];
  additionalUnitsInventory: CMatchAdditionalUnitInventory[];
  permanentBuffs: CMatchPlayerPermanentBuff[];
  customGameData: CMsgGameMatchSignOut_CTeam_CPlayer_CCustomGameData | undefined;
  matchPlayerFlags: number;
  talentAbilityIds: number[];
  heroPickOrder: number;
  heroWasRandomed: boolean;
  heroWasDotaPlusSuggestion: boolean;
  lane: number;
  isUsingPlusGuide: boolean;
  heroDamageReceived: CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived[];
  heroDamageDealt: CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived[];
  secondsDead: number;
  goldLostToDeath: number;
  commandCount: number;
  mouseClickCastCommandCount: number;
  teleportsUsed: number;
  cavernCrawlPreferredMapVariant: number;
  bountyRunes: number;
  outpostsCaptured: number;
  dewards: number;
  wardsPlaced: number;
  campsStacked: number;
  playerSlot: number;
  predictedPosition: number;
  laneOutcomes: number;
  friendlyT1DestroyedTime: number;
  enemyT1DestroyedTime: number;
  friendlyRoshanKills: number;
  enemyRoshanKills: number;
  powerRunes: number;
  waterRunes: number;
  stunDuration: number;
  teamNumber: dotaGcTeam;
  teamSlot: number;
  timePurchasedShard: number;
  timePurchasedAghs: number;
  abilityDraftAbilities: number[];
}

export enum CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageType {
  HERO_DAMAGE_PHYSICAL = 0,
  HERO_DAMAGE_MAGICAL = 1,
  HERO_DAMAGE_PURE = 2,
}

export function cMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageTypeFromJSON(
  object: any,
): CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageType {
  switch (object) {
    case 0:
    case "HERO_DAMAGE_PHYSICAL":
      return CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageType.HERO_DAMAGE_PHYSICAL;
    case 1:
    case "HERO_DAMAGE_MAGICAL":
      return CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageType.HERO_DAMAGE_MAGICAL;
    case 2:
    case "HERO_DAMAGE_PURE":
      return CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageType.HERO_DAMAGE_PURE;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageType",
      );
  }
}

export function cMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageTypeToJSON(
  object: CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageType,
): string {
  switch (object) {
    case CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageType.HERO_DAMAGE_PHYSICAL:
      return "HERO_DAMAGE_PHYSICAL";
    case CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageType.HERO_DAMAGE_MAGICAL:
      return "HERO_DAMAGE_MAGICAL";
    case CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageType.HERO_DAMAGE_PURE:
      return "HERO_DAMAGE_PURE";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageType",
      );
  }
}

export interface CMsgGameMatchSignOut_CTeam_CPlayer_CCustomGameData {
  dotaTeam: number;
  winner: boolean;
}

export interface CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived {
  preReduction: number;
  postReduction: number;
  damageType: CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageType;
}

export interface CMsgGameMatchSignOut_CAdditionalSignoutMsg {
  id: number;
  contents: Buffer;
}

export interface CMsgGameMatchSignOut_CSocialFeedMatchEvent {
  accountId: number;
  timestamp: number;
  eventType: number;
  gameTime: number;
  replayTime: number;
}

export interface CMsgGameMatchSignOut_CCustomGameData {
  publishTimestamp: number;
}

export interface CMsgGameMatchSignOut_EventGameLeaderboardEntry {
  nameSuffix: string;
  score: number;
  extraData1: number;
  extraData2: number;
  extraData3: number;
  extraData4: number;
  extraData5: number;
}

export interface CMsgGameMatchSignOut_WardPlacement {
  playerId: number;
  teamId: number;
  placedTime: number;
  buildingState: number;
  creepState: number;
  roshanAlive: boolean;
  positionX: number;
  positionY: number;
}

export interface CMsgSignOutDraftInfo {
  radiantCaptainAccountId: number;
  direCaptainAccountId: number;
  picksBans: CMatchHeroSelectEvent[];
}

export interface CMsgSignOutBotInfo {
  allowCheats: boolean;
  botDifficultyRadiant: DOTABotDifficulty;
  createdLobby: boolean;
  botDifficultyDire: DOTABotDifficulty;
}

export interface CMsgSignOutTextMuteInfo {
  textMuteMessages: CMsgSignOutTextMuteInfo_TextMuteMessage[];
}

export interface CMsgSignOutTextMuteInfo_TextMuteMessage {
  region: number;
  causedTextMute: boolean;
  chatMessage: string;
}

export interface CMsgSignOutPlayerStats {
  accountId: number;
  matchId: string;
  rank: number;
  heroId: number;
  rampages: number;
  tripleKills: number;
  firstBloodClaimed: number;
  firstBloodGiven: number;
  couriersKilled: number;
  aegisesSnatched: number;
  cheesesEaten: number;
  creepsStacked: number;
  fightScore: number;
  farmScore: number;
  supportScore: number;
  pushScore: number;
  kills: number;
  deaths: number;
  assists: number;
  lastHits: number;
  denies: number;
  gpm: number;
  xppm: number;
  netWorth: number;
  damage: number;
  heals: number;
  rapiersPurchased: number;
  observerWardsPlaced: number;
  wardsDestroyed: number;
  lobbyType: number;
}

export interface CMsgSignOutCommunicationSummary {
  players: CMsgSignOutCommunicationSummary_PlayerCommunication[];
}

export interface CMsgSignOutCommunicationSummary_PlayerCommunication {
  accountId: number;
  pings: number;
  maxPingsPerInterval: number;
  teammatePings: number;
  maxTeammatePingsPerInterval: number;
  teamChatMessages: number;
  allChatMessages: number;
  chatWheelMessages: number;
  pauses: number;
  unpauses: number;
  linesDrawn: number;
  voiceChatSeconds: number;
  chatMutes: number;
  voiceMutes: number;
  pingDetails: CMsgSignOutCommunicationSummary_PlayerCommunication_PingDetail[];
  commsBlocksSolo: number;
  commsBlocksMass: number;
}

export interface CMsgSignOutCommunicationSummary_PlayerCommunication_PingDetail {
  type: number;
  count: number;
}

export interface CMsgGameMatchSignoutResponse {
  matchId: string;
  replaySalt: number;
  timedRewardDetails: CLobbyTimedRewardDetails[];
  xpRewardDetails: CSODOTALobbyMember[];
  leagueid: number;
  metadataPrivateKey: number;
  matchDetails: CMsgDOTAMatch | undefined;
  playersMetadata: CMsgGameMatchSignoutResponse_PlayerMetadata[];
  mvpData: CMvpData | undefined;
  owPrivateKey: string;
  owSalt: number;
  owReplayId: string;
}

export interface CMsgGameMatchSignoutResponse_PlayerMetadata {
  heroId: number;
  avgKillsX16: number;
  avgDeathsX16: number;
  avgAssistsX16: number;
  avgGpmX16: number;
  avgXpmX16: number;
  bestKillsX16: number;
  bestAssistsX16: number;
  bestGpmX16: number;
  bestXpmX16: number;
  winStreak: number;
  bestWinStreak: number;
  gamesPlayed: number;
}

export interface CMsgTimedRewardContainer {
  timedRewardDetails: CLobbyTimedRewardDetails[];
}

export interface CMsgGameMatchSignOutPermissionRequest {
  serverVersion: number;
  localAttempt: number;
  totalAttempt: number;
  secondsWaited: number;
}

export interface CMsgGameMatchSignOutPermissionResponse {
  permissionGranted: boolean;
  abandonSignout: boolean;
  retryDelaySeconds: number;
}

export interface CMsgGameMatchSignOutEventGameData {
  eventId: EEvent;
  gameName: string;
  mapName: string;
  eventGameData: Buffer;
  startTime: number;
}

export interface CMsgGameMatchSignOutPerfData {
  averageFrameTime: number[];
  maxFrameTime: number[];
  serverAverageFrameTime: number;
  serverMaxFrameTime: number;
  averageComputeTime: number[];
  maxComputeTime: number[];
  averageClientTickTime: number[];
  maxClientTickTime: number[];
  averageClientSimulateTime: number[];
  maxClientSimulateTime: number[];
  averageOutputTime: number[];
  maxOutputTime: number[];
  averageWaitForRenderingToCompleteTime: number[];
  maxWaitForRenderingToCompleteTime: number[];
  averageSwapTime: number[];
  maxSwapTime: number[];
  averageFrameUpdateTime: number[];
  maxFrameUpdateTime: number[];
  averageIdleTime: number[];
  maxIdleTime: number[];
  averageInputProcessingTime: number[];
  maxInputProcessingTime: number[];
}

export interface CMsgGameMatchSignOutBanData {
  heroBans: number[];
  heroBanVotes: number[];
}

export interface CMsgDOTALiveScoreboardUpdate {
  tournamentId: number;
  tournamentGameId: number;
  duration: number;
  hltvDelay: number;
  teamGood: CMsgDOTALiveScoreboardUpdate_Team | undefined;
  teamBad: CMsgDOTALiveScoreboardUpdate_Team | undefined;
  roshanRespawnTimer: number;
  leagueId: number;
  matchId: string;
}

export interface CMsgDOTALiveScoreboardUpdate_Team {
  players: CMsgDOTALiveScoreboardUpdate_Team_Player[];
  score: number;
  towerState: number;
  barracksState: number;
  heroPicks: number[];
  heroBans: number[];
}

export interface CMsgDOTALiveScoreboardUpdate_Team_Player {
  playerSlot: number;
  playerName: string;
  heroName: string;
  heroId: number;
  kills: number;
  deaths: number;
  assists: number;
  lastHits: number;
  denies: number;
  gold: number;
  level: number;
  goldPerMin: number;
  xpPerMin: number;
  ultimateState: CMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateState;
  ultimateCooldown: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  respawnTimer: number;
  accountId: number;
  positionX: number;
  positionY: number;
  netWorth: number;
  abilities: CMsgDOTALiveScoreboardUpdate_Team_Player_HeroAbility[];
}

export enum CMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateState {
  k_EDOTAUltimateStateNotLearned = 0,
  k_EDOTAUltimateStateCooldown = 1,
  k_EDOTAUltimateStateNeedsMana = 2,
  k_EDOTAUltimateStateReady = 3,
}

export function cMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateStateFromJSON(
  object: any,
): CMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateState {
  switch (object) {
    case 0:
    case "k_EDOTAUltimateStateNotLearned":
      return CMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateState.k_EDOTAUltimateStateNotLearned;
    case 1:
    case "k_EDOTAUltimateStateCooldown":
      return CMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateState.k_EDOTAUltimateStateCooldown;
    case 2:
    case "k_EDOTAUltimateStateNeedsMana":
      return CMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateState.k_EDOTAUltimateStateNeedsMana;
    case 3:
    case "k_EDOTAUltimateStateReady":
      return CMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateState.k_EDOTAUltimateStateReady;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateState",
      );
  }
}

export function cMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateStateToJSON(
  object: CMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateState,
): string {
  switch (object) {
    case CMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateState.k_EDOTAUltimateStateNotLearned:
      return "k_EDOTAUltimateStateNotLearned";
    case CMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateState.k_EDOTAUltimateStateCooldown:
      return "k_EDOTAUltimateStateCooldown";
    case CMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateState.k_EDOTAUltimateStateNeedsMana:
      return "k_EDOTAUltimateStateNeedsMana";
    case CMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateState.k_EDOTAUltimateStateReady:
      return "k_EDOTAUltimateStateReady";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateState",
      );
  }
}

export interface CMsgDOTALiveScoreboardUpdate_Team_Player_HeroAbility {
  abilityId: number;
  abilityLevel: number;
}

export interface CMsgServerToGCRequestBatchPlayerResources {
  accountIds: number[];
  rankTypes: number[];
}

export interface CMsgServerToGCRequestBatchPlayerResourcesResponse {
  results: CMsgServerToGCRequestBatchPlayerResourcesResponse_Result[];
}

export interface CMsgServerToGCRequestBatchPlayerResourcesResponse_Result {
  accountId: number;
  preventTextChat: boolean;
  preventVoiceChat: boolean;
  rank: number;
  rankCalibrated: boolean;
  lowPriority: boolean;
  isNewPlayer: boolean;
  isGuidePlayer: boolean;
}

export interface CMsgDOTAPlayerFailedToConnect {
  failedLoaders: string[];
  abandonedLoaders: string[];
}

export interface CMsgGCToRelayConnect {
  sourceTvPublicAddr: number;
  sourceTvPrivateAddr: number;
  sourceTvPort: number;
  gameServerSteamId: string;
  parentCount: number;
  tvUniqueSecretCode: string;
  sourceTvSteamid: string;
}

export interface CMsgGCGCToLANServerRelayConnect {
  relaySteamid: string;
}

export interface CMsgGCBanStatusRequest {
  accountId: number;
}

export interface CMsgGCBanStatusResponse {
  result: number;
  lowPriority: boolean;
  textChatBanned: boolean;
  voiceChatBanned: boolean;
}

export interface CMsgTournamentItemEvent {
  killerAccountId: number;
  victimAccountId: number;
  eventType: DOTATournamentEvents;
  tvDelay: number;
  dotaTime: number;
  replayTime: number;
  lootList: string;
  eventTeam: number;
  multiKillCount: number;
  winnerScore: number;
  loserScore: number;
  heroStatues: CProtoItemHeroStatue[];
}

export interface CMsgTournamentItemEventResponse {
  eventType: DOTATournamentEvents;
  viewersGranted: number;
}

export interface CMsgTeamFanfare {
  matchId: string;
}

export interface CMsgResponseTeamFanfare {
  fanfareGoodguys: number;
  fanfareBadguys: number;
}

export interface CMsgGameServerUploadSaveGame {
  gameTime: number;
  saveGameData: Buffer;
  lobbyId: string;
  playerSteamIds: string[];
}

export interface CMsgGameServerSaveGameResult {
  result: CMsgGameServerSaveGameResult_Result;
}

export enum CMsgGameServerSaveGameResult_Result {
  SaveSuccessful = 0,
  SessionNotFound = 1,
  DatabaseError = 2,
  TooBig = 3,
}

export function cMsgGameServerSaveGameResult_ResultFromJSON(object: any): CMsgGameServerSaveGameResult_Result {
  switch (object) {
    case 0:
    case "SaveSuccessful":
      return CMsgGameServerSaveGameResult_Result.SaveSuccessful;
    case 1:
    case "SessionNotFound":
      return CMsgGameServerSaveGameResult_Result.SessionNotFound;
    case 2:
    case "DatabaseError":
      return CMsgGameServerSaveGameResult_Result.DatabaseError;
    case 3:
    case "TooBig":
      return CMsgGameServerSaveGameResult_Result.TooBig;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGameServerSaveGameResult_Result",
      );
  }
}

export function cMsgGameServerSaveGameResult_ResultToJSON(object: CMsgGameServerSaveGameResult_Result): string {
  switch (object) {
    case CMsgGameServerSaveGameResult_Result.SaveSuccessful:
      return "SaveSuccessful";
    case CMsgGameServerSaveGameResult_Result.SessionNotFound:
      return "SessionNotFound";
    case CMsgGameServerSaveGameResult_Result.DatabaseError:
      return "DatabaseError";
    case CMsgGameServerSaveGameResult_Result.TooBig:
      return "TooBig";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGameServerSaveGameResult_Result",
      );
  }
}

export interface CMsgGameServerGetLoadGame {
  saveId: number;
}

export interface CMsgGameServerGetLoadGameResult {
  saveGameData: Buffer;
}

export interface CMsgDOTAAwardEventPoints {
  awardPoints: CMsgDOTAAwardEventPoints_AwardPoints[];
  matchId: string;
  eventId: EEvent;
  timestamp: number;
  auditAction: number;
}

export interface CMsgDOTAAwardEventPoints_AwardPoints {
  accountId: number;
  points: number;
  premiumPoints: number;
  tradeBanTime: number;
  eligibleForPeriodicAdjustment: boolean;
  pointCapPeriodicResourceId: number;
}

export interface CMsgGCToServerPingRequest {
  requestId: string;
  requestTime: string;
}

export interface CMsgGCToServerPingResponse {
  requestId: string;
  requestTime: string;
  cluster: number;
}

export interface CMsgServerToGCMatchConnectionStats {
  matchId: string;
  regionId: number;
  leagueId: number;
  players: CMsgServerToGCMatchConnectionStats_Player[];
  clusterId: number;
}

export interface CMsgServerToGCMatchConnectionStats_Player {
  accountId: number;
  ip: number;
  avgPingMs: number;
  packetLoss: number;
  pingDeviation: number;
  fullResends: number;
}

export interface CMsgServerGCUpdateSpectatorCount {
  spectatorCount: number;
}

export interface CSerializedCombatLog {
  version: number;
  dictionary: CSerializedCombatLog_Dictionary | undefined;
  entries: CMsgDOTACombatLogEntry[];
}

export interface CSerializedCombatLog_Dictionary {
  strings: CSerializedCombatLog_Dictionary_DictString[];
}

export interface CSerializedCombatLog_Dictionary_DictString {
  id: number;
  value: string;
}

export interface CMsgServerToGCVictoryPredictions {
  records: CMsgServerToGCVictoryPredictions_Record[];
}

export interface CMsgServerToGCVictoryPredictions_Record {
  accountId: number;
  itemId: string;
  itemIds: string[];
}

export interface CMsgServerToGCRequestStatus {
}

export interface CMsgServerToGCRequestStatusResponse {
  response: number;
}

export interface CMsgSignOutAssassinMiniGameInfo {
  winningPlayers: string[];
  losingPlayers: string[];
  arcanaOwners: string[];
  assassinWon: boolean;
  targetHeroId: number;
  contractCompleted: boolean;
  contractCompleteTime: number;
  paIsRadiant: boolean;
}

export interface CMsgServerToGCKillSummaries {
  ingameeventId: number;
  summaries: CMsgServerToGCKillSummaries_KillSummary[];
}

export interface CMsgServerToGCKillSummaries_KillSummary {
  killerHeroId: number;
  victimHeroId: number;
  killCount: number;
}

export interface CMsgGCToServerPredictionResult {
  accountId: number;
  matchId: string;
  correct: boolean;
  predictions: CMsgGCToServerPredictionResult_Prediction[];
}

export interface CMsgGCToServerPredictionResult_Prediction {
  itemDef: number;
  numCorrect: number;
  numFails: number;
  result: CMsgGCToServerPredictionResult_Prediction_EResult;
  grantedItemDefs: number[];
}

export enum CMsgGCToServerPredictionResult_Prediction_EResult {
  k_eResult_ItemGranted = 1,
  k_eResult_Destroyed = 2,
}

export function cMsgGCToServerPredictionResult_Prediction_EResultFromJSON(
  object: any,
): CMsgGCToServerPredictionResult_Prediction_EResult {
  switch (object) {
    case 1:
    case "k_eResult_ItemGranted":
      return CMsgGCToServerPredictionResult_Prediction_EResult.k_eResult_ItemGranted;
    case 2:
    case "k_eResult_Destroyed":
      return CMsgGCToServerPredictionResult_Prediction_EResult.k_eResult_Destroyed;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGCToServerPredictionResult_Prediction_EResult",
      );
  }
}

export function cMsgGCToServerPredictionResult_Prediction_EResultToJSON(
  object: CMsgGCToServerPredictionResult_Prediction_EResult,
): string {
  switch (object) {
    case CMsgGCToServerPredictionResult_Prediction_EResult.k_eResult_ItemGranted:
      return "k_eResult_ItemGranted";
    case CMsgGCToServerPredictionResult_Prediction_EResult.k_eResult_Destroyed:
      return "k_eResult_Destroyed";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGCToServerPredictionResult_Prediction_EResult",
      );
  }
}

export interface CMsgServerToGCLockCharmTrading {
  accountId: number;
  itemId: string;
}

export interface CMsgSignOutUpdatePlayerChallenge {
  accountId: number;
  completed: CMsgSignOutUpdatePlayerChallenge_Challenge[];
  rerolled: CMsgSignOutUpdatePlayerChallenge_Challenge[];
  matchId: string;
  heroId: number;
}

export interface CMsgSignOutUpdatePlayerChallenge_Challenge {
  eventId: EEvent;
  slotId: number;
  sequenceId: number;
  progress: number;
  challengeRank: number;
}

export interface CMsgServerToGCRerollPlayerChallenge {
  accountId: number;
  rerollMsg: CMsgClientToGCRerollPlayerChallenge | undefined;
}

export interface CMsgSpendWager {
  players: CMsgSpendWager_Player[];
  eventId: EEvent;
  timestamp: number;
  matchId: string;
  serverSteamId: string;
}

export interface CMsgSpendWager_Player {
  accountId: number;
  wager: number;
  wagerTokenItemId: string;
}

export interface CMsgSignOutXPCoins {
  players: CMsgSignOutXPCoins_Player[];
  eventId: EEvent;
  matchId: string;
  timestamp: number;
}

export interface CMsgSignOutXPCoins_Player {
  accountId: number;
  xpGained: number;
  coinsSpent: number;
  wagerTokenItemId: string;
  rankWager: number;
  wagerStreak: number;
}

export interface CMsgSignOutBounties {
  bounties: CMsgSignOutBounties_Bounty[];
  eventId: EEvent;
  matchId: string;
  timestamp: number;
}

export interface CMsgSignOutBounties_Bounty {
  issuerAccountId: number;
  completerAccountId: number;
  targetAccountId: number;
}

export interface CMsgSignOutCommunityGoalProgress {
  eventId: EEvent;
  eventIncrements: CMsgSignOutCommunityGoalProgress_EventGoalIncrement[];
}

export interface CMsgSignOutCommunityGoalProgress_EventGoalIncrement {
  eventGoalId: number;
  incrementAmount: number;
}

export interface CMsgServerToGCCloseCompendiumInGamePredictionVoting {
  matchId: string;
  hltvDelay: number;
  leagueId: number;
}

export interface CMsgServerToGCCloseCompendiumInGamePredictionVotingResponse {
  result: boolean;
}

export interface CMsgServerToGCCompendiumInGamePredictionResults {
  matchId: string;
  results: CMsgServerToGCCompendiumInGamePredictionResults_PredictionResult[];
  leagueId: number;
  leagueNodeId: number;
}

export interface CMsgServerToGCCompendiumInGamePredictionResults_PredictionResult {
  predictionId: number;
  predictionValue: number;
  predictionValueIsMask: boolean;
}

export interface CMsgServerToGCCompendiumChosenInGamePredictions {
  matchId: string;
  predictionsChosen: CMsgServerToGCCompendiumChosenInGamePredictions_Prediction[];
  leagueId: number;
}

export interface CMsgServerToGCCompendiumChosenInGamePredictions_Prediction {
  predictionId: number;
}

export interface CMsgGCToGCCompendiumInGamePredictionResults {
  results: CMsgServerToGCCompendiumInGamePredictionResults | undefined;
}

export interface CMsgServerToGCMatchPlayerItemPurchaseHistory {
  matchId: string;
  mmr: number;
  players: CMsgServerToGCMatchPlayerItemPurchaseHistory_Player[];
}

export interface CMsgServerToGCMatchPlayerItemPurchaseHistory_ItemPurchase {
  item: number;
  gold: number;
  netWorth: number;
  gameTime: number;
  inventoryItems: number[];
  talentsSkilled: boolean[];
}

export interface CMsgServerToGCMatchPlayerItemPurchaseHistory_Player {
  playerSlot: number;
  accountId: number;
  heroId: number;
  alliedHeroIds: number[];
  enemyHeroIds: number[];
  itemPurchases: CMsgServerToGCMatchPlayerItemPurchaseHistory_ItemPurchase[];
  lane: number;
  isWinner: boolean;
}

export interface CMsgServerToGCMatchPlayerNeutralItemEquipHistory {
  matchId: string;
  players: CMsgServerToGCMatchPlayerNeutralItemEquipHistory_Player[];
}

export interface CMsgServerToGCMatchPlayerNeutralItemEquipHistory_ItemEquip {
  item: number;
  gameTime: number;
  inventoryItems: number[];
  talentsSkilled: boolean[];
  availableNeutralItems: number[];
}

export interface CMsgServerToGCMatchPlayerNeutralItemEquipHistory_Player {
  accountId: number;
  alliedHeroIds: number[];
  enemyHeroIds: number[];
  itemEquips: CMsgServerToGCMatchPlayerNeutralItemEquipHistory_ItemEquip[];
  isWinner: boolean;
}

export interface CMsgServerToGCMatchStateHistory {
  matchId: string;
  radiantWon: boolean;
  mmr: number;
  matchStates: CMsgServerToGCMatchStateHistory_MatchState[];
}

export interface CMsgServerToGCMatchStateHistory_PlayerState {
  heroId: number;
  netWorth: number;
  level: number;
  deaths: number;
  respawnTime: number;
  hasBuyback: boolean;
  hasAegis: boolean;
  hasRapier: boolean;
  distance: number;
}

export interface CMsgServerToGCMatchStateHistory_TeamState {
  team: number;
  playerStates: CMsgServerToGCMatchStateHistory_PlayerState[];
  towerHealthPct: number[];
  barracksHealthPct: number[];
  ancientHealthPct: number;
  glyphCooldown: number;
  kills: number;
  creepDistanceSafe: number;
  creepDistanceMid: number;
  creepDistanceOff: number;
}

export interface CMsgServerToGCMatchStateHistory_MatchState {
  gameTime: number;
  radiantState: CMsgServerToGCMatchStateHistory_TeamState | undefined;
  direState: CMsgServerToGCMatchStateHistory_TeamState | undefined;
}

export interface CMsgMatchStateSteamMLEntry {
  matchState: CMsgServerToGCMatchStateHistory_MatchState | undefined;
  mmr: number;
  radiantWon: boolean;
}

export interface CMsgLaneSelectionSteamMLEntry {
  heroIds: number[];
  lanes: number[];
}

export interface CMsgAbilitySelectionSteamMLEntry {
  mmr: number;
  heroId: number;
  enemyHeroIds: number[];
  lane: number;
  abilities: number[];
  selectedAbility: number;
}

export interface CMsgItemPurchasePregameSteamMLEntry {
  mmr: number;
  lane: number;
  balance: number;
  heroId: number;
  alliedHeroIds: number[];
  enemyHeroIds: number[];
  items: number[];
}

export interface CMsgItemPurchaseSteamMLEntry {
  mmr: number;
  lane: number;
  heroId: number;
  alliedHeroIds: number[];
  enemyHeroIds: number[];
  items: number[];
  itemsToBePurchased: number[];
}

export interface CMsgItemPurchaseSequenceSteamMLEntry {
  mmr: number;
  lane: number;
  heroId: number;
  alliedHeroIds: number[];
  enemyHeroIds: number[];
  items: number[];
  itemToBePurchased: number;
}

export interface CMsgServerToGCCavernCrawlIsHeroActive {
  eventId: number;
  accountId: number;
  preferredMapVariant: number;
  heroId: number;
  turboMode: boolean;
}

export interface CMsgServerToGCPlayerChallengeHistory {
  matchId: string;
  averageRank: number;
  challengeRecords: CMsgServerToGCPlayerChallengeHistory_PlayerChallenge[];
}

export interface CMsgServerToGCPlayerChallengeHistory_PlayerChallenge {
  accountId: number;
  challengeType: EPlayerChallengeHistoryType;
  challengeId1: number;
  challengeId2: number;
  progressValueStart: number;
  progressValueEnd: number;
  teamWon: boolean;
  auditData: string;
  heroId: number;
  rankCompleted: number;
}

export interface CMsgServerToGCCavernCrawlIsHeroActiveResponse {
  result: boolean;
  mapVariant: number;
  potentialWinnings: number;
  mapResults: CMsgServerToGCCavernCrawlIsHeroActiveResponse_MapResults[];
  potentialPlusShardWinnings: number;
}

export interface CMsgServerToGCCavernCrawlIsHeroActiveResponse_MapResults {
  pathIdCompleted: number;
  roomIdClaimed: number;
}

export interface CMsgGCtoServerTensorflowInstance {
  serverInstance: number;
}

export interface CMsgDetailedGameStats {
  minutes: CMsgDetailedGameStats_MinuteEntry[];
  playerInfo: CMsgDetailedGameStats_PlayerInfo[];
  gameStats: CMsgDetailedGameStats_GameStats | undefined;
}

export interface CMsgDetailedGameStats_PlayerStatEntry {
  totalEarnedGold: number;
  totalNetworth: number;
  level: number;
  totalDps: number;
  averageDps: number;
  abilityDamageOutput: number;
  baseHealth: number;
  totalHealth: number;
  totalMana: number;
  basePhysicalDamageReductionPct: number;
  totalPhysicalDamageReductionPct: number;
  baseAbilityDamageReductionPct: number;
  totalAbilityDamageReductionPct: number;
  abilityDamageBlock: number;
  physicalDamageBlock: number;
  manaRegen: number;
  healthRegen: number;
  physicalMagicDmgPct: number;
  kills: number;
  deaths: number;
  assists: number;
  goldFromKills: number;
  goldFromCreeps: number;
  goldShared: number;
  xpFromKills: number;
  xpFromCreeps: number;
  totalXp: number;
  abilityCasts: number;
  itemCasts: number;
  totalTimeStunned: number;
  itemCount: number;
}

export interface CMsgDetailedGameStats_GameStats {
  towerDeathTimeT1: number;
  towerDeathTimeT2: number;
  towerDeathTimeT3: number;
}

export interface CMsgDetailedGameStats_MinuteEntry {
  minute: number;
  stats: CMsgDetailedGameStats_PlayerStatEntry[];
}

export interface CMsgDetailedGameStats_PlayerInfo {
  accountId: number;
  heroId: number;
  playerSlot: number;
}

export interface CMsgNeutralItemStats {
  neutralItems: CMsgNeutralItemStats_NeutralItem[];
}

export interface CMsgNeutralItemStats_NeutralItem {
  itemId: number;
  timeDropped: number;
  team: number;
  timeLastEquipped: number;
  timeLastUnequipped: number;
  durationEquipped: number;
}

export interface CMsgGCToServerLobbyHeroBanRates {
  banData: CMsgGCToServerLobbyHeroBanRates_HeroBanEntry[];
}

export interface CMsgGCToServerLobbyHeroBanRates_HeroBanEntry {
  heroId: number;
  banCount: number;
  pickCount: number;
}

export interface CMsgSignOutGuildContractProgress {
  playerContracts: CMsgSignOutGuildContractProgress_PlayerContract[];
}

export interface CMsgSignOutGuildContractProgress_CompletedGuildEventContracts {
  guildId: number;
  eventId: number;
  contracts: string[];
}

export interface CMsgSignOutGuildContractProgress_PlayerContract {
  accountId: number;
  completedContracts: CMsgSignOutGuildContractProgress_CompletedGuildEventContracts[];
}

export interface CMsgSignOutGuildChallengeProgress {
  guildChallengesProgresses: CMsgSignOutGuildChallengeProgress_ChallengeProgress[];
}

export interface CMsgSignOutGuildChallengeProgress_ChallengeProgress {
  guildId: number;
  eventId: number;
  challengeInstanceId: number;
  challengeInstanceTimestamp: number;
  challengePeriodSerial: number;
  progress: number;
  challengeParameter: number;
}

export interface CMsgSignOutMVPStats {
  matchId: string;
  gameMode: number;
  winningTeam: number;
  gameTime: number;
  players: CMsgSignOutMVPStats_Player[];
}

export interface CMsgSignOutMVPStats_Player {
  teamId: number;
  teamNetworthRank: number;
  accountId: number;
  playerSlot: number;
  rank: number;
  heroId: number;
  role: number;
  kills: number;
  deaths: number;
  assists: number;
  xp: number;
  netWorth: number;
  supportGoldSpent: number;
  wardsPlaced: number;
  wardsSpottedForDewarding: number;
  campsStacked: number;
  lastHits: number;
  denies: number;
  buildingDamage: number;
  otherDamage: number;
  tripleKills: number;
  rampages: number;
  firstBlood: number;
  killEaterEvents: CMsgSignOutMVPStats_Player_KillEaterEvent[];
  highestKillstreak: number;
}

export interface CMsgSignOutMVPStats_Player_KillEaterEvent {
  eventType: number;
  amount: number;
}

export interface CMsgGCToServerRecordTrainingData {
  enable: boolean;
}

export interface CMsgServerToGCGetGuildContracts {
  accountIds: number[];
}

export interface CMsgServerToGCGetGuildContractsResponse {
  playerContracts: CMsgServerToGCGetGuildContractsResponse_Player[];
}

export interface CMsgServerToGCGetGuildContractsResponse_ContractDetails {
  contractId: string;
  challengeInstanceId: number;
  challengeParameter: number;
  contractStars: number;
  contractSlot: number;
}

export interface CMsgServerToGCGetGuildContractsResponse_Player {
  accountId: number;
  guildId: number;
  eventId: EEvent;
  contracts: CMsgServerToGCGetGuildContractsResponse_ContractDetails[];
}

export interface CMsgMatchDiretideCandy {
  playerCandyData: CMsgMatchDiretideCandy_PlayerCandy[];
  eventId: EEvent;
}

export interface CMsgMatchDiretideCandy_CandyDetails {
  amount: number;
  audit: number;
}

export interface CMsgMatchDiretideCandy_PlayerCandy {
  accountId: number;
  candyAmount: number;
  consumesPeriodicResource: boolean;
  candyBreakdown: CMsgMatchDiretideCandy_CandyDetails[];
}

export interface CMsgGCToServerCheerData {
  cheerTypes: CMsgGCToServerCheerData_CheerTypeCount[];
}

export interface CMsgGCToServerCheerData_CheerTypeCount {
  cheerType: number;
  cheerCount: number;
}

export interface CMsgCheerConfig {
  cheersEnabled: boolean;
  isValidLeagueId: boolean;
  windowDuration: number;
  windowBucketCount: number;
  crowdLevelPushTime: number;
  crowdLevelLow: number;
  crowdLevelMedium: number;
  crowdLevelHigh: number;
  cheerScaleStart: number;
  cheerScaleSpeed: number;
  cheerScalePushMark: number;
  cheerScalePullMark: number;
  cheerScalePctOfMaxCpsClamp: number;
  cheerScaleDampenerValue: number;
  cheerScaleDampenerLerpTime: number;
  cheerFactorBronze: number;
  cheerFactorSilver: number;
  cheerFactorGold: number;
}

export interface CMsgGCToServerCheerConfig {
  cheerConfig: CMsgCheerConfig | undefined;
}

export interface CMsgServerToGCGetCheerConfig {
  leagueId: number;
}

export interface CMsgServerToGCGetCheerConfigResponse {
  cheerConfig: CMsgCheerConfig | undefined;
}

export interface CMsgGCToServerCheerScalesOverride {
  scales: number[];
}

export interface CMsgGCToServerGetCheerState {
}

export interface CMsgCheerTypeState {
  cheerCounts: number[];
  maxPerSecond: number;
  cheerScale: number;
  overrideScale: number;
}

export interface CMsgCheerState {
  cheerTypes: CMsgCheerTypeState[];
  radiantCrowdLevel: number;
  direCrowdLevel: number;
}

export interface CMsgServerToGCReportCheerState {
  cheerConfig: CMsgCheerConfig | undefined;
  cheerState: CMsgCheerState | undefined;
}

export interface CMsgServerToGCGetStickerHeroes {
  accountIds: number[];
}

export interface CMsgServerToGCGetStickerHeroesResponse {
  players: CMsgServerToGCGetStickerHeroesResponse_Player[];
}

export interface CMsgServerToGCGetStickerHeroesResponse_Player {
  accountId: number;
  stickers: CMsgStickerHeroes | undefined;
}

export interface CMsgGCToServerSetSteamLearnDisable {
}

export interface CMsgGCToServerSetSteamLearnInferencing {
  enable: boolean;
  projectIds: number[];
}

export interface CMsgGCToServerSetSteamLearnKeysChanged {
  keys: CMsgSteamLearnHMACKeys | undefined;
}

export interface CMsgSteamLearnMatchInfo {
  averageMmr: number;
  radiantWon: boolean;
  duration: number;
  gameMode: number;
  lobbyType: number;
}

export interface CMsgSteamLearnMatchInfoPlayer {
  averageMmr: number;
  teamWon: boolean;
  duration: number;
  gameMode: number;
  lobbyType: number;
}

export interface CMsgSteamLearnMatchHeroes {
  radiantHeroIds: number[];
  direHeroIds: number[];
  radiantLanes: number[];
  direLanes: number[];
}

export interface CMsgSteamLearnMatchHero {
  heroId: number;
  lane: number;
  alliedHeroIds: number[];
  enemyHeroIds: number[];
}

export interface CMsgSteamLearnMatchState {
  gameTime: number;
  radiantState: CMsgSteamLearnMatchState_TeamState | undefined;
  direState: CMsgSteamLearnMatchState_TeamState | undefined;
}

export interface CMsgSteamLearnMatchState_PlayerState {
  heroId: number;
  netWorth: number;
  level: number;
  deaths: number;
  respawnTime: number;
  hasBuyback: boolean;
  hasAegis: boolean;
  hasRapier: boolean;
  distance: number;
}

export interface CMsgSteamLearnMatchState_TeamState {
  team: number;
  playerStates: CMsgSteamLearnMatchState_PlayerState[];
  towerHealthPct: number[];
  barracksHealthPct: number[];
  ancientHealthPct: number;
  glyphCooldown: number;
  kills: number;
  creepDistanceSafe: number;
  creepDistanceMid: number;
  creepDistanceOff: number;
}

export interface CMsgSteamLearnItemPurchase {
  itemId: number;
  inventoryItems: number[];
  purchaseHistory: number[];
  gold: number;
  netWorth: number;
  isRadiantTeam: number;
  gameTime: number;
  isUsingDotaPlus: boolean;
}

export interface CMsgSteamLearnPreGameItemPurchases {
  itemIds: number[];
  isRadiantTeam: number;
  isUsingDotaPlus: boolean;
}

export interface CMsgSteamLearnAbilitySkill {
  abilityId: number;
  skilledAbilities: number[];
  gameTime: number;
  isUsingDotaPlus: boolean;
}

export interface CMsgSteamLearnWardPlacement {
  wardLoc: CMsgSteamLearnWardPlacement_Location | undefined;
  existingWardLocs: CMsgSteamLearnWardPlacement_Location[];
  team: number;
}

export interface CMsgSteamLearnWardPlacement_Location {
  x: number;
  y: number;
}

export interface CMsgSignOutMuertaMinigame {
  eventGameData: Buffer;
}

export interface CMsgSignOutMapStats {
  players: CMsgSignOutMapStats_Player[];
  globalStats: CMsgMapStatsSnapshot | undefined;
}

export interface CMsgSignOutMapStats_Player {
  accountId: number;
  personalStats: CMsgMapStatsSnapshot | undefined;
}

function createBaseCMsgPoorNetworkConditions(): CMsgPoorNetworkConditions {
  return { detectionType: 0, players: [] };
}

export const CMsgPoorNetworkConditions = {
  encode(message: CMsgPoorNetworkConditions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.detectionType !== 0) {
      writer.uint32(8).int32(message.detectionType);
    }
    for (const v of message.players) {
      CMsgPoorNetworkConditions_Player.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPoorNetworkConditions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPoorNetworkConditions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.detectionType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.players.push(CMsgPoorNetworkConditions_Player.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPoorNetworkConditions {
    return {
      detectionType: isSet(object.detectionType) ? ePoorNetworkConditionsTypeFromJSON(object.detectionType) : 0,
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgPoorNetworkConditions_Player.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgPoorNetworkConditions): unknown {
    const obj: any = {};
    message.detectionType !== undefined &&
      (obj.detectionType = ePoorNetworkConditionsTypeToJSON(message.detectionType));
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgPoorNetworkConditions_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    return obj;
  },
};

function createBaseCMsgPoorNetworkConditions_Player(): CMsgPoorNetworkConditions_Player {
  return { accountId: 0, disconnectReason: 0, numBadIntervals: 0, peakLossPct: 0 };
}

export const CMsgPoorNetworkConditions_Player = {
  encode(message: CMsgPoorNetworkConditions_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.disconnectReason !== 0) {
      writer.uint32(16).int32(message.disconnectReason);
    }
    if (message.numBadIntervals !== 0) {
      writer.uint32(24).uint32(message.numBadIntervals);
    }
    if (message.peakLossPct !== 0) {
      writer.uint32(32).uint32(message.peakLossPct);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPoorNetworkConditions_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPoorNetworkConditions_Player();
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

          message.disconnectReason = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.numBadIntervals = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.peakLossPct = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPoorNetworkConditions_Player {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      disconnectReason: isSet(object.disconnectReason)
        ? eNetworkDisconnectionReasonFromJSON(object.disconnectReason)
        : 0,
      numBadIntervals: isSet(object.numBadIntervals) ? Number(object.numBadIntervals) : 0,
      peakLossPct: isSet(object.peakLossPct) ? Number(object.peakLossPct) : 0,
    };
  },

  toJSON(message: CMsgPoorNetworkConditions_Player): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.disconnectReason !== undefined &&
      (obj.disconnectReason = eNetworkDisconnectionReasonToJSON(message.disconnectReason));
    message.numBadIntervals !== undefined && (obj.numBadIntervals = Math.round(message.numBadIntervals));
    message.peakLossPct !== undefined && (obj.peakLossPct = Math.round(message.peakLossPct));
    return obj;
  },
};

function createBaseCMsgGameserverCrash(): CMsgGameserverCrash {
  return {
    matchId: "0",
    lobbyId: "0",
    gameState: 0,
    sentinelSaveTime: 0,
    customGameId: "0",
    tournamentId: 0,
    serverSteamId: "0",
    serverPublicIpAddr: 0,
    serverPort: 0,
    serverCluster: 0,
    pid: 0,
    engine: 0,
  };
}

export const CMsgGameserverCrash = {
  encode(message: CMsgGameserverCrash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.lobbyId !== "0") {
      writer.uint32(17).fixed64(message.lobbyId);
    }
    if (message.gameState !== 0) {
      writer.uint32(24).int32(message.gameState);
    }
    if (message.sentinelSaveTime !== 0) {
      writer.uint32(37).fixed32(message.sentinelSaveTime);
    }
    if (message.customGameId !== "0") {
      writer.uint32(89).fixed64(message.customGameId);
    }
    if (message.tournamentId !== 0) {
      writer.uint32(96).uint32(message.tournamentId);
    }
    if (message.serverSteamId !== "0") {
      writer.uint32(41).fixed64(message.serverSteamId);
    }
    if (message.serverPublicIpAddr !== 0) {
      writer.uint32(53).fixed32(message.serverPublicIpAddr);
    }
    if (message.serverPort !== 0) {
      writer.uint32(56).uint32(message.serverPort);
    }
    if (message.serverCluster !== 0) {
      writer.uint32(64).uint32(message.serverCluster);
    }
    if (message.pid !== 0) {
      writer.uint32(72).uint32(message.pid);
    }
    if (message.engine !== 0) {
      writer.uint32(80).uint32(message.engine);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameserverCrash {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameserverCrash();
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
          if (tag != 17) {
            break;
          }

          message.lobbyId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.gameState = reader.int32() as any;
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.sentinelSaveTime = reader.fixed32();
          continue;
        case 11:
          if (tag != 89) {
            break;
          }

          message.customGameId = longToString(reader.fixed64() as Long);
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.tournamentId = reader.uint32();
          continue;
        case 5:
          if (tag != 41) {
            break;
          }

          message.serverSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.serverPublicIpAddr = reader.fixed32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.serverPort = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.serverCluster = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.pid = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.engine = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGameserverCrash {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      lobbyId: isSet(object.lobbyId) ? String(object.lobbyId) : "0",
      gameState: isSet(object.gameState) ? dOTAGameStateFromJSON(object.gameState) : 0,
      sentinelSaveTime: isSet(object.sentinelSaveTime) ? Number(object.sentinelSaveTime) : 0,
      customGameId: isSet(object.customGameId) ? String(object.customGameId) : "0",
      tournamentId: isSet(object.tournamentId) ? Number(object.tournamentId) : 0,
      serverSteamId: isSet(object.serverSteamId) ? String(object.serverSteamId) : "0",
      serverPublicIpAddr: isSet(object.serverPublicIpAddr) ? Number(object.serverPublicIpAddr) : 0,
      serverPort: isSet(object.serverPort) ? Number(object.serverPort) : 0,
      serverCluster: isSet(object.serverCluster) ? Number(object.serverCluster) : 0,
      pid: isSet(object.pid) ? Number(object.pid) : 0,
      engine: isSet(object.engine) ? Number(object.engine) : 0,
    };
  },

  toJSON(message: CMsgGameserverCrash): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.lobbyId !== undefined && (obj.lobbyId = message.lobbyId);
    message.gameState !== undefined && (obj.gameState = dOTAGameStateToJSON(message.gameState));
    message.sentinelSaveTime !== undefined && (obj.sentinelSaveTime = Math.round(message.sentinelSaveTime));
    message.customGameId !== undefined && (obj.customGameId = message.customGameId);
    message.tournamentId !== undefined && (obj.tournamentId = Math.round(message.tournamentId));
    message.serverSteamId !== undefined && (obj.serverSteamId = message.serverSteamId);
    message.serverPublicIpAddr !== undefined && (obj.serverPublicIpAddr = Math.round(message.serverPublicIpAddr));
    message.serverPort !== undefined && (obj.serverPort = Math.round(message.serverPort));
    message.serverCluster !== undefined && (obj.serverCluster = Math.round(message.serverCluster));
    message.pid !== undefined && (obj.pid = Math.round(message.pid));
    message.engine !== undefined && (obj.engine = Math.round(message.engine));
    return obj;
  },
};

function createBaseCMsgConnectedPlayers(): CMsgConnectedPlayers {
  return {
    connectedPlayers: [],
    disconnectedPlayers: [],
    gameState: 0,
    firstBloodHappened: false,
    poorNetworkConditions: undefined,
    sendReason: 0,
    radiantKills: 0,
    direKills: 0,
    radiantLead: 0,
    buildingState: 0,
    playerDraft: [],
  };
}

export const CMsgConnectedPlayers = {
  encode(message: CMsgConnectedPlayers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.connectedPlayers) {
      CMsgConnectedPlayers_Player.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.disconnectedPlayers) {
      CMsgConnectedPlayers_Player.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.gameState !== 0) {
      writer.uint32(16).int32(message.gameState);
    }
    if (message.firstBloodHappened === true) {
      writer.uint32(48).bool(message.firstBloodHappened);
    }
    if (message.poorNetworkConditions !== undefined) {
      CMsgPoorNetworkConditions.encode(message.poorNetworkConditions, writer.uint32(82).fork()).ldelim();
    }
    if (message.sendReason !== 0) {
      writer.uint32(64).int32(message.sendReason);
    }
    if (message.radiantKills !== 0) {
      writer.uint32(88).uint32(message.radiantKills);
    }
    if (message.direKills !== 0) {
      writer.uint32(96).uint32(message.direKills);
    }
    if (message.radiantLead !== 0) {
      writer.uint32(112).int32(message.radiantLead);
    }
    if (message.buildingState !== 0) {
      writer.uint32(120).uint32(message.buildingState);
    }
    for (const v of message.playerDraft) {
      CMsgConnectedPlayers_PlayerDraft.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgConnectedPlayers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgConnectedPlayers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.connectedPlayers.push(CMsgConnectedPlayers_Player.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.disconnectedPlayers.push(CMsgConnectedPlayers_Player.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gameState = reader.int32() as any;
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.firstBloodHappened = reader.bool();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.poorNetworkConditions = CMsgPoorNetworkConditions.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.sendReason = reader.int32() as any;
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.radiantKills = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.direKills = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.radiantLead = reader.int32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.buildingState = reader.uint32();
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.playerDraft.push(CMsgConnectedPlayers_PlayerDraft.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgConnectedPlayers {
    return {
      connectedPlayers: Array.isArray(object?.connectedPlayers)
        ? object.connectedPlayers.map((e: any) => CMsgConnectedPlayers_Player.fromJSON(e))
        : [],
      disconnectedPlayers: Array.isArray(object?.disconnectedPlayers)
        ? object.disconnectedPlayers.map((e: any) => CMsgConnectedPlayers_Player.fromJSON(e))
        : [],
      gameState: isSet(object.gameState) ? dOTAGameStateFromJSON(object.gameState) : 0,
      firstBloodHappened: isSet(object.firstBloodHappened) ? Boolean(object.firstBloodHappened) : false,
      poorNetworkConditions: isSet(object.poorNetworkConditions)
        ? CMsgPoorNetworkConditions.fromJSON(object.poorNetworkConditions)
        : undefined,
      sendReason: isSet(object.sendReason) ? cMsgConnectedPlayers_SendReasonFromJSON(object.sendReason) : 0,
      radiantKills: isSet(object.radiantKills) ? Number(object.radiantKills) : 0,
      direKills: isSet(object.direKills) ? Number(object.direKills) : 0,
      radiantLead: isSet(object.radiantLead) ? Number(object.radiantLead) : 0,
      buildingState: isSet(object.buildingState) ? Number(object.buildingState) : 0,
      playerDraft: Array.isArray(object?.playerDraft)
        ? object.playerDraft.map((e: any) => CMsgConnectedPlayers_PlayerDraft.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgConnectedPlayers): unknown {
    const obj: any = {};
    if (message.connectedPlayers) {
      obj.connectedPlayers = message.connectedPlayers.map((e) => e ? CMsgConnectedPlayers_Player.toJSON(e) : undefined);
    } else {
      obj.connectedPlayers = [];
    }
    if (message.disconnectedPlayers) {
      obj.disconnectedPlayers = message.disconnectedPlayers.map((e) =>
        e ? CMsgConnectedPlayers_Player.toJSON(e) : undefined
      );
    } else {
      obj.disconnectedPlayers = [];
    }
    message.gameState !== undefined && (obj.gameState = dOTAGameStateToJSON(message.gameState));
    message.firstBloodHappened !== undefined && (obj.firstBloodHappened = message.firstBloodHappened);
    message.poorNetworkConditions !== undefined && (obj.poorNetworkConditions = message.poorNetworkConditions
      ? CMsgPoorNetworkConditions.toJSON(message.poorNetworkConditions)
      : undefined);
    message.sendReason !== undefined && (obj.sendReason = cMsgConnectedPlayers_SendReasonToJSON(message.sendReason));
    message.radiantKills !== undefined && (obj.radiantKills = Math.round(message.radiantKills));
    message.direKills !== undefined && (obj.direKills = Math.round(message.direKills));
    message.radiantLead !== undefined && (obj.radiantLead = Math.round(message.radiantLead));
    message.buildingState !== undefined && (obj.buildingState = Math.round(message.buildingState));
    if (message.playerDraft) {
      obj.playerDraft = message.playerDraft.map((e) => e ? CMsgConnectedPlayers_PlayerDraft.toJSON(e) : undefined);
    } else {
      obj.playerDraft = [];
    }
    return obj;
  },
};

function createBaseCMsgConnectedPlayers_Player(): CMsgConnectedPlayers_Player {
  return { steamId: "0", heroId: 0, leaverState: undefined, disconnectReason: 0 };
}

export const CMsgConnectedPlayers_Player = {
  encode(message: CMsgConnectedPlayers_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).uint32(message.heroId);
    }
    if (message.leaverState !== undefined) {
      CMsgLeaverState.encode(message.leaverState, writer.uint32(26).fork()).ldelim();
    }
    if (message.disconnectReason !== 0) {
      writer.uint32(32).int32(message.disconnectReason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgConnectedPlayers_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgConnectedPlayers_Player();
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
          if (tag != 16) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.leaverState = CMsgLeaverState.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.disconnectReason = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgConnectedPlayers_Player {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      leaverState: isSet(object.leaverState) ? CMsgLeaverState.fromJSON(object.leaverState) : undefined,
      disconnectReason: isSet(object.disconnectReason)
        ? eNetworkDisconnectionReasonFromJSON(object.disconnectReason)
        : 0,
    };
  },

  toJSON(message: CMsgConnectedPlayers_Player): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.leaverState !== undefined &&
      (obj.leaverState = message.leaverState ? CMsgLeaverState.toJSON(message.leaverState) : undefined);
    message.disconnectReason !== undefined &&
      (obj.disconnectReason = eNetworkDisconnectionReasonToJSON(message.disconnectReason));
    return obj;
  },
};

function createBaseCMsgConnectedPlayers_PlayerDraft(): CMsgConnectedPlayers_PlayerDraft {
  return { steamId: "0", team: 0, teamSlot: 0 };
}

export const CMsgConnectedPlayers_PlayerDraft = {
  encode(message: CMsgConnectedPlayers_PlayerDraft, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.team !== 0) {
      writer.uint32(16).int32(message.team);
    }
    if (message.teamSlot !== 0) {
      writer.uint32(24).int32(message.teamSlot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgConnectedPlayers_PlayerDraft {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgConnectedPlayers_PlayerDraft();
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
          if (tag != 16) {
            break;
          }

          message.team = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.teamSlot = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgConnectedPlayers_PlayerDraft {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      team: isSet(object.team) ? dotaGcTeamFromJSON(object.team) : 0,
      teamSlot: isSet(object.teamSlot) ? Number(object.teamSlot) : 0,
    };
  },

  toJSON(message: CMsgConnectedPlayers_PlayerDraft): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.team !== undefined && (obj.team = dotaGcTeamToJSON(message.team));
    message.teamSlot !== undefined && (obj.teamSlot = Math.round(message.teamSlot));
    return obj;
  },
};

function createBaseCMsgGameServerInfo(): CMsgGameServerInfo {
  return {
    serverPublicIpAddr: 0,
    serverPrivateIpAddr: 0,
    serverPort: 0,
    serverTvPort: 0,
    assignedServerTvPort: 0,
    legacyServerSteamdatagramAddress: Buffer.alloc(0),
    serverKey: "",
    serverHibernation: false,
    serverType: 0,
    serverRegion: 0,
    serverLoadavg: 0,
    serverTvBroadcastTime: 0,
    serverGameTime: 0,
    serverRelayConnectedSteamId: "0",
    relaySlotsMax: 0,
    relaysConnected: 0,
    relayClientsConnected: 0,
    relayedGameServerSteamId: "0",
    parentRelayCount: 0,
    tvSecretCode: "0",
    serverVersion: 0,
    serverCluster: 0,
    allowCustomGames: 0,
    buildVersion: 0,
    tfServerCount: 0,
    srcdsInstance: 0,
    devForceServerType: false,
    isRecordingMatchTrainingData: false,
  };
}

export const CMsgGameServerInfo = {
  encode(message: CMsgGameServerInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverPublicIpAddr !== 0) {
      writer.uint32(13).fixed32(message.serverPublicIpAddr);
    }
    if (message.serverPrivateIpAddr !== 0) {
      writer.uint32(21).fixed32(message.serverPrivateIpAddr);
    }
    if (message.serverPort !== 0) {
      writer.uint32(24).uint32(message.serverPort);
    }
    if (message.serverTvPort !== 0) {
      writer.uint32(32).uint32(message.serverTvPort);
    }
    if (message.assignedServerTvPort !== 0) {
      writer.uint32(176).uint32(message.assignedServerTvPort);
    }
    if (message.legacyServerSteamdatagramAddress.length !== 0) {
      writer.uint32(218).bytes(message.legacyServerSteamdatagramAddress);
    }
    if (message.serverKey !== "") {
      writer.uint32(42).string(message.serverKey);
    }
    if (message.serverHibernation === true) {
      writer.uint32(48).bool(message.serverHibernation);
    }
    if (message.serverType !== 0) {
      writer.uint32(56).int32(message.serverType);
    }
    if (message.serverRegion !== 0) {
      writer.uint32(64).uint32(message.serverRegion);
    }
    if (message.serverLoadavg !== 0) {
      writer.uint32(77).float(message.serverLoadavg);
    }
    if (message.serverTvBroadcastTime !== 0) {
      writer.uint32(85).float(message.serverTvBroadcastTime);
    }
    if (message.serverGameTime !== 0) {
      writer.uint32(93).float(message.serverGameTime);
    }
    if (message.serverRelayConnectedSteamId !== "0") {
      writer.uint32(97).fixed64(message.serverRelayConnectedSteamId);
    }
    if (message.relaySlotsMax !== 0) {
      writer.uint32(104).uint32(message.relaySlotsMax);
    }
    if (message.relaysConnected !== 0) {
      writer.uint32(112).int32(message.relaysConnected);
    }
    if (message.relayClientsConnected !== 0) {
      writer.uint32(120).int32(message.relayClientsConnected);
    }
    if (message.relayedGameServerSteamId !== "0") {
      writer.uint32(129).fixed64(message.relayedGameServerSteamId);
    }
    if (message.parentRelayCount !== 0) {
      writer.uint32(136).uint32(message.parentRelayCount);
    }
    if (message.tvSecretCode !== "0") {
      writer.uint32(145).fixed64(message.tvSecretCode);
    }
    if (message.serverVersion !== 0) {
      writer.uint32(152).uint32(message.serverVersion);
    }
    if (message.serverCluster !== 0) {
      writer.uint32(160).uint32(message.serverCluster);
    }
    if (message.allowCustomGames !== 0) {
      writer.uint32(184).int32(message.allowCustomGames);
    }
    if (message.buildVersion !== 0) {
      writer.uint32(192).uint32(message.buildVersion);
    }
    if (message.tfServerCount !== 0) {
      writer.uint32(200).uint32(message.tfServerCount);
    }
    if (message.srcdsInstance !== 0) {
      writer.uint32(208).uint32(message.srcdsInstance);
    }
    if (message.devForceServerType === true) {
      writer.uint32(224).bool(message.devForceServerType);
    }
    if (message.isRecordingMatchTrainingData === true) {
      writer.uint32(232).bool(message.isRecordingMatchTrainingData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameServerInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameServerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.serverPublicIpAddr = reader.fixed32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.serverPrivateIpAddr = reader.fixed32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.serverPort = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.serverTvPort = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.assignedServerTvPort = reader.uint32();
          continue;
        case 27:
          if (tag != 218) {
            break;
          }

          message.legacyServerSteamdatagramAddress = reader.bytes() as Buffer;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.serverKey = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.serverHibernation = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.serverType = reader.int32() as any;
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.serverRegion = reader.uint32();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.serverLoadavg = reader.float();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.serverTvBroadcastTime = reader.float();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.serverGameTime = reader.float();
          continue;
        case 12:
          if (tag != 97) {
            break;
          }

          message.serverRelayConnectedSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.relaySlotsMax = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.relaysConnected = reader.int32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.relayClientsConnected = reader.int32();
          continue;
        case 16:
          if (tag != 129) {
            break;
          }

          message.relayedGameServerSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.parentRelayCount = reader.uint32();
          continue;
        case 18:
          if (tag != 145) {
            break;
          }

          message.tvSecretCode = longToString(reader.fixed64() as Long);
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.serverVersion = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.serverCluster = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.allowCustomGames = reader.int32() as any;
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.buildVersion = reader.uint32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.tfServerCount = reader.uint32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.srcdsInstance = reader.uint32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.devForceServerType = reader.bool();
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.isRecordingMatchTrainingData = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGameServerInfo {
    return {
      serverPublicIpAddr: isSet(object.serverPublicIpAddr) ? Number(object.serverPublicIpAddr) : 0,
      serverPrivateIpAddr: isSet(object.serverPrivateIpAddr) ? Number(object.serverPrivateIpAddr) : 0,
      serverPort: isSet(object.serverPort) ? Number(object.serverPort) : 0,
      serverTvPort: isSet(object.serverTvPort) ? Number(object.serverTvPort) : 0,
      assignedServerTvPort: isSet(object.assignedServerTvPort) ? Number(object.assignedServerTvPort) : 0,
      legacyServerSteamdatagramAddress: isSet(object.legacyServerSteamdatagramAddress)
        ? Buffer.from(bytesFromBase64(object.legacyServerSteamdatagramAddress))
        : Buffer.alloc(0),
      serverKey: isSet(object.serverKey) ? String(object.serverKey) : "",
      serverHibernation: isSet(object.serverHibernation) ? Boolean(object.serverHibernation) : false,
      serverType: isSet(object.serverType) ? cMsgGameServerInfo_ServerTypeFromJSON(object.serverType) : 0,
      serverRegion: isSet(object.serverRegion) ? Number(object.serverRegion) : 0,
      serverLoadavg: isSet(object.serverLoadavg) ? Number(object.serverLoadavg) : 0,
      serverTvBroadcastTime: isSet(object.serverTvBroadcastTime) ? Number(object.serverTvBroadcastTime) : 0,
      serverGameTime: isSet(object.serverGameTime) ? Number(object.serverGameTime) : 0,
      serverRelayConnectedSteamId: isSet(object.serverRelayConnectedSteamId)
        ? String(object.serverRelayConnectedSteamId)
        : "0",
      relaySlotsMax: isSet(object.relaySlotsMax) ? Number(object.relaySlotsMax) : 0,
      relaysConnected: isSet(object.relaysConnected) ? Number(object.relaysConnected) : 0,
      relayClientsConnected: isSet(object.relayClientsConnected) ? Number(object.relayClientsConnected) : 0,
      relayedGameServerSteamId: isSet(object.relayedGameServerSteamId) ? String(object.relayedGameServerSteamId) : "0",
      parentRelayCount: isSet(object.parentRelayCount) ? Number(object.parentRelayCount) : 0,
      tvSecretCode: isSet(object.tvSecretCode) ? String(object.tvSecretCode) : "0",
      serverVersion: isSet(object.serverVersion) ? Number(object.serverVersion) : 0,
      serverCluster: isSet(object.serverCluster) ? Number(object.serverCluster) : 0,
      allowCustomGames: isSet(object.allowCustomGames)
        ? cMsgGameServerInfo_CustomGamesFromJSON(object.allowCustomGames)
        : 0,
      buildVersion: isSet(object.buildVersion) ? Number(object.buildVersion) : 0,
      tfServerCount: isSet(object.tfServerCount) ? Number(object.tfServerCount) : 0,
      srcdsInstance: isSet(object.srcdsInstance) ? Number(object.srcdsInstance) : 0,
      devForceServerType: isSet(object.devForceServerType) ? Boolean(object.devForceServerType) : false,
      isRecordingMatchTrainingData: isSet(object.isRecordingMatchTrainingData)
        ? Boolean(object.isRecordingMatchTrainingData)
        : false,
    };
  },

  toJSON(message: CMsgGameServerInfo): unknown {
    const obj: any = {};
    message.serverPublicIpAddr !== undefined && (obj.serverPublicIpAddr = Math.round(message.serverPublicIpAddr));
    message.serverPrivateIpAddr !== undefined && (obj.serverPrivateIpAddr = Math.round(message.serverPrivateIpAddr));
    message.serverPort !== undefined && (obj.serverPort = Math.round(message.serverPort));
    message.serverTvPort !== undefined && (obj.serverTvPort = Math.round(message.serverTvPort));
    message.assignedServerTvPort !== undefined && (obj.assignedServerTvPort = Math.round(message.assignedServerTvPort));
    message.legacyServerSteamdatagramAddress !== undefined &&
      (obj.legacyServerSteamdatagramAddress = base64FromBytes(
        message.legacyServerSteamdatagramAddress !== undefined
          ? message.legacyServerSteamdatagramAddress
          : Buffer.alloc(0),
      ));
    message.serverKey !== undefined && (obj.serverKey = message.serverKey);
    message.serverHibernation !== undefined && (obj.serverHibernation = message.serverHibernation);
    message.serverType !== undefined && (obj.serverType = cMsgGameServerInfo_ServerTypeToJSON(message.serverType));
    message.serverRegion !== undefined && (obj.serverRegion = Math.round(message.serverRegion));
    message.serverLoadavg !== undefined && (obj.serverLoadavg = message.serverLoadavg);
    message.serverTvBroadcastTime !== undefined && (obj.serverTvBroadcastTime = message.serverTvBroadcastTime);
    message.serverGameTime !== undefined && (obj.serverGameTime = message.serverGameTime);
    message.serverRelayConnectedSteamId !== undefined &&
      (obj.serverRelayConnectedSteamId = message.serverRelayConnectedSteamId);
    message.relaySlotsMax !== undefined && (obj.relaySlotsMax = Math.round(message.relaySlotsMax));
    message.relaysConnected !== undefined && (obj.relaysConnected = Math.round(message.relaysConnected));
    message.relayClientsConnected !== undefined &&
      (obj.relayClientsConnected = Math.round(message.relayClientsConnected));
    message.relayedGameServerSteamId !== undefined && (obj.relayedGameServerSteamId = message.relayedGameServerSteamId);
    message.parentRelayCount !== undefined && (obj.parentRelayCount = Math.round(message.parentRelayCount));
    message.tvSecretCode !== undefined && (obj.tvSecretCode = message.tvSecretCode);
    message.serverVersion !== undefined && (obj.serverVersion = Math.round(message.serverVersion));
    message.serverCluster !== undefined && (obj.serverCluster = Math.round(message.serverCluster));
    message.allowCustomGames !== undefined &&
      (obj.allowCustomGames = cMsgGameServerInfo_CustomGamesToJSON(message.allowCustomGames));
    message.buildVersion !== undefined && (obj.buildVersion = Math.round(message.buildVersion));
    message.tfServerCount !== undefined && (obj.tfServerCount = Math.round(message.tfServerCount));
    message.srcdsInstance !== undefined && (obj.srcdsInstance = Math.round(message.srcdsInstance));
    message.devForceServerType !== undefined && (obj.devForceServerType = message.devForceServerType);
    message.isRecordingMatchTrainingData !== undefined &&
      (obj.isRecordingMatchTrainingData = message.isRecordingMatchTrainingData);
    return obj;
  },
};

function createBaseCMsgLeaverDetected(): CMsgLeaverDetected {
  return {
    steamId: "0",
    leaverStatus: 0,
    leaverState: undefined,
    serverCluster: 0,
    disconnectReason: 0,
    poorNetworkConditions: undefined,
  };
}

export const CMsgLeaverDetected = {
  encode(message: CMsgLeaverDetected, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.leaverStatus !== 0) {
      writer.uint32(16).int32(message.leaverStatus);
    }
    if (message.leaverState !== undefined) {
      CMsgLeaverState.encode(message.leaverState, writer.uint32(34).fork()).ldelim();
    }
    if (message.serverCluster !== 0) {
      writer.uint32(40).uint32(message.serverCluster);
    }
    if (message.disconnectReason !== 0) {
      writer.uint32(48).int32(message.disconnectReason);
    }
    if (message.poorNetworkConditions !== undefined) {
      CMsgPoorNetworkConditions.encode(message.poorNetworkConditions, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLeaverDetected {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLeaverDetected();
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
          if (tag != 16) {
            break;
          }

          message.leaverStatus = reader.int32() as any;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.leaverState = CMsgLeaverState.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.serverCluster = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.disconnectReason = reader.int32() as any;
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.poorNetworkConditions = CMsgPoorNetworkConditions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgLeaverDetected {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      leaverStatus: isSet(object.leaverStatus) ? dOTALeaverStatusTFromJSON(object.leaverStatus) : 0,
      leaverState: isSet(object.leaverState) ? CMsgLeaverState.fromJSON(object.leaverState) : undefined,
      serverCluster: isSet(object.serverCluster) ? Number(object.serverCluster) : 0,
      disconnectReason: isSet(object.disconnectReason)
        ? eNetworkDisconnectionReasonFromJSON(object.disconnectReason)
        : 0,
      poorNetworkConditions: isSet(object.poorNetworkConditions)
        ? CMsgPoorNetworkConditions.fromJSON(object.poorNetworkConditions)
        : undefined,
    };
  },

  toJSON(message: CMsgLeaverDetected): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.leaverStatus !== undefined && (obj.leaverStatus = dOTALeaverStatusTToJSON(message.leaverStatus));
    message.leaverState !== undefined &&
      (obj.leaverState = message.leaverState ? CMsgLeaverState.toJSON(message.leaverState) : undefined);
    message.serverCluster !== undefined && (obj.serverCluster = Math.round(message.serverCluster));
    message.disconnectReason !== undefined &&
      (obj.disconnectReason = eNetworkDisconnectionReasonToJSON(message.disconnectReason));
    message.poorNetworkConditions !== undefined && (obj.poorNetworkConditions = message.poorNetworkConditions
      ? CMsgPoorNetworkConditions.toJSON(message.poorNetworkConditions)
      : undefined);
    return obj;
  },
};

function createBaseCMsgLeaverDetectedResponse(): CMsgLeaverDetectedResponse {
  return { result: 0 };
}

export const CMsgLeaverDetectedResponse = {
  encode(message: CMsgLeaverDetectedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLeaverDetectedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLeaverDetectedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgLeaverDetectedResponse {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: CMsgLeaverDetectedResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },
};

function createBaseCMsgDOTAFantasyFinalPlayerStats(): CMsgDOTAFantasyFinalPlayerStats {
  return { stats: [] };
}

export const CMsgDOTAFantasyFinalPlayerStats = {
  encode(message: CMsgDOTAFantasyFinalPlayerStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stats) {
      CMsgDOTAFantasyPlayerStats.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAFantasyFinalPlayerStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAFantasyFinalPlayerStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.stats.push(CMsgDOTAFantasyPlayerStats.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAFantasyFinalPlayerStats {
    return {
      stats: Array.isArray(object?.stats) ? object.stats.map((e: any) => CMsgDOTAFantasyPlayerStats.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgDOTAFantasyFinalPlayerStats): unknown {
    const obj: any = {};
    if (message.stats) {
      obj.stats = message.stats.map((e) => e ? CMsgDOTAFantasyPlayerStats.toJSON(e) : undefined);
    } else {
      obj.stats = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTAFantasyLivePlayerStats(): CMsgDOTAFantasyLivePlayerStats {
  return { stats: [] };
}

export const CMsgDOTAFantasyLivePlayerStats = {
  encode(message: CMsgDOTAFantasyLivePlayerStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stats) {
      CMsgDOTAFantasyPlayerStats.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAFantasyLivePlayerStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAFantasyLivePlayerStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.stats.push(CMsgDOTAFantasyPlayerStats.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAFantasyLivePlayerStats {
    return {
      stats: Array.isArray(object?.stats) ? object.stats.map((e: any) => CMsgDOTAFantasyPlayerStats.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgDOTAFantasyLivePlayerStats): unknown {
    const obj: any = {};
    if (message.stats) {
      obj.stats = message.stats.map((e) => e ? CMsgDOTAFantasyPlayerStats.toJSON(e) : undefined);
    } else {
      obj.stats = [];
    }
    return obj;
  },
};

function createBaseCMsgServerToGCRealtimeStats(): CMsgServerToGCRealtimeStats {
  return { delayed: undefined };
}

export const CMsgServerToGCRealtimeStats = {
  encode(message: CMsgServerToGCRealtimeStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delayed !== undefined) {
      CMsgDOTARealtimeGameStatsTerse.encode(message.delayed, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCRealtimeStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCRealtimeStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.delayed = CMsgDOTARealtimeGameStatsTerse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCRealtimeStats {
    return { delayed: isSet(object.delayed) ? CMsgDOTARealtimeGameStatsTerse.fromJSON(object.delayed) : undefined };
  },

  toJSON(message: CMsgServerToGCRealtimeStats): unknown {
    const obj: any = {};
    message.delayed !== undefined &&
      (obj.delayed = message.delayed ? CMsgDOTARealtimeGameStatsTerse.toJSON(message.delayed) : undefined);
    return obj;
  },
};

function createBaseCMsgGCToServerRealtimeStatsStartStop(): CMsgGCToServerRealtimeStatsStartStop {
  return { delayed: false };
}

export const CMsgGCToServerRealtimeStatsStartStop = {
  encode(message: CMsgGCToServerRealtimeStatsStartStop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delayed === true) {
      writer.uint32(8).bool(message.delayed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerRealtimeStatsStartStop {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerRealtimeStatsStartStop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.delayed = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToServerRealtimeStatsStartStop {
    return { delayed: isSet(object.delayed) ? Boolean(object.delayed) : false };
  },

  toJSON(message: CMsgGCToServerRealtimeStatsStartStop): unknown {
    const obj: any = {};
    message.delayed !== undefined && (obj.delayed = message.delayed);
    return obj;
  },
};

function createBaseCMsgGCToServerUpdateSteamBroadcasting(): CMsgGCToServerUpdateSteamBroadcasting {
  return { active: false };
}

export const CMsgGCToServerUpdateSteamBroadcasting = {
  encode(message: CMsgGCToServerUpdateSteamBroadcasting, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerUpdateSteamBroadcasting {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerUpdateSteamBroadcasting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.active = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToServerUpdateSteamBroadcasting {
    return { active: isSet(object.active) ? Boolean(object.active) : false };
  },

  toJSON(message: CMsgGCToServerUpdateSteamBroadcasting): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },
};

function createBaseCMsgSignOutGameplayStats(): CMsgSignOutGameplayStats {
  return { teams: [] };
}

export const CMsgSignOutGameplayStats = {
  encode(message: CMsgSignOutGameplayStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.teams) {
      CMsgSignOutGameplayStats_CTeam.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutGameplayStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutGameplayStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.teams.push(CMsgSignOutGameplayStats_CTeam.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutGameplayStats {
    return {
      teams: Array.isArray(object?.teams)
        ? object.teams.map((e: any) => CMsgSignOutGameplayStats_CTeam.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSignOutGameplayStats): unknown {
    const obj: any = {};
    if (message.teams) {
      obj.teams = message.teams.map((e) => e ? CMsgSignOutGameplayStats_CTeam.toJSON(e) : undefined);
    } else {
      obj.teams = [];
    }
    return obj;
  },
};

function createBaseCMsgSignOutGameplayStats_CPlayer(): CMsgSignOutGameplayStats_CPlayer {
  return { steamId: "0", playerSlot: 0, heroId: 0, timedPlayerStats: [] };
}

export const CMsgSignOutGameplayStats_CPlayer = {
  encode(message: CMsgSignOutGameplayStats_CPlayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.playerSlot !== 0) {
      writer.uint32(16).uint32(message.playerSlot);
    }
    if (message.heroId !== 0) {
      writer.uint32(24).uint32(message.heroId);
    }
    for (const v of message.timedPlayerStats) {
      CMatchPlayerTimedStats.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutGameplayStats_CPlayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutGameplayStats_CPlayer();
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
          if (tag != 16) {
            break;
          }

          message.playerSlot = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.timedPlayerStats.push(CMatchPlayerTimedStats.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutGameplayStats_CPlayer {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      playerSlot: isSet(object.playerSlot) ? Number(object.playerSlot) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      timedPlayerStats: Array.isArray(object?.timedPlayerStats)
        ? object.timedPlayerStats.map((e: any) => CMatchPlayerTimedStats.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSignOutGameplayStats_CPlayer): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.playerSlot !== undefined && (obj.playerSlot = Math.round(message.playerSlot));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    if (message.timedPlayerStats) {
      obj.timedPlayerStats = message.timedPlayerStats.map((e) => e ? CMatchPlayerTimedStats.toJSON(e) : undefined);
    } else {
      obj.timedPlayerStats = [];
    }
    return obj;
  },
};

function createBaseCMsgSignOutGameplayStats_CTeam(): CMsgSignOutGameplayStats_CTeam {
  return { isWinningTeam: false, isRadiantTeam: false, timedTeamStats: [], players: [] };
}

export const CMsgSignOutGameplayStats_CTeam = {
  encode(message: CMsgSignOutGameplayStats_CTeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isWinningTeam === true) {
      writer.uint32(8).bool(message.isWinningTeam);
    }
    if (message.isRadiantTeam === true) {
      writer.uint32(16).bool(message.isRadiantTeam);
    }
    for (const v of message.timedTeamStats) {
      CMatchTeamTimedStats.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.players) {
      CMsgSignOutGameplayStats_CPlayer.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutGameplayStats_CTeam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutGameplayStats_CTeam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isWinningTeam = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isRadiantTeam = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.timedTeamStats.push(CMatchTeamTimedStats.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.players.push(CMsgSignOutGameplayStats_CPlayer.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutGameplayStats_CTeam {
    return {
      isWinningTeam: isSet(object.isWinningTeam) ? Boolean(object.isWinningTeam) : false,
      isRadiantTeam: isSet(object.isRadiantTeam) ? Boolean(object.isRadiantTeam) : false,
      timedTeamStats: Array.isArray(object?.timedTeamStats)
        ? object.timedTeamStats.map((e: any) => CMatchTeamTimedStats.fromJSON(e))
        : [],
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgSignOutGameplayStats_CPlayer.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSignOutGameplayStats_CTeam): unknown {
    const obj: any = {};
    message.isWinningTeam !== undefined && (obj.isWinningTeam = message.isWinningTeam);
    message.isRadiantTeam !== undefined && (obj.isRadiantTeam = message.isRadiantTeam);
    if (message.timedTeamStats) {
      obj.timedTeamStats = message.timedTeamStats.map((e) => e ? CMatchTeamTimedStats.toJSON(e) : undefined);
    } else {
      obj.timedTeamStats = [];
    }
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgSignOutGameplayStats_CPlayer.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    return obj;
  },
};

function createBaseCMsgGameMatchSignOut(): CMsgGameMatchSignOut {
  return {
    matchId: "0",
    duration: 0,
    goodGuysWin: false,
    date: 0,
    teams: [],
    towerStatus: [],
    barracksStatus: [],
    cluster: 0,
    serverAddr: "",
    firstBloodTime: 0,
    eventScore: 0,
    picksBans: [],
    fantasyStats: [],
    playerStrangeCountAdjustments: [],
    automaticSurrender: false,
    serverVersion: 0,
    poorNetworkConditions: undefined,
    additionalMsgs: [],
    socialFeedEvents: [],
    averageNetworthDelta: 0,
    customGameData: undefined,
    matchFlags: 0,
    teamScores: [],
    preGameDuration: 0,
    eventGameLeaderboardEntries: [],
    wardPlacements: [],
    gameplayStats: undefined,
    extraMessages: [],
    trainingDataRecorded: false,
    winningTeam: 0,
    normalizedWinProbabilityDiff: 0,
  };
}

export const CMsgGameMatchSignOut = {
  encode(message: CMsgGameMatchSignOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.duration !== 0) {
      writer.uint32(16).uint32(message.duration);
    }
    if (message.goodGuysWin === true) {
      writer.uint32(24).bool(message.goodGuysWin);
    }
    if (message.date !== 0) {
      writer.uint32(37).fixed32(message.date);
    }
    for (const v of message.teams) {
      CMsgGameMatchSignOut_CTeam.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(66).fork();
    for (const v of message.towerStatus) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(74).fork();
    for (const v of message.barracksStatus) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.cluster !== 0) {
      writer.uint32(80).uint32(message.cluster);
    }
    if (message.serverAddr !== "") {
      writer.uint32(90).string(message.serverAddr);
    }
    if (message.firstBloodTime !== 0) {
      writer.uint32(96).uint32(message.firstBloodTime);
    }
    if (message.eventScore !== 0) {
      writer.uint32(112).uint32(message.eventScore);
    }
    for (const v of message.picksBans) {
      CMatchHeroSelectEvent.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.fantasyStats) {
      CMsgDOTAFantasyPlayerStats.encode(v!, writer.uint32(330).fork()).ldelim();
    }
    for (const v of message.playerStrangeCountAdjustments) {
      CMsgEconPlayerStrangeCountAdjustment.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    if (message.automaticSurrender === true) {
      writer.uint32(144).bool(message.automaticSurrender);
    }
    if (message.serverVersion !== 0) {
      writer.uint32(152).uint32(message.serverVersion);
    }
    if (message.poorNetworkConditions !== undefined) {
      CMsgPoorNetworkConditions.encode(message.poorNetworkConditions, writer.uint32(282).fork()).ldelim();
    }
    for (const v of message.additionalMsgs) {
      CMsgGameMatchSignOut_CAdditionalSignoutMsg.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.socialFeedEvents) {
      CMsgGameMatchSignOut_CSocialFeedMatchEvent.encode(v!, writer.uint32(290).fork()).ldelim();
    }
    if (message.averageNetworthDelta !== 0) {
      writer.uint32(176).sint32(message.averageNetworthDelta);
    }
    if (message.customGameData !== undefined) {
      CMsgGameMatchSignOut_CCustomGameData.encode(message.customGameData, writer.uint32(298).fork()).ldelim();
    }
    if (message.matchFlags !== 0) {
      writer.uint32(304).uint32(message.matchFlags);
    }
    writer.uint32(314).fork();
    for (const v of message.teamScores) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.preGameDuration !== 0) {
      writer.uint32(320).uint32(message.preGameDuration);
    }
    for (const v of message.eventGameLeaderboardEntries) {
      CMsgGameMatchSignOut_EventGameLeaderboardEntry.encode(v!, writer.uint32(338).fork()).ldelim();
    }
    for (const v of message.wardPlacements) {
      CMsgGameMatchSignOut_WardPlacement.encode(v!, writer.uint32(346).fork()).ldelim();
    }
    if (message.gameplayStats !== undefined) {
      CMsgSignOutGameplayStats.encode(message.gameplayStats, writer.uint32(354).fork()).ldelim();
    }
    for (const v of message.extraMessages) {
      CExtraMsgBlock.encode(v!, writer.uint32(434).fork()).ldelim();
    }
    if (message.trainingDataRecorded === true) {
      writer.uint32(440).bool(message.trainingDataRecorded);
    }
    if (message.winningTeam !== 0) {
      writer.uint32(448).int32(message.winningTeam);
    }
    if (message.normalizedWinProbabilityDiff !== 0) {
      writer.uint32(461).float(message.normalizedWinProbabilityDiff);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameMatchSignOut {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameMatchSignOut();
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

          message.duration = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.goodGuysWin = reader.bool();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.date = reader.fixed32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.teams.push(CMsgGameMatchSignOut_CTeam.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag == 64) {
            message.towerStatus.push(reader.uint32());
            continue;
          }

          if (tag == 66) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.towerStatus.push(reader.uint32());
            }

            continue;
          }

          break;
        case 9:
          if (tag == 72) {
            message.barracksStatus.push(reader.uint32());
            continue;
          }

          if (tag == 74) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.barracksStatus.push(reader.uint32());
            }

            continue;
          }

          break;
        case 10:
          if (tag != 80) {
            break;
          }

          message.cluster = reader.uint32();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.serverAddr = reader.string();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.firstBloodTime = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.eventScore = reader.uint32();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.picksBans.push(CMatchHeroSelectEvent.decode(reader, reader.uint32()));
          continue;
        case 41:
          if (tag != 330) {
            break;
          }

          message.fantasyStats.push(CMsgDOTAFantasyPlayerStats.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.playerStrangeCountAdjustments.push(
            CMsgEconPlayerStrangeCountAdjustment.decode(reader, reader.uint32()),
          );
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.automaticSurrender = reader.bool();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.serverVersion = reader.uint32();
          continue;
        case 35:
          if (tag != 282) {
            break;
          }

          message.poorNetworkConditions = CMsgPoorNetworkConditions.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag != 162) {
            break;
          }

          message.additionalMsgs.push(CMsgGameMatchSignOut_CAdditionalSignoutMsg.decode(reader, reader.uint32()));
          continue;
        case 36:
          if (tag != 290) {
            break;
          }

          message.socialFeedEvents.push(CMsgGameMatchSignOut_CSocialFeedMatchEvent.decode(reader, reader.uint32()));
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.averageNetworthDelta = reader.sint32();
          continue;
        case 37:
          if (tag != 298) {
            break;
          }

          message.customGameData = CMsgGameMatchSignOut_CCustomGameData.decode(reader, reader.uint32());
          continue;
        case 38:
          if (tag != 304) {
            break;
          }

          message.matchFlags = reader.uint32();
          continue;
        case 39:
          if (tag == 312) {
            message.teamScores.push(reader.uint32());
            continue;
          }

          if (tag == 314) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.teamScores.push(reader.uint32());
            }

            continue;
          }

          break;
        case 40:
          if (tag != 320) {
            break;
          }

          message.preGameDuration = reader.uint32();
          continue;
        case 42:
          if (tag != 338) {
            break;
          }

          message.eventGameLeaderboardEntries.push(
            CMsgGameMatchSignOut_EventGameLeaderboardEntry.decode(reader, reader.uint32()),
          );
          continue;
        case 43:
          if (tag != 346) {
            break;
          }

          message.wardPlacements.push(CMsgGameMatchSignOut_WardPlacement.decode(reader, reader.uint32()));
          continue;
        case 44:
          if (tag != 354) {
            break;
          }

          message.gameplayStats = CMsgSignOutGameplayStats.decode(reader, reader.uint32());
          continue;
        case 54:
          if (tag != 434) {
            break;
          }

          message.extraMessages.push(CExtraMsgBlock.decode(reader, reader.uint32()));
          continue;
        case 55:
          if (tag != 440) {
            break;
          }

          message.trainingDataRecorded = reader.bool();
          continue;
        case 56:
          if (tag != 448) {
            break;
          }

          message.winningTeam = reader.int32() as any;
          continue;
        case 57:
          if (tag != 461) {
            break;
          }

          message.normalizedWinProbabilityDiff = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGameMatchSignOut {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      goodGuysWin: isSet(object.goodGuysWin) ? Boolean(object.goodGuysWin) : false,
      date: isSet(object.date) ? Number(object.date) : 0,
      teams: Array.isArray(object?.teams) ? object.teams.map((e: any) => CMsgGameMatchSignOut_CTeam.fromJSON(e)) : [],
      towerStatus: Array.isArray(object?.towerStatus) ? object.towerStatus.map((e: any) => Number(e)) : [],
      barracksStatus: Array.isArray(object?.barracksStatus) ? object.barracksStatus.map((e: any) => Number(e)) : [],
      cluster: isSet(object.cluster) ? Number(object.cluster) : 0,
      serverAddr: isSet(object.serverAddr) ? String(object.serverAddr) : "",
      firstBloodTime: isSet(object.firstBloodTime) ? Number(object.firstBloodTime) : 0,
      eventScore: isSet(object.eventScore) ? Number(object.eventScore) : 0,
      picksBans: Array.isArray(object?.picksBans)
        ? object.picksBans.map((e: any) => CMatchHeroSelectEvent.fromJSON(e))
        : [],
      fantasyStats: Array.isArray(object?.fantasyStats)
        ? object.fantasyStats.map((e: any) => CMsgDOTAFantasyPlayerStats.fromJSON(e))
        : [],
      playerStrangeCountAdjustments: Array.isArray(object?.playerStrangeCountAdjustments)
        ? object.playerStrangeCountAdjustments.map((e: any) => CMsgEconPlayerStrangeCountAdjustment.fromJSON(e))
        : [],
      automaticSurrender: isSet(object.automaticSurrender) ? Boolean(object.automaticSurrender) : false,
      serverVersion: isSet(object.serverVersion) ? Number(object.serverVersion) : 0,
      poorNetworkConditions: isSet(object.poorNetworkConditions)
        ? CMsgPoorNetworkConditions.fromJSON(object.poorNetworkConditions)
        : undefined,
      additionalMsgs: Array.isArray(object?.additionalMsgs)
        ? object.additionalMsgs.map((e: any) => CMsgGameMatchSignOut_CAdditionalSignoutMsg.fromJSON(e))
        : [],
      socialFeedEvents: Array.isArray(object?.socialFeedEvents)
        ? object.socialFeedEvents.map((e: any) => CMsgGameMatchSignOut_CSocialFeedMatchEvent.fromJSON(e))
        : [],
      averageNetworthDelta: isSet(object.averageNetworthDelta) ? Number(object.averageNetworthDelta) : 0,
      customGameData: isSet(object.customGameData)
        ? CMsgGameMatchSignOut_CCustomGameData.fromJSON(object.customGameData)
        : undefined,
      matchFlags: isSet(object.matchFlags) ? Number(object.matchFlags) : 0,
      teamScores: Array.isArray(object?.teamScores)
        ? object.teamScores.map((e: any) => Number(e))
        : [],
      preGameDuration: isSet(object.preGameDuration) ? Number(object.preGameDuration) : 0,
      eventGameLeaderboardEntries: Array.isArray(object?.eventGameLeaderboardEntries)
        ? object.eventGameLeaderboardEntries.map((e: any) => CMsgGameMatchSignOut_EventGameLeaderboardEntry.fromJSON(e))
        : [],
      wardPlacements: Array.isArray(object?.wardPlacements)
        ? object.wardPlacements.map((e: any) => CMsgGameMatchSignOut_WardPlacement.fromJSON(e))
        : [],
      gameplayStats: isSet(object.gameplayStats) ? CMsgSignOutGameplayStats.fromJSON(object.gameplayStats) : undefined,
      extraMessages: Array.isArray(object?.extraMessages)
        ? object.extraMessages.map((e: any) => CExtraMsgBlock.fromJSON(e))
        : [],
      trainingDataRecorded: isSet(object.trainingDataRecorded) ? Boolean(object.trainingDataRecorded) : false,
      winningTeam: isSet(object.winningTeam) ? dotaGcTeamFromJSON(object.winningTeam) : 0,
      normalizedWinProbabilityDiff: isSet(object.normalizedWinProbabilityDiff)
        ? Number(object.normalizedWinProbabilityDiff)
        : 0,
    };
  },

  toJSON(message: CMsgGameMatchSignOut): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.goodGuysWin !== undefined && (obj.goodGuysWin = message.goodGuysWin);
    message.date !== undefined && (obj.date = Math.round(message.date));
    if (message.teams) {
      obj.teams = message.teams.map((e) => e ? CMsgGameMatchSignOut_CTeam.toJSON(e) : undefined);
    } else {
      obj.teams = [];
    }
    if (message.towerStatus) {
      obj.towerStatus = message.towerStatus.map((e) => Math.round(e));
    } else {
      obj.towerStatus = [];
    }
    if (message.barracksStatus) {
      obj.barracksStatus = message.barracksStatus.map((e) => Math.round(e));
    } else {
      obj.barracksStatus = [];
    }
    message.cluster !== undefined && (obj.cluster = Math.round(message.cluster));
    message.serverAddr !== undefined && (obj.serverAddr = message.serverAddr);
    message.firstBloodTime !== undefined && (obj.firstBloodTime = Math.round(message.firstBloodTime));
    message.eventScore !== undefined && (obj.eventScore = Math.round(message.eventScore));
    if (message.picksBans) {
      obj.picksBans = message.picksBans.map((e) => e ? CMatchHeroSelectEvent.toJSON(e) : undefined);
    } else {
      obj.picksBans = [];
    }
    if (message.fantasyStats) {
      obj.fantasyStats = message.fantasyStats.map((e) => e ? CMsgDOTAFantasyPlayerStats.toJSON(e) : undefined);
    } else {
      obj.fantasyStats = [];
    }
    if (message.playerStrangeCountAdjustments) {
      obj.playerStrangeCountAdjustments = message.playerStrangeCountAdjustments.map((e) =>
        e ? CMsgEconPlayerStrangeCountAdjustment.toJSON(e) : undefined
      );
    } else {
      obj.playerStrangeCountAdjustments = [];
    }
    message.automaticSurrender !== undefined && (obj.automaticSurrender = message.automaticSurrender);
    message.serverVersion !== undefined && (obj.serverVersion = Math.round(message.serverVersion));
    message.poorNetworkConditions !== undefined && (obj.poorNetworkConditions = message.poorNetworkConditions
      ? CMsgPoorNetworkConditions.toJSON(message.poorNetworkConditions)
      : undefined);
    if (message.additionalMsgs) {
      obj.additionalMsgs = message.additionalMsgs.map((e) =>
        e ? CMsgGameMatchSignOut_CAdditionalSignoutMsg.toJSON(e) : undefined
      );
    } else {
      obj.additionalMsgs = [];
    }
    if (message.socialFeedEvents) {
      obj.socialFeedEvents = message.socialFeedEvents.map((e) =>
        e ? CMsgGameMatchSignOut_CSocialFeedMatchEvent.toJSON(e) : undefined
      );
    } else {
      obj.socialFeedEvents = [];
    }
    message.averageNetworthDelta !== undefined && (obj.averageNetworthDelta = Math.round(message.averageNetworthDelta));
    message.customGameData !== undefined && (obj.customGameData = message.customGameData
      ? CMsgGameMatchSignOut_CCustomGameData.toJSON(message.customGameData)
      : undefined);
    message.matchFlags !== undefined && (obj.matchFlags = Math.round(message.matchFlags));
    if (message.teamScores) {
      obj.teamScores = message.teamScores.map((e) => Math.round(e));
    } else {
      obj.teamScores = [];
    }
    message.preGameDuration !== undefined && (obj.preGameDuration = Math.round(message.preGameDuration));
    if (message.eventGameLeaderboardEntries) {
      obj.eventGameLeaderboardEntries = message.eventGameLeaderboardEntries.map((e) =>
        e ? CMsgGameMatchSignOut_EventGameLeaderboardEntry.toJSON(e) : undefined
      );
    } else {
      obj.eventGameLeaderboardEntries = [];
    }
    if (message.wardPlacements) {
      obj.wardPlacements = message.wardPlacements.map((e) =>
        e ? CMsgGameMatchSignOut_WardPlacement.toJSON(e) : undefined
      );
    } else {
      obj.wardPlacements = [];
    }
    message.gameplayStats !== undefined &&
      (obj.gameplayStats = message.gameplayStats ? CMsgSignOutGameplayStats.toJSON(message.gameplayStats) : undefined);
    if (message.extraMessages) {
      obj.extraMessages = message.extraMessages.map((e) => e ? CExtraMsgBlock.toJSON(e) : undefined);
    } else {
      obj.extraMessages = [];
    }
    message.trainingDataRecorded !== undefined && (obj.trainingDataRecorded = message.trainingDataRecorded);
    message.winningTeam !== undefined && (obj.winningTeam = dotaGcTeamToJSON(message.winningTeam));
    message.normalizedWinProbabilityDiff !== undefined &&
      (obj.normalizedWinProbabilityDiff = message.normalizedWinProbabilityDiff);
    return obj;
  },
};

function createBaseCMsgGameMatchSignOut_CTeam(): CMsgGameMatchSignOut_CTeam {
  return { players: [] };
}

export const CMsgGameMatchSignOut_CTeam = {
  encode(message: CMsgGameMatchSignOut_CTeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.players) {
      CMsgGameMatchSignOut_CTeam_CPlayer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameMatchSignOut_CTeam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameMatchSignOut_CTeam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.players.push(CMsgGameMatchSignOut_CTeam_CPlayer.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGameMatchSignOut_CTeam {
    return {
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgGameMatchSignOut_CTeam_CPlayer.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGameMatchSignOut_CTeam): unknown {
    const obj: any = {};
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgGameMatchSignOut_CTeam_CPlayer.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    return obj;
  },
};

function createBaseCMsgGameMatchSignOut_CTeam_CPlayer(): CMsgGameMatchSignOut_CTeam_CPlayer {
  return {
    steamId: "0",
    heroId: 0,
    items: [],
    itemPurchaseTimes: [],
    gold: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
    leaverStatus: 0,
    lastHits: 0,
    denies: 0,
    goldPerMin: 0,
    xpPerMinute: 0,
    goldSpent: 0,
    level: 0,
    scaledHeroDamage: 0,
    scaledTowerDamage: 0,
    scaledHeroHealing: 0,
    timeLastSeen: 0,
    supportAbilityValue: 0,
    partyId: "0",
    claimedFarmGold: 0,
    supportGold: 0,
    claimedDenies: 0,
    claimedMisses: 0,
    misses: 0,
    netWorth: 0,
    heroDamage: 0,
    towerDamage: 0,
    heroHealing: 0,
    abilityUpgrades: [],
    additionalUnitsInventory: [],
    permanentBuffs: [],
    customGameData: undefined,
    matchPlayerFlags: 0,
    talentAbilityIds: [],
    heroPickOrder: 0,
    heroWasRandomed: false,
    heroWasDotaPlusSuggestion: false,
    lane: 0,
    isUsingPlusGuide: false,
    heroDamageReceived: [],
    heroDamageDealt: [],
    secondsDead: 0,
    goldLostToDeath: 0,
    commandCount: 0,
    mouseClickCastCommandCount: 0,
    teleportsUsed: 0,
    cavernCrawlPreferredMapVariant: 0,
    bountyRunes: 0,
    outpostsCaptured: 0,
    dewards: 0,
    wardsPlaced: 0,
    campsStacked: 0,
    playerSlot: 0,
    predictedPosition: 0,
    laneOutcomes: 0,
    friendlyT1DestroyedTime: 0,
    enemyT1DestroyedTime: 0,
    friendlyRoshanKills: 0,
    enemyRoshanKills: 0,
    powerRunes: 0,
    waterRunes: 0,
    stunDuration: 0,
    teamNumber: 0,
    teamSlot: 0,
    timePurchasedShard: 0,
    timePurchasedAghs: 0,
    abilityDraftAbilities: [],
  };
}

export const CMsgGameMatchSignOut_CTeam_CPlayer = {
  encode(message: CMsgGameMatchSignOut_CTeam_CPlayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.heroId !== 0) {
      writer.uint32(24).uint32(message.heroId);
    }
    writer.uint32(34).fork();
    for (const v of message.items) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(506).fork();
    for (const v of message.itemPurchaseTimes) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.gold !== 0) {
      writer.uint32(40).uint32(message.gold);
    }
    if (message.kills !== 0) {
      writer.uint32(48).uint32(message.kills);
    }
    if (message.deaths !== 0) {
      writer.uint32(56).uint32(message.deaths);
    }
    if (message.assists !== 0) {
      writer.uint32(64).uint32(message.assists);
    }
    if (message.leaverStatus !== 0) {
      writer.uint32(72).uint32(message.leaverStatus);
    }
    if (message.lastHits !== 0) {
      writer.uint32(80).uint32(message.lastHits);
    }
    if (message.denies !== 0) {
      writer.uint32(88).uint32(message.denies);
    }
    if (message.goldPerMin !== 0) {
      writer.uint32(96).uint32(message.goldPerMin);
    }
    if (message.xpPerMinute !== 0) {
      writer.uint32(104).uint32(message.xpPerMinute);
    }
    if (message.goldSpent !== 0) {
      writer.uint32(112).uint32(message.goldSpent);
    }
    if (message.level !== 0) {
      writer.uint32(120).uint32(message.level);
    }
    if (message.scaledHeroDamage !== 0) {
      writer.uint32(128).uint32(message.scaledHeroDamage);
    }
    if (message.scaledTowerDamage !== 0) {
      writer.uint32(136).uint32(message.scaledTowerDamage);
    }
    if (message.scaledHeroHealing !== 0) {
      writer.uint32(144).uint32(message.scaledHeroHealing);
    }
    if (message.timeLastSeen !== 0) {
      writer.uint32(152).uint32(message.timeLastSeen);
    }
    if (message.supportAbilityValue !== 0) {
      writer.uint32(160).uint32(message.supportAbilityValue);
    }
    if (message.partyId !== "0") {
      writer.uint32(168).uint64(message.partyId);
    }
    if (message.claimedFarmGold !== 0) {
      writer.uint32(216).uint32(message.claimedFarmGold);
    }
    if (message.supportGold !== 0) {
      writer.uint32(224).uint32(message.supportGold);
    }
    if (message.claimedDenies !== 0) {
      writer.uint32(232).uint32(message.claimedDenies);
    }
    if (message.claimedMisses !== 0) {
      writer.uint32(240).uint32(message.claimedMisses);
    }
    if (message.misses !== 0) {
      writer.uint32(248).uint32(message.misses);
    }
    if (message.netWorth !== 0) {
      writer.uint32(272).uint32(message.netWorth);
    }
    if (message.heroDamage !== 0) {
      writer.uint32(296).uint32(message.heroDamage);
    }
    if (message.towerDamage !== 0) {
      writer.uint32(304).uint32(message.towerDamage);
    }
    if (message.heroHealing !== 0) {
      writer.uint32(312).uint32(message.heroHealing);
    }
    for (const v of message.abilityUpgrades) {
      CMatchPlayerAbilityUpgrade.encode(v!, writer.uint32(258).fork()).ldelim();
    }
    for (const v of message.additionalUnitsInventory) {
      CMatchAdditionalUnitInventory.encode(v!, writer.uint32(266).fork()).ldelim();
    }
    for (const v of message.permanentBuffs) {
      CMatchPlayerPermanentBuff.encode(v!, writer.uint32(322).fork()).ldelim();
    }
    if (message.customGameData !== undefined) {
      CMsgGameMatchSignOut_CTeam_CPlayer_CCustomGameData.encode(message.customGameData, writer.uint32(282).fork())
        .ldelim();
    }
    if (message.matchPlayerFlags !== 0) {
      writer.uint32(288).uint32(message.matchPlayerFlags);
    }
    writer.uint32(330).fork();
    for (const v of message.talentAbilityIds) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.heroPickOrder !== 0) {
      writer.uint32(336).uint32(message.heroPickOrder);
    }
    if (message.heroWasRandomed === true) {
      writer.uint32(344).bool(message.heroWasRandomed);
    }
    if (message.heroWasDotaPlusSuggestion === true) {
      writer.uint32(400).bool(message.heroWasDotaPlusSuggestion);
    }
    if (message.lane !== 0) {
      writer.uint32(360).uint32(message.lane);
    }
    if (message.isUsingPlusGuide === true) {
      writer.uint32(376).bool(message.isUsingPlusGuide);
    }
    for (const v of message.heroDamageReceived) {
      CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived.encode(v!, writer.uint32(386).fork()).ldelim();
    }
    for (const v of message.heroDamageDealt) {
      CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived.encode(v!, writer.uint32(514).fork()).ldelim();
    }
    if (message.secondsDead !== 0) {
      writer.uint32(408).uint32(message.secondsDead);
    }
    if (message.goldLostToDeath !== 0) {
      writer.uint32(416).uint32(message.goldLostToDeath);
    }
    if (message.commandCount !== 0) {
      writer.uint32(424).uint32(message.commandCount);
    }
    if (message.mouseClickCastCommandCount !== 0) {
      writer.uint32(432).uint32(message.mouseClickCastCommandCount);
    }
    if (message.teleportsUsed !== 0) {
      writer.uint32(440).uint32(message.teleportsUsed);
    }
    if (message.cavernCrawlPreferredMapVariant !== 0) {
      writer.uint32(448).uint32(message.cavernCrawlPreferredMapVariant);
    }
    if (message.bountyRunes !== 0) {
      writer.uint32(456).uint32(message.bountyRunes);
    }
    if (message.outpostsCaptured !== 0) {
      writer.uint32(464).uint32(message.outpostsCaptured);
    }
    if (message.dewards !== 0) {
      writer.uint32(472).uint32(message.dewards);
    }
    if (message.wardsPlaced !== 0) {
      writer.uint32(480).uint32(message.wardsPlaced);
    }
    if (message.campsStacked !== 0) {
      writer.uint32(488).uint32(message.campsStacked);
    }
    if (message.playerSlot !== 0) {
      writer.uint32(496).uint32(message.playerSlot);
    }
    if (message.predictedPosition !== 0) {
      writer.uint32(528).uint32(message.predictedPosition);
    }
    if (message.laneOutcomes !== 0) {
      writer.uint32(536).uint32(message.laneOutcomes);
    }
    if (message.friendlyT1DestroyedTime !== 0) {
      writer.uint32(544).uint32(message.friendlyT1DestroyedTime);
    }
    if (message.enemyT1DestroyedTime !== 0) {
      writer.uint32(552).uint32(message.enemyT1DestroyedTime);
    }
    if (message.friendlyRoshanKills !== 0) {
      writer.uint32(560).uint32(message.friendlyRoshanKills);
    }
    if (message.enemyRoshanKills !== 0) {
      writer.uint32(568).uint32(message.enemyRoshanKills);
    }
    if (message.powerRunes !== 0) {
      writer.uint32(576).uint32(message.powerRunes);
    }
    if (message.waterRunes !== 0) {
      writer.uint32(584).uint32(message.waterRunes);
    }
    if (message.stunDuration !== 0) {
      writer.uint32(597).float(message.stunDuration);
    }
    if (message.teamNumber !== 0) {
      writer.uint32(600).int32(message.teamNumber);
    }
    if (message.teamSlot !== 0) {
      writer.uint32(608).uint32(message.teamSlot);
    }
    if (message.timePurchasedShard !== 0) {
      writer.uint32(616).uint32(message.timePurchasedShard);
    }
    if (message.timePurchasedAghs !== 0) {
      writer.uint32(624).uint32(message.timePurchasedAghs);
    }
    writer.uint32(634).fork();
    for (const v of message.abilityDraftAbilities) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameMatchSignOut_CTeam_CPlayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameMatchSignOut_CTeam_CPlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 4:
          if (tag == 32) {
            message.items.push(reader.int32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.items.push(reader.int32());
            }

            continue;
          }

          break;
        case 63:
          if (tag == 504) {
            message.itemPurchaseTimes.push(reader.uint32());
            continue;
          }

          if (tag == 506) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemPurchaseTimes.push(reader.uint32());
            }

            continue;
          }

          break;
        case 5:
          if (tag != 40) {
            break;
          }

          message.gold = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.kills = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.deaths = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.assists = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.leaverStatus = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.lastHits = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.denies = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.goldPerMin = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.xpPerMinute = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.goldSpent = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.scaledHeroDamage = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.scaledTowerDamage = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.scaledHeroHealing = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.timeLastSeen = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.supportAbilityValue = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.partyId = longToString(reader.uint64() as Long);
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.claimedFarmGold = reader.uint32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.supportGold = reader.uint32();
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.claimedDenies = reader.uint32();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.claimedMisses = reader.uint32();
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.misses = reader.uint32();
          continue;
        case 34:
          if (tag != 272) {
            break;
          }

          message.netWorth = reader.uint32();
          continue;
        case 37:
          if (tag != 296) {
            break;
          }

          message.heroDamage = reader.uint32();
          continue;
        case 38:
          if (tag != 304) {
            break;
          }

          message.towerDamage = reader.uint32();
          continue;
        case 39:
          if (tag != 312) {
            break;
          }

          message.heroHealing = reader.uint32();
          continue;
        case 32:
          if (tag != 258) {
            break;
          }

          message.abilityUpgrades.push(CMatchPlayerAbilityUpgrade.decode(reader, reader.uint32()));
          continue;
        case 33:
          if (tag != 266) {
            break;
          }

          message.additionalUnitsInventory.push(CMatchAdditionalUnitInventory.decode(reader, reader.uint32()));
          continue;
        case 40:
          if (tag != 322) {
            break;
          }

          message.permanentBuffs.push(CMatchPlayerPermanentBuff.decode(reader, reader.uint32()));
          continue;
        case 35:
          if (tag != 282) {
            break;
          }

          message.customGameData = CMsgGameMatchSignOut_CTeam_CPlayer_CCustomGameData.decode(reader, reader.uint32());
          continue;
        case 36:
          if (tag != 288) {
            break;
          }

          message.matchPlayerFlags = reader.uint32();
          continue;
        case 41:
          if (tag == 328) {
            message.talentAbilityIds.push(reader.int32());
            continue;
          }

          if (tag == 330) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.talentAbilityIds.push(reader.int32());
            }

            continue;
          }

          break;
        case 42:
          if (tag != 336) {
            break;
          }

          message.heroPickOrder = reader.uint32();
          continue;
        case 43:
          if (tag != 344) {
            break;
          }

          message.heroWasRandomed = reader.bool();
          continue;
        case 50:
          if (tag != 400) {
            break;
          }

          message.heroWasDotaPlusSuggestion = reader.bool();
          continue;
        case 45:
          if (tag != 360) {
            break;
          }

          message.lane = reader.uint32();
          continue;
        case 47:
          if (tag != 376) {
            break;
          }

          message.isUsingPlusGuide = reader.bool();
          continue;
        case 48:
          if (tag != 386) {
            break;
          }

          message.heroDamageReceived.push(
            CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived.decode(reader, reader.uint32()),
          );
          continue;
        case 64:
          if (tag != 514) {
            break;
          }

          message.heroDamageDealt.push(
            CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived.decode(reader, reader.uint32()),
          );
          continue;
        case 51:
          if (tag != 408) {
            break;
          }

          message.secondsDead = reader.uint32();
          continue;
        case 52:
          if (tag != 416) {
            break;
          }

          message.goldLostToDeath = reader.uint32();
          continue;
        case 53:
          if (tag != 424) {
            break;
          }

          message.commandCount = reader.uint32();
          continue;
        case 54:
          if (tag != 432) {
            break;
          }

          message.mouseClickCastCommandCount = reader.uint32();
          continue;
        case 55:
          if (tag != 440) {
            break;
          }

          message.teleportsUsed = reader.uint32();
          continue;
        case 56:
          if (tag != 448) {
            break;
          }

          message.cavernCrawlPreferredMapVariant = reader.uint32();
          continue;
        case 57:
          if (tag != 456) {
            break;
          }

          message.bountyRunes = reader.uint32();
          continue;
        case 58:
          if (tag != 464) {
            break;
          }

          message.outpostsCaptured = reader.uint32();
          continue;
        case 59:
          if (tag != 472) {
            break;
          }

          message.dewards = reader.uint32();
          continue;
        case 60:
          if (tag != 480) {
            break;
          }

          message.wardsPlaced = reader.uint32();
          continue;
        case 61:
          if (tag != 488) {
            break;
          }

          message.campsStacked = reader.uint32();
          continue;
        case 62:
          if (tag != 496) {
            break;
          }

          message.playerSlot = reader.uint32();
          continue;
        case 66:
          if (tag != 528) {
            break;
          }

          message.predictedPosition = reader.uint32();
          continue;
        case 67:
          if (tag != 536) {
            break;
          }

          message.laneOutcomes = reader.uint32();
          continue;
        case 68:
          if (tag != 544) {
            break;
          }

          message.friendlyT1DestroyedTime = reader.uint32();
          continue;
        case 69:
          if (tag != 552) {
            break;
          }

          message.enemyT1DestroyedTime = reader.uint32();
          continue;
        case 70:
          if (tag != 560) {
            break;
          }

          message.friendlyRoshanKills = reader.uint32();
          continue;
        case 71:
          if (tag != 568) {
            break;
          }

          message.enemyRoshanKills = reader.uint32();
          continue;
        case 72:
          if (tag != 576) {
            break;
          }

          message.powerRunes = reader.uint32();
          continue;
        case 73:
          if (tag != 584) {
            break;
          }

          message.waterRunes = reader.uint32();
          continue;
        case 74:
          if (tag != 597) {
            break;
          }

          message.stunDuration = reader.float();
          continue;
        case 75:
          if (tag != 600) {
            break;
          }

          message.teamNumber = reader.int32() as any;
          continue;
        case 76:
          if (tag != 608) {
            break;
          }

          message.teamSlot = reader.uint32();
          continue;
        case 77:
          if (tag != 616) {
            break;
          }

          message.timePurchasedShard = reader.uint32();
          continue;
        case 78:
          if (tag != 624) {
            break;
          }

          message.timePurchasedAghs = reader.uint32();
          continue;
        case 79:
          if (tag == 632) {
            message.abilityDraftAbilities.push(reader.int32());
            continue;
          }

          if (tag == 634) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.abilityDraftAbilities.push(reader.int32());
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

  fromJSON(object: any): CMsgGameMatchSignOut_CTeam_CPlayer {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Number(e)) : [],
      itemPurchaseTimes: Array.isArray(object?.itemPurchaseTimes)
        ? object.itemPurchaseTimes.map((e: any) => Number(e))
        : [],
      gold: isSet(object.gold) ? Number(object.gold) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      assists: isSet(object.assists) ? Number(object.assists) : 0,
      leaverStatus: isSet(object.leaverStatus) ? Number(object.leaverStatus) : 0,
      lastHits: isSet(object.lastHits) ? Number(object.lastHits) : 0,
      denies: isSet(object.denies) ? Number(object.denies) : 0,
      goldPerMin: isSet(object.goldPerMin) ? Number(object.goldPerMin) : 0,
      xpPerMinute: isSet(object.xpPerMinute) ? Number(object.xpPerMinute) : 0,
      goldSpent: isSet(object.goldSpent) ? Number(object.goldSpent) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      scaledHeroDamage: isSet(object.scaledHeroDamage) ? Number(object.scaledHeroDamage) : 0,
      scaledTowerDamage: isSet(object.scaledTowerDamage) ? Number(object.scaledTowerDamage) : 0,
      scaledHeroHealing: isSet(object.scaledHeroHealing) ? Number(object.scaledHeroHealing) : 0,
      timeLastSeen: isSet(object.timeLastSeen) ? Number(object.timeLastSeen) : 0,
      supportAbilityValue: isSet(object.supportAbilityValue) ? Number(object.supportAbilityValue) : 0,
      partyId: isSet(object.partyId) ? String(object.partyId) : "0",
      claimedFarmGold: isSet(object.claimedFarmGold) ? Number(object.claimedFarmGold) : 0,
      supportGold: isSet(object.supportGold) ? Number(object.supportGold) : 0,
      claimedDenies: isSet(object.claimedDenies) ? Number(object.claimedDenies) : 0,
      claimedMisses: isSet(object.claimedMisses) ? Number(object.claimedMisses) : 0,
      misses: isSet(object.misses) ? Number(object.misses) : 0,
      netWorth: isSet(object.netWorth) ? Number(object.netWorth) : 0,
      heroDamage: isSet(object.heroDamage) ? Number(object.heroDamage) : 0,
      towerDamage: isSet(object.towerDamage) ? Number(object.towerDamage) : 0,
      heroHealing: isSet(object.heroHealing) ? Number(object.heroHealing) : 0,
      abilityUpgrades: Array.isArray(object?.abilityUpgrades)
        ? object.abilityUpgrades.map((e: any) => CMatchPlayerAbilityUpgrade.fromJSON(e))
        : [],
      additionalUnitsInventory: Array.isArray(object?.additionalUnitsInventory)
        ? object.additionalUnitsInventory.map((e: any) => CMatchAdditionalUnitInventory.fromJSON(e))
        : [],
      permanentBuffs: Array.isArray(object?.permanentBuffs)
        ? object.permanentBuffs.map((e: any) => CMatchPlayerPermanentBuff.fromJSON(e))
        : [],
      customGameData: isSet(object.customGameData)
        ? CMsgGameMatchSignOut_CTeam_CPlayer_CCustomGameData.fromJSON(object.customGameData)
        : undefined,
      matchPlayerFlags: isSet(object.matchPlayerFlags) ? Number(object.matchPlayerFlags) : 0,
      talentAbilityIds: Array.isArray(object?.talentAbilityIds)
        ? object.talentAbilityIds.map((e: any) => Number(e))
        : [],
      heroPickOrder: isSet(object.heroPickOrder) ? Number(object.heroPickOrder) : 0,
      heroWasRandomed: isSet(object.heroWasRandomed) ? Boolean(object.heroWasRandomed) : false,
      heroWasDotaPlusSuggestion: isSet(object.heroWasDotaPlusSuggestion)
        ? Boolean(object.heroWasDotaPlusSuggestion)
        : false,
      lane: isSet(object.lane) ? Number(object.lane) : 0,
      isUsingPlusGuide: isSet(object.isUsingPlusGuide) ? Boolean(object.isUsingPlusGuide) : false,
      heroDamageReceived: Array.isArray(object?.heroDamageReceived)
        ? object.heroDamageReceived.map((e: any) => CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived.fromJSON(e))
        : [],
      heroDamageDealt: Array.isArray(object?.heroDamageDealt)
        ? object.heroDamageDealt.map((e: any) => CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived.fromJSON(e))
        : [],
      secondsDead: isSet(object.secondsDead) ? Number(object.secondsDead) : 0,
      goldLostToDeath: isSet(object.goldLostToDeath) ? Number(object.goldLostToDeath) : 0,
      commandCount: isSet(object.commandCount) ? Number(object.commandCount) : 0,
      mouseClickCastCommandCount: isSet(object.mouseClickCastCommandCount)
        ? Number(object.mouseClickCastCommandCount)
        : 0,
      teleportsUsed: isSet(object.teleportsUsed) ? Number(object.teleportsUsed) : 0,
      cavernCrawlPreferredMapVariant: isSet(object.cavernCrawlPreferredMapVariant)
        ? Number(object.cavernCrawlPreferredMapVariant)
        : 0,
      bountyRunes: isSet(object.bountyRunes) ? Number(object.bountyRunes) : 0,
      outpostsCaptured: isSet(object.outpostsCaptured) ? Number(object.outpostsCaptured) : 0,
      dewards: isSet(object.dewards) ? Number(object.dewards) : 0,
      wardsPlaced: isSet(object.wardsPlaced) ? Number(object.wardsPlaced) : 0,
      campsStacked: isSet(object.campsStacked) ? Number(object.campsStacked) : 0,
      playerSlot: isSet(object.playerSlot) ? Number(object.playerSlot) : 0,
      predictedPosition: isSet(object.predictedPosition) ? Number(object.predictedPosition) : 0,
      laneOutcomes: isSet(object.laneOutcomes) ? Number(object.laneOutcomes) : 0,
      friendlyT1DestroyedTime: isSet(object.friendlyT1DestroyedTime) ? Number(object.friendlyT1DestroyedTime) : 0,
      enemyT1DestroyedTime: isSet(object.enemyT1DestroyedTime) ? Number(object.enemyT1DestroyedTime) : 0,
      friendlyRoshanKills: isSet(object.friendlyRoshanKills) ? Number(object.friendlyRoshanKills) : 0,
      enemyRoshanKills: isSet(object.enemyRoshanKills) ? Number(object.enemyRoshanKills) : 0,
      powerRunes: isSet(object.powerRunes) ? Number(object.powerRunes) : 0,
      waterRunes: isSet(object.waterRunes) ? Number(object.waterRunes) : 0,
      stunDuration: isSet(object.stunDuration) ? Number(object.stunDuration) : 0,
      teamNumber: isSet(object.teamNumber) ? dotaGcTeamFromJSON(object.teamNumber) : 0,
      teamSlot: isSet(object.teamSlot) ? Number(object.teamSlot) : 0,
      timePurchasedShard: isSet(object.timePurchasedShard) ? Number(object.timePurchasedShard) : 0,
      timePurchasedAghs: isSet(object.timePurchasedAghs) ? Number(object.timePurchasedAghs) : 0,
      abilityDraftAbilities: Array.isArray(object?.abilityDraftAbilities)
        ? object.abilityDraftAbilities.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CMsgGameMatchSignOut_CTeam_CPlayer): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    if (message.items) {
      obj.items = message.items.map((e) => Math.round(e));
    } else {
      obj.items = [];
    }
    if (message.itemPurchaseTimes) {
      obj.itemPurchaseTimes = message.itemPurchaseTimes.map((e) => Math.round(e));
    } else {
      obj.itemPurchaseTimes = [];
    }
    message.gold !== undefined && (obj.gold = Math.round(message.gold));
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.assists !== undefined && (obj.assists = Math.round(message.assists));
    message.leaverStatus !== undefined && (obj.leaverStatus = Math.round(message.leaverStatus));
    message.lastHits !== undefined && (obj.lastHits = Math.round(message.lastHits));
    message.denies !== undefined && (obj.denies = Math.round(message.denies));
    message.goldPerMin !== undefined && (obj.goldPerMin = Math.round(message.goldPerMin));
    message.xpPerMinute !== undefined && (obj.xpPerMinute = Math.round(message.xpPerMinute));
    message.goldSpent !== undefined && (obj.goldSpent = Math.round(message.goldSpent));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.scaledHeroDamage !== undefined && (obj.scaledHeroDamage = Math.round(message.scaledHeroDamage));
    message.scaledTowerDamage !== undefined && (obj.scaledTowerDamage = Math.round(message.scaledTowerDamage));
    message.scaledHeroHealing !== undefined && (obj.scaledHeroHealing = Math.round(message.scaledHeroHealing));
    message.timeLastSeen !== undefined && (obj.timeLastSeen = Math.round(message.timeLastSeen));
    message.supportAbilityValue !== undefined && (obj.supportAbilityValue = Math.round(message.supportAbilityValue));
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.claimedFarmGold !== undefined && (obj.claimedFarmGold = Math.round(message.claimedFarmGold));
    message.supportGold !== undefined && (obj.supportGold = Math.round(message.supportGold));
    message.claimedDenies !== undefined && (obj.claimedDenies = Math.round(message.claimedDenies));
    message.claimedMisses !== undefined && (obj.claimedMisses = Math.round(message.claimedMisses));
    message.misses !== undefined && (obj.misses = Math.round(message.misses));
    message.netWorth !== undefined && (obj.netWorth = Math.round(message.netWorth));
    message.heroDamage !== undefined && (obj.heroDamage = Math.round(message.heroDamage));
    message.towerDamage !== undefined && (obj.towerDamage = Math.round(message.towerDamage));
    message.heroHealing !== undefined && (obj.heroHealing = Math.round(message.heroHealing));
    if (message.abilityUpgrades) {
      obj.abilityUpgrades = message.abilityUpgrades.map((e) => e ? CMatchPlayerAbilityUpgrade.toJSON(e) : undefined);
    } else {
      obj.abilityUpgrades = [];
    }
    if (message.additionalUnitsInventory) {
      obj.additionalUnitsInventory = message.additionalUnitsInventory.map((e) =>
        e ? CMatchAdditionalUnitInventory.toJSON(e) : undefined
      );
    } else {
      obj.additionalUnitsInventory = [];
    }
    if (message.permanentBuffs) {
      obj.permanentBuffs = message.permanentBuffs.map((e) => e ? CMatchPlayerPermanentBuff.toJSON(e) : undefined);
    } else {
      obj.permanentBuffs = [];
    }
    message.customGameData !== undefined && (obj.customGameData = message.customGameData
      ? CMsgGameMatchSignOut_CTeam_CPlayer_CCustomGameData.toJSON(message.customGameData)
      : undefined);
    message.matchPlayerFlags !== undefined && (obj.matchPlayerFlags = Math.round(message.matchPlayerFlags));
    if (message.talentAbilityIds) {
      obj.talentAbilityIds = message.talentAbilityIds.map((e) => Math.round(e));
    } else {
      obj.talentAbilityIds = [];
    }
    message.heroPickOrder !== undefined && (obj.heroPickOrder = Math.round(message.heroPickOrder));
    message.heroWasRandomed !== undefined && (obj.heroWasRandomed = message.heroWasRandomed);
    message.heroWasDotaPlusSuggestion !== undefined &&
      (obj.heroWasDotaPlusSuggestion = message.heroWasDotaPlusSuggestion);
    message.lane !== undefined && (obj.lane = Math.round(message.lane));
    message.isUsingPlusGuide !== undefined && (obj.isUsingPlusGuide = message.isUsingPlusGuide);
    if (message.heroDamageReceived) {
      obj.heroDamageReceived = message.heroDamageReceived.map((e) =>
        e ? CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived.toJSON(e) : undefined
      );
    } else {
      obj.heroDamageReceived = [];
    }
    if (message.heroDamageDealt) {
      obj.heroDamageDealt = message.heroDamageDealt.map((e) =>
        e ? CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived.toJSON(e) : undefined
      );
    } else {
      obj.heroDamageDealt = [];
    }
    message.secondsDead !== undefined && (obj.secondsDead = Math.round(message.secondsDead));
    message.goldLostToDeath !== undefined && (obj.goldLostToDeath = Math.round(message.goldLostToDeath));
    message.commandCount !== undefined && (obj.commandCount = Math.round(message.commandCount));
    message.mouseClickCastCommandCount !== undefined &&
      (obj.mouseClickCastCommandCount = Math.round(message.mouseClickCastCommandCount));
    message.teleportsUsed !== undefined && (obj.teleportsUsed = Math.round(message.teleportsUsed));
    message.cavernCrawlPreferredMapVariant !== undefined &&
      (obj.cavernCrawlPreferredMapVariant = Math.round(message.cavernCrawlPreferredMapVariant));
    message.bountyRunes !== undefined && (obj.bountyRunes = Math.round(message.bountyRunes));
    message.outpostsCaptured !== undefined && (obj.outpostsCaptured = Math.round(message.outpostsCaptured));
    message.dewards !== undefined && (obj.dewards = Math.round(message.dewards));
    message.wardsPlaced !== undefined && (obj.wardsPlaced = Math.round(message.wardsPlaced));
    message.campsStacked !== undefined && (obj.campsStacked = Math.round(message.campsStacked));
    message.playerSlot !== undefined && (obj.playerSlot = Math.round(message.playerSlot));
    message.predictedPosition !== undefined && (obj.predictedPosition = Math.round(message.predictedPosition));
    message.laneOutcomes !== undefined && (obj.laneOutcomes = Math.round(message.laneOutcomes));
    message.friendlyT1DestroyedTime !== undefined &&
      (obj.friendlyT1DestroyedTime = Math.round(message.friendlyT1DestroyedTime));
    message.enemyT1DestroyedTime !== undefined && (obj.enemyT1DestroyedTime = Math.round(message.enemyT1DestroyedTime));
    message.friendlyRoshanKills !== undefined && (obj.friendlyRoshanKills = Math.round(message.friendlyRoshanKills));
    message.enemyRoshanKills !== undefined && (obj.enemyRoshanKills = Math.round(message.enemyRoshanKills));
    message.powerRunes !== undefined && (obj.powerRunes = Math.round(message.powerRunes));
    message.waterRunes !== undefined && (obj.waterRunes = Math.round(message.waterRunes));
    message.stunDuration !== undefined && (obj.stunDuration = message.stunDuration);
    message.teamNumber !== undefined && (obj.teamNumber = dotaGcTeamToJSON(message.teamNumber));
    message.teamSlot !== undefined && (obj.teamSlot = Math.round(message.teamSlot));
    message.timePurchasedShard !== undefined && (obj.timePurchasedShard = Math.round(message.timePurchasedShard));
    message.timePurchasedAghs !== undefined && (obj.timePurchasedAghs = Math.round(message.timePurchasedAghs));
    if (message.abilityDraftAbilities) {
      obj.abilityDraftAbilities = message.abilityDraftAbilities.map((e) => Math.round(e));
    } else {
      obj.abilityDraftAbilities = [];
    }
    return obj;
  },
};

function createBaseCMsgGameMatchSignOut_CTeam_CPlayer_CCustomGameData(): CMsgGameMatchSignOut_CTeam_CPlayer_CCustomGameData {
  return { dotaTeam: 0, winner: false };
}

export const CMsgGameMatchSignOut_CTeam_CPlayer_CCustomGameData = {
  encode(
    message: CMsgGameMatchSignOut_CTeam_CPlayer_CCustomGameData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.dotaTeam !== 0) {
      writer.uint32(8).uint32(message.dotaTeam);
    }
    if (message.winner === true) {
      writer.uint32(16).bool(message.winner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameMatchSignOut_CTeam_CPlayer_CCustomGameData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameMatchSignOut_CTeam_CPlayer_CCustomGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.dotaTeam = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.winner = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGameMatchSignOut_CTeam_CPlayer_CCustomGameData {
    return {
      dotaTeam: isSet(object.dotaTeam) ? Number(object.dotaTeam) : 0,
      winner: isSet(object.winner) ? Boolean(object.winner) : false,
    };
  },

  toJSON(message: CMsgGameMatchSignOut_CTeam_CPlayer_CCustomGameData): unknown {
    const obj: any = {};
    message.dotaTeam !== undefined && (obj.dotaTeam = Math.round(message.dotaTeam));
    message.winner !== undefined && (obj.winner = message.winner);
    return obj;
  },
};

function createBaseCMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived(): CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived {
  return { preReduction: 0, postReduction: 0, damageType: 0 };
}

export const CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived = {
  encode(
    message: CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.preReduction !== 0) {
      writer.uint32(8).uint32(message.preReduction);
    }
    if (message.postReduction !== 0) {
      writer.uint32(16).uint32(message.postReduction);
    }
    if (message.damageType !== 0) {
      writer.uint32(24).int32(message.damageType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.preReduction = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.postReduction = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.damageType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived {
    return {
      preReduction: isSet(object.preReduction) ? Number(object.preReduction) : 0,
      postReduction: isSet(object.postReduction) ? Number(object.postReduction) : 0,
      damageType: isSet(object.damageType)
        ? cMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageTypeFromJSON(object.damageType)
        : 0,
    };
  },

  toJSON(message: CMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageReceived): unknown {
    const obj: any = {};
    message.preReduction !== undefined && (obj.preReduction = Math.round(message.preReduction));
    message.postReduction !== undefined && (obj.postReduction = Math.round(message.postReduction));
    message.damageType !== undefined &&
      (obj.damageType = cMsgGameMatchSignOut_CTeam_CPlayer_HeroDamageTypeToJSON(message.damageType));
    return obj;
  },
};

function createBaseCMsgGameMatchSignOut_CAdditionalSignoutMsg(): CMsgGameMatchSignOut_CAdditionalSignoutMsg {
  return { id: 0, contents: Buffer.alloc(0) };
}

export const CMsgGameMatchSignOut_CAdditionalSignoutMsg = {
  encode(message: CMsgGameMatchSignOut_CAdditionalSignoutMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.contents.length !== 0) {
      writer.uint32(18).bytes(message.contents);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameMatchSignOut_CAdditionalSignoutMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameMatchSignOut_CAdditionalSignoutMsg();
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

  fromJSON(object: any): CMsgGameMatchSignOut_CAdditionalSignoutMsg {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      contents: isSet(object.contents) ? Buffer.from(bytesFromBase64(object.contents)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgGameMatchSignOut_CAdditionalSignoutMsg): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.contents !== undefined &&
      (obj.contents = base64FromBytes(message.contents !== undefined ? message.contents : Buffer.alloc(0)));
    return obj;
  },
};

function createBaseCMsgGameMatchSignOut_CSocialFeedMatchEvent(): CMsgGameMatchSignOut_CSocialFeedMatchEvent {
  return { accountId: 0, timestamp: 0, eventType: 0, gameTime: 0, replayTime: 0 };
}

export const CMsgGameMatchSignOut_CSocialFeedMatchEvent = {
  encode(message: CMsgGameMatchSignOut_CSocialFeedMatchEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.eventType !== 0) {
      writer.uint32(24).uint32(message.eventType);
    }
    if (message.gameTime !== 0) {
      writer.uint32(32).int32(message.gameTime);
    }
    if (message.replayTime !== 0) {
      writer.uint32(40).uint32(message.replayTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameMatchSignOut_CSocialFeedMatchEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameMatchSignOut_CSocialFeedMatchEvent();
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

          message.timestamp = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.eventType = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.gameTime = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.replayTime = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGameMatchSignOut_CSocialFeedMatchEvent {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      eventType: isSet(object.eventType) ? Number(object.eventType) : 0,
      gameTime: isSet(object.gameTime) ? Number(object.gameTime) : 0,
      replayTime: isSet(object.replayTime) ? Number(object.replayTime) : 0,
    };
  },

  toJSON(message: CMsgGameMatchSignOut_CSocialFeedMatchEvent): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.eventType !== undefined && (obj.eventType = Math.round(message.eventType));
    message.gameTime !== undefined && (obj.gameTime = Math.round(message.gameTime));
    message.replayTime !== undefined && (obj.replayTime = Math.round(message.replayTime));
    return obj;
  },
};

function createBaseCMsgGameMatchSignOut_CCustomGameData(): CMsgGameMatchSignOut_CCustomGameData {
  return { publishTimestamp: 0 };
}

export const CMsgGameMatchSignOut_CCustomGameData = {
  encode(message: CMsgGameMatchSignOut_CCustomGameData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishTimestamp !== 0) {
      writer.uint32(8).uint32(message.publishTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameMatchSignOut_CCustomGameData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameMatchSignOut_CCustomGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.publishTimestamp = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGameMatchSignOut_CCustomGameData {
    return { publishTimestamp: isSet(object.publishTimestamp) ? Number(object.publishTimestamp) : 0 };
  },

  toJSON(message: CMsgGameMatchSignOut_CCustomGameData): unknown {
    const obj: any = {};
    message.publishTimestamp !== undefined && (obj.publishTimestamp = Math.round(message.publishTimestamp));
    return obj;
  },
};

function createBaseCMsgGameMatchSignOut_EventGameLeaderboardEntry(): CMsgGameMatchSignOut_EventGameLeaderboardEntry {
  return { nameSuffix: "", score: 0, extraData1: 0, extraData2: 0, extraData3: 0, extraData4: 0, extraData5: 0 };
}

export const CMsgGameMatchSignOut_EventGameLeaderboardEntry = {
  encode(
    message: CMsgGameMatchSignOut_EventGameLeaderboardEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nameSuffix !== "") {
      writer.uint32(10).string(message.nameSuffix);
    }
    if (message.score !== 0) {
      writer.uint32(16).int32(message.score);
    }
    if (message.extraData1 !== 0) {
      writer.uint32(24).uint32(message.extraData1);
    }
    if (message.extraData2 !== 0) {
      writer.uint32(32).uint32(message.extraData2);
    }
    if (message.extraData3 !== 0) {
      writer.uint32(40).uint32(message.extraData3);
    }
    if (message.extraData4 !== 0) {
      writer.uint32(48).uint32(message.extraData4);
    }
    if (message.extraData5 !== 0) {
      writer.uint32(56).uint32(message.extraData5);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameMatchSignOut_EventGameLeaderboardEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameMatchSignOut_EventGameLeaderboardEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.nameSuffix = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.score = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.extraData1 = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.extraData2 = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.extraData3 = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.extraData4 = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.extraData5 = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGameMatchSignOut_EventGameLeaderboardEntry {
    return {
      nameSuffix: isSet(object.nameSuffix) ? String(object.nameSuffix) : "",
      score: isSet(object.score) ? Number(object.score) : 0,
      extraData1: isSet(object.extraData1) ? Number(object.extraData1) : 0,
      extraData2: isSet(object.extraData2) ? Number(object.extraData2) : 0,
      extraData3: isSet(object.extraData3) ? Number(object.extraData3) : 0,
      extraData4: isSet(object.extraData4) ? Number(object.extraData4) : 0,
      extraData5: isSet(object.extraData5) ? Number(object.extraData5) : 0,
    };
  },

  toJSON(message: CMsgGameMatchSignOut_EventGameLeaderboardEntry): unknown {
    const obj: any = {};
    message.nameSuffix !== undefined && (obj.nameSuffix = message.nameSuffix);
    message.score !== undefined && (obj.score = Math.round(message.score));
    message.extraData1 !== undefined && (obj.extraData1 = Math.round(message.extraData1));
    message.extraData2 !== undefined && (obj.extraData2 = Math.round(message.extraData2));
    message.extraData3 !== undefined && (obj.extraData3 = Math.round(message.extraData3));
    message.extraData4 !== undefined && (obj.extraData4 = Math.round(message.extraData4));
    message.extraData5 !== undefined && (obj.extraData5 = Math.round(message.extraData5));
    return obj;
  },
};

function createBaseCMsgGameMatchSignOut_WardPlacement(): CMsgGameMatchSignOut_WardPlacement {
  return {
    playerId: 0,
    teamId: 0,
    placedTime: 0,
    buildingState: 0,
    creepState: 0,
    roshanAlive: false,
    positionX: 0,
    positionY: 0,
  };
}

export const CMsgGameMatchSignOut_WardPlacement = {
  encode(message: CMsgGameMatchSignOut_WardPlacement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).uint32(message.teamId);
    }
    if (message.placedTime !== 0) {
      writer.uint32(24).uint32(message.placedTime);
    }
    if (message.buildingState !== 0) {
      writer.uint32(32).uint32(message.buildingState);
    }
    if (message.creepState !== 0) {
      writer.uint32(40).uint32(message.creepState);
    }
    if (message.roshanAlive === true) {
      writer.uint32(48).bool(message.roshanAlive);
    }
    if (message.positionX !== 0) {
      writer.uint32(56).uint32(message.positionX);
    }
    if (message.positionY !== 0) {
      writer.uint32(64).uint32(message.positionY);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameMatchSignOut_WardPlacement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameMatchSignOut_WardPlacement();
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

          message.teamId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.placedTime = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.buildingState = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.creepState = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.roshanAlive = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.positionX = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.positionY = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGameMatchSignOut_WardPlacement {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      placedTime: isSet(object.placedTime) ? Number(object.placedTime) : 0,
      buildingState: isSet(object.buildingState) ? Number(object.buildingState) : 0,
      creepState: isSet(object.creepState) ? Number(object.creepState) : 0,
      roshanAlive: isSet(object.roshanAlive) ? Boolean(object.roshanAlive) : false,
      positionX: isSet(object.positionX) ? Number(object.positionX) : 0,
      positionY: isSet(object.positionY) ? Number(object.positionY) : 0,
    };
  },

  toJSON(message: CMsgGameMatchSignOut_WardPlacement): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.placedTime !== undefined && (obj.placedTime = Math.round(message.placedTime));
    message.buildingState !== undefined && (obj.buildingState = Math.round(message.buildingState));
    message.creepState !== undefined && (obj.creepState = Math.round(message.creepState));
    message.roshanAlive !== undefined && (obj.roshanAlive = message.roshanAlive);
    message.positionX !== undefined && (obj.positionX = Math.round(message.positionX));
    message.positionY !== undefined && (obj.positionY = Math.round(message.positionY));
    return obj;
  },
};

function createBaseCMsgSignOutDraftInfo(): CMsgSignOutDraftInfo {
  return { radiantCaptainAccountId: 0, direCaptainAccountId: 0, picksBans: [] };
}

export const CMsgSignOutDraftInfo = {
  encode(message: CMsgSignOutDraftInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.radiantCaptainAccountId !== 0) {
      writer.uint32(8).uint32(message.radiantCaptainAccountId);
    }
    if (message.direCaptainAccountId !== 0) {
      writer.uint32(16).uint32(message.direCaptainAccountId);
    }
    for (const v of message.picksBans) {
      CMatchHeroSelectEvent.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutDraftInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutDraftInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.radiantCaptainAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.direCaptainAccountId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.picksBans.push(CMatchHeroSelectEvent.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutDraftInfo {
    return {
      radiantCaptainAccountId: isSet(object.radiantCaptainAccountId) ? Number(object.radiantCaptainAccountId) : 0,
      direCaptainAccountId: isSet(object.direCaptainAccountId) ? Number(object.direCaptainAccountId) : 0,
      picksBans: Array.isArray(object?.picksBans)
        ? object.picksBans.map((e: any) => CMatchHeroSelectEvent.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSignOutDraftInfo): unknown {
    const obj: any = {};
    message.radiantCaptainAccountId !== undefined &&
      (obj.radiantCaptainAccountId = Math.round(message.radiantCaptainAccountId));
    message.direCaptainAccountId !== undefined && (obj.direCaptainAccountId = Math.round(message.direCaptainAccountId));
    if (message.picksBans) {
      obj.picksBans = message.picksBans.map((e) => e ? CMatchHeroSelectEvent.toJSON(e) : undefined);
    } else {
      obj.picksBans = [];
    }
    return obj;
  },
};

function createBaseCMsgSignOutBotInfo(): CMsgSignOutBotInfo {
  return { allowCheats: false, botDifficultyRadiant: 0, createdLobby: false, botDifficultyDire: 0 };
}

export const CMsgSignOutBotInfo = {
  encode(message: CMsgSignOutBotInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allowCheats === true) {
      writer.uint32(8).bool(message.allowCheats);
    }
    if (message.botDifficultyRadiant !== 0) {
      writer.uint32(16).int32(message.botDifficultyRadiant);
    }
    if (message.createdLobby === true) {
      writer.uint32(24).bool(message.createdLobby);
    }
    if (message.botDifficultyDire !== 0) {
      writer.uint32(40).int32(message.botDifficultyDire);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutBotInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutBotInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.allowCheats = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.botDifficultyRadiant = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.createdLobby = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.botDifficultyDire = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutBotInfo {
    return {
      allowCheats: isSet(object.allowCheats) ? Boolean(object.allowCheats) : false,
      botDifficultyRadiant: isSet(object.botDifficultyRadiant)
        ? dOTABotDifficultyFromJSON(object.botDifficultyRadiant)
        : 0,
      createdLobby: isSet(object.createdLobby) ? Boolean(object.createdLobby) : false,
      botDifficultyDire: isSet(object.botDifficultyDire) ? dOTABotDifficultyFromJSON(object.botDifficultyDire) : 0,
    };
  },

  toJSON(message: CMsgSignOutBotInfo): unknown {
    const obj: any = {};
    message.allowCheats !== undefined && (obj.allowCheats = message.allowCheats);
    message.botDifficultyRadiant !== undefined &&
      (obj.botDifficultyRadiant = dOTABotDifficultyToJSON(message.botDifficultyRadiant));
    message.createdLobby !== undefined && (obj.createdLobby = message.createdLobby);
    message.botDifficultyDire !== undefined &&
      (obj.botDifficultyDire = dOTABotDifficultyToJSON(message.botDifficultyDire));
    return obj;
  },
};

function createBaseCMsgSignOutTextMuteInfo(): CMsgSignOutTextMuteInfo {
  return { textMuteMessages: [] };
}

export const CMsgSignOutTextMuteInfo = {
  encode(message: CMsgSignOutTextMuteInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.textMuteMessages) {
      CMsgSignOutTextMuteInfo_TextMuteMessage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutTextMuteInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutTextMuteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.textMuteMessages.push(CMsgSignOutTextMuteInfo_TextMuteMessage.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutTextMuteInfo {
    return {
      textMuteMessages: Array.isArray(object?.textMuteMessages)
        ? object.textMuteMessages.map((e: any) => CMsgSignOutTextMuteInfo_TextMuteMessage.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSignOutTextMuteInfo): unknown {
    const obj: any = {};
    if (message.textMuteMessages) {
      obj.textMuteMessages = message.textMuteMessages.map((e) =>
        e ? CMsgSignOutTextMuteInfo_TextMuteMessage.toJSON(e) : undefined
      );
    } else {
      obj.textMuteMessages = [];
    }
    return obj;
  },
};

function createBaseCMsgSignOutTextMuteInfo_TextMuteMessage(): CMsgSignOutTextMuteInfo_TextMuteMessage {
  return { region: 0, causedTextMute: false, chatMessage: "" };
}

export const CMsgSignOutTextMuteInfo_TextMuteMessage = {
  encode(message: CMsgSignOutTextMuteInfo_TextMuteMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.region !== 0) {
      writer.uint32(8).uint32(message.region);
    }
    if (message.causedTextMute === true) {
      writer.uint32(16).bool(message.causedTextMute);
    }
    if (message.chatMessage !== "") {
      writer.uint32(26).string(message.chatMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutTextMuteInfo_TextMuteMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutTextMuteInfo_TextMuteMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.region = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.causedTextMute = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.chatMessage = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutTextMuteInfo_TextMuteMessage {
    return {
      region: isSet(object.region) ? Number(object.region) : 0,
      causedTextMute: isSet(object.causedTextMute) ? Boolean(object.causedTextMute) : false,
      chatMessage: isSet(object.chatMessage) ? String(object.chatMessage) : "",
    };
  },

  toJSON(message: CMsgSignOutTextMuteInfo_TextMuteMessage): unknown {
    const obj: any = {};
    message.region !== undefined && (obj.region = Math.round(message.region));
    message.causedTextMute !== undefined && (obj.causedTextMute = message.causedTextMute);
    message.chatMessage !== undefined && (obj.chatMessage = message.chatMessage);
    return obj;
  },
};

function createBaseCMsgSignOutPlayerStats(): CMsgSignOutPlayerStats {
  return {
    accountId: 0,
    matchId: "0",
    rank: 0,
    heroId: 0,
    rampages: 0,
    tripleKills: 0,
    firstBloodClaimed: 0,
    firstBloodGiven: 0,
    couriersKilled: 0,
    aegisesSnatched: 0,
    cheesesEaten: 0,
    creepsStacked: 0,
    fightScore: 0,
    farmScore: 0,
    supportScore: 0,
    pushScore: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
    lastHits: 0,
    denies: 0,
    gpm: 0,
    xppm: 0,
    netWorth: 0,
    damage: 0,
    heals: 0,
    rapiersPurchased: 0,
    observerWardsPlaced: 0,
    wardsDestroyed: 0,
    lobbyType: 0,
  };
}

export const CMsgSignOutPlayerStats = {
  encode(message: CMsgSignOutPlayerStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).int32(message.accountId);
    }
    if (message.matchId !== "0") {
      writer.uint32(16).uint64(message.matchId);
    }
    if (message.rank !== 0) {
      writer.uint32(24).uint32(message.rank);
    }
    if (message.heroId !== 0) {
      writer.uint32(32).uint32(message.heroId);
    }
    if (message.rampages !== 0) {
      writer.uint32(40).uint32(message.rampages);
    }
    if (message.tripleKills !== 0) {
      writer.uint32(48).uint32(message.tripleKills);
    }
    if (message.firstBloodClaimed !== 0) {
      writer.uint32(56).uint32(message.firstBloodClaimed);
    }
    if (message.firstBloodGiven !== 0) {
      writer.uint32(64).uint32(message.firstBloodGiven);
    }
    if (message.couriersKilled !== 0) {
      writer.uint32(72).uint32(message.couriersKilled);
    }
    if (message.aegisesSnatched !== 0) {
      writer.uint32(80).uint32(message.aegisesSnatched);
    }
    if (message.cheesesEaten !== 0) {
      writer.uint32(88).uint32(message.cheesesEaten);
    }
    if (message.creepsStacked !== 0) {
      writer.uint32(96).uint32(message.creepsStacked);
    }
    if (message.fightScore !== 0) {
      writer.uint32(109).float(message.fightScore);
    }
    if (message.farmScore !== 0) {
      writer.uint32(117).float(message.farmScore);
    }
    if (message.supportScore !== 0) {
      writer.uint32(125).float(message.supportScore);
    }
    if (message.pushScore !== 0) {
      writer.uint32(133).float(message.pushScore);
    }
    if (message.kills !== 0) {
      writer.uint32(136).uint32(message.kills);
    }
    if (message.deaths !== 0) {
      writer.uint32(144).uint32(message.deaths);
    }
    if (message.assists !== 0) {
      writer.uint32(152).uint32(message.assists);
    }
    if (message.lastHits !== 0) {
      writer.uint32(160).uint32(message.lastHits);
    }
    if (message.denies !== 0) {
      writer.uint32(168).uint32(message.denies);
    }
    if (message.gpm !== 0) {
      writer.uint32(181).float(message.gpm);
    }
    if (message.xppm !== 0) {
      writer.uint32(189).float(message.xppm);
    }
    if (message.netWorth !== 0) {
      writer.uint32(197).float(message.netWorth);
    }
    if (message.damage !== 0) {
      writer.uint32(205).float(message.damage);
    }
    if (message.heals !== 0) {
      writer.uint32(213).float(message.heals);
    }
    if (message.rapiersPurchased !== 0) {
      writer.uint32(216).uint32(message.rapiersPurchased);
    }
    if (message.observerWardsPlaced !== 0) {
      writer.uint32(224).uint32(message.observerWardsPlaced);
    }
    if (message.wardsDestroyed !== 0) {
      writer.uint32(232).uint32(message.wardsDestroyed);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(240).uint32(message.lobbyType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutPlayerStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutPlayerStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.rank = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.rampages = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.tripleKills = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.firstBloodClaimed = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.firstBloodGiven = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.couriersKilled = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.aegisesSnatched = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.cheesesEaten = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.creepsStacked = reader.uint32();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.fightScore = reader.float();
          continue;
        case 14:
          if (tag != 117) {
            break;
          }

          message.farmScore = reader.float();
          continue;
        case 15:
          if (tag != 125) {
            break;
          }

          message.supportScore = reader.float();
          continue;
        case 16:
          if (tag != 133) {
            break;
          }

          message.pushScore = reader.float();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.kills = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.deaths = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.assists = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.lastHits = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.denies = reader.uint32();
          continue;
        case 22:
          if (tag != 181) {
            break;
          }

          message.gpm = reader.float();
          continue;
        case 23:
          if (tag != 189) {
            break;
          }

          message.xppm = reader.float();
          continue;
        case 24:
          if (tag != 197) {
            break;
          }

          message.netWorth = reader.float();
          continue;
        case 25:
          if (tag != 205) {
            break;
          }

          message.damage = reader.float();
          continue;
        case 26:
          if (tag != 213) {
            break;
          }

          message.heals = reader.float();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.rapiersPurchased = reader.uint32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.observerWardsPlaced = reader.uint32();
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.wardsDestroyed = reader.uint32();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.lobbyType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutPlayerStats {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      rampages: isSet(object.rampages) ? Number(object.rampages) : 0,
      tripleKills: isSet(object.tripleKills) ? Number(object.tripleKills) : 0,
      firstBloodClaimed: isSet(object.firstBloodClaimed) ? Number(object.firstBloodClaimed) : 0,
      firstBloodGiven: isSet(object.firstBloodGiven) ? Number(object.firstBloodGiven) : 0,
      couriersKilled: isSet(object.couriersKilled) ? Number(object.couriersKilled) : 0,
      aegisesSnatched: isSet(object.aegisesSnatched) ? Number(object.aegisesSnatched) : 0,
      cheesesEaten: isSet(object.cheesesEaten) ? Number(object.cheesesEaten) : 0,
      creepsStacked: isSet(object.creepsStacked) ? Number(object.creepsStacked) : 0,
      fightScore: isSet(object.fightScore) ? Number(object.fightScore) : 0,
      farmScore: isSet(object.farmScore) ? Number(object.farmScore) : 0,
      supportScore: isSet(object.supportScore) ? Number(object.supportScore) : 0,
      pushScore: isSet(object.pushScore) ? Number(object.pushScore) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      assists: isSet(object.assists) ? Number(object.assists) : 0,
      lastHits: isSet(object.lastHits) ? Number(object.lastHits) : 0,
      denies: isSet(object.denies) ? Number(object.denies) : 0,
      gpm: isSet(object.gpm) ? Number(object.gpm) : 0,
      xppm: isSet(object.xppm) ? Number(object.xppm) : 0,
      netWorth: isSet(object.netWorth) ? Number(object.netWorth) : 0,
      damage: isSet(object.damage) ? Number(object.damage) : 0,
      heals: isSet(object.heals) ? Number(object.heals) : 0,
      rapiersPurchased: isSet(object.rapiersPurchased) ? Number(object.rapiersPurchased) : 0,
      observerWardsPlaced: isSet(object.observerWardsPlaced) ? Number(object.observerWardsPlaced) : 0,
      wardsDestroyed: isSet(object.wardsDestroyed) ? Number(object.wardsDestroyed) : 0,
      lobbyType: isSet(object.lobbyType) ? Number(object.lobbyType) : 0,
    };
  },

  toJSON(message: CMsgSignOutPlayerStats): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.rampages !== undefined && (obj.rampages = Math.round(message.rampages));
    message.tripleKills !== undefined && (obj.tripleKills = Math.round(message.tripleKills));
    message.firstBloodClaimed !== undefined && (obj.firstBloodClaimed = Math.round(message.firstBloodClaimed));
    message.firstBloodGiven !== undefined && (obj.firstBloodGiven = Math.round(message.firstBloodGiven));
    message.couriersKilled !== undefined && (obj.couriersKilled = Math.round(message.couriersKilled));
    message.aegisesSnatched !== undefined && (obj.aegisesSnatched = Math.round(message.aegisesSnatched));
    message.cheesesEaten !== undefined && (obj.cheesesEaten = Math.round(message.cheesesEaten));
    message.creepsStacked !== undefined && (obj.creepsStacked = Math.round(message.creepsStacked));
    message.fightScore !== undefined && (obj.fightScore = message.fightScore);
    message.farmScore !== undefined && (obj.farmScore = message.farmScore);
    message.supportScore !== undefined && (obj.supportScore = message.supportScore);
    message.pushScore !== undefined && (obj.pushScore = message.pushScore);
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.assists !== undefined && (obj.assists = Math.round(message.assists));
    message.lastHits !== undefined && (obj.lastHits = Math.round(message.lastHits));
    message.denies !== undefined && (obj.denies = Math.round(message.denies));
    message.gpm !== undefined && (obj.gpm = message.gpm);
    message.xppm !== undefined && (obj.xppm = message.xppm);
    message.netWorth !== undefined && (obj.netWorth = message.netWorth);
    message.damage !== undefined && (obj.damage = message.damage);
    message.heals !== undefined && (obj.heals = message.heals);
    message.rapiersPurchased !== undefined && (obj.rapiersPurchased = Math.round(message.rapiersPurchased));
    message.observerWardsPlaced !== undefined && (obj.observerWardsPlaced = Math.round(message.observerWardsPlaced));
    message.wardsDestroyed !== undefined && (obj.wardsDestroyed = Math.round(message.wardsDestroyed));
    message.lobbyType !== undefined && (obj.lobbyType = Math.round(message.lobbyType));
    return obj;
  },
};

function createBaseCMsgSignOutCommunicationSummary(): CMsgSignOutCommunicationSummary {
  return { players: [] };
}

export const CMsgSignOutCommunicationSummary = {
  encode(message: CMsgSignOutCommunicationSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.players) {
      CMsgSignOutCommunicationSummary_PlayerCommunication.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutCommunicationSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutCommunicationSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.players.push(CMsgSignOutCommunicationSummary_PlayerCommunication.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutCommunicationSummary {
    return {
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgSignOutCommunicationSummary_PlayerCommunication.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSignOutCommunicationSummary): unknown {
    const obj: any = {};
    if (message.players) {
      obj.players = message.players.map((e) =>
        e ? CMsgSignOutCommunicationSummary_PlayerCommunication.toJSON(e) : undefined
      );
    } else {
      obj.players = [];
    }
    return obj;
  },
};

function createBaseCMsgSignOutCommunicationSummary_PlayerCommunication(): CMsgSignOutCommunicationSummary_PlayerCommunication {
  return {
    accountId: 0,
    pings: 0,
    maxPingsPerInterval: 0,
    teammatePings: 0,
    maxTeammatePingsPerInterval: 0,
    teamChatMessages: 0,
    allChatMessages: 0,
    chatWheelMessages: 0,
    pauses: 0,
    unpauses: 0,
    linesDrawn: 0,
    voiceChatSeconds: 0,
    chatMutes: 0,
    voiceMutes: 0,
    pingDetails: [],
    commsBlocksSolo: 0,
    commsBlocksMass: 0,
  };
}

export const CMsgSignOutCommunicationSummary_PlayerCommunication = {
  encode(
    message: CMsgSignOutCommunicationSummary_PlayerCommunication,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.pings !== 0) {
      writer.uint32(16).uint32(message.pings);
    }
    if (message.maxPingsPerInterval !== 0) {
      writer.uint32(24).uint32(message.maxPingsPerInterval);
    }
    if (message.teammatePings !== 0) {
      writer.uint32(32).uint32(message.teammatePings);
    }
    if (message.maxTeammatePingsPerInterval !== 0) {
      writer.uint32(40).uint32(message.maxTeammatePingsPerInterval);
    }
    if (message.teamChatMessages !== 0) {
      writer.uint32(48).uint32(message.teamChatMessages);
    }
    if (message.allChatMessages !== 0) {
      writer.uint32(56).uint32(message.allChatMessages);
    }
    if (message.chatWheelMessages !== 0) {
      writer.uint32(64).uint32(message.chatWheelMessages);
    }
    if (message.pauses !== 0) {
      writer.uint32(72).uint32(message.pauses);
    }
    if (message.unpauses !== 0) {
      writer.uint32(80).uint32(message.unpauses);
    }
    if (message.linesDrawn !== 0) {
      writer.uint32(88).uint32(message.linesDrawn);
    }
    if (message.voiceChatSeconds !== 0) {
      writer.uint32(96).uint32(message.voiceChatSeconds);
    }
    if (message.chatMutes !== 0) {
      writer.uint32(104).uint32(message.chatMutes);
    }
    if (message.voiceMutes !== 0) {
      writer.uint32(112).uint32(message.voiceMutes);
    }
    for (const v of message.pingDetails) {
      CMsgSignOutCommunicationSummary_PlayerCommunication_PingDetail.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.commsBlocksSolo !== 0) {
      writer.uint32(128).uint32(message.commsBlocksSolo);
    }
    if (message.commsBlocksMass !== 0) {
      writer.uint32(136).uint32(message.commsBlocksMass);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutCommunicationSummary_PlayerCommunication {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutCommunicationSummary_PlayerCommunication();
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

          message.pings = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.maxPingsPerInterval = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.teammatePings = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.maxTeammatePingsPerInterval = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.teamChatMessages = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.allChatMessages = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.chatWheelMessages = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.pauses = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.unpauses = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.linesDrawn = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.voiceChatSeconds = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.chatMutes = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.voiceMutes = reader.uint32();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.pingDetails.push(
            CMsgSignOutCommunicationSummary_PlayerCommunication_PingDetail.decode(reader, reader.uint32()),
          );
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.commsBlocksSolo = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.commsBlocksMass = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutCommunicationSummary_PlayerCommunication {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      pings: isSet(object.pings) ? Number(object.pings) : 0,
      maxPingsPerInterval: isSet(object.maxPingsPerInterval) ? Number(object.maxPingsPerInterval) : 0,
      teammatePings: isSet(object.teammatePings) ? Number(object.teammatePings) : 0,
      maxTeammatePingsPerInterval: isSet(object.maxTeammatePingsPerInterval)
        ? Number(object.maxTeammatePingsPerInterval)
        : 0,
      teamChatMessages: isSet(object.teamChatMessages) ? Number(object.teamChatMessages) : 0,
      allChatMessages: isSet(object.allChatMessages) ? Number(object.allChatMessages) : 0,
      chatWheelMessages: isSet(object.chatWheelMessages) ? Number(object.chatWheelMessages) : 0,
      pauses: isSet(object.pauses) ? Number(object.pauses) : 0,
      unpauses: isSet(object.unpauses) ? Number(object.unpauses) : 0,
      linesDrawn: isSet(object.linesDrawn) ? Number(object.linesDrawn) : 0,
      voiceChatSeconds: isSet(object.voiceChatSeconds) ? Number(object.voiceChatSeconds) : 0,
      chatMutes: isSet(object.chatMutes) ? Number(object.chatMutes) : 0,
      voiceMutes: isSet(object.voiceMutes) ? Number(object.voiceMutes) : 0,
      pingDetails: Array.isArray(object?.pingDetails)
        ? object.pingDetails.map((e: any) => CMsgSignOutCommunicationSummary_PlayerCommunication_PingDetail.fromJSON(e))
        : [],
      commsBlocksSolo: isSet(object.commsBlocksSolo) ? Number(object.commsBlocksSolo) : 0,
      commsBlocksMass: isSet(object.commsBlocksMass) ? Number(object.commsBlocksMass) : 0,
    };
  },

  toJSON(message: CMsgSignOutCommunicationSummary_PlayerCommunication): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.pings !== undefined && (obj.pings = Math.round(message.pings));
    message.maxPingsPerInterval !== undefined && (obj.maxPingsPerInterval = Math.round(message.maxPingsPerInterval));
    message.teammatePings !== undefined && (obj.teammatePings = Math.round(message.teammatePings));
    message.maxTeammatePingsPerInterval !== undefined &&
      (obj.maxTeammatePingsPerInterval = Math.round(message.maxTeammatePingsPerInterval));
    message.teamChatMessages !== undefined && (obj.teamChatMessages = Math.round(message.teamChatMessages));
    message.allChatMessages !== undefined && (obj.allChatMessages = Math.round(message.allChatMessages));
    message.chatWheelMessages !== undefined && (obj.chatWheelMessages = Math.round(message.chatWheelMessages));
    message.pauses !== undefined && (obj.pauses = Math.round(message.pauses));
    message.unpauses !== undefined && (obj.unpauses = Math.round(message.unpauses));
    message.linesDrawn !== undefined && (obj.linesDrawn = Math.round(message.linesDrawn));
    message.voiceChatSeconds !== undefined && (obj.voiceChatSeconds = Math.round(message.voiceChatSeconds));
    message.chatMutes !== undefined && (obj.chatMutes = Math.round(message.chatMutes));
    message.voiceMutes !== undefined && (obj.voiceMutes = Math.round(message.voiceMutes));
    if (message.pingDetails) {
      obj.pingDetails = message.pingDetails.map((e) =>
        e ? CMsgSignOutCommunicationSummary_PlayerCommunication_PingDetail.toJSON(e) : undefined
      );
    } else {
      obj.pingDetails = [];
    }
    message.commsBlocksSolo !== undefined && (obj.commsBlocksSolo = Math.round(message.commsBlocksSolo));
    message.commsBlocksMass !== undefined && (obj.commsBlocksMass = Math.round(message.commsBlocksMass));
    return obj;
  },
};

function createBaseCMsgSignOutCommunicationSummary_PlayerCommunication_PingDetail(): CMsgSignOutCommunicationSummary_PlayerCommunication_PingDetail {
  return { type: 0, count: 0 };
}

export const CMsgSignOutCommunicationSummary_PlayerCommunication_PingDetail = {
  encode(
    message: CMsgSignOutCommunicationSummary_PlayerCommunication_PingDetail,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).uint32(message.type);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgSignOutCommunicationSummary_PlayerCommunication_PingDetail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutCommunicationSummary_PlayerCommunication_PingDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.count = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutCommunicationSummary_PlayerCommunication_PingDetail {
    return {
      type: isSet(object.type) ? Number(object.type) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: CMsgSignOutCommunicationSummary_PlayerCommunication_PingDetail): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },
};

function createBaseCMsgGameMatchSignoutResponse(): CMsgGameMatchSignoutResponse {
  return {
    matchId: "0",
    replaySalt: 0,
    timedRewardDetails: [],
    xpRewardDetails: [],
    leagueid: 0,
    metadataPrivateKey: 0,
    matchDetails: undefined,
    playersMetadata: [],
    mvpData: undefined,
    owPrivateKey: "0",
    owSalt: 0,
    owReplayId: "0",
  };
}

export const CMsgGameMatchSignoutResponse = {
  encode(message: CMsgGameMatchSignoutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.replaySalt !== 0) {
      writer.uint32(21).fixed32(message.replaySalt);
    }
    for (const v of message.timedRewardDetails) {
      CLobbyTimedRewardDetails.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.xpRewardDetails) {
      CSODOTALobbyMember.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.leagueid !== 0) {
      writer.uint32(40).uint32(message.leagueid);
    }
    if (message.metadataPrivateKey !== 0) {
      writer.uint32(61).fixed32(message.metadataPrivateKey);
    }
    if (message.matchDetails !== undefined) {
      CMsgDOTAMatch.encode(message.matchDetails, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.playersMetadata) {
      CMsgGameMatchSignoutResponse_PlayerMetadata.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.mvpData !== undefined) {
      CMvpData.encode(message.mvpData, writer.uint32(82).fork()).ldelim();
    }
    if (message.owPrivateKey !== "0") {
      writer.uint32(89).fixed64(message.owPrivateKey);
    }
    if (message.owSalt !== 0) {
      writer.uint32(101).fixed32(message.owSalt);
    }
    if (message.owReplayId !== "0") {
      writer.uint32(104).uint64(message.owReplayId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameMatchSignoutResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameMatchSignoutResponse();
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
          if (tag != 21) {
            break;
          }

          message.replaySalt = reader.fixed32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.timedRewardDetails.push(CLobbyTimedRewardDetails.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.xpRewardDetails.push(CSODOTALobbyMember.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.leagueid = reader.uint32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.metadataPrivateKey = reader.fixed32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.matchDetails = CMsgDOTAMatch.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.playersMetadata.push(CMsgGameMatchSignoutResponse_PlayerMetadata.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.mvpData = CMvpData.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag != 89) {
            break;
          }

          message.owPrivateKey = longToString(reader.fixed64() as Long);
          continue;
        case 12:
          if (tag != 101) {
            break;
          }

          message.owSalt = reader.fixed32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.owReplayId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGameMatchSignoutResponse {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      replaySalt: isSet(object.replaySalt) ? Number(object.replaySalt) : 0,
      timedRewardDetails: Array.isArray(object?.timedRewardDetails)
        ? object.timedRewardDetails.map((e: any) => CLobbyTimedRewardDetails.fromJSON(e))
        : [],
      xpRewardDetails: Array.isArray(object?.xpRewardDetails)
        ? object.xpRewardDetails.map((e: any) => CSODOTALobbyMember.fromJSON(e))
        : [],
      leagueid: isSet(object.leagueid) ? Number(object.leagueid) : 0,
      metadataPrivateKey: isSet(object.metadataPrivateKey) ? Number(object.metadataPrivateKey) : 0,
      matchDetails: isSet(object.matchDetails) ? CMsgDOTAMatch.fromJSON(object.matchDetails) : undefined,
      playersMetadata: Array.isArray(object?.playersMetadata)
        ? object.playersMetadata.map((e: any) => CMsgGameMatchSignoutResponse_PlayerMetadata.fromJSON(e))
        : [],
      mvpData: isSet(object.mvpData) ? CMvpData.fromJSON(object.mvpData) : undefined,
      owPrivateKey: isSet(object.owPrivateKey) ? String(object.owPrivateKey) : "0",
      owSalt: isSet(object.owSalt) ? Number(object.owSalt) : 0,
      owReplayId: isSet(object.owReplayId) ? String(object.owReplayId) : "0",
    };
  },

  toJSON(message: CMsgGameMatchSignoutResponse): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.replaySalt !== undefined && (obj.replaySalt = Math.round(message.replaySalt));
    if (message.timedRewardDetails) {
      obj.timedRewardDetails = message.timedRewardDetails.map((e) =>
        e ? CLobbyTimedRewardDetails.toJSON(e) : undefined
      );
    } else {
      obj.timedRewardDetails = [];
    }
    if (message.xpRewardDetails) {
      obj.xpRewardDetails = message.xpRewardDetails.map((e) => e ? CSODOTALobbyMember.toJSON(e) : undefined);
    } else {
      obj.xpRewardDetails = [];
    }
    message.leagueid !== undefined && (obj.leagueid = Math.round(message.leagueid));
    message.metadataPrivateKey !== undefined && (obj.metadataPrivateKey = Math.round(message.metadataPrivateKey));
    message.matchDetails !== undefined &&
      (obj.matchDetails = message.matchDetails ? CMsgDOTAMatch.toJSON(message.matchDetails) : undefined);
    if (message.playersMetadata) {
      obj.playersMetadata = message.playersMetadata.map((e) =>
        e ? CMsgGameMatchSignoutResponse_PlayerMetadata.toJSON(e) : undefined
      );
    } else {
      obj.playersMetadata = [];
    }
    message.mvpData !== undefined && (obj.mvpData = message.mvpData ? CMvpData.toJSON(message.mvpData) : undefined);
    message.owPrivateKey !== undefined && (obj.owPrivateKey = message.owPrivateKey);
    message.owSalt !== undefined && (obj.owSalt = Math.round(message.owSalt));
    message.owReplayId !== undefined && (obj.owReplayId = message.owReplayId);
    return obj;
  },
};

function createBaseCMsgGameMatchSignoutResponse_PlayerMetadata(): CMsgGameMatchSignoutResponse_PlayerMetadata {
  return {
    heroId: 0,
    avgKillsX16: 0,
    avgDeathsX16: 0,
    avgAssistsX16: 0,
    avgGpmX16: 0,
    avgXpmX16: 0,
    bestKillsX16: 0,
    bestAssistsX16: 0,
    bestGpmX16: 0,
    bestXpmX16: 0,
    winStreak: 0,
    bestWinStreak: 0,
    gamesPlayed: 0,
  };
}

export const CMsgGameMatchSignoutResponse_PlayerMetadata = {
  encode(message: CMsgGameMatchSignoutResponse_PlayerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.avgKillsX16 !== 0) {
      writer.uint32(16).uint32(message.avgKillsX16);
    }
    if (message.avgDeathsX16 !== 0) {
      writer.uint32(24).uint32(message.avgDeathsX16);
    }
    if (message.avgAssistsX16 !== 0) {
      writer.uint32(32).uint32(message.avgAssistsX16);
    }
    if (message.avgGpmX16 !== 0) {
      writer.uint32(40).uint32(message.avgGpmX16);
    }
    if (message.avgXpmX16 !== 0) {
      writer.uint32(48).uint32(message.avgXpmX16);
    }
    if (message.bestKillsX16 !== 0) {
      writer.uint32(56).uint32(message.bestKillsX16);
    }
    if (message.bestAssistsX16 !== 0) {
      writer.uint32(64).uint32(message.bestAssistsX16);
    }
    if (message.bestGpmX16 !== 0) {
      writer.uint32(72).uint32(message.bestGpmX16);
    }
    if (message.bestXpmX16 !== 0) {
      writer.uint32(80).uint32(message.bestXpmX16);
    }
    if (message.winStreak !== 0) {
      writer.uint32(88).uint32(message.winStreak);
    }
    if (message.bestWinStreak !== 0) {
      writer.uint32(96).uint32(message.bestWinStreak);
    }
    if (message.gamesPlayed !== 0) {
      writer.uint32(104).uint32(message.gamesPlayed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameMatchSignoutResponse_PlayerMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameMatchSignoutResponse_PlayerMetadata();
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

          message.avgKillsX16 = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.avgDeathsX16 = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.avgAssistsX16 = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.avgGpmX16 = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.avgXpmX16 = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.bestKillsX16 = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.bestAssistsX16 = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.bestGpmX16 = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.bestXpmX16 = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.winStreak = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.bestWinStreak = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.gamesPlayed = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGameMatchSignoutResponse_PlayerMetadata {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      avgKillsX16: isSet(object.avgKillsX16) ? Number(object.avgKillsX16) : 0,
      avgDeathsX16: isSet(object.avgDeathsX16) ? Number(object.avgDeathsX16) : 0,
      avgAssistsX16: isSet(object.avgAssistsX16) ? Number(object.avgAssistsX16) : 0,
      avgGpmX16: isSet(object.avgGpmX16) ? Number(object.avgGpmX16) : 0,
      avgXpmX16: isSet(object.avgXpmX16) ? Number(object.avgXpmX16) : 0,
      bestKillsX16: isSet(object.bestKillsX16) ? Number(object.bestKillsX16) : 0,
      bestAssistsX16: isSet(object.bestAssistsX16) ? Number(object.bestAssistsX16) : 0,
      bestGpmX16: isSet(object.bestGpmX16) ? Number(object.bestGpmX16) : 0,
      bestXpmX16: isSet(object.bestXpmX16) ? Number(object.bestXpmX16) : 0,
      winStreak: isSet(object.winStreak) ? Number(object.winStreak) : 0,
      bestWinStreak: isSet(object.bestWinStreak) ? Number(object.bestWinStreak) : 0,
      gamesPlayed: isSet(object.gamesPlayed) ? Number(object.gamesPlayed) : 0,
    };
  },

  toJSON(message: CMsgGameMatchSignoutResponse_PlayerMetadata): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.avgKillsX16 !== undefined && (obj.avgKillsX16 = Math.round(message.avgKillsX16));
    message.avgDeathsX16 !== undefined && (obj.avgDeathsX16 = Math.round(message.avgDeathsX16));
    message.avgAssistsX16 !== undefined && (obj.avgAssistsX16 = Math.round(message.avgAssistsX16));
    message.avgGpmX16 !== undefined && (obj.avgGpmX16 = Math.round(message.avgGpmX16));
    message.avgXpmX16 !== undefined && (obj.avgXpmX16 = Math.round(message.avgXpmX16));
    message.bestKillsX16 !== undefined && (obj.bestKillsX16 = Math.round(message.bestKillsX16));
    message.bestAssistsX16 !== undefined && (obj.bestAssistsX16 = Math.round(message.bestAssistsX16));
    message.bestGpmX16 !== undefined && (obj.bestGpmX16 = Math.round(message.bestGpmX16));
    message.bestXpmX16 !== undefined && (obj.bestXpmX16 = Math.round(message.bestXpmX16));
    message.winStreak !== undefined && (obj.winStreak = Math.round(message.winStreak));
    message.bestWinStreak !== undefined && (obj.bestWinStreak = Math.round(message.bestWinStreak));
    message.gamesPlayed !== undefined && (obj.gamesPlayed = Math.round(message.gamesPlayed));
    return obj;
  },
};

function createBaseCMsgTimedRewardContainer(): CMsgTimedRewardContainer {
  return { timedRewardDetails: [] };
}

export const CMsgTimedRewardContainer = {
  encode(message: CMsgTimedRewardContainer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.timedRewardDetails) {
      CLobbyTimedRewardDetails.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTimedRewardContainer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTimedRewardContainer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.timedRewardDetails.push(CLobbyTimedRewardDetails.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTimedRewardContainer {
    return {
      timedRewardDetails: Array.isArray(object?.timedRewardDetails)
        ? object.timedRewardDetails.map((e: any) => CLobbyTimedRewardDetails.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgTimedRewardContainer): unknown {
    const obj: any = {};
    if (message.timedRewardDetails) {
      obj.timedRewardDetails = message.timedRewardDetails.map((e) =>
        e ? CLobbyTimedRewardDetails.toJSON(e) : undefined
      );
    } else {
      obj.timedRewardDetails = [];
    }
    return obj;
  },
};

function createBaseCMsgGameMatchSignOutPermissionRequest(): CMsgGameMatchSignOutPermissionRequest {
  return { serverVersion: 0, localAttempt: 0, totalAttempt: 0, secondsWaited: 0 };
}

export const CMsgGameMatchSignOutPermissionRequest = {
  encode(message: CMsgGameMatchSignOutPermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverVersion !== 0) {
      writer.uint32(8).uint32(message.serverVersion);
    }
    if (message.localAttempt !== 0) {
      writer.uint32(16).uint32(message.localAttempt);
    }
    if (message.totalAttempt !== 0) {
      writer.uint32(24).uint32(message.totalAttempt);
    }
    if (message.secondsWaited !== 0) {
      writer.uint32(32).uint32(message.secondsWaited);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameMatchSignOutPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameMatchSignOutPermissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.serverVersion = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.localAttempt = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.totalAttempt = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.secondsWaited = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGameMatchSignOutPermissionRequest {
    return {
      serverVersion: isSet(object.serverVersion) ? Number(object.serverVersion) : 0,
      localAttempt: isSet(object.localAttempt) ? Number(object.localAttempt) : 0,
      totalAttempt: isSet(object.totalAttempt) ? Number(object.totalAttempt) : 0,
      secondsWaited: isSet(object.secondsWaited) ? Number(object.secondsWaited) : 0,
    };
  },

  toJSON(message: CMsgGameMatchSignOutPermissionRequest): unknown {
    const obj: any = {};
    message.serverVersion !== undefined && (obj.serverVersion = Math.round(message.serverVersion));
    message.localAttempt !== undefined && (obj.localAttempt = Math.round(message.localAttempt));
    message.totalAttempt !== undefined && (obj.totalAttempt = Math.round(message.totalAttempt));
    message.secondsWaited !== undefined && (obj.secondsWaited = Math.round(message.secondsWaited));
    return obj;
  },
};

function createBaseCMsgGameMatchSignOutPermissionResponse(): CMsgGameMatchSignOutPermissionResponse {
  return { permissionGranted: false, abandonSignout: false, retryDelaySeconds: 0 };
}

export const CMsgGameMatchSignOutPermissionResponse = {
  encode(message: CMsgGameMatchSignOutPermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permissionGranted === true) {
      writer.uint32(8).bool(message.permissionGranted);
    }
    if (message.abandonSignout === true) {
      writer.uint32(16).bool(message.abandonSignout);
    }
    if (message.retryDelaySeconds !== 0) {
      writer.uint32(24).uint32(message.retryDelaySeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameMatchSignOutPermissionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameMatchSignOutPermissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.permissionGranted = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.abandonSignout = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.retryDelaySeconds = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGameMatchSignOutPermissionResponse {
    return {
      permissionGranted: isSet(object.permissionGranted) ? Boolean(object.permissionGranted) : false,
      abandonSignout: isSet(object.abandonSignout) ? Boolean(object.abandonSignout) : false,
      retryDelaySeconds: isSet(object.retryDelaySeconds) ? Number(object.retryDelaySeconds) : 0,
    };
  },

  toJSON(message: CMsgGameMatchSignOutPermissionResponse): unknown {
    const obj: any = {};
    message.permissionGranted !== undefined && (obj.permissionGranted = message.permissionGranted);
    message.abandonSignout !== undefined && (obj.abandonSignout = message.abandonSignout);
    message.retryDelaySeconds !== undefined && (obj.retryDelaySeconds = Math.round(message.retryDelaySeconds));
    return obj;
  },
};

function createBaseCMsgGameMatchSignOutEventGameData(): CMsgGameMatchSignOutEventGameData {
  return { eventId: 0, gameName: "", mapName: "", eventGameData: Buffer.alloc(0), startTime: 0 };
}

export const CMsgGameMatchSignOutEventGameData = {
  encode(message: CMsgGameMatchSignOutEventGameData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.gameName !== "") {
      writer.uint32(18).string(message.gameName);
    }
    if (message.mapName !== "") {
      writer.uint32(26).string(message.mapName);
    }
    if (message.eventGameData.length !== 0) {
      writer.uint32(34).bytes(message.eventGameData);
    }
    if (message.startTime !== 0) {
      writer.uint32(40).uint32(message.startTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameMatchSignOutEventGameData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameMatchSignOutEventGameData();
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
          if (tag != 18) {
            break;
          }

          message.gameName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.mapName = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.eventGameData = reader.bytes() as Buffer;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.startTime = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGameMatchSignOutEventGameData {
    return {
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      gameName: isSet(object.gameName) ? String(object.gameName) : "",
      mapName: isSet(object.mapName) ? String(object.mapName) : "",
      eventGameData: isSet(object.eventGameData) ? Buffer.from(bytesFromBase64(object.eventGameData)) : Buffer.alloc(0),
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
    };
  },

  toJSON(message: CMsgGameMatchSignOutEventGameData): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.gameName !== undefined && (obj.gameName = message.gameName);
    message.mapName !== undefined && (obj.mapName = message.mapName);
    message.eventGameData !== undefined &&
      (obj.eventGameData = base64FromBytes(
        message.eventGameData !== undefined ? message.eventGameData : Buffer.alloc(0),
      ));
    message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
    return obj;
  },
};

function createBaseCMsgGameMatchSignOutPerfData(): CMsgGameMatchSignOutPerfData {
  return {
    averageFrameTime: [],
    maxFrameTime: [],
    serverAverageFrameTime: 0,
    serverMaxFrameTime: 0,
    averageComputeTime: [],
    maxComputeTime: [],
    averageClientTickTime: [],
    maxClientTickTime: [],
    averageClientSimulateTime: [],
    maxClientSimulateTime: [],
    averageOutputTime: [],
    maxOutputTime: [],
    averageWaitForRenderingToCompleteTime: [],
    maxWaitForRenderingToCompleteTime: [],
    averageSwapTime: [],
    maxSwapTime: [],
    averageFrameUpdateTime: [],
    maxFrameUpdateTime: [],
    averageIdleTime: [],
    maxIdleTime: [],
    averageInputProcessingTime: [],
    maxInputProcessingTime: [],
  };
}

export const CMsgGameMatchSignOutPerfData = {
  encode(message: CMsgGameMatchSignOutPerfData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.averageFrameTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.maxFrameTime) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.serverAverageFrameTime !== 0) {
      writer.uint32(29).float(message.serverAverageFrameTime);
    }
    if (message.serverMaxFrameTime !== 0) {
      writer.uint32(37).float(message.serverMaxFrameTime);
    }
    writer.uint32(42).fork();
    for (const v of message.averageComputeTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.maxComputeTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.averageClientTickTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(66).fork();
    for (const v of message.maxClientTickTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(74).fork();
    for (const v of message.averageClientSimulateTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(82).fork();
    for (const v of message.maxClientSimulateTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(90).fork();
    for (const v of message.averageOutputTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(98).fork();
    for (const v of message.maxOutputTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(106).fork();
    for (const v of message.averageWaitForRenderingToCompleteTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(114).fork();
    for (const v of message.maxWaitForRenderingToCompleteTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(122).fork();
    for (const v of message.averageSwapTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(130).fork();
    for (const v of message.maxSwapTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(138).fork();
    for (const v of message.averageFrameUpdateTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(146).fork();
    for (const v of message.maxFrameUpdateTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(154).fork();
    for (const v of message.averageIdleTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(162).fork();
    for (const v of message.maxIdleTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(170).fork();
    for (const v of message.averageInputProcessingTime) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(178).fork();
    for (const v of message.maxInputProcessingTime) {
      writer.float(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameMatchSignOutPerfData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameMatchSignOutPerfData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 13) {
            message.averageFrameTime.push(reader.float());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.averageFrameTime.push(reader.float());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 21) {
            message.maxFrameTime.push(reader.float());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.maxFrameTime.push(reader.float());
            }

            continue;
          }

          break;
        case 3:
          if (tag != 29) {
            break;
          }

          message.serverAverageFrameTime = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.serverMaxFrameTime = reader.float();
          continue;
        case 5:
          if (tag == 45) {
            message.averageComputeTime.push(reader.float());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.averageComputeTime.push(reader.float());
            }

            continue;
          }

          break;
        case 6:
          if (tag == 53) {
            message.maxComputeTime.push(reader.float());
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.maxComputeTime.push(reader.float());
            }

            continue;
          }

          break;
        case 7:
          if (tag == 61) {
            message.averageClientTickTime.push(reader.float());
            continue;
          }

          if (tag == 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.averageClientTickTime.push(reader.float());
            }

            continue;
          }

          break;
        case 8:
          if (tag == 69) {
            message.maxClientTickTime.push(reader.float());
            continue;
          }

          if (tag == 66) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.maxClientTickTime.push(reader.float());
            }

            continue;
          }

          break;
        case 9:
          if (tag == 77) {
            message.averageClientSimulateTime.push(reader.float());
            continue;
          }

          if (tag == 74) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.averageClientSimulateTime.push(reader.float());
            }

            continue;
          }

          break;
        case 10:
          if (tag == 85) {
            message.maxClientSimulateTime.push(reader.float());
            continue;
          }

          if (tag == 82) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.maxClientSimulateTime.push(reader.float());
            }

            continue;
          }

          break;
        case 11:
          if (tag == 93) {
            message.averageOutputTime.push(reader.float());
            continue;
          }

          if (tag == 90) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.averageOutputTime.push(reader.float());
            }

            continue;
          }

          break;
        case 12:
          if (tag == 101) {
            message.maxOutputTime.push(reader.float());
            continue;
          }

          if (tag == 98) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.maxOutputTime.push(reader.float());
            }

            continue;
          }

          break;
        case 13:
          if (tag == 109) {
            message.averageWaitForRenderingToCompleteTime.push(reader.float());
            continue;
          }

          if (tag == 106) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.averageWaitForRenderingToCompleteTime.push(reader.float());
            }

            continue;
          }

          break;
        case 14:
          if (tag == 117) {
            message.maxWaitForRenderingToCompleteTime.push(reader.float());
            continue;
          }

          if (tag == 114) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.maxWaitForRenderingToCompleteTime.push(reader.float());
            }

            continue;
          }

          break;
        case 15:
          if (tag == 125) {
            message.averageSwapTime.push(reader.float());
            continue;
          }

          if (tag == 122) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.averageSwapTime.push(reader.float());
            }

            continue;
          }

          break;
        case 16:
          if (tag == 133) {
            message.maxSwapTime.push(reader.float());
            continue;
          }

          if (tag == 130) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.maxSwapTime.push(reader.float());
            }

            continue;
          }

          break;
        case 17:
          if (tag == 141) {
            message.averageFrameUpdateTime.push(reader.float());
            continue;
          }

          if (tag == 138) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.averageFrameUpdateTime.push(reader.float());
            }

            continue;
          }

          break;
        case 18:
          if (tag == 149) {
            message.maxFrameUpdateTime.push(reader.float());
            continue;
          }

          if (tag == 146) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.maxFrameUpdateTime.push(reader.float());
            }

            continue;
          }

          break;
        case 19:
          if (tag == 157) {
            message.averageIdleTime.push(reader.float());
            continue;
          }

          if (tag == 154) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.averageIdleTime.push(reader.float());
            }

            continue;
          }

          break;
        case 20:
          if (tag == 165) {
            message.maxIdleTime.push(reader.float());
            continue;
          }

          if (tag == 162) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.maxIdleTime.push(reader.float());
            }

            continue;
          }

          break;
        case 21:
          if (tag == 173) {
            message.averageInputProcessingTime.push(reader.float());
            continue;
          }

          if (tag == 170) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.averageInputProcessingTime.push(reader.float());
            }

            continue;
          }

          break;
        case 22:
          if (tag == 181) {
            message.maxInputProcessingTime.push(reader.float());
            continue;
          }

          if (tag == 178) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.maxInputProcessingTime.push(reader.float());
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

  fromJSON(object: any): CMsgGameMatchSignOutPerfData {
    return {
      averageFrameTime: Array.isArray(object?.averageFrameTime)
        ? object.averageFrameTime.map((e: any) => Number(e))
        : [],
      maxFrameTime: Array.isArray(object?.maxFrameTime) ? object.maxFrameTime.map((e: any) => Number(e)) : [],
      serverAverageFrameTime: isSet(object.serverAverageFrameTime) ? Number(object.serverAverageFrameTime) : 0,
      serverMaxFrameTime: isSet(object.serverMaxFrameTime) ? Number(object.serverMaxFrameTime) : 0,
      averageComputeTime: Array.isArray(object?.averageComputeTime)
        ? object.averageComputeTime.map((e: any) => Number(e))
        : [],
      maxComputeTime: Array.isArray(object?.maxComputeTime) ? object.maxComputeTime.map((e: any) => Number(e)) : [],
      averageClientTickTime: Array.isArray(object?.averageClientTickTime)
        ? object.averageClientTickTime.map((e: any) => Number(e))
        : [],
      maxClientTickTime: Array.isArray(object?.maxClientTickTime)
        ? object.maxClientTickTime.map((e: any) => Number(e))
        : [],
      averageClientSimulateTime: Array.isArray(object?.averageClientSimulateTime)
        ? object.averageClientSimulateTime.map((e: any) => Number(e))
        : [],
      maxClientSimulateTime: Array.isArray(object?.maxClientSimulateTime)
        ? object.maxClientSimulateTime.map((e: any) => Number(e))
        : [],
      averageOutputTime: Array.isArray(object?.averageOutputTime)
        ? object.averageOutputTime.map((e: any) => Number(e))
        : [],
      maxOutputTime: Array.isArray(object?.maxOutputTime)
        ? object.maxOutputTime.map((e: any) => Number(e))
        : [],
      averageWaitForRenderingToCompleteTime: Array.isArray(object?.averageWaitForRenderingToCompleteTime)
        ? object.averageWaitForRenderingToCompleteTime.map((e: any) => Number(e))
        : [],
      maxWaitForRenderingToCompleteTime: Array.isArray(object?.maxWaitForRenderingToCompleteTime)
        ? object.maxWaitForRenderingToCompleteTime.map((e: any) => Number(e))
        : [],
      averageSwapTime: Array.isArray(object?.averageSwapTime) ? object.averageSwapTime.map((e: any) => Number(e)) : [],
      maxSwapTime: Array.isArray(object?.maxSwapTime) ? object.maxSwapTime.map((e: any) => Number(e)) : [],
      averageFrameUpdateTime: Array.isArray(object?.averageFrameUpdateTime)
        ? object.averageFrameUpdateTime.map((e: any) => Number(e))
        : [],
      maxFrameUpdateTime: Array.isArray(object?.maxFrameUpdateTime)
        ? object.maxFrameUpdateTime.map((e: any) => Number(e))
        : [],
      averageIdleTime: Array.isArray(object?.averageIdleTime)
        ? object.averageIdleTime.map((e: any) => Number(e))
        : [],
      maxIdleTime: Array.isArray(object?.maxIdleTime) ? object.maxIdleTime.map((e: any) => Number(e)) : [],
      averageInputProcessingTime: Array.isArray(object?.averageInputProcessingTime)
        ? object.averageInputProcessingTime.map((e: any) => Number(e))
        : [],
      maxInputProcessingTime: Array.isArray(object?.maxInputProcessingTime)
        ? object.maxInputProcessingTime.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CMsgGameMatchSignOutPerfData): unknown {
    const obj: any = {};
    if (message.averageFrameTime) {
      obj.averageFrameTime = message.averageFrameTime.map((e) => e);
    } else {
      obj.averageFrameTime = [];
    }
    if (message.maxFrameTime) {
      obj.maxFrameTime = message.maxFrameTime.map((e) => e);
    } else {
      obj.maxFrameTime = [];
    }
    message.serverAverageFrameTime !== undefined && (obj.serverAverageFrameTime = message.serverAverageFrameTime);
    message.serverMaxFrameTime !== undefined && (obj.serverMaxFrameTime = message.serverMaxFrameTime);
    if (message.averageComputeTime) {
      obj.averageComputeTime = message.averageComputeTime.map((e) => e);
    } else {
      obj.averageComputeTime = [];
    }
    if (message.maxComputeTime) {
      obj.maxComputeTime = message.maxComputeTime.map((e) => e);
    } else {
      obj.maxComputeTime = [];
    }
    if (message.averageClientTickTime) {
      obj.averageClientTickTime = message.averageClientTickTime.map((e) => e);
    } else {
      obj.averageClientTickTime = [];
    }
    if (message.maxClientTickTime) {
      obj.maxClientTickTime = message.maxClientTickTime.map((e) => e);
    } else {
      obj.maxClientTickTime = [];
    }
    if (message.averageClientSimulateTime) {
      obj.averageClientSimulateTime = message.averageClientSimulateTime.map((e) => e);
    } else {
      obj.averageClientSimulateTime = [];
    }
    if (message.maxClientSimulateTime) {
      obj.maxClientSimulateTime = message.maxClientSimulateTime.map((e) => e);
    } else {
      obj.maxClientSimulateTime = [];
    }
    if (message.averageOutputTime) {
      obj.averageOutputTime = message.averageOutputTime.map((e) => e);
    } else {
      obj.averageOutputTime = [];
    }
    if (message.maxOutputTime) {
      obj.maxOutputTime = message.maxOutputTime.map((e) => e);
    } else {
      obj.maxOutputTime = [];
    }
    if (message.averageWaitForRenderingToCompleteTime) {
      obj.averageWaitForRenderingToCompleteTime = message.averageWaitForRenderingToCompleteTime.map((e) => e);
    } else {
      obj.averageWaitForRenderingToCompleteTime = [];
    }
    if (message.maxWaitForRenderingToCompleteTime) {
      obj.maxWaitForRenderingToCompleteTime = message.maxWaitForRenderingToCompleteTime.map((e) => e);
    } else {
      obj.maxWaitForRenderingToCompleteTime = [];
    }
    if (message.averageSwapTime) {
      obj.averageSwapTime = message.averageSwapTime.map((e) => e);
    } else {
      obj.averageSwapTime = [];
    }
    if (message.maxSwapTime) {
      obj.maxSwapTime = message.maxSwapTime.map((e) => e);
    } else {
      obj.maxSwapTime = [];
    }
    if (message.averageFrameUpdateTime) {
      obj.averageFrameUpdateTime = message.averageFrameUpdateTime.map((e) => e);
    } else {
      obj.averageFrameUpdateTime = [];
    }
    if (message.maxFrameUpdateTime) {
      obj.maxFrameUpdateTime = message.maxFrameUpdateTime.map((e) => e);
    } else {
      obj.maxFrameUpdateTime = [];
    }
    if (message.averageIdleTime) {
      obj.averageIdleTime = message.averageIdleTime.map((e) => e);
    } else {
      obj.averageIdleTime = [];
    }
    if (message.maxIdleTime) {
      obj.maxIdleTime = message.maxIdleTime.map((e) => e);
    } else {
      obj.maxIdleTime = [];
    }
    if (message.averageInputProcessingTime) {
      obj.averageInputProcessingTime = message.averageInputProcessingTime.map((e) => e);
    } else {
      obj.averageInputProcessingTime = [];
    }
    if (message.maxInputProcessingTime) {
      obj.maxInputProcessingTime = message.maxInputProcessingTime.map((e) => e);
    } else {
      obj.maxInputProcessingTime = [];
    }
    return obj;
  },
};

function createBaseCMsgGameMatchSignOutBanData(): CMsgGameMatchSignOutBanData {
  return { heroBans: [], heroBanVotes: [] };
}

export const CMsgGameMatchSignOutBanData = {
  encode(message: CMsgGameMatchSignOutBanData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.heroBans) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.heroBanVotes) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameMatchSignOutBanData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameMatchSignOutBanData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.heroBans.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.heroBans.push(reader.uint32());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 16) {
            message.heroBanVotes.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.heroBanVotes.push(reader.uint32());
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

  fromJSON(object: any): CMsgGameMatchSignOutBanData {
    return {
      heroBans: Array.isArray(object?.heroBans) ? object.heroBans.map((e: any) => Number(e)) : [],
      heroBanVotes: Array.isArray(object?.heroBanVotes) ? object.heroBanVotes.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgGameMatchSignOutBanData): unknown {
    const obj: any = {};
    if (message.heroBans) {
      obj.heroBans = message.heroBans.map((e) => Math.round(e));
    } else {
      obj.heroBans = [];
    }
    if (message.heroBanVotes) {
      obj.heroBanVotes = message.heroBanVotes.map((e) => Math.round(e));
    } else {
      obj.heroBanVotes = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTALiveScoreboardUpdate(): CMsgDOTALiveScoreboardUpdate {
  return {
    tournamentId: 0,
    tournamentGameId: 0,
    duration: 0,
    hltvDelay: 0,
    teamGood: undefined,
    teamBad: undefined,
    roshanRespawnTimer: 0,
    leagueId: 0,
    matchId: "0",
  };
}

export const CMsgDOTALiveScoreboardUpdate = {
  encode(message: CMsgDOTALiveScoreboardUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tournamentId !== 0) {
      writer.uint32(8).uint32(message.tournamentId);
    }
    if (message.tournamentGameId !== 0) {
      writer.uint32(16).uint32(message.tournamentGameId);
    }
    if (message.duration !== 0) {
      writer.uint32(29).float(message.duration);
    }
    if (message.hltvDelay !== 0) {
      writer.uint32(32).int32(message.hltvDelay);
    }
    if (message.teamGood !== undefined) {
      CMsgDOTALiveScoreboardUpdate_Team.encode(message.teamGood, writer.uint32(42).fork()).ldelim();
    }
    if (message.teamBad !== undefined) {
      CMsgDOTALiveScoreboardUpdate_Team.encode(message.teamBad, writer.uint32(50).fork()).ldelim();
    }
    if (message.roshanRespawnTimer !== 0) {
      writer.uint32(56).uint32(message.roshanRespawnTimer);
    }
    if (message.leagueId !== 0) {
      writer.uint32(64).uint32(message.leagueId);
    }
    if (message.matchId !== "0") {
      writer.uint32(72).uint64(message.matchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALiveScoreboardUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALiveScoreboardUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tournamentId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.tournamentGameId = reader.uint32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.duration = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.hltvDelay = reader.int32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.teamGood = CMsgDOTALiveScoreboardUpdate_Team.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.teamBad = CMsgDOTALiveScoreboardUpdate_Team.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.roshanRespawnTimer = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
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

  fromJSON(object: any): CMsgDOTALiveScoreboardUpdate {
    return {
      tournamentId: isSet(object.tournamentId) ? Number(object.tournamentId) : 0,
      tournamentGameId: isSet(object.tournamentGameId) ? Number(object.tournamentGameId) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      hltvDelay: isSet(object.hltvDelay) ? Number(object.hltvDelay) : 0,
      teamGood: isSet(object.teamGood) ? CMsgDOTALiveScoreboardUpdate_Team.fromJSON(object.teamGood) : undefined,
      teamBad: isSet(object.teamBad) ? CMsgDOTALiveScoreboardUpdate_Team.fromJSON(object.teamBad) : undefined,
      roshanRespawnTimer: isSet(object.roshanRespawnTimer) ? Number(object.roshanRespawnTimer) : 0,
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
    };
  },

  toJSON(message: CMsgDOTALiveScoreboardUpdate): unknown {
    const obj: any = {};
    message.tournamentId !== undefined && (obj.tournamentId = Math.round(message.tournamentId));
    message.tournamentGameId !== undefined && (obj.tournamentGameId = Math.round(message.tournamentGameId));
    message.duration !== undefined && (obj.duration = message.duration);
    message.hltvDelay !== undefined && (obj.hltvDelay = Math.round(message.hltvDelay));
    message.teamGood !== undefined &&
      (obj.teamGood = message.teamGood ? CMsgDOTALiveScoreboardUpdate_Team.toJSON(message.teamGood) : undefined);
    message.teamBad !== undefined &&
      (obj.teamBad = message.teamBad ? CMsgDOTALiveScoreboardUpdate_Team.toJSON(message.teamBad) : undefined);
    message.roshanRespawnTimer !== undefined && (obj.roshanRespawnTimer = Math.round(message.roshanRespawnTimer));
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.matchId !== undefined && (obj.matchId = message.matchId);
    return obj;
  },
};

function createBaseCMsgDOTALiveScoreboardUpdate_Team(): CMsgDOTALiveScoreboardUpdate_Team {
  return { players: [], score: 0, towerState: 0, barracksState: 0, heroPicks: [], heroBans: [] };
}

export const CMsgDOTALiveScoreboardUpdate_Team = {
  encode(message: CMsgDOTALiveScoreboardUpdate_Team, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.players) {
      CMsgDOTALiveScoreboardUpdate_Team_Player.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.score !== 0) {
      writer.uint32(16).uint32(message.score);
    }
    if (message.towerState !== 0) {
      writer.uint32(24).uint32(message.towerState);
    }
    if (message.barracksState !== 0) {
      writer.uint32(32).uint32(message.barracksState);
    }
    writer.uint32(42).fork();
    for (const v of message.heroPicks) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.heroBans) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALiveScoreboardUpdate_Team {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALiveScoreboardUpdate_Team();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.players.push(CMsgDOTALiveScoreboardUpdate_Team_Player.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.score = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.towerState = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.barracksState = reader.uint32();
          continue;
        case 5:
          if (tag == 40) {
            message.heroPicks.push(reader.uint32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.heroPicks.push(reader.uint32());
            }

            continue;
          }

          break;
        case 6:
          if (tag == 48) {
            message.heroBans.push(reader.uint32());
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.heroBans.push(reader.uint32());
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

  fromJSON(object: any): CMsgDOTALiveScoreboardUpdate_Team {
    return {
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgDOTALiveScoreboardUpdate_Team_Player.fromJSON(e))
        : [],
      score: isSet(object.score) ? Number(object.score) : 0,
      towerState: isSet(object.towerState) ? Number(object.towerState) : 0,
      barracksState: isSet(object.barracksState) ? Number(object.barracksState) : 0,
      heroPicks: Array.isArray(object?.heroPicks) ? object.heroPicks.map((e: any) => Number(e)) : [],
      heroBans: Array.isArray(object?.heroBans) ? object.heroBans.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgDOTALiveScoreboardUpdate_Team): unknown {
    const obj: any = {};
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgDOTALiveScoreboardUpdate_Team_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    message.score !== undefined && (obj.score = Math.round(message.score));
    message.towerState !== undefined && (obj.towerState = Math.round(message.towerState));
    message.barracksState !== undefined && (obj.barracksState = Math.round(message.barracksState));
    if (message.heroPicks) {
      obj.heroPicks = message.heroPicks.map((e) => Math.round(e));
    } else {
      obj.heroPicks = [];
    }
    if (message.heroBans) {
      obj.heroBans = message.heroBans.map((e) => Math.round(e));
    } else {
      obj.heroBans = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTALiveScoreboardUpdate_Team_Player(): CMsgDOTALiveScoreboardUpdate_Team_Player {
  return {
    playerSlot: 0,
    playerName: "",
    heroName: "",
    heroId: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
    lastHits: 0,
    denies: 0,
    gold: 0,
    level: 0,
    goldPerMin: 0,
    xpPerMin: 0,
    ultimateState: 0,
    ultimateCooldown: 0,
    item0: 0,
    item1: 0,
    item2: 0,
    item3: 0,
    item4: 0,
    item5: 0,
    respawnTimer: 0,
    accountId: 0,
    positionX: 0,
    positionY: 0,
    netWorth: 0,
    abilities: [],
  };
}

export const CMsgDOTALiveScoreboardUpdate_Team_Player = {
  encode(message: CMsgDOTALiveScoreboardUpdate_Team_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerSlot !== 0) {
      writer.uint32(8).uint32(message.playerSlot);
    }
    if (message.playerName !== "") {
      writer.uint32(18).string(message.playerName);
    }
    if (message.heroName !== "") {
      writer.uint32(26).string(message.heroName);
    }
    if (message.heroId !== 0) {
      writer.uint32(32).uint32(message.heroId);
    }
    if (message.kills !== 0) {
      writer.uint32(40).uint32(message.kills);
    }
    if (message.deaths !== 0) {
      writer.uint32(48).uint32(message.deaths);
    }
    if (message.assists !== 0) {
      writer.uint32(56).uint32(message.assists);
    }
    if (message.lastHits !== 0) {
      writer.uint32(64).uint32(message.lastHits);
    }
    if (message.denies !== 0) {
      writer.uint32(72).uint32(message.denies);
    }
    if (message.gold !== 0) {
      writer.uint32(80).uint32(message.gold);
    }
    if (message.level !== 0) {
      writer.uint32(88).uint32(message.level);
    }
    if (message.goldPerMin !== 0) {
      writer.uint32(101).float(message.goldPerMin);
    }
    if (message.xpPerMin !== 0) {
      writer.uint32(109).float(message.xpPerMin);
    }
    if (message.ultimateState !== 0) {
      writer.uint32(112).int32(message.ultimateState);
    }
    if (message.ultimateCooldown !== 0) {
      writer.uint32(125).float(message.ultimateCooldown);
    }
    if (message.item0 !== 0) {
      writer.uint32(128).int32(message.item0);
    }
    if (message.item1 !== 0) {
      writer.uint32(136).int32(message.item1);
    }
    if (message.item2 !== 0) {
      writer.uint32(144).int32(message.item2);
    }
    if (message.item3 !== 0) {
      writer.uint32(152).int32(message.item3);
    }
    if (message.item4 !== 0) {
      writer.uint32(160).int32(message.item4);
    }
    if (message.item5 !== 0) {
      writer.uint32(168).int32(message.item5);
    }
    if (message.respawnTimer !== 0) {
      writer.uint32(176).uint32(message.respawnTimer);
    }
    if (message.accountId !== 0) {
      writer.uint32(184).uint32(message.accountId);
    }
    if (message.positionX !== 0) {
      writer.uint32(197).float(message.positionX);
    }
    if (message.positionY !== 0) {
      writer.uint32(205).float(message.positionY);
    }
    if (message.netWorth !== 0) {
      writer.uint32(208).uint32(message.netWorth);
    }
    for (const v of message.abilities) {
      CMsgDOTALiveScoreboardUpdate_Team_Player_HeroAbility.encode(v!, writer.uint32(218).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALiveScoreboardUpdate_Team_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALiveScoreboardUpdate_Team_Player();
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

          message.playerName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.heroName = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.kills = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.deaths = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.assists = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.lastHits = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.denies = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.gold = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 12:
          if (tag != 101) {
            break;
          }

          message.goldPerMin = reader.float();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.xpPerMin = reader.float();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.ultimateState = reader.int32() as any;
          continue;
        case 15:
          if (tag != 125) {
            break;
          }

          message.ultimateCooldown = reader.float();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.item0 = reader.int32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.item1 = reader.int32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.item2 = reader.int32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.item3 = reader.int32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.item4 = reader.int32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.item5 = reader.int32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.respawnTimer = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 24:
          if (tag != 197) {
            break;
          }

          message.positionX = reader.float();
          continue;
        case 25:
          if (tag != 205) {
            break;
          }

          message.positionY = reader.float();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.netWorth = reader.uint32();
          continue;
        case 27:
          if (tag != 218) {
            break;
          }

          message.abilities.push(CMsgDOTALiveScoreboardUpdate_Team_Player_HeroAbility.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTALiveScoreboardUpdate_Team_Player {
    return {
      playerSlot: isSet(object.playerSlot) ? Number(object.playerSlot) : 0,
      playerName: isSet(object.playerName) ? String(object.playerName) : "",
      heroName: isSet(object.heroName) ? String(object.heroName) : "",
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      assists: isSet(object.assists) ? Number(object.assists) : 0,
      lastHits: isSet(object.lastHits) ? Number(object.lastHits) : 0,
      denies: isSet(object.denies) ? Number(object.denies) : 0,
      gold: isSet(object.gold) ? Number(object.gold) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      goldPerMin: isSet(object.goldPerMin) ? Number(object.goldPerMin) : 0,
      xpPerMin: isSet(object.xpPerMin) ? Number(object.xpPerMin) : 0,
      ultimateState: isSet(object.ultimateState)
        ? cMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateStateFromJSON(object.ultimateState)
        : 0,
      ultimateCooldown: isSet(object.ultimateCooldown) ? Number(object.ultimateCooldown) : 0,
      item0: isSet(object.item0) ? Number(object.item0) : 0,
      item1: isSet(object.item1) ? Number(object.item1) : 0,
      item2: isSet(object.item2) ? Number(object.item2) : 0,
      item3: isSet(object.item3) ? Number(object.item3) : 0,
      item4: isSet(object.item4) ? Number(object.item4) : 0,
      item5: isSet(object.item5) ? Number(object.item5) : 0,
      respawnTimer: isSet(object.respawnTimer) ? Number(object.respawnTimer) : 0,
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      positionX: isSet(object.positionX) ? Number(object.positionX) : 0,
      positionY: isSet(object.positionY) ? Number(object.positionY) : 0,
      netWorth: isSet(object.netWorth) ? Number(object.netWorth) : 0,
      abilities: Array.isArray(object?.abilities)
        ? object.abilities.map((e: any) => CMsgDOTALiveScoreboardUpdate_Team_Player_HeroAbility.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTALiveScoreboardUpdate_Team_Player): unknown {
    const obj: any = {};
    message.playerSlot !== undefined && (obj.playerSlot = Math.round(message.playerSlot));
    message.playerName !== undefined && (obj.playerName = message.playerName);
    message.heroName !== undefined && (obj.heroName = message.heroName);
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.assists !== undefined && (obj.assists = Math.round(message.assists));
    message.lastHits !== undefined && (obj.lastHits = Math.round(message.lastHits));
    message.denies !== undefined && (obj.denies = Math.round(message.denies));
    message.gold !== undefined && (obj.gold = Math.round(message.gold));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.goldPerMin !== undefined && (obj.goldPerMin = message.goldPerMin);
    message.xpPerMin !== undefined && (obj.xpPerMin = message.xpPerMin);
    message.ultimateState !== undefined &&
      (obj.ultimateState = cMsgDOTALiveScoreboardUpdate_Team_Player_DOTAUltimateStateToJSON(message.ultimateState));
    message.ultimateCooldown !== undefined && (obj.ultimateCooldown = message.ultimateCooldown);
    message.item0 !== undefined && (obj.item0 = Math.round(message.item0));
    message.item1 !== undefined && (obj.item1 = Math.round(message.item1));
    message.item2 !== undefined && (obj.item2 = Math.round(message.item2));
    message.item3 !== undefined && (obj.item3 = Math.round(message.item3));
    message.item4 !== undefined && (obj.item4 = Math.round(message.item4));
    message.item5 !== undefined && (obj.item5 = Math.round(message.item5));
    message.respawnTimer !== undefined && (obj.respawnTimer = Math.round(message.respawnTimer));
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.positionX !== undefined && (obj.positionX = message.positionX);
    message.positionY !== undefined && (obj.positionY = message.positionY);
    message.netWorth !== undefined && (obj.netWorth = Math.round(message.netWorth));
    if (message.abilities) {
      obj.abilities = message.abilities.map((e) =>
        e ? CMsgDOTALiveScoreboardUpdate_Team_Player_HeroAbility.toJSON(e) : undefined
      );
    } else {
      obj.abilities = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTALiveScoreboardUpdate_Team_Player_HeroAbility(): CMsgDOTALiveScoreboardUpdate_Team_Player_HeroAbility {
  return { abilityId: 0, abilityLevel: 0 };
}

export const CMsgDOTALiveScoreboardUpdate_Team_Player_HeroAbility = {
  encode(
    message: CMsgDOTALiveScoreboardUpdate_Team_Player_HeroAbility,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.abilityId !== 0) {
      writer.uint32(8).int32(message.abilityId);
    }
    if (message.abilityLevel !== 0) {
      writer.uint32(16).uint32(message.abilityLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALiveScoreboardUpdate_Team_Player_HeroAbility {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALiveScoreboardUpdate_Team_Player_HeroAbility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.abilityId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.abilityLevel = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTALiveScoreboardUpdate_Team_Player_HeroAbility {
    return {
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      abilityLevel: isSet(object.abilityLevel) ? Number(object.abilityLevel) : 0,
    };
  },

  toJSON(message: CMsgDOTALiveScoreboardUpdate_Team_Player_HeroAbility): unknown {
    const obj: any = {};
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    message.abilityLevel !== undefined && (obj.abilityLevel = Math.round(message.abilityLevel));
    return obj;
  },
};

function createBaseCMsgServerToGCRequestBatchPlayerResources(): CMsgServerToGCRequestBatchPlayerResources {
  return { accountIds: [], rankTypes: [] };
}

export const CMsgServerToGCRequestBatchPlayerResources = {
  encode(message: CMsgServerToGCRequestBatchPlayerResources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.accountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.rankTypes) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCRequestBatchPlayerResources {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCRequestBatchPlayerResources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.accountIds.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag == 32) {
            message.rankTypes.push(reader.uint32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.rankTypes.push(reader.uint32());
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

  fromJSON(object: any): CMsgServerToGCRequestBatchPlayerResources {
    return {
      accountIds: Array.isArray(object?.accountIds) ? object.accountIds.map((e: any) => Number(e)) : [],
      rankTypes: Array.isArray(object?.rankTypes) ? object.rankTypes.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgServerToGCRequestBatchPlayerResources): unknown {
    const obj: any = {};
    if (message.accountIds) {
      obj.accountIds = message.accountIds.map((e) => Math.round(e));
    } else {
      obj.accountIds = [];
    }
    if (message.rankTypes) {
      obj.rankTypes = message.rankTypes.map((e) => Math.round(e));
    } else {
      obj.rankTypes = [];
    }
    return obj;
  },
};

function createBaseCMsgServerToGCRequestBatchPlayerResourcesResponse(): CMsgServerToGCRequestBatchPlayerResourcesResponse {
  return { results: [] };
}

export const CMsgServerToGCRequestBatchPlayerResourcesResponse = {
  encode(
    message: CMsgServerToGCRequestBatchPlayerResourcesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.results) {
      CMsgServerToGCRequestBatchPlayerResourcesResponse_Result.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCRequestBatchPlayerResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCRequestBatchPlayerResourcesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag != 50) {
            break;
          }

          message.results.push(
            CMsgServerToGCRequestBatchPlayerResourcesResponse_Result.decode(reader, reader.uint32()),
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

  fromJSON(object: any): CMsgServerToGCRequestBatchPlayerResourcesResponse {
    return {
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => CMsgServerToGCRequestBatchPlayerResourcesResponse_Result.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgServerToGCRequestBatchPlayerResourcesResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) =>
        e ? CMsgServerToGCRequestBatchPlayerResourcesResponse_Result.toJSON(e) : undefined
      );
    } else {
      obj.results = [];
    }
    return obj;
  },
};

function createBaseCMsgServerToGCRequestBatchPlayerResourcesResponse_Result(): CMsgServerToGCRequestBatchPlayerResourcesResponse_Result {
  return {
    accountId: 0,
    preventTextChat: false,
    preventVoiceChat: false,
    rank: 0,
    rankCalibrated: false,
    lowPriority: false,
    isNewPlayer: false,
    isGuidePlayer: false,
  };
}

export const CMsgServerToGCRequestBatchPlayerResourcesResponse_Result = {
  encode(
    message: CMsgServerToGCRequestBatchPlayerResourcesResponse_Result,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.preventTextChat === true) {
      writer.uint32(16).bool(message.preventTextChat);
    }
    if (message.preventVoiceChat === true) {
      writer.uint32(24).bool(message.preventVoiceChat);
    }
    if (message.rank !== 0) {
      writer.uint32(32).uint32(message.rank);
    }
    if (message.rankCalibrated === true) {
      writer.uint32(40).bool(message.rankCalibrated);
    }
    if (message.lowPriority === true) {
      writer.uint32(48).bool(message.lowPriority);
    }
    if (message.isNewPlayer === true) {
      writer.uint32(56).bool(message.isNewPlayer);
    }
    if (message.isGuidePlayer === true) {
      writer.uint32(64).bool(message.isGuidePlayer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCRequestBatchPlayerResourcesResponse_Result {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCRequestBatchPlayerResourcesResponse_Result();
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

          message.preventTextChat = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.preventVoiceChat = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.rank = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.rankCalibrated = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.lowPriority = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.isNewPlayer = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.isGuidePlayer = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCRequestBatchPlayerResourcesResponse_Result {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      preventTextChat: isSet(object.preventTextChat) ? Boolean(object.preventTextChat) : false,
      preventVoiceChat: isSet(object.preventVoiceChat) ? Boolean(object.preventVoiceChat) : false,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      rankCalibrated: isSet(object.rankCalibrated) ? Boolean(object.rankCalibrated) : false,
      lowPriority: isSet(object.lowPriority) ? Boolean(object.lowPriority) : false,
      isNewPlayer: isSet(object.isNewPlayer) ? Boolean(object.isNewPlayer) : false,
      isGuidePlayer: isSet(object.isGuidePlayer) ? Boolean(object.isGuidePlayer) : false,
    };
  },

  toJSON(message: CMsgServerToGCRequestBatchPlayerResourcesResponse_Result): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.preventTextChat !== undefined && (obj.preventTextChat = message.preventTextChat);
    message.preventVoiceChat !== undefined && (obj.preventVoiceChat = message.preventVoiceChat);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.rankCalibrated !== undefined && (obj.rankCalibrated = message.rankCalibrated);
    message.lowPriority !== undefined && (obj.lowPriority = message.lowPriority);
    message.isNewPlayer !== undefined && (obj.isNewPlayer = message.isNewPlayer);
    message.isGuidePlayer !== undefined && (obj.isGuidePlayer = message.isGuidePlayer);
    return obj;
  },
};

function createBaseCMsgDOTAPlayerFailedToConnect(): CMsgDOTAPlayerFailedToConnect {
  return { failedLoaders: [], abandonedLoaders: [] };
}

export const CMsgDOTAPlayerFailedToConnect = {
  encode(message: CMsgDOTAPlayerFailedToConnect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.failedLoaders) {
      writer.fixed64(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.abandonedLoaders) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAPlayerFailedToConnect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAPlayerFailedToConnect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 9) {
            message.failedLoaders.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.failedLoaders.push(longToString(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 2:
          if (tag == 17) {
            message.abandonedLoaders.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.abandonedLoaders.push(longToString(reader.fixed64() as Long));
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

  fromJSON(object: any): CMsgDOTAPlayerFailedToConnect {
    return {
      failedLoaders: Array.isArray(object?.failedLoaders) ? object.failedLoaders.map((e: any) => String(e)) : [],
      abandonedLoaders: Array.isArray(object?.abandonedLoaders)
        ? object.abandonedLoaders.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTAPlayerFailedToConnect): unknown {
    const obj: any = {};
    if (message.failedLoaders) {
      obj.failedLoaders = message.failedLoaders.map((e) => e);
    } else {
      obj.failedLoaders = [];
    }
    if (message.abandonedLoaders) {
      obj.abandonedLoaders = message.abandonedLoaders.map((e) => e);
    } else {
      obj.abandonedLoaders = [];
    }
    return obj;
  },
};

function createBaseCMsgGCToRelayConnect(): CMsgGCToRelayConnect {
  return {
    sourceTvPublicAddr: 0,
    sourceTvPrivateAddr: 0,
    sourceTvPort: 0,
    gameServerSteamId: "0",
    parentCount: 0,
    tvUniqueSecretCode: "0",
    sourceTvSteamid: "0",
  };
}

export const CMsgGCToRelayConnect = {
  encode(message: CMsgGCToRelayConnect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceTvPublicAddr !== 0) {
      writer.uint32(8).uint32(message.sourceTvPublicAddr);
    }
    if (message.sourceTvPrivateAddr !== 0) {
      writer.uint32(16).uint32(message.sourceTvPrivateAddr);
    }
    if (message.sourceTvPort !== 0) {
      writer.uint32(24).uint32(message.sourceTvPort);
    }
    if (message.gameServerSteamId !== "0") {
      writer.uint32(32).uint64(message.gameServerSteamId);
    }
    if (message.parentCount !== 0) {
      writer.uint32(40).uint32(message.parentCount);
    }
    if (message.tvUniqueSecretCode !== "0") {
      writer.uint32(49).fixed64(message.tvUniqueSecretCode);
    }
    if (message.sourceTvSteamid !== "0") {
      writer.uint32(57).fixed64(message.sourceTvSteamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToRelayConnect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToRelayConnect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sourceTvPublicAddr = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.sourceTvPrivateAddr = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.sourceTvPort = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.gameServerSteamId = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.parentCount = reader.uint32();
          continue;
        case 6:
          if (tag != 49) {
            break;
          }

          message.tvUniqueSecretCode = longToString(reader.fixed64() as Long);
          continue;
        case 7:
          if (tag != 57) {
            break;
          }

          message.sourceTvSteamid = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToRelayConnect {
    return {
      sourceTvPublicAddr: isSet(object.sourceTvPublicAddr) ? Number(object.sourceTvPublicAddr) : 0,
      sourceTvPrivateAddr: isSet(object.sourceTvPrivateAddr) ? Number(object.sourceTvPrivateAddr) : 0,
      sourceTvPort: isSet(object.sourceTvPort) ? Number(object.sourceTvPort) : 0,
      gameServerSteamId: isSet(object.gameServerSteamId) ? String(object.gameServerSteamId) : "0",
      parentCount: isSet(object.parentCount) ? Number(object.parentCount) : 0,
      tvUniqueSecretCode: isSet(object.tvUniqueSecretCode) ? String(object.tvUniqueSecretCode) : "0",
      sourceTvSteamid: isSet(object.sourceTvSteamid) ? String(object.sourceTvSteamid) : "0",
    };
  },

  toJSON(message: CMsgGCToRelayConnect): unknown {
    const obj: any = {};
    message.sourceTvPublicAddr !== undefined && (obj.sourceTvPublicAddr = Math.round(message.sourceTvPublicAddr));
    message.sourceTvPrivateAddr !== undefined && (obj.sourceTvPrivateAddr = Math.round(message.sourceTvPrivateAddr));
    message.sourceTvPort !== undefined && (obj.sourceTvPort = Math.round(message.sourceTvPort));
    message.gameServerSteamId !== undefined && (obj.gameServerSteamId = message.gameServerSteamId);
    message.parentCount !== undefined && (obj.parentCount = Math.round(message.parentCount));
    message.tvUniqueSecretCode !== undefined && (obj.tvUniqueSecretCode = message.tvUniqueSecretCode);
    message.sourceTvSteamid !== undefined && (obj.sourceTvSteamid = message.sourceTvSteamid);
    return obj;
  },
};

function createBaseCMsgGCGCToLANServerRelayConnect(): CMsgGCGCToLANServerRelayConnect {
  return { relaySteamid: "0" };
}

export const CMsgGCGCToLANServerRelayConnect = {
  encode(message: CMsgGCGCToLANServerRelayConnect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relaySteamid !== "0") {
      writer.uint32(9).fixed64(message.relaySteamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGCToLANServerRelayConnect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGCToLANServerRelayConnect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.relaySteamid = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCGCToLANServerRelayConnect {
    return { relaySteamid: isSet(object.relaySteamid) ? String(object.relaySteamid) : "0" };
  },

  toJSON(message: CMsgGCGCToLANServerRelayConnect): unknown {
    const obj: any = {};
    message.relaySteamid !== undefined && (obj.relaySteamid = message.relaySteamid);
    return obj;
  },
};

function createBaseCMsgGCBanStatusRequest(): CMsgGCBanStatusRequest {
  return { accountId: 0 };
}

export const CMsgGCBanStatusRequest = {
  encode(message: CMsgGCBanStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCBanStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCBanStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCBanStatusRequest {
    return { accountId: isSet(object.accountId) ? Number(object.accountId) : 0 };
  },

  toJSON(message: CMsgGCBanStatusRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    return obj;
  },
};

function createBaseCMsgGCBanStatusResponse(): CMsgGCBanStatusResponse {
  return { result: 0, lowPriority: false, textChatBanned: false, voiceChatBanned: false };
}

export const CMsgGCBanStatusResponse = {
  encode(message: CMsgGCBanStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.lowPriority === true) {
      writer.uint32(16).bool(message.lowPriority);
    }
    if (message.textChatBanned === true) {
      writer.uint32(24).bool(message.textChatBanned);
    }
    if (message.voiceChatBanned === true) {
      writer.uint32(32).bool(message.voiceChatBanned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCBanStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCBanStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.lowPriority = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.textChatBanned = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.voiceChatBanned = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCBanStatusResponse {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      lowPriority: isSet(object.lowPriority) ? Boolean(object.lowPriority) : false,
      textChatBanned: isSet(object.textChatBanned) ? Boolean(object.textChatBanned) : false,
      voiceChatBanned: isSet(object.voiceChatBanned) ? Boolean(object.voiceChatBanned) : false,
    };
  },

  toJSON(message: CMsgGCBanStatusResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.lowPriority !== undefined && (obj.lowPriority = message.lowPriority);
    message.textChatBanned !== undefined && (obj.textChatBanned = message.textChatBanned);
    message.voiceChatBanned !== undefined && (obj.voiceChatBanned = message.voiceChatBanned);
    return obj;
  },
};

function createBaseCMsgTournamentItemEvent(): CMsgTournamentItemEvent {
  return {
    killerAccountId: 0,
    victimAccountId: 0,
    eventType: 0,
    tvDelay: 0,
    dotaTime: 0,
    replayTime: 0,
    lootList: "",
    eventTeam: 0,
    multiKillCount: 0,
    winnerScore: 0,
    loserScore: 0,
    heroStatues: [],
  };
}

export const CMsgTournamentItemEvent = {
  encode(message: CMsgTournamentItemEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.killerAccountId !== 0) {
      writer.uint32(13).fixed32(message.killerAccountId);
    }
    if (message.victimAccountId !== 0) {
      writer.uint32(21).fixed32(message.victimAccountId);
    }
    if (message.eventType !== 0) {
      writer.uint32(24).int32(message.eventType);
    }
    if (message.tvDelay !== 0) {
      writer.uint32(32).int32(message.tvDelay);
    }
    if (message.dotaTime !== 0) {
      writer.uint32(40).int32(message.dotaTime);
    }
    if (message.replayTime !== 0) {
      writer.uint32(53).float(message.replayTime);
    }
    if (message.lootList !== "") {
      writer.uint32(58).string(message.lootList);
    }
    if (message.eventTeam !== 0) {
      writer.uint32(64).uint32(message.eventTeam);
    }
    if (message.multiKillCount !== 0) {
      writer.uint32(72).uint32(message.multiKillCount);
    }
    if (message.winnerScore !== 0) {
      writer.uint32(80).uint32(message.winnerScore);
    }
    if (message.loserScore !== 0) {
      writer.uint32(88).uint32(message.loserScore);
    }
    for (const v of message.heroStatues) {
      CProtoItemHeroStatue.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTournamentItemEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTournamentItemEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.killerAccountId = reader.fixed32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.victimAccountId = reader.fixed32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.eventType = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.tvDelay = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.dotaTime = reader.int32();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.replayTime = reader.float();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.lootList = reader.string();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.eventTeam = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.multiKillCount = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.winnerScore = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.loserScore = reader.uint32();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.heroStatues.push(CProtoItemHeroStatue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTournamentItemEvent {
    return {
      killerAccountId: isSet(object.killerAccountId) ? Number(object.killerAccountId) : 0,
      victimAccountId: isSet(object.victimAccountId) ? Number(object.victimAccountId) : 0,
      eventType: isSet(object.eventType) ? dOTATournamentEventsFromJSON(object.eventType) : 0,
      tvDelay: isSet(object.tvDelay) ? Number(object.tvDelay) : 0,
      dotaTime: isSet(object.dotaTime) ? Number(object.dotaTime) : 0,
      replayTime: isSet(object.replayTime) ? Number(object.replayTime) : 0,
      lootList: isSet(object.lootList) ? String(object.lootList) : "",
      eventTeam: isSet(object.eventTeam) ? Number(object.eventTeam) : 0,
      multiKillCount: isSet(object.multiKillCount) ? Number(object.multiKillCount) : 0,
      winnerScore: isSet(object.winnerScore) ? Number(object.winnerScore) : 0,
      loserScore: isSet(object.loserScore) ? Number(object.loserScore) : 0,
      heroStatues: Array.isArray(object?.heroStatues)
        ? object.heroStatues.map((e: any) => CProtoItemHeroStatue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgTournamentItemEvent): unknown {
    const obj: any = {};
    message.killerAccountId !== undefined && (obj.killerAccountId = Math.round(message.killerAccountId));
    message.victimAccountId !== undefined && (obj.victimAccountId = Math.round(message.victimAccountId));
    message.eventType !== undefined && (obj.eventType = dOTATournamentEventsToJSON(message.eventType));
    message.tvDelay !== undefined && (obj.tvDelay = Math.round(message.tvDelay));
    message.dotaTime !== undefined && (obj.dotaTime = Math.round(message.dotaTime));
    message.replayTime !== undefined && (obj.replayTime = message.replayTime);
    message.lootList !== undefined && (obj.lootList = message.lootList);
    message.eventTeam !== undefined && (obj.eventTeam = Math.round(message.eventTeam));
    message.multiKillCount !== undefined && (obj.multiKillCount = Math.round(message.multiKillCount));
    message.winnerScore !== undefined && (obj.winnerScore = Math.round(message.winnerScore));
    message.loserScore !== undefined && (obj.loserScore = Math.round(message.loserScore));
    if (message.heroStatues) {
      obj.heroStatues = message.heroStatues.map((e) => e ? CProtoItemHeroStatue.toJSON(e) : undefined);
    } else {
      obj.heroStatues = [];
    }
    return obj;
  },
};

function createBaseCMsgTournamentItemEventResponse(): CMsgTournamentItemEventResponse {
  return { eventType: 0, viewersGranted: 0 };
}

export const CMsgTournamentItemEventResponse = {
  encode(message: CMsgTournamentItemEventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventType !== 0) {
      writer.uint32(8).int32(message.eventType);
    }
    if (message.viewersGranted !== 0) {
      writer.uint32(48).uint32(message.viewersGranted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTournamentItemEventResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTournamentItemEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventType = reader.int32() as any;
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.viewersGranted = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgTournamentItemEventResponse {
    return {
      eventType: isSet(object.eventType) ? dOTATournamentEventsFromJSON(object.eventType) : 0,
      viewersGranted: isSet(object.viewersGranted) ? Number(object.viewersGranted) : 0,
    };
  },

  toJSON(message: CMsgTournamentItemEventResponse): unknown {
    const obj: any = {};
    message.eventType !== undefined && (obj.eventType = dOTATournamentEventsToJSON(message.eventType));
    message.viewersGranted !== undefined && (obj.viewersGranted = Math.round(message.viewersGranted));
    return obj;
  },
};

function createBaseCMsgTeamFanfare(): CMsgTeamFanfare {
  return { matchId: "0" };
}

export const CMsgTeamFanfare = {
  encode(message: CMsgTeamFanfare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTeamFanfare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTeamFanfare();
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

  fromJSON(object: any): CMsgTeamFanfare {
    return { matchId: isSet(object.matchId) ? String(object.matchId) : "0" };
  },

  toJSON(message: CMsgTeamFanfare): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    return obj;
  },
};

function createBaseCMsgResponseTeamFanfare(): CMsgResponseTeamFanfare {
  return { fanfareGoodguys: 0, fanfareBadguys: 0 };
}

export const CMsgResponseTeamFanfare = {
  encode(message: CMsgResponseTeamFanfare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fanfareGoodguys !== 0) {
      writer.uint32(8).uint32(message.fanfareGoodguys);
    }
    if (message.fanfareBadguys !== 0) {
      writer.uint32(16).uint32(message.fanfareBadguys);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgResponseTeamFanfare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgResponseTeamFanfare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.fanfareGoodguys = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.fanfareBadguys = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgResponseTeamFanfare {
    return {
      fanfareGoodguys: isSet(object.fanfareGoodguys) ? Number(object.fanfareGoodguys) : 0,
      fanfareBadguys: isSet(object.fanfareBadguys) ? Number(object.fanfareBadguys) : 0,
    };
  },

  toJSON(message: CMsgResponseTeamFanfare): unknown {
    const obj: any = {};
    message.fanfareGoodguys !== undefined && (obj.fanfareGoodguys = Math.round(message.fanfareGoodguys));
    message.fanfareBadguys !== undefined && (obj.fanfareBadguys = Math.round(message.fanfareBadguys));
    return obj;
  },
};

function createBaseCMsgGameServerUploadSaveGame(): CMsgGameServerUploadSaveGame {
  return { gameTime: 0, saveGameData: Buffer.alloc(0), lobbyId: "0", playerSteamIds: [] };
}

export const CMsgGameServerUploadSaveGame = {
  encode(message: CMsgGameServerUploadSaveGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameTime !== 0) {
      writer.uint32(8).uint32(message.gameTime);
    }
    if (message.saveGameData.length !== 0) {
      writer.uint32(18).bytes(message.saveGameData);
    }
    if (message.lobbyId !== "0") {
      writer.uint32(24).uint64(message.lobbyId);
    }
    writer.uint32(34).fork();
    for (const v of message.playerSteamIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameServerUploadSaveGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameServerUploadSaveGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gameTime = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.saveGameData = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.lobbyId = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag == 32) {
            message.playerSteamIds.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playerSteamIds.push(longToString(reader.uint64() as Long));
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

  fromJSON(object: any): CMsgGameServerUploadSaveGame {
    return {
      gameTime: isSet(object.gameTime) ? Number(object.gameTime) : 0,
      saveGameData: isSet(object.saveGameData) ? Buffer.from(bytesFromBase64(object.saveGameData)) : Buffer.alloc(0),
      lobbyId: isSet(object.lobbyId) ? String(object.lobbyId) : "0",
      playerSteamIds: Array.isArray(object?.playerSteamIds) ? object.playerSteamIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgGameServerUploadSaveGame): unknown {
    const obj: any = {};
    message.gameTime !== undefined && (obj.gameTime = Math.round(message.gameTime));
    message.saveGameData !== undefined &&
      (obj.saveGameData = base64FromBytes(message.saveGameData !== undefined ? message.saveGameData : Buffer.alloc(0)));
    message.lobbyId !== undefined && (obj.lobbyId = message.lobbyId);
    if (message.playerSteamIds) {
      obj.playerSteamIds = message.playerSteamIds.map((e) => e);
    } else {
      obj.playerSteamIds = [];
    }
    return obj;
  },
};

function createBaseCMsgGameServerSaveGameResult(): CMsgGameServerSaveGameResult {
  return { result: 0 };
}

export const CMsgGameServerSaveGameResult = {
  encode(message: CMsgGameServerSaveGameResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameServerSaveGameResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameServerSaveGameResult();
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

  fromJSON(object: any): CMsgGameServerSaveGameResult {
    return { result: isSet(object.result) ? cMsgGameServerSaveGameResult_ResultFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgGameServerSaveGameResult): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = cMsgGameServerSaveGameResult_ResultToJSON(message.result));
    return obj;
  },
};

function createBaseCMsgGameServerGetLoadGame(): CMsgGameServerGetLoadGame {
  return { saveId: 0 };
}

export const CMsgGameServerGetLoadGame = {
  encode(message: CMsgGameServerGetLoadGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.saveId !== 0) {
      writer.uint32(8).uint32(message.saveId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameServerGetLoadGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameServerGetLoadGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.saveId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGameServerGetLoadGame {
    return { saveId: isSet(object.saveId) ? Number(object.saveId) : 0 };
  },

  toJSON(message: CMsgGameServerGetLoadGame): unknown {
    const obj: any = {};
    message.saveId !== undefined && (obj.saveId = Math.round(message.saveId));
    return obj;
  },
};

function createBaseCMsgGameServerGetLoadGameResult(): CMsgGameServerGetLoadGameResult {
  return { saveGameData: Buffer.alloc(0) };
}

export const CMsgGameServerGetLoadGameResult = {
  encode(message: CMsgGameServerGetLoadGameResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.saveGameData.length !== 0) {
      writer.uint32(10).bytes(message.saveGameData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameServerGetLoadGameResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameServerGetLoadGameResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.saveGameData = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGameServerGetLoadGameResult {
    return {
      saveGameData: isSet(object.saveGameData) ? Buffer.from(bytesFromBase64(object.saveGameData)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgGameServerGetLoadGameResult): unknown {
    const obj: any = {};
    message.saveGameData !== undefined &&
      (obj.saveGameData = base64FromBytes(message.saveGameData !== undefined ? message.saveGameData : Buffer.alloc(0)));
    return obj;
  },
};

function createBaseCMsgDOTAAwardEventPoints(): CMsgDOTAAwardEventPoints {
  return { awardPoints: [], matchId: "0", eventId: 0, timestamp: 0, auditAction: 0 };
}

export const CMsgDOTAAwardEventPoints = {
  encode(message: CMsgDOTAAwardEventPoints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.awardPoints) {
      CMsgDOTAAwardEventPoints_AwardPoints.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.matchId !== "0") {
      writer.uint32(16).uint64(message.matchId);
    }
    if (message.eventId !== 0) {
      writer.uint32(32).int32(message.eventId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(40).uint32(message.timestamp);
    }
    if (message.auditAction !== 0) {
      writer.uint32(48).uint32(message.auditAction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAAwardEventPoints {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAAwardEventPoints();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.awardPoints.push(CMsgDOTAAwardEventPoints_AwardPoints.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.eventId = reader.int32() as any;
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

          message.auditAction = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAAwardEventPoints {
    return {
      awardPoints: Array.isArray(object?.awardPoints)
        ? object.awardPoints.map((e: any) => CMsgDOTAAwardEventPoints_AwardPoints.fromJSON(e))
        : [],
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      auditAction: isSet(object.auditAction) ? Number(object.auditAction) : 0,
    };
  },

  toJSON(message: CMsgDOTAAwardEventPoints): unknown {
    const obj: any = {};
    if (message.awardPoints) {
      obj.awardPoints = message.awardPoints.map((e) => e ? CMsgDOTAAwardEventPoints_AwardPoints.toJSON(e) : undefined);
    } else {
      obj.awardPoints = [];
    }
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.auditAction !== undefined && (obj.auditAction = Math.round(message.auditAction));
    return obj;
  },
};

function createBaseCMsgDOTAAwardEventPoints_AwardPoints(): CMsgDOTAAwardEventPoints_AwardPoints {
  return {
    accountId: 0,
    points: 0,
    premiumPoints: 0,
    tradeBanTime: 0,
    eligibleForPeriodicAdjustment: false,
    pointCapPeriodicResourceId: 0,
  };
}

export const CMsgDOTAAwardEventPoints_AwardPoints = {
  encode(message: CMsgDOTAAwardEventPoints_AwardPoints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.points !== 0) {
      writer.uint32(16).int32(message.points);
    }
    if (message.premiumPoints !== 0) {
      writer.uint32(24).int32(message.premiumPoints);
    }
    if (message.tradeBanTime !== 0) {
      writer.uint32(40).uint32(message.tradeBanTime);
    }
    if (message.eligibleForPeriodicAdjustment === true) {
      writer.uint32(48).bool(message.eligibleForPeriodicAdjustment);
    }
    if (message.pointCapPeriodicResourceId !== 0) {
      writer.uint32(56).uint32(message.pointCapPeriodicResourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAAwardEventPoints_AwardPoints {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAAwardEventPoints_AwardPoints();
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

          message.points = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.premiumPoints = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.tradeBanTime = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.eligibleForPeriodicAdjustment = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.pointCapPeriodicResourceId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAAwardEventPoints_AwardPoints {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      points: isSet(object.points) ? Number(object.points) : 0,
      premiumPoints: isSet(object.premiumPoints) ? Number(object.premiumPoints) : 0,
      tradeBanTime: isSet(object.tradeBanTime) ? Number(object.tradeBanTime) : 0,
      eligibleForPeriodicAdjustment: isSet(object.eligibleForPeriodicAdjustment)
        ? Boolean(object.eligibleForPeriodicAdjustment)
        : false,
      pointCapPeriodicResourceId: isSet(object.pointCapPeriodicResourceId)
        ? Number(object.pointCapPeriodicResourceId)
        : 0,
    };
  },

  toJSON(message: CMsgDOTAAwardEventPoints_AwardPoints): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.points !== undefined && (obj.points = Math.round(message.points));
    message.premiumPoints !== undefined && (obj.premiumPoints = Math.round(message.premiumPoints));
    message.tradeBanTime !== undefined && (obj.tradeBanTime = Math.round(message.tradeBanTime));
    message.eligibleForPeriodicAdjustment !== undefined &&
      (obj.eligibleForPeriodicAdjustment = message.eligibleForPeriodicAdjustment);
    message.pointCapPeriodicResourceId !== undefined &&
      (obj.pointCapPeriodicResourceId = Math.round(message.pointCapPeriodicResourceId));
    return obj;
  },
};

function createBaseCMsgGCToServerPingRequest(): CMsgGCToServerPingRequest {
  return { requestId: "0", requestTime: "0" };
}

export const CMsgGCToServerPingRequest = {
  encode(message: CMsgGCToServerPingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "0") {
      writer.uint32(9).fixed64(message.requestId);
    }
    if (message.requestTime !== "0") {
      writer.uint32(16).uint64(message.requestTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerPingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerPingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.requestId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.requestTime = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToServerPingRequest {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "0",
      requestTime: isSet(object.requestTime) ? String(object.requestTime) : "0",
    };
  },

  toJSON(message: CMsgGCToServerPingRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.requestTime !== undefined && (obj.requestTime = message.requestTime);
    return obj;
  },
};

function createBaseCMsgGCToServerPingResponse(): CMsgGCToServerPingResponse {
  return { requestId: "0", requestTime: "0", cluster: 0 };
}

export const CMsgGCToServerPingResponse = {
  encode(message: CMsgGCToServerPingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "0") {
      writer.uint32(9).fixed64(message.requestId);
    }
    if (message.requestTime !== "0") {
      writer.uint32(16).uint64(message.requestTime);
    }
    if (message.cluster !== 0) {
      writer.uint32(24).uint32(message.cluster);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerPingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerPingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.requestId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.requestTime = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.cluster = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToServerPingResponse {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "0",
      requestTime: isSet(object.requestTime) ? String(object.requestTime) : "0",
      cluster: isSet(object.cluster) ? Number(object.cluster) : 0,
    };
  },

  toJSON(message: CMsgGCToServerPingResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.requestTime !== undefined && (obj.requestTime = message.requestTime);
    message.cluster !== undefined && (obj.cluster = Math.round(message.cluster));
    return obj;
  },
};

function createBaseCMsgServerToGCMatchConnectionStats(): CMsgServerToGCMatchConnectionStats {
  return { matchId: "0", regionId: 0, leagueId: 0, players: [], clusterId: 0 };
}

export const CMsgServerToGCMatchConnectionStats = {
  encode(message: CMsgServerToGCMatchConnectionStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.regionId !== 0) {
      writer.uint32(16).uint32(message.regionId);
    }
    if (message.leagueId !== 0) {
      writer.uint32(24).uint32(message.leagueId);
    }
    for (const v of message.players) {
      CMsgServerToGCMatchConnectionStats_Player.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.clusterId !== 0) {
      writer.uint32(40).uint32(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCMatchConnectionStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCMatchConnectionStats();
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

          message.regionId = reader.uint32();
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

          message.players.push(CMsgServerToGCMatchConnectionStats_Player.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.clusterId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCMatchConnectionStats {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      regionId: isSet(object.regionId) ? Number(object.regionId) : 0,
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgServerToGCMatchConnectionStats_Player.fromJSON(e))
        : [],
      clusterId: isSet(object.clusterId) ? Number(object.clusterId) : 0,
    };
  },

  toJSON(message: CMsgServerToGCMatchConnectionStats): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.regionId !== undefined && (obj.regionId = Math.round(message.regionId));
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgServerToGCMatchConnectionStats_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    message.clusterId !== undefined && (obj.clusterId = Math.round(message.clusterId));
    return obj;
  },
};

function createBaseCMsgServerToGCMatchConnectionStats_Player(): CMsgServerToGCMatchConnectionStats_Player {
  return { accountId: 0, ip: 0, avgPingMs: 0, packetLoss: 0, pingDeviation: 0, fullResends: 0 };
}

export const CMsgServerToGCMatchConnectionStats_Player = {
  encode(message: CMsgServerToGCMatchConnectionStats_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.ip !== 0) {
      writer.uint32(21).fixed32(message.ip);
    }
    if (message.avgPingMs !== 0) {
      writer.uint32(24).uint32(message.avgPingMs);
    }
    if (message.packetLoss !== 0) {
      writer.uint32(45).float(message.packetLoss);
    }
    if (message.pingDeviation !== 0) {
      writer.uint32(53).float(message.pingDeviation);
    }
    if (message.fullResends !== 0) {
      writer.uint32(56).uint32(message.fullResends);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCMatchConnectionStats_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCMatchConnectionStats_Player();
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
          if (tag != 21) {
            break;
          }

          message.ip = reader.fixed32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.avgPingMs = reader.uint32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.packetLoss = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.pingDeviation = reader.float();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.fullResends = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCMatchConnectionStats_Player {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      ip: isSet(object.ip) ? Number(object.ip) : 0,
      avgPingMs: isSet(object.avgPingMs) ? Number(object.avgPingMs) : 0,
      packetLoss: isSet(object.packetLoss) ? Number(object.packetLoss) : 0,
      pingDeviation: isSet(object.pingDeviation) ? Number(object.pingDeviation) : 0,
      fullResends: isSet(object.fullResends) ? Number(object.fullResends) : 0,
    };
  },

  toJSON(message: CMsgServerToGCMatchConnectionStats_Player): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.ip !== undefined && (obj.ip = Math.round(message.ip));
    message.avgPingMs !== undefined && (obj.avgPingMs = Math.round(message.avgPingMs));
    message.packetLoss !== undefined && (obj.packetLoss = message.packetLoss);
    message.pingDeviation !== undefined && (obj.pingDeviation = message.pingDeviation);
    message.fullResends !== undefined && (obj.fullResends = Math.round(message.fullResends));
    return obj;
  },
};

function createBaseCMsgServerGCUpdateSpectatorCount(): CMsgServerGCUpdateSpectatorCount {
  return { spectatorCount: 0 };
}

export const CMsgServerGCUpdateSpectatorCount = {
  encode(message: CMsgServerGCUpdateSpectatorCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spectatorCount !== 0) {
      writer.uint32(8).uint32(message.spectatorCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerGCUpdateSpectatorCount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerGCUpdateSpectatorCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.spectatorCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerGCUpdateSpectatorCount {
    return { spectatorCount: isSet(object.spectatorCount) ? Number(object.spectatorCount) : 0 };
  },

  toJSON(message: CMsgServerGCUpdateSpectatorCount): unknown {
    const obj: any = {};
    message.spectatorCount !== undefined && (obj.spectatorCount = Math.round(message.spectatorCount));
    return obj;
  },
};

function createBaseCSerializedCombatLog(): CSerializedCombatLog {
  return { version: 0, dictionary: undefined, entries: [] };
}

export const CSerializedCombatLog = {
  encode(message: CSerializedCombatLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.dictionary !== undefined) {
      CSerializedCombatLog_Dictionary.encode(message.dictionary, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.entries) {
      CMsgDOTACombatLogEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSerializedCombatLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSerializedCombatLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.version = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.dictionary = CSerializedCombatLog_Dictionary.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.entries.push(CMsgDOTACombatLogEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSerializedCombatLog {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      dictionary: isSet(object.dictionary) ? CSerializedCombatLog_Dictionary.fromJSON(object.dictionary) : undefined,
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => CMsgDOTACombatLogEntry.fromJSON(e)) : [],
    };
  },

  toJSON(message: CSerializedCombatLog): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.dictionary !== undefined &&
      (obj.dictionary = message.dictionary ? CSerializedCombatLog_Dictionary.toJSON(message.dictionary) : undefined);
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? CMsgDOTACombatLogEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
};

function createBaseCSerializedCombatLog_Dictionary(): CSerializedCombatLog_Dictionary {
  return { strings: [] };
}

export const CSerializedCombatLog_Dictionary = {
  encode(message: CSerializedCombatLog_Dictionary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.strings) {
      CSerializedCombatLog_Dictionary_DictString.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSerializedCombatLog_Dictionary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSerializedCombatLog_Dictionary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.strings.push(CSerializedCombatLog_Dictionary_DictString.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSerializedCombatLog_Dictionary {
    return {
      strings: Array.isArray(object?.strings)
        ? object.strings.map((e: any) => CSerializedCombatLog_Dictionary_DictString.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSerializedCombatLog_Dictionary): unknown {
    const obj: any = {};
    if (message.strings) {
      obj.strings = message.strings.map((e) => e ? CSerializedCombatLog_Dictionary_DictString.toJSON(e) : undefined);
    } else {
      obj.strings = [];
    }
    return obj;
  },
};

function createBaseCSerializedCombatLog_Dictionary_DictString(): CSerializedCombatLog_Dictionary_DictString {
  return { id: 0, value: "" };
}

export const CSerializedCombatLog_Dictionary_DictString = {
  encode(message: CSerializedCombatLog_Dictionary_DictString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSerializedCombatLog_Dictionary_DictString {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSerializedCombatLog_Dictionary_DictString();
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

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSerializedCombatLog_Dictionary_DictString {
    return { id: isSet(object.id) ? Number(object.id) : 0, value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CSerializedCombatLog_Dictionary_DictString): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

function createBaseCMsgServerToGCVictoryPredictions(): CMsgServerToGCVictoryPredictions {
  return { records: [] };
}

export const CMsgServerToGCVictoryPredictions = {
  encode(message: CMsgServerToGCVictoryPredictions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      CMsgServerToGCVictoryPredictions_Record.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCVictoryPredictions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCVictoryPredictions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.records.push(CMsgServerToGCVictoryPredictions_Record.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCVictoryPredictions {
    return {
      records: Array.isArray(object?.records)
        ? object.records.map((e: any) => CMsgServerToGCVictoryPredictions_Record.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgServerToGCVictoryPredictions): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map((e) => e ? CMsgServerToGCVictoryPredictions_Record.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
};

function createBaseCMsgServerToGCVictoryPredictions_Record(): CMsgServerToGCVictoryPredictions_Record {
  return { accountId: 0, itemId: "0", itemIds: [] };
}

export const CMsgServerToGCVictoryPredictions_Record = {
  encode(message: CMsgServerToGCVictoryPredictions_Record, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.itemId !== "0") {
      writer.uint32(16).uint64(message.itemId);
    }
    writer.uint32(42).fork();
    for (const v of message.itemIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCVictoryPredictions_Record {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCVictoryPredictions_Record();
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

          message.itemId = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag == 40) {
            message.itemIds.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemIds.push(longToString(reader.uint64() as Long));
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

  fromJSON(object: any): CMsgServerToGCVictoryPredictions_Record {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      itemIds: Array.isArray(object?.itemIds) ? object.itemIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgServerToGCVictoryPredictions_Record): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    if (message.itemIds) {
      obj.itemIds = message.itemIds.map((e) => e);
    } else {
      obj.itemIds = [];
    }
    return obj;
  },
};

function createBaseCMsgServerToGCRequestStatus(): CMsgServerToGCRequestStatus {
  return {};
}

export const CMsgServerToGCRequestStatus = {
  encode(_: CMsgServerToGCRequestStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCRequestStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCRequestStatus();
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

  fromJSON(_: any): CMsgServerToGCRequestStatus {
    return {};
  },

  toJSON(_: CMsgServerToGCRequestStatus): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgServerToGCRequestStatusResponse(): CMsgServerToGCRequestStatusResponse {
  return { response: 0 };
}

export const CMsgServerToGCRequestStatusResponse = {
  encode(message: CMsgServerToGCRequestStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).uint32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCRequestStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCRequestStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCRequestStatusResponse {
    return { response: isSet(object.response) ? Number(object.response) : 0 };
  },

  toJSON(message: CMsgServerToGCRequestStatusResponse): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = Math.round(message.response));
    return obj;
  },
};

function createBaseCMsgSignOutAssassinMiniGameInfo(): CMsgSignOutAssassinMiniGameInfo {
  return {
    winningPlayers: [],
    losingPlayers: [],
    arcanaOwners: [],
    assassinWon: false,
    targetHeroId: 0,
    contractCompleted: false,
    contractCompleteTime: 0,
    paIsRadiant: false,
  };
}

export const CMsgSignOutAssassinMiniGameInfo = {
  encode(message: CMsgSignOutAssassinMiniGameInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.winningPlayers) {
      writer.fixed64(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.losingPlayers) {
      writer.fixed64(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.arcanaOwners) {
      writer.fixed64(v);
    }
    writer.ldelim();
    if (message.assassinWon === true) {
      writer.uint32(32).bool(message.assassinWon);
    }
    if (message.targetHeroId !== 0) {
      writer.uint32(40).uint32(message.targetHeroId);
    }
    if (message.contractCompleted === true) {
      writer.uint32(48).bool(message.contractCompleted);
    }
    if (message.contractCompleteTime !== 0) {
      writer.uint32(61).float(message.contractCompleteTime);
    }
    if (message.paIsRadiant === true) {
      writer.uint32(64).bool(message.paIsRadiant);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutAssassinMiniGameInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutAssassinMiniGameInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 9) {
            message.winningPlayers.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.winningPlayers.push(longToString(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 2:
          if (tag == 17) {
            message.losingPlayers.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.losingPlayers.push(longToString(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag == 25) {
            message.arcanaOwners.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.arcanaOwners.push(longToString(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 4:
          if (tag != 32) {
            break;
          }

          message.assassinWon = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.targetHeroId = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.contractCompleted = reader.bool();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.contractCompleteTime = reader.float();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.paIsRadiant = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutAssassinMiniGameInfo {
    return {
      winningPlayers: Array.isArray(object?.winningPlayers) ? object.winningPlayers.map((e: any) => String(e)) : [],
      losingPlayers: Array.isArray(object?.losingPlayers) ? object.losingPlayers.map((e: any) => String(e)) : [],
      arcanaOwners: Array.isArray(object?.arcanaOwners) ? object.arcanaOwners.map((e: any) => String(e)) : [],
      assassinWon: isSet(object.assassinWon) ? Boolean(object.assassinWon) : false,
      targetHeroId: isSet(object.targetHeroId) ? Number(object.targetHeroId) : 0,
      contractCompleted: isSet(object.contractCompleted) ? Boolean(object.contractCompleted) : false,
      contractCompleteTime: isSet(object.contractCompleteTime) ? Number(object.contractCompleteTime) : 0,
      paIsRadiant: isSet(object.paIsRadiant) ? Boolean(object.paIsRadiant) : false,
    };
  },

  toJSON(message: CMsgSignOutAssassinMiniGameInfo): unknown {
    const obj: any = {};
    if (message.winningPlayers) {
      obj.winningPlayers = message.winningPlayers.map((e) => e);
    } else {
      obj.winningPlayers = [];
    }
    if (message.losingPlayers) {
      obj.losingPlayers = message.losingPlayers.map((e) => e);
    } else {
      obj.losingPlayers = [];
    }
    if (message.arcanaOwners) {
      obj.arcanaOwners = message.arcanaOwners.map((e) => e);
    } else {
      obj.arcanaOwners = [];
    }
    message.assassinWon !== undefined && (obj.assassinWon = message.assassinWon);
    message.targetHeroId !== undefined && (obj.targetHeroId = Math.round(message.targetHeroId));
    message.contractCompleted !== undefined && (obj.contractCompleted = message.contractCompleted);
    message.contractCompleteTime !== undefined && (obj.contractCompleteTime = message.contractCompleteTime);
    message.paIsRadiant !== undefined && (obj.paIsRadiant = message.paIsRadiant);
    return obj;
  },
};

function createBaseCMsgServerToGCKillSummaries(): CMsgServerToGCKillSummaries {
  return { ingameeventId: 0, summaries: [] };
}

export const CMsgServerToGCKillSummaries = {
  encode(message: CMsgServerToGCKillSummaries, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ingameeventId !== 0) {
      writer.uint32(8).uint32(message.ingameeventId);
    }
    for (const v of message.summaries) {
      CMsgServerToGCKillSummaries_KillSummary.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCKillSummaries {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCKillSummaries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ingameeventId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.summaries.push(CMsgServerToGCKillSummaries_KillSummary.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCKillSummaries {
    return {
      ingameeventId: isSet(object.ingameeventId) ? Number(object.ingameeventId) : 0,
      summaries: Array.isArray(object?.summaries)
        ? object.summaries.map((e: any) => CMsgServerToGCKillSummaries_KillSummary.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgServerToGCKillSummaries): unknown {
    const obj: any = {};
    message.ingameeventId !== undefined && (obj.ingameeventId = Math.round(message.ingameeventId));
    if (message.summaries) {
      obj.summaries = message.summaries.map((e) => e ? CMsgServerToGCKillSummaries_KillSummary.toJSON(e) : undefined);
    } else {
      obj.summaries = [];
    }
    return obj;
  },
};

function createBaseCMsgServerToGCKillSummaries_KillSummary(): CMsgServerToGCKillSummaries_KillSummary {
  return { killerHeroId: 0, victimHeroId: 0, killCount: 0 };
}

export const CMsgServerToGCKillSummaries_KillSummary = {
  encode(message: CMsgServerToGCKillSummaries_KillSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.killerHeroId !== 0) {
      writer.uint32(8).uint32(message.killerHeroId);
    }
    if (message.victimHeroId !== 0) {
      writer.uint32(16).uint32(message.victimHeroId);
    }
    if (message.killCount !== 0) {
      writer.uint32(24).uint32(message.killCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCKillSummaries_KillSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCKillSummaries_KillSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.killerHeroId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.victimHeroId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.killCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCKillSummaries_KillSummary {
    return {
      killerHeroId: isSet(object.killerHeroId) ? Number(object.killerHeroId) : 0,
      victimHeroId: isSet(object.victimHeroId) ? Number(object.victimHeroId) : 0,
      killCount: isSet(object.killCount) ? Number(object.killCount) : 0,
    };
  },

  toJSON(message: CMsgServerToGCKillSummaries_KillSummary): unknown {
    const obj: any = {};
    message.killerHeroId !== undefined && (obj.killerHeroId = Math.round(message.killerHeroId));
    message.victimHeroId !== undefined && (obj.victimHeroId = Math.round(message.victimHeroId));
    message.killCount !== undefined && (obj.killCount = Math.round(message.killCount));
    return obj;
  },
};

function createBaseCMsgGCToServerPredictionResult(): CMsgGCToServerPredictionResult {
  return { accountId: 0, matchId: "0", correct: false, predictions: [] };
}

export const CMsgGCToServerPredictionResult = {
  encode(message: CMsgGCToServerPredictionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.matchId !== "0") {
      writer.uint32(16).uint64(message.matchId);
    }
    if (message.correct === true) {
      writer.uint32(24).bool(message.correct);
    }
    for (const v of message.predictions) {
      CMsgGCToServerPredictionResult_Prediction.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerPredictionResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerPredictionResult();
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

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.correct = reader.bool();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.predictions.push(CMsgGCToServerPredictionResult_Prediction.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToServerPredictionResult {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      correct: isSet(object.correct) ? Boolean(object.correct) : false,
      predictions: Array.isArray(object?.predictions)
        ? object.predictions.map((e: any) => CMsgGCToServerPredictionResult_Prediction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGCToServerPredictionResult): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.correct !== undefined && (obj.correct = message.correct);
    if (message.predictions) {
      obj.predictions = message.predictions.map((e) =>
        e ? CMsgGCToServerPredictionResult_Prediction.toJSON(e) : undefined
      );
    } else {
      obj.predictions = [];
    }
    return obj;
  },
};

function createBaseCMsgGCToServerPredictionResult_Prediction(): CMsgGCToServerPredictionResult_Prediction {
  return { itemDef: 0, numCorrect: 0, numFails: 0, result: 1, grantedItemDefs: [] };
}

export const CMsgGCToServerPredictionResult_Prediction = {
  encode(message: CMsgGCToServerPredictionResult_Prediction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDef !== 0) {
      writer.uint32(8).uint32(message.itemDef);
    }
    if (message.numCorrect !== 0) {
      writer.uint32(16).uint32(message.numCorrect);
    }
    if (message.numFails !== 0) {
      writer.uint32(24).uint32(message.numFails);
    }
    if (message.result !== 1) {
      writer.uint32(32).int32(message.result);
    }
    writer.uint32(50).fork();
    for (const v of message.grantedItemDefs) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerPredictionResult_Prediction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerPredictionResult_Prediction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemDef = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.numCorrect = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.numFails = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 6:
          if (tag == 48) {
            message.grantedItemDefs.push(reader.uint32());
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.grantedItemDefs.push(reader.uint32());
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

  fromJSON(object: any): CMsgGCToServerPredictionResult_Prediction {
    return {
      itemDef: isSet(object.itemDef) ? Number(object.itemDef) : 0,
      numCorrect: isSet(object.numCorrect) ? Number(object.numCorrect) : 0,
      numFails: isSet(object.numFails) ? Number(object.numFails) : 0,
      result: isSet(object.result) ? cMsgGCToServerPredictionResult_Prediction_EResultFromJSON(object.result) : 1,
      grantedItemDefs: Array.isArray(object?.grantedItemDefs) ? object.grantedItemDefs.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgGCToServerPredictionResult_Prediction): unknown {
    const obj: any = {};
    message.itemDef !== undefined && (obj.itemDef = Math.round(message.itemDef));
    message.numCorrect !== undefined && (obj.numCorrect = Math.round(message.numCorrect));
    message.numFails !== undefined && (obj.numFails = Math.round(message.numFails));
    message.result !== undefined &&
      (obj.result = cMsgGCToServerPredictionResult_Prediction_EResultToJSON(message.result));
    if (message.grantedItemDefs) {
      obj.grantedItemDefs = message.grantedItemDefs.map((e) => Math.round(e));
    } else {
      obj.grantedItemDefs = [];
    }
    return obj;
  },
};

function createBaseCMsgServerToGCLockCharmTrading(): CMsgServerToGCLockCharmTrading {
  return { accountId: 0, itemId: "0" };
}

export const CMsgServerToGCLockCharmTrading = {
  encode(message: CMsgServerToGCLockCharmTrading, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.itemId !== "0") {
      writer.uint32(16).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCLockCharmTrading {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCLockCharmTrading();
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

  fromJSON(object: any): CMsgServerToGCLockCharmTrading {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
    };
  },

  toJSON(message: CMsgServerToGCLockCharmTrading): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },
};

function createBaseCMsgSignOutUpdatePlayerChallenge(): CMsgSignOutUpdatePlayerChallenge {
  return { accountId: 0, completed: [], rerolled: [], matchId: "0", heroId: 0 };
}

export const CMsgSignOutUpdatePlayerChallenge = {
  encode(message: CMsgSignOutUpdatePlayerChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    for (const v of message.completed) {
      CMsgSignOutUpdatePlayerChallenge_Challenge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.rerolled) {
      CMsgSignOutUpdatePlayerChallenge_Challenge.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.matchId !== "0") {
      writer.uint32(32).uint64(message.matchId);
    }
    if (message.heroId !== 0) {
      writer.uint32(40).uint32(message.heroId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutUpdatePlayerChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutUpdatePlayerChallenge();
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

          message.completed.push(CMsgSignOutUpdatePlayerChallenge_Challenge.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.rerolled.push(CMsgSignOutUpdatePlayerChallenge_Challenge.decode(reader, reader.uint32()));
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

          message.heroId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutUpdatePlayerChallenge {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      completed: Array.isArray(object?.completed)
        ? object.completed.map((e: any) => CMsgSignOutUpdatePlayerChallenge_Challenge.fromJSON(e))
        : [],
      rerolled: Array.isArray(object?.rerolled)
        ? object.rerolled.map((e: any) => CMsgSignOutUpdatePlayerChallenge_Challenge.fromJSON(e))
        : [],
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
    };
  },

  toJSON(message: CMsgSignOutUpdatePlayerChallenge): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    if (message.completed) {
      obj.completed = message.completed.map((e) =>
        e ? CMsgSignOutUpdatePlayerChallenge_Challenge.toJSON(e) : undefined
      );
    } else {
      obj.completed = [];
    }
    if (message.rerolled) {
      obj.rerolled = message.rerolled.map((e) => e ? CMsgSignOutUpdatePlayerChallenge_Challenge.toJSON(e) : undefined);
    } else {
      obj.rerolled = [];
    }
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    return obj;
  },
};

function createBaseCMsgSignOutUpdatePlayerChallenge_Challenge(): CMsgSignOutUpdatePlayerChallenge_Challenge {
  return { eventId: 0, slotId: 0, sequenceId: 0, progress: 0, challengeRank: 0 };
}

export const CMsgSignOutUpdatePlayerChallenge_Challenge = {
  encode(message: CMsgSignOutUpdatePlayerChallenge_Challenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.slotId !== 0) {
      writer.uint32(16).uint32(message.slotId);
    }
    if (message.sequenceId !== 0) {
      writer.uint32(24).uint32(message.sequenceId);
    }
    if (message.progress !== 0) {
      writer.uint32(32).uint32(message.progress);
    }
    if (message.challengeRank !== 0) {
      writer.uint32(40).uint32(message.challengeRank);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutUpdatePlayerChallenge_Challenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutUpdatePlayerChallenge_Challenge();
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

          message.slotId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.sequenceId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.progress = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.challengeRank = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutUpdatePlayerChallenge_Challenge {
    return {
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
      sequenceId: isSet(object.sequenceId) ? Number(object.sequenceId) : 0,
      progress: isSet(object.progress) ? Number(object.progress) : 0,
      challengeRank: isSet(object.challengeRank) ? Number(object.challengeRank) : 0,
    };
  },

  toJSON(message: CMsgSignOutUpdatePlayerChallenge_Challenge): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.slotId !== undefined && (obj.slotId = Math.round(message.slotId));
    message.sequenceId !== undefined && (obj.sequenceId = Math.round(message.sequenceId));
    message.progress !== undefined && (obj.progress = Math.round(message.progress));
    message.challengeRank !== undefined && (obj.challengeRank = Math.round(message.challengeRank));
    return obj;
  },
};

function createBaseCMsgServerToGCRerollPlayerChallenge(): CMsgServerToGCRerollPlayerChallenge {
  return { accountId: 0, rerollMsg: undefined };
}

export const CMsgServerToGCRerollPlayerChallenge = {
  encode(message: CMsgServerToGCRerollPlayerChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.rerollMsg !== undefined) {
      CMsgClientToGCRerollPlayerChallenge.encode(message.rerollMsg, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCRerollPlayerChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCRerollPlayerChallenge();
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

          message.rerollMsg = CMsgClientToGCRerollPlayerChallenge.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCRerollPlayerChallenge {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      rerollMsg: isSet(object.rerollMsg) ? CMsgClientToGCRerollPlayerChallenge.fromJSON(object.rerollMsg) : undefined,
    };
  },

  toJSON(message: CMsgServerToGCRerollPlayerChallenge): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.rerollMsg !== undefined &&
      (obj.rerollMsg = message.rerollMsg ? CMsgClientToGCRerollPlayerChallenge.toJSON(message.rerollMsg) : undefined);
    return obj;
  },
};

function createBaseCMsgSpendWager(): CMsgSpendWager {
  return { players: [], eventId: 0, timestamp: 0, matchId: "0", serverSteamId: "0" };
}

export const CMsgSpendWager = {
  encode(message: CMsgSpendWager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.players) {
      CMsgSpendWager_Player.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).uint32(message.timestamp);
    }
    if (message.matchId !== "0") {
      writer.uint32(32).uint64(message.matchId);
    }
    if (message.serverSteamId !== "0") {
      writer.uint32(40).uint64(message.serverSteamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSpendWager {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSpendWager();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.players.push(CMsgSpendWager_Player.decode(reader, reader.uint32()));
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

          message.timestamp = reader.uint32();
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

          message.serverSteamId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSpendWager {
    return {
      players: Array.isArray(object?.players) ? object.players.map((e: any) => CMsgSpendWager_Player.fromJSON(e)) : [],
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      serverSteamId: isSet(object.serverSteamId) ? String(object.serverSteamId) : "0",
    };
  },

  toJSON(message: CMsgSpendWager): unknown {
    const obj: any = {};
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgSpendWager_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.serverSteamId !== undefined && (obj.serverSteamId = message.serverSteamId);
    return obj;
  },
};

function createBaseCMsgSpendWager_Player(): CMsgSpendWager_Player {
  return { accountId: 0, wager: 0, wagerTokenItemId: "0" };
}

export const CMsgSpendWager_Player = {
  encode(message: CMsgSpendWager_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.wager !== 0) {
      writer.uint32(16).uint32(message.wager);
    }
    if (message.wagerTokenItemId !== "0") {
      writer.uint32(24).uint64(message.wagerTokenItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSpendWager_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSpendWager_Player();
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

          message.wager = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.wagerTokenItemId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSpendWager_Player {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      wager: isSet(object.wager) ? Number(object.wager) : 0,
      wagerTokenItemId: isSet(object.wagerTokenItemId) ? String(object.wagerTokenItemId) : "0",
    };
  },

  toJSON(message: CMsgSpendWager_Player): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.wager !== undefined && (obj.wager = Math.round(message.wager));
    message.wagerTokenItemId !== undefined && (obj.wagerTokenItemId = message.wagerTokenItemId);
    return obj;
  },
};

function createBaseCMsgSignOutXPCoins(): CMsgSignOutXPCoins {
  return { players: [], eventId: 0, matchId: "0", timestamp: 0 };
}

export const CMsgSignOutXPCoins = {
  encode(message: CMsgSignOutXPCoins, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.players) {
      CMsgSignOutXPCoins_Player.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    if (message.matchId !== "0") {
      writer.uint32(24).uint64(message.matchId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(32).uint32(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutXPCoins {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutXPCoins();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.players.push(CMsgSignOutXPCoins_Player.decode(reader, reader.uint32()));
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

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutXPCoins {
    return {
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgSignOutXPCoins_Player.fromJSON(e))
        : [],
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: CMsgSignOutXPCoins): unknown {
    const obj: any = {};
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgSignOutXPCoins_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },
};

function createBaseCMsgSignOutXPCoins_Player(): CMsgSignOutXPCoins_Player {
  return { accountId: 0, xpGained: 0, coinsSpent: 0, wagerTokenItemId: "0", rankWager: 0, wagerStreak: 0 };
}

export const CMsgSignOutXPCoins_Player = {
  encode(message: CMsgSignOutXPCoins_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.xpGained !== 0) {
      writer.uint32(16).uint32(message.xpGained);
    }
    if (message.coinsSpent !== 0) {
      writer.uint32(24).uint32(message.coinsSpent);
    }
    if (message.wagerTokenItemId !== "0") {
      writer.uint32(32).uint64(message.wagerTokenItemId);
    }
    if (message.rankWager !== 0) {
      writer.uint32(40).uint32(message.rankWager);
    }
    if (message.wagerStreak !== 0) {
      writer.uint32(48).uint32(message.wagerStreak);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutXPCoins_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutXPCoins_Player();
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

          message.xpGained = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.coinsSpent = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.wagerTokenItemId = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.rankWager = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.wagerStreak = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutXPCoins_Player {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      xpGained: isSet(object.xpGained) ? Number(object.xpGained) : 0,
      coinsSpent: isSet(object.coinsSpent) ? Number(object.coinsSpent) : 0,
      wagerTokenItemId: isSet(object.wagerTokenItemId) ? String(object.wagerTokenItemId) : "0",
      rankWager: isSet(object.rankWager) ? Number(object.rankWager) : 0,
      wagerStreak: isSet(object.wagerStreak) ? Number(object.wagerStreak) : 0,
    };
  },

  toJSON(message: CMsgSignOutXPCoins_Player): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.xpGained !== undefined && (obj.xpGained = Math.round(message.xpGained));
    message.coinsSpent !== undefined && (obj.coinsSpent = Math.round(message.coinsSpent));
    message.wagerTokenItemId !== undefined && (obj.wagerTokenItemId = message.wagerTokenItemId);
    message.rankWager !== undefined && (obj.rankWager = Math.round(message.rankWager));
    message.wagerStreak !== undefined && (obj.wagerStreak = Math.round(message.wagerStreak));
    return obj;
  },
};

function createBaseCMsgSignOutBounties(): CMsgSignOutBounties {
  return { bounties: [], eventId: 0, matchId: "0", timestamp: 0 };
}

export const CMsgSignOutBounties = {
  encode(message: CMsgSignOutBounties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bounties) {
      CMsgSignOutBounties_Bounty.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    if (message.matchId !== "0") {
      writer.uint32(24).uint64(message.matchId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(32).uint32(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutBounties {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutBounties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.bounties.push(CMsgSignOutBounties_Bounty.decode(reader, reader.uint32()));
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

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutBounties {
    return {
      bounties: Array.isArray(object?.bounties)
        ? object.bounties.map((e: any) => CMsgSignOutBounties_Bounty.fromJSON(e))
        : [],
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: CMsgSignOutBounties): unknown {
    const obj: any = {};
    if (message.bounties) {
      obj.bounties = message.bounties.map((e) => e ? CMsgSignOutBounties_Bounty.toJSON(e) : undefined);
    } else {
      obj.bounties = [];
    }
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },
};

function createBaseCMsgSignOutBounties_Bounty(): CMsgSignOutBounties_Bounty {
  return { issuerAccountId: 0, completerAccountId: 0, targetAccountId: 0 };
}

export const CMsgSignOutBounties_Bounty = {
  encode(message: CMsgSignOutBounties_Bounty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuerAccountId !== 0) {
      writer.uint32(8).uint32(message.issuerAccountId);
    }
    if (message.completerAccountId !== 0) {
      writer.uint32(16).uint32(message.completerAccountId);
    }
    if (message.targetAccountId !== 0) {
      writer.uint32(24).uint32(message.targetAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutBounties_Bounty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutBounties_Bounty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.issuerAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.completerAccountId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
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

  fromJSON(object: any): CMsgSignOutBounties_Bounty {
    return {
      issuerAccountId: isSet(object.issuerAccountId) ? Number(object.issuerAccountId) : 0,
      completerAccountId: isSet(object.completerAccountId) ? Number(object.completerAccountId) : 0,
      targetAccountId: isSet(object.targetAccountId) ? Number(object.targetAccountId) : 0,
    };
  },

  toJSON(message: CMsgSignOutBounties_Bounty): unknown {
    const obj: any = {};
    message.issuerAccountId !== undefined && (obj.issuerAccountId = Math.round(message.issuerAccountId));
    message.completerAccountId !== undefined && (obj.completerAccountId = Math.round(message.completerAccountId));
    message.targetAccountId !== undefined && (obj.targetAccountId = Math.round(message.targetAccountId));
    return obj;
  },
};

function createBaseCMsgSignOutCommunityGoalProgress(): CMsgSignOutCommunityGoalProgress {
  return { eventId: 0, eventIncrements: [] };
}

export const CMsgSignOutCommunityGoalProgress = {
  encode(message: CMsgSignOutCommunityGoalProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    for (const v of message.eventIncrements) {
      CMsgSignOutCommunityGoalProgress_EventGoalIncrement.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutCommunityGoalProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutCommunityGoalProgress();
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
          if (tag != 18) {
            break;
          }

          message.eventIncrements.push(
            CMsgSignOutCommunityGoalProgress_EventGoalIncrement.decode(reader, reader.uint32()),
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

  fromJSON(object: any): CMsgSignOutCommunityGoalProgress {
    return {
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      eventIncrements: Array.isArray(object?.eventIncrements)
        ? object.eventIncrements.map((e: any) => CMsgSignOutCommunityGoalProgress_EventGoalIncrement.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSignOutCommunityGoalProgress): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    if (message.eventIncrements) {
      obj.eventIncrements = message.eventIncrements.map((e) =>
        e ? CMsgSignOutCommunityGoalProgress_EventGoalIncrement.toJSON(e) : undefined
      );
    } else {
      obj.eventIncrements = [];
    }
    return obj;
  },
};

function createBaseCMsgSignOutCommunityGoalProgress_EventGoalIncrement(): CMsgSignOutCommunityGoalProgress_EventGoalIncrement {
  return { eventGoalId: 0, incrementAmount: 0 };
}

export const CMsgSignOutCommunityGoalProgress_EventGoalIncrement = {
  encode(
    message: CMsgSignOutCommunityGoalProgress_EventGoalIncrement,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.eventGoalId !== 0) {
      writer.uint32(8).uint32(message.eventGoalId);
    }
    if (message.incrementAmount !== 0) {
      writer.uint32(16).uint32(message.incrementAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutCommunityGoalProgress_EventGoalIncrement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutCommunityGoalProgress_EventGoalIncrement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventGoalId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.incrementAmount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutCommunityGoalProgress_EventGoalIncrement {
    return {
      eventGoalId: isSet(object.eventGoalId) ? Number(object.eventGoalId) : 0,
      incrementAmount: isSet(object.incrementAmount) ? Number(object.incrementAmount) : 0,
    };
  },

  toJSON(message: CMsgSignOutCommunityGoalProgress_EventGoalIncrement): unknown {
    const obj: any = {};
    message.eventGoalId !== undefined && (obj.eventGoalId = Math.round(message.eventGoalId));
    message.incrementAmount !== undefined && (obj.incrementAmount = Math.round(message.incrementAmount));
    return obj;
  },
};

function createBaseCMsgServerToGCCloseCompendiumInGamePredictionVoting(): CMsgServerToGCCloseCompendiumInGamePredictionVoting {
  return { matchId: "0", hltvDelay: 0, leagueId: 0 };
}

export const CMsgServerToGCCloseCompendiumInGamePredictionVoting = {
  encode(
    message: CMsgServerToGCCloseCompendiumInGamePredictionVoting,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.hltvDelay !== 0) {
      writer.uint32(16).uint32(message.hltvDelay);
    }
    if (message.leagueId !== 0) {
      writer.uint32(24).uint32(message.leagueId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCCloseCompendiumInGamePredictionVoting {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCCloseCompendiumInGamePredictionVoting();
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

          message.hltvDelay = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCCloseCompendiumInGamePredictionVoting {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      hltvDelay: isSet(object.hltvDelay) ? Number(object.hltvDelay) : 0,
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
    };
  },

  toJSON(message: CMsgServerToGCCloseCompendiumInGamePredictionVoting): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.hltvDelay !== undefined && (obj.hltvDelay = Math.round(message.hltvDelay));
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    return obj;
  },
};

function createBaseCMsgServerToGCCloseCompendiumInGamePredictionVotingResponse(): CMsgServerToGCCloseCompendiumInGamePredictionVotingResponse {
  return { result: false };
}

export const CMsgServerToGCCloseCompendiumInGamePredictionVotingResponse = {
  encode(
    message: CMsgServerToGCCloseCompendiumInGamePredictionVotingResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result === true) {
      writer.uint32(8).bool(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCCloseCompendiumInGamePredictionVotingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCCloseCompendiumInGamePredictionVotingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCCloseCompendiumInGamePredictionVotingResponse {
    return { result: isSet(object.result) ? Boolean(object.result) : false };
  },

  toJSON(message: CMsgServerToGCCloseCompendiumInGamePredictionVotingResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },
};

function createBaseCMsgServerToGCCompendiumInGamePredictionResults(): CMsgServerToGCCompendiumInGamePredictionResults {
  return { matchId: "0", results: [], leagueId: 0, leagueNodeId: 0 };
}

export const CMsgServerToGCCompendiumInGamePredictionResults = {
  encode(
    message: CMsgServerToGCCompendiumInGamePredictionResults,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    for (const v of message.results) {
      CMsgServerToGCCompendiumInGamePredictionResults_PredictionResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.leagueId !== 0) {
      writer.uint32(24).uint32(message.leagueId);
    }
    if (message.leagueNodeId !== 0) {
      writer.uint32(32).uint32(message.leagueNodeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCCompendiumInGamePredictionResults {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCCompendiumInGamePredictionResults();
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
          if (tag != 18) {
            break;
          }

          message.results.push(
            CMsgServerToGCCompendiumInGamePredictionResults_PredictionResult.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.leagueNodeId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCCompendiumInGamePredictionResults {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => CMsgServerToGCCompendiumInGamePredictionResults_PredictionResult.fromJSON(e))
        : [],
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      leagueNodeId: isSet(object.leagueNodeId) ? Number(object.leagueNodeId) : 0,
    };
  },

  toJSON(message: CMsgServerToGCCompendiumInGamePredictionResults): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    if (message.results) {
      obj.results = message.results.map((e) =>
        e ? CMsgServerToGCCompendiumInGamePredictionResults_PredictionResult.toJSON(e) : undefined
      );
    } else {
      obj.results = [];
    }
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.leagueNodeId !== undefined && (obj.leagueNodeId = Math.round(message.leagueNodeId));
    return obj;
  },
};

function createBaseCMsgServerToGCCompendiumInGamePredictionResults_PredictionResult(): CMsgServerToGCCompendiumInGamePredictionResults_PredictionResult {
  return { predictionId: 0, predictionValue: 0, predictionValueIsMask: false };
}

export const CMsgServerToGCCompendiumInGamePredictionResults_PredictionResult = {
  encode(
    message: CMsgServerToGCCompendiumInGamePredictionResults_PredictionResult,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.predictionId !== 0) {
      writer.uint32(8).uint32(message.predictionId);
    }
    if (message.predictionValue !== 0) {
      writer.uint32(16).uint32(message.predictionValue);
    }
    if (message.predictionValueIsMask === true) {
      writer.uint32(24).bool(message.predictionValueIsMask);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgServerToGCCompendiumInGamePredictionResults_PredictionResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCCompendiumInGamePredictionResults_PredictionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.predictionId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.predictionValue = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.predictionValueIsMask = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCCompendiumInGamePredictionResults_PredictionResult {
    return {
      predictionId: isSet(object.predictionId) ? Number(object.predictionId) : 0,
      predictionValue: isSet(object.predictionValue) ? Number(object.predictionValue) : 0,
      predictionValueIsMask: isSet(object.predictionValueIsMask) ? Boolean(object.predictionValueIsMask) : false,
    };
  },

  toJSON(message: CMsgServerToGCCompendiumInGamePredictionResults_PredictionResult): unknown {
    const obj: any = {};
    message.predictionId !== undefined && (obj.predictionId = Math.round(message.predictionId));
    message.predictionValue !== undefined && (obj.predictionValue = Math.round(message.predictionValue));
    message.predictionValueIsMask !== undefined && (obj.predictionValueIsMask = message.predictionValueIsMask);
    return obj;
  },
};

function createBaseCMsgServerToGCCompendiumChosenInGamePredictions(): CMsgServerToGCCompendiumChosenInGamePredictions {
  return { matchId: "0", predictionsChosen: [], leagueId: 0 };
}

export const CMsgServerToGCCompendiumChosenInGamePredictions = {
  encode(
    message: CMsgServerToGCCompendiumChosenInGamePredictions,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    for (const v of message.predictionsChosen) {
      CMsgServerToGCCompendiumChosenInGamePredictions_Prediction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.leagueId !== 0) {
      writer.uint32(24).uint32(message.leagueId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCCompendiumChosenInGamePredictions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCCompendiumChosenInGamePredictions();
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
          if (tag != 18) {
            break;
          }

          message.predictionsChosen.push(
            CMsgServerToGCCompendiumChosenInGamePredictions_Prediction.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCCompendiumChosenInGamePredictions {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      predictionsChosen: Array.isArray(object?.predictionsChosen)
        ? object.predictionsChosen.map((e: any) =>
          CMsgServerToGCCompendiumChosenInGamePredictions_Prediction.fromJSON(e)
        )
        : [],
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
    };
  },

  toJSON(message: CMsgServerToGCCompendiumChosenInGamePredictions): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    if (message.predictionsChosen) {
      obj.predictionsChosen = message.predictionsChosen.map((e) =>
        e ? CMsgServerToGCCompendiumChosenInGamePredictions_Prediction.toJSON(e) : undefined
      );
    } else {
      obj.predictionsChosen = [];
    }
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    return obj;
  },
};

function createBaseCMsgServerToGCCompendiumChosenInGamePredictions_Prediction(): CMsgServerToGCCompendiumChosenInGamePredictions_Prediction {
  return { predictionId: 0 };
}

export const CMsgServerToGCCompendiumChosenInGamePredictions_Prediction = {
  encode(
    message: CMsgServerToGCCompendiumChosenInGamePredictions_Prediction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.predictionId !== 0) {
      writer.uint32(8).uint32(message.predictionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCCompendiumChosenInGamePredictions_Prediction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCCompendiumChosenInGamePredictions_Prediction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.predictionId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCCompendiumChosenInGamePredictions_Prediction {
    return { predictionId: isSet(object.predictionId) ? Number(object.predictionId) : 0 };
  },

  toJSON(message: CMsgServerToGCCompendiumChosenInGamePredictions_Prediction): unknown {
    const obj: any = {};
    message.predictionId !== undefined && (obj.predictionId = Math.round(message.predictionId));
    return obj;
  },
};

function createBaseCMsgGCToGCCompendiumInGamePredictionResults(): CMsgGCToGCCompendiumInGamePredictionResults {
  return { results: undefined };
}

export const CMsgGCToGCCompendiumInGamePredictionResults = {
  encode(message: CMsgGCToGCCompendiumInGamePredictionResults, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.results !== undefined) {
      CMsgServerToGCCompendiumInGamePredictionResults.encode(message.results, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCCompendiumInGamePredictionResults {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCCompendiumInGamePredictionResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.results = CMsgServerToGCCompendiumInGamePredictionResults.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToGCCompendiumInGamePredictionResults {
    return {
      results: isSet(object.results)
        ? CMsgServerToGCCompendiumInGamePredictionResults.fromJSON(object.results)
        : undefined,
    };
  },

  toJSON(message: CMsgGCToGCCompendiumInGamePredictionResults): unknown {
    const obj: any = {};
    message.results !== undefined && (obj.results = message.results
      ? CMsgServerToGCCompendiumInGamePredictionResults.toJSON(message.results)
      : undefined);
    return obj;
  },
};

function createBaseCMsgServerToGCMatchPlayerItemPurchaseHistory(): CMsgServerToGCMatchPlayerItemPurchaseHistory {
  return { matchId: "0", mmr: 0, players: [] };
}

export const CMsgServerToGCMatchPlayerItemPurchaseHistory = {
  encode(message: CMsgServerToGCMatchPlayerItemPurchaseHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.mmr !== 0) {
      writer.uint32(16).uint32(message.mmr);
    }
    for (const v of message.players) {
      CMsgServerToGCMatchPlayerItemPurchaseHistory_Player.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCMatchPlayerItemPurchaseHistory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCMatchPlayerItemPurchaseHistory();
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

          message.mmr = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.players.push(CMsgServerToGCMatchPlayerItemPurchaseHistory_Player.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCMatchPlayerItemPurchaseHistory {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      mmr: isSet(object.mmr) ? Number(object.mmr) : 0,
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgServerToGCMatchPlayerItemPurchaseHistory_Player.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgServerToGCMatchPlayerItemPurchaseHistory): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.mmr !== undefined && (obj.mmr = Math.round(message.mmr));
    if (message.players) {
      obj.players = message.players.map((e) =>
        e ? CMsgServerToGCMatchPlayerItemPurchaseHistory_Player.toJSON(e) : undefined
      );
    } else {
      obj.players = [];
    }
    return obj;
  },
};

function createBaseCMsgServerToGCMatchPlayerItemPurchaseHistory_ItemPurchase(): CMsgServerToGCMatchPlayerItemPurchaseHistory_ItemPurchase {
  return { item: 0, gold: 0, netWorth: 0, gameTime: 0, inventoryItems: [], talentsSkilled: [] };
}

export const CMsgServerToGCMatchPlayerItemPurchaseHistory_ItemPurchase = {
  encode(
    message: CMsgServerToGCMatchPlayerItemPurchaseHistory_ItemPurchase,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.item !== 0) {
      writer.uint32(8).int32(message.item);
    }
    if (message.gold !== 0) {
      writer.uint32(16).uint32(message.gold);
    }
    if (message.netWorth !== 0) {
      writer.uint32(24).uint32(message.netWorth);
    }
    if (message.gameTime !== 0) {
      writer.uint32(32).uint32(message.gameTime);
    }
    writer.uint32(42).fork();
    for (const v of message.inventoryItems) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.talentsSkilled) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCMatchPlayerItemPurchaseHistory_ItemPurchase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCMatchPlayerItemPurchaseHistory_ItemPurchase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.item = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gold = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.netWorth = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.gameTime = reader.uint32();
          continue;
        case 5:
          if (tag == 40) {
            message.inventoryItems.push(reader.int32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.inventoryItems.push(reader.int32());
            }

            continue;
          }

          break;
        case 7:
          if (tag == 56) {
            message.talentsSkilled.push(reader.bool());
            continue;
          }

          if (tag == 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.talentsSkilled.push(reader.bool());
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

  fromJSON(object: any): CMsgServerToGCMatchPlayerItemPurchaseHistory_ItemPurchase {
    return {
      item: isSet(object.item) ? Number(object.item) : 0,
      gold: isSet(object.gold) ? Number(object.gold) : 0,
      netWorth: isSet(object.netWorth) ? Number(object.netWorth) : 0,
      gameTime: isSet(object.gameTime) ? Number(object.gameTime) : 0,
      inventoryItems: Array.isArray(object?.inventoryItems) ? object.inventoryItems.map((e: any) => Number(e)) : [],
      talentsSkilled: Array.isArray(object?.talentsSkilled) ? object.talentsSkilled.map((e: any) => Boolean(e)) : [],
    };
  },

  toJSON(message: CMsgServerToGCMatchPlayerItemPurchaseHistory_ItemPurchase): unknown {
    const obj: any = {};
    message.item !== undefined && (obj.item = Math.round(message.item));
    message.gold !== undefined && (obj.gold = Math.round(message.gold));
    message.netWorth !== undefined && (obj.netWorth = Math.round(message.netWorth));
    message.gameTime !== undefined && (obj.gameTime = Math.round(message.gameTime));
    if (message.inventoryItems) {
      obj.inventoryItems = message.inventoryItems.map((e) => Math.round(e));
    } else {
      obj.inventoryItems = [];
    }
    if (message.talentsSkilled) {
      obj.talentsSkilled = message.talentsSkilled.map((e) => e);
    } else {
      obj.talentsSkilled = [];
    }
    return obj;
  },
};

function createBaseCMsgServerToGCMatchPlayerItemPurchaseHistory_Player(): CMsgServerToGCMatchPlayerItemPurchaseHistory_Player {
  return {
    playerSlot: 0,
    accountId: 0,
    heroId: 0,
    alliedHeroIds: [],
    enemyHeroIds: [],
    itemPurchases: [],
    lane: 0,
    isWinner: false,
  };
}

export const CMsgServerToGCMatchPlayerItemPurchaseHistory_Player = {
  encode(
    message: CMsgServerToGCMatchPlayerItemPurchaseHistory_Player,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playerSlot !== 0) {
      writer.uint32(8).uint32(message.playerSlot);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    if (message.heroId !== 0) {
      writer.uint32(24).uint32(message.heroId);
    }
    writer.uint32(34).fork();
    for (const v of message.alliedHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.enemyHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.itemPurchases) {
      CMsgServerToGCMatchPlayerItemPurchaseHistory_ItemPurchase.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.lane !== 0) {
      writer.uint32(56).uint32(message.lane);
    }
    if (message.isWinner === true) {
      writer.uint32(64).bool(message.isWinner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCMatchPlayerItemPurchaseHistory_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCMatchPlayerItemPurchaseHistory_Player();
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
          if (tag != 16) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 4:
          if (tag == 32) {
            message.alliedHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.alliedHeroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 5:
          if (tag == 40) {
            message.enemyHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enemyHeroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 6:
          if (tag != 50) {
            break;
          }

          message.itemPurchases.push(
            CMsgServerToGCMatchPlayerItemPurchaseHistory_ItemPurchase.decode(reader, reader.uint32()),
          );
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.lane = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.isWinner = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCMatchPlayerItemPurchaseHistory_Player {
    return {
      playerSlot: isSet(object.playerSlot) ? Number(object.playerSlot) : 0,
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      alliedHeroIds: Array.isArray(object?.alliedHeroIds) ? object.alliedHeroIds.map((e: any) => Number(e)) : [],
      enemyHeroIds: Array.isArray(object?.enemyHeroIds) ? object.enemyHeroIds.map((e: any) => Number(e)) : [],
      itemPurchases: Array.isArray(object?.itemPurchases)
        ? object.itemPurchases.map((e: any) => CMsgServerToGCMatchPlayerItemPurchaseHistory_ItemPurchase.fromJSON(e))
        : [],
      lane: isSet(object.lane) ? Number(object.lane) : 0,
      isWinner: isSet(object.isWinner) ? Boolean(object.isWinner) : false,
    };
  },

  toJSON(message: CMsgServerToGCMatchPlayerItemPurchaseHistory_Player): unknown {
    const obj: any = {};
    message.playerSlot !== undefined && (obj.playerSlot = Math.round(message.playerSlot));
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    if (message.alliedHeroIds) {
      obj.alliedHeroIds = message.alliedHeroIds.map((e) => Math.round(e));
    } else {
      obj.alliedHeroIds = [];
    }
    if (message.enemyHeroIds) {
      obj.enemyHeroIds = message.enemyHeroIds.map((e) => Math.round(e));
    } else {
      obj.enemyHeroIds = [];
    }
    if (message.itemPurchases) {
      obj.itemPurchases = message.itemPurchases.map((e) =>
        e ? CMsgServerToGCMatchPlayerItemPurchaseHistory_ItemPurchase.toJSON(e) : undefined
      );
    } else {
      obj.itemPurchases = [];
    }
    message.lane !== undefined && (obj.lane = Math.round(message.lane));
    message.isWinner !== undefined && (obj.isWinner = message.isWinner);
    return obj;
  },
};

function createBaseCMsgServerToGCMatchPlayerNeutralItemEquipHistory(): CMsgServerToGCMatchPlayerNeutralItemEquipHistory {
  return { matchId: "0", players: [] };
}

export const CMsgServerToGCMatchPlayerNeutralItemEquipHistory = {
  encode(
    message: CMsgServerToGCMatchPlayerNeutralItemEquipHistory,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    for (const v of message.players) {
      CMsgServerToGCMatchPlayerNeutralItemEquipHistory_Player.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCMatchPlayerNeutralItemEquipHistory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCMatchPlayerNeutralItemEquipHistory();
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
          if (tag != 18) {
            break;
          }

          message.players.push(CMsgServerToGCMatchPlayerNeutralItemEquipHistory_Player.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCMatchPlayerNeutralItemEquipHistory {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgServerToGCMatchPlayerNeutralItemEquipHistory_Player.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgServerToGCMatchPlayerNeutralItemEquipHistory): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    if (message.players) {
      obj.players = message.players.map((e) =>
        e ? CMsgServerToGCMatchPlayerNeutralItemEquipHistory_Player.toJSON(e) : undefined
      );
    } else {
      obj.players = [];
    }
    return obj;
  },
};

function createBaseCMsgServerToGCMatchPlayerNeutralItemEquipHistory_ItemEquip(): CMsgServerToGCMatchPlayerNeutralItemEquipHistory_ItemEquip {
  return { item: 0, gameTime: 0, inventoryItems: [], talentsSkilled: [], availableNeutralItems: [] };
}

export const CMsgServerToGCMatchPlayerNeutralItemEquipHistory_ItemEquip = {
  encode(
    message: CMsgServerToGCMatchPlayerNeutralItemEquipHistory_ItemEquip,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.item !== 0) {
      writer.uint32(8).int32(message.item);
    }
    if (message.gameTime !== 0) {
      writer.uint32(16).uint32(message.gameTime);
    }
    writer.uint32(26).fork();
    for (const v of message.inventoryItems) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.talentsSkilled) {
      writer.bool(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.availableNeutralItems) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCMatchPlayerNeutralItemEquipHistory_ItemEquip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCMatchPlayerNeutralItemEquipHistory_ItemEquip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.item = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gameTime = reader.uint32();
          continue;
        case 3:
          if (tag == 24) {
            message.inventoryItems.push(reader.int32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.inventoryItems.push(reader.int32());
            }

            continue;
          }

          break;
        case 4:
          if (tag == 32) {
            message.talentsSkilled.push(reader.bool());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.talentsSkilled.push(reader.bool());
            }

            continue;
          }

          break;
        case 5:
          if (tag == 40) {
            message.availableNeutralItems.push(reader.int32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.availableNeutralItems.push(reader.int32());
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

  fromJSON(object: any): CMsgServerToGCMatchPlayerNeutralItemEquipHistory_ItemEquip {
    return {
      item: isSet(object.item) ? Number(object.item) : 0,
      gameTime: isSet(object.gameTime) ? Number(object.gameTime) : 0,
      inventoryItems: Array.isArray(object?.inventoryItems) ? object.inventoryItems.map((e: any) => Number(e)) : [],
      talentsSkilled: Array.isArray(object?.talentsSkilled) ? object.talentsSkilled.map((e: any) => Boolean(e)) : [],
      availableNeutralItems: Array.isArray(object?.availableNeutralItems)
        ? object.availableNeutralItems.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CMsgServerToGCMatchPlayerNeutralItemEquipHistory_ItemEquip): unknown {
    const obj: any = {};
    message.item !== undefined && (obj.item = Math.round(message.item));
    message.gameTime !== undefined && (obj.gameTime = Math.round(message.gameTime));
    if (message.inventoryItems) {
      obj.inventoryItems = message.inventoryItems.map((e) => Math.round(e));
    } else {
      obj.inventoryItems = [];
    }
    if (message.talentsSkilled) {
      obj.talentsSkilled = message.talentsSkilled.map((e) => e);
    } else {
      obj.talentsSkilled = [];
    }
    if (message.availableNeutralItems) {
      obj.availableNeutralItems = message.availableNeutralItems.map((e) => Math.round(e));
    } else {
      obj.availableNeutralItems = [];
    }
    return obj;
  },
};

function createBaseCMsgServerToGCMatchPlayerNeutralItemEquipHistory_Player(): CMsgServerToGCMatchPlayerNeutralItemEquipHistory_Player {
  return { accountId: 0, alliedHeroIds: [], enemyHeroIds: [], itemEquips: [], isWinner: false };
}

export const CMsgServerToGCMatchPlayerNeutralItemEquipHistory_Player = {
  encode(
    message: CMsgServerToGCMatchPlayerNeutralItemEquipHistory_Player,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    writer.uint32(18).fork();
    for (const v of message.alliedHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.enemyHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.itemEquips) {
      CMsgServerToGCMatchPlayerNeutralItemEquipHistory_ItemEquip.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.isWinner === true) {
      writer.uint32(40).bool(message.isWinner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCMatchPlayerNeutralItemEquipHistory_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCMatchPlayerNeutralItemEquipHistory_Player();
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
          if (tag == 16) {
            message.alliedHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.alliedHeroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 3:
          if (tag == 24) {
            message.enemyHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enemyHeroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag != 34) {
            break;
          }

          message.itemEquips.push(
            CMsgServerToGCMatchPlayerNeutralItemEquipHistory_ItemEquip.decode(reader, reader.uint32()),
          );
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.isWinner = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCMatchPlayerNeutralItemEquipHistory_Player {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      alliedHeroIds: Array.isArray(object?.alliedHeroIds) ? object.alliedHeroIds.map((e: any) => Number(e)) : [],
      enemyHeroIds: Array.isArray(object?.enemyHeroIds) ? object.enemyHeroIds.map((e: any) => Number(e)) : [],
      itemEquips: Array.isArray(object?.itemEquips)
        ? object.itemEquips.map((e: any) => CMsgServerToGCMatchPlayerNeutralItemEquipHistory_ItemEquip.fromJSON(e))
        : [],
      isWinner: isSet(object.isWinner) ? Boolean(object.isWinner) : false,
    };
  },

  toJSON(message: CMsgServerToGCMatchPlayerNeutralItemEquipHistory_Player): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    if (message.alliedHeroIds) {
      obj.alliedHeroIds = message.alliedHeroIds.map((e) => Math.round(e));
    } else {
      obj.alliedHeroIds = [];
    }
    if (message.enemyHeroIds) {
      obj.enemyHeroIds = message.enemyHeroIds.map((e) => Math.round(e));
    } else {
      obj.enemyHeroIds = [];
    }
    if (message.itemEquips) {
      obj.itemEquips = message.itemEquips.map((e) =>
        e ? CMsgServerToGCMatchPlayerNeutralItemEquipHistory_ItemEquip.toJSON(e) : undefined
      );
    } else {
      obj.itemEquips = [];
    }
    message.isWinner !== undefined && (obj.isWinner = message.isWinner);
    return obj;
  },
};

function createBaseCMsgServerToGCMatchStateHistory(): CMsgServerToGCMatchStateHistory {
  return { matchId: "0", radiantWon: false, mmr: 0, matchStates: [] };
}

export const CMsgServerToGCMatchStateHistory = {
  encode(message: CMsgServerToGCMatchStateHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.radiantWon === true) {
      writer.uint32(16).bool(message.radiantWon);
    }
    if (message.mmr !== 0) {
      writer.uint32(24).uint32(message.mmr);
    }
    for (const v of message.matchStates) {
      CMsgServerToGCMatchStateHistory_MatchState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCMatchStateHistory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCMatchStateHistory();
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

          message.radiantWon = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.mmr = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.matchStates.push(CMsgServerToGCMatchStateHistory_MatchState.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCMatchStateHistory {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      radiantWon: isSet(object.radiantWon) ? Boolean(object.radiantWon) : false,
      mmr: isSet(object.mmr) ? Number(object.mmr) : 0,
      matchStates: Array.isArray(object?.matchStates)
        ? object.matchStates.map((e: any) => CMsgServerToGCMatchStateHistory_MatchState.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgServerToGCMatchStateHistory): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.radiantWon !== undefined && (obj.radiantWon = message.radiantWon);
    message.mmr !== undefined && (obj.mmr = Math.round(message.mmr));
    if (message.matchStates) {
      obj.matchStates = message.matchStates.map((e) =>
        e ? CMsgServerToGCMatchStateHistory_MatchState.toJSON(e) : undefined
      );
    } else {
      obj.matchStates = [];
    }
    return obj;
  },
};

function createBaseCMsgServerToGCMatchStateHistory_PlayerState(): CMsgServerToGCMatchStateHistory_PlayerState {
  return {
    heroId: 0,
    netWorth: 0,
    level: 0,
    deaths: 0,
    respawnTime: 0,
    hasBuyback: false,
    hasAegis: false,
    hasRapier: false,
    distance: 0,
  };
}

export const CMsgServerToGCMatchStateHistory_PlayerState = {
  encode(message: CMsgServerToGCMatchStateHistory_PlayerState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.netWorth !== 0) {
      writer.uint32(16).uint32(message.netWorth);
    }
    if (message.level !== 0) {
      writer.uint32(24).uint32(message.level);
    }
    if (message.deaths !== 0) {
      writer.uint32(32).uint32(message.deaths);
    }
    if (message.respawnTime !== 0) {
      writer.uint32(40).uint32(message.respawnTime);
    }
    if (message.hasBuyback === true) {
      writer.uint32(48).bool(message.hasBuyback);
    }
    if (message.hasAegis === true) {
      writer.uint32(56).bool(message.hasAegis);
    }
    if (message.hasRapier === true) {
      writer.uint32(64).bool(message.hasRapier);
    }
    if (message.distance !== 0) {
      writer.uint32(72).uint32(message.distance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCMatchStateHistory_PlayerState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCMatchStateHistory_PlayerState();
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

          message.netWorth = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.deaths = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.respawnTime = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.hasBuyback = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.hasAegis = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.hasRapier = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.distance = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCMatchStateHistory_PlayerState {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      netWorth: isSet(object.netWorth) ? Number(object.netWorth) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      respawnTime: isSet(object.respawnTime) ? Number(object.respawnTime) : 0,
      hasBuyback: isSet(object.hasBuyback) ? Boolean(object.hasBuyback) : false,
      hasAegis: isSet(object.hasAegis) ? Boolean(object.hasAegis) : false,
      hasRapier: isSet(object.hasRapier) ? Boolean(object.hasRapier) : false,
      distance: isSet(object.distance) ? Number(object.distance) : 0,
    };
  },

  toJSON(message: CMsgServerToGCMatchStateHistory_PlayerState): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.netWorth !== undefined && (obj.netWorth = Math.round(message.netWorth));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.respawnTime !== undefined && (obj.respawnTime = Math.round(message.respawnTime));
    message.hasBuyback !== undefined && (obj.hasBuyback = message.hasBuyback);
    message.hasAegis !== undefined && (obj.hasAegis = message.hasAegis);
    message.hasRapier !== undefined && (obj.hasRapier = message.hasRapier);
    message.distance !== undefined && (obj.distance = Math.round(message.distance));
    return obj;
  },
};

function createBaseCMsgServerToGCMatchStateHistory_TeamState(): CMsgServerToGCMatchStateHistory_TeamState {
  return {
    team: 0,
    playerStates: [],
    towerHealthPct: [],
    barracksHealthPct: [],
    ancientHealthPct: 0,
    glyphCooldown: 0,
    kills: 0,
    creepDistanceSafe: 0,
    creepDistanceMid: 0,
    creepDistanceOff: 0,
  };
}

export const CMsgServerToGCMatchStateHistory_TeamState = {
  encode(message: CMsgServerToGCMatchStateHistory_TeamState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.team !== 0) {
      writer.uint32(8).uint32(message.team);
    }
    for (const v of message.playerStates) {
      CMsgServerToGCMatchStateHistory_PlayerState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.towerHealthPct) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.barracksHealthPct) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.ancientHealthPct !== 0) {
      writer.uint32(40).uint32(message.ancientHealthPct);
    }
    if (message.glyphCooldown !== 0) {
      writer.uint32(48).uint32(message.glyphCooldown);
    }
    if (message.kills !== 0) {
      writer.uint32(56).uint32(message.kills);
    }
    if (message.creepDistanceSafe !== 0) {
      writer.uint32(64).uint32(message.creepDistanceSafe);
    }
    if (message.creepDistanceMid !== 0) {
      writer.uint32(72).uint32(message.creepDistanceMid);
    }
    if (message.creepDistanceOff !== 0) {
      writer.uint32(80).uint32(message.creepDistanceOff);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCMatchStateHistory_TeamState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCMatchStateHistory_TeamState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.team = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.playerStates.push(CMsgServerToGCMatchStateHistory_PlayerState.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag == 24) {
            message.towerHealthPct.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.towerHealthPct.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag == 32) {
            message.barracksHealthPct.push(reader.uint32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.barracksHealthPct.push(reader.uint32());
            }

            continue;
          }

          break;
        case 5:
          if (tag != 40) {
            break;
          }

          message.ancientHealthPct = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.glyphCooldown = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.kills = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.creepDistanceSafe = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.creepDistanceMid = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.creepDistanceOff = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCMatchStateHistory_TeamState {
    return {
      team: isSet(object.team) ? Number(object.team) : 0,
      playerStates: Array.isArray(object?.playerStates)
        ? object.playerStates.map((e: any) => CMsgServerToGCMatchStateHistory_PlayerState.fromJSON(e))
        : [],
      towerHealthPct: Array.isArray(object?.towerHealthPct) ? object.towerHealthPct.map((e: any) => Number(e)) : [],
      barracksHealthPct: Array.isArray(object?.barracksHealthPct)
        ? object.barracksHealthPct.map((e: any) => Number(e))
        : [],
      ancientHealthPct: isSet(object.ancientHealthPct) ? Number(object.ancientHealthPct) : 0,
      glyphCooldown: isSet(object.glyphCooldown) ? Number(object.glyphCooldown) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      creepDistanceSafe: isSet(object.creepDistanceSafe) ? Number(object.creepDistanceSafe) : 0,
      creepDistanceMid: isSet(object.creepDistanceMid) ? Number(object.creepDistanceMid) : 0,
      creepDistanceOff: isSet(object.creepDistanceOff) ? Number(object.creepDistanceOff) : 0,
    };
  },

  toJSON(message: CMsgServerToGCMatchStateHistory_TeamState): unknown {
    const obj: any = {};
    message.team !== undefined && (obj.team = Math.round(message.team));
    if (message.playerStates) {
      obj.playerStates = message.playerStates.map((e) =>
        e ? CMsgServerToGCMatchStateHistory_PlayerState.toJSON(e) : undefined
      );
    } else {
      obj.playerStates = [];
    }
    if (message.towerHealthPct) {
      obj.towerHealthPct = message.towerHealthPct.map((e) => Math.round(e));
    } else {
      obj.towerHealthPct = [];
    }
    if (message.barracksHealthPct) {
      obj.barracksHealthPct = message.barracksHealthPct.map((e) => Math.round(e));
    } else {
      obj.barracksHealthPct = [];
    }
    message.ancientHealthPct !== undefined && (obj.ancientHealthPct = Math.round(message.ancientHealthPct));
    message.glyphCooldown !== undefined && (obj.glyphCooldown = Math.round(message.glyphCooldown));
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.creepDistanceSafe !== undefined && (obj.creepDistanceSafe = Math.round(message.creepDistanceSafe));
    message.creepDistanceMid !== undefined && (obj.creepDistanceMid = Math.round(message.creepDistanceMid));
    message.creepDistanceOff !== undefined && (obj.creepDistanceOff = Math.round(message.creepDistanceOff));
    return obj;
  },
};

function createBaseCMsgServerToGCMatchStateHistory_MatchState(): CMsgServerToGCMatchStateHistory_MatchState {
  return { gameTime: 0, radiantState: undefined, direState: undefined };
}

export const CMsgServerToGCMatchStateHistory_MatchState = {
  encode(message: CMsgServerToGCMatchStateHistory_MatchState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameTime !== 0) {
      writer.uint32(8).uint32(message.gameTime);
    }
    if (message.radiantState !== undefined) {
      CMsgServerToGCMatchStateHistory_TeamState.encode(message.radiantState, writer.uint32(18).fork()).ldelim();
    }
    if (message.direState !== undefined) {
      CMsgServerToGCMatchStateHistory_TeamState.encode(message.direState, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCMatchStateHistory_MatchState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCMatchStateHistory_MatchState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gameTime = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.radiantState = CMsgServerToGCMatchStateHistory_TeamState.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.direState = CMsgServerToGCMatchStateHistory_TeamState.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCMatchStateHistory_MatchState {
    return {
      gameTime: isSet(object.gameTime) ? Number(object.gameTime) : 0,
      radiantState: isSet(object.radiantState)
        ? CMsgServerToGCMatchStateHistory_TeamState.fromJSON(object.radiantState)
        : undefined,
      direState: isSet(object.direState)
        ? CMsgServerToGCMatchStateHistory_TeamState.fromJSON(object.direState)
        : undefined,
    };
  },

  toJSON(message: CMsgServerToGCMatchStateHistory_MatchState): unknown {
    const obj: any = {};
    message.gameTime !== undefined && (obj.gameTime = Math.round(message.gameTime));
    message.radiantState !== undefined && (obj.radiantState = message.radiantState
      ? CMsgServerToGCMatchStateHistory_TeamState.toJSON(message.radiantState)
      : undefined);
    message.direState !== undefined && (obj.direState = message.direState
      ? CMsgServerToGCMatchStateHistory_TeamState.toJSON(message.direState)
      : undefined);
    return obj;
  },
};

function createBaseCMsgMatchStateSteamMLEntry(): CMsgMatchStateSteamMLEntry {
  return { matchState: undefined, mmr: 0, radiantWon: false };
}

export const CMsgMatchStateSteamMLEntry = {
  encode(message: CMsgMatchStateSteamMLEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchState !== undefined) {
      CMsgServerToGCMatchStateHistory_MatchState.encode(message.matchState, writer.uint32(10).fork()).ldelim();
    }
    if (message.mmr !== 0) {
      writer.uint32(16).uint32(message.mmr);
    }
    if (message.radiantWon === true) {
      writer.uint32(24).bool(message.radiantWon);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMatchStateSteamMLEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMatchStateSteamMLEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.matchState = CMsgServerToGCMatchStateHistory_MatchState.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.mmr = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.radiantWon = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgMatchStateSteamMLEntry {
    return {
      matchState: isSet(object.matchState)
        ? CMsgServerToGCMatchStateHistory_MatchState.fromJSON(object.matchState)
        : undefined,
      mmr: isSet(object.mmr) ? Number(object.mmr) : 0,
      radiantWon: isSet(object.radiantWon) ? Boolean(object.radiantWon) : false,
    };
  },

  toJSON(message: CMsgMatchStateSteamMLEntry): unknown {
    const obj: any = {};
    message.matchState !== undefined && (obj.matchState = message.matchState
      ? CMsgServerToGCMatchStateHistory_MatchState.toJSON(message.matchState)
      : undefined);
    message.mmr !== undefined && (obj.mmr = Math.round(message.mmr));
    message.radiantWon !== undefined && (obj.radiantWon = message.radiantWon);
    return obj;
  },
};

function createBaseCMsgLaneSelectionSteamMLEntry(): CMsgLaneSelectionSteamMLEntry {
  return { heroIds: [], lanes: [] };
}

export const CMsgLaneSelectionSteamMLEntry = {
  encode(message: CMsgLaneSelectionSteamMLEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.heroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.lanes) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLaneSelectionSteamMLEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLaneSelectionSteamMLEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.heroIds.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.heroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 16) {
            message.lanes.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lanes.push(reader.uint32());
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

  fromJSON(object: any): CMsgLaneSelectionSteamMLEntry {
    return {
      heroIds: Array.isArray(object?.heroIds) ? object.heroIds.map((e: any) => Number(e)) : [],
      lanes: Array.isArray(object?.lanes) ? object.lanes.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgLaneSelectionSteamMLEntry): unknown {
    const obj: any = {};
    if (message.heroIds) {
      obj.heroIds = message.heroIds.map((e) => Math.round(e));
    } else {
      obj.heroIds = [];
    }
    if (message.lanes) {
      obj.lanes = message.lanes.map((e) => Math.round(e));
    } else {
      obj.lanes = [];
    }
    return obj;
  },
};

function createBaseCMsgAbilitySelectionSteamMLEntry(): CMsgAbilitySelectionSteamMLEntry {
  return { mmr: 0, heroId: 0, enemyHeroIds: [], lane: 0, abilities: [], selectedAbility: 0 };
}

export const CMsgAbilitySelectionSteamMLEntry = {
  encode(message: CMsgAbilitySelectionSteamMLEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mmr !== 0) {
      writer.uint32(8).uint32(message.mmr);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).uint32(message.heroId);
    }
    writer.uint32(26).fork();
    for (const v of message.enemyHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.lane !== 0) {
      writer.uint32(32).uint32(message.lane);
    }
    writer.uint32(42).fork();
    for (const v of message.abilities) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.selectedAbility !== 0) {
      writer.uint32(48).int32(message.selectedAbility);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAbilitySelectionSteamMLEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAbilitySelectionSteamMLEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.mmr = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 3:
          if (tag == 24) {
            message.enemyHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enemyHeroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag != 32) {
            break;
          }

          message.lane = reader.uint32();
          continue;
        case 5:
          if (tag == 40) {
            message.abilities.push(reader.int32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.abilities.push(reader.int32());
            }

            continue;
          }

          break;
        case 6:
          if (tag != 48) {
            break;
          }

          message.selectedAbility = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgAbilitySelectionSteamMLEntry {
    return {
      mmr: isSet(object.mmr) ? Number(object.mmr) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      enemyHeroIds: Array.isArray(object?.enemyHeroIds) ? object.enemyHeroIds.map((e: any) => Number(e)) : [],
      lane: isSet(object.lane) ? Number(object.lane) : 0,
      abilities: Array.isArray(object?.abilities) ? object.abilities.map((e: any) => Number(e)) : [],
      selectedAbility: isSet(object.selectedAbility) ? Number(object.selectedAbility) : 0,
    };
  },

  toJSON(message: CMsgAbilitySelectionSteamMLEntry): unknown {
    const obj: any = {};
    message.mmr !== undefined && (obj.mmr = Math.round(message.mmr));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    if (message.enemyHeroIds) {
      obj.enemyHeroIds = message.enemyHeroIds.map((e) => Math.round(e));
    } else {
      obj.enemyHeroIds = [];
    }
    message.lane !== undefined && (obj.lane = Math.round(message.lane));
    if (message.abilities) {
      obj.abilities = message.abilities.map((e) => Math.round(e));
    } else {
      obj.abilities = [];
    }
    message.selectedAbility !== undefined && (obj.selectedAbility = Math.round(message.selectedAbility));
    return obj;
  },
};

function createBaseCMsgItemPurchasePregameSteamMLEntry(): CMsgItemPurchasePregameSteamMLEntry {
  return { mmr: 0, lane: 0, balance: 0, heroId: 0, alliedHeroIds: [], enemyHeroIds: [], items: [] };
}

export const CMsgItemPurchasePregameSteamMLEntry = {
  encode(message: CMsgItemPurchasePregameSteamMLEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mmr !== 0) {
      writer.uint32(8).uint32(message.mmr);
    }
    if (message.lane !== 0) {
      writer.uint32(16).uint32(message.lane);
    }
    if (message.balance !== 0) {
      writer.uint32(29).float(message.balance);
    }
    if (message.heroId !== 0) {
      writer.uint32(32).uint32(message.heroId);
    }
    writer.uint32(42).fork();
    for (const v of message.alliedHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.enemyHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.items) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgItemPurchasePregameSteamMLEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgItemPurchasePregameSteamMLEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.mmr = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.lane = reader.uint32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.balance = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 5:
          if (tag == 40) {
            message.alliedHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.alliedHeroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 6:
          if (tag == 48) {
            message.enemyHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enemyHeroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 7:
          if (tag == 56) {
            message.items.push(reader.int32());
            continue;
          }

          if (tag == 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.items.push(reader.int32());
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

  fromJSON(object: any): CMsgItemPurchasePregameSteamMLEntry {
    return {
      mmr: isSet(object.mmr) ? Number(object.mmr) : 0,
      lane: isSet(object.lane) ? Number(object.lane) : 0,
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      alliedHeroIds: Array.isArray(object?.alliedHeroIds) ? object.alliedHeroIds.map((e: any) => Number(e)) : [],
      enemyHeroIds: Array.isArray(object?.enemyHeroIds) ? object.enemyHeroIds.map((e: any) => Number(e)) : [],
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgItemPurchasePregameSteamMLEntry): unknown {
    const obj: any = {};
    message.mmr !== undefined && (obj.mmr = Math.round(message.mmr));
    message.lane !== undefined && (obj.lane = Math.round(message.lane));
    message.balance !== undefined && (obj.balance = message.balance);
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    if (message.alliedHeroIds) {
      obj.alliedHeroIds = message.alliedHeroIds.map((e) => Math.round(e));
    } else {
      obj.alliedHeroIds = [];
    }
    if (message.enemyHeroIds) {
      obj.enemyHeroIds = message.enemyHeroIds.map((e) => Math.round(e));
    } else {
      obj.enemyHeroIds = [];
    }
    if (message.items) {
      obj.items = message.items.map((e) => Math.round(e));
    } else {
      obj.items = [];
    }
    return obj;
  },
};

function createBaseCMsgItemPurchaseSteamMLEntry(): CMsgItemPurchaseSteamMLEntry {
  return { mmr: 0, lane: 0, heroId: 0, alliedHeroIds: [], enemyHeroIds: [], items: [], itemsToBePurchased: [] };
}

export const CMsgItemPurchaseSteamMLEntry = {
  encode(message: CMsgItemPurchaseSteamMLEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mmr !== 0) {
      writer.uint32(8).uint32(message.mmr);
    }
    if (message.lane !== 0) {
      writer.uint32(16).uint32(message.lane);
    }
    if (message.heroId !== 0) {
      writer.uint32(24).uint32(message.heroId);
    }
    writer.uint32(34).fork();
    for (const v of message.alliedHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.enemyHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.items) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.itemsToBePurchased) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgItemPurchaseSteamMLEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgItemPurchaseSteamMLEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.mmr = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.lane = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 4:
          if (tag == 32) {
            message.alliedHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.alliedHeroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 5:
          if (tag == 40) {
            message.enemyHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enemyHeroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 6:
          if (tag == 48) {
            message.items.push(reader.int32());
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.items.push(reader.int32());
            }

            continue;
          }

          break;
        case 7:
          if (tag == 56) {
            message.itemsToBePurchased.push(reader.int32());
            continue;
          }

          if (tag == 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemsToBePurchased.push(reader.int32());
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

  fromJSON(object: any): CMsgItemPurchaseSteamMLEntry {
    return {
      mmr: isSet(object.mmr) ? Number(object.mmr) : 0,
      lane: isSet(object.lane) ? Number(object.lane) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      alliedHeroIds: Array.isArray(object?.alliedHeroIds) ? object.alliedHeroIds.map((e: any) => Number(e)) : [],
      enemyHeroIds: Array.isArray(object?.enemyHeroIds) ? object.enemyHeroIds.map((e: any) => Number(e)) : [],
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Number(e)) : [],
      itemsToBePurchased: Array.isArray(object?.itemsToBePurchased)
        ? object.itemsToBePurchased.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CMsgItemPurchaseSteamMLEntry): unknown {
    const obj: any = {};
    message.mmr !== undefined && (obj.mmr = Math.round(message.mmr));
    message.lane !== undefined && (obj.lane = Math.round(message.lane));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    if (message.alliedHeroIds) {
      obj.alliedHeroIds = message.alliedHeroIds.map((e) => Math.round(e));
    } else {
      obj.alliedHeroIds = [];
    }
    if (message.enemyHeroIds) {
      obj.enemyHeroIds = message.enemyHeroIds.map((e) => Math.round(e));
    } else {
      obj.enemyHeroIds = [];
    }
    if (message.items) {
      obj.items = message.items.map((e) => Math.round(e));
    } else {
      obj.items = [];
    }
    if (message.itemsToBePurchased) {
      obj.itemsToBePurchased = message.itemsToBePurchased.map((e) => Math.round(e));
    } else {
      obj.itemsToBePurchased = [];
    }
    return obj;
  },
};

function createBaseCMsgItemPurchaseSequenceSteamMLEntry(): CMsgItemPurchaseSequenceSteamMLEntry {
  return { mmr: 0, lane: 0, heroId: 0, alliedHeroIds: [], enemyHeroIds: [], items: [], itemToBePurchased: 0 };
}

export const CMsgItemPurchaseSequenceSteamMLEntry = {
  encode(message: CMsgItemPurchaseSequenceSteamMLEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mmr !== 0) {
      writer.uint32(8).uint32(message.mmr);
    }
    if (message.lane !== 0) {
      writer.uint32(16).uint32(message.lane);
    }
    if (message.heroId !== 0) {
      writer.uint32(24).uint32(message.heroId);
    }
    writer.uint32(34).fork();
    for (const v of message.alliedHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.enemyHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.items) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.itemToBePurchased !== 0) {
      writer.uint32(56).int32(message.itemToBePurchased);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgItemPurchaseSequenceSteamMLEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgItemPurchaseSequenceSteamMLEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.mmr = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.lane = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 4:
          if (tag == 32) {
            message.alliedHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.alliedHeroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 5:
          if (tag == 40) {
            message.enemyHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enemyHeroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 6:
          if (tag == 48) {
            message.items.push(reader.int32());
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.items.push(reader.int32());
            }

            continue;
          }

          break;
        case 7:
          if (tag != 56) {
            break;
          }

          message.itemToBePurchased = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgItemPurchaseSequenceSteamMLEntry {
    return {
      mmr: isSet(object.mmr) ? Number(object.mmr) : 0,
      lane: isSet(object.lane) ? Number(object.lane) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      alliedHeroIds: Array.isArray(object?.alliedHeroIds) ? object.alliedHeroIds.map((e: any) => Number(e)) : [],
      enemyHeroIds: Array.isArray(object?.enemyHeroIds) ? object.enemyHeroIds.map((e: any) => Number(e)) : [],
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Number(e)) : [],
      itemToBePurchased: isSet(object.itemToBePurchased) ? Number(object.itemToBePurchased) : 0,
    };
  },

  toJSON(message: CMsgItemPurchaseSequenceSteamMLEntry): unknown {
    const obj: any = {};
    message.mmr !== undefined && (obj.mmr = Math.round(message.mmr));
    message.lane !== undefined && (obj.lane = Math.round(message.lane));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    if (message.alliedHeroIds) {
      obj.alliedHeroIds = message.alliedHeroIds.map((e) => Math.round(e));
    } else {
      obj.alliedHeroIds = [];
    }
    if (message.enemyHeroIds) {
      obj.enemyHeroIds = message.enemyHeroIds.map((e) => Math.round(e));
    } else {
      obj.enemyHeroIds = [];
    }
    if (message.items) {
      obj.items = message.items.map((e) => Math.round(e));
    } else {
      obj.items = [];
    }
    message.itemToBePurchased !== undefined && (obj.itemToBePurchased = Math.round(message.itemToBePurchased));
    return obj;
  },
};

function createBaseCMsgServerToGCCavernCrawlIsHeroActive(): CMsgServerToGCCavernCrawlIsHeroActive {
  return { eventId: 0, accountId: 0, preferredMapVariant: 0, heroId: 0, turboMode: false };
}

export const CMsgServerToGCCavernCrawlIsHeroActive = {
  encode(message: CMsgServerToGCCavernCrawlIsHeroActive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    if (message.preferredMapVariant !== 0) {
      writer.uint32(24).uint32(message.preferredMapVariant);
    }
    if (message.heroId !== 0) {
      writer.uint32(32).uint32(message.heroId);
    }
    if (message.turboMode === true) {
      writer.uint32(40).bool(message.turboMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCCavernCrawlIsHeroActive {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCCavernCrawlIsHeroActive();
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
          if (tag != 16) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.preferredMapVariant = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.turboMode = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCCavernCrawlIsHeroActive {
    return {
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      preferredMapVariant: isSet(object.preferredMapVariant) ? Number(object.preferredMapVariant) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      turboMode: isSet(object.turboMode) ? Boolean(object.turboMode) : false,
    };
  },

  toJSON(message: CMsgServerToGCCavernCrawlIsHeroActive): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.preferredMapVariant !== undefined && (obj.preferredMapVariant = Math.round(message.preferredMapVariant));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.turboMode !== undefined && (obj.turboMode = message.turboMode);
    return obj;
  },
};

function createBaseCMsgServerToGCPlayerChallengeHistory(): CMsgServerToGCPlayerChallengeHistory {
  return { matchId: "0", averageRank: 0, challengeRecords: [] };
}

export const CMsgServerToGCPlayerChallengeHistory = {
  encode(message: CMsgServerToGCPlayerChallengeHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.averageRank !== 0) {
      writer.uint32(16).uint32(message.averageRank);
    }
    for (const v of message.challengeRecords) {
      CMsgServerToGCPlayerChallengeHistory_PlayerChallenge.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCPlayerChallengeHistory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCPlayerChallengeHistory();
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

          message.averageRank = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.challengeRecords.push(
            CMsgServerToGCPlayerChallengeHistory_PlayerChallenge.decode(reader, reader.uint32()),
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

  fromJSON(object: any): CMsgServerToGCPlayerChallengeHistory {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      averageRank: isSet(object.averageRank) ? Number(object.averageRank) : 0,
      challengeRecords: Array.isArray(object?.challengeRecords)
        ? object.challengeRecords.map((e: any) => CMsgServerToGCPlayerChallengeHistory_PlayerChallenge.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgServerToGCPlayerChallengeHistory): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.averageRank !== undefined && (obj.averageRank = Math.round(message.averageRank));
    if (message.challengeRecords) {
      obj.challengeRecords = message.challengeRecords.map((e) =>
        e ? CMsgServerToGCPlayerChallengeHistory_PlayerChallenge.toJSON(e) : undefined
      );
    } else {
      obj.challengeRecords = [];
    }
    return obj;
  },
};

function createBaseCMsgServerToGCPlayerChallengeHistory_PlayerChallenge(): CMsgServerToGCPlayerChallengeHistory_PlayerChallenge {
  return {
    accountId: 0,
    challengeType: 0,
    challengeId1: 0,
    challengeId2: 0,
    progressValueStart: 0,
    progressValueEnd: 0,
    teamWon: false,
    auditData: "0",
    heroId: 0,
    rankCompleted: 0,
  };
}

export const CMsgServerToGCPlayerChallengeHistory_PlayerChallenge = {
  encode(
    message: CMsgServerToGCPlayerChallengeHistory_PlayerChallenge,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.challengeType !== 0) {
      writer.uint32(16).int32(message.challengeType);
    }
    if (message.challengeId1 !== 0) {
      writer.uint32(24).uint32(message.challengeId1);
    }
    if (message.challengeId2 !== 0) {
      writer.uint32(32).uint32(message.challengeId2);
    }
    if (message.progressValueStart !== 0) {
      writer.uint32(40).uint32(message.progressValueStart);
    }
    if (message.progressValueEnd !== 0) {
      writer.uint32(48).uint32(message.progressValueEnd);
    }
    if (message.teamWon === true) {
      writer.uint32(56).bool(message.teamWon);
    }
    if (message.auditData !== "0") {
      writer.uint32(64).uint64(message.auditData);
    }
    if (message.heroId !== 0) {
      writer.uint32(72).uint32(message.heroId);
    }
    if (message.rankCompleted !== 0) {
      writer.uint32(80).uint32(message.rankCompleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCPlayerChallengeHistory_PlayerChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCPlayerChallengeHistory_PlayerChallenge();
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

          message.challengeType = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.challengeId1 = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.challengeId2 = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.progressValueStart = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.progressValueEnd = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.teamWon = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.auditData = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.rankCompleted = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCPlayerChallengeHistory_PlayerChallenge {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      challengeType: isSet(object.challengeType) ? ePlayerChallengeHistoryTypeFromJSON(object.challengeType) : 0,
      challengeId1: isSet(object.challengeId1) ? Number(object.challengeId1) : 0,
      challengeId2: isSet(object.challengeId2) ? Number(object.challengeId2) : 0,
      progressValueStart: isSet(object.progressValueStart) ? Number(object.progressValueStart) : 0,
      progressValueEnd: isSet(object.progressValueEnd) ? Number(object.progressValueEnd) : 0,
      teamWon: isSet(object.teamWon) ? Boolean(object.teamWon) : false,
      auditData: isSet(object.auditData) ? String(object.auditData) : "0",
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      rankCompleted: isSet(object.rankCompleted) ? Number(object.rankCompleted) : 0,
    };
  },

  toJSON(message: CMsgServerToGCPlayerChallengeHistory_PlayerChallenge): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.challengeType !== undefined &&
      (obj.challengeType = ePlayerChallengeHistoryTypeToJSON(message.challengeType));
    message.challengeId1 !== undefined && (obj.challengeId1 = Math.round(message.challengeId1));
    message.challengeId2 !== undefined && (obj.challengeId2 = Math.round(message.challengeId2));
    message.progressValueStart !== undefined && (obj.progressValueStart = Math.round(message.progressValueStart));
    message.progressValueEnd !== undefined && (obj.progressValueEnd = Math.round(message.progressValueEnd));
    message.teamWon !== undefined && (obj.teamWon = message.teamWon);
    message.auditData !== undefined && (obj.auditData = message.auditData);
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.rankCompleted !== undefined && (obj.rankCompleted = Math.round(message.rankCompleted));
    return obj;
  },
};

function createBaseCMsgServerToGCCavernCrawlIsHeroActiveResponse(): CMsgServerToGCCavernCrawlIsHeroActiveResponse {
  return { result: false, mapVariant: 0, potentialWinnings: 0, mapResults: [], potentialPlusShardWinnings: 0 };
}

export const CMsgServerToGCCavernCrawlIsHeroActiveResponse = {
  encode(message: CMsgServerToGCCavernCrawlIsHeroActiveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result === true) {
      writer.uint32(8).bool(message.result);
    }
    if (message.mapVariant !== 0) {
      writer.uint32(40).uint32(message.mapVariant);
    }
    if (message.potentialWinnings !== 0) {
      writer.uint32(16).uint32(message.potentialWinnings);
    }
    for (const v of message.mapResults) {
      CMsgServerToGCCavernCrawlIsHeroActiveResponse_MapResults.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.potentialPlusShardWinnings !== 0) {
      writer.uint32(32).uint32(message.potentialPlusShardWinnings);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCCavernCrawlIsHeroActiveResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCCavernCrawlIsHeroActiveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.mapVariant = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.potentialWinnings = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.mapResults.push(
            CMsgServerToGCCavernCrawlIsHeroActiveResponse_MapResults.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.potentialPlusShardWinnings = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCCavernCrawlIsHeroActiveResponse {
    return {
      result: isSet(object.result) ? Boolean(object.result) : false,
      mapVariant: isSet(object.mapVariant) ? Number(object.mapVariant) : 0,
      potentialWinnings: isSet(object.potentialWinnings) ? Number(object.potentialWinnings) : 0,
      mapResults: Array.isArray(object?.mapResults)
        ? object.mapResults.map((e: any) => CMsgServerToGCCavernCrawlIsHeroActiveResponse_MapResults.fromJSON(e))
        : [],
      potentialPlusShardWinnings: isSet(object.potentialPlusShardWinnings)
        ? Number(object.potentialPlusShardWinnings)
        : 0,
    };
  },

  toJSON(message: CMsgServerToGCCavernCrawlIsHeroActiveResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    message.mapVariant !== undefined && (obj.mapVariant = Math.round(message.mapVariant));
    message.potentialWinnings !== undefined && (obj.potentialWinnings = Math.round(message.potentialWinnings));
    if (message.mapResults) {
      obj.mapResults = message.mapResults.map((e) =>
        e ? CMsgServerToGCCavernCrawlIsHeroActiveResponse_MapResults.toJSON(e) : undefined
      );
    } else {
      obj.mapResults = [];
    }
    message.potentialPlusShardWinnings !== undefined &&
      (obj.potentialPlusShardWinnings = Math.round(message.potentialPlusShardWinnings));
    return obj;
  },
};

function createBaseCMsgServerToGCCavernCrawlIsHeroActiveResponse_MapResults(): CMsgServerToGCCavernCrawlIsHeroActiveResponse_MapResults {
  return { pathIdCompleted: 0, roomIdClaimed: 0 };
}

export const CMsgServerToGCCavernCrawlIsHeroActiveResponse_MapResults = {
  encode(
    message: CMsgServerToGCCavernCrawlIsHeroActiveResponse_MapResults,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pathIdCompleted !== 0) {
      writer.uint32(8).uint32(message.pathIdCompleted);
    }
    if (message.roomIdClaimed !== 0) {
      writer.uint32(16).uint32(message.roomIdClaimed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCCavernCrawlIsHeroActiveResponse_MapResults {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCCavernCrawlIsHeroActiveResponse_MapResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.pathIdCompleted = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.roomIdClaimed = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCCavernCrawlIsHeroActiveResponse_MapResults {
    return {
      pathIdCompleted: isSet(object.pathIdCompleted) ? Number(object.pathIdCompleted) : 0,
      roomIdClaimed: isSet(object.roomIdClaimed) ? Number(object.roomIdClaimed) : 0,
    };
  },

  toJSON(message: CMsgServerToGCCavernCrawlIsHeroActiveResponse_MapResults): unknown {
    const obj: any = {};
    message.pathIdCompleted !== undefined && (obj.pathIdCompleted = Math.round(message.pathIdCompleted));
    message.roomIdClaimed !== undefined && (obj.roomIdClaimed = Math.round(message.roomIdClaimed));
    return obj;
  },
};

function createBaseCMsgGCtoServerTensorflowInstance(): CMsgGCtoServerTensorflowInstance {
  return { serverInstance: 0 };
}

export const CMsgGCtoServerTensorflowInstance = {
  encode(message: CMsgGCtoServerTensorflowInstance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverInstance !== 0) {
      writer.uint32(8).uint32(message.serverInstance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCtoServerTensorflowInstance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCtoServerTensorflowInstance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.serverInstance = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCtoServerTensorflowInstance {
    return { serverInstance: isSet(object.serverInstance) ? Number(object.serverInstance) : 0 };
  },

  toJSON(message: CMsgGCtoServerTensorflowInstance): unknown {
    const obj: any = {};
    message.serverInstance !== undefined && (obj.serverInstance = Math.round(message.serverInstance));
    return obj;
  },
};

function createBaseCMsgDetailedGameStats(): CMsgDetailedGameStats {
  return { minutes: [], playerInfo: [], gameStats: undefined };
}

export const CMsgDetailedGameStats = {
  encode(message: CMsgDetailedGameStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minutes) {
      CMsgDetailedGameStats_MinuteEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.playerInfo) {
      CMsgDetailedGameStats_PlayerInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.gameStats !== undefined) {
      CMsgDetailedGameStats_GameStats.encode(message.gameStats, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDetailedGameStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDetailedGameStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.minutes.push(CMsgDetailedGameStats_MinuteEntry.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.playerInfo.push(CMsgDetailedGameStats_PlayerInfo.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.gameStats = CMsgDetailedGameStats_GameStats.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDetailedGameStats {
    return {
      minutes: Array.isArray(object?.minutes)
        ? object.minutes.map((e: any) => CMsgDetailedGameStats_MinuteEntry.fromJSON(e))
        : [],
      playerInfo: Array.isArray(object?.playerInfo)
        ? object.playerInfo.map((e: any) => CMsgDetailedGameStats_PlayerInfo.fromJSON(e))
        : [],
      gameStats: isSet(object.gameStats) ? CMsgDetailedGameStats_GameStats.fromJSON(object.gameStats) : undefined,
    };
  },

  toJSON(message: CMsgDetailedGameStats): unknown {
    const obj: any = {};
    if (message.minutes) {
      obj.minutes = message.minutes.map((e) => e ? CMsgDetailedGameStats_MinuteEntry.toJSON(e) : undefined);
    } else {
      obj.minutes = [];
    }
    if (message.playerInfo) {
      obj.playerInfo = message.playerInfo.map((e) => e ? CMsgDetailedGameStats_PlayerInfo.toJSON(e) : undefined);
    } else {
      obj.playerInfo = [];
    }
    message.gameStats !== undefined &&
      (obj.gameStats = message.gameStats ? CMsgDetailedGameStats_GameStats.toJSON(message.gameStats) : undefined);
    return obj;
  },
};

function createBaseCMsgDetailedGameStats_PlayerStatEntry(): CMsgDetailedGameStats_PlayerStatEntry {
  return {
    totalEarnedGold: 0,
    totalNetworth: 0,
    level: 0,
    totalDps: 0,
    averageDps: 0,
    abilityDamageOutput: 0,
    baseHealth: 0,
    totalHealth: 0,
    totalMana: 0,
    basePhysicalDamageReductionPct: 0,
    totalPhysicalDamageReductionPct: 0,
    baseAbilityDamageReductionPct: 0,
    totalAbilityDamageReductionPct: 0,
    abilityDamageBlock: 0,
    physicalDamageBlock: 0,
    manaRegen: 0,
    healthRegen: 0,
    physicalMagicDmgPct: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
    goldFromKills: 0,
    goldFromCreeps: 0,
    goldShared: 0,
    xpFromKills: 0,
    xpFromCreeps: 0,
    totalXp: 0,
    abilityCasts: 0,
    itemCasts: 0,
    totalTimeStunned: 0,
    itemCount: 0,
  };
}

export const CMsgDetailedGameStats_PlayerStatEntry = {
  encode(message: CMsgDetailedGameStats_PlayerStatEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalEarnedGold !== 0) {
      writer.uint32(8).uint32(message.totalEarnedGold);
    }
    if (message.totalNetworth !== 0) {
      writer.uint32(16).uint32(message.totalNetworth);
    }
    if (message.level !== 0) {
      writer.uint32(24).uint32(message.level);
    }
    if (message.totalDps !== 0) {
      writer.uint32(32).uint32(message.totalDps);
    }
    if (message.averageDps !== 0) {
      writer.uint32(40).uint32(message.averageDps);
    }
    if (message.abilityDamageOutput !== 0) {
      writer.uint32(48).uint32(message.abilityDamageOutput);
    }
    if (message.baseHealth !== 0) {
      writer.uint32(56).uint32(message.baseHealth);
    }
    if (message.totalHealth !== 0) {
      writer.uint32(64).uint32(message.totalHealth);
    }
    if (message.totalMana !== 0) {
      writer.uint32(72).uint32(message.totalMana);
    }
    if (message.basePhysicalDamageReductionPct !== 0) {
      writer.uint32(85).float(message.basePhysicalDamageReductionPct);
    }
    if (message.totalPhysicalDamageReductionPct !== 0) {
      writer.uint32(93).float(message.totalPhysicalDamageReductionPct);
    }
    if (message.baseAbilityDamageReductionPct !== 0) {
      writer.uint32(101).float(message.baseAbilityDamageReductionPct);
    }
    if (message.totalAbilityDamageReductionPct !== 0) {
      writer.uint32(109).float(message.totalAbilityDamageReductionPct);
    }
    if (message.abilityDamageBlock !== 0) {
      writer.uint32(117).float(message.abilityDamageBlock);
    }
    if (message.physicalDamageBlock !== 0) {
      writer.uint32(125).float(message.physicalDamageBlock);
    }
    if (message.manaRegen !== 0) {
      writer.uint32(128).uint32(message.manaRegen);
    }
    if (message.healthRegen !== 0) {
      writer.uint32(136).uint32(message.healthRegen);
    }
    if (message.physicalMagicDmgPct !== 0) {
      writer.uint32(149).float(message.physicalMagicDmgPct);
    }
    if (message.kills !== 0) {
      writer.uint32(152).uint32(message.kills);
    }
    if (message.deaths !== 0) {
      writer.uint32(160).uint32(message.deaths);
    }
    if (message.assists !== 0) {
      writer.uint32(168).uint32(message.assists);
    }
    if (message.goldFromKills !== 0) {
      writer.uint32(176).uint32(message.goldFromKills);
    }
    if (message.goldFromCreeps !== 0) {
      writer.uint32(184).uint32(message.goldFromCreeps);
    }
    if (message.goldShared !== 0) {
      writer.uint32(192).uint32(message.goldShared);
    }
    if (message.xpFromKills !== 0) {
      writer.uint32(200).uint32(message.xpFromKills);
    }
    if (message.xpFromCreeps !== 0) {
      writer.uint32(208).uint32(message.xpFromCreeps);
    }
    if (message.totalXp !== 0) {
      writer.uint32(216).uint32(message.totalXp);
    }
    if (message.abilityCasts !== 0) {
      writer.uint32(224).uint32(message.abilityCasts);
    }
    if (message.itemCasts !== 0) {
      writer.uint32(232).uint32(message.itemCasts);
    }
    if (message.totalTimeStunned !== 0) {
      writer.uint32(245).float(message.totalTimeStunned);
    }
    if (message.itemCount !== 0) {
      writer.uint32(248).uint32(message.itemCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDetailedGameStats_PlayerStatEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDetailedGameStats_PlayerStatEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.totalEarnedGold = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.totalNetworth = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.totalDps = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.averageDps = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.abilityDamageOutput = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.baseHealth = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.totalHealth = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.totalMana = reader.uint32();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.basePhysicalDamageReductionPct = reader.float();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.totalPhysicalDamageReductionPct = reader.float();
          continue;
        case 12:
          if (tag != 101) {
            break;
          }

          message.baseAbilityDamageReductionPct = reader.float();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.totalAbilityDamageReductionPct = reader.float();
          continue;
        case 14:
          if (tag != 117) {
            break;
          }

          message.abilityDamageBlock = reader.float();
          continue;
        case 15:
          if (tag != 125) {
            break;
          }

          message.physicalDamageBlock = reader.float();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.manaRegen = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.healthRegen = reader.uint32();
          continue;
        case 18:
          if (tag != 149) {
            break;
          }

          message.physicalMagicDmgPct = reader.float();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.kills = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.deaths = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.assists = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.goldFromKills = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.goldFromCreeps = reader.uint32();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.goldShared = reader.uint32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.xpFromKills = reader.uint32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.xpFromCreeps = reader.uint32();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.totalXp = reader.uint32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.abilityCasts = reader.uint32();
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.itemCasts = reader.uint32();
          continue;
        case 30:
          if (tag != 245) {
            break;
          }

          message.totalTimeStunned = reader.float();
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.itemCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDetailedGameStats_PlayerStatEntry {
    return {
      totalEarnedGold: isSet(object.totalEarnedGold) ? Number(object.totalEarnedGold) : 0,
      totalNetworth: isSet(object.totalNetworth) ? Number(object.totalNetworth) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      totalDps: isSet(object.totalDps) ? Number(object.totalDps) : 0,
      averageDps: isSet(object.averageDps) ? Number(object.averageDps) : 0,
      abilityDamageOutput: isSet(object.abilityDamageOutput) ? Number(object.abilityDamageOutput) : 0,
      baseHealth: isSet(object.baseHealth) ? Number(object.baseHealth) : 0,
      totalHealth: isSet(object.totalHealth) ? Number(object.totalHealth) : 0,
      totalMana: isSet(object.totalMana) ? Number(object.totalMana) : 0,
      basePhysicalDamageReductionPct: isSet(object.basePhysicalDamageReductionPct)
        ? Number(object.basePhysicalDamageReductionPct)
        : 0,
      totalPhysicalDamageReductionPct: isSet(object.totalPhysicalDamageReductionPct)
        ? Number(object.totalPhysicalDamageReductionPct)
        : 0,
      baseAbilityDamageReductionPct: isSet(object.baseAbilityDamageReductionPct)
        ? Number(object.baseAbilityDamageReductionPct)
        : 0,
      totalAbilityDamageReductionPct: isSet(object.totalAbilityDamageReductionPct)
        ? Number(object.totalAbilityDamageReductionPct)
        : 0,
      abilityDamageBlock: isSet(object.abilityDamageBlock) ? Number(object.abilityDamageBlock) : 0,
      physicalDamageBlock: isSet(object.physicalDamageBlock) ? Number(object.physicalDamageBlock) : 0,
      manaRegen: isSet(object.manaRegen) ? Number(object.manaRegen) : 0,
      healthRegen: isSet(object.healthRegen) ? Number(object.healthRegen) : 0,
      physicalMagicDmgPct: isSet(object.physicalMagicDmgPct) ? Number(object.physicalMagicDmgPct) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      assists: isSet(object.assists) ? Number(object.assists) : 0,
      goldFromKills: isSet(object.goldFromKills) ? Number(object.goldFromKills) : 0,
      goldFromCreeps: isSet(object.goldFromCreeps) ? Number(object.goldFromCreeps) : 0,
      goldShared: isSet(object.goldShared) ? Number(object.goldShared) : 0,
      xpFromKills: isSet(object.xpFromKills) ? Number(object.xpFromKills) : 0,
      xpFromCreeps: isSet(object.xpFromCreeps) ? Number(object.xpFromCreeps) : 0,
      totalXp: isSet(object.totalXp) ? Number(object.totalXp) : 0,
      abilityCasts: isSet(object.abilityCasts) ? Number(object.abilityCasts) : 0,
      itemCasts: isSet(object.itemCasts) ? Number(object.itemCasts) : 0,
      totalTimeStunned: isSet(object.totalTimeStunned) ? Number(object.totalTimeStunned) : 0,
      itemCount: isSet(object.itemCount) ? Number(object.itemCount) : 0,
    };
  },

  toJSON(message: CMsgDetailedGameStats_PlayerStatEntry): unknown {
    const obj: any = {};
    message.totalEarnedGold !== undefined && (obj.totalEarnedGold = Math.round(message.totalEarnedGold));
    message.totalNetworth !== undefined && (obj.totalNetworth = Math.round(message.totalNetworth));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.totalDps !== undefined && (obj.totalDps = Math.round(message.totalDps));
    message.averageDps !== undefined && (obj.averageDps = Math.round(message.averageDps));
    message.abilityDamageOutput !== undefined && (obj.abilityDamageOutput = Math.round(message.abilityDamageOutput));
    message.baseHealth !== undefined && (obj.baseHealth = Math.round(message.baseHealth));
    message.totalHealth !== undefined && (obj.totalHealth = Math.round(message.totalHealth));
    message.totalMana !== undefined && (obj.totalMana = Math.round(message.totalMana));
    message.basePhysicalDamageReductionPct !== undefined &&
      (obj.basePhysicalDamageReductionPct = message.basePhysicalDamageReductionPct);
    message.totalPhysicalDamageReductionPct !== undefined &&
      (obj.totalPhysicalDamageReductionPct = message.totalPhysicalDamageReductionPct);
    message.baseAbilityDamageReductionPct !== undefined &&
      (obj.baseAbilityDamageReductionPct = message.baseAbilityDamageReductionPct);
    message.totalAbilityDamageReductionPct !== undefined &&
      (obj.totalAbilityDamageReductionPct = message.totalAbilityDamageReductionPct);
    message.abilityDamageBlock !== undefined && (obj.abilityDamageBlock = message.abilityDamageBlock);
    message.physicalDamageBlock !== undefined && (obj.physicalDamageBlock = message.physicalDamageBlock);
    message.manaRegen !== undefined && (obj.manaRegen = Math.round(message.manaRegen));
    message.healthRegen !== undefined && (obj.healthRegen = Math.round(message.healthRegen));
    message.physicalMagicDmgPct !== undefined && (obj.physicalMagicDmgPct = message.physicalMagicDmgPct);
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.assists !== undefined && (obj.assists = Math.round(message.assists));
    message.goldFromKills !== undefined && (obj.goldFromKills = Math.round(message.goldFromKills));
    message.goldFromCreeps !== undefined && (obj.goldFromCreeps = Math.round(message.goldFromCreeps));
    message.goldShared !== undefined && (obj.goldShared = Math.round(message.goldShared));
    message.xpFromKills !== undefined && (obj.xpFromKills = Math.round(message.xpFromKills));
    message.xpFromCreeps !== undefined && (obj.xpFromCreeps = Math.round(message.xpFromCreeps));
    message.totalXp !== undefined && (obj.totalXp = Math.round(message.totalXp));
    message.abilityCasts !== undefined && (obj.abilityCasts = Math.round(message.abilityCasts));
    message.itemCasts !== undefined && (obj.itemCasts = Math.round(message.itemCasts));
    message.totalTimeStunned !== undefined && (obj.totalTimeStunned = message.totalTimeStunned);
    message.itemCount !== undefined && (obj.itemCount = Math.round(message.itemCount));
    return obj;
  },
};

function createBaseCMsgDetailedGameStats_GameStats(): CMsgDetailedGameStats_GameStats {
  return { towerDeathTimeT1: 0, towerDeathTimeT2: 0, towerDeathTimeT3: 0 };
}

export const CMsgDetailedGameStats_GameStats = {
  encode(message: CMsgDetailedGameStats_GameStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.towerDeathTimeT1 !== 0) {
      writer.uint32(8).uint32(message.towerDeathTimeT1);
    }
    if (message.towerDeathTimeT2 !== 0) {
      writer.uint32(16).uint32(message.towerDeathTimeT2);
    }
    if (message.towerDeathTimeT3 !== 0) {
      writer.uint32(24).uint32(message.towerDeathTimeT3);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDetailedGameStats_GameStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDetailedGameStats_GameStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.towerDeathTimeT1 = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.towerDeathTimeT2 = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.towerDeathTimeT3 = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDetailedGameStats_GameStats {
    return {
      towerDeathTimeT1: isSet(object.towerDeathTimeT1) ? Number(object.towerDeathTimeT1) : 0,
      towerDeathTimeT2: isSet(object.towerDeathTimeT2) ? Number(object.towerDeathTimeT2) : 0,
      towerDeathTimeT3: isSet(object.towerDeathTimeT3) ? Number(object.towerDeathTimeT3) : 0,
    };
  },

  toJSON(message: CMsgDetailedGameStats_GameStats): unknown {
    const obj: any = {};
    message.towerDeathTimeT1 !== undefined && (obj.towerDeathTimeT1 = Math.round(message.towerDeathTimeT1));
    message.towerDeathTimeT2 !== undefined && (obj.towerDeathTimeT2 = Math.round(message.towerDeathTimeT2));
    message.towerDeathTimeT3 !== undefined && (obj.towerDeathTimeT3 = Math.round(message.towerDeathTimeT3));
    return obj;
  },
};

function createBaseCMsgDetailedGameStats_MinuteEntry(): CMsgDetailedGameStats_MinuteEntry {
  return { minute: 0, stats: [] };
}

export const CMsgDetailedGameStats_MinuteEntry = {
  encode(message: CMsgDetailedGameStats_MinuteEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minute !== 0) {
      writer.uint32(8).uint32(message.minute);
    }
    for (const v of message.stats) {
      CMsgDetailedGameStats_PlayerStatEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDetailedGameStats_MinuteEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDetailedGameStats_MinuteEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.minute = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.stats.push(CMsgDetailedGameStats_PlayerStatEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDetailedGameStats_MinuteEntry {
    return {
      minute: isSet(object.minute) ? Number(object.minute) : 0,
      stats: Array.isArray(object?.stats)
        ? object.stats.map((e: any) => CMsgDetailedGameStats_PlayerStatEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDetailedGameStats_MinuteEntry): unknown {
    const obj: any = {};
    message.minute !== undefined && (obj.minute = Math.round(message.minute));
    if (message.stats) {
      obj.stats = message.stats.map((e) => e ? CMsgDetailedGameStats_PlayerStatEntry.toJSON(e) : undefined);
    } else {
      obj.stats = [];
    }
    return obj;
  },
};

function createBaseCMsgDetailedGameStats_PlayerInfo(): CMsgDetailedGameStats_PlayerInfo {
  return { accountId: 0, heroId: 0, playerSlot: 0 };
}

export const CMsgDetailedGameStats_PlayerInfo = {
  encode(message: CMsgDetailedGameStats_PlayerInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).uint32(message.heroId);
    }
    if (message.playerSlot !== 0) {
      writer.uint32(24).uint32(message.playerSlot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDetailedGameStats_PlayerInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDetailedGameStats_PlayerInfo();
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

          message.heroId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.playerSlot = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDetailedGameStats_PlayerInfo {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      playerSlot: isSet(object.playerSlot) ? Number(object.playerSlot) : 0,
    };
  },

  toJSON(message: CMsgDetailedGameStats_PlayerInfo): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.playerSlot !== undefined && (obj.playerSlot = Math.round(message.playerSlot));
    return obj;
  },
};

function createBaseCMsgNeutralItemStats(): CMsgNeutralItemStats {
  return { neutralItems: [] };
}

export const CMsgNeutralItemStats = {
  encode(message: CMsgNeutralItemStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.neutralItems) {
      CMsgNeutralItemStats_NeutralItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNeutralItemStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNeutralItemStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.neutralItems.push(CMsgNeutralItemStats_NeutralItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgNeutralItemStats {
    return {
      neutralItems: Array.isArray(object?.neutralItems)
        ? object.neutralItems.map((e: any) => CMsgNeutralItemStats_NeutralItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgNeutralItemStats): unknown {
    const obj: any = {};
    if (message.neutralItems) {
      obj.neutralItems = message.neutralItems.map((e) => e ? CMsgNeutralItemStats_NeutralItem.toJSON(e) : undefined);
    } else {
      obj.neutralItems = [];
    }
    return obj;
  },
};

function createBaseCMsgNeutralItemStats_NeutralItem(): CMsgNeutralItemStats_NeutralItem {
  return { itemId: 0, timeDropped: 0, team: 0, timeLastEquipped: 0, timeLastUnequipped: 0, durationEquipped: 0 };
}

export const CMsgNeutralItemStats_NeutralItem = {
  encode(message: CMsgNeutralItemStats_NeutralItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== 0) {
      writer.uint32(8).int32(message.itemId);
    }
    if (message.timeDropped !== 0) {
      writer.uint32(16).uint32(message.timeDropped);
    }
    if (message.team !== 0) {
      writer.uint32(24).uint32(message.team);
    }
    if (message.timeLastEquipped !== 0) {
      writer.uint32(32).uint32(message.timeLastEquipped);
    }
    if (message.timeLastUnequipped !== 0) {
      writer.uint32(40).uint32(message.timeLastUnequipped);
    }
    if (message.durationEquipped !== 0) {
      writer.uint32(48).uint32(message.durationEquipped);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNeutralItemStats_NeutralItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNeutralItemStats_NeutralItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.timeDropped = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.team = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.timeLastEquipped = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.timeLastUnequipped = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.durationEquipped = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgNeutralItemStats_NeutralItem {
    return {
      itemId: isSet(object.itemId) ? Number(object.itemId) : 0,
      timeDropped: isSet(object.timeDropped) ? Number(object.timeDropped) : 0,
      team: isSet(object.team) ? Number(object.team) : 0,
      timeLastEquipped: isSet(object.timeLastEquipped) ? Number(object.timeLastEquipped) : 0,
      timeLastUnequipped: isSet(object.timeLastUnequipped) ? Number(object.timeLastUnequipped) : 0,
      durationEquipped: isSet(object.durationEquipped) ? Number(object.durationEquipped) : 0,
    };
  },

  toJSON(message: CMsgNeutralItemStats_NeutralItem): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = Math.round(message.itemId));
    message.timeDropped !== undefined && (obj.timeDropped = Math.round(message.timeDropped));
    message.team !== undefined && (obj.team = Math.round(message.team));
    message.timeLastEquipped !== undefined && (obj.timeLastEquipped = Math.round(message.timeLastEquipped));
    message.timeLastUnequipped !== undefined && (obj.timeLastUnequipped = Math.round(message.timeLastUnequipped));
    message.durationEquipped !== undefined && (obj.durationEquipped = Math.round(message.durationEquipped));
    return obj;
  },
};

function createBaseCMsgGCToServerLobbyHeroBanRates(): CMsgGCToServerLobbyHeroBanRates {
  return { banData: [] };
}

export const CMsgGCToServerLobbyHeroBanRates = {
  encode(message: CMsgGCToServerLobbyHeroBanRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.banData) {
      CMsgGCToServerLobbyHeroBanRates_HeroBanEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerLobbyHeroBanRates {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerLobbyHeroBanRates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.banData.push(CMsgGCToServerLobbyHeroBanRates_HeroBanEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToServerLobbyHeroBanRates {
    return {
      banData: Array.isArray(object?.banData)
        ? object.banData.map((e: any) => CMsgGCToServerLobbyHeroBanRates_HeroBanEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGCToServerLobbyHeroBanRates): unknown {
    const obj: any = {};
    if (message.banData) {
      obj.banData = message.banData.map((e) => e ? CMsgGCToServerLobbyHeroBanRates_HeroBanEntry.toJSON(e) : undefined);
    } else {
      obj.banData = [];
    }
    return obj;
  },
};

function createBaseCMsgGCToServerLobbyHeroBanRates_HeroBanEntry(): CMsgGCToServerLobbyHeroBanRates_HeroBanEntry {
  return { heroId: 0, banCount: 0, pickCount: 0 };
}

export const CMsgGCToServerLobbyHeroBanRates_HeroBanEntry = {
  encode(message: CMsgGCToServerLobbyHeroBanRates_HeroBanEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.banCount !== 0) {
      writer.uint32(16).uint32(message.banCount);
    }
    if (message.pickCount !== 0) {
      writer.uint32(24).uint32(message.pickCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerLobbyHeroBanRates_HeroBanEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerLobbyHeroBanRates_HeroBanEntry();
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

          message.banCount = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.pickCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToServerLobbyHeroBanRates_HeroBanEntry {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      banCount: isSet(object.banCount) ? Number(object.banCount) : 0,
      pickCount: isSet(object.pickCount) ? Number(object.pickCount) : 0,
    };
  },

  toJSON(message: CMsgGCToServerLobbyHeroBanRates_HeroBanEntry): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.banCount !== undefined && (obj.banCount = Math.round(message.banCount));
    message.pickCount !== undefined && (obj.pickCount = Math.round(message.pickCount));
    return obj;
  },
};

function createBaseCMsgSignOutGuildContractProgress(): CMsgSignOutGuildContractProgress {
  return { playerContracts: [] };
}

export const CMsgSignOutGuildContractProgress = {
  encode(message: CMsgSignOutGuildContractProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.playerContracts) {
      CMsgSignOutGuildContractProgress_PlayerContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutGuildContractProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutGuildContractProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playerContracts.push(CMsgSignOutGuildContractProgress_PlayerContract.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutGuildContractProgress {
    return {
      playerContracts: Array.isArray(object?.playerContracts)
        ? object.playerContracts.map((e: any) => CMsgSignOutGuildContractProgress_PlayerContract.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSignOutGuildContractProgress): unknown {
    const obj: any = {};
    if (message.playerContracts) {
      obj.playerContracts = message.playerContracts.map((e) =>
        e ? CMsgSignOutGuildContractProgress_PlayerContract.toJSON(e) : undefined
      );
    } else {
      obj.playerContracts = [];
    }
    return obj;
  },
};

function createBaseCMsgSignOutGuildContractProgress_CompletedGuildEventContracts(): CMsgSignOutGuildContractProgress_CompletedGuildEventContracts {
  return { guildId: 0, eventId: 0, contracts: [] };
}

export const CMsgSignOutGuildContractProgress_CompletedGuildEventContracts = {
  encode(
    message: CMsgSignOutGuildContractProgress_CompletedGuildEventContracts,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).uint32(message.eventId);
    }
    writer.uint32(26).fork();
    for (const v of message.contracts) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgSignOutGuildContractProgress_CompletedGuildEventContracts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutGuildContractProgress_CompletedGuildEventContracts();
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

          message.eventId = reader.uint32();
          continue;
        case 3:
          if (tag == 24) {
            message.contracts.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.contracts.push(longToString(reader.uint64() as Long));
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

  fromJSON(object: any): CMsgSignOutGuildContractProgress_CompletedGuildEventContracts {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgSignOutGuildContractProgress_CompletedGuildEventContracts): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e);
    } else {
      obj.contracts = [];
    }
    return obj;
  },
};

function createBaseCMsgSignOutGuildContractProgress_PlayerContract(): CMsgSignOutGuildContractProgress_PlayerContract {
  return { accountId: 0, completedContracts: [] };
}

export const CMsgSignOutGuildContractProgress_PlayerContract = {
  encode(
    message: CMsgSignOutGuildContractProgress_PlayerContract,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    for (const v of message.completedContracts) {
      CMsgSignOutGuildContractProgress_CompletedGuildEventContracts.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutGuildContractProgress_PlayerContract {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutGuildContractProgress_PlayerContract();
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

          message.completedContracts.push(
            CMsgSignOutGuildContractProgress_CompletedGuildEventContracts.decode(reader, reader.uint32()),
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

  fromJSON(object: any): CMsgSignOutGuildContractProgress_PlayerContract {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      completedContracts: Array.isArray(object?.completedContracts)
        ? object.completedContracts.map((e: any) =>
          CMsgSignOutGuildContractProgress_CompletedGuildEventContracts.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CMsgSignOutGuildContractProgress_PlayerContract): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    if (message.completedContracts) {
      obj.completedContracts = message.completedContracts.map((e) =>
        e ? CMsgSignOutGuildContractProgress_CompletedGuildEventContracts.toJSON(e) : undefined
      );
    } else {
      obj.completedContracts = [];
    }
    return obj;
  },
};

function createBaseCMsgSignOutGuildChallengeProgress(): CMsgSignOutGuildChallengeProgress {
  return { guildChallengesProgresses: [] };
}

export const CMsgSignOutGuildChallengeProgress = {
  encode(message: CMsgSignOutGuildChallengeProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.guildChallengesProgresses) {
      CMsgSignOutGuildChallengeProgress_ChallengeProgress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutGuildChallengeProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutGuildChallengeProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.guildChallengesProgresses.push(
            CMsgSignOutGuildChallengeProgress_ChallengeProgress.decode(reader, reader.uint32()),
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

  fromJSON(object: any): CMsgSignOutGuildChallengeProgress {
    return {
      guildChallengesProgresses: Array.isArray(object?.guildChallengesProgresses)
        ? object.guildChallengesProgresses.map((e: any) =>
          CMsgSignOutGuildChallengeProgress_ChallengeProgress.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CMsgSignOutGuildChallengeProgress): unknown {
    const obj: any = {};
    if (message.guildChallengesProgresses) {
      obj.guildChallengesProgresses = message.guildChallengesProgresses.map((e) =>
        e ? CMsgSignOutGuildChallengeProgress_ChallengeProgress.toJSON(e) : undefined
      );
    } else {
      obj.guildChallengesProgresses = [];
    }
    return obj;
  },
};

function createBaseCMsgSignOutGuildChallengeProgress_ChallengeProgress(): CMsgSignOutGuildChallengeProgress_ChallengeProgress {
  return {
    guildId: 0,
    eventId: 0,
    challengeInstanceId: 0,
    challengeInstanceTimestamp: 0,
    challengePeriodSerial: 0,
    progress: 0,
    challengeParameter: 0,
  };
}

export const CMsgSignOutGuildChallengeProgress_ChallengeProgress = {
  encode(
    message: CMsgSignOutGuildChallengeProgress_ChallengeProgress,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).uint32(message.eventId);
    }
    if (message.challengeInstanceId !== 0) {
      writer.uint32(24).uint32(message.challengeInstanceId);
    }
    if (message.challengeInstanceTimestamp !== 0) {
      writer.uint32(32).uint32(message.challengeInstanceTimestamp);
    }
    if (message.challengePeriodSerial !== 0) {
      writer.uint32(40).uint32(message.challengePeriodSerial);
    }
    if (message.progress !== 0) {
      writer.uint32(48).uint32(message.progress);
    }
    if (message.challengeParameter !== 0) {
      writer.uint32(56).uint32(message.challengeParameter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutGuildChallengeProgress_ChallengeProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutGuildChallengeProgress_ChallengeProgress();
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

          message.eventId = reader.uint32();
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

          message.challengeInstanceTimestamp = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.challengePeriodSerial = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.progress = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.challengeParameter = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutGuildChallengeProgress_ChallengeProgress {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      challengeInstanceId: isSet(object.challengeInstanceId) ? Number(object.challengeInstanceId) : 0,
      challengeInstanceTimestamp: isSet(object.challengeInstanceTimestamp)
        ? Number(object.challengeInstanceTimestamp)
        : 0,
      challengePeriodSerial: isSet(object.challengePeriodSerial) ? Number(object.challengePeriodSerial) : 0,
      progress: isSet(object.progress) ? Number(object.progress) : 0,
      challengeParameter: isSet(object.challengeParameter) ? Number(object.challengeParameter) : 0,
    };
  },

  toJSON(message: CMsgSignOutGuildChallengeProgress_ChallengeProgress): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    message.challengeInstanceId !== undefined && (obj.challengeInstanceId = Math.round(message.challengeInstanceId));
    message.challengeInstanceTimestamp !== undefined &&
      (obj.challengeInstanceTimestamp = Math.round(message.challengeInstanceTimestamp));
    message.challengePeriodSerial !== undefined &&
      (obj.challengePeriodSerial = Math.round(message.challengePeriodSerial));
    message.progress !== undefined && (obj.progress = Math.round(message.progress));
    message.challengeParameter !== undefined && (obj.challengeParameter = Math.round(message.challengeParameter));
    return obj;
  },
};

function createBaseCMsgSignOutMVPStats(): CMsgSignOutMVPStats {
  return { matchId: "0", gameMode: 0, winningTeam: 0, gameTime: 0, players: [] };
}

export const CMsgSignOutMVPStats = {
  encode(message: CMsgSignOutMVPStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.gameMode !== 0) {
      writer.uint32(16).uint32(message.gameMode);
    }
    if (message.winningTeam !== 0) {
      writer.uint32(24).uint32(message.winningTeam);
    }
    if (message.gameTime !== 0) {
      writer.uint32(37).float(message.gameTime);
    }
    for (const v of message.players) {
      CMsgSignOutMVPStats_Player.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutMVPStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutMVPStats();
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

          message.gameMode = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.winningTeam = reader.uint32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.gameTime = reader.float();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.players.push(CMsgSignOutMVPStats_Player.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutMVPStats {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      gameMode: isSet(object.gameMode) ? Number(object.gameMode) : 0,
      winningTeam: isSet(object.winningTeam) ? Number(object.winningTeam) : 0,
      gameTime: isSet(object.gameTime) ? Number(object.gameTime) : 0,
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgSignOutMVPStats_Player.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSignOutMVPStats): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.gameMode !== undefined && (obj.gameMode = Math.round(message.gameMode));
    message.winningTeam !== undefined && (obj.winningTeam = Math.round(message.winningTeam));
    message.gameTime !== undefined && (obj.gameTime = message.gameTime);
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgSignOutMVPStats_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    return obj;
  },
};

function createBaseCMsgSignOutMVPStats_Player(): CMsgSignOutMVPStats_Player {
  return {
    teamId: 0,
    teamNetworthRank: 0,
    accountId: 0,
    playerSlot: 0,
    rank: 0,
    heroId: 0,
    role: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
    xp: 0,
    netWorth: 0,
    supportGoldSpent: 0,
    wardsPlaced: 0,
    wardsSpottedForDewarding: 0,
    campsStacked: 0,
    lastHits: 0,
    denies: 0,
    buildingDamage: 0,
    otherDamage: 0,
    tripleKills: 0,
    rampages: 0,
    firstBlood: 0,
    killEaterEvents: [],
    highestKillstreak: 0,
  };
}

export const CMsgSignOutMVPStats_Player = {
  encode(message: CMsgSignOutMVPStats_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).uint32(message.teamId);
    }
    if (message.teamNetworthRank !== 0) {
      writer.uint32(16).uint32(message.teamNetworthRank);
    }
    if (message.accountId !== 0) {
      writer.uint32(24).uint32(message.accountId);
    }
    if (message.playerSlot !== 0) {
      writer.uint32(256).uint32(message.playerSlot);
    }
    if (message.rank !== 0) {
      writer.uint32(264).uint32(message.rank);
    }
    if (message.heroId !== 0) {
      writer.uint32(32).uint32(message.heroId);
    }
    if (message.role !== 0) {
      writer.uint32(40).uint32(message.role);
    }
    if (message.kills !== 0) {
      writer.uint32(48).int32(message.kills);
    }
    if (message.deaths !== 0) {
      writer.uint32(56).int32(message.deaths);
    }
    if (message.assists !== 0) {
      writer.uint32(64).int32(message.assists);
    }
    if (message.xp !== 0) {
      writer.uint32(72).int32(message.xp);
    }
    if (message.netWorth !== 0) {
      writer.uint32(80).int32(message.netWorth);
    }
    if (message.supportGoldSpent !== 0) {
      writer.uint32(96).int32(message.supportGoldSpent);
    }
    if (message.wardsPlaced !== 0) {
      writer.uint32(104).int32(message.wardsPlaced);
    }
    if (message.wardsSpottedForDewarding !== 0) {
      writer.uint32(112).int32(message.wardsSpottedForDewarding);
    }
    if (message.campsStacked !== 0) {
      writer.uint32(120).int32(message.campsStacked);
    }
    if (message.lastHits !== 0) {
      writer.uint32(128).int32(message.lastHits);
    }
    if (message.denies !== 0) {
      writer.uint32(136).int32(message.denies);
    }
    if (message.buildingDamage !== 0) {
      writer.uint32(152).int32(message.buildingDamage);
    }
    if (message.otherDamage !== 0) {
      writer.uint32(160).int32(message.otherDamage);
    }
    if (message.tripleKills !== 0) {
      writer.uint32(208).int32(message.tripleKills);
    }
    if (message.rampages !== 0) {
      writer.uint32(224).int32(message.rampages);
    }
    if (message.firstBlood !== 0) {
      writer.uint32(248).int32(message.firstBlood);
    }
    for (const v of message.killEaterEvents) {
      CMsgSignOutMVPStats_Player_KillEaterEvent.encode(v!, writer.uint32(274).fork()).ldelim();
    }
    if (message.highestKillstreak !== 0) {
      writer.uint32(280).uint32(message.highestKillstreak);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutMVPStats_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutMVPStats_Player();
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
          if (tag != 16) {
            break;
          }

          message.teamNetworthRank = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 32:
          if (tag != 256) {
            break;
          }

          message.playerSlot = reader.uint32();
          continue;
        case 33:
          if (tag != 264) {
            break;
          }

          message.rank = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.role = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.kills = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.deaths = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.assists = reader.int32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.xp = reader.int32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.netWorth = reader.int32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.supportGoldSpent = reader.int32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.wardsPlaced = reader.int32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.wardsSpottedForDewarding = reader.int32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.campsStacked = reader.int32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.lastHits = reader.int32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.denies = reader.int32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.buildingDamage = reader.int32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.otherDamage = reader.int32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.tripleKills = reader.int32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.rampages = reader.int32();
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.firstBlood = reader.int32();
          continue;
        case 34:
          if (tag != 274) {
            break;
          }

          message.killEaterEvents.push(CMsgSignOutMVPStats_Player_KillEaterEvent.decode(reader, reader.uint32()));
          continue;
        case 35:
          if (tag != 280) {
            break;
          }

          message.highestKillstreak = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutMVPStats_Player {
    return {
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      teamNetworthRank: isSet(object.teamNetworthRank) ? Number(object.teamNetworthRank) : 0,
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      playerSlot: isSet(object.playerSlot) ? Number(object.playerSlot) : 0,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      role: isSet(object.role) ? Number(object.role) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      assists: isSet(object.assists) ? Number(object.assists) : 0,
      xp: isSet(object.xp) ? Number(object.xp) : 0,
      netWorth: isSet(object.netWorth) ? Number(object.netWorth) : 0,
      supportGoldSpent: isSet(object.supportGoldSpent) ? Number(object.supportGoldSpent) : 0,
      wardsPlaced: isSet(object.wardsPlaced) ? Number(object.wardsPlaced) : 0,
      wardsSpottedForDewarding: isSet(object.wardsSpottedForDewarding) ? Number(object.wardsSpottedForDewarding) : 0,
      campsStacked: isSet(object.campsStacked) ? Number(object.campsStacked) : 0,
      lastHits: isSet(object.lastHits) ? Number(object.lastHits) : 0,
      denies: isSet(object.denies) ? Number(object.denies) : 0,
      buildingDamage: isSet(object.buildingDamage) ? Number(object.buildingDamage) : 0,
      otherDamage: isSet(object.otherDamage) ? Number(object.otherDamage) : 0,
      tripleKills: isSet(object.tripleKills) ? Number(object.tripleKills) : 0,
      rampages: isSet(object.rampages) ? Number(object.rampages) : 0,
      firstBlood: isSet(object.firstBlood) ? Number(object.firstBlood) : 0,
      killEaterEvents: Array.isArray(object?.killEaterEvents)
        ? object.killEaterEvents.map((e: any) => CMsgSignOutMVPStats_Player_KillEaterEvent.fromJSON(e))
        : [],
      highestKillstreak: isSet(object.highestKillstreak) ? Number(object.highestKillstreak) : 0,
    };
  },

  toJSON(message: CMsgSignOutMVPStats_Player): unknown {
    const obj: any = {};
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.teamNetworthRank !== undefined && (obj.teamNetworthRank = Math.round(message.teamNetworthRank));
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.playerSlot !== undefined && (obj.playerSlot = Math.round(message.playerSlot));
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.role !== undefined && (obj.role = Math.round(message.role));
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.assists !== undefined && (obj.assists = Math.round(message.assists));
    message.xp !== undefined && (obj.xp = Math.round(message.xp));
    message.netWorth !== undefined && (obj.netWorth = Math.round(message.netWorth));
    message.supportGoldSpent !== undefined && (obj.supportGoldSpent = Math.round(message.supportGoldSpent));
    message.wardsPlaced !== undefined && (obj.wardsPlaced = Math.round(message.wardsPlaced));
    message.wardsSpottedForDewarding !== undefined &&
      (obj.wardsSpottedForDewarding = Math.round(message.wardsSpottedForDewarding));
    message.campsStacked !== undefined && (obj.campsStacked = Math.round(message.campsStacked));
    message.lastHits !== undefined && (obj.lastHits = Math.round(message.lastHits));
    message.denies !== undefined && (obj.denies = Math.round(message.denies));
    message.buildingDamage !== undefined && (obj.buildingDamage = Math.round(message.buildingDamage));
    message.otherDamage !== undefined && (obj.otherDamage = Math.round(message.otherDamage));
    message.tripleKills !== undefined && (obj.tripleKills = Math.round(message.tripleKills));
    message.rampages !== undefined && (obj.rampages = Math.round(message.rampages));
    message.firstBlood !== undefined && (obj.firstBlood = Math.round(message.firstBlood));
    if (message.killEaterEvents) {
      obj.killEaterEvents = message.killEaterEvents.map((e) =>
        e ? CMsgSignOutMVPStats_Player_KillEaterEvent.toJSON(e) : undefined
      );
    } else {
      obj.killEaterEvents = [];
    }
    message.highestKillstreak !== undefined && (obj.highestKillstreak = Math.round(message.highestKillstreak));
    return obj;
  },
};

function createBaseCMsgSignOutMVPStats_Player_KillEaterEvent(): CMsgSignOutMVPStats_Player_KillEaterEvent {
  return { eventType: 0, amount: 0 };
}

export const CMsgSignOutMVPStats_Player_KillEaterEvent = {
  encode(message: CMsgSignOutMVPStats_Player_KillEaterEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventType !== 0) {
      writer.uint32(8).uint32(message.eventType);
    }
    if (message.amount !== 0) {
      writer.uint32(16).uint32(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutMVPStats_Player_KillEaterEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutMVPStats_Player_KillEaterEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.amount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutMVPStats_Player_KillEaterEvent {
    return {
      eventType: isSet(object.eventType) ? Number(object.eventType) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: CMsgSignOutMVPStats_Player_KillEaterEvent): unknown {
    const obj: any = {};
    message.eventType !== undefined && (obj.eventType = Math.round(message.eventType));
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },
};

function createBaseCMsgGCToServerRecordTrainingData(): CMsgGCToServerRecordTrainingData {
  return { enable: false };
}

export const CMsgGCToServerRecordTrainingData = {
  encode(message: CMsgGCToServerRecordTrainingData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enable === true) {
      writer.uint32(8).bool(message.enable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerRecordTrainingData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerRecordTrainingData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.enable = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToServerRecordTrainingData {
    return { enable: isSet(object.enable) ? Boolean(object.enable) : false };
  },

  toJSON(message: CMsgGCToServerRecordTrainingData): unknown {
    const obj: any = {};
    message.enable !== undefined && (obj.enable = message.enable);
    return obj;
  },
};

function createBaseCMsgServerToGCGetGuildContracts(): CMsgServerToGCGetGuildContracts {
  return { accountIds: [] };
}

export const CMsgServerToGCGetGuildContracts = {
  encode(message: CMsgServerToGCGetGuildContracts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.accountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCGetGuildContracts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCGetGuildContracts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.accountIds.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountIds.push(reader.uint32());
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

  fromJSON(object: any): CMsgServerToGCGetGuildContracts {
    return { accountIds: Array.isArray(object?.accountIds) ? object.accountIds.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CMsgServerToGCGetGuildContracts): unknown {
    const obj: any = {};
    if (message.accountIds) {
      obj.accountIds = message.accountIds.map((e) => Math.round(e));
    } else {
      obj.accountIds = [];
    }
    return obj;
  },
};

function createBaseCMsgServerToGCGetGuildContractsResponse(): CMsgServerToGCGetGuildContractsResponse {
  return { playerContracts: [] };
}

export const CMsgServerToGCGetGuildContractsResponse = {
  encode(message: CMsgServerToGCGetGuildContractsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.playerContracts) {
      CMsgServerToGCGetGuildContractsResponse_Player.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCGetGuildContractsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCGetGuildContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playerContracts.push(CMsgServerToGCGetGuildContractsResponse_Player.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCGetGuildContractsResponse {
    return {
      playerContracts: Array.isArray(object?.playerContracts)
        ? object.playerContracts.map((e: any) => CMsgServerToGCGetGuildContractsResponse_Player.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgServerToGCGetGuildContractsResponse): unknown {
    const obj: any = {};
    if (message.playerContracts) {
      obj.playerContracts = message.playerContracts.map((e) =>
        e ? CMsgServerToGCGetGuildContractsResponse_Player.toJSON(e) : undefined
      );
    } else {
      obj.playerContracts = [];
    }
    return obj;
  },
};

function createBaseCMsgServerToGCGetGuildContractsResponse_ContractDetails(): CMsgServerToGCGetGuildContractsResponse_ContractDetails {
  return { contractId: "0", challengeInstanceId: 0, challengeParameter: 0, contractStars: 0, contractSlot: 0 };
}

export const CMsgServerToGCGetGuildContractsResponse_ContractDetails = {
  encode(
    message: CMsgServerToGCGetGuildContractsResponse_ContractDetails,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.contractId !== "0") {
      writer.uint32(8).uint64(message.contractId);
    }
    if (message.challengeInstanceId !== 0) {
      writer.uint32(16).uint32(message.challengeInstanceId);
    }
    if (message.challengeParameter !== 0) {
      writer.uint32(24).uint32(message.challengeParameter);
    }
    if (message.contractStars !== 0) {
      writer.uint32(32).uint32(message.contractStars);
    }
    if (message.contractSlot !== 0) {
      writer.uint32(40).uint32(message.contractSlot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCGetGuildContractsResponse_ContractDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCGetGuildContractsResponse_ContractDetails();
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

          message.contractStars = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
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

  fromJSON(object: any): CMsgServerToGCGetGuildContractsResponse_ContractDetails {
    return {
      contractId: isSet(object.contractId) ? String(object.contractId) : "0",
      challengeInstanceId: isSet(object.challengeInstanceId) ? Number(object.challengeInstanceId) : 0,
      challengeParameter: isSet(object.challengeParameter) ? Number(object.challengeParameter) : 0,
      contractStars: isSet(object.contractStars) ? Number(object.contractStars) : 0,
      contractSlot: isSet(object.contractSlot) ? Number(object.contractSlot) : 0,
    };
  },

  toJSON(message: CMsgServerToGCGetGuildContractsResponse_ContractDetails): unknown {
    const obj: any = {};
    message.contractId !== undefined && (obj.contractId = message.contractId);
    message.challengeInstanceId !== undefined && (obj.challengeInstanceId = Math.round(message.challengeInstanceId));
    message.challengeParameter !== undefined && (obj.challengeParameter = Math.round(message.challengeParameter));
    message.contractStars !== undefined && (obj.contractStars = Math.round(message.contractStars));
    message.contractSlot !== undefined && (obj.contractSlot = Math.round(message.contractSlot));
    return obj;
  },
};

function createBaseCMsgServerToGCGetGuildContractsResponse_Player(): CMsgServerToGCGetGuildContractsResponse_Player {
  return { accountId: 0, guildId: 0, eventId: 0, contracts: [] };
}

export const CMsgServerToGCGetGuildContractsResponse_Player = {
  encode(
    message: CMsgServerToGCGetGuildContractsResponse_Player,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.guildId !== 0) {
      writer.uint32(16).uint32(message.guildId);
    }
    if (message.eventId !== 0) {
      writer.uint32(24).int32(message.eventId);
    }
    for (const v of message.contracts) {
      CMsgServerToGCGetGuildContractsResponse_ContractDetails.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCGetGuildContractsResponse_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCGetGuildContractsResponse_Player();
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

          message.guildId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.eventId = reader.int32() as any;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.contracts.push(
            CMsgServerToGCGetGuildContractsResponse_ContractDetails.decode(reader, reader.uint32()),
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

  fromJSON(object: any): CMsgServerToGCGetGuildContractsResponse_Player {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      contracts: Array.isArray(object?.contracts)
        ? object.contracts.map((e: any) => CMsgServerToGCGetGuildContractsResponse_ContractDetails.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgServerToGCGetGuildContractsResponse_Player): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) =>
        e ? CMsgServerToGCGetGuildContractsResponse_ContractDetails.toJSON(e) : undefined
      );
    } else {
      obj.contracts = [];
    }
    return obj;
  },
};

function createBaseCMsgMatchDiretideCandy(): CMsgMatchDiretideCandy {
  return { playerCandyData: [], eventId: 0 };
}

export const CMsgMatchDiretideCandy = {
  encode(message: CMsgMatchDiretideCandy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.playerCandyData) {
      CMsgMatchDiretideCandy_PlayerCandy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMatchDiretideCandy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMatchDiretideCandy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playerCandyData.push(CMsgMatchDiretideCandy_PlayerCandy.decode(reader, reader.uint32()));
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

  fromJSON(object: any): CMsgMatchDiretideCandy {
    return {
      playerCandyData: Array.isArray(object?.playerCandyData)
        ? object.playerCandyData.map((e: any) => CMsgMatchDiretideCandy_PlayerCandy.fromJSON(e))
        : [],
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
    };
  },

  toJSON(message: CMsgMatchDiretideCandy): unknown {
    const obj: any = {};
    if (message.playerCandyData) {
      obj.playerCandyData = message.playerCandyData.map((e) =>
        e ? CMsgMatchDiretideCandy_PlayerCandy.toJSON(e) : undefined
      );
    } else {
      obj.playerCandyData = [];
    }
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    return obj;
  },
};

function createBaseCMsgMatchDiretideCandy_CandyDetails(): CMsgMatchDiretideCandy_CandyDetails {
  return { amount: 0, audit: 0 };
}

export const CMsgMatchDiretideCandy_CandyDetails = {
  encode(message: CMsgMatchDiretideCandy_CandyDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint32(message.amount);
    }
    if (message.audit !== 0) {
      writer.uint32(16).uint32(message.audit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMatchDiretideCandy_CandyDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMatchDiretideCandy_CandyDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.amount = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.audit = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgMatchDiretideCandy_CandyDetails {
    return {
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      audit: isSet(object.audit) ? Number(object.audit) : 0,
    };
  },

  toJSON(message: CMsgMatchDiretideCandy_CandyDetails): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.audit !== undefined && (obj.audit = Math.round(message.audit));
    return obj;
  },
};

function createBaseCMsgMatchDiretideCandy_PlayerCandy(): CMsgMatchDiretideCandy_PlayerCandy {
  return { accountId: 0, candyAmount: 0, consumesPeriodicResource: false, candyBreakdown: [] };
}

export const CMsgMatchDiretideCandy_PlayerCandy = {
  encode(message: CMsgMatchDiretideCandy_PlayerCandy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.candyAmount !== 0) {
      writer.uint32(24).uint32(message.candyAmount);
    }
    if (message.consumesPeriodicResource === true) {
      writer.uint32(32).bool(message.consumesPeriodicResource);
    }
    for (const v of message.candyBreakdown) {
      CMsgMatchDiretideCandy_CandyDetails.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMatchDiretideCandy_PlayerCandy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMatchDiretideCandy_PlayerCandy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.candyAmount = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.consumesPeriodicResource = reader.bool();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.candyBreakdown.push(CMsgMatchDiretideCandy_CandyDetails.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgMatchDiretideCandy_PlayerCandy {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      candyAmount: isSet(object.candyAmount) ? Number(object.candyAmount) : 0,
      consumesPeriodicResource: isSet(object.consumesPeriodicResource)
        ? Boolean(object.consumesPeriodicResource)
        : false,
      candyBreakdown: Array.isArray(object?.candyBreakdown)
        ? object.candyBreakdown.map((e: any) => CMsgMatchDiretideCandy_CandyDetails.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgMatchDiretideCandy_PlayerCandy): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.candyAmount !== undefined && (obj.candyAmount = Math.round(message.candyAmount));
    message.consumesPeriodicResource !== undefined && (obj.consumesPeriodicResource = message.consumesPeriodicResource);
    if (message.candyBreakdown) {
      obj.candyBreakdown = message.candyBreakdown.map((e) =>
        e ? CMsgMatchDiretideCandy_CandyDetails.toJSON(e) : undefined
      );
    } else {
      obj.candyBreakdown = [];
    }
    return obj;
  },
};

function createBaseCMsgGCToServerCheerData(): CMsgGCToServerCheerData {
  return { cheerTypes: [] };
}

export const CMsgGCToServerCheerData = {
  encode(message: CMsgGCToServerCheerData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cheerTypes) {
      CMsgGCToServerCheerData_CheerTypeCount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerCheerData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerCheerData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.cheerTypes.push(CMsgGCToServerCheerData_CheerTypeCount.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToServerCheerData {
    return {
      cheerTypes: Array.isArray(object?.cheerTypes)
        ? object.cheerTypes.map((e: any) => CMsgGCToServerCheerData_CheerTypeCount.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGCToServerCheerData): unknown {
    const obj: any = {};
    if (message.cheerTypes) {
      obj.cheerTypes = message.cheerTypes.map((e) => e ? CMsgGCToServerCheerData_CheerTypeCount.toJSON(e) : undefined);
    } else {
      obj.cheerTypes = [];
    }
    return obj;
  },
};

function createBaseCMsgGCToServerCheerData_CheerTypeCount(): CMsgGCToServerCheerData_CheerTypeCount {
  return { cheerType: 0, cheerCount: 0 };
}

export const CMsgGCToServerCheerData_CheerTypeCount = {
  encode(message: CMsgGCToServerCheerData_CheerTypeCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cheerType !== 0) {
      writer.uint32(8).uint32(message.cheerType);
    }
    if (message.cheerCount !== 0) {
      writer.uint32(16).uint32(message.cheerCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerCheerData_CheerTypeCount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerCheerData_CheerTypeCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.cheerType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.cheerCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToServerCheerData_CheerTypeCount {
    return {
      cheerType: isSet(object.cheerType) ? Number(object.cheerType) : 0,
      cheerCount: isSet(object.cheerCount) ? Number(object.cheerCount) : 0,
    };
  },

  toJSON(message: CMsgGCToServerCheerData_CheerTypeCount): unknown {
    const obj: any = {};
    message.cheerType !== undefined && (obj.cheerType = Math.round(message.cheerType));
    message.cheerCount !== undefined && (obj.cheerCount = Math.round(message.cheerCount));
    return obj;
  },
};

function createBaseCMsgCheerConfig(): CMsgCheerConfig {
  return {
    cheersEnabled: false,
    isValidLeagueId: false,
    windowDuration: 0,
    windowBucketCount: 0,
    crowdLevelPushTime: 0,
    crowdLevelLow: 0,
    crowdLevelMedium: 0,
    crowdLevelHigh: 0,
    cheerScaleStart: 0,
    cheerScaleSpeed: 0,
    cheerScalePushMark: 0,
    cheerScalePullMark: 0,
    cheerScalePctOfMaxCpsClamp: 0,
    cheerScaleDampenerValue: 0,
    cheerScaleDampenerLerpTime: 0,
    cheerFactorBronze: 0,
    cheerFactorSilver: 0,
    cheerFactorGold: 0,
  };
}

export const CMsgCheerConfig = {
  encode(message: CMsgCheerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cheersEnabled === true) {
      writer.uint32(8).bool(message.cheersEnabled);
    }
    if (message.isValidLeagueId === true) {
      writer.uint32(16).bool(message.isValidLeagueId);
    }
    if (message.windowDuration !== 0) {
      writer.uint32(29).float(message.windowDuration);
    }
    if (message.windowBucketCount !== 0) {
      writer.uint32(32).uint32(message.windowBucketCount);
    }
    if (message.crowdLevelPushTime !== 0) {
      writer.uint32(53).float(message.crowdLevelPushTime);
    }
    if (message.crowdLevelLow !== 0) {
      writer.uint32(80).uint32(message.crowdLevelLow);
    }
    if (message.crowdLevelMedium !== 0) {
      writer.uint32(88).uint32(message.crowdLevelMedium);
    }
    if (message.crowdLevelHigh !== 0) {
      writer.uint32(96).uint32(message.crowdLevelHigh);
    }
    if (message.cheerScaleStart !== 0) {
      writer.uint32(109).float(message.cheerScaleStart);
    }
    if (message.cheerScaleSpeed !== 0) {
      writer.uint32(117).float(message.cheerScaleSpeed);
    }
    if (message.cheerScalePushMark !== 0) {
      writer.uint32(120).uint32(message.cheerScalePushMark);
    }
    if (message.cheerScalePullMark !== 0) {
      writer.uint32(128).uint32(message.cheerScalePullMark);
    }
    if (message.cheerScalePctOfMaxCpsClamp !== 0) {
      writer.uint32(141).float(message.cheerScalePctOfMaxCpsClamp);
    }
    if (message.cheerScaleDampenerValue !== 0) {
      writer.uint32(173).float(message.cheerScaleDampenerValue);
    }
    if (message.cheerScaleDampenerLerpTime !== 0) {
      writer.uint32(176).uint32(message.cheerScaleDampenerLerpTime);
    }
    if (message.cheerFactorBronze !== 0) {
      writer.uint32(149).float(message.cheerFactorBronze);
    }
    if (message.cheerFactorSilver !== 0) {
      writer.uint32(157).float(message.cheerFactorSilver);
    }
    if (message.cheerFactorGold !== 0) {
      writer.uint32(165).float(message.cheerFactorGold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCheerConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCheerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.cheersEnabled = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isValidLeagueId = reader.bool();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.windowDuration = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.windowBucketCount = reader.uint32();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.crowdLevelPushTime = reader.float();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.crowdLevelLow = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.crowdLevelMedium = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.crowdLevelHigh = reader.uint32();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.cheerScaleStart = reader.float();
          continue;
        case 14:
          if (tag != 117) {
            break;
          }

          message.cheerScaleSpeed = reader.float();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.cheerScalePushMark = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.cheerScalePullMark = reader.uint32();
          continue;
        case 17:
          if (tag != 141) {
            break;
          }

          message.cheerScalePctOfMaxCpsClamp = reader.float();
          continue;
        case 21:
          if (tag != 173) {
            break;
          }

          message.cheerScaleDampenerValue = reader.float();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.cheerScaleDampenerLerpTime = reader.uint32();
          continue;
        case 18:
          if (tag != 149) {
            break;
          }

          message.cheerFactorBronze = reader.float();
          continue;
        case 19:
          if (tag != 157) {
            break;
          }

          message.cheerFactorSilver = reader.float();
          continue;
        case 20:
          if (tag != 165) {
            break;
          }

          message.cheerFactorGold = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgCheerConfig {
    return {
      cheersEnabled: isSet(object.cheersEnabled) ? Boolean(object.cheersEnabled) : false,
      isValidLeagueId: isSet(object.isValidLeagueId) ? Boolean(object.isValidLeagueId) : false,
      windowDuration: isSet(object.windowDuration) ? Number(object.windowDuration) : 0,
      windowBucketCount: isSet(object.windowBucketCount) ? Number(object.windowBucketCount) : 0,
      crowdLevelPushTime: isSet(object.crowdLevelPushTime) ? Number(object.crowdLevelPushTime) : 0,
      crowdLevelLow: isSet(object.crowdLevelLow) ? Number(object.crowdLevelLow) : 0,
      crowdLevelMedium: isSet(object.crowdLevelMedium) ? Number(object.crowdLevelMedium) : 0,
      crowdLevelHigh: isSet(object.crowdLevelHigh) ? Number(object.crowdLevelHigh) : 0,
      cheerScaleStart: isSet(object.cheerScaleStart) ? Number(object.cheerScaleStart) : 0,
      cheerScaleSpeed: isSet(object.cheerScaleSpeed) ? Number(object.cheerScaleSpeed) : 0,
      cheerScalePushMark: isSet(object.cheerScalePushMark) ? Number(object.cheerScalePushMark) : 0,
      cheerScalePullMark: isSet(object.cheerScalePullMark) ? Number(object.cheerScalePullMark) : 0,
      cheerScalePctOfMaxCpsClamp: isSet(object.cheerScalePctOfMaxCpsClamp)
        ? Number(object.cheerScalePctOfMaxCpsClamp)
        : 0,
      cheerScaleDampenerValue: isSet(object.cheerScaleDampenerValue) ? Number(object.cheerScaleDampenerValue) : 0,
      cheerScaleDampenerLerpTime: isSet(object.cheerScaleDampenerLerpTime)
        ? Number(object.cheerScaleDampenerLerpTime)
        : 0,
      cheerFactorBronze: isSet(object.cheerFactorBronze) ? Number(object.cheerFactorBronze) : 0,
      cheerFactorSilver: isSet(object.cheerFactorSilver) ? Number(object.cheerFactorSilver) : 0,
      cheerFactorGold: isSet(object.cheerFactorGold) ? Number(object.cheerFactorGold) : 0,
    };
  },

  toJSON(message: CMsgCheerConfig): unknown {
    const obj: any = {};
    message.cheersEnabled !== undefined && (obj.cheersEnabled = message.cheersEnabled);
    message.isValidLeagueId !== undefined && (obj.isValidLeagueId = message.isValidLeagueId);
    message.windowDuration !== undefined && (obj.windowDuration = message.windowDuration);
    message.windowBucketCount !== undefined && (obj.windowBucketCount = Math.round(message.windowBucketCount));
    message.crowdLevelPushTime !== undefined && (obj.crowdLevelPushTime = message.crowdLevelPushTime);
    message.crowdLevelLow !== undefined && (obj.crowdLevelLow = Math.round(message.crowdLevelLow));
    message.crowdLevelMedium !== undefined && (obj.crowdLevelMedium = Math.round(message.crowdLevelMedium));
    message.crowdLevelHigh !== undefined && (obj.crowdLevelHigh = Math.round(message.crowdLevelHigh));
    message.cheerScaleStart !== undefined && (obj.cheerScaleStart = message.cheerScaleStart);
    message.cheerScaleSpeed !== undefined && (obj.cheerScaleSpeed = message.cheerScaleSpeed);
    message.cheerScalePushMark !== undefined && (obj.cheerScalePushMark = Math.round(message.cheerScalePushMark));
    message.cheerScalePullMark !== undefined && (obj.cheerScalePullMark = Math.round(message.cheerScalePullMark));
    message.cheerScalePctOfMaxCpsClamp !== undefined &&
      (obj.cheerScalePctOfMaxCpsClamp = message.cheerScalePctOfMaxCpsClamp);
    message.cheerScaleDampenerValue !== undefined && (obj.cheerScaleDampenerValue = message.cheerScaleDampenerValue);
    message.cheerScaleDampenerLerpTime !== undefined &&
      (obj.cheerScaleDampenerLerpTime = Math.round(message.cheerScaleDampenerLerpTime));
    message.cheerFactorBronze !== undefined && (obj.cheerFactorBronze = message.cheerFactorBronze);
    message.cheerFactorSilver !== undefined && (obj.cheerFactorSilver = message.cheerFactorSilver);
    message.cheerFactorGold !== undefined && (obj.cheerFactorGold = message.cheerFactorGold);
    return obj;
  },
};

function createBaseCMsgGCToServerCheerConfig(): CMsgGCToServerCheerConfig {
  return { cheerConfig: undefined };
}

export const CMsgGCToServerCheerConfig = {
  encode(message: CMsgGCToServerCheerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cheerConfig !== undefined) {
      CMsgCheerConfig.encode(message.cheerConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerCheerConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerCheerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.cheerConfig = CMsgCheerConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToServerCheerConfig {
    return { cheerConfig: isSet(object.cheerConfig) ? CMsgCheerConfig.fromJSON(object.cheerConfig) : undefined };
  },

  toJSON(message: CMsgGCToServerCheerConfig): unknown {
    const obj: any = {};
    message.cheerConfig !== undefined &&
      (obj.cheerConfig = message.cheerConfig ? CMsgCheerConfig.toJSON(message.cheerConfig) : undefined);
    return obj;
  },
};

function createBaseCMsgServerToGCGetCheerConfig(): CMsgServerToGCGetCheerConfig {
  return { leagueId: 0 };
}

export const CMsgServerToGCGetCheerConfig = {
  encode(message: CMsgServerToGCGetCheerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCGetCheerConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCGetCheerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCGetCheerConfig {
    return { leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0 };
  },

  toJSON(message: CMsgServerToGCGetCheerConfig): unknown {
    const obj: any = {};
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    return obj;
  },
};

function createBaseCMsgServerToGCGetCheerConfigResponse(): CMsgServerToGCGetCheerConfigResponse {
  return { cheerConfig: undefined };
}

export const CMsgServerToGCGetCheerConfigResponse = {
  encode(message: CMsgServerToGCGetCheerConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cheerConfig !== undefined) {
      CMsgCheerConfig.encode(message.cheerConfig, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCGetCheerConfigResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCGetCheerConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.cheerConfig = CMsgCheerConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCGetCheerConfigResponse {
    return { cheerConfig: isSet(object.cheerConfig) ? CMsgCheerConfig.fromJSON(object.cheerConfig) : undefined };
  },

  toJSON(message: CMsgServerToGCGetCheerConfigResponse): unknown {
    const obj: any = {};
    message.cheerConfig !== undefined &&
      (obj.cheerConfig = message.cheerConfig ? CMsgCheerConfig.toJSON(message.cheerConfig) : undefined);
    return obj;
  },
};

function createBaseCMsgGCToServerCheerScalesOverride(): CMsgGCToServerCheerScalesOverride {
  return { scales: [] };
}

export const CMsgGCToServerCheerScalesOverride = {
  encode(message: CMsgGCToServerCheerScalesOverride, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.scales) {
      writer.float(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerCheerScalesOverride {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerCheerScalesOverride();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 13) {
            message.scales.push(reader.float());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.scales.push(reader.float());
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

  fromJSON(object: any): CMsgGCToServerCheerScalesOverride {
    return { scales: Array.isArray(object?.scales) ? object.scales.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CMsgGCToServerCheerScalesOverride): unknown {
    const obj: any = {};
    if (message.scales) {
      obj.scales = message.scales.map((e) => e);
    } else {
      obj.scales = [];
    }
    return obj;
  },
};

function createBaseCMsgGCToServerGetCheerState(): CMsgGCToServerGetCheerState {
  return {};
}

export const CMsgGCToServerGetCheerState = {
  encode(_: CMsgGCToServerGetCheerState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerGetCheerState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerGetCheerState();
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

  fromJSON(_: any): CMsgGCToServerGetCheerState {
    return {};
  },

  toJSON(_: CMsgGCToServerGetCheerState): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgCheerTypeState(): CMsgCheerTypeState {
  return { cheerCounts: [], maxPerSecond: 0, cheerScale: 0, overrideScale: 0 };
}

export const CMsgCheerTypeState = {
  encode(message: CMsgCheerTypeState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.cheerCounts) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.maxPerSecond !== 0) {
      writer.uint32(21).float(message.maxPerSecond);
    }
    if (message.cheerScale !== 0) {
      writer.uint32(29).float(message.cheerScale);
    }
    if (message.overrideScale !== 0) {
      writer.uint32(37).float(message.overrideScale);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCheerTypeState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCheerTypeState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.cheerCounts.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cheerCounts.push(reader.uint32());
            }

            continue;
          }

          break;
        case 2:
          if (tag != 21) {
            break;
          }

          message.maxPerSecond = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.cheerScale = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.overrideScale = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgCheerTypeState {
    return {
      cheerCounts: Array.isArray(object?.cheerCounts) ? object.cheerCounts.map((e: any) => Number(e)) : [],
      maxPerSecond: isSet(object.maxPerSecond) ? Number(object.maxPerSecond) : 0,
      cheerScale: isSet(object.cheerScale) ? Number(object.cheerScale) : 0,
      overrideScale: isSet(object.overrideScale) ? Number(object.overrideScale) : 0,
    };
  },

  toJSON(message: CMsgCheerTypeState): unknown {
    const obj: any = {};
    if (message.cheerCounts) {
      obj.cheerCounts = message.cheerCounts.map((e) => Math.round(e));
    } else {
      obj.cheerCounts = [];
    }
    message.maxPerSecond !== undefined && (obj.maxPerSecond = message.maxPerSecond);
    message.cheerScale !== undefined && (obj.cheerScale = message.cheerScale);
    message.overrideScale !== undefined && (obj.overrideScale = message.overrideScale);
    return obj;
  },
};

function createBaseCMsgCheerState(): CMsgCheerState {
  return { cheerTypes: [], radiantCrowdLevel: 0, direCrowdLevel: 0 };
}

export const CMsgCheerState = {
  encode(message: CMsgCheerState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cheerTypes) {
      CMsgCheerTypeState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.radiantCrowdLevel !== 0) {
      writer.uint32(16).uint32(message.radiantCrowdLevel);
    }
    if (message.direCrowdLevel !== 0) {
      writer.uint32(24).uint32(message.direCrowdLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCheerState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCheerState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.cheerTypes.push(CMsgCheerTypeState.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.radiantCrowdLevel = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.direCrowdLevel = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgCheerState {
    return {
      cheerTypes: Array.isArray(object?.cheerTypes)
        ? object.cheerTypes.map((e: any) => CMsgCheerTypeState.fromJSON(e))
        : [],
      radiantCrowdLevel: isSet(object.radiantCrowdLevel) ? Number(object.radiantCrowdLevel) : 0,
      direCrowdLevel: isSet(object.direCrowdLevel) ? Number(object.direCrowdLevel) : 0,
    };
  },

  toJSON(message: CMsgCheerState): unknown {
    const obj: any = {};
    if (message.cheerTypes) {
      obj.cheerTypes = message.cheerTypes.map((e) => e ? CMsgCheerTypeState.toJSON(e) : undefined);
    } else {
      obj.cheerTypes = [];
    }
    message.radiantCrowdLevel !== undefined && (obj.radiantCrowdLevel = Math.round(message.radiantCrowdLevel));
    message.direCrowdLevel !== undefined && (obj.direCrowdLevel = Math.round(message.direCrowdLevel));
    return obj;
  },
};

function createBaseCMsgServerToGCReportCheerState(): CMsgServerToGCReportCheerState {
  return { cheerConfig: undefined, cheerState: undefined };
}

export const CMsgServerToGCReportCheerState = {
  encode(message: CMsgServerToGCReportCheerState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cheerConfig !== undefined) {
      CMsgCheerConfig.encode(message.cheerConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.cheerState !== undefined) {
      CMsgCheerState.encode(message.cheerState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCReportCheerState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCReportCheerState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.cheerConfig = CMsgCheerConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.cheerState = CMsgCheerState.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCReportCheerState {
    return {
      cheerConfig: isSet(object.cheerConfig) ? CMsgCheerConfig.fromJSON(object.cheerConfig) : undefined,
      cheerState: isSet(object.cheerState) ? CMsgCheerState.fromJSON(object.cheerState) : undefined,
    };
  },

  toJSON(message: CMsgServerToGCReportCheerState): unknown {
    const obj: any = {};
    message.cheerConfig !== undefined &&
      (obj.cheerConfig = message.cheerConfig ? CMsgCheerConfig.toJSON(message.cheerConfig) : undefined);
    message.cheerState !== undefined &&
      (obj.cheerState = message.cheerState ? CMsgCheerState.toJSON(message.cheerState) : undefined);
    return obj;
  },
};

function createBaseCMsgServerToGCGetStickerHeroes(): CMsgServerToGCGetStickerHeroes {
  return { accountIds: [] };
}

export const CMsgServerToGCGetStickerHeroes = {
  encode(message: CMsgServerToGCGetStickerHeroes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.accountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCGetStickerHeroes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCGetStickerHeroes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.accountIds.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountIds.push(reader.uint32());
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

  fromJSON(object: any): CMsgServerToGCGetStickerHeroes {
    return { accountIds: Array.isArray(object?.accountIds) ? object.accountIds.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CMsgServerToGCGetStickerHeroes): unknown {
    const obj: any = {};
    if (message.accountIds) {
      obj.accountIds = message.accountIds.map((e) => Math.round(e));
    } else {
      obj.accountIds = [];
    }
    return obj;
  },
};

function createBaseCMsgServerToGCGetStickerHeroesResponse(): CMsgServerToGCGetStickerHeroesResponse {
  return { players: [] };
}

export const CMsgServerToGCGetStickerHeroesResponse = {
  encode(message: CMsgServerToGCGetStickerHeroesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.players) {
      CMsgServerToGCGetStickerHeroesResponse_Player.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCGetStickerHeroesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCGetStickerHeroesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.players.push(CMsgServerToGCGetStickerHeroesResponse_Player.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCGetStickerHeroesResponse {
    return {
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgServerToGCGetStickerHeroesResponse_Player.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgServerToGCGetStickerHeroesResponse): unknown {
    const obj: any = {};
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgServerToGCGetStickerHeroesResponse_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    return obj;
  },
};

function createBaseCMsgServerToGCGetStickerHeroesResponse_Player(): CMsgServerToGCGetStickerHeroesResponse_Player {
  return { accountId: 0, stickers: undefined };
}

export const CMsgServerToGCGetStickerHeroesResponse_Player = {
  encode(message: CMsgServerToGCGetStickerHeroesResponse_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.stickers !== undefined) {
      CMsgStickerHeroes.encode(message.stickers, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCGetStickerHeroesResponse_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCGetStickerHeroesResponse_Player();
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

          message.stickers = CMsgStickerHeroes.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgServerToGCGetStickerHeroesResponse_Player {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      stickers: isSet(object.stickers) ? CMsgStickerHeroes.fromJSON(object.stickers) : undefined,
    };
  },

  toJSON(message: CMsgServerToGCGetStickerHeroesResponse_Player): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.stickers !== undefined &&
      (obj.stickers = message.stickers ? CMsgStickerHeroes.toJSON(message.stickers) : undefined);
    return obj;
  },
};

function createBaseCMsgGCToServerSetSteamLearnDisable(): CMsgGCToServerSetSteamLearnDisable {
  return {};
}

export const CMsgGCToServerSetSteamLearnDisable = {
  encode(_: CMsgGCToServerSetSteamLearnDisable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerSetSteamLearnDisable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerSetSteamLearnDisable();
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

  fromJSON(_: any): CMsgGCToServerSetSteamLearnDisable {
    return {};
  },

  toJSON(_: CMsgGCToServerSetSteamLearnDisable): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgGCToServerSetSteamLearnInferencing(): CMsgGCToServerSetSteamLearnInferencing {
  return { enable: false, projectIds: [] };
}

export const CMsgGCToServerSetSteamLearnInferencing = {
  encode(message: CMsgGCToServerSetSteamLearnInferencing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enable === true) {
      writer.uint32(8).bool(message.enable);
    }
    writer.uint32(42).fork();
    for (const v of message.projectIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerSetSteamLearnInferencing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerSetSteamLearnInferencing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.enable = reader.bool();
          continue;
        case 5:
          if (tag == 40) {
            message.projectIds.push(reader.uint32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.projectIds.push(reader.uint32());
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

  fromJSON(object: any): CMsgGCToServerSetSteamLearnInferencing {
    return {
      enable: isSet(object.enable) ? Boolean(object.enable) : false,
      projectIds: Array.isArray(object?.projectIds) ? object.projectIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgGCToServerSetSteamLearnInferencing): unknown {
    const obj: any = {};
    message.enable !== undefined && (obj.enable = message.enable);
    if (message.projectIds) {
      obj.projectIds = message.projectIds.map((e) => Math.round(e));
    } else {
      obj.projectIds = [];
    }
    return obj;
  },
};

function createBaseCMsgGCToServerSetSteamLearnKeysChanged(): CMsgGCToServerSetSteamLearnKeysChanged {
  return { keys: undefined };
}

export const CMsgGCToServerSetSteamLearnKeysChanged = {
  encode(message: CMsgGCToServerSetSteamLearnKeysChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keys !== undefined) {
      CMsgSteamLearnHMACKeys.encode(message.keys, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToServerSetSteamLearnKeysChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToServerSetSteamLearnKeysChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.keys = CMsgSteamLearnHMACKeys.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToServerSetSteamLearnKeysChanged {
    return { keys: isSet(object.keys) ? CMsgSteamLearnHMACKeys.fromJSON(object.keys) : undefined };
  },

  toJSON(message: CMsgGCToServerSetSteamLearnKeysChanged): unknown {
    const obj: any = {};
    message.keys !== undefined && (obj.keys = message.keys ? CMsgSteamLearnHMACKeys.toJSON(message.keys) : undefined);
    return obj;
  },
};

function createBaseCMsgSteamLearnMatchInfo(): CMsgSteamLearnMatchInfo {
  return { averageMmr: 0, radiantWon: false, duration: 0, gameMode: 0, lobbyType: 0 };
}

export const CMsgSteamLearnMatchInfo = {
  encode(message: CMsgSteamLearnMatchInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.averageMmr !== 0) {
      writer.uint32(8).uint32(message.averageMmr);
    }
    if (message.radiantWon === true) {
      writer.uint32(16).bool(message.radiantWon);
    }
    if (message.duration !== 0) {
      writer.uint32(24).uint32(message.duration);
    }
    if (message.gameMode !== 0) {
      writer.uint32(32).uint32(message.gameMode);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(40).uint32(message.lobbyType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnMatchInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnMatchInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.averageMmr = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.radiantWon = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.duration = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.gameMode = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.lobbyType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnMatchInfo {
    return {
      averageMmr: isSet(object.averageMmr) ? Number(object.averageMmr) : 0,
      radiantWon: isSet(object.radiantWon) ? Boolean(object.radiantWon) : false,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      gameMode: isSet(object.gameMode) ? Number(object.gameMode) : 0,
      lobbyType: isSet(object.lobbyType) ? Number(object.lobbyType) : 0,
    };
  },

  toJSON(message: CMsgSteamLearnMatchInfo): unknown {
    const obj: any = {};
    message.averageMmr !== undefined && (obj.averageMmr = Math.round(message.averageMmr));
    message.radiantWon !== undefined && (obj.radiantWon = message.radiantWon);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.gameMode !== undefined && (obj.gameMode = Math.round(message.gameMode));
    message.lobbyType !== undefined && (obj.lobbyType = Math.round(message.lobbyType));
    return obj;
  },
};

function createBaseCMsgSteamLearnMatchInfoPlayer(): CMsgSteamLearnMatchInfoPlayer {
  return { averageMmr: 0, teamWon: false, duration: 0, gameMode: 0, lobbyType: 0 };
}

export const CMsgSteamLearnMatchInfoPlayer = {
  encode(message: CMsgSteamLearnMatchInfoPlayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.averageMmr !== 0) {
      writer.uint32(8).uint32(message.averageMmr);
    }
    if (message.teamWon === true) {
      writer.uint32(16).bool(message.teamWon);
    }
    if (message.duration !== 0) {
      writer.uint32(24).uint32(message.duration);
    }
    if (message.gameMode !== 0) {
      writer.uint32(32).uint32(message.gameMode);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(40).uint32(message.lobbyType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnMatchInfoPlayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnMatchInfoPlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.averageMmr = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.teamWon = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.duration = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.gameMode = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.lobbyType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnMatchInfoPlayer {
    return {
      averageMmr: isSet(object.averageMmr) ? Number(object.averageMmr) : 0,
      teamWon: isSet(object.teamWon) ? Boolean(object.teamWon) : false,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      gameMode: isSet(object.gameMode) ? Number(object.gameMode) : 0,
      lobbyType: isSet(object.lobbyType) ? Number(object.lobbyType) : 0,
    };
  },

  toJSON(message: CMsgSteamLearnMatchInfoPlayer): unknown {
    const obj: any = {};
    message.averageMmr !== undefined && (obj.averageMmr = Math.round(message.averageMmr));
    message.teamWon !== undefined && (obj.teamWon = message.teamWon);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.gameMode !== undefined && (obj.gameMode = Math.round(message.gameMode));
    message.lobbyType !== undefined && (obj.lobbyType = Math.round(message.lobbyType));
    return obj;
  },
};

function createBaseCMsgSteamLearnMatchHeroes(): CMsgSteamLearnMatchHeroes {
  return { radiantHeroIds: [], direHeroIds: [], radiantLanes: [], direLanes: [] };
}

export const CMsgSteamLearnMatchHeroes = {
  encode(message: CMsgSteamLearnMatchHeroes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.radiantHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.direHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.radiantLanes) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.direLanes) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnMatchHeroes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnMatchHeroes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.radiantHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.radiantHeroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 16) {
            message.direHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.direHeroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 3:
          if (tag == 24) {
            message.radiantLanes.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.radiantLanes.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag == 32) {
            message.direLanes.push(reader.uint32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.direLanes.push(reader.uint32());
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

  fromJSON(object: any): CMsgSteamLearnMatchHeroes {
    return {
      radiantHeroIds: Array.isArray(object?.radiantHeroIds) ? object.radiantHeroIds.map((e: any) => Number(e)) : [],
      direHeroIds: Array.isArray(object?.direHeroIds) ? object.direHeroIds.map((e: any) => Number(e)) : [],
      radiantLanes: Array.isArray(object?.radiantLanes) ? object.radiantLanes.map((e: any) => Number(e)) : [],
      direLanes: Array.isArray(object?.direLanes) ? object.direLanes.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgSteamLearnMatchHeroes): unknown {
    const obj: any = {};
    if (message.radiantHeroIds) {
      obj.radiantHeroIds = message.radiantHeroIds.map((e) => Math.round(e));
    } else {
      obj.radiantHeroIds = [];
    }
    if (message.direHeroIds) {
      obj.direHeroIds = message.direHeroIds.map((e) => Math.round(e));
    } else {
      obj.direHeroIds = [];
    }
    if (message.radiantLanes) {
      obj.radiantLanes = message.radiantLanes.map((e) => Math.round(e));
    } else {
      obj.radiantLanes = [];
    }
    if (message.direLanes) {
      obj.direLanes = message.direLanes.map((e) => Math.round(e));
    } else {
      obj.direLanes = [];
    }
    return obj;
  },
};

function createBaseCMsgSteamLearnMatchHero(): CMsgSteamLearnMatchHero {
  return { heroId: 0, lane: 0, alliedHeroIds: [], enemyHeroIds: [] };
}

export const CMsgSteamLearnMatchHero = {
  encode(message: CMsgSteamLearnMatchHero, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.lane !== 0) {
      writer.uint32(16).uint32(message.lane);
    }
    writer.uint32(26).fork();
    for (const v of message.alliedHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.enemyHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnMatchHero {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnMatchHero();
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

          message.lane = reader.uint32();
          continue;
        case 3:
          if (tag == 24) {
            message.alliedHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.alliedHeroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag == 32) {
            message.enemyHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enemyHeroIds.push(reader.uint32());
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

  fromJSON(object: any): CMsgSteamLearnMatchHero {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      lane: isSet(object.lane) ? Number(object.lane) : 0,
      alliedHeroIds: Array.isArray(object?.alliedHeroIds) ? object.alliedHeroIds.map((e: any) => Number(e)) : [],
      enemyHeroIds: Array.isArray(object?.enemyHeroIds) ? object.enemyHeroIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgSteamLearnMatchHero): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.lane !== undefined && (obj.lane = Math.round(message.lane));
    if (message.alliedHeroIds) {
      obj.alliedHeroIds = message.alliedHeroIds.map((e) => Math.round(e));
    } else {
      obj.alliedHeroIds = [];
    }
    if (message.enemyHeroIds) {
      obj.enemyHeroIds = message.enemyHeroIds.map((e) => Math.round(e));
    } else {
      obj.enemyHeroIds = [];
    }
    return obj;
  },
};

function createBaseCMsgSteamLearnMatchState(): CMsgSteamLearnMatchState {
  return { gameTime: 0, radiantState: undefined, direState: undefined };
}

export const CMsgSteamLearnMatchState = {
  encode(message: CMsgSteamLearnMatchState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameTime !== 0) {
      writer.uint32(13).float(message.gameTime);
    }
    if (message.radiantState !== undefined) {
      CMsgSteamLearnMatchState_TeamState.encode(message.radiantState, writer.uint32(18).fork()).ldelim();
    }
    if (message.direState !== undefined) {
      CMsgSteamLearnMatchState_TeamState.encode(message.direState, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnMatchState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnMatchState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.gameTime = reader.float();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.radiantState = CMsgSteamLearnMatchState_TeamState.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.direState = CMsgSteamLearnMatchState_TeamState.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnMatchState {
    return {
      gameTime: isSet(object.gameTime) ? Number(object.gameTime) : 0,
      radiantState: isSet(object.radiantState)
        ? CMsgSteamLearnMatchState_TeamState.fromJSON(object.radiantState)
        : undefined,
      direState: isSet(object.direState) ? CMsgSteamLearnMatchState_TeamState.fromJSON(object.direState) : undefined,
    };
  },

  toJSON(message: CMsgSteamLearnMatchState): unknown {
    const obj: any = {};
    message.gameTime !== undefined && (obj.gameTime = message.gameTime);
    message.radiantState !== undefined && (obj.radiantState = message.radiantState
      ? CMsgSteamLearnMatchState_TeamState.toJSON(message.radiantState)
      : undefined);
    message.direState !== undefined &&
      (obj.direState = message.direState ? CMsgSteamLearnMatchState_TeamState.toJSON(message.direState) : undefined);
    return obj;
  },
};

function createBaseCMsgSteamLearnMatchState_PlayerState(): CMsgSteamLearnMatchState_PlayerState {
  return {
    heroId: 0,
    netWorth: 0,
    level: 0,
    deaths: 0,
    respawnTime: 0,
    hasBuyback: false,
    hasAegis: false,
    hasRapier: false,
    distance: 0,
  };
}

export const CMsgSteamLearnMatchState_PlayerState = {
  encode(message: CMsgSteamLearnMatchState_PlayerState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.netWorth !== 0) {
      writer.uint32(16).uint32(message.netWorth);
    }
    if (message.level !== 0) {
      writer.uint32(24).uint32(message.level);
    }
    if (message.deaths !== 0) {
      writer.uint32(32).uint32(message.deaths);
    }
    if (message.respawnTime !== 0) {
      writer.uint32(40).uint32(message.respawnTime);
    }
    if (message.hasBuyback === true) {
      writer.uint32(48).bool(message.hasBuyback);
    }
    if (message.hasAegis === true) {
      writer.uint32(56).bool(message.hasAegis);
    }
    if (message.hasRapier === true) {
      writer.uint32(64).bool(message.hasRapier);
    }
    if (message.distance !== 0) {
      writer.uint32(72).uint32(message.distance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnMatchState_PlayerState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnMatchState_PlayerState();
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

          message.netWorth = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.deaths = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.respawnTime = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.hasBuyback = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.hasAegis = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.hasRapier = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.distance = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnMatchState_PlayerState {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      netWorth: isSet(object.netWorth) ? Number(object.netWorth) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      respawnTime: isSet(object.respawnTime) ? Number(object.respawnTime) : 0,
      hasBuyback: isSet(object.hasBuyback) ? Boolean(object.hasBuyback) : false,
      hasAegis: isSet(object.hasAegis) ? Boolean(object.hasAegis) : false,
      hasRapier: isSet(object.hasRapier) ? Boolean(object.hasRapier) : false,
      distance: isSet(object.distance) ? Number(object.distance) : 0,
    };
  },

  toJSON(message: CMsgSteamLearnMatchState_PlayerState): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.netWorth !== undefined && (obj.netWorth = Math.round(message.netWorth));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.respawnTime !== undefined && (obj.respawnTime = Math.round(message.respawnTime));
    message.hasBuyback !== undefined && (obj.hasBuyback = message.hasBuyback);
    message.hasAegis !== undefined && (obj.hasAegis = message.hasAegis);
    message.hasRapier !== undefined && (obj.hasRapier = message.hasRapier);
    message.distance !== undefined && (obj.distance = Math.round(message.distance));
    return obj;
  },
};

function createBaseCMsgSteamLearnMatchState_TeamState(): CMsgSteamLearnMatchState_TeamState {
  return {
    team: 0,
    playerStates: [],
    towerHealthPct: [],
    barracksHealthPct: [],
    ancientHealthPct: 0,
    glyphCooldown: 0,
    kills: 0,
    creepDistanceSafe: 0,
    creepDistanceMid: 0,
    creepDistanceOff: 0,
  };
}

export const CMsgSteamLearnMatchState_TeamState = {
  encode(message: CMsgSteamLearnMatchState_TeamState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.team !== 0) {
      writer.uint32(8).uint32(message.team);
    }
    for (const v of message.playerStates) {
      CMsgSteamLearnMatchState_PlayerState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.towerHealthPct) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.barracksHealthPct) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.ancientHealthPct !== 0) {
      writer.uint32(40).uint32(message.ancientHealthPct);
    }
    if (message.glyphCooldown !== 0) {
      writer.uint32(48).uint32(message.glyphCooldown);
    }
    if (message.kills !== 0) {
      writer.uint32(56).uint32(message.kills);
    }
    if (message.creepDistanceSafe !== 0) {
      writer.uint32(64).uint32(message.creepDistanceSafe);
    }
    if (message.creepDistanceMid !== 0) {
      writer.uint32(72).uint32(message.creepDistanceMid);
    }
    if (message.creepDistanceOff !== 0) {
      writer.uint32(80).uint32(message.creepDistanceOff);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnMatchState_TeamState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnMatchState_TeamState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.team = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.playerStates.push(CMsgSteamLearnMatchState_PlayerState.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag == 24) {
            message.towerHealthPct.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.towerHealthPct.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag == 32) {
            message.barracksHealthPct.push(reader.uint32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.barracksHealthPct.push(reader.uint32());
            }

            continue;
          }

          break;
        case 5:
          if (tag != 40) {
            break;
          }

          message.ancientHealthPct = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.glyphCooldown = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.kills = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.creepDistanceSafe = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.creepDistanceMid = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.creepDistanceOff = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnMatchState_TeamState {
    return {
      team: isSet(object.team) ? Number(object.team) : 0,
      playerStates: Array.isArray(object?.playerStates)
        ? object.playerStates.map((e: any) => CMsgSteamLearnMatchState_PlayerState.fromJSON(e))
        : [],
      towerHealthPct: Array.isArray(object?.towerHealthPct) ? object.towerHealthPct.map((e: any) => Number(e)) : [],
      barracksHealthPct: Array.isArray(object?.barracksHealthPct)
        ? object.barracksHealthPct.map((e: any) => Number(e))
        : [],
      ancientHealthPct: isSet(object.ancientHealthPct) ? Number(object.ancientHealthPct) : 0,
      glyphCooldown: isSet(object.glyphCooldown) ? Number(object.glyphCooldown) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      creepDistanceSafe: isSet(object.creepDistanceSafe) ? Number(object.creepDistanceSafe) : 0,
      creepDistanceMid: isSet(object.creepDistanceMid) ? Number(object.creepDistanceMid) : 0,
      creepDistanceOff: isSet(object.creepDistanceOff) ? Number(object.creepDistanceOff) : 0,
    };
  },

  toJSON(message: CMsgSteamLearnMatchState_TeamState): unknown {
    const obj: any = {};
    message.team !== undefined && (obj.team = Math.round(message.team));
    if (message.playerStates) {
      obj.playerStates = message.playerStates.map((e) =>
        e ? CMsgSteamLearnMatchState_PlayerState.toJSON(e) : undefined
      );
    } else {
      obj.playerStates = [];
    }
    if (message.towerHealthPct) {
      obj.towerHealthPct = message.towerHealthPct.map((e) => Math.round(e));
    } else {
      obj.towerHealthPct = [];
    }
    if (message.barracksHealthPct) {
      obj.barracksHealthPct = message.barracksHealthPct.map((e) => Math.round(e));
    } else {
      obj.barracksHealthPct = [];
    }
    message.ancientHealthPct !== undefined && (obj.ancientHealthPct = Math.round(message.ancientHealthPct));
    message.glyphCooldown !== undefined && (obj.glyphCooldown = Math.round(message.glyphCooldown));
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.creepDistanceSafe !== undefined && (obj.creepDistanceSafe = Math.round(message.creepDistanceSafe));
    message.creepDistanceMid !== undefined && (obj.creepDistanceMid = Math.round(message.creepDistanceMid));
    message.creepDistanceOff !== undefined && (obj.creepDistanceOff = Math.round(message.creepDistanceOff));
    return obj;
  },
};

function createBaseCMsgSteamLearnItemPurchase(): CMsgSteamLearnItemPurchase {
  return {
    itemId: 0,
    inventoryItems: [],
    purchaseHistory: [],
    gold: 0,
    netWorth: 0,
    isRadiantTeam: 0,
    gameTime: 0,
    isUsingDotaPlus: false,
  };
}

export const CMsgSteamLearnItemPurchase = {
  encode(message: CMsgSteamLearnItemPurchase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== 0) {
      writer.uint32(8).int32(message.itemId);
    }
    writer.uint32(18).fork();
    for (const v of message.inventoryItems) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.purchaseHistory) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.gold !== 0) {
      writer.uint32(32).uint32(message.gold);
    }
    if (message.netWorth !== 0) {
      writer.uint32(40).uint32(message.netWorth);
    }
    if (message.isRadiantTeam !== 0) {
      writer.uint32(48).uint32(message.isRadiantTeam);
    }
    if (message.gameTime !== 0) {
      writer.uint32(61).float(message.gameTime);
    }
    if (message.isUsingDotaPlus === true) {
      writer.uint32(64).bool(message.isUsingDotaPlus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnItemPurchase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnItemPurchase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemId = reader.int32();
          continue;
        case 2:
          if (tag == 16) {
            message.inventoryItems.push(reader.int32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.inventoryItems.push(reader.int32());
            }

            continue;
          }

          break;
        case 3:
          if (tag == 24) {
            message.purchaseHistory.push(reader.int32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.purchaseHistory.push(reader.int32());
            }

            continue;
          }

          break;
        case 4:
          if (tag != 32) {
            break;
          }

          message.gold = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.netWorth = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.isRadiantTeam = reader.uint32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.gameTime = reader.float();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.isUsingDotaPlus = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnItemPurchase {
    return {
      itemId: isSet(object.itemId) ? Number(object.itemId) : 0,
      inventoryItems: Array.isArray(object?.inventoryItems) ? object.inventoryItems.map((e: any) => Number(e)) : [],
      purchaseHistory: Array.isArray(object?.purchaseHistory) ? object.purchaseHistory.map((e: any) => Number(e)) : [],
      gold: isSet(object.gold) ? Number(object.gold) : 0,
      netWorth: isSet(object.netWorth) ? Number(object.netWorth) : 0,
      isRadiantTeam: isSet(object.isRadiantTeam) ? Number(object.isRadiantTeam) : 0,
      gameTime: isSet(object.gameTime) ? Number(object.gameTime) : 0,
      isUsingDotaPlus: isSet(object.isUsingDotaPlus) ? Boolean(object.isUsingDotaPlus) : false,
    };
  },

  toJSON(message: CMsgSteamLearnItemPurchase): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = Math.round(message.itemId));
    if (message.inventoryItems) {
      obj.inventoryItems = message.inventoryItems.map((e) => Math.round(e));
    } else {
      obj.inventoryItems = [];
    }
    if (message.purchaseHistory) {
      obj.purchaseHistory = message.purchaseHistory.map((e) => Math.round(e));
    } else {
      obj.purchaseHistory = [];
    }
    message.gold !== undefined && (obj.gold = Math.round(message.gold));
    message.netWorth !== undefined && (obj.netWorth = Math.round(message.netWorth));
    message.isRadiantTeam !== undefined && (obj.isRadiantTeam = Math.round(message.isRadiantTeam));
    message.gameTime !== undefined && (obj.gameTime = message.gameTime);
    message.isUsingDotaPlus !== undefined && (obj.isUsingDotaPlus = message.isUsingDotaPlus);
    return obj;
  },
};

function createBaseCMsgSteamLearnPreGameItemPurchases(): CMsgSteamLearnPreGameItemPurchases {
  return { itemIds: [], isRadiantTeam: 0, isUsingDotaPlus: false };
}

export const CMsgSteamLearnPreGameItemPurchases = {
  encode(message: CMsgSteamLearnPreGameItemPurchases, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.itemIds) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.isRadiantTeam !== 0) {
      writer.uint32(16).uint32(message.isRadiantTeam);
    }
    if (message.isUsingDotaPlus === true) {
      writer.uint32(24).bool(message.isUsingDotaPlus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnPreGameItemPurchases {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnPreGameItemPurchases();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.itemIds.push(reader.int32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemIds.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isRadiantTeam = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isUsingDotaPlus = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnPreGameItemPurchases {
    return {
      itemIds: Array.isArray(object?.itemIds) ? object.itemIds.map((e: any) => Number(e)) : [],
      isRadiantTeam: isSet(object.isRadiantTeam) ? Number(object.isRadiantTeam) : 0,
      isUsingDotaPlus: isSet(object.isUsingDotaPlus) ? Boolean(object.isUsingDotaPlus) : false,
    };
  },

  toJSON(message: CMsgSteamLearnPreGameItemPurchases): unknown {
    const obj: any = {};
    if (message.itemIds) {
      obj.itemIds = message.itemIds.map((e) => Math.round(e));
    } else {
      obj.itemIds = [];
    }
    message.isRadiantTeam !== undefined && (obj.isRadiantTeam = Math.round(message.isRadiantTeam));
    message.isUsingDotaPlus !== undefined && (obj.isUsingDotaPlus = message.isUsingDotaPlus);
    return obj;
  },
};

function createBaseCMsgSteamLearnAbilitySkill(): CMsgSteamLearnAbilitySkill {
  return { abilityId: 0, skilledAbilities: [], gameTime: 0, isUsingDotaPlus: false };
}

export const CMsgSteamLearnAbilitySkill = {
  encode(message: CMsgSteamLearnAbilitySkill, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abilityId !== 0) {
      writer.uint32(8).int32(message.abilityId);
    }
    writer.uint32(18).fork();
    for (const v of message.skilledAbilities) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.gameTime !== 0) {
      writer.uint32(29).float(message.gameTime);
    }
    if (message.isUsingDotaPlus === true) {
      writer.uint32(32).bool(message.isUsingDotaPlus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnAbilitySkill {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnAbilitySkill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.abilityId = reader.int32();
          continue;
        case 2:
          if (tag == 16) {
            message.skilledAbilities.push(reader.int32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.skilledAbilities.push(reader.int32());
            }

            continue;
          }

          break;
        case 3:
          if (tag != 29) {
            break;
          }

          message.gameTime = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.isUsingDotaPlus = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnAbilitySkill {
    return {
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      skilledAbilities: Array.isArray(object?.skilledAbilities)
        ? object.skilledAbilities.map((e: any) => Number(e))
        : [],
      gameTime: isSet(object.gameTime) ? Number(object.gameTime) : 0,
      isUsingDotaPlus: isSet(object.isUsingDotaPlus) ? Boolean(object.isUsingDotaPlus) : false,
    };
  },

  toJSON(message: CMsgSteamLearnAbilitySkill): unknown {
    const obj: any = {};
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    if (message.skilledAbilities) {
      obj.skilledAbilities = message.skilledAbilities.map((e) => Math.round(e));
    } else {
      obj.skilledAbilities = [];
    }
    message.gameTime !== undefined && (obj.gameTime = message.gameTime);
    message.isUsingDotaPlus !== undefined && (obj.isUsingDotaPlus = message.isUsingDotaPlus);
    return obj;
  },
};

function createBaseCMsgSteamLearnWardPlacement(): CMsgSteamLearnWardPlacement {
  return { wardLoc: undefined, existingWardLocs: [], team: 0 };
}

export const CMsgSteamLearnWardPlacement = {
  encode(message: CMsgSteamLearnWardPlacement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wardLoc !== undefined) {
      CMsgSteamLearnWardPlacement_Location.encode(message.wardLoc, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.existingWardLocs) {
      CMsgSteamLearnWardPlacement_Location.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.team !== 0) {
      writer.uint32(24).uint32(message.team);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnWardPlacement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnWardPlacement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.wardLoc = CMsgSteamLearnWardPlacement_Location.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.existingWardLocs.push(CMsgSteamLearnWardPlacement_Location.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.team = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnWardPlacement {
    return {
      wardLoc: isSet(object.wardLoc) ? CMsgSteamLearnWardPlacement_Location.fromJSON(object.wardLoc) : undefined,
      existingWardLocs: Array.isArray(object?.existingWardLocs)
        ? object.existingWardLocs.map((e: any) => CMsgSteamLearnWardPlacement_Location.fromJSON(e))
        : [],
      team: isSet(object.team) ? Number(object.team) : 0,
    };
  },

  toJSON(message: CMsgSteamLearnWardPlacement): unknown {
    const obj: any = {};
    message.wardLoc !== undefined &&
      (obj.wardLoc = message.wardLoc ? CMsgSteamLearnWardPlacement_Location.toJSON(message.wardLoc) : undefined);
    if (message.existingWardLocs) {
      obj.existingWardLocs = message.existingWardLocs.map((e) =>
        e ? CMsgSteamLearnWardPlacement_Location.toJSON(e) : undefined
      );
    } else {
      obj.existingWardLocs = [];
    }
    message.team !== undefined && (obj.team = Math.round(message.team));
    return obj;
  },
};

function createBaseCMsgSteamLearnWardPlacement_Location(): CMsgSteamLearnWardPlacement_Location {
  return { x: 0, y: 0 };
}

export const CMsgSteamLearnWardPlacement_Location = {
  encode(message: CMsgSteamLearnWardPlacement_Location, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamLearnWardPlacement_Location {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamLearnWardPlacement_Location();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.x = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.y = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamLearnWardPlacement_Location {
    return { x: isSet(object.x) ? Number(object.x) : 0, y: isSet(object.y) ? Number(object.y) : 0 };
  },

  toJSON(message: CMsgSteamLearnWardPlacement_Location): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },
};

function createBaseCMsgSignOutMuertaMinigame(): CMsgSignOutMuertaMinigame {
  return { eventGameData: Buffer.alloc(0) };
}

export const CMsgSignOutMuertaMinigame = {
  encode(message: CMsgSignOutMuertaMinigame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventGameData.length !== 0) {
      writer.uint32(10).bytes(message.eventGameData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutMuertaMinigame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutMuertaMinigame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.eventGameData = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutMuertaMinigame {
    return {
      eventGameData: isSet(object.eventGameData) ? Buffer.from(bytesFromBase64(object.eventGameData)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgSignOutMuertaMinigame): unknown {
    const obj: any = {};
    message.eventGameData !== undefined &&
      (obj.eventGameData = base64FromBytes(
        message.eventGameData !== undefined ? message.eventGameData : Buffer.alloc(0),
      ));
    return obj;
  },
};

function createBaseCMsgSignOutMapStats(): CMsgSignOutMapStats {
  return { players: [], globalStats: undefined };
}

export const CMsgSignOutMapStats = {
  encode(message: CMsgSignOutMapStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.players) {
      CMsgSignOutMapStats_Player.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.globalStats !== undefined) {
      CMsgMapStatsSnapshot.encode(message.globalStats, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutMapStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutMapStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.players.push(CMsgSignOutMapStats_Player.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.globalStats = CMsgMapStatsSnapshot.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutMapStats {
    return {
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgSignOutMapStats_Player.fromJSON(e))
        : [],
      globalStats: isSet(object.globalStats) ? CMsgMapStatsSnapshot.fromJSON(object.globalStats) : undefined,
    };
  },

  toJSON(message: CMsgSignOutMapStats): unknown {
    const obj: any = {};
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgSignOutMapStats_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    message.globalStats !== undefined &&
      (obj.globalStats = message.globalStats ? CMsgMapStatsSnapshot.toJSON(message.globalStats) : undefined);
    return obj;
  },
};

function createBaseCMsgSignOutMapStats_Player(): CMsgSignOutMapStats_Player {
  return { accountId: 0, personalStats: undefined };
}

export const CMsgSignOutMapStats_Player = {
  encode(message: CMsgSignOutMapStats_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.personalStats !== undefined) {
      CMsgMapStatsSnapshot.encode(message.personalStats, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSignOutMapStats_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSignOutMapStats_Player();
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

          message.personalStats = CMsgMapStatsSnapshot.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSignOutMapStats_Player {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      personalStats: isSet(object.personalStats) ? CMsgMapStatsSnapshot.fromJSON(object.personalStats) : undefined,
    };
  },

  toJSON(message: CMsgSignOutMapStats_Player): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.personalStats !== undefined &&
      (obj.personalStats = message.personalStats ? CMsgMapStatsSnapshot.toJSON(message.personalStats) : undefined);
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
