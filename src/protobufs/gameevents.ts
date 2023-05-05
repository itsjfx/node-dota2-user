/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgVector } from "./networkbasetypes";

export enum EBaseGameEvents {
  GE_VDebugGameSessionIDEvent = 200,
  GE_PlaceDecalEvent = 201,
  GE_ClearWorldDecalsEvent = 202,
  GE_ClearEntityDecalsEvent = 203,
  GE_ClearDecalsForSkeletonInstanceEvent = 204,
  GE_Source1LegacyGameEventList = 205,
  GE_Source1LegacyListenEvents = 206,
  GE_Source1LegacyGameEvent = 207,
  GE_SosStartSoundEvent = 208,
  GE_SosStopSoundEvent = 209,
  GE_SosSetSoundEventParams = 210,
  GE_SosSetLibraryStackFields = 211,
  GE_SosStopSoundEventHash = 212,
}

export interface CMsgVDebugGameSessionIDEvent {
  clientid: number;
  gamesessionid: string;
}

export interface CMsgPlaceDecalEvent {
  position: CMsgVector | undefined;
  normal: CMsgVector | undefined;
  saxis: CMsgVector | undefined;
  decalmaterialindex: number;
  flags: number;
  color: number;
  width: number;
  height: number;
  depth: number;
  entityhandleindex: number;
  skeletoninstancehash: number;
  boneindex: number;
  translucenthit: boolean;
  isAdjacent: boolean;
}

export interface CMsgClearWorldDecalsEvent {
  flagstoclear: number;
}

export interface CMsgClearEntityDecalsEvent {
  flagstoclear: number;
}

export interface CMsgClearDecalsForSkeletonInstanceEvent {
  flagstoclear: number;
  entityhandleindex: number;
  skeletoninstancehash: number;
}

export interface CMsgSource1LegacyGameEventList {
  descriptors: CMsgSource1LegacyGameEventList_descriptorT[];
}

export interface CMsgSource1LegacyGameEventList_keyT {
  type: number;
  name: string;
}

export interface CMsgSource1LegacyGameEventList_descriptorT {
  eventid: number;
  name: string;
  keys: CMsgSource1LegacyGameEventList_keyT[];
}

export interface CMsgSource1LegacyListenEvents {
  playerslot: number;
  eventarraybits: number[];
}

export interface CMsgSource1LegacyGameEvent {
  eventName: string;
  eventid: number;
  keys: CMsgSource1LegacyGameEvent_keyT[];
  serverTick: number;
  passthrough: number;
}

export interface CMsgSource1LegacyGameEvent_keyT {
  type: number;
  valString: string;
  valFloat: number;
  valLong: number;
  valShort: number;
  valByte: number;
  valBool: boolean;
  valUint64: string;
}

export interface CMsgSosStartSoundEvent {
  soundeventGuid: number;
  soundeventHash: number;
  sourceEntityIndex: number;
  seed: number;
  packedParams: Buffer;
  startTime: number;
}

export interface CMsgSosStopSoundEvent {
  soundeventGuid: number;
}

export interface CMsgSosStopSoundEventHash {
  soundeventHash: number;
  sourceEntityIndex: number;
}

export interface CMsgSosSetSoundEventParams {
  soundeventGuid: number;
  packedParams: Buffer;
}

export interface CMsgSosSetLibraryStackFields {
  stackHash: number;
  packedFields: Buffer;
}

function createBaseCMsgVDebugGameSessionIDEvent(): CMsgVDebugGameSessionIDEvent {
  return { clientid: 0, gamesessionid: "" };
}

export const CMsgVDebugGameSessionIDEvent = {
  encode(message: CMsgVDebugGameSessionIDEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientid !== 0) {
      writer.uint32(8).int32(message.clientid);
    }
    if (message.gamesessionid !== "") {
      writer.uint32(18).string(message.gamesessionid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgVDebugGameSessionIDEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgVDebugGameSessionIDEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.clientid = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.gamesessionid = reader.string();
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

function createBaseCMsgPlaceDecalEvent(): CMsgPlaceDecalEvent {
  return {
    position: undefined,
    normal: undefined,
    saxis: undefined,
    decalmaterialindex: 0,
    flags: 0,
    color: 0,
    width: 0,
    height: 0,
    depth: 0,
    entityhandleindex: 0,
    skeletoninstancehash: 0,
    boneindex: 0,
    translucenthit: false,
    isAdjacent: false,
  };
}

export const CMsgPlaceDecalEvent = {
  encode(message: CMsgPlaceDecalEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      CMsgVector.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.normal !== undefined) {
      CMsgVector.encode(message.normal, writer.uint32(18).fork()).ldelim();
    }
    if (message.saxis !== undefined) {
      CMsgVector.encode(message.saxis, writer.uint32(26).fork()).ldelim();
    }
    if (message.decalmaterialindex !== 0) {
      writer.uint32(32).uint32(message.decalmaterialindex);
    }
    if (message.flags !== 0) {
      writer.uint32(40).uint32(message.flags);
    }
    if (message.color !== 0) {
      writer.uint32(53).fixed32(message.color);
    }
    if (message.width !== 0) {
      writer.uint32(61).float(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(69).float(message.height);
    }
    if (message.depth !== 0) {
      writer.uint32(77).float(message.depth);
    }
    if (message.entityhandleindex !== 0) {
      writer.uint32(80).uint32(message.entityhandleindex);
    }
    if (message.skeletoninstancehash !== 0) {
      writer.uint32(93).fixed32(message.skeletoninstancehash);
    }
    if (message.boneindex !== 0) {
      writer.uint32(96).int32(message.boneindex);
    }
    if (message.translucenthit === true) {
      writer.uint32(104).bool(message.translucenthit);
    }
    if (message.isAdjacent === true) {
      writer.uint32(112).bool(message.isAdjacent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPlaceDecalEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPlaceDecalEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.position = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.normal = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.saxis = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.decalmaterialindex = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.color = reader.fixed32();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.width = reader.float();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.height = reader.float();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.depth = reader.float();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.entityhandleindex = reader.uint32();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.skeletoninstancehash = reader.fixed32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.boneindex = reader.int32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.translucenthit = reader.bool();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.isAdjacent = reader.bool();
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

function createBaseCMsgClearWorldDecalsEvent(): CMsgClearWorldDecalsEvent {
  return { flagstoclear: 0 };
}

export const CMsgClearWorldDecalsEvent = {
  encode(message: CMsgClearWorldDecalsEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.flagstoclear !== 0) {
      writer.uint32(8).uint32(message.flagstoclear);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClearWorldDecalsEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClearWorldDecalsEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.flagstoclear = reader.uint32();
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

function createBaseCMsgClearEntityDecalsEvent(): CMsgClearEntityDecalsEvent {
  return { flagstoclear: 0 };
}

export const CMsgClearEntityDecalsEvent = {
  encode(message: CMsgClearEntityDecalsEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.flagstoclear !== 0) {
      writer.uint32(8).uint32(message.flagstoclear);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClearEntityDecalsEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClearEntityDecalsEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.flagstoclear = reader.uint32();
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

function createBaseCMsgClearDecalsForSkeletonInstanceEvent(): CMsgClearDecalsForSkeletonInstanceEvent {
  return { flagstoclear: 0, entityhandleindex: 0, skeletoninstancehash: 0 };
}

export const CMsgClearDecalsForSkeletonInstanceEvent = {
  encode(message: CMsgClearDecalsForSkeletonInstanceEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.flagstoclear !== 0) {
      writer.uint32(8).uint32(message.flagstoclear);
    }
    if (message.entityhandleindex !== 0) {
      writer.uint32(16).uint32(message.entityhandleindex);
    }
    if (message.skeletoninstancehash !== 0) {
      writer.uint32(24).uint32(message.skeletoninstancehash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClearDecalsForSkeletonInstanceEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClearDecalsForSkeletonInstanceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.flagstoclear = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.entityhandleindex = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.skeletoninstancehash = reader.uint32();
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

function createBaseCMsgSource1LegacyGameEventList(): CMsgSource1LegacyGameEventList {
  return { descriptors: [] };
}

export const CMsgSource1LegacyGameEventList = {
  encode(message: CMsgSource1LegacyGameEventList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.descriptors) {
      CMsgSource1LegacyGameEventList_descriptorT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSource1LegacyGameEventList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSource1LegacyGameEventList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.descriptors.push(CMsgSource1LegacyGameEventList_descriptorT.decode(reader, reader.uint32()));
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

function createBaseCMsgSource1LegacyGameEventList_keyT(): CMsgSource1LegacyGameEventList_keyT {
  return { type: 0, name: "" };
}

export const CMsgSource1LegacyGameEventList_keyT = {
  encode(message: CMsgSource1LegacyGameEventList_keyT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSource1LegacyGameEventList_keyT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSource1LegacyGameEventList_keyT();
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
};

function createBaseCMsgSource1LegacyGameEventList_descriptorT(): CMsgSource1LegacyGameEventList_descriptorT {
  return { eventid: 0, name: "", keys: [] };
}

export const CMsgSource1LegacyGameEventList_descriptorT = {
  encode(message: CMsgSource1LegacyGameEventList_descriptorT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventid !== 0) {
      writer.uint32(8).int32(message.eventid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.keys) {
      CMsgSource1LegacyGameEventList_keyT.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSource1LegacyGameEventList_descriptorT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSource1LegacyGameEventList_descriptorT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventid = reader.int32();
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

          message.keys.push(CMsgSource1LegacyGameEventList_keyT.decode(reader, reader.uint32()));
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

function createBaseCMsgSource1LegacyListenEvents(): CMsgSource1LegacyListenEvents {
  return { playerslot: 0, eventarraybits: [] };
}

export const CMsgSource1LegacyListenEvents = {
  encode(message: CMsgSource1LegacyListenEvents, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerslot !== 0) {
      writer.uint32(8).int32(message.playerslot);
    }
    writer.uint32(18).fork();
    for (const v of message.eventarraybits) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSource1LegacyListenEvents {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSource1LegacyListenEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerslot = reader.int32();
          continue;
        case 2:
          if (tag == 16) {
            message.eventarraybits.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.eventarraybits.push(reader.uint32());
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

function createBaseCMsgSource1LegacyGameEvent(): CMsgSource1LegacyGameEvent {
  return { eventName: "", eventid: 0, keys: [], serverTick: 0, passthrough: 0 };
}

export const CMsgSource1LegacyGameEvent = {
  encode(message: CMsgSource1LegacyGameEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventName !== "") {
      writer.uint32(10).string(message.eventName);
    }
    if (message.eventid !== 0) {
      writer.uint32(16).int32(message.eventid);
    }
    for (const v of message.keys) {
      CMsgSource1LegacyGameEvent_keyT.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.serverTick !== 0) {
      writer.uint32(32).int32(message.serverTick);
    }
    if (message.passthrough !== 0) {
      writer.uint32(40).int32(message.passthrough);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSource1LegacyGameEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSource1LegacyGameEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.eventName = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.eventid = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.keys.push(CMsgSource1LegacyGameEvent_keyT.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.serverTick = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.passthrough = reader.int32();
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

function createBaseCMsgSource1LegacyGameEvent_keyT(): CMsgSource1LegacyGameEvent_keyT {
  return { type: 0, valString: "", valFloat: 0, valLong: 0, valShort: 0, valByte: 0, valBool: false, valUint64: "0" };
}

export const CMsgSource1LegacyGameEvent_keyT = {
  encode(message: CMsgSource1LegacyGameEvent_keyT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.valString !== "") {
      writer.uint32(18).string(message.valString);
    }
    if (message.valFloat !== 0) {
      writer.uint32(29).float(message.valFloat);
    }
    if (message.valLong !== 0) {
      writer.uint32(32).int32(message.valLong);
    }
    if (message.valShort !== 0) {
      writer.uint32(40).int32(message.valShort);
    }
    if (message.valByte !== 0) {
      writer.uint32(48).int32(message.valByte);
    }
    if (message.valBool === true) {
      writer.uint32(56).bool(message.valBool);
    }
    if (message.valUint64 !== "0") {
      writer.uint32(64).uint64(message.valUint64);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSource1LegacyGameEvent_keyT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSource1LegacyGameEvent_keyT();
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

          message.valString = reader.string();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.valFloat = reader.float();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.valLong = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.valShort = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.valByte = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.valBool = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.valUint64 = longToString(reader.uint64() as Long);
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

function createBaseCMsgSosStartSoundEvent(): CMsgSosStartSoundEvent {
  return {
    soundeventGuid: 0,
    soundeventHash: 0,
    sourceEntityIndex: 0,
    seed: 0,
    packedParams: Buffer.alloc(0),
    startTime: 0,
  };
}

export const CMsgSosStartSoundEvent = {
  encode(message: CMsgSosStartSoundEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.soundeventGuid !== 0) {
      writer.uint32(8).int32(message.soundeventGuid);
    }
    if (message.soundeventHash !== 0) {
      writer.uint32(21).fixed32(message.soundeventHash);
    }
    if (message.sourceEntityIndex !== 0) {
      writer.uint32(24).int32(message.sourceEntityIndex);
    }
    if (message.seed !== 0) {
      writer.uint32(32).int32(message.seed);
    }
    if (message.packedParams.length !== 0) {
      writer.uint32(42).bytes(message.packedParams);
    }
    if (message.startTime !== 0) {
      writer.uint32(53).float(message.startTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSosStartSoundEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSosStartSoundEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.soundeventGuid = reader.int32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.soundeventHash = reader.fixed32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.sourceEntityIndex = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.seed = reader.int32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.packedParams = reader.bytes() as Buffer;
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.startTime = reader.float();
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

function createBaseCMsgSosStopSoundEvent(): CMsgSosStopSoundEvent {
  return { soundeventGuid: 0 };
}

export const CMsgSosStopSoundEvent = {
  encode(message: CMsgSosStopSoundEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.soundeventGuid !== 0) {
      writer.uint32(8).int32(message.soundeventGuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSosStopSoundEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSosStopSoundEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.soundeventGuid = reader.int32();
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

function createBaseCMsgSosStopSoundEventHash(): CMsgSosStopSoundEventHash {
  return { soundeventHash: 0, sourceEntityIndex: 0 };
}

export const CMsgSosStopSoundEventHash = {
  encode(message: CMsgSosStopSoundEventHash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.soundeventHash !== 0) {
      writer.uint32(13).fixed32(message.soundeventHash);
    }
    if (message.sourceEntityIndex !== 0) {
      writer.uint32(16).int32(message.sourceEntityIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSosStopSoundEventHash {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSosStopSoundEventHash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.soundeventHash = reader.fixed32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.sourceEntityIndex = reader.int32();
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

function createBaseCMsgSosSetSoundEventParams(): CMsgSosSetSoundEventParams {
  return { soundeventGuid: 0, packedParams: Buffer.alloc(0) };
}

export const CMsgSosSetSoundEventParams = {
  encode(message: CMsgSosSetSoundEventParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.soundeventGuid !== 0) {
      writer.uint32(8).int32(message.soundeventGuid);
    }
    if (message.packedParams.length !== 0) {
      writer.uint32(42).bytes(message.packedParams);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSosSetSoundEventParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSosSetSoundEventParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.soundeventGuid = reader.int32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.packedParams = reader.bytes() as Buffer;
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

function createBaseCMsgSosSetLibraryStackFields(): CMsgSosSetLibraryStackFields {
  return { stackHash: 0, packedFields: Buffer.alloc(0) };
}

export const CMsgSosSetLibraryStackFields = {
  encode(message: CMsgSosSetLibraryStackFields, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stackHash !== 0) {
      writer.uint32(13).fixed32(message.stackHash);
    }
    if (message.packedFields.length !== 0) {
      writer.uint32(42).bytes(message.packedFields);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSosSetLibraryStackFields {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSosSetLibraryStackFields();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.stackHash = reader.fixed32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.packedFields = reader.bytes() as Buffer;
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
