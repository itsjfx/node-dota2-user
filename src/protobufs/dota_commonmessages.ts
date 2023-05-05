/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { CMsgVector } from "./networkbasetypes";

export enum EPingSource {
  k_ePingSource_Default = 0,
  k_ePingSource_Warning = 1,
  k_ePingSource_Wheel = 2,
  k_ePingSource_System = 3,
}

export enum EDOTAStatPopupTypes {
  k_EDOTA_SPT_Textline = 0,
  k_EDOTA_SPT_Basic = 1,
  k_EDOTA_SPT_Poll = 2,
  k_EDOTA_SPT_Grid = 3,
  k_EDOTA_SPT_DualImage = 4,
  k_EDOTA_SPT_Movie = 5,
}

export enum dotaunitorderT {
  DOTA_UNIT_ORDER_NONE = 0,
  DOTA_UNIT_ORDER_MOVE_TO_POSITION = 1,
  DOTA_UNIT_ORDER_MOVE_TO_TARGET = 2,
  DOTA_UNIT_ORDER_ATTACK_MOVE = 3,
  DOTA_UNIT_ORDER_ATTACK_TARGET = 4,
  DOTA_UNIT_ORDER_CAST_POSITION = 5,
  DOTA_UNIT_ORDER_CAST_TARGET = 6,
  DOTA_UNIT_ORDER_CAST_TARGET_TREE = 7,
  DOTA_UNIT_ORDER_CAST_NO_TARGET = 8,
  DOTA_UNIT_ORDER_CAST_TOGGLE = 9,
  DOTA_UNIT_ORDER_HOLD_POSITION = 10,
  DOTA_UNIT_ORDER_TRAIN_ABILITY = 11,
  DOTA_UNIT_ORDER_DROP_ITEM = 12,
  DOTA_UNIT_ORDER_GIVE_ITEM = 13,
  DOTA_UNIT_ORDER_PICKUP_ITEM = 14,
  DOTA_UNIT_ORDER_PICKUP_RUNE = 15,
  DOTA_UNIT_ORDER_PURCHASE_ITEM = 16,
  DOTA_UNIT_ORDER_SELL_ITEM = 17,
  DOTA_UNIT_ORDER_DISASSEMBLE_ITEM = 18,
  DOTA_UNIT_ORDER_MOVE_ITEM = 19,
  DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO = 20,
  DOTA_UNIT_ORDER_STOP = 21,
  DOTA_UNIT_ORDER_TAUNT = 22,
  DOTA_UNIT_ORDER_BUYBACK = 23,
  DOTA_UNIT_ORDER_GLYPH = 24,
  DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH = 25,
  DOTA_UNIT_ORDER_CAST_RUNE = 26,
  DOTA_UNIT_ORDER_PING_ABILITY = 27,
  DOTA_UNIT_ORDER_MOVE_TO_DIRECTION = 28,
  DOTA_UNIT_ORDER_PATROL = 29,
  DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION = 30,
  DOTA_UNIT_ORDER_RADAR = 31,
  DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK = 32,
  DOTA_UNIT_ORDER_CONTINUE = 33,
  DOTA_UNIT_ORDER_VECTOR_TARGET_CANCELED = 34,
  DOTA_UNIT_ORDER_CAST_RIVER_PAINT = 35,
  DOTA_UNIT_ORDER_PREGAME_ADJUST_ITEM_ASSIGNMENT = 36,
  DOTA_UNIT_ORDER_DROP_ITEM_AT_FOUNTAIN = 37,
  DOTA_UNIT_ORDER_TAKE_ITEM_FROM_NEUTRAL_ITEM_STASH = 38,
  DOTA_UNIT_ORDER_MOVE_RELATIVE = 39,
}

export enum EDOTAVersusScenePlayerBehavior {
  VS_PLAYER_BEHAVIOR_PLAY_ACTIVITY = 1,
  VS_PLAYER_BEHAVIOR_CHAT_WHEEL = 2,
  VS_PLAYER_BEHAVIOR_PLAYBACK_RATE = 3,
}

export interface CDOTAMsgLocationPing {
  x: number;
  y: number;
  target: number;
  directPing: boolean;
  type: number;
  pingSource: EPingSource;
}

export interface CDOTAMsgItemAlert {
  x: number;
  y: number;
  itemAbilityId: number;
}

export interface CDOTAMsgMapLine {
  x: number;
  y: number;
  initial: boolean;
}

export interface CDOTAMsgWorldLine {
  x: number;
  y: number;
  z: number;
  initial: boolean;
  end: boolean;
}

export interface CDOTAMsgSendStatPopup {
  style: EDOTAStatPopupTypes;
  statStrings: string[];
  statImages: number[];
  statImageTypes: number[];
  duration: number;
  useHtml: boolean;
  movieName: string;
}

export interface CDOTAMsgDismissAllStatPopups {
  timeDelay: number;
}

export interface CDOTAMsgCoachHUDPing {
  x: number;
  y: number;
  tgtpath: string;
}

export interface CDOTAMsgUnitOrder {
  orderType: dotaunitorderT;
  units: number[];
  targetIndex: number;
  abilityIndex: number;
  position: CMsgVector | undefined;
  sequenceNumber: number;
  flags: number;
}

export interface VersusScenePlayActivity {
  activities: VersusScenePlayActivity_ActivityInfo[];
  playbackRate: number;
}

export interface VersusScenePlayActivity_ActivityInfo {
  activity: string;
  disableAutoKill: boolean;
  forceLooping: boolean;
}

export interface VersusSceneChatWheel {
  chatMessageId: number;
  emoticonId: number;
}

export interface VersusScenePlaybackRate {
  rate: number;
}

function createBaseCDOTAMsgLocationPing(): CDOTAMsgLocationPing {
  return { x: 0, y: 0, target: 0, directPing: false, type: 0, pingSource: 0 };
}

export const CDOTAMsgLocationPing = {
  encode(message: CDOTAMsgLocationPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).int32(message.y);
    }
    if (message.target !== 0) {
      writer.uint32(24).int32(message.target);
    }
    if (message.directPing === true) {
      writer.uint32(32).bool(message.directPing);
    }
    if (message.type !== 0) {
      writer.uint32(40).uint32(message.type);
    }
    if (message.pingSource !== 0) {
      writer.uint32(48).int32(message.pingSource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMsgLocationPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMsgLocationPing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.x = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.y = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.target = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.directPing = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.type = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.pingSource = reader.int32() as any;
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

function createBaseCDOTAMsgItemAlert(): CDOTAMsgItemAlert {
  return { x: 0, y: 0, itemAbilityId: 0 };
}

export const CDOTAMsgItemAlert = {
  encode(message: CDOTAMsgItemAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).int32(message.y);
    }
    if (message.itemAbilityId !== 0) {
      writer.uint32(24).int32(message.itemAbilityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMsgItemAlert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMsgItemAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.x = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.y = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.itemAbilityId = reader.int32();
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

function createBaseCDOTAMsgMapLine(): CDOTAMsgMapLine {
  return { x: 0, y: 0, initial: false };
}

export const CDOTAMsgMapLine = {
  encode(message: CDOTAMsgMapLine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).int32(message.y);
    }
    if (message.initial === true) {
      writer.uint32(24).bool(message.initial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMsgMapLine {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMsgMapLine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.x = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.y = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.initial = reader.bool();
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

function createBaseCDOTAMsgWorldLine(): CDOTAMsgWorldLine {
  return { x: 0, y: 0, z: 0, initial: false, end: false };
}

export const CDOTAMsgWorldLine = {
  encode(message: CDOTAMsgWorldLine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).int32(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(24).int32(message.z);
    }
    if (message.initial === true) {
      writer.uint32(32).bool(message.initial);
    }
    if (message.end === true) {
      writer.uint32(40).bool(message.end);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMsgWorldLine {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMsgWorldLine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.x = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.y = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.z = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.initial = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.end = reader.bool();
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

function createBaseCDOTAMsgSendStatPopup(): CDOTAMsgSendStatPopup {
  return { style: 0, statStrings: [], statImages: [], statImageTypes: [], duration: 0, useHtml: false, movieName: "" };
}

export const CDOTAMsgSendStatPopup = {
  encode(message: CDOTAMsgSendStatPopup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.style !== 0) {
      writer.uint32(8).int32(message.style);
    }
    for (const v of message.statStrings) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.statImages) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.statImageTypes) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.duration !== 0) {
      writer.uint32(45).float(message.duration);
    }
    if (message.useHtml === true) {
      writer.uint32(48).bool(message.useHtml);
    }
    if (message.movieName !== "") {
      writer.uint32(58).string(message.movieName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMsgSendStatPopup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMsgSendStatPopup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.style = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.statStrings.push(reader.string());
          continue;
        case 3:
          if (tag == 24) {
            message.statImages.push(reader.int32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.statImages.push(reader.int32());
            }

            continue;
          }

          break;
        case 4:
          if (tag == 32) {
            message.statImageTypes.push(reader.int32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.statImageTypes.push(reader.int32());
            }

            continue;
          }

          break;
        case 5:
          if (tag != 45) {
            break;
          }

          message.duration = reader.float();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.useHtml = reader.bool();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.movieName = reader.string();
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

function createBaseCDOTAMsgDismissAllStatPopups(): CDOTAMsgDismissAllStatPopups {
  return { timeDelay: 0 };
}

export const CDOTAMsgDismissAllStatPopups = {
  encode(message: CDOTAMsgDismissAllStatPopups, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeDelay !== 0) {
      writer.uint32(13).float(message.timeDelay);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMsgDismissAllStatPopups {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMsgDismissAllStatPopups();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.timeDelay = reader.float();
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

function createBaseCDOTAMsgCoachHUDPing(): CDOTAMsgCoachHUDPing {
  return { x: 0, y: 0, tgtpath: "" };
}

export const CDOTAMsgCoachHUDPing = {
  encode(message: CDOTAMsgCoachHUDPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).uint32(message.y);
    }
    if (message.tgtpath !== "") {
      writer.uint32(26).string(message.tgtpath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMsgCoachHUDPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMsgCoachHUDPing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.x = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.y = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.tgtpath = reader.string();
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

function createBaseCDOTAMsgUnitOrder(): CDOTAMsgUnitOrder {
  return { orderType: 0, units: [], targetIndex: 0, abilityIndex: 0, position: undefined, sequenceNumber: 0, flags: 0 };
}

export const CDOTAMsgUnitOrder = {
  encode(message: CDOTAMsgUnitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderType !== 0) {
      writer.uint32(16).int32(message.orderType);
    }
    writer.uint32(26).fork();
    for (const v of message.units) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.targetIndex !== 0) {
      writer.uint32(32).int32(message.targetIndex);
    }
    if (message.abilityIndex !== 0) {
      writer.uint32(40).int32(message.abilityIndex);
    }
    if (message.position !== undefined) {
      CMsgVector.encode(message.position, writer.uint32(50).fork()).ldelim();
    }
    if (message.sequenceNumber !== 0) {
      writer.uint32(64).int32(message.sequenceNumber);
    }
    if (message.flags !== 0) {
      writer.uint32(72).uint32(message.flags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTAMsgUnitOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTAMsgUnitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.orderType = reader.int32() as any;
          continue;
        case 3:
          if (tag == 24) {
            message.units.push(reader.int32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.units.push(reader.int32());
            }

            continue;
          }

          break;
        case 4:
          if (tag != 32) {
            break;
          }

          message.targetIndex = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.abilityIndex = reader.int32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.position = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.sequenceNumber = reader.int32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.flags = reader.uint32();
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

function createBaseVersusScenePlayActivity(): VersusScenePlayActivity {
  return { activities: [], playbackRate: 0 };
}

export const VersusScenePlayActivity = {
  encode(message: VersusScenePlayActivity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.activities) {
      VersusScenePlayActivity_ActivityInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.playbackRate !== 0) {
      writer.uint32(21).float(message.playbackRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersusScenePlayActivity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersusScenePlayActivity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.activities.push(VersusScenePlayActivity_ActivityInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.playbackRate = reader.float();
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

function createBaseVersusScenePlayActivity_ActivityInfo(): VersusScenePlayActivity_ActivityInfo {
  return { activity: "", disableAutoKill: false, forceLooping: false };
}

export const VersusScenePlayActivity_ActivityInfo = {
  encode(message: VersusScenePlayActivity_ActivityInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activity !== "") {
      writer.uint32(10).string(message.activity);
    }
    if (message.disableAutoKill === true) {
      writer.uint32(16).bool(message.disableAutoKill);
    }
    if (message.forceLooping === true) {
      writer.uint32(24).bool(message.forceLooping);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersusScenePlayActivity_ActivityInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersusScenePlayActivity_ActivityInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.activity = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.disableAutoKill = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.forceLooping = reader.bool();
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

function createBaseVersusSceneChatWheel(): VersusSceneChatWheel {
  return { chatMessageId: 0, emoticonId: 0 };
}

export const VersusSceneChatWheel = {
  encode(message: VersusSceneChatWheel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatMessageId !== 0) {
      writer.uint32(8).uint32(message.chatMessageId);
    }
    if (message.emoticonId !== 0) {
      writer.uint32(16).uint32(message.emoticonId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersusSceneChatWheel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersusSceneChatWheel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.chatMessageId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
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
};

function createBaseVersusScenePlaybackRate(): VersusScenePlaybackRate {
  return { rate: 0 };
}

export const VersusScenePlaybackRate = {
  encode(message: VersusScenePlaybackRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rate !== 0) {
      writer.uint32(13).float(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersusScenePlaybackRate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersusScenePlaybackRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.rate = reader.float();
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
