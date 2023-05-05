/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface CEngineGotvSyncPacket {
  matchId: string;
  instanceId: number;
  signupfragment: number;
  currentfragment: number;
  tickrate: number;
  tick: number;
  rtdelay: number;
  rcvage: number;
  keyframeInterval: number;
  cdndelay: number;
}

function createBaseCEngineGotvSyncPacket(): CEngineGotvSyncPacket {
  return {
    matchId: "0",
    instanceId: 0,
    signupfragment: 0,
    currentfragment: 0,
    tickrate: 0,
    tick: 0,
    rtdelay: 0,
    rcvage: 0,
    keyframeInterval: 0,
    cdndelay: 0,
  };
}

export const CEngineGotvSyncPacket = {
  encode(message: CEngineGotvSyncPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.instanceId !== 0) {
      writer.uint32(16).uint32(message.instanceId);
    }
    if (message.signupfragment !== 0) {
      writer.uint32(24).uint32(message.signupfragment);
    }
    if (message.currentfragment !== 0) {
      writer.uint32(32).uint32(message.currentfragment);
    }
    if (message.tickrate !== 0) {
      writer.uint32(45).float(message.tickrate);
    }
    if (message.tick !== 0) {
      writer.uint32(48).uint32(message.tick);
    }
    if (message.rtdelay !== 0) {
      writer.uint32(69).float(message.rtdelay);
    }
    if (message.rcvage !== 0) {
      writer.uint32(77).float(message.rcvage);
    }
    if (message.keyframeInterval !== 0) {
      writer.uint32(85).float(message.keyframeInterval);
    }
    if (message.cdndelay !== 0) {
      writer.uint32(88).uint32(message.cdndelay);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEngineGotvSyncPacket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEngineGotvSyncPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.instanceId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.signupfragment = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.currentfragment = reader.uint32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.tickrate = reader.float();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.tick = reader.uint32();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.rtdelay = reader.float();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.rcvage = reader.float();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.keyframeInterval = reader.float();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.cdndelay = reader.uint32();
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
