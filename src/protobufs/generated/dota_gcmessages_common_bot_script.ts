/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface CMsgBotWorldState {
  teamId: number;
  gameTime: number;
  dotaTime: number;
  gameState: number;
  heroPickState: number;
  timeOfDay: number;
  glyphCooldown: number;
  glyphCooldownEnemy: number;
  players: CMsgBotWorldState_Player[];
  units: CMsgBotWorldState_Unit[];
  droppedItems: CMsgBotWorldState_DroppedItem[];
  droppedItemsDeltas: number[];
  runeInfos: CMsgBotWorldState_RuneInfo[];
  runeInfosDeltas: number[];
  incomingTeleports: CMsgBotWorldState_TeleportInfo[];
  linearProjectiles: CMsgBotWorldState_LinearProjectile[];
  avoidanceZones: CMsgBotWorldState_AvoidanceZone[];
  couriers: CMsgBotWorldState_Courier[];
  abilityEvents: CMsgBotWorldState_EventAbility[];
  damageEvents: CMsgBotWorldState_EventDamage[];
  courierKilledEvents: CMsgBotWorldState_EventCourierKilled[];
  roshanKilledEvents: CMsgBotWorldState_EventRoshanKilled[];
  treeEvents: CMsgBotWorldState_EventTree[];
}

export enum CMsgBotWorldState_UnitType {
  INVALID = 0,
  HERO = 1,
  CREEP_HERO = 2,
  LANE_CREEP = 3,
  JUNGLE_CREEP = 4,
  ROSHAN = 5,
  TOWER = 6,
  BARRACKS = 7,
  SHRINE = 8,
  FORT = 9,
  BUILDING = 10,
  COURIER = 11,
  WARD = 12,
}

export function cMsgBotWorldState_UnitTypeFromJSON(object: any): CMsgBotWorldState_UnitType {
  switch (object) {
    case 0:
    case "INVALID":
      return CMsgBotWorldState_UnitType.INVALID;
    case 1:
    case "HERO":
      return CMsgBotWorldState_UnitType.HERO;
    case 2:
    case "CREEP_HERO":
      return CMsgBotWorldState_UnitType.CREEP_HERO;
    case 3:
    case "LANE_CREEP":
      return CMsgBotWorldState_UnitType.LANE_CREEP;
    case 4:
    case "JUNGLE_CREEP":
      return CMsgBotWorldState_UnitType.JUNGLE_CREEP;
    case 5:
    case "ROSHAN":
      return CMsgBotWorldState_UnitType.ROSHAN;
    case 6:
    case "TOWER":
      return CMsgBotWorldState_UnitType.TOWER;
    case 7:
    case "BARRACKS":
      return CMsgBotWorldState_UnitType.BARRACKS;
    case 8:
    case "SHRINE":
      return CMsgBotWorldState_UnitType.SHRINE;
    case 9:
    case "FORT":
      return CMsgBotWorldState_UnitType.FORT;
    case 10:
    case "BUILDING":
      return CMsgBotWorldState_UnitType.BUILDING;
    case 11:
    case "COURIER":
      return CMsgBotWorldState_UnitType.COURIER;
    case 12:
    case "WARD":
      return CMsgBotWorldState_UnitType.WARD;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgBotWorldState_UnitType");
  }
}

export function cMsgBotWorldState_UnitTypeToJSON(object: CMsgBotWorldState_UnitType): string {
  switch (object) {
    case CMsgBotWorldState_UnitType.INVALID:
      return "INVALID";
    case CMsgBotWorldState_UnitType.HERO:
      return "HERO";
    case CMsgBotWorldState_UnitType.CREEP_HERO:
      return "CREEP_HERO";
    case CMsgBotWorldState_UnitType.LANE_CREEP:
      return "LANE_CREEP";
    case CMsgBotWorldState_UnitType.JUNGLE_CREEP:
      return "JUNGLE_CREEP";
    case CMsgBotWorldState_UnitType.ROSHAN:
      return "ROSHAN";
    case CMsgBotWorldState_UnitType.TOWER:
      return "TOWER";
    case CMsgBotWorldState_UnitType.BARRACKS:
      return "BARRACKS";
    case CMsgBotWorldState_UnitType.SHRINE:
      return "SHRINE";
    case CMsgBotWorldState_UnitType.FORT:
      return "FORT";
    case CMsgBotWorldState_UnitType.BUILDING:
      return "BUILDING";
    case CMsgBotWorldState_UnitType.COURIER:
      return "COURIER";
    case CMsgBotWorldState_UnitType.WARD:
      return "WARD";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CMsgBotWorldState_UnitType");
  }
}

export enum CMsgBotWorldState_CourierState {
  COURIER_STATE_INIT = -1,
  COURIER_STATE_IDLE = 0,
  COURIER_STATE_AT_BASE = 1,
  COURIER_STATE_MOVING = 2,
  COURIER_STATE_DELIVERING_ITEMS = 3,
  COURIER_STATE_RETURNING_TO_BASE = 4,
  COURIER_STATE_DEAD = 5,
}

export function cMsgBotWorldState_CourierStateFromJSON(object: any): CMsgBotWorldState_CourierState {
  switch (object) {
    case -1:
    case "COURIER_STATE_INIT":
      return CMsgBotWorldState_CourierState.COURIER_STATE_INIT;
    case 0:
    case "COURIER_STATE_IDLE":
      return CMsgBotWorldState_CourierState.COURIER_STATE_IDLE;
    case 1:
    case "COURIER_STATE_AT_BASE":
      return CMsgBotWorldState_CourierState.COURIER_STATE_AT_BASE;
    case 2:
    case "COURIER_STATE_MOVING":
      return CMsgBotWorldState_CourierState.COURIER_STATE_MOVING;
    case 3:
    case "COURIER_STATE_DELIVERING_ITEMS":
      return CMsgBotWorldState_CourierState.COURIER_STATE_DELIVERING_ITEMS;
    case 4:
    case "COURIER_STATE_RETURNING_TO_BASE":
      return CMsgBotWorldState_CourierState.COURIER_STATE_RETURNING_TO_BASE;
    case 5:
    case "COURIER_STATE_DEAD":
      return CMsgBotWorldState_CourierState.COURIER_STATE_DEAD;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgBotWorldState_CourierState",
      );
  }
}

export function cMsgBotWorldState_CourierStateToJSON(object: CMsgBotWorldState_CourierState): string {
  switch (object) {
    case CMsgBotWorldState_CourierState.COURIER_STATE_INIT:
      return "COURIER_STATE_INIT";
    case CMsgBotWorldState_CourierState.COURIER_STATE_IDLE:
      return "COURIER_STATE_IDLE";
    case CMsgBotWorldState_CourierState.COURIER_STATE_AT_BASE:
      return "COURIER_STATE_AT_BASE";
    case CMsgBotWorldState_CourierState.COURIER_STATE_MOVING:
      return "COURIER_STATE_MOVING";
    case CMsgBotWorldState_CourierState.COURIER_STATE_DELIVERING_ITEMS:
      return "COURIER_STATE_DELIVERING_ITEMS";
    case CMsgBotWorldState_CourierState.COURIER_STATE_RETURNING_TO_BASE:
      return "COURIER_STATE_RETURNING_TO_BASE";
    case CMsgBotWorldState_CourierState.COURIER_STATE_DEAD:
      return "COURIER_STATE_DEAD";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgBotWorldState_CourierState",
      );
  }
}

export interface CMsgBotWorldState_Vector {
  x: number;
  y: number;
  z: number;
}

export interface CMsgBotWorldState_Player {
  playerId: number;
  heroId: number;
  isAlive: boolean;
  respawnTime: number;
  kills: number;
  deaths: number;
  assists: number;
  teamId: number;
  primaryUnitHandle: number;
  mmr: number;
  location: CMsgBotWorldState_Vector | undefined;
}

export interface CMsgBotWorldState_Ability {
  handle: number;
  abilityId: number;
  slot: number;
  casterHandle: number;
  level: number;
  castRange: number;
  channelTime: number;
  cooldownRemaining: number;
  isActivated: boolean;
  isToggled: boolean;
  isInAbilityPhase: boolean;
  isChanneling: boolean;
  isStolen: boolean;
  isFullyCastable: boolean;
  charges: number;
  secondaryCharges: number;
  isCombinedLocked: boolean;
  powerTreadsStat: number;
}

export interface CMsgBotWorldState_DroppedItem {
  itemId: number;
  location: CMsgBotWorldState_Vector | undefined;
}

export interface CMsgBotWorldState_RuneInfo {
  type: number;
  location: CMsgBotWorldState_Vector | undefined;
  status: number;
  timeSinceSeen: number;
}

export interface CMsgBotWorldState_TeleportInfo {
  playerId: number;
  location: CMsgBotWorldState_Vector | undefined;
  timeRemaining: number;
}

export interface CMsgBotWorldState_Modifier {
  handle: number;
  name: string;
  stackCount: number;
  abilityHandle: number;
  abilityId: number;
  remainingDuration: number;
  auxiliaryUnitsHandles: number[];
}

export interface CMsgBotWorldState_LinearProjectile {
  handle: number;
  casterHandle: number;
  casterUnitType: CMsgBotWorldState_UnitType;
  casterPlayerId: number;
  abilityHandle: number;
  abilityId: number;
  location: CMsgBotWorldState_Vector | undefined;
  velocity: CMsgBotWorldState_Vector | undefined;
  radius: number;
}

export interface CMsgBotWorldState_TrackingProjectile {
  handle: number;
  casterHandle: number;
  casterUnitType: CMsgBotWorldState_UnitType;
  casterPlayerId: number;
  abilityHandle: number;
  abilityId: number;
  location: CMsgBotWorldState_Vector | undefined;
  velocity: number;
  isDodgeable: boolean;
  isAttack: boolean;
}

export interface CMsgBotWorldState_AvoidanceZone {
  location: CMsgBotWorldState_Vector | undefined;
  casterHandle: number;
  casterUnitType: CMsgBotWorldState_UnitType;
  casterPlayerId: number;
  abilityHandle: number;
  abilityId: number;
  radius: number;
}

export interface CMsgBotWorldState_Courier {
  handle: number;
  state: CMsgBotWorldState_CourierState;
  playerId: number;
}

export interface CMsgBotWorldState_EventAbility {
  abilityId: number;
  playerId: number;
  unitHandle: number;
  location: CMsgBotWorldState_Vector | undefined;
  isChannelStart: boolean;
}

export interface CMsgBotWorldState_EventDamage {
  damage: number;
  victimPlayerId: number;
  victimUnitHandle: number;
  attackerPlayerId: number;
  attackerUnitHandle: number;
  abilityId: number;
}

export interface CMsgBotWorldState_EventCourierKilled {
  teamId: number;
  courierUnitHandle: number;
  killerPlayerId: number;
  killerUnitHandle: number;
}

export interface CMsgBotWorldState_EventRoshanKilled {
  killerPlayerId: number;
  killerUnitHandle: number;
}

export interface CMsgBotWorldState_EventTree {
  treeId: number;
  destroyed: boolean;
  respawned: boolean;
  location: CMsgBotWorldState_Vector | undefined;
  delayed: boolean;
}

export interface CMsgBotWorldState_Unit {
  handle: number;
  unitType: CMsgBotWorldState_UnitType;
  name: string;
  teamId: number;
  level: number;
  location: CMsgBotWorldState_Vector | undefined;
  isAlive: boolean;
  playerId: number;
  boundingRadius: number;
  facing: number;
  groundHeight: number;
  visionRangeDaytime: number;
  visionRangeNighttime: number;
  health: number;
  healthMax: number;
  healthRegen: number;
  mana: number;
  manaMax: number;
  manaRegen: number;
  baseMovementSpeed: number;
  currentMovementSpeed: number;
  animActivity: number;
  animCycle: number;
  baseDamage: number;
  baseDamageVariance: number;
  bonusDamage: number;
  attackDamage: number;
  attackRange: number;
  attackSpeed: number;
  attackAnimPoint: number;
  attackAcquisitionRange: number;
  attackProjectileSpeed: number;
  attackTargetHandle: number;
  attackTargetName: string;
  attacksPerSecond: number;
  lastAttackTime: number;
  bountyXp: number;
  bountyGoldMin: number;
  bountyGoldMax: number;
  isChanneling: boolean;
  activeAbilityHandle: number;
  isAttackImmune: boolean;
  isBlind: boolean;
  isBlockDisabled: boolean;
  isDisarmed: boolean;
  isDominated: boolean;
  isEvadeDisabled: boolean;
  isHexed: boolean;
  isInvisible: boolean;
  isInvulnerable: boolean;
  isMagicImmune: boolean;
  isMuted: boolean;
  isNightmared: boolean;
  isRooted: boolean;
  isSilenced: boolean;
  isSpeciallyDeniable: boolean;
  isStunned: boolean;
  isUnableToMiss: boolean;
  hasScepter: boolean;
  isSpeciallyUndeniable: boolean;
  abilities: CMsgBotWorldState_Ability[];
  items: CMsgBotWorldState_Ability[];
  modifiers: CMsgBotWorldState_Modifier[];
  incomingTrackingProjectiles: CMsgBotWorldState_TrackingProjectile[];
  actionType: number;
  abilityTargetHandle: number;
  abilityTargetName: string;
  isUsingAbility: boolean;
  primaryAttribute: number;
  isIllusion: boolean;
  respawnTime: number;
  buybackCost: number;
  buybackCooldown: number;
  spellAmplification: number;
  armor: number;
  magicResist: number;
  evasion: number;
  xpNeededToLevel: number;
  abilityPoints: number;
  reliableGold: number;
  unreliableGold: number;
  lastHits: number;
  denies: number;
  netWorth: number;
  strength: number;
  agility: number;
  intelligence: number;
  remainingLifespan: number;
  flyingCourier: boolean;
  shrineCooldown: number;
  isShrineHealing: boolean;
}

function createBaseCMsgBotWorldState(): CMsgBotWorldState {
  return {
    teamId: 0,
    gameTime: 0,
    dotaTime: 0,
    gameState: 0,
    heroPickState: 0,
    timeOfDay: 0,
    glyphCooldown: 0,
    glyphCooldownEnemy: 0,
    players: [],
    units: [],
    droppedItems: [],
    droppedItemsDeltas: [],
    runeInfos: [],
    runeInfosDeltas: [],
    incomingTeleports: [],
    linearProjectiles: [],
    avoidanceZones: [],
    couriers: [],
    abilityEvents: [],
    damageEvents: [],
    courierKilledEvents: [],
    roshanKilledEvents: [],
    treeEvents: [],
  };
}

export const CMsgBotWorldState = {
  encode(message: CMsgBotWorldState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).uint32(message.teamId);
    }
    if (message.gameTime !== 0) {
      writer.uint32(21).float(message.gameTime);
    }
    if (message.dotaTime !== 0) {
      writer.uint32(29).float(message.dotaTime);
    }
    if (message.gameState !== 0) {
      writer.uint32(32).uint32(message.gameState);
    }
    if (message.heroPickState !== 0) {
      writer.uint32(40).uint32(message.heroPickState);
    }
    if (message.timeOfDay !== 0) {
      writer.uint32(53).float(message.timeOfDay);
    }
    if (message.glyphCooldown !== 0) {
      writer.uint32(61).float(message.glyphCooldown);
    }
    if (message.glyphCooldownEnemy !== 0) {
      writer.uint32(69).float(message.glyphCooldownEnemy);
    }
    for (const v of message.players) {
      CMsgBotWorldState_Player.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.units) {
      CMsgBotWorldState_Unit.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.droppedItems) {
      CMsgBotWorldState_DroppedItem.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    writer.uint32(898).fork();
    for (const v of message.droppedItemsDeltas) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.runeInfos) {
      CMsgBotWorldState_RuneInfo.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    writer.uint32(906).fork();
    for (const v of message.runeInfosDeltas) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.incomingTeleports) {
      CMsgBotWorldState_TeleportInfo.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.linearProjectiles) {
      CMsgBotWorldState_LinearProjectile.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.avoidanceZones) {
      CMsgBotWorldState_AvoidanceZone.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.couriers) {
      CMsgBotWorldState_Courier.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.abilityEvents) {
      CMsgBotWorldState_EventAbility.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.damageEvents) {
      CMsgBotWorldState_EventDamage.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.courierKilledEvents) {
      CMsgBotWorldState_EventCourierKilled.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    for (const v of message.roshanKilledEvents) {
      CMsgBotWorldState_EventRoshanKilled.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.treeEvents) {
      CMsgBotWorldState_EventTree.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState();
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
          if (tag != 21) {
            break;
          }

          message.gameTime = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.dotaTime = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.gameState = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.heroPickState = reader.uint32();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.timeOfDay = reader.float();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.glyphCooldown = reader.float();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.glyphCooldownEnemy = reader.float();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.players.push(CMsgBotWorldState_Player.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.units.push(CMsgBotWorldState_Unit.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.droppedItems.push(CMsgBotWorldState_DroppedItem.decode(reader, reader.uint32()));
          continue;
        case 112:
          if (tag == 896) {
            message.droppedItemsDeltas.push(reader.int32());
            continue;
          }

          if (tag == 898) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.droppedItemsDeltas.push(reader.int32());
            }

            continue;
          }

          break;
        case 13:
          if (tag != 106) {
            break;
          }

          message.runeInfos.push(CMsgBotWorldState_RuneInfo.decode(reader, reader.uint32()));
          continue;
        case 113:
          if (tag == 904) {
            message.runeInfosDeltas.push(reader.int32());
            continue;
          }

          if (tag == 906) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.runeInfosDeltas.push(reader.int32());
            }

            continue;
          }

          break;
        case 14:
          if (tag != 114) {
            break;
          }

          message.incomingTeleports.push(CMsgBotWorldState_TeleportInfo.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.linearProjectiles.push(CMsgBotWorldState_LinearProjectile.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.avoidanceZones.push(CMsgBotWorldState_AvoidanceZone.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.couriers.push(CMsgBotWorldState_Courier.decode(reader, reader.uint32()));
          continue;
        case 20:
          if (tag != 162) {
            break;
          }

          message.abilityEvents.push(CMsgBotWorldState_EventAbility.decode(reader, reader.uint32()));
          continue;
        case 21:
          if (tag != 170) {
            break;
          }

          message.damageEvents.push(CMsgBotWorldState_EventDamage.decode(reader, reader.uint32()));
          continue;
        case 22:
          if (tag != 178) {
            break;
          }

          message.courierKilledEvents.push(CMsgBotWorldState_EventCourierKilled.decode(reader, reader.uint32()));
          continue;
        case 23:
          if (tag != 186) {
            break;
          }

          message.roshanKilledEvents.push(CMsgBotWorldState_EventRoshanKilled.decode(reader, reader.uint32()));
          continue;
        case 24:
          if (tag != 194) {
            break;
          }

          message.treeEvents.push(CMsgBotWorldState_EventTree.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBotWorldState {
    return {
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      gameTime: isSet(object.gameTime) ? Number(object.gameTime) : 0,
      dotaTime: isSet(object.dotaTime) ? Number(object.dotaTime) : 0,
      gameState: isSet(object.gameState) ? Number(object.gameState) : 0,
      heroPickState: isSet(object.heroPickState) ? Number(object.heroPickState) : 0,
      timeOfDay: isSet(object.timeOfDay) ? Number(object.timeOfDay) : 0,
      glyphCooldown: isSet(object.glyphCooldown) ? Number(object.glyphCooldown) : 0,
      glyphCooldownEnemy: isSet(object.glyphCooldownEnemy) ? Number(object.glyphCooldownEnemy) : 0,
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgBotWorldState_Player.fromJSON(e))
        : [],
      units: Array.isArray(object?.units) ? object.units.map((e: any) => CMsgBotWorldState_Unit.fromJSON(e)) : [],
      droppedItems: Array.isArray(object?.droppedItems)
        ? object.droppedItems.map((e: any) => CMsgBotWorldState_DroppedItem.fromJSON(e))
        : [],
      droppedItemsDeltas: Array.isArray(object?.droppedItemsDeltas)
        ? object.droppedItemsDeltas.map((e: any) => Number(e))
        : [],
      runeInfos: Array.isArray(object?.runeInfos)
        ? object.runeInfos.map((e: any) => CMsgBotWorldState_RuneInfo.fromJSON(e))
        : [],
      runeInfosDeltas: Array.isArray(object?.runeInfosDeltas) ? object.runeInfosDeltas.map((e: any) => Number(e)) : [],
      incomingTeleports: Array.isArray(object?.incomingTeleports)
        ? object.incomingTeleports.map((e: any) => CMsgBotWorldState_TeleportInfo.fromJSON(e))
        : [],
      linearProjectiles: Array.isArray(object?.linearProjectiles)
        ? object.linearProjectiles.map((e: any) => CMsgBotWorldState_LinearProjectile.fromJSON(e))
        : [],
      avoidanceZones: Array.isArray(object?.avoidanceZones)
        ? object.avoidanceZones.map((e: any) => CMsgBotWorldState_AvoidanceZone.fromJSON(e))
        : [],
      couriers: Array.isArray(object?.couriers)
        ? object.couriers.map((e: any) => CMsgBotWorldState_Courier.fromJSON(e))
        : [],
      abilityEvents: Array.isArray(object?.abilityEvents)
        ? object.abilityEvents.map((e: any) => CMsgBotWorldState_EventAbility.fromJSON(e))
        : [],
      damageEvents: Array.isArray(object?.damageEvents)
        ? object.damageEvents.map((e: any) => CMsgBotWorldState_EventDamage.fromJSON(e))
        : [],
      courierKilledEvents: Array.isArray(object?.courierKilledEvents)
        ? object.courierKilledEvents.map((e: any) => CMsgBotWorldState_EventCourierKilled.fromJSON(e))
        : [],
      roshanKilledEvents: Array.isArray(object?.roshanKilledEvents)
        ? object.roshanKilledEvents.map((e: any) => CMsgBotWorldState_EventRoshanKilled.fromJSON(e))
        : [],
      treeEvents: Array.isArray(object?.treeEvents)
        ? object.treeEvents.map((e: any) => CMsgBotWorldState_EventTree.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgBotWorldState): unknown {
    const obj: any = {};
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.gameTime !== undefined && (obj.gameTime = message.gameTime);
    message.dotaTime !== undefined && (obj.dotaTime = message.dotaTime);
    message.gameState !== undefined && (obj.gameState = Math.round(message.gameState));
    message.heroPickState !== undefined && (obj.heroPickState = Math.round(message.heroPickState));
    message.timeOfDay !== undefined && (obj.timeOfDay = message.timeOfDay);
    message.glyphCooldown !== undefined && (obj.glyphCooldown = message.glyphCooldown);
    message.glyphCooldownEnemy !== undefined && (obj.glyphCooldownEnemy = message.glyphCooldownEnemy);
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgBotWorldState_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    if (message.units) {
      obj.units = message.units.map((e) => e ? CMsgBotWorldState_Unit.toJSON(e) : undefined);
    } else {
      obj.units = [];
    }
    if (message.droppedItems) {
      obj.droppedItems = message.droppedItems.map((e) => e ? CMsgBotWorldState_DroppedItem.toJSON(e) : undefined);
    } else {
      obj.droppedItems = [];
    }
    if (message.droppedItemsDeltas) {
      obj.droppedItemsDeltas = message.droppedItemsDeltas.map((e) => Math.round(e));
    } else {
      obj.droppedItemsDeltas = [];
    }
    if (message.runeInfos) {
      obj.runeInfos = message.runeInfos.map((e) => e ? CMsgBotWorldState_RuneInfo.toJSON(e) : undefined);
    } else {
      obj.runeInfos = [];
    }
    if (message.runeInfosDeltas) {
      obj.runeInfosDeltas = message.runeInfosDeltas.map((e) => Math.round(e));
    } else {
      obj.runeInfosDeltas = [];
    }
    if (message.incomingTeleports) {
      obj.incomingTeleports = message.incomingTeleports.map((e) =>
        e ? CMsgBotWorldState_TeleportInfo.toJSON(e) : undefined
      );
    } else {
      obj.incomingTeleports = [];
    }
    if (message.linearProjectiles) {
      obj.linearProjectiles = message.linearProjectiles.map((e) =>
        e ? CMsgBotWorldState_LinearProjectile.toJSON(e) : undefined
      );
    } else {
      obj.linearProjectiles = [];
    }
    if (message.avoidanceZones) {
      obj.avoidanceZones = message.avoidanceZones.map((e) => e ? CMsgBotWorldState_AvoidanceZone.toJSON(e) : undefined);
    } else {
      obj.avoidanceZones = [];
    }
    if (message.couriers) {
      obj.couriers = message.couriers.map((e) => e ? CMsgBotWorldState_Courier.toJSON(e) : undefined);
    } else {
      obj.couriers = [];
    }
    if (message.abilityEvents) {
      obj.abilityEvents = message.abilityEvents.map((e) => e ? CMsgBotWorldState_EventAbility.toJSON(e) : undefined);
    } else {
      obj.abilityEvents = [];
    }
    if (message.damageEvents) {
      obj.damageEvents = message.damageEvents.map((e) => e ? CMsgBotWorldState_EventDamage.toJSON(e) : undefined);
    } else {
      obj.damageEvents = [];
    }
    if (message.courierKilledEvents) {
      obj.courierKilledEvents = message.courierKilledEvents.map((e) =>
        e ? CMsgBotWorldState_EventCourierKilled.toJSON(e) : undefined
      );
    } else {
      obj.courierKilledEvents = [];
    }
    if (message.roshanKilledEvents) {
      obj.roshanKilledEvents = message.roshanKilledEvents.map((e) =>
        e ? CMsgBotWorldState_EventRoshanKilled.toJSON(e) : undefined
      );
    } else {
      obj.roshanKilledEvents = [];
    }
    if (message.treeEvents) {
      obj.treeEvents = message.treeEvents.map((e) => e ? CMsgBotWorldState_EventTree.toJSON(e) : undefined);
    } else {
      obj.treeEvents = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState>): CMsgBotWorldState {
    return CMsgBotWorldState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState>): CMsgBotWorldState {
    const message = createBaseCMsgBotWorldState();
    message.teamId = object.teamId ?? 0;
    message.gameTime = object.gameTime ?? 0;
    message.dotaTime = object.dotaTime ?? 0;
    message.gameState = object.gameState ?? 0;
    message.heroPickState = object.heroPickState ?? 0;
    message.timeOfDay = object.timeOfDay ?? 0;
    message.glyphCooldown = object.glyphCooldown ?? 0;
    message.glyphCooldownEnemy = object.glyphCooldownEnemy ?? 0;
    message.players = object.players?.map((e) => CMsgBotWorldState_Player.fromPartial(e)) || [];
    message.units = object.units?.map((e) => CMsgBotWorldState_Unit.fromPartial(e)) || [];
    message.droppedItems = object.droppedItems?.map((e) => CMsgBotWorldState_DroppedItem.fromPartial(e)) || [];
    message.droppedItemsDeltas = object.droppedItemsDeltas?.map((e) => e) || [];
    message.runeInfos = object.runeInfos?.map((e) => CMsgBotWorldState_RuneInfo.fromPartial(e)) || [];
    message.runeInfosDeltas = object.runeInfosDeltas?.map((e) => e) || [];
    message.incomingTeleports = object.incomingTeleports?.map((e) => CMsgBotWorldState_TeleportInfo.fromPartial(e)) ||
      [];
    message.linearProjectiles =
      object.linearProjectiles?.map((e) => CMsgBotWorldState_LinearProjectile.fromPartial(e)) || [];
    message.avoidanceZones = object.avoidanceZones?.map((e) => CMsgBotWorldState_AvoidanceZone.fromPartial(e)) || [];
    message.couriers = object.couriers?.map((e) => CMsgBotWorldState_Courier.fromPartial(e)) || [];
    message.abilityEvents = object.abilityEvents?.map((e) => CMsgBotWorldState_EventAbility.fromPartial(e)) || [];
    message.damageEvents = object.damageEvents?.map((e) => CMsgBotWorldState_EventDamage.fromPartial(e)) || [];
    message.courierKilledEvents =
      object.courierKilledEvents?.map((e) => CMsgBotWorldState_EventCourierKilled.fromPartial(e)) || [];
    message.roshanKilledEvents =
      object.roshanKilledEvents?.map((e) => CMsgBotWorldState_EventRoshanKilled.fromPartial(e)) || [];
    message.treeEvents = object.treeEvents?.map((e) => CMsgBotWorldState_EventTree.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgBotWorldState_Vector(): CMsgBotWorldState_Vector {
  return { x: 0, y: 0, z: 0 };
}

export const CMsgBotWorldState_Vector = {
  encode(message: CMsgBotWorldState_Vector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState_Vector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState_Vector();
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
        case 3:
          if (tag != 29) {
            break;
          }

          message.z = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBotWorldState_Vector {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
    };
  },

  toJSON(message: CMsgBotWorldState_Vector): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState_Vector>): CMsgBotWorldState_Vector {
    return CMsgBotWorldState_Vector.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState_Vector>): CMsgBotWorldState_Vector {
    const message = createBaseCMsgBotWorldState_Vector();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  },
};

function createBaseCMsgBotWorldState_Player(): CMsgBotWorldState_Player {
  return {
    playerId: 0,
    heroId: 0,
    isAlive: false,
    respawnTime: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
    teamId: 0,
    primaryUnitHandle: 0,
    mmr: 0,
    location: undefined,
  };
}

export const CMsgBotWorldState_Player = {
  encode(message: CMsgBotWorldState_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.heroId !== 0) {
      writer.uint32(16).uint32(message.heroId);
    }
    if (message.isAlive === true) {
      writer.uint32(24).bool(message.isAlive);
    }
    if (message.respawnTime !== 0) {
      writer.uint32(37).float(message.respawnTime);
    }
    if (message.kills !== 0) {
      writer.uint32(40).uint32(message.kills);
    }
    if (message.deaths !== 0) {
      writer.uint32(48).uint32(message.deaths);
    }
    if (message.assists !== 0) {
      writer.uint32(56).uint32(message.assists);
    }
    if (message.teamId !== 0) {
      writer.uint32(64).uint32(message.teamId);
    }
    if (message.primaryUnitHandle !== 0) {
      writer.uint32(72).uint32(message.primaryUnitHandle);
    }
    if (message.mmr !== 0) {
      writer.uint32(80).int32(message.mmr);
    }
    if (message.location !== undefined) {
      CMsgBotWorldState_Vector.encode(message.location, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState_Player();
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

          message.heroId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isAlive = reader.bool();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.respawnTime = reader.float();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.kills = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.deaths = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.assists = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.primaryUnitHandle = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.mmr = reader.int32();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.location = CMsgBotWorldState_Vector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBotWorldState_Player {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      isAlive: isSet(object.isAlive) ? Boolean(object.isAlive) : false,
      respawnTime: isSet(object.respawnTime) ? Number(object.respawnTime) : 0,
      kills: isSet(object.kills) ? Number(object.kills) : 0,
      deaths: isSet(object.deaths) ? Number(object.deaths) : 0,
      assists: isSet(object.assists) ? Number(object.assists) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      primaryUnitHandle: isSet(object.primaryUnitHandle) ? Number(object.primaryUnitHandle) : 0,
      mmr: isSet(object.mmr) ? Number(object.mmr) : 0,
      location: isSet(object.location) ? CMsgBotWorldState_Vector.fromJSON(object.location) : undefined,
    };
  },

  toJSON(message: CMsgBotWorldState_Player): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.isAlive !== undefined && (obj.isAlive = message.isAlive);
    message.respawnTime !== undefined && (obj.respawnTime = message.respawnTime);
    message.kills !== undefined && (obj.kills = Math.round(message.kills));
    message.deaths !== undefined && (obj.deaths = Math.round(message.deaths));
    message.assists !== undefined && (obj.assists = Math.round(message.assists));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.primaryUnitHandle !== undefined && (obj.primaryUnitHandle = Math.round(message.primaryUnitHandle));
    message.mmr !== undefined && (obj.mmr = Math.round(message.mmr));
    message.location !== undefined &&
      (obj.location = message.location ? CMsgBotWorldState_Vector.toJSON(message.location) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState_Player>): CMsgBotWorldState_Player {
    return CMsgBotWorldState_Player.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState_Player>): CMsgBotWorldState_Player {
    const message = createBaseCMsgBotWorldState_Player();
    message.playerId = object.playerId ?? 0;
    message.heroId = object.heroId ?? 0;
    message.isAlive = object.isAlive ?? false;
    message.respawnTime = object.respawnTime ?? 0;
    message.kills = object.kills ?? 0;
    message.deaths = object.deaths ?? 0;
    message.assists = object.assists ?? 0;
    message.teamId = object.teamId ?? 0;
    message.primaryUnitHandle = object.primaryUnitHandle ?? 0;
    message.mmr = object.mmr ?? 0;
    message.location = (object.location !== undefined && object.location !== null)
      ? CMsgBotWorldState_Vector.fromPartial(object.location)
      : undefined;
    return message;
  },
};

function createBaseCMsgBotWorldState_Ability(): CMsgBotWorldState_Ability {
  return {
    handle: 0,
    abilityId: 0,
    slot: 0,
    casterHandle: 0,
    level: 0,
    castRange: 0,
    channelTime: 0,
    cooldownRemaining: 0,
    isActivated: false,
    isToggled: false,
    isInAbilityPhase: false,
    isChanneling: false,
    isStolen: false,
    isFullyCastable: false,
    charges: 0,
    secondaryCharges: 0,
    isCombinedLocked: false,
    powerTreadsStat: 0,
  };
}

export const CMsgBotWorldState_Ability = {
  encode(message: CMsgBotWorldState_Ability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handle !== 0) {
      writer.uint32(8).uint32(message.handle);
    }
    if (message.abilityId !== 0) {
      writer.uint32(16).int32(message.abilityId);
    }
    if (message.slot !== 0) {
      writer.uint32(24).uint32(message.slot);
    }
    if (message.casterHandle !== 0) {
      writer.uint32(40).uint32(message.casterHandle);
    }
    if (message.level !== 0) {
      writer.uint32(48).uint32(message.level);
    }
    if (message.castRange !== 0) {
      writer.uint32(80).uint32(message.castRange);
    }
    if (message.channelTime !== 0) {
      writer.uint32(93).float(message.channelTime);
    }
    if (message.cooldownRemaining !== 0) {
      writer.uint32(101).float(message.cooldownRemaining);
    }
    if (message.isActivated === true) {
      writer.uint32(160).bool(message.isActivated);
    }
    if (message.isToggled === true) {
      writer.uint32(168).bool(message.isToggled);
    }
    if (message.isInAbilityPhase === true) {
      writer.uint32(176).bool(message.isInAbilityPhase);
    }
    if (message.isChanneling === true) {
      writer.uint32(184).bool(message.isChanneling);
    }
    if (message.isStolen === true) {
      writer.uint32(192).bool(message.isStolen);
    }
    if (message.isFullyCastable === true) {
      writer.uint32(200).bool(message.isFullyCastable);
    }
    if (message.charges !== 0) {
      writer.uint32(240).uint32(message.charges);
    }
    if (message.secondaryCharges !== 0) {
      writer.uint32(248).uint32(message.secondaryCharges);
    }
    if (message.isCombinedLocked === true) {
      writer.uint32(320).bool(message.isCombinedLocked);
    }
    if (message.powerTreadsStat !== 0) {
      writer.uint32(400).int32(message.powerTreadsStat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState_Ability {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState_Ability();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.handle = reader.uint32();
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

          message.slot = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.casterHandle = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.castRange = reader.uint32();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.channelTime = reader.float();
          continue;
        case 12:
          if (tag != 101) {
            break;
          }

          message.cooldownRemaining = reader.float();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.isActivated = reader.bool();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.isToggled = reader.bool();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.isInAbilityPhase = reader.bool();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.isChanneling = reader.bool();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.isStolen = reader.bool();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.isFullyCastable = reader.bool();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.charges = reader.uint32();
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.secondaryCharges = reader.uint32();
          continue;
        case 40:
          if (tag != 320) {
            break;
          }

          message.isCombinedLocked = reader.bool();
          continue;
        case 50:
          if (tag != 400) {
            break;
          }

          message.powerTreadsStat = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBotWorldState_Ability {
    return {
      handle: isSet(object.handle) ? Number(object.handle) : 0,
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      slot: isSet(object.slot) ? Number(object.slot) : 0,
      casterHandle: isSet(object.casterHandle) ? Number(object.casterHandle) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      castRange: isSet(object.castRange) ? Number(object.castRange) : 0,
      channelTime: isSet(object.channelTime) ? Number(object.channelTime) : 0,
      cooldownRemaining: isSet(object.cooldownRemaining) ? Number(object.cooldownRemaining) : 0,
      isActivated: isSet(object.isActivated) ? Boolean(object.isActivated) : false,
      isToggled: isSet(object.isToggled) ? Boolean(object.isToggled) : false,
      isInAbilityPhase: isSet(object.isInAbilityPhase) ? Boolean(object.isInAbilityPhase) : false,
      isChanneling: isSet(object.isChanneling) ? Boolean(object.isChanneling) : false,
      isStolen: isSet(object.isStolen) ? Boolean(object.isStolen) : false,
      isFullyCastable: isSet(object.isFullyCastable) ? Boolean(object.isFullyCastable) : false,
      charges: isSet(object.charges) ? Number(object.charges) : 0,
      secondaryCharges: isSet(object.secondaryCharges) ? Number(object.secondaryCharges) : 0,
      isCombinedLocked: isSet(object.isCombinedLocked) ? Boolean(object.isCombinedLocked) : false,
      powerTreadsStat: isSet(object.powerTreadsStat) ? Number(object.powerTreadsStat) : 0,
    };
  },

  toJSON(message: CMsgBotWorldState_Ability): unknown {
    const obj: any = {};
    message.handle !== undefined && (obj.handle = Math.round(message.handle));
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    message.slot !== undefined && (obj.slot = Math.round(message.slot));
    message.casterHandle !== undefined && (obj.casterHandle = Math.round(message.casterHandle));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.castRange !== undefined && (obj.castRange = Math.round(message.castRange));
    message.channelTime !== undefined && (obj.channelTime = message.channelTime);
    message.cooldownRemaining !== undefined && (obj.cooldownRemaining = message.cooldownRemaining);
    message.isActivated !== undefined && (obj.isActivated = message.isActivated);
    message.isToggled !== undefined && (obj.isToggled = message.isToggled);
    message.isInAbilityPhase !== undefined && (obj.isInAbilityPhase = message.isInAbilityPhase);
    message.isChanneling !== undefined && (obj.isChanneling = message.isChanneling);
    message.isStolen !== undefined && (obj.isStolen = message.isStolen);
    message.isFullyCastable !== undefined && (obj.isFullyCastable = message.isFullyCastable);
    message.charges !== undefined && (obj.charges = Math.round(message.charges));
    message.secondaryCharges !== undefined && (obj.secondaryCharges = Math.round(message.secondaryCharges));
    message.isCombinedLocked !== undefined && (obj.isCombinedLocked = message.isCombinedLocked);
    message.powerTreadsStat !== undefined && (obj.powerTreadsStat = Math.round(message.powerTreadsStat));
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState_Ability>): CMsgBotWorldState_Ability {
    return CMsgBotWorldState_Ability.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState_Ability>): CMsgBotWorldState_Ability {
    const message = createBaseCMsgBotWorldState_Ability();
    message.handle = object.handle ?? 0;
    message.abilityId = object.abilityId ?? 0;
    message.slot = object.slot ?? 0;
    message.casterHandle = object.casterHandle ?? 0;
    message.level = object.level ?? 0;
    message.castRange = object.castRange ?? 0;
    message.channelTime = object.channelTime ?? 0;
    message.cooldownRemaining = object.cooldownRemaining ?? 0;
    message.isActivated = object.isActivated ?? false;
    message.isToggled = object.isToggled ?? false;
    message.isInAbilityPhase = object.isInAbilityPhase ?? false;
    message.isChanneling = object.isChanneling ?? false;
    message.isStolen = object.isStolen ?? false;
    message.isFullyCastable = object.isFullyCastable ?? false;
    message.charges = object.charges ?? 0;
    message.secondaryCharges = object.secondaryCharges ?? 0;
    message.isCombinedLocked = object.isCombinedLocked ?? false;
    message.powerTreadsStat = object.powerTreadsStat ?? 0;
    return message;
  },
};

function createBaseCMsgBotWorldState_DroppedItem(): CMsgBotWorldState_DroppedItem {
  return { itemId: 0, location: undefined };
}

export const CMsgBotWorldState_DroppedItem = {
  encode(message: CMsgBotWorldState_DroppedItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== 0) {
      writer.uint32(8).int32(message.itemId);
    }
    if (message.location !== undefined) {
      CMsgBotWorldState_Vector.encode(message.location, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState_DroppedItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState_DroppedItem();
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
          if (tag != 18) {
            break;
          }

          message.location = CMsgBotWorldState_Vector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBotWorldState_DroppedItem {
    return {
      itemId: isSet(object.itemId) ? Number(object.itemId) : 0,
      location: isSet(object.location) ? CMsgBotWorldState_Vector.fromJSON(object.location) : undefined,
    };
  },

  toJSON(message: CMsgBotWorldState_DroppedItem): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = Math.round(message.itemId));
    message.location !== undefined &&
      (obj.location = message.location ? CMsgBotWorldState_Vector.toJSON(message.location) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState_DroppedItem>): CMsgBotWorldState_DroppedItem {
    return CMsgBotWorldState_DroppedItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState_DroppedItem>): CMsgBotWorldState_DroppedItem {
    const message = createBaseCMsgBotWorldState_DroppedItem();
    message.itemId = object.itemId ?? 0;
    message.location = (object.location !== undefined && object.location !== null)
      ? CMsgBotWorldState_Vector.fromPartial(object.location)
      : undefined;
    return message;
  },
};

function createBaseCMsgBotWorldState_RuneInfo(): CMsgBotWorldState_RuneInfo {
  return { type: 0, location: undefined, status: 0, timeSinceSeen: 0 };
}

export const CMsgBotWorldState_RuneInfo = {
  encode(message: CMsgBotWorldState_RuneInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.location !== undefined) {
      CMsgBotWorldState_Vector.encode(message.location, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(24).uint32(message.status);
    }
    if (message.timeSinceSeen !== 0) {
      writer.uint32(37).float(message.timeSinceSeen);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState_RuneInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState_RuneInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.location = CMsgBotWorldState_Vector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.status = reader.uint32();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.timeSinceSeen = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBotWorldState_RuneInfo {
    return {
      type: isSet(object.type) ? Number(object.type) : 0,
      location: isSet(object.location) ? CMsgBotWorldState_Vector.fromJSON(object.location) : undefined,
      status: isSet(object.status) ? Number(object.status) : 0,
      timeSinceSeen: isSet(object.timeSinceSeen) ? Number(object.timeSinceSeen) : 0,
    };
  },

  toJSON(message: CMsgBotWorldState_RuneInfo): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.location !== undefined &&
      (obj.location = message.location ? CMsgBotWorldState_Vector.toJSON(message.location) : undefined);
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.timeSinceSeen !== undefined && (obj.timeSinceSeen = message.timeSinceSeen);
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState_RuneInfo>): CMsgBotWorldState_RuneInfo {
    return CMsgBotWorldState_RuneInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState_RuneInfo>): CMsgBotWorldState_RuneInfo {
    const message = createBaseCMsgBotWorldState_RuneInfo();
    message.type = object.type ?? 0;
    message.location = (object.location !== undefined && object.location !== null)
      ? CMsgBotWorldState_Vector.fromPartial(object.location)
      : undefined;
    message.status = object.status ?? 0;
    message.timeSinceSeen = object.timeSinceSeen ?? 0;
    return message;
  },
};

function createBaseCMsgBotWorldState_TeleportInfo(): CMsgBotWorldState_TeleportInfo {
  return { playerId: 0, location: undefined, timeRemaining: 0 };
}

export const CMsgBotWorldState_TeleportInfo = {
  encode(message: CMsgBotWorldState_TeleportInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.location !== undefined) {
      CMsgBotWorldState_Vector.encode(message.location, writer.uint32(18).fork()).ldelim();
    }
    if (message.timeRemaining !== 0) {
      writer.uint32(29).float(message.timeRemaining);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState_TeleportInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState_TeleportInfo();
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
          if (tag != 18) {
            break;
          }

          message.location = CMsgBotWorldState_Vector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.timeRemaining = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBotWorldState_TeleportInfo {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      location: isSet(object.location) ? CMsgBotWorldState_Vector.fromJSON(object.location) : undefined,
      timeRemaining: isSet(object.timeRemaining) ? Number(object.timeRemaining) : 0,
    };
  },

  toJSON(message: CMsgBotWorldState_TeleportInfo): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.location !== undefined &&
      (obj.location = message.location ? CMsgBotWorldState_Vector.toJSON(message.location) : undefined);
    message.timeRemaining !== undefined && (obj.timeRemaining = message.timeRemaining);
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState_TeleportInfo>): CMsgBotWorldState_TeleportInfo {
    return CMsgBotWorldState_TeleportInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState_TeleportInfo>): CMsgBotWorldState_TeleportInfo {
    const message = createBaseCMsgBotWorldState_TeleportInfo();
    message.playerId = object.playerId ?? 0;
    message.location = (object.location !== undefined && object.location !== null)
      ? CMsgBotWorldState_Vector.fromPartial(object.location)
      : undefined;
    message.timeRemaining = object.timeRemaining ?? 0;
    return message;
  },
};

function createBaseCMsgBotWorldState_Modifier(): CMsgBotWorldState_Modifier {
  return {
    handle: 0,
    name: "",
    stackCount: 0,
    abilityHandle: 0,
    abilityId: 0,
    remainingDuration: 0,
    auxiliaryUnitsHandles: [],
  };
}

export const CMsgBotWorldState_Modifier = {
  encode(message: CMsgBotWorldState_Modifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handle !== 0) {
      writer.uint32(56).uint32(message.handle);
    }
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.stackCount !== 0) {
      writer.uint32(16).uint32(message.stackCount);
    }
    if (message.abilityHandle !== 0) {
      writer.uint32(24).uint32(message.abilityHandle);
    }
    if (message.abilityId !== 0) {
      writer.uint32(32).int32(message.abilityId);
    }
    if (message.remainingDuration !== 0) {
      writer.uint32(45).float(message.remainingDuration);
    }
    writer.uint32(50).fork();
    for (const v of message.auxiliaryUnitsHandles) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState_Modifier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState_Modifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 7:
          if (tag != 56) {
            break;
          }

          message.handle = reader.uint32();
          continue;
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

          message.stackCount = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.abilityHandle = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.abilityId = reader.int32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.remainingDuration = reader.float();
          continue;
        case 6:
          if (tag == 48) {
            message.auxiliaryUnitsHandles.push(reader.uint32());
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.auxiliaryUnitsHandles.push(reader.uint32());
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

  fromJSON(object: any): CMsgBotWorldState_Modifier {
    return {
      handle: isSet(object.handle) ? Number(object.handle) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      stackCount: isSet(object.stackCount) ? Number(object.stackCount) : 0,
      abilityHandle: isSet(object.abilityHandle) ? Number(object.abilityHandle) : 0,
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      remainingDuration: isSet(object.remainingDuration) ? Number(object.remainingDuration) : 0,
      auxiliaryUnitsHandles: Array.isArray(object?.auxiliaryUnitsHandles)
        ? object.auxiliaryUnitsHandles.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CMsgBotWorldState_Modifier): unknown {
    const obj: any = {};
    message.handle !== undefined && (obj.handle = Math.round(message.handle));
    message.name !== undefined && (obj.name = message.name);
    message.stackCount !== undefined && (obj.stackCount = Math.round(message.stackCount));
    message.abilityHandle !== undefined && (obj.abilityHandle = Math.round(message.abilityHandle));
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    message.remainingDuration !== undefined && (obj.remainingDuration = message.remainingDuration);
    if (message.auxiliaryUnitsHandles) {
      obj.auxiliaryUnitsHandles = message.auxiliaryUnitsHandles.map((e) => Math.round(e));
    } else {
      obj.auxiliaryUnitsHandles = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState_Modifier>): CMsgBotWorldState_Modifier {
    return CMsgBotWorldState_Modifier.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState_Modifier>): CMsgBotWorldState_Modifier {
    const message = createBaseCMsgBotWorldState_Modifier();
    message.handle = object.handle ?? 0;
    message.name = object.name ?? "";
    message.stackCount = object.stackCount ?? 0;
    message.abilityHandle = object.abilityHandle ?? 0;
    message.abilityId = object.abilityId ?? 0;
    message.remainingDuration = object.remainingDuration ?? 0;
    message.auxiliaryUnitsHandles = object.auxiliaryUnitsHandles?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgBotWorldState_LinearProjectile(): CMsgBotWorldState_LinearProjectile {
  return {
    handle: 0,
    casterHandle: 0,
    casterUnitType: 0,
    casterPlayerId: 0,
    abilityHandle: 0,
    abilityId: 0,
    location: undefined,
    velocity: undefined,
    radius: 0,
  };
}

export const CMsgBotWorldState_LinearProjectile = {
  encode(message: CMsgBotWorldState_LinearProjectile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handle !== 0) {
      writer.uint32(8).uint32(message.handle);
    }
    if (message.casterHandle !== 0) {
      writer.uint32(16).uint32(message.casterHandle);
    }
    if (message.casterUnitType !== 0) {
      writer.uint32(72).int32(message.casterUnitType);
    }
    if (message.casterPlayerId !== 0) {
      writer.uint32(24).int32(message.casterPlayerId);
    }
    if (message.abilityHandle !== 0) {
      writer.uint32(32).uint32(message.abilityHandle);
    }
    if (message.abilityId !== 0) {
      writer.uint32(40).int32(message.abilityId);
    }
    if (message.location !== undefined) {
      CMsgBotWorldState_Vector.encode(message.location, writer.uint32(50).fork()).ldelim();
    }
    if (message.velocity !== undefined) {
      CMsgBotWorldState_Vector.encode(message.velocity, writer.uint32(58).fork()).ldelim();
    }
    if (message.radius !== 0) {
      writer.uint32(64).uint32(message.radius);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState_LinearProjectile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState_LinearProjectile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.handle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.casterHandle = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.casterUnitType = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.casterPlayerId = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.abilityHandle = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.abilityId = reader.int32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.location = CMsgBotWorldState_Vector.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.velocity = CMsgBotWorldState_Vector.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.radius = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBotWorldState_LinearProjectile {
    return {
      handle: isSet(object.handle) ? Number(object.handle) : 0,
      casterHandle: isSet(object.casterHandle) ? Number(object.casterHandle) : 0,
      casterUnitType: isSet(object.casterUnitType) ? cMsgBotWorldState_UnitTypeFromJSON(object.casterUnitType) : 0,
      casterPlayerId: isSet(object.casterPlayerId) ? Number(object.casterPlayerId) : 0,
      abilityHandle: isSet(object.abilityHandle) ? Number(object.abilityHandle) : 0,
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      location: isSet(object.location) ? CMsgBotWorldState_Vector.fromJSON(object.location) : undefined,
      velocity: isSet(object.velocity) ? CMsgBotWorldState_Vector.fromJSON(object.velocity) : undefined,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
    };
  },

  toJSON(message: CMsgBotWorldState_LinearProjectile): unknown {
    const obj: any = {};
    message.handle !== undefined && (obj.handle = Math.round(message.handle));
    message.casterHandle !== undefined && (obj.casterHandle = Math.round(message.casterHandle));
    message.casterUnitType !== undefined &&
      (obj.casterUnitType = cMsgBotWorldState_UnitTypeToJSON(message.casterUnitType));
    message.casterPlayerId !== undefined && (obj.casterPlayerId = Math.round(message.casterPlayerId));
    message.abilityHandle !== undefined && (obj.abilityHandle = Math.round(message.abilityHandle));
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    message.location !== undefined &&
      (obj.location = message.location ? CMsgBotWorldState_Vector.toJSON(message.location) : undefined);
    message.velocity !== undefined &&
      (obj.velocity = message.velocity ? CMsgBotWorldState_Vector.toJSON(message.velocity) : undefined);
    message.radius !== undefined && (obj.radius = Math.round(message.radius));
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState_LinearProjectile>): CMsgBotWorldState_LinearProjectile {
    return CMsgBotWorldState_LinearProjectile.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState_LinearProjectile>): CMsgBotWorldState_LinearProjectile {
    const message = createBaseCMsgBotWorldState_LinearProjectile();
    message.handle = object.handle ?? 0;
    message.casterHandle = object.casterHandle ?? 0;
    message.casterUnitType = object.casterUnitType ?? 0;
    message.casterPlayerId = object.casterPlayerId ?? 0;
    message.abilityHandle = object.abilityHandle ?? 0;
    message.abilityId = object.abilityId ?? 0;
    message.location = (object.location !== undefined && object.location !== null)
      ? CMsgBotWorldState_Vector.fromPartial(object.location)
      : undefined;
    message.velocity = (object.velocity !== undefined && object.velocity !== null)
      ? CMsgBotWorldState_Vector.fromPartial(object.velocity)
      : undefined;
    message.radius = object.radius ?? 0;
    return message;
  },
};

function createBaseCMsgBotWorldState_TrackingProjectile(): CMsgBotWorldState_TrackingProjectile {
  return {
    handle: 0,
    casterHandle: 0,
    casterUnitType: 0,
    casterPlayerId: 0,
    abilityHandle: 0,
    abilityId: 0,
    location: undefined,
    velocity: 0,
    isDodgeable: false,
    isAttack: false,
  };
}

export const CMsgBotWorldState_TrackingProjectile = {
  encode(message: CMsgBotWorldState_TrackingProjectile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handle !== 0) {
      writer.uint32(80).uint32(message.handle);
    }
    if (message.casterHandle !== 0) {
      writer.uint32(8).uint32(message.casterHandle);
    }
    if (message.casterUnitType !== 0) {
      writer.uint32(72).int32(message.casterUnitType);
    }
    if (message.casterPlayerId !== 0) {
      writer.uint32(16).int32(message.casterPlayerId);
    }
    if (message.abilityHandle !== 0) {
      writer.uint32(24).uint32(message.abilityHandle);
    }
    if (message.abilityId !== 0) {
      writer.uint32(32).int32(message.abilityId);
    }
    if (message.location !== undefined) {
      CMsgBotWorldState_Vector.encode(message.location, writer.uint32(42).fork()).ldelim();
    }
    if (message.velocity !== 0) {
      writer.uint32(48).uint32(message.velocity);
    }
    if (message.isDodgeable === true) {
      writer.uint32(56).bool(message.isDodgeable);
    }
    if (message.isAttack === true) {
      writer.uint32(64).bool(message.isAttack);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState_TrackingProjectile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState_TrackingProjectile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 10:
          if (tag != 80) {
            break;
          }

          message.handle = reader.uint32();
          continue;
        case 1:
          if (tag != 8) {
            break;
          }

          message.casterHandle = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.casterUnitType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.casterPlayerId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.abilityHandle = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.abilityId = reader.int32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.location = CMsgBotWorldState_Vector.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.velocity = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.isDodgeable = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.isAttack = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBotWorldState_TrackingProjectile {
    return {
      handle: isSet(object.handle) ? Number(object.handle) : 0,
      casterHandle: isSet(object.casterHandle) ? Number(object.casterHandle) : 0,
      casterUnitType: isSet(object.casterUnitType) ? cMsgBotWorldState_UnitTypeFromJSON(object.casterUnitType) : 0,
      casterPlayerId: isSet(object.casterPlayerId) ? Number(object.casterPlayerId) : 0,
      abilityHandle: isSet(object.abilityHandle) ? Number(object.abilityHandle) : 0,
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      location: isSet(object.location) ? CMsgBotWorldState_Vector.fromJSON(object.location) : undefined,
      velocity: isSet(object.velocity) ? Number(object.velocity) : 0,
      isDodgeable: isSet(object.isDodgeable) ? Boolean(object.isDodgeable) : false,
      isAttack: isSet(object.isAttack) ? Boolean(object.isAttack) : false,
    };
  },

  toJSON(message: CMsgBotWorldState_TrackingProjectile): unknown {
    const obj: any = {};
    message.handle !== undefined && (obj.handle = Math.round(message.handle));
    message.casterHandle !== undefined && (obj.casterHandle = Math.round(message.casterHandle));
    message.casterUnitType !== undefined &&
      (obj.casterUnitType = cMsgBotWorldState_UnitTypeToJSON(message.casterUnitType));
    message.casterPlayerId !== undefined && (obj.casterPlayerId = Math.round(message.casterPlayerId));
    message.abilityHandle !== undefined && (obj.abilityHandle = Math.round(message.abilityHandle));
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    message.location !== undefined &&
      (obj.location = message.location ? CMsgBotWorldState_Vector.toJSON(message.location) : undefined);
    message.velocity !== undefined && (obj.velocity = Math.round(message.velocity));
    message.isDodgeable !== undefined && (obj.isDodgeable = message.isDodgeable);
    message.isAttack !== undefined && (obj.isAttack = message.isAttack);
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState_TrackingProjectile>): CMsgBotWorldState_TrackingProjectile {
    return CMsgBotWorldState_TrackingProjectile.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState_TrackingProjectile>): CMsgBotWorldState_TrackingProjectile {
    const message = createBaseCMsgBotWorldState_TrackingProjectile();
    message.handle = object.handle ?? 0;
    message.casterHandle = object.casterHandle ?? 0;
    message.casterUnitType = object.casterUnitType ?? 0;
    message.casterPlayerId = object.casterPlayerId ?? 0;
    message.abilityHandle = object.abilityHandle ?? 0;
    message.abilityId = object.abilityId ?? 0;
    message.location = (object.location !== undefined && object.location !== null)
      ? CMsgBotWorldState_Vector.fromPartial(object.location)
      : undefined;
    message.velocity = object.velocity ?? 0;
    message.isDodgeable = object.isDodgeable ?? false;
    message.isAttack = object.isAttack ?? false;
    return message;
  },
};

function createBaseCMsgBotWorldState_AvoidanceZone(): CMsgBotWorldState_AvoidanceZone {
  return {
    location: undefined,
    casterHandle: 0,
    casterUnitType: 0,
    casterPlayerId: 0,
    abilityHandle: 0,
    abilityId: 0,
    radius: 0,
  };
}

export const CMsgBotWorldState_AvoidanceZone = {
  encode(message: CMsgBotWorldState_AvoidanceZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== undefined) {
      CMsgBotWorldState_Vector.encode(message.location, writer.uint32(10).fork()).ldelim();
    }
    if (message.casterHandle !== 0) {
      writer.uint32(16).uint32(message.casterHandle);
    }
    if (message.casterUnitType !== 0) {
      writer.uint32(56).int32(message.casterUnitType);
    }
    if (message.casterPlayerId !== 0) {
      writer.uint32(24).int32(message.casterPlayerId);
    }
    if (message.abilityHandle !== 0) {
      writer.uint32(32).uint32(message.abilityHandle);
    }
    if (message.abilityId !== 0) {
      writer.uint32(40).int32(message.abilityId);
    }
    if (message.radius !== 0) {
      writer.uint32(48).uint32(message.radius);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState_AvoidanceZone {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState_AvoidanceZone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.location = CMsgBotWorldState_Vector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.casterHandle = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.casterUnitType = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.casterPlayerId = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.abilityHandle = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.abilityId = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.radius = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBotWorldState_AvoidanceZone {
    return {
      location: isSet(object.location) ? CMsgBotWorldState_Vector.fromJSON(object.location) : undefined,
      casterHandle: isSet(object.casterHandle) ? Number(object.casterHandle) : 0,
      casterUnitType: isSet(object.casterUnitType) ? cMsgBotWorldState_UnitTypeFromJSON(object.casterUnitType) : 0,
      casterPlayerId: isSet(object.casterPlayerId) ? Number(object.casterPlayerId) : 0,
      abilityHandle: isSet(object.abilityHandle) ? Number(object.abilityHandle) : 0,
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
    };
  },

  toJSON(message: CMsgBotWorldState_AvoidanceZone): unknown {
    const obj: any = {};
    message.location !== undefined &&
      (obj.location = message.location ? CMsgBotWorldState_Vector.toJSON(message.location) : undefined);
    message.casterHandle !== undefined && (obj.casterHandle = Math.round(message.casterHandle));
    message.casterUnitType !== undefined &&
      (obj.casterUnitType = cMsgBotWorldState_UnitTypeToJSON(message.casterUnitType));
    message.casterPlayerId !== undefined && (obj.casterPlayerId = Math.round(message.casterPlayerId));
    message.abilityHandle !== undefined && (obj.abilityHandle = Math.round(message.abilityHandle));
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    message.radius !== undefined && (obj.radius = Math.round(message.radius));
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState_AvoidanceZone>): CMsgBotWorldState_AvoidanceZone {
    return CMsgBotWorldState_AvoidanceZone.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState_AvoidanceZone>): CMsgBotWorldState_AvoidanceZone {
    const message = createBaseCMsgBotWorldState_AvoidanceZone();
    message.location = (object.location !== undefined && object.location !== null)
      ? CMsgBotWorldState_Vector.fromPartial(object.location)
      : undefined;
    message.casterHandle = object.casterHandle ?? 0;
    message.casterUnitType = object.casterUnitType ?? 0;
    message.casterPlayerId = object.casterPlayerId ?? 0;
    message.abilityHandle = object.abilityHandle ?? 0;
    message.abilityId = object.abilityId ?? 0;
    message.radius = object.radius ?? 0;
    return message;
  },
};

function createBaseCMsgBotWorldState_Courier(): CMsgBotWorldState_Courier {
  return { handle: 0, state: 0, playerId: 0 };
}

export const CMsgBotWorldState_Courier = {
  encode(message: CMsgBotWorldState_Courier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handle !== 0) {
      writer.uint32(8).uint32(message.handle);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.playerId !== 0) {
      writer.uint32(24).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState_Courier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState_Courier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.handle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
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

  fromJSON(object: any): CMsgBotWorldState_Courier {
    return {
      handle: isSet(object.handle) ? Number(object.handle) : 0,
      state: isSet(object.state) ? cMsgBotWorldState_CourierStateFromJSON(object.state) : 0,
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
    };
  },

  toJSON(message: CMsgBotWorldState_Courier): unknown {
    const obj: any = {};
    message.handle !== undefined && (obj.handle = Math.round(message.handle));
    message.state !== undefined && (obj.state = cMsgBotWorldState_CourierStateToJSON(message.state));
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState_Courier>): CMsgBotWorldState_Courier {
    return CMsgBotWorldState_Courier.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState_Courier>): CMsgBotWorldState_Courier {
    const message = createBaseCMsgBotWorldState_Courier();
    message.handle = object.handle ?? 0;
    message.state = object.state ?? 0;
    message.playerId = object.playerId ?? 0;
    return message;
  },
};

function createBaseCMsgBotWorldState_EventAbility(): CMsgBotWorldState_EventAbility {
  return { abilityId: 0, playerId: 0, unitHandle: 0, location: undefined, isChannelStart: false };
}

export const CMsgBotWorldState_EventAbility = {
  encode(message: CMsgBotWorldState_EventAbility, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abilityId !== 0) {
      writer.uint32(8).int32(message.abilityId);
    }
    if (message.playerId !== 0) {
      writer.uint32(16).int32(message.playerId);
    }
    if (message.unitHandle !== 0) {
      writer.uint32(24).uint32(message.unitHandle);
    }
    if (message.location !== undefined) {
      CMsgBotWorldState_Vector.encode(message.location, writer.uint32(34).fork()).ldelim();
    }
    if (message.isChannelStart === true) {
      writer.uint32(40).bool(message.isChannelStart);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState_EventAbility {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState_EventAbility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.abilityId = reader.int32();
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

          message.unitHandle = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.location = CMsgBotWorldState_Vector.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.isChannelStart = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBotWorldState_EventAbility {
    return {
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      unitHandle: isSet(object.unitHandle) ? Number(object.unitHandle) : 0,
      location: isSet(object.location) ? CMsgBotWorldState_Vector.fromJSON(object.location) : undefined,
      isChannelStart: isSet(object.isChannelStart) ? Boolean(object.isChannelStart) : false,
    };
  },

  toJSON(message: CMsgBotWorldState_EventAbility): unknown {
    const obj: any = {};
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.unitHandle !== undefined && (obj.unitHandle = Math.round(message.unitHandle));
    message.location !== undefined &&
      (obj.location = message.location ? CMsgBotWorldState_Vector.toJSON(message.location) : undefined);
    message.isChannelStart !== undefined && (obj.isChannelStart = message.isChannelStart);
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState_EventAbility>): CMsgBotWorldState_EventAbility {
    return CMsgBotWorldState_EventAbility.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState_EventAbility>): CMsgBotWorldState_EventAbility {
    const message = createBaseCMsgBotWorldState_EventAbility();
    message.abilityId = object.abilityId ?? 0;
    message.playerId = object.playerId ?? 0;
    message.unitHandle = object.unitHandle ?? 0;
    message.location = (object.location !== undefined && object.location !== null)
      ? CMsgBotWorldState_Vector.fromPartial(object.location)
      : undefined;
    message.isChannelStart = object.isChannelStart ?? false;
    return message;
  },
};

function createBaseCMsgBotWorldState_EventDamage(): CMsgBotWorldState_EventDamage {
  return {
    damage: 0,
    victimPlayerId: 0,
    victimUnitHandle: 0,
    attackerPlayerId: 0,
    attackerUnitHandle: 0,
    abilityId: 0,
  };
}

export const CMsgBotWorldState_EventDamage = {
  encode(message: CMsgBotWorldState_EventDamage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.damage !== 0) {
      writer.uint32(8).uint32(message.damage);
    }
    if (message.victimPlayerId !== 0) {
      writer.uint32(16).int32(message.victimPlayerId);
    }
    if (message.victimUnitHandle !== 0) {
      writer.uint32(24).uint32(message.victimUnitHandle);
    }
    if (message.attackerPlayerId !== 0) {
      writer.uint32(32).int32(message.attackerPlayerId);
    }
    if (message.attackerUnitHandle !== 0) {
      writer.uint32(40).uint32(message.attackerUnitHandle);
    }
    if (message.abilityId !== 0) {
      writer.uint32(48).int32(message.abilityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState_EventDamage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState_EventDamage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.damage = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.victimPlayerId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.victimUnitHandle = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.attackerPlayerId = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.attackerUnitHandle = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.abilityId = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBotWorldState_EventDamage {
    return {
      damage: isSet(object.damage) ? Number(object.damage) : 0,
      victimPlayerId: isSet(object.victimPlayerId) ? Number(object.victimPlayerId) : 0,
      victimUnitHandle: isSet(object.victimUnitHandle) ? Number(object.victimUnitHandle) : 0,
      attackerPlayerId: isSet(object.attackerPlayerId) ? Number(object.attackerPlayerId) : 0,
      attackerUnitHandle: isSet(object.attackerUnitHandle) ? Number(object.attackerUnitHandle) : 0,
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
    };
  },

  toJSON(message: CMsgBotWorldState_EventDamage): unknown {
    const obj: any = {};
    message.damage !== undefined && (obj.damage = Math.round(message.damage));
    message.victimPlayerId !== undefined && (obj.victimPlayerId = Math.round(message.victimPlayerId));
    message.victimUnitHandle !== undefined && (obj.victimUnitHandle = Math.round(message.victimUnitHandle));
    message.attackerPlayerId !== undefined && (obj.attackerPlayerId = Math.round(message.attackerPlayerId));
    message.attackerUnitHandle !== undefined && (obj.attackerUnitHandle = Math.round(message.attackerUnitHandle));
    message.abilityId !== undefined && (obj.abilityId = Math.round(message.abilityId));
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState_EventDamage>): CMsgBotWorldState_EventDamage {
    return CMsgBotWorldState_EventDamage.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState_EventDamage>): CMsgBotWorldState_EventDamage {
    const message = createBaseCMsgBotWorldState_EventDamage();
    message.damage = object.damage ?? 0;
    message.victimPlayerId = object.victimPlayerId ?? 0;
    message.victimUnitHandle = object.victimUnitHandle ?? 0;
    message.attackerPlayerId = object.attackerPlayerId ?? 0;
    message.attackerUnitHandle = object.attackerUnitHandle ?? 0;
    message.abilityId = object.abilityId ?? 0;
    return message;
  },
};

function createBaseCMsgBotWorldState_EventCourierKilled(): CMsgBotWorldState_EventCourierKilled {
  return { teamId: 0, courierUnitHandle: 0, killerPlayerId: 0, killerUnitHandle: 0 };
}

export const CMsgBotWorldState_EventCourierKilled = {
  encode(message: CMsgBotWorldState_EventCourierKilled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).uint32(message.teamId);
    }
    if (message.courierUnitHandle !== 0) {
      writer.uint32(16).uint32(message.courierUnitHandle);
    }
    if (message.killerPlayerId !== 0) {
      writer.uint32(24).int32(message.killerPlayerId);
    }
    if (message.killerUnitHandle !== 0) {
      writer.uint32(32).uint32(message.killerUnitHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState_EventCourierKilled {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState_EventCourierKilled();
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

          message.courierUnitHandle = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.killerPlayerId = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.killerUnitHandle = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBotWorldState_EventCourierKilled {
    return {
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      courierUnitHandle: isSet(object.courierUnitHandle) ? Number(object.courierUnitHandle) : 0,
      killerPlayerId: isSet(object.killerPlayerId) ? Number(object.killerPlayerId) : 0,
      killerUnitHandle: isSet(object.killerUnitHandle) ? Number(object.killerUnitHandle) : 0,
    };
  },

  toJSON(message: CMsgBotWorldState_EventCourierKilled): unknown {
    const obj: any = {};
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.courierUnitHandle !== undefined && (obj.courierUnitHandle = Math.round(message.courierUnitHandle));
    message.killerPlayerId !== undefined && (obj.killerPlayerId = Math.round(message.killerPlayerId));
    message.killerUnitHandle !== undefined && (obj.killerUnitHandle = Math.round(message.killerUnitHandle));
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState_EventCourierKilled>): CMsgBotWorldState_EventCourierKilled {
    return CMsgBotWorldState_EventCourierKilled.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState_EventCourierKilled>): CMsgBotWorldState_EventCourierKilled {
    const message = createBaseCMsgBotWorldState_EventCourierKilled();
    message.teamId = object.teamId ?? 0;
    message.courierUnitHandle = object.courierUnitHandle ?? 0;
    message.killerPlayerId = object.killerPlayerId ?? 0;
    message.killerUnitHandle = object.killerUnitHandle ?? 0;
    return message;
  },
};

function createBaseCMsgBotWorldState_EventRoshanKilled(): CMsgBotWorldState_EventRoshanKilled {
  return { killerPlayerId: 0, killerUnitHandle: 0 };
}

export const CMsgBotWorldState_EventRoshanKilled = {
  encode(message: CMsgBotWorldState_EventRoshanKilled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.killerPlayerId !== 0) {
      writer.uint32(8).int32(message.killerPlayerId);
    }
    if (message.killerUnitHandle !== 0) {
      writer.uint32(16).uint32(message.killerUnitHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState_EventRoshanKilled {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState_EventRoshanKilled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.killerPlayerId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.killerUnitHandle = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBotWorldState_EventRoshanKilled {
    return {
      killerPlayerId: isSet(object.killerPlayerId) ? Number(object.killerPlayerId) : 0,
      killerUnitHandle: isSet(object.killerUnitHandle) ? Number(object.killerUnitHandle) : 0,
    };
  },

  toJSON(message: CMsgBotWorldState_EventRoshanKilled): unknown {
    const obj: any = {};
    message.killerPlayerId !== undefined && (obj.killerPlayerId = Math.round(message.killerPlayerId));
    message.killerUnitHandle !== undefined && (obj.killerUnitHandle = Math.round(message.killerUnitHandle));
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState_EventRoshanKilled>): CMsgBotWorldState_EventRoshanKilled {
    return CMsgBotWorldState_EventRoshanKilled.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState_EventRoshanKilled>): CMsgBotWorldState_EventRoshanKilled {
    const message = createBaseCMsgBotWorldState_EventRoshanKilled();
    message.killerPlayerId = object.killerPlayerId ?? 0;
    message.killerUnitHandle = object.killerUnitHandle ?? 0;
    return message;
  },
};

function createBaseCMsgBotWorldState_EventTree(): CMsgBotWorldState_EventTree {
  return { treeId: 0, destroyed: false, respawned: false, location: undefined, delayed: false };
}

export const CMsgBotWorldState_EventTree = {
  encode(message: CMsgBotWorldState_EventTree, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.treeId !== 0) {
      writer.uint32(8).uint32(message.treeId);
    }
    if (message.destroyed === true) {
      writer.uint32(16).bool(message.destroyed);
    }
    if (message.respawned === true) {
      writer.uint32(24).bool(message.respawned);
    }
    if (message.location !== undefined) {
      CMsgBotWorldState_Vector.encode(message.location, writer.uint32(34).fork()).ldelim();
    }
    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState_EventTree {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState_EventTree();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.treeId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.destroyed = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.respawned = reader.bool();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.location = CMsgBotWorldState_Vector.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.delayed = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBotWorldState_EventTree {
    return {
      treeId: isSet(object.treeId) ? Number(object.treeId) : 0,
      destroyed: isSet(object.destroyed) ? Boolean(object.destroyed) : false,
      respawned: isSet(object.respawned) ? Boolean(object.respawned) : false,
      location: isSet(object.location) ? CMsgBotWorldState_Vector.fromJSON(object.location) : undefined,
      delayed: isSet(object.delayed) ? Boolean(object.delayed) : false,
    };
  },

  toJSON(message: CMsgBotWorldState_EventTree): unknown {
    const obj: any = {};
    message.treeId !== undefined && (obj.treeId = Math.round(message.treeId));
    message.destroyed !== undefined && (obj.destroyed = message.destroyed);
    message.respawned !== undefined && (obj.respawned = message.respawned);
    message.location !== undefined &&
      (obj.location = message.location ? CMsgBotWorldState_Vector.toJSON(message.location) : undefined);
    message.delayed !== undefined && (obj.delayed = message.delayed);
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState_EventTree>): CMsgBotWorldState_EventTree {
    return CMsgBotWorldState_EventTree.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState_EventTree>): CMsgBotWorldState_EventTree {
    const message = createBaseCMsgBotWorldState_EventTree();
    message.treeId = object.treeId ?? 0;
    message.destroyed = object.destroyed ?? false;
    message.respawned = object.respawned ?? false;
    message.location = (object.location !== undefined && object.location !== null)
      ? CMsgBotWorldState_Vector.fromPartial(object.location)
      : undefined;
    message.delayed = object.delayed ?? false;
    return message;
  },
};

function createBaseCMsgBotWorldState_Unit(): CMsgBotWorldState_Unit {
  return {
    handle: 0,
    unitType: 0,
    name: "",
    teamId: 0,
    level: 0,
    location: undefined,
    isAlive: false,
    playerId: 0,
    boundingRadius: 0,
    facing: 0,
    groundHeight: 0,
    visionRangeDaytime: 0,
    visionRangeNighttime: 0,
    health: 0,
    healthMax: 0,
    healthRegen: 0,
    mana: 0,
    manaMax: 0,
    manaRegen: 0,
    baseMovementSpeed: 0,
    currentMovementSpeed: 0,
    animActivity: 0,
    animCycle: 0,
    baseDamage: 0,
    baseDamageVariance: 0,
    bonusDamage: 0,
    attackDamage: 0,
    attackRange: 0,
    attackSpeed: 0,
    attackAnimPoint: 0,
    attackAcquisitionRange: 0,
    attackProjectileSpeed: 0,
    attackTargetHandle: 0,
    attackTargetName: "",
    attacksPerSecond: 0,
    lastAttackTime: 0,
    bountyXp: 0,
    bountyGoldMin: 0,
    bountyGoldMax: 0,
    isChanneling: false,
    activeAbilityHandle: 0,
    isAttackImmune: false,
    isBlind: false,
    isBlockDisabled: false,
    isDisarmed: false,
    isDominated: false,
    isEvadeDisabled: false,
    isHexed: false,
    isInvisible: false,
    isInvulnerable: false,
    isMagicImmune: false,
    isMuted: false,
    isNightmared: false,
    isRooted: false,
    isSilenced: false,
    isSpeciallyDeniable: false,
    isStunned: false,
    isUnableToMiss: false,
    hasScepter: false,
    isSpeciallyUndeniable: false,
    abilities: [],
    items: [],
    modifiers: [],
    incomingTrackingProjectiles: [],
    actionType: 0,
    abilityTargetHandle: 0,
    abilityTargetName: "",
    isUsingAbility: false,
    primaryAttribute: 0,
    isIllusion: false,
    respawnTime: 0,
    buybackCost: 0,
    buybackCooldown: 0,
    spellAmplification: 0,
    armor: 0,
    magicResist: 0,
    evasion: 0,
    xpNeededToLevel: 0,
    abilityPoints: 0,
    reliableGold: 0,
    unreliableGold: 0,
    lastHits: 0,
    denies: 0,
    netWorth: 0,
    strength: 0,
    agility: 0,
    intelligence: 0,
    remainingLifespan: 0,
    flyingCourier: false,
    shrineCooldown: 0,
    isShrineHealing: false,
  };
}

export const CMsgBotWorldState_Unit = {
  encode(message: CMsgBotWorldState_Unit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handle !== 0) {
      writer.uint32(8).uint32(message.handle);
    }
    if (message.unitType !== 0) {
      writer.uint32(16).int32(message.unitType);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.teamId !== 0) {
      writer.uint32(32).uint32(message.teamId);
    }
    if (message.level !== 0) {
      writer.uint32(40).uint32(message.level);
    }
    if (message.location !== undefined) {
      CMsgBotWorldState_Vector.encode(message.location, writer.uint32(50).fork()).ldelim();
    }
    if (message.isAlive === true) {
      writer.uint32(56).bool(message.isAlive);
    }
    if (message.playerId !== 0) {
      writer.uint32(64).int32(message.playerId);
    }
    if (message.boundingRadius !== 0) {
      writer.uint32(80).int32(message.boundingRadius);
    }
    if (message.facing !== 0) {
      writer.uint32(88).int32(message.facing);
    }
    if (message.groundHeight !== 0) {
      writer.uint32(96).uint32(message.groundHeight);
    }
    if (message.visionRangeDaytime !== 0) {
      writer.uint32(120).uint32(message.visionRangeDaytime);
    }
    if (message.visionRangeNighttime !== 0) {
      writer.uint32(128).uint32(message.visionRangeNighttime);
    }
    if (message.health !== 0) {
      writer.uint32(160).int32(message.health);
    }
    if (message.healthMax !== 0) {
      writer.uint32(168).int32(message.healthMax);
    }
    if (message.healthRegen !== 0) {
      writer.uint32(181).float(message.healthRegen);
    }
    if (message.mana !== 0) {
      writer.uint32(200).int32(message.mana);
    }
    if (message.manaMax !== 0) {
      writer.uint32(208).int32(message.manaMax);
    }
    if (message.manaRegen !== 0) {
      writer.uint32(221).float(message.manaRegen);
    }
    if (message.baseMovementSpeed !== 0) {
      writer.uint32(240).int32(message.baseMovementSpeed);
    }
    if (message.currentMovementSpeed !== 0) {
      writer.uint32(248).int32(message.currentMovementSpeed);
    }
    if (message.animActivity !== 0) {
      writer.uint32(280).int32(message.animActivity);
    }
    if (message.animCycle !== 0) {
      writer.uint32(293).float(message.animCycle);
    }
    if (message.baseDamage !== 0) {
      writer.uint32(320).int32(message.baseDamage);
    }
    if (message.baseDamageVariance !== 0) {
      writer.uint32(328).int32(message.baseDamageVariance);
    }
    if (message.bonusDamage !== 0) {
      writer.uint32(336).int32(message.bonusDamage);
    }
    if (message.attackDamage !== 0) {
      writer.uint32(344).int32(message.attackDamage);
    }
    if (message.attackRange !== 0) {
      writer.uint32(352).int32(message.attackRange);
    }
    if (message.attackSpeed !== 0) {
      writer.uint32(365).float(message.attackSpeed);
    }
    if (message.attackAnimPoint !== 0) {
      writer.uint32(373).float(message.attackAnimPoint);
    }
    if (message.attackAcquisitionRange !== 0) {
      writer.uint32(376).int32(message.attackAcquisitionRange);
    }
    if (message.attackProjectileSpeed !== 0) {
      writer.uint32(384).int32(message.attackProjectileSpeed);
    }
    if (message.attackTargetHandle !== 0) {
      writer.uint32(392).uint32(message.attackTargetHandle);
    }
    if (message.attackTargetName !== "") {
      writer.uint32(418).string(message.attackTargetName);
    }
    if (message.attacksPerSecond !== 0) {
      writer.uint32(400).int32(message.attacksPerSecond);
    }
    if (message.lastAttackTime !== 0) {
      writer.uint32(413).float(message.lastAttackTime);
    }
    if (message.bountyXp !== 0) {
      writer.uint32(480).uint32(message.bountyXp);
    }
    if (message.bountyGoldMin !== 0) {
      writer.uint32(488).uint32(message.bountyGoldMin);
    }
    if (message.bountyGoldMax !== 0) {
      writer.uint32(496).uint32(message.bountyGoldMax);
    }
    if (message.isChanneling === true) {
      writer.uint32(520).bool(message.isChanneling);
    }
    if (message.activeAbilityHandle !== 0) {
      writer.uint32(528).uint32(message.activeAbilityHandle);
    }
    if (message.isAttackImmune === true) {
      writer.uint32(560).bool(message.isAttackImmune);
    }
    if (message.isBlind === true) {
      writer.uint32(568).bool(message.isBlind);
    }
    if (message.isBlockDisabled === true) {
      writer.uint32(576).bool(message.isBlockDisabled);
    }
    if (message.isDisarmed === true) {
      writer.uint32(584).bool(message.isDisarmed);
    }
    if (message.isDominated === true) {
      writer.uint32(592).bool(message.isDominated);
    }
    if (message.isEvadeDisabled === true) {
      writer.uint32(600).bool(message.isEvadeDisabled);
    }
    if (message.isHexed === true) {
      writer.uint32(608).bool(message.isHexed);
    }
    if (message.isInvisible === true) {
      writer.uint32(616).bool(message.isInvisible);
    }
    if (message.isInvulnerable === true) {
      writer.uint32(624).bool(message.isInvulnerable);
    }
    if (message.isMagicImmune === true) {
      writer.uint32(632).bool(message.isMagicImmune);
    }
    if (message.isMuted === true) {
      writer.uint32(640).bool(message.isMuted);
    }
    if (message.isNightmared === true) {
      writer.uint32(656).bool(message.isNightmared);
    }
    if (message.isRooted === true) {
      writer.uint32(664).bool(message.isRooted);
    }
    if (message.isSilenced === true) {
      writer.uint32(672).bool(message.isSilenced);
    }
    if (message.isSpeciallyDeniable === true) {
      writer.uint32(680).bool(message.isSpeciallyDeniable);
    }
    if (message.isStunned === true) {
      writer.uint32(688).bool(message.isStunned);
    }
    if (message.isUnableToMiss === true) {
      writer.uint32(696).bool(message.isUnableToMiss);
    }
    if (message.hasScepter === true) {
      writer.uint32(704).bool(message.hasScepter);
    }
    if (message.isSpeciallyUndeniable === true) {
      writer.uint32(752).bool(message.isSpeciallyUndeniable);
    }
    for (const v of message.abilities) {
      CMsgBotWorldState_Ability.encode(v!, writer.uint32(722).fork()).ldelim();
    }
    for (const v of message.items) {
      CMsgBotWorldState_Ability.encode(v!, writer.uint32(730).fork()).ldelim();
    }
    for (const v of message.modifiers) {
      CMsgBotWorldState_Modifier.encode(v!, writer.uint32(738).fork()).ldelim();
    }
    for (const v of message.incomingTrackingProjectiles) {
      CMsgBotWorldState_TrackingProjectile.encode(v!, writer.uint32(746).fork()).ldelim();
    }
    if (message.actionType !== 0) {
      writer.uint32(800).uint32(message.actionType);
    }
    if (message.abilityTargetHandle !== 0) {
      writer.uint32(808).uint32(message.abilityTargetHandle);
    }
    if (message.abilityTargetName !== "") {
      writer.uint32(826).string(message.abilityTargetName);
    }
    if (message.isUsingAbility === true) {
      writer.uint32(816).bool(message.isUsingAbility);
    }
    if (message.primaryAttribute !== 0) {
      writer.uint32(880).uint32(message.primaryAttribute);
    }
    if (message.isIllusion === true) {
      writer.uint32(888).bool(message.isIllusion);
    }
    if (message.respawnTime !== 0) {
      writer.uint32(901).float(message.respawnTime);
    }
    if (message.buybackCost !== 0) {
      writer.uint32(904).uint32(message.buybackCost);
    }
    if (message.buybackCooldown !== 0) {
      writer.uint32(917).float(message.buybackCooldown);
    }
    if (message.spellAmplification !== 0) {
      writer.uint32(925).float(message.spellAmplification);
    }
    if (message.armor !== 0) {
      writer.uint32(933).float(message.armor);
    }
    if (message.magicResist !== 0) {
      writer.uint32(941).float(message.magicResist);
    }
    if (message.evasion !== 0) {
      writer.uint32(949).float(message.evasion);
    }
    if (message.xpNeededToLevel !== 0) {
      writer.uint32(960).uint32(message.xpNeededToLevel);
    }
    if (message.abilityPoints !== 0) {
      writer.uint32(968).uint32(message.abilityPoints);
    }
    if (message.reliableGold !== 0) {
      writer.uint32(976).int32(message.reliableGold);
    }
    if (message.unreliableGold !== 0) {
      writer.uint32(984).int32(message.unreliableGold);
    }
    if (message.lastHits !== 0) {
      writer.uint32(992).uint32(message.lastHits);
    }
    if (message.denies !== 0) {
      writer.uint32(1000).uint32(message.denies);
    }
    if (message.netWorth !== 0) {
      writer.uint32(1008).uint32(message.netWorth);
    }
    if (message.strength !== 0) {
      writer.uint32(1016).uint32(message.strength);
    }
    if (message.agility !== 0) {
      writer.uint32(1024).uint32(message.agility);
    }
    if (message.intelligence !== 0) {
      writer.uint32(1032).uint32(message.intelligence);
    }
    if (message.remainingLifespan !== 0) {
      writer.uint32(1045).float(message.remainingLifespan);
    }
    if (message.flyingCourier === true) {
      writer.uint32(1120).bool(message.flyingCourier);
    }
    if (message.shrineCooldown !== 0) {
      writer.uint32(1205).float(message.shrineCooldown);
    }
    if (message.isShrineHealing === true) {
      writer.uint32(1208).bool(message.isShrineHealing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBotWorldState_Unit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBotWorldState_Unit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.handle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.unitType = reader.int32() as any;
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

          message.teamId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.level = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.location = CMsgBotWorldState_Vector.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.isAlive = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.playerId = reader.int32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.boundingRadius = reader.int32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.facing = reader.int32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.groundHeight = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.visionRangeDaytime = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.visionRangeNighttime = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.health = reader.int32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.healthMax = reader.int32();
          continue;
        case 22:
          if (tag != 181) {
            break;
          }

          message.healthRegen = reader.float();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.mana = reader.int32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.manaMax = reader.int32();
          continue;
        case 27:
          if (tag != 221) {
            break;
          }

          message.manaRegen = reader.float();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.baseMovementSpeed = reader.int32();
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.currentMovementSpeed = reader.int32();
          continue;
        case 35:
          if (tag != 280) {
            break;
          }

          message.animActivity = reader.int32();
          continue;
        case 36:
          if (tag != 293) {
            break;
          }

          message.animCycle = reader.float();
          continue;
        case 40:
          if (tag != 320) {
            break;
          }

          message.baseDamage = reader.int32();
          continue;
        case 41:
          if (tag != 328) {
            break;
          }

          message.baseDamageVariance = reader.int32();
          continue;
        case 42:
          if (tag != 336) {
            break;
          }

          message.bonusDamage = reader.int32();
          continue;
        case 43:
          if (tag != 344) {
            break;
          }

          message.attackDamage = reader.int32();
          continue;
        case 44:
          if (tag != 352) {
            break;
          }

          message.attackRange = reader.int32();
          continue;
        case 45:
          if (tag != 365) {
            break;
          }

          message.attackSpeed = reader.float();
          continue;
        case 46:
          if (tag != 373) {
            break;
          }

          message.attackAnimPoint = reader.float();
          continue;
        case 47:
          if (tag != 376) {
            break;
          }

          message.attackAcquisitionRange = reader.int32();
          continue;
        case 48:
          if (tag != 384) {
            break;
          }

          message.attackProjectileSpeed = reader.int32();
          continue;
        case 49:
          if (tag != 392) {
            break;
          }

          message.attackTargetHandle = reader.uint32();
          continue;
        case 52:
          if (tag != 418) {
            break;
          }

          message.attackTargetName = reader.string();
          continue;
        case 50:
          if (tag != 400) {
            break;
          }

          message.attacksPerSecond = reader.int32();
          continue;
        case 51:
          if (tag != 413) {
            break;
          }

          message.lastAttackTime = reader.float();
          continue;
        case 60:
          if (tag != 480) {
            break;
          }

          message.bountyXp = reader.uint32();
          continue;
        case 61:
          if (tag != 488) {
            break;
          }

          message.bountyGoldMin = reader.uint32();
          continue;
        case 62:
          if (tag != 496) {
            break;
          }

          message.bountyGoldMax = reader.uint32();
          continue;
        case 65:
          if (tag != 520) {
            break;
          }

          message.isChanneling = reader.bool();
          continue;
        case 66:
          if (tag != 528) {
            break;
          }

          message.activeAbilityHandle = reader.uint32();
          continue;
        case 70:
          if (tag != 560) {
            break;
          }

          message.isAttackImmune = reader.bool();
          continue;
        case 71:
          if (tag != 568) {
            break;
          }

          message.isBlind = reader.bool();
          continue;
        case 72:
          if (tag != 576) {
            break;
          }

          message.isBlockDisabled = reader.bool();
          continue;
        case 73:
          if (tag != 584) {
            break;
          }

          message.isDisarmed = reader.bool();
          continue;
        case 74:
          if (tag != 592) {
            break;
          }

          message.isDominated = reader.bool();
          continue;
        case 75:
          if (tag != 600) {
            break;
          }

          message.isEvadeDisabled = reader.bool();
          continue;
        case 76:
          if (tag != 608) {
            break;
          }

          message.isHexed = reader.bool();
          continue;
        case 77:
          if (tag != 616) {
            break;
          }

          message.isInvisible = reader.bool();
          continue;
        case 78:
          if (tag != 624) {
            break;
          }

          message.isInvulnerable = reader.bool();
          continue;
        case 79:
          if (tag != 632) {
            break;
          }

          message.isMagicImmune = reader.bool();
          continue;
        case 80:
          if (tag != 640) {
            break;
          }

          message.isMuted = reader.bool();
          continue;
        case 82:
          if (tag != 656) {
            break;
          }

          message.isNightmared = reader.bool();
          continue;
        case 83:
          if (tag != 664) {
            break;
          }

          message.isRooted = reader.bool();
          continue;
        case 84:
          if (tag != 672) {
            break;
          }

          message.isSilenced = reader.bool();
          continue;
        case 85:
          if (tag != 680) {
            break;
          }

          message.isSpeciallyDeniable = reader.bool();
          continue;
        case 86:
          if (tag != 688) {
            break;
          }

          message.isStunned = reader.bool();
          continue;
        case 87:
          if (tag != 696) {
            break;
          }

          message.isUnableToMiss = reader.bool();
          continue;
        case 88:
          if (tag != 704) {
            break;
          }

          message.hasScepter = reader.bool();
          continue;
        case 94:
          if (tag != 752) {
            break;
          }

          message.isSpeciallyUndeniable = reader.bool();
          continue;
        case 90:
          if (tag != 722) {
            break;
          }

          message.abilities.push(CMsgBotWorldState_Ability.decode(reader, reader.uint32()));
          continue;
        case 91:
          if (tag != 730) {
            break;
          }

          message.items.push(CMsgBotWorldState_Ability.decode(reader, reader.uint32()));
          continue;
        case 92:
          if (tag != 738) {
            break;
          }

          message.modifiers.push(CMsgBotWorldState_Modifier.decode(reader, reader.uint32()));
          continue;
        case 93:
          if (tag != 746) {
            break;
          }

          message.incomingTrackingProjectiles.push(
            CMsgBotWorldState_TrackingProjectile.decode(reader, reader.uint32()),
          );
          continue;
        case 100:
          if (tag != 800) {
            break;
          }

          message.actionType = reader.uint32();
          continue;
        case 101:
          if (tag != 808) {
            break;
          }

          message.abilityTargetHandle = reader.uint32();
          continue;
        case 103:
          if (tag != 826) {
            break;
          }

          message.abilityTargetName = reader.string();
          continue;
        case 102:
          if (tag != 816) {
            break;
          }

          message.isUsingAbility = reader.bool();
          continue;
        case 110:
          if (tag != 880) {
            break;
          }

          message.primaryAttribute = reader.uint32();
          continue;
        case 111:
          if (tag != 888) {
            break;
          }

          message.isIllusion = reader.bool();
          continue;
        case 112:
          if (tag != 901) {
            break;
          }

          message.respawnTime = reader.float();
          continue;
        case 113:
          if (tag != 904) {
            break;
          }

          message.buybackCost = reader.uint32();
          continue;
        case 114:
          if (tag != 917) {
            break;
          }

          message.buybackCooldown = reader.float();
          continue;
        case 115:
          if (tag != 925) {
            break;
          }

          message.spellAmplification = reader.float();
          continue;
        case 116:
          if (tag != 933) {
            break;
          }

          message.armor = reader.float();
          continue;
        case 117:
          if (tag != 941) {
            break;
          }

          message.magicResist = reader.float();
          continue;
        case 118:
          if (tag != 949) {
            break;
          }

          message.evasion = reader.float();
          continue;
        case 120:
          if (tag != 960) {
            break;
          }

          message.xpNeededToLevel = reader.uint32();
          continue;
        case 121:
          if (tag != 968) {
            break;
          }

          message.abilityPoints = reader.uint32();
          continue;
        case 122:
          if (tag != 976) {
            break;
          }

          message.reliableGold = reader.int32();
          continue;
        case 123:
          if (tag != 984) {
            break;
          }

          message.unreliableGold = reader.int32();
          continue;
        case 124:
          if (tag != 992) {
            break;
          }

          message.lastHits = reader.uint32();
          continue;
        case 125:
          if (tag != 1000) {
            break;
          }

          message.denies = reader.uint32();
          continue;
        case 126:
          if (tag != 1008) {
            break;
          }

          message.netWorth = reader.uint32();
          continue;
        case 127:
          if (tag != 1016) {
            break;
          }

          message.strength = reader.uint32();
          continue;
        case 128:
          if (tag != 1024) {
            break;
          }

          message.agility = reader.uint32();
          continue;
        case 129:
          if (tag != 1032) {
            break;
          }

          message.intelligence = reader.uint32();
          continue;
        case 130:
          if (tag != 1045) {
            break;
          }

          message.remainingLifespan = reader.float();
          continue;
        case 140:
          if (tag != 1120) {
            break;
          }

          message.flyingCourier = reader.bool();
          continue;
        case 150:
          if (tag != 1205) {
            break;
          }

          message.shrineCooldown = reader.float();
          continue;
        case 151:
          if (tag != 1208) {
            break;
          }

          message.isShrineHealing = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgBotWorldState_Unit {
    return {
      handle: isSet(object.handle) ? Number(object.handle) : 0,
      unitType: isSet(object.unitType) ? cMsgBotWorldState_UnitTypeFromJSON(object.unitType) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      location: isSet(object.location) ? CMsgBotWorldState_Vector.fromJSON(object.location) : undefined,
      isAlive: isSet(object.isAlive) ? Boolean(object.isAlive) : false,
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      boundingRadius: isSet(object.boundingRadius) ? Number(object.boundingRadius) : 0,
      facing: isSet(object.facing) ? Number(object.facing) : 0,
      groundHeight: isSet(object.groundHeight) ? Number(object.groundHeight) : 0,
      visionRangeDaytime: isSet(object.visionRangeDaytime) ? Number(object.visionRangeDaytime) : 0,
      visionRangeNighttime: isSet(object.visionRangeNighttime) ? Number(object.visionRangeNighttime) : 0,
      health: isSet(object.health) ? Number(object.health) : 0,
      healthMax: isSet(object.healthMax) ? Number(object.healthMax) : 0,
      healthRegen: isSet(object.healthRegen) ? Number(object.healthRegen) : 0,
      mana: isSet(object.mana) ? Number(object.mana) : 0,
      manaMax: isSet(object.manaMax) ? Number(object.manaMax) : 0,
      manaRegen: isSet(object.manaRegen) ? Number(object.manaRegen) : 0,
      baseMovementSpeed: isSet(object.baseMovementSpeed) ? Number(object.baseMovementSpeed) : 0,
      currentMovementSpeed: isSet(object.currentMovementSpeed) ? Number(object.currentMovementSpeed) : 0,
      animActivity: isSet(object.animActivity) ? Number(object.animActivity) : 0,
      animCycle: isSet(object.animCycle) ? Number(object.animCycle) : 0,
      baseDamage: isSet(object.baseDamage) ? Number(object.baseDamage) : 0,
      baseDamageVariance: isSet(object.baseDamageVariance) ? Number(object.baseDamageVariance) : 0,
      bonusDamage: isSet(object.bonusDamage) ? Number(object.bonusDamage) : 0,
      attackDamage: isSet(object.attackDamage) ? Number(object.attackDamage) : 0,
      attackRange: isSet(object.attackRange) ? Number(object.attackRange) : 0,
      attackSpeed: isSet(object.attackSpeed) ? Number(object.attackSpeed) : 0,
      attackAnimPoint: isSet(object.attackAnimPoint) ? Number(object.attackAnimPoint) : 0,
      attackAcquisitionRange: isSet(object.attackAcquisitionRange) ? Number(object.attackAcquisitionRange) : 0,
      attackProjectileSpeed: isSet(object.attackProjectileSpeed) ? Number(object.attackProjectileSpeed) : 0,
      attackTargetHandle: isSet(object.attackTargetHandle) ? Number(object.attackTargetHandle) : 0,
      attackTargetName: isSet(object.attackTargetName) ? String(object.attackTargetName) : "",
      attacksPerSecond: isSet(object.attacksPerSecond) ? Number(object.attacksPerSecond) : 0,
      lastAttackTime: isSet(object.lastAttackTime) ? Number(object.lastAttackTime) : 0,
      bountyXp: isSet(object.bountyXp) ? Number(object.bountyXp) : 0,
      bountyGoldMin: isSet(object.bountyGoldMin) ? Number(object.bountyGoldMin) : 0,
      bountyGoldMax: isSet(object.bountyGoldMax) ? Number(object.bountyGoldMax) : 0,
      isChanneling: isSet(object.isChanneling) ? Boolean(object.isChanneling) : false,
      activeAbilityHandle: isSet(object.activeAbilityHandle) ? Number(object.activeAbilityHandle) : 0,
      isAttackImmune: isSet(object.isAttackImmune) ? Boolean(object.isAttackImmune) : false,
      isBlind: isSet(object.isBlind) ? Boolean(object.isBlind) : false,
      isBlockDisabled: isSet(object.isBlockDisabled) ? Boolean(object.isBlockDisabled) : false,
      isDisarmed: isSet(object.isDisarmed) ? Boolean(object.isDisarmed) : false,
      isDominated: isSet(object.isDominated) ? Boolean(object.isDominated) : false,
      isEvadeDisabled: isSet(object.isEvadeDisabled) ? Boolean(object.isEvadeDisabled) : false,
      isHexed: isSet(object.isHexed) ? Boolean(object.isHexed) : false,
      isInvisible: isSet(object.isInvisible) ? Boolean(object.isInvisible) : false,
      isInvulnerable: isSet(object.isInvulnerable) ? Boolean(object.isInvulnerable) : false,
      isMagicImmune: isSet(object.isMagicImmune) ? Boolean(object.isMagicImmune) : false,
      isMuted: isSet(object.isMuted) ? Boolean(object.isMuted) : false,
      isNightmared: isSet(object.isNightmared) ? Boolean(object.isNightmared) : false,
      isRooted: isSet(object.isRooted) ? Boolean(object.isRooted) : false,
      isSilenced: isSet(object.isSilenced) ? Boolean(object.isSilenced) : false,
      isSpeciallyDeniable: isSet(object.isSpeciallyDeniable) ? Boolean(object.isSpeciallyDeniable) : false,
      isStunned: isSet(object.isStunned) ? Boolean(object.isStunned) : false,
      isUnableToMiss: isSet(object.isUnableToMiss) ? Boolean(object.isUnableToMiss) : false,
      hasScepter: isSet(object.hasScepter) ? Boolean(object.hasScepter) : false,
      isSpeciallyUndeniable: isSet(object.isSpeciallyUndeniable) ? Boolean(object.isSpeciallyUndeniable) : false,
      abilities: Array.isArray(object?.abilities)
        ? object.abilities.map((e: any) => CMsgBotWorldState_Ability.fromJSON(e))
        : [],
      items: Array.isArray(object?.items) ? object.items.map((e: any) => CMsgBotWorldState_Ability.fromJSON(e)) : [],
      modifiers: Array.isArray(object?.modifiers)
        ? object.modifiers.map((e: any) => CMsgBotWorldState_Modifier.fromJSON(e))
        : [],
      incomingTrackingProjectiles: Array.isArray(object?.incomingTrackingProjectiles)
        ? object.incomingTrackingProjectiles.map((e: any) => CMsgBotWorldState_TrackingProjectile.fromJSON(e))
        : [],
      actionType: isSet(object.actionType) ? Number(object.actionType) : 0,
      abilityTargetHandle: isSet(object.abilityTargetHandle) ? Number(object.abilityTargetHandle) : 0,
      abilityTargetName: isSet(object.abilityTargetName) ? String(object.abilityTargetName) : "",
      isUsingAbility: isSet(object.isUsingAbility) ? Boolean(object.isUsingAbility) : false,
      primaryAttribute: isSet(object.primaryAttribute) ? Number(object.primaryAttribute) : 0,
      isIllusion: isSet(object.isIllusion) ? Boolean(object.isIllusion) : false,
      respawnTime: isSet(object.respawnTime) ? Number(object.respawnTime) : 0,
      buybackCost: isSet(object.buybackCost) ? Number(object.buybackCost) : 0,
      buybackCooldown: isSet(object.buybackCooldown) ? Number(object.buybackCooldown) : 0,
      spellAmplification: isSet(object.spellAmplification) ? Number(object.spellAmplification) : 0,
      armor: isSet(object.armor) ? Number(object.armor) : 0,
      magicResist: isSet(object.magicResist) ? Number(object.magicResist) : 0,
      evasion: isSet(object.evasion) ? Number(object.evasion) : 0,
      xpNeededToLevel: isSet(object.xpNeededToLevel) ? Number(object.xpNeededToLevel) : 0,
      abilityPoints: isSet(object.abilityPoints) ? Number(object.abilityPoints) : 0,
      reliableGold: isSet(object.reliableGold) ? Number(object.reliableGold) : 0,
      unreliableGold: isSet(object.unreliableGold) ? Number(object.unreliableGold) : 0,
      lastHits: isSet(object.lastHits) ? Number(object.lastHits) : 0,
      denies: isSet(object.denies) ? Number(object.denies) : 0,
      netWorth: isSet(object.netWorth) ? Number(object.netWorth) : 0,
      strength: isSet(object.strength) ? Number(object.strength) : 0,
      agility: isSet(object.agility) ? Number(object.agility) : 0,
      intelligence: isSet(object.intelligence) ? Number(object.intelligence) : 0,
      remainingLifespan: isSet(object.remainingLifespan) ? Number(object.remainingLifespan) : 0,
      flyingCourier: isSet(object.flyingCourier) ? Boolean(object.flyingCourier) : false,
      shrineCooldown: isSet(object.shrineCooldown) ? Number(object.shrineCooldown) : 0,
      isShrineHealing: isSet(object.isShrineHealing) ? Boolean(object.isShrineHealing) : false,
    };
  },

  toJSON(message: CMsgBotWorldState_Unit): unknown {
    const obj: any = {};
    message.handle !== undefined && (obj.handle = Math.round(message.handle));
    message.unitType !== undefined && (obj.unitType = cMsgBotWorldState_UnitTypeToJSON(message.unitType));
    message.name !== undefined && (obj.name = message.name);
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.location !== undefined &&
      (obj.location = message.location ? CMsgBotWorldState_Vector.toJSON(message.location) : undefined);
    message.isAlive !== undefined && (obj.isAlive = message.isAlive);
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.boundingRadius !== undefined && (obj.boundingRadius = Math.round(message.boundingRadius));
    message.facing !== undefined && (obj.facing = Math.round(message.facing));
    message.groundHeight !== undefined && (obj.groundHeight = Math.round(message.groundHeight));
    message.visionRangeDaytime !== undefined && (obj.visionRangeDaytime = Math.round(message.visionRangeDaytime));
    message.visionRangeNighttime !== undefined && (obj.visionRangeNighttime = Math.round(message.visionRangeNighttime));
    message.health !== undefined && (obj.health = Math.round(message.health));
    message.healthMax !== undefined && (obj.healthMax = Math.round(message.healthMax));
    message.healthRegen !== undefined && (obj.healthRegen = message.healthRegen);
    message.mana !== undefined && (obj.mana = Math.round(message.mana));
    message.manaMax !== undefined && (obj.manaMax = Math.round(message.manaMax));
    message.manaRegen !== undefined && (obj.manaRegen = message.manaRegen);
    message.baseMovementSpeed !== undefined && (obj.baseMovementSpeed = Math.round(message.baseMovementSpeed));
    message.currentMovementSpeed !== undefined && (obj.currentMovementSpeed = Math.round(message.currentMovementSpeed));
    message.animActivity !== undefined && (obj.animActivity = Math.round(message.animActivity));
    message.animCycle !== undefined && (obj.animCycle = message.animCycle);
    message.baseDamage !== undefined && (obj.baseDamage = Math.round(message.baseDamage));
    message.baseDamageVariance !== undefined && (obj.baseDamageVariance = Math.round(message.baseDamageVariance));
    message.bonusDamage !== undefined && (obj.bonusDamage = Math.round(message.bonusDamage));
    message.attackDamage !== undefined && (obj.attackDamage = Math.round(message.attackDamage));
    message.attackRange !== undefined && (obj.attackRange = Math.round(message.attackRange));
    message.attackSpeed !== undefined && (obj.attackSpeed = message.attackSpeed);
    message.attackAnimPoint !== undefined && (obj.attackAnimPoint = message.attackAnimPoint);
    message.attackAcquisitionRange !== undefined &&
      (obj.attackAcquisitionRange = Math.round(message.attackAcquisitionRange));
    message.attackProjectileSpeed !== undefined &&
      (obj.attackProjectileSpeed = Math.round(message.attackProjectileSpeed));
    message.attackTargetHandle !== undefined && (obj.attackTargetHandle = Math.round(message.attackTargetHandle));
    message.attackTargetName !== undefined && (obj.attackTargetName = message.attackTargetName);
    message.attacksPerSecond !== undefined && (obj.attacksPerSecond = Math.round(message.attacksPerSecond));
    message.lastAttackTime !== undefined && (obj.lastAttackTime = message.lastAttackTime);
    message.bountyXp !== undefined && (obj.bountyXp = Math.round(message.bountyXp));
    message.bountyGoldMin !== undefined && (obj.bountyGoldMin = Math.round(message.bountyGoldMin));
    message.bountyGoldMax !== undefined && (obj.bountyGoldMax = Math.round(message.bountyGoldMax));
    message.isChanneling !== undefined && (obj.isChanneling = message.isChanneling);
    message.activeAbilityHandle !== undefined && (obj.activeAbilityHandle = Math.round(message.activeAbilityHandle));
    message.isAttackImmune !== undefined && (obj.isAttackImmune = message.isAttackImmune);
    message.isBlind !== undefined && (obj.isBlind = message.isBlind);
    message.isBlockDisabled !== undefined && (obj.isBlockDisabled = message.isBlockDisabled);
    message.isDisarmed !== undefined && (obj.isDisarmed = message.isDisarmed);
    message.isDominated !== undefined && (obj.isDominated = message.isDominated);
    message.isEvadeDisabled !== undefined && (obj.isEvadeDisabled = message.isEvadeDisabled);
    message.isHexed !== undefined && (obj.isHexed = message.isHexed);
    message.isInvisible !== undefined && (obj.isInvisible = message.isInvisible);
    message.isInvulnerable !== undefined && (obj.isInvulnerable = message.isInvulnerable);
    message.isMagicImmune !== undefined && (obj.isMagicImmune = message.isMagicImmune);
    message.isMuted !== undefined && (obj.isMuted = message.isMuted);
    message.isNightmared !== undefined && (obj.isNightmared = message.isNightmared);
    message.isRooted !== undefined && (obj.isRooted = message.isRooted);
    message.isSilenced !== undefined && (obj.isSilenced = message.isSilenced);
    message.isSpeciallyDeniable !== undefined && (obj.isSpeciallyDeniable = message.isSpeciallyDeniable);
    message.isStunned !== undefined && (obj.isStunned = message.isStunned);
    message.isUnableToMiss !== undefined && (obj.isUnableToMiss = message.isUnableToMiss);
    message.hasScepter !== undefined && (obj.hasScepter = message.hasScepter);
    message.isSpeciallyUndeniable !== undefined && (obj.isSpeciallyUndeniable = message.isSpeciallyUndeniable);
    if (message.abilities) {
      obj.abilities = message.abilities.map((e) => e ? CMsgBotWorldState_Ability.toJSON(e) : undefined);
    } else {
      obj.abilities = [];
    }
    if (message.items) {
      obj.items = message.items.map((e) => e ? CMsgBotWorldState_Ability.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    if (message.modifiers) {
      obj.modifiers = message.modifiers.map((e) => e ? CMsgBotWorldState_Modifier.toJSON(e) : undefined);
    } else {
      obj.modifiers = [];
    }
    if (message.incomingTrackingProjectiles) {
      obj.incomingTrackingProjectiles = message.incomingTrackingProjectiles.map((e) =>
        e ? CMsgBotWorldState_TrackingProjectile.toJSON(e) : undefined
      );
    } else {
      obj.incomingTrackingProjectiles = [];
    }
    message.actionType !== undefined && (obj.actionType = Math.round(message.actionType));
    message.abilityTargetHandle !== undefined && (obj.abilityTargetHandle = Math.round(message.abilityTargetHandle));
    message.abilityTargetName !== undefined && (obj.abilityTargetName = message.abilityTargetName);
    message.isUsingAbility !== undefined && (obj.isUsingAbility = message.isUsingAbility);
    message.primaryAttribute !== undefined && (obj.primaryAttribute = Math.round(message.primaryAttribute));
    message.isIllusion !== undefined && (obj.isIllusion = message.isIllusion);
    message.respawnTime !== undefined && (obj.respawnTime = message.respawnTime);
    message.buybackCost !== undefined && (obj.buybackCost = Math.round(message.buybackCost));
    message.buybackCooldown !== undefined && (obj.buybackCooldown = message.buybackCooldown);
    message.spellAmplification !== undefined && (obj.spellAmplification = message.spellAmplification);
    message.armor !== undefined && (obj.armor = message.armor);
    message.magicResist !== undefined && (obj.magicResist = message.magicResist);
    message.evasion !== undefined && (obj.evasion = message.evasion);
    message.xpNeededToLevel !== undefined && (obj.xpNeededToLevel = Math.round(message.xpNeededToLevel));
    message.abilityPoints !== undefined && (obj.abilityPoints = Math.round(message.abilityPoints));
    message.reliableGold !== undefined && (obj.reliableGold = Math.round(message.reliableGold));
    message.unreliableGold !== undefined && (obj.unreliableGold = Math.round(message.unreliableGold));
    message.lastHits !== undefined && (obj.lastHits = Math.round(message.lastHits));
    message.denies !== undefined && (obj.denies = Math.round(message.denies));
    message.netWorth !== undefined && (obj.netWorth = Math.round(message.netWorth));
    message.strength !== undefined && (obj.strength = Math.round(message.strength));
    message.agility !== undefined && (obj.agility = Math.round(message.agility));
    message.intelligence !== undefined && (obj.intelligence = Math.round(message.intelligence));
    message.remainingLifespan !== undefined && (obj.remainingLifespan = message.remainingLifespan);
    message.flyingCourier !== undefined && (obj.flyingCourier = message.flyingCourier);
    message.shrineCooldown !== undefined && (obj.shrineCooldown = message.shrineCooldown);
    message.isShrineHealing !== undefined && (obj.isShrineHealing = message.isShrineHealing);
    return obj;
  },

  create(base?: DeepPartial<CMsgBotWorldState_Unit>): CMsgBotWorldState_Unit {
    return CMsgBotWorldState_Unit.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgBotWorldState_Unit>): CMsgBotWorldState_Unit {
    const message = createBaseCMsgBotWorldState_Unit();
    message.handle = object.handle ?? 0;
    message.unitType = object.unitType ?? 0;
    message.name = object.name ?? "";
    message.teamId = object.teamId ?? 0;
    message.level = object.level ?? 0;
    message.location = (object.location !== undefined && object.location !== null)
      ? CMsgBotWorldState_Vector.fromPartial(object.location)
      : undefined;
    message.isAlive = object.isAlive ?? false;
    message.playerId = object.playerId ?? 0;
    message.boundingRadius = object.boundingRadius ?? 0;
    message.facing = object.facing ?? 0;
    message.groundHeight = object.groundHeight ?? 0;
    message.visionRangeDaytime = object.visionRangeDaytime ?? 0;
    message.visionRangeNighttime = object.visionRangeNighttime ?? 0;
    message.health = object.health ?? 0;
    message.healthMax = object.healthMax ?? 0;
    message.healthRegen = object.healthRegen ?? 0;
    message.mana = object.mana ?? 0;
    message.manaMax = object.manaMax ?? 0;
    message.manaRegen = object.manaRegen ?? 0;
    message.baseMovementSpeed = object.baseMovementSpeed ?? 0;
    message.currentMovementSpeed = object.currentMovementSpeed ?? 0;
    message.animActivity = object.animActivity ?? 0;
    message.animCycle = object.animCycle ?? 0;
    message.baseDamage = object.baseDamage ?? 0;
    message.baseDamageVariance = object.baseDamageVariance ?? 0;
    message.bonusDamage = object.bonusDamage ?? 0;
    message.attackDamage = object.attackDamage ?? 0;
    message.attackRange = object.attackRange ?? 0;
    message.attackSpeed = object.attackSpeed ?? 0;
    message.attackAnimPoint = object.attackAnimPoint ?? 0;
    message.attackAcquisitionRange = object.attackAcquisitionRange ?? 0;
    message.attackProjectileSpeed = object.attackProjectileSpeed ?? 0;
    message.attackTargetHandle = object.attackTargetHandle ?? 0;
    message.attackTargetName = object.attackTargetName ?? "";
    message.attacksPerSecond = object.attacksPerSecond ?? 0;
    message.lastAttackTime = object.lastAttackTime ?? 0;
    message.bountyXp = object.bountyXp ?? 0;
    message.bountyGoldMin = object.bountyGoldMin ?? 0;
    message.bountyGoldMax = object.bountyGoldMax ?? 0;
    message.isChanneling = object.isChanneling ?? false;
    message.activeAbilityHandle = object.activeAbilityHandle ?? 0;
    message.isAttackImmune = object.isAttackImmune ?? false;
    message.isBlind = object.isBlind ?? false;
    message.isBlockDisabled = object.isBlockDisabled ?? false;
    message.isDisarmed = object.isDisarmed ?? false;
    message.isDominated = object.isDominated ?? false;
    message.isEvadeDisabled = object.isEvadeDisabled ?? false;
    message.isHexed = object.isHexed ?? false;
    message.isInvisible = object.isInvisible ?? false;
    message.isInvulnerable = object.isInvulnerable ?? false;
    message.isMagicImmune = object.isMagicImmune ?? false;
    message.isMuted = object.isMuted ?? false;
    message.isNightmared = object.isNightmared ?? false;
    message.isRooted = object.isRooted ?? false;
    message.isSilenced = object.isSilenced ?? false;
    message.isSpeciallyDeniable = object.isSpeciallyDeniable ?? false;
    message.isStunned = object.isStunned ?? false;
    message.isUnableToMiss = object.isUnableToMiss ?? false;
    message.hasScepter = object.hasScepter ?? false;
    message.isSpeciallyUndeniable = object.isSpeciallyUndeniable ?? false;
    message.abilities = object.abilities?.map((e) => CMsgBotWorldState_Ability.fromPartial(e)) || [];
    message.items = object.items?.map((e) => CMsgBotWorldState_Ability.fromPartial(e)) || [];
    message.modifiers = object.modifiers?.map((e) => CMsgBotWorldState_Modifier.fromPartial(e)) || [];
    message.incomingTrackingProjectiles =
      object.incomingTrackingProjectiles?.map((e) => CMsgBotWorldState_TrackingProjectile.fromPartial(e)) || [];
    message.actionType = object.actionType ?? 0;
    message.abilityTargetHandle = object.abilityTargetHandle ?? 0;
    message.abilityTargetName = object.abilityTargetName ?? "";
    message.isUsingAbility = object.isUsingAbility ?? false;
    message.primaryAttribute = object.primaryAttribute ?? 0;
    message.isIllusion = object.isIllusion ?? false;
    message.respawnTime = object.respawnTime ?? 0;
    message.buybackCost = object.buybackCost ?? 0;
    message.buybackCooldown = object.buybackCooldown ?? 0;
    message.spellAmplification = object.spellAmplification ?? 0;
    message.armor = object.armor ?? 0;
    message.magicResist = object.magicResist ?? 0;
    message.evasion = object.evasion ?? 0;
    message.xpNeededToLevel = object.xpNeededToLevel ?? 0;
    message.abilityPoints = object.abilityPoints ?? 0;
    message.reliableGold = object.reliableGold ?? 0;
    message.unreliableGold = object.unreliableGold ?? 0;
    message.lastHits = object.lastHits ?? 0;
    message.denies = object.denies ?? 0;
    message.netWorth = object.netWorth ?? 0;
    message.strength = object.strength ?? 0;
    message.agility = object.agility ?? 0;
    message.intelligence = object.intelligence ?? 0;
    message.remainingLifespan = object.remainingLifespan ?? 0;
    message.flyingCourier = object.flyingCourier ?? false;
    message.shrineCooldown = object.shrineCooldown ?? 0;
    message.isShrineHealing = object.isShrineHealing ?? false;
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
