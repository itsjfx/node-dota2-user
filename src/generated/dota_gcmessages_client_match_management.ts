/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgClientPingData } from "./base_gcmessages";
import { EDOTAGroupMergeResult, eDOTAGroupMergeResultFromJSON, eDOTAGroupMergeResultToJSON } from "./dota_client_enums";
import {
  CLobbyTeamDetails,
  LobbyDotaPauseSetting,
  lobbyDotaPauseSettingFromJSON,
  lobbyDotaPauseSettingToJSON,
  LobbyDotaTVDelay,
  lobbyDotaTVDelayFromJSON,
  lobbyDotaTVDelayToJSON,
} from "./dota_gcmessages_common_lobby";
import {
  CDOTAClientHardwareSpecs,
  DOTABotDifficulty,
  dOTABotDifficultyFromJSON,
  dOTABotDifficultyToJSON,
  dotaCmPick,
  dotaCmPickFromJSON,
  dotaCmPickToJSON,
  DOTAGameMode,
  dOTAGameModeFromJSON,
  dOTAGameModeToJSON,
  dotaGcTeam,
  dotaGcTeamFromJSON,
  dotaGcTeamToJSON,
  DOTAJoinLobbyResult,
  dOTAJoinLobbyResultFromJSON,
  dOTAJoinLobbyResultToJSON,
  DOTALobbyReadyState,
  dOTALobbyReadyStateFromJSON,
  dOTALobbyReadyStateToJSON,
  DOTALobbyVisibility,
  dOTALobbyVisibilityFromJSON,
  dOTALobbyVisibilityToJSON,
  DOTASelectionPriorityRules,
  dOTASelectionPriorityRulesFromJSON,
  dOTASelectionPriorityRulesToJSON,
  MatchLanguages,
  matchLanguagesFromJSON,
  matchLanguagesToJSON,
  MatchType,
  matchTypeFromJSON,
  matchTypeToJSON,
} from "./dota_shared_enums";

export enum EStartFindingMatchResult {
  k_EStartFindingMatchResult_Invalid = 0,
  k_EStartFindingMatchResult_OK = 1,
  k_EStartFindingMatchResult_AlreadySearching = 2,
  k_EStartFindingMatchResult_FailGeneric = 100,
  k_EStartFindingMatchResult_FailedIgnore = 101,
  k_EStartFindingMatchResult_MatchmakingDisabled = 102,
  k_EStartFindingMatchResult_RegionOffline = 103,
  k_EStartFindingMatchResult_MatchmakingCooldown = 104,
  k_EStartFindingMatchResult_ClientOutOfDate = 105,
  k_EStartFindingMatchResult_CompetitiveNoLowPriority = 106,
  k_EStartFindingMatchResult_CompetitiveNotUnlocked = 107,
  k_EStartFindingMatchResult_GameModeNotUnlocked = 108,
  k_EStartFindingMatchResult_CompetitiveNotEnoughPlayTime = 109,
  k_EStartFindingMatchResult_MissingInitialSkill = 110,
  k_EStartFindingMatchResult_CompetitiveRankSpreadTooLarge = 111,
  k_EStartFindingMatchResult_MemberAlreadyInLobby = 112,
  k_EStartFindingMatchResult_MemberNotVACVerified = 113,
  k_EStartFindingMatchResult_WeekendTourneyBadPartySize = 114,
  k_EStartFindingMatchResult_WeekendTourneyTeamBuyInTooSmall = 115,
  k_EStartFindingMatchResult_WeekendTourneyIndividualBuyInTooLarge = 116,
  k_EStartFindingMatchResult_WeekendTourneyTeamBuyInTooLarge = 117,
  k_EStartFindingMatchResult_MemberMissingEventOwnership = 118,
  k_EStartFindingMatchResult_WeekendTourneyNotUnlocked = 119,
  k_EStartFindingMatchResult_WeekendTourneyRecentParticipation = 120,
  k_EStartFindingMatchResult_MemberMissingAnchoredPhoneNumber = 121,
  k_EStartFindingMatchResult_NotMemberOfClan = 122,
  k_EStartFindingMatchResult_CoachesChallengeBadPartySize = 123,
  k_EStartFindingMatchResult_CoachesChallengeRequirementsNotMet = 124,
  k_EStartFindingMatchResult_InvalidRoleSelections = 125,
  k_EStartFindingMatchResult_PhoneNumberDiscrepancy = 126,
  k_EStartFindingMatchResult_NoQueuePoints = 127,
  k_EStartFindingMatchResult_MemberMissingGauntletFlag = 128,
  k_EStartFindingMatchResult_MemberGauntletTooRecent = 129,
  k_EStartFindingMatchResult_DifficultyNotUnlocked = 130,
  k_EStartFindingMatchResult_CoachesNotAllowedInParty = 131,
  k_EStartFindingMatchResult_MatchmakingBusy = 132,
  k_EStartFindingMatchResult_SteamChinaBanned = 133,
  k_EStartFindingMatchResult_SteamChinaInvalidMixedParty = 134,
}

export function eStartFindingMatchResultFromJSON(object: any): EStartFindingMatchResult {
  switch (object) {
    case 0:
    case "k_EStartFindingMatchResult_Invalid":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_Invalid;
    case 1:
    case "k_EStartFindingMatchResult_OK":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_OK;
    case 2:
    case "k_EStartFindingMatchResult_AlreadySearching":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_AlreadySearching;
    case 100:
    case "k_EStartFindingMatchResult_FailGeneric":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_FailGeneric;
    case 101:
    case "k_EStartFindingMatchResult_FailedIgnore":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_FailedIgnore;
    case 102:
    case "k_EStartFindingMatchResult_MatchmakingDisabled":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_MatchmakingDisabled;
    case 103:
    case "k_EStartFindingMatchResult_RegionOffline":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_RegionOffline;
    case 104:
    case "k_EStartFindingMatchResult_MatchmakingCooldown":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_MatchmakingCooldown;
    case 105:
    case "k_EStartFindingMatchResult_ClientOutOfDate":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_ClientOutOfDate;
    case 106:
    case "k_EStartFindingMatchResult_CompetitiveNoLowPriority":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_CompetitiveNoLowPriority;
    case 107:
    case "k_EStartFindingMatchResult_CompetitiveNotUnlocked":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_CompetitiveNotUnlocked;
    case 108:
    case "k_EStartFindingMatchResult_GameModeNotUnlocked":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_GameModeNotUnlocked;
    case 109:
    case "k_EStartFindingMatchResult_CompetitiveNotEnoughPlayTime":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_CompetitiveNotEnoughPlayTime;
    case 110:
    case "k_EStartFindingMatchResult_MissingInitialSkill":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_MissingInitialSkill;
    case 111:
    case "k_EStartFindingMatchResult_CompetitiveRankSpreadTooLarge":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_CompetitiveRankSpreadTooLarge;
    case 112:
    case "k_EStartFindingMatchResult_MemberAlreadyInLobby":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_MemberAlreadyInLobby;
    case 113:
    case "k_EStartFindingMatchResult_MemberNotVACVerified":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_MemberNotVACVerified;
    case 114:
    case "k_EStartFindingMatchResult_WeekendTourneyBadPartySize":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_WeekendTourneyBadPartySize;
    case 115:
    case "k_EStartFindingMatchResult_WeekendTourneyTeamBuyInTooSmall":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_WeekendTourneyTeamBuyInTooSmall;
    case 116:
    case "k_EStartFindingMatchResult_WeekendTourneyIndividualBuyInTooLarge":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_WeekendTourneyIndividualBuyInTooLarge;
    case 117:
    case "k_EStartFindingMatchResult_WeekendTourneyTeamBuyInTooLarge":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_WeekendTourneyTeamBuyInTooLarge;
    case 118:
    case "k_EStartFindingMatchResult_MemberMissingEventOwnership":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_MemberMissingEventOwnership;
    case 119:
    case "k_EStartFindingMatchResult_WeekendTourneyNotUnlocked":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_WeekendTourneyNotUnlocked;
    case 120:
    case "k_EStartFindingMatchResult_WeekendTourneyRecentParticipation":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_WeekendTourneyRecentParticipation;
    case 121:
    case "k_EStartFindingMatchResult_MemberMissingAnchoredPhoneNumber":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_MemberMissingAnchoredPhoneNumber;
    case 122:
    case "k_EStartFindingMatchResult_NotMemberOfClan":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_NotMemberOfClan;
    case 123:
    case "k_EStartFindingMatchResult_CoachesChallengeBadPartySize":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_CoachesChallengeBadPartySize;
    case 124:
    case "k_EStartFindingMatchResult_CoachesChallengeRequirementsNotMet":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_CoachesChallengeRequirementsNotMet;
    case 125:
    case "k_EStartFindingMatchResult_InvalidRoleSelections":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_InvalidRoleSelections;
    case 126:
    case "k_EStartFindingMatchResult_PhoneNumberDiscrepancy":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_PhoneNumberDiscrepancy;
    case 127:
    case "k_EStartFindingMatchResult_NoQueuePoints":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_NoQueuePoints;
    case 128:
    case "k_EStartFindingMatchResult_MemberMissingGauntletFlag":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_MemberMissingGauntletFlag;
    case 129:
    case "k_EStartFindingMatchResult_MemberGauntletTooRecent":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_MemberGauntletTooRecent;
    case 130:
    case "k_EStartFindingMatchResult_DifficultyNotUnlocked":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_DifficultyNotUnlocked;
    case 131:
    case "k_EStartFindingMatchResult_CoachesNotAllowedInParty":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_CoachesNotAllowedInParty;
    case 132:
    case "k_EStartFindingMatchResult_MatchmakingBusy":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_MatchmakingBusy;
    case 133:
    case "k_EStartFindingMatchResult_SteamChinaBanned":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_SteamChinaBanned;
    case 134:
    case "k_EStartFindingMatchResult_SteamChinaInvalidMixedParty":
      return EStartFindingMatchResult.k_EStartFindingMatchResult_SteamChinaInvalidMixedParty;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EStartFindingMatchResult");
  }
}

export function eStartFindingMatchResultToJSON(object: EStartFindingMatchResult): string {
  switch (object) {
    case EStartFindingMatchResult.k_EStartFindingMatchResult_Invalid:
      return "k_EStartFindingMatchResult_Invalid";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_OK:
      return "k_EStartFindingMatchResult_OK";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_AlreadySearching:
      return "k_EStartFindingMatchResult_AlreadySearching";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_FailGeneric:
      return "k_EStartFindingMatchResult_FailGeneric";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_FailedIgnore:
      return "k_EStartFindingMatchResult_FailedIgnore";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_MatchmakingDisabled:
      return "k_EStartFindingMatchResult_MatchmakingDisabled";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_RegionOffline:
      return "k_EStartFindingMatchResult_RegionOffline";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_MatchmakingCooldown:
      return "k_EStartFindingMatchResult_MatchmakingCooldown";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_ClientOutOfDate:
      return "k_EStartFindingMatchResult_ClientOutOfDate";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_CompetitiveNoLowPriority:
      return "k_EStartFindingMatchResult_CompetitiveNoLowPriority";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_CompetitiveNotUnlocked:
      return "k_EStartFindingMatchResult_CompetitiveNotUnlocked";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_GameModeNotUnlocked:
      return "k_EStartFindingMatchResult_GameModeNotUnlocked";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_CompetitiveNotEnoughPlayTime:
      return "k_EStartFindingMatchResult_CompetitiveNotEnoughPlayTime";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_MissingInitialSkill:
      return "k_EStartFindingMatchResult_MissingInitialSkill";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_CompetitiveRankSpreadTooLarge:
      return "k_EStartFindingMatchResult_CompetitiveRankSpreadTooLarge";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_MemberAlreadyInLobby:
      return "k_EStartFindingMatchResult_MemberAlreadyInLobby";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_MemberNotVACVerified:
      return "k_EStartFindingMatchResult_MemberNotVACVerified";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_WeekendTourneyBadPartySize:
      return "k_EStartFindingMatchResult_WeekendTourneyBadPartySize";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_WeekendTourneyTeamBuyInTooSmall:
      return "k_EStartFindingMatchResult_WeekendTourneyTeamBuyInTooSmall";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_WeekendTourneyIndividualBuyInTooLarge:
      return "k_EStartFindingMatchResult_WeekendTourneyIndividualBuyInTooLarge";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_WeekendTourneyTeamBuyInTooLarge:
      return "k_EStartFindingMatchResult_WeekendTourneyTeamBuyInTooLarge";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_MemberMissingEventOwnership:
      return "k_EStartFindingMatchResult_MemberMissingEventOwnership";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_WeekendTourneyNotUnlocked:
      return "k_EStartFindingMatchResult_WeekendTourneyNotUnlocked";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_WeekendTourneyRecentParticipation:
      return "k_EStartFindingMatchResult_WeekendTourneyRecentParticipation";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_MemberMissingAnchoredPhoneNumber:
      return "k_EStartFindingMatchResult_MemberMissingAnchoredPhoneNumber";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_NotMemberOfClan:
      return "k_EStartFindingMatchResult_NotMemberOfClan";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_CoachesChallengeBadPartySize:
      return "k_EStartFindingMatchResult_CoachesChallengeBadPartySize";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_CoachesChallengeRequirementsNotMet:
      return "k_EStartFindingMatchResult_CoachesChallengeRequirementsNotMet";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_InvalidRoleSelections:
      return "k_EStartFindingMatchResult_InvalidRoleSelections";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_PhoneNumberDiscrepancy:
      return "k_EStartFindingMatchResult_PhoneNumberDiscrepancy";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_NoQueuePoints:
      return "k_EStartFindingMatchResult_NoQueuePoints";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_MemberMissingGauntletFlag:
      return "k_EStartFindingMatchResult_MemberMissingGauntletFlag";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_MemberGauntletTooRecent:
      return "k_EStartFindingMatchResult_MemberGauntletTooRecent";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_DifficultyNotUnlocked:
      return "k_EStartFindingMatchResult_DifficultyNotUnlocked";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_CoachesNotAllowedInParty:
      return "k_EStartFindingMatchResult_CoachesNotAllowedInParty";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_MatchmakingBusy:
      return "k_EStartFindingMatchResult_MatchmakingBusy";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_SteamChinaBanned:
      return "k_EStartFindingMatchResult_SteamChinaBanned";
    case EStartFindingMatchResult.k_EStartFindingMatchResult_SteamChinaInvalidMixedParty:
      return "k_EStartFindingMatchResult_SteamChinaInvalidMixedParty";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EStartFindingMatchResult");
  }
}

export interface CMsgStartFindingMatch {
  key: string;
  matchgroups: number;
  clientVersion: number;
  gameModes: number;
  matchType: MatchType;
  matchlanguages: number;
  teamId: number;
  gameLanguageEnum: MatchLanguages;
  gameLanguageName: string;
  pingData: CMsgClientPingData | undefined;
  regionSelectFlags: number;
  soloQueue: boolean;
  steamClanAccountId: number;
  isChallengeMatch: boolean;
  laneSelectionFlags: number;
  highPriorityDisabled: boolean;
  disableExperimentalGameplay: boolean;
  customGameDifficultyMask: number;
  botDifficultyMask: number;
  botScriptIndexMask: number;
}

export interface CMsgStartFindingMatchResult {
  legacyGenericEresult: number;
  result: EStartFindingMatchResult;
  errorToken: string;
  debugMessage: string;
  responsiblePartyMembers: string[];
  resultMetadata: number;
}

export interface CMsgStopFindingMatch {
  acceptCooldown: boolean;
}

export interface CMsgPartyBuilderOptions {
  additionalSlots: number;
  matchType: MatchType;
  matchgroups: number;
  clientVersion: number;
  language: MatchLanguages;
}

export interface CMsgReadyUp {
  state: DOTALobbyReadyState;
  readyUpKey: string;
  hardwareSpecs: CDOTAClientHardwareSpecs | undefined;
}

export interface CMsgReadyUpStatus {
  lobbyId: string;
  acceptedIds: number[];
  declinedIds: number[];
}

export interface CMsgAbandonCurrentGame {
}

export interface CMsgLobbyScenarioSave {
  version: number;
  data: Buffer;
}

export interface CMsgPracticeLobbySetDetails {
  lobbyId: string;
  gameName: string;
  teamDetails: CLobbyTeamDetails[];
  serverRegion: number;
  gameMode: number;
  cmPick: dotaCmPick;
  botDifficultyRadiant: DOTABotDifficulty;
  allowCheats: boolean;
  fillWithBots: boolean;
  introMode: boolean;
  allowSpectating: boolean;
  passKey: string;
  leagueid: number;
  penaltyLevelRadiant: number;
  penaltyLevelDire: number;
  loadGameId: number;
  seriesType: number;
  radiantSeriesWins: number;
  direSeriesWins: number;
  allchat: boolean;
  dotaTvDelay: LobbyDotaTVDelay;
  lan: boolean;
  customGameMode: string;
  customMapName: string;
  customDifficulty: number;
  customGameId: string;
  customMinPlayers: number;
  customMaxPlayers: number;
  visibility: DOTALobbyVisibility;
  customGameCrc: string;
  customGameTimestamp: number;
  previousMatchOverride: string;
  pauseSetting: LobbyDotaPauseSetting;
  botDifficultyDire: DOTABotDifficulty;
  botRadiant: string;
  botDire: string;
  selectionPriorityRules: DOTASelectionPriorityRules;
  customGamePenalties: boolean;
  lanHostPingLocation: string;
  leagueNodeId: number;
  requestedHeroIds: number[];
  scenarioSave: CMsgLobbyScenarioSave | undefined;
  abilityDraftSpecificDetails: CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails | undefined;
  doPlayerDraft: boolean;
}

export interface CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails {
  shuffleDraftOrder: boolean;
}

export interface CMsgPracticeLobbyCreate {
  searchKey: string;
  passKey: string;
  clientVersion: number;
  lobbyDetails: CMsgPracticeLobbySetDetails | undefined;
  saveGame: CMsgPracticeLobbyCreate_SaveGame | undefined;
}

export interface CMsgPracticeLobbyCreate_SaveGame {
  data: Buffer;
  version: number;
  steamId: string;
  signature: string;
}

export interface CMsgPracticeLobbySetTeamSlot {
  team: dotaGcTeam;
  slot: number;
  botDifficulty: DOTABotDifficulty;
}

export interface CMsgPracticeLobbySetCoach {
  team: dotaGcTeam;
}

export interface CMsgPracticeLobbyJoinBroadcastChannel {
  channel: number;
  preferredDescription: string;
  preferredCountryCode: string;
  preferredLanguageCode: string;
}

export interface CMsgPracticeLobbyCloseBroadcastChannel {
  channel: number;
}

export interface CMsgPracticeLobbyToggleBroadcastChannelCameramanStatus {
}

export interface CMsgPracticeLobbyKick {
  accountId: number;
}

export interface CMsgPracticeLobbyKickFromTeam {
  accountId: number;
}

export interface CMsgPracticeLobbyLeave {
}

export interface CMsgPracticeLobbyLaunch {
  clientVersion: number;
}

export interface CMsgApplyTeamToPracticeLobby {
  teamId: number;
}

export interface CMsgPracticeLobbyList {
  passKey: string;
  region: number;
  gameMode: DOTAGameMode;
}

export interface CMsgPracticeLobbyListResponseEntry {
  id: string;
  members: CMsgPracticeLobbyListResponseEntry_CLobbyMember[];
  requiresPassKey: boolean;
  leaderAccountId: number;
  name: string;
  customGameMode: string;
  gameMode: DOTAGameMode;
  friendPresent: boolean;
  players: number;
  customMapName: string;
  maxPlayerCount: number;
  serverRegion: number;
  leagueId: number;
  lanHostPingLocation: string;
  minPlayerCount: number;
  penaltiesEnabled: boolean;
}

export interface CMsgPracticeLobbyListResponseEntry_CLobbyMember {
  accountId: number;
  playerName: string;
}

export interface CMsgPracticeLobbyListResponse {
  lobbies: CMsgPracticeLobbyListResponseEntry[];
}

export interface CMsgLobbyList {
  serverRegion: number;
  gameMode: DOTAGameMode;
}

export interface CMsgLobbyListResponse {
  lobbies: CMsgPracticeLobbyListResponseEntry[];
}

export interface CMsgPracticeLobbyJoin {
  lobbyId: string;
  clientVersion: number;
  passKey: string;
  customGameCrc: string;
  customGameTimestamp: number;
}

export interface CMsgPracticeLobbyJoinResponse {
  result: DOTAJoinLobbyResult;
}

export interface CMsgFriendPracticeLobbyListRequest {
  friends: number[];
}

export interface CMsgFriendPracticeLobbyListResponse {
  lobbies: CMsgPracticeLobbyListResponseEntry[];
}

export interface CMsgJoinableCustomGameModesRequest {
  serverRegion: number;
}

export interface CMsgJoinableCustomGameModesResponseEntry {
  customGameId: string;
  lobbyCount: number;
  playerCount: number;
}

export interface CMsgJoinableCustomGameModesResponse {
  gameModes: CMsgJoinableCustomGameModesResponseEntry[];
}

export interface CMsgJoinableCustomLobbiesRequest {
  serverRegion: number;
  customGameId: string;
}

export interface CMsgJoinableCustomLobbiesResponseEntry {
  lobbyId: string;
  customGameId: string;
  lobbyName: string;
  memberCount: number;
  leaderAccountId: number;
  leaderName: string;
  customMapName: string;
  maxPlayerCount: number;
  serverRegion: number;
  hasPassKey: boolean;
  lanHostPingLocation: string;
  lobbyCreationTime: number;
  customGameTimestamp: number;
  customGameCrc: string;
  minPlayerCount: number;
  penaltiesEnabled: boolean;
}

export interface CMsgJoinableCustomLobbiesResponse {
  lobbies: CMsgJoinableCustomLobbiesResponseEntry[];
}

export interface CMsgQuickJoinCustomLobby {
  legacyServerRegion: number;
  customGameId: string;
  clientVersion: number;
  createLobbyDetails: CMsgPracticeLobbySetDetails | undefined;
  allowAnyMap: boolean;
  legacyRegionPings: CMsgQuickJoinCustomLobby_LegacyRegionPing[];
  pingData: CMsgClientPingData | undefined;
}

export interface CMsgQuickJoinCustomLobby_LegacyRegionPing {
  serverRegion: number;
  ping: number;
  regionCode: number;
}

export interface CMsgQuickJoinCustomLobbyResponse {
  result: DOTAJoinLobbyResult;
}

export interface CMsgBotGameCreate {
  searchKey: string;
  clientVersion: number;
  difficultyRadiant: DOTABotDifficulty;
  team: dotaGcTeam;
  gameMode: number;
  difficultyDire: DOTABotDifficulty;
}

export interface CMsgDOTAPartyMemberSetCoach {
  wantsCoach: boolean;
}

export interface CMsgDOTASetGroupLeader {
  newLeaderSteamid: string;
}

export interface CMsgDOTACancelGroupInvites {
  invitedSteamids: string[];
  invitedGroupids: string[];
}

export interface CMsgDOTASetGroupOpenStatus {
  open: boolean;
}

export interface CMsgDOTAGroupMergeInvite {
  otherGroupId: string;
}

export interface CMsgDOTAGroupMergeResponse {
  initiatorGroupId: string;
  accept: boolean;
}

export interface CMsgDOTAGroupMergeReply {
  result: EDOTAGroupMergeResult;
}

export interface CMsgSpectatorLobbyGameDetails {
  language: number;
  matchId: string;
  serverSteamId: string;
  streamUrl: string;
  streamName: string;
  leagueId: number;
  seriesType: number;
  seriesGame: number;
  radiantTeam: CMsgSpectatorLobbyGameDetails_Team | undefined;
  direTeam: CMsgSpectatorLobbyGameDetails_Team | undefined;
}

export interface CMsgSpectatorLobbyGameDetails_Team {
  teamId: number;
  teamName: string;
  teamLogo: string;
}

export interface CMsgSetSpectatorLobbyDetails {
  lobbyId: string;
  lobbyName: string;
  passKey: string;
  gameDetails: CMsgSpectatorLobbyGameDetails | undefined;
}

export interface CMsgCreateSpectatorLobby {
  clientVersion: number;
  details: CMsgSetSpectatorLobbyDetails | undefined;
}

export interface CMsgSpectatorLobbyList {
}

export interface CMsgSpectatorLobbyListResponse {
  lobbies: CMsgSpectatorLobbyListResponse_SpectatorLobby[];
}

export interface CMsgSpectatorLobbyListResponse_SpectatorLobby {
  lobbyId: string;
  gameName: string;
  requiresPassKey: boolean;
  leaderAccountId: number;
  memberCount: number;
  gameDetails: CMsgSpectatorLobbyGameDetails | undefined;
}

export interface CMsgClientToGCRequestSteamDatagramTicket {
  serverSteamId: string;
}

export interface CMsgClientToGCRequestSteamDatagramTicketResponse {
  serializedTicket: Buffer;
  message: string;
}

export interface CMsgGCToClientSteamDatagramTicket {
  legacyTimeExpiry: number;
  legacyAuthorizedSteamId: string;
  legacyAuthorizedPublicIp: number;
  legacyGameserverSteamId: string;
  legacyGameserverNetId: string;
  legacySignature: Buffer;
  legacyAppId: number;
  legacyExtraFields: Buffer[];
  serializedTicket: Buffer;
}

export interface CMsgGCToClientRequestLaneSelection {
}

export interface CMsgGCToClientRequestLaneSelectionResponse {
  laneSelectionFlags: number;
  highPriorityDisabled: boolean;
}

export interface CMsgGCToClientRequestMMInfo {
}

export interface CMsgClientToGCMMInfo {
  laneSelectionFlags: number;
  highPriorityDisabled: boolean;
}

function createBaseCMsgStartFindingMatch(): CMsgStartFindingMatch {
  return {
    key: "",
    matchgroups: 0,
    clientVersion: 0,
    gameModes: 0,
    matchType: 0,
    matchlanguages: 0,
    teamId: 0,
    gameLanguageEnum: 0,
    gameLanguageName: "",
    pingData: undefined,
    regionSelectFlags: 0,
    soloQueue: false,
    steamClanAccountId: 0,
    isChallengeMatch: false,
    laneSelectionFlags: 0,
    highPriorityDisabled: false,
    disableExperimentalGameplay: false,
    customGameDifficultyMask: 0,
    botDifficultyMask: 0,
    botScriptIndexMask: 0,
  };
}

export const CMsgStartFindingMatch = {
  encode(message: CMsgStartFindingMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.matchgroups !== 0) {
      writer.uint32(16).uint32(message.matchgroups);
    }
    if (message.clientVersion !== 0) {
      writer.uint32(24).uint32(message.clientVersion);
    }
    if (message.gameModes !== 0) {
      writer.uint32(32).uint32(message.gameModes);
    }
    if (message.matchType !== 0) {
      writer.uint32(48).int32(message.matchType);
    }
    if (message.matchlanguages !== 0) {
      writer.uint32(56).uint32(message.matchlanguages);
    }
    if (message.teamId !== 0) {
      writer.uint32(64).uint32(message.teamId);
    }
    if (message.gameLanguageEnum !== 0) {
      writer.uint32(80).int32(message.gameLanguageEnum);
    }
    if (message.gameLanguageName !== "") {
      writer.uint32(90).string(message.gameLanguageName);
    }
    if (message.pingData !== undefined) {
      CMsgClientPingData.encode(message.pingData, writer.uint32(98).fork()).ldelim();
    }
    if (message.regionSelectFlags !== 0) {
      writer.uint32(104).uint32(message.regionSelectFlags);
    }
    if (message.soloQueue === true) {
      writer.uint32(112).bool(message.soloQueue);
    }
    if (message.steamClanAccountId !== 0) {
      writer.uint32(128).uint32(message.steamClanAccountId);
    }
    if (message.isChallengeMatch === true) {
      writer.uint32(136).bool(message.isChallengeMatch);
    }
    if (message.laneSelectionFlags !== 0) {
      writer.uint32(144).uint32(message.laneSelectionFlags);
    }
    if (message.highPriorityDisabled === true) {
      writer.uint32(152).bool(message.highPriorityDisabled);
    }
    if (message.disableExperimentalGameplay === true) {
      writer.uint32(160).bool(message.disableExperimentalGameplay);
    }
    if (message.customGameDifficultyMask !== 0) {
      writer.uint32(168).uint32(message.customGameDifficultyMask);
    }
    if (message.botDifficultyMask !== 0) {
      writer.uint32(176).uint32(message.botDifficultyMask);
    }
    if (message.botScriptIndexMask !== 0) {
      writer.uint32(184).uint32(message.botScriptIndexMask);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStartFindingMatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStartFindingMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.matchgroups = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.clientVersion = reader.uint32();
          continue;
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

          message.matchType = reader.int32() as any;
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.matchlanguages = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.gameLanguageEnum = reader.int32() as any;
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.gameLanguageName = reader.string();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.pingData = CMsgClientPingData.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.regionSelectFlags = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.soloQueue = reader.bool();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.steamClanAccountId = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.isChallengeMatch = reader.bool();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.laneSelectionFlags = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.highPriorityDisabled = reader.bool();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.disableExperimentalGameplay = reader.bool();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.customGameDifficultyMask = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.botDifficultyMask = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
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

  fromJSON(object: any): CMsgStartFindingMatch {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      matchgroups: isSet(object.matchgroups) ? Number(object.matchgroups) : 0,
      clientVersion: isSet(object.clientVersion) ? Number(object.clientVersion) : 0,
      gameModes: isSet(object.gameModes) ? Number(object.gameModes) : 0,
      matchType: isSet(object.matchType) ? matchTypeFromJSON(object.matchType) : 0,
      matchlanguages: isSet(object.matchlanguages) ? Number(object.matchlanguages) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      gameLanguageEnum: isSet(object.gameLanguageEnum) ? matchLanguagesFromJSON(object.gameLanguageEnum) : 0,
      gameLanguageName: isSet(object.gameLanguageName) ? String(object.gameLanguageName) : "",
      pingData: isSet(object.pingData) ? CMsgClientPingData.fromJSON(object.pingData) : undefined,
      regionSelectFlags: isSet(object.regionSelectFlags) ? Number(object.regionSelectFlags) : 0,
      soloQueue: isSet(object.soloQueue) ? Boolean(object.soloQueue) : false,
      steamClanAccountId: isSet(object.steamClanAccountId) ? Number(object.steamClanAccountId) : 0,
      isChallengeMatch: isSet(object.isChallengeMatch) ? Boolean(object.isChallengeMatch) : false,
      laneSelectionFlags: isSet(object.laneSelectionFlags) ? Number(object.laneSelectionFlags) : 0,
      highPriorityDisabled: isSet(object.highPriorityDisabled) ? Boolean(object.highPriorityDisabled) : false,
      disableExperimentalGameplay: isSet(object.disableExperimentalGameplay)
        ? Boolean(object.disableExperimentalGameplay)
        : false,
      customGameDifficultyMask: isSet(object.customGameDifficultyMask) ? Number(object.customGameDifficultyMask) : 0,
      botDifficultyMask: isSet(object.botDifficultyMask) ? Number(object.botDifficultyMask) : 0,
      botScriptIndexMask: isSet(object.botScriptIndexMask) ? Number(object.botScriptIndexMask) : 0,
    };
  },

  toJSON(message: CMsgStartFindingMatch): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.matchgroups !== undefined && (obj.matchgroups = Math.round(message.matchgroups));
    message.clientVersion !== undefined && (obj.clientVersion = Math.round(message.clientVersion));
    message.gameModes !== undefined && (obj.gameModes = Math.round(message.gameModes));
    message.matchType !== undefined && (obj.matchType = matchTypeToJSON(message.matchType));
    message.matchlanguages !== undefined && (obj.matchlanguages = Math.round(message.matchlanguages));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.gameLanguageEnum !== undefined && (obj.gameLanguageEnum = matchLanguagesToJSON(message.gameLanguageEnum));
    message.gameLanguageName !== undefined && (obj.gameLanguageName = message.gameLanguageName);
    message.pingData !== undefined &&
      (obj.pingData = message.pingData ? CMsgClientPingData.toJSON(message.pingData) : undefined);
    message.regionSelectFlags !== undefined && (obj.regionSelectFlags = Math.round(message.regionSelectFlags));
    message.soloQueue !== undefined && (obj.soloQueue = message.soloQueue);
    message.steamClanAccountId !== undefined && (obj.steamClanAccountId = Math.round(message.steamClanAccountId));
    message.isChallengeMatch !== undefined && (obj.isChallengeMatch = message.isChallengeMatch);
    message.laneSelectionFlags !== undefined && (obj.laneSelectionFlags = Math.round(message.laneSelectionFlags));
    message.highPriorityDisabled !== undefined && (obj.highPriorityDisabled = message.highPriorityDisabled);
    message.disableExperimentalGameplay !== undefined &&
      (obj.disableExperimentalGameplay = message.disableExperimentalGameplay);
    message.customGameDifficultyMask !== undefined &&
      (obj.customGameDifficultyMask = Math.round(message.customGameDifficultyMask));
    message.botDifficultyMask !== undefined && (obj.botDifficultyMask = Math.round(message.botDifficultyMask));
    message.botScriptIndexMask !== undefined && (obj.botScriptIndexMask = Math.round(message.botScriptIndexMask));
    return obj;
  },
};

function createBaseCMsgStartFindingMatchResult(): CMsgStartFindingMatchResult {
  return {
    legacyGenericEresult: 0,
    result: 0,
    errorToken: "",
    debugMessage: "",
    responsiblePartyMembers: [],
    resultMetadata: 0,
  };
}

export const CMsgStartFindingMatchResult = {
  encode(message: CMsgStartFindingMatchResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.legacyGenericEresult !== 0) {
      writer.uint32(8).uint32(message.legacyGenericEresult);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    if (message.errorToken !== "") {
      writer.uint32(26).string(message.errorToken);
    }
    if (message.debugMessage !== "") {
      writer.uint32(34).string(message.debugMessage);
    }
    writer.uint32(42).fork();
    for (const v of message.responsiblePartyMembers) {
      writer.fixed64(v);
    }
    writer.ldelim();
    if (message.resultMetadata !== 0) {
      writer.uint32(48).uint32(message.resultMetadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStartFindingMatchResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStartFindingMatchResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.legacyGenericEresult = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.errorToken = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.debugMessage = reader.string();
          continue;
        case 5:
          if (tag == 41) {
            message.responsiblePartyMembers.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.responsiblePartyMembers.push(longToString(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 6:
          if (tag != 48) {
            break;
          }

          message.resultMetadata = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgStartFindingMatchResult {
    return {
      legacyGenericEresult: isSet(object.legacyGenericEresult) ? Number(object.legacyGenericEresult) : 0,
      result: isSet(object.result) ? eStartFindingMatchResultFromJSON(object.result) : 0,
      errorToken: isSet(object.errorToken) ? String(object.errorToken) : "",
      debugMessage: isSet(object.debugMessage) ? String(object.debugMessage) : "",
      responsiblePartyMembers: Array.isArray(object?.responsiblePartyMembers)
        ? object.responsiblePartyMembers.map((e: any) => String(e))
        : [],
      resultMetadata: isSet(object.resultMetadata) ? Number(object.resultMetadata) : 0,
    };
  },

  toJSON(message: CMsgStartFindingMatchResult): unknown {
    const obj: any = {};
    message.legacyGenericEresult !== undefined && (obj.legacyGenericEresult = Math.round(message.legacyGenericEresult));
    message.result !== undefined && (obj.result = eStartFindingMatchResultToJSON(message.result));
    message.errorToken !== undefined && (obj.errorToken = message.errorToken);
    message.debugMessage !== undefined && (obj.debugMessage = message.debugMessage);
    if (message.responsiblePartyMembers) {
      obj.responsiblePartyMembers = message.responsiblePartyMembers.map((e) => e);
    } else {
      obj.responsiblePartyMembers = [];
    }
    message.resultMetadata !== undefined && (obj.resultMetadata = Math.round(message.resultMetadata));
    return obj;
  },
};

function createBaseCMsgStopFindingMatch(): CMsgStopFindingMatch {
  return { acceptCooldown: false };
}

export const CMsgStopFindingMatch = {
  encode(message: CMsgStopFindingMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.acceptCooldown === true) {
      writer.uint32(8).bool(message.acceptCooldown);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStopFindingMatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStopFindingMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.acceptCooldown = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgStopFindingMatch {
    return { acceptCooldown: isSet(object.acceptCooldown) ? Boolean(object.acceptCooldown) : false };
  },

  toJSON(message: CMsgStopFindingMatch): unknown {
    const obj: any = {};
    message.acceptCooldown !== undefined && (obj.acceptCooldown = message.acceptCooldown);
    return obj;
  },
};

function createBaseCMsgPartyBuilderOptions(): CMsgPartyBuilderOptions {
  return { additionalSlots: 0, matchType: 0, matchgroups: 0, clientVersion: 0, language: 0 };
}

export const CMsgPartyBuilderOptions = {
  encode(message: CMsgPartyBuilderOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.additionalSlots !== 0) {
      writer.uint32(8).uint32(message.additionalSlots);
    }
    if (message.matchType !== 0) {
      writer.uint32(16).int32(message.matchType);
    }
    if (message.matchgroups !== 0) {
      writer.uint32(24).uint32(message.matchgroups);
    }
    if (message.clientVersion !== 0) {
      writer.uint32(32).uint32(message.clientVersion);
    }
    if (message.language !== 0) {
      writer.uint32(40).int32(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPartyBuilderOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPartyBuilderOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.additionalSlots = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.matchType = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.matchgroups = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.clientVersion = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.language = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPartyBuilderOptions {
    return {
      additionalSlots: isSet(object.additionalSlots) ? Number(object.additionalSlots) : 0,
      matchType: isSet(object.matchType) ? matchTypeFromJSON(object.matchType) : 0,
      matchgroups: isSet(object.matchgroups) ? Number(object.matchgroups) : 0,
      clientVersion: isSet(object.clientVersion) ? Number(object.clientVersion) : 0,
      language: isSet(object.language) ? matchLanguagesFromJSON(object.language) : 0,
    };
  },

  toJSON(message: CMsgPartyBuilderOptions): unknown {
    const obj: any = {};
    message.additionalSlots !== undefined && (obj.additionalSlots = Math.round(message.additionalSlots));
    message.matchType !== undefined && (obj.matchType = matchTypeToJSON(message.matchType));
    message.matchgroups !== undefined && (obj.matchgroups = Math.round(message.matchgroups));
    message.clientVersion !== undefined && (obj.clientVersion = Math.round(message.clientVersion));
    message.language !== undefined && (obj.language = matchLanguagesToJSON(message.language));
    return obj;
  },
};

function createBaseCMsgReadyUp(): CMsgReadyUp {
  return { state: 0, readyUpKey: "0", hardwareSpecs: undefined };
}

export const CMsgReadyUp = {
  encode(message: CMsgReadyUp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.readyUpKey !== "0") {
      writer.uint32(17).fixed64(message.readyUpKey);
    }
    if (message.hardwareSpecs !== undefined) {
      CDOTAClientHardwareSpecs.encode(message.hardwareSpecs, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgReadyUp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgReadyUp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.readyUpKey = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.hardwareSpecs = CDOTAClientHardwareSpecs.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgReadyUp {
    return {
      state: isSet(object.state) ? dOTALobbyReadyStateFromJSON(object.state) : 0,
      readyUpKey: isSet(object.readyUpKey) ? String(object.readyUpKey) : "0",
      hardwareSpecs: isSet(object.hardwareSpecs) ? CDOTAClientHardwareSpecs.fromJSON(object.hardwareSpecs) : undefined,
    };
  },

  toJSON(message: CMsgReadyUp): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = dOTALobbyReadyStateToJSON(message.state));
    message.readyUpKey !== undefined && (obj.readyUpKey = message.readyUpKey);
    message.hardwareSpecs !== undefined &&
      (obj.hardwareSpecs = message.hardwareSpecs ? CDOTAClientHardwareSpecs.toJSON(message.hardwareSpecs) : undefined);
    return obj;
  },
};

function createBaseCMsgReadyUpStatus(): CMsgReadyUpStatus {
  return { lobbyId: "0", acceptedIds: [], declinedIds: [] };
}

export const CMsgReadyUpStatus = {
  encode(message: CMsgReadyUpStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lobbyId !== "0") {
      writer.uint32(9).fixed64(message.lobbyId);
    }
    writer.uint32(18).fork();
    for (const v of message.acceptedIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.declinedIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgReadyUpStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgReadyUpStatus();
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
          if (tag == 16) {
            message.acceptedIds.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.acceptedIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 3:
          if (tag == 24) {
            message.declinedIds.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.declinedIds.push(reader.uint32());
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

  fromJSON(object: any): CMsgReadyUpStatus {
    return {
      lobbyId: isSet(object.lobbyId) ? String(object.lobbyId) : "0",
      acceptedIds: Array.isArray(object?.acceptedIds) ? object.acceptedIds.map((e: any) => Number(e)) : [],
      declinedIds: Array.isArray(object?.declinedIds) ? object.declinedIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgReadyUpStatus): unknown {
    const obj: any = {};
    message.lobbyId !== undefined && (obj.lobbyId = message.lobbyId);
    if (message.acceptedIds) {
      obj.acceptedIds = message.acceptedIds.map((e) => Math.round(e));
    } else {
      obj.acceptedIds = [];
    }
    if (message.declinedIds) {
      obj.declinedIds = message.declinedIds.map((e) => Math.round(e));
    } else {
      obj.declinedIds = [];
    }
    return obj;
  },
};

function createBaseCMsgAbandonCurrentGame(): CMsgAbandonCurrentGame {
  return {};
}

export const CMsgAbandonCurrentGame = {
  encode(_: CMsgAbandonCurrentGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAbandonCurrentGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAbandonCurrentGame();
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

  fromJSON(_: any): CMsgAbandonCurrentGame {
    return {};
  },

  toJSON(_: CMsgAbandonCurrentGame): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgLobbyScenarioSave(): CMsgLobbyScenarioSave {
  return { version: 0, data: Buffer.alloc(0) };
}

export const CMsgLobbyScenarioSave = {
  encode(message: CMsgLobbyScenarioSave, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).int32(message.version);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyScenarioSave {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyScenarioSave();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.version = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
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

  fromJSON(object: any): CMsgLobbyScenarioSave {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgLobbyScenarioSave): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },
};

function createBaseCMsgPracticeLobbySetDetails(): CMsgPracticeLobbySetDetails {
  return {
    lobbyId: "0",
    gameName: "",
    teamDetails: [],
    serverRegion: 0,
    gameMode: 0,
    cmPick: 0,
    botDifficultyRadiant: 0,
    allowCheats: false,
    fillWithBots: false,
    introMode: false,
    allowSpectating: false,
    passKey: "",
    leagueid: 0,
    penaltyLevelRadiant: 0,
    penaltyLevelDire: 0,
    loadGameId: 0,
    seriesType: 0,
    radiantSeriesWins: 0,
    direSeriesWins: 0,
    allchat: false,
    dotaTvDelay: 0,
    lan: false,
    customGameMode: "",
    customMapName: "",
    customDifficulty: 0,
    customGameId: "0",
    customMinPlayers: 0,
    customMaxPlayers: 0,
    visibility: 0,
    customGameCrc: "0",
    customGameTimestamp: 0,
    previousMatchOverride: "0",
    pauseSetting: 0,
    botDifficultyDire: 0,
    botRadiant: "0",
    botDire: "0",
    selectionPriorityRules: 0,
    customGamePenalties: false,
    lanHostPingLocation: "",
    leagueNodeId: 0,
    requestedHeroIds: [],
    scenarioSave: undefined,
    abilityDraftSpecificDetails: undefined,
    doPlayerDraft: false,
  };
}

export const CMsgPracticeLobbySetDetails = {
  encode(message: CMsgPracticeLobbySetDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lobbyId !== "0") {
      writer.uint32(8).uint64(message.lobbyId);
    }
    if (message.gameName !== "") {
      writer.uint32(18).string(message.gameName);
    }
    for (const v of message.teamDetails) {
      CLobbyTeamDetails.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.serverRegion !== 0) {
      writer.uint32(32).uint32(message.serverRegion);
    }
    if (message.gameMode !== 0) {
      writer.uint32(40).uint32(message.gameMode);
    }
    if (message.cmPick !== 0) {
      writer.uint32(48).int32(message.cmPick);
    }
    if (message.botDifficultyRadiant !== 0) {
      writer.uint32(72).int32(message.botDifficultyRadiant);
    }
    if (message.allowCheats === true) {
      writer.uint32(80).bool(message.allowCheats);
    }
    if (message.fillWithBots === true) {
      writer.uint32(88).bool(message.fillWithBots);
    }
    if (message.introMode === true) {
      writer.uint32(96).bool(message.introMode);
    }
    if (message.allowSpectating === true) {
      writer.uint32(104).bool(message.allowSpectating);
    }
    if (message.passKey !== "") {
      writer.uint32(122).string(message.passKey);
    }
    if (message.leagueid !== 0) {
      writer.uint32(128).uint32(message.leagueid);
    }
    if (message.penaltyLevelRadiant !== 0) {
      writer.uint32(136).uint32(message.penaltyLevelRadiant);
    }
    if (message.penaltyLevelDire !== 0) {
      writer.uint32(144).uint32(message.penaltyLevelDire);
    }
    if (message.loadGameId !== 0) {
      writer.uint32(152).uint32(message.loadGameId);
    }
    if (message.seriesType !== 0) {
      writer.uint32(160).uint32(message.seriesType);
    }
    if (message.radiantSeriesWins !== 0) {
      writer.uint32(168).uint32(message.radiantSeriesWins);
    }
    if (message.direSeriesWins !== 0) {
      writer.uint32(176).uint32(message.direSeriesWins);
    }
    if (message.allchat === true) {
      writer.uint32(184).bool(message.allchat);
    }
    if (message.dotaTvDelay !== 0) {
      writer.uint32(192).int32(message.dotaTvDelay);
    }
    if (message.lan === true) {
      writer.uint32(200).bool(message.lan);
    }
    if (message.customGameMode !== "") {
      writer.uint32(210).string(message.customGameMode);
    }
    if (message.customMapName !== "") {
      writer.uint32(218).string(message.customMapName);
    }
    if (message.customDifficulty !== 0) {
      writer.uint32(224).uint32(message.customDifficulty);
    }
    if (message.customGameId !== "0") {
      writer.uint32(232).uint64(message.customGameId);
    }
    if (message.customMinPlayers !== 0) {
      writer.uint32(240).uint32(message.customMinPlayers);
    }
    if (message.customMaxPlayers !== 0) {
      writer.uint32(248).uint32(message.customMaxPlayers);
    }
    if (message.visibility !== 0) {
      writer.uint32(264).int32(message.visibility);
    }
    if (message.customGameCrc !== "0") {
      writer.uint32(273).fixed64(message.customGameCrc);
    }
    if (message.customGameTimestamp !== 0) {
      writer.uint32(301).fixed32(message.customGameTimestamp);
    }
    if (message.previousMatchOverride !== "0") {
      writer.uint32(304).uint64(message.previousMatchOverride);
    }
    if (message.pauseSetting !== 0) {
      writer.uint32(336).int32(message.pauseSetting);
    }
    if (message.botDifficultyDire !== 0) {
      writer.uint32(344).int32(message.botDifficultyDire);
    }
    if (message.botRadiant !== "0") {
      writer.uint32(352).uint64(message.botRadiant);
    }
    if (message.botDire !== "0") {
      writer.uint32(360).uint64(message.botDire);
    }
    if (message.selectionPriorityRules !== 0) {
      writer.uint32(368).int32(message.selectionPriorityRules);
    }
    if (message.customGamePenalties === true) {
      writer.uint32(376).bool(message.customGamePenalties);
    }
    if (message.lanHostPingLocation !== "") {
      writer.uint32(386).string(message.lanHostPingLocation);
    }
    if (message.leagueNodeId !== 0) {
      writer.uint32(392).uint32(message.leagueNodeId);
    }
    writer.uint32(402).fork();
    for (const v of message.requestedHeroIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.scenarioSave !== undefined) {
      CMsgLobbyScenarioSave.encode(message.scenarioSave, writer.uint32(410).fork()).ldelim();
    }
    if (message.abilityDraftSpecificDetails !== undefined) {
      CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails.encode(
        message.abilityDraftSpecificDetails,
        writer.uint32(418).fork(),
      ).ldelim();
    }
    if (message.doPlayerDraft === true) {
      writer.uint32(424).bool(message.doPlayerDraft);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbySetDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbySetDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.lobbyId = longToString(reader.uint64() as Long);
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

          message.teamDetails.push(CLobbyTeamDetails.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.serverRegion = reader.uint32();
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

          message.cmPick = reader.int32() as any;
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.botDifficultyRadiant = reader.int32() as any;
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.allowCheats = reader.bool();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.fillWithBots = reader.bool();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.introMode = reader.bool();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.allowSpectating = reader.bool();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.passKey = reader.string();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.leagueid = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.penaltyLevelRadiant = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.penaltyLevelDire = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.loadGameId = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.seriesType = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.radiantSeriesWins = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.direSeriesWins = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.allchat = reader.bool();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.dotaTvDelay = reader.int32() as any;
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.lan = reader.bool();
          continue;
        case 26:
          if (tag != 210) {
            break;
          }

          message.customGameMode = reader.string();
          continue;
        case 27:
          if (tag != 218) {
            break;
          }

          message.customMapName = reader.string();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.customDifficulty = reader.uint32();
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.customGameId = longToString(reader.uint64() as Long);
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.customMinPlayers = reader.uint32();
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.customMaxPlayers = reader.uint32();
          continue;
        case 33:
          if (tag != 264) {
            break;
          }

          message.visibility = reader.int32() as any;
          continue;
        case 34:
          if (tag != 273) {
            break;
          }

          message.customGameCrc = longToString(reader.fixed64() as Long);
          continue;
        case 37:
          if (tag != 301) {
            break;
          }

          message.customGameTimestamp = reader.fixed32();
          continue;
        case 38:
          if (tag != 304) {
            break;
          }

          message.previousMatchOverride = longToString(reader.uint64() as Long);
          continue;
        case 42:
          if (tag != 336) {
            break;
          }

          message.pauseSetting = reader.int32() as any;
          continue;
        case 43:
          if (tag != 344) {
            break;
          }

          message.botDifficultyDire = reader.int32() as any;
          continue;
        case 44:
          if (tag != 352) {
            break;
          }

          message.botRadiant = longToString(reader.uint64() as Long);
          continue;
        case 45:
          if (tag != 360) {
            break;
          }

          message.botDire = longToString(reader.uint64() as Long);
          continue;
        case 46:
          if (tag != 368) {
            break;
          }

          message.selectionPriorityRules = reader.int32() as any;
          continue;
        case 47:
          if (tag != 376) {
            break;
          }

          message.customGamePenalties = reader.bool();
          continue;
        case 48:
          if (tag != 386) {
            break;
          }

          message.lanHostPingLocation = reader.string();
          continue;
        case 49:
          if (tag != 392) {
            break;
          }

          message.leagueNodeId = reader.uint32();
          continue;
        case 50:
          if (tag == 400) {
            message.requestedHeroIds.push(reader.uint32());
            continue;
          }

          if (tag == 402) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.requestedHeroIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 51:
          if (tag != 410) {
            break;
          }

          message.scenarioSave = CMsgLobbyScenarioSave.decode(reader, reader.uint32());
          continue;
        case 52:
          if (tag != 418) {
            break;
          }

          message.abilityDraftSpecificDetails = CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 53:
          if (tag != 424) {
            break;
          }

          message.doPlayerDraft = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPracticeLobbySetDetails {
    return {
      lobbyId: isSet(object.lobbyId) ? String(object.lobbyId) : "0",
      gameName: isSet(object.gameName) ? String(object.gameName) : "",
      teamDetails: Array.isArray(object?.teamDetails)
        ? object.teamDetails.map((e: any) => CLobbyTeamDetails.fromJSON(e))
        : [],
      serverRegion: isSet(object.serverRegion) ? Number(object.serverRegion) : 0,
      gameMode: isSet(object.gameMode) ? Number(object.gameMode) : 0,
      cmPick: isSet(object.cmPick) ? dotaCmPickFromJSON(object.cmPick) : 0,
      botDifficultyRadiant: isSet(object.botDifficultyRadiant)
        ? dOTABotDifficultyFromJSON(object.botDifficultyRadiant)
        : 0,
      allowCheats: isSet(object.allowCheats) ? Boolean(object.allowCheats) : false,
      fillWithBots: isSet(object.fillWithBots) ? Boolean(object.fillWithBots) : false,
      introMode: isSet(object.introMode) ? Boolean(object.introMode) : false,
      allowSpectating: isSet(object.allowSpectating) ? Boolean(object.allowSpectating) : false,
      passKey: isSet(object.passKey) ? String(object.passKey) : "",
      leagueid: isSet(object.leagueid) ? Number(object.leagueid) : 0,
      penaltyLevelRadiant: isSet(object.penaltyLevelRadiant) ? Number(object.penaltyLevelRadiant) : 0,
      penaltyLevelDire: isSet(object.penaltyLevelDire) ? Number(object.penaltyLevelDire) : 0,
      loadGameId: isSet(object.loadGameId) ? Number(object.loadGameId) : 0,
      seriesType: isSet(object.seriesType) ? Number(object.seriesType) : 0,
      radiantSeriesWins: isSet(object.radiantSeriesWins) ? Number(object.radiantSeriesWins) : 0,
      direSeriesWins: isSet(object.direSeriesWins) ? Number(object.direSeriesWins) : 0,
      allchat: isSet(object.allchat) ? Boolean(object.allchat) : false,
      dotaTvDelay: isSet(object.dotaTvDelay) ? lobbyDotaTVDelayFromJSON(object.dotaTvDelay) : 0,
      lan: isSet(object.lan) ? Boolean(object.lan) : false,
      customGameMode: isSet(object.customGameMode) ? String(object.customGameMode) : "",
      customMapName: isSet(object.customMapName) ? String(object.customMapName) : "",
      customDifficulty: isSet(object.customDifficulty) ? Number(object.customDifficulty) : 0,
      customGameId: isSet(object.customGameId) ? String(object.customGameId) : "0",
      customMinPlayers: isSet(object.customMinPlayers) ? Number(object.customMinPlayers) : 0,
      customMaxPlayers: isSet(object.customMaxPlayers) ? Number(object.customMaxPlayers) : 0,
      visibility: isSet(object.visibility) ? dOTALobbyVisibilityFromJSON(object.visibility) : 0,
      customGameCrc: isSet(object.customGameCrc) ? String(object.customGameCrc) : "0",
      customGameTimestamp: isSet(object.customGameTimestamp) ? Number(object.customGameTimestamp) : 0,
      previousMatchOverride: isSet(object.previousMatchOverride) ? String(object.previousMatchOverride) : "0",
      pauseSetting: isSet(object.pauseSetting) ? lobbyDotaPauseSettingFromJSON(object.pauseSetting) : 0,
      botDifficultyDire: isSet(object.botDifficultyDire) ? dOTABotDifficultyFromJSON(object.botDifficultyDire) : 0,
      botRadiant: isSet(object.botRadiant) ? String(object.botRadiant) : "0",
      botDire: isSet(object.botDire) ? String(object.botDire) : "0",
      selectionPriorityRules: isSet(object.selectionPriorityRules)
        ? dOTASelectionPriorityRulesFromJSON(object.selectionPriorityRules)
        : 0,
      customGamePenalties: isSet(object.customGamePenalties) ? Boolean(object.customGamePenalties) : false,
      lanHostPingLocation: isSet(object.lanHostPingLocation) ? String(object.lanHostPingLocation) : "",
      leagueNodeId: isSet(object.leagueNodeId) ? Number(object.leagueNodeId) : 0,
      requestedHeroIds: Array.isArray(object?.requestedHeroIds)
        ? object.requestedHeroIds.map((e: any) => Number(e))
        : [],
      scenarioSave: isSet(object.scenarioSave) ? CMsgLobbyScenarioSave.fromJSON(object.scenarioSave) : undefined,
      abilityDraftSpecificDetails: isSet(object.abilityDraftSpecificDetails)
        ? CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails.fromJSON(object.abilityDraftSpecificDetails)
        : undefined,
      doPlayerDraft: isSet(object.doPlayerDraft) ? Boolean(object.doPlayerDraft) : false,
    };
  },

  toJSON(message: CMsgPracticeLobbySetDetails): unknown {
    const obj: any = {};
    message.lobbyId !== undefined && (obj.lobbyId = message.lobbyId);
    message.gameName !== undefined && (obj.gameName = message.gameName);
    if (message.teamDetails) {
      obj.teamDetails = message.teamDetails.map((e) => e ? CLobbyTeamDetails.toJSON(e) : undefined);
    } else {
      obj.teamDetails = [];
    }
    message.serverRegion !== undefined && (obj.serverRegion = Math.round(message.serverRegion));
    message.gameMode !== undefined && (obj.gameMode = Math.round(message.gameMode));
    message.cmPick !== undefined && (obj.cmPick = dotaCmPickToJSON(message.cmPick));
    message.botDifficultyRadiant !== undefined &&
      (obj.botDifficultyRadiant = dOTABotDifficultyToJSON(message.botDifficultyRadiant));
    message.allowCheats !== undefined && (obj.allowCheats = message.allowCheats);
    message.fillWithBots !== undefined && (obj.fillWithBots = message.fillWithBots);
    message.introMode !== undefined && (obj.introMode = message.introMode);
    message.allowSpectating !== undefined && (obj.allowSpectating = message.allowSpectating);
    message.passKey !== undefined && (obj.passKey = message.passKey);
    message.leagueid !== undefined && (obj.leagueid = Math.round(message.leagueid));
    message.penaltyLevelRadiant !== undefined && (obj.penaltyLevelRadiant = Math.round(message.penaltyLevelRadiant));
    message.penaltyLevelDire !== undefined && (obj.penaltyLevelDire = Math.round(message.penaltyLevelDire));
    message.loadGameId !== undefined && (obj.loadGameId = Math.round(message.loadGameId));
    message.seriesType !== undefined && (obj.seriesType = Math.round(message.seriesType));
    message.radiantSeriesWins !== undefined && (obj.radiantSeriesWins = Math.round(message.radiantSeriesWins));
    message.direSeriesWins !== undefined && (obj.direSeriesWins = Math.round(message.direSeriesWins));
    message.allchat !== undefined && (obj.allchat = message.allchat);
    message.dotaTvDelay !== undefined && (obj.dotaTvDelay = lobbyDotaTVDelayToJSON(message.dotaTvDelay));
    message.lan !== undefined && (obj.lan = message.lan);
    message.customGameMode !== undefined && (obj.customGameMode = message.customGameMode);
    message.customMapName !== undefined && (obj.customMapName = message.customMapName);
    message.customDifficulty !== undefined && (obj.customDifficulty = Math.round(message.customDifficulty));
    message.customGameId !== undefined && (obj.customGameId = message.customGameId);
    message.customMinPlayers !== undefined && (obj.customMinPlayers = Math.round(message.customMinPlayers));
    message.customMaxPlayers !== undefined && (obj.customMaxPlayers = Math.round(message.customMaxPlayers));
    message.visibility !== undefined && (obj.visibility = dOTALobbyVisibilityToJSON(message.visibility));
    message.customGameCrc !== undefined && (obj.customGameCrc = message.customGameCrc);
    message.customGameTimestamp !== undefined && (obj.customGameTimestamp = Math.round(message.customGameTimestamp));
    message.previousMatchOverride !== undefined && (obj.previousMatchOverride = message.previousMatchOverride);
    message.pauseSetting !== undefined && (obj.pauseSetting = lobbyDotaPauseSettingToJSON(message.pauseSetting));
    message.botDifficultyDire !== undefined &&
      (obj.botDifficultyDire = dOTABotDifficultyToJSON(message.botDifficultyDire));
    message.botRadiant !== undefined && (obj.botRadiant = message.botRadiant);
    message.botDire !== undefined && (obj.botDire = message.botDire);
    message.selectionPriorityRules !== undefined &&
      (obj.selectionPriorityRules = dOTASelectionPriorityRulesToJSON(message.selectionPriorityRules));
    message.customGamePenalties !== undefined && (obj.customGamePenalties = message.customGamePenalties);
    message.lanHostPingLocation !== undefined && (obj.lanHostPingLocation = message.lanHostPingLocation);
    message.leagueNodeId !== undefined && (obj.leagueNodeId = Math.round(message.leagueNodeId));
    if (message.requestedHeroIds) {
      obj.requestedHeroIds = message.requestedHeroIds.map((e) => Math.round(e));
    } else {
      obj.requestedHeroIds = [];
    }
    message.scenarioSave !== undefined &&
      (obj.scenarioSave = message.scenarioSave ? CMsgLobbyScenarioSave.toJSON(message.scenarioSave) : undefined);
    message.abilityDraftSpecificDetails !== undefined &&
      (obj.abilityDraftSpecificDetails = message.abilityDraftSpecificDetails
        ? CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails.toJSON(message.abilityDraftSpecificDetails)
        : undefined);
    message.doPlayerDraft !== undefined && (obj.doPlayerDraft = message.doPlayerDraft);
    return obj;
  },
};

function createBaseCMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails(): CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails {
  return { shuffleDraftOrder: false };
}

export const CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails = {
  encode(
    message: CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shuffleDraftOrder === true) {
      writer.uint32(8).bool(message.shuffleDraftOrder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails();
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

  fromJSON(object: any): CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails {
    return { shuffleDraftOrder: isSet(object.shuffleDraftOrder) ? Boolean(object.shuffleDraftOrder) : false };
  },

  toJSON(message: CMsgPracticeLobbySetDetails_AbilityDraftSpecificDetails): unknown {
    const obj: any = {};
    message.shuffleDraftOrder !== undefined && (obj.shuffleDraftOrder = message.shuffleDraftOrder);
    return obj;
  },
};

function createBaseCMsgPracticeLobbyCreate(): CMsgPracticeLobbyCreate {
  return { searchKey: "", passKey: "", clientVersion: 0, lobbyDetails: undefined, saveGame: undefined };
}

export const CMsgPracticeLobbyCreate = {
  encode(message: CMsgPracticeLobbyCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.searchKey !== "") {
      writer.uint32(10).string(message.searchKey);
    }
    if (message.passKey !== "") {
      writer.uint32(42).string(message.passKey);
    }
    if (message.clientVersion !== 0) {
      writer.uint32(48).uint32(message.clientVersion);
    }
    if (message.lobbyDetails !== undefined) {
      CMsgPracticeLobbySetDetails.encode(message.lobbyDetails, writer.uint32(58).fork()).ldelim();
    }
    if (message.saveGame !== undefined) {
      CMsgPracticeLobbyCreate_SaveGame.encode(message.saveGame, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbyCreate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbyCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.searchKey = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.passKey = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.clientVersion = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.lobbyDetails = CMsgPracticeLobbySetDetails.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.saveGame = CMsgPracticeLobbyCreate_SaveGame.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPracticeLobbyCreate {
    return {
      searchKey: isSet(object.searchKey) ? String(object.searchKey) : "",
      passKey: isSet(object.passKey) ? String(object.passKey) : "",
      clientVersion: isSet(object.clientVersion) ? Number(object.clientVersion) : 0,
      lobbyDetails: isSet(object.lobbyDetails) ? CMsgPracticeLobbySetDetails.fromJSON(object.lobbyDetails) : undefined,
      saveGame: isSet(object.saveGame) ? CMsgPracticeLobbyCreate_SaveGame.fromJSON(object.saveGame) : undefined,
    };
  },

  toJSON(message: CMsgPracticeLobbyCreate): unknown {
    const obj: any = {};
    message.searchKey !== undefined && (obj.searchKey = message.searchKey);
    message.passKey !== undefined && (obj.passKey = message.passKey);
    message.clientVersion !== undefined && (obj.clientVersion = Math.round(message.clientVersion));
    message.lobbyDetails !== undefined &&
      (obj.lobbyDetails = message.lobbyDetails ? CMsgPracticeLobbySetDetails.toJSON(message.lobbyDetails) : undefined);
    message.saveGame !== undefined &&
      (obj.saveGame = message.saveGame ? CMsgPracticeLobbyCreate_SaveGame.toJSON(message.saveGame) : undefined);
    return obj;
  },
};

function createBaseCMsgPracticeLobbyCreate_SaveGame(): CMsgPracticeLobbyCreate_SaveGame {
  return { data: Buffer.alloc(0), version: 0, steamId: "0", signature: "0" };
}

export const CMsgPracticeLobbyCreate_SaveGame = {
  encode(message: CMsgPracticeLobbyCreate_SaveGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.version !== 0) {
      writer.uint32(16).int32(message.version);
    }
    if (message.steamId !== "0") {
      writer.uint32(25).fixed64(message.steamId);
    }
    if (message.signature !== "0") {
      writer.uint32(33).fixed64(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbyCreate_SaveGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbyCreate_SaveGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.data = reader.bytes() as Buffer;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.version = reader.int32();
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.steamId = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.signature = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPracticeLobbyCreate_SaveGame {
    return {
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
      version: isSet(object.version) ? Number(object.version) : 0,
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      signature: isSet(object.signature) ? String(object.signature) : "0",
    };
  },

  toJSON(message: CMsgPracticeLobbyCreate_SaveGame): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },
};

function createBaseCMsgPracticeLobbySetTeamSlot(): CMsgPracticeLobbySetTeamSlot {
  return { team: 0, slot: 0, botDifficulty: 0 };
}

export const CMsgPracticeLobbySetTeamSlot = {
  encode(message: CMsgPracticeLobbySetTeamSlot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.team !== 0) {
      writer.uint32(8).int32(message.team);
    }
    if (message.slot !== 0) {
      writer.uint32(16).uint32(message.slot);
    }
    if (message.botDifficulty !== 0) {
      writer.uint32(24).int32(message.botDifficulty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbySetTeamSlot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbySetTeamSlot();
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
          if (tag != 16) {
            break;
          }

          message.slot = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.botDifficulty = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPracticeLobbySetTeamSlot {
    return {
      team: isSet(object.team) ? dotaGcTeamFromJSON(object.team) : 0,
      slot: isSet(object.slot) ? Number(object.slot) : 0,
      botDifficulty: isSet(object.botDifficulty) ? dOTABotDifficultyFromJSON(object.botDifficulty) : 0,
    };
  },

  toJSON(message: CMsgPracticeLobbySetTeamSlot): unknown {
    const obj: any = {};
    message.team !== undefined && (obj.team = dotaGcTeamToJSON(message.team));
    message.slot !== undefined && (obj.slot = Math.round(message.slot));
    message.botDifficulty !== undefined && (obj.botDifficulty = dOTABotDifficultyToJSON(message.botDifficulty));
    return obj;
  },
};

function createBaseCMsgPracticeLobbySetCoach(): CMsgPracticeLobbySetCoach {
  return { team: 0 };
}

export const CMsgPracticeLobbySetCoach = {
  encode(message: CMsgPracticeLobbySetCoach, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.team !== 0) {
      writer.uint32(8).int32(message.team);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbySetCoach {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbySetCoach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.team = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPracticeLobbySetCoach {
    return { team: isSet(object.team) ? dotaGcTeamFromJSON(object.team) : 0 };
  },

  toJSON(message: CMsgPracticeLobbySetCoach): unknown {
    const obj: any = {};
    message.team !== undefined && (obj.team = dotaGcTeamToJSON(message.team));
    return obj;
  },
};

function createBaseCMsgPracticeLobbyJoinBroadcastChannel(): CMsgPracticeLobbyJoinBroadcastChannel {
  return { channel: 0, preferredDescription: "", preferredCountryCode: "", preferredLanguageCode: "" };
}

export const CMsgPracticeLobbyJoinBroadcastChannel = {
  encode(message: CMsgPracticeLobbyJoinBroadcastChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== 0) {
      writer.uint32(8).uint32(message.channel);
    }
    if (message.preferredDescription !== "") {
      writer.uint32(18).string(message.preferredDescription);
    }
    if (message.preferredCountryCode !== "") {
      writer.uint32(26).string(message.preferredCountryCode);
    }
    if (message.preferredLanguageCode !== "") {
      writer.uint32(34).string(message.preferredLanguageCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbyJoinBroadcastChannel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbyJoinBroadcastChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.channel = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.preferredDescription = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.preferredCountryCode = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.preferredLanguageCode = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPracticeLobbyJoinBroadcastChannel {
    return {
      channel: isSet(object.channel) ? Number(object.channel) : 0,
      preferredDescription: isSet(object.preferredDescription) ? String(object.preferredDescription) : "",
      preferredCountryCode: isSet(object.preferredCountryCode) ? String(object.preferredCountryCode) : "",
      preferredLanguageCode: isSet(object.preferredLanguageCode) ? String(object.preferredLanguageCode) : "",
    };
  },

  toJSON(message: CMsgPracticeLobbyJoinBroadcastChannel): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = Math.round(message.channel));
    message.preferredDescription !== undefined && (obj.preferredDescription = message.preferredDescription);
    message.preferredCountryCode !== undefined && (obj.preferredCountryCode = message.preferredCountryCode);
    message.preferredLanguageCode !== undefined && (obj.preferredLanguageCode = message.preferredLanguageCode);
    return obj;
  },
};

function createBaseCMsgPracticeLobbyCloseBroadcastChannel(): CMsgPracticeLobbyCloseBroadcastChannel {
  return { channel: 0 };
}

export const CMsgPracticeLobbyCloseBroadcastChannel = {
  encode(message: CMsgPracticeLobbyCloseBroadcastChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== 0) {
      writer.uint32(8).uint32(message.channel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbyCloseBroadcastChannel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbyCloseBroadcastChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.channel = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPracticeLobbyCloseBroadcastChannel {
    return { channel: isSet(object.channel) ? Number(object.channel) : 0 };
  },

  toJSON(message: CMsgPracticeLobbyCloseBroadcastChannel): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = Math.round(message.channel));
    return obj;
  },
};

function createBaseCMsgPracticeLobbyToggleBroadcastChannelCameramanStatus(): CMsgPracticeLobbyToggleBroadcastChannelCameramanStatus {
  return {};
}

export const CMsgPracticeLobbyToggleBroadcastChannelCameramanStatus = {
  encode(
    _: CMsgPracticeLobbyToggleBroadcastChannelCameramanStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbyToggleBroadcastChannelCameramanStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbyToggleBroadcastChannelCameramanStatus();
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

  fromJSON(_: any): CMsgPracticeLobbyToggleBroadcastChannelCameramanStatus {
    return {};
  },

  toJSON(_: CMsgPracticeLobbyToggleBroadcastChannelCameramanStatus): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgPracticeLobbyKick(): CMsgPracticeLobbyKick {
  return { accountId: 0 };
}

export const CMsgPracticeLobbyKick = {
  encode(message: CMsgPracticeLobbyKick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(24).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbyKick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbyKick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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

  fromJSON(object: any): CMsgPracticeLobbyKick {
    return { accountId: isSet(object.accountId) ? Number(object.accountId) : 0 };
  },

  toJSON(message: CMsgPracticeLobbyKick): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    return obj;
  },
};

function createBaseCMsgPracticeLobbyKickFromTeam(): CMsgPracticeLobbyKickFromTeam {
  return { accountId: 0 };
}

export const CMsgPracticeLobbyKickFromTeam = {
  encode(message: CMsgPracticeLobbyKickFromTeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbyKickFromTeam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbyKickFromTeam();
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

  fromJSON(object: any): CMsgPracticeLobbyKickFromTeam {
    return { accountId: isSet(object.accountId) ? Number(object.accountId) : 0 };
  },

  toJSON(message: CMsgPracticeLobbyKickFromTeam): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    return obj;
  },
};

function createBaseCMsgPracticeLobbyLeave(): CMsgPracticeLobbyLeave {
  return {};
}

export const CMsgPracticeLobbyLeave = {
  encode(_: CMsgPracticeLobbyLeave, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbyLeave {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbyLeave();
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

  fromJSON(_: any): CMsgPracticeLobbyLeave {
    return {};
  },

  toJSON(_: CMsgPracticeLobbyLeave): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgPracticeLobbyLaunch(): CMsgPracticeLobbyLaunch {
  return { clientVersion: 0 };
}

export const CMsgPracticeLobbyLaunch = {
  encode(message: CMsgPracticeLobbyLaunch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientVersion !== 0) {
      writer.uint32(40).uint32(message.clientVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbyLaunch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbyLaunch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag != 40) {
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

  fromJSON(object: any): CMsgPracticeLobbyLaunch {
    return { clientVersion: isSet(object.clientVersion) ? Number(object.clientVersion) : 0 };
  },

  toJSON(message: CMsgPracticeLobbyLaunch): unknown {
    const obj: any = {};
    message.clientVersion !== undefined && (obj.clientVersion = Math.round(message.clientVersion));
    return obj;
  },
};

function createBaseCMsgApplyTeamToPracticeLobby(): CMsgApplyTeamToPracticeLobby {
  return { teamId: 0 };
}

export const CMsgApplyTeamToPracticeLobby = {
  encode(message: CMsgApplyTeamToPracticeLobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).uint32(message.teamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgApplyTeamToPracticeLobby {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgApplyTeamToPracticeLobby();
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

  fromJSON(object: any): CMsgApplyTeamToPracticeLobby {
    return { teamId: isSet(object.teamId) ? Number(object.teamId) : 0 };
  },

  toJSON(message: CMsgApplyTeamToPracticeLobby): unknown {
    const obj: any = {};
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    return obj;
  },
};

function createBaseCMsgPracticeLobbyList(): CMsgPracticeLobbyList {
  return { passKey: "", region: 0, gameMode: 0 };
}

export const CMsgPracticeLobbyList = {
  encode(message: CMsgPracticeLobbyList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.passKey !== "") {
      writer.uint32(18).string(message.passKey);
    }
    if (message.region !== 0) {
      writer.uint32(24).uint32(message.region);
    }
    if (message.gameMode !== 0) {
      writer.uint32(32).int32(message.gameMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbyList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbyList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.passKey = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.region = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.gameMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPracticeLobbyList {
    return {
      passKey: isSet(object.passKey) ? String(object.passKey) : "",
      region: isSet(object.region) ? Number(object.region) : 0,
      gameMode: isSet(object.gameMode) ? dOTAGameModeFromJSON(object.gameMode) : 0,
    };
  },

  toJSON(message: CMsgPracticeLobbyList): unknown {
    const obj: any = {};
    message.passKey !== undefined && (obj.passKey = message.passKey);
    message.region !== undefined && (obj.region = Math.round(message.region));
    message.gameMode !== undefined && (obj.gameMode = dOTAGameModeToJSON(message.gameMode));
    return obj;
  },
};

function createBaseCMsgPracticeLobbyListResponseEntry(): CMsgPracticeLobbyListResponseEntry {
  return {
    id: "0",
    members: [],
    requiresPassKey: false,
    leaderAccountId: 0,
    name: "",
    customGameMode: "",
    gameMode: 0,
    friendPresent: false,
    players: 0,
    customMapName: "",
    maxPlayerCount: 0,
    serverRegion: 0,
    leagueId: 0,
    lanHostPingLocation: "",
    minPlayerCount: 0,
    penaltiesEnabled: false,
  };
}

export const CMsgPracticeLobbyListResponseEntry = {
  encode(message: CMsgPracticeLobbyListResponseEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.members) {
      CMsgPracticeLobbyListResponseEntry_CLobbyMember.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.requiresPassKey === true) {
      writer.uint32(48).bool(message.requiresPassKey);
    }
    if (message.leaderAccountId !== 0) {
      writer.uint32(56).uint32(message.leaderAccountId);
    }
    if (message.name !== "") {
      writer.uint32(82).string(message.name);
    }
    if (message.customGameMode !== "") {
      writer.uint32(90).string(message.customGameMode);
    }
    if (message.gameMode !== 0) {
      writer.uint32(96).int32(message.gameMode);
    }
    if (message.friendPresent === true) {
      writer.uint32(104).bool(message.friendPresent);
    }
    if (message.players !== 0) {
      writer.uint32(112).uint32(message.players);
    }
    if (message.customMapName !== "") {
      writer.uint32(122).string(message.customMapName);
    }
    if (message.maxPlayerCount !== 0) {
      writer.uint32(128).uint32(message.maxPlayerCount);
    }
    if (message.serverRegion !== 0) {
      writer.uint32(136).uint32(message.serverRegion);
    }
    if (message.leagueId !== 0) {
      writer.uint32(152).uint32(message.leagueId);
    }
    if (message.lanHostPingLocation !== "") {
      writer.uint32(162).string(message.lanHostPingLocation);
    }
    if (message.minPlayerCount !== 0) {
      writer.uint32(168).uint32(message.minPlayerCount);
    }
    if (message.penaltiesEnabled === true) {
      writer.uint32(176).bool(message.penaltiesEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbyListResponseEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbyListResponseEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.members.push(CMsgPracticeLobbyListResponseEntry_CLobbyMember.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.requiresPassKey = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.leaderAccountId = reader.uint32();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.name = reader.string();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.customGameMode = reader.string();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.gameMode = reader.int32() as any;
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.friendPresent = reader.bool();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.players = reader.uint32();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.customMapName = reader.string();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.maxPlayerCount = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.serverRegion = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 20:
          if (tag != 162) {
            break;
          }

          message.lanHostPingLocation = reader.string();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.minPlayerCount = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.penaltiesEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPracticeLobbyListResponseEntry {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => CMsgPracticeLobbyListResponseEntry_CLobbyMember.fromJSON(e))
        : [],
      requiresPassKey: isSet(object.requiresPassKey) ? Boolean(object.requiresPassKey) : false,
      leaderAccountId: isSet(object.leaderAccountId) ? Number(object.leaderAccountId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      customGameMode: isSet(object.customGameMode) ? String(object.customGameMode) : "",
      gameMode: isSet(object.gameMode) ? dOTAGameModeFromJSON(object.gameMode) : 0,
      friendPresent: isSet(object.friendPresent) ? Boolean(object.friendPresent) : false,
      players: isSet(object.players) ? Number(object.players) : 0,
      customMapName: isSet(object.customMapName) ? String(object.customMapName) : "",
      maxPlayerCount: isSet(object.maxPlayerCount) ? Number(object.maxPlayerCount) : 0,
      serverRegion: isSet(object.serverRegion) ? Number(object.serverRegion) : 0,
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      lanHostPingLocation: isSet(object.lanHostPingLocation) ? String(object.lanHostPingLocation) : "",
      minPlayerCount: isSet(object.minPlayerCount) ? Number(object.minPlayerCount) : 0,
      penaltiesEnabled: isSet(object.penaltiesEnabled) ? Boolean(object.penaltiesEnabled) : false,
    };
  },

  toJSON(message: CMsgPracticeLobbyListResponseEntry): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? CMsgPracticeLobbyListResponseEntry_CLobbyMember.toJSON(e) : undefined
      );
    } else {
      obj.members = [];
    }
    message.requiresPassKey !== undefined && (obj.requiresPassKey = message.requiresPassKey);
    message.leaderAccountId !== undefined && (obj.leaderAccountId = Math.round(message.leaderAccountId));
    message.name !== undefined && (obj.name = message.name);
    message.customGameMode !== undefined && (obj.customGameMode = message.customGameMode);
    message.gameMode !== undefined && (obj.gameMode = dOTAGameModeToJSON(message.gameMode));
    message.friendPresent !== undefined && (obj.friendPresent = message.friendPresent);
    message.players !== undefined && (obj.players = Math.round(message.players));
    message.customMapName !== undefined && (obj.customMapName = message.customMapName);
    message.maxPlayerCount !== undefined && (obj.maxPlayerCount = Math.round(message.maxPlayerCount));
    message.serverRegion !== undefined && (obj.serverRegion = Math.round(message.serverRegion));
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.lanHostPingLocation !== undefined && (obj.lanHostPingLocation = message.lanHostPingLocation);
    message.minPlayerCount !== undefined && (obj.minPlayerCount = Math.round(message.minPlayerCount));
    message.penaltiesEnabled !== undefined && (obj.penaltiesEnabled = message.penaltiesEnabled);
    return obj;
  },
};

function createBaseCMsgPracticeLobbyListResponseEntry_CLobbyMember(): CMsgPracticeLobbyListResponseEntry_CLobbyMember {
  return { accountId: 0, playerName: "" };
}

export const CMsgPracticeLobbyListResponseEntry_CLobbyMember = {
  encode(
    message: CMsgPracticeLobbyListResponseEntry_CLobbyMember,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.playerName !== "") {
      writer.uint32(18).string(message.playerName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbyListResponseEntry_CLobbyMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbyListResponseEntry_CLobbyMember();
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

          message.playerName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPracticeLobbyListResponseEntry_CLobbyMember {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      playerName: isSet(object.playerName) ? String(object.playerName) : "",
    };
  },

  toJSON(message: CMsgPracticeLobbyListResponseEntry_CLobbyMember): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.playerName !== undefined && (obj.playerName = message.playerName);
    return obj;
  },
};

function createBaseCMsgPracticeLobbyListResponse(): CMsgPracticeLobbyListResponse {
  return { lobbies: [] };
}

export const CMsgPracticeLobbyListResponse = {
  encode(message: CMsgPracticeLobbyListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lobbies) {
      CMsgPracticeLobbyListResponseEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbyListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbyListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.lobbies.push(CMsgPracticeLobbyListResponseEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgPracticeLobbyListResponse {
    return {
      lobbies: Array.isArray(object?.lobbies)
        ? object.lobbies.map((e: any) => CMsgPracticeLobbyListResponseEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgPracticeLobbyListResponse): unknown {
    const obj: any = {};
    if (message.lobbies) {
      obj.lobbies = message.lobbies.map((e) => e ? CMsgPracticeLobbyListResponseEntry.toJSON(e) : undefined);
    } else {
      obj.lobbies = [];
    }
    return obj;
  },
};

function createBaseCMsgLobbyList(): CMsgLobbyList {
  return { serverRegion: 0, gameMode: 0 };
}

export const CMsgLobbyList = {
  encode(message: CMsgLobbyList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverRegion !== 0) {
      writer.uint32(8).uint32(message.serverRegion);
    }
    if (message.gameMode !== 0) {
      writer.uint32(16).int32(message.gameMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.serverRegion = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gameMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgLobbyList {
    return {
      serverRegion: isSet(object.serverRegion) ? Number(object.serverRegion) : 0,
      gameMode: isSet(object.gameMode) ? dOTAGameModeFromJSON(object.gameMode) : 0,
    };
  },

  toJSON(message: CMsgLobbyList): unknown {
    const obj: any = {};
    message.serverRegion !== undefined && (obj.serverRegion = Math.round(message.serverRegion));
    message.gameMode !== undefined && (obj.gameMode = dOTAGameModeToJSON(message.gameMode));
    return obj;
  },
};

function createBaseCMsgLobbyListResponse(): CMsgLobbyListResponse {
  return { lobbies: [] };
}

export const CMsgLobbyListResponse = {
  encode(message: CMsgLobbyListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lobbies) {
      CMsgPracticeLobbyListResponseEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLobbyListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLobbyListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.lobbies.push(CMsgPracticeLobbyListResponseEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgLobbyListResponse {
    return {
      lobbies: Array.isArray(object?.lobbies)
        ? object.lobbies.map((e: any) => CMsgPracticeLobbyListResponseEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgLobbyListResponse): unknown {
    const obj: any = {};
    if (message.lobbies) {
      obj.lobbies = message.lobbies.map((e) => e ? CMsgPracticeLobbyListResponseEntry.toJSON(e) : undefined);
    } else {
      obj.lobbies = [];
    }
    return obj;
  },
};

function createBaseCMsgPracticeLobbyJoin(): CMsgPracticeLobbyJoin {
  return { lobbyId: "0", clientVersion: 0, passKey: "", customGameCrc: "0", customGameTimestamp: 0 };
}

export const CMsgPracticeLobbyJoin = {
  encode(message: CMsgPracticeLobbyJoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lobbyId !== "0") {
      writer.uint32(8).uint64(message.lobbyId);
    }
    if (message.clientVersion !== 0) {
      writer.uint32(16).uint32(message.clientVersion);
    }
    if (message.passKey !== "") {
      writer.uint32(26).string(message.passKey);
    }
    if (message.customGameCrc !== "0") {
      writer.uint32(33).fixed64(message.customGameCrc);
    }
    if (message.customGameTimestamp !== 0) {
      writer.uint32(45).fixed32(message.customGameTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbyJoin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbyJoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.lobbyId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.clientVersion = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.passKey = reader.string();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.customGameCrc = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 45) {
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

  fromJSON(object: any): CMsgPracticeLobbyJoin {
    return {
      lobbyId: isSet(object.lobbyId) ? String(object.lobbyId) : "0",
      clientVersion: isSet(object.clientVersion) ? Number(object.clientVersion) : 0,
      passKey: isSet(object.passKey) ? String(object.passKey) : "",
      customGameCrc: isSet(object.customGameCrc) ? String(object.customGameCrc) : "0",
      customGameTimestamp: isSet(object.customGameTimestamp) ? Number(object.customGameTimestamp) : 0,
    };
  },

  toJSON(message: CMsgPracticeLobbyJoin): unknown {
    const obj: any = {};
    message.lobbyId !== undefined && (obj.lobbyId = message.lobbyId);
    message.clientVersion !== undefined && (obj.clientVersion = Math.round(message.clientVersion));
    message.passKey !== undefined && (obj.passKey = message.passKey);
    message.customGameCrc !== undefined && (obj.customGameCrc = message.customGameCrc);
    message.customGameTimestamp !== undefined && (obj.customGameTimestamp = Math.round(message.customGameTimestamp));
    return obj;
  },
};

function createBaseCMsgPracticeLobbyJoinResponse(): CMsgPracticeLobbyJoinResponse {
  return { result: 0 };
}

export const CMsgPracticeLobbyJoinResponse = {
  encode(message: CMsgPracticeLobbyJoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPracticeLobbyJoinResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPracticeLobbyJoinResponse();
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

  fromJSON(object: any): CMsgPracticeLobbyJoinResponse {
    return { result: isSet(object.result) ? dOTAJoinLobbyResultFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgPracticeLobbyJoinResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = dOTAJoinLobbyResultToJSON(message.result));
    return obj;
  },
};

function createBaseCMsgFriendPracticeLobbyListRequest(): CMsgFriendPracticeLobbyListRequest {
  return { friends: [] };
}

export const CMsgFriendPracticeLobbyListRequest = {
  encode(message: CMsgFriendPracticeLobbyListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.friends) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgFriendPracticeLobbyListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgFriendPracticeLobbyListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.friends.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.friends.push(reader.uint32());
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

  fromJSON(object: any): CMsgFriendPracticeLobbyListRequest {
    return { friends: Array.isArray(object?.friends) ? object.friends.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CMsgFriendPracticeLobbyListRequest): unknown {
    const obj: any = {};
    if (message.friends) {
      obj.friends = message.friends.map((e) => Math.round(e));
    } else {
      obj.friends = [];
    }
    return obj;
  },
};

function createBaseCMsgFriendPracticeLobbyListResponse(): CMsgFriendPracticeLobbyListResponse {
  return { lobbies: [] };
}

export const CMsgFriendPracticeLobbyListResponse = {
  encode(message: CMsgFriendPracticeLobbyListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lobbies) {
      CMsgPracticeLobbyListResponseEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgFriendPracticeLobbyListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgFriendPracticeLobbyListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.lobbies.push(CMsgPracticeLobbyListResponseEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgFriendPracticeLobbyListResponse {
    return {
      lobbies: Array.isArray(object?.lobbies)
        ? object.lobbies.map((e: any) => CMsgPracticeLobbyListResponseEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgFriendPracticeLobbyListResponse): unknown {
    const obj: any = {};
    if (message.lobbies) {
      obj.lobbies = message.lobbies.map((e) => e ? CMsgPracticeLobbyListResponseEntry.toJSON(e) : undefined);
    } else {
      obj.lobbies = [];
    }
    return obj;
  },
};

function createBaseCMsgJoinableCustomGameModesRequest(): CMsgJoinableCustomGameModesRequest {
  return { serverRegion: 0 };
}

export const CMsgJoinableCustomGameModesRequest = {
  encode(message: CMsgJoinableCustomGameModesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverRegion !== 0) {
      writer.uint32(8).uint32(message.serverRegion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgJoinableCustomGameModesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgJoinableCustomGameModesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.serverRegion = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgJoinableCustomGameModesRequest {
    return { serverRegion: isSet(object.serverRegion) ? Number(object.serverRegion) : 0 };
  },

  toJSON(message: CMsgJoinableCustomGameModesRequest): unknown {
    const obj: any = {};
    message.serverRegion !== undefined && (obj.serverRegion = Math.round(message.serverRegion));
    return obj;
  },
};

function createBaseCMsgJoinableCustomGameModesResponseEntry(): CMsgJoinableCustomGameModesResponseEntry {
  return { customGameId: "0", lobbyCount: 0, playerCount: 0 };
}

export const CMsgJoinableCustomGameModesResponseEntry = {
  encode(message: CMsgJoinableCustomGameModesResponseEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customGameId !== "0") {
      writer.uint32(8).uint64(message.customGameId);
    }
    if (message.lobbyCount !== 0) {
      writer.uint32(16).uint32(message.lobbyCount);
    }
    if (message.playerCount !== 0) {
      writer.uint32(24).uint32(message.playerCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgJoinableCustomGameModesResponseEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgJoinableCustomGameModesResponseEntry();
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

          message.lobbyCount = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.playerCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgJoinableCustomGameModesResponseEntry {
    return {
      customGameId: isSet(object.customGameId) ? String(object.customGameId) : "0",
      lobbyCount: isSet(object.lobbyCount) ? Number(object.lobbyCount) : 0,
      playerCount: isSet(object.playerCount) ? Number(object.playerCount) : 0,
    };
  },

  toJSON(message: CMsgJoinableCustomGameModesResponseEntry): unknown {
    const obj: any = {};
    message.customGameId !== undefined && (obj.customGameId = message.customGameId);
    message.lobbyCount !== undefined && (obj.lobbyCount = Math.round(message.lobbyCount));
    message.playerCount !== undefined && (obj.playerCount = Math.round(message.playerCount));
    return obj;
  },
};

function createBaseCMsgJoinableCustomGameModesResponse(): CMsgJoinableCustomGameModesResponse {
  return { gameModes: [] };
}

export const CMsgJoinableCustomGameModesResponse = {
  encode(message: CMsgJoinableCustomGameModesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.gameModes) {
      CMsgJoinableCustomGameModesResponseEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgJoinableCustomGameModesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgJoinableCustomGameModesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.gameModes.push(CMsgJoinableCustomGameModesResponseEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgJoinableCustomGameModesResponse {
    return {
      gameModes: Array.isArray(object?.gameModes)
        ? object.gameModes.map((e: any) => CMsgJoinableCustomGameModesResponseEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgJoinableCustomGameModesResponse): unknown {
    const obj: any = {};
    if (message.gameModes) {
      obj.gameModes = message.gameModes.map((e) => e ? CMsgJoinableCustomGameModesResponseEntry.toJSON(e) : undefined);
    } else {
      obj.gameModes = [];
    }
    return obj;
  },
};

function createBaseCMsgJoinableCustomLobbiesRequest(): CMsgJoinableCustomLobbiesRequest {
  return { serverRegion: 0, customGameId: "0" };
}

export const CMsgJoinableCustomLobbiesRequest = {
  encode(message: CMsgJoinableCustomLobbiesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverRegion !== 0) {
      writer.uint32(8).uint32(message.serverRegion);
    }
    if (message.customGameId !== "0") {
      writer.uint32(16).uint64(message.customGameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgJoinableCustomLobbiesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgJoinableCustomLobbiesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.serverRegion = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
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

  fromJSON(object: any): CMsgJoinableCustomLobbiesRequest {
    return {
      serverRegion: isSet(object.serverRegion) ? Number(object.serverRegion) : 0,
      customGameId: isSet(object.customGameId) ? String(object.customGameId) : "0",
    };
  },

  toJSON(message: CMsgJoinableCustomLobbiesRequest): unknown {
    const obj: any = {};
    message.serverRegion !== undefined && (obj.serverRegion = Math.round(message.serverRegion));
    message.customGameId !== undefined && (obj.customGameId = message.customGameId);
    return obj;
  },
};

function createBaseCMsgJoinableCustomLobbiesResponseEntry(): CMsgJoinableCustomLobbiesResponseEntry {
  return {
    lobbyId: "0",
    customGameId: "0",
    lobbyName: "",
    memberCount: 0,
    leaderAccountId: 0,
    leaderName: "",
    customMapName: "",
    maxPlayerCount: 0,
    serverRegion: 0,
    hasPassKey: false,
    lanHostPingLocation: "",
    lobbyCreationTime: 0,
    customGameTimestamp: 0,
    customGameCrc: "0",
    minPlayerCount: 0,
    penaltiesEnabled: false,
  };
}

export const CMsgJoinableCustomLobbiesResponseEntry = {
  encode(message: CMsgJoinableCustomLobbiesResponseEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lobbyId !== "0") {
      writer.uint32(9).fixed64(message.lobbyId);
    }
    if (message.customGameId !== "0") {
      writer.uint32(16).uint64(message.customGameId);
    }
    if (message.lobbyName !== "") {
      writer.uint32(26).string(message.lobbyName);
    }
    if (message.memberCount !== 0) {
      writer.uint32(32).uint32(message.memberCount);
    }
    if (message.leaderAccountId !== 0) {
      writer.uint32(40).uint32(message.leaderAccountId);
    }
    if (message.leaderName !== "") {
      writer.uint32(50).string(message.leaderName);
    }
    if (message.customMapName !== "") {
      writer.uint32(58).string(message.customMapName);
    }
    if (message.maxPlayerCount !== 0) {
      writer.uint32(64).uint32(message.maxPlayerCount);
    }
    if (message.serverRegion !== 0) {
      writer.uint32(72).uint32(message.serverRegion);
    }
    if (message.hasPassKey === true) {
      writer.uint32(88).bool(message.hasPassKey);
    }
    if (message.lanHostPingLocation !== "") {
      writer.uint32(98).string(message.lanHostPingLocation);
    }
    if (message.lobbyCreationTime !== 0) {
      writer.uint32(104).uint32(message.lobbyCreationTime);
    }
    if (message.customGameTimestamp !== 0) {
      writer.uint32(112).uint32(message.customGameTimestamp);
    }
    if (message.customGameCrc !== "0") {
      writer.uint32(120).uint64(message.customGameCrc);
    }
    if (message.minPlayerCount !== 0) {
      writer.uint32(128).uint32(message.minPlayerCount);
    }
    if (message.penaltiesEnabled === true) {
      writer.uint32(136).bool(message.penaltiesEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgJoinableCustomLobbiesResponseEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgJoinableCustomLobbiesResponseEntry();
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
          if (tag != 26) {
            break;
          }

          message.lobbyName = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.memberCount = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.leaderAccountId = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.leaderName = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.customMapName = reader.string();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.maxPlayerCount = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.serverRegion = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.hasPassKey = reader.bool();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.lanHostPingLocation = reader.string();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.lobbyCreationTime = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.customGameTimestamp = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.customGameCrc = longToString(reader.uint64() as Long);
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.minPlayerCount = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.penaltiesEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgJoinableCustomLobbiesResponseEntry {
    return {
      lobbyId: isSet(object.lobbyId) ? String(object.lobbyId) : "0",
      customGameId: isSet(object.customGameId) ? String(object.customGameId) : "0",
      lobbyName: isSet(object.lobbyName) ? String(object.lobbyName) : "",
      memberCount: isSet(object.memberCount) ? Number(object.memberCount) : 0,
      leaderAccountId: isSet(object.leaderAccountId) ? Number(object.leaderAccountId) : 0,
      leaderName: isSet(object.leaderName) ? String(object.leaderName) : "",
      customMapName: isSet(object.customMapName) ? String(object.customMapName) : "",
      maxPlayerCount: isSet(object.maxPlayerCount) ? Number(object.maxPlayerCount) : 0,
      serverRegion: isSet(object.serverRegion) ? Number(object.serverRegion) : 0,
      hasPassKey: isSet(object.hasPassKey) ? Boolean(object.hasPassKey) : false,
      lanHostPingLocation: isSet(object.lanHostPingLocation) ? String(object.lanHostPingLocation) : "",
      lobbyCreationTime: isSet(object.lobbyCreationTime) ? Number(object.lobbyCreationTime) : 0,
      customGameTimestamp: isSet(object.customGameTimestamp) ? Number(object.customGameTimestamp) : 0,
      customGameCrc: isSet(object.customGameCrc) ? String(object.customGameCrc) : "0",
      minPlayerCount: isSet(object.minPlayerCount) ? Number(object.minPlayerCount) : 0,
      penaltiesEnabled: isSet(object.penaltiesEnabled) ? Boolean(object.penaltiesEnabled) : false,
    };
  },

  toJSON(message: CMsgJoinableCustomLobbiesResponseEntry): unknown {
    const obj: any = {};
    message.lobbyId !== undefined && (obj.lobbyId = message.lobbyId);
    message.customGameId !== undefined && (obj.customGameId = message.customGameId);
    message.lobbyName !== undefined && (obj.lobbyName = message.lobbyName);
    message.memberCount !== undefined && (obj.memberCount = Math.round(message.memberCount));
    message.leaderAccountId !== undefined && (obj.leaderAccountId = Math.round(message.leaderAccountId));
    message.leaderName !== undefined && (obj.leaderName = message.leaderName);
    message.customMapName !== undefined && (obj.customMapName = message.customMapName);
    message.maxPlayerCount !== undefined && (obj.maxPlayerCount = Math.round(message.maxPlayerCount));
    message.serverRegion !== undefined && (obj.serverRegion = Math.round(message.serverRegion));
    message.hasPassKey !== undefined && (obj.hasPassKey = message.hasPassKey);
    message.lanHostPingLocation !== undefined && (obj.lanHostPingLocation = message.lanHostPingLocation);
    message.lobbyCreationTime !== undefined && (obj.lobbyCreationTime = Math.round(message.lobbyCreationTime));
    message.customGameTimestamp !== undefined && (obj.customGameTimestamp = Math.round(message.customGameTimestamp));
    message.customGameCrc !== undefined && (obj.customGameCrc = message.customGameCrc);
    message.minPlayerCount !== undefined && (obj.minPlayerCount = Math.round(message.minPlayerCount));
    message.penaltiesEnabled !== undefined && (obj.penaltiesEnabled = message.penaltiesEnabled);
    return obj;
  },
};

function createBaseCMsgJoinableCustomLobbiesResponse(): CMsgJoinableCustomLobbiesResponse {
  return { lobbies: [] };
}

export const CMsgJoinableCustomLobbiesResponse = {
  encode(message: CMsgJoinableCustomLobbiesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lobbies) {
      CMsgJoinableCustomLobbiesResponseEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgJoinableCustomLobbiesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgJoinableCustomLobbiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.lobbies.push(CMsgJoinableCustomLobbiesResponseEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgJoinableCustomLobbiesResponse {
    return {
      lobbies: Array.isArray(object?.lobbies)
        ? object.lobbies.map((e: any) => CMsgJoinableCustomLobbiesResponseEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgJoinableCustomLobbiesResponse): unknown {
    const obj: any = {};
    if (message.lobbies) {
      obj.lobbies = message.lobbies.map((e) => e ? CMsgJoinableCustomLobbiesResponseEntry.toJSON(e) : undefined);
    } else {
      obj.lobbies = [];
    }
    return obj;
  },
};

function createBaseCMsgQuickJoinCustomLobby(): CMsgQuickJoinCustomLobby {
  return {
    legacyServerRegion: 0,
    customGameId: "0",
    clientVersion: 0,
    createLobbyDetails: undefined,
    allowAnyMap: false,
    legacyRegionPings: [],
    pingData: undefined,
  };
}

export const CMsgQuickJoinCustomLobby = {
  encode(message: CMsgQuickJoinCustomLobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.legacyServerRegion !== 0) {
      writer.uint32(8).uint32(message.legacyServerRegion);
    }
    if (message.customGameId !== "0") {
      writer.uint32(16).uint64(message.customGameId);
    }
    if (message.clientVersion !== 0) {
      writer.uint32(24).uint32(message.clientVersion);
    }
    if (message.createLobbyDetails !== undefined) {
      CMsgPracticeLobbySetDetails.encode(message.createLobbyDetails, writer.uint32(34).fork()).ldelim();
    }
    if (message.allowAnyMap === true) {
      writer.uint32(40).bool(message.allowAnyMap);
    }
    for (const v of message.legacyRegionPings) {
      CMsgQuickJoinCustomLobby_LegacyRegionPing.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.pingData !== undefined) {
      CMsgClientPingData.encode(message.pingData, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgQuickJoinCustomLobby {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgQuickJoinCustomLobby();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.legacyServerRegion = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.customGameId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.clientVersion = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.createLobbyDetails = CMsgPracticeLobbySetDetails.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.allowAnyMap = reader.bool();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.legacyRegionPings.push(CMsgQuickJoinCustomLobby_LegacyRegionPing.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.pingData = CMsgClientPingData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgQuickJoinCustomLobby {
    return {
      legacyServerRegion: isSet(object.legacyServerRegion) ? Number(object.legacyServerRegion) : 0,
      customGameId: isSet(object.customGameId) ? String(object.customGameId) : "0",
      clientVersion: isSet(object.clientVersion) ? Number(object.clientVersion) : 0,
      createLobbyDetails: isSet(object.createLobbyDetails)
        ? CMsgPracticeLobbySetDetails.fromJSON(object.createLobbyDetails)
        : undefined,
      allowAnyMap: isSet(object.allowAnyMap) ? Boolean(object.allowAnyMap) : false,
      legacyRegionPings: Array.isArray(object?.legacyRegionPings)
        ? object.legacyRegionPings.map((e: any) => CMsgQuickJoinCustomLobby_LegacyRegionPing.fromJSON(e))
        : [],
      pingData: isSet(object.pingData) ? CMsgClientPingData.fromJSON(object.pingData) : undefined,
    };
  },

  toJSON(message: CMsgQuickJoinCustomLobby): unknown {
    const obj: any = {};
    message.legacyServerRegion !== undefined && (obj.legacyServerRegion = Math.round(message.legacyServerRegion));
    message.customGameId !== undefined && (obj.customGameId = message.customGameId);
    message.clientVersion !== undefined && (obj.clientVersion = Math.round(message.clientVersion));
    message.createLobbyDetails !== undefined && (obj.createLobbyDetails = message.createLobbyDetails
      ? CMsgPracticeLobbySetDetails.toJSON(message.createLobbyDetails)
      : undefined);
    message.allowAnyMap !== undefined && (obj.allowAnyMap = message.allowAnyMap);
    if (message.legacyRegionPings) {
      obj.legacyRegionPings = message.legacyRegionPings.map((e) =>
        e ? CMsgQuickJoinCustomLobby_LegacyRegionPing.toJSON(e) : undefined
      );
    } else {
      obj.legacyRegionPings = [];
    }
    message.pingData !== undefined &&
      (obj.pingData = message.pingData ? CMsgClientPingData.toJSON(message.pingData) : undefined);
    return obj;
  },
};

function createBaseCMsgQuickJoinCustomLobby_LegacyRegionPing(): CMsgQuickJoinCustomLobby_LegacyRegionPing {
  return { serverRegion: 0, ping: 0, regionCode: 0 };
}

export const CMsgQuickJoinCustomLobby_LegacyRegionPing = {
  encode(message: CMsgQuickJoinCustomLobby_LegacyRegionPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverRegion !== 0) {
      writer.uint32(8).uint32(message.serverRegion);
    }
    if (message.ping !== 0) {
      writer.uint32(16).uint32(message.ping);
    }
    if (message.regionCode !== 0) {
      writer.uint32(29).fixed32(message.regionCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgQuickJoinCustomLobby_LegacyRegionPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgQuickJoinCustomLobby_LegacyRegionPing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.serverRegion = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.ping = reader.uint32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.regionCode = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgQuickJoinCustomLobby_LegacyRegionPing {
    return {
      serverRegion: isSet(object.serverRegion) ? Number(object.serverRegion) : 0,
      ping: isSet(object.ping) ? Number(object.ping) : 0,
      regionCode: isSet(object.regionCode) ? Number(object.regionCode) : 0,
    };
  },

  toJSON(message: CMsgQuickJoinCustomLobby_LegacyRegionPing): unknown {
    const obj: any = {};
    message.serverRegion !== undefined && (obj.serverRegion = Math.round(message.serverRegion));
    message.ping !== undefined && (obj.ping = Math.round(message.ping));
    message.regionCode !== undefined && (obj.regionCode = Math.round(message.regionCode));
    return obj;
  },
};

function createBaseCMsgQuickJoinCustomLobbyResponse(): CMsgQuickJoinCustomLobbyResponse {
  return { result: 0 };
}

export const CMsgQuickJoinCustomLobbyResponse = {
  encode(message: CMsgQuickJoinCustomLobbyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgQuickJoinCustomLobbyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgQuickJoinCustomLobbyResponse();
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

  fromJSON(object: any): CMsgQuickJoinCustomLobbyResponse {
    return { result: isSet(object.result) ? dOTAJoinLobbyResultFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgQuickJoinCustomLobbyResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = dOTAJoinLobbyResultToJSON(message.result));
    return obj;
  },
};

function createBaseCMsgBotGameCreate(): CMsgBotGameCreate {
  return { searchKey: "", clientVersion: 0, difficultyRadiant: 0, team: 0, gameMode: 0, difficultyDire: 0 };
}

export const CMsgBotGameCreate = {
  encode(message: CMsgBotGameCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.searchKey !== "") {
      writer.uint32(10).string(message.searchKey);
    }
    if (message.clientVersion !== 0) {
      writer.uint32(16).uint32(message.clientVersion);
    }
    if (message.difficultyRadiant !== 0) {
      writer.uint32(24).int32(message.difficultyRadiant);
    }
    if (message.team !== 0) {
      writer.uint32(32).int32(message.team);
    }
    if (message.gameMode !== 0) {
      writer.uint32(40).uint32(message.gameMode);
    }
    if (message.difficultyDire !== 0) {
      writer.uint32(48).int32(message.difficultyDire);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotGameCreate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotGameCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.searchKey = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.clientVersion = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.difficultyRadiant = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.team = reader.int32() as any;
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

          message.difficultyDire = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBotGameCreate {
    return {
      searchKey: isSet(object.searchKey) ? String(object.searchKey) : "",
      clientVersion: isSet(object.clientVersion) ? Number(object.clientVersion) : 0,
      difficultyRadiant: isSet(object.difficultyRadiant) ? dOTABotDifficultyFromJSON(object.difficultyRadiant) : 0,
      team: isSet(object.team) ? dotaGcTeamFromJSON(object.team) : 0,
      gameMode: isSet(object.gameMode) ? Number(object.gameMode) : 0,
      difficultyDire: isSet(object.difficultyDire) ? dOTABotDifficultyFromJSON(object.difficultyDire) : 0,
    };
  },

  toJSON(message: CMsgBotGameCreate): unknown {
    const obj: any = {};
    message.searchKey !== undefined && (obj.searchKey = message.searchKey);
    message.clientVersion !== undefined && (obj.clientVersion = Math.round(message.clientVersion));
    message.difficultyRadiant !== undefined &&
      (obj.difficultyRadiant = dOTABotDifficultyToJSON(message.difficultyRadiant));
    message.team !== undefined && (obj.team = dotaGcTeamToJSON(message.team));
    message.gameMode !== undefined && (obj.gameMode = Math.round(message.gameMode));
    message.difficultyDire !== undefined && (obj.difficultyDire = dOTABotDifficultyToJSON(message.difficultyDire));
    return obj;
  },
};

function createBaseCMsgDOTAPartyMemberSetCoach(): CMsgDOTAPartyMemberSetCoach {
  return { wantsCoach: false };
}

export const CMsgDOTAPartyMemberSetCoach = {
  encode(message: CMsgDOTAPartyMemberSetCoach, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wantsCoach === true) {
      writer.uint32(8).bool(message.wantsCoach);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAPartyMemberSetCoach {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAPartyMemberSetCoach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.wantsCoach = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAPartyMemberSetCoach {
    return { wantsCoach: isSet(object.wantsCoach) ? Boolean(object.wantsCoach) : false };
  },

  toJSON(message: CMsgDOTAPartyMemberSetCoach): unknown {
    const obj: any = {};
    message.wantsCoach !== undefined && (obj.wantsCoach = message.wantsCoach);
    return obj;
  },
};

function createBaseCMsgDOTASetGroupLeader(): CMsgDOTASetGroupLeader {
  return { newLeaderSteamid: "0" };
}

export const CMsgDOTASetGroupLeader = {
  encode(message: CMsgDOTASetGroupLeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newLeaderSteamid !== "0") {
      writer.uint32(9).fixed64(message.newLeaderSteamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASetGroupLeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASetGroupLeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.newLeaderSteamid = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTASetGroupLeader {
    return { newLeaderSteamid: isSet(object.newLeaderSteamid) ? String(object.newLeaderSteamid) : "0" };
  },

  toJSON(message: CMsgDOTASetGroupLeader): unknown {
    const obj: any = {};
    message.newLeaderSteamid !== undefined && (obj.newLeaderSteamid = message.newLeaderSteamid);
    return obj;
  },
};

function createBaseCMsgDOTACancelGroupInvites(): CMsgDOTACancelGroupInvites {
  return { invitedSteamids: [], invitedGroupids: [] };
}

export const CMsgDOTACancelGroupInvites = {
  encode(message: CMsgDOTACancelGroupInvites, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.invitedSteamids) {
      writer.fixed64(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.invitedGroupids) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTACancelGroupInvites {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTACancelGroupInvites();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 9) {
            message.invitedSteamids.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.invitedSteamids.push(longToString(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 2:
          if (tag == 17) {
            message.invitedGroupids.push(longToString(reader.fixed64() as Long));
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.invitedGroupids.push(longToString(reader.fixed64() as Long));
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

  fromJSON(object: any): CMsgDOTACancelGroupInvites {
    return {
      invitedSteamids: Array.isArray(object?.invitedSteamids) ? object.invitedSteamids.map((e: any) => String(e)) : [],
      invitedGroupids: Array.isArray(object?.invitedGroupids) ? object.invitedGroupids.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgDOTACancelGroupInvites): unknown {
    const obj: any = {};
    if (message.invitedSteamids) {
      obj.invitedSteamids = message.invitedSteamids.map((e) => e);
    } else {
      obj.invitedSteamids = [];
    }
    if (message.invitedGroupids) {
      obj.invitedGroupids = message.invitedGroupids.map((e) => e);
    } else {
      obj.invitedGroupids = [];
    }
    return obj;
  },
};

function createBaseCMsgDOTASetGroupOpenStatus(): CMsgDOTASetGroupOpenStatus {
  return { open: false };
}

export const CMsgDOTASetGroupOpenStatus = {
  encode(message: CMsgDOTASetGroupOpenStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.open === true) {
      writer.uint32(8).bool(message.open);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTASetGroupOpenStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTASetGroupOpenStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.open = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTASetGroupOpenStatus {
    return { open: isSet(object.open) ? Boolean(object.open) : false };
  },

  toJSON(message: CMsgDOTASetGroupOpenStatus): unknown {
    const obj: any = {};
    message.open !== undefined && (obj.open = message.open);
    return obj;
  },
};

function createBaseCMsgDOTAGroupMergeInvite(): CMsgDOTAGroupMergeInvite {
  return { otherGroupId: "0" };
}

export const CMsgDOTAGroupMergeInvite = {
  encode(message: CMsgDOTAGroupMergeInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.otherGroupId !== "0") {
      writer.uint32(9).fixed64(message.otherGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAGroupMergeInvite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAGroupMergeInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.otherGroupId = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAGroupMergeInvite {
    return { otherGroupId: isSet(object.otherGroupId) ? String(object.otherGroupId) : "0" };
  },

  toJSON(message: CMsgDOTAGroupMergeInvite): unknown {
    const obj: any = {};
    message.otherGroupId !== undefined && (obj.otherGroupId = message.otherGroupId);
    return obj;
  },
};

function createBaseCMsgDOTAGroupMergeResponse(): CMsgDOTAGroupMergeResponse {
  return { initiatorGroupId: "0", accept: false };
}

export const CMsgDOTAGroupMergeResponse = {
  encode(message: CMsgDOTAGroupMergeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initiatorGroupId !== "0") {
      writer.uint32(9).fixed64(message.initiatorGroupId);
    }
    if (message.accept === true) {
      writer.uint32(16).bool(message.accept);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAGroupMergeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAGroupMergeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.initiatorGroupId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.accept = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDOTAGroupMergeResponse {
    return {
      initiatorGroupId: isSet(object.initiatorGroupId) ? String(object.initiatorGroupId) : "0",
      accept: isSet(object.accept) ? Boolean(object.accept) : false,
    };
  },

  toJSON(message: CMsgDOTAGroupMergeResponse): unknown {
    const obj: any = {};
    message.initiatorGroupId !== undefined && (obj.initiatorGroupId = message.initiatorGroupId);
    message.accept !== undefined && (obj.accept = message.accept);
    return obj;
  },
};

function createBaseCMsgDOTAGroupMergeReply(): CMsgDOTAGroupMergeReply {
  return { result: 0 };
}

export const CMsgDOTAGroupMergeReply = {
  encode(message: CMsgDOTAGroupMergeReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTAGroupMergeReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTAGroupMergeReply();
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

  fromJSON(object: any): CMsgDOTAGroupMergeReply {
    return { result: isSet(object.result) ? eDOTAGroupMergeResultFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgDOTAGroupMergeReply): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = eDOTAGroupMergeResultToJSON(message.result));
    return obj;
  },
};

function createBaseCMsgSpectatorLobbyGameDetails(): CMsgSpectatorLobbyGameDetails {
  return {
    language: 0,
    matchId: "0",
    serverSteamId: "0",
    streamUrl: "",
    streamName: "",
    leagueId: 0,
    seriesType: 0,
    seriesGame: 0,
    radiantTeam: undefined,
    direTeam: undefined,
  };
}

export const CMsgSpectatorLobbyGameDetails = {
  encode(message: CMsgSpectatorLobbyGameDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.language !== 0) {
      writer.uint32(8).uint32(message.language);
    }
    if (message.matchId !== "0") {
      writer.uint32(16).uint64(message.matchId);
    }
    if (message.serverSteamId !== "0") {
      writer.uint32(25).fixed64(message.serverSteamId);
    }
    if (message.streamUrl !== "") {
      writer.uint32(34).string(message.streamUrl);
    }
    if (message.streamName !== "") {
      writer.uint32(42).string(message.streamName);
    }
    if (message.leagueId !== 0) {
      writer.uint32(48).uint32(message.leagueId);
    }
    if (message.seriesType !== 0) {
      writer.uint32(56).uint32(message.seriesType);
    }
    if (message.seriesGame !== 0) {
      writer.uint32(64).uint32(message.seriesGame);
    }
    if (message.radiantTeam !== undefined) {
      CMsgSpectatorLobbyGameDetails_Team.encode(message.radiantTeam, writer.uint32(74).fork()).ldelim();
    }
    if (message.direTeam !== undefined) {
      CMsgSpectatorLobbyGameDetails_Team.encode(message.direTeam, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSpectatorLobbyGameDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSpectatorLobbyGameDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.language = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.serverSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.streamUrl = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.streamName = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.seriesType = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.seriesGame = reader.uint32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.radiantTeam = CMsgSpectatorLobbyGameDetails_Team.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.direTeam = CMsgSpectatorLobbyGameDetails_Team.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSpectatorLobbyGameDetails {
    return {
      language: isSet(object.language) ? Number(object.language) : 0,
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      serverSteamId: isSet(object.serverSteamId) ? String(object.serverSteamId) : "0",
      streamUrl: isSet(object.streamUrl) ? String(object.streamUrl) : "",
      streamName: isSet(object.streamName) ? String(object.streamName) : "",
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      seriesType: isSet(object.seriesType) ? Number(object.seriesType) : 0,
      seriesGame: isSet(object.seriesGame) ? Number(object.seriesGame) : 0,
      radiantTeam: isSet(object.radiantTeam)
        ? CMsgSpectatorLobbyGameDetails_Team.fromJSON(object.radiantTeam)
        : undefined,
      direTeam: isSet(object.direTeam) ? CMsgSpectatorLobbyGameDetails_Team.fromJSON(object.direTeam) : undefined,
    };
  },

  toJSON(message: CMsgSpectatorLobbyGameDetails): unknown {
    const obj: any = {};
    message.language !== undefined && (obj.language = Math.round(message.language));
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.serverSteamId !== undefined && (obj.serverSteamId = message.serverSteamId);
    message.streamUrl !== undefined && (obj.streamUrl = message.streamUrl);
    message.streamName !== undefined && (obj.streamName = message.streamName);
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.seriesType !== undefined && (obj.seriesType = Math.round(message.seriesType));
    message.seriesGame !== undefined && (obj.seriesGame = Math.round(message.seriesGame));
    message.radiantTeam !== undefined && (obj.radiantTeam = message.radiantTeam
      ? CMsgSpectatorLobbyGameDetails_Team.toJSON(message.radiantTeam)
      : undefined);
    message.direTeam !== undefined &&
      (obj.direTeam = message.direTeam ? CMsgSpectatorLobbyGameDetails_Team.toJSON(message.direTeam) : undefined);
    return obj;
  },
};

function createBaseCMsgSpectatorLobbyGameDetails_Team(): CMsgSpectatorLobbyGameDetails_Team {
  return { teamId: 0, teamName: "", teamLogo: "0" };
}

export const CMsgSpectatorLobbyGameDetails_Team = {
  encode(message: CMsgSpectatorLobbyGameDetails_Team, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).uint32(message.teamId);
    }
    if (message.teamName !== "") {
      writer.uint32(18).string(message.teamName);
    }
    if (message.teamLogo !== "0") {
      writer.uint32(25).fixed64(message.teamLogo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSpectatorLobbyGameDetails_Team {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSpectatorLobbyGameDetails_Team();
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
          if (tag != 25) {
            break;
          }

          message.teamLogo = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSpectatorLobbyGameDetails_Team {
    return {
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      teamName: isSet(object.teamName) ? String(object.teamName) : "",
      teamLogo: isSet(object.teamLogo) ? String(object.teamLogo) : "0",
    };
  },

  toJSON(message: CMsgSpectatorLobbyGameDetails_Team): unknown {
    const obj: any = {};
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.teamName !== undefined && (obj.teamName = message.teamName);
    message.teamLogo !== undefined && (obj.teamLogo = message.teamLogo);
    return obj;
  },
};

function createBaseCMsgSetSpectatorLobbyDetails(): CMsgSetSpectatorLobbyDetails {
  return { lobbyId: "0", lobbyName: "", passKey: "", gameDetails: undefined };
}

export const CMsgSetSpectatorLobbyDetails = {
  encode(message: CMsgSetSpectatorLobbyDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lobbyId !== "0") {
      writer.uint32(8).uint64(message.lobbyId);
    }
    if (message.lobbyName !== "") {
      writer.uint32(18).string(message.lobbyName);
    }
    if (message.passKey !== "") {
      writer.uint32(26).string(message.passKey);
    }
    if (message.gameDetails !== undefined) {
      CMsgSpectatorLobbyGameDetails.encode(message.gameDetails, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetSpectatorLobbyDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetSpectatorLobbyDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.lobbyId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.lobbyName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.passKey = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.gameDetails = CMsgSpectatorLobbyGameDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSetSpectatorLobbyDetails {
    return {
      lobbyId: isSet(object.lobbyId) ? String(object.lobbyId) : "0",
      lobbyName: isSet(object.lobbyName) ? String(object.lobbyName) : "",
      passKey: isSet(object.passKey) ? String(object.passKey) : "",
      gameDetails: isSet(object.gameDetails) ? CMsgSpectatorLobbyGameDetails.fromJSON(object.gameDetails) : undefined,
    };
  },

  toJSON(message: CMsgSetSpectatorLobbyDetails): unknown {
    const obj: any = {};
    message.lobbyId !== undefined && (obj.lobbyId = message.lobbyId);
    message.lobbyName !== undefined && (obj.lobbyName = message.lobbyName);
    message.passKey !== undefined && (obj.passKey = message.passKey);
    message.gameDetails !== undefined &&
      (obj.gameDetails = message.gameDetails ? CMsgSpectatorLobbyGameDetails.toJSON(message.gameDetails) : undefined);
    return obj;
  },
};

function createBaseCMsgCreateSpectatorLobby(): CMsgCreateSpectatorLobby {
  return { clientVersion: 0, details: undefined };
}

export const CMsgCreateSpectatorLobby = {
  encode(message: CMsgCreateSpectatorLobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientVersion !== 0) {
      writer.uint32(8).uint32(message.clientVersion);
    }
    if (message.details !== undefined) {
      CMsgSetSpectatorLobbyDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCreateSpectatorLobby {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCreateSpectatorLobby();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.clientVersion = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.details = CMsgSetSpectatorLobbyDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgCreateSpectatorLobby {
    return {
      clientVersion: isSet(object.clientVersion) ? Number(object.clientVersion) : 0,
      details: isSet(object.details) ? CMsgSetSpectatorLobbyDetails.fromJSON(object.details) : undefined,
    };
  },

  toJSON(message: CMsgCreateSpectatorLobby): unknown {
    const obj: any = {};
    message.clientVersion !== undefined && (obj.clientVersion = Math.round(message.clientVersion));
    message.details !== undefined &&
      (obj.details = message.details ? CMsgSetSpectatorLobbyDetails.toJSON(message.details) : undefined);
    return obj;
  },
};

function createBaseCMsgSpectatorLobbyList(): CMsgSpectatorLobbyList {
  return {};
}

export const CMsgSpectatorLobbyList = {
  encode(_: CMsgSpectatorLobbyList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSpectatorLobbyList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSpectatorLobbyList();
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

  fromJSON(_: any): CMsgSpectatorLobbyList {
    return {};
  },

  toJSON(_: CMsgSpectatorLobbyList): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgSpectatorLobbyListResponse(): CMsgSpectatorLobbyListResponse {
  return { lobbies: [] };
}

export const CMsgSpectatorLobbyListResponse = {
  encode(message: CMsgSpectatorLobbyListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lobbies) {
      CMsgSpectatorLobbyListResponse_SpectatorLobby.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSpectatorLobbyListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSpectatorLobbyListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.lobbies.push(CMsgSpectatorLobbyListResponse_SpectatorLobby.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSpectatorLobbyListResponse {
    return {
      lobbies: Array.isArray(object?.lobbies)
        ? object.lobbies.map((e: any) => CMsgSpectatorLobbyListResponse_SpectatorLobby.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSpectatorLobbyListResponse): unknown {
    const obj: any = {};
    if (message.lobbies) {
      obj.lobbies = message.lobbies.map((e) => e ? CMsgSpectatorLobbyListResponse_SpectatorLobby.toJSON(e) : undefined);
    } else {
      obj.lobbies = [];
    }
    return obj;
  },
};

function createBaseCMsgSpectatorLobbyListResponse_SpectatorLobby(): CMsgSpectatorLobbyListResponse_SpectatorLobby {
  return {
    lobbyId: "0",
    gameName: "",
    requiresPassKey: false,
    leaderAccountId: 0,
    memberCount: 0,
    gameDetails: undefined,
  };
}

export const CMsgSpectatorLobbyListResponse_SpectatorLobby = {
  encode(message: CMsgSpectatorLobbyListResponse_SpectatorLobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lobbyId !== "0") {
      writer.uint32(8).uint64(message.lobbyId);
    }
    if (message.gameName !== "") {
      writer.uint32(18).string(message.gameName);
    }
    if (message.requiresPassKey === true) {
      writer.uint32(24).bool(message.requiresPassKey);
    }
    if (message.leaderAccountId !== 0) {
      writer.uint32(32).uint32(message.leaderAccountId);
    }
    if (message.memberCount !== 0) {
      writer.uint32(40).uint32(message.memberCount);
    }
    if (message.gameDetails !== undefined) {
      CMsgSpectatorLobbyGameDetails.encode(message.gameDetails, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSpectatorLobbyListResponse_SpectatorLobby {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSpectatorLobbyListResponse_SpectatorLobby();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.lobbyId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.gameName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.requiresPassKey = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.leaderAccountId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.memberCount = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.gameDetails = CMsgSpectatorLobbyGameDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSpectatorLobbyListResponse_SpectatorLobby {
    return {
      lobbyId: isSet(object.lobbyId) ? String(object.lobbyId) : "0",
      gameName: isSet(object.gameName) ? String(object.gameName) : "",
      requiresPassKey: isSet(object.requiresPassKey) ? Boolean(object.requiresPassKey) : false,
      leaderAccountId: isSet(object.leaderAccountId) ? Number(object.leaderAccountId) : 0,
      memberCount: isSet(object.memberCount) ? Number(object.memberCount) : 0,
      gameDetails: isSet(object.gameDetails) ? CMsgSpectatorLobbyGameDetails.fromJSON(object.gameDetails) : undefined,
    };
  },

  toJSON(message: CMsgSpectatorLobbyListResponse_SpectatorLobby): unknown {
    const obj: any = {};
    message.lobbyId !== undefined && (obj.lobbyId = message.lobbyId);
    message.gameName !== undefined && (obj.gameName = message.gameName);
    message.requiresPassKey !== undefined && (obj.requiresPassKey = message.requiresPassKey);
    message.leaderAccountId !== undefined && (obj.leaderAccountId = Math.round(message.leaderAccountId));
    message.memberCount !== undefined && (obj.memberCount = Math.round(message.memberCount));
    message.gameDetails !== undefined &&
      (obj.gameDetails = message.gameDetails ? CMsgSpectatorLobbyGameDetails.toJSON(message.gameDetails) : undefined);
    return obj;
  },
};

function createBaseCMsgClientToGCRequestSteamDatagramTicket(): CMsgClientToGCRequestSteamDatagramTicket {
  return { serverSteamId: "0" };
}

export const CMsgClientToGCRequestSteamDatagramTicket = {
  encode(message: CMsgClientToGCRequestSteamDatagramTicket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverSteamId !== "0") {
      writer.uint32(9).fixed64(message.serverSteamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestSteamDatagramTicket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestSteamDatagramTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.serverSteamId = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCRequestSteamDatagramTicket {
    return { serverSteamId: isSet(object.serverSteamId) ? String(object.serverSteamId) : "0" };
  },

  toJSON(message: CMsgClientToGCRequestSteamDatagramTicket): unknown {
    const obj: any = {};
    message.serverSteamId !== undefined && (obj.serverSteamId = message.serverSteamId);
    return obj;
  },
};

function createBaseCMsgClientToGCRequestSteamDatagramTicketResponse(): CMsgClientToGCRequestSteamDatagramTicketResponse {
  return { serializedTicket: Buffer.alloc(0), message: "" };
}

export const CMsgClientToGCRequestSteamDatagramTicketResponse = {
  encode(
    message: CMsgClientToGCRequestSteamDatagramTicketResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.serializedTicket.length !== 0) {
      writer.uint32(10).bytes(message.serializedTicket);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCRequestSteamDatagramTicketResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCRequestSteamDatagramTicketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.serializedTicket = reader.bytes() as Buffer;
          continue;
        case 2:
          if (tag != 18) {
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

  fromJSON(object: any): CMsgClientToGCRequestSteamDatagramTicketResponse {
    return {
      serializedTicket: isSet(object.serializedTicket)
        ? Buffer.from(bytesFromBase64(object.serializedTicket))
        : Buffer.alloc(0),
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: CMsgClientToGCRequestSteamDatagramTicketResponse): unknown {
    const obj: any = {};
    message.serializedTicket !== undefined &&
      (obj.serializedTicket = base64FromBytes(
        message.serializedTicket !== undefined ? message.serializedTicket : Buffer.alloc(0),
      ));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },
};

function createBaseCMsgGCToClientSteamDatagramTicket(): CMsgGCToClientSteamDatagramTicket {
  return {
    legacyTimeExpiry: 0,
    legacyAuthorizedSteamId: "0",
    legacyAuthorizedPublicIp: 0,
    legacyGameserverSteamId: "0",
    legacyGameserverNetId: "0",
    legacySignature: Buffer.alloc(0),
    legacyAppId: 0,
    legacyExtraFields: [],
    serializedTicket: Buffer.alloc(0),
  };
}

export const CMsgGCToClientSteamDatagramTicket = {
  encode(message: CMsgGCToClientSteamDatagramTicket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.legacyTimeExpiry !== 0) {
      writer.uint32(13).fixed32(message.legacyTimeExpiry);
    }
    if (message.legacyAuthorizedSteamId !== "0") {
      writer.uint32(17).fixed64(message.legacyAuthorizedSteamId);
    }
    if (message.legacyAuthorizedPublicIp !== 0) {
      writer.uint32(29).fixed32(message.legacyAuthorizedPublicIp);
    }
    if (message.legacyGameserverSteamId !== "0") {
      writer.uint32(33).fixed64(message.legacyGameserverSteamId);
    }
    if (message.legacyGameserverNetId !== "0") {
      writer.uint32(41).fixed64(message.legacyGameserverNetId);
    }
    if (message.legacySignature.length !== 0) {
      writer.uint32(50).bytes(message.legacySignature);
    }
    if (message.legacyAppId !== 0) {
      writer.uint32(56).uint32(message.legacyAppId);
    }
    for (const v of message.legacyExtraFields) {
      writer.uint32(66).bytes(v!);
    }
    if (message.serializedTicket.length !== 0) {
      writer.uint32(130).bytes(message.serializedTicket);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientSteamDatagramTicket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientSteamDatagramTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.legacyTimeExpiry = reader.fixed32();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.legacyAuthorizedSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.legacyAuthorizedPublicIp = reader.fixed32();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.legacyGameserverSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 41) {
            break;
          }

          message.legacyGameserverNetId = longToString(reader.fixed64() as Long);
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.legacySignature = reader.bytes() as Buffer;
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.legacyAppId = reader.uint32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.legacyExtraFields.push(reader.bytes() as Buffer);
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.serializedTicket = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToClientSteamDatagramTicket {
    return {
      legacyTimeExpiry: isSet(object.legacyTimeExpiry) ? Number(object.legacyTimeExpiry) : 0,
      legacyAuthorizedSteamId: isSet(object.legacyAuthorizedSteamId) ? String(object.legacyAuthorizedSteamId) : "0",
      legacyAuthorizedPublicIp: isSet(object.legacyAuthorizedPublicIp) ? Number(object.legacyAuthorizedPublicIp) : 0,
      legacyGameserverSteamId: isSet(object.legacyGameserverSteamId) ? String(object.legacyGameserverSteamId) : "0",
      legacyGameserverNetId: isSet(object.legacyGameserverNetId) ? String(object.legacyGameserverNetId) : "0",
      legacySignature: isSet(object.legacySignature)
        ? Buffer.from(bytesFromBase64(object.legacySignature))
        : Buffer.alloc(0),
      legacyAppId: isSet(object.legacyAppId) ? Number(object.legacyAppId) : 0,
      legacyExtraFields: Array.isArray(object?.legacyExtraFields)
        ? object.legacyExtraFields.map((e: any) => Buffer.from(bytesFromBase64(e)))
        : [],
      serializedTicket: isSet(object.serializedTicket)
        ? Buffer.from(bytesFromBase64(object.serializedTicket))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgGCToClientSteamDatagramTicket): unknown {
    const obj: any = {};
    message.legacyTimeExpiry !== undefined && (obj.legacyTimeExpiry = Math.round(message.legacyTimeExpiry));
    message.legacyAuthorizedSteamId !== undefined && (obj.legacyAuthorizedSteamId = message.legacyAuthorizedSteamId);
    message.legacyAuthorizedPublicIp !== undefined &&
      (obj.legacyAuthorizedPublicIp = Math.round(message.legacyAuthorizedPublicIp));
    message.legacyGameserverSteamId !== undefined && (obj.legacyGameserverSteamId = message.legacyGameserverSteamId);
    message.legacyGameserverNetId !== undefined && (obj.legacyGameserverNetId = message.legacyGameserverNetId);
    message.legacySignature !== undefined &&
      (obj.legacySignature = base64FromBytes(
        message.legacySignature !== undefined ? message.legacySignature : Buffer.alloc(0),
      ));
    message.legacyAppId !== undefined && (obj.legacyAppId = Math.round(message.legacyAppId));
    if (message.legacyExtraFields) {
      obj.legacyExtraFields = message.legacyExtraFields.map((e) =>
        base64FromBytes(e !== undefined ? e : Buffer.alloc(0))
      );
    } else {
      obj.legacyExtraFields = [];
    }
    message.serializedTicket !== undefined &&
      (obj.serializedTicket = base64FromBytes(
        message.serializedTicket !== undefined ? message.serializedTicket : Buffer.alloc(0),
      ));
    return obj;
  },
};

function createBaseCMsgGCToClientRequestLaneSelection(): CMsgGCToClientRequestLaneSelection {
  return {};
}

export const CMsgGCToClientRequestLaneSelection = {
  encode(_: CMsgGCToClientRequestLaneSelection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientRequestLaneSelection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientRequestLaneSelection();
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

  fromJSON(_: any): CMsgGCToClientRequestLaneSelection {
    return {};
  },

  toJSON(_: CMsgGCToClientRequestLaneSelection): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgGCToClientRequestLaneSelectionResponse(): CMsgGCToClientRequestLaneSelectionResponse {
  return { laneSelectionFlags: 0, highPriorityDisabled: false };
}

export const CMsgGCToClientRequestLaneSelectionResponse = {
  encode(message: CMsgGCToClientRequestLaneSelectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.laneSelectionFlags !== 0) {
      writer.uint32(8).uint32(message.laneSelectionFlags);
    }
    if (message.highPriorityDisabled === true) {
      writer.uint32(16).bool(message.highPriorityDisabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientRequestLaneSelectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientRequestLaneSelectionResponse();
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

          message.highPriorityDisabled = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgGCToClientRequestLaneSelectionResponse {
    return {
      laneSelectionFlags: isSet(object.laneSelectionFlags) ? Number(object.laneSelectionFlags) : 0,
      highPriorityDisabled: isSet(object.highPriorityDisabled) ? Boolean(object.highPriorityDisabled) : false,
    };
  },

  toJSON(message: CMsgGCToClientRequestLaneSelectionResponse): unknown {
    const obj: any = {};
    message.laneSelectionFlags !== undefined && (obj.laneSelectionFlags = Math.round(message.laneSelectionFlags));
    message.highPriorityDisabled !== undefined && (obj.highPriorityDisabled = message.highPriorityDisabled);
    return obj;
  },
};

function createBaseCMsgGCToClientRequestMMInfo(): CMsgGCToClientRequestMMInfo {
  return {};
}

export const CMsgGCToClientRequestMMInfo = {
  encode(_: CMsgGCToClientRequestMMInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCToClientRequestMMInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCToClientRequestMMInfo();
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

  fromJSON(_: any): CMsgGCToClientRequestMMInfo {
    return {};
  },

  toJSON(_: CMsgGCToClientRequestMMInfo): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgClientToGCMMInfo(): CMsgClientToGCMMInfo {
  return { laneSelectionFlags: 0, highPriorityDisabled: false };
}

export const CMsgClientToGCMMInfo = {
  encode(message: CMsgClientToGCMMInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.laneSelectionFlags !== 0) {
      writer.uint32(8).uint32(message.laneSelectionFlags);
    }
    if (message.highPriorityDisabled === true) {
      writer.uint32(16).bool(message.highPriorityDisabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCMMInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCMMInfo();
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

          message.highPriorityDisabled = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCMMInfo {
    return {
      laneSelectionFlags: isSet(object.laneSelectionFlags) ? Number(object.laneSelectionFlags) : 0,
      highPriorityDisabled: isSet(object.highPriorityDisabled) ? Boolean(object.highPriorityDisabled) : false,
    };
  },

  toJSON(message: CMsgClientToGCMMInfo): unknown {
    const obj: any = {};
    message.laneSelectionFlags !== undefined && (obj.laneSelectionFlags = Math.round(message.laneSelectionFlags));
    message.highPriorityDisabled !== undefined && (obj.highPriorityDisabled = message.highPriorityDisabled);
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
