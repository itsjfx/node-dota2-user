/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ENetworkDisconnectionReason } from "./network_connection";

export enum SignonStateT {
  SIGNONSTATE_NONE = 0,
  SIGNONSTATE_CHALLENGE = 1,
  SIGNONSTATE_CONNECTED = 2,
  SIGNONSTATE_NEW = 3,
  SIGNONSTATE_PRESPAWN = 4,
  SIGNONSTATE_SPAWN = 5,
  SIGNONSTATE_FULL = 6,
  SIGNONSTATE_CHANGELEVEL = 7,
}

export enum NETMessages {
  net_NOP = 0,
  net_Disconnect = 1,
  net_SplitScreenUser = 3,
  net_Tick = 4,
  net_StringCmd = 5,
  net_SetConVar = 6,
  net_SignonState = 7,
  net_SpawnGroup_Load = 8,
  net_SpawnGroup_ManifestUpdate = 9,
  net_SpawnGroup_SetCreationTick = 11,
  net_SpawnGroup_Unload = 12,
  net_SpawnGroup_LoadCompleted = 13,
  net_DebugOverlay = 15,
}

export enum SpawnGroupFlagsT {
  SPAWN_GROUP_LOAD_ENTITIES_FROM_SAVE = 1,
  SPAWN_GROUP_DONT_SPAWN_ENTITIES = 2,
  SPAWN_GROUP_SYNCHRONOUS_SPAWN = 4,
  SPAWN_GROUP_IS_INITIAL_SPAWN_GROUP = 8,
  SPAWN_GROUP_CREATE_CLIENT_ONLY_ENTITIES = 16,
  SPAWN_GROUP_BLOCK_UNTIL_LOADED = 64,
  SPAWN_GROUP_LOAD_STREAMING_DATA = 128,
  SPAWN_GROUP_CREATE_NEW_SCENE_WORLD = 256,
}

export interface CMsgVector {
  x: number;
  y: number;
  z: number;
  w: number;
}

export interface CMsgVector2D {
  x: number;
  y: number;
}

export interface CMsgQAngle {
  x: number;
  y: number;
  z: number;
}

export interface CMsgQuaternion {
  x: number;
  y: number;
  z: number;
  w: number;
}

export interface CMsgTransform {
  position: CMsgVector | undefined;
  scale: number;
  orientation: CMsgQuaternion | undefined;
}

export interface CMsgRGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface CMsgPlayerInfo {
  name: string;
  xuid: string;
  userid: number;
  steamid: string;
  fakeplayer: boolean;
  ishltv: boolean;
}

export interface CEntityMsg {
  targetEntity: number;
}

export interface CMsgCVars {
  cvars: CMsgCVars_CVar[];
}

export interface CMsgCVars_CVar {
  name: string;
  value: string;
}

export interface CNETMsgNOP {
}

export interface CNETMsgSplitScreenUser {
  slot: number;
}

export interface CNETMsgDisconnect {
  reason: ENetworkDisconnectionReason;
}

export interface CNETMsgTick {
  tick: number;
  hostFrametime: number;
  hostFrametimeStdDeviation: number;
  hostComputationtime: number;
  hostComputationtimeStdDeviation: number;
  hostFramestarttimeStdDeviation: number;
  hostLoss: number;
  hostUnfilteredFrametime: number;
  hltvReplayFlags: number;
}

export interface CNETMsgStringCmd {
  command: string;
}

export interface CNETMsgSetConVar {
  convars: CMsgCVars | undefined;
}

export interface CNETMsgSignonState {
  signonState: SignonStateT;
  spawnCount: number;
  numServerPlayers: number;
  playersNetworkids: string[];
  mapName: string;
  addons: string;
}

export interface CSVCMsgGameEvent {
  eventName: string;
  eventid: number;
  keys: CSVCMsgGameEvent_keyT[];
}

export interface CSVCMsgGameEvent_keyT {
  type: number;
  valString: string;
  valFloat: number;
  valLong: number;
  valShort: number;
  valByte: number;
  valBool: boolean;
  valUint64: string;
}

export interface CSVCMsgListGameEvents {
  events: CSVCMsgListGameEvents_eventT[];
}

export interface CSVCMsgListGameEvents_eventT {
  tick: number;
  event: CSVCMsgGameEvent | undefined;
}

export interface CNETMsgSpawnGroupLoad {
  worldname: string;
  entitylumpname: string;
  entityfiltername: string;
  spawngrouphandle: number;
  spawngroupownerhandle: number;
  worldOffsetPos: CMsgVector | undefined;
  worldOffsetAngle: CMsgQAngle | undefined;
  spawngroupmanifest: Buffer;
  flags: number;
  tickcount: number;
  manifestincomplete: boolean;
  localnamefixup: string;
  parentnamefixup: string;
  manifestloadpriority: number;
  worldgroupid: number;
  creationsequence: number;
  savegamefilename: string;
  spawngroupparenthandle: number;
  leveltransition: boolean;
  worldgroupname: string;
}

export interface CNETMsgSpawnGroupManifestUpdate {
  spawngrouphandle: number;
  spawngroupmanifest: Buffer;
  manifestincomplete: boolean;
}

export interface CNETMsgSpawnGroupSetCreationTick {
  spawngrouphandle: number;
  tickcount: number;
  creationsequence: number;
}

export interface CNETMsgSpawnGroupUnload {
  spawngrouphandle: number;
  flags: number;
  tickcount: number;
}

export interface CNETMsgSpawnGroupLoadCompleted {
  spawngrouphandle: number;
}

export interface CSVCMsgGameSessionConfiguration {
  isMultiplayer: boolean;
  isLoadsavegame: boolean;
  isBackgroundMap: boolean;
  isHeadless: boolean;
  minClientLimit: number;
  maxClientLimit: number;
  maxClients: number;
  tickInterval: number;
  hostname: string;
  savegamename: string;
  s1Mapname: string;
  gamemode: string;
  serverIpAddress: string;
  data: Buffer;
  isLocalonly: boolean;
  noSteamServer: boolean;
  isTransition: boolean;
  previouslevel: string;
  landmarkname: string;
}

export interface CNETMsgDebugOverlay {
  etype: number;
  vectors: CMsgVector[];
  colors: CMsgRGBA[];
  dimensions: number[];
  times: number[];
  bools: boolean[];
  uint64s: string[];
  strings: string[];
}

function createBaseCMsgVector(): CMsgVector {
  return { x: 0, y: 0, z: 0, w: 0 };
}

export const CMsgVector = {
  encode(message: CMsgVector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    if (message.w !== 0) {
      writer.uint32(37).float(message.w);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgVector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgVector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.x = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.y = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.z = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.w = reader.float();
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

function createBaseCMsgVector2D(): CMsgVector2D {
  return { x: 0, y: 0 };
}

export const CMsgVector2D = {
  encode(message: CMsgVector2D, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgVector2D {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgVector2D();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.x = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.y = reader.float();
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

function createBaseCMsgQAngle(): CMsgQAngle {
  return { x: 0, y: 0, z: 0 };
}

export const CMsgQAngle = {
  encode(message: CMsgQAngle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgQAngle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgQAngle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.x = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.y = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.z = reader.float();
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

function createBaseCMsgQuaternion(): CMsgQuaternion {
  return { x: 0, y: 0, z: 0, w: 0 };
}

export const CMsgQuaternion = {
  encode(message: CMsgQuaternion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    if (message.w !== 0) {
      writer.uint32(37).float(message.w);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgQuaternion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgQuaternion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.x = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.y = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.z = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.w = reader.float();
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

function createBaseCMsgTransform(): CMsgTransform {
  return { position: undefined, scale: 0, orientation: undefined };
}

export const CMsgTransform = {
  encode(message: CMsgTransform, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      CMsgVector.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.scale !== 0) {
      writer.uint32(21).float(message.scale);
    }
    if (message.orientation !== undefined) {
      CMsgQuaternion.encode(message.orientation, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTransform {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTransform();
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
          if (tag != 21) {
            break;
          }

          message.scale = reader.float();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.orientation = CMsgQuaternion.decode(reader, reader.uint32());
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

function createBaseCMsgRGBA(): CMsgRGBA {
  return { r: 0, g: 0, b: 0, a: 0 };
}

export const CMsgRGBA = {
  encode(message: CMsgRGBA, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.r !== 0) {
      writer.uint32(8).int32(message.r);
    }
    if (message.g !== 0) {
      writer.uint32(16).int32(message.g);
    }
    if (message.b !== 0) {
      writer.uint32(24).int32(message.b);
    }
    if (message.a !== 0) {
      writer.uint32(32).int32(message.a);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRGBA {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRGBA();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.r = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.g = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.b = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.a = reader.int32();
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

function createBaseCMsgPlayerInfo(): CMsgPlayerInfo {
  return { name: "", xuid: "0", userid: 0, steamid: "0", fakeplayer: false, ishltv: false };
}

export const CMsgPlayerInfo = {
  encode(message: CMsgPlayerInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.xuid !== "0") {
      writer.uint32(17).fixed64(message.xuid);
    }
    if (message.userid !== 0) {
      writer.uint32(24).int32(message.userid);
    }
    if (message.steamid !== "0") {
      writer.uint32(33).fixed64(message.steamid);
    }
    if (message.fakeplayer === true) {
      writer.uint32(40).bool(message.fakeplayer);
    }
    if (message.ishltv === true) {
      writer.uint32(48).bool(message.ishltv);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPlayerInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPlayerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.xuid = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.userid = reader.int32();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.steamid = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.fakeplayer = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.ishltv = reader.bool();
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

function createBaseCEntityMsg(): CEntityMsg {
  return { targetEntity: 0 };
}

export const CEntityMsg = {
  encode(message: CEntityMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetEntity !== 0) {
      writer.uint32(8).uint32(message.targetEntity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEntityMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEntityMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.targetEntity = reader.uint32();
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

function createBaseCMsgCVars(): CMsgCVars {
  return { cvars: [] };
}

export const CMsgCVars = {
  encode(message: CMsgCVars, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cvars) {
      CMsgCVars_CVar.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCVars {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCVars();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.cvars.push(CMsgCVars_CVar.decode(reader, reader.uint32()));
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

function createBaseCMsgCVars_CVar(): CMsgCVars_CVar {
  return { name: "", value: "" };
}

export const CMsgCVars_CVar = {
  encode(message: CMsgCVars_CVar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCVars_CVar {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCVars_CVar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = reader.string();
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

function createBaseCNETMsgNOP(): CNETMsgNOP {
  return {};
}

export const CNETMsgNOP = {
  encode(_: CNETMsgNOP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CNETMsgNOP {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNETMsgNOP();
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

function createBaseCNETMsgSplitScreenUser(): CNETMsgSplitScreenUser {
  return { slot: 0 };
}

export const CNETMsgSplitScreenUser = {
  encode(message: CNETMsgSplitScreenUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slot !== 0) {
      writer.uint32(8).int32(message.slot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CNETMsgSplitScreenUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNETMsgSplitScreenUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.slot = reader.int32();
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

function createBaseCNETMsgDisconnect(): CNETMsgDisconnect {
  return { reason: 0 };
}

export const CNETMsgDisconnect = {
  encode(message: CNETMsgDisconnect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reason !== 0) {
      writer.uint32(16).int32(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CNETMsgDisconnect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNETMsgDisconnect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.reason = reader.int32() as any;
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

function createBaseCNETMsgTick(): CNETMsgTick {
  return {
    tick: 0,
    hostFrametime: 0,
    hostFrametimeStdDeviation: 0,
    hostComputationtime: 0,
    hostComputationtimeStdDeviation: 0,
    hostFramestarttimeStdDeviation: 0,
    hostLoss: 0,
    hostUnfilteredFrametime: 0,
    hltvReplayFlags: 0,
  };
}

export const CNETMsgTick = {
  encode(message: CNETMsgTick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tick !== 0) {
      writer.uint32(8).uint32(message.tick);
    }
    if (message.hostFrametime !== 0) {
      writer.uint32(16).uint32(message.hostFrametime);
    }
    if (message.hostFrametimeStdDeviation !== 0) {
      writer.uint32(24).uint32(message.hostFrametimeStdDeviation);
    }
    if (message.hostComputationtime !== 0) {
      writer.uint32(32).uint32(message.hostComputationtime);
    }
    if (message.hostComputationtimeStdDeviation !== 0) {
      writer.uint32(40).uint32(message.hostComputationtimeStdDeviation);
    }
    if (message.hostFramestarttimeStdDeviation !== 0) {
      writer.uint32(48).uint32(message.hostFramestarttimeStdDeviation);
    }
    if (message.hostLoss !== 0) {
      writer.uint32(56).uint32(message.hostLoss);
    }
    if (message.hostUnfilteredFrametime !== 0) {
      writer.uint32(64).uint32(message.hostUnfilteredFrametime);
    }
    if (message.hltvReplayFlags !== 0) {
      writer.uint32(72).uint32(message.hltvReplayFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CNETMsgTick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNETMsgTick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tick = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.hostFrametime = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.hostFrametimeStdDeviation = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.hostComputationtime = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.hostComputationtimeStdDeviation = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.hostFramestarttimeStdDeviation = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.hostLoss = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.hostUnfilteredFrametime = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.hltvReplayFlags = reader.uint32();
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

function createBaseCNETMsgStringCmd(): CNETMsgStringCmd {
  return { command: "" };
}

export const CNETMsgStringCmd = {
  encode(message: CNETMsgStringCmd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.command !== "") {
      writer.uint32(10).string(message.command);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CNETMsgStringCmd {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNETMsgStringCmd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.command = reader.string();
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

function createBaseCNETMsgSetConVar(): CNETMsgSetConVar {
  return { convars: undefined };
}

export const CNETMsgSetConVar = {
  encode(message: CNETMsgSetConVar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.convars !== undefined) {
      CMsgCVars.encode(message.convars, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CNETMsgSetConVar {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNETMsgSetConVar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.convars = CMsgCVars.decode(reader, reader.uint32());
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

function createBaseCNETMsgSignonState(): CNETMsgSignonState {
  return { signonState: 0, spawnCount: 0, numServerPlayers: 0, playersNetworkids: [], mapName: "", addons: "" };
}

export const CNETMsgSignonState = {
  encode(message: CNETMsgSignonState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signonState !== 0) {
      writer.uint32(8).int32(message.signonState);
    }
    if (message.spawnCount !== 0) {
      writer.uint32(16).uint32(message.spawnCount);
    }
    if (message.numServerPlayers !== 0) {
      writer.uint32(24).uint32(message.numServerPlayers);
    }
    for (const v of message.playersNetworkids) {
      writer.uint32(34).string(v!);
    }
    if (message.mapName !== "") {
      writer.uint32(42).string(message.mapName);
    }
    if (message.addons !== "") {
      writer.uint32(50).string(message.addons);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CNETMsgSignonState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNETMsgSignonState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.signonState = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.spawnCount = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.numServerPlayers = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.playersNetworkids.push(reader.string());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.mapName = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.addons = reader.string();
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

function createBaseCSVCMsgGameEvent(): CSVCMsgGameEvent {
  return { eventName: "", eventid: 0, keys: [] };
}

export const CSVCMsgGameEvent = {
  encode(message: CSVCMsgGameEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventName !== "") {
      writer.uint32(10).string(message.eventName);
    }
    if (message.eventid !== 0) {
      writer.uint32(16).int32(message.eventid);
    }
    for (const v of message.keys) {
      CSVCMsgGameEvent_keyT.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgGameEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgGameEvent();
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

          message.keys.push(CSVCMsgGameEvent_keyT.decode(reader, reader.uint32()));
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

function createBaseCSVCMsgGameEvent_keyT(): CSVCMsgGameEvent_keyT {
  return { type: 0, valString: "", valFloat: 0, valLong: 0, valShort: 0, valByte: 0, valBool: false, valUint64: "0" };
}

export const CSVCMsgGameEvent_keyT = {
  encode(message: CSVCMsgGameEvent_keyT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgGameEvent_keyT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgGameEvent_keyT();
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

function createBaseCSVCMsgListGameEvents(): CSVCMsgListGameEvents {
  return { events: [] };
}

export const CSVCMsgListGameEvents = {
  encode(message: CSVCMsgListGameEvents, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      CSVCMsgListGameEvents_eventT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgListGameEvents {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgListGameEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.events.push(CSVCMsgListGameEvents_eventT.decode(reader, reader.uint32()));
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

function createBaseCSVCMsgListGameEvents_eventT(): CSVCMsgListGameEvents_eventT {
  return { tick: 0, event: undefined };
}

export const CSVCMsgListGameEvents_eventT = {
  encode(message: CSVCMsgListGameEvents_eventT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tick !== 0) {
      writer.uint32(8).int32(message.tick);
    }
    if (message.event !== undefined) {
      CSVCMsgGameEvent.encode(message.event, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgListGameEvents_eventT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgListGameEvents_eventT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tick = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.event = CSVCMsgGameEvent.decode(reader, reader.uint32());
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

function createBaseCNETMsgSpawnGroupLoad(): CNETMsgSpawnGroupLoad {
  return {
    worldname: "",
    entitylumpname: "",
    entityfiltername: "",
    spawngrouphandle: 0,
    spawngroupownerhandle: 0,
    worldOffsetPos: undefined,
    worldOffsetAngle: undefined,
    spawngroupmanifest: Buffer.alloc(0),
    flags: 0,
    tickcount: 0,
    manifestincomplete: false,
    localnamefixup: "",
    parentnamefixup: "",
    manifestloadpriority: 0,
    worldgroupid: 0,
    creationsequence: 0,
    savegamefilename: "",
    spawngroupparenthandle: 0,
    leveltransition: false,
    worldgroupname: "",
  };
}

export const CNETMsgSpawnGroupLoad = {
  encode(message: CNETMsgSpawnGroupLoad, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.worldname !== "") {
      writer.uint32(10).string(message.worldname);
    }
    if (message.entitylumpname !== "") {
      writer.uint32(18).string(message.entitylumpname);
    }
    if (message.entityfiltername !== "") {
      writer.uint32(26).string(message.entityfiltername);
    }
    if (message.spawngrouphandle !== 0) {
      writer.uint32(32).uint32(message.spawngrouphandle);
    }
    if (message.spawngroupownerhandle !== 0) {
      writer.uint32(40).uint32(message.spawngroupownerhandle);
    }
    if (message.worldOffsetPos !== undefined) {
      CMsgVector.encode(message.worldOffsetPos, writer.uint32(50).fork()).ldelim();
    }
    if (message.worldOffsetAngle !== undefined) {
      CMsgQAngle.encode(message.worldOffsetAngle, writer.uint32(58).fork()).ldelim();
    }
    if (message.spawngroupmanifest.length !== 0) {
      writer.uint32(66).bytes(message.spawngroupmanifest);
    }
    if (message.flags !== 0) {
      writer.uint32(72).uint32(message.flags);
    }
    if (message.tickcount !== 0) {
      writer.uint32(80).int32(message.tickcount);
    }
    if (message.manifestincomplete === true) {
      writer.uint32(88).bool(message.manifestincomplete);
    }
    if (message.localnamefixup !== "") {
      writer.uint32(98).string(message.localnamefixup);
    }
    if (message.parentnamefixup !== "") {
      writer.uint32(106).string(message.parentnamefixup);
    }
    if (message.manifestloadpriority !== 0) {
      writer.uint32(112).int32(message.manifestloadpriority);
    }
    if (message.worldgroupid !== 0) {
      writer.uint32(120).uint32(message.worldgroupid);
    }
    if (message.creationsequence !== 0) {
      writer.uint32(128).uint32(message.creationsequence);
    }
    if (message.savegamefilename !== "") {
      writer.uint32(138).string(message.savegamefilename);
    }
    if (message.spawngroupparenthandle !== 0) {
      writer.uint32(144).uint32(message.spawngroupparenthandle);
    }
    if (message.leveltransition === true) {
      writer.uint32(152).bool(message.leveltransition);
    }
    if (message.worldgroupname !== "") {
      writer.uint32(162).string(message.worldgroupname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CNETMsgSpawnGroupLoad {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNETMsgSpawnGroupLoad();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.worldname = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.entitylumpname = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.entityfiltername = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.spawngrouphandle = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.spawngroupownerhandle = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.worldOffsetPos = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.worldOffsetAngle = CMsgQAngle.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.spawngroupmanifest = reader.bytes() as Buffer;
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.tickcount = reader.int32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.manifestincomplete = reader.bool();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.localnamefixup = reader.string();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.parentnamefixup = reader.string();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.manifestloadpriority = reader.int32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.worldgroupid = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.creationsequence = reader.uint32();
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.savegamefilename = reader.string();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.spawngroupparenthandle = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.leveltransition = reader.bool();
          continue;
        case 20:
          if (tag != 162) {
            break;
          }

          message.worldgroupname = reader.string();
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

function createBaseCNETMsgSpawnGroupManifestUpdate(): CNETMsgSpawnGroupManifestUpdate {
  return { spawngrouphandle: 0, spawngroupmanifest: Buffer.alloc(0), manifestincomplete: false };
}

export const CNETMsgSpawnGroupManifestUpdate = {
  encode(message: CNETMsgSpawnGroupManifestUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spawngrouphandle !== 0) {
      writer.uint32(8).uint32(message.spawngrouphandle);
    }
    if (message.spawngroupmanifest.length !== 0) {
      writer.uint32(18).bytes(message.spawngroupmanifest);
    }
    if (message.manifestincomplete === true) {
      writer.uint32(24).bool(message.manifestincomplete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CNETMsgSpawnGroupManifestUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNETMsgSpawnGroupManifestUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.spawngrouphandle = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.spawngroupmanifest = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.manifestincomplete = reader.bool();
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

function createBaseCNETMsgSpawnGroupSetCreationTick(): CNETMsgSpawnGroupSetCreationTick {
  return { spawngrouphandle: 0, tickcount: 0, creationsequence: 0 };
}

export const CNETMsgSpawnGroupSetCreationTick = {
  encode(message: CNETMsgSpawnGroupSetCreationTick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spawngrouphandle !== 0) {
      writer.uint32(8).uint32(message.spawngrouphandle);
    }
    if (message.tickcount !== 0) {
      writer.uint32(16).int32(message.tickcount);
    }
    if (message.creationsequence !== 0) {
      writer.uint32(24).uint32(message.creationsequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CNETMsgSpawnGroupSetCreationTick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNETMsgSpawnGroupSetCreationTick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.spawngrouphandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.tickcount = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.creationsequence = reader.uint32();
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

function createBaseCNETMsgSpawnGroupUnload(): CNETMsgSpawnGroupUnload {
  return { spawngrouphandle: 0, flags: 0, tickcount: 0 };
}

export const CNETMsgSpawnGroupUnload = {
  encode(message: CNETMsgSpawnGroupUnload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spawngrouphandle !== 0) {
      writer.uint32(8).uint32(message.spawngrouphandle);
    }
    if (message.flags !== 0) {
      writer.uint32(16).uint32(message.flags);
    }
    if (message.tickcount !== 0) {
      writer.uint32(24).int32(message.tickcount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CNETMsgSpawnGroupUnload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNETMsgSpawnGroupUnload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.spawngrouphandle = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.tickcount = reader.int32();
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

function createBaseCNETMsgSpawnGroupLoadCompleted(): CNETMsgSpawnGroupLoadCompleted {
  return { spawngrouphandle: 0 };
}

export const CNETMsgSpawnGroupLoadCompleted = {
  encode(message: CNETMsgSpawnGroupLoadCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spawngrouphandle !== 0) {
      writer.uint32(8).uint32(message.spawngrouphandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CNETMsgSpawnGroupLoadCompleted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNETMsgSpawnGroupLoadCompleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.spawngrouphandle = reader.uint32();
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

function createBaseCSVCMsgGameSessionConfiguration(): CSVCMsgGameSessionConfiguration {
  return {
    isMultiplayer: false,
    isLoadsavegame: false,
    isBackgroundMap: false,
    isHeadless: false,
    minClientLimit: 0,
    maxClientLimit: 0,
    maxClients: 0,
    tickInterval: 0,
    hostname: "",
    savegamename: "",
    s1Mapname: "",
    gamemode: "",
    serverIpAddress: "",
    data: Buffer.alloc(0),
    isLocalonly: false,
    noSteamServer: false,
    isTransition: false,
    previouslevel: "",
    landmarkname: "",
  };
}

export const CSVCMsgGameSessionConfiguration = {
  encode(message: CSVCMsgGameSessionConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isMultiplayer === true) {
      writer.uint32(8).bool(message.isMultiplayer);
    }
    if (message.isLoadsavegame === true) {
      writer.uint32(16).bool(message.isLoadsavegame);
    }
    if (message.isBackgroundMap === true) {
      writer.uint32(24).bool(message.isBackgroundMap);
    }
    if (message.isHeadless === true) {
      writer.uint32(32).bool(message.isHeadless);
    }
    if (message.minClientLimit !== 0) {
      writer.uint32(40).uint32(message.minClientLimit);
    }
    if (message.maxClientLimit !== 0) {
      writer.uint32(48).uint32(message.maxClientLimit);
    }
    if (message.maxClients !== 0) {
      writer.uint32(56).uint32(message.maxClients);
    }
    if (message.tickInterval !== 0) {
      writer.uint32(69).fixed32(message.tickInterval);
    }
    if (message.hostname !== "") {
      writer.uint32(74).string(message.hostname);
    }
    if (message.savegamename !== "") {
      writer.uint32(82).string(message.savegamename);
    }
    if (message.s1Mapname !== "") {
      writer.uint32(90).string(message.s1Mapname);
    }
    if (message.gamemode !== "") {
      writer.uint32(98).string(message.gamemode);
    }
    if (message.serverIpAddress !== "") {
      writer.uint32(106).string(message.serverIpAddress);
    }
    if (message.data.length !== 0) {
      writer.uint32(114).bytes(message.data);
    }
    if (message.isLocalonly === true) {
      writer.uint32(120).bool(message.isLocalonly);
    }
    if (message.noSteamServer === true) {
      writer.uint32(152).bool(message.noSteamServer);
    }
    if (message.isTransition === true) {
      writer.uint32(128).bool(message.isTransition);
    }
    if (message.previouslevel !== "") {
      writer.uint32(138).string(message.previouslevel);
    }
    if (message.landmarkname !== "") {
      writer.uint32(146).string(message.landmarkname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSVCMsgGameSessionConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSVCMsgGameSessionConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isMultiplayer = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isLoadsavegame = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isBackgroundMap = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.isHeadless = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.minClientLimit = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.maxClientLimit = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.maxClients = reader.uint32();
          continue;
        case 8:
          if (tag != 69) {
            break;
          }

          message.tickInterval = reader.fixed32();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.hostname = reader.string();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.savegamename = reader.string();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.s1Mapname = reader.string();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.gamemode = reader.string();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.serverIpAddress = reader.string();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.data = reader.bytes() as Buffer;
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.isLocalonly = reader.bool();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.noSteamServer = reader.bool();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.isTransition = reader.bool();
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.previouslevel = reader.string();
          continue;
        case 18:
          if (tag != 146) {
            break;
          }

          message.landmarkname = reader.string();
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

function createBaseCNETMsgDebugOverlay(): CNETMsgDebugOverlay {
  return { etype: 0, vectors: [], colors: [], dimensions: [], times: [], bools: [], uint64s: [], strings: [] };
}

export const CNETMsgDebugOverlay = {
  encode(message: CNETMsgDebugOverlay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.etype !== 0) {
      writer.uint32(8).int32(message.etype);
    }
    for (const v of message.vectors) {
      CMsgVector.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.colors) {
      CMsgRGBA.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.dimensions) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.times) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.bools) {
      writer.bool(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.uint64s) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.strings) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CNETMsgDebugOverlay {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNETMsgDebugOverlay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.etype = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.vectors.push(CMsgVector.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.colors.push(CMsgRGBA.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag == 37) {
            message.dimensions.push(reader.float());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dimensions.push(reader.float());
            }

            continue;
          }

          break;
        case 5:
          if (tag == 45) {
            message.times.push(reader.float());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.times.push(reader.float());
            }

            continue;
          }

          break;
        case 6:
          if (tag == 48) {
            message.bools.push(reader.bool());
            continue;
          }

          if (tag == 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.bools.push(reader.bool());
            }

            continue;
          }

          break;
        case 7:
          if (tag == 56) {
            message.uint64s.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.uint64s.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 8:
          if (tag != 66) {
            break;
          }

          message.strings.push(reader.string());
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
