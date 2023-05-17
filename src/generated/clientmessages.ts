/* eslint-disable */
import _m0 from "protobufjs/minimal";

export enum EBaseClientMessages {
  CM_CustomGameEvent = 280,
  CM_CustomGameEventBounce = 281,
  CM_ClientUIEvent = 282,
  CM_DevPaletteVisibilityChanged = 283,
  CM_WorldUIControllerHasPanelChanged = 284,
  CM_RotateAnchor = 285,
  CM_MAX_BASE = 300,
}

export function eBaseClientMessagesFromJSON(object: any): EBaseClientMessages {
  switch (object) {
    case 280:
    case "CM_CustomGameEvent":
      return EBaseClientMessages.CM_CustomGameEvent;
    case 281:
    case "CM_CustomGameEventBounce":
      return EBaseClientMessages.CM_CustomGameEventBounce;
    case 282:
    case "CM_ClientUIEvent":
      return EBaseClientMessages.CM_ClientUIEvent;
    case 283:
    case "CM_DevPaletteVisibilityChanged":
      return EBaseClientMessages.CM_DevPaletteVisibilityChanged;
    case 284:
    case "CM_WorldUIControllerHasPanelChanged":
      return EBaseClientMessages.CM_WorldUIControllerHasPanelChanged;
    case 285:
    case "CM_RotateAnchor":
      return EBaseClientMessages.CM_RotateAnchor;
    case 300:
    case "CM_MAX_BASE":
      return EBaseClientMessages.CM_MAX_BASE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EBaseClientMessages");
  }
}

export function eBaseClientMessagesToJSON(object: EBaseClientMessages): string {
  switch (object) {
    case EBaseClientMessages.CM_CustomGameEvent:
      return "CM_CustomGameEvent";
    case EBaseClientMessages.CM_CustomGameEventBounce:
      return "CM_CustomGameEventBounce";
    case EBaseClientMessages.CM_ClientUIEvent:
      return "CM_ClientUIEvent";
    case EBaseClientMessages.CM_DevPaletteVisibilityChanged:
      return "CM_DevPaletteVisibilityChanged";
    case EBaseClientMessages.CM_WorldUIControllerHasPanelChanged:
      return "CM_WorldUIControllerHasPanelChanged";
    case EBaseClientMessages.CM_RotateAnchor:
      return "CM_RotateAnchor";
    case EBaseClientMessages.CM_MAX_BASE:
      return "CM_MAX_BASE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EBaseClientMessages");
  }
}

export enum EClientUIEvent {
  EClientUIEvent_Invalid = 0,
  EClientUIEvent_DialogFinished = 1,
  EClientUIEvent_FireOutput = 2,
}

export function eClientUIEventFromJSON(object: any): EClientUIEvent {
  switch (object) {
    case 0:
    case "EClientUIEvent_Invalid":
      return EClientUIEvent.EClientUIEvent_Invalid;
    case 1:
    case "EClientUIEvent_DialogFinished":
      return EClientUIEvent.EClientUIEvent_DialogFinished;
    case 2:
    case "EClientUIEvent_FireOutput":
      return EClientUIEvent.EClientUIEvent_FireOutput;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EClientUIEvent");
  }
}

export function eClientUIEventToJSON(object: EClientUIEvent): string {
  switch (object) {
    case EClientUIEvent.EClientUIEvent_Invalid:
      return "EClientUIEvent_Invalid";
    case EClientUIEvent.EClientUIEvent_DialogFinished:
      return "EClientUIEvent_DialogFinished";
    case EClientUIEvent.EClientUIEvent_FireOutput:
      return "EClientUIEvent_FireOutput";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EClientUIEvent");
  }
}

export interface CClientMsgCustomGameEvent {
  eventName: string;
  data: Buffer;
}

export interface CClientMsgCustomGameEventBounce {
  eventName: string;
  data: Buffer;
  playerSlot: number;
}

export interface CClientMsgClientUIEvent {
  event: EClientUIEvent;
  entEhandle: number;
  clientEhandle: number;
  data1: string;
  data2: string;
}

export interface CClientMsgDevPaletteVisibilityChangedEvent {
  visible: boolean;
}

export interface CClientMsgWorldUIControllerHasPanelChangedEvent {
  hasPanel: boolean;
  clientEhandle: number;
  literalHandType: number;
}

export interface CClientMsgRotateAnchor {
  angle: number;
}

function createBaseCClientMsgCustomGameEvent(): CClientMsgCustomGameEvent {
  return { eventName: "", data: Buffer.alloc(0) };
}

export const CClientMsgCustomGameEvent = {
  encode(message: CClientMsgCustomGameEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventName !== "") {
      writer.uint32(10).string(message.eventName);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMsgCustomGameEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMsgCustomGameEvent();
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
          if (tag != 18) {
            break;
          }

          message.data = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CClientMsgCustomGameEvent {
    return {
      eventName: isSet(object.eventName) ? String(object.eventName) : "",
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CClientMsgCustomGameEvent): unknown {
    const obj: any = {};
    message.eventName !== undefined && (obj.eventName = message.eventName);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },
};

function createBaseCClientMsgCustomGameEventBounce(): CClientMsgCustomGameEventBounce {
  return { eventName: "", data: Buffer.alloc(0), playerSlot: 0 };
}

export const CClientMsgCustomGameEventBounce = {
  encode(message: CClientMsgCustomGameEventBounce, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventName !== "") {
      writer.uint32(10).string(message.eventName);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.playerSlot !== 0) {
      writer.uint32(24).int32(message.playerSlot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMsgCustomGameEventBounce {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMsgCustomGameEventBounce();
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
          if (tag != 18) {
            break;
          }

          message.data = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.playerSlot = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CClientMsgCustomGameEventBounce {
    return {
      eventName: isSet(object.eventName) ? String(object.eventName) : "",
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
      playerSlot: isSet(object.playerSlot) ? Number(object.playerSlot) : 0,
    };
  },

  toJSON(message: CClientMsgCustomGameEventBounce): unknown {
    const obj: any = {};
    message.eventName !== undefined && (obj.eventName = message.eventName);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    message.playerSlot !== undefined && (obj.playerSlot = Math.round(message.playerSlot));
    return obj;
  },
};

function createBaseCClientMsgClientUIEvent(): CClientMsgClientUIEvent {
  return { event: 0, entEhandle: 0, clientEhandle: 0, data1: "", data2: "" };
}

export const CClientMsgClientUIEvent = {
  encode(message: CClientMsgClientUIEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== 0) {
      writer.uint32(8).int32(message.event);
    }
    if (message.entEhandle !== 0) {
      writer.uint32(16).uint32(message.entEhandle);
    }
    if (message.clientEhandle !== 0) {
      writer.uint32(24).uint32(message.clientEhandle);
    }
    if (message.data1 !== "") {
      writer.uint32(34).string(message.data1);
    }
    if (message.data2 !== "") {
      writer.uint32(42).string(message.data2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMsgClientUIEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMsgClientUIEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.event = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.entEhandle = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.clientEhandle = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.data1 = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.data2 = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CClientMsgClientUIEvent {
    return {
      event: isSet(object.event) ? eClientUIEventFromJSON(object.event) : 0,
      entEhandle: isSet(object.entEhandle) ? Number(object.entEhandle) : 0,
      clientEhandle: isSet(object.clientEhandle) ? Number(object.clientEhandle) : 0,
      data1: isSet(object.data1) ? String(object.data1) : "",
      data2: isSet(object.data2) ? String(object.data2) : "",
    };
  },

  toJSON(message: CClientMsgClientUIEvent): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = eClientUIEventToJSON(message.event));
    message.entEhandle !== undefined && (obj.entEhandle = Math.round(message.entEhandle));
    message.clientEhandle !== undefined && (obj.clientEhandle = Math.round(message.clientEhandle));
    message.data1 !== undefined && (obj.data1 = message.data1);
    message.data2 !== undefined && (obj.data2 = message.data2);
    return obj;
  },
};

function createBaseCClientMsgDevPaletteVisibilityChangedEvent(): CClientMsgDevPaletteVisibilityChangedEvent {
  return { visible: false };
}

export const CClientMsgDevPaletteVisibilityChangedEvent = {
  encode(message: CClientMsgDevPaletteVisibilityChangedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.visible === true) {
      writer.uint32(8).bool(message.visible);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMsgDevPaletteVisibilityChangedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMsgDevPaletteVisibilityChangedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.visible = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CClientMsgDevPaletteVisibilityChangedEvent {
    return { visible: isSet(object.visible) ? Boolean(object.visible) : false };
  },

  toJSON(message: CClientMsgDevPaletteVisibilityChangedEvent): unknown {
    const obj: any = {};
    message.visible !== undefined && (obj.visible = message.visible);
    return obj;
  },
};

function createBaseCClientMsgWorldUIControllerHasPanelChangedEvent(): CClientMsgWorldUIControllerHasPanelChangedEvent {
  return { hasPanel: false, clientEhandle: 0, literalHandType: 0 };
}

export const CClientMsgWorldUIControllerHasPanelChangedEvent = {
  encode(
    message: CClientMsgWorldUIControllerHasPanelChangedEvent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.hasPanel === true) {
      writer.uint32(8).bool(message.hasPanel);
    }
    if (message.clientEhandle !== 0) {
      writer.uint32(16).uint32(message.clientEhandle);
    }
    if (message.literalHandType !== 0) {
      writer.uint32(24).uint32(message.literalHandType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMsgWorldUIControllerHasPanelChangedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMsgWorldUIControllerHasPanelChangedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.hasPanel = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.clientEhandle = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.literalHandType = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CClientMsgWorldUIControllerHasPanelChangedEvent {
    return {
      hasPanel: isSet(object.hasPanel) ? Boolean(object.hasPanel) : false,
      clientEhandle: isSet(object.clientEhandle) ? Number(object.clientEhandle) : 0,
      literalHandType: isSet(object.literalHandType) ? Number(object.literalHandType) : 0,
    };
  },

  toJSON(message: CClientMsgWorldUIControllerHasPanelChangedEvent): unknown {
    const obj: any = {};
    message.hasPanel !== undefined && (obj.hasPanel = message.hasPanel);
    message.clientEhandle !== undefined && (obj.clientEhandle = Math.round(message.clientEhandle));
    message.literalHandType !== undefined && (obj.literalHandType = Math.round(message.literalHandType));
    return obj;
  },
};

function createBaseCClientMsgRotateAnchor(): CClientMsgRotateAnchor {
  return { angle: 0 };
}

export const CClientMsgRotateAnchor = {
  encode(message: CClientMsgRotateAnchor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.angle !== 0) {
      writer.uint32(13).float(message.angle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMsgRotateAnchor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMsgRotateAnchor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.angle = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CClientMsgRotateAnchor {
    return { angle: isSet(object.angle) ? Number(object.angle) : 0 };
  },

  toJSON(message: CClientMsgRotateAnchor): unknown {
    const obj: any = {};
    message.angle !== undefined && (obj.angle = message.angle);
    return obj;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
