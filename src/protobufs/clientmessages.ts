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

export enum EClientUIEvent {
  EClientUIEvent_Invalid = 0,
  EClientUIEvent_DialogFinished = 1,
  EClientUIEvent_FireOutput = 2,
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
};
