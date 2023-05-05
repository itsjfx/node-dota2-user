/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { CMsgVector } from "./networkbasetypes";

export enum dotaModifierEntryType {
  DOTA_MODIFIER_ENTRY_TYPE_ACTIVE = 1,
  DOTA_MODIFIER_ENTRY_TYPE_REMOVED = 2,
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
};
