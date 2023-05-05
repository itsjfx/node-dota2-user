/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface NetMessageSplitscreenUserChanged {
  slot: number;
}

export interface NetMessageConnectionClosed {
  reason: number;
}

export interface NetMessageConnectionCrashed {
  reason: number;
}

export interface NetMessagePacketStart {
}

export interface NetMessagePacketEnd {
}

function createBaseNetMessageSplitscreenUserChanged(): NetMessageSplitscreenUserChanged {
  return { slot: 0 };
}

export const NetMessageSplitscreenUserChanged = {
  encode(message: NetMessageSplitscreenUserChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slot !== 0) {
      writer.uint32(8).uint32(message.slot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetMessageSplitscreenUserChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetMessageSplitscreenUserChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.slot = reader.uint32();
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

function createBaseNetMessageConnectionClosed(): NetMessageConnectionClosed {
  return { reason: 0 };
}

export const NetMessageConnectionClosed = {
  encode(message: NetMessageConnectionClosed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reason !== 0) {
      writer.uint32(8).uint32(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetMessageConnectionClosed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetMessageConnectionClosed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.reason = reader.uint32();
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

function createBaseNetMessageConnectionCrashed(): NetMessageConnectionCrashed {
  return { reason: 0 };
}

export const NetMessageConnectionCrashed = {
  encode(message: NetMessageConnectionCrashed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reason !== 0) {
      writer.uint32(8).uint32(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetMessageConnectionCrashed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetMessageConnectionCrashed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.reason = reader.uint32();
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

function createBaseNetMessagePacketStart(): NetMessagePacketStart {
  return {};
}

export const NetMessagePacketStart = {
  encode(_: NetMessagePacketStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetMessagePacketStart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetMessagePacketStart();
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

function createBaseNetMessagePacketEnd(): NetMessagePacketEnd {
  return {};
}

export const NetMessagePacketEnd = {
  encode(_: NetMessagePacketEnd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetMessagePacketEnd {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetMessagePacketEnd();
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