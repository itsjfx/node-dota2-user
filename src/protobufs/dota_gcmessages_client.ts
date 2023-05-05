/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CSOEconItem } from "./base_gcmessages";
import {
  CMatchClip,
  CMsgArcanaVoteMatchVotes,
  CMsgDOTAMatch,
  CMsgDOTASDOHeroStatsHistory,
  CMsgDOTATriviaQuestion,
  CMsgGlobalMapStats,
  CMsgMapStatsSnapshot,
  CMsgPlayerHeroRecentAccomplishments,
  CMsgPlayerRecentAccomplishments,
  CMsgRecentMatchInfo,
  CMsgStickerbook,
  CMsgStickerbookPage,
  CMsgStickerbookSticker,
  CMsgStickerbookTeamPageOrderSequence,
  CMsgStickerHeroes,
  CMsgSuccessfulHero,
  CMsgUnderDraftData,
  CPartySearchClientParty,
  EHeroRelicRarity,
  EOverwatchConviction,
  EStickerbookPageType,
} from "./dota_gcmessages_common";
import { CSODOTALobby_State } from "./dota_gcmessages_common_lobby";
import { CSODOTAParty_State } from "./dota_gcmessages_common_match_management";
import {
  DOTAGameMode,
  DOTAMatchVote,
  DOTASelectionPriorityChoice,
  EDPCFavoriteType,
  EEvent,
  ELeagueRegion,
  EMatchGroupServerStatus,
  EOverwatchReportReason,
  EProfileCardSlotType,
  ERankType,
  MatchType,
} from "./dota_shared_enums";
import { CExtraMsgBlock } from "./gcsdk_gcmessages";

export enum CMsgDOTARequestMatchesSkillLevel {
  CMsgDOTARequestMatches_SkillLevel_Any = 0,
  CMsgDOTARequestMatches_SkillLevel_Normal = 1,
  CMsgDOTARequestMatches_SkillLevel_High = 2,
  CMsgDOTARequestMatches_SkillLevel_VeryHigh = 3,
}

export enum DOTAWatchReplayType {
  DOTA_WATCH_REPLAY_NORMAL = 0,
  DOTA_WATCH_REPLAY_HIGHLIGHTS = 1,
}

export enum EItemEditorReservationResult {
  k_EItemEditorReservationResult_OK = 1,
  k_EItemEditorReservationResult_AlreadyExists = 2,
  k_EItemEditorReservationResult_Reserved = 3,
  k_EItemEditorReservationResult_TimedOut = 4,
}

export enum EWeekendTourneyRichPresenceEvent {
  k_EWeekendTourneyRichPresenceEvent_None = 0,
  k_EWeekendTourneyRichPresenceEvent_StartedMatch = 1,
  k_EWeekendTourneyRichPresenceEvent_WonMatch = 2,
  k_EWeekendTourneyRichPresenceEvent_Eliminated = 3,
}

export enum EDOTATriviaAnswerResult {
  k_EDOTATriviaAnswerResult_Success = 0,
  k_EDOTATriviaAnswerResult_InvalidQuestion = 1,
  k_EDOTATriviaAnswerResult_InvalidAnswer = 2,
  k_EDOTATriviaAnswerResult_QuestionLocked = 3,
  k_EDOTATriviaAnswerResult_AlreadyAnswered = 4,
  k_EDOTATriviaAnswerResult_TriviaDisabled = 5,
}

export enum EPurchaseHeroRelicResult {
  k_EPurchaseHeroRelicResult_Success = 0,
  k_EPurchaseHeroRelicResult_FailedToSend = 1,
  k_EPurchaseHeroRelicResult_NotEnoughPoints = 2,
  k_EPurchaseHeroRelicResult_InternalServerError = 3,
  k_EPurchaseHeroRelicResult_PurchaseNotAllowed = 4,
  k_EPurchaseHeroRelicResult_InvalidRelic = 5,
  k_EPurchaseHeroRelicResult_AlreadyOwned = 6,
  k_EPurchaseHeroRelicResult_InvalidRarity = 7,
}

export enum EDevEventRequestResult {
  k_EDevEventRequestResult_Success = 0,
  k_EDevEventRequestResult_NotAllowed = 1,
  k_EDevEventRequestResult_InvalidEvent = 2,
  k_EDevEventRequestResult_SqlFailure = 3,
  k_EDevEventRequestResult_Timeout = 4,
  k_EDevEventRequestResult_LockFailure = 5,
  k_EDevEventRequestResult_SDOLoadFailure = 6,
}

export enum ESupportEventRequestResult {
  k_ESupportEventRequestResult_Success = 0,
  k_ESupportEventRequestResult_Timeout = 1,
  k_ESupportEventRequestResult_CantLockSOCache = 2,
  k_ESupportEventRequestResult_ItemNotInInventory = 3,
  k_ESupportEventRequestResult_InvalidItemDef = 4,
  k_ESupportEventRequestResult_InvalidEvent = 5,
  k_ESupportEventRequestResult_EventExpired = 6,
  k_ESupportEventRequestResult_InvalidSupportAccount = 7,
  k_ESupportEventRequestResult_InvalidSupportMessage = 8,
  k_ESupportEventRequestResult_InvalidEventPoints = 9,
  k_ESupportEventRequestResult_InvalidPremiumPoints = 10,
  k_ESupportEventRequestResult_InvalidActionID = 11,
  k_ESupportEventRequestResult_InvalidActionScore = 12,
  k_ESupportEventRequestResult_TransactionFailed = 13,
}

export enum EUnderDraftResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eNoGold = 2,
  k_eInvalidSlot = 3,
  k_eNoBenchSpace = 4,
  k_eNoTickets = 5,
  k_eEventNotOwned = 6,
  k_eInvalidReward = 7,
  k_eHasBigReward = 8,
  k_eNoGCConnection = 9,
  k_eTooBusy = 10,
  k_eCantRollBack = 11,
}

export enum EDOTADraftTriviaAnswerResult {
  k_EDOTADraftTriviaAnswerResult_Success = 0,
  k_EDOTADraftTriviaAnswerResult_InvalidMatchID = 1,
  k_EDOTADraftTriviaAnswerResult_AlreadyAnswered = 2,
  k_EDOTADraftTriviaAnswerResult_InternalError = 3,
  k_EDOTADraftTriviaAnswerResult_TriviaDisabled = 4,
  k_EDOTADraftTriviaAnswerResult_GCDown = 5,
}

export interface CMsgClientSuspended {
  timeEnd: number;
}

export interface CMsgBalancedShuffleLobby {
}

export interface CMsgInitialQuestionnaireResponse {
  initialSkill: number;
}

export interface CMsgDOTARequestMatchesResponse {
  matches: CMsgDOTAMatch[];
  series: CMsgDOTARequestMatchesResponse_Series[];
  requestId: number;
  totalResults: number;
  resultsRemaining: number;
}

export interface CMsgDOTARequestMatchesResponse_Series {
  matches: CMsgDOTAMatch[];
  seriesId: number;
  seriesType: number;
}

export interface CMsgDOTAPopup {
  id: CMsgDOTAPopup_PopupID;
  customText: string;
  intData: number;
  popupData: Buffer;
  locTokenHeader: string;
  locTokenMsg: string;
  varNames: string[];
  varValues: string[];
  debugText: string;
}

export enum CMsgDOTAPopup_PopupID {
  NONE = -1,
  KICKED_FROM_LOBBY = 0,
  KICKED_FROM_PARTY = 1,
  KICKED_FROM_TEAM = 2,
  TEAM_WAS_DISBANDED = 3,
  TEAM_MATCHMAKE_ALREADY_MATCH = 4,
  TEAM_MATCHMAKE_ALREADY_FINDING = 5,
  TEAM_MATCHMAKE_FULL = 6,
  TEAM_MATCHMAKE_FAIL_ADD = 7,
  TEAM_MATCHMAKE_FAIL_ADD_CURRENT = 8,
  TEAM_MATCHMAKE_FAILED_TEAM_MEMBER = 9,
  TEAM_MATCHMAKE_ALREADY_GAME = 10,
  TEAM_MATCHMAKE_FAIL_GET_PARTY = 11,
  MATCHMAKING_DISABLED = 12,
  INVITE_DENIED = 13,
  PARTY_FULL = 14,
  MADE_ADMIN = 15,
  NEED_TO_PURCHASE = 16,
  SIGNON_MESSAGE = 17,
  MATCHMAKING_REGION_OFFLINE = 19,
  TOURNAMENT_GAME_NOT_FOUND = 21,
  TOURNAMENT_GAME_HAS_LOBBY_ID = 22,
  TOURNAMENT_GAME_HAS_MATCH_ID = 23,
  TOURNAMENT_GAME_HAS_NO_RADIANT_TEAM = 24,
  TOURNAMENT_GAME_HAS_NO_DIRE_TEAM = 25,
  TOURNAMENT_GAME_SQL_UPDATE_FAILED = 26,
  NOT_LEAGUE_ADMIN = 27,
  IN_ANOTHER_GAME = 29,
  PARTY_MEMBER_IN_ANOTHER_GAME = 30,
  PARTY_MEMBER_IN_LOW_PRIORITY = 31,
  CLIENT_OUT_OF_DATE = 32,
  SAVE_GAME_CORRUPT = 38,
  INSUFFICIENT_INGOTS = 39,
  COMPETITIVE_MM_NOT_ENOUGH_PLAY_TIME_PLAY_MORE_CASUAL = 42,
  PARTY_LEADER_JOINED_LOBBY = 44,
  WEEKEND_TOURNEY_UNMATCHED = 48,
  POST_MATCH_SURVEY = 49,
  TROPHY_AWARDED = 50,
  TROPHY_LEVEL_UP = 51,
  ALL_HERO_CHALLENGE_PROGRESS = 52,
  NEED_INITIAL_SKILL = 53,
  NEED_INITIAL_SKILL_IN_PARTY = 54,
  TARGET_ENGINE_MISMATCH = 55,
  VAC_NOT_VERIFIED = 56,
  KICKED_FROM_QUEUE_EVENT_STARTING = 57,
  KICKED_FROM_QUEUE_EVENT_ENDING = 58,
  LOBBY_FULL = 62,
  EVENT_POINTS_EARNED = 63,
  CUSTOM_GAME_INCORRECT_VERSION = 64,
  LIMITED_USER_CHAT = 66,
  EVENT_PREMIUM_POINTS_EARNED = 67,
  LOBBY_MVP_AWARDED = 68,
  LOW_BADGE_LEVEL_CHAT = 71,
  LOW_WINS_CHAT = 72,
  UNVERIFIED_USER_CHAT = 73,
  PARTY_STARTED_FINDING_EVENT_MATCH = 74,
  GENERIC_INFO = 69,
  GENERIC_ERROR = 70,
  RANK_TIER_UPDATED = 75,
  CUSTOM_GAME_COOLDOWN_RESTRICTED = 76,
  CREATE_LOBBY_FAILED_TOO_MUCH_PLAYTIME = 77,
  CUSTOM_GAME_TOO_FEW_GAMES = 78,
}

export interface CMsgDOTAReportsRemainingRequest {
}

export interface CMsgDOTAReportsRemainingResponse {
  numPositiveReportsRemaining: number;
  numNegativeReportsRemaining: number;
  numPositiveReportsTotal: number;
  numNegativeReportsTotal: number;
  numCommsReportsRemaining: number;
  numCommsReportsTotal: number;
}

export interface CMsgDOTASubmitPlayerReport {
  targetAccountId: number;
  reportFlags: number;
  lobbyId: string;
  comment: string;
}

export interface CMsgDOTASubmitPlayerReportResponse {
  targetAccountId: number;
  reportFlags: number;
  debugMessage: string;
  enumResult: CMsgDOTASubmitPlayerReportResponse_EResult;
}

export enum CMsgDOTASubmitPlayerReportResponse_EResult {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eDuplicateReport = 2,
  k_eMixedReportFlags = 3,
  k_eTooLate = 4,
  k_eInvalidPregameReport = 5,
  k_eHasntChatted = 6,
  k_eInvalid = 7,
  k_eOwnership = 8,
  k_eMissingRequirements = 9,
  k_eInvalidRoleReport = 10,
  k_eInvalidCoachReport = 11,
  k_eNoRemainingReports = 12,
  k_eInvalidMember = 13,
}

export interface CMsgDOTASubmitPlayerAvoidRequest {
  targetAccountId: number;
  lobbyId: string;
  userNote: string;
}

export interface CMsgDOTASubmitPlayerAvoidRequestResponse {
  targetAccountId: number;
  result: number;
  debugMessage: string;
}

export interface CMsgDOTASubmitLobbyMVPVote {
  targetAccountId: number;
}

export interface CMsgDOTASubmitLobbyMVPVoteResponse {
  targetAccountId: number;
  eresult: number;
}

export interface CMsgDOTALobbyMVPAwarded {
  matchId: string;
  mvpAccountId: number[];
}

export interface CMsgDOTAKickedFromMatchmakingQueue {
  matchType: MatchType;
}

export interface CMsgGCMatchDetailsRequest {
  matchId: string;
}

export interface CMsgGCMatchDetailsResponse {
  result: number;
  match: CMsgDOTAMatch | undefined;
  vote: DOTAMatchVote;
}

export interface CMsgDOTAProfileTickets {
  result: number;
  accountId: number;
  leaguePasses: CMsgDOTAProfileTickets_LeaguePass[];
}

export interface CMsgDOTAProfileTickets_LeaguePass {
  leagueId: number;
  itemDef: number;
}

export interface CMsgClientToGCGetProfileTickets {
  accountId: number;
}

export interface CMsgGCToClientPartySearchInvites {
  invites: CMsgGCToClientPartySearchInvite[];
}

export interface CMsgDOTAWelcome {
  storeItemHash: number;
  timeplayedconsecutively: number;
  allow3rdPartyMatchHistory: boolean;
  lastIpAddress: number;
  profilePrivate: boolean;
  currency: number;
  shouldRequestPlayerOrigin: boolean;
  gcSocacheFileVersion: number;
  isPerfectWorldTestAccount: boolean;
  extraMessages: CMsgDOTAWelcome_CExtraMsg[];
  minimumRecentItemId: string;
  activeEvent: EEvent;
  additionalUserMessage: number;
  customGameWhitelistVersion: number;
  partySearchFriendInvites: CMsgGCToClientPartySearchInvites | undefined;
  remainingPlaytime: number;
  disableGuildPersonaInfo: boolean;
  extraMessageBlocks: CExtraMsgBlock[];
}

export interface CMsgDOTAWelcome_CExtraMsg {
  id: number;
  contents: Buffer;
}

export interface CSODOTAGameHeroFavorites {
  accountId: number;
  heroId: number;
}

export interface CMsgDOTAMatchVotes {
  matchId: string;
  votes: CMsgDOTAMatchVotes_PlayerVote[];
}

export interface CMsgDOTAMatchVotes_PlayerVote {
  accountId: number;
  vote: number;
}

export interface CMsgMatchmakingMatchGroupInfo {
  playersSearching: number;
  autoRegionSelectPingPenalty: number;
  autoRegionSelectPingPenaltyCustom: number;
  status: EMatchGroupServerStatus;
}

export interface CMsgDOTAMatchmakingStatsRequest {
}

export interface CMsgDOTAMatchmakingStatsResponse {
  matchgroupsVersion: number;
  legacySearchingPlayersByGroupSource2: number[];
  matchGroups: CMsgMatchmakingMatchGroupInfo[];
}

export interface CMsgDOTAUpdateMatchmakingStats {
  stats: CMsgDOTAMatchmakingStatsResponse | undefined;
}

export interface CMsgDOTAUpdateMatchManagementStats {
  stats: CMsgDOTAMatchmakingStatsResponse | undefined;
}

export interface CMsgDOTASetMatchHistoryAccess {
  allow3rdPartyMatchHistory: boolean;
}

export interface CMsgDOTASetMatchHistoryAccessResponse {
  eresult: number;
}

export interface CMsgDOTANotifyAccountFlagsChange {
  accountid: number;
  accountFlags: number;
}

export interface CMsgDOTASetProfilePrivacy {
  profilePrivate: boolean;
}

export interface CMsgDOTASetProfilePrivacyResponse {
  eresult: number;
}

export interface CMsgUpgradeLeagueItem {
  matchId: string;
  leagueId: number;
}

export interface CMsgUpgradeLeagueItemResponse {
}

export interface CMsgGCWatchDownloadedReplay {
  matchId: string;
  watchType: DOTAWatchReplayType;
}

export interface CMsgClientsRejoinChatChannels {
}

export interface CMsgGCGetHeroStandings {
}

export interface CMsgGCGetHeroStandingsResponse {
  standings: CMsgGCGetHeroStandingsResponse_Hero[];
}

export interface CMsgGCGetHeroStandingsResponse_Hero {
  heroId: number;
  wins: number;
  losses: number;
  winStreak: number;
  bestWinStreak: number;
  avgKills: number;
  avgDeaths: number;
  avgAssists: number;
  avgGpm: number;
  avgXpm: number;
  bestKills: number;
  bestAssists: number;
  bestGpm: number;
  bestXpm: number;
  performance: number;
  winsWithAlly: number;
  lossesWithAlly: number;
  winsAgainstEnemy: number;
  lossesAgainstEnemy: number;
  networthPeak: number;
  lasthitPeak: number;
  denyPeak: number;
  damagePeak: number;
  longestGamePeak: number;
  healingPeak: number;
  avgLasthits: number;
  avgDenies: number;
}

export interface CMatchPlayerTimedStatAverages {
  kills: number;
  deaths: number;
  assists: number;
  netWorth: number;
  lastHits: number;
  denies: number;
  itemValue: number;
  supportGoldSpent: number;
  campsStacked: number;
  wardsPlaced: number;
  dewards: number;
  tripleKills: number;
  rampages: number;
}

export interface CMatchPlayerTimedStatStdDeviations {
  kills: number;
  deaths: number;
  assists: number;
  netWorth: number;
  lastHits: number;
  denies: number;
  itemValue: number;
  supportGoldSpent: number;
  campsStacked: number;
  wardsPlaced: number;
  dewards: number;
  tripleKills: number;
  rampages: number;
}

export interface CMsgGCGetHeroTimedStatsResponse {
  heroId: number;
  rankChunkedStats: CMsgGCGetHeroTimedStatsResponse_RankChunkedStats[];
}

export interface CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer {
  time: number;
  allStats: CMatchPlayerTimedStatAverages | undefined;
  winningStats: CMatchPlayerTimedStatAverages | undefined;
  losingStats: CMatchPlayerTimedStatAverages | undefined;
  winningStddevs: CMatchPlayerTimedStatStdDeviations | undefined;
  losingStddevs: CMatchPlayerTimedStatStdDeviations | undefined;
}

export interface CMsgGCGetHeroTimedStatsResponse_RankChunkedStats {
  rankChunk: number;
  timedStats: CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer[];
}

export interface CMsgGCItemEditorReservationsRequest {
}

export interface CMsgGCItemEditorReservation {
  defIndex: number;
  name: string;
}

export interface CMsgGCItemEditorReservationsResponse {
  reservations: CMsgGCItemEditorReservation[];
}

export interface CMsgGCItemEditorReserveItemDef {
  defIndex: number;
  username: string;
}

export interface CMsgGCItemEditorReserveItemDefResponse {
  defIndex: number;
  username: string;
  result: number;
}

export interface CMsgGCItemEditorReleaseReservation {
  defIndex: number;
  username: string;
}

export interface CMsgGCItemEditorReleaseReservationResponse {
  defIndex: number;
  released: boolean;
}

export interface CMsgDOTARewardTutorialPrizes {
  locationId: number;
  trackingOnly: boolean;
}

export interface CMsgFlipLobbyTeams {
}

export interface CMsgGCLobbyUpdateBroadcastChannelInfo {
  channelId: number;
  countryCode: string;
  description: string;
  languageCode: string;
}

export interface CMsgDOTAClaimEventActionData {
  grantItemGiftData: CMsgDOTAClaimEventActionData_GrantItemGiftData | undefined;
}

export interface CMsgDOTAClaimEventActionData_GrantItemGiftData {
  giveToAccountId: number;
  giftMessage: string;
}

export interface CMsgDOTAClaimEventAction {
  eventId: number;
  actionId: number;
  quantity: number;
  data: CMsgDOTAClaimEventActionData | undefined;
}

export interface CMsgDOTAClaimEventActionResponse {
  result: CMsgDOTAClaimEventActionResponse_ResultCode;
  rewardResults: CMsgDOTAClaimEventActionResponse_GrantedRewardData[];
}

export enum CMsgDOTAClaimEventActionResponse_ResultCode {
  Success = 0,
  InvalidEvent = 1,
  EventNotActive = 2,
  InvalidAction = 3,
  ServerError = 4,
  InsufficientPoints = 5,
  InsufficentLevel = 6,
  AlreadyClaimed = 7,
  SDOLockFailure = 8,
  SDOLoadFailure = 9,
  EventNotOwned = 10,
  Timeout = 11,
  RequiresPlusSubscription = 12,
  InvalidItem = 13,
  AsyncRewards = 14,
}

export interface CMsgDOTAClaimEventActionResponse_MysteryItemRewardData {
  itemDef: number;
  itemCategory: number;
}

export interface CMsgDOTAClaimEventActionResponse_LootListRewardData {
  itemDef: number[];
}

export interface CMsgDOTAClaimEventActionResponse_ActionListRewardData {
  actionId: number;
  resultRewardData: Buffer;
}

export interface CMsgDOTAClaimEventActionResponse_GrantedRewardData {
  grantIndex: number;
  scoreIndex: number;
  rewardIndex: number;
  rewardData: Buffer;
}

export interface CMsgClientToGCClaimEventActionUsingItem {
  eventId: number;
  actionId: number;
  itemId: string;
  quantity: number;
}

export interface CMsgClientToGCClaimEventActionUsingItemResponse {
  actionResults: CMsgDOTAClaimEventActionResponse | undefined;
}

export interface CMsgGCToClientClaimEventActionUsingItemCompleted {
  itemId: string;
  actionResults: CMsgDOTAClaimEventActionResponse | undefined;
}

export interface CMsgDOTAGetEventPoints {
  eventId: number;
  accountId: number;
}

export interface CMsgDOTAGetEventPointsResponse {
  totalPoints: number;
  totalPremiumPoints: number;
  eventId: number;
  points: number;
  premiumPoints: number;
  completedActions: CMsgDOTAGetEventPointsResponse_Action[];
  accountId: number;
  owned: boolean;
  auditAction: number;
  activeSeasonId: number;
}

export interface CMsgDOTAGetEventPointsResponse_Action {
  actionId: number;
  timesCompleted: number;
}

export interface CMsgDOTAGetPeriodicResource {
  accountId: number;
  periodicResourceId: number;
  timestamp: number;
}

export interface CMsgDOTAGetPeriodicResourceResponse {
  periodicResourceMax: number;
  periodicResourceUsed: number;
}

export interface CMsgDOTAPeriodicResourceUpdated {
  periodicResourceKey: CMsgDOTAGetPeriodicResource | undefined;
  periodicResourceValue: CMsgDOTAGetPeriodicResourceResponse | undefined;
}

export interface CMsgDOTACompendiumSelection {
  selectionIndex: number;
  selection: number;
  leagueid: number;
}

export interface CMsgDOTACompendiumSelectionResponse {
  eresult: number;
}

export interface CMsgDOTACompendiumData {
  selections: CMsgDOTACompendiumSelection[];
}

export interface CMsgDOTACompendiumDataRequest {
  accountId: number;
  leagueid: number;
}

export interface CMsgDOTACompendiumDataResponse {
  accountId: number;
  leagueid: number;
  result: number;
  compendiumData: CMsgDOTACompendiumData | undefined;
}

export interface CMsgDOTAGetPlayerMatchHistory {
  accountId: number;
  startAtMatchId: string;
  matchesRequested: number;
  heroId: number;
  requestId: number;
  includePracticeMatches: boolean;
  includeCustomGames: boolean;
  includeEventGames: boolean;
}

export interface CMsgDOTAGetPlayerMatchHistoryResponse {
  matches: CMsgDOTAGetPlayerMatchHistoryResponse_Match[];
  requestId: number;
}

export interface CMsgDOTAGetPlayerMatchHistoryResponse_Match {
  matchId: string;
  startTime: number;
  heroId: number;
  winner: boolean;
  gameMode: number;
  rankChange: number;
  previousRank: number;
  lobbyType: number;
  soloRank: boolean;
  abandon: boolean;
  duration: number;
  engine: number;
  activePlusSubscription: boolean;
  seasonalRank: boolean;
  tourneyId: number;
  tourneyRound: number;
  tourneyTier: number;
  tourneyDivision: number;
  teamId: number;
  teamName: string;
  ugcTeamUiLogo: string;
}

export interface CMsgGCNotificationsRequest {
}

export interface CMsgGCNotificationsNotification {
  id: string;
  type: number;
  timestamp: number;
  referenceA: number;
  referenceB: number;
  referenceC: number;
  message: string;
  unread: boolean;
}

export interface CMsgGCNotificationsUpdate {
  result: CMsgGCNotificationsUpdate_EResult;
  notifications: CMsgGCNotificationsNotification[];
}

export enum CMsgGCNotificationsUpdate_EResult {
  SUCCESS = 0,
  ERROR_UNSPECIFIED = 1,
}

export interface CMsgGCNotificationsResponse {
  update: CMsgGCNotificationsUpdate | undefined;
}

export interface CMsgGCNotificationsMarkReadRequest {
}

export interface CMsgGCPlayerInfoSubmit {
  name: string;
  countryCode: string;
  fantasyRole: number;
  teamId: number;
  sponsor: string;
}

export interface CMsgGCPlayerInfoSubmitResponse {
  result: CMsgGCPlayerInfoSubmitResponse_EResult;
}

export enum CMsgGCPlayerInfoSubmitResponse_EResult {
  SUCCESS = 0,
  ERROR_UNSPECIFIED = 1,
  ERROR_INFO_LOCKED = 2,
  ERROR_NOT_MEMBER_OF_TEAM = 3,
}

export interface CMsgDOTAEmoticonAccessSDO {
  accountId: number;
  unlockedEmoticons: Buffer;
}

export interface CMsgClientToGCEmoticonDataRequest {
}

export interface CMsgGCToClientEmoticonData {
  emoticonAccess: CMsgDOTAEmoticonAccessSDO | undefined;
}

export interface CMsgGCToClientTournamentItemDrop {
  itemDef: number;
  eventType: number;
}

export interface CMsgClientToGCGetAllHeroOrder {
}

export interface CMsgClientToGCGetAllHeroOrderResponse {
  heroIds: number[];
}

export interface CMsgClientToGCGetAllHeroProgress {
  accountId: number;
}

export interface CMsgClientToGCGetAllHeroProgressResponse {
  accountId: number;
  currHeroId: number;
  lapsCompleted: number;
  currHeroGames: number;
  currLapTimeStarted: number;
  currLapGames: number;
  bestLapGames: number;
  bestLapTime: number;
  lapHeroesCompleted: number;
  lapHeroesRemaining: number;
  nextHeroId: number;
  prevHeroId: number;
  prevHeroGames: number;
  prevAvgTries: number;
  currAvgTries: number;
  nextAvgTries: number;
  fullLapAvgTries: number;
  currLapAvgTries: number;
  profileName: string;
  startHeroId: number;
}

export interface CMsgClientToGCGetTrophyList {
  accountId: number;
}

export interface CMsgClientToGCGetTrophyListResponse {
  trophies: CMsgClientToGCGetTrophyListResponse_Trophy[];
}

export interface CMsgClientToGCGetTrophyListResponse_Trophy {
  trophyId: number;
  trophyScore: number;
  lastUpdated: number;
}

export interface CMsgGCToClientTrophyAwarded {
  trophyId: number;
  trophyScore: number;
  trophyOldScore: number;
  lastUpdated: number;
}

export interface CMsgClientToGCRankRequest {
  rankType: ERankType;
}

export interface CMsgGCToClientRankResponse {
  result: CMsgGCToClientRankResponse_EResultCode;
  rankValue: number;
  rankData1: number;
  rankData2: number;
  rankData3: number;
}

export enum CMsgGCToClientRankResponse_EResultCode {
  k_Succeeded = 0,
  k_Failed = 1,
  k_InvalidRankType = 2,
}

export interface CMsgGCToClientRankUpdate {
  rankType: ERankType;
  rankInfo: CMsgGCToClientRankResponse | undefined;
}

export interface CMsgClientToGCGetProfileCard {
  accountId: number;
}

export interface CMsgClientToGCSetProfileCardSlots {
  slots: CMsgClientToGCSetProfileCardSlots_CardSlot[];
}

export interface CMsgClientToGCSetProfileCardSlots_CardSlot {
  slotId: number;
  slotType: EProfileCardSlotType;
  slotValue: string;
}

export interface CMsgClientToGCGetProfileCardStats {
}

export interface CMsgClientToGCCreateHeroStatue {
  sourceItemId: string;
  heroId: number;
  sequenceName: string;
  cycle: number;
  wearables: number[];
  inscription: string;
  styles: number[];
  reforgerItemId: string;
  tournamentDrop: boolean;
}

export interface CMsgGCToClientHeroStatueCreateResult {
  resultingItemId: string;
}

export interface CMsgClientToGCPlayerStatsRequest {
  accountId: number;
}

export interface CMsgGCToClientPlayerStatsResponse {
  accountId: number;
  playerStats: number[];
  matchCount: number;
  meanGpm: number;
  meanXppm: number;
  meanLasthits: number;
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
  versatilityScore: number;
  meanNetworth: number;
  meanDamage: number;
  meanHeals: number;
  rapiersPurchased: number;
}

export interface CMsgClientToGCCustomGamesFriendsPlayedRequest {
}

export interface CMsgGCToClientCustomGamesFriendsPlayedResponse {
  accountId: number;
  games: CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame[];
}

export interface CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame {
  customGameId: string;
  accountIds: number[];
}

export interface CMsgClientToGCSocialFeedPostCommentRequest {
  eventId: string;
  comment: string;
}

export interface CMsgGCToClientSocialFeedPostCommentResponse {
  success: boolean;
}

export interface CMsgClientToGCSocialFeedPostMessageRequest {
  message: string;
  matchId: string;
  matchTimestamp: number;
}

export interface CMsgGCToClientSocialFeedPostMessageResponse {
  success: boolean;
}

export interface CMsgClientToGCFriendsPlayedCustomGameRequest {
  customGameId: string;
}

export interface CMsgGCToClientFriendsPlayedCustomGameResponse {
  customGameId: string;
  accountIds: number[];
}

export interface CMsgDOTAPartyRichPresence {
  partyId: string;
  partyState: CSODOTAParty_State;
  open: boolean;
  lowPriority: boolean;
  teamId: number;
  teamName: string;
  ugcTeamUiLogo: string;
  members: CMsgDOTAPartyRichPresence_Member[];
  weekendTourney: CMsgDOTAPartyRichPresence_WeekendTourney | undefined;
}

export interface CMsgDOTAPartyRichPresence_Member {
  steamId: string;
  coach: boolean;
}

export interface CMsgDOTAPartyRichPresence_WeekendTourney {
  division: number;
  skillLevel: number;
  round: number;
  tournamentId: number;
  stateSeqNum: number;
  event: EWeekendTourneyRichPresenceEvent;
  eventRound: number;
}

export interface CMsgDOTALobbyRichPresence {
  lobbyId: string;
  lobbyState: CSODOTALobby_State;
  password: boolean;
  gameMode: DOTAGameMode;
  memberCount: number;
  maxMemberCount: number;
  customGameId: string;
  name: string;
  lobbyType: number;
}

export interface CMsgDOTACustomGameListenServerStartedLoading {
  lobbyId: string;
  customGameId: string;
  lobbyMembers: number[];
  startTime: number;
}

export interface CMsgDOTACustomGameClientFinishedLoading {
  lobbyId: string;
  loadingDuration: number;
  resultCode: number;
  resultString: string;
  signonStates: number;
  comment: string;
}

export interface CMsgClientToGCApplyGemCombiner {
  itemId1: string;
  itemId2: string;
}

export interface CMsgClientToGCH264Unsupported {
}

export interface CMsgClientToGCGetQuestProgress {
  questIds: number[];
}

export interface CMsgClientToGCGetQuestProgressResponse {
  success: boolean;
  quests: CMsgClientToGCGetQuestProgressResponse_Quest[];
}

export interface CMsgClientToGCGetQuestProgressResponse_Challenge {
  challengeId: number;
  timeCompleted: number;
  attempts: number;
  heroId: number;
  templateId: number;
  questRank: number;
}

export interface CMsgClientToGCGetQuestProgressResponse_Quest {
  questId: number;
  completedChallenges: CMsgClientToGCGetQuestProgressResponse_Challenge[];
}

export interface CMsgGCToClientMatchSignedOut {
  matchId: string;
}

export interface CMsgGCGetHeroStatsHistory {
  heroId: number;
}

export interface CMsgGCGetHeroStatsHistoryResponse {
  heroId: number;
  records: CMsgDOTASDOHeroStatsHistory[];
}

export interface CMsgPlayerConductScorecardRequest {
}

export interface CMsgPlayerConductScorecard {
  accountId: number;
  matchId: string;
  seqNum: number;
  reasons: number;
  matchesInReport: number;
  matchesClean: number;
  matchesReported: number;
  matchesAbandoned: number;
  reportsCount: number;
  reportsParties: number;
  commendCount: number;
  date: number;
  rawBehaviorScore: number;
  oldRawBehaviorScore: number;
  commsReports: number;
  commsParties: number;
  behaviorRating: CMsgPlayerConductScorecard_EBehaviorRating;
}

export enum CMsgPlayerConductScorecard_EBehaviorRating {
  k_eBehaviorGood = 0,
  k_eBehaviorWarning = 1,
  k_eBehaviorBad = 2,
}

export interface CMsgClientToGCWageringRequest {
  eventId: number;
}

export interface CMsgGCToClientWageringResponse {
  coinsRemaining: number;
  totalPointsWon: number;
  totalPointsWagered: number;
  totalPointsTipped: number;
  successRate: number;
  totalGamesWagered: number;
  coinsMax: number;
  rankWagersRemaining: number;
  rankWagersMax: number;
  predictionTokensRemaining: number;
  predictionTokensMax: number;
  bountiesRemaining: number;
  bountiesMax: number;
}

export interface CMsgGCToClientWageringUpdate {
  eventId: number;
  wageringInfo: CMsgGCToClientWageringResponse | undefined;
}

export interface CMsgGCToClientArcanaVotesUpdate {
  eventId: number;
  arcanaVotes: CMsgClientToGCRequestArcanaVotesRemainingResponse | undefined;
}

export interface CMsgClientToGCGetEventGoals {
  eventIds: EEvent[];
}

export interface CMsgEventGoals {
  eventGoals: CMsgEventGoals_EventGoal[];
}

export interface CMsgEventGoals_EventGoal {
  eventId: EEvent;
  goalId: number;
  value: string;
}

export interface CMsgGCToGCLeaguePredictions {
  leagueId: number;
}

export interface CMsgPredictionRankings {
  predictions: CMsgPredictionRankings_Prediction[];
}

export interface CMsgPredictionRankings_PredictionLine {
  answerId: number;
  answerName: string;
  answerLogo: string;
  answerValue: number;
}

export interface CMsgPredictionRankings_Prediction {
  selectionId: number;
  predictionLines: CMsgPredictionRankings_PredictionLine[];
}

export interface CMsgPredictionResults {
  results: CMsgPredictionResults_Result[];
}

export interface CMsgPredictionResults_ResultBreakdown {
  answerSelection: number;
  answerValue: number;
}

export interface CMsgPredictionResults_Result {
  selectionId: number;
  resultBreakdown: CMsgPredictionResults_ResultBreakdown[];
}

export interface CMsgClientToGCHasPlayerVotedForMVP {
  matchId: string;
}

export interface CMsgClientToGCHasPlayerVotedForMVPResponse {
  result: boolean;
}

export interface CMsgClientToGCVoteForMVP {
  matchId: string;
  accountId: number;
}

export interface CMsgClientToGCVoteForMVPResponse {
  result: boolean;
}

export interface CMsgClientToGCMVPVoteTimeout {
  matchId: string;
}

export interface CMsgClientToGCMVPVoteTimeoutResponse {
  result: boolean;
}

export interface CMsgClientToGCTeammateStatsRequest {
}

export interface CMsgClientToGCTeammateStatsResponse {
  success: boolean;
  teammateStats: CMsgClientToGCTeammateStatsResponse_TeammateStat[];
}

export interface CMsgClientToGCTeammateStatsResponse_TeammateStat {
  accountId: number;
  games: number;
  wins: number;
  mostRecentGameTimestamp: number;
  mostRecentGameMatchId: string;
  performance: number;
}

export interface CMsgClientToGCVoteForArcana {
  matches: CMsgArcanaVoteMatchVotes[];
}

export interface CMsgClientToGCVoteForArcanaResponse {
  result: CMsgClientToGCVoteForArcanaResponse_Result;
}

export enum CMsgClientToGCVoteForArcanaResponse_Result {
  SUCCEEDED = 0,
  VOTING_NOT_ENABLED_FOR_ROUND = 1,
  UNKNOWN_FAILURE = 2,
}

export interface CMsgClientToGCRequestArcanaVotesRemaining {
}

export interface CMsgClientToGCRequestArcanaVotesRemainingResponse {
  result: boolean;
  votesRemaining: number;
  votesTotal: number;
  matchesPreviouslyVotedFor: CMsgArcanaVoteMatchVotes[];
}

export interface CMsgClientToGCRequestEventPointLogV2 {
  eventId: number;
}

export interface CMsgClientToGCRequestEventPointLogResponseV2 {
  result: boolean;
  eventId: EEvent;
  logEntries: CMsgClientToGCRequestEventPointLogResponseV2_LogEntry[];
}

export interface CMsgClientToGCRequestEventPointLogResponseV2_LogEntry {
  timestamp: number;
  auditAction: number;
  eventPoints: number;
  auditData: string;
}

export interface CMsgClientToGCPublishUserStat {
  userStatsEvent: number;
  referenceData: string;
}

export interface CMsgClientToGCRequestSlarkGameResult {
  eventId: EEvent;
  slotChosen: number;
  week: number;
}

export interface CMsgClientToGCRequestSlarkGameResultResponse {
  pointsWon: number;
  auraWon: boolean;
}

export interface CMsgGCToClientQuestProgressUpdated {
  questId: number;
  completedChallenges: CMsgGCToClientQuestProgressUpdated_Challenge[];
}

export interface CMsgGCToClientQuestProgressUpdated_Challenge {
  challengeId: number;
  timeCompleted: number;
  attempts: number;
  heroId: number;
  templateId: number;
  questRank: number;
  maxQuestRank: number;
}

export interface CMsgDOTARedeemItem {
  currencyId: string;
  purchaseDef: number;
}

export interface CMsgDOTARedeemItemResponse {
  response: CMsgDOTARedeemItemResponse_EResultCode;
}

export enum CMsgDOTARedeemItemResponse_EResultCode {
  k_Succeeded = 0,
  k_Failed = 1,
}

export interface CMsgClientToGCSelectCompendiumInGamePrediction {
  matchId: string;
  predictions: CMsgClientToGCSelectCompendiumInGamePrediction_Prediction[];
  leagueId: number;
}

export interface CMsgClientToGCSelectCompendiumInGamePrediction_Prediction {
  predictionId: number;
  predictionValue: number;
}

export interface CMsgClientToGCSelectCompendiumInGamePredictionResponse {
  result: CMsgClientToGCSelectCompendiumInGamePredictionResponse_EResult;
}

export enum CMsgClientToGCSelectCompendiumInGamePredictionResponse_EResult {
  SUCCESS = 0,
  INVALID_MATCH = 1,
  PREDICTIONS_ARE_CLOSED = 2,
  OTHER_ERROR = 3,
}

export interface CMsgClientToGCOpenPlayerCardPack {
  playerCardPackItemId: string;
  teamId: number;
  deprecatedLeagueId: number;
  region: ELeagueRegion;
}

export interface CMsgClientToGCOpenPlayerCardPackResponse {
  result: CMsgClientToGCOpenPlayerCardPackResponse_Result;
  playerCardItemIds: string[];
}

export enum CMsgClientToGCOpenPlayerCardPackResponse_Result {
  SUCCESS = 1,
  ERROR_INTERNAL = 2,
  ERROR_FAILED_TO_FIND_PACK = 3,
  ERROR_ITEM_NOT_CARD_PACK = 4,
  ERROR_FAILED_CARD_CREATE = 5,
  ERROR_INVALID_TEAM_ID_ATTRIBUTE = 6,
  ERROR_INVALID_TEAM_ID = 7,
}

export interface CMsgClientToGCRecyclePlayerCard {
  playerCardItemIds: string[];
  eventId: number;
}

export interface CMsgClientToGCRecyclePlayerCardResponse {
  result: CMsgClientToGCRecyclePlayerCardResponse_Result;
  dustAmount: number;
}

export enum CMsgClientToGCRecyclePlayerCardResponse_Result {
  SUCCESS = 1,
  ERROR_INTERNAL = 2,
  ERROR_FAILED_TO_FIND_PLAYER_CARD = 3,
  ERROR_ITEM_NOT_PLAYER_CARD = 4,
  ERROR_FAILED_DUST_CARD_CREATE = 5,
  ERROR_CARD_LOCKED = 6,
  ERROR_NO_CARDS_SPECIFIED = 7,
}

export interface CMsgClientToGCCreatePlayerCardPack {
  cardDustItemId: string;
  eventId: number;
  premiumPack: boolean;
}

export interface CMsgClientToGCCreatePlayerCardPackResponse {
  result: CMsgClientToGCCreatePlayerCardPackResponse_Result;
}

export enum CMsgClientToGCCreatePlayerCardPackResponse_Result {
  SUCCESS = 1,
  ERROR_INTERNAL = 2,
  ERROR_INSUFFICIENT_DUST = 3,
  ERROR_ITEM_NOT_DUST_ITEM = 4,
  ERROR_FAILED_CARD_PACK_CREATE = 5,
  ERROR_NO_CARD_PACK = 6,
  ERROR_NOT_AVAILABLE = 7,
}

export interface CMsgClientToGCCreateTeamPlayerCardPack {
  cardDustItemId: string;
  eventId: number;
  premiumPack: boolean;
  teamId: number;
}

export interface CMsgClientToGCCreateTeamPlayerCardPackResponse {
  result: CMsgClientToGCCreateTeamPlayerCardPackResponse_Result;
}

export enum CMsgClientToGCCreateTeamPlayerCardPackResponse_Result {
  SUCCESS = 1,
  ERROR_INTERNAL = 2,
  ERROR_INSUFFICIENT_DUST = 3,
  ERROR_ITEM_NOT_DUST_ITEM = 4,
  ERROR_FAILED_CARD_PACK_CREATE = 5,
  ERROR_NO_CARD_PACK = 6,
  ERROR_NOT_AVAILABLE = 7,
}

export interface CMsgGCToClientBattlePassRollupInternational2016 {
  battlePassLevel: number;
  questlines: CMsgGCToClientBattlePassRollupInternational2016_Questlines[];
  wagering: CMsgGCToClientBattlePassRollupInternational2016_Wagering | undefined;
  achievements: CMsgGCToClientBattlePassRollupInternational2016_Achievements | undefined;
  battleCup: CMsgGCToClientBattlePassRollupInternational2016_BattleCup | undefined;
  predictions: CMsgGCToClientBattlePassRollupInternational2016_Predictions | undefined;
  bracket: CMsgGCToClientBattlePassRollupInternational2016_Bracket | undefined;
  playerCards: CMsgGCToClientBattlePassRollupInternational2016_PlayerCard[];
  fantasyChallenge: CMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge | undefined;
}

export interface CMsgGCToClientBattlePassRollupInternational2016_Questlines {
  name: string;
  onestar: number;
  twostar: number;
  threestar: number;
  total: number;
}

export interface CMsgGCToClientBattlePassRollupInternational2016_Wagering {
  totalWagered: number;
  totalWon: number;
  averageWon: number;
  successRate: number;
  totalTips: number;
}

export interface CMsgGCToClientBattlePassRollupInternational2016_Achievements {
  completed: number;
  total: number;
  points: number;
}

export interface CMsgGCToClientBattlePassRollupInternational2016_BattleCup {
  wins: number;
  score: number;
}

export interface CMsgGCToClientBattlePassRollupInternational2016_Predictions {
  correct: number;
  total: number;
  points: number;
}

export interface CMsgGCToClientBattlePassRollupInternational2016_Bracket {
  correct: number;
  points: number;
}

export interface CMsgGCToClientBattlePassRollupInternational2016_PlayerCard {
  accountId: number;
  quality: number;
}

export interface CMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge {
  totalScore: number;
  percentile: number;
}

export interface CMsgGCToClientBattlePassRollupFall2016 {
  battlePassLevel: number;
  questlines: CMsgGCToClientBattlePassRollupFall2016_Questlines[];
  wagering: CMsgGCToClientBattlePassRollupFall2016_Wagering | undefined;
  achievements: CMsgGCToClientBattlePassRollupFall2016_Achievements | undefined;
  battleCup: CMsgGCToClientBattlePassRollupFall2016_BattleCup | undefined;
  predictions: CMsgGCToClientBattlePassRollupFall2016_Predictions | undefined;
  bracket: CMsgGCToClientBattlePassRollupFall2016_Bracket | undefined;
  playerCards: CMsgGCToClientBattlePassRollupFall2016_PlayerCard[];
  fantasyChallenge: CMsgGCToClientBattlePassRollupFall2016_FantasyChallenge | undefined;
}

export interface CMsgGCToClientBattlePassRollupFall2016_Questlines {
  name: string;
  onestar: number;
  twostar: number;
  threestar: number;
  total: number;
}

export interface CMsgGCToClientBattlePassRollupFall2016_Wagering {
  totalWagered: number;
  totalWon: number;
  averageWon: number;
  successRate: number;
  totalTips: number;
}

export interface CMsgGCToClientBattlePassRollupFall2016_Achievements {
  completed: number;
  total: number;
  points: number;
}

export interface CMsgGCToClientBattlePassRollupFall2016_BattleCup {
  wins: number;
  score: number;
}

export interface CMsgGCToClientBattlePassRollupFall2016_Predictions {
  correct: number;
  total: number;
  points: number;
}

export interface CMsgGCToClientBattlePassRollupFall2016_Bracket {
  correct: number;
  points: number;
}

export interface CMsgGCToClientBattlePassRollupFall2016_PlayerCard {
  accountId: number;
  quality: number;
}

export interface CMsgGCToClientBattlePassRollupFall2016_FantasyChallenge {
  totalScore: number;
  percentile: number;
}

export interface CMsgGCToClientBattlePassRollupWinter2017 {
  battlePassLevel: number;
  questlines: CMsgGCToClientBattlePassRollupWinter2017_Questlines[];
  wagering: CMsgGCToClientBattlePassRollupWinter2017_Wagering | undefined;
  achievements: CMsgGCToClientBattlePassRollupWinter2017_Achievements | undefined;
  battleCup: CMsgGCToClientBattlePassRollupWinter2017_BattleCup | undefined;
  predictions: CMsgGCToClientBattlePassRollupWinter2017_Predictions | undefined;
  bracket: CMsgGCToClientBattlePassRollupWinter2017_Bracket | undefined;
  playerCards: CMsgGCToClientBattlePassRollupWinter2017_PlayerCard[];
  fantasyChallenge: CMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge | undefined;
}

export interface CMsgGCToClientBattlePassRollupWinter2017_Questlines {
  name: string;
  onestar: number;
  twostar: number;
  threestar: number;
  total: number;
}

export interface CMsgGCToClientBattlePassRollupWinter2017_Wagering {
  totalWagered: number;
  totalWon: number;
  averageWon: number;
  successRate: number;
  totalTips: number;
}

export interface CMsgGCToClientBattlePassRollupWinter2017_Achievements {
  completed: number;
  total: number;
  points: number;
}

export interface CMsgGCToClientBattlePassRollupWinter2017_BattleCup {
  wins: number;
  score: number;
}

export interface CMsgGCToClientBattlePassRollupWinter2017_Predictions {
  correct: number;
  total: number;
  points: number;
}

export interface CMsgGCToClientBattlePassRollupWinter2017_Bracket {
  correct: number;
  points: number;
}

export interface CMsgGCToClientBattlePassRollupWinter2017_PlayerCard {
  accountId: number;
  quality: number;
}

export interface CMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge {
  totalScore: number;
  percentile: number;
}

export interface CMsgGCToClientBattlePassRollupTI7 {
  battlePassLevel: number;
  questlines: CMsgGCToClientBattlePassRollupTI7_Questlines[];
  wagering: CMsgGCToClientBattlePassRollupTI7_Wagering | undefined;
  achievements: CMsgGCToClientBattlePassRollupTI7_Achievements | undefined;
  battleCup: CMsgGCToClientBattlePassRollupTI7_BattleCup | undefined;
  predictions: CMsgGCToClientBattlePassRollupTI7_Predictions | undefined;
  bracket: CMsgGCToClientBattlePassRollupTI7_Bracket | undefined;
  playerCards: CMsgGCToClientBattlePassRollupTI7_PlayerCard[];
  fantasyChallenge: CMsgGCToClientBattlePassRollupTI7_FantasyChallenge | undefined;
}

export interface CMsgGCToClientBattlePassRollupTI7_Questlines {
  name: string;
  onestar: number;
  twostar: number;
  threestar: number;
  total: number;
}

export interface CMsgGCToClientBattlePassRollupTI7_Wagering {
  totalWagered: number;
  totalWon: number;
  averageWon: number;
  successRate: number;
  totalTips: number;
}

export interface CMsgGCToClientBattlePassRollupTI7_Achievements {
  completed: number;
  total: number;
  points: number;
}

export interface CMsgGCToClientBattlePassRollupTI7_BattleCup {
  wins: number;
  score: number;
}

export interface CMsgGCToClientBattlePassRollupTI7_Predictions {
  correct: number;
  total: number;
  points: number;
}

export interface CMsgGCToClientBattlePassRollupTI7_Bracket {
  correct: number;
  points: number;
}

export interface CMsgGCToClientBattlePassRollupTI7_PlayerCard {
  accountId: number;
  quality: number;
}

export interface CMsgGCToClientBattlePassRollupTI7_FantasyChallenge {
  totalScore: number;
  percentile: number;
}

export interface CMsgGCToClientBattlePassRollupTI8 {
  battlePassLevel: number;
  cavernCrawl: CMsgGCToClientBattlePassRollupTI8_CavernCrawl | undefined;
  wagering: CMsgGCToClientBattlePassRollupTI8_Wagering | undefined;
  achievements: CMsgGCToClientBattlePassRollupTI8_Achievements | undefined;
  predictions: CMsgGCToClientBattlePassRollupTI8_Predictions | undefined;
  bracket: CMsgGCToClientBattlePassRollupTI8_Bracket | undefined;
  playerCards: CMsgGCToClientBattlePassRollupTI8_PlayerCard[];
  fantasyChallenge: CMsgGCToClientBattlePassRollupTI8_FantasyChallenge | undefined;
}

export interface CMsgGCToClientBattlePassRollupTI8_CavernCrawl {
  roomsCleared: number;
  carryCompleted: boolean;
  supportCompleted: boolean;
  utilityCompleted: boolean;
}

export interface CMsgGCToClientBattlePassRollupTI8_Wagering {
  totalWagered: number;
  totalWon: number;
  averageWon: number;
  successRate: number;
  totalTips: number;
}

export interface CMsgGCToClientBattlePassRollupTI8_Achievements {
  completed: number;
  total: number;
  points: number;
}

export interface CMsgGCToClientBattlePassRollupTI8_Predictions {
  correct: number;
  total: number;
  points: number;
}

export interface CMsgGCToClientBattlePassRollupTI8_Bracket {
  correct: number;
  points: number;
}

export interface CMsgGCToClientBattlePassRollupTI8_PlayerCard {
  accountId: number;
  quality: number;
}

export interface CMsgGCToClientBattlePassRollupTI8_FantasyChallenge {
  totalScore: number;
  percentile: number;
}

export interface CMsgGCToClientBattlePassRollupTI9 {
  battlePassLevel: number;
}

export interface CMsgGCToClientBattlePassRollupTI10 {
  battlePassLevel: number;
}

export interface CMsgGCToClientBattlePassRollupRequest {
  eventId: number;
  accountId: number;
}

export interface CMsgGCToClientBattlePassRollupResponse {
  eventTi6: CMsgGCToClientBattlePassRollupInternational2016 | undefined;
  eventFall2016: CMsgGCToClientBattlePassRollupFall2016 | undefined;
  eventWinter2017: CMsgGCToClientBattlePassRollupWinter2017 | undefined;
  eventTi7: CMsgGCToClientBattlePassRollupTI7 | undefined;
  eventTi8: CMsgGCToClientBattlePassRollupTI8 | undefined;
  eventTi9: CMsgGCToClientBattlePassRollupTI9 | undefined;
  eventTi10: CMsgGCToClientBattlePassRollupTI10 | undefined;
}

export interface CMsgGCToClientBattlePassRollupListRequest {
  accountId: number;
}

export interface CMsgGCToClientBattlePassRollupListResponse {
  eventInfo: CMsgGCToClientBattlePassRollupListResponse_EventInfo[];
}

export interface CMsgGCToClientBattlePassRollupListResponse_EventInfo {
  eventId: number;
  level: number;
}

export interface CMsgClientToGCTransferSeasonalMMRRequest {
  isParty: boolean;
}

export interface CMsgClientToGCTransferSeasonalMMRResponse {
  success: boolean;
}

export interface CMsgGCToClientPlaytestStatus {
  active: boolean;
}

export interface CMsgClientToGCJoinPlaytest {
  clientVersion: number;
}

export interface CMsgClientToGCJoinPlaytestResponse {
  error: string;
}

export interface CMsgDOTASetFavoriteTeam {
  teamId: number;
  eventId: number;
}

export interface CMsgDOTATriviaCurrentQuestions {
  questions: CMsgDOTATriviaQuestion[];
  triviaEnabled: boolean;
}

export interface CMsgDOTASubmitTriviaQuestionAnswer {
  questionId: number;
  answerIndex: number;
}

export interface CMsgDOTASubmitTriviaQuestionAnswerResponse {
  result: EDOTATriviaAnswerResult;
}

export interface CMsgDOTAStartTriviaSession {
}

export interface CMsgDOTAStartTriviaSessionResponse {
  triviaEnabled: boolean;
  currentTimestamp: number;
}

export interface CMsgDOTAAnchorPhoneNumberRequest {
}

export interface CMsgDOTAAnchorPhoneNumberResponse {
  result: CMsgDOTAAnchorPhoneNumberResponse_Result;
}

export enum CMsgDOTAAnchorPhoneNumberResponse_Result {
  SUCCESS = 0,
  ERROR_UNKNOWN = 1,
  ERROR_NO_STEAM_PHONE = 2,
  ERROR_ALREADY_IN_USE = 3,
  ERROR_COOLDOWN_ACTIVE = 4,
  ERROR_GAC_ISSUE = 5,
}

export interface CMsgDOTAUnanchorPhoneNumberRequest {
}

export interface CMsgDOTAUnanchorPhoneNumberResponse {
  result: CMsgDOTAUnanchorPhoneNumberResponse_Result;
}

export enum CMsgDOTAUnanchorPhoneNumberResponse_Result {
  SUCCESS = 0,
  ERROR_UNKNOWN = 1,
}

export interface CMsgGCToClientCommendNotification {
  commenderAccountId: number;
  commenderName: string;
  flags: number;
}

export interface CMsgDOTAClientToGCQuickStatsRequest {
  playerAccountId: number;
  heroId: number;
  itemId: number;
  leagueId: number;
}

export interface CMsgDOTAClientToGCQuickStatsResponse {
  originalRequest: CMsgDOTAClientToGCQuickStatsRequest | undefined;
  heroStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
  itemStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
  itemHeroStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
  itemPlayerStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
  heroPlayerStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
  fullSetStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
}

export interface CMsgDOTAClientToGCQuickStatsResponse_SimpleStats {
  winPercent: number;
  pickPercent: number;
  winCount: number;
  pickCount: number;
}

export interface CMsgDOTASelectionPriorityChoiceRequest {
  choice: DOTASelectionPriorityChoice;
}

export interface CMsgDOTASelectionPriorityChoiceResponse {
  result: CMsgDOTASelectionPriorityChoiceResponse_Result;
}

export enum CMsgDOTASelectionPriorityChoiceResponse_Result {
  SUCCESS = 0,
  ERROR_UNKNOWN = 1,
}

export interface CMsgDOTAGameAutographReward {
  badgeId: string;
}

export interface CMsgDOTAGameAutographRewardResponse {
  result: CMsgDOTAGameAutographRewardResponse_Result;
}

export enum CMsgDOTAGameAutographRewardResponse_Result {
  SUCCESS = 0,
  ERROR_UNKNOWN = 1,
}

export interface CMsgDOTADestroyLobbyRequest {
}

export interface CMsgDOTADestroyLobbyResponse {
  result: CMsgDOTADestroyLobbyResponse_Result;
}

export enum CMsgDOTADestroyLobbyResponse_Result {
  SUCCESS = 0,
  ERROR_UNKNOWN = 1,
}

export interface CMsgDOTAGetRecentPlayTimeFriendsRequest {
}

export interface CMsgDOTAGetRecentPlayTimeFriendsResponse {
  accountIds: number[];
}

export interface CMsgPurchaseItemWithEventPoints {
  itemDef: number;
  quantity: number;
  eventId: EEvent;
  usePremiumPoints: boolean;
}

export interface CMsgPurchaseItemWithEventPointsResponse {
  result: CMsgPurchaseItemWithEventPointsResponse_Result;
}

export enum CMsgPurchaseItemWithEventPointsResponse_Result {
  SUCCESS = 0,
  UNKNOWN_EVENT = 1,
  UNKNOWN_ITEM = 2,
  BAD_QUANTITY = 3,
  NOT_PURCHASEABLE = 4,
  SDO_LOAD_FAILED = 5,
  NOT_ENOUGH_POINTS = 6,
  SQL_ERROR = 7,
  FAILED_TO_SEND = 8,
  SERVER_ERROR = 9,
  NOT_ALLOWED = 10,
  CANCELLED = 11,
  CLIENT_ERROR = 12,
  SUBSCRIPTION_REQUIRED = 13,
}

export interface CMsgPurchaseHeroRandomRelic {
  heroId: number;
  relicRarity: EHeroRelicRarity;
}

export interface CMsgPurchaseHeroRandomRelicResponse {
  result: EPurchaseHeroRelicResult;
  killEaterType: number;
}

export interface CMsgClientToGCRequestPlusWeeklyChallengeResult {
  eventId: EEvent;
  week: number;
}

export interface CMsgClientToGCRequestPlusWeeklyChallengeResultResponse {
}

export interface CMsgProfileRequest {
  accountId: number;
}

export interface CMsgProfileResponse {
  backgroundItem: CSOEconItem | undefined;
  featuredHeroes: CMsgProfileResponse_FeaturedHero[];
  recentMatches: CMsgProfileResponse_MatchInfo[];
  successfulHeroes: CMsgSuccessfulHero[];
  recentMatchDetails: CMsgRecentMatchInfo | undefined;
  result: CMsgProfileResponse_EResponse;
  stickerbookPage: CMsgStickerbookPage | undefined;
}

export enum CMsgProfileResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
}

export interface CMsgProfileResponse_FeaturedHero {
  heroId: number;
  equippedEconItems: CSOEconItem[];
  manuallySet: boolean;
  plusHeroXp: number;
  plusHeroRelicsItem: CSOEconItem | undefined;
}

export interface CMsgProfileResponse_MatchInfo {
  matchId: string;
  matchTimestamp: number;
  performanceRating: number;
  heroId: number;
  wonMatch: boolean;
}

export interface CMsgProfileUpdate {
  backgroundItemId: string;
  featuredHeroIds: number[];
}

export interface CMsgProfileUpdateResponse {
  result: CMsgProfileUpdateResponse_Result;
}

export enum CMsgProfileUpdateResponse_Result {
  SUCCESS = 0,
  FAILURE = 1,
  FAILURE_BAD_HERO1 = 2,
  FAILURE_BAD_HERO2 = 3,
  FAILURE_BAD_HERO3 = 4,
}

export interface CMsgTalentWinRates {
  lastRun: number;
  abilityId: number;
  gameCount: number;
  winCount: number;
}

export interface CMsgGlobalHeroAverages {
  lastRun: number;
  avgGoldPerMin: number;
  avgXpPerMin: number;
  avgKills: number;
  avgDeaths: number;
  avgAssists: number;
  avgLastHits: number;
  avgDenies: number;
  avgNetWorth: number;
}

export interface CMsgHeroGlobalDataRequest {
  heroId: number;
}

export interface CMsgHeroGlobalDataResponse {
  heroId: number;
  heroDataPerChunk: CMsgHeroGlobalDataResponse_HeroDataPerRankChunk[];
}

export interface CMsgHeroGlobalDataResponse_GraphData {
  day: number;
  winPercent: number;
  pickPercent: number;
  banPercent: number;
}

export interface CMsgHeroGlobalDataResponse_WeekData {
  week: number;
  winPercent: number;
  pickPercent: number;
  banPercent: number;
}

export interface CMsgHeroGlobalDataResponse_HeroDataPerRankChunk {
  rankChunk: number;
  talentWinRates: CMsgTalentWinRates[];
  heroAverages: CMsgGlobalHeroAverages | undefined;
  graphData: CMsgHeroGlobalDataResponse_GraphData[];
  weekData: CMsgHeroGlobalDataResponse_WeekData[];
}

export interface CMsgHeroGlobalDataAllHeroes {
  heroes: CMsgHeroGlobalDataResponse[];
}

export interface CMsgHeroGlobalDataHeroesAlliesAndEnemies {
  rankedHeroData: CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData[];
}

export interface CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData {
  heroId: number;
  winRate: number;
  firstOtherHeroId: number;
  allyWinRate: number[];
  enemyWinRate: number[];
}

export interface CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData {
  rank: number;
  heroData: CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData[];
}

export interface CMsgPrivateMetadataKeyRequest {
  matchId: string;
}

export interface CMsgPrivateMetadataKeyResponse {
  privateKey: number;
}

export interface CMsgActivatePlusFreeTrialResponse {
  result: CMsgActivatePlusFreeTrialResponse_Result;
}

export enum CMsgActivatePlusFreeTrialResponse_Result {
  SUCCESS = 0,
  ERROR_GENERIC = 1,
  ERROR_ALREADY_IN_FREE_TRIAL = 2,
  ERROR_ALREADY_USED_FREE_TRIAL = 3,
  ERROR_OFFER_NOT_VALID = 4,
}

export interface CMsgGCToClientCavernCrawlMapPathCompleted {
  eventId: number;
  heroIdCompleted: number;
  completedPaths: CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo[];
  mapVariant: number;
}

export interface CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo {
  pathIdCompleted: number;
  receivedUltraRareReward: boolean;
  halfCompleted: boolean;
}

export interface CMsgGCToClientCavernCrawlMapUpdated {
  eventId: number;
}

export interface CMsgClientToGCCavernCrawlClaimRoom {
  eventId: number;
  roomId: number;
  mapVariant: number;
}

export interface CMsgClientToGCCavernCrawlClaimRoomResponse {
  result: CMsgClientToGCCavernCrawlClaimRoomResponse_Result;
}

export enum CMsgClientToGCCavernCrawlClaimRoomResponse_Result {
  SUCCESS = 0,
  ERROR_UNKNOWN = 1,
  RECEIVED_ULTRA_RARE_REWARD = 2,
}

export interface CMsgClientToGCCavernCrawlUseItemOnRoom {
  eventId: number;
  roomId: number;
  itemType: number;
  mapVariant: number;
}

export interface CMsgClientToGCCavernCrawlUseItemOnRoomResponse {
  result: CMsgClientToGCCavernCrawlUseItemOnRoomResponse_Result;
}

export enum CMsgClientToGCCavernCrawlUseItemOnRoomResponse_Result {
  SUCCESS = 0,
  ERROR_UNKNOWN = 1,
  RECEIVED_ULTRA_RARE_REWARD = 2,
}

export interface CMsgClientToGCCavernCrawlUseItemOnPath {
  eventId: number;
  pathId: number;
  itemType: number;
  mapVariant: number;
}

export interface CMsgClientToGCCavernCrawlUseItemOnPathResponse {
  result: CMsgClientToGCCavernCrawlUseItemOnPathResponse_Result;
}

export enum CMsgClientToGCCavernCrawlUseItemOnPathResponse_Result {
  SUCCESS = 0,
  ERROR_UNKNOWN = 1,
  RECEIVED_ULTRA_RARE_REWARD = 2,
}

export interface CMsgClientToGCCavernCrawlRequestMapState {
  eventId: number;
}

export interface CMsgClientToGCCavernCrawlRequestMapStateResponse {
  result: CMsgClientToGCCavernCrawlRequestMapStateResponse_Result;
  availableMapVariantsMask: number;
  inventoryItem: CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem[];
  mapVariants: CMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant[];
}

export enum CMsgClientToGCCavernCrawlRequestMapStateResponse_Result {
  SUCCESS = 0,
  ERROR_UNKNOWN = 1,
  EVENT_NOT_OWNED = 2,
}

export interface CMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge {
  pathId1: number;
  pathId2: number;
}

export interface CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem {
  itemType: number;
  count: number;
}

export interface CMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap {
  mapRoomId: number;
  revealedRoomId: number;
}

export interface CMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant {
  mapVariant: number;
  claimedRooms1: string;
  claimedRooms2: string;
  revealedRooms1: string;
  revealedRooms2: string;
  completedPaths1: string;
  completedPaths2: string;
  completedPaths3: string;
  completedPaths4: string;
  halfCompletedPaths1: string;
  halfCompletedPaths2: string;
  halfCompletedPaths3: string;
  halfCompletedPaths4: string;
  swappedChallenge: CMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge[];
  ultraRareRewardRoomNumber: number;
  treasureMap: CMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap[];
}

export interface CMsgClientToGCCavernCrawlGetClaimedRoomCount {
  eventId: number;
}

export interface CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse {
  result: CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_Result;
  mapVariants: CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant[];
  availableMapVariantsMask: number;
}

export enum CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_Result {
  SUCCESS = 0,
  ERROR_UNKNOWN = 1,
  EVENT_NOT_OWNED = 2,
}

export interface CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant {
  mapVariant: number;
  count: number;
}

export interface CMsgDOTAMutationList {
  mutations: CMsgDOTAMutationList_Mutation[];
}

export interface CMsgDOTAMutationList_Mutation {
  id: number;
  name: string;
  description: string;
}

export interface CMsgEventTipsSummaryRequest {
  eventId: EEvent;
  accountId: number;
}

export interface CMsgEventTipsSummaryResponse {
  result: boolean;
  tipsReceived: CMsgEventTipsSummaryResponse_Tipper[];
}

export interface CMsgEventTipsSummaryResponse_Tipper {
  tipperAccountId: number;
  tipCount: number;
}

export interface CMsgSocialFeedRequest {
  accountId: number;
  selfOnly: boolean;
}

export interface CMsgSocialFeedResponse {
  result: CMsgSocialFeedResponse_Result;
  feedEvents: CMsgSocialFeedResponse_FeedEvent[];
}

export enum CMsgSocialFeedResponse_Result {
  SUCCESS = 0,
  FAILED_TO_LOAD_FRIENDS = 1,
  FAILED_TO_LOAD_FEED_DATA = 2,
  FAILED_TO_LOAD_FEED_ENTRY = 3,
  FAILED_TO_LOAD_COMMENTS = 4,
  FAILED_TOO_MANY_REQUESTS = 5,
}

export interface CMsgSocialFeedResponse_FeedEvent {
  feedEventId: string;
  accountId: number;
  timestamp: number;
  commentCount: number;
  eventType: number;
  eventSubType: number;
  paramBigInt1: string;
  paramInt1: number;
  paramInt2: number;
  paramInt3: number;
  paramString: string;
}

export interface CMsgSocialFeedCommentsRequest {
  feedEventId: string;
}

export interface CMsgSocialFeedCommentsResponse {
  result: CMsgSocialFeedCommentsResponse_Result;
  feedComments: CMsgSocialFeedCommentsResponse_FeedComment[];
}

export enum CMsgSocialFeedCommentsResponse_Result {
  SUCCESS = 0,
  FAILED_TOO_MANY_REQUESTS = 1,
  FAILED_TO_LOAD_COMMENTS = 2,
}

export interface CMsgSocialFeedCommentsResponse_FeedComment {
  commenterAccountId: number;
  timestamp: number;
  commentText: string;
}

export interface CMsgClientToGCPlayerCardSpecificPurchaseRequest {
  playerAccountId: number;
  eventId: number;
  cardDustItemId: string;
}

export interface CMsgClientToGCPlayerCardSpecificPurchaseResponse {
  result: CMsgClientToGCPlayerCardSpecificPurchaseResponse_Result;
  itemId: string;
}

export enum CMsgClientToGCPlayerCardSpecificPurchaseResponse_Result {
  SUCCESS = 1,
  ERROR_INTERNAL = 2,
  ERROR_INSUFFICIENT_DUST = 3,
  ERROR_ITEM_NOT_DUST_ITEM = 4,
  ERROR_FAILED_CARD_PACK_CREATE = 5,
  ERROR_NOT_AVAILABLE = 6,
}

export interface CMsgClientToGCRequestContestVotes {
  contestId: number;
}

export interface CMsgClientToGCRequestContestVotesResponse {
  result: CMsgClientToGCRequestContestVotesResponse_EResponse;
  votes: CMsgClientToGCRequestContestVotesResponse_ItemVote[];
}

export enum CMsgClientToGCRequestContestVotesResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
}

export interface CMsgClientToGCRequestContestVotesResponse_ItemVote {
  contestItemId: string;
  vote: number;
}

export interface CMsgClientToGCRecordContestVote {
  contestId: number;
  contestItemId: string;
  vote: number;
}

export interface CMsgGCToClientRecordContestVoteResponse {
  eresult: CMsgGCToClientRecordContestVoteResponse_EResult;
}

export enum CMsgGCToClientRecordContestVoteResponse_EResult {
  SUCCESS = 0,
  FAILED_EVENT_NOT_OWNED = 1,
  FAILED_SQL_INSERT_FAILED = 2,
  FAILED_INVALID_CONTEST = 3,
  FAILED_CONTEST_NOT_ACTIVE = 4,
  FAILED_TIMEOUT = 5,
}

export interface CMsgDevGrantEventPoints {
  eventId: EEvent;
  eventPoints: number;
  premiumPoints: number;
}

export interface CMsgDevGrantEventPointsResponse {
  result: EDevEventRequestResult;
}

export interface CMsgDevGrantEventAction {
  eventId: EEvent;
  actionId: number;
  actionScore: number;
}

export interface CMsgDevGrantEventActionResponse {
  result: EDevEventRequestResult;
}

export interface CMsgDevDeleteEventActions {
  eventId: EEvent;
  startActionId: number;
  endActionId: number;
  removeAudit: boolean;
}

export interface CMsgDevDeleteEventActionsResponse {
  result: EDevEventRequestResult;
}

export interface CMsgDevResetEventState {
  eventId: EEvent;
  removeAudit: boolean;
}

export interface CMsgDevResetEventStateResponse {
  result: EDevEventRequestResult;
}

export interface CMsgConsumeEventSupportGrantItem {
  itemId: string;
}

export interface CMsgConsumeEventSupportGrantItemResponse {
  result: ESupportEventRequestResult;
}

export interface CMsgClientToGCGetFilteredPlayers {
}

export interface CMsgGCToClientGetFilteredPlayersResponse {
  result: CMsgGCToClientGetFilteredPlayersResponse_Result;
  filteredPlayers: CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry[];
  baseSlots: number;
  additionalSlots: number;
  nextSlotCost: number;
}

export enum CMsgGCToClientGetFilteredPlayersResponse_Result {
  SUCCESS = 0,
  FAILURE = 1,
}

export interface CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry {
  accountId: number;
  timeAdded: number;
  timeExpires: number;
  note: string;
}

export interface CMsgClientToGCRemoveFilteredPlayer {
  accountIdToRemove: number;
}

export interface CMsgGCToClientRemoveFilteredPlayerResponse {
  result: CMsgGCToClientRemoveFilteredPlayerResponse_Result;
}

export enum CMsgGCToClientRemoveFilteredPlayerResponse_Result {
  SUCCESS = 0,
  FAILURE = 1,
}

export interface CMsgClientToGCPurchaseFilteredPlayerSlot {
  additionalSlotsCurrent: number;
}

export interface CMsgGCToClientPurchaseFilteredPlayerSlotResponse {
  result: CMsgGCToClientPurchaseFilteredPlayerSlotResponse_Result;
  additionalSlots: number;
  nextSlotCost: number;
}

export enum CMsgGCToClientPurchaseFilteredPlayerSlotResponse_Result {
  SUCCESS = 0,
  FAILURE = 1,
  CURRENT_SLOTCOUNT_DOESNT_MATCH = 2,
  CANT_AFFORD = 3,
}

export interface CMsgClientToGCUpdateFilteredPlayerNote {
  targetAccountId: number;
  newNote: string;
}

export interface CMsgGCToClientUpdateFilteredPlayerNoteResponse {
  result: CMsgGCToClientUpdateFilteredPlayerNoteResponse_Result;
}

export enum CMsgGCToClientUpdateFilteredPlayerNoteResponse_Result {
  SUCCESS = 0,
  FAILURE = 1,
  NOT_FOUND = 2,
}

export interface CMsgPartySearchPlayer {
  accountId: number;
  matchId: string;
  creationTime: number;
}

export interface CMsgGCToClientPlayerBeaconState {
  numActiveBeacons: number[];
}

export interface CMsgGCToClientPartyBeaconUpdate {
  beaconAdded: boolean;
  beaconType: number;
  accountId: number;
}

export interface CMsgClientToGCUpdatePartyBeacon {
  action: CMsgClientToGCUpdatePartyBeacon_Action;
}

export enum CMsgClientToGCUpdatePartyBeacon_Action {
  ON = 0,
  OFF = 1,
}

export interface CMsgClientToGCRequestActiveBeaconParties {
}

export interface CMsgGCToClientRequestActiveBeaconPartiesResponse {
  response: CMsgGCToClientRequestActiveBeaconPartiesResponse_EResponse;
  activeParties: CPartySearchClientParty[];
}

export enum CMsgGCToClientRequestActiveBeaconPartiesResponse_EResponse {
  SUCCESS = 0,
  FAILURE = 1,
  BUSY = 2,
}

export interface CMsgClientToGCJoinPartyFromBeacon {
  partyId: string;
  accountId: number;
  beaconType: number;
}

export interface CMsgGCToClientJoinPartyFromBeaconResponse {
  response: CMsgGCToClientJoinPartyFromBeaconResponse_EResponse;
}

export enum CMsgGCToClientJoinPartyFromBeaconResponse_EResponse {
  SUCCESS = 0,
  FAILURE = 1,
  BUSY = 2,
  NOT_LEADER = 3,
}

export interface CMsgClientToGCManageFavorites {
  action: CMsgClientToGCManageFavorites_Action;
  accountId: number;
  favoriteName: string;
  inviteResponse: boolean;
  fromFriendlist: boolean;
  lobbyId: string;
}

export enum CMsgClientToGCManageFavorites_Action {
  ADD = 0,
  REMOVE = 1,
}

export interface CMsgGCToClientManageFavoritesResponse {
  response: CMsgGCToClientManageFavoritesResponse_EResponse;
  debugMessage: string;
  player: CMsgPartySearchPlayer | undefined;
}

export enum CMsgGCToClientManageFavoritesResponse_EResponse {
  SUCCESS = 0,
  FAILURE = 1,
  NO_INVITE_PRESENT = 2,
  INVITE_SENT = 3,
  EXPIRED = 4,
  BUSY = 5,
}

export interface CMsgClientToGCGetFavoritePlayers {
  paginationKey: string;
  paginationCount: number;
}

export interface CMsgGCToClientGetFavoritePlayersResponse {
  response: CMsgGCToClientGetFavoritePlayersResponse_EResponse;
  players: CMsgPartySearchPlayer[];
  nextPaginationKey: string;
}

export enum CMsgGCToClientGetFavoritePlayersResponse_EResponse {
  SUCCESS = 0,
  FAILURE = 1,
}

export interface CMsgGCToClientPartySearchInvite {
  accountId: number;
}

export interface CMsgClientToGCVerifyFavoritePlayers {
  accountIds: number[];
}

export interface CMsgGCToClientVerifyFavoritePlayersResponse {
  results: CMsgGCToClientVerifyFavoritePlayersResponse_Result[];
}

export interface CMsgGCToClientVerifyFavoritePlayersResponse_Result {
  player: CMsgPartySearchPlayer | undefined;
  isFavorite: boolean;
}

export interface CMsgClientToGCRequestPlayerRecentAccomplishments {
  accountId: number;
}

export interface CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse {
  result: CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse_EResponse;
  playerAccomplishments: CMsgPlayerRecentAccomplishments | undefined;
}

export enum CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
}

export interface CMsgClientToGCRequestPlayerHeroRecentAccomplishments {
  accountId: number;
  heroId: number;
}

export interface CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse {
  result: CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse_EResponse;
  heroAccomplishments: CMsgPlayerHeroRecentAccomplishments | undefined;
}

export enum CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
}

export interface CMsgClientToGCSubmitPlayerMatchSurvey {
  matchId: string;
  rating: number;
  flags: number;
}

export interface CMsgClientToGCSubmitPlayerMatchSurveyResponse {
  eresult: CMsgClientToGCSubmitPlayerMatchSurveyResponse_EResponse;
  accountId: number;
}

export enum CMsgClientToGCSubmitPlayerMatchSurveyResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eAlreadySubmitted = 4,
  k_ePlayerNotValid = 5,
}

export interface CMsgGCToClientVACReminder {
}

export interface CMsgClientToGCUnderDraftRequest {
  accountId: number;
  eventId: number;
}

export interface CMsgClientToGCUnderDraftResponse {
  result: EUnderDraftResponse;
  accountId: number;
  eventId: number;
  draftData: CMsgUnderDraftData | undefined;
}

export interface CMsgClientToGCUnderDraftReroll {
  eventId: number;
}

export interface CMsgClientToGCUnderDraftRerollResponse {
  result: EUnderDraftResponse;
  eventId: number;
  draftData: CMsgUnderDraftData | undefined;
}

export interface CMsgClientToGCUnderDraftBuy {
  eventId: number;
  slotId: number;
}

export interface CMsgGCToClientGuildUnderDraftGoldUpdated {
  eventId: number;
}

export interface CMsgClientToGCUnderDraftBuyResponse {
  result: EUnderDraftResponse;
  eventId: number;
  slotId: number;
  draftData: CMsgUnderDraftData | undefined;
}

export interface CMsgClientToGCUnderDraftRollBackBench {
  eventId: number;
}

export interface CMsgClientToGCUnderDraftRollBackBenchResponse {
  result: EUnderDraftResponse;
  eventId: number;
  draftData: CMsgUnderDraftData | undefined;
}

export interface CMsgClientToGCUnderDraftSell {
  eventId: number;
  slotId: number;
}

export interface CMsgClientToGCUnderDraftSellResponse {
  result: EUnderDraftResponse;
  eventId: number;
  slotId: number;
  draftData: CMsgUnderDraftData | undefined;
}

export interface CMsgClientToGCUnderDraftRedeemReward {
  eventId: number;
  actionId: number;
}

export interface CMsgClientToGCUnderDraftRedeemRewardResponse {
  result: EUnderDraftResponse;
}

export interface CMsgClientToGCSubmitDraftTriviaMatchAnswer {
  choseRadiantAsWinner: boolean;
  eventId: number;
  endTime: number;
}

export interface CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse {
  result: EDOTADraftTriviaAnswerResult;
}

export interface CMsgDraftTriviaVoteCount {
  totalVotes: number;
  radiantVotes: number;
  direVotes: number;
}

export interface CMsgClientToGCRecalibrateMMR {
}

export interface CMsgClientToGCRecalibrateMMRResponse {
  result: CMsgClientToGCRecalibrateMMRResponse_EResponse;
}

export enum CMsgClientToGCRecalibrateMMRResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTimeout = 2,
  k_eTooBusy = 3,
  k_eNotPermitted = 4,
  k_eNotToSoon = 5,
  k_eNotValid = 6,
}

export interface CMsgDOTAPostGameItemAwardNotification {
  receiverAccountId: number;
  itemDefIndex: number[];
  actionId: number;
}

export interface CMsgClientToGCGetOWMatchDetails {
}

export interface CMsgClientToGCGetOWMatchDetailsResponse {
  result: CMsgClientToGCGetOWMatchDetailsResponse_EResponse;
  overwatchReplayId: string;
  decryptionKey: string;
  cluster: number;
  overwatchSalt: number;
  targetPlayerSlot: number;
  markers: CMsgClientToGCGetOWMatchDetailsResponse_Marker[];
  reportReason: EOverwatchReportReason;
  targetHeroId: number;
  rankTier: number;
  laneSelectionFlags: number;
}

export enum CMsgClientToGCGetOWMatchDetailsResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTimeout = 2,
  k_eTooBusy = 3,
  k_eNotPermitted = 4,
  k_eNoCaseAvailable = 5,
}

export interface CMsgClientToGCGetOWMatchDetailsResponse_Marker {
  startGameTimeS: number;
  endGameTimeS: number;
}

export interface CMsgClientToGCSubmitOWConviction {
  overwatchReplayId: string;
  targetPlayerSlot: number;
  cheatingConviction: EOverwatchConviction;
  griefingConviction: EOverwatchConviction;
}

export interface CMsgClientToGCSubmitOWConvictionResponse {
  result: CMsgClientToGCSubmitOWConvictionResponse_EResponse;
  overwatchReplayId: string;
}

export enum CMsgClientToGCSubmitOWConvictionResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTimeout = 2,
  k_eTooBusy = 3,
  k_eNotPermitted = 4,
  k_eInvalidReplayID = 5,
  k_eInvalidConviction = 6,
  k_eInvalidPlayerSlot = 7,
}

export interface CMsgClientToGCChinaSSAURLRequest {
}

export interface CMsgClientToGCChinaSSAURLResponse {
  agreementUrl: string;
}

export interface CMsgClientToGCChinaSSAAcceptedRequest {
}

export interface CMsgClientToGCChinaSSAAcceptedResponse {
  agreementAccepted: boolean;
}

export interface CMsgGCToClientOverwatchCasesAvailable {
  expireTime: number;
}

export interface CMsgClientToGCStartWatchingOverwatch {
  overwatchReplayId: string;
  targetPlayerSlot: number;
}

export interface CMsgClientToGCStopWatchingOverwatch {
  overwatchReplayId: string;
  targetPlayerSlot: number;
}

export interface CMsgClientToGCOverwatchReplayError {
  overwatchReplayId: string;
}

export interface CMsgClientToGCGetDPCFavorites {
}

export interface CMsgClientToGCGetDPCFavoritesResponse {
  result: CMsgClientToGCGetDPCFavoritesResponse_EResponse;
  favorites: CMsgClientToGCGetDPCFavoritesResponse_Favorite[];
}

export enum CMsgClientToGCGetDPCFavoritesResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eInvalidRequest = 5,
}

export interface CMsgClientToGCGetDPCFavoritesResponse_Favorite {
  favoriteType: EDPCFavoriteType;
  favoriteId: number;
}

export interface CMsgClientToGCSetDPCFavoriteState {
  favoriteType: EDPCFavoriteType;
  favoriteId: number;
  enabled: boolean;
}

export interface CMsgClientToGCSetDPCFavoriteStateResponse {
  result: CMsgClientToGCSetDPCFavoriteStateResponse_EResponse;
}

export enum CMsgClientToGCSetDPCFavoriteStateResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eFavoriteTypeOutOfRange = 2,
  k_eLockFailed = 3,
  k_eAlreadyFavorited = 4,
  k_eAlreadyUnfavorited = 5,
  k_eInsertRecordFailed = 6,
  k_eRemoveRecordFailed = 7,
  k_eTimeout = 8,
}

export interface CMsgClientToGCSetEventActiveSeasonID {
  eventId: number;
  activeSeasonId: number;
}

export interface CMsgClientToGCSetEventActiveSeasonIDResponse {
  result: CMsgClientToGCSetEventActiveSeasonIDResponse_EResponse;
}

export enum CMsgClientToGCSetEventActiveSeasonIDResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eDisabled = 2,
  k_eTooBusy = 3,
  k_eNotAllowed = 4,
  k_eTimeout = 5,
  k_eInternalSuccessNoChange = 6,
}

export interface CMsgClientToGCPurchaseLabyrinthBlessings {
  eventId: EEvent;
  blessingIds: number[];
  debug: boolean;
  debugRemove: boolean;
}

export interface CMsgClientToGCPurchaseLabyrinthBlessingsResponse {
  result: CMsgClientToGCPurchaseLabyrinthBlessingsResponse_EResponse;
}

export enum CMsgClientToGCPurchaseLabyrinthBlessingsResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eNoSuchBlessing = 2,
  k_eNotEnoughShards = 3,
  k_eNoPath = 4,
  k_eTimeout = 5,
}

export interface CMsgClientToGCGetStickerbookRequest {
  accountId: number;
}

export interface CMsgClientToGCGetStickerbookResponse {
  response: CMsgClientToGCGetStickerbookResponse_EResponse;
  stickerbook: CMsgStickerbook | undefined;
}

export enum CMsgClientToGCGetStickerbookResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTimeout = 2,
  k_eNotAllowed = 3,
  k_eTooBusy = 4,
}

export interface CMsgClientToGCCreateStickerbookPageRequest {
  teamId: number;
  eventId: EEvent;
  pageType: EStickerbookPageType;
}

export interface CMsgClientToGCCreateStickerbookPageResponse {
  response: CMsgClientToGCCreateStickerbookPageResponse_EResponse;
  pageNumber: number;
}

export enum CMsgClientToGCCreateStickerbookPageResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTimeout = 2,
  k_eTooManyPages = 3,
  k_eTooBusy = 4,
}

export interface CMsgClientToGCDeleteStickerbookPageRequest {
  pageNum: number;
  stickerCount: number;
  stickerMax: number;
}

export interface CMsgClientToGCDeleteStickerbookPageResponse {
  response: CMsgClientToGCDeleteStickerbookPageResponse_EResponse;
}

export enum CMsgClientToGCDeleteStickerbookPageResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTimeout = 2,
  k_eInvalidStickerCount = 3,
  k_eTooBusy = 4,
  k_eInvalidStickerMax = 5,
  k_eInvalidPage = 6,
}

export interface CMsgClientToGCPlaceStickersRequest {
  stickerItems: CMsgClientToGCPlaceStickersRequest_StickerItem[];
}

export interface CMsgClientToGCPlaceStickersRequest_StickerItem {
  pageNum: number;
  sticker: CMsgStickerbookSticker | undefined;
}

export interface CMsgClientToGCPlaceStickersResponse {
  response: CMsgClientToGCPlaceStickersResponse_EResponse;
}

export enum CMsgClientToGCPlaceStickersResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTimeout = 2,
  k_eMissingItem = 3,
  k_eTooBusy = 4,
  k_eDuplicateItem = 5,
  k_eInvalidPage = 6,
  k_ePageTypeMismatch = 7,
  k_eTooManyStickers = 8,
}

export interface CMsgClientToGCPlaceCollectionStickersRequest {
  slots: CMsgClientToGCPlaceCollectionStickersRequest_Slot[];
}

export interface CMsgClientToGCPlaceCollectionStickersRequest_Slot {
  pageNum: number;
  slot: number;
  newItemId: string;
  oldItemDefId: number;
  oldQuality: number;
}

export interface CMsgClientToGCPlaceCollectionStickersResponse {
  response: CMsgClientToGCPlaceCollectionStickersResponse_EResponse;
}

export enum CMsgClientToGCPlaceCollectionStickersResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTimeout = 2,
  k_eMissingItem = 3,
  k_eTooBusy = 4,
  k_eDuplicateItem = 5,
  k_eInvalidPage = 6,
  k_ePageTypeMismatch = 7,
  k_eOldItemMismatch = 8,
  k_eInvalidSlot = 9,
  k_eSlotTypeMismatch = 10,
}

export interface CMsgClientToGCOrderStickerbookTeamPageRequest {
  pageOrderSequence: CMsgStickerbookTeamPageOrderSequence | undefined;
}

export interface CMsgClientToGCOrderStickerbookTeamPageResponse {
  response: CMsgClientToGCOrderStickerbookTeamPageResponse_EResponse;
}

export enum CMsgClientToGCOrderStickerbookTeamPageResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTimeout = 2,
  k_eTooManyPages = 3,
  k_eTooBusy = 4,
  k_eInvalidPage = 5,
}

export interface CMsgClientToGCSetHeroSticker {
  heroId: number;
  newItemId: string;
  oldItemId: string;
}

export interface CMsgClientToGCSetHeroStickerResponse {
  response: CMsgClientToGCSetHeroStickerResponse_EResponse;
}

export enum CMsgClientToGCSetHeroStickerResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTimeout = 2,
  k_eMissingItem = 3,
  k_eTooBusy = 4,
  k_eOldItemMismatch = 5,
  k_eInvalidHero = 6,
}

export interface CMsgClientToGCGetHeroStickers {
}

export interface CMsgClientToGCGetHeroStickersResponse {
  response: CMsgClientToGCGetHeroStickersResponse_EResponse;
  stickerHeroes: CMsgStickerHeroes | undefined;
}

export enum CMsgClientToGCGetHeroStickersResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTimeout = 2,
  k_eTooBusy = 4,
}

export interface CMsgClientToGCSetFavoritePage {
  pageNum: number;
  clear: boolean;
}

export interface CMsgClientToGCSetFavoritePageResponse {
  response: CMsgClientToGCSetFavoritePageResponse_EResponse;
}

export enum CMsgClientToGCSetFavoritePageResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTimeout = 2,
  k_eTooBusy = 4,
  k_eInvalidPage = 5,
}

export interface CMsgClientToGCClaimSwag {
  eventId: EEvent;
  actionId: number;
  data: number;
}

export interface CMsgClientToGCClaimSwagResponse {
  response: CMsgClientToGCClaimSwagResponse_EResponse;
}

export enum CMsgClientToGCClaimSwagResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTimeout = 2,
  k_eTooBusy = 4,
  k_eAlreadyClaimed = 5,
  k_eDisabled = 6,
  k_eInvalidRequest = 7,
  k_eUserNotEligible = 8,
  k_eStorageError = 9,
  k_eRewardDisabled = 10,
}

export interface CMsgClientToGCCollectorsCacheAvailableDataRequest {
  contestId: number;
}

export interface CMsgGCToClientCollectorsCacheAvailableDataResponse {
  votes: CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote[];
}

export interface CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote {
  itemDef: number;
  voteType: CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote_EVoteType;
}

export enum CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote_EVoteType {
  k_eUp = 0,
  k_eDown = 1,
}

export interface CMsgClientToGCUploadMatchClip {
  matchClip: CMatchClip | undefined;
}

export interface CMsgGCToClientUploadMatchClipResponse {
  response: CMsgGCToClientUploadMatchClipResponse_EResponse;
}

export enum CMsgGCToClientUploadMatchClipResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTimeout = 2,
  k_eTooBusy = 4,
}

export interface CMsgClientToGCMapStatsRequest {
}

export interface CMsgGCToClientMapStatsResponse {
  response: CMsgGCToClientMapStatsResponse_EResponse;
  personalStats: CMsgMapStatsSnapshot | undefined;
  globalStats: CMsgGlobalMapStats | undefined;
}

export enum CMsgGCToClientMapStatsResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
}

function createBaseCMsgClientSuspended(): CMsgClientSuspended {
  return { timeEnd: 0 };
}

export const CMsgClientSuspended = {
  encode(message: CMsgClientSuspended, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeEnd !== 0) {
      writer.uint32(8).uint32(message.timeEnd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSuspended {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSuspended();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.timeEnd = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgBalancedShuffleLobby(): CMsgBalancedShuffleLobby {
  return {};
}

export const CMsgBalancedShuffleLobby = {
  encode(_: CMsgBalancedShuffleLobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBalancedShuffleLobby {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBalancedShuffleLobby();
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

function createBaseCMsgInitialQuestionnaireResponse(): CMsgInitialQuestionnaireResponse {
  return { initialSkill: 0 };
}

export const CMsgInitialQuestionnaireResponse = {
  encode(message: CMsgInitialQuestionnaireResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initialSkill !== 0) {
      writer.uint32(8).uint32(message.initialSkill);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgInitialQuestionnaireResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgInitialQuestionnaireResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.initialSkill = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTARequestMatchesResponse(): CMsgDOTARequestMatchesResponse {
  return { matches: [], series: [], requestId: 0, totalResults: 0, resultsRemaining: 0 };
}

export const CMsgDOTARequestMatchesResponse = {
  encode(message: CMsgDOTARequestMatchesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.matches) {
      CMsgDOTAMatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.series) {
      CMsgDOTARequestMatchesResponse_Series.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.requestId !== 0) {
      writer.uint32(24).uint32(message.requestId);
    }
    if (message.totalResults !== 0) {
      writer.uint32(32).uint32(message.totalResults);
    }
    if (message.resultsRemaining !== 0) {
      writer.uint32(40).uint32(message.resultsRemaining);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARequestMatchesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARequestMatchesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.matches.push(CMsgDOTAMatch.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.series.push(CMsgDOTARequestMatchesResponse_Series.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.requestId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.totalResults = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.resultsRemaining = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTARequestMatchesResponse_Series(): CMsgDOTARequestMatchesResponse_Series {
  return { matches: [], seriesId: 0, seriesType: 0 };
}

export const CMsgDOTARequestMatchesResponse_Series = {
  encode(message: CMsgDOTARequestMatchesResponse_Series, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.matches) {
      CMsgDOTAMatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.seriesId !== 0) {
      writer.uint32(16).uint32(message.seriesId);
    }
    if (message.seriesType !== 0) {
      writer.uint32(24).uint32(message.seriesType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARequestMatchesResponse_Series {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARequestMatchesResponse_Series();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.matches.push(CMsgDOTAMatch.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.seriesId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.seriesType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAPopup(): CMsgDOTAPopup {
  return {
    id: 0,
    customText: "",
    intData: 0,
    popupData: Buffer.alloc(0),
    locTokenHeader: "",
    locTokenMsg: "",
    varNames: [],
    varValues: [],
    debugText: "",
  };
}

export const CMsgDOTAPopup = {
  encode(message: CMsgDOTAPopup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.customText !== "") {
      writer.uint32(18).string(message.customText);
    }
    if (message.intData !== 0) {
      writer.uint32(24).sint32(message.intData);
    }
    if (message.popupData.length !== 0) {
      writer.uint32(34).bytes(message.popupData);
    }
    if (message.locTokenHeader !== "") {
      writer.uint32(42).string(message.locTokenHeader);
    }
    if (message.locTokenMsg !== "") {
      writer.uint32(50).string(message.locTokenMsg);
    }
    for (const v of message.varNames) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.varValues) {
      writer.uint32(66).string(v!);
    }
    if (message.debugText !== "") {
      writer.uint32(74).string(message.debugText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAPopup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAPopup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.customText = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.intData = reader.sint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.popupData = reader.bytes() as Buffer;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.locTokenHeader = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.locTokenMsg = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.varNames.push(reader.string());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.varValues.push(reader.string());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.debugText = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAReportsRemainingRequest(): CMsgDOTAReportsRemainingRequest {
  return {};
}

export const CMsgDOTAReportsRemainingRequest = {
  encode(_: CMsgDOTAReportsRemainingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAReportsRemainingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAReportsRemainingRequest();
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

function createBaseCMsgDOTAReportsRemainingResponse(): CMsgDOTAReportsRemainingResponse {
  return {
    numPositiveReportsRemaining: 0,
    numNegativeReportsRemaining: 0,
    numPositiveReportsTotal: 0,
    numNegativeReportsTotal: 0,
    numCommsReportsRemaining: 0,
    numCommsReportsTotal: 0,
  };
}

export const CMsgDOTAReportsRemainingResponse = {
  encode(message: CMsgDOTAReportsRemainingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numPositiveReportsRemaining !== 0) {
      writer.uint32(8).uint32(message.numPositiveReportsRemaining);
    }
    if (message.numNegativeReportsRemaining !== 0) {
      writer.uint32(16).uint32(message.numNegativeReportsRemaining);
    }
    if (message.numPositiveReportsTotal !== 0) {
      writer.uint32(24).uint32(message.numPositiveReportsTotal);
    }
    if (message.numNegativeReportsTotal !== 0) {
      writer.uint32(32).uint32(message.numNegativeReportsTotal);
    }
    if (message.numCommsReportsRemaining !== 0) {
      writer.uint32(40).uint32(message.numCommsReportsRemaining);
    }
    if (message.numCommsReportsTotal !== 0) {
      writer.uint32(48).uint32(message.numCommsReportsTotal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAReportsRemainingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAReportsRemainingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.numPositiveReportsRemaining = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.numNegativeReportsRemaining = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.numPositiveReportsTotal = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.numNegativeReportsTotal = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.numCommsReportsRemaining = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.numCommsReportsTotal = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTASubmitPlayerReport(): CMsgDOTASubmitPlayerReport {
  return { targetAccountId: 0, reportFlags: 0, lobbyId: "0", comment: "" };
}

export const CMsgDOTASubmitPlayerReport = {
  encode(message: CMsgDOTASubmitPlayerReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetAccountId !== 0) {
      writer.uint32(8).uint32(message.targetAccountId);
    }
    if (message.reportFlags !== 0) {
      writer.uint32(16).uint32(message.reportFlags);
    }
    if (message.lobbyId !== "0") {
      writer.uint32(32).uint64(message.lobbyId);
    }
    if (message.comment !== "") {
      writer.uint32(42).string(message.comment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASubmitPlayerReport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASubmitPlayerReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.reportFlags = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.lobbyId = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 42) {
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

function createBaseCMsgDOTASubmitPlayerReportResponse(): CMsgDOTASubmitPlayerReportResponse {
  return { targetAccountId: 0, reportFlags: 0, debugMessage: "", enumResult: 0 };
}

export const CMsgDOTASubmitPlayerReportResponse = {
  encode(message: CMsgDOTASubmitPlayerReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetAccountId !== 0) {
      writer.uint32(8).uint32(message.targetAccountId);
    }
    if (message.reportFlags !== 0) {
      writer.uint32(16).uint32(message.reportFlags);
    }
    if (message.debugMessage !== "") {
      writer.uint32(34).string(message.debugMessage);
    }
    if (message.enumResult !== 0) {
      writer.uint32(40).int32(message.enumResult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASubmitPlayerReportResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASubmitPlayerReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.reportFlags = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.debugMessage = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.enumResult = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTASubmitPlayerAvoidRequest(): CMsgDOTASubmitPlayerAvoidRequest {
  return { targetAccountId: 0, lobbyId: "0", userNote: "" };
}

export const CMsgDOTASubmitPlayerAvoidRequest = {
  encode(message: CMsgDOTASubmitPlayerAvoidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetAccountId !== 0) {
      writer.uint32(8).uint32(message.targetAccountId);
    }
    if (message.lobbyId !== "0") {
      writer.uint32(32).uint64(message.lobbyId);
    }
    if (message.userNote !== "") {
      writer.uint32(42).string(message.userNote);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASubmitPlayerAvoidRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASubmitPlayerAvoidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetAccountId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.lobbyId = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.userNote = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTASubmitPlayerAvoidRequestResponse(): CMsgDOTASubmitPlayerAvoidRequestResponse {
  return { targetAccountId: 0, result: 0, debugMessage: "" };
}

export const CMsgDOTASubmitPlayerAvoidRequestResponse = {
  encode(message: CMsgDOTASubmitPlayerAvoidRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetAccountId !== 0) {
      writer.uint32(8).uint32(message.targetAccountId);
    }
    if (message.result !== 0) {
      writer.uint32(16).uint32(message.result);
    }
    if (message.debugMessage !== "") {
      writer.uint32(26).string(message.debugMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASubmitPlayerAvoidRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASubmitPlayerAvoidRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.debugMessage = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTASubmitLobbyMVPVote(): CMsgDOTASubmitLobbyMVPVote {
  return { targetAccountId: 0 };
}

export const CMsgDOTASubmitLobbyMVPVote = {
  encode(message: CMsgDOTASubmitLobbyMVPVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetAccountId !== 0) {
      writer.uint32(8).uint32(message.targetAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASubmitLobbyMVPVote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASubmitLobbyMVPVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
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
};

function createBaseCMsgDOTASubmitLobbyMVPVoteResponse(): CMsgDOTASubmitLobbyMVPVoteResponse {
  return { targetAccountId: 0, eresult: 0 };
}

export const CMsgDOTASubmitLobbyMVPVoteResponse = {
  encode(message: CMsgDOTASubmitLobbyMVPVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetAccountId !== 0) {
      writer.uint32(8).uint32(message.targetAccountId);
    }
    if (message.eresult !== 0) {
      writer.uint32(16).uint32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASubmitLobbyMVPVoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASubmitLobbyMVPVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.eresult = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALobbyMVPAwarded(): CMsgDOTALobbyMVPAwarded {
  return { matchId: "0", mvpAccountId: [] };
}

export const CMsgDOTALobbyMVPAwarded = {
  encode(message: CMsgDOTALobbyMVPAwarded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    writer.uint32(18).fork();
    for (const v of message.mvpAccountId) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALobbyMVPAwarded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALobbyMVPAwarded();
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
          if (tag == 16) {
            message.mvpAccountId.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.mvpAccountId.push(reader.uint32());
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

function createBaseCMsgDOTAKickedFromMatchmakingQueue(): CMsgDOTAKickedFromMatchmakingQueue {
  return { matchType: 0 };
}

export const CMsgDOTAKickedFromMatchmakingQueue = {
  encode(message: CMsgDOTAKickedFromMatchmakingQueue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchType !== 0) {
      writer.uint32(8).int32(message.matchType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAKickedFromMatchmakingQueue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAKickedFromMatchmakingQueue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.matchType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCMatchDetailsRequest(): CMsgGCMatchDetailsRequest {
  return { matchId: "0" };
}

export const CMsgGCMatchDetailsRequest = {
  encode(message: CMsgGCMatchDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCMatchDetailsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMatchDetailsRequest();
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
};

function createBaseCMsgGCMatchDetailsResponse(): CMsgGCMatchDetailsResponse {
  return { result: 0, match: undefined, vote: 0 };
}

export const CMsgGCMatchDetailsResponse = {
  encode(message: CMsgGCMatchDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.match !== undefined) {
      CMsgDOTAMatch.encode(message.match, writer.uint32(18).fork()).ldelim();
    }
    if (message.vote !== 0) {
      writer.uint32(24).int32(message.vote);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCMatchDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCMatchDetailsResponse();
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
          if (tag != 18) {
            break;
          }

          message.match = CMsgDOTAMatch.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.vote = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAProfileTickets(): CMsgDOTAProfileTickets {
  return { result: 0, accountId: 0, leaguePasses: [] };
}

export const CMsgDOTAProfileTickets = {
  encode(message: CMsgDOTAProfileTickets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    for (const v of message.leaguePasses) {
      CMsgDOTAProfileTickets_LeaguePass.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAProfileTickets {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAProfileTickets();
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

          message.accountId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.leaguePasses.push(CMsgDOTAProfileTickets_LeaguePass.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAProfileTickets_LeaguePass(): CMsgDOTAProfileTickets_LeaguePass {
  return { leagueId: 0, itemDef: 0 };
}

export const CMsgDOTAProfileTickets_LeaguePass = {
  encode(message: CMsgDOTAProfileTickets_LeaguePass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    if (message.itemDef !== 0) {
      writer.uint32(16).uint32(message.itemDef);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAProfileTickets_LeaguePass {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAProfileTickets_LeaguePass();
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
          if (tag != 16) {
            break;
          }

          message.itemDef = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCGetProfileTickets(): CMsgClientToGCGetProfileTickets {
  return { accountId: 0 };
}

export const CMsgClientToGCGetProfileTickets = {
  encode(message: CMsgClientToGCGetProfileTickets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetProfileTickets {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetProfileTickets();
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
};

function createBaseCMsgGCToClientPartySearchInvites(): CMsgGCToClientPartySearchInvites {
  return { invites: [] };
}

export const CMsgGCToClientPartySearchInvites = {
  encode(message: CMsgGCToClientPartySearchInvites, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.invites) {
      CMsgGCToClientPartySearchInvite.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientPartySearchInvites {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientPartySearchInvites();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.invites.push(CMsgGCToClientPartySearchInvite.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAWelcome(): CMsgDOTAWelcome {
  return {
    storeItemHash: 0,
    timeplayedconsecutively: 0,
    allow3rdPartyMatchHistory: false,
    lastIpAddress: 0,
    profilePrivate: false,
    currency: 0,
    shouldRequestPlayerOrigin: false,
    gcSocacheFileVersion: 0,
    isPerfectWorldTestAccount: false,
    extraMessages: [],
    minimumRecentItemId: "0",
    activeEvent: 0,
    additionalUserMessage: 0,
    customGameWhitelistVersion: 0,
    partySearchFriendInvites: undefined,
    remainingPlaytime: 0,
    disableGuildPersonaInfo: false,
    extraMessageBlocks: [],
  };
}

export const CMsgDOTAWelcome = {
  encode(message: CMsgDOTAWelcome, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storeItemHash !== 0) {
      writer.uint32(40).uint32(message.storeItemHash);
    }
    if (message.timeplayedconsecutively !== 0) {
      writer.uint32(48).uint32(message.timeplayedconsecutively);
    }
    if (message.allow3rdPartyMatchHistory === true) {
      writer.uint32(56).bool(message.allow3rdPartyMatchHistory);
    }
    if (message.lastIpAddress !== 0) {
      writer.uint32(104).uint32(message.lastIpAddress);
    }
    if (message.profilePrivate === true) {
      writer.uint32(136).bool(message.profilePrivate);
    }
    if (message.currency !== 0) {
      writer.uint32(144).uint32(message.currency);
    }
    if (message.shouldRequestPlayerOrigin === true) {
      writer.uint32(160).bool(message.shouldRequestPlayerOrigin);
    }
    if (message.gcSocacheFileVersion !== 0) {
      writer.uint32(176).uint32(message.gcSocacheFileVersion);
    }
    if (message.isPerfectWorldTestAccount === true) {
      writer.uint32(192).bool(message.isPerfectWorldTestAccount);
    }
    for (const v of message.extraMessages) {
      CMsgDOTAWelcome_CExtraMsg.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    if (message.minimumRecentItemId !== "0") {
      writer.uint32(216).uint64(message.minimumRecentItemId);
    }
    if (message.activeEvent !== 0) {
      writer.uint32(224).int32(message.activeEvent);
    }
    if (message.additionalUserMessage !== 0) {
      writer.uint32(232).uint32(message.additionalUserMessage);
    }
    if (message.customGameWhitelistVersion !== 0) {
      writer.uint32(240).uint32(message.customGameWhitelistVersion);
    }
    if (message.partySearchFriendInvites !== undefined) {
      CMsgGCToClientPartySearchInvites.encode(message.partySearchFriendInvites, writer.uint32(250).fork()).ldelim();
    }
    if (message.remainingPlaytime !== 0) {
      writer.uint32(256).int32(message.remainingPlaytime);
    }
    if (message.disableGuildPersonaInfo === true) {
      writer.uint32(264).bool(message.disableGuildPersonaInfo);
    }
    for (const v of message.extraMessageBlocks) {
      CExtraMsgBlock.encode(v!, writer.uint32(274).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAWelcome {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAWelcome();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag != 40) {
            break;
          }

          message.storeItemHash = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.timeplayedconsecutively = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.allow3rdPartyMatchHistory = reader.bool();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.lastIpAddress = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.profilePrivate = reader.bool();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.currency = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.shouldRequestPlayerOrigin = reader.bool();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.gcSocacheFileVersion = reader.uint32();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.isPerfectWorldTestAccount = reader.bool();
          continue;
        case 26:
          if (tag != 210) {
            break;
          }

          message.extraMessages.push(CMsgDOTAWelcome_CExtraMsg.decode(reader, reader.uint32()));
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.minimumRecentItemId = longToString(reader.uint64() as Long);
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.activeEvent = reader.int32() as any;
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.additionalUserMessage = reader.uint32();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.customGameWhitelistVersion = reader.uint32();
          continue;
        case 31:
          if (tag != 250) {
            break;
          }

          message.partySearchFriendInvites = CMsgGCToClientPartySearchInvites.decode(reader, reader.uint32());
          continue;
        case 32:
          if (tag != 256) {
            break;
          }

          message.remainingPlaytime = reader.int32();
          continue;
        case 33:
          if (tag != 264) {
            break;
          }

          message.disableGuildPersonaInfo = reader.bool();
          continue;
        case 34:
          if (tag != 274) {
            break;
          }

          message.extraMessageBlocks.push(CExtraMsgBlock.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAWelcome_CExtraMsg(): CMsgDOTAWelcome_CExtraMsg {
  return { id: 0, contents: Buffer.alloc(0) };
}

export const CMsgDOTAWelcome_CExtraMsg = {
  encode(message: CMsgDOTAWelcome_CExtraMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.contents.length !== 0) {
      writer.uint32(18).bytes(message.contents);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAWelcome_CExtraMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAWelcome_CExtraMsg();
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

function createBaseCSODOTAGameHeroFavorites(): CSODOTAGameHeroFavorites {
  return { accountId: 0, heroId: 0 };
}

export const CSODOTAGameHeroFavorites = {
  encode(message: CSODOTAGameHeroFavorites, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).uint32(message.heroId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSODOTAGameHeroFavorites {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSODOTAGameHeroFavorites();
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

function createBaseCMsgDOTAMatchVotes(): CMsgDOTAMatchVotes {
  return { matchId: "0", votes: [] };
}

export const CMsgDOTAMatchVotes = {
  encode(message: CMsgDOTAMatchVotes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    for (const v of message.votes) {
      CMsgDOTAMatchVotes_PlayerVote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMatchVotes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMatchVotes();
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

          message.votes.push(CMsgDOTAMatchVotes_PlayerVote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAMatchVotes_PlayerVote(): CMsgDOTAMatchVotes_PlayerVote {
  return { accountId: 0, vote: 0 };
}

export const CMsgDOTAMatchVotes_PlayerVote = {
  encode(message: CMsgDOTAMatchVotes_PlayerVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.vote !== 0) {
      writer.uint32(16).uint32(message.vote);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMatchVotes_PlayerVote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMatchVotes_PlayerVote();
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

          message.vote = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgMatchmakingMatchGroupInfo(): CMsgMatchmakingMatchGroupInfo {
  return { playersSearching: 0, autoRegionSelectPingPenalty: 0, autoRegionSelectPingPenaltyCustom: 0, status: 0 };
}

export const CMsgMatchmakingMatchGroupInfo = {
  encode(message: CMsgMatchmakingMatchGroupInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playersSearching !== 0) {
      writer.uint32(8).uint32(message.playersSearching);
    }
    if (message.autoRegionSelectPingPenalty !== 0) {
      writer.uint32(16).sint32(message.autoRegionSelectPingPenalty);
    }
    if (message.autoRegionSelectPingPenaltyCustom !== 0) {
      writer.uint32(32).sint32(message.autoRegionSelectPingPenaltyCustom);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMatchmakingMatchGroupInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMatchmakingMatchGroupInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playersSearching = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.autoRegionSelectPingPenalty = reader.sint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.autoRegionSelectPingPenaltyCustom = reader.sint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAMatchmakingStatsRequest(): CMsgDOTAMatchmakingStatsRequest {
  return {};
}

export const CMsgDOTAMatchmakingStatsRequest = {
  encode(_: CMsgDOTAMatchmakingStatsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMatchmakingStatsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMatchmakingStatsRequest();
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

function createBaseCMsgDOTAMatchmakingStatsResponse(): CMsgDOTAMatchmakingStatsResponse {
  return { matchgroupsVersion: 0, legacySearchingPlayersByGroupSource2: [], matchGroups: [] };
}

export const CMsgDOTAMatchmakingStatsResponse = {
  encode(message: CMsgDOTAMatchmakingStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchgroupsVersion !== 0) {
      writer.uint32(8).uint32(message.matchgroupsVersion);
    }
    writer.uint32(58).fork();
    for (const v of message.legacySearchingPlayersByGroupSource2) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.matchGroups) {
      CMsgMatchmakingMatchGroupInfo.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMatchmakingStatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMatchmakingStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.matchgroupsVersion = reader.uint32();
          continue;
        case 7:
          if (tag == 56) {
            message.legacySearchingPlayersByGroupSource2.push(reader.uint32());
            continue;
          }

          if (tag == 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.legacySearchingPlayersByGroupSource2.push(reader.uint32());
            }

            continue;
          }

          break;
        case 8:
          if (tag != 66) {
            break;
          }

          message.matchGroups.push(CMsgMatchmakingMatchGroupInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAUpdateMatchmakingStats(): CMsgDOTAUpdateMatchmakingStats {
  return { stats: undefined };
}

export const CMsgDOTAUpdateMatchmakingStats = {
  encode(message: CMsgDOTAUpdateMatchmakingStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stats !== undefined) {
      CMsgDOTAMatchmakingStatsResponse.encode(message.stats, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAUpdateMatchmakingStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAUpdateMatchmakingStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.stats = CMsgDOTAMatchmakingStatsResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAUpdateMatchManagementStats(): CMsgDOTAUpdateMatchManagementStats {
  return { stats: undefined };
}

export const CMsgDOTAUpdateMatchManagementStats = {
  encode(message: CMsgDOTAUpdateMatchManagementStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stats !== undefined) {
      CMsgDOTAMatchmakingStatsResponse.encode(message.stats, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAUpdateMatchManagementStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAUpdateMatchManagementStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.stats = CMsgDOTAMatchmakingStatsResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTASetMatchHistoryAccess(): CMsgDOTASetMatchHistoryAccess {
  return { allow3rdPartyMatchHistory: false };
}

export const CMsgDOTASetMatchHistoryAccess = {
  encode(message: CMsgDOTASetMatchHistoryAccess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allow3rdPartyMatchHistory === true) {
      writer.uint32(8).bool(message.allow3rdPartyMatchHistory);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASetMatchHistoryAccess {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASetMatchHistoryAccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.allow3rdPartyMatchHistory = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTASetMatchHistoryAccessResponse(): CMsgDOTASetMatchHistoryAccessResponse {
  return { eresult: 0 };
}

export const CMsgDOTASetMatchHistoryAccessResponse = {
  encode(message: CMsgDOTASetMatchHistoryAccessResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).uint32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASetMatchHistoryAccessResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASetMatchHistoryAccessResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eresult = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTANotifyAccountFlagsChange(): CMsgDOTANotifyAccountFlagsChange {
  return { accountid: 0, accountFlags: 0 };
}

export const CMsgDOTANotifyAccountFlagsChange = {
  encode(message: CMsgDOTANotifyAccountFlagsChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.accountFlags !== 0) {
      writer.uint32(16).uint32(message.accountFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTANotifyAccountFlagsChange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTANotifyAccountFlagsChange();
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

          message.accountFlags = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTASetProfilePrivacy(): CMsgDOTASetProfilePrivacy {
  return { profilePrivate: false };
}

export const CMsgDOTASetProfilePrivacy = {
  encode(message: CMsgDOTASetProfilePrivacy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profilePrivate === true) {
      writer.uint32(8).bool(message.profilePrivate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASetProfilePrivacy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASetProfilePrivacy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.profilePrivate = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTASetProfilePrivacyResponse(): CMsgDOTASetProfilePrivacyResponse {
  return { eresult: 0 };
}

export const CMsgDOTASetProfilePrivacyResponse = {
  encode(message: CMsgDOTASetProfilePrivacyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).uint32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASetProfilePrivacyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASetProfilePrivacyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eresult = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgUpgradeLeagueItem(): CMsgUpgradeLeagueItem {
  return { matchId: "0", leagueId: 0 };
}

export const CMsgUpgradeLeagueItem = {
  encode(message: CMsgUpgradeLeagueItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.leagueId !== 0) {
      writer.uint32(16).uint32(message.leagueId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgUpgradeLeagueItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgUpgradeLeagueItem();
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
};

function createBaseCMsgUpgradeLeagueItemResponse(): CMsgUpgradeLeagueItemResponse {
  return {};
}

export const CMsgUpgradeLeagueItemResponse = {
  encode(_: CMsgUpgradeLeagueItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgUpgradeLeagueItemResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgUpgradeLeagueItemResponse();
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

function createBaseCMsgGCWatchDownloadedReplay(): CMsgGCWatchDownloadedReplay {
  return { matchId: "0", watchType: 0 };
}

export const CMsgGCWatchDownloadedReplay = {
  encode(message: CMsgGCWatchDownloadedReplay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.watchType !== 0) {
      writer.uint32(16).int32(message.watchType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCWatchDownloadedReplay {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCWatchDownloadedReplay();
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

          message.watchType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientsRejoinChatChannels(): CMsgClientsRejoinChatChannels {
  return {};
}

export const CMsgClientsRejoinChatChannels = {
  encode(_: CMsgClientsRejoinChatChannels, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientsRejoinChatChannels {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientsRejoinChatChannels();
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

function createBaseCMsgGCGetHeroStandings(): CMsgGCGetHeroStandings {
  return {};
}

export const CMsgGCGetHeroStandings = {
  encode(_: CMsgGCGetHeroStandings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetHeroStandings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetHeroStandings();
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

function createBaseCMsgGCGetHeroStandingsResponse(): CMsgGCGetHeroStandingsResponse {
  return { standings: [] };
}

export const CMsgGCGetHeroStandingsResponse = {
  encode(message: CMsgGCGetHeroStandingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.standings) {
      CMsgGCGetHeroStandingsResponse_Hero.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetHeroStandingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetHeroStandingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.standings.push(CMsgGCGetHeroStandingsResponse_Hero.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCGetHeroStandingsResponse_Hero(): CMsgGCGetHeroStandingsResponse_Hero {
  return {
    heroId: 0,
    wins: 0,
    losses: 0,
    winStreak: 0,
    bestWinStreak: 0,
    avgKills: 0,
    avgDeaths: 0,
    avgAssists: 0,
    avgGpm: 0,
    avgXpm: 0,
    bestKills: 0,
    bestAssists: 0,
    bestGpm: 0,
    bestXpm: 0,
    performance: 0,
    winsWithAlly: 0,
    lossesWithAlly: 0,
    winsAgainstEnemy: 0,
    lossesAgainstEnemy: 0,
    networthPeak: 0,
    lasthitPeak: 0,
    denyPeak: 0,
    damagePeak: 0,
    longestGamePeak: 0,
    healingPeak: 0,
    avgLasthits: 0,
    avgDenies: 0,
  };
}

export const CMsgGCGetHeroStandingsResponse_Hero = {
  encode(message: CMsgGCGetHeroStandingsResponse_Hero, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.wins !== 0) {
      writer.uint32(16).uint32(message.wins);
    }
    if (message.losses !== 0) {
      writer.uint32(24).uint32(message.losses);
    }
    if (message.winStreak !== 0) {
      writer.uint32(32).uint32(message.winStreak);
    }
    if (message.bestWinStreak !== 0) {
      writer.uint32(40).uint32(message.bestWinStreak);
    }
    if (message.avgKills !== 0) {
      writer.uint32(53).float(message.avgKills);
    }
    if (message.avgDeaths !== 0) {
      writer.uint32(61).float(message.avgDeaths);
    }
    if (message.avgAssists !== 0) {
      writer.uint32(69).float(message.avgAssists);
    }
    if (message.avgGpm !== 0) {
      writer.uint32(77).float(message.avgGpm);
    }
    if (message.avgXpm !== 0) {
      writer.uint32(85).float(message.avgXpm);
    }
    if (message.bestKills !== 0) {
      writer.uint32(88).uint32(message.bestKills);
    }
    if (message.bestAssists !== 0) {
      writer.uint32(96).uint32(message.bestAssists);
    }
    if (message.bestGpm !== 0) {
      writer.uint32(104).uint32(message.bestGpm);
    }
    if (message.bestXpm !== 0) {
      writer.uint32(112).uint32(message.bestXpm);
    }
    if (message.performance !== 0) {
      writer.uint32(125).float(message.performance);
    }
    if (message.winsWithAlly !== 0) {
      writer.uint32(128).uint32(message.winsWithAlly);
    }
    if (message.lossesWithAlly !== 0) {
      writer.uint32(136).uint32(message.lossesWithAlly);
    }
    if (message.winsAgainstEnemy !== 0) {
      writer.uint32(144).uint32(message.winsAgainstEnemy);
    }
    if (message.lossesAgainstEnemy !== 0) {
      writer.uint32(152).uint32(message.lossesAgainstEnemy);
    }
    if (message.networthPeak !== 0) {
      writer.uint32(160).uint32(message.networthPeak);
    }
    if (message.lasthitPeak !== 0) {
      writer.uint32(168).uint32(message.lasthitPeak);
    }
    if (message.denyPeak !== 0) {
      writer.uint32(176).uint32(message.denyPeak);
    }
    if (message.damagePeak !== 0) {
      writer.uint32(184).uint32(message.damagePeak);
    }
    if (message.longestGamePeak !== 0) {
      writer.uint32(192).uint32(message.longestGamePeak);
    }
    if (message.healingPeak !== 0) {
      writer.uint32(200).uint32(message.healingPeak);
    }
    if (message.avgLasthits !== 0) {
      writer.uint32(213).float(message.avgLasthits);
    }
    if (message.avgDenies !== 0) {
      writer.uint32(221).float(message.avgDenies);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetHeroStandingsResponse_Hero {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetHeroStandingsResponse_Hero();
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

          message.wins = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.losses = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.winStreak = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.bestWinStreak = reader.uint32();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.avgKills = reader.float();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.avgDeaths = reader.float();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.avgAssists = reader.float();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.avgGpm = reader.float();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.avgXpm = reader.float();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.bestKills = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.bestAssists = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.bestGpm = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.bestXpm = reader.uint32();
          continue;
        case 15:
          if (tag != 125) {
            break;
          }

          message.performance = reader.float();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.winsWithAlly = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.lossesWithAlly = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.winsAgainstEnemy = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.lossesAgainstEnemy = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.networthPeak = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.lasthitPeak = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.denyPeak = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.damagePeak = reader.uint32();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.longestGamePeak = reader.uint32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.healingPeak = reader.uint32();
          continue;
        case 26:
          if (tag != 213) {
            break;
          }

          message.avgLasthits = reader.float();
          continue;
        case 27:
          if (tag != 221) {
            break;
          }

          message.avgDenies = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMatchPlayerTimedStatAverages(): CMatchPlayerTimedStatAverages {
  return {
    kills: 0,
    deaths: 0,
    assists: 0,
    netWorth: 0,
    lastHits: 0,
    denies: 0,
    itemValue: 0,
    supportGoldSpent: 0,
    campsStacked: 0,
    wardsPlaced: 0,
    dewards: 0,
    tripleKills: 0,
    rampages: 0,
  };
}

export const CMatchPlayerTimedStatAverages = {
  encode(message: CMatchPlayerTimedStatAverages, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kills !== 0) {
      writer.uint32(21).float(message.kills);
    }
    if (message.deaths !== 0) {
      writer.uint32(29).float(message.deaths);
    }
    if (message.assists !== 0) {
      writer.uint32(37).float(message.assists);
    }
    if (message.netWorth !== 0) {
      writer.uint32(45).float(message.netWorth);
    }
    if (message.lastHits !== 0) {
      writer.uint32(53).float(message.lastHits);
    }
    if (message.denies !== 0) {
      writer.uint32(61).float(message.denies);
    }
    if (message.itemValue !== 0) {
      writer.uint32(69).float(message.itemValue);
    }
    if (message.supportGoldSpent !== 0) {
      writer.uint32(77).float(message.supportGoldSpent);
    }
    if (message.campsStacked !== 0) {
      writer.uint32(85).float(message.campsStacked);
    }
    if (message.wardsPlaced !== 0) {
      writer.uint32(93).float(message.wardsPlaced);
    }
    if (message.dewards !== 0) {
      writer.uint32(101).float(message.dewards);
    }
    if (message.tripleKills !== 0) {
      writer.uint32(109).float(message.tripleKills);
    }
    if (message.rampages !== 0) {
      writer.uint32(117).float(message.rampages);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMatchPlayerTimedStatAverages {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMatchPlayerTimedStatAverages();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 21) {
            break;
          }

          message.kills = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.deaths = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.assists = reader.float();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.netWorth = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.lastHits = reader.float();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.denies = reader.float();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.itemValue = reader.float();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.supportGoldSpent = reader.float();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.campsStacked = reader.float();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.wardsPlaced = reader.float();
          continue;
        case 12:
          if (tag != 101) {
            break;
          }

          message.dewards = reader.float();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.tripleKills = reader.float();
          continue;
        case 14:
          if (tag != 117) {
            break;
          }

          message.rampages = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMatchPlayerTimedStatStdDeviations(): CMatchPlayerTimedStatStdDeviations {
  return {
    kills: 0,
    deaths: 0,
    assists: 0,
    netWorth: 0,
    lastHits: 0,
    denies: 0,
    itemValue: 0,
    supportGoldSpent: 0,
    campsStacked: 0,
    wardsPlaced: 0,
    dewards: 0,
    tripleKills: 0,
    rampages: 0,
  };
}

export const CMatchPlayerTimedStatStdDeviations = {
  encode(message: CMatchPlayerTimedStatStdDeviations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kills !== 0) {
      writer.uint32(21).float(message.kills);
    }
    if (message.deaths !== 0) {
      writer.uint32(29).float(message.deaths);
    }
    if (message.assists !== 0) {
      writer.uint32(37).float(message.assists);
    }
    if (message.netWorth !== 0) {
      writer.uint32(45).float(message.netWorth);
    }
    if (message.lastHits !== 0) {
      writer.uint32(53).float(message.lastHits);
    }
    if (message.denies !== 0) {
      writer.uint32(61).float(message.denies);
    }
    if (message.itemValue !== 0) {
      writer.uint32(69).float(message.itemValue);
    }
    if (message.supportGoldSpent !== 0) {
      writer.uint32(77).float(message.supportGoldSpent);
    }
    if (message.campsStacked !== 0) {
      writer.uint32(85).float(message.campsStacked);
    }
    if (message.wardsPlaced !== 0) {
      writer.uint32(93).float(message.wardsPlaced);
    }
    if (message.dewards !== 0) {
      writer.uint32(101).float(message.dewards);
    }
    if (message.tripleKills !== 0) {
      writer.uint32(109).float(message.tripleKills);
    }
    if (message.rampages !== 0) {
      writer.uint32(117).float(message.rampages);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMatchPlayerTimedStatStdDeviations {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMatchPlayerTimedStatStdDeviations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 21) {
            break;
          }

          message.kills = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.deaths = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.assists = reader.float();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.netWorth = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.lastHits = reader.float();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.denies = reader.float();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.itemValue = reader.float();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.supportGoldSpent = reader.float();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.campsStacked = reader.float();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.wardsPlaced = reader.float();
          continue;
        case 12:
          if (tag != 101) {
            break;
          }

          message.dewards = reader.float();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.tripleKills = reader.float();
          continue;
        case 14:
          if (tag != 117) {
            break;
          }

          message.rampages = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCGetHeroTimedStatsResponse(): CMsgGCGetHeroTimedStatsResponse {
  return { heroId: 0, rankChunkedStats: [] };
}

export const CMsgGCGetHeroTimedStatsResponse = {
  encode(message: CMsgGCGetHeroTimedStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    for (const v of message.rankChunkedStats) {
      CMsgGCGetHeroTimedStatsResponse_RankChunkedStats.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetHeroTimedStatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetHeroTimedStatsResponse();
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

          message.rankChunkedStats.push(
            CMsgGCGetHeroTimedStatsResponse_RankChunkedStats.decode(reader, reader.uint32()),
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

function createBaseCMsgGCGetHeroTimedStatsResponse_TimedStatsContainer(): CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer {
  return {
    time: 0,
    allStats: undefined,
    winningStats: undefined,
    losingStats: undefined,
    winningStddevs: undefined,
    losingStddevs: undefined,
  };
}

export const CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer = {
  encode(
    message: CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).uint32(message.time);
    }
    if (message.allStats !== undefined) {
      CMatchPlayerTimedStatAverages.encode(message.allStats, writer.uint32(18).fork()).ldelim();
    }
    if (message.winningStats !== undefined) {
      CMatchPlayerTimedStatAverages.encode(message.winningStats, writer.uint32(26).fork()).ldelim();
    }
    if (message.losingStats !== undefined) {
      CMatchPlayerTimedStatAverages.encode(message.losingStats, writer.uint32(34).fork()).ldelim();
    }
    if (message.winningStddevs !== undefined) {
      CMatchPlayerTimedStatStdDeviations.encode(message.winningStddevs, writer.uint32(42).fork()).ldelim();
    }
    if (message.losingStddevs !== undefined) {
      CMatchPlayerTimedStatStdDeviations.encode(message.losingStddevs, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetHeroTimedStatsResponse_TimedStatsContainer();
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
          if (tag != 18) {
            break;
          }

          message.allStats = CMatchPlayerTimedStatAverages.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.winningStats = CMatchPlayerTimedStatAverages.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.losingStats = CMatchPlayerTimedStatAverages.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.winningStddevs = CMatchPlayerTimedStatStdDeviations.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.losingStddevs = CMatchPlayerTimedStatStdDeviations.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCGetHeroTimedStatsResponse_RankChunkedStats(): CMsgGCGetHeroTimedStatsResponse_RankChunkedStats {
  return { rankChunk: 0, timedStats: [] };
}

export const CMsgGCGetHeroTimedStatsResponse_RankChunkedStats = {
  encode(
    message: CMsgGCGetHeroTimedStatsResponse_RankChunkedStats,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.rankChunk !== 0) {
      writer.uint32(8).uint32(message.rankChunk);
    }
    for (const v of message.timedStats) {
      CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetHeroTimedStatsResponse_RankChunkedStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetHeroTimedStatsResponse_RankChunkedStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.rankChunk = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.timedStats.push(CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCItemEditorReservationsRequest(): CMsgGCItemEditorReservationsRequest {
  return {};
}

export const CMsgGCItemEditorReservationsRequest = {
  encode(_: CMsgGCItemEditorReservationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCItemEditorReservationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCItemEditorReservationsRequest();
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

function createBaseCMsgGCItemEditorReservation(): CMsgGCItemEditorReservation {
  return { defIndex: 0, name: "" };
}

export const CMsgGCItemEditorReservation = {
  encode(message: CMsgGCItemEditorReservation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defIndex !== 0) {
      writer.uint32(8).uint32(message.defIndex);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCItemEditorReservation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCItemEditorReservation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.defIndex = reader.uint32();
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

function createBaseCMsgGCItemEditorReservationsResponse(): CMsgGCItemEditorReservationsResponse {
  return { reservations: [] };
}

export const CMsgGCItemEditorReservationsResponse = {
  encode(message: CMsgGCItemEditorReservationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.reservations) {
      CMsgGCItemEditorReservation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCItemEditorReservationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCItemEditorReservationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.reservations.push(CMsgGCItemEditorReservation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCItemEditorReserveItemDef(): CMsgGCItemEditorReserveItemDef {
  return { defIndex: 0, username: "" };
}

export const CMsgGCItemEditorReserveItemDef = {
  encode(message: CMsgGCItemEditorReserveItemDef, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defIndex !== 0) {
      writer.uint32(8).uint32(message.defIndex);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCItemEditorReserveItemDef {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCItemEditorReserveItemDef();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.defIndex = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.username = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCItemEditorReserveItemDefResponse(): CMsgGCItemEditorReserveItemDefResponse {
  return { defIndex: 0, username: "", result: 0 };
}

export const CMsgGCItemEditorReserveItemDefResponse = {
  encode(message: CMsgGCItemEditorReserveItemDefResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defIndex !== 0) {
      writer.uint32(8).uint32(message.defIndex);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.result !== 0) {
      writer.uint32(24).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCItemEditorReserveItemDefResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCItemEditorReserveItemDefResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.defIndex = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.username = reader.string();
          continue;
        case 3:
          if (tag != 24) {
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

function createBaseCMsgGCItemEditorReleaseReservation(): CMsgGCItemEditorReleaseReservation {
  return { defIndex: 0, username: "" };
}

export const CMsgGCItemEditorReleaseReservation = {
  encode(message: CMsgGCItemEditorReleaseReservation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defIndex !== 0) {
      writer.uint32(8).uint32(message.defIndex);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCItemEditorReleaseReservation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCItemEditorReleaseReservation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.defIndex = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.username = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCItemEditorReleaseReservationResponse(): CMsgGCItemEditorReleaseReservationResponse {
  return { defIndex: 0, released: false };
}

export const CMsgGCItemEditorReleaseReservationResponse = {
  encode(message: CMsgGCItemEditorReleaseReservationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defIndex !== 0) {
      writer.uint32(8).uint32(message.defIndex);
    }
    if (message.released === true) {
      writer.uint32(16).bool(message.released);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCItemEditorReleaseReservationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCItemEditorReleaseReservationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.defIndex = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.released = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTARewardTutorialPrizes(): CMsgDOTARewardTutorialPrizes {
  return { locationId: 0, trackingOnly: false };
}

export const CMsgDOTARewardTutorialPrizes = {
  encode(message: CMsgDOTARewardTutorialPrizes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.locationId !== 0) {
      writer.uint32(8).uint32(message.locationId);
    }
    if (message.trackingOnly === true) {
      writer.uint32(16).bool(message.trackingOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARewardTutorialPrizes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARewardTutorialPrizes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.locationId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.trackingOnly = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgFlipLobbyTeams(): CMsgFlipLobbyTeams {
  return {};
}

export const CMsgFlipLobbyTeams = {
  encode(_: CMsgFlipLobbyTeams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgFlipLobbyTeams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgFlipLobbyTeams();
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

function createBaseCMsgGCLobbyUpdateBroadcastChannelInfo(): CMsgGCLobbyUpdateBroadcastChannelInfo {
  return { channelId: 0, countryCode: "", description: "", languageCode: "" };
}

export const CMsgGCLobbyUpdateBroadcastChannelInfo = {
  encode(message: CMsgGCLobbyUpdateBroadcastChannelInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCLobbyUpdateBroadcastChannelInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCLobbyUpdateBroadcastChannelInfo();
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

function createBaseCMsgDOTAClaimEventActionData(): CMsgDOTAClaimEventActionData {
  return { grantItemGiftData: undefined };
}

export const CMsgDOTAClaimEventActionData = {
  encode(message: CMsgDOTAClaimEventActionData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.grantItemGiftData !== undefined) {
      CMsgDOTAClaimEventActionData_GrantItemGiftData.encode(message.grantItemGiftData, writer.uint32(34).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAClaimEventActionData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAClaimEventActionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag != 34) {
            break;
          }

          message.grantItemGiftData = CMsgDOTAClaimEventActionData_GrantItemGiftData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAClaimEventActionData_GrantItemGiftData(): CMsgDOTAClaimEventActionData_GrantItemGiftData {
  return { giveToAccountId: 0, giftMessage: "" };
}

export const CMsgDOTAClaimEventActionData_GrantItemGiftData = {
  encode(
    message: CMsgDOTAClaimEventActionData_GrantItemGiftData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.giveToAccountId !== 0) {
      writer.uint32(8).uint32(message.giveToAccountId);
    }
    if (message.giftMessage !== "") {
      writer.uint32(18).string(message.giftMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAClaimEventActionData_GrantItemGiftData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAClaimEventActionData_GrantItemGiftData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.giveToAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.giftMessage = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAClaimEventAction(): CMsgDOTAClaimEventAction {
  return { eventId: 0, actionId: 0, quantity: 0, data: undefined };
}

export const CMsgDOTAClaimEventAction = {
  encode(message: CMsgDOTAClaimEventAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.actionId !== 0) {
      writer.uint32(16).uint32(message.actionId);
    }
    if (message.quantity !== 0) {
      writer.uint32(24).uint32(message.quantity);
    }
    if (message.data !== undefined) {
      CMsgDOTAClaimEventActionData.encode(message.data, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAClaimEventAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAClaimEventAction();
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

          message.actionId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.quantity = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.data = CMsgDOTAClaimEventActionData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAClaimEventActionResponse(): CMsgDOTAClaimEventActionResponse {
  return { result: 0, rewardResults: [] };
}

export const CMsgDOTAClaimEventActionResponse = {
  encode(message: CMsgDOTAClaimEventActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    for (const v of message.rewardResults) {
      CMsgDOTAClaimEventActionResponse_GrantedRewardData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAClaimEventActionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAClaimEventActionResponse();
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

          message.rewardResults.push(
            CMsgDOTAClaimEventActionResponse_GrantedRewardData.decode(reader, reader.uint32()),
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

function createBaseCMsgDOTAClaimEventActionResponse_MysteryItemRewardData(): CMsgDOTAClaimEventActionResponse_MysteryItemRewardData {
  return { itemDef: 0, itemCategory: 0 };
}

export const CMsgDOTAClaimEventActionResponse_MysteryItemRewardData = {
  encode(
    message: CMsgDOTAClaimEventActionResponse_MysteryItemRewardData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.itemDef !== 0) {
      writer.uint32(8).uint32(message.itemDef);
    }
    if (message.itemCategory !== 0) {
      writer.uint32(16).uint32(message.itemCategory);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAClaimEventActionResponse_MysteryItemRewardData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAClaimEventActionResponse_MysteryItemRewardData();
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

          message.itemCategory = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAClaimEventActionResponse_LootListRewardData(): CMsgDOTAClaimEventActionResponse_LootListRewardData {
  return { itemDef: [] };
}

export const CMsgDOTAClaimEventActionResponse_LootListRewardData = {
  encode(
    message: CMsgDOTAClaimEventActionResponse_LootListRewardData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.itemDef) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAClaimEventActionResponse_LootListRewardData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAClaimEventActionResponse_LootListRewardData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.itemDef.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemDef.push(reader.uint32());
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

function createBaseCMsgDOTAClaimEventActionResponse_ActionListRewardData(): CMsgDOTAClaimEventActionResponse_ActionListRewardData {
  return { actionId: 0, resultRewardData: Buffer.alloc(0) };
}

export const CMsgDOTAClaimEventActionResponse_ActionListRewardData = {
  encode(
    message: CMsgDOTAClaimEventActionResponse_ActionListRewardData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.actionId !== 0) {
      writer.uint32(8).uint32(message.actionId);
    }
    if (message.resultRewardData.length !== 0) {
      writer.uint32(18).bytes(message.resultRewardData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAClaimEventActionResponse_ActionListRewardData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAClaimEventActionResponse_ActionListRewardData();
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

          message.resultRewardData = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAClaimEventActionResponse_GrantedRewardData(): CMsgDOTAClaimEventActionResponse_GrantedRewardData {
  return { grantIndex: 0, scoreIndex: 0, rewardIndex: 0, rewardData: Buffer.alloc(0) };
}

export const CMsgDOTAClaimEventActionResponse_GrantedRewardData = {
  encode(
    message: CMsgDOTAClaimEventActionResponse_GrantedRewardData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.grantIndex !== 0) {
      writer.uint32(8).uint32(message.grantIndex);
    }
    if (message.scoreIndex !== 0) {
      writer.uint32(16).uint32(message.scoreIndex);
    }
    if (message.rewardIndex !== 0) {
      writer.uint32(24).uint32(message.rewardIndex);
    }
    if (message.rewardData.length !== 0) {
      writer.uint32(34).bytes(message.rewardData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAClaimEventActionResponse_GrantedRewardData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAClaimEventActionResponse_GrantedRewardData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.grantIndex = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.scoreIndex = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.rewardIndex = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.rewardData = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCClaimEventActionUsingItem(): CMsgClientToGCClaimEventActionUsingItem {
  return { eventId: 0, actionId: 0, itemId: "0", quantity: 0 };
}

export const CMsgClientToGCClaimEventActionUsingItem = {
  encode(message: CMsgClientToGCClaimEventActionUsingItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.actionId !== 0) {
      writer.uint32(16).uint32(message.actionId);
    }
    if (message.itemId !== "0") {
      writer.uint32(24).uint64(message.itemId);
    }
    if (message.quantity !== 0) {
      writer.uint32(32).uint32(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCClaimEventActionUsingItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCClaimEventActionUsingItem();
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

          message.actionId = reader.uint32();
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

function createBaseCMsgClientToGCClaimEventActionUsingItemResponse(): CMsgClientToGCClaimEventActionUsingItemResponse {
  return { actionResults: undefined };
}

export const CMsgClientToGCClaimEventActionUsingItemResponse = {
  encode(
    message: CMsgClientToGCClaimEventActionUsingItemResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.actionResults !== undefined) {
      CMsgDOTAClaimEventActionResponse.encode(message.actionResults, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCClaimEventActionUsingItemResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCClaimEventActionUsingItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.actionResults = CMsgDOTAClaimEventActionResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientClaimEventActionUsingItemCompleted(): CMsgGCToClientClaimEventActionUsingItemCompleted {
  return { itemId: "0", actionResults: undefined };
}

export const CMsgGCToClientClaimEventActionUsingItemCompleted = {
  encode(
    message: CMsgGCToClientClaimEventActionUsingItemCompleted,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    if (message.actionResults !== undefined) {
      CMsgDOTAClaimEventActionResponse.encode(message.actionResults, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientClaimEventActionUsingItemCompleted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientClaimEventActionUsingItemCompleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.actionResults = CMsgDOTAClaimEventActionResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAGetEventPoints(): CMsgDOTAGetEventPoints {
  return { eventId: 0, accountId: 0 };
}

export const CMsgDOTAGetEventPoints = {
  encode(message: CMsgDOTAGetEventPoints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAGetEventPoints {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAGetEventPoints();
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
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAGetEventPointsResponse(): CMsgDOTAGetEventPointsResponse {
  return {
    totalPoints: 0,
    totalPremiumPoints: 0,
    eventId: 0,
    points: 0,
    premiumPoints: 0,
    completedActions: [],
    accountId: 0,
    owned: false,
    auditAction: 0,
    activeSeasonId: 0,
  };
}

export const CMsgDOTAGetEventPointsResponse = {
  encode(message: CMsgDOTAGetEventPointsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalPoints !== 0) {
      writer.uint32(8).uint32(message.totalPoints);
    }
    if (message.totalPremiumPoints !== 0) {
      writer.uint32(16).uint32(message.totalPremiumPoints);
    }
    if (message.eventId !== 0) {
      writer.uint32(24).uint32(message.eventId);
    }
    if (message.points !== 0) {
      writer.uint32(32).uint32(message.points);
    }
    if (message.premiumPoints !== 0) {
      writer.uint32(40).uint32(message.premiumPoints);
    }
    for (const v of message.completedActions) {
      CMsgDOTAGetEventPointsResponse_Action.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.accountId !== 0) {
      writer.uint32(56).uint32(message.accountId);
    }
    if (message.owned === true) {
      writer.uint32(64).bool(message.owned);
    }
    if (message.auditAction !== 0) {
      writer.uint32(72).uint32(message.auditAction);
    }
    if (message.activeSeasonId !== 0) {
      writer.uint32(80).uint32(message.activeSeasonId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAGetEventPointsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAGetEventPointsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.totalPoints = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.totalPremiumPoints = reader.uint32();
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

          message.points = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.premiumPoints = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.completedActions.push(CMsgDOTAGetEventPointsResponse_Action.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.owned = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.auditAction = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.activeSeasonId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAGetEventPointsResponse_Action(): CMsgDOTAGetEventPointsResponse_Action {
  return { actionId: 0, timesCompleted: 0 };
}

export const CMsgDOTAGetEventPointsResponse_Action = {
  encode(message: CMsgDOTAGetEventPointsResponse_Action, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionId !== 0) {
      writer.uint32(8).uint32(message.actionId);
    }
    if (message.timesCompleted !== 0) {
      writer.uint32(16).uint32(message.timesCompleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAGetEventPointsResponse_Action {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAGetEventPointsResponse_Action();
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

          message.timesCompleted = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAGetPeriodicResource(): CMsgDOTAGetPeriodicResource {
  return { accountId: 0, periodicResourceId: 0, timestamp: 0 };
}

export const CMsgDOTAGetPeriodicResource = {
  encode(message: CMsgDOTAGetPeriodicResource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.periodicResourceId !== 0) {
      writer.uint32(16).uint32(message.periodicResourceId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).uint32(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAGetPeriodicResource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAGetPeriodicResource();
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

          message.periodicResourceId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
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
};

function createBaseCMsgDOTAGetPeriodicResourceResponse(): CMsgDOTAGetPeriodicResourceResponse {
  return { periodicResourceMax: 0, periodicResourceUsed: 0 };
}

export const CMsgDOTAGetPeriodicResourceResponse = {
  encode(message: CMsgDOTAGetPeriodicResourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.periodicResourceMax !== 0) {
      writer.uint32(8).uint32(message.periodicResourceMax);
    }
    if (message.periodicResourceUsed !== 0) {
      writer.uint32(16).uint32(message.periodicResourceUsed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAGetPeriodicResourceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAGetPeriodicResourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.periodicResourceMax = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.periodicResourceUsed = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAPeriodicResourceUpdated(): CMsgDOTAPeriodicResourceUpdated {
  return { periodicResourceKey: undefined, periodicResourceValue: undefined };
}

export const CMsgDOTAPeriodicResourceUpdated = {
  encode(message: CMsgDOTAPeriodicResourceUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.periodicResourceKey !== undefined) {
      CMsgDOTAGetPeriodicResource.encode(message.periodicResourceKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.periodicResourceValue !== undefined) {
      CMsgDOTAGetPeriodicResourceResponse.encode(message.periodicResourceValue, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAPeriodicResourceUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAPeriodicResourceUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.periodicResourceKey = CMsgDOTAGetPeriodicResource.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.periodicResourceValue = CMsgDOTAGetPeriodicResourceResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTACompendiumSelection(): CMsgDOTACompendiumSelection {
  return { selectionIndex: 0, selection: 0, leagueid: 0 };
}

export const CMsgDOTACompendiumSelection = {
  encode(message: CMsgDOTACompendiumSelection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selectionIndex !== 0) {
      writer.uint32(8).uint32(message.selectionIndex);
    }
    if (message.selection !== 0) {
      writer.uint32(16).uint32(message.selection);
    }
    if (message.leagueid !== 0) {
      writer.uint32(24).uint32(message.leagueid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTACompendiumSelection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTACompendiumSelection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.selectionIndex = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.selection = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.leagueid = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTACompendiumSelectionResponse(): CMsgDOTACompendiumSelectionResponse {
  return { eresult: 0 };
}

export const CMsgDOTACompendiumSelectionResponse = {
  encode(message: CMsgDOTACompendiumSelectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).uint32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTACompendiumSelectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTACompendiumSelectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eresult = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTACompendiumData(): CMsgDOTACompendiumData {
  return { selections: [] };
}

export const CMsgDOTACompendiumData = {
  encode(message: CMsgDOTACompendiumData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.selections) {
      CMsgDOTACompendiumSelection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTACompendiumData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTACompendiumData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.selections.push(CMsgDOTACompendiumSelection.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTACompendiumDataRequest(): CMsgDOTACompendiumDataRequest {
  return { accountId: 0, leagueid: 0 };
}

export const CMsgDOTACompendiumDataRequest = {
  encode(message: CMsgDOTACompendiumDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.leagueid !== 0) {
      writer.uint32(16).uint32(message.leagueid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTACompendiumDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTACompendiumDataRequest();
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

          message.leagueid = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTACompendiumDataResponse(): CMsgDOTACompendiumDataResponse {
  return { accountId: 0, leagueid: 0, result: 0, compendiumData: undefined };
}

export const CMsgDOTACompendiumDataResponse = {
  encode(message: CMsgDOTACompendiumDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.leagueid !== 0) {
      writer.uint32(16).uint32(message.leagueid);
    }
    if (message.result !== 0) {
      writer.uint32(24).uint32(message.result);
    }
    if (message.compendiumData !== undefined) {
      CMsgDOTACompendiumData.encode(message.compendiumData, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTACompendiumDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTACompendiumDataResponse();
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

          message.leagueid = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.result = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.compendiumData = CMsgDOTACompendiumData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAGetPlayerMatchHistory(): CMsgDOTAGetPlayerMatchHistory {
  return {
    accountId: 0,
    startAtMatchId: "0",
    matchesRequested: 0,
    heroId: 0,
    requestId: 0,
    includePracticeMatches: false,
    includeCustomGames: false,
    includeEventGames: false,
  };
}

export const CMsgDOTAGetPlayerMatchHistory = {
  encode(message: CMsgDOTAGetPlayerMatchHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.startAtMatchId !== "0") {
      writer.uint32(16).uint64(message.startAtMatchId);
    }
    if (message.matchesRequested !== 0) {
      writer.uint32(24).uint32(message.matchesRequested);
    }
    if (message.heroId !== 0) {
      writer.uint32(32).uint32(message.heroId);
    }
    if (message.requestId !== 0) {
      writer.uint32(40).uint32(message.requestId);
    }
    if (message.includePracticeMatches === true) {
      writer.uint32(56).bool(message.includePracticeMatches);
    }
    if (message.includeCustomGames === true) {
      writer.uint32(64).bool(message.includeCustomGames);
    }
    if (message.includeEventGames === true) {
      writer.uint32(72).bool(message.includeEventGames);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAGetPlayerMatchHistory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAGetPlayerMatchHistory();
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

          message.startAtMatchId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.matchesRequested = reader.uint32();
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

          message.requestId = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.includePracticeMatches = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.includeCustomGames = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.includeEventGames = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAGetPlayerMatchHistoryResponse(): CMsgDOTAGetPlayerMatchHistoryResponse {
  return { matches: [], requestId: 0 };
}

export const CMsgDOTAGetPlayerMatchHistoryResponse = {
  encode(message: CMsgDOTAGetPlayerMatchHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.matches) {
      CMsgDOTAGetPlayerMatchHistoryResponse_Match.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.requestId !== 0) {
      writer.uint32(16).uint32(message.requestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAGetPlayerMatchHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAGetPlayerMatchHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.matches.push(CMsgDOTAGetPlayerMatchHistoryResponse_Match.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.requestId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAGetPlayerMatchHistoryResponse_Match(): CMsgDOTAGetPlayerMatchHistoryResponse_Match {
  return {
    matchId: "0",
    startTime: 0,
    heroId: 0,
    winner: false,
    gameMode: 0,
    rankChange: 0,
    previousRank: 0,
    lobbyType: 0,
    soloRank: false,
    abandon: false,
    duration: 0,
    engine: 0,
    activePlusSubscription: false,
    seasonalRank: false,
    tourneyId: 0,
    tourneyRound: 0,
    tourneyTier: 0,
    tourneyDivision: 0,
    teamId: 0,
    teamName: "",
    ugcTeamUiLogo: "0",
  };
}

export const CMsgDOTAGetPlayerMatchHistoryResponse_Match = {
  encode(message: CMsgDOTAGetPlayerMatchHistoryResponse_Match, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.startTime !== 0) {
      writer.uint32(16).uint32(message.startTime);
    }
    if (message.heroId !== 0) {
      writer.uint32(24).uint32(message.heroId);
    }
    if (message.winner === true) {
      writer.uint32(32).bool(message.winner);
    }
    if (message.gameMode !== 0) {
      writer.uint32(40).uint32(message.gameMode);
    }
    if (message.rankChange !== 0) {
      writer.uint32(48).int32(message.rankChange);
    }
    if (message.previousRank !== 0) {
      writer.uint32(56).uint32(message.previousRank);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(64).uint32(message.lobbyType);
    }
    if (message.soloRank === true) {
      writer.uint32(72).bool(message.soloRank);
    }
    if (message.abandon === true) {
      writer.uint32(80).bool(message.abandon);
    }
    if (message.duration !== 0) {
      writer.uint32(88).uint32(message.duration);
    }
    if (message.engine !== 0) {
      writer.uint32(96).uint32(message.engine);
    }
    if (message.activePlusSubscription === true) {
      writer.uint32(104).bool(message.activePlusSubscription);
    }
    if (message.seasonalRank === true) {
      writer.uint32(112).bool(message.seasonalRank);
    }
    if (message.tourneyId !== 0) {
      writer.uint32(120).uint32(message.tourneyId);
    }
    if (message.tourneyRound !== 0) {
      writer.uint32(128).uint32(message.tourneyRound);
    }
    if (message.tourneyTier !== 0) {
      writer.uint32(136).uint32(message.tourneyTier);
    }
    if (message.tourneyDivision !== 0) {
      writer.uint32(144).uint32(message.tourneyDivision);
    }
    if (message.teamId !== 0) {
      writer.uint32(152).uint32(message.teamId);
    }
    if (message.teamName !== "") {
      writer.uint32(162).string(message.teamName);
    }
    if (message.ugcTeamUiLogo !== "0") {
      writer.uint32(168).uint64(message.ugcTeamUiLogo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAGetPlayerMatchHistoryResponse_Match {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAGetPlayerMatchHistoryResponse_Match();
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

          message.startTime = reader.uint32();
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

          message.winner = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.gameMode = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.rankChange = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.previousRank = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.lobbyType = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.soloRank = reader.bool();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.abandon = reader.bool();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.duration = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.engine = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.activePlusSubscription = reader.bool();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.seasonalRank = reader.bool();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.tourneyId = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.tourneyRound = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.tourneyTier = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.tourneyDivision = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 20:
          if (tag != 162) {
            break;
          }

          message.teamName = reader.string();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.ugcTeamUiLogo = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCNotificationsRequest(): CMsgGCNotificationsRequest {
  return {};
}

export const CMsgGCNotificationsRequest = {
  encode(_: CMsgGCNotificationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCNotificationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCNotificationsRequest();
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

function createBaseCMsgGCNotificationsNotification(): CMsgGCNotificationsNotification {
  return { id: "0", type: 0, timestamp: 0, referenceA: 0, referenceB: 0, referenceC: 0, message: "", unread: false };
}

export const CMsgGCNotificationsNotification = {
  encode(message: CMsgGCNotificationsNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).uint32(message.type);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).uint32(message.timestamp);
    }
    if (message.referenceA !== 0) {
      writer.uint32(32).uint32(message.referenceA);
    }
    if (message.referenceB !== 0) {
      writer.uint32(40).uint32(message.referenceB);
    }
    if (message.referenceC !== 0) {
      writer.uint32(48).uint32(message.referenceC);
    }
    if (message.message !== "") {
      writer.uint32(58).string(message.message);
    }
    if (message.unread === true) {
      writer.uint32(64).bool(message.unread);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCNotificationsNotification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCNotificationsNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.type = reader.uint32();
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

          message.referenceA = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.referenceB = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.referenceC = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.message = reader.string();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.unread = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCNotificationsUpdate(): CMsgGCNotificationsUpdate {
  return { result: 0, notifications: [] };
}

export const CMsgGCNotificationsUpdate = {
  encode(message: CMsgGCNotificationsUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    for (const v of message.notifications) {
      CMsgGCNotificationsNotification.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCNotificationsUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCNotificationsUpdate();
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

          message.notifications.push(CMsgGCNotificationsNotification.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCNotificationsResponse(): CMsgGCNotificationsResponse {
  return { update: undefined };
}

export const CMsgGCNotificationsResponse = {
  encode(message: CMsgGCNotificationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.update !== undefined) {
      CMsgGCNotificationsUpdate.encode(message.update, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCNotificationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCNotificationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.update = CMsgGCNotificationsUpdate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCNotificationsMarkReadRequest(): CMsgGCNotificationsMarkReadRequest {
  return {};
}

export const CMsgGCNotificationsMarkReadRequest = {
  encode(_: CMsgGCNotificationsMarkReadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCNotificationsMarkReadRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCNotificationsMarkReadRequest();
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

function createBaseCMsgGCPlayerInfoSubmit(): CMsgGCPlayerInfoSubmit {
  return { name: "", countryCode: "", fantasyRole: 0, teamId: 0, sponsor: "" };
}

export const CMsgGCPlayerInfoSubmit = {
  encode(message: CMsgGCPlayerInfoSubmit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.countryCode !== "") {
      writer.uint32(18).string(message.countryCode);
    }
    if (message.fantasyRole !== 0) {
      writer.uint32(24).uint32(message.fantasyRole);
    }
    if (message.teamId !== 0) {
      writer.uint32(32).uint32(message.teamId);
    }
    if (message.sponsor !== "") {
      writer.uint32(42).string(message.sponsor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCPlayerInfoSubmit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCPlayerInfoSubmit();
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

          message.countryCode = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.fantasyRole = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.sponsor = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCPlayerInfoSubmitResponse(): CMsgGCPlayerInfoSubmitResponse {
  return { result: 0 };
}

export const CMsgGCPlayerInfoSubmitResponse = {
  encode(message: CMsgGCPlayerInfoSubmitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCPlayerInfoSubmitResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCPlayerInfoSubmitResponse();
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

function createBaseCMsgDOTAEmoticonAccessSDO(): CMsgDOTAEmoticonAccessSDO {
  return { accountId: 0, unlockedEmoticons: Buffer.alloc(0) };
}

export const CMsgDOTAEmoticonAccessSDO = {
  encode(message: CMsgDOTAEmoticonAccessSDO, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.unlockedEmoticons.length !== 0) {
      writer.uint32(18).bytes(message.unlockedEmoticons);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAEmoticonAccessSDO {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAEmoticonAccessSDO();
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

          message.unlockedEmoticons = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCEmoticonDataRequest(): CMsgClientToGCEmoticonDataRequest {
  return {};
}

export const CMsgClientToGCEmoticonDataRequest = {
  encode(_: CMsgClientToGCEmoticonDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCEmoticonDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCEmoticonDataRequest();
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

function createBaseCMsgGCToClientEmoticonData(): CMsgGCToClientEmoticonData {
  return { emoticonAccess: undefined };
}

export const CMsgGCToClientEmoticonData = {
  encode(message: CMsgGCToClientEmoticonData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.emoticonAccess !== undefined) {
      CMsgDOTAEmoticonAccessSDO.encode(message.emoticonAccess, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientEmoticonData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientEmoticonData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.emoticonAccess = CMsgDOTAEmoticonAccessSDO.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientTournamentItemDrop(): CMsgGCToClientTournamentItemDrop {
  return { itemDef: 0, eventType: 0 };
}

export const CMsgGCToClientTournamentItemDrop = {
  encode(message: CMsgGCToClientTournamentItemDrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDef !== 0) {
      writer.uint32(8).uint32(message.itemDef);
    }
    if (message.eventType !== 0) {
      writer.uint32(16).uint32(message.eventType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientTournamentItemDrop {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientTournamentItemDrop();
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

          message.eventType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCGetAllHeroOrder(): CMsgClientToGCGetAllHeroOrder {
  return {};
}

export const CMsgClientToGCGetAllHeroOrder = {
  encode(_: CMsgClientToGCGetAllHeroOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetAllHeroOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetAllHeroOrder();
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

function createBaseCMsgClientToGCGetAllHeroOrderResponse(): CMsgClientToGCGetAllHeroOrderResponse {
  return { heroIds: [] };
}

export const CMsgClientToGCGetAllHeroOrderResponse = {
  encode(message: CMsgClientToGCGetAllHeroOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.heroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetAllHeroOrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetAllHeroOrderResponse();
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
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCGetAllHeroProgress(): CMsgClientToGCGetAllHeroProgress {
  return { accountId: 0 };
}

export const CMsgClientToGCGetAllHeroProgress = {
  encode(message: CMsgClientToGCGetAllHeroProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetAllHeroProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetAllHeroProgress();
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
};

function createBaseCMsgClientToGCGetAllHeroProgressResponse(): CMsgClientToGCGetAllHeroProgressResponse {
  return {
    accountId: 0,
    currHeroId: 0,
    lapsCompleted: 0,
    currHeroGames: 0,
    currLapTimeStarted: 0,
    currLapGames: 0,
    bestLapGames: 0,
    bestLapTime: 0,
    lapHeroesCompleted: 0,
    lapHeroesRemaining: 0,
    nextHeroId: 0,
    prevHeroId: 0,
    prevHeroGames: 0,
    prevAvgTries: 0,
    currAvgTries: 0,
    nextAvgTries: 0,
    fullLapAvgTries: 0,
    currLapAvgTries: 0,
    profileName: "",
    startHeroId: 0,
  };
}

export const CMsgClientToGCGetAllHeroProgressResponse = {
  encode(message: CMsgClientToGCGetAllHeroProgressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.currHeroId !== 0) {
      writer.uint32(16).uint32(message.currHeroId);
    }
    if (message.lapsCompleted !== 0) {
      writer.uint32(24).uint32(message.lapsCompleted);
    }
    if (message.currHeroGames !== 0) {
      writer.uint32(32).uint32(message.currHeroGames);
    }
    if (message.currLapTimeStarted !== 0) {
      writer.uint32(40).uint32(message.currLapTimeStarted);
    }
    if (message.currLapGames !== 0) {
      writer.uint32(48).uint32(message.currLapGames);
    }
    if (message.bestLapGames !== 0) {
      writer.uint32(56).uint32(message.bestLapGames);
    }
    if (message.bestLapTime !== 0) {
      writer.uint32(64).uint32(message.bestLapTime);
    }
    if (message.lapHeroesCompleted !== 0) {
      writer.uint32(72).uint32(message.lapHeroesCompleted);
    }
    if (message.lapHeroesRemaining !== 0) {
      writer.uint32(80).uint32(message.lapHeroesRemaining);
    }
    if (message.nextHeroId !== 0) {
      writer.uint32(88).uint32(message.nextHeroId);
    }
    if (message.prevHeroId !== 0) {
      writer.uint32(96).uint32(message.prevHeroId);
    }
    if (message.prevHeroGames !== 0) {
      writer.uint32(104).uint32(message.prevHeroGames);
    }
    if (message.prevAvgTries !== 0) {
      writer.uint32(117).float(message.prevAvgTries);
    }
    if (message.currAvgTries !== 0) {
      writer.uint32(125).float(message.currAvgTries);
    }
    if (message.nextAvgTries !== 0) {
      writer.uint32(133).float(message.nextAvgTries);
    }
    if (message.fullLapAvgTries !== 0) {
      writer.uint32(141).float(message.fullLapAvgTries);
    }
    if (message.currLapAvgTries !== 0) {
      writer.uint32(149).float(message.currLapAvgTries);
    }
    if (message.profileName !== "") {
      writer.uint32(154).string(message.profileName);
    }
    if (message.startHeroId !== 0) {
      writer.uint32(160).uint32(message.startHeroId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetAllHeroProgressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetAllHeroProgressResponse();
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

          message.currHeroId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.lapsCompleted = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.currHeroGames = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.currLapTimeStarted = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.currLapGames = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.bestLapGames = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.bestLapTime = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.lapHeroesCompleted = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.lapHeroesRemaining = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.nextHeroId = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.prevHeroId = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.prevHeroGames = reader.uint32();
          continue;
        case 14:
          if (tag != 117) {
            break;
          }

          message.prevAvgTries = reader.float();
          continue;
        case 15:
          if (tag != 125) {
            break;
          }

          message.currAvgTries = reader.float();
          continue;
        case 16:
          if (tag != 133) {
            break;
          }

          message.nextAvgTries = reader.float();
          continue;
        case 17:
          if (tag != 141) {
            break;
          }

          message.fullLapAvgTries = reader.float();
          continue;
        case 18:
          if (tag != 149) {
            break;
          }

          message.currLapAvgTries = reader.float();
          continue;
        case 19:
          if (tag != 154) {
            break;
          }

          message.profileName = reader.string();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.startHeroId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCGetTrophyList(): CMsgClientToGCGetTrophyList {
  return { accountId: 0 };
}

export const CMsgClientToGCGetTrophyList = {
  encode(message: CMsgClientToGCGetTrophyList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetTrophyList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetTrophyList();
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
};

function createBaseCMsgClientToGCGetTrophyListResponse(): CMsgClientToGCGetTrophyListResponse {
  return { trophies: [] };
}

export const CMsgClientToGCGetTrophyListResponse = {
  encode(message: CMsgClientToGCGetTrophyListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.trophies) {
      CMsgClientToGCGetTrophyListResponse_Trophy.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetTrophyListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetTrophyListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.trophies.push(CMsgClientToGCGetTrophyListResponse_Trophy.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCGetTrophyListResponse_Trophy(): CMsgClientToGCGetTrophyListResponse_Trophy {
  return { trophyId: 0, trophyScore: 0, lastUpdated: 0 };
}

export const CMsgClientToGCGetTrophyListResponse_Trophy = {
  encode(message: CMsgClientToGCGetTrophyListResponse_Trophy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trophyId !== 0) {
      writer.uint32(8).uint32(message.trophyId);
    }
    if (message.trophyScore !== 0) {
      writer.uint32(16).uint32(message.trophyScore);
    }
    if (message.lastUpdated !== 0) {
      writer.uint32(24).uint32(message.lastUpdated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetTrophyListResponse_Trophy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetTrophyListResponse_Trophy();
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
        case 3:
          if (tag != 24) {
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

function createBaseCMsgGCToClientTrophyAwarded(): CMsgGCToClientTrophyAwarded {
  return { trophyId: 0, trophyScore: 0, trophyOldScore: 0, lastUpdated: 0 };
}

export const CMsgGCToClientTrophyAwarded = {
  encode(message: CMsgGCToClientTrophyAwarded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trophyId !== 0) {
      writer.uint32(8).uint32(message.trophyId);
    }
    if (message.trophyScore !== 0) {
      writer.uint32(16).uint32(message.trophyScore);
    }
    if (message.trophyOldScore !== 0) {
      writer.uint32(24).uint32(message.trophyOldScore);
    }
    if (message.lastUpdated !== 0) {
      writer.uint32(32).uint32(message.lastUpdated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientTrophyAwarded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientTrophyAwarded();
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
        case 3:
          if (tag != 24) {
            break;
          }

          message.trophyOldScore = reader.uint32();
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

function createBaseCMsgClientToGCRankRequest(): CMsgClientToGCRankRequest {
  return { rankType: 0 };
}

export const CMsgClientToGCRankRequest = {
  encode(message: CMsgClientToGCRankRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rankType !== 0) {
      writer.uint32(8).int32(message.rankType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRankRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRankRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.rankType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientRankResponse(): CMsgGCToClientRankResponse {
  return { result: 0, rankValue: 0, rankData1: 0, rankData2: 0, rankData3: 0 };
}

export const CMsgGCToClientRankResponse = {
  encode(message: CMsgGCToClientRankResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.rankValue !== 0) {
      writer.uint32(16).uint32(message.rankValue);
    }
    if (message.rankData1 !== 0) {
      writer.uint32(24).uint32(message.rankData1);
    }
    if (message.rankData2 !== 0) {
      writer.uint32(32).uint32(message.rankData2);
    }
    if (message.rankData3 !== 0) {
      writer.uint32(40).uint32(message.rankData3);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientRankResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientRankResponse();
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
          if (tag != 16) {
            break;
          }

          message.rankValue = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.rankData1 = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.rankData2 = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.rankData3 = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientRankUpdate(): CMsgGCToClientRankUpdate {
  return { rankType: 0, rankInfo: undefined };
}

export const CMsgGCToClientRankUpdate = {
  encode(message: CMsgGCToClientRankUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rankType !== 0) {
      writer.uint32(8).int32(message.rankType);
    }
    if (message.rankInfo !== undefined) {
      CMsgGCToClientRankResponse.encode(message.rankInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientRankUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientRankUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.rankType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.rankInfo = CMsgGCToClientRankResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCGetProfileCard(): CMsgClientToGCGetProfileCard {
  return { accountId: 0 };
}

export const CMsgClientToGCGetProfileCard = {
  encode(message: CMsgClientToGCGetProfileCard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetProfileCard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetProfileCard();
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
};

function createBaseCMsgClientToGCSetProfileCardSlots(): CMsgClientToGCSetProfileCardSlots {
  return { slots: [] };
}

export const CMsgClientToGCSetProfileCardSlots = {
  encode(message: CMsgClientToGCSetProfileCardSlots, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.slots) {
      CMsgClientToGCSetProfileCardSlots_CardSlot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetProfileCardSlots {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetProfileCardSlots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.slots.push(CMsgClientToGCSetProfileCardSlots_CardSlot.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSetProfileCardSlots_CardSlot(): CMsgClientToGCSetProfileCardSlots_CardSlot {
  return { slotId: 0, slotType: 0, slotValue: "0" };
}

export const CMsgClientToGCSetProfileCardSlots_CardSlot = {
  encode(message: CMsgClientToGCSetProfileCardSlots_CardSlot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slotId !== 0) {
      writer.uint32(8).uint32(message.slotId);
    }
    if (message.slotType !== 0) {
      writer.uint32(16).int32(message.slotType);
    }
    if (message.slotValue !== "0") {
      writer.uint32(24).uint64(message.slotValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetProfileCardSlots_CardSlot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetProfileCardSlots_CardSlot();
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

          message.slotType = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.slotValue = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCGetProfileCardStats(): CMsgClientToGCGetProfileCardStats {
  return {};
}

export const CMsgClientToGCGetProfileCardStats = {
  encode(_: CMsgClientToGCGetProfileCardStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetProfileCardStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetProfileCardStats();
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

function createBaseCMsgClientToGCCreateHeroStatue(): CMsgClientToGCCreateHeroStatue {
  return {
    sourceItemId: "0",
    heroId: 0,
    sequenceName: "",
    cycle: 0,
    wearables: [],
    inscription: "",
    styles: [],
    reforgerItemId: "0",
    tournamentDrop: false,
  };
}

export const CMsgClientToGCCreateHeroStatue = {
  encode(message: CMsgClientToGCCreateHeroStatue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceItemId !== "0") {
      writer.uint32(8).uint64(message.sourceItemId);
    }
    if (message.heroId !== 0) {
      writer.uint32(24).uint32(message.heroId);
    }
    if (message.sequenceName !== "") {
      writer.uint32(34).string(message.sequenceName);
    }
    if (message.cycle !== 0) {
      writer.uint32(45).float(message.cycle);
    }
    writer.uint32(50).fork();
    for (const v of message.wearables) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.inscription !== "") {
      writer.uint32(58).string(message.inscription);
    }
    writer.uint32(66).fork();
    for (const v of message.styles) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.reforgerItemId !== "0") {
      writer.uint32(72).uint64(message.reforgerItemId);
    }
    if (message.tournamentDrop === true) {
      writer.uint32(80).bool(message.tournamentDrop);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCreateHeroStatue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCreateHeroStatue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sourceItemId = longToString(reader.uint64() as Long);
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

          message.sequenceName = reader.string();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.cycle = reader.float();
          continue;
        case 6:
          if (tag == 48) {
            message.wearables.push(reader.uint32());
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.wearables.push(reader.uint32());
            }

            continue;
          }

          break;
        case 7:
          if (tag != 58) {
            break;
          }

          message.inscription = reader.string();
          continue;
        case 8:
          if (tag == 64) {
            message.styles.push(reader.uint32());
            continue;
          }

          if (tag == 66) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.styles.push(reader.uint32());
            }

            continue;
          }

          break;
        case 9:
          if (tag != 72) {
            break;
          }

          message.reforgerItemId = longToString(reader.uint64() as Long);
          continue;
        case 10:
          if (tag != 80) {
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

function createBaseCMsgGCToClientHeroStatueCreateResult(): CMsgGCToClientHeroStatueCreateResult {
  return { resultingItemId: "0" };
}

export const CMsgGCToClientHeroStatueCreateResult = {
  encode(message: CMsgGCToClientHeroStatueCreateResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resultingItemId !== "0") {
      writer.uint32(8).uint64(message.resultingItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientHeroStatueCreateResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientHeroStatueCreateResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.resultingItemId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCPlayerStatsRequest(): CMsgClientToGCPlayerStatsRequest {
  return { accountId: 0 };
}

export const CMsgClientToGCPlayerStatsRequest = {
  encode(message: CMsgClientToGCPlayerStatsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCPlayerStatsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCPlayerStatsRequest();
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
};

function createBaseCMsgGCToClientPlayerStatsResponse(): CMsgGCToClientPlayerStatsResponse {
  return {
    accountId: 0,
    playerStats: [],
    matchCount: 0,
    meanGpm: 0,
    meanXppm: 0,
    meanLasthits: 0,
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
    versatilityScore: 0,
    meanNetworth: 0,
    meanDamage: 0,
    meanHeals: 0,
    rapiersPurchased: 0,
  };
}

export const CMsgGCToClientPlayerStatsResponse = {
  encode(message: CMsgGCToClientPlayerStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    writer.uint32(18).fork();
    for (const v of message.playerStats) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.matchCount !== 0) {
      writer.uint32(24).uint32(message.matchCount);
    }
    if (message.meanGpm !== 0) {
      writer.uint32(37).float(message.meanGpm);
    }
    if (message.meanXppm !== 0) {
      writer.uint32(45).float(message.meanXppm);
    }
    if (message.meanLasthits !== 0) {
      writer.uint32(53).float(message.meanLasthits);
    }
    if (message.rampages !== 0) {
      writer.uint32(56).uint32(message.rampages);
    }
    if (message.tripleKills !== 0) {
      writer.uint32(64).uint32(message.tripleKills);
    }
    if (message.firstBloodClaimed !== 0) {
      writer.uint32(72).uint32(message.firstBloodClaimed);
    }
    if (message.firstBloodGiven !== 0) {
      writer.uint32(80).uint32(message.firstBloodGiven);
    }
    if (message.couriersKilled !== 0) {
      writer.uint32(88).uint32(message.couriersKilled);
    }
    if (message.aegisesSnatched !== 0) {
      writer.uint32(96).uint32(message.aegisesSnatched);
    }
    if (message.cheesesEaten !== 0) {
      writer.uint32(104).uint32(message.cheesesEaten);
    }
    if (message.creepsStacked !== 0) {
      writer.uint32(112).uint32(message.creepsStacked);
    }
    if (message.fightScore !== 0) {
      writer.uint32(125).float(message.fightScore);
    }
    if (message.farmScore !== 0) {
      writer.uint32(133).float(message.farmScore);
    }
    if (message.supportScore !== 0) {
      writer.uint32(141).float(message.supportScore);
    }
    if (message.pushScore !== 0) {
      writer.uint32(149).float(message.pushScore);
    }
    if (message.versatilityScore !== 0) {
      writer.uint32(157).float(message.versatilityScore);
    }
    if (message.meanNetworth !== 0) {
      writer.uint32(165).float(message.meanNetworth);
    }
    if (message.meanDamage !== 0) {
      writer.uint32(173).float(message.meanDamage);
    }
    if (message.meanHeals !== 0) {
      writer.uint32(181).float(message.meanHeals);
    }
    if (message.rapiersPurchased !== 0) {
      writer.uint32(184).uint32(message.rapiersPurchased);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientPlayerStatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientPlayerStatsResponse();
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
          if (tag == 21) {
            message.playerStats.push(reader.float());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playerStats.push(reader.float());
            }

            continue;
          }

          break;
        case 3:
          if (tag != 24) {
            break;
          }

          message.matchCount = reader.uint32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.meanGpm = reader.float();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.meanXppm = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.meanLasthits = reader.float();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.rampages = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.tripleKills = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.firstBloodClaimed = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.firstBloodGiven = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.couriersKilled = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.aegisesSnatched = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.cheesesEaten = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.creepsStacked = reader.uint32();
          continue;
        case 15:
          if (tag != 125) {
            break;
          }

          message.fightScore = reader.float();
          continue;
        case 16:
          if (tag != 133) {
            break;
          }

          message.farmScore = reader.float();
          continue;
        case 17:
          if (tag != 141) {
            break;
          }

          message.supportScore = reader.float();
          continue;
        case 18:
          if (tag != 149) {
            break;
          }

          message.pushScore = reader.float();
          continue;
        case 19:
          if (tag != 157) {
            break;
          }

          message.versatilityScore = reader.float();
          continue;
        case 20:
          if (tag != 165) {
            break;
          }

          message.meanNetworth = reader.float();
          continue;
        case 21:
          if (tag != 173) {
            break;
          }

          message.meanDamage = reader.float();
          continue;
        case 22:
          if (tag != 181) {
            break;
          }

          message.meanHeals = reader.float();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.rapiersPurchased = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCustomGamesFriendsPlayedRequest(): CMsgClientToGCCustomGamesFriendsPlayedRequest {
  return {};
}

export const CMsgClientToGCCustomGamesFriendsPlayedRequest = {
  encode(_: CMsgClientToGCCustomGamesFriendsPlayedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCustomGamesFriendsPlayedRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCustomGamesFriendsPlayedRequest();
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

function createBaseCMsgGCToClientCustomGamesFriendsPlayedResponse(): CMsgGCToClientCustomGamesFriendsPlayedResponse {
  return { accountId: 0, games: [] };
}

export const CMsgGCToClientCustomGamesFriendsPlayedResponse = {
  encode(
    message: CMsgGCToClientCustomGamesFriendsPlayedResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    for (const v of message.games) {
      CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientCustomGamesFriendsPlayedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientCustomGamesFriendsPlayedResponse();
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

          message.games.push(CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame(): CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame {
  return { customGameId: "0", accountIds: [] };
}

export const CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame = {
  encode(
    message: CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.customGameId !== "0") {
      writer.uint32(8).uint64(message.customGameId);
    }
    writer.uint32(18).fork();
    for (const v of message.accountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame();
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
          if (tag == 16) {
            message.accountIds.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
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

function createBaseCMsgClientToGCSocialFeedPostCommentRequest(): CMsgClientToGCSocialFeedPostCommentRequest {
  return { eventId: "0", comment: "" };
}

export const CMsgClientToGCSocialFeedPostCommentRequest = {
  encode(message: CMsgClientToGCSocialFeedPostCommentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "0") {
      writer.uint32(8).uint64(message.eventId);
    }
    if (message.comment !== "") {
      writer.uint32(18).string(message.comment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSocialFeedPostCommentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSocialFeedPostCommentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
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

function createBaseCMsgGCToClientSocialFeedPostCommentResponse(): CMsgGCToClientSocialFeedPostCommentResponse {
  return { success: false };
}

export const CMsgGCToClientSocialFeedPostCommentResponse = {
  encode(message: CMsgGCToClientSocialFeedPostCommentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientSocialFeedPostCommentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientSocialFeedPostCommentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
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

function createBaseCMsgClientToGCSocialFeedPostMessageRequest(): CMsgClientToGCSocialFeedPostMessageRequest {
  return { message: "", matchId: "0", matchTimestamp: 0 };
}

export const CMsgClientToGCSocialFeedPostMessageRequest = {
  encode(message: CMsgClientToGCSocialFeedPostMessageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.matchId !== "0") {
      writer.uint32(16).uint64(message.matchId);
    }
    if (message.matchTimestamp !== 0) {
      writer.uint32(24).uint32(message.matchTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSocialFeedPostMessageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSocialFeedPostMessageRequest();
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

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.matchTimestamp = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientSocialFeedPostMessageResponse(): CMsgGCToClientSocialFeedPostMessageResponse {
  return { success: false };
}

export const CMsgGCToClientSocialFeedPostMessageResponse = {
  encode(message: CMsgGCToClientSocialFeedPostMessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientSocialFeedPostMessageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientSocialFeedPostMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
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

function createBaseCMsgClientToGCFriendsPlayedCustomGameRequest(): CMsgClientToGCFriendsPlayedCustomGameRequest {
  return { customGameId: "0" };
}

export const CMsgClientToGCFriendsPlayedCustomGameRequest = {
  encode(message: CMsgClientToGCFriendsPlayedCustomGameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customGameId !== "0") {
      writer.uint32(8).uint64(message.customGameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCFriendsPlayedCustomGameRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCFriendsPlayedCustomGameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.customGameId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientFriendsPlayedCustomGameResponse(): CMsgGCToClientFriendsPlayedCustomGameResponse {
  return { customGameId: "0", accountIds: [] };
}

export const CMsgGCToClientFriendsPlayedCustomGameResponse = {
  encode(message: CMsgGCToClientFriendsPlayedCustomGameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customGameId !== "0") {
      writer.uint32(8).uint64(message.customGameId);
    }
    writer.uint32(18).fork();
    for (const v of message.accountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientFriendsPlayedCustomGameResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientFriendsPlayedCustomGameResponse();
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
          if (tag == 16) {
            message.accountIds.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
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

function createBaseCMsgDOTAPartyRichPresence(): CMsgDOTAPartyRichPresence {
  return {
    partyId: "0",
    partyState: 0,
    open: false,
    lowPriority: false,
    teamId: 0,
    teamName: "",
    ugcTeamUiLogo: "0",
    members: [],
    weekendTourney: undefined,
  };
}

export const CMsgDOTAPartyRichPresence = {
  encode(message: CMsgDOTAPartyRichPresence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.partyId !== "0") {
      writer.uint32(9).fixed64(message.partyId);
    }
    if (message.partyState !== 0) {
      writer.uint32(16).int32(message.partyState);
    }
    if (message.open === true) {
      writer.uint32(24).bool(message.open);
    }
    if (message.lowPriority === true) {
      writer.uint32(40).bool(message.lowPriority);
    }
    if (message.teamId !== 0) {
      writer.uint32(56).uint32(message.teamId);
    }
    if (message.teamName !== "") {
      writer.uint32(66).string(message.teamName);
    }
    if (message.ugcTeamUiLogo !== "0") {
      writer.uint32(72).uint64(message.ugcTeamUiLogo);
    }
    for (const v of message.members) {
      CMsgDOTAPartyRichPresence_Member.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.weekendTourney !== undefined) {
      CMsgDOTAPartyRichPresence_WeekendTourney.encode(message.weekendTourney, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAPartyRichPresence {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAPartyRichPresence();
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

          message.partyState = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.open = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.lowPriority = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.teamName = reader.string();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.ugcTeamUiLogo = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.members.push(CMsgDOTAPartyRichPresence_Member.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.weekendTourney = CMsgDOTAPartyRichPresence_WeekendTourney.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAPartyRichPresence_Member(): CMsgDOTAPartyRichPresence_Member {
  return { steamId: "0", coach: false };
}

export const CMsgDOTAPartyRichPresence_Member = {
  encode(message: CMsgDOTAPartyRichPresence_Member, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.coach === true) {
      writer.uint32(16).bool(message.coach);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAPartyRichPresence_Member {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAPartyRichPresence_Member();
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

          message.coach = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAPartyRichPresence_WeekendTourney(): CMsgDOTAPartyRichPresence_WeekendTourney {
  return { division: 0, skillLevel: 0, round: 0, tournamentId: 0, stateSeqNum: 0, event: 0, eventRound: 0 };
}

export const CMsgDOTAPartyRichPresence_WeekendTourney = {
  encode(message: CMsgDOTAPartyRichPresence_WeekendTourney, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.division !== 0) {
      writer.uint32(8).uint32(message.division);
    }
    if (message.skillLevel !== 0) {
      writer.uint32(16).uint32(message.skillLevel);
    }
    if (message.round !== 0) {
      writer.uint32(24).uint32(message.round);
    }
    if (message.tournamentId !== 0) {
      writer.uint32(32).uint32(message.tournamentId);
    }
    if (message.stateSeqNum !== 0) {
      writer.uint32(40).uint32(message.stateSeqNum);
    }
    if (message.event !== 0) {
      writer.uint32(48).int32(message.event);
    }
    if (message.eventRound !== 0) {
      writer.uint32(56).uint32(message.eventRound);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAPartyRichPresence_WeekendTourney {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAPartyRichPresence_WeekendTourney();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.division = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.skillLevel = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.round = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.tournamentId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.stateSeqNum = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.event = reader.int32() as any;
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.eventRound = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALobbyRichPresence(): CMsgDOTALobbyRichPresence {
  return {
    lobbyId: "0",
    lobbyState: 0,
    password: false,
    gameMode: 0,
    memberCount: 0,
    maxMemberCount: 0,
    customGameId: "0",
    name: "",
    lobbyType: 0,
  };
}

export const CMsgDOTALobbyRichPresence = {
  encode(message: CMsgDOTALobbyRichPresence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lobbyId !== "0") {
      writer.uint32(9).fixed64(message.lobbyId);
    }
    if (message.lobbyState !== 0) {
      writer.uint32(16).int32(message.lobbyState);
    }
    if (message.password === true) {
      writer.uint32(24).bool(message.password);
    }
    if (message.gameMode !== 0) {
      writer.uint32(32).int32(message.gameMode);
    }
    if (message.memberCount !== 0) {
      writer.uint32(40).uint32(message.memberCount);
    }
    if (message.maxMemberCount !== 0) {
      writer.uint32(48).uint32(message.maxMemberCount);
    }
    if (message.customGameId !== "0") {
      writer.uint32(57).fixed64(message.customGameId);
    }
    if (message.name !== "") {
      writer.uint32(66).string(message.name);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(72).uint32(message.lobbyType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALobbyRichPresence {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALobbyRichPresence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.lobbyId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.lobbyState = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.password = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.gameMode = reader.int32() as any;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.memberCount = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.maxMemberCount = reader.uint32();
          continue;
        case 7:
          if (tag != 57) {
            break;
          }

          message.customGameId = longToString(reader.fixed64() as Long);
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.name = reader.string();
          continue;
        case 9:
          if (tag != 72) {
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

function createBaseCMsgDOTACustomGameListenServerStartedLoading(): CMsgDOTACustomGameListenServerStartedLoading {
  return { lobbyId: "0", customGameId: "0", lobbyMembers: [], startTime: 0 };
}

export const CMsgDOTACustomGameListenServerStartedLoading = {
  encode(message: CMsgDOTACustomGameListenServerStartedLoading, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lobbyId !== "0") {
      writer.uint32(9).fixed64(message.lobbyId);
    }
    if (message.customGameId !== "0") {
      writer.uint32(16).uint64(message.customGameId);
    }
    writer.uint32(26).fork();
    for (const v of message.lobbyMembers) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.startTime !== 0) {
      writer.uint32(32).uint32(message.startTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTACustomGameListenServerStartedLoading {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTACustomGameListenServerStartedLoading();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.lobbyId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.customGameId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag == 24) {
            message.lobbyMembers.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lobbyMembers.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag != 32) {
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
};

function createBaseCMsgDOTACustomGameClientFinishedLoading(): CMsgDOTACustomGameClientFinishedLoading {
  return { lobbyId: "0", loadingDuration: 0, resultCode: 0, resultString: "", signonStates: 0, comment: "" };
}

export const CMsgDOTACustomGameClientFinishedLoading = {
  encode(message: CMsgDOTACustomGameClientFinishedLoading, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lobbyId !== "0") {
      writer.uint32(9).fixed64(message.lobbyId);
    }
    if (message.loadingDuration !== 0) {
      writer.uint32(16).uint32(message.loadingDuration);
    }
    if (message.resultCode !== 0) {
      writer.uint32(24).sint32(message.resultCode);
    }
    if (message.resultString !== "") {
      writer.uint32(34).string(message.resultString);
    }
    if (message.signonStates !== 0) {
      writer.uint32(40).uint32(message.signonStates);
    }
    if (message.comment !== "") {
      writer.uint32(50).string(message.comment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTACustomGameClientFinishedLoading {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTACustomGameClientFinishedLoading();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.lobbyId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.loadingDuration = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.resultCode = reader.sint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.resultString = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.signonStates = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
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

function createBaseCMsgClientToGCApplyGemCombiner(): CMsgClientToGCApplyGemCombiner {
  return { itemId1: "0", itemId2: "0" };
}

export const CMsgClientToGCApplyGemCombiner = {
  encode(message: CMsgClientToGCApplyGemCombiner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId1 !== "0") {
      writer.uint32(8).uint64(message.itemId1);
    }
    if (message.itemId2 !== "0") {
      writer.uint32(16).uint64(message.itemId2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCApplyGemCombiner {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCApplyGemCombiner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemId1 = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.itemId2 = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCH264Unsupported(): CMsgClientToGCH264Unsupported {
  return {};
}

export const CMsgClientToGCH264Unsupported = {
  encode(_: CMsgClientToGCH264Unsupported, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCH264Unsupported {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCH264Unsupported();
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

function createBaseCMsgClientToGCGetQuestProgress(): CMsgClientToGCGetQuestProgress {
  return { questIds: [] };
}

export const CMsgClientToGCGetQuestProgress = {
  encode(message: CMsgClientToGCGetQuestProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.questIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetQuestProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetQuestProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.questIds.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.questIds.push(reader.uint32());
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

function createBaseCMsgClientToGCGetQuestProgressResponse(): CMsgClientToGCGetQuestProgressResponse {
  return { success: false, quests: [] };
}

export const CMsgClientToGCGetQuestProgressResponse = {
  encode(message: CMsgClientToGCGetQuestProgressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    for (const v of message.quests) {
      CMsgClientToGCGetQuestProgressResponse_Quest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetQuestProgressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetQuestProgressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.success = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.quests.push(CMsgClientToGCGetQuestProgressResponse_Quest.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCGetQuestProgressResponse_Challenge(): CMsgClientToGCGetQuestProgressResponse_Challenge {
  return { challengeId: 0, timeCompleted: 0, attempts: 0, heroId: 0, templateId: 0, questRank: 0 };
}

export const CMsgClientToGCGetQuestProgressResponse_Challenge = {
  encode(
    message: CMsgClientToGCGetQuestProgressResponse_Challenge,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.challengeId !== 0) {
      writer.uint32(8).uint32(message.challengeId);
    }
    if (message.timeCompleted !== 0) {
      writer.uint32(16).uint32(message.timeCompleted);
    }
    if (message.attempts !== 0) {
      writer.uint32(24).uint32(message.attempts);
    }
    if (message.heroId !== 0) {
      writer.uint32(32).uint32(message.heroId);
    }
    if (message.templateId !== 0) {
      writer.uint32(40).uint32(message.templateId);
    }
    if (message.questRank !== 0) {
      writer.uint32(48).uint32(message.questRank);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetQuestProgressResponse_Challenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetQuestProgressResponse_Challenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.challengeId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.timeCompleted = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.attempts = reader.uint32();
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

          message.templateId = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.questRank = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCGetQuestProgressResponse_Quest(): CMsgClientToGCGetQuestProgressResponse_Quest {
  return { questId: 0, completedChallenges: [] };
}

export const CMsgClientToGCGetQuestProgressResponse_Quest = {
  encode(message: CMsgClientToGCGetQuestProgressResponse_Quest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.questId !== 0) {
      writer.uint32(8).uint32(message.questId);
    }
    for (const v of message.completedChallenges) {
      CMsgClientToGCGetQuestProgressResponse_Challenge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetQuestProgressResponse_Quest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetQuestProgressResponse_Quest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.questId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.completedChallenges.push(
            CMsgClientToGCGetQuestProgressResponse_Challenge.decode(reader, reader.uint32()),
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

function createBaseCMsgGCToClientMatchSignedOut(): CMsgGCToClientMatchSignedOut {
  return { matchId: "0" };
}

export const CMsgGCToClientMatchSignedOut = {
  encode(message: CMsgGCToClientMatchSignedOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientMatchSignedOut {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientMatchSignedOut();
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
};

function createBaseCMsgGCGetHeroStatsHistory(): CMsgGCGetHeroStatsHistory {
  return { heroId: 0 };
}

export const CMsgGCGetHeroStatsHistory = {
  encode(message: CMsgGCGetHeroStatsHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetHeroStatsHistory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetHeroStatsHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
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

function createBaseCMsgGCGetHeroStatsHistoryResponse(): CMsgGCGetHeroStatsHistoryResponse {
  return { heroId: 0, records: [] };
}

export const CMsgGCGetHeroStatsHistoryResponse = {
  encode(message: CMsgGCGetHeroStatsHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    for (const v of message.records) {
      CMsgDOTASDOHeroStatsHistory.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCGetHeroStatsHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCGetHeroStatsHistoryResponse();
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

          message.records.push(CMsgDOTASDOHeroStatsHistory.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgPlayerConductScorecardRequest(): CMsgPlayerConductScorecardRequest {
  return {};
}

export const CMsgPlayerConductScorecardRequest = {
  encode(_: CMsgPlayerConductScorecardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPlayerConductScorecardRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPlayerConductScorecardRequest();
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

function createBaseCMsgPlayerConductScorecard(): CMsgPlayerConductScorecard {
  return {
    accountId: 0,
    matchId: "0",
    seqNum: 0,
    reasons: 0,
    matchesInReport: 0,
    matchesClean: 0,
    matchesReported: 0,
    matchesAbandoned: 0,
    reportsCount: 0,
    reportsParties: 0,
    commendCount: 0,
    date: 0,
    rawBehaviorScore: 0,
    oldRawBehaviorScore: 0,
    commsReports: 0,
    commsParties: 0,
    behaviorRating: 0,
  };
}

export const CMsgPlayerConductScorecard = {
  encode(message: CMsgPlayerConductScorecard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.matchId !== "0") {
      writer.uint32(16).uint64(message.matchId);
    }
    if (message.seqNum !== 0) {
      writer.uint32(24).uint32(message.seqNum);
    }
    if (message.reasons !== 0) {
      writer.uint32(32).uint32(message.reasons);
    }
    if (message.matchesInReport !== 0) {
      writer.uint32(40).uint32(message.matchesInReport);
    }
    if (message.matchesClean !== 0) {
      writer.uint32(48).uint32(message.matchesClean);
    }
    if (message.matchesReported !== 0) {
      writer.uint32(56).uint32(message.matchesReported);
    }
    if (message.matchesAbandoned !== 0) {
      writer.uint32(64).uint32(message.matchesAbandoned);
    }
    if (message.reportsCount !== 0) {
      writer.uint32(72).uint32(message.reportsCount);
    }
    if (message.reportsParties !== 0) {
      writer.uint32(80).uint32(message.reportsParties);
    }
    if (message.commendCount !== 0) {
      writer.uint32(88).uint32(message.commendCount);
    }
    if (message.date !== 0) {
      writer.uint32(112).uint32(message.date);
    }
    if (message.rawBehaviorScore !== 0) {
      writer.uint32(136).uint32(message.rawBehaviorScore);
    }
    if (message.oldRawBehaviorScore !== 0) {
      writer.uint32(144).uint32(message.oldRawBehaviorScore);
    }
    if (message.commsReports !== 0) {
      writer.uint32(152).uint32(message.commsReports);
    }
    if (message.commsParties !== 0) {
      writer.uint32(160).uint32(message.commsParties);
    }
    if (message.behaviorRating !== 0) {
      writer.uint32(168).int32(message.behaviorRating);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPlayerConductScorecard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPlayerConductScorecard();
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

          message.seqNum = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.reasons = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.matchesInReport = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.matchesClean = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.matchesReported = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.matchesAbandoned = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.reportsCount = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.reportsParties = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.commendCount = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.date = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.rawBehaviorScore = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.oldRawBehaviorScore = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.commsReports = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.commsParties = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.behaviorRating = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCWageringRequest(): CMsgClientToGCWageringRequest {
  return { eventId: 0 };
}

export const CMsgClientToGCWageringRequest = {
  encode(message: CMsgClientToGCWageringRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCWageringRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCWageringRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientWageringResponse(): CMsgGCToClientWageringResponse {
  return {
    coinsRemaining: 0,
    totalPointsWon: 0,
    totalPointsWagered: 0,
    totalPointsTipped: 0,
    successRate: 0,
    totalGamesWagered: 0,
    coinsMax: 0,
    rankWagersRemaining: 0,
    rankWagersMax: 0,
    predictionTokensRemaining: 0,
    predictionTokensMax: 0,
    bountiesRemaining: 0,
    bountiesMax: 0,
  };
}

export const CMsgGCToClientWageringResponse = {
  encode(message: CMsgGCToClientWageringResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coinsRemaining !== 0) {
      writer.uint32(8).uint32(message.coinsRemaining);
    }
    if (message.totalPointsWon !== 0) {
      writer.uint32(16).uint32(message.totalPointsWon);
    }
    if (message.totalPointsWagered !== 0) {
      writer.uint32(24).uint32(message.totalPointsWagered);
    }
    if (message.totalPointsTipped !== 0) {
      writer.uint32(32).uint32(message.totalPointsTipped);
    }
    if (message.successRate !== 0) {
      writer.uint32(40).uint32(message.successRate);
    }
    if (message.totalGamesWagered !== 0) {
      writer.uint32(48).uint32(message.totalGamesWagered);
    }
    if (message.coinsMax !== 0) {
      writer.uint32(56).uint32(message.coinsMax);
    }
    if (message.rankWagersRemaining !== 0) {
      writer.uint32(64).uint32(message.rankWagersRemaining);
    }
    if (message.rankWagersMax !== 0) {
      writer.uint32(72).uint32(message.rankWagersMax);
    }
    if (message.predictionTokensRemaining !== 0) {
      writer.uint32(80).uint32(message.predictionTokensRemaining);
    }
    if (message.predictionTokensMax !== 0) {
      writer.uint32(88).uint32(message.predictionTokensMax);
    }
    if (message.bountiesRemaining !== 0) {
      writer.uint32(96).uint32(message.bountiesRemaining);
    }
    if (message.bountiesMax !== 0) {
      writer.uint32(104).uint32(message.bountiesMax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientWageringResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientWageringResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.coinsRemaining = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.totalPointsWon = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.totalPointsWagered = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.totalPointsTipped = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.successRate = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.totalGamesWagered = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.coinsMax = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.rankWagersRemaining = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.rankWagersMax = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.predictionTokensRemaining = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.predictionTokensMax = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.bountiesRemaining = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.bountiesMax = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientWageringUpdate(): CMsgGCToClientWageringUpdate {
  return { eventId: 0, wageringInfo: undefined };
}

export const CMsgGCToClientWageringUpdate = {
  encode(message: CMsgGCToClientWageringUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.wageringInfo !== undefined) {
      CMsgGCToClientWageringResponse.encode(message.wageringInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientWageringUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientWageringUpdate();
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

          message.wageringInfo = CMsgGCToClientWageringResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientArcanaVotesUpdate(): CMsgGCToClientArcanaVotesUpdate {
  return { eventId: 0, arcanaVotes: undefined };
}

export const CMsgGCToClientArcanaVotesUpdate = {
  encode(message: CMsgGCToClientArcanaVotesUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.arcanaVotes !== undefined) {
      CMsgClientToGCRequestArcanaVotesRemainingResponse.encode(message.arcanaVotes, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientArcanaVotesUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientArcanaVotesUpdate();
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

          message.arcanaVotes = CMsgClientToGCRequestArcanaVotesRemainingResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCGetEventGoals(): CMsgClientToGCGetEventGoals {
  return { eventIds: [] };
}

export const CMsgClientToGCGetEventGoals = {
  encode(message: CMsgClientToGCGetEventGoals, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.eventIds) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetEventGoals {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetEventGoals();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.eventIds.push(reader.int32() as any);
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.eventIds.push(reader.int32() as any);
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

function createBaseCMsgEventGoals(): CMsgEventGoals {
  return { eventGoals: [] };
}

export const CMsgEventGoals = {
  encode(message: CMsgEventGoals, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.eventGoals) {
      CMsgEventGoals_EventGoal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgEventGoals {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgEventGoals();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.eventGoals.push(CMsgEventGoals_EventGoal.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgEventGoals_EventGoal(): CMsgEventGoals_EventGoal {
  return { eventId: 0, goalId: 0, value: "0" };
}

export const CMsgEventGoals_EventGoal = {
  encode(message: CMsgEventGoals_EventGoal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.goalId !== 0) {
      writer.uint32(16).uint32(message.goalId);
    }
    if (message.value !== "0") {
      writer.uint32(24).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgEventGoals_EventGoal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgEventGoals_EventGoal();
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

          message.goalId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.value = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToGCLeaguePredictions(): CMsgGCToGCLeaguePredictions {
  return { leagueId: 0 };
}

export const CMsgGCToGCLeaguePredictions = {
  encode(message: CMsgGCToGCLeaguePredictions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToGCLeaguePredictions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToGCLeaguePredictions();
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
};

function createBaseCMsgPredictionRankings(): CMsgPredictionRankings {
  return { predictions: [] };
}

export const CMsgPredictionRankings = {
  encode(message: CMsgPredictionRankings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.predictions) {
      CMsgPredictionRankings_Prediction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPredictionRankings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPredictionRankings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.predictions.push(CMsgPredictionRankings_Prediction.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgPredictionRankings_PredictionLine(): CMsgPredictionRankings_PredictionLine {
  return { answerId: 0, answerName: "", answerLogo: "0", answerValue: 0 };
}

export const CMsgPredictionRankings_PredictionLine = {
  encode(message: CMsgPredictionRankings_PredictionLine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.answerId !== 0) {
      writer.uint32(8).uint32(message.answerId);
    }
    if (message.answerName !== "") {
      writer.uint32(18).string(message.answerName);
    }
    if (message.answerLogo !== "0") {
      writer.uint32(24).uint64(message.answerLogo);
    }
    if (message.answerValue !== 0) {
      writer.uint32(37).float(message.answerValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPredictionRankings_PredictionLine {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPredictionRankings_PredictionLine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.answerId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.answerName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.answerLogo = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.answerValue = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgPredictionRankings_Prediction(): CMsgPredictionRankings_Prediction {
  return { selectionId: 0, predictionLines: [] };
}

export const CMsgPredictionRankings_Prediction = {
  encode(message: CMsgPredictionRankings_Prediction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selectionId !== 0) {
      writer.uint32(8).uint32(message.selectionId);
    }
    for (const v of message.predictionLines) {
      CMsgPredictionRankings_PredictionLine.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPredictionRankings_Prediction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPredictionRankings_Prediction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.selectionId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.predictionLines.push(CMsgPredictionRankings_PredictionLine.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgPredictionResults(): CMsgPredictionResults {
  return { results: [] };
}

export const CMsgPredictionResults = {
  encode(message: CMsgPredictionResults, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      CMsgPredictionResults_Result.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPredictionResults {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPredictionResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.results.push(CMsgPredictionResults_Result.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgPredictionResults_ResultBreakdown(): CMsgPredictionResults_ResultBreakdown {
  return { answerSelection: 0, answerValue: 0 };
}

export const CMsgPredictionResults_ResultBreakdown = {
  encode(message: CMsgPredictionResults_ResultBreakdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.answerSelection !== 0) {
      writer.uint32(16).uint32(message.answerSelection);
    }
    if (message.answerValue !== 0) {
      writer.uint32(29).float(message.answerValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPredictionResults_ResultBreakdown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPredictionResults_ResultBreakdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.answerSelection = reader.uint32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.answerValue = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgPredictionResults_Result(): CMsgPredictionResults_Result {
  return { selectionId: 0, resultBreakdown: [] };
}

export const CMsgPredictionResults_Result = {
  encode(message: CMsgPredictionResults_Result, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selectionId !== 0) {
      writer.uint32(8).uint32(message.selectionId);
    }
    for (const v of message.resultBreakdown) {
      CMsgPredictionResults_ResultBreakdown.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPredictionResults_Result {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPredictionResults_Result();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.selectionId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.resultBreakdown.push(CMsgPredictionResults_ResultBreakdown.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCHasPlayerVotedForMVP(): CMsgClientToGCHasPlayerVotedForMVP {
  return { matchId: "0" };
}

export const CMsgClientToGCHasPlayerVotedForMVP = {
  encode(message: CMsgClientToGCHasPlayerVotedForMVP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCHasPlayerVotedForMVP {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCHasPlayerVotedForMVP();
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
};

function createBaseCMsgClientToGCHasPlayerVotedForMVPResponse(): CMsgClientToGCHasPlayerVotedForMVPResponse {
  return { result: false };
}

export const CMsgClientToGCHasPlayerVotedForMVPResponse = {
  encode(message: CMsgClientToGCHasPlayerVotedForMVPResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result === true) {
      writer.uint32(8).bool(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCHasPlayerVotedForMVPResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCHasPlayerVotedForMVPResponse();
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
};

function createBaseCMsgClientToGCVoteForMVP(): CMsgClientToGCVoteForMVP {
  return { matchId: "0", accountId: 0 };
}

export const CMsgClientToGCVoteForMVP = {
  encode(message: CMsgClientToGCVoteForMVP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.accountId !== 0) {
      writer.uint32(24).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCVoteForMVP {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCVoteForMVP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
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
};

function createBaseCMsgClientToGCVoteForMVPResponse(): CMsgClientToGCVoteForMVPResponse {
  return { result: false };
}

export const CMsgClientToGCVoteForMVPResponse = {
  encode(message: CMsgClientToGCVoteForMVPResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result === true) {
      writer.uint32(8).bool(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCVoteForMVPResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCVoteForMVPResponse();
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
};

function createBaseCMsgClientToGCMVPVoteTimeout(): CMsgClientToGCMVPVoteTimeout {
  return { matchId: "0" };
}

export const CMsgClientToGCMVPVoteTimeout = {
  encode(message: CMsgClientToGCMVPVoteTimeout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCMVPVoteTimeout {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCMVPVoteTimeout();
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
};

function createBaseCMsgClientToGCMVPVoteTimeoutResponse(): CMsgClientToGCMVPVoteTimeoutResponse {
  return { result: false };
}

export const CMsgClientToGCMVPVoteTimeoutResponse = {
  encode(message: CMsgClientToGCMVPVoteTimeoutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result === true) {
      writer.uint32(8).bool(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCMVPVoteTimeoutResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCMVPVoteTimeoutResponse();
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
};

function createBaseCMsgClientToGCTeammateStatsRequest(): CMsgClientToGCTeammateStatsRequest {
  return {};
}

export const CMsgClientToGCTeammateStatsRequest = {
  encode(_: CMsgClientToGCTeammateStatsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCTeammateStatsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCTeammateStatsRequest();
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

function createBaseCMsgClientToGCTeammateStatsResponse(): CMsgClientToGCTeammateStatsResponse {
  return { success: false, teammateStats: [] };
}

export const CMsgClientToGCTeammateStatsResponse = {
  encode(message: CMsgClientToGCTeammateStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    for (const v of message.teammateStats) {
      CMsgClientToGCTeammateStatsResponse_TeammateStat.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCTeammateStatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCTeammateStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.success = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.teammateStats.push(CMsgClientToGCTeammateStatsResponse_TeammateStat.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCTeammateStatsResponse_TeammateStat(): CMsgClientToGCTeammateStatsResponse_TeammateStat {
  return { accountId: 0, games: 0, wins: 0, mostRecentGameTimestamp: 0, mostRecentGameMatchId: "0", performance: 0 };
}

export const CMsgClientToGCTeammateStatsResponse_TeammateStat = {
  encode(
    message: CMsgClientToGCTeammateStatsResponse_TeammateStat,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.games !== 0) {
      writer.uint32(16).uint32(message.games);
    }
    if (message.wins !== 0) {
      writer.uint32(24).uint32(message.wins);
    }
    if (message.mostRecentGameTimestamp !== 0) {
      writer.uint32(32).uint32(message.mostRecentGameTimestamp);
    }
    if (message.mostRecentGameMatchId !== "0") {
      writer.uint32(40).uint64(message.mostRecentGameMatchId);
    }
    if (message.performance !== 0) {
      writer.uint32(805).float(message.performance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCTeammateStatsResponse_TeammateStat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCTeammateStatsResponse_TeammateStat();
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

          message.games = reader.uint32();
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

          message.mostRecentGameTimestamp = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.mostRecentGameMatchId = longToString(reader.uint64() as Long);
          continue;
        case 100:
          if (tag != 805) {
            break;
          }

          message.performance = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCVoteForArcana(): CMsgClientToGCVoteForArcana {
  return { matches: [] };
}

export const CMsgClientToGCVoteForArcana = {
  encode(message: CMsgClientToGCVoteForArcana, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.matches) {
      CMsgArcanaVoteMatchVotes.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCVoteForArcana {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCVoteForArcana();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.matches.push(CMsgArcanaVoteMatchVotes.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCVoteForArcanaResponse(): CMsgClientToGCVoteForArcanaResponse {
  return { result: 0 };
}

export const CMsgClientToGCVoteForArcanaResponse = {
  encode(message: CMsgClientToGCVoteForArcanaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCVoteForArcanaResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCVoteForArcanaResponse();
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

function createBaseCMsgClientToGCRequestArcanaVotesRemaining(): CMsgClientToGCRequestArcanaVotesRemaining {
  return {};
}

export const CMsgClientToGCRequestArcanaVotesRemaining = {
  encode(_: CMsgClientToGCRequestArcanaVotesRemaining, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestArcanaVotesRemaining {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestArcanaVotesRemaining();
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

function createBaseCMsgClientToGCRequestArcanaVotesRemainingResponse(): CMsgClientToGCRequestArcanaVotesRemainingResponse {
  return { result: false, votesRemaining: 0, votesTotal: 0, matchesPreviouslyVotedFor: [] };
}

export const CMsgClientToGCRequestArcanaVotesRemainingResponse = {
  encode(
    message: CMsgClientToGCRequestArcanaVotesRemainingResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result === true) {
      writer.uint32(8).bool(message.result);
    }
    if (message.votesRemaining !== 0) {
      writer.uint32(16).uint32(message.votesRemaining);
    }
    if (message.votesTotal !== 0) {
      writer.uint32(24).uint32(message.votesTotal);
    }
    for (const v of message.matchesPreviouslyVotedFor) {
      CMsgArcanaVoteMatchVotes.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestArcanaVotesRemainingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestArcanaVotesRemainingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.votesRemaining = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.votesTotal = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.matchesPreviouslyVotedFor.push(CMsgArcanaVoteMatchVotes.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestEventPointLogV2(): CMsgClientToGCRequestEventPointLogV2 {
  return { eventId: 0 };
}

export const CMsgClientToGCRequestEventPointLogV2 = {
  encode(message: CMsgClientToGCRequestEventPointLogV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestEventPointLogV2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestEventPointLogV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestEventPointLogResponseV2(): CMsgClientToGCRequestEventPointLogResponseV2 {
  return { result: false, eventId: 0, logEntries: [] };
}

export const CMsgClientToGCRequestEventPointLogResponseV2 = {
  encode(message: CMsgClientToGCRequestEventPointLogResponseV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result === true) {
      writer.uint32(8).bool(message.result);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    for (const v of message.logEntries) {
      CMsgClientToGCRequestEventPointLogResponseV2_LogEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestEventPointLogResponseV2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestEventPointLogResponseV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.eventId = reader.int32() as any;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.logEntries.push(
            CMsgClientToGCRequestEventPointLogResponseV2_LogEntry.decode(reader, reader.uint32()),
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

function createBaseCMsgClientToGCRequestEventPointLogResponseV2_LogEntry(): CMsgClientToGCRequestEventPointLogResponseV2_LogEntry {
  return { timestamp: 0, auditAction: 0, eventPoints: 0, auditData: "0" };
}

export const CMsgClientToGCRequestEventPointLogResponseV2_LogEntry = {
  encode(
    message: CMsgClientToGCRequestEventPointLogResponseV2_LogEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).uint32(message.timestamp);
    }
    if (message.auditAction !== 0) {
      writer.uint32(16).uint32(message.auditAction);
    }
    if (message.eventPoints !== 0) {
      writer.uint32(24).int32(message.eventPoints);
    }
    if (message.auditData !== "0") {
      writer.uint32(32).uint64(message.auditData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestEventPointLogResponseV2_LogEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestEventPointLogResponseV2_LogEntry();
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

          message.auditAction = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.eventPoints = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
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

function createBaseCMsgClientToGCPublishUserStat(): CMsgClientToGCPublishUserStat {
  return { userStatsEvent: 0, referenceData: "0" };
}

export const CMsgClientToGCPublishUserStat = {
  encode(message: CMsgClientToGCPublishUserStat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userStatsEvent !== 0) {
      writer.uint32(8).uint32(message.userStatsEvent);
    }
    if (message.referenceData !== "0") {
      writer.uint32(16).uint64(message.referenceData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCPublishUserStat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCPublishUserStat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.userStatsEvent = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.referenceData = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestSlarkGameResult(): CMsgClientToGCRequestSlarkGameResult {
  return { eventId: 0, slotChosen: 0, week: 0 };
}

export const CMsgClientToGCRequestSlarkGameResult = {
  encode(message: CMsgClientToGCRequestSlarkGameResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.slotChosen !== 0) {
      writer.uint32(16).uint32(message.slotChosen);
    }
    if (message.week !== 0) {
      writer.uint32(24).uint32(message.week);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestSlarkGameResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestSlarkGameResult();
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

          message.slotChosen = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.week = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestSlarkGameResultResponse(): CMsgClientToGCRequestSlarkGameResultResponse {
  return { pointsWon: 0, auraWon: false };
}

export const CMsgClientToGCRequestSlarkGameResultResponse = {
  encode(message: CMsgClientToGCRequestSlarkGameResultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pointsWon !== 0) {
      writer.uint32(8).uint32(message.pointsWon);
    }
    if (message.auraWon === true) {
      writer.uint32(16).bool(message.auraWon);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestSlarkGameResultResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestSlarkGameResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.pointsWon = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.auraWon = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientQuestProgressUpdated(): CMsgGCToClientQuestProgressUpdated {
  return { questId: 0, completedChallenges: [] };
}

export const CMsgGCToClientQuestProgressUpdated = {
  encode(message: CMsgGCToClientQuestProgressUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.questId !== 0) {
      writer.uint32(8).uint32(message.questId);
    }
    for (const v of message.completedChallenges) {
      CMsgGCToClientQuestProgressUpdated_Challenge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientQuestProgressUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientQuestProgressUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.questId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.completedChallenges.push(
            CMsgGCToClientQuestProgressUpdated_Challenge.decode(reader, reader.uint32()),
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

function createBaseCMsgGCToClientQuestProgressUpdated_Challenge(): CMsgGCToClientQuestProgressUpdated_Challenge {
  return { challengeId: 0, timeCompleted: 0, attempts: 0, heroId: 0, templateId: 0, questRank: 0, maxQuestRank: 0 };
}

export const CMsgGCToClientQuestProgressUpdated_Challenge = {
  encode(message: CMsgGCToClientQuestProgressUpdated_Challenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challengeId !== 0) {
      writer.uint32(8).uint32(message.challengeId);
    }
    if (message.timeCompleted !== 0) {
      writer.uint32(16).uint32(message.timeCompleted);
    }
    if (message.attempts !== 0) {
      writer.uint32(24).uint32(message.attempts);
    }
    if (message.heroId !== 0) {
      writer.uint32(32).uint32(message.heroId);
    }
    if (message.templateId !== 0) {
      writer.uint32(40).uint32(message.templateId);
    }
    if (message.questRank !== 0) {
      writer.uint32(48).uint32(message.questRank);
    }
    if (message.maxQuestRank !== 0) {
      writer.uint32(56).uint32(message.maxQuestRank);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientQuestProgressUpdated_Challenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientQuestProgressUpdated_Challenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.challengeId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.timeCompleted = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.attempts = reader.uint32();
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

          message.templateId = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.questRank = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.maxQuestRank = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTARedeemItem(): CMsgDOTARedeemItem {
  return { currencyId: "0", purchaseDef: 0 };
}

export const CMsgDOTARedeemItem = {
  encode(message: CMsgDOTARedeemItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currencyId !== "0") {
      writer.uint32(8).uint64(message.currencyId);
    }
    if (message.purchaseDef !== 0) {
      writer.uint32(16).uint32(message.purchaseDef);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARedeemItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARedeemItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.currencyId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.purchaseDef = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTARedeemItemResponse(): CMsgDOTARedeemItemResponse {
  return { response: 0 };
}

export const CMsgDOTARedeemItemResponse = {
  encode(message: CMsgDOTARedeemItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTARedeemItemResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTARedeemItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSelectCompendiumInGamePrediction(): CMsgClientToGCSelectCompendiumInGamePrediction {
  return { matchId: "0", predictions: [], leagueId: 0 };
}

export const CMsgClientToGCSelectCompendiumInGamePrediction = {
  encode(
    message: CMsgClientToGCSelectCompendiumInGamePrediction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    for (const v of message.predictions) {
      CMsgClientToGCSelectCompendiumInGamePrediction_Prediction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.leagueId !== 0) {
      writer.uint32(24).uint32(message.leagueId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSelectCompendiumInGamePrediction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSelectCompendiumInGamePrediction();
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

          message.predictions.push(
            CMsgClientToGCSelectCompendiumInGamePrediction_Prediction.decode(reader, reader.uint32()),
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
};

function createBaseCMsgClientToGCSelectCompendiumInGamePrediction_Prediction(): CMsgClientToGCSelectCompendiumInGamePrediction_Prediction {
  return { predictionId: 0, predictionValue: 0 };
}

export const CMsgClientToGCSelectCompendiumInGamePrediction_Prediction = {
  encode(
    message: CMsgClientToGCSelectCompendiumInGamePrediction_Prediction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.predictionId !== 0) {
      writer.uint32(8).uint32(message.predictionId);
    }
    if (message.predictionValue !== 0) {
      writer.uint32(16).uint32(message.predictionValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSelectCompendiumInGamePrediction_Prediction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSelectCompendiumInGamePrediction_Prediction();
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
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSelectCompendiumInGamePredictionResponse(): CMsgClientToGCSelectCompendiumInGamePredictionResponse {
  return { result: 0 };
}

export const CMsgClientToGCSelectCompendiumInGamePredictionResponse = {
  encode(
    message: CMsgClientToGCSelectCompendiumInGamePredictionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSelectCompendiumInGamePredictionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSelectCompendiumInGamePredictionResponse();
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

function createBaseCMsgClientToGCOpenPlayerCardPack(): CMsgClientToGCOpenPlayerCardPack {
  return { playerCardPackItemId: "0", teamId: 0, deprecatedLeagueId: 0, region: 0 };
}

export const CMsgClientToGCOpenPlayerCardPack = {
  encode(message: CMsgClientToGCOpenPlayerCardPack, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerCardPackItemId !== "0") {
      writer.uint32(8).uint64(message.playerCardPackItemId);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).uint32(message.teamId);
    }
    if (message.deprecatedLeagueId !== 0) {
      writer.uint32(24).uint32(message.deprecatedLeagueId);
    }
    if (message.region !== 0) {
      writer.uint32(32).int32(message.region);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCOpenPlayerCardPack {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCOpenPlayerCardPack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerCardPackItemId = longToString(reader.uint64() as Long);
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

          message.deprecatedLeagueId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.region = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCOpenPlayerCardPackResponse(): CMsgClientToGCOpenPlayerCardPackResponse {
  return { result: 1, playerCardItemIds: [] };
}

export const CMsgClientToGCOpenPlayerCardPackResponse = {
  encode(message: CMsgClientToGCOpenPlayerCardPackResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 1) {
      writer.uint32(8).int32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.playerCardItemIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCOpenPlayerCardPackResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCOpenPlayerCardPackResponse();
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
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRecyclePlayerCard(): CMsgClientToGCRecyclePlayerCard {
  return { playerCardItemIds: [], eventId: 0 };
}

export const CMsgClientToGCRecyclePlayerCard = {
  encode(message: CMsgClientToGCRecyclePlayerCard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(26).fork();
    for (const v of message.playerCardItemIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.eventId !== 0) {
      writer.uint32(16).uint32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRecyclePlayerCard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRecyclePlayerCard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag == 24) {
            message.playerCardItemIds.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playerCardItemIds.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 2:
          if (tag != 16) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRecyclePlayerCardResponse(): CMsgClientToGCRecyclePlayerCardResponse {
  return { result: 1, dustAmount: 0 };
}

export const CMsgClientToGCRecyclePlayerCardResponse = {
  encode(message: CMsgClientToGCRecyclePlayerCardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 1) {
      writer.uint32(8).int32(message.result);
    }
    if (message.dustAmount !== 0) {
      writer.uint32(16).uint32(message.dustAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRecyclePlayerCardResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRecyclePlayerCardResponse();
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
          if (tag != 16) {
            break;
          }

          message.dustAmount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCreatePlayerCardPack(): CMsgClientToGCCreatePlayerCardPack {
  return { cardDustItemId: "0", eventId: 0, premiumPack: false };
}

export const CMsgClientToGCCreatePlayerCardPack = {
  encode(message: CMsgClientToGCCreatePlayerCardPack, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cardDustItemId !== "0") {
      writer.uint32(8).uint64(message.cardDustItemId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).uint32(message.eventId);
    }
    if (message.premiumPack === true) {
      writer.uint32(24).bool(message.premiumPack);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCreatePlayerCardPack {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCreatePlayerCardPack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.cardDustItemId = longToString(reader.uint64() as Long);
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

          message.premiumPack = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCreatePlayerCardPackResponse(): CMsgClientToGCCreatePlayerCardPackResponse {
  return { result: 1 };
}

export const CMsgClientToGCCreatePlayerCardPackResponse = {
  encode(message: CMsgClientToGCCreatePlayerCardPackResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 1) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCreatePlayerCardPackResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCreatePlayerCardPackResponse();
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

function createBaseCMsgClientToGCCreateTeamPlayerCardPack(): CMsgClientToGCCreateTeamPlayerCardPack {
  return { cardDustItemId: "0", eventId: 0, premiumPack: false, teamId: 0 };
}

export const CMsgClientToGCCreateTeamPlayerCardPack = {
  encode(message: CMsgClientToGCCreateTeamPlayerCardPack, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cardDustItemId !== "0") {
      writer.uint32(8).uint64(message.cardDustItemId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).uint32(message.eventId);
    }
    if (message.premiumPack === true) {
      writer.uint32(24).bool(message.premiumPack);
    }
    if (message.teamId !== 0) {
      writer.uint32(32).uint32(message.teamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCreateTeamPlayerCardPack {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCreateTeamPlayerCardPack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.cardDustItemId = longToString(reader.uint64() as Long);
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

          message.premiumPack = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
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

function createBaseCMsgClientToGCCreateTeamPlayerCardPackResponse(): CMsgClientToGCCreateTeamPlayerCardPackResponse {
  return { result: 1 };
}

export const CMsgClientToGCCreateTeamPlayerCardPackResponse = {
  encode(
    message: CMsgClientToGCCreateTeamPlayerCardPackResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 1) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCreateTeamPlayerCardPackResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCreateTeamPlayerCardPackResponse();
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

function createBaseCMsgGCToClientBattlePassRollupInternational2016(): CMsgGCToClientBattlePassRollupInternational2016 {
  return {
    battlePassLevel: 0,
    questlines: [],
    wagering: undefined,
    achievements: undefined,
    battleCup: undefined,
    predictions: undefined,
    bracket: undefined,
    playerCards: [],
    fantasyChallenge: undefined,
  };
}

export const CMsgGCToClientBattlePassRollupInternational2016 = {
  encode(
    message: CMsgGCToClientBattlePassRollupInternational2016,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.battlePassLevel !== 0) {
      writer.uint32(8).uint32(message.battlePassLevel);
    }
    for (const v of message.questlines) {
      CMsgGCToClientBattlePassRollupInternational2016_Questlines.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.wagering !== undefined) {
      CMsgGCToClientBattlePassRollupInternational2016_Wagering.encode(message.wagering, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.achievements !== undefined) {
      CMsgGCToClientBattlePassRollupInternational2016_Achievements.encode(
        message.achievements,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.battleCup !== undefined) {
      CMsgGCToClientBattlePassRollupInternational2016_BattleCup.encode(message.battleCup, writer.uint32(42).fork())
        .ldelim();
    }
    if (message.predictions !== undefined) {
      CMsgGCToClientBattlePassRollupInternational2016_Predictions.encode(message.predictions, writer.uint32(50).fork())
        .ldelim();
    }
    if (message.bracket !== undefined) {
      CMsgGCToClientBattlePassRollupInternational2016_Bracket.encode(message.bracket, writer.uint32(58).fork())
        .ldelim();
    }
    for (const v of message.playerCards) {
      CMsgGCToClientBattlePassRollupInternational2016_PlayerCard.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.fantasyChallenge !== undefined) {
      CMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge.encode(
        message.fantasyChallenge,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupInternational2016 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupInternational2016();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.battlePassLevel = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.questlines.push(
            CMsgGCToClientBattlePassRollupInternational2016_Questlines.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.wagering = CMsgGCToClientBattlePassRollupInternational2016_Wagering.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.achievements = CMsgGCToClientBattlePassRollupInternational2016_Achievements.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.battleCup = CMsgGCToClientBattlePassRollupInternational2016_BattleCup.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.predictions = CMsgGCToClientBattlePassRollupInternational2016_Predictions.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.bracket = CMsgGCToClientBattlePassRollupInternational2016_Bracket.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.playerCards.push(
            CMsgGCToClientBattlePassRollupInternational2016_PlayerCard.decode(reader, reader.uint32()),
          );
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.fantasyChallenge = CMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge.decode(
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

function createBaseCMsgGCToClientBattlePassRollupInternational2016_Questlines(): CMsgGCToClientBattlePassRollupInternational2016_Questlines {
  return { name: "", onestar: 0, twostar: 0, threestar: 0, total: 0 };
}

export const CMsgGCToClientBattlePassRollupInternational2016_Questlines = {
  encode(
    message: CMsgGCToClientBattlePassRollupInternational2016_Questlines,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.onestar !== 0) {
      writer.uint32(16).uint32(message.onestar);
    }
    if (message.twostar !== 0) {
      writer.uint32(24).uint32(message.twostar);
    }
    if (message.threestar !== 0) {
      writer.uint32(32).uint32(message.threestar);
    }
    if (message.total !== 0) {
      writer.uint32(40).uint32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupInternational2016_Questlines {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupInternational2016_Questlines();
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

          message.onestar = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.twostar = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.threestar = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.total = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupInternational2016_Wagering(): CMsgGCToClientBattlePassRollupInternational2016_Wagering {
  return { totalWagered: 0, totalWon: 0, averageWon: 0, successRate: 0, totalTips: 0 };
}

export const CMsgGCToClientBattlePassRollupInternational2016_Wagering = {
  encode(
    message: CMsgGCToClientBattlePassRollupInternational2016_Wagering,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.totalWagered !== 0) {
      writer.uint32(8).uint32(message.totalWagered);
    }
    if (message.totalWon !== 0) {
      writer.uint32(16).uint32(message.totalWon);
    }
    if (message.averageWon !== 0) {
      writer.uint32(24).uint32(message.averageWon);
    }
    if (message.successRate !== 0) {
      writer.uint32(32).uint32(message.successRate);
    }
    if (message.totalTips !== 0) {
      writer.uint32(40).uint32(message.totalTips);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupInternational2016_Wagering {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupInternational2016_Wagering();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.totalWagered = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.totalWon = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.averageWon = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.successRate = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.totalTips = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupInternational2016_Achievements(): CMsgGCToClientBattlePassRollupInternational2016_Achievements {
  return { completed: 0, total: 0, points: 0 };
}

export const CMsgGCToClientBattlePassRollupInternational2016_Achievements = {
  encode(
    message: CMsgGCToClientBattlePassRollupInternational2016_Achievements,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.completed !== 0) {
      writer.uint32(8).uint32(message.completed);
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    if (message.points !== 0) {
      writer.uint32(24).uint32(message.points);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgGCToClientBattlePassRollupInternational2016_Achievements {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupInternational2016_Achievements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.completed = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.total = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.points = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupInternational2016_BattleCup(): CMsgGCToClientBattlePassRollupInternational2016_BattleCup {
  return { wins: 0, score: 0 };
}

export const CMsgGCToClientBattlePassRollupInternational2016_BattleCup = {
  encode(
    message: CMsgGCToClientBattlePassRollupInternational2016_BattleCup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.wins !== 0) {
      writer.uint32(8).uint32(message.wins);
    }
    if (message.score !== 0) {
      writer.uint32(16).uint32(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupInternational2016_BattleCup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupInternational2016_BattleCup();
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

          message.score = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupInternational2016_Predictions(): CMsgGCToClientBattlePassRollupInternational2016_Predictions {
  return { correct: 0, total: 0, points: 0 };
}

export const CMsgGCToClientBattlePassRollupInternational2016_Predictions = {
  encode(
    message: CMsgGCToClientBattlePassRollupInternational2016_Predictions,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.correct !== 0) {
      writer.uint32(8).uint32(message.correct);
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    if (message.points !== 0) {
      writer.uint32(24).uint32(message.points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupInternational2016_Predictions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupInternational2016_Predictions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.correct = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.total = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.points = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupInternational2016_Bracket(): CMsgGCToClientBattlePassRollupInternational2016_Bracket {
  return { correct: 0, points: 0 };
}

export const CMsgGCToClientBattlePassRollupInternational2016_Bracket = {
  encode(
    message: CMsgGCToClientBattlePassRollupInternational2016_Bracket,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.correct !== 0) {
      writer.uint32(8).uint32(message.correct);
    }
    if (message.points !== 0) {
      writer.uint32(16).uint32(message.points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupInternational2016_Bracket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupInternational2016_Bracket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.correct = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.points = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupInternational2016_PlayerCard(): CMsgGCToClientBattlePassRollupInternational2016_PlayerCard {
  return { accountId: 0, quality: 0 };
}

export const CMsgGCToClientBattlePassRollupInternational2016_PlayerCard = {
  encode(
    message: CMsgGCToClientBattlePassRollupInternational2016_PlayerCard,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.quality !== 0) {
      writer.uint32(16).uint32(message.quality);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupInternational2016_PlayerCard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupInternational2016_PlayerCard();
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

          message.quality = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge(): CMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge {
  return { totalScore: 0, percentile: 0 };
}

export const CMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge = {
  encode(
    message: CMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.totalScore !== 0) {
      writer.uint32(13).float(message.totalScore);
    }
    if (message.percentile !== 0) {
      writer.uint32(21).float(message.percentile);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.totalScore = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.percentile = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupFall2016(): CMsgGCToClientBattlePassRollupFall2016 {
  return {
    battlePassLevel: 0,
    questlines: [],
    wagering: undefined,
    achievements: undefined,
    battleCup: undefined,
    predictions: undefined,
    bracket: undefined,
    playerCards: [],
    fantasyChallenge: undefined,
  };
}

export const CMsgGCToClientBattlePassRollupFall2016 = {
  encode(message: CMsgGCToClientBattlePassRollupFall2016, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.battlePassLevel !== 0) {
      writer.uint32(8).uint32(message.battlePassLevel);
    }
    for (const v of message.questlines) {
      CMsgGCToClientBattlePassRollupFall2016_Questlines.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.wagering !== undefined) {
      CMsgGCToClientBattlePassRollupFall2016_Wagering.encode(message.wagering, writer.uint32(26).fork()).ldelim();
    }
    if (message.achievements !== undefined) {
      CMsgGCToClientBattlePassRollupFall2016_Achievements.encode(message.achievements, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.battleCup !== undefined) {
      CMsgGCToClientBattlePassRollupFall2016_BattleCup.encode(message.battleCup, writer.uint32(42).fork()).ldelim();
    }
    if (message.predictions !== undefined) {
      CMsgGCToClientBattlePassRollupFall2016_Predictions.encode(message.predictions, writer.uint32(50).fork()).ldelim();
    }
    if (message.bracket !== undefined) {
      CMsgGCToClientBattlePassRollupFall2016_Bracket.encode(message.bracket, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.playerCards) {
      CMsgGCToClientBattlePassRollupFall2016_PlayerCard.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.fantasyChallenge !== undefined) {
      CMsgGCToClientBattlePassRollupFall2016_FantasyChallenge.encode(message.fantasyChallenge, writer.uint32(74).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupFall2016 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupFall2016();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.battlePassLevel = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.questlines.push(CMsgGCToClientBattlePassRollupFall2016_Questlines.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.wagering = CMsgGCToClientBattlePassRollupFall2016_Wagering.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.achievements = CMsgGCToClientBattlePassRollupFall2016_Achievements.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.battleCup = CMsgGCToClientBattlePassRollupFall2016_BattleCup.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.predictions = CMsgGCToClientBattlePassRollupFall2016_Predictions.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.bracket = CMsgGCToClientBattlePassRollupFall2016_Bracket.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.playerCards.push(CMsgGCToClientBattlePassRollupFall2016_PlayerCard.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.fantasyChallenge = CMsgGCToClientBattlePassRollupFall2016_FantasyChallenge.decode(
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

function createBaseCMsgGCToClientBattlePassRollupFall2016_Questlines(): CMsgGCToClientBattlePassRollupFall2016_Questlines {
  return { name: "", onestar: 0, twostar: 0, threestar: 0, total: 0 };
}

export const CMsgGCToClientBattlePassRollupFall2016_Questlines = {
  encode(
    message: CMsgGCToClientBattlePassRollupFall2016_Questlines,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.onestar !== 0) {
      writer.uint32(16).uint32(message.onestar);
    }
    if (message.twostar !== 0) {
      writer.uint32(24).uint32(message.twostar);
    }
    if (message.threestar !== 0) {
      writer.uint32(32).uint32(message.threestar);
    }
    if (message.total !== 0) {
      writer.uint32(40).uint32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupFall2016_Questlines {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupFall2016_Questlines();
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

          message.onestar = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.twostar = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.threestar = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.total = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupFall2016_Wagering(): CMsgGCToClientBattlePassRollupFall2016_Wagering {
  return { totalWagered: 0, totalWon: 0, averageWon: 0, successRate: 0, totalTips: 0 };
}

export const CMsgGCToClientBattlePassRollupFall2016_Wagering = {
  encode(
    message: CMsgGCToClientBattlePassRollupFall2016_Wagering,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.totalWagered !== 0) {
      writer.uint32(8).uint32(message.totalWagered);
    }
    if (message.totalWon !== 0) {
      writer.uint32(16).uint32(message.totalWon);
    }
    if (message.averageWon !== 0) {
      writer.uint32(24).uint32(message.averageWon);
    }
    if (message.successRate !== 0) {
      writer.uint32(32).uint32(message.successRate);
    }
    if (message.totalTips !== 0) {
      writer.uint32(40).uint32(message.totalTips);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupFall2016_Wagering {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupFall2016_Wagering();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.totalWagered = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.totalWon = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.averageWon = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.successRate = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.totalTips = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupFall2016_Achievements(): CMsgGCToClientBattlePassRollupFall2016_Achievements {
  return { completed: 0, total: 0, points: 0 };
}

export const CMsgGCToClientBattlePassRollupFall2016_Achievements = {
  encode(
    message: CMsgGCToClientBattlePassRollupFall2016_Achievements,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.completed !== 0) {
      writer.uint32(8).uint32(message.completed);
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    if (message.points !== 0) {
      writer.uint32(24).uint32(message.points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupFall2016_Achievements {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupFall2016_Achievements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.completed = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.total = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.points = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupFall2016_BattleCup(): CMsgGCToClientBattlePassRollupFall2016_BattleCup {
  return { wins: 0, score: 0 };
}

export const CMsgGCToClientBattlePassRollupFall2016_BattleCup = {
  encode(
    message: CMsgGCToClientBattlePassRollupFall2016_BattleCup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.wins !== 0) {
      writer.uint32(8).uint32(message.wins);
    }
    if (message.score !== 0) {
      writer.uint32(16).uint32(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupFall2016_BattleCup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupFall2016_BattleCup();
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

          message.score = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupFall2016_Predictions(): CMsgGCToClientBattlePassRollupFall2016_Predictions {
  return { correct: 0, total: 0, points: 0 };
}

export const CMsgGCToClientBattlePassRollupFall2016_Predictions = {
  encode(
    message: CMsgGCToClientBattlePassRollupFall2016_Predictions,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.correct !== 0) {
      writer.uint32(8).uint32(message.correct);
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    if (message.points !== 0) {
      writer.uint32(24).uint32(message.points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupFall2016_Predictions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupFall2016_Predictions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.correct = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.total = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.points = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupFall2016_Bracket(): CMsgGCToClientBattlePassRollupFall2016_Bracket {
  return { correct: 0, points: 0 };
}

export const CMsgGCToClientBattlePassRollupFall2016_Bracket = {
  encode(
    message: CMsgGCToClientBattlePassRollupFall2016_Bracket,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.correct !== 0) {
      writer.uint32(8).uint32(message.correct);
    }
    if (message.points !== 0) {
      writer.uint32(16).uint32(message.points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupFall2016_Bracket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupFall2016_Bracket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.correct = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.points = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupFall2016_PlayerCard(): CMsgGCToClientBattlePassRollupFall2016_PlayerCard {
  return { accountId: 0, quality: 0 };
}

export const CMsgGCToClientBattlePassRollupFall2016_PlayerCard = {
  encode(
    message: CMsgGCToClientBattlePassRollupFall2016_PlayerCard,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.quality !== 0) {
      writer.uint32(16).uint32(message.quality);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupFall2016_PlayerCard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupFall2016_PlayerCard();
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

          message.quality = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupFall2016_FantasyChallenge(): CMsgGCToClientBattlePassRollupFall2016_FantasyChallenge {
  return { totalScore: 0, percentile: 0 };
}

export const CMsgGCToClientBattlePassRollupFall2016_FantasyChallenge = {
  encode(
    message: CMsgGCToClientBattlePassRollupFall2016_FantasyChallenge,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.totalScore !== 0) {
      writer.uint32(13).float(message.totalScore);
    }
    if (message.percentile !== 0) {
      writer.uint32(21).float(message.percentile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupFall2016_FantasyChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupFall2016_FantasyChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.totalScore = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.percentile = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupWinter2017(): CMsgGCToClientBattlePassRollupWinter2017 {
  return {
    battlePassLevel: 0,
    questlines: [],
    wagering: undefined,
    achievements: undefined,
    battleCup: undefined,
    predictions: undefined,
    bracket: undefined,
    playerCards: [],
    fantasyChallenge: undefined,
  };
}

export const CMsgGCToClientBattlePassRollupWinter2017 = {
  encode(message: CMsgGCToClientBattlePassRollupWinter2017, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.battlePassLevel !== 0) {
      writer.uint32(8).uint32(message.battlePassLevel);
    }
    for (const v of message.questlines) {
      CMsgGCToClientBattlePassRollupWinter2017_Questlines.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.wagering !== undefined) {
      CMsgGCToClientBattlePassRollupWinter2017_Wagering.encode(message.wagering, writer.uint32(26).fork()).ldelim();
    }
    if (message.achievements !== undefined) {
      CMsgGCToClientBattlePassRollupWinter2017_Achievements.encode(message.achievements, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.battleCup !== undefined) {
      CMsgGCToClientBattlePassRollupWinter2017_BattleCup.encode(message.battleCup, writer.uint32(42).fork()).ldelim();
    }
    if (message.predictions !== undefined) {
      CMsgGCToClientBattlePassRollupWinter2017_Predictions.encode(message.predictions, writer.uint32(50).fork())
        .ldelim();
    }
    if (message.bracket !== undefined) {
      CMsgGCToClientBattlePassRollupWinter2017_Bracket.encode(message.bracket, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.playerCards) {
      CMsgGCToClientBattlePassRollupWinter2017_PlayerCard.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.fantasyChallenge !== undefined) {
      CMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge.encode(
        message.fantasyChallenge,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupWinter2017 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupWinter2017();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.battlePassLevel = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.questlines.push(CMsgGCToClientBattlePassRollupWinter2017_Questlines.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.wagering = CMsgGCToClientBattlePassRollupWinter2017_Wagering.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.achievements = CMsgGCToClientBattlePassRollupWinter2017_Achievements.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.battleCup = CMsgGCToClientBattlePassRollupWinter2017_BattleCup.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.predictions = CMsgGCToClientBattlePassRollupWinter2017_Predictions.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.bracket = CMsgGCToClientBattlePassRollupWinter2017_Bracket.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.playerCards.push(CMsgGCToClientBattlePassRollupWinter2017_PlayerCard.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.fantasyChallenge = CMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge.decode(
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

function createBaseCMsgGCToClientBattlePassRollupWinter2017_Questlines(): CMsgGCToClientBattlePassRollupWinter2017_Questlines {
  return { name: "", onestar: 0, twostar: 0, threestar: 0, total: 0 };
}

export const CMsgGCToClientBattlePassRollupWinter2017_Questlines = {
  encode(
    message: CMsgGCToClientBattlePassRollupWinter2017_Questlines,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.onestar !== 0) {
      writer.uint32(16).uint32(message.onestar);
    }
    if (message.twostar !== 0) {
      writer.uint32(24).uint32(message.twostar);
    }
    if (message.threestar !== 0) {
      writer.uint32(32).uint32(message.threestar);
    }
    if (message.total !== 0) {
      writer.uint32(40).uint32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupWinter2017_Questlines {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupWinter2017_Questlines();
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

          message.onestar = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.twostar = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.threestar = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.total = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupWinter2017_Wagering(): CMsgGCToClientBattlePassRollupWinter2017_Wagering {
  return { totalWagered: 0, totalWon: 0, averageWon: 0, successRate: 0, totalTips: 0 };
}

export const CMsgGCToClientBattlePassRollupWinter2017_Wagering = {
  encode(
    message: CMsgGCToClientBattlePassRollupWinter2017_Wagering,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.totalWagered !== 0) {
      writer.uint32(8).uint32(message.totalWagered);
    }
    if (message.totalWon !== 0) {
      writer.uint32(16).uint32(message.totalWon);
    }
    if (message.averageWon !== 0) {
      writer.uint32(24).uint32(message.averageWon);
    }
    if (message.successRate !== 0) {
      writer.uint32(32).uint32(message.successRate);
    }
    if (message.totalTips !== 0) {
      writer.uint32(40).uint32(message.totalTips);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupWinter2017_Wagering {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupWinter2017_Wagering();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.totalWagered = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.totalWon = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.averageWon = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.successRate = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.totalTips = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupWinter2017_Achievements(): CMsgGCToClientBattlePassRollupWinter2017_Achievements {
  return { completed: 0, total: 0, points: 0 };
}

export const CMsgGCToClientBattlePassRollupWinter2017_Achievements = {
  encode(
    message: CMsgGCToClientBattlePassRollupWinter2017_Achievements,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.completed !== 0) {
      writer.uint32(8).uint32(message.completed);
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    if (message.points !== 0) {
      writer.uint32(24).uint32(message.points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupWinter2017_Achievements {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupWinter2017_Achievements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.completed = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.total = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.points = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupWinter2017_BattleCup(): CMsgGCToClientBattlePassRollupWinter2017_BattleCup {
  return { wins: 0, score: 0 };
}

export const CMsgGCToClientBattlePassRollupWinter2017_BattleCup = {
  encode(
    message: CMsgGCToClientBattlePassRollupWinter2017_BattleCup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.wins !== 0) {
      writer.uint32(8).uint32(message.wins);
    }
    if (message.score !== 0) {
      writer.uint32(16).uint32(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupWinter2017_BattleCup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupWinter2017_BattleCup();
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

          message.score = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupWinter2017_Predictions(): CMsgGCToClientBattlePassRollupWinter2017_Predictions {
  return { correct: 0, total: 0, points: 0 };
}

export const CMsgGCToClientBattlePassRollupWinter2017_Predictions = {
  encode(
    message: CMsgGCToClientBattlePassRollupWinter2017_Predictions,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.correct !== 0) {
      writer.uint32(8).uint32(message.correct);
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    if (message.points !== 0) {
      writer.uint32(24).uint32(message.points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupWinter2017_Predictions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupWinter2017_Predictions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.correct = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.total = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.points = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupWinter2017_Bracket(): CMsgGCToClientBattlePassRollupWinter2017_Bracket {
  return { correct: 0, points: 0 };
}

export const CMsgGCToClientBattlePassRollupWinter2017_Bracket = {
  encode(
    message: CMsgGCToClientBattlePassRollupWinter2017_Bracket,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.correct !== 0) {
      writer.uint32(8).uint32(message.correct);
    }
    if (message.points !== 0) {
      writer.uint32(16).uint32(message.points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupWinter2017_Bracket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupWinter2017_Bracket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.correct = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.points = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupWinter2017_PlayerCard(): CMsgGCToClientBattlePassRollupWinter2017_PlayerCard {
  return { accountId: 0, quality: 0 };
}

export const CMsgGCToClientBattlePassRollupWinter2017_PlayerCard = {
  encode(
    message: CMsgGCToClientBattlePassRollupWinter2017_PlayerCard,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.quality !== 0) {
      writer.uint32(16).uint32(message.quality);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupWinter2017_PlayerCard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupWinter2017_PlayerCard();
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

          message.quality = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge(): CMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge {
  return { totalScore: 0, percentile: 0 };
}

export const CMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge = {
  encode(
    message: CMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.totalScore !== 0) {
      writer.uint32(13).float(message.totalScore);
    }
    if (message.percentile !== 0) {
      writer.uint32(21).float(message.percentile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.totalScore = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.percentile = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI7(): CMsgGCToClientBattlePassRollupTI7 {
  return {
    battlePassLevel: 0,
    questlines: [],
    wagering: undefined,
    achievements: undefined,
    battleCup: undefined,
    predictions: undefined,
    bracket: undefined,
    playerCards: [],
    fantasyChallenge: undefined,
  };
}

export const CMsgGCToClientBattlePassRollupTI7 = {
  encode(message: CMsgGCToClientBattlePassRollupTI7, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.battlePassLevel !== 0) {
      writer.uint32(8).uint32(message.battlePassLevel);
    }
    for (const v of message.questlines) {
      CMsgGCToClientBattlePassRollupTI7_Questlines.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.wagering !== undefined) {
      CMsgGCToClientBattlePassRollupTI7_Wagering.encode(message.wagering, writer.uint32(26).fork()).ldelim();
    }
    if (message.achievements !== undefined) {
      CMsgGCToClientBattlePassRollupTI7_Achievements.encode(message.achievements, writer.uint32(34).fork()).ldelim();
    }
    if (message.battleCup !== undefined) {
      CMsgGCToClientBattlePassRollupTI7_BattleCup.encode(message.battleCup, writer.uint32(42).fork()).ldelim();
    }
    if (message.predictions !== undefined) {
      CMsgGCToClientBattlePassRollupTI7_Predictions.encode(message.predictions, writer.uint32(50).fork()).ldelim();
    }
    if (message.bracket !== undefined) {
      CMsgGCToClientBattlePassRollupTI7_Bracket.encode(message.bracket, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.playerCards) {
      CMsgGCToClientBattlePassRollupTI7_PlayerCard.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.fantasyChallenge !== undefined) {
      CMsgGCToClientBattlePassRollupTI7_FantasyChallenge.encode(message.fantasyChallenge, writer.uint32(74).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI7 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI7();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.battlePassLevel = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.questlines.push(CMsgGCToClientBattlePassRollupTI7_Questlines.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.wagering = CMsgGCToClientBattlePassRollupTI7_Wagering.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.achievements = CMsgGCToClientBattlePassRollupTI7_Achievements.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.battleCup = CMsgGCToClientBattlePassRollupTI7_BattleCup.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.predictions = CMsgGCToClientBattlePassRollupTI7_Predictions.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.bracket = CMsgGCToClientBattlePassRollupTI7_Bracket.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.playerCards.push(CMsgGCToClientBattlePassRollupTI7_PlayerCard.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.fantasyChallenge = CMsgGCToClientBattlePassRollupTI7_FantasyChallenge.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI7_Questlines(): CMsgGCToClientBattlePassRollupTI7_Questlines {
  return { name: "", onestar: 0, twostar: 0, threestar: 0, total: 0 };
}

export const CMsgGCToClientBattlePassRollupTI7_Questlines = {
  encode(message: CMsgGCToClientBattlePassRollupTI7_Questlines, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.onestar !== 0) {
      writer.uint32(16).uint32(message.onestar);
    }
    if (message.twostar !== 0) {
      writer.uint32(24).uint32(message.twostar);
    }
    if (message.threestar !== 0) {
      writer.uint32(32).uint32(message.threestar);
    }
    if (message.total !== 0) {
      writer.uint32(40).uint32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI7_Questlines {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI7_Questlines();
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

          message.onestar = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.twostar = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.threestar = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.total = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI7_Wagering(): CMsgGCToClientBattlePassRollupTI7_Wagering {
  return { totalWagered: 0, totalWon: 0, averageWon: 0, successRate: 0, totalTips: 0 };
}

export const CMsgGCToClientBattlePassRollupTI7_Wagering = {
  encode(message: CMsgGCToClientBattlePassRollupTI7_Wagering, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalWagered !== 0) {
      writer.uint32(8).uint32(message.totalWagered);
    }
    if (message.totalWon !== 0) {
      writer.uint32(16).uint32(message.totalWon);
    }
    if (message.averageWon !== 0) {
      writer.uint32(24).uint32(message.averageWon);
    }
    if (message.successRate !== 0) {
      writer.uint32(32).uint32(message.successRate);
    }
    if (message.totalTips !== 0) {
      writer.uint32(40).uint32(message.totalTips);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI7_Wagering {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI7_Wagering();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.totalWagered = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.totalWon = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.averageWon = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.successRate = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.totalTips = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI7_Achievements(): CMsgGCToClientBattlePassRollupTI7_Achievements {
  return { completed: 0, total: 0, points: 0 };
}

export const CMsgGCToClientBattlePassRollupTI7_Achievements = {
  encode(
    message: CMsgGCToClientBattlePassRollupTI7_Achievements,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.completed !== 0) {
      writer.uint32(8).uint32(message.completed);
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    if (message.points !== 0) {
      writer.uint32(24).uint32(message.points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI7_Achievements {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI7_Achievements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.completed = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.total = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.points = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI7_BattleCup(): CMsgGCToClientBattlePassRollupTI7_BattleCup {
  return { wins: 0, score: 0 };
}

export const CMsgGCToClientBattlePassRollupTI7_BattleCup = {
  encode(message: CMsgGCToClientBattlePassRollupTI7_BattleCup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wins !== 0) {
      writer.uint32(8).uint32(message.wins);
    }
    if (message.score !== 0) {
      writer.uint32(16).uint32(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI7_BattleCup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI7_BattleCup();
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

          message.score = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI7_Predictions(): CMsgGCToClientBattlePassRollupTI7_Predictions {
  return { correct: 0, total: 0, points: 0 };
}

export const CMsgGCToClientBattlePassRollupTI7_Predictions = {
  encode(message: CMsgGCToClientBattlePassRollupTI7_Predictions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.correct !== 0) {
      writer.uint32(8).uint32(message.correct);
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    if (message.points !== 0) {
      writer.uint32(24).uint32(message.points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI7_Predictions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI7_Predictions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.correct = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.total = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.points = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI7_Bracket(): CMsgGCToClientBattlePassRollupTI7_Bracket {
  return { correct: 0, points: 0 };
}

export const CMsgGCToClientBattlePassRollupTI7_Bracket = {
  encode(message: CMsgGCToClientBattlePassRollupTI7_Bracket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.correct !== 0) {
      writer.uint32(8).uint32(message.correct);
    }
    if (message.points !== 0) {
      writer.uint32(16).uint32(message.points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI7_Bracket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI7_Bracket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.correct = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.points = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI7_PlayerCard(): CMsgGCToClientBattlePassRollupTI7_PlayerCard {
  return { accountId: 0, quality: 0 };
}

export const CMsgGCToClientBattlePassRollupTI7_PlayerCard = {
  encode(message: CMsgGCToClientBattlePassRollupTI7_PlayerCard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.quality !== 0) {
      writer.uint32(16).uint32(message.quality);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI7_PlayerCard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI7_PlayerCard();
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

          message.quality = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI7_FantasyChallenge(): CMsgGCToClientBattlePassRollupTI7_FantasyChallenge {
  return { totalScore: 0, percentile: 0 };
}

export const CMsgGCToClientBattlePassRollupTI7_FantasyChallenge = {
  encode(
    message: CMsgGCToClientBattlePassRollupTI7_FantasyChallenge,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.totalScore !== 0) {
      writer.uint32(13).float(message.totalScore);
    }
    if (message.percentile !== 0) {
      writer.uint32(21).float(message.percentile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI7_FantasyChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI7_FantasyChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.totalScore = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.percentile = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI8(): CMsgGCToClientBattlePassRollupTI8 {
  return {
    battlePassLevel: 0,
    cavernCrawl: undefined,
    wagering: undefined,
    achievements: undefined,
    predictions: undefined,
    bracket: undefined,
    playerCards: [],
    fantasyChallenge: undefined,
  };
}

export const CMsgGCToClientBattlePassRollupTI8 = {
  encode(message: CMsgGCToClientBattlePassRollupTI8, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.battlePassLevel !== 0) {
      writer.uint32(8).uint32(message.battlePassLevel);
    }
    if (message.cavernCrawl !== undefined) {
      CMsgGCToClientBattlePassRollupTI8_CavernCrawl.encode(message.cavernCrawl, writer.uint32(18).fork()).ldelim();
    }
    if (message.wagering !== undefined) {
      CMsgGCToClientBattlePassRollupTI8_Wagering.encode(message.wagering, writer.uint32(26).fork()).ldelim();
    }
    if (message.achievements !== undefined) {
      CMsgGCToClientBattlePassRollupTI8_Achievements.encode(message.achievements, writer.uint32(34).fork()).ldelim();
    }
    if (message.predictions !== undefined) {
      CMsgGCToClientBattlePassRollupTI8_Predictions.encode(message.predictions, writer.uint32(50).fork()).ldelim();
    }
    if (message.bracket !== undefined) {
      CMsgGCToClientBattlePassRollupTI8_Bracket.encode(message.bracket, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.playerCards) {
      CMsgGCToClientBattlePassRollupTI8_PlayerCard.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.fantasyChallenge !== undefined) {
      CMsgGCToClientBattlePassRollupTI8_FantasyChallenge.encode(message.fantasyChallenge, writer.uint32(74).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI8 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI8();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.battlePassLevel = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.cavernCrawl = CMsgGCToClientBattlePassRollupTI8_CavernCrawl.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.wagering = CMsgGCToClientBattlePassRollupTI8_Wagering.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.achievements = CMsgGCToClientBattlePassRollupTI8_Achievements.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.predictions = CMsgGCToClientBattlePassRollupTI8_Predictions.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.bracket = CMsgGCToClientBattlePassRollupTI8_Bracket.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.playerCards.push(CMsgGCToClientBattlePassRollupTI8_PlayerCard.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.fantasyChallenge = CMsgGCToClientBattlePassRollupTI8_FantasyChallenge.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI8_CavernCrawl(): CMsgGCToClientBattlePassRollupTI8_CavernCrawl {
  return { roomsCleared: 0, carryCompleted: false, supportCompleted: false, utilityCompleted: false };
}

export const CMsgGCToClientBattlePassRollupTI8_CavernCrawl = {
  encode(message: CMsgGCToClientBattlePassRollupTI8_CavernCrawl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roomsCleared !== 0) {
      writer.uint32(8).uint32(message.roomsCleared);
    }
    if (message.carryCompleted === true) {
      writer.uint32(16).bool(message.carryCompleted);
    }
    if (message.supportCompleted === true) {
      writer.uint32(24).bool(message.supportCompleted);
    }
    if (message.utilityCompleted === true) {
      writer.uint32(32).bool(message.utilityCompleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI8_CavernCrawl {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI8_CavernCrawl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.roomsCleared = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.carryCompleted = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.supportCompleted = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.utilityCompleted = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI8_Wagering(): CMsgGCToClientBattlePassRollupTI8_Wagering {
  return { totalWagered: 0, totalWon: 0, averageWon: 0, successRate: 0, totalTips: 0 };
}

export const CMsgGCToClientBattlePassRollupTI8_Wagering = {
  encode(message: CMsgGCToClientBattlePassRollupTI8_Wagering, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalWagered !== 0) {
      writer.uint32(8).uint32(message.totalWagered);
    }
    if (message.totalWon !== 0) {
      writer.uint32(16).uint32(message.totalWon);
    }
    if (message.averageWon !== 0) {
      writer.uint32(24).uint32(message.averageWon);
    }
    if (message.successRate !== 0) {
      writer.uint32(32).uint32(message.successRate);
    }
    if (message.totalTips !== 0) {
      writer.uint32(40).uint32(message.totalTips);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI8_Wagering {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI8_Wagering();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.totalWagered = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.totalWon = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.averageWon = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.successRate = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.totalTips = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI8_Achievements(): CMsgGCToClientBattlePassRollupTI8_Achievements {
  return { completed: 0, total: 0, points: 0 };
}

export const CMsgGCToClientBattlePassRollupTI8_Achievements = {
  encode(
    message: CMsgGCToClientBattlePassRollupTI8_Achievements,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.completed !== 0) {
      writer.uint32(8).uint32(message.completed);
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    if (message.points !== 0) {
      writer.uint32(24).uint32(message.points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI8_Achievements {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI8_Achievements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.completed = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.total = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.points = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI8_Predictions(): CMsgGCToClientBattlePassRollupTI8_Predictions {
  return { correct: 0, total: 0, points: 0 };
}

export const CMsgGCToClientBattlePassRollupTI8_Predictions = {
  encode(message: CMsgGCToClientBattlePassRollupTI8_Predictions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.correct !== 0) {
      writer.uint32(8).uint32(message.correct);
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    if (message.points !== 0) {
      writer.uint32(24).uint32(message.points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI8_Predictions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI8_Predictions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.correct = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.total = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.points = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI8_Bracket(): CMsgGCToClientBattlePassRollupTI8_Bracket {
  return { correct: 0, points: 0 };
}

export const CMsgGCToClientBattlePassRollupTI8_Bracket = {
  encode(message: CMsgGCToClientBattlePassRollupTI8_Bracket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.correct !== 0) {
      writer.uint32(8).uint32(message.correct);
    }
    if (message.points !== 0) {
      writer.uint32(16).uint32(message.points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI8_Bracket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI8_Bracket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.correct = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.points = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI8_PlayerCard(): CMsgGCToClientBattlePassRollupTI8_PlayerCard {
  return { accountId: 0, quality: 0 };
}

export const CMsgGCToClientBattlePassRollupTI8_PlayerCard = {
  encode(message: CMsgGCToClientBattlePassRollupTI8_PlayerCard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.quality !== 0) {
      writer.uint32(16).uint32(message.quality);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI8_PlayerCard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI8_PlayerCard();
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

          message.quality = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI8_FantasyChallenge(): CMsgGCToClientBattlePassRollupTI8_FantasyChallenge {
  return { totalScore: 0, percentile: 0 };
}

export const CMsgGCToClientBattlePassRollupTI8_FantasyChallenge = {
  encode(
    message: CMsgGCToClientBattlePassRollupTI8_FantasyChallenge,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.totalScore !== 0) {
      writer.uint32(13).float(message.totalScore);
    }
    if (message.percentile !== 0) {
      writer.uint32(21).float(message.percentile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI8_FantasyChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI8_FantasyChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.totalScore = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.percentile = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI9(): CMsgGCToClientBattlePassRollupTI9 {
  return { battlePassLevel: 0 };
}

export const CMsgGCToClientBattlePassRollupTI9 = {
  encode(message: CMsgGCToClientBattlePassRollupTI9, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.battlePassLevel !== 0) {
      writer.uint32(8).uint32(message.battlePassLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI9 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI9();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.battlePassLevel = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupTI10(): CMsgGCToClientBattlePassRollupTI10 {
  return { battlePassLevel: 0 };
}

export const CMsgGCToClientBattlePassRollupTI10 = {
  encode(message: CMsgGCToClientBattlePassRollupTI10, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.battlePassLevel !== 0) {
      writer.uint32(8).uint32(message.battlePassLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupTI10 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupTI10();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.battlePassLevel = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupRequest(): CMsgGCToClientBattlePassRollupRequest {
  return { eventId: 0, accountId: 0 };
}

export const CMsgGCToClientBattlePassRollupRequest = {
  encode(message: CMsgGCToClientBattlePassRollupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupRequest();
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
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupResponse(): CMsgGCToClientBattlePassRollupResponse {
  return {
    eventTi6: undefined,
    eventFall2016: undefined,
    eventWinter2017: undefined,
    eventTi7: undefined,
    eventTi8: undefined,
    eventTi9: undefined,
    eventTi10: undefined,
  };
}

export const CMsgGCToClientBattlePassRollupResponse = {
  encode(message: CMsgGCToClientBattlePassRollupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventTi6 !== undefined) {
      CMsgGCToClientBattlePassRollupInternational2016.encode(message.eventTi6, writer.uint32(10).fork()).ldelim();
    }
    if (message.eventFall2016 !== undefined) {
      CMsgGCToClientBattlePassRollupFall2016.encode(message.eventFall2016, writer.uint32(18).fork()).ldelim();
    }
    if (message.eventWinter2017 !== undefined) {
      CMsgGCToClientBattlePassRollupWinter2017.encode(message.eventWinter2017, writer.uint32(26).fork()).ldelim();
    }
    if (message.eventTi7 !== undefined) {
      CMsgGCToClientBattlePassRollupTI7.encode(message.eventTi7, writer.uint32(34).fork()).ldelim();
    }
    if (message.eventTi8 !== undefined) {
      CMsgGCToClientBattlePassRollupTI8.encode(message.eventTi8, writer.uint32(42).fork()).ldelim();
    }
    if (message.eventTi9 !== undefined) {
      CMsgGCToClientBattlePassRollupTI9.encode(message.eventTi9, writer.uint32(50).fork()).ldelim();
    }
    if (message.eventTi10 !== undefined) {
      CMsgGCToClientBattlePassRollupTI10.encode(message.eventTi10, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.eventTi6 = CMsgGCToClientBattlePassRollupInternational2016.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.eventFall2016 = CMsgGCToClientBattlePassRollupFall2016.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.eventWinter2017 = CMsgGCToClientBattlePassRollupWinter2017.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.eventTi7 = CMsgGCToClientBattlePassRollupTI7.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.eventTi8 = CMsgGCToClientBattlePassRollupTI8.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.eventTi9 = CMsgGCToClientBattlePassRollupTI9.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.eventTi10 = CMsgGCToClientBattlePassRollupTI10.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupListRequest(): CMsgGCToClientBattlePassRollupListRequest {
  return { accountId: 0 };
}

export const CMsgGCToClientBattlePassRollupListRequest = {
  encode(message: CMsgGCToClientBattlePassRollupListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupListRequest();
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
};

function createBaseCMsgGCToClientBattlePassRollupListResponse(): CMsgGCToClientBattlePassRollupListResponse {
  return { eventInfo: [] };
}

export const CMsgGCToClientBattlePassRollupListResponse = {
  encode(message: CMsgGCToClientBattlePassRollupListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.eventInfo) {
      CMsgGCToClientBattlePassRollupListResponse_EventInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.eventInfo.push(CMsgGCToClientBattlePassRollupListResponse_EventInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientBattlePassRollupListResponse_EventInfo(): CMsgGCToClientBattlePassRollupListResponse_EventInfo {
  return { eventId: 0, level: 0 };
}

export const CMsgGCToClientBattlePassRollupListResponse_EventInfo = {
  encode(
    message: CMsgGCToClientBattlePassRollupListResponse_EventInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.level !== 0) {
      writer.uint32(16).uint32(message.level);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientBattlePassRollupListResponse_EventInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientBattlePassRollupListResponse_EventInfo();
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

function createBaseCMsgClientToGCTransferSeasonalMMRRequest(): CMsgClientToGCTransferSeasonalMMRRequest {
  return { isParty: false };
}

export const CMsgClientToGCTransferSeasonalMMRRequest = {
  encode(message: CMsgClientToGCTransferSeasonalMMRRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isParty === true) {
      writer.uint32(8).bool(message.isParty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCTransferSeasonalMMRRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCTransferSeasonalMMRRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isParty = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCTransferSeasonalMMRResponse(): CMsgClientToGCTransferSeasonalMMRResponse {
  return { success: false };
}

export const CMsgClientToGCTransferSeasonalMMRResponse = {
  encode(message: CMsgClientToGCTransferSeasonalMMRResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCTransferSeasonalMMRResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCTransferSeasonalMMRResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
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

function createBaseCMsgGCToClientPlaytestStatus(): CMsgGCToClientPlaytestStatus {
  return { active: false };
}

export const CMsgGCToClientPlaytestStatus = {
  encode(message: CMsgGCToClientPlaytestStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientPlaytestStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientPlaytestStatus();
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
};

function createBaseCMsgClientToGCJoinPlaytest(): CMsgClientToGCJoinPlaytest {
  return { clientVersion: 0 };
}

export const CMsgClientToGCJoinPlaytest = {
  encode(message: CMsgClientToGCJoinPlaytest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientVersion !== 0) {
      writer.uint32(8).uint32(message.clientVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCJoinPlaytest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCJoinPlaytest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.clientVersion = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCJoinPlaytestResponse(): CMsgClientToGCJoinPlaytestResponse {
  return { error: "" };
}

export const CMsgClientToGCJoinPlaytestResponse = {
  encode(message: CMsgClientToGCJoinPlaytestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCJoinPlaytestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCJoinPlaytestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTASetFavoriteTeam(): CMsgDOTASetFavoriteTeam {
  return { teamId: 0, eventId: 0 };
}

export const CMsgDOTASetFavoriteTeam = {
  encode(message: CMsgDOTASetFavoriteTeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).uint32(message.teamId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).uint32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASetFavoriteTeam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASetFavoriteTeam();
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

          message.eventId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTATriviaCurrentQuestions(): CMsgDOTATriviaCurrentQuestions {
  return { questions: [], triviaEnabled: false };
}

export const CMsgDOTATriviaCurrentQuestions = {
  encode(message: CMsgDOTATriviaCurrentQuestions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.questions) {
      CMsgDOTATriviaQuestion.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.triviaEnabled === true) {
      writer.uint32(16).bool(message.triviaEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTATriviaCurrentQuestions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTATriviaCurrentQuestions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.questions.push(CMsgDOTATriviaQuestion.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.triviaEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTASubmitTriviaQuestionAnswer(): CMsgDOTASubmitTriviaQuestionAnswer {
  return { questionId: 0, answerIndex: 0 };
}

export const CMsgDOTASubmitTriviaQuestionAnswer = {
  encode(message: CMsgDOTASubmitTriviaQuestionAnswer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.questionId !== 0) {
      writer.uint32(8).uint32(message.questionId);
    }
    if (message.answerIndex !== 0) {
      writer.uint32(16).uint32(message.answerIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASubmitTriviaQuestionAnswer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASubmitTriviaQuestionAnswer();
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

          message.answerIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTASubmitTriviaQuestionAnswerResponse(): CMsgDOTASubmitTriviaQuestionAnswerResponse {
  return { result: 0 };
}

export const CMsgDOTASubmitTriviaQuestionAnswerResponse = {
  encode(message: CMsgDOTASubmitTriviaQuestionAnswerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASubmitTriviaQuestionAnswerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASubmitTriviaQuestionAnswerResponse();
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

function createBaseCMsgDOTAStartTriviaSession(): CMsgDOTAStartTriviaSession {
  return {};
}

export const CMsgDOTAStartTriviaSession = {
  encode(_: CMsgDOTAStartTriviaSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAStartTriviaSession {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAStartTriviaSession();
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

function createBaseCMsgDOTAStartTriviaSessionResponse(): CMsgDOTAStartTriviaSessionResponse {
  return { triviaEnabled: false, currentTimestamp: 0 };
}

export const CMsgDOTAStartTriviaSessionResponse = {
  encode(message: CMsgDOTAStartTriviaSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.triviaEnabled === true) {
      writer.uint32(8).bool(message.triviaEnabled);
    }
    if (message.currentTimestamp !== 0) {
      writer.uint32(16).uint32(message.currentTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAStartTriviaSessionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAStartTriviaSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.triviaEnabled = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.currentTimestamp = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAAnchorPhoneNumberRequest(): CMsgDOTAAnchorPhoneNumberRequest {
  return {};
}

export const CMsgDOTAAnchorPhoneNumberRequest = {
  encode(_: CMsgDOTAAnchorPhoneNumberRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAAnchorPhoneNumberRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAAnchorPhoneNumberRequest();
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

function createBaseCMsgDOTAAnchorPhoneNumberResponse(): CMsgDOTAAnchorPhoneNumberResponse {
  return { result: 0 };
}

export const CMsgDOTAAnchorPhoneNumberResponse = {
  encode(message: CMsgDOTAAnchorPhoneNumberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAAnchorPhoneNumberResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAAnchorPhoneNumberResponse();
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

function createBaseCMsgDOTAUnanchorPhoneNumberRequest(): CMsgDOTAUnanchorPhoneNumberRequest {
  return {};
}

export const CMsgDOTAUnanchorPhoneNumberRequest = {
  encode(_: CMsgDOTAUnanchorPhoneNumberRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAUnanchorPhoneNumberRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAUnanchorPhoneNumberRequest();
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

function createBaseCMsgDOTAUnanchorPhoneNumberResponse(): CMsgDOTAUnanchorPhoneNumberResponse {
  return { result: 0 };
}

export const CMsgDOTAUnanchorPhoneNumberResponse = {
  encode(message: CMsgDOTAUnanchorPhoneNumberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAUnanchorPhoneNumberResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAUnanchorPhoneNumberResponse();
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

function createBaseCMsgGCToClientCommendNotification(): CMsgGCToClientCommendNotification {
  return { commenderAccountId: 0, commenderName: "", flags: 0 };
}

export const CMsgGCToClientCommendNotification = {
  encode(message: CMsgGCToClientCommendNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commenderAccountId !== 0) {
      writer.uint32(8).uint32(message.commenderAccountId);
    }
    if (message.commenderName !== "") {
      writer.uint32(18).string(message.commenderName);
    }
    if (message.flags !== 0) {
      writer.uint32(24).uint32(message.flags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientCommendNotification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientCommendNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.commenderAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.commenderName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
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

function createBaseCMsgDOTAClientToGCQuickStatsRequest(): CMsgDOTAClientToGCQuickStatsRequest {
  return { playerAccountId: 0, heroId: 0, itemId: 0, leagueId: 0 };
}

export const CMsgDOTAClientToGCQuickStatsRequest = {
  encode(message: CMsgDOTAClientToGCQuickStatsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerAccountId !== 0) {
      writer.uint32(8).uint32(message.playerAccountId);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).uint32(message.heroId);
    }
    if (message.itemId !== 0) {
      writer.uint32(24).int32(message.itemId);
    }
    if (message.leagueId !== 0) {
      writer.uint32(32).uint32(message.leagueId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAClientToGCQuickStatsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAClientToGCQuickStatsRequest();
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

          message.heroId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemId = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
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
};

function createBaseCMsgDOTAClientToGCQuickStatsResponse(): CMsgDOTAClientToGCQuickStatsResponse {
  return {
    originalRequest: undefined,
    heroStats: undefined,
    itemStats: undefined,
    itemHeroStats: undefined,
    itemPlayerStats: undefined,
    heroPlayerStats: undefined,
    fullSetStats: undefined,
  };
}

export const CMsgDOTAClientToGCQuickStatsResponse = {
  encode(message: CMsgDOTAClientToGCQuickStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originalRequest !== undefined) {
      CMsgDOTAClientToGCQuickStatsRequest.encode(message.originalRequest, writer.uint32(10).fork()).ldelim();
    }
    if (message.heroStats !== undefined) {
      CMsgDOTAClientToGCQuickStatsResponse_SimpleStats.encode(message.heroStats, writer.uint32(18).fork()).ldelim();
    }
    if (message.itemStats !== undefined) {
      CMsgDOTAClientToGCQuickStatsResponse_SimpleStats.encode(message.itemStats, writer.uint32(26).fork()).ldelim();
    }
    if (message.itemHeroStats !== undefined) {
      CMsgDOTAClientToGCQuickStatsResponse_SimpleStats.encode(message.itemHeroStats, writer.uint32(34).fork()).ldelim();
    }
    if (message.itemPlayerStats !== undefined) {
      CMsgDOTAClientToGCQuickStatsResponse_SimpleStats.encode(message.itemPlayerStats, writer.uint32(42).fork())
        .ldelim();
    }
    if (message.heroPlayerStats !== undefined) {
      CMsgDOTAClientToGCQuickStatsResponse_SimpleStats.encode(message.heroPlayerStats, writer.uint32(50).fork())
        .ldelim();
    }
    if (message.fullSetStats !== undefined) {
      CMsgDOTAClientToGCQuickStatsResponse_SimpleStats.encode(message.fullSetStats, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAClientToGCQuickStatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAClientToGCQuickStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.originalRequest = CMsgDOTAClientToGCQuickStatsRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.heroStats = CMsgDOTAClientToGCQuickStatsResponse_SimpleStats.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.itemStats = CMsgDOTAClientToGCQuickStatsResponse_SimpleStats.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.itemHeroStats = CMsgDOTAClientToGCQuickStatsResponse_SimpleStats.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.itemPlayerStats = CMsgDOTAClientToGCQuickStatsResponse_SimpleStats.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.heroPlayerStats = CMsgDOTAClientToGCQuickStatsResponse_SimpleStats.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.fullSetStats = CMsgDOTAClientToGCQuickStatsResponse_SimpleStats.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAClientToGCQuickStatsResponse_SimpleStats(): CMsgDOTAClientToGCQuickStatsResponse_SimpleStats {
  return { winPercent: 0, pickPercent: 0, winCount: 0, pickCount: 0 };
}

export const CMsgDOTAClientToGCQuickStatsResponse_SimpleStats = {
  encode(
    message: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.winPercent !== 0) {
      writer.uint32(13).float(message.winPercent);
    }
    if (message.pickPercent !== 0) {
      writer.uint32(21).float(message.pickPercent);
    }
    if (message.winCount !== 0) {
      writer.uint32(24).uint32(message.winCount);
    }
    if (message.pickCount !== 0) {
      writer.uint32(32).uint32(message.pickCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAClientToGCQuickStatsResponse_SimpleStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAClientToGCQuickStatsResponse_SimpleStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.winPercent = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.pickPercent = reader.float();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.winCount = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
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
};

function createBaseCMsgDOTASelectionPriorityChoiceRequest(): CMsgDOTASelectionPriorityChoiceRequest {
  return { choice: 0 };
}

export const CMsgDOTASelectionPriorityChoiceRequest = {
  encode(message: CMsgDOTASelectionPriorityChoiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.choice !== 0) {
      writer.uint32(8).int32(message.choice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASelectionPriorityChoiceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASelectionPriorityChoiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.choice = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTASelectionPriorityChoiceResponse(): CMsgDOTASelectionPriorityChoiceResponse {
  return { result: 0 };
}

export const CMsgDOTASelectionPriorityChoiceResponse = {
  encode(message: CMsgDOTASelectionPriorityChoiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASelectionPriorityChoiceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASelectionPriorityChoiceResponse();
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

function createBaseCMsgDOTAGameAutographReward(): CMsgDOTAGameAutographReward {
  return { badgeId: "" };
}

export const CMsgDOTAGameAutographReward = {
  encode(message: CMsgDOTAGameAutographReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.badgeId !== "") {
      writer.uint32(10).string(message.badgeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAGameAutographReward {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAGameAutographReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.badgeId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAGameAutographRewardResponse(): CMsgDOTAGameAutographRewardResponse {
  return { result: 0 };
}

export const CMsgDOTAGameAutographRewardResponse = {
  encode(message: CMsgDOTAGameAutographRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAGameAutographRewardResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAGameAutographRewardResponse();
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

function createBaseCMsgDOTADestroyLobbyRequest(): CMsgDOTADestroyLobbyRequest {
  return {};
}

export const CMsgDOTADestroyLobbyRequest = {
  encode(_: CMsgDOTADestroyLobbyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADestroyLobbyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADestroyLobbyRequest();
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

function createBaseCMsgDOTADestroyLobbyResponse(): CMsgDOTADestroyLobbyResponse {
  return { result: 0 };
}

export const CMsgDOTADestroyLobbyResponse = {
  encode(message: CMsgDOTADestroyLobbyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADestroyLobbyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADestroyLobbyResponse();
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

function createBaseCMsgDOTAGetRecentPlayTimeFriendsRequest(): CMsgDOTAGetRecentPlayTimeFriendsRequest {
  return {};
}

export const CMsgDOTAGetRecentPlayTimeFriendsRequest = {
  encode(_: CMsgDOTAGetRecentPlayTimeFriendsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAGetRecentPlayTimeFriendsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAGetRecentPlayTimeFriendsRequest();
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

function createBaseCMsgDOTAGetRecentPlayTimeFriendsResponse(): CMsgDOTAGetRecentPlayTimeFriendsResponse {
  return { accountIds: [] };
}

export const CMsgDOTAGetRecentPlayTimeFriendsResponse = {
  encode(message: CMsgDOTAGetRecentPlayTimeFriendsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.accountIds) {
      writer.fixed32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAGetRecentPlayTimeFriendsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAGetRecentPlayTimeFriendsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 13) {
            message.accountIds.push(reader.fixed32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountIds.push(reader.fixed32());
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

function createBaseCMsgPurchaseItemWithEventPoints(): CMsgPurchaseItemWithEventPoints {
  return { itemDef: 0, quantity: 0, eventId: 0, usePremiumPoints: false };
}

export const CMsgPurchaseItemWithEventPoints = {
  encode(message: CMsgPurchaseItemWithEventPoints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDef !== 0) {
      writer.uint32(8).uint32(message.itemDef);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).uint32(message.quantity);
    }
    if (message.eventId !== 0) {
      writer.uint32(24).int32(message.eventId);
    }
    if (message.usePremiumPoints === true) {
      writer.uint32(32).bool(message.usePremiumPoints);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPurchaseItemWithEventPoints {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPurchaseItemWithEventPoints();
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

          message.quantity = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.eventId = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.usePremiumPoints = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgPurchaseItemWithEventPointsResponse(): CMsgPurchaseItemWithEventPointsResponse {
  return { result: 0 };
}

export const CMsgPurchaseItemWithEventPointsResponse = {
  encode(message: CMsgPurchaseItemWithEventPointsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPurchaseItemWithEventPointsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPurchaseItemWithEventPointsResponse();
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

function createBaseCMsgPurchaseHeroRandomRelic(): CMsgPurchaseHeroRandomRelic {
  return { heroId: 0, relicRarity: 0 };
}

export const CMsgPurchaseHeroRandomRelic = {
  encode(message: CMsgPurchaseHeroRandomRelic, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.relicRarity !== 0) {
      writer.uint32(16).int32(message.relicRarity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPurchaseHeroRandomRelic {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPurchaseHeroRandomRelic();
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

          message.relicRarity = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgPurchaseHeroRandomRelicResponse(): CMsgPurchaseHeroRandomRelicResponse {
  return { result: 0, killEaterType: 0 };
}

export const CMsgPurchaseHeroRandomRelicResponse = {
  encode(message: CMsgPurchaseHeroRandomRelicResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.killEaterType !== 0) {
      writer.uint32(16).uint32(message.killEaterType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPurchaseHeroRandomRelicResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPurchaseHeroRandomRelicResponse();
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
          if (tag != 16) {
            break;
          }

          message.killEaterType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestPlusWeeklyChallengeResult(): CMsgClientToGCRequestPlusWeeklyChallengeResult {
  return { eventId: 0, week: 0 };
}

export const CMsgClientToGCRequestPlusWeeklyChallengeResult = {
  encode(
    message: CMsgClientToGCRequestPlusWeeklyChallengeResult,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.week !== 0) {
      writer.uint32(16).uint32(message.week);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestPlusWeeklyChallengeResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestPlusWeeklyChallengeResult();
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

          message.week = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestPlusWeeklyChallengeResultResponse(): CMsgClientToGCRequestPlusWeeklyChallengeResultResponse {
  return {};
}

export const CMsgClientToGCRequestPlusWeeklyChallengeResultResponse = {
  encode(
    _: CMsgClientToGCRequestPlusWeeklyChallengeResultResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestPlusWeeklyChallengeResultResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestPlusWeeklyChallengeResultResponse();
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

function createBaseCMsgProfileRequest(): CMsgProfileRequest {
  return { accountId: 0 };
}

export const CMsgProfileRequest = {
  encode(message: CMsgProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgProfileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgProfileRequest();
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
};

function createBaseCMsgProfileResponse(): CMsgProfileResponse {
  return {
    backgroundItem: undefined,
    featuredHeroes: [],
    recentMatches: [],
    successfulHeroes: [],
    recentMatchDetails: undefined,
    result: 0,
    stickerbookPage: undefined,
  };
}

export const CMsgProfileResponse = {
  encode(message: CMsgProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backgroundItem !== undefined) {
      CSOEconItem.encode(message.backgroundItem, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.featuredHeroes) {
      CMsgProfileResponse_FeaturedHero.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.recentMatches) {
      CMsgProfileResponse_MatchInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.successfulHeroes) {
      CMsgSuccessfulHero.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.recentMatchDetails !== undefined) {
      CMsgRecentMatchInfo.encode(message.recentMatchDetails, writer.uint32(42).fork()).ldelim();
    }
    if (message.result !== 0) {
      writer.uint32(48).int32(message.result);
    }
    if (message.stickerbookPage !== undefined) {
      CMsgStickerbookPage.encode(message.stickerbookPage, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgProfileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.backgroundItem = CSOEconItem.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.featuredHeroes.push(CMsgProfileResponse_FeaturedHero.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.recentMatches.push(CMsgProfileResponse_MatchInfo.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.successfulHeroes.push(CMsgSuccessfulHero.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.recentMatchDetails = CMsgRecentMatchInfo.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.stickerbookPage = CMsgStickerbookPage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgProfileResponse_FeaturedHero(): CMsgProfileResponse_FeaturedHero {
  return { heroId: 0, equippedEconItems: [], manuallySet: false, plusHeroXp: 0, plusHeroRelicsItem: undefined };
}

export const CMsgProfileResponse_FeaturedHero = {
  encode(message: CMsgProfileResponse_FeaturedHero, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    for (const v of message.equippedEconItems) {
      CSOEconItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.manuallySet === true) {
      writer.uint32(24).bool(message.manuallySet);
    }
    if (message.plusHeroXp !== 0) {
      writer.uint32(32).uint32(message.plusHeroXp);
    }
    if (message.plusHeroRelicsItem !== undefined) {
      CSOEconItem.encode(message.plusHeroRelicsItem, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgProfileResponse_FeaturedHero {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgProfileResponse_FeaturedHero();
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

          message.equippedEconItems.push(CSOEconItem.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.manuallySet = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.plusHeroXp = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.plusHeroRelicsItem = CSOEconItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgProfileResponse_MatchInfo(): CMsgProfileResponse_MatchInfo {
  return { matchId: "0", matchTimestamp: 0, performanceRating: 0, heroId: 0, wonMatch: false };
}

export const CMsgProfileResponse_MatchInfo = {
  encode(message: CMsgProfileResponse_MatchInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.matchTimestamp !== 0) {
      writer.uint32(16).uint32(message.matchTimestamp);
    }
    if (message.performanceRating !== 0) {
      writer.uint32(24).sint32(message.performanceRating);
    }
    if (message.heroId !== 0) {
      writer.uint32(32).uint32(message.heroId);
    }
    if (message.wonMatch === true) {
      writer.uint32(40).bool(message.wonMatch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgProfileResponse_MatchInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgProfileResponse_MatchInfo();
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

          message.matchTimestamp = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.performanceRating = reader.sint32();
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

          message.wonMatch = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgProfileUpdate(): CMsgProfileUpdate {
  return { backgroundItemId: "0", featuredHeroIds: [] };
}

export const CMsgProfileUpdate = {
  encode(message: CMsgProfileUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backgroundItemId !== "0") {
      writer.uint32(8).uint64(message.backgroundItemId);
    }
    writer.uint32(18).fork();
    for (const v of message.featuredHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgProfileUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgProfileUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.backgroundItemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag == 16) {
            message.featuredHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.featuredHeroIds.push(reader.uint32());
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

function createBaseCMsgProfileUpdateResponse(): CMsgProfileUpdateResponse {
  return { result: 0 };
}

export const CMsgProfileUpdateResponse = {
  encode(message: CMsgProfileUpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgProfileUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgProfileUpdateResponse();
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

function createBaseCMsgTalentWinRates(): CMsgTalentWinRates {
  return { lastRun: 0, abilityId: 0, gameCount: 0, winCount: 0 };
}

export const CMsgTalentWinRates = {
  encode(message: CMsgTalentWinRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastRun !== 0) {
      writer.uint32(8).uint32(message.lastRun);
    }
    if (message.abilityId !== 0) {
      writer.uint32(16).int32(message.abilityId);
    }
    if (message.gameCount !== 0) {
      writer.uint32(24).uint32(message.gameCount);
    }
    if (message.winCount !== 0) {
      writer.uint32(32).uint32(message.winCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTalentWinRates {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTalentWinRates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.lastRun = reader.uint32();
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

          message.gameCount = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
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

function createBaseCMsgGlobalHeroAverages(): CMsgGlobalHeroAverages {
  return {
    lastRun: 0,
    avgGoldPerMin: 0,
    avgXpPerMin: 0,
    avgKills: 0,
    avgDeaths: 0,
    avgAssists: 0,
    avgLastHits: 0,
    avgDenies: 0,
    avgNetWorth: 0,
  };
}

export const CMsgGlobalHeroAverages = {
  encode(message: CMsgGlobalHeroAverages, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastRun !== 0) {
      writer.uint32(8).uint32(message.lastRun);
    }
    if (message.avgGoldPerMin !== 0) {
      writer.uint32(24).uint32(message.avgGoldPerMin);
    }
    if (message.avgXpPerMin !== 0) {
      writer.uint32(32).uint32(message.avgXpPerMin);
    }
    if (message.avgKills !== 0) {
      writer.uint32(40).uint32(message.avgKills);
    }
    if (message.avgDeaths !== 0) {
      writer.uint32(48).uint32(message.avgDeaths);
    }
    if (message.avgAssists !== 0) {
      writer.uint32(56).uint32(message.avgAssists);
    }
    if (message.avgLastHits !== 0) {
      writer.uint32(64).uint32(message.avgLastHits);
    }
    if (message.avgDenies !== 0) {
      writer.uint32(72).uint32(message.avgDenies);
    }
    if (message.avgNetWorth !== 0) {
      writer.uint32(80).uint32(message.avgNetWorth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGlobalHeroAverages {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGlobalHeroAverages();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.lastRun = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.avgGoldPerMin = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.avgXpPerMin = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.avgKills = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.avgDeaths = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.avgAssists = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.avgLastHits = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.avgDenies = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.avgNetWorth = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgHeroGlobalDataRequest(): CMsgHeroGlobalDataRequest {
  return { heroId: 0 };
}

export const CMsgHeroGlobalDataRequest = {
  encode(message: CMsgHeroGlobalDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHeroGlobalDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHeroGlobalDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
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

function createBaseCMsgHeroGlobalDataResponse(): CMsgHeroGlobalDataResponse {
  return { heroId: 0, heroDataPerChunk: [] };
}

export const CMsgHeroGlobalDataResponse = {
  encode(message: CMsgHeroGlobalDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    for (const v of message.heroDataPerChunk) {
      CMsgHeroGlobalDataResponse_HeroDataPerRankChunk.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHeroGlobalDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHeroGlobalDataResponse();
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

          message.heroDataPerChunk.push(
            CMsgHeroGlobalDataResponse_HeroDataPerRankChunk.decode(reader, reader.uint32()),
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

function createBaseCMsgHeroGlobalDataResponse_GraphData(): CMsgHeroGlobalDataResponse_GraphData {
  return { day: 0, winPercent: 0, pickPercent: 0, banPercent: 0 };
}

export const CMsgHeroGlobalDataResponse_GraphData = {
  encode(message: CMsgHeroGlobalDataResponse_GraphData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.day !== 0) {
      writer.uint32(8).uint32(message.day);
    }
    if (message.winPercent !== 0) {
      writer.uint32(21).float(message.winPercent);
    }
    if (message.pickPercent !== 0) {
      writer.uint32(29).float(message.pickPercent);
    }
    if (message.banPercent !== 0) {
      writer.uint32(37).float(message.banPercent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHeroGlobalDataResponse_GraphData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHeroGlobalDataResponse_GraphData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.day = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.winPercent = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.pickPercent = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.banPercent = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgHeroGlobalDataResponse_WeekData(): CMsgHeroGlobalDataResponse_WeekData {
  return { week: 0, winPercent: 0, pickPercent: 0, banPercent: 0 };
}

export const CMsgHeroGlobalDataResponse_WeekData = {
  encode(message: CMsgHeroGlobalDataResponse_WeekData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.week !== 0) {
      writer.uint32(8).uint32(message.week);
    }
    if (message.winPercent !== 0) {
      writer.uint32(21).float(message.winPercent);
    }
    if (message.pickPercent !== 0) {
      writer.uint32(29).float(message.pickPercent);
    }
    if (message.banPercent !== 0) {
      writer.uint32(37).float(message.banPercent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHeroGlobalDataResponse_WeekData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHeroGlobalDataResponse_WeekData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.week = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.winPercent = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.pickPercent = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.banPercent = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgHeroGlobalDataResponse_HeroDataPerRankChunk(): CMsgHeroGlobalDataResponse_HeroDataPerRankChunk {
  return { rankChunk: 0, talentWinRates: [], heroAverages: undefined, graphData: [], weekData: [] };
}

export const CMsgHeroGlobalDataResponse_HeroDataPerRankChunk = {
  encode(
    message: CMsgHeroGlobalDataResponse_HeroDataPerRankChunk,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.rankChunk !== 0) {
      writer.uint32(8).uint32(message.rankChunk);
    }
    for (const v of message.talentWinRates) {
      CMsgTalentWinRates.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.heroAverages !== undefined) {
      CMsgGlobalHeroAverages.encode(message.heroAverages, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.graphData) {
      CMsgHeroGlobalDataResponse_GraphData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.weekData) {
      CMsgHeroGlobalDataResponse_WeekData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHeroGlobalDataResponse_HeroDataPerRankChunk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHeroGlobalDataResponse_HeroDataPerRankChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.rankChunk = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.talentWinRates.push(CMsgTalentWinRates.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.heroAverages = CMsgGlobalHeroAverages.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.graphData.push(CMsgHeroGlobalDataResponse_GraphData.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.weekData.push(CMsgHeroGlobalDataResponse_WeekData.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgHeroGlobalDataAllHeroes(): CMsgHeroGlobalDataAllHeroes {
  return { heroes: [] };
}

export const CMsgHeroGlobalDataAllHeroes = {
  encode(message: CMsgHeroGlobalDataAllHeroes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.heroes) {
      CMsgHeroGlobalDataResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHeroGlobalDataAllHeroes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHeroGlobalDataAllHeroes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.heroes.push(CMsgHeroGlobalDataResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgHeroGlobalDataHeroesAlliesAndEnemies(): CMsgHeroGlobalDataHeroesAlliesAndEnemies {
  return { rankedHeroData: [] };
}

export const CMsgHeroGlobalDataHeroesAlliesAndEnemies = {
  encode(message: CMsgHeroGlobalDataHeroesAlliesAndEnemies, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rankedHeroData) {
      CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHeroGlobalDataHeroesAlliesAndEnemies {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHeroGlobalDataHeroesAlliesAndEnemies();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.rankedHeroData.push(
            CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData.decode(reader, reader.uint32()),
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

function createBaseCMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData(): CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData {
  return { heroId: 0, winRate: 0, firstOtherHeroId: 0, allyWinRate: [], enemyWinRate: [] };
}

export const CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData = {
  encode(
    message: CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.winRate !== 0) {
      writer.uint32(16).uint32(message.winRate);
    }
    if (message.firstOtherHeroId !== 0) {
      writer.uint32(24).uint32(message.firstOtherHeroId);
    }
    writer.uint32(42).fork();
    for (const v of message.allyWinRate) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.enemyWinRate) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData();
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

          message.winRate = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.firstOtherHeroId = reader.uint32();
          continue;
        case 5:
          if (tag == 40) {
            message.allyWinRate.push(reader.uint32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.allyWinRate.push(reader.uint32());
            }

            continue;
          }

          break;
        case 6:
          if (tag == 48) {
            message.enemyWinRate.push(reader.uint32());
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enemyWinRate.push(reader.uint32());
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

function createBaseCMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData(): CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData {
  return { rank: 0, heroData: [] };
}

export const CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData = {
  encode(
    message: CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.rank !== 0) {
      writer.uint32(8).uint32(message.rank);
    }
    for (const v of message.heroData) {
      CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.rank = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.heroData.push(CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgPrivateMetadataKeyRequest(): CMsgPrivateMetadataKeyRequest {
  return { matchId: "0" };
}

export const CMsgPrivateMetadataKeyRequest = {
  encode(message: CMsgPrivateMetadataKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPrivateMetadataKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPrivateMetadataKeyRequest();
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
};

function createBaseCMsgPrivateMetadataKeyResponse(): CMsgPrivateMetadataKeyResponse {
  return { privateKey: 0 };
}

export const CMsgPrivateMetadataKeyResponse = {
  encode(message: CMsgPrivateMetadataKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.privateKey !== 0) {
      writer.uint32(8).uint32(message.privateKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPrivateMetadataKeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPrivateMetadataKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.privateKey = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgActivatePlusFreeTrialResponse(): CMsgActivatePlusFreeTrialResponse {
  return { result: 0 };
}

export const CMsgActivatePlusFreeTrialResponse = {
  encode(message: CMsgActivatePlusFreeTrialResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgActivatePlusFreeTrialResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgActivatePlusFreeTrialResponse();
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

function createBaseCMsgGCToClientCavernCrawlMapPathCompleted(): CMsgGCToClientCavernCrawlMapPathCompleted {
  return { eventId: 0, heroIdCompleted: 0, completedPaths: [], mapVariant: 0 };
}

export const CMsgGCToClientCavernCrawlMapPathCompleted = {
  encode(message: CMsgGCToClientCavernCrawlMapPathCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.heroIdCompleted !== 0) {
      writer.uint32(16).uint32(message.heroIdCompleted);
    }
    for (const v of message.completedPaths) {
      CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.mapVariant !== 0) {
      writer.uint32(32).uint32(message.mapVariant);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientCavernCrawlMapPathCompleted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientCavernCrawlMapPathCompleted();
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

          message.heroIdCompleted = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.completedPaths.push(
            CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.mapVariant = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo(): CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo {
  return { pathIdCompleted: 0, receivedUltraRareReward: false, halfCompleted: false };
}

export const CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo = {
  encode(
    message: CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pathIdCompleted !== 0) {
      writer.uint32(8).uint32(message.pathIdCompleted);
    }
    if (message.receivedUltraRareReward === true) {
      writer.uint32(16).bool(message.receivedUltraRareReward);
    }
    if (message.halfCompleted === true) {
      writer.uint32(24).bool(message.halfCompleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo();
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

          message.receivedUltraRareReward = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.halfCompleted = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientCavernCrawlMapUpdated(): CMsgGCToClientCavernCrawlMapUpdated {
  return { eventId: 0 };
}

export const CMsgGCToClientCavernCrawlMapUpdated = {
  encode(message: CMsgGCToClientCavernCrawlMapUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientCavernCrawlMapUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientCavernCrawlMapUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCavernCrawlClaimRoom(): CMsgClientToGCCavernCrawlClaimRoom {
  return { eventId: 0, roomId: 0, mapVariant: 0 };
}

export const CMsgClientToGCCavernCrawlClaimRoom = {
  encode(message: CMsgClientToGCCavernCrawlClaimRoom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.roomId !== 0) {
      writer.uint32(16).uint32(message.roomId);
    }
    if (message.mapVariant !== 0) {
      writer.uint32(24).uint32(message.mapVariant);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCavernCrawlClaimRoom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCavernCrawlClaimRoom();
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

          message.roomId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.mapVariant = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCavernCrawlClaimRoomResponse(): CMsgClientToGCCavernCrawlClaimRoomResponse {
  return { result: 0 };
}

export const CMsgClientToGCCavernCrawlClaimRoomResponse = {
  encode(message: CMsgClientToGCCavernCrawlClaimRoomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCavernCrawlClaimRoomResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCavernCrawlClaimRoomResponse();
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

function createBaseCMsgClientToGCCavernCrawlUseItemOnRoom(): CMsgClientToGCCavernCrawlUseItemOnRoom {
  return { eventId: 0, roomId: 0, itemType: 0, mapVariant: 0 };
}

export const CMsgClientToGCCavernCrawlUseItemOnRoom = {
  encode(message: CMsgClientToGCCavernCrawlUseItemOnRoom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.roomId !== 0) {
      writer.uint32(16).uint32(message.roomId);
    }
    if (message.itemType !== 0) {
      writer.uint32(24).uint32(message.itemType);
    }
    if (message.mapVariant !== 0) {
      writer.uint32(32).uint32(message.mapVariant);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCavernCrawlUseItemOnRoom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCavernCrawlUseItemOnRoom();
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

          message.roomId = reader.uint32();
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

          message.mapVariant = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCavernCrawlUseItemOnRoomResponse(): CMsgClientToGCCavernCrawlUseItemOnRoomResponse {
  return { result: 0 };
}

export const CMsgClientToGCCavernCrawlUseItemOnRoomResponse = {
  encode(
    message: CMsgClientToGCCavernCrawlUseItemOnRoomResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCavernCrawlUseItemOnRoomResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCavernCrawlUseItemOnRoomResponse();
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

function createBaseCMsgClientToGCCavernCrawlUseItemOnPath(): CMsgClientToGCCavernCrawlUseItemOnPath {
  return { eventId: 0, pathId: 0, itemType: 0, mapVariant: 0 };
}

export const CMsgClientToGCCavernCrawlUseItemOnPath = {
  encode(message: CMsgClientToGCCavernCrawlUseItemOnPath, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.pathId !== 0) {
      writer.uint32(16).uint32(message.pathId);
    }
    if (message.itemType !== 0) {
      writer.uint32(24).uint32(message.itemType);
    }
    if (message.mapVariant !== 0) {
      writer.uint32(32).uint32(message.mapVariant);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCavernCrawlUseItemOnPath {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCavernCrawlUseItemOnPath();
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

          message.pathId = reader.uint32();
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

          message.mapVariant = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCavernCrawlUseItemOnPathResponse(): CMsgClientToGCCavernCrawlUseItemOnPathResponse {
  return { result: 0 };
}

export const CMsgClientToGCCavernCrawlUseItemOnPathResponse = {
  encode(
    message: CMsgClientToGCCavernCrawlUseItemOnPathResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCavernCrawlUseItemOnPathResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCavernCrawlUseItemOnPathResponse();
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

function createBaseCMsgClientToGCCavernCrawlRequestMapState(): CMsgClientToGCCavernCrawlRequestMapState {
  return { eventId: 0 };
}

export const CMsgClientToGCCavernCrawlRequestMapState = {
  encode(message: CMsgClientToGCCavernCrawlRequestMapState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCavernCrawlRequestMapState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCavernCrawlRequestMapState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCavernCrawlRequestMapStateResponse(): CMsgClientToGCCavernCrawlRequestMapStateResponse {
  return { result: 0, availableMapVariantsMask: 0, inventoryItem: [], mapVariants: [] };
}

export const CMsgClientToGCCavernCrawlRequestMapStateResponse = {
  encode(
    message: CMsgClientToGCCavernCrawlRequestMapStateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.availableMapVariantsMask !== 0) {
      writer.uint32(16).uint32(message.availableMapVariantsMask);
    }
    for (const v of message.inventoryItem) {
      CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.mapVariants) {
      CMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCavernCrawlRequestMapStateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCavernCrawlRequestMapStateResponse();
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
          if (tag != 16) {
            break;
          }

          message.availableMapVariantsMask = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.inventoryItem.push(
            CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.mapVariants.push(
            CMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant.decode(reader, reader.uint32()),
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

function createBaseCMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge(): CMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge {
  return { pathId1: 0, pathId2: 0 };
}

export const CMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge = {
  encode(
    message: CMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pathId1 !== 0) {
      writer.uint32(8).uint32(message.pathId1);
    }
    if (message.pathId2 !== 0) {
      writer.uint32(16).uint32(message.pathId2);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.pathId1 = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.pathId2 = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem(): CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem {
  return { itemType: 0, count: 0 };
}

export const CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem = {
  encode(
    message: CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.itemType !== 0) {
      writer.uint32(8).uint32(message.itemType);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemType = reader.uint32();
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
};

function createBaseCMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap(): CMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap {
  return { mapRoomId: 0, revealedRoomId: 0 };
}

export const CMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap = {
  encode(
    message: CMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.mapRoomId !== 0) {
      writer.uint32(8).uint32(message.mapRoomId);
    }
    if (message.revealedRoomId !== 0) {
      writer.uint32(16).uint32(message.revealedRoomId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.mapRoomId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.revealedRoomId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant(): CMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant {
  return {
    mapVariant: 0,
    claimedRooms1: "0",
    claimedRooms2: "0",
    revealedRooms1: "0",
    revealedRooms2: "0",
    completedPaths1: "0",
    completedPaths2: "0",
    completedPaths3: "0",
    completedPaths4: "0",
    halfCompletedPaths1: "0",
    halfCompletedPaths2: "0",
    halfCompletedPaths3: "0",
    halfCompletedPaths4: "0",
    swappedChallenge: [],
    ultraRareRewardRoomNumber: 0,
    treasureMap: [],
  };
}

export const CMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant = {
  encode(
    message: CMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.mapVariant !== 0) {
      writer.uint32(8).uint32(message.mapVariant);
    }
    if (message.claimedRooms1 !== "0") {
      writer.uint32(17).fixed64(message.claimedRooms1);
    }
    if (message.claimedRooms2 !== "0") {
      writer.uint32(25).fixed64(message.claimedRooms2);
    }
    if (message.revealedRooms1 !== "0") {
      writer.uint32(33).fixed64(message.revealedRooms1);
    }
    if (message.revealedRooms2 !== "0") {
      writer.uint32(41).fixed64(message.revealedRooms2);
    }
    if (message.completedPaths1 !== "0") {
      writer.uint32(49).fixed64(message.completedPaths1);
    }
    if (message.completedPaths2 !== "0") {
      writer.uint32(57).fixed64(message.completedPaths2);
    }
    if (message.completedPaths3 !== "0") {
      writer.uint32(65).fixed64(message.completedPaths3);
    }
    if (message.completedPaths4 !== "0") {
      writer.uint32(73).fixed64(message.completedPaths4);
    }
    if (message.halfCompletedPaths1 !== "0") {
      writer.uint32(81).fixed64(message.halfCompletedPaths1);
    }
    if (message.halfCompletedPaths2 !== "0") {
      writer.uint32(89).fixed64(message.halfCompletedPaths2);
    }
    if (message.halfCompletedPaths3 !== "0") {
      writer.uint32(97).fixed64(message.halfCompletedPaths3);
    }
    if (message.halfCompletedPaths4 !== "0") {
      writer.uint32(105).fixed64(message.halfCompletedPaths4);
    }
    for (const v of message.swappedChallenge) {
      CMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.ultraRareRewardRoomNumber !== 0) {
      writer.uint32(120).uint32(message.ultraRareRewardRoomNumber);
    }
    for (const v of message.treasureMap) {
      CMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.mapVariant = reader.uint32();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.claimedRooms1 = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.claimedRooms2 = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.revealedRooms1 = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 41) {
            break;
          }

          message.revealedRooms2 = longToString(reader.fixed64() as Long);
          continue;
        case 6:
          if (tag != 49) {
            break;
          }

          message.completedPaths1 = longToString(reader.fixed64() as Long);
          continue;
        case 7:
          if (tag != 57) {
            break;
          }

          message.completedPaths2 = longToString(reader.fixed64() as Long);
          continue;
        case 8:
          if (tag != 65) {
            break;
          }

          message.completedPaths3 = longToString(reader.fixed64() as Long);
          continue;
        case 9:
          if (tag != 73) {
            break;
          }

          message.completedPaths4 = longToString(reader.fixed64() as Long);
          continue;
        case 10:
          if (tag != 81) {
            break;
          }

          message.halfCompletedPaths1 = longToString(reader.fixed64() as Long);
          continue;
        case 11:
          if (tag != 89) {
            break;
          }

          message.halfCompletedPaths2 = longToString(reader.fixed64() as Long);
          continue;
        case 12:
          if (tag != 97) {
            break;
          }

          message.halfCompletedPaths3 = longToString(reader.fixed64() as Long);
          continue;
        case 13:
          if (tag != 105) {
            break;
          }

          message.halfCompletedPaths4 = longToString(reader.fixed64() as Long);
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.swappedChallenge.push(
            CMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge.decode(reader, reader.uint32()),
          );
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.ultraRareRewardRoomNumber = reader.uint32();
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.treasureMap.push(
            CMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap.decode(reader, reader.uint32()),
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

function createBaseCMsgClientToGCCavernCrawlGetClaimedRoomCount(): CMsgClientToGCCavernCrawlGetClaimedRoomCount {
  return { eventId: 0 };
}

export const CMsgClientToGCCavernCrawlGetClaimedRoomCount = {
  encode(message: CMsgClientToGCCavernCrawlGetClaimedRoomCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCavernCrawlGetClaimedRoomCount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCavernCrawlGetClaimedRoomCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCavernCrawlGetClaimedRoomCountResponse(): CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse {
  return { result: 0, mapVariants: [], availableMapVariantsMask: 0 };
}

export const CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse = {
  encode(
    message: CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    for (const v of message.mapVariants) {
      CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.availableMapVariantsMask !== 0) {
      writer.uint32(24).uint32(message.availableMapVariantsMask);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCavernCrawlGetClaimedRoomCountResponse();
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

          message.mapVariants.push(
            CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.availableMapVariantsMask = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant(): CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant {
  return { mapVariant: 0, count: 0 };
}

export const CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant = {
  encode(
    message: CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.mapVariant !== 0) {
      writer.uint32(8).uint32(message.mapVariant);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.mapVariant = reader.uint32();
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
};

function createBaseCMsgDOTAMutationList(): CMsgDOTAMutationList {
  return { mutations: [] };
}

export const CMsgDOTAMutationList = {
  encode(message: CMsgDOTAMutationList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mutations) {
      CMsgDOTAMutationList_Mutation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMutationList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMutationList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.mutations.push(CMsgDOTAMutationList_Mutation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTAMutationList_Mutation(): CMsgDOTAMutationList_Mutation {
  return { id: 0, name: "", description: "" };
}

export const CMsgDOTAMutationList_Mutation = {
  encode(message: CMsgDOTAMutationList_Mutation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAMutationList_Mutation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAMutationList_Mutation();
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

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgEventTipsSummaryRequest(): CMsgEventTipsSummaryRequest {
  return { eventId: 0, accountId: 0 };
}

export const CMsgEventTipsSummaryRequest = {
  encode(message: CMsgEventTipsSummaryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgEventTipsSummaryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgEventTipsSummaryRequest();
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
};

function createBaseCMsgEventTipsSummaryResponse(): CMsgEventTipsSummaryResponse {
  return { result: false, tipsReceived: [] };
}

export const CMsgEventTipsSummaryResponse = {
  encode(message: CMsgEventTipsSummaryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result === true) {
      writer.uint32(8).bool(message.result);
    }
    for (const v of message.tipsReceived) {
      CMsgEventTipsSummaryResponse_Tipper.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgEventTipsSummaryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgEventTipsSummaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.tipsReceived.push(CMsgEventTipsSummaryResponse_Tipper.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgEventTipsSummaryResponse_Tipper(): CMsgEventTipsSummaryResponse_Tipper {
  return { tipperAccountId: 0, tipCount: 0 };
}

export const CMsgEventTipsSummaryResponse_Tipper = {
  encode(message: CMsgEventTipsSummaryResponse_Tipper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tipperAccountId !== 0) {
      writer.uint32(8).uint32(message.tipperAccountId);
    }
    if (message.tipCount !== 0) {
      writer.uint32(16).uint32(message.tipCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgEventTipsSummaryResponse_Tipper {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgEventTipsSummaryResponse_Tipper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tipperAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.tipCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgSocialFeedRequest(): CMsgSocialFeedRequest {
  return { accountId: 0, selfOnly: false };
}

export const CMsgSocialFeedRequest = {
  encode(message: CMsgSocialFeedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.selfOnly === true) {
      writer.uint32(16).bool(message.selfOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSocialFeedRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSocialFeedRequest();
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

          message.selfOnly = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgSocialFeedResponse(): CMsgSocialFeedResponse {
  return { result: 0, feedEvents: [] };
}

export const CMsgSocialFeedResponse = {
  encode(message: CMsgSocialFeedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    for (const v of message.feedEvents) {
      CMsgSocialFeedResponse_FeedEvent.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSocialFeedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSocialFeedResponse();
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

          message.feedEvents.push(CMsgSocialFeedResponse_FeedEvent.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgSocialFeedResponse_FeedEvent(): CMsgSocialFeedResponse_FeedEvent {
  return {
    feedEventId: "0",
    accountId: 0,
    timestamp: 0,
    commentCount: 0,
    eventType: 0,
    eventSubType: 0,
    paramBigInt1: "0",
    paramInt1: 0,
    paramInt2: 0,
    paramInt3: 0,
    paramString: "",
  };
}

export const CMsgSocialFeedResponse_FeedEvent = {
  encode(message: CMsgSocialFeedResponse_FeedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedEventId !== "0") {
      writer.uint32(8).uint64(message.feedEventId);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).uint32(message.timestamp);
    }
    if (message.commentCount !== 0) {
      writer.uint32(32).uint32(message.commentCount);
    }
    if (message.eventType !== 0) {
      writer.uint32(40).uint32(message.eventType);
    }
    if (message.eventSubType !== 0) {
      writer.uint32(48).uint32(message.eventSubType);
    }
    if (message.paramBigInt1 !== "0") {
      writer.uint32(56).uint64(message.paramBigInt1);
    }
    if (message.paramInt1 !== 0) {
      writer.uint32(64).uint32(message.paramInt1);
    }
    if (message.paramInt2 !== 0) {
      writer.uint32(72).uint32(message.paramInt2);
    }
    if (message.paramInt3 !== 0) {
      writer.uint32(80).uint32(message.paramInt3);
    }
    if (message.paramString !== "") {
      writer.uint32(90).string(message.paramString);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSocialFeedResponse_FeedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSocialFeedResponse_FeedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.feedEventId = longToString(reader.uint64() as Long);
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
          if (tag != 32) {
            break;
          }

          message.commentCount = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.eventType = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.eventSubType = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.paramBigInt1 = longToString(reader.uint64() as Long);
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.paramInt1 = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.paramInt2 = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.paramInt3 = reader.uint32();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.paramString = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgSocialFeedCommentsRequest(): CMsgSocialFeedCommentsRequest {
  return { feedEventId: "0" };
}

export const CMsgSocialFeedCommentsRequest = {
  encode(message: CMsgSocialFeedCommentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedEventId !== "0") {
      writer.uint32(8).uint64(message.feedEventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSocialFeedCommentsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSocialFeedCommentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.feedEventId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgSocialFeedCommentsResponse(): CMsgSocialFeedCommentsResponse {
  return { result: 0, feedComments: [] };
}

export const CMsgSocialFeedCommentsResponse = {
  encode(message: CMsgSocialFeedCommentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    for (const v of message.feedComments) {
      CMsgSocialFeedCommentsResponse_FeedComment.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSocialFeedCommentsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSocialFeedCommentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.feedComments.push(CMsgSocialFeedCommentsResponse_FeedComment.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgSocialFeedCommentsResponse_FeedComment(): CMsgSocialFeedCommentsResponse_FeedComment {
  return { commenterAccountId: 0, timestamp: 0, commentText: "" };
}

export const CMsgSocialFeedCommentsResponse_FeedComment = {
  encode(message: CMsgSocialFeedCommentsResponse_FeedComment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commenterAccountId !== 0) {
      writer.uint32(8).uint32(message.commenterAccountId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.commentText !== "") {
      writer.uint32(26).string(message.commentText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSocialFeedCommentsResponse_FeedComment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSocialFeedCommentsResponse_FeedComment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.commenterAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.commentText = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCPlayerCardSpecificPurchaseRequest(): CMsgClientToGCPlayerCardSpecificPurchaseRequest {
  return { playerAccountId: 0, eventId: 0, cardDustItemId: "0" };
}

export const CMsgClientToGCPlayerCardSpecificPurchaseRequest = {
  encode(
    message: CMsgClientToGCPlayerCardSpecificPurchaseRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playerAccountId !== 0) {
      writer.uint32(8).uint32(message.playerAccountId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).uint32(message.eventId);
    }
    if (message.cardDustItemId !== "0") {
      writer.uint32(24).uint64(message.cardDustItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCPlayerCardSpecificPurchaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCPlayerCardSpecificPurchaseRequest();
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

          message.eventId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.cardDustItemId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCPlayerCardSpecificPurchaseResponse(): CMsgClientToGCPlayerCardSpecificPurchaseResponse {
  return { result: 1, itemId: "0" };
}

export const CMsgClientToGCPlayerCardSpecificPurchaseResponse = {
  encode(
    message: CMsgClientToGCPlayerCardSpecificPurchaseResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 1) {
      writer.uint32(8).int32(message.result);
    }
    if (message.itemId !== "0") {
      writer.uint32(16).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCPlayerCardSpecificPurchaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCPlayerCardSpecificPurchaseResponse();
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

function createBaseCMsgClientToGCRequestContestVotes(): CMsgClientToGCRequestContestVotes {
  return { contestId: 0 };
}

export const CMsgClientToGCRequestContestVotes = {
  encode(message: CMsgClientToGCRequestContestVotes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contestId !== 0) {
      writer.uint32(8).uint32(message.contestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestContestVotes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestContestVotes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.contestId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestContestVotesResponse(): CMsgClientToGCRequestContestVotesResponse {
  return { result: 0, votes: [] };
}

export const CMsgClientToGCRequestContestVotesResponse = {
  encode(message: CMsgClientToGCRequestContestVotesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    for (const v of message.votes) {
      CMsgClientToGCRequestContestVotesResponse_ItemVote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestContestVotesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestContestVotesResponse();
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

          message.votes.push(CMsgClientToGCRequestContestVotesResponse_ItemVote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestContestVotesResponse_ItemVote(): CMsgClientToGCRequestContestVotesResponse_ItemVote {
  return { contestItemId: "0", vote: 0 };
}

export const CMsgClientToGCRequestContestVotesResponse_ItemVote = {
  encode(
    message: CMsgClientToGCRequestContestVotesResponse_ItemVote,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.contestItemId !== "0") {
      writer.uint32(8).uint64(message.contestItemId);
    }
    if (message.vote !== 0) {
      writer.uint32(16).int32(message.vote);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestContestVotesResponse_ItemVote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestContestVotesResponse_ItemVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.contestItemId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.vote = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRecordContestVote(): CMsgClientToGCRecordContestVote {
  return { contestId: 0, contestItemId: "0", vote: 0 };
}

export const CMsgClientToGCRecordContestVote = {
  encode(message: CMsgClientToGCRecordContestVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contestId !== 0) {
      writer.uint32(8).uint32(message.contestId);
    }
    if (message.contestItemId !== "0") {
      writer.uint32(16).uint64(message.contestItemId);
    }
    if (message.vote !== 0) {
      writer.uint32(24).int32(message.vote);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRecordContestVote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRecordContestVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.contestId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.contestItemId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.vote = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientRecordContestVoteResponse(): CMsgGCToClientRecordContestVoteResponse {
  return { eresult: 0 };
}

export const CMsgGCToClientRecordContestVoteResponse = {
  encode(message: CMsgGCToClientRecordContestVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientRecordContestVoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientRecordContestVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eresult = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDevGrantEventPoints(): CMsgDevGrantEventPoints {
  return { eventId: 0, eventPoints: 0, premiumPoints: 0 };
}

export const CMsgDevGrantEventPoints = {
  encode(message: CMsgDevGrantEventPoints, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.eventPoints !== 0) {
      writer.uint32(16).uint32(message.eventPoints);
    }
    if (message.premiumPoints !== 0) {
      writer.uint32(24).uint32(message.premiumPoints);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDevGrantEventPoints {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDevGrantEventPoints();
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

          message.eventPoints = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.premiumPoints = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDevGrantEventPointsResponse(): CMsgDevGrantEventPointsResponse {
  return { result: 0 };
}

export const CMsgDevGrantEventPointsResponse = {
  encode(message: CMsgDevGrantEventPointsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDevGrantEventPointsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDevGrantEventPointsResponse();
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

function createBaseCMsgDevGrantEventAction(): CMsgDevGrantEventAction {
  return { eventId: 0, actionId: 0, actionScore: 0 };
}

export const CMsgDevGrantEventAction = {
  encode(message: CMsgDevGrantEventAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.actionId !== 0) {
      writer.uint32(16).uint32(message.actionId);
    }
    if (message.actionScore !== 0) {
      writer.uint32(24).uint32(message.actionScore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDevGrantEventAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDevGrantEventAction();
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

          message.actionScore = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDevGrantEventActionResponse(): CMsgDevGrantEventActionResponse {
  return { result: 0 };
}

export const CMsgDevGrantEventActionResponse = {
  encode(message: CMsgDevGrantEventActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDevGrantEventActionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDevGrantEventActionResponse();
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

function createBaseCMsgDevDeleteEventActions(): CMsgDevDeleteEventActions {
  return { eventId: 0, startActionId: 0, endActionId: 0, removeAudit: false };
}

export const CMsgDevDeleteEventActions = {
  encode(message: CMsgDevDeleteEventActions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.startActionId !== 0) {
      writer.uint32(16).uint32(message.startActionId);
    }
    if (message.endActionId !== 0) {
      writer.uint32(24).uint32(message.endActionId);
    }
    if (message.removeAudit === true) {
      writer.uint32(32).bool(message.removeAudit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDevDeleteEventActions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDevDeleteEventActions();
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

          message.startActionId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.endActionId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.removeAudit = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDevDeleteEventActionsResponse(): CMsgDevDeleteEventActionsResponse {
  return { result: 0 };
}

export const CMsgDevDeleteEventActionsResponse = {
  encode(message: CMsgDevDeleteEventActionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDevDeleteEventActionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDevDeleteEventActionsResponse();
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

function createBaseCMsgDevResetEventState(): CMsgDevResetEventState {
  return { eventId: 0, removeAudit: false };
}

export const CMsgDevResetEventState = {
  encode(message: CMsgDevResetEventState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.removeAudit === true) {
      writer.uint32(16).bool(message.removeAudit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDevResetEventState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDevResetEventState();
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

          message.removeAudit = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDevResetEventStateResponse(): CMsgDevResetEventStateResponse {
  return { result: 0 };
}

export const CMsgDevResetEventStateResponse = {
  encode(message: CMsgDevResetEventStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDevResetEventStateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDevResetEventStateResponse();
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

function createBaseCMsgConsumeEventSupportGrantItem(): CMsgConsumeEventSupportGrantItem {
  return { itemId: "0" };
}

export const CMsgConsumeEventSupportGrantItem = {
  encode(message: CMsgConsumeEventSupportGrantItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgConsumeEventSupportGrantItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgConsumeEventSupportGrantItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
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

function createBaseCMsgConsumeEventSupportGrantItemResponse(): CMsgConsumeEventSupportGrantItemResponse {
  return { result: 0 };
}

export const CMsgConsumeEventSupportGrantItemResponse = {
  encode(message: CMsgConsumeEventSupportGrantItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgConsumeEventSupportGrantItemResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgConsumeEventSupportGrantItemResponse();
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

function createBaseCMsgClientToGCGetFilteredPlayers(): CMsgClientToGCGetFilteredPlayers {
  return {};
}

export const CMsgClientToGCGetFilteredPlayers = {
  encode(_: CMsgClientToGCGetFilteredPlayers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetFilteredPlayers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetFilteredPlayers();
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

function createBaseCMsgGCToClientGetFilteredPlayersResponse(): CMsgGCToClientGetFilteredPlayersResponse {
  return { result: 0, filteredPlayers: [], baseSlots: 0, additionalSlots: 0, nextSlotCost: 0 };
}

export const CMsgGCToClientGetFilteredPlayersResponse = {
  encode(message: CMsgGCToClientGetFilteredPlayersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    for (const v of message.filteredPlayers) {
      CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.baseSlots !== 0) {
      writer.uint32(24).int32(message.baseSlots);
    }
    if (message.additionalSlots !== 0) {
      writer.uint32(32).int32(message.additionalSlots);
    }
    if (message.nextSlotCost !== 0) {
      writer.uint32(40).int32(message.nextSlotCost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientGetFilteredPlayersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientGetFilteredPlayersResponse();
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

          message.filteredPlayers.push(
            CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.baseSlots = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.additionalSlots = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.nextSlotCost = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientGetFilteredPlayersResponse_CFilterEntry(): CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry {
  return { accountId: 0, timeAdded: 0, timeExpires: 0, note: "" };
}

export const CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry = {
  encode(
    message: CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(13).fixed32(message.accountId);
    }
    if (message.timeAdded !== 0) {
      writer.uint32(21).fixed32(message.timeAdded);
    }
    if (message.timeExpires !== 0) {
      writer.uint32(29).fixed32(message.timeExpires);
    }
    if (message.note !== "") {
      writer.uint32(34).string(message.note);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientGetFilteredPlayersResponse_CFilterEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.accountId = reader.fixed32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.timeAdded = reader.fixed32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.timeExpires = reader.fixed32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.note = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRemoveFilteredPlayer(): CMsgClientToGCRemoveFilteredPlayer {
  return { accountIdToRemove: 0 };
}

export const CMsgClientToGCRemoveFilteredPlayer = {
  encode(message: CMsgClientToGCRemoveFilteredPlayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountIdToRemove !== 0) {
      writer.uint32(13).fixed32(message.accountIdToRemove);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRemoveFilteredPlayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRemoveFilteredPlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.accountIdToRemove = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientRemoveFilteredPlayerResponse(): CMsgGCToClientRemoveFilteredPlayerResponse {
  return { result: 0 };
}

export const CMsgGCToClientRemoveFilteredPlayerResponse = {
  encode(message: CMsgGCToClientRemoveFilteredPlayerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientRemoveFilteredPlayerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientRemoveFilteredPlayerResponse();
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

function createBaseCMsgClientToGCPurchaseFilteredPlayerSlot(): CMsgClientToGCPurchaseFilteredPlayerSlot {
  return { additionalSlotsCurrent: 0 };
}

export const CMsgClientToGCPurchaseFilteredPlayerSlot = {
  encode(message: CMsgClientToGCPurchaseFilteredPlayerSlot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.additionalSlotsCurrent !== 0) {
      writer.uint32(8).int32(message.additionalSlotsCurrent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCPurchaseFilteredPlayerSlot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCPurchaseFilteredPlayerSlot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.additionalSlotsCurrent = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientPurchaseFilteredPlayerSlotResponse(): CMsgGCToClientPurchaseFilteredPlayerSlotResponse {
  return { result: 0, additionalSlots: 0, nextSlotCost: 0 };
}

export const CMsgGCToClientPurchaseFilteredPlayerSlotResponse = {
  encode(
    message: CMsgGCToClientPurchaseFilteredPlayerSlotResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.additionalSlots !== 0) {
      writer.uint32(16).int32(message.additionalSlots);
    }
    if (message.nextSlotCost !== 0) {
      writer.uint32(24).int32(message.nextSlotCost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientPurchaseFilteredPlayerSlotResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientPurchaseFilteredPlayerSlotResponse();
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
          if (tag != 16) {
            break;
          }

          message.additionalSlots = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.nextSlotCost = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCUpdateFilteredPlayerNote(): CMsgClientToGCUpdateFilteredPlayerNote {
  return { targetAccountId: 0, newNote: "" };
}

export const CMsgClientToGCUpdateFilteredPlayerNote = {
  encode(message: CMsgClientToGCUpdateFilteredPlayerNote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetAccountId !== 0) {
      writer.uint32(13).fixed32(message.targetAccountId);
    }
    if (message.newNote !== "") {
      writer.uint32(18).string(message.newNote);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUpdateFilteredPlayerNote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUpdateFilteredPlayerNote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.targetAccountId = reader.fixed32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.newNote = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientUpdateFilteredPlayerNoteResponse(): CMsgGCToClientUpdateFilteredPlayerNoteResponse {
  return { result: 0 };
}

export const CMsgGCToClientUpdateFilteredPlayerNoteResponse = {
  encode(
    message: CMsgGCToClientUpdateFilteredPlayerNoteResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientUpdateFilteredPlayerNoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientUpdateFilteredPlayerNoteResponse();
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

function createBaseCMsgPartySearchPlayer(): CMsgPartySearchPlayer {
  return { accountId: 0, matchId: "0", creationTime: 0 };
}

export const CMsgPartySearchPlayer = {
  encode(message: CMsgPartySearchPlayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(13).fixed32(message.accountId);
    }
    if (message.matchId !== "0") {
      writer.uint32(17).fixed64(message.matchId);
    }
    if (message.creationTime !== 0) {
      writer.uint32(29).fixed32(message.creationTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPartySearchPlayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPartySearchPlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.accountId = reader.fixed32();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.matchId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.creationTime = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientPlayerBeaconState(): CMsgGCToClientPlayerBeaconState {
  return { numActiveBeacons: [] };
}

export const CMsgGCToClientPlayerBeaconState = {
  encode(message: CMsgGCToClientPlayerBeaconState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.numActiveBeacons) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientPlayerBeaconState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientPlayerBeaconState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.numActiveBeacons.push(reader.int32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.numActiveBeacons.push(reader.int32());
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

function createBaseCMsgGCToClientPartyBeaconUpdate(): CMsgGCToClientPartyBeaconUpdate {
  return { beaconAdded: false, beaconType: 0, accountId: 0 };
}

export const CMsgGCToClientPartyBeaconUpdate = {
  encode(message: CMsgGCToClientPartyBeaconUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beaconAdded === true) {
      writer.uint32(8).bool(message.beaconAdded);
    }
    if (message.beaconType !== 0) {
      writer.uint32(16).int32(message.beaconType);
    }
    if (message.accountId !== 0) {
      writer.uint32(29).fixed32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientPartyBeaconUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientPartyBeaconUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.beaconAdded = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.beaconType = reader.int32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.accountId = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCUpdatePartyBeacon(): CMsgClientToGCUpdatePartyBeacon {
  return { action: 0 };
}

export const CMsgClientToGCUpdatePartyBeacon = {
  encode(message: CMsgClientToGCUpdatePartyBeacon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUpdatePartyBeacon {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUpdatePartyBeacon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestActiveBeaconParties(): CMsgClientToGCRequestActiveBeaconParties {
  return {};
}

export const CMsgClientToGCRequestActiveBeaconParties = {
  encode(_: CMsgClientToGCRequestActiveBeaconParties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestActiveBeaconParties {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestActiveBeaconParties();
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

function createBaseCMsgGCToClientRequestActiveBeaconPartiesResponse(): CMsgGCToClientRequestActiveBeaconPartiesResponse {
  return { response: 0, activeParties: [] };
}

export const CMsgGCToClientRequestActiveBeaconPartiesResponse = {
  encode(
    message: CMsgGCToClientRequestActiveBeaconPartiesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    for (const v of message.activeParties) {
      CPartySearchClientParty.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientRequestActiveBeaconPartiesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientRequestActiveBeaconPartiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.activeParties.push(CPartySearchClientParty.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCJoinPartyFromBeacon(): CMsgClientToGCJoinPartyFromBeacon {
  return { partyId: "0", accountId: 0, beaconType: 0 };
}

export const CMsgClientToGCJoinPartyFromBeacon = {
  encode(message: CMsgClientToGCJoinPartyFromBeacon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.partyId !== "0") {
      writer.uint32(9).fixed64(message.partyId);
    }
    if (message.accountId !== 0) {
      writer.uint32(21).fixed32(message.accountId);
    }
    if (message.beaconType !== 0) {
      writer.uint32(24).int32(message.beaconType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCJoinPartyFromBeacon {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCJoinPartyFromBeacon();
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
          if (tag != 21) {
            break;
          }

          message.accountId = reader.fixed32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.beaconType = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientJoinPartyFromBeaconResponse(): CMsgGCToClientJoinPartyFromBeaconResponse {
  return { response: 0 };
}

export const CMsgGCToClientJoinPartyFromBeaconResponse = {
  encode(message: CMsgGCToClientJoinPartyFromBeaconResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientJoinPartyFromBeaconResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientJoinPartyFromBeaconResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCManageFavorites(): CMsgClientToGCManageFavorites {
  return { action: 0, accountId: 0, favoriteName: "", inviteResponse: false, fromFriendlist: false, lobbyId: "0" };
}

export const CMsgClientToGCManageFavorites = {
  encode(message: CMsgClientToGCManageFavorites, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    if (message.accountId !== 0) {
      writer.uint32(21).fixed32(message.accountId);
    }
    if (message.favoriteName !== "") {
      writer.uint32(26).string(message.favoriteName);
    }
    if (message.inviteResponse === true) {
      writer.uint32(32).bool(message.inviteResponse);
    }
    if (message.fromFriendlist === true) {
      writer.uint32(40).bool(message.fromFriendlist);
    }
    if (message.lobbyId !== "0") {
      writer.uint32(49).fixed64(message.lobbyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCManageFavorites {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCManageFavorites();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.accountId = reader.fixed32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.favoriteName = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.inviteResponse = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.fromFriendlist = reader.bool();
          continue;
        case 6:
          if (tag != 49) {
            break;
          }

          message.lobbyId = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientManageFavoritesResponse(): CMsgGCToClientManageFavoritesResponse {
  return { response: 0, debugMessage: "", player: undefined };
}

export const CMsgGCToClientManageFavoritesResponse = {
  encode(message: CMsgGCToClientManageFavoritesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    if (message.debugMessage !== "") {
      writer.uint32(18).string(message.debugMessage);
    }
    if (message.player !== undefined) {
      CMsgPartySearchPlayer.encode(message.player, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientManageFavoritesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientManageFavoritesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.debugMessage = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.player = CMsgPartySearchPlayer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCGetFavoritePlayers(): CMsgClientToGCGetFavoritePlayers {
  return { paginationKey: "0", paginationCount: 0 };
}

export const CMsgClientToGCGetFavoritePlayers = {
  encode(message: CMsgClientToGCGetFavoritePlayers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paginationKey !== "0") {
      writer.uint32(8).uint64(message.paginationKey);
    }
    if (message.paginationCount !== 0) {
      writer.uint32(16).int32(message.paginationCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetFavoritePlayers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetFavoritePlayers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.paginationKey = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.paginationCount = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientGetFavoritePlayersResponse(): CMsgGCToClientGetFavoritePlayersResponse {
  return { response: 0, players: [], nextPaginationKey: "0" };
}

export const CMsgGCToClientGetFavoritePlayersResponse = {
  encode(message: CMsgGCToClientGetFavoritePlayersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    for (const v of message.players) {
      CMsgPartySearchPlayer.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextPaginationKey !== "0") {
      writer.uint32(24).uint64(message.nextPaginationKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientGetFavoritePlayersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientGetFavoritePlayersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.players.push(CMsgPartySearchPlayer.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.nextPaginationKey = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientPartySearchInvite(): CMsgGCToClientPartySearchInvite {
  return { accountId: 0 };
}

export const CMsgGCToClientPartySearchInvite = {
  encode(message: CMsgGCToClientPartySearchInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(13).fixed32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientPartySearchInvite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientPartySearchInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.accountId = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCVerifyFavoritePlayers(): CMsgClientToGCVerifyFavoritePlayers {
  return { accountIds: [] };
}

export const CMsgClientToGCVerifyFavoritePlayers = {
  encode(message: CMsgClientToGCVerifyFavoritePlayers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.accountIds) {
      writer.fixed32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCVerifyFavoritePlayers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCVerifyFavoritePlayers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 13) {
            message.accountIds.push(reader.fixed32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountIds.push(reader.fixed32());
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

function createBaseCMsgGCToClientVerifyFavoritePlayersResponse(): CMsgGCToClientVerifyFavoritePlayersResponse {
  return { results: [] };
}

export const CMsgGCToClientVerifyFavoritePlayersResponse = {
  encode(message: CMsgGCToClientVerifyFavoritePlayersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      CMsgGCToClientVerifyFavoritePlayersResponse_Result.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientVerifyFavoritePlayersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientVerifyFavoritePlayersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.results.push(CMsgGCToClientVerifyFavoritePlayersResponse_Result.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientVerifyFavoritePlayersResponse_Result(): CMsgGCToClientVerifyFavoritePlayersResponse_Result {
  return { player: undefined, isFavorite: false };
}

export const CMsgGCToClientVerifyFavoritePlayersResponse_Result = {
  encode(
    message: CMsgGCToClientVerifyFavoritePlayersResponse_Result,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.player !== undefined) {
      CMsgPartySearchPlayer.encode(message.player, writer.uint32(10).fork()).ldelim();
    }
    if (message.isFavorite === true) {
      writer.uint32(16).bool(message.isFavorite);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientVerifyFavoritePlayersResponse_Result {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientVerifyFavoritePlayersResponse_Result();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.player = CMsgPartySearchPlayer.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isFavorite = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestPlayerRecentAccomplishments(): CMsgClientToGCRequestPlayerRecentAccomplishments {
  return { accountId: 0 };
}

export const CMsgClientToGCRequestPlayerRecentAccomplishments = {
  encode(
    message: CMsgClientToGCRequestPlayerRecentAccomplishments,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestPlayerRecentAccomplishments {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestPlayerRecentAccomplishments();
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
};

function createBaseCMsgClientToGCRequestPlayerRecentAccomplishmentsResponse(): CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse {
  return { result: 0, playerAccomplishments: undefined };
}

export const CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse = {
  encode(
    message: CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.playerAccomplishments !== undefined) {
      CMsgPlayerRecentAccomplishments.encode(message.playerAccomplishments, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestPlayerRecentAccomplishmentsResponse();
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

          message.playerAccomplishments = CMsgPlayerRecentAccomplishments.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRequestPlayerHeroRecentAccomplishments(): CMsgClientToGCRequestPlayerHeroRecentAccomplishments {
  return { accountId: 0, heroId: 0 };
}

export const CMsgClientToGCRequestPlayerHeroRecentAccomplishments = {
  encode(
    message: CMsgClientToGCRequestPlayerHeroRecentAccomplishments,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestPlayerHeroRecentAccomplishments {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestPlayerHeroRecentAccomplishments();
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

function createBaseCMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse(): CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse {
  return { result: 0, heroAccomplishments: undefined };
}

export const CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse = {
  encode(
    message: CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.heroAccomplishments !== undefined) {
      CMsgPlayerHeroRecentAccomplishments.encode(message.heroAccomplishments, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse();
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

function createBaseCMsgClientToGCSubmitPlayerMatchSurvey(): CMsgClientToGCSubmitPlayerMatchSurvey {
  return { matchId: "0", rating: 0, flags: 0 };
}

export const CMsgClientToGCSubmitPlayerMatchSurvey = {
  encode(message: CMsgClientToGCSubmitPlayerMatchSurvey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.rating !== 0) {
      writer.uint32(24).sint32(message.rating);
    }
    if (message.flags !== 0) {
      writer.uint32(32).uint32(message.flags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSubmitPlayerMatchSurvey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSubmitPlayerMatchSurvey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.rating = reader.sint32();
          continue;
        case 4:
          if (tag != 32) {
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

function createBaseCMsgClientToGCSubmitPlayerMatchSurveyResponse(): CMsgClientToGCSubmitPlayerMatchSurveyResponse {
  return { eresult: 0, accountId: 0 };
}

export const CMsgClientToGCSubmitPlayerMatchSurveyResponse = {
  encode(message: CMsgClientToGCSubmitPlayerMatchSurveyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSubmitPlayerMatchSurveyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSubmitPlayerMatchSurveyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eresult = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
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
};

function createBaseCMsgGCToClientVACReminder(): CMsgGCToClientVACReminder {
  return {};
}

export const CMsgGCToClientVACReminder = {
  encode(_: CMsgGCToClientVACReminder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientVACReminder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientVACReminder();
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

function createBaseCMsgClientToGCUnderDraftRequest(): CMsgClientToGCUnderDraftRequest {
  return { accountId: 0, eventId: 0 };
}

export const CMsgClientToGCUnderDraftRequest = {
  encode(message: CMsgClientToGCUnderDraftRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).uint32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnderDraftRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnderDraftRequest();
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
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCUnderDraftResponse(): CMsgClientToGCUnderDraftResponse {
  return { result: 0, accountId: 0, eventId: 0, draftData: undefined };
}

export const CMsgClientToGCUnderDraftResponse = {
  encode(message: CMsgClientToGCUnderDraftResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint32(message.accountId);
    }
    if (message.eventId !== 0) {
      writer.uint32(24).uint32(message.eventId);
    }
    if (message.draftData !== undefined) {
      CMsgUnderDraftData.encode(message.draftData, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnderDraftResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnderDraftResponse();
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
          if (tag != 16) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.draftData = CMsgUnderDraftData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCUnderDraftReroll(): CMsgClientToGCUnderDraftReroll {
  return { eventId: 0 };
}

export const CMsgClientToGCUnderDraftReroll = {
  encode(message: CMsgClientToGCUnderDraftReroll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnderDraftReroll {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnderDraftReroll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCUnderDraftRerollResponse(): CMsgClientToGCUnderDraftRerollResponse {
  return { result: 0, eventId: 0, draftData: undefined };
}

export const CMsgClientToGCUnderDraftRerollResponse = {
  encode(message: CMsgClientToGCUnderDraftRerollResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).uint32(message.eventId);
    }
    if (message.draftData !== undefined) {
      CMsgUnderDraftData.encode(message.draftData, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnderDraftRerollResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnderDraftRerollResponse();
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
          if (tag != 16) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.draftData = CMsgUnderDraftData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCUnderDraftBuy(): CMsgClientToGCUnderDraftBuy {
  return { eventId: 0, slotId: 0 };
}

export const CMsgClientToGCUnderDraftBuy = {
  encode(message: CMsgClientToGCUnderDraftBuy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.slotId !== 0) {
      writer.uint32(16).uint32(message.slotId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnderDraftBuy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnderDraftBuy();
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

          message.slotId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientGuildUnderDraftGoldUpdated(): CMsgGCToClientGuildUnderDraftGoldUpdated {
  return { eventId: 0 };
}

export const CMsgGCToClientGuildUnderDraftGoldUpdated = {
  encode(message: CMsgGCToClientGuildUnderDraftGoldUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientGuildUnderDraftGoldUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientGuildUnderDraftGoldUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCUnderDraftBuyResponse(): CMsgClientToGCUnderDraftBuyResponse {
  return { result: 0, eventId: 0, slotId: 0, draftData: undefined };
}

export const CMsgClientToGCUnderDraftBuyResponse = {
  encode(message: CMsgClientToGCUnderDraftBuyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).uint32(message.eventId);
    }
    if (message.slotId !== 0) {
      writer.uint32(24).uint32(message.slotId);
    }
    if (message.draftData !== undefined) {
      CMsgUnderDraftData.encode(message.draftData, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnderDraftBuyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnderDraftBuyResponse();
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
        case 4:
          if (tag != 34) {
            break;
          }

          message.draftData = CMsgUnderDraftData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCUnderDraftRollBackBench(): CMsgClientToGCUnderDraftRollBackBench {
  return { eventId: 0 };
}

export const CMsgClientToGCUnderDraftRollBackBench = {
  encode(message: CMsgClientToGCUnderDraftRollBackBench, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnderDraftRollBackBench {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnderDraftRollBackBench();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCUnderDraftRollBackBenchResponse(): CMsgClientToGCUnderDraftRollBackBenchResponse {
  return { result: 0, eventId: 0, draftData: undefined };
}

export const CMsgClientToGCUnderDraftRollBackBenchResponse = {
  encode(message: CMsgClientToGCUnderDraftRollBackBenchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).uint32(message.eventId);
    }
    if (message.draftData !== undefined) {
      CMsgUnderDraftData.encode(message.draftData, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnderDraftRollBackBenchResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnderDraftRollBackBenchResponse();
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
          if (tag != 16) {
            break;
          }

          message.eventId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.draftData = CMsgUnderDraftData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCUnderDraftSell(): CMsgClientToGCUnderDraftSell {
  return { eventId: 0, slotId: 0 };
}

export const CMsgClientToGCUnderDraftSell = {
  encode(message: CMsgClientToGCUnderDraftSell, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.slotId !== 0) {
      writer.uint32(16).uint32(message.slotId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnderDraftSell {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnderDraftSell();
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

          message.slotId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCUnderDraftSellResponse(): CMsgClientToGCUnderDraftSellResponse {
  return { result: 0, eventId: 0, slotId: 0, draftData: undefined };
}

export const CMsgClientToGCUnderDraftSellResponse = {
  encode(message: CMsgClientToGCUnderDraftSellResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).uint32(message.eventId);
    }
    if (message.slotId !== 0) {
      writer.uint32(24).uint32(message.slotId);
    }
    if (message.draftData !== undefined) {
      CMsgUnderDraftData.encode(message.draftData, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnderDraftSellResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnderDraftSellResponse();
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
        case 4:
          if (tag != 34) {
            break;
          }

          message.draftData = CMsgUnderDraftData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCUnderDraftRedeemReward(): CMsgClientToGCUnderDraftRedeemReward {
  return { eventId: 0, actionId: 0 };
}

export const CMsgClientToGCUnderDraftRedeemReward = {
  encode(message: CMsgClientToGCUnderDraftRedeemReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.actionId !== 0) {
      writer.uint32(16).uint32(message.actionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnderDraftRedeemReward {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnderDraftRedeemReward();
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

          message.actionId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCUnderDraftRedeemRewardResponse(): CMsgClientToGCUnderDraftRedeemRewardResponse {
  return { result: 0 };
}

export const CMsgClientToGCUnderDraftRedeemRewardResponse = {
  encode(message: CMsgClientToGCUnderDraftRedeemRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUnderDraftRedeemRewardResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUnderDraftRedeemRewardResponse();
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

function createBaseCMsgClientToGCSubmitDraftTriviaMatchAnswer(): CMsgClientToGCSubmitDraftTriviaMatchAnswer {
  return { choseRadiantAsWinner: false, eventId: 0, endTime: 0 };
}

export const CMsgClientToGCSubmitDraftTriviaMatchAnswer = {
  encode(message: CMsgClientToGCSubmitDraftTriviaMatchAnswer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.choseRadiantAsWinner === true) {
      writer.uint32(8).bool(message.choseRadiantAsWinner);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).uint32(message.eventId);
    }
    if (message.endTime !== 0) {
      writer.uint32(24).uint32(message.endTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSubmitDraftTriviaMatchAnswer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSubmitDraftTriviaMatchAnswer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.choseRadiantAsWinner = reader.bool();
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

          message.endTime = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSubmitDraftTriviaMatchAnswerResponse(): CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse {
  return { result: 0 };
}

export const CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse = {
  encode(
    message: CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSubmitDraftTriviaMatchAnswerResponse();
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

function createBaseCMsgDraftTriviaVoteCount(): CMsgDraftTriviaVoteCount {
  return { totalVotes: 0, radiantVotes: 0, direVotes: 0 };
}

export const CMsgDraftTriviaVoteCount = {
  encode(message: CMsgDraftTriviaVoteCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalVotes !== 0) {
      writer.uint32(8).uint32(message.totalVotes);
    }
    if (message.radiantVotes !== 0) {
      writer.uint32(16).uint32(message.radiantVotes);
    }
    if (message.direVotes !== 0) {
      writer.uint32(24).uint32(message.direVotes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDraftTriviaVoteCount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDraftTriviaVoteCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.totalVotes = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.radiantVotes = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.direVotes = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCRecalibrateMMR(): CMsgClientToGCRecalibrateMMR {
  return {};
}

export const CMsgClientToGCRecalibrateMMR = {
  encode(_: CMsgClientToGCRecalibrateMMR, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRecalibrateMMR {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRecalibrateMMR();
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

function createBaseCMsgClientToGCRecalibrateMMRResponse(): CMsgClientToGCRecalibrateMMRResponse {
  return { result: 0 };
}

export const CMsgClientToGCRecalibrateMMRResponse = {
  encode(message: CMsgClientToGCRecalibrateMMRResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRecalibrateMMRResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRecalibrateMMRResponse();
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

function createBaseCMsgDOTAPostGameItemAwardNotification(): CMsgDOTAPostGameItemAwardNotification {
  return { receiverAccountId: 0, itemDefIndex: [], actionId: 0 };
}

export const CMsgDOTAPostGameItemAwardNotification = {
  encode(message: CMsgDOTAPostGameItemAwardNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.receiverAccountId !== 0) {
      writer.uint32(8).uint32(message.receiverAccountId);
    }
    writer.uint32(18).fork();
    for (const v of message.itemDefIndex) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.actionId !== 0) {
      writer.uint32(24).uint32(message.actionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAPostGameItemAwardNotification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAPostGameItemAwardNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.receiverAccountId = reader.uint32();
          continue;
        case 2:
          if (tag == 16) {
            message.itemDefIndex.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemDefIndex.push(reader.uint32());
            }

            continue;
          }

          break;
        case 3:
          if (tag != 24) {
            break;
          }

          message.actionId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCGetOWMatchDetails(): CMsgClientToGCGetOWMatchDetails {
  return {};
}

export const CMsgClientToGCGetOWMatchDetails = {
  encode(_: CMsgClientToGCGetOWMatchDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetOWMatchDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetOWMatchDetails();
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

function createBaseCMsgClientToGCGetOWMatchDetailsResponse(): CMsgClientToGCGetOWMatchDetailsResponse {
  return {
    result: 0,
    overwatchReplayId: "0",
    decryptionKey: "0",
    cluster: 0,
    overwatchSalt: 0,
    targetPlayerSlot: 0,
    markers: [],
    reportReason: 0,
    targetHeroId: 0,
    rankTier: 0,
    laneSelectionFlags: 0,
  };
}

export const CMsgClientToGCGetOWMatchDetailsResponse = {
  encode(message: CMsgClientToGCGetOWMatchDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.overwatchReplayId !== "0") {
      writer.uint32(16).uint64(message.overwatchReplayId);
    }
    if (message.decryptionKey !== "0") {
      writer.uint32(24).uint64(message.decryptionKey);
    }
    if (message.cluster !== 0) {
      writer.uint32(32).uint32(message.cluster);
    }
    if (message.overwatchSalt !== 0) {
      writer.uint32(40).uint32(message.overwatchSalt);
    }
    if (message.targetPlayerSlot !== 0) {
      writer.uint32(48).uint32(message.targetPlayerSlot);
    }
    for (const v of message.markers) {
      CMsgClientToGCGetOWMatchDetailsResponse_Marker.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.reportReason !== 0) {
      writer.uint32(64).int32(message.reportReason);
    }
    if (message.targetHeroId !== 0) {
      writer.uint32(72).uint32(message.targetHeroId);
    }
    if (message.rankTier !== 0) {
      writer.uint32(80).uint32(message.rankTier);
    }
    if (message.laneSelectionFlags !== 0) {
      writer.uint32(88).uint32(message.laneSelectionFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetOWMatchDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetOWMatchDetailsResponse();
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
          if (tag != 16) {
            break;
          }

          message.overwatchReplayId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.decryptionKey = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.cluster = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.overwatchSalt = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.targetPlayerSlot = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.markers.push(CMsgClientToGCGetOWMatchDetailsResponse_Marker.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.reportReason = reader.int32() as any;
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.targetHeroId = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.rankTier = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.laneSelectionFlags = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCGetOWMatchDetailsResponse_Marker(): CMsgClientToGCGetOWMatchDetailsResponse_Marker {
  return { startGameTimeS: 0, endGameTimeS: 0 };
}

export const CMsgClientToGCGetOWMatchDetailsResponse_Marker = {
  encode(
    message: CMsgClientToGCGetOWMatchDetailsResponse_Marker,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.startGameTimeS !== 0) {
      writer.uint32(8).uint32(message.startGameTimeS);
    }
    if (message.endGameTimeS !== 0) {
      writer.uint32(16).uint32(message.endGameTimeS);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetOWMatchDetailsResponse_Marker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetOWMatchDetailsResponse_Marker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.startGameTimeS = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.endGameTimeS = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSubmitOWConviction(): CMsgClientToGCSubmitOWConviction {
  return { overwatchReplayId: "0", targetPlayerSlot: 0, cheatingConviction: 0, griefingConviction: 0 };
}

export const CMsgClientToGCSubmitOWConviction = {
  encode(message: CMsgClientToGCSubmitOWConviction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.overwatchReplayId !== "0") {
      writer.uint32(8).uint64(message.overwatchReplayId);
    }
    if (message.targetPlayerSlot !== 0) {
      writer.uint32(16).uint32(message.targetPlayerSlot);
    }
    if (message.cheatingConviction !== 0) {
      writer.uint32(24).int32(message.cheatingConviction);
    }
    if (message.griefingConviction !== 0) {
      writer.uint32(32).int32(message.griefingConviction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSubmitOWConviction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSubmitOWConviction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.overwatchReplayId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetPlayerSlot = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.cheatingConviction = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.griefingConviction = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSubmitOWConvictionResponse(): CMsgClientToGCSubmitOWConvictionResponse {
  return { result: 0, overwatchReplayId: "0" };
}

export const CMsgClientToGCSubmitOWConvictionResponse = {
  encode(message: CMsgClientToGCSubmitOWConvictionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.overwatchReplayId !== "0") {
      writer.uint32(16).uint64(message.overwatchReplayId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSubmitOWConvictionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSubmitOWConvictionResponse();
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
          if (tag != 16) {
            break;
          }

          message.overwatchReplayId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCChinaSSAURLRequest(): CMsgClientToGCChinaSSAURLRequest {
  return {};
}

export const CMsgClientToGCChinaSSAURLRequest = {
  encode(_: CMsgClientToGCChinaSSAURLRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCChinaSSAURLRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCChinaSSAURLRequest();
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

function createBaseCMsgClientToGCChinaSSAURLResponse(): CMsgClientToGCChinaSSAURLResponse {
  return { agreementUrl: "" };
}

export const CMsgClientToGCChinaSSAURLResponse = {
  encode(message: CMsgClientToGCChinaSSAURLResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agreementUrl !== "") {
      writer.uint32(10).string(message.agreementUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCChinaSSAURLResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCChinaSSAURLResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.agreementUrl = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCChinaSSAAcceptedRequest(): CMsgClientToGCChinaSSAAcceptedRequest {
  return {};
}

export const CMsgClientToGCChinaSSAAcceptedRequest = {
  encode(_: CMsgClientToGCChinaSSAAcceptedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCChinaSSAAcceptedRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCChinaSSAAcceptedRequest();
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

function createBaseCMsgClientToGCChinaSSAAcceptedResponse(): CMsgClientToGCChinaSSAAcceptedResponse {
  return { agreementAccepted: false };
}

export const CMsgClientToGCChinaSSAAcceptedResponse = {
  encode(message: CMsgClientToGCChinaSSAAcceptedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agreementAccepted === true) {
      writer.uint32(8).bool(message.agreementAccepted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCChinaSSAAcceptedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCChinaSSAAcceptedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.agreementAccepted = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientOverwatchCasesAvailable(): CMsgGCToClientOverwatchCasesAvailable {
  return { expireTime: 0 };
}

export const CMsgGCToClientOverwatchCasesAvailable = {
  encode(message: CMsgGCToClientOverwatchCasesAvailable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expireTime !== 0) {
      writer.uint32(13).fixed32(message.expireTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientOverwatchCasesAvailable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientOverwatchCasesAvailable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.expireTime = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCStartWatchingOverwatch(): CMsgClientToGCStartWatchingOverwatch {
  return { overwatchReplayId: "0", targetPlayerSlot: 0 };
}

export const CMsgClientToGCStartWatchingOverwatch = {
  encode(message: CMsgClientToGCStartWatchingOverwatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.overwatchReplayId !== "0") {
      writer.uint32(8).uint64(message.overwatchReplayId);
    }
    if (message.targetPlayerSlot !== 0) {
      writer.uint32(16).uint32(message.targetPlayerSlot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCStartWatchingOverwatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCStartWatchingOverwatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.overwatchReplayId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetPlayerSlot = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCStopWatchingOverwatch(): CMsgClientToGCStopWatchingOverwatch {
  return { overwatchReplayId: "0", targetPlayerSlot: 0 };
}

export const CMsgClientToGCStopWatchingOverwatch = {
  encode(message: CMsgClientToGCStopWatchingOverwatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.overwatchReplayId !== "0") {
      writer.uint32(8).uint64(message.overwatchReplayId);
    }
    if (message.targetPlayerSlot !== 0) {
      writer.uint32(16).uint32(message.targetPlayerSlot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCStopWatchingOverwatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCStopWatchingOverwatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.overwatchReplayId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetPlayerSlot = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCOverwatchReplayError(): CMsgClientToGCOverwatchReplayError {
  return { overwatchReplayId: "0" };
}

export const CMsgClientToGCOverwatchReplayError = {
  encode(message: CMsgClientToGCOverwatchReplayError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.overwatchReplayId !== "0") {
      writer.uint32(8).uint64(message.overwatchReplayId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCOverwatchReplayError {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCOverwatchReplayError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.overwatchReplayId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCGetDPCFavorites(): CMsgClientToGCGetDPCFavorites {
  return {};
}

export const CMsgClientToGCGetDPCFavorites = {
  encode(_: CMsgClientToGCGetDPCFavorites, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetDPCFavorites {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetDPCFavorites();
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

function createBaseCMsgClientToGCGetDPCFavoritesResponse(): CMsgClientToGCGetDPCFavoritesResponse {
  return { result: 0, favorites: [] };
}

export const CMsgClientToGCGetDPCFavoritesResponse = {
  encode(message: CMsgClientToGCGetDPCFavoritesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    for (const v of message.favorites) {
      CMsgClientToGCGetDPCFavoritesResponse_Favorite.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetDPCFavoritesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetDPCFavoritesResponse();
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

          message.favorites.push(CMsgClientToGCGetDPCFavoritesResponse_Favorite.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCGetDPCFavoritesResponse_Favorite(): CMsgClientToGCGetDPCFavoritesResponse_Favorite {
  return { favoriteType: 0, favoriteId: 0 };
}

export const CMsgClientToGCGetDPCFavoritesResponse_Favorite = {
  encode(
    message: CMsgClientToGCGetDPCFavoritesResponse_Favorite,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.favoriteType !== 0) {
      writer.uint32(8).int32(message.favoriteType);
    }
    if (message.favoriteId !== 0) {
      writer.uint32(16).uint32(message.favoriteId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetDPCFavoritesResponse_Favorite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetDPCFavoritesResponse_Favorite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.favoriteType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.favoriteId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSetDPCFavoriteState(): CMsgClientToGCSetDPCFavoriteState {
  return { favoriteType: 0, favoriteId: 0, enabled: false };
}

export const CMsgClientToGCSetDPCFavoriteState = {
  encode(message: CMsgClientToGCSetDPCFavoriteState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.favoriteType !== 0) {
      writer.uint32(8).int32(message.favoriteType);
    }
    if (message.favoriteId !== 0) {
      writer.uint32(16).uint32(message.favoriteId);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetDPCFavoriteState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetDPCFavoriteState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.favoriteType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.favoriteId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.enabled = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSetDPCFavoriteStateResponse(): CMsgClientToGCSetDPCFavoriteStateResponse {
  return { result: 0 };
}

export const CMsgClientToGCSetDPCFavoriteStateResponse = {
  encode(message: CMsgClientToGCSetDPCFavoriteStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetDPCFavoriteStateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetDPCFavoriteStateResponse();
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

function createBaseCMsgClientToGCSetEventActiveSeasonID(): CMsgClientToGCSetEventActiveSeasonID {
  return { eventId: 0, activeSeasonId: 0 };
}

export const CMsgClientToGCSetEventActiveSeasonID = {
  encode(message: CMsgClientToGCSetEventActiveSeasonID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.activeSeasonId !== 0) {
      writer.uint32(16).uint32(message.activeSeasonId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetEventActiveSeasonID {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetEventActiveSeasonID();
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

          message.activeSeasonId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSetEventActiveSeasonIDResponse(): CMsgClientToGCSetEventActiveSeasonIDResponse {
  return { result: 0 };
}

export const CMsgClientToGCSetEventActiveSeasonIDResponse = {
  encode(message: CMsgClientToGCSetEventActiveSeasonIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetEventActiveSeasonIDResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetEventActiveSeasonIDResponse();
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

function createBaseCMsgClientToGCPurchaseLabyrinthBlessings(): CMsgClientToGCPurchaseLabyrinthBlessings {
  return { eventId: 0, blessingIds: [], debug: false, debugRemove: false };
}

export const CMsgClientToGCPurchaseLabyrinthBlessings = {
  encode(message: CMsgClientToGCPurchaseLabyrinthBlessings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    writer.uint32(18).fork();
    for (const v of message.blessingIds) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.debug === true) {
      writer.uint32(24).bool(message.debug);
    }
    if (message.debugRemove === true) {
      writer.uint32(32).bool(message.debugRemove);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCPurchaseLabyrinthBlessings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCPurchaseLabyrinthBlessings();
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
          if (tag == 16) {
            message.blessingIds.push(reader.int32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.blessingIds.push(reader.int32());
            }

            continue;
          }

          break;
        case 3:
          if (tag != 24) {
            break;
          }

          message.debug = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.debugRemove = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCPurchaseLabyrinthBlessingsResponse(): CMsgClientToGCPurchaseLabyrinthBlessingsResponse {
  return { result: 0 };
}

export const CMsgClientToGCPurchaseLabyrinthBlessingsResponse = {
  encode(
    message: CMsgClientToGCPurchaseLabyrinthBlessingsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCPurchaseLabyrinthBlessingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCPurchaseLabyrinthBlessingsResponse();
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

function createBaseCMsgClientToGCGetStickerbookRequest(): CMsgClientToGCGetStickerbookRequest {
  return { accountId: 0 };
}

export const CMsgClientToGCGetStickerbookRequest = {
  encode(message: CMsgClientToGCGetStickerbookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetStickerbookRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetStickerbookRequest();
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
};

function createBaseCMsgClientToGCGetStickerbookResponse(): CMsgClientToGCGetStickerbookResponse {
  return { response: 0, stickerbook: undefined };
}

export const CMsgClientToGCGetStickerbookResponse = {
  encode(message: CMsgClientToGCGetStickerbookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    if (message.stickerbook !== undefined) {
      CMsgStickerbook.encode(message.stickerbook, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetStickerbookResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetStickerbookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.stickerbook = CMsgStickerbook.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCreateStickerbookPageRequest(): CMsgClientToGCCreateStickerbookPageRequest {
  return { teamId: 0, eventId: 0, pageType: 0 };
}

export const CMsgClientToGCCreateStickerbookPageRequest = {
  encode(message: CMsgClientToGCCreateStickerbookPageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).uint32(message.teamId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    if (message.pageType !== 0) {
      writer.uint32(24).int32(message.pageType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCreateStickerbookPageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCreateStickerbookPageRequest();
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

          message.eventId = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
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

function createBaseCMsgClientToGCCreateStickerbookPageResponse(): CMsgClientToGCCreateStickerbookPageResponse {
  return { response: 0, pageNumber: 0 };
}

export const CMsgClientToGCCreateStickerbookPageResponse = {
  encode(message: CMsgClientToGCCreateStickerbookPageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    if (message.pageNumber !== 0) {
      writer.uint32(16).uint32(message.pageNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCreateStickerbookPageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCreateStickerbookPageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.pageNumber = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCDeleteStickerbookPageRequest(): CMsgClientToGCDeleteStickerbookPageRequest {
  return { pageNum: 0, stickerCount: 0, stickerMax: 0 };
}

export const CMsgClientToGCDeleteStickerbookPageRequest = {
  encode(message: CMsgClientToGCDeleteStickerbookPageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageNum !== 0) {
      writer.uint32(8).uint32(message.pageNum);
    }
    if (message.stickerCount !== 0) {
      writer.uint32(16).uint32(message.stickerCount);
    }
    if (message.stickerMax !== 0) {
      writer.uint32(24).uint32(message.stickerMax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCDeleteStickerbookPageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCDeleteStickerbookPageRequest();
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

          message.stickerCount = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.stickerMax = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCDeleteStickerbookPageResponse(): CMsgClientToGCDeleteStickerbookPageResponse {
  return { response: 0 };
}

export const CMsgClientToGCDeleteStickerbookPageResponse = {
  encode(message: CMsgClientToGCDeleteStickerbookPageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCDeleteStickerbookPageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCDeleteStickerbookPageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCPlaceStickersRequest(): CMsgClientToGCPlaceStickersRequest {
  return { stickerItems: [] };
}

export const CMsgClientToGCPlaceStickersRequest = {
  encode(message: CMsgClientToGCPlaceStickersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stickerItems) {
      CMsgClientToGCPlaceStickersRequest_StickerItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCPlaceStickersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCPlaceStickersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.stickerItems.push(CMsgClientToGCPlaceStickersRequest_StickerItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCPlaceStickersRequest_StickerItem(): CMsgClientToGCPlaceStickersRequest_StickerItem {
  return { pageNum: 0, sticker: undefined };
}

export const CMsgClientToGCPlaceStickersRequest_StickerItem = {
  encode(
    message: CMsgClientToGCPlaceStickersRequest_StickerItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pageNum !== 0) {
      writer.uint32(16).uint32(message.pageNum);
    }
    if (message.sticker !== undefined) {
      CMsgStickerbookSticker.encode(message.sticker, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCPlaceStickersRequest_StickerItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCPlaceStickersRequest_StickerItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.pageNum = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.sticker = CMsgStickerbookSticker.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCPlaceStickersResponse(): CMsgClientToGCPlaceStickersResponse {
  return { response: 0 };
}

export const CMsgClientToGCPlaceStickersResponse = {
  encode(message: CMsgClientToGCPlaceStickersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCPlaceStickersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCPlaceStickersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCPlaceCollectionStickersRequest(): CMsgClientToGCPlaceCollectionStickersRequest {
  return { slots: [] };
}

export const CMsgClientToGCPlaceCollectionStickersRequest = {
  encode(message: CMsgClientToGCPlaceCollectionStickersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.slots) {
      CMsgClientToGCPlaceCollectionStickersRequest_Slot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCPlaceCollectionStickersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCPlaceCollectionStickersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.slots.push(CMsgClientToGCPlaceCollectionStickersRequest_Slot.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCPlaceCollectionStickersRequest_Slot(): CMsgClientToGCPlaceCollectionStickersRequest_Slot {
  return { pageNum: 0, slot: 0, newItemId: "0", oldItemDefId: 0, oldQuality: 0 };
}

export const CMsgClientToGCPlaceCollectionStickersRequest_Slot = {
  encode(
    message: CMsgClientToGCPlaceCollectionStickersRequest_Slot,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pageNum !== 0) {
      writer.uint32(8).uint32(message.pageNum);
    }
    if (message.slot !== 0) {
      writer.uint32(16).uint32(message.slot);
    }
    if (message.newItemId !== "0") {
      writer.uint32(24).uint64(message.newItemId);
    }
    if (message.oldItemDefId !== 0) {
      writer.uint32(32).uint32(message.oldItemDefId);
    }
    if (message.oldQuality !== 0) {
      writer.uint32(40).uint32(message.oldQuality);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCPlaceCollectionStickersRequest_Slot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCPlaceCollectionStickersRequest_Slot();
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

          message.slot = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.newItemId = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.oldItemDefId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.oldQuality = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCPlaceCollectionStickersResponse(): CMsgClientToGCPlaceCollectionStickersResponse {
  return { response: 0 };
}

export const CMsgClientToGCPlaceCollectionStickersResponse = {
  encode(message: CMsgClientToGCPlaceCollectionStickersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCPlaceCollectionStickersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCPlaceCollectionStickersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCOrderStickerbookTeamPageRequest(): CMsgClientToGCOrderStickerbookTeamPageRequest {
  return { pageOrderSequence: undefined };
}

export const CMsgClientToGCOrderStickerbookTeamPageRequest = {
  encode(message: CMsgClientToGCOrderStickerbookTeamPageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageOrderSequence !== undefined) {
      CMsgStickerbookTeamPageOrderSequence.encode(message.pageOrderSequence, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCOrderStickerbookTeamPageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCOrderStickerbookTeamPageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pageOrderSequence = CMsgStickerbookTeamPageOrderSequence.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCOrderStickerbookTeamPageResponse(): CMsgClientToGCOrderStickerbookTeamPageResponse {
  return { response: 0 };
}

export const CMsgClientToGCOrderStickerbookTeamPageResponse = {
  encode(
    message: CMsgClientToGCOrderStickerbookTeamPageResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCOrderStickerbookTeamPageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCOrderStickerbookTeamPageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSetHeroSticker(): CMsgClientToGCSetHeroSticker {
  return { heroId: 0, newItemId: "0", oldItemId: "0" };
}

export const CMsgClientToGCSetHeroSticker = {
  encode(message: CMsgClientToGCSetHeroSticker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.newItemId !== "0") {
      writer.uint32(16).uint64(message.newItemId);
    }
    if (message.oldItemId !== "0") {
      writer.uint32(24).uint64(message.oldItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetHeroSticker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetHeroSticker();
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

          message.newItemId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.oldItemId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSetHeroStickerResponse(): CMsgClientToGCSetHeroStickerResponse {
  return { response: 0 };
}

export const CMsgClientToGCSetHeroStickerResponse = {
  encode(message: CMsgClientToGCSetHeroStickerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetHeroStickerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetHeroStickerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCGetHeroStickers(): CMsgClientToGCGetHeroStickers {
  return {};
}

export const CMsgClientToGCGetHeroStickers = {
  encode(_: CMsgClientToGCGetHeroStickers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetHeroStickers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetHeroStickers();
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

function createBaseCMsgClientToGCGetHeroStickersResponse(): CMsgClientToGCGetHeroStickersResponse {
  return { response: 0, stickerHeroes: undefined };
}

export const CMsgClientToGCGetHeroStickersResponse = {
  encode(message: CMsgClientToGCGetHeroStickersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    if (message.stickerHeroes !== undefined) {
      CMsgStickerHeroes.encode(message.stickerHeroes, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetHeroStickersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetHeroStickersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.stickerHeroes = CMsgStickerHeroes.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSetFavoritePage(): CMsgClientToGCSetFavoritePage {
  return { pageNum: 0, clear: false };
}

export const CMsgClientToGCSetFavoritePage = {
  encode(message: CMsgClientToGCSetFavoritePage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageNum !== 0) {
      writer.uint32(8).uint32(message.pageNum);
    }
    if (message.clear === true) {
      writer.uint32(16).bool(message.clear);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetFavoritePage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetFavoritePage();
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

          message.clear = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCSetFavoritePageResponse(): CMsgClientToGCSetFavoritePageResponse {
  return { response: 0 };
}

export const CMsgClientToGCSetFavoritePageResponse = {
  encode(message: CMsgClientToGCSetFavoritePageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCSetFavoritePageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSetFavoritePageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCClaimSwag(): CMsgClientToGCClaimSwag {
  return { eventId: 0, actionId: 0, data: 0 };
}

export const CMsgClientToGCClaimSwag = {
  encode(message: CMsgClientToGCClaimSwag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.actionId !== 0) {
      writer.uint32(16).uint32(message.actionId);
    }
    if (message.data !== 0) {
      writer.uint32(24).uint32(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCClaimSwag {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCClaimSwag();
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

          message.data = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCClaimSwagResponse(): CMsgClientToGCClaimSwagResponse {
  return { response: 0 };
}

export const CMsgClientToGCClaimSwagResponse = {
  encode(message: CMsgClientToGCClaimSwagResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCClaimSwagResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCClaimSwagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCCollectorsCacheAvailableDataRequest(): CMsgClientToGCCollectorsCacheAvailableDataRequest {
  return { contestId: 0 };
}

export const CMsgClientToGCCollectorsCacheAvailableDataRequest = {
  encode(
    message: CMsgClientToGCCollectorsCacheAvailableDataRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.contestId !== 0) {
      writer.uint32(8).uint32(message.contestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCCollectorsCacheAvailableDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCCollectorsCacheAvailableDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.contestId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientCollectorsCacheAvailableDataResponse(): CMsgGCToClientCollectorsCacheAvailableDataResponse {
  return { votes: [] };
}

export const CMsgGCToClientCollectorsCacheAvailableDataResponse = {
  encode(
    message: CMsgGCToClientCollectorsCacheAvailableDataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.votes) {
      CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientCollectorsCacheAvailableDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientCollectorsCacheAvailableDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.votes.push(CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientCollectorsCacheAvailableDataResponse_Vote(): CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote {
  return { itemDef: 0, voteType: 0 };
}

export const CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote = {
  encode(
    message: CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.itemDef !== 0) {
      writer.uint32(8).uint32(message.itemDef);
    }
    if (message.voteType !== 0) {
      writer.uint32(16).int32(message.voteType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientCollectorsCacheAvailableDataResponse_Vote();
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

          message.voteType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCUploadMatchClip(): CMsgClientToGCUploadMatchClip {
  return { matchClip: undefined };
}

export const CMsgClientToGCUploadMatchClip = {
  encode(message: CMsgClientToGCUploadMatchClip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchClip !== undefined) {
      CMatchClip.encode(message.matchClip, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCUploadMatchClip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCUploadMatchClip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.matchClip = CMatchClip.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgGCToClientUploadMatchClipResponse(): CMsgGCToClientUploadMatchClipResponse {
  return { response: 0 };
}

export const CMsgGCToClientUploadMatchClipResponse = {
  encode(message: CMsgGCToClientUploadMatchClipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientUploadMatchClipResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientUploadMatchClipResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgClientToGCMapStatsRequest(): CMsgClientToGCMapStatsRequest {
  return {};
}

export const CMsgClientToGCMapStatsRequest = {
  encode(_: CMsgClientToGCMapStatsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCMapStatsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCMapStatsRequest();
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

function createBaseCMsgGCToClientMapStatsResponse(): CMsgGCToClientMapStatsResponse {
  return { response: 0, personalStats: undefined, globalStats: undefined };
}

export const CMsgGCToClientMapStatsResponse = {
  encode(message: CMsgGCToClientMapStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    if (message.personalStats !== undefined) {
      CMsgMapStatsSnapshot.encode(message.personalStats, writer.uint32(18).fork()).ldelim();
    }
    if (message.globalStats !== undefined) {
      CMsgGlobalMapStats.encode(message.globalStats, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientMapStatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientMapStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.personalStats = CMsgMapStatsSnapshot.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.globalStats = CMsgGlobalMapStats.decode(reader, reader.uint32());
          continue;
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
