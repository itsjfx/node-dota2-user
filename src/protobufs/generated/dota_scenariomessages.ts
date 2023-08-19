/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface CScenarioPosition {
  x: number;
  y: number;
}

export interface CScenarioGameRoshanSpawner {
  killCount: number;
  state: number;
  cooldown: number;
}

export interface CScenarioEntCourier {
  teamNumber: number;
  ownerPlayerId: number;
  cooldown: number;
}

export interface CScenarioEntNPC {
  position: CScenarioPosition | undefined;
  unitName: string;
  teamNumber: number;
  healthFrac: number;
  owningCamp: string;
  owningCampPosition: CScenarioPosition | undefined;
  invadeGoal: string;
}

export interface CScenarioEntSpiritBear {
  ownerId: number;
  teamId: number;
}

export interface CScenarioEntDroppedItem {
  position: CScenarioPosition | undefined;
}

export interface CMsgDotaScenario {
  lobbyId: string;
  game: CMsgDotaScenario_Game | undefined;
  teams: CMsgDotaScenario_Team[];
  heroes: CMsgDotaScenario_Hero[];
  stock: CMsgDotaScenario_Stock[];
  buildings: CMsgDotaScenario_Building[];
  entities: CMsgDotaScenario_Entity[];
  items: CMsgDotaScenario_Item[];
  modifiers: CMsgDotaScenario_Modifier[];
}

export interface CMsgDotaScenario_EntityRef {
  playerId: number;
  neutralStashId: number;
  entityIdx: number;
  roshan: boolean;
  abilityName: string;
}

export interface CMsgDotaScenario_Game {
  matchId: string;
  gameMode: number;
  clockTime: number;
  internalTime: number;
  roshan: CScenarioGameRoshanSpawner | undefined;
}

export interface CMsgDotaScenario_TeamNeutralItem {
  name: string;
  consumed: boolean;
}

export interface CMsgDotaScenario_Team {
  teamNumber: number;
  neutralItems: CMsgDotaScenario_TeamNeutralItem[];
  heroKills: number;
  towerKills: number;
  barracksKills: number;
  glyphCooldown: number;
  radarCooldown: number;
}

export interface CMsgDotaScenario_HeroHeroInt {
  playerId: number;
  value: number;
}

export interface CMsgDotaScenario_HeroHeroFloat {
  playerId: number;
  value: number;
}

export interface CMsgDotaScenario_DamageStatsByType {
  damageType: number;
  receivedPreReduction: number;
  receivedPostReduction: number;
  outgoingPreReduction: number;
  outgoingPostReduction: number;
}

export interface CMsgDotaScenario_HeroAbility {
  name: string;
  level: number;
}

export interface CMsgDotaScenario_Hero {
  steamId: string;
  playerId: number;
  teamId: number;
  hero: string;
  totalXp: number;
  bkbChargesUsed: number;
  aeonChargesUsed: number;
  reliableGold: number;
  unreliableGold: number;
  totalEarnedGold: number;
  sharedGold: number;
  heroKillGold: number;
  creepKillGold: number;
  neutralKillGold: number;
  courierGold: number;
  bountyGold: number;
  roshanGold: number;
  buildingGold: number;
  otherGold: number;
  incomeGold: number;
  wardKillGold: number;
  abilityGold: number;
  denies: number;
  lastHits: number;
  lastHitStreak: number;
  lastHitMultikill: number;
  nearbyCreepDeathCount: number;
  claimedDenyCount: number;
  claimedMissCount: number;
  missCount: number;
  buybackCooldownTime: number;
  buybackGoldLimitTime: number;
  stunDuration: number;
  healing: number;
  towerKills: number;
  roshanKills: number;
  observerWardsPlaced: number;
  sentryWardsPlaced: number;
  creepsStacked: number;
  campsStacked: number;
  runePickups: number;
  goldSpentOnSupport: number;
  heroDamage: number;
  wardsPurchased: number;
  wardsDestroyed: number;
  goldSpentOnConsumables: number;
  goldSpentOnItems: number;
  goldSpentOnBuybacks: number;
  goldLostToDeath: number;
  kills: number;
  assists: number;
  deaths: number;
  killStreak: number;
  respawnSeconds: number;
  lastBuybackTime: number;
  firstBloodClaimed: boolean;
  firstBloodGiven: boolean;
  bountyRunes: number;
  outpostsCaptured: number;
  position: CScenarioPosition | undefined;
  enemyKills: CMsgDotaScenario_HeroHeroInt[];
  damageStats: CMsgDotaScenario_DamageStatsByType[];
  abilities: CMsgDotaScenario_HeroAbility[];
}

export interface CMsgDotaScenario_Stock {
  name: string;
  teamNumber: number;
  playerId: number;
  currentStock: number;
  cooldown: number;
  bonusStock: number;
}

export interface CMsgDotaScenario_Building {
  entityName: string;
  entityClass: string;
  teamId: number;
  isDestroyed: boolean;
  healthFrac: number;
}

export interface CMsgDotaScenario_Entity {
  courier: CScenarioEntCourier | undefined;
  npc: CScenarioEntNPC | undefined;
  spiritBear: CScenarioEntSpiritBear | undefined;
  droppedItem: CScenarioEntDroppedItem | undefined;
}

export interface CMsgDotaScenario_Item {
  name: string;
  location: CMsgDotaScenario_EntityRef | undefined;
  ownerId: number;
  itemSlot: number;
  neutralDropTeam: number;
  charges: number;
  secondaryCharges: number;
  lifetime: number;
  storedRuneType: number;
}

export interface CMsgDotaScenario_Modifier {
  name: string;
  parent: CMsgDotaScenario_EntityRef | undefined;
  caster: CMsgDotaScenario_EntityRef | undefined;
  ability: CMsgDotaScenario_EntityRef | undefined;
  duration: number;
  lifetimeRemaining: number;
  stackCount: number;
  createEvenIfExisting: boolean;
  createWithoutCaster: boolean;
  createWithoutAbility: boolean;
  moonshardConsumedBonus: number;
  moonshardConsumedBonusNightVision: number;
  wardtruesightRange: number;
  ultimateScepterConsumedAlchemistBonusAllStats: number;
  ultimateScepterConsumedAlchemistBonusHealth: number;
  ultimateScepterConsumedAlchemistBonusMana: number;
}

function createBaseCScenarioPosition(): CScenarioPosition {
  return { x: 0, y: 0 };
}

export const CScenarioPosition = {
  encode(message: CScenarioPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CScenarioPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCScenarioPosition();
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

  fromJSON(object: any): CScenarioPosition {
    return { x: isSet(object.x) ? Number(object.x) : 0, y: isSet(object.y) ? Number(object.y) : 0 };
  },

  toJSON(message: CScenarioPosition): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  create(base?: DeepPartial<CScenarioPosition>): CScenarioPosition {
    return CScenarioPosition.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CScenarioPosition>): CScenarioPosition {
    const message = createBaseCScenarioPosition();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseCScenarioGameRoshanSpawner(): CScenarioGameRoshanSpawner {
  return { killCount: 0, state: 0, cooldown: 0 };
}

export const CScenarioGameRoshanSpawner = {
  encode(message: CScenarioGameRoshanSpawner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.killCount !== 0) {
      writer.uint32(8).int32(message.killCount);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.cooldown !== 0) {
      writer.uint32(29).float(message.cooldown);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CScenarioGameRoshanSpawner {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCScenarioGameRoshanSpawner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.killCount = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.state = reader.int32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.cooldown = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CScenarioGameRoshanSpawner {
    return {
      killCount: isSet(object.killCount) ? Number(object.killCount) : 0,
      state: isSet(object.state) ? Number(object.state) : 0,
      cooldown: isSet(object.cooldown) ? Number(object.cooldown) : 0,
    };
  },

  toJSON(message: CScenarioGameRoshanSpawner): unknown {
    const obj: any = {};
    message.killCount !== undefined && (obj.killCount = Math.round(message.killCount));
    message.state !== undefined && (obj.state = Math.round(message.state));
    message.cooldown !== undefined && (obj.cooldown = message.cooldown);
    return obj;
  },

  create(base?: DeepPartial<CScenarioGameRoshanSpawner>): CScenarioGameRoshanSpawner {
    return CScenarioGameRoshanSpawner.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CScenarioGameRoshanSpawner>): CScenarioGameRoshanSpawner {
    const message = createBaseCScenarioGameRoshanSpawner();
    message.killCount = object.killCount ?? 0;
    message.state = object.state ?? 0;
    message.cooldown = object.cooldown ?? 0;
    return message;
  },
};

function createBaseCScenarioEntCourier(): CScenarioEntCourier {
  return { teamNumber: 0, ownerPlayerId: 0, cooldown: 0 };
}

export const CScenarioEntCourier = {
  encode(message: CScenarioEntCourier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamNumber !== 0) {
      writer.uint32(8).int32(message.teamNumber);
    }
    if (message.ownerPlayerId !== 0) {
      writer.uint32(16).int32(message.ownerPlayerId);
    }
    if (message.cooldown !== 0) {
      writer.uint32(29).float(message.cooldown);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CScenarioEntCourier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCScenarioEntCourier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.teamNumber = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.ownerPlayerId = reader.int32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.cooldown = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CScenarioEntCourier {
    return {
      teamNumber: isSet(object.teamNumber) ? Number(object.teamNumber) : 0,
      ownerPlayerId: isSet(object.ownerPlayerId) ? Number(object.ownerPlayerId) : 0,
      cooldown: isSet(object.cooldown) ? Number(object.cooldown) : 0,
    };
  },

  toJSON(message: CScenarioEntCourier): unknown {
    const obj: any = {};
    message.teamNumber !== undefined && (obj.teamNumber = Math.round(message.teamNumber));
    message.ownerPlayerId !== undefined && (obj.ownerPlayerId = Math.round(message.ownerPlayerId));
    message.cooldown !== undefined && (obj.cooldown = message.cooldown);
    return obj;
  },

  create(base?: DeepPartial<CScenarioEntCourier>): CScenarioEntCourier {
    return CScenarioEntCourier.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CScenarioEntCourier>): CScenarioEntCourier {
    const message = createBaseCScenarioEntCourier();
    message.teamNumber = object.teamNumber ?? 0;
    message.ownerPlayerId = object.ownerPlayerId ?? 0;
    message.cooldown = object.cooldown ?? 0;
    return message;
  },
};

function createBaseCScenarioEntNPC(): CScenarioEntNPC {
  return {
    position: undefined,
    unitName: "",
    teamNumber: 0,
    healthFrac: 0,
    owningCamp: "",
    owningCampPosition: undefined,
    invadeGoal: "",
  };
}

export const CScenarioEntNPC = {
  encode(message: CScenarioEntNPC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      CScenarioPosition.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.unitName !== "") {
      writer.uint32(18).string(message.unitName);
    }
    if (message.teamNumber !== 0) {
      writer.uint32(24).int32(message.teamNumber);
    }
    if (message.healthFrac !== 0) {
      writer.uint32(37).float(message.healthFrac);
    }
    if (message.owningCamp !== "") {
      writer.uint32(82).string(message.owningCamp);
    }
    if (message.owningCampPosition !== undefined) {
      CScenarioPosition.encode(message.owningCampPosition, writer.uint32(90).fork()).ldelim();
    }
    if (message.invadeGoal !== "") {
      writer.uint32(162).string(message.invadeGoal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CScenarioEntNPC {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCScenarioEntNPC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.position = CScenarioPosition.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.unitName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.teamNumber = reader.int32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.healthFrac = reader.float();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.owningCamp = reader.string();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.owningCampPosition = CScenarioPosition.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag != 162) {
            break;
          }

          message.invadeGoal = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CScenarioEntNPC {
    return {
      position: isSet(object.position) ? CScenarioPosition.fromJSON(object.position) : undefined,
      unitName: isSet(object.unitName) ? String(object.unitName) : "",
      teamNumber: isSet(object.teamNumber) ? Number(object.teamNumber) : 0,
      healthFrac: isSet(object.healthFrac) ? Number(object.healthFrac) : 0,
      owningCamp: isSet(object.owningCamp) ? String(object.owningCamp) : "",
      owningCampPosition: isSet(object.owningCampPosition)
        ? CScenarioPosition.fromJSON(object.owningCampPosition)
        : undefined,
      invadeGoal: isSet(object.invadeGoal) ? String(object.invadeGoal) : "",
    };
  },

  toJSON(message: CScenarioEntNPC): unknown {
    const obj: any = {};
    message.position !== undefined &&
      (obj.position = message.position ? CScenarioPosition.toJSON(message.position) : undefined);
    message.unitName !== undefined && (obj.unitName = message.unitName);
    message.teamNumber !== undefined && (obj.teamNumber = Math.round(message.teamNumber));
    message.healthFrac !== undefined && (obj.healthFrac = message.healthFrac);
    message.owningCamp !== undefined && (obj.owningCamp = message.owningCamp);
    message.owningCampPosition !== undefined && (obj.owningCampPosition = message.owningCampPosition
      ? CScenarioPosition.toJSON(message.owningCampPosition)
      : undefined);
    message.invadeGoal !== undefined && (obj.invadeGoal = message.invadeGoal);
    return obj;
  },

  create(base?: DeepPartial<CScenarioEntNPC>): CScenarioEntNPC {
    return CScenarioEntNPC.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CScenarioEntNPC>): CScenarioEntNPC {
    const message = createBaseCScenarioEntNPC();
    message.position = (object.position !== undefined && object.position !== null)
      ? CScenarioPosition.fromPartial(object.position)
      : undefined;
    message.unitName = object.unitName ?? "";
    message.teamNumber = object.teamNumber ?? 0;
    message.healthFrac = object.healthFrac ?? 0;
    message.owningCamp = object.owningCamp ?? "";
    message.owningCampPosition = (object.owningCampPosition !== undefined && object.owningCampPosition !== null)
      ? CScenarioPosition.fromPartial(object.owningCampPosition)
      : undefined;
    message.invadeGoal = object.invadeGoal ?? "";
    return message;
  },
};

function createBaseCScenarioEntSpiritBear(): CScenarioEntSpiritBear {
  return { ownerId: 0, teamId: 0 };
}

export const CScenarioEntSpiritBear = {
  encode(message: CScenarioEntSpiritBear, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerId !== 0) {
      writer.uint32(8).int32(message.ownerId);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).int32(message.teamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CScenarioEntSpiritBear {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCScenarioEntSpiritBear();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ownerId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.teamId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CScenarioEntSpiritBear {
    return {
      ownerId: isSet(object.ownerId) ? Number(object.ownerId) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
    };
  },

  toJSON(message: CScenarioEntSpiritBear): unknown {
    const obj: any = {};
    message.ownerId !== undefined && (obj.ownerId = Math.round(message.ownerId));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    return obj;
  },

  create(base?: DeepPartial<CScenarioEntSpiritBear>): CScenarioEntSpiritBear {
    return CScenarioEntSpiritBear.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CScenarioEntSpiritBear>): CScenarioEntSpiritBear {
    const message = createBaseCScenarioEntSpiritBear();
    message.ownerId = object.ownerId ?? 0;
    message.teamId = object.teamId ?? 0;
    return message;
  },
};

function createBaseCScenarioEntDroppedItem(): CScenarioEntDroppedItem {
  return { position: undefined };
}

export const CScenarioEntDroppedItem = {
  encode(message: CScenarioEntDroppedItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      CScenarioPosition.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CScenarioEntDroppedItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCScenarioEntDroppedItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.position = CScenarioPosition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CScenarioEntDroppedItem {
    return { position: isSet(object.position) ? CScenarioPosition.fromJSON(object.position) : undefined };
  },

  toJSON(message: CScenarioEntDroppedItem): unknown {
    const obj: any = {};
    message.position !== undefined &&
      (obj.position = message.position ? CScenarioPosition.toJSON(message.position) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CScenarioEntDroppedItem>): CScenarioEntDroppedItem {
    return CScenarioEntDroppedItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CScenarioEntDroppedItem>): CScenarioEntDroppedItem {
    const message = createBaseCScenarioEntDroppedItem();
    message.position = (object.position !== undefined && object.position !== null)
      ? CScenarioPosition.fromPartial(object.position)
      : undefined;
    return message;
  },
};

function createBaseCMsgDotaScenario(): CMsgDotaScenario {
  return {
    lobbyId: "0",
    game: undefined,
    teams: [],
    heroes: [],
    stock: [],
    buildings: [],
    entities: [],
    items: [],
    modifiers: [],
  };
}

export const CMsgDotaScenario = {
  encode(message: CMsgDotaScenario, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lobbyId !== "0") {
      writer.uint32(8).uint64(message.lobbyId);
    }
    if (message.game !== undefined) {
      CMsgDotaScenario_Game.encode(message.game, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.teams) {
      CMsgDotaScenario_Team.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.heroes) {
      CMsgDotaScenario_Hero.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.stock) {
      CMsgDotaScenario_Stock.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.buildings) {
      CMsgDotaScenario_Building.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.entities) {
      CMsgDotaScenario_Entity.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.items) {
      CMsgDotaScenario_Item.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.modifiers) {
      CMsgDotaScenario_Modifier.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDotaScenario {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDotaScenario();
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

          message.game = CMsgDotaScenario_Game.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.teams.push(CMsgDotaScenario_Team.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.heroes.push(CMsgDotaScenario_Hero.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.stock.push(CMsgDotaScenario_Stock.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.buildings.push(CMsgDotaScenario_Building.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.entities.push(CMsgDotaScenario_Entity.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.items.push(CMsgDotaScenario_Item.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.modifiers.push(CMsgDotaScenario_Modifier.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDotaScenario {
    return {
      lobbyId: isSet(object.lobbyId) ? String(object.lobbyId) : "0",
      game: isSet(object.game) ? CMsgDotaScenario_Game.fromJSON(object.game) : undefined,
      teams: Array.isArray(object?.teams) ? object.teams.map((e: any) => CMsgDotaScenario_Team.fromJSON(e)) : [],
      heroes: Array.isArray(object?.heroes) ? object.heroes.map((e: any) => CMsgDotaScenario_Hero.fromJSON(e)) : [],
      stock: Array.isArray(object?.stock) ? object.stock.map((e: any) => CMsgDotaScenario_Stock.fromJSON(e)) : [],
      buildings: Array.isArray(object?.buildings)
        ? object.buildings.map((e: any) => CMsgDotaScenario_Building.fromJSON(e))
        : [],
      entities: Array.isArray(object?.entities)
        ? object.entities.map((e: any) => CMsgDotaScenario_Entity.fromJSON(e))
        : [],
      items: Array.isArray(object?.items) ? object.items.map((e: any) => CMsgDotaScenario_Item.fromJSON(e)) : [],
      modifiers: Array.isArray(object?.modifiers)
        ? object.modifiers.map((e: any) => CMsgDotaScenario_Modifier.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDotaScenario): unknown {
    const obj: any = {};
    message.lobbyId !== undefined && (obj.lobbyId = message.lobbyId);
    message.game !== undefined && (obj.game = message.game ? CMsgDotaScenario_Game.toJSON(message.game) : undefined);
    if (message.teams) {
      obj.teams = message.teams.map((e) => e ? CMsgDotaScenario_Team.toJSON(e) : undefined);
    } else {
      obj.teams = [];
    }
    if (message.heroes) {
      obj.heroes = message.heroes.map((e) => e ? CMsgDotaScenario_Hero.toJSON(e) : undefined);
    } else {
      obj.heroes = [];
    }
    if (message.stock) {
      obj.stock = message.stock.map((e) => e ? CMsgDotaScenario_Stock.toJSON(e) : undefined);
    } else {
      obj.stock = [];
    }
    if (message.buildings) {
      obj.buildings = message.buildings.map((e) => e ? CMsgDotaScenario_Building.toJSON(e) : undefined);
    } else {
      obj.buildings = [];
    }
    if (message.entities) {
      obj.entities = message.entities.map((e) => e ? CMsgDotaScenario_Entity.toJSON(e) : undefined);
    } else {
      obj.entities = [];
    }
    if (message.items) {
      obj.items = message.items.map((e) => e ? CMsgDotaScenario_Item.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    if (message.modifiers) {
      obj.modifiers = message.modifiers.map((e) => e ? CMsgDotaScenario_Modifier.toJSON(e) : undefined);
    } else {
      obj.modifiers = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgDotaScenario>): CMsgDotaScenario {
    return CMsgDotaScenario.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDotaScenario>): CMsgDotaScenario {
    const message = createBaseCMsgDotaScenario();
    message.lobbyId = object.lobbyId ?? "0";
    message.game = (object.game !== undefined && object.game !== null)
      ? CMsgDotaScenario_Game.fromPartial(object.game)
      : undefined;
    message.teams = object.teams?.map((e) => CMsgDotaScenario_Team.fromPartial(e)) || [];
    message.heroes = object.heroes?.map((e) => CMsgDotaScenario_Hero.fromPartial(e)) || [];
    message.stock = object.stock?.map((e) => CMsgDotaScenario_Stock.fromPartial(e)) || [];
    message.buildings = object.buildings?.map((e) => CMsgDotaScenario_Building.fromPartial(e)) || [];
    message.entities = object.entities?.map((e) => CMsgDotaScenario_Entity.fromPartial(e)) || [];
    message.items = object.items?.map((e) => CMsgDotaScenario_Item.fromPartial(e)) || [];
    message.modifiers = object.modifiers?.map((e) => CMsgDotaScenario_Modifier.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgDotaScenario_EntityRef(): CMsgDotaScenario_EntityRef {
  return { playerId: 0, neutralStashId: 0, entityIdx: 0, roshan: false, abilityName: "" };
}

export const CMsgDotaScenario_EntityRef = {
  encode(message: CMsgDotaScenario_EntityRef, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.neutralStashId !== 0) {
      writer.uint32(16).int32(message.neutralStashId);
    }
    if (message.entityIdx !== 0) {
      writer.uint32(24).int32(message.entityIdx);
    }
    if (message.roshan === true) {
      writer.uint32(32).bool(message.roshan);
    }
    if (message.abilityName !== "") {
      writer.uint32(82).string(message.abilityName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDotaScenario_EntityRef {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDotaScenario_EntityRef();
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

          message.neutralStashId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.entityIdx = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.roshan = reader.bool();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.abilityName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDotaScenario_EntityRef {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      neutralStashId: isSet(object.neutralStashId) ? Number(object.neutralStashId) : 0,
      entityIdx: isSet(object.entityIdx) ? Number(object.entityIdx) : 0,
      roshan: isSet(object.roshan) ? Boolean(object.roshan) : false,
      abilityName: isSet(object.abilityName) ? String(object.abilityName) : "",
    };
  },

  toJSON(message: CMsgDotaScenario_EntityRef): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.neutralStashId !== undefined && (obj.neutralStashId = Math.round(message.neutralStashId));
    message.entityIdx !== undefined && (obj.entityIdx = Math.round(message.entityIdx));
    message.roshan !== undefined && (obj.roshan = message.roshan);
    message.abilityName !== undefined && (obj.abilityName = message.abilityName);
    return obj;
  },

  create(base?: DeepPartial<CMsgDotaScenario_EntityRef>): CMsgDotaScenario_EntityRef {
    return CMsgDotaScenario_EntityRef.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDotaScenario_EntityRef>): CMsgDotaScenario_EntityRef {
    const message = createBaseCMsgDotaScenario_EntityRef();
    message.playerId = object.playerId ?? 0;
    message.neutralStashId = object.neutralStashId ?? 0;
    message.entityIdx = object.entityIdx ?? 0;
    message.roshan = object.roshan ?? false;
    message.abilityName = object.abilityName ?? "";
    return message;
  },
};

function createBaseCMsgDotaScenario_Game(): CMsgDotaScenario_Game {
  return { matchId: "0", gameMode: 0, clockTime: 0, internalTime: 0, roshan: undefined };
}

export const CMsgDotaScenario_Game = {
  encode(message: CMsgDotaScenario_Game, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.gameMode !== 0) {
      writer.uint32(16).int32(message.gameMode);
    }
    if (message.clockTime !== 0) {
      writer.uint32(29).float(message.clockTime);
    }
    if (message.internalTime !== 0) {
      writer.uint32(37).float(message.internalTime);
    }
    if (message.roshan !== undefined) {
      CScenarioGameRoshanSpawner.encode(message.roshan, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDotaScenario_Game {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDotaScenario_Game();
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

          message.gameMode = reader.int32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.clockTime = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.internalTime = reader.float();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.roshan = CScenarioGameRoshanSpawner.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDotaScenario_Game {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      gameMode: isSet(object.gameMode) ? Number(object.gameMode) : 0,
      clockTime: isSet(object.clockTime) ? Number(object.clockTime) : 0,
      internalTime: isSet(object.internalTime) ? Number(object.internalTime) : 0,
      roshan: isSet(object.roshan) ? CScenarioGameRoshanSpawner.fromJSON(object.roshan) : undefined,
    };
  },

  toJSON(message: CMsgDotaScenario_Game): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.gameMode !== undefined && (obj.gameMode = Math.round(message.gameMode));
    message.clockTime !== undefined && (obj.clockTime = message.clockTime);
    message.internalTime !== undefined && (obj.internalTime = message.internalTime);
    message.roshan !== undefined &&
      (obj.roshan = message.roshan ? CScenarioGameRoshanSpawner.toJSON(message.roshan) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgDotaScenario_Game>): CMsgDotaScenario_Game {
    return CMsgDotaScenario_Game.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDotaScenario_Game>): CMsgDotaScenario_Game {
    const message = createBaseCMsgDotaScenario_Game();
    message.matchId = object.matchId ?? "0";
    message.gameMode = object.gameMode ?? 0;
    message.clockTime = object.clockTime ?? 0;
    message.internalTime = object.internalTime ?? 0;
    message.roshan = (object.roshan !== undefined && object.roshan !== null)
      ? CScenarioGameRoshanSpawner.fromPartial(object.roshan)
      : undefined;
    return message;
  },
};

function createBaseCMsgDotaScenario_TeamNeutralItem(): CMsgDotaScenario_TeamNeutralItem {
  return { name: "", consumed: false };
}

export const CMsgDotaScenario_TeamNeutralItem = {
  encode(message: CMsgDotaScenario_TeamNeutralItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.consumed === true) {
      writer.uint32(16).bool(message.consumed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDotaScenario_TeamNeutralItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDotaScenario_TeamNeutralItem();
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

          message.consumed = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDotaScenario_TeamNeutralItem {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      consumed: isSet(object.consumed) ? Boolean(object.consumed) : false,
    };
  },

  toJSON(message: CMsgDotaScenario_TeamNeutralItem): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.consumed !== undefined && (obj.consumed = message.consumed);
    return obj;
  },

  create(base?: DeepPartial<CMsgDotaScenario_TeamNeutralItem>): CMsgDotaScenario_TeamNeutralItem {
    return CMsgDotaScenario_TeamNeutralItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDotaScenario_TeamNeutralItem>): CMsgDotaScenario_TeamNeutralItem {
    const message = createBaseCMsgDotaScenario_TeamNeutralItem();
    message.name = object.name ?? "";
    message.consumed = object.consumed ?? false;
    return message;
  },
};

function createBaseCMsgDotaScenario_Team(): CMsgDotaScenario_Team {
  return {
    teamNumber: 0,
    neutralItems: [],
    heroKills: 0,
    towerKills: 0,
    barracksKills: 0,
    glyphCooldown: 0,
    radarCooldown: 0,
  };
}

export const CMsgDotaScenario_Team = {
  encode(message: CMsgDotaScenario_Team, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamNumber !== 0) {
      writer.uint32(8).int32(message.teamNumber);
    }
    for (const v of message.neutralItems) {
      CMsgDotaScenario_TeamNeutralItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.heroKills !== 0) {
      writer.uint32(24).int32(message.heroKills);
    }
    if (message.towerKills !== 0) {
      writer.uint32(32).int32(message.towerKills);
    }
    if (message.barracksKills !== 0) {
      writer.uint32(40).int32(message.barracksKills);
    }
    if (message.glyphCooldown !== 0) {
      writer.uint32(53).float(message.glyphCooldown);
    }
    if (message.radarCooldown !== 0) {
      writer.uint32(61).float(message.radarCooldown);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDotaScenario_Team {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDotaScenario_Team();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.teamNumber = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.neutralItems.push(CMsgDotaScenario_TeamNeutralItem.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.heroKills = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.towerKills = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.barracksKills = reader.int32();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.glyphCooldown = reader.float();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.radarCooldown = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDotaScenario_Team {
    return {
      teamNumber: isSet(object.teamNumber) ? Number(object.teamNumber) : 0,
      neutralItems: Array.isArray(object?.neutralItems)
        ? object.neutralItems.map((e: any) => CMsgDotaScenario_TeamNeutralItem.fromJSON(e))
        : [],
      heroKills: isSet(object.heroKills) ? Number(object.heroKills) : 0,
      towerKills: isSet(object.towerKills) ? Number(object.towerKills) : 0,
      barracksKills: isSet(object.barracksKills) ? Number(object.barracksKills) : 0,
      glyphCooldown: isSet(object.glyphCooldown) ? Number(object.glyphCooldown) : 0,
      radarCooldown: isSet(object.radarCooldown) ? Number(object.radarCooldown) : 0,
    };
  },

  toJSON(message: CMsgDotaScenario_Team): unknown {
    const obj: any = {};
    message.teamNumber !== undefined && (obj.teamNumber = Math.round(message.teamNumber));
    if (message.neutralItems) {
      obj.neutralItems = message.neutralItems.map((e) => e ? CMsgDotaScenario_TeamNeutralItem.toJSON(e) : undefined);
    } else {
      obj.neutralItems = [];
    }
    message.heroKills !== undefined && (obj.heroKills = Math.round(message.heroKills));
    message.towerKills !== undefined && (obj.towerKills = Math.round(message.towerKills));
    message.barracksKills !== undefined && (obj.barracksKills = Math.round(message.barracksKills));
    message.glyphCooldown !== undefined && (obj.glyphCooldown = message.glyphCooldown);
    message.radarCooldown !== undefined && (obj.radarCooldown = message.radarCooldown);
    return obj;
  },

  create(base?: DeepPartial<CMsgDotaScenario_Team>): CMsgDotaScenario_Team {
    return CMsgDotaScenario_Team.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDotaScenario_Team>): CMsgDotaScenario_Team {
    const message = createBaseCMsgDotaScenario_Team();
    message.teamNumber = object.teamNumber ?? 0;
    message.neutralItems = object.neutralItems?.map((e) => CMsgDotaScenario_TeamNeutralItem.fromPartial(e)) || [];
    message.heroKills = object.heroKills ?? 0;
    message.towerKills = object.towerKills ?? 0;
    message.barracksKills = object.barracksKills ?? 0;
    message.glyphCooldown = object.glyphCooldown ?? 0;
    message.radarCooldown = object.radarCooldown ?? 0;
    return message;
  },
};

function createBaseCMsgDotaScenario_HeroHeroInt(): CMsgDotaScenario_HeroHeroInt {
  return { playerId: 0, value: 0 };
}

export const CMsgDotaScenario_HeroHeroInt = {
  encode(message: CMsgDotaScenario_HeroHeroInt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDotaScenario_HeroHeroInt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDotaScenario_HeroHeroInt();
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

  fromJSON(object: any): CMsgDotaScenario_HeroHeroInt {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: CMsgDotaScenario_HeroHeroInt): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create(base?: DeepPartial<CMsgDotaScenario_HeroHeroInt>): CMsgDotaScenario_HeroHeroInt {
    return CMsgDotaScenario_HeroHeroInt.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDotaScenario_HeroHeroInt>): CMsgDotaScenario_HeroHeroInt {
    const message = createBaseCMsgDotaScenario_HeroHeroInt();
    message.playerId = object.playerId ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseCMsgDotaScenario_HeroHeroFloat(): CMsgDotaScenario_HeroHeroFloat {
  return { playerId: 0, value: 0 };
}

export const CMsgDotaScenario_HeroHeroFloat = {
  encode(message: CMsgDotaScenario_HeroHeroFloat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.value !== 0) {
      writer.uint32(21).float(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDotaScenario_HeroHeroFloat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDotaScenario_HeroHeroFloat();
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

  fromJSON(object: any): CMsgDotaScenario_HeroHeroFloat {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: CMsgDotaScenario_HeroHeroFloat): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<CMsgDotaScenario_HeroHeroFloat>): CMsgDotaScenario_HeroHeroFloat {
    return CMsgDotaScenario_HeroHeroFloat.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDotaScenario_HeroHeroFloat>): CMsgDotaScenario_HeroHeroFloat {
    const message = createBaseCMsgDotaScenario_HeroHeroFloat();
    message.playerId = object.playerId ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseCMsgDotaScenario_DamageStatsByType(): CMsgDotaScenario_DamageStatsByType {
  return {
    damageType: 0,
    receivedPreReduction: 0,
    receivedPostReduction: 0,
    outgoingPreReduction: 0,
    outgoingPostReduction: 0,
  };
}

export const CMsgDotaScenario_DamageStatsByType = {
  encode(message: CMsgDotaScenario_DamageStatsByType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.damageType !== 0) {
      writer.uint32(8).int32(message.damageType);
    }
    if (message.receivedPreReduction !== 0) {
      writer.uint32(16).int32(message.receivedPreReduction);
    }
    if (message.receivedPostReduction !== 0) {
      writer.uint32(24).int32(message.receivedPostReduction);
    }
    if (message.outgoingPreReduction !== 0) {
      writer.uint32(32).int32(message.outgoingPreReduction);
    }
    if (message.outgoingPostReduction !== 0) {
      writer.uint32(40).int32(message.outgoingPostReduction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDotaScenario_DamageStatsByType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDotaScenario_DamageStatsByType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.damageType = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.receivedPreReduction = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.receivedPostReduction = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.outgoingPreReduction = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.outgoingPostReduction = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDotaScenario_DamageStatsByType {
    return {
      damageType: isSet(object.damageType) ? Number(object.damageType) : 0,
      receivedPreReduction: isSet(object.receivedPreReduction) ? Number(object.receivedPreReduction) : 0,
      receivedPostReduction: isSet(object.receivedPostReduction) ? Number(object.receivedPostReduction) : 0,
      outgoingPreReduction: isSet(object.outgoingPreReduction) ? Number(object.outgoingPreReduction) : 0,
      outgoingPostReduction: isSet(object.outgoingPostReduction) ? Number(object.outgoingPostReduction) : 0,
    };
  },

  toJSON(message: CMsgDotaScenario_DamageStatsByType): unknown {
    const obj: any = {};
    message.damageType !== undefined && (obj.damageType = Math.round(message.damageType));
    message.receivedPreReduction !== undefined && (obj.receivedPreReduction = Math.round(message.receivedPreReduction));
    message.receivedPostReduction !== undefined &&
      (obj.receivedPostReduction = Math.round(message.receivedPostReduction));
    message.outgoingPreReduction !== undefined && (obj.outgoingPreReduction = Math.round(message.outgoingPreReduction));
    message.outgoingPostReduction !== undefined &&
      (obj.outgoingPostReduction = Math.round(message.outgoingPostReduction));
    return obj;
  },

  create(base?: DeepPartial<CMsgDotaScenario_DamageStatsByType>): CMsgDotaScenario_DamageStatsByType {
    return CMsgDotaScenario_DamageStatsByType.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDotaScenario_DamageStatsByType>): CMsgDotaScenario_DamageStatsByType {
    const message = createBaseCMsgDotaScenario_DamageStatsByType();
    message.damageType = object.damageType ?? 0;
    message.receivedPreReduction = object.receivedPreReduction ?? 0;
    message.receivedPostReduction = object.receivedPostReduction ?? 0;
    message.outgoingPreReduction = object.outgoingPreReduction ?? 0;
    message.outgoingPostReduction = object.outgoingPostReduction ?? 0;
    return message;
  },
};

function createBaseCMsgDotaScenario_HeroAbility(): CMsgDotaScenario_HeroAbility {
  return { name: "", level: 0 };
}

export const CMsgDotaScenario_HeroAbility = {
  encode(message: CMsgDotaScenario_HeroAbility, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.level !== 0) {
      writer.uint32(16).int32(message.level);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDotaScenario_HeroAbility {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDotaScenario_HeroAbility();
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

          message.level = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDotaScenario_HeroAbility {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      level: isSet(object.level) ? Number(object.level) : 0,
    };
  },

  toJSON(message: CMsgDotaScenario_HeroAbility): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.level !== undefined && (obj.level = Math.round(message.level));
    return obj;
  },

  create(base?: DeepPartial<CMsgDotaScenario_HeroAbility>): CMsgDotaScenario_HeroAbility {
    return CMsgDotaScenario_HeroAbility.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDotaScenario_HeroAbility>): CMsgDotaScenario_HeroAbility {
    const message = createBaseCMsgDotaScenario_HeroAbility();
    message.name = object.name ?? "";
    message.level = object.level ?? 0;
    return message;
  },
};

function createBaseCMsgDotaScenario_Hero(): CMsgDotaScenario_Hero {
  return {
    steamId: "0",
    playerId: 0,
    teamId: 0,
    hero: "",
    totalXp: 0,
    bkbChargesUsed: 0,
    aeonChargesUsed: 0,
    reliableGold: 0,
    unreliableGold: 0,
    totalEarnedGold: 0,
    sharedGold: 0,
    heroKillGold: 0,
    creepKillGold: 0,
    neutralKillGold: 0,
    courierGold: 0,
    bountyGold: 0,
    roshanGold: 0,
    buildingGold: 0,
    otherGold: 0,
    incomeGold: 0,
    wardKillGold: 0,
    abilityGold: 0,
    denies: 0,
    lastHits: 0,
    lastHitStreak: 0,
    lastHitMultikill: 0,
    nearbyCreepDeathCount: 0,
    claimedDenyCount: 0,
    claimedMissCount: 0,
    missCount: 0,
    buybackCooldownTime: 0,
    buybackGoldLimitTime: 0,
    stunDuration: 0,
    healing: 0,
    towerKills: 0,
    roshanKills: 0,
    observerWardsPlaced: 0,
    sentryWardsPlaced: 0,
    creepsStacked: 0,
    campsStacked: 0,
    runePickups: 0,
    goldSpentOnSupport: 0,
    heroDamage: 0,
    wardsPurchased: 0,
    wardsDestroyed: 0,
    goldSpentOnConsumables: 0,
    goldSpentOnItems: 0,
    goldSpentOnBuybacks: 0,
    goldLostToDeath: 0,
    kills: 0,
    assists: 0,
    deaths: 0,
    killStreak: 0,
    respawnSeconds: 0,
    lastBuybackTime: 0,
    firstBloodClaimed: false,
    firstBloodGiven: false,
    bountyRunes: 0,
    outpostsCaptured: 0,
    position: undefined,
    enemyKills: [],
    damageStats: [],
    abilities: [],
  };
}

export const CMsgDotaScenario_Hero = {
  encode(message: CMsgDotaScenario_Hero, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.playerId !== 0) {
      writer.uint32(16).int32(message.playerId);
    }
    if (message.teamId !== 0) {
      writer.uint32(24).int32(message.teamId);
    }
    if (message.hero !== "") {
      writer.uint32(34).string(message.hero);
    }
    if (message.totalXp !== 0) {
      writer.uint32(40).int32(message.totalXp);
    }
    if (message.bkbChargesUsed !== 0) {
      writer.uint32(48).int32(message.bkbChargesUsed);
    }
    if (message.aeonChargesUsed !== 0) {
      writer.uint32(56).int32(message.aeonChargesUsed);
    }
    if (message.reliableGold !== 0) {
      writer.uint32(64).int32(message.reliableGold);
    }
    if (message.unreliableGold !== 0) {
      writer.uint32(72).int32(message.unreliableGold);
    }
    if (message.totalEarnedGold !== 0) {
      writer.uint32(80).int32(message.totalEarnedGold);
    }
    if (message.sharedGold !== 0) {
      writer.uint32(88).int32(message.sharedGold);
    }
    if (message.heroKillGold !== 0) {
      writer.uint32(96).int32(message.heroKillGold);
    }
    if (message.creepKillGold !== 0) {
      writer.uint32(104).int32(message.creepKillGold);
    }
    if (message.neutralKillGold !== 0) {
      writer.uint32(112).int32(message.neutralKillGold);
    }
    if (message.courierGold !== 0) {
      writer.uint32(120).int32(message.courierGold);
    }
    if (message.bountyGold !== 0) {
      writer.uint32(128).int32(message.bountyGold);
    }
    if (message.roshanGold !== 0) {
      writer.uint32(136).int32(message.roshanGold);
    }
    if (message.buildingGold !== 0) {
      writer.uint32(144).int32(message.buildingGold);
    }
    if (message.otherGold !== 0) {
      writer.uint32(152).int32(message.otherGold);
    }
    if (message.incomeGold !== 0) {
      writer.uint32(208).int32(message.incomeGold);
    }
    if (message.wardKillGold !== 0) {
      writer.uint32(216).int32(message.wardKillGold);
    }
    if (message.abilityGold !== 0) {
      writer.uint32(224).int32(message.abilityGold);
    }
    if (message.denies !== 0) {
      writer.uint32(232).int32(message.denies);
    }
    if (message.lastHits !== 0) {
      writer.uint32(240).int32(message.lastHits);
    }
    if (message.lastHitStreak !== 0) {
      writer.uint32(248).int32(message.lastHitStreak);
    }
    if (message.lastHitMultikill !== 0) {
      writer.uint32(256).int32(message.lastHitMultikill);
    }
    if (message.nearbyCreepDeathCount !== 0) {
      writer.uint32(264).int32(message.nearbyCreepDeathCount);
    }
    if (message.claimedDenyCount !== 0) {
      writer.uint32(272).int32(message.claimedDenyCount);
    }
    if (message.claimedMissCount !== 0) {
      writer.uint32(280).int32(message.claimedMissCount);
    }
    if (message.missCount !== 0) {
      writer.uint32(288).int32(message.missCount);
    }
    if (message.buybackCooldownTime !== 0) {
      writer.uint32(325).float(message.buybackCooldownTime);
    }
    if (message.buybackGoldLimitTime !== 0) {
      writer.uint32(333).float(message.buybackGoldLimitTime);
    }
    if (message.stunDuration !== 0) {
      writer.uint32(357).float(message.stunDuration);
    }
    if (message.healing !== 0) {
      writer.uint32(365).float(message.healing);
    }
    if (message.towerKills !== 0) {
      writer.uint32(368).int32(message.towerKills);
    }
    if (message.roshanKills !== 0) {
      writer.uint32(376).int32(message.roshanKills);
    }
    if (message.observerWardsPlaced !== 0) {
      writer.uint32(384).int32(message.observerWardsPlaced);
    }
    if (message.sentryWardsPlaced !== 0) {
      writer.uint32(392).int32(message.sentryWardsPlaced);
    }
    if (message.creepsStacked !== 0) {
      writer.uint32(400).int32(message.creepsStacked);
    }
    if (message.campsStacked !== 0) {
      writer.uint32(408).int32(message.campsStacked);
    }
    if (message.runePickups !== 0) {
      writer.uint32(416).int32(message.runePickups);
    }
    if (message.goldSpentOnSupport !== 0) {
      writer.uint32(424).int32(message.goldSpentOnSupport);
    }
    if (message.heroDamage !== 0) {
      writer.uint32(432).int32(message.heroDamage);
    }
    if (message.wardsPurchased !== 0) {
      writer.uint32(440).int32(message.wardsPurchased);
    }
    if (message.wardsDestroyed !== 0) {
      writer.uint32(448).int32(message.wardsDestroyed);
    }
    if (message.goldSpentOnConsumables !== 0) {
      writer.uint32(464).int32(message.goldSpentOnConsumables);
    }
    if (message.goldSpentOnItems !== 0) {
      writer.uint32(472).int32(message.goldSpentOnItems);
    }
    if (message.goldSpentOnBuybacks !== 0) {
      writer.uint32(480).int32(message.goldSpentOnBuybacks);
    }
    if (message.goldLostToDeath !== 0) {
      writer.uint32(488).int32(message.goldLostToDeath);
    }
    if (message.kills !== 0) {
      writer.uint32(496).int32(message.kills);
    }
    if (message.assists !== 0) {
      writer.uint32(504).int32(message.assists);
    }
    if (message.deaths !== 0) {
      writer.uint32(512).int32(message.deaths);
    }
    if (message.killStreak !== 0) {
      writer.uint32(520).int32(message.killStreak);
    }
    if (message.respawnSeconds !== 0) {
      writer.uint32(544).int32(message.respawnSeconds);
    }
    if (message.lastBuybackTime !== 0) {
      writer.uint32(552).int32(message.lastBuybackTime);
    }
    if (message.firstBloodClaimed === true) {
      writer.uint32(568).bool(message.firstBloodClaimed);
    }
    if (message.firstBloodGiven === true) {
      writer.uint32(576).bool(message.firstBloodGiven);
    }
    if (message.bountyRunes !== 0) {
      writer.uint32(584).int32(message.bountyRunes);
    }
    if (message.outpostsCaptured !== 0) {
      writer.uint32(592).int32(message.outpostsCaptured);
    }
    if (message.position !== undefined) {
      CScenarioPosition.encode(message.position, writer.uint32(602).fork()).ldelim();
    }
    for (const v of message.enemyKills) {
      CMsgDotaScenario_HeroHeroInt.encode(v!, writer.uint32(1202).fork()).ldelim();
    }
    for (const v of message.damageStats) {
      CMsgDotaScenario_DamageStatsByType.encode(v!, writer.uint32(1210).fork()).ldelim();
    }
    for (const v of message.abilities) {
      CMsgDotaScenario_HeroAbility.encode(v!, writer.uint32(1218).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDotaScenario_Hero {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDotaScenario_Hero();
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

          message.playerId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.teamId = reader.int32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.hero = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.totalXp = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.bkbChargesUsed = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.aeonChargesUsed = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.reliableGold = reader.int32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.unreliableGold = reader.int32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.totalEarnedGold = reader.int32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.sharedGold = reader.int32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.heroKillGold = reader.int32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.creepKillGold = reader.int32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.neutralKillGold = reader.int32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.courierGold = reader.int32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.bountyGold = reader.int32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.roshanGold = reader.int32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.buildingGold = reader.int32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.otherGold = reader.int32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.incomeGold = reader.int32();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.wardKillGold = reader.int32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.abilityGold = reader.int32();
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.denies = reader.int32();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.lastHits = reader.int32();
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.lastHitStreak = reader.int32();
          continue;
        case 32:
          if (tag != 256) {
            break;
          }

          message.lastHitMultikill = reader.int32();
          continue;
        case 33:
          if (tag != 264) {
            break;
          }

          message.nearbyCreepDeathCount = reader.int32();
          continue;
        case 34:
          if (tag != 272) {
            break;
          }

          message.claimedDenyCount = reader.int32();
          continue;
        case 35:
          if (tag != 280) {
            break;
          }

          message.claimedMissCount = reader.int32();
          continue;
        case 36:
          if (tag != 288) {
            break;
          }

          message.missCount = reader.int32();
          continue;
        case 40:
          if (tag != 325) {
            break;
          }

          message.buybackCooldownTime = reader.float();
          continue;
        case 41:
          if (tag != 333) {
            break;
          }

          message.buybackGoldLimitTime = reader.float();
          continue;
        case 44:
          if (tag != 357) {
            break;
          }

          message.stunDuration = reader.float();
          continue;
        case 45:
          if (tag != 365) {
            break;
          }

          message.healing = reader.float();
          continue;
        case 46:
          if (tag != 368) {
            break;
          }

          message.towerKills = reader.int32();
          continue;
        case 47:
          if (tag != 376) {
            break;
          }

          message.roshanKills = reader.int32();
          continue;
        case 48:
          if (tag != 384) {
            break;
          }

          message.observerWardsPlaced = reader.int32();
          continue;
        case 49:
          if (tag != 392) {
            break;
          }

          message.sentryWardsPlaced = reader.int32();
          continue;
        case 50:
          if (tag != 400) {
            break;
          }

          message.creepsStacked = reader.int32();
          continue;
        case 51:
          if (tag != 408) {
            break;
          }

          message.campsStacked = reader.int32();
          continue;
        case 52:
          if (tag != 416) {
            break;
          }

          message.runePickups = reader.int32();
          continue;
        case 53:
          if (tag != 424) {
            break;
          }

          message.goldSpentOnSupport = reader.int32();
          continue;
        case 54:
          if (tag != 432) {
            break;
          }

          message.heroDamage = reader.int32();
          continue;
        case 55:
          if (tag != 440) {
            break;
          }

          message.wardsPurchased = reader.int32();
          continue;
        case 56:
          if (tag != 448) {
            break;
          }

          message.wardsDestroyed = reader.int32();
          continue;
        case 58:
          if (tag != 464) {
            break;
          }

          message.goldSpentOnConsumables = reader.int32();
          continue;
        case 59:
          if (tag != 472) {
            break;
          }

          message.goldSpentOnItems = reader.int32();
          continue;
        case 60:
          if (tag != 480) {
            break;
          }

          message.goldSpentOnBuybacks = reader.int32();
          continue;
        case 61:
          if (tag != 488) {
            break;
          }

          message.goldLostToDeath = reader.int32();
          continue;
        case 62:
          if (tag != 496) {
            break;
          }

          message.kills = reader.int32();
          continue;
        case 63:
          if (tag != 504) {
            break;
          }

          message.assists = reader.int32();
          continue;
        case 64:
          if (tag != 512) {
            break;
          }

          message.deaths = reader.int32();
          continue;
        case 65:
          if (tag != 520) {
            break;
          }

          message.killStreak = reader.int32();
          continue;
        case 68:
          if (tag != 544) {
            break;
          }

          message.respawnSeconds = reader.int32();
          continue;
        case 69:
          if (tag != 552) {
            break;
          }

          message.lastBuybackTime = reader.int32();
          continue;
        case 71:
          if (tag != 568) {
            break;
          }

          message.firstBloodClaimed = reader.bool();
          continue;
        case 72:
          if (tag != 576) {
            break;
          }

          message.firstBloodGiven = reader.bool();
          continue;
        case 73:
          if (tag != 584) {
            break;
          }

          message.bountyRunes = reader.int32();
          continue;
        case 74:
          if (tag != 592) {
            break;
          }

          message.outpostsCaptured = reader.int32();
          continue;
        case 75:
          if (tag != 602) {
            break;
          }

          message.position = CScenarioPosition.decode(reader, reader.uint32());
          continue;
        case 150:
          if (tag != 1202) {
            break;
          }

          message.enemyKills.push(CMsgDotaScenario_HeroHeroInt.decode(reader, reader.uint32()));
          continue;
        case 151:
          if (tag != 1210) {
            break;
          }

          message.damageStats.push(CMsgDotaScenario_DamageStatsByType.decode(reader, reader.uint32()));
          continue;
        case 152:
          if (tag != 1218) {
            break;
          }

          message.abilities.push(CMsgDotaScenario_HeroAbility.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDotaScenario_Hero {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      hero: isSet(object.hero) ? String(object.hero) : "",
      totalXp: isSet(object.totalXp) ? Number(object.totalXp) : 0,
      bkbChargesUsed: isSet(object.bkbChargesUsed) ? Number(object.bkbChargesUsed) : 0,
      aeonChargesUsed: isSet(object.aeonChargesUsed) ? Number(object.aeonChargesUsed) : 0,
      reliableGold: isSet(object.reliableGold) ? Number(object.reliableGold) : 0,
      unreliableGold: isSet(object.unreliableGold) ? Number(object.unreliableGold) : 0,
      totalEarnedGold: isSet(object.totalEarnedGold) ? Number(object.totalEarnedGold) : 0,
      sharedGold: isSet(object.sharedGold) ? Number(object.sharedGold) : 0,
      heroKillGold: isSet(object.heroKillGold) ? Number(object.heroKillGold) : 0,
      creepKillGold: isSet(object.creepKillGold) ? Number(object.creepKillGold) : 0,
      neutralKillGold: isSet(object.neutralKillGold) ? Number(object.neutralKillGold) : 0,
      courierGold: isSet(object.courierGold) ? Number(object.courierGold) : 0,
      bountyGold: isSet(object.bountyGold) ? Number(object.bountyGold) : 0,
      roshanGold: isSet(object.roshanGold) ? Number(object.roshanGold) : 0,
      buildingGold: isSet(object.buildingGold) ? Number(object.buildingGold) : 0,
      otherGold: isSet(object.otherGold) ? Number(object.otherGold) : 0,
      incomeGold: isSet(object.incomeGold) ? Number(object.incomeGold) : 0,
      wardKillGold: isSet(object.wardKillGold) ? Number(object.wardKillGold) : 0,
      abilityGold: isSet(object.abilityGold) ? Number(object.abilityGold) : 0,
      denies: isSet(object.denies) ? Number(object.denies) : 0,
      lastHits: isSet(object.lastHits) ? Number(object.lastHits) : 0,
      lastHitStreak: isSet(object.lastHitStreak) ? Number(object.lastHitStreak) : 0,
      lastHitMultikill: isSet(object.lastHitMultikill) ? Number(object.lastHitMultikill) : 0,
      nearbyCreepDeathCount: isSet(object.nearbyCreepDeathCount) ? Number(object.nearbyCreepDeathCount) : 0,
      claimedDenyCount: isSet(object.claimedDenyCount) ? Number(object.claimedDenyCount) : 0,
      claimedMissCount: isSet(object.claimedMissCount) ? Number(object.claimedMissCount) : 0,
      missCount: isSet(object.missCount) ? Number(object.missCount) : 0,
      buybackCooldownTime: isSet(object.buybackCooldownTime) ? Number(object.buybackCooldownTime) : 0,
      buybackGoldLimitTime: isSet(object.buybackGoldLimitTime) ? Number(object.buybackGoldLimitTime) : 0,
      stunDuration: isSet(object.stunDuration) ? Number(object.stunDuration) : 0,
      healing: isSet(object.healing) ? Number(object.healing) : 0,
      towerKills: isSet(object.towerKills) ? Number(object.towerKills) : 0,
      roshanKills: isSet(object.roshanKills) ? Number(object.roshanKills) : 0,
      observerWardsPlaced: isSet(object.observerWardsPlaced) ? Number(object.observerWardsPlaced) : 0,
      sentryWardsPlaced: isSet(object.sentryWardsPlaced) ? Number(object.sentryWardsPlaced) : 0,
      creepsStacked: isSet(object.creepsStacked) ? Number(object.creepsStacked) : 0,
      campsStacked: isSet(object.campsStacked) ? Number(object.campsStacked) : 0,
      runePickups: isSet(object.runePickups) ? Number(object.runePickups) : 0,
      goldSpentOnSupport: isSet(object.goldSpentOnSupport) ? Number(object.goldSpentOnSupport) : 0,
      heroDamage: isSet(object.heroDamage) ? Number(object.heroDamage) : 0,
      wardsPurchased: isSet(object.wardsPurchased) ? Number(object.wardsPurchased) : 0,
      wardsDestroyed: isSet(object.wardsDestroyed) ? Number(object.wardsDestroyed) : 0,
      goldSpentOnConsumables: isSet(object.goldSpentOnConsumables) ? Number(object.goldSpentOnConsumables) : 0,
      goldSpentOnItems: isSet(object.goldSpentOnItems) ? Number(object.goldSpentOnItems) : 0,
      goldSpentOnBuybacks: isSet(object.goldSpentOnBuybacks) ? Number(object.goldSpentOnBuybacks) : 0,
      goldLostToDeath: isSet(object.goldLostToDeath) ? Number(object.goldLostToDeath) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      assists: isSet(object.assists) ? Number(object.assists) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      killStreak: isSet(object.killStreak) ? Number(object.killStreak) : 0,
      respawnSeconds: isSet(object.respawnSeconds) ? Number(object.respawnSeconds) : 0,
      lastBuybackTime: isSet(object.lastBuybackTime) ? Number(object.lastBuybackTime) : 0,
      firstBloodClaimed: isSet(object.firstBloodClaimed) ? Boolean(object.firstBloodClaimed) : false,
      firstBloodGiven: isSet(object.firstBloodGiven) ? Boolean(object.firstBloodGiven) : false,
      bountyRunes: isSet(object.bountyRunes) ? Number(object.bountyRunes) : 0,
      outpostsCaptured: isSet(object.outpostsCaptured) ? Number(object.outpostsCaptured) : 0,
      position: isSet(object.position) ? CScenarioPosition.fromJSON(object.position) : undefined,
      enemyKills: Array.isArray(object?.enemyKills)
        ? object.enemyKills.map((e: any) => CMsgDotaScenario_HeroHeroInt.fromJSON(e))
        : [],
      damageStats: Array.isArray(object?.damageStats)
        ? object.damageStats.map((e: any) => CMsgDotaScenario_DamageStatsByType.fromJSON(e))
        : [],
      abilities: Array.isArray(object?.abilities)
        ? object.abilities.map((e: any) => CMsgDotaScenario_HeroAbility.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDotaScenario_Hero): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.hero !== undefined && (obj.hero = message.hero);
    message.totalXp !== undefined && (obj.totalXp = Math.round(message.totalXp));
    message.bkbChargesUsed !== undefined && (obj.bkbChargesUsed = Math.round(message.bkbChargesUsed));
    message.aeonChargesUsed !== undefined && (obj.aeonChargesUsed = Math.round(message.aeonChargesUsed));
    message.reliableGold !== undefined && (obj.reliableGold = Math.round(message.reliableGold));
    message.unreliableGold !== undefined && (obj.unreliableGold = Math.round(message.unreliableGold));
    message.totalEarnedGold !== undefined && (obj.totalEarnedGold = Math.round(message.totalEarnedGold));
    message.sharedGold !== undefined && (obj.sharedGold = Math.round(message.sharedGold));
    message.heroKillGold !== undefined && (obj.heroKillGold = Math.round(message.heroKillGold));
    message.creepKillGold !== undefined && (obj.creepKillGold = Math.round(message.creepKillGold));
    message.neutralKillGold !== undefined && (obj.neutralKillGold = Math.round(message.neutralKillGold));
    message.courierGold !== undefined && (obj.courierGold = Math.round(message.courierGold));
    message.bountyGold !== undefined && (obj.bountyGold = Math.round(message.bountyGold));
    message.roshanGold !== undefined && (obj.roshanGold = Math.round(message.roshanGold));
    message.buildingGold !== undefined && (obj.buildingGold = Math.round(message.buildingGold));
    message.otherGold !== undefined && (obj.otherGold = Math.round(message.otherGold));
    message.incomeGold !== undefined && (obj.incomeGold = Math.round(message.incomeGold));
    message.wardKillGold !== undefined && (obj.wardKillGold = Math.round(message.wardKillGold));
    message.abilityGold !== undefined && (obj.abilityGold = Math.round(message.abilityGold));
    message.denies !== undefined && (obj.denies = Math.round(message.denies));
    message.lastHits !== undefined && (obj.lastHits = Math.round(message.lastHits));
    message.lastHitStreak !== undefined && (obj.lastHitStreak = Math.round(message.lastHitStreak));
    message.lastHitMultikill !== undefined && (obj.lastHitMultikill = Math.round(message.lastHitMultikill));
    message.nearbyCreepDeathCount !== undefined &&
      (obj.nearbyCreepDeathCount = Math.round(message.nearbyCreepDeathCount));
    message.claimedDenyCount !== undefined && (obj.claimedDenyCount = Math.round(message.claimedDenyCount));
    message.claimedMissCount !== undefined && (obj.claimedMissCount = Math.round(message.claimedMissCount));
    message.missCount !== undefined && (obj.missCount = Math.round(message.missCount));
    message.buybackCooldownTime !== undefined && (obj.buybackCooldownTime = message.buybackCooldownTime);
    message.buybackGoldLimitTime !== undefined && (obj.buybackGoldLimitTime = message.buybackGoldLimitTime);
    message.stunDuration !== undefined && (obj.stunDuration = message.stunDuration);
    message.healing !== undefined && (obj.healing = message.healing);
    message.towerKills !== undefined && (obj.towerKills = Math.round(message.towerKills));
    message.roshanKills !== undefined && (obj.roshanKills = Math.round(message.roshanKills));
    message.observerWardsPlaced !== undefined && (obj.observerWardsPlaced = Math.round(message.observerWardsPlaced));
    message.sentryWardsPlaced !== undefined && (obj.sentryWardsPlaced = Math.round(message.sentryWardsPlaced));
    message.creepsStacked !== undefined && (obj.creepsStacked = Math.round(message.creepsStacked));
    message.campsStacked !== undefined && (obj.campsStacked = Math.round(message.campsStacked));
    message.runePickups !== undefined && (obj.runePickups = Math.round(message.runePickups));
    message.goldSpentOnSupport !== undefined && (obj.goldSpentOnSupport = Math.round(message.goldSpentOnSupport));
    message.heroDamage !== undefined && (obj.heroDamage = Math.round(message.heroDamage));
    message.wardsPurchased !== undefined && (obj.wardsPurchased = Math.round(message.wardsPurchased));
    message.wardsDestroyed !== undefined && (obj.wardsDestroyed = Math.round(message.wardsDestroyed));
    message.goldSpentOnConsumables !== undefined &&
      (obj.goldSpentOnConsumables = Math.round(message.goldSpentOnConsumables));
    message.goldSpentOnItems !== undefined && (obj.goldSpentOnItems = Math.round(message.goldSpentOnItems));
    message.goldSpentOnBuybacks !== undefined && (obj.goldSpentOnBuybacks = Math.round(message.goldSpentOnBuybacks));
    message.goldLostToDeath !== undefined && (obj.goldLostToDeath = Math.round(message.goldLostToDeath));
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.assists !== undefined && (obj.assists = Math.round(message.assists));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.killStreak !== undefined && (obj.killStreak = Math.round(message.killStreak));
    message.respawnSeconds !== undefined && (obj.respawnSeconds = Math.round(message.respawnSeconds));
    message.lastBuybackTime !== undefined && (obj.lastBuybackTime = Math.round(message.lastBuybackTime));
    message.firstBloodClaimed !== undefined && (obj.firstBloodClaimed = message.firstBloodClaimed);
    message.firstBloodGiven !== undefined && (obj.firstBloodGiven = message.firstBloodGiven);
    message.bountyRunes !== undefined && (obj.bountyRunes = Math.round(message.bountyRunes));
    message.outpostsCaptured !== undefined && (obj.outpostsCaptured = Math.round(message.outpostsCaptured));
    message.position !== undefined &&
      (obj.position = message.position ? CScenarioPosition.toJSON(message.position) : undefined);
    if (message.enemyKills) {
      obj.enemyKills = message.enemyKills.map((e) => e ? CMsgDotaScenario_HeroHeroInt.toJSON(e) : undefined);
    } else {
      obj.enemyKills = [];
    }
    if (message.damageStats) {
      obj.damageStats = message.damageStats.map((e) => e ? CMsgDotaScenario_DamageStatsByType.toJSON(e) : undefined);
    } else {
      obj.damageStats = [];
    }
    if (message.abilities) {
      obj.abilities = message.abilities.map((e) => e ? CMsgDotaScenario_HeroAbility.toJSON(e) : undefined);
    } else {
      obj.abilities = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgDotaScenario_Hero>): CMsgDotaScenario_Hero {
    return CMsgDotaScenario_Hero.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDotaScenario_Hero>): CMsgDotaScenario_Hero {
    const message = createBaseCMsgDotaScenario_Hero();
    message.steamId = object.steamId ?? "0";
    message.playerId = object.playerId ?? 0;
    message.teamId = object.teamId ?? 0;
    message.hero = object.hero ?? "";
    message.totalXp = object.totalXp ?? 0;
    message.bkbChargesUsed = object.bkbChargesUsed ?? 0;
    message.aeonChargesUsed = object.aeonChargesUsed ?? 0;
    message.reliableGold = object.reliableGold ?? 0;
    message.unreliableGold = object.unreliableGold ?? 0;
    message.totalEarnedGold = object.totalEarnedGold ?? 0;
    message.sharedGold = object.sharedGold ?? 0;
    message.heroKillGold = object.heroKillGold ?? 0;
    message.creepKillGold = object.creepKillGold ?? 0;
    message.neutralKillGold = object.neutralKillGold ?? 0;
    message.courierGold = object.courierGold ?? 0;
    message.bountyGold = object.bountyGold ?? 0;
    message.roshanGold = object.roshanGold ?? 0;
    message.buildingGold = object.buildingGold ?? 0;
    message.otherGold = object.otherGold ?? 0;
    message.incomeGold = object.incomeGold ?? 0;
    message.wardKillGold = object.wardKillGold ?? 0;
    message.abilityGold = object.abilityGold ?? 0;
    message.denies = object.denies ?? 0;
    message.lastHits = object.lastHits ?? 0;
    message.lastHitStreak = object.lastHitStreak ?? 0;
    message.lastHitMultikill = object.lastHitMultikill ?? 0;
    message.nearbyCreepDeathCount = object.nearbyCreepDeathCount ?? 0;
    message.claimedDenyCount = object.claimedDenyCount ?? 0;
    message.claimedMissCount = object.claimedMissCount ?? 0;
    message.missCount = object.missCount ?? 0;
    message.buybackCooldownTime = object.buybackCooldownTime ?? 0;
    message.buybackGoldLimitTime = object.buybackGoldLimitTime ?? 0;
    message.stunDuration = object.stunDuration ?? 0;
    message.healing = object.healing ?? 0;
    message.towerKills = object.towerKills ?? 0;
    message.roshanKills = object.roshanKills ?? 0;
    message.observerWardsPlaced = object.observerWardsPlaced ?? 0;
    message.sentryWardsPlaced = object.sentryWardsPlaced ?? 0;
    message.creepsStacked = object.creepsStacked ?? 0;
    message.campsStacked = object.campsStacked ?? 0;
    message.runePickups = object.runePickups ?? 0;
    message.goldSpentOnSupport = object.goldSpentOnSupport ?? 0;
    message.heroDamage = object.heroDamage ?? 0;
    message.wardsPurchased = object.wardsPurchased ?? 0;
    message.wardsDestroyed = object.wardsDestroyed ?? 0;
    message.goldSpentOnConsumables = object.goldSpentOnConsumables ?? 0;
    message.goldSpentOnItems = object.goldSpentOnItems ?? 0;
    message.goldSpentOnBuybacks = object.goldSpentOnBuybacks ?? 0;
    message.goldLostToDeath = object.goldLostToDeath ?? 0;
    message.kills = object.kills ?? 0;
    message.assists = object.assists ?? 0;
    message.deaths = object.deaths ?? 0;
    message.killStreak = object.killStreak ?? 0;
    message.respawnSeconds = object.respawnSeconds ?? 0;
    message.lastBuybackTime = object.lastBuybackTime ?? 0;
    message.firstBloodClaimed = object.firstBloodClaimed ?? false;
    message.firstBloodGiven = object.firstBloodGiven ?? false;
    message.bountyRunes = object.bountyRunes ?? 0;
    message.outpostsCaptured = object.outpostsCaptured ?? 0;
    message.position = (object.position !== undefined && object.position !== null)
      ? CScenarioPosition.fromPartial(object.position)
      : undefined;
    message.enemyKills = object.enemyKills?.map((e) => CMsgDotaScenario_HeroHeroInt.fromPartial(e)) || [];
    message.damageStats = object.damageStats?.map((e) => CMsgDotaScenario_DamageStatsByType.fromPartial(e)) || [];
    message.abilities = object.abilities?.map((e) => CMsgDotaScenario_HeroAbility.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgDotaScenario_Stock(): CMsgDotaScenario_Stock {
  return { name: "", teamNumber: 0, playerId: 0, currentStock: 0, cooldown: 0, bonusStock: 0 };
}

export const CMsgDotaScenario_Stock = {
  encode(message: CMsgDotaScenario_Stock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.teamNumber !== 0) {
      writer.uint32(16).int32(message.teamNumber);
    }
    if (message.playerId !== 0) {
      writer.uint32(24).int32(message.playerId);
    }
    if (message.currentStock !== 0) {
      writer.uint32(32).int32(message.currentStock);
    }
    if (message.cooldown !== 0) {
      writer.uint32(45).float(message.cooldown);
    }
    if (message.bonusStock !== 0) {
      writer.uint32(48).int32(message.bonusStock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDotaScenario_Stock {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDotaScenario_Stock();
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

          message.teamNumber = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.playerId = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.currentStock = reader.int32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.cooldown = reader.float();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.bonusStock = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDotaScenario_Stock {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      teamNumber: isSet(object.teamNumber) ? Number(object.teamNumber) : 0,
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      currentStock: isSet(object.currentStock) ? Number(object.currentStock) : 0,
      cooldown: isSet(object.cooldown) ? Number(object.cooldown) : 0,
      bonusStock: isSet(object.bonusStock) ? Number(object.bonusStock) : 0,
    };
  },

  toJSON(message: CMsgDotaScenario_Stock): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.teamNumber !== undefined && (obj.teamNumber = Math.round(message.teamNumber));
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.currentStock !== undefined && (obj.currentStock = Math.round(message.currentStock));
    message.cooldown !== undefined && (obj.cooldown = message.cooldown);
    message.bonusStock !== undefined && (obj.bonusStock = Math.round(message.bonusStock));
    return obj;
  },

  create(base?: DeepPartial<CMsgDotaScenario_Stock>): CMsgDotaScenario_Stock {
    return CMsgDotaScenario_Stock.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDotaScenario_Stock>): CMsgDotaScenario_Stock {
    const message = createBaseCMsgDotaScenario_Stock();
    message.name = object.name ?? "";
    message.teamNumber = object.teamNumber ?? 0;
    message.playerId = object.playerId ?? 0;
    message.currentStock = object.currentStock ?? 0;
    message.cooldown = object.cooldown ?? 0;
    message.bonusStock = object.bonusStock ?? 0;
    return message;
  },
};

function createBaseCMsgDotaScenario_Building(): CMsgDotaScenario_Building {
  return { entityName: "", entityClass: "", teamId: 0, isDestroyed: false, healthFrac: 0 };
}

export const CMsgDotaScenario_Building = {
  encode(message: CMsgDotaScenario_Building, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityName !== "") {
      writer.uint32(10).string(message.entityName);
    }
    if (message.entityClass !== "") {
      writer.uint32(18).string(message.entityClass);
    }
    if (message.teamId !== 0) {
      writer.uint32(24).int32(message.teamId);
    }
    if (message.isDestroyed === true) {
      writer.uint32(32).bool(message.isDestroyed);
    }
    if (message.healthFrac !== 0) {
      writer.uint32(45).float(message.healthFrac);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDotaScenario_Building {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDotaScenario_Building();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.entityName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.entityClass = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.teamId = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.isDestroyed = reader.bool();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.healthFrac = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDotaScenario_Building {
    return {
      entityName: isSet(object.entityName) ? String(object.entityName) : "",
      entityClass: isSet(object.entityClass) ? String(object.entityClass) : "",
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      isDestroyed: isSet(object.isDestroyed) ? Boolean(object.isDestroyed) : false,
      healthFrac: isSet(object.healthFrac) ? Number(object.healthFrac) : 0,
    };
  },

  toJSON(message: CMsgDotaScenario_Building): unknown {
    const obj: any = {};
    message.entityName !== undefined && (obj.entityName = message.entityName);
    message.entityClass !== undefined && (obj.entityClass = message.entityClass);
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.isDestroyed !== undefined && (obj.isDestroyed = message.isDestroyed);
    message.healthFrac !== undefined && (obj.healthFrac = message.healthFrac);
    return obj;
  },

  create(base?: DeepPartial<CMsgDotaScenario_Building>): CMsgDotaScenario_Building {
    return CMsgDotaScenario_Building.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDotaScenario_Building>): CMsgDotaScenario_Building {
    const message = createBaseCMsgDotaScenario_Building();
    message.entityName = object.entityName ?? "";
    message.entityClass = object.entityClass ?? "";
    message.teamId = object.teamId ?? 0;
    message.isDestroyed = object.isDestroyed ?? false;
    message.healthFrac = object.healthFrac ?? 0;
    return message;
  },
};

function createBaseCMsgDotaScenario_Entity(): CMsgDotaScenario_Entity {
  return { courier: undefined, npc: undefined, spiritBear: undefined, droppedItem: undefined };
}

export const CMsgDotaScenario_Entity = {
  encode(message: CMsgDotaScenario_Entity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.courier !== undefined) {
      CScenarioEntCourier.encode(message.courier, writer.uint32(10).fork()).ldelim();
    }
    if (message.npc !== undefined) {
      CScenarioEntNPC.encode(message.npc, writer.uint32(18).fork()).ldelim();
    }
    if (message.spiritBear !== undefined) {
      CScenarioEntSpiritBear.encode(message.spiritBear, writer.uint32(26).fork()).ldelim();
    }
    if (message.droppedItem !== undefined) {
      CScenarioEntDroppedItem.encode(message.droppedItem, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDotaScenario_Entity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDotaScenario_Entity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.courier = CScenarioEntCourier.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.npc = CScenarioEntNPC.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.spiritBear = CScenarioEntSpiritBear.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.droppedItem = CScenarioEntDroppedItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDotaScenario_Entity {
    return {
      courier: isSet(object.courier) ? CScenarioEntCourier.fromJSON(object.courier) : undefined,
      npc: isSet(object.npc) ? CScenarioEntNPC.fromJSON(object.npc) : undefined,
      spiritBear: isSet(object.spiritBear) ? CScenarioEntSpiritBear.fromJSON(object.spiritBear) : undefined,
      droppedItem: isSet(object.droppedItem) ? CScenarioEntDroppedItem.fromJSON(object.droppedItem) : undefined,
    };
  },

  toJSON(message: CMsgDotaScenario_Entity): unknown {
    const obj: any = {};
    message.courier !== undefined &&
      (obj.courier = message.courier ? CScenarioEntCourier.toJSON(message.courier) : undefined);
    message.npc !== undefined && (obj.npc = message.npc ? CScenarioEntNPC.toJSON(message.npc) : undefined);
    message.spiritBear !== undefined &&
      (obj.spiritBear = message.spiritBear ? CScenarioEntSpiritBear.toJSON(message.spiritBear) : undefined);
    message.droppedItem !== undefined &&
      (obj.droppedItem = message.droppedItem ? CScenarioEntDroppedItem.toJSON(message.droppedItem) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgDotaScenario_Entity>): CMsgDotaScenario_Entity {
    return CMsgDotaScenario_Entity.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDotaScenario_Entity>): CMsgDotaScenario_Entity {
    const message = createBaseCMsgDotaScenario_Entity();
    message.courier = (object.courier !== undefined && object.courier !== null)
      ? CScenarioEntCourier.fromPartial(object.courier)
      : undefined;
    message.npc = (object.npc !== undefined && object.npc !== null)
      ? CScenarioEntNPC.fromPartial(object.npc)
      : undefined;
    message.spiritBear = (object.spiritBear !== undefined && object.spiritBear !== null)
      ? CScenarioEntSpiritBear.fromPartial(object.spiritBear)
      : undefined;
    message.droppedItem = (object.droppedItem !== undefined && object.droppedItem !== null)
      ? CScenarioEntDroppedItem.fromPartial(object.droppedItem)
      : undefined;
    return message;
  },
};

function createBaseCMsgDotaScenario_Item(): CMsgDotaScenario_Item {
  return {
    name: "",
    location: undefined,
    ownerId: 0,
    itemSlot: 0,
    neutralDropTeam: 0,
    charges: 0,
    secondaryCharges: 0,
    lifetime: 0,
    storedRuneType: 0,
  };
}

export const CMsgDotaScenario_Item = {
  encode(message: CMsgDotaScenario_Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.location !== undefined) {
      CMsgDotaScenario_EntityRef.encode(message.location, writer.uint32(18).fork()).ldelim();
    }
    if (message.ownerId !== 0) {
      writer.uint32(24).int32(message.ownerId);
    }
    if (message.itemSlot !== 0) {
      writer.uint32(32).int32(message.itemSlot);
    }
    if (message.neutralDropTeam !== 0) {
      writer.uint32(40).int32(message.neutralDropTeam);
    }
    if (message.charges !== 0) {
      writer.uint32(48).int32(message.charges);
    }
    if (message.secondaryCharges !== 0) {
      writer.uint32(56).int32(message.secondaryCharges);
    }
    if (message.lifetime !== 0) {
      writer.uint32(69).float(message.lifetime);
    }
    if (message.storedRuneType !== 0) {
      writer.uint32(72).int32(message.storedRuneType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDotaScenario_Item {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDotaScenario_Item();
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

          message.location = CMsgDotaScenario_EntityRef.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.ownerId = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.itemSlot = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.neutralDropTeam = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.charges = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.secondaryCharges = reader.int32();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.lifetime = reader.float();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.storedRuneType = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDotaScenario_Item {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      location: isSet(object.location) ? CMsgDotaScenario_EntityRef.fromJSON(object.location) : undefined,
      ownerId: isSet(object.ownerId) ? Number(object.ownerId) : 0,
      itemSlot: isSet(object.itemSlot) ? Number(object.itemSlot) : 0,
      neutralDropTeam: isSet(object.neutralDropTeam) ? Number(object.neutralDropTeam) : 0,
      charges: isSet(object.charges) ? Number(object.charges) : 0,
      secondaryCharges: isSet(object.secondaryCharges) ? Number(object.secondaryCharges) : 0,
      lifetime: isSet(object.lifetime) ? Number(object.lifetime) : 0,
      storedRuneType: isSet(object.storedRuneType) ? Number(object.storedRuneType) : 0,
    };
  },

  toJSON(message: CMsgDotaScenario_Item): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.location !== undefined &&
      (obj.location = message.location ? CMsgDotaScenario_EntityRef.toJSON(message.location) : undefined);
    message.ownerId !== undefined && (obj.ownerId = Math.round(message.ownerId));
    message.itemSlot !== undefined && (obj.itemSlot = Math.round(message.itemSlot));
    message.neutralDropTeam !== undefined && (obj.neutralDropTeam = Math.round(message.neutralDropTeam));
    message.charges !== undefined && (obj.charges = Math.round(message.charges));
    message.secondaryCharges !== undefined && (obj.secondaryCharges = Math.round(message.secondaryCharges));
    message.lifetime !== undefined && (obj.lifetime = message.lifetime);
    message.storedRuneType !== undefined && (obj.storedRuneType = Math.round(message.storedRuneType));
    return obj;
  },

  create(base?: DeepPartial<CMsgDotaScenario_Item>): CMsgDotaScenario_Item {
    return CMsgDotaScenario_Item.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDotaScenario_Item>): CMsgDotaScenario_Item {
    const message = createBaseCMsgDotaScenario_Item();
    message.name = object.name ?? "";
    message.location = (object.location !== undefined && object.location !== null)
      ? CMsgDotaScenario_EntityRef.fromPartial(object.location)
      : undefined;
    message.ownerId = object.ownerId ?? 0;
    message.itemSlot = object.itemSlot ?? 0;
    message.neutralDropTeam = object.neutralDropTeam ?? 0;
    message.charges = object.charges ?? 0;
    message.secondaryCharges = object.secondaryCharges ?? 0;
    message.lifetime = object.lifetime ?? 0;
    message.storedRuneType = object.storedRuneType ?? 0;
    return message;
  },
};

function createBaseCMsgDotaScenario_Modifier(): CMsgDotaScenario_Modifier {
  return {
    name: "",
    parent: undefined,
    caster: undefined,
    ability: undefined,
    duration: 0,
    lifetimeRemaining: 0,
    stackCount: 0,
    createEvenIfExisting: false,
    createWithoutCaster: false,
    createWithoutAbility: false,
    moonshardConsumedBonus: 0,
    moonshardConsumedBonusNightVision: 0,
    wardtruesightRange: 0,
    ultimateScepterConsumedAlchemistBonusAllStats: 0,
    ultimateScepterConsumedAlchemistBonusHealth: 0,
    ultimateScepterConsumedAlchemistBonusMana: 0,
  };
}

export const CMsgDotaScenario_Modifier = {
  encode(message: CMsgDotaScenario_Modifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.parent !== undefined) {
      CMsgDotaScenario_EntityRef.encode(message.parent, writer.uint32(18).fork()).ldelim();
    }
    if (message.caster !== undefined) {
      CMsgDotaScenario_EntityRef.encode(message.caster, writer.uint32(26).fork()).ldelim();
    }
    if (message.ability !== undefined) {
      CMsgDotaScenario_EntityRef.encode(message.ability, writer.uint32(34).fork()).ldelim();
    }
    if (message.duration !== 0) {
      writer.uint32(45).float(message.duration);
    }
    if (message.lifetimeRemaining !== 0) {
      writer.uint32(53).float(message.lifetimeRemaining);
    }
    if (message.stackCount !== 0) {
      writer.uint32(56).int32(message.stackCount);
    }
    if (message.createEvenIfExisting === true) {
      writer.uint32(64).bool(message.createEvenIfExisting);
    }
    if (message.createWithoutCaster === true) {
      writer.uint32(72).bool(message.createWithoutCaster);
    }
    if (message.createWithoutAbility === true) {
      writer.uint32(80).bool(message.createWithoutAbility);
    }
    if (message.moonshardConsumedBonus !== 0) {
      writer.uint32(800).int32(message.moonshardConsumedBonus);
    }
    if (message.moonshardConsumedBonusNightVision !== 0) {
      writer.uint32(808).int32(message.moonshardConsumedBonusNightVision);
    }
    if (message.wardtruesightRange !== 0) {
      writer.uint32(880).int32(message.wardtruesightRange);
    }
    if (message.ultimateScepterConsumedAlchemistBonusAllStats !== 0) {
      writer.uint32(960).int32(message.ultimateScepterConsumedAlchemistBonusAllStats);
    }
    if (message.ultimateScepterConsumedAlchemistBonusHealth !== 0) {
      writer.uint32(968).int32(message.ultimateScepterConsumedAlchemistBonusHealth);
    }
    if (message.ultimateScepterConsumedAlchemistBonusMana !== 0) {
      writer.uint32(976).int32(message.ultimateScepterConsumedAlchemistBonusMana);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDotaScenario_Modifier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDotaScenario_Modifier();
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

          message.parent = CMsgDotaScenario_EntityRef.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.caster = CMsgDotaScenario_EntityRef.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.ability = CMsgDotaScenario_EntityRef.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.duration = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.lifetimeRemaining = reader.float();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.stackCount = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.createEvenIfExisting = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.createWithoutCaster = reader.bool();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.createWithoutAbility = reader.bool();
          continue;
        case 100:
          if (tag != 800) {
            break;
          }

          message.moonshardConsumedBonus = reader.int32();
          continue;
        case 101:
          if (tag != 808) {
            break;
          }

          message.moonshardConsumedBonusNightVision = reader.int32();
          continue;
        case 110:
          if (tag != 880) {
            break;
          }

          message.wardtruesightRange = reader.int32();
          continue;
        case 120:
          if (tag != 960) {
            break;
          }

          message.ultimateScepterConsumedAlchemistBonusAllStats = reader.int32();
          continue;
        case 121:
          if (tag != 968) {
            break;
          }

          message.ultimateScepterConsumedAlchemistBonusHealth = reader.int32();
          continue;
        case 122:
          if (tag != 976) {
            break;
          }

          message.ultimateScepterConsumedAlchemistBonusMana = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgDotaScenario_Modifier {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      parent: isSet(object.parent) ? CMsgDotaScenario_EntityRef.fromJSON(object.parent) : undefined,
      caster: isSet(object.caster) ? CMsgDotaScenario_EntityRef.fromJSON(object.caster) : undefined,
      ability: isSet(object.ability) ? CMsgDotaScenario_EntityRef.fromJSON(object.ability) : undefined,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      lifetimeRemaining: isSet(object.lifetimeRemaining) ? Number(object.lifetimeRemaining) : 0,
      stackCount: isSet(object.stackCount) ? Number(object.stackCount) : 0,
      createEvenIfExisting: isSet(object.createEvenIfExisting) ? Boolean(object.createEvenIfExisting) : false,
      createWithoutCaster: isSet(object.createWithoutCaster) ? Boolean(object.createWithoutCaster) : false,
      createWithoutAbility: isSet(object.createWithoutAbility) ? Boolean(object.createWithoutAbility) : false,
      moonshardConsumedBonus: isSet(object.moonshardConsumedBonus) ? Number(object.moonshardConsumedBonus) : 0,
      moonshardConsumedBonusNightVision: isSet(object.moonshardConsumedBonusNightVision)
        ? Number(object.moonshardConsumedBonusNightVision)
        : 0,
      wardtruesightRange: isSet(object.wardtruesightRange) ? Number(object.wardtruesightRange) : 0,
      ultimateScepterConsumedAlchemistBonusAllStats: isSet(object.ultimateScepterConsumedAlchemistBonusAllStats)
        ? Number(object.ultimateScepterConsumedAlchemistBonusAllStats)
        : 0,
      ultimateScepterConsumedAlchemistBonusHealth: isSet(object.ultimateScepterConsumedAlchemistBonusHealth)
        ? Number(object.ultimateScepterConsumedAlchemistBonusHealth)
        : 0,
      ultimateScepterConsumedAlchemistBonusMana: isSet(object.ultimateScepterConsumedAlchemistBonusMana)
        ? Number(object.ultimateScepterConsumedAlchemistBonusMana)
        : 0,
    };
  },

  toJSON(message: CMsgDotaScenario_Modifier): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.parent !== undefined &&
      (obj.parent = message.parent ? CMsgDotaScenario_EntityRef.toJSON(message.parent) : undefined);
    message.caster !== undefined &&
      (obj.caster = message.caster ? CMsgDotaScenario_EntityRef.toJSON(message.caster) : undefined);
    message.ability !== undefined &&
      (obj.ability = message.ability ? CMsgDotaScenario_EntityRef.toJSON(message.ability) : undefined);
    message.duration !== undefined && (obj.duration = message.duration);
    message.lifetimeRemaining !== undefined && (obj.lifetimeRemaining = message.lifetimeRemaining);
    message.stackCount !== undefined && (obj.stackCount = Math.round(message.stackCount));
    message.createEvenIfExisting !== undefined && (obj.createEvenIfExisting = message.createEvenIfExisting);
    message.createWithoutCaster !== undefined && (obj.createWithoutCaster = message.createWithoutCaster);
    message.createWithoutAbility !== undefined && (obj.createWithoutAbility = message.createWithoutAbility);
    message.moonshardConsumedBonus !== undefined &&
      (obj.moonshardConsumedBonus = Math.round(message.moonshardConsumedBonus));
    message.moonshardConsumedBonusNightVision !== undefined &&
      (obj.moonshardConsumedBonusNightVision = Math.round(message.moonshardConsumedBonusNightVision));
    message.wardtruesightRange !== undefined && (obj.wardtruesightRange = Math.round(message.wardtruesightRange));
    message.ultimateScepterConsumedAlchemistBonusAllStats !== undefined &&
      (obj.ultimateScepterConsumedAlchemistBonusAllStats = Math.round(
        message.ultimateScepterConsumedAlchemistBonusAllStats,
      ));
    message.ultimateScepterConsumedAlchemistBonusHealth !== undefined &&
      (obj.ultimateScepterConsumedAlchemistBonusHealth = Math.round(
        message.ultimateScepterConsumedAlchemistBonusHealth,
      ));
    message.ultimateScepterConsumedAlchemistBonusMana !== undefined &&
      (obj.ultimateScepterConsumedAlchemistBonusMana = Math.round(message.ultimateScepterConsumedAlchemistBonusMana));
    return obj;
  },

  create(base?: DeepPartial<CMsgDotaScenario_Modifier>): CMsgDotaScenario_Modifier {
    return CMsgDotaScenario_Modifier.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgDotaScenario_Modifier>): CMsgDotaScenario_Modifier {
    const message = createBaseCMsgDotaScenario_Modifier();
    message.name = object.name ?? "";
    message.parent = (object.parent !== undefined && object.parent !== null)
      ? CMsgDotaScenario_EntityRef.fromPartial(object.parent)
      : undefined;
    message.caster = (object.caster !== undefined && object.caster !== null)
      ? CMsgDotaScenario_EntityRef.fromPartial(object.caster)
      : undefined;
    message.ability = (object.ability !== undefined && object.ability !== null)
      ? CMsgDotaScenario_EntityRef.fromPartial(object.ability)
      : undefined;
    message.duration = object.duration ?? 0;
    message.lifetimeRemaining = object.lifetimeRemaining ?? 0;
    message.stackCount = object.stackCount ?? 0;
    message.createEvenIfExisting = object.createEvenIfExisting ?? false;
    message.createWithoutCaster = object.createWithoutCaster ?? false;
    message.createWithoutAbility = object.createWithoutAbility ?? false;
    message.moonshardConsumedBonus = object.moonshardConsumedBonus ?? 0;
    message.moonshardConsumedBonusNightVision = object.moonshardConsumedBonusNightVision ?? 0;
    message.wardtruesightRange = object.wardtruesightRange ?? 0;
    message.ultimateScepterConsumedAlchemistBonusAllStats = object.ultimateScepterConsumedAlchemistBonusAllStats ?? 0;
    message.ultimateScepterConsumedAlchemistBonusHealth = object.ultimateScepterConsumedAlchemistBonusHealth ?? 0;
    message.ultimateScepterConsumedAlchemistBonusMana = object.ultimateScepterConsumedAlchemistBonusMana ?? 0;
    return message;
  },
};

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
