/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export enum CMsgBattleReportHighlightType {
  k_eHighlightTypeInvalid = -1,
  k_eGameWinrate = 0,
  k_eLaneWinrate = 1,
  k_eMMRDelta = 2,
  k_eNumHeroesPlayed = 3,
  k_eNumGamesPlayed = 4,
  k_eAveragePowerRunesTaken = 5,
  k_eAverageBountyRunesTaken = 6,
  k_eTotalKillEnemyT1First = 7,
  k_eTotalRoshanKills = 8,
  k_eTotalDewards = 9,
  k_eTotalCampsStacked = 10,
  k_eMaxWinstreak = 11,
  k_eAverageDewards = 12,
  k_eAverageKills = 13,
  k_eMaxKills = 14,
  k_eAverageAssists = 15,
  k_eMaxAssists = 16,
  k_eAverageDeaths = 17,
  k_eMinDeaths = 18,
  k_eAverageCampsStacked = 19,
  k_eTotalLastHits = 20,
  k_eAverageLastHits = 21,
  k_eTotalDenies = 22,
  k_eAverageDenies = 23,
  k_eTotalGamesWithRoshanAdvantage = 24,
  k_ePercentGamesWithRoshanAdvantage = 25,
  k_eAverageStunDuration = 26,
  k_eTotalStunDuration = 27,
  k_eAverageTeleportsUsed = 28,
  k_eTotalTeleportsUsed = 29,
  k_eAverageHeroDamage = 30,
  k_eTotalHeroDamage = 31,
  k_eAverageHeroHealing = 32,
  k_eTotalHeroHealing = 33,
  k_eAverageTowerDamage = 34,
  k_eTotalTowerDamage = 35,
  k_eMaxLossStreak = 36,
  k_eAverageGameDuration = 37,
  k_eMaxGameDuration = 38,
  k_eMinGameDuration = 39,
  k_eAverageWinDuration = 40,
  k_eMaxWinDuration = 41,
  k_eMinWinDuration = 42,
  k_eAverageLossDuration = 43,
  k_eMaxLossDuration = 44,
  k_eMinLossDuration = 45,
  k_ePctGamesEnemyT1TakenFirst = 46,
  k_eMaxCampsStacked = 47,
  k_eMaxDewards = 48,
  k_eMaxRoshanKills = 49,
  k_eMaxBountyRunesTaken = 50,
  k_eMaxPowerRunesTaken = 51,
  k_eMaxDeaths = 52,
  k_eMaxLastHits = 53,
  k_eMaxDenies = 54,
  k_eRadiantWinRate = 55,
  k_eDireWinRate = 56,
  k_eRadiantGameCount = 57,
  k_eDireGameCount = 58,
  k_eMaxDamage = 59,
  k_eMaxHealing = 60,
  k_eMaxTowerDamage = 61,
  k_eAverageGPM = 62,
  k_eMaxGPM = 63,
  k_eAverageXPM = 64,
  k_eMaxXPM = 65,
}

export function cMsgBattleReportHighlightTypeFromJSON(object: any): CMsgBattleReportHighlightType {
  switch (object) {
    case -1:
    case "k_eHighlightTypeInvalid":
      return CMsgBattleReportHighlightType.k_eHighlightTypeInvalid;
    case 0:
    case "k_eGameWinrate":
      return CMsgBattleReportHighlightType.k_eGameWinrate;
    case 1:
    case "k_eLaneWinrate":
      return CMsgBattleReportHighlightType.k_eLaneWinrate;
    case 2:
    case "k_eMMRDelta":
      return CMsgBattleReportHighlightType.k_eMMRDelta;
    case 3:
    case "k_eNumHeroesPlayed":
      return CMsgBattleReportHighlightType.k_eNumHeroesPlayed;
    case 4:
    case "k_eNumGamesPlayed":
      return CMsgBattleReportHighlightType.k_eNumGamesPlayed;
    case 5:
    case "k_eAveragePowerRunesTaken":
      return CMsgBattleReportHighlightType.k_eAveragePowerRunesTaken;
    case 6:
    case "k_eAverageBountyRunesTaken":
      return CMsgBattleReportHighlightType.k_eAverageBountyRunesTaken;
    case 7:
    case "k_eTotalKillEnemyT1First":
      return CMsgBattleReportHighlightType.k_eTotalKillEnemyT1First;
    case 8:
    case "k_eTotalRoshanKills":
      return CMsgBattleReportHighlightType.k_eTotalRoshanKills;
    case 9:
    case "k_eTotalDewards":
      return CMsgBattleReportHighlightType.k_eTotalDewards;
    case 10:
    case "k_eTotalCampsStacked":
      return CMsgBattleReportHighlightType.k_eTotalCampsStacked;
    case 11:
    case "k_eMaxWinstreak":
      return CMsgBattleReportHighlightType.k_eMaxWinstreak;
    case 12:
    case "k_eAverageDewards":
      return CMsgBattleReportHighlightType.k_eAverageDewards;
    case 13:
    case "k_eAverageKills":
      return CMsgBattleReportHighlightType.k_eAverageKills;
    case 14:
    case "k_eMaxKills":
      return CMsgBattleReportHighlightType.k_eMaxKills;
    case 15:
    case "k_eAverageAssists":
      return CMsgBattleReportHighlightType.k_eAverageAssists;
    case 16:
    case "k_eMaxAssists":
      return CMsgBattleReportHighlightType.k_eMaxAssists;
    case 17:
    case "k_eAverageDeaths":
      return CMsgBattleReportHighlightType.k_eAverageDeaths;
    case 18:
    case "k_eMinDeaths":
      return CMsgBattleReportHighlightType.k_eMinDeaths;
    case 19:
    case "k_eAverageCampsStacked":
      return CMsgBattleReportHighlightType.k_eAverageCampsStacked;
    case 20:
    case "k_eTotalLastHits":
      return CMsgBattleReportHighlightType.k_eTotalLastHits;
    case 21:
    case "k_eAverageLastHits":
      return CMsgBattleReportHighlightType.k_eAverageLastHits;
    case 22:
    case "k_eTotalDenies":
      return CMsgBattleReportHighlightType.k_eTotalDenies;
    case 23:
    case "k_eAverageDenies":
      return CMsgBattleReportHighlightType.k_eAverageDenies;
    case 24:
    case "k_eTotalGamesWithRoshanAdvantage":
      return CMsgBattleReportHighlightType.k_eTotalGamesWithRoshanAdvantage;
    case 25:
    case "k_ePercentGamesWithRoshanAdvantage":
      return CMsgBattleReportHighlightType.k_ePercentGamesWithRoshanAdvantage;
    case 26:
    case "k_eAverageStunDuration":
      return CMsgBattleReportHighlightType.k_eAverageStunDuration;
    case 27:
    case "k_eTotalStunDuration":
      return CMsgBattleReportHighlightType.k_eTotalStunDuration;
    case 28:
    case "k_eAverageTeleportsUsed":
      return CMsgBattleReportHighlightType.k_eAverageTeleportsUsed;
    case 29:
    case "k_eTotalTeleportsUsed":
      return CMsgBattleReportHighlightType.k_eTotalTeleportsUsed;
    case 30:
    case "k_eAverageHeroDamage":
      return CMsgBattleReportHighlightType.k_eAverageHeroDamage;
    case 31:
    case "k_eTotalHeroDamage":
      return CMsgBattleReportHighlightType.k_eTotalHeroDamage;
    case 32:
    case "k_eAverageHeroHealing":
      return CMsgBattleReportHighlightType.k_eAverageHeroHealing;
    case 33:
    case "k_eTotalHeroHealing":
      return CMsgBattleReportHighlightType.k_eTotalHeroHealing;
    case 34:
    case "k_eAverageTowerDamage":
      return CMsgBattleReportHighlightType.k_eAverageTowerDamage;
    case 35:
    case "k_eTotalTowerDamage":
      return CMsgBattleReportHighlightType.k_eTotalTowerDamage;
    case 36:
    case "k_eMaxLossStreak":
      return CMsgBattleReportHighlightType.k_eMaxLossStreak;
    case 37:
    case "k_eAverageGameDuration":
      return CMsgBattleReportHighlightType.k_eAverageGameDuration;
    case 38:
    case "k_eMaxGameDuration":
      return CMsgBattleReportHighlightType.k_eMaxGameDuration;
    case 39:
    case "k_eMinGameDuration":
      return CMsgBattleReportHighlightType.k_eMinGameDuration;
    case 40:
    case "k_eAverageWinDuration":
      return CMsgBattleReportHighlightType.k_eAverageWinDuration;
    case 41:
    case "k_eMaxWinDuration":
      return CMsgBattleReportHighlightType.k_eMaxWinDuration;
    case 42:
    case "k_eMinWinDuration":
      return CMsgBattleReportHighlightType.k_eMinWinDuration;
    case 43:
    case "k_eAverageLossDuration":
      return CMsgBattleReportHighlightType.k_eAverageLossDuration;
    case 44:
    case "k_eMaxLossDuration":
      return CMsgBattleReportHighlightType.k_eMaxLossDuration;
    case 45:
    case "k_eMinLossDuration":
      return CMsgBattleReportHighlightType.k_eMinLossDuration;
    case 46:
    case "k_ePctGamesEnemyT1TakenFirst":
      return CMsgBattleReportHighlightType.k_ePctGamesEnemyT1TakenFirst;
    case 47:
    case "k_eMaxCampsStacked":
      return CMsgBattleReportHighlightType.k_eMaxCampsStacked;
    case 48:
    case "k_eMaxDewards":
      return CMsgBattleReportHighlightType.k_eMaxDewards;
    case 49:
    case "k_eMaxRoshanKills":
      return CMsgBattleReportHighlightType.k_eMaxRoshanKills;
    case 50:
    case "k_eMaxBountyRunesTaken":
      return CMsgBattleReportHighlightType.k_eMaxBountyRunesTaken;
    case 51:
    case "k_eMaxPowerRunesTaken":
      return CMsgBattleReportHighlightType.k_eMaxPowerRunesTaken;
    case 52:
    case "k_eMaxDeaths":
      return CMsgBattleReportHighlightType.k_eMaxDeaths;
    case 53:
    case "k_eMaxLastHits":
      return CMsgBattleReportHighlightType.k_eMaxLastHits;
    case 54:
    case "k_eMaxDenies":
      return CMsgBattleReportHighlightType.k_eMaxDenies;
    case 55:
    case "k_eRadiantWinRate":
      return CMsgBattleReportHighlightType.k_eRadiantWinRate;
    case 56:
    case "k_eDireWinRate":
      return CMsgBattleReportHighlightType.k_eDireWinRate;
    case 57:
    case "k_eRadiantGameCount":
      return CMsgBattleReportHighlightType.k_eRadiantGameCount;
    case 58:
    case "k_eDireGameCount":
      return CMsgBattleReportHighlightType.k_eDireGameCount;
    case 59:
    case "k_eMaxDamage":
      return CMsgBattleReportHighlightType.k_eMaxDamage;
    case 60:
    case "k_eMaxHealing":
      return CMsgBattleReportHighlightType.k_eMaxHealing;
    case 61:
    case "k_eMaxTowerDamage":
      return CMsgBattleReportHighlightType.k_eMaxTowerDamage;
    case 62:
    case "k_eAverageGPM":
      return CMsgBattleReportHighlightType.k_eAverageGPM;
    case 63:
    case "k_eMaxGPM":
      return CMsgBattleReportHighlightType.k_eMaxGPM;
    case 64:
    case "k_eAverageXPM":
      return CMsgBattleReportHighlightType.k_eAverageXPM;
    case 65:
    case "k_eMaxXPM":
      return CMsgBattleReportHighlightType.k_eMaxXPM;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgBattleReportHighlightType",
      );
  }
}

export function cMsgBattleReportHighlightTypeToJSON(object: CMsgBattleReportHighlightType): string {
  switch (object) {
    case CMsgBattleReportHighlightType.k_eHighlightTypeInvalid:
      return "k_eHighlightTypeInvalid";
    case CMsgBattleReportHighlightType.k_eGameWinrate:
      return "k_eGameWinrate";
    case CMsgBattleReportHighlightType.k_eLaneWinrate:
      return "k_eLaneWinrate";
    case CMsgBattleReportHighlightType.k_eMMRDelta:
      return "k_eMMRDelta";
    case CMsgBattleReportHighlightType.k_eNumHeroesPlayed:
      return "k_eNumHeroesPlayed";
    case CMsgBattleReportHighlightType.k_eNumGamesPlayed:
      return "k_eNumGamesPlayed";
    case CMsgBattleReportHighlightType.k_eAveragePowerRunesTaken:
      return "k_eAveragePowerRunesTaken";
    case CMsgBattleReportHighlightType.k_eAverageBountyRunesTaken:
      return "k_eAverageBountyRunesTaken";
    case CMsgBattleReportHighlightType.k_eTotalKillEnemyT1First:
      return "k_eTotalKillEnemyT1First";
    case CMsgBattleReportHighlightType.k_eTotalRoshanKills:
      return "k_eTotalRoshanKills";
    case CMsgBattleReportHighlightType.k_eTotalDewards:
      return "k_eTotalDewards";
    case CMsgBattleReportHighlightType.k_eTotalCampsStacked:
      return "k_eTotalCampsStacked";
    case CMsgBattleReportHighlightType.k_eMaxWinstreak:
      return "k_eMaxWinstreak";
    case CMsgBattleReportHighlightType.k_eAverageDewards:
      return "k_eAverageDewards";
    case CMsgBattleReportHighlightType.k_eAverageKills:
      return "k_eAverageKills";
    case CMsgBattleReportHighlightType.k_eMaxKills:
      return "k_eMaxKills";
    case CMsgBattleReportHighlightType.k_eAverageAssists:
      return "k_eAverageAssists";
    case CMsgBattleReportHighlightType.k_eMaxAssists:
      return "k_eMaxAssists";
    case CMsgBattleReportHighlightType.k_eAverageDeaths:
      return "k_eAverageDeaths";
    case CMsgBattleReportHighlightType.k_eMinDeaths:
      return "k_eMinDeaths";
    case CMsgBattleReportHighlightType.k_eAverageCampsStacked:
      return "k_eAverageCampsStacked";
    case CMsgBattleReportHighlightType.k_eTotalLastHits:
      return "k_eTotalLastHits";
    case CMsgBattleReportHighlightType.k_eAverageLastHits:
      return "k_eAverageLastHits";
    case CMsgBattleReportHighlightType.k_eTotalDenies:
      return "k_eTotalDenies";
    case CMsgBattleReportHighlightType.k_eAverageDenies:
      return "k_eAverageDenies";
    case CMsgBattleReportHighlightType.k_eTotalGamesWithRoshanAdvantage:
      return "k_eTotalGamesWithRoshanAdvantage";
    case CMsgBattleReportHighlightType.k_ePercentGamesWithRoshanAdvantage:
      return "k_ePercentGamesWithRoshanAdvantage";
    case CMsgBattleReportHighlightType.k_eAverageStunDuration:
      return "k_eAverageStunDuration";
    case CMsgBattleReportHighlightType.k_eTotalStunDuration:
      return "k_eTotalStunDuration";
    case CMsgBattleReportHighlightType.k_eAverageTeleportsUsed:
      return "k_eAverageTeleportsUsed";
    case CMsgBattleReportHighlightType.k_eTotalTeleportsUsed:
      return "k_eTotalTeleportsUsed";
    case CMsgBattleReportHighlightType.k_eAverageHeroDamage:
      return "k_eAverageHeroDamage";
    case CMsgBattleReportHighlightType.k_eTotalHeroDamage:
      return "k_eTotalHeroDamage";
    case CMsgBattleReportHighlightType.k_eAverageHeroHealing:
      return "k_eAverageHeroHealing";
    case CMsgBattleReportHighlightType.k_eTotalHeroHealing:
      return "k_eTotalHeroHealing";
    case CMsgBattleReportHighlightType.k_eAverageTowerDamage:
      return "k_eAverageTowerDamage";
    case CMsgBattleReportHighlightType.k_eTotalTowerDamage:
      return "k_eTotalTowerDamage";
    case CMsgBattleReportHighlightType.k_eMaxLossStreak:
      return "k_eMaxLossStreak";
    case CMsgBattleReportHighlightType.k_eAverageGameDuration:
      return "k_eAverageGameDuration";
    case CMsgBattleReportHighlightType.k_eMaxGameDuration:
      return "k_eMaxGameDuration";
    case CMsgBattleReportHighlightType.k_eMinGameDuration:
      return "k_eMinGameDuration";
    case CMsgBattleReportHighlightType.k_eAverageWinDuration:
      return "k_eAverageWinDuration";
    case CMsgBattleReportHighlightType.k_eMaxWinDuration:
      return "k_eMaxWinDuration";
    case CMsgBattleReportHighlightType.k_eMinWinDuration:
      return "k_eMinWinDuration";
    case CMsgBattleReportHighlightType.k_eAverageLossDuration:
      return "k_eAverageLossDuration";
    case CMsgBattleReportHighlightType.k_eMaxLossDuration:
      return "k_eMaxLossDuration";
    case CMsgBattleReportHighlightType.k_eMinLossDuration:
      return "k_eMinLossDuration";
    case CMsgBattleReportHighlightType.k_ePctGamesEnemyT1TakenFirst:
      return "k_ePctGamesEnemyT1TakenFirst";
    case CMsgBattleReportHighlightType.k_eMaxCampsStacked:
      return "k_eMaxCampsStacked";
    case CMsgBattleReportHighlightType.k_eMaxDewards:
      return "k_eMaxDewards";
    case CMsgBattleReportHighlightType.k_eMaxRoshanKills:
      return "k_eMaxRoshanKills";
    case CMsgBattleReportHighlightType.k_eMaxBountyRunesTaken:
      return "k_eMaxBountyRunesTaken";
    case CMsgBattleReportHighlightType.k_eMaxPowerRunesTaken:
      return "k_eMaxPowerRunesTaken";
    case CMsgBattleReportHighlightType.k_eMaxDeaths:
      return "k_eMaxDeaths";
    case CMsgBattleReportHighlightType.k_eMaxLastHits:
      return "k_eMaxLastHits";
    case CMsgBattleReportHighlightType.k_eMaxDenies:
      return "k_eMaxDenies";
    case CMsgBattleReportHighlightType.k_eRadiantWinRate:
      return "k_eRadiantWinRate";
    case CMsgBattleReportHighlightType.k_eDireWinRate:
      return "k_eDireWinRate";
    case CMsgBattleReportHighlightType.k_eRadiantGameCount:
      return "k_eRadiantGameCount";
    case CMsgBattleReportHighlightType.k_eDireGameCount:
      return "k_eDireGameCount";
    case CMsgBattleReportHighlightType.k_eMaxDamage:
      return "k_eMaxDamage";
    case CMsgBattleReportHighlightType.k_eMaxHealing:
      return "k_eMaxHealing";
    case CMsgBattleReportHighlightType.k_eMaxTowerDamage:
      return "k_eMaxTowerDamage";
    case CMsgBattleReportHighlightType.k_eAverageGPM:
      return "k_eAverageGPM";
    case CMsgBattleReportHighlightType.k_eMaxGPM:
      return "k_eMaxGPM";
    case CMsgBattleReportHighlightType.k_eAverageXPM:
      return "k_eAverageXPM";
    case CMsgBattleReportHighlightType.k_eMaxXPM:
      return "k_eMaxXPM";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgBattleReportHighlightType",
      );
  }
}

export enum CMsgBattleReportHighlightCategory {
  k_eHighlightGeneral = 0,
  k_eHighlightHero = 1,
  k_eHighlightRole = 2,
}

export function cMsgBattleReportHighlightCategoryFromJSON(object: any): CMsgBattleReportHighlightCategory {
  switch (object) {
    case 0:
    case "k_eHighlightGeneral":
      return CMsgBattleReportHighlightCategory.k_eHighlightGeneral;
    case 1:
    case "k_eHighlightHero":
      return CMsgBattleReportHighlightCategory.k_eHighlightHero;
    case 2:
    case "k_eHighlightRole":
      return CMsgBattleReportHighlightCategory.k_eHighlightRole;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgBattleReportHighlightCategory",
      );
  }
}

export function cMsgBattleReportHighlightCategoryToJSON(object: CMsgBattleReportHighlightCategory): string {
  switch (object) {
    case CMsgBattleReportHighlightCategory.k_eHighlightGeneral:
      return "k_eHighlightGeneral";
    case CMsgBattleReportHighlightCategory.k_eHighlightHero:
      return "k_eHighlightHero";
    case CMsgBattleReportHighlightCategory.k_eHighlightRole:
      return "k_eHighlightRole";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgBattleReportHighlightCategory",
      );
  }
}

export enum CMsgBattleReportRole {
  k_eUnknownRole = -1,
  k_eSafelane = 0,
  k_eMidlane = 1,
  k_eOfflane = 2,
  k_eSoftSupport = 3,
  k_eHardSupport = 4,
}

export function cMsgBattleReportRoleFromJSON(object: any): CMsgBattleReportRole {
  switch (object) {
    case -1:
    case "k_eUnknownRole":
      return CMsgBattleReportRole.k_eUnknownRole;
    case 0:
    case "k_eSafelane":
      return CMsgBattleReportRole.k_eSafelane;
    case 1:
    case "k_eMidlane":
      return CMsgBattleReportRole.k_eMidlane;
    case 2:
    case "k_eOfflane":
      return CMsgBattleReportRole.k_eOfflane;
    case 3:
    case "k_eSoftSupport":
      return CMsgBattleReportRole.k_eSoftSupport;
    case 4:
    case "k_eHardSupport":
      return CMsgBattleReportRole.k_eHardSupport;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgBattleReportRole");
  }
}

export function cMsgBattleReportRoleToJSON(object: CMsgBattleReportRole): string {
  switch (object) {
    case CMsgBattleReportRole.k_eUnknownRole:
      return "k_eUnknownRole";
    case CMsgBattleReportRole.k_eSafelane:
      return "k_eSafelane";
    case CMsgBattleReportRole.k_eMidlane:
      return "k_eMidlane";
    case CMsgBattleReportRole.k_eOfflane:
      return "k_eOfflane";
    case CMsgBattleReportRole.k_eSoftSupport:
      return "k_eSoftSupport";
    case CMsgBattleReportRole.k_eHardSupport:
      return "k_eHardSupport";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgBattleReportRole");
  }
}

export enum CMsgBattleReportCompareContext {
  k_eCompareContextInvalid = -1,
  k_eAbsoluteValue = 0,
  k_ePlayersOfSimilarRank = 1,
  k_eAllPlayers = 2,
  k_ePlayersPersonalHistory = 3,
}

export function cMsgBattleReportCompareContextFromJSON(object: any): CMsgBattleReportCompareContext {
  switch (object) {
    case -1:
    case "k_eCompareContextInvalid":
      return CMsgBattleReportCompareContext.k_eCompareContextInvalid;
    case 0:
    case "k_eAbsoluteValue":
      return CMsgBattleReportCompareContext.k_eAbsoluteValue;
    case 1:
    case "k_ePlayersOfSimilarRank":
      return CMsgBattleReportCompareContext.k_ePlayersOfSimilarRank;
    case 2:
    case "k_eAllPlayers":
      return CMsgBattleReportCompareContext.k_eAllPlayers;
    case 3:
    case "k_ePlayersPersonalHistory":
      return CMsgBattleReportCompareContext.k_ePlayersPersonalHistory;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgBattleReportCompareContext",
      );
  }
}

export function cMsgBattleReportCompareContextToJSON(object: CMsgBattleReportCompareContext): string {
  switch (object) {
    case CMsgBattleReportCompareContext.k_eCompareContextInvalid:
      return "k_eCompareContextInvalid";
    case CMsgBattleReportCompareContext.k_eAbsoluteValue:
      return "k_eAbsoluteValue";
    case CMsgBattleReportCompareContext.k_ePlayersOfSimilarRank:
      return "k_ePlayersOfSimilarRank";
    case CMsgBattleReportCompareContext.k_eAllPlayers:
      return "k_eAllPlayers";
    case CMsgBattleReportCompareContext.k_ePlayersPersonalHistory:
      return "k_ePlayersPersonalHistory";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgBattleReportCompareContext",
      );
  }
}

export enum CMsgBattleReportHighlightTier {
  k_eHighlightTierLow = -1,
  k_eHighlightTierNone = 0,
  k_eHighlightTier1 = 1,
  k_eHighlightTier2 = 2,
  k_eHighlightTier3 = 3,
  k_eHighlightTierCustom = 4,
}

export function cMsgBattleReportHighlightTierFromJSON(object: any): CMsgBattleReportHighlightTier {
  switch (object) {
    case -1:
    case "k_eHighlightTierLow":
      return CMsgBattleReportHighlightTier.k_eHighlightTierLow;
    case 0:
    case "k_eHighlightTierNone":
      return CMsgBattleReportHighlightTier.k_eHighlightTierNone;
    case 1:
    case "k_eHighlightTier1":
      return CMsgBattleReportHighlightTier.k_eHighlightTier1;
    case 2:
    case "k_eHighlightTier2":
      return CMsgBattleReportHighlightTier.k_eHighlightTier2;
    case 3:
    case "k_eHighlightTier3":
      return CMsgBattleReportHighlightTier.k_eHighlightTier3;
    case 4:
    case "k_eHighlightTierCustom":
      return CMsgBattleReportHighlightTier.k_eHighlightTierCustom;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgBattleReportHighlightTier",
      );
  }
}

export function cMsgBattleReportHighlightTierToJSON(object: CMsgBattleReportHighlightTier): string {
  switch (object) {
    case CMsgBattleReportHighlightTier.k_eHighlightTierLow:
      return "k_eHighlightTierLow";
    case CMsgBattleReportHighlightTier.k_eHighlightTierNone:
      return "k_eHighlightTierNone";
    case CMsgBattleReportHighlightTier.k_eHighlightTier1:
      return "k_eHighlightTier1";
    case CMsgBattleReportHighlightTier.k_eHighlightTier2:
      return "k_eHighlightTier2";
    case CMsgBattleReportHighlightTier.k_eHighlightTier3:
      return "k_eHighlightTier3";
    case CMsgBattleReportHighlightTier.k_eHighlightTierCustom:
      return "k_eHighlightTierCustom";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgBattleReportHighlightTier",
      );
  }
}

export enum CMsgBattleReportHighlightRarity {
  k_eHighlightCommon = 0,
  k_eHighlightUncommon = 1,
  k_eHighlightRare = 2,
}

export function cMsgBattleReportHighlightRarityFromJSON(object: any): CMsgBattleReportHighlightRarity {
  switch (object) {
    case 0:
    case "k_eHighlightCommon":
      return CMsgBattleReportHighlightRarity.k_eHighlightCommon;
    case 1:
    case "k_eHighlightUncommon":
      return CMsgBattleReportHighlightRarity.k_eHighlightUncommon;
    case 2:
    case "k_eHighlightRare":
      return CMsgBattleReportHighlightRarity.k_eHighlightRare;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgBattleReportHighlightRarity",
      );
  }
}

export function cMsgBattleReportHighlightRarityToJSON(object: CMsgBattleReportHighlightRarity): string {
  switch (object) {
    case CMsgBattleReportHighlightRarity.k_eHighlightCommon:
      return "k_eHighlightCommon";
    case CMsgBattleReportHighlightRarity.k_eHighlightUncommon:
      return "k_eHighlightUncommon";
    case CMsgBattleReportHighlightRarity.k_eHighlightRare:
      return "k_eHighlightRare";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgBattleReportHighlightRarity",
      );
  }
}

export enum CMsgBattleReportEOutcome {
  k_eWin = 0,
  k_eLoss = 1,
}

export function cMsgBattleReportEOutcomeFromJSON(object: any): CMsgBattleReportEOutcome {
  switch (object) {
    case 0:
    case "k_eWin":
      return CMsgBattleReportEOutcome.k_eWin;
    case 1:
    case "k_eLoss":
      return CMsgBattleReportEOutcome.k_eLoss;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgBattleReportEOutcome");
  }
}

export function cMsgBattleReportEOutcomeToJSON(object: CMsgBattleReportEOutcome): string {
  switch (object) {
    case CMsgBattleReportEOutcome.k_eWin:
      return "k_eWin";
    case CMsgBattleReportEOutcome.k_eLoss:
      return "k_eLoss";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgBattleReportEOutcome");
  }
}

export enum CMsgBattleReportELaneOutcome {
  k_eUnknownLaneOutcome = -1,
  k_eWonLane = 0,
  k_eLostLane = 1,
  k_eEvenLane = 2,
}

export function cMsgBattleReportELaneOutcomeFromJSON(object: any): CMsgBattleReportELaneOutcome {
  switch (object) {
    case -1:
    case "k_eUnknownLaneOutcome":
      return CMsgBattleReportELaneOutcome.k_eUnknownLaneOutcome;
    case 0:
    case "k_eWonLane":
      return CMsgBattleReportELaneOutcome.k_eWonLane;
    case 1:
    case "k_eLostLane":
      return CMsgBattleReportELaneOutcome.k_eLostLane;
    case 2:
    case "k_eEvenLane":
      return CMsgBattleReportELaneOutcome.k_eEvenLane;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgBattleReportELaneOutcome");
  }
}

export function cMsgBattleReportELaneOutcomeToJSON(object: CMsgBattleReportELaneOutcome): string {
  switch (object) {
    case CMsgBattleReportELaneOutcome.k_eUnknownLaneOutcome:
      return "k_eUnknownLaneOutcome";
    case CMsgBattleReportELaneOutcome.k_eWonLane:
      return "k_eWonLane";
    case CMsgBattleReportELaneOutcome.k_eLostLane:
      return "k_eLostLane";
    case CMsgBattleReportELaneOutcome.k_eEvenLane:
      return "k_eEvenLane";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgBattleReportELaneOutcome");
  }
}

export interface CMsgClientToGCGetBattleReport {
  accountId: number;
  timestamp: number;
  duration: number;
}

export interface CMsgBattleReportGame {
  heroId: number;
  kills: number;
  deaths: number;
  assists: number;
  rankChange: number;
  lastHits: number;
  denies: number;
  gpm: number;
  xpm: number;
  role: CMsgBattleReportRole;
  outcome: CMsgBattleReportEOutcome;
  laneOutcome: CMsgBattleReportELaneOutcome;
  ranked: boolean;
  matchId: string;
  laneSelectionFlags: number;
  predictedPosition: number;
  secondsDead: number;
  winningTeam: number;
  playerSlot: number;
  partyGame: boolean;
  startTime: number;
  bountyRunes: number;
  waterRunes: number;
  powerRunes: number;
  timeEnemyT1TowerDestroyed: number;
  timeFriendlyT1TowerDestroyed: number;
  enemyRoshanKills: number;
  teleportsUsed: number;
  dewards: number;
  campsStacked: number;
  supportGold: number;
  heroDamage: number;
  heroHealing: number;
  towerDamage: number;
  successfulSmokes: number;
  stunDuration: number;
  duration: number;
  friendlyRoshanKills: number;
  previousRank: number;
  gameMode: number;
  lobbyType: number;
  timePurchasedShard: number;
  timePurchasedScepter: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
}

export interface CMsgBattleReportGameList {
  games: CMsgBattleReportGame[];
}

export interface CMsgBattleReport {
  games: CMsgBattleReportGame[];
  highlights: CMsgBattleReportHighlights | undefined;
}

export interface CMsgBattleReport_HighlightGeneral {
  winLossWindow: number;
  winPercent: number;
  mmrDelta: number;
  highlightScore: number;
}

export interface CMsgBattleReport_Highlight {
  highlightId: number;
  category: CMsgBattleReportHighlightCategory;
  tier: CMsgBattleReportHighlightTier;
  rarity: CMsgBattleReportHighlightRarity;
  score: number;
  confidence: number;
  heroId: number;
  role: CMsgBattleReportRole;
  comparisonDeltaValue: number;
  context: CMsgBattleReportCompareContext;
}

export interface CMsgBattleReportInfo {
  timestamp: number;
  duration: number;
  acknowledged: boolean;
  featuredHeroId: number;
  featuredPosition: number;
  gamesPlayed: number;
  medalCounts: number[];
}

export interface CMsgBattleReportInfoList {
  battleReportInfo: CMsgBattleReportInfo[];
}

export interface CMsgBattleReportHighlights {
  highlights: CMsgBattleReport_Highlight[];
}

export interface CMsgBattleReportAggregateStats {
  result: CMsgBattleReportAggregateStats_CMsgBattleReportAggregate[];
}

export interface CMsgBattleReportAggregateStats_CMsgBattleReportStat {
  mean: number;
  stdev: number;
}

export interface CMsgBattleReportAggregateStats_CMsgBattleReportAggregate {
  heroId: number;
  predictedPosition: number;
  gameCount: number;
  winCount: number;
  laneWinCount: number;
  kills: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  deaths: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  assists: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  rankChange: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  lastHits: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  denies: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  gpm: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  xpm: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  secondsDead: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  bountyRunes: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  waterRunes: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  powerRunes: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  timeEnemyT1TowerDestroyed: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  timeFriendlyT1TowerDestroyed: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  enemyRoshanKills: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  teleportsUsed: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  dewards: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  campsStacked: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  supportGold: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  heroDamage: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  heroHealing: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  towerDamage: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  successfulSmokes: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  stunDuration: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  duration: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
  friendlyRoshanKills: CMsgBattleReportAggregateStats_CMsgBattleReportStat | undefined;
}

export interface CMsgBattleReportAggregatedGeneralStats {
}

export interface CMsgClientToGCGetBattleReportResponse {
  report: CMsgBattleReport | undefined;
  response: CMsgClientToGCGetBattleReportResponse_EResponse;
  aggregateStats: CMsgBattleReportAggregateStats | undefined;
  info: CMsgBattleReportInfo | undefined;
}

export enum CMsgClientToGCGetBattleReportResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_ePermissionDenied = 4,
  k_eNotSubscribedToDotaPlus = 5,
  k_eInvalidParameters = 6,
  k_eUnableToGetPlusSubInfo = 7,
  k_eUnableToLoadBattleReport = 8,
  k_eUnableToSaveBattleReport = 9,
  k_eUnableToGetAggregates = 10,
  k_eNotEnoughGamesPlayed = 11,
}

export function cMsgClientToGCGetBattleReportResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCGetBattleReportResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCGetBattleReportResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCGetBattleReportResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCGetBattleReportResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCGetBattleReportResponse_EResponse.k_eDisabled;
    case 4:
    case "k_ePermissionDenied":
      return CMsgClientToGCGetBattleReportResponse_EResponse.k_ePermissionDenied;
    case 5:
    case "k_eNotSubscribedToDotaPlus":
      return CMsgClientToGCGetBattleReportResponse_EResponse.k_eNotSubscribedToDotaPlus;
    case 6:
    case "k_eInvalidParameters":
      return CMsgClientToGCGetBattleReportResponse_EResponse.k_eInvalidParameters;
    case 7:
    case "k_eUnableToGetPlusSubInfo":
      return CMsgClientToGCGetBattleReportResponse_EResponse.k_eUnableToGetPlusSubInfo;
    case 8:
    case "k_eUnableToLoadBattleReport":
      return CMsgClientToGCGetBattleReportResponse_EResponse.k_eUnableToLoadBattleReport;
    case 9:
    case "k_eUnableToSaveBattleReport":
      return CMsgClientToGCGetBattleReportResponse_EResponse.k_eUnableToSaveBattleReport;
    case 10:
    case "k_eUnableToGetAggregates":
      return CMsgClientToGCGetBattleReportResponse_EResponse.k_eUnableToGetAggregates;
    case 11:
    case "k_eNotEnoughGamesPlayed":
      return CMsgClientToGCGetBattleReportResponse_EResponse.k_eNotEnoughGamesPlayed;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCGetBattleReportResponse_EResponse",
      );
  }
}

export function cMsgClientToGCGetBattleReportResponse_EResponseToJSON(
  object: CMsgClientToGCGetBattleReportResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCGetBattleReportResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCGetBattleReportResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCGetBattleReportResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCGetBattleReportResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCGetBattleReportResponse_EResponse.k_ePermissionDenied:
      return "k_ePermissionDenied";
    case CMsgClientToGCGetBattleReportResponse_EResponse.k_eNotSubscribedToDotaPlus:
      return "k_eNotSubscribedToDotaPlus";
    case CMsgClientToGCGetBattleReportResponse_EResponse.k_eInvalidParameters:
      return "k_eInvalidParameters";
    case CMsgClientToGCGetBattleReportResponse_EResponse.k_eUnableToGetPlusSubInfo:
      return "k_eUnableToGetPlusSubInfo";
    case CMsgClientToGCGetBattleReportResponse_EResponse.k_eUnableToLoadBattleReport:
      return "k_eUnableToLoadBattleReport";
    case CMsgClientToGCGetBattleReportResponse_EResponse.k_eUnableToSaveBattleReport:
      return "k_eUnableToSaveBattleReport";
    case CMsgClientToGCGetBattleReportResponse_EResponse.k_eUnableToGetAggregates:
      return "k_eUnableToGetAggregates";
    case CMsgClientToGCGetBattleReportResponse_EResponse.k_eNotEnoughGamesPlayed:
      return "k_eNotEnoughGamesPlayed";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCGetBattleReportResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCGetBattleReportAggregateStats {
  aggregateKeys: CMsgClientToGCGetBattleReportAggregateStats_CMsgBattleReportAggregateKey[];
  timestamp: number;
  duration: number;
  rank: number;
}

export interface CMsgClientToGCGetBattleReportAggregateStats_CMsgBattleReportAggregateKey {
  heroId: number;
  predictedPosition: number;
}

export interface CMsgClientToGCGetBattleReportAggregateStatsResponse {
  aggregateStats: CMsgBattleReportAggregateStats | undefined;
  response: CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse;
}

export enum CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_ePermissionDenied = 4,
  k_eInvalidParams = 5,
  k_eNotSubscribedToDotaPlus = 6,
}

export function cMsgClientToGCGetBattleReportAggregateStatsResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse.k_eDisabled;
    case 4:
    case "k_ePermissionDenied":
      return CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse.k_ePermissionDenied;
    case 5:
    case "k_eInvalidParams":
      return CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse.k_eInvalidParams;
    case 6:
    case "k_eNotSubscribedToDotaPlus":
      return CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse.k_eNotSubscribedToDotaPlus;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse",
      );
  }
}

export function cMsgClientToGCGetBattleReportAggregateStatsResponse_EResponseToJSON(
  object: CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse.k_ePermissionDenied:
      return "k_ePermissionDenied";
    case CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse.k_eInvalidParams:
      return "k_eInvalidParams";
    case CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse.k_eNotSubscribedToDotaPlus:
      return "k_eNotSubscribedToDotaPlus";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCGetBattleReportAggregateStatsResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCGetBattleReportInfo {
  accountId: number;
}

export interface CMsgClientToGCGetBattleReportInfoResponse {
  battleReportInfoList: CMsgBattleReportInfoList | undefined;
  response: CMsgClientToGCGetBattleReportInfoResponse_EResponse;
}

export enum CMsgClientToGCGetBattleReportInfoResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_ePermissionDenied = 4,
  k_eNotSubscribedToDotaPlus = 5,
}

export function cMsgClientToGCGetBattleReportInfoResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCGetBattleReportInfoResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCGetBattleReportInfoResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCGetBattleReportInfoResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCGetBattleReportInfoResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCGetBattleReportInfoResponse_EResponse.k_eDisabled;
    case 4:
    case "k_ePermissionDenied":
      return CMsgClientToGCGetBattleReportInfoResponse_EResponse.k_ePermissionDenied;
    case 5:
    case "k_eNotSubscribedToDotaPlus":
      return CMsgClientToGCGetBattleReportInfoResponse_EResponse.k_eNotSubscribedToDotaPlus;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCGetBattleReportInfoResponse_EResponse",
      );
  }
}

export function cMsgClientToGCGetBattleReportInfoResponse_EResponseToJSON(
  object: CMsgClientToGCGetBattleReportInfoResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCGetBattleReportInfoResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCGetBattleReportInfoResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCGetBattleReportInfoResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCGetBattleReportInfoResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCGetBattleReportInfoResponse_EResponse.k_ePermissionDenied:
      return "k_ePermissionDenied";
    case CMsgClientToGCGetBattleReportInfoResponse_EResponse.k_eNotSubscribedToDotaPlus:
      return "k_eNotSubscribedToDotaPlus";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCGetBattleReportInfoResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCAcknowledgeBattleReport {
  accountId: number;
  timestamp: number;
  duration: number;
}

export interface CMsgClientToGCAcknowledgeBattleReportResponse {
  response: CMsgClientToGCAcknowledgeBattleReportResponse_EResponse;
  shardsAwarded: number;
}

export enum CMsgClientToGCAcknowledgeBattleReportResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_ePermissionDenied = 5,
  k_eUnableToLoadBattleReport = 6,
  k_eAlreadyAcknowledged = 7,
  k_eUnknownReport = 8,
  k_eNotSubscribedToDotaPlus = 9,
  k_eNotEnoughGamesPlayed = 10,
}

export function cMsgClientToGCAcknowledgeBattleReportResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCAcknowledgeBattleReportResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eTimeout;
    case 5:
    case "k_ePermissionDenied":
      return CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_ePermissionDenied;
    case 6:
    case "k_eUnableToLoadBattleReport":
      return CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eUnableToLoadBattleReport;
    case 7:
    case "k_eAlreadyAcknowledged":
      return CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eAlreadyAcknowledged;
    case 8:
    case "k_eUnknownReport":
      return CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eUnknownReport;
    case 9:
    case "k_eNotSubscribedToDotaPlus":
      return CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eNotSubscribedToDotaPlus;
    case 10:
    case "k_eNotEnoughGamesPlayed":
      return CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eNotEnoughGamesPlayed;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCAcknowledgeBattleReportResponse_EResponse",
      );
  }
}

export function cMsgClientToGCAcknowledgeBattleReportResponse_EResponseToJSON(
  object: CMsgClientToGCAcknowledgeBattleReportResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_ePermissionDenied:
      return "k_ePermissionDenied";
    case CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eUnableToLoadBattleReport:
      return "k_eUnableToLoadBattleReport";
    case CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eAlreadyAcknowledged:
      return "k_eAlreadyAcknowledged";
    case CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eUnknownReport:
      return "k_eUnknownReport";
    case CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eNotSubscribedToDotaPlus:
      return "k_eNotSubscribedToDotaPlus";
    case CMsgClientToGCAcknowledgeBattleReportResponse_EResponse.k_eNotEnoughGamesPlayed:
      return "k_eNotEnoughGamesPlayed";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCAcknowledgeBattleReportResponse_EResponse",
      );
  }
}

export interface CMsgClientToGCGetBattleReportMatchHistory {
  accountId: number;
  timestamp: number;
  duration: number;
}

export interface CMsgClientToGCGetBattleReportMatchHistoryResponse {
  response: CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse;
  games: CMsgBattleReportGameList | undefined;
}

export enum CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_ePermissionDenied = 5,
  k_eNotSubscribedToDotaPlus = 6,
}

export function cMsgClientToGCGetBattleReportMatchHistoryResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse.k_eTimeout;
    case 5:
    case "k_ePermissionDenied":
      return CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse.k_ePermissionDenied;
    case 6:
    case "k_eNotSubscribedToDotaPlus":
      return CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse.k_eNotSubscribedToDotaPlus;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse",
      );
  }
}

export function cMsgClientToGCGetBattleReportMatchHistoryResponse_EResponseToJSON(
  object: CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse.k_ePermissionDenied:
      return "k_ePermissionDenied";
    case CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse.k_eNotSubscribedToDotaPlus:
      return "k_eNotSubscribedToDotaPlus";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCGetBattleReportMatchHistoryResponse_EResponse",
      );
  }
}

function createBaseCMsgClientToGCGetBattleReport(): CMsgClientToGCGetBattleReport {
  return { accountId: 0, timestamp: 0, duration: 0 };
}

export const CMsgClientToGCGetBattleReport = {
  encode(message: CMsgClientToGCGetBattleReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.duration !== 0) {
      writer.uint32(24).uint32(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetBattleReport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetBattleReport();
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

          message.duration = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCGetBattleReport {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: CMsgClientToGCGetBattleReport): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    return obj;
  },
};

function createBaseCMsgBattleReportGame(): CMsgBattleReportGame {
  return {
    heroId: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
    rankChange: 0,
    lastHits: 0,
    denies: 0,
    gpm: 0,
    xpm: 0,
    role: 0,
    outcome: 0,
    laneOutcome: 0,
    ranked: false,
    matchId: "0",
    laneSelectionFlags: 0,
    predictedPosition: 0,
    secondsDead: 0,
    winningTeam: 0,
    playerSlot: 0,
    partyGame: false,
    startTime: 0,
    bountyRunes: 0,
    waterRunes: 0,
    powerRunes: 0,
    timeEnemyT1TowerDestroyed: 0,
    timeFriendlyT1TowerDestroyed: 0,
    enemyRoshanKills: 0,
    teleportsUsed: 0,
    dewards: 0,
    campsStacked: 0,
    supportGold: 0,
    heroDamage: 0,
    heroHealing: 0,
    towerDamage: 0,
    successfulSmokes: 0,
    stunDuration: 0,
    duration: 0,
    friendlyRoshanKills: 0,
    previousRank: 0,
    gameMode: 0,
    lobbyType: 0,
    timePurchasedShard: 0,
    timePurchasedScepter: 0,
    item0: 0,
    item1: 0,
    item2: 0,
    item3: 0,
    item4: 0,
    item5: 0,
  };
}

export const CMsgBattleReportGame = {
  encode(message: CMsgBattleReportGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
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
    if (message.rankChange !== 0) {
      writer.uint32(40).int32(message.rankChange);
    }
    if (message.lastHits !== 0) {
      writer.uint32(48).uint32(message.lastHits);
    }
    if (message.denies !== 0) {
      writer.uint32(168).uint32(message.denies);
    }
    if (message.gpm !== 0) {
      writer.uint32(56).uint32(message.gpm);
    }
    if (message.xpm !== 0) {
      writer.uint32(64).uint32(message.xpm);
    }
    if (message.role !== 0) {
      writer.uint32(72).int32(message.role);
    }
    if (message.outcome !== 0) {
      writer.uint32(80).int32(message.outcome);
    }
    if (message.laneOutcome !== 0) {
      writer.uint32(88).int32(message.laneOutcome);
    }
    if (message.ranked === true) {
      writer.uint32(96).bool(message.ranked);
    }
    if (message.matchId !== "0") {
      writer.uint32(104).uint64(message.matchId);
    }
    if (message.laneSelectionFlags !== 0) {
      writer.uint32(112).uint32(message.laneSelectionFlags);
    }
    if (message.predictedPosition !== 0) {
      writer.uint32(120).uint32(message.predictedPosition);
    }
    if (message.secondsDead !== 0) {
      writer.uint32(128).uint32(message.secondsDead);
    }
    if (message.winningTeam !== 0) {
      writer.uint32(136).uint32(message.winningTeam);
    }
    if (message.playerSlot !== 0) {
      writer.uint32(224).uint32(message.playerSlot);
    }
    if (message.partyGame === true) {
      writer.uint32(152).bool(message.partyGame);
    }
    if (message.startTime !== 0) {
      writer.uint32(160).uint32(message.startTime);
    }
    if (message.bountyRunes !== 0) {
      writer.uint32(176).uint32(message.bountyRunes);
    }
    if (message.waterRunes !== 0) {
      writer.uint32(184).uint32(message.waterRunes);
    }
    if (message.powerRunes !== 0) {
      writer.uint32(192).uint32(message.powerRunes);
    }
    if (message.timeEnemyT1TowerDestroyed !== 0) {
      writer.uint32(200).uint32(message.timeEnemyT1TowerDestroyed);
    }
    if (message.timeFriendlyT1TowerDestroyed !== 0) {
      writer.uint32(208).uint32(message.timeFriendlyT1TowerDestroyed);
    }
    if (message.enemyRoshanKills !== 0) {
      writer.uint32(216).uint32(message.enemyRoshanKills);
    }
    if (message.teleportsUsed !== 0) {
      writer.uint32(232).uint32(message.teleportsUsed);
    }
    if (message.dewards !== 0) {
      writer.uint32(240).uint32(message.dewards);
    }
    if (message.campsStacked !== 0) {
      writer.uint32(248).uint32(message.campsStacked);
    }
    if (message.supportGold !== 0) {
      writer.uint32(256).uint32(message.supportGold);
    }
    if (message.heroDamage !== 0) {
      writer.uint32(264).uint32(message.heroDamage);
    }
    if (message.heroHealing !== 0) {
      writer.uint32(272).uint32(message.heroHealing);
    }
    if (message.towerDamage !== 0) {
      writer.uint32(280).uint32(message.towerDamage);
    }
    if (message.successfulSmokes !== 0) {
      writer.uint32(288).uint32(message.successfulSmokes);
    }
    if (message.stunDuration !== 0) {
      writer.uint32(296).uint32(message.stunDuration);
    }
    if (message.duration !== 0) {
      writer.uint32(304).uint32(message.duration);
    }
    if (message.friendlyRoshanKills !== 0) {
      writer.uint32(312).uint32(message.friendlyRoshanKills);
    }
    if (message.previousRank !== 0) {
      writer.uint32(320).int32(message.previousRank);
    }
    if (message.gameMode !== 0) {
      writer.uint32(328).uint32(message.gameMode);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(336).uint32(message.lobbyType);
    }
    if (message.timePurchasedShard !== 0) {
      writer.uint32(349).float(message.timePurchasedShard);
    }
    if (message.timePurchasedScepter !== 0) {
      writer.uint32(357).float(message.timePurchasedScepter);
    }
    if (message.item0 !== 0) {
      writer.uint32(360).int32(message.item0);
    }
    if (message.item1 !== 0) {
      writer.uint32(368).int32(message.item1);
    }
    if (message.item2 !== 0) {
      writer.uint32(376).int32(message.item2);
    }
    if (message.item3 !== 0) {
      writer.uint32(384).int32(message.item3);
    }
    if (message.item4 !== 0) {
      writer.uint32(392).int32(message.item4);
    }
    if (message.item5 !== 0) {
      writer.uint32(400).int32(message.item5);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBattleReportGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBattleReportGame();
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

          message.rankChange = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
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
        case 7:
          if (tag != 56) {
            break;
          }

          message.gpm = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.xpm = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.role = reader.int32() as any;
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.outcome = reader.int32() as any;
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.laneOutcome = reader.int32() as any;
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.ranked = reader.bool();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.laneSelectionFlags = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.predictedPosition = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.secondsDead = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.winningTeam = reader.uint32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.playerSlot = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.partyGame = reader.bool();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.startTime = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.bountyRunes = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.waterRunes = reader.uint32();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.powerRunes = reader.uint32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.timeEnemyT1TowerDestroyed = reader.uint32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.timeFriendlyT1TowerDestroyed = reader.uint32();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.enemyRoshanKills = reader.uint32();
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.teleportsUsed = reader.uint32();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.dewards = reader.uint32();
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.campsStacked = reader.uint32();
          continue;
        case 32:
          if (tag != 256) {
            break;
          }

          message.supportGold = reader.uint32();
          continue;
        case 33:
          if (tag != 264) {
            break;
          }

          message.heroDamage = reader.uint32();
          continue;
        case 34:
          if (tag != 272) {
            break;
          }

          message.heroHealing = reader.uint32();
          continue;
        case 35:
          if (tag != 280) {
            break;
          }

          message.towerDamage = reader.uint32();
          continue;
        case 36:
          if (tag != 288) {
            break;
          }

          message.successfulSmokes = reader.uint32();
          continue;
        case 37:
          if (tag != 296) {
            break;
          }

          message.stunDuration = reader.uint32();
          continue;
        case 38:
          if (tag != 304) {
            break;
          }

          message.duration = reader.uint32();
          continue;
        case 39:
          if (tag != 312) {
            break;
          }

          message.friendlyRoshanKills = reader.uint32();
          continue;
        case 40:
          if (tag != 320) {
            break;
          }

          message.previousRank = reader.int32();
          continue;
        case 41:
          if (tag != 328) {
            break;
          }

          message.gameMode = reader.uint32();
          continue;
        case 42:
          if (tag != 336) {
            break;
          }

          message.lobbyType = reader.uint32();
          continue;
        case 43:
          if (tag != 349) {
            break;
          }

          message.timePurchasedShard = reader.float();
          continue;
        case 44:
          if (tag != 357) {
            break;
          }

          message.timePurchasedScepter = reader.float();
          continue;
        case 45:
          if (tag != 360) {
            break;
          }

          message.item0 = reader.int32();
          continue;
        case 46:
          if (tag != 368) {
            break;
          }

          message.item1 = reader.int32();
          continue;
        case 47:
          if (tag != 376) {
            break;
          }

          message.item2 = reader.int32();
          continue;
        case 48:
          if (tag != 384) {
            break;
          }

          message.item3 = reader.int32();
          continue;
        case 49:
          if (tag != 392) {
            break;
          }

          message.item4 = reader.int32();
          continue;
        case 50:
          if (tag != 400) {
            break;
          }

          message.item5 = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBattleReportGame {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      assists: isSet(object.assists) ? Number(object.assists) : 0,
      rankChange: isSet(object.rankChange) ? Number(object.rankChange) : 0,
      lastHits: isSet(object.lastHits) ? Number(object.lastHits) : 0,
      denies: isSet(object.denies) ? Number(object.denies) : 0,
      gpm: isSet(object.gpm) ? Number(object.gpm) : 0,
      xpm: isSet(object.xpm) ? Number(object.xpm) : 0,
      role: isSet(object.role) ? cMsgBattleReportRoleFromJSON(object.role) : 0,
      outcome: isSet(object.outcome) ? cMsgBattleReportEOutcomeFromJSON(object.outcome) : 0,
      laneOutcome: isSet(object.laneOutcome) ? cMsgBattleReportELaneOutcomeFromJSON(object.laneOutcome) : 0,
      ranked: isSet(object.ranked) ? Boolean(object.ranked) : false,
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      laneSelectionFlags: isSet(object.laneSelectionFlags) ? Number(object.laneSelectionFlags) : 0,
      predictedPosition: isSet(object.predictedPosition) ? Number(object.predictedPosition) : 0,
      secondsDead: isSet(object.secondsDead) ? Number(object.secondsDead) : 0,
      winningTeam: isSet(object.winningTeam) ? Number(object.winningTeam) : 0,
      playerSlot: isSet(object.playerSlot) ? Number(object.playerSlot) : 0,
      partyGame: isSet(object.partyGame) ? Boolean(object.partyGame) : false,
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      bountyRunes: isSet(object.bountyRunes) ? Number(object.bountyRunes) : 0,
      waterRunes: isSet(object.waterRunes) ? Number(object.waterRunes) : 0,
      powerRunes: isSet(object.powerRunes) ? Number(object.powerRunes) : 0,
      timeEnemyT1TowerDestroyed: isSet(object.timeEnemyT1TowerDestroyed) ? Number(object.timeEnemyT1TowerDestroyed) : 0,
      timeFriendlyT1TowerDestroyed: isSet(object.timeFriendlyT1TowerDestroyed)
        ? Number(object.timeFriendlyT1TowerDestroyed)
        : 0,
      enemyRoshanKills: isSet(object.enemyRoshanKills) ? Number(object.enemyRoshanKills) : 0,
      teleportsUsed: isSet(object.teleportsUsed) ? Number(object.teleportsUsed) : 0,
      dewards: isSet(object.dewards) ? Number(object.dewards) : 0,
      campsStacked: isSet(object.campsStacked) ? Number(object.campsStacked) : 0,
      supportGold: isSet(object.supportGold) ? Number(object.supportGold) : 0,
      heroDamage: isSet(object.heroDamage) ? Number(object.heroDamage) : 0,
      heroHealing: isSet(object.heroHealing) ? Number(object.heroHealing) : 0,
      towerDamage: isSet(object.towerDamage) ? Number(object.towerDamage) : 0,
      successfulSmokes: isSet(object.successfulSmokes) ? Number(object.successfulSmokes) : 0,
      stunDuration: isSet(object.stunDuration) ? Number(object.stunDuration) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      friendlyRoshanKills: isSet(object.friendlyRoshanKills) ? Number(object.friendlyRoshanKills) : 0,
      previousRank: isSet(object.previousRank) ? Number(object.previousRank) : 0,
      gameMode: isSet(object.gameMode) ? Number(object.gameMode) : 0,
      lobbyType: isSet(object.lobbyType) ? Number(object.lobbyType) : 0,
      timePurchasedShard: isSet(object.timePurchasedShard) ? Number(object.timePurchasedShard) : 0,
      timePurchasedScepter: isSet(object.timePurchasedScepter) ? Number(object.timePurchasedScepter) : 0,
      item0: isSet(object.item0) ? Number(object.item0) : 0,
      item1: isSet(object.item1) ? Number(object.item1) : 0,
      item2: isSet(object.item2) ? Number(object.item2) : 0,
      item3: isSet(object.item3) ? Number(object.item3) : 0,
      item4: isSet(object.item4) ? Number(object.item4) : 0,
      item5: isSet(object.item5) ? Number(object.item5) : 0,
    };
  },

  toJSON(message: CMsgBattleReportGame): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.assists !== undefined && (obj.assists = Math.round(message.assists));
    message.rankChange !== undefined && (obj.rankChange = Math.round(message.rankChange));
    message.lastHits !== undefined && (obj.lastHits = Math.round(message.lastHits));
    message.denies !== undefined && (obj.denies = Math.round(message.denies));
    message.gpm !== undefined && (obj.gpm = Math.round(message.gpm));
    message.xpm !== undefined && (obj.xpm = Math.round(message.xpm));
    message.role !== undefined && (obj.role = cMsgBattleReportRoleToJSON(message.role));
    message.outcome !== undefined && (obj.outcome = cMsgBattleReportEOutcomeToJSON(message.outcome));
    message.laneOutcome !== undefined && (obj.laneOutcome = cMsgBattleReportELaneOutcomeToJSON(message.laneOutcome));
    message.ranked !== undefined && (obj.ranked = message.ranked);
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.laneSelectionFlags !== undefined && (obj.laneSelectionFlags = Math.round(message.laneSelectionFlags));
    message.predictedPosition !== undefined && (obj.predictedPosition = Math.round(message.predictedPosition));
    message.secondsDead !== undefined && (obj.secondsDead = Math.round(message.secondsDead));
    message.winningTeam !== undefined && (obj.winningTeam = Math.round(message.winningTeam));
    message.playerSlot !== undefined && (obj.playerSlot = Math.round(message.playerSlot));
    message.partyGame !== undefined && (obj.partyGame = message.partyGame);
    message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
    message.bountyRunes !== undefined && (obj.bountyRunes = Math.round(message.bountyRunes));
    message.waterRunes !== undefined && (obj.waterRunes = Math.round(message.waterRunes));
    message.powerRunes !== undefined && (obj.powerRunes = Math.round(message.powerRunes));
    message.timeEnemyT1TowerDestroyed !== undefined &&
      (obj.timeEnemyT1TowerDestroyed = Math.round(message.timeEnemyT1TowerDestroyed));
    message.timeFriendlyT1TowerDestroyed !== undefined &&
      (obj.timeFriendlyT1TowerDestroyed = Math.round(message.timeFriendlyT1TowerDestroyed));
    message.enemyRoshanKills !== undefined && (obj.enemyRoshanKills = Math.round(message.enemyRoshanKills));
    message.teleportsUsed !== undefined && (obj.teleportsUsed = Math.round(message.teleportsUsed));
    message.dewards !== undefined && (obj.dewards = Math.round(message.dewards));
    message.campsStacked !== undefined && (obj.campsStacked = Math.round(message.campsStacked));
    message.supportGold !== undefined && (obj.supportGold = Math.round(message.supportGold));
    message.heroDamage !== undefined && (obj.heroDamage = Math.round(message.heroDamage));
    message.heroHealing !== undefined && (obj.heroHealing = Math.round(message.heroHealing));
    message.towerDamage !== undefined && (obj.towerDamage = Math.round(message.towerDamage));
    message.successfulSmokes !== undefined && (obj.successfulSmokes = Math.round(message.successfulSmokes));
    message.stunDuration !== undefined && (obj.stunDuration = Math.round(message.stunDuration));
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.friendlyRoshanKills !== undefined && (obj.friendlyRoshanKills = Math.round(message.friendlyRoshanKills));
    message.previousRank !== undefined && (obj.previousRank = Math.round(message.previousRank));
    message.gameMode !== undefined && (obj.gameMode = Math.round(message.gameMode));
    message.lobbyType !== undefined && (obj.lobbyType = Math.round(message.lobbyType));
    message.timePurchasedShard !== undefined && (obj.timePurchasedShard = message.timePurchasedShard);
    message.timePurchasedScepter !== undefined && (obj.timePurchasedScepter = message.timePurchasedScepter);
    message.item0 !== undefined && (obj.item0 = Math.round(message.item0));
    message.item1 !== undefined && (obj.item1 = Math.round(message.item1));
    message.item2 !== undefined && (obj.item2 = Math.round(message.item2));
    message.item3 !== undefined && (obj.item3 = Math.round(message.item3));
    message.item4 !== undefined && (obj.item4 = Math.round(message.item4));
    message.item5 !== undefined && (obj.item5 = Math.round(message.item5));
    return obj;
  },
};

function createBaseCMsgBattleReportGameList(): CMsgBattleReportGameList {
  return { games: [] };
}

export const CMsgBattleReportGameList = {
  encode(message: CMsgBattleReportGameList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.games) {
      CMsgBattleReportGame.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBattleReportGameList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBattleReportGameList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.games.push(CMsgBattleReportGame.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBattleReportGameList {
    return {
      games: Array.isArray(object?.games) ? object.games.map((e: any) => CMsgBattleReportGame.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgBattleReportGameList): unknown {
    const obj: any = {};
    if (message.games) {
      obj.games = message.games.map((e) => e ? CMsgBattleReportGame.toJSON(e) : undefined);
    } else {
      obj.games = [];
    }
    return obj;
  },
};

function createBaseCMsgBattleReport(): CMsgBattleReport {
  return { games: [], highlights: undefined };
}

export const CMsgBattleReport = {
  encode(message: CMsgBattleReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.games) {
      CMsgBattleReportGame.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.highlights !== undefined) {
      CMsgBattleReportHighlights.encode(message.highlights, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBattleReport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBattleReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.games.push(CMsgBattleReportGame.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.highlights = CMsgBattleReportHighlights.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBattleReport {
    return {
      games: Array.isArray(object?.games) ? object.games.map((e: any) => CMsgBattleReportGame.fromJSON(e)) : [],
      highlights: isSet(object.highlights) ? CMsgBattleReportHighlights.fromJSON(object.highlights) : undefined,
    };
  },

  toJSON(message: CMsgBattleReport): unknown {
    const obj: any = {};
    if (message.games) {
      obj.games = message.games.map((e) => e ? CMsgBattleReportGame.toJSON(e) : undefined);
    } else {
      obj.games = [];
    }
    message.highlights !== undefined &&
      (obj.highlights = message.highlights ? CMsgBattleReportHighlights.toJSON(message.highlights) : undefined);
    return obj;
  },
};

function createBaseCMsgBattleReport_HighlightGeneral(): CMsgBattleReport_HighlightGeneral {
  return { winLossWindow: 0, winPercent: 0, mmrDelta: 0, highlightScore: 0 };
}

export const CMsgBattleReport_HighlightGeneral = {
  encode(message: CMsgBattleReport_HighlightGeneral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.winLossWindow !== 0) {
      writer.uint32(8).int32(message.winLossWindow);
    }
    if (message.winPercent !== 0) {
      writer.uint32(21).float(message.winPercent);
    }
    if (message.mmrDelta !== 0) {
      writer.uint32(24).int32(message.mmrDelta);
    }
    if (message.highlightScore !== 0) {
      writer.uint32(37).float(message.highlightScore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBattleReport_HighlightGeneral {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBattleReport_HighlightGeneral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.winLossWindow = reader.int32();
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

          message.mmrDelta = reader.int32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.highlightScore = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBattleReport_HighlightGeneral {
    return {
      winLossWindow: isSet(object.winLossWindow) ? Number(object.winLossWindow) : 0,
      winPercent: isSet(object.winPercent) ? Number(object.winPercent) : 0,
      mmrDelta: isSet(object.mmrDelta) ? Number(object.mmrDelta) : 0,
      highlightScore: isSet(object.highlightScore) ? Number(object.highlightScore) : 0,
    };
  },

  toJSON(message: CMsgBattleReport_HighlightGeneral): unknown {
    const obj: any = {};
    message.winLossWindow !== undefined && (obj.winLossWindow = Math.round(message.winLossWindow));
    message.winPercent !== undefined && (obj.winPercent = message.winPercent);
    message.mmrDelta !== undefined && (obj.mmrDelta = Math.round(message.mmrDelta));
    message.highlightScore !== undefined && (obj.highlightScore = message.highlightScore);
    return obj;
  },
};

function createBaseCMsgBattleReport_Highlight(): CMsgBattleReport_Highlight {
  return {
    highlightId: 0,
    category: 0,
    tier: 0,
    rarity: 0,
    score: 0,
    confidence: 0,
    heroId: 0,
    role: 0,
    comparisonDeltaValue: 0,
    context: 0,
  };
}

export const CMsgBattleReport_Highlight = {
  encode(message: CMsgBattleReport_Highlight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.highlightId !== 0) {
      writer.uint32(8).uint32(message.highlightId);
    }
    if (message.category !== 0) {
      writer.uint32(16).int32(message.category);
    }
    if (message.tier !== 0) {
      writer.uint32(24).int32(message.tier);
    }
    if (message.rarity !== 0) {
      writer.uint32(32).int32(message.rarity);
    }
    if (message.score !== 0) {
      writer.uint32(45).float(message.score);
    }
    if (message.confidence !== 0) {
      writer.uint32(53).float(message.confidence);
    }
    if (message.heroId !== 0) {
      writer.uint32(56).uint32(message.heroId);
    }
    if (message.role !== 0) {
      writer.uint32(64).int32(message.role);
    }
    if (message.comparisonDeltaValue !== 0) {
      writer.uint32(77).float(message.comparisonDeltaValue);
    }
    if (message.context !== 0) {
      writer.uint32(80).int32(message.context);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBattleReport_Highlight {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBattleReport_Highlight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.highlightId = reader.uint32();
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

          message.tier = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.rarity = reader.int32() as any;
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.score = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.confidence = reader.float();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.heroId = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.role = reader.int32() as any;
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.comparisonDeltaValue = reader.float();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.context = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBattleReport_Highlight {
    return {
      highlightId: isSet(object.highlightId) ? Number(object.highlightId) : 0,
      category: isSet(object.category) ? cMsgBattleReportHighlightCategoryFromJSON(object.category) : 0,
      tier: isSet(object.tier) ? cMsgBattleReportHighlightTierFromJSON(object.tier) : 0,
      rarity: isSet(object.rarity) ? cMsgBattleReportHighlightRarityFromJSON(object.rarity) : 0,
      score: isSet(object.score) ? Number(object.score) : 0,
      confidence: isSet(object.confidence) ? Number(object.confidence) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      role: isSet(object.role) ? cMsgBattleReportRoleFromJSON(object.role) : 0,
      comparisonDeltaValue: isSet(object.comparisonDeltaValue) ? Number(object.comparisonDeltaValue) : 0,
      context: isSet(object.context) ? cMsgBattleReportCompareContextFromJSON(object.context) : 0,
    };
  },

  toJSON(message: CMsgBattleReport_Highlight): unknown {
    const obj: any = {};
    message.highlightId !== undefined && (obj.highlightId = Math.round(message.highlightId));
    message.category !== undefined && (obj.category = cMsgBattleReportHighlightCategoryToJSON(message.category));
    message.tier !== undefined && (obj.tier = cMsgBattleReportHighlightTierToJSON(message.tier));
    message.rarity !== undefined && (obj.rarity = cMsgBattleReportHighlightRarityToJSON(message.rarity));
    message.score !== undefined && (obj.score = message.score);
    message.confidence !== undefined && (obj.confidence = message.confidence);
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.role !== undefined && (obj.role = cMsgBattleReportRoleToJSON(message.role));
    message.comparisonDeltaValue !== undefined && (obj.comparisonDeltaValue = message.comparisonDeltaValue);
    message.context !== undefined && (obj.context = cMsgBattleReportCompareContextToJSON(message.context));
    return obj;
  },
};

function createBaseCMsgBattleReportInfo(): CMsgBattleReportInfo {
  return {
    timestamp: 0,
    duration: 0,
    acknowledged: false,
    featuredHeroId: 0,
    featuredPosition: 0,
    gamesPlayed: 0,
    medalCounts: [],
  };
}

export const CMsgBattleReportInfo = {
  encode(message: CMsgBattleReportInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).uint32(message.timestamp);
    }
    if (message.duration !== 0) {
      writer.uint32(16).uint32(message.duration);
    }
    if (message.acknowledged === true) {
      writer.uint32(24).bool(message.acknowledged);
    }
    if (message.featuredHeroId !== 0) {
      writer.uint32(32).uint32(message.featuredHeroId);
    }
    if (message.featuredPosition !== 0) {
      writer.uint32(40).uint32(message.featuredPosition);
    }
    if (message.gamesPlayed !== 0) {
      writer.uint32(48).uint32(message.gamesPlayed);
    }
    writer.uint32(58).fork();
    for (const v of message.medalCounts) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBattleReportInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBattleReportInfo();
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

          message.duration = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.acknowledged = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.featuredHeroId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.featuredPosition = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.gamesPlayed = reader.uint32();
          continue;
        case 7:
          if (tag == 56) {
            message.medalCounts.push(reader.uint32());
            continue;
          }

          if (tag == 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.medalCounts.push(reader.uint32());
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

  fromJSON(object: any): CMsgBattleReportInfo {
    return {
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      acknowledged: isSet(object.acknowledged) ? Boolean(object.acknowledged) : false,
      featuredHeroId: isSet(object.featuredHeroId) ? Number(object.featuredHeroId) : 0,
      featuredPosition: isSet(object.featuredPosition) ? Number(object.featuredPosition) : 0,
      gamesPlayed: isSet(object.gamesPlayed) ? Number(object.gamesPlayed) : 0,
      medalCounts: Array.isArray(object?.medalCounts) ? object.medalCounts.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgBattleReportInfo): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.acknowledged !== undefined && (obj.acknowledged = message.acknowledged);
    message.featuredHeroId !== undefined && (obj.featuredHeroId = Math.round(message.featuredHeroId));
    message.featuredPosition !== undefined && (obj.featuredPosition = Math.round(message.featuredPosition));
    message.gamesPlayed !== undefined && (obj.gamesPlayed = Math.round(message.gamesPlayed));
    if (message.medalCounts) {
      obj.medalCounts = message.medalCounts.map((e) => Math.round(e));
    } else {
      obj.medalCounts = [];
    }
    return obj;
  },
};

function createBaseCMsgBattleReportInfoList(): CMsgBattleReportInfoList {
  return { battleReportInfo: [] };
}

export const CMsgBattleReportInfoList = {
  encode(message: CMsgBattleReportInfoList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.battleReportInfo) {
      CMsgBattleReportInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBattleReportInfoList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBattleReportInfoList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.battleReportInfo.push(CMsgBattleReportInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBattleReportInfoList {
    return {
      battleReportInfo: Array.isArray(object?.battleReportInfo)
        ? object.battleReportInfo.map((e: any) => CMsgBattleReportInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgBattleReportInfoList): unknown {
    const obj: any = {};
    if (message.battleReportInfo) {
      obj.battleReportInfo = message.battleReportInfo.map((e) => e ? CMsgBattleReportInfo.toJSON(e) : undefined);
    } else {
      obj.battleReportInfo = [];
    }
    return obj;
  },
};

function createBaseCMsgBattleReportHighlights(): CMsgBattleReportHighlights {
  return { highlights: [] };
}

export const CMsgBattleReportHighlights = {
  encode(message: CMsgBattleReportHighlights, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.highlights) {
      CMsgBattleReport_Highlight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBattleReportHighlights {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBattleReportHighlights();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.highlights.push(CMsgBattleReport_Highlight.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBattleReportHighlights {
    return {
      highlights: Array.isArray(object?.highlights)
        ? object.highlights.map((e: any) => CMsgBattleReport_Highlight.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgBattleReportHighlights): unknown {
    const obj: any = {};
    if (message.highlights) {
      obj.highlights = message.highlights.map((e) => e ? CMsgBattleReport_Highlight.toJSON(e) : undefined);
    } else {
      obj.highlights = [];
    }
    return obj;
  },
};

function createBaseCMsgBattleReportAggregateStats(): CMsgBattleReportAggregateStats {
  return { result: [] };
}

export const CMsgBattleReportAggregateStats = {
  encode(message: CMsgBattleReportAggregateStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.result) {
      CMsgBattleReportAggregateStats_CMsgBattleReportAggregate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBattleReportAggregateStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBattleReportAggregateStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.result.push(CMsgBattleReportAggregateStats_CMsgBattleReportAggregate.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBattleReportAggregateStats {
    return {
      result: Array.isArray(object?.result)
        ? object.result.map((e: any) => CMsgBattleReportAggregateStats_CMsgBattleReportAggregate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgBattleReportAggregateStats): unknown {
    const obj: any = {};
    if (message.result) {
      obj.result = message.result.map((e) =>
        e ? CMsgBattleReportAggregateStats_CMsgBattleReportAggregate.toJSON(e) : undefined
      );
    } else {
      obj.result = [];
    }
    return obj;
  },
};

function createBaseCMsgBattleReportAggregateStats_CMsgBattleReportStat(): CMsgBattleReportAggregateStats_CMsgBattleReportStat {
  return { mean: 0, stdev: 0 };
}

export const CMsgBattleReportAggregateStats_CMsgBattleReportStat = {
  encode(
    message: CMsgBattleReportAggregateStats_CMsgBattleReportStat,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.mean !== 0) {
      writer.uint32(13).float(message.mean);
    }
    if (message.stdev !== 0) {
      writer.uint32(21).float(message.stdev);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBattleReportAggregateStats_CMsgBattleReportStat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBattleReportAggregateStats_CMsgBattleReportStat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.mean = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.stdev = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBattleReportAggregateStats_CMsgBattleReportStat {
    return {
      mean: isSet(object.mean) ? Number(object.mean) : 0,
      stdev: isSet(object.stdev) ? Number(object.stdev) : 0,
    };
  },

  toJSON(message: CMsgBattleReportAggregateStats_CMsgBattleReportStat): unknown {
    const obj: any = {};
    message.mean !== undefined && (obj.mean = message.mean);
    message.stdev !== undefined && (obj.stdev = message.stdev);
    return obj;
  },
};

function createBaseCMsgBattleReportAggregateStats_CMsgBattleReportAggregate(): CMsgBattleReportAggregateStats_CMsgBattleReportAggregate {
  return {
    heroId: 0,
    predictedPosition: 0,
    gameCount: 0,
    winCount: 0,
    laneWinCount: 0,
    kills: undefined,
    deaths: undefined,
    assists: undefined,
    rankChange: undefined,
    lastHits: undefined,
    denies: undefined,
    gpm: undefined,
    xpm: undefined,
    secondsDead: undefined,
    bountyRunes: undefined,
    waterRunes: undefined,
    powerRunes: undefined,
    timeEnemyT1TowerDestroyed: undefined,
    timeFriendlyT1TowerDestroyed: undefined,
    enemyRoshanKills: undefined,
    teleportsUsed: undefined,
    dewards: undefined,
    campsStacked: undefined,
    supportGold: undefined,
    heroDamage: undefined,
    heroHealing: undefined,
    towerDamage: undefined,
    successfulSmokes: undefined,
    stunDuration: undefined,
    duration: undefined,
    friendlyRoshanKills: undefined,
  };
}

export const CMsgBattleReportAggregateStats_CMsgBattleReportAggregate = {
  encode(
    message: CMsgBattleReportAggregateStats_CMsgBattleReportAggregate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.predictedPosition !== 0) {
      writer.uint32(16).uint32(message.predictedPosition);
    }
    if (message.gameCount !== 0) {
      writer.uint32(24).uint32(message.gameCount);
    }
    if (message.winCount !== 0) {
      writer.uint32(32).uint32(message.winCount);
    }
    if (message.laneWinCount !== 0) {
      writer.uint32(40).uint32(message.laneWinCount);
    }
    if (message.kills !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.kills, writer.uint32(50).fork()).ldelim();
    }
    if (message.deaths !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.deaths, writer.uint32(58).fork()).ldelim();
    }
    if (message.assists !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.assists, writer.uint32(66).fork()).ldelim();
    }
    if (message.rankChange !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.rankChange, writer.uint32(74).fork()).ldelim();
    }
    if (message.lastHits !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.lastHits, writer.uint32(82).fork()).ldelim();
    }
    if (message.denies !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.denies, writer.uint32(90).fork()).ldelim();
    }
    if (message.gpm !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.gpm, writer.uint32(98).fork()).ldelim();
    }
    if (message.xpm !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.xpm, writer.uint32(106).fork()).ldelim();
    }
    if (message.secondsDead !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.secondsDead, writer.uint32(114).fork())
        .ldelim();
    }
    if (message.bountyRunes !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.bountyRunes, writer.uint32(122).fork())
        .ldelim();
    }
    if (message.waterRunes !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.waterRunes, writer.uint32(130).fork())
        .ldelim();
    }
    if (message.powerRunes !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.powerRunes, writer.uint32(138).fork())
        .ldelim();
    }
    if (message.timeEnemyT1TowerDestroyed !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(
        message.timeEnemyT1TowerDestroyed,
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.timeFriendlyT1TowerDestroyed !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(
        message.timeFriendlyT1TowerDestroyed,
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.enemyRoshanKills !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.enemyRoshanKills, writer.uint32(162).fork())
        .ldelim();
    }
    if (message.teleportsUsed !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.teleportsUsed, writer.uint32(170).fork())
        .ldelim();
    }
    if (message.dewards !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.dewards, writer.uint32(178).fork()).ldelim();
    }
    if (message.campsStacked !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.campsStacked, writer.uint32(186).fork())
        .ldelim();
    }
    if (message.supportGold !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.supportGold, writer.uint32(194).fork())
        .ldelim();
    }
    if (message.heroDamage !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.heroDamage, writer.uint32(202).fork())
        .ldelim();
    }
    if (message.heroHealing !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.heroHealing, writer.uint32(210).fork())
        .ldelim();
    }
    if (message.towerDamage !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.towerDamage, writer.uint32(218).fork())
        .ldelim();
    }
    if (message.successfulSmokes !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.successfulSmokes, writer.uint32(226).fork())
        .ldelim();
    }
    if (message.stunDuration !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.stunDuration, writer.uint32(234).fork())
        .ldelim();
    }
    if (message.duration !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.duration, writer.uint32(242).fork()).ldelim();
    }
    if (message.friendlyRoshanKills !== undefined) {
      CMsgBattleReportAggregateStats_CMsgBattleReportStat.encode(message.friendlyRoshanKills, writer.uint32(250).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBattleReportAggregateStats_CMsgBattleReportAggregate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBattleReportAggregateStats_CMsgBattleReportAggregate();
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

          message.predictedPosition = reader.uint32();
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
        case 5:
          if (tag != 40) {
            break;
          }

          message.laneWinCount = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.kills = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.deaths = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.assists = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.rankChange = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.lastHits = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.denies = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.gpm = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.xpm = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.secondsDead = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.bountyRunes = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.waterRunes = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.powerRunes = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag != 146) {
            break;
          }

          message.timeEnemyT1TowerDestroyed = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 19:
          if (tag != 154) {
            break;
          }

          message.timeFriendlyT1TowerDestroyed = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 20:
          if (tag != 162) {
            break;
          }

          message.enemyRoshanKills = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 21:
          if (tag != 170) {
            break;
          }

          message.teleportsUsed = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag != 178) {
            break;
          }

          message.dewards = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag != 186) {
            break;
          }

          message.campsStacked = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag != 194) {
            break;
          }

          message.supportGold = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag != 202) {
            break;
          }

          message.heroDamage = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 26:
          if (tag != 210) {
            break;
          }

          message.heroHealing = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 27:
          if (tag != 218) {
            break;
          }

          message.towerDamage = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 28:
          if (tag != 226) {
            break;
          }

          message.successfulSmokes = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 29:
          if (tag != 234) {
            break;
          }

          message.stunDuration = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 30:
          if (tag != 242) {
            break;
          }

          message.duration = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(reader, reader.uint32());
          continue;
        case 31:
          if (tag != 250) {
            break;
          }

          message.friendlyRoshanKills = CMsgBattleReportAggregateStats_CMsgBattleReportStat.decode(
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

  fromJSON(object: any): CMsgBattleReportAggregateStats_CMsgBattleReportAggregate {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      predictedPosition: isSet(object.predictedPosition) ? Number(object.predictedPosition) : 0,
      gameCount: isSet(object.gameCount) ? Number(object.gameCount) : 0,
      winCount: isSet(object.winCount) ? Number(object.winCount) : 0,
      laneWinCount: isSet(object.laneWinCount) ? Number(object.laneWinCount) : 0,
      kills: isSet(object.kills)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.kills)
        : undefined,
      deaths: isSet(object.deaths)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.deaths)
        : undefined,
      assists: isSet(object.assists)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.assists)
        : undefined,
      rankChange: isSet(object.rankChange)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.rankChange)
        : undefined,
      lastHits: isSet(object.lastHits)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.lastHits)
        : undefined,
      denies: isSet(object.denies)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.denies)
        : undefined,
      gpm: isSet(object.gpm) ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.gpm) : undefined,
      xpm: isSet(object.xpm) ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.xpm) : undefined,
      secondsDead: isSet(object.secondsDead)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.secondsDead)
        : undefined,
      bountyRunes: isSet(object.bountyRunes)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.bountyRunes)
        : undefined,
      waterRunes: isSet(object.waterRunes)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.waterRunes)
        : undefined,
      powerRunes: isSet(object.powerRunes)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.powerRunes)
        : undefined,
      timeEnemyT1TowerDestroyed: isSet(object.timeEnemyT1TowerDestroyed)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.timeEnemyT1TowerDestroyed)
        : undefined,
      timeFriendlyT1TowerDestroyed: isSet(object.timeFriendlyT1TowerDestroyed)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.timeFriendlyT1TowerDestroyed)
        : undefined,
      enemyRoshanKills: isSet(object.enemyRoshanKills)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.enemyRoshanKills)
        : undefined,
      teleportsUsed: isSet(object.teleportsUsed)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.teleportsUsed)
        : undefined,
      dewards: isSet(object.dewards)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.dewards)
        : undefined,
      campsStacked: isSet(object.campsStacked)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.campsStacked)
        : undefined,
      supportGold: isSet(object.supportGold)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.supportGold)
        : undefined,
      heroDamage: isSet(object.heroDamage)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.heroDamage)
        : undefined,
      heroHealing: isSet(object.heroHealing)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.heroHealing)
        : undefined,
      towerDamage: isSet(object.towerDamage)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.towerDamage)
        : undefined,
      successfulSmokes: isSet(object.successfulSmokes)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.successfulSmokes)
        : undefined,
      stunDuration: isSet(object.stunDuration)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.stunDuration)
        : undefined,
      duration: isSet(object.duration)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.duration)
        : undefined,
      friendlyRoshanKills: isSet(object.friendlyRoshanKills)
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.fromJSON(object.friendlyRoshanKills)
        : undefined,
    };
  },

  toJSON(message: CMsgBattleReportAggregateStats_CMsgBattleReportAggregate): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.predictedPosition !== undefined && (obj.predictedPosition = Math.round(message.predictedPosition));
    message.gameCount !== undefined && (obj.gameCount = Math.round(message.gameCount));
    message.winCount !== undefined && (obj.winCount = Math.round(message.winCount));
    message.laneWinCount !== undefined && (obj.laneWinCount = Math.round(message.laneWinCount));
    message.kills !== undefined &&
      (obj.kills = message.kills
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.kills)
        : undefined);
    message.deaths !== undefined && (obj.deaths = message.deaths
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.deaths)
      : undefined);
    message.assists !== undefined && (obj.assists = message.assists
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.assists)
      : undefined);
    message.rankChange !== undefined && (obj.rankChange = message.rankChange
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.rankChange)
      : undefined);
    message.lastHits !== undefined && (obj.lastHits = message.lastHits
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.lastHits)
      : undefined);
    message.denies !== undefined && (obj.denies = message.denies
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.denies)
      : undefined);
    message.gpm !== undefined &&
      (obj.gpm = message.gpm ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.gpm) : undefined);
    message.xpm !== undefined &&
      (obj.xpm = message.xpm ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.xpm) : undefined);
    message.secondsDead !== undefined && (obj.secondsDead = message.secondsDead
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.secondsDead)
      : undefined);
    message.bountyRunes !== undefined && (obj.bountyRunes = message.bountyRunes
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.bountyRunes)
      : undefined);
    message.waterRunes !== undefined && (obj.waterRunes = message.waterRunes
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.waterRunes)
      : undefined);
    message.powerRunes !== undefined && (obj.powerRunes = message.powerRunes
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.powerRunes)
      : undefined);
    message.timeEnemyT1TowerDestroyed !== undefined &&
      (obj.timeEnemyT1TowerDestroyed = message.timeEnemyT1TowerDestroyed
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.timeEnemyT1TowerDestroyed)
        : undefined);
    message.timeFriendlyT1TowerDestroyed !== undefined &&
      (obj.timeFriendlyT1TowerDestroyed = message.timeFriendlyT1TowerDestroyed
        ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.timeFriendlyT1TowerDestroyed)
        : undefined);
    message.enemyRoshanKills !== undefined && (obj.enemyRoshanKills = message.enemyRoshanKills
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.enemyRoshanKills)
      : undefined);
    message.teleportsUsed !== undefined && (obj.teleportsUsed = message.teleportsUsed
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.teleportsUsed)
      : undefined);
    message.dewards !== undefined && (obj.dewards = message.dewards
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.dewards)
      : undefined);
    message.campsStacked !== undefined && (obj.campsStacked = message.campsStacked
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.campsStacked)
      : undefined);
    message.supportGold !== undefined && (obj.supportGold = message.supportGold
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.supportGold)
      : undefined);
    message.heroDamage !== undefined && (obj.heroDamage = message.heroDamage
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.heroDamage)
      : undefined);
    message.heroHealing !== undefined && (obj.heroHealing = message.heroHealing
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.heroHealing)
      : undefined);
    message.towerDamage !== undefined && (obj.towerDamage = message.towerDamage
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.towerDamage)
      : undefined);
    message.successfulSmokes !== undefined && (obj.successfulSmokes = message.successfulSmokes
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.successfulSmokes)
      : undefined);
    message.stunDuration !== undefined && (obj.stunDuration = message.stunDuration
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.stunDuration)
      : undefined);
    message.duration !== undefined && (obj.duration = message.duration
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.duration)
      : undefined);
    message.friendlyRoshanKills !== undefined && (obj.friendlyRoshanKills = message.friendlyRoshanKills
      ? CMsgBattleReportAggregateStats_CMsgBattleReportStat.toJSON(message.friendlyRoshanKills)
      : undefined);
    return obj;
  },
};

function createBaseCMsgBattleReportAggregatedGeneralStats(): CMsgBattleReportAggregatedGeneralStats {
  return {};
}

export const CMsgBattleReportAggregatedGeneralStats = {
  encode(_: CMsgBattleReportAggregatedGeneralStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBattleReportAggregatedGeneralStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBattleReportAggregatedGeneralStats();
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

  fromJSON(_: any): CMsgBattleReportAggregatedGeneralStats {
    return {};
  },

  toJSON(_: CMsgBattleReportAggregatedGeneralStats): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCMsgClientToGCGetBattleReportResponse(): CMsgClientToGCGetBattleReportResponse {
  return { report: undefined, response: 0, aggregateStats: undefined, info: undefined };
}

export const CMsgClientToGCGetBattleReportResponse = {
  encode(message: CMsgClientToGCGetBattleReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.report !== undefined) {
      CMsgBattleReport.encode(message.report, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== 0) {
      writer.uint32(16).int32(message.response);
    }
    if (message.aggregateStats !== undefined) {
      CMsgBattleReportAggregateStats.encode(message.aggregateStats, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      CMsgBattleReportInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetBattleReportResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetBattleReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.report = CMsgBattleReport.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.aggregateStats = CMsgBattleReportAggregateStats.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.info = CMsgBattleReportInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCGetBattleReportResponse {
    return {
      report: isSet(object.report) ? CMsgBattleReport.fromJSON(object.report) : undefined,
      response: isSet(object.response) ? cMsgClientToGCGetBattleReportResponse_EResponseFromJSON(object.response) : 0,
      aggregateStats: isSet(object.aggregateStats)
        ? CMsgBattleReportAggregateStats.fromJSON(object.aggregateStats)
        : undefined,
      info: isSet(object.info) ? CMsgBattleReportInfo.fromJSON(object.info) : undefined,
    };
  },

  toJSON(message: CMsgClientToGCGetBattleReportResponse): unknown {
    const obj: any = {};
    message.report !== undefined && (obj.report = message.report ? CMsgBattleReport.toJSON(message.report) : undefined);
    message.response !== undefined &&
      (obj.response = cMsgClientToGCGetBattleReportResponse_EResponseToJSON(message.response));
    message.aggregateStats !== undefined && (obj.aggregateStats = message.aggregateStats
      ? CMsgBattleReportAggregateStats.toJSON(message.aggregateStats)
      : undefined);
    message.info !== undefined && (obj.info = message.info ? CMsgBattleReportInfo.toJSON(message.info) : undefined);
    return obj;
  },
};

function createBaseCMsgClientToGCGetBattleReportAggregateStats(): CMsgClientToGCGetBattleReportAggregateStats {
  return { aggregateKeys: [], timestamp: 0, duration: 0, rank: 0 };
}

export const CMsgClientToGCGetBattleReportAggregateStats = {
  encode(message: CMsgClientToGCGetBattleReportAggregateStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.aggregateKeys) {
      CMsgClientToGCGetBattleReportAggregateStats_CMsgBattleReportAggregateKey.encode(v!, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.duration !== 0) {
      writer.uint32(24).uint32(message.duration);
    }
    if (message.rank !== 0) {
      writer.uint32(32).uint32(message.rank);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetBattleReportAggregateStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetBattleReportAggregateStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.aggregateKeys.push(
            CMsgClientToGCGetBattleReportAggregateStats_CMsgBattleReportAggregateKey.decode(reader, reader.uint32()),
          );
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

          message.rank = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCGetBattleReportAggregateStats {
    return {
      aggregateKeys: Array.isArray(object?.aggregateKeys)
        ? object.aggregateKeys.map((e: any) =>
          CMsgClientToGCGetBattleReportAggregateStats_CMsgBattleReportAggregateKey.fromJSON(e)
        )
        : [],
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
    };
  },

  toJSON(message: CMsgClientToGCGetBattleReportAggregateStats): unknown {
    const obj: any = {};
    if (message.aggregateKeys) {
      obj.aggregateKeys = message.aggregateKeys.map((e) =>
        e ? CMsgClientToGCGetBattleReportAggregateStats_CMsgBattleReportAggregateKey.toJSON(e) : undefined
      );
    } else {
      obj.aggregateKeys = [];
    }
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    return obj;
  },
};

function createBaseCMsgClientToGCGetBattleReportAggregateStats_CMsgBattleReportAggregateKey(): CMsgClientToGCGetBattleReportAggregateStats_CMsgBattleReportAggregateKey {
  return { heroId: 0, predictedPosition: 0 };
}

export const CMsgClientToGCGetBattleReportAggregateStats_CMsgBattleReportAggregateKey = {
  encode(
    message: CMsgClientToGCGetBattleReportAggregateStats_CMsgBattleReportAggregateKey,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.predictedPosition !== 0) {
      writer.uint32(16).uint32(message.predictedPosition);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgClientToGCGetBattleReportAggregateStats_CMsgBattleReportAggregateKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetBattleReportAggregateStats_CMsgBattleReportAggregateKey();
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

          message.predictedPosition = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCGetBattleReportAggregateStats_CMsgBattleReportAggregateKey {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      predictedPosition: isSet(object.predictedPosition) ? Number(object.predictedPosition) : 0,
    };
  },

  toJSON(message: CMsgClientToGCGetBattleReportAggregateStats_CMsgBattleReportAggregateKey): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.predictedPosition !== undefined && (obj.predictedPosition = Math.round(message.predictedPosition));
    return obj;
  },
};

function createBaseCMsgClientToGCGetBattleReportAggregateStatsResponse(): CMsgClientToGCGetBattleReportAggregateStatsResponse {
  return { aggregateStats: undefined, response: 0 };
}

export const CMsgClientToGCGetBattleReportAggregateStatsResponse = {
  encode(
    message: CMsgClientToGCGetBattleReportAggregateStatsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.aggregateStats !== undefined) {
      CMsgBattleReportAggregateStats.encode(message.aggregateStats, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== 0) {
      writer.uint32(16).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetBattleReportAggregateStatsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetBattleReportAggregateStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.aggregateStats = CMsgBattleReportAggregateStats.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
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

  fromJSON(object: any): CMsgClientToGCGetBattleReportAggregateStatsResponse {
    return {
      aggregateStats: isSet(object.aggregateStats)
        ? CMsgBattleReportAggregateStats.fromJSON(object.aggregateStats)
        : undefined,
      response: isSet(object.response)
        ? cMsgClientToGCGetBattleReportAggregateStatsResponse_EResponseFromJSON(object.response)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCGetBattleReportAggregateStatsResponse): unknown {
    const obj: any = {};
    message.aggregateStats !== undefined && (obj.aggregateStats = message.aggregateStats
      ? CMsgBattleReportAggregateStats.toJSON(message.aggregateStats)
      : undefined);
    message.response !== undefined &&
      (obj.response = cMsgClientToGCGetBattleReportAggregateStatsResponse_EResponseToJSON(message.response));
    return obj;
  },
};

function createBaseCMsgClientToGCGetBattleReportInfo(): CMsgClientToGCGetBattleReportInfo {
  return { accountId: 0 };
}

export const CMsgClientToGCGetBattleReportInfo = {
  encode(message: CMsgClientToGCGetBattleReportInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetBattleReportInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetBattleReportInfo();
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

  fromJSON(object: any): CMsgClientToGCGetBattleReportInfo {
    return { accountId: isSet(object.accountId) ? Number(object.accountId) : 0 };
  },

  toJSON(message: CMsgClientToGCGetBattleReportInfo): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    return obj;
  },
};

function createBaseCMsgClientToGCGetBattleReportInfoResponse(): CMsgClientToGCGetBattleReportInfoResponse {
  return { battleReportInfoList: undefined, response: 0 };
}

export const CMsgClientToGCGetBattleReportInfoResponse = {
  encode(message: CMsgClientToGCGetBattleReportInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.battleReportInfoList !== undefined) {
      CMsgBattleReportInfoList.encode(message.battleReportInfoList, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== 0) {
      writer.uint32(16).int32(message.response);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetBattleReportInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetBattleReportInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.battleReportInfoList = CMsgBattleReportInfoList.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
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

  fromJSON(object: any): CMsgClientToGCGetBattleReportInfoResponse {
    return {
      battleReportInfoList: isSet(object.battleReportInfoList)
        ? CMsgBattleReportInfoList.fromJSON(object.battleReportInfoList)
        : undefined,
      response: isSet(object.response)
        ? cMsgClientToGCGetBattleReportInfoResponse_EResponseFromJSON(object.response)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCGetBattleReportInfoResponse): unknown {
    const obj: any = {};
    message.battleReportInfoList !== undefined && (obj.battleReportInfoList = message.battleReportInfoList
      ? CMsgBattleReportInfoList.toJSON(message.battleReportInfoList)
      : undefined);
    message.response !== undefined &&
      (obj.response = cMsgClientToGCGetBattleReportInfoResponse_EResponseToJSON(message.response));
    return obj;
  },
};

function createBaseCMsgClientToGCAcknowledgeBattleReport(): CMsgClientToGCAcknowledgeBattleReport {
  return { accountId: 0, timestamp: 0, duration: 0 };
}

export const CMsgClientToGCAcknowledgeBattleReport = {
  encode(message: CMsgClientToGCAcknowledgeBattleReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.duration !== 0) {
      writer.uint32(24).uint32(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCAcknowledgeBattleReport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCAcknowledgeBattleReport();
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

          message.duration = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCAcknowledgeBattleReport {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: CMsgClientToGCAcknowledgeBattleReport): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    return obj;
  },
};

function createBaseCMsgClientToGCAcknowledgeBattleReportResponse(): CMsgClientToGCAcknowledgeBattleReportResponse {
  return { response: 0, shardsAwarded: 0 };
}

export const CMsgClientToGCAcknowledgeBattleReportResponse = {
  encode(message: CMsgClientToGCAcknowledgeBattleReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    if (message.shardsAwarded !== 0) {
      writer.uint32(16).uint32(message.shardsAwarded);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCAcknowledgeBattleReportResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCAcknowledgeBattleReportResponse();
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

          message.shardsAwarded = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCAcknowledgeBattleReportResponse {
    return {
      response: isSet(object.response)
        ? cMsgClientToGCAcknowledgeBattleReportResponse_EResponseFromJSON(object.response)
        : 0,
      shardsAwarded: isSet(object.shardsAwarded) ? Number(object.shardsAwarded) : 0,
    };
  },

  toJSON(message: CMsgClientToGCAcknowledgeBattleReportResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgClientToGCAcknowledgeBattleReportResponse_EResponseToJSON(message.response));
    message.shardsAwarded !== undefined && (obj.shardsAwarded = Math.round(message.shardsAwarded));
    return obj;
  },
};

function createBaseCMsgClientToGCGetBattleReportMatchHistory(): CMsgClientToGCGetBattleReportMatchHistory {
  return { accountId: 0, timestamp: 0, duration: 0 };
}

export const CMsgClientToGCGetBattleReportMatchHistory = {
  encode(message: CMsgClientToGCGetBattleReportMatchHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.duration !== 0) {
      writer.uint32(24).uint32(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetBattleReportMatchHistory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetBattleReportMatchHistory();
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

          message.duration = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCGetBattleReportMatchHistory {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: CMsgClientToGCGetBattleReportMatchHistory): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    return obj;
  },
};

function createBaseCMsgClientToGCGetBattleReportMatchHistoryResponse(): CMsgClientToGCGetBattleReportMatchHistoryResponse {
  return { response: 0, games: undefined };
}

export const CMsgClientToGCGetBattleReportMatchHistoryResponse = {
  encode(
    message: CMsgClientToGCGetBattleReportMatchHistoryResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    if (message.games !== undefined) {
      CMsgBattleReportGameList.encode(message.games, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientToGCGetBattleReportMatchHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCGetBattleReportMatchHistoryResponse();
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

          message.games = CMsgBattleReportGameList.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCGetBattleReportMatchHistoryResponse {
    return {
      response: isSet(object.response)
        ? cMsgClientToGCGetBattleReportMatchHistoryResponse_EResponseFromJSON(object.response)
        : 0,
      games: isSet(object.games) ? CMsgBattleReportGameList.fromJSON(object.games) : undefined,
    };
  },

  toJSON(message: CMsgClientToGCGetBattleReportMatchHistoryResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cMsgClientToGCGetBattleReportMatchHistoryResponse_EResponseToJSON(message.response));
    message.games !== undefined &&
      (obj.games = message.games ? CMsgBattleReportGameList.toJSON(message.games) : undefined);
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
