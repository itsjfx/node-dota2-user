/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { CMsgVector } from "./networkbasetypes";

export enum dotaModifierEntryType {
  DOTA_MODIFIER_ENTRY_TYPE_ACTIVE = 1,
  DOTA_MODIFIER_ENTRY_TYPE_REMOVED = 2,
}

export function dotaModifierEntryTypeFromJSON(object: any): dotaModifierEntryType {
  switch (object) {
    case 1:
    case "DOTA_MODIFIER_ENTRY_TYPE_ACTIVE":
      return dotaModifierEntryType.DOTA_MODIFIER_ENTRY_TYPE_ACTIVE;
    case 2:
    case "DOTA_MODIFIER_ENTRY_TYPE_REMOVED":
      return dotaModifierEntryType.DOTA_MODIFIER_ENTRY_TYPE_REMOVED;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaModifierEntryType");
  }
}

export function dotaModifierEntryTypeToJSON(object: dotaModifierEntryType): string {
  switch (object) {
    case dotaModifierEntryType.DOTA_MODIFIER_ENTRY_TYPE_ACTIVE:
      return "DOTA_MODIFIER_ENTRY_TYPE_ACTIVE";
    case dotaModifierEntryType.DOTA_MODIFIER_ENTRY_TYPE_REMOVED:
      return "DOTA_MODIFIER_ENTRY_TYPE_REMOVED";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaModifierEntryType");
  }
}

export interface CDOTAModifierBuffTableEntry {
  entryType: dotaModifierEntryType;
  parent: number;
  index: number;
  serialNum: number;
  modifierClass: number;
  abilityLevel: number;
  stackCount: number;
  creationTime: number;
  duration: number;
  caster: number;
  ability: number;
  armor: number;
  fadeTime: number;
  subtle: boolean;
  channelTime: number;
  vStart: CMsgVector | undefined;
  vEnd: CMsgVector | undefined;
  portalLoopAppear: string;
  portalLoopDisappear: string;
  heroLoopAppear: string;
  heroLoopDisappear: string;
  movementSpeed: number;
  aura: boolean;
  activity: number;
  damage: number;
  range: number;
  ddModifierIndex: number;
  ddAbilityId: number;
  illusionLabel: string;
  active: boolean;
  playerIds: string;
  luaName: string;
  attackSpeed: number;
  auraOwner: number;
  bonusAllStats: number;
  bonusHealth: number;
  bonusMana: number;
  customEntity: number;
}

export interface CDOTALuaModifierEntry {
  modifierType: number;
  modifierFilename: string;
}

function createBaseCDOTAModifierBuffTableEntry(): CDOTAModifierBuffTableEntry {
  return {
    entryType: 1,
    parent: 0,
    index: 0,
    serialNum: 0,
    modifierClass: 0,
    abilityLevel: 0,
    stackCount: 0,
    creationTime: 0,
    duration: 0,
    caster: 0,
    ability: 0,
    armor: 0,
    fadeTime: 0,
    subtle: false,
    channelTime: 0,
    vStart: undefined,
    vEnd: undefined,
    portalLoopAppear: "",
    portalLoopDisappear: "",
    heroLoopAppear: "",
    heroLoopDisappear: "",
    movementSpeed: 0,
    aura: false,
    activity: 0,
    damage: 0,
    range: 0,
    ddModifierIndex: 0,
    ddAbilityId: 0,
    illusionLabel: "",
    active: false,
    playerIds: "",
    luaName: "",
    attackSpeed: 0,
    auraOwner: 0,
    bonusAllStats: 0,
    bonusHealth: 0,
    bonusMana: 0,
    customEntity: 0,
  };
}

export const CDOTAModifierBuffTableEntry = {
  encode(message: CDOTAModifierBuffTableEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entryType !== 1) {
      writer.uint32(8).int32(message.entryType);
    }
    if (message.parent !== 0) {
      writer.uint32(16).uint32(message.parent);
    }
    if (message.index !== 0) {
      writer.uint32(24).int32(message.index);
    }
    if (message.serialNum !== 0) {
      writer.uint32(32).int32(message.serialNum);
    }
    if (message.modifierClass !== 0) {
      writer.uint32(40).int32(message.modifierClass);
    }
    if (message.abilityLevel !== 0) {
      writer.uint32(48).int32(message.abilityLevel);
    }
    if (message.stackCount !== 0) {
      writer.uint32(56).int32(message.stackCount);
    }
    if (message.creationTime !== 0) {
      writer.uint32(69).float(message.creationTime);
    }
    if (message.duration !== 0) {
      writer.uint32(77).float(message.duration);
    }
    if (message.caster !== 0) {
      writer.uint32(80).uint32(message.caster);
    }
    if (message.ability !== 0) {
      writer.uint32(88).uint32(message.ability);
    }
    if (message.armor !== 0) {
      writer.uint32(96).int32(message.armor);
    }
    if (message.fadeTime !== 0) {
      writer.uint32(109).float(message.fadeTime);
    }
    if (message.subtle === true) {
      writer.uint32(112).bool(message.subtle);
    }
    if (message.channelTime !== 0) {
      writer.uint32(125).float(message.channelTime);
    }
    if (message.vStart !== undefined) {
      CMsgVector.encode(message.vStart, writer.uint32(130).fork()).ldelim();
    }
    if (message.vEnd !== undefined) {
      CMsgVector.encode(message.vEnd, writer.uint32(138).fork()).ldelim();
    }
    if (message.portalLoopAppear !== "") {
      writer.uint32(146).string(message.portalLoopAppear);
    }
    if (message.portalLoopDisappear !== "") {
      writer.uint32(154).string(message.portalLoopDisappear);
    }
    if (message.heroLoopAppear !== "") {
      writer.uint32(162).string(message.heroLoopAppear);
    }
    if (message.heroLoopDisappear !== "") {
      writer.uint32(170).string(message.heroLoopDisappear);
    }
    if (message.movementSpeed !== 0) {
      writer.uint32(176).int32(message.movementSpeed);
    }
    if (message.aura === true) {
      writer.uint32(184).bool(message.aura);
    }
    if (message.activity !== 0) {
      writer.uint32(192).int32(message.activity);
    }
    if (message.damage !== 0) {
      writer.uint32(200).int32(message.damage);
    }
    if (message.range !== 0) {
      writer.uint32(208).int32(message.range);
    }
    if (message.ddModifierIndex !== 0) {
      writer.uint32(216).int32(message.ddModifierIndex);
    }
    if (message.ddAbilityId !== 0) {
      writer.uint32(224).int32(message.ddAbilityId);
    }
    if (message.illusionLabel !== "") {
      writer.uint32(234).string(message.illusionLabel);
    }
    if (message.active === true) {
      writer.uint32(240).bool(message.active);
    }
    if (message.playerIds !== "") {
      writer.uint32(250).string(message.playerIds);
    }
    if (message.luaName !== "") {
      writer.uint32(258).string(message.luaName);
    }
    if (message.attackSpeed !== 0) {
      writer.uint32(264).int32(message.attackSpeed);
    }
    if (message.auraOwner !== 0) {
      writer.uint32(272).uint32(message.auraOwner);
    }
    if (message.bonusAllStats !== 0) {
      writer.uint32(280).int32(message.bonusAllStats);
    }
    if (message.bonusHealth !== 0) {
      writer.uint32(288).int32(message.bonusHealth);
    }
    if (message.bonusMana !== 0) {
      writer.uint32(296).int32(message.bonusMana);
    }
    if (message.customEntity !== 0) {
      writer.uint32(304).uint32(message.customEntity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAModifierBuffTableEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAModifierBuffTableEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.entryType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.parent = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.index = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.serialNum = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.modifierClass = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.abilityLevel = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.stackCount = reader.int32();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.creationTime = reader.float();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.duration = reader.float();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.caster = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.ability = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.armor = reader.int32();
          continue;
        case 13:
          if (tag != 109) {
            break;
          }

          message.fadeTime = reader.float();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.subtle = reader.bool();
          continue;
        case 15:
          if (tag != 125) {
            break;
          }

          message.channelTime = reader.float();
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.vStart = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.vEnd = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag != 146) {
            break;
          }

          message.portalLoopAppear = reader.string();
          continue;
        case 19:
          if (tag != 154) {
            break;
          }

          message.portalLoopDisappear = reader.string();
          continue;
        case 20:
          if (tag != 162) {
            break;
          }

          message.heroLoopAppear = reader.string();
          continue;
        case 21:
          if (tag != 170) {
            break;
          }

          message.heroLoopDisappear = reader.string();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.movementSpeed = reader.int32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.aura = reader.bool();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.activity = reader.int32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.damage = reader.int32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.range = reader.int32();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.ddModifierIndex = reader.int32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.ddAbilityId = reader.int32();
          continue;
        case 29:
          if (tag != 234) {
            break;
          }

          message.illusionLabel = reader.string();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.active = reader.bool();
          continue;
        case 31:
          if (tag != 250) {
            break;
          }

          message.playerIds = reader.string();
          continue;
        case 32:
          if (tag != 258) {
            break;
          }

          message.luaName = reader.string();
          continue;
        case 33:
          if (tag != 264) {
            break;
          }

          message.attackSpeed = reader.int32();
          continue;
        case 34:
          if (tag != 272) {
            break;
          }

          message.auraOwner = reader.uint32();
          continue;
        case 35:
          if (tag != 280) {
            break;
          }

          message.bonusAllStats = reader.int32();
          continue;
        case 36:
          if (tag != 288) {
            break;
          }

          message.bonusHealth = reader.int32();
          continue;
        case 37:
          if (tag != 296) {
            break;
          }

          message.bonusMana = reader.int32();
          continue;
        case 38:
          if (tag != 304) {
            break;
          }

          message.customEntity = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTAModifierBuffTableEntry {
    return {
      entryType: isSet(object.entryType) ? dotaModifierEntryTypeFromJSON(object.entryType) : 1,
      parent: isSet(object.parent) ? Number(object.parent) : 0,
      index: isSet(object.index) ? Number(object.index) : 0,
      serialNum: isSet(object.serialNum) ? Number(object.serialNum) : 0,
      modifierClass: isSet(object.modifierClass) ? Number(object.modifierClass) : 0,
      abilityLevel: isSet(object.abilityLevel) ? Number(object.abilityLevel) : 0,
      stackCount: isSet(object.stackCount) ? Number(object.stackCount) : 0,
      creationTime: isSet(object.creationTime) ? Number(object.creationTime) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      caster: isSet(object.caster) ? Number(object.caster) : 0,
      ability: isSet(object.ability) ? Number(object.ability) : 0,
      armor: isSet(object.armor) ? Number(object.armor) : 0,
      fadeTime: isSet(object.fadeTime) ? Number(object.fadeTime) : 0,
      subtle: isSet(object.subtle) ? Boolean(object.subtle) : false,
      channelTime: isSet(object.channelTime) ? Number(object.channelTime) : 0,
      vStart: isSet(object.vStart) ? CMsgVector.fromJSON(object.vStart) : undefined,
      vEnd: isSet(object.vEnd) ? CMsgVector.fromJSON(object.vEnd) : undefined,
      portalLoopAppear: isSet(object.portalLoopAppear) ? String(object.portalLoopAppear) : "",
      portalLoopDisappear: isSet(object.portalLoopDisappear) ? String(object.portalLoopDisappear) : "",
      heroLoopAppear: isSet(object.heroLoopAppear) ? String(object.heroLoopAppear) : "",
      heroLoopDisappear: isSet(object.heroLoopDisappear) ? String(object.heroLoopDisappear) : "",
      movementSpeed: isSet(object.movementSpeed) ? Number(object.movementSpeed) : 0,
      aura: isSet(object.aura) ? Boolean(object.aura) : false,
      activity: isSet(object.activity) ? Number(object.activity) : 0,
      damage: isSet(object.damage) ? Number(object.damage) : 0,
      range: isSet(object.range) ? Number(object.range) : 0,
      ddModifierIndex: isSet(object.ddModifierIndex) ? Number(object.ddModifierIndex) : 0,
      ddAbilityId: isSet(object.ddAbilityId) ? Number(object.ddAbilityId) : 0,
      illusionLabel: isSet(object.illusionLabel) ? String(object.illusionLabel) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
      playerIds: isSet(object.playerIds) ? String(object.playerIds) : "",
      luaName: isSet(object.luaName) ? String(object.luaName) : "",
      attackSpeed: isSet(object.attackSpeed) ? Number(object.attackSpeed) : 0,
      auraOwner: isSet(object.auraOwner) ? Number(object.auraOwner) : 0,
      bonusAllStats: isSet(object.bonusAllStats) ? Number(object.bonusAllStats) : 0,
      bonusHealth: isSet(object.bonusHealth) ? Number(object.bonusHealth) : 0,
      bonusMana: isSet(object.bonusMana) ? Number(object.bonusMana) : 0,
      customEntity: isSet(object.customEntity) ? Number(object.customEntity) : 0,
    };
  },

  toJSON(message: CDOTAModifierBuffTableEntry): unknown {
    const obj: any = {};
    message.entryType !== undefined && (obj.entryType = dotaModifierEntryTypeToJSON(message.entryType));
    message.parent !== undefined && (obj.parent = Math.round(message.parent));
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.serialNum !== undefined && (obj.serialNum = Math.round(message.serialNum));
    message.modifierClass !== undefined && (obj.modifierClass = Math.round(message.modifierClass));
    message.abilityLevel !== undefined && (obj.abilityLevel = Math.round(message.abilityLevel));
    message.stackCount !== undefined && (obj.stackCount = Math.round(message.stackCount));
    message.creationTime !== undefined && (obj.creationTime = message.creationTime);
    message.duration !== undefined && (obj.duration = message.duration);
    message.caster !== undefined && (obj.caster = Math.round(message.caster));
    message.ability !== undefined && (obj.ability = Math.round(message.ability));
    message.armor !== undefined && (obj.armor = Math.round(message.armor));
    message.fadeTime !== undefined && (obj.fadeTime = message.fadeTime);
    message.subtle !== undefined && (obj.subtle = message.subtle);
    message.channelTime !== undefined && (obj.channelTime = message.channelTime);
    message.vStart !== undefined && (obj.vStart = message.vStart ? CMsgVector.toJSON(message.vStart) : undefined);
    message.vEnd !== undefined && (obj.vEnd = message.vEnd ? CMsgVector.toJSON(message.vEnd) : undefined);
    message.portalLoopAppear !== undefined && (obj.portalLoopAppear = message.portalLoopAppear);
    message.portalLoopDisappear !== undefined && (obj.portalLoopDisappear = message.portalLoopDisappear);
    message.heroLoopAppear !== undefined && (obj.heroLoopAppear = message.heroLoopAppear);
    message.heroLoopDisappear !== undefined && (obj.heroLoopDisappear = message.heroLoopDisappear);
    message.movementSpeed !== undefined && (obj.movementSpeed = Math.round(message.movementSpeed));
    message.aura !== undefined && (obj.aura = message.aura);
    message.activity !== undefined && (obj.activity = Math.round(message.activity));
    message.damage !== undefined && (obj.damage = Math.round(message.damage));
    message.range !== undefined && (obj.range = Math.round(message.range));
    message.ddModifierIndex !== undefined && (obj.ddModifierIndex = Math.round(message.ddModifierIndex));
    message.ddAbilityId !== undefined && (obj.ddAbilityId = Math.round(message.ddAbilityId));
    message.illusionLabel !== undefined && (obj.illusionLabel = message.illusionLabel);
    message.active !== undefined && (obj.active = message.active);
    message.playerIds !== undefined && (obj.playerIds = message.playerIds);
    message.luaName !== undefined && (obj.luaName = message.luaName);
    message.attackSpeed !== undefined && (obj.attackSpeed = Math.round(message.attackSpeed));
    message.auraOwner !== undefined && (obj.auraOwner = Math.round(message.auraOwner));
    message.bonusAllStats !== undefined && (obj.bonusAllStats = Math.round(message.bonusAllStats));
    message.bonusHealth !== undefined && (obj.bonusHealth = Math.round(message.bonusHealth));
    message.bonusMana !== undefined && (obj.bonusMana = Math.round(message.bonusMana));
    message.customEntity !== undefined && (obj.customEntity = Math.round(message.customEntity));
    return obj;
  },

  create(base?: DeepPartial<CDOTAModifierBuffTableEntry>): CDOTAModifierBuffTableEntry {
    return CDOTAModifierBuffTableEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAModifierBuffTableEntry>): CDOTAModifierBuffTableEntry {
    const message = createBaseCDOTAModifierBuffTableEntry();
    message.entryType = object.entryType ?? 1;
    message.parent = object.parent ?? 0;
    message.index = object.index ?? 0;
    message.serialNum = object.serialNum ?? 0;
    message.modifierClass = object.modifierClass ?? 0;
    message.abilityLevel = object.abilityLevel ?? 0;
    message.stackCount = object.stackCount ?? 0;
    message.creationTime = object.creationTime ?? 0;
    message.duration = object.duration ?? 0;
    message.caster = object.caster ?? 0;
    message.ability = object.ability ?? 0;
    message.armor = object.armor ?? 0;
    message.fadeTime = object.fadeTime ?? 0;
    message.subtle = object.subtle ?? false;
    message.channelTime = object.channelTime ?? 0;
    message.vStart = (object.vStart !== undefined && object.vStart !== null)
      ? CMsgVector.fromPartial(object.vStart)
      : undefined;
    message.vEnd = (object.vEnd !== undefined && object.vEnd !== null)
      ? CMsgVector.fromPartial(object.vEnd)
      : undefined;
    message.portalLoopAppear = object.portalLoopAppear ?? "";
    message.portalLoopDisappear = object.portalLoopDisappear ?? "";
    message.heroLoopAppear = object.heroLoopAppear ?? "";
    message.heroLoopDisappear = object.heroLoopDisappear ?? "";
    message.movementSpeed = object.movementSpeed ?? 0;
    message.aura = object.aura ?? false;
    message.activity = object.activity ?? 0;
    message.damage = object.damage ?? 0;
    message.range = object.range ?? 0;
    message.ddModifierIndex = object.ddModifierIndex ?? 0;
    message.ddAbilityId = object.ddAbilityId ?? 0;
    message.illusionLabel = object.illusionLabel ?? "";
    message.active = object.active ?? false;
    message.playerIds = object.playerIds ?? "";
    message.luaName = object.luaName ?? "";
    message.attackSpeed = object.attackSpeed ?? 0;
    message.auraOwner = object.auraOwner ?? 0;
    message.bonusAllStats = object.bonusAllStats ?? 0;
    message.bonusHealth = object.bonusHealth ?? 0;
    message.bonusMana = object.bonusMana ?? 0;
    message.customEntity = object.customEntity ?? 0;
    return message;
  },
};

function createBaseCDOTALuaModifierEntry(): CDOTALuaModifierEntry {
  return { modifierType: 0, modifierFilename: "" };
}

export const CDOTALuaModifierEntry = {
  encode(message: CDOTALuaModifierEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modifierType !== 0) {
      writer.uint32(8).int32(message.modifierType);
    }
    if (message.modifierFilename !== "") {
      writer.uint32(18).string(message.modifierFilename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTALuaModifierEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTALuaModifierEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.modifierType = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.modifierFilename = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTALuaModifierEntry {
    return {
      modifierType: isSet(object.modifierType) ? Number(object.modifierType) : 0,
      modifierFilename: isSet(object.modifierFilename) ? String(object.modifierFilename) : "",
    };
  },

  toJSON(message: CDOTALuaModifierEntry): unknown {
    const obj: any = {};
    message.modifierType !== undefined && (obj.modifierType = Math.round(message.modifierType));
    message.modifierFilename !== undefined && (obj.modifierFilename = message.modifierFilename);
    return obj;
  },

  create(base?: DeepPartial<CDOTALuaModifierEntry>): CDOTALuaModifierEntry {
    return CDOTALuaModifierEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTALuaModifierEntry>): CDOTALuaModifierEntry {
    const message = createBaseCDOTALuaModifierEntry();
    message.modifierType = object.modifierType ?? 0;
    message.modifierFilename = object.modifierFilename ?? "";
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
