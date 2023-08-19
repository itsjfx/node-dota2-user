/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { CMsgVector } from "./networkbasetypes";

export enum EPingSource {
  k_ePingSource_Default = 0,
  k_ePingSource_Warning = 1,
  k_ePingSource_Wheel = 2,
  k_ePingSource_System = 3,
}

export function ePingSourceFromJSON(object: any): EPingSource {
  switch (object) {
    case 0:
    case "k_ePingSource_Default":
      return EPingSource.k_ePingSource_Default;
    case 1:
    case "k_ePingSource_Warning":
      return EPingSource.k_ePingSource_Warning;
    case 2:
    case "k_ePingSource_Wheel":
      return EPingSource.k_ePingSource_Wheel;
    case 3:
    case "k_ePingSource_System":
      return EPingSource.k_ePingSource_System;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EPingSource");
  }
}

export function ePingSourceToJSON(object: EPingSource): string {
  switch (object) {
    case EPingSource.k_ePingSource_Default:
      return "k_ePingSource_Default";
    case EPingSource.k_ePingSource_Warning:
      return "k_ePingSource_Warning";
    case EPingSource.k_ePingSource_Wheel:
      return "k_ePingSource_Wheel";
    case EPingSource.k_ePingSource_System:
      return "k_ePingSource_System";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EPingSource");
  }
}

export enum EDOTAStatPopupTypes {
  k_EDOTA_SPT_Textline = 0,
  k_EDOTA_SPT_Basic = 1,
  k_EDOTA_SPT_Poll = 2,
  k_EDOTA_SPT_Grid = 3,
  k_EDOTA_SPT_DualImage = 4,
  k_EDOTA_SPT_Movie = 5,
}

export function eDOTAStatPopupTypesFromJSON(object: any): EDOTAStatPopupTypes {
  switch (object) {
    case 0:
    case "k_EDOTA_SPT_Textline":
      return EDOTAStatPopupTypes.k_EDOTA_SPT_Textline;
    case 1:
    case "k_EDOTA_SPT_Basic":
      return EDOTAStatPopupTypes.k_EDOTA_SPT_Basic;
    case 2:
    case "k_EDOTA_SPT_Poll":
      return EDOTAStatPopupTypes.k_EDOTA_SPT_Poll;
    case 3:
    case "k_EDOTA_SPT_Grid":
      return EDOTAStatPopupTypes.k_EDOTA_SPT_Grid;
    case 4:
    case "k_EDOTA_SPT_DualImage":
      return EDOTAStatPopupTypes.k_EDOTA_SPT_DualImage;
    case 5:
    case "k_EDOTA_SPT_Movie":
      return EDOTAStatPopupTypes.k_EDOTA_SPT_Movie;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDOTAStatPopupTypes");
  }
}

export function eDOTAStatPopupTypesToJSON(object: EDOTAStatPopupTypes): string {
  switch (object) {
    case EDOTAStatPopupTypes.k_EDOTA_SPT_Textline:
      return "k_EDOTA_SPT_Textline";
    case EDOTAStatPopupTypes.k_EDOTA_SPT_Basic:
      return "k_EDOTA_SPT_Basic";
    case EDOTAStatPopupTypes.k_EDOTA_SPT_Poll:
      return "k_EDOTA_SPT_Poll";
    case EDOTAStatPopupTypes.k_EDOTA_SPT_Grid:
      return "k_EDOTA_SPT_Grid";
    case EDOTAStatPopupTypes.k_EDOTA_SPT_DualImage:
      return "k_EDOTA_SPT_DualImage";
    case EDOTAStatPopupTypes.k_EDOTA_SPT_Movie:
      return "k_EDOTA_SPT_Movie";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDOTAStatPopupTypes");
  }
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

export function dotaunitorderTFromJSON(object: any): dotaunitorderT {
  switch (object) {
    case 0:
    case "DOTA_UNIT_ORDER_NONE":
      return dotaunitorderT.DOTA_UNIT_ORDER_NONE;
    case 1:
    case "DOTA_UNIT_ORDER_MOVE_TO_POSITION":
      return dotaunitorderT.DOTA_UNIT_ORDER_MOVE_TO_POSITION;
    case 2:
    case "DOTA_UNIT_ORDER_MOVE_TO_TARGET":
      return dotaunitorderT.DOTA_UNIT_ORDER_MOVE_TO_TARGET;
    case 3:
    case "DOTA_UNIT_ORDER_ATTACK_MOVE":
      return dotaunitorderT.DOTA_UNIT_ORDER_ATTACK_MOVE;
    case 4:
    case "DOTA_UNIT_ORDER_ATTACK_TARGET":
      return dotaunitorderT.DOTA_UNIT_ORDER_ATTACK_TARGET;
    case 5:
    case "DOTA_UNIT_ORDER_CAST_POSITION":
      return dotaunitorderT.DOTA_UNIT_ORDER_CAST_POSITION;
    case 6:
    case "DOTA_UNIT_ORDER_CAST_TARGET":
      return dotaunitorderT.DOTA_UNIT_ORDER_CAST_TARGET;
    case 7:
    case "DOTA_UNIT_ORDER_CAST_TARGET_TREE":
      return dotaunitorderT.DOTA_UNIT_ORDER_CAST_TARGET_TREE;
    case 8:
    case "DOTA_UNIT_ORDER_CAST_NO_TARGET":
      return dotaunitorderT.DOTA_UNIT_ORDER_CAST_NO_TARGET;
    case 9:
    case "DOTA_UNIT_ORDER_CAST_TOGGLE":
      return dotaunitorderT.DOTA_UNIT_ORDER_CAST_TOGGLE;
    case 10:
    case "DOTA_UNIT_ORDER_HOLD_POSITION":
      return dotaunitorderT.DOTA_UNIT_ORDER_HOLD_POSITION;
    case 11:
    case "DOTA_UNIT_ORDER_TRAIN_ABILITY":
      return dotaunitorderT.DOTA_UNIT_ORDER_TRAIN_ABILITY;
    case 12:
    case "DOTA_UNIT_ORDER_DROP_ITEM":
      return dotaunitorderT.DOTA_UNIT_ORDER_DROP_ITEM;
    case 13:
    case "DOTA_UNIT_ORDER_GIVE_ITEM":
      return dotaunitorderT.DOTA_UNIT_ORDER_GIVE_ITEM;
    case 14:
    case "DOTA_UNIT_ORDER_PICKUP_ITEM":
      return dotaunitorderT.DOTA_UNIT_ORDER_PICKUP_ITEM;
    case 15:
    case "DOTA_UNIT_ORDER_PICKUP_RUNE":
      return dotaunitorderT.DOTA_UNIT_ORDER_PICKUP_RUNE;
    case 16:
    case "DOTA_UNIT_ORDER_PURCHASE_ITEM":
      return dotaunitorderT.DOTA_UNIT_ORDER_PURCHASE_ITEM;
    case 17:
    case "DOTA_UNIT_ORDER_SELL_ITEM":
      return dotaunitorderT.DOTA_UNIT_ORDER_SELL_ITEM;
    case 18:
    case "DOTA_UNIT_ORDER_DISASSEMBLE_ITEM":
      return dotaunitorderT.DOTA_UNIT_ORDER_DISASSEMBLE_ITEM;
    case 19:
    case "DOTA_UNIT_ORDER_MOVE_ITEM":
      return dotaunitorderT.DOTA_UNIT_ORDER_MOVE_ITEM;
    case 20:
    case "DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO":
      return dotaunitorderT.DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO;
    case 21:
    case "DOTA_UNIT_ORDER_STOP":
      return dotaunitorderT.DOTA_UNIT_ORDER_STOP;
    case 22:
    case "DOTA_UNIT_ORDER_TAUNT":
      return dotaunitorderT.DOTA_UNIT_ORDER_TAUNT;
    case 23:
    case "DOTA_UNIT_ORDER_BUYBACK":
      return dotaunitorderT.DOTA_UNIT_ORDER_BUYBACK;
    case 24:
    case "DOTA_UNIT_ORDER_GLYPH":
      return dotaunitorderT.DOTA_UNIT_ORDER_GLYPH;
    case 25:
    case "DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH":
      return dotaunitorderT.DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH;
    case 26:
    case "DOTA_UNIT_ORDER_CAST_RUNE":
      return dotaunitorderT.DOTA_UNIT_ORDER_CAST_RUNE;
    case 27:
    case "DOTA_UNIT_ORDER_PING_ABILITY":
      return dotaunitorderT.DOTA_UNIT_ORDER_PING_ABILITY;
    case 28:
    case "DOTA_UNIT_ORDER_MOVE_TO_DIRECTION":
      return dotaunitorderT.DOTA_UNIT_ORDER_MOVE_TO_DIRECTION;
    case 29:
    case "DOTA_UNIT_ORDER_PATROL":
      return dotaunitorderT.DOTA_UNIT_ORDER_PATROL;
    case 30:
    case "DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION":
      return dotaunitorderT.DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION;
    case 31:
    case "DOTA_UNIT_ORDER_RADAR":
      return dotaunitorderT.DOTA_UNIT_ORDER_RADAR;
    case 32:
    case "DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK":
      return dotaunitorderT.DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK;
    case 33:
    case "DOTA_UNIT_ORDER_CONTINUE":
      return dotaunitorderT.DOTA_UNIT_ORDER_CONTINUE;
    case 34:
    case "DOTA_UNIT_ORDER_VECTOR_TARGET_CANCELED":
      return dotaunitorderT.DOTA_UNIT_ORDER_VECTOR_TARGET_CANCELED;
    case 35:
    case "DOTA_UNIT_ORDER_CAST_RIVER_PAINT":
      return dotaunitorderT.DOTA_UNIT_ORDER_CAST_RIVER_PAINT;
    case 36:
    case "DOTA_UNIT_ORDER_PREGAME_ADJUST_ITEM_ASSIGNMENT":
      return dotaunitorderT.DOTA_UNIT_ORDER_PREGAME_ADJUST_ITEM_ASSIGNMENT;
    case 37:
    case "DOTA_UNIT_ORDER_DROP_ITEM_AT_FOUNTAIN":
      return dotaunitorderT.DOTA_UNIT_ORDER_DROP_ITEM_AT_FOUNTAIN;
    case 38:
    case "DOTA_UNIT_ORDER_TAKE_ITEM_FROM_NEUTRAL_ITEM_STASH":
      return dotaunitorderT.DOTA_UNIT_ORDER_TAKE_ITEM_FROM_NEUTRAL_ITEM_STASH;
    case 39:
    case "DOTA_UNIT_ORDER_MOVE_RELATIVE":
      return dotaunitorderT.DOTA_UNIT_ORDER_MOVE_RELATIVE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaunitorderT");
  }
}

export function dotaunitorderTToJSON(object: dotaunitorderT): string {
  switch (object) {
    case dotaunitorderT.DOTA_UNIT_ORDER_NONE:
      return "DOTA_UNIT_ORDER_NONE";
    case dotaunitorderT.DOTA_UNIT_ORDER_MOVE_TO_POSITION:
      return "DOTA_UNIT_ORDER_MOVE_TO_POSITION";
    case dotaunitorderT.DOTA_UNIT_ORDER_MOVE_TO_TARGET:
      return "DOTA_UNIT_ORDER_MOVE_TO_TARGET";
    case dotaunitorderT.DOTA_UNIT_ORDER_ATTACK_MOVE:
      return "DOTA_UNIT_ORDER_ATTACK_MOVE";
    case dotaunitorderT.DOTA_UNIT_ORDER_ATTACK_TARGET:
      return "DOTA_UNIT_ORDER_ATTACK_TARGET";
    case dotaunitorderT.DOTA_UNIT_ORDER_CAST_POSITION:
      return "DOTA_UNIT_ORDER_CAST_POSITION";
    case dotaunitorderT.DOTA_UNIT_ORDER_CAST_TARGET:
      return "DOTA_UNIT_ORDER_CAST_TARGET";
    case dotaunitorderT.DOTA_UNIT_ORDER_CAST_TARGET_TREE:
      return "DOTA_UNIT_ORDER_CAST_TARGET_TREE";
    case dotaunitorderT.DOTA_UNIT_ORDER_CAST_NO_TARGET:
      return "DOTA_UNIT_ORDER_CAST_NO_TARGET";
    case dotaunitorderT.DOTA_UNIT_ORDER_CAST_TOGGLE:
      return "DOTA_UNIT_ORDER_CAST_TOGGLE";
    case dotaunitorderT.DOTA_UNIT_ORDER_HOLD_POSITION:
      return "DOTA_UNIT_ORDER_HOLD_POSITION";
    case dotaunitorderT.DOTA_UNIT_ORDER_TRAIN_ABILITY:
      return "DOTA_UNIT_ORDER_TRAIN_ABILITY";
    case dotaunitorderT.DOTA_UNIT_ORDER_DROP_ITEM:
      return "DOTA_UNIT_ORDER_DROP_ITEM";
    case dotaunitorderT.DOTA_UNIT_ORDER_GIVE_ITEM:
      return "DOTA_UNIT_ORDER_GIVE_ITEM";
    case dotaunitorderT.DOTA_UNIT_ORDER_PICKUP_ITEM:
      return "DOTA_UNIT_ORDER_PICKUP_ITEM";
    case dotaunitorderT.DOTA_UNIT_ORDER_PICKUP_RUNE:
      return "DOTA_UNIT_ORDER_PICKUP_RUNE";
    case dotaunitorderT.DOTA_UNIT_ORDER_PURCHASE_ITEM:
      return "DOTA_UNIT_ORDER_PURCHASE_ITEM";
    case dotaunitorderT.DOTA_UNIT_ORDER_SELL_ITEM:
      return "DOTA_UNIT_ORDER_SELL_ITEM";
    case dotaunitorderT.DOTA_UNIT_ORDER_DISASSEMBLE_ITEM:
      return "DOTA_UNIT_ORDER_DISASSEMBLE_ITEM";
    case dotaunitorderT.DOTA_UNIT_ORDER_MOVE_ITEM:
      return "DOTA_UNIT_ORDER_MOVE_ITEM";
    case dotaunitorderT.DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO:
      return "DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO";
    case dotaunitorderT.DOTA_UNIT_ORDER_STOP:
      return "DOTA_UNIT_ORDER_STOP";
    case dotaunitorderT.DOTA_UNIT_ORDER_TAUNT:
      return "DOTA_UNIT_ORDER_TAUNT";
    case dotaunitorderT.DOTA_UNIT_ORDER_BUYBACK:
      return "DOTA_UNIT_ORDER_BUYBACK";
    case dotaunitorderT.DOTA_UNIT_ORDER_GLYPH:
      return "DOTA_UNIT_ORDER_GLYPH";
    case dotaunitorderT.DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH:
      return "DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH";
    case dotaunitorderT.DOTA_UNIT_ORDER_CAST_RUNE:
      return "DOTA_UNIT_ORDER_CAST_RUNE";
    case dotaunitorderT.DOTA_UNIT_ORDER_PING_ABILITY:
      return "DOTA_UNIT_ORDER_PING_ABILITY";
    case dotaunitorderT.DOTA_UNIT_ORDER_MOVE_TO_DIRECTION:
      return "DOTA_UNIT_ORDER_MOVE_TO_DIRECTION";
    case dotaunitorderT.DOTA_UNIT_ORDER_PATROL:
      return "DOTA_UNIT_ORDER_PATROL";
    case dotaunitorderT.DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION:
      return "DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION";
    case dotaunitorderT.DOTA_UNIT_ORDER_RADAR:
      return "DOTA_UNIT_ORDER_RADAR";
    case dotaunitorderT.DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK:
      return "DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK";
    case dotaunitorderT.DOTA_UNIT_ORDER_CONTINUE:
      return "DOTA_UNIT_ORDER_CONTINUE";
    case dotaunitorderT.DOTA_UNIT_ORDER_VECTOR_TARGET_CANCELED:
      return "DOTA_UNIT_ORDER_VECTOR_TARGET_CANCELED";
    case dotaunitorderT.DOTA_UNIT_ORDER_CAST_RIVER_PAINT:
      return "DOTA_UNIT_ORDER_CAST_RIVER_PAINT";
    case dotaunitorderT.DOTA_UNIT_ORDER_PREGAME_ADJUST_ITEM_ASSIGNMENT:
      return "DOTA_UNIT_ORDER_PREGAME_ADJUST_ITEM_ASSIGNMENT";
    case dotaunitorderT.DOTA_UNIT_ORDER_DROP_ITEM_AT_FOUNTAIN:
      return "DOTA_UNIT_ORDER_DROP_ITEM_AT_FOUNTAIN";
    case dotaunitorderT.DOTA_UNIT_ORDER_TAKE_ITEM_FROM_NEUTRAL_ITEM_STASH:
      return "DOTA_UNIT_ORDER_TAKE_ITEM_FROM_NEUTRAL_ITEM_STASH";
    case dotaunitorderT.DOTA_UNIT_ORDER_MOVE_RELATIVE:
      return "DOTA_UNIT_ORDER_MOVE_RELATIVE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum dotaunitorderT");
  }
}

export enum EDOTAVersusScenePlayerBehavior {
  VS_PLAYER_BEHAVIOR_PLAY_ACTIVITY = 1,
  VS_PLAYER_BEHAVIOR_CHAT_WHEEL = 2,
  VS_PLAYER_BEHAVIOR_PLAYBACK_RATE = 3,
}

export function eDOTAVersusScenePlayerBehaviorFromJSON(object: any): EDOTAVersusScenePlayerBehavior {
  switch (object) {
    case 1:
    case "VS_PLAYER_BEHAVIOR_PLAY_ACTIVITY":
      return EDOTAVersusScenePlayerBehavior.VS_PLAYER_BEHAVIOR_PLAY_ACTIVITY;
    case 2:
    case "VS_PLAYER_BEHAVIOR_CHAT_WHEEL":
      return EDOTAVersusScenePlayerBehavior.VS_PLAYER_BEHAVIOR_CHAT_WHEEL;
    case 3:
    case "VS_PLAYER_BEHAVIOR_PLAYBACK_RATE":
      return EDOTAVersusScenePlayerBehavior.VS_PLAYER_BEHAVIOR_PLAYBACK_RATE;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum EDOTAVersusScenePlayerBehavior",
      );
  }
}

export function eDOTAVersusScenePlayerBehaviorToJSON(object: EDOTAVersusScenePlayerBehavior): string {
  switch (object) {
    case EDOTAVersusScenePlayerBehavior.VS_PLAYER_BEHAVIOR_PLAY_ACTIVITY:
      return "VS_PLAYER_BEHAVIOR_PLAY_ACTIVITY";
    case EDOTAVersusScenePlayerBehavior.VS_PLAYER_BEHAVIOR_CHAT_WHEEL:
      return "VS_PLAYER_BEHAVIOR_CHAT_WHEEL";
    case EDOTAVersusScenePlayerBehavior.VS_PLAYER_BEHAVIOR_PLAYBACK_RATE:
      return "VS_PLAYER_BEHAVIOR_PLAYBACK_RATE";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum EDOTAVersusScenePlayerBehavior",
      );
  }
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

  fromJSON(object: any): CDOTAMsgLocationPing {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      target: isSet(object.target) ? Number(object.target) : 0,
      directPing: isSet(object.directPing) ? Boolean(object.directPing) : false,
      type: isSet(object.type) ? Number(object.type) : 0,
      pingSource: isSet(object.pingSource) ? ePingSourceFromJSON(object.pingSource) : 0,
    };
  },

  toJSON(message: CDOTAMsgLocationPing): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    message.target !== undefined && (obj.target = Math.round(message.target));
    message.directPing !== undefined && (obj.directPing = message.directPing);
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.pingSource !== undefined && (obj.pingSource = ePingSourceToJSON(message.pingSource));
    return obj;
  },

  create(base?: DeepPartial<CDOTAMsgLocationPing>): CDOTAMsgLocationPing {
    return CDOTAMsgLocationPing.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMsgLocationPing>): CDOTAMsgLocationPing {
    const message = createBaseCDOTAMsgLocationPing();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.target = object.target ?? 0;
    message.directPing = object.directPing ?? false;
    message.type = object.type ?? 0;
    message.pingSource = object.pingSource ?? 0;
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

  fromJSON(object: any): CDOTAMsgItemAlert {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      itemAbilityId: isSet(object.itemAbilityId) ? Number(object.itemAbilityId) : 0,
    };
  },

  toJSON(message: CDOTAMsgItemAlert): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    message.itemAbilityId !== undefined && (obj.itemAbilityId = Math.round(message.itemAbilityId));
    return obj;
  },

  create(base?: DeepPartial<CDOTAMsgItemAlert>): CDOTAMsgItemAlert {
    return CDOTAMsgItemAlert.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMsgItemAlert>): CDOTAMsgItemAlert {
    const message = createBaseCDOTAMsgItemAlert();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.itemAbilityId = object.itemAbilityId ?? 0;
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

  fromJSON(object: any): CDOTAMsgMapLine {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      initial: isSet(object.initial) ? Boolean(object.initial) : false,
    };
  },

  toJSON(message: CDOTAMsgMapLine): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    message.initial !== undefined && (obj.initial = message.initial);
    return obj;
  },

  create(base?: DeepPartial<CDOTAMsgMapLine>): CDOTAMsgMapLine {
    return CDOTAMsgMapLine.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMsgMapLine>): CDOTAMsgMapLine {
    const message = createBaseCDOTAMsgMapLine();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.initial = object.initial ?? false;
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

  fromJSON(object: any): CDOTAMsgWorldLine {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
      initial: isSet(object.initial) ? Boolean(object.initial) : false,
      end: isSet(object.end) ? Boolean(object.end) : false,
    };
  },

  toJSON(message: CDOTAMsgWorldLine): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    message.z !== undefined && (obj.z = Math.round(message.z));
    message.initial !== undefined && (obj.initial = message.initial);
    message.end !== undefined && (obj.end = message.end);
    return obj;
  },

  create(base?: DeepPartial<CDOTAMsgWorldLine>): CDOTAMsgWorldLine {
    return CDOTAMsgWorldLine.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMsgWorldLine>): CDOTAMsgWorldLine {
    const message = createBaseCDOTAMsgWorldLine();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    message.initial = object.initial ?? false;
    message.end = object.end ?? false;
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

  fromJSON(object: any): CDOTAMsgSendStatPopup {
    return {
      style: isSet(object.style) ? eDOTAStatPopupTypesFromJSON(object.style) : 0,
      statStrings: Array.isArray(object?.statStrings) ? object.statStrings.map((e: any) => String(e)) : [],
      statImages: Array.isArray(object?.statImages) ? object.statImages.map((e: any) => Number(e)) : [],
      statImageTypes: Array.isArray(object?.statImageTypes) ? object.statImageTypes.map((e: any) => Number(e)) : [],
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      useHtml: isSet(object.useHtml) ? Boolean(object.useHtml) : false,
      movieName: isSet(object.movieName) ? String(object.movieName) : "",
    };
  },

  toJSON(message: CDOTAMsgSendStatPopup): unknown {
    const obj: any = {};
    message.style !== undefined && (obj.style = eDOTAStatPopupTypesToJSON(message.style));
    if (message.statStrings) {
      obj.statStrings = message.statStrings.map((e) => e);
    } else {
      obj.statStrings = [];
    }
    if (message.statImages) {
      obj.statImages = message.statImages.map((e) => Math.round(e));
    } else {
      obj.statImages = [];
    }
    if (message.statImageTypes) {
      obj.statImageTypes = message.statImageTypes.map((e) => Math.round(e));
    } else {
      obj.statImageTypes = [];
    }
    message.duration !== undefined && (obj.duration = message.duration);
    message.useHtml !== undefined && (obj.useHtml = message.useHtml);
    message.movieName !== undefined && (obj.movieName = message.movieName);
    return obj;
  },

  create(base?: DeepPartial<CDOTAMsgSendStatPopup>): CDOTAMsgSendStatPopup {
    return CDOTAMsgSendStatPopup.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMsgSendStatPopup>): CDOTAMsgSendStatPopup {
    const message = createBaseCDOTAMsgSendStatPopup();
    message.style = object.style ?? 0;
    message.statStrings = object.statStrings?.map((e) => e) || [];
    message.statImages = object.statImages?.map((e) => e) || [];
    message.statImageTypes = object.statImageTypes?.map((e) => e) || [];
    message.duration = object.duration ?? 0;
    message.useHtml = object.useHtml ?? false;
    message.movieName = object.movieName ?? "";
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

  fromJSON(object: any): CDOTAMsgDismissAllStatPopups {
    return { timeDelay: isSet(object.timeDelay) ? Number(object.timeDelay) : 0 };
  },

  toJSON(message: CDOTAMsgDismissAllStatPopups): unknown {
    const obj: any = {};
    message.timeDelay !== undefined && (obj.timeDelay = message.timeDelay);
    return obj;
  },

  create(base?: DeepPartial<CDOTAMsgDismissAllStatPopups>): CDOTAMsgDismissAllStatPopups {
    return CDOTAMsgDismissAllStatPopups.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMsgDismissAllStatPopups>): CDOTAMsgDismissAllStatPopups {
    const message = createBaseCDOTAMsgDismissAllStatPopups();
    message.timeDelay = object.timeDelay ?? 0;
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

  fromJSON(object: any): CDOTAMsgCoachHUDPing {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      tgtpath: isSet(object.tgtpath) ? String(object.tgtpath) : "",
    };
  },

  toJSON(message: CDOTAMsgCoachHUDPing): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    message.tgtpath !== undefined && (obj.tgtpath = message.tgtpath);
    return obj;
  },

  create(base?: DeepPartial<CDOTAMsgCoachHUDPing>): CDOTAMsgCoachHUDPing {
    return CDOTAMsgCoachHUDPing.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMsgCoachHUDPing>): CDOTAMsgCoachHUDPing {
    const message = createBaseCDOTAMsgCoachHUDPing();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.tgtpath = object.tgtpath ?? "";
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

  fromJSON(object: any): CDOTAMsgUnitOrder {
    return {
      orderType: isSet(object.orderType) ? dotaunitorderTFromJSON(object.orderType) : 0,
      units: Array.isArray(object?.units) ? object.units.map((e: any) => Number(e)) : [],
      targetIndex: isSet(object.targetIndex) ? Number(object.targetIndex) : 0,
      abilityIndex: isSet(object.abilityIndex) ? Number(object.abilityIndex) : 0,
      position: isSet(object.position) ? CMsgVector.fromJSON(object.position) : undefined,
      sequenceNumber: isSet(object.sequenceNumber) ? Number(object.sequenceNumber) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
    };
  },

  toJSON(message: CDOTAMsgUnitOrder): unknown {
    const obj: any = {};
    message.orderType !== undefined && (obj.orderType = dotaunitorderTToJSON(message.orderType));
    if (message.units) {
      obj.units = message.units.map((e) => Math.round(e));
    } else {
      obj.units = [];
    }
    message.targetIndex !== undefined && (obj.targetIndex = Math.round(message.targetIndex));
    message.abilityIndex !== undefined && (obj.abilityIndex = Math.round(message.abilityIndex));
    message.position !== undefined &&
      (obj.position = message.position ? CMsgVector.toJSON(message.position) : undefined);
    message.sequenceNumber !== undefined && (obj.sequenceNumber = Math.round(message.sequenceNumber));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    return obj;
  },

  create(base?: DeepPartial<CDOTAMsgUnitOrder>): CDOTAMsgUnitOrder {
    return CDOTAMsgUnitOrder.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDOTAMsgUnitOrder>): CDOTAMsgUnitOrder {
    const message = createBaseCDOTAMsgUnitOrder();
    message.orderType = object.orderType ?? 0;
    message.units = object.units?.map((e) => e) || [];
    message.targetIndex = object.targetIndex ?? 0;
    message.abilityIndex = object.abilityIndex ?? 0;
    message.position = (object.position !== undefined && object.position !== null)
      ? CMsgVector.fromPartial(object.position)
      : undefined;
    message.sequenceNumber = object.sequenceNumber ?? 0;
    message.flags = object.flags ?? 0;
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

  fromJSON(object: any): VersusScenePlayActivity {
    return {
      activities: Array.isArray(object?.activities)
        ? object.activities.map((e: any) => VersusScenePlayActivity_ActivityInfo.fromJSON(e))
        : [],
      playbackRate: isSet(object.playbackRate) ? Number(object.playbackRate) : 0,
    };
  },

  toJSON(message: VersusScenePlayActivity): unknown {
    const obj: any = {};
    if (message.activities) {
      obj.activities = message.activities.map((e) => e ? VersusScenePlayActivity_ActivityInfo.toJSON(e) : undefined);
    } else {
      obj.activities = [];
    }
    message.playbackRate !== undefined && (obj.playbackRate = message.playbackRate);
    return obj;
  },

  create(base?: DeepPartial<VersusScenePlayActivity>): VersusScenePlayActivity {
    return VersusScenePlayActivity.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VersusScenePlayActivity>): VersusScenePlayActivity {
    const message = createBaseVersusScenePlayActivity();
    message.activities = object.activities?.map((e) => VersusScenePlayActivity_ActivityInfo.fromPartial(e)) || [];
    message.playbackRate = object.playbackRate ?? 0;
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

  fromJSON(object: any): VersusScenePlayActivity_ActivityInfo {
    return {
      activity: isSet(object.activity) ? String(object.activity) : "",
      disableAutoKill: isSet(object.disableAutoKill) ? Boolean(object.disableAutoKill) : false,
      forceLooping: isSet(object.forceLooping) ? Boolean(object.forceLooping) : false,
    };
  },

  toJSON(message: VersusScenePlayActivity_ActivityInfo): unknown {
    const obj: any = {};
    message.activity !== undefined && (obj.activity = message.activity);
    message.disableAutoKill !== undefined && (obj.disableAutoKill = message.disableAutoKill);
    message.forceLooping !== undefined && (obj.forceLooping = message.forceLooping);
    return obj;
  },

  create(base?: DeepPartial<VersusScenePlayActivity_ActivityInfo>): VersusScenePlayActivity_ActivityInfo {
    return VersusScenePlayActivity_ActivityInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VersusScenePlayActivity_ActivityInfo>): VersusScenePlayActivity_ActivityInfo {
    const message = createBaseVersusScenePlayActivity_ActivityInfo();
    message.activity = object.activity ?? "";
    message.disableAutoKill = object.disableAutoKill ?? false;
    message.forceLooping = object.forceLooping ?? false;
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

  fromJSON(object: any): VersusSceneChatWheel {
    return {
      chatMessageId: isSet(object.chatMessageId) ? Number(object.chatMessageId) : 0,
      emoticonId: isSet(object.emoticonId) ? Number(object.emoticonId) : 0,
    };
  },

  toJSON(message: VersusSceneChatWheel): unknown {
    const obj: any = {};
    message.chatMessageId !== undefined && (obj.chatMessageId = Math.round(message.chatMessageId));
    message.emoticonId !== undefined && (obj.emoticonId = Math.round(message.emoticonId));
    return obj;
  },

  create(base?: DeepPartial<VersusSceneChatWheel>): VersusSceneChatWheel {
    return VersusSceneChatWheel.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VersusSceneChatWheel>): VersusSceneChatWheel {
    const message = createBaseVersusSceneChatWheel();
    message.chatMessageId = object.chatMessageId ?? 0;
    message.emoticonId = object.emoticonId ?? 0;
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

  fromJSON(object: any): VersusScenePlaybackRate {
    return { rate: isSet(object.rate) ? Number(object.rate) : 0 };
  },

  toJSON(message: VersusScenePlaybackRate): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },

  create(base?: DeepPartial<VersusScenePlaybackRate>): VersusScenePlaybackRate {
    return VersusScenePlaybackRate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VersusScenePlaybackRate>): VersusScenePlaybackRate {
    const message = createBaseVersusScenePlaybackRate();
    message.rate = object.rate ?? 0;
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
