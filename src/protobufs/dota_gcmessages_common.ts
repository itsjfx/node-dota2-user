/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  CMsgPendingEventAward,
  DOTAGameMode,
  dotaGcTeam,
  EEvent,
  ELeaguePhase,
  ELeagueRegion,
  EMatchOutcome,
} from "./dota_shared_enums";

export enum ESpecialPingValue {
  k_ESpecialPingValue_NoData = 16382,
  k_ESpecialPingValue_Failed = 16383,
}

export enum EDOTAGCSessionNeed {
  k_EDOTAGCSessionNeed_Unknown = 0,
  k_EDOTAGCSessionNeed_UserNoSessionNeeded = 100,
  k_EDOTAGCSessionNeed_UserInOnlineGame = 101,
  k_EDOTAGCSessionNeed_UserInLocalGame = 102,
  k_EDOTAGCSessionNeed_UserInUIWasConnected = 103,
  k_EDOTAGCSessionNeed_UserInUINeverConnected = 104,
  k_EDOTAGCSessionNeed_UserTutorials = 105,
  k_EDOTAGCSessionNeed_UserInUIWasConnectedIdle = 106,
  k_EDOTAGCSessionNeed_UserInUINeverConnectedIdle = 107,
  k_EDOTAGCSessionNeed_GameServerOnline = 200,
  k_EDOTAGCSessionNeed_GameServerLocal = 201,
  k_EDOTAGCSessionNeed_GameServerIdle = 202,
  k_EDOTAGCSessionNeed_GameServerRelay = 203,
  k_EDOTAGCSessionNeed_GameServerLocalUpload = 204,
}

export enum EDOTAMatchPlayerTimeCustomStat {
  k_EDOTA_MatchPlayerTimeCustomStat_HPRegenUnderT1Towers = 1,
  k_EDOTA_MatchPlayerTimeCustomStat_MagicDamageReducedWithNewFormula_Absolute = 2,
  k_EDOTA_MatchPlayerTimeCustomStat_MagicDamageReducedWithNewFormula_PercentOfTotalHP = 3,
}

export enum DOTATournamentEvents {
  TE_FIRST_BLOOD = 0,
  TE_GAME_END = 1,
  TE_MULTI_KILL = 2,
  TE_HERO_DENY = 3,
  TE_AEGIS_DENY = 4,
  TE_AEGIS_STOLEN = 5,
  TE_GODLIKE = 6,
  TE_COURIER_KILL = 7,
  TE_ECHOSLAM = 8,
  TE_RAPIER = 9,
  TE_EARLY_ROSHAN = 10,
  TE_BLACK_HOLE = 11,
}

export enum EBroadcastTimelineEvent {
  EBroadcastTimelineEvent_MatchStarted = 1,
  EBroadcastTimelineEvent_GameStateChanged = 2,
  EBroadcastTimelineEvent_TowerDeath = 3,
  EBroadcastTimelineEvent_BarracksDeath = 4,
  EBroadcastTimelineEvent_AncientDeath = 5,
  EBroadcastTimelineEvent_RoshanDeath = 6,
  EBroadcastTimelineEvent_HeroDeath = 7,
  EBroadcastTimelineEvent_TeamFight = 8,
  EBroadcastTimelineEvent_FirstBlood = 9,
}

export enum ECustomGameWhitelistState {
  CUSTOM_GAME_WHITELIST_STATE_UNKNOWN = 0,
  CUSTOM_GAME_WHITELIST_STATE_APPROVED = 1,
  CUSTOM_GAME_WHITELIST_STATE_REJECTED = 2,
}

export enum EDOTATriviaQuestionCategory {
  k_EDOTATriviaQuestionCategory_AbilityIcon = 0,
  k_EDOTATriviaQuestionCategory_AbilityCooldown = 1,
  k_EDOTATriviaQuestionCategory_HeroAttributes = 2,
  k_EDOTATriviaQuestionCategory_HeroMovementSpeed = 3,
  k_EDOTATriviaQuestionCategory_TalentTree = 4,
  k_EDOTATriviaQuestionCategory_HeroStats = 5,
  k_EDOTATriviaQuestionCategory_ItemPrice = 6,
  k_EDOTATriviaQuestionCategory_AbilitySound = 7,
  k_EDOTATriviaQuestionCategory_InvokerSpells = 8,
  k_EDOTATriviaQuestionCategory_AbilityManaCost = 9,
  k_EDOTATriviaQuestionCategory_HeroAttackSound = 10,
  k_EDOTATriviaQuestionCategory_AbilityName = 11,
  k_EDOTATriviaQuestionCategory_ItemComponents = 12,
  k_EDOTATriviaQuestionCategory_ItemLore = 13,
  k_EDOTATriviaQuestionCategory_ItemPassives = 14,
  k_EDOTATriviaQuestionCategory_STATIC_QUESTIONS_END = 15,
  k_EDOTATriviaQuestionCategory_DYNAMIC_QUESTIONS_START = 99,
  k_EDOTATriviaQuestionCategory_Dynamic_ItemBuild = 100,
}

export enum EOverwatchConviction {
  k_EOverwatchConviction_None = 0,
  k_EOverwatchConviction_NotGuilty = 1,
  k_EOverwatchConviction_GuiltUnclear = 2,
  k_EOverwatchConviction_Guilty = 3,
}

export enum EHeroRelicRarity {
  HERO_RELIC_RARITY_INVALID = -1,
  HERO_RELIC_RARITY_COMMON = 0,
  HERO_RELIC_RARITY_RARE = 1,
}

export enum EStickerbookAuditAction {
  STICKERBOOK_AUDIT_CREATE_PAGE = 0,
  STICKERBOOK_AUDIT_DELETE_PAGE = 1,
  STICKERBOOK_AUDIT_STICK_STICKERS = 2,
  STICKERBOOK_AUDIT_REPLACE_STICKERS = 3,
  STICKERBOOK_AUDIT_HERO_STICKER = 4,
}

export enum EStickerbookPageType {
  STICKER_PAGE_GENERIC = 0,
  STICKER_PAGE_TEAM = 1,
  STICKER_PAGE_TALENT = 2,
}

export interface CSODOTAGameAccountClient {
  accountId: number;
  wins: number;
  losses: number;
  xp: number;
  level: number;
  initialSkill: number;
  leaverCount: number;
  secondaryLeaverCount: number;
  lowPriorityUntilDate: number;
  preventTextChatUntilDate: number;
  preventVoiceUntilDate: number;
  preventPublicTextChatUntilDate: number;
  preventNewPlayerChatUntilDate: number;
  lastAbandonedGameDate: number;
  lastSecondaryAbandonedGameDate: number;
  leaverPenaltyCount: number;
  completedGameStreak: number;
  accountDisabledUntilDate: number;
  accountDisabledCount: number;
  matchDisabledUntilDate: number;
  matchDisabledCount: number;
  shutdownlawterminatetimestamp: number;
  lowPriorityGamesRemaining: number;
  recruitmentLevel: number;
  hasNewNotifications: boolean;
  isLeagueAdmin: boolean;
  casualGamesPlayed: number;
  soloCompetitiveGamesPlayed: number;
  partyCompetitiveGamesPlayed: number;
  casual1v1GamesPlayed: number;
  currAllHeroChallengeId: number;
  playTimePoints: number;
  accountFlags: number;
  playTimeLevel: number;
  playerBehaviorSeqNumLastReport: number;
  playerBehaviorScoreLastReport: number;
  playerBehaviorReportOldData: boolean;
  tourneySkillLevel: number;
  tourneyRecentParticipationDate: number;
  anchoredPhoneNumberId: string;
  rankedMatchmakingBanUntilDate: number;
  recentGameTime1: number;
  recentGameTime2: number;
  recentGameTime3: number;
  favoriteTeamPacked: string;
  recentReportTime: number;
  customGameDisabledUntilDate: number;
  recentWinTime1: number;
  recentWinTime2: number;
  recentWinTime3: number;
  coachRating: number;
  queuePoints: number;
  roleHandicaps: CSODOTAGameAccountClient_RoleHandicap[];
  eventModeRecentTime: number;
  mmrRecalibrationTime: number;
}

export interface CSODOTAGameAccountClient_RoleHandicap {
  role: number;
  handicap: number;
}

export interface CSODOTAGameAccountPlus {
  accountId: number;
  originalStartDate: number;
  plusFlags: number;
  plusStatus: number;
  prepaidTimeStart: number;
  prepaidTimeBalance: number;
  nextPaymentDate: number;
  steamAgreementId: string;
}

export interface CMsgLobbyFeaturedGamemodeProgress {
  accounts: CMsgLobbyFeaturedGamemodeProgress_AccountProgress[];
}

export interface CMsgLobbyFeaturedGamemodeProgress_AccountProgress {
  accountId: number;
  currentValue: number;
  maxValue: number;
}

export interface CMsgBattleCupVictory {
  accountId: number;
  winDate: number;
  validUntil: number;
  skillLevel: number;
  tournamentId: number;
  divisionId: number;
  teamId: number;
  streak: number;
  trophyId: number;
}

export interface CMsgLobbyBattleCupVictoryList {
  winners: CMsgBattleCupVictory[];
}

export interface CMsgDOTABroadcastNotification {
  message: string;
}

export interface CProtoItemHeroStatue {
  heroId: number;
  statusEffectIndex: number;
  sequenceName: string;
  cycle: number;
  wearable: number[];
  inscription: string;
  style: number[];
  tournamentDrop: boolean;
}

export interface CMatchPlayerAbilityUpgrade {
  ability: number;
  time: number;
}

export interface CMatchPlayerTimedCustomStat {
  stat: EDOTAMatchPlayerTimeCustomStat;
  value: number;
}

export interface CMatchPlayerTimedStats {
  time: number;
  kills: number;
  deaths: number;
  assists: number;
  netWorth: number;
  xp: number;
  lastHits: number;
  denies: number;
  bountyRuneGold: number;
  rangeCreepUpgradeGold: number;
  observerWardsDewarded: number;
  reliableGoldEarned: number;
  goldLossPrevented: number;
  heroKillGold: number;
  creepKillGold: number;
  buildingGold: number;
  otherGold: number;
  comebackGold: number;
  experimentalGold: number;
  experimental2Gold: number;
  creepDenyGold: number;
  tpScrollsPurchased1: number;
  tpScrollsPurchased2: number;
  tpScrollsPurchased3: number;
  tpScrollsPurchased4: number;
  tpScrollsPurchased5: number;
  neutralGold: number;
  courierGold: number;
  roshanGold: number;
  incomeGold: number;
  itemValue: number;
  supportGoldSpent: number;
  campsStacked: number;
  wardsPlaced: number;
  tripleKills: number;
  rampages: number;
  customStats: CMatchPlayerTimedCustomStat[];
}

export interface CMatchTeamTimedStats {
  time: number;
  enemyTowersKilled: number;
  enemyBarracksKilled: number;
  enemyTowersStatus: number;
  enemyBarracksStatus: number;
}

export interface CMatchAdditionalUnitInventory {
  unitName: string;
  items: number[];
}

export interface CMatchPlayerPermanentBuff {
  permanentBuff: number;
  stackCount: number;
  grantTime: number;
}

export interface CMatchHeroSelectEvent {
  isPick: boolean;
  team: number;
  heroId: number;
}

export interface CMatchClip {
  matchId: string;
  playerAccountId: number;
  gameTimeSeconds: number;
  durationSeconds: number;
  playerId: number;
  heroId: number;
  abilityId: number;
  cameraMode: number;
  comment: string;
}

export interface CPartySearchClientParty {
  partyId: string;
  beaconType: number;
  partyMembers: number[];
}

export interface CMsgDOTAHasItemQuery {
  accountId: number;
  itemId: string;
}

export interface CMsgDOTAHasItemResponse {
  hasItem: boolean;
}

export interface CMsgGCGetPlayerCardItemInfo {
  accountId: number;
  playerCardItemIds: string[];
  allForEvent: number;
}

export interface CMsgGCGetPlayerCardItemInfoResponse {
  playerCardInfos: CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo[];
}

export interface CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo {
  playerCardItemId: string;
  accountId: number;
  packedBonuses: string;
}

export interface CSODOTAMapLocationState {
  accountId: number;
  locationId: number;
  completed: boolean;
}

export interface CMsgLeagueAdminList {
  accountIds: number[];
}

export interface CMsgDOTAProfileCard {
  accountId: number;
  slots: CMsgDOTAProfileCard_Slot[];
  badgePoints: number;
  eventPoints: number;
  eventId: number;
  recentBattleCupVictory: CMsgBattleCupVictory | undefined;
  rankTier: number;
  leaderboardRank: number;
  isPlusSubscriber: boolean;
  plusOriginalStartDate: number;
  rankTierScore: number;
  leaderboardRankCore: number;
  title: number;
  favoriteTeamPacked: string;
  lifetimeGames: number;
}

export enum CMsgDOTAProfileCard_EStatID {
  k_eStat_Wins = 3,
  k_eStat_Commends = 4,
  k_eStat_GamesPlayed = 5,
  k_eStat_FirstMatchDate = 6,
  k_eStat_PreviousSeasonRank = 7,
  k_eStat_GamesMVP = 8,
}

export interface CMsgDOTAProfileCard_Slot {
  slotId: number;
  trophy: CMsgDOTAProfileCard_Slot_Trophy | undefined;
  stat: CMsgDOTAProfileCard_Slot_Stat | undefined;
  item: CMsgDOTAProfileCard_Slot_Item | undefined;
  hero: CMsgDOTAProfileCard_Slot_Hero | undefined;
  emoticon: CMsgDOTAProfileCard_Slot_Emoticon | undefined;
  team: CMsgDOTAProfileCard_Slot_Team | undefined;
}

export interface CMsgDOTAProfileCard_Slot_Trophy {
  trophyId: number;
  trophyScore: number;
}

export interface CMsgDOTAProfileCard_Slot_Stat {
  statId: CMsgDOTAProfileCard_EStatID;
  statScore: number;
}

export interface CMsgDOTAProfileCard_Slot_Item {
  serializedItem: Buffer;
  itemId: string;
}

export interface CMsgDOTAProfileCard_Slot_Hero {
  heroId: number;
  heroWins: number;
  heroLosses: number;
}

export interface CMsgDOTAProfileCard_Slot_Emoticon {
  emoticonId: number;
}

export interface CMsgDOTAProfileCard_Slot_Team {
  teamId: number;
}

export interface CSODOTAPlayerChallenge {
  accountId: number;
  eventId: number;
  slotId: number;
  intParam0: number;
  intParam1: number;
  createdTime: number;
  completed: number;
  sequenceId: number;
  challengeTier: number;
  flags: number;
  attempts: number;
  completeLimit: number;
  questRank: number;
  maxQuestRank: number;
  instanceId: number;
  heroId: number;
  templateId: number;
}

export interface CMsgClientToGCRerollPlayerChallenge {
  eventId: EEvent;
  sequenceId: number;
  heroId: number;
}

export interface CMsgGCRerollPlayerChallengeResponse {
  result: CMsgGCRerollPlayerChallengeResponse_EResult;
}

export enum CMsgGCRerollPlayerChallengeResponse_EResult {
  eResult_Success = 0,
  eResult_Dropped = 1,
  eResult_NotFound = 2,
  eResult_CantReroll = 3,
  eResult_ServerError = 4,
}

export interface CMsgGCTopCustomGamesList {
  topCustomGames: string[];
  gameOfTheDay: string;
}

export interface CMsgDOTARealtimeGameStats {
  match: CMsgDOTARealtimeGameStats_MatchDetails | undefined;
  teams: CMsgDOTARealtimeGameStats_TeamDetails[];
  buildings: CMsgDOTARealtimeGameStats_BuildingDetails[];
  graphData: CMsgDOTARealtimeGameStats_GraphData | undefined;
  deltaFrame: boolean;
}

export interface CMsgDOTARealtimeGameStats_TeamDetails {
  teamNumber: number;
  teamId: number;
  teamName: string;
  teamLogo: string;
  teamTag: string;
  score: number;
  netWorth: number;
  players: CMsgDOTARealtimeGameStats_PlayerDetails[];
  onlyTeam: boolean;
  cheers: number;
  teamLogoUrl: string;
}

export interface CMsgDOTARealtimeGameStats_ItemDetails {
  itemAbilityId: number;
  name: string;
  time: number;
  sold: boolean;
  stackcount: number;
}

export interface CMsgDOTARealtimeGameStats_AbilityDetails {
  id: number;
  name: string;
  level: number;
  cooldown: number;
  cooldownMax: number;
}

export interface CMsgDOTARealtimeGameStats_HeroToHeroStats {
  victimid: number;
  kills: number;
  assists: number;
}

export interface CMsgDOTARealtimeGameStats_AbilityList {
  id: number[];
}

export interface CMsgDOTARealtimeGameStats_PlayerDetails {
  accountid: number;
  playerid: number;
  name: string;
  team: number;
  heroid: number;
  healthpoints: number;
  maxhealthpoints: number;
  healthregenrate: number;
  manapoints: number;
  maxmanapoints: number;
  manaregenrate: number;
  baseStrength: number;
  baseAgility: number;
  baseIntelligence: number;
  baseArmor: number;
  baseMovespeed: number;
  baseDamage: number;
  strength: number;
  agility: number;
  intelligence: number;
  armor: number;
  movespeed: number;
  damage: number;
  heroDamage: number;
  towerDamage: number;
  abilities: CMsgDOTARealtimeGameStats_AbilityDetails[];
  level: number;
  killCount: number;
  deathCount: number;
  assistsCount: number;
  deniesCount: number;
  lhCount: number;
  heroHealing: number;
  goldPerMin: number;
  xpPerMin: number;
  netGold: number;
  gold: number;
  x: number;
  y: number;
  respawnTime: number;
  ultimateCooldown: number;
  hasBuyback: boolean;
  items: CMsgDOTARealtimeGameStats_ItemDetails[];
  stashitems: CMsgDOTARealtimeGameStats_ItemDetails[];
  itemshoppinglist: CMsgDOTARealtimeGameStats_ItemDetails[];
  levelpoints: CMsgDOTARealtimeGameStats_AbilityList[];
  heroToHeroStats: CMsgDOTARealtimeGameStats_HeroToHeroStats[];
  hasUltimate: boolean;
  hasUltimateMana: boolean;
}

export interface CMsgDOTARealtimeGameStats_BuildingDetails {
  team: number;
  heading: number;
  lane: number;
  tier: number;
  type: number;
  x: number;
  y: number;
  destroyed: boolean;
}

export interface CMsgDOTARealtimeGameStats_KillDetails {
  playerId: number;
  deathTime: number;
  killerPlayerId: number;
}

export interface CMsgDOTARealtimeGameStats_BroadcasterDetails {
  playerId: number;
}

export interface CMsgDOTARealtimeGameStats_PickBanDetails {
  hero: number;
  team: number;
}

export interface CMsgDOTARealtimeGameStats_MatchDetails {
  serverSteamId: string;
  matchId: string;
  timestamp: number;
  timeOfDay: number;
  isNightstalkerNight: boolean;
  gameTime: number;
  gameState: number;
  teamidRadiant: number;
  teamidDire: number;
  picks: CMsgDOTARealtimeGameStats_PickBanDetails[];
  bans: CMsgDOTARealtimeGameStats_PickBanDetails[];
  kills: CMsgDOTARealtimeGameStats_KillDetails[];
  broadcasters: CMsgDOTARealtimeGameStats_BroadcasterDetails[];
  gameMode: number;
  leagueId: number;
  leagueNodeId: number;
  singleTeam: boolean;
  cheersPeak: number;
  lobbyType: number;
  startTimestamp: number;
}

export interface CMsgDOTARealtimeGameStats_GraphData {
  graphGold: number[];
  graphXp: number[];
  graphKill: number[];
  graphTower: number[];
  graphRax: number[];
  teamLocStats: CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats[];
}

export enum CMsgDOTARealtimeGameStats_GraphData_eStat {
  CreepGoldEarned = 0,
  KillGoldEarned = 1,
  DeathAndBuybackGoldLost = 2,
  XPEarned = 3,
}

export enum CMsgDOTARealtimeGameStats_GraphData_eLocation {
  BotLane = 0,
  MidLane = 1,
  TopLane = 2,
  Jungle = 3,
  Ancients = 4,
  Other = 5,
}

export interface CMsgDOTARealtimeGameStats_GraphData_LocationStats {
  stats: number[];
}

export interface CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats {
  locStats: CMsgDOTARealtimeGameStats_GraphData_LocationStats[];
}

export interface CMsgDOTARealtimeGameStatsTerse {
  match: CMsgDOTARealtimeGameStatsTerse_MatchDetails | undefined;
  teams: CMsgDOTARealtimeGameStatsTerse_TeamDetails[];
  buildings: CMsgDOTARealtimeGameStatsTerse_BuildingDetails[];
  graphData: CMsgDOTARealtimeGameStatsTerse_GraphData | undefined;
  deltaFrame: boolean;
}

export interface CMsgDOTARealtimeGameStatsTerse_TeamDetails {
  teamNumber: number;
  teamId: number;
  teamName: string;
  teamTag: string;
  teamLogo: string;
  score: number;
  netWorth: number;
  teamLogoUrl: string;
  players: CMsgDOTARealtimeGameStatsTerse_PlayerDetails[];
}

export interface CMsgDOTARealtimeGameStatsTerse_PlayerDetails {
  accountid: number;
  playerid: number;
  name: string;
  team: number;
  heroid: number;
  level: number;
  killCount: number;
  deathCount: number;
  assistsCount: number;
  deniesCount: number;
  lhCount: number;
  gold: number;
  x: number;
  y: number;
  netWorth: number;
  abilities: number[];
  items: number[];
}

export interface CMsgDOTARealtimeGameStatsTerse_BuildingDetails {
  team: number;
  heading: number;
  type: number;
  lane: number;
  tier: number;
  x: number;
  y: number;
  destroyed: boolean;
}

export interface CMsgDOTARealtimeGameStatsTerse_PickBanDetails {
  hero: number;
  team: number;
}

export interface CMsgDOTARealtimeGameStatsTerse_MatchDetails {
  serverSteamId: string;
  matchId: string;
  timestamp: number;
  gameTime: number;
  steamBroadcasterAccountIds: number[];
  gameMode: number;
  leagueId: number;
  leagueNodeId: number;
  gameState: number;
  picks: CMsgDOTARealtimeGameStatsTerse_PickBanDetails[];
  bans: CMsgDOTARealtimeGameStatsTerse_PickBanDetails[];
  lobbyType: number;
  startTimestamp: number;
}

export interface CMsgDOTARealtimeGameStatsTerse_GraphData {
  graphGold: number[];
}

export interface CMsgDOTABroadcastTimelineEvent {
  event: EBroadcastTimelineEvent;
  timestamp: number;
  data: number;
  stringData: string;
}

export interface CMsgGCToClientMatchGroupsVersion {
  matchgroupsVersion: number;
}

export interface CMsgDOTASDOHeroStatsHistory {
  matchId: string;
  gameMode: number;
  lobbyType: number;
  startTime: number;
  won: boolean;
  gpm: number;
  xpm: number;
  kills: number;
  deaths: number;
  assists: number;
}

export interface CMsgPredictionChoice {
  value: number;
  name: string;
  minRawValue: number;
  maxRawValue: number;
}

export interface CMsgInGamePrediction {
  id: number;
  name: string;
  type: CMsgInGamePrediction_EPredictionType;
  group: CMsgInGamePrediction_ERandomSelectionGroupT;
  question: string;
  choices: CMsgPredictionChoice[];
  requiredHeroes: string[];
  queryName: string;
  queryValues: CMsgInGamePrediction_QueryKeyValues[];
  answerResolutionType: CMsgInGamePrediction_EResolutionTypeT;
  pointsToGrant: number;
  rewardAction: number;
  debugForceSelection: number;
  rawValueType: CMsgInGamePrediction_ERawValueTypeT;
}

export enum CMsgInGamePrediction_ERawValueTypeT {
  Number = 0,
  Time = 1,
}

export enum CMsgInGamePrediction_EPredictionType {
  Generic = 0,
  Hero = 1,
  Team = 2,
  Player = 3,
  Special = 4,
  YesNo = 5,
  QualifiersTeam = 6,
}

export enum CMsgInGamePrediction_EResolutionTypeT {
  InvalidQuery = 0,
  FirstToPassQuery = 1,
  LastToPassQuery = 2,
  LastRemainingQuery = 3,
  MaxToPassQuery = 4,
  MinToPassQuery = 5,
  SumQuery = 6,
  MaxTeamSumToPassQuery = 7,
  MinTeamSumToPassQuery = 8,
}

export enum CMsgInGamePrediction_ERandomSelectionGroupT {
  EarlyGame = 0,
  MidGame = 1,
  LateGame = 2,
  Count = 3,
}

export interface CMsgInGamePrediction_QueryKeyValues {
  name: string;
  value: string;
}

export interface CMsgDOTASeasonPredictions {
  predictions: CMsgDOTASeasonPredictions_Prediction[];
  inGamePredictions: CMsgInGamePrediction[];
  inGamePredictionCountPerGame: number;
  inGamePredictionVotingPeriodMinutes: number;
}

export interface CMsgDOTASeasonPredictions_Prediction {
  type: CMsgDOTASeasonPredictions_Prediction_EPredictionType;
  question: string;
  choices: CMsgPredictionChoice[];
  selectionId: number;
  startDate: number;
  lockDate: number;
  reward: number;
  answerType: CMsgDOTASeasonPredictions_Prediction_EAnswerType;
  answerId: number;
  answers: CMsgDOTASeasonPredictions_Prediction_Answers[];
  queryName: string;
  lockOnSelectionId: number;
  lockOnSelectionValue: number;
  lockOnSelectionSet: boolean;
  useAnswerValueRanges: boolean;
  region: ELeagueRegion;
  phases: ELeaguePhase[];
  rewardEvent: EEvent;
}

export enum CMsgDOTASeasonPredictions_Prediction_EPredictionType {
  Generic = 0,
  Hero = 1,
  Team = 2,
  Player = 3,
  Special = 4,
  YesNo = 5,
  QualifiersTeam = 6,
  LastChanceTeam = 7,
}

export enum CMsgDOTASeasonPredictions_Prediction_EAnswerType {
  SingleInt = 0,
  SingleFloat = 1,
  MultipleInt = 2,
  MultipleFloat = 3,
  AnswerTeam = 4,
  SingleTime = 5,
  MultipleTime = 6,
  NoAnswer = 7,
}

export interface CMsgDOTASeasonPredictions_Prediction_Answers {
  answerId: number;
}

export interface CMsgAvailablePredictions {
  matchPredictions: CMsgAvailablePredictions_MatchPrediction[];
}

export interface CMsgAvailablePredictions_MatchPrediction {
  matchId: string;
  predictions: CMsgInGamePrediction[];
}

export interface CMsgLeagueWatchedGames {
  leagues: CMsgLeagueWatchedGames_League[];
}

export interface CMsgLeagueWatchedGames_Series {
  nodeId: number;
  game: number[];
}

export interface CMsgLeagueWatchedGames_League {
  leagueId: number;
  series: CMsgLeagueWatchedGames_Series[];
}

export interface CMsgDOTAMatch {
  duration: number;
  starttime: number;
  players: CMsgDOTAMatch_Player[];
  matchId: string;
  towerStatus: number[];
  barracksStatus: number[];
  cluster: number;
  firstBloodTime: number;
  replaySalt: number;
  serverIp: number;
  serverPort: number;
  lobbyType: number;
  humanPlayers: number;
  averageSkill: number;
  gameBalance: number;
  radiantTeamId: number;
  direTeamId: number;
  leagueid: number;
  radiantTeamName: string;
  direTeamName: string;
  radiantTeamLogo: string;
  direTeamLogo: string;
  radiantTeamLogoUrl: string;
  direTeamLogoUrl: string;
  radiantTeamComplete: number;
  direTeamComplete: number;
  positiveVotes: number;
  negativeVotes: number;
  gameMode: DOTAGameMode;
  picksBans: CMatchHeroSelectEvent[];
  matchSeqNum: string;
  replayState: CMsgDOTAMatch_ReplayState;
  radiantGuildId: number;
  direGuildId: number;
  radiantTeamTag: string;
  direTeamTag: string;
  seriesId: number;
  seriesType: number;
  broadcasterChannels: CMsgDOTAMatch_BroadcasterChannel[];
  engine: number;
  customGameData: CMsgDOTAMatch_CustomGameData | undefined;
  matchFlags: number;
  privateMetadataKey: number;
  radiantTeamScore: number;
  direTeamScore: number;
  matchOutcome: EMatchOutcome;
  tournamentId: number;
  tournamentRound: number;
  preGameDuration: number;
  coaches: CMsgDOTAMatch_Coach[];
}

export enum CMsgDOTAMatch_ReplayState {
  REPLAY_AVAILABLE = 0,
  REPLAY_NOT_RECORDED = 1,
  REPLAY_EXPIRED = 2,
}

export interface CMsgDOTAMatch_Player {
  accountId: number;
  playerSlot: number;
  heroId: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  item7: number;
  item8: number;
  item9: number;
  expectedTeamContribution: number;
  scaledMetric: number;
  previousRank: number;
  rankChange: number;
  mmrType: number;
  kills: number;
  deaths: number;
  assists: number;
  leaverStatus: number;
  gold: number;
  lastHits: number;
  denies: number;
  goldPerMin: number;
  xpPerMin: number;
  goldSpent: number;
  heroDamage: number;
  towerDamage: number;
  heroHealing: number;
  level: number;
  timeLastSeen: number;
  playerName: string;
  supportAbilityValue: number;
  feedingDetected: boolean;
  searchRank: number;
  searchRankUncertainty: number;
  rankUncertaintyChange: number;
  heroPlayCount: number;
  partyId: string;
  scaledHeroDamage: number;
  scaledTowerDamage: number;
  scaledHeroHealing: number;
  scaledKills: number;
  scaledDeaths: number;
  scaledAssists: number;
  claimedFarmGold: number;
  supportGold: number;
  claimedDenies: number;
  claimedMisses: number;
  misses: number;
  abilityUpgrades: CMatchPlayerAbilityUpgrade[];
  additionalUnitsInventory: CMatchAdditionalUnitInventory[];
  permanentBuffs: CMatchPlayerPermanentBuff[];
  proName: string;
  realName: string;
  customGameData: CMsgDOTAMatch_Player_CustomGameData | undefined;
  activePlusSubscription: boolean;
  netWorth: number;
  botDifficulty: number;
  heroPickOrder: number;
  heroWasRandomed: boolean;
  heroWasDotaPlusSuggestion: boolean;
  heroDamageReceived: CMsgDOTAMatch_Player_HeroDamageReceived[];
  heroDamageDealt: CMsgDOTAMatch_Player_HeroDamageReceived[];
  secondsDead: number;
  goldLostToDeath: number;
  laneSelectionFlags: number;
  bountyRunes: number;
  outpostsCaptured: number;
  teamNumber: dotaGcTeam;
  teamSlot: number;
}

export enum CMsgDOTAMatch_Player_HeroDamageType {
  HERO_DAMAGE_PHYSICAL = 0,
  HERO_DAMAGE_MAGICAL = 1,
  HERO_DAMAGE_PURE = 2,
}

export interface CMsgDOTAMatch_Player_CustomGameData {
  dotaTeam: number;
  winner: boolean;
}

export interface CMsgDOTAMatch_Player_HeroDamageReceived {
  preReduction: number;
  postReduction: number;
  damageType: CMsgDOTAMatch_Player_HeroDamageType;
}

export interface CMsgDOTAMatch_BroadcasterInfo {
  accountId: number;
  name: string;
}

export interface CMsgDOTAMatch_BroadcasterChannel {
  countryCode: string;
  description: string;
  broadcasterInfos: CMsgDOTAMatch_BroadcasterInfo[];
  languageCode: string;
}

export interface CMsgDOTAMatch_Coach {
  accountId: number;
  coachName: string;
  coachRating: number;
  coachTeam: number;
  coachPartyId: string;
  isPrivateCoach: boolean;
}

export interface CMsgDOTAMatch_CustomGameData {
  customGameId: string;
  mapName: string;
}

export interface CMsgPlayerCard {
  accountId: number;
  statModifier: CMsgPlayerCard_StatModifier[];
}

export interface CMsgPlayerCard_StatModifier {
  stat: number;
  value: number;
}

export interface CMsgDOTAFantasyPlayerStats {
  playerAccountId: number;
  matchId: string;
  matchCompleted: boolean;
  teamId: number;
  leagueId: number;
  delay: number;
  seriesId: number;
  seriesType: number;
  kills: number;
  deaths: number;
  cs: number;
  gpm: number;
  towerKills: number;
  roshanKills: number;
  teamfightParticipation: number;
  wardsPlaced: number;
  campsStacked: number;
  runesGrabbed: number;
  firstBlood: number;
  stuns: number;
}

export interface CMsgDOTAFantasyPlayerMatchStats {
  matches: CMsgDOTAFantasyPlayerStats[];
}

export interface CMsgDOTABotDebugInfo {
  bots: CMsgDOTABotDebugInfo_Bot[];
  desirePushLaneTop: number;
  desirePushLaneMid: number;
  desirePushLaneBot: number;
  desireDefendLaneTop: number;
  desireDefendLaneMid: number;
  desireDefendLaneBot: number;
  desireFarmLaneTop: number;
  desireFarmLaneMid: number;
  desireFarmLaneBot: number;
  desireFarmRoshan: number;
  executionTime: number;
  runeStatus: number[];
}

export interface CMsgDOTABotDebugInfo_Bot {
  playerOwnerId: number;
  heroId: number;
  difficulty: number;
  powerCurrent: number;
  powerMax: number;
  moveTargetX: number;
  moveTargetY: number;
  moveTargetZ: number;
  activeModeId: number;
  executionTime: number;
  modes: CMsgDOTABotDebugInfo_Bot_Mode[];
  action: CMsgDOTABotDebugInfo_Bot_Action | undefined;
}

export interface CMsgDOTABotDebugInfo_Bot_Mode {
  modeId: number;
  desire: number;
  targetEntity: number;
  targetX: number;
  targetY: number;
  targetZ: number;
}

export interface CMsgDOTABotDebugInfo_Bot_Action {
  actionId: number;
  actionTarget: string;
}

export interface CMsgSuccessfulHero {
  heroId: number;
  winPercent: number;
  longestStreak: number;
}

export interface CMsgRecentMatchInfo {
  matchId: string;
  gameMode: DOTAGameMode;
  kills: number;
  deaths: number;
  assists: number;
  duration: number;
  playerSlot: number;
  matchOutcome: EMatchOutcome;
  timestamp: number;
  lobbyType: number;
  teamNumber: number;
}

export interface CMsgMatchTips {
  tips: CMsgMatchTips_SingleTip[];
}

export interface CMsgMatchTips_SingleTip {
  sourceAccountId: number;
  targetAccountId: number;
  tipAmount: number;
  eventId: EEvent;
}

export interface CMsgDOTAMatchMinimal {
  matchId: string;
  startTime: number;
  duration: number;
  gameMode: DOTAGameMode;
  players: CMsgDOTAMatchMinimal_Player[];
  tourney: CMsgDOTAMatchMinimal_Tourney | undefined;
  matchOutcome: EMatchOutcome;
  radiantScore: number;
  direScore: number;
  lobbyType: number;
}

export interface CMsgDOTAMatchMinimal_Player {
  accountId: number;
  heroId: number;
  kills: number;
  deaths: number;
  assists: number;
  items: number[];
  playerSlot: number;
  proName: string;
  level: number;
  teamNumber: dotaGcTeam;
}

export interface CMsgDOTAMatchMinimal_Tourney {
  leagueId: number;
  seriesType: number;
  seriesGame: number;
  weekendTourneyTournamentId: number;
  weekendTourneySeasonTrophyId: number;
  weekendTourneyDivision: number;
  weekendTourneySkillLevel: number;
  radiantTeamId: number;
  radiantTeamName: string;
  radiantTeamLogo: string;
  radiantTeamLogoUrl: string;
  direTeamId: number;
  direTeamName: string;
  direTeamLogo: string;
  direTeamLogoUrl: string;
}

export interface CMsgConsumableUsage {
  itemDef: number;
  quantityChange: number;
}

export interface CMsgMatchConsumableUsage {
  playerConsumablesUsed: CMsgMatchConsumableUsage_PlayerUsage[];
}

export interface CMsgMatchConsumableUsage_PlayerUsage {
  accountId: number;
  consumablesUsed: CMsgConsumableUsage[];
}

export interface CMsgMatchEventActionGrants {
  playerGrants: CMsgMatchEventActionGrants_PlayerGrants[];
}

export interface CMsgMatchEventActionGrants_PlayerGrants {
  accountId: number;
  actionsGranted: CMsgPendingEventAward[];
}

export interface CMsgCustomGameWhitelist {
  version: number;
  customGamesWhitelist: string[];
  disableWhitelist: boolean;
}

export interface CMsgCustomGameWhitelistForEdit {
  whitelistEntries: CMsgCustomGameWhitelistForEdit_WhitelistEntry[];
}

export interface CMsgCustomGameWhitelistForEdit_WhitelistEntry {
  customGameId: string;
  whitelistState: ECustomGameWhitelistState;
}

export interface CMsgPlayerRecentMatchInfo {
  matchId: string;
  timestamp: number;
  duration: number;
  win: boolean;
  heroId: number;
  kills: number;
  deaths: number;
  assists: number;
}

export interface CMsgPlayerMatchRecord {
  wins: number;
  losses: number;
}

export interface CMsgPlayerRecentMatchOutcomes {
  outcomes: number;
  matchCount: number;
}

export interface CMsgPlayerRecentCommends {
  commends: number;
  matchCount: number;
}

export interface CMsgPlayerRecentAccomplishments {
  recentOutcomes: CMsgPlayerRecentMatchOutcomes | undefined;
  totalRecord: CMsgPlayerMatchRecord | undefined;
  predictionStreak: number;
  plusPredictionStreak: number;
  recentCommends: CMsgPlayerRecentCommends | undefined;
  firstMatchTimestamp: number;
  lastMatch: CMsgPlayerRecentMatchInfo | undefined;
  recentMvps: CMsgPlayerRecentMatchOutcomes | undefined;
}

export interface CMsgPlayerHeroRecentAccomplishments {
  recentOutcomes: CMsgPlayerRecentMatchOutcomes | undefined;
  totalRecord: CMsgPlayerMatchRecord | undefined;
  lastMatch: CMsgPlayerRecentMatchInfo | undefined;
}

export interface CMsgRecentAccomplishments {
  playerAccomplishments: CMsgPlayerRecentAccomplishments | undefined;
  heroAccomplishments: CMsgPlayerHeroRecentAccomplishments | undefined;
}

export interface CMsgServerToGCRequestPlayerRecentAccomplishments {
  accountId: number;
  heroId: number;
}

export interface CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse {
  result: CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse;
  playerAccomplishments: CMsgRecentAccomplishments | undefined;
}

export enum CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
}

export interface CMsgArcanaVoteMatchVotes {
  matchId: number;
  heroId: number;
  voteCount: number;
}

export interface CMsgGCtoGCAssociatedExploiterAccountInfo {
  accountId: number;
  numMatchesToSearch: number;
  minSharedMatchCount: number;
  numAdditionalPlayers: number;
}

export interface CMsgGCtoGCAssociatedExploiterAccountInfoResponse {
  accounts: CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account[];
}

export interface CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account {
  accountId: number;
  numCommonMatches: number;
  earliestCommonMatch: number;
  latestCommonMatch: number;
  generation: number;
  persona: string;
  alreadyBanned: boolean;
}

export interface CMsgPullTabsData {
  slots: CMsgPullTabsData_Slot[];
  jackpots: CMsgPullTabsData_Jackpot[];
  lastBoard: number;
}

export interface CMsgPullTabsData_Slot {
  eventId: number;
  boardId: number;
  heroId: number;
  actionId: number;
  redeemed: boolean;
}

export interface CMsgPullTabsData_Jackpot {
  boardId: number;
  actionId: number;
  heroId: number;
}

export interface CMsgUnderDraftData {
  benchSlots: CMsgUnderDraftData_BenchSlot[];
  shopSlots: CMsgUnderDraftData_ShopSlot[];
  gold: number;
  totalGold: number;
  notRestorable: boolean;
}

export interface CMsgUnderDraftData_BenchSlot {
  slotId: number;
  heroId: number;
  stars: number;
}

export interface CMsgUnderDraftData_ShopSlot {
  slotId: number;
  heroId: number;
  isSpecialReward: boolean;
}

export interface CMsgPlayerTitleData {
  title: number[];
  eventId: number[];
  active: number;
}

export interface CMsgDOTATriviaQuestion {
  questionId: number;
  category: EDOTATriviaQuestionCategory;
  timestamp: number;
  questionValue: string;
  answerValues: string[];
  correctAnswerIndex: number;
}

export interface CMsgDOTATriviaQuestionAnswersSummary {
  summaryAvailable: boolean;
  pickedCount: number[];
}

export interface CMsgGameDataSpecialValueBonus {
  name: string;
  value: number;
  operation: number;
}

export interface CMsgGameDataSpecialValues {
  name: string;
  valuesFloat: number[];
  isPercentage: boolean;
  headingLoc: string;
  bonuses: CMsgGameDataSpecialValueBonus[];
}

export interface CMsgGameDataAbilityOrItem {
  id: number;
  name: string;
  nameLoc: string;
  descLoc: string;
  loreLoc: string;
  notesLoc: string[];
  shardLoc: string;
  scepterLoc: string;
  type: number;
  behavior: string;
  targetTeam: number;
  targetType: number;
  flags: number;
  damage: number;
  immunity: number;
  dispellable: number;
  maxLevel: number;
  castRanges: number[];
  castPoints: number[];
  channelTimes: number[];
  cooldowns: number[];
  durations: number[];
  damages: number[];
  manaCosts: number[];
  goldCosts: number[];
  healthCosts: number[];
  specialValues: CMsgGameDataSpecialValues[];
  isItem: boolean;
  abilityHasScepter: boolean;
  abilityHasShard: boolean;
  abilityIsGrantedByScepter: boolean;
  abilityIsGrantedByShard: boolean;
  itemCost: number;
  itemInitialCharges: number;
  itemNeutralTier: number;
  itemStockMax: number;
  itemStockTime: number;
  itemQuality: number;
}

export interface CMsgGameDataHero {
  id: number;
  name: string;
  orderId: number;
  nameLoc: string;
  bioLoc: string;
  hypeLoc: string;
  npeDescLoc: string;
  strBase: number;
  strGain: number;
  agiBase: number;
  agiGain: number;
  intBase: number;
  intGain: number;
  primaryAttr: number;
  complexity: number;
  attackCapability: number;
  roleLevels: number[];
  damageMin: number;
  damageMax: number;
  attackRate: number;
  attackRange: number;
  projectileSpeed: number;
  armor: number;
  magicResistance: number;
  movementSpeed: number;
  turnRate: number;
  sightRangeDay: number;
  sightRangeNight: number;
  maxHealth: number;
  healthRegen: number;
  maxMana: number;
  manaRegen: number;
  abilities: CMsgGameDataAbilityOrItem[];
  talents: CMsgGameDataAbilityOrItem[];
}

export interface CMsgGameDataAbilities {
  abilities: CMsgGameDataAbilityOrItem[];
}

export interface CMsgGameDataItems {
  items: CMsgGameDataAbilityOrItem[];
}

export interface CMsgGameDataHeroes {
  heroes: CMsgGameDataHero[];
}

export interface CMsgGameDataHeroList {
  heroes: CMsgGameDataHeroList_HeroInfo[];
}

export interface CMsgGameDataHeroList_HeroInfo {
  id: number;
  name: string;
  nameLoc: string;
  nameEnglishLoc: string;
  primaryAttr: number;
  complexity: number;
}

export interface CMsgGameDataItemAbilityList {
  itemabilities: CMsgGameDataItemAbilityList_ItemAbilityInfo[];
}

export interface CMsgGameDataItemAbilityList_ItemAbilityInfo {
  id: number;
  name: string;
  nameLoc: string;
  nameEnglishLoc: string;
  neutralItemTier: number;
}

export interface CMsgLobbyAbilityDraftData {
  shuffleDraftOrder: boolean;
}

export interface CSOEconItemDropRateBonus {
  accountId: number;
  expirationDate: number;
  bonus: number;
  bonusCount: number;
  itemId: string;
  defIndex: number;
  secondsLeft: number;
  boosterType: number;
}

export interface CSOEconItemTournamentPassport {
  accountId: number;
  leagueId: number;
  itemId: string;
  originalPurchaserId: number;
  passportsBought: number;
  version: number;
  defIndex: number;
  rewardFlags: number;
}

export interface CMsgStickerbookSticker {
  itemDefId: number;
  stickerNum: number;
  quality: number;
  positionX: number;
  positionY: number;
  positionZ: number;
  rotation: number;
  scale: number;
  sourceItemId: string;
  depthBias: number;
}

export interface CMsgStickerbookPage {
  pageNum: number;
  eventId: EEvent;
  teamId: number;
  stickers: CMsgStickerbookSticker[];
  pageType: EStickerbookPageType;
}

export interface CMsgStickerbookTeamPageOrderSequence {
  pageNumbers: number[];
}

export interface CMsgStickerbook {
  pages: CMsgStickerbookPage[];
  teamPageOrderSequence: CMsgStickerbookTeamPageOrderSequence | undefined;
  favoritePageNum: number;
}

export interface CMsgStickerHero {
  heroId: number;
  itemDefId: number;
  quality: number;
  sourceItemId: string;
}

export interface CMsgStickerHeroes {
  heroes: CMsgStickerHero[];
}

export interface CMsgHeroRoleStats {
  laneSelectionFlags: number;
  matchCount: number;
  winCount: number;
}

export interface CMsgHeroRoleHeroStats {
  heroId: number;
  roleStats: CMsgHeroRoleStats[];
}

export interface CMsgHeroRoleRankStats {
  rankTier: number;
  heroStats: CMsgHeroRoleHeroStats[];
}

export interface CMsgHeroRoleAllRanksStats {
  startTimestamp: number;
  endTimestamp: number;
  rankStats: CMsgHeroRoleRankStats[];
}

export interface CMsgMapStatsSnapshot {
  timestamp: number;
  famangosGained: string;
  wisdomRunesGained: string;
  roshanKillsDay: string;
  roshanKillsNight: string;
  portalsUsed: string;
  lanternsLit: string;
  minibossKills: string;
  outpostsCaptured: string;
  shieldRunesGained: string;
}

export interface CMsgGlobalMapStats {
  current: CMsgMapStatsSnapshot | undefined;
  windowStart: CMsgMapStatsSnapshot | undefined;
  windowEnd: CMsgMapStatsSnapshot | undefined;
}

function createBaseCSODOTAGameAccountClient(): CSODOTAGameAccountClient {
  return {
    accountId: 0,
    wins: 0,
    losses: 0,
    xp: 0,
    level: 0,
    initialSkill: 0,
    leaverCount: 0,
    secondaryLeaverCount: 0,
    lowPriorityUntilDate: 0,
    preventTextChatUntilDate: 0,
    preventVoiceUntilDate: 0,
    preventPublicTextChatUntilDate: 0,
    preventNewPlayerChatUntilDate: 0,
    lastAbandonedGameDate: 0,
    lastSecondaryAbandonedGameDate: 0,
    leaverPenaltyCount: 0,
    completedGameStreak: 0,
    accountDisabledUntilDate: 0,
    accountDisabledCount: 0,
    matchDisabledUntilDate: 0,
    matchDisabledCount: 0,
    shutdownlawterminatetimestamp: 0,
    lowPriorityGamesRemaining: 0,
    recruitmentLevel: 0,
    hasNewNotifications: false,
    isLeagueAdmin: false,
    casualGamesPlayed: 0,
    soloCompetitiveGamesPlayed: 0,
    partyCompetitiveGamesPlayed: 0,
    casual1v1GamesPlayed: 0,
    currAllHeroChallengeId: 0,
    playTimePoints: 0,
    accountFlags: 0,
    playTimeLevel: 0,
    playerBehaviorSeqNumLastReport: 0,
    playerBehaviorScoreLastReport: 0,
    playerBehaviorReportOldData: false,
    tourneySkillLevel: 0,
    tourneyRecentParticipationDate: 0,
    anchoredPhoneNumberId: "0",
    rankedMatchmakingBanUntilDate: 0,
    recentGameTime1: 0,
    recentGameTime2: 0,
    recentGameTime3: 0,
    favoriteTeamPacked: "0",
    recentReportTime: 0,
    customGameDisabledUntilDate: 0,
    recentWinTime1: 0,
    recentWinTime2: 0,
    recentWinTime3: 0,
    coachRating: 0,
    queuePoints: 0,
    roleHandicaps: [],
    eventModeRecentTime: 0,
    mmrRecalibrationTime: 0,
  };
}

export const CSODOTAGameAccountClient = {
  encode(message: CSODOTAGameAccountClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.wins !== 0) {
      writer.uint32(24).uint32(message.wins);
    }
    if (message.losses !== 0) {
      writer.uint32(32).uint32(message.losses);
    }
    if (message.xp !== 0) {
      writer.uint32(96).uint32(message.xp);
    }
    if (message.level !== 0) {
      writer.uint32(104).uint32(message.level);
    }
    if (message.initialSkill !== 0) {
      writer.uint32(112).uint32(message.initialSkill);
    }
    if (message.leaverCount !== 0) {
      writer.uint32(120).uint32(message.leaverCount);
    }
    if (message.secondaryLeaverCount !== 0) {
      writer.uint32(464).uint32(message.secondaryLeaverCount);
    }
    if (message.lowPriorityUntilDate !== 0) {
      writer.uint32(144).uint32(message.lowPriorityUntilDate);
    }
    if (message.preventTextChatUntilDate !== 0) {
      writer.uint32(160).uint32(message.preventTextChatUntilDate);
    }
    if (message.preventVoiceUntilDate !== 0) {
      writer.uint32(168).uint32(message.preventVoiceUntilDate);
    }
    if (message.preventPublicTextChatUntilDate !== 0) {
      writer.uint32(688).uint32(message.preventPublicTextChatUntilDate);
    }
    if (message.preventNewPlayerChatUntilDate !== 0) {
      writer.uint32(976).uint32(message.preventNewPlayerChatUntilDate);
    }
    if (message.lastAbandonedGameDate !== 0) {
      writer.uint32(176).uint32(message.lastAbandonedGameDate);
    }
    if (message.lastSecondaryAbandonedGameDate !== 0) {
      writer.uint32(472).uint32(message.lastSecondaryAbandonedGameDate);
    }
    if (message.leaverPenaltyCount !== 0) {
      writer.uint32(184).uint32(message.leaverPenaltyCount);
    }
    if (message.completedGameStreak !== 0) {
      writer.uint32(192).uint32(message.completedGameStreak);
    }
    if (message.accountDisabledUntilDate !== 0) {
      writer.uint32(304).uint32(message.accountDisabledUntilDate);
    }
    if (message.accountDisabledCount !== 0) {
      writer.uint32(312).uint32(message.accountDisabledCount);
    }
    if (message.matchDisabledUntilDate !== 0) {
      writer.uint32(328).uint32(message.matchDisabledUntilDate);
    }
    if (message.matchDisabledCount !== 0) {
      writer.uint32(336).uint32(message.matchDisabledCount);
    }
    if (message.shutdownlawterminatetimestamp !== 0) {
      writer.uint32(376).uint32(message.shutdownlawterminatetimestamp);
    }
    if (message.lowPriorityGamesRemaining !== 0) {
      writer.uint32(384).uint32(message.lowPriorityGamesRemaining);
    }
    if (message.recruitmentLevel !== 0) {
      writer.uint32(440).uint32(message.recruitmentLevel);
    }
    if (message.hasNewNotifications === true) {
      writer.uint32(448).bool(message.hasNewNotifications);
    }
    if (message.isLeagueAdmin === true) {
      writer.uint32(456).bool(message.isLeagueAdmin);
    }
    if (message.casualGamesPlayed !== 0) {
      writer.uint32(480).uint32(message.casualGamesPlayed);
    }
    if (message.soloCompetitiveGamesPlayed !== 0) {
      writer.uint32(488).uint32(message.soloCompetitiveGamesPlayed);
    }
    if (message.partyCompetitiveGamesPlayed !== 0) {
      writer.uint32(496).uint32(message.partyCompetitiveGamesPlayed);
    }
    if (message.casual1v1GamesPlayed !== 0) {
      writer.uint32(520).uint32(message.casual1v1GamesPlayed);
    }
    if (message.currAllHeroChallengeId !== 0) {
      writer.uint32(536).uint32(message.currAllHeroChallengeId);
    }
    if (message.playTimePoints !== 0) {
      writer.uint32(544).uint32(message.playTimePoints);
    }
    if (message.accountFlags !== 0) {
      writer.uint32(552).uint32(message.accountFlags);
    }
    if (message.playTimeLevel !== 0) {
      writer.uint32(560).uint32(message.playTimeLevel);
    }
    if (message.playerBehaviorSeqNumLastReport !== 0) {
      writer.uint32(568).uint32(message.playerBehaviorSeqNumLastReport);
    }
    if (message.playerBehaviorScoreLastReport !== 0) {
      writer.uint32(576).uint32(message.playerBehaviorScoreLastReport);
    }
    if (message.playerBehaviorReportOldData === true) {
      writer.uint32(584).bool(message.playerBehaviorReportOldData);
    }
    if (message.tourneySkillLevel !== 0) {
      writer.uint32(592).uint32(message.tourneySkillLevel);
    }
    if (message.tourneyRecentParticipationDate !== 0) {
      writer.uint32(680).uint32(message.tourneyRecentParticipationDate);
    }
    if (message.anchoredPhoneNumberId !== "0") {
      writer.uint32(704).uint64(message.anchoredPhoneNumberId);
    }
    if (message.rankedMatchmakingBanUntilDate !== 0) {
      writer.uint32(712).uint32(message.rankedMatchmakingBanUntilDate);
    }
    if (message.recentGameTime1 !== 0) {
      writer.uint32(720).uint32(message.recentGameTime1);
    }
    if (message.recentGameTime2 !== 0) {
      writer.uint32(728).uint32(message.recentGameTime2);
    }
    if (message.recentGameTime3 !== 0) {
      writer.uint32(736).uint32(message.recentGameTime3);
    }
    if (message.favoriteTeamPacked !== "0") {
      writer.uint32(824).uint64(message.favoriteTeamPacked);
    }
    if (message.recentReportTime !== 0) {
      writer.uint32(832).uint32(message.recentReportTime);
    }
    if (message.customGameDisabledUntilDate !== 0) {
      writer.uint32(840).uint32(message.customGameDisabledUntilDate);
    }
    if (message.recentWinTime1 !== 0) {
      writer.uint32(848).uint32(message.recentWinTime1);
    }
    if (message.recentWinTime2 !== 0) {
      writer.uint32(856).uint32(message.recentWinTime2);
    }
    if (message.recentWinTime3 !== 0) {
      writer.uint32(864).uint32(message.recentWinTime3);
    }
    if (message.coachRating !== 0) {
      writer.uint32(872).uint32(message.coachRating);
    }
    if (message.queuePoints !== 0) {
      writer.uint32(912).uint32(message.queuePoints);
    }
    for (const v of message.roleHandicaps) {
      CSODOTAGameAccountClient_RoleHandicap.encode(v!, writer.uint32(922).fork()).ldelim();
    }
    if (message.eventModeRecentTime !== 0) {
      writer.uint32(960).uint32(message.eventModeRecentTime);
    }
    if (message.mmrRecalibrationTime !== 0) {
      writer.uint32(968).uint32(message.mmrRecalibrationTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTAGameAccountClient {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTAGameAccountClient();
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

          message.wins = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.losses = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.xp = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.initialSkill = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.leaverCount = reader.uint32();
          continue;
        case 58:
          if (tag != 464) {
            break;
          }

          message.secondaryLeaverCount = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.lowPriorityUntilDate = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.preventTextChatUntilDate = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.preventVoiceUntilDate = reader.uint32();
          continue;
        case 86:
          if (tag != 688) {
            break;
          }

          message.preventPublicTextChatUntilDate = reader.uint32();
          continue;
        case 122:
          if (tag != 976) {
            break;
          }

          message.preventNewPlayerChatUntilDate = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.lastAbandonedGameDate = reader.uint32();
          continue;
        case 59:
          if (tag != 472) {
            break;
          }

          message.lastSecondaryAbandonedGameDate = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.leaverPenaltyCount = reader.uint32();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.completedGameStreak = reader.uint32();
          continue;
        case 38:
          if (tag != 304) {
            break;
          }

          message.accountDisabledUntilDate = reader.uint32();
          continue;
        case 39:
          if (tag != 312) {
            break;
          }

          message.accountDisabledCount = reader.uint32();
          continue;
        case 41:
          if (tag != 328) {
            break;
          }

          message.matchDisabledUntilDate = reader.uint32();
          continue;
        case 42:
          if (tag != 336) {
            break;
          }

          message.matchDisabledCount = reader.uint32();
          continue;
        case 47:
          if (tag != 376) {
            break;
          }

          message.shutdownlawterminatetimestamp = reader.uint32();
          continue;
        case 48:
          if (tag != 384) {
            break;
          }

          message.lowPriorityGamesRemaining = reader.uint32();
          continue;
        case 55:
          if (tag != 440) {
            break;
          }

          message.recruitmentLevel = reader.uint32();
          continue;
        case 56:
          if (tag != 448) {
            break;
          }

          message.hasNewNotifications = reader.bool();
          continue;
        case 57:
          if (tag != 456) {
            break;
          }

          message.isLeagueAdmin = reader.bool();
          continue;
        case 60:
          if (tag != 480) {
            break;
          }

          message.casualGamesPlayed = reader.uint32();
          continue;
        case 61:
          if (tag != 488) {
            break;
          }

          message.soloCompetitiveGamesPlayed = reader.uint32();
          continue;
        case 62:
          if (tag != 496) {
            break;
          }

          message.partyCompetitiveGamesPlayed = reader.uint32();
          continue;
        case 65:
          if (tag != 520) {
            break;
          }

          message.casual1v1GamesPlayed = reader.uint32();
          continue;
        case 67:
          if (tag != 536) {
            break;
          }

          message.currAllHeroChallengeId = reader.uint32();
          continue;
        case 68:
          if (tag != 544) {
            break;
          }

          message.playTimePoints = reader.uint32();
          continue;
        case 69:
          if (tag != 552) {
            break;
          }

          message.accountFlags = reader.uint32();
          continue;
        case 70:
          if (tag != 560) {
            break;
          }

          message.playTimeLevel = reader.uint32();
          continue;
        case 71:
          if (tag != 568) {
            break;
          }

          message.playerBehaviorSeqNumLastReport = reader.uint32();
          continue;
        case 72:
          if (tag != 576) {
            break;
          }

          message.playerBehaviorScoreLastReport = reader.uint32();
          continue;
        case 73:
          if (tag != 584) {
            break;
          }

          message.playerBehaviorReportOldData = reader.bool();
          continue;
        case 74:
          if (tag != 592) {
            break;
          }

          message.tourneySkillLevel = reader.uint32();
          continue;
        case 85:
          if (tag != 680) {
            break;
          }

          message.tourneyRecentParticipationDate = reader.uint32();
          continue;
        case 88:
          if (tag != 704) {
            break;
          }

          message.anchoredPhoneNumberId = longToString(reader.uint64() as Long);
          continue;
        case 89:
          if (tag != 712) {
            break;
          }

          message.rankedMatchmakingBanUntilDate = reader.uint32();
          continue;
        case 90:
          if (tag != 720) {
            break;
          }

          message.recentGameTime1 = reader.uint32();
          continue;
        case 91:
          if (tag != 728) {
            break;
          }

          message.recentGameTime2 = reader.uint32();
          continue;
        case 92:
          if (tag != 736) {
            break;
          }

          message.recentGameTime3 = reader.uint32();
          continue;
        case 103:
          if (tag != 824) {
            break;
          }

          message.favoriteTeamPacked = longToString(reader.uint64() as Long);
          continue;
        case 104:
          if (tag != 832) {
            break;
          }

          message.recentReportTime = reader.uint32();
          continue;
        case 105:
          if (tag != 840) {
            break;
          }

          message.customGameDisabledUntilDate = reader.uint32();
          continue;
        case 106:
          if (tag != 848) {
            break;
          }

          message.recentWinTime1 = reader.uint32();
          continue;
        case 107:
          if (tag != 856) {
            break;
          }

          message.recentWinTime2 = reader.uint32();
          continue;
        case 108:
          if (tag != 864) {
            break;
          }

          message.recentWinTime3 = reader.uint32();
          continue;
        case 109:
          if (tag != 872) {
            break;
          }

          message.coachRating = reader.uint32();
          continue;
        case 114:
          if (tag != 912) {
            break;
          }

          message.queuePoints = reader.uint32();
          continue;
        case 115:
          if (tag != 922) {
            break;
          }

          message.roleHandicaps.push(CSODOTAGameAccountClient_RoleHandicap.decode(reader, reader.uint32()));
          continue;
        case 120:
          if (tag != 960) {
            break;
          }

          message.eventModeRecentTime = reader.uint32();
          continue;
        case 121:
          if (tag != 968) {
            break;
          }

          message.mmrRecalibrationTime = reader.uint32();
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

function createBaseCSODOTAGameAccountClient_RoleHandicap(): CSODOTAGameAccountClient_RoleHandicap {
  return { role: 0, handicap: 0 };
}

export const CSODOTAGameAccountClient_RoleHandicap = {
  encode(message: CSODOTAGameAccountClient_RoleHandicap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== 0) {
      writer.uint32(8).uint32(message.role);
    }
    if (message.handicap !== 0) {
      writer.uint32(21).float(message.handicap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTAGameAccountClient_RoleHandicap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTAGameAccountClient_RoleHandicap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.role = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.handicap = reader.float();
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

function createBaseCSODOTAGameAccountPlus(): CSODOTAGameAccountPlus {
  return {
    accountId: 0,
    originalStartDate: 0,
    plusFlags: 0,
    plusStatus: 0,
    prepaidTimeStart: 0,
    prepaidTimeBalance: 0,
    nextPaymentDate: 0,
    steamAgreementId: "0",
  };
}

export const CSODOTAGameAccountPlus = {
  encode(message: CSODOTAGameAccountPlus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.originalStartDate !== 0) {
      writer.uint32(16).uint32(message.originalStartDate);
    }
    if (message.plusFlags !== 0) {
      writer.uint32(24).uint32(message.plusFlags);
    }
    if (message.plusStatus !== 0) {
      writer.uint32(32).uint32(message.plusStatus);
    }
    if (message.prepaidTimeStart !== 0) {
      writer.uint32(40).uint32(message.prepaidTimeStart);
    }
    if (message.prepaidTimeBalance !== 0) {
      writer.uint32(48).uint32(message.prepaidTimeBalance);
    }
    if (message.nextPaymentDate !== 0) {
      writer.uint32(61).fixed32(message.nextPaymentDate);
    }
    if (message.steamAgreementId !== "0") {
      writer.uint32(65).fixed64(message.steamAgreementId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTAGameAccountPlus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTAGameAccountPlus();
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

          message.originalStartDate = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.plusFlags = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.plusStatus = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.prepaidTimeStart = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.prepaidTimeBalance = reader.uint32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.nextPaymentDate = reader.fixed32();
          continue;
        case 8:
          if (tag != 65) {
            break;
          }

          message.steamAgreementId = longToString(reader.fixed64() as Long);
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

function createBaseCMsgLobbyFeaturedGamemodeProgress(): CMsgLobbyFeaturedGamemodeProgress {
  return { accounts: [] };
}

export const CMsgLobbyFeaturedGamemodeProgress = {
  encode(message: CMsgLobbyFeaturedGamemodeProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      CMsgLobbyFeaturedGamemodeProgress_AccountProgress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyFeaturedGamemodeProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyFeaturedGamemodeProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accounts.push(CMsgLobbyFeaturedGamemodeProgress_AccountProgress.decode(reader, reader.uint32()));
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

function createBaseCMsgLobbyFeaturedGamemodeProgress_AccountProgress(): CMsgLobbyFeaturedGamemodeProgress_AccountProgress {
  return { accountId: 0, currentValue: 0, maxValue: 0 };
}

export const CMsgLobbyFeaturedGamemodeProgress_AccountProgress = {
  encode(
    message: CMsgLobbyFeaturedGamemodeProgress_AccountProgress,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.currentValue !== 0) {
      writer.uint32(16).uint32(message.currentValue);
    }
    if (message.maxValue !== 0) {
      writer.uint32(24).uint32(message.maxValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyFeaturedGamemodeProgress_AccountProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyFeaturedGamemodeProgress_AccountProgress();
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

          message.currentValue = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.maxValue = reader.uint32();
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

function createBaseCMsgBattleCupVictory(): CMsgBattleCupVictory {
  return {
    accountId: 0,
    winDate: 0,
    validUntil: 0,
    skillLevel: 0,
    tournamentId: 0,
    divisionId: 0,
    teamId: 0,
    streak: 0,
    trophyId: 0,
  };
}

export const CMsgBattleCupVictory = {
  encode(message: CMsgBattleCupVictory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.winDate !== 0) {
      writer.uint32(16).uint32(message.winDate);
    }
    if (message.validUntil !== 0) {
      writer.uint32(24).uint32(message.validUntil);
    }
    if (message.skillLevel !== 0) {
      writer.uint32(32).uint32(message.skillLevel);
    }
    if (message.tournamentId !== 0) {
      writer.uint32(40).uint32(message.tournamentId);
    }
    if (message.divisionId !== 0) {
      writer.uint32(48).uint32(message.divisionId);
    }
    if (message.teamId !== 0) {
      writer.uint32(56).uint32(message.teamId);
    }
    if (message.streak !== 0) {
      writer.uint32(64).uint32(message.streak);
    }
    if (message.trophyId !== 0) {
      writer.uint32(72).uint32(message.trophyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBattleCupVictory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBattleCupVictory();
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

          message.winDate = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.validUntil = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.skillLevel = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.tournamentId = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.divisionId = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.streak = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.trophyId = reader.uint32();
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

function createBaseCMsgLobbyBattleCupVictoryList(): CMsgLobbyBattleCupVictoryList {
  return { winners: [] };
}

export const CMsgLobbyBattleCupVictoryList = {
  encode(message: CMsgLobbyBattleCupVictoryList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.winners) {
      CMsgBattleCupVictory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyBattleCupVictoryList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyBattleCupVictoryList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.winners.push(CMsgBattleCupVictory.decode(reader, reader.uint32()));
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

function createBaseCMsgDOTABroadcastNotification(): CMsgDOTABroadcastNotification {
  return { message: "" };
}

export const CMsgDOTABroadcastNotification = {
  encode(message: CMsgDOTABroadcastNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTABroadcastNotification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTABroadcastNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
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

function createBaseCProtoItemHeroStatue(): CProtoItemHeroStatue {
  return {
    heroId: 0,
    statusEffectIndex: 0,
    sequenceName: "",
    cycle: 0,
    wearable: [],
    inscription: "",
    style: [],
    tournamentDrop: false,
  };
}

export const CProtoItemHeroStatue = {
  encode(message: CProtoItemHeroStatue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.statusEffectIndex !== 0) {
      writer.uint32(16).uint32(message.statusEffectIndex);
    }
    if (message.sequenceName !== "") {
      writer.uint32(26).string(message.sequenceName);
    }
    if (message.cycle !== 0) {
      writer.uint32(37).float(message.cycle);
    }
    writer.uint32(42).fork();
    for (const v of message.wearable) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.inscription !== "") {
      writer.uint32(50).string(message.inscription);
    }
    writer.uint32(58).fork();
    for (const v of message.style) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.tournamentDrop === true) {
      writer.uint32(64).bool(message.tournamentDrop);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CProtoItemHeroStatue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCProtoItemHeroStatue();
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

          message.statusEffectIndex = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.sequenceName = reader.string();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.cycle = reader.float();
          continue;
        case 5:
          if (tag == 40) {
            message.wearable.push(reader.uint32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.wearable.push(reader.uint32());
            }

            continue;
          }

          break;
        case 6:
          if (tag != 50) {
            break;
          }

          message.inscription = reader.string();
          continue;
        case 7:
          if (tag == 56) {
            message.style.push(reader.uint32());
            continue;
          }

          if (tag == 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.style.push(reader.uint32());
            }

            continue;
          }

          break;
        case 8:
          if (tag != 64) {
            break;
          }

          message.tournamentDrop = reader.bool();
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

function createBaseCMatchPlayerAbilityUpgrade(): CMatchPlayerAbilityUpgrade {
  return { ability: 0, time: 0 };
}

export const CMatchPlayerAbilityUpgrade = {
  encode(message: CMatchPlayerAbilityUpgrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ability !== 0) {
      writer.uint32(8).int32(message.ability);
    }
    if (message.time !== 0) {
      writer.uint32(16).uint32(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMatchPlayerAbilityUpgrade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMatchPlayerAbilityUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ability = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.time = reader.uint32();
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

function createBaseCMatchPlayerTimedCustomStat(): CMatchPlayerTimedCustomStat {
  return { stat: 1, value: 0 };
}

export const CMatchPlayerTimedCustomStat = {
  encode(message: CMatchPlayerTimedCustomStat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stat !== 1) {
      writer.uint32(16).int32(message.stat);
    }
    if (message.value !== 0) {
      writer.uint32(29).float(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMatchPlayerTimedCustomStat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMatchPlayerTimedCustomStat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.stat = reader.int32() as any;
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.value = reader.float();
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

function createBaseCMatchPlayerTimedStats(): CMatchPlayerTimedStats {
  return {
    time: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
    netWorth: 0,
    xp: 0,
    lastHits: 0,
    denies: 0,
    bountyRuneGold: 0,
    rangeCreepUpgradeGold: 0,
    observerWardsDewarded: 0,
    reliableGoldEarned: 0,
    goldLossPrevented: 0,
    heroKillGold: 0,
    creepKillGold: 0,
    buildingGold: 0,
    otherGold: 0,
    comebackGold: 0,
    experimentalGold: 0,
    experimental2Gold: 0,
    creepDenyGold: 0,
    tpScrollsPurchased1: 0,
    tpScrollsPurchased2: 0,
    tpScrollsPurchased3: 0,
    tpScrollsPurchased4: 0,
    tpScrollsPurchased5: 0,
    neutralGold: 0,
    courierGold: 0,
    roshanGold: 0,
    incomeGold: 0,
    itemValue: 0,
    supportGoldSpent: 0,
    campsStacked: 0,
    wardsPlaced: 0,
    tripleKills: 0,
    rampages: 0,
    customStats: [],
  };
}

export const CMatchPlayerTimedStats = {
  encode(message: CMatchPlayerTimedStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).uint32(message.time);
    }
    if (message.kills !== 0) {
      writer.uint32(16).uint32(message.kills);
    }
    if (message.deaths !== 0) {
      writer.uint32(24).uint32(message.deaths);
    }
    if (message.assists !== 0) {
      writer.uint32(32).uint32(message.assists);
    }
    if (message.netWorth !== 0) {
      writer.uint32(40).uint32(message.netWorth);
    }
    if (message.xp !== 0) {
      writer.uint32(48).uint32(message.xp);
    }
    if (message.lastHits !== 0) {
      writer.uint32(56).uint32(message.lastHits);
    }
    if (message.denies !== 0) {
      writer.uint32(64).uint32(message.denies);
    }
    if (message.bountyRuneGold !== 0) {
      writer.uint32(72).uint32(message.bountyRuneGold);
    }
    if (message.rangeCreepUpgradeGold !== 0) {
      writer.uint32(80).uint32(message.rangeCreepUpgradeGold);
    }
    if (message.observerWardsDewarded !== 0) {
      writer.uint32(88).uint32(message.observerWardsDewarded);
    }
    if (message.reliableGoldEarned !== 0) {
      writer.uint32(96).uint32(message.reliableGoldEarned);
    }
    if (message.goldLossPrevented !== 0) {
      writer.uint32(104).uint32(message.goldLossPrevented);
    }
    if (message.heroKillGold !== 0) {
      writer.uint32(112).uint32(message.heroKillGold);
    }
    if (message.creepKillGold !== 0) {
      writer.uint32(120).uint32(message.creepKillGold);
    }
    if (message.buildingGold !== 0) {
      writer.uint32(128).uint32(message.buildingGold);
    }
    if (message.otherGold !== 0) {
      writer.uint32(136).uint32(message.otherGold);
    }
    if (message.comebackGold !== 0) {
      writer.uint32(144).uint32(message.comebackGold);
    }
    if (message.experimentalGold !== 0) {
      writer.uint32(152).uint32(message.experimentalGold);
    }
    if (message.experimental2Gold !== 0) {
      writer.uint32(160).uint32(message.experimental2Gold);
    }
    if (message.creepDenyGold !== 0) {
      writer.uint32(168).uint32(message.creepDenyGold);
    }
    if (message.tpScrollsPurchased1 !== 0) {
      writer.uint32(176).uint32(message.tpScrollsPurchased1);
    }
    if (message.tpScrollsPurchased2 !== 0) {
      writer.uint32(184).uint32(message.tpScrollsPurchased2);
    }
    if (message.tpScrollsPurchased3 !== 0) {
      writer.uint32(192).uint32(message.tpScrollsPurchased3);
    }
    if (message.tpScrollsPurchased4 !== 0) {
      writer.uint32(200).uint32(message.tpScrollsPurchased4);
    }
    if (message.tpScrollsPurchased5 !== 0) {
      writer.uint32(208).uint32(message.tpScrollsPurchased5);
    }
    if (message.neutralGold !== 0) {
      writer.uint32(216).uint32(message.neutralGold);
    }
    if (message.courierGold !== 0) {
      writer.uint32(224).uint32(message.courierGold);
    }
    if (message.roshanGold !== 0) {
      writer.uint32(232).uint32(message.roshanGold);
    }
    if (message.incomeGold !== 0) {
      writer.uint32(240).uint32(message.incomeGold);
    }
    if (message.itemValue !== 0) {
      writer.uint32(288).uint32(message.itemValue);
    }
    if (message.supportGoldSpent !== 0) {
      writer.uint32(296).uint32(message.supportGoldSpent);
    }
    if (message.campsStacked !== 0) {
      writer.uint32(304).uint32(message.campsStacked);
    }
    if (message.wardsPlaced !== 0) {
      writer.uint32(312).uint32(message.wardsPlaced);
    }
    if (message.tripleKills !== 0) {
      writer.uint32(320).uint32(message.tripleKills);
    }
    if (message.rampages !== 0) {
      writer.uint32(328).uint32(message.rampages);
    }
    for (const v of message.customStats) {
      CMatchPlayerTimedCustomStat.encode(v!, writer.uint32(338).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMatchPlayerTimedStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMatchPlayerTimedStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.time = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.kills = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.deaths = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.assists = reader.uint32();
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

          message.xp = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.lastHits = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.denies = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.bountyRuneGold = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.rangeCreepUpgradeGold = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.observerWardsDewarded = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.reliableGoldEarned = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.goldLossPrevented = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.heroKillGold = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.creepKillGold = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.buildingGold = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.otherGold = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.comebackGold = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.experimentalGold = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.experimental2Gold = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.creepDenyGold = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.tpScrollsPurchased1 = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.tpScrollsPurchased2 = reader.uint32();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.tpScrollsPurchased3 = reader.uint32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.tpScrollsPurchased4 = reader.uint32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.tpScrollsPurchased5 = reader.uint32();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.neutralGold = reader.uint32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.courierGold = reader.uint32();
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.roshanGold = reader.uint32();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.incomeGold = reader.uint32();
          continue;
        case 36:
          if (tag != 288) {
            break;
          }

          message.itemValue = reader.uint32();
          continue;
        case 37:
          if (tag != 296) {
            break;
          }

          message.supportGoldSpent = reader.uint32();
          continue;
        case 38:
          if (tag != 304) {
            break;
          }

          message.campsStacked = reader.uint32();
          continue;
        case 39:
          if (tag != 312) {
            break;
          }

          message.wardsPlaced = reader.uint32();
          continue;
        case 40:
          if (tag != 320) {
            break;
          }

          message.tripleKills = reader.uint32();
          continue;
        case 41:
          if (tag != 328) {
            break;
          }

          message.rampages = reader.uint32();
          continue;
        case 42:
          if (tag != 338) {
            break;
          }

          message.customStats.push(CMatchPlayerTimedCustomStat.decode(reader, reader.uint32()));
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

function createBaseCMatchTeamTimedStats(): CMatchTeamTimedStats {
  return { time: 0, enemyTowersKilled: 0, enemyBarracksKilled: 0, enemyTowersStatus: 0, enemyBarracksStatus: 0 };
}

export const CMatchTeamTimedStats = {
  encode(message: CMatchTeamTimedStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).uint32(message.time);
    }
    if (message.enemyTowersKilled !== 0) {
      writer.uint32(16).uint32(message.enemyTowersKilled);
    }
    if (message.enemyBarracksKilled !== 0) {
      writer.uint32(24).uint32(message.enemyBarracksKilled);
    }
    if (message.enemyTowersStatus !== 0) {
      writer.uint32(32).uint32(message.enemyTowersStatus);
    }
    if (message.enemyBarracksStatus !== 0) {
      writer.uint32(40).uint32(message.enemyBarracksStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMatchTeamTimedStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMatchTeamTimedStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.time = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.enemyTowersKilled = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.enemyBarracksKilled = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.enemyTowersStatus = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.enemyBarracksStatus = reader.uint32();
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

function createBaseCMatchAdditionalUnitInventory(): CMatchAdditionalUnitInventory {
  return { unitName: "", items: [] };
}

export const CMatchAdditionalUnitInventory = {
  encode(message: CMatchAdditionalUnitInventory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unitName !== "") {
      writer.uint32(10).string(message.unitName);
    }
    writer.uint32(18).fork();
    for (const v of message.items) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMatchAdditionalUnitInventory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMatchAdditionalUnitInventory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.unitName = reader.string();
          continue;
        case 2:
          if (tag == 16) {
            message.items.push(reader.int32());
            continue;
          }

          if (tag == 18) {
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
};

function createBaseCMatchPlayerPermanentBuff(): CMatchPlayerPermanentBuff {
  return { permanentBuff: 0, stackCount: 0, grantTime: 0 };
}

export const CMatchPlayerPermanentBuff = {
  encode(message: CMatchPlayerPermanentBuff, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permanentBuff !== 0) {
      writer.uint32(8).uint32(message.permanentBuff);
    }
    if (message.stackCount !== 0) {
      writer.uint32(16).uint32(message.stackCount);
    }
    if (message.grantTime !== 0) {
      writer.uint32(24).uint32(message.grantTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMatchPlayerPermanentBuff {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMatchPlayerPermanentBuff();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.permanentBuff = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.stackCount = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.grantTime = reader.uint32();
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

function createBaseCMatchHeroSelectEvent(): CMatchHeroSelectEvent {
  return { isPick: false, team: 0, heroId: 0 };
}

export const CMatchHeroSelectEvent = {
  encode(message: CMatchHeroSelectEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isPick === true) {
      writer.uint32(8).bool(message.isPick);
    }
    if (message.team !== 0) {
      writer.uint32(16).uint32(message.team);
    }
    if (message.heroId !== 0) {
      writer.uint32(24).uint32(message.heroId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMatchHeroSelectEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMatchHeroSelectEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isPick = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.team = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
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
};

function createBaseCMatchClip(): CMatchClip {
  return {
    matchId: "0",
    playerAccountId: 0,
    gameTimeSeconds: 0,
    durationSeconds: 0,
    playerId: 0,
    heroId: 0,
    abilityId: 0,
    cameraMode: 0,
    comment: "",
  };
}

export const CMatchClip = {
  encode(message: CMatchClip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.playerAccountId !== 0) {
      writer.uint32(16).uint32(message.playerAccountId);
    }
    if (message.gameTimeSeconds !== 0) {
      writer.uint32(24).uint32(message.gameTimeSeconds);
    }
    if (message.durationSeconds !== 0) {
      writer.uint32(32).uint32(message.durationSeconds);
    }
    if (message.playerId !== 0) {
      writer.uint32(40).uint32(message.playerId);
    }
    if (message.heroId !== 0) {
      writer.uint32(48).uint32(message.heroId);
    }
    if (message.abilityId !== 0) {
      writer.uint32(56).int32(message.abilityId);
    }
    if (message.cameraMode !== 0) {
      writer.uint32(64).uint32(message.cameraMode);
    }
    if (message.comment !== "") {
      writer.uint32(74).string(message.comment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMatchClip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMatchClip();
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

          message.playerAccountId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.gameTimeSeconds = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.durationSeconds = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.playerId = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.abilityId = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.cameraMode = reader.uint32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.comment = reader.string();
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

function createBaseCPartySearchClientParty(): CPartySearchClientParty {
  return { partyId: "0", beaconType: 0, partyMembers: [] };
}

export const CPartySearchClientParty = {
  encode(message: CPartySearchClientParty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.partyId !== "0") {
      writer.uint32(9).fixed64(message.partyId);
    }
    if (message.beaconType !== 0) {
      writer.uint32(16).int32(message.beaconType);
    }
    writer.uint32(26).fork();
    for (const v of message.partyMembers) {
      writer.fixed32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartySearchClientParty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartySearchClientParty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.partyId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.beaconType = reader.int32();
          continue;
        case 3:
          if (tag == 29) {
            message.partyMembers.push(reader.fixed32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.partyMembers.push(reader.fixed32());
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

function createBaseCMsgDOTAHasItemQuery(): CMsgDOTAHasItemQuery {
  return { accountId: 0, itemId: "0" };
}

export const CMsgDOTAHasItemQuery = {
  encode(message: CMsgDOTAHasItemQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.itemId !== "0") {
      writer.uint32(16).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAHasItemQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAHasItemQuery();
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
};

function createBaseCMsgDOTAHasItemResponse(): CMsgDOTAHasItemResponse {
  return { hasItem: false };
}

export const CMsgDOTAHasItemResponse = {
  encode(message: CMsgDOTAHasItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hasItem === true) {
      writer.uint32(8).bool(message.hasItem);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAHasItemResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAHasItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.hasItem = reader.bool();
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

function createBaseCMsgGCGetPlayerCardItemInfo(): CMsgGCGetPlayerCardItemInfo {
  return { accountId: 0, playerCardItemIds: [], allForEvent: 0 };
}

export const CMsgGCGetPlayerCardItemInfo = {
  encode(message: CMsgGCGetPlayerCardItemInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    writer.uint32(18).fork();
    for (const v of message.playerCardItemIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.allForEvent !== 0) {
      writer.uint32(24).uint32(message.allForEvent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetPlayerCardItemInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetPlayerCardItemInfo();
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
            message.playerCardItemIds.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playerCardItemIds.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag != 24) {
            break;
          }

          message.allForEvent = reader.uint32();
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

function createBaseCMsgGCGetPlayerCardItemInfoResponse(): CMsgGCGetPlayerCardItemInfoResponse {
  return { playerCardInfos: [] };
}

export const CMsgGCGetPlayerCardItemInfoResponse = {
  encode(message: CMsgGCGetPlayerCardItemInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.playerCardInfos) {
      CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetPlayerCardItemInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetPlayerCardItemInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playerCardInfos.push(
            CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo.decode(reader, reader.uint32()),
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

function createBaseCMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo(): CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo {
  return { playerCardItemId: "0", accountId: 0, packedBonuses: "0" };
}

export const CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo = {
  encode(
    message: CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playerCardItemId !== "0") {
      writer.uint32(8).uint64(message.playerCardItemId);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    if (message.packedBonuses !== "0") {
      writer.uint32(24).uint64(message.packedBonuses);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerCardItemId = longToString(reader.uint64() as Long);
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

          message.packedBonuses = longToString(reader.uint64() as Long);
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

function createBaseCSODOTAMapLocationState(): CSODOTAMapLocationState {
  return { accountId: 0, locationId: 0, completed: false };
}

export const CSODOTAMapLocationState = {
  encode(message: CSODOTAMapLocationState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.locationId !== 0) {
      writer.uint32(16).int32(message.locationId);
    }
    if (message.completed === true) {
      writer.uint32(24).bool(message.completed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTAMapLocationState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTAMapLocationState();
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

          message.locationId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.completed = reader.bool();
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

function createBaseCMsgLeagueAdminList(): CMsgLeagueAdminList {
  return { accountIds: [] };
}

export const CMsgLeagueAdminList = {
  encode(message: CMsgLeagueAdminList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.accountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLeagueAdminList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLeagueAdminList();
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
};

function createBaseCMsgDOTAProfileCard(): CMsgDOTAProfileCard {
  return {
    accountId: 0,
    slots: [],
    badgePoints: 0,
    eventPoints: 0,
    eventId: 0,
    recentBattleCupVictory: undefined,
    rankTier: 0,
    leaderboardRank: 0,
    isPlusSubscriber: false,
    plusOriginalStartDate: 0,
    rankTierScore: 0,
    leaderboardRankCore: 0,
    title: 0,
    favoriteTeamPacked: "0",
    lifetimeGames: 0,
  };
}

export const CMsgDOTAProfileCard = {
  encode(message: CMsgDOTAProfileCard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    for (const v of message.slots) {
      CMsgDOTAProfileCard_Slot.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.badgePoints !== 0) {
      writer.uint32(32).uint32(message.badgePoints);
    }
    if (message.eventPoints !== 0) {
      writer.uint32(40).uint32(message.eventPoints);
    }
    if (message.eventId !== 0) {
      writer.uint32(48).uint32(message.eventId);
    }
    if (message.recentBattleCupVictory !== undefined) {
      CMsgBattleCupVictory.encode(message.recentBattleCupVictory, writer.uint32(58).fork()).ldelim();
    }
    if (message.rankTier !== 0) {
      writer.uint32(64).uint32(message.rankTier);
    }
    if (message.leaderboardRank !== 0) {
      writer.uint32(72).uint32(message.leaderboardRank);
    }
    if (message.isPlusSubscriber === true) {
      writer.uint32(80).bool(message.isPlusSubscriber);
    }
    if (message.plusOriginalStartDate !== 0) {
      writer.uint32(88).uint32(message.plusOriginalStartDate);
    }
    if (message.rankTierScore !== 0) {
      writer.uint32(96).uint32(message.rankTierScore);
    }
    if (message.leaderboardRankCore !== 0) {
      writer.uint32(136).uint32(message.leaderboardRankCore);
    }
    if (message.title !== 0) {
      writer.uint32(184).uint32(message.title);
    }
    if (message.favoriteTeamPacked !== "0") {
      writer.uint32(192).uint64(message.favoriteTeamPacked);
    }
    if (message.lifetimeGames !== 0) {
      writer.uint32(200).uint32(message.lifetimeGames);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAProfileCard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAProfileCard();
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
          if (tag != 26) {
            break;
          }

          message.slots.push(CMsgDOTAProfileCard_Slot.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.badgePoints = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.eventPoints = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.recentBattleCupVictory = CMsgBattleCupVictory.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.rankTier = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.leaderboardRank = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.isPlusSubscriber = reader.bool();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.plusOriginalStartDate = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.rankTierScore = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.leaderboardRankCore = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.title = reader.uint32();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.favoriteTeamPacked = longToString(reader.uint64() as Long);
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.lifetimeGames = reader.uint32();
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

function createBaseCMsgDOTAProfileCard_Slot(): CMsgDOTAProfileCard_Slot {
  return {
    slotId: 0,
    trophy: undefined,
    stat: undefined,
    item: undefined,
    hero: undefined,
    emoticon: undefined,
    team: undefined,
  };
}

export const CMsgDOTAProfileCard_Slot = {
  encode(message: CMsgDOTAProfileCard_Slot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slotId !== 0) {
      writer.uint32(8).uint32(message.slotId);
    }
    if (message.trophy !== undefined) {
      CMsgDOTAProfileCard_Slot_Trophy.encode(message.trophy, writer.uint32(18).fork()).ldelim();
    }
    if (message.stat !== undefined) {
      CMsgDOTAProfileCard_Slot_Stat.encode(message.stat, writer.uint32(26).fork()).ldelim();
    }
    if (message.item !== undefined) {
      CMsgDOTAProfileCard_Slot_Item.encode(message.item, writer.uint32(34).fork()).ldelim();
    }
    if (message.hero !== undefined) {
      CMsgDOTAProfileCard_Slot_Hero.encode(message.hero, writer.uint32(42).fork()).ldelim();
    }
    if (message.emoticon !== undefined) {
      CMsgDOTAProfileCard_Slot_Emoticon.encode(message.emoticon, writer.uint32(50).fork()).ldelim();
    }
    if (message.team !== undefined) {
      CMsgDOTAProfileCard_Slot_Team.encode(message.team, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAProfileCard_Slot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAProfileCard_Slot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.slotId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.trophy = CMsgDOTAProfileCard_Slot_Trophy.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.stat = CMsgDOTAProfileCard_Slot_Stat.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.item = CMsgDOTAProfileCard_Slot_Item.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.hero = CMsgDOTAProfileCard_Slot_Hero.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.emoticon = CMsgDOTAProfileCard_Slot_Emoticon.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.team = CMsgDOTAProfileCard_Slot_Team.decode(reader, reader.uint32());
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

function createBaseCMsgDOTAProfileCard_Slot_Trophy(): CMsgDOTAProfileCard_Slot_Trophy {
  return { trophyId: 0, trophyScore: 0 };
}

export const CMsgDOTAProfileCard_Slot_Trophy = {
  encode(message: CMsgDOTAProfileCard_Slot_Trophy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trophyId !== 0) {
      writer.uint32(8).uint32(message.trophyId);
    }
    if (message.trophyScore !== 0) {
      writer.uint32(16).uint32(message.trophyScore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAProfileCard_Slot_Trophy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAProfileCard_Slot_Trophy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.trophyId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.trophyScore = reader.uint32();
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

function createBaseCMsgDOTAProfileCard_Slot_Stat(): CMsgDOTAProfileCard_Slot_Stat {
  return { statId: 3, statScore: 0 };
}

export const CMsgDOTAProfileCard_Slot_Stat = {
  encode(message: CMsgDOTAProfileCard_Slot_Stat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statId !== 3) {
      writer.uint32(8).int32(message.statId);
    }
    if (message.statScore !== 0) {
      writer.uint32(16).uint32(message.statScore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAProfileCard_Slot_Stat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAProfileCard_Slot_Stat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.statId = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.statScore = reader.uint32();
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

function createBaseCMsgDOTAProfileCard_Slot_Item(): CMsgDOTAProfileCard_Slot_Item {
  return { serializedItem: Buffer.alloc(0), itemId: "0" };
}

export const CMsgDOTAProfileCard_Slot_Item = {
  encode(message: CMsgDOTAProfileCard_Slot_Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serializedItem.length !== 0) {
      writer.uint32(10).bytes(message.serializedItem);
    }
    if (message.itemId !== "0") {
      writer.uint32(16).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAProfileCard_Slot_Item {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAProfileCard_Slot_Item();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.serializedItem = reader.bytes() as Buffer;
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
};

function createBaseCMsgDOTAProfileCard_Slot_Hero(): CMsgDOTAProfileCard_Slot_Hero {
  return { heroId: 0, heroWins: 0, heroLosses: 0 };
}

export const CMsgDOTAProfileCard_Slot_Hero = {
  encode(message: CMsgDOTAProfileCard_Slot_Hero, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.heroWins !== 0) {
      writer.uint32(16).uint32(message.heroWins);
    }
    if (message.heroLosses !== 0) {
      writer.uint32(24).uint32(message.heroLosses);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAProfileCard_Slot_Hero {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAProfileCard_Slot_Hero();
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

          message.heroWins = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.heroLosses = reader.uint32();
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

function createBaseCMsgDOTAProfileCard_Slot_Emoticon(): CMsgDOTAProfileCard_Slot_Emoticon {
  return { emoticonId: 0 };
}

export const CMsgDOTAProfileCard_Slot_Emoticon = {
  encode(message: CMsgDOTAProfileCard_Slot_Emoticon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.emoticonId !== 0) {
      writer.uint32(8).uint32(message.emoticonId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAProfileCard_Slot_Emoticon {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAProfileCard_Slot_Emoticon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.emoticonId = reader.uint32();
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

function createBaseCMsgDOTAProfileCard_Slot_Team(): CMsgDOTAProfileCard_Slot_Team {
  return { teamId: 0 };
}

export const CMsgDOTAProfileCard_Slot_Team = {
  encode(message: CMsgDOTAProfileCard_Slot_Team, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).uint32(message.teamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAProfileCard_Slot_Team {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAProfileCard_Slot_Team();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.teamId = reader.uint32();
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

function createBaseCSODOTAPlayerChallenge(): CSODOTAPlayerChallenge {
  return {
    accountId: 0,
    eventId: 0,
    slotId: 0,
    intParam0: 0,
    intParam1: 0,
    createdTime: 0,
    completed: 0,
    sequenceId: 0,
    challengeTier: 0,
    flags: 0,
    attempts: 0,
    completeLimit: 0,
    questRank: 0,
    maxQuestRank: 0,
    instanceId: 0,
    heroId: 0,
    templateId: 0,
  };
}

export const CSODOTAPlayerChallenge = {
  encode(message: CSODOTAPlayerChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).uint32(message.eventId);
    }
    if (message.slotId !== 0) {
      writer.uint32(24).uint32(message.slotId);
    }
    if (message.intParam0 !== 0) {
      writer.uint32(40).uint32(message.intParam0);
    }
    if (message.intParam1 !== 0) {
      writer.uint32(48).uint32(message.intParam1);
    }
    if (message.createdTime !== 0) {
      writer.uint32(56).uint32(message.createdTime);
    }
    if (message.completed !== 0) {
      writer.uint32(64).uint32(message.completed);
    }
    if (message.sequenceId !== 0) {
      writer.uint32(72).uint32(message.sequenceId);
    }
    if (message.challengeTier !== 0) {
      writer.uint32(80).uint32(message.challengeTier);
    }
    if (message.flags !== 0) {
      writer.uint32(88).uint32(message.flags);
    }
    if (message.attempts !== 0) {
      writer.uint32(96).uint32(message.attempts);
    }
    if (message.completeLimit !== 0) {
      writer.uint32(104).uint32(message.completeLimit);
    }
    if (message.questRank !== 0) {
      writer.uint32(112).uint32(message.questRank);
    }
    if (message.maxQuestRank !== 0) {
      writer.uint32(120).uint32(message.maxQuestRank);
    }
    if (message.instanceId !== 0) {
      writer.uint32(128).uint32(message.instanceId);
    }
    if (message.heroId !== 0) {
      writer.uint32(136).uint32(message.heroId);
    }
    if (message.templateId !== 0) {
      writer.uint32(144).uint32(message.templateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTAPlayerChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTAPlayerChallenge();
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

          message.eventId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.slotId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.intParam0 = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.intParam1 = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.createdTime = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.completed = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.sequenceId = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.challengeTier = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.attempts = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.completeLimit = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.questRank = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.maxQuestRank = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.instanceId = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.templateId = reader.uint32();
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

function createBaseCMsgClientToGCRerollPlayerChallenge(): CMsgClientToGCRerollPlayerChallenge {
  return { eventId: 0, sequenceId: 0, heroId: 0 };
}

export const CMsgClientToGCRerollPlayerChallenge = {
  encode(message: CMsgClientToGCRerollPlayerChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.sequenceId !== 0) {
      writer.uint32(24).uint32(message.sequenceId);
    }
    if (message.heroId !== 0) {
      writer.uint32(32).uint32(message.heroId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRerollPlayerChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRerollPlayerChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventId = reader.int32() as any;
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
};

function createBaseCMsgGCRerollPlayerChallengeResponse(): CMsgGCRerollPlayerChallengeResponse {
  return { result: 0 };
}

export const CMsgGCRerollPlayerChallengeResponse = {
  encode(message: CMsgGCRerollPlayerChallengeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCRerollPlayerChallengeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCRerollPlayerChallengeResponse();
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

function createBaseCMsgGCTopCustomGamesList(): CMsgGCTopCustomGamesList {
  return { topCustomGames: [], gameOfTheDay: "0" };
}

export const CMsgGCTopCustomGamesList = {
  encode(message: CMsgGCTopCustomGamesList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.topCustomGames) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.gameOfTheDay !== "0") {
      writer.uint32(16).uint64(message.gameOfTheDay);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCTopCustomGamesList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCTopCustomGamesList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.topCustomGames.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.topCustomGames.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gameOfTheDay = longToString(reader.uint64() as Long);
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

function createBaseCMsgDOTARealtimeGameStats(): CMsgDOTARealtimeGameStats {
  return { match: undefined, teams: [], buildings: [], graphData: undefined, deltaFrame: false };
}

export const CMsgDOTARealtimeGameStats = {
  encode(message: CMsgDOTARealtimeGameStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.match !== undefined) {
      CMsgDOTARealtimeGameStats_MatchDetails.encode(message.match, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.teams) {
      CMsgDOTARealtimeGameStats_TeamDetails.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.buildings) {
      CMsgDOTARealtimeGameStats_BuildingDetails.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.graphData !== undefined) {
      CMsgDOTARealtimeGameStats_GraphData.encode(message.graphData, writer.uint32(34).fork()).ldelim();
    }
    if (message.deltaFrame === true) {
      writer.uint32(40).bool(message.deltaFrame);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.match = CMsgDOTARealtimeGameStats_MatchDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.teams.push(CMsgDOTARealtimeGameStats_TeamDetails.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.buildings.push(CMsgDOTARealtimeGameStats_BuildingDetails.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.graphData = CMsgDOTARealtimeGameStats_GraphData.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.deltaFrame = reader.bool();
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

function createBaseCMsgDOTARealtimeGameStats_TeamDetails(): CMsgDOTARealtimeGameStats_TeamDetails {
  return {
    teamNumber: 0,
    teamId: 0,
    teamName: "",
    teamLogo: "0",
    teamTag: "",
    score: 0,
    netWorth: 0,
    players: [],
    onlyTeam: false,
    cheers: 0,
    teamLogoUrl: "",
  };
}

export const CMsgDOTARealtimeGameStats_TeamDetails = {
  encode(message: CMsgDOTARealtimeGameStats_TeamDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamNumber !== 0) {
      writer.uint32(8).uint32(message.teamNumber);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).uint32(message.teamId);
    }
    if (message.teamName !== "") {
      writer.uint32(26).string(message.teamName);
    }
    if (message.teamLogo !== "0") {
      writer.uint32(33).fixed64(message.teamLogo);
    }
    if (message.teamTag !== "") {
      writer.uint32(82).string(message.teamTag);
    }
    if (message.score !== 0) {
      writer.uint32(40).uint32(message.score);
    }
    if (message.netWorth !== 0) {
      writer.uint32(72).uint32(message.netWorth);
    }
    for (const v of message.players) {
      CMsgDOTARealtimeGameStats_PlayerDetails.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.onlyTeam === true) {
      writer.uint32(56).bool(message.onlyTeam);
    }
    if (message.cheers !== 0) {
      writer.uint32(64).uint32(message.cheers);
    }
    if (message.teamLogoUrl !== "") {
      writer.uint32(90).string(message.teamLogoUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStats_TeamDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStats_TeamDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.teamNumber = reader.uint32();
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

          message.teamName = reader.string();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.teamLogo = longToString(reader.fixed64() as Long);
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.teamTag = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.score = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.netWorth = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.players.push(CMsgDOTARealtimeGameStats_PlayerDetails.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.onlyTeam = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.cheers = reader.uint32();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.teamLogoUrl = reader.string();
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

function createBaseCMsgDOTARealtimeGameStats_ItemDetails(): CMsgDOTARealtimeGameStats_ItemDetails {
  return { itemAbilityId: 0, name: "", time: 0, sold: false, stackcount: 0 };
}

export const CMsgDOTARealtimeGameStats_ItemDetails = {
  encode(message: CMsgDOTARealtimeGameStats_ItemDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemAbilityId !== 0) {
      writer.uint32(8).int32(message.itemAbilityId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.time !== 0) {
      writer.uint32(24).int32(message.time);
    }
    if (message.sold === true) {
      writer.uint32(32).bool(message.sold);
    }
    if (message.stackcount !== 0) {
      writer.uint32(40).uint32(message.stackcount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStats_ItemDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStats_ItemDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemAbilityId = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.time = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.sold = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.stackcount = reader.uint32();
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

function createBaseCMsgDOTARealtimeGameStats_AbilityDetails(): CMsgDOTARealtimeGameStats_AbilityDetails {
  return { id: 0, name: "", level: 0, cooldown: 0, cooldownMax: 0 };
}

export const CMsgDOTARealtimeGameStats_AbilityDetails = {
  encode(message: CMsgDOTARealtimeGameStats_AbilityDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.level !== 0) {
      writer.uint32(24).uint32(message.level);
    }
    if (message.cooldown !== 0) {
      writer.uint32(37).float(message.cooldown);
    }
    if (message.cooldownMax !== 0) {
      writer.uint32(45).float(message.cooldownMax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStats_AbilityDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStats_AbilityDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.cooldown = reader.float();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.cooldownMax = reader.float();
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

function createBaseCMsgDOTARealtimeGameStats_HeroToHeroStats(): CMsgDOTARealtimeGameStats_HeroToHeroStats {
  return { victimid: 0, kills: 0, assists: 0 };
}

export const CMsgDOTARealtimeGameStats_HeroToHeroStats = {
  encode(message: CMsgDOTARealtimeGameStats_HeroToHeroStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.victimid !== 0) {
      writer.uint32(8).int32(message.victimid);
    }
    if (message.kills !== 0) {
      writer.uint32(16).uint32(message.kills);
    }
    if (message.assists !== 0) {
      writer.uint32(24).uint32(message.assists);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStats_HeroToHeroStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStats_HeroToHeroStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.victimid = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.kills = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.assists = reader.uint32();
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

function createBaseCMsgDOTARealtimeGameStats_AbilityList(): CMsgDOTARealtimeGameStats_AbilityList {
  return { id: [] };
}

export const CMsgDOTARealtimeGameStats_AbilityList = {
  encode(message: CMsgDOTARealtimeGameStats_AbilityList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.id) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStats_AbilityList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStats_AbilityList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.id.push(reader.int32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.id.push(reader.int32());
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

function createBaseCMsgDOTARealtimeGameStats_PlayerDetails(): CMsgDOTARealtimeGameStats_PlayerDetails {
  return {
    accountid: 0,
    playerid: 0,
    name: "",
    team: 0,
    heroid: 0,
    healthpoints: 0,
    maxhealthpoints: 0,
    healthregenrate: 0,
    manapoints: 0,
    maxmanapoints: 0,
    manaregenrate: 0,
    baseStrength: 0,
    baseAgility: 0,
    baseIntelligence: 0,
    baseArmor: 0,
    baseMovespeed: 0,
    baseDamage: 0,
    strength: 0,
    agility: 0,
    intelligence: 0,
    armor: 0,
    movespeed: 0,
    damage: 0,
    heroDamage: 0,
    towerDamage: 0,
    abilities: [],
    level: 0,
    killCount: 0,
    deathCount: 0,
    assistsCount: 0,
    deniesCount: 0,
    lhCount: 0,
    heroHealing: 0,
    goldPerMin: 0,
    xpPerMin: 0,
    netGold: 0,
    gold: 0,
    x: 0,
    y: 0,
    respawnTime: 0,
    ultimateCooldown: 0,
    hasBuyback: false,
    items: [],
    stashitems: [],
    itemshoppinglist: [],
    levelpoints: [],
    heroToHeroStats: [],
    hasUltimate: false,
    hasUltimateMana: false,
  };
}

export const CMsgDOTARealtimeGameStats_PlayerDetails = {
  encode(message: CMsgDOTARealtimeGameStats_PlayerDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.playerid !== 0) {
      writer.uint32(16).int32(message.playerid);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.team !== 0) {
      writer.uint32(32).uint32(message.team);
    }
    if (message.heroid !== 0) {
      writer.uint32(40).uint32(message.heroid);
    }
    if (message.healthpoints !== 0) {
      writer.uint32(48).uint32(message.healthpoints);
    }
    if (message.maxhealthpoints !== 0) {
      writer.uint32(56).uint32(message.maxhealthpoints);
    }
    if (message.healthregenrate !== 0) {
      writer.uint32(69).float(message.healthregenrate);
    }
    if (message.manapoints !== 0) {
      writer.uint32(72).uint32(message.manapoints);
    }
    if (message.maxmanapoints !== 0) {
      writer.uint32(80).uint32(message.maxmanapoints);
    }
    if (message.manaregenrate !== 0) {
      writer.uint32(93).float(message.manaregenrate);
    }
    if (message.baseStrength !== 0) {
      writer.uint32(96).uint32(message.baseStrength);
    }
    if (message.baseAgility !== 0) {
      writer.uint32(104).uint32(message.baseAgility);
    }
    if (message.baseIntelligence !== 0) {
      writer.uint32(112).uint32(message.baseIntelligence);
    }
    if (message.baseArmor !== 0) {
      writer.uint32(120).int32(message.baseArmor);
    }
    if (message.baseMovespeed !== 0) {
      writer.uint32(128).uint32(message.baseMovespeed);
    }
    if (message.baseDamage !== 0) {
      writer.uint32(136).uint32(message.baseDamage);
    }
    if (message.strength !== 0) {
      writer.uint32(144).uint32(message.strength);
    }
    if (message.agility !== 0) {
      writer.uint32(152).uint32(message.agility);
    }
    if (message.intelligence !== 0) {
      writer.uint32(160).uint32(message.intelligence);
    }
    if (message.armor !== 0) {
      writer.uint32(168).int32(message.armor);
    }
    if (message.movespeed !== 0) {
      writer.uint32(176).uint32(message.movespeed);
    }
    if (message.damage !== 0) {
      writer.uint32(184).uint32(message.damage);
    }
    if (message.heroDamage !== 0) {
      writer.uint32(192).uint32(message.heroDamage);
    }
    if (message.towerDamage !== 0) {
      writer.uint32(200).uint32(message.towerDamage);
    }
    for (const v of message.abilities) {
      CMsgDOTARealtimeGameStats_AbilityDetails.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    if (message.level !== 0) {
      writer.uint32(216).uint32(message.level);
    }
    if (message.killCount !== 0) {
      writer.uint32(224).uint32(message.killCount);
    }
    if (message.deathCount !== 0) {
      writer.uint32(232).uint32(message.deathCount);
    }
    if (message.assistsCount !== 0) {
      writer.uint32(240).uint32(message.assistsCount);
    }
    if (message.deniesCount !== 0) {
      writer.uint32(248).uint32(message.deniesCount);
    }
    if (message.lhCount !== 0) {
      writer.uint32(256).uint32(message.lhCount);
    }
    if (message.heroHealing !== 0) {
      writer.uint32(264).uint32(message.heroHealing);
    }
    if (message.goldPerMin !== 0) {
      writer.uint32(272).uint32(message.goldPerMin);
    }
    if (message.xpPerMin !== 0) {
      writer.uint32(280).uint32(message.xpPerMin);
    }
    if (message.netGold !== 0) {
      writer.uint32(288).uint32(message.netGold);
    }
    if (message.gold !== 0) {
      writer.uint32(296).uint32(message.gold);
    }
    if (message.x !== 0) {
      writer.uint32(309).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(317).float(message.y);
    }
    if (message.respawnTime !== 0) {
      writer.uint32(320).int32(message.respawnTime);
    }
    if (message.ultimateCooldown !== 0) {
      writer.uint32(328).uint32(message.ultimateCooldown);
    }
    if (message.hasBuyback === true) {
      writer.uint32(336).bool(message.hasBuyback);
    }
    for (const v of message.items) {
      CMsgDOTARealtimeGameStats_ItemDetails.encode(v!, writer.uint32(346).fork()).ldelim();
    }
    for (const v of message.stashitems) {
      CMsgDOTARealtimeGameStats_ItemDetails.encode(v!, writer.uint32(354).fork()).ldelim();
    }
    for (const v of message.itemshoppinglist) {
      CMsgDOTARealtimeGameStats_ItemDetails.encode(v!, writer.uint32(362).fork()).ldelim();
    }
    for (const v of message.levelpoints) {
      CMsgDOTARealtimeGameStats_AbilityList.encode(v!, writer.uint32(370).fork()).ldelim();
    }
    for (const v of message.heroToHeroStats) {
      CMsgDOTARealtimeGameStats_HeroToHeroStats.encode(v!, writer.uint32(378).fork()).ldelim();
    }
    if (message.hasUltimate === true) {
      writer.uint32(384).bool(message.hasUltimate);
    }
    if (message.hasUltimateMana === true) {
      writer.uint32(392).bool(message.hasUltimateMana);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStats_PlayerDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStats_PlayerDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountid = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerid = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.team = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.heroid = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.healthpoints = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.maxhealthpoints = reader.uint32();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.healthregenrate = reader.float();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.manapoints = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.maxmanapoints = reader.uint32();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.manaregenrate = reader.float();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.baseStrength = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.baseAgility = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.baseIntelligence = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.baseArmor = reader.int32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.baseMovespeed = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.baseDamage = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.strength = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.agility = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.intelligence = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.armor = reader.int32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.movespeed = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.damage = reader.uint32();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.heroDamage = reader.uint32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.towerDamage = reader.uint32();
          continue;
        case 26:
          if (tag != 210) {
            break;
          }

          message.abilities.push(CMsgDOTARealtimeGameStats_AbilityDetails.decode(reader, reader.uint32()));
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.killCount = reader.uint32();
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.deathCount = reader.uint32();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.assistsCount = reader.uint32();
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.deniesCount = reader.uint32();
          continue;
        case 32:
          if (tag != 256) {
            break;
          }

          message.lhCount = reader.uint32();
          continue;
        case 33:
          if (tag != 264) {
            break;
          }

          message.heroHealing = reader.uint32();
          continue;
        case 34:
          if (tag != 272) {
            break;
          }

          message.goldPerMin = reader.uint32();
          continue;
        case 35:
          if (tag != 280) {
            break;
          }

          message.xpPerMin = reader.uint32();
          continue;
        case 36:
          if (tag != 288) {
            break;
          }

          message.netGold = reader.uint32();
          continue;
        case 37:
          if (tag != 296) {
            break;
          }

          message.gold = reader.uint32();
          continue;
        case 38:
          if (tag != 309) {
            break;
          }

          message.x = reader.float();
          continue;
        case 39:
          if (tag != 317) {
            break;
          }

          message.y = reader.float();
          continue;
        case 40:
          if (tag != 320) {
            break;
          }

          message.respawnTime = reader.int32();
          continue;
        case 41:
          if (tag != 328) {
            break;
          }

          message.ultimateCooldown = reader.uint32();
          continue;
        case 42:
          if (tag != 336) {
            break;
          }

          message.hasBuyback = reader.bool();
          continue;
        case 43:
          if (tag != 346) {
            break;
          }

          message.items.push(CMsgDOTARealtimeGameStats_ItemDetails.decode(reader, reader.uint32()));
          continue;
        case 44:
          if (tag != 354) {
            break;
          }

          message.stashitems.push(CMsgDOTARealtimeGameStats_ItemDetails.decode(reader, reader.uint32()));
          continue;
        case 45:
          if (tag != 362) {
            break;
          }

          message.itemshoppinglist.push(CMsgDOTARealtimeGameStats_ItemDetails.decode(reader, reader.uint32()));
          continue;
        case 46:
          if (tag != 370) {
            break;
          }

          message.levelpoints.push(CMsgDOTARealtimeGameStats_AbilityList.decode(reader, reader.uint32()));
          continue;
        case 47:
          if (tag != 378) {
            break;
          }

          message.heroToHeroStats.push(CMsgDOTARealtimeGameStats_HeroToHeroStats.decode(reader, reader.uint32()));
          continue;
        case 48:
          if (tag != 384) {
            break;
          }

          message.hasUltimate = reader.bool();
          continue;
        case 49:
          if (tag != 392) {
            break;
          }

          message.hasUltimateMana = reader.bool();
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

function createBaseCMsgDOTARealtimeGameStats_BuildingDetails(): CMsgDOTARealtimeGameStats_BuildingDetails {
  return { team: 0, heading: 0, lane: 0, tier: 0, type: 0, x: 0, y: 0, destroyed: false };
}

export const CMsgDOTARealtimeGameStats_BuildingDetails = {
  encode(message: CMsgDOTARealtimeGameStats_BuildingDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.team !== 0) {
      writer.uint32(16).uint32(message.team);
    }
    if (message.heading !== 0) {
      writer.uint32(29).float(message.heading);
    }
    if (message.lane !== 0) {
      writer.uint32(32).uint32(message.lane);
    }
    if (message.tier !== 0) {
      writer.uint32(40).uint32(message.tier);
    }
    if (message.type !== 0) {
      writer.uint32(48).uint32(message.type);
    }
    if (message.x !== 0) {
      writer.uint32(61).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(69).float(message.y);
    }
    if (message.destroyed === true) {
      writer.uint32(72).bool(message.destroyed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStats_BuildingDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStats_BuildingDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.team = reader.uint32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.heading = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.lane = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.tier = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.type = reader.uint32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.x = reader.float();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.y = reader.float();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.destroyed = reader.bool();
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

function createBaseCMsgDOTARealtimeGameStats_KillDetails(): CMsgDOTARealtimeGameStats_KillDetails {
  return { playerId: 0, deathTime: 0, killerPlayerId: 0 };
}

export const CMsgDOTARealtimeGameStats_KillDetails = {
  encode(message: CMsgDOTARealtimeGameStats_KillDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.deathTime !== 0) {
      writer.uint32(16).int32(message.deathTime);
    }
    if (message.killerPlayerId !== 0) {
      writer.uint32(24).int32(message.killerPlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStats_KillDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStats_KillDetails();
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

          message.deathTime = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.killerPlayerId = reader.int32();
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

function createBaseCMsgDOTARealtimeGameStats_BroadcasterDetails(): CMsgDOTARealtimeGameStats_BroadcasterDetails {
  return { playerId: 0 };
}

export const CMsgDOTARealtimeGameStats_BroadcasterDetails = {
  encode(message: CMsgDOTARealtimeGameStats_BroadcasterDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStats_BroadcasterDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStats_BroadcasterDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId = reader.int32();
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

function createBaseCMsgDOTARealtimeGameStats_PickBanDetails(): CMsgDOTARealtimeGameStats_PickBanDetails {
  return { hero: 0, team: 0 };
}

export const CMsgDOTARealtimeGameStats_PickBanDetails = {
  encode(message: CMsgDOTARealtimeGameStats_PickBanDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hero !== 0) {
      writer.uint32(8).uint32(message.hero);
    }
    if (message.team !== 0) {
      writer.uint32(16).uint32(message.team);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStats_PickBanDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStats_PickBanDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.hero = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
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
};

function createBaseCMsgDOTARealtimeGameStats_MatchDetails(): CMsgDOTARealtimeGameStats_MatchDetails {
  return {
    serverSteamId: "0",
    matchId: "0",
    timestamp: 0,
    timeOfDay: 0,
    isNightstalkerNight: false,
    gameTime: 0,
    gameState: 0,
    teamidRadiant: 0,
    teamidDire: 0,
    picks: [],
    bans: [],
    kills: [],
    broadcasters: [],
    gameMode: 0,
    leagueId: 0,
    leagueNodeId: 0,
    singleTeam: false,
    cheersPeak: 0,
    lobbyType: 0,
    startTimestamp: 0,
  };
}

export const CMsgDOTARealtimeGameStats_MatchDetails = {
  encode(message: CMsgDOTARealtimeGameStats_MatchDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverSteamId !== "0") {
      writer.uint32(9).fixed64(message.serverSteamId);
    }
    if (message.matchId !== "0") {
      writer.uint32(16).uint64(message.matchId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).uint32(message.timestamp);
    }
    if (message.timeOfDay !== 0) {
      writer.uint32(37).float(message.timeOfDay);
    }
    if (message.isNightstalkerNight === true) {
      writer.uint32(40).bool(message.isNightstalkerNight);
    }
    if (message.gameTime !== 0) {
      writer.uint32(48).int32(message.gameTime);
    }
    if (message.gameState !== 0) {
      writer.uint32(152).uint32(message.gameState);
    }
    if (message.teamidRadiant !== 0) {
      writer.uint32(64).uint32(message.teamidRadiant);
    }
    if (message.teamidDire !== 0) {
      writer.uint32(72).uint32(message.teamidDire);
    }
    for (const v of message.picks) {
      CMsgDOTARealtimeGameStats_PickBanDetails.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.bans) {
      CMsgDOTARealtimeGameStats_PickBanDetails.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.kills) {
      CMsgDOTARealtimeGameStats_KillDetails.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.broadcasters) {
      CMsgDOTARealtimeGameStats_BroadcasterDetails.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.gameMode !== 0) {
      writer.uint32(112).uint32(message.gameMode);
    }
    if (message.leagueId !== 0) {
      writer.uint32(120).uint32(message.leagueId);
    }
    if (message.leagueNodeId !== 0) {
      writer.uint32(144).uint32(message.leagueNodeId);
    }
    if (message.singleTeam === true) {
      writer.uint32(128).bool(message.singleTeam);
    }
    if (message.cheersPeak !== 0) {
      writer.uint32(136).uint32(message.cheersPeak);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(160).uint32(message.lobbyType);
    }
    if (message.startTimestamp !== 0) {
      writer.uint32(168).uint32(message.startTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStats_MatchDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStats_MatchDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.serverSteamId = longToString(reader.fixed64() as Long);
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

          message.timestamp = reader.uint32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.timeOfDay = reader.float();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.isNightstalkerNight = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.gameTime = reader.int32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.gameState = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.teamidRadiant = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.teamidDire = reader.uint32();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.picks.push(CMsgDOTARealtimeGameStats_PickBanDetails.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.bans.push(CMsgDOTARealtimeGameStats_PickBanDetails.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.kills.push(CMsgDOTARealtimeGameStats_KillDetails.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.broadcasters.push(CMsgDOTARealtimeGameStats_BroadcasterDetails.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.gameMode = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.leagueNodeId = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.singleTeam = reader.bool();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.cheersPeak = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.lobbyType = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.startTimestamp = reader.uint32();
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

function createBaseCMsgDOTARealtimeGameStats_GraphData(): CMsgDOTARealtimeGameStats_GraphData {
  return { graphGold: [], graphXp: [], graphKill: [], graphTower: [], graphRax: [], teamLocStats: [] };
}

export const CMsgDOTARealtimeGameStats_GraphData = {
  encode(message: CMsgDOTARealtimeGameStats_GraphData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.graphGold) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.graphXp) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.graphKill) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.graphTower) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.graphRax) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.teamLocStats) {
      CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStats_GraphData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStats_GraphData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.graphGold.push(reader.int32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.graphGold.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 16) {
            message.graphXp.push(reader.int32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.graphXp.push(reader.int32());
            }

            continue;
          }

          break;
        case 3:
          if (tag == 24) {
            message.graphKill.push(reader.int32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.graphKill.push(reader.int32());
            }

            continue;
          }

          break;
        case 4:
          if (tag == 32) {
            message.graphTower.push(reader.int32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.graphTower.push(reader.int32());
            }

            continue;
          }

          break;
        case 5:
          if (tag == 40) {
            message.graphRax.push(reader.int32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.graphRax.push(reader.int32());
            }

            continue;
          }

          break;
        case 6:
          if (tag != 50) {
            break;
          }

          message.teamLocStats.push(
            CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats.decode(reader, reader.uint32()),
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

function createBaseCMsgDOTARealtimeGameStats_GraphData_LocationStats(): CMsgDOTARealtimeGameStats_GraphData_LocationStats {
  return { stats: [] };
}

export const CMsgDOTARealtimeGameStats_GraphData_LocationStats = {
  encode(
    message: CMsgDOTARealtimeGameStats_GraphData_LocationStats,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.stats) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStats_GraphData_LocationStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStats_GraphData_LocationStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.stats.push(reader.int32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.stats.push(reader.int32());
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

function createBaseCMsgDOTARealtimeGameStats_GraphData_TeamLocationStats(): CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats {
  return { locStats: [] };
}

export const CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats = {
  encode(
    message: CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.locStats) {
      CMsgDOTARealtimeGameStats_GraphData_LocationStats.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStats_GraphData_TeamLocationStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.locStats.push(CMsgDOTARealtimeGameStats_GraphData_LocationStats.decode(reader, reader.uint32()));
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

function createBaseCMsgDOTARealtimeGameStatsTerse(): CMsgDOTARealtimeGameStatsTerse {
  return { match: undefined, teams: [], buildings: [], graphData: undefined, deltaFrame: false };
}

export const CMsgDOTARealtimeGameStatsTerse = {
  encode(message: CMsgDOTARealtimeGameStatsTerse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.match !== undefined) {
      CMsgDOTARealtimeGameStatsTerse_MatchDetails.encode(message.match, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.teams) {
      CMsgDOTARealtimeGameStatsTerse_TeamDetails.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.buildings) {
      CMsgDOTARealtimeGameStatsTerse_BuildingDetails.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.graphData !== undefined) {
      CMsgDOTARealtimeGameStatsTerse_GraphData.encode(message.graphData, writer.uint32(34).fork()).ldelim();
    }
    if (message.deltaFrame === true) {
      writer.uint32(40).bool(message.deltaFrame);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStatsTerse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStatsTerse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.match = CMsgDOTARealtimeGameStatsTerse_MatchDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.teams.push(CMsgDOTARealtimeGameStatsTerse_TeamDetails.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.buildings.push(CMsgDOTARealtimeGameStatsTerse_BuildingDetails.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.graphData = CMsgDOTARealtimeGameStatsTerse_GraphData.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.deltaFrame = reader.bool();
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

function createBaseCMsgDOTARealtimeGameStatsTerse_TeamDetails(): CMsgDOTARealtimeGameStatsTerse_TeamDetails {
  return {
    teamNumber: 0,
    teamId: 0,
    teamName: "",
    teamTag: "",
    teamLogo: "0",
    score: 0,
    netWorth: 0,
    teamLogoUrl: "",
    players: [],
  };
}

export const CMsgDOTARealtimeGameStatsTerse_TeamDetails = {
  encode(message: CMsgDOTARealtimeGameStatsTerse_TeamDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamNumber !== 0) {
      writer.uint32(8).uint32(message.teamNumber);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).uint32(message.teamId);
    }
    if (message.teamName !== "") {
      writer.uint32(26).string(message.teamName);
    }
    if (message.teamTag !== "") {
      writer.uint32(66).string(message.teamTag);
    }
    if (message.teamLogo !== "0") {
      writer.uint32(33).fixed64(message.teamLogo);
    }
    if (message.score !== 0) {
      writer.uint32(40).uint32(message.score);
    }
    if (message.netWorth !== 0) {
      writer.uint32(56).uint32(message.netWorth);
    }
    if (message.teamLogoUrl !== "") {
      writer.uint32(74).string(message.teamLogoUrl);
    }
    for (const v of message.players) {
      CMsgDOTARealtimeGameStatsTerse_PlayerDetails.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStatsTerse_TeamDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStatsTerse_TeamDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.teamNumber = reader.uint32();
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

          message.teamName = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.teamTag = reader.string();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.teamLogo = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.score = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.netWorth = reader.uint32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.teamLogoUrl = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.players.push(CMsgDOTARealtimeGameStatsTerse_PlayerDetails.decode(reader, reader.uint32()));
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

function createBaseCMsgDOTARealtimeGameStatsTerse_PlayerDetails(): CMsgDOTARealtimeGameStatsTerse_PlayerDetails {
  return {
    accountid: 0,
    playerid: 0,
    name: "",
    team: 0,
    heroid: 0,
    level: 0,
    killCount: 0,
    deathCount: 0,
    assistsCount: 0,
    deniesCount: 0,
    lhCount: 0,
    gold: 0,
    x: 0,
    y: 0,
    netWorth: 0,
    abilities: [],
    items: [],
  };
}

export const CMsgDOTARealtimeGameStatsTerse_PlayerDetails = {
  encode(message: CMsgDOTARealtimeGameStatsTerse_PlayerDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.playerid !== 0) {
      writer.uint32(16).int32(message.playerid);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.team !== 0) {
      writer.uint32(32).uint32(message.team);
    }
    if (message.heroid !== 0) {
      writer.uint32(40).uint32(message.heroid);
    }
    if (message.level !== 0) {
      writer.uint32(48).uint32(message.level);
    }
    if (message.killCount !== 0) {
      writer.uint32(56).uint32(message.killCount);
    }
    if (message.deathCount !== 0) {
      writer.uint32(64).uint32(message.deathCount);
    }
    if (message.assistsCount !== 0) {
      writer.uint32(72).uint32(message.assistsCount);
    }
    if (message.deniesCount !== 0) {
      writer.uint32(80).uint32(message.deniesCount);
    }
    if (message.lhCount !== 0) {
      writer.uint32(88).uint32(message.lhCount);
    }
    if (message.gold !== 0) {
      writer.uint32(96).uint32(message.gold);
    }
    if (message.x !== 0) {
      writer.uint32(109).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(117).float(message.y);
    }
    if (message.netWorth !== 0) {
      writer.uint32(120).uint32(message.netWorth);
    }
    writer.uint32(130).fork();
    for (const v of message.abilities) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(138).fork();
    for (const v of message.items) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStatsTerse_PlayerDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStatsTerse_PlayerDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountid = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerid = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.team = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.heroid = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.killCount = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.deathCount = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.assistsCount = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.deniesCount = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.lhCount = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.gold = reader.uint32();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.x = reader.float();
          continue;
        case 14:
          if (tag != 117) {
            break;
          }

          message.y = reader.float();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.netWorth = reader.uint32();
          continue;
        case 16:
          if (tag == 128) {
            message.abilities.push(reader.int32());
            continue;
          }

          if (tag == 130) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.abilities.push(reader.int32());
            }

            continue;
          }

          break;
        case 17:
          if (tag == 136) {
            message.items.push(reader.int32());
            continue;
          }

          if (tag == 138) {
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
};

function createBaseCMsgDOTARealtimeGameStatsTerse_BuildingDetails(): CMsgDOTARealtimeGameStatsTerse_BuildingDetails {
  return { team: 0, heading: 0, type: 0, lane: 0, tier: 0, x: 0, y: 0, destroyed: false };
}

export const CMsgDOTARealtimeGameStatsTerse_BuildingDetails = {
  encode(
    message: CMsgDOTARealtimeGameStatsTerse_BuildingDetails,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.team !== 0) {
      writer.uint32(8).uint32(message.team);
    }
    if (message.heading !== 0) {
      writer.uint32(21).float(message.heading);
    }
    if (message.type !== 0) {
      writer.uint32(24).uint32(message.type);
    }
    if (message.lane !== 0) {
      writer.uint32(32).uint32(message.lane);
    }
    if (message.tier !== 0) {
      writer.uint32(40).uint32(message.tier);
    }
    if (message.x !== 0) {
      writer.uint32(53).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(61).float(message.y);
    }
    if (message.destroyed === true) {
      writer.uint32(64).bool(message.destroyed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStatsTerse_BuildingDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStatsTerse_BuildingDetails();
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
          if (tag != 21) {
            break;
          }

          message.heading = reader.float();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.type = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.lane = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.tier = reader.uint32();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.x = reader.float();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.y = reader.float();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.destroyed = reader.bool();
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

function createBaseCMsgDOTARealtimeGameStatsTerse_PickBanDetails(): CMsgDOTARealtimeGameStatsTerse_PickBanDetails {
  return { hero: 0, team: 0 };
}

export const CMsgDOTARealtimeGameStatsTerse_PickBanDetails = {
  encode(message: CMsgDOTARealtimeGameStatsTerse_PickBanDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hero !== 0) {
      writer.uint32(8).uint32(message.hero);
    }
    if (message.team !== 0) {
      writer.uint32(16).uint32(message.team);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStatsTerse_PickBanDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStatsTerse_PickBanDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.hero = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
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
};

function createBaseCMsgDOTARealtimeGameStatsTerse_MatchDetails(): CMsgDOTARealtimeGameStatsTerse_MatchDetails {
  return {
    serverSteamId: "0",
    matchId: "0",
    timestamp: 0,
    gameTime: 0,
    steamBroadcasterAccountIds: [],
    gameMode: 0,
    leagueId: 0,
    leagueNodeId: 0,
    gameState: 0,
    picks: [],
    bans: [],
    lobbyType: 0,
    startTimestamp: 0,
  };
}

export const CMsgDOTARealtimeGameStatsTerse_MatchDetails = {
  encode(message: CMsgDOTARealtimeGameStatsTerse_MatchDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverSteamId !== "0") {
      writer.uint32(9).fixed64(message.serverSteamId);
    }
    if (message.matchId !== "0") {
      writer.uint32(16).uint64(message.matchId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).uint32(message.timestamp);
    }
    if (message.gameTime !== 0) {
      writer.uint32(32).int32(message.gameTime);
    }
    writer.uint32(50).fork();
    for (const v of message.steamBroadcasterAccountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.gameMode !== 0) {
      writer.uint32(56).uint32(message.gameMode);
    }
    if (message.leagueId !== 0) {
      writer.uint32(64).uint32(message.leagueId);
    }
    if (message.leagueNodeId !== 0) {
      writer.uint32(72).uint32(message.leagueNodeId);
    }
    if (message.gameState !== 0) {
      writer.uint32(80).uint32(message.gameState);
    }
    for (const v of message.picks) {
      CMsgDOTARealtimeGameStatsTerse_PickBanDetails.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.bans) {
      CMsgDOTARealtimeGameStatsTerse_PickBanDetails.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.lobbyType !== 0) {
      writer.uint32(104).uint32(message.lobbyType);
    }
    if (message.startTimestamp !== 0) {
      writer.uint32(112).uint32(message.startTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStatsTerse_MatchDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStatsTerse_MatchDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.serverSteamId = longToString(reader.fixed64() as Long);
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

          message.timestamp = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.gameTime = reader.int32();
          continue;
        case 6:
          if (tag == 48) {
            message.steamBroadcasterAccountIds.push(reader.uint32());
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steamBroadcasterAccountIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 7:
          if (tag != 56) {
            break;
          }

          message.gameMode = reader.uint32();
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

          message.leagueNodeId = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.gameState = reader.uint32();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.picks.push(CMsgDOTARealtimeGameStatsTerse_PickBanDetails.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.bans.push(CMsgDOTARealtimeGameStatsTerse_PickBanDetails.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.lobbyType = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.startTimestamp = reader.uint32();
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

function createBaseCMsgDOTARealtimeGameStatsTerse_GraphData(): CMsgDOTARealtimeGameStatsTerse_GraphData {
  return { graphGold: [] };
}

export const CMsgDOTARealtimeGameStatsTerse_GraphData = {
  encode(message: CMsgDOTARealtimeGameStatsTerse_GraphData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.graphGold) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARealtimeGameStatsTerse_GraphData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARealtimeGameStatsTerse_GraphData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.graphGold.push(reader.int32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.graphGold.push(reader.int32());
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

function createBaseCMsgDOTABroadcastTimelineEvent(): CMsgDOTABroadcastTimelineEvent {
  return { event: 1, timestamp: 0, data: 0, stringData: "" };
}

export const CMsgDOTABroadcastTimelineEvent = {
  encode(message: CMsgDOTABroadcastTimelineEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== 1) {
      writer.uint32(8).int32(message.event);
    }
    if (message.timestamp !== 0) {
      writer.uint32(21).fixed32(message.timestamp);
    }
    if (message.data !== 0) {
      writer.uint32(24).uint32(message.data);
    }
    if (message.stringData !== "") {
      writer.uint32(34).string(message.stringData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTABroadcastTimelineEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTABroadcastTimelineEvent();
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
          if (tag != 21) {
            break;
          }

          message.timestamp = reader.fixed32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.data = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.stringData = reader.string();
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

function createBaseCMsgGCToClientMatchGroupsVersion(): CMsgGCToClientMatchGroupsVersion {
  return { matchgroupsVersion: 0 };
}

export const CMsgGCToClientMatchGroupsVersion = {
  encode(message: CMsgGCToClientMatchGroupsVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchgroupsVersion !== 0) {
      writer.uint32(8).uint32(message.matchgroupsVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientMatchGroupsVersion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientMatchGroupsVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.matchgroupsVersion = reader.uint32();
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

function createBaseCMsgDOTASDOHeroStatsHistory(): CMsgDOTASDOHeroStatsHistory {
  return {
    matchId: "0",
    gameMode: 0,
    lobbyType: 0,
    startTime: 0,
    won: false,
    gpm: 0,
    xpm: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
  };
}

export const CMsgDOTASDOHeroStatsHistory = {
  encode(message: CMsgDOTASDOHeroStatsHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.gameMode !== 0) {
      writer.uint32(16).uint32(message.gameMode);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(24).uint32(message.lobbyType);
    }
    if (message.startTime !== 0) {
      writer.uint32(32).uint32(message.startTime);
    }
    if (message.won === true) {
      writer.uint32(40).bool(message.won);
    }
    if (message.gpm !== 0) {
      writer.uint32(48).uint32(message.gpm);
    }
    if (message.xpm !== 0) {
      writer.uint32(56).uint32(message.xpm);
    }
    if (message.kills !== 0) {
      writer.uint32(64).uint32(message.kills);
    }
    if (message.deaths !== 0) {
      writer.uint32(72).uint32(message.deaths);
    }
    if (message.assists !== 0) {
      writer.uint32(80).uint32(message.assists);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASDOHeroStatsHistory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASDOHeroStatsHistory();
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

          message.lobbyType = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.startTime = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.won = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.gpm = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.xpm = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.kills = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.deaths = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.assists = reader.uint32();
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

function createBaseCMsgPredictionChoice(): CMsgPredictionChoice {
  return { value: 0, name: "", minRawValue: 0, maxRawValue: 0 };
}

export const CMsgPredictionChoice = {
  encode(message: CMsgPredictionChoice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).uint32(message.value);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.minRawValue !== 0) {
      writer.uint32(24).uint32(message.minRawValue);
    }
    if (message.maxRawValue !== 0) {
      writer.uint32(32).uint32(message.maxRawValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPredictionChoice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPredictionChoice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.value = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.minRawValue = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.maxRawValue = reader.uint32();
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

function createBaseCMsgInGamePrediction(): CMsgInGamePrediction {
  return {
    id: 0,
    name: "",
    type: 0,
    group: 0,
    question: "",
    choices: [],
    requiredHeroes: [],
    queryName: "",
    queryValues: [],
    answerResolutionType: 0,
    pointsToGrant: 0,
    rewardAction: 0,
    debugForceSelection: 0,
    rawValueType: 0,
  };
}

export const CMsgInGamePrediction = {
  encode(message: CMsgInGamePrediction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.group !== 0) {
      writer.uint32(32).int32(message.group);
    }
    if (message.question !== "") {
      writer.uint32(42).string(message.question);
    }
    for (const v of message.choices) {
      CMsgPredictionChoice.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.requiredHeroes) {
      writer.uint32(58).string(v!);
    }
    if (message.queryName !== "") {
      writer.uint32(66).string(message.queryName);
    }
    for (const v of message.queryValues) {
      CMsgInGamePrediction_QueryKeyValues.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.answerResolutionType !== 0) {
      writer.uint32(80).int32(message.answerResolutionType);
    }
    if (message.pointsToGrant !== 0) {
      writer.uint32(88).uint32(message.pointsToGrant);
    }
    if (message.rewardAction !== 0) {
      writer.uint32(96).uint32(message.rewardAction);
    }
    if (message.debugForceSelection !== 0) {
      writer.uint32(104).uint32(message.debugForceSelection);
    }
    if (message.rawValueType !== 0) {
      writer.uint32(112).int32(message.rawValueType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgInGamePrediction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgInGamePrediction();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.group = reader.int32() as any;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.question = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.choices.push(CMsgPredictionChoice.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.requiredHeroes.push(reader.string());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.queryName = reader.string();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.queryValues.push(CMsgInGamePrediction_QueryKeyValues.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.answerResolutionType = reader.int32() as any;
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.pointsToGrant = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.rewardAction = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.debugForceSelection = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.rawValueType = reader.int32() as any;
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

function createBaseCMsgInGamePrediction_QueryKeyValues(): CMsgInGamePrediction_QueryKeyValues {
  return { name: "", value: "" };
}

export const CMsgInGamePrediction_QueryKeyValues = {
  encode(message: CMsgInGamePrediction_QueryKeyValues, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgInGamePrediction_QueryKeyValues {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgInGamePrediction_QueryKeyValues();
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
};

function createBaseCMsgDOTASeasonPredictions(): CMsgDOTASeasonPredictions {
  return {
    predictions: [],
    inGamePredictions: [],
    inGamePredictionCountPerGame: 0,
    inGamePredictionVotingPeriodMinutes: 0,
  };
}

export const CMsgDOTASeasonPredictions = {
  encode(message: CMsgDOTASeasonPredictions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.predictions) {
      CMsgDOTASeasonPredictions_Prediction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.inGamePredictions) {
      CMsgInGamePrediction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.inGamePredictionCountPerGame !== 0) {
      writer.uint32(24).uint32(message.inGamePredictionCountPerGame);
    }
    if (message.inGamePredictionVotingPeriodMinutes !== 0) {
      writer.uint32(32).uint32(message.inGamePredictionVotingPeriodMinutes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASeasonPredictions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASeasonPredictions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.predictions.push(CMsgDOTASeasonPredictions_Prediction.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.inGamePredictions.push(CMsgInGamePrediction.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.inGamePredictionCountPerGame = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.inGamePredictionVotingPeriodMinutes = reader.uint32();
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

function createBaseCMsgDOTASeasonPredictions_Prediction(): CMsgDOTASeasonPredictions_Prediction {
  return {
    type: 0,
    question: "",
    choices: [],
    selectionId: 0,
    startDate: 0,
    lockDate: 0,
    reward: 0,
    answerType: 0,
    answerId: 0,
    answers: [],
    queryName: "",
    lockOnSelectionId: 0,
    lockOnSelectionValue: 0,
    lockOnSelectionSet: false,
    useAnswerValueRanges: false,
    region: 0,
    phases: [],
    rewardEvent: 0,
  };
}

export const CMsgDOTASeasonPredictions_Prediction = {
  encode(message: CMsgDOTASeasonPredictions_Prediction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.question !== "") {
      writer.uint32(18).string(message.question);
    }
    for (const v of message.choices) {
      CMsgPredictionChoice.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.selectionId !== 0) {
      writer.uint32(32).uint32(message.selectionId);
    }
    if (message.startDate !== 0) {
      writer.uint32(40).uint32(message.startDate);
    }
    if (message.lockDate !== 0) {
      writer.uint32(48).uint32(message.lockDate);
    }
    if (message.reward !== 0) {
      writer.uint32(56).uint32(message.reward);
    }
    if (message.answerType !== 0) {
      writer.uint32(64).int32(message.answerType);
    }
    if (message.answerId !== 0) {
      writer.uint32(72).uint32(message.answerId);
    }
    for (const v of message.answers) {
      CMsgDOTASeasonPredictions_Prediction_Answers.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.queryName !== "") {
      writer.uint32(90).string(message.queryName);
    }
    if (message.lockOnSelectionId !== 0) {
      writer.uint32(104).uint32(message.lockOnSelectionId);
    }
    if (message.lockOnSelectionValue !== 0) {
      writer.uint32(112).uint32(message.lockOnSelectionValue);
    }
    if (message.lockOnSelectionSet === true) {
      writer.uint32(120).bool(message.lockOnSelectionSet);
    }
    if (message.useAnswerValueRanges === true) {
      writer.uint32(128).bool(message.useAnswerValueRanges);
    }
    if (message.region !== 0) {
      writer.uint32(136).int32(message.region);
    }
    writer.uint32(146).fork();
    for (const v of message.phases) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.rewardEvent !== 0) {
      writer.uint32(152).int32(message.rewardEvent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASeasonPredictions_Prediction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASeasonPredictions_Prediction();
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
          if (tag != 18) {
            break;
          }

          message.question = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.choices.push(CMsgPredictionChoice.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.selectionId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.startDate = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.lockDate = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.reward = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.answerType = reader.int32() as any;
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.answerId = reader.uint32();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.answers.push(CMsgDOTASeasonPredictions_Prediction_Answers.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.queryName = reader.string();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.lockOnSelectionId = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.lockOnSelectionValue = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.lockOnSelectionSet = reader.bool();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.useAnswerValueRanges = reader.bool();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.region = reader.int32() as any;
          continue;
        case 18:
          if (tag == 144) {
            message.phases.push(reader.int32() as any);
            continue;
          }

          if (tag == 146) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.phases.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 19:
          if (tag != 152) {
            break;
          }

          message.rewardEvent = reader.int32() as any;
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

function createBaseCMsgDOTASeasonPredictions_Prediction_Answers(): CMsgDOTASeasonPredictions_Prediction_Answers {
  return { answerId: 0 };
}

export const CMsgDOTASeasonPredictions_Prediction_Answers = {
  encode(message: CMsgDOTASeasonPredictions_Prediction_Answers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.answerId !== 0) {
      writer.uint32(8).uint32(message.answerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASeasonPredictions_Prediction_Answers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASeasonPredictions_Prediction_Answers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.answerId = reader.uint32();
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

function createBaseCMsgAvailablePredictions(): CMsgAvailablePredictions {
  return { matchPredictions: [] };
}

export const CMsgAvailablePredictions = {
  encode(message: CMsgAvailablePredictions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.matchPredictions) {
      CMsgAvailablePredictions_MatchPrediction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAvailablePredictions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAvailablePredictions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.matchPredictions.push(CMsgAvailablePredictions_MatchPrediction.decode(reader, reader.uint32()));
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

function createBaseCMsgAvailablePredictions_MatchPrediction(): CMsgAvailablePredictions_MatchPrediction {
  return { matchId: "0", predictions: [] };
}

export const CMsgAvailablePredictions_MatchPrediction = {
  encode(message: CMsgAvailablePredictions_MatchPrediction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    for (const v of message.predictions) {
      CMsgInGamePrediction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAvailablePredictions_MatchPrediction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAvailablePredictions_MatchPrediction();
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

          message.predictions.push(CMsgInGamePrediction.decode(reader, reader.uint32()));
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

function createBaseCMsgLeagueWatchedGames(): CMsgLeagueWatchedGames {
  return { leagues: [] };
}

export const CMsgLeagueWatchedGames = {
  encode(message: CMsgLeagueWatchedGames, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.leagues) {
      CMsgLeagueWatchedGames_League.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLeagueWatchedGames {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLeagueWatchedGames();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.leagues.push(CMsgLeagueWatchedGames_League.decode(reader, reader.uint32()));
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

function createBaseCMsgLeagueWatchedGames_Series(): CMsgLeagueWatchedGames_Series {
  return { nodeId: 0, game: [] };
}

export const CMsgLeagueWatchedGames_Series = {
  encode(message: CMsgLeagueWatchedGames_Series, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== 0) {
      writer.uint32(8).uint32(message.nodeId);
    }
    writer.uint32(18).fork();
    for (const v of message.game) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLeagueWatchedGames_Series {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLeagueWatchedGames_Series();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.nodeId = reader.uint32();
          continue;
        case 2:
          if (tag == 16) {
            message.game.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.game.push(reader.uint32());
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

function createBaseCMsgLeagueWatchedGames_League(): CMsgLeagueWatchedGames_League {
  return { leagueId: 0, series: [] };
}

export const CMsgLeagueWatchedGames_League = {
  encode(message: CMsgLeagueWatchedGames_League, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    for (const v of message.series) {
      CMsgLeagueWatchedGames_Series.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLeagueWatchedGames_League {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLeagueWatchedGames_League();
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

          message.series.push(CMsgLeagueWatchedGames_Series.decode(reader, reader.uint32()));
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

function createBaseCMsgDOTAMatch(): CMsgDOTAMatch {
  return {
    duration: 0,
    starttime: 0,
    players: [],
    matchId: "0",
    towerStatus: [],
    barracksStatus: [],
    cluster: 0,
    firstBloodTime: 0,
    replaySalt: 0,
    serverIp: 0,
    serverPort: 0,
    lobbyType: 0,
    humanPlayers: 0,
    averageSkill: 0,
    gameBalance: 0,
    radiantTeamId: 0,
    direTeamId: 0,
    leagueid: 0,
    radiantTeamName: "",
    direTeamName: "",
    radiantTeamLogo: "0",
    direTeamLogo: "0",
    radiantTeamLogoUrl: "",
    direTeamLogoUrl: "",
    radiantTeamComplete: 0,
    direTeamComplete: 0,
    positiveVotes: 0,
    negativeVotes: 0,
    gameMode: 0,
    picksBans: [],
    matchSeqNum: "0",
    replayState: 0,
    radiantGuildId: 0,
    direGuildId: 0,
    radiantTeamTag: "",
    direTeamTag: "",
    seriesId: 0,
    seriesType: 0,
    broadcasterChannels: [],
    engine: 0,
    customGameData: undefined,
    matchFlags: 0,
    privateMetadataKey: 0,
    radiantTeamScore: 0,
    direTeamScore: 0,
    matchOutcome: 0,
    tournamentId: 0,
    tournamentRound: 0,
    preGameDuration: 0,
    coaches: [],
  };
}

export const CMsgDOTAMatch = {
  encode(message: CMsgDOTAMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(24).uint32(message.duration);
    }
    if (message.starttime !== 0) {
      writer.uint32(37).fixed32(message.starttime);
    }
    for (const v of message.players) {
      CMsgDOTAMatch_Player.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.matchId !== "0") {
      writer.uint32(48).uint64(message.matchId);
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
    if (message.firstBloodTime !== 0) {
      writer.uint32(96).uint32(message.firstBloodTime);
    }
    if (message.replaySalt !== 0) {
      writer.uint32(109).fixed32(message.replaySalt);
    }
    if (message.serverIp !== 0) {
      writer.uint32(117).fixed32(message.serverIp);
    }
    if (message.serverPort !== 0) {
      writer.uint32(120).uint32(message.serverPort);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(128).uint32(message.lobbyType);
    }
    if (message.humanPlayers !== 0) {
      writer.uint32(136).uint32(message.humanPlayers);
    }
    if (message.averageSkill !== 0) {
      writer.uint32(144).uint32(message.averageSkill);
    }
    if (message.gameBalance !== 0) {
      writer.uint32(157).float(message.gameBalance);
    }
    if (message.radiantTeamId !== 0) {
      writer.uint32(160).uint32(message.radiantTeamId);
    }
    if (message.direTeamId !== 0) {
      writer.uint32(168).uint32(message.direTeamId);
    }
    if (message.leagueid !== 0) {
      writer.uint32(176).uint32(message.leagueid);
    }
    if (message.radiantTeamName !== "") {
      writer.uint32(186).string(message.radiantTeamName);
    }
    if (message.direTeamName !== "") {
      writer.uint32(194).string(message.direTeamName);
    }
    if (message.radiantTeamLogo !== "0") {
      writer.uint32(200).uint64(message.radiantTeamLogo);
    }
    if (message.direTeamLogo !== "0") {
      writer.uint32(208).uint64(message.direTeamLogo);
    }
    if (message.radiantTeamLogoUrl !== "") {
      writer.uint32(434).string(message.radiantTeamLogoUrl);
    }
    if (message.direTeamLogoUrl !== "") {
      writer.uint32(442).string(message.direTeamLogoUrl);
    }
    if (message.radiantTeamComplete !== 0) {
      writer.uint32(216).uint32(message.radiantTeamComplete);
    }
    if (message.direTeamComplete !== 0) {
      writer.uint32(224).uint32(message.direTeamComplete);
    }
    if (message.positiveVotes !== 0) {
      writer.uint32(232).uint32(message.positiveVotes);
    }
    if (message.negativeVotes !== 0) {
      writer.uint32(240).uint32(message.negativeVotes);
    }
    if (message.gameMode !== 0) {
      writer.uint32(248).int32(message.gameMode);
    }
    for (const v of message.picksBans) {
      CMatchHeroSelectEvent.encode(v!, writer.uint32(258).fork()).ldelim();
    }
    if (message.matchSeqNum !== "0") {
      writer.uint32(264).uint64(message.matchSeqNum);
    }
    if (message.replayState !== 0) {
      writer.uint32(272).int32(message.replayState);
    }
    if (message.radiantGuildId !== 0) {
      writer.uint32(280).uint32(message.radiantGuildId);
    }
    if (message.direGuildId !== 0) {
      writer.uint32(288).uint32(message.direGuildId);
    }
    if (message.radiantTeamTag !== "") {
      writer.uint32(298).string(message.radiantTeamTag);
    }
    if (message.direTeamTag !== "") {
      writer.uint32(306).string(message.direTeamTag);
    }
    if (message.seriesId !== 0) {
      writer.uint32(312).uint32(message.seriesId);
    }
    if (message.seriesType !== 0) {
      writer.uint32(320).uint32(message.seriesType);
    }
    for (const v of message.broadcasterChannels) {
      CMsgDOTAMatch_BroadcasterChannel.encode(v!, writer.uint32(346).fork()).ldelim();
    }
    if (message.engine !== 0) {
      writer.uint32(352).uint32(message.engine);
    }
    if (message.customGameData !== undefined) {
      CMsgDOTAMatch_CustomGameData.encode(message.customGameData, writer.uint32(362).fork()).ldelim();
    }
    if (message.matchFlags !== 0) {
      writer.uint32(368).uint32(message.matchFlags);
    }
    if (message.privateMetadataKey !== 0) {
      writer.uint32(381).fixed32(message.privateMetadataKey);
    }
    if (message.radiantTeamScore !== 0) {
      writer.uint32(384).uint32(message.radiantTeamScore);
    }
    if (message.direTeamScore !== 0) {
      writer.uint32(392).uint32(message.direTeamScore);
    }
    if (message.matchOutcome !== 0) {
      writer.uint32(400).int32(message.matchOutcome);
    }
    if (message.tournamentId !== 0) {
      writer.uint32(408).uint32(message.tournamentId);
    }
    if (message.tournamentRound !== 0) {
      writer.uint32(416).uint32(message.tournamentRound);
    }
    if (message.preGameDuration !== 0) {
      writer.uint32(424).uint32(message.preGameDuration);
    }
    for (const v of message.coaches) {
      CMsgDOTAMatch_Coach.encode(v!, writer.uint32(458).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag != 24) {
            break;
          }

          message.duration = reader.uint32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.starttime = reader.fixed32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.players.push(CMsgDOTAMatch_Player.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
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
        case 12:
          if (tag != 96) {
            break;
          }

          message.firstBloodTime = reader.uint32();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.replaySalt = reader.fixed32();
          continue;
        case 14:
          if (tag != 117) {
            break;
          }

          message.serverIp = reader.fixed32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.serverPort = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.lobbyType = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.humanPlayers = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.averageSkill = reader.uint32();
          continue;
        case 19:
          if (tag != 157) {
            break;
          }

          message.gameBalance = reader.float();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.radiantTeamId = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.direTeamId = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.leagueid = reader.uint32();
          continue;
        case 23:
          if (tag != 186) {
            break;
          }

          message.radiantTeamName = reader.string();
          continue;
        case 24:
          if (tag != 194) {
            break;
          }

          message.direTeamName = reader.string();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.radiantTeamLogo = longToString(reader.uint64() as Long);
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.direTeamLogo = longToString(reader.uint64() as Long);
          continue;
        case 54:
          if (tag != 434) {
            break;
          }

          message.radiantTeamLogoUrl = reader.string();
          continue;
        case 55:
          if (tag != 442) {
            break;
          }

          message.direTeamLogoUrl = reader.string();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.radiantTeamComplete = reader.uint32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.direTeamComplete = reader.uint32();
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.positiveVotes = reader.uint32();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.negativeVotes = reader.uint32();
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.gameMode = reader.int32() as any;
          continue;
        case 32:
          if (tag != 258) {
            break;
          }

          message.picksBans.push(CMatchHeroSelectEvent.decode(reader, reader.uint32()));
          continue;
        case 33:
          if (tag != 264) {
            break;
          }

          message.matchSeqNum = longToString(reader.uint64() as Long);
          continue;
        case 34:
          if (tag != 272) {
            break;
          }

          message.replayState = reader.int32() as any;
          continue;
        case 35:
          if (tag != 280) {
            break;
          }

          message.radiantGuildId = reader.uint32();
          continue;
        case 36:
          if (tag != 288) {
            break;
          }

          message.direGuildId = reader.uint32();
          continue;
        case 37:
          if (tag != 298) {
            break;
          }

          message.radiantTeamTag = reader.string();
          continue;
        case 38:
          if (tag != 306) {
            break;
          }

          message.direTeamTag = reader.string();
          continue;
        case 39:
          if (tag != 312) {
            break;
          }

          message.seriesId = reader.uint32();
          continue;
        case 40:
          if (tag != 320) {
            break;
          }

          message.seriesType = reader.uint32();
          continue;
        case 43:
          if (tag != 346) {
            break;
          }

          message.broadcasterChannels.push(CMsgDOTAMatch_BroadcasterChannel.decode(reader, reader.uint32()));
          continue;
        case 44:
          if (tag != 352) {
            break;
          }

          message.engine = reader.uint32();
          continue;
        case 45:
          if (tag != 362) {
            break;
          }

          message.customGameData = CMsgDOTAMatch_CustomGameData.decode(reader, reader.uint32());
          continue;
        case 46:
          if (tag != 368) {
            break;
          }

          message.matchFlags = reader.uint32();
          continue;
        case 47:
          if (tag != 381) {
            break;
          }

          message.privateMetadataKey = reader.fixed32();
          continue;
        case 48:
          if (tag != 384) {
            break;
          }

          message.radiantTeamScore = reader.uint32();
          continue;
        case 49:
          if (tag != 392) {
            break;
          }

          message.direTeamScore = reader.uint32();
          continue;
        case 50:
          if (tag != 400) {
            break;
          }

          message.matchOutcome = reader.int32() as any;
          continue;
        case 51:
          if (tag != 408) {
            break;
          }

          message.tournamentId = reader.uint32();
          continue;
        case 52:
          if (tag != 416) {
            break;
          }

          message.tournamentRound = reader.uint32();
          continue;
        case 53:
          if (tag != 424) {
            break;
          }

          message.preGameDuration = reader.uint32();
          continue;
        case 57:
          if (tag != 458) {
            break;
          }

          message.coaches.push(CMsgDOTAMatch_Coach.decode(reader, reader.uint32()));
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

function createBaseCMsgDOTAMatch_Player(): CMsgDOTAMatch_Player {
  return {
    accountId: 0,
    playerSlot: 0,
    heroId: 0,
    item0: 0,
    item1: 0,
    item2: 0,
    item3: 0,
    item4: 0,
    item5: 0,
    item6: 0,
    item7: 0,
    item8: 0,
    item9: 0,
    expectedTeamContribution: 0,
    scaledMetric: 0,
    previousRank: 0,
    rankChange: 0,
    mmrType: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
    leaverStatus: 0,
    gold: 0,
    lastHits: 0,
    denies: 0,
    goldPerMin: 0,
    xpPerMin: 0,
    goldSpent: 0,
    heroDamage: 0,
    towerDamage: 0,
    heroHealing: 0,
    level: 0,
    timeLastSeen: 0,
    playerName: "",
    supportAbilityValue: 0,
    feedingDetected: false,
    searchRank: 0,
    searchRankUncertainty: 0,
    rankUncertaintyChange: 0,
    heroPlayCount: 0,
    partyId: "0",
    scaledHeroDamage: 0,
    scaledTowerDamage: 0,
    scaledHeroHealing: 0,
    scaledKills: 0,
    scaledDeaths: 0,
    scaledAssists: 0,
    claimedFarmGold: 0,
    supportGold: 0,
    claimedDenies: 0,
    claimedMisses: 0,
    misses: 0,
    abilityUpgrades: [],
    additionalUnitsInventory: [],
    permanentBuffs: [],
    proName: "",
    realName: "",
    customGameData: undefined,
    activePlusSubscription: false,
    netWorth: 0,
    botDifficulty: 0,
    heroPickOrder: 0,
    heroWasRandomed: false,
    heroWasDotaPlusSuggestion: false,
    heroDamageReceived: [],
    heroDamageDealt: [],
    secondsDead: 0,
    goldLostToDeath: 0,
    laneSelectionFlags: 0,
    bountyRunes: 0,
    outpostsCaptured: 0,
    teamNumber: 0,
    teamSlot: 0,
  };
}

export const CMsgDOTAMatch_Player = {
  encode(message: CMsgDOTAMatch_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.playerSlot !== 0) {
      writer.uint32(16).uint32(message.playerSlot);
    }
    if (message.heroId !== 0) {
      writer.uint32(24).uint32(message.heroId);
    }
    if (message.item0 !== 0) {
      writer.uint32(32).int32(message.item0);
    }
    if (message.item1 !== 0) {
      writer.uint32(40).int32(message.item1);
    }
    if (message.item2 !== 0) {
      writer.uint32(48).int32(message.item2);
    }
    if (message.item3 !== 0) {
      writer.uint32(56).int32(message.item3);
    }
    if (message.item4 !== 0) {
      writer.uint32(64).int32(message.item4);
    }
    if (message.item5 !== 0) {
      writer.uint32(72).int32(message.item5);
    }
    if (message.item6 !== 0) {
      writer.uint32(472).int32(message.item6);
    }
    if (message.item7 !== 0) {
      writer.uint32(480).int32(message.item7);
    }
    if (message.item8 !== 0) {
      writer.uint32(488).int32(message.item8);
    }
    if (message.item9 !== 0) {
      writer.uint32(608).int32(message.item9);
    }
    if (message.expectedTeamContribution !== 0) {
      writer.uint32(85).float(message.expectedTeamContribution);
    }
    if (message.scaledMetric !== 0) {
      writer.uint32(93).float(message.scaledMetric);
    }
    if (message.previousRank !== 0) {
      writer.uint32(96).uint32(message.previousRank);
    }
    if (message.rankChange !== 0) {
      writer.uint32(104).sint32(message.rankChange);
    }
    if (message.mmrType !== 0) {
      writer.uint32(592).uint32(message.mmrType);
    }
    if (message.kills !== 0) {
      writer.uint32(112).uint32(message.kills);
    }
    if (message.deaths !== 0) {
      writer.uint32(120).uint32(message.deaths);
    }
    if (message.assists !== 0) {
      writer.uint32(128).uint32(message.assists);
    }
    if (message.leaverStatus !== 0) {
      writer.uint32(136).uint32(message.leaverStatus);
    }
    if (message.gold !== 0) {
      writer.uint32(144).uint32(message.gold);
    }
    if (message.lastHits !== 0) {
      writer.uint32(152).uint32(message.lastHits);
    }
    if (message.denies !== 0) {
      writer.uint32(160).uint32(message.denies);
    }
    if (message.goldPerMin !== 0) {
      writer.uint32(168).uint32(message.goldPerMin);
    }
    if (message.xpPerMin !== 0) {
      writer.uint32(176).uint32(message.xpPerMin);
    }
    if (message.goldSpent !== 0) {
      writer.uint32(184).uint32(message.goldSpent);
    }
    if (message.heroDamage !== 0) {
      writer.uint32(192).uint32(message.heroDamage);
    }
    if (message.towerDamage !== 0) {
      writer.uint32(200).uint32(message.towerDamage);
    }
    if (message.heroHealing !== 0) {
      writer.uint32(208).uint32(message.heroHealing);
    }
    if (message.level !== 0) {
      writer.uint32(216).uint32(message.level);
    }
    if (message.timeLastSeen !== 0) {
      writer.uint32(224).uint32(message.timeLastSeen);
    }
    if (message.playerName !== "") {
      writer.uint32(234).string(message.playerName);
    }
    if (message.supportAbilityValue !== 0) {
      writer.uint32(240).uint32(message.supportAbilityValue);
    }
    if (message.feedingDetected === true) {
      writer.uint32(256).bool(message.feedingDetected);
    }
    if (message.searchRank !== 0) {
      writer.uint32(272).uint32(message.searchRank);
    }
    if (message.searchRankUncertainty !== 0) {
      writer.uint32(280).uint32(message.searchRankUncertainty);
    }
    if (message.rankUncertaintyChange !== 0) {
      writer.uint32(288).int32(message.rankUncertaintyChange);
    }
    if (message.heroPlayCount !== 0) {
      writer.uint32(296).uint32(message.heroPlayCount);
    }
    if (message.partyId !== "0") {
      writer.uint32(305).fixed64(message.partyId);
    }
    if (message.scaledHeroDamage !== 0) {
      writer.uint32(432).uint32(message.scaledHeroDamage);
    }
    if (message.scaledTowerDamage !== 0) {
      writer.uint32(440).uint32(message.scaledTowerDamage);
    }
    if (message.scaledHeroHealing !== 0) {
      writer.uint32(448).uint32(message.scaledHeroHealing);
    }
    if (message.scaledKills !== 0) {
      writer.uint32(317).float(message.scaledKills);
    }
    if (message.scaledDeaths !== 0) {
      writer.uint32(325).float(message.scaledDeaths);
    }
    if (message.scaledAssists !== 0) {
      writer.uint32(333).float(message.scaledAssists);
    }
    if (message.claimedFarmGold !== 0) {
      writer.uint32(336).uint32(message.claimedFarmGold);
    }
    if (message.supportGold !== 0) {
      writer.uint32(344).uint32(message.supportGold);
    }
    if (message.claimedDenies !== 0) {
      writer.uint32(352).uint32(message.claimedDenies);
    }
    if (message.claimedMisses !== 0) {
      writer.uint32(360).uint32(message.claimedMisses);
    }
    if (message.misses !== 0) {
      writer.uint32(368).uint32(message.misses);
    }
    for (const v of message.abilityUpgrades) {
      CMatchPlayerAbilityUpgrade.encode(v!, writer.uint32(378).fork()).ldelim();
    }
    for (const v of message.additionalUnitsInventory) {
      CMatchAdditionalUnitInventory.encode(v!, writer.uint32(386).fork()).ldelim();
    }
    for (const v of message.permanentBuffs) {
      CMatchPlayerPermanentBuff.encode(v!, writer.uint32(458).fork()).ldelim();
    }
    if (message.proName !== "") {
      writer.uint32(578).string(message.proName);
    }
    if (message.realName !== "") {
      writer.uint32(586).string(message.realName);
    }
    if (message.customGameData !== undefined) {
      CMsgDOTAMatch_Player_CustomGameData.encode(message.customGameData, writer.uint32(402).fork()).ldelim();
    }
    if (message.activePlusSubscription === true) {
      writer.uint32(408).bool(message.activePlusSubscription);
    }
    if (message.netWorth !== 0) {
      writer.uint32(416).uint32(message.netWorth);
    }
    if (message.botDifficulty !== 0) {
      writer.uint32(464).uint32(message.botDifficulty);
    }
    if (message.heroPickOrder !== 0) {
      writer.uint32(504).uint32(message.heroPickOrder);
    }
    if (message.heroWasRandomed === true) {
      writer.uint32(512).bool(message.heroWasRandomed);
    }
    if (message.heroWasDotaPlusSuggestion === true) {
      writer.uint32(552).bool(message.heroWasDotaPlusSuggestion);
    }
    for (const v of message.heroDamageReceived) {
      CMsgDOTAMatch_Player_HeroDamageReceived.encode(v!, writer.uint32(538).fork()).ldelim();
    }
    for (const v of message.heroDamageDealt) {
      CMsgDOTAMatch_Player_HeroDamageReceived.encode(v!, writer.uint32(634).fork()).ldelim();
    }
    if (message.secondsDead !== 0) {
      writer.uint32(560).uint32(message.secondsDead);
    }
    if (message.goldLostToDeath !== 0) {
      writer.uint32(568).uint32(message.goldLostToDeath);
    }
    if (message.laneSelectionFlags !== 0) {
      writer.uint32(600).uint32(message.laneSelectionFlags);
    }
    if (message.bountyRunes !== 0) {
      writer.uint32(616).uint32(message.bountyRunes);
    }
    if (message.outpostsCaptured !== 0) {
      writer.uint32(624).uint32(message.outpostsCaptured);
    }
    if (message.teamNumber !== 0) {
      writer.uint32(640).int32(message.teamNumber);
    }
    if (message.teamSlot !== 0) {
      writer.uint32(648).uint32(message.teamSlot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMatch_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMatch_Player();
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

          message.playerSlot = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.item0 = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.item1 = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.item2 = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.item3 = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.item4 = reader.int32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.item5 = reader.int32();
          continue;
        case 59:
          if (tag != 472) {
            break;
          }

          message.item6 = reader.int32();
          continue;
        case 60:
          if (tag != 480) {
            break;
          }

          message.item7 = reader.int32();
          continue;
        case 61:
          if (tag != 488) {
            break;
          }

          message.item8 = reader.int32();
          continue;
        case 76:
          if (tag != 608) {
            break;
          }

          message.item9 = reader.int32();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.expectedTeamContribution = reader.float();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.scaledMetric = reader.float();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.previousRank = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.rankChange = reader.sint32();
          continue;
        case 74:
          if (tag != 592) {
            break;
          }

          message.mmrType = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.kills = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.deaths = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.assists = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.leaverStatus = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.gold = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.lastHits = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.denies = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.goldPerMin = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.xpPerMin = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.goldSpent = reader.uint32();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.heroDamage = reader.uint32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.towerDamage = reader.uint32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.heroHealing = reader.uint32();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.timeLastSeen = reader.uint32();
          continue;
        case 29:
          if (tag != 234) {
            break;
          }

          message.playerName = reader.string();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.supportAbilityValue = reader.uint32();
          continue;
        case 32:
          if (tag != 256) {
            break;
          }

          message.feedingDetected = reader.bool();
          continue;
        case 34:
          if (tag != 272) {
            break;
          }

          message.searchRank = reader.uint32();
          continue;
        case 35:
          if (tag != 280) {
            break;
          }

          message.searchRankUncertainty = reader.uint32();
          continue;
        case 36:
          if (tag != 288) {
            break;
          }

          message.rankUncertaintyChange = reader.int32();
          continue;
        case 37:
          if (tag != 296) {
            break;
          }

          message.heroPlayCount = reader.uint32();
          continue;
        case 38:
          if (tag != 305) {
            break;
          }

          message.partyId = longToString(reader.fixed64() as Long);
          continue;
        case 54:
          if (tag != 432) {
            break;
          }

          message.scaledHeroDamage = reader.uint32();
          continue;
        case 55:
          if (tag != 440) {
            break;
          }

          message.scaledTowerDamage = reader.uint32();
          continue;
        case 56:
          if (tag != 448) {
            break;
          }

          message.scaledHeroHealing = reader.uint32();
          continue;
        case 39:
          if (tag != 317) {
            break;
          }

          message.scaledKills = reader.float();
          continue;
        case 40:
          if (tag != 325) {
            break;
          }

          message.scaledDeaths = reader.float();
          continue;
        case 41:
          if (tag != 333) {
            break;
          }

          message.scaledAssists = reader.float();
          continue;
        case 42:
          if (tag != 336) {
            break;
          }

          message.claimedFarmGold = reader.uint32();
          continue;
        case 43:
          if (tag != 344) {
            break;
          }

          message.supportGold = reader.uint32();
          continue;
        case 44:
          if (tag != 352) {
            break;
          }

          message.claimedDenies = reader.uint32();
          continue;
        case 45:
          if (tag != 360) {
            break;
          }

          message.claimedMisses = reader.uint32();
          continue;
        case 46:
          if (tag != 368) {
            break;
          }

          message.misses = reader.uint32();
          continue;
        case 47:
          if (tag != 378) {
            break;
          }

          message.abilityUpgrades.push(CMatchPlayerAbilityUpgrade.decode(reader, reader.uint32()));
          continue;
        case 48:
          if (tag != 386) {
            break;
          }

          message.additionalUnitsInventory.push(CMatchAdditionalUnitInventory.decode(reader, reader.uint32()));
          continue;
        case 57:
          if (tag != 458) {
            break;
          }

          message.permanentBuffs.push(CMatchPlayerPermanentBuff.decode(reader, reader.uint32()));
          continue;
        case 72:
          if (tag != 578) {
            break;
          }

          message.proName = reader.string();
          continue;
        case 73:
          if (tag != 586) {
            break;
          }

          message.realName = reader.string();
          continue;
        case 50:
          if (tag != 402) {
            break;
          }

          message.customGameData = CMsgDOTAMatch_Player_CustomGameData.decode(reader, reader.uint32());
          continue;
        case 51:
          if (tag != 408) {
            break;
          }

          message.activePlusSubscription = reader.bool();
          continue;
        case 52:
          if (tag != 416) {
            break;
          }

          message.netWorth = reader.uint32();
          continue;
        case 58:
          if (tag != 464) {
            break;
          }

          message.botDifficulty = reader.uint32();
          continue;
        case 63:
          if (tag != 504) {
            break;
          }

          message.heroPickOrder = reader.uint32();
          continue;
        case 64:
          if (tag != 512) {
            break;
          }

          message.heroWasRandomed = reader.bool();
          continue;
        case 69:
          if (tag != 552) {
            break;
          }

          message.heroWasDotaPlusSuggestion = reader.bool();
          continue;
        case 67:
          if (tag != 538) {
            break;
          }

          message.heroDamageReceived.push(CMsgDOTAMatch_Player_HeroDamageReceived.decode(reader, reader.uint32()));
          continue;
        case 79:
          if (tag != 634) {
            break;
          }

          message.heroDamageDealt.push(CMsgDOTAMatch_Player_HeroDamageReceived.decode(reader, reader.uint32()));
          continue;
        case 70:
          if (tag != 560) {
            break;
          }

          message.secondsDead = reader.uint32();
          continue;
        case 71:
          if (tag != 568) {
            break;
          }

          message.goldLostToDeath = reader.uint32();
          continue;
        case 75:
          if (tag != 600) {
            break;
          }

          message.laneSelectionFlags = reader.uint32();
          continue;
        case 77:
          if (tag != 616) {
            break;
          }

          message.bountyRunes = reader.uint32();
          continue;
        case 78:
          if (tag != 624) {
            break;
          }

          message.outpostsCaptured = reader.uint32();
          continue;
        case 80:
          if (tag != 640) {
            break;
          }

          message.teamNumber = reader.int32() as any;
          continue;
        case 81:
          if (tag != 648) {
            break;
          }

          message.teamSlot = reader.uint32();
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

function createBaseCMsgDOTAMatch_Player_CustomGameData(): CMsgDOTAMatch_Player_CustomGameData {
  return { dotaTeam: 0, winner: false };
}

export const CMsgDOTAMatch_Player_CustomGameData = {
  encode(message: CMsgDOTAMatch_Player_CustomGameData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dotaTeam !== 0) {
      writer.uint32(8).uint32(message.dotaTeam);
    }
    if (message.winner === true) {
      writer.uint32(16).bool(message.winner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMatch_Player_CustomGameData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMatch_Player_CustomGameData();
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
};

function createBaseCMsgDOTAMatch_Player_HeroDamageReceived(): CMsgDOTAMatch_Player_HeroDamageReceived {
  return { preReduction: 0, postReduction: 0, damageType: 0 };
}

export const CMsgDOTAMatch_Player_HeroDamageReceived = {
  encode(message: CMsgDOTAMatch_Player_HeroDamageReceived, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMatch_Player_HeroDamageReceived {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMatch_Player_HeroDamageReceived();
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
};

function createBaseCMsgDOTAMatch_BroadcasterInfo(): CMsgDOTAMatch_BroadcasterInfo {
  return { accountId: 0, name: "" };
}

export const CMsgDOTAMatch_BroadcasterInfo = {
  encode(message: CMsgDOTAMatch_BroadcasterInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMatch_BroadcasterInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMatch_BroadcasterInfo();
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

          message.name = reader.string();
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

function createBaseCMsgDOTAMatch_BroadcasterChannel(): CMsgDOTAMatch_BroadcasterChannel {
  return { countryCode: "", description: "", broadcasterInfos: [], languageCode: "" };
}

export const CMsgDOTAMatch_BroadcasterChannel = {
  encode(message: CMsgDOTAMatch_BroadcasterChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.countryCode !== "") {
      writer.uint32(10).string(message.countryCode);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.broadcasterInfos) {
      CMsgDOTAMatch_BroadcasterInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.languageCode !== "") {
      writer.uint32(34).string(message.languageCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMatch_BroadcasterChannel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMatch_BroadcasterChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.countryCode = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.broadcasterInfos.push(CMsgDOTAMatch_BroadcasterInfo.decode(reader, reader.uint32()));
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

function createBaseCMsgDOTAMatch_Coach(): CMsgDOTAMatch_Coach {
  return { accountId: 0, coachName: "", coachRating: 0, coachTeam: 0, coachPartyId: "0", isPrivateCoach: false };
}

export const CMsgDOTAMatch_Coach = {
  encode(message: CMsgDOTAMatch_Coach, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.coachName !== "") {
      writer.uint32(18).string(message.coachName);
    }
    if (message.coachRating !== 0) {
      writer.uint32(24).uint32(message.coachRating);
    }
    if (message.coachTeam !== 0) {
      writer.uint32(32).uint32(message.coachTeam);
    }
    if (message.coachPartyId !== "0") {
      writer.uint32(40).uint64(message.coachPartyId);
    }
    if (message.isPrivateCoach === true) {
      writer.uint32(48).bool(message.isPrivateCoach);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMatch_Coach {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMatch_Coach();
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

          message.coachName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.coachRating = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.coachTeam = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.coachPartyId = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.isPrivateCoach = reader.bool();
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

function createBaseCMsgDOTAMatch_CustomGameData(): CMsgDOTAMatch_CustomGameData {
  return { customGameId: "0", mapName: "" };
}

export const CMsgDOTAMatch_CustomGameData = {
  encode(message: CMsgDOTAMatch_CustomGameData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customGameId !== "0") {
      writer.uint32(8).uint64(message.customGameId);
    }
    if (message.mapName !== "") {
      writer.uint32(18).string(message.mapName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMatch_CustomGameData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMatch_CustomGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.customGameId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.mapName = reader.string();
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

function createBaseCMsgPlayerCard(): CMsgPlayerCard {
  return { accountId: 0, statModifier: [] };
}

export const CMsgPlayerCard = {
  encode(message: CMsgPlayerCard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    for (const v of message.statModifier) {
      CMsgPlayerCard_StatModifier.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPlayerCard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPlayerCard();
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

          message.statModifier.push(CMsgPlayerCard_StatModifier.decode(reader, reader.uint32()));
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

function createBaseCMsgPlayerCard_StatModifier(): CMsgPlayerCard_StatModifier {
  return { stat: 0, value: 0 };
}

export const CMsgPlayerCard_StatModifier = {
  encode(message: CMsgPlayerCard_StatModifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stat !== 0) {
      writer.uint32(8).uint32(message.stat);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPlayerCard_StatModifier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPlayerCard_StatModifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.stat = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.value = reader.uint32();
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

function createBaseCMsgDOTAFantasyPlayerStats(): CMsgDOTAFantasyPlayerStats {
  return {
    playerAccountId: 0,
    matchId: "0",
    matchCompleted: false,
    teamId: 0,
    leagueId: 0,
    delay: 0,
    seriesId: 0,
    seriesType: 0,
    kills: 0,
    deaths: 0,
    cs: 0,
    gpm: 0,
    towerKills: 0,
    roshanKills: 0,
    teamfightParticipation: 0,
    wardsPlaced: 0,
    campsStacked: 0,
    runesGrabbed: 0,
    firstBlood: 0,
    stuns: 0,
  };
}

export const CMsgDOTAFantasyPlayerStats = {
  encode(message: CMsgDOTAFantasyPlayerStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerAccountId !== 0) {
      writer.uint32(8).uint32(message.playerAccountId);
    }
    if (message.matchId !== "0") {
      writer.uint32(16).uint64(message.matchId);
    }
    if (message.matchCompleted === true) {
      writer.uint32(24).bool(message.matchCompleted);
    }
    if (message.teamId !== 0) {
      writer.uint32(32).uint32(message.teamId);
    }
    if (message.leagueId !== 0) {
      writer.uint32(40).uint32(message.leagueId);
    }
    if (message.delay !== 0) {
      writer.uint32(48).uint32(message.delay);
    }
    if (message.seriesId !== 0) {
      writer.uint32(56).uint32(message.seriesId);
    }
    if (message.seriesType !== 0) {
      writer.uint32(64).uint32(message.seriesType);
    }
    if (message.kills !== 0) {
      writer.uint32(80).uint32(message.kills);
    }
    if (message.deaths !== 0) {
      writer.uint32(88).uint32(message.deaths);
    }
    if (message.cs !== 0) {
      writer.uint32(96).uint32(message.cs);
    }
    if (message.gpm !== 0) {
      writer.uint32(109).float(message.gpm);
    }
    if (message.towerKills !== 0) {
      writer.uint32(112).uint32(message.towerKills);
    }
    if (message.roshanKills !== 0) {
      writer.uint32(120).uint32(message.roshanKills);
    }
    if (message.teamfightParticipation !== 0) {
      writer.uint32(133).float(message.teamfightParticipation);
    }
    if (message.wardsPlaced !== 0) {
      writer.uint32(136).uint32(message.wardsPlaced);
    }
    if (message.campsStacked !== 0) {
      writer.uint32(144).uint32(message.campsStacked);
    }
    if (message.runesGrabbed !== 0) {
      writer.uint32(152).uint32(message.runesGrabbed);
    }
    if (message.firstBlood !== 0) {
      writer.uint32(160).uint32(message.firstBlood);
    }
    if (message.stuns !== 0) {
      writer.uint32(173).float(message.stuns);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAFantasyPlayerStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAFantasyPlayerStats();
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

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.matchCompleted = reader.bool();
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

          message.leagueId = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.delay = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.seriesId = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.seriesType = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.kills = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.deaths = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.cs = reader.uint32();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.gpm = reader.float();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.towerKills = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.roshanKills = reader.uint32();
          continue;
        case 16:
          if (tag != 133) {
            break;
          }

          message.teamfightParticipation = reader.float();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.wardsPlaced = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.campsStacked = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.runesGrabbed = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.firstBlood = reader.uint32();
          continue;
        case 21:
          if (tag != 173) {
            break;
          }

          message.stuns = reader.float();
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

function createBaseCMsgDOTAFantasyPlayerMatchStats(): CMsgDOTAFantasyPlayerMatchStats {
  return { matches: [] };
}

export const CMsgDOTAFantasyPlayerMatchStats = {
  encode(message: CMsgDOTAFantasyPlayerMatchStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.matches) {
      CMsgDOTAFantasyPlayerStats.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAFantasyPlayerMatchStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAFantasyPlayerMatchStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.matches.push(CMsgDOTAFantasyPlayerStats.decode(reader, reader.uint32()));
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

function createBaseCMsgDOTABotDebugInfo(): CMsgDOTABotDebugInfo {
  return {
    bots: [],
    desirePushLaneTop: 0,
    desirePushLaneMid: 0,
    desirePushLaneBot: 0,
    desireDefendLaneTop: 0,
    desireDefendLaneMid: 0,
    desireDefendLaneBot: 0,
    desireFarmLaneTop: 0,
    desireFarmLaneMid: 0,
    desireFarmLaneBot: 0,
    desireFarmRoshan: 0,
    executionTime: 0,
    runeStatus: [],
  };
}

export const CMsgDOTABotDebugInfo = {
  encode(message: CMsgDOTABotDebugInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bots) {
      CMsgDOTABotDebugInfo_Bot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.desirePushLaneTop !== 0) {
      writer.uint32(21).float(message.desirePushLaneTop);
    }
    if (message.desirePushLaneMid !== 0) {
      writer.uint32(29).float(message.desirePushLaneMid);
    }
    if (message.desirePushLaneBot !== 0) {
      writer.uint32(37).float(message.desirePushLaneBot);
    }
    if (message.desireDefendLaneTop !== 0) {
      writer.uint32(45).float(message.desireDefendLaneTop);
    }
    if (message.desireDefendLaneMid !== 0) {
      writer.uint32(53).float(message.desireDefendLaneMid);
    }
    if (message.desireDefendLaneBot !== 0) {
      writer.uint32(61).float(message.desireDefendLaneBot);
    }
    if (message.desireFarmLaneTop !== 0) {
      writer.uint32(69).float(message.desireFarmLaneTop);
    }
    if (message.desireFarmLaneMid !== 0) {
      writer.uint32(77).float(message.desireFarmLaneMid);
    }
    if (message.desireFarmLaneBot !== 0) {
      writer.uint32(85).float(message.desireFarmLaneBot);
    }
    if (message.desireFarmRoshan !== 0) {
      writer.uint32(93).float(message.desireFarmRoshan);
    }
    if (message.executionTime !== 0) {
      writer.uint32(101).float(message.executionTime);
    }
    writer.uint32(106).fork();
    for (const v of message.runeStatus) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTABotDebugInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTABotDebugInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.bots.push(CMsgDOTABotDebugInfo_Bot.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.desirePushLaneTop = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.desirePushLaneMid = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.desirePushLaneBot = reader.float();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.desireDefendLaneTop = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.desireDefendLaneMid = reader.float();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.desireDefendLaneBot = reader.float();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.desireFarmLaneTop = reader.float();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.desireFarmLaneMid = reader.float();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.desireFarmLaneBot = reader.float();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.desireFarmRoshan = reader.float();
          continue;
        case 12:
          if (tag != 101) {
            break;
          }

          message.executionTime = reader.float();
          continue;
        case 13:
          if (tag == 104) {
            message.runeStatus.push(reader.uint32());
            continue;
          }

          if (tag == 106) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.runeStatus.push(reader.uint32());
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

function createBaseCMsgDOTABotDebugInfo_Bot(): CMsgDOTABotDebugInfo_Bot {
  return {
    playerOwnerId: 0,
    heroId: 0,
    difficulty: 0,
    powerCurrent: 0,
    powerMax: 0,
    moveTargetX: 0,
    moveTargetY: 0,
    moveTargetZ: 0,
    activeModeId: 0,
    executionTime: 0,
    modes: [],
    action: undefined,
  };
}

export const CMsgDOTABotDebugInfo_Bot = {
  encode(message: CMsgDOTABotDebugInfo_Bot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerOwnerId !== 0) {
      writer.uint32(8).int32(message.playerOwnerId);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).uint32(message.heroId);
    }
    if (message.difficulty !== 0) {
      writer.uint32(24).uint32(message.difficulty);
    }
    if (message.powerCurrent !== 0) {
      writer.uint32(32).uint32(message.powerCurrent);
    }
    if (message.powerMax !== 0) {
      writer.uint32(40).uint32(message.powerMax);
    }
    if (message.moveTargetX !== 0) {
      writer.uint32(48).uint32(message.moveTargetX);
    }
    if (message.moveTargetY !== 0) {
      writer.uint32(56).uint32(message.moveTargetY);
    }
    if (message.moveTargetZ !== 0) {
      writer.uint32(64).uint32(message.moveTargetZ);
    }
    if (message.activeModeId !== 0) {
      writer.uint32(72).uint32(message.activeModeId);
    }
    if (message.executionTime !== 0) {
      writer.uint32(85).float(message.executionTime);
    }
    for (const v of message.modes) {
      CMsgDOTABotDebugInfo_Bot_Mode.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.action !== undefined) {
      CMsgDOTABotDebugInfo_Bot_Action.encode(message.action, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTABotDebugInfo_Bot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTABotDebugInfo_Bot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerOwnerId = reader.int32();
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

          message.difficulty = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.powerCurrent = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.powerMax = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.moveTargetX = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.moveTargetY = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.moveTargetZ = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.activeModeId = reader.uint32();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.executionTime = reader.float();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.modes.push(CMsgDOTABotDebugInfo_Bot_Mode.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.action = CMsgDOTABotDebugInfo_Bot_Action.decode(reader, reader.uint32());
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

function createBaseCMsgDOTABotDebugInfo_Bot_Mode(): CMsgDOTABotDebugInfo_Bot_Mode {
  return { modeId: 0, desire: 0, targetEntity: 0, targetX: 0, targetY: 0, targetZ: 0 };
}

export const CMsgDOTABotDebugInfo_Bot_Mode = {
  encode(message: CMsgDOTABotDebugInfo_Bot_Mode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modeId !== 0) {
      writer.uint32(8).uint32(message.modeId);
    }
    if (message.desire !== 0) {
      writer.uint32(21).float(message.desire);
    }
    if (message.targetEntity !== 0) {
      writer.uint32(24).int32(message.targetEntity);
    }
    if (message.targetX !== 0) {
      writer.uint32(32).uint32(message.targetX);
    }
    if (message.targetY !== 0) {
      writer.uint32(40).uint32(message.targetY);
    }
    if (message.targetZ !== 0) {
      writer.uint32(48).uint32(message.targetZ);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTABotDebugInfo_Bot_Mode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTABotDebugInfo_Bot_Mode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.modeId = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.desire = reader.float();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.targetEntity = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.targetX = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.targetY = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.targetZ = reader.uint32();
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

function createBaseCMsgDOTABotDebugInfo_Bot_Action(): CMsgDOTABotDebugInfo_Bot_Action {
  return { actionId: 0, actionTarget: "" };
}

export const CMsgDOTABotDebugInfo_Bot_Action = {
  encode(message: CMsgDOTABotDebugInfo_Bot_Action, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionId !== 0) {
      writer.uint32(8).uint32(message.actionId);
    }
    if (message.actionTarget !== "") {
      writer.uint32(18).string(message.actionTarget);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTABotDebugInfo_Bot_Action {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTABotDebugInfo_Bot_Action();
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
          if (tag != 18) {
            break;
          }

          message.actionTarget = reader.string();
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

function createBaseCMsgSuccessfulHero(): CMsgSuccessfulHero {
  return { heroId: 0, winPercent: 0, longestStreak: 0 };
}

export const CMsgSuccessfulHero = {
  encode(message: CMsgSuccessfulHero, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.winPercent !== 0) {
      writer.uint32(21).float(message.winPercent);
    }
    if (message.longestStreak !== 0) {
      writer.uint32(24).uint32(message.longestStreak);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSuccessfulHero {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSuccessfulHero();
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
          if (tag != 21) {
            break;
          }

          message.winPercent = reader.float();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.longestStreak = reader.uint32();
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

function createBaseCMsgRecentMatchInfo(): CMsgRecentMatchInfo {
  return {
    matchId: "0",
    gameMode: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
    duration: 0,
    playerSlot: 0,
    matchOutcome: 0,
    timestamp: 0,
    lobbyType: 0,
    teamNumber: 0,
  };
}

export const CMsgRecentMatchInfo = {
  encode(message: CMsgRecentMatchInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.gameMode !== 0) {
      writer.uint32(16).int32(message.gameMode);
    }
    if (message.kills !== 0) {
      writer.uint32(24).uint32(message.kills);
    }
    if (message.deaths !== 0) {
      writer.uint32(32).uint32(message.deaths);
    }
    if (message.assists !== 0) {
      writer.uint32(40).uint32(message.assists);
    }
    if (message.duration !== 0) {
      writer.uint32(48).uint32(message.duration);
    }
    if (message.playerSlot !== 0) {
      writer.uint32(56).uint32(message.playerSlot);
    }
    if (message.matchOutcome !== 0) {
      writer.uint32(64).int32(message.matchOutcome);
    }
    if (message.timestamp !== 0) {
      writer.uint32(72).uint32(message.timestamp);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(80).uint32(message.lobbyType);
    }
    if (message.teamNumber !== 0) {
      writer.uint32(88).uint32(message.teamNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRecentMatchInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRecentMatchInfo();
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

          message.gameMode = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.kills = reader.uint32();
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

          message.assists = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.duration = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.playerSlot = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.matchOutcome = reader.int32() as any;
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.lobbyType = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.teamNumber = reader.uint32();
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

function createBaseCMsgMatchTips(): CMsgMatchTips {
  return { tips: [] };
}

export const CMsgMatchTips = {
  encode(message: CMsgMatchTips, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tips) {
      CMsgMatchTips_SingleTip.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMatchTips {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMatchTips();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.tips.push(CMsgMatchTips_SingleTip.decode(reader, reader.uint32()));
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

function createBaseCMsgMatchTips_SingleTip(): CMsgMatchTips_SingleTip {
  return { sourceAccountId: 0, targetAccountId: 0, tipAmount: 0, eventId: 0 };
}

export const CMsgMatchTips_SingleTip = {
  encode(message: CMsgMatchTips_SingleTip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceAccountId !== 0) {
      writer.uint32(8).uint32(message.sourceAccountId);
    }
    if (message.targetAccountId !== 0) {
      writer.uint32(16).uint32(message.targetAccountId);
    }
    if (message.tipAmount !== 0) {
      writer.uint32(24).uint32(message.tipAmount);
    }
    if (message.eventId !== 0) {
      writer.uint32(32).int32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMatchTips_SingleTip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMatchTips_SingleTip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sourceAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetAccountId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.tipAmount = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
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

function createBaseCMsgDOTAMatchMinimal(): CMsgDOTAMatchMinimal {
  return {
    matchId: "0",
    startTime: 0,
    duration: 0,
    gameMode: 0,
    players: [],
    tourney: undefined,
    matchOutcome: 0,
    radiantScore: 0,
    direScore: 0,
    lobbyType: 0,
  };
}

export const CMsgDOTAMatchMinimal = {
  encode(message: CMsgDOTAMatchMinimal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.startTime !== 0) {
      writer.uint32(21).fixed32(message.startTime);
    }
    if (message.duration !== 0) {
      writer.uint32(24).uint32(message.duration);
    }
    if (message.gameMode !== 0) {
      writer.uint32(32).int32(message.gameMode);
    }
    for (const v of message.players) {
      CMsgDOTAMatchMinimal_Player.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.tourney !== undefined) {
      CMsgDOTAMatchMinimal_Tourney.encode(message.tourney, writer.uint32(58).fork()).ldelim();
    }
    if (message.matchOutcome !== 0) {
      writer.uint32(64).int32(message.matchOutcome);
    }
    if (message.radiantScore !== 0) {
      writer.uint32(72).uint32(message.radiantScore);
    }
    if (message.direScore !== 0) {
      writer.uint32(80).uint32(message.direScore);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(88).uint32(message.lobbyType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMatchMinimal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMatchMinimal();
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

          message.startTime = reader.fixed32();
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

          message.gameMode = reader.int32() as any;
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.players.push(CMsgDOTAMatchMinimal_Player.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.tourney = CMsgDOTAMatchMinimal_Tourney.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.matchOutcome = reader.int32() as any;
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.radiantScore = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.direScore = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
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
};

function createBaseCMsgDOTAMatchMinimal_Player(): CMsgDOTAMatchMinimal_Player {
  return {
    accountId: 0,
    heroId: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
    items: [],
    playerSlot: 0,
    proName: "",
    level: 0,
    teamNumber: 0,
  };
}

export const CMsgDOTAMatchMinimal_Player = {
  encode(message: CMsgDOTAMatchMinimal_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).uint32(message.heroId);
    }
    if (message.kills !== 0) {
      writer.uint32(24).uint32(message.kills);
    }
    if (message.deaths !== 0) {
      writer.uint32(32).uint32(message.deaths);
    }
    if (message.assists !== 0) {
      writer.uint32(40).uint32(message.assists);
    }
    writer.uint32(50).fork();
    for (const v of message.items) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.playerSlot !== 0) {
      writer.uint32(56).uint32(message.playerSlot);
    }
    if (message.proName !== "") {
      writer.uint32(66).string(message.proName);
    }
    if (message.level !== 0) {
      writer.uint32(72).uint32(message.level);
    }
    if (message.teamNumber !== 0) {
      writer.uint32(80).int32(message.teamNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMatchMinimal_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMatchMinimal_Player();
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

          message.kills = reader.uint32();
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

          message.assists = reader.uint32();
          continue;
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

          message.playerSlot = reader.uint32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.proName = reader.string();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.teamNumber = reader.int32() as any;
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

function createBaseCMsgDOTAMatchMinimal_Tourney(): CMsgDOTAMatchMinimal_Tourney {
  return {
    leagueId: 0,
    seriesType: 0,
    seriesGame: 0,
    weekendTourneyTournamentId: 0,
    weekendTourneySeasonTrophyId: 0,
    weekendTourneyDivision: 0,
    weekendTourneySkillLevel: 0,
    radiantTeamId: 0,
    radiantTeamName: "",
    radiantTeamLogo: "0",
    radiantTeamLogoUrl: "",
    direTeamId: 0,
    direTeamName: "",
    direTeamLogo: "0",
    direTeamLogoUrl: "",
  };
}

export const CMsgDOTAMatchMinimal_Tourney = {
  encode(message: CMsgDOTAMatchMinimal_Tourney, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    if (message.seriesType !== 0) {
      writer.uint32(64).uint32(message.seriesType);
    }
    if (message.seriesGame !== 0) {
      writer.uint32(72).uint32(message.seriesGame);
    }
    if (message.weekendTourneyTournamentId !== 0) {
      writer.uint32(80).uint32(message.weekendTourneyTournamentId);
    }
    if (message.weekendTourneySeasonTrophyId !== 0) {
      writer.uint32(88).uint32(message.weekendTourneySeasonTrophyId);
    }
    if (message.weekendTourneyDivision !== 0) {
      writer.uint32(96).uint32(message.weekendTourneyDivision);
    }
    if (message.weekendTourneySkillLevel !== 0) {
      writer.uint32(104).uint32(message.weekendTourneySkillLevel);
    }
    if (message.radiantTeamId !== 0) {
      writer.uint32(16).uint32(message.radiantTeamId);
    }
    if (message.radiantTeamName !== "") {
      writer.uint32(26).string(message.radiantTeamName);
    }
    if (message.radiantTeamLogo !== "0") {
      writer.uint32(33).fixed64(message.radiantTeamLogo);
    }
    if (message.radiantTeamLogoUrl !== "") {
      writer.uint32(114).string(message.radiantTeamLogoUrl);
    }
    if (message.direTeamId !== 0) {
      writer.uint32(40).uint32(message.direTeamId);
    }
    if (message.direTeamName !== "") {
      writer.uint32(50).string(message.direTeamName);
    }
    if (message.direTeamLogo !== "0") {
      writer.uint32(57).fixed64(message.direTeamLogo);
    }
    if (message.direTeamLogoUrl !== "") {
      writer.uint32(122).string(message.direTeamLogoUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMatchMinimal_Tourney {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMatchMinimal_Tourney();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.seriesType = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.seriesGame = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.weekendTourneyTournamentId = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.weekendTourneySeasonTrophyId = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.weekendTourneyDivision = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.weekendTourneySkillLevel = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.radiantTeamId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.radiantTeamName = reader.string();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.radiantTeamLogo = longToString(reader.fixed64() as Long);
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.radiantTeamLogoUrl = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.direTeamId = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.direTeamName = reader.string();
          continue;
        case 7:
          if (tag != 57) {
            break;
          }

          message.direTeamLogo = longToString(reader.fixed64() as Long);
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.direTeamLogoUrl = reader.string();
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

function createBaseCMsgConsumableUsage(): CMsgConsumableUsage {
  return { itemDef: 0, quantityChange: 0 };
}

export const CMsgConsumableUsage = {
  encode(message: CMsgConsumableUsage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDef !== 0) {
      writer.uint32(8).uint32(message.itemDef);
    }
    if (message.quantityChange !== 0) {
      writer.uint32(16).int32(message.quantityChange);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgConsumableUsage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgConsumableUsage();
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

          message.quantityChange = reader.int32();
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

function createBaseCMsgMatchConsumableUsage(): CMsgMatchConsumableUsage {
  return { playerConsumablesUsed: [] };
}

export const CMsgMatchConsumableUsage = {
  encode(message: CMsgMatchConsumableUsage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.playerConsumablesUsed) {
      CMsgMatchConsumableUsage_PlayerUsage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMatchConsumableUsage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMatchConsumableUsage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playerConsumablesUsed.push(CMsgMatchConsumableUsage_PlayerUsage.decode(reader, reader.uint32()));
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

function createBaseCMsgMatchConsumableUsage_PlayerUsage(): CMsgMatchConsumableUsage_PlayerUsage {
  return { accountId: 0, consumablesUsed: [] };
}

export const CMsgMatchConsumableUsage_PlayerUsage = {
  encode(message: CMsgMatchConsumableUsage_PlayerUsage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    for (const v of message.consumablesUsed) {
      CMsgConsumableUsage.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMatchConsumableUsage_PlayerUsage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMatchConsumableUsage_PlayerUsage();
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

          message.consumablesUsed.push(CMsgConsumableUsage.decode(reader, reader.uint32()));
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

function createBaseCMsgMatchEventActionGrants(): CMsgMatchEventActionGrants {
  return { playerGrants: [] };
}

export const CMsgMatchEventActionGrants = {
  encode(message: CMsgMatchEventActionGrants, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.playerGrants) {
      CMsgMatchEventActionGrants_PlayerGrants.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMatchEventActionGrants {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMatchEventActionGrants();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playerGrants.push(CMsgMatchEventActionGrants_PlayerGrants.decode(reader, reader.uint32()));
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

function createBaseCMsgMatchEventActionGrants_PlayerGrants(): CMsgMatchEventActionGrants_PlayerGrants {
  return { accountId: 0, actionsGranted: [] };
}

export const CMsgMatchEventActionGrants_PlayerGrants = {
  encode(message: CMsgMatchEventActionGrants_PlayerGrants, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    for (const v of message.actionsGranted) {
      CMsgPendingEventAward.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMatchEventActionGrants_PlayerGrants {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMatchEventActionGrants_PlayerGrants();
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
          if (tag != 26) {
            break;
          }

          message.actionsGranted.push(CMsgPendingEventAward.decode(reader, reader.uint32()));
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

function createBaseCMsgCustomGameWhitelist(): CMsgCustomGameWhitelist {
  return { version: 0, customGamesWhitelist: [], disableWhitelist: false };
}

export const CMsgCustomGameWhitelist = {
  encode(message: CMsgCustomGameWhitelist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    writer.uint32(18).fork();
    for (const v of message.customGamesWhitelist) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.disableWhitelist === true) {
      writer.uint32(24).bool(message.disableWhitelist);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCustomGameWhitelist {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCustomGameWhitelist();
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
          if (tag == 16) {
            message.customGamesWhitelist.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.customGamesWhitelist.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag != 24) {
            break;
          }

          message.disableWhitelist = reader.bool();
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

function createBaseCMsgCustomGameWhitelistForEdit(): CMsgCustomGameWhitelistForEdit {
  return { whitelistEntries: [] };
}

export const CMsgCustomGameWhitelistForEdit = {
  encode(message: CMsgCustomGameWhitelistForEdit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.whitelistEntries) {
      CMsgCustomGameWhitelistForEdit_WhitelistEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCustomGameWhitelistForEdit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCustomGameWhitelistForEdit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.whitelistEntries.push(CMsgCustomGameWhitelistForEdit_WhitelistEntry.decode(reader, reader.uint32()));
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

function createBaseCMsgCustomGameWhitelistForEdit_WhitelistEntry(): CMsgCustomGameWhitelistForEdit_WhitelistEntry {
  return { customGameId: "0", whitelistState: 0 };
}

export const CMsgCustomGameWhitelistForEdit_WhitelistEntry = {
  encode(message: CMsgCustomGameWhitelistForEdit_WhitelistEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customGameId !== "0") {
      writer.uint32(8).uint64(message.customGameId);
    }
    if (message.whitelistState !== 0) {
      writer.uint32(16).int32(message.whitelistState);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCustomGameWhitelistForEdit_WhitelistEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCustomGameWhitelistForEdit_WhitelistEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.customGameId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.whitelistState = reader.int32() as any;
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

function createBaseCMsgPlayerRecentMatchInfo(): CMsgPlayerRecentMatchInfo {
  return { matchId: "0", timestamp: 0, duration: 0, win: false, heroId: 0, kills: 0, deaths: 0, assists: 0 };
}

export const CMsgPlayerRecentMatchInfo = {
  encode(message: CMsgPlayerRecentMatchInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.duration !== 0) {
      writer.uint32(24).uint32(message.duration);
    }
    if (message.win === true) {
      writer.uint32(32).bool(message.win);
    }
    if (message.heroId !== 0) {
      writer.uint32(40).uint32(message.heroId);
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPlayerRecentMatchInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPlayerRecentMatchInfo();
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

          message.timestamp = reader.uint32();
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

          message.win = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.heroId = reader.uint32();
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
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgPlayerMatchRecord(): CMsgPlayerMatchRecord {
  return { wins: 0, losses: 0 };
}

export const CMsgPlayerMatchRecord = {
  encode(message: CMsgPlayerMatchRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wins !== 0) {
      writer.uint32(8).uint32(message.wins);
    }
    if (message.losses !== 0) {
      writer.uint32(16).uint32(message.losses);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPlayerMatchRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPlayerMatchRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.wins = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.losses = reader.uint32();
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

function createBaseCMsgPlayerRecentMatchOutcomes(): CMsgPlayerRecentMatchOutcomes {
  return { outcomes: 0, matchCount: 0 };
}

export const CMsgPlayerRecentMatchOutcomes = {
  encode(message: CMsgPlayerRecentMatchOutcomes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.outcomes !== 0) {
      writer.uint32(8).uint32(message.outcomes);
    }
    if (message.matchCount !== 0) {
      writer.uint32(16).uint32(message.matchCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPlayerRecentMatchOutcomes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPlayerRecentMatchOutcomes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.outcomes = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.matchCount = reader.uint32();
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

function createBaseCMsgPlayerRecentCommends(): CMsgPlayerRecentCommends {
  return { commends: 0, matchCount: 0 };
}

export const CMsgPlayerRecentCommends = {
  encode(message: CMsgPlayerRecentCommends, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commends !== 0) {
      writer.uint32(8).uint32(message.commends);
    }
    if (message.matchCount !== 0) {
      writer.uint32(16).uint32(message.matchCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPlayerRecentCommends {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPlayerRecentCommends();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.commends = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.matchCount = reader.uint32();
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

function createBaseCMsgPlayerRecentAccomplishments(): CMsgPlayerRecentAccomplishments {
  return {
    recentOutcomes: undefined,
    totalRecord: undefined,
    predictionStreak: 0,
    plusPredictionStreak: 0,
    recentCommends: undefined,
    firstMatchTimestamp: 0,
    lastMatch: undefined,
    recentMvps: undefined,
  };
}

export const CMsgPlayerRecentAccomplishments = {
  encode(message: CMsgPlayerRecentAccomplishments, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recentOutcomes !== undefined) {
      CMsgPlayerRecentMatchOutcomes.encode(message.recentOutcomes, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalRecord !== undefined) {
      CMsgPlayerMatchRecord.encode(message.totalRecord, writer.uint32(18).fork()).ldelim();
    }
    if (message.predictionStreak !== 0) {
      writer.uint32(24).uint32(message.predictionStreak);
    }
    if (message.plusPredictionStreak !== 0) {
      writer.uint32(32).uint32(message.plusPredictionStreak);
    }
    if (message.recentCommends !== undefined) {
      CMsgPlayerRecentCommends.encode(message.recentCommends, writer.uint32(42).fork()).ldelim();
    }
    if (message.firstMatchTimestamp !== 0) {
      writer.uint32(48).uint32(message.firstMatchTimestamp);
    }
    if (message.lastMatch !== undefined) {
      CMsgPlayerRecentMatchInfo.encode(message.lastMatch, writer.uint32(58).fork()).ldelim();
    }
    if (message.recentMvps !== undefined) {
      CMsgPlayerRecentMatchOutcomes.encode(message.recentMvps, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPlayerRecentAccomplishments {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPlayerRecentAccomplishments();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.recentOutcomes = CMsgPlayerRecentMatchOutcomes.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.totalRecord = CMsgPlayerMatchRecord.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.predictionStreak = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.plusPredictionStreak = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.recentCommends = CMsgPlayerRecentCommends.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.firstMatchTimestamp = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.lastMatch = CMsgPlayerRecentMatchInfo.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.recentMvps = CMsgPlayerRecentMatchOutcomes.decode(reader, reader.uint32());
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

function createBaseCMsgPlayerHeroRecentAccomplishments(): CMsgPlayerHeroRecentAccomplishments {
  return { recentOutcomes: undefined, totalRecord: undefined, lastMatch: undefined };
}

export const CMsgPlayerHeroRecentAccomplishments = {
  encode(message: CMsgPlayerHeroRecentAccomplishments, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recentOutcomes !== undefined) {
      CMsgPlayerRecentMatchOutcomes.encode(message.recentOutcomes, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalRecord !== undefined) {
      CMsgPlayerMatchRecord.encode(message.totalRecord, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastMatch !== undefined) {
      CMsgPlayerRecentMatchInfo.encode(message.lastMatch, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPlayerHeroRecentAccomplishments {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPlayerHeroRecentAccomplishments();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.recentOutcomes = CMsgPlayerRecentMatchOutcomes.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.totalRecord = CMsgPlayerMatchRecord.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.lastMatch = CMsgPlayerRecentMatchInfo.decode(reader, reader.uint32());
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

function createBaseCMsgRecentAccomplishments(): CMsgRecentAccomplishments {
  return { playerAccomplishments: undefined, heroAccomplishments: undefined };
}

export const CMsgRecentAccomplishments = {
  encode(message: CMsgRecentAccomplishments, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerAccomplishments !== undefined) {
      CMsgPlayerRecentAccomplishments.encode(message.playerAccomplishments, writer.uint32(10).fork()).ldelim();
    }
    if (message.heroAccomplishments !== undefined) {
      CMsgPlayerHeroRecentAccomplishments.encode(message.heroAccomplishments, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRecentAccomplishments {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRecentAccomplishments();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playerAccomplishments = CMsgPlayerRecentAccomplishments.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.heroAccomplishments = CMsgPlayerHeroRecentAccomplishments.decode(reader, reader.uint32());
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

function createBaseCMsgServerToGCRequestPlayerRecentAccomplishments(): CMsgServerToGCRequestPlayerRecentAccomplishments {
  return { accountId: 0, heroId: 0 };
}

export const CMsgServerToGCRequestPlayerRecentAccomplishments = {
  encode(
    message: CMsgServerToGCRequestPlayerRecentAccomplishments,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).uint32(message.heroId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCRequestPlayerRecentAccomplishments {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCRequestPlayerRecentAccomplishments();
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
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgServerToGCRequestPlayerRecentAccomplishmentsResponse(): CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse {
  return { result: 0, playerAccomplishments: undefined };
}

export const CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse = {
  encode(
    message: CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.playerAccomplishments !== undefined) {
      CMsgRecentAccomplishments.encode(message.playerAccomplishments, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgServerToGCRequestPlayerRecentAccomplishmentsResponse();
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

          message.playerAccomplishments = CMsgRecentAccomplishments.decode(reader, reader.uint32());
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

function createBaseCMsgArcanaVoteMatchVotes(): CMsgArcanaVoteMatchVotes {
  return { matchId: 0, heroId: 0, voteCount: 0 };
}

export const CMsgArcanaVoteMatchVotes = {
  encode(message: CMsgArcanaVoteMatchVotes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== 0) {
      writer.uint32(8).uint32(message.matchId);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).uint32(message.heroId);
    }
    if (message.voteCount !== 0) {
      writer.uint32(24).uint32(message.voteCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgArcanaVoteMatchVotes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgArcanaVoteMatchVotes();
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

          message.heroId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.voteCount = reader.uint32();
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

function createBaseCMsgGCtoGCAssociatedExploiterAccountInfo(): CMsgGCtoGCAssociatedExploiterAccountInfo {
  return { accountId: 0, numMatchesToSearch: 0, minSharedMatchCount: 0, numAdditionalPlayers: 0 };
}

export const CMsgGCtoGCAssociatedExploiterAccountInfo = {
  encode(message: CMsgGCtoGCAssociatedExploiterAccountInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.numMatchesToSearch !== 0) {
      writer.uint32(16).uint32(message.numMatchesToSearch);
    }
    if (message.minSharedMatchCount !== 0) {
      writer.uint32(24).uint32(message.minSharedMatchCount);
    }
    if (message.numAdditionalPlayers !== 0) {
      writer.uint32(32).uint32(message.numAdditionalPlayers);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCtoGCAssociatedExploiterAccountInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCtoGCAssociatedExploiterAccountInfo();
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

          message.numMatchesToSearch = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.minSharedMatchCount = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.numAdditionalPlayers = reader.uint32();
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

function createBaseCMsgGCtoGCAssociatedExploiterAccountInfoResponse(): CMsgGCtoGCAssociatedExploiterAccountInfoResponse {
  return { accounts: [] };
}

export const CMsgGCtoGCAssociatedExploiterAccountInfoResponse = {
  encode(
    message: CMsgGCtoGCAssociatedExploiterAccountInfoResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.accounts) {
      CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCtoGCAssociatedExploiterAccountInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCtoGCAssociatedExploiterAccountInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accounts.push(
            CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account.decode(reader, reader.uint32()),
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

function createBaseCMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account(): CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account {
  return {
    accountId: 0,
    numCommonMatches: 0,
    earliestCommonMatch: 0,
    latestCommonMatch: 0,
    generation: 0,
    persona: "",
    alreadyBanned: false,
  };
}

export const CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account = {
  encode(
    message: CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.numCommonMatches !== 0) {
      writer.uint32(16).uint32(message.numCommonMatches);
    }
    if (message.earliestCommonMatch !== 0) {
      writer.uint32(24).uint32(message.earliestCommonMatch);
    }
    if (message.latestCommonMatch !== 0) {
      writer.uint32(32).uint32(message.latestCommonMatch);
    }
    if (message.generation !== 0) {
      writer.uint32(40).uint32(message.generation);
    }
    if (message.persona !== "") {
      writer.uint32(50).string(message.persona);
    }
    if (message.alreadyBanned === true) {
      writer.uint32(56).bool(message.alreadyBanned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account();
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

          message.numCommonMatches = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.earliestCommonMatch = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.latestCommonMatch = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.generation = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.persona = reader.string();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.alreadyBanned = reader.bool();
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

function createBaseCMsgPullTabsData(): CMsgPullTabsData {
  return { slots: [], jackpots: [], lastBoard: 0 };
}

export const CMsgPullTabsData = {
  encode(message: CMsgPullTabsData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.slots) {
      CMsgPullTabsData_Slot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.jackpots) {
      CMsgPullTabsData_Jackpot.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastBoard !== 0) {
      writer.uint32(24).uint32(message.lastBoard);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPullTabsData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPullTabsData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.slots.push(CMsgPullTabsData_Slot.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.jackpots.push(CMsgPullTabsData_Jackpot.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.lastBoard = reader.uint32();
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

function createBaseCMsgPullTabsData_Slot(): CMsgPullTabsData_Slot {
  return { eventId: 0, boardId: 0, heroId: 0, actionId: 0, redeemed: false };
}

export const CMsgPullTabsData_Slot = {
  encode(message: CMsgPullTabsData_Slot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.boardId !== 0) {
      writer.uint32(16).uint32(message.boardId);
    }
    if (message.heroId !== 0) {
      writer.uint32(24).uint32(message.heroId);
    }
    if (message.actionId !== 0) {
      writer.uint32(32).uint32(message.actionId);
    }
    if (message.redeemed === true) {
      writer.uint32(40).bool(message.redeemed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPullTabsData_Slot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPullTabsData_Slot();
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

          message.boardId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.actionId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.redeemed = reader.bool();
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

function createBaseCMsgPullTabsData_Jackpot(): CMsgPullTabsData_Jackpot {
  return { boardId: 0, actionId: 0, heroId: 0 };
}

export const CMsgPullTabsData_Jackpot = {
  encode(message: CMsgPullTabsData_Jackpot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boardId !== 0) {
      writer.uint32(8).uint32(message.boardId);
    }
    if (message.actionId !== 0) {
      writer.uint32(16).uint32(message.actionId);
    }
    if (message.heroId !== 0) {
      writer.uint32(24).uint32(message.heroId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPullTabsData_Jackpot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPullTabsData_Jackpot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.boardId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.actionId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
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
};

function createBaseCMsgUnderDraftData(): CMsgUnderDraftData {
  return { benchSlots: [], shopSlots: [], gold: 0, totalGold: 0, notRestorable: false };
}

export const CMsgUnderDraftData = {
  encode(message: CMsgUnderDraftData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.benchSlots) {
      CMsgUnderDraftData_BenchSlot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.shopSlots) {
      CMsgUnderDraftData_ShopSlot.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.gold !== 0) {
      writer.uint32(24).uint32(message.gold);
    }
    if (message.totalGold !== 0) {
      writer.uint32(32).uint32(message.totalGold);
    }
    if (message.notRestorable === true) {
      writer.uint32(40).bool(message.notRestorable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgUnderDraftData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgUnderDraftData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.benchSlots.push(CMsgUnderDraftData_BenchSlot.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.shopSlots.push(CMsgUnderDraftData_ShopSlot.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.gold = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.totalGold = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.notRestorable = reader.bool();
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

function createBaseCMsgUnderDraftData_BenchSlot(): CMsgUnderDraftData_BenchSlot {
  return { slotId: 0, heroId: 0, stars: 0 };
}

export const CMsgUnderDraftData_BenchSlot = {
  encode(message: CMsgUnderDraftData_BenchSlot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slotId !== 0) {
      writer.uint32(8).uint32(message.slotId);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).uint32(message.heroId);
    }
    if (message.stars !== 0) {
      writer.uint32(24).uint32(message.stars);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgUnderDraftData_BenchSlot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgUnderDraftData_BenchSlot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.slotId = reader.uint32();
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

          message.stars = reader.uint32();
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

function createBaseCMsgUnderDraftData_ShopSlot(): CMsgUnderDraftData_ShopSlot {
  return { slotId: 0, heroId: 0, isSpecialReward: false };
}

export const CMsgUnderDraftData_ShopSlot = {
  encode(message: CMsgUnderDraftData_ShopSlot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slotId !== 0) {
      writer.uint32(8).uint32(message.slotId);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).uint32(message.heroId);
    }
    if (message.isSpecialReward === true) {
      writer.uint32(24).bool(message.isSpecialReward);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgUnderDraftData_ShopSlot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgUnderDraftData_ShopSlot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.slotId = reader.uint32();
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

          message.isSpecialReward = reader.bool();
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

function createBaseCMsgPlayerTitleData(): CMsgPlayerTitleData {
  return { title: [], eventId: [], active: 0 };
}

export const CMsgPlayerTitleData = {
  encode(message: CMsgPlayerTitleData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.title) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.eventId) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.active !== 0) {
      writer.uint32(24).uint32(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPlayerTitleData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPlayerTitleData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.title.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.title.push(reader.uint32());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 16) {
            message.eventId.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.eventId.push(reader.uint32());
            }

            continue;
          }

          break;
        case 3:
          if (tag != 24) {
            break;
          }

          message.active = reader.uint32();
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

function createBaseCMsgDOTATriviaQuestion(): CMsgDOTATriviaQuestion {
  return { questionId: 0, category: 0, timestamp: 0, questionValue: "", answerValues: [], correctAnswerIndex: 0 };
}

export const CMsgDOTATriviaQuestion = {
  encode(message: CMsgDOTATriviaQuestion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.questionId !== 0) {
      writer.uint32(8).uint32(message.questionId);
    }
    if (message.category !== 0) {
      writer.uint32(16).int32(message.category);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).uint32(message.timestamp);
    }
    if (message.questionValue !== "") {
      writer.uint32(34).string(message.questionValue);
    }
    for (const v of message.answerValues) {
      writer.uint32(42).string(v!);
    }
    if (message.correctAnswerIndex !== 0) {
      writer.uint32(48).uint32(message.correctAnswerIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATriviaQuestion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATriviaQuestion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.questionId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.category = reader.int32() as any;
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

          message.questionValue = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.answerValues.push(reader.string());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.correctAnswerIndex = reader.uint32();
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

function createBaseCMsgDOTATriviaQuestionAnswersSummary(): CMsgDOTATriviaQuestionAnswersSummary {
  return { summaryAvailable: false, pickedCount: [] };
}

export const CMsgDOTATriviaQuestionAnswersSummary = {
  encode(message: CMsgDOTATriviaQuestionAnswersSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.summaryAvailable === true) {
      writer.uint32(8).bool(message.summaryAvailable);
    }
    writer.uint32(18).fork();
    for (const v of message.pickedCount) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATriviaQuestionAnswersSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATriviaQuestionAnswersSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.summaryAvailable = reader.bool();
          continue;
        case 2:
          if (tag == 16) {
            message.pickedCount.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pickedCount.push(reader.uint32());
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

function createBaseCMsgGameDataSpecialValueBonus(): CMsgGameDataSpecialValueBonus {
  return { name: "", value: 0, operation: 0 };
}

export const CMsgGameDataSpecialValueBonus = {
  encode(message: CMsgGameDataSpecialValueBonus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== 0) {
      writer.uint32(21).float(message.value);
    }
    if (message.operation !== 0) {
      writer.uint32(24).uint32(message.operation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameDataSpecialValueBonus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameDataSpecialValueBonus();
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
          if (tag != 21) {
            break;
          }

          message.value = reader.float();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.operation = reader.uint32();
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

function createBaseCMsgGameDataSpecialValues(): CMsgGameDataSpecialValues {
  return { name: "", valuesFloat: [], isPercentage: false, headingLoc: "", bonuses: [] };
}

export const CMsgGameDataSpecialValues = {
  encode(message: CMsgGameDataSpecialValues, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    writer.uint32(18).fork();
    for (const v of message.valuesFloat) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.isPercentage === true) {
      writer.uint32(32).bool(message.isPercentage);
    }
    if (message.headingLoc !== "") {
      writer.uint32(42).string(message.headingLoc);
    }
    for (const v of message.bonuses) {
      CMsgGameDataSpecialValueBonus.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameDataSpecialValues {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameDataSpecialValues();
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
          if (tag == 21) {
            message.valuesFloat.push(reader.float());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.valuesFloat.push(reader.float());
            }

            continue;
          }

          break;
        case 4:
          if (tag != 32) {
            break;
          }

          message.isPercentage = reader.bool();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.headingLoc = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.bonuses.push(CMsgGameDataSpecialValueBonus.decode(reader, reader.uint32()));
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

function createBaseCMsgGameDataAbilityOrItem(): CMsgGameDataAbilityOrItem {
  return {
    id: 0,
    name: "",
    nameLoc: "",
    descLoc: "",
    loreLoc: "",
    notesLoc: [],
    shardLoc: "",
    scepterLoc: "",
    type: 0,
    behavior: "0",
    targetTeam: 0,
    targetType: 0,
    flags: 0,
    damage: 0,
    immunity: 0,
    dispellable: 0,
    maxLevel: 0,
    castRanges: [],
    castPoints: [],
    channelTimes: [],
    cooldowns: [],
    durations: [],
    damages: [],
    manaCosts: [],
    goldCosts: [],
    healthCosts: [],
    specialValues: [],
    isItem: false,
    abilityHasScepter: false,
    abilityHasShard: false,
    abilityIsGrantedByScepter: false,
    abilityIsGrantedByShard: false,
    itemCost: 0,
    itemInitialCharges: 0,
    itemNeutralTier: 0,
    itemStockMax: 0,
    itemStockTime: 0,
    itemQuality: 0,
  };
}

export const CMsgGameDataAbilityOrItem = {
  encode(message: CMsgGameDataAbilityOrItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.nameLoc !== "") {
      writer.uint32(42).string(message.nameLoc);
    }
    if (message.descLoc !== "") {
      writer.uint32(50).string(message.descLoc);
    }
    if (message.loreLoc !== "") {
      writer.uint32(58).string(message.loreLoc);
    }
    for (const v of message.notesLoc) {
      writer.uint32(66).string(v!);
    }
    if (message.shardLoc !== "") {
      writer.uint32(74).string(message.shardLoc);
    }
    if (message.scepterLoc !== "") {
      writer.uint32(82).string(message.scepterLoc);
    }
    if (message.type !== 0) {
      writer.uint32(160).uint32(message.type);
    }
    if (message.behavior !== "0") {
      writer.uint32(168).uint64(message.behavior);
    }
    if (message.targetTeam !== 0) {
      writer.uint32(176).uint32(message.targetTeam);
    }
    if (message.targetType !== 0) {
      writer.uint32(184).uint32(message.targetType);
    }
    if (message.flags !== 0) {
      writer.uint32(192).uint32(message.flags);
    }
    if (message.damage !== 0) {
      writer.uint32(200).uint32(message.damage);
    }
    if (message.immunity !== 0) {
      writer.uint32(208).uint32(message.immunity);
    }
    if (message.dispellable !== 0) {
      writer.uint32(216).uint32(message.dispellable);
    }
    if (message.maxLevel !== 0) {
      writer.uint32(224).uint32(message.maxLevel);
    }
    writer.uint32(242).fork();
    for (const v of message.castRanges) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(250).fork();
    for (const v of message.castPoints) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(258).fork();
    for (const v of message.channelTimes) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(266).fork();
    for (const v of message.cooldowns) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(274).fork();
    for (const v of message.durations) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(282).fork();
    for (const v of message.damages) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(290).fork();
    for (const v of message.manaCosts) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(298).fork();
    for (const v of message.goldCosts) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(306).fork();
    for (const v of message.healthCosts) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.specialValues) {
      CMsgGameDataSpecialValues.encode(v!, writer.uint32(322).fork()).ldelim();
    }
    if (message.isItem === true) {
      writer.uint32(400).bool(message.isItem);
    }
    if (message.abilityHasScepter === true) {
      writer.uint32(480).bool(message.abilityHasScepter);
    }
    if (message.abilityHasShard === true) {
      writer.uint32(488).bool(message.abilityHasShard);
    }
    if (message.abilityIsGrantedByScepter === true) {
      writer.uint32(496).bool(message.abilityIsGrantedByScepter);
    }
    if (message.abilityIsGrantedByShard === true) {
      writer.uint32(504).bool(message.abilityIsGrantedByShard);
    }
    if (message.itemCost !== 0) {
      writer.uint32(560).uint32(message.itemCost);
    }
    if (message.itemInitialCharges !== 0) {
      writer.uint32(568).uint32(message.itemInitialCharges);
    }
    if (message.itemNeutralTier !== 0) {
      writer.uint32(576).uint32(message.itemNeutralTier);
    }
    if (message.itemStockMax !== 0) {
      writer.uint32(584).uint32(message.itemStockMax);
    }
    if (message.itemStockTime !== 0) {
      writer.uint32(597).float(message.itemStockTime);
    }
    if (message.itemQuality !== 0) {
      writer.uint32(680).uint32(message.itemQuality);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameDataAbilityOrItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameDataAbilityOrItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.nameLoc = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.descLoc = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.loreLoc = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.notesLoc.push(reader.string());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.shardLoc = reader.string();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.scepterLoc = reader.string();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.type = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.behavior = longToString(reader.uint64() as Long);
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.targetTeam = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.targetType = reader.uint32();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.damage = reader.uint32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.immunity = reader.uint32();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.dispellable = reader.uint32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.maxLevel = reader.uint32();
          continue;
        case 30:
          if (tag == 240) {
            message.castRanges.push(reader.uint32());
            continue;
          }

          if (tag == 242) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.castRanges.push(reader.uint32());
            }

            continue;
          }

          break;
        case 31:
          if (tag == 253) {
            message.castPoints.push(reader.float());
            continue;
          }

          if (tag == 250) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.castPoints.push(reader.float());
            }

            continue;
          }

          break;
        case 32:
          if (tag == 261) {
            message.channelTimes.push(reader.float());
            continue;
          }

          if (tag == 258) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.channelTimes.push(reader.float());
            }

            continue;
          }

          break;
        case 33:
          if (tag == 269) {
            message.cooldowns.push(reader.float());
            continue;
          }

          if (tag == 266) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cooldowns.push(reader.float());
            }

            continue;
          }

          break;
        case 34:
          if (tag == 277) {
            message.durations.push(reader.float());
            continue;
          }

          if (tag == 274) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.durations.push(reader.float());
            }

            continue;
          }

          break;
        case 35:
          if (tag == 280) {
            message.damages.push(reader.uint32());
            continue;
          }

          if (tag == 282) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.damages.push(reader.uint32());
            }

            continue;
          }

          break;
        case 36:
          if (tag == 288) {
            message.manaCosts.push(reader.uint32());
            continue;
          }

          if (tag == 290) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.manaCosts.push(reader.uint32());
            }

            continue;
          }

          break;
        case 37:
          if (tag == 296) {
            message.goldCosts.push(reader.uint32());
            continue;
          }

          if (tag == 298) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.goldCosts.push(reader.uint32());
            }

            continue;
          }

          break;
        case 38:
          if (tag == 304) {
            message.healthCosts.push(reader.uint32());
            continue;
          }

          if (tag == 306) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.healthCosts.push(reader.uint32());
            }

            continue;
          }

          break;
        case 40:
          if (tag != 322) {
            break;
          }

          message.specialValues.push(CMsgGameDataSpecialValues.decode(reader, reader.uint32()));
          continue;
        case 50:
          if (tag != 400) {
            break;
          }

          message.isItem = reader.bool();
          continue;
        case 60:
          if (tag != 480) {
            break;
          }

          message.abilityHasScepter = reader.bool();
          continue;
        case 61:
          if (tag != 488) {
            break;
          }

          message.abilityHasShard = reader.bool();
          continue;
        case 62:
          if (tag != 496) {
            break;
          }

          message.abilityIsGrantedByScepter = reader.bool();
          continue;
        case 63:
          if (tag != 504) {
            break;
          }

          message.abilityIsGrantedByShard = reader.bool();
          continue;
        case 70:
          if (tag != 560) {
            break;
          }

          message.itemCost = reader.uint32();
          continue;
        case 71:
          if (tag != 568) {
            break;
          }

          message.itemInitialCharges = reader.uint32();
          continue;
        case 72:
          if (tag != 576) {
            break;
          }

          message.itemNeutralTier = reader.uint32();
          continue;
        case 73:
          if (tag != 584) {
            break;
          }

          message.itemStockMax = reader.uint32();
          continue;
        case 74:
          if (tag != 597) {
            break;
          }

          message.itemStockTime = reader.float();
          continue;
        case 85:
          if (tag != 680) {
            break;
          }

          message.itemQuality = reader.uint32();
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

function createBaseCMsgGameDataHero(): CMsgGameDataHero {
  return {
    id: 0,
    name: "",
    orderId: 0,
    nameLoc: "",
    bioLoc: "",
    hypeLoc: "",
    npeDescLoc: "",
    strBase: 0,
    strGain: 0,
    agiBase: 0,
    agiGain: 0,
    intBase: 0,
    intGain: 0,
    primaryAttr: 0,
    complexity: 0,
    attackCapability: 0,
    roleLevels: [],
    damageMin: 0,
    damageMax: 0,
    attackRate: 0,
    attackRange: 0,
    projectileSpeed: 0,
    armor: 0,
    magicResistance: 0,
    movementSpeed: 0,
    turnRate: 0,
    sightRangeDay: 0,
    sightRangeNight: 0,
    maxHealth: 0,
    healthRegen: 0,
    maxMana: 0,
    manaRegen: 0,
    abilities: [],
    talents: [],
  };
}

export const CMsgGameDataHero = {
  encode(message: CMsgGameDataHero, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.orderId !== 0) {
      writer.uint32(24).uint32(message.orderId);
    }
    if (message.nameLoc !== "") {
      writer.uint32(42).string(message.nameLoc);
    }
    if (message.bioLoc !== "") {
      writer.uint32(50).string(message.bioLoc);
    }
    if (message.hypeLoc !== "") {
      writer.uint32(58).string(message.hypeLoc);
    }
    if (message.npeDescLoc !== "") {
      writer.uint32(66).string(message.npeDescLoc);
    }
    if (message.strBase !== 0) {
      writer.uint32(80).uint32(message.strBase);
    }
    if (message.strGain !== 0) {
      writer.uint32(93).float(message.strGain);
    }
    if (message.agiBase !== 0) {
      writer.uint32(96).uint32(message.agiBase);
    }
    if (message.agiGain !== 0) {
      writer.uint32(109).float(message.agiGain);
    }
    if (message.intBase !== 0) {
      writer.uint32(112).uint32(message.intBase);
    }
    if (message.intGain !== 0) {
      writer.uint32(125).float(message.intGain);
    }
    if (message.primaryAttr !== 0) {
      writer.uint32(160).uint32(message.primaryAttr);
    }
    if (message.complexity !== 0) {
      writer.uint32(168).uint32(message.complexity);
    }
    if (message.attackCapability !== 0) {
      writer.uint32(176).uint32(message.attackCapability);
    }
    writer.uint32(186).fork();
    for (const v of message.roleLevels) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.damageMin !== 0) {
      writer.uint32(192).uint32(message.damageMin);
    }
    if (message.damageMax !== 0) {
      writer.uint32(200).uint32(message.damageMax);
    }
    if (message.attackRate !== 0) {
      writer.uint32(213).float(message.attackRate);
    }
    if (message.attackRange !== 0) {
      writer.uint32(216).uint32(message.attackRange);
    }
    if (message.projectileSpeed !== 0) {
      writer.uint32(224).uint32(message.projectileSpeed);
    }
    if (message.armor !== 0) {
      writer.uint32(237).float(message.armor);
    }
    if (message.magicResistance !== 0) {
      writer.uint32(240).uint32(message.magicResistance);
    }
    if (message.movementSpeed !== 0) {
      writer.uint32(248).uint32(message.movementSpeed);
    }
    if (message.turnRate !== 0) {
      writer.uint32(261).float(message.turnRate);
    }
    if (message.sightRangeDay !== 0) {
      writer.uint32(264).uint32(message.sightRangeDay);
    }
    if (message.sightRangeNight !== 0) {
      writer.uint32(272).uint32(message.sightRangeNight);
    }
    if (message.maxHealth !== 0) {
      writer.uint32(280).uint32(message.maxHealth);
    }
    if (message.healthRegen !== 0) {
      writer.uint32(293).float(message.healthRegen);
    }
    if (message.maxMana !== 0) {
      writer.uint32(296).uint32(message.maxMana);
    }
    if (message.manaRegen !== 0) {
      writer.uint32(309).float(message.manaRegen);
    }
    for (const v of message.abilities) {
      CMsgGameDataAbilityOrItem.encode(v!, writer.uint32(322).fork()).ldelim();
    }
    for (const v of message.talents) {
      CMsgGameDataAbilityOrItem.encode(v!, writer.uint32(330).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameDataHero {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameDataHero();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.orderId = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.nameLoc = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.bioLoc = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.hypeLoc = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.npeDescLoc = reader.string();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.strBase = reader.uint32();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.strGain = reader.float();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.agiBase = reader.uint32();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.agiGain = reader.float();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.intBase = reader.uint32();
          continue;
        case 15:
          if (tag != 125) {
            break;
          }

          message.intGain = reader.float();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.primaryAttr = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.complexity = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.attackCapability = reader.uint32();
          continue;
        case 23:
          if (tag == 184) {
            message.roleLevels.push(reader.uint32());
            continue;
          }

          if (tag == 186) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roleLevels.push(reader.uint32());
            }

            continue;
          }

          break;
        case 24:
          if (tag != 192) {
            break;
          }

          message.damageMin = reader.uint32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.damageMax = reader.uint32();
          continue;
        case 26:
          if (tag != 213) {
            break;
          }

          message.attackRate = reader.float();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.attackRange = reader.uint32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.projectileSpeed = reader.uint32();
          continue;
        case 29:
          if (tag != 237) {
            break;
          }

          message.armor = reader.float();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.magicResistance = reader.uint32();
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.movementSpeed = reader.uint32();
          continue;
        case 32:
          if (tag != 261) {
            break;
          }

          message.turnRate = reader.float();
          continue;
        case 33:
          if (tag != 264) {
            break;
          }

          message.sightRangeDay = reader.uint32();
          continue;
        case 34:
          if (tag != 272) {
            break;
          }

          message.sightRangeNight = reader.uint32();
          continue;
        case 35:
          if (tag != 280) {
            break;
          }

          message.maxHealth = reader.uint32();
          continue;
        case 36:
          if (tag != 293) {
            break;
          }

          message.healthRegen = reader.float();
          continue;
        case 37:
          if (tag != 296) {
            break;
          }

          message.maxMana = reader.uint32();
          continue;
        case 38:
          if (tag != 309) {
            break;
          }

          message.manaRegen = reader.float();
          continue;
        case 40:
          if (tag != 322) {
            break;
          }

          message.abilities.push(CMsgGameDataAbilityOrItem.decode(reader, reader.uint32()));
          continue;
        case 41:
          if (tag != 330) {
            break;
          }

          message.talents.push(CMsgGameDataAbilityOrItem.decode(reader, reader.uint32()));
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

function createBaseCMsgGameDataAbilities(): CMsgGameDataAbilities {
  return { abilities: [] };
}

export const CMsgGameDataAbilities = {
  encode(message: CMsgGameDataAbilities, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.abilities) {
      CMsgGameDataAbilityOrItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameDataAbilities {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameDataAbilities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.abilities.push(CMsgGameDataAbilityOrItem.decode(reader, reader.uint32()));
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

function createBaseCMsgGameDataItems(): CMsgGameDataItems {
  return { items: [] };
}

export const CMsgGameDataItems = {
  encode(message: CMsgGameDataItems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      CMsgGameDataAbilityOrItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameDataItems {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameDataItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.items.push(CMsgGameDataAbilityOrItem.decode(reader, reader.uint32()));
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

function createBaseCMsgGameDataHeroes(): CMsgGameDataHeroes {
  return { heroes: [] };
}

export const CMsgGameDataHeroes = {
  encode(message: CMsgGameDataHeroes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.heroes) {
      CMsgGameDataHero.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameDataHeroes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameDataHeroes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.heroes.push(CMsgGameDataHero.decode(reader, reader.uint32()));
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

function createBaseCMsgGameDataHeroList(): CMsgGameDataHeroList {
  return { heroes: [] };
}

export const CMsgGameDataHeroList = {
  encode(message: CMsgGameDataHeroList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.heroes) {
      CMsgGameDataHeroList_HeroInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameDataHeroList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameDataHeroList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.heroes.push(CMsgGameDataHeroList_HeroInfo.decode(reader, reader.uint32()));
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

function createBaseCMsgGameDataHeroList_HeroInfo(): CMsgGameDataHeroList_HeroInfo {
  return { id: 0, name: "", nameLoc: "", nameEnglishLoc: "", primaryAttr: 0, complexity: 0 };
}

export const CMsgGameDataHeroList_HeroInfo = {
  encode(message: CMsgGameDataHeroList_HeroInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.nameLoc !== "") {
      writer.uint32(26).string(message.nameLoc);
    }
    if (message.nameEnglishLoc !== "") {
      writer.uint32(34).string(message.nameEnglishLoc);
    }
    if (message.primaryAttr !== 0) {
      writer.uint32(40).uint32(message.primaryAttr);
    }
    if (message.complexity !== 0) {
      writer.uint32(48).uint32(message.complexity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameDataHeroList_HeroInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameDataHeroList_HeroInfo();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.nameLoc = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.nameEnglishLoc = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.primaryAttr = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.complexity = reader.uint32();
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

function createBaseCMsgGameDataItemAbilityList(): CMsgGameDataItemAbilityList {
  return { itemabilities: [] };
}

export const CMsgGameDataItemAbilityList = {
  encode(message: CMsgGameDataItemAbilityList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.itemabilities) {
      CMsgGameDataItemAbilityList_ItemAbilityInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameDataItemAbilityList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameDataItemAbilityList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.itemabilities.push(CMsgGameDataItemAbilityList_ItemAbilityInfo.decode(reader, reader.uint32()));
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

function createBaseCMsgGameDataItemAbilityList_ItemAbilityInfo(): CMsgGameDataItemAbilityList_ItemAbilityInfo {
  return { id: 0, name: "", nameLoc: "", nameEnglishLoc: "", neutralItemTier: 0 };
}

export const CMsgGameDataItemAbilityList_ItemAbilityInfo = {
  encode(message: CMsgGameDataItemAbilityList_ItemAbilityInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.nameLoc !== "") {
      writer.uint32(26).string(message.nameLoc);
    }
    if (message.nameEnglishLoc !== "") {
      writer.uint32(34).string(message.nameEnglishLoc);
    }
    if (message.neutralItemTier !== 0) {
      writer.uint32(40).int32(message.neutralItemTier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameDataItemAbilityList_ItemAbilityInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameDataItemAbilityList_ItemAbilityInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.nameLoc = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.nameEnglishLoc = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.neutralItemTier = reader.int32();
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

function createBaseCMsgLobbyAbilityDraftData(): CMsgLobbyAbilityDraftData {
  return { shuffleDraftOrder: false };
}

export const CMsgLobbyAbilityDraftData = {
  encode(message: CMsgLobbyAbilityDraftData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shuffleDraftOrder === true) {
      writer.uint32(8).bool(message.shuffleDraftOrder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyAbilityDraftData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyAbilityDraftData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.shuffleDraftOrder = reader.bool();
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

function createBaseCSOEconItemDropRateBonus(): CSOEconItemDropRateBonus {
  return {
    accountId: 0,
    expirationDate: 0,
    bonus: 0,
    bonusCount: 0,
    itemId: "0",
    defIndex: 0,
    secondsLeft: 0,
    boosterType: 0,
  };
}

export const CSOEconItemDropRateBonus = {
  encode(message: CSOEconItemDropRateBonus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.expirationDate !== 0) {
      writer.uint32(21).fixed32(message.expirationDate);
    }
    if (message.bonus !== 0) {
      writer.uint32(29).float(message.bonus);
    }
    if (message.bonusCount !== 0) {
      writer.uint32(32).uint32(message.bonusCount);
    }
    if (message.itemId !== "0") {
      writer.uint32(40).uint64(message.itemId);
    }
    if (message.defIndex !== 0) {
      writer.uint32(48).uint32(message.defIndex);
    }
    if (message.secondsLeft !== 0) {
      writer.uint32(56).uint32(message.secondsLeft);
    }
    if (message.boosterType !== 0) {
      writer.uint32(64).uint32(message.boosterType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSOEconItemDropRateBonus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSOEconItemDropRateBonus();
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

          message.expirationDate = reader.fixed32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.bonus = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.bonusCount = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.defIndex = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.secondsLeft = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.boosterType = reader.uint32();
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

function createBaseCSOEconItemTournamentPassport(): CSOEconItemTournamentPassport {
  return {
    accountId: 0,
    leagueId: 0,
    itemId: "0",
    originalPurchaserId: 0,
    passportsBought: 0,
    version: 0,
    defIndex: 0,
    rewardFlags: 0,
  };
}

export const CSOEconItemTournamentPassport = {
  encode(message: CSOEconItemTournamentPassport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.leagueId !== 0) {
      writer.uint32(16).uint32(message.leagueId);
    }
    if (message.itemId !== "0") {
      writer.uint32(24).uint64(message.itemId);
    }
    if (message.originalPurchaserId !== 0) {
      writer.uint32(32).uint32(message.originalPurchaserId);
    }
    if (message.passportsBought !== 0) {
      writer.uint32(40).uint32(message.passportsBought);
    }
    if (message.version !== 0) {
      writer.uint32(48).uint32(message.version);
    }
    if (message.defIndex !== 0) {
      writer.uint32(56).uint32(message.defIndex);
    }
    if (message.rewardFlags !== 0) {
      writer.uint32(64).uint32(message.rewardFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSOEconItemTournamentPassport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSOEconItemTournamentPassport();
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

          message.leagueId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.originalPurchaserId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.passportsBought = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.version = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.defIndex = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.rewardFlags = reader.uint32();
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

function createBaseCMsgStickerbookSticker(): CMsgStickerbookSticker {
  return {
    itemDefId: 0,
    stickerNum: 0,
    quality: 0,
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    rotation: 0,
    scale: 0,
    sourceItemId: "0",
    depthBias: 0,
  };
}

export const CMsgStickerbookSticker = {
  encode(message: CMsgStickerbookSticker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDefId !== 0) {
      writer.uint32(8).uint32(message.itemDefId);
    }
    if (message.stickerNum !== 0) {
      writer.uint32(16).uint32(message.stickerNum);
    }
    if (message.quality !== 0) {
      writer.uint32(24).uint32(message.quality);
    }
    if (message.positionX !== 0) {
      writer.uint32(37).float(message.positionX);
    }
    if (message.positionY !== 0) {
      writer.uint32(45).float(message.positionY);
    }
    if (message.positionZ !== 0) {
      writer.uint32(69).float(message.positionZ);
    }
    if (message.rotation !== 0) {
      writer.uint32(53).float(message.rotation);
    }
    if (message.scale !== 0) {
      writer.uint32(61).float(message.scale);
    }
    if (message.sourceItemId !== "0") {
      writer.uint32(72).uint64(message.sourceItemId);
    }
    if (message.depthBias !== 0) {
      writer.uint32(80).uint32(message.depthBias);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStickerbookSticker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStickerbookSticker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemDefId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.stickerNum = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.quality = reader.uint32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.positionX = reader.float();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.positionY = reader.float();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.positionZ = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.rotation = reader.float();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.scale = reader.float();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.sourceItemId = longToString(reader.uint64() as Long);
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.depthBias = reader.uint32();
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

function createBaseCMsgStickerbookPage(): CMsgStickerbookPage {
  return { pageNum: 0, eventId: 0, teamId: 0, stickers: [], pageType: 0 };
}

export const CMsgStickerbookPage = {
  encode(message: CMsgStickerbookPage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageNum !== 0) {
      writer.uint32(8).uint32(message.pageNum);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    if (message.teamId !== 0) {
      writer.uint32(24).uint32(message.teamId);
    }
    for (const v of message.stickers) {
      CMsgStickerbookSticker.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.pageType !== 0) {
      writer.uint32(40).int32(message.pageType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStickerbookPage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStickerbookPage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.pageNum = reader.uint32();
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

          message.teamId = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.stickers.push(CMsgStickerbookSticker.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.pageType = reader.int32() as any;
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

function createBaseCMsgStickerbookTeamPageOrderSequence(): CMsgStickerbookTeamPageOrderSequence {
  return { pageNumbers: [] };
}

export const CMsgStickerbookTeamPageOrderSequence = {
  encode(message: CMsgStickerbookTeamPageOrderSequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.pageNumbers) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStickerbookTeamPageOrderSequence {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStickerbookTeamPageOrderSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.pageNumbers.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pageNumbers.push(reader.uint32());
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

function createBaseCMsgStickerbook(): CMsgStickerbook {
  return { pages: [], teamPageOrderSequence: undefined, favoritePageNum: 0 };
}

export const CMsgStickerbook = {
  encode(message: CMsgStickerbook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pages) {
      CMsgStickerbookPage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.teamPageOrderSequence !== undefined) {
      CMsgStickerbookTeamPageOrderSequence.encode(message.teamPageOrderSequence, writer.uint32(18).fork()).ldelim();
    }
    if (message.favoritePageNum !== 0) {
      writer.uint32(24).uint32(message.favoritePageNum);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStickerbook {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStickerbook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pages.push(CMsgStickerbookPage.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.teamPageOrderSequence = CMsgStickerbookTeamPageOrderSequence.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.favoritePageNum = reader.uint32();
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

function createBaseCMsgStickerHero(): CMsgStickerHero {
  return { heroId: 0, itemDefId: 0, quality: 0, sourceItemId: "0" };
}

export const CMsgStickerHero = {
  encode(message: CMsgStickerHero, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.itemDefId !== 0) {
      writer.uint32(16).uint32(message.itemDefId);
    }
    if (message.quality !== 0) {
      writer.uint32(24).uint32(message.quality);
    }
    if (message.sourceItemId !== "0") {
      writer.uint32(32).uint64(message.sourceItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStickerHero {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStickerHero();
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

          message.itemDefId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.quality = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.sourceItemId = longToString(reader.uint64() as Long);
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

function createBaseCMsgStickerHeroes(): CMsgStickerHeroes {
  return { heroes: [] };
}

export const CMsgStickerHeroes = {
  encode(message: CMsgStickerHeroes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.heroes) {
      CMsgStickerHero.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStickerHeroes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStickerHeroes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.heroes.push(CMsgStickerHero.decode(reader, reader.uint32()));
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

function createBaseCMsgHeroRoleStats(): CMsgHeroRoleStats {
  return { laneSelectionFlags: 0, matchCount: 0, winCount: 0 };
}

export const CMsgHeroRoleStats = {
  encode(message: CMsgHeroRoleStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.laneSelectionFlags !== 0) {
      writer.uint32(8).uint32(message.laneSelectionFlags);
    }
    if (message.matchCount !== 0) {
      writer.uint32(16).uint32(message.matchCount);
    }
    if (message.winCount !== 0) {
      writer.uint32(24).uint32(message.winCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHeroRoleStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHeroRoleStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.laneSelectionFlags = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.matchCount = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.winCount = reader.uint32();
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

function createBaseCMsgHeroRoleHeroStats(): CMsgHeroRoleHeroStats {
  return { heroId: 0, roleStats: [] };
}

export const CMsgHeroRoleHeroStats = {
  encode(message: CMsgHeroRoleHeroStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    for (const v of message.roleStats) {
      CMsgHeroRoleStats.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHeroRoleHeroStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHeroRoleHeroStats();
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
          if (tag != 18) {
            break;
          }

          message.roleStats.push(CMsgHeroRoleStats.decode(reader, reader.uint32()));
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

function createBaseCMsgHeroRoleRankStats(): CMsgHeroRoleRankStats {
  return { rankTier: 0, heroStats: [] };
}

export const CMsgHeroRoleRankStats = {
  encode(message: CMsgHeroRoleRankStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rankTier !== 0) {
      writer.uint32(8).uint32(message.rankTier);
    }
    for (const v of message.heroStats) {
      CMsgHeroRoleHeroStats.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHeroRoleRankStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHeroRoleRankStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.rankTier = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.heroStats.push(CMsgHeroRoleHeroStats.decode(reader, reader.uint32()));
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

function createBaseCMsgHeroRoleAllRanksStats(): CMsgHeroRoleAllRanksStats {
  return { startTimestamp: 0, endTimestamp: 0, rankStats: [] };
}

export const CMsgHeroRoleAllRanksStats = {
  encode(message: CMsgHeroRoleAllRanksStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startTimestamp !== 0) {
      writer.uint32(8).uint32(message.startTimestamp);
    }
    if (message.endTimestamp !== 0) {
      writer.uint32(16).uint32(message.endTimestamp);
    }
    for (const v of message.rankStats) {
      CMsgHeroRoleRankStats.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHeroRoleAllRanksStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHeroRoleAllRanksStats();
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

          message.endTimestamp = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.rankStats.push(CMsgHeroRoleRankStats.decode(reader, reader.uint32()));
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

function createBaseCMsgMapStatsSnapshot(): CMsgMapStatsSnapshot {
  return {
    timestamp: 0,
    famangosGained: "0",
    wisdomRunesGained: "0",
    roshanKillsDay: "0",
    roshanKillsNight: "0",
    portalsUsed: "0",
    lanternsLit: "0",
    minibossKills: "0",
    outpostsCaptured: "0",
    shieldRunesGained: "0",
  };
}

export const CMsgMapStatsSnapshot = {
  encode(message: CMsgMapStatsSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).uint32(message.timestamp);
    }
    if (message.famangosGained !== "0") {
      writer.uint32(16).uint64(message.famangosGained);
    }
    if (message.wisdomRunesGained !== "0") {
      writer.uint32(24).uint64(message.wisdomRunesGained);
    }
    if (message.roshanKillsDay !== "0") {
      writer.uint32(32).uint64(message.roshanKillsDay);
    }
    if (message.roshanKillsNight !== "0") {
      writer.uint32(40).uint64(message.roshanKillsNight);
    }
    if (message.portalsUsed !== "0") {
      writer.uint32(48).uint64(message.portalsUsed);
    }
    if (message.lanternsLit !== "0") {
      writer.uint32(56).uint64(message.lanternsLit);
    }
    if (message.minibossKills !== "0") {
      writer.uint32(64).uint64(message.minibossKills);
    }
    if (message.outpostsCaptured !== "0") {
      writer.uint32(72).uint64(message.outpostsCaptured);
    }
    if (message.shieldRunesGained !== "0") {
      writer.uint32(80).uint64(message.shieldRunesGained);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMapStatsSnapshot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMapStatsSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.famangosGained = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.wisdomRunesGained = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.roshanKillsDay = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.roshanKillsNight = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.portalsUsed = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.lanternsLit = longToString(reader.uint64() as Long);
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.minibossKills = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.outpostsCaptured = longToString(reader.uint64() as Long);
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.shieldRunesGained = longToString(reader.uint64() as Long);
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

function createBaseCMsgGlobalMapStats(): CMsgGlobalMapStats {
  return { current: undefined, windowStart: undefined, windowEnd: undefined };
}

export const CMsgGlobalMapStats = {
  encode(message: CMsgGlobalMapStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.current !== undefined) {
      CMsgMapStatsSnapshot.encode(message.current, writer.uint32(10).fork()).ldelim();
    }
    if (message.windowStart !== undefined) {
      CMsgMapStatsSnapshot.encode(message.windowStart, writer.uint32(18).fork()).ldelim();
    }
    if (message.windowEnd !== undefined) {
      CMsgMapStatsSnapshot.encode(message.windowEnd, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGlobalMapStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGlobalMapStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.current = CMsgMapStatsSnapshot.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.windowStart = CMsgMapStatsSnapshot.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.windowEnd = CMsgMapStatsSnapshot.decode(reader, reader.uint32());
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
