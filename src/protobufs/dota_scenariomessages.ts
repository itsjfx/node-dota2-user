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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
