/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CSOEconItemAttribute, CSOEconItemEquipped } from "./base_gcmessages";
import { CMsgMatchMatchmakingStats, CMvpData } from "./dota_gcmessages_common_match_management";
import {
  dotaGcTeam,
  dotaGcTeamFromJSON,
  dotaGcTeamToJSON,
  EDOTAMMRBoostType,
  eDOTAMMRBoostTypeFromJSON,
  eDOTAMMRBoostTypeToJSON,
  EEvent,
  eEventFromJSON,
  eEventToJSON,
} from "./dota_shared_enums";

export interface CDOTAMatchMetadataFile {
  version: number;
  matchId: string;
  metadata: CDOTAMatchMetadata | undefined;
  privateMetadata: Buffer;
}

export interface CDOTAMatchMetadata {
  teams: CDOTAMatchMetadata_Team[];
  lobbyId: string;
  reportUntilTime: string;
  eventGameCustomTable: Buffer;
  primaryEventId: number;
  matchmakingStats: CMsgMatchMatchmakingStats | undefined;
  mvpData: CMvpData | undefined;
  guildChallengeProgress: CDOTAMatchMetadata_GuildChallengeProgress[];
  customPostGameTable: Buffer;
  matchTips: CDOTAMatchMetadata_Tip[];
}

export interface CDOTAMatchMetadata_EconItem {
  defIndex: number;
  quality: number;
  attribute: CSOEconItemAttribute[];
  style: number;
  equippedState: CSOEconItemEquipped[];
}

export interface CDOTAMatchMetadata_Team {
  dotaTeam: number;
  players: CDOTAMatchMetadata_Team_Player[];
  graphExperience: number[];
  graphGoldEarned: number[];
  graphNetWorth: number[];
  cmFirstPick: boolean;
  cmCaptainPlayerId: number;
  cmPenalty: number;
}

export interface CDOTAMatchMetadata_Team_PlayerKill {
  victimSlot: number;
  count: number;
}

export interface CDOTAMatchMetadata_Team_ItemPurchase {
  itemId: number;
  purchaseTime: number;
}

export interface CDOTAMatchMetadata_Team_InventorySnapshot {
  itemId: number[];
  gameTime: number;
  kills: number;
  deaths: number;
  assists: number;
  level: number;
  backpackItemId: number[];
  neutralItemId: number;
}

export interface CDOTAMatchMetadata_Team_AutoStyleCriteria {
  nameToken: number;
  value: number;
}

export interface CDOTAMatchMetadata_Team_StrangeGemProgress {
  killEaterType: number;
  gemItemDefIndex: number;
  requiredHeroId: number;
  startingValue: number;
  endingValue: number;
  ownerItemDefIndex: number;
  ownerItemId: string;
}

export interface CDOTAMatchMetadata_Team_VictoryPrediction {
  itemId: string;
  itemDefIndex: number;
  startingValue: number;
  isVictory: boolean;
}

export interface CDOTAMatchMetadata_Team_SubChallenge {
  slotId: number;
  startValue: number;
  endValue: number;
  completed: boolean;
}

export interface CDOTAMatchMetadata_Team_CavernChallengeResult {
  completedPathId: number;
  claimedRoomId: number;
}

export interface CDOTAMatchMetadata_Team_ActionGrant {
  actionId: number;
  quantity: number;
  audit: number;
  requiresWin: boolean;
  auditData: string;
}

export interface CDOTAMatchMetadata_Team_CandyGrant {
  points: number;
  reason: number;
}

export interface CDOTAMatchMetadata_Team_PeriodicResourceData {
  periodicResourceId: number;
  remaining: number;
  max: number;
}

export interface CDOTAMatchMetadata_Team_EventData {
  eventId: number;
  eventPoints: number;
  challengeInstanceId: number;
  challengeQuestId: number;
  challengeQuestChallengeId: number;
  challengeCompleted: boolean;
  challengeRankCompleted: number;
  challengeRankPreviouslyCompleted: number;
  eventOwned: boolean;
  subChallengesWithProgress: CDOTAMatchMetadata_Team_SubChallenge[];
  wagerWinnings: number;
  cavernChallengeActive: boolean;
  cavernChallengeWinnings: number;
  amountWagered: number;
  periodicPointAdjustments: number;
  cavernChallengeMapResults: CDOTAMatchMetadata_Team_CavernChallengeResult[];
  cavernChallengePlusShardWinnings: number;
  actionsGranted: CDOTAMatchMetadata_Team_ActionGrant[];
  cavernCrawlMapVariant: number;
  teamWagerBonusPct: number;
  wagerStreakPct: number;
  candyPointsGranted: CDOTAMatchMetadata_Team_CandyGrant[];
  activeSeasonId: number;
  cavernCrawlHalfCredit: boolean;
  periodicResources: CDOTAMatchMetadata_Team_PeriodicResourceData[];
}

export interface CDOTAMatchMetadata_Team_FeaturedGamemodeProgress {
  startValue: number;
  endValue: number;
  maxValue: number;
}

export interface CDOTAMatchMetadata_Team_Player {
  abilityUpgrades: number[];
  playerSlot: number;
  kills: CDOTAMatchMetadata_Team_PlayerKill[];
  items: CDOTAMatchMetadata_Team_ItemPurchase[];
  avgKillsX16: number;
  avgDeathsX16: number;
  avgAssistsX16: number;
  avgGpmX16: number;
  avgXpmX16: number;
  bestKillsX16: number;
  bestAssistsX16: number;
  bestGpmX16: number;
  bestXpmX16: number;
  winStreak: number;
  bestWinStreak: number;
  fightScore: number;
  farmScore: number;
  supportScore: number;
  pushScore: number;
  levelUpTimes: number[];
  graphNetWorth: number[];
  inventorySnapshot: CDOTAMatchMetadata_Team_InventorySnapshot[];
  avgStatsCalibrated: boolean;
  autoStyleCriteria: CDOTAMatchMetadata_Team_AutoStyleCriteria[];
  eventData: CDOTAMatchMetadata_Team_EventData[];
  strangeGemProgress: CDOTAMatchMetadata_Team_StrangeGemProgress[];
  heroXp: number;
  campsStacked: number;
  victoryPrediction: CDOTAMatchMetadata_Team_VictoryPrediction[];
  laneSelectionFlags: number;
  rampages: number;
  tripleKills: number;
  aegisSnatched: number;
  rapiersPurchased: number;
  couriersKilled: number;
  netWorthRank: number;
  supportGoldSpent: number;
  observerWardsPlaced: number;
  sentryWardsPlaced: number;
  wardsDewarded: number;
  stunDuration: number;
  rankMmrBoostType: EDOTAMMRBoostType;
  contractProgress: CDOTAMatchMetadata_Team_Player_ContractProgress[];
  guildIds: number[];
  graphHeroDamage: number[];
  teamNumber: dotaGcTeam;
  teamSlot: number;
  featuredGamemodeProgress: CDOTAMatchMetadata_Team_FeaturedGamemodeProgress | undefined;
  featuredHeroStickerIndex: number;
  featuredHeroStickerQuality: number;
  equippedEconItems: CDOTAMatchMetadata_EconItem[];
  gamePlayerId: number;
}

export interface CDOTAMatchMetadata_Team_Player_ContractProgress {
  guildId: number;
  eventId: number;
  challengeInstanceId: number;
  challengeParameter: number;
  contractStars: number;
  contractSlot: number;
  completed: boolean;
}

export interface CDOTAMatchMetadata_GuildChallengeProgress {
  guildId: number;
  eventId: EEvent;
  challengeInstanceId: number;
  challengeParameter: number;
  challengeTimestamp: number;
  challengeProgressAtStart: number;
  challengeProgressAccumulated: number;
  individualProgress: CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress[];
}

export interface CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress {
  progress: number;
  playerSlot: number;
}

export interface CDOTAMatchMetadata_Tip {
  sourcePlayerSlot: number;
  targetPlayerSlot: number;
  tipAmount: number;
  eventId: EEvent;
}

export interface CDOTAMatchPrivateMetadata {
  teams: CDOTAMatchPrivateMetadata_Team[];
  graphWinProbability: number[];
  stringNames: CDOTAMatchPrivateMetadata_StringName[];
}

export interface CDOTAMatchPrivateMetadata_StringName {
  id: number;
  name: string;
}

export interface CDOTAMatchPrivateMetadata_Team {
  dotaTeam: number;
  players: CDOTAMatchPrivateMetadata_Team_Player[];
  buildings: CDOTAMatchPrivateMetadata_Team_Building[];
}

export interface CDOTAMatchPrivateMetadata_Team_Player {
  playerSlot: number;
  positionStream: Buffer;
  combatSegments: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment[];
  damageUnitNames: string[];
  buffRecords: CDOTAMatchPrivateMetadata_Team_Player_BuffRecord[];
  graphKills: number[];
  graphDeaths: number[];
  graphAssists: number[];
  graphLasthits: number[];
  graphDenies: number[];
  goldReceived: CDOTAMatchPrivateMetadata_Team_Player_GoldReceived | undefined;
  xpReceived: CDOTAMatchPrivateMetadata_Team_Player_XPReceived | undefined;
  teamNumber: dotaGcTeam;
  teamSlot: number;
}

export interface CDOTAMatchPrivateMetadata_Team_Player_CombatSegment {
  gameTime: number;
  damageByAbility: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility[];
  healingByAbility: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility[];
}

export interface CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility {
  sourceUnitIndex: number;
  abilityId: number;
  byHeroTargets: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget[];
}

export interface CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget {
  heroId: number;
  damage: number;
}

export interface CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility {
  sourceUnitIndex: number;
  abilityId: number;
  byHeroTargets: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget[];
}

export interface CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget {
  heroId: number;
  healing: number;
}

export interface CDOTAMatchPrivateMetadata_Team_Player_BuffRecord {
  buffAbilityId: number;
  buffModifierName: string;
  byHeroTargets: CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget[];
}

export interface CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget {
  heroId: number;
  elapsedDuration: number;
  isHidden: boolean;
}

export interface CDOTAMatchPrivateMetadata_Team_Player_GoldReceived {
  creep: number;
  heroes: number;
  bountyRunes: number;
  passive: number;
  buildings: number;
  abilities: number;
  wards: number;
  other: number;
}

export interface CDOTAMatchPrivateMetadata_Team_Player_XPReceived {
  creep: number;
  heroes: number;
  roshan: number;
  tomeOfKnowledge: number;
  outpost: number;
  other: number;
}

export interface CDOTAMatchPrivateMetadata_Team_Building {
  unitName: string;
  positionQuantX: number;
  positionQuantY: number;
  deathTime: number;
}

function createBaseCDOTAMatchMetadataFile(): CDOTAMatchMetadataFile {
  return { version: 0, matchId: "0", metadata: undefined, privateMetadata: Buffer.alloc(0) };
}

export const CDOTAMatchMetadataFile = {
  encode(message: CDOTAMatchMetadataFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).int32(message.version);
    }
    if (message.matchId !== "0") {
      writer.uint32(16).uint64(message.matchId);
    }
    if (message.metadata !== undefined) {
      CDOTAMatchMetadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    if (message.privateMetadata.length !== 0) {
      writer.uint32(42).bytes(message.privateMetadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadataFile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadataFile();
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
          if (tag != 16) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.metadata = CDOTAMatchMetadata.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.privateMetadata = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchMetadataFile {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      metadata: isSet(object.metadata) ? CDOTAMatchMetadata.fromJSON(object.metadata) : undefined,
      privateMetadata: isSet(object.privateMetadata)
        ? Buffer.from(bytesFromBase64(object.privateMetadata))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: CDOTAMatchMetadataFile): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? CDOTAMatchMetadata.toJSON(message.metadata) : undefined);
    message.privateMetadata !== undefined &&
      (obj.privateMetadata = base64FromBytes(
        message.privateMetadata !== undefined ? message.privateMetadata : Buffer.alloc(0),
      ));
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchMetadataFile>): CDOTAMatchMetadataFile {
    return CDOTAMatchMetadataFile.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMatchMetadataFile>): CDOTAMatchMetadataFile {
    const message = createBaseCDOTAMatchMetadataFile();
    message.version = object.version ?? 0;
    message.matchId = object.matchId ?? "0";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? CDOTAMatchMetadata.fromPartial(object.metadata)
      : undefined;
    message.privateMetadata = object.privateMetadata ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCDOTAMatchMetadata(): CDOTAMatchMetadata {
  return {
    teams: [],
    lobbyId: "0",
    reportUntilTime: "0",
    eventGameCustomTable: Buffer.alloc(0),
    primaryEventId: 0,
    matchmakingStats: undefined,
    mvpData: undefined,
    guildChallengeProgress: [],
    customPostGameTable: Buffer.alloc(0),
    matchTips: [],
  };
}

export const CDOTAMatchMetadata = {
  encode(message: CDOTAMatchMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.teams) {
      CDOTAMatchMetadata_Team.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lobbyId !== "0") {
      writer.uint32(25).fixed64(message.lobbyId);
    }
    if (message.reportUntilTime !== "0") {
      writer.uint32(33).fixed64(message.reportUntilTime);
    }
    if (message.eventGameCustomTable.length !== 0) {
      writer.uint32(42).bytes(message.eventGameCustomTable);
    }
    if (message.primaryEventId !== 0) {
      writer.uint32(48).uint32(message.primaryEventId);
    }
    if (message.matchmakingStats !== undefined) {
      CMsgMatchMatchmakingStats.encode(message.matchmakingStats, writer.uint32(66).fork()).ldelim();
    }
    if (message.mvpData !== undefined) {
      CMvpData.encode(message.mvpData, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.guildChallengeProgress) {
      CDOTAMatchMetadata_GuildChallengeProgress.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.customPostGameTable.length !== 0) {
      writer.uint32(90).bytes(message.customPostGameTable);
    }
    for (const v of message.matchTips) {
      CDOTAMatchMetadata_Tip.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.teams.push(CDOTAMatchMetadata_Team.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.lobbyId = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.reportUntilTime = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.eventGameCustomTable = reader.bytes() as Buffer;
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.primaryEventId = reader.uint32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.matchmakingStats = CMsgMatchMatchmakingStats.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.mvpData = CMvpData.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.guildChallengeProgress.push(
            CDOTAMatchMetadata_GuildChallengeProgress.decode(reader, reader.uint32()),
          );
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.customPostGameTable = reader.bytes() as Buffer;
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.matchTips.push(CDOTAMatchMetadata_Tip.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchMetadata {
    return {
      teams: Array.isArray(object?.teams) ? object.teams.map((e: any) => CDOTAMatchMetadata_Team.fromJSON(e)) : [],
      lobbyId: isSet(object.lobbyId) ? String(object.lobbyId) : "0",
      reportUntilTime: isSet(object.reportUntilTime) ? String(object.reportUntilTime) : "0",
      eventGameCustomTable: isSet(object.eventGameCustomTable)
        ? Buffer.from(bytesFromBase64(object.eventGameCustomTable))
        : Buffer.alloc(0),
      primaryEventId: isSet(object.primaryEventId) ? Number(object.primaryEventId) : 0,
      matchmakingStats: isSet(object.matchmakingStats)
        ? CMsgMatchMatchmakingStats.fromJSON(object.matchmakingStats)
        : undefined,
      mvpData: isSet(object.mvpData) ? CMvpData.fromJSON(object.mvpData) : undefined,
      guildChallengeProgress: Array.isArray(object?.guildChallengeProgress)
        ? object.guildChallengeProgress.map((e: any) => CDOTAMatchMetadata_GuildChallengeProgress.fromJSON(e))
        : [],
      customPostGameTable: isSet(object.customPostGameTable)
        ? Buffer.from(bytesFromBase64(object.customPostGameTable))
        : Buffer.alloc(0),
      matchTips: Array.isArray(object?.matchTips)
        ? object.matchTips.map((e: any) => CDOTAMatchMetadata_Tip.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAMatchMetadata): unknown {
    const obj: any = {};
    if (message.teams) {
      obj.teams = message.teams.map((e) => e ? CDOTAMatchMetadata_Team.toJSON(e) : undefined);
    } else {
      obj.teams = [];
    }
    message.lobbyId !== undefined && (obj.lobbyId = message.lobbyId);
    message.reportUntilTime !== undefined && (obj.reportUntilTime = message.reportUntilTime);
    message.eventGameCustomTable !== undefined &&
      (obj.eventGameCustomTable = base64FromBytes(
        message.eventGameCustomTable !== undefined ? message.eventGameCustomTable : Buffer.alloc(0),
      ));
    message.primaryEventId !== undefined && (obj.primaryEventId = Math.round(message.primaryEventId));
    message.matchmakingStats !== undefined && (obj.matchmakingStats = message.matchmakingStats
      ? CMsgMatchMatchmakingStats.toJSON(message.matchmakingStats)
      : undefined);
    message.mvpData !== undefined && (obj.mvpData = message.mvpData ? CMvpData.toJSON(message.mvpData) : undefined);
    if (message.guildChallengeProgress) {
      obj.guildChallengeProgress = message.guildChallengeProgress.map((e) =>
        e ? CDOTAMatchMetadata_GuildChallengeProgress.toJSON(e) : undefined
      );
    } else {
      obj.guildChallengeProgress = [];
    }
    message.customPostGameTable !== undefined &&
      (obj.customPostGameTable = base64FromBytes(
        message.customPostGameTable !== undefined ? message.customPostGameTable : Buffer.alloc(0),
      ));
    if (message.matchTips) {
      obj.matchTips = message.matchTips.map((e) => e ? CDOTAMatchMetadata_Tip.toJSON(e) : undefined);
    } else {
      obj.matchTips = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchMetadata>): CDOTAMatchMetadata {
    return CDOTAMatchMetadata.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMatchMetadata>): CDOTAMatchMetadata {
    const message = createBaseCDOTAMatchMetadata();
    message.teams = object.teams?.map((e) => CDOTAMatchMetadata_Team.fromPartial(e)) || [];
    message.lobbyId = object.lobbyId ?? "0";
    message.reportUntilTime = object.reportUntilTime ?? "0";
    message.eventGameCustomTable = object.eventGameCustomTable ?? Buffer.alloc(0);
    message.primaryEventId = object.primaryEventId ?? 0;
    message.matchmakingStats = (object.matchmakingStats !== undefined && object.matchmakingStats !== null)
      ? CMsgMatchMatchmakingStats.fromPartial(object.matchmakingStats)
      : undefined;
    message.mvpData = (object.mvpData !== undefined && object.mvpData !== null)
      ? CMvpData.fromPartial(object.mvpData)
      : undefined;
    message.guildChallengeProgress =
      object.guildChallengeProgress?.map((e) => CDOTAMatchMetadata_GuildChallengeProgress.fromPartial(e)) || [];
    message.customPostGameTable = object.customPostGameTable ?? Buffer.alloc(0);
    message.matchTips = object.matchTips?.map((e) => CDOTAMatchMetadata_Tip.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCDOTAMatchMetadata_EconItem(): CDOTAMatchMetadata_EconItem {
  return { defIndex: 0, quality: 0, attribute: [], style: 0, equippedState: [] };
}

export const CDOTAMatchMetadata_EconItem = {
  encode(message: CDOTAMatchMetadata_EconItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defIndex !== 0) {
      writer.uint32(8).uint32(message.defIndex);
    }
    if (message.quality !== 0) {
      writer.uint32(16).uint32(message.quality);
    }
    for (const v of message.attribute) {
      CSOEconItemAttribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.style !== 0) {
      writer.uint32(32).uint32(message.style);
    }
    for (const v of message.equippedState) {
      CSOEconItemEquipped.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_EconItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_EconItem();
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

          message.quality = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.attribute.push(CSOEconItemAttribute.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.style = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.equippedState.push(CSOEconItemEquipped.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchMetadata_EconItem {
    return {
      defIndex: isSet(object.defIndex) ? Number(object.defIndex) : 0,
      quality: isSet(object.quality) ? Number(object.quality) : 0,
      attribute: Array.isArray(object?.attribute)
        ? object.attribute.map((e: any) => CSOEconItemAttribute.fromJSON(e))
        : [],
      style: isSet(object.style) ? Number(object.style) : 0,
      equippedState: Array.isArray(object?.equippedState)
        ? object.equippedState.map((e: any) => CSOEconItemEquipped.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAMatchMetadata_EconItem): unknown {
    const obj: any = {};
    message.defIndex !== undefined && (obj.defIndex = Math.round(message.defIndex));
    message.quality !== undefined && (obj.quality = Math.round(message.quality));
    if (message.attribute) {
      obj.attribute = message.attribute.map((e) => e ? CSOEconItemAttribute.toJSON(e) : undefined);
    } else {
      obj.attribute = [];
    }
    message.style !== undefined && (obj.style = Math.round(message.style));
    if (message.equippedState) {
      obj.equippedState = message.equippedState.map((e) => e ? CSOEconItemEquipped.toJSON(e) : undefined);
    } else {
      obj.equippedState = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchMetadata_EconItem>): CDOTAMatchMetadata_EconItem {
    return CDOTAMatchMetadata_EconItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMatchMetadata_EconItem>): CDOTAMatchMetadata_EconItem {
    const message = createBaseCDOTAMatchMetadata_EconItem();
    message.defIndex = object.defIndex ?? 0;
    message.quality = object.quality ?? 0;
    message.attribute = object.attribute?.map((e) => CSOEconItemAttribute.fromPartial(e)) || [];
    message.style = object.style ?? 0;
    message.equippedState = object.equippedState?.map((e) => CSOEconItemEquipped.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCDOTAMatchMetadata_Team(): CDOTAMatchMetadata_Team {
  return {
    dotaTeam: 0,
    players: [],
    graphExperience: [],
    graphGoldEarned: [],
    graphNetWorth: [],
    cmFirstPick: false,
    cmCaptainPlayerId: 0,
    cmPenalty: 0,
  };
}

export const CDOTAMatchMetadata_Team = {
  encode(message: CDOTAMatchMetadata_Team, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dotaTeam !== 0) {
      writer.uint32(8).uint32(message.dotaTeam);
    }
    for (const v of message.players) {
      CDOTAMatchMetadata_Team_Player.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.graphExperience) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.graphGoldEarned) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.graphNetWorth) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.cmFirstPick === true) {
      writer.uint32(48).bool(message.cmFirstPick);
    }
    if (message.cmCaptainPlayerId !== 0) {
      writer.uint32(56).int32(message.cmCaptainPlayerId);
    }
    if (message.cmPenalty !== 0) {
      writer.uint32(80).uint32(message.cmPenalty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_Team {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_Team();
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
          if (tag != 18) {
            break;
          }

          message.players.push(CDOTAMatchMetadata_Team_Player.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag == 29) {
            message.graphExperience.push(reader.float());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.graphExperience.push(reader.float());
            }

            continue;
          }

          break;
        case 4:
          if (tag == 37) {
            message.graphGoldEarned.push(reader.float());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.graphGoldEarned.push(reader.float());
            }

            continue;
          }

          break;
        case 5:
          if (tag == 45) {
            message.graphNetWorth.push(reader.float());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.graphNetWorth.push(reader.float());
            }

            continue;
          }

          break;
        case 6:
          if (tag != 48) {
            break;
          }

          message.cmFirstPick = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.cmCaptainPlayerId = reader.int32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.cmPenalty = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchMetadata_Team {
    return {
      dotaTeam: isSet(object.dotaTeam) ? Number(object.dotaTeam) : 0,
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CDOTAMatchMetadata_Team_Player.fromJSON(e))
        : [],
      graphExperience: Array.isArray(object?.graphExperience) ? object.graphExperience.map((e: any) => Number(e)) : [],
      graphGoldEarned: Array.isArray(object?.graphGoldEarned) ? object.graphGoldEarned.map((e: any) => Number(e)) : [],
      graphNetWorth: Array.isArray(object?.graphNetWorth) ? object.graphNetWorth.map((e: any) => Number(e)) : [],
      cmFirstPick: isSet(object.cmFirstPick) ? Boolean(object.cmFirstPick) : false,
      cmCaptainPlayerId: isSet(object.cmCaptainPlayerId) ? Number(object.cmCaptainPlayerId) : 0,
      cmPenalty: isSet(object.cmPenalty) ? Number(object.cmPenalty) : 0,
    };
  },

  toJSON(message: CDOTAMatchMetadata_Team): unknown {
    const obj: any = {};
    message.dotaTeam !== undefined && (obj.dotaTeam = Math.round(message.dotaTeam));
    if (message.players) {
      obj.players = message.players.map((e) => e ? CDOTAMatchMetadata_Team_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    if (message.graphExperience) {
      obj.graphExperience = message.graphExperience.map((e) => e);
    } else {
      obj.graphExperience = [];
    }
    if (message.graphGoldEarned) {
      obj.graphGoldEarned = message.graphGoldEarned.map((e) => e);
    } else {
      obj.graphGoldEarned = [];
    }
    if (message.graphNetWorth) {
      obj.graphNetWorth = message.graphNetWorth.map((e) => e);
    } else {
      obj.graphNetWorth = [];
    }
    message.cmFirstPick !== undefined && (obj.cmFirstPick = message.cmFirstPick);
    message.cmCaptainPlayerId !== undefined && (obj.cmCaptainPlayerId = Math.round(message.cmCaptainPlayerId));
    message.cmPenalty !== undefined && (obj.cmPenalty = Math.round(message.cmPenalty));
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchMetadata_Team>): CDOTAMatchMetadata_Team {
    return CDOTAMatchMetadata_Team.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMatchMetadata_Team>): CDOTAMatchMetadata_Team {
    const message = createBaseCDOTAMatchMetadata_Team();
    message.dotaTeam = object.dotaTeam ?? 0;
    message.players = object.players?.map((e) => CDOTAMatchMetadata_Team_Player.fromPartial(e)) || [];
    message.graphExperience = object.graphExperience?.map((e) => e) || [];
    message.graphGoldEarned = object.graphGoldEarned?.map((e) => e) || [];
    message.graphNetWorth = object.graphNetWorth?.map((e) => e) || [];
    message.cmFirstPick = object.cmFirstPick ?? false;
    message.cmCaptainPlayerId = object.cmCaptainPlayerId ?? 0;
    message.cmPenalty = object.cmPenalty ?? 0;
    return message;
  },
};

function createBaseCDOTAMatchMetadata_Team_PlayerKill(): CDOTAMatchMetadata_Team_PlayerKill {
  return { victimSlot: 0, count: 0 };
}

export const CDOTAMatchMetadata_Team_PlayerKill = {
  encode(message: CDOTAMatchMetadata_Team_PlayerKill, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.victimSlot !== 0) {
      writer.uint32(8).uint32(message.victimSlot);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_Team_PlayerKill {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_Team_PlayerKill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.victimSlot = reader.uint32();
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

  fromJSON(object: any): CDOTAMatchMetadata_Team_PlayerKill {
    return {
      victimSlot: isSet(object.victimSlot) ? Number(object.victimSlot) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: CDOTAMatchMetadata_Team_PlayerKill): unknown {
    const obj: any = {};
    message.victimSlot !== undefined && (obj.victimSlot = Math.round(message.victimSlot));
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchMetadata_Team_PlayerKill>): CDOTAMatchMetadata_Team_PlayerKill {
    return CDOTAMatchMetadata_Team_PlayerKill.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMatchMetadata_Team_PlayerKill>): CDOTAMatchMetadata_Team_PlayerKill {
    const message = createBaseCDOTAMatchMetadata_Team_PlayerKill();
    message.victimSlot = object.victimSlot ?? 0;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseCDOTAMatchMetadata_Team_ItemPurchase(): CDOTAMatchMetadata_Team_ItemPurchase {
  return { itemId: 0, purchaseTime: 0 };
}

export const CDOTAMatchMetadata_Team_ItemPurchase = {
  encode(message: CDOTAMatchMetadata_Team_ItemPurchase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== 0) {
      writer.uint32(8).int32(message.itemId);
    }
    if (message.purchaseTime !== 0) {
      writer.uint32(16).int32(message.purchaseTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_Team_ItemPurchase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_Team_ItemPurchase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.purchaseTime = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchMetadata_Team_ItemPurchase {
    return {
      itemId: isSet(object.itemId) ? Number(object.itemId) : 0,
      purchaseTime: isSet(object.purchaseTime) ? Number(object.purchaseTime) : 0,
    };
  },

  toJSON(message: CDOTAMatchMetadata_Team_ItemPurchase): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = Math.round(message.itemId));
    message.purchaseTime !== undefined && (obj.purchaseTime = Math.round(message.purchaseTime));
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchMetadata_Team_ItemPurchase>): CDOTAMatchMetadata_Team_ItemPurchase {
    return CDOTAMatchMetadata_Team_ItemPurchase.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMatchMetadata_Team_ItemPurchase>): CDOTAMatchMetadata_Team_ItemPurchase {
    const message = createBaseCDOTAMatchMetadata_Team_ItemPurchase();
    message.itemId = object.itemId ?? 0;
    message.purchaseTime = object.purchaseTime ?? 0;
    return message;
  },
};

function createBaseCDOTAMatchMetadata_Team_InventorySnapshot(): CDOTAMatchMetadata_Team_InventorySnapshot {
  return { itemId: [], gameTime: 0, kills: 0, deaths: 0, assists: 0, level: 0, backpackItemId: [], neutralItemId: 0 };
}

export const CDOTAMatchMetadata_Team_InventorySnapshot = {
  encode(message: CDOTAMatchMetadata_Team_InventorySnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.itemId) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.gameTime !== 0) {
      writer.uint32(16).int32(message.gameTime);
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
    if (message.level !== 0) {
      writer.uint32(48).uint32(message.level);
    }
    writer.uint32(58).fork();
    for (const v of message.backpackItemId) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.neutralItemId !== 0) {
      writer.uint32(64).int32(message.neutralItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_Team_InventorySnapshot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_Team_InventorySnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.itemId.push(reader.int32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemId.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gameTime = reader.int32();
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

          message.level = reader.uint32();
          continue;
        case 7:
          if (tag == 56) {
            message.backpackItemId.push(reader.int32());
            continue;
          }

          if (tag == 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.backpackItemId.push(reader.int32());
            }

            continue;
          }

          break;
        case 8:
          if (tag != 64) {
            break;
          }

          message.neutralItemId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchMetadata_Team_InventorySnapshot {
    return {
      itemId: Array.isArray(object?.itemId) ? object.itemId.map((e: any) => Number(e)) : [],
      gameTime: isSet(object.gameTime) ? Number(object.gameTime) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      assists: isSet(object.assists) ? Number(object.assists) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      backpackItemId: Array.isArray(object?.backpackItemId) ? object.backpackItemId.map((e: any) => Number(e)) : [],
      neutralItemId: isSet(object.neutralItemId) ? Number(object.neutralItemId) : 0,
    };
  },

  toJSON(message: CDOTAMatchMetadata_Team_InventorySnapshot): unknown {
    const obj: any = {};
    if (message.itemId) {
      obj.itemId = message.itemId.map((e) => Math.round(e));
    } else {
      obj.itemId = [];
    }
    message.gameTime !== undefined && (obj.gameTime = Math.round(message.gameTime));
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.assists !== undefined && (obj.assists = Math.round(message.assists));
    message.level !== undefined && (obj.level = Math.round(message.level));
    if (message.backpackItemId) {
      obj.backpackItemId = message.backpackItemId.map((e) => Math.round(e));
    } else {
      obj.backpackItemId = [];
    }
    message.neutralItemId !== undefined && (obj.neutralItemId = Math.round(message.neutralItemId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchMetadata_Team_InventorySnapshot>): CDOTAMatchMetadata_Team_InventorySnapshot {
    return CDOTAMatchMetadata_Team_InventorySnapshot.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchMetadata_Team_InventorySnapshot>,
  ): CDOTAMatchMetadata_Team_InventorySnapshot {
    const message = createBaseCDOTAMatchMetadata_Team_InventorySnapshot();
    message.itemId = object.itemId?.map((e) => e) || [];
    message.gameTime = object.gameTime ?? 0;
    message.kills = object.kills ?? 0;
    message.deaths = object.deaths ?? 0;
    message.assists = object.assists ?? 0;
    message.level = object.level ?? 0;
    message.backpackItemId = object.backpackItemId?.map((e) => e) || [];
    message.neutralItemId = object.neutralItemId ?? 0;
    return message;
  },
};

function createBaseCDOTAMatchMetadata_Team_AutoStyleCriteria(): CDOTAMatchMetadata_Team_AutoStyleCriteria {
  return { nameToken: 0, value: 0 };
}

export const CDOTAMatchMetadata_Team_AutoStyleCriteria = {
  encode(message: CDOTAMatchMetadata_Team_AutoStyleCriteria, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nameToken !== 0) {
      writer.uint32(8).uint32(message.nameToken);
    }
    if (message.value !== 0) {
      writer.uint32(21).float(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_Team_AutoStyleCriteria {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_Team_AutoStyleCriteria();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.nameToken = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
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

  fromJSON(object: any): CDOTAMatchMetadata_Team_AutoStyleCriteria {
    return {
      nameToken: isSet(object.nameToken) ? Number(object.nameToken) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: CDOTAMatchMetadata_Team_AutoStyleCriteria): unknown {
    const obj: any = {};
    message.nameToken !== undefined && (obj.nameToken = Math.round(message.nameToken));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchMetadata_Team_AutoStyleCriteria>): CDOTAMatchMetadata_Team_AutoStyleCriteria {
    return CDOTAMatchMetadata_Team_AutoStyleCriteria.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchMetadata_Team_AutoStyleCriteria>,
  ): CDOTAMatchMetadata_Team_AutoStyleCriteria {
    const message = createBaseCDOTAMatchMetadata_Team_AutoStyleCriteria();
    message.nameToken = object.nameToken ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseCDOTAMatchMetadata_Team_StrangeGemProgress(): CDOTAMatchMetadata_Team_StrangeGemProgress {
  return {
    killEaterType: 0,
    gemItemDefIndex: 0,
    requiredHeroId: 0,
    startingValue: 0,
    endingValue: 0,
    ownerItemDefIndex: 0,
    ownerItemId: "0",
  };
}

export const CDOTAMatchMetadata_Team_StrangeGemProgress = {
  encode(message: CDOTAMatchMetadata_Team_StrangeGemProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.killEaterType !== 0) {
      writer.uint32(8).uint32(message.killEaterType);
    }
    if (message.gemItemDefIndex !== 0) {
      writer.uint32(16).uint32(message.gemItemDefIndex);
    }
    if (message.requiredHeroId !== 0) {
      writer.uint32(24).uint32(message.requiredHeroId);
    }
    if (message.startingValue !== 0) {
      writer.uint32(32).uint32(message.startingValue);
    }
    if (message.endingValue !== 0) {
      writer.uint32(40).uint32(message.endingValue);
    }
    if (message.ownerItemDefIndex !== 0) {
      writer.uint32(48).uint32(message.ownerItemDefIndex);
    }
    if (message.ownerItemId !== "0") {
      writer.uint32(56).uint64(message.ownerItemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_Team_StrangeGemProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_Team_StrangeGemProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.killEaterType = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.gemItemDefIndex = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.requiredHeroId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.startingValue = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.endingValue = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.ownerItemDefIndex = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.ownerItemId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchMetadata_Team_StrangeGemProgress {
    return {
      killEaterType: isSet(object.killEaterType) ? Number(object.killEaterType) : 0,
      gemItemDefIndex: isSet(object.gemItemDefIndex) ? Number(object.gemItemDefIndex) : 0,
      requiredHeroId: isSet(object.requiredHeroId) ? Number(object.requiredHeroId) : 0,
      startingValue: isSet(object.startingValue) ? Number(object.startingValue) : 0,
      endingValue: isSet(object.endingValue) ? Number(object.endingValue) : 0,
      ownerItemDefIndex: isSet(object.ownerItemDefIndex) ? Number(object.ownerItemDefIndex) : 0,
      ownerItemId: isSet(object.ownerItemId) ? String(object.ownerItemId) : "0",
    };
  },

  toJSON(message: CDOTAMatchMetadata_Team_StrangeGemProgress): unknown {
    const obj: any = {};
    message.killEaterType !== undefined && (obj.killEaterType = Math.round(message.killEaterType));
    message.gemItemDefIndex !== undefined && (obj.gemItemDefIndex = Math.round(message.gemItemDefIndex));
    message.requiredHeroId !== undefined && (obj.requiredHeroId = Math.round(message.requiredHeroId));
    message.startingValue !== undefined && (obj.startingValue = Math.round(message.startingValue));
    message.endingValue !== undefined && (obj.endingValue = Math.round(message.endingValue));
    message.ownerItemDefIndex !== undefined && (obj.ownerItemDefIndex = Math.round(message.ownerItemDefIndex));
    message.ownerItemId !== undefined && (obj.ownerItemId = message.ownerItemId);
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchMetadata_Team_StrangeGemProgress>): CDOTAMatchMetadata_Team_StrangeGemProgress {
    return CDOTAMatchMetadata_Team_StrangeGemProgress.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchMetadata_Team_StrangeGemProgress>,
  ): CDOTAMatchMetadata_Team_StrangeGemProgress {
    const message = createBaseCDOTAMatchMetadata_Team_StrangeGemProgress();
    message.killEaterType = object.killEaterType ?? 0;
    message.gemItemDefIndex = object.gemItemDefIndex ?? 0;
    message.requiredHeroId = object.requiredHeroId ?? 0;
    message.startingValue = object.startingValue ?? 0;
    message.endingValue = object.endingValue ?? 0;
    message.ownerItemDefIndex = object.ownerItemDefIndex ?? 0;
    message.ownerItemId = object.ownerItemId ?? "0";
    return message;
  },
};

function createBaseCDOTAMatchMetadata_Team_VictoryPrediction(): CDOTAMatchMetadata_Team_VictoryPrediction {
  return { itemId: "0", itemDefIndex: 0, startingValue: 0, isVictory: false };
}

export const CDOTAMatchMetadata_Team_VictoryPrediction = {
  encode(message: CDOTAMatchMetadata_Team_VictoryPrediction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "0") {
      writer.uint32(8).uint64(message.itemId);
    }
    if (message.itemDefIndex !== 0) {
      writer.uint32(16).uint32(message.itemDefIndex);
    }
    if (message.startingValue !== 0) {
      writer.uint32(24).uint32(message.startingValue);
    }
    if (message.isVictory === true) {
      writer.uint32(32).bool(message.isVictory);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_Team_VictoryPrediction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_Team_VictoryPrediction();
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
          if (tag != 16) {
            break;
          }

          message.itemDefIndex = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.startingValue = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.isVictory = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchMetadata_Team_VictoryPrediction {
    return {
      itemId: isSet(object.itemId) ? String(object.itemId) : "0",
      itemDefIndex: isSet(object.itemDefIndex) ? Number(object.itemDefIndex) : 0,
      startingValue: isSet(object.startingValue) ? Number(object.startingValue) : 0,
      isVictory: isSet(object.isVictory) ? Boolean(object.isVictory) : false,
    };
  },

  toJSON(message: CDOTAMatchMetadata_Team_VictoryPrediction): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.itemDefIndex !== undefined && (obj.itemDefIndex = Math.round(message.itemDefIndex));
    message.startingValue !== undefined && (obj.startingValue = Math.round(message.startingValue));
    message.isVictory !== undefined && (obj.isVictory = message.isVictory);
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchMetadata_Team_VictoryPrediction>): CDOTAMatchMetadata_Team_VictoryPrediction {
    return CDOTAMatchMetadata_Team_VictoryPrediction.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchMetadata_Team_VictoryPrediction>,
  ): CDOTAMatchMetadata_Team_VictoryPrediction {
    const message = createBaseCDOTAMatchMetadata_Team_VictoryPrediction();
    message.itemId = object.itemId ?? "0";
    message.itemDefIndex = object.itemDefIndex ?? 0;
    message.startingValue = object.startingValue ?? 0;
    message.isVictory = object.isVictory ?? false;
    return message;
  },
};

function createBaseCDOTAMatchMetadata_Team_SubChallenge(): CDOTAMatchMetadata_Team_SubChallenge {
  return { slotId: 0, startValue: 0, endValue: 0, completed: false };
}

export const CDOTAMatchMetadata_Team_SubChallenge = {
  encode(message: CDOTAMatchMetadata_Team_SubChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slotId !== 0) {
      writer.uint32(8).uint32(message.slotId);
    }
    if (message.startValue !== 0) {
      writer.uint32(16).uint32(message.startValue);
    }
    if (message.endValue !== 0) {
      writer.uint32(24).uint32(message.endValue);
    }
    if (message.completed === true) {
      writer.uint32(32).bool(message.completed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_Team_SubChallenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_Team_SubChallenge();
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

          message.startValue = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.endValue = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
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

  fromJSON(object: any): CDOTAMatchMetadata_Team_SubChallenge {
    return {
      slotId: isSet(object.slotId) ? Number(object.slotId) : 0,
      startValue: isSet(object.startValue) ? Number(object.startValue) : 0,
      endValue: isSet(object.endValue) ? Number(object.endValue) : 0,
      completed: isSet(object.completed) ? Boolean(object.completed) : false,
    };
  },

  toJSON(message: CDOTAMatchMetadata_Team_SubChallenge): unknown {
    const obj: any = {};
    message.slotId !== undefined && (obj.slotId = Math.round(message.slotId));
    message.startValue !== undefined && (obj.startValue = Math.round(message.startValue));
    message.endValue !== undefined && (obj.endValue = Math.round(message.endValue));
    message.completed !== undefined && (obj.completed = message.completed);
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchMetadata_Team_SubChallenge>): CDOTAMatchMetadata_Team_SubChallenge {
    return CDOTAMatchMetadata_Team_SubChallenge.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMatchMetadata_Team_SubChallenge>): CDOTAMatchMetadata_Team_SubChallenge {
    const message = createBaseCDOTAMatchMetadata_Team_SubChallenge();
    message.slotId = object.slotId ?? 0;
    message.startValue = object.startValue ?? 0;
    message.endValue = object.endValue ?? 0;
    message.completed = object.completed ?? false;
    return message;
  },
};

function createBaseCDOTAMatchMetadata_Team_CavernChallengeResult(): CDOTAMatchMetadata_Team_CavernChallengeResult {
  return { completedPathId: 0, claimedRoomId: 0 };
}

export const CDOTAMatchMetadata_Team_CavernChallengeResult = {
  encode(message: CDOTAMatchMetadata_Team_CavernChallengeResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completedPathId !== 0) {
      writer.uint32(8).uint32(message.completedPathId);
    }
    if (message.claimedRoomId !== 0) {
      writer.uint32(16).uint32(message.claimedRoomId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_Team_CavernChallengeResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_Team_CavernChallengeResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.completedPathId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.claimedRoomId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchMetadata_Team_CavernChallengeResult {
    return {
      completedPathId: isSet(object.completedPathId) ? Number(object.completedPathId) : 0,
      claimedRoomId: isSet(object.claimedRoomId) ? Number(object.claimedRoomId) : 0,
    };
  },

  toJSON(message: CDOTAMatchMetadata_Team_CavernChallengeResult): unknown {
    const obj: any = {};
    message.completedPathId !== undefined && (obj.completedPathId = Math.round(message.completedPathId));
    message.claimedRoomId !== undefined && (obj.claimedRoomId = Math.round(message.claimedRoomId));
    return obj;
  },

  create(
    base?: DeepPartial<CDOTAMatchMetadata_Team_CavernChallengeResult>,
  ): CDOTAMatchMetadata_Team_CavernChallengeResult {
    return CDOTAMatchMetadata_Team_CavernChallengeResult.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchMetadata_Team_CavernChallengeResult>,
  ): CDOTAMatchMetadata_Team_CavernChallengeResult {
    const message = createBaseCDOTAMatchMetadata_Team_CavernChallengeResult();
    message.completedPathId = object.completedPathId ?? 0;
    message.claimedRoomId = object.claimedRoomId ?? 0;
    return message;
  },
};

function createBaseCDOTAMatchMetadata_Team_ActionGrant(): CDOTAMatchMetadata_Team_ActionGrant {
  return { actionId: 0, quantity: 0, audit: 0, requiresWin: false, auditData: "0" };
}

export const CDOTAMatchMetadata_Team_ActionGrant = {
  encode(message: CDOTAMatchMetadata_Team_ActionGrant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionId !== 0) {
      writer.uint32(8).uint32(message.actionId);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).uint32(message.quantity);
    }
    if (message.audit !== 0) {
      writer.uint32(24).uint32(message.audit);
    }
    if (message.requiresWin === true) {
      writer.uint32(32).bool(message.requiresWin);
    }
    if (message.auditData !== "0") {
      writer.uint32(40).uint64(message.auditData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_Team_ActionGrant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_Team_ActionGrant();
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

          message.quantity = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.audit = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.requiresWin = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
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

  fromJSON(object: any): CDOTAMatchMetadata_Team_ActionGrant {
    return {
      actionId: isSet(object.actionId) ? Number(object.actionId) : 0,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      audit: isSet(object.audit) ? Number(object.audit) : 0,
      requiresWin: isSet(object.requiresWin) ? Boolean(object.requiresWin) : false,
      auditData: isSet(object.auditData) ? String(object.auditData) : "0",
    };
  },

  toJSON(message: CDOTAMatchMetadata_Team_ActionGrant): unknown {
    const obj: any = {};
    message.actionId !== undefined && (obj.actionId = Math.round(message.actionId));
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.audit !== undefined && (obj.audit = Math.round(message.audit));
    message.requiresWin !== undefined && (obj.requiresWin = message.requiresWin);
    message.auditData !== undefined && (obj.auditData = message.auditData);
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchMetadata_Team_ActionGrant>): CDOTAMatchMetadata_Team_ActionGrant {
    return CDOTAMatchMetadata_Team_ActionGrant.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMatchMetadata_Team_ActionGrant>): CDOTAMatchMetadata_Team_ActionGrant {
    const message = createBaseCDOTAMatchMetadata_Team_ActionGrant();
    message.actionId = object.actionId ?? 0;
    message.quantity = object.quantity ?? 0;
    message.audit = object.audit ?? 0;
    message.requiresWin = object.requiresWin ?? false;
    message.auditData = object.auditData ?? "0";
    return message;
  },
};

function createBaseCDOTAMatchMetadata_Team_CandyGrant(): CDOTAMatchMetadata_Team_CandyGrant {
  return { points: 0, reason: 0 };
}

export const CDOTAMatchMetadata_Team_CandyGrant = {
  encode(message: CDOTAMatchMetadata_Team_CandyGrant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.points !== 0) {
      writer.uint32(8).uint32(message.points);
    }
    if (message.reason !== 0) {
      writer.uint32(16).uint32(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_Team_CandyGrant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_Team_CandyGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.points = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.reason = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchMetadata_Team_CandyGrant {
    return {
      points: isSet(object.points) ? Number(object.points) : 0,
      reason: isSet(object.reason) ? Number(object.reason) : 0,
    };
  },

  toJSON(message: CDOTAMatchMetadata_Team_CandyGrant): unknown {
    const obj: any = {};
    message.points !== undefined && (obj.points = Math.round(message.points));
    message.reason !== undefined && (obj.reason = Math.round(message.reason));
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchMetadata_Team_CandyGrant>): CDOTAMatchMetadata_Team_CandyGrant {
    return CDOTAMatchMetadata_Team_CandyGrant.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMatchMetadata_Team_CandyGrant>): CDOTAMatchMetadata_Team_CandyGrant {
    const message = createBaseCDOTAMatchMetadata_Team_CandyGrant();
    message.points = object.points ?? 0;
    message.reason = object.reason ?? 0;
    return message;
  },
};

function createBaseCDOTAMatchMetadata_Team_PeriodicResourceData(): CDOTAMatchMetadata_Team_PeriodicResourceData {
  return { periodicResourceId: 0, remaining: 0, max: 0 };
}

export const CDOTAMatchMetadata_Team_PeriodicResourceData = {
  encode(message: CDOTAMatchMetadata_Team_PeriodicResourceData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.periodicResourceId !== 0) {
      writer.uint32(8).uint32(message.periodicResourceId);
    }
    if (message.remaining !== 0) {
      writer.uint32(16).uint32(message.remaining);
    }
    if (message.max !== 0) {
      writer.uint32(24).uint32(message.max);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_Team_PeriodicResourceData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_Team_PeriodicResourceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.periodicResourceId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.remaining = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.max = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchMetadata_Team_PeriodicResourceData {
    return {
      periodicResourceId: isSet(object.periodicResourceId) ? Number(object.periodicResourceId) : 0,
      remaining: isSet(object.remaining) ? Number(object.remaining) : 0,
      max: isSet(object.max) ? Number(object.max) : 0,
    };
  },

  toJSON(message: CDOTAMatchMetadata_Team_PeriodicResourceData): unknown {
    const obj: any = {};
    message.periodicResourceId !== undefined && (obj.periodicResourceId = Math.round(message.periodicResourceId));
    message.remaining !== undefined && (obj.remaining = Math.round(message.remaining));
    message.max !== undefined && (obj.max = Math.round(message.max));
    return obj;
  },

  create(
    base?: DeepPartial<CDOTAMatchMetadata_Team_PeriodicResourceData>,
  ): CDOTAMatchMetadata_Team_PeriodicResourceData {
    return CDOTAMatchMetadata_Team_PeriodicResourceData.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchMetadata_Team_PeriodicResourceData>,
  ): CDOTAMatchMetadata_Team_PeriodicResourceData {
    const message = createBaseCDOTAMatchMetadata_Team_PeriodicResourceData();
    message.periodicResourceId = object.periodicResourceId ?? 0;
    message.remaining = object.remaining ?? 0;
    message.max = object.max ?? 0;
    return message;
  },
};

function createBaseCDOTAMatchMetadata_Team_EventData(): CDOTAMatchMetadata_Team_EventData {
  return {
    eventId: 0,
    eventPoints: 0,
    challengeInstanceId: 0,
    challengeQuestId: 0,
    challengeQuestChallengeId: 0,
    challengeCompleted: false,
    challengeRankCompleted: 0,
    challengeRankPreviouslyCompleted: 0,
    eventOwned: false,
    subChallengesWithProgress: [],
    wagerWinnings: 0,
    cavernChallengeActive: false,
    cavernChallengeWinnings: 0,
    amountWagered: 0,
    periodicPointAdjustments: 0,
    cavernChallengeMapResults: [],
    cavernChallengePlusShardWinnings: 0,
    actionsGranted: [],
    cavernCrawlMapVariant: 0,
    teamWagerBonusPct: 0,
    wagerStreakPct: 0,
    candyPointsGranted: [],
    activeSeasonId: 0,
    cavernCrawlHalfCredit: false,
    periodicResources: [],
  };
}

export const CDOTAMatchMetadata_Team_EventData = {
  encode(message: CDOTAMatchMetadata_Team_EventData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).uint32(message.eventId);
    }
    if (message.eventPoints !== 0) {
      writer.uint32(16).uint32(message.eventPoints);
    }
    if (message.challengeInstanceId !== 0) {
      writer.uint32(24).uint32(message.challengeInstanceId);
    }
    if (message.challengeQuestId !== 0) {
      writer.uint32(32).uint32(message.challengeQuestId);
    }
    if (message.challengeQuestChallengeId !== 0) {
      writer.uint32(40).uint32(message.challengeQuestChallengeId);
    }
    if (message.challengeCompleted === true) {
      writer.uint32(48).bool(message.challengeCompleted);
    }
    if (message.challengeRankCompleted !== 0) {
      writer.uint32(56).uint32(message.challengeRankCompleted);
    }
    if (message.challengeRankPreviouslyCompleted !== 0) {
      writer.uint32(64).uint32(message.challengeRankPreviouslyCompleted);
    }
    if (message.eventOwned === true) {
      writer.uint32(72).bool(message.eventOwned);
    }
    for (const v of message.subChallengesWithProgress) {
      CDOTAMatchMetadata_Team_SubChallenge.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.wagerWinnings !== 0) {
      writer.uint32(88).uint32(message.wagerWinnings);
    }
    if (message.cavernChallengeActive === true) {
      writer.uint32(96).bool(message.cavernChallengeActive);
    }
    if (message.cavernChallengeWinnings !== 0) {
      writer.uint32(104).uint32(message.cavernChallengeWinnings);
    }
    if (message.amountWagered !== 0) {
      writer.uint32(112).uint32(message.amountWagered);
    }
    if (message.periodicPointAdjustments !== 0) {
      writer.uint32(128).uint32(message.periodicPointAdjustments);
    }
    for (const v of message.cavernChallengeMapResults) {
      CDOTAMatchMetadata_Team_CavernChallengeResult.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    if (message.cavernChallengePlusShardWinnings !== 0) {
      writer.uint32(144).uint32(message.cavernChallengePlusShardWinnings);
    }
    for (const v of message.actionsGranted) {
      CDOTAMatchMetadata_Team_ActionGrant.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    if (message.cavernCrawlMapVariant !== 0) {
      writer.uint32(160).uint32(message.cavernCrawlMapVariant);
    }
    if (message.teamWagerBonusPct !== 0) {
      writer.uint32(168).uint32(message.teamWagerBonusPct);
    }
    if (message.wagerStreakPct !== 0) {
      writer.uint32(176).uint32(message.wagerStreakPct);
    }
    for (const v of message.candyPointsGranted) {
      CDOTAMatchMetadata_Team_CandyGrant.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    if (message.activeSeasonId !== 0) {
      writer.uint32(192).uint32(message.activeSeasonId);
    }
    if (message.cavernCrawlHalfCredit === true) {
      writer.uint32(200).bool(message.cavernCrawlHalfCredit);
    }
    for (const v of message.periodicResources) {
      CDOTAMatchMetadata_Team_PeriodicResourceData.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_Team_EventData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_Team_EventData();
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

          message.eventPoints = reader.uint32();
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

          message.challengeQuestId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.challengeQuestChallengeId = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.challengeCompleted = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.challengeRankCompleted = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.challengeRankPreviouslyCompleted = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.eventOwned = reader.bool();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.subChallengesWithProgress.push(CDOTAMatchMetadata_Team_SubChallenge.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.wagerWinnings = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.cavernChallengeActive = reader.bool();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.cavernChallengeWinnings = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.amountWagered = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.periodicPointAdjustments = reader.uint32();
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.cavernChallengeMapResults.push(
            CDOTAMatchMetadata_Team_CavernChallengeResult.decode(reader, reader.uint32()),
          );
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.cavernChallengePlusShardWinnings = reader.uint32();
          continue;
        case 19:
          if (tag != 154) {
            break;
          }

          message.actionsGranted.push(CDOTAMatchMetadata_Team_ActionGrant.decode(reader, reader.uint32()));
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.cavernCrawlMapVariant = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.teamWagerBonusPct = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.wagerStreakPct = reader.uint32();
          continue;
        case 23:
          if (tag != 186) {
            break;
          }

          message.candyPointsGranted.push(CDOTAMatchMetadata_Team_CandyGrant.decode(reader, reader.uint32()));
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.activeSeasonId = reader.uint32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.cavernCrawlHalfCredit = reader.bool();
          continue;
        case 26:
          if (tag != 210) {
            break;
          }

          message.periodicResources.push(CDOTAMatchMetadata_Team_PeriodicResourceData.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchMetadata_Team_EventData {
    return {
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      eventPoints: isSet(object.eventPoints) ? Number(object.eventPoints) : 0,
      challengeInstanceId: isSet(object.challengeInstanceId) ? Number(object.challengeInstanceId) : 0,
      challengeQuestId: isSet(object.challengeQuestId) ? Number(object.challengeQuestId) : 0,
      challengeQuestChallengeId: isSet(object.challengeQuestChallengeId) ? Number(object.challengeQuestChallengeId) : 0,
      challengeCompleted: isSet(object.challengeCompleted) ? Boolean(object.challengeCompleted) : false,
      challengeRankCompleted: isSet(object.challengeRankCompleted) ? Number(object.challengeRankCompleted) : 0,
      challengeRankPreviouslyCompleted: isSet(object.challengeRankPreviouslyCompleted)
        ? Number(object.challengeRankPreviouslyCompleted)
        : 0,
      eventOwned: isSet(object.eventOwned) ? Boolean(object.eventOwned) : false,
      subChallengesWithProgress: Array.isArray(object?.subChallengesWithProgress)
        ? object.subChallengesWithProgress.map((e: any) => CDOTAMatchMetadata_Team_SubChallenge.fromJSON(e))
        : [],
      wagerWinnings: isSet(object.wagerWinnings) ? Number(object.wagerWinnings) : 0,
      cavernChallengeActive: isSet(object.cavernChallengeActive) ? Boolean(object.cavernChallengeActive) : false,
      cavernChallengeWinnings: isSet(object.cavernChallengeWinnings) ? Number(object.cavernChallengeWinnings) : 0,
      amountWagered: isSet(object.amountWagered) ? Number(object.amountWagered) : 0,
      periodicPointAdjustments: isSet(object.periodicPointAdjustments) ? Number(object.periodicPointAdjustments) : 0,
      cavernChallengeMapResults: Array.isArray(object?.cavernChallengeMapResults)
        ? object.cavernChallengeMapResults.map((e: any) => CDOTAMatchMetadata_Team_CavernChallengeResult.fromJSON(e))
        : [],
      cavernChallengePlusShardWinnings: isSet(object.cavernChallengePlusShardWinnings)
        ? Number(object.cavernChallengePlusShardWinnings)
        : 0,
      actionsGranted: Array.isArray(object?.actionsGranted)
        ? object.actionsGranted.map((e: any) => CDOTAMatchMetadata_Team_ActionGrant.fromJSON(e))
        : [],
      cavernCrawlMapVariant: isSet(object.cavernCrawlMapVariant) ? Number(object.cavernCrawlMapVariant) : 0,
      teamWagerBonusPct: isSet(object.teamWagerBonusPct) ? Number(object.teamWagerBonusPct) : 0,
      wagerStreakPct: isSet(object.wagerStreakPct) ? Number(object.wagerStreakPct) : 0,
      candyPointsGranted: Array.isArray(object?.candyPointsGranted)
        ? object.candyPointsGranted.map((e: any) => CDOTAMatchMetadata_Team_CandyGrant.fromJSON(e))
        : [],
      activeSeasonId: isSet(object.activeSeasonId) ? Number(object.activeSeasonId) : 0,
      cavernCrawlHalfCredit: isSet(object.cavernCrawlHalfCredit) ? Boolean(object.cavernCrawlHalfCredit) : false,
      periodicResources: Array.isArray(object?.periodicResources)
        ? object.periodicResources.map((e: any) => CDOTAMatchMetadata_Team_PeriodicResourceData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAMatchMetadata_Team_EventData): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    message.eventPoints !== undefined && (obj.eventPoints = Math.round(message.eventPoints));
    message.challengeInstanceId !== undefined && (obj.challengeInstanceId = Math.round(message.challengeInstanceId));
    message.challengeQuestId !== undefined && (obj.challengeQuestId = Math.round(message.challengeQuestId));
    message.challengeQuestChallengeId !== undefined &&
      (obj.challengeQuestChallengeId = Math.round(message.challengeQuestChallengeId));
    message.challengeCompleted !== undefined && (obj.challengeCompleted = message.challengeCompleted);
    message.challengeRankCompleted !== undefined &&
      (obj.challengeRankCompleted = Math.round(message.challengeRankCompleted));
    message.challengeRankPreviouslyCompleted !== undefined &&
      (obj.challengeRankPreviouslyCompleted = Math.round(message.challengeRankPreviouslyCompleted));
    message.eventOwned !== undefined && (obj.eventOwned = message.eventOwned);
    if (message.subChallengesWithProgress) {
      obj.subChallengesWithProgress = message.subChallengesWithProgress.map((e) =>
        e ? CDOTAMatchMetadata_Team_SubChallenge.toJSON(e) : undefined
      );
    } else {
      obj.subChallengesWithProgress = [];
    }
    message.wagerWinnings !== undefined && (obj.wagerWinnings = Math.round(message.wagerWinnings));
    message.cavernChallengeActive !== undefined && (obj.cavernChallengeActive = message.cavernChallengeActive);
    message.cavernChallengeWinnings !== undefined &&
      (obj.cavernChallengeWinnings = Math.round(message.cavernChallengeWinnings));
    message.amountWagered !== undefined && (obj.amountWagered = Math.round(message.amountWagered));
    message.periodicPointAdjustments !== undefined &&
      (obj.periodicPointAdjustments = Math.round(message.periodicPointAdjustments));
    if (message.cavernChallengeMapResults) {
      obj.cavernChallengeMapResults = message.cavernChallengeMapResults.map((e) =>
        e ? CDOTAMatchMetadata_Team_CavernChallengeResult.toJSON(e) : undefined
      );
    } else {
      obj.cavernChallengeMapResults = [];
    }
    message.cavernChallengePlusShardWinnings !== undefined &&
      (obj.cavernChallengePlusShardWinnings = Math.round(message.cavernChallengePlusShardWinnings));
    if (message.actionsGranted) {
      obj.actionsGranted = message.actionsGranted.map((e) =>
        e ? CDOTAMatchMetadata_Team_ActionGrant.toJSON(e) : undefined
      );
    } else {
      obj.actionsGranted = [];
    }
    message.cavernCrawlMapVariant !== undefined &&
      (obj.cavernCrawlMapVariant = Math.round(message.cavernCrawlMapVariant));
    message.teamWagerBonusPct !== undefined && (obj.teamWagerBonusPct = Math.round(message.teamWagerBonusPct));
    message.wagerStreakPct !== undefined && (obj.wagerStreakPct = Math.round(message.wagerStreakPct));
    if (message.candyPointsGranted) {
      obj.candyPointsGranted = message.candyPointsGranted.map((e) =>
        e ? CDOTAMatchMetadata_Team_CandyGrant.toJSON(e) : undefined
      );
    } else {
      obj.candyPointsGranted = [];
    }
    message.activeSeasonId !== undefined && (obj.activeSeasonId = Math.round(message.activeSeasonId));
    message.cavernCrawlHalfCredit !== undefined && (obj.cavernCrawlHalfCredit = message.cavernCrawlHalfCredit);
    if (message.periodicResources) {
      obj.periodicResources = message.periodicResources.map((e) =>
        e ? CDOTAMatchMetadata_Team_PeriodicResourceData.toJSON(e) : undefined
      );
    } else {
      obj.periodicResources = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchMetadata_Team_EventData>): CDOTAMatchMetadata_Team_EventData {
    return CDOTAMatchMetadata_Team_EventData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMatchMetadata_Team_EventData>): CDOTAMatchMetadata_Team_EventData {
    const message = createBaseCDOTAMatchMetadata_Team_EventData();
    message.eventId = object.eventId ?? 0;
    message.eventPoints = object.eventPoints ?? 0;
    message.challengeInstanceId = object.challengeInstanceId ?? 0;
    message.challengeQuestId = object.challengeQuestId ?? 0;
    message.challengeQuestChallengeId = object.challengeQuestChallengeId ?? 0;
    message.challengeCompleted = object.challengeCompleted ?? false;
    message.challengeRankCompleted = object.challengeRankCompleted ?? 0;
    message.challengeRankPreviouslyCompleted = object.challengeRankPreviouslyCompleted ?? 0;
    message.eventOwned = object.eventOwned ?? false;
    message.subChallengesWithProgress =
      object.subChallengesWithProgress?.map((e) => CDOTAMatchMetadata_Team_SubChallenge.fromPartial(e)) || [];
    message.wagerWinnings = object.wagerWinnings ?? 0;
    message.cavernChallengeActive = object.cavernChallengeActive ?? false;
    message.cavernChallengeWinnings = object.cavernChallengeWinnings ?? 0;
    message.amountWagered = object.amountWagered ?? 0;
    message.periodicPointAdjustments = object.periodicPointAdjustments ?? 0;
    message.cavernChallengeMapResults =
      object.cavernChallengeMapResults?.map((e) => CDOTAMatchMetadata_Team_CavernChallengeResult.fromPartial(e)) || [];
    message.cavernChallengePlusShardWinnings = object.cavernChallengePlusShardWinnings ?? 0;
    message.actionsGranted = object.actionsGranted?.map((e) => CDOTAMatchMetadata_Team_ActionGrant.fromPartial(e)) ||
      [];
    message.cavernCrawlMapVariant = object.cavernCrawlMapVariant ?? 0;
    message.teamWagerBonusPct = object.teamWagerBonusPct ?? 0;
    message.wagerStreakPct = object.wagerStreakPct ?? 0;
    message.candyPointsGranted =
      object.candyPointsGranted?.map((e) => CDOTAMatchMetadata_Team_CandyGrant.fromPartial(e)) || [];
    message.activeSeasonId = object.activeSeasonId ?? 0;
    message.cavernCrawlHalfCredit = object.cavernCrawlHalfCredit ?? false;
    message.periodicResources =
      object.periodicResources?.map((e) => CDOTAMatchMetadata_Team_PeriodicResourceData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCDOTAMatchMetadata_Team_FeaturedGamemodeProgress(): CDOTAMatchMetadata_Team_FeaturedGamemodeProgress {
  return { startValue: 0, endValue: 0, maxValue: 0 };
}

export const CDOTAMatchMetadata_Team_FeaturedGamemodeProgress = {
  encode(
    message: CDOTAMatchMetadata_Team_FeaturedGamemodeProgress,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.startValue !== 0) {
      writer.uint32(8).uint32(message.startValue);
    }
    if (message.endValue !== 0) {
      writer.uint32(16).uint32(message.endValue);
    }
    if (message.maxValue !== 0) {
      writer.uint32(24).uint32(message.maxValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_Team_FeaturedGamemodeProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_Team_FeaturedGamemodeProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.startValue = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.endValue = reader.uint32();
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

  fromJSON(object: any): CDOTAMatchMetadata_Team_FeaturedGamemodeProgress {
    return {
      startValue: isSet(object.startValue) ? Number(object.startValue) : 0,
      endValue: isSet(object.endValue) ? Number(object.endValue) : 0,
      maxValue: isSet(object.maxValue) ? Number(object.maxValue) : 0,
    };
  },

  toJSON(message: CDOTAMatchMetadata_Team_FeaturedGamemodeProgress): unknown {
    const obj: any = {};
    message.startValue !== undefined && (obj.startValue = Math.round(message.startValue));
    message.endValue !== undefined && (obj.endValue = Math.round(message.endValue));
    message.maxValue !== undefined && (obj.maxValue = Math.round(message.maxValue));
    return obj;
  },

  create(
    base?: DeepPartial<CDOTAMatchMetadata_Team_FeaturedGamemodeProgress>,
  ): CDOTAMatchMetadata_Team_FeaturedGamemodeProgress {
    return CDOTAMatchMetadata_Team_FeaturedGamemodeProgress.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchMetadata_Team_FeaturedGamemodeProgress>,
  ): CDOTAMatchMetadata_Team_FeaturedGamemodeProgress {
    const message = createBaseCDOTAMatchMetadata_Team_FeaturedGamemodeProgress();
    message.startValue = object.startValue ?? 0;
    message.endValue = object.endValue ?? 0;
    message.maxValue = object.maxValue ?? 0;
    return message;
  },
};

function createBaseCDOTAMatchMetadata_Team_Player(): CDOTAMatchMetadata_Team_Player {
  return {
    abilityUpgrades: [],
    playerSlot: 0,
    kills: [],
    items: [],
    avgKillsX16: 0,
    avgDeathsX16: 0,
    avgAssistsX16: 0,
    avgGpmX16: 0,
    avgXpmX16: 0,
    bestKillsX16: 0,
    bestAssistsX16: 0,
    bestGpmX16: 0,
    bestXpmX16: 0,
    winStreak: 0,
    bestWinStreak: 0,
    fightScore: 0,
    farmScore: 0,
    supportScore: 0,
    pushScore: 0,
    levelUpTimes: [],
    graphNetWorth: [],
    inventorySnapshot: [],
    avgStatsCalibrated: false,
    autoStyleCriteria: [],
    eventData: [],
    strangeGemProgress: [],
    heroXp: 0,
    campsStacked: 0,
    victoryPrediction: [],
    laneSelectionFlags: 0,
    rampages: 0,
    tripleKills: 0,
    aegisSnatched: 0,
    rapiersPurchased: 0,
    couriersKilled: 0,
    netWorthRank: 0,
    supportGoldSpent: 0,
    observerWardsPlaced: 0,
    sentryWardsPlaced: 0,
    wardsDewarded: 0,
    stunDuration: 0,
    rankMmrBoostType: 0,
    contractProgress: [],
    guildIds: [],
    graphHeroDamage: [],
    teamNumber: 0,
    teamSlot: 0,
    featuredGamemodeProgress: undefined,
    featuredHeroStickerIndex: 0,
    featuredHeroStickerQuality: 0,
    equippedEconItems: [],
    gamePlayerId: 0,
  };
}

export const CDOTAMatchMetadata_Team_Player = {
  encode(message: CDOTAMatchMetadata_Team_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(18).fork();
    for (const v of message.abilityUpgrades) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.playerSlot !== 0) {
      writer.uint32(24).uint32(message.playerSlot);
    }
    for (const v of message.kills) {
      CDOTAMatchMetadata_Team_PlayerKill.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.items) {
      CDOTAMatchMetadata_Team_ItemPurchase.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.avgKillsX16 !== 0) {
      writer.uint32(56).uint32(message.avgKillsX16);
    }
    if (message.avgDeathsX16 !== 0) {
      writer.uint32(64).uint32(message.avgDeathsX16);
    }
    if (message.avgAssistsX16 !== 0) {
      writer.uint32(72).uint32(message.avgAssistsX16);
    }
    if (message.avgGpmX16 !== 0) {
      writer.uint32(80).uint32(message.avgGpmX16);
    }
    if (message.avgXpmX16 !== 0) {
      writer.uint32(88).uint32(message.avgXpmX16);
    }
    if (message.bestKillsX16 !== 0) {
      writer.uint32(96).uint32(message.bestKillsX16);
    }
    if (message.bestAssistsX16 !== 0) {
      writer.uint32(104).uint32(message.bestAssistsX16);
    }
    if (message.bestGpmX16 !== 0) {
      writer.uint32(112).uint32(message.bestGpmX16);
    }
    if (message.bestXpmX16 !== 0) {
      writer.uint32(120).uint32(message.bestXpmX16);
    }
    if (message.winStreak !== 0) {
      writer.uint32(128).uint32(message.winStreak);
    }
    if (message.bestWinStreak !== 0) {
      writer.uint32(136).uint32(message.bestWinStreak);
    }
    if (message.fightScore !== 0) {
      writer.uint32(149).float(message.fightScore);
    }
    if (message.farmScore !== 0) {
      writer.uint32(157).float(message.farmScore);
    }
    if (message.supportScore !== 0) {
      writer.uint32(165).float(message.supportScore);
    }
    if (message.pushScore !== 0) {
      writer.uint32(173).float(message.pushScore);
    }
    writer.uint32(178).fork();
    for (const v of message.levelUpTimes) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(186).fork();
    for (const v of message.graphNetWorth) {
      writer.float(v);
    }
    writer.ldelim();
    for (const v of message.inventorySnapshot) {
      CDOTAMatchMetadata_Team_InventorySnapshot.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    if (message.avgStatsCalibrated === true) {
      writer.uint32(200).bool(message.avgStatsCalibrated);
    }
    for (const v of message.autoStyleCriteria) {
      CDOTAMatchMetadata_Team_AutoStyleCriteria.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    for (const v of message.eventData) {
      CDOTAMatchMetadata_Team_EventData.encode(v!, writer.uint32(234).fork()).ldelim();
    }
    for (const v of message.strangeGemProgress) {
      CDOTAMatchMetadata_Team_StrangeGemProgress.encode(v!, writer.uint32(242).fork()).ldelim();
    }
    if (message.heroXp !== 0) {
      writer.uint32(248).uint32(message.heroXp);
    }
    if (message.campsStacked !== 0) {
      writer.uint32(256).uint32(message.campsStacked);
    }
    for (const v of message.victoryPrediction) {
      CDOTAMatchMetadata_Team_VictoryPrediction.encode(v!, writer.uint32(266).fork()).ldelim();
    }
    if (message.laneSelectionFlags !== 0) {
      writer.uint32(272).uint32(message.laneSelectionFlags);
    }
    if (message.rampages !== 0) {
      writer.uint32(280).uint32(message.rampages);
    }
    if (message.tripleKills !== 0) {
      writer.uint32(288).uint32(message.tripleKills);
    }
    if (message.aegisSnatched !== 0) {
      writer.uint32(296).uint32(message.aegisSnatched);
    }
    if (message.rapiersPurchased !== 0) {
      writer.uint32(304).uint32(message.rapiersPurchased);
    }
    if (message.couriersKilled !== 0) {
      writer.uint32(312).uint32(message.couriersKilled);
    }
    if (message.netWorthRank !== 0) {
      writer.uint32(320).uint32(message.netWorthRank);
    }
    if (message.supportGoldSpent !== 0) {
      writer.uint32(328).uint32(message.supportGoldSpent);
    }
    if (message.observerWardsPlaced !== 0) {
      writer.uint32(336).uint32(message.observerWardsPlaced);
    }
    if (message.sentryWardsPlaced !== 0) {
      writer.uint32(344).uint32(message.sentryWardsPlaced);
    }
    if (message.wardsDewarded !== 0) {
      writer.uint32(352).uint32(message.wardsDewarded);
    }
    if (message.stunDuration !== 0) {
      writer.uint32(365).float(message.stunDuration);
    }
    if (message.rankMmrBoostType !== 0) {
      writer.uint32(368).int32(message.rankMmrBoostType);
    }
    for (const v of message.contractProgress) {
      CDOTAMatchMetadata_Team_Player_ContractProgress.encode(v!, writer.uint32(386).fork()).ldelim();
    }
    writer.uint32(394).fork();
    for (const v of message.guildIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(402).fork();
    for (const v of message.graphHeroDamage) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.teamNumber !== 0) {
      writer.uint32(408).int32(message.teamNumber);
    }
    if (message.teamSlot !== 0) {
      writer.uint32(416).uint32(message.teamSlot);
    }
    if (message.featuredGamemodeProgress !== undefined) {
      CDOTAMatchMetadata_Team_FeaturedGamemodeProgress.encode(
        message.featuredGamemodeProgress,
        writer.uint32(426).fork(),
      ).ldelim();
    }
    if (message.featuredHeroStickerIndex !== 0) {
      writer.uint32(432).uint32(message.featuredHeroStickerIndex);
    }
    if (message.featuredHeroStickerQuality !== 0) {
      writer.uint32(440).uint32(message.featuredHeroStickerQuality);
    }
    for (const v of message.equippedEconItems) {
      CDOTAMatchMetadata_EconItem.encode(v!, writer.uint32(450).fork()).ldelim();
    }
    if (message.gamePlayerId !== 0) {
      writer.uint32(456).int32(message.gamePlayerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_Team_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_Team_Player();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag == 16) {
            message.abilityUpgrades.push(reader.int32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.abilityUpgrades.push(reader.int32());
            }

            continue;
          }

          break;
        case 3:
          if (tag != 24) {
            break;
          }

          message.playerSlot = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.kills.push(CDOTAMatchMetadata_Team_PlayerKill.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.items.push(CDOTAMatchMetadata_Team_ItemPurchase.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.avgKillsX16 = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.avgDeathsX16 = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.avgAssistsX16 = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.avgGpmX16 = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.avgXpmX16 = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.bestKillsX16 = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.bestAssistsX16 = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.bestGpmX16 = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.bestXpmX16 = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.winStreak = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.bestWinStreak = reader.uint32();
          continue;
        case 18:
          if (tag != 149) {
            break;
          }

          message.fightScore = reader.float();
          continue;
        case 19:
          if (tag != 157) {
            break;
          }

          message.farmScore = reader.float();
          continue;
        case 20:
          if (tag != 165) {
            break;
          }

          message.supportScore = reader.float();
          continue;
        case 21:
          if (tag != 173) {
            break;
          }

          message.pushScore = reader.float();
          continue;
        case 22:
          if (tag == 176) {
            message.levelUpTimes.push(reader.uint32());
            continue;
          }

          if (tag == 178) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.levelUpTimes.push(reader.uint32());
            }

            continue;
          }

          break;
        case 23:
          if (tag == 189) {
            message.graphNetWorth.push(reader.float());
            continue;
          }

          if (tag == 186) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.graphNetWorth.push(reader.float());
            }

            continue;
          }

          break;
        case 24:
          if (tag != 194) {
            break;
          }

          message.inventorySnapshot.push(CDOTAMatchMetadata_Team_InventorySnapshot.decode(reader, reader.uint32()));
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.avgStatsCalibrated = reader.bool();
          continue;
        case 26:
          if (tag != 210) {
            break;
          }

          message.autoStyleCriteria.push(CDOTAMatchMetadata_Team_AutoStyleCriteria.decode(reader, reader.uint32()));
          continue;
        case 29:
          if (tag != 234) {
            break;
          }

          message.eventData.push(CDOTAMatchMetadata_Team_EventData.decode(reader, reader.uint32()));
          continue;
        case 30:
          if (tag != 242) {
            break;
          }

          message.strangeGemProgress.push(CDOTAMatchMetadata_Team_StrangeGemProgress.decode(reader, reader.uint32()));
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.heroXp = reader.uint32();
          continue;
        case 32:
          if (tag != 256) {
            break;
          }

          message.campsStacked = reader.uint32();
          continue;
        case 33:
          if (tag != 266) {
            break;
          }

          message.victoryPrediction.push(CDOTAMatchMetadata_Team_VictoryPrediction.decode(reader, reader.uint32()));
          continue;
        case 34:
          if (tag != 272) {
            break;
          }

          message.laneSelectionFlags = reader.uint32();
          continue;
        case 35:
          if (tag != 280) {
            break;
          }

          message.rampages = reader.uint32();
          continue;
        case 36:
          if (tag != 288) {
            break;
          }

          message.tripleKills = reader.uint32();
          continue;
        case 37:
          if (tag != 296) {
            break;
          }

          message.aegisSnatched = reader.uint32();
          continue;
        case 38:
          if (tag != 304) {
            break;
          }

          message.rapiersPurchased = reader.uint32();
          continue;
        case 39:
          if (tag != 312) {
            break;
          }

          message.couriersKilled = reader.uint32();
          continue;
        case 40:
          if (tag != 320) {
            break;
          }

          message.netWorthRank = reader.uint32();
          continue;
        case 41:
          if (tag != 328) {
            break;
          }

          message.supportGoldSpent = reader.uint32();
          continue;
        case 42:
          if (tag != 336) {
            break;
          }

          message.observerWardsPlaced = reader.uint32();
          continue;
        case 43:
          if (tag != 344) {
            break;
          }

          message.sentryWardsPlaced = reader.uint32();
          continue;
        case 44:
          if (tag != 352) {
            break;
          }

          message.wardsDewarded = reader.uint32();
          continue;
        case 45:
          if (tag != 365) {
            break;
          }

          message.stunDuration = reader.float();
          continue;
        case 46:
          if (tag != 368) {
            break;
          }

          message.rankMmrBoostType = reader.int32() as any;
          continue;
        case 48:
          if (tag != 386) {
            break;
          }

          message.contractProgress.push(
            CDOTAMatchMetadata_Team_Player_ContractProgress.decode(reader, reader.uint32()),
          );
          continue;
        case 49:
          if (tag == 392) {
            message.guildIds.push(reader.uint32());
            continue;
          }

          if (tag == 394) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.guildIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 50:
          if (tag == 405) {
            message.graphHeroDamage.push(reader.float());
            continue;
          }

          if (tag == 402) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.graphHeroDamage.push(reader.float());
            }

            continue;
          }

          break;
        case 51:
          if (tag != 408) {
            break;
          }

          message.teamNumber = reader.int32() as any;
          continue;
        case 52:
          if (tag != 416) {
            break;
          }

          message.teamSlot = reader.uint32();
          continue;
        case 53:
          if (tag != 426) {
            break;
          }

          message.featuredGamemodeProgress = CDOTAMatchMetadata_Team_FeaturedGamemodeProgress.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 54:
          if (tag != 432) {
            break;
          }

          message.featuredHeroStickerIndex = reader.uint32();
          continue;
        case 55:
          if (tag != 440) {
            break;
          }

          message.featuredHeroStickerQuality = reader.uint32();
          continue;
        case 56:
          if (tag != 450) {
            break;
          }

          message.equippedEconItems.push(CDOTAMatchMetadata_EconItem.decode(reader, reader.uint32()));
          continue;
        case 57:
          if (tag != 456) {
            break;
          }

          message.gamePlayerId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchMetadata_Team_Player {
    return {
      abilityUpgrades: Array.isArray(object?.abilityUpgrades) ? object.abilityUpgrades.map((e: any) => Number(e)) : [],
      playerSlot: isSet(object.playerSlot) ? Number(object.playerSlot) : 0,
      kills: Array.isArray(object?.kills)
        ? object.kills.map((e: any) => CDOTAMatchMetadata_Team_PlayerKill.fromJSON(e))
        : [],
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => CDOTAMatchMetadata_Team_ItemPurchase.fromJSON(e))
        : [],
      avgKillsX16: isSet(object.avgKillsX16) ? Number(object.avgKillsX16) : 0,
      avgDeathsX16: isSet(object.avgDeathsX16) ? Number(object.avgDeathsX16) : 0,
      avgAssistsX16: isSet(object.avgAssistsX16) ? Number(object.avgAssistsX16) : 0,
      avgGpmX16: isSet(object.avgGpmX16) ? Number(object.avgGpmX16) : 0,
      avgXpmX16: isSet(object.avgXpmX16) ? Number(object.avgXpmX16) : 0,
      bestKillsX16: isSet(object.bestKillsX16) ? Number(object.bestKillsX16) : 0,
      bestAssistsX16: isSet(object.bestAssistsX16) ? Number(object.bestAssistsX16) : 0,
      bestGpmX16: isSet(object.bestGpmX16) ? Number(object.bestGpmX16) : 0,
      bestXpmX16: isSet(object.bestXpmX16) ? Number(object.bestXpmX16) : 0,
      winStreak: isSet(object.winStreak) ? Number(object.winStreak) : 0,
      bestWinStreak: isSet(object.bestWinStreak) ? Number(object.bestWinStreak) : 0,
      fightScore: isSet(object.fightScore) ? Number(object.fightScore) : 0,
      farmScore: isSet(object.farmScore) ? Number(object.farmScore) : 0,
      supportScore: isSet(object.supportScore) ? Number(object.supportScore) : 0,
      pushScore: isSet(object.pushScore) ? Number(object.pushScore) : 0,
      levelUpTimes: Array.isArray(object?.levelUpTimes) ? object.levelUpTimes.map((e: any) => Number(e)) : [],
      graphNetWorth: Array.isArray(object?.graphNetWorth) ? object.graphNetWorth.map((e: any) => Number(e)) : [],
      inventorySnapshot: Array.isArray(object?.inventorySnapshot)
        ? object.inventorySnapshot.map((e: any) => CDOTAMatchMetadata_Team_InventorySnapshot.fromJSON(e))
        : [],
      avgStatsCalibrated: isSet(object.avgStatsCalibrated) ? Boolean(object.avgStatsCalibrated) : false,
      autoStyleCriteria: Array.isArray(object?.autoStyleCriteria)
        ? object.autoStyleCriteria.map((e: any) => CDOTAMatchMetadata_Team_AutoStyleCriteria.fromJSON(e))
        : [],
      eventData: Array.isArray(object?.eventData)
        ? object.eventData.map((e: any) => CDOTAMatchMetadata_Team_EventData.fromJSON(e))
        : [],
      strangeGemProgress: Array.isArray(object?.strangeGemProgress)
        ? object.strangeGemProgress.map((e: any) => CDOTAMatchMetadata_Team_StrangeGemProgress.fromJSON(e))
        : [],
      heroXp: isSet(object.heroXp) ? Number(object.heroXp) : 0,
      campsStacked: isSet(object.campsStacked) ? Number(object.campsStacked) : 0,
      victoryPrediction: Array.isArray(object?.victoryPrediction)
        ? object.victoryPrediction.map((e: any) => CDOTAMatchMetadata_Team_VictoryPrediction.fromJSON(e))
        : [],
      laneSelectionFlags: isSet(object.laneSelectionFlags) ? Number(object.laneSelectionFlags) : 0,
      rampages: isSet(object.rampages) ? Number(object.rampages) : 0,
      tripleKills: isSet(object.tripleKills) ? Number(object.tripleKills) : 0,
      aegisSnatched: isSet(object.aegisSnatched) ? Number(object.aegisSnatched) : 0,
      rapiersPurchased: isSet(object.rapiersPurchased) ? Number(object.rapiersPurchased) : 0,
      couriersKilled: isSet(object.couriersKilled) ? Number(object.couriersKilled) : 0,
      netWorthRank: isSet(object.netWorthRank) ? Number(object.netWorthRank) : 0,
      supportGoldSpent: isSet(object.supportGoldSpent) ? Number(object.supportGoldSpent) : 0,
      observerWardsPlaced: isSet(object.observerWardsPlaced) ? Number(object.observerWardsPlaced) : 0,
      sentryWardsPlaced: isSet(object.sentryWardsPlaced) ? Number(object.sentryWardsPlaced) : 0,
      wardsDewarded: isSet(object.wardsDewarded) ? Number(object.wardsDewarded) : 0,
      stunDuration: isSet(object.stunDuration) ? Number(object.stunDuration) : 0,
      rankMmrBoostType: isSet(object.rankMmrBoostType) ? eDOTAMMRBoostTypeFromJSON(object.rankMmrBoostType) : 0,
      contractProgress: Array.isArray(object?.contractProgress)
        ? object.contractProgress.map((e: any) => CDOTAMatchMetadata_Team_Player_ContractProgress.fromJSON(e))
        : [],
      guildIds: Array.isArray(object?.guildIds)
        ? object.guildIds.map((e: any) => Number(e))
        : [],
      graphHeroDamage: Array.isArray(object?.graphHeroDamage) ? object.graphHeroDamage.map((e: any) => Number(e)) : [],
      teamNumber: isSet(object.teamNumber) ? dotaGcTeamFromJSON(object.teamNumber) : 0,
      teamSlot: isSet(object.teamSlot) ? Number(object.teamSlot) : 0,
      featuredGamemodeProgress: isSet(object.featuredGamemodeProgress)
        ? CDOTAMatchMetadata_Team_FeaturedGamemodeProgress.fromJSON(object.featuredGamemodeProgress)
        : undefined,
      featuredHeroStickerIndex: isSet(object.featuredHeroStickerIndex) ? Number(object.featuredHeroStickerIndex) : 0,
      featuredHeroStickerQuality: isSet(object.featuredHeroStickerQuality)
        ? Number(object.featuredHeroStickerQuality)
        : 0,
      equippedEconItems: Array.isArray(object?.equippedEconItems)
        ? object.equippedEconItems.map((e: any) => CDOTAMatchMetadata_EconItem.fromJSON(e))
        : [],
      gamePlayerId: isSet(object.gamePlayerId) ? Number(object.gamePlayerId) : 0,
    };
  },

  toJSON(message: CDOTAMatchMetadata_Team_Player): unknown {
    const obj: any = {};
    if (message.abilityUpgrades) {
      obj.abilityUpgrades = message.abilityUpgrades.map((e) => Math.round(e));
    } else {
      obj.abilityUpgrades = [];
    }
    message.playerSlot !== undefined && (obj.playerSlot = Math.round(message.playerSlot));
    if (message.kills) {
      obj.kills = message.kills.map((e) => e ? CDOTAMatchMetadata_Team_PlayerKill.toJSON(e) : undefined);
    } else {
      obj.kills = [];
    }
    if (message.items) {
      obj.items = message.items.map((e) => e ? CDOTAMatchMetadata_Team_ItemPurchase.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.avgKillsX16 !== undefined && (obj.avgKillsX16 = Math.round(message.avgKillsX16));
    message.avgDeathsX16 !== undefined && (obj.avgDeathsX16 = Math.round(message.avgDeathsX16));
    message.avgAssistsX16 !== undefined && (obj.avgAssistsX16 = Math.round(message.avgAssistsX16));
    message.avgGpmX16 !== undefined && (obj.avgGpmX16 = Math.round(message.avgGpmX16));
    message.avgXpmX16 !== undefined && (obj.avgXpmX16 = Math.round(message.avgXpmX16));
    message.bestKillsX16 !== undefined && (obj.bestKillsX16 = Math.round(message.bestKillsX16));
    message.bestAssistsX16 !== undefined && (obj.bestAssistsX16 = Math.round(message.bestAssistsX16));
    message.bestGpmX16 !== undefined && (obj.bestGpmX16 = Math.round(message.bestGpmX16));
    message.bestXpmX16 !== undefined && (obj.bestXpmX16 = Math.round(message.bestXpmX16));
    message.winStreak !== undefined && (obj.winStreak = Math.round(message.winStreak));
    message.bestWinStreak !== undefined && (obj.bestWinStreak = Math.round(message.bestWinStreak));
    message.fightScore !== undefined && (obj.fightScore = message.fightScore);
    message.farmScore !== undefined && (obj.farmScore = message.farmScore);
    message.supportScore !== undefined && (obj.supportScore = message.supportScore);
    message.pushScore !== undefined && (obj.pushScore = message.pushScore);
    if (message.levelUpTimes) {
      obj.levelUpTimes = message.levelUpTimes.map((e) => Math.round(e));
    } else {
      obj.levelUpTimes = [];
    }
    if (message.graphNetWorth) {
      obj.graphNetWorth = message.graphNetWorth.map((e) => e);
    } else {
      obj.graphNetWorth = [];
    }
    if (message.inventorySnapshot) {
      obj.inventorySnapshot = message.inventorySnapshot.map((e) =>
        e ? CDOTAMatchMetadata_Team_InventorySnapshot.toJSON(e) : undefined
      );
    } else {
      obj.inventorySnapshot = [];
    }
    message.avgStatsCalibrated !== undefined && (obj.avgStatsCalibrated = message.avgStatsCalibrated);
    if (message.autoStyleCriteria) {
      obj.autoStyleCriteria = message.autoStyleCriteria.map((e) =>
        e ? CDOTAMatchMetadata_Team_AutoStyleCriteria.toJSON(e) : undefined
      );
    } else {
      obj.autoStyleCriteria = [];
    }
    if (message.eventData) {
      obj.eventData = message.eventData.map((e) => e ? CDOTAMatchMetadata_Team_EventData.toJSON(e) : undefined);
    } else {
      obj.eventData = [];
    }
    if (message.strangeGemProgress) {
      obj.strangeGemProgress = message.strangeGemProgress.map((e) =>
        e ? CDOTAMatchMetadata_Team_StrangeGemProgress.toJSON(e) : undefined
      );
    } else {
      obj.strangeGemProgress = [];
    }
    message.heroXp !== undefined && (obj.heroXp = Math.round(message.heroXp));
    message.campsStacked !== undefined && (obj.campsStacked = Math.round(message.campsStacked));
    if (message.victoryPrediction) {
      obj.victoryPrediction = message.victoryPrediction.map((e) =>
        e ? CDOTAMatchMetadata_Team_VictoryPrediction.toJSON(e) : undefined
      );
    } else {
      obj.victoryPrediction = [];
    }
    message.laneSelectionFlags !== undefined && (obj.laneSelectionFlags = Math.round(message.laneSelectionFlags));
    message.rampages !== undefined && (obj.rampages = Math.round(message.rampages));
    message.tripleKills !== undefined && (obj.tripleKills = Math.round(message.tripleKills));
    message.aegisSnatched !== undefined && (obj.aegisSnatched = Math.round(message.aegisSnatched));
    message.rapiersPurchased !== undefined && (obj.rapiersPurchased = Math.round(message.rapiersPurchased));
    message.couriersKilled !== undefined && (obj.couriersKilled = Math.round(message.couriersKilled));
    message.netWorthRank !== undefined && (obj.netWorthRank = Math.round(message.netWorthRank));
    message.supportGoldSpent !== undefined && (obj.supportGoldSpent = Math.round(message.supportGoldSpent));
    message.observerWardsPlaced !== undefined && (obj.observerWardsPlaced = Math.round(message.observerWardsPlaced));
    message.sentryWardsPlaced !== undefined && (obj.sentryWardsPlaced = Math.round(message.sentryWardsPlaced));
    message.wardsDewarded !== undefined && (obj.wardsDewarded = Math.round(message.wardsDewarded));
    message.stunDuration !== undefined && (obj.stunDuration = message.stunDuration);
    message.rankMmrBoostType !== undefined &&
      (obj.rankMmrBoostType = eDOTAMMRBoostTypeToJSON(message.rankMmrBoostType));
    if (message.contractProgress) {
      obj.contractProgress = message.contractProgress.map((e) =>
        e ? CDOTAMatchMetadata_Team_Player_ContractProgress.toJSON(e) : undefined
      );
    } else {
      obj.contractProgress = [];
    }
    if (message.guildIds) {
      obj.guildIds = message.guildIds.map((e) => Math.round(e));
    } else {
      obj.guildIds = [];
    }
    if (message.graphHeroDamage) {
      obj.graphHeroDamage = message.graphHeroDamage.map((e) => e);
    } else {
      obj.graphHeroDamage = [];
    }
    message.teamNumber !== undefined && (obj.teamNumber = dotaGcTeamToJSON(message.teamNumber));
    message.teamSlot !== undefined && (obj.teamSlot = Math.round(message.teamSlot));
    message.featuredGamemodeProgress !== undefined && (obj.featuredGamemodeProgress = message.featuredGamemodeProgress
      ? CDOTAMatchMetadata_Team_FeaturedGamemodeProgress.toJSON(message.featuredGamemodeProgress)
      : undefined);
    message.featuredHeroStickerIndex !== undefined &&
      (obj.featuredHeroStickerIndex = Math.round(message.featuredHeroStickerIndex));
    message.featuredHeroStickerQuality !== undefined &&
      (obj.featuredHeroStickerQuality = Math.round(message.featuredHeroStickerQuality));
    if (message.equippedEconItems) {
      obj.equippedEconItems = message.equippedEconItems.map((e) =>
        e ? CDOTAMatchMetadata_EconItem.toJSON(e) : undefined
      );
    } else {
      obj.equippedEconItems = [];
    }
    message.gamePlayerId !== undefined && (obj.gamePlayerId = Math.round(message.gamePlayerId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchMetadata_Team_Player>): CDOTAMatchMetadata_Team_Player {
    return CDOTAMatchMetadata_Team_Player.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMatchMetadata_Team_Player>): CDOTAMatchMetadata_Team_Player {
    const message = createBaseCDOTAMatchMetadata_Team_Player();
    message.abilityUpgrades = object.abilityUpgrades?.map((e) => e) || [];
    message.playerSlot = object.playerSlot ?? 0;
    message.kills = object.kills?.map((e) => CDOTAMatchMetadata_Team_PlayerKill.fromPartial(e)) || [];
    message.items = object.items?.map((e) => CDOTAMatchMetadata_Team_ItemPurchase.fromPartial(e)) || [];
    message.avgKillsX16 = object.avgKillsX16 ?? 0;
    message.avgDeathsX16 = object.avgDeathsX16 ?? 0;
    message.avgAssistsX16 = object.avgAssistsX16 ?? 0;
    message.avgGpmX16 = object.avgGpmX16 ?? 0;
    message.avgXpmX16 = object.avgXpmX16 ?? 0;
    message.bestKillsX16 = object.bestKillsX16 ?? 0;
    message.bestAssistsX16 = object.bestAssistsX16 ?? 0;
    message.bestGpmX16 = object.bestGpmX16 ?? 0;
    message.bestXpmX16 = object.bestXpmX16 ?? 0;
    message.winStreak = object.winStreak ?? 0;
    message.bestWinStreak = object.bestWinStreak ?? 0;
    message.fightScore = object.fightScore ?? 0;
    message.farmScore = object.farmScore ?? 0;
    message.supportScore = object.supportScore ?? 0;
    message.pushScore = object.pushScore ?? 0;
    message.levelUpTimes = object.levelUpTimes?.map((e) => e) || [];
    message.graphNetWorth = object.graphNetWorth?.map((e) => e) || [];
    message.inventorySnapshot =
      object.inventorySnapshot?.map((e) => CDOTAMatchMetadata_Team_InventorySnapshot.fromPartial(e)) || [];
    message.avgStatsCalibrated = object.avgStatsCalibrated ?? false;
    message.autoStyleCriteria =
      object.autoStyleCriteria?.map((e) => CDOTAMatchMetadata_Team_AutoStyleCriteria.fromPartial(e)) || [];
    message.eventData = object.eventData?.map((e) => CDOTAMatchMetadata_Team_EventData.fromPartial(e)) || [];
    message.strangeGemProgress =
      object.strangeGemProgress?.map((e) => CDOTAMatchMetadata_Team_StrangeGemProgress.fromPartial(e)) || [];
    message.heroXp = object.heroXp ?? 0;
    message.campsStacked = object.campsStacked ?? 0;
    message.victoryPrediction =
      object.victoryPrediction?.map((e) => CDOTAMatchMetadata_Team_VictoryPrediction.fromPartial(e)) || [];
    message.laneSelectionFlags = object.laneSelectionFlags ?? 0;
    message.rampages = object.rampages ?? 0;
    message.tripleKills = object.tripleKills ?? 0;
    message.aegisSnatched = object.aegisSnatched ?? 0;
    message.rapiersPurchased = object.rapiersPurchased ?? 0;
    message.couriersKilled = object.couriersKilled ?? 0;
    message.netWorthRank = object.netWorthRank ?? 0;
    message.supportGoldSpent = object.supportGoldSpent ?? 0;
    message.observerWardsPlaced = object.observerWardsPlaced ?? 0;
    message.sentryWardsPlaced = object.sentryWardsPlaced ?? 0;
    message.wardsDewarded = object.wardsDewarded ?? 0;
    message.stunDuration = object.stunDuration ?? 0;
    message.rankMmrBoostType = object.rankMmrBoostType ?? 0;
    message.contractProgress =
      object.contractProgress?.map((e) => CDOTAMatchMetadata_Team_Player_ContractProgress.fromPartial(e)) || [];
    message.guildIds = object.guildIds?.map((e) => e) || [];
    message.graphHeroDamage = object.graphHeroDamage?.map((e) => e) || [];
    message.teamNumber = object.teamNumber ?? 0;
    message.teamSlot = object.teamSlot ?? 0;
    message.featuredGamemodeProgress =
      (object.featuredGamemodeProgress !== undefined && object.featuredGamemodeProgress !== null)
        ? CDOTAMatchMetadata_Team_FeaturedGamemodeProgress.fromPartial(object.featuredGamemodeProgress)
        : undefined;
    message.featuredHeroStickerIndex = object.featuredHeroStickerIndex ?? 0;
    message.featuredHeroStickerQuality = object.featuredHeroStickerQuality ?? 0;
    message.equippedEconItems = object.equippedEconItems?.map((e) => CDOTAMatchMetadata_EconItem.fromPartial(e)) || [];
    message.gamePlayerId = object.gamePlayerId ?? 0;
    return message;
  },
};

function createBaseCDOTAMatchMetadata_Team_Player_ContractProgress(): CDOTAMatchMetadata_Team_Player_ContractProgress {
  return {
    guildId: 0,
    eventId: 0,
    challengeInstanceId: 0,
    challengeParameter: 0,
    contractStars: 0,
    contractSlot: 0,
    completed: false,
  };
}

export const CDOTAMatchMetadata_Team_Player_ContractProgress = {
  encode(
    message: CDOTAMatchMetadata_Team_Player_ContractProgress,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).uint32(message.eventId);
    }
    if (message.challengeInstanceId !== 0) {
      writer.uint32(24).uint32(message.challengeInstanceId);
    }
    if (message.challengeParameter !== 0) {
      writer.uint32(32).uint32(message.challengeParameter);
    }
    if (message.contractStars !== 0) {
      writer.uint32(40).uint32(message.contractStars);
    }
    if (message.contractSlot !== 0) {
      writer.uint32(48).uint32(message.contractSlot);
    }
    if (message.completed === true) {
      writer.uint32(56).bool(message.completed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_Team_Player_ContractProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_Team_Player_ContractProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
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

          message.contractStars = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.contractSlot = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
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

  fromJSON(object: any): CDOTAMatchMetadata_Team_Player_ContractProgress {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      eventId: isSet(object.eventId) ? Number(object.eventId) : 0,
      challengeInstanceId: isSet(object.challengeInstanceId) ? Number(object.challengeInstanceId) : 0,
      challengeParameter: isSet(object.challengeParameter) ? Number(object.challengeParameter) : 0,
      contractStars: isSet(object.contractStars) ? Number(object.contractStars) : 0,
      contractSlot: isSet(object.contractSlot) ? Number(object.contractSlot) : 0,
      completed: isSet(object.completed) ? Boolean(object.completed) : false,
    };
  },

  toJSON(message: CDOTAMatchMetadata_Team_Player_ContractProgress): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.eventId !== undefined && (obj.eventId = Math.round(message.eventId));
    message.challengeInstanceId !== undefined && (obj.challengeInstanceId = Math.round(message.challengeInstanceId));
    message.challengeParameter !== undefined && (obj.challengeParameter = Math.round(message.challengeParameter));
    message.contractStars !== undefined && (obj.contractStars = Math.round(message.contractStars));
    message.contractSlot !== undefined && (obj.contractSlot = Math.round(message.contractSlot));
    message.completed !== undefined && (obj.completed = message.completed);
    return obj;
  },

  create(
    base?: DeepPartial<CDOTAMatchMetadata_Team_Player_ContractProgress>,
  ): CDOTAMatchMetadata_Team_Player_ContractProgress {
    return CDOTAMatchMetadata_Team_Player_ContractProgress.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchMetadata_Team_Player_ContractProgress>,
  ): CDOTAMatchMetadata_Team_Player_ContractProgress {
    const message = createBaseCDOTAMatchMetadata_Team_Player_ContractProgress();
    message.guildId = object.guildId ?? 0;
    message.eventId = object.eventId ?? 0;
    message.challengeInstanceId = object.challengeInstanceId ?? 0;
    message.challengeParameter = object.challengeParameter ?? 0;
    message.contractStars = object.contractStars ?? 0;
    message.contractSlot = object.contractSlot ?? 0;
    message.completed = object.completed ?? false;
    return message;
  },
};

function createBaseCDOTAMatchMetadata_GuildChallengeProgress(): CDOTAMatchMetadata_GuildChallengeProgress {
  return {
    guildId: 0,
    eventId: 0,
    challengeInstanceId: 0,
    challengeParameter: 0,
    challengeTimestamp: 0,
    challengeProgressAtStart: 0,
    challengeProgressAccumulated: 0,
    individualProgress: [],
  };
}

export const CDOTAMatchMetadata_GuildChallengeProgress = {
  encode(message: CDOTAMatchMetadata_GuildChallengeProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guildId !== 0) {
      writer.uint32(8).uint32(message.guildId);
    }
    if (message.eventId !== 0) {
      writer.uint32(16).int32(message.eventId);
    }
    if (message.challengeInstanceId !== 0) {
      writer.uint32(24).uint32(message.challengeInstanceId);
    }
    if (message.challengeParameter !== 0) {
      writer.uint32(32).uint32(message.challengeParameter);
    }
    if (message.challengeTimestamp !== 0) {
      writer.uint32(40).uint32(message.challengeTimestamp);
    }
    if (message.challengeProgressAtStart !== 0) {
      writer.uint32(48).uint32(message.challengeProgressAtStart);
    }
    if (message.challengeProgressAccumulated !== 0) {
      writer.uint32(56).uint32(message.challengeProgressAccumulated);
    }
    for (const v of message.individualProgress) {
      CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_GuildChallengeProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_GuildChallengeProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.guildId = reader.uint32();
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

          message.challengeTimestamp = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.challengeProgressAtStart = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.challengeProgressAccumulated = reader.uint32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.individualProgress.push(
            CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress.decode(reader, reader.uint32()),
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

  fromJSON(object: any): CDOTAMatchMetadata_GuildChallengeProgress {
    return {
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
      challengeInstanceId: isSet(object.challengeInstanceId) ? Number(object.challengeInstanceId) : 0,
      challengeParameter: isSet(object.challengeParameter) ? Number(object.challengeParameter) : 0,
      challengeTimestamp: isSet(object.challengeTimestamp) ? Number(object.challengeTimestamp) : 0,
      challengeProgressAtStart: isSet(object.challengeProgressAtStart) ? Number(object.challengeProgressAtStart) : 0,
      challengeProgressAccumulated: isSet(object.challengeProgressAccumulated)
        ? Number(object.challengeProgressAccumulated)
        : 0,
      individualProgress: Array.isArray(object?.individualProgress)
        ? object.individualProgress.map((e: any) =>
          CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CDOTAMatchMetadata_GuildChallengeProgress): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = Math.round(message.guildId));
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    message.challengeInstanceId !== undefined && (obj.challengeInstanceId = Math.round(message.challengeInstanceId));
    message.challengeParameter !== undefined && (obj.challengeParameter = Math.round(message.challengeParameter));
    message.challengeTimestamp !== undefined && (obj.challengeTimestamp = Math.round(message.challengeTimestamp));
    message.challengeProgressAtStart !== undefined &&
      (obj.challengeProgressAtStart = Math.round(message.challengeProgressAtStart));
    message.challengeProgressAccumulated !== undefined &&
      (obj.challengeProgressAccumulated = Math.round(message.challengeProgressAccumulated));
    if (message.individualProgress) {
      obj.individualProgress = message.individualProgress.map((e) =>
        e ? CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress.toJSON(e) : undefined
      );
    } else {
      obj.individualProgress = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchMetadata_GuildChallengeProgress>): CDOTAMatchMetadata_GuildChallengeProgress {
    return CDOTAMatchMetadata_GuildChallengeProgress.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchMetadata_GuildChallengeProgress>,
  ): CDOTAMatchMetadata_GuildChallengeProgress {
    const message = createBaseCDOTAMatchMetadata_GuildChallengeProgress();
    message.guildId = object.guildId ?? 0;
    message.eventId = object.eventId ?? 0;
    message.challengeInstanceId = object.challengeInstanceId ?? 0;
    message.challengeParameter = object.challengeParameter ?? 0;
    message.challengeTimestamp = object.challengeTimestamp ?? 0;
    message.challengeProgressAtStart = object.challengeProgressAtStart ?? 0;
    message.challengeProgressAccumulated = object.challengeProgressAccumulated ?? 0;
    message.individualProgress =
      object.individualProgress?.map((e) =>
        CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress(): CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress {
  return { progress: 0, playerSlot: 0 };
}

export const CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress = {
  encode(
    message: CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.progress !== 0) {
      writer.uint32(16).uint32(message.progress);
    }
    if (message.playerSlot !== 0) {
      writer.uint32(24).uint32(message.playerSlot);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.progress = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.playerSlot = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress {
    return {
      progress: isSet(object.progress) ? Number(object.progress) : 0,
      playerSlot: isSet(object.playerSlot) ? Number(object.playerSlot) : 0,
    };
  },

  toJSON(message: CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress): unknown {
    const obj: any = {};
    message.progress !== undefined && (obj.progress = Math.round(message.progress));
    message.playerSlot !== undefined && (obj.playerSlot = Math.round(message.playerSlot));
    return obj;
  },

  create(
    base?: DeepPartial<CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress>,
  ): CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress {
    return CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress>,
  ): CDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress {
    const message = createBaseCDOTAMatchMetadata_GuildChallengeProgress_IndividualProgress();
    message.progress = object.progress ?? 0;
    message.playerSlot = object.playerSlot ?? 0;
    return message;
  },
};

function createBaseCDOTAMatchMetadata_Tip(): CDOTAMatchMetadata_Tip {
  return { sourcePlayerSlot: 0, targetPlayerSlot: 0, tipAmount: 0, eventId: 0 };
}

export const CDOTAMatchMetadata_Tip = {
  encode(message: CDOTAMatchMetadata_Tip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourcePlayerSlot !== 0) {
      writer.uint32(8).uint32(message.sourcePlayerSlot);
    }
    if (message.targetPlayerSlot !== 0) {
      writer.uint32(16).uint32(message.targetPlayerSlot);
    }
    if (message.tipAmount !== 0) {
      writer.uint32(24).uint32(message.tipAmount);
    }
    if (message.eventId !== 0) {
      writer.uint32(32).int32(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchMetadata_Tip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchMetadata_Tip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sourcePlayerSlot = reader.uint32();
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

  fromJSON(object: any): CDOTAMatchMetadata_Tip {
    return {
      sourcePlayerSlot: isSet(object.sourcePlayerSlot) ? Number(object.sourcePlayerSlot) : 0,
      targetPlayerSlot: isSet(object.targetPlayerSlot) ? Number(object.targetPlayerSlot) : 0,
      tipAmount: isSet(object.tipAmount) ? Number(object.tipAmount) : 0,
      eventId: isSet(object.eventId) ? eEventFromJSON(object.eventId) : 0,
    };
  },

  toJSON(message: CDOTAMatchMetadata_Tip): unknown {
    const obj: any = {};
    message.sourcePlayerSlot !== undefined && (obj.sourcePlayerSlot = Math.round(message.sourcePlayerSlot));
    message.targetPlayerSlot !== undefined && (obj.targetPlayerSlot = Math.round(message.targetPlayerSlot));
    message.tipAmount !== undefined && (obj.tipAmount = Math.round(message.tipAmount));
    message.eventId !== undefined && (obj.eventId = eEventToJSON(message.eventId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchMetadata_Tip>): CDOTAMatchMetadata_Tip {
    return CDOTAMatchMetadata_Tip.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMatchMetadata_Tip>): CDOTAMatchMetadata_Tip {
    const message = createBaseCDOTAMatchMetadata_Tip();
    message.sourcePlayerSlot = object.sourcePlayerSlot ?? 0;
    message.targetPlayerSlot = object.targetPlayerSlot ?? 0;
    message.tipAmount = object.tipAmount ?? 0;
    message.eventId = object.eventId ?? 0;
    return message;
  },
};

function createBaseCDOTAMatchPrivateMetadata(): CDOTAMatchPrivateMetadata {
  return { teams: [], graphWinProbability: [], stringNames: [] };
}

export const CDOTAMatchPrivateMetadata = {
  encode(message: CDOTAMatchPrivateMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.teams) {
      CDOTAMatchPrivateMetadata_Team.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.graphWinProbability) {
      writer.float(v);
    }
    writer.ldelim();
    for (const v of message.stringNames) {
      CDOTAMatchPrivateMetadata_StringName.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchPrivateMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchPrivateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.teams.push(CDOTAMatchPrivateMetadata_Team.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag == 21) {
            message.graphWinProbability.push(reader.float());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.graphWinProbability.push(reader.float());
            }

            continue;
          }

          break;
        case 3:
          if (tag != 26) {
            break;
          }

          message.stringNames.push(CDOTAMatchPrivateMetadata_StringName.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchPrivateMetadata {
    return {
      teams: Array.isArray(object?.teams)
        ? object.teams.map((e: any) => CDOTAMatchPrivateMetadata_Team.fromJSON(e))
        : [],
      graphWinProbability: Array.isArray(object?.graphWinProbability)
        ? object.graphWinProbability.map((e: any) => Number(e))
        : [],
      stringNames: Array.isArray(object?.stringNames)
        ? object.stringNames.map((e: any) => CDOTAMatchPrivateMetadata_StringName.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAMatchPrivateMetadata): unknown {
    const obj: any = {};
    if (message.teams) {
      obj.teams = message.teams.map((e) => e ? CDOTAMatchPrivateMetadata_Team.toJSON(e) : undefined);
    } else {
      obj.teams = [];
    }
    if (message.graphWinProbability) {
      obj.graphWinProbability = message.graphWinProbability.map((e) => e);
    } else {
      obj.graphWinProbability = [];
    }
    if (message.stringNames) {
      obj.stringNames = message.stringNames.map((e) => e ? CDOTAMatchPrivateMetadata_StringName.toJSON(e) : undefined);
    } else {
      obj.stringNames = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchPrivateMetadata>): CDOTAMatchPrivateMetadata {
    return CDOTAMatchPrivateMetadata.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMatchPrivateMetadata>): CDOTAMatchPrivateMetadata {
    const message = createBaseCDOTAMatchPrivateMetadata();
    message.teams = object.teams?.map((e) => CDOTAMatchPrivateMetadata_Team.fromPartial(e)) || [];
    message.graphWinProbability = object.graphWinProbability?.map((e) => e) || [];
    message.stringNames = object.stringNames?.map((e) => CDOTAMatchPrivateMetadata_StringName.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCDOTAMatchPrivateMetadata_StringName(): CDOTAMatchPrivateMetadata_StringName {
  return { id: 0, name: "" };
}

export const CDOTAMatchPrivateMetadata_StringName = {
  encode(message: CDOTAMatchPrivateMetadata_StringName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchPrivateMetadata_StringName {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchPrivateMetadata_StringName();
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
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchPrivateMetadata_StringName {
    return { id: isSet(object.id) ? Number(object.id) : 0, name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: CDOTAMatchPrivateMetadata_StringName): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchPrivateMetadata_StringName>): CDOTAMatchPrivateMetadata_StringName {
    return CDOTAMatchPrivateMetadata_StringName.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMatchPrivateMetadata_StringName>): CDOTAMatchPrivateMetadata_StringName {
    const message = createBaseCDOTAMatchPrivateMetadata_StringName();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCDOTAMatchPrivateMetadata_Team(): CDOTAMatchPrivateMetadata_Team {
  return { dotaTeam: 0, players: [], buildings: [] };
}

export const CDOTAMatchPrivateMetadata_Team = {
  encode(message: CDOTAMatchPrivateMetadata_Team, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dotaTeam !== 0) {
      writer.uint32(8).uint32(message.dotaTeam);
    }
    for (const v of message.players) {
      CDOTAMatchPrivateMetadata_Team_Player.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.buildings) {
      CDOTAMatchPrivateMetadata_Team_Building.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchPrivateMetadata_Team {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchPrivateMetadata_Team();
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
          if (tag != 18) {
            break;
          }

          message.players.push(CDOTAMatchPrivateMetadata_Team_Player.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.buildings.push(CDOTAMatchPrivateMetadata_Team_Building.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchPrivateMetadata_Team {
    return {
      dotaTeam: isSet(object.dotaTeam) ? Number(object.dotaTeam) : 0,
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CDOTAMatchPrivateMetadata_Team_Player.fromJSON(e))
        : [],
      buildings: Array.isArray(object?.buildings)
        ? object.buildings.map((e: any) => CDOTAMatchPrivateMetadata_Team_Building.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDOTAMatchPrivateMetadata_Team): unknown {
    const obj: any = {};
    message.dotaTeam !== undefined && (obj.dotaTeam = Math.round(message.dotaTeam));
    if (message.players) {
      obj.players = message.players.map((e) => e ? CDOTAMatchPrivateMetadata_Team_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    if (message.buildings) {
      obj.buildings = message.buildings.map((e) => e ? CDOTAMatchPrivateMetadata_Team_Building.toJSON(e) : undefined);
    } else {
      obj.buildings = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchPrivateMetadata_Team>): CDOTAMatchPrivateMetadata_Team {
    return CDOTAMatchPrivateMetadata_Team.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMatchPrivateMetadata_Team>): CDOTAMatchPrivateMetadata_Team {
    const message = createBaseCDOTAMatchPrivateMetadata_Team();
    message.dotaTeam = object.dotaTeam ?? 0;
    message.players = object.players?.map((e) => CDOTAMatchPrivateMetadata_Team_Player.fromPartial(e)) || [];
    message.buildings = object.buildings?.map((e) => CDOTAMatchPrivateMetadata_Team_Building.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCDOTAMatchPrivateMetadata_Team_Player(): CDOTAMatchPrivateMetadata_Team_Player {
  return {
    playerSlot: 0,
    positionStream: Buffer.alloc(0),
    combatSegments: [],
    damageUnitNames: [],
    buffRecords: [],
    graphKills: [],
    graphDeaths: [],
    graphAssists: [],
    graphLasthits: [],
    graphDenies: [],
    goldReceived: undefined,
    xpReceived: undefined,
    teamNumber: 0,
    teamSlot: 0,
  };
}

export const CDOTAMatchPrivateMetadata_Team_Player = {
  encode(message: CDOTAMatchPrivateMetadata_Team_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerSlot !== 0) {
      writer.uint32(16).uint32(message.playerSlot);
    }
    if (message.positionStream.length !== 0) {
      writer.uint32(26).bytes(message.positionStream);
    }
    for (const v of message.combatSegments) {
      CDOTAMatchPrivateMetadata_Team_Player_CombatSegment.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.damageUnitNames) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.buffRecords) {
      CDOTAMatchPrivateMetadata_Team_Player_BuffRecord.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).fork();
    for (const v of message.graphKills) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(66).fork();
    for (const v of message.graphDeaths) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(74).fork();
    for (const v of message.graphAssists) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(82).fork();
    for (const v of message.graphLasthits) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(90).fork();
    for (const v of message.graphDenies) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.goldReceived !== undefined) {
      CDOTAMatchPrivateMetadata_Team_Player_GoldReceived.encode(message.goldReceived, writer.uint32(98).fork())
        .ldelim();
    }
    if (message.xpReceived !== undefined) {
      CDOTAMatchPrivateMetadata_Team_Player_XPReceived.encode(message.xpReceived, writer.uint32(106).fork()).ldelim();
    }
    if (message.teamNumber !== 0) {
      writer.uint32(112).int32(message.teamNumber);
    }
    if (message.teamSlot !== 0) {
      writer.uint32(120).uint32(message.teamSlot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchPrivateMetadata_Team_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.playerSlot = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.positionStream = reader.bytes() as Buffer;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.combatSegments.push(
            CDOTAMatchPrivateMetadata_Team_Player_CombatSegment.decode(reader, reader.uint32()),
          );
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.damageUnitNames.push(reader.string());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.buffRecords.push(CDOTAMatchPrivateMetadata_Team_Player_BuffRecord.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag == 61) {
            message.graphKills.push(reader.float());
            continue;
          }

          if (tag == 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.graphKills.push(reader.float());
            }

            continue;
          }

          break;
        case 8:
          if (tag == 69) {
            message.graphDeaths.push(reader.float());
            continue;
          }

          if (tag == 66) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.graphDeaths.push(reader.float());
            }

            continue;
          }

          break;
        case 9:
          if (tag == 77) {
            message.graphAssists.push(reader.float());
            continue;
          }

          if (tag == 74) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.graphAssists.push(reader.float());
            }

            continue;
          }

          break;
        case 10:
          if (tag == 85) {
            message.graphLasthits.push(reader.float());
            continue;
          }

          if (tag == 82) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.graphLasthits.push(reader.float());
            }

            continue;
          }

          break;
        case 11:
          if (tag == 93) {
            message.graphDenies.push(reader.float());
            continue;
          }

          if (tag == 90) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.graphDenies.push(reader.float());
            }

            continue;
          }

          break;
        case 12:
          if (tag != 98) {
            break;
          }

          message.goldReceived = CDOTAMatchPrivateMetadata_Team_Player_GoldReceived.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.xpReceived = CDOTAMatchPrivateMetadata_Team_Player_XPReceived.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.teamNumber = reader.int32() as any;
          continue;
        case 15:
          if (tag != 120) {
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

  fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player {
    return {
      playerSlot: isSet(object.playerSlot) ? Number(object.playerSlot) : 0,
      positionStream: isSet(object.positionStream)
        ? Buffer.from(bytesFromBase64(object.positionStream))
        : Buffer.alloc(0),
      combatSegments: Array.isArray(object?.combatSegments)
        ? object.combatSegments.map((e: any) => CDOTAMatchPrivateMetadata_Team_Player_CombatSegment.fromJSON(e))
        : [],
      damageUnitNames: Array.isArray(object?.damageUnitNames) ? object.damageUnitNames.map((e: any) => String(e)) : [],
      buffRecords: Array.isArray(object?.buffRecords)
        ? object.buffRecords.map((e: any) => CDOTAMatchPrivateMetadata_Team_Player_BuffRecord.fromJSON(e))
        : [],
      graphKills: Array.isArray(object?.graphKills) ? object.graphKills.map((e: any) => Number(e)) : [],
      graphDeaths: Array.isArray(object?.graphDeaths) ? object.graphDeaths.map((e: any) => Number(e)) : [],
      graphAssists: Array.isArray(object?.graphAssists) ? object.graphAssists.map((e: any) => Number(e)) : [],
      graphLasthits: Array.isArray(object?.graphLasthits) ? object.graphLasthits.map((e: any) => Number(e)) : [],
      graphDenies: Array.isArray(object?.graphDenies) ? object.graphDenies.map((e: any) => Number(e)) : [],
      goldReceived: isSet(object.goldReceived)
        ? CDOTAMatchPrivateMetadata_Team_Player_GoldReceived.fromJSON(object.goldReceived)
        : undefined,
      xpReceived: isSet(object.xpReceived)
        ? CDOTAMatchPrivateMetadata_Team_Player_XPReceived.fromJSON(object.xpReceived)
        : undefined,
      teamNumber: isSet(object.teamNumber) ? dotaGcTeamFromJSON(object.teamNumber) : 0,
      teamSlot: isSet(object.teamSlot) ? Number(object.teamSlot) : 0,
    };
  },

  toJSON(message: CDOTAMatchPrivateMetadata_Team_Player): unknown {
    const obj: any = {};
    message.playerSlot !== undefined && (obj.playerSlot = Math.round(message.playerSlot));
    message.positionStream !== undefined &&
      (obj.positionStream = base64FromBytes(
        message.positionStream !== undefined ? message.positionStream : Buffer.alloc(0),
      ));
    if (message.combatSegments) {
      obj.combatSegments = message.combatSegments.map((e) =>
        e ? CDOTAMatchPrivateMetadata_Team_Player_CombatSegment.toJSON(e) : undefined
      );
    } else {
      obj.combatSegments = [];
    }
    if (message.damageUnitNames) {
      obj.damageUnitNames = message.damageUnitNames.map((e) => e);
    } else {
      obj.damageUnitNames = [];
    }
    if (message.buffRecords) {
      obj.buffRecords = message.buffRecords.map((e) =>
        e ? CDOTAMatchPrivateMetadata_Team_Player_BuffRecord.toJSON(e) : undefined
      );
    } else {
      obj.buffRecords = [];
    }
    if (message.graphKills) {
      obj.graphKills = message.graphKills.map((e) => e);
    } else {
      obj.graphKills = [];
    }
    if (message.graphDeaths) {
      obj.graphDeaths = message.graphDeaths.map((e) => e);
    } else {
      obj.graphDeaths = [];
    }
    if (message.graphAssists) {
      obj.graphAssists = message.graphAssists.map((e) => e);
    } else {
      obj.graphAssists = [];
    }
    if (message.graphLasthits) {
      obj.graphLasthits = message.graphLasthits.map((e) => e);
    } else {
      obj.graphLasthits = [];
    }
    if (message.graphDenies) {
      obj.graphDenies = message.graphDenies.map((e) => e);
    } else {
      obj.graphDenies = [];
    }
    message.goldReceived !== undefined && (obj.goldReceived = message.goldReceived
      ? CDOTAMatchPrivateMetadata_Team_Player_GoldReceived.toJSON(message.goldReceived)
      : undefined);
    message.xpReceived !== undefined && (obj.xpReceived = message.xpReceived
      ? CDOTAMatchPrivateMetadata_Team_Player_XPReceived.toJSON(message.xpReceived)
      : undefined);
    message.teamNumber !== undefined && (obj.teamNumber = dotaGcTeamToJSON(message.teamNumber));
    message.teamSlot !== undefined && (obj.teamSlot = Math.round(message.teamSlot));
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player>): CDOTAMatchPrivateMetadata_Team_Player {
    return CDOTAMatchPrivateMetadata_Team_Player.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player>): CDOTAMatchPrivateMetadata_Team_Player {
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player();
    message.playerSlot = object.playerSlot ?? 0;
    message.positionStream = object.positionStream ?? Buffer.alloc(0);
    message.combatSegments =
      object.combatSegments?.map((e) => CDOTAMatchPrivateMetadata_Team_Player_CombatSegment.fromPartial(e)) || [];
    message.damageUnitNames = object.damageUnitNames?.map((e) => e) || [];
    message.buffRecords =
      object.buffRecords?.map((e) => CDOTAMatchPrivateMetadata_Team_Player_BuffRecord.fromPartial(e)) || [];
    message.graphKills = object.graphKills?.map((e) => e) || [];
    message.graphDeaths = object.graphDeaths?.map((e) => e) || [];
    message.graphAssists = object.graphAssists?.map((e) => e) || [];
    message.graphLasthits = object.graphLasthits?.map((e) => e) || [];
    message.graphDenies = object.graphDenies?.map((e) => e) || [];
    message.goldReceived = (object.goldReceived !== undefined && object.goldReceived !== null)
      ? CDOTAMatchPrivateMetadata_Team_Player_GoldReceived.fromPartial(object.goldReceived)
      : undefined;
    message.xpReceived = (object.xpReceived !== undefined && object.xpReceived !== null)
      ? CDOTAMatchPrivateMetadata_Team_Player_XPReceived.fromPartial(object.xpReceived)
      : undefined;
    message.teamNumber = object.teamNumber ?? 0;
    message.teamSlot = object.teamSlot ?? 0;
    return message;
  },
};

function createBaseCDOTAMatchPrivateMetadata_Team_Player_CombatSegment(): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment {
  return { gameTime: 0, damageByAbility: [], healingByAbility: [] };
}

export const CDOTAMatchPrivateMetadata_Team_Player_CombatSegment = {
  encode(
    message: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.gameTime !== 0) {
      writer.uint32(8).int32(message.gameTime);
    }
    for (const v of message.damageByAbility) {
      CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.healingByAbility) {
      CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility.encode(v!, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_CombatSegment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.gameTime = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.damageByAbility.push(
            CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.healingByAbility.push(
            CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility.decode(reader, reader.uint32()),
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

  fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment {
    return {
      gameTime: isSet(object.gameTime) ? Number(object.gameTime) : 0,
      damageByAbility: Array.isArray(object?.damageByAbility)
        ? object.damageByAbility.map((e: any) =>
          CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility.fromJSON(e)
        )
        : [],
      healingByAbility: Array.isArray(object?.healingByAbility)
        ? object.healingByAbility.map((e: any) =>
          CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment): unknown {
    const obj: any = {};
    message.gameTime !== undefined && (obj.gameTime = Math.round(message.gameTime));
    if (message.damageByAbility) {
      obj.damageByAbility = message.damageByAbility.map((e) =>
        e ? CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility.toJSON(e) : undefined
      );
    } else {
      obj.damageByAbility = [];
    }
    if (message.healingByAbility) {
      obj.healingByAbility = message.healingByAbility.map((e) =>
        e ? CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility.toJSON(e) : undefined
      );
    } else {
      obj.healingByAbility = [];
    }
    return obj;
  },

  create(
    base?: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_CombatSegment>,
  ): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment {
    return CDOTAMatchPrivateMetadata_Team_Player_CombatSegment.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_CombatSegment>,
  ): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment {
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_CombatSegment();
    message.gameTime = object.gameTime ?? 0;
    message.damageByAbility =
      object.damageByAbility?.map((e) =>
        CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility.fromPartial(e)
      ) || [];
    message.healingByAbility =
      object.healingByAbility?.map((e) =>
        CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility(): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility {
  return { sourceUnitIndex: 0, abilityId: 0, byHeroTargets: [] };
}

export const CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility = {
  encode(
    message: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sourceUnitIndex !== 0) {
      writer.uint32(24).uint32(message.sourceUnitIndex);
    }
    if (message.abilityId !== 0) {
      writer.uint32(8).int32(message.abilityId);
    }
    for (const v of message.byHeroTargets) {
      CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag != 24) {
            break;
          }

          message.sourceUnitIndex = reader.uint32();
          continue;
        case 1:
          if (tag != 8) {
            break;
          }

          message.abilityId = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.byHeroTargets.push(
            CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget.decode(
              reader,
              reader.uint32(),
            ),
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

  fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility {
    return {
      sourceUnitIndex: isSet(object.sourceUnitIndex) ? Number(object.sourceUnitIndex) : 0,
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      byHeroTargets: Array.isArray(object?.byHeroTargets)
        ? object.byHeroTargets.map((e: any) =>
          CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility): unknown {
    const obj: any = {};
    message.sourceUnitIndex !== undefined && (obj.sourceUnitIndex = Math.round(message.sourceUnitIndex));
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    if (message.byHeroTargets) {
      obj.byHeroTargets = message.byHeroTargets.map((e) =>
        e ? CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget.toJSON(e) : undefined
      );
    } else {
      obj.byHeroTargets = [];
    }
    return obj;
  },

  create(
    base?: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility>,
  ): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility {
    return CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility>,
  ): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility {
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility();
    message.sourceUnitIndex = object.sourceUnitIndex ?? 0;
    message.abilityId = object.abilityId ?? 0;
    message.byHeroTargets =
      object.byHeroTargets?.map((e) =>
        CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget(): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget {
  return { heroId: 0, damage: 0 };
}

export const CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget = {
  encode(
    message: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.damage !== 0) {
      writer.uint32(16).uint32(message.damage);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget();
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

          message.damage = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      damage: isSet(object.damage) ? Number(object.damage) : 0,
    };
  },

  toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.damage !== undefined && (obj.damage = Math.round(message.damage));
    return obj;
  },

  create(
    base?: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget>,
  ): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget {
    return CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget>,
  ): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget {
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_CombatSegment_DamageByAbility_ByHeroTarget();
    message.heroId = object.heroId ?? 0;
    message.damage = object.damage ?? 0;
    return message;
  },
};

function createBaseCDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility(): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility {
  return { sourceUnitIndex: 0, abilityId: 0, byHeroTargets: [] };
}

export const CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility = {
  encode(
    message: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sourceUnitIndex !== 0) {
      writer.uint32(24).uint32(message.sourceUnitIndex);
    }
    if (message.abilityId !== 0) {
      writer.uint32(8).int32(message.abilityId);
    }
    for (const v of message.byHeroTargets) {
      CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag != 24) {
            break;
          }

          message.sourceUnitIndex = reader.uint32();
          continue;
        case 1:
          if (tag != 8) {
            break;
          }

          message.abilityId = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.byHeroTargets.push(
            CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget.decode(
              reader,
              reader.uint32(),
            ),
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

  fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility {
    return {
      sourceUnitIndex: isSet(object.sourceUnitIndex) ? Number(object.sourceUnitIndex) : 0,
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      byHeroTargets: Array.isArray(object?.byHeroTargets)
        ? object.byHeroTargets.map((e: any) =>
          CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility): unknown {
    const obj: any = {};
    message.sourceUnitIndex !== undefined && (obj.sourceUnitIndex = Math.round(message.sourceUnitIndex));
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    if (message.byHeroTargets) {
      obj.byHeroTargets = message.byHeroTargets.map((e) =>
        e ? CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget.toJSON(e) : undefined
      );
    } else {
      obj.byHeroTargets = [];
    }
    return obj;
  },

  create(
    base?: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility>,
  ): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility {
    return CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility>,
  ): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility {
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility();
    message.sourceUnitIndex = object.sourceUnitIndex ?? 0;
    message.abilityId = object.abilityId ?? 0;
    message.byHeroTargets =
      object.byHeroTargets?.map((e) =>
        CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget(): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget {
  return { heroId: 0, healing: 0 };
}

export const CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget = {
  encode(
    message: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.healing !== 0) {
      writer.uint32(16).uint32(message.healing);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget();
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

          message.healing = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      healing: isSet(object.healing) ? Number(object.healing) : 0,
    };
  },

  toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.healing !== undefined && (obj.healing = Math.round(message.healing));
    return obj;
  },

  create(
    base?: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget>,
  ): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget {
    return CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget>,
  ): CDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget {
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_CombatSegment_HealingByAbility_ByHeroTarget();
    message.heroId = object.heroId ?? 0;
    message.healing = object.healing ?? 0;
    return message;
  },
};

function createBaseCDOTAMatchPrivateMetadata_Team_Player_BuffRecord(): CDOTAMatchPrivateMetadata_Team_Player_BuffRecord {
  return { buffAbilityId: 0, buffModifierName: "", byHeroTargets: [] };
}

export const CDOTAMatchPrivateMetadata_Team_Player_BuffRecord = {
  encode(
    message: CDOTAMatchPrivateMetadata_Team_Player_BuffRecord,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.buffAbilityId !== 0) {
      writer.uint32(8).int32(message.buffAbilityId);
    }
    if (message.buffModifierName !== "") {
      writer.uint32(26).string(message.buffModifierName);
    }
    for (const v of message.byHeroTargets) {
      CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchPrivateMetadata_Team_Player_BuffRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_BuffRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.buffAbilityId = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.buffModifierName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.byHeroTargets.push(
            CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget.decode(reader, reader.uint32()),
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

  fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_BuffRecord {
    return {
      buffAbilityId: isSet(object.buffAbilityId) ? Number(object.buffAbilityId) : 0,
      buffModifierName: isSet(object.buffModifierName) ? String(object.buffModifierName) : "",
      byHeroTargets: Array.isArray(object?.byHeroTargets)
        ? object.byHeroTargets.map((e: any) =>
          CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_BuffRecord): unknown {
    const obj: any = {};
    message.buffAbilityId !== undefined && (obj.buffAbilityId = Math.round(message.buffAbilityId));
    message.buffModifierName !== undefined && (obj.buffModifierName = message.buffModifierName);
    if (message.byHeroTargets) {
      obj.byHeroTargets = message.byHeroTargets.map((e) =>
        e ? CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget.toJSON(e) : undefined
      );
    } else {
      obj.byHeroTargets = [];
    }
    return obj;
  },

  create(
    base?: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_BuffRecord>,
  ): CDOTAMatchPrivateMetadata_Team_Player_BuffRecord {
    return CDOTAMatchPrivateMetadata_Team_Player_BuffRecord.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_BuffRecord>,
  ): CDOTAMatchPrivateMetadata_Team_Player_BuffRecord {
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_BuffRecord();
    message.buffAbilityId = object.buffAbilityId ?? 0;
    message.buffModifierName = object.buffModifierName ?? "";
    message.byHeroTargets =
      object.byHeroTargets?.map((e) => CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseCDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget(): CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget {
  return { heroId: 0, elapsedDuration: 0, isHidden: false };
}

export const CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget = {
  encode(
    message: CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.heroId !== 0) {
      writer.uint32(8).uint32(message.heroId);
    }
    if (message.elapsedDuration !== 0) {
      writer.uint32(21).float(message.elapsedDuration);
    }
    if (message.isHidden === true) {
      writer.uint32(24).bool(message.isHidden);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget();
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

          message.elapsedDuration = reader.float();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isHidden = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget {
    return {
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      elapsedDuration: isSet(object.elapsedDuration) ? Number(object.elapsedDuration) : 0,
      isHidden: isSet(object.isHidden) ? Boolean(object.isHidden) : false,
    };
  },

  toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget): unknown {
    const obj: any = {};
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.elapsedDuration !== undefined && (obj.elapsedDuration = message.elapsedDuration);
    message.isHidden !== undefined && (obj.isHidden = message.isHidden);
    return obj;
  },

  create(
    base?: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget>,
  ): CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget {
    return CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget>,
  ): CDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget {
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_BuffRecord_ByHeroTarget();
    message.heroId = object.heroId ?? 0;
    message.elapsedDuration = object.elapsedDuration ?? 0;
    message.isHidden = object.isHidden ?? false;
    return message;
  },
};

function createBaseCDOTAMatchPrivateMetadata_Team_Player_GoldReceived(): CDOTAMatchPrivateMetadata_Team_Player_GoldReceived {
  return { creep: 0, heroes: 0, bountyRunes: 0, passive: 0, buildings: 0, abilities: 0, wards: 0, other: 0 };
}

export const CDOTAMatchPrivateMetadata_Team_Player_GoldReceived = {
  encode(
    message: CDOTAMatchPrivateMetadata_Team_Player_GoldReceived,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creep !== 0) {
      writer.uint32(8).uint32(message.creep);
    }
    if (message.heroes !== 0) {
      writer.uint32(16).uint32(message.heroes);
    }
    if (message.bountyRunes !== 0) {
      writer.uint32(24).uint32(message.bountyRunes);
    }
    if (message.passive !== 0) {
      writer.uint32(32).uint32(message.passive);
    }
    if (message.buildings !== 0) {
      writer.uint32(40).uint32(message.buildings);
    }
    if (message.abilities !== 0) {
      writer.uint32(48).uint32(message.abilities);
    }
    if (message.wards !== 0) {
      writer.uint32(56).uint32(message.wards);
    }
    if (message.other !== 0) {
      writer.uint32(64).uint32(message.other);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchPrivateMetadata_Team_Player_GoldReceived {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_GoldReceived();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.creep = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.heroes = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.bountyRunes = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.passive = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.buildings = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.abilities = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.wards = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.other = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_GoldReceived {
    return {
      creep: isSet(object.creep) ? Number(object.creep) : 0,
      heroes: isSet(object.heroes) ? Number(object.heroes) : 0,
      bountyRunes: isSet(object.bountyRunes) ? Number(object.bountyRunes) : 0,
      passive: isSet(object.passive) ? Number(object.passive) : 0,
      buildings: isSet(object.buildings) ? Number(object.buildings) : 0,
      abilities: isSet(object.abilities) ? Number(object.abilities) : 0,
      wards: isSet(object.wards) ? Number(object.wards) : 0,
      other: isSet(object.other) ? Number(object.other) : 0,
    };
  },

  toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_GoldReceived): unknown {
    const obj: any = {};
    message.creep !== undefined && (obj.creep = Math.round(message.creep));
    message.heroes !== undefined && (obj.heroes = Math.round(message.heroes));
    message.bountyRunes !== undefined && (obj.bountyRunes = Math.round(message.bountyRunes));
    message.passive !== undefined && (obj.passive = Math.round(message.passive));
    message.buildings !== undefined && (obj.buildings = Math.round(message.buildings));
    message.abilities !== undefined && (obj.abilities = Math.round(message.abilities));
    message.wards !== undefined && (obj.wards = Math.round(message.wards));
    message.other !== undefined && (obj.other = Math.round(message.other));
    return obj;
  },

  create(
    base?: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_GoldReceived>,
  ): CDOTAMatchPrivateMetadata_Team_Player_GoldReceived {
    return CDOTAMatchPrivateMetadata_Team_Player_GoldReceived.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_GoldReceived>,
  ): CDOTAMatchPrivateMetadata_Team_Player_GoldReceived {
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_GoldReceived();
    message.creep = object.creep ?? 0;
    message.heroes = object.heroes ?? 0;
    message.bountyRunes = object.bountyRunes ?? 0;
    message.passive = object.passive ?? 0;
    message.buildings = object.buildings ?? 0;
    message.abilities = object.abilities ?? 0;
    message.wards = object.wards ?? 0;
    message.other = object.other ?? 0;
    return message;
  },
};

function createBaseCDOTAMatchPrivateMetadata_Team_Player_XPReceived(): CDOTAMatchPrivateMetadata_Team_Player_XPReceived {
  return { creep: 0, heroes: 0, roshan: 0, tomeOfKnowledge: 0, outpost: 0, other: 0 };
}

export const CDOTAMatchPrivateMetadata_Team_Player_XPReceived = {
  encode(
    message: CDOTAMatchPrivateMetadata_Team_Player_XPReceived,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creep !== 0) {
      writer.uint32(8).uint32(message.creep);
    }
    if (message.heroes !== 0) {
      writer.uint32(16).uint32(message.heroes);
    }
    if (message.roshan !== 0) {
      writer.uint32(24).uint32(message.roshan);
    }
    if (message.tomeOfKnowledge !== 0) {
      writer.uint32(32).uint32(message.tomeOfKnowledge);
    }
    if (message.outpost !== 0) {
      writer.uint32(40).uint32(message.outpost);
    }
    if (message.other !== 0) {
      writer.uint32(48).uint32(message.other);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchPrivateMetadata_Team_Player_XPReceived {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_XPReceived();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.creep = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.heroes = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.roshan = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.tomeOfKnowledge = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.outpost = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.other = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Player_XPReceived {
    return {
      creep: isSet(object.creep) ? Number(object.creep) : 0,
      heroes: isSet(object.heroes) ? Number(object.heroes) : 0,
      roshan: isSet(object.roshan) ? Number(object.roshan) : 0,
      tomeOfKnowledge: isSet(object.tomeOfKnowledge) ? Number(object.tomeOfKnowledge) : 0,
      outpost: isSet(object.outpost) ? Number(object.outpost) : 0,
      other: isSet(object.other) ? Number(object.other) : 0,
    };
  },

  toJSON(message: CDOTAMatchPrivateMetadata_Team_Player_XPReceived): unknown {
    const obj: any = {};
    message.creep !== undefined && (obj.creep = Math.round(message.creep));
    message.heroes !== undefined && (obj.heroes = Math.round(message.heroes));
    message.roshan !== undefined && (obj.roshan = Math.round(message.roshan));
    message.tomeOfKnowledge !== undefined && (obj.tomeOfKnowledge = Math.round(message.tomeOfKnowledge));
    message.outpost !== undefined && (obj.outpost = Math.round(message.outpost));
    message.other !== undefined && (obj.other = Math.round(message.other));
    return obj;
  },

  create(
    base?: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_XPReceived>,
  ): CDOTAMatchPrivateMetadata_Team_Player_XPReceived {
    return CDOTAMatchPrivateMetadata_Team_Player_XPReceived.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CDOTAMatchPrivateMetadata_Team_Player_XPReceived>,
  ): CDOTAMatchPrivateMetadata_Team_Player_XPReceived {
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Player_XPReceived();
    message.creep = object.creep ?? 0;
    message.heroes = object.heroes ?? 0;
    message.roshan = object.roshan ?? 0;
    message.tomeOfKnowledge = object.tomeOfKnowledge ?? 0;
    message.outpost = object.outpost ?? 0;
    message.other = object.other ?? 0;
    return message;
  },
};

function createBaseCDOTAMatchPrivateMetadata_Team_Building(): CDOTAMatchPrivateMetadata_Team_Building {
  return { unitName: "", positionQuantX: 0, positionQuantY: 0, deathTime: 0 };
}

export const CDOTAMatchPrivateMetadata_Team_Building = {
  encode(message: CDOTAMatchPrivateMetadata_Team_Building, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unitName !== "") {
      writer.uint32(10).string(message.unitName);
    }
    if (message.positionQuantX !== 0) {
      writer.uint32(16).uint32(message.positionQuantX);
    }
    if (message.positionQuantY !== 0) {
      writer.uint32(24).uint32(message.positionQuantY);
    }
    if (message.deathTime !== 0) {
      writer.uint32(37).float(message.deathTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMatchPrivateMetadata_Team_Building {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Building();
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
          if (tag != 16) {
            break;
          }

          message.positionQuantX = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.positionQuantY = reader.uint32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.deathTime = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAMatchPrivateMetadata_Team_Building {
    return {
      unitName: isSet(object.unitName) ? String(object.unitName) : "",
      positionQuantX: isSet(object.positionQuantX) ? Number(object.positionQuantX) : 0,
      positionQuantY: isSet(object.positionQuantY) ? Number(object.positionQuantY) : 0,
      deathTime: isSet(object.deathTime) ? Number(object.deathTime) : 0,
    };
  },

  toJSON(message: CDOTAMatchPrivateMetadata_Team_Building): unknown {
    const obj: any = {};
    message.unitName !== undefined && (obj.unitName = message.unitName);
    message.positionQuantX !== undefined && (obj.positionQuantX = Math.round(message.positionQuantX));
    message.positionQuantY !== undefined && (obj.positionQuantY = Math.round(message.positionQuantY));
    message.deathTime !== undefined && (obj.deathTime = message.deathTime);
    return obj;
  },

  create(base?: DeepPartial<CDOTAMatchPrivateMetadata_Team_Building>): CDOTAMatchPrivateMetadata_Team_Building {
    return CDOTAMatchPrivateMetadata_Team_Building.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMatchPrivateMetadata_Team_Building>): CDOTAMatchPrivateMetadata_Team_Building {
    const message = createBaseCDOTAMatchPrivateMetadata_Team_Building();
    message.unitName = object.unitName ?? "";
    message.positionQuantX = object.positionQuantX ?? 0;
    message.positionQuantY = object.positionQuantY ?? 0;
    message.deathTime = object.deathTime ?? 0;
    return message;
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

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
