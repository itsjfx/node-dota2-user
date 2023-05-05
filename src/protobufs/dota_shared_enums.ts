/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export enum DOTAGameMode {
  DOTA_GAMEMODE_NONE = 0,
  DOTA_GAMEMODE_AP = 1,
  DOTA_GAMEMODE_CM = 2,
  DOTA_GAMEMODE_RD = 3,
  DOTA_GAMEMODE_SD = 4,
  DOTA_GAMEMODE_AR = 5,
  DOTA_GAMEMODE_INTRO = 6,
  DOTA_GAMEMODE_HW = 7,
  DOTA_GAMEMODE_REVERSE_CM = 8,
  DOTA_GAMEMODE_XMAS = 9,
  DOTA_GAMEMODE_TUTORIAL = 10,
  DOTA_GAMEMODE_MO = 11,
  DOTA_GAMEMODE_LP = 12,
  DOTA_GAMEMODE_POOL1 = 13,
  DOTA_GAMEMODE_FH = 14,
  DOTA_GAMEMODE_CUSTOM = 15,
  DOTA_GAMEMODE_CD = 16,
  DOTA_GAMEMODE_BD = 17,
  DOTA_GAMEMODE_ABILITY_DRAFT = 18,
  DOTA_GAMEMODE_EVENT = 19,
  DOTA_GAMEMODE_ARDM = 20,
  DOTA_GAMEMODE_1V1MID = 21,
  DOTA_GAMEMODE_ALL_DRAFT = 22,
  DOTA_GAMEMODE_TURBO = 23,
  DOTA_GAMEMODE_MUTATION = 24,
  DOTA_GAMEMODE_COACHES_CHALLENGE = 25,
}

export enum DOTAGameState {
  DOTA_GAMERULES_STATE_INIT = 0,
  DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD = 1,
  DOTA_GAMERULES_STATE_HERO_SELECTION = 2,
  DOTA_GAMERULES_STATE_STRATEGY_TIME = 3,
  DOTA_GAMERULES_STATE_PRE_GAME = 4,
  DOTA_GAMERULES_STATE_GAME_IN_PROGRESS = 5,
  DOTA_GAMERULES_STATE_POST_GAME = 6,
  DOTA_GAMERULES_STATE_DISCONNECT = 7,
  DOTA_GAMERULES_STATE_TEAM_SHOWCASE = 8,
  DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP = 9,
  DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD = 10,
  DOTA_GAMERULES_STATE_SCENARIO_SETUP = 11,
  DOTA_GAMERULES_STATE_PLAYER_DRAFT = 12,
  DOTA_GAMERULES_STATE_LAST = 13,
}

export enum dotaGcTeam {
  DOTA_GC_TEAM_GOOD_GUYS = 0,
  DOTA_GC_TEAM_BAD_GUYS = 1,
  DOTA_GC_TEAM_BROADCASTER = 2,
  DOTA_GC_TEAM_SPECTATOR = 3,
  DOTA_GC_TEAM_PLAYER_POOL = 4,
  DOTA_GC_TEAM_NOTEAM = 5,
  DOTA_GC_TEAM_CUSTOM_1 = 6,
  DOTA_GC_TEAM_CUSTOM_2 = 7,
  DOTA_GC_TEAM_CUSTOM_3 = 8,
  DOTA_GC_TEAM_CUSTOM_4 = 9,
  DOTA_GC_TEAM_CUSTOM_5 = 10,
  DOTA_GC_TEAM_CUSTOM_6 = 11,
  DOTA_GC_TEAM_CUSTOM_7 = 12,
  DOTA_GC_TEAM_CUSTOM_8 = 13,
  DOTA_GC_TEAM_NEUTRALS = 14,
}

export enum EEvent {
  EVENT_ID_NONE = 0,
  EVENT_ID_DIRETIDE = 1,
  EVENT_ID_SPRING_FESTIVAL = 2,
  EVENT_ID_FROSTIVUS_2013 = 3,
  EVENT_ID_COMPENDIUM_2014 = 4,
  EVENT_ID_NEXON_PC_BANG = 5,
  EVENT_ID_PWRD_DAC_2015 = 6,
  EVENT_ID_NEW_BLOOM_2015 = 7,
  EVENT_ID_INTERNATIONAL_2015 = 8,
  EVENT_ID_FALL_MAJOR_2015 = 9,
  EVENT_ID_ORACLE_PA = 10,
  EVENT_ID_NEW_BLOOM_2015_PREBEAST = 11,
  EVENT_ID_FROSTIVUS = 12,
  EVENT_ID_WINTER_MAJOR_2016 = 13,
  EVENT_ID_INTERNATIONAL_2016 = 14,
  EVENT_ID_FALL_MAJOR_2016 = 15,
  EVENT_ID_WINTER_MAJOR_2017 = 16,
  EVENT_ID_NEW_BLOOM_2017 = 17,
  EVENT_ID_INTERNATIONAL_2017 = 18,
  EVENT_ID_PLUS_SUBSCRIPTION = 19,
  EVENT_ID_SINGLES_DAY_2017 = 20,
  EVENT_ID_FROSTIVUS_2017 = 21,
  EVENT_ID_INTERNATIONAL_2018 = 22,
  EVENT_ID_FROSTIVUS_2018 = 23,
  EVENT_ID_NEW_BLOOM_2019 = 24,
  EVENT_ID_INTERNATIONAL_2019 = 25,
  EVENT_ID_NEW_PLAYER_EXPERIENCE = 26,
  EVENT_ID_FROSTIVUS_2019 = 27,
  EVENT_ID_NEW_BLOOM_2020 = 28,
  EVENT_ID_INTERNATIONAL_2020 = 29,
  EVENT_ID_TEAM_FANDOM = 30,
  EVENT_ID_DIRETIDE_2020 = 31,
  EVENT_ID_SPRING_2021 = 32,
  EVENT_ID_FALL_2021 = 33,
  EVENT_ID_TEAM_FANDOM_FALL_2021 = 34,
  EVENT_ID_TEAM_2021_2022_TOUR2 = 35,
  EVENT_ID_INTERNATIONAL_2022 = 36,
  EVENT_ID_TEAM_2021_2022_TOUR3 = 37,
  EVENT_ID_TEAM_INTERNATIONAL_2022 = 38,
  EVENT_ID_PERMANENT_GRANTS = 39,
  EVENT_ID_MUERTA_RELEASE_SPRING2023 = 40,
  EVENT_ID_TEAM_2023_TOUR1 = 41,
  EVENT_ID_TEAM_2023_TOUR2 = 42,
}

export enum ERankType {
  k_ERankType_Invalid = 0,
  k_ERankType_Casual = 1,
  k_ERankType_Ranked = 2,
  k_ERankType_CasualLegacy = 3,
  k_ERankType_RankedLegacy = 4,
  k_ERankType_CasualGlicko = 5,
  k_ERankType_RankedGlicko = 6,
  k_ERankType_CasualRemapped = 7,
  k_ERankType_CasualRemappedGlicko = 8,
  k_ERankType_CasualShiftedGlicko = 9,
}

export enum DOTALeaverStatusT {
  DOTA_LEAVER_NONE = 0,
  DOTA_LEAVER_DISCONNECTED = 1,
  DOTA_LEAVER_DISCONNECTED_TOO_LONG = 2,
  DOTA_LEAVER_ABANDONED = 3,
  DOTA_LEAVER_AFK = 4,
  DOTA_LEAVER_NEVER_CONNECTED = 5,
  DOTA_LEAVER_NEVER_CONNECTED_TOO_LONG = 6,
  DOTA_LEAVER_FAILED_TO_READY_UP = 7,
  DOTA_LEAVER_DECLINED = 8,
}

export enum DOTAConnectionStateT {
  DOTA_CONNECTION_STATE_UNKNOWN = 0,
  DOTA_CONNECTION_STATE_NOT_YET_CONNECTED = 1,
  DOTA_CONNECTION_STATE_CONNECTED = 2,
  DOTA_CONNECTION_STATE_DISCONNECTED = 3,
  DOTA_CONNECTION_STATE_ABANDONED = 4,
  DOTA_CONNECTION_STATE_LOADING = 5,
  DOTA_CONNECTION_STATE_FAILED = 6,
}

export enum FantasyRoles {
  FANTASY_ROLE_UNDEFINED = 0,
  FANTASY_ROLE_CORE = 1,
  FANTASY_ROLE_SUPPORT = 2,
  FANTASY_ROLE_OFFLANE = 3,
  FANTASY_ROLE_MID = 4,
}

export enum FantasyTeamSlots {
  FANTASY_SLOT_NONE = 0,
  FANTASY_SLOT_CORE = 1,
  FANTASY_SLOT_SUPPORT = 2,
  FANTASY_SLOT_ANY = 3,
  FANTASY_SLOT_BENCH = 4,
}

export enum FantasySelectionMode {
  FANTASY_SELECTION_INVALID = 0,
  FANTASY_SELECTION_LOCKED = 1,
  FANTASY_SELECTION_SHUFFLE = 2,
  FANTASY_SELECTION_FREE_PICK = 3,
  FANTASY_SELECTION_ENDED = 4,
  FANTASY_SELECTION_PRE_SEASON = 5,
  FANTASY_SELECTION_PRE_DRAFT = 6,
  FANTASY_SELECTION_DRAFTING = 7,
  FANTASY_SELECTION_REGULAR_SEASON = 8,
  FANTASY_SELECTION_CARD_BASED = 9,
}

export enum DOTAChatChannelTypeT {
  DOTAChannelType_Regional = 0,
  DOTAChannelType_Custom = 1,
  DOTAChannelType_Party = 2,
  DOTAChannelType_Lobby = 3,
  DOTAChannelType_Team = 4,
  DOTAChannelType_Guild = 5,
  DOTAChannelType_Fantasy = 6,
  DOTAChannelType_Whisper = 7,
  DOTAChannelType_Console = 8,
  DOTAChannelType_Tab = 9,
  DOTAChannelType_Invalid = 10,
  DOTAChannelType_GameAll = 11,
  DOTAChannelType_GameAllies = 12,
  DOTAChannelType_GameSpectator = 13,
  DOTAChannelType_GameCoaching = 14,
  DOTAChannelType_Cafe = 15,
  DOTAChannelType_CustomGame = 16,
  DOTAChannelType_Private = 17,
  DOTAChannelType_PostGame = 18,
  DOTAChannelType_BattleCup = 19,
  DOTAChannelType_HLTVSpectator = 20,
  DOTAChannelType_GameEvents = 21,
  DOTAChannelType_Trivia = 22,
  DOTAChannelType_NewPlayer = 23,
  DOTAChannelType_PrivateCoaching = 24,
}

export enum EChatSpecialPrivileges {
  k_EChatSpecialPrivileges_None = 0,
  k_EChatSpecialPrivileges_Moderator = 1,
  k_EChatSpecialPrivileges_SuperModerator = 2,
}

export enum EProfileCardSlotType {
  k_EProfileCardSlotType_Empty = 0,
  k_EProfileCardSlotType_Stat = 1,
  k_EProfileCardSlotType_Trophy = 2,
  k_EProfileCardSlotType_Item = 3,
  k_EProfileCardSlotType_Hero = 4,
  k_EProfileCardSlotType_Emoticon = 5,
  k_EProfileCardSlotType_Team = 6,
}

export enum EMatchGroupServerStatus {
  k_EMatchGroupServerStatus_OK = 0,
  k_EMatchGroupServerStatus_LimitedAvailability = 1,
  k_EMatchGroupServerStatus_Offline = 2,
}

export enum dotaCmPick {
  DOTA_CM_RANDOM = 0,
  DOTA_CM_GOOD_GUYS = 1,
  DOTA_CM_BAD_GUYS = 2,
}

export enum DOTALowPriorityBanType {
  DOTA_LOW_PRIORITY_BAN_ABANDON = 0,
  DOTA_LOW_PRIORITY_BAN_REPORTS = 1,
  DOTA_LOW_PRIORITY_BAN_SECONDARY_ABANDON = 2,
  DOTA_LOW_PRIORITY_BAN_PRE_GAME_ROLE = 3,
}

export enum DOTALobbyReadyState {
  DOTALobbyReadyState_UNDECLARED = 0,
  DOTALobbyReadyState_ACCEPTED = 1,
  DOTALobbyReadyState_DECLINED = 2,
}

export enum DOTAJoinLobbyResult {
  DOTA_JOIN_RESULT_SUCCESS = 0,
  DOTA_JOIN_RESULT_ALREADY_IN_GAME = 1,
  DOTA_JOIN_RESULT_INVALID_LOBBY = 2,
  DOTA_JOIN_RESULT_INCORRECT_PASSWORD = 3,
  DOTA_JOIN_RESULT_ACCESS_DENIED = 4,
  DOTA_JOIN_RESULT_GENERIC_ERROR = 5,
  DOTA_JOIN_RESULT_INCORRECT_VERSION = 6,
  DOTA_JOIN_RESULT_IN_TEAM_PARTY = 7,
  DOTA_JOIN_RESULT_NO_LOBBY_FOUND = 8,
  DOTA_JOIN_RESULT_LOBBY_FULL = 9,
  DOTA_JOIN_RESULT_CUSTOM_GAME_INCORRECT_VERSION = 10,
  DOTA_JOIN_RESULT_TIMEOUT = 11,
  DOTA_JOIN_RESULT_CUSTOM_GAME_COOLDOWN = 12,
  DOTA_JOIN_RESULT_BUSY = 13,
  DOTA_JOIN_RESULT_NO_PLAYTIME = 14,
}

export enum DOTASelectionPriorityRules {
  k_DOTASelectionPriorityRules_Manual = 0,
  k_DOTASelectionPriorityRules_Automatic = 1,
}

export enum DOTASelectionPriorityChoice {
  k_DOTASelectionPriorityChoice_Invalid = 0,
  k_DOTASelectionPriorityChoice_FirstPick = 1,
  k_DOTASelectionPriorityChoice_SecondPick = 2,
  k_DOTASelectionPriorityChoice_Radiant = 3,
  k_DOTASelectionPriorityChoice_Dire = 4,
}

export enum DOTAMatchVote {
  DOTAMatchVote_INVALID = 0,
  DOTAMatchVote_POSITIVE = 1,
  DOTAMatchVote_NEGATIVE = 2,
}

export enum DOTALobbyVisibility {
  DOTALobbyVisibility_Public = 0,
  DOTALobbyVisibility_Friends = 1,
  DOTALobbyVisibility_Unlisted = 2,
}

export enum EDOTAPlayerMMRType {
  k_EDOTAPlayerMMRType_Invalid = 0,
  k_EDOTAPlayerMMRType_GeneralHidden = 1,
  k_EDOTAPlayerMMRType_GeneralCompetitive = 3,
}

export enum EDOTAMMRBoostType {
  k_EDOTAMMRBoostType_None = 0,
  k_EDOTAMMRBoostType_Leader = 1,
  k_EDOTAMMRBoostType_Follower = 2,
}

export enum MatchType {
  MATCH_TYPE_CASUAL = 0,
  MATCH_TYPE_COOP_BOTS = 1,
  MATCH_TYPE_COMPETITIVE = 4,
  MATCH_TYPE_WEEKEND_TOURNEY = 5,
  MATCH_TYPE_EVENT = 7,
  MATCH_TYPE_COACHES_CHALLENGE = 12,
  MATCH_TYPE_NEW_PLAYER_POOL = 14,
}

export enum DOTABotDifficulty {
  BOT_DIFFICULTY_PASSIVE = 0,
  BOT_DIFFICULTY_EASY = 1,
  BOT_DIFFICULTY_MEDIUM = 2,
  BOT_DIFFICULTY_HARD = 3,
  BOT_DIFFICULTY_UNFAIR = 4,
  BOT_DIFFICULTY_INVALID = 5,
  BOT_DIFFICULTY_EXTRA1 = 6,
  BOT_DIFFICULTY_EXTRA2 = 7,
  BOT_DIFFICULTY_EXTRA3 = 8,
  BOT_DIFFICULTY_NPX = 9,
}

export enum dotaBotMode {
  DOTA_BOT_MODE_NONE = 0,
  DOTA_BOT_MODE_LANING = 1,
  DOTA_BOT_MODE_ATTACK = 2,
  DOTA_BOT_MODE_ROAM = 3,
  DOTA_BOT_MODE_RETREAT = 4,
  DOTA_BOT_MODE_SECRET_SHOP = 5,
  DOTA_BOT_MODE_SIDE_SHOP = 6,
  DOTA_BOT_MODE_RUNE = 7,
  DOTA_BOT_MODE_PUSH_TOWER_TOP = 8,
  DOTA_BOT_MODE_PUSH_TOWER_MID = 9,
  DOTA_BOT_MODE_PUSH_TOWER_BOT = 10,
  DOTA_BOT_MODE_DEFEND_TOWER_TOP = 11,
  DOTA_BOT_MODE_DEFEND_TOWER_MID = 12,
  DOTA_BOT_MODE_DEFEND_TOWER_BOT = 13,
  DOTA_BOT_MODE_ASSEMBLE = 14,
  DOTA_BOT_MODE_ASSEMBLE_WITH_HUMANS = 15,
  DOTA_BOT_MODE_TEAM_ROAM = 16,
  DOTA_BOT_MODE_FARM = 17,
  DOTA_BOT_MODE_DEFEND_ALLY = 18,
  DOTA_BOT_MODE_EVASIVE_MANEUVERS = 19,
  DOTA_BOT_MODE_ROSHAN = 20,
  DOTA_BOT_MODE_ITEM = 21,
  DOTA_BOT_MODE_WARD = 22,
  DOTA_BOT_MODE_COMPANION = 23,
  DOTA_BOT_MODE_TUTORIAL_BOSS = 24,
  DOTA_BOT_MODE_MINION = 25,
  DOTA_BOT_MODE_OUTPOST = 26,
}

export enum MatchLanguages {
  MATCH_LANGUAGE_INVALID = 0,
  MATCH_LANGUAGE_ENGLISH = 1,
  MATCH_LANGUAGE_RUSSIAN = 2,
  MATCH_LANGUAGE_CHINESE = 3,
  MATCH_LANGUAGE_KOREAN = 4,
  MATCH_LANGUAGE_SPANISH = 5,
  MATCH_LANGUAGE_PORTUGUESE = 6,
  MATCH_LANGUAGE_ENGLISH2 = 7,
}

export enum ETourneyQueueDeadlineState {
  k_ETourneyQueueDeadlineState_Normal = 0,
  k_ETourneyQueueDeadlineState_Missed = 1,
  k_ETourneyQueueDeadlineState_ExpiredOK = 2,
  k_ETourneyQueueDeadlineState_SeekingBye = 3,
  k_ETourneyQueueDeadlineState_EligibleForRefund = 4,
  k_ETourneyQueueDeadlineState_NA = -1,
  k_ETourneyQueueDeadlineState_ExpiringSoon = 101,
}

export enum EMatchOutcome {
  k_EMatchOutcome_Unknown = 0,
  k_EMatchOutcome_RadVictory = 2,
  k_EMatchOutcome_DireVictory = 3,
  k_EMatchOutcome_NeutralVictory = 4,
  k_EMatchOutcome_NoTeamWinner = 5,
  k_EMatchOutcome_Custom1Victory = 6,
  k_EMatchOutcome_Custom2Victory = 7,
  k_EMatchOutcome_Custom3Victory = 8,
  k_EMatchOutcome_Custom4Victory = 9,
  k_EMatchOutcome_Custom5Victory = 10,
  k_EMatchOutcome_Custom6Victory = 11,
  k_EMatchOutcome_Custom7Victory = 12,
  k_EMatchOutcome_Custom8Victory = 13,
  k_EMatchOutcome_NotScored_PoorNetworkConditions = 64,
  k_EMatchOutcome_NotScored_Leaver = 65,
  k_EMatchOutcome_NotScored_ServerCrash = 66,
  k_EMatchOutcome_NotScored_NeverStarted = 67,
  k_EMatchOutcome_NotScored_Canceled = 68,
  k_EMatchOutcome_NotScored_Suspicious = 69,
}

export enum ELaneType {
  LANE_TYPE_UNKNOWN = 0,
  LANE_TYPE_SAFE = 1,
  LANE_TYPE_OFF = 2,
  LANE_TYPE_MID = 3,
  LANE_TYPE_JUNGLE = 4,
  LANE_TYPE_ROAM = 5,
}

export enum EBadgeType {
  k_EBadgeType_TI7_Midweek = 1,
  k_EBadgeType_TI7_Finals = 2,
  k_EBadgeType_TI7_AllEvent = 3,
  k_EBadgeType_TI8_Midweek = 4,
  k_EBadgeType_TI8_Finals = 5,
  k_EBadgeType_TI8_AllEvent = 6,
  k_EBadgeType_TI10 = 7,
  k_EBadgeType_TI11_PlayoffsDay1 = 8,
  k_EBadgeType_TI11_PlayoffsDay2 = 9,
  k_EBadgeType_TI11_PlayoffsDay3 = 10,
  k_EBadgeType_TI11_PlayoffsDay4 = 11,
  k_EBadgeType_TI11_FinalsWeekend = 12,
}

export enum ELeagueStatus {
  LEAGUE_STATUS_UNSET = 0,
  LEAGUE_STATUS_UNSUBMITTED = 1,
  LEAGUE_STATUS_SUBMITTED = 2,
  LEAGUE_STATUS_ACCEPTED = 3,
  LEAGUE_STATUS_REJECTED = 4,
  LEAGUE_STATUS_CONCLUDED = 5,
  LEAGUE_STATUS_DELETED = 6,
}

export enum ELeagueRegion {
  LEAGUE_REGION_UNSET = 0,
  LEAGUE_REGION_NA = 1,
  LEAGUE_REGION_SA = 2,
  LEAGUE_REGION_WEU = 3,
  LEAGUE_REGION_EEU = 4,
  LEAGUE_REGION_CHINA = 5,
  LEAGUE_REGION_SEA = 6,
}

export enum ELeagueTier {
  LEAGUE_TIER_UNSET = 0,
  LEAGUE_TIER_AMATEUR = 1,
  LEAGUE_TIER_PROFESSIONAL = 2,
  LEAGUE_TIER_MINOR = 3,
  LEAGUE_TIER_MAJOR = 4,
  LEAGUE_TIER_INTERNATIONAL = 5,
  LEAGUE_TIER_DPC_QUALIFIER = 6,
  LEAGUE_TIER_DPC_LEAGUE_QUALIFIER = 7,
  LEAGUE_TIER_DPC_LEAGUE = 8,
  LEAGUE_TIER_DPC_LEAGUE_FINALS = 9,
}

export enum ELeagueTierCategory {
  LEAGUE_TIER_CATEGORY_AMATEUR = 1,
  LEAGUE_TIER_CATEGORY_PROFESSIONAL = 2,
  LEAGUE_TIER_CATEGORY_DPC = 3,
}

export enum ELeagueDivision {
  LEAGUE_DIVISION_UNSET = 0,
  LEAGUE_DIVISION_I = 1,
  LEAGUE_DIVISION_II = 2,
}

export enum ELeagueBroadcastProvider {
  LEAGUE_BROADCAST_UNKNOWN = 0,
  LEAGUE_BROADCAST_STEAM = 1,
  LEAGUE_BROADCAST_TWITCH = 2,
  LEAGUE_BROADCAST_YOUTUBE = 3,
  LEAGUE_BROADCAST_OTHER = 100,
}

export enum ELeaguePhase {
  LEAGUE_PHASE_UNSET = 0,
  LEAGUE_PHASE_REGIONAL_QUALIFIER = 1,
  LEAGUE_PHASE_GROUP_STAGE = 2,
  LEAGUE_PHASE_MAIN_EVENT = 3,
}

export enum ELeagueAuditAction {
  LEAGUE_AUDIT_ACTION_INVALID = 0,
  LEAGUE_AUDIT_ACTION_LEAGUE_CREATE = 1,
  LEAGUE_AUDIT_ACTION_LEAGUE_EDIT = 2,
  LEAGUE_AUDIT_ACTION_LEAGUE_DELETE = 3,
  LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_ADD = 4,
  LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_REVOKE = 5,
  LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_PROMOTE = 6,
  LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_ADD = 7,
  LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_REMOVE = 8,
  LEAGUE_AUDIT_ACTION_LEAGUE_IMAGE_UPDATED = 9,
  LEAGUE_AUDIT_ACTION_LEAGUE_MESSAGE_ADDED = 10,
  LEAGUE_AUDIT_ACTION_LEAGUE_SUBMITTED = 11,
  LEAGUE_AUDIT_ACTION_LEAGUE_SET_PRIZE_POOL = 12,
  LEAGUE_AUDIT_ACTION_LEAGUE_ADD_PRIZE_POOL_ITEM = 13,
  LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_PRIZE_POOL_ITEM = 14,
  LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_START = 15,
  LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_END = 16,
  LEAGUE_AUDIT_ACTION_LEAGUE_ADD_INVITED_TEAM = 17,
  LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_INVITED_TEAM = 18,
  LEAGUE_AUDIT_ACTION_LEAGUE_STATUS_CHANGED = 19,
  LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_EDIT = 20,
  LEAGUE_AUDIT_ACTION_LEAGUE_TEAM_SWAP = 21,
  LEAGUE_AUDIT_ACTION_NODEGROUP_CREATE = 100,
  LEAGUE_AUDIT_ACTION_NODEGROUP_DESTROY = 101,
  LEAGUE_AUDIT_ACTION_NODEGROUP_ADD_TEAM = 102,
  LEAGUE_AUDIT_ACTION_NODEGROUP_REMOVE_TEAM = 103,
  LEAGUE_AUDIT_ACTION_NODEGROUP_SET_ADVANCING = 104,
  LEAGUE_AUDIT_ACTION_NODEGROUP_EDIT = 105,
  LEAGUE_AUDIT_ACTION_NODEGROUP_POPULATE = 106,
  LEAGUE_AUDIT_ACTION_NODEGROUP_COMPLETED = 107,
  LEAGUE_AUDIT_ACTION_NODEGROUP_SET_SECONDARY_ADVANCING = 108,
  LEAGUE_AUDIT_ACTION_NODEGROUP_SET_TERTIARY_ADVANCING = 109,
  LEAGUE_AUDIT_ACTION_NODE_CREATE = 200,
  LEAGUE_AUDIT_ACTION_NODE_DESTROY = 201,
  LEAGUE_AUDIT_ACTION_NODE_AUTOCREATE = 202,
  LEAGUE_AUDIT_ACTION_NODE_SET_TEAM = 203,
  LEAGUE_AUDIT_ACTION_NODE_SET_SERIES_ID = 204,
  LEAGUE_AUDIT_ACTION_NODE_SET_ADVANCING = 205,
  LEAGUE_AUDIT_ACTION_NODE_SET_TIME = 206,
  LEAGUE_AUDIT_ACTION_NODE_MATCH_COMPLETED = 207,
  LEAGUE_AUDIT_ACTION_NODE_COMPLETED = 208,
  LEAGUE_AUDIT_ACTION_NODE_EDIT = 209,
}

export enum dotaCombatlogTypes {
  DOTA_COMBATLOG_INVALID = -1,
  DOTA_COMBATLOG_DAMAGE = 0,
  DOTA_COMBATLOG_HEAL = 1,
  DOTA_COMBATLOG_MODIFIER_ADD = 2,
  DOTA_COMBATLOG_MODIFIER_REMOVE = 3,
  DOTA_COMBATLOG_DEATH = 4,
  DOTA_COMBATLOG_ABILITY = 5,
  DOTA_COMBATLOG_ITEM = 6,
  DOTA_COMBATLOG_LOCATION = 7,
  DOTA_COMBATLOG_GOLD = 8,
  DOTA_COMBATLOG_GAME_STATE = 9,
  DOTA_COMBATLOG_XP = 10,
  DOTA_COMBATLOG_PURCHASE = 11,
  DOTA_COMBATLOG_BUYBACK = 12,
  DOTA_COMBATLOG_ABILITY_TRIGGER = 13,
  DOTA_COMBATLOG_PLAYERSTATS = 14,
  DOTA_COMBATLOG_MULTIKILL = 15,
  DOTA_COMBATLOG_KILLSTREAK = 16,
  DOTA_COMBATLOG_TEAM_BUILDING_KILL = 17,
  DOTA_COMBATLOG_FIRST_BLOOD = 18,
  DOTA_COMBATLOG_MODIFIER_STACK_EVENT = 19,
  DOTA_COMBATLOG_NEUTRAL_CAMP_STACK = 20,
  DOTA_COMBATLOG_PICKUP_RUNE = 21,
  DOTA_COMBATLOG_REVEALED_INVISIBLE = 22,
  DOTA_COMBATLOG_HERO_SAVED = 23,
  DOTA_COMBATLOG_MANA_RESTORED = 24,
  DOTA_COMBATLOG_HERO_LEVELUP = 25,
  DOTA_COMBATLOG_BOTTLE_HEAL_ALLY = 26,
  DOTA_COMBATLOG_ENDGAME_STATS = 27,
  DOTA_COMBATLOG_INTERRUPT_CHANNEL = 28,
  DOTA_COMBATLOG_ALLIED_GOLD = 29,
  DOTA_COMBATLOG_AEGIS_TAKEN = 30,
  DOTA_COMBATLOG_MANA_DAMAGE = 31,
  DOTA_COMBATLOG_PHYSICAL_DAMAGE_PREVENTED = 32,
  DOTA_COMBATLOG_UNIT_SUMMONED = 33,
  DOTA_COMBATLOG_ATTACK_EVADE = 34,
  DOTA_COMBATLOG_TREE_CUT = 35,
  DOTA_COMBATLOG_SUCCESSFUL_SCAN = 36,
  DOTA_COMBATLOG_END_KILLSTREAK = 37,
  DOTA_COMBATLOG_BLOODSTONE_CHARGE = 38,
  DOTA_COMBATLOG_CRITICAL_DAMAGE = 39,
  DOTA_COMBATLOG_SPELL_ABSORB = 40,
  DOTA_COMBATLOG_UNIT_TELEPORTED = 41,
  DOTA_COMBATLOG_KILL_EATER_EVENT = 42,
  DOTA_COMBATLOG_NEUTRAL_ITEM_EARNED = 43,
}

export enum EDPCFavoriteType {
  FAVORITE_TYPE_ALL = 0,
  FAVORITE_TYPE_PLAYER = 1,
  FAVORITE_TYPE_TEAM = 2,
  FAVORITE_TYPE_LEAGUE = 3,
}

export enum EDPCPushNotification {
  DPC_PUSH_NOTIFICATION_MATCH_STARTING = 1,
  DPC_PUSH_NOTIFICATION_PLAYER_LEFT_TEAM = 10,
  DPC_PUSH_NOTIFICATION_PLAYER_JOINED_TEAM = 11,
  DPC_PUSH_NOTIFICATION_PLAYER_JOINED_TEAM_AS_COACH = 12,
  DPC_PUSH_NOTIFICATION_PLAYER_LEFT_TEAM_AS_COACH = 13,
  DPC_PUSH_NOTIFICATION_LEAGUE_RESULT = 20,
  DPC_PUSH_NOTIFICATION_PREDICTION_MATCHES_AVAILABLE = 30,
  DPC_PUSH_NOTIFICATION_PREDICTION_RESULT = 31,
  DPC_PUSH_NOTIFICATION_FANTASY_PLAYER_CLEARED = 40,
  DPC_PUSH_NOTIFICATION_FANTASY_DAILY_SUMMARY = 41,
  DPC_PUSH_NOTIFICATION_FANTASY_FINAL_RESULTS = 42,
}

export enum EEventActionScoreMode {
  k_eEventActionScoreMode_Add = 0,
  k_eEventActionScoreMode_Min = 1,
}

export enum EPlayerChallengeHistoryType {
  k_EPlayerChallengeHistoryType_Invalid = 0,
  k_EPlayerChallengeHistoryType_KillEater = 1,
  k_EPlayerChallengeHistoryType_DotaPlusRelic = 2,
  k_EPlayerChallengeHistoryType_DotaPlusHeroPlayerChallenge = 3,
  k_EPlayerChallengeHistoryType_InGameEventChallenge = 4,
  k_EPlayerChallengeHistoryType_GuildContract = 5,
}

export enum EOverwatchReportReason {
  k_EOverwatchReportReason_Unknown = 0,
  k_EOverwatchReportReason_Cheating = 1,
  k_EOverwatchReportReason_Feeding = 2,
  k_EOverwatchReportReason_Griefing = 3,
  k_EOverwatchReportReason_Suspicious = 4,
  k_EOverwatchReportReason_AbilityAbuse = 5,
}

export interface CDOTAClientHardwareSpecs {
  logicalProcessors: number;
  cpuCyclesPerSecond: string;
  totalPhysicalMemory: string;
  is64BitOs: boolean;
  uploadMeasurement: string;
  preferNotHost: boolean;
}

export interface CDOTASaveGame {
  matchId: string;
  saveTime: number;
  players: CDOTASaveGame_Player[];
  saveInstances: CDOTASaveGame_SaveInstance[];
}

export interface CDOTASaveGame_Player {
  team: dotaGcTeam;
  name: string;
  hero: string;
}

export interface CDOTASaveGame_SaveInstance {
  gameTime: number;
  team1Score: number;
  team2Score: number;
  playerPositions: CDOTASaveGame_SaveInstance_PlayerPositions[];
  saveId: number;
  saveTime: number;
}

export interface CDOTASaveGame_SaveInstance_PlayerPositions {
  x: number;
  y: number;
}

export interface CMsgDOTACombatLogEntry {
  type: dotaCombatlogTypes;
  targetName: number;
  targetSourceName: number;
  attackerName: number;
  damageSourceName: number;
  inflictorName: number;
  isAttackerIllusion: boolean;
  isAttackerHero: boolean;
  isTargetIllusion: boolean;
  isTargetHero: boolean;
  isVisibleRadiant: boolean;
  isVisibleDire: boolean;
  value: number;
  health: number;
  timestamp: number;
  stunDuration: number;
  slowDuration: number;
  isAbilityToggleOn: boolean;
  isAbilityToggleOff: boolean;
  abilityLevel: number;
  locationX: number;
  locationY: number;
  goldReason: number;
  timestampRaw: number;
  modifierDuration: number;
  xpReason: number;
  lastHits: number;
  attackerTeam: number;
  targetTeam: number;
  obsWardsPlaced: number;
  assistPlayer0: number;
  assistPlayer1: number;
  assistPlayer2: number;
  assistPlayer3: number;
  stackCount: number;
  hiddenModifier: boolean;
  isTargetBuilding: boolean;
  neutralCampType: number;
  runeType: number;
  assistPlayers: number[];
  isHealSave: boolean;
  isUltimateAbility: boolean;
  attackerHeroLevel: number;
  targetHeroLevel: number;
  xpm: number;
  gpm: number;
  eventLocation: number;
  targetIsSelf: boolean;
  damageType: number;
  invisibilityModifier: boolean;
  damageCategory: number;
  networth: number;
  buildingType: number;
  modifierElapsedDuration: number;
  silenceModifier: boolean;
  healFromLifesteal: boolean;
  modifierPurged: boolean;
  spellEvaded: boolean;
  motionControllerModifier: boolean;
  longRangeKill: boolean;
  modifierPurgeAbility: number;
  modifierPurgeNpc: number;
  rootModifier: boolean;
  totalUnitDeathCount: number;
  auraModifier: boolean;
  armorDebuffModifier: boolean;
  noPhysicalDamageModifier: boolean;
  modifierAbility: number;
  modifierHidden: boolean;
  inflictorIsStolenAbility: boolean;
  killEaterEvent: number;
  unitStatusLabel: number;
  spellGeneratedAttack: boolean;
  atNightTime: boolean;
  attackerHasScepter: boolean;
  neutralCampTeam: number;
  regeneratedHealth: number;
  willReincarnate: boolean;
  usesCharges: boolean;
}

export interface CMsgPendingEventAward {
  eventId: EEvent;
  actionId: number;
  numToGrant: number;
  scoreMode: EEventActionScoreMode;
  auditAction: number;
  auditData: string;
}

function createBaseCDOTAClientHardwareSpecs(): CDOTAClientHardwareSpecs {
  return {
    logicalProcessors: 0,
    cpuCyclesPerSecond: "0",
    totalPhysicalMemory: "0",
    is64BitOs: false,
    uploadMeasurement: "0",
    preferNotHost: false,
  };
}

export const CDOTAClientHardwareSpecs = {
  encode(message: CDOTAClientHardwareSpecs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logicalProcessors !== 0) {
      writer.uint32(8).uint32(message.logicalProcessors);
    }
    if (message.cpuCyclesPerSecond !== "0") {
      writer.uint32(17).fixed64(message.cpuCyclesPerSecond);
    }
    if (message.totalPhysicalMemory !== "0") {
      writer.uint32(25).fixed64(message.totalPhysicalMemory);
    }
    if (message.is64BitOs === true) {
      writer.uint32(32).bool(message.is64BitOs);
    }
    if (message.uploadMeasurement !== "0") {
      writer.uint32(40).uint64(message.uploadMeasurement);
    }
    if (message.preferNotHost === true) {
      writer.uint32(48).bool(message.preferNotHost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAClientHardwareSpecs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAClientHardwareSpecs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.logicalProcessors = reader.uint32();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.cpuCyclesPerSecond = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.totalPhysicalMemory = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.is64BitOs = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.uploadMeasurement = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.preferNotHost = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCDOTASaveGame(): CDOTASaveGame {
  return { matchId: "0", saveTime: 0, players: [], saveInstances: [] };
}

export const CDOTASaveGame = {
  encode(message: CDOTASaveGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(40).uint64(message.matchId);
    }
    if (message.saveTime !== 0) {
      writer.uint32(16).uint32(message.saveTime);
    }
    for (const v of message.players) {
      CDOTASaveGame_Player.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.saveInstances) {
      CDOTASaveGame_SaveInstance.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTASaveGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTASaveGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag != 40) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.saveTime = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.players.push(CDOTASaveGame_Player.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.saveInstances.push(CDOTASaveGame_SaveInstance.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCDOTASaveGame_Player(): CDOTASaveGame_Player {
  return { team: 0, name: "", hero: "" };
}

export const CDOTASaveGame_Player = {
  encode(message: CDOTASaveGame_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.team !== 0) {
      writer.uint32(8).int32(message.team);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.hero !== "") {
      writer.uint32(26).string(message.hero);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTASaveGame_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTASaveGame_Player();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.team = reader.int32() as any;
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

          message.hero = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCDOTASaveGame_SaveInstance(): CDOTASaveGame_SaveInstance {
  return { gameTime: 0, team1Score: 0, team2Score: 0, playerPositions: [], saveId: 0, saveTime: 0 };
}

export const CDOTASaveGame_SaveInstance = {
  encode(message: CDOTASaveGame_SaveInstance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameTime !== 0) {
      writer.uint32(16).uint32(message.gameTime);
    }
    if (message.team1Score !== 0) {
      writer.uint32(24).uint32(message.team1Score);
    }
    if (message.team2Score !== 0) {
      writer.uint32(32).uint32(message.team2Score);
    }
    for (const v of message.playerPositions) {
      CDOTASaveGame_SaveInstance_PlayerPositions.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.saveId !== 0) {
      writer.uint32(48).uint32(message.saveId);
    }
    if (message.saveTime !== 0) {
      writer.uint32(56).uint32(message.saveTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTASaveGame_SaveInstance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTASaveGame_SaveInstance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.gameTime = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.team1Score = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.team2Score = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.playerPositions.push(CDOTASaveGame_SaveInstance_PlayerPositions.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.saveId = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.saveTime = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCDOTASaveGame_SaveInstance_PlayerPositions(): CDOTASaveGame_SaveInstance_PlayerPositions {
  return { x: 0, y: 0 };
}

export const CDOTASaveGame_SaveInstance_PlayerPositions = {
  encode(message: CDOTASaveGame_SaveInstance_PlayerPositions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTASaveGame_SaveInstance_PlayerPositions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTASaveGame_SaveInstance_PlayerPositions();
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
};

function createBaseCMsgDOTACombatLogEntry(): CMsgDOTACombatLogEntry {
  return {
    type: 0,
    targetName: 0,
    targetSourceName: 0,
    attackerName: 0,
    damageSourceName: 0,
    inflictorName: 0,
    isAttackerIllusion: false,
    isAttackerHero: false,
    isTargetIllusion: false,
    isTargetHero: false,
    isVisibleRadiant: false,
    isVisibleDire: false,
    value: 0,
    health: 0,
    timestamp: 0,
    stunDuration: 0,
    slowDuration: 0,
    isAbilityToggleOn: false,
    isAbilityToggleOff: false,
    abilityLevel: 0,
    locationX: 0,
    locationY: 0,
    goldReason: 0,
    timestampRaw: 0,
    modifierDuration: 0,
    xpReason: 0,
    lastHits: 0,
    attackerTeam: 0,
    targetTeam: 0,
    obsWardsPlaced: 0,
    assistPlayer0: 0,
    assistPlayer1: 0,
    assistPlayer2: 0,
    assistPlayer3: 0,
    stackCount: 0,
    hiddenModifier: false,
    isTargetBuilding: false,
    neutralCampType: 0,
    runeType: 0,
    assistPlayers: [],
    isHealSave: false,
    isUltimateAbility: false,
    attackerHeroLevel: 0,
    targetHeroLevel: 0,
    xpm: 0,
    gpm: 0,
    eventLocation: 0,
    targetIsSelf: false,
    damageType: 0,
    invisibilityModifier: false,
    damageCategory: 0,
    networth: 0,
    buildingType: 0,
    modifierElapsedDuration: 0,
    silenceModifier: false,
    healFromLifesteal: false,
    modifierPurged: false,
    spellEvaded: false,
    motionControllerModifier: false,
    longRangeKill: false,
    modifierPurgeAbility: 0,
    modifierPurgeNpc: 0,
    rootModifier: false,
    totalUnitDeathCount: 0,
    auraModifier: false,
    armorDebuffModifier: false,
    noPhysicalDamageModifier: false,
    modifierAbility: 0,
    modifierHidden: false,
    inflictorIsStolenAbility: false,
    killEaterEvent: 0,
    unitStatusLabel: 0,
    spellGeneratedAttack: false,
    atNightTime: false,
    attackerHasScepter: false,
    neutralCampTeam: 0,
    regeneratedHealth: 0,
    willReincarnate: false,
    usesCharges: false,
  };
}

export const CMsgDOTACombatLogEntry = {
  encode(message: CMsgDOTACombatLogEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.targetName !== 0) {
      writer.uint32(16).uint32(message.targetName);
    }
    if (message.targetSourceName !== 0) {
      writer.uint32(24).uint32(message.targetSourceName);
    }
    if (message.attackerName !== 0) {
      writer.uint32(32).uint32(message.attackerName);
    }
    if (message.damageSourceName !== 0) {
      writer.uint32(40).uint32(message.damageSourceName);
    }
    if (message.inflictorName !== 0) {
      writer.uint32(48).uint32(message.inflictorName);
    }
    if (message.isAttackerIllusion === true) {
      writer.uint32(56).bool(message.isAttackerIllusion);
    }
    if (message.isAttackerHero === true) {
      writer.uint32(64).bool(message.isAttackerHero);
    }
    if (message.isTargetIllusion === true) {
      writer.uint32(72).bool(message.isTargetIllusion);
    }
    if (message.isTargetHero === true) {
      writer.uint32(80).bool(message.isTargetHero);
    }
    if (message.isVisibleRadiant === true) {
      writer.uint32(88).bool(message.isVisibleRadiant);
    }
    if (message.isVisibleDire === true) {
      writer.uint32(96).bool(message.isVisibleDire);
    }
    if (message.value !== 0) {
      writer.uint32(104).uint32(message.value);
    }
    if (message.health !== 0) {
      writer.uint32(112).int32(message.health);
    }
    if (message.timestamp !== 0) {
      writer.uint32(125).float(message.timestamp);
    }
    if (message.stunDuration !== 0) {
      writer.uint32(133).float(message.stunDuration);
    }
    if (message.slowDuration !== 0) {
      writer.uint32(141).float(message.slowDuration);
    }
    if (message.isAbilityToggleOn === true) {
      writer.uint32(144).bool(message.isAbilityToggleOn);
    }
    if (message.isAbilityToggleOff === true) {
      writer.uint32(152).bool(message.isAbilityToggleOff);
    }
    if (message.abilityLevel !== 0) {
      writer.uint32(160).uint32(message.abilityLevel);
    }
    if (message.locationX !== 0) {
      writer.uint32(173).float(message.locationX);
    }
    if (message.locationY !== 0) {
      writer.uint32(181).float(message.locationY);
    }
    if (message.goldReason !== 0) {
      writer.uint32(184).uint32(message.goldReason);
    }
    if (message.timestampRaw !== 0) {
      writer.uint32(197).float(message.timestampRaw);
    }
    if (message.modifierDuration !== 0) {
      writer.uint32(205).float(message.modifierDuration);
    }
    if (message.xpReason !== 0) {
      writer.uint32(208).uint32(message.xpReason);
    }
    if (message.lastHits !== 0) {
      writer.uint32(216).uint32(message.lastHits);
    }
    if (message.attackerTeam !== 0) {
      writer.uint32(224).uint32(message.attackerTeam);
    }
    if (message.targetTeam !== 0) {
      writer.uint32(232).uint32(message.targetTeam);
    }
    if (message.obsWardsPlaced !== 0) {
      writer.uint32(240).uint32(message.obsWardsPlaced);
    }
    if (message.assistPlayer0 !== 0) {
      writer.uint32(248).uint32(message.assistPlayer0);
    }
    if (message.assistPlayer1 !== 0) {
      writer.uint32(256).uint32(message.assistPlayer1);
    }
    if (message.assistPlayer2 !== 0) {
      writer.uint32(264).uint32(message.assistPlayer2);
    }
    if (message.assistPlayer3 !== 0) {
      writer.uint32(272).uint32(message.assistPlayer3);
    }
    if (message.stackCount !== 0) {
      writer.uint32(280).uint32(message.stackCount);
    }
    if (message.hiddenModifier === true) {
      writer.uint32(288).bool(message.hiddenModifier);
    }
    if (message.isTargetBuilding === true) {
      writer.uint32(296).bool(message.isTargetBuilding);
    }
    if (message.neutralCampType !== 0) {
      writer.uint32(304).uint32(message.neutralCampType);
    }
    if (message.runeType !== 0) {
      writer.uint32(312).uint32(message.runeType);
    }
    writer.uint32(322).fork();
    for (const v of message.assistPlayers) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.isHealSave === true) {
      writer.uint32(328).bool(message.isHealSave);
    }
    if (message.isUltimateAbility === true) {
      writer.uint32(336).bool(message.isUltimateAbility);
    }
    if (message.attackerHeroLevel !== 0) {
      writer.uint32(344).uint32(message.attackerHeroLevel);
    }
    if (message.targetHeroLevel !== 0) {
      writer.uint32(352).uint32(message.targetHeroLevel);
    }
    if (message.xpm !== 0) {
      writer.uint32(360).uint32(message.xpm);
    }
    if (message.gpm !== 0) {
      writer.uint32(368).uint32(message.gpm);
    }
    if (message.eventLocation !== 0) {
      writer.uint32(376).uint32(message.eventLocation);
    }
    if (message.targetIsSelf === true) {
      writer.uint32(384).bool(message.targetIsSelf);
    }
    if (message.damageType !== 0) {
      writer.uint32(392).uint32(message.damageType);
    }
    if (message.invisibilityModifier === true) {
      writer.uint32(400).bool(message.invisibilityModifier);
    }
    if (message.damageCategory !== 0) {
      writer.uint32(408).uint32(message.damageCategory);
    }
    if (message.networth !== 0) {
      writer.uint32(416).uint32(message.networth);
    }
    if (message.buildingType !== 0) {
      writer.uint32(424).uint32(message.buildingType);
    }
    if (message.modifierElapsedDuration !== 0) {
      writer.uint32(437).float(message.modifierElapsedDuration);
    }
    if (message.silenceModifier === true) {
      writer.uint32(440).bool(message.silenceModifier);
    }
    if (message.healFromLifesteal === true) {
      writer.uint32(448).bool(message.healFromLifesteal);
    }
    if (message.modifierPurged === true) {
      writer.uint32(456).bool(message.modifierPurged);
    }
    if (message.spellEvaded === true) {
      writer.uint32(464).bool(message.spellEvaded);
    }
    if (message.motionControllerModifier === true) {
      writer.uint32(472).bool(message.motionControllerModifier);
    }
    if (message.longRangeKill === true) {
      writer.uint32(480).bool(message.longRangeKill);
    }
    if (message.modifierPurgeAbility !== 0) {
      writer.uint32(488).uint32(message.modifierPurgeAbility);
    }
    if (message.modifierPurgeNpc !== 0) {
      writer.uint32(496).uint32(message.modifierPurgeNpc);
    }
    if (message.rootModifier === true) {
      writer.uint32(504).bool(message.rootModifier);
    }
    if (message.totalUnitDeathCount !== 0) {
      writer.uint32(512).uint32(message.totalUnitDeathCount);
    }
    if (message.auraModifier === true) {
      writer.uint32(520).bool(message.auraModifier);
    }
    if (message.armorDebuffModifier === true) {
      writer.uint32(528).bool(message.armorDebuffModifier);
    }
    if (message.noPhysicalDamageModifier === true) {
      writer.uint32(536).bool(message.noPhysicalDamageModifier);
    }
    if (message.modifierAbility !== 0) {
      writer.uint32(544).uint32(message.modifierAbility);
    }
    if (message.modifierHidden === true) {
      writer.uint32(552).bool(message.modifierHidden);
    }
    if (message.inflictorIsStolenAbility === true) {
      writer.uint32(560).bool(message.inflictorIsStolenAbility);
    }
    if (message.killEaterEvent !== 0) {
      writer.uint32(568).uint32(message.killEaterEvent);
    }
    if (message.unitStatusLabel !== 0) {
      writer.uint32(576).uint32(message.unitStatusLabel);
    }
    if (message.spellGeneratedAttack === true) {
      writer.uint32(584).bool(message.spellGeneratedAttack);
    }
    if (message.atNightTime === true) {
      writer.uint32(592).bool(message.atNightTime);
    }
    if (message.attackerHasScepter === true) {
      writer.uint32(600).bool(message.attackerHasScepter);
    }
    if (message.neutralCampTeam !== 0) {
      writer.uint32(608).uint32(message.neutralCampTeam);
    }
    if (message.regeneratedHealth !== 0) {
      writer.uint32(621).float(message.regeneratedHealth);
    }
    if (message.willReincarnate === true) {
      writer.uint32(624).bool(message.willReincarnate);
    }
    if (message.usesCharges === true) {
      writer.uint32(632).bool(message.usesCharges);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTACombatLogEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTACombatLogEntry();
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

          message.targetName = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.targetSourceName = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.attackerName = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.damageSourceName = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.inflictorName = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.isAttackerIllusion = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.isAttackerHero = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.isTargetIllusion = reader.bool();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.isTargetHero = reader.bool();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.isVisibleRadiant = reader.bool();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.isVisibleDire = reader.bool();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.value = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.health = reader.int32();
          continue;
        case 15:
          if (tag != 125) {
            break;
          }

          message.timestamp = reader.float();
          continue;
        case 16:
          if (tag != 133) {
            break;
          }

          message.stunDuration = reader.float();
          continue;
        case 17:
          if (tag != 141) {
            break;
          }

          message.slowDuration = reader.float();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.isAbilityToggleOn = reader.bool();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.isAbilityToggleOff = reader.bool();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.abilityLevel = reader.uint32();
          continue;
        case 21:
          if (tag != 173) {
            break;
          }

          message.locationX = reader.float();
          continue;
        case 22:
          if (tag != 181) {
            break;
          }

          message.locationY = reader.float();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.goldReason = reader.uint32();
          continue;
        case 24:
          if (tag != 197) {
            break;
          }

          message.timestampRaw = reader.float();
          continue;
        case 25:
          if (tag != 205) {
            break;
          }

          message.modifierDuration = reader.float();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.xpReason = reader.uint32();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.lastHits = reader.uint32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.attackerTeam = reader.uint32();
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.targetTeam = reader.uint32();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.obsWardsPlaced = reader.uint32();
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.assistPlayer0 = reader.uint32();
          continue;
        case 32:
          if (tag != 256) {
            break;
          }

          message.assistPlayer1 = reader.uint32();
          continue;
        case 33:
          if (tag != 264) {
            break;
          }

          message.assistPlayer2 = reader.uint32();
          continue;
        case 34:
          if (tag != 272) {
            break;
          }

          message.assistPlayer3 = reader.uint32();
          continue;
        case 35:
          if (tag != 280) {
            break;
          }

          message.stackCount = reader.uint32();
          continue;
        case 36:
          if (tag != 288) {
            break;
          }

          message.hiddenModifier = reader.bool();
          continue;
        case 37:
          if (tag != 296) {
            break;
          }

          message.isTargetBuilding = reader.bool();
          continue;
        case 38:
          if (tag != 304) {
            break;
          }

          message.neutralCampType = reader.uint32();
          continue;
        case 39:
          if (tag != 312) {
            break;
          }

          message.runeType = reader.uint32();
          continue;
        case 40:
          if (tag == 320) {
            message.assistPlayers.push(reader.int32());
            continue;
          }

          if (tag == 322) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.assistPlayers.push(reader.int32());
            }

            continue;
          }

          break;
        case 41:
          if (tag != 328) {
            break;
          }

          message.isHealSave = reader.bool();
          continue;
        case 42:
          if (tag != 336) {
            break;
          }

          message.isUltimateAbility = reader.bool();
          continue;
        case 43:
          if (tag != 344) {
            break;
          }

          message.attackerHeroLevel = reader.uint32();
          continue;
        case 44:
          if (tag != 352) {
            break;
          }

          message.targetHeroLevel = reader.uint32();
          continue;
        case 45:
          if (tag != 360) {
            break;
          }

          message.xpm = reader.uint32();
          continue;
        case 46:
          if (tag != 368) {
            break;
          }

          message.gpm = reader.uint32();
          continue;
        case 47:
          if (tag != 376) {
            break;
          }

          message.eventLocation = reader.uint32();
          continue;
        case 48:
          if (tag != 384) {
            break;
          }

          message.targetIsSelf = reader.bool();
          continue;
        case 49:
          if (tag != 392) {
            break;
          }

          message.damageType = reader.uint32();
          continue;
        case 50:
          if (tag != 400) {
            break;
          }

          message.invisibilityModifier = reader.bool();
          continue;
        case 51:
          if (tag != 408) {
            break;
          }

          message.damageCategory = reader.uint32();
          continue;
        case 52:
          if (tag != 416) {
            break;
          }

          message.networth = reader.uint32();
          continue;
        case 53:
          if (tag != 424) {
            break;
          }

          message.buildingType = reader.uint32();
          continue;
        case 54:
          if (tag != 437) {
            break;
          }

          message.modifierElapsedDuration = reader.float();
          continue;
        case 55:
          if (tag != 440) {
            break;
          }

          message.silenceModifier = reader.bool();
          continue;
        case 56:
          if (tag != 448) {
            break;
          }

          message.healFromLifesteal = reader.bool();
          continue;
        case 57:
          if (tag != 456) {
            break;
          }

          message.modifierPurged = reader.bool();
          continue;
        case 58:
          if (tag != 464) {
            break;
          }

          message.spellEvaded = reader.bool();
          continue;
        case 59:
          if (tag != 472) {
            break;
          }

          message.motionControllerModifier = reader.bool();
          continue;
        case 60:
          if (tag != 480) {
            break;
          }

          message.longRangeKill = reader.bool();
          continue;
        case 61:
          if (tag != 488) {
            break;
          }

          message.modifierPurgeAbility = reader.uint32();
          continue;
        case 62:
          if (tag != 496) {
            break;
          }

          message.modifierPurgeNpc = reader.uint32();
          continue;
        case 63:
          if (tag != 504) {
            break;
          }

          message.rootModifier = reader.bool();
          continue;
        case 64:
          if (tag != 512) {
            break;
          }

          message.totalUnitDeathCount = reader.uint32();
          continue;
        case 65:
          if (tag != 520) {
            break;
          }

          message.auraModifier = reader.bool();
          continue;
        case 66:
          if (tag != 528) {
            break;
          }

          message.armorDebuffModifier = reader.bool();
          continue;
        case 67:
          if (tag != 536) {
            break;
          }

          message.noPhysicalDamageModifier = reader.bool();
          continue;
        case 68:
          if (tag != 544) {
            break;
          }

          message.modifierAbility = reader.uint32();
          continue;
        case 69:
          if (tag != 552) {
            break;
          }

          message.modifierHidden = reader.bool();
          continue;
        case 70:
          if (tag != 560) {
            break;
          }

          message.inflictorIsStolenAbility = reader.bool();
          continue;
        case 71:
          if (tag != 568) {
            break;
          }

          message.killEaterEvent = reader.uint32();
          continue;
        case 72:
          if (tag != 576) {
            break;
          }

          message.unitStatusLabel = reader.uint32();
          continue;
        case 73:
          if (tag != 584) {
            break;
          }

          message.spellGeneratedAttack = reader.bool();
          continue;
        case 74:
          if (tag != 592) {
            break;
          }

          message.atNightTime = reader.bool();
          continue;
        case 75:
          if (tag != 600) {
            break;
          }

          message.attackerHasScepter = reader.bool();
          continue;
        case 76:
          if (tag != 608) {
            break;
          }

          message.neutralCampTeam = reader.uint32();
          continue;
        case 77:
          if (tag != 621) {
            break;
          }

          message.regeneratedHealth = reader.float();
          continue;
        case 78:
          if (tag != 624) {
            break;
          }

          message.willReincarnate = reader.bool();
          continue;
        case 79:
          if (tag != 632) {
            break;
          }

          message.usesCharges = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgPendingEventAward(): CMsgPendingEventAward {
  return { eventId: 0, actionId: 0, numToGrant: 0, scoreMode: 0, auditAction: 0, auditData: "0" };
}

export const CMsgPendingEventAward = {
  encode(message: CMsgPendingEventAward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.actionId !== 0) {
      writer.uint32(16).uint32(message.actionId);
    }
    if (message.numToGrant !== 0) {
      writer.uint32(24).uint32(message.numToGrant);
    }
    if (message.scoreMode !== 0) {
      writer.uint32(32).int32(message.scoreMode);
    }
    if (message.auditAction !== 0) {
      writer.uint32(40).uint32(message.auditAction);
    }
    if (message.auditData !== "0") {
      writer.uint32(48).uint64(message.auditData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPendingEventAward {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPendingEventAward();
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

          message.actionId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.numToGrant = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.scoreMode = reader.int32() as any;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.auditAction = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.auditData = longToString(reader.uint64() as Long);
          continue;
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
