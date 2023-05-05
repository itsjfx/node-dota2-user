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

export enum CMsgBattleReportHighlightCategory {
  k_eHighlightGeneral = 0,
  k_eHighlightHero = 1,
  k_eHighlightRole = 2,
}

export enum CMsgBattleReportRole {
  k_eUnknownRole = -1,
  k_eSafelane = 0,
  k_eMidlane = 1,
  k_eOfflane = 2,
  k_eSoftSupport = 3,
  k_eHardSupport = 4,
}

export enum CMsgBattleReportCompareContext {
  k_eCompareContextInvalid = -1,
  k_eAbsoluteValue = 0,
  k_ePlayersOfSimilarRank = 1,
  k_eAllPlayers = 2,
  k_ePlayersPersonalHistory = 3,
}

export enum CMsgBattleReportHighlightTier {
  k_eHighlightTierLow = -1,
  k_eHighlightTierNone = 0,
  k_eHighlightTier1 = 1,
  k_eHighlightTier2 = 2,
  k_eHighlightTier3 = 3,
  k_eHighlightTierCustom = 4,
}

export enum CMsgBattleReportHighlightRarity {
  k_eHighlightCommon = 0,
  k_eHighlightUncommon = 1,
  k_eHighlightRare = 2,
}

export enum CMsgBattleReportEOutcome {
  k_eWin = 0,
  k_eLoss = 1,
}

export enum CMsgBattleReportELaneOutcome {
  k_eUnknownLaneOutcome = -1,
  k_eWonLane = 0,
  k_eLostLane = 1,
  k_eEvenLane = 2,
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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
