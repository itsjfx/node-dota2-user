/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DOTAGameState, ETourneyQueueDeadlineState, MatchType } from "./dota_shared_enums";

export enum ELaneSelection {
  k_ELaneSelection_SAFELANE = 0,
  k_ELaneSelection_OFFLANE = 1,
  k_ELaneSelection_MIDLANE = 2,
  k_ELaneSelection_SUPPORT_SOFT = 3,
  k_ELaneSelection_SUPPORT_HARD = 4,
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

export enum EPartyMatchmakingFlags {
  k_EPartyMatchmakingFlags_None = 0,
  k_EPartyMatchmakingFlags_LargeRankSpread = 1,
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

export enum EReadyCheckStatus {
  k_EReadyCheckStatus_Unknown = 0,
  k_EReadyCheckStatus_NotReady = 1,
  k_EReadyCheckStatus_Ready = 2,
}

export enum EReadyCheckRequestResult {
  k_EReadyCheckRequestResult_Success = 0,
  k_EReadyCheckRequestResult_AlreadyInProgress = 1,
  k_EReadyCheckRequestResult_NotInParty = 2,
  k_EReadyCheckRequestResult_SendError = 3,
  k_EReadyCheckRequestResult_UnknownError = 4,
}

export enum EMatchBehaviorScoreVariance {
  k_EMatchBehaviorScoreVariance_Invalid = 0,
  k_EMatchBehaviorScoreVariance_Low = 1,
  k_EMatchBehaviorScoreVariance_Medium = 2,
  k_EMatchBehaviorScoreVariance_High = 3,
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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
