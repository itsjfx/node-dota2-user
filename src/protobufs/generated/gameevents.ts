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

export function eBaseGameEventsFromJSON(object: any): EBaseGameEvents {
  switch (object) {
    case 200:
    case "GE_VDebugGameSessionIDEvent":
      return EBaseGameEvents.GE_VDebugGameSessionIDEvent;
    case 201:
    case "GE_PlaceDecalEvent":
      return EBaseGameEvents.GE_PlaceDecalEvent;
    case 202:
    case "GE_ClearWorldDecalsEvent":
      return EBaseGameEvents.GE_ClearWorldDecalsEvent;
    case 203:
    case "GE_ClearEntityDecalsEvent":
      return EBaseGameEvents.GE_ClearEntityDecalsEvent;
    case 204:
    case "GE_ClearDecalsForSkeletonInstanceEvent":
      return EBaseGameEvents.GE_ClearDecalsForSkeletonInstanceEvent;
    case 205:
    case "GE_Source1LegacyGameEventList":
      return EBaseGameEvents.GE_Source1LegacyGameEventList;
    case 206:
    case "GE_Source1LegacyListenEvents":
      return EBaseGameEvents.GE_Source1LegacyListenEvents;
    case 207:
    case "GE_Source1LegacyGameEvent":
      return EBaseGameEvents.GE_Source1LegacyGameEvent;
    case 208:
    case "GE_SosStartSoundEvent":
      return EBaseGameEvents.GE_SosStartSoundEvent;
    case 209:
    case "GE_SosStopSoundEvent":
      return EBaseGameEvents.GE_SosStopSoundEvent;
    case 210:
    case "GE_SosSetSoundEventParams":
      return EBaseGameEvents.GE_SosSetSoundEventParams;
    case 211:
    case "GE_SosSetLibraryStackFields":
      return EBaseGameEvents.GE_SosSetLibraryStackFields;
    case 212:
    case "GE_SosStopSoundEventHash":
      return EBaseGameEvents.GE_SosStopSoundEventHash;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EBaseGameEvents");
  }
}

export function eBaseGameEventsToJSON(object: EBaseGameEvents): string {
  switch (object) {
    case EBaseGameEvents.GE_VDebugGameSessionIDEvent:
      return "GE_VDebugGameSessionIDEvent";
    case EBaseGameEvents.GE_PlaceDecalEvent:
      return "GE_PlaceDecalEvent";
    case EBaseGameEvents.GE_ClearWorldDecalsEvent:
      return "GE_ClearWorldDecalsEvent";
    case EBaseGameEvents.GE_ClearEntityDecalsEvent:
      return "GE_ClearEntityDecalsEvent";
    case EBaseGameEvents.GE_ClearDecalsForSkeletonInstanceEvent:
      return "GE_ClearDecalsForSkeletonInstanceEvent";
    case EBaseGameEvents.GE_Source1LegacyGameEventList:
      return "GE_Source1LegacyGameEventList";
    case EBaseGameEvents.GE_Source1LegacyListenEvents:
      return "GE_Source1LegacyListenEvents";
    case EBaseGameEvents.GE_Source1LegacyGameEvent:
      return "GE_Source1LegacyGameEvent";
    case EBaseGameEvents.GE_SosStartSoundEvent:
      return "GE_SosStartSoundEvent";
    case EBaseGameEvents.GE_SosStopSoundEvent:
      return "GE_SosStopSoundEvent";
    case EBaseGameEvents.GE_SosSetSoundEventParams:
      return "GE_SosSetSoundEventParams";
    case EBaseGameEvents.GE_SosSetLibraryStackFields:
      return "GE_SosSetLibraryStackFields";
    case EBaseGameEvents.GE_SosStopSoundEventHash:
      return "GE_SosStopSoundEventHash";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EBaseGameEvents");
  }
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

  fromJSON(object: any): CMsgVDebugGameSessionIDEvent {
    return {
      clientid: isSet(object.clientid) ? Number(object.clientid) : 0,
      gamesessionid: isSet(object.gamesessionid) ? String(object.gamesessionid) : "",
    };
  },

  toJSON(message: CMsgVDebugGameSessionIDEvent): unknown {
    const obj: any = {};
    message.clientid !== undefined && (obj.clientid = Math.round(message.clientid));
    message.gamesessionid !== undefined && (obj.gamesessionid = message.gamesessionid);
    return obj;
  },

  create(base?: DeepPartial<CMsgVDebugGameSessionIDEvent>): CMsgVDebugGameSessionIDEvent {
    return CMsgVDebugGameSessionIDEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgVDebugGameSessionIDEvent>): CMsgVDebugGameSessionIDEvent {
    const message = createBaseCMsgVDebugGameSessionIDEvent();
    message.clientid = object.clientid ?? 0;
    message.gamesessionid = object.gamesessionid ?? "";
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

  fromJSON(object: any): CMsgPlaceDecalEvent {
    return {
      position: isSet(object.position) ? CMsgVector.fromJSON(object.position) : undefined,
      normal: isSet(object.normal) ? CMsgVector.fromJSON(object.normal) : undefined,
      saxis: isSet(object.saxis) ? CMsgVector.fromJSON(object.saxis) : undefined,
      decalmaterialindex: isSet(object.decalmaterialindex) ? Number(object.decalmaterialindex) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      color: isSet(object.color) ? Number(object.color) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      depth: isSet(object.depth) ? Number(object.depth) : 0,
      entityhandleindex: isSet(object.entityhandleindex) ? Number(object.entityhandleindex) : 0,
      skeletoninstancehash: isSet(object.skeletoninstancehash) ? Number(object.skeletoninstancehash) : 0,
      boneindex: isSet(object.boneindex) ? Number(object.boneindex) : 0,
      translucenthit: isSet(object.translucenthit) ? Boolean(object.translucenthit) : false,
      isAdjacent: isSet(object.isAdjacent) ? Boolean(object.isAdjacent) : false,
    };
  },

  toJSON(message: CMsgPlaceDecalEvent): unknown {
    const obj: any = {};
    message.position !== undefined &&
      (obj.position = message.position ? CMsgVector.toJSON(message.position) : undefined);
    message.normal !== undefined && (obj.normal = message.normal ? CMsgVector.toJSON(message.normal) : undefined);
    message.saxis !== undefined && (obj.saxis = message.saxis ? CMsgVector.toJSON(message.saxis) : undefined);
    message.decalmaterialindex !== undefined && (obj.decalmaterialindex = Math.round(message.decalmaterialindex));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.color !== undefined && (obj.color = Math.round(message.color));
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.depth !== undefined && (obj.depth = message.depth);
    message.entityhandleindex !== undefined && (obj.entityhandleindex = Math.round(message.entityhandleindex));
    message.skeletoninstancehash !== undefined && (obj.skeletoninstancehash = Math.round(message.skeletoninstancehash));
    message.boneindex !== undefined && (obj.boneindex = Math.round(message.boneindex));
    message.translucenthit !== undefined && (obj.translucenthit = message.translucenthit);
    message.isAdjacent !== undefined && (obj.isAdjacent = message.isAdjacent);
    return obj;
  },

  create(base?: DeepPartial<CMsgPlaceDecalEvent>): CMsgPlaceDecalEvent {
    return CMsgPlaceDecalEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgPlaceDecalEvent>): CMsgPlaceDecalEvent {
    const message = createBaseCMsgPlaceDecalEvent();
    message.position = (object.position !== undefined && object.position !== null)
      ? CMsgVector.fromPartial(object.position)
      : undefined;
    message.normal = (object.normal !== undefined && object.normal !== null)
      ? CMsgVector.fromPartial(object.normal)
      : undefined;
    message.saxis = (object.saxis !== undefined && object.saxis !== null)
      ? CMsgVector.fromPartial(object.saxis)
      : undefined;
    message.decalmaterialindex = object.decalmaterialindex ?? 0;
    message.flags = object.flags ?? 0;
    message.color = object.color ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.depth = object.depth ?? 0;
    message.entityhandleindex = object.entityhandleindex ?? 0;
    message.skeletoninstancehash = object.skeletoninstancehash ?? 0;
    message.boneindex = object.boneindex ?? 0;
    message.translucenthit = object.translucenthit ?? false;
    message.isAdjacent = object.isAdjacent ?? false;
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

  fromJSON(object: any): CMsgClearWorldDecalsEvent {
    return { flagstoclear: isSet(object.flagstoclear) ? Number(object.flagstoclear) : 0 };
  },

  toJSON(message: CMsgClearWorldDecalsEvent): unknown {
    const obj: any = {};
    message.flagstoclear !== undefined && (obj.flagstoclear = Math.round(message.flagstoclear));
    return obj;
  },

  create(base?: DeepPartial<CMsgClearWorldDecalsEvent>): CMsgClearWorldDecalsEvent {
    return CMsgClearWorldDecalsEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClearWorldDecalsEvent>): CMsgClearWorldDecalsEvent {
    const message = createBaseCMsgClearWorldDecalsEvent();
    message.flagstoclear = object.flagstoclear ?? 0;
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

  fromJSON(object: any): CMsgClearEntityDecalsEvent {
    return { flagstoclear: isSet(object.flagstoclear) ? Number(object.flagstoclear) : 0 };
  },

  toJSON(message: CMsgClearEntityDecalsEvent): unknown {
    const obj: any = {};
    message.flagstoclear !== undefined && (obj.flagstoclear = Math.round(message.flagstoclear));
    return obj;
  },

  create(base?: DeepPartial<CMsgClearEntityDecalsEvent>): CMsgClearEntityDecalsEvent {
    return CMsgClearEntityDecalsEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClearEntityDecalsEvent>): CMsgClearEntityDecalsEvent {
    const message = createBaseCMsgClearEntityDecalsEvent();
    message.flagstoclear = object.flagstoclear ?? 0;
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

  fromJSON(object: any): CMsgClearDecalsForSkeletonInstanceEvent {
    return {
      flagstoclear: isSet(object.flagstoclear) ? Number(object.flagstoclear) : 0,
      entityhandleindex: isSet(object.entityhandleindex) ? Number(object.entityhandleindex) : 0,
      skeletoninstancehash: isSet(object.skeletoninstancehash) ? Number(object.skeletoninstancehash) : 0,
    };
  },

  toJSON(message: CMsgClearDecalsForSkeletonInstanceEvent): unknown {
    const obj: any = {};
    message.flagstoclear !== undefined && (obj.flagstoclear = Math.round(message.flagstoclear));
    message.entityhandleindex !== undefined && (obj.entityhandleindex = Math.round(message.entityhandleindex));
    message.skeletoninstancehash !== undefined && (obj.skeletoninstancehash = Math.round(message.skeletoninstancehash));
    return obj;
  },

  create(base?: DeepPartial<CMsgClearDecalsForSkeletonInstanceEvent>): CMsgClearDecalsForSkeletonInstanceEvent {
    return CMsgClearDecalsForSkeletonInstanceEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClearDecalsForSkeletonInstanceEvent>): CMsgClearDecalsForSkeletonInstanceEvent {
    const message = createBaseCMsgClearDecalsForSkeletonInstanceEvent();
    message.flagstoclear = object.flagstoclear ?? 0;
    message.entityhandleindex = object.entityhandleindex ?? 0;
    message.skeletoninstancehash = object.skeletoninstancehash ?? 0;
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

  fromJSON(object: any): CMsgSource1LegacyGameEventList {
    return {
      descriptors: Array.isArray(object?.descriptors)
        ? object.descriptors.map((e: any) => CMsgSource1LegacyGameEventList_descriptorT.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSource1LegacyGameEventList): unknown {
    const obj: any = {};
    if (message.descriptors) {
      obj.descriptors = message.descriptors.map((e) =>
        e ? CMsgSource1LegacyGameEventList_descriptorT.toJSON(e) : undefined
      );
    } else {
      obj.descriptors = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgSource1LegacyGameEventList>): CMsgSource1LegacyGameEventList {
    return CMsgSource1LegacyGameEventList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSource1LegacyGameEventList>): CMsgSource1LegacyGameEventList {
    const message = createBaseCMsgSource1LegacyGameEventList();
    message.descriptors = object.descriptors?.map((e) => CMsgSource1LegacyGameEventList_descriptorT.fromPartial(e)) ||
      [];
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

  fromJSON(object: any): CMsgSource1LegacyGameEventList_keyT {
    return { type: isSet(object.type) ? Number(object.type) : 0, name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: CMsgSource1LegacyGameEventList_keyT): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<CMsgSource1LegacyGameEventList_keyT>): CMsgSource1LegacyGameEventList_keyT {
    return CMsgSource1LegacyGameEventList_keyT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSource1LegacyGameEventList_keyT>): CMsgSource1LegacyGameEventList_keyT {
    const message = createBaseCMsgSource1LegacyGameEventList_keyT();
    message.type = object.type ?? 0;
    message.name = object.name ?? "";
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

  fromJSON(object: any): CMsgSource1LegacyGameEventList_descriptorT {
    return {
      eventid: isSet(object.eventid) ? Number(object.eventid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      keys: Array.isArray(object?.keys)
        ? object.keys.map((e: any) => CMsgSource1LegacyGameEventList_keyT.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSource1LegacyGameEventList_descriptorT): unknown {
    const obj: any = {};
    message.eventid !== undefined && (obj.eventid = Math.round(message.eventid));
    message.name !== undefined && (obj.name = message.name);
    if (message.keys) {
      obj.keys = message.keys.map((e) => e ? CMsgSource1LegacyGameEventList_keyT.toJSON(e) : undefined);
    } else {
      obj.keys = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgSource1LegacyGameEventList_descriptorT>): CMsgSource1LegacyGameEventList_descriptorT {
    return CMsgSource1LegacyGameEventList_descriptorT.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSource1LegacyGameEventList_descriptorT>,
  ): CMsgSource1LegacyGameEventList_descriptorT {
    const message = createBaseCMsgSource1LegacyGameEventList_descriptorT();
    message.eventid = object.eventid ?? 0;
    message.name = object.name ?? "";
    message.keys = object.keys?.map((e) => CMsgSource1LegacyGameEventList_keyT.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgSource1LegacyListenEvents {
    return {
      playerslot: isSet(object.playerslot) ? Number(object.playerslot) : 0,
      eventarraybits: Array.isArray(object?.eventarraybits) ? object.eventarraybits.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgSource1LegacyListenEvents): unknown {
    const obj: any = {};
    message.playerslot !== undefined && (obj.playerslot = Math.round(message.playerslot));
    if (message.eventarraybits) {
      obj.eventarraybits = message.eventarraybits.map((e) => Math.round(e));
    } else {
      obj.eventarraybits = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgSource1LegacyListenEvents>): CMsgSource1LegacyListenEvents {
    return CMsgSource1LegacyListenEvents.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSource1LegacyListenEvents>): CMsgSource1LegacyListenEvents {
    const message = createBaseCMsgSource1LegacyListenEvents();
    message.playerslot = object.playerslot ?? 0;
    message.eventarraybits = object.eventarraybits?.map((e) => e) || [];
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

  fromJSON(object: any): CMsgSource1LegacyGameEvent {
    return {
      eventName: isSet(object.eventName) ? String(object.eventName) : "",
      eventid: isSet(object.eventid) ? Number(object.eventid) : 0,
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => CMsgSource1LegacyGameEvent_keyT.fromJSON(e)) : [],
      serverTick: isSet(object.serverTick) ? Number(object.serverTick) : 0,
      passthrough: isSet(object.passthrough) ? Number(object.passthrough) : 0,
    };
  },

  toJSON(message: CMsgSource1LegacyGameEvent): unknown {
    const obj: any = {};
    message.eventName !== undefined && (obj.eventName = message.eventName);
    message.eventid !== undefined && (obj.eventid = Math.round(message.eventid));
    if (message.keys) {
      obj.keys = message.keys.map((e) => e ? CMsgSource1LegacyGameEvent_keyT.toJSON(e) : undefined);
    } else {
      obj.keys = [];
    }
    message.serverTick !== undefined && (obj.serverTick = Math.round(message.serverTick));
    message.passthrough !== undefined && (obj.passthrough = Math.round(message.passthrough));
    return obj;
  },

  create(base?: DeepPartial<CMsgSource1LegacyGameEvent>): CMsgSource1LegacyGameEvent {
    return CMsgSource1LegacyGameEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSource1LegacyGameEvent>): CMsgSource1LegacyGameEvent {
    const message = createBaseCMsgSource1LegacyGameEvent();
    message.eventName = object.eventName ?? "";
    message.eventid = object.eventid ?? 0;
    message.keys = object.keys?.map((e) => CMsgSource1LegacyGameEvent_keyT.fromPartial(e)) || [];
    message.serverTick = object.serverTick ?? 0;
    message.passthrough = object.passthrough ?? 0;
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

  fromJSON(object: any): CMsgSource1LegacyGameEvent_keyT {
    return {
      type: isSet(object.type) ? Number(object.type) : 0,
      valString: isSet(object.valString) ? String(object.valString) : "",
      valFloat: isSet(object.valFloat) ? Number(object.valFloat) : 0,
      valLong: isSet(object.valLong) ? Number(object.valLong) : 0,
      valShort: isSet(object.valShort) ? Number(object.valShort) : 0,
      valByte: isSet(object.valByte) ? Number(object.valByte) : 0,
      valBool: isSet(object.valBool) ? Boolean(object.valBool) : false,
      valUint64: isSet(object.valUint64) ? String(object.valUint64) : "0",
    };
  },

  toJSON(message: CMsgSource1LegacyGameEvent_keyT): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.valString !== undefined && (obj.valString = message.valString);
    message.valFloat !== undefined && (obj.valFloat = message.valFloat);
    message.valLong !== undefined && (obj.valLong = Math.round(message.valLong));
    message.valShort !== undefined && (obj.valShort = Math.round(message.valShort));
    message.valByte !== undefined && (obj.valByte = Math.round(message.valByte));
    message.valBool !== undefined && (obj.valBool = message.valBool);
    message.valUint64 !== undefined && (obj.valUint64 = message.valUint64);
    return obj;
  },

  create(base?: DeepPartial<CMsgSource1LegacyGameEvent_keyT>): CMsgSource1LegacyGameEvent_keyT {
    return CMsgSource1LegacyGameEvent_keyT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSource1LegacyGameEvent_keyT>): CMsgSource1LegacyGameEvent_keyT {
    const message = createBaseCMsgSource1LegacyGameEvent_keyT();
    message.type = object.type ?? 0;
    message.valString = object.valString ?? "";
    message.valFloat = object.valFloat ?? 0;
    message.valLong = object.valLong ?? 0;
    message.valShort = object.valShort ?? 0;
    message.valByte = object.valByte ?? 0;
    message.valBool = object.valBool ?? false;
    message.valUint64 = object.valUint64 ?? "0";
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

  fromJSON(object: any): CMsgSosStartSoundEvent {
    return {
      soundeventGuid: isSet(object.soundeventGuid) ? Number(object.soundeventGuid) : 0,
      soundeventHash: isSet(object.soundeventHash) ? Number(object.soundeventHash) : 0,
      sourceEntityIndex: isSet(object.sourceEntityIndex) ? Number(object.sourceEntityIndex) : 0,
      seed: isSet(object.seed) ? Number(object.seed) : 0,
      packedParams: isSet(object.packedParams) ? Buffer.from(bytesFromBase64(object.packedParams)) : Buffer.alloc(0),
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
    };
  },

  toJSON(message: CMsgSosStartSoundEvent): unknown {
    const obj: any = {};
    message.soundeventGuid !== undefined && (obj.soundeventGuid = Math.round(message.soundeventGuid));
    message.soundeventHash !== undefined && (obj.soundeventHash = Math.round(message.soundeventHash));
    message.sourceEntityIndex !== undefined && (obj.sourceEntityIndex = Math.round(message.sourceEntityIndex));
    message.seed !== undefined && (obj.seed = Math.round(message.seed));
    message.packedParams !== undefined &&
      (obj.packedParams = base64FromBytes(message.packedParams !== undefined ? message.packedParams : Buffer.alloc(0)));
    message.startTime !== undefined && (obj.startTime = message.startTime);
    return obj;
  },

  create(base?: DeepPartial<CMsgSosStartSoundEvent>): CMsgSosStartSoundEvent {
    return CMsgSosStartSoundEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSosStartSoundEvent>): CMsgSosStartSoundEvent {
    const message = createBaseCMsgSosStartSoundEvent();
    message.soundeventGuid = object.soundeventGuid ?? 0;
    message.soundeventHash = object.soundeventHash ?? 0;
    message.sourceEntityIndex = object.sourceEntityIndex ?? 0;
    message.seed = object.seed ?? 0;
    message.packedParams = object.packedParams ?? Buffer.alloc(0);
    message.startTime = object.startTime ?? 0;
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

  fromJSON(object: any): CMsgSosStopSoundEvent {
    return { soundeventGuid: isSet(object.soundeventGuid) ? Number(object.soundeventGuid) : 0 };
  },

  toJSON(message: CMsgSosStopSoundEvent): unknown {
    const obj: any = {};
    message.soundeventGuid !== undefined && (obj.soundeventGuid = Math.round(message.soundeventGuid));
    return obj;
  },

  create(base?: DeepPartial<CMsgSosStopSoundEvent>): CMsgSosStopSoundEvent {
    return CMsgSosStopSoundEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSosStopSoundEvent>): CMsgSosStopSoundEvent {
    const message = createBaseCMsgSosStopSoundEvent();
    message.soundeventGuid = object.soundeventGuid ?? 0;
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

  fromJSON(object: any): CMsgSosStopSoundEventHash {
    return {
      soundeventHash: isSet(object.soundeventHash) ? Number(object.soundeventHash) : 0,
      sourceEntityIndex: isSet(object.sourceEntityIndex) ? Number(object.sourceEntityIndex) : 0,
    };
  },

  toJSON(message: CMsgSosStopSoundEventHash): unknown {
    const obj: any = {};
    message.soundeventHash !== undefined && (obj.soundeventHash = Math.round(message.soundeventHash));
    message.sourceEntityIndex !== undefined && (obj.sourceEntityIndex = Math.round(message.sourceEntityIndex));
    return obj;
  },

  create(base?: DeepPartial<CMsgSosStopSoundEventHash>): CMsgSosStopSoundEventHash {
    return CMsgSosStopSoundEventHash.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSosStopSoundEventHash>): CMsgSosStopSoundEventHash {
    const message = createBaseCMsgSosStopSoundEventHash();
    message.soundeventHash = object.soundeventHash ?? 0;
    message.sourceEntityIndex = object.sourceEntityIndex ?? 0;
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

  fromJSON(object: any): CMsgSosSetSoundEventParams {
    return {
      soundeventGuid: isSet(object.soundeventGuid) ? Number(object.soundeventGuid) : 0,
      packedParams: isSet(object.packedParams) ? Buffer.from(bytesFromBase64(object.packedParams)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgSosSetSoundEventParams): unknown {
    const obj: any = {};
    message.soundeventGuid !== undefined && (obj.soundeventGuid = Math.round(message.soundeventGuid));
    message.packedParams !== undefined &&
      (obj.packedParams = base64FromBytes(message.packedParams !== undefined ? message.packedParams : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CMsgSosSetSoundEventParams>): CMsgSosSetSoundEventParams {
    return CMsgSosSetSoundEventParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSosSetSoundEventParams>): CMsgSosSetSoundEventParams {
    const message = createBaseCMsgSosSetSoundEventParams();
    message.soundeventGuid = object.soundeventGuid ?? 0;
    message.packedParams = object.packedParams ?? Buffer.alloc(0);
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

  fromJSON(object: any): CMsgSosSetLibraryStackFields {
    return {
      stackHash: isSet(object.stackHash) ? Number(object.stackHash) : 0,
      packedFields: isSet(object.packedFields) ? Buffer.from(bytesFromBase64(object.packedFields)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgSosSetLibraryStackFields): unknown {
    const obj: any = {};
    message.stackHash !== undefined && (obj.stackHash = Math.round(message.stackHash));
    message.packedFields !== undefined &&
      (obj.packedFields = base64FromBytes(message.packedFields !== undefined ? message.packedFields : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CMsgSosSetLibraryStackFields>): CMsgSosSetLibraryStackFields {
    return CMsgSosSetLibraryStackFields.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSosSetLibraryStackFields>): CMsgSosSetLibraryStackFields {
    const message = createBaseCMsgSosSetLibraryStackFields();
    message.stackHash = object.stackHash ?? 0;
    message.packedFields = object.packedFields ?? Buffer.alloc(0);
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
