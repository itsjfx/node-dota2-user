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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
