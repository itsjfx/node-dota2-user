/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgVoiceAudio } from "./netmessages";
import { CMsgQAngle, CMsgVector } from "./networkbasetypes";

export enum P2PMessages {
  p2p_TextMessage = 256,
  p2p_Voice = 257,
  p2p_Ping = 258,
  p2p_VRAvatarPosition = 259,
  p2p_WatchSynchronization = 260,
}

export function p2PMessagesFromJSON(object: any): P2PMessages {
  switch (object) {
    case 256:
    case "p2p_TextMessage":
      return P2PMessages.p2p_TextMessage;
    case 257:
    case "p2p_Voice":
      return P2PMessages.p2p_Voice;
    case 258:
    case "p2p_Ping":
      return P2PMessages.p2p_Ping;
    case 259:
    case "p2p_VRAvatarPosition":
      return P2PMessages.p2p_VRAvatarPosition;
    case 260:
    case "p2p_WatchSynchronization":
      return P2PMessages.p2p_WatchSynchronization;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum P2PMessages");
  }
}

export function p2PMessagesToJSON(object: P2PMessages): string {
  switch (object) {
    case P2PMessages.p2p_TextMessage:
      return "p2p_TextMessage";
    case P2PMessages.p2p_Voice:
      return "p2p_Voice";
    case P2PMessages.p2p_Ping:
      return "p2p_Ping";
    case P2PMessages.p2p_VRAvatarPosition:
      return "p2p_VRAvatarPosition";
    case P2PMessages.p2p_WatchSynchronization:
      return "p2p_WatchSynchronization";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum P2PMessages");
  }
}

export interface CP2PTextMessage {
  text: Buffer;
}

export interface CSteamVoiceEncoding {
  voiceData: Buffer;
}

export interface CP2PVoice {
  audio: CMsgVoiceAudio | undefined;
  broadcastGroup: number;
}

export enum CP2PVoice_HandlerFlags {
  Played_Audio = 1,
}

export function cP2PVoice_HandlerFlagsFromJSON(object: any): CP2PVoice_HandlerFlags {
  switch (object) {
    case 1:
    case "Played_Audio":
      return CP2PVoice_HandlerFlags.Played_Audio;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CP2PVoice_HandlerFlags");
  }
}

export function cP2PVoice_HandlerFlagsToJSON(object: CP2PVoice_HandlerFlags): string {
  switch (object) {
    case CP2PVoice_HandlerFlags.Played_Audio:
      return "Played_Audio";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum CP2PVoice_HandlerFlags");
  }
}

export interface CP2PPing {
  sendTime: string;
  isReply: boolean;
}

export interface CP2PVRAvatarPosition {
  bodyParts: CP2PVRAvatarPosition_COrientation[];
  hatId: number;
  sceneId: number;
  worldScale: number;
}

export interface CP2PVRAvatarPosition_COrientation {
  pos: CMsgVector | undefined;
  ang: CMsgQAngle | undefined;
}

export interface CP2PWatchSynchronization {
  demoTick: number;
  paused: boolean;
  tvListenVoiceIndices: string;
  dotaSpectatorMode: number;
  dotaSpectatorWatchingBroadcaster: boolean;
  dotaSpectatorHeroIndex: number;
  dotaSpectatorAutospeed: number;
  dotaReplaySpeed: number;
}

function createBaseCP2PTextMessage(): CP2PTextMessage {
  return { text: Buffer.alloc(0) };
}

export const CP2PTextMessage = {
  encode(message: CP2PTextMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text.length !== 0) {
      writer.uint32(10).bytes(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CP2PTextMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCP2PTextMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.text = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CP2PTextMessage {
    return { text: isSet(object.text) ? Buffer.from(bytesFromBase64(object.text)) : Buffer.alloc(0) };
  },

  toJSON(message: CP2PTextMessage): unknown {
    const obj: any = {};
    message.text !== undefined &&
      (obj.text = base64FromBytes(message.text !== undefined ? message.text : Buffer.alloc(0)));
    return obj;
  },
};

function createBaseCSteamVoiceEncoding(): CSteamVoiceEncoding {
  return { voiceData: Buffer.alloc(0) };
}

export const CSteamVoiceEncoding = {
  encode(message: CSteamVoiceEncoding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voiceData.length !== 0) {
      writer.uint32(10).bytes(message.voiceData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamVoiceEncoding {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamVoiceEncoding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.voiceData = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CSteamVoiceEncoding {
    return { voiceData: isSet(object.voiceData) ? Buffer.from(bytesFromBase64(object.voiceData)) : Buffer.alloc(0) };
  },

  toJSON(message: CSteamVoiceEncoding): unknown {
    const obj: any = {};
    message.voiceData !== undefined &&
      (obj.voiceData = base64FromBytes(message.voiceData !== undefined ? message.voiceData : Buffer.alloc(0)));
    return obj;
  },
};

function createBaseCP2PVoice(): CP2PVoice {
  return { audio: undefined, broadcastGroup: 0 };
}

export const CP2PVoice = {
  encode(message: CP2PVoice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.audio !== undefined) {
      CMsgVoiceAudio.encode(message.audio, writer.uint32(10).fork()).ldelim();
    }
    if (message.broadcastGroup !== 0) {
      writer.uint32(16).uint32(message.broadcastGroup);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CP2PVoice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCP2PVoice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.audio = CMsgVoiceAudio.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.broadcastGroup = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CP2PVoice {
    return {
      audio: isSet(object.audio) ? CMsgVoiceAudio.fromJSON(object.audio) : undefined,
      broadcastGroup: isSet(object.broadcastGroup) ? Number(object.broadcastGroup) : 0,
    };
  },

  toJSON(message: CP2PVoice): unknown {
    const obj: any = {};
    message.audio !== undefined && (obj.audio = message.audio ? CMsgVoiceAudio.toJSON(message.audio) : undefined);
    message.broadcastGroup !== undefined && (obj.broadcastGroup = Math.round(message.broadcastGroup));
    return obj;
  },
};

function createBaseCP2PPing(): CP2PPing {
  return { sendTime: "0", isReply: false };
}

export const CP2PPing = {
  encode(message: CP2PPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sendTime !== "0") {
      writer.uint32(8).uint64(message.sendTime);
    }
    if (message.isReply === true) {
      writer.uint32(16).bool(message.isReply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CP2PPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCP2PPing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sendTime = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isReply = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CP2PPing {
    return {
      sendTime: isSet(object.sendTime) ? String(object.sendTime) : "0",
      isReply: isSet(object.isReply) ? Boolean(object.isReply) : false,
    };
  },

  toJSON(message: CP2PPing): unknown {
    const obj: any = {};
    message.sendTime !== undefined && (obj.sendTime = message.sendTime);
    message.isReply !== undefined && (obj.isReply = message.isReply);
    return obj;
  },
};

function createBaseCP2PVRAvatarPosition(): CP2PVRAvatarPosition {
  return { bodyParts: [], hatId: 0, sceneId: 0, worldScale: 0 };
}

export const CP2PVRAvatarPosition = {
  encode(message: CP2PVRAvatarPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bodyParts) {
      CP2PVRAvatarPosition_COrientation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.hatId !== 0) {
      writer.uint32(16).int32(message.hatId);
    }
    if (message.sceneId !== 0) {
      writer.uint32(24).int32(message.sceneId);
    }
    if (message.worldScale !== 0) {
      writer.uint32(32).int32(message.worldScale);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CP2PVRAvatarPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCP2PVRAvatarPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.bodyParts.push(CP2PVRAvatarPosition_COrientation.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.hatId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.sceneId = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.worldScale = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CP2PVRAvatarPosition {
    return {
      bodyParts: Array.isArray(object?.bodyParts)
        ? object.bodyParts.map((e: any) => CP2PVRAvatarPosition_COrientation.fromJSON(e))
        : [],
      hatId: isSet(object.hatId) ? Number(object.hatId) : 0,
      sceneId: isSet(object.sceneId) ? Number(object.sceneId) : 0,
      worldScale: isSet(object.worldScale) ? Number(object.worldScale) : 0,
    };
  },

  toJSON(message: CP2PVRAvatarPosition): unknown {
    const obj: any = {};
    if (message.bodyParts) {
      obj.bodyParts = message.bodyParts.map((e) => e ? CP2PVRAvatarPosition_COrientation.toJSON(e) : undefined);
    } else {
      obj.bodyParts = [];
    }
    message.hatId !== undefined && (obj.hatId = Math.round(message.hatId));
    message.sceneId !== undefined && (obj.sceneId = Math.round(message.sceneId));
    message.worldScale !== undefined && (obj.worldScale = Math.round(message.worldScale));
    return obj;
  },
};

function createBaseCP2PVRAvatarPosition_COrientation(): CP2PVRAvatarPosition_COrientation {
  return { pos: undefined, ang: undefined };
}

export const CP2PVRAvatarPosition_COrientation = {
  encode(message: CP2PVRAvatarPosition_COrientation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pos !== undefined) {
      CMsgVector.encode(message.pos, writer.uint32(10).fork()).ldelim();
    }
    if (message.ang !== undefined) {
      CMsgQAngle.encode(message.ang, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CP2PVRAvatarPosition_COrientation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCP2PVRAvatarPosition_COrientation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pos = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.ang = CMsgQAngle.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CP2PVRAvatarPosition_COrientation {
    return {
      pos: isSet(object.pos) ? CMsgVector.fromJSON(object.pos) : undefined,
      ang: isSet(object.ang) ? CMsgQAngle.fromJSON(object.ang) : undefined,
    };
  },

  toJSON(message: CP2PVRAvatarPosition_COrientation): unknown {
    const obj: any = {};
    message.pos !== undefined && (obj.pos = message.pos ? CMsgVector.toJSON(message.pos) : undefined);
    message.ang !== undefined && (obj.ang = message.ang ? CMsgQAngle.toJSON(message.ang) : undefined);
    return obj;
  },
};

function createBaseCP2PWatchSynchronization(): CP2PWatchSynchronization {
  return {
    demoTick: 0,
    paused: false,
    tvListenVoiceIndices: "0",
    dotaSpectatorMode: 0,
    dotaSpectatorWatchingBroadcaster: false,
    dotaSpectatorHeroIndex: 0,
    dotaSpectatorAutospeed: 0,
    dotaReplaySpeed: 0,
  };
}

export const CP2PWatchSynchronization = {
  encode(message: CP2PWatchSynchronization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.demoTick !== 0) {
      writer.uint32(8).int32(message.demoTick);
    }
    if (message.paused === true) {
      writer.uint32(16).bool(message.paused);
    }
    if (message.tvListenVoiceIndices !== "0") {
      writer.uint32(24).uint64(message.tvListenVoiceIndices);
    }
    if (message.dotaSpectatorMode !== 0) {
      writer.uint32(32).int32(message.dotaSpectatorMode);
    }
    if (message.dotaSpectatorWatchingBroadcaster === true) {
      writer.uint32(40).bool(message.dotaSpectatorWatchingBroadcaster);
    }
    if (message.dotaSpectatorHeroIndex !== 0) {
      writer.uint32(48).int32(message.dotaSpectatorHeroIndex);
    }
    if (message.dotaSpectatorAutospeed !== 0) {
      writer.uint32(56).int32(message.dotaSpectatorAutospeed);
    }
    if (message.dotaReplaySpeed !== 0) {
      writer.uint32(64).int32(message.dotaReplaySpeed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CP2PWatchSynchronization {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCP2PWatchSynchronization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.demoTick = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.paused = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.tvListenVoiceIndices = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.dotaSpectatorMode = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.dotaSpectatorWatchingBroadcaster = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.dotaSpectatorHeroIndex = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.dotaSpectatorAutospeed = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.dotaReplaySpeed = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CP2PWatchSynchronization {
    return {
      demoTick: isSet(object.demoTick) ? Number(object.demoTick) : 0,
      paused: isSet(object.paused) ? Boolean(object.paused) : false,
      tvListenVoiceIndices: isSet(object.tvListenVoiceIndices) ? String(object.tvListenVoiceIndices) : "0",
      dotaSpectatorMode: isSet(object.dotaSpectatorMode) ? Number(object.dotaSpectatorMode) : 0,
      dotaSpectatorWatchingBroadcaster: isSet(object.dotaSpectatorWatchingBroadcaster)
        ? Boolean(object.dotaSpectatorWatchingBroadcaster)
        : false,
      dotaSpectatorHeroIndex: isSet(object.dotaSpectatorHeroIndex) ? Number(object.dotaSpectatorHeroIndex) : 0,
      dotaSpectatorAutospeed: isSet(object.dotaSpectatorAutospeed) ? Number(object.dotaSpectatorAutospeed) : 0,
      dotaReplaySpeed: isSet(object.dotaReplaySpeed) ? Number(object.dotaReplaySpeed) : 0,
    };
  },

  toJSON(message: CP2PWatchSynchronization): unknown {
    const obj: any = {};
    message.demoTick !== undefined && (obj.demoTick = Math.round(message.demoTick));
    message.paused !== undefined && (obj.paused = message.paused);
    message.tvListenVoiceIndices !== undefined && (obj.tvListenVoiceIndices = message.tvListenVoiceIndices);
    message.dotaSpectatorMode !== undefined && (obj.dotaSpectatorMode = Math.round(message.dotaSpectatorMode));
    message.dotaSpectatorWatchingBroadcaster !== undefined &&
      (obj.dotaSpectatorWatchingBroadcaster = message.dotaSpectatorWatchingBroadcaster);
    message.dotaSpectatorHeroIndex !== undefined &&
      (obj.dotaSpectatorHeroIndex = Math.round(message.dotaSpectatorHeroIndex));
    message.dotaSpectatorAutospeed !== undefined &&
      (obj.dotaSpectatorAutospeed = Math.round(message.dotaSpectatorAutospeed));
    message.dotaReplaySpeed !== undefined && (obj.dotaReplaySpeed = Math.round(message.dotaReplaySpeed));
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
