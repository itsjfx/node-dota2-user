/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  CMsgPendingEventAward,
  DOTAGameMode,
  dOTAGameModeFromJSON,
  dOTAGameModeToJSON,
  dotaGcTeam,
  dotaGcTeamFromJSON,
  dotaGcTeamToJSON,
  EEvent,
  eEventFromJSON,
  eEventToJSON,
  ELeaguePhase,
  eLeaguePhaseFromJSON,
  eLeaguePhaseToJSON,
  ELeagueRegion,
  eLeagueRegionFromJSON,
  eLeagueRegionToJSON,
  EMatchOutcome,
  eMatchOutcomeFromJSON,
  eMatchOutcomeToJSON,
} from "./dota_shared_enums";

export enum ESpecialPingValue {
  k_ESpecialPingValue_NoData = 16382,
  k_ESpecialPingValue_Failed = 16383,
}

export function eSpecialPingValueFromJSON(object: any): ESpecialPingValue {
  switch (object) {
    case 16382:
    case "k_ESpecialPingValue_NoData":
      return ESpecialPingValue.k_ESpecialPingValue_NoData;
    case 16383:
    case "k_ESpecialPingValue_Failed":
      return ESpecialPingValue.k_ESpecialPingValue_Failed;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESpecialPingValue");
  }
}

export function eSpecialPingValueToJSON(object: ESpecialPingValue): string {
  switch (object) {
    case ESpecialPingValue.k_ESpecialPingValue_NoData:
      return "k_ESpecialPingValue_NoData";
    case ESpecialPingValue.k_ESpecialPingValue_Failed:
      return "k_ESpecialPingValue_Failed";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESpecialPingValue");
  }
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

export function eDOTAGCSessionNeedFromJSON(object: any): EDOTAGCSessionNeed {
  switch (object) {
    case 0:
    case "k_EDOTAGCSessionNeed_Unknown":
      return EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_Unknown;
    case 100:
    case "k_EDOTAGCSessionNeed_UserNoSessionNeeded":
      return EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_UserNoSessionNeeded;
    case 101:
    case "k_EDOTAGCSessionNeed_UserInOnlineGame":
      return EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_UserInOnlineGame;
    case 102:
    case "k_EDOTAGCSessionNeed_UserInLocalGame":
      return EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_UserInLocalGame;
    case 103:
    case "k_EDOTAGCSessionNeed_UserInUIWasConnected":
      return EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_UserInUIWasConnected;
    case 104:
    case "k_EDOTAGCSessionNeed_UserInUINeverConnected":
      return EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_UserInUINeverConnected;
    case 105:
    case "k_EDOTAGCSessionNeed_UserTutorials":
      return EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_UserTutorials;
    case 106:
    case "k_EDOTAGCSessionNeed_UserInUIWasConnectedIdle":
      return EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_UserInUIWasConnectedIdle;
    case 107:
    case "k_EDOTAGCSessionNeed_UserInUINeverConnectedIdle":
      return EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_UserInUINeverConnectedIdle;
    case 200:
    case "k_EDOTAGCSessionNeed_GameServerOnline":
      return EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_GameServerOnline;
    case 201:
    case "k_EDOTAGCSessionNeed_GameServerLocal":
      return EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_GameServerLocal;
    case 202:
    case "k_EDOTAGCSessionNeed_GameServerIdle":
      return EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_GameServerIdle;
    case 203:
    case "k_EDOTAGCSessionNeed_GameServerRelay":
      return EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_GameServerRelay;
    case 204:
    case "k_EDOTAGCSessionNeed_GameServerLocalUpload":
      return EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_GameServerLocalUpload;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDOTAGCSessionNeed");
  }
}

export function eDOTAGCSessionNeedToJSON(object: EDOTAGCSessionNeed): string {
  switch (object) {
    case EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_Unknown:
      return "k_EDOTAGCSessionNeed_Unknown";
    case EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_UserNoSessionNeeded:
      return "k_EDOTAGCSessionNeed_UserNoSessionNeeded";
    case EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_UserInOnlineGame:
      return "k_EDOTAGCSessionNeed_UserInOnlineGame";
    case EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_UserInLocalGame:
      return "k_EDOTAGCSessionNeed_UserInLocalGame";
    case EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_UserInUIWasConnected:
      return "k_EDOTAGCSessionNeed_UserInUIWasConnected";
    case EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_UserInUINeverConnected:
      return "k_EDOTAGCSessionNeed_UserInUINeverConnected";
    case EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_UserTutorials:
      return "k_EDOTAGCSessionNeed_UserTutorials";
    case EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_UserInUIWasConnectedIdle:
      return "k_EDOTAGCSessionNeed_UserInUIWasConnectedIdle";
    case EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_UserInUINeverConnectedIdle:
      return "k_EDOTAGCSessionNeed_UserInUINeverConnectedIdle";
    case EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_GameServerOnline:
      return "k_EDOTAGCSessionNeed_GameServerOnline";
    case EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_GameServerLocal:
      return "k_EDOTAGCSessionNeed_GameServerLocal";
    case EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_GameServerIdle:
      return "k_EDOTAGCSessionNeed_GameServerIdle";
    case EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_GameServerRelay:
      return "k_EDOTAGCSessionNeed_GameServerRelay";
    case EDOTAGCSessionNeed.k_EDOTAGCSessionNeed_GameServerLocalUpload:
      return "k_EDOTAGCSessionNeed_GameServerLocalUpload";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDOTAGCSessionNeed");
  }
}

export enum EDOTAMatchPlayerTimeCustomStat {
  k_EDOTA_MatchPlayerTimeCustomStat_HPRegenUnderT1Towers = 1,
  k_EDOTA_MatchPlayerTimeCustomStat_MagicDamageReducedWithNewFormula_Absolute = 2,
  k_EDOTA_MatchPlayerTimeCustomStat_MagicDamageReducedWithNewFormula_PercentOfTotalHP = 3,
}

export function eDOTAMatchPlayerTimeCustomStatFromJSON(object: any): EDOTAMatchPlayerTimeCustomStat {
  switch (object) {
    case 1:
    case "k_EDOTA_MatchPlayerTimeCustomStat_HPRegenUnderT1Towers":
      return EDOTAMatchPlayerTimeCustomStat.k_EDOTA_MatchPlayerTimeCustomStat_HPRegenUnderT1Towers;
    case 2:
    case "k_EDOTA_MatchPlayerTimeCustomStat_MagicDamageReducedWithNewFormula_Absolute":
      return EDOTAMatchPlayerTimeCustomStat.k_EDOTA_MatchPlayerTimeCustomStat_MagicDamageReducedWithNewFormula_Absolute;
    case 3:
    case "k_EDOTA_MatchPlayerTimeCustomStat_MagicDamageReducedWithNewFormula_PercentOfTotalHP":
      return EDOTAMatchPlayerTimeCustomStat
        .k_EDOTA_MatchPlayerTimeCustomStat_MagicDamageReducedWithNewFormula_PercentOfTotalHP;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum EDOTAMatchPlayerTimeCustomStat",
      );
  }
}

export function eDOTAMatchPlayerTimeCustomStatToJSON(object: EDOTAMatchPlayerTimeCustomStat): string {
  switch (object) {
    case EDOTAMatchPlayerTimeCustomStat.k_EDOTA_MatchPlayerTimeCustomStat_HPRegenUnderT1Towers:
      return "k_EDOTA_MatchPlayerTimeCustomStat_HPRegenUnderT1Towers";
    case EDOTAMatchPlayerTimeCustomStat.k_EDOTA_MatchPlayerTimeCustomStat_MagicDamageReducedWithNewFormula_Absolute:
      return "k_EDOTA_MatchPlayerTimeCustomStat_MagicDamageReducedWithNewFormula_Absolute";
    case EDOTAMatchPlayerTimeCustomStat
      .k_EDOTA_MatchPlayerTimeCustomStat_MagicDamageReducedWithNewFormula_PercentOfTotalHP:
      return "k_EDOTA_MatchPlayerTimeCustomStat_MagicDamageReducedWithNewFormula_PercentOfTotalHP";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum EDOTAMatchPlayerTimeCustomStat",
      );
  }
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

export function dOTATournamentEventsFromJSON(object: any): DOTATournamentEvents {
  switch (object) {
    case 0:
    case "TE_FIRST_BLOOD":
      return DOTATournamentEvents.TE_FIRST_BLOOD;
    case 1:
    case "TE_GAME_END":
      return DOTATournamentEvents.TE_GAME_END;
    case 2:
    case "TE_MULTI_KILL":
      return DOTATournamentEvents.TE_MULTI_KILL;
    case 3:
    case "TE_HERO_DENY":
      return DOTATournamentEvents.TE_HERO_DENY;
    case 4:
    case "TE_AEGIS_DENY":
      return DOTATournamentEvents.TE_AEGIS_DENY;
    case 5:
    case "TE_AEGIS_STOLEN":
      return DOTATournamentEvents.TE_AEGIS_STOLEN;
    case 6:
    case "TE_GODLIKE":
      return DOTATournamentEvents.TE_GODLIKE;
    case 7:
    case "TE_COURIER_KILL":
      return DOTATournamentEvents.TE_COURIER_KILL;
    case 8:
    case "TE_ECHOSLAM":
      return DOTATournamentEvents.TE_ECHOSLAM;
    case 9:
    case "TE_RAPIER":
      return DOTATournamentEvents.TE_RAPIER;
    case 10:
    case "TE_EARLY_ROSHAN":
      return DOTATournamentEvents.TE_EARLY_ROSHAN;
    case 11:
    case "TE_BLACK_HOLE":
      return DOTATournamentEvents.TE_BLACK_HOLE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTATournamentEvents");
  }
}

export function dOTATournamentEventsToJSON(object: DOTATournamentEvents): string {
  switch (object) {
    case DOTATournamentEvents.TE_FIRST_BLOOD:
      return "TE_FIRST_BLOOD";
    case DOTATournamentEvents.TE_GAME_END:
      return "TE_GAME_END";
    case DOTATournamentEvents.TE_MULTI_KILL:
      return "TE_MULTI_KILL";
    case DOTATournamentEvents.TE_HERO_DENY:
      return "TE_HERO_DENY";
    case DOTATournamentEvents.TE_AEGIS_DENY:
      return "TE_AEGIS_DENY";
    case DOTATournamentEvents.TE_AEGIS_STOLEN:
      return "TE_AEGIS_STOLEN";
    case DOTATournamentEvents.TE_GODLIKE:
      return "TE_GODLIKE";
    case DOTATournamentEvents.TE_COURIER_KILL:
      return "TE_COURIER_KILL";
    case DOTATournamentEvents.TE_ECHOSLAM:
      return "TE_ECHOSLAM";
    case DOTATournamentEvents.TE_RAPIER:
      return "TE_RAPIER";
    case DOTATournamentEvents.TE_EARLY_ROSHAN:
      return "TE_EARLY_ROSHAN";
    case DOTATournamentEvents.TE_BLACK_HOLE:
      return "TE_BLACK_HOLE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTATournamentEvents");
  }
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

export function eBroadcastTimelineEventFromJSON(object: any): EBroadcastTimelineEvent {
  switch (object) {
    case 1:
    case "EBroadcastTimelineEvent_MatchStarted":
      return EBroadcastTimelineEvent.EBroadcastTimelineEvent_MatchStarted;
    case 2:
    case "EBroadcastTimelineEvent_GameStateChanged":
      return EBroadcastTimelineEvent.EBroadcastTimelineEvent_GameStateChanged;
    case 3:
    case "EBroadcastTimelineEvent_TowerDeath":
      return EBroadcastTimelineEvent.EBroadcastTimelineEvent_TowerDeath;
    case 4:
    case "EBroadcastTimelineEvent_BarracksDeath":
      return EBroadcastTimelineEvent.EBroadcastTimelineEvent_BarracksDeath;
    case 5:
    case "EBroadcastTimelineEvent_AncientDeath":
      return EBroadcastTimelineEvent.EBroadcastTimelineEvent_AncientDeath;
    case 6:
    case "EBroadcastTimelineEvent_RoshanDeath":
      return EBroadcastTimelineEvent.EBroadcastTimelineEvent_RoshanDeath;
    case 7:
    case "EBroadcastTimelineEvent_HeroDeath":
      return EBroadcastTimelineEvent.EBroadcastTimelineEvent_HeroDeath;
    case 8:
    case "EBroadcastTimelineEvent_TeamFight":
      return EBroadcastTimelineEvent.EBroadcastTimelineEvent_TeamFight;
    case 9:
    case "EBroadcastTimelineEvent_FirstBlood":
      return EBroadcastTimelineEvent.EBroadcastTimelineEvent_FirstBlood;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EBroadcastTimelineEvent");
  }
}

export function eBroadcastTimelineEventToJSON(object: EBroadcastTimelineEvent): string {
  switch (object) {
    case EBroadcastTimelineEvent.EBroadcastTimelineEvent_MatchStarted:
      return "EBroadcastTimelineEvent_MatchStarted";
    case EBroadcastTimelineEvent.EBroadcastTimelineEvent_GameStateChanged:
      return "EBroadcastTimelineEvent_GameStateChanged";
    case EBroadcastTimelineEvent.EBroadcastTimelineEvent_TowerDeath:
      return "EBroadcastTimelineEvent_TowerDeath";
    case EBroadcastTimelineEvent.EBroadcastTimelineEvent_BarracksDeath:
      return "EBroadcastTimelineEvent_BarracksDeath";
    case EBroadcastTimelineEvent.EBroadcastTimelineEvent_AncientDeath:
      return "EBroadcastTimelineEvent_AncientDeath";
    case EBroadcastTimelineEvent.EBroadcastTimelineEvent_RoshanDeath:
      return "EBroadcastTimelineEvent_RoshanDeath";
    case EBroadcastTimelineEvent.EBroadcastTimelineEvent_HeroDeath:
      return "EBroadcastTimelineEvent_HeroDeath";
    case EBroadcastTimelineEvent.EBroadcastTimelineEvent_TeamFight:
      return "EBroadcastTimelineEvent_TeamFight";
    case EBroadcastTimelineEvent.EBroadcastTimelineEvent_FirstBlood:
      return "EBroadcastTimelineEvent_FirstBlood";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EBroadcastTimelineEvent");
  }
}

export enum ECustomGameWhitelistState {
  CUSTOM_GAME_WHITELIST_STATE_UNKNOWN = 0,
  CUSTOM_GAME_WHITELIST_STATE_APPROVED = 1,
  CUSTOM_GAME_WHITELIST_STATE_REJECTED = 2,
}

export function eCustomGameWhitelistStateFromJSON(object: any): ECustomGameWhitelistState {
  switch (object) {
    case 0:
    case "CUSTOM_GAME_WHITELIST_STATE_UNKNOWN":
      return ECustomGameWhitelistState.CUSTOM_GAME_WHITELIST_STATE_UNKNOWN;
    case 1:
    case "CUSTOM_GAME_WHITELIST_STATE_APPROVED":
      return ECustomGameWhitelistState.CUSTOM_GAME_WHITELIST_STATE_APPROVED;
    case 2:
    case "CUSTOM_GAME_WHITELIST_STATE_REJECTED":
      return ECustomGameWhitelistState.CUSTOM_GAME_WHITELIST_STATE_REJECTED;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ECustomGameWhitelistState");
  }
}

export function eCustomGameWhitelistStateToJSON(object: ECustomGameWhitelistState): string {
  switch (object) {
    case ECustomGameWhitelistState.CUSTOM_GAME_WHITELIST_STATE_UNKNOWN:
      return "CUSTOM_GAME_WHITELIST_STATE_UNKNOWN";
    case ECustomGameWhitelistState.CUSTOM_GAME_WHITELIST_STATE_APPROVED:
      return "CUSTOM_GAME_WHITELIST_STATE_APPROVED";
    case ECustomGameWhitelistState.CUSTOM_GAME_WHITELIST_STATE_REJECTED:
      return "CUSTOM_GAME_WHITELIST_STATE_REJECTED";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ECustomGameWhitelistState");
  }
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

export function eDOTATriviaQuestionCategoryFromJSON(object: any): EDOTATriviaQuestionCategory {
  switch (object) {
    case 0:
    case "k_EDOTATriviaQuestionCategory_AbilityIcon":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_AbilityIcon;
    case 1:
    case "k_EDOTATriviaQuestionCategory_AbilityCooldown":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_AbilityCooldown;
    case 2:
    case "k_EDOTATriviaQuestionCategory_HeroAttributes":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_HeroAttributes;
    case 3:
    case "k_EDOTATriviaQuestionCategory_HeroMovementSpeed":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_HeroMovementSpeed;
    case 4:
    case "k_EDOTATriviaQuestionCategory_TalentTree":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_TalentTree;
    case 5:
    case "k_EDOTATriviaQuestionCategory_HeroStats":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_HeroStats;
    case 6:
    case "k_EDOTATriviaQuestionCategory_ItemPrice":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_ItemPrice;
    case 7:
    case "k_EDOTATriviaQuestionCategory_AbilitySound":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_AbilitySound;
    case 8:
    case "k_EDOTATriviaQuestionCategory_InvokerSpells":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_InvokerSpells;
    case 9:
    case "k_EDOTATriviaQuestionCategory_AbilityManaCost":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_AbilityManaCost;
    case 10:
    case "k_EDOTATriviaQuestionCategory_HeroAttackSound":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_HeroAttackSound;
    case 11:
    case "k_EDOTATriviaQuestionCategory_AbilityName":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_AbilityName;
    case 12:
    case "k_EDOTATriviaQuestionCategory_ItemComponents":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_ItemComponents;
    case 13:
    case "k_EDOTATriviaQuestionCategory_ItemLore":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_ItemLore;
    case 14:
    case "k_EDOTATriviaQuestionCategory_ItemPassives":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_ItemPassives;
    case 15:
    case "k_EDOTATriviaQuestionCategory_STATIC_QUESTIONS_END":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_STATIC_QUESTIONS_END;
    case 99:
    case "k_EDOTATriviaQuestionCategory_DYNAMIC_QUESTIONS_START":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_DYNAMIC_QUESTIONS_START;
    case 100:
    case "k_EDOTATriviaQuestionCategory_Dynamic_ItemBuild":
      return EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_Dynamic_ItemBuild;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDOTATriviaQuestionCategory");
  }
}

export function eDOTATriviaQuestionCategoryToJSON(object: EDOTATriviaQuestionCategory): string {
  switch (object) {
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_AbilityIcon:
      return "k_EDOTATriviaQuestionCategory_AbilityIcon";
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_AbilityCooldown:
      return "k_EDOTATriviaQuestionCategory_AbilityCooldown";
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_HeroAttributes:
      return "k_EDOTATriviaQuestionCategory_HeroAttributes";
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_HeroMovementSpeed:
      return "k_EDOTATriviaQuestionCategory_HeroMovementSpeed";
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_TalentTree:
      return "k_EDOTATriviaQuestionCategory_TalentTree";
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_HeroStats:
      return "k_EDOTATriviaQuestionCategory_HeroStats";
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_ItemPrice:
      return "k_EDOTATriviaQuestionCategory_ItemPrice";
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_AbilitySound:
      return "k_EDOTATriviaQuestionCategory_AbilitySound";
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_InvokerSpells:
      return "k_EDOTATriviaQuestionCategory_InvokerSpells";
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_AbilityManaCost:
      return "k_EDOTATriviaQuestionCategory_AbilityManaCost";
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_HeroAttackSound:
      return "k_EDOTATriviaQuestionCategory_HeroAttackSound";
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_AbilityName:
      return "k_EDOTATriviaQuestionCategory_AbilityName";
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_ItemComponents:
      return "k_EDOTATriviaQuestionCategory_ItemComponents";
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_ItemLore:
      return "k_EDOTATriviaQuestionCategory_ItemLore";
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_ItemPassives:
      return "k_EDOTATriviaQuestionCategory_ItemPassives";
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_STATIC_QUESTIONS_END:
      return "k_EDOTATriviaQuestionCategory_STATIC_QUESTIONS_END";
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_DYNAMIC_QUESTIONS_START:
      return "k_EDOTATriviaQuestionCategory_DYNAMIC_QUESTIONS_START";
    case EDOTATriviaQuestionCategory.k_EDOTATriviaQuestionCategory_Dynamic_ItemBuild:
      return "k_EDOTATriviaQuestionCategory_Dynamic_ItemBuild";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDOTATriviaQuestionCategory");
  }
}

export enum EOverwatchConviction {
  k_EOverwatchConviction_None = 0,
  k_EOverwatchConviction_NotGuilty = 1,
  k_EOverwatchConviction_GuiltUnclear = 2,
  k_EOverwatchConviction_Guilty = 3,
}

export function eOverwatchConvictionFromJSON(object: any): EOverwatchConviction {
  switch (object) {
    case 0:
    case "k_EOverwatchConviction_None":
      return EOverwatchConviction.k_EOverwatchConviction_None;
    case 1:
    case "k_EOverwatchConviction_NotGuilty":
      return EOverwatchConviction.k_EOverwatchConviction_NotGuilty;
    case 2:
    case "k_EOverwatchConviction_GuiltUnclear":
      return EOverwatchConviction.k_EOverwatchConviction_GuiltUnclear;
    case 3:
    case "k_EOverwatchConviction_Guilty":
      return EOverwatchConviction.k_EOverwatchConviction_Guilty;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EOverwatchConviction");
  }
}

export function eOverwatchConvictionToJSON(object: EOverwatchConviction): string {
  switch (object) {
    case EOverwatchConviction.k_EOverwatchConviction_None:
      return "k_EOverwatchConviction_None";
    case EOverwatchConviction.k_EOverwatchConviction_NotGuilty:
      return "k_EOverwatchConviction_NotGuilty";
    case EOverwatchConviction.k_EOverwatchConviction_GuiltUnclear:
      return "k_EOverwatchConviction_GuiltUnclear";
    case EOverwatchConviction.k_EOverwatchConviction_Guilty:
      return "k_EOverwatchConviction_Guilty";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EOverwatchConviction");
  }
}

export enum EHeroRelicRarity {
  HERO_RELIC_RARITY_INVALID = -1,
  HERO_RELIC_RARITY_COMMON = 0,
  HERO_RELIC_RARITY_RARE = 1,
}

export function eHeroRelicRarityFromJSON(object: any): EHeroRelicRarity {
  switch (object) {
    case -1:
    case "HERO_RELIC_RARITY_INVALID":
      return EHeroRelicRarity.HERO_RELIC_RARITY_INVALID;
    case 0:
    case "HERO_RELIC_RARITY_COMMON":
      return EHeroRelicRarity.HERO_RELIC_RARITY_COMMON;
    case 1:
    case "HERO_RELIC_RARITY_RARE":
      return EHeroRelicRarity.HERO_RELIC_RARITY_RARE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EHeroRelicRarity");
  }
}

export function eHeroRelicRarityToJSON(object: EHeroRelicRarity): string {
  switch (object) {
    case EHeroRelicRarity.HERO_RELIC_RARITY_INVALID:
      return "HERO_RELIC_RARITY_INVALID";
    case EHeroRelicRarity.HERO_RELIC_RARITY_COMMON:
      return "HERO_RELIC_RARITY_COMMON";
    case EHeroRelicRarity.HERO_RELIC_RARITY_RARE:
      return "HERO_RELIC_RARITY_RARE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EHeroRelicRarity");
  }
}

export enum EStickerbookAuditAction {
  STICKERBOOK_AUDIT_CREATE_PAGE = 0,
  STICKERBOOK_AUDIT_DELETE_PAGE = 1,
  STICKERBOOK_AUDIT_STICK_STICKERS = 2,
  STICKERBOOK_AUDIT_REPLACE_STICKERS = 3,
  STICKERBOOK_AUDIT_HERO_STICKER = 4,
}

export function eStickerbookAuditActionFromJSON(object: any): EStickerbookAuditAction {
  switch (object) {
    case 0:
    case "STICKERBOOK_AUDIT_CREATE_PAGE":
      return EStickerbookAuditAction.STICKERBOOK_AUDIT_CREATE_PAGE;
    case 1:
    case "STICKERBOOK_AUDIT_DELETE_PAGE":
      return EStickerbookAuditAction.STICKERBOOK_AUDIT_DELETE_PAGE;
    case 2:
    case "STICKERBOOK_AUDIT_STICK_STICKERS":
      return EStickerbookAuditAction.STICKERBOOK_AUDIT_STICK_STICKERS;
    case 3:
    case "STICKERBOOK_AUDIT_REPLACE_STICKERS":
      return EStickerbookAuditAction.STICKERBOOK_AUDIT_REPLACE_STICKERS;
    case 4:
    case "STICKERBOOK_AUDIT_HERO_STICKER":
      return EStickerbookAuditAction.STICKERBOOK_AUDIT_HERO_STICKER;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EStickerbookAuditAction");
  }
}

export function eStickerbookAuditActionToJSON(object: EStickerbookAuditAction): string {
  switch (object) {
    case EStickerbookAuditAction.STICKERBOOK_AUDIT_CREATE_PAGE:
      return "STICKERBOOK_AUDIT_CREATE_PAGE";
    case EStickerbookAuditAction.STICKERBOOK_AUDIT_DELETE_PAGE:
      return "STICKERBOOK_AUDIT_DELETE_PAGE";
    case EStickerbookAuditAction.STICKERBOOK_AUDIT_STICK_STICKERS:
      return "STICKERBOOK_AUDIT_STICK_STICKERS";
    case EStickerbookAuditAction.STICKERBOOK_AUDIT_REPLACE_STICKERS:
      return "STICKERBOOK_AUDIT_REPLACE_STICKERS";
    case EStickerbookAuditAction.STICKERBOOK_AUDIT_HERO_STICKER:
      return "STICKERBOOK_AUDIT_HERO_STICKER";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EStickerbookAuditAction");
  }
}

export enum EStickerbookPageType {
  STICKER_PAGE_GENERIC = 0,
  STICKER_PAGE_TEAM = 1,
  STICKER_PAGE_TALENT = 2,
}

export function eStickerbookPageTypeFromJSON(object: any): EStickerbookPageType {
  switch (object) {
    case 0:
    case "STICKER_PAGE_GENERIC":
      return EStickerbookPageType.STICKER_PAGE_GENERIC;
    case 1:
    case "STICKER_PAGE_TEAM":
      return EStickerbookPageType.STICKER_PAGE_TEAM;
    case 2:
    case "STICKER_PAGE_TALENT":
      return EStickerbookPageType.STICKER_PAGE_TALENT;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EStickerbookPageType");
  }
}

export function eStickerbookPageTypeToJSON(object: EStickerbookPageType): string {
  switch (object) {
    case EStickerbookPageType.STICKER_PAGE_GENERIC:
      return "STICKER_PAGE_GENERIC";
    case EStickerbookPageType.STICKER_PAGE_TEAM:
      return "STICKER_PAGE_TEAM";
    case EStickerbookPageType.STICKER_PAGE_TALENT:
      return "STICKER_PAGE_TALENT";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EStickerbookPageType");
  }
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

export function cMsgDOTAProfileCard_EStatIDFromJSON(object: any): CMsgDOTAProfileCard_EStatID {
  switch (object) {
    case 3:
    case "k_eStat_Wins":
      return CMsgDOTAProfileCard_EStatID.k_eStat_Wins;
    case 4:
    case "k_eStat_Commends":
      return CMsgDOTAProfileCard_EStatID.k_eStat_Commends;
    case 5:
    case "k_eStat_GamesPlayed":
      return CMsgDOTAProfileCard_EStatID.k_eStat_GamesPlayed;
    case 6:
    case "k_eStat_FirstMatchDate":
      return CMsgDOTAProfileCard_EStatID.k_eStat_FirstMatchDate;
    case 7:
    case "k_eStat_PreviousSeasonRank":
      return CMsgDOTAProfileCard_EStatID.k_eStat_PreviousSeasonRank;
    case 8:
    case "k_eStat_GamesMVP":
      return CMsgDOTAProfileCard_EStatID.k_eStat_GamesMVP;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgDOTAProfileCard_EStatID");
  }
}

export function cMsgDOTAProfileCard_EStatIDToJSON(object: CMsgDOTAProfileCard_EStatID): string {
  switch (object) {
    case CMsgDOTAProfileCard_EStatID.k_eStat_Wins:
      return "k_eStat_Wins";
    case CMsgDOTAProfileCard_EStatID.k_eStat_Commends:
      return "k_eStat_Commends";
    case CMsgDOTAProfileCard_EStatID.k_eStat_GamesPlayed:
      return "k_eStat_GamesPlayed";
    case CMsgDOTAProfileCard_EStatID.k_eStat_FirstMatchDate:
      return "k_eStat_FirstMatchDate";
    case CMsgDOTAProfileCard_EStatID.k_eStat_PreviousSeasonRank:
      return "k_eStat_PreviousSeasonRank";
    case CMsgDOTAProfileCard_EStatID.k_eStat_GamesMVP:
      return "k_eStat_GamesMVP";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgDOTAProfileCard_EStatID");
  }
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

export function cMsgGCRerollPlayerChallengeResponse_EResultFromJSON(
  object: any,
): CMsgGCRerollPlayerChallengeResponse_EResult {
  switch (object) {
    case 0:
    case "eResult_Success":
      return CMsgGCRerollPlayerChallengeResponse_EResult.eResult_Success;
    case 1:
    case "eResult_Dropped":
      return CMsgGCRerollPlayerChallengeResponse_EResult.eResult_Dropped;
    case 2:
    case "eResult_NotFound":
      return CMsgGCRerollPlayerChallengeResponse_EResult.eResult_NotFound;
    case 3:
    case "eResult_CantReroll":
      return CMsgGCRerollPlayerChallengeResponse_EResult.eResult_CantReroll;
    case 4:
    case "eResult_ServerError":
      return CMsgGCRerollPlayerChallengeResponse_EResult.eResult_ServerError;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGCRerollPlayerChallengeResponse_EResult",
      );
  }
}

export function cMsgGCRerollPlayerChallengeResponse_EResultToJSON(
  object: CMsgGCRerollPlayerChallengeResponse_EResult,
): string {
  switch (object) {
    case CMsgGCRerollPlayerChallengeResponse_EResult.eResult_Success:
      return "eResult_Success";
    case CMsgGCRerollPlayerChallengeResponse_EResult.eResult_Dropped:
      return "eResult_Dropped";
    case CMsgGCRerollPlayerChallengeResponse_EResult.eResult_NotFound:
      return "eResult_NotFound";
    case CMsgGCRerollPlayerChallengeResponse_EResult.eResult_CantReroll:
      return "eResult_CantReroll";
    case CMsgGCRerollPlayerChallengeResponse_EResult.eResult_ServerError:
      return "eResult_ServerError";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgGCRerollPlayerChallengeResponse_EResult",
      );
  }
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

export function cMsgDOTARealtimeGameStats_GraphData_eStatFromJSON(
  object: any,
): CMsgDOTARealtimeGameStats_GraphData_eStat {
  switch (object) {
    case 0:
    case "CreepGoldEarned":
      return CMsgDOTARealtimeGameStats_GraphData_eStat.CreepGoldEarned;
    case 1:
    case "KillGoldEarned":
      return CMsgDOTARealtimeGameStats_GraphData_eStat.KillGoldEarned;
    case 2:
    case "DeathAndBuybackGoldLost":
      return CMsgDOTARealtimeGameStats_GraphData_eStat.DeathAndBuybackGoldLost;
    case 3:
    case "XPEarned":
      return CMsgDOTARealtimeGameStats_GraphData_eStat.XPEarned;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTARealtimeGameStats_GraphData_eStat",
      );
  }
}

export function cMsgDOTARealtimeGameStats_GraphData_eStatToJSON(
  object: CMsgDOTARealtimeGameStats_GraphData_eStat,
): string {
  switch (object) {
    case CMsgDOTARealtimeGameStats_GraphData_eStat.CreepGoldEarned:
      return "CreepGoldEarned";
    case CMsgDOTARealtimeGameStats_GraphData_eStat.KillGoldEarned:
      return "KillGoldEarned";
    case CMsgDOTARealtimeGameStats_GraphData_eStat.DeathAndBuybackGoldLost:
      return "DeathAndBuybackGoldLost";
    case CMsgDOTARealtimeGameStats_GraphData_eStat.XPEarned:
      return "XPEarned";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTARealtimeGameStats_GraphData_eStat",
      );
  }
}

export enum CMsgDOTARealtimeGameStats_GraphData_eLocation {
  BotLane = 0,
  MidLane = 1,
  TopLane = 2,
  Jungle = 3,
  Ancients = 4,
  Other = 5,
}

export function cMsgDOTARealtimeGameStats_GraphData_eLocationFromJSON(
  object: any,
): CMsgDOTARealtimeGameStats_GraphData_eLocation {
  switch (object) {
    case 0:
    case "BotLane":
      return CMsgDOTARealtimeGameStats_GraphData_eLocation.BotLane;
    case 1:
    case "MidLane":
      return CMsgDOTARealtimeGameStats_GraphData_eLocation.MidLane;
    case 2:
    case "TopLane":
      return CMsgDOTARealtimeGameStats_GraphData_eLocation.TopLane;
    case 3:
    case "Jungle":
      return CMsgDOTARealtimeGameStats_GraphData_eLocation.Jungle;
    case 4:
    case "Ancients":
      return CMsgDOTARealtimeGameStats_GraphData_eLocation.Ancients;
    case 5:
    case "Other":
      return CMsgDOTARealtimeGameStats_GraphData_eLocation.Other;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTARealtimeGameStats_GraphData_eLocation",
      );
  }
}

export function cMsgDOTARealtimeGameStats_GraphData_eLocationToJSON(
  object: CMsgDOTARealtimeGameStats_GraphData_eLocation,
): string {
  switch (object) {
    case CMsgDOTARealtimeGameStats_GraphData_eLocation.BotLane:
      return "BotLane";
    case CMsgDOTARealtimeGameStats_GraphData_eLocation.MidLane:
      return "MidLane";
    case CMsgDOTARealtimeGameStats_GraphData_eLocation.TopLane:
      return "TopLane";
    case CMsgDOTARealtimeGameStats_GraphData_eLocation.Jungle:
      return "Jungle";
    case CMsgDOTARealtimeGameStats_GraphData_eLocation.Ancients:
      return "Ancients";
    case CMsgDOTARealtimeGameStats_GraphData_eLocation.Other:
      return "Other";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTARealtimeGameStats_GraphData_eLocation",
      );
  }
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

export function cMsgInGamePrediction_ERawValueTypeTFromJSON(object: any): CMsgInGamePrediction_ERawValueTypeT {
  switch (object) {
    case 0:
    case "Number":
      return CMsgInGamePrediction_ERawValueTypeT.Number;
    case 1:
    case "Time":
      return CMsgInGamePrediction_ERawValueTypeT.Time;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgInGamePrediction_ERawValueTypeT",
      );
  }
}

export function cMsgInGamePrediction_ERawValueTypeTToJSON(object: CMsgInGamePrediction_ERawValueTypeT): string {
  switch (object) {
    case CMsgInGamePrediction_ERawValueTypeT.Number:
      return "Number";
    case CMsgInGamePrediction_ERawValueTypeT.Time:
      return "Time";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgInGamePrediction_ERawValueTypeT",
      );
  }
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

export function cMsgInGamePrediction_EPredictionTypeFromJSON(object: any): CMsgInGamePrediction_EPredictionType {
  switch (object) {
    case 0:
    case "Generic":
      return CMsgInGamePrediction_EPredictionType.Generic;
    case 1:
    case "Hero":
      return CMsgInGamePrediction_EPredictionType.Hero;
    case 2:
    case "Team":
      return CMsgInGamePrediction_EPredictionType.Team;
    case 3:
    case "Player":
      return CMsgInGamePrediction_EPredictionType.Player;
    case 4:
    case "Special":
      return CMsgInGamePrediction_EPredictionType.Special;
    case 5:
    case "YesNo":
      return CMsgInGamePrediction_EPredictionType.YesNo;
    case 6:
    case "QualifiersTeam":
      return CMsgInGamePrediction_EPredictionType.QualifiersTeam;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgInGamePrediction_EPredictionType",
      );
  }
}

export function cMsgInGamePrediction_EPredictionTypeToJSON(object: CMsgInGamePrediction_EPredictionType): string {
  switch (object) {
    case CMsgInGamePrediction_EPredictionType.Generic:
      return "Generic";
    case CMsgInGamePrediction_EPredictionType.Hero:
      return "Hero";
    case CMsgInGamePrediction_EPredictionType.Team:
      return "Team";
    case CMsgInGamePrediction_EPredictionType.Player:
      return "Player";
    case CMsgInGamePrediction_EPredictionType.Special:
      return "Special";
    case CMsgInGamePrediction_EPredictionType.YesNo:
      return "YesNo";
    case CMsgInGamePrediction_EPredictionType.QualifiersTeam:
      return "QualifiersTeam";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgInGamePrediction_EPredictionType",
      );
  }
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

export function cMsgInGamePrediction_EResolutionTypeTFromJSON(object: any): CMsgInGamePrediction_EResolutionTypeT {
  switch (object) {
    case 0:
    case "InvalidQuery":
      return CMsgInGamePrediction_EResolutionTypeT.InvalidQuery;
    case 1:
    case "FirstToPassQuery":
      return CMsgInGamePrediction_EResolutionTypeT.FirstToPassQuery;
    case 2:
    case "LastToPassQuery":
      return CMsgInGamePrediction_EResolutionTypeT.LastToPassQuery;
    case 3:
    case "LastRemainingQuery":
      return CMsgInGamePrediction_EResolutionTypeT.LastRemainingQuery;
    case 4:
    case "MaxToPassQuery":
      return CMsgInGamePrediction_EResolutionTypeT.MaxToPassQuery;
    case 5:
    case "MinToPassQuery":
      return CMsgInGamePrediction_EResolutionTypeT.MinToPassQuery;
    case 6:
    case "SumQuery":
      return CMsgInGamePrediction_EResolutionTypeT.SumQuery;
    case 7:
    case "MaxTeamSumToPassQuery":
      return CMsgInGamePrediction_EResolutionTypeT.MaxTeamSumToPassQuery;
    case 8:
    case "MinTeamSumToPassQuery":
      return CMsgInGamePrediction_EResolutionTypeT.MinTeamSumToPassQuery;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgInGamePrediction_EResolutionTypeT",
      );
  }
}

export function cMsgInGamePrediction_EResolutionTypeTToJSON(object: CMsgInGamePrediction_EResolutionTypeT): string {
  switch (object) {
    case CMsgInGamePrediction_EResolutionTypeT.InvalidQuery:
      return "InvalidQuery";
    case CMsgInGamePrediction_EResolutionTypeT.FirstToPassQuery:
      return "FirstToPassQuery";
    case CMsgInGamePrediction_EResolutionTypeT.LastToPassQuery:
      return "LastToPassQuery";
    case CMsgInGamePrediction_EResolutionTypeT.LastRemainingQuery:
      return "LastRemainingQuery";
    case CMsgInGamePrediction_EResolutionTypeT.MaxToPassQuery:
      return "MaxToPassQuery";
    case CMsgInGamePrediction_EResolutionTypeT.MinToPassQuery:
      return "MinToPassQuery";
    case CMsgInGamePrediction_EResolutionTypeT.SumQuery:
      return "SumQuery";
    case CMsgInGamePrediction_EResolutionTypeT.MaxTeamSumToPassQuery:
      return "MaxTeamSumToPassQuery";
    case CMsgInGamePrediction_EResolutionTypeT.MinTeamSumToPassQuery:
      return "MinTeamSumToPassQuery";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgInGamePrediction_EResolutionTypeT",
      );
  }
}

export enum CMsgInGamePrediction_ERandomSelectionGroupT {
  EarlyGame = 0,
  MidGame = 1,
  LateGame = 2,
  Count = 3,
}

export function cMsgInGamePrediction_ERandomSelectionGroupTFromJSON(
  object: any,
): CMsgInGamePrediction_ERandomSelectionGroupT {
  switch (object) {
    case 0:
    case "EarlyGame":
      return CMsgInGamePrediction_ERandomSelectionGroupT.EarlyGame;
    case 1:
    case "MidGame":
      return CMsgInGamePrediction_ERandomSelectionGroupT.MidGame;
    case 2:
    case "LateGame":
      return CMsgInGamePrediction_ERandomSelectionGroupT.LateGame;
    case 3:
    case "Count":
      return CMsgInGamePrediction_ERandomSelectionGroupT.Count;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgInGamePrediction_ERandomSelectionGroupT",
      );
  }
}

export function cMsgInGamePrediction_ERandomSelectionGroupTToJSON(
  object: CMsgInGamePrediction_ERandomSelectionGroupT,
): string {
  switch (object) {
    case CMsgInGamePrediction_ERandomSelectionGroupT.EarlyGame:
      return "EarlyGame";
    case CMsgInGamePrediction_ERandomSelectionGroupT.MidGame:
      return "MidGame";
    case CMsgInGamePrediction_ERandomSelectionGroupT.LateGame:
      return "LateGame";
    case CMsgInGamePrediction_ERandomSelectionGroupT.Count:
      return "Count";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgInGamePrediction_ERandomSelectionGroupT",
      );
  }
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

export function cMsgDOTASeasonPredictions_Prediction_EPredictionTypeFromJSON(
  object: any,
): CMsgDOTASeasonPredictions_Prediction_EPredictionType {
  switch (object) {
    case 0:
    case "Generic":
      return CMsgDOTASeasonPredictions_Prediction_EPredictionType.Generic;
    case 1:
    case "Hero":
      return CMsgDOTASeasonPredictions_Prediction_EPredictionType.Hero;
    case 2:
    case "Team":
      return CMsgDOTASeasonPredictions_Prediction_EPredictionType.Team;
    case 3:
    case "Player":
      return CMsgDOTASeasonPredictions_Prediction_EPredictionType.Player;
    case 4:
    case "Special":
      return CMsgDOTASeasonPredictions_Prediction_EPredictionType.Special;
    case 5:
    case "YesNo":
      return CMsgDOTASeasonPredictions_Prediction_EPredictionType.YesNo;
    case 6:
    case "QualifiersTeam":
      return CMsgDOTASeasonPredictions_Prediction_EPredictionType.QualifiersTeam;
    case 7:
    case "LastChanceTeam":
      return CMsgDOTASeasonPredictions_Prediction_EPredictionType.LastChanceTeam;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTASeasonPredictions_Prediction_EPredictionType",
      );
  }
}

export function cMsgDOTASeasonPredictions_Prediction_EPredictionTypeToJSON(
  object: CMsgDOTASeasonPredictions_Prediction_EPredictionType,
): string {
  switch (object) {
    case CMsgDOTASeasonPredictions_Prediction_EPredictionType.Generic:
      return "Generic";
    case CMsgDOTASeasonPredictions_Prediction_EPredictionType.Hero:
      return "Hero";
    case CMsgDOTASeasonPredictions_Prediction_EPredictionType.Team:
      return "Team";
    case CMsgDOTASeasonPredictions_Prediction_EPredictionType.Player:
      return "Player";
    case CMsgDOTASeasonPredictions_Prediction_EPredictionType.Special:
      return "Special";
    case CMsgDOTASeasonPredictions_Prediction_EPredictionType.YesNo:
      return "YesNo";
    case CMsgDOTASeasonPredictions_Prediction_EPredictionType.QualifiersTeam:
      return "QualifiersTeam";
    case CMsgDOTASeasonPredictions_Prediction_EPredictionType.LastChanceTeam:
      return "LastChanceTeam";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTASeasonPredictions_Prediction_EPredictionType",
      );
  }
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

export function cMsgDOTASeasonPredictions_Prediction_EAnswerTypeFromJSON(
  object: any,
): CMsgDOTASeasonPredictions_Prediction_EAnswerType {
  switch (object) {
    case 0:
    case "SingleInt":
      return CMsgDOTASeasonPredictions_Prediction_EAnswerType.SingleInt;
    case 1:
    case "SingleFloat":
      return CMsgDOTASeasonPredictions_Prediction_EAnswerType.SingleFloat;
    case 2:
    case "MultipleInt":
      return CMsgDOTASeasonPredictions_Prediction_EAnswerType.MultipleInt;
    case 3:
    case "MultipleFloat":
      return CMsgDOTASeasonPredictions_Prediction_EAnswerType.MultipleFloat;
    case 4:
    case "AnswerTeam":
      return CMsgDOTASeasonPredictions_Prediction_EAnswerType.AnswerTeam;
    case 5:
    case "SingleTime":
      return CMsgDOTASeasonPredictions_Prediction_EAnswerType.SingleTime;
    case 6:
    case "MultipleTime":
      return CMsgDOTASeasonPredictions_Prediction_EAnswerType.MultipleTime;
    case 7:
    case "NoAnswer":
      return CMsgDOTASeasonPredictions_Prediction_EAnswerType.NoAnswer;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTASeasonPredictions_Prediction_EAnswerType",
      );
  }
}

export function cMsgDOTASeasonPredictions_Prediction_EAnswerTypeToJSON(
  object: CMsgDOTASeasonPredictions_Prediction_EAnswerType,
): string {
  switch (object) {
    case CMsgDOTASeasonPredictions_Prediction_EAnswerType.SingleInt:
      return "SingleInt";
    case CMsgDOTASeasonPredictions_Prediction_EAnswerType.SingleFloat:
      return "SingleFloat";
    case CMsgDOTASeasonPredictions_Prediction_EAnswerType.MultipleInt:
      return "MultipleInt";
    case CMsgDOTASeasonPredictions_Prediction_EAnswerType.MultipleFloat:
      return "MultipleFloat";
    case CMsgDOTASeasonPredictions_Prediction_EAnswerType.AnswerTeam:
      return "AnswerTeam";
    case CMsgDOTASeasonPredictions_Prediction_EAnswerType.SingleTime:
      return "SingleTime";
    case CMsgDOTASeasonPredictions_Prediction_EAnswerType.MultipleTime:
      return "MultipleTime";
    case CMsgDOTASeasonPredictions_Prediction_EAnswerType.NoAnswer:
      return "NoAnswer";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTASeasonPredictions_Prediction_EAnswerType",
      );
  }
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

export function cMsgDOTAMatch_ReplayStateFromJSON(object: any): CMsgDOTAMatch_ReplayState {
  switch (object) {
    case 0:
    case "REPLAY_AVAILABLE":
      return CMsgDOTAMatch_ReplayState.REPLAY_AVAILABLE;
    case 1:
    case "REPLAY_NOT_RECORDED":
      return CMsgDOTAMatch_ReplayState.REPLAY_NOT_RECORDED;
    case 2:
    case "REPLAY_EXPIRED":
      return CMsgDOTAMatch_ReplayState.REPLAY_EXPIRED;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgDOTAMatch_ReplayState");
  }
}

export function cMsgDOTAMatch_ReplayStateToJSON(object: CMsgDOTAMatch_ReplayState): string {
  switch (object) {
    case CMsgDOTAMatch_ReplayState.REPLAY_AVAILABLE:
      return "REPLAY_AVAILABLE";
    case CMsgDOTAMatch_ReplayState.REPLAY_NOT_RECORDED:
      return "REPLAY_NOT_RECORDED";
    case CMsgDOTAMatch_ReplayState.REPLAY_EXPIRED:
      return "REPLAY_EXPIRED";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgDOTAMatch_ReplayState");
  }
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

export function cMsgDOTAMatch_Player_HeroDamageTypeFromJSON(object: any): CMsgDOTAMatch_Player_HeroDamageType {
  switch (object) {
    case 0:
    case "HERO_DAMAGE_PHYSICAL":
      return CMsgDOTAMatch_Player_HeroDamageType.HERO_DAMAGE_PHYSICAL;
    case 1:
    case "HERO_DAMAGE_MAGICAL":
      return CMsgDOTAMatch_Player_HeroDamageType.HERO_DAMAGE_MAGICAL;
    case 2:
    case "HERO_DAMAGE_PURE":
      return CMsgDOTAMatch_Player_HeroDamageType.HERO_DAMAGE_PURE;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTAMatch_Player_HeroDamageType",
      );
  }
}

export function cMsgDOTAMatch_Player_HeroDamageTypeToJSON(object: CMsgDOTAMatch_Player_HeroDamageType): string {
  switch (object) {
    case CMsgDOTAMatch_Player_HeroDamageType.HERO_DAMAGE_PHYSICAL:
      return "HERO_DAMAGE_PHYSICAL";
    case CMsgDOTAMatch_Player_HeroDamageType.HERO_DAMAGE_MAGICAL:
      return "HERO_DAMAGE_MAGICAL";
    case CMsgDOTAMatch_Player_HeroDamageType.HERO_DAMAGE_PURE:
      return "HERO_DAMAGE_PURE";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgDOTAMatch_Player_HeroDamageType",
      );
  }
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

export function cMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponseFromJSON(
  object: any,
): CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse.k_eDisabled;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse",
      );
  }
}

export function cMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponseToJSON(
  object: CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse,
): string {
  switch (object) {
    case CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object +
          " for enum CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse",
      );
  }
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

  fromJSON(object: any): CSODOTAGameAccountClient {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      wins: isSet(object.wins) ? Number(object.wins) : 0,
      losses: isSet(object.losses) ? Number(object.losses) : 0,
      xp: isSet(object.xp) ? Number(object.xp) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      initialSkill: isSet(object.initialSkill) ? Number(object.initialSkill) : 0,
      leaverCount: isSet(object.leaverCount) ? Number(object.leaverCount) : 0,
      secondaryLeaverCount: isSet(object.secondaryLeaverCount) ? Number(object.secondaryLeaverCount) : 0,
      lowPriorityUntilDate: isSet(object.lowPriorityUntilDate) ? Number(object.lowPriorityUntilDate) : 0,
      preventTextChatUntilDate: isSet(object.preventTextChatUntilDate) ? Number(object.preventTextChatUntilDate) : 0,
      preventVoiceUntilDate: isSet(object.preventVoiceUntilDate) ? Number(object.preventVoiceUntilDate) : 0,
      preventPublicTextChatUntilDate: isSet(object.preventPublicTextChatUntilDate)
        ? Number(object.preventPublicTextChatUntilDate)
        : 0,
      preventNewPlayerChatUntilDate: isSet(object.preventNewPlayerChatUntilDate)
        ? Number(object.preventNewPlayerChatUntilDate)
        : 0,
      lastAbandonedGameDate: isSet(object.lastAbandonedGameDate) ? Number(object.lastAbandonedGameDate) : 0,
      lastSecondaryAbandonedGameDate: isSet(object.lastSecondaryAbandonedGameDate)
        ? Number(object.lastSecondaryAbandonedGameDate)
        : 0,
      leaverPenaltyCount: isSet(object.leaverPenaltyCount) ? Number(object.leaverPenaltyCount) : 0,
      completedGameStreak: isSet(object.completedGameStreak) ? Number(object.completedGameStreak) : 0,
      accountDisabledUntilDate: isSet(object.accountDisabledUntilDate) ? Number(object.accountDisabledUntilDate) : 0,
      accountDisabledCount: isSet(object.accountDisabledCount) ? Number(object.accountDisabledCount) : 0,
      matchDisabledUntilDate: isSet(object.matchDisabledUntilDate) ? Number(object.matchDisabledUntilDate) : 0,
      matchDisabledCount: isSet(object.matchDisabledCount) ? Number(object.matchDisabledCount) : 0,
      shutdownlawterminatetimestamp: isSet(object.shutdownlawterminatetimestamp)
        ? Number(object.shutdownlawterminatetimestamp)
        : 0,
      lowPriorityGamesRemaining: isSet(object.lowPriorityGamesRemaining) ? Number(object.lowPriorityGamesRemaining) : 0,
      recruitmentLevel: isSet(object.recruitmentLevel) ? Number(object.recruitmentLevel) : 0,
      hasNewNotifications: isSet(object.hasNewNotifications) ? Boolean(object.hasNewNotifications) : false,
      isLeagueAdmin: isSet(object.isLeagueAdmin) ? Boolean(object.isLeagueAdmin) : false,
      casualGamesPlayed: isSet(object.casualGamesPlayed) ? Number(object.casualGamesPlayed) : 0,
      soloCompetitiveGamesPlayed: isSet(object.soloCompetitiveGamesPlayed)
        ? Number(object.soloCompetitiveGamesPlayed)
        : 0,
      partyCompetitiveGamesPlayed: isSet(object.partyCompetitiveGamesPlayed)
        ? Number(object.partyCompetitiveGamesPlayed)
        : 0,
      casual1v1GamesPlayed: isSet(object.casual1v1GamesPlayed) ? Number(object.casual1v1GamesPlayed) : 0,
      currAllHeroChallengeId: isSet(object.currAllHeroChallengeId) ? Number(object.currAllHeroChallengeId) : 0,
      playTimePoints: isSet(object.playTimePoints) ? Number(object.playTimePoints) : 0,
      accountFlags: isSet(object.accountFlags) ? Number(object.accountFlags) : 0,
      playTimeLevel: isSet(object.playTimeLevel) ? Number(object.playTimeLevel) : 0,
      playerBehaviorSeqNumLastReport: isSet(object.playerBehaviorSeqNumLastReport)
        ? Number(object.playerBehaviorSeqNumLastReport)
        : 0,
      playerBehaviorScoreLastReport: isSet(object.playerBehaviorScoreLastReport)
        ? Number(object.playerBehaviorScoreLastReport)
        : 0,
      playerBehaviorReportOldData: isSet(object.playerBehaviorReportOldData)
        ? Boolean(object.playerBehaviorReportOldData)
        : false,
      tourneySkillLevel: isSet(object.tourneySkillLevel) ? Number(object.tourneySkillLevel) : 0,
      tourneyRecentParticipationDate: isSet(object.tourneyRecentParticipationDate)
        ? Number(object.tourneyRecentParticipationDate)
        : 0,
      anchoredPhoneNumberId: isSet(object.anchoredPhoneNumberId) ? String(object.anchoredPhoneNumberId) : "0",
      rankedMatchmakingBanUntilDate: isSet(object.rankedMatchmakingBanUntilDate)
        ? Number(object.rankedMatchmakingBanUntilDate)
        : 0,
      recentGameTime1: isSet(object.recentGameTime1) ? Number(object.recentGameTime1) : 0,
      recentGameTime2: isSet(object.recentGameTime2) ? Number(object.recentGameTime2) : 0,
      recentGameTime3: isSet(object.recentGameTime3) ? Number(object.recentGameTime3) : 0,
      favoriteTeamPacked: isSet(object.favoriteTeamPacked) ? String(object.favoriteTeamPacked) : "0",
      recentReportTime: isSet(object.recentReportTime) ? Number(object.recentReportTime) : 0,
      customGameDisabledUntilDate: isSet(object.customGameDisabledUntilDate)
        ? Number(object.customGameDisabledUntilDate)
        : 0,
      recentWinTime1: isSet(object.recentWinTime1) ? Number(object.recentWinTime1) : 0,
      recentWinTime2: isSet(object.recentWinTime2) ? Number(object.recentWinTime2) : 0,
      recentWinTime3: isSet(object.recentWinTime3) ? Number(object.recentWinTime3) : 0,
      coachRating: isSet(object.coachRating) ? Number(object.coachRating) : 0,
      queuePoints: isSet(object.queuePoints) ? Number(object.queuePoints) : 0,
      roleHandicaps: Array.isArray(object?.roleHandicaps)
        ? object.roleHandicaps.map((e: any) => CSODOTAGameAccountClient_RoleHandicap.fromJSON(e))
        : [],
      eventModeRecentTime: isSet(object.eventModeRecentTime) ? Number(object.eventModeRecentTime) : 0,
      mmrRecalibrationTime: isSet(object.mmrRecalibrationTime) ? Number(object.mmrRecalibrationTime) : 0,
    };
  },

  toJSON(message: CSODOTAGameAccountClient): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.wins !== undefined && (obj.wins = Math.round(message.wins));
    message.losses !== undefined && (obj.losses = Math.round(message.losses));
    message.xp !== undefined && (obj.xp = Math.round(message.xp));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.initialSkill !== undefined && (obj.initialSkill = Math.round(message.initialSkill));
    message.leaverCount !== undefined && (obj.leaverCount = Math.round(message.leaverCount));
    message.secondaryLeaverCount !== undefined && (obj.secondaryLeaverCount = Math.round(message.secondaryLeaverCount));
    message.lowPriorityUntilDate !== undefined && (obj.lowPriorityUntilDate = Math.round(message.lowPriorityUntilDate));
    message.preventTextChatUntilDate !== undefined &&
      (obj.preventTextChatUntilDate = Math.round(message.preventTextChatUntilDate));
    message.preventVoiceUntilDate !== undefined &&
      (obj.preventVoiceUntilDate = Math.round(message.preventVoiceUntilDate));
    message.preventPublicTextChatUntilDate !== undefined &&
      (obj.preventPublicTextChatUntilDate = Math.round(message.preventPublicTextChatUntilDate));
    message.preventNewPlayerChatUntilDate !== undefined &&
      (obj.preventNewPlayerChatUntilDate = Math.round(message.preventNewPlayerChatUntilDate));
    message.lastAbandonedGameDate !== undefined &&
      (obj.lastAbandonedGameDate = Math.round(message.lastAbandonedGameDate));
    message.lastSecondaryAbandonedGameDate !== undefined &&
      (obj.lastSecondaryAbandonedGameDate = Math.round(message.lastSecondaryAbandonedGameDate));
    message.leaverPenaltyCount !== undefined && (obj.leaverPenaltyCount = Math.round(message.leaverPenaltyCount));
    message.completedGameStreak !== undefined && (obj.completedGameStreak = Math.round(message.completedGameStreak));
    message.accountDisabledUntilDate !== undefined &&
      (obj.accountDisabledUntilDate = Math.round(message.accountDisabledUntilDate));
    message.accountDisabledCount !== undefined && (obj.accountDisabledCount = Math.round(message.accountDisabledCount));
    message.matchDisabledUntilDate !== undefined &&
      (obj.matchDisabledUntilDate = Math.round(message.matchDisabledUntilDate));
    message.matchDisabledCount !== undefined && (obj.matchDisabledCount = Math.round(message.matchDisabledCount));
    message.shutdownlawterminatetimestamp !== undefined &&
      (obj.shutdownlawterminatetimestamp = Math.round(message.shutdownlawterminatetimestamp));
    message.lowPriorityGamesRemaining !== undefined &&
      (obj.lowPriorityGamesRemaining = Math.round(message.lowPriorityGamesRemaining));
    message.recruitmentLevel !== undefined && (obj.recruitmentLevel = Math.round(message.recruitmentLevel));
    message.hasNewNotifications !== undefined && (obj.hasNewNotifications = message.hasNewNotifications);
    message.isLeagueAdmin !== undefined && (obj.isLeagueAdmin = message.isLeagueAdmin);
    message.casualGamesPlayed !== undefined && (obj.casualGamesPlayed = Math.round(message.casualGamesPlayed));
    message.soloCompetitiveGamesPlayed !== undefined &&
      (obj.soloCompetitiveGamesPlayed = Math.round(message.soloCompetitiveGamesPlayed));
    message.partyCompetitiveGamesPlayed !== undefined &&
      (obj.partyCompetitiveGamesPlayed = Math.round(message.partyCompetitiveGamesPlayed));
    message.casual1v1GamesPlayed !== undefined && (obj.casual1v1GamesPlayed = Math.round(message.casual1v1GamesPlayed));
    message.currAllHeroChallengeId !== undefined &&
      (obj.currAllHeroChallengeId = Math.round(message.currAllHeroChallengeId));
    message.playTimePoints !== undefined && (obj.playTimePoints = Math.round(message.playTimePoints));
    message.accountFlags !== undefined && (obj.accountFlags = Math.round(message.accountFlags));
    message.playTimeLevel !== undefined && (obj.playTimeLevel = Math.round(message.playTimeLevel));
    message.playerBehaviorSeqNumLastReport !== undefined &&
      (obj.playerBehaviorSeqNumLastReport = Math.round(message.playerBehaviorSeqNumLastReport));
    message.playerBehaviorScoreLastReport !== undefined &&
      (obj.playerBehaviorScoreLastReport = Math.round(message.playerBehaviorScoreLastReport));
    message.playerBehaviorReportOldData !== undefined &&
      (obj.playerBehaviorReportOldData = message.playerBehaviorReportOldData);
    message.tourneySkillLevel !== undefined && (obj.tourneySkillLevel = Math.round(message.tourneySkillLevel));
    message.tourneyRecentParticipationDate !== undefined &&
      (obj.tourneyRecentParticipationDate = Math.round(message.tourneyRecentParticipationDate));
    message.anchoredPhoneNumberId !== undefined && (obj.anchoredPhoneNumberId = message.anchoredPhoneNumberId);
    message.rankedMatchmakingBanUntilDate !== undefined &&
      (obj.rankedMatchmakingBanUntilDate = Math.round(message.rankedMatchmakingBanUntilDate));
    message.recentGameTime1 !== undefined && (obj.recentGameTime1 = Math.round(message.recentGameTime1));
    message.recentGameTime2 !== undefined && (obj.recentGameTime2 = Math.round(message.recentGameTime2));
    message.recentGameTime3 !== undefined && (obj.recentGameTime3 = Math.round(message.recentGameTime3));
    message.favoriteTeamPacked !== undefined && (obj.favoriteTeamPacked = message.favoriteTeamPacked);
    message.recentReportTime !== undefined && (obj.recentReportTime = Math.round(message.recentReportTime));
    message.customGameDisabledUntilDate !== undefined &&
      (obj.customGameDisabledUntilDate = Math.round(message.customGameDisabledUntilDate));
    message.recentWinTime1 !== undefined && (obj.recentWinTime1 = Math.round(message.recentWinTime1));
    message.recentWinTime2 !== undefined && (obj.recentWinTime2 = Math.round(message.recentWinTime2));
    message.recentWinTime3 !== undefined && (obj.recentWinTime3 = Math.round(message.recentWinTime3));
    message.coachRating !== undefined && (obj.coachRating = Math.round(message.coachRating));
    message.queuePoints !== undefined && (obj.queuePoints = Math.round(message.queuePoints));
    if (message.roleHandicaps) {
      obj.roleHandicaps = message.roleHandicaps.map((e) =>
        e ? CSODOTAGameAccountClient_RoleHandicap.toJSON(e) : undefined
      );
    } else {
      obj.roleHandicaps = [];
    }
    message.eventModeRecentTime !== undefined && (obj.eventModeRecentTime = Math.round(message.eventModeRecentTime));
    message.mmrRecalibrationTime !== undefined && (obj.mmrRecalibrationTime = Math.round(message.mmrRecalibrationTime));
    return obj;
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

  fromJSON(object: any): CSODOTAGameAccountClient_RoleHandicap {
    return {
      role: isSet(object.role) ? Number(object.role) : 0,
      handicap: isSet(object.handicap) ? Number(object.handicap) : 0,
    };
  },

  toJSON(message: CSODOTAGameAccountClient_RoleHandicap): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = Math.round(message.role));
    message.handicap !== undefined && (obj.handicap = message.handicap);
    return obj;
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

  fromJSON(object: any): CSODOTAGameAccountPlus {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      originalStartDate: isSet(object.originalStartDate) ? Number(object.originalStartDate) : 0,
      plusFlags: isSet(object.plusFlags) ? Number(object.plusFlags) : 0,
      plusStatus: isSet(object.plusStatus) ? Number(object.plusStatus) : 0,
      prepaidTimeStart: isSet(object.prepaidTimeStart) ? Number(object.prepaidTimeStart) : 0,
      prepaidTimeBalance: isSet(object.prepaidTimeBalance) ? Number(object.prepaidTimeBalance) : 0,
      nextPaymentDate: isSet(object.nextPaymentDate) ? Number(object.nextPaymentDate) : 0,
      steamAgreementId: isSet(object.steamAgreementId) ? String(object.steamAgreementId) : "0",
    };
  },

  toJSON(message: CSODOTAGameAccountPlus): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.originalStartDate !== undefined && (obj.originalStartDate = Math.round(message.originalStartDate));
    message.plusFlags !== undefined && (obj.plusFlags = Math.round(message.plusFlags));
    message.plusStatus !== undefined && (obj.plusStatus = Math.round(message.plusStatus));
    message.prepaidTimeStart !== undefined && (obj.prepaidTimeStart = Math.round(message.prepaidTimeStart));
    message.prepaidTimeBalance !== undefined && (obj.prepaidTimeBalance = Math.round(message.prepaidTimeBalance));
    message.nextPaymentDate !== undefined && (obj.nextPaymentDate = Math.round(message.nextPaymentDate));
    message.steamAgreementId !== undefined && (obj.steamAgreementId = message.steamAgreementId);
    return obj;
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

  fromJSON(object: any): CMsgLobbyFeaturedGamemodeProgress {
    return {
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => CMsgLobbyFeaturedGamemodeProgress_AccountProgress.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgLobbyFeaturedGamemodeProgress): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) =>
        e ? CMsgLobbyFeaturedGamemodeProgress_AccountProgress.toJSON(e) : undefined
      );
    } else {
      obj.accounts = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgLobbyFeaturedGamemodeProgress_AccountProgress {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      currentValue: isSet(object.currentValue) ? Number(object.currentValue) : 0,
      maxValue: isSet(object.maxValue) ? Number(object.maxValue) : 0,
    };
  },

  toJSON(message: CMsgLobbyFeaturedGamemodeProgress_AccountProgress): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.currentValue !== undefined && (obj.currentValue = Math.round(message.currentValue));
    message.maxValue !== undefined && (obj.maxValue = Math.round(message.maxValue));
    return obj;
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

  fromJSON(object: any): CMsgBattleCupVictory {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      winDate: isSet(object.winDate) ? Number(object.winDate) : 0,
      validUntil: isSet(object.validUntil) ? Number(object.validUntil) : 0,
      skillLevel: isSet(object.skillLevel) ? Number(object.skillLevel) : 0,
      tournamentId: isSet(object.tournamentId) ? Number(object.tournamentId) : 0,
      divisionId: isSet(object.divisionId) ? Number(object.divisionId) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      streak: isSet(object.streak) ? Number(object.streak) : 0,
      trophyId: isSet(object.trophyId) ? Number(object.trophyId) : 0,
    };
  },

  toJSON(message: CMsgBattleCupVictory): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.winDate !== undefined && (obj.winDate = Math.round(message.winDate));
    message.validUntil !== undefined && (obj.validUntil = Math.round(message.validUntil));
    message.skillLevel !== undefined && (obj.skillLevel = Math.round(message.skillLevel));
    message.tournamentId !== undefined && (obj.tournamentId = Math.round(message.tournamentId));
    message.divisionId !== undefined && (obj.divisionId = Math.round(message.divisionId));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.streak !== undefined && (obj.streak = Math.round(message.streak));
    message.trophyId !== undefined && (obj.trophyId = Math.round(message.trophyId));
    return obj;
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

  fromJSON(object: any): CMsgLobbyBattleCupVictoryList {
    return {
      winners: Array.isArray(object?.winners) ? object.winners.map((e: any) => CMsgBattleCupVictory.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgLobbyBattleCupVictoryList): unknown {
    const obj: any = {};
    if (message.winners) {
      obj.winners = message.winners.map((e) => e ? CMsgBattleCupVictory.toJSON(e) : undefined);
    } else {
      obj.winners = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgDOTABroadcastNotification {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: CMsgDOTABroadcastNotification): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
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

  fromJSON(object: any): CProtoItemHeroStatue {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      statusEffectIndex: isSet(object.statusEffectIndex) ? Number(object.statusEffectIndex) : 0,
      sequenceName: isSet(object.sequenceName) ? String(object.sequenceName) : "",
      cycle: isSet(object.cycle) ? Number(object.cycle) : 0,
      wearable: Array.isArray(object?.wearable) ? object.wearable.map((e: any) => Number(e)) : [],
      inscription: isSet(object.inscription) ? String(object.inscription) : "",
      style: Array.isArray(object?.style) ? object.style.map((e: any) => Number(e)) : [],
      tournamentDrop: isSet(object.tournamentDrop) ? Boolean(object.tournamentDrop) : false,
    };
  },

  toJSON(message: CProtoItemHeroStatue): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.statusEffectIndex !== undefined && (obj.statusEffectIndex = Math.round(message.statusEffectIndex));
    message.sequenceName !== undefined && (obj.sequenceName = message.sequenceName);
    message.cycle !== undefined && (obj.cycle = message.cycle);
    if (message.wearable) {
      obj.wearable = message.wearable.map((e) => Math.round(e));
    } else {
      obj.wearable = [];
    }
    message.inscription !== undefined && (obj.inscription = message.inscription);
    if (message.style) {
      obj.style = message.style.map((e) => Math.round(e));
    } else {
      obj.style = [];
    }
    message.tournamentDrop !== undefined && (obj.tournamentDrop = message.tournamentDrop);
    return obj;
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

  fromJSON(object: any): CMatchPlayerAbilityUpgrade {
    return {
      ability: isSet(object.ability) ? Number(object.ability) : 0,
      time: isSet(object.time) ? Number(object.time) : 0,
    };
  },

  toJSON(message: CMatchPlayerAbilityUpgrade): unknown {
    const obj: any = {};
    message.ability !== undefined && (obj.ability = Math.round(message.ability));
    message.time !== undefined && (obj.time = Math.round(message.time));
    return obj;
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

  fromJSON(object: any): CMatchPlayerTimedCustomStat {
    return {
      stat: isSet(object.stat) ? eDOTAMatchPlayerTimeCustomStatFromJSON(object.stat) : 1,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: CMatchPlayerTimedCustomStat): unknown {
    const obj: any = {};
    message.stat !== undefined && (obj.stat = eDOTAMatchPlayerTimeCustomStatToJSON(message.stat));
    message.value !== undefined && (obj.value = message.value);
    return obj;
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

  fromJSON(object: any): CMatchPlayerTimedStats {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      assists: isSet(object.assists) ? Number(object.assists) : 0,
      netWorth: isSet(object.netWorth) ? Number(object.netWorth) : 0,
      xp: isSet(object.xp) ? Number(object.xp) : 0,
      lastHits: isSet(object.lastHits) ? Number(object.lastHits) : 0,
      denies: isSet(object.denies) ? Number(object.denies) : 0,
      bountyRuneGold: isSet(object.bountyRuneGold) ? Number(object.bountyRuneGold) : 0,
      rangeCreepUpgradeGold: isSet(object.rangeCreepUpgradeGold) ? Number(object.rangeCreepUpgradeGold) : 0,
      observerWardsDewarded: isSet(object.observerWardsDewarded) ? Number(object.observerWardsDewarded) : 0,
      reliableGoldEarned: isSet(object.reliableGoldEarned) ? Number(object.reliableGoldEarned) : 0,
      goldLossPrevented: isSet(object.goldLossPrevented) ? Number(object.goldLossPrevented) : 0,
      heroKillGold: isSet(object.heroKillGold) ? Number(object.heroKillGold) : 0,
      creepKillGold: isSet(object.creepKillGold) ? Number(object.creepKillGold) : 0,
      buildingGold: isSet(object.buildingGold) ? Number(object.buildingGold) : 0,
      otherGold: isSet(object.otherGold) ? Number(object.otherGold) : 0,
      comebackGold: isSet(object.comebackGold) ? Number(object.comebackGold) : 0,
      experimentalGold: isSet(object.experimentalGold) ? Number(object.experimentalGold) : 0,
      experimental2Gold: isSet(object.experimental2Gold) ? Number(object.experimental2Gold) : 0,
      creepDenyGold: isSet(object.creepDenyGold) ? Number(object.creepDenyGold) : 0,
      tpScrollsPurchased1: isSet(object.tpScrollsPurchased1) ? Number(object.tpScrollsPurchased1) : 0,
      tpScrollsPurchased2: isSet(object.tpScrollsPurchased2) ? Number(object.tpScrollsPurchased2) : 0,
      tpScrollsPurchased3: isSet(object.tpScrollsPurchased3) ? Number(object.tpScrollsPurchased3) : 0,
      tpScrollsPurchased4: isSet(object.tpScrollsPurchased4) ? Number(object.tpScrollsPurchased4) : 0,
      tpScrollsPurchased5: isSet(object.tpScrollsPurchased5) ? Number(object.tpScrollsPurchased5) : 0,
      neutralGold: isSet(object.neutralGold) ? Number(object.neutralGold) : 0,
      courierGold: isSet(object.courierGold) ? Number(object.courierGold) : 0,
      roshanGold: isSet(object.roshanGold) ? Number(object.roshanGold) : 0,
      incomeGold: isSet(object.incomeGold) ? Number(object.incomeGold) : 0,
      itemValue: isSet(object.itemValue) ? Number(object.itemValue) : 0,
      supportGoldSpent: isSet(object.supportGoldSpent) ? Number(object.supportGoldSpent) : 0,
      campsStacked: isSet(object.campsStacked) ? Number(object.campsStacked) : 0,
      wardsPlaced: isSet(object.wardsPlaced) ? Number(object.wardsPlaced) : 0,
      tripleKills: isSet(object.tripleKills) ? Number(object.tripleKills) : 0,
      rampages: isSet(object.rampages) ? Number(object.rampages) : 0,
      customStats: Array.isArray(object?.customStats)
        ? object.customStats.map((e: any) => CMatchPlayerTimedCustomStat.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMatchPlayerTimedStats): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.assists !== undefined && (obj.assists = Math.round(message.assists));
    message.netWorth !== undefined && (obj.netWorth = Math.round(message.netWorth));
    message.xp !== undefined && (obj.xp = Math.round(message.xp));
    message.lastHits !== undefined && (obj.lastHits = Math.round(message.lastHits));
    message.denies !== undefined && (obj.denies = Math.round(message.denies));
    message.bountyRuneGold !== undefined && (obj.bountyRuneGold = Math.round(message.bountyRuneGold));
    message.rangeCreepUpgradeGold !== undefined &&
      (obj.rangeCreepUpgradeGold = Math.round(message.rangeCreepUpgradeGold));
    message.observerWardsDewarded !== undefined &&
      (obj.observerWardsDewarded = Math.round(message.observerWardsDewarded));
    message.reliableGoldEarned !== undefined && (obj.reliableGoldEarned = Math.round(message.reliableGoldEarned));
    message.goldLossPrevented !== undefined && (obj.goldLossPrevented = Math.round(message.goldLossPrevented));
    message.heroKillGold !== undefined && (obj.heroKillGold = Math.round(message.heroKillGold));
    message.creepKillGold !== undefined && (obj.creepKillGold = Math.round(message.creepKillGold));
    message.buildingGold !== undefined && (obj.buildingGold = Math.round(message.buildingGold));
    message.otherGold !== undefined && (obj.otherGold = Math.round(message.otherGold));
    message.comebackGold !== undefined && (obj.comebackGold = Math.round(message.comebackGold));
    message.experimentalGold !== undefined && (obj.experimentalGold = Math.round(message.experimentalGold));
    message.experimental2Gold !== undefined && (obj.experimental2Gold = Math.round(message.experimental2Gold));
    message.creepDenyGold !== undefined && (obj.creepDenyGold = Math.round(message.creepDenyGold));
    message.tpScrollsPurchased1 !== undefined && (obj.tpScrollsPurchased1 = Math.round(message.tpScrollsPurchased1));
    message.tpScrollsPurchased2 !== undefined && (obj.tpScrollsPurchased2 = Math.round(message.tpScrollsPurchased2));
    message.tpScrollsPurchased3 !== undefined && (obj.tpScrollsPurchased3 = Math.round(message.tpScrollsPurchased3));
    message.tpScrollsPurchased4 !== undefined && (obj.tpScrollsPurchased4 = Math.round(message.tpScrollsPurchased4));
    message.tpScrollsPurchased5 !== undefined && (obj.tpScrollsPurchased5 = Math.round(message.tpScrollsPurchased5));
    message.neutralGold !== undefined && (obj.neutralGold = Math.round(message.neutralGold));
    message.courierGold !== undefined && (obj.courierGold = Math.round(message.courierGold));
    message.roshanGold !== undefined && (obj.roshanGold = Math.round(message.roshanGold));
    message.incomeGold !== undefined && (obj.incomeGold = Math.round(message.incomeGold));
    message.itemValue !== undefined && (obj.itemValue = Math.round(message.itemValue));
    message.supportGoldSpent !== undefined && (obj.supportGoldSpent = Math.round(message.supportGoldSpent));
    message.campsStacked !== undefined && (obj.campsStacked = Math.round(message.campsStacked));
    message.wardsPlaced !== undefined && (obj.wardsPlaced = Math.round(message.wardsPlaced));
    message.tripleKills !== undefined && (obj.tripleKills = Math.round(message.tripleKills));
    message.rampages !== undefined && (obj.rampages = Math.round(message.rampages));
    if (message.customStats) {
      obj.customStats = message.customStats.map((e) => e ? CMatchPlayerTimedCustomStat.toJSON(e) : undefined);
    } else {
      obj.customStats = [];
    }
    return obj;
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

  fromJSON(object: any): CMatchTeamTimedStats {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      enemyTowersKilled: isSet(object.enemyTowersKilled) ? Number(object.enemyTowersKilled) : 0,
      enemyBarracksKilled: isSet(object.enemyBarracksKilled) ? Number(object.enemyBarracksKilled) : 0,
      enemyTowersStatus: isSet(object.enemyTowersStatus) ? Number(object.enemyTowersStatus) : 0,
      enemyBarracksStatus: isSet(object.enemyBarracksStatus) ? Number(object.enemyBarracksStatus) : 0,
    };
  },

  toJSON(message: CMatchTeamTimedStats): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.enemyTowersKilled !== undefined && (obj.enemyTowersKilled = Math.round(message.enemyTowersKilled));
    message.enemyBarracksKilled !== undefined && (obj.enemyBarracksKilled = Math.round(message.enemyBarracksKilled));
    message.enemyTowersStatus !== undefined && (obj.enemyTowersStatus = Math.round(message.enemyTowersStatus));
    message.enemyBarracksStatus !== undefined && (obj.enemyBarracksStatus = Math.round(message.enemyBarracksStatus));
    return obj;
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

  fromJSON(object: any): CMatchAdditionalUnitInventory {
    return {
      unitName: isSet(object.unitName) ? String(object.unitName) : "",
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMatchAdditionalUnitInventory): unknown {
    const obj: any = {};
    message.unitName !== undefined && (obj.unitName = message.unitName);
    if (message.items) {
      obj.items = message.items.map((e) => Math.round(e));
    } else {
      obj.items = [];
    }
    return obj;
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

  fromJSON(object: any): CMatchPlayerPermanentBuff {
    return {
      permanentBuff: isSet(object.permanentBuff) ? Number(object.permanentBuff) : 0,
      stackCount: isSet(object.stackCount) ? Number(object.stackCount) : 0,
      grantTime: isSet(object.grantTime) ? Number(object.grantTime) : 0,
    };
  },

  toJSON(message: CMatchPlayerPermanentBuff): unknown {
    const obj: any = {};
    message.permanentBuff !== undefined && (obj.permanentBuff = Math.round(message.permanentBuff));
    message.stackCount !== undefined && (obj.stackCount = Math.round(message.stackCount));
    message.grantTime !== undefined && (obj.grantTime = Math.round(message.grantTime));
    return obj;
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

  fromJSON(object: any): CMatchHeroSelectEvent {
    return {
      isPick: isSet(object.isPick) ? Boolean(object.isPick) : false,
      team: isSet(object.team) ? Number(object.team) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
    };
  },

  toJSON(message: CMatchHeroSelectEvent): unknown {
    const obj: any = {};
    message.isPick !== undefined && (obj.isPick = message.isPick);
    message.team !== undefined && (obj.team = Math.round(message.team));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    return obj;
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

  fromJSON(object: any): CMatchClip {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      playerAccountId: isSet(object.playerAccountId) ? Number(object.playerAccountId) : 0,
      gameTimeSeconds: isSet(object.gameTimeSeconds) ? Number(object.gameTimeSeconds) : 0,
      durationSeconds: isSet(object.durationSeconds) ? Number(object.durationSeconds) : 0,
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      cameraMode: isSet(object.cameraMode) ? Number(object.cameraMode) : 0,
      comment: isSet(object.comment) ? String(object.comment) : "",
    };
  },

  toJSON(message: CMatchClip): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.playerAccountId !== undefined && (obj.playerAccountId = Math.round(message.playerAccountId));
    message.gameTimeSeconds !== undefined && (obj.gameTimeSeconds = Math.round(message.gameTimeSeconds));
    message.durationSeconds !== undefined && (obj.durationSeconds = Math.round(message.durationSeconds));
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    message.cameraMode !== undefined && (obj.cameraMode = Math.round(message.cameraMode));
    message.comment !== undefined && (obj.comment = message.comment);
    return obj;
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

  fromJSON(object: any): CPartySearchClientParty {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "0",
      beaconType: isSet(object.beaconType) ? Number(object.beaconType) : 0,
      partyMembers: Array.isArray(object?.partyMembers) ? object.partyMembers.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CPartySearchClientParty): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.beaconType !== undefined && (obj.beaconType = Math.round(message.beaconType));
    if (message.partyMembers) {
      obj.partyMembers = message.partyMembers.map((e) => Math.round(e));
    } else {
      obj.partyMembers = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgDOTAHasItemQuery {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
    };
  },

  toJSON(message: CMsgDOTAHasItemQuery): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
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

  fromJSON(object: any): CMsgDOTAHasItemResponse {
    return { hasItem: isSet(object.hasItem) ? Boolean(object.hasItem) : false };
  },

  toJSON(message: CMsgDOTAHasItemResponse): unknown {
    const obj: any = {};
    message.hasItem !== undefined && (obj.hasItem = message.hasItem);
    return obj;
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

  fromJSON(object: any): CMsgGCGetPlayerCardItemInfo {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      playerCardItemIds: Array.isArray(object?.playerCardItemIds)
        ? object.playerCardItemIds.map((e: any) => String(e))
        : [],
      allForEvent: isSet(object.allForEvent) ? Number(object.allForEvent) : 0,
    };
  },

  toJSON(message: CMsgGCGetPlayerCardItemInfo): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    if (message.playerCardItemIds) {
      obj.playerCardItemIds = message.playerCardItemIds.map((e) => e);
    } else {
      obj.playerCardItemIds = [];
    }
    message.allForEvent !== undefined && (obj.allForEvent = Math.round(message.allForEvent));
    return obj;
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

  fromJSON(object: any): CMsgGCGetPlayerCardItemInfoResponse {
    return {
      playerCardInfos: Array.isArray(object?.playerCardInfos)
        ? object.playerCardInfos.map((e: any) => CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGCGetPlayerCardItemInfoResponse): unknown {
    const obj: any = {};
    if (message.playerCardInfos) {
      obj.playerCardInfos = message.playerCardInfos.map((e) =>
        e ? CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo.toJSON(e) : undefined
      );
    } else {
      obj.playerCardInfos = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo {
    return {
      playerCardItemId: isSet(object.playerCardItemId) ? String(object.playerCardItemId) : "0",
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      packedBonuses: isSet(object.packedBonuses) ? String(object.packedBonuses) : "0",
    };
  },

  toJSON(message: CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo): unknown {
    const obj: any = {};
    message.playerCardItemId !== undefined && (obj.playerCardItemId = message.playerCardItemId);
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.packedBonuses !== undefined && (obj.packedBonuses = message.packedBonuses);
    return obj;
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

  fromJSON(object: any): CSODOTAMapLocationState {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      locationId: isSet(object.locationId) ? Number(object.locationId) : 0,
      completed: isSet(object.completed) ? Boolean(object.completed) : false,
    };
  },

  toJSON(message: CSODOTAMapLocationState): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.locationId !== undefined && (obj.locationId = Math.round(message.locationId));
    message.completed !== undefined && (obj.completed = message.completed);
    return obj;
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

  fromJSON(object: any): CMsgLeagueAdminList {
    return { accountIds: Array.isArray(object?.accountIds) ? object.accountIds.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CMsgLeagueAdminList): unknown {
    const obj: any = {};
    if (message.accountIds) {
      obj.accountIds = message.accountIds.map((e) => Math.round(e));
    } else {
      obj.accountIds = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgDOTAProfileCard {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      slots: Array.isArray(object?.slots) ? object.slots.map((e: any) => CMsgDOTAProfileCard_Slot.fromJSON(e)) : [],
      badgePoints: isSet(object.badgePoints) ? Number(object.badgePoints) : 0,
      eventPoints: isSet(object.eventPoints) ? Number(object.eventPoints) : 0,
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      recentBattleCupVictory: isSet(object.recentBattleCupVictory)
        ? CMsgBattleCupVictory.fromJSON(object.recentBattleCupVictory)
        : undefined,
      rankTier: isSet(object.rankTier) ? Number(object.rankTier) : 0,
      leaderboardRank: isSet(object.leaderboardRank) ? Number(object.leaderboardRank) : 0,
      isPlusSubscriber: isSet(object.isPlusSubscriber) ? Boolean(object.isPlusSubscriber) : false,
      plusOriginalStartDate: isSet(object.plusOriginalStartDate) ? Number(object.plusOriginalStartDate) : 0,
      rankTierScore: isSet(object.rankTierScore) ? Number(object.rankTierScore) : 0,
      leaderboardRankCore: isSet(object.leaderboardRankCore) ? Number(object.leaderboardRankCore) : 0,
      title: isSet(object.title) ? Number(object.title) : 0,
      favoriteTeamPacked: isSet(object.favoriteTeamPacked) ? String(object.favoriteTeamPacked) : "0",
      lifetimeGames: isSet(object.lifetimeGames) ? Number(object.lifetimeGames) : 0,
    };
  },

  toJSON(message: CMsgDOTAProfileCard): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    if (message.slots) {
      obj.slots = message.slots.map((e) => e ? CMsgDOTAProfileCard_Slot.toJSON(e) : undefined);
    } else {
      obj.slots = [];
    }
    message.badgePoints !== undefined && (obj.badgePoints = Math.round(message.badgePoints));
    message.eventPoints !== undefined && (obj.eventPoints = Math.round(message.eventPoints));
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    message.recentBattleCupVictory !== undefined && (obj.recentBattleCupVictory = message.recentBattleCupVictory
      ? CMsgBattleCupVictory.toJSON(message.recentBattleCupVictory)
      : undefined);
    message.rankTier !== undefined && (obj.rankTier = Math.round(message.rankTier));
    message.leaderboardRank !== undefined && (obj.leaderboardRank = Math.round(message.leaderboardRank));
    message.isPlusSubscriber !== undefined && (obj.isPlusSubscriber = message.isPlusSubscriber);
    message.plusOriginalStartDate !== undefined &&
      (obj.plusOriginalStartDate = Math.round(message.plusOriginalStartDate));
    message.rankTierScore !== undefined && (obj.rankTierScore = Math.round(message.rankTierScore));
    message.leaderboardRankCore !== undefined && (obj.leaderboardRankCore = Math.round(message.leaderboardRankCore));
    message.title !== undefined && (obj.title = Math.round(message.title));
    message.favoriteTeamPacked !== undefined && (obj.favoriteTeamPacked = message.favoriteTeamPacked);
    message.lifetimeGames !== undefined && (obj.lifetimeGames = Math.round(message.lifetimeGames));
    return obj;
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

  fromJSON(object: any): CMsgDOTAProfileCard_Slot {
    return {
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
      trophy: isSet(object.trophy) ? CMsgDOTAProfileCard_Slot_Trophy.fromJSON(object.trophy) : undefined,
      stat: isSet(object.stat) ? CMsgDOTAProfileCard_Slot_Stat.fromJSON(object.stat) : undefined,
      item: isSet(object.item) ? CMsgDOTAProfileCard_Slot_Item.fromJSON(object.item) : undefined,
      hero: isSet(object.hero) ? CMsgDOTAProfileCard_Slot_Hero.fromJSON(object.hero) : undefined,
      emoticon: isSet(object.emoticon) ? CMsgDOTAProfileCard_Slot_Emoticon.fromJSON(object.emoticon) : undefined,
      team: isSet(object.team) ? CMsgDOTAProfileCard_Slot_Team.fromJSON(object.team) : undefined,
    };
  },

  toJSON(message: CMsgDOTAProfileCard_Slot): unknown {
    const obj: any = {};
    message.slotId !== undefined && (obj.slotId = Math.round(message.slotId));
    message.trophy !== undefined &&
      (obj.trophy = message.trophy ? CMsgDOTAProfileCard_Slot_Trophy.toJSON(message.trophy) : undefined);
    message.stat !== undefined &&
      (obj.stat = message.stat ? CMsgDOTAProfileCard_Slot_Stat.toJSON(message.stat) : undefined);
    message.item !== undefined &&
      (obj.item = message.item ? CMsgDOTAProfileCard_Slot_Item.toJSON(message.item) : undefined);
    message.hero !== undefined &&
      (obj.hero = message.hero ? CMsgDOTAProfileCard_Slot_Hero.toJSON(message.hero) : undefined);
    message.emoticon !== undefined &&
      (obj.emoticon = message.emoticon ? CMsgDOTAProfileCard_Slot_Emoticon.toJSON(message.emoticon) : undefined);
    message.team !== undefined &&
      (obj.team = message.team ? CMsgDOTAProfileCard_Slot_Team.toJSON(message.team) : undefined);
    return obj;
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

  fromJSON(object: any): CMsgDOTAProfileCard_Slot_Trophy {
    return {
      trophyId: isSet(object.trophyId) ? Number(object.trophyId) : 0,
      trophyScore: isSet(object.trophyScore) ? Number(object.trophyScore) : 0,
    };
  },

  toJSON(message: CMsgDOTAProfileCard_Slot_Trophy): unknown {
    const obj: any = {};
    message.trophyId !== undefined && (obj.trophyId = Math.round(message.trophyId));
    message.trophyScore !== undefined && (obj.trophyScore = Math.round(message.trophyScore));
    return obj;
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

  fromJSON(object: any): CMsgDOTAProfileCard_Slot_Stat {
    return {
      statId: isSet(object.statId) ? cMsgDOTAProfileCard_EStatIDFromJSON(object.statId) : 3,
      statScore: isSet(object.statScore) ? Number(object.statScore) : 0,
    };
  },

  toJSON(message: CMsgDOTAProfileCard_Slot_Stat): unknown {
    const obj: any = {};
    message.statId !== undefined && (obj.statId = cMsgDOTAProfileCard_EStatIDToJSON(message.statId));
    message.statScore !== undefined && (obj.statScore = Math.round(message.statScore));
    return obj;
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

  fromJSON(object: any): CMsgDOTAProfileCard_Slot_Item {
    return {
      serializedItem: isSet(object.serializedItem)
        ? Buffer.from(bytesFromBase64(object.serializedItem))
        : Buffer.alloc(0),
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
    };
  },

  toJSON(message: CMsgDOTAProfileCard_Slot_Item): unknown {
    const obj: any = {};
    message.serializedItem !== undefined &&
      (obj.serializedItem = base64FromBytes(
        message.serializedItem !== undefined ? message.serializedItem : Buffer.alloc(0),
      ));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
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

  fromJSON(object: any): CMsgDOTAProfileCard_Slot_Hero {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      heroWins: isSet(object.heroWins) ? Number(object.heroWins) : 0,
      heroLosses: isSet(object.heroLosses) ? Number(object.heroLosses) : 0,
    };
  },

  toJSON(message: CMsgDOTAProfileCard_Slot_Hero): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.heroWins !== undefined && (obj.heroWins = Math.round(message.heroWins));
    message.heroLosses !== undefined && (obj.heroLosses = Math.round(message.heroLosses));
    return obj;
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

  fromJSON(object: any): CMsgDOTAProfileCard_Slot_Emoticon {
    return { emoticonId: isSet(object.emoticonId) ? Number(object.emoticonId) : 0 };
  },

  toJSON(message: CMsgDOTAProfileCard_Slot_Emoticon): unknown {
    const obj: any = {};
    message.emoticonId !== undefined && (obj.emoticonId = Math.round(message.emoticonId));
    return obj;
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

  fromJSON(object: any): CMsgDOTAProfileCard_Slot_Team {
    return { teamId: isSet(object.teamId) ? Number(object.teamId) : 0 };
  },

  toJSON(message: CMsgDOTAProfileCard_Slot_Team): unknown {
    const obj: any = {};
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    return obj;
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

  fromJSON(object: any): CSODOTAPlayerChallenge {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
      intParam0: isSet(object.intParam0) ? Number(object.intParam0) : 0,
      intParam1: isSet(object.intParam1) ? Number(object.intParam1) : 0,
      createdTime: isSet(object.createdTime) ? Number(object.createdTime) : 0,
      completed: isSet(object.completed) ? Number(object.completed) : 0,
      sequenceId: isSet(object.sequenceId) ? Number(object.sequenceId) : 0,
      challengeTier: isSet(object.challengeTier) ? Number(object.challengeTier) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      attempts: isSet(object.attempts) ? Number(object.attempts) : 0,
      completeLimit: isSet(object.completeLimit) ? Number(object.completeLimit) : 0,
      questRank: isSet(object.questRank) ? Number(object.questRank) : 0,
      maxQuestRank: isSet(object.maxQuestRank) ? Number(object.maxQuestRank) : 0,
      instanceId: isSet(object.instanceId) ? Number(object.instanceId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      templateId: isSet(object.templateId) ? Number(object.templateId) : 0,
    };
  },

  toJSON(message: CSODOTAPlayerChallenge): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    message.slotId !== undefined && (obj.slotId = Math.round(message.slotId));
    message.intParam0 !== undefined && (obj.intParam0 = Math.round(message.intParam0));
    message.intParam1 !== undefined && (obj.intParam1 = Math.round(message.intParam1));
    message.createdTime !== undefined && (obj.createdTime = Math.round(message.createdTime));
    message.completed !== undefined && (obj.completed = Math.round(message.completed));
    message.sequenceId !== undefined && (obj.sequenceId = Math.round(message.sequenceId));
    message.challengeTier !== undefined && (obj.challengeTier = Math.round(message.challengeTier));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.attempts !== undefined && (obj.attempts = Math.round(message.attempts));
    message.completeLimit !== undefined && (obj.completeLimit = Math.round(message.completeLimit));
    message.questRank !== undefined && (obj.questRank = Math.round(message.questRank));
    message.maxQuestRank !== undefined && (obj.maxQuestRank = Math.round(message.maxQuestRank));
    message.instanceId !== undefined && (obj.instanceId = Math.round(message.instanceId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.templateId !== undefined && (obj.templateId = Math.round(message.templateId));
    return obj;
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

  fromJSON(object: any): CMsgClientToGCRerollPlayerChallenge {
    return {
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      sequenceId: isSet(object.sequenceId) ? Number(object.sequenceId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
    };
  },

  toJSON(message: CMsgClientToGCRerollPlayerChallenge): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.sequenceId !== undefined && (obj.sequenceId = Math.round(message.sequenceId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    return obj;
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

  fromJSON(object: any): CMsgGCRerollPlayerChallengeResponse {
    return { result: isSet(object.result) ? cMsgGCRerollPlayerChallengeResponse_EResultFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgGCRerollPlayerChallengeResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = cMsgGCRerollPlayerChallengeResponse_EResultToJSON(message.result));
    return obj;
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

  fromJSON(object: any): CMsgGCTopCustomGamesList {
    return {
      topCustomGames: Array.isArray(object?.topCustomGames) ? object.topCustomGames.map((e: any) => String(e)) : [],
      gameOfTheDay: isSet(object.gameOfTheDay) ? String(object.gameOfTheDay) : "0",
    };
  },

  toJSON(message: CMsgGCTopCustomGamesList): unknown {
    const obj: any = {};
    if (message.topCustomGames) {
      obj.topCustomGames = message.topCustomGames.map((e) => e);
    } else {
      obj.topCustomGames = [];
    }
    message.gameOfTheDay !== undefined && (obj.gameOfTheDay = message.gameOfTheDay);
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStats {
    return {
      match: isSet(object.match) ? CMsgDOTARealtimeGameStats_MatchDetails.fromJSON(object.match) : undefined,
      teams: Array.isArray(object?.teams)
        ? object.teams.map((e: any) => CMsgDOTARealtimeGameStats_TeamDetails.fromJSON(e))
        : [],
      buildings: Array.isArray(object?.buildings)
        ? object.buildings.map((e: any) => CMsgDOTARealtimeGameStats_BuildingDetails.fromJSON(e))
        : [],
      graphData: isSet(object.graphData) ? CMsgDOTARealtimeGameStats_GraphData.fromJSON(object.graphData) : undefined,
      deltaFrame: isSet(object.deltaFrame) ? Boolean(object.deltaFrame) : false,
    };
  },

  toJSON(message: CMsgDOTARealtimeGameStats): unknown {
    const obj: any = {};
    message.match !== undefined &&
      (obj.match = message.match ? CMsgDOTARealtimeGameStats_MatchDetails.toJSON(message.match) : undefined);
    if (message.teams) {
      obj.teams = message.teams.map((e) => e ? CMsgDOTARealtimeGameStats_TeamDetails.toJSON(e) : undefined);
    } else {
      obj.teams = [];
    }
    if (message.buildings) {
      obj.buildings = message.buildings.map((e) => e ? CMsgDOTARealtimeGameStats_BuildingDetails.toJSON(e) : undefined);
    } else {
      obj.buildings = [];
    }
    message.graphData !== undefined &&
      (obj.graphData = message.graphData ? CMsgDOTARealtimeGameStats_GraphData.toJSON(message.graphData) : undefined);
    message.deltaFrame !== undefined && (obj.deltaFrame = message.deltaFrame);
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStats_TeamDetails {
    return {
      teamNumber: isSet(object.teamNumber) ? Number(object.teamNumber) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      teamName: isSet(object.teamName) ? String(object.teamName) : "",
      teamLogo: isSet(object.teamLogo) ? String(object.teamLogo) : "0",
      teamTag: isSet(object.teamTag) ? String(object.teamTag) : "",
      score: isSet(object.score) ? Number(object.score) : 0,
      netWorth: isSet(object.netWorth) ? Number(object.netWorth) : 0,
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgDOTARealtimeGameStats_PlayerDetails.fromJSON(e))
        : [],
      onlyTeam: isSet(object.onlyTeam) ? Boolean(object.onlyTeam) : false,
      cheers: isSet(object.cheers) ? Number(object.cheers) : 0,
      teamLogoUrl: isSet(object.teamLogoUrl) ? String(object.teamLogoUrl) : "",
    };
  },

  toJSON(message: CMsgDOTARealtimeGameStats_TeamDetails): unknown {
    const obj: any = {};
    message.teamNumber !== undefined && (obj.teamNumber = Math.round(message.teamNumber));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.teamName !== undefined && (obj.teamName = message.teamName);
    message.teamLogo !== undefined && (obj.teamLogo = message.teamLogo);
    message.teamTag !== undefined && (obj.teamTag = message.teamTag);
    message.score !== undefined && (obj.score = Math.round(message.score));
    message.netWorth !== undefined && (obj.netWorth = Math.round(message.netWorth));
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgDOTARealtimeGameStats_PlayerDetails.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    message.onlyTeam !== undefined && (obj.onlyTeam = message.onlyTeam);
    message.cheers !== undefined && (obj.cheers = Math.round(message.cheers));
    message.teamLogoUrl !== undefined && (obj.teamLogoUrl = message.teamLogoUrl);
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStats_ItemDetails {
    return {
      itemAbilityId: isSet(object.itemAbilityId) ? Number(object.itemAbilityId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      time: isSet(object.time) ? Number(object.time) : 0,
      sold: isSet(object.sold) ? Boolean(object.sold) : false,
      stackcount: isSet(object.stackcount) ? Number(object.stackcount) : 0,
    };
  },

  toJSON(message: CMsgDOTARealtimeGameStats_ItemDetails): unknown {
    const obj: any = {};
    message.itemAbilityId !== undefined && (obj.itemAbilityId = Math.round(message.itemAbilityId));
    message.name !== undefined && (obj.name = message.name);
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.sold !== undefined && (obj.sold = message.sold);
    message.stackcount !== undefined && (obj.stackcount = Math.round(message.stackcount));
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStats_AbilityDetails {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      level: isSet(object.level) ? Number(object.level) : 0,
      cooldown: isSet(object.cooldown) ? Number(object.cooldown) : 0,
      cooldownMax: isSet(object.cooldownMax) ? Number(object.cooldownMax) : 0,
    };
  },

  toJSON(message: CMsgDOTARealtimeGameStats_AbilityDetails): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.cooldown !== undefined && (obj.cooldown = message.cooldown);
    message.cooldownMax !== undefined && (obj.cooldownMax = message.cooldownMax);
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStats_HeroToHeroStats {
    return {
      victimid: isSet(object.victimid) ? Number(object.victimid) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      assists: isSet(object.assists) ? Number(object.assists) : 0,
    };
  },

  toJSON(message: CMsgDOTARealtimeGameStats_HeroToHeroStats): unknown {
    const obj: any = {};
    message.victimid !== undefined && (obj.victimid = Math.round(message.victimid));
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.assists !== undefined && (obj.assists = Math.round(message.assists));
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStats_AbilityList {
    return { id: Array.isArray(object?.id) ? object.id.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CMsgDOTARealtimeGameStats_AbilityList): unknown {
    const obj: any = {};
    if (message.id) {
      obj.id = message.id.map((e) => Math.round(e));
    } else {
      obj.id = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStats_PlayerDetails {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      playerid: isSet(object.playerid) ? Number(object.playerid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      team: isSet(object.team) ? Number(object.team) : 0,
      heroid: isSet(object.heroid) ? Number(object.heroid) : 0,
      healthpoints: isSet(object.healthpoints) ? Number(object.healthpoints) : 0,
      maxhealthpoints: isSet(object.maxhealthpoints) ? Number(object.maxhealthpoints) : 0,
      healthregenrate: isSet(object.healthregenrate) ? Number(object.healthregenrate) : 0,
      manapoints: isSet(object.manapoints) ? Number(object.manapoints) : 0,
      maxmanapoints: isSet(object.maxmanapoints) ? Number(object.maxmanapoints) : 0,
      manaregenrate: isSet(object.manaregenrate) ? Number(object.manaregenrate) : 0,
      baseStrength: isSet(object.baseStrength) ? Number(object.baseStrength) : 0,
      baseAgility: isSet(object.baseAgility) ? Number(object.baseAgility) : 0,
      baseIntelligence: isSet(object.baseIntelligence) ? Number(object.baseIntelligence) : 0,
      baseArmor: isSet(object.baseArmor) ? Number(object.baseArmor) : 0,
      baseMovespeed: isSet(object.baseMovespeed) ? Number(object.baseMovespeed) : 0,
      baseDamage: isSet(object.baseDamage) ? Number(object.baseDamage) : 0,
      strength: isSet(object.strength) ? Number(object.strength) : 0,
      agility: isSet(object.agility) ? Number(object.agility) : 0,
      intelligence: isSet(object.intelligence) ? Number(object.intelligence) : 0,
      armor: isSet(object.armor) ? Number(object.armor) : 0,
      movespeed: isSet(object.movespeed) ? Number(object.movespeed) : 0,
      damage: isSet(object.damage) ? Number(object.damage) : 0,
      heroDamage: isSet(object.heroDamage) ? Number(object.heroDamage) : 0,
      towerDamage: isSet(object.towerDamage) ? Number(object.towerDamage) : 0,
      abilities: Array.isArray(object?.abilities)
        ? object.abilities.map((e: any) => CMsgDOTARealtimeGameStats_AbilityDetails.fromJSON(e))
        : [],
      level: isSet(object.level) ? Number(object.level) : 0,
      killCount: isSet(object.killCount) ? Number(object.killCount) : 0,
      deathCount: isSet(object.deathCount) ? Number(object.deathCount) : 0,
      assistsCount: isSet(object.assistsCount) ? Number(object.assistsCount) : 0,
      deniesCount: isSet(object.deniesCount) ? Number(object.deniesCount) : 0,
      lhCount: isSet(object.lhCount) ? Number(object.lhCount) : 0,
      heroHealing: isSet(object.heroHealing) ? Number(object.heroHealing) : 0,
      goldPerMin: isSet(object.goldPerMin) ? Number(object.goldPerMin) : 0,
      xpPerMin: isSet(object.xpPerMin) ? Number(object.xpPerMin) : 0,
      netGold: isSet(object.netGold) ? Number(object.netGold) : 0,
      gold: isSet(object.gold) ? Number(object.gold) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      respawnTime: isSet(object.respawnTime) ? Number(object.respawnTime) : 0,
      ultimateCooldown: isSet(object.ultimateCooldown) ? Number(object.ultimateCooldown) : 0,
      hasBuyback: isSet(object.hasBuyback) ? Boolean(object.hasBuyback) : false,
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => CMsgDOTARealtimeGameStats_ItemDetails.fromJSON(e))
        : [],
      stashitems: Array.isArray(object?.stashitems)
        ? object.stashitems.map((e: any) => CMsgDOTARealtimeGameStats_ItemDetails.fromJSON(e))
        : [],
      itemshoppinglist: Array.isArray(object?.itemshoppinglist)
        ? object.itemshoppinglist.map((e: any) => CMsgDOTARealtimeGameStats_ItemDetails.fromJSON(e))
        : [],
      levelpoints: Array.isArray(object?.levelpoints)
        ? object.levelpoints.map((e: any) => CMsgDOTARealtimeGameStats_AbilityList.fromJSON(e))
        : [],
      heroToHeroStats: Array.isArray(object?.heroToHeroStats)
        ? object.heroToHeroStats.map((e: any) => CMsgDOTARealtimeGameStats_HeroToHeroStats.fromJSON(e))
        : [],
      hasUltimate: isSet(object.hasUltimate) ? Boolean(object.hasUltimate) : false,
      hasUltimateMana: isSet(object.hasUltimateMana) ? Boolean(object.hasUltimateMana) : false,
    };
  },

  toJSON(message: CMsgDOTARealtimeGameStats_PlayerDetails): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.playerid !== undefined && (obj.playerid = Math.round(message.playerid));
    message.name !== undefined && (obj.name = message.name);
    message.team !== undefined && (obj.team = Math.round(message.team));
    message.heroid !== undefined && (obj.heroid = Math.round(message.heroid));
    message.healthpoints !== undefined && (obj.healthpoints = Math.round(message.healthpoints));
    message.maxhealthpoints !== undefined && (obj.maxhealthpoints = Math.round(message.maxhealthpoints));
    message.healthregenrate !== undefined && (obj.healthregenrate = message.healthregenrate);
    message.manapoints !== undefined && (obj.manapoints = Math.round(message.manapoints));
    message.maxmanapoints !== undefined && (obj.maxmanapoints = Math.round(message.maxmanapoints));
    message.manaregenrate !== undefined && (obj.manaregenrate = message.manaregenrate);
    message.baseStrength !== undefined && (obj.baseStrength = Math.round(message.baseStrength));
    message.baseAgility !== undefined && (obj.baseAgility = Math.round(message.baseAgility));
    message.baseIntelligence !== undefined && (obj.baseIntelligence = Math.round(message.baseIntelligence));
    message.baseArmor !== undefined && (obj.baseArmor = Math.round(message.baseArmor));
    message.baseMovespeed !== undefined && (obj.baseMovespeed = Math.round(message.baseMovespeed));
    message.baseDamage !== undefined && (obj.baseDamage = Math.round(message.baseDamage));
    message.strength !== undefined && (obj.strength = Math.round(message.strength));
    message.agility !== undefined && (obj.agility = Math.round(message.agility));
    message.intelligence !== undefined && (obj.intelligence = Math.round(message.intelligence));
    message.armor !== undefined && (obj.armor = Math.round(message.armor));
    message.movespeed !== undefined && (obj.movespeed = Math.round(message.movespeed));
    message.damage !== undefined && (obj.damage = Math.round(message.damage));
    message.heroDamage !== undefined && (obj.heroDamage = Math.round(message.heroDamage));
    message.towerDamage !== undefined && (obj.towerDamage = Math.round(message.towerDamage));
    if (message.abilities) {
      obj.abilities = message.abilities.map((e) => e ? CMsgDOTARealtimeGameStats_AbilityDetails.toJSON(e) : undefined);
    } else {
      obj.abilities = [];
    }
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.killCount !== undefined && (obj.killCount = Math.round(message.killCount));
    message.deathCount !== undefined && (obj.deathCount = Math.round(message.deathCount));
    message.assistsCount !== undefined && (obj.assistsCount = Math.round(message.assistsCount));
    message.deniesCount !== undefined && (obj.deniesCount = Math.round(message.deniesCount));
    message.lhCount !== undefined && (obj.lhCount = Math.round(message.lhCount));
    message.heroHealing !== undefined && (obj.heroHealing = Math.round(message.heroHealing));
    message.goldPerMin !== undefined && (obj.goldPerMin = Math.round(message.goldPerMin));
    message.xpPerMin !== undefined && (obj.xpPerMin = Math.round(message.xpPerMin));
    message.netGold !== undefined && (obj.netGold = Math.round(message.netGold));
    message.gold !== undefined && (obj.gold = Math.round(message.gold));
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.respawnTime !== undefined && (obj.respawnTime = Math.round(message.respawnTime));
    message.ultimateCooldown !== undefined && (obj.ultimateCooldown = Math.round(message.ultimateCooldown));
    message.hasBuyback !== undefined && (obj.hasBuyback = message.hasBuyback);
    if (message.items) {
      obj.items = message.items.map((e) => e ? CMsgDOTARealtimeGameStats_ItemDetails.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    if (message.stashitems) {
      obj.stashitems = message.stashitems.map((e) => e ? CMsgDOTARealtimeGameStats_ItemDetails.toJSON(e) : undefined);
    } else {
      obj.stashitems = [];
    }
    if (message.itemshoppinglist) {
      obj.itemshoppinglist = message.itemshoppinglist.map((e) =>
        e ? CMsgDOTARealtimeGameStats_ItemDetails.toJSON(e) : undefined
      );
    } else {
      obj.itemshoppinglist = [];
    }
    if (message.levelpoints) {
      obj.levelpoints = message.levelpoints.map((e) => e ? CMsgDOTARealtimeGameStats_AbilityList.toJSON(e) : undefined);
    } else {
      obj.levelpoints = [];
    }
    if (message.heroToHeroStats) {
      obj.heroToHeroStats = message.heroToHeroStats.map((e) =>
        e ? CMsgDOTARealtimeGameStats_HeroToHeroStats.toJSON(e) : undefined
      );
    } else {
      obj.heroToHeroStats = [];
    }
    message.hasUltimate !== undefined && (obj.hasUltimate = message.hasUltimate);
    message.hasUltimateMana !== undefined && (obj.hasUltimateMana = message.hasUltimateMana);
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStats_BuildingDetails {
    return {
      team: isSet(object.team) ? Number(object.team) : 0,
      heading: isSet(object.heading) ? Number(object.heading) : 0,
      lane: isSet(object.lane) ? Number(object.lane) : 0,
      tier: isSet(object.tier) ? Number(object.tier) : 0,
      type: isSet(object.type) ? Number(object.type) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      destroyed: isSet(object.destroyed) ? Boolean(object.destroyed) : false,
    };
  },

  toJSON(message: CMsgDOTARealtimeGameStats_BuildingDetails): unknown {
    const obj: any = {};
    message.team !== undefined && (obj.team = Math.round(message.team));
    message.heading !== undefined && (obj.heading = message.heading);
    message.lane !== undefined && (obj.lane = Math.round(message.lane));
    message.tier !== undefined && (obj.tier = Math.round(message.tier));
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.destroyed !== undefined && (obj.destroyed = message.destroyed);
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStats_KillDetails {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      deathTime: isSet(object.deathTime) ? Number(object.deathTime) : 0,
      killerPlayerId: isSet(object.killerPlayerId) ? Number(object.killerPlayerId) : 0,
    };
  },

  toJSON(message: CMsgDOTARealtimeGameStats_KillDetails): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.deathTime !== undefined && (obj.deathTime = Math.round(message.deathTime));
    message.killerPlayerId !== undefined && (obj.killerPlayerId = Math.round(message.killerPlayerId));
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStats_BroadcasterDetails {
    return { playerId: isSet(object.playerId) ? Number(object.playerId) : 0 };
  },

  toJSON(message: CMsgDOTARealtimeGameStats_BroadcasterDetails): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStats_PickBanDetails {
    return { hero: isSet(object.hero) ? Number(object.hero) : 0, team: isSet(object.team) ? Number(object.team) : 0 };
  },

  toJSON(message: CMsgDOTARealtimeGameStats_PickBanDetails): unknown {
    const obj: any = {};
    message.hero !== undefined && (obj.hero = Math.round(message.hero));
    message.team !== undefined && (obj.team = Math.round(message.team));
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStats_MatchDetails {
    return {
      serverSteamId: isSet(object.serverSteamId) ? String(object.serverSteamId) : "0",
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      timeOfDay: isSet(object.timeOfDay) ? Number(object.timeOfDay) : 0,
      isNightstalkerNight: isSet(object.isNightstalkerNight) ? Boolean(object.isNightstalkerNight) : false,
      gameTime: isSet(object.gameTime) ? Number(object.gameTime) : 0,
      gameState: isSet(object.gameState) ? Number(object.gameState) : 0,
      teamidRadiant: isSet(object.teamidRadiant) ? Number(object.teamidRadiant) : 0,
      teamidDire: isSet(object.teamidDire) ? Number(object.teamidDire) : 0,
      picks: Array.isArray(object?.picks)
        ? object.picks.map((e: any) => CMsgDOTARealtimeGameStats_PickBanDetails.fromJSON(e))
        : [],
      bans: Array.isArray(object?.bans)
        ? object.bans.map((e: any) => CMsgDOTARealtimeGameStats_PickBanDetails.fromJSON(e))
        : [],
      kills: Array.isArray(object?.kills)
        ? object.kills.map((e: any) => CMsgDOTARealtimeGameStats_KillDetails.fromJSON(e))
        : [],
      broadcasters: Array.isArray(object?.broadcasters)
        ? object.broadcasters.map((e: any) => CMsgDOTARealtimeGameStats_BroadcasterDetails.fromJSON(e))
        : [],
      gameMode: isSet(object.gameMode) ? Number(object.gameMode) : 0,
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      leagueNodeId: isSet(object.leagueNodeId) ? Number(object.leagueNodeId) : 0,
      singleTeam: isSet(object.singleTeam) ? Boolean(object.singleTeam) : false,
      cheersPeak: isSet(object.cheersPeak) ? Number(object.cheersPeak) : 0,
      lobbyType: isSet(object.lobbyType) ? Number(object.lobbyType) : 0,
      startTimestamp: isSet(object.startTimestamp) ? Number(object.startTimestamp) : 0,
    };
  },

  toJSON(message: CMsgDOTARealtimeGameStats_MatchDetails): unknown {
    const obj: any = {};
    message.serverSteamId !== undefined && (obj.serverSteamId = message.serverSteamId);
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.timeOfDay !== undefined && (obj.timeOfDay = message.timeOfDay);
    message.isNightstalkerNight !== undefined && (obj.isNightstalkerNight = message.isNightstalkerNight);
    message.gameTime !== undefined && (obj.gameTime = Math.round(message.gameTime));
    message.gameState !== undefined && (obj.gameState = Math.round(message.gameState));
    message.teamidRadiant !== undefined && (obj.teamidRadiant = Math.round(message.teamidRadiant));
    message.teamidDire !== undefined && (obj.teamidDire = Math.round(message.teamidDire));
    if (message.picks) {
      obj.picks = message.picks.map((e) => e ? CMsgDOTARealtimeGameStats_PickBanDetails.toJSON(e) : undefined);
    } else {
      obj.picks = [];
    }
    if (message.bans) {
      obj.bans = message.bans.map((e) => e ? CMsgDOTARealtimeGameStats_PickBanDetails.toJSON(e) : undefined);
    } else {
      obj.bans = [];
    }
    if (message.kills) {
      obj.kills = message.kills.map((e) => e ? CMsgDOTARealtimeGameStats_KillDetails.toJSON(e) : undefined);
    } else {
      obj.kills = [];
    }
    if (message.broadcasters) {
      obj.broadcasters = message.broadcasters.map((e) =>
        e ? CMsgDOTARealtimeGameStats_BroadcasterDetails.toJSON(e) : undefined
      );
    } else {
      obj.broadcasters = [];
    }
    message.gameMode !== undefined && (obj.gameMode = Math.round(message.gameMode));
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.leagueNodeId !== undefined && (obj.leagueNodeId = Math.round(message.leagueNodeId));
    message.singleTeam !== undefined && (obj.singleTeam = message.singleTeam);
    message.cheersPeak !== undefined && (obj.cheersPeak = Math.round(message.cheersPeak));
    message.lobbyType !== undefined && (obj.lobbyType = Math.round(message.lobbyType));
    message.startTimestamp !== undefined && (obj.startTimestamp = Math.round(message.startTimestamp));
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStats_GraphData {
    return {
      graphGold: Array.isArray(object?.graphGold) ? object.graphGold.map((e: any) => Number(e)) : [],
      graphXp: Array.isArray(object?.graphXp) ? object.graphXp.map((e: any) => Number(e)) : [],
      graphKill: Array.isArray(object?.graphKill) ? object.graphKill.map((e: any) => Number(e)) : [],
      graphTower: Array.isArray(object?.graphTower) ? object.graphTower.map((e: any) => Number(e)) : [],
      graphRax: Array.isArray(object?.graphRax) ? object.graphRax.map((e: any) => Number(e)) : [],
      teamLocStats: Array.isArray(object?.teamLocStats)
        ? object.teamLocStats.map((e: any) => CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTARealtimeGameStats_GraphData): unknown {
    const obj: any = {};
    if (message.graphGold) {
      obj.graphGold = message.graphGold.map((e) => Math.round(e));
    } else {
      obj.graphGold = [];
    }
    if (message.graphXp) {
      obj.graphXp = message.graphXp.map((e) => Math.round(e));
    } else {
      obj.graphXp = [];
    }
    if (message.graphKill) {
      obj.graphKill = message.graphKill.map((e) => Math.round(e));
    } else {
      obj.graphKill = [];
    }
    if (message.graphTower) {
      obj.graphTower = message.graphTower.map((e) => Math.round(e));
    } else {
      obj.graphTower = [];
    }
    if (message.graphRax) {
      obj.graphRax = message.graphRax.map((e) => Math.round(e));
    } else {
      obj.graphRax = [];
    }
    if (message.teamLocStats) {
      obj.teamLocStats = message.teamLocStats.map((e) =>
        e ? CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats.toJSON(e) : undefined
      );
    } else {
      obj.teamLocStats = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStats_GraphData_LocationStats {
    return { stats: Array.isArray(object?.stats) ? object.stats.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CMsgDOTARealtimeGameStats_GraphData_LocationStats): unknown {
    const obj: any = {};
    if (message.stats) {
      obj.stats = message.stats.map((e) => Math.round(e));
    } else {
      obj.stats = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats {
    return {
      locStats: Array.isArray(object?.locStats)
        ? object.locStats.map((e: any) => CMsgDOTARealtimeGameStats_GraphData_LocationStats.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats): unknown {
    const obj: any = {};
    if (message.locStats) {
      obj.locStats = message.locStats.map((e) =>
        e ? CMsgDOTARealtimeGameStats_GraphData_LocationStats.toJSON(e) : undefined
      );
    } else {
      obj.locStats = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStatsTerse {
    return {
      match: isSet(object.match) ? CMsgDOTARealtimeGameStatsTerse_MatchDetails.fromJSON(object.match) : undefined,
      teams: Array.isArray(object?.teams)
        ? object.teams.map((e: any) => CMsgDOTARealtimeGameStatsTerse_TeamDetails.fromJSON(e))
        : [],
      buildings: Array.isArray(object?.buildings)
        ? object.buildings.map((e: any) => CMsgDOTARealtimeGameStatsTerse_BuildingDetails.fromJSON(e))
        : [],
      graphData: isSet(object.graphData)
        ? CMsgDOTARealtimeGameStatsTerse_GraphData.fromJSON(object.graphData)
        : undefined,
      deltaFrame: isSet(object.deltaFrame) ? Boolean(object.deltaFrame) : false,
    };
  },

  toJSON(message: CMsgDOTARealtimeGameStatsTerse): unknown {
    const obj: any = {};
    message.match !== undefined &&
      (obj.match = message.match ? CMsgDOTARealtimeGameStatsTerse_MatchDetails.toJSON(message.match) : undefined);
    if (message.teams) {
      obj.teams = message.teams.map((e) => e ? CMsgDOTARealtimeGameStatsTerse_TeamDetails.toJSON(e) : undefined);
    } else {
      obj.teams = [];
    }
    if (message.buildings) {
      obj.buildings = message.buildings.map((e) =>
        e ? CMsgDOTARealtimeGameStatsTerse_BuildingDetails.toJSON(e) : undefined
      );
    } else {
      obj.buildings = [];
    }
    message.graphData !== undefined && (obj.graphData = message.graphData
      ? CMsgDOTARealtimeGameStatsTerse_GraphData.toJSON(message.graphData)
      : undefined);
    message.deltaFrame !== undefined && (obj.deltaFrame = message.deltaFrame);
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStatsTerse_TeamDetails {
    return {
      teamNumber: isSet(object.teamNumber) ? Number(object.teamNumber) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      teamName: isSet(object.teamName) ? String(object.teamName) : "",
      teamTag: isSet(object.teamTag) ? String(object.teamTag) : "",
      teamLogo: isSet(object.teamLogo) ? String(object.teamLogo) : "0",
      score: isSet(object.score) ? Number(object.score) : 0,
      netWorth: isSet(object.netWorth) ? Number(object.netWorth) : 0,
      teamLogoUrl: isSet(object.teamLogoUrl) ? String(object.teamLogoUrl) : "",
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgDOTARealtimeGameStatsTerse_PlayerDetails.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTARealtimeGameStatsTerse_TeamDetails): unknown {
    const obj: any = {};
    message.teamNumber !== undefined && (obj.teamNumber = Math.round(message.teamNumber));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.teamName !== undefined && (obj.teamName = message.teamName);
    message.teamTag !== undefined && (obj.teamTag = message.teamTag);
    message.teamLogo !== undefined && (obj.teamLogo = message.teamLogo);
    message.score !== undefined && (obj.score = Math.round(message.score));
    message.netWorth !== undefined && (obj.netWorth = Math.round(message.netWorth));
    message.teamLogoUrl !== undefined && (obj.teamLogoUrl = message.teamLogoUrl);
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgDOTARealtimeGameStatsTerse_PlayerDetails.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStatsTerse_PlayerDetails {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      playerid: isSet(object.playerid) ? Number(object.playerid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      team: isSet(object.team) ? Number(object.team) : 0,
      heroid: isSet(object.heroid) ? Number(object.heroid) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      killCount: isSet(object.killCount) ? Number(object.killCount) : 0,
      deathCount: isSet(object.deathCount) ? Number(object.deathCount) : 0,
      assistsCount: isSet(object.assistsCount) ? Number(object.assistsCount) : 0,
      deniesCount: isSet(object.deniesCount) ? Number(object.deniesCount) : 0,
      lhCount: isSet(object.lhCount) ? Number(object.lhCount) : 0,
      gold: isSet(object.gold) ? Number(object.gold) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      netWorth: isSet(object.netWorth) ? Number(object.netWorth) : 0,
      abilities: Array.isArray(object?.abilities)
        ? object.abilities.map((e: any) => Number(e))
        : [],
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgDOTARealtimeGameStatsTerse_PlayerDetails): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.playerid !== undefined && (obj.playerid = Math.round(message.playerid));
    message.name !== undefined && (obj.name = message.name);
    message.team !== undefined && (obj.team = Math.round(message.team));
    message.heroid !== undefined && (obj.heroid = Math.round(message.heroid));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.killCount !== undefined && (obj.killCount = Math.round(message.killCount));
    message.deathCount !== undefined && (obj.deathCount = Math.round(message.deathCount));
    message.assistsCount !== undefined && (obj.assistsCount = Math.round(message.assistsCount));
    message.deniesCount !== undefined && (obj.deniesCount = Math.round(message.deniesCount));
    message.lhCount !== undefined && (obj.lhCount = Math.round(message.lhCount));
    message.gold !== undefined && (obj.gold = Math.round(message.gold));
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.netWorth !== undefined && (obj.netWorth = Math.round(message.netWorth));
    if (message.abilities) {
      obj.abilities = message.abilities.map((e) => Math.round(e));
    } else {
      obj.abilities = [];
    }
    if (message.items) {
      obj.items = message.items.map((e) => Math.round(e));
    } else {
      obj.items = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStatsTerse_BuildingDetails {
    return {
      team: isSet(object.team) ? Number(object.team) : 0,
      heading: isSet(object.heading) ? Number(object.heading) : 0,
      type: isSet(object.type) ? Number(object.type) : 0,
      lane: isSet(object.lane) ? Number(object.lane) : 0,
      tier: isSet(object.tier) ? Number(object.tier) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      destroyed: isSet(object.destroyed) ? Boolean(object.destroyed) : false,
    };
  },

  toJSON(message: CMsgDOTARealtimeGameStatsTerse_BuildingDetails): unknown {
    const obj: any = {};
    message.team !== undefined && (obj.team = Math.round(message.team));
    message.heading !== undefined && (obj.heading = message.heading);
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.lane !== undefined && (obj.lane = Math.round(message.lane));
    message.tier !== undefined && (obj.tier = Math.round(message.tier));
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.destroyed !== undefined && (obj.destroyed = message.destroyed);
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStatsTerse_PickBanDetails {
    return { hero: isSet(object.hero) ? Number(object.hero) : 0, team: isSet(object.team) ? Number(object.team) : 0 };
  },

  toJSON(message: CMsgDOTARealtimeGameStatsTerse_PickBanDetails): unknown {
    const obj: any = {};
    message.hero !== undefined && (obj.hero = Math.round(message.hero));
    message.team !== undefined && (obj.team = Math.round(message.team));
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStatsTerse_MatchDetails {
    return {
      serverSteamId: isSet(object.serverSteamId) ? String(object.serverSteamId) : "0",
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      gameTime: isSet(object.gameTime) ? Number(object.gameTime) : 0,
      steamBroadcasterAccountIds: Array.isArray(object?.steamBroadcasterAccountIds)
        ? object.steamBroadcasterAccountIds.map((e: any) => Number(e))
        : [],
      gameMode: isSet(object.gameMode) ? Number(object.gameMode) : 0,
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      leagueNodeId: isSet(object.leagueNodeId) ? Number(object.leagueNodeId) : 0,
      gameState: isSet(object.gameState) ? Number(object.gameState) : 0,
      picks: Array.isArray(object?.picks)
        ? object.picks.map((e: any) => CMsgDOTARealtimeGameStatsTerse_PickBanDetails.fromJSON(e))
        : [],
      bans: Array.isArray(object?.bans)
        ? object.bans.map((e: any) => CMsgDOTARealtimeGameStatsTerse_PickBanDetails.fromJSON(e))
        : [],
      lobbyType: isSet(object.lobbyType) ? Number(object.lobbyType) : 0,
      startTimestamp: isSet(object.startTimestamp) ? Number(object.startTimestamp) : 0,
    };
  },

  toJSON(message: CMsgDOTARealtimeGameStatsTerse_MatchDetails): unknown {
    const obj: any = {};
    message.serverSteamId !== undefined && (obj.serverSteamId = message.serverSteamId);
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.gameTime !== undefined && (obj.gameTime = Math.round(message.gameTime));
    if (message.steamBroadcasterAccountIds) {
      obj.steamBroadcasterAccountIds = message.steamBroadcasterAccountIds.map((e) => Math.round(e));
    } else {
      obj.steamBroadcasterAccountIds = [];
    }
    message.gameMode !== undefined && (obj.gameMode = Math.round(message.gameMode));
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.leagueNodeId !== undefined && (obj.leagueNodeId = Math.round(message.leagueNodeId));
    message.gameState !== undefined && (obj.gameState = Math.round(message.gameState));
    if (message.picks) {
      obj.picks = message.picks.map((e) => e ? CMsgDOTARealtimeGameStatsTerse_PickBanDetails.toJSON(e) : undefined);
    } else {
      obj.picks = [];
    }
    if (message.bans) {
      obj.bans = message.bans.map((e) => e ? CMsgDOTARealtimeGameStatsTerse_PickBanDetails.toJSON(e) : undefined);
    } else {
      obj.bans = [];
    }
    message.lobbyType !== undefined && (obj.lobbyType = Math.round(message.lobbyType));
    message.startTimestamp !== undefined && (obj.startTimestamp = Math.round(message.startTimestamp));
    return obj;
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

  fromJSON(object: any): CMsgDOTARealtimeGameStatsTerse_GraphData {
    return { graphGold: Array.isArray(object?.graphGold) ? object.graphGold.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CMsgDOTARealtimeGameStatsTerse_GraphData): unknown {
    const obj: any = {};
    if (message.graphGold) {
      obj.graphGold = message.graphGold.map((e) => Math.round(e));
    } else {
      obj.graphGold = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgDOTABroadcastTimelineEvent {
    return {
      event: isSet(object.event) ? eBroadcastTimelineEventFromJSON(object.event) : 1,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      data: isSet(object.data) ? Number(object.data) : 0,
      stringData: isSet(object.stringData) ? String(object.stringData) : "",
    };
  },

  toJSON(message: CMsgDOTABroadcastTimelineEvent): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = eBroadcastTimelineEventToJSON(message.event));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.data !== undefined && (obj.data = Math.round(message.data));
    message.stringData !== undefined && (obj.stringData = message.stringData);
    return obj;
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

  fromJSON(object: any): CMsgGCToClientMatchGroupsVersion {
    return { matchgroupsVersion: isSet(object.matchgroupsVersion) ? Number(object.matchgroupsVersion) : 0 };
  },

  toJSON(message: CMsgGCToClientMatchGroupsVersion): unknown {
    const obj: any = {};
    message.matchgroupsVersion !== undefined && (obj.matchgroupsVersion = Math.round(message.matchgroupsVersion));
    return obj;
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

  fromJSON(object: any): CMsgDOTASDOHeroStatsHistory {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      gameMode: isSet(object.gameMode) ? Number(object.gameMode) : 0,
      lobbyType: isSet(object.lobbyType) ? Number(object.lobbyType) : 0,
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      won: isSet(object.won) ? Boolean(object.won) : false,
      gpm: isSet(object.gpm) ? Number(object.gpm) : 0,
      xpm: isSet(object.xpm) ? Number(object.xpm) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      assists: isSet(object.assists) ? Number(object.assists) : 0,
    };
  },

  toJSON(message: CMsgDOTASDOHeroStatsHistory): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.gameMode !== undefined && (obj.gameMode = Math.round(message.gameMode));
    message.lobbyType !== undefined && (obj.lobbyType = Math.round(message.lobbyType));
    message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
    message.won !== undefined && (obj.won = message.won);
    message.gpm !== undefined && (obj.gpm = Math.round(message.gpm));
    message.xpm !== undefined && (obj.xpm = Math.round(message.xpm));
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.assists !== undefined && (obj.assists = Math.round(message.assists));
    return obj;
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

  fromJSON(object: any): CMsgPredictionChoice {
    return {
      value: isSet(object.value) ? Number(object.value) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      minRawValue: isSet(object.minRawValue) ? Number(object.minRawValue) : 0,
      maxRawValue: isSet(object.maxRawValue) ? Number(object.maxRawValue) : 0,
    };
  },

  toJSON(message: CMsgPredictionChoice): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    message.name !== undefined && (obj.name = message.name);
    message.minRawValue !== undefined && (obj.minRawValue = Math.round(message.minRawValue));
    message.maxRawValue !== undefined && (obj.maxRawValue = Math.round(message.maxRawValue));
    return obj;
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

  fromJSON(object: any): CMsgInGamePrediction {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? cMsgInGamePrediction_EPredictionTypeFromJSON(object.type) : 0,
      group: isSet(object.group) ? cMsgInGamePrediction_ERandomSelectionGroupTFromJSON(object.group) : 0,
      question: isSet(object.question) ? String(object.question) : "",
      choices: Array.isArray(object?.choices) ? object.choices.map((e: any) => CMsgPredictionChoice.fromJSON(e)) : [],
      requiredHeroes: Array.isArray(object?.requiredHeroes) ? object.requiredHeroes.map((e: any) => String(e)) : [],
      queryName: isSet(object.queryName) ? String(object.queryName) : "",
      queryValues: Array.isArray(object?.queryValues)
        ? object.queryValues.map((e: any) => CMsgInGamePrediction_QueryKeyValues.fromJSON(e))
        : [],
      answerResolutionType: isSet(object.answerResolutionType)
        ? cMsgInGamePrediction_EResolutionTypeTFromJSON(object.answerResolutionType)
        : 0,
      pointsToGrant: isSet(object.pointsToGrant) ? Number(object.pointsToGrant) : 0,
      rewardAction: isSet(object.rewardAction) ? Number(object.rewardAction) : 0,
      debugForceSelection: isSet(object.debugForceSelection) ? Number(object.debugForceSelection) : 0,
      rawValueType: isSet(object.rawValueType) ? cMsgInGamePrediction_ERawValueTypeTFromJSON(object.rawValueType) : 0,
    };
  },

  toJSON(message: CMsgInGamePrediction): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = cMsgInGamePrediction_EPredictionTypeToJSON(message.type));
    message.group !== undefined && (obj.group = cMsgInGamePrediction_ERandomSelectionGroupTToJSON(message.group));
    message.question !== undefined && (obj.question = message.question);
    if (message.choices) {
      obj.choices = message.choices.map((e) => e ? CMsgPredictionChoice.toJSON(e) : undefined);
    } else {
      obj.choices = [];
    }
    if (message.requiredHeroes) {
      obj.requiredHeroes = message.requiredHeroes.map((e) => e);
    } else {
      obj.requiredHeroes = [];
    }
    message.queryName !== undefined && (obj.queryName = message.queryName);
    if (message.queryValues) {
      obj.queryValues = message.queryValues.map((e) => e ? CMsgInGamePrediction_QueryKeyValues.toJSON(e) : undefined);
    } else {
      obj.queryValues = [];
    }
    message.answerResolutionType !== undefined &&
      (obj.answerResolutionType = cMsgInGamePrediction_EResolutionTypeTToJSON(message.answerResolutionType));
    message.pointsToGrant !== undefined && (obj.pointsToGrant = Math.round(message.pointsToGrant));
    message.rewardAction !== undefined && (obj.rewardAction = Math.round(message.rewardAction));
    message.debugForceSelection !== undefined && (obj.debugForceSelection = Math.round(message.debugForceSelection));
    message.rawValueType !== undefined &&
      (obj.rawValueType = cMsgInGamePrediction_ERawValueTypeTToJSON(message.rawValueType));
    return obj;
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

  fromJSON(object: any): CMsgInGamePrediction_QueryKeyValues {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CMsgInGamePrediction_QueryKeyValues): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
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

  fromJSON(object: any): CMsgDOTASeasonPredictions {
    return {
      predictions: Array.isArray(object?.predictions)
        ? object.predictions.map((e: any) => CMsgDOTASeasonPredictions_Prediction.fromJSON(e))
        : [],
      inGamePredictions: Array.isArray(object?.inGamePredictions)
        ? object.inGamePredictions.map((e: any) => CMsgInGamePrediction.fromJSON(e))
        : [],
      inGamePredictionCountPerGame: isSet(object.inGamePredictionCountPerGame)
        ? Number(object.inGamePredictionCountPerGame)
        : 0,
      inGamePredictionVotingPeriodMinutes: isSet(object.inGamePredictionVotingPeriodMinutes)
        ? Number(object.inGamePredictionVotingPeriodMinutes)
        : 0,
    };
  },

  toJSON(message: CMsgDOTASeasonPredictions): unknown {
    const obj: any = {};
    if (message.predictions) {
      obj.predictions = message.predictions.map((e) => e ? CMsgDOTASeasonPredictions_Prediction.toJSON(e) : undefined);
    } else {
      obj.predictions = [];
    }
    if (message.inGamePredictions) {
      obj.inGamePredictions = message.inGamePredictions.map((e) => e ? CMsgInGamePrediction.toJSON(e) : undefined);
    } else {
      obj.inGamePredictions = [];
    }
    message.inGamePredictionCountPerGame !== undefined &&
      (obj.inGamePredictionCountPerGame = Math.round(message.inGamePredictionCountPerGame));
    message.inGamePredictionVotingPeriodMinutes !== undefined &&
      (obj.inGamePredictionVotingPeriodMinutes = Math.round(message.inGamePredictionVotingPeriodMinutes));
    return obj;
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

  fromJSON(object: any): CMsgDOTASeasonPredictions_Prediction {
    return {
      type: isSet(object.type) ? cMsgDOTASeasonPredictions_Prediction_EPredictionTypeFromJSON(object.type) : 0,
      question: isSet(object.question) ? String(object.question) : "",
      choices: Array.isArray(object?.choices) ? object.choices.map((e: any) => CMsgPredictionChoice.fromJSON(e)) : [],
      selectionId: isSet(object.selectionId) ? Number(object.selectionId) : 0,
      startDate: isSet(object.startDate) ? Number(object.startDate) : 0,
      lockDate: isSet(object.lockDate) ? Number(object.lockDate) : 0,
      reward: isSet(object.reward) ? Number(object.reward) : 0,
      answerType: isSet(object.answerType)
        ? cMsgDOTASeasonPredictions_Prediction_EAnswerTypeFromJSON(object.answerType)
        : 0,
      answerId: isSet(object.answerId) ? Number(object.answerId) : 0,
      answers: Array.isArray(object?.answers)
        ? object.answers.map((e: any) => CMsgDOTASeasonPredictions_Prediction_Answers.fromJSON(e))
        : [],
      queryName: isSet(object.queryName) ? String(object.queryName) : "",
      lockOnSelectionId: isSet(object.lockOnSelectionId) ? Number(object.lockOnSelectionId) : 0,
      lockOnSelectionValue: isSet(object.lockOnSelectionValue) ? Number(object.lockOnSelectionValue) : 0,
      lockOnSelectionSet: isSet(object.lockOnSelectionSet) ? Boolean(object.lockOnSelectionSet) : false,
      useAnswerValueRanges: isSet(object.useAnswerValueRanges) ? Boolean(object.useAnswerValueRanges) : false,
      region: isSet(object.region) ? eLeagueRegionFromJSON(object.region) : 0,
      phases: Array.isArray(object?.phases)
        ? object.phases.map((e: any) => eLeaguePhaseFromJSON(e))
        : [],
      rewardEvent: isSet(object.rewardEvent) ? eEventFromJSON(object.rewardEvent) : 0,
    };
  },

  toJSON(message: CMsgDOTASeasonPredictions_Prediction): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = cMsgDOTASeasonPredictions_Prediction_EPredictionTypeToJSON(message.type));
    message.question !== undefined && (obj.question = message.question);
    if (message.choices) {
      obj.choices = message.choices.map((e) => e ? CMsgPredictionChoice.toJSON(e) : undefined);
    } else {
      obj.choices = [];
    }
    message.selectionId !== undefined && (obj.selectionId = Math.round(message.selectionId));
    message.startDate !== undefined && (obj.startDate = Math.round(message.startDate));
    message.lockDate !== undefined && (obj.lockDate = Math.round(message.lockDate));
    message.reward !== undefined && (obj.reward = Math.round(message.reward));
    message.answerType !== undefined &&
      (obj.answerType = cMsgDOTASeasonPredictions_Prediction_EAnswerTypeToJSON(message.answerType));
    message.answerId !== undefined && (obj.answerId = Math.round(message.answerId));
    if (message.answers) {
      obj.answers = message.answers.map((e) => e ? CMsgDOTASeasonPredictions_Prediction_Answers.toJSON(e) : undefined);
    } else {
      obj.answers = [];
    }
    message.queryName !== undefined && (obj.queryName = message.queryName);
    message.lockOnSelectionId !== undefined && (obj.lockOnSelectionId = Math.round(message.lockOnSelectionId));
    message.lockOnSelectionValue !== undefined && (obj.lockOnSelectionValue = Math.round(message.lockOnSelectionValue));
    message.lockOnSelectionSet !== undefined && (obj.lockOnSelectionSet = message.lockOnSelectionSet);
    message.useAnswerValueRanges !== undefined && (obj.useAnswerValueRanges = message.useAnswerValueRanges);
    message.region !== undefined && (obj.region = eLeagueRegionToJSON(message.region));
    if (message.phases) {
      obj.phases = message.phases.map((e) => eLeaguePhaseToJSON(e));
    } else {
      obj.phases = [];
    }
    message.rewardEvent !== undefined && (obj.rewardEvent = eEventToJSON(message.rewardEvent));
    return obj;
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

  fromJSON(object: any): CMsgDOTASeasonPredictions_Prediction_Answers {
    return { answerId: isSet(object.answerId) ? Number(object.answerId) : 0 };
  },

  toJSON(message: CMsgDOTASeasonPredictions_Prediction_Answers): unknown {
    const obj: any = {};
    message.answerId !== undefined && (obj.answerId = Math.round(message.answerId));
    return obj;
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

  fromJSON(object: any): CMsgAvailablePredictions {
    return {
      matchPredictions: Array.isArray(object?.matchPredictions)
        ? object.matchPredictions.map((e: any) => CMsgAvailablePredictions_MatchPrediction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgAvailablePredictions): unknown {
    const obj: any = {};
    if (message.matchPredictions) {
      obj.matchPredictions = message.matchPredictions.map((e) =>
        e ? CMsgAvailablePredictions_MatchPrediction.toJSON(e) : undefined
      );
    } else {
      obj.matchPredictions = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgAvailablePredictions_MatchPrediction {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      predictions: Array.isArray(object?.predictions)
        ? object.predictions.map((e: any) => CMsgInGamePrediction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgAvailablePredictions_MatchPrediction): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    if (message.predictions) {
      obj.predictions = message.predictions.map((e) => e ? CMsgInGamePrediction.toJSON(e) : undefined);
    } else {
      obj.predictions = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgLeagueWatchedGames {
    return {
      leagues: Array.isArray(object?.leagues)
        ? object.leagues.map((e: any) => CMsgLeagueWatchedGames_League.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgLeagueWatchedGames): unknown {
    const obj: any = {};
    if (message.leagues) {
      obj.leagues = message.leagues.map((e) => e ? CMsgLeagueWatchedGames_League.toJSON(e) : undefined);
    } else {
      obj.leagues = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgLeagueWatchedGames_Series {
    return {
      nodeId: isSet(object.nodeId) ? Number(object.nodeId) : 0,
      game: Array.isArray(object?.game) ? object.game.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgLeagueWatchedGames_Series): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = Math.round(message.nodeId));
    if (message.game) {
      obj.game = message.game.map((e) => Math.round(e));
    } else {
      obj.game = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgLeagueWatchedGames_League {
    return {
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      series: Array.isArray(object?.series)
        ? object.series.map((e: any) => CMsgLeagueWatchedGames_Series.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgLeagueWatchedGames_League): unknown {
    const obj: any = {};
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    if (message.series) {
      obj.series = message.series.map((e) => e ? CMsgLeagueWatchedGames_Series.toJSON(e) : undefined);
    } else {
      obj.series = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgDOTAMatch {
    return {
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      starttime: isSet(object.starttime) ? Number(object.starttime) : 0,
      players: Array.isArray(object?.players) ? object.players.map((e: any) => CMsgDOTAMatch_Player.fromJSON(e)) : [],
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      towerStatus: Array.isArray(object?.towerStatus) ? object.towerStatus.map((e: any) => Number(e)) : [],
      barracksStatus: Array.isArray(object?.barracksStatus) ? object.barracksStatus.map((e: any) => Number(e)) : [],
      cluster: isSet(object.cluster) ? Number(object.cluster) : 0,
      firstBloodTime: isSet(object.firstBloodTime) ? Number(object.firstBloodTime) : 0,
      replaySalt: isSet(object.replaySalt) ? Number(object.replaySalt) : 0,
      serverIp: isSet(object.serverIp) ? Number(object.serverIp) : 0,
      serverPort: isSet(object.serverPort) ? Number(object.serverPort) : 0,
      lobbyType: isSet(object.lobbyType) ? Number(object.lobbyType) : 0,
      humanPlayers: isSet(object.humanPlayers) ? Number(object.humanPlayers) : 0,
      averageSkill: isSet(object.averageSkill) ? Number(object.averageSkill) : 0,
      gameBalance: isSet(object.gameBalance) ? Number(object.gameBalance) : 0,
      radiantTeamId: isSet(object.radiantTeamId) ? Number(object.radiantTeamId) : 0,
      direTeamId: isSet(object.direTeamId) ? Number(object.direTeamId) : 0,
      leagueid: isSet(object.leagueid) ? Number(object.leagueid) : 0,
      radiantTeamName: isSet(object.radiantTeamName) ? String(object.radiantTeamName) : "",
      direTeamName: isSet(object.direTeamName) ? String(object.direTeamName) : "",
      radiantTeamLogo: isSet(object.radiantTeamLogo) ? String(object.radiantTeamLogo) : "0",
      direTeamLogo: isSet(object.direTeamLogo) ? String(object.direTeamLogo) : "0",
      radiantTeamLogoUrl: isSet(object.radiantTeamLogoUrl) ? String(object.radiantTeamLogoUrl) : "",
      direTeamLogoUrl: isSet(object.direTeamLogoUrl) ? String(object.direTeamLogoUrl) : "",
      radiantTeamComplete: isSet(object.radiantTeamComplete) ? Number(object.radiantTeamComplete) : 0,
      direTeamComplete: isSet(object.direTeamComplete) ? Number(object.direTeamComplete) : 0,
      positiveVotes: isSet(object.positiveVotes) ? Number(object.positiveVotes) : 0,
      negativeVotes: isSet(object.negativeVotes) ? Number(object.negativeVotes) : 0,
      gameMode: isSet(object.gameMode) ? dOTAGameModeFromJSON(object.gameMode) : 0,
      picksBans: Array.isArray(object?.picksBans)
        ? object.picksBans.map((e: any) => CMatchHeroSelectEvent.fromJSON(e))
        : [],
      matchSeqNum: isSet(object.matchSeqNum) ? String(object.matchSeqNum) : "0",
      replayState: isSet(object.replayState) ? cMsgDOTAMatch_ReplayStateFromJSON(object.replayState) : 0,
      radiantGuildId: isSet(object.radiantGuildId) ? Number(object.radiantGuildId) : 0,
      direGuildId: isSet(object.direGuildId) ? Number(object.direGuildId) : 0,
      radiantTeamTag: isSet(object.radiantTeamTag) ? String(object.radiantTeamTag) : "",
      direTeamTag: isSet(object.direTeamTag) ? String(object.direTeamTag) : "",
      seriesId: isSet(object.seriesId) ? Number(object.seriesId) : 0,
      seriesType: isSet(object.seriesType) ? Number(object.seriesType) : 0,
      broadcasterChannels: Array.isArray(object?.broadcasterChannels)
        ? object.broadcasterChannels.map((e: any) => CMsgDOTAMatch_BroadcasterChannel.fromJSON(e))
        : [],
      engine: isSet(object.engine) ? Number(object.engine) : 0,
      customGameData: isSet(object.customGameData)
        ? CMsgDOTAMatch_CustomGameData.fromJSON(object.customGameData)
        : undefined,
      matchFlags: isSet(object.matchFlags) ? Number(object.matchFlags) : 0,
      privateMetadataKey: isSet(object.privateMetadataKey) ? Number(object.privateMetadataKey) : 0,
      radiantTeamScore: isSet(object.radiantTeamScore) ? Number(object.radiantTeamScore) : 0,
      direTeamScore: isSet(object.direTeamScore) ? Number(object.direTeamScore) : 0,
      matchOutcome: isSet(object.matchOutcome) ? eMatchOutcomeFromJSON(object.matchOutcome) : 0,
      tournamentId: isSet(object.tournamentId) ? Number(object.tournamentId) : 0,
      tournamentRound: isSet(object.tournamentRound) ? Number(object.tournamentRound) : 0,
      preGameDuration: isSet(object.preGameDuration) ? Number(object.preGameDuration) : 0,
      coaches: Array.isArray(object?.coaches) ? object.coaches.map((e: any) => CMsgDOTAMatch_Coach.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgDOTAMatch): unknown {
    const obj: any = {};
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.starttime !== undefined && (obj.starttime = Math.round(message.starttime));
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgDOTAMatch_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    message.matchId !== undefined && (obj.matchId = message.matchId);
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
    message.firstBloodTime !== undefined && (obj.firstBloodTime = Math.round(message.firstBloodTime));
    message.replaySalt !== undefined && (obj.replaySalt = Math.round(message.replaySalt));
    message.serverIp !== undefined && (obj.serverIp = Math.round(message.serverIp));
    message.serverPort !== undefined && (obj.serverPort = Math.round(message.serverPort));
    message.lobbyType !== undefined && (obj.lobbyType = Math.round(message.lobbyType));
    message.humanPlayers !== undefined && (obj.humanPlayers = Math.round(message.humanPlayers));
    message.averageSkill !== undefined && (obj.averageSkill = Math.round(message.averageSkill));
    message.gameBalance !== undefined && (obj.gameBalance = message.gameBalance);
    message.radiantTeamId !== undefined && (obj.radiantTeamId = Math.round(message.radiantTeamId));
    message.direTeamId !== undefined && (obj.direTeamId = Math.round(message.direTeamId));
    message.leagueid !== undefined && (obj.leagueid = Math.round(message.leagueid));
    message.radiantTeamName !== undefined && (obj.radiantTeamName = message.radiantTeamName);
    message.direTeamName !== undefined && (obj.direTeamName = message.direTeamName);
    message.radiantTeamLogo !== undefined && (obj.radiantTeamLogo = message.radiantTeamLogo);
    message.direTeamLogo !== undefined && (obj.direTeamLogo = message.direTeamLogo);
    message.radiantTeamLogoUrl !== undefined && (obj.radiantTeamLogoUrl = message.radiantTeamLogoUrl);
    message.direTeamLogoUrl !== undefined && (obj.direTeamLogoUrl = message.direTeamLogoUrl);
    message.radiantTeamComplete !== undefined && (obj.radiantTeamComplete = Math.round(message.radiantTeamComplete));
    message.direTeamComplete !== undefined && (obj.direTeamComplete = Math.round(message.direTeamComplete));
    message.positiveVotes !== undefined && (obj.positiveVotes = Math.round(message.positiveVotes));
    message.negativeVotes !== undefined && (obj.negativeVotes = Math.round(message.negativeVotes));
    message.gameMode !== undefined && (obj.gameMode = dOTAGameModeToJSON(message.gameMode));
    if (message.picksBans) {
      obj.picksBans = message.picksBans.map((e) => e ? CMatchHeroSelectEvent.toJSON(e) : undefined);
    } else {
      obj.picksBans = [];
    }
    message.matchSeqNum !== undefined && (obj.matchSeqNum = message.matchSeqNum);
    message.replayState !== undefined && (obj.replayState = cMsgDOTAMatch_ReplayStateToJSON(message.replayState));
    message.radiantGuildId !== undefined && (obj.radiantGuildId = Math.round(message.radiantGuildId));
    message.direGuildId !== undefined && (obj.direGuildId = Math.round(message.direGuildId));
    message.radiantTeamTag !== undefined && (obj.radiantTeamTag = message.radiantTeamTag);
    message.direTeamTag !== undefined && (obj.direTeamTag = message.direTeamTag);
    message.seriesId !== undefined && (obj.seriesId = Math.round(message.seriesId));
    message.seriesType !== undefined && (obj.seriesType = Math.round(message.seriesType));
    if (message.broadcasterChannels) {
      obj.broadcasterChannels = message.broadcasterChannels.map((e) =>
        e ? CMsgDOTAMatch_BroadcasterChannel.toJSON(e) : undefined
      );
    } else {
      obj.broadcasterChannels = [];
    }
    message.engine !== undefined && (obj.engine = Math.round(message.engine));
    message.customGameData !== undefined && (obj.customGameData = message.customGameData
      ? CMsgDOTAMatch_CustomGameData.toJSON(message.customGameData)
      : undefined);
    message.matchFlags !== undefined && (obj.matchFlags = Math.round(message.matchFlags));
    message.privateMetadataKey !== undefined && (obj.privateMetadataKey = Math.round(message.privateMetadataKey));
    message.radiantTeamScore !== undefined && (obj.radiantTeamScore = Math.round(message.radiantTeamScore));
    message.direTeamScore !== undefined && (obj.direTeamScore = Math.round(message.direTeamScore));
    message.matchOutcome !== undefined && (obj.matchOutcome = eMatchOutcomeToJSON(message.matchOutcome));
    message.tournamentId !== undefined && (obj.tournamentId = Math.round(message.tournamentId));
    message.tournamentRound !== undefined && (obj.tournamentRound = Math.round(message.tournamentRound));
    message.preGameDuration !== undefined && (obj.preGameDuration = Math.round(message.preGameDuration));
    if (message.coaches) {
      obj.coaches = message.coaches.map((e) => e ? CMsgDOTAMatch_Coach.toJSON(e) : undefined);
    } else {
      obj.coaches = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgDOTAMatch_Player {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      playerSlot: isSet(object.playerSlot) ? Number(object.playerSlot) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      item0: isSet(object.item0) ? Number(object.item0) : 0,
      item1: isSet(object.item1) ? Number(object.item1) : 0,
      item2: isSet(object.item2) ? Number(object.item2) : 0,
      item3: isSet(object.item3) ? Number(object.item3) : 0,
      item4: isSet(object.item4) ? Number(object.item4) : 0,
      item5: isSet(object.item5) ? Number(object.item5) : 0,
      item6: isSet(object.item6) ? Number(object.item6) : 0,
      item7: isSet(object.item7) ? Number(object.item7) : 0,
      item8: isSet(object.item8) ? Number(object.item8) : 0,
      item9: isSet(object.item9) ? Number(object.item9) : 0,
      expectedTeamContribution: isSet(object.expectedTeamContribution) ? Number(object.expectedTeamContribution) : 0,
      scaledMetric: isSet(object.scaledMetric) ? Number(object.scaledMetric) : 0,
      previousRank: isSet(object.previousRank) ? Number(object.previousRank) : 0,
      rankChange: isSet(object.rankChange) ? Number(object.rankChange) : 0,
      mmrType: isSet(object.mmrType) ? Number(object.mmrType) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      assists: isSet(object.assists) ? Number(object.assists) : 0,
      leaverStatus: isSet(object.leaverStatus) ? Number(object.leaverStatus) : 0,
      gold: isSet(object.gold) ? Number(object.gold) : 0,
      lastHits: isSet(object.lastHits) ? Number(object.lastHits) : 0,
      denies: isSet(object.denies) ? Number(object.denies) : 0,
      goldPerMin: isSet(object.goldPerMin) ? Number(object.goldPerMin) : 0,
      xpPerMin: isSet(object.xpPerMin) ? Number(object.xpPerMin) : 0,
      goldSpent: isSet(object.goldSpent) ? Number(object.goldSpent) : 0,
      heroDamage: isSet(object.heroDamage) ? Number(object.heroDamage) : 0,
      towerDamage: isSet(object.towerDamage) ? Number(object.towerDamage) : 0,
      heroHealing: isSet(object.heroHealing) ? Number(object.heroHealing) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      timeLastSeen: isSet(object.timeLastSeen) ? Number(object.timeLastSeen) : 0,
      playerName: isSet(object.playerName) ? String(object.playerName) : "",
      supportAbilityValue: isSet(object.supportAbilityValue) ? Number(object.supportAbilityValue) : 0,
      feedingDetected: isSet(object.feedingDetected) ? Boolean(object.feedingDetected) : false,
      searchRank: isSet(object.searchRank) ? Number(object.searchRank) : 0,
      searchRankUncertainty: isSet(object.searchRankUncertainty) ? Number(object.searchRankUncertainty) : 0,
      rankUncertaintyChange: isSet(object.rankUncertaintyChange) ? Number(object.rankUncertaintyChange) : 0,
      heroPlayCount: isSet(object.heroPlayCount) ? Number(object.heroPlayCount) : 0,
      partyId: isSet(object.partyId) ? String(object.partyId) : "0",
      scaledHeroDamage: isSet(object.scaledHeroDamage) ? Number(object.scaledHeroDamage) : 0,
      scaledTowerDamage: isSet(object.scaledTowerDamage) ? Number(object.scaledTowerDamage) : 0,
      scaledHeroHealing: isSet(object.scaledHeroHealing) ? Number(object.scaledHeroHealing) : 0,
      scaledKills: isSet(object.scaledKills) ? Number(object.scaledKills) : 0,
      scaledDeaths: isSet(object.scaledDeaths) ? Number(object.scaledDeaths) : 0,
      scaledAssists: isSet(object.scaledAssists) ? Number(object.scaledAssists) : 0,
      claimedFarmGold: isSet(object.claimedFarmGold) ? Number(object.claimedFarmGold) : 0,
      supportGold: isSet(object.supportGold) ? Number(object.supportGold) : 0,
      claimedDenies: isSet(object.claimedDenies) ? Number(object.claimedDenies) : 0,
      claimedMisses: isSet(object.claimedMisses) ? Number(object.claimedMisses) : 0,
      misses: isSet(object.misses) ? Number(object.misses) : 0,
      abilityUpgrades: Array.isArray(object?.abilityUpgrades)
        ? object.abilityUpgrades.map((e: any) => CMatchPlayerAbilityUpgrade.fromJSON(e))
        : [],
      additionalUnitsInventory: Array.isArray(object?.additionalUnitsInventory)
        ? object.additionalUnitsInventory.map((e: any) => CMatchAdditionalUnitInventory.fromJSON(e))
        : [],
      permanentBuffs: Array.isArray(object?.permanentBuffs)
        ? object.permanentBuffs.map((e: any) => CMatchPlayerPermanentBuff.fromJSON(e))
        : [],
      proName: isSet(object.proName) ? String(object.proName) : "",
      realName: isSet(object.realName) ? String(object.realName) : "",
      customGameData: isSet(object.customGameData)
        ? CMsgDOTAMatch_Player_CustomGameData.fromJSON(object.customGameData)
        : undefined,
      activePlusSubscription: isSet(object.activePlusSubscription) ? Boolean(object.activePlusSubscription) : false,
      netWorth: isSet(object.netWorth) ? Number(object.netWorth) : 0,
      botDifficulty: isSet(object.botDifficulty) ? Number(object.botDifficulty) : 0,
      heroPickOrder: isSet(object.heroPickOrder) ? Number(object.heroPickOrder) : 0,
      heroWasRandomed: isSet(object.heroWasRandomed) ? Boolean(object.heroWasRandomed) : false,
      heroWasDotaPlusSuggestion: isSet(object.heroWasDotaPlusSuggestion)
        ? Boolean(object.heroWasDotaPlusSuggestion)
        : false,
      heroDamageReceived: Array.isArray(object?.heroDamageReceived)
        ? object.heroDamageReceived.map((e: any) => CMsgDOTAMatch_Player_HeroDamageReceived.fromJSON(e))
        : [],
      heroDamageDealt: Array.isArray(object?.heroDamageDealt)
        ? object.heroDamageDealt.map((e: any) => CMsgDOTAMatch_Player_HeroDamageReceived.fromJSON(e))
        : [],
      secondsDead: isSet(object.secondsDead) ? Number(object.secondsDead) : 0,
      goldLostToDeath: isSet(object.goldLostToDeath) ? Number(object.goldLostToDeath) : 0,
      laneSelectionFlags: isSet(object.laneSelectionFlags) ? Number(object.laneSelectionFlags) : 0,
      bountyRunes: isSet(object.bountyRunes) ? Number(object.bountyRunes) : 0,
      outpostsCaptured: isSet(object.outpostsCaptured) ? Number(object.outpostsCaptured) : 0,
      teamNumber: isSet(object.teamNumber) ? dotaGcTeamFromJSON(object.teamNumber) : 0,
      teamSlot: isSet(object.teamSlot) ? Number(object.teamSlot) : 0,
    };
  },

  toJSON(message: CMsgDOTAMatch_Player): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.playerSlot !== undefined && (obj.playerSlot = Math.round(message.playerSlot));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.item0 !== undefined && (obj.item0 = Math.round(message.item0));
    message.item1 !== undefined && (obj.item1 = Math.round(message.item1));
    message.item2 !== undefined && (obj.item2 = Math.round(message.item2));
    message.item3 !== undefined && (obj.item3 = Math.round(message.item3));
    message.item4 !== undefined && (obj.item4 = Math.round(message.item4));
    message.item5 !== undefined && (obj.item5 = Math.round(message.item5));
    message.item6 !== undefined && (obj.item6 = Math.round(message.item6));
    message.item7 !== undefined && (obj.item7 = Math.round(message.item7));
    message.item8 !== undefined && (obj.item8 = Math.round(message.item8));
    message.item9 !== undefined && (obj.item9 = Math.round(message.item9));
    message.expectedTeamContribution !== undefined && (obj.expectedTeamContribution = message.expectedTeamContribution);
    message.scaledMetric !== undefined && (obj.scaledMetric = message.scaledMetric);
    message.previousRank !== undefined && (obj.previousRank = Math.round(message.previousRank));
    message.rankChange !== undefined && (obj.rankChange = Math.round(message.rankChange));
    message.mmrType !== undefined && (obj.mmrType = Math.round(message.mmrType));
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.assists !== undefined && (obj.assists = Math.round(message.assists));
    message.leaverStatus !== undefined && (obj.leaverStatus = Math.round(message.leaverStatus));
    message.gold !== undefined && (obj.gold = Math.round(message.gold));
    message.lastHits !== undefined && (obj.lastHits = Math.round(message.lastHits));
    message.denies !== undefined && (obj.denies = Math.round(message.denies));
    message.goldPerMin !== undefined && (obj.goldPerMin = Math.round(message.goldPerMin));
    message.xpPerMin !== undefined && (obj.xpPerMin = Math.round(message.xpPerMin));
    message.goldSpent !== undefined && (obj.goldSpent = Math.round(message.goldSpent));
    message.heroDamage !== undefined && (obj.heroDamage = Math.round(message.heroDamage));
    message.towerDamage !== undefined && (obj.towerDamage = Math.round(message.towerDamage));
    message.heroHealing !== undefined && (obj.heroHealing = Math.round(message.heroHealing));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.timeLastSeen !== undefined && (obj.timeLastSeen = Math.round(message.timeLastSeen));
    message.playerName !== undefined && (obj.playerName = message.playerName);
    message.supportAbilityValue !== undefined && (obj.supportAbilityValue = Math.round(message.supportAbilityValue));
    message.feedingDetected !== undefined && (obj.feedingDetected = message.feedingDetected);
    message.searchRank !== undefined && (obj.searchRank = Math.round(message.searchRank));
    message.searchRankUncertainty !== undefined &&
      (obj.searchRankUncertainty = Math.round(message.searchRankUncertainty));
    message.rankUncertaintyChange !== undefined &&
      (obj.rankUncertaintyChange = Math.round(message.rankUncertaintyChange));
    message.heroPlayCount !== undefined && (obj.heroPlayCount = Math.round(message.heroPlayCount));
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.scaledHeroDamage !== undefined && (obj.scaledHeroDamage = Math.round(message.scaledHeroDamage));
    message.scaledTowerDamage !== undefined && (obj.scaledTowerDamage = Math.round(message.scaledTowerDamage));
    message.scaledHeroHealing !== undefined && (obj.scaledHeroHealing = Math.round(message.scaledHeroHealing));
    message.scaledKills !== undefined && (obj.scaledKills = message.scaledKills);
    message.scaledDeaths !== undefined && (obj.scaledDeaths = message.scaledDeaths);
    message.scaledAssists !== undefined && (obj.scaledAssists = message.scaledAssists);
    message.claimedFarmGold !== undefined && (obj.claimedFarmGold = Math.round(message.claimedFarmGold));
    message.supportGold !== undefined && (obj.supportGold = Math.round(message.supportGold));
    message.claimedDenies !== undefined && (obj.claimedDenies = Math.round(message.claimedDenies));
    message.claimedMisses !== undefined && (obj.claimedMisses = Math.round(message.claimedMisses));
    message.misses !== undefined && (obj.misses = Math.round(message.misses));
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
    message.proName !== undefined && (obj.proName = message.proName);
    message.realName !== undefined && (obj.realName = message.realName);
    message.customGameData !== undefined && (obj.customGameData = message.customGameData
      ? CMsgDOTAMatch_Player_CustomGameData.toJSON(message.customGameData)
      : undefined);
    message.activePlusSubscription !== undefined && (obj.activePlusSubscription = message.activePlusSubscription);
    message.netWorth !== undefined && (obj.netWorth = Math.round(message.netWorth));
    message.botDifficulty !== undefined && (obj.botDifficulty = Math.round(message.botDifficulty));
    message.heroPickOrder !== undefined && (obj.heroPickOrder = Math.round(message.heroPickOrder));
    message.heroWasRandomed !== undefined && (obj.heroWasRandomed = message.heroWasRandomed);
    message.heroWasDotaPlusSuggestion !== undefined &&
      (obj.heroWasDotaPlusSuggestion = message.heroWasDotaPlusSuggestion);
    if (message.heroDamageReceived) {
      obj.heroDamageReceived = message.heroDamageReceived.map((e) =>
        e ? CMsgDOTAMatch_Player_HeroDamageReceived.toJSON(e) : undefined
      );
    } else {
      obj.heroDamageReceived = [];
    }
    if (message.heroDamageDealt) {
      obj.heroDamageDealt = message.heroDamageDealt.map((e) =>
        e ? CMsgDOTAMatch_Player_HeroDamageReceived.toJSON(e) : undefined
      );
    } else {
      obj.heroDamageDealt = [];
    }
    message.secondsDead !== undefined && (obj.secondsDead = Math.round(message.secondsDead));
    message.goldLostToDeath !== undefined && (obj.goldLostToDeath = Math.round(message.goldLostToDeath));
    message.laneSelectionFlags !== undefined && (obj.laneSelectionFlags = Math.round(message.laneSelectionFlags));
    message.bountyRunes !== undefined && (obj.bountyRunes = Math.round(message.bountyRunes));
    message.outpostsCaptured !== undefined && (obj.outpostsCaptured = Math.round(message.outpostsCaptured));
    message.teamNumber !== undefined && (obj.teamNumber = dotaGcTeamToJSON(message.teamNumber));
    message.teamSlot !== undefined && (obj.teamSlot = Math.round(message.teamSlot));
    return obj;
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

  fromJSON(object: any): CMsgDOTAMatch_Player_CustomGameData {
    return {
      dotaTeam: isSet(object.dotaTeam) ? Number(object.dotaTeam) : 0,
      winner: isSet(object.winner) ? Boolean(object.winner) : false,
    };
  },

  toJSON(message: CMsgDOTAMatch_Player_CustomGameData): unknown {
    const obj: any = {};
    message.dotaTeam !== undefined && (obj.dotaTeam = Math.round(message.dotaTeam));
    message.winner !== undefined && (obj.winner = message.winner);
    return obj;
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

  fromJSON(object: any): CMsgDOTAMatch_Player_HeroDamageReceived {
    return {
      preReduction: isSet(object.preReduction) ? Number(object.preReduction) : 0,
      postReduction: isSet(object.postReduction) ? Number(object.postReduction) : 0,
      damageType: isSet(object.damageType) ? cMsgDOTAMatch_Player_HeroDamageTypeFromJSON(object.damageType) : 0,
    };
  },

  toJSON(message: CMsgDOTAMatch_Player_HeroDamageReceived): unknown {
    const obj: any = {};
    message.preReduction !== undefined && (obj.preReduction = Math.round(message.preReduction));
    message.postReduction !== undefined && (obj.postReduction = Math.round(message.postReduction));
    message.damageType !== undefined &&
      (obj.damageType = cMsgDOTAMatch_Player_HeroDamageTypeToJSON(message.damageType));
    return obj;
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

  fromJSON(object: any): CMsgDOTAMatch_BroadcasterInfo {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CMsgDOTAMatch_BroadcasterInfo): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.name !== undefined && (obj.name = message.name);
    return obj;
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

  fromJSON(object: any): CMsgDOTAMatch_BroadcasterChannel {
    return {
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      description: isSet(object.description) ? String(object.description) : "",
      broadcasterInfos: Array.isArray(object?.broadcasterInfos)
        ? object.broadcasterInfos.map((e: any) => CMsgDOTAMatch_BroadcasterInfo.fromJSON(e))
        : [],
      languageCode: isSet(object.languageCode) ? String(object.languageCode) : "",
    };
  },

  toJSON(message: CMsgDOTAMatch_BroadcasterChannel): unknown {
    const obj: any = {};
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.description !== undefined && (obj.description = message.description);
    if (message.broadcasterInfos) {
      obj.broadcasterInfos = message.broadcasterInfos.map((e) =>
        e ? CMsgDOTAMatch_BroadcasterInfo.toJSON(e) : undefined
      );
    } else {
      obj.broadcasterInfos = [];
    }
    message.languageCode !== undefined && (obj.languageCode = message.languageCode);
    return obj;
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

  fromJSON(object: any): CMsgDOTAMatch_Coach {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      coachName: isSet(object.coachName) ? String(object.coachName) : "",
      coachRating: isSet(object.coachRating) ? Number(object.coachRating) : 0,
      coachTeam: isSet(object.coachTeam) ? Number(object.coachTeam) : 0,
      coachPartyId: isSet(object.coachPartyId) ? String(object.coachPartyId) : "0",
      isPrivateCoach: isSet(object.isPrivateCoach) ? Boolean(object.isPrivateCoach) : false,
    };
  },

  toJSON(message: CMsgDOTAMatch_Coach): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.coachName !== undefined && (obj.coachName = message.coachName);
    message.coachRating !== undefined && (obj.coachRating = Math.round(message.coachRating));
    message.coachTeam !== undefined && (obj.coachTeam = Math.round(message.coachTeam));
    message.coachPartyId !== undefined && (obj.coachPartyId = message.coachPartyId);
    message.isPrivateCoach !== undefined && (obj.isPrivateCoach = message.isPrivateCoach);
    return obj;
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

  fromJSON(object: any): CMsgDOTAMatch_CustomGameData {
    return {
      customGameId: isSet(object.customGameId) ? String(object.customGameId) : "0",
      mapName: isSet(object.mapName) ? String(object.mapName) : "",
    };
  },

  toJSON(message: CMsgDOTAMatch_CustomGameData): unknown {
    const obj: any = {};
    message.customGameId !== undefined && (obj.customGameId = message.customGameId);
    message.mapName !== undefined && (obj.mapName = message.mapName);
    return obj;
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

  fromJSON(object: any): CMsgPlayerCard {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      statModifier: Array.isArray(object?.statModifier)
        ? object.statModifier.map((e: any) => CMsgPlayerCard_StatModifier.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgPlayerCard): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    if (message.statModifier) {
      obj.statModifier = message.statModifier.map((e) => e ? CMsgPlayerCard_StatModifier.toJSON(e) : undefined);
    } else {
      obj.statModifier = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgPlayerCard_StatModifier {
    return {
      stat: isSet(object.stat) ? Number(object.stat) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: CMsgPlayerCard_StatModifier): unknown {
    const obj: any = {};
    message.stat !== undefined && (obj.stat = Math.round(message.stat));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
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

  fromJSON(object: any): CMsgDOTAFantasyPlayerStats {
    return {
      playerAccountId: isSet(object.playerAccountId) ? Number(object.playerAccountId) : 0,
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      matchCompleted: isSet(object.matchCompleted) ? Boolean(object.matchCompleted) : false,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      delay: isSet(object.delay) ? Number(object.delay) : 0,
      seriesId: isSet(object.seriesId) ? Number(object.seriesId) : 0,
      seriesType: isSet(object.seriesType) ? Number(object.seriesType) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      cs: isSet(object.cs) ? Number(object.cs) : 0,
      gpm: isSet(object.gpm) ? Number(object.gpm) : 0,
      towerKills: isSet(object.towerKills) ? Number(object.towerKills) : 0,
      roshanKills: isSet(object.roshanKills) ? Number(object.roshanKills) : 0,
      teamfightParticipation: isSet(object.teamfightParticipation) ? Number(object.teamfightParticipation) : 0,
      wardsPlaced: isSet(object.wardsPlaced) ? Number(object.wardsPlaced) : 0,
      campsStacked: isSet(object.campsStacked) ? Number(object.campsStacked) : 0,
      runesGrabbed: isSet(object.runesGrabbed) ? Number(object.runesGrabbed) : 0,
      firstBlood: isSet(object.firstBlood) ? Number(object.firstBlood) : 0,
      stuns: isSet(object.stuns) ? Number(object.stuns) : 0,
    };
  },

  toJSON(message: CMsgDOTAFantasyPlayerStats): unknown {
    const obj: any = {};
    message.playerAccountId !== undefined && (obj.playerAccountId = Math.round(message.playerAccountId));
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.matchCompleted !== undefined && (obj.matchCompleted = message.matchCompleted);
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.delay !== undefined && (obj.delay = Math.round(message.delay));
    message.seriesId !== undefined && (obj.seriesId = Math.round(message.seriesId));
    message.seriesType !== undefined && (obj.seriesType = Math.round(message.seriesType));
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.cs !== undefined && (obj.cs = Math.round(message.cs));
    message.gpm !== undefined && (obj.gpm = message.gpm);
    message.towerKills !== undefined && (obj.towerKills = Math.round(message.towerKills));
    message.roshanKills !== undefined && (obj.roshanKills = Math.round(message.roshanKills));
    message.teamfightParticipation !== undefined && (obj.teamfightParticipation = message.teamfightParticipation);
    message.wardsPlaced !== undefined && (obj.wardsPlaced = Math.round(message.wardsPlaced));
    message.campsStacked !== undefined && (obj.campsStacked = Math.round(message.campsStacked));
    message.runesGrabbed !== undefined && (obj.runesGrabbed = Math.round(message.runesGrabbed));
    message.firstBlood !== undefined && (obj.firstBlood = Math.round(message.firstBlood));
    message.stuns !== undefined && (obj.stuns = message.stuns);
    return obj;
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

  fromJSON(object: any): CMsgDOTAFantasyPlayerMatchStats {
    return {
      matches: Array.isArray(object?.matches)
        ? object.matches.map((e: any) => CMsgDOTAFantasyPlayerStats.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDOTAFantasyPlayerMatchStats): unknown {
    const obj: any = {};
    if (message.matches) {
      obj.matches = message.matches.map((e) => e ? CMsgDOTAFantasyPlayerStats.toJSON(e) : undefined);
    } else {
      obj.matches = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgDOTABotDebugInfo {
    return {
      bots: Array.isArray(object?.bots) ? object.bots.map((e: any) => CMsgDOTABotDebugInfo_Bot.fromJSON(e)) : [],
      desirePushLaneTop: isSet(object.desirePushLaneTop) ? Number(object.desirePushLaneTop) : 0,
      desirePushLaneMid: isSet(object.desirePushLaneMid) ? Number(object.desirePushLaneMid) : 0,
      desirePushLaneBot: isSet(object.desirePushLaneBot) ? Number(object.desirePushLaneBot) : 0,
      desireDefendLaneTop: isSet(object.desireDefendLaneTop) ? Number(object.desireDefendLaneTop) : 0,
      desireDefendLaneMid: isSet(object.desireDefendLaneMid) ? Number(object.desireDefendLaneMid) : 0,
      desireDefendLaneBot: isSet(object.desireDefendLaneBot) ? Number(object.desireDefendLaneBot) : 0,
      desireFarmLaneTop: isSet(object.desireFarmLaneTop) ? Number(object.desireFarmLaneTop) : 0,
      desireFarmLaneMid: isSet(object.desireFarmLaneMid) ? Number(object.desireFarmLaneMid) : 0,
      desireFarmLaneBot: isSet(object.desireFarmLaneBot) ? Number(object.desireFarmLaneBot) : 0,
      desireFarmRoshan: isSet(object.desireFarmRoshan) ? Number(object.desireFarmRoshan) : 0,
      executionTime: isSet(object.executionTime) ? Number(object.executionTime) : 0,
      runeStatus: Array.isArray(object?.runeStatus) ? object.runeStatus.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgDOTABotDebugInfo): unknown {
    const obj: any = {};
    if (message.bots) {
      obj.bots = message.bots.map((e) => e ? CMsgDOTABotDebugInfo_Bot.toJSON(e) : undefined);
    } else {
      obj.bots = [];
    }
    message.desirePushLaneTop !== undefined && (obj.desirePushLaneTop = message.desirePushLaneTop);
    message.desirePushLaneMid !== undefined && (obj.desirePushLaneMid = message.desirePushLaneMid);
    message.desirePushLaneBot !== undefined && (obj.desirePushLaneBot = message.desirePushLaneBot);
    message.desireDefendLaneTop !== undefined && (obj.desireDefendLaneTop = message.desireDefendLaneTop);
    message.desireDefendLaneMid !== undefined && (obj.desireDefendLaneMid = message.desireDefendLaneMid);
    message.desireDefendLaneBot !== undefined && (obj.desireDefendLaneBot = message.desireDefendLaneBot);
    message.desireFarmLaneTop !== undefined && (obj.desireFarmLaneTop = message.desireFarmLaneTop);
    message.desireFarmLaneMid !== undefined && (obj.desireFarmLaneMid = message.desireFarmLaneMid);
    message.desireFarmLaneBot !== undefined && (obj.desireFarmLaneBot = message.desireFarmLaneBot);
    message.desireFarmRoshan !== undefined && (obj.desireFarmRoshan = message.desireFarmRoshan);
    message.executionTime !== undefined && (obj.executionTime = message.executionTime);
    if (message.runeStatus) {
      obj.runeStatus = message.runeStatus.map((e) => Math.round(e));
    } else {
      obj.runeStatus = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgDOTABotDebugInfo_Bot {
    return {
      playerOwnerId: isSet(object.playerOwnerId) ? Number(object.playerOwnerId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      difficulty: isSet(object.difficulty) ? Number(object.difficulty) : 0,
      powerCurrent: isSet(object.powerCurrent) ? Number(object.powerCurrent) : 0,
      powerMax: isSet(object.powerMax) ? Number(object.powerMax) : 0,
      moveTargetX: isSet(object.moveTargetX) ? Number(object.moveTargetX) : 0,
      moveTargetY: isSet(object.moveTargetY) ? Number(object.moveTargetY) : 0,
      moveTargetZ: isSet(object.moveTargetZ) ? Number(object.moveTargetZ) : 0,
      activeModeId: isSet(object.activeModeId) ? Number(object.activeModeId) : 0,
      executionTime: isSet(object.executionTime) ? Number(object.executionTime) : 0,
      modes: Array.isArray(object?.modes)
        ? object.modes.map((e: any) => CMsgDOTABotDebugInfo_Bot_Mode.fromJSON(e))
        : [],
      action: isSet(object.action) ? CMsgDOTABotDebugInfo_Bot_Action.fromJSON(object.action) : undefined,
    };
  },

  toJSON(message: CMsgDOTABotDebugInfo_Bot): unknown {
    const obj: any = {};
    message.playerOwnerId !== undefined && (obj.playerOwnerId = Math.round(message.playerOwnerId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.difficulty !== undefined && (obj.difficulty = Math.round(message.difficulty));
    message.powerCurrent !== undefined && (obj.powerCurrent = Math.round(message.powerCurrent));
    message.powerMax !== undefined && (obj.powerMax = Math.round(message.powerMax));
    message.moveTargetX !== undefined && (obj.moveTargetX = Math.round(message.moveTargetX));
    message.moveTargetY !== undefined && (obj.moveTargetY = Math.round(message.moveTargetY));
    message.moveTargetZ !== undefined && (obj.moveTargetZ = Math.round(message.moveTargetZ));
    message.activeModeId !== undefined && (obj.activeModeId = Math.round(message.activeModeId));
    message.executionTime !== undefined && (obj.executionTime = message.executionTime);
    if (message.modes) {
      obj.modes = message.modes.map((e) => e ? CMsgDOTABotDebugInfo_Bot_Mode.toJSON(e) : undefined);
    } else {
      obj.modes = [];
    }
    message.action !== undefined &&
      (obj.action = message.action ? CMsgDOTABotDebugInfo_Bot_Action.toJSON(message.action) : undefined);
    return obj;
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

  fromJSON(object: any): CMsgDOTABotDebugInfo_Bot_Mode {
    return {
      modeId: isSet(object.modeId) ? Number(object.modeId) : 0,
      desire: isSet(object.desire) ? Number(object.desire) : 0,
      targetEntity: isSet(object.targetEntity) ? Number(object.targetEntity) : 0,
      targetX: isSet(object.targetX) ? Number(object.targetX) : 0,
      targetY: isSet(object.targetY) ? Number(object.targetY) : 0,
      targetZ: isSet(object.targetZ) ? Number(object.targetZ) : 0,
    };
  },

  toJSON(message: CMsgDOTABotDebugInfo_Bot_Mode): unknown {
    const obj: any = {};
    message.modeId !== undefined && (obj.modeId = Math.round(message.modeId));
    message.desire !== undefined && (obj.desire = message.desire);
    message.targetEntity !== undefined && (obj.targetEntity = Math.round(message.targetEntity));
    message.targetX !== undefined && (obj.targetX = Math.round(message.targetX));
    message.targetY !== undefined && (obj.targetY = Math.round(message.targetY));
    message.targetZ !== undefined && (obj.targetZ = Math.round(message.targetZ));
    return obj;
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

  fromJSON(object: any): CMsgDOTABotDebugInfo_Bot_Action {
    return {
      actionId: isSet(object.actionId) ? Number(object.actionId) : 0,
      actionTarget: isSet(object.actionTarget) ? String(object.actionTarget) : "",
    };
  },

  toJSON(message: CMsgDOTABotDebugInfo_Bot_Action): unknown {
    const obj: any = {};
    message.actionId !== undefined && (obj.actionId = Math.round(message.actionId));
    message.actionTarget !== undefined && (obj.actionTarget = message.actionTarget);
    return obj;
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

  fromJSON(object: any): CMsgSuccessfulHero {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      winPercent: isSet(object.winPercent) ? Number(object.winPercent) : 0,
      longestStreak: isSet(object.longestStreak) ? Number(object.longestStreak) : 0,
    };
  },

  toJSON(message: CMsgSuccessfulHero): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.winPercent !== undefined && (obj.winPercent = message.winPercent);
    message.longestStreak !== undefined && (obj.longestStreak = Math.round(message.longestStreak));
    return obj;
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

  fromJSON(object: any): CMsgRecentMatchInfo {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      gameMode: isSet(object.gameMode) ? dOTAGameModeFromJSON(object.gameMode) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      assists: isSet(object.assists) ? Number(object.assists) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      playerSlot: isSet(object.playerSlot) ? Number(object.playerSlot) : 0,
      matchOutcome: isSet(object.matchOutcome) ? eMatchOutcomeFromJSON(object.matchOutcome) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      lobbyType: isSet(object.lobbyType) ? Number(object.lobbyType) : 0,
      teamNumber: isSet(object.teamNumber) ? Number(object.teamNumber) : 0,
    };
  },

  toJSON(message: CMsgRecentMatchInfo): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.gameMode !== undefined && (obj.gameMode = dOTAGameModeToJSON(message.gameMode));
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.assists !== undefined && (obj.assists = Math.round(message.assists));
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.playerSlot !== undefined && (obj.playerSlot = Math.round(message.playerSlot));
    message.matchOutcome !== undefined && (obj.matchOutcome = eMatchOutcomeToJSON(message.matchOutcome));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.lobbyType !== undefined && (obj.lobbyType = Math.round(message.lobbyType));
    message.teamNumber !== undefined && (obj.teamNumber = Math.round(message.teamNumber));
    return obj;
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

  fromJSON(object: any): CMsgMatchTips {
    return {
      tips: Array.isArray(object?.tips) ? object.tips.map((e: any) => CMsgMatchTips_SingleTip.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgMatchTips): unknown {
    const obj: any = {};
    if (message.tips) {
      obj.tips = message.tips.map((e) => e ? CMsgMatchTips_SingleTip.toJSON(e) : undefined);
    } else {
      obj.tips = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgMatchTips_SingleTip {
    return {
      sourceAccountId: isSet(object.sourceAccountId) ? Number(object.sourceAccountId) : 0,
      targetAccountId: isSet(object.targetAccountId) ? Number(object.targetAccountId) : 0,
      tipAmount: isSet(object.tipAmount) ? Number(object.tipAmount) : 0,
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
    };
  },

  toJSON(message: CMsgMatchTips_SingleTip): unknown {
    const obj: any = {};
    message.sourceAccountId !== undefined && (obj.sourceAccountId = Math.round(message.sourceAccountId));
    message.targetAccountId !== undefined && (obj.targetAccountId = Math.round(message.targetAccountId));
    message.tipAmount !== undefined && (obj.tipAmount = Math.round(message.tipAmount));
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    return obj;
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

  fromJSON(object: any): CMsgDOTAMatchMinimal {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      gameMode: isSet(object.gameMode) ? dOTAGameModeFromJSON(object.gameMode) : 0,
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgDOTAMatchMinimal_Player.fromJSON(e))
        : [],
      tourney: isSet(object.tourney) ? CMsgDOTAMatchMinimal_Tourney.fromJSON(object.tourney) : undefined,
      matchOutcome: isSet(object.matchOutcome) ? eMatchOutcomeFromJSON(object.matchOutcome) : 0,
      radiantScore: isSet(object.radiantScore) ? Number(object.radiantScore) : 0,
      direScore: isSet(object.direScore) ? Number(object.direScore) : 0,
      lobbyType: isSet(object.lobbyType) ? Number(object.lobbyType) : 0,
    };
  },

  toJSON(message: CMsgDOTAMatchMinimal): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.gameMode !== undefined && (obj.gameMode = dOTAGameModeToJSON(message.gameMode));
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgDOTAMatchMinimal_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    message.tourney !== undefined &&
      (obj.tourney = message.tourney ? CMsgDOTAMatchMinimal_Tourney.toJSON(message.tourney) : undefined);
    message.matchOutcome !== undefined && (obj.matchOutcome = eMatchOutcomeToJSON(message.matchOutcome));
    message.radiantScore !== undefined && (obj.radiantScore = Math.round(message.radiantScore));
    message.direScore !== undefined && (obj.direScore = Math.round(message.direScore));
    message.lobbyType !== undefined && (obj.lobbyType = Math.round(message.lobbyType));
    return obj;
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

  fromJSON(object: any): CMsgDOTAMatchMinimal_Player {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      assists: isSet(object.assists) ? Number(object.assists) : 0,
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Number(e)) : [],
      playerSlot: isSet(object.playerSlot) ? Number(object.playerSlot) : 0,
      proName: isSet(object.proName) ? String(object.proName) : "",
      level: isSet(object.level) ? Number(object.level) : 0,
      teamNumber: isSet(object.teamNumber) ? dotaGcTeamFromJSON(object.teamNumber) : 0,
    };
  },

  toJSON(message: CMsgDOTAMatchMinimal_Player): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.assists !== undefined && (obj.assists = Math.round(message.assists));
    if (message.items) {
      obj.items = message.items.map((e) => Math.round(e));
    } else {
      obj.items = [];
    }
    message.playerSlot !== undefined && (obj.playerSlot = Math.round(message.playerSlot));
    message.proName !== undefined && (obj.proName = message.proName);
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.teamNumber !== undefined && (obj.teamNumber = dotaGcTeamToJSON(message.teamNumber));
    return obj;
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

  fromJSON(object: any): CMsgDOTAMatchMinimal_Tourney {
    return {
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      seriesType: isSet(object.seriesType) ? Number(object.seriesType) : 0,
      seriesGame: isSet(object.seriesGame) ? Number(object.seriesGame) : 0,
      weekendTourneyTournamentId: isSet(object.weekendTourneyTournamentId)
        ? Number(object.weekendTourneyTournamentId)
        : 0,
      weekendTourneySeasonTrophyId: isSet(object.weekendTourneySeasonTrophyId)
        ? Number(object.weekendTourneySeasonTrophyId)
        : 0,
      weekendTourneyDivision: isSet(object.weekendTourneyDivision) ? Number(object.weekendTourneyDivision) : 0,
      weekendTourneySkillLevel: isSet(object.weekendTourneySkillLevel) ? Number(object.weekendTourneySkillLevel) : 0,
      radiantTeamId: isSet(object.radiantTeamId) ? Number(object.radiantTeamId) : 0,
      radiantTeamName: isSet(object.radiantTeamName) ? String(object.radiantTeamName) : "",
      radiantTeamLogo: isSet(object.radiantTeamLogo) ? String(object.radiantTeamLogo) : "0",
      radiantTeamLogoUrl: isSet(object.radiantTeamLogoUrl) ? String(object.radiantTeamLogoUrl) : "",
      direTeamId: isSet(object.direTeamId) ? Number(object.direTeamId) : 0,
      direTeamName: isSet(object.direTeamName) ? String(object.direTeamName) : "",
      direTeamLogo: isSet(object.direTeamLogo) ? String(object.direTeamLogo) : "0",
      direTeamLogoUrl: isSet(object.direTeamLogoUrl) ? String(object.direTeamLogoUrl) : "",
    };
  },

  toJSON(message: CMsgDOTAMatchMinimal_Tourney): unknown {
    const obj: any = {};
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.seriesType !== undefined && (obj.seriesType = Math.round(message.seriesType));
    message.seriesGame !== undefined && (obj.seriesGame = Math.round(message.seriesGame));
    message.weekendTourneyTournamentId !== undefined &&
      (obj.weekendTourneyTournamentId = Math.round(message.weekendTourneyTournamentId));
    message.weekendTourneySeasonTrophyId !== undefined &&
      (obj.weekendTourneySeasonTrophyId = Math.round(message.weekendTourneySeasonTrophyId));
    message.weekendTourneyDivision !== undefined &&
      (obj.weekendTourneyDivision = Math.round(message.weekendTourneyDivision));
    message.weekendTourneySkillLevel !== undefined &&
      (obj.weekendTourneySkillLevel = Math.round(message.weekendTourneySkillLevel));
    message.radiantTeamId !== undefined && (obj.radiantTeamId = Math.round(message.radiantTeamId));
    message.radiantTeamName !== undefined && (obj.radiantTeamName = message.radiantTeamName);
    message.radiantTeamLogo !== undefined && (obj.radiantTeamLogo = message.radiantTeamLogo);
    message.radiantTeamLogoUrl !== undefined && (obj.radiantTeamLogoUrl = message.radiantTeamLogoUrl);
    message.direTeamId !== undefined && (obj.direTeamId = Math.round(message.direTeamId));
    message.direTeamName !== undefined && (obj.direTeamName = message.direTeamName);
    message.direTeamLogo !== undefined && (obj.direTeamLogo = message.direTeamLogo);
    message.direTeamLogoUrl !== undefined && (obj.direTeamLogoUrl = message.direTeamLogoUrl);
    return obj;
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

  fromJSON(object: any): CMsgConsumableUsage {
    return {
      itemDef: isSet(object.itemDef) ? Number(object.itemDef) : 0,
      quantityChange: isSet(object.quantityChange) ? Number(object.quantityChange) : 0,
    };
  },

  toJSON(message: CMsgConsumableUsage): unknown {
    const obj: any = {};
    message.itemDef !== undefined && (obj.itemDef = Math.round(message.itemDef));
    message.quantityChange !== undefined && (obj.quantityChange = Math.round(message.quantityChange));
    return obj;
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

  fromJSON(object: any): CMsgMatchConsumableUsage {
    return {
      playerConsumablesUsed: Array.isArray(object?.playerConsumablesUsed)
        ? object.playerConsumablesUsed.map((e: any) => CMsgMatchConsumableUsage_PlayerUsage.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgMatchConsumableUsage): unknown {
    const obj: any = {};
    if (message.playerConsumablesUsed) {
      obj.playerConsumablesUsed = message.playerConsumablesUsed.map((e) =>
        e ? CMsgMatchConsumableUsage_PlayerUsage.toJSON(e) : undefined
      );
    } else {
      obj.playerConsumablesUsed = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgMatchConsumableUsage_PlayerUsage {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      consumablesUsed: Array.isArray(object?.consumablesUsed)
        ? object.consumablesUsed.map((e: any) => CMsgConsumableUsage.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgMatchConsumableUsage_PlayerUsage): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    if (message.consumablesUsed) {
      obj.consumablesUsed = message.consumablesUsed.map((e) => e ? CMsgConsumableUsage.toJSON(e) : undefined);
    } else {
      obj.consumablesUsed = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgMatchEventActionGrants {
    return {
      playerGrants: Array.isArray(object?.playerGrants)
        ? object.playerGrants.map((e: any) => CMsgMatchEventActionGrants_PlayerGrants.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgMatchEventActionGrants): unknown {
    const obj: any = {};
    if (message.playerGrants) {
      obj.playerGrants = message.playerGrants.map((e) =>
        e ? CMsgMatchEventActionGrants_PlayerGrants.toJSON(e) : undefined
      );
    } else {
      obj.playerGrants = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgMatchEventActionGrants_PlayerGrants {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      actionsGranted: Array.isArray(object?.actionsGranted)
        ? object.actionsGranted.map((e: any) => CMsgPendingEventAward.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgMatchEventActionGrants_PlayerGrants): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    if (message.actionsGranted) {
      obj.actionsGranted = message.actionsGranted.map((e) => e ? CMsgPendingEventAward.toJSON(e) : undefined);
    } else {
      obj.actionsGranted = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgCustomGameWhitelist {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      customGamesWhitelist: Array.isArray(object?.customGamesWhitelist)
        ? object.customGamesWhitelist.map((e: any) => String(e))
        : [],
      disableWhitelist: isSet(object.disableWhitelist) ? Boolean(object.disableWhitelist) : false,
    };
  },

  toJSON(message: CMsgCustomGameWhitelist): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = Math.round(message.version));
    if (message.customGamesWhitelist) {
      obj.customGamesWhitelist = message.customGamesWhitelist.map((e) => e);
    } else {
      obj.customGamesWhitelist = [];
    }
    message.disableWhitelist !== undefined && (obj.disableWhitelist = message.disableWhitelist);
    return obj;
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

  fromJSON(object: any): CMsgCustomGameWhitelistForEdit {
    return {
      whitelistEntries: Array.isArray(object?.whitelistEntries)
        ? object.whitelistEntries.map((e: any) => CMsgCustomGameWhitelistForEdit_WhitelistEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgCustomGameWhitelistForEdit): unknown {
    const obj: any = {};
    if (message.whitelistEntries) {
      obj.whitelistEntries = message.whitelistEntries.map((e) =>
        e ? CMsgCustomGameWhitelistForEdit_WhitelistEntry.toJSON(e) : undefined
      );
    } else {
      obj.whitelistEntries = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgCustomGameWhitelistForEdit_WhitelistEntry {
    return {
      customGameId: isSet(object.customGameId) ? String(object.customGameId) : "0",
      whitelistState: isSet(object.whitelistState) ? eCustomGameWhitelistStateFromJSON(object.whitelistState) : 0,
    };
  },

  toJSON(message: CMsgCustomGameWhitelistForEdit_WhitelistEntry): unknown {
    const obj: any = {};
    message.customGameId !== undefined && (obj.customGameId = message.customGameId);
    message.whitelistState !== undefined &&
      (obj.whitelistState = eCustomGameWhitelistStateToJSON(message.whitelistState));
    return obj;
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

  fromJSON(object: any): CMsgPlayerRecentMatchInfo {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      win: isSet(object.win) ? Boolean(object.win) : false,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      assists: isSet(object.assists) ? Number(object.assists) : 0,
    };
  },

  toJSON(message: CMsgPlayerRecentMatchInfo): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.win !== undefined && (obj.win = message.win);
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.assists !== undefined && (obj.assists = Math.round(message.assists));
    return obj;
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

  fromJSON(object: any): CMsgPlayerMatchRecord {
    return {
      wins: isSet(object.wins) ? Number(object.wins) : 0,
      losses: isSet(object.losses) ? Number(object.losses) : 0,
    };
  },

  toJSON(message: CMsgPlayerMatchRecord): unknown {
    const obj: any = {};
    message.wins !== undefined && (obj.wins = Math.round(message.wins));
    message.losses !== undefined && (obj.losses = Math.round(message.losses));
    return obj;
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

  fromJSON(object: any): CMsgPlayerRecentMatchOutcomes {
    return {
      outcomes: isSet(object.outcomes) ? Number(object.outcomes) : 0,
      matchCount: isSet(object.matchCount) ? Number(object.matchCount) : 0,
    };
  },

  toJSON(message: CMsgPlayerRecentMatchOutcomes): unknown {
    const obj: any = {};
    message.outcomes !== undefined && (obj.outcomes = Math.round(message.outcomes));
    message.matchCount !== undefined && (obj.matchCount = Math.round(message.matchCount));
    return obj;
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

  fromJSON(object: any): CMsgPlayerRecentCommends {
    return {
      commends: isSet(object.commends) ? Number(object.commends) : 0,
      matchCount: isSet(object.matchCount) ? Number(object.matchCount) : 0,
    };
  },

  toJSON(message: CMsgPlayerRecentCommends): unknown {
    const obj: any = {};
    message.commends !== undefined && (obj.commends = Math.round(message.commends));
    message.matchCount !== undefined && (obj.matchCount = Math.round(message.matchCount));
    return obj;
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

  fromJSON(object: any): CMsgPlayerRecentAccomplishments {
    return {
      recentOutcomes: isSet(object.recentOutcomes)
        ? CMsgPlayerRecentMatchOutcomes.fromJSON(object.recentOutcomes)
        : undefined,
      totalRecord: isSet(object.totalRecord) ? CMsgPlayerMatchRecord.fromJSON(object.totalRecord) : undefined,
      predictionStreak: isSet(object.predictionStreak) ? Number(object.predictionStreak) : 0,
      plusPredictionStreak: isSet(object.plusPredictionStreak) ? Number(object.plusPredictionStreak) : 0,
      recentCommends: isSet(object.recentCommends)
        ? CMsgPlayerRecentCommends.fromJSON(object.recentCommends)
        : undefined,
      firstMatchTimestamp: isSet(object.firstMatchTimestamp) ? Number(object.firstMatchTimestamp) : 0,
      lastMatch: isSet(object.lastMatch) ? CMsgPlayerRecentMatchInfo.fromJSON(object.lastMatch) : undefined,
      recentMvps: isSet(object.recentMvps) ? CMsgPlayerRecentMatchOutcomes.fromJSON(object.recentMvps) : undefined,
    };
  },

  toJSON(message: CMsgPlayerRecentAccomplishments): unknown {
    const obj: any = {};
    message.recentOutcomes !== undefined && (obj.recentOutcomes = message.recentOutcomes
      ? CMsgPlayerRecentMatchOutcomes.toJSON(message.recentOutcomes)
      : undefined);
    message.totalRecord !== undefined &&
      (obj.totalRecord = message.totalRecord ? CMsgPlayerMatchRecord.toJSON(message.totalRecord) : undefined);
    message.predictionStreak !== undefined && (obj.predictionStreak = Math.round(message.predictionStreak));
    message.plusPredictionStreak !== undefined && (obj.plusPredictionStreak = Math.round(message.plusPredictionStreak));
    message.recentCommends !== undefined &&
      (obj.recentCommends = message.recentCommends
        ? CMsgPlayerRecentCommends.toJSON(message.recentCommends)
        : undefined);
    message.firstMatchTimestamp !== undefined && (obj.firstMatchTimestamp = Math.round(message.firstMatchTimestamp));
    message.lastMatch !== undefined &&
      (obj.lastMatch = message.lastMatch ? CMsgPlayerRecentMatchInfo.toJSON(message.lastMatch) : undefined);
    message.recentMvps !== undefined &&
      (obj.recentMvps = message.recentMvps ? CMsgPlayerRecentMatchOutcomes.toJSON(message.recentMvps) : undefined);
    return obj;
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

  fromJSON(object: any): CMsgPlayerHeroRecentAccomplishments {
    return {
      recentOutcomes: isSet(object.recentOutcomes)
        ? CMsgPlayerRecentMatchOutcomes.fromJSON(object.recentOutcomes)
        : undefined,
      totalRecord: isSet(object.totalRecord) ? CMsgPlayerMatchRecord.fromJSON(object.totalRecord) : undefined,
      lastMatch: isSet(object.lastMatch) ? CMsgPlayerRecentMatchInfo.fromJSON(object.lastMatch) : undefined,
    };
  },

  toJSON(message: CMsgPlayerHeroRecentAccomplishments): unknown {
    const obj: any = {};
    message.recentOutcomes !== undefined && (obj.recentOutcomes = message.recentOutcomes
      ? CMsgPlayerRecentMatchOutcomes.toJSON(message.recentOutcomes)
      : undefined);
    message.totalRecord !== undefined &&
      (obj.totalRecord = message.totalRecord ? CMsgPlayerMatchRecord.toJSON(message.totalRecord) : undefined);
    message.lastMatch !== undefined &&
      (obj.lastMatch = message.lastMatch ? CMsgPlayerRecentMatchInfo.toJSON(message.lastMatch) : undefined);
    return obj;
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

  fromJSON(object: any): CMsgRecentAccomplishments {
    return {
      playerAccomplishments: isSet(object.playerAccomplishments)
        ? CMsgPlayerRecentAccomplishments.fromJSON(object.playerAccomplishments)
        : undefined,
      heroAccomplishments: isSet(object.heroAccomplishments)
        ? CMsgPlayerHeroRecentAccomplishments.fromJSON(object.heroAccomplishments)
        : undefined,
    };
  },

  toJSON(message: CMsgRecentAccomplishments): unknown {
    const obj: any = {};
    message.playerAccomplishments !== undefined && (obj.playerAccomplishments = message.playerAccomplishments
      ? CMsgPlayerRecentAccomplishments.toJSON(message.playerAccomplishments)
      : undefined);
    message.heroAccomplishments !== undefined && (obj.heroAccomplishments = message.heroAccomplishments
      ? CMsgPlayerHeroRecentAccomplishments.toJSON(message.heroAccomplishments)
      : undefined);
    return obj;
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

  fromJSON(object: any): CMsgServerToGCRequestPlayerRecentAccomplishments {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
    };
  },

  toJSON(message: CMsgServerToGCRequestPlayerRecentAccomplishments): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    return obj;
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

  fromJSON(object: any): CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse {
    return {
      result: isSet(object.result)
        ? cMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponseFromJSON(object.result)
        : 0,
      playerAccomplishments: isSet(object.playerAccomplishments)
        ? CMsgRecentAccomplishments.fromJSON(object.playerAccomplishments)
        : undefined,
    };
  },

  toJSON(message: CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponseToJSON(message.result));
    message.playerAccomplishments !== undefined && (obj.playerAccomplishments = message.playerAccomplishments
      ? CMsgRecentAccomplishments.toJSON(message.playerAccomplishments)
      : undefined);
    return obj;
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

  fromJSON(object: any): CMsgArcanaVoteMatchVotes {
    return {
      matchId: isSet(object.matchId) ? Number(object.matchId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      voteCount: isSet(object.voteCount) ? Number(object.voteCount) : 0,
    };
  },

  toJSON(message: CMsgArcanaVoteMatchVotes): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = Math.round(message.matchId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.voteCount !== undefined && (obj.voteCount = Math.round(message.voteCount));
    return obj;
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

  fromJSON(object: any): CMsgGCtoGCAssociatedExploiterAccountInfo {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      numMatchesToSearch: isSet(object.numMatchesToSearch) ? Number(object.numMatchesToSearch) : 0,
      minSharedMatchCount: isSet(object.minSharedMatchCount) ? Number(object.minSharedMatchCount) : 0,
      numAdditionalPlayers: isSet(object.numAdditionalPlayers) ? Number(object.numAdditionalPlayers) : 0,
    };
  },

  toJSON(message: CMsgGCtoGCAssociatedExploiterAccountInfo): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.numMatchesToSearch !== undefined && (obj.numMatchesToSearch = Math.round(message.numMatchesToSearch));
    message.minSharedMatchCount !== undefined && (obj.minSharedMatchCount = Math.round(message.minSharedMatchCount));
    message.numAdditionalPlayers !== undefined && (obj.numAdditionalPlayers = Math.round(message.numAdditionalPlayers));
    return obj;
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

  fromJSON(object: any): CMsgGCtoGCAssociatedExploiterAccountInfoResponse {
    return {
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGCtoGCAssociatedExploiterAccountInfoResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) =>
        e ? CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account.toJSON(e) : undefined
      );
    } else {
      obj.accounts = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      numCommonMatches: isSet(object.numCommonMatches) ? Number(object.numCommonMatches) : 0,
      earliestCommonMatch: isSet(object.earliestCommonMatch) ? Number(object.earliestCommonMatch) : 0,
      latestCommonMatch: isSet(object.latestCommonMatch) ? Number(object.latestCommonMatch) : 0,
      generation: isSet(object.generation) ? Number(object.generation) : 0,
      persona: isSet(object.persona) ? String(object.persona) : "",
      alreadyBanned: isSet(object.alreadyBanned) ? Boolean(object.alreadyBanned) : false,
    };
  },

  toJSON(message: CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.numCommonMatches !== undefined && (obj.numCommonMatches = Math.round(message.numCommonMatches));
    message.earliestCommonMatch !== undefined && (obj.earliestCommonMatch = Math.round(message.earliestCommonMatch));
    message.latestCommonMatch !== undefined && (obj.latestCommonMatch = Math.round(message.latestCommonMatch));
    message.generation !== undefined && (obj.generation = Math.round(message.generation));
    message.persona !== undefined && (obj.persona = message.persona);
    message.alreadyBanned !== undefined && (obj.alreadyBanned = message.alreadyBanned);
    return obj;
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

  fromJSON(object: any): CMsgPullTabsData {
    return {
      slots: Array.isArray(object?.slots) ? object.slots.map((e: any) => CMsgPullTabsData_Slot.fromJSON(e)) : [],
      jackpots: Array.isArray(object?.jackpots)
        ? object.jackpots.map((e: any) => CMsgPullTabsData_Jackpot.fromJSON(e))
        : [],
      lastBoard: isSet(object.lastBoard) ? Number(object.lastBoard) : 0,
    };
  },

  toJSON(message: CMsgPullTabsData): unknown {
    const obj: any = {};
    if (message.slots) {
      obj.slots = message.slots.map((e) => e ? CMsgPullTabsData_Slot.toJSON(e) : undefined);
    } else {
      obj.slots = [];
    }
    if (message.jackpots) {
      obj.jackpots = message.jackpots.map((e) => e ? CMsgPullTabsData_Jackpot.toJSON(e) : undefined);
    } else {
      obj.jackpots = [];
    }
    message.lastBoard !== undefined && (obj.lastBoard = Math.round(message.lastBoard));
    return obj;
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

  fromJSON(object: any): CMsgPullTabsData_Slot {
    return {
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      boardId: isSet(object.boardId) ? Number(object.boardId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      actionId: isSet(object.actionId) ? Number(object.actionId) : 0,
      redeemed: isSet(object.redeemed) ? Boolean(object.redeemed) : false,
    };
  },

  toJSON(message: CMsgPullTabsData_Slot): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    message.boardId !== undefined && (obj.boardId = Math.round(message.boardId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.actionId !== undefined && (obj.actionId = Math.round(message.actionId));
    message.redeemed !== undefined && (obj.redeemed = message.redeemed);
    return obj;
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

  fromJSON(object: any): CMsgPullTabsData_Jackpot {
    return {
      boardId: isSet(object.boardId) ? Number(object.boardId) : 0,
      actionId: isSet(object.actionId) ? Number(object.actionId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
    };
  },

  toJSON(message: CMsgPullTabsData_Jackpot): unknown {
    const obj: any = {};
    message.boardId !== undefined && (obj.boardId = Math.round(message.boardId));
    message.actionId !== undefined && (obj.actionId = Math.round(message.actionId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    return obj;
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

  fromJSON(object: any): CMsgUnderDraftData {
    return {
      benchSlots: Array.isArray(object?.benchSlots)
        ? object.benchSlots.map((e: any) => CMsgUnderDraftData_BenchSlot.fromJSON(e))
        : [],
      shopSlots: Array.isArray(object?.shopSlots)
        ? object.shopSlots.map((e: any) => CMsgUnderDraftData_ShopSlot.fromJSON(e))
        : [],
      gold: isSet(object.gold) ? Number(object.gold) : 0,
      totalGold: isSet(object.totalGold) ? Number(object.totalGold) : 0,
      notRestorable: isSet(object.notRestorable) ? Boolean(object.notRestorable) : false,
    };
  },

  toJSON(message: CMsgUnderDraftData): unknown {
    const obj: any = {};
    if (message.benchSlots) {
      obj.benchSlots = message.benchSlots.map((e) => e ? CMsgUnderDraftData_BenchSlot.toJSON(e) : undefined);
    } else {
      obj.benchSlots = [];
    }
    if (message.shopSlots) {
      obj.shopSlots = message.shopSlots.map((e) => e ? CMsgUnderDraftData_ShopSlot.toJSON(e) : undefined);
    } else {
      obj.shopSlots = [];
    }
    message.gold !== undefined && (obj.gold = Math.round(message.gold));
    message.totalGold !== undefined && (obj.totalGold = Math.round(message.totalGold));
    message.notRestorable !== undefined && (obj.notRestorable = message.notRestorable);
    return obj;
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

  fromJSON(object: any): CMsgUnderDraftData_BenchSlot {
    return {
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      stars: isSet(object.stars) ? Number(object.stars) : 0,
    };
  },

  toJSON(message: CMsgUnderDraftData_BenchSlot): unknown {
    const obj: any = {};
    message.slotId !== undefined && (obj.slotId = Math.round(message.slotId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.stars !== undefined && (obj.stars = Math.round(message.stars));
    return obj;
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

  fromJSON(object: any): CMsgUnderDraftData_ShopSlot {
    return {
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      isSpecialReward: isSet(object.isSpecialReward) ? Boolean(object.isSpecialReward) : false,
    };
  },

  toJSON(message: CMsgUnderDraftData_ShopSlot): unknown {
    const obj: any = {};
    message.slotId !== undefined && (obj.slotId = Math.round(message.slotId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.isSpecialReward !== undefined && (obj.isSpecialReward = message.isSpecialReward);
    return obj;
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

  fromJSON(object: any): CMsgPlayerTitleData {
    return {
      title: Array.isArray(object?.title) ? object.title.map((e: any) => Number(e)) : [],
      eventId: Array.isArray(object?.eventId) ? object.eventId.map((e: any) => Number(e)) : [],
      active: isSet(object.active) ? Number(object.active) : 0,
    };
  },

  toJSON(message: CMsgPlayerTitleData): unknown {
    const obj: any = {};
    if (message.title) {
      obj.title = message.title.map((e) => Math.round(e));
    } else {
      obj.title = [];
    }
    if (message.eventId) {
      obj.eventId = message.eventId.map((e) => Math.round(e));
    } else {
      obj.eventId = [];
    }
    message.active !== undefined && (obj.active = Math.round(message.active));
    return obj;
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

  fromJSON(object: any): CMsgDOTATriviaQuestion {
    return {
      questionId: isSet(object.questionId) ? Number(object.questionId) : 0,
      category: isSet(object.category) ? eDOTATriviaQuestionCategoryFromJSON(object.category) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      questionValue: isSet(object.questionValue) ? String(object.questionValue) : "",
      answerValues: Array.isArray(object?.answerValues) ? object.answerValues.map((e: any) => String(e)) : [],
      correctAnswerIndex: isSet(object.correctAnswerIndex) ? Number(object.correctAnswerIndex) : 0,
    };
  },

  toJSON(message: CMsgDOTATriviaQuestion): unknown {
    const obj: any = {};
    message.questionId !== undefined && (obj.questionId = Math.round(message.questionId));
    message.category !== undefined && (obj.category = eDOTATriviaQuestionCategoryToJSON(message.category));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.questionValue !== undefined && (obj.questionValue = message.questionValue);
    if (message.answerValues) {
      obj.answerValues = message.answerValues.map((e) => e);
    } else {
      obj.answerValues = [];
    }
    message.correctAnswerIndex !== undefined && (obj.correctAnswerIndex = Math.round(message.correctAnswerIndex));
    return obj;
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

  fromJSON(object: any): CMsgDOTATriviaQuestionAnswersSummary {
    return {
      summaryAvailable: isSet(object.summaryAvailable) ? Boolean(object.summaryAvailable) : false,
      pickedCount: Array.isArray(object?.pickedCount) ? object.pickedCount.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgDOTATriviaQuestionAnswersSummary): unknown {
    const obj: any = {};
    message.summaryAvailable !== undefined && (obj.summaryAvailable = message.summaryAvailable);
    if (message.pickedCount) {
      obj.pickedCount = message.pickedCount.map((e) => Math.round(e));
    } else {
      obj.pickedCount = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgGameDataSpecialValueBonus {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? Number(object.value) : 0,
      operation: isSet(object.operation) ? Number(object.operation) : 0,
    };
  },

  toJSON(message: CMsgGameDataSpecialValueBonus): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    message.operation !== undefined && (obj.operation = Math.round(message.operation));
    return obj;
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

  fromJSON(object: any): CMsgGameDataSpecialValues {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      valuesFloat: Array.isArray(object?.valuesFloat) ? object.valuesFloat.map((e: any) => Number(e)) : [],
      isPercentage: isSet(object.isPercentage) ? Boolean(object.isPercentage) : false,
      headingLoc: isSet(object.headingLoc) ? String(object.headingLoc) : "",
      bonuses: Array.isArray(object?.bonuses)
        ? object.bonuses.map((e: any) => CMsgGameDataSpecialValueBonus.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGameDataSpecialValues): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.valuesFloat) {
      obj.valuesFloat = message.valuesFloat.map((e) => e);
    } else {
      obj.valuesFloat = [];
    }
    message.isPercentage !== undefined && (obj.isPercentage = message.isPercentage);
    message.headingLoc !== undefined && (obj.headingLoc = message.headingLoc);
    if (message.bonuses) {
      obj.bonuses = message.bonuses.map((e) => e ? CMsgGameDataSpecialValueBonus.toJSON(e) : undefined);
    } else {
      obj.bonuses = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgGameDataAbilityOrItem {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      nameLoc: isSet(object.nameLoc) ? String(object.nameLoc) : "",
      descLoc: isSet(object.descLoc) ? String(object.descLoc) : "",
      loreLoc: isSet(object.loreLoc) ? String(object.loreLoc) : "",
      notesLoc: Array.isArray(object?.notesLoc) ? object.notesLoc.map((e: any) => String(e)) : [],
      shardLoc: isSet(object.shardLoc) ? String(object.shardLoc) : "",
      scepterLoc: isSet(object.scepterLoc) ? String(object.scepterLoc) : "",
      type: isSet(object.type) ? Number(object.type) : 0,
      behavior: isSet(object.behavior) ? String(object.behavior) : "0",
      targetTeam: isSet(object.targetTeam) ? Number(object.targetTeam) : 0,
      targetType: isSet(object.targetType) ? Number(object.targetType) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      damage: isSet(object.damage) ? Number(object.damage) : 0,
      immunity: isSet(object.immunity) ? Number(object.immunity) : 0,
      dispellable: isSet(object.dispellable) ? Number(object.dispellable) : 0,
      maxLevel: isSet(object.maxLevel) ? Number(object.maxLevel) : 0,
      castRanges: Array.isArray(object?.castRanges) ? object.castRanges.map((e: any) => Number(e)) : [],
      castPoints: Array.isArray(object?.castPoints) ? object.castPoints.map((e: any) => Number(e)) : [],
      channelTimes: Array.isArray(object?.channelTimes) ? object.channelTimes.map((e: any) => Number(e)) : [],
      cooldowns: Array.isArray(object?.cooldowns) ? object.cooldowns.map((e: any) => Number(e)) : [],
      durations: Array.isArray(object?.durations) ? object.durations.map((e: any) => Number(e)) : [],
      damages: Array.isArray(object?.damages) ? object.damages.map((e: any) => Number(e)) : [],
      manaCosts: Array.isArray(object?.manaCosts) ? object.manaCosts.map((e: any) => Number(e)) : [],
      goldCosts: Array.isArray(object?.goldCosts) ? object.goldCosts.map((e: any) => Number(e)) : [],
      healthCosts: Array.isArray(object?.healthCosts) ? object.healthCosts.map((e: any) => Number(e)) : [],
      specialValues: Array.isArray(object?.specialValues)
        ? object.specialValues.map((e: any) => CMsgGameDataSpecialValues.fromJSON(e))
        : [],
      isItem: isSet(object.isItem) ? Boolean(object.isItem) : false,
      abilityHasScepter: isSet(object.abilityHasScepter) ? Boolean(object.abilityHasScepter) : false,
      abilityHasShard: isSet(object.abilityHasShard) ? Boolean(object.abilityHasShard) : false,
      abilityIsGrantedByScepter: isSet(object.abilityIsGrantedByScepter)
        ? Boolean(object.abilityIsGrantedByScepter)
        : false,
      abilityIsGrantedByShard: isSet(object.abilityIsGrantedByShard) ? Boolean(object.abilityIsGrantedByShard) : false,
      itemCost: isSet(object.itemCost) ? Number(object.itemCost) : 0,
      itemInitialCharges: isSet(object.itemInitialCharges) ? Number(object.itemInitialCharges) : 0,
      itemNeutralTier: isSet(object.itemNeutralTier) ? Number(object.itemNeutralTier) : 0,
      itemStockMax: isSet(object.itemStockMax) ? Number(object.itemStockMax) : 0,
      itemStockTime: isSet(object.itemStockTime) ? Number(object.itemStockTime) : 0,
      itemQuality: isSet(object.itemQuality) ? Number(object.itemQuality) : 0,
    };
  },

  toJSON(message: CMsgGameDataAbilityOrItem): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.nameLoc !== undefined && (obj.nameLoc = message.nameLoc);
    message.descLoc !== undefined && (obj.descLoc = message.descLoc);
    message.loreLoc !== undefined && (obj.loreLoc = message.loreLoc);
    if (message.notesLoc) {
      obj.notesLoc = message.notesLoc.map((e) => e);
    } else {
      obj.notesLoc = [];
    }
    message.shardLoc !== undefined && (obj.shardLoc = message.shardLoc);
    message.scepterLoc !== undefined && (obj.scepterLoc = message.scepterLoc);
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.behavior !== undefined && (obj.behavior = message.behavior);
    message.targetTeam !== undefined && (obj.targetTeam = Math.round(message.targetTeam));
    message.targetType !== undefined && (obj.targetType = Math.round(message.targetType));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.damage !== undefined && (obj.damage = Math.round(message.damage));
    message.immunity !== undefined && (obj.immunity = Math.round(message.immunity));
    message.dispellable !== undefined && (obj.dispellable = Math.round(message.dispellable));
    message.maxLevel !== undefined && (obj.maxLevel = Math.round(message.maxLevel));
    if (message.castRanges) {
      obj.castRanges = message.castRanges.map((e) => Math.round(e));
    } else {
      obj.castRanges = [];
    }
    if (message.castPoints) {
      obj.castPoints = message.castPoints.map((e) => e);
    } else {
      obj.castPoints = [];
    }
    if (message.channelTimes) {
      obj.channelTimes = message.channelTimes.map((e) => e);
    } else {
      obj.channelTimes = [];
    }
    if (message.cooldowns) {
      obj.cooldowns = message.cooldowns.map((e) => e);
    } else {
      obj.cooldowns = [];
    }
    if (message.durations) {
      obj.durations = message.durations.map((e) => e);
    } else {
      obj.durations = [];
    }
    if (message.damages) {
      obj.damages = message.damages.map((e) => Math.round(e));
    } else {
      obj.damages = [];
    }
    if (message.manaCosts) {
      obj.manaCosts = message.manaCosts.map((e) => Math.round(e));
    } else {
      obj.manaCosts = [];
    }
    if (message.goldCosts) {
      obj.goldCosts = message.goldCosts.map((e) => Math.round(e));
    } else {
      obj.goldCosts = [];
    }
    if (message.healthCosts) {
      obj.healthCosts = message.healthCosts.map((e) => Math.round(e));
    } else {
      obj.healthCosts = [];
    }
    if (message.specialValues) {
      obj.specialValues = message.specialValues.map((e) => e ? CMsgGameDataSpecialValues.toJSON(e) : undefined);
    } else {
      obj.specialValues = [];
    }
    message.isItem !== undefined && (obj.isItem = message.isItem);
    message.abilityHasScepter !== undefined && (obj.abilityHasScepter = message.abilityHasScepter);
    message.abilityHasShard !== undefined && (obj.abilityHasShard = message.abilityHasShard);
    message.abilityIsGrantedByScepter !== undefined &&
      (obj.abilityIsGrantedByScepter = message.abilityIsGrantedByScepter);
    message.abilityIsGrantedByShard !== undefined && (obj.abilityIsGrantedByShard = message.abilityIsGrantedByShard);
    message.itemCost !== undefined && (obj.itemCost = Math.round(message.itemCost));
    message.itemInitialCharges !== undefined && (obj.itemInitialCharges = Math.round(message.itemInitialCharges));
    message.itemNeutralTier !== undefined && (obj.itemNeutralTier = Math.round(message.itemNeutralTier));
    message.itemStockMax !== undefined && (obj.itemStockMax = Math.round(message.itemStockMax));
    message.itemStockTime !== undefined && (obj.itemStockTime = message.itemStockTime);
    message.itemQuality !== undefined && (obj.itemQuality = Math.round(message.itemQuality));
    return obj;
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

  fromJSON(object: any): CMsgGameDataHero {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
      nameLoc: isSet(object.nameLoc) ? String(object.nameLoc) : "",
      bioLoc: isSet(object.bioLoc) ? String(object.bioLoc) : "",
      hypeLoc: isSet(object.hypeLoc) ? String(object.hypeLoc) : "",
      npeDescLoc: isSet(object.npeDescLoc) ? String(object.npeDescLoc) : "",
      strBase: isSet(object.strBase) ? Number(object.strBase) : 0,
      strGain: isSet(object.strGain) ? Number(object.strGain) : 0,
      agiBase: isSet(object.agiBase) ? Number(object.agiBase) : 0,
      agiGain: isSet(object.agiGain) ? Number(object.agiGain) : 0,
      intBase: isSet(object.intBase) ? Number(object.intBase) : 0,
      intGain: isSet(object.intGain) ? Number(object.intGain) : 0,
      primaryAttr: isSet(object.primaryAttr) ? Number(object.primaryAttr) : 0,
      complexity: isSet(object.complexity) ? Number(object.complexity) : 0,
      attackCapability: isSet(object.attackCapability) ? Number(object.attackCapability) : 0,
      roleLevels: Array.isArray(object?.roleLevels) ? object.roleLevels.map((e: any) => Number(e)) : [],
      damageMin: isSet(object.damageMin) ? Number(object.damageMin) : 0,
      damageMax: isSet(object.damageMax) ? Number(object.damageMax) : 0,
      attackRate: isSet(object.attackRate) ? Number(object.attackRate) : 0,
      attackRange: isSet(object.attackRange) ? Number(object.attackRange) : 0,
      projectileSpeed: isSet(object.projectileSpeed) ? Number(object.projectileSpeed) : 0,
      armor: isSet(object.armor) ? Number(object.armor) : 0,
      magicResistance: isSet(object.magicResistance) ? Number(object.magicResistance) : 0,
      movementSpeed: isSet(object.movementSpeed) ? Number(object.movementSpeed) : 0,
      turnRate: isSet(object.turnRate) ? Number(object.turnRate) : 0,
      sightRangeDay: isSet(object.sightRangeDay) ? Number(object.sightRangeDay) : 0,
      sightRangeNight: isSet(object.sightRangeNight) ? Number(object.sightRangeNight) : 0,
      maxHealth: isSet(object.maxHealth) ? Number(object.maxHealth) : 0,
      healthRegen: isSet(object.healthRegen) ? Number(object.healthRegen) : 0,
      maxMana: isSet(object.maxMana) ? Number(object.maxMana) : 0,
      manaRegen: isSet(object.manaRegen) ? Number(object.manaRegen) : 0,
      abilities: Array.isArray(object?.abilities)
        ? object.abilities.map((e: any) => CMsgGameDataAbilityOrItem.fromJSON(e))
        : [],
      talents: Array.isArray(object?.talents)
        ? object.talents.map((e: any) => CMsgGameDataAbilityOrItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGameDataHero): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
    message.nameLoc !== undefined && (obj.nameLoc = message.nameLoc);
    message.bioLoc !== undefined && (obj.bioLoc = message.bioLoc);
    message.hypeLoc !== undefined && (obj.hypeLoc = message.hypeLoc);
    message.npeDescLoc !== undefined && (obj.npeDescLoc = message.npeDescLoc);
    message.strBase !== undefined && (obj.strBase = Math.round(message.strBase));
    message.strGain !== undefined && (obj.strGain = message.strGain);
    message.agiBase !== undefined && (obj.agiBase = Math.round(message.agiBase));
    message.agiGain !== undefined && (obj.agiGain = message.agiGain);
    message.intBase !== undefined && (obj.intBase = Math.round(message.intBase));
    message.intGain !== undefined && (obj.intGain = message.intGain);
    message.primaryAttr !== undefined && (obj.primaryAttr = Math.round(message.primaryAttr));
    message.complexity !== undefined && (obj.complexity = Math.round(message.complexity));
    message.attackCapability !== undefined && (obj.attackCapability = Math.round(message.attackCapability));
    if (message.roleLevels) {
      obj.roleLevels = message.roleLevels.map((e) => Math.round(e));
    } else {
      obj.roleLevels = [];
    }
    message.damageMin !== undefined && (obj.damageMin = Math.round(message.damageMin));
    message.damageMax !== undefined && (obj.damageMax = Math.round(message.damageMax));
    message.attackRate !== undefined && (obj.attackRate = message.attackRate);
    message.attackRange !== undefined && (obj.attackRange = Math.round(message.attackRange));
    message.projectileSpeed !== undefined && (obj.projectileSpeed = Math.round(message.projectileSpeed));
    message.armor !== undefined && (obj.armor = message.armor);
    message.magicResistance !== undefined && (obj.magicResistance = Math.round(message.magicResistance));
    message.movementSpeed !== undefined && (obj.movementSpeed = Math.round(message.movementSpeed));
    message.turnRate !== undefined && (obj.turnRate = message.turnRate);
    message.sightRangeDay !== undefined && (obj.sightRangeDay = Math.round(message.sightRangeDay));
    message.sightRangeNight !== undefined && (obj.sightRangeNight = Math.round(message.sightRangeNight));
    message.maxHealth !== undefined && (obj.maxHealth = Math.round(message.maxHealth));
    message.healthRegen !== undefined && (obj.healthRegen = message.healthRegen);
    message.maxMana !== undefined && (obj.maxMana = Math.round(message.maxMana));
    message.manaRegen !== undefined && (obj.manaRegen = message.manaRegen);
    if (message.abilities) {
      obj.abilities = message.abilities.map((e) => e ? CMsgGameDataAbilityOrItem.toJSON(e) : undefined);
    } else {
      obj.abilities = [];
    }
    if (message.talents) {
      obj.talents = message.talents.map((e) => e ? CMsgGameDataAbilityOrItem.toJSON(e) : undefined);
    } else {
      obj.talents = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgGameDataAbilities {
    return {
      abilities: Array.isArray(object?.abilities)
        ? object.abilities.map((e: any) => CMsgGameDataAbilityOrItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGameDataAbilities): unknown {
    const obj: any = {};
    if (message.abilities) {
      obj.abilities = message.abilities.map((e) => e ? CMsgGameDataAbilityOrItem.toJSON(e) : undefined);
    } else {
      obj.abilities = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgGameDataItems {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => CMsgGameDataAbilityOrItem.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgGameDataItems): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? CMsgGameDataAbilityOrItem.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgGameDataHeroes {
    return { heroes: Array.isArray(object?.heroes) ? object.heroes.map((e: any) => CMsgGameDataHero.fromJSON(e)) : [] };
  },

  toJSON(message: CMsgGameDataHeroes): unknown {
    const obj: any = {};
    if (message.heroes) {
      obj.heroes = message.heroes.map((e) => e ? CMsgGameDataHero.toJSON(e) : undefined);
    } else {
      obj.heroes = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgGameDataHeroList {
    return {
      heroes: Array.isArray(object?.heroes)
        ? object.heroes.map((e: any) => CMsgGameDataHeroList_HeroInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGameDataHeroList): unknown {
    const obj: any = {};
    if (message.heroes) {
      obj.heroes = message.heroes.map((e) => e ? CMsgGameDataHeroList_HeroInfo.toJSON(e) : undefined);
    } else {
      obj.heroes = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgGameDataHeroList_HeroInfo {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      nameLoc: isSet(object.nameLoc) ? String(object.nameLoc) : "",
      nameEnglishLoc: isSet(object.nameEnglishLoc) ? String(object.nameEnglishLoc) : "",
      primaryAttr: isSet(object.primaryAttr) ? Number(object.primaryAttr) : 0,
      complexity: isSet(object.complexity) ? Number(object.complexity) : 0,
    };
  },

  toJSON(message: CMsgGameDataHeroList_HeroInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.nameLoc !== undefined && (obj.nameLoc = message.nameLoc);
    message.nameEnglishLoc !== undefined && (obj.nameEnglishLoc = message.nameEnglishLoc);
    message.primaryAttr !== undefined && (obj.primaryAttr = Math.round(message.primaryAttr));
    message.complexity !== undefined && (obj.complexity = Math.round(message.complexity));
    return obj;
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

  fromJSON(object: any): CMsgGameDataItemAbilityList {
    return {
      itemabilities: Array.isArray(object?.itemabilities)
        ? object.itemabilities.map((e: any) => CMsgGameDataItemAbilityList_ItemAbilityInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGameDataItemAbilityList): unknown {
    const obj: any = {};
    if (message.itemabilities) {
      obj.itemabilities = message.itemabilities.map((e) =>
        e ? CMsgGameDataItemAbilityList_ItemAbilityInfo.toJSON(e) : undefined
      );
    } else {
      obj.itemabilities = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgGameDataItemAbilityList_ItemAbilityInfo {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      nameLoc: isSet(object.nameLoc) ? String(object.nameLoc) : "",
      nameEnglishLoc: isSet(object.nameEnglishLoc) ? String(object.nameEnglishLoc) : "",
      neutralItemTier: isSet(object.neutralItemTier) ? Number(object.neutralItemTier) : 0,
    };
  },

  toJSON(message: CMsgGameDataItemAbilityList_ItemAbilityInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.nameLoc !== undefined && (obj.nameLoc = message.nameLoc);
    message.nameEnglishLoc !== undefined && (obj.nameEnglishLoc = message.nameEnglishLoc);
    message.neutralItemTier !== undefined && (obj.neutralItemTier = Math.round(message.neutralItemTier));
    return obj;
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

  fromJSON(object: any): CMsgLobbyAbilityDraftData {
    return { shuffleDraftOrder: isSet(object.shuffleDraftOrder) ? Boolean(object.shuffleDraftOrder) : false };
  },

  toJSON(message: CMsgLobbyAbilityDraftData): unknown {
    const obj: any = {};
    message.shuffleDraftOrder !== undefined && (obj.shuffleDraftOrder = message.shuffleDraftOrder);
    return obj;
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

  fromJSON(object: any): CSOEconItemDropRateBonus {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      expirationDate: isSet(object.expirationDate) ? Number(object.expirationDate) : 0,
      bonus: isSet(object.bonus) ? Number(object.bonus) : 0,
      bonusCount: isSet(object.bonusCount) ? Number(object.bonusCount) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      defIndex: isSet(object.defIndex) ? Number(object.defIndex) : 0,
      secondsLeft: isSet(object.secondsLeft) ? Number(object.secondsLeft) : 0,
      boosterType: isSet(object.boosterType) ? Number(object.boosterType) : 0,
    };
  },

  toJSON(message: CSOEconItemDropRateBonus): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.expirationDate !== undefined && (obj.expirationDate = Math.round(message.expirationDate));
    message.bonus !== undefined && (obj.bonus = message.bonus);
    message.bonusCount !== undefined && (obj.bonusCount = Math.round(message.bonusCount));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.defIndex !== undefined && (obj.defIndex = Math.round(message.defIndex));
    message.secondsLeft !== undefined && (obj.secondsLeft = Math.round(message.secondsLeft));
    message.boosterType !== undefined && (obj.boosterType = Math.round(message.boosterType));
    return obj;
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

  fromJSON(object: any): CSOEconItemTournamentPassport {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      leagueId: isSet(object.leagueId) ? Number(object.leagueId) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      originalPurchaserId: isSet(object.originalPurchaserId) ? Number(object.originalPurchaserId) : 0,
      passportsBought: isSet(object.passportsBought) ? Number(object.passportsBought) : 0,
      version: isSet(object.version) ? Number(object.version) : 0,
      defIndex: isSet(object.defIndex) ? Number(object.defIndex) : 0,
      rewardFlags: isSet(object.rewardFlags) ? Number(object.rewardFlags) : 0,
    };
  },

  toJSON(message: CSOEconItemTournamentPassport): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.leagueId !== undefined && (obj.leagueId = Math.round(message.leagueId));
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.originalPurchaserId !== undefined && (obj.originalPurchaserId = Math.round(message.originalPurchaserId));
    message.passportsBought !== undefined && (obj.passportsBought = Math.round(message.passportsBought));
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.defIndex !== undefined && (obj.defIndex = Math.round(message.defIndex));
    message.rewardFlags !== undefined && (obj.rewardFlags = Math.round(message.rewardFlags));
    return obj;
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

  fromJSON(object: any): CMsgStickerbookSticker {
    return {
      itemDefId: isSet(object.itemDefId) ? Number(object.itemDefId) : 0,
      stickerNum: isSet(object.stickerNum) ? Number(object.stickerNum) : 0,
      quality: isSet(object.quality) ? Number(object.quality) : 0,
      positionX: isSet(object.positionX) ? Number(object.positionX) : 0,
      positionY: isSet(object.positionY) ? Number(object.positionY) : 0,
      positionZ: isSet(object.positionZ) ? Number(object.positionZ) : 0,
      rotation: isSet(object.rotation) ? Number(object.rotation) : 0,
      scale: isSet(object.scale) ? Number(object.scale) : 0,
      sourceItemId: isSet(object.sourceItemId) ? String(object.sourceItemId) : "0",
      depthBias: isSet(object.depthBias) ? Number(object.depthBias) : 0,
    };
  },

  toJSON(message: CMsgStickerbookSticker): unknown {
    const obj: any = {};
    message.itemDefId !== undefined && (obj.itemDefId = Math.round(message.itemDefId));
    message.stickerNum !== undefined && (obj.stickerNum = Math.round(message.stickerNum));
    message.quality !== undefined && (obj.quality = Math.round(message.quality));
    message.positionX !== undefined && (obj.positionX = message.positionX);
    message.positionY !== undefined && (obj.positionY = message.positionY);
    message.positionZ !== undefined && (obj.positionZ = message.positionZ);
    message.rotation !== undefined && (obj.rotation = message.rotation);
    message.scale !== undefined && (obj.scale = message.scale);
    message.sourceItemId !== undefined && (obj.sourceItemId = message.sourceItemId);
    message.depthBias !== undefined && (obj.depthBias = Math.round(message.depthBias));
    return obj;
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

  fromJSON(object: any): CMsgStickerbookPage {
    return {
      pageNum: isSet(object.pageNum) ? Number(object.pageNum) : 0,
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      stickers: Array.isArray(object?.stickers)
        ? object.stickers.map((e: any) => CMsgStickerbookSticker.fromJSON(e))
        : [],
      pageType: isSet(object.pageType) ? eStickerbookPageTypeFromJSON(object.pageType) : 0,
    };
  },

  toJSON(message: CMsgStickerbookPage): unknown {
    const obj: any = {};
    message.pageNum !== undefined && (obj.pageNum = Math.round(message.pageNum));
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    if (message.stickers) {
      obj.stickers = message.stickers.map((e) => e ? CMsgStickerbookSticker.toJSON(e) : undefined);
    } else {
      obj.stickers = [];
    }
    message.pageType !== undefined && (obj.pageType = eStickerbookPageTypeToJSON(message.pageType));
    return obj;
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

  fromJSON(object: any): CMsgStickerbookTeamPageOrderSequence {
    return { pageNumbers: Array.isArray(object?.pageNumbers) ? object.pageNumbers.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CMsgStickerbookTeamPageOrderSequence): unknown {
    const obj: any = {};
    if (message.pageNumbers) {
      obj.pageNumbers = message.pageNumbers.map((e) => Math.round(e));
    } else {
      obj.pageNumbers = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgStickerbook {
    return {
      pages: Array.isArray(object?.pages) ? object.pages.map((e: any) => CMsgStickerbookPage.fromJSON(e)) : [],
      teamPageOrderSequence: isSet(object.teamPageOrderSequence)
        ? CMsgStickerbookTeamPageOrderSequence.fromJSON(object.teamPageOrderSequence)
        : undefined,
      favoritePageNum: isSet(object.favoritePageNum) ? Number(object.favoritePageNum) : 0,
    };
  },

  toJSON(message: CMsgStickerbook): unknown {
    const obj: any = {};
    if (message.pages) {
      obj.pages = message.pages.map((e) => e ? CMsgStickerbookPage.toJSON(e) : undefined);
    } else {
      obj.pages = [];
    }
    message.teamPageOrderSequence !== undefined && (obj.teamPageOrderSequence = message.teamPageOrderSequence
      ? CMsgStickerbookTeamPageOrderSequence.toJSON(message.teamPageOrderSequence)
      : undefined);
    message.favoritePageNum !== undefined && (obj.favoritePageNum = Math.round(message.favoritePageNum));
    return obj;
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

  fromJSON(object: any): CMsgStickerHero {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      itemDefId: isSet(object.itemDefId) ? Number(object.itemDefId) : 0,
      quality: isSet(object.quality) ? Number(object.quality) : 0,
      sourceItemId: isSet(object.sourceItemId) ? String(object.sourceItemId) : "0",
    };
  },

  toJSON(message: CMsgStickerHero): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.itemDefId !== undefined && (obj.itemDefId = Math.round(message.itemDefId));
    message.quality !== undefined && (obj.quality = Math.round(message.quality));
    message.sourceItemId !== undefined && (obj.sourceItemId = message.sourceItemId);
    return obj;
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

  fromJSON(object: any): CMsgStickerHeroes {
    return { heroes: Array.isArray(object?.heroes) ? object.heroes.map((e: any) => CMsgStickerHero.fromJSON(e)) : [] };
  },

  toJSON(message: CMsgStickerHeroes): unknown {
    const obj: any = {};
    if (message.heroes) {
      obj.heroes = message.heroes.map((e) => e ? CMsgStickerHero.toJSON(e) : undefined);
    } else {
      obj.heroes = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgHeroRoleStats {
    return {
      laneSelectionFlags: isSet(object.laneSelectionFlags) ? Number(object.laneSelectionFlags) : 0,
      matchCount: isSet(object.matchCount) ? Number(object.matchCount) : 0,
      winCount: isSet(object.winCount) ? Number(object.winCount) : 0,
    };
  },

  toJSON(message: CMsgHeroRoleStats): unknown {
    const obj: any = {};
    message.laneSelectionFlags !== undefined && (obj.laneSelectionFlags = Math.round(message.laneSelectionFlags));
    message.matchCount !== undefined && (obj.matchCount = Math.round(message.matchCount));
    message.winCount !== undefined && (obj.winCount = Math.round(message.winCount));
    return obj;
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

  fromJSON(object: any): CMsgHeroRoleHeroStats {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      roleStats: Array.isArray(object?.roleStats)
        ? object.roleStats.map((e: any) => CMsgHeroRoleStats.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgHeroRoleHeroStats): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    if (message.roleStats) {
      obj.roleStats = message.roleStats.map((e) => e ? CMsgHeroRoleStats.toJSON(e) : undefined);
    } else {
      obj.roleStats = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgHeroRoleRankStats {
    return {
      rankTier: isSet(object.rankTier) ? Number(object.rankTier) : 0,
      heroStats: Array.isArray(object?.heroStats)
        ? object.heroStats.map((e: any) => CMsgHeroRoleHeroStats.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgHeroRoleRankStats): unknown {
    const obj: any = {};
    message.rankTier !== undefined && (obj.rankTier = Math.round(message.rankTier));
    if (message.heroStats) {
      obj.heroStats = message.heroStats.map((e) => e ? CMsgHeroRoleHeroStats.toJSON(e) : undefined);
    } else {
      obj.heroStats = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgHeroRoleAllRanksStats {
    return {
      startTimestamp: isSet(object.startTimestamp) ? Number(object.startTimestamp) : 0,
      endTimestamp: isSet(object.endTimestamp) ? Number(object.endTimestamp) : 0,
      rankStats: Array.isArray(object?.rankStats)
        ? object.rankStats.map((e: any) => CMsgHeroRoleRankStats.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgHeroRoleAllRanksStats): unknown {
    const obj: any = {};
    message.startTimestamp !== undefined && (obj.startTimestamp = Math.round(message.startTimestamp));
    message.endTimestamp !== undefined && (obj.endTimestamp = Math.round(message.endTimestamp));
    if (message.rankStats) {
      obj.rankStats = message.rankStats.map((e) => e ? CMsgHeroRoleRankStats.toJSON(e) : undefined);
    } else {
      obj.rankStats = [];
    }
    return obj;
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

  fromJSON(object: any): CMsgMapStatsSnapshot {
    return {
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      famangosGained: isSet(object.famangosGained) ? String(object.famangosGained) : "0",
      wisdomRunesGained: isSet(object.wisdomRunesGained) ? String(object.wisdomRunesGained) : "0",
      roshanKillsDay: isSet(object.roshanKillsDay) ? String(object.roshanKillsDay) : "0",
      roshanKillsNight: isSet(object.roshanKillsNight) ? String(object.roshanKillsNight) : "0",
      portalsUsed: isSet(object.portalsUsed) ? String(object.portalsUsed) : "0",
      lanternsLit: isSet(object.lanternsLit) ? String(object.lanternsLit) : "0",
      minibossKills: isSet(object.minibossKills) ? String(object.minibossKills) : "0",
      outpostsCaptured: isSet(object.outpostsCaptured) ? String(object.outpostsCaptured) : "0",
      shieldRunesGained: isSet(object.shieldRunesGained) ? String(object.shieldRunesGained) : "0",
    };
  },

  toJSON(message: CMsgMapStatsSnapshot): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.famangosGained !== undefined && (obj.famangosGained = message.famangosGained);
    message.wisdomRunesGained !== undefined && (obj.wisdomRunesGained = message.wisdomRunesGained);
    message.roshanKillsDay !== undefined && (obj.roshanKillsDay = message.roshanKillsDay);
    message.roshanKillsNight !== undefined && (obj.roshanKillsNight = message.roshanKillsNight);
    message.portalsUsed !== undefined && (obj.portalsUsed = message.portalsUsed);
    message.lanternsLit !== undefined && (obj.lanternsLit = message.lanternsLit);
    message.minibossKills !== undefined && (obj.minibossKills = message.minibossKills);
    message.outpostsCaptured !== undefined && (obj.outpostsCaptured = message.outpostsCaptured);
    message.shieldRunesGained !== undefined && (obj.shieldRunesGained = message.shieldRunesGained);
    return obj;
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

  fromJSON(object: any): CMsgGlobalMapStats {
    return {
      current: isSet(object.current) ? CMsgMapStatsSnapshot.fromJSON(object.current) : undefined,
      windowStart: isSet(object.windowStart) ? CMsgMapStatsSnapshot.fromJSON(object.windowStart) : undefined,
      windowEnd: isSet(object.windowEnd) ? CMsgMapStatsSnapshot.fromJSON(object.windowEnd) : undefined,
    };
  },

  toJSON(message: CMsgGlobalMapStats): unknown {
    const obj: any = {};
    message.current !== undefined &&
      (obj.current = message.current ? CMsgMapStatsSnapshot.toJSON(message.current) : undefined);
    message.windowStart !== undefined &&
      (obj.windowStart = message.windowStart ? CMsgMapStatsSnapshot.toJSON(message.windowStart) : undefined);
    message.windowEnd !== undefined &&
      (obj.windowEnd = message.windowEnd ? CMsgMapStatsSnapshot.toJSON(message.windowEnd) : undefined);
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
