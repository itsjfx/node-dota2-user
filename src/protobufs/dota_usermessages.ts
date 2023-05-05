/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  CDOTAMsgCoachHUDPing,
  CDOTAMsgDismissAllStatPopups,
  CDOTAMsgItemAlert,
  CDOTAMsgLocationPing,
  CDOTAMsgMapLine,
  CDOTAMsgSendStatPopup,
  CDOTAMsgWorldLine,
  EDOTAVersusScenePlayerBehavior,
  VersusSceneChatWheel,
  VersusScenePlayActivity,
  VersusScenePlaybackRate,
} from "./dota_commonmessages";
import { CMsgDOTACombatLogEntry } from "./dota_shared_enums";
import { CEntityMsg, CMsgVector, CMsgVector2D } from "./networkbasetypes";

export enum EDotaUserMessages {
  DOTA_UM_AddUnitToSelection = 464,
  DOTA_UM_AIDebugLine = 465,
  DOTA_UM_ChatEvent = 466,
  DOTA_UM_CombatHeroPositions = 467,
  DOTA_UM_CombatLogData = 468,
  DOTA_UM_CombatLogBulkData = 470,
  DOTA_UM_CreateLinearProjectile = 471,
  DOTA_UM_DestroyLinearProjectile = 472,
  DOTA_UM_DodgeTrackingProjectiles = 473,
  DOTA_UM_GlobalLightColor = 474,
  DOTA_UM_GlobalLightDirection = 475,
  DOTA_UM_InvalidCommand = 476,
  DOTA_UM_LocationPing = 477,
  DOTA_UM_MapLine = 478,
  DOTA_UM_MiniKillCamInfo = 479,
  DOTA_UM_MinimapDebugPoint = 480,
  DOTA_UM_MinimapEvent = 481,
  DOTA_UM_NevermoreRequiem = 482,
  DOTA_UM_OverheadEvent = 483,
  DOTA_UM_SetNextAutobuyItem = 484,
  DOTA_UM_SharedCooldown = 485,
  DOTA_UM_SpectatorPlayerClick = 486,
  DOTA_UM_TutorialTipInfo = 487,
  DOTA_UM_UnitEvent = 488,
  DOTA_UM_ParticleManager = 489,
  DOTA_UM_BotChat = 490,
  DOTA_UM_HudError = 491,
  DOTA_UM_ItemPurchased = 492,
  DOTA_UM_Ping = 493,
  DOTA_UM_ItemFound = 494,
  DOTA_UM_CharacterSpeakConcept = 495,
  DOTA_UM_SwapVerify = 496,
  DOTA_UM_WorldLine = 497,
  DOTA_UM_TournamentDrop = 498,
  DOTA_UM_ItemAlert = 499,
  DOTA_UM_HalloweenDrops = 500,
  DOTA_UM_ChatWheel = 501,
  DOTA_UM_ReceivedXmasGift = 502,
  DOTA_UM_UpdateSharedContent = 503,
  DOTA_UM_TutorialRequestExp = 504,
  DOTA_UM_TutorialPingMinimap = 505,
  DOTA_UM_GamerulesStateChanged = 506,
  DOTA_UM_ShowSurvey = 507,
  DOTA_UM_TutorialFade = 508,
  DOTA_UM_AddQuestLogEntry = 509,
  DOTA_UM_SendStatPopup = 510,
  DOTA_UM_TutorialFinish = 511,
  DOTA_UM_SendRoshanPopup = 512,
  DOTA_UM_SendGenericToolTip = 513,
  DOTA_UM_SendFinalGold = 514,
  DOTA_UM_CustomMsg = 515,
  DOTA_UM_CoachHUDPing = 516,
  DOTA_UM_ClientLoadGridNav = 517,
  DOTA_UM_TE_Projectile = 518,
  DOTA_UM_TE_ProjectileLoc = 519,
  DOTA_UM_TE_DotaBloodImpact = 520,
  DOTA_UM_TE_UnitAnimation = 521,
  DOTA_UM_TE_UnitAnimationEnd = 522,
  DOTA_UM_AbilityPing = 523,
  DOTA_UM_ShowGenericPopup = 524,
  DOTA_UM_VoteStart = 525,
  DOTA_UM_VoteUpdate = 526,
  DOTA_UM_VoteEnd = 527,
  DOTA_UM_BoosterState = 528,
  DOTA_UM_WillPurchaseAlert = 529,
  DOTA_UM_TutorialMinimapPosition = 530,
  DOTA_UM_PlayerMMR = 531,
  DOTA_UM_AbilitySteal = 532,
  DOTA_UM_CourierKilledAlert = 533,
  DOTA_UM_EnemyItemAlert = 534,
  DOTA_UM_StatsMatchDetails = 535,
  DOTA_UM_MiniTaunt = 536,
  DOTA_UM_BuyBackStateAlert = 537,
  DOTA_UM_SpeechBubble = 538,
  DOTA_UM_CustomHeaderMessage = 539,
  DOTA_UM_QuickBuyAlert = 540,
  DOTA_UM_StatsHeroDetails = 541,
  DOTA_UM_PredictionResult = 542,
  DOTA_UM_ModifierAlert = 543,
  DOTA_UM_HPManaAlert = 544,
  DOTA_UM_GlyphAlert = 545,
  DOTA_UM_BeastChat = 546,
  DOTA_UM_SpectatorPlayerUnitOrders = 547,
  DOTA_UM_CustomHudElement_Create = 548,
  DOTA_UM_CustomHudElement_Modify = 549,
  DOTA_UM_CustomHudElement_Destroy = 550,
  DOTA_UM_CompendiumState = 551,
  DOTA_UM_ProjectionAbility = 552,
  DOTA_UM_ProjectionEvent = 553,
  DOTA_UM_CombatLogDataHLTV = 554,
  DOTA_UM_XPAlert = 555,
  DOTA_UM_UpdateQuestProgress = 556,
  DOTA_UM_MatchMetadata = 557,
  DOTA_UM_MatchDetails = 558,
  DOTA_UM_QuestStatus = 559,
  DOTA_UM_SuggestHeroPick = 560,
  DOTA_UM_SuggestHeroRole = 561,
  DOTA_UM_KillcamDamageTaken = 562,
  DOTA_UM_SelectPenaltyGold = 563,
  DOTA_UM_RollDiceResult = 564,
  DOTA_UM_FlipCoinResult = 565,
  DOTA_UM_RequestItemSuggestions = 566,
  DOTA_UM_TeamCaptainChanged = 567,
  DOTA_UM_SendRoshanSpectatorPhase = 568,
  DOTA_UM_ChatWheelCooldown = 569,
  DOTA_UM_DismissAllStatPopups = 570,
  DOTA_UM_TE_DestroyProjectile = 571,
  DOTA_UM_HeroRelicProgress = 572,
  DOTA_UM_AbilityDraftRequestAbility = 573,
  DOTA_UM_ItemSold = 574,
  DOTA_UM_DamageReport = 575,
  DOTA_UM_SalutePlayer = 576,
  DOTA_UM_TipAlert = 577,
  DOTA_UM_ReplaceQueryUnit = 578,
  DOTA_UM_EmptyTeleportAlert = 579,
  DOTA_UM_MarsArenaOfBloodAttack = 580,
  DOTA_UM_ESArcanaCombo = 581,
  DOTA_UM_ESArcanaComboSummary = 582,
  DOTA_UM_HighFiveLeftHanging = 583,
  DOTA_UM_HighFiveCompleted = 584,
  DOTA_UM_ShovelUnearth = 585,
  DOTA_EM_InvokerSpellCast = 586,
  DOTA_UM_RadarAlert = 587,
  DOTA_UM_AllStarEvent = 588,
  DOTA_UM_TalentTreeAlert = 589,
  DOTA_UM_QueuedOrderRemoved = 590,
  DOTA_UM_DebugChallenge = 591,
  DOTA_UM_OMArcanaCombo = 592,
  DOTA_UM_FoundNeutralItem = 593,
  DOTA_UM_OutpostCaptured = 594,
  DOTA_UM_OutpostGrantedXP = 595,
  DOTA_UM_MoveCameraToUnit = 596,
  DOTA_UM_PauseMinigameData = 597,
  DOTA_UM_VersusScene_PlayerBehavior = 598,
  DOTA_UM_QoP_ArcanaSummary = 600,
  DOTA_UM_HotPotato_Created = 601,
  DOTA_UM_HotPotato_Exploded = 602,
  DOTA_UM_WK_Arcana_Progress = 603,
  DOTA_UM_GuildChallenge_Progress = 604,
  DOTA_UM_WRArcanaProgress = 605,
  DOTA_UM_WRArcanaSummary = 606,
  DOTA_UM_EmptyItemSlotAlert = 607,
  DOTA_UM_AghsStatusAlert = 608,
  DOTA_UM_PingConfirmation = 609,
  DOTA_UM_MutedPlayers = 610,
  DOTA_UM_ContextualTip = 611,
  DOTA_UM_ChatMessage = 612,
  DOTA_UM_NeutralCampAlert = 613,
  DOTA_UM_RockPaperScissorsStarted = 614,
  DOTA_UM_RockPaperScissorsFinished = 615,
  DOTA_UM_DuelOpponentKilled = 616,
  DOTA_UM_DuelAccepted = 617,
  DOTA_UM_DuelRequested = 618,
  DOTA_UM_MuertaReleaseEvent_AssignedTargetKilled = 619,
  DOTA_UM_PlayerDraftSuggestPick = 620,
  DOTA_UM_PlayerDraftPick = 621,
}

export enum dotaChatMessage {
  CHAT_MESSAGE_INVALID = -1,
  CHAT_MESSAGE_HERO_KILL = 0,
  CHAT_MESSAGE_HERO_DENY = 1,
  CHAT_MESSAGE_BARRACKS_KILL = 2,
  CHAT_MESSAGE_TOWER_KILL = 3,
  CHAT_MESSAGE_TOWER_DENY = 4,
  CHAT_MESSAGE_FIRSTBLOOD = 5,
  CHAT_MESSAGE_STREAK_KILL = 6,
  CHAT_MESSAGE_BUYBACK = 7,
  CHAT_MESSAGE_AEGIS = 8,
  CHAT_MESSAGE_ROSHAN_KILL = 9,
  CHAT_MESSAGE_COURIER_LOST = 10,
  CHAT_MESSAGE_COURIER_RESPAWNED = 11,
  CHAT_MESSAGE_GLYPH_USED = 12,
  CHAT_MESSAGE_ITEM_PURCHASE = 13,
  CHAT_MESSAGE_CONNECT = 14,
  CHAT_MESSAGE_DISCONNECT = 15,
  CHAT_MESSAGE_DISCONNECT_WAIT_FOR_RECONNECT = 16,
  CHAT_MESSAGE_DISCONNECT_TIME_REMAINING = 17,
  CHAT_MESSAGE_DISCONNECT_TIME_REMAINING_PLURAL = 18,
  CHAT_MESSAGE_RECONNECT = 19,
  CHAT_MESSAGE_PLAYER_LEFT = 20,
  CHAT_MESSAGE_SAFE_TO_LEAVE = 21,
  CHAT_MESSAGE_RUNE_PICKUP = 22,
  CHAT_MESSAGE_RUNE_BOTTLE = 23,
  CHAT_MESSAGE_RUNE_DENY = 114,
  CHAT_MESSAGE_INTHEBAG = 24,
  CHAT_MESSAGE_SECRETSHOP = 25,
  CHAT_MESSAGE_ITEM_AUTOPURCHASED = 26,
  CHAT_MESSAGE_ITEMS_COMBINED = 27,
  CHAT_MESSAGE_SUPER_CREEPS = 28,
  CHAT_MESSAGE_CANT_USE_ACTION_ITEM = 29,
  CHAT_MESSAGE_CANTPAUSE = 31,
  CHAT_MESSAGE_NOPAUSESLEFT = 32,
  CHAT_MESSAGE_CANTPAUSEYET = 33,
  CHAT_MESSAGE_PAUSED = 34,
  CHAT_MESSAGE_UNPAUSE_COUNTDOWN = 35,
  CHAT_MESSAGE_UNPAUSED = 36,
  CHAT_MESSAGE_AUTO_UNPAUSED = 37,
  CHAT_MESSAGE_YOUPAUSED = 38,
  CHAT_MESSAGE_CANTUNPAUSETEAM = 39,
  CHAT_MESSAGE_VOICE_TEXT_BANNED = 41,
  CHAT_MESSAGE_SPECTATORS_WATCHING_THIS_GAME = 42,
  CHAT_MESSAGE_REPORT_REMINDER = 43,
  CHAT_MESSAGE_ECON_ITEM = 44,
  CHAT_MESSAGE_TAUNT = 45,
  CHAT_MESSAGE_RANDOM = 46,
  CHAT_MESSAGE_RD_TURN = 47,
  CHAT_MESSAGE_DROP_RATE_BONUS = 49,
  CHAT_MESSAGE_NO_BATTLE_POINTS = 50,
  CHAT_MESSAGE_DENIED_AEGIS = 51,
  CHAT_MESSAGE_INFORMATIONAL = 52,
  CHAT_MESSAGE_AEGIS_STOLEN = 53,
  CHAT_MESSAGE_ROSHAN_CANDY = 54,
  CHAT_MESSAGE_ITEM_GIFTED = 55,
  CHAT_MESSAGE_HERO_KILL_WITH_GREEVIL = 56,
  CHAT_MESSAGE_HOLDOUT_TOWER_DESTROYED = 57,
  CHAT_MESSAGE_HOLDOUT_WALL_DESTROYED = 58,
  CHAT_MESSAGE_HOLDOUT_WALL_FINISHED = 59,
  CHAT_MESSAGE_PLAYER_LEFT_LIMITED_HERO = 62,
  CHAT_MESSAGE_ABANDON_LIMITED_HERO_EXPLANATION = 63,
  CHAT_MESSAGE_DISCONNECT_LIMITED_HERO = 64,
  CHAT_MESSAGE_LOW_PRIORITY_COMPLETED_EXPLANATION = 65,
  CHAT_MESSAGE_RECRUITMENT_DROP_RATE_BONUS = 66,
  CHAT_MESSAGE_FROSTIVUS_SHINING_BOOSTER_ACTIVE = 67,
  CHAT_MESSAGE_PLAYER_LEFT_AFK = 73,
  CHAT_MESSAGE_PLAYER_LEFT_DISCONNECTED_TOO_LONG = 74,
  CHAT_MESSAGE_PLAYER_ABANDONED = 75,
  CHAT_MESSAGE_PLAYER_ABANDONED_AFK = 76,
  CHAT_MESSAGE_PLAYER_ABANDONED_DISCONNECTED_TOO_LONG = 77,
  CHAT_MESSAGE_WILL_NOT_BE_SCORED = 78,
  CHAT_MESSAGE_WILL_NOT_BE_SCORED_RANKED = 79,
  CHAT_MESSAGE_WILL_NOT_BE_SCORED_NETWORK = 80,
  CHAT_MESSAGE_WILL_NOT_BE_SCORED_NETWORK_RANKED = 81,
  CHAT_MESSAGE_CAN_QUIT_WITHOUT_ABANDON = 82,
  CHAT_MESSAGE_RANKED_GAME_STILL_SCORED_LEAVERS_GET_LOSS = 83,
  CHAT_MESSAGE_ABANDON_RANKED_BEFORE_FIRST_BLOOD_PARTY = 84,
  CHAT_MESSAGE_COMPENDIUM_LEVEL = 85,
  CHAT_MESSAGE_VICTORY_PREDICTION_STREAK = 86,
  CHAT_MESSAGE_ASSASSIN_ANNOUNCE = 87,
  CHAT_MESSAGE_ASSASSIN_SUCCESS = 88,
  CHAT_MESSAGE_ASSASSIN_DENIED = 89,
  CHAT_MESSAGE_VICTORY_PREDICTION_SINGLE_USER_CONFIRM = 90,
  CHAT_MESSAGE_EFFIGY_KILL = 91,
  CHAT_MESSAGE_VOICE_TEXT_BANNED_OVERFLOW = 92,
  CHAT_MESSAGE_YEAR_BEAST_KILLED = 93,
  CHAT_MESSAGE_PAUSE_COUNTDOWN = 94,
  CHAT_MESSAGE_COINS_WAGERED = 95,
  CHAT_MESSAGE_HERO_NOMINATED_BAN = 96,
  CHAT_MESSAGE_HERO_BANNED = 97,
  CHAT_MESSAGE_HERO_BAN_COUNT = 98,
  CHAT_MESSAGE_RIVER_PAINTED = 99,
  CHAT_MESSAGE_SCAN_USED = 100,
  CHAT_MESSAGE_SHRINE_KILLED = 101,
  CHAT_MESSAGE_WAGER_TOKEN_SPENT = 102,
  CHAT_MESSAGE_RANK_WAGER = 103,
  CHAT_MESSAGE_NEW_PLAYER_REMINDER = 104,
  CHAT_MESSAGE_OBSERVER_WARD_KILLED = 105,
  CHAT_MESSAGE_SENTRY_WARD_KILLED = 106,
  CHAT_MESSAGE_ITEM_PLACED_IN_NEUTRAL_STASH = 107,
  CHAT_MESSAGE_HERO_CHOICE_INVALID = 108,
  CHAT_MESSAGE_BOUNTY = 109,
  CHAT_MESSAGE_ABILITY_DRAFT_START = 110,
  CHAT_MESSAGE_HERO_FOUND_CANDY = 111,
  CHAT_MESSAGE_ABILITY_DRAFT_RANDOMED = 112,
  CHAT_MESSAGE_PRIVATE_COACH_CONNECTED = 113,
  CHAT_MESSAGE_CANT_PAUSE_TOO_EARLY = 115,
  CHAT_MESSAGE_HERO_KILL_WITH_PENGUIN = 116,
}

export enum dotaNoBattlePointsReasons {
  NO_BATTLE_POINTS_WRONG_LOBBY_TYPE = 1,
  NO_BATTLE_POINTS_PRACTICE_BOTS = 2,
  NO_BATTLE_POINTS_CHEATS_ENABLED = 3,
  NO_BATTLE_POINTS_LOW_PRIORITY = 4,
}

export enum dotaChatInformational {
  INFO_COOP_BATTLE_POINTS_RULES = 1,
  INFO_FROSTIVUS_ABANDON_REMINDER = 2,
  INFO_RANKED_REMINDER = 3,
  INFO_COOP_LOW_PRIORITY_PASSIVE_REMINDER = 4,
  INFO_CUSTOM_GAME_PENALTY_REMINDER = 5,
}

export enum dotaAbilityPingType {
  ABILITY_PING_READY = 1,
  ABILITY_PING_MANA = 2,
  ABILITY_PING_COOLDOWN = 3,
  ABILITY_PING_ENEMY = 4,
  ABILITY_PING_UNLEARNED = 5,
  ABILITY_PING_INBACKPACK = 6,
  ABILITY_PING_INSTASH = 7,
  ABILITY_PING_ONCOURIER = 8,
  ABILITY_PING_ALLY = 9,
  ABILITY_PING_LEARN_READY = 10,
  ABILITY_PING_WILL_LEARN = 11,
  ABILITY_PING_FUTURE_LEARN = 12,
  ABILITY_PING_NEUTRAL_OFFER = 13,
  ABILITY_PING_NEUTRAL_REQUEST = 14,
  ABILITY_PING_NEUTRAL_EQUIP = 15,
  ABILITY_PING_INCOURIERBACKPACK = 16,
}

export enum dotaReplayStateEvent {
  DOTA_REPLAY_STATE_EVENT_GAME_START = 1,
  DOTA_REPLAY_STATE_EVENT_STARTING_HORN = 2,
  DOTA_REPLAY_STATE_EVENT_FIRST_BLOOD = 3,
  DOTA_REPLAY_STATE_EVENT_SHOWCASE = 4,
  DOTA_REPLAY_STATE_EVENT_POST_GAME = 5,
  DOTA_REPLAY_STATE_EVENT_WAIT_FOR_MAP = 6,
}

export enum EDotaEntityMessages {
  DOTA_UNIT_SPEECH = 0,
  DOTA_UNIT_SPEECH_MUTE = 1,
  DOTA_UNIT_ADD_GESTURE = 2,
  DOTA_UNIT_REMOVE_GESTURE = 3,
  DOTA_UNIT_REMOVE_ALL_GESTURES = 4,
  DOTA_UNIT_FADE_GESTURE = 6,
  DOTA_UNIT_SPEECH_CLIENTSIDE_RULES = 7,
}

export enum dotaOverheadAlert {
  OVERHEAD_ALERT_GOLD = 0,
  OVERHEAD_ALERT_DENY = 1,
  OVERHEAD_ALERT_CRITICAL = 2,
  OVERHEAD_ALERT_XP = 3,
  OVERHEAD_ALERT_BONUS_SPELL_DAMAGE = 4,
  OVERHEAD_ALERT_MISS = 5,
  OVERHEAD_ALERT_DAMAGE = 6,
  OVERHEAD_ALERT_EVADE = 7,
  OVERHEAD_ALERT_BLOCK = 8,
  OVERHEAD_ALERT_BONUS_POISON_DAMAGE = 9,
  OVERHEAD_ALERT_HEAL = 10,
  OVERHEAD_ALERT_MANA_ADD = 11,
  OVERHEAD_ALERT_MANA_LOSS = 12,
  OVERHEAD_ALERT_LAST_HIT_EARLY = 13,
  OVERHEAD_ALERT_LAST_HIT_CLOSE = 14,
  OVERHEAD_ALERT_LAST_HIT_MISS = 15,
  OVERHEAD_ALERT_MAGICAL_BLOCK = 16,
  OVERHEAD_ALERT_INCOMING_DAMAGE = 17,
  OVERHEAD_ALERT_OUTGOING_DAMAGE = 18,
  OVERHEAD_ALERT_DISABLE_RESIST = 19,
  OVERHEAD_ALERT_DEATH = 20,
  OVERHEAD_ALERT_BLOCKED = 21,
  OVERHEAD_ALERT_ITEM_RECEIVED = 22,
  OVERHEAD_ALERT_SHARD = 23,
  OVERHEAD_ALERT_DEADLY_BLOW = 24,
}

export enum dotaRoshanPhase {
  k_SRSP_ROSHAN_ALIVE = 0,
  k_SRSP_ROSHAN_BASE_TIMER = 1,
  k_SRSP_ROSHAN_VISIBLE_TIMER = 2,
}

export enum dotaPositionCategory {
  DOTA_POSITION_NONE = 0,
  DOTA_POSITION_BOTTOM_LANE = 1,
  DOTA_POSITION_MID_LANE = 2,
  DOTA_POSITION_TOP_LANE = 3,
  DOTA_POSITION_RADIANT_JUNGLE = 4,
  DOTA_POSITION_DIRE_JUNGLE = 5,
  DOTA_POSITION_RADIANT_ANCIENTS = 6,
  DOTA_POSITION_DIRE_ANCIENTS = 7,
  DOTA_POSITION_RADIANT_SECRET_SHOP = 8,
  DOTA_POSITION_DIRE_SECRET_SHOP = 9,
  DOTA_POSITION_RIVER = 10,
  DOTA_POSITION_ROSHAN_PIT = 11,
  DOTA_POSITION_RADIANT_BASE = 12,
  DOTA_POSITION_DIRE_BASE = 13,
  DOTA_POSITION_FOUNTAIN = 14,
  DOTA_POSITION_OTHER = 15,
}

export enum dotaAbilityTargetType {
  DOTA_ABILITY_TARGET_NONE = 0,
  DOTA_ABILITY_TARGET_SELF = 1,
  DOTA_ABILITY_TARGET_ALLY_HERO = 2,
  DOTA_ABILITY_TARGET_ALLY_CREEP = 3,
  DOTA_ABILITY_TARGET_ENEMY_HERO = 4,
  DOTA_ABILITY_TARGET_ENEMY_CREEP = 5,
}

export enum EHeroStatType {
  k_EHeroStatType_None = 0,
  k_EHeroStatType_AxeTotalDamage = 2000,
  k_EHeroStatType_BattleHungerDamage = 2001,
  k_EHeroStatType_CounterHelixDamage = 2002,
  k_EHeroStatType_CullingBladeDamage = 2003,
  k_EHeroStatType_BerserkersCallCastCount = 2004,
  k_EHeroStatType_BerserkersCallHeroesHitAverage = 2005,
  k_EHeroStatType_BerserkersCallOtherUnitsHit = 2006,
  k_EHeroStatType_BerserkersCallHeroAttacksTaken = 2007,
  k_EHeroStatType_BerserkersCallOtherAttacksTaken = 2008,
  k_EHeroStatType_BattleHungerCastCount = 2009,
  k_EHeroStatType_BattleHungerPotentialDuration = 2010,
  k_EHeroStatType_BattleHungerAverageDuration = 2011,
  k_EHeroStatType_CounterHelixProcCount = 2012,
  k_EHeroStatType_CounterHelixHeroProcCount = 2013,
  k_EHeroStatType_CounterHelixHeroesHitAverage = 2014,
  k_EHeroStatType_CounterHelixOtherUnitsHitCount = 2015,
  k_EHeroStatType_CullingBladeCastCount = 2016,
  k_EHeroStatType_CullingBladeKillCount = 2017,
  k_EHeroStatType_CullingBladeAverageHealthCulled = 2018,
  k_EHeroStatType_CullingBladeAverageDamageAvailable = 2019,
  k_EHeroStatType_CullingBladeHeroBuffAverage = 2020,
}

export enum EPlayerVoiceListenState {
  kPVLS_None = 0,
  kPVLS_DeniedChatBanned = 1,
  kPVLS_DeniedPartner = 2,
  kPVLS_DeniedHLTVTalkerNotSpectator = 3,
  kPVLS_DeniedHLTVNoTalkerPlayerID = 4,
  kPVLS_DeniedHLTVTalkerNotBroadcaster = 5,
  kPVLS_DeniedTeamSpectator = 6,
  kPVLS_DeniedStudent = 8,
  kPVLS_DeniedPrivateCoach = 9,
  kPVLS_Denied = 64,
  kPVLS_AllowHLTVTalkerIsBroadcaster = 65,
  kPVLS_AllowCoBroadcaster = 66,
  kPVLS_AllowAllChat = 67,
  kPVLS_AllowStudentToCoach = 68,
  kPVLS_AllowFellowStudent = 69,
  kPVLS_AllowTalkerIsCoach = 70,
  kPVLS_AllowCoachHearTeam = 71,
  kPVLS_AllowSameTeam = 72,
  kPVLS_AllowShowcase = 73,
  kPVLS_AllowPrivateCoach = 74,
}

export enum EProjectionEvent {
  ePE_FirstBlood = 0,
  ePE_Killstreak_godlike = 1,
}

export interface CDOTAUserMsgAIDebugLine {
  message: string;
}

export interface CDOTAUserMsgPing {
  ping: number;
  loss: number;
}

export interface CDOTAUserMsgSwapVerify {
  playerId: number;
}

export interface CDOTAUserMsgChatEvent {
  type: dotaChatMessage;
  value: number;
  playerid1: number;
  playerid2: number;
  playerid3: number;
  playerid4: number;
  playerid5: number;
  playerid6: number;
  value2: number;
  value3: number;
}

export interface CDOTAUserMsgBotChat {
  playerId: number;
  message: string;
  target: string;
  teamOnly: boolean;
}

export interface CDOTAUserMsgCombatHeroPositions {
  index: number;
  time: number;
  worldPos: CMsgVector2D | undefined;
  health: number;
}

export interface CDOTAUserMsgCombatLogBulkData {
  combatEntries: CMsgDOTACombatLogEntry[];
  timestamp: number;
  duration: number;
  playerId: number;
  requestTime: number;
}

export interface CDOTAUserMsgProjectileParticleCPData {
  controlPoint: number;
  vector: CMsgVector | undefined;
}

export interface CDOTAUserMsgMiniKillCamInfo {
  attackers: CDOTAUserMsgMiniKillCamInfo_Attacker[];
}

export interface CDOTAUserMsgMiniKillCamInfo_Attacker {
  attacker: number;
  totalDamage: number;
  abilities: CDOTAUserMsgMiniKillCamInfo_Attacker_Ability[];
  attackerName: string;
}

export interface CDOTAUserMsgMiniKillCamInfo_Attacker_Ability {
  abilityId: number;
  damage: number;
}

export interface CDOTAUserMsgGlobalLightColor {
  color: number;
  duration: number;
}

export interface CDOTAUserMsgGlobalLightDirection {
  direction: CMsgVector | undefined;
  duration: number;
}

export interface CDOTAUserMsgLocationPing {
  playerId: number;
  locationPing: CDOTAMsgLocationPing | undefined;
}

export interface CDOTAUserMsgPingConfirmation {
  playerIdOfOriginalPinger: number;
  entityIndex: number;
  iconType: number;
  location: CMsgVector | undefined;
}

export interface CDOTAUserMsgItemAlert {
  playerId: number;
  itemAlert: CDOTAMsgItemAlert | undefined;
}

export interface CDOTAUserMsgEnemyItemAlert {
  playerId: number;
  targetPlayerId: number;
  itemAbilityId: number;
  runeType: number;
  entityId: number;
  itemLevel: number;
  primaryCharges: number;
  secondaryCharges: number;
}

export interface CDOTAUserMsgModifierAlert {
  playerId: number;
  className: string;
  stackCount: number;
  isDebuff: boolean;
  targetEntindex: number;
  secondsRemaining: number;
}

export interface CDOTAUserMsgHPManaAlert {
  playerId: number;
  targetEntindex: number;
  showRawValues: boolean;
}

export interface CDOTAUserMsgNeutralCampAlert {
  playerId: number;
  spawnerEntindex: number;
  unitEntindex: number;
  stackCount: number;
  campType: number;
  stackRequest: boolean;
  stackIntention: boolean;
}

export interface CDOTAUserMsgGlyphAlert {
  playerId: number;
  negative: boolean;
}

export interface CDOTAUserMsgRadarAlert {
  playerId: number;
  negative: boolean;
}

export interface CDOTAUserMsgWillPurchaseAlert {
  itemAbilityId: number;
  playerId: number;
  goldRemaining: number;
  suggestionPlayerId: number;
}

export interface CDOTAUserMsgEmptyTeleportAlert {
  sourcePlayerId: number;
  targetPlayerId: number;
  cooldownSeconds: number;
}

export interface CDOTAUserMsgMarsArenaOfBloodAttack {
  sourceEhandle: number;
  targetEhandle: number;
  warriorIndex: number;
}

export interface CDOTAEntityMsgInvokerSpellCast {
  entityMsg: CEntityMsg | undefined;
  castActivity: number;
}

export interface CDOTAUserMsgBuyBackStateAlert {
  playerId: number;
}

export interface CDOTAUserMsgQuickBuyAlert {
  playerId: number;
  itemAbilityId: number;
  goldCost: number;
  itemCooldownSeconds: number;
  showBuyback: boolean;
}

export interface CDOTAUserMsgCourierKilledAlert {
  team: number;
  goldValue: number;
  entityHandle: number;
  timestamp: number;
  lostItems: CDOTAUserMsgCourierKilledAlert_LostItem[];
  killerPlayerId: number;
  owningPlayerId: number;
}

export interface CDOTAUserMsgCourierKilledAlert_LostItem {
  itemAbilityId: number;
  quantity: number;
}

export interface CDOTAUserMsgMinimapEvent {
  eventType: number;
  entityHandle: number;
  x: number;
  y: number;
  duration: number;
  targetEntityHandle: number;
}

export interface CDOTAUserMsgMapLine {
  playerId: number;
  mapline: CDOTAMsgMapLine | undefined;
}

export interface CDOTAUserMsgMinimapDebugPoint {
  location: CMsgVector | undefined;
  color: number;
  size: number;
  duration: number;
  index: number;
}

export interface CDOTAUserMsgCreateLinearProjectile {
  origin: CMsgVector | undefined;
  velocity: CMsgVector2D | undefined;
  entindex: number;
  particleIndex: string;
  handle: number;
  acceleration: CMsgVector2D | undefined;
  maxSpeed: number;
  fowRadius: number;
  stickyFowReveal: boolean;
  distance: number;
  colorgemcolor: number;
  particleCpData: CDOTAUserMsgProjectileParticleCPData[];
}

export interface CDOTAUserMsgDestroyLinearProjectile {
  handle: number;
}

export interface CDOTAUserMsgDodgeTrackingProjectiles {
  entindex: number;
  attacksOnly: boolean;
}

export interface CDOTAUserMsgSpectatorPlayerClick {
  entindex: number;
  orderType: number;
  targetIndex: number;
}

export interface CDOTAUserMsgSpectatorPlayerUnitOrders {
  entindex: number;
  orderType: number;
  units: number[];
  targetIndex: number;
  abilityId: number;
  position: CMsgVector | undefined;
  queue: boolean;
  sequenceNumber: number;
  flags: number;
}

export interface CDOTAUserMsgNevermoreRequiem {
  entityHandle: number;
  lines: number;
  origin: CMsgVector | undefined;
  reverse: boolean;
}

export interface CDOTAUserMsgInvalidCommand {
  message: string;
  sequenceNumber: number;
}

export interface CDOTAUserMsgHudError {
  orderId: number;
  sequenceNumber: number;
}

export interface CDOTAUserMsgSharedCooldown {
  entindex: number;
  name: string;
  cooldown: number;
  nameIndex: number;
}

export interface CDOTAUserMsgSetNextAutobuyItem {
  name: string;
}

export interface CDOTAUserMsgHalloweenDrops {
  itemDefs: number[];
  playerIds: number[];
  prizeList: number;
}

export interface CDOTAUserMsgPredictionResult {
  accountId: number;
  matchId: string;
  correct: boolean;
  predictions: CDOTAUserMsgPredictionResult_Prediction[];
}

export interface CDOTAUserMsgPredictionResult_Prediction {
  itemDef: number;
  numCorrect: number;
  numFails: number;
  result: CDOTAUserMsgPredictionResult_Prediction_EResult;
  grantedItemDefs: number[];
}

export enum CDOTAUserMsgPredictionResult_Prediction_EResult {
  k_eResult_ItemGranted = 1,
  k_eResult_Destroyed = 2,
}

export interface CDOTAResponseQuerySerialized {
  facts: CDOTAResponseQuerySerialized_Fact[];
}

export interface CDOTAResponseQuerySerialized_Fact {
  key: number;
  valtype: CDOTAResponseQuerySerialized_Fact_ValueType;
  valNumeric: number;
  valString: string;
  valStringtableIndex: number;
  valIntNumeric: number;
}

export enum CDOTAResponseQuerySerialized_Fact_ValueType {
  NUMERIC = 1,
  STRING = 2,
  STRINGTABLE_INDEX = 3,
  INT_NUMERIC = 4,
}

export interface CDOTASpeechMatchOnClient {
  speechConcept: number;
  recipientType: number;
  responsequery: CDOTAResponseQuerySerialized | undefined;
  randomseed: number;
}

export interface CDOTAUserMsgUnitEvent {
  msgType: EDotaEntityMessages;
  entityIndex: number;
  speech: CDOTAUserMsgUnitEvent_Speech | undefined;
  speechMute: CDOTAUserMsgUnitEvent_SpeechMute | undefined;
  addGesture: CDOTAUserMsgUnitEvent_AddGesture | undefined;
  removeGesture: CDOTAUserMsgUnitEvent_RemoveGesture | undefined;
  bloodImpact: CDOTAUserMsgUnitEvent_BloodImpact | undefined;
  fadeGesture: CDOTAUserMsgUnitEvent_FadeGesture | undefined;
  speechMatchOnClient: CDOTASpeechMatchOnClient | undefined;
}

export interface CDOTAUserMsgUnitEvent_Interval {
  start: number;
  range: number;
}

export interface CDOTAUserMsgUnitEvent_Speech {
  speechConcept: number;
  response: string;
  recipientType: number;
  muteable: boolean;
  predelay: CDOTAUserMsgUnitEvent_Interval | undefined;
  flags: number;
}

export interface CDOTAUserMsgUnitEvent_SpeechMute {
  delay: number;
}

export interface CDOTAUserMsgUnitEvent_AddGesture {
  activity: number;
  slot: number;
  fadeIn: number;
  fadeOut: number;
  playbackRate: number;
  sequenceVariant: number;
}

export interface CDOTAUserMsgUnitEvent_RemoveGesture {
  activity: number;
}

export interface CDOTAUserMsgUnitEvent_BloodImpact {
  scale: number;
  xNormal: number;
  yNormal: number;
}

export interface CDOTAUserMsgUnitEvent_FadeGesture {
  activity: number;
}

export interface CDOTAUserMsgItemPurchased {
  itemAbilityId: number;
}

export interface CDOTAUserMsgItemSold {
  itemAbilityId: number;
}

export interface CDOTAUserMsgItemFound {
  player: number;
  quality: number;
  rarity: number;
  method: number;
  itemdef: number;
}

export interface CDOTAUserMsgOverheadEvent {
  messageType: dotaOverheadAlert;
  value: number;
  targetPlayerEntindex: number;
  targetEntindex: number;
  sourcePlayerEntindex: number;
}

export interface CDOTAUserMsgTutorialTipInfo {
  name: string;
  progress: number;
}

export interface CDOTAUserMsgTutorialFinish {
  heading: string;
  emblem: string;
  body: string;
  success: boolean;
}

export interface CDOTAUserMsgTutorialMinimapPosition {
}

export interface CDOTAUserMsgSendGenericToolTip {
  title: string;
  text: string;
  entindex: number;
  close: boolean;
}

export interface CDOTAUserMsgWorldLine {
  playerId: number;
  worldline: CDOTAMsgWorldLine | undefined;
}

export interface CDOTAUserMsgChatWheel {
  chatMessageId: number;
  playerId: number;
  accountId: number;
  paramHeroId: number;
  emoticonId: number;
}

export interface CDOTAUserMsgReceivedXmasGift {
  playerId: number;
  itemName: string;
  inventorySlot: number;
}

export interface CDOTAUserMsgShowSurvey {
  surveyId: number;
  matchId: string;
  responseStyle: string;
  teammateHeroId: number;
  teammateName: string;
  teammateAccountId: number;
}

export interface CDOTAUserMsgUpdateSharedContent {
  slotType: number;
}

export interface CDOTAUserMsgTutorialRequestExp {
}

export interface CDOTAUserMsgTutorialFade {
  tgtAlpha: number;
}

export interface CDOTAUserMsgTutorialPingMinimap {
  playerId: number;
  posX: number;
  posY: number;
  posZ: number;
  entityIndex: number;
}

export interface CDOTAUserMsgGamerulesStateChanged {
  state: number;
}

export interface CDOTAUserMsgAddQuestLogEntry {
  npcName: string;
  npcDialog: string;
}

export interface CDOTAUserMsgSendStatPopup {
  playerId: number;
  statpopup: CDOTAMsgSendStatPopup | undefined;
}

export interface CDOTAUserMsgDismissAllStatPopups {
  dismissallmsg: CDOTAMsgDismissAllStatPopups | undefined;
}

export interface CDOTAUserMsgSendRoshanSpectatorPhase {
  phase: dotaRoshanPhase;
  phaseStartTime: number;
  phaseLength: number;
}

export interface CDOTAUserMsgSendRoshanPopup {
  reclaimed: boolean;
  gametime: number;
}

export interface CDOTAUserMsgSendFinalGold {
  reliableGold: number[];
  unreliableGold: number[];
}

export interface CDOTAUserMsgCustomMsg {
  message: string;
  playerId: number;
  value: number;
}

export interface CDOTAUserMsgCoachHUDPing {
  playerId: number;
  hudPing: CDOTAMsgCoachHUDPing | undefined;
}

export interface CDOTAUserMsgClientLoadGridNav {
}

export interface CDOTAUserMsgTEProjectile {
  source: number;
  target: number;
  moveSpeed: number;
  sourceAttachment: number;
  particleSystemHandle: string;
  dodgeable: boolean;
  isAttack: boolean;
  expireTime: number;
  maximpacttime: number;
  colorgemcolor: number;
  launchTick: number;
  handle: number;
  targetLoc: CMsgVector | undefined;
  particleCpData: CDOTAUserMsgProjectileParticleCPData[];
  additionalParticleSystemHandle: string;
}

export interface CDOTAUserMsgTEProjectileLoc {
  sourceLoc: CMsgVector | undefined;
  target: number;
  moveSpeed: number;
  particleSystemHandle: string;
  dodgeable: boolean;
  isAttack: boolean;
  expireTime: number;
  targetLoc: CMsgVector | undefined;
  colorgemcolor: number;
  launchTick: number;
  handle: number;
  source: number;
  sourceAttachment: number;
  particleCpData: CDOTAUserMsgProjectileParticleCPData[];
  additionalParticleSystemHandle: string;
}

export interface CDOTAUserMsgTEDestroyProjectile {
  handle: number;
}

export interface CDOTAUserMsgTEDotaBloodImpact {
  entity: number;
  scale: number;
  xnormal: number;
  ynormal: number;
}

export interface CDOTAUserMsgAbilityPing {
  playerId: number;
  abilityId: number;
  type: dotaAbilityPingType;
  cooldownSeconds: number;
  level: number;
  passive: boolean;
  manaNeeded: number;
  entityId: number;
  primaryCharges: number;
  secondaryCharges: number;
  ctrlHeld: boolean;
  reclaimTime: number;
}

export interface CDOTAUserMsgTEUnitAnimation {
  entity: number;
  sequenceVariant: number;
  playbackrate: number;
  castpoint: number;
  type: number;
  activity: number;
  lagCompensationTime: number;
}

export interface CDOTAUserMsgTEUnitAnimationEnd {
  entity: number;
  snap: boolean;
}

export interface CDOTAUserMsgShowGenericPopup {
  header: string;
  body: string;
  param1: string;
  param2: string;
  tintScreen: boolean;
  showNoOtherDialogs: boolean;
}

export interface CDOTAUserMsgVoteStart {
  title: string;
  duration: number;
  choiceCount: number;
  choices: string[];
}

export interface CDOTAUserMsgVoteUpdate {
  choiceCounts: number[];
}

export interface CDOTAUserMsgVoteEnd {
  selectedChoice: number;
}

export interface CDOTAUserMsgBoosterStatePlayer {
  playerId: number;
  bonus: number;
  eventBonus: number;
  bonusItemId: number;
  eventBonusItemId: number;
}

export interface CDOTAUserMsgBoosterState {
  boostedPlayers: CDOTAUserMsgBoosterStatePlayer[];
}

export interface CDOTAUserMsgPlayerMMR {
  mmr: number[];
}

export interface CDOTAUserMsgAbilitySteal {
  playerId: number;
  abilityId: number;
  abilityLevel: number;
}

export interface CDOTAUserMsgStatsHeroLookup {
  playerId: number;
  heroId: number;
  heroName: string;
  persona: string;
}

export interface CDOTAUserMsgStatsHeroPositionInfo {
  averagePosition: number;
  positionDetails: CDOTAUserMsgStatsHeroPositionInfo_PositionPair[];
}

export interface CDOTAUserMsgStatsHeroPositionInfo_PositionPair {
  positionCategory: dotaPositionCategory;
  positionCount: number;
}

export interface CDOTAUserMsgStatsHeroMinuteDetails {
  lastHits: number;
  heroKills: number;
  heroDamage: number;
  towerDamage: number;
  positionInfo: CDOTAUserMsgStatsHeroPositionInfo | undefined;
  totalXp: number;
  netWorth: number;
  harvestedCreepGold: number;
  claimedFarm: number;
  wardsPlaced: number;
  runesCollected: number;
  tpsUsed: number;
  manaSpent: number[];
  damageAbsorbed: number[];
  damageDone: number[];
}

export interface CDOTAUserMsgStatsTeamMinuteDetails {
  playerStats: CDOTAUserMsgStatsHeroMinuteDetails[];
  towerKills: number;
  barrackKills: number;
  availableLaneCreepGold: number;
  balanceKillValue: number;
  balanceTowerValue: number;
  balanceBarracksValue: number;
  balanceGoldValue: number;
  balanceXpValue: number;
  lanePerformance: CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance[];
}

export interface CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance {
  locationCategory: number;
  statType: number;
  value: number;
}

export interface CDOTAUserMsgStatsPlayerKillShare {
  playerId: number;
  killSharePercent: number;
  playerLocX: number;
  playerLocY: number;
  healthPercent: number;
  manaPercent: number;
}

export interface CDOTAUserMsgStatsKillDetails {
  victimId: number;
  killShares: CDOTAUserMsgStatsPlayerKillShare[];
  damageToKill: number;
  effectiveHealth: number;
  deathTime: number;
  killerId: number;
}

export interface CDOTAUserMsgStatsMatchDetails {
  heroLookup: CDOTAUserMsgStatsHeroLookup[];
  radiantStats: CDOTAUserMsgStatsTeamMinuteDetails[];
  direStats: CDOTAUserMsgStatsTeamMinuteDetails[];
  radiantKills: CDOTAUserMsgStatsKillDetails[];
  direKills: CDOTAUserMsgStatsKillDetails[];
  fightDetails: CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails[];
}

export interface CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails {
  participants: number[];
  deaths: number[];
  goldDelta: number;
  xpDelta: number;
}

export interface CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails {
  startTime: number;
  endTime: number;
  radiantFightDetails: CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails | undefined;
  direFightDetails: CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails | undefined;
}

export interface CDOTAUserMsgMiniTaunt {
  tauntingPlayerId: number;
}

export interface CDOTAUserMsgSpeechBubble {
  destroyAll: boolean;
}

export interface CDOTAUserMsgCustomHeaderMessage {
  playerId: number;
  duration: number;
  message: string;
  value: number;
}

export interface CMsgHeroAbilityStat {
  statType: EHeroStatType;
  intValue: number;
  floatValue: number;
}

export interface CMsgCombatAnalyzerPlayerStat {
  accountId: number;
  heroAbilityStats: CMsgHeroAbilityStat[];
}

export interface CMsgCombatAnalyzerStats {
  matchId: string;
  playerStats: CMsgCombatAnalyzerPlayerStat[];
}

export interface CDOTAUserMsgBeastChat {
  team: number;
  format: string;
  message: string;
  target: string;
}

export interface CDOTAUserMsgCustomHudElementCreate {
  elementId: string;
  layoutFilename: string;
  data: Buffer;
}

export interface CDOTAUserMsgCustomHudElementModify {
  elementId: string;
  modifyVisible: boolean;
  data: Buffer;
}

export interface CDOTAUserMsgCustomHudElementDestroy {
  elementId: string;
}

export interface CDOTAUserMsgCompendiumStatePlayer {
  playerId: number;
  level: number;
}

export interface CDOTAUserMsgCompendiumState {
  compendiumPlayers: CDOTAUserMsgCompendiumStatePlayer[];
}

export interface CDOTAUserMsgProjectionAbility {
  abilityId: number;
  casterEntIndex: number;
  casterTeam: number;
  channelEnd: boolean;
  origin: CMsgVector | undefined;
  trackCasterOnly: boolean;
  endTime: number;
  victimEntIndex: number;
}

export interface CDOTAUserMsgProjectionEvent {
  eventId: EProjectionEvent;
  team: number;
}

export interface CDOTAUserMsgXPAlert {
  playerId: number;
  targetEntindex: number;
}

export interface CDOTAUserMsgTalentTreeAlert {
  playerId: number;
  targetEntindex: number;
  abilityId: number;
  slot: number;
  learned: boolean;
}

export interface CDOTAUserMsgUpdateQuestProgress {
}

export interface CDOTAUserMsgQuestStatus {
  playerId: number;
  questId: number;
  challengeId: number;
  progress: number;
  goal: number;
  query: number;
  failGametime: number;
  itemAbilityId: number;
}

export interface CDOTAUserMsgSuggestHeroPick {
  playerId: number;
  heroId: number;
  ban: boolean;
}

export interface CDOTAUserMsgSuggestHeroRole {
  playerId: number;
  heroRole: string;
}

export interface CDOTAUserMsgKillcamDamageTaken {
  playerId: number;
  damageTaken: number;
  itemType: number;
  itemAbilityId: number;
  heroName: string;
  damageColor: string;
}

export interface CDOTAUserMsgSelectPenaltyGold {
  playerId: number;
  cost: number;
}

export interface CDOTAUserMsgRollDiceResult {
  playerId: number;
  channelType: number;
  rollMin: number;
  rollMax: number;
  result: number;
}

export interface CDOTAUserMsgFlipCoinResult {
  playerId: number;
  channelType: number;
  result: boolean;
}

export interface CDOTAUserMessageRequestItemSuggestions {
  playerId: number;
}

export interface CDOTAUserMessageTeamCaptainChanged {
  team: number;
  captainPlayerId: number;
}

export interface CDOTAUserMsgChatWheelCooldown {
  messageId: number;
  cooldownRemaining: number;
}

export interface CDOTAUserMsgHeroRelicProgress {
  heroRelicType: number;
  value: number;
  ehandle: number;
  eventId: number;
  valueDisplay: number;
}

export interface CDOTAUserMsgAbilityDraftRequestAbility {
  playerId: number;
  requestedAbilityId: number;
  ctrlIsDown: boolean;
}

export interface CDOTAUserMsgDamageReport {
  playerId: number;
  targetHeroId: number;
  sourceHeroId: number;
  damageAmount: number;
  broadcast: boolean;
}

export interface CDOTAUserMsgSalutePlayer {
  sourcePlayerId: number;
  targetPlayerId: number;
  tipAmount: number;
  eventId: number;
  customTipStyle: string;
  numRecentTips: number;
}

export interface CDOTAUserMsgTipAlert {
  playerId: number;
  tipText: string;
}

export interface CDOTAUserMsgReplaceQueryUnit {
  playerId: number;
  sourceEntindex: number;
  targetEntindex: number;
}

export interface CDOTAUserMsgESArcanaCombo {
  ehandle: number;
  comboCount: number;
  arcanaLevel: number;
}

export interface CDOTAUserMsgESArcanaComboSummary {
  ehandle: number;
  comboCount: number;
  damageAmount: number;
}

export interface CDOTAUserMsgOMArcanaCombo {
  ehandle: number;
  multicastAmount: number;
  arcanaLevel: number;
  multicastChance: number;
}

export interface CDOTAUserMsgHighFiveCompleted {
  playerId1: number;
  playerId2: number;
  specialHighFive: boolean;
  specialEntindex: number;
}

export interface CDOTAUserMsgHighFiveLeftHanging {
  playerId: number;
}

export interface CDOTAUserMsgShovelUnearth {
  playerId: number;
  allChat: boolean;
  locstring: string;
  quantity: number;
}

export interface CDOTAUserMsgAllStarEvent {
  sourcePlayerId: number;
  targetPlayerId: number;
  pointAmount: number;
  eventId: number;
  playerScores: CDOTAUserMsgAllStarEvent_PlayerScore[];
}

export interface CDOTAUserMsgAllStarEvent_PlayerScore {
  playerId: number;
  scoreSansKda: number;
}

export interface CDOTAUserMsgQueuedOrderRemoved {
  unitOrderSequence: number[];
}

export interface CDOTAUserMsgDebugChallenge {
  challengeType: number;
  challengeQueryId: number;
  eventId: number;
  instanceId: number;
  challengeVar0: number;
  challengeVar1: number;
  challengeMaxRank: number;
}

export interface CDOTAUserMsgFoundNeutralItem {
  playerId: number;
  itemAbilityId: number;
  itemTier: number;
  tierItemCount: number;
}

export interface CDOTAUserMsgOutpostCaptured {
  outpostEntindex: number;
  teamId: number;
}

export interface CDOTAUserMsgOutpostGrantedXP {
  teamId: number;
  xpAmount: number;
}

export interface CDOTAUserMsgMoveCameraToUnit {
  unitEhandle: number;
}

export interface CDOTAUserMsgPauseMinigameData {
  dataBits: CDOTAUserMsgPauseMinigameData_DataBit[];
}

export interface CDOTAUserMsgPauseMinigameData_DataBit {
  index: number;
  data: number;
  dataExtra: string;
}

export interface CDOTAUserMsgVersusScenePlayerBehavior {
  playerId: number;
  behavior: EDOTAVersusScenePlayerBehavior;
  playActivity: VersusScenePlayActivity | undefined;
  chatWheel: VersusSceneChatWheel | undefined;
  playbackRate: VersusScenePlaybackRate | undefined;
}

export interface CDOTAUserMsgQoPArcanaSummary {
  ehandle: number;
  arcanaLevel: number;
  playersHit: number;
  playersKilled: number;
}

export interface CDOTAUserMsgHotPotatoCreated {
  playerId1: number;
  playerId2: number;
}

export interface CDOTAUserMsgHotPotatoExploded {
  playerId: number;
}

export interface CDOTAUserMsgWKArcanaProgress {
  ehandle: number;
  arcanaLevel: number;
  heroId: number;
}

export interface CDOTAUserMsgGuildChallengeProgress {
  playerProgress: CDOTAUserMsgGuildChallengeProgress_PlayerProgress[];
  guildId: number;
  challengeInstanceId: number;
  challengeParameter: number;
  challengeType: CDOTAUserMsgGuildChallengeProgress_EChallengeType;
  challengeProgressAtStart: number;
  complete: boolean;
}

export enum CDOTAUserMsgGuildChallengeProgress_EChallengeType {
  k_EChallengeType_Invalid = 0,
  k_EChallengeType_Cooperative = 1,
  k_EChallengeType_Contract = 2,
}

export interface CDOTAUserMsgGuildChallengeProgress_PlayerProgress {
  playerId: number;
  progress: number;
}

export interface CDOTAUserMsgWRArcanaProgress {
  ehandle: number;
  targetEhandle: number;
  arrowsLanded: number;
  damageDealt: number;
  targetHp: number;
  targetMaxHp: number;
  arcanaLevel: number;
}

export interface CDOTAUserMsgWRArcanaSummary {
  ehandle: number;
  targetEhandle: number;
  arrowsLanded: number;
  damageDealt: number;
  targetHp: number;
  targetMaxHp: number;
  arcanaLevel: number;
  success: boolean;
}

export interface CDOTAUserMsgEmptyItemSlotAlert {
  sourcePlayerId: number;
  targetPlayerId: number;
  slotIndex: number;
  cooldownSeconds: number;
}

export interface CDOTAUserMsgAghsStatusAlert {
  sourcePlayerId: number;
  targetPlayerId: number;
  targetEntindex: number;
  alertType: number;
  hasScepter: boolean;
  hasShard: boolean;
}

export interface CDOTAUserMsgMutedPlayers {
  textMutedPlayerIds: number[];
  voiceMutedPlayerIds: number[];
}

export interface CDOTAUserMsgContextualTip {
  tipId: number;
  referencedAbilities: string[];
  referencedUnits: string[];
  panoramaClasses: string[];
  forceAnnotation: boolean;
  variant: number;
  intParam: number;
  intParam2: number;
  floatParam: number;
  floatParam2: number;
  stringParam: string;
  stringParam2: string;
  tipTextOverride: string;
  tipAnnotationOverride: string;
  panoramaSnippet: string;
}

export interface CDOTAUserMsgChatMessage {
  sourcePlayerId: number;
  channelType: number;
  messageText: string;
}

export interface CDOTAUserMsgRockPaperScissorsStarted {
  playerIdSource: number;
  playerIdTarget: number;
}

export interface CDOTAUserMsgRockPaperScissorsFinished {
  playerId1: number;
  playerId2: number;
  player1Choice: number;
  player2Choice: number;
}

export interface CDOTAUserMsgDuelOpponentKilled {
  playerIdWinner: number;
  playerIdLoser: number;
}

export interface CDOTAUserMsgDuelAccepted {
  playerId1: number;
  playerId2: number;
}

export interface CDOTAUserMsgDuelRequested {
  playerIdRequestor: number;
}

export interface CDOTAUserMsgMuertaReleaseEventAssignedTargetKilled {
  playerIdKiller: number;
  playerIdTarget: number;
  points: number;
  pointsTotal: number;
  lastHit: boolean;
}

export interface CDOTAUserMsgPlayerDraftSuggestPick {
  playerId: number;
  suggestionPlayerId: number;
}

export interface CDOTAUserMsgPlayerDraftPick {
  playerIdCaptain: number;
  playerIdTarget: number;
  team: number;
}

function createBaseCDOTAUserMsgAIDebugLine(): CDOTAUserMsgAIDebugLine {
  return { message: "" };
}

export const CDOTAUserMsgAIDebugLine = {
  encode(message: CDOTAUserMsgAIDebugLine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgAIDebugLine {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgAIDebugLine();
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

function createBaseCDOTAUserMsgPing(): CDOTAUserMsgPing {
  return { ping: 0, loss: 0 };
}

export const CDOTAUserMsgPing = {
  encode(message: CDOTAUserMsgPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ping !== 0) {
      writer.uint32(16).uint32(message.ping);
    }
    if (message.loss !== 0) {
      writer.uint32(24).uint32(message.loss);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.ping = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.loss = reader.uint32();
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

function createBaseCDOTAUserMsgSwapVerify(): CDOTAUserMsgSwapVerify {
  return { playerId: 0 };
}

export const CDOTAUserMsgSwapVerify = {
  encode(message: CDOTAUserMsgSwapVerify, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSwapVerify {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSwapVerify();
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

function createBaseCDOTAUserMsgChatEvent(): CDOTAUserMsgChatEvent {
  return {
    type: 0,
    value: 0,
    playerid1: 0,
    playerid2: 0,
    playerid3: 0,
    playerid4: 0,
    playerid5: 0,
    playerid6: 0,
    value2: 0,
    value3: 0,
  };
}

export const CDOTAUserMsgChatEvent = {
  encode(message: CDOTAUserMsgChatEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    if (message.playerid1 !== 0) {
      writer.uint32(24).sint32(message.playerid1);
    }
    if (message.playerid2 !== 0) {
      writer.uint32(32).sint32(message.playerid2);
    }
    if (message.playerid3 !== 0) {
      writer.uint32(40).sint32(message.playerid3);
    }
    if (message.playerid4 !== 0) {
      writer.uint32(48).sint32(message.playerid4);
    }
    if (message.playerid5 !== 0) {
      writer.uint32(56).sint32(message.playerid5);
    }
    if (message.playerid6 !== 0) {
      writer.uint32(64).sint32(message.playerid6);
    }
    if (message.value2 !== 0) {
      writer.uint32(72).uint32(message.value2);
    }
    if (message.value3 !== 0) {
      writer.uint32(80).uint32(message.value3);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgChatEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgChatEvent();
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

          message.value = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.playerid1 = reader.sint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.playerid2 = reader.sint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.playerid3 = reader.sint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.playerid4 = reader.sint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.playerid5 = reader.sint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.playerid6 = reader.sint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.value2 = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.value3 = reader.uint32();
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

function createBaseCDOTAUserMsgBotChat(): CDOTAUserMsgBotChat {
  return { playerId: 0, message: "", target: "", teamOnly: false };
}

export const CDOTAUserMsgBotChat = {
  encode(message: CDOTAUserMsgBotChat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.target !== "") {
      writer.uint32(34).string(message.target);
    }
    if (message.teamOnly === true) {
      writer.uint32(40).bool(message.teamOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgBotChat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgBotChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.message = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.target = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.teamOnly = reader.bool();
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

function createBaseCDOTAUserMsgCombatHeroPositions(): CDOTAUserMsgCombatHeroPositions {
  return { index: 0, time: 0, worldPos: undefined, health: 0 };
}

export const CDOTAUserMsgCombatHeroPositions = {
  encode(message: CDOTAUserMsgCombatHeroPositions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.time !== 0) {
      writer.uint32(16).int32(message.time);
    }
    if (message.worldPos !== undefined) {
      CMsgVector2D.encode(message.worldPos, writer.uint32(26).fork()).ldelim();
    }
    if (message.health !== 0) {
      writer.uint32(32).int32(message.health);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCombatHeroPositions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCombatHeroPositions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.time = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.worldPos = CMsgVector2D.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.health = reader.int32();
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

function createBaseCDOTAUserMsgCombatLogBulkData(): CDOTAUserMsgCombatLogBulkData {
  return { combatEntries: [], timestamp: 0, duration: 0, playerId: 0, requestTime: 0 };
}

export const CDOTAUserMsgCombatLogBulkData = {
  encode(message: CDOTAUserMsgCombatLogBulkData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.combatEntries) {
      CMsgDOTACombatLogEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.timestamp !== 0) {
      writer.uint32(21).float(message.timestamp);
    }
    if (message.duration !== 0) {
      writer.uint32(29).float(message.duration);
    }
    if (message.playerId !== 0) {
      writer.uint32(32).int32(message.playerId);
    }
    if (message.requestTime !== 0) {
      writer.uint32(45).float(message.requestTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCombatLogBulkData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCombatLogBulkData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.combatEntries.push(CMsgDOTACombatLogEntry.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.timestamp = reader.float();
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

          message.playerId = reader.int32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.requestTime = reader.float();
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

function createBaseCDOTAUserMsgProjectileParticleCPData(): CDOTAUserMsgProjectileParticleCPData {
  return { controlPoint: 0, vector: undefined };
}

export const CDOTAUserMsgProjectileParticleCPData = {
  encode(message: CDOTAUserMsgProjectileParticleCPData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.controlPoint !== 0) {
      writer.uint32(8).int32(message.controlPoint);
    }
    if (message.vector !== undefined) {
      CMsgVector.encode(message.vector, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgProjectileParticleCPData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgProjectileParticleCPData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.controlPoint = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.vector = CMsgVector.decode(reader, reader.uint32());
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

function createBaseCDOTAUserMsgMiniKillCamInfo(): CDOTAUserMsgMiniKillCamInfo {
  return { attackers: [] };
}

export const CDOTAUserMsgMiniKillCamInfo = {
  encode(message: CDOTAUserMsgMiniKillCamInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attackers) {
      CDOTAUserMsgMiniKillCamInfo_Attacker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMiniKillCamInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMiniKillCamInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.attackers.push(CDOTAUserMsgMiniKillCamInfo_Attacker.decode(reader, reader.uint32()));
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

function createBaseCDOTAUserMsgMiniKillCamInfo_Attacker(): CDOTAUserMsgMiniKillCamInfo_Attacker {
  return { attacker: 0, totalDamage: 0, abilities: [], attackerName: "" };
}

export const CDOTAUserMsgMiniKillCamInfo_Attacker = {
  encode(message: CDOTAUserMsgMiniKillCamInfo_Attacker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attacker !== 0) {
      writer.uint32(8).uint32(message.attacker);
    }
    if (message.totalDamage !== 0) {
      writer.uint32(16).int32(message.totalDamage);
    }
    for (const v of message.abilities) {
      CDOTAUserMsgMiniKillCamInfo_Attacker_Ability.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.attackerName !== "") {
      writer.uint32(34).string(message.attackerName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMiniKillCamInfo_Attacker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMiniKillCamInfo_Attacker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.attacker = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.totalDamage = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.abilities.push(CDOTAUserMsgMiniKillCamInfo_Attacker_Ability.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.attackerName = reader.string();
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

function createBaseCDOTAUserMsgMiniKillCamInfo_Attacker_Ability(): CDOTAUserMsgMiniKillCamInfo_Attacker_Ability {
  return { abilityId: 0, damage: 0 };
}

export const CDOTAUserMsgMiniKillCamInfo_Attacker_Ability = {
  encode(message: CDOTAUserMsgMiniKillCamInfo_Attacker_Ability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abilityId !== 0) {
      writer.uint32(8).int32(message.abilityId);
    }
    if (message.damage !== 0) {
      writer.uint32(16).int32(message.damage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMiniKillCamInfo_Attacker_Ability {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMiniKillCamInfo_Attacker_Ability();
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

          message.damage = reader.int32();
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

function createBaseCDOTAUserMsgGlobalLightColor(): CDOTAUserMsgGlobalLightColor {
  return { color: 0, duration: 0 };
}

export const CDOTAUserMsgGlobalLightColor = {
  encode(message: CDOTAUserMsgGlobalLightColor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.color !== 0) {
      writer.uint32(8).uint32(message.color);
    }
    if (message.duration !== 0) {
      writer.uint32(21).float(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgGlobalLightColor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgGlobalLightColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.color = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.duration = reader.float();
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

function createBaseCDOTAUserMsgGlobalLightDirection(): CDOTAUserMsgGlobalLightDirection {
  return { direction: undefined, duration: 0 };
}

export const CDOTAUserMsgGlobalLightDirection = {
  encode(message: CDOTAUserMsgGlobalLightDirection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.direction !== undefined) {
      CMsgVector.encode(message.direction, writer.uint32(10).fork()).ldelim();
    }
    if (message.duration !== 0) {
      writer.uint32(21).float(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgGlobalLightDirection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgGlobalLightDirection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.direction = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.duration = reader.float();
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

function createBaseCDOTAUserMsgLocationPing(): CDOTAUserMsgLocationPing {
  return { playerId: 0, locationPing: undefined };
}

export const CDOTAUserMsgLocationPing = {
  encode(message: CDOTAUserMsgLocationPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.locationPing !== undefined) {
      CDOTAMsgLocationPing.encode(message.locationPing, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgLocationPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgLocationPing();
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
          if (tag != 18) {
            break;
          }

          message.locationPing = CDOTAMsgLocationPing.decode(reader, reader.uint32());
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

function createBaseCDOTAUserMsgPingConfirmation(): CDOTAUserMsgPingConfirmation {
  return { playerIdOfOriginalPinger: 0, entityIndex: 0, iconType: 0, location: undefined };
}

export const CDOTAUserMsgPingConfirmation = {
  encode(message: CDOTAUserMsgPingConfirmation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerIdOfOriginalPinger !== 0) {
      writer.uint32(8).int32(message.playerIdOfOriginalPinger);
    }
    if (message.entityIndex !== 0) {
      writer.uint32(16).uint32(message.entityIndex);
    }
    if (message.iconType !== 0) {
      writer.uint32(24).uint32(message.iconType);
    }
    if (message.location !== undefined) {
      CMsgVector.encode(message.location, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPingConfirmation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPingConfirmation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerIdOfOriginalPinger = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.entityIndex = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.iconType = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.location = CMsgVector.decode(reader, reader.uint32());
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

function createBaseCDOTAUserMsgItemAlert(): CDOTAUserMsgItemAlert {
  return { playerId: 0, itemAlert: undefined };
}

export const CDOTAUserMsgItemAlert = {
  encode(message: CDOTAUserMsgItemAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.itemAlert !== undefined) {
      CDOTAMsgItemAlert.encode(message.itemAlert, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgItemAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgItemAlert();
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
          if (tag != 18) {
            break;
          }

          message.itemAlert = CDOTAMsgItemAlert.decode(reader, reader.uint32());
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

function createBaseCDOTAUserMsgEnemyItemAlert(): CDOTAUserMsgEnemyItemAlert {
  return {
    playerId: 0,
    targetPlayerId: 0,
    itemAbilityId: 0,
    runeType: 0,
    entityId: 0,
    itemLevel: 0,
    primaryCharges: 0,
    secondaryCharges: 0,
  };
}

export const CDOTAUserMsgEnemyItemAlert = {
  encode(message: CDOTAUserMsgEnemyItemAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.targetPlayerId !== 0) {
      writer.uint32(16).int32(message.targetPlayerId);
    }
    if (message.itemAbilityId !== 0) {
      writer.uint32(24).int32(message.itemAbilityId);
    }
    if (message.runeType !== 0) {
      writer.uint32(32).int32(message.runeType);
    }
    if (message.entityId !== 0) {
      writer.uint32(40).int32(message.entityId);
    }
    if (message.itemLevel !== 0) {
      writer.uint32(48).int32(message.itemLevel);
    }
    if (message.primaryCharges !== 0) {
      writer.uint32(56).int32(message.primaryCharges);
    }
    if (message.secondaryCharges !== 0) {
      writer.uint32(64).int32(message.secondaryCharges);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgEnemyItemAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgEnemyItemAlert();
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

          message.targetPlayerId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemAbilityId = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.runeType = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.entityId = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.itemLevel = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.primaryCharges = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.secondaryCharges = reader.int32();
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

function createBaseCDOTAUserMsgModifierAlert(): CDOTAUserMsgModifierAlert {
  return { playerId: 0, className: "", stackCount: 0, isDebuff: false, targetEntindex: 0, secondsRemaining: 0 };
}

export const CDOTAUserMsgModifierAlert = {
  encode(message: CDOTAUserMsgModifierAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.className !== "") {
      writer.uint32(18).string(message.className);
    }
    if (message.stackCount !== 0) {
      writer.uint32(24).uint32(message.stackCount);
    }
    if (message.isDebuff === true) {
      writer.uint32(32).bool(message.isDebuff);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(40).int32(message.targetEntindex);
    }
    if (message.secondsRemaining !== 0) {
      writer.uint32(53).float(message.secondsRemaining);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgModifierAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgModifierAlert();
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
          if (tag != 18) {
            break;
          }

          message.className = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.stackCount = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.isDebuff = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.targetEntindex = reader.int32();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.secondsRemaining = reader.float();
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

function createBaseCDOTAUserMsgHPManaAlert(): CDOTAUserMsgHPManaAlert {
  return { playerId: 0, targetEntindex: 0, showRawValues: false };
}

export const CDOTAUserMsgHPManaAlert = {
  encode(message: CDOTAUserMsgHPManaAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(16).int32(message.targetEntindex);
    }
    if (message.showRawValues === true) {
      writer.uint32(24).bool(message.showRawValues);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgHPManaAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgHPManaAlert();
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

          message.targetEntindex = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.showRawValues = reader.bool();
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

function createBaseCDOTAUserMsgNeutralCampAlert(): CDOTAUserMsgNeutralCampAlert {
  return {
    playerId: 0,
    spawnerEntindex: 0,
    unitEntindex: 0,
    stackCount: 0,
    campType: 0,
    stackRequest: false,
    stackIntention: false,
  };
}

export const CDOTAUserMsgNeutralCampAlert = {
  encode(message: CDOTAUserMsgNeutralCampAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.spawnerEntindex !== 0) {
      writer.uint32(16).int32(message.spawnerEntindex);
    }
    if (message.unitEntindex !== 0) {
      writer.uint32(24).int32(message.unitEntindex);
    }
    if (message.stackCount !== 0) {
      writer.uint32(32).int32(message.stackCount);
    }
    if (message.campType !== 0) {
      writer.uint32(40).int32(message.campType);
    }
    if (message.stackRequest === true) {
      writer.uint32(48).bool(message.stackRequest);
    }
    if (message.stackIntention === true) {
      writer.uint32(56).bool(message.stackIntention);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgNeutralCampAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgNeutralCampAlert();
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

          message.spawnerEntindex = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.unitEntindex = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.stackCount = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.campType = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.stackRequest = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.stackIntention = reader.bool();
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

function createBaseCDOTAUserMsgGlyphAlert(): CDOTAUserMsgGlyphAlert {
  return { playerId: 0, negative: false };
}

export const CDOTAUserMsgGlyphAlert = {
  encode(message: CDOTAUserMsgGlyphAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.negative === true) {
      writer.uint32(16).bool(message.negative);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgGlyphAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgGlyphAlert();
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

          message.negative = reader.bool();
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

function createBaseCDOTAUserMsgRadarAlert(): CDOTAUserMsgRadarAlert {
  return { playerId: 0, negative: false };
}

export const CDOTAUserMsgRadarAlert = {
  encode(message: CDOTAUserMsgRadarAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.negative === true) {
      writer.uint32(16).bool(message.negative);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgRadarAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgRadarAlert();
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

          message.negative = reader.bool();
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

function createBaseCDOTAUserMsgWillPurchaseAlert(): CDOTAUserMsgWillPurchaseAlert {
  return { itemAbilityId: 0, playerId: 0, goldRemaining: 0, suggestionPlayerId: 0 };
}

export const CDOTAUserMsgWillPurchaseAlert = {
  encode(message: CDOTAUserMsgWillPurchaseAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemAbilityId !== 0) {
      writer.uint32(8).int32(message.itemAbilityId);
    }
    if (message.playerId !== 0) {
      writer.uint32(16).int32(message.playerId);
    }
    if (message.goldRemaining !== 0) {
      writer.uint32(24).uint32(message.goldRemaining);
    }
    if (message.suggestionPlayerId !== 0) {
      writer.uint32(32).int32(message.suggestionPlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgWillPurchaseAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgWillPurchaseAlert();
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
          if (tag != 16) {
            break;
          }

          message.playerId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.goldRemaining = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.suggestionPlayerId = reader.int32();
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

function createBaseCDOTAUserMsgEmptyTeleportAlert(): CDOTAUserMsgEmptyTeleportAlert {
  return { sourcePlayerId: 0, targetPlayerId: 0, cooldownSeconds: 0 };
}

export const CDOTAUserMsgEmptyTeleportAlert = {
  encode(message: CDOTAUserMsgEmptyTeleportAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourcePlayerId !== 0) {
      writer.uint32(8).int32(message.sourcePlayerId);
    }
    if (message.targetPlayerId !== 0) {
      writer.uint32(16).int32(message.targetPlayerId);
    }
    if (message.cooldownSeconds !== 0) {
      writer.uint32(24).int32(message.cooldownSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgEmptyTeleportAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgEmptyTeleportAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sourcePlayerId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetPlayerId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.cooldownSeconds = reader.int32();
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

function createBaseCDOTAUserMsgMarsArenaOfBloodAttack(): CDOTAUserMsgMarsArenaOfBloodAttack {
  return { sourceEhandle: 0, targetEhandle: 0, warriorIndex: 0 };
}

export const CDOTAUserMsgMarsArenaOfBloodAttack = {
  encode(message: CDOTAUserMsgMarsArenaOfBloodAttack, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceEhandle !== 0) {
      writer.uint32(8).uint32(message.sourceEhandle);
    }
    if (message.targetEhandle !== 0) {
      writer.uint32(16).uint32(message.targetEhandle);
    }
    if (message.warriorIndex !== 0) {
      writer.uint32(24).int32(message.warriorIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMarsArenaOfBloodAttack {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMarsArenaOfBloodAttack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sourceEhandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetEhandle = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.warriorIndex = reader.int32();
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

function createBaseCDOTAEntityMsgInvokerSpellCast(): CDOTAEntityMsgInvokerSpellCast {
  return { entityMsg: undefined, castActivity: 0 };
}

export const CDOTAEntityMsgInvokerSpellCast = {
  encode(message: CDOTAEntityMsgInvokerSpellCast, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityMsg !== undefined) {
      CEntityMsg.encode(message.entityMsg, writer.uint32(10).fork()).ldelim();
    }
    if (message.castActivity !== 0) {
      writer.uint32(16).int32(message.castActivity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAEntityMsgInvokerSpellCast {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAEntityMsgInvokerSpellCast();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.entityMsg = CEntityMsg.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.castActivity = reader.int32();
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

function createBaseCDOTAUserMsgBuyBackStateAlert(): CDOTAUserMsgBuyBackStateAlert {
  return { playerId: 0 };
}

export const CDOTAUserMsgBuyBackStateAlert = {
  encode(message: CDOTAUserMsgBuyBackStateAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgBuyBackStateAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgBuyBackStateAlert();
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

function createBaseCDOTAUserMsgQuickBuyAlert(): CDOTAUserMsgQuickBuyAlert {
  return { playerId: 0, itemAbilityId: 0, goldCost: 0, itemCooldownSeconds: 0, showBuyback: false };
}

export const CDOTAUserMsgQuickBuyAlert = {
  encode(message: CDOTAUserMsgQuickBuyAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.itemAbilityId !== 0) {
      writer.uint32(16).int32(message.itemAbilityId);
    }
    if (message.goldCost !== 0) {
      writer.uint32(24).int32(message.goldCost);
    }
    if (message.itemCooldownSeconds !== 0) {
      writer.uint32(32).int32(message.itemCooldownSeconds);
    }
    if (message.showBuyback === true) {
      writer.uint32(40).bool(message.showBuyback);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgQuickBuyAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgQuickBuyAlert();
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

          message.itemAbilityId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.goldCost = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.itemCooldownSeconds = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.showBuyback = reader.bool();
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

function createBaseCDOTAUserMsgCourierKilledAlert(): CDOTAUserMsgCourierKilledAlert {
  return { team: 0, goldValue: 0, entityHandle: 0, timestamp: 0, lostItems: [], killerPlayerId: 0, owningPlayerId: 0 };
}

export const CDOTAUserMsgCourierKilledAlert = {
  encode(message: CDOTAUserMsgCourierKilledAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.team !== 0) {
      writer.uint32(8).uint32(message.team);
    }
    if (message.goldValue !== 0) {
      writer.uint32(16).uint32(message.goldValue);
    }
    if (message.entityHandle !== 0) {
      writer.uint32(24).uint32(message.entityHandle);
    }
    if (message.timestamp !== 0) {
      writer.uint32(32).int32(message.timestamp);
    }
    for (const v of message.lostItems) {
      CDOTAUserMsgCourierKilledAlert_LostItem.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.killerPlayerId !== 0) {
      writer.uint32(48).int32(message.killerPlayerId);
    }
    if (message.owningPlayerId !== 0) {
      writer.uint32(56).int32(message.owningPlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCourierKilledAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCourierKilledAlert();
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
          if (tag != 16) {
            break;
          }

          message.goldValue = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.entityHandle = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.timestamp = reader.int32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.lostItems.push(CDOTAUserMsgCourierKilledAlert_LostItem.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.killerPlayerId = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.owningPlayerId = reader.int32();
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

function createBaseCDOTAUserMsgCourierKilledAlert_LostItem(): CDOTAUserMsgCourierKilledAlert_LostItem {
  return { itemAbilityId: 0, quantity: 0 };
}

export const CDOTAUserMsgCourierKilledAlert_LostItem = {
  encode(message: CDOTAUserMsgCourierKilledAlert_LostItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemAbilityId !== 0) {
      writer.uint32(8).int32(message.itemAbilityId);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).uint32(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCourierKilledAlert_LostItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCourierKilledAlert_LostItem();
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
          if (tag != 16) {
            break;
          }

          message.quantity = reader.uint32();
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

function createBaseCDOTAUserMsgMinimapEvent(): CDOTAUserMsgMinimapEvent {
  return { eventType: 0, entityHandle: 0, x: 0, y: 0, duration: 0, targetEntityHandle: 0 };
}

export const CDOTAUserMsgMinimapEvent = {
  encode(message: CDOTAUserMsgMinimapEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventType !== 0) {
      writer.uint32(8).int32(message.eventType);
    }
    if (message.entityHandle !== 0) {
      writer.uint32(16).uint32(message.entityHandle);
    }
    if (message.x !== 0) {
      writer.uint32(24).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(32).int32(message.y);
    }
    if (message.duration !== 0) {
      writer.uint32(40).int32(message.duration);
    }
    if (message.targetEntityHandle !== 0) {
      writer.uint32(48).uint32(message.targetEntityHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMinimapEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMinimapEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventType = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.entityHandle = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.x = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.y = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.duration = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.targetEntityHandle = reader.uint32();
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

function createBaseCDOTAUserMsgMapLine(): CDOTAUserMsgMapLine {
  return { playerId: 0, mapline: undefined };
}

export const CDOTAUserMsgMapLine = {
  encode(message: CDOTAUserMsgMapLine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.mapline !== undefined) {
      CDOTAMsgMapLine.encode(message.mapline, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMapLine {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMapLine();
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
          if (tag != 18) {
            break;
          }

          message.mapline = CDOTAMsgMapLine.decode(reader, reader.uint32());
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

function createBaseCDOTAUserMsgMinimapDebugPoint(): CDOTAUserMsgMinimapDebugPoint {
  return { location: undefined, color: 0, size: 0, duration: 0, index: 0 };
}

export const CDOTAUserMsgMinimapDebugPoint = {
  encode(message: CDOTAUserMsgMinimapDebugPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== undefined) {
      CMsgVector.encode(message.location, writer.uint32(10).fork()).ldelim();
    }
    if (message.color !== 0) {
      writer.uint32(16).uint32(message.color);
    }
    if (message.size !== 0) {
      writer.uint32(24).int32(message.size);
    }
    if (message.duration !== 0) {
      writer.uint32(37).float(message.duration);
    }
    if (message.index !== 0) {
      writer.uint32(40).int32(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMinimapDebugPoint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMinimapDebugPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.location = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.color = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.size = reader.int32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.duration = reader.float();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.index = reader.int32();
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

function createBaseCDOTAUserMsgCreateLinearProjectile(): CDOTAUserMsgCreateLinearProjectile {
  return {
    origin: undefined,
    velocity: undefined,
    entindex: 0,
    particleIndex: "0",
    handle: 0,
    acceleration: undefined,
    maxSpeed: 0,
    fowRadius: 0,
    stickyFowReveal: false,
    distance: 0,
    colorgemcolor: 0,
    particleCpData: [],
  };
}

export const CDOTAUserMsgCreateLinearProjectile = {
  encode(message: CDOTAUserMsgCreateLinearProjectile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.velocity !== undefined) {
      CMsgVector2D.encode(message.velocity, writer.uint32(18).fork()).ldelim();
    }
    if (message.entindex !== 0) {
      writer.uint32(32).int32(message.entindex);
    }
    if (message.particleIndex !== "0") {
      writer.uint32(40).uint64(message.particleIndex);
    }
    if (message.handle !== 0) {
      writer.uint32(48).int32(message.handle);
    }
    if (message.acceleration !== undefined) {
      CMsgVector2D.encode(message.acceleration, writer.uint32(58).fork()).ldelim();
    }
    if (message.maxSpeed !== 0) {
      writer.uint32(69).float(message.maxSpeed);
    }
    if (message.fowRadius !== 0) {
      writer.uint32(77).float(message.fowRadius);
    }
    if (message.stickyFowReveal === true) {
      writer.uint32(80).bool(message.stickyFowReveal);
    }
    if (message.distance !== 0) {
      writer.uint32(93).float(message.distance);
    }
    if (message.colorgemcolor !== 0) {
      writer.uint32(101).fixed32(message.colorgemcolor);
    }
    for (const v of message.particleCpData) {
      CDOTAUserMsgProjectileParticleCPData.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCreateLinearProjectile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCreateLinearProjectile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.origin = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.velocity = CMsgVector2D.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.entindex = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.particleIndex = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.handle = reader.int32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.acceleration = CMsgVector2D.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.maxSpeed = reader.float();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.fowRadius = reader.float();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.stickyFowReveal = reader.bool();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.distance = reader.float();
          continue;
        case 12:
          if (tag != 101) {
            break;
          }

          message.colorgemcolor = reader.fixed32();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.particleCpData.push(CDOTAUserMsgProjectileParticleCPData.decode(reader, reader.uint32()));
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

function createBaseCDOTAUserMsgDestroyLinearProjectile(): CDOTAUserMsgDestroyLinearProjectile {
  return { handle: 0 };
}

export const CDOTAUserMsgDestroyLinearProjectile = {
  encode(message: CDOTAUserMsgDestroyLinearProjectile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handle !== 0) {
      writer.uint32(8).int32(message.handle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgDestroyLinearProjectile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgDestroyLinearProjectile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.handle = reader.int32();
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

function createBaseCDOTAUserMsgDodgeTrackingProjectiles(): CDOTAUserMsgDodgeTrackingProjectiles {
  return { entindex: 0, attacksOnly: false };
}

export const CDOTAUserMsgDodgeTrackingProjectiles = {
  encode(message: CDOTAUserMsgDodgeTrackingProjectiles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entindex !== 0) {
      writer.uint32(8).int32(message.entindex);
    }
    if (message.attacksOnly === true) {
      writer.uint32(16).bool(message.attacksOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgDodgeTrackingProjectiles {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgDodgeTrackingProjectiles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entindex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.attacksOnly = reader.bool();
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

function createBaseCDOTAUserMsgSpectatorPlayerClick(): CDOTAUserMsgSpectatorPlayerClick {
  return { entindex: 0, orderType: 0, targetIndex: 0 };
}

export const CDOTAUserMsgSpectatorPlayerClick = {
  encode(message: CDOTAUserMsgSpectatorPlayerClick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entindex !== 0) {
      writer.uint32(8).int32(message.entindex);
    }
    if (message.orderType !== 0) {
      writer.uint32(16).int32(message.orderType);
    }
    if (message.targetIndex !== 0) {
      writer.uint32(24).int32(message.targetIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSpectatorPlayerClick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSpectatorPlayerClick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entindex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.orderType = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.targetIndex = reader.int32();
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

function createBaseCDOTAUserMsgSpectatorPlayerUnitOrders(): CDOTAUserMsgSpectatorPlayerUnitOrders {
  return {
    entindex: 0,
    orderType: 0,
    units: [],
    targetIndex: 0,
    abilityId: 0,
    position: undefined,
    queue: false,
    sequenceNumber: 0,
    flags: 0,
  };
}

export const CDOTAUserMsgSpectatorPlayerUnitOrders = {
  encode(message: CDOTAUserMsgSpectatorPlayerUnitOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entindex !== 0) {
      writer.uint32(8).int32(message.entindex);
    }
    if (message.orderType !== 0) {
      writer.uint32(16).int32(message.orderType);
    }
    writer.uint32(26).fork();
    for (const v of message.units) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.targetIndex !== 0) {
      writer.uint32(32).int32(message.targetIndex);
    }
    if (message.abilityId !== 0) {
      writer.uint32(40).int32(message.abilityId);
    }
    if (message.position !== undefined) {
      CMsgVector.encode(message.position, writer.uint32(50).fork()).ldelim();
    }
    if (message.queue === true) {
      writer.uint32(56).bool(message.queue);
    }
    if (message.sequenceNumber !== 0) {
      writer.uint32(64).int32(message.sequenceNumber);
    }
    if (message.flags !== 0) {
      writer.uint32(72).uint32(message.flags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSpectatorPlayerUnitOrders {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSpectatorPlayerUnitOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entindex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.orderType = reader.int32();
          continue;
        case 3:
          if (tag == 24) {
            message.units.push(reader.int32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.units.push(reader.int32());
            }

            continue;
          }

          break;
        case 4:
          if (tag != 32) {
            break;
          }

          message.targetIndex = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.abilityId = reader.int32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.position = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.queue = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.sequenceNumber = reader.int32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.flags = reader.uint32();
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

function createBaseCDOTAUserMsgNevermoreRequiem(): CDOTAUserMsgNevermoreRequiem {
  return { entityHandle: 0, lines: 0, origin: undefined, reverse: false };
}

export const CDOTAUserMsgNevermoreRequiem = {
  encode(message: CDOTAUserMsgNevermoreRequiem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityHandle !== 0) {
      writer.uint32(8).uint32(message.entityHandle);
    }
    if (message.lines !== 0) {
      writer.uint32(16).int32(message.lines);
    }
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(26).fork()).ldelim();
    }
    if (message.reverse === true) {
      writer.uint32(32).bool(message.reverse);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgNevermoreRequiem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgNevermoreRequiem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entityHandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.lines = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.origin = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.reverse = reader.bool();
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

function createBaseCDOTAUserMsgInvalidCommand(): CDOTAUserMsgInvalidCommand {
  return { message: "", sequenceNumber: 0 };
}

export const CDOTAUserMsgInvalidCommand = {
  encode(message: CDOTAUserMsgInvalidCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.sequenceNumber !== 0) {
      writer.uint32(16).int32(message.sequenceNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgInvalidCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgInvalidCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.message = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.sequenceNumber = reader.int32();
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

function createBaseCDOTAUserMsgHudError(): CDOTAUserMsgHudError {
  return { orderId: 0, sequenceNumber: 0 };
}

export const CDOTAUserMsgHudError = {
  encode(message: CDOTAUserMsgHudError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== 0) {
      writer.uint32(8).int32(message.orderId);
    }
    if (message.sequenceNumber !== 0) {
      writer.uint32(16).int32(message.sequenceNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgHudError {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgHudError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.orderId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.sequenceNumber = reader.int32();
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

function createBaseCDOTAUserMsgSharedCooldown(): CDOTAUserMsgSharedCooldown {
  return { entindex: 0, name: "", cooldown: 0, nameIndex: 0 };
}

export const CDOTAUserMsgSharedCooldown = {
  encode(message: CDOTAUserMsgSharedCooldown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entindex !== 0) {
      writer.uint32(8).int32(message.entindex);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.cooldown !== 0) {
      writer.uint32(29).float(message.cooldown);
    }
    if (message.nameIndex !== 0) {
      writer.uint32(32).int32(message.nameIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSharedCooldown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSharedCooldown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entindex = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.cooldown = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.nameIndex = reader.int32();
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

function createBaseCDOTAUserMsgSetNextAutobuyItem(): CDOTAUserMsgSetNextAutobuyItem {
  return { name: "" };
}

export const CDOTAUserMsgSetNextAutobuyItem = {
  encode(message: CDOTAUserMsgSetNextAutobuyItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSetNextAutobuyItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSetNextAutobuyItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
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

function createBaseCDOTAUserMsgHalloweenDrops(): CDOTAUserMsgHalloweenDrops {
  return { itemDefs: [], playerIds: [], prizeList: 0 };
}

export const CDOTAUserMsgHalloweenDrops = {
  encode(message: CDOTAUserMsgHalloweenDrops, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.itemDefs) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.playerIds) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.prizeList !== 0) {
      writer.uint32(24).uint32(message.prizeList);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgHalloweenDrops {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgHalloweenDrops();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.itemDefs.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemDefs.push(reader.uint32());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 16) {
            message.playerIds.push(reader.int32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playerIds.push(reader.int32());
            }

            continue;
          }

          break;
        case 3:
          if (tag != 24) {
            break;
          }

          message.prizeList = reader.uint32();
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

function createBaseCDOTAUserMsgPredictionResult(): CDOTAUserMsgPredictionResult {
  return { accountId: 0, matchId: "0", correct: false, predictions: [] };
}

export const CDOTAUserMsgPredictionResult = {
  encode(message: CDOTAUserMsgPredictionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      CDOTAUserMsgPredictionResult_Prediction.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPredictionResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPredictionResult();
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

          message.predictions.push(CDOTAUserMsgPredictionResult_Prediction.decode(reader, reader.uint32()));
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

function createBaseCDOTAUserMsgPredictionResult_Prediction(): CDOTAUserMsgPredictionResult_Prediction {
  return { itemDef: 0, numCorrect: 0, numFails: 0, result: 1, grantedItemDefs: [] };
}

export const CDOTAUserMsgPredictionResult_Prediction = {
  encode(message: CDOTAUserMsgPredictionResult_Prediction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPredictionResult_Prediction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPredictionResult_Prediction();
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
};

function createBaseCDOTAResponseQuerySerialized(): CDOTAResponseQuerySerialized {
  return { facts: [] };
}

export const CDOTAResponseQuerySerialized = {
  encode(message: CDOTAResponseQuerySerialized, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.facts) {
      CDOTAResponseQuerySerialized_Fact.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAResponseQuerySerialized {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAResponseQuerySerialized();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.facts.push(CDOTAResponseQuerySerialized_Fact.decode(reader, reader.uint32()));
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

function createBaseCDOTAResponseQuerySerialized_Fact(): CDOTAResponseQuerySerialized_Fact {
  return { key: 0, valtype: 1, valNumeric: 0, valString: "", valStringtableIndex: 0, valIntNumeric: 0 };
}

export const CDOTAResponseQuerySerialized_Fact = {
  encode(message: CDOTAResponseQuerySerialized_Fact, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.valtype !== 1) {
      writer.uint32(16).int32(message.valtype);
    }
    if (message.valNumeric !== 0) {
      writer.uint32(29).float(message.valNumeric);
    }
    if (message.valString !== "") {
      writer.uint32(34).string(message.valString);
    }
    if (message.valStringtableIndex !== 0) {
      writer.uint32(40).int32(message.valStringtableIndex);
    }
    if (message.valIntNumeric !== 0) {
      writer.uint32(48).sint32(message.valIntNumeric);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAResponseQuerySerialized_Fact {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAResponseQuerySerialized_Fact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.valtype = reader.int32() as any;
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.valNumeric = reader.float();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.valString = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.valStringtableIndex = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.valIntNumeric = reader.sint32();
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

function createBaseCDOTASpeechMatchOnClient(): CDOTASpeechMatchOnClient {
  return { speechConcept: 0, recipientType: 0, responsequery: undefined, randomseed: 0 };
}

export const CDOTASpeechMatchOnClient = {
  encode(message: CDOTASpeechMatchOnClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.speechConcept !== 0) {
      writer.uint32(8).int32(message.speechConcept);
    }
    if (message.recipientType !== 0) {
      writer.uint32(16).int32(message.recipientType);
    }
    if (message.responsequery !== undefined) {
      CDOTAResponseQuerySerialized.encode(message.responsequery, writer.uint32(26).fork()).ldelim();
    }
    if (message.randomseed !== 0) {
      writer.uint32(37).sfixed32(message.randomseed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTASpeechMatchOnClient {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTASpeechMatchOnClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.speechConcept = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.recipientType = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.responsequery = CDOTAResponseQuerySerialized.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.randomseed = reader.sfixed32();
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

function createBaseCDOTAUserMsgUnitEvent(): CDOTAUserMsgUnitEvent {
  return {
    msgType: 0,
    entityIndex: 0,
    speech: undefined,
    speechMute: undefined,
    addGesture: undefined,
    removeGesture: undefined,
    bloodImpact: undefined,
    fadeGesture: undefined,
    speechMatchOnClient: undefined,
  };
}

export const CDOTAUserMsgUnitEvent = {
  encode(message: CDOTAUserMsgUnitEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgType !== 0) {
      writer.uint32(8).int32(message.msgType);
    }
    if (message.entityIndex !== 0) {
      writer.uint32(16).int32(message.entityIndex);
    }
    if (message.speech !== undefined) {
      CDOTAUserMsgUnitEvent_Speech.encode(message.speech, writer.uint32(26).fork()).ldelim();
    }
    if (message.speechMute !== undefined) {
      CDOTAUserMsgUnitEvent_SpeechMute.encode(message.speechMute, writer.uint32(34).fork()).ldelim();
    }
    if (message.addGesture !== undefined) {
      CDOTAUserMsgUnitEvent_AddGesture.encode(message.addGesture, writer.uint32(42).fork()).ldelim();
    }
    if (message.removeGesture !== undefined) {
      CDOTAUserMsgUnitEvent_RemoveGesture.encode(message.removeGesture, writer.uint32(50).fork()).ldelim();
    }
    if (message.bloodImpact !== undefined) {
      CDOTAUserMsgUnitEvent_BloodImpact.encode(message.bloodImpact, writer.uint32(58).fork()).ldelim();
    }
    if (message.fadeGesture !== undefined) {
      CDOTAUserMsgUnitEvent_FadeGesture.encode(message.fadeGesture, writer.uint32(66).fork()).ldelim();
    }
    if (message.speechMatchOnClient !== undefined) {
      CDOTASpeechMatchOnClient.encode(message.speechMatchOnClient, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUnitEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUnitEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.msgType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.entityIndex = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.speech = CDOTAUserMsgUnitEvent_Speech.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.speechMute = CDOTAUserMsgUnitEvent_SpeechMute.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.addGesture = CDOTAUserMsgUnitEvent_AddGesture.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.removeGesture = CDOTAUserMsgUnitEvent_RemoveGesture.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.bloodImpact = CDOTAUserMsgUnitEvent_BloodImpact.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.fadeGesture = CDOTAUserMsgUnitEvent_FadeGesture.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.speechMatchOnClient = CDOTASpeechMatchOnClient.decode(reader, reader.uint32());
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

function createBaseCDOTAUserMsgUnitEvent_Interval(): CDOTAUserMsgUnitEvent_Interval {
  return { start: 0, range: 0 };
}

export const CDOTAUserMsgUnitEvent_Interval = {
  encode(message: CDOTAUserMsgUnitEvent_Interval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(13).float(message.start);
    }
    if (message.range !== 0) {
      writer.uint32(21).float(message.range);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUnitEvent_Interval {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUnitEvent_Interval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.start = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.range = reader.float();
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

function createBaseCDOTAUserMsgUnitEvent_Speech(): CDOTAUserMsgUnitEvent_Speech {
  return { speechConcept: 0, response: "", recipientType: 0, muteable: false, predelay: undefined, flags: 0 };
}

export const CDOTAUserMsgUnitEvent_Speech = {
  encode(message: CDOTAUserMsgUnitEvent_Speech, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.speechConcept !== 0) {
      writer.uint32(8).int32(message.speechConcept);
    }
    if (message.response !== "") {
      writer.uint32(18).string(message.response);
    }
    if (message.recipientType !== 0) {
      writer.uint32(24).int32(message.recipientType);
    }
    if (message.muteable === true) {
      writer.uint32(40).bool(message.muteable);
    }
    if (message.predelay !== undefined) {
      CDOTAUserMsgUnitEvent_Interval.encode(message.predelay, writer.uint32(50).fork()).ldelim();
    }
    if (message.flags !== 0) {
      writer.uint32(56).uint32(message.flags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUnitEvent_Speech {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUnitEvent_Speech();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.speechConcept = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.response = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.recipientType = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.muteable = reader.bool();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.predelay = CDOTAUserMsgUnitEvent_Interval.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.flags = reader.uint32();
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

function createBaseCDOTAUserMsgUnitEvent_SpeechMute(): CDOTAUserMsgUnitEvent_SpeechMute {
  return { delay: 0 };
}

export const CDOTAUserMsgUnitEvent_SpeechMute = {
  encode(message: CDOTAUserMsgUnitEvent_SpeechMute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delay !== 0) {
      writer.uint32(13).float(message.delay);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUnitEvent_SpeechMute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUnitEvent_SpeechMute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.delay = reader.float();
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

function createBaseCDOTAUserMsgUnitEvent_AddGesture(): CDOTAUserMsgUnitEvent_AddGesture {
  return { activity: 0, slot: 0, fadeIn: 0, fadeOut: 0, playbackRate: 0, sequenceVariant: 0 };
}

export const CDOTAUserMsgUnitEvent_AddGesture = {
  encode(message: CDOTAUserMsgUnitEvent_AddGesture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activity !== 0) {
      writer.uint32(8).int32(message.activity);
    }
    if (message.slot !== 0) {
      writer.uint32(16).int32(message.slot);
    }
    if (message.fadeIn !== 0) {
      writer.uint32(29).float(message.fadeIn);
    }
    if (message.fadeOut !== 0) {
      writer.uint32(37).float(message.fadeOut);
    }
    if (message.playbackRate !== 0) {
      writer.uint32(45).float(message.playbackRate);
    }
    if (message.sequenceVariant !== 0) {
      writer.uint32(48).int32(message.sequenceVariant);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUnitEvent_AddGesture {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUnitEvent_AddGesture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.activity = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.slot = reader.int32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.fadeIn = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.fadeOut = reader.float();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.playbackRate = reader.float();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.sequenceVariant = reader.int32();
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

function createBaseCDOTAUserMsgUnitEvent_RemoveGesture(): CDOTAUserMsgUnitEvent_RemoveGesture {
  return { activity: 0 };
}

export const CDOTAUserMsgUnitEvent_RemoveGesture = {
  encode(message: CDOTAUserMsgUnitEvent_RemoveGesture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activity !== 0) {
      writer.uint32(8).int32(message.activity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUnitEvent_RemoveGesture {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUnitEvent_RemoveGesture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.activity = reader.int32();
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

function createBaseCDOTAUserMsgUnitEvent_BloodImpact(): CDOTAUserMsgUnitEvent_BloodImpact {
  return { scale: 0, xNormal: 0, yNormal: 0 };
}

export const CDOTAUserMsgUnitEvent_BloodImpact = {
  encode(message: CDOTAUserMsgUnitEvent_BloodImpact, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scale !== 0) {
      writer.uint32(8).int32(message.scale);
    }
    if (message.xNormal !== 0) {
      writer.uint32(16).int32(message.xNormal);
    }
    if (message.yNormal !== 0) {
      writer.uint32(24).int32(message.yNormal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUnitEvent_BloodImpact {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUnitEvent_BloodImpact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.scale = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.xNormal = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.yNormal = reader.int32();
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

function createBaseCDOTAUserMsgUnitEvent_FadeGesture(): CDOTAUserMsgUnitEvent_FadeGesture {
  return { activity: 0 };
}

export const CDOTAUserMsgUnitEvent_FadeGesture = {
  encode(message: CDOTAUserMsgUnitEvent_FadeGesture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activity !== 0) {
      writer.uint32(8).int32(message.activity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUnitEvent_FadeGesture {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUnitEvent_FadeGesture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.activity = reader.int32();
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

function createBaseCDOTAUserMsgItemPurchased(): CDOTAUserMsgItemPurchased {
  return { itemAbilityId: 0 };
}

export const CDOTAUserMsgItemPurchased = {
  encode(message: CDOTAUserMsgItemPurchased, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemAbilityId !== 0) {
      writer.uint32(8).int32(message.itemAbilityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgItemPurchased {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgItemPurchased();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemAbilityId = reader.int32();
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

function createBaseCDOTAUserMsgItemSold(): CDOTAUserMsgItemSold {
  return { itemAbilityId: 0 };
}

export const CDOTAUserMsgItemSold = {
  encode(message: CDOTAUserMsgItemSold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemAbilityId !== 0) {
      writer.uint32(8).int32(message.itemAbilityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgItemSold {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgItemSold();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemAbilityId = reader.int32();
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

function createBaseCDOTAUserMsgItemFound(): CDOTAUserMsgItemFound {
  return { player: 0, quality: 0, rarity: 0, method: 0, itemdef: 0 };
}

export const CDOTAUserMsgItemFound = {
  encode(message: CDOTAUserMsgItemFound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.player !== 0) {
      writer.uint32(8).int32(message.player);
    }
    if (message.quality !== 0) {
      writer.uint32(16).int32(message.quality);
    }
    if (message.rarity !== 0) {
      writer.uint32(24).int32(message.rarity);
    }
    if (message.method !== 0) {
      writer.uint32(32).int32(message.method);
    }
    if (message.itemdef !== 0) {
      writer.uint32(40).uint32(message.itemdef);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgItemFound {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgItemFound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.player = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.quality = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.rarity = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.method = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.itemdef = reader.uint32();
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

function createBaseCDOTAUserMsgOverheadEvent(): CDOTAUserMsgOverheadEvent {
  return { messageType: 0, value: 0, targetPlayerEntindex: 0, targetEntindex: 0, sourcePlayerEntindex: 0 };
}

export const CDOTAUserMsgOverheadEvent = {
  encode(message: CDOTAUserMsgOverheadEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageType !== 0) {
      writer.uint32(8).int32(message.messageType);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    if (message.targetPlayerEntindex !== 0) {
      writer.uint32(24).int32(message.targetPlayerEntindex);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(32).int32(message.targetEntindex);
    }
    if (message.sourcePlayerEntindex !== 0) {
      writer.uint32(40).int32(message.sourcePlayerEntindex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgOverheadEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgOverheadEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.messageType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.value = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.targetPlayerEntindex = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.targetEntindex = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.sourcePlayerEntindex = reader.int32();
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

function createBaseCDOTAUserMsgTutorialTipInfo(): CDOTAUserMsgTutorialTipInfo {
  return { name: "", progress: 0 };
}

export const CDOTAUserMsgTutorialTipInfo = {
  encode(message: CDOTAUserMsgTutorialTipInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.progress !== 0) {
      writer.uint32(16).int32(message.progress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTutorialTipInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTutorialTipInfo();
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

          message.progress = reader.int32();
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

function createBaseCDOTAUserMsgTutorialFinish(): CDOTAUserMsgTutorialFinish {
  return { heading: "", emblem: "", body: "", success: false };
}

export const CDOTAUserMsgTutorialFinish = {
  encode(message: CDOTAUserMsgTutorialFinish, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heading !== "") {
      writer.uint32(10).string(message.heading);
    }
    if (message.emblem !== "") {
      writer.uint32(18).string(message.emblem);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    if (message.success === true) {
      writer.uint32(32).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTutorialFinish {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTutorialFinish();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.heading = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.emblem = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.body = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.success = reader.bool();
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

function createBaseCDOTAUserMsgTutorialMinimapPosition(): CDOTAUserMsgTutorialMinimapPosition {
  return {};
}

export const CDOTAUserMsgTutorialMinimapPosition = {
  encode(_: CDOTAUserMsgTutorialMinimapPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTutorialMinimapPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTutorialMinimapPosition();
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

function createBaseCDOTAUserMsgSendGenericToolTip(): CDOTAUserMsgSendGenericToolTip {
  return { title: "", text: "", entindex: 0, close: false };
}

export const CDOTAUserMsgSendGenericToolTip = {
  encode(message: CDOTAUserMsgSendGenericToolTip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.entindex !== 0) {
      writer.uint32(24).int32(message.entindex);
    }
    if (message.close === true) {
      writer.uint32(32).bool(message.close);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSendGenericToolTip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSendGenericToolTip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.text = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.entindex = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.close = reader.bool();
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

function createBaseCDOTAUserMsgWorldLine(): CDOTAUserMsgWorldLine {
  return { playerId: 0, worldline: undefined };
}

export const CDOTAUserMsgWorldLine = {
  encode(message: CDOTAUserMsgWorldLine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.worldline !== undefined) {
      CDOTAMsgWorldLine.encode(message.worldline, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgWorldLine {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgWorldLine();
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
          if (tag != 18) {
            break;
          }

          message.worldline = CDOTAMsgWorldLine.decode(reader, reader.uint32());
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

function createBaseCDOTAUserMsgChatWheel(): CDOTAUserMsgChatWheel {
  return { chatMessageId: 0, playerId: 0, accountId: 0, paramHeroId: 0, emoticonId: 0 };
}

export const CDOTAUserMsgChatWheel = {
  encode(message: CDOTAUserMsgChatWheel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatMessageId !== 0) {
      writer.uint32(8).uint32(message.chatMessageId);
    }
    if (message.playerId !== 0) {
      writer.uint32(16).int32(message.playerId);
    }
    if (message.accountId !== 0) {
      writer.uint32(24).uint32(message.accountId);
    }
    if (message.paramHeroId !== 0) {
      writer.uint32(32).uint32(message.paramHeroId);
    }
    if (message.emoticonId !== 0) {
      writer.uint32(40).uint32(message.emoticonId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgChatWheel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgChatWheel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.chatMessageId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.paramHeroId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
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

function createBaseCDOTAUserMsgReceivedXmasGift(): CDOTAUserMsgReceivedXmasGift {
  return { playerId: 0, itemName: "", inventorySlot: 0 };
}

export const CDOTAUserMsgReceivedXmasGift = {
  encode(message: CDOTAUserMsgReceivedXmasGift, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.itemName !== "") {
      writer.uint32(18).string(message.itemName);
    }
    if (message.inventorySlot !== 0) {
      writer.uint32(24).int32(message.inventorySlot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgReceivedXmasGift {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgReceivedXmasGift();
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
          if (tag != 18) {
            break;
          }

          message.itemName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.inventorySlot = reader.int32();
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

function createBaseCDOTAUserMsgShowSurvey(): CDOTAUserMsgShowSurvey {
  return { surveyId: 0, matchId: "0", responseStyle: "", teammateHeroId: 0, teammateName: "", teammateAccountId: 0 };
}

export const CDOTAUserMsgShowSurvey = {
  encode(message: CDOTAUserMsgShowSurvey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.surveyId !== 0) {
      writer.uint32(8).int32(message.surveyId);
    }
    if (message.matchId !== "0") {
      writer.uint32(16).uint64(message.matchId);
    }
    if (message.responseStyle !== "") {
      writer.uint32(26).string(message.responseStyle);
    }
    if (message.teammateHeroId !== 0) {
      writer.uint32(32).uint32(message.teammateHeroId);
    }
    if (message.teammateName !== "") {
      writer.uint32(42).string(message.teammateName);
    }
    if (message.teammateAccountId !== 0) {
      writer.uint32(48).uint32(message.teammateAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgShowSurvey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgShowSurvey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.surveyId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.responseStyle = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.teammateHeroId = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.teammateName = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.teammateAccountId = reader.uint32();
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

function createBaseCDOTAUserMsgUpdateSharedContent(): CDOTAUserMsgUpdateSharedContent {
  return { slotType: 0 };
}

export const CDOTAUserMsgUpdateSharedContent = {
  encode(message: CDOTAUserMsgUpdateSharedContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slotType !== 0) {
      writer.uint32(8).int32(message.slotType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUpdateSharedContent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUpdateSharedContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.slotType = reader.int32();
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

function createBaseCDOTAUserMsgTutorialRequestExp(): CDOTAUserMsgTutorialRequestExp {
  return {};
}

export const CDOTAUserMsgTutorialRequestExp = {
  encode(_: CDOTAUserMsgTutorialRequestExp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTutorialRequestExp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTutorialRequestExp();
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

function createBaseCDOTAUserMsgTutorialFade(): CDOTAUserMsgTutorialFade {
  return { tgtAlpha: 0 };
}

export const CDOTAUserMsgTutorialFade = {
  encode(message: CDOTAUserMsgTutorialFade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tgtAlpha !== 0) {
      writer.uint32(8).int32(message.tgtAlpha);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTutorialFade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTutorialFade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tgtAlpha = reader.int32();
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

function createBaseCDOTAUserMsgTutorialPingMinimap(): CDOTAUserMsgTutorialPingMinimap {
  return { playerId: 0, posX: 0, posY: 0, posZ: 0, entityIndex: 0 };
}

export const CDOTAUserMsgTutorialPingMinimap = {
  encode(message: CDOTAUserMsgTutorialPingMinimap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.posX !== 0) {
      writer.uint32(21).float(message.posX);
    }
    if (message.posY !== 0) {
      writer.uint32(29).float(message.posY);
    }
    if (message.posZ !== 0) {
      writer.uint32(37).float(message.posZ);
    }
    if (message.entityIndex !== 0) {
      writer.uint32(40).int32(message.entityIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTutorialPingMinimap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTutorialPingMinimap();
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
          if (tag != 21) {
            break;
          }

          message.posX = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.posY = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.posZ = reader.float();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.entityIndex = reader.int32();
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

function createBaseCDOTAUserMsgGamerulesStateChanged(): CDOTAUserMsgGamerulesStateChanged {
  return { state: 0 };
}

export const CDOTAUserMsgGamerulesStateChanged = {
  encode(message: CDOTAUserMsgGamerulesStateChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).uint32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgGamerulesStateChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgGamerulesStateChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.state = reader.uint32();
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

function createBaseCDOTAUserMsgAddQuestLogEntry(): CDOTAUserMsgAddQuestLogEntry {
  return { npcName: "", npcDialog: "" };
}

export const CDOTAUserMsgAddQuestLogEntry = {
  encode(message: CDOTAUserMsgAddQuestLogEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.npcName !== "") {
      writer.uint32(10).string(message.npcName);
    }
    if (message.npcDialog !== "") {
      writer.uint32(18).string(message.npcDialog);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgAddQuestLogEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgAddQuestLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.npcName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.npcDialog = reader.string();
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

function createBaseCDOTAUserMsgSendStatPopup(): CDOTAUserMsgSendStatPopup {
  return { playerId: 0, statpopup: undefined };
}

export const CDOTAUserMsgSendStatPopup = {
  encode(message: CDOTAUserMsgSendStatPopup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.statpopup !== undefined) {
      CDOTAMsgSendStatPopup.encode(message.statpopup, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSendStatPopup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSendStatPopup();
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
          if (tag != 18) {
            break;
          }

          message.statpopup = CDOTAMsgSendStatPopup.decode(reader, reader.uint32());
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

function createBaseCDOTAUserMsgDismissAllStatPopups(): CDOTAUserMsgDismissAllStatPopups {
  return { dismissallmsg: undefined };
}

export const CDOTAUserMsgDismissAllStatPopups = {
  encode(message: CDOTAUserMsgDismissAllStatPopups, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dismissallmsg !== undefined) {
      CDOTAMsgDismissAllStatPopups.encode(message.dismissallmsg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgDismissAllStatPopups {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgDismissAllStatPopups();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.dismissallmsg = CDOTAMsgDismissAllStatPopups.decode(reader, reader.uint32());
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

function createBaseCDOTAUserMsgSendRoshanSpectatorPhase(): CDOTAUserMsgSendRoshanSpectatorPhase {
  return { phase: 0, phaseStartTime: 0, phaseLength: 0 };
}

export const CDOTAUserMsgSendRoshanSpectatorPhase = {
  encode(message: CDOTAUserMsgSendRoshanSpectatorPhase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phase !== 0) {
      writer.uint32(8).int32(message.phase);
    }
    if (message.phaseStartTime !== 0) {
      writer.uint32(16).int32(message.phaseStartTime);
    }
    if (message.phaseLength !== 0) {
      writer.uint32(24).int32(message.phaseLength);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSendRoshanSpectatorPhase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSendRoshanSpectatorPhase();
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

          message.phaseStartTime = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.phaseLength = reader.int32();
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

function createBaseCDOTAUserMsgSendRoshanPopup(): CDOTAUserMsgSendRoshanPopup {
  return { reclaimed: false, gametime: 0 };
}

export const CDOTAUserMsgSendRoshanPopup = {
  encode(message: CDOTAUserMsgSendRoshanPopup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reclaimed === true) {
      writer.uint32(8).bool(message.reclaimed);
    }
    if (message.gametime !== 0) {
      writer.uint32(16).int32(message.gametime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSendRoshanPopup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSendRoshanPopup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.reclaimed = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gametime = reader.int32();
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

function createBaseCDOTAUserMsgSendFinalGold(): CDOTAUserMsgSendFinalGold {
  return { reliableGold: [], unreliableGold: [] };
}

export const CDOTAUserMsgSendFinalGold = {
  encode(message: CDOTAUserMsgSendFinalGold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.reliableGold) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.unreliableGold) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSendFinalGold {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSendFinalGold();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.reliableGold.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.reliableGold.push(reader.uint32());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 16) {
            message.unreliableGold.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unreliableGold.push(reader.uint32());
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

function createBaseCDOTAUserMsgCustomMsg(): CDOTAUserMsgCustomMsg {
  return { message: "", playerId: 0, value: 0 };
}

export const CDOTAUserMsgCustomMsg = {
  encode(message: CDOTAUserMsgCustomMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.playerId !== 0) {
      writer.uint32(16).int32(message.playerId);
    }
    if (message.value !== 0) {
      writer.uint32(24).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCustomMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCustomMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.message = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.value = reader.int32();
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

function createBaseCDOTAUserMsgCoachHUDPing(): CDOTAUserMsgCoachHUDPing {
  return { playerId: 0, hudPing: undefined };
}

export const CDOTAUserMsgCoachHUDPing = {
  encode(message: CDOTAUserMsgCoachHUDPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.hudPing !== undefined) {
      CDOTAMsgCoachHUDPing.encode(message.hudPing, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCoachHUDPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCoachHUDPing();
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
          if (tag != 18) {
            break;
          }

          message.hudPing = CDOTAMsgCoachHUDPing.decode(reader, reader.uint32());
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

function createBaseCDOTAUserMsgClientLoadGridNav(): CDOTAUserMsgClientLoadGridNav {
  return {};
}

export const CDOTAUserMsgClientLoadGridNav = {
  encode(_: CDOTAUserMsgClientLoadGridNav, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgClientLoadGridNav {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgClientLoadGridNav();
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

function createBaseCDOTAUserMsgTEProjectile(): CDOTAUserMsgTEProjectile {
  return {
    source: 0,
    target: 0,
    moveSpeed: 0,
    sourceAttachment: 0,
    particleSystemHandle: "0",
    dodgeable: false,
    isAttack: false,
    expireTime: 0,
    maximpacttime: 0,
    colorgemcolor: 0,
    launchTick: 0,
    handle: 0,
    targetLoc: undefined,
    particleCpData: [],
    additionalParticleSystemHandle: "0",
  };
}

export const CDOTAUserMsgTEProjectile = {
  encode(message: CDOTAUserMsgTEProjectile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).uint32(message.source);
    }
    if (message.target !== 0) {
      writer.uint32(16).uint32(message.target);
    }
    if (message.moveSpeed !== 0) {
      writer.uint32(24).int32(message.moveSpeed);
    }
    if (message.sourceAttachment !== 0) {
      writer.uint32(32).int32(message.sourceAttachment);
    }
    if (message.particleSystemHandle !== "0") {
      writer.uint32(40).int64(message.particleSystemHandle);
    }
    if (message.dodgeable === true) {
      writer.uint32(48).bool(message.dodgeable);
    }
    if (message.isAttack === true) {
      writer.uint32(56).bool(message.isAttack);
    }
    if (message.expireTime !== 0) {
      writer.uint32(77).float(message.expireTime);
    }
    if (message.maximpacttime !== 0) {
      writer.uint32(85).float(message.maximpacttime);
    }
    if (message.colorgemcolor !== 0) {
      writer.uint32(93).fixed32(message.colorgemcolor);
    }
    if (message.launchTick !== 0) {
      writer.uint32(96).int32(message.launchTick);
    }
    if (message.handle !== 0) {
      writer.uint32(104).int32(message.handle);
    }
    if (message.targetLoc !== undefined) {
      CMsgVector.encode(message.targetLoc, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.particleCpData) {
      CDOTAUserMsgProjectileParticleCPData.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.additionalParticleSystemHandle !== "0") {
      writer.uint32(128).int64(message.additionalParticleSystemHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTEProjectile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTEProjectile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.target = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.moveSpeed = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.sourceAttachment = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.particleSystemHandle = longToString(reader.int64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.dodgeable = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.isAttack = reader.bool();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.expireTime = reader.float();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.maximpacttime = reader.float();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.colorgemcolor = reader.fixed32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.launchTick = reader.int32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.handle = reader.int32();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.targetLoc = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.particleCpData.push(CDOTAUserMsgProjectileParticleCPData.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.additionalParticleSystemHandle = longToString(reader.int64() as Long);
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

function createBaseCDOTAUserMsgTEProjectileLoc(): CDOTAUserMsgTEProjectileLoc {
  return {
    sourceLoc: undefined,
    target: 0,
    moveSpeed: 0,
    particleSystemHandle: "0",
    dodgeable: false,
    isAttack: false,
    expireTime: 0,
    targetLoc: undefined,
    colorgemcolor: 0,
    launchTick: 0,
    handle: 0,
    source: 0,
    sourceAttachment: 0,
    particleCpData: [],
    additionalParticleSystemHandle: "0",
  };
}

export const CDOTAUserMsgTEProjectileLoc = {
  encode(message: CDOTAUserMsgTEProjectileLoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceLoc !== undefined) {
      CMsgVector.encode(message.sourceLoc, writer.uint32(10).fork()).ldelim();
    }
    if (message.target !== 0) {
      writer.uint32(16).uint32(message.target);
    }
    if (message.moveSpeed !== 0) {
      writer.uint32(24).int32(message.moveSpeed);
    }
    if (message.particleSystemHandle !== "0") {
      writer.uint32(32).int64(message.particleSystemHandle);
    }
    if (message.dodgeable === true) {
      writer.uint32(40).bool(message.dodgeable);
    }
    if (message.isAttack === true) {
      writer.uint32(48).bool(message.isAttack);
    }
    if (message.expireTime !== 0) {
      writer.uint32(77).float(message.expireTime);
    }
    if (message.targetLoc !== undefined) {
      CMsgVector.encode(message.targetLoc, writer.uint32(82).fork()).ldelim();
    }
    if (message.colorgemcolor !== 0) {
      writer.uint32(93).fixed32(message.colorgemcolor);
    }
    if (message.launchTick !== 0) {
      writer.uint32(96).int32(message.launchTick);
    }
    if (message.handle !== 0) {
      writer.uint32(104).int32(message.handle);
    }
    if (message.source !== 0) {
      writer.uint32(112).uint32(message.source);
    }
    if (message.sourceAttachment !== 0) {
      writer.uint32(120).int32(message.sourceAttachment);
    }
    for (const v of message.particleCpData) {
      CDOTAUserMsgProjectileParticleCPData.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    if (message.additionalParticleSystemHandle !== "0") {
      writer.uint32(136).int64(message.additionalParticleSystemHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTEProjectileLoc {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTEProjectileLoc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.sourceLoc = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.target = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.moveSpeed = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.particleSystemHandle = longToString(reader.int64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.dodgeable = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.isAttack = reader.bool();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.expireTime = reader.float();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.targetLoc = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.colorgemcolor = reader.fixed32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.launchTick = reader.int32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.handle = reader.int32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.source = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.sourceAttachment = reader.int32();
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.particleCpData.push(CDOTAUserMsgProjectileParticleCPData.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.additionalParticleSystemHandle = longToString(reader.int64() as Long);
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

function createBaseCDOTAUserMsgTEDestroyProjectile(): CDOTAUserMsgTEDestroyProjectile {
  return { handle: 0 };
}

export const CDOTAUserMsgTEDestroyProjectile = {
  encode(message: CDOTAUserMsgTEDestroyProjectile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handle !== 0) {
      writer.uint32(8).int32(message.handle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTEDestroyProjectile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTEDestroyProjectile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.handle = reader.int32();
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

function createBaseCDOTAUserMsgTEDotaBloodImpact(): CDOTAUserMsgTEDotaBloodImpact {
  return { entity: 0, scale: 0, xnormal: 0, ynormal: 0 };
}

export const CDOTAUserMsgTEDotaBloodImpact = {
  encode(message: CDOTAUserMsgTEDotaBloodImpact, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== 0) {
      writer.uint32(8).uint32(message.entity);
    }
    if (message.scale !== 0) {
      writer.uint32(21).float(message.scale);
    }
    if (message.xnormal !== 0) {
      writer.uint32(29).float(message.xnormal);
    }
    if (message.ynormal !== 0) {
      writer.uint32(37).float(message.ynormal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTEDotaBloodImpact {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTEDotaBloodImpact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entity = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.scale = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.xnormal = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.ynormal = reader.float();
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

function createBaseCDOTAUserMsgAbilityPing(): CDOTAUserMsgAbilityPing {
  return {
    playerId: 0,
    abilityId: 0,
    type: 1,
    cooldownSeconds: 0,
    level: 0,
    passive: false,
    manaNeeded: 0,
    entityId: 0,
    primaryCharges: 0,
    secondaryCharges: 0,
    ctrlHeld: false,
    reclaimTime: 0,
  };
}

export const CDOTAUserMsgAbilityPing = {
  encode(message: CDOTAUserMsgAbilityPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.abilityId !== 0) {
      writer.uint32(16).int32(message.abilityId);
    }
    if (message.type !== 1) {
      writer.uint32(24).int32(message.type);
    }
    if (message.cooldownSeconds !== 0) {
      writer.uint32(32).uint32(message.cooldownSeconds);
    }
    if (message.level !== 0) {
      writer.uint32(40).uint32(message.level);
    }
    if (message.passive === true) {
      writer.uint32(48).bool(message.passive);
    }
    if (message.manaNeeded !== 0) {
      writer.uint32(56).uint32(message.manaNeeded);
    }
    if (message.entityId !== 0) {
      writer.uint32(64).uint32(message.entityId);
    }
    if (message.primaryCharges !== 0) {
      writer.uint32(72).int32(message.primaryCharges);
    }
    if (message.secondaryCharges !== 0) {
      writer.uint32(80).int32(message.secondaryCharges);
    }
    if (message.ctrlHeld === true) {
      writer.uint32(96).bool(message.ctrlHeld);
    }
    if (message.reclaimTime !== 0) {
      writer.uint32(109).float(message.reclaimTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgAbilityPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgAbilityPing();
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

          message.abilityId = reader.int32();
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

          message.cooldownSeconds = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.passive = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.manaNeeded = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.entityId = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.primaryCharges = reader.int32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.secondaryCharges = reader.int32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.ctrlHeld = reader.bool();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.reclaimTime = reader.float();
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

function createBaseCDOTAUserMsgTEUnitAnimation(): CDOTAUserMsgTEUnitAnimation {
  return { entity: 0, sequenceVariant: 0, playbackrate: 0, castpoint: 0, type: 0, activity: 0, lagCompensationTime: 0 };
}

export const CDOTAUserMsgTEUnitAnimation = {
  encode(message: CDOTAUserMsgTEUnitAnimation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== 0) {
      writer.uint32(8).uint32(message.entity);
    }
    if (message.sequenceVariant !== 0) {
      writer.uint32(16).int32(message.sequenceVariant);
    }
    if (message.playbackrate !== 0) {
      writer.uint32(29).float(message.playbackrate);
    }
    if (message.castpoint !== 0) {
      writer.uint32(37).float(message.castpoint);
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    if (message.activity !== 0) {
      writer.uint32(48).int32(message.activity);
    }
    if (message.lagCompensationTime !== 0) {
      writer.uint32(61).float(message.lagCompensationTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTEUnitAnimation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTEUnitAnimation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entity = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.sequenceVariant = reader.int32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.playbackrate = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.castpoint = reader.float();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.type = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.activity = reader.int32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.lagCompensationTime = reader.float();
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

function createBaseCDOTAUserMsgTEUnitAnimationEnd(): CDOTAUserMsgTEUnitAnimationEnd {
  return { entity: 0, snap: false };
}

export const CDOTAUserMsgTEUnitAnimationEnd = {
  encode(message: CDOTAUserMsgTEUnitAnimationEnd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== 0) {
      writer.uint32(8).uint32(message.entity);
    }
    if (message.snap === true) {
      writer.uint32(16).bool(message.snap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTEUnitAnimationEnd {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTEUnitAnimationEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entity = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.snap = reader.bool();
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

function createBaseCDOTAUserMsgShowGenericPopup(): CDOTAUserMsgShowGenericPopup {
  return { header: "", body: "", param1: "", param2: "", tintScreen: false, showNoOtherDialogs: false };
}

export const CDOTAUserMsgShowGenericPopup = {
  encode(message: CDOTAUserMsgShowGenericPopup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== "") {
      writer.uint32(10).string(message.header);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    if (message.param1 !== "") {
      writer.uint32(26).string(message.param1);
    }
    if (message.param2 !== "") {
      writer.uint32(34).string(message.param2);
    }
    if (message.tintScreen === true) {
      writer.uint32(40).bool(message.tintScreen);
    }
    if (message.showNoOtherDialogs === true) {
      writer.uint32(48).bool(message.showNoOtherDialogs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgShowGenericPopup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgShowGenericPopup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.header = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.body = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.param1 = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.param2 = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.tintScreen = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.showNoOtherDialogs = reader.bool();
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

function createBaseCDOTAUserMsgVoteStart(): CDOTAUserMsgVoteStart {
  return { title: "", duration: 0, choiceCount: 0, choices: [] };
}

export const CDOTAUserMsgVoteStart = {
  encode(message: CDOTAUserMsgVoteStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.duration !== 0) {
      writer.uint32(21).float(message.duration);
    }
    if (message.choiceCount !== 0) {
      writer.uint32(24).int32(message.choiceCount);
    }
    for (const v of message.choices) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgVoteStart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgVoteStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.duration = reader.float();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.choiceCount = reader.int32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.choices.push(reader.string());
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

function createBaseCDOTAUserMsgVoteUpdate(): CDOTAUserMsgVoteUpdate {
  return { choiceCounts: [] };
}

export const CDOTAUserMsgVoteUpdate = {
  encode(message: CDOTAUserMsgVoteUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.choiceCounts) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgVoteUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgVoteUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.choiceCounts.push(reader.int32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.choiceCounts.push(reader.int32());
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

function createBaseCDOTAUserMsgVoteEnd(): CDOTAUserMsgVoteEnd {
  return { selectedChoice: 0 };
}

export const CDOTAUserMsgVoteEnd = {
  encode(message: CDOTAUserMsgVoteEnd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selectedChoice !== 0) {
      writer.uint32(8).int32(message.selectedChoice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgVoteEnd {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgVoteEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.selectedChoice = reader.int32();
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

function createBaseCDOTAUserMsgBoosterStatePlayer(): CDOTAUserMsgBoosterStatePlayer {
  return { playerId: 0, bonus: 0, eventBonus: 0, bonusItemId: 0, eventBonusItemId: 0 };
}

export const CDOTAUserMsgBoosterStatePlayer = {
  encode(message: CDOTAUserMsgBoosterStatePlayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.bonus !== 0) {
      writer.uint32(21).float(message.bonus);
    }
    if (message.eventBonus !== 0) {
      writer.uint32(29).float(message.eventBonus);
    }
    if (message.bonusItemId !== 0) {
      writer.uint32(32).uint32(message.bonusItemId);
    }
    if (message.eventBonusItemId !== 0) {
      writer.uint32(40).uint32(message.eventBonusItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgBoosterStatePlayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgBoosterStatePlayer();
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
          if (tag != 21) {
            break;
          }

          message.bonus = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.eventBonus = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.bonusItemId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.eventBonusItemId = reader.uint32();
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

function createBaseCDOTAUserMsgBoosterState(): CDOTAUserMsgBoosterState {
  return { boostedPlayers: [] };
}

export const CDOTAUserMsgBoosterState = {
  encode(message: CDOTAUserMsgBoosterState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.boostedPlayers) {
      CDOTAUserMsgBoosterStatePlayer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgBoosterState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgBoosterState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.boostedPlayers.push(CDOTAUserMsgBoosterStatePlayer.decode(reader, reader.uint32()));
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

function createBaseCDOTAUserMsgPlayerMMR(): CDOTAUserMsgPlayerMMR {
  return { mmr: [] };
}

export const CDOTAUserMsgPlayerMMR = {
  encode(message: CDOTAUserMsgPlayerMMR, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.mmr) {
      writer.sint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPlayerMMR {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPlayerMMR();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.mmr.push(reader.sint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.mmr.push(reader.sint32());
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

function createBaseCDOTAUserMsgAbilitySteal(): CDOTAUserMsgAbilitySteal {
  return { playerId: 0, abilityId: 0, abilityLevel: 0 };
}

export const CDOTAUserMsgAbilitySteal = {
  encode(message: CDOTAUserMsgAbilitySteal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.abilityId !== 0) {
      writer.uint32(16).int32(message.abilityId);
    }
    if (message.abilityLevel !== 0) {
      writer.uint32(24).uint32(message.abilityLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgAbilitySteal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgAbilitySteal();
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

          message.abilityId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
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
};

function createBaseCDOTAUserMsgStatsHeroLookup(): CDOTAUserMsgStatsHeroLookup {
  return { playerId: 0, heroId: 0, heroName: "", persona: "" };
}

export const CDOTAUserMsgStatsHeroLookup = {
  encode(message: CDOTAUserMsgStatsHeroLookup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).int32(message.heroId);
    }
    if (message.heroName !== "") {
      writer.uint32(26).string(message.heroName);
    }
    if (message.persona !== "") {
      writer.uint32(34).string(message.persona);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsHeroLookup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsHeroLookup();
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

          message.heroId = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.heroName = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.persona = reader.string();
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

function createBaseCDOTAUserMsgStatsHeroPositionInfo(): CDOTAUserMsgStatsHeroPositionInfo {
  return { averagePosition: 0, positionDetails: [] };
}

export const CDOTAUserMsgStatsHeroPositionInfo = {
  encode(message: CDOTAUserMsgStatsHeroPositionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.averagePosition !== 0) {
      writer.uint32(13).float(message.averagePosition);
    }
    for (const v of message.positionDetails) {
      CDOTAUserMsgStatsHeroPositionInfo_PositionPair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsHeroPositionInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsHeroPositionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.averagePosition = reader.float();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.positionDetails.push(CDOTAUserMsgStatsHeroPositionInfo_PositionPair.decode(reader, reader.uint32()));
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

function createBaseCDOTAUserMsgStatsHeroPositionInfo_PositionPair(): CDOTAUserMsgStatsHeroPositionInfo_PositionPair {
  return { positionCategory: 0, positionCount: 0 };
}

export const CDOTAUserMsgStatsHeroPositionInfo_PositionPair = {
  encode(
    message: CDOTAUserMsgStatsHeroPositionInfo_PositionPair,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.positionCategory !== 0) {
      writer.uint32(8).int32(message.positionCategory);
    }
    if (message.positionCount !== 0) {
      writer.uint32(16).uint32(message.positionCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsHeroPositionInfo_PositionPair {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsHeroPositionInfo_PositionPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.positionCategory = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.positionCount = reader.uint32();
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

function createBaseCDOTAUserMsgStatsHeroMinuteDetails(): CDOTAUserMsgStatsHeroMinuteDetails {
  return {
    lastHits: 0,
    heroKills: 0,
    heroDamage: 0,
    towerDamage: 0,
    positionInfo: undefined,
    totalXp: 0,
    netWorth: 0,
    harvestedCreepGold: 0,
    claimedFarm: 0,
    wardsPlaced: 0,
    runesCollected: 0,
    tpsUsed: 0,
    manaSpent: [],
    damageAbsorbed: [],
    damageDone: [],
  };
}

export const CDOTAUserMsgStatsHeroMinuteDetails = {
  encode(message: CDOTAUserMsgStatsHeroMinuteDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastHits !== 0) {
      writer.uint32(8).uint32(message.lastHits);
    }
    if (message.heroKills !== 0) {
      writer.uint32(16).uint32(message.heroKills);
    }
    if (message.heroDamage !== 0) {
      writer.uint32(24).uint32(message.heroDamage);
    }
    if (message.towerDamage !== 0) {
      writer.uint32(32).uint32(message.towerDamage);
    }
    if (message.positionInfo !== undefined) {
      CDOTAUserMsgStatsHeroPositionInfo.encode(message.positionInfo, writer.uint32(42).fork()).ldelim();
    }
    if (message.totalXp !== 0) {
      writer.uint32(48).uint32(message.totalXp);
    }
    if (message.netWorth !== 0) {
      writer.uint32(56).uint32(message.netWorth);
    }
    if (message.harvestedCreepGold !== 0) {
      writer.uint32(64).uint32(message.harvestedCreepGold);
    }
    if (message.claimedFarm !== 0) {
      writer.uint32(72).uint32(message.claimedFarm);
    }
    if (message.wardsPlaced !== 0) {
      writer.uint32(80).uint32(message.wardsPlaced);
    }
    if (message.runesCollected !== 0) {
      writer.uint32(88).uint32(message.runesCollected);
    }
    if (message.tpsUsed !== 0) {
      writer.uint32(96).uint32(message.tpsUsed);
    }
    writer.uint32(106).fork();
    for (const v of message.manaSpent) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(114).fork();
    for (const v of message.damageAbsorbed) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(122).fork();
    for (const v of message.damageDone) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsHeroMinuteDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsHeroMinuteDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.lastHits = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.heroKills = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.heroDamage = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.towerDamage = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.positionInfo = CDOTAUserMsgStatsHeroPositionInfo.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.totalXp = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.netWorth = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.harvestedCreepGold = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.claimedFarm = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.wardsPlaced = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.runesCollected = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.tpsUsed = reader.uint32();
          continue;
        case 13:
          if (tag == 104) {
            message.manaSpent.push(reader.uint32());
            continue;
          }

          if (tag == 106) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.manaSpent.push(reader.uint32());
            }

            continue;
          }

          break;
        case 14:
          if (tag == 112) {
            message.damageAbsorbed.push(reader.uint32());
            continue;
          }

          if (tag == 114) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.damageAbsorbed.push(reader.uint32());
            }

            continue;
          }

          break;
        case 15:
          if (tag == 120) {
            message.damageDone.push(reader.uint32());
            continue;
          }

          if (tag == 122) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.damageDone.push(reader.uint32());
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

function createBaseCDOTAUserMsgStatsTeamMinuteDetails(): CDOTAUserMsgStatsTeamMinuteDetails {
  return {
    playerStats: [],
    towerKills: 0,
    barrackKills: 0,
    availableLaneCreepGold: 0,
    balanceKillValue: 0,
    balanceTowerValue: 0,
    balanceBarracksValue: 0,
    balanceGoldValue: 0,
    balanceXpValue: 0,
    lanePerformance: [],
  };
}

export const CDOTAUserMsgStatsTeamMinuteDetails = {
  encode(message: CDOTAUserMsgStatsTeamMinuteDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.playerStats) {
      CDOTAUserMsgStatsHeroMinuteDetails.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.towerKills !== 0) {
      writer.uint32(16).uint32(message.towerKills);
    }
    if (message.barrackKills !== 0) {
      writer.uint32(24).uint32(message.barrackKills);
    }
    if (message.availableLaneCreepGold !== 0) {
      writer.uint32(32).uint32(message.availableLaneCreepGold);
    }
    if (message.balanceKillValue !== 0) {
      writer.uint32(40).uint32(message.balanceKillValue);
    }
    if (message.balanceTowerValue !== 0) {
      writer.uint32(48).uint32(message.balanceTowerValue);
    }
    if (message.balanceBarracksValue !== 0) {
      writer.uint32(56).uint32(message.balanceBarracksValue);
    }
    if (message.balanceGoldValue !== 0) {
      writer.uint32(64).uint32(message.balanceGoldValue);
    }
    if (message.balanceXpValue !== 0) {
      writer.uint32(72).uint32(message.balanceXpValue);
    }
    for (const v of message.lanePerformance) {
      CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsTeamMinuteDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsTeamMinuteDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playerStats.push(CDOTAUserMsgStatsHeroMinuteDetails.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.towerKills = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.barrackKills = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.availableLaneCreepGold = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.balanceKillValue = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.balanceTowerValue = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.balanceBarracksValue = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.balanceGoldValue = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.balanceXpValue = reader.uint32();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.lanePerformance.push(
            CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance.decode(reader, reader.uint32()),
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

function createBaseCDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance(): CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance {
  return { locationCategory: 0, statType: 0, value: 0 };
}

export const CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance = {
  encode(
    message: CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.locationCategory !== 0) {
      writer.uint32(8).uint32(message.locationCategory);
    }
    if (message.statType !== 0) {
      writer.uint32(16).uint32(message.statType);
    }
    if (message.value !== 0) {
      writer.uint32(24).uint32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsTeamMinuteDetails_LocationPerformance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.locationCategory = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.statType = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
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

function createBaseCDOTAUserMsgStatsPlayerKillShare(): CDOTAUserMsgStatsPlayerKillShare {
  return { playerId: 0, killSharePercent: 0, playerLocX: 0, playerLocY: 0, healthPercent: 0, manaPercent: 0 };
}

export const CDOTAUserMsgStatsPlayerKillShare = {
  encode(message: CDOTAUserMsgStatsPlayerKillShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.killSharePercent !== 0) {
      writer.uint32(21).float(message.killSharePercent);
    }
    if (message.playerLocX !== 0) {
      writer.uint32(29).float(message.playerLocX);
    }
    if (message.playerLocY !== 0) {
      writer.uint32(37).float(message.playerLocY);
    }
    if (message.healthPercent !== 0) {
      writer.uint32(45).float(message.healthPercent);
    }
    if (message.manaPercent !== 0) {
      writer.uint32(53).float(message.manaPercent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsPlayerKillShare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsPlayerKillShare();
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
          if (tag != 21) {
            break;
          }

          message.killSharePercent = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.playerLocX = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.playerLocY = reader.float();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.healthPercent = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.manaPercent = reader.float();
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

function createBaseCDOTAUserMsgStatsKillDetails(): CDOTAUserMsgStatsKillDetails {
  return { victimId: 0, killShares: [], damageToKill: 0, effectiveHealth: 0, deathTime: 0, killerId: 0 };
}

export const CDOTAUserMsgStatsKillDetails = {
  encode(message: CDOTAUserMsgStatsKillDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.victimId !== 0) {
      writer.uint32(8).int32(message.victimId);
    }
    for (const v of message.killShares) {
      CDOTAUserMsgStatsPlayerKillShare.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.damageToKill !== 0) {
      writer.uint32(24).uint32(message.damageToKill);
    }
    if (message.effectiveHealth !== 0) {
      writer.uint32(32).uint32(message.effectiveHealth);
    }
    if (message.deathTime !== 0) {
      writer.uint32(45).float(message.deathTime);
    }
    if (message.killerId !== 0) {
      writer.uint32(48).int32(message.killerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsKillDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsKillDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.victimId = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.killShares.push(CDOTAUserMsgStatsPlayerKillShare.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.damageToKill = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.effectiveHealth = reader.uint32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.deathTime = reader.float();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.killerId = reader.int32();
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

function createBaseCDOTAUserMsgStatsMatchDetails(): CDOTAUserMsgStatsMatchDetails {
  return { heroLookup: [], radiantStats: [], direStats: [], radiantKills: [], direKills: [], fightDetails: [] };
}

export const CDOTAUserMsgStatsMatchDetails = {
  encode(message: CDOTAUserMsgStatsMatchDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.heroLookup) {
      CDOTAUserMsgStatsHeroLookup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.radiantStats) {
      CDOTAUserMsgStatsTeamMinuteDetails.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.direStats) {
      CDOTAUserMsgStatsTeamMinuteDetails.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.radiantKills) {
      CDOTAUserMsgStatsKillDetails.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.direKills) {
      CDOTAUserMsgStatsKillDetails.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.fightDetails) {
      CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsMatchDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsMatchDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.heroLookup.push(CDOTAUserMsgStatsHeroLookup.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.radiantStats.push(CDOTAUserMsgStatsTeamMinuteDetails.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.direStats.push(CDOTAUserMsgStatsTeamMinuteDetails.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.radiantKills.push(CDOTAUserMsgStatsKillDetails.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.direKills.push(CDOTAUserMsgStatsKillDetails.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.fightDetails.push(
            CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails.decode(reader, reader.uint32()),
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

function createBaseCDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails(): CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails {
  return { participants: [], deaths: [], goldDelta: 0, xpDelta: 0 };
}

export const CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails = {
  encode(
    message: CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.participants) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.deaths) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.goldDelta !== 0) {
      writer.uint32(24).uint32(message.goldDelta);
    }
    if (message.xpDelta !== 0) {
      writer.uint32(32).uint32(message.xpDelta);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.participants.push(reader.int32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.participants.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 16) {
            message.deaths.push(reader.int32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.deaths.push(reader.int32());
            }

            continue;
          }

          break;
        case 3:
          if (tag != 24) {
            break;
          }

          message.goldDelta = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.xpDelta = reader.uint32();
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

function createBaseCDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails(): CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails {
  return { startTime: 0, endTime: 0, radiantFightDetails: undefined, direFightDetails: undefined };
}

export const CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails = {
  encode(
    message: CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.startTime !== 0) {
      writer.uint32(13).float(message.startTime);
    }
    if (message.endTime !== 0) {
      writer.uint32(21).float(message.endTime);
    }
    if (message.radiantFightDetails !== undefined) {
      CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails.encode(
        message.radiantFightDetails,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.direFightDetails !== undefined) {
      CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails.encode(
        message.direFightDetails,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.startTime = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.endTime = reader.float();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.radiantFightDetails = CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.direFightDetails = CDOTAUserMsgStatsMatchDetails_CDOTAUserMsgStatsFightTeamDetails.decode(
            reader,
            reader.uint32(),
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

function createBaseCDOTAUserMsgMiniTaunt(): CDOTAUserMsgMiniTaunt {
  return { tauntingPlayerId: 0 };
}

export const CDOTAUserMsgMiniTaunt = {
  encode(message: CDOTAUserMsgMiniTaunt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tauntingPlayerId !== 0) {
      writer.uint32(8).int32(message.tauntingPlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMiniTaunt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMiniTaunt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tauntingPlayerId = reader.int32();
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

function createBaseCDOTAUserMsgSpeechBubble(): CDOTAUserMsgSpeechBubble {
  return { destroyAll: false };
}

export const CDOTAUserMsgSpeechBubble = {
  encode(message: CDOTAUserMsgSpeechBubble, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destroyAll === true) {
      writer.uint32(8).bool(message.destroyAll);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSpeechBubble {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSpeechBubble();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.destroyAll = reader.bool();
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

function createBaseCDOTAUserMsgCustomHeaderMessage(): CDOTAUserMsgCustomHeaderMessage {
  return { playerId: 0, duration: 0, message: "", value: 0 };
}

export const CDOTAUserMsgCustomHeaderMessage = {
  encode(message: CDOTAUserMsgCustomHeaderMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.duration !== 0) {
      writer.uint32(21).float(message.duration);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.value !== 0) {
      writer.uint32(32).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCustomHeaderMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCustomHeaderMessage();
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
          if (tag != 21) {
            break;
          }

          message.duration = reader.float();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.message = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.value = reader.int32();
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

function createBaseCMsgHeroAbilityStat(): CMsgHeroAbilityStat {
  return { statType: 0, intValue: 0, floatValue: 0 };
}

export const CMsgHeroAbilityStat = {
  encode(message: CMsgHeroAbilityStat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statType !== 0) {
      writer.uint32(8).int32(message.statType);
    }
    if (message.intValue !== 0) {
      writer.uint32(16).int32(message.intValue);
    }
    if (message.floatValue !== 0) {
      writer.uint32(29).float(message.floatValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHeroAbilityStat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHeroAbilityStat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.statType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.intValue = reader.int32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.floatValue = reader.float();
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

function createBaseCMsgCombatAnalyzerPlayerStat(): CMsgCombatAnalyzerPlayerStat {
  return { accountId: 0, heroAbilityStats: [] };
}

export const CMsgCombatAnalyzerPlayerStat = {
  encode(message: CMsgCombatAnalyzerPlayerStat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    for (const v of message.heroAbilityStats) {
      CMsgHeroAbilityStat.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCombatAnalyzerPlayerStat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCombatAnalyzerPlayerStat();
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

          message.heroAbilityStats.push(CMsgHeroAbilityStat.decode(reader, reader.uint32()));
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

function createBaseCMsgCombatAnalyzerStats(): CMsgCombatAnalyzerStats {
  return { matchId: "0", playerStats: [] };
}

export const CMsgCombatAnalyzerStats = {
  encode(message: CMsgCombatAnalyzerStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    for (const v of message.playerStats) {
      CMsgCombatAnalyzerPlayerStat.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCombatAnalyzerStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCombatAnalyzerStats();
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

          message.playerStats.push(CMsgCombatAnalyzerPlayerStat.decode(reader, reader.uint32()));
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

function createBaseCDOTAUserMsgBeastChat(): CDOTAUserMsgBeastChat {
  return { team: 0, format: "", message: "", target: "" };
}

export const CDOTAUserMsgBeastChat = {
  encode(message: CDOTAUserMsgBeastChat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.team !== 0) {
      writer.uint32(8).uint32(message.team);
    }
    if (message.format !== "") {
      writer.uint32(18).string(message.format);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.target !== "") {
      writer.uint32(34).string(message.target);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgBeastChat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgBeastChat();
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

          message.format = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.message = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.target = reader.string();
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

function createBaseCDOTAUserMsgCustomHudElementCreate(): CDOTAUserMsgCustomHudElementCreate {
  return { elementId: "", layoutFilename: "", data: Buffer.alloc(0) };
}

export const CDOTAUserMsgCustomHudElementCreate = {
  encode(message: CDOTAUserMsgCustomHudElementCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.elementId !== "") {
      writer.uint32(10).string(message.elementId);
    }
    if (message.layoutFilename !== "") {
      writer.uint32(18).string(message.layoutFilename);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCustomHudElementCreate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCustomHudElementCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.elementId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.layoutFilename = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.data = reader.bytes() as Buffer;
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

function createBaseCDOTAUserMsgCustomHudElementModify(): CDOTAUserMsgCustomHudElementModify {
  return { elementId: "", modifyVisible: false, data: Buffer.alloc(0) };
}

export const CDOTAUserMsgCustomHudElementModify = {
  encode(message: CDOTAUserMsgCustomHudElementModify, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.elementId !== "") {
      writer.uint32(10).string(message.elementId);
    }
    if (message.modifyVisible === true) {
      writer.uint32(16).bool(message.modifyVisible);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCustomHudElementModify {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCustomHudElementModify();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.elementId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.modifyVisible = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.data = reader.bytes() as Buffer;
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

function createBaseCDOTAUserMsgCustomHudElementDestroy(): CDOTAUserMsgCustomHudElementDestroy {
  return { elementId: "" };
}

export const CDOTAUserMsgCustomHudElementDestroy = {
  encode(message: CDOTAUserMsgCustomHudElementDestroy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.elementId !== "") {
      writer.uint32(10).string(message.elementId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCustomHudElementDestroy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCustomHudElementDestroy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.elementId = reader.string();
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

function createBaseCDOTAUserMsgCompendiumStatePlayer(): CDOTAUserMsgCompendiumStatePlayer {
  return { playerId: 0, level: 0 };
}

export const CDOTAUserMsgCompendiumStatePlayer = {
  encode(message: CDOTAUserMsgCompendiumStatePlayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.level !== 0) {
      writer.uint32(16).uint32(message.level);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCompendiumStatePlayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCompendiumStatePlayer();
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

          message.level = reader.uint32();
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

function createBaseCDOTAUserMsgCompendiumState(): CDOTAUserMsgCompendiumState {
  return { compendiumPlayers: [] };
}

export const CDOTAUserMsgCompendiumState = {
  encode(message: CDOTAUserMsgCompendiumState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.compendiumPlayers) {
      CDOTAUserMsgCompendiumStatePlayer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgCompendiumState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgCompendiumState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.compendiumPlayers.push(CDOTAUserMsgCompendiumStatePlayer.decode(reader, reader.uint32()));
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

function createBaseCDOTAUserMsgProjectionAbility(): CDOTAUserMsgProjectionAbility {
  return {
    abilityId: 0,
    casterEntIndex: 0,
    casterTeam: 0,
    channelEnd: false,
    origin: undefined,
    trackCasterOnly: false,
    endTime: 0,
    victimEntIndex: 0,
  };
}

export const CDOTAUserMsgProjectionAbility = {
  encode(message: CDOTAUserMsgProjectionAbility, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abilityId !== 0) {
      writer.uint32(8).int32(message.abilityId);
    }
    if (message.casterEntIndex !== 0) {
      writer.uint32(16).int32(message.casterEntIndex);
    }
    if (message.casterTeam !== 0) {
      writer.uint32(24).int32(message.casterTeam);
    }
    if (message.channelEnd === true) {
      writer.uint32(32).bool(message.channelEnd);
    }
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(42).fork()).ldelim();
    }
    if (message.trackCasterOnly === true) {
      writer.uint32(48).bool(message.trackCasterOnly);
    }
    if (message.endTime !== 0) {
      writer.uint32(61).float(message.endTime);
    }
    if (message.victimEntIndex !== 0) {
      writer.uint32(64).int32(message.victimEntIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgProjectionAbility {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgProjectionAbility();
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

          message.casterEntIndex = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.casterTeam = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.channelEnd = reader.bool();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.origin = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.trackCasterOnly = reader.bool();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.endTime = reader.float();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.victimEntIndex = reader.int32();
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

function createBaseCDOTAUserMsgProjectionEvent(): CDOTAUserMsgProjectionEvent {
  return { eventId: 0, team: 0 };
}

export const CDOTAUserMsgProjectionEvent = {
  encode(message: CDOTAUserMsgProjectionEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.team !== 0) {
      writer.uint32(16).uint32(message.team);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgProjectionEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgProjectionEvent();
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

function createBaseCDOTAUserMsgXPAlert(): CDOTAUserMsgXPAlert {
  return { playerId: 0, targetEntindex: 0 };
}

export const CDOTAUserMsgXPAlert = {
  encode(message: CDOTAUserMsgXPAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(16).int32(message.targetEntindex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgXPAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgXPAlert();
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

          message.targetEntindex = reader.int32();
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

function createBaseCDOTAUserMsgTalentTreeAlert(): CDOTAUserMsgTalentTreeAlert {
  return { playerId: 0, targetEntindex: 0, abilityId: 0, slot: 0, learned: false };
}

export const CDOTAUserMsgTalentTreeAlert = {
  encode(message: CDOTAUserMsgTalentTreeAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(16).int32(message.targetEntindex);
    }
    if (message.abilityId !== 0) {
      writer.uint32(24).int32(message.abilityId);
    }
    if (message.slot !== 0) {
      writer.uint32(32).int32(message.slot);
    }
    if (message.learned === true) {
      writer.uint32(40).bool(message.learned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTalentTreeAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTalentTreeAlert();
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

          message.targetEntindex = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.abilityId = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.slot = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.learned = reader.bool();
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

function createBaseCDOTAUserMsgUpdateQuestProgress(): CDOTAUserMsgUpdateQuestProgress {
  return {};
}

export const CDOTAUserMsgUpdateQuestProgress = {
  encode(_: CDOTAUserMsgUpdateQuestProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgUpdateQuestProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgUpdateQuestProgress();
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

function createBaseCDOTAUserMsgQuestStatus(): CDOTAUserMsgQuestStatus {
  return { playerId: 0, questId: 0, challengeId: 0, progress: 0, goal: 0, query: 0, failGametime: 0, itemAbilityId: 0 };
}

export const CDOTAUserMsgQuestStatus = {
  encode(message: CDOTAUserMsgQuestStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.questId !== 0) {
      writer.uint32(16).uint32(message.questId);
    }
    if (message.challengeId !== 0) {
      writer.uint32(24).uint32(message.challengeId);
    }
    if (message.progress !== 0) {
      writer.uint32(32).uint32(message.progress);
    }
    if (message.goal !== 0) {
      writer.uint32(40).uint32(message.goal);
    }
    if (message.query !== 0) {
      writer.uint32(48).uint32(message.query);
    }
    if (message.failGametime !== 0) {
      writer.uint32(61).float(message.failGametime);
    }
    if (message.itemAbilityId !== 0) {
      writer.uint32(64).int32(message.itemAbilityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgQuestStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgQuestStatus();
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

          message.questId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.challengeId = reader.uint32();
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

          message.goal = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.query = reader.uint32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.failGametime = reader.float();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.itemAbilityId = reader.int32();
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

function createBaseCDOTAUserMsgSuggestHeroPick(): CDOTAUserMsgSuggestHeroPick {
  return { playerId: 0, heroId: 0, ban: false };
}

export const CDOTAUserMsgSuggestHeroPick = {
  encode(message: CDOTAUserMsgSuggestHeroPick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).uint32(message.heroId);
    }
    if (message.ban === true) {
      writer.uint32(24).bool(message.ban);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSuggestHeroPick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSuggestHeroPick();
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

          message.heroId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.ban = reader.bool();
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

function createBaseCDOTAUserMsgSuggestHeroRole(): CDOTAUserMsgSuggestHeroRole {
  return { playerId: 0, heroRole: "" };
}

export const CDOTAUserMsgSuggestHeroRole = {
  encode(message: CDOTAUserMsgSuggestHeroRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.heroRole !== "") {
      writer.uint32(18).string(message.heroRole);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSuggestHeroRole {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSuggestHeroRole();
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
          if (tag != 18) {
            break;
          }

          message.heroRole = reader.string();
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

function createBaseCDOTAUserMsgKillcamDamageTaken(): CDOTAUserMsgKillcamDamageTaken {
  return { playerId: 0, damageTaken: 0, itemType: 0, itemAbilityId: 0, heroName: "", damageColor: "" };
}

export const CDOTAUserMsgKillcamDamageTaken = {
  encode(message: CDOTAUserMsgKillcamDamageTaken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.damageTaken !== 0) {
      writer.uint32(16).uint32(message.damageTaken);
    }
    if (message.itemType !== 0) {
      writer.uint32(24).uint32(message.itemType);
    }
    if (message.itemAbilityId !== 0) {
      writer.uint32(32).int32(message.itemAbilityId);
    }
    if (message.heroName !== "") {
      writer.uint32(42).string(message.heroName);
    }
    if (message.damageColor !== "") {
      writer.uint32(50).string(message.damageColor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgKillcamDamageTaken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgKillcamDamageTaken();
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

          message.damageTaken = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemType = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.itemAbilityId = reader.int32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.heroName = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.damageColor = reader.string();
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

function createBaseCDOTAUserMsgSelectPenaltyGold(): CDOTAUserMsgSelectPenaltyGold {
  return { playerId: 0, cost: 0 };
}

export const CDOTAUserMsgSelectPenaltyGold = {
  encode(message: CDOTAUserMsgSelectPenaltyGold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.cost !== 0) {
      writer.uint32(16).sint32(message.cost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSelectPenaltyGold {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSelectPenaltyGold();
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

          message.cost = reader.sint32();
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

function createBaseCDOTAUserMsgRollDiceResult(): CDOTAUserMsgRollDiceResult {
  return { playerId: 0, channelType: 0, rollMin: 0, rollMax: 0, result: 0 };
}

export const CDOTAUserMsgRollDiceResult = {
  encode(message: CDOTAUserMsgRollDiceResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.channelType !== 0) {
      writer.uint32(16).uint32(message.channelType);
    }
    if (message.rollMin !== 0) {
      writer.uint32(24).uint32(message.rollMin);
    }
    if (message.rollMax !== 0) {
      writer.uint32(32).uint32(message.rollMax);
    }
    if (message.result !== 0) {
      writer.uint32(40).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgRollDiceResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgRollDiceResult();
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

          message.channelType = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.rollMin = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.rollMax = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
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
};

function createBaseCDOTAUserMsgFlipCoinResult(): CDOTAUserMsgFlipCoinResult {
  return { playerId: 0, channelType: 0, result: false };
}

export const CDOTAUserMsgFlipCoinResult = {
  encode(message: CDOTAUserMsgFlipCoinResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.channelType !== 0) {
      writer.uint32(16).uint32(message.channelType);
    }
    if (message.result === true) {
      writer.uint32(24).bool(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgFlipCoinResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgFlipCoinResult();
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

          message.channelType = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
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
};

function createBaseCDOTAUserMessageRequestItemSuggestions(): CDOTAUserMessageRequestItemSuggestions {
  return { playerId: 0 };
}

export const CDOTAUserMessageRequestItemSuggestions = {
  encode(message: CDOTAUserMessageRequestItemSuggestions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMessageRequestItemSuggestions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMessageRequestItemSuggestions();
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

function createBaseCDOTAUserMessageTeamCaptainChanged(): CDOTAUserMessageTeamCaptainChanged {
  return { team: 0, captainPlayerId: 0 };
}

export const CDOTAUserMessageTeamCaptainChanged = {
  encode(message: CDOTAUserMessageTeamCaptainChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.team !== 0) {
      writer.uint32(8).uint32(message.team);
    }
    if (message.captainPlayerId !== 0) {
      writer.uint32(16).int32(message.captainPlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMessageTeamCaptainChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMessageTeamCaptainChanged();
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
          if (tag != 16) {
            break;
          }

          message.captainPlayerId = reader.int32();
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

function createBaseCDOTAUserMsgChatWheelCooldown(): CDOTAUserMsgChatWheelCooldown {
  return { messageId: 0, cooldownRemaining: 0 };
}

export const CDOTAUserMsgChatWheelCooldown = {
  encode(message: CDOTAUserMsgChatWheelCooldown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageId !== 0) {
      writer.uint32(8).uint32(message.messageId);
    }
    if (message.cooldownRemaining !== 0) {
      writer.uint32(21).float(message.cooldownRemaining);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgChatWheelCooldown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgChatWheelCooldown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.messageId = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.cooldownRemaining = reader.float();
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

function createBaseCDOTAUserMsgHeroRelicProgress(): CDOTAUserMsgHeroRelicProgress {
  return { heroRelicType: 0, value: 0, ehandle: 0, eventId: 0, valueDisplay: 0 };
}

export const CDOTAUserMsgHeroRelicProgress = {
  encode(message: CDOTAUserMsgHeroRelicProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroRelicType !== 0) {
      writer.uint32(8).uint32(message.heroRelicType);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    if (message.ehandle !== 0) {
      writer.uint32(24).uint32(message.ehandle);
    }
    if (message.eventId !== 0) {
      writer.uint32(32).uint32(message.eventId);
    }
    if (message.valueDisplay !== 0) {
      writer.uint32(45).float(message.valueDisplay);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgHeroRelicProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgHeroRelicProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.heroRelicType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.value = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.ehandle = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.valueDisplay = reader.float();
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

function createBaseCDOTAUserMsgAbilityDraftRequestAbility(): CDOTAUserMsgAbilityDraftRequestAbility {
  return { playerId: 0, requestedAbilityId: 0, ctrlIsDown: false };
}

export const CDOTAUserMsgAbilityDraftRequestAbility = {
  encode(message: CDOTAUserMsgAbilityDraftRequestAbility, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.requestedAbilityId !== 0) {
      writer.uint32(16).int32(message.requestedAbilityId);
    }
    if (message.ctrlIsDown === true) {
      writer.uint32(24).bool(message.ctrlIsDown);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgAbilityDraftRequestAbility {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgAbilityDraftRequestAbility();
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

          message.requestedAbilityId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.ctrlIsDown = reader.bool();
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

function createBaseCDOTAUserMsgDamageReport(): CDOTAUserMsgDamageReport {
  return { playerId: 0, targetHeroId: 0, sourceHeroId: 0, damageAmount: 0, broadcast: false };
}

export const CDOTAUserMsgDamageReport = {
  encode(message: CDOTAUserMsgDamageReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.targetHeroId !== 0) {
      writer.uint32(16).uint32(message.targetHeroId);
    }
    if (message.sourceHeroId !== 0) {
      writer.uint32(24).uint32(message.sourceHeroId);
    }
    if (message.damageAmount !== 0) {
      writer.uint32(32).int32(message.damageAmount);
    }
    if (message.broadcast === true) {
      writer.uint32(40).bool(message.broadcast);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgDamageReport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgDamageReport();
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

          message.targetHeroId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.sourceHeroId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.damageAmount = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.broadcast = reader.bool();
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

function createBaseCDOTAUserMsgSalutePlayer(): CDOTAUserMsgSalutePlayer {
  return { sourcePlayerId: 0, targetPlayerId: 0, tipAmount: 0, eventId: 0, customTipStyle: "", numRecentTips: 0 };
}

export const CDOTAUserMsgSalutePlayer = {
  encode(message: CDOTAUserMsgSalutePlayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourcePlayerId !== 0) {
      writer.uint32(8).int32(message.sourcePlayerId);
    }
    if (message.targetPlayerId !== 0) {
      writer.uint32(16).int32(message.targetPlayerId);
    }
    if (message.tipAmount !== 0) {
      writer.uint32(24).uint32(message.tipAmount);
    }
    if (message.eventId !== 0) {
      writer.uint32(32).uint32(message.eventId);
    }
    if (message.customTipStyle !== "") {
      writer.uint32(42).string(message.customTipStyle);
    }
    if (message.numRecentTips !== 0) {
      writer.uint32(48).uint32(message.numRecentTips);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgSalutePlayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgSalutePlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sourcePlayerId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetPlayerId = reader.int32();
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

          message.eventId = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.customTipStyle = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.numRecentTips = reader.uint32();
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

function createBaseCDOTAUserMsgTipAlert(): CDOTAUserMsgTipAlert {
  return { playerId: 0, tipText: "" };
}

export const CDOTAUserMsgTipAlert = {
  encode(message: CDOTAUserMsgTipAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.tipText !== "") {
      writer.uint32(18).string(message.tipText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgTipAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgTipAlert();
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
          if (tag != 18) {
            break;
          }

          message.tipText = reader.string();
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

function createBaseCDOTAUserMsgReplaceQueryUnit(): CDOTAUserMsgReplaceQueryUnit {
  return { playerId: 0, sourceEntindex: 0, targetEntindex: 0 };
}

export const CDOTAUserMsgReplaceQueryUnit = {
  encode(message: CDOTAUserMsgReplaceQueryUnit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.sourceEntindex !== 0) {
      writer.uint32(16).int32(message.sourceEntindex);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(24).int32(message.targetEntindex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgReplaceQueryUnit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgReplaceQueryUnit();
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

          message.sourceEntindex = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.targetEntindex = reader.int32();
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

function createBaseCDOTAUserMsgESArcanaCombo(): CDOTAUserMsgESArcanaCombo {
  return { ehandle: 0, comboCount: 0, arcanaLevel: 0 };
}

export const CDOTAUserMsgESArcanaCombo = {
  encode(message: CDOTAUserMsgESArcanaCombo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).uint32(message.ehandle);
    }
    if (message.comboCount !== 0) {
      writer.uint32(16).uint32(message.comboCount);
    }
    if (message.arcanaLevel !== 0) {
      writer.uint32(24).uint32(message.arcanaLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgESArcanaCombo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgESArcanaCombo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.comboCount = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.arcanaLevel = reader.uint32();
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

function createBaseCDOTAUserMsgESArcanaComboSummary(): CDOTAUserMsgESArcanaComboSummary {
  return { ehandle: 0, comboCount: 0, damageAmount: 0 };
}

export const CDOTAUserMsgESArcanaComboSummary = {
  encode(message: CDOTAUserMsgESArcanaComboSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).uint32(message.ehandle);
    }
    if (message.comboCount !== 0) {
      writer.uint32(16).uint32(message.comboCount);
    }
    if (message.damageAmount !== 0) {
      writer.uint32(24).uint32(message.damageAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgESArcanaComboSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgESArcanaComboSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.comboCount = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.damageAmount = reader.uint32();
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

function createBaseCDOTAUserMsgOMArcanaCombo(): CDOTAUserMsgOMArcanaCombo {
  return { ehandle: 0, multicastAmount: 0, arcanaLevel: 0, multicastChance: 0 };
}

export const CDOTAUserMsgOMArcanaCombo = {
  encode(message: CDOTAUserMsgOMArcanaCombo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).uint32(message.ehandle);
    }
    if (message.multicastAmount !== 0) {
      writer.uint32(16).uint32(message.multicastAmount);
    }
    if (message.arcanaLevel !== 0) {
      writer.uint32(24).uint32(message.arcanaLevel);
    }
    if (message.multicastChance !== 0) {
      writer.uint32(32).uint32(message.multicastChance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgOMArcanaCombo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgOMArcanaCombo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.multicastAmount = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.arcanaLevel = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.multicastChance = reader.uint32();
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

function createBaseCDOTAUserMsgHighFiveCompleted(): CDOTAUserMsgHighFiveCompleted {
  return { playerId1: 0, playerId2: 0, specialHighFive: false, specialEntindex: 0 };
}

export const CDOTAUserMsgHighFiveCompleted = {
  encode(message: CDOTAUserMsgHighFiveCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId1 !== 0) {
      writer.uint32(8).int32(message.playerId1);
    }
    if (message.playerId2 !== 0) {
      writer.uint32(16).int32(message.playerId2);
    }
    if (message.specialHighFive === true) {
      writer.uint32(24).bool(message.specialHighFive);
    }
    if (message.specialEntindex !== 0) {
      writer.uint32(32).int32(message.specialEntindex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgHighFiveCompleted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgHighFiveCompleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId1 = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerId2 = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.specialHighFive = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.specialEntindex = reader.int32();
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

function createBaseCDOTAUserMsgHighFiveLeftHanging(): CDOTAUserMsgHighFiveLeftHanging {
  return { playerId: 0 };
}

export const CDOTAUserMsgHighFiveLeftHanging = {
  encode(message: CDOTAUserMsgHighFiveLeftHanging, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgHighFiveLeftHanging {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgHighFiveLeftHanging();
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

function createBaseCDOTAUserMsgShovelUnearth(): CDOTAUserMsgShovelUnearth {
  return { playerId: 0, allChat: false, locstring: "", quantity: 0 };
}

export const CDOTAUserMsgShovelUnearth = {
  encode(message: CDOTAUserMsgShovelUnearth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.allChat === true) {
      writer.uint32(16).bool(message.allChat);
    }
    if (message.locstring !== "") {
      writer.uint32(26).string(message.locstring);
    }
    if (message.quantity !== 0) {
      writer.uint32(32).uint32(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgShovelUnearth {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgShovelUnearth();
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

          message.allChat = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.locstring = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.quantity = reader.uint32();
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

function createBaseCDOTAUserMsgAllStarEvent(): CDOTAUserMsgAllStarEvent {
  return { sourcePlayerId: 0, targetPlayerId: 0, pointAmount: 0, eventId: 0, playerScores: [] };
}

export const CDOTAUserMsgAllStarEvent = {
  encode(message: CDOTAUserMsgAllStarEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourcePlayerId !== 0) {
      writer.uint32(8).int32(message.sourcePlayerId);
    }
    if (message.targetPlayerId !== 0) {
      writer.uint32(16).int32(message.targetPlayerId);
    }
    if (message.pointAmount !== 0) {
      writer.uint32(24).uint32(message.pointAmount);
    }
    if (message.eventId !== 0) {
      writer.uint32(32).uint32(message.eventId);
    }
    for (const v of message.playerScores) {
      CDOTAUserMsgAllStarEvent_PlayerScore.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgAllStarEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgAllStarEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sourcePlayerId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetPlayerId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.pointAmount = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.playerScores.push(CDOTAUserMsgAllStarEvent_PlayerScore.decode(reader, reader.uint32()));
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

function createBaseCDOTAUserMsgAllStarEvent_PlayerScore(): CDOTAUserMsgAllStarEvent_PlayerScore {
  return { playerId: 0, scoreSansKda: 0 };
}

export const CDOTAUserMsgAllStarEvent_PlayerScore = {
  encode(message: CDOTAUserMsgAllStarEvent_PlayerScore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.scoreSansKda !== 0) {
      writer.uint32(16).uint32(message.scoreSansKda);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgAllStarEvent_PlayerScore {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgAllStarEvent_PlayerScore();
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

          message.scoreSansKda = reader.uint32();
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

function createBaseCDOTAUserMsgQueuedOrderRemoved(): CDOTAUserMsgQueuedOrderRemoved {
  return { unitOrderSequence: [] };
}

export const CDOTAUserMsgQueuedOrderRemoved = {
  encode(message: CDOTAUserMsgQueuedOrderRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.unitOrderSequence) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgQueuedOrderRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgQueuedOrderRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.unitOrderSequence.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unitOrderSequence.push(reader.uint32());
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

function createBaseCDOTAUserMsgDebugChallenge(): CDOTAUserMsgDebugChallenge {
  return {
    challengeType: 0,
    challengeQueryId: 0,
    eventId: 0,
    instanceId: 0,
    challengeVar0: 0,
    challengeVar1: 0,
    challengeMaxRank: 0,
  };
}

export const CDOTAUserMsgDebugChallenge = {
  encode(message: CDOTAUserMsgDebugChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challengeType !== 0) {
      writer.uint32(8).uint32(message.challengeType);
    }
    if (message.challengeQueryId !== 0) {
      writer.uint32(16).uint32(message.challengeQueryId);
    }
    if (message.eventId !== 0) {
      writer.uint32(24).uint32(message.eventId);
    }
    if (message.instanceId !== 0) {
      writer.uint32(32).uint32(message.instanceId);
    }
    if (message.challengeVar0 !== 0) {
      writer.uint32(40).uint32(message.challengeVar0);
    }
    if (message.challengeVar1 !== 0) {
      writer.uint32(48).uint32(message.challengeVar1);
    }
    if (message.challengeMaxRank !== 0) {
      writer.uint32(56).uint32(message.challengeMaxRank);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgDebugChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgDebugChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.challengeType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.challengeQueryId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.instanceId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.challengeVar0 = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.challengeVar1 = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.challengeMaxRank = reader.uint32();
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

function createBaseCDOTAUserMsgFoundNeutralItem(): CDOTAUserMsgFoundNeutralItem {
  return { playerId: 0, itemAbilityId: 0, itemTier: 0, tierItemCount: 0 };
}

export const CDOTAUserMsgFoundNeutralItem = {
  encode(message: CDOTAUserMsgFoundNeutralItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.itemAbilityId !== 0) {
      writer.uint32(16).int32(message.itemAbilityId);
    }
    if (message.itemTier !== 0) {
      writer.uint32(24).uint32(message.itemTier);
    }
    if (message.tierItemCount !== 0) {
      writer.uint32(32).uint32(message.tierItemCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgFoundNeutralItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgFoundNeutralItem();
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

          message.itemAbilityId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemTier = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.tierItemCount = reader.uint32();
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

function createBaseCDOTAUserMsgOutpostCaptured(): CDOTAUserMsgOutpostCaptured {
  return { outpostEntindex: 0, teamId: 0 };
}

export const CDOTAUserMsgOutpostCaptured = {
  encode(message: CDOTAUserMsgOutpostCaptured, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.outpostEntindex !== 0) {
      writer.uint32(8).int32(message.outpostEntindex);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).uint32(message.teamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgOutpostCaptured {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgOutpostCaptured();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.outpostEntindex = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
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

function createBaseCDOTAUserMsgOutpostGrantedXP(): CDOTAUserMsgOutpostGrantedXP {
  return { teamId: 0, xpAmount: 0 };
}

export const CDOTAUserMsgOutpostGrantedXP = {
  encode(message: CDOTAUserMsgOutpostGrantedXP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).uint32(message.teamId);
    }
    if (message.xpAmount !== 0) {
      writer.uint32(16).uint32(message.xpAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgOutpostGrantedXP {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgOutpostGrantedXP();
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

          message.xpAmount = reader.uint32();
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

function createBaseCDOTAUserMsgMoveCameraToUnit(): CDOTAUserMsgMoveCameraToUnit {
  return { unitEhandle: 0 };
}

export const CDOTAUserMsgMoveCameraToUnit = {
  encode(message: CDOTAUserMsgMoveCameraToUnit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unitEhandle !== 0) {
      writer.uint32(8).uint32(message.unitEhandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMoveCameraToUnit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMoveCameraToUnit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.unitEhandle = reader.uint32();
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

function createBaseCDOTAUserMsgPauseMinigameData(): CDOTAUserMsgPauseMinigameData {
  return { dataBits: [] };
}

export const CDOTAUserMsgPauseMinigameData = {
  encode(message: CDOTAUserMsgPauseMinigameData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dataBits) {
      CDOTAUserMsgPauseMinigameData_DataBit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPauseMinigameData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPauseMinigameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.dataBits.push(CDOTAUserMsgPauseMinigameData_DataBit.decode(reader, reader.uint32()));
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

function createBaseCDOTAUserMsgPauseMinigameData_DataBit(): CDOTAUserMsgPauseMinigameData_DataBit {
  return { index: 0, data: 0, dataExtra: "0" };
}

export const CDOTAUserMsgPauseMinigameData_DataBit = {
  encode(message: CDOTAUserMsgPauseMinigameData_DataBit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.data !== 0) {
      writer.uint32(16).int32(message.data);
    }
    if (message.dataExtra !== "0") {
      writer.uint32(24).int64(message.dataExtra);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPauseMinigameData_DataBit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPauseMinigameData_DataBit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.data = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.dataExtra = longToString(reader.int64() as Long);
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

function createBaseCDOTAUserMsgVersusScenePlayerBehavior(): CDOTAUserMsgVersusScenePlayerBehavior {
  return { playerId: 0, behavior: 1, playActivity: undefined, chatWheel: undefined, playbackRate: undefined };
}

export const CDOTAUserMsgVersusScenePlayerBehavior = {
  encode(message: CDOTAUserMsgVersusScenePlayerBehavior, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.behavior !== 1) {
      writer.uint32(16).int32(message.behavior);
    }
    if (message.playActivity !== undefined) {
      VersusScenePlayActivity.encode(message.playActivity, writer.uint32(26).fork()).ldelim();
    }
    if (message.chatWheel !== undefined) {
      VersusSceneChatWheel.encode(message.chatWheel, writer.uint32(34).fork()).ldelim();
    }
    if (message.playbackRate !== undefined) {
      VersusScenePlaybackRate.encode(message.playbackRate, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgVersusScenePlayerBehavior {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgVersusScenePlayerBehavior();
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

          message.behavior = reader.int32() as any;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.playActivity = VersusScenePlayActivity.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.chatWheel = VersusSceneChatWheel.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.playbackRate = VersusScenePlaybackRate.decode(reader, reader.uint32());
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

function createBaseCDOTAUserMsgQoPArcanaSummary(): CDOTAUserMsgQoPArcanaSummary {
  return { ehandle: 0, arcanaLevel: 0, playersHit: 0, playersKilled: 0 };
}

export const CDOTAUserMsgQoPArcanaSummary = {
  encode(message: CDOTAUserMsgQoPArcanaSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).uint32(message.ehandle);
    }
    if (message.arcanaLevel !== 0) {
      writer.uint32(16).uint32(message.arcanaLevel);
    }
    if (message.playersHit !== 0) {
      writer.uint32(24).uint32(message.playersHit);
    }
    if (message.playersKilled !== 0) {
      writer.uint32(32).uint32(message.playersKilled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgQoPArcanaSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgQoPArcanaSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.arcanaLevel = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.playersHit = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.playersKilled = reader.uint32();
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

function createBaseCDOTAUserMsgHotPotatoCreated(): CDOTAUserMsgHotPotatoCreated {
  return { playerId1: 0, playerId2: 0 };
}

export const CDOTAUserMsgHotPotatoCreated = {
  encode(message: CDOTAUserMsgHotPotatoCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId1 !== 0) {
      writer.uint32(8).int32(message.playerId1);
    }
    if (message.playerId2 !== 0) {
      writer.uint32(16).int32(message.playerId2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgHotPotatoCreated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgHotPotatoCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId1 = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerId2 = reader.int32();
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

function createBaseCDOTAUserMsgHotPotatoExploded(): CDOTAUserMsgHotPotatoExploded {
  return { playerId: 0 };
}

export const CDOTAUserMsgHotPotatoExploded = {
  encode(message: CDOTAUserMsgHotPotatoExploded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgHotPotatoExploded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgHotPotatoExploded();
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

function createBaseCDOTAUserMsgWKArcanaProgress(): CDOTAUserMsgWKArcanaProgress {
  return { ehandle: 0, arcanaLevel: 0, heroId: 0 };
}

export const CDOTAUserMsgWKArcanaProgress = {
  encode(message: CDOTAUserMsgWKArcanaProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).uint32(message.ehandle);
    }
    if (message.arcanaLevel !== 0) {
      writer.uint32(16).uint32(message.arcanaLevel);
    }
    if (message.heroId !== 0) {
      writer.uint32(24).uint32(message.heroId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgWKArcanaProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgWKArcanaProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.arcanaLevel = reader.uint32();
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

function createBaseCDOTAUserMsgGuildChallengeProgress(): CDOTAUserMsgGuildChallengeProgress {
  return {
    playerProgress: [],
    guildId: 0,
    challengeInstanceId: 0,
    challengeParameter: 0,
    challengeType: 0,
    challengeProgressAtStart: 0,
    complete: false,
  };
}

export const CDOTAUserMsgGuildChallengeProgress = {
  encode(message: CDOTAUserMsgGuildChallengeProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.playerProgress) {
      CDOTAUserMsgGuildChallengeProgress_PlayerProgress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.guildId !== 0) {
      writer.uint32(16).uint32(message.guildId);
    }
    if (message.challengeInstanceId !== 0) {
      writer.uint32(24).uint32(message.challengeInstanceId);
    }
    if (message.challengeParameter !== 0) {
      writer.uint32(32).uint32(message.challengeParameter);
    }
    if (message.challengeType !== 0) {
      writer.uint32(40).int32(message.challengeType);
    }
    if (message.challengeProgressAtStart !== 0) {
      writer.uint32(56).uint32(message.challengeProgressAtStart);
    }
    if (message.complete === true) {
      writer.uint32(64).bool(message.complete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgGuildChallengeProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgGuildChallengeProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playerProgress.push(
            CDOTAUserMsgGuildChallengeProgress_PlayerProgress.decode(reader, reader.uint32()),
          );
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

          message.challengeType = reader.int32() as any;
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.challengeProgressAtStart = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.complete = reader.bool();
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

function createBaseCDOTAUserMsgGuildChallengeProgress_PlayerProgress(): CDOTAUserMsgGuildChallengeProgress_PlayerProgress {
  return { playerId: 0, progress: 0 };
}

export const CDOTAUserMsgGuildChallengeProgress_PlayerProgress = {
  encode(
    message: CDOTAUserMsgGuildChallengeProgress_PlayerProgress,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.progress !== 0) {
      writer.uint32(48).uint32(message.progress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgGuildChallengeProgress_PlayerProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgGuildChallengeProgress_PlayerProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.progress = reader.uint32();
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

function createBaseCDOTAUserMsgWRArcanaProgress(): CDOTAUserMsgWRArcanaProgress {
  return { ehandle: 0, targetEhandle: 0, arrowsLanded: 0, damageDealt: 0, targetHp: 0, targetMaxHp: 0, arcanaLevel: 0 };
}

export const CDOTAUserMsgWRArcanaProgress = {
  encode(message: CDOTAUserMsgWRArcanaProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).uint32(message.ehandle);
    }
    if (message.targetEhandle !== 0) {
      writer.uint32(16).uint32(message.targetEhandle);
    }
    if (message.arrowsLanded !== 0) {
      writer.uint32(24).uint32(message.arrowsLanded);
    }
    if (message.damageDealt !== 0) {
      writer.uint32(32).uint32(message.damageDealt);
    }
    if (message.targetHp !== 0) {
      writer.uint32(40).uint32(message.targetHp);
    }
    if (message.targetMaxHp !== 0) {
      writer.uint32(48).uint32(message.targetMaxHp);
    }
    if (message.arcanaLevel !== 0) {
      writer.uint32(56).uint32(message.arcanaLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgWRArcanaProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgWRArcanaProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetEhandle = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.arrowsLanded = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.damageDealt = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.targetHp = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.targetMaxHp = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.arcanaLevel = reader.uint32();
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

function createBaseCDOTAUserMsgWRArcanaSummary(): CDOTAUserMsgWRArcanaSummary {
  return {
    ehandle: 0,
    targetEhandle: 0,
    arrowsLanded: 0,
    damageDealt: 0,
    targetHp: 0,
    targetMaxHp: 0,
    arcanaLevel: 0,
    success: false,
  };
}

export const CDOTAUserMsgWRArcanaSummary = {
  encode(message: CDOTAUserMsgWRArcanaSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).uint32(message.ehandle);
    }
    if (message.targetEhandle !== 0) {
      writer.uint32(16).uint32(message.targetEhandle);
    }
    if (message.arrowsLanded !== 0) {
      writer.uint32(24).uint32(message.arrowsLanded);
    }
    if (message.damageDealt !== 0) {
      writer.uint32(32).uint32(message.damageDealt);
    }
    if (message.targetHp !== 0) {
      writer.uint32(40).uint32(message.targetHp);
    }
    if (message.targetMaxHp !== 0) {
      writer.uint32(48).uint32(message.targetMaxHp);
    }
    if (message.arcanaLevel !== 0) {
      writer.uint32(56).uint32(message.arcanaLevel);
    }
    if (message.success === true) {
      writer.uint32(64).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgWRArcanaSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgWRArcanaSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetEhandle = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.arrowsLanded = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.damageDealt = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.targetHp = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.targetMaxHp = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.arcanaLevel = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.success = reader.bool();
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

function createBaseCDOTAUserMsgEmptyItemSlotAlert(): CDOTAUserMsgEmptyItemSlotAlert {
  return { sourcePlayerId: 0, targetPlayerId: 0, slotIndex: 0, cooldownSeconds: 0 };
}

export const CDOTAUserMsgEmptyItemSlotAlert = {
  encode(message: CDOTAUserMsgEmptyItemSlotAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourcePlayerId !== 0) {
      writer.uint32(8).int32(message.sourcePlayerId);
    }
    if (message.targetPlayerId !== 0) {
      writer.uint32(16).int32(message.targetPlayerId);
    }
    if (message.slotIndex !== 0) {
      writer.uint32(24).int32(message.slotIndex);
    }
    if (message.cooldownSeconds !== 0) {
      writer.uint32(32).int32(message.cooldownSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgEmptyItemSlotAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgEmptyItemSlotAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sourcePlayerId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetPlayerId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.slotIndex = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.cooldownSeconds = reader.int32();
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

function createBaseCDOTAUserMsgAghsStatusAlert(): CDOTAUserMsgAghsStatusAlert {
  return { sourcePlayerId: 0, targetPlayerId: 0, targetEntindex: 0, alertType: 0, hasScepter: false, hasShard: false };
}

export const CDOTAUserMsgAghsStatusAlert = {
  encode(message: CDOTAUserMsgAghsStatusAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourcePlayerId !== 0) {
      writer.uint32(8).int32(message.sourcePlayerId);
    }
    if (message.targetPlayerId !== 0) {
      writer.uint32(16).int32(message.targetPlayerId);
    }
    if (message.targetEntindex !== 0) {
      writer.uint32(24).int32(message.targetEntindex);
    }
    if (message.alertType !== 0) {
      writer.uint32(32).uint32(message.alertType);
    }
    if (message.hasScepter === true) {
      writer.uint32(40).bool(message.hasScepter);
    }
    if (message.hasShard === true) {
      writer.uint32(48).bool(message.hasShard);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgAghsStatusAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgAghsStatusAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sourcePlayerId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetPlayerId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.targetEntindex = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.alertType = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.hasScepter = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.hasShard = reader.bool();
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

function createBaseCDOTAUserMsgMutedPlayers(): CDOTAUserMsgMutedPlayers {
  return { textMutedPlayerIds: [], voiceMutedPlayerIds: [] };
}

export const CDOTAUserMsgMutedPlayers = {
  encode(message: CDOTAUserMsgMutedPlayers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.textMutedPlayerIds) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.voiceMutedPlayerIds) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMutedPlayers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMutedPlayers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.textMutedPlayerIds.push(reader.int32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.textMutedPlayerIds.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag == 16) {
            message.voiceMutedPlayerIds.push(reader.int32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.voiceMutedPlayerIds.push(reader.int32());
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

function createBaseCDOTAUserMsgContextualTip(): CDOTAUserMsgContextualTip {
  return {
    tipId: 0,
    referencedAbilities: [],
    referencedUnits: [],
    panoramaClasses: [],
    forceAnnotation: false,
    variant: 0,
    intParam: 0,
    intParam2: 0,
    floatParam: 0,
    floatParam2: 0,
    stringParam: "",
    stringParam2: "",
    tipTextOverride: "",
    tipAnnotationOverride: "",
    panoramaSnippet: "",
  };
}

export const CDOTAUserMsgContextualTip = {
  encode(message: CDOTAUserMsgContextualTip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tipId !== 0) {
      writer.uint32(8).int32(message.tipId);
    }
    for (const v of message.referencedAbilities) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.referencedUnits) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.panoramaClasses) {
      writer.uint32(34).string(v!);
    }
    if (message.forceAnnotation === true) {
      writer.uint32(40).bool(message.forceAnnotation);
    }
    if (message.variant !== 0) {
      writer.uint32(48).int32(message.variant);
    }
    if (message.intParam !== 0) {
      writer.uint32(56).int32(message.intParam);
    }
    if (message.intParam2 !== 0) {
      writer.uint32(64).int32(message.intParam2);
    }
    if (message.floatParam !== 0) {
      writer.uint32(77).float(message.floatParam);
    }
    if (message.floatParam2 !== 0) {
      writer.uint32(85).float(message.floatParam2);
    }
    if (message.stringParam !== "") {
      writer.uint32(90).string(message.stringParam);
    }
    if (message.stringParam2 !== "") {
      writer.uint32(98).string(message.stringParam2);
    }
    if (message.tipTextOverride !== "") {
      writer.uint32(106).string(message.tipTextOverride);
    }
    if (message.tipAnnotationOverride !== "") {
      writer.uint32(114).string(message.tipAnnotationOverride);
    }
    if (message.panoramaSnippet !== "") {
      writer.uint32(122).string(message.panoramaSnippet);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgContextualTip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgContextualTip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tipId = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.referencedAbilities.push(reader.string());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.referencedUnits.push(reader.string());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.panoramaClasses.push(reader.string());
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.forceAnnotation = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.variant = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.intParam = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.intParam2 = reader.int32();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.floatParam = reader.float();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.floatParam2 = reader.float();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.stringParam = reader.string();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.stringParam2 = reader.string();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.tipTextOverride = reader.string();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.tipAnnotationOverride = reader.string();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.panoramaSnippet = reader.string();
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

function createBaseCDOTAUserMsgChatMessage(): CDOTAUserMsgChatMessage {
  return { sourcePlayerId: 0, channelType: 0, messageText: "" };
}

export const CDOTAUserMsgChatMessage = {
  encode(message: CDOTAUserMsgChatMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourcePlayerId !== 0) {
      writer.uint32(8).int32(message.sourcePlayerId);
    }
    if (message.channelType !== 0) {
      writer.uint32(16).uint32(message.channelType);
    }
    if (message.messageText !== "") {
      writer.uint32(26).string(message.messageText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgChatMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgChatMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sourcePlayerId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.channelType = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.messageText = reader.string();
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

function createBaseCDOTAUserMsgRockPaperScissorsStarted(): CDOTAUserMsgRockPaperScissorsStarted {
  return { playerIdSource: 0, playerIdTarget: 0 };
}

export const CDOTAUserMsgRockPaperScissorsStarted = {
  encode(message: CDOTAUserMsgRockPaperScissorsStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerIdSource !== 0) {
      writer.uint32(8).int32(message.playerIdSource);
    }
    if (message.playerIdTarget !== 0) {
      writer.uint32(16).int32(message.playerIdTarget);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgRockPaperScissorsStarted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgRockPaperScissorsStarted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerIdSource = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerIdTarget = reader.int32();
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

function createBaseCDOTAUserMsgRockPaperScissorsFinished(): CDOTAUserMsgRockPaperScissorsFinished {
  return { playerId1: 0, playerId2: 0, player1Choice: 0, player2Choice: 0 };
}

export const CDOTAUserMsgRockPaperScissorsFinished = {
  encode(message: CDOTAUserMsgRockPaperScissorsFinished, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId1 !== 0) {
      writer.uint32(8).int32(message.playerId1);
    }
    if (message.playerId2 !== 0) {
      writer.uint32(16).int32(message.playerId2);
    }
    if (message.player1Choice !== 0) {
      writer.uint32(24).int32(message.player1Choice);
    }
    if (message.player2Choice !== 0) {
      writer.uint32(32).int32(message.player2Choice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgRockPaperScissorsFinished {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgRockPaperScissorsFinished();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId1 = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerId2 = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.player1Choice = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.player2Choice = reader.int32();
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

function createBaseCDOTAUserMsgDuelOpponentKilled(): CDOTAUserMsgDuelOpponentKilled {
  return { playerIdWinner: 0, playerIdLoser: 0 };
}

export const CDOTAUserMsgDuelOpponentKilled = {
  encode(message: CDOTAUserMsgDuelOpponentKilled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerIdWinner !== 0) {
      writer.uint32(8).int32(message.playerIdWinner);
    }
    if (message.playerIdLoser !== 0) {
      writer.uint32(16).int32(message.playerIdLoser);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgDuelOpponentKilled {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgDuelOpponentKilled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerIdWinner = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerIdLoser = reader.int32();
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

function createBaseCDOTAUserMsgDuelAccepted(): CDOTAUserMsgDuelAccepted {
  return { playerId1: 0, playerId2: 0 };
}

export const CDOTAUserMsgDuelAccepted = {
  encode(message: CDOTAUserMsgDuelAccepted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId1 !== 0) {
      writer.uint32(8).int32(message.playerId1);
    }
    if (message.playerId2 !== 0) {
      writer.uint32(16).int32(message.playerId2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgDuelAccepted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgDuelAccepted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId1 = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerId2 = reader.int32();
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

function createBaseCDOTAUserMsgDuelRequested(): CDOTAUserMsgDuelRequested {
  return { playerIdRequestor: 0 };
}

export const CDOTAUserMsgDuelRequested = {
  encode(message: CDOTAUserMsgDuelRequested, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerIdRequestor !== 0) {
      writer.uint32(8).int32(message.playerIdRequestor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgDuelRequested {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgDuelRequested();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerIdRequestor = reader.int32();
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

function createBaseCDOTAUserMsgMuertaReleaseEventAssignedTargetKilled(): CDOTAUserMsgMuertaReleaseEventAssignedTargetKilled {
  return { playerIdKiller: 0, playerIdTarget: 0, points: 0, pointsTotal: 0, lastHit: false };
}

export const CDOTAUserMsgMuertaReleaseEventAssignedTargetKilled = {
  encode(
    message: CDOTAUserMsgMuertaReleaseEventAssignedTargetKilled,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playerIdKiller !== 0) {
      writer.uint32(8).int32(message.playerIdKiller);
    }
    if (message.playerIdTarget !== 0) {
      writer.uint32(16).int32(message.playerIdTarget);
    }
    if (message.points !== 0) {
      writer.uint32(24).int32(message.points);
    }
    if (message.pointsTotal !== 0) {
      writer.uint32(32).int32(message.pointsTotal);
    }
    if (message.lastHit === true) {
      writer.uint32(40).bool(message.lastHit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgMuertaReleaseEventAssignedTargetKilled {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgMuertaReleaseEventAssignedTargetKilled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerIdKiller = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerIdTarget = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.points = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.pointsTotal = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.lastHit = reader.bool();
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

function createBaseCDOTAUserMsgPlayerDraftSuggestPick(): CDOTAUserMsgPlayerDraftSuggestPick {
  return { playerId: 0, suggestionPlayerId: 0 };
}

export const CDOTAUserMsgPlayerDraftSuggestPick = {
  encode(message: CDOTAUserMsgPlayerDraftSuggestPick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.suggestionPlayerId !== 0) {
      writer.uint32(16).int32(message.suggestionPlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPlayerDraftSuggestPick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPlayerDraftSuggestPick();
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

          message.suggestionPlayerId = reader.int32();
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

function createBaseCDOTAUserMsgPlayerDraftPick(): CDOTAUserMsgPlayerDraftPick {
  return { playerIdCaptain: 0, playerIdTarget: 0, team: 0 };
}

export const CDOTAUserMsgPlayerDraftPick = {
  encode(message: CDOTAUserMsgPlayerDraftPick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerIdCaptain !== 0) {
      writer.uint32(8).int32(message.playerIdCaptain);
    }
    if (message.playerIdTarget !== 0) {
      writer.uint32(16).int32(message.playerIdTarget);
    }
    if (message.team !== 0) {
      writer.uint32(24).int32(message.team);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAUserMsgPlayerDraftPick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAUserMsgPlayerDraftPick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerIdCaptain = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerIdTarget = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.team = reader.int32();
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
