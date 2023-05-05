/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { CMsgVector } from "./networkbasetypes";

export interface ChangeMapToolEvent {
  mapname: string;
}

export interface TraceRayServerToolEvent {
  start: CMsgVector | undefined;
  end: CMsgVector | undefined;
}

export interface ToolTraceRayResult {
  hit: boolean;
  impact: CMsgVector | undefined;
  normal: CMsgVector | undefined;
  distance: number;
  fraction: number;
  ehandle: number;
}

export interface SpawnEntityToolEvent {
  entityKeyvalues: Buffer;
  clientsideentity: boolean;
}

export interface SpawnEntityToolEventResult {
  ehandle: number;
}

export interface DestroyEntityToolEvent {
  ehandle: number;
}

export interface DestroyAllEntitiesToolEvent {
}

export interface RestartMapToolEvent {
}

export interface ToolEventGetEntityInfo {
  ehandle: number;
  clientsideentity: boolean;
}

export interface ToolEventGetEntityInfoResult {
  cppclass: string;
  classname: string;
  name: string;
  origin: CMsgVector | undefined;
  mins: CMsgVector | undefined;
  maxs: CMsgVector | undefined;
}

export interface ToolEventGetEntityInputs {
  ehandle: number;
  clientsideentity: boolean;
}

export interface ToolEventGetEntityInputsResult {
  inputList: string[];
}

export interface ToolEventFireEntityInput {
  ehandle: number;
  clientsideentity: boolean;
  inputName: string;
  inputParam: string;
}

export interface ToolEventSFMRecordingStateChanged {
  isrecording: boolean;
}

export interface ToolEventSFMToolActiveStateChanged {
  isactive: boolean;
}

function createBaseChangeMapToolEvent(): ChangeMapToolEvent {
  return { mapname: "" };
}

export const ChangeMapToolEvent = {
  encode(message: ChangeMapToolEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mapname !== "") {
      writer.uint32(10).string(message.mapname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeMapToolEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeMapToolEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.mapname = reader.string();
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

function createBaseTraceRayServerToolEvent(): TraceRayServerToolEvent {
  return { start: undefined, end: undefined };
}

export const TraceRayServerToolEvent = {
  encode(message: TraceRayServerToolEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined) {
      CMsgVector.encode(message.start, writer.uint32(10).fork()).ldelim();
    }
    if (message.end !== undefined) {
      CMsgVector.encode(message.end, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TraceRayServerToolEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTraceRayServerToolEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.start = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.end = CMsgVector.decode(reader, reader.uint32());
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

function createBaseToolTraceRayResult(): ToolTraceRayResult {
  return { hit: false, impact: undefined, normal: undefined, distance: 0, fraction: 0, ehandle: 0 };
}

export const ToolTraceRayResult = {
  encode(message: ToolTraceRayResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hit === true) {
      writer.uint32(8).bool(message.hit);
    }
    if (message.impact !== undefined) {
      CMsgVector.encode(message.impact, writer.uint32(18).fork()).ldelim();
    }
    if (message.normal !== undefined) {
      CMsgVector.encode(message.normal, writer.uint32(26).fork()).ldelim();
    }
    if (message.distance !== 0) {
      writer.uint32(37).float(message.distance);
    }
    if (message.fraction !== 0) {
      writer.uint32(45).float(message.fraction);
    }
    if (message.ehandle !== 0) {
      writer.uint32(48).int32(message.ehandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToolTraceRayResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToolTraceRayResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.hit = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.impact = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.normal = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.distance = reader.float();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.fraction = reader.float();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.ehandle = reader.int32();
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

function createBaseSpawnEntityToolEvent(): SpawnEntityToolEvent {
  return { entityKeyvalues: Buffer.alloc(0), clientsideentity: false };
}

export const SpawnEntityToolEvent = {
  encode(message: SpawnEntityToolEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityKeyvalues.length !== 0) {
      writer.uint32(10).bytes(message.entityKeyvalues);
    }
    if (message.clientsideentity === true) {
      writer.uint32(16).bool(message.clientsideentity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpawnEntityToolEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpawnEntityToolEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.entityKeyvalues = reader.bytes() as Buffer;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.clientsideentity = reader.bool();
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

function createBaseSpawnEntityToolEventResult(): SpawnEntityToolEventResult {
  return { ehandle: 0 };
}

export const SpawnEntityToolEventResult = {
  encode(message: SpawnEntityToolEventResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).int32(message.ehandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpawnEntityToolEventResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpawnEntityToolEventResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.int32();
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

function createBaseDestroyEntityToolEvent(): DestroyEntityToolEvent {
  return { ehandle: 0 };
}

export const DestroyEntityToolEvent = {
  encode(message: DestroyEntityToolEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).int32(message.ehandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DestroyEntityToolEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestroyEntityToolEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.int32();
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

function createBaseDestroyAllEntitiesToolEvent(): DestroyAllEntitiesToolEvent {
  return {};
}

export const DestroyAllEntitiesToolEvent = {
  encode(_: DestroyAllEntitiesToolEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DestroyAllEntitiesToolEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestroyAllEntitiesToolEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseRestartMapToolEvent(): RestartMapToolEvent {
  return {};
}

export const RestartMapToolEvent = {
  encode(_: RestartMapToolEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestartMapToolEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestartMapToolEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseToolEventGetEntityInfo(): ToolEventGetEntityInfo {
  return { ehandle: 0, clientsideentity: false };
}

export const ToolEventGetEntityInfo = {
  encode(message: ToolEventGetEntityInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).int32(message.ehandle);
    }
    if (message.clientsideentity === true) {
      writer.uint32(16).bool(message.clientsideentity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToolEventGetEntityInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToolEventGetEntityInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.clientsideentity = reader.bool();
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

function createBaseToolEventGetEntityInfoResult(): ToolEventGetEntityInfoResult {
  return { cppclass: "", classname: "", name: "", origin: undefined, mins: undefined, maxs: undefined };
}

export const ToolEventGetEntityInfoResult = {
  encode(message: ToolEventGetEntityInfoResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cppclass !== "") {
      writer.uint32(10).string(message.cppclass);
    }
    if (message.classname !== "") {
      writer.uint32(18).string(message.classname);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.origin !== undefined) {
      CMsgVector.encode(message.origin, writer.uint32(34).fork()).ldelim();
    }
    if (message.mins !== undefined) {
      CMsgVector.encode(message.mins, writer.uint32(42).fork()).ldelim();
    }
    if (message.maxs !== undefined) {
      CMsgVector.encode(message.maxs, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToolEventGetEntityInfoResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToolEventGetEntityInfoResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.cppclass = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.classname = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.origin = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.mins = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.maxs = CMsgVector.decode(reader, reader.uint32());
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

function createBaseToolEventGetEntityInputs(): ToolEventGetEntityInputs {
  return { ehandle: 0, clientsideentity: false };
}

export const ToolEventGetEntityInputs = {
  encode(message: ToolEventGetEntityInputs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).int32(message.ehandle);
    }
    if (message.clientsideentity === true) {
      writer.uint32(16).bool(message.clientsideentity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToolEventGetEntityInputs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToolEventGetEntityInputs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.clientsideentity = reader.bool();
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

function createBaseToolEventGetEntityInputsResult(): ToolEventGetEntityInputsResult {
  return { inputList: [] };
}

export const ToolEventGetEntityInputsResult = {
  encode(message: ToolEventGetEntityInputsResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inputList) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToolEventGetEntityInputsResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToolEventGetEntityInputsResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.inputList.push(reader.string());
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

function createBaseToolEventFireEntityInput(): ToolEventFireEntityInput {
  return { ehandle: 0, clientsideentity: false, inputName: "", inputParam: "" };
}

export const ToolEventFireEntityInput = {
  encode(message: ToolEventFireEntityInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ehandle !== 0) {
      writer.uint32(8).int32(message.ehandle);
    }
    if (message.clientsideentity === true) {
      writer.uint32(16).bool(message.clientsideentity);
    }
    if (message.inputName !== "") {
      writer.uint32(26).string(message.inputName);
    }
    if (message.inputParam !== "") {
      writer.uint32(34).string(message.inputParam);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToolEventFireEntityInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToolEventFireEntityInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ehandle = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.clientsideentity = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.inputName = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.inputParam = reader.string();
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

function createBaseToolEventSFMRecordingStateChanged(): ToolEventSFMRecordingStateChanged {
  return { isrecording: false };
}

export const ToolEventSFMRecordingStateChanged = {
  encode(message: ToolEventSFMRecordingStateChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isrecording === true) {
      writer.uint32(8).bool(message.isrecording);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToolEventSFMRecordingStateChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToolEventSFMRecordingStateChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isrecording = reader.bool();
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

function createBaseToolEventSFMToolActiveStateChanged(): ToolEventSFMToolActiveStateChanged {
  return { isactive: false };
}

export const ToolEventSFMToolActiveStateChanged = {
  encode(message: ToolEventSFMToolActiveStateChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isactive === true) {
      writer.uint32(8).bool(message.isactive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToolEventSFMToolActiveStateChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToolEventSFMToolActiveStateChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isactive = reader.bool();
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
