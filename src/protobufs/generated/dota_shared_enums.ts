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

export function dOTAGameModeFromJSON(object: any): DOTAGameMode {
  switch (object) {
    case 0:
    case "DOTA_GAMEMODE_NONE":
      return DOTAGameMode.DOTA_GAMEMODE_NONE;
    case 1:
    case "DOTA_GAMEMODE_AP":
      return DOTAGameMode.DOTA_GAMEMODE_AP;
    case 2:
    case "DOTA_GAMEMODE_CM":
      return DOTAGameMode.DOTA_GAMEMODE_CM;
    case 3:
    case "DOTA_GAMEMODE_RD":
      return DOTAGameMode.DOTA_GAMEMODE_RD;
    case 4:
    case "DOTA_GAMEMODE_SD":
      return DOTAGameMode.DOTA_GAMEMODE_SD;
    case 5:
    case "DOTA_GAMEMODE_AR":
      return DOTAGameMode.DOTA_GAMEMODE_AR;
    case 6:
    case "DOTA_GAMEMODE_INTRO":
      return DOTAGameMode.DOTA_GAMEMODE_INTRO;
    case 7:
    case "DOTA_GAMEMODE_HW":
      return DOTAGameMode.DOTA_GAMEMODE_HW;
    case 8:
    case "DOTA_GAMEMODE_REVERSE_CM":
      return DOTAGameMode.DOTA_GAMEMODE_REVERSE_CM;
    case 9:
    case "DOTA_GAMEMODE_XMAS":
      return DOTAGameMode.DOTA_GAMEMODE_XMAS;
    case 10:
    case "DOTA_GAMEMODE_TUTORIAL":
      return DOTAGameMode.DOTA_GAMEMODE_TUTORIAL;
    case 11:
    case "DOTA_GAMEMODE_MO":
      return DOTAGameMode.DOTA_GAMEMODE_MO;
    case 12:
    case "DOTA_GAMEMODE_LP":
      return DOTAGameMode.DOTA_GAMEMODE_LP;
    case 13:
    case "DOTA_GAMEMODE_POOL1":
      return DOTAGameMode.DOTA_GAMEMODE_POOL1;
    case 14:
    case "DOTA_GAMEMODE_FH":
      return DOTAGameMode.DOTA_GAMEMODE_FH;
    case 15:
    case "DOTA_GAMEMODE_CUSTOM":
      return DOTAGameMode.DOTA_GAMEMODE_CUSTOM;
    case 16:
    case "DOTA_GAMEMODE_CD":
      return DOTAGameMode.DOTA_GAMEMODE_CD;
    case 17:
    case "DOTA_GAMEMODE_BD":
      return DOTAGameMode.DOTA_GAMEMODE_BD;
    case 18:
    case "DOTA_GAMEMODE_ABILITY_DRAFT":
      return DOTAGameMode.DOTA_GAMEMODE_ABILITY_DRAFT;
    case 19:
    case "DOTA_GAMEMODE_EVENT":
      return DOTAGameMode.DOTA_GAMEMODE_EVENT;
    case 20:
    case "DOTA_GAMEMODE_ARDM":
      return DOTAGameMode.DOTA_GAMEMODE_ARDM;
    case 21:
    case "DOTA_GAMEMODE_1V1MID":
      return DOTAGameMode.DOTA_GAMEMODE_1V1MID;
    case 22:
    case "DOTA_GAMEMODE_ALL_DRAFT":
      return DOTAGameMode.DOTA_GAMEMODE_ALL_DRAFT;
    case 23:
    case "DOTA_GAMEMODE_TURBO":
      return DOTAGameMode.DOTA_GAMEMODE_TURBO;
    case 24:
    case "DOTA_GAMEMODE_MUTATION":
      return DOTAGameMode.DOTA_GAMEMODE_MUTATION;
    case 25:
    case "DOTA_GAMEMODE_COACHES_CHALLENGE":
      return DOTAGameMode.DOTA_GAMEMODE_COACHES_CHALLENGE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTAGameMode");
  }
}

export function dOTAGameModeToJSON(object: DOTAGameMode): string {
  switch (object) {
    case DOTAGameMode.DOTA_GAMEMODE_NONE:
      return "DOTA_GAMEMODE_NONE";
    case DOTAGameMode.DOTA_GAMEMODE_AP:
      return "DOTA_GAMEMODE_AP";
    case DOTAGameMode.DOTA_GAMEMODE_CM:
      return "DOTA_GAMEMODE_CM";
    case DOTAGameMode.DOTA_GAMEMODE_RD:
      return "DOTA_GAMEMODE_RD";
    case DOTAGameMode.DOTA_GAMEMODE_SD:
      return "DOTA_GAMEMODE_SD";
    case DOTAGameMode.DOTA_GAMEMODE_AR:
      return "DOTA_GAMEMODE_AR";
    case DOTAGameMode.DOTA_GAMEMODE_INTRO:
      return "DOTA_GAMEMODE_INTRO";
    case DOTAGameMode.DOTA_GAMEMODE_HW:
      return "DOTA_GAMEMODE_HW";
    case DOTAGameMode.DOTA_GAMEMODE_REVERSE_CM:
      return "DOTA_GAMEMODE_REVERSE_CM";
    case DOTAGameMode.DOTA_GAMEMODE_XMAS:
      return "DOTA_GAMEMODE_XMAS";
    case DOTAGameMode.DOTA_GAMEMODE_TUTORIAL:
      return "DOTA_GAMEMODE_TUTORIAL";
    case DOTAGameMode.DOTA_GAMEMODE_MO:
      return "DOTA_GAMEMODE_MO";
    case DOTAGameMode.DOTA_GAMEMODE_LP:
      return "DOTA_GAMEMODE_LP";
    case DOTAGameMode.DOTA_GAMEMODE_POOL1:
      return "DOTA_GAMEMODE_POOL1";
    case DOTAGameMode.DOTA_GAMEMODE_FH:
      return "DOTA_GAMEMODE_FH";
    case DOTAGameMode.DOTA_GAMEMODE_CUSTOM:
      return "DOTA_GAMEMODE_CUSTOM";
    case DOTAGameMode.DOTA_GAMEMODE_CD:
      return "DOTA_GAMEMODE_CD";
    case DOTAGameMode.DOTA_GAMEMODE_BD:
      return "DOTA_GAMEMODE_BD";
    case DOTAGameMode.DOTA_GAMEMODE_ABILITY_DRAFT:
      return "DOTA_GAMEMODE_ABILITY_DRAFT";
    case DOTAGameMode.DOTA_GAMEMODE_EVENT:
      return "DOTA_GAMEMODE_EVENT";
    case DOTAGameMode.DOTA_GAMEMODE_ARDM:
      return "DOTA_GAMEMODE_ARDM";
    case DOTAGameMode.DOTA_GAMEMODE_1V1MID:
      return "DOTA_GAMEMODE_1V1MID";
    case DOTAGameMode.DOTA_GAMEMODE_ALL_DRAFT:
      return "DOTA_GAMEMODE_ALL_DRAFT";
    case DOTAGameMode.DOTA_GAMEMODE_TURBO:
      return "DOTA_GAMEMODE_TURBO";
    case DOTAGameMode.DOTA_GAMEMODE_MUTATION:
      return "DOTA_GAMEMODE_MUTATION";
    case DOTAGameMode.DOTA_GAMEMODE_COACHES_CHALLENGE:
      return "DOTA_GAMEMODE_COACHES_CHALLENGE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTAGameMode");
  }
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

export function dOTAGameStateFromJSON(object: any): DOTAGameState {
  switch (object) {
    case 0:
    case "DOTA_GAMERULES_STATE_INIT":
      return DOTAGameState.DOTA_GAMERULES_STATE_INIT;
    case 1:
    case "DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD":
      return DOTAGameState.DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD;
    case 2:
    case "DOTA_GAMERULES_STATE_HERO_SELECTION":
      return DOTAGameState.DOTA_GAMERULES_STATE_HERO_SELECTION;
    case 3:
    case "DOTA_GAMERULES_STATE_STRATEGY_TIME":
      return DOTAGameState.DOTA_GAMERULES_STATE_STRATEGY_TIME;
    case 4:
    case "DOTA_GAMERULES_STATE_PRE_GAME":
      return DOTAGameState.DOTA_GAMERULES_STATE_PRE_GAME;
    case 5:
    case "DOTA_GAMERULES_STATE_GAME_IN_PROGRESS":
      return DOTAGameState.DOTA_GAMERULES_STATE_GAME_IN_PROGRESS;
    case 6:
    case "DOTA_GAMERULES_STATE_POST_GAME":
      return DOTAGameState.DOTA_GAMERULES_STATE_POST_GAME;
    case 7:
    case "DOTA_GAMERULES_STATE_DISCONNECT":
      return DOTAGameState.DOTA_GAMERULES_STATE_DISCONNECT;
    case 8:
    case "DOTA_GAMERULES_STATE_TEAM_SHOWCASE":
      return DOTAGameState.DOTA_GAMERULES_STATE_TEAM_SHOWCASE;
    case 9:
    case "DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP":
      return DOTAGameState.DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP;
    case 10:
    case "DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD":
      return DOTAGameState.DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD;
    case 11:
    case "DOTA_GAMERULES_STATE_SCENARIO_SETUP":
      return DOTAGameState.DOTA_GAMERULES_STATE_SCENARIO_SETUP;
    case 12:
    case "DOTA_GAMERULES_STATE_PLAYER_DRAFT":
      return DOTAGameState.DOTA_GAMERULES_STATE_PLAYER_DRAFT;
    case 13:
    case "DOTA_GAMERULES_STATE_LAST":
      return DOTAGameState.DOTA_GAMERULES_STATE_LAST;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTAGameState");
  }
}

export function dOTAGameStateToJSON(object: DOTAGameState): string {
  switch (object) {
    case DOTAGameState.DOTA_GAMERULES_STATE_INIT:
      return "DOTA_GAMERULES_STATE_INIT";
    case DOTAGameState.DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD:
      return "DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD";
    case DOTAGameState.DOTA_GAMERULES_STATE_HERO_SELECTION:
      return "DOTA_GAMERULES_STATE_HERO_SELECTION";
    case DOTAGameState.DOTA_GAMERULES_STATE_STRATEGY_TIME:
      return "DOTA_GAMERULES_STATE_STRATEGY_TIME";
    case DOTAGameState.DOTA_GAMERULES_STATE_PRE_GAME:
      return "DOTA_GAMERULES_STATE_PRE_GAME";
    case DOTAGameState.DOTA_GAMERULES_STATE_GAME_IN_PROGRESS:
      return "DOTA_GAMERULES_STATE_GAME_IN_PROGRESS";
    case DOTAGameState.DOTA_GAMERULES_STATE_POST_GAME:
      return "DOTA_GAMERULES_STATE_POST_GAME";
    case DOTAGameState.DOTA_GAMERULES_STATE_DISCONNECT:
      return "DOTA_GAMERULES_STATE_DISCONNECT";
    case DOTAGameState.DOTA_GAMERULES_STATE_TEAM_SHOWCASE:
      return "DOTA_GAMERULES_STATE_TEAM_SHOWCASE";
    case DOTAGameState.DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP:
      return "DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP";
    case DOTAGameState.DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD:
      return "DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD";
    case DOTAGameState.DOTA_GAMERULES_STATE_SCENARIO_SETUP:
      return "DOTA_GAMERULES_STATE_SCENARIO_SETUP";
    case DOTAGameState.DOTA_GAMERULES_STATE_PLAYER_DRAFT:
      return "DOTA_GAMERULES_STATE_PLAYER_DRAFT";
    case DOTAGameState.DOTA_GAMERULES_STATE_LAST:
      return "DOTA_GAMERULES_STATE_LAST";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTAGameState");
  }
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

export function dotaGcTeamFromJSON(object: any): dotaGcTeam {
  switch (object) {
    case 0:
    case "DOTA_GC_TEAM_GOOD_GUYS":
      return dotaGcTeam.DOTA_GC_TEAM_GOOD_GUYS;
    case 1:
    case "DOTA_GC_TEAM_BAD_GUYS":
      return dotaGcTeam.DOTA_GC_TEAM_BAD_GUYS;
    case 2:
    case "DOTA_GC_TEAM_BROADCASTER":
      return dotaGcTeam.DOTA_GC_TEAM_BROADCASTER;
    case 3:
    case "DOTA_GC_TEAM_SPECTATOR":
      return dotaGcTeam.DOTA_GC_TEAM_SPECTATOR;
    case 4:
    case "DOTA_GC_TEAM_PLAYER_POOL":
      return dotaGcTeam.DOTA_GC_TEAM_PLAYER_POOL;
    case 5:
    case "DOTA_GC_TEAM_NOTEAM":
      return dotaGcTeam.DOTA_GC_TEAM_NOTEAM;
    case 6:
    case "DOTA_GC_TEAM_CUSTOM_1":
      return dotaGcTeam.DOTA_GC_TEAM_CUSTOM_1;
    case 7:
    case "DOTA_GC_TEAM_CUSTOM_2":
      return dotaGcTeam.DOTA_GC_TEAM_CUSTOM_2;
    case 8:
    case "DOTA_GC_TEAM_CUSTOM_3":
      return dotaGcTeam.DOTA_GC_TEAM_CUSTOM_3;
    case 9:
    case "DOTA_GC_TEAM_CUSTOM_4":
      return dotaGcTeam.DOTA_GC_TEAM_CUSTOM_4;
    case 10:
    case "DOTA_GC_TEAM_CUSTOM_5":
      return dotaGcTeam.DOTA_GC_TEAM_CUSTOM_5;
    case 11:
    case "DOTA_GC_TEAM_CUSTOM_6":
      return dotaGcTeam.DOTA_GC_TEAM_CUSTOM_6;
    case 12:
    case "DOTA_GC_TEAM_CUSTOM_7":
      return dotaGcTeam.DOTA_GC_TEAM_CUSTOM_7;
    case 13:
    case "DOTA_GC_TEAM_CUSTOM_8":
      return dotaGcTeam.DOTA_GC_TEAM_CUSTOM_8;
    case 14:
    case "DOTA_GC_TEAM_NEUTRALS":
      return dotaGcTeam.DOTA_GC_TEAM_NEUTRALS;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaGcTeam");
  }
}

export function dotaGcTeamToJSON(object: dotaGcTeam): string {
  switch (object) {
    case dotaGcTeam.DOTA_GC_TEAM_GOOD_GUYS:
      return "DOTA_GC_TEAM_GOOD_GUYS";
    case dotaGcTeam.DOTA_GC_TEAM_BAD_GUYS:
      return "DOTA_GC_TEAM_BAD_GUYS";
    case dotaGcTeam.DOTA_GC_TEAM_BROADCASTER:
      return "DOTA_GC_TEAM_BROADCASTER";
    case dotaGcTeam.DOTA_GC_TEAM_SPECTATOR:
      return "DOTA_GC_TEAM_SPECTATOR";
    case dotaGcTeam.DOTA_GC_TEAM_PLAYER_POOL:
      return "DOTA_GC_TEAM_PLAYER_POOL";
    case dotaGcTeam.DOTA_GC_TEAM_NOTEAM:
      return "DOTA_GC_TEAM_NOTEAM";
    case dotaGcTeam.DOTA_GC_TEAM_CUSTOM_1:
      return "DOTA_GC_TEAM_CUSTOM_1";
    case dotaGcTeam.DOTA_GC_TEAM_CUSTOM_2:
      return "DOTA_GC_TEAM_CUSTOM_2";
    case dotaGcTeam.DOTA_GC_TEAM_CUSTOM_3:
      return "DOTA_GC_TEAM_CUSTOM_3";
    case dotaGcTeam.DOTA_GC_TEAM_CUSTOM_4:
      return "DOTA_GC_TEAM_CUSTOM_4";
    case dotaGcTeam.DOTA_GC_TEAM_CUSTOM_5:
      return "DOTA_GC_TEAM_CUSTOM_5";
    case dotaGcTeam.DOTA_GC_TEAM_CUSTOM_6:
      return "DOTA_GC_TEAM_CUSTOM_6";
    case dotaGcTeam.DOTA_GC_TEAM_CUSTOM_7:
      return "DOTA_GC_TEAM_CUSTOM_7";
    case dotaGcTeam.DOTA_GC_TEAM_CUSTOM_8:
      return "DOTA_GC_TEAM_CUSTOM_8";
    case dotaGcTeam.DOTA_GC_TEAM_NEUTRALS:
      return "DOTA_GC_TEAM_NEUTRALS";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaGcTeam");
  }
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
  EVENT_ID_TEAM_2023_TOUR3 = 43,
}

export function eEventFromJSON(object: any): EEvent {
  switch (object) {
    case 0:
    case "EVENT_ID_NONE":
      return EEvent.EVENT_ID_NONE;
    case 1:
    case "EVENT_ID_DIRETIDE":
      return EEvent.EVENT_ID_DIRETIDE;
    case 2:
    case "EVENT_ID_SPRING_FESTIVAL":
      return EEvent.EVENT_ID_SPRING_FESTIVAL;
    case 3:
    case "EVENT_ID_FROSTIVUS_2013":
      return EEvent.EVENT_ID_FROSTIVUS_2013;
    case 4:
    case "EVENT_ID_COMPENDIUM_2014":
      return EEvent.EVENT_ID_COMPENDIUM_2014;
    case 5:
    case "EVENT_ID_NEXON_PC_BANG":
      return EEvent.EVENT_ID_NEXON_PC_BANG;
    case 6:
    case "EVENT_ID_PWRD_DAC_2015":
      return EEvent.EVENT_ID_PWRD_DAC_2015;
    case 7:
    case "EVENT_ID_NEW_BLOOM_2015":
      return EEvent.EVENT_ID_NEW_BLOOM_2015;
    case 8:
    case "EVENT_ID_INTERNATIONAL_2015":
      return EEvent.EVENT_ID_INTERNATIONAL_2015;
    case 9:
    case "EVENT_ID_FALL_MAJOR_2015":
      return EEvent.EVENT_ID_FALL_MAJOR_2015;
    case 10:
    case "EVENT_ID_ORACLE_PA":
      return EEvent.EVENT_ID_ORACLE_PA;
    case 11:
    case "EVENT_ID_NEW_BLOOM_2015_PREBEAST":
      return EEvent.EVENT_ID_NEW_BLOOM_2015_PREBEAST;
    case 12:
    case "EVENT_ID_FROSTIVUS":
      return EEvent.EVENT_ID_FROSTIVUS;
    case 13:
    case "EVENT_ID_WINTER_MAJOR_2016":
      return EEvent.EVENT_ID_WINTER_MAJOR_2016;
    case 14:
    case "EVENT_ID_INTERNATIONAL_2016":
      return EEvent.EVENT_ID_INTERNATIONAL_2016;
    case 15:
    case "EVENT_ID_FALL_MAJOR_2016":
      return EEvent.EVENT_ID_FALL_MAJOR_2016;
    case 16:
    case "EVENT_ID_WINTER_MAJOR_2017":
      return EEvent.EVENT_ID_WINTER_MAJOR_2017;
    case 17:
    case "EVENT_ID_NEW_BLOOM_2017":
      return EEvent.EVENT_ID_NEW_BLOOM_2017;
    case 18:
    case "EVENT_ID_INTERNATIONAL_2017":
      return EEvent.EVENT_ID_INTERNATIONAL_2017;
    case 19:
    case "EVENT_ID_PLUS_SUBSCRIPTION":
      return EEvent.EVENT_ID_PLUS_SUBSCRIPTION;
    case 20:
    case "EVENT_ID_SINGLES_DAY_2017":
      return EEvent.EVENT_ID_SINGLES_DAY_2017;
    case 21:
    case "EVENT_ID_FROSTIVUS_2017":
      return EEvent.EVENT_ID_FROSTIVUS_2017;
    case 22:
    case "EVENT_ID_INTERNATIONAL_2018":
      return EEvent.EVENT_ID_INTERNATIONAL_2018;
    case 23:
    case "EVENT_ID_FROSTIVUS_2018":
      return EEvent.EVENT_ID_FROSTIVUS_2018;
    case 24:
    case "EVENT_ID_NEW_BLOOM_2019":
      return EEvent.EVENT_ID_NEW_BLOOM_2019;
    case 25:
    case "EVENT_ID_INTERNATIONAL_2019":
      return EEvent.EVENT_ID_INTERNATIONAL_2019;
    case 26:
    case "EVENT_ID_NEW_PLAYER_EXPERIENCE":
      return EEvent.EVENT_ID_NEW_PLAYER_EXPERIENCE;
    case 27:
    case "EVENT_ID_FROSTIVUS_2019":
      return EEvent.EVENT_ID_FROSTIVUS_2019;
    case 28:
    case "EVENT_ID_NEW_BLOOM_2020":
      return EEvent.EVENT_ID_NEW_BLOOM_2020;
    case 29:
    case "EVENT_ID_INTERNATIONAL_2020":
      return EEvent.EVENT_ID_INTERNATIONAL_2020;
    case 30:
    case "EVENT_ID_TEAM_FANDOM":
      return EEvent.EVENT_ID_TEAM_FANDOM;
    case 31:
    case "EVENT_ID_DIRETIDE_2020":
      return EEvent.EVENT_ID_DIRETIDE_2020;
    case 32:
    case "EVENT_ID_SPRING_2021":
      return EEvent.EVENT_ID_SPRING_2021;
    case 33:
    case "EVENT_ID_FALL_2021":
      return EEvent.EVENT_ID_FALL_2021;
    case 34:
    case "EVENT_ID_TEAM_FANDOM_FALL_2021":
      return EEvent.EVENT_ID_TEAM_FANDOM_FALL_2021;
    case 35:
    case "EVENT_ID_TEAM_2021_2022_TOUR2":
      return EEvent.EVENT_ID_TEAM_2021_2022_TOUR2;
    case 36:
    case "EVENT_ID_INTERNATIONAL_2022":
      return EEvent.EVENT_ID_INTERNATIONAL_2022;
    case 37:
    case "EVENT_ID_TEAM_2021_2022_TOUR3":
      return EEvent.EVENT_ID_TEAM_2021_2022_TOUR3;
    case 38:
    case "EVENT_ID_TEAM_INTERNATIONAL_2022":
      return EEvent.EVENT_ID_TEAM_INTERNATIONAL_2022;
    case 39:
    case "EVENT_ID_PERMANENT_GRANTS":
      return EEvent.EVENT_ID_PERMANENT_GRANTS;
    case 40:
    case "EVENT_ID_MUERTA_RELEASE_SPRING2023":
      return EEvent.EVENT_ID_MUERTA_RELEASE_SPRING2023;
    case 41:
    case "EVENT_ID_TEAM_2023_TOUR1":
      return EEvent.EVENT_ID_TEAM_2023_TOUR1;
    case 42:
    case "EVENT_ID_TEAM_2023_TOUR2":
      return EEvent.EVENT_ID_TEAM_2023_TOUR2;
    case 43:
    case "EVENT_ID_TEAM_2023_TOUR3":
      return EEvent.EVENT_ID_TEAM_2023_TOUR3;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EEvent");
  }
}

export function eEventToJSON(object: EEvent): string {
  switch (object) {
    case EEvent.EVENT_ID_NONE:
      return "EVENT_ID_NONE";
    case EEvent.EVENT_ID_DIRETIDE:
      return "EVENT_ID_DIRETIDE";
    case EEvent.EVENT_ID_SPRING_FESTIVAL:
      return "EVENT_ID_SPRING_FESTIVAL";
    case EEvent.EVENT_ID_FROSTIVUS_2013:
      return "EVENT_ID_FROSTIVUS_2013";
    case EEvent.EVENT_ID_COMPENDIUM_2014:
      return "EVENT_ID_COMPENDIUM_2014";
    case EEvent.EVENT_ID_NEXON_PC_BANG:
      return "EVENT_ID_NEXON_PC_BANG";
    case EEvent.EVENT_ID_PWRD_DAC_2015:
      return "EVENT_ID_PWRD_DAC_2015";
    case EEvent.EVENT_ID_NEW_BLOOM_2015:
      return "EVENT_ID_NEW_BLOOM_2015";
    case EEvent.EVENT_ID_INTERNATIONAL_2015:
      return "EVENT_ID_INTERNATIONAL_2015";
    case EEvent.EVENT_ID_FALL_MAJOR_2015:
      return "EVENT_ID_FALL_MAJOR_2015";
    case EEvent.EVENT_ID_ORACLE_PA:
      return "EVENT_ID_ORACLE_PA";
    case EEvent.EVENT_ID_NEW_BLOOM_2015_PREBEAST:
      return "EVENT_ID_NEW_BLOOM_2015_PREBEAST";
    case EEvent.EVENT_ID_FROSTIVUS:
      return "EVENT_ID_FROSTIVUS";
    case EEvent.EVENT_ID_WINTER_MAJOR_2016:
      return "EVENT_ID_WINTER_MAJOR_2016";
    case EEvent.EVENT_ID_INTERNATIONAL_2016:
      return "EVENT_ID_INTERNATIONAL_2016";
    case EEvent.EVENT_ID_FALL_MAJOR_2016:
      return "EVENT_ID_FALL_MAJOR_2016";
    case EEvent.EVENT_ID_WINTER_MAJOR_2017:
      return "EVENT_ID_WINTER_MAJOR_2017";
    case EEvent.EVENT_ID_NEW_BLOOM_2017:
      return "EVENT_ID_NEW_BLOOM_2017";
    case EEvent.EVENT_ID_INTERNATIONAL_2017:
      return "EVENT_ID_INTERNATIONAL_2017";
    case EEvent.EVENT_ID_PLUS_SUBSCRIPTION:
      return "EVENT_ID_PLUS_SUBSCRIPTION";
    case EEvent.EVENT_ID_SINGLES_DAY_2017:
      return "EVENT_ID_SINGLES_DAY_2017";
    case EEvent.EVENT_ID_FROSTIVUS_2017:
      return "EVENT_ID_FROSTIVUS_2017";
    case EEvent.EVENT_ID_INTERNATIONAL_2018:
      return "EVENT_ID_INTERNATIONAL_2018";
    case EEvent.EVENT_ID_FROSTIVUS_2018:
      return "EVENT_ID_FROSTIVUS_2018";
    case EEvent.EVENT_ID_NEW_BLOOM_2019:
      return "EVENT_ID_NEW_BLOOM_2019";
    case EEvent.EVENT_ID_INTERNATIONAL_2019:
      return "EVENT_ID_INTERNATIONAL_2019";
    case EEvent.EVENT_ID_NEW_PLAYER_EXPERIENCE:
      return "EVENT_ID_NEW_PLAYER_EXPERIENCE";
    case EEvent.EVENT_ID_FROSTIVUS_2019:
      return "EVENT_ID_FROSTIVUS_2019";
    case EEvent.EVENT_ID_NEW_BLOOM_2020:
      return "EVENT_ID_NEW_BLOOM_2020";
    case EEvent.EVENT_ID_INTERNATIONAL_2020:
      return "EVENT_ID_INTERNATIONAL_2020";
    case EEvent.EVENT_ID_TEAM_FANDOM:
      return "EVENT_ID_TEAM_FANDOM";
    case EEvent.EVENT_ID_DIRETIDE_2020:
      return "EVENT_ID_DIRETIDE_2020";
    case EEvent.EVENT_ID_SPRING_2021:
      return "EVENT_ID_SPRING_2021";
    case EEvent.EVENT_ID_FALL_2021:
      return "EVENT_ID_FALL_2021";
    case EEvent.EVENT_ID_TEAM_FANDOM_FALL_2021:
      return "EVENT_ID_TEAM_FANDOM_FALL_2021";
    case EEvent.EVENT_ID_TEAM_2021_2022_TOUR2:
      return "EVENT_ID_TEAM_2021_2022_TOUR2";
    case EEvent.EVENT_ID_INTERNATIONAL_2022:
      return "EVENT_ID_INTERNATIONAL_2022";
    case EEvent.EVENT_ID_TEAM_2021_2022_TOUR3:
      return "EVENT_ID_TEAM_2021_2022_TOUR3";
    case EEvent.EVENT_ID_TEAM_INTERNATIONAL_2022:
      return "EVENT_ID_TEAM_INTERNATIONAL_2022";
    case EEvent.EVENT_ID_PERMANENT_GRANTS:
      return "EVENT_ID_PERMANENT_GRANTS";
    case EEvent.EVENT_ID_MUERTA_RELEASE_SPRING2023:
      return "EVENT_ID_MUERTA_RELEASE_SPRING2023";
    case EEvent.EVENT_ID_TEAM_2023_TOUR1:
      return "EVENT_ID_TEAM_2023_TOUR1";
    case EEvent.EVENT_ID_TEAM_2023_TOUR2:
      return "EVENT_ID_TEAM_2023_TOUR2";
    case EEvent.EVENT_ID_TEAM_2023_TOUR3:
      return "EVENT_ID_TEAM_2023_TOUR3";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EEvent");
  }
}

export enum ERankType {
  k_ERankType_Invalid = 0,
  k_ERankType_Casual = 1,
  k_ERankType_Ranked = 2,
  k_ERankType_CasualLegacy = 3,
  k_ERankType_RankedLegacy = 4,
  k_ERankType_CasualGlicko = 5,
  k_ERankType_RankedGlicko = 6,
  k_ERankType_RankMax = 7,
  k_ERankType_BehaviorPrivate = 100,
  k_ERankType_BehaviorPublic = 101,
  k_ERankType_Max = 102,
}

export function eRankTypeFromJSON(object: any): ERankType {
  switch (object) {
    case 0:
    case "k_ERankType_Invalid":
      return ERankType.k_ERankType_Invalid;
    case 1:
    case "k_ERankType_Casual":
      return ERankType.k_ERankType_Casual;
    case 2:
    case "k_ERankType_Ranked":
      return ERankType.k_ERankType_Ranked;
    case 3:
    case "k_ERankType_CasualLegacy":
      return ERankType.k_ERankType_CasualLegacy;
    case 4:
    case "k_ERankType_RankedLegacy":
      return ERankType.k_ERankType_RankedLegacy;
    case 5:
    case "k_ERankType_CasualGlicko":
      return ERankType.k_ERankType_CasualGlicko;
    case 6:
    case "k_ERankType_RankedGlicko":
      return ERankType.k_ERankType_RankedGlicko;
    case 7:
    case "k_ERankType_RankMax":
      return ERankType.k_ERankType_RankMax;
    case 100:
    case "k_ERankType_BehaviorPrivate":
      return ERankType.k_ERankType_BehaviorPrivate;
    case 101:
    case "k_ERankType_BehaviorPublic":
      return ERankType.k_ERankType_BehaviorPublic;
    case 102:
    case "k_ERankType_Max":
      return ERankType.k_ERankType_Max;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ERankType");
  }
}

export function eRankTypeToJSON(object: ERankType): string {
  switch (object) {
    case ERankType.k_ERankType_Invalid:
      return "k_ERankType_Invalid";
    case ERankType.k_ERankType_Casual:
      return "k_ERankType_Casual";
    case ERankType.k_ERankType_Ranked:
      return "k_ERankType_Ranked";
    case ERankType.k_ERankType_CasualLegacy:
      return "k_ERankType_CasualLegacy";
    case ERankType.k_ERankType_RankedLegacy:
      return "k_ERankType_RankedLegacy";
    case ERankType.k_ERankType_CasualGlicko:
      return "k_ERankType_CasualGlicko";
    case ERankType.k_ERankType_RankedGlicko:
      return "k_ERankType_RankedGlicko";
    case ERankType.k_ERankType_RankMax:
      return "k_ERankType_RankMax";
    case ERankType.k_ERankType_BehaviorPrivate:
      return "k_ERankType_BehaviorPrivate";
    case ERankType.k_ERankType_BehaviorPublic:
      return "k_ERankType_BehaviorPublic";
    case ERankType.k_ERankType_Max:
      return "k_ERankType_Max";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ERankType");
  }
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

export function dOTALeaverStatusTFromJSON(object: any): DOTALeaverStatusT {
  switch (object) {
    case 0:
    case "DOTA_LEAVER_NONE":
      return DOTALeaverStatusT.DOTA_LEAVER_NONE;
    case 1:
    case "DOTA_LEAVER_DISCONNECTED":
      return DOTALeaverStatusT.DOTA_LEAVER_DISCONNECTED;
    case 2:
    case "DOTA_LEAVER_DISCONNECTED_TOO_LONG":
      return DOTALeaverStatusT.DOTA_LEAVER_DISCONNECTED_TOO_LONG;
    case 3:
    case "DOTA_LEAVER_ABANDONED":
      return DOTALeaverStatusT.DOTA_LEAVER_ABANDONED;
    case 4:
    case "DOTA_LEAVER_AFK":
      return DOTALeaverStatusT.DOTA_LEAVER_AFK;
    case 5:
    case "DOTA_LEAVER_NEVER_CONNECTED":
      return DOTALeaverStatusT.DOTA_LEAVER_NEVER_CONNECTED;
    case 6:
    case "DOTA_LEAVER_NEVER_CONNECTED_TOO_LONG":
      return DOTALeaverStatusT.DOTA_LEAVER_NEVER_CONNECTED_TOO_LONG;
    case 7:
    case "DOTA_LEAVER_FAILED_TO_READY_UP":
      return DOTALeaverStatusT.DOTA_LEAVER_FAILED_TO_READY_UP;
    case 8:
    case "DOTA_LEAVER_DECLINED":
      return DOTALeaverStatusT.DOTA_LEAVER_DECLINED;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTALeaverStatusT");
  }
}

export function dOTALeaverStatusTToJSON(object: DOTALeaverStatusT): string {
  switch (object) {
    case DOTALeaverStatusT.DOTA_LEAVER_NONE:
      return "DOTA_LEAVER_NONE";
    case DOTALeaverStatusT.DOTA_LEAVER_DISCONNECTED:
      return "DOTA_LEAVER_DISCONNECTED";
    case DOTALeaverStatusT.DOTA_LEAVER_DISCONNECTED_TOO_LONG:
      return "DOTA_LEAVER_DISCONNECTED_TOO_LONG";
    case DOTALeaverStatusT.DOTA_LEAVER_ABANDONED:
      return "DOTA_LEAVER_ABANDONED";
    case DOTALeaverStatusT.DOTA_LEAVER_AFK:
      return "DOTA_LEAVER_AFK";
    case DOTALeaverStatusT.DOTA_LEAVER_NEVER_CONNECTED:
      return "DOTA_LEAVER_NEVER_CONNECTED";
    case DOTALeaverStatusT.DOTA_LEAVER_NEVER_CONNECTED_TOO_LONG:
      return "DOTA_LEAVER_NEVER_CONNECTED_TOO_LONG";
    case DOTALeaverStatusT.DOTA_LEAVER_FAILED_TO_READY_UP:
      return "DOTA_LEAVER_FAILED_TO_READY_UP";
    case DOTALeaverStatusT.DOTA_LEAVER_DECLINED:
      return "DOTA_LEAVER_DECLINED";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTALeaverStatusT");
  }
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

export function dOTAConnectionStateTFromJSON(object: any): DOTAConnectionStateT {
  switch (object) {
    case 0:
    case "DOTA_CONNECTION_STATE_UNKNOWN":
      return DOTAConnectionStateT.DOTA_CONNECTION_STATE_UNKNOWN;
    case 1:
    case "DOTA_CONNECTION_STATE_NOT_YET_CONNECTED":
      return DOTAConnectionStateT.DOTA_CONNECTION_STATE_NOT_YET_CONNECTED;
    case 2:
    case "DOTA_CONNECTION_STATE_CONNECTED":
      return DOTAConnectionStateT.DOTA_CONNECTION_STATE_CONNECTED;
    case 3:
    case "DOTA_CONNECTION_STATE_DISCONNECTED":
      return DOTAConnectionStateT.DOTA_CONNECTION_STATE_DISCONNECTED;
    case 4:
    case "DOTA_CONNECTION_STATE_ABANDONED":
      return DOTAConnectionStateT.DOTA_CONNECTION_STATE_ABANDONED;
    case 5:
    case "DOTA_CONNECTION_STATE_LOADING":
      return DOTAConnectionStateT.DOTA_CONNECTION_STATE_LOADING;
    case 6:
    case "DOTA_CONNECTION_STATE_FAILED":
      return DOTAConnectionStateT.DOTA_CONNECTION_STATE_FAILED;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTAConnectionStateT");
  }
}

export function dOTAConnectionStateTToJSON(object: DOTAConnectionStateT): string {
  switch (object) {
    case DOTAConnectionStateT.DOTA_CONNECTION_STATE_UNKNOWN:
      return "DOTA_CONNECTION_STATE_UNKNOWN";
    case DOTAConnectionStateT.DOTA_CONNECTION_STATE_NOT_YET_CONNECTED:
      return "DOTA_CONNECTION_STATE_NOT_YET_CONNECTED";
    case DOTAConnectionStateT.DOTA_CONNECTION_STATE_CONNECTED:
      return "DOTA_CONNECTION_STATE_CONNECTED";
    case DOTAConnectionStateT.DOTA_CONNECTION_STATE_DISCONNECTED:
      return "DOTA_CONNECTION_STATE_DISCONNECTED";
    case DOTAConnectionStateT.DOTA_CONNECTION_STATE_ABANDONED:
      return "DOTA_CONNECTION_STATE_ABANDONED";
    case DOTAConnectionStateT.DOTA_CONNECTION_STATE_LOADING:
      return "DOTA_CONNECTION_STATE_LOADING";
    case DOTAConnectionStateT.DOTA_CONNECTION_STATE_FAILED:
      return "DOTA_CONNECTION_STATE_FAILED";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTAConnectionStateT");
  }
}

export enum FantasyRoles {
  FANTASY_ROLE_UNDEFINED = 0,
  FANTASY_ROLE_CORE = 1,
  FANTASY_ROLE_SUPPORT = 2,
  FANTASY_ROLE_OFFLANE = 3,
  FANTASY_ROLE_MID = 4,
}

export function fantasyRolesFromJSON(object: any): FantasyRoles {
  switch (object) {
    case 0:
    case "FANTASY_ROLE_UNDEFINED":
      return FantasyRoles.FANTASY_ROLE_UNDEFINED;
    case 1:
    case "FANTASY_ROLE_CORE":
      return FantasyRoles.FANTASY_ROLE_CORE;
    case 2:
    case "FANTASY_ROLE_SUPPORT":
      return FantasyRoles.FANTASY_ROLE_SUPPORT;
    case 3:
    case "FANTASY_ROLE_OFFLANE":
      return FantasyRoles.FANTASY_ROLE_OFFLANE;
    case 4:
    case "FANTASY_ROLE_MID":
      return FantasyRoles.FANTASY_ROLE_MID;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum FantasyRoles");
  }
}

export function fantasyRolesToJSON(object: FantasyRoles): string {
  switch (object) {
    case FantasyRoles.FANTASY_ROLE_UNDEFINED:
      return "FANTASY_ROLE_UNDEFINED";
    case FantasyRoles.FANTASY_ROLE_CORE:
      return "FANTASY_ROLE_CORE";
    case FantasyRoles.FANTASY_ROLE_SUPPORT:
      return "FANTASY_ROLE_SUPPORT";
    case FantasyRoles.FANTASY_ROLE_OFFLANE:
      return "FANTASY_ROLE_OFFLANE";
    case FantasyRoles.FANTASY_ROLE_MID:
      return "FANTASY_ROLE_MID";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum FantasyRoles");
  }
}

export enum FantasyTeamSlots {
  FANTASY_SLOT_NONE = 0,
  FANTASY_SLOT_CORE = 1,
  FANTASY_SLOT_SUPPORT = 2,
  FANTASY_SLOT_ANY = 3,
  FANTASY_SLOT_BENCH = 4,
}

export function fantasyTeamSlotsFromJSON(object: any): FantasyTeamSlots {
  switch (object) {
    case 0:
    case "FANTASY_SLOT_NONE":
      return FantasyTeamSlots.FANTASY_SLOT_NONE;
    case 1:
    case "FANTASY_SLOT_CORE":
      return FantasyTeamSlots.FANTASY_SLOT_CORE;
    case 2:
    case "FANTASY_SLOT_SUPPORT":
      return FantasyTeamSlots.FANTASY_SLOT_SUPPORT;
    case 3:
    case "FANTASY_SLOT_ANY":
      return FantasyTeamSlots.FANTASY_SLOT_ANY;
    case 4:
    case "FANTASY_SLOT_BENCH":
      return FantasyTeamSlots.FANTASY_SLOT_BENCH;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum FantasyTeamSlots");
  }
}

export function fantasyTeamSlotsToJSON(object: FantasyTeamSlots): string {
  switch (object) {
    case FantasyTeamSlots.FANTASY_SLOT_NONE:
      return "FANTASY_SLOT_NONE";
    case FantasyTeamSlots.FANTASY_SLOT_CORE:
      return "FANTASY_SLOT_CORE";
    case FantasyTeamSlots.FANTASY_SLOT_SUPPORT:
      return "FANTASY_SLOT_SUPPORT";
    case FantasyTeamSlots.FANTASY_SLOT_ANY:
      return "FANTASY_SLOT_ANY";
    case FantasyTeamSlots.FANTASY_SLOT_BENCH:
      return "FANTASY_SLOT_BENCH";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum FantasyTeamSlots");
  }
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

export function fantasySelectionModeFromJSON(object: any): FantasySelectionMode {
  switch (object) {
    case 0:
    case "FANTASY_SELECTION_INVALID":
      return FantasySelectionMode.FANTASY_SELECTION_INVALID;
    case 1:
    case "FANTASY_SELECTION_LOCKED":
      return FantasySelectionMode.FANTASY_SELECTION_LOCKED;
    case 2:
    case "FANTASY_SELECTION_SHUFFLE":
      return FantasySelectionMode.FANTASY_SELECTION_SHUFFLE;
    case 3:
    case "FANTASY_SELECTION_FREE_PICK":
      return FantasySelectionMode.FANTASY_SELECTION_FREE_PICK;
    case 4:
    case "FANTASY_SELECTION_ENDED":
      return FantasySelectionMode.FANTASY_SELECTION_ENDED;
    case 5:
    case "FANTASY_SELECTION_PRE_SEASON":
      return FantasySelectionMode.FANTASY_SELECTION_PRE_SEASON;
    case 6:
    case "FANTASY_SELECTION_PRE_DRAFT":
      return FantasySelectionMode.FANTASY_SELECTION_PRE_DRAFT;
    case 7:
    case "FANTASY_SELECTION_DRAFTING":
      return FantasySelectionMode.FANTASY_SELECTION_DRAFTING;
    case 8:
    case "FANTASY_SELECTION_REGULAR_SEASON":
      return FantasySelectionMode.FANTASY_SELECTION_REGULAR_SEASON;
    case 9:
    case "FANTASY_SELECTION_CARD_BASED":
      return FantasySelectionMode.FANTASY_SELECTION_CARD_BASED;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum FantasySelectionMode");
  }
}

export function fantasySelectionModeToJSON(object: FantasySelectionMode): string {
  switch (object) {
    case FantasySelectionMode.FANTASY_SELECTION_INVALID:
      return "FANTASY_SELECTION_INVALID";
    case FantasySelectionMode.FANTASY_SELECTION_LOCKED:
      return "FANTASY_SELECTION_LOCKED";
    case FantasySelectionMode.FANTASY_SELECTION_SHUFFLE:
      return "FANTASY_SELECTION_SHUFFLE";
    case FantasySelectionMode.FANTASY_SELECTION_FREE_PICK:
      return "FANTASY_SELECTION_FREE_PICK";
    case FantasySelectionMode.FANTASY_SELECTION_ENDED:
      return "FANTASY_SELECTION_ENDED";
    case FantasySelectionMode.FANTASY_SELECTION_PRE_SEASON:
      return "FANTASY_SELECTION_PRE_SEASON";
    case FantasySelectionMode.FANTASY_SELECTION_PRE_DRAFT:
      return "FANTASY_SELECTION_PRE_DRAFT";
    case FantasySelectionMode.FANTASY_SELECTION_DRAFTING:
      return "FANTASY_SELECTION_DRAFTING";
    case FantasySelectionMode.FANTASY_SELECTION_REGULAR_SEASON:
      return "FANTASY_SELECTION_REGULAR_SEASON";
    case FantasySelectionMode.FANTASY_SELECTION_CARD_BASED:
      return "FANTASY_SELECTION_CARD_BASED";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum FantasySelectionMode");
  }
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

export function dOTAChatChannelTypeTFromJSON(object: any): DOTAChatChannelTypeT {
  switch (object) {
    case 0:
    case "DOTAChannelType_Regional":
      return DOTAChatChannelTypeT.DOTAChannelType_Regional;
    case 1:
    case "DOTAChannelType_Custom":
      return DOTAChatChannelTypeT.DOTAChannelType_Custom;
    case 2:
    case "DOTAChannelType_Party":
      return DOTAChatChannelTypeT.DOTAChannelType_Party;
    case 3:
    case "DOTAChannelType_Lobby":
      return DOTAChatChannelTypeT.DOTAChannelType_Lobby;
    case 4:
    case "DOTAChannelType_Team":
      return DOTAChatChannelTypeT.DOTAChannelType_Team;
    case 5:
    case "DOTAChannelType_Guild":
      return DOTAChatChannelTypeT.DOTAChannelType_Guild;
    case 6:
    case "DOTAChannelType_Fantasy":
      return DOTAChatChannelTypeT.DOTAChannelType_Fantasy;
    case 7:
    case "DOTAChannelType_Whisper":
      return DOTAChatChannelTypeT.DOTAChannelType_Whisper;
    case 8:
    case "DOTAChannelType_Console":
      return DOTAChatChannelTypeT.DOTAChannelType_Console;
    case 9:
    case "DOTAChannelType_Tab":
      return DOTAChatChannelTypeT.DOTAChannelType_Tab;
    case 10:
    case "DOTAChannelType_Invalid":
      return DOTAChatChannelTypeT.DOTAChannelType_Invalid;
    case 11:
    case "DOTAChannelType_GameAll":
      return DOTAChatChannelTypeT.DOTAChannelType_GameAll;
    case 12:
    case "DOTAChannelType_GameAllies":
      return DOTAChatChannelTypeT.DOTAChannelType_GameAllies;
    case 13:
    case "DOTAChannelType_GameSpectator":
      return DOTAChatChannelTypeT.DOTAChannelType_GameSpectator;
    case 14:
    case "DOTAChannelType_GameCoaching":
      return DOTAChatChannelTypeT.DOTAChannelType_GameCoaching;
    case 15:
    case "DOTAChannelType_Cafe":
      return DOTAChatChannelTypeT.DOTAChannelType_Cafe;
    case 16:
    case "DOTAChannelType_CustomGame":
      return DOTAChatChannelTypeT.DOTAChannelType_CustomGame;
    case 17:
    case "DOTAChannelType_Private":
      return DOTAChatChannelTypeT.DOTAChannelType_Private;
    case 18:
    case "DOTAChannelType_PostGame":
      return DOTAChatChannelTypeT.DOTAChannelType_PostGame;
    case 19:
    case "DOTAChannelType_BattleCup":
      return DOTAChatChannelTypeT.DOTAChannelType_BattleCup;
    case 20:
    case "DOTAChannelType_HLTVSpectator":
      return DOTAChatChannelTypeT.DOTAChannelType_HLTVSpectator;
    case 21:
    case "DOTAChannelType_GameEvents":
      return DOTAChatChannelTypeT.DOTAChannelType_GameEvents;
    case 22:
    case "DOTAChannelType_Trivia":
      return DOTAChatChannelTypeT.DOTAChannelType_Trivia;
    case 23:
    case "DOTAChannelType_NewPlayer":
      return DOTAChatChannelTypeT.DOTAChannelType_NewPlayer;
    case 24:
    case "DOTAChannelType_PrivateCoaching":
      return DOTAChatChannelTypeT.DOTAChannelType_PrivateCoaching;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTAChatChannelTypeT");
  }
}

export function dOTAChatChannelTypeTToJSON(object: DOTAChatChannelTypeT): string {
  switch (object) {
    case DOTAChatChannelTypeT.DOTAChannelType_Regional:
      return "DOTAChannelType_Regional";
    case DOTAChatChannelTypeT.DOTAChannelType_Custom:
      return "DOTAChannelType_Custom";
    case DOTAChatChannelTypeT.DOTAChannelType_Party:
      return "DOTAChannelType_Party";
    case DOTAChatChannelTypeT.DOTAChannelType_Lobby:
      return "DOTAChannelType_Lobby";
    case DOTAChatChannelTypeT.DOTAChannelType_Team:
      return "DOTAChannelType_Team";
    case DOTAChatChannelTypeT.DOTAChannelType_Guild:
      return "DOTAChannelType_Guild";
    case DOTAChatChannelTypeT.DOTAChannelType_Fantasy:
      return "DOTAChannelType_Fantasy";
    case DOTAChatChannelTypeT.DOTAChannelType_Whisper:
      return "DOTAChannelType_Whisper";
    case DOTAChatChannelTypeT.DOTAChannelType_Console:
      return "DOTAChannelType_Console";
    case DOTAChatChannelTypeT.DOTAChannelType_Tab:
      return "DOTAChannelType_Tab";
    case DOTAChatChannelTypeT.DOTAChannelType_Invalid:
      return "DOTAChannelType_Invalid";
    case DOTAChatChannelTypeT.DOTAChannelType_GameAll:
      return "DOTAChannelType_GameAll";
    case DOTAChatChannelTypeT.DOTAChannelType_GameAllies:
      return "DOTAChannelType_GameAllies";
    case DOTAChatChannelTypeT.DOTAChannelType_GameSpectator:
      return "DOTAChannelType_GameSpectator";
    case DOTAChatChannelTypeT.DOTAChannelType_GameCoaching:
      return "DOTAChannelType_GameCoaching";
    case DOTAChatChannelTypeT.DOTAChannelType_Cafe:
      return "DOTAChannelType_Cafe";
    case DOTAChatChannelTypeT.DOTAChannelType_CustomGame:
      return "DOTAChannelType_CustomGame";
    case DOTAChatChannelTypeT.DOTAChannelType_Private:
      return "DOTAChannelType_Private";
    case DOTAChatChannelTypeT.DOTAChannelType_PostGame:
      return "DOTAChannelType_PostGame";
    case DOTAChatChannelTypeT.DOTAChannelType_BattleCup:
      return "DOTAChannelType_BattleCup";
    case DOTAChatChannelTypeT.DOTAChannelType_HLTVSpectator:
      return "DOTAChannelType_HLTVSpectator";
    case DOTAChatChannelTypeT.DOTAChannelType_GameEvents:
      return "DOTAChannelType_GameEvents";
    case DOTAChatChannelTypeT.DOTAChannelType_Trivia:
      return "DOTAChannelType_Trivia";
    case DOTAChatChannelTypeT.DOTAChannelType_NewPlayer:
      return "DOTAChannelType_NewPlayer";
    case DOTAChatChannelTypeT.DOTAChannelType_PrivateCoaching:
      return "DOTAChannelType_PrivateCoaching";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTAChatChannelTypeT");
  }
}

export enum EChatSpecialPrivileges {
  k_EChatSpecialPrivileges_None = 0,
  k_EChatSpecialPrivileges_Moderator = 1,
  k_EChatSpecialPrivileges_SuperModerator = 2,
}

export function eChatSpecialPrivilegesFromJSON(object: any): EChatSpecialPrivileges {
  switch (object) {
    case 0:
    case "k_EChatSpecialPrivileges_None":
      return EChatSpecialPrivileges.k_EChatSpecialPrivileges_None;
    case 1:
    case "k_EChatSpecialPrivileges_Moderator":
      return EChatSpecialPrivileges.k_EChatSpecialPrivileges_Moderator;
    case 2:
    case "k_EChatSpecialPrivileges_SuperModerator":
      return EChatSpecialPrivileges.k_EChatSpecialPrivileges_SuperModerator;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EChatSpecialPrivileges");
  }
}

export function eChatSpecialPrivilegesToJSON(object: EChatSpecialPrivileges): string {
  switch (object) {
    case EChatSpecialPrivileges.k_EChatSpecialPrivileges_None:
      return "k_EChatSpecialPrivileges_None";
    case EChatSpecialPrivileges.k_EChatSpecialPrivileges_Moderator:
      return "k_EChatSpecialPrivileges_Moderator";
    case EChatSpecialPrivileges.k_EChatSpecialPrivileges_SuperModerator:
      return "k_EChatSpecialPrivileges_SuperModerator";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EChatSpecialPrivileges");
  }
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

export function eProfileCardSlotTypeFromJSON(object: any): EProfileCardSlotType {
  switch (object) {
    case 0:
    case "k_EProfileCardSlotType_Empty":
      return EProfileCardSlotType.k_EProfileCardSlotType_Empty;
    case 1:
    case "k_EProfileCardSlotType_Stat":
      return EProfileCardSlotType.k_EProfileCardSlotType_Stat;
    case 2:
    case "k_EProfileCardSlotType_Trophy":
      return EProfileCardSlotType.k_EProfileCardSlotType_Trophy;
    case 3:
    case "k_EProfileCardSlotType_Item":
      return EProfileCardSlotType.k_EProfileCardSlotType_Item;
    case 4:
    case "k_EProfileCardSlotType_Hero":
      return EProfileCardSlotType.k_EProfileCardSlotType_Hero;
    case 5:
    case "k_EProfileCardSlotType_Emoticon":
      return EProfileCardSlotType.k_EProfileCardSlotType_Emoticon;
    case 6:
    case "k_EProfileCardSlotType_Team":
      return EProfileCardSlotType.k_EProfileCardSlotType_Team;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EProfileCardSlotType");
  }
}

export function eProfileCardSlotTypeToJSON(object: EProfileCardSlotType): string {
  switch (object) {
    case EProfileCardSlotType.k_EProfileCardSlotType_Empty:
      return "k_EProfileCardSlotType_Empty";
    case EProfileCardSlotType.k_EProfileCardSlotType_Stat:
      return "k_EProfileCardSlotType_Stat";
    case EProfileCardSlotType.k_EProfileCardSlotType_Trophy:
      return "k_EProfileCardSlotType_Trophy";
    case EProfileCardSlotType.k_EProfileCardSlotType_Item:
      return "k_EProfileCardSlotType_Item";
    case EProfileCardSlotType.k_EProfileCardSlotType_Hero:
      return "k_EProfileCardSlotType_Hero";
    case EProfileCardSlotType.k_EProfileCardSlotType_Emoticon:
      return "k_EProfileCardSlotType_Emoticon";
    case EProfileCardSlotType.k_EProfileCardSlotType_Team:
      return "k_EProfileCardSlotType_Team";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EProfileCardSlotType");
  }
}

export enum EMatchGroupServerStatus {
  k_EMatchGroupServerStatus_OK = 0,
  k_EMatchGroupServerStatus_LimitedAvailability = 1,
  k_EMatchGroupServerStatus_Offline = 2,
}

export function eMatchGroupServerStatusFromJSON(object: any): EMatchGroupServerStatus {
  switch (object) {
    case 0:
    case "k_EMatchGroupServerStatus_OK":
      return EMatchGroupServerStatus.k_EMatchGroupServerStatus_OK;
    case 1:
    case "k_EMatchGroupServerStatus_LimitedAvailability":
      return EMatchGroupServerStatus.k_EMatchGroupServerStatus_LimitedAvailability;
    case 2:
    case "k_EMatchGroupServerStatus_Offline":
      return EMatchGroupServerStatus.k_EMatchGroupServerStatus_Offline;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EMatchGroupServerStatus");
  }
}

export function eMatchGroupServerStatusToJSON(object: EMatchGroupServerStatus): string {
  switch (object) {
    case EMatchGroupServerStatus.k_EMatchGroupServerStatus_OK:
      return "k_EMatchGroupServerStatus_OK";
    case EMatchGroupServerStatus.k_EMatchGroupServerStatus_LimitedAvailability:
      return "k_EMatchGroupServerStatus_LimitedAvailability";
    case EMatchGroupServerStatus.k_EMatchGroupServerStatus_Offline:
      return "k_EMatchGroupServerStatus_Offline";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EMatchGroupServerStatus");
  }
}

export enum dotaCmPick {
  DOTA_CM_RANDOM = 0,
  DOTA_CM_GOOD_GUYS = 1,
  DOTA_CM_BAD_GUYS = 2,
}

export function dotaCmPickFromJSON(object: any): dotaCmPick {
  switch (object) {
    case 0:
    case "DOTA_CM_RANDOM":
      return dotaCmPick.DOTA_CM_RANDOM;
    case 1:
    case "DOTA_CM_GOOD_GUYS":
      return dotaCmPick.DOTA_CM_GOOD_GUYS;
    case 2:
    case "DOTA_CM_BAD_GUYS":
      return dotaCmPick.DOTA_CM_BAD_GUYS;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaCmPick");
  }
}

export function dotaCmPickToJSON(object: dotaCmPick): string {
  switch (object) {
    case dotaCmPick.DOTA_CM_RANDOM:
      return "DOTA_CM_RANDOM";
    case dotaCmPick.DOTA_CM_GOOD_GUYS:
      return "DOTA_CM_GOOD_GUYS";
    case dotaCmPick.DOTA_CM_BAD_GUYS:
      return "DOTA_CM_BAD_GUYS";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaCmPick");
  }
}

export enum DOTALowPriorityBanType {
  DOTA_LOW_PRIORITY_BAN_ABANDON = 0,
  DOTA_LOW_PRIORITY_BAN_REPORTS = 1,
  DOTA_LOW_PRIORITY_BAN_SECONDARY_ABANDON = 2,
  DOTA_LOW_PRIORITY_BAN_PRE_GAME_ROLE = 3,
}

export function dOTALowPriorityBanTypeFromJSON(object: any): DOTALowPriorityBanType {
  switch (object) {
    case 0:
    case "DOTA_LOW_PRIORITY_BAN_ABANDON":
      return DOTALowPriorityBanType.DOTA_LOW_PRIORITY_BAN_ABANDON;
    case 1:
    case "DOTA_LOW_PRIORITY_BAN_REPORTS":
      return DOTALowPriorityBanType.DOTA_LOW_PRIORITY_BAN_REPORTS;
    case 2:
    case "DOTA_LOW_PRIORITY_BAN_SECONDARY_ABANDON":
      return DOTALowPriorityBanType.DOTA_LOW_PRIORITY_BAN_SECONDARY_ABANDON;
    case 3:
    case "DOTA_LOW_PRIORITY_BAN_PRE_GAME_ROLE":
      return DOTALowPriorityBanType.DOTA_LOW_PRIORITY_BAN_PRE_GAME_ROLE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTALowPriorityBanType");
  }
}

export function dOTALowPriorityBanTypeToJSON(object: DOTALowPriorityBanType): string {
  switch (object) {
    case DOTALowPriorityBanType.DOTA_LOW_PRIORITY_BAN_ABANDON:
      return "DOTA_LOW_PRIORITY_BAN_ABANDON";
    case DOTALowPriorityBanType.DOTA_LOW_PRIORITY_BAN_REPORTS:
      return "DOTA_LOW_PRIORITY_BAN_REPORTS";
    case DOTALowPriorityBanType.DOTA_LOW_PRIORITY_BAN_SECONDARY_ABANDON:
      return "DOTA_LOW_PRIORITY_BAN_SECONDARY_ABANDON";
    case DOTALowPriorityBanType.DOTA_LOW_PRIORITY_BAN_PRE_GAME_ROLE:
      return "DOTA_LOW_PRIORITY_BAN_PRE_GAME_ROLE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTALowPriorityBanType");
  }
}

export enum DOTALobbyReadyState {
  DOTALobbyReadyState_UNDECLARED = 0,
  DOTALobbyReadyState_ACCEPTED = 1,
  DOTALobbyReadyState_DECLINED = 2,
}

export function dOTALobbyReadyStateFromJSON(object: any): DOTALobbyReadyState {
  switch (object) {
    case 0:
    case "DOTALobbyReadyState_UNDECLARED":
      return DOTALobbyReadyState.DOTALobbyReadyState_UNDECLARED;
    case 1:
    case "DOTALobbyReadyState_ACCEPTED":
      return DOTALobbyReadyState.DOTALobbyReadyState_ACCEPTED;
    case 2:
    case "DOTALobbyReadyState_DECLINED":
      return DOTALobbyReadyState.DOTALobbyReadyState_DECLINED;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTALobbyReadyState");
  }
}

export function dOTALobbyReadyStateToJSON(object: DOTALobbyReadyState): string {
  switch (object) {
    case DOTALobbyReadyState.DOTALobbyReadyState_UNDECLARED:
      return "DOTALobbyReadyState_UNDECLARED";
    case DOTALobbyReadyState.DOTALobbyReadyState_ACCEPTED:
      return "DOTALobbyReadyState_ACCEPTED";
    case DOTALobbyReadyState.DOTALobbyReadyState_DECLINED:
      return "DOTALobbyReadyState_DECLINED";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTALobbyReadyState");
  }
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

export function dOTAJoinLobbyResultFromJSON(object: any): DOTAJoinLobbyResult {
  switch (object) {
    case 0:
    case "DOTA_JOIN_RESULT_SUCCESS":
      return DOTAJoinLobbyResult.DOTA_JOIN_RESULT_SUCCESS;
    case 1:
    case "DOTA_JOIN_RESULT_ALREADY_IN_GAME":
      return DOTAJoinLobbyResult.DOTA_JOIN_RESULT_ALREADY_IN_GAME;
    case 2:
    case "DOTA_JOIN_RESULT_INVALID_LOBBY":
      return DOTAJoinLobbyResult.DOTA_JOIN_RESULT_INVALID_LOBBY;
    case 3:
    case "DOTA_JOIN_RESULT_INCORRECT_PASSWORD":
      return DOTAJoinLobbyResult.DOTA_JOIN_RESULT_INCORRECT_PASSWORD;
    case 4:
    case "DOTA_JOIN_RESULT_ACCESS_DENIED":
      return DOTAJoinLobbyResult.DOTA_JOIN_RESULT_ACCESS_DENIED;
    case 5:
    case "DOTA_JOIN_RESULT_GENERIC_ERROR":
      return DOTAJoinLobbyResult.DOTA_JOIN_RESULT_GENERIC_ERROR;
    case 6:
    case "DOTA_JOIN_RESULT_INCORRECT_VERSION":
      return DOTAJoinLobbyResult.DOTA_JOIN_RESULT_INCORRECT_VERSION;
    case 7:
    case "DOTA_JOIN_RESULT_IN_TEAM_PARTY":
      return DOTAJoinLobbyResult.DOTA_JOIN_RESULT_IN_TEAM_PARTY;
    case 8:
    case "DOTA_JOIN_RESULT_NO_LOBBY_FOUND":
      return DOTAJoinLobbyResult.DOTA_JOIN_RESULT_NO_LOBBY_FOUND;
    case 9:
    case "DOTA_JOIN_RESULT_LOBBY_FULL":
      return DOTAJoinLobbyResult.DOTA_JOIN_RESULT_LOBBY_FULL;
    case 10:
    case "DOTA_JOIN_RESULT_CUSTOM_GAME_INCORRECT_VERSION":
      return DOTAJoinLobbyResult.DOTA_JOIN_RESULT_CUSTOM_GAME_INCORRECT_VERSION;
    case 11:
    case "DOTA_JOIN_RESULT_TIMEOUT":
      return DOTAJoinLobbyResult.DOTA_JOIN_RESULT_TIMEOUT;
    case 12:
    case "DOTA_JOIN_RESULT_CUSTOM_GAME_COOLDOWN":
      return DOTAJoinLobbyResult.DOTA_JOIN_RESULT_CUSTOM_GAME_COOLDOWN;
    case 13:
    case "DOTA_JOIN_RESULT_BUSY":
      return DOTAJoinLobbyResult.DOTA_JOIN_RESULT_BUSY;
    case 14:
    case "DOTA_JOIN_RESULT_NO_PLAYTIME":
      return DOTAJoinLobbyResult.DOTA_JOIN_RESULT_NO_PLAYTIME;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTAJoinLobbyResult");
  }
}

export function dOTAJoinLobbyResultToJSON(object: DOTAJoinLobbyResult): string {
  switch (object) {
    case DOTAJoinLobbyResult.DOTA_JOIN_RESULT_SUCCESS:
      return "DOTA_JOIN_RESULT_SUCCESS";
    case DOTAJoinLobbyResult.DOTA_JOIN_RESULT_ALREADY_IN_GAME:
      return "DOTA_JOIN_RESULT_ALREADY_IN_GAME";
    case DOTAJoinLobbyResult.DOTA_JOIN_RESULT_INVALID_LOBBY:
      return "DOTA_JOIN_RESULT_INVALID_LOBBY";
    case DOTAJoinLobbyResult.DOTA_JOIN_RESULT_INCORRECT_PASSWORD:
      return "DOTA_JOIN_RESULT_INCORRECT_PASSWORD";
    case DOTAJoinLobbyResult.DOTA_JOIN_RESULT_ACCESS_DENIED:
      return "DOTA_JOIN_RESULT_ACCESS_DENIED";
    case DOTAJoinLobbyResult.DOTA_JOIN_RESULT_GENERIC_ERROR:
      return "DOTA_JOIN_RESULT_GENERIC_ERROR";
    case DOTAJoinLobbyResult.DOTA_JOIN_RESULT_INCORRECT_VERSION:
      return "DOTA_JOIN_RESULT_INCORRECT_VERSION";
    case DOTAJoinLobbyResult.DOTA_JOIN_RESULT_IN_TEAM_PARTY:
      return "DOTA_JOIN_RESULT_IN_TEAM_PARTY";
    case DOTAJoinLobbyResult.DOTA_JOIN_RESULT_NO_LOBBY_FOUND:
      return "DOTA_JOIN_RESULT_NO_LOBBY_FOUND";
    case DOTAJoinLobbyResult.DOTA_JOIN_RESULT_LOBBY_FULL:
      return "DOTA_JOIN_RESULT_LOBBY_FULL";
    case DOTAJoinLobbyResult.DOTA_JOIN_RESULT_CUSTOM_GAME_INCORRECT_VERSION:
      return "DOTA_JOIN_RESULT_CUSTOM_GAME_INCORRECT_VERSION";
    case DOTAJoinLobbyResult.DOTA_JOIN_RESULT_TIMEOUT:
      return "DOTA_JOIN_RESULT_TIMEOUT";
    case DOTAJoinLobbyResult.DOTA_JOIN_RESULT_CUSTOM_GAME_COOLDOWN:
      return "DOTA_JOIN_RESULT_CUSTOM_GAME_COOLDOWN";
    case DOTAJoinLobbyResult.DOTA_JOIN_RESULT_BUSY:
      return "DOTA_JOIN_RESULT_BUSY";
    case DOTAJoinLobbyResult.DOTA_JOIN_RESULT_NO_PLAYTIME:
      return "DOTA_JOIN_RESULT_NO_PLAYTIME";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTAJoinLobbyResult");
  }
}

export enum DOTASelectionPriorityRules {
  k_DOTASelectionPriorityRules_Manual = 0,
  k_DOTASelectionPriorityRules_Automatic = 1,
}

export function dOTASelectionPriorityRulesFromJSON(object: any): DOTASelectionPriorityRules {
  switch (object) {
    case 0:
    case "k_DOTASelectionPriorityRules_Manual":
      return DOTASelectionPriorityRules.k_DOTASelectionPriorityRules_Manual;
    case 1:
    case "k_DOTASelectionPriorityRules_Automatic":
      return DOTASelectionPriorityRules.k_DOTASelectionPriorityRules_Automatic;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTASelectionPriorityRules");
  }
}

export function dOTASelectionPriorityRulesToJSON(object: DOTASelectionPriorityRules): string {
  switch (object) {
    case DOTASelectionPriorityRules.k_DOTASelectionPriorityRules_Manual:
      return "k_DOTASelectionPriorityRules_Manual";
    case DOTASelectionPriorityRules.k_DOTASelectionPriorityRules_Automatic:
      return "k_DOTASelectionPriorityRules_Automatic";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTASelectionPriorityRules");
  }
}

export enum DOTASelectionPriorityChoice {
  k_DOTASelectionPriorityChoice_Invalid = 0,
  k_DOTASelectionPriorityChoice_FirstPick = 1,
  k_DOTASelectionPriorityChoice_SecondPick = 2,
  k_DOTASelectionPriorityChoice_Radiant = 3,
  k_DOTASelectionPriorityChoice_Dire = 4,
}

export function dOTASelectionPriorityChoiceFromJSON(object: any): DOTASelectionPriorityChoice {
  switch (object) {
    case 0:
    case "k_DOTASelectionPriorityChoice_Invalid":
      return DOTASelectionPriorityChoice.k_DOTASelectionPriorityChoice_Invalid;
    case 1:
    case "k_DOTASelectionPriorityChoice_FirstPick":
      return DOTASelectionPriorityChoice.k_DOTASelectionPriorityChoice_FirstPick;
    case 2:
    case "k_DOTASelectionPriorityChoice_SecondPick":
      return DOTASelectionPriorityChoice.k_DOTASelectionPriorityChoice_SecondPick;
    case 3:
    case "k_DOTASelectionPriorityChoice_Radiant":
      return DOTASelectionPriorityChoice.k_DOTASelectionPriorityChoice_Radiant;
    case 4:
    case "k_DOTASelectionPriorityChoice_Dire":
      return DOTASelectionPriorityChoice.k_DOTASelectionPriorityChoice_Dire;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTASelectionPriorityChoice");
  }
}

export function dOTASelectionPriorityChoiceToJSON(object: DOTASelectionPriorityChoice): string {
  switch (object) {
    case DOTASelectionPriorityChoice.k_DOTASelectionPriorityChoice_Invalid:
      return "k_DOTASelectionPriorityChoice_Invalid";
    case DOTASelectionPriorityChoice.k_DOTASelectionPriorityChoice_FirstPick:
      return "k_DOTASelectionPriorityChoice_FirstPick";
    case DOTASelectionPriorityChoice.k_DOTASelectionPriorityChoice_SecondPick:
      return "k_DOTASelectionPriorityChoice_SecondPick";
    case DOTASelectionPriorityChoice.k_DOTASelectionPriorityChoice_Radiant:
      return "k_DOTASelectionPriorityChoice_Radiant";
    case DOTASelectionPriorityChoice.k_DOTASelectionPriorityChoice_Dire:
      return "k_DOTASelectionPriorityChoice_Dire";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTASelectionPriorityChoice");
  }
}

export enum DOTAMatchVote {
  DOTAMatchVote_INVALID = 0,
  DOTAMatchVote_POSITIVE = 1,
  DOTAMatchVote_NEGATIVE = 2,
}

export function dOTAMatchVoteFromJSON(object: any): DOTAMatchVote {
  switch (object) {
    case 0:
    case "DOTAMatchVote_INVALID":
      return DOTAMatchVote.DOTAMatchVote_INVALID;
    case 1:
    case "DOTAMatchVote_POSITIVE":
      return DOTAMatchVote.DOTAMatchVote_POSITIVE;
    case 2:
    case "DOTAMatchVote_NEGATIVE":
      return DOTAMatchVote.DOTAMatchVote_NEGATIVE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTAMatchVote");
  }
}

export function dOTAMatchVoteToJSON(object: DOTAMatchVote): string {
  switch (object) {
    case DOTAMatchVote.DOTAMatchVote_INVALID:
      return "DOTAMatchVote_INVALID";
    case DOTAMatchVote.DOTAMatchVote_POSITIVE:
      return "DOTAMatchVote_POSITIVE";
    case DOTAMatchVote.DOTAMatchVote_NEGATIVE:
      return "DOTAMatchVote_NEGATIVE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTAMatchVote");
  }
}

export enum DOTALobbyVisibility {
  DOTALobbyVisibility_Public = 0,
  DOTALobbyVisibility_Friends = 1,
  DOTALobbyVisibility_Unlisted = 2,
}

export function dOTALobbyVisibilityFromJSON(object: any): DOTALobbyVisibility {
  switch (object) {
    case 0:
    case "DOTALobbyVisibility_Public":
      return DOTALobbyVisibility.DOTALobbyVisibility_Public;
    case 1:
    case "DOTALobbyVisibility_Friends":
      return DOTALobbyVisibility.DOTALobbyVisibility_Friends;
    case 2:
    case "DOTALobbyVisibility_Unlisted":
      return DOTALobbyVisibility.DOTALobbyVisibility_Unlisted;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTALobbyVisibility");
  }
}

export function dOTALobbyVisibilityToJSON(object: DOTALobbyVisibility): string {
  switch (object) {
    case DOTALobbyVisibility.DOTALobbyVisibility_Public:
      return "DOTALobbyVisibility_Public";
    case DOTALobbyVisibility.DOTALobbyVisibility_Friends:
      return "DOTALobbyVisibility_Friends";
    case DOTALobbyVisibility.DOTALobbyVisibility_Unlisted:
      return "DOTALobbyVisibility_Unlisted";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTALobbyVisibility");
  }
}

export enum EDOTAPlayerMMRType {
  k_EDOTAPlayerMMRType_Invalid = 0,
  k_EDOTAPlayerMMRType_GeneralHidden = 1,
  k_EDOTAPlayerMMRType_GeneralCompetitive = 3,
}

export function eDOTAPlayerMMRTypeFromJSON(object: any): EDOTAPlayerMMRType {
  switch (object) {
    case 0:
    case "k_EDOTAPlayerMMRType_Invalid":
      return EDOTAPlayerMMRType.k_EDOTAPlayerMMRType_Invalid;
    case 1:
    case "k_EDOTAPlayerMMRType_GeneralHidden":
      return EDOTAPlayerMMRType.k_EDOTAPlayerMMRType_GeneralHidden;
    case 3:
    case "k_EDOTAPlayerMMRType_GeneralCompetitive":
      return EDOTAPlayerMMRType.k_EDOTAPlayerMMRType_GeneralCompetitive;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDOTAPlayerMMRType");
  }
}

export function eDOTAPlayerMMRTypeToJSON(object: EDOTAPlayerMMRType): string {
  switch (object) {
    case EDOTAPlayerMMRType.k_EDOTAPlayerMMRType_Invalid:
      return "k_EDOTAPlayerMMRType_Invalid";
    case EDOTAPlayerMMRType.k_EDOTAPlayerMMRType_GeneralHidden:
      return "k_EDOTAPlayerMMRType_GeneralHidden";
    case EDOTAPlayerMMRType.k_EDOTAPlayerMMRType_GeneralCompetitive:
      return "k_EDOTAPlayerMMRType_GeneralCompetitive";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDOTAPlayerMMRType");
  }
}

export enum EDOTAMMRBoostType {
  k_EDOTAMMRBoostType_None = 0,
  k_EDOTAMMRBoostType_Leader = 1,
  k_EDOTAMMRBoostType_Follower = 2,
}

export function eDOTAMMRBoostTypeFromJSON(object: any): EDOTAMMRBoostType {
  switch (object) {
    case 0:
    case "k_EDOTAMMRBoostType_None":
      return EDOTAMMRBoostType.k_EDOTAMMRBoostType_None;
    case 1:
    case "k_EDOTAMMRBoostType_Leader":
      return EDOTAMMRBoostType.k_EDOTAMMRBoostType_Leader;
    case 2:
    case "k_EDOTAMMRBoostType_Follower":
      return EDOTAMMRBoostType.k_EDOTAMMRBoostType_Follower;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDOTAMMRBoostType");
  }
}

export function eDOTAMMRBoostTypeToJSON(object: EDOTAMMRBoostType): string {
  switch (object) {
    case EDOTAMMRBoostType.k_EDOTAMMRBoostType_None:
      return "k_EDOTAMMRBoostType_None";
    case EDOTAMMRBoostType.k_EDOTAMMRBoostType_Leader:
      return "k_EDOTAMMRBoostType_Leader";
    case EDOTAMMRBoostType.k_EDOTAMMRBoostType_Follower:
      return "k_EDOTAMMRBoostType_Follower";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDOTAMMRBoostType");
  }
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

export function matchTypeFromJSON(object: any): MatchType {
  switch (object) {
    case 0:
    case "MATCH_TYPE_CASUAL":
      return MatchType.MATCH_TYPE_CASUAL;
    case 1:
    case "MATCH_TYPE_COOP_BOTS":
      return MatchType.MATCH_TYPE_COOP_BOTS;
    case 4:
    case "MATCH_TYPE_COMPETITIVE":
      return MatchType.MATCH_TYPE_COMPETITIVE;
    case 5:
    case "MATCH_TYPE_WEEKEND_TOURNEY":
      return MatchType.MATCH_TYPE_WEEKEND_TOURNEY;
    case 7:
    case "MATCH_TYPE_EVENT":
      return MatchType.MATCH_TYPE_EVENT;
    case 12:
    case "MATCH_TYPE_COACHES_CHALLENGE":
      return MatchType.MATCH_TYPE_COACHES_CHALLENGE;
    case 14:
    case "MATCH_TYPE_NEW_PLAYER_POOL":
      return MatchType.MATCH_TYPE_NEW_PLAYER_POOL;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum MatchType");
  }
}

export function matchTypeToJSON(object: MatchType): string {
  switch (object) {
    case MatchType.MATCH_TYPE_CASUAL:
      return "MATCH_TYPE_CASUAL";
    case MatchType.MATCH_TYPE_COOP_BOTS:
      return "MATCH_TYPE_COOP_BOTS";
    case MatchType.MATCH_TYPE_COMPETITIVE:
      return "MATCH_TYPE_COMPETITIVE";
    case MatchType.MATCH_TYPE_WEEKEND_TOURNEY:
      return "MATCH_TYPE_WEEKEND_TOURNEY";
    case MatchType.MATCH_TYPE_EVENT:
      return "MATCH_TYPE_EVENT";
    case MatchType.MATCH_TYPE_COACHES_CHALLENGE:
      return "MATCH_TYPE_COACHES_CHALLENGE";
    case MatchType.MATCH_TYPE_NEW_PLAYER_POOL:
      return "MATCH_TYPE_NEW_PLAYER_POOL";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum MatchType");
  }
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

export function dOTABotDifficultyFromJSON(object: any): DOTABotDifficulty {
  switch (object) {
    case 0:
    case "BOT_DIFFICULTY_PASSIVE":
      return DOTABotDifficulty.BOT_DIFFICULTY_PASSIVE;
    case 1:
    case "BOT_DIFFICULTY_EASY":
      return DOTABotDifficulty.BOT_DIFFICULTY_EASY;
    case 2:
    case "BOT_DIFFICULTY_MEDIUM":
      return DOTABotDifficulty.BOT_DIFFICULTY_MEDIUM;
    case 3:
    case "BOT_DIFFICULTY_HARD":
      return DOTABotDifficulty.BOT_DIFFICULTY_HARD;
    case 4:
    case "BOT_DIFFICULTY_UNFAIR":
      return DOTABotDifficulty.BOT_DIFFICULTY_UNFAIR;
    case 5:
    case "BOT_DIFFICULTY_INVALID":
      return DOTABotDifficulty.BOT_DIFFICULTY_INVALID;
    case 6:
    case "BOT_DIFFICULTY_EXTRA1":
      return DOTABotDifficulty.BOT_DIFFICULTY_EXTRA1;
    case 7:
    case "BOT_DIFFICULTY_EXTRA2":
      return DOTABotDifficulty.BOT_DIFFICULTY_EXTRA2;
    case 8:
    case "BOT_DIFFICULTY_EXTRA3":
      return DOTABotDifficulty.BOT_DIFFICULTY_EXTRA3;
    case 9:
    case "BOT_DIFFICULTY_NPX":
      return DOTABotDifficulty.BOT_DIFFICULTY_NPX;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTABotDifficulty");
  }
}

export function dOTABotDifficultyToJSON(object: DOTABotDifficulty): string {
  switch (object) {
    case DOTABotDifficulty.BOT_DIFFICULTY_PASSIVE:
      return "BOT_DIFFICULTY_PASSIVE";
    case DOTABotDifficulty.BOT_DIFFICULTY_EASY:
      return "BOT_DIFFICULTY_EASY";
    case DOTABotDifficulty.BOT_DIFFICULTY_MEDIUM:
      return "BOT_DIFFICULTY_MEDIUM";
    case DOTABotDifficulty.BOT_DIFFICULTY_HARD:
      return "BOT_DIFFICULTY_HARD";
    case DOTABotDifficulty.BOT_DIFFICULTY_UNFAIR:
      return "BOT_DIFFICULTY_UNFAIR";
    case DOTABotDifficulty.BOT_DIFFICULTY_INVALID:
      return "BOT_DIFFICULTY_INVALID";
    case DOTABotDifficulty.BOT_DIFFICULTY_EXTRA1:
      return "BOT_DIFFICULTY_EXTRA1";
    case DOTABotDifficulty.BOT_DIFFICULTY_EXTRA2:
      return "BOT_DIFFICULTY_EXTRA2";
    case DOTABotDifficulty.BOT_DIFFICULTY_EXTRA3:
      return "BOT_DIFFICULTY_EXTRA3";
    case DOTABotDifficulty.BOT_DIFFICULTY_NPX:
      return "BOT_DIFFICULTY_NPX";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DOTABotDifficulty");
  }
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

export function dotaBotModeFromJSON(object: any): dotaBotMode {
  switch (object) {
    case 0:
    case "DOTA_BOT_MODE_NONE":
      return dotaBotMode.DOTA_BOT_MODE_NONE;
    case 1:
    case "DOTA_BOT_MODE_LANING":
      return dotaBotMode.DOTA_BOT_MODE_LANING;
    case 2:
    case "DOTA_BOT_MODE_ATTACK":
      return dotaBotMode.DOTA_BOT_MODE_ATTACK;
    case 3:
    case "DOTA_BOT_MODE_ROAM":
      return dotaBotMode.DOTA_BOT_MODE_ROAM;
    case 4:
    case "DOTA_BOT_MODE_RETREAT":
      return dotaBotMode.DOTA_BOT_MODE_RETREAT;
    case 5:
    case "DOTA_BOT_MODE_SECRET_SHOP":
      return dotaBotMode.DOTA_BOT_MODE_SECRET_SHOP;
    case 6:
    case "DOTA_BOT_MODE_SIDE_SHOP":
      return dotaBotMode.DOTA_BOT_MODE_SIDE_SHOP;
    case 7:
    case "DOTA_BOT_MODE_RUNE":
      return dotaBotMode.DOTA_BOT_MODE_RUNE;
    case 8:
    case "DOTA_BOT_MODE_PUSH_TOWER_TOP":
      return dotaBotMode.DOTA_BOT_MODE_PUSH_TOWER_TOP;
    case 9:
    case "DOTA_BOT_MODE_PUSH_TOWER_MID":
      return dotaBotMode.DOTA_BOT_MODE_PUSH_TOWER_MID;
    case 10:
    case "DOTA_BOT_MODE_PUSH_TOWER_BOT":
      return dotaBotMode.DOTA_BOT_MODE_PUSH_TOWER_BOT;
    case 11:
    case "DOTA_BOT_MODE_DEFEND_TOWER_TOP":
      return dotaBotMode.DOTA_BOT_MODE_DEFEND_TOWER_TOP;
    case 12:
    case "DOTA_BOT_MODE_DEFEND_TOWER_MID":
      return dotaBotMode.DOTA_BOT_MODE_DEFEND_TOWER_MID;
    case 13:
    case "DOTA_BOT_MODE_DEFEND_TOWER_BOT":
      return dotaBotMode.DOTA_BOT_MODE_DEFEND_TOWER_BOT;
    case 14:
    case "DOTA_BOT_MODE_ASSEMBLE":
      return dotaBotMode.DOTA_BOT_MODE_ASSEMBLE;
    case 15:
    case "DOTA_BOT_MODE_ASSEMBLE_WITH_HUMANS":
      return dotaBotMode.DOTA_BOT_MODE_ASSEMBLE_WITH_HUMANS;
    case 16:
    case "DOTA_BOT_MODE_TEAM_ROAM":
      return dotaBotMode.DOTA_BOT_MODE_TEAM_ROAM;
    case 17:
    case "DOTA_BOT_MODE_FARM":
      return dotaBotMode.DOTA_BOT_MODE_FARM;
    case 18:
    case "DOTA_BOT_MODE_DEFEND_ALLY":
      return dotaBotMode.DOTA_BOT_MODE_DEFEND_ALLY;
    case 19:
    case "DOTA_BOT_MODE_EVASIVE_MANEUVERS":
      return dotaBotMode.DOTA_BOT_MODE_EVASIVE_MANEUVERS;
    case 20:
    case "DOTA_BOT_MODE_ROSHAN":
      return dotaBotMode.DOTA_BOT_MODE_ROSHAN;
    case 21:
    case "DOTA_BOT_MODE_ITEM":
      return dotaBotMode.DOTA_BOT_MODE_ITEM;
    case 22:
    case "DOTA_BOT_MODE_WARD":
      return dotaBotMode.DOTA_BOT_MODE_WARD;
    case 23:
    case "DOTA_BOT_MODE_COMPANION":
      return dotaBotMode.DOTA_BOT_MODE_COMPANION;
    case 24:
    case "DOTA_BOT_MODE_TUTORIAL_BOSS":
      return dotaBotMode.DOTA_BOT_MODE_TUTORIAL_BOSS;
    case 25:
    case "DOTA_BOT_MODE_MINION":
      return dotaBotMode.DOTA_BOT_MODE_MINION;
    case 26:
    case "DOTA_BOT_MODE_OUTPOST":
      return dotaBotMode.DOTA_BOT_MODE_OUTPOST;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaBotMode");
  }
}

export function dotaBotModeToJSON(object: dotaBotMode): string {
  switch (object) {
    case dotaBotMode.DOTA_BOT_MODE_NONE:
      return "DOTA_BOT_MODE_NONE";
    case dotaBotMode.DOTA_BOT_MODE_LANING:
      return "DOTA_BOT_MODE_LANING";
    case dotaBotMode.DOTA_BOT_MODE_ATTACK:
      return "DOTA_BOT_MODE_ATTACK";
    case dotaBotMode.DOTA_BOT_MODE_ROAM:
      return "DOTA_BOT_MODE_ROAM";
    case dotaBotMode.DOTA_BOT_MODE_RETREAT:
      return "DOTA_BOT_MODE_RETREAT";
    case dotaBotMode.DOTA_BOT_MODE_SECRET_SHOP:
      return "DOTA_BOT_MODE_SECRET_SHOP";
    case dotaBotMode.DOTA_BOT_MODE_SIDE_SHOP:
      return "DOTA_BOT_MODE_SIDE_SHOP";
    case dotaBotMode.DOTA_BOT_MODE_RUNE:
      return "DOTA_BOT_MODE_RUNE";
    case dotaBotMode.DOTA_BOT_MODE_PUSH_TOWER_TOP:
      return "DOTA_BOT_MODE_PUSH_TOWER_TOP";
    case dotaBotMode.DOTA_BOT_MODE_PUSH_TOWER_MID:
      return "DOTA_BOT_MODE_PUSH_TOWER_MID";
    case dotaBotMode.DOTA_BOT_MODE_PUSH_TOWER_BOT:
      return "DOTA_BOT_MODE_PUSH_TOWER_BOT";
    case dotaBotMode.DOTA_BOT_MODE_DEFEND_TOWER_TOP:
      return "DOTA_BOT_MODE_DEFEND_TOWER_TOP";
    case dotaBotMode.DOTA_BOT_MODE_DEFEND_TOWER_MID:
      return "DOTA_BOT_MODE_DEFEND_TOWER_MID";
    case dotaBotMode.DOTA_BOT_MODE_DEFEND_TOWER_BOT:
      return "DOTA_BOT_MODE_DEFEND_TOWER_BOT";
    case dotaBotMode.DOTA_BOT_MODE_ASSEMBLE:
      return "DOTA_BOT_MODE_ASSEMBLE";
    case dotaBotMode.DOTA_BOT_MODE_ASSEMBLE_WITH_HUMANS:
      return "DOTA_BOT_MODE_ASSEMBLE_WITH_HUMANS";
    case dotaBotMode.DOTA_BOT_MODE_TEAM_ROAM:
      return "DOTA_BOT_MODE_TEAM_ROAM";
    case dotaBotMode.DOTA_BOT_MODE_FARM:
      return "DOTA_BOT_MODE_FARM";
    case dotaBotMode.DOTA_BOT_MODE_DEFEND_ALLY:
      return "DOTA_BOT_MODE_DEFEND_ALLY";
    case dotaBotMode.DOTA_BOT_MODE_EVASIVE_MANEUVERS:
      return "DOTA_BOT_MODE_EVASIVE_MANEUVERS";
    case dotaBotMode.DOTA_BOT_MODE_ROSHAN:
      return "DOTA_BOT_MODE_ROSHAN";
    case dotaBotMode.DOTA_BOT_MODE_ITEM:
      return "DOTA_BOT_MODE_ITEM";
    case dotaBotMode.DOTA_BOT_MODE_WARD:
      return "DOTA_BOT_MODE_WARD";
    case dotaBotMode.DOTA_BOT_MODE_COMPANION:
      return "DOTA_BOT_MODE_COMPANION";
    case dotaBotMode.DOTA_BOT_MODE_TUTORIAL_BOSS:
      return "DOTA_BOT_MODE_TUTORIAL_BOSS";
    case dotaBotMode.DOTA_BOT_MODE_MINION:
      return "DOTA_BOT_MODE_MINION";
    case dotaBotMode.DOTA_BOT_MODE_OUTPOST:
      return "DOTA_BOT_MODE_OUTPOST";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaBotMode");
  }
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

export function matchLanguagesFromJSON(object: any): MatchLanguages {
  switch (object) {
    case 0:
    case "MATCH_LANGUAGE_INVALID":
      return MatchLanguages.MATCH_LANGUAGE_INVALID;
    case 1:
    case "MATCH_LANGUAGE_ENGLISH":
      return MatchLanguages.MATCH_LANGUAGE_ENGLISH;
    case 2:
    case "MATCH_LANGUAGE_RUSSIAN":
      return MatchLanguages.MATCH_LANGUAGE_RUSSIAN;
    case 3:
    case "MATCH_LANGUAGE_CHINESE":
      return MatchLanguages.MATCH_LANGUAGE_CHINESE;
    case 4:
    case "MATCH_LANGUAGE_KOREAN":
      return MatchLanguages.MATCH_LANGUAGE_KOREAN;
    case 5:
    case "MATCH_LANGUAGE_SPANISH":
      return MatchLanguages.MATCH_LANGUAGE_SPANISH;
    case 6:
    case "MATCH_LANGUAGE_PORTUGUESE":
      return MatchLanguages.MATCH_LANGUAGE_PORTUGUESE;
    case 7:
    case "MATCH_LANGUAGE_ENGLISH2":
      return MatchLanguages.MATCH_LANGUAGE_ENGLISH2;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum MatchLanguages");
  }
}

export function matchLanguagesToJSON(object: MatchLanguages): string {
  switch (object) {
    case MatchLanguages.MATCH_LANGUAGE_INVALID:
      return "MATCH_LANGUAGE_INVALID";
    case MatchLanguages.MATCH_LANGUAGE_ENGLISH:
      return "MATCH_LANGUAGE_ENGLISH";
    case MatchLanguages.MATCH_LANGUAGE_RUSSIAN:
      return "MATCH_LANGUAGE_RUSSIAN";
    case MatchLanguages.MATCH_LANGUAGE_CHINESE:
      return "MATCH_LANGUAGE_CHINESE";
    case MatchLanguages.MATCH_LANGUAGE_KOREAN:
      return "MATCH_LANGUAGE_KOREAN";
    case MatchLanguages.MATCH_LANGUAGE_SPANISH:
      return "MATCH_LANGUAGE_SPANISH";
    case MatchLanguages.MATCH_LANGUAGE_PORTUGUESE:
      return "MATCH_LANGUAGE_PORTUGUESE";
    case MatchLanguages.MATCH_LANGUAGE_ENGLISH2:
      return "MATCH_LANGUAGE_ENGLISH2";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum MatchLanguages");
  }
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

export function eTourneyQueueDeadlineStateFromJSON(object: any): ETourneyQueueDeadlineState {
  switch (object) {
    case 0:
    case "k_ETourneyQueueDeadlineState_Normal":
      return ETourneyQueueDeadlineState.k_ETourneyQueueDeadlineState_Normal;
    case 1:
    case "k_ETourneyQueueDeadlineState_Missed":
      return ETourneyQueueDeadlineState.k_ETourneyQueueDeadlineState_Missed;
    case 2:
    case "k_ETourneyQueueDeadlineState_ExpiredOK":
      return ETourneyQueueDeadlineState.k_ETourneyQueueDeadlineState_ExpiredOK;
    case 3:
    case "k_ETourneyQueueDeadlineState_SeekingBye":
      return ETourneyQueueDeadlineState.k_ETourneyQueueDeadlineState_SeekingBye;
    case 4:
    case "k_ETourneyQueueDeadlineState_EligibleForRefund":
      return ETourneyQueueDeadlineState.k_ETourneyQueueDeadlineState_EligibleForRefund;
    case -1:
    case "k_ETourneyQueueDeadlineState_NA":
      return ETourneyQueueDeadlineState.k_ETourneyQueueDeadlineState_NA;
    case 101:
    case "k_ETourneyQueueDeadlineState_ExpiringSoon":
      return ETourneyQueueDeadlineState.k_ETourneyQueueDeadlineState_ExpiringSoon;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETourneyQueueDeadlineState");
  }
}

export function eTourneyQueueDeadlineStateToJSON(object: ETourneyQueueDeadlineState): string {
  switch (object) {
    case ETourneyQueueDeadlineState.k_ETourneyQueueDeadlineState_Normal:
      return "k_ETourneyQueueDeadlineState_Normal";
    case ETourneyQueueDeadlineState.k_ETourneyQueueDeadlineState_Missed:
      return "k_ETourneyQueueDeadlineState_Missed";
    case ETourneyQueueDeadlineState.k_ETourneyQueueDeadlineState_ExpiredOK:
      return "k_ETourneyQueueDeadlineState_ExpiredOK";
    case ETourneyQueueDeadlineState.k_ETourneyQueueDeadlineState_SeekingBye:
      return "k_ETourneyQueueDeadlineState_SeekingBye";
    case ETourneyQueueDeadlineState.k_ETourneyQueueDeadlineState_EligibleForRefund:
      return "k_ETourneyQueueDeadlineState_EligibleForRefund";
    case ETourneyQueueDeadlineState.k_ETourneyQueueDeadlineState_NA:
      return "k_ETourneyQueueDeadlineState_NA";
    case ETourneyQueueDeadlineState.k_ETourneyQueueDeadlineState_ExpiringSoon:
      return "k_ETourneyQueueDeadlineState_ExpiringSoon";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ETourneyQueueDeadlineState");
  }
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

export function eMatchOutcomeFromJSON(object: any): EMatchOutcome {
  switch (object) {
    case 0:
    case "k_EMatchOutcome_Unknown":
      return EMatchOutcome.k_EMatchOutcome_Unknown;
    case 2:
    case "k_EMatchOutcome_RadVictory":
      return EMatchOutcome.k_EMatchOutcome_RadVictory;
    case 3:
    case "k_EMatchOutcome_DireVictory":
      return EMatchOutcome.k_EMatchOutcome_DireVictory;
    case 4:
    case "k_EMatchOutcome_NeutralVictory":
      return EMatchOutcome.k_EMatchOutcome_NeutralVictory;
    case 5:
    case "k_EMatchOutcome_NoTeamWinner":
      return EMatchOutcome.k_EMatchOutcome_NoTeamWinner;
    case 6:
    case "k_EMatchOutcome_Custom1Victory":
      return EMatchOutcome.k_EMatchOutcome_Custom1Victory;
    case 7:
    case "k_EMatchOutcome_Custom2Victory":
      return EMatchOutcome.k_EMatchOutcome_Custom2Victory;
    case 8:
    case "k_EMatchOutcome_Custom3Victory":
      return EMatchOutcome.k_EMatchOutcome_Custom3Victory;
    case 9:
    case "k_EMatchOutcome_Custom4Victory":
      return EMatchOutcome.k_EMatchOutcome_Custom4Victory;
    case 10:
    case "k_EMatchOutcome_Custom5Victory":
      return EMatchOutcome.k_EMatchOutcome_Custom5Victory;
    case 11:
    case "k_EMatchOutcome_Custom6Victory":
      return EMatchOutcome.k_EMatchOutcome_Custom6Victory;
    case 12:
    case "k_EMatchOutcome_Custom7Victory":
      return EMatchOutcome.k_EMatchOutcome_Custom7Victory;
    case 13:
    case "k_EMatchOutcome_Custom8Victory":
      return EMatchOutcome.k_EMatchOutcome_Custom8Victory;
    case 64:
    case "k_EMatchOutcome_NotScored_PoorNetworkConditions":
      return EMatchOutcome.k_EMatchOutcome_NotScored_PoorNetworkConditions;
    case 65:
    case "k_EMatchOutcome_NotScored_Leaver":
      return EMatchOutcome.k_EMatchOutcome_NotScored_Leaver;
    case 66:
    case "k_EMatchOutcome_NotScored_ServerCrash":
      return EMatchOutcome.k_EMatchOutcome_NotScored_ServerCrash;
    case 67:
    case "k_EMatchOutcome_NotScored_NeverStarted":
      return EMatchOutcome.k_EMatchOutcome_NotScored_NeverStarted;
    case 68:
    case "k_EMatchOutcome_NotScored_Canceled":
      return EMatchOutcome.k_EMatchOutcome_NotScored_Canceled;
    case 69:
    case "k_EMatchOutcome_NotScored_Suspicious":
      return EMatchOutcome.k_EMatchOutcome_NotScored_Suspicious;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EMatchOutcome");
  }
}

export function eMatchOutcomeToJSON(object: EMatchOutcome): string {
  switch (object) {
    case EMatchOutcome.k_EMatchOutcome_Unknown:
      return "k_EMatchOutcome_Unknown";
    case EMatchOutcome.k_EMatchOutcome_RadVictory:
      return "k_EMatchOutcome_RadVictory";
    case EMatchOutcome.k_EMatchOutcome_DireVictory:
      return "k_EMatchOutcome_DireVictory";
    case EMatchOutcome.k_EMatchOutcome_NeutralVictory:
      return "k_EMatchOutcome_NeutralVictory";
    case EMatchOutcome.k_EMatchOutcome_NoTeamWinner:
      return "k_EMatchOutcome_NoTeamWinner";
    case EMatchOutcome.k_EMatchOutcome_Custom1Victory:
      return "k_EMatchOutcome_Custom1Victory";
    case EMatchOutcome.k_EMatchOutcome_Custom2Victory:
      return "k_EMatchOutcome_Custom2Victory";
    case EMatchOutcome.k_EMatchOutcome_Custom3Victory:
      return "k_EMatchOutcome_Custom3Victory";
    case EMatchOutcome.k_EMatchOutcome_Custom4Victory:
      return "k_EMatchOutcome_Custom4Victory";
    case EMatchOutcome.k_EMatchOutcome_Custom5Victory:
      return "k_EMatchOutcome_Custom5Victory";
    case EMatchOutcome.k_EMatchOutcome_Custom6Victory:
      return "k_EMatchOutcome_Custom6Victory";
    case EMatchOutcome.k_EMatchOutcome_Custom7Victory:
      return "k_EMatchOutcome_Custom7Victory";
    case EMatchOutcome.k_EMatchOutcome_Custom8Victory:
      return "k_EMatchOutcome_Custom8Victory";
    case EMatchOutcome.k_EMatchOutcome_NotScored_PoorNetworkConditions:
      return "k_EMatchOutcome_NotScored_PoorNetworkConditions";
    case EMatchOutcome.k_EMatchOutcome_NotScored_Leaver:
      return "k_EMatchOutcome_NotScored_Leaver";
    case EMatchOutcome.k_EMatchOutcome_NotScored_ServerCrash:
      return "k_EMatchOutcome_NotScored_ServerCrash";
    case EMatchOutcome.k_EMatchOutcome_NotScored_NeverStarted:
      return "k_EMatchOutcome_NotScored_NeverStarted";
    case EMatchOutcome.k_EMatchOutcome_NotScored_Canceled:
      return "k_EMatchOutcome_NotScored_Canceled";
    case EMatchOutcome.k_EMatchOutcome_NotScored_Suspicious:
      return "k_EMatchOutcome_NotScored_Suspicious";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EMatchOutcome");
  }
}

export enum ELaneType {
  LANE_TYPE_UNKNOWN = 0,
  LANE_TYPE_SAFE = 1,
  LANE_TYPE_OFF = 2,
  LANE_TYPE_MID = 3,
  LANE_TYPE_JUNGLE = 4,
  LANE_TYPE_ROAM = 5,
}

export function eLaneTypeFromJSON(object: any): ELaneType {
  switch (object) {
    case 0:
    case "LANE_TYPE_UNKNOWN":
      return ELaneType.LANE_TYPE_UNKNOWN;
    case 1:
    case "LANE_TYPE_SAFE":
      return ELaneType.LANE_TYPE_SAFE;
    case 2:
    case "LANE_TYPE_OFF":
      return ELaneType.LANE_TYPE_OFF;
    case 3:
    case "LANE_TYPE_MID":
      return ELaneType.LANE_TYPE_MID;
    case 4:
    case "LANE_TYPE_JUNGLE":
      return ELaneType.LANE_TYPE_JUNGLE;
    case 5:
    case "LANE_TYPE_ROAM":
      return ELaneType.LANE_TYPE_ROAM;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELaneType");
  }
}

export function eLaneTypeToJSON(object: ELaneType): string {
  switch (object) {
    case ELaneType.LANE_TYPE_UNKNOWN:
      return "LANE_TYPE_UNKNOWN";
    case ELaneType.LANE_TYPE_SAFE:
      return "LANE_TYPE_SAFE";
    case ELaneType.LANE_TYPE_OFF:
      return "LANE_TYPE_OFF";
    case ELaneType.LANE_TYPE_MID:
      return "LANE_TYPE_MID";
    case ELaneType.LANE_TYPE_JUNGLE:
      return "LANE_TYPE_JUNGLE";
    case ELaneType.LANE_TYPE_ROAM:
      return "LANE_TYPE_ROAM";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELaneType");
  }
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

export function eBadgeTypeFromJSON(object: any): EBadgeType {
  switch (object) {
    case 1:
    case "k_EBadgeType_TI7_Midweek":
      return EBadgeType.k_EBadgeType_TI7_Midweek;
    case 2:
    case "k_EBadgeType_TI7_Finals":
      return EBadgeType.k_EBadgeType_TI7_Finals;
    case 3:
    case "k_EBadgeType_TI7_AllEvent":
      return EBadgeType.k_EBadgeType_TI7_AllEvent;
    case 4:
    case "k_EBadgeType_TI8_Midweek":
      return EBadgeType.k_EBadgeType_TI8_Midweek;
    case 5:
    case "k_EBadgeType_TI8_Finals":
      return EBadgeType.k_EBadgeType_TI8_Finals;
    case 6:
    case "k_EBadgeType_TI8_AllEvent":
      return EBadgeType.k_EBadgeType_TI8_AllEvent;
    case 7:
    case "k_EBadgeType_TI10":
      return EBadgeType.k_EBadgeType_TI10;
    case 8:
    case "k_EBadgeType_TI11_PlayoffsDay1":
      return EBadgeType.k_EBadgeType_TI11_PlayoffsDay1;
    case 9:
    case "k_EBadgeType_TI11_PlayoffsDay2":
      return EBadgeType.k_EBadgeType_TI11_PlayoffsDay2;
    case 10:
    case "k_EBadgeType_TI11_PlayoffsDay3":
      return EBadgeType.k_EBadgeType_TI11_PlayoffsDay3;
    case 11:
    case "k_EBadgeType_TI11_PlayoffsDay4":
      return EBadgeType.k_EBadgeType_TI11_PlayoffsDay4;
    case 12:
    case "k_EBadgeType_TI11_FinalsWeekend":
      return EBadgeType.k_EBadgeType_TI11_FinalsWeekend;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EBadgeType");
  }
}

export function eBadgeTypeToJSON(object: EBadgeType): string {
  switch (object) {
    case EBadgeType.k_EBadgeType_TI7_Midweek:
      return "k_EBadgeType_TI7_Midweek";
    case EBadgeType.k_EBadgeType_TI7_Finals:
      return "k_EBadgeType_TI7_Finals";
    case EBadgeType.k_EBadgeType_TI7_AllEvent:
      return "k_EBadgeType_TI7_AllEvent";
    case EBadgeType.k_EBadgeType_TI8_Midweek:
      return "k_EBadgeType_TI8_Midweek";
    case EBadgeType.k_EBadgeType_TI8_Finals:
      return "k_EBadgeType_TI8_Finals";
    case EBadgeType.k_EBadgeType_TI8_AllEvent:
      return "k_EBadgeType_TI8_AllEvent";
    case EBadgeType.k_EBadgeType_TI10:
      return "k_EBadgeType_TI10";
    case EBadgeType.k_EBadgeType_TI11_PlayoffsDay1:
      return "k_EBadgeType_TI11_PlayoffsDay1";
    case EBadgeType.k_EBadgeType_TI11_PlayoffsDay2:
      return "k_EBadgeType_TI11_PlayoffsDay2";
    case EBadgeType.k_EBadgeType_TI11_PlayoffsDay3:
      return "k_EBadgeType_TI11_PlayoffsDay3";
    case EBadgeType.k_EBadgeType_TI11_PlayoffsDay4:
      return "k_EBadgeType_TI11_PlayoffsDay4";
    case EBadgeType.k_EBadgeType_TI11_FinalsWeekend:
      return "k_EBadgeType_TI11_FinalsWeekend";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EBadgeType");
  }
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

export function eLeagueStatusFromJSON(object: any): ELeagueStatus {
  switch (object) {
    case 0:
    case "LEAGUE_STATUS_UNSET":
      return ELeagueStatus.LEAGUE_STATUS_UNSET;
    case 1:
    case "LEAGUE_STATUS_UNSUBMITTED":
      return ELeagueStatus.LEAGUE_STATUS_UNSUBMITTED;
    case 2:
    case "LEAGUE_STATUS_SUBMITTED":
      return ELeagueStatus.LEAGUE_STATUS_SUBMITTED;
    case 3:
    case "LEAGUE_STATUS_ACCEPTED":
      return ELeagueStatus.LEAGUE_STATUS_ACCEPTED;
    case 4:
    case "LEAGUE_STATUS_REJECTED":
      return ELeagueStatus.LEAGUE_STATUS_REJECTED;
    case 5:
    case "LEAGUE_STATUS_CONCLUDED":
      return ELeagueStatus.LEAGUE_STATUS_CONCLUDED;
    case 6:
    case "LEAGUE_STATUS_DELETED":
      return ELeagueStatus.LEAGUE_STATUS_DELETED;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELeagueStatus");
  }
}

export function eLeagueStatusToJSON(object: ELeagueStatus): string {
  switch (object) {
    case ELeagueStatus.LEAGUE_STATUS_UNSET:
      return "LEAGUE_STATUS_UNSET";
    case ELeagueStatus.LEAGUE_STATUS_UNSUBMITTED:
      return "LEAGUE_STATUS_UNSUBMITTED";
    case ELeagueStatus.LEAGUE_STATUS_SUBMITTED:
      return "LEAGUE_STATUS_SUBMITTED";
    case ELeagueStatus.LEAGUE_STATUS_ACCEPTED:
      return "LEAGUE_STATUS_ACCEPTED";
    case ELeagueStatus.LEAGUE_STATUS_REJECTED:
      return "LEAGUE_STATUS_REJECTED";
    case ELeagueStatus.LEAGUE_STATUS_CONCLUDED:
      return "LEAGUE_STATUS_CONCLUDED";
    case ELeagueStatus.LEAGUE_STATUS_DELETED:
      return "LEAGUE_STATUS_DELETED";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELeagueStatus");
  }
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

export function eLeagueRegionFromJSON(object: any): ELeagueRegion {
  switch (object) {
    case 0:
    case "LEAGUE_REGION_UNSET":
      return ELeagueRegion.LEAGUE_REGION_UNSET;
    case 1:
    case "LEAGUE_REGION_NA":
      return ELeagueRegion.LEAGUE_REGION_NA;
    case 2:
    case "LEAGUE_REGION_SA":
      return ELeagueRegion.LEAGUE_REGION_SA;
    case 3:
    case "LEAGUE_REGION_WEU":
      return ELeagueRegion.LEAGUE_REGION_WEU;
    case 4:
    case "LEAGUE_REGION_EEU":
      return ELeagueRegion.LEAGUE_REGION_EEU;
    case 5:
    case "LEAGUE_REGION_CHINA":
      return ELeagueRegion.LEAGUE_REGION_CHINA;
    case 6:
    case "LEAGUE_REGION_SEA":
      return ELeagueRegion.LEAGUE_REGION_SEA;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELeagueRegion");
  }
}

export function eLeagueRegionToJSON(object: ELeagueRegion): string {
  switch (object) {
    case ELeagueRegion.LEAGUE_REGION_UNSET:
      return "LEAGUE_REGION_UNSET";
    case ELeagueRegion.LEAGUE_REGION_NA:
      return "LEAGUE_REGION_NA";
    case ELeagueRegion.LEAGUE_REGION_SA:
      return "LEAGUE_REGION_SA";
    case ELeagueRegion.LEAGUE_REGION_WEU:
      return "LEAGUE_REGION_WEU";
    case ELeagueRegion.LEAGUE_REGION_EEU:
      return "LEAGUE_REGION_EEU";
    case ELeagueRegion.LEAGUE_REGION_CHINA:
      return "LEAGUE_REGION_CHINA";
    case ELeagueRegion.LEAGUE_REGION_SEA:
      return "LEAGUE_REGION_SEA";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELeagueRegion");
  }
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

export function eLeagueTierFromJSON(object: any): ELeagueTier {
  switch (object) {
    case 0:
    case "LEAGUE_TIER_UNSET":
      return ELeagueTier.LEAGUE_TIER_UNSET;
    case 1:
    case "LEAGUE_TIER_AMATEUR":
      return ELeagueTier.LEAGUE_TIER_AMATEUR;
    case 2:
    case "LEAGUE_TIER_PROFESSIONAL":
      return ELeagueTier.LEAGUE_TIER_PROFESSIONAL;
    case 3:
    case "LEAGUE_TIER_MINOR":
      return ELeagueTier.LEAGUE_TIER_MINOR;
    case 4:
    case "LEAGUE_TIER_MAJOR":
      return ELeagueTier.LEAGUE_TIER_MAJOR;
    case 5:
    case "LEAGUE_TIER_INTERNATIONAL":
      return ELeagueTier.LEAGUE_TIER_INTERNATIONAL;
    case 6:
    case "LEAGUE_TIER_DPC_QUALIFIER":
      return ELeagueTier.LEAGUE_TIER_DPC_QUALIFIER;
    case 7:
    case "LEAGUE_TIER_DPC_LEAGUE_QUALIFIER":
      return ELeagueTier.LEAGUE_TIER_DPC_LEAGUE_QUALIFIER;
    case 8:
    case "LEAGUE_TIER_DPC_LEAGUE":
      return ELeagueTier.LEAGUE_TIER_DPC_LEAGUE;
    case 9:
    case "LEAGUE_TIER_DPC_LEAGUE_FINALS":
      return ELeagueTier.LEAGUE_TIER_DPC_LEAGUE_FINALS;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELeagueTier");
  }
}

export function eLeagueTierToJSON(object: ELeagueTier): string {
  switch (object) {
    case ELeagueTier.LEAGUE_TIER_UNSET:
      return "LEAGUE_TIER_UNSET";
    case ELeagueTier.LEAGUE_TIER_AMATEUR:
      return "LEAGUE_TIER_AMATEUR";
    case ELeagueTier.LEAGUE_TIER_PROFESSIONAL:
      return "LEAGUE_TIER_PROFESSIONAL";
    case ELeagueTier.LEAGUE_TIER_MINOR:
      return "LEAGUE_TIER_MINOR";
    case ELeagueTier.LEAGUE_TIER_MAJOR:
      return "LEAGUE_TIER_MAJOR";
    case ELeagueTier.LEAGUE_TIER_INTERNATIONAL:
      return "LEAGUE_TIER_INTERNATIONAL";
    case ELeagueTier.LEAGUE_TIER_DPC_QUALIFIER:
      return "LEAGUE_TIER_DPC_QUALIFIER";
    case ELeagueTier.LEAGUE_TIER_DPC_LEAGUE_QUALIFIER:
      return "LEAGUE_TIER_DPC_LEAGUE_QUALIFIER";
    case ELeagueTier.LEAGUE_TIER_DPC_LEAGUE:
      return "LEAGUE_TIER_DPC_LEAGUE";
    case ELeagueTier.LEAGUE_TIER_DPC_LEAGUE_FINALS:
      return "LEAGUE_TIER_DPC_LEAGUE_FINALS";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELeagueTier");
  }
}

export enum ELeagueTierCategory {
  LEAGUE_TIER_CATEGORY_AMATEUR = 1,
  LEAGUE_TIER_CATEGORY_PROFESSIONAL = 2,
  LEAGUE_TIER_CATEGORY_DPC = 3,
}

export function eLeagueTierCategoryFromJSON(object: any): ELeagueTierCategory {
  switch (object) {
    case 1:
    case "LEAGUE_TIER_CATEGORY_AMATEUR":
      return ELeagueTierCategory.LEAGUE_TIER_CATEGORY_AMATEUR;
    case 2:
    case "LEAGUE_TIER_CATEGORY_PROFESSIONAL":
      return ELeagueTierCategory.LEAGUE_TIER_CATEGORY_PROFESSIONAL;
    case 3:
    case "LEAGUE_TIER_CATEGORY_DPC":
      return ELeagueTierCategory.LEAGUE_TIER_CATEGORY_DPC;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELeagueTierCategory");
  }
}

export function eLeagueTierCategoryToJSON(object: ELeagueTierCategory): string {
  switch (object) {
    case ELeagueTierCategory.LEAGUE_TIER_CATEGORY_AMATEUR:
      return "LEAGUE_TIER_CATEGORY_AMATEUR";
    case ELeagueTierCategory.LEAGUE_TIER_CATEGORY_PROFESSIONAL:
      return "LEAGUE_TIER_CATEGORY_PROFESSIONAL";
    case ELeagueTierCategory.LEAGUE_TIER_CATEGORY_DPC:
      return "LEAGUE_TIER_CATEGORY_DPC";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELeagueTierCategory");
  }
}

export enum ELeagueDivision {
  LEAGUE_DIVISION_UNSET = 0,
  LEAGUE_DIVISION_I = 1,
  LEAGUE_DIVISION_II = 2,
}

export function eLeagueDivisionFromJSON(object: any): ELeagueDivision {
  switch (object) {
    case 0:
    case "LEAGUE_DIVISION_UNSET":
      return ELeagueDivision.LEAGUE_DIVISION_UNSET;
    case 1:
    case "LEAGUE_DIVISION_I":
      return ELeagueDivision.LEAGUE_DIVISION_I;
    case 2:
    case "LEAGUE_DIVISION_II":
      return ELeagueDivision.LEAGUE_DIVISION_II;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELeagueDivision");
  }
}

export function eLeagueDivisionToJSON(object: ELeagueDivision): string {
  switch (object) {
    case ELeagueDivision.LEAGUE_DIVISION_UNSET:
      return "LEAGUE_DIVISION_UNSET";
    case ELeagueDivision.LEAGUE_DIVISION_I:
      return "LEAGUE_DIVISION_I";
    case ELeagueDivision.LEAGUE_DIVISION_II:
      return "LEAGUE_DIVISION_II";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELeagueDivision");
  }
}

export enum ELeagueBroadcastProvider {
  LEAGUE_BROADCAST_UNKNOWN = 0,
  LEAGUE_BROADCAST_STEAM = 1,
  LEAGUE_BROADCAST_TWITCH = 2,
  LEAGUE_BROADCAST_YOUTUBE = 3,
  LEAGUE_BROADCAST_OTHER = 100,
}

export function eLeagueBroadcastProviderFromJSON(object: any): ELeagueBroadcastProvider {
  switch (object) {
    case 0:
    case "LEAGUE_BROADCAST_UNKNOWN":
      return ELeagueBroadcastProvider.LEAGUE_BROADCAST_UNKNOWN;
    case 1:
    case "LEAGUE_BROADCAST_STEAM":
      return ELeagueBroadcastProvider.LEAGUE_BROADCAST_STEAM;
    case 2:
    case "LEAGUE_BROADCAST_TWITCH":
      return ELeagueBroadcastProvider.LEAGUE_BROADCAST_TWITCH;
    case 3:
    case "LEAGUE_BROADCAST_YOUTUBE":
      return ELeagueBroadcastProvider.LEAGUE_BROADCAST_YOUTUBE;
    case 100:
    case "LEAGUE_BROADCAST_OTHER":
      return ELeagueBroadcastProvider.LEAGUE_BROADCAST_OTHER;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELeagueBroadcastProvider");
  }
}

export function eLeagueBroadcastProviderToJSON(object: ELeagueBroadcastProvider): string {
  switch (object) {
    case ELeagueBroadcastProvider.LEAGUE_BROADCAST_UNKNOWN:
      return "LEAGUE_BROADCAST_UNKNOWN";
    case ELeagueBroadcastProvider.LEAGUE_BROADCAST_STEAM:
      return "LEAGUE_BROADCAST_STEAM";
    case ELeagueBroadcastProvider.LEAGUE_BROADCAST_TWITCH:
      return "LEAGUE_BROADCAST_TWITCH";
    case ELeagueBroadcastProvider.LEAGUE_BROADCAST_YOUTUBE:
      return "LEAGUE_BROADCAST_YOUTUBE";
    case ELeagueBroadcastProvider.LEAGUE_BROADCAST_OTHER:
      return "LEAGUE_BROADCAST_OTHER";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELeagueBroadcastProvider");
  }
}

export enum ELeaguePhase {
  LEAGUE_PHASE_UNSET = 0,
  LEAGUE_PHASE_REGIONAL_QUALIFIER = 1,
  LEAGUE_PHASE_GROUP_STAGE = 2,
  LEAGUE_PHASE_MAIN_EVENT = 3,
}

export function eLeaguePhaseFromJSON(object: any): ELeaguePhase {
  switch (object) {
    case 0:
    case "LEAGUE_PHASE_UNSET":
      return ELeaguePhase.LEAGUE_PHASE_UNSET;
    case 1:
    case "LEAGUE_PHASE_REGIONAL_QUALIFIER":
      return ELeaguePhase.LEAGUE_PHASE_REGIONAL_QUALIFIER;
    case 2:
    case "LEAGUE_PHASE_GROUP_STAGE":
      return ELeaguePhase.LEAGUE_PHASE_GROUP_STAGE;
    case 3:
    case "LEAGUE_PHASE_MAIN_EVENT":
      return ELeaguePhase.LEAGUE_PHASE_MAIN_EVENT;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELeaguePhase");
  }
}

export function eLeaguePhaseToJSON(object: ELeaguePhase): string {
  switch (object) {
    case ELeaguePhase.LEAGUE_PHASE_UNSET:
      return "LEAGUE_PHASE_UNSET";
    case ELeaguePhase.LEAGUE_PHASE_REGIONAL_QUALIFIER:
      return "LEAGUE_PHASE_REGIONAL_QUALIFIER";
    case ELeaguePhase.LEAGUE_PHASE_GROUP_STAGE:
      return "LEAGUE_PHASE_GROUP_STAGE";
    case ELeaguePhase.LEAGUE_PHASE_MAIN_EVENT:
      return "LEAGUE_PHASE_MAIN_EVENT";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELeaguePhase");
  }
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

export function eLeagueAuditActionFromJSON(object: any): ELeagueAuditAction {
  switch (object) {
    case 0:
    case "LEAGUE_AUDIT_ACTION_INVALID":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_INVALID;
    case 1:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_CREATE":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_CREATE;
    case 2:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_EDIT":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_EDIT;
    case 3:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_DELETE":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_DELETE;
    case 4:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_ADD":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_ADD;
    case 5:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_REVOKE":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_REVOKE;
    case 6:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_PROMOTE":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_PROMOTE;
    case 7:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_ADD":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_ADD;
    case 8:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_REMOVE":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_REMOVE;
    case 9:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_IMAGE_UPDATED":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_IMAGE_UPDATED;
    case 10:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_MESSAGE_ADDED":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_MESSAGE_ADDED;
    case 11:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_SUBMITTED":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_SUBMITTED;
    case 12:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_SET_PRIZE_POOL":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_SET_PRIZE_POOL;
    case 13:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_ADD_PRIZE_POOL_ITEM":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_ADD_PRIZE_POOL_ITEM;
    case 14:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_PRIZE_POOL_ITEM":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_PRIZE_POOL_ITEM;
    case 15:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_START":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_START;
    case 16:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_END":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_END;
    case 17:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_ADD_INVITED_TEAM":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_ADD_INVITED_TEAM;
    case 18:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_INVITED_TEAM":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_INVITED_TEAM;
    case 19:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_STATUS_CHANGED":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_STATUS_CHANGED;
    case 20:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_EDIT":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_EDIT;
    case 21:
    case "LEAGUE_AUDIT_ACTION_LEAGUE_TEAM_SWAP":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_TEAM_SWAP;
    case 100:
    case "LEAGUE_AUDIT_ACTION_NODEGROUP_CREATE":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_CREATE;
    case 101:
    case "LEAGUE_AUDIT_ACTION_NODEGROUP_DESTROY":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_DESTROY;
    case 102:
    case "LEAGUE_AUDIT_ACTION_NODEGROUP_ADD_TEAM":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_ADD_TEAM;
    case 103:
    case "LEAGUE_AUDIT_ACTION_NODEGROUP_REMOVE_TEAM":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_REMOVE_TEAM;
    case 104:
    case "LEAGUE_AUDIT_ACTION_NODEGROUP_SET_ADVANCING":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_SET_ADVANCING;
    case 105:
    case "LEAGUE_AUDIT_ACTION_NODEGROUP_EDIT":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_EDIT;
    case 106:
    case "LEAGUE_AUDIT_ACTION_NODEGROUP_POPULATE":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_POPULATE;
    case 107:
    case "LEAGUE_AUDIT_ACTION_NODEGROUP_COMPLETED":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_COMPLETED;
    case 108:
    case "LEAGUE_AUDIT_ACTION_NODEGROUP_SET_SECONDARY_ADVANCING":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_SET_SECONDARY_ADVANCING;
    case 109:
    case "LEAGUE_AUDIT_ACTION_NODEGROUP_SET_TERTIARY_ADVANCING":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_SET_TERTIARY_ADVANCING;
    case 200:
    case "LEAGUE_AUDIT_ACTION_NODE_CREATE":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_CREATE;
    case 201:
    case "LEAGUE_AUDIT_ACTION_NODE_DESTROY":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_DESTROY;
    case 202:
    case "LEAGUE_AUDIT_ACTION_NODE_AUTOCREATE":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_AUTOCREATE;
    case 203:
    case "LEAGUE_AUDIT_ACTION_NODE_SET_TEAM":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_SET_TEAM;
    case 204:
    case "LEAGUE_AUDIT_ACTION_NODE_SET_SERIES_ID":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_SET_SERIES_ID;
    case 205:
    case "LEAGUE_AUDIT_ACTION_NODE_SET_ADVANCING":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_SET_ADVANCING;
    case 206:
    case "LEAGUE_AUDIT_ACTION_NODE_SET_TIME":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_SET_TIME;
    case 207:
    case "LEAGUE_AUDIT_ACTION_NODE_MATCH_COMPLETED":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_MATCH_COMPLETED;
    case 208:
    case "LEAGUE_AUDIT_ACTION_NODE_COMPLETED":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_COMPLETED;
    case 209:
    case "LEAGUE_AUDIT_ACTION_NODE_EDIT":
      return ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_EDIT;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELeagueAuditAction");
  }
}

export function eLeagueAuditActionToJSON(object: ELeagueAuditAction): string {
  switch (object) {
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_INVALID:
      return "LEAGUE_AUDIT_ACTION_INVALID";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_CREATE:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_CREATE";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_EDIT:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_EDIT";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_DELETE:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_DELETE";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_ADD:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_ADD";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_REVOKE:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_REVOKE";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_PROMOTE:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_PROMOTE";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_ADD:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_ADD";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_REMOVE:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_REMOVE";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_IMAGE_UPDATED:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_IMAGE_UPDATED";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_MESSAGE_ADDED:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_MESSAGE_ADDED";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_SUBMITTED:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_SUBMITTED";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_SET_PRIZE_POOL:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_SET_PRIZE_POOL";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_ADD_PRIZE_POOL_ITEM:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_ADD_PRIZE_POOL_ITEM";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_PRIZE_POOL_ITEM:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_PRIZE_POOL_ITEM";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_START:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_START";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_END:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_END";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_ADD_INVITED_TEAM:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_ADD_INVITED_TEAM";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_INVITED_TEAM:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_INVITED_TEAM";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_STATUS_CHANGED:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_STATUS_CHANGED";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_EDIT:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_EDIT";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_LEAGUE_TEAM_SWAP:
      return "LEAGUE_AUDIT_ACTION_LEAGUE_TEAM_SWAP";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_CREATE:
      return "LEAGUE_AUDIT_ACTION_NODEGROUP_CREATE";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_DESTROY:
      return "LEAGUE_AUDIT_ACTION_NODEGROUP_DESTROY";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_ADD_TEAM:
      return "LEAGUE_AUDIT_ACTION_NODEGROUP_ADD_TEAM";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_REMOVE_TEAM:
      return "LEAGUE_AUDIT_ACTION_NODEGROUP_REMOVE_TEAM";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_SET_ADVANCING:
      return "LEAGUE_AUDIT_ACTION_NODEGROUP_SET_ADVANCING";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_EDIT:
      return "LEAGUE_AUDIT_ACTION_NODEGROUP_EDIT";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_POPULATE:
      return "LEAGUE_AUDIT_ACTION_NODEGROUP_POPULATE";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_COMPLETED:
      return "LEAGUE_AUDIT_ACTION_NODEGROUP_COMPLETED";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_SET_SECONDARY_ADVANCING:
      return "LEAGUE_AUDIT_ACTION_NODEGROUP_SET_SECONDARY_ADVANCING";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODEGROUP_SET_TERTIARY_ADVANCING:
      return "LEAGUE_AUDIT_ACTION_NODEGROUP_SET_TERTIARY_ADVANCING";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_CREATE:
      return "LEAGUE_AUDIT_ACTION_NODE_CREATE";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_DESTROY:
      return "LEAGUE_AUDIT_ACTION_NODE_DESTROY";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_AUTOCREATE:
      return "LEAGUE_AUDIT_ACTION_NODE_AUTOCREATE";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_SET_TEAM:
      return "LEAGUE_AUDIT_ACTION_NODE_SET_TEAM";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_SET_SERIES_ID:
      return "LEAGUE_AUDIT_ACTION_NODE_SET_SERIES_ID";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_SET_ADVANCING:
      return "LEAGUE_AUDIT_ACTION_NODE_SET_ADVANCING";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_SET_TIME:
      return "LEAGUE_AUDIT_ACTION_NODE_SET_TIME";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_MATCH_COMPLETED:
      return "LEAGUE_AUDIT_ACTION_NODE_MATCH_COMPLETED";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_COMPLETED:
      return "LEAGUE_AUDIT_ACTION_NODE_COMPLETED";
    case ELeagueAuditAction.LEAGUE_AUDIT_ACTION_NODE_EDIT:
      return "LEAGUE_AUDIT_ACTION_NODE_EDIT";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ELeagueAuditAction");
  }
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

export function dotaCombatlogTypesFromJSON(object: any): dotaCombatlogTypes {
  switch (object) {
    case -1:
    case "DOTA_COMBATLOG_INVALID":
      return dotaCombatlogTypes.DOTA_COMBATLOG_INVALID;
    case 0:
    case "DOTA_COMBATLOG_DAMAGE":
      return dotaCombatlogTypes.DOTA_COMBATLOG_DAMAGE;
    case 1:
    case "DOTA_COMBATLOG_HEAL":
      return dotaCombatlogTypes.DOTA_COMBATLOG_HEAL;
    case 2:
    case "DOTA_COMBATLOG_MODIFIER_ADD":
      return dotaCombatlogTypes.DOTA_COMBATLOG_MODIFIER_ADD;
    case 3:
    case "DOTA_COMBATLOG_MODIFIER_REMOVE":
      return dotaCombatlogTypes.DOTA_COMBATLOG_MODIFIER_REMOVE;
    case 4:
    case "DOTA_COMBATLOG_DEATH":
      return dotaCombatlogTypes.DOTA_COMBATLOG_DEATH;
    case 5:
    case "DOTA_COMBATLOG_ABILITY":
      return dotaCombatlogTypes.DOTA_COMBATLOG_ABILITY;
    case 6:
    case "DOTA_COMBATLOG_ITEM":
      return dotaCombatlogTypes.DOTA_COMBATLOG_ITEM;
    case 7:
    case "DOTA_COMBATLOG_LOCATION":
      return dotaCombatlogTypes.DOTA_COMBATLOG_LOCATION;
    case 8:
    case "DOTA_COMBATLOG_GOLD":
      return dotaCombatlogTypes.DOTA_COMBATLOG_GOLD;
    case 9:
    case "DOTA_COMBATLOG_GAME_STATE":
      return dotaCombatlogTypes.DOTA_COMBATLOG_GAME_STATE;
    case 10:
    case "DOTA_COMBATLOG_XP":
      return dotaCombatlogTypes.DOTA_COMBATLOG_XP;
    case 11:
    case "DOTA_COMBATLOG_PURCHASE":
      return dotaCombatlogTypes.DOTA_COMBATLOG_PURCHASE;
    case 12:
    case "DOTA_COMBATLOG_BUYBACK":
      return dotaCombatlogTypes.DOTA_COMBATLOG_BUYBACK;
    case 13:
    case "DOTA_COMBATLOG_ABILITY_TRIGGER":
      return dotaCombatlogTypes.DOTA_COMBATLOG_ABILITY_TRIGGER;
    case 14:
    case "DOTA_COMBATLOG_PLAYERSTATS":
      return dotaCombatlogTypes.DOTA_COMBATLOG_PLAYERSTATS;
    case 15:
    case "DOTA_COMBATLOG_MULTIKILL":
      return dotaCombatlogTypes.DOTA_COMBATLOG_MULTIKILL;
    case 16:
    case "DOTA_COMBATLOG_KILLSTREAK":
      return dotaCombatlogTypes.DOTA_COMBATLOG_KILLSTREAK;
    case 17:
    case "DOTA_COMBATLOG_TEAM_BUILDING_KILL":
      return dotaCombatlogTypes.DOTA_COMBATLOG_TEAM_BUILDING_KILL;
    case 18:
    case "DOTA_COMBATLOG_FIRST_BLOOD":
      return dotaCombatlogTypes.DOTA_COMBATLOG_FIRST_BLOOD;
    case 19:
    case "DOTA_COMBATLOG_MODIFIER_STACK_EVENT":
      return dotaCombatlogTypes.DOTA_COMBATLOG_MODIFIER_STACK_EVENT;
    case 20:
    case "DOTA_COMBATLOG_NEUTRAL_CAMP_STACK":
      return dotaCombatlogTypes.DOTA_COMBATLOG_NEUTRAL_CAMP_STACK;
    case 21:
    case "DOTA_COMBATLOG_PICKUP_RUNE":
      return dotaCombatlogTypes.DOTA_COMBATLOG_PICKUP_RUNE;
    case 22:
    case "DOTA_COMBATLOG_REVEALED_INVISIBLE":
      return dotaCombatlogTypes.DOTA_COMBATLOG_REVEALED_INVISIBLE;
    case 23:
    case "DOTA_COMBATLOG_HERO_SAVED":
      return dotaCombatlogTypes.DOTA_COMBATLOG_HERO_SAVED;
    case 24:
    case "DOTA_COMBATLOG_MANA_RESTORED":
      return dotaCombatlogTypes.DOTA_COMBATLOG_MANA_RESTORED;
    case 25:
    case "DOTA_COMBATLOG_HERO_LEVELUP":
      return dotaCombatlogTypes.DOTA_COMBATLOG_HERO_LEVELUP;
    case 26:
    case "DOTA_COMBATLOG_BOTTLE_HEAL_ALLY":
      return dotaCombatlogTypes.DOTA_COMBATLOG_BOTTLE_HEAL_ALLY;
    case 27:
    case "DOTA_COMBATLOG_ENDGAME_STATS":
      return dotaCombatlogTypes.DOTA_COMBATLOG_ENDGAME_STATS;
    case 28:
    case "DOTA_COMBATLOG_INTERRUPT_CHANNEL":
      return dotaCombatlogTypes.DOTA_COMBATLOG_INTERRUPT_CHANNEL;
    case 29:
    case "DOTA_COMBATLOG_ALLIED_GOLD":
      return dotaCombatlogTypes.DOTA_COMBATLOG_ALLIED_GOLD;
    case 30:
    case "DOTA_COMBATLOG_AEGIS_TAKEN":
      return dotaCombatlogTypes.DOTA_COMBATLOG_AEGIS_TAKEN;
    case 31:
    case "DOTA_COMBATLOG_MANA_DAMAGE":
      return dotaCombatlogTypes.DOTA_COMBATLOG_MANA_DAMAGE;
    case 32:
    case "DOTA_COMBATLOG_PHYSICAL_DAMAGE_PREVENTED":
      return dotaCombatlogTypes.DOTA_COMBATLOG_PHYSICAL_DAMAGE_PREVENTED;
    case 33:
    case "DOTA_COMBATLOG_UNIT_SUMMONED":
      return dotaCombatlogTypes.DOTA_COMBATLOG_UNIT_SUMMONED;
    case 34:
    case "DOTA_COMBATLOG_ATTACK_EVADE":
      return dotaCombatlogTypes.DOTA_COMBATLOG_ATTACK_EVADE;
    case 35:
    case "DOTA_COMBATLOG_TREE_CUT":
      return dotaCombatlogTypes.DOTA_COMBATLOG_TREE_CUT;
    case 36:
    case "DOTA_COMBATLOG_SUCCESSFUL_SCAN":
      return dotaCombatlogTypes.DOTA_COMBATLOG_SUCCESSFUL_SCAN;
    case 37:
    case "DOTA_COMBATLOG_END_KILLSTREAK":
      return dotaCombatlogTypes.DOTA_COMBATLOG_END_KILLSTREAK;
    case 38:
    case "DOTA_COMBATLOG_BLOODSTONE_CHARGE":
      return dotaCombatlogTypes.DOTA_COMBATLOG_BLOODSTONE_CHARGE;
    case 39:
    case "DOTA_COMBATLOG_CRITICAL_DAMAGE":
      return dotaCombatlogTypes.DOTA_COMBATLOG_CRITICAL_DAMAGE;
    case 40:
    case "DOTA_COMBATLOG_SPELL_ABSORB":
      return dotaCombatlogTypes.DOTA_COMBATLOG_SPELL_ABSORB;
    case 41:
    case "DOTA_COMBATLOG_UNIT_TELEPORTED":
      return dotaCombatlogTypes.DOTA_COMBATLOG_UNIT_TELEPORTED;
    case 42:
    case "DOTA_COMBATLOG_KILL_EATER_EVENT":
      return dotaCombatlogTypes.DOTA_COMBATLOG_KILL_EATER_EVENT;
    case 43:
    case "DOTA_COMBATLOG_NEUTRAL_ITEM_EARNED":
      return dotaCombatlogTypes.DOTA_COMBATLOG_NEUTRAL_ITEM_EARNED;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaCombatlogTypes");
  }
}

export function dotaCombatlogTypesToJSON(object: dotaCombatlogTypes): string {
  switch (object) {
    case dotaCombatlogTypes.DOTA_COMBATLOG_INVALID:
      return "DOTA_COMBATLOG_INVALID";
    case dotaCombatlogTypes.DOTA_COMBATLOG_DAMAGE:
      return "DOTA_COMBATLOG_DAMAGE";
    case dotaCombatlogTypes.DOTA_COMBATLOG_HEAL:
      return "DOTA_COMBATLOG_HEAL";
    case dotaCombatlogTypes.DOTA_COMBATLOG_MODIFIER_ADD:
      return "DOTA_COMBATLOG_MODIFIER_ADD";
    case dotaCombatlogTypes.DOTA_COMBATLOG_MODIFIER_REMOVE:
      return "DOTA_COMBATLOG_MODIFIER_REMOVE";
    case dotaCombatlogTypes.DOTA_COMBATLOG_DEATH:
      return "DOTA_COMBATLOG_DEATH";
    case dotaCombatlogTypes.DOTA_COMBATLOG_ABILITY:
      return "DOTA_COMBATLOG_ABILITY";
    case dotaCombatlogTypes.DOTA_COMBATLOG_ITEM:
      return "DOTA_COMBATLOG_ITEM";
    case dotaCombatlogTypes.DOTA_COMBATLOG_LOCATION:
      return "DOTA_COMBATLOG_LOCATION";
    case dotaCombatlogTypes.DOTA_COMBATLOG_GOLD:
      return "DOTA_COMBATLOG_GOLD";
    case dotaCombatlogTypes.DOTA_COMBATLOG_GAME_STATE:
      return "DOTA_COMBATLOG_GAME_STATE";
    case dotaCombatlogTypes.DOTA_COMBATLOG_XP:
      return "DOTA_COMBATLOG_XP";
    case dotaCombatlogTypes.DOTA_COMBATLOG_PURCHASE:
      return "DOTA_COMBATLOG_PURCHASE";
    case dotaCombatlogTypes.DOTA_COMBATLOG_BUYBACK:
      return "DOTA_COMBATLOG_BUYBACK";
    case dotaCombatlogTypes.DOTA_COMBATLOG_ABILITY_TRIGGER:
      return "DOTA_COMBATLOG_ABILITY_TRIGGER";
    case dotaCombatlogTypes.DOTA_COMBATLOG_PLAYERSTATS:
      return "DOTA_COMBATLOG_PLAYERSTATS";
    case dotaCombatlogTypes.DOTA_COMBATLOG_MULTIKILL:
      return "DOTA_COMBATLOG_MULTIKILL";
    case dotaCombatlogTypes.DOTA_COMBATLOG_KILLSTREAK:
      return "DOTA_COMBATLOG_KILLSTREAK";
    case dotaCombatlogTypes.DOTA_COMBATLOG_TEAM_BUILDING_KILL:
      return "DOTA_COMBATLOG_TEAM_BUILDING_KILL";
    case dotaCombatlogTypes.DOTA_COMBATLOG_FIRST_BLOOD:
      return "DOTA_COMBATLOG_FIRST_BLOOD";
    case dotaCombatlogTypes.DOTA_COMBATLOG_MODIFIER_STACK_EVENT:
      return "DOTA_COMBATLOG_MODIFIER_STACK_EVENT";
    case dotaCombatlogTypes.DOTA_COMBATLOG_NEUTRAL_CAMP_STACK:
      return "DOTA_COMBATLOG_NEUTRAL_CAMP_STACK";
    case dotaCombatlogTypes.DOTA_COMBATLOG_PICKUP_RUNE:
      return "DOTA_COMBATLOG_PICKUP_RUNE";
    case dotaCombatlogTypes.DOTA_COMBATLOG_REVEALED_INVISIBLE:
      return "DOTA_COMBATLOG_REVEALED_INVISIBLE";
    case dotaCombatlogTypes.DOTA_COMBATLOG_HERO_SAVED:
      return "DOTA_COMBATLOG_HERO_SAVED";
    case dotaCombatlogTypes.DOTA_COMBATLOG_MANA_RESTORED:
      return "DOTA_COMBATLOG_MANA_RESTORED";
    case dotaCombatlogTypes.DOTA_COMBATLOG_HERO_LEVELUP:
      return "DOTA_COMBATLOG_HERO_LEVELUP";
    case dotaCombatlogTypes.DOTA_COMBATLOG_BOTTLE_HEAL_ALLY:
      return "DOTA_COMBATLOG_BOTTLE_HEAL_ALLY";
    case dotaCombatlogTypes.DOTA_COMBATLOG_ENDGAME_STATS:
      return "DOTA_COMBATLOG_ENDGAME_STATS";
    case dotaCombatlogTypes.DOTA_COMBATLOG_INTERRUPT_CHANNEL:
      return "DOTA_COMBATLOG_INTERRUPT_CHANNEL";
    case dotaCombatlogTypes.DOTA_COMBATLOG_ALLIED_GOLD:
      return "DOTA_COMBATLOG_ALLIED_GOLD";
    case dotaCombatlogTypes.DOTA_COMBATLOG_AEGIS_TAKEN:
      return "DOTA_COMBATLOG_AEGIS_TAKEN";
    case dotaCombatlogTypes.DOTA_COMBATLOG_MANA_DAMAGE:
      return "DOTA_COMBATLOG_MANA_DAMAGE";
    case dotaCombatlogTypes.DOTA_COMBATLOG_PHYSICAL_DAMAGE_PREVENTED:
      return "DOTA_COMBATLOG_PHYSICAL_DAMAGE_PREVENTED";
    case dotaCombatlogTypes.DOTA_COMBATLOG_UNIT_SUMMONED:
      return "DOTA_COMBATLOG_UNIT_SUMMONED";
    case dotaCombatlogTypes.DOTA_COMBATLOG_ATTACK_EVADE:
      return "DOTA_COMBATLOG_ATTACK_EVADE";
    case dotaCombatlogTypes.DOTA_COMBATLOG_TREE_CUT:
      return "DOTA_COMBATLOG_TREE_CUT";
    case dotaCombatlogTypes.DOTA_COMBATLOG_SUCCESSFUL_SCAN:
      return "DOTA_COMBATLOG_SUCCESSFUL_SCAN";
    case dotaCombatlogTypes.DOTA_COMBATLOG_END_KILLSTREAK:
      return "DOTA_COMBATLOG_END_KILLSTREAK";
    case dotaCombatlogTypes.DOTA_COMBATLOG_BLOODSTONE_CHARGE:
      return "DOTA_COMBATLOG_BLOODSTONE_CHARGE";
    case dotaCombatlogTypes.DOTA_COMBATLOG_CRITICAL_DAMAGE:
      return "DOTA_COMBATLOG_CRITICAL_DAMAGE";
    case dotaCombatlogTypes.DOTA_COMBATLOG_SPELL_ABSORB:
      return "DOTA_COMBATLOG_SPELL_ABSORB";
    case dotaCombatlogTypes.DOTA_COMBATLOG_UNIT_TELEPORTED:
      return "DOTA_COMBATLOG_UNIT_TELEPORTED";
    case dotaCombatlogTypes.DOTA_COMBATLOG_KILL_EATER_EVENT:
      return "DOTA_COMBATLOG_KILL_EATER_EVENT";
    case dotaCombatlogTypes.DOTA_COMBATLOG_NEUTRAL_ITEM_EARNED:
      return "DOTA_COMBATLOG_NEUTRAL_ITEM_EARNED";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaCombatlogTypes");
  }
}

export enum EDPCFavoriteType {
  FAVORITE_TYPE_ALL = 0,
  FAVORITE_TYPE_PLAYER = 1,
  FAVORITE_TYPE_TEAM = 2,
  FAVORITE_TYPE_LEAGUE = 3,
}

export function eDPCFavoriteTypeFromJSON(object: any): EDPCFavoriteType {
  switch (object) {
    case 0:
    case "FAVORITE_TYPE_ALL":
      return EDPCFavoriteType.FAVORITE_TYPE_ALL;
    case 1:
    case "FAVORITE_TYPE_PLAYER":
      return EDPCFavoriteType.FAVORITE_TYPE_PLAYER;
    case 2:
    case "FAVORITE_TYPE_TEAM":
      return EDPCFavoriteType.FAVORITE_TYPE_TEAM;
    case 3:
    case "FAVORITE_TYPE_LEAGUE":
      return EDPCFavoriteType.FAVORITE_TYPE_LEAGUE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDPCFavoriteType");
  }
}

export function eDPCFavoriteTypeToJSON(object: EDPCFavoriteType): string {
  switch (object) {
    case EDPCFavoriteType.FAVORITE_TYPE_ALL:
      return "FAVORITE_TYPE_ALL";
    case EDPCFavoriteType.FAVORITE_TYPE_PLAYER:
      return "FAVORITE_TYPE_PLAYER";
    case EDPCFavoriteType.FAVORITE_TYPE_TEAM:
      return "FAVORITE_TYPE_TEAM";
    case EDPCFavoriteType.FAVORITE_TYPE_LEAGUE:
      return "FAVORITE_TYPE_LEAGUE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDPCFavoriteType");
  }
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

export function eDPCPushNotificationFromJSON(object: any): EDPCPushNotification {
  switch (object) {
    case 1:
    case "DPC_PUSH_NOTIFICATION_MATCH_STARTING":
      return EDPCPushNotification.DPC_PUSH_NOTIFICATION_MATCH_STARTING;
    case 10:
    case "DPC_PUSH_NOTIFICATION_PLAYER_LEFT_TEAM":
      return EDPCPushNotification.DPC_PUSH_NOTIFICATION_PLAYER_LEFT_TEAM;
    case 11:
    case "DPC_PUSH_NOTIFICATION_PLAYER_JOINED_TEAM":
      return EDPCPushNotification.DPC_PUSH_NOTIFICATION_PLAYER_JOINED_TEAM;
    case 12:
    case "DPC_PUSH_NOTIFICATION_PLAYER_JOINED_TEAM_AS_COACH":
      return EDPCPushNotification.DPC_PUSH_NOTIFICATION_PLAYER_JOINED_TEAM_AS_COACH;
    case 13:
    case "DPC_PUSH_NOTIFICATION_PLAYER_LEFT_TEAM_AS_COACH":
      return EDPCPushNotification.DPC_PUSH_NOTIFICATION_PLAYER_LEFT_TEAM_AS_COACH;
    case 20:
    case "DPC_PUSH_NOTIFICATION_LEAGUE_RESULT":
      return EDPCPushNotification.DPC_PUSH_NOTIFICATION_LEAGUE_RESULT;
    case 30:
    case "DPC_PUSH_NOTIFICATION_PREDICTION_MATCHES_AVAILABLE":
      return EDPCPushNotification.DPC_PUSH_NOTIFICATION_PREDICTION_MATCHES_AVAILABLE;
    case 31:
    case "DPC_PUSH_NOTIFICATION_PREDICTION_RESULT":
      return EDPCPushNotification.DPC_PUSH_NOTIFICATION_PREDICTION_RESULT;
    case 40:
    case "DPC_PUSH_NOTIFICATION_FANTASY_PLAYER_CLEARED":
      return EDPCPushNotification.DPC_PUSH_NOTIFICATION_FANTASY_PLAYER_CLEARED;
    case 41:
    case "DPC_PUSH_NOTIFICATION_FANTASY_DAILY_SUMMARY":
      return EDPCPushNotification.DPC_PUSH_NOTIFICATION_FANTASY_DAILY_SUMMARY;
    case 42:
    case "DPC_PUSH_NOTIFICATION_FANTASY_FINAL_RESULTS":
      return EDPCPushNotification.DPC_PUSH_NOTIFICATION_FANTASY_FINAL_RESULTS;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDPCPushNotification");
  }
}

export function eDPCPushNotificationToJSON(object: EDPCPushNotification): string {
  switch (object) {
    case EDPCPushNotification.DPC_PUSH_NOTIFICATION_MATCH_STARTING:
      return "DPC_PUSH_NOTIFICATION_MATCH_STARTING";
    case EDPCPushNotification.DPC_PUSH_NOTIFICATION_PLAYER_LEFT_TEAM:
      return "DPC_PUSH_NOTIFICATION_PLAYER_LEFT_TEAM";
    case EDPCPushNotification.DPC_PUSH_NOTIFICATION_PLAYER_JOINED_TEAM:
      return "DPC_PUSH_NOTIFICATION_PLAYER_JOINED_TEAM";
    case EDPCPushNotification.DPC_PUSH_NOTIFICATION_PLAYER_JOINED_TEAM_AS_COACH:
      return "DPC_PUSH_NOTIFICATION_PLAYER_JOINED_TEAM_AS_COACH";
    case EDPCPushNotification.DPC_PUSH_NOTIFICATION_PLAYER_LEFT_TEAM_AS_COACH:
      return "DPC_PUSH_NOTIFICATION_PLAYER_LEFT_TEAM_AS_COACH";
    case EDPCPushNotification.DPC_PUSH_NOTIFICATION_LEAGUE_RESULT:
      return "DPC_PUSH_NOTIFICATION_LEAGUE_RESULT";
    case EDPCPushNotification.DPC_PUSH_NOTIFICATION_PREDICTION_MATCHES_AVAILABLE:
      return "DPC_PUSH_NOTIFICATION_PREDICTION_MATCHES_AVAILABLE";
    case EDPCPushNotification.DPC_PUSH_NOTIFICATION_PREDICTION_RESULT:
      return "DPC_PUSH_NOTIFICATION_PREDICTION_RESULT";
    case EDPCPushNotification.DPC_PUSH_NOTIFICATION_FANTASY_PLAYER_CLEARED:
      return "DPC_PUSH_NOTIFICATION_FANTASY_PLAYER_CLEARED";
    case EDPCPushNotification.DPC_PUSH_NOTIFICATION_FANTASY_DAILY_SUMMARY:
      return "DPC_PUSH_NOTIFICATION_FANTASY_DAILY_SUMMARY";
    case EDPCPushNotification.DPC_PUSH_NOTIFICATION_FANTASY_FINAL_RESULTS:
      return "DPC_PUSH_NOTIFICATION_FANTASY_FINAL_RESULTS";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDPCPushNotification");
  }
}

export enum EEventActionScoreMode {
  k_eEventActionScoreMode_Add = 0,
  k_eEventActionScoreMode_Min = 1,
}

export function eEventActionScoreModeFromJSON(object: any): EEventActionScoreMode {
  switch (object) {
    case 0:
    case "k_eEventActionScoreMode_Add":
      return EEventActionScoreMode.k_eEventActionScoreMode_Add;
    case 1:
    case "k_eEventActionScoreMode_Min":
      return EEventActionScoreMode.k_eEventActionScoreMode_Min;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EEventActionScoreMode");
  }
}

export function eEventActionScoreModeToJSON(object: EEventActionScoreMode): string {
  switch (object) {
    case EEventActionScoreMode.k_eEventActionScoreMode_Add:
      return "k_eEventActionScoreMode_Add";
    case EEventActionScoreMode.k_eEventActionScoreMode_Min:
      return "k_eEventActionScoreMode_Min";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EEventActionScoreMode");
  }
}

export enum EPlayerChallengeHistoryType {
  k_EPlayerChallengeHistoryType_Invalid = 0,
  k_EPlayerChallengeHistoryType_KillEater = 1,
  k_EPlayerChallengeHistoryType_DotaPlusRelic = 2,
  k_EPlayerChallengeHistoryType_DotaPlusHeroPlayerChallenge = 3,
  k_EPlayerChallengeHistoryType_InGameEventChallenge = 4,
  k_EPlayerChallengeHistoryType_GuildContract = 5,
}

export function ePlayerChallengeHistoryTypeFromJSON(object: any): EPlayerChallengeHistoryType {
  switch (object) {
    case 0:
    case "k_EPlayerChallengeHistoryType_Invalid":
      return EPlayerChallengeHistoryType.k_EPlayerChallengeHistoryType_Invalid;
    case 1:
    case "k_EPlayerChallengeHistoryType_KillEater":
      return EPlayerChallengeHistoryType.k_EPlayerChallengeHistoryType_KillEater;
    case 2:
    case "k_EPlayerChallengeHistoryType_DotaPlusRelic":
      return EPlayerChallengeHistoryType.k_EPlayerChallengeHistoryType_DotaPlusRelic;
    case 3:
    case "k_EPlayerChallengeHistoryType_DotaPlusHeroPlayerChallenge":
      return EPlayerChallengeHistoryType.k_EPlayerChallengeHistoryType_DotaPlusHeroPlayerChallenge;
    case 4:
    case "k_EPlayerChallengeHistoryType_InGameEventChallenge":
      return EPlayerChallengeHistoryType.k_EPlayerChallengeHistoryType_InGameEventChallenge;
    case 5:
    case "k_EPlayerChallengeHistoryType_GuildContract":
      return EPlayerChallengeHistoryType.k_EPlayerChallengeHistoryType_GuildContract;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EPlayerChallengeHistoryType");
  }
}

export function ePlayerChallengeHistoryTypeToJSON(object: EPlayerChallengeHistoryType): string {
  switch (object) {
    case EPlayerChallengeHistoryType.k_EPlayerChallengeHistoryType_Invalid:
      return "k_EPlayerChallengeHistoryType_Invalid";
    case EPlayerChallengeHistoryType.k_EPlayerChallengeHistoryType_KillEater:
      return "k_EPlayerChallengeHistoryType_KillEater";
    case EPlayerChallengeHistoryType.k_EPlayerChallengeHistoryType_DotaPlusRelic:
      return "k_EPlayerChallengeHistoryType_DotaPlusRelic";
    case EPlayerChallengeHistoryType.k_EPlayerChallengeHistoryType_DotaPlusHeroPlayerChallenge:
      return "k_EPlayerChallengeHistoryType_DotaPlusHeroPlayerChallenge";
    case EPlayerChallengeHistoryType.k_EPlayerChallengeHistoryType_InGameEventChallenge:
      return "k_EPlayerChallengeHistoryType_InGameEventChallenge";
    case EPlayerChallengeHistoryType.k_EPlayerChallengeHistoryType_GuildContract:
      return "k_EPlayerChallengeHistoryType_GuildContract";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EPlayerChallengeHistoryType");
  }
}

export enum EOverwatchReportReason {
  k_EOverwatchReportReason_Unknown = 0,
  k_EOverwatchReportReason_Cheating = 1,
  k_EOverwatchReportReason_Feeding = 2,
  k_EOverwatchReportReason_Griefing = 3,
  k_EOverwatchReportReason_Suspicious = 4,
  k_EOverwatchReportReason_AbilityAbuse = 5,
}

export function eOverwatchReportReasonFromJSON(object: any): EOverwatchReportReason {
  switch (object) {
    case 0:
    case "k_EOverwatchReportReason_Unknown":
      return EOverwatchReportReason.k_EOverwatchReportReason_Unknown;
    case 1:
    case "k_EOverwatchReportReason_Cheating":
      return EOverwatchReportReason.k_EOverwatchReportReason_Cheating;
    case 2:
    case "k_EOverwatchReportReason_Feeding":
      return EOverwatchReportReason.k_EOverwatchReportReason_Feeding;
    case 3:
    case "k_EOverwatchReportReason_Griefing":
      return EOverwatchReportReason.k_EOverwatchReportReason_Griefing;
    case 4:
    case "k_EOverwatchReportReason_Suspicious":
      return EOverwatchReportReason.k_EOverwatchReportReason_Suspicious;
    case 5:
    case "k_EOverwatchReportReason_AbilityAbuse":
      return EOverwatchReportReason.k_EOverwatchReportReason_AbilityAbuse;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EOverwatchReportReason");
  }
}

export function eOverwatchReportReasonToJSON(object: EOverwatchReportReason): string {
  switch (object) {
    case EOverwatchReportReason.k_EOverwatchReportReason_Unknown:
      return "k_EOverwatchReportReason_Unknown";
    case EOverwatchReportReason.k_EOverwatchReportReason_Cheating:
      return "k_EOverwatchReportReason_Cheating";
    case EOverwatchReportReason.k_EOverwatchReportReason_Feeding:
      return "k_EOverwatchReportReason_Feeding";
    case EOverwatchReportReason.k_EOverwatchReportReason_Griefing:
      return "k_EOverwatchReportReason_Griefing";
    case EOverwatchReportReason.k_EOverwatchReportReason_Suspicious:
      return "k_EOverwatchReportReason_Suspicious";
    case EOverwatchReportReason.k_EOverwatchReportReason_AbilityAbuse:
      return "k_EOverwatchReportReason_AbilityAbuse";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EOverwatchReportReason");
  }
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

  fromJSON(object: any): CDOTAClientHardwareSpecs {
    return {
      logicalProcessors: isSet(object.logicalProcessors) ? Number(object.logicalProcessors) : 0,
      cpuCyclesPerSecond: isSet(object.cpuCyclesPerSecond) ? String(object.cpuCyclesPerSecond) : "0",
      totalPhysicalMemory: isSet(object.totalPhysicalMemory) ? String(object.totalPhysicalMemory) : "0",
      is64BitOs: isSet(object.is64BitOs) ? Boolean(object.is64BitOs) : false,
      uploadMeasurement: isSet(object.uploadMeasurement) ? String(object.uploadMeasurement) : "0",
      preferNotHost: isSet(object.preferNotHost) ? Boolean(object.preferNotHost) : false,
    };
  },

  toJSON(message: CDOTAClientHardwareSpecs): unknown {
    const obj: any = {};
    message.logicalProcessors !== undefined && (obj.logicalProcessors = Math.round(message.logicalProcessors));
    message.cpuCyclesPerSecond !== undefined && (obj.cpuCyclesPerSecond = message.cpuCyclesPerSecond);
    message.totalPhysicalMemory !== undefined && (obj.totalPhysicalMemory = message.totalPhysicalMemory);
    message.is64BitOs !== undefined && (obj.is64BitOs = message.is64BitOs);
    message.uploadMeasurement !== undefined && (obj.uploadMeasurement = message.uploadMeasurement);
    message.preferNotHost !== undefined && (obj.preferNotHost = message.preferNotHost);
    return obj;
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

  fromJSON(object: any): CDOTASaveGame {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      saveTime: isSet(object.saveTime) ? Number(object.saveTime) : 0,
      players: Array.isArray(object?.players) ? object.players.map((e: any) => CDOTASaveGame_Player.fromJSON(e)) : [],
      saveInstances: Array.isArray(object?.saveInstances)
        ? object.saveInstances.map((e: any) => CDOTASaveGame_SaveInstance.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTASaveGame): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.saveTime !== undefined && (obj.saveTime = Math.round(message.saveTime));
    if (message.players) {
      obj.players = message.players.map((e) => e ? CDOTASaveGame_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    if (message.saveInstances) {
      obj.saveInstances = message.saveInstances.map((e) => e ? CDOTASaveGame_SaveInstance.toJSON(e) : undefined);
    } else {
      obj.saveInstances = [];
    }
    return obj;
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

  fromJSON(object: any): CDOTASaveGame_Player {
    return {
      team: isSet(object.team) ? dotaGcTeamFromJSON(object.team) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      hero: isSet(object.hero) ? String(object.hero) : "",
    };
  },

  toJSON(message: CDOTASaveGame_Player): unknown {
    const obj: any = {};
    message.team !== undefined && (obj.team = dotaGcTeamToJSON(message.team));
    message.name !== undefined && (obj.name = message.name);
    message.hero !== undefined && (obj.hero = message.hero);
    return obj;
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

  fromJSON(object: any): CDOTASaveGame_SaveInstance {
    return {
      gameTime: isSet(object.gameTime) ? Number(object.gameTime) : 0,
      team1Score: isSet(object.team1Score) ? Number(object.team1Score) : 0,
      team2Score: isSet(object.team2Score) ? Number(object.team2Score) : 0,
      playerPositions: Array.isArray(object?.playerPositions)
        ? object.playerPositions.map((e: any) => CDOTASaveGame_SaveInstance_PlayerPositions.fromJSON(e))
        : [],
      saveId: isSet(object.saveId) ? Number(object.saveId) : 0,
      saveTime: isSet(object.saveTime) ? Number(object.saveTime) : 0,
    };
  },

  toJSON(message: CDOTASaveGame_SaveInstance): unknown {
    const obj: any = {};
    message.gameTime !== undefined && (obj.gameTime = Math.round(message.gameTime));
    message.team1Score !== undefined && (obj.team1Score = Math.round(message.team1Score));
    message.team2Score !== undefined && (obj.team2Score = Math.round(message.team2Score));
    if (message.playerPositions) {
      obj.playerPositions = message.playerPositions.map((e) =>
        e ? CDOTASaveGame_SaveInstance_PlayerPositions.toJSON(e) : undefined
      );
    } else {
      obj.playerPositions = [];
    }
    message.saveId !== undefined && (obj.saveId = Math.round(message.saveId));
    message.saveTime !== undefined && (obj.saveTime = Math.round(message.saveTime));
    return obj;
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

  fromJSON(object: any): CDOTASaveGame_SaveInstance_PlayerPositions {
    return { x: isSet(object.x) ? Number(object.x) : 0, y: isSet(object.y) ? Number(object.y) : 0 };
  },

  toJSON(message: CDOTASaveGame_SaveInstance_PlayerPositions): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    return obj;
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

  fromJSON(object: any): CMsgDOTACombatLogEntry {
    return {
      type: isSet(object.type) ? dotaCombatlogTypesFromJSON(object.type) : 0,
      targetName: isSet(object.targetName) ? Number(object.targetName) : 0,
      targetSourceName: isSet(object.targetSourceName) ? Number(object.targetSourceName) : 0,
      attackerName: isSet(object.attackerName) ? Number(object.attackerName) : 0,
      damageSourceName: isSet(object.damageSourceName) ? Number(object.damageSourceName) : 0,
      inflictorName: isSet(object.inflictorName) ? Number(object.inflictorName) : 0,
      isAttackerIllusion: isSet(object.isAttackerIllusion) ? Boolean(object.isAttackerIllusion) : false,
      isAttackerHero: isSet(object.isAttackerHero) ? Boolean(object.isAttackerHero) : false,
      isTargetIllusion: isSet(object.isTargetIllusion) ? Boolean(object.isTargetIllusion) : false,
      isTargetHero: isSet(object.isTargetHero) ? Boolean(object.isTargetHero) : false,
      isVisibleRadiant: isSet(object.isVisibleRadiant) ? Boolean(object.isVisibleRadiant) : false,
      isVisibleDire: isSet(object.isVisibleDire) ? Boolean(object.isVisibleDire) : false,
      value: isSet(object.value) ? Number(object.value) : 0,
      health: isSet(object.health) ? Number(object.health) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      stunDuration: isSet(object.stunDuration) ? Number(object.stunDuration) : 0,
      slowDuration: isSet(object.slowDuration) ? Number(object.slowDuration) : 0,
      isAbilityToggleOn: isSet(object.isAbilityToggleOn) ? Boolean(object.isAbilityToggleOn) : false,
      isAbilityToggleOff: isSet(object.isAbilityToggleOff) ? Boolean(object.isAbilityToggleOff) : false,
      abilityLevel: isSet(object.abilityLevel) ? Number(object.abilityLevel) : 0,
      locationX: isSet(object.locationX) ? Number(object.locationX) : 0,
      locationY: isSet(object.locationY) ? Number(object.locationY) : 0,
      goldReason: isSet(object.goldReason) ? Number(object.goldReason) : 0,
      timestampRaw: isSet(object.timestampRaw) ? Number(object.timestampRaw) : 0,
      modifierDuration: isSet(object.modifierDuration) ? Number(object.modifierDuration) : 0,
      xpReason: isSet(object.xpReason) ? Number(object.xpReason) : 0,
      lastHits: isSet(object.lastHits) ? Number(object.lastHits) : 0,
      attackerTeam: isSet(object.attackerTeam) ? Number(object.attackerTeam) : 0,
      targetTeam: isSet(object.targetTeam) ? Number(object.targetTeam) : 0,
      obsWardsPlaced: isSet(object.obsWardsPlaced) ? Number(object.obsWardsPlaced) : 0,
      assistPlayer0: isSet(object.assistPlayer0) ? Number(object.assistPlayer0) : 0,
      assistPlayer1: isSet(object.assistPlayer1) ? Number(object.assistPlayer1) : 0,
      assistPlayer2: isSet(object.assistPlayer2) ? Number(object.assistPlayer2) : 0,
      assistPlayer3: isSet(object.assistPlayer3) ? Number(object.assistPlayer3) : 0,
      stackCount: isSet(object.stackCount) ? Number(object.stackCount) : 0,
      hiddenModifier: isSet(object.hiddenModifier) ? Boolean(object.hiddenModifier) : false,
      isTargetBuilding: isSet(object.isTargetBuilding) ? Boolean(object.isTargetBuilding) : false,
      neutralCampType: isSet(object.neutralCampType) ? Number(object.neutralCampType) : 0,
      runeType: isSet(object.runeType) ? Number(object.runeType) : 0,
      assistPlayers: Array.isArray(object?.assistPlayers) ? object.assistPlayers.map((e: any) => Number(e)) : [],
      isHealSave: isSet(object.isHealSave) ? Boolean(object.isHealSave) : false,
      isUltimateAbility: isSet(object.isUltimateAbility) ? Boolean(object.isUltimateAbility) : false,
      attackerHeroLevel: isSet(object.attackerHeroLevel) ? Number(object.attackerHeroLevel) : 0,
      targetHeroLevel: isSet(object.targetHeroLevel) ? Number(object.targetHeroLevel) : 0,
      xpm: isSet(object.xpm) ? Number(object.xpm) : 0,
      gpm: isSet(object.gpm) ? Number(object.gpm) : 0,
      eventLocation: isSet(object.eventLocation) ? Number(object.eventLocation) : 0,
      targetIsSelf: isSet(object.targetIsSelf) ? Boolean(object.targetIsSelf) : false,
      damageType: isSet(object.damageType) ? Number(object.damageType) : 0,
      invisibilityModifier: isSet(object.invisibilityModifier) ? Boolean(object.invisibilityModifier) : false,
      damageCategory: isSet(object.damageCategory) ? Number(object.damageCategory) : 0,
      networth: isSet(object.networth) ? Number(object.networth) : 0,
      buildingType: isSet(object.buildingType) ? Number(object.buildingType) : 0,
      modifierElapsedDuration: isSet(object.modifierElapsedDuration) ? Number(object.modifierElapsedDuration) : 0,
      silenceModifier: isSet(object.silenceModifier) ? Boolean(object.silenceModifier) : false,
      healFromLifesteal: isSet(object.healFromLifesteal) ? Boolean(object.healFromLifesteal) : false,
      modifierPurged: isSet(object.modifierPurged) ? Boolean(object.modifierPurged) : false,
      spellEvaded: isSet(object.spellEvaded) ? Boolean(object.spellEvaded) : false,
      motionControllerModifier: isSet(object.motionControllerModifier)
        ? Boolean(object.motionControllerModifier)
        : false,
      longRangeKill: isSet(object.longRangeKill) ? Boolean(object.longRangeKill) : false,
      modifierPurgeAbility: isSet(object.modifierPurgeAbility) ? Number(object.modifierPurgeAbility) : 0,
      modifierPurgeNpc: isSet(object.modifierPurgeNpc) ? Number(object.modifierPurgeNpc) : 0,
      rootModifier: isSet(object.rootModifier) ? Boolean(object.rootModifier) : false,
      totalUnitDeathCount: isSet(object.totalUnitDeathCount) ? Number(object.totalUnitDeathCount) : 0,
      auraModifier: isSet(object.auraModifier) ? Boolean(object.auraModifier) : false,
      armorDebuffModifier: isSet(object.armorDebuffModifier) ? Boolean(object.armorDebuffModifier) : false,
      noPhysicalDamageModifier: isSet(object.noPhysicalDamageModifier)
        ? Boolean(object.noPhysicalDamageModifier)
        : false,
      modifierAbility: isSet(object.modifierAbility) ? Number(object.modifierAbility) : 0,
      modifierHidden: isSet(object.modifierHidden) ? Boolean(object.modifierHidden) : false,
      inflictorIsStolenAbility: isSet(object.inflictorIsStolenAbility)
        ? Boolean(object.inflictorIsStolenAbility)
        : false,
      killEaterEvent: isSet(object.killEaterEvent) ? Number(object.killEaterEvent) : 0,
      unitStatusLabel: isSet(object.unitStatusLabel) ? Number(object.unitStatusLabel) : 0,
      spellGeneratedAttack: isSet(object.spellGeneratedAttack) ? Boolean(object.spellGeneratedAttack) : false,
      atNightTime: isSet(object.atNightTime) ? Boolean(object.atNightTime) : false,
      attackerHasScepter: isSet(object.attackerHasScepter) ? Boolean(object.attackerHasScepter) : false,
      neutralCampTeam: isSet(object.neutralCampTeam) ? Number(object.neutralCampTeam) : 0,
      regeneratedHealth: isSet(object.regeneratedHealth) ? Number(object.regeneratedHealth) : 0,
      willReincarnate: isSet(object.willReincarnate) ? Boolean(object.willReincarnate) : false,
      usesCharges: isSet(object.usesCharges) ? Boolean(object.usesCharges) : false,
    };
  },

  toJSON(message: CMsgDOTACombatLogEntry): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = dotaCombatlogTypesToJSON(message.type));
    message.targetName !== undefined && (obj.targetName = Math.round(message.targetName));
    message.targetSourceName !== undefined && (obj.targetSourceName = Math.round(message.targetSourceName));
    message.attackerName !== undefined && (obj.attackerName = Math.round(message.attackerName));
    message.damageSourceName !== undefined && (obj.damageSourceName = Math.round(message.damageSourceName));
    message.inflictorName !== undefined && (obj.inflictorName = Math.round(message.inflictorName));
    message.isAttackerIllusion !== undefined && (obj.isAttackerIllusion = message.isAttackerIllusion);
    message.isAttackerHero !== undefined && (obj.isAttackerHero = message.isAttackerHero);
    message.isTargetIllusion !== undefined && (obj.isTargetIllusion = message.isTargetIllusion);
    message.isTargetHero !== undefined && (obj.isTargetHero = message.isTargetHero);
    message.isVisibleRadiant !== undefined && (obj.isVisibleRadiant = message.isVisibleRadiant);
    message.isVisibleDire !== undefined && (obj.isVisibleDire = message.isVisibleDire);
    message.value !== undefined && (obj.value = Math.round(message.value));
    message.health !== undefined && (obj.health = Math.round(message.health));
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.stunDuration !== undefined && (obj.stunDuration = message.stunDuration);
    message.slowDuration !== undefined && (obj.slowDuration = message.slowDuration);
    message.isAbilityToggleOn !== undefined && (obj.isAbilityToggleOn = message.isAbilityToggleOn);
    message.isAbilityToggleOff !== undefined && (obj.isAbilityToggleOff = message.isAbilityToggleOff);
    message.abilityLevel !== undefined && (obj.abilityLevel = Math.round(message.abilityLevel));
    message.locationX !== undefined && (obj.locationX = message.locationX);
    message.locationY !== undefined && (obj.locationY = message.locationY);
    message.goldReason !== undefined && (obj.goldReason = Math.round(message.goldReason));
    message.timestampRaw !== undefined && (obj.timestampRaw = message.timestampRaw);
    message.modifierDuration !== undefined && (obj.modifierDuration = message.modifierDuration);
    message.xpReason !== undefined && (obj.xpReason = Math.round(message.xpReason));
    message.lastHits !== undefined && (obj.lastHits = Math.round(message.lastHits));
    message.attackerTeam !== undefined && (obj.attackerTeam = Math.round(message.attackerTeam));
    message.targetTeam !== undefined && (obj.targetTeam = Math.round(message.targetTeam));
    message.obsWardsPlaced !== undefined && (obj.obsWardsPlaced = Math.round(message.obsWardsPlaced));
    message.assistPlayer0 !== undefined && (obj.assistPlayer0 = Math.round(message.assistPlayer0));
    message.assistPlayer1 !== undefined && (obj.assistPlayer1 = Math.round(message.assistPlayer1));
    message.assistPlayer2 !== undefined && (obj.assistPlayer2 = Math.round(message.assistPlayer2));
    message.assistPlayer3 !== undefined && (obj.assistPlayer3 = Math.round(message.assistPlayer3));
    message.stackCount !== undefined && (obj.stackCount = Math.round(message.stackCount));
    message.hiddenModifier !== undefined && (obj.hiddenModifier = message.hiddenModifier);
    message.isTargetBuilding !== undefined && (obj.isTargetBuilding = message.isTargetBuilding);
    message.neutralCampType !== undefined && (obj.neutralCampType = Math.round(message.neutralCampType));
    message.runeType !== undefined && (obj.runeType = Math.round(message.runeType));
    if (message.assistPlayers) {
      obj.assistPlayers = message.assistPlayers.map((e) => Math.round(e));
    } else {
      obj.assistPlayers = [];
    }
    message.isHealSave !== undefined && (obj.isHealSave = message.isHealSave);
    message.isUltimateAbility !== undefined && (obj.isUltimateAbility = message.isUltimateAbility);
    message.attackerHeroLevel !== undefined && (obj.attackerHeroLevel = Math.round(message.attackerHeroLevel));
    message.targetHeroLevel !== undefined && (obj.targetHeroLevel = Math.round(message.targetHeroLevel));
    message.xpm !== undefined && (obj.xpm = Math.round(message.xpm));
    message.gpm !== undefined && (obj.gpm = Math.round(message.gpm));
    message.eventLocation !== undefined && (obj.eventLocation = Math.round(message.eventLocation));
    message.targetIsSelf !== undefined && (obj.targetIsSelf = message.targetIsSelf);
    message.damageType !== undefined && (obj.damageType = Math.round(message.damageType));
    message.invisibilityModifier !== undefined && (obj.invisibilityModifier = message.invisibilityModifier);
    message.damageCategory !== undefined && (obj.damageCategory = Math.round(message.damageCategory));
    message.networth !== undefined && (obj.networth = Math.round(message.networth));
    message.buildingType !== undefined && (obj.buildingType = Math.round(message.buildingType));
    message.modifierElapsedDuration !== undefined && (obj.modifierElapsedDuration = message.modifierElapsedDuration);
    message.silenceModifier !== undefined && (obj.silenceModifier = message.silenceModifier);
    message.healFromLifesteal !== undefined && (obj.healFromLifesteal = message.healFromLifesteal);
    message.modifierPurged !== undefined && (obj.modifierPurged = message.modifierPurged);
    message.spellEvaded !== undefined && (obj.spellEvaded = message.spellEvaded);
    message.motionControllerModifier !== undefined && (obj.motionControllerModifier = message.motionControllerModifier);
    message.longRangeKill !== undefined && (obj.longRangeKill = message.longRangeKill);
    message.modifierPurgeAbility !== undefined && (obj.modifierPurgeAbility = Math.round(message.modifierPurgeAbility));
    message.modifierPurgeNpc !== undefined && (obj.modifierPurgeNpc = Math.round(message.modifierPurgeNpc));
    message.rootModifier !== undefined && (obj.rootModifier = message.rootModifier);
    message.totalUnitDeathCount !== undefined && (obj.totalUnitDeathCount = Math.round(message.totalUnitDeathCount));
    message.auraModifier !== undefined && (obj.auraModifier = message.auraModifier);
    message.armorDebuffModifier !== undefined && (obj.armorDebuffModifier = message.armorDebuffModifier);
    message.noPhysicalDamageModifier !== undefined && (obj.noPhysicalDamageModifier = message.noPhysicalDamageModifier);
    message.modifierAbility !== undefined && (obj.modifierAbility = Math.round(message.modifierAbility));
    message.modifierHidden !== undefined && (obj.modifierHidden = message.modifierHidden);
    message.inflictorIsStolenAbility !== undefined && (obj.inflictorIsStolenAbility = message.inflictorIsStolenAbility);
    message.killEaterEvent !== undefined && (obj.killEaterEvent = Math.round(message.killEaterEvent));
    message.unitStatusLabel !== undefined && (obj.unitStatusLabel = Math.round(message.unitStatusLabel));
    message.spellGeneratedAttack !== undefined && (obj.spellGeneratedAttack = message.spellGeneratedAttack);
    message.atNightTime !== undefined && (obj.atNightTime = message.atNightTime);
    message.attackerHasScepter !== undefined && (obj.attackerHasScepter = message.attackerHasScepter);
    message.neutralCampTeam !== undefined && (obj.neutralCampTeam = Math.round(message.neutralCampTeam));
    message.regeneratedHealth !== undefined && (obj.regeneratedHealth = message.regeneratedHealth);
    message.willReincarnate !== undefined && (obj.willReincarnate = message.willReincarnate);
    message.usesCharges !== undefined && (obj.usesCharges = message.usesCharges);
    return obj;
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

  fromJSON(object: any): CMsgPendingEventAward {
    return {
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      actionId: isSet(object.actionId) ? Number(object.actionId) : 0,
      numToGrant: isSet(object.numToGrant) ? Number(object.numToGrant) : 0,
      scoreMode: isSet(object.scoreMode) ? eEventActionScoreModeFromJSON(object.scoreMode) : 0,
      auditAction: isSet(object.auditAction) ? Number(object.auditAction) : 0,
      auditData: isSet(object.auditData) ? String(object.auditData) : "0",
    };
  },

  toJSON(message: CMsgPendingEventAward): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.actionId !== undefined && (obj.actionId = Math.round(message.actionId));
    message.numToGrant !== undefined && (obj.numToGrant = Math.round(message.numToGrant));
    message.scoreMode !== undefined && (obj.scoreMode = eEventActionScoreModeToJSON(message.scoreMode));
    message.auditAction !== undefined && (obj.auditAction = Math.round(message.auditAction));
    message.auditData !== undefined && (obj.auditData = message.auditData);
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
