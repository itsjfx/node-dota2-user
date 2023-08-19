/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ENetworkDisconnectionReason,
  eNetworkDisconnectionReasonFromJSON,
  eNetworkDisconnectionReasonToJSON,
} from "./network_connection";

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

export function signonStateTFromJSON(object: any): SignonStateT {
  switch (object) {
    case 0:
    case "SIGNONSTATE_NONE":
      return SignonStateT.SIGNONSTATE_NONE;
    case 1:
    case "SIGNONSTATE_CHALLENGE":
      return SignonStateT.SIGNONSTATE_CHALLENGE;
    case 2:
    case "SIGNONSTATE_CONNECTED":
      return SignonStateT.SIGNONSTATE_CONNECTED;
    case 3:
    case "SIGNONSTATE_NEW":
      return SignonStateT.SIGNONSTATE_NEW;
    case 4:
    case "SIGNONSTATE_PRESPAWN":
      return SignonStateT.SIGNONSTATE_PRESPAWN;
    case 5:
    case "SIGNONSTATE_SPAWN":
      return SignonStateT.SIGNONSTATE_SPAWN;
    case 6:
    case "SIGNONSTATE_FULL":
      return SignonStateT.SIGNONSTATE_FULL;
    case 7:
    case "SIGNONSTATE_CHANGELEVEL":
      return SignonStateT.SIGNONSTATE_CHANGELEVEL;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SignonStateT");
  }
}

export function signonStateTToJSON(object: SignonStateT): string {
  switch (object) {
    case SignonStateT.SIGNONSTATE_NONE:
      return "SIGNONSTATE_NONE";
    case SignonStateT.SIGNONSTATE_CHALLENGE:
      return "SIGNONSTATE_CHALLENGE";
    case SignonStateT.SIGNONSTATE_CONNECTED:
      return "SIGNONSTATE_CONNECTED";
    case SignonStateT.SIGNONSTATE_NEW:
      return "SIGNONSTATE_NEW";
    case SignonStateT.SIGNONSTATE_PRESPAWN:
      return "SIGNONSTATE_PRESPAWN";
    case SignonStateT.SIGNONSTATE_SPAWN:
      return "SIGNONSTATE_SPAWN";
    case SignonStateT.SIGNONSTATE_FULL:
      return "SIGNONSTATE_FULL";
    case SignonStateT.SIGNONSTATE_CHANGELEVEL:
      return "SIGNONSTATE_CHANGELEVEL";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SignonStateT");
  }
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

export function nETMessagesFromJSON(object: any): NETMessages {
  switch (object) {
    case 0:
    case "net_NOP":
      return NETMessages.net_NOP;
    case 1:
    case "net_Disconnect":
      return NETMessages.net_Disconnect;
    case 3:
    case "net_SplitScreenUser":
      return NETMessages.net_SplitScreenUser;
    case 4:
    case "net_Tick":
      return NETMessages.net_Tick;
    case 5:
    case "net_StringCmd":
      return NETMessages.net_StringCmd;
    case 6:
    case "net_SetConVar":
      return NETMessages.net_SetConVar;
    case 7:
    case "net_SignonState":
      return NETMessages.net_SignonState;
    case 8:
    case "net_SpawnGroup_Load":
      return NETMessages.net_SpawnGroup_Load;
    case 9:
    case "net_SpawnGroup_ManifestUpdate":
      return NETMessages.net_SpawnGroup_ManifestUpdate;
    case 11:
    case "net_SpawnGroup_SetCreationTick":
      return NETMessages.net_SpawnGroup_SetCreationTick;
    case 12:
    case "net_SpawnGroup_Unload":
      return NETMessages.net_SpawnGroup_Unload;
    case 13:
    case "net_SpawnGroup_LoadCompleted":
      return NETMessages.net_SpawnGroup_LoadCompleted;
    case 15:
    case "net_DebugOverlay":
      return NETMessages.net_DebugOverlay;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum NETMessages");
  }
}

export function nETMessagesToJSON(object: NETMessages): string {
  switch (object) {
    case NETMessages.net_NOP:
      return "net_NOP";
    case NETMessages.net_Disconnect:
      return "net_Disconnect";
    case NETMessages.net_SplitScreenUser:
      return "net_SplitScreenUser";
    case NETMessages.net_Tick:
      return "net_Tick";
    case NETMessages.net_StringCmd:
      return "net_StringCmd";
    case NETMessages.net_SetConVar:
      return "net_SetConVar";
    case NETMessages.net_SignonState:
      return "net_SignonState";
    case NETMessages.net_SpawnGroup_Load:
      return "net_SpawnGroup_Load";
    case NETMessages.net_SpawnGroup_ManifestUpdate:
      return "net_SpawnGroup_ManifestUpdate";
    case NETMessages.net_SpawnGroup_SetCreationTick:
      return "net_SpawnGroup_SetCreationTick";
    case NETMessages.net_SpawnGroup_Unload:
      return "net_SpawnGroup_Unload";
    case NETMessages.net_SpawnGroup_LoadCompleted:
      return "net_SpawnGroup_LoadCompleted";
    case NETMessages.net_DebugOverlay:
      return "net_DebugOverlay";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum NETMessages");
  }
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

export function spawnGroupFlagsTFromJSON(object: any): SpawnGroupFlagsT {
  switch (object) {
    case 1:
    case "SPAWN_GROUP_LOAD_ENTITIES_FROM_SAVE":
      return SpawnGroupFlagsT.SPAWN_GROUP_LOAD_ENTITIES_FROM_SAVE;
    case 2:
    case "SPAWN_GROUP_DONT_SPAWN_ENTITIES":
      return SpawnGroupFlagsT.SPAWN_GROUP_DONT_SPAWN_ENTITIES;
    case 4:
    case "SPAWN_GROUP_SYNCHRONOUS_SPAWN":
      return SpawnGroupFlagsT.SPAWN_GROUP_SYNCHRONOUS_SPAWN;
    case 8:
    case "SPAWN_GROUP_IS_INITIAL_SPAWN_GROUP":
      return SpawnGroupFlagsT.SPAWN_GROUP_IS_INITIAL_SPAWN_GROUP;
    case 16:
    case "SPAWN_GROUP_CREATE_CLIENT_ONLY_ENTITIES":
      return SpawnGroupFlagsT.SPAWN_GROUP_CREATE_CLIENT_ONLY_ENTITIES;
    case 64:
    case "SPAWN_GROUP_BLOCK_UNTIL_LOADED":
      return SpawnGroupFlagsT.SPAWN_GROUP_BLOCK_UNTIL_LOADED;
    case 128:
    case "SPAWN_GROUP_LOAD_STREAMING_DATA":
      return SpawnGroupFlagsT.SPAWN_GROUP_LOAD_STREAMING_DATA;
    case 256:
    case "SPAWN_GROUP_CREATE_NEW_SCENE_WORLD":
      return SpawnGroupFlagsT.SPAWN_GROUP_CREATE_NEW_SCENE_WORLD;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SpawnGroupFlagsT");
  }
}

export function spawnGroupFlagsTToJSON(object: SpawnGroupFlagsT): string {
  switch (object) {
    case SpawnGroupFlagsT.SPAWN_GROUP_LOAD_ENTITIES_FROM_SAVE:
      return "SPAWN_GROUP_LOAD_ENTITIES_FROM_SAVE";
    case SpawnGroupFlagsT.SPAWN_GROUP_DONT_SPAWN_ENTITIES:
      return "SPAWN_GROUP_DONT_SPAWN_ENTITIES";
    case SpawnGroupFlagsT.SPAWN_GROUP_SYNCHRONOUS_SPAWN:
      return "SPAWN_GROUP_SYNCHRONOUS_SPAWN";
    case SpawnGroupFlagsT.SPAWN_GROUP_IS_INITIAL_SPAWN_GROUP:
      return "SPAWN_GROUP_IS_INITIAL_SPAWN_GROUP";
    case SpawnGroupFlagsT.SPAWN_GROUP_CREATE_CLIENT_ONLY_ENTITIES:
      return "SPAWN_GROUP_CREATE_CLIENT_ONLY_ENTITIES";
    case SpawnGroupFlagsT.SPAWN_GROUP_BLOCK_UNTIL_LOADED:
      return "SPAWN_GROUP_BLOCK_UNTIL_LOADED";
    case SpawnGroupFlagsT.SPAWN_GROUP_LOAD_STREAMING_DATA:
      return "SPAWN_GROUP_LOAD_STREAMING_DATA";
    case SpawnGroupFlagsT.SPAWN_GROUP_CREATE_NEW_SCENE_WORLD:
      return "SPAWN_GROUP_CREATE_NEW_SCENE_WORLD";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SpawnGroupFlagsT");
  }
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

  fromJSON(object: any): CMsgVector {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
      w: isSet(object.w) ? Number(object.w) : 0,
    };
  },

  toJSON(message: CMsgVector): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    message.w !== undefined && (obj.w = message.w);
    return obj;
  },

  create(base?: DeepPartial<CMsgVector>): CMsgVector {
    return CMsgVector.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgVector>): CMsgVector {
    const message = createBaseCMsgVector();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    message.w = object.w ?? 0;
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

  fromJSON(object: any): CMsgVector2D {
    return { x: isSet(object.x) ? Number(object.x) : 0, y: isSet(object.y) ? Number(object.y) : 0 };
  },

  toJSON(message: CMsgVector2D): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  create(base?: DeepPartial<CMsgVector2D>): CMsgVector2D {
    return CMsgVector2D.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgVector2D>): CMsgVector2D {
    const message = createBaseCMsgVector2D();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
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

  fromJSON(object: any): CMsgQAngle {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
    };
  },

  toJSON(message: CMsgQAngle): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    return obj;
  },

  create(base?: DeepPartial<CMsgQAngle>): CMsgQAngle {
    return CMsgQAngle.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgQAngle>): CMsgQAngle {
    const message = createBaseCMsgQAngle();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
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

  fromJSON(object: any): CMsgQuaternion {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
      w: isSet(object.w) ? Number(object.w) : 0,
    };
  },

  toJSON(message: CMsgQuaternion): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    message.w !== undefined && (obj.w = message.w);
    return obj;
  },

  create(base?: DeepPartial<CMsgQuaternion>): CMsgQuaternion {
    return CMsgQuaternion.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgQuaternion>): CMsgQuaternion {
    const message = createBaseCMsgQuaternion();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    message.w = object.w ?? 0;
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

  fromJSON(object: any): CMsgTransform {
    return {
      position: isSet(object.position) ? CMsgVector.fromJSON(object.position) : undefined,
      scale: isSet(object.scale) ? Number(object.scale) : 0,
      orientation: isSet(object.orientation) ? CMsgQuaternion.fromJSON(object.orientation) : undefined,
    };
  },

  toJSON(message: CMsgTransform): unknown {
    const obj: any = {};
    message.position !== undefined &&
      (obj.position = message.position ? CMsgVector.toJSON(message.position) : undefined);
    message.scale !== undefined && (obj.scale = message.scale);
    message.orientation !== undefined &&
      (obj.orientation = message.orientation ? CMsgQuaternion.toJSON(message.orientation) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgTransform>): CMsgTransform {
    return CMsgTransform.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgTransform>): CMsgTransform {
    const message = createBaseCMsgTransform();
    message.position = (object.position !== undefined && object.position !== null)
      ? CMsgVector.fromPartial(object.position)
      : undefined;
    message.scale = object.scale ?? 0;
    message.orientation = (object.orientation !== undefined && object.orientation !== null)
      ? CMsgQuaternion.fromPartial(object.orientation)
      : undefined;
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

  fromJSON(object: any): CMsgRGBA {
    return {
      r: isSet(object.r) ? Number(object.r) : 0,
      g: isSet(object.g) ? Number(object.g) : 0,
      b: isSet(object.b) ? Number(object.b) : 0,
      a: isSet(object.a) ? Number(object.a) : 0,
    };
  },

  toJSON(message: CMsgRGBA): unknown {
    const obj: any = {};
    message.r !== undefined && (obj.r = Math.round(message.r));
    message.g !== undefined && (obj.g = Math.round(message.g));
    message.b !== undefined && (obj.b = Math.round(message.b));
    message.a !== undefined && (obj.a = Math.round(message.a));
    return obj;
  },

  create(base?: DeepPartial<CMsgRGBA>): CMsgRGBA {
    return CMsgRGBA.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgRGBA>): CMsgRGBA {
    const message = createBaseCMsgRGBA();
    message.r = object.r ?? 0;
    message.g = object.g ?? 0;
    message.b = object.b ?? 0;
    message.a = object.a ?? 0;
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

  fromJSON(object: any): CMsgPlayerInfo {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      xuid: isSet(object.xuid) ? String(object.xuid) : "0",
      userid: isSet(object.userid) ? Number(object.userid) : 0,
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      fakeplayer: isSet(object.fakeplayer) ? Boolean(object.fakeplayer) : false,
      ishltv: isSet(object.ishltv) ? Boolean(object.ishltv) : false,
    };
  },

  toJSON(message: CMsgPlayerInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.xuid !== undefined && (obj.xuid = message.xuid);
    message.userid !== undefined && (obj.userid = Math.round(message.userid));
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.fakeplayer !== undefined && (obj.fakeplayer = message.fakeplayer);
    message.ishltv !== undefined && (obj.ishltv = message.ishltv);
    return obj;
  },

  create(base?: DeepPartial<CMsgPlayerInfo>): CMsgPlayerInfo {
    return CMsgPlayerInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgPlayerInfo>): CMsgPlayerInfo {
    const message = createBaseCMsgPlayerInfo();
    message.name = object.name ?? "";
    message.xuid = object.xuid ?? "0";
    message.userid = object.userid ?? 0;
    message.steamid = object.steamid ?? "0";
    message.fakeplayer = object.fakeplayer ?? false;
    message.ishltv = object.ishltv ?? false;
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

  fromJSON(object: any): CEntityMsg {
    return { targetEntity: isSet(object.targetEntity) ? Number(object.targetEntity) : 0 };
  },

  toJSON(message: CEntityMsg): unknown {
    const obj: any = {};
    message.targetEntity !== undefined && (obj.targetEntity = Math.round(message.targetEntity));
    return obj;
  },

  create(base?: DeepPartial<CEntityMsg>): CEntityMsg {
    return CEntityMsg.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CEntityMsg>): CEntityMsg {
    const message = createBaseCEntityMsg();
    message.targetEntity = object.targetEntity ?? 0;
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

  fromJSON(object: any): CMsgCVars {
    return { cvars: Array.isArray(object?.cvars) ? object.cvars.map((e: any) => CMsgCVars_CVar.fromJSON(e)) : [] };
  },

  toJSON(message: CMsgCVars): unknown {
    const obj: any = {};
    if (message.cvars) {
      obj.cvars = message.cvars.map((e) => e ? CMsgCVars_CVar.toJSON(e) : undefined);
    } else {
      obj.cvars = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgCVars>): CMsgCVars {
    return CMsgCVars.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgCVars>): CMsgCVars {
    const message = createBaseCMsgCVars();
    message.cvars = object.cvars?.map((e) => CMsgCVars_CVar.fromPartial(e)) || [];
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

  fromJSON(object: any): CMsgCVars_CVar {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CMsgCVars_CVar): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<CMsgCVars_CVar>): CMsgCVars_CVar {
    return CMsgCVars_CVar.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgCVars_CVar>): CMsgCVars_CVar {
    const message = createBaseCMsgCVars_CVar();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
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

  fromJSON(_: any): CNETMsgNOP {
    return {};
  },

  toJSON(_: CNETMsgNOP): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CNETMsgNOP>): CNETMsgNOP {
    return CNETMsgNOP.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CNETMsgNOP>): CNETMsgNOP {
    const message = createBaseCNETMsgNOP();
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

  fromJSON(object: any): CNETMsgSplitScreenUser {
    return { slot: isSet(object.slot) ? Number(object.slot) : 0 };
  },

  toJSON(message: CNETMsgSplitScreenUser): unknown {
    const obj: any = {};
    message.slot !== undefined && (obj.slot = Math.round(message.slot));
    return obj;
  },

  create(base?: DeepPartial<CNETMsgSplitScreenUser>): CNETMsgSplitScreenUser {
    return CNETMsgSplitScreenUser.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CNETMsgSplitScreenUser>): CNETMsgSplitScreenUser {
    const message = createBaseCNETMsgSplitScreenUser();
    message.slot = object.slot ?? 0;
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

  fromJSON(object: any): CNETMsgDisconnect {
    return { reason: isSet(object.reason) ? eNetworkDisconnectionReasonFromJSON(object.reason) : 0 };
  },

  toJSON(message: CNETMsgDisconnect): unknown {
    const obj: any = {};
    message.reason !== undefined && (obj.reason = eNetworkDisconnectionReasonToJSON(message.reason));
    return obj;
  },

  create(base?: DeepPartial<CNETMsgDisconnect>): CNETMsgDisconnect {
    return CNETMsgDisconnect.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CNETMsgDisconnect>): CNETMsgDisconnect {
    const message = createBaseCNETMsgDisconnect();
    message.reason = object.reason ?? 0;
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

  fromJSON(object: any): CNETMsgTick {
    return {
      tick: isSet(object.tick) ? Number(object.tick) : 0,
      hostFrametime: isSet(object.hostFrametime) ? Number(object.hostFrametime) : 0,
      hostFrametimeStdDeviation: isSet(object.hostFrametimeStdDeviation) ? Number(object.hostFrametimeStdDeviation) : 0,
      hostComputationtime: isSet(object.hostComputationtime) ? Number(object.hostComputationtime) : 0,
      hostComputationtimeStdDeviation: isSet(object.hostComputationtimeStdDeviation)
        ? Number(object.hostComputationtimeStdDeviation)
        : 0,
      hostFramestarttimeStdDeviation: isSet(object.hostFramestarttimeStdDeviation)
        ? Number(object.hostFramestarttimeStdDeviation)
        : 0,
      hostLoss: isSet(object.hostLoss) ? Number(object.hostLoss) : 0,
      hostUnfilteredFrametime: isSet(object.hostUnfilteredFrametime) ? Number(object.hostUnfilteredFrametime) : 0,
      hltvReplayFlags: isSet(object.hltvReplayFlags) ? Number(object.hltvReplayFlags) : 0,
    };
  },

  toJSON(message: CNETMsgTick): unknown {
    const obj: any = {};
    message.tick !== undefined && (obj.tick = Math.round(message.tick));
    message.hostFrametime !== undefined && (obj.hostFrametime = Math.round(message.hostFrametime));
    message.hostFrametimeStdDeviation !== undefined &&
      (obj.hostFrametimeStdDeviation = Math.round(message.hostFrametimeStdDeviation));
    message.hostComputationtime !== undefined && (obj.hostComputationtime = Math.round(message.hostComputationtime));
    message.hostComputationtimeStdDeviation !== undefined &&
      (obj.hostComputationtimeStdDeviation = Math.round(message.hostComputationtimeStdDeviation));
    message.hostFramestarttimeStdDeviation !== undefined &&
      (obj.hostFramestarttimeStdDeviation = Math.round(message.hostFramestarttimeStdDeviation));
    message.hostLoss !== undefined && (obj.hostLoss = Math.round(message.hostLoss));
    message.hostUnfilteredFrametime !== undefined &&
      (obj.hostUnfilteredFrametime = Math.round(message.hostUnfilteredFrametime));
    message.hltvReplayFlags !== undefined && (obj.hltvReplayFlags = Math.round(message.hltvReplayFlags));
    return obj;
  },

  create(base?: DeepPartial<CNETMsgTick>): CNETMsgTick {
    return CNETMsgTick.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CNETMsgTick>): CNETMsgTick {
    const message = createBaseCNETMsgTick();
    message.tick = object.tick ?? 0;
    message.hostFrametime = object.hostFrametime ?? 0;
    message.hostFrametimeStdDeviation = object.hostFrametimeStdDeviation ?? 0;
    message.hostComputationtime = object.hostComputationtime ?? 0;
    message.hostComputationtimeStdDeviation = object.hostComputationtimeStdDeviation ?? 0;
    message.hostFramestarttimeStdDeviation = object.hostFramestarttimeStdDeviation ?? 0;
    message.hostLoss = object.hostLoss ?? 0;
    message.hostUnfilteredFrametime = object.hostUnfilteredFrametime ?? 0;
    message.hltvReplayFlags = object.hltvReplayFlags ?? 0;
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

  fromJSON(object: any): CNETMsgStringCmd {
    return { command: isSet(object.command) ? String(object.command) : "" };
  },

  toJSON(message: CNETMsgStringCmd): unknown {
    const obj: any = {};
    message.command !== undefined && (obj.command = message.command);
    return obj;
  },

  create(base?: DeepPartial<CNETMsgStringCmd>): CNETMsgStringCmd {
    return CNETMsgStringCmd.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CNETMsgStringCmd>): CNETMsgStringCmd {
    const message = createBaseCNETMsgStringCmd();
    message.command = object.command ?? "";
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

  fromJSON(object: any): CNETMsgSetConVar {
    return { convars: isSet(object.convars) ? CMsgCVars.fromJSON(object.convars) : undefined };
  },

  toJSON(message: CNETMsgSetConVar): unknown {
    const obj: any = {};
    message.convars !== undefined && (obj.convars = message.convars ? CMsgCVars.toJSON(message.convars) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CNETMsgSetConVar>): CNETMsgSetConVar {
    return CNETMsgSetConVar.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CNETMsgSetConVar>): CNETMsgSetConVar {
    const message = createBaseCNETMsgSetConVar();
    message.convars = (object.convars !== undefined && object.convars !== null)
      ? CMsgCVars.fromPartial(object.convars)
      : undefined;
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

  fromJSON(object: any): CNETMsgSignonState {
    return {
      signonState: isSet(object.signonState) ? signonStateTFromJSON(object.signonState) : 0,
      spawnCount: isSet(object.spawnCount) ? Number(object.spawnCount) : 0,
      numServerPlayers: isSet(object.numServerPlayers) ? Number(object.numServerPlayers) : 0,
      playersNetworkids: Array.isArray(object?.playersNetworkids)
        ? object.playersNetworkids.map((e: any) => String(e))
        : [],
      mapName: isSet(object.mapName) ? String(object.mapName) : "",
      addons: isSet(object.addons) ? String(object.addons) : "",
    };
  },

  toJSON(message: CNETMsgSignonState): unknown {
    const obj: any = {};
    message.signonState !== undefined && (obj.signonState = signonStateTToJSON(message.signonState));
    message.spawnCount !== undefined && (obj.spawnCount = Math.round(message.spawnCount));
    message.numServerPlayers !== undefined && (obj.numServerPlayers = Math.round(message.numServerPlayers));
    if (message.playersNetworkids) {
      obj.playersNetworkids = message.playersNetworkids.map((e) => e);
    } else {
      obj.playersNetworkids = [];
    }
    message.mapName !== undefined && (obj.mapName = message.mapName);
    message.addons !== undefined && (obj.addons = message.addons);
    return obj;
  },

  create(base?: DeepPartial<CNETMsgSignonState>): CNETMsgSignonState {
    return CNETMsgSignonState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CNETMsgSignonState>): CNETMsgSignonState {
    const message = createBaseCNETMsgSignonState();
    message.signonState = object.signonState ?? 0;
    message.spawnCount = object.spawnCount ?? 0;
    message.numServerPlayers = object.numServerPlayers ?? 0;
    message.playersNetworkids = object.playersNetworkids?.map((e) => e) || [];
    message.mapName = object.mapName ?? "";
    message.addons = object.addons ?? "";
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

  fromJSON(object: any): CSVCMsgGameEvent {
    return {
      eventName: isSet(object.eventName) ? String(object.eventName) : "",
      eventid: isSet(object.eventid) ? Number(object.eventid) : 0,
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => CSVCMsgGameEvent_keyT.fromJSON(e)) : [],
    };
  },

  toJSON(message: CSVCMsgGameEvent): unknown {
    const obj: any = {};
    message.eventName !== undefined && (obj.eventName = message.eventName);
    message.eventid !== undefined && (obj.eventid = Math.round(message.eventid));
    if (message.keys) {
      obj.keys = message.keys.map((e) => e ? CSVCMsgGameEvent_keyT.toJSON(e) : undefined);
    } else {
      obj.keys = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgGameEvent>): CSVCMsgGameEvent {
    return CSVCMsgGameEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgGameEvent>): CSVCMsgGameEvent {
    const message = createBaseCSVCMsgGameEvent();
    message.eventName = object.eventName ?? "";
    message.eventid = object.eventid ?? 0;
    message.keys = object.keys?.map((e) => CSVCMsgGameEvent_keyT.fromPartial(e)) || [];
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

  fromJSON(object: any): CSVCMsgGameEvent_keyT {
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

  toJSON(message: CSVCMsgGameEvent_keyT): unknown {
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

  create(base?: DeepPartial<CSVCMsgGameEvent_keyT>): CSVCMsgGameEvent_keyT {
    return CSVCMsgGameEvent_keyT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgGameEvent_keyT>): CSVCMsgGameEvent_keyT {
    const message = createBaseCSVCMsgGameEvent_keyT();
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

  fromJSON(object: any): CSVCMsgListGameEvents {
    return {
      events: Array.isArray(object?.events)
        ? object.events.map((e: any) => CSVCMsgListGameEvents_eventT.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSVCMsgListGameEvents): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => e ? CSVCMsgListGameEvents_eventT.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgListGameEvents>): CSVCMsgListGameEvents {
    return CSVCMsgListGameEvents.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgListGameEvents>): CSVCMsgListGameEvents {
    const message = createBaseCSVCMsgListGameEvents();
    message.events = object.events?.map((e) => CSVCMsgListGameEvents_eventT.fromPartial(e)) || [];
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

  fromJSON(object: any): CSVCMsgListGameEvents_eventT {
    return {
      tick: isSet(object.tick) ? Number(object.tick) : 0,
      event: isSet(object.event) ? CSVCMsgGameEvent.fromJSON(object.event) : undefined,
    };
  },

  toJSON(message: CSVCMsgListGameEvents_eventT): unknown {
    const obj: any = {};
    message.tick !== undefined && (obj.tick = Math.round(message.tick));
    message.event !== undefined && (obj.event = message.event ? CSVCMsgGameEvent.toJSON(message.event) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgListGameEvents_eventT>): CSVCMsgListGameEvents_eventT {
    return CSVCMsgListGameEvents_eventT.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgListGameEvents_eventT>): CSVCMsgListGameEvents_eventT {
    const message = createBaseCSVCMsgListGameEvents_eventT();
    message.tick = object.tick ?? 0;
    message.event = (object.event !== undefined && object.event !== null)
      ? CSVCMsgGameEvent.fromPartial(object.event)
      : undefined;
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

  fromJSON(object: any): CNETMsgSpawnGroupLoad {
    return {
      worldname: isSet(object.worldname) ? String(object.worldname) : "",
      entitylumpname: isSet(object.entitylumpname) ? String(object.entitylumpname) : "",
      entityfiltername: isSet(object.entityfiltername) ? String(object.entityfiltername) : "",
      spawngrouphandle: isSet(object.spawngrouphandle) ? Number(object.spawngrouphandle) : 0,
      spawngroupownerhandle: isSet(object.spawngroupownerhandle) ? Number(object.spawngroupownerhandle) : 0,
      worldOffsetPos: isSet(object.worldOffsetPos) ? CMsgVector.fromJSON(object.worldOffsetPos) : undefined,
      worldOffsetAngle: isSet(object.worldOffsetAngle) ? CMsgQAngle.fromJSON(object.worldOffsetAngle) : undefined,
      spawngroupmanifest: isSet(object.spawngroupmanifest)
        ? Buffer.from(bytesFromBase64(object.spawngroupmanifest))
        : Buffer.alloc(0),
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      tickcount: isSet(object.tickcount) ? Number(object.tickcount) : 0,
      manifestincomplete: isSet(object.manifestincomplete) ? Boolean(object.manifestincomplete) : false,
      localnamefixup: isSet(object.localnamefixup) ? String(object.localnamefixup) : "",
      parentnamefixup: isSet(object.parentnamefixup) ? String(object.parentnamefixup) : "",
      manifestloadpriority: isSet(object.manifestloadpriority) ? Number(object.manifestloadpriority) : 0,
      worldgroupid: isSet(object.worldgroupid) ? Number(object.worldgroupid) : 0,
      creationsequence: isSet(object.creationsequence) ? Number(object.creationsequence) : 0,
      savegamefilename: isSet(object.savegamefilename) ? String(object.savegamefilename) : "",
      spawngroupparenthandle: isSet(object.spawngroupparenthandle) ? Number(object.spawngroupparenthandle) : 0,
      leveltransition: isSet(object.leveltransition) ? Boolean(object.leveltransition) : false,
      worldgroupname: isSet(object.worldgroupname) ? String(object.worldgroupname) : "",
    };
  },

  toJSON(message: CNETMsgSpawnGroupLoad): unknown {
    const obj: any = {};
    message.worldname !== undefined && (obj.worldname = message.worldname);
    message.entitylumpname !== undefined && (obj.entitylumpname = message.entitylumpname);
    message.entityfiltername !== undefined && (obj.entityfiltername = message.entityfiltername);
    message.spawngrouphandle !== undefined && (obj.spawngrouphandle = Math.round(message.spawngrouphandle));
    message.spawngroupownerhandle !== undefined &&
      (obj.spawngroupownerhandle = Math.round(message.spawngroupownerhandle));
    message.worldOffsetPos !== undefined &&
      (obj.worldOffsetPos = message.worldOffsetPos ? CMsgVector.toJSON(message.worldOffsetPos) : undefined);
    message.worldOffsetAngle !== undefined &&
      (obj.worldOffsetAngle = message.worldOffsetAngle ? CMsgQAngle.toJSON(message.worldOffsetAngle) : undefined);
    message.spawngroupmanifest !== undefined &&
      (obj.spawngroupmanifest = base64FromBytes(
        message.spawngroupmanifest !== undefined ? message.spawngroupmanifest : Buffer.alloc(0),
      ));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.tickcount !== undefined && (obj.tickcount = Math.round(message.tickcount));
    message.manifestincomplete !== undefined && (obj.manifestincomplete = message.manifestincomplete);
    message.localnamefixup !== undefined && (obj.localnamefixup = message.localnamefixup);
    message.parentnamefixup !== undefined && (obj.parentnamefixup = message.parentnamefixup);
    message.manifestloadpriority !== undefined && (obj.manifestloadpriority = Math.round(message.manifestloadpriority));
    message.worldgroupid !== undefined && (obj.worldgroupid = Math.round(message.worldgroupid));
    message.creationsequence !== undefined && (obj.creationsequence = Math.round(message.creationsequence));
    message.savegamefilename !== undefined && (obj.savegamefilename = message.savegamefilename);
    message.spawngroupparenthandle !== undefined &&
      (obj.spawngroupparenthandle = Math.round(message.spawngroupparenthandle));
    message.leveltransition !== undefined && (obj.leveltransition = message.leveltransition);
    message.worldgroupname !== undefined && (obj.worldgroupname = message.worldgroupname);
    return obj;
  },

  create(base?: DeepPartial<CNETMsgSpawnGroupLoad>): CNETMsgSpawnGroupLoad {
    return CNETMsgSpawnGroupLoad.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CNETMsgSpawnGroupLoad>): CNETMsgSpawnGroupLoad {
    const message = createBaseCNETMsgSpawnGroupLoad();
    message.worldname = object.worldname ?? "";
    message.entitylumpname = object.entitylumpname ?? "";
    message.entityfiltername = object.entityfiltername ?? "";
    message.spawngrouphandle = object.spawngrouphandle ?? 0;
    message.spawngroupownerhandle = object.spawngroupownerhandle ?? 0;
    message.worldOffsetPos = (object.worldOffsetPos !== undefined && object.worldOffsetPos !== null)
      ? CMsgVector.fromPartial(object.worldOffsetPos)
      : undefined;
    message.worldOffsetAngle = (object.worldOffsetAngle !== undefined && object.worldOffsetAngle !== null)
      ? CMsgQAngle.fromPartial(object.worldOffsetAngle)
      : undefined;
    message.spawngroupmanifest = object.spawngroupmanifest ?? Buffer.alloc(0);
    message.flags = object.flags ?? 0;
    message.tickcount = object.tickcount ?? 0;
    message.manifestincomplete = object.manifestincomplete ?? false;
    message.localnamefixup = object.localnamefixup ?? "";
    message.parentnamefixup = object.parentnamefixup ?? "";
    message.manifestloadpriority = object.manifestloadpriority ?? 0;
    message.worldgroupid = object.worldgroupid ?? 0;
    message.creationsequence = object.creationsequence ?? 0;
    message.savegamefilename = object.savegamefilename ?? "";
    message.spawngroupparenthandle = object.spawngroupparenthandle ?? 0;
    message.leveltransition = object.leveltransition ?? false;
    message.worldgroupname = object.worldgroupname ?? "";
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

  fromJSON(object: any): CNETMsgSpawnGroupManifestUpdate {
    return {
      spawngrouphandle: isSet(object.spawngrouphandle) ? Number(object.spawngrouphandle) : 0,
      spawngroupmanifest: isSet(object.spawngroupmanifest)
        ? Buffer.from(bytesFromBase64(object.spawngroupmanifest))
        : Buffer.alloc(0),
      manifestincomplete: isSet(object.manifestincomplete) ? Boolean(object.manifestincomplete) : false,
    };
  },

  toJSON(message: CNETMsgSpawnGroupManifestUpdate): unknown {
    const obj: any = {};
    message.spawngrouphandle !== undefined && (obj.spawngrouphandle = Math.round(message.spawngrouphandle));
    message.spawngroupmanifest !== undefined &&
      (obj.spawngroupmanifest = base64FromBytes(
        message.spawngroupmanifest !== undefined ? message.spawngroupmanifest : Buffer.alloc(0),
      ));
    message.manifestincomplete !== undefined && (obj.manifestincomplete = message.manifestincomplete);
    return obj;
  },

  create(base?: DeepPartial<CNETMsgSpawnGroupManifestUpdate>): CNETMsgSpawnGroupManifestUpdate {
    return CNETMsgSpawnGroupManifestUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CNETMsgSpawnGroupManifestUpdate>): CNETMsgSpawnGroupManifestUpdate {
    const message = createBaseCNETMsgSpawnGroupManifestUpdate();
    message.spawngrouphandle = object.spawngrouphandle ?? 0;
    message.spawngroupmanifest = object.spawngroupmanifest ?? Buffer.alloc(0);
    message.manifestincomplete = object.manifestincomplete ?? false;
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

  fromJSON(object: any): CNETMsgSpawnGroupSetCreationTick {
    return {
      spawngrouphandle: isSet(object.spawngrouphandle) ? Number(object.spawngrouphandle) : 0,
      tickcount: isSet(object.tickcount) ? Number(object.tickcount) : 0,
      creationsequence: isSet(object.creationsequence) ? Number(object.creationsequence) : 0,
    };
  },

  toJSON(message: CNETMsgSpawnGroupSetCreationTick): unknown {
    const obj: any = {};
    message.spawngrouphandle !== undefined && (obj.spawngrouphandle = Math.round(message.spawngrouphandle));
    message.tickcount !== undefined && (obj.tickcount = Math.round(message.tickcount));
    message.creationsequence !== undefined && (obj.creationsequence = Math.round(message.creationsequence));
    return obj;
  },

  create(base?: DeepPartial<CNETMsgSpawnGroupSetCreationTick>): CNETMsgSpawnGroupSetCreationTick {
    return CNETMsgSpawnGroupSetCreationTick.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CNETMsgSpawnGroupSetCreationTick>): CNETMsgSpawnGroupSetCreationTick {
    const message = createBaseCNETMsgSpawnGroupSetCreationTick();
    message.spawngrouphandle = object.spawngrouphandle ?? 0;
    message.tickcount = object.tickcount ?? 0;
    message.creationsequence = object.creationsequence ?? 0;
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

  fromJSON(object: any): CNETMsgSpawnGroupUnload {
    return {
      spawngrouphandle: isSet(object.spawngrouphandle) ? Number(object.spawngrouphandle) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      tickcount: isSet(object.tickcount) ? Number(object.tickcount) : 0,
    };
  },

  toJSON(message: CNETMsgSpawnGroupUnload): unknown {
    const obj: any = {};
    message.spawngrouphandle !== undefined && (obj.spawngrouphandle = Math.round(message.spawngrouphandle));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.tickcount !== undefined && (obj.tickcount = Math.round(message.tickcount));
    return obj;
  },

  create(base?: DeepPartial<CNETMsgSpawnGroupUnload>): CNETMsgSpawnGroupUnload {
    return CNETMsgSpawnGroupUnload.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CNETMsgSpawnGroupUnload>): CNETMsgSpawnGroupUnload {
    const message = createBaseCNETMsgSpawnGroupUnload();
    message.spawngrouphandle = object.spawngrouphandle ?? 0;
    message.flags = object.flags ?? 0;
    message.tickcount = object.tickcount ?? 0;
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

  fromJSON(object: any): CNETMsgSpawnGroupLoadCompleted {
    return { spawngrouphandle: isSet(object.spawngrouphandle) ? Number(object.spawngrouphandle) : 0 };
  },

  toJSON(message: CNETMsgSpawnGroupLoadCompleted): unknown {
    const obj: any = {};
    message.spawngrouphandle !== undefined && (obj.spawngrouphandle = Math.round(message.spawngrouphandle));
    return obj;
  },

  create(base?: DeepPartial<CNETMsgSpawnGroupLoadCompleted>): CNETMsgSpawnGroupLoadCompleted {
    return CNETMsgSpawnGroupLoadCompleted.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CNETMsgSpawnGroupLoadCompleted>): CNETMsgSpawnGroupLoadCompleted {
    const message = createBaseCNETMsgSpawnGroupLoadCompleted();
    message.spawngrouphandle = object.spawngrouphandle ?? 0;
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

  fromJSON(object: any): CSVCMsgGameSessionConfiguration {
    return {
      isMultiplayer: isSet(object.isMultiplayer) ? Boolean(object.isMultiplayer) : false,
      isLoadsavegame: isSet(object.isLoadsavegame) ? Boolean(object.isLoadsavegame) : false,
      isBackgroundMap: isSet(object.isBackgroundMap) ? Boolean(object.isBackgroundMap) : false,
      isHeadless: isSet(object.isHeadless) ? Boolean(object.isHeadless) : false,
      minClientLimit: isSet(object.minClientLimit) ? Number(object.minClientLimit) : 0,
      maxClientLimit: isSet(object.maxClientLimit) ? Number(object.maxClientLimit) : 0,
      maxClients: isSet(object.maxClients) ? Number(object.maxClients) : 0,
      tickInterval: isSet(object.tickInterval) ? Number(object.tickInterval) : 0,
      hostname: isSet(object.hostname) ? String(object.hostname) : "",
      savegamename: isSet(object.savegamename) ? String(object.savegamename) : "",
      s1Mapname: isSet(object.s1Mapname) ? String(object.s1Mapname) : "",
      gamemode: isSet(object.gamemode) ? String(object.gamemode) : "",
      serverIpAddress: isSet(object.serverIpAddress) ? String(object.serverIpAddress) : "",
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
      isLocalonly: isSet(object.isLocalonly) ? Boolean(object.isLocalonly) : false,
      noSteamServer: isSet(object.noSteamServer) ? Boolean(object.noSteamServer) : false,
      isTransition: isSet(object.isTransition) ? Boolean(object.isTransition) : false,
      previouslevel: isSet(object.previouslevel) ? String(object.previouslevel) : "",
      landmarkname: isSet(object.landmarkname) ? String(object.landmarkname) : "",
    };
  },

  toJSON(message: CSVCMsgGameSessionConfiguration): unknown {
    const obj: any = {};
    message.isMultiplayer !== undefined && (obj.isMultiplayer = message.isMultiplayer);
    message.isLoadsavegame !== undefined && (obj.isLoadsavegame = message.isLoadsavegame);
    message.isBackgroundMap !== undefined && (obj.isBackgroundMap = message.isBackgroundMap);
    message.isHeadless !== undefined && (obj.isHeadless = message.isHeadless);
    message.minClientLimit !== undefined && (obj.minClientLimit = Math.round(message.minClientLimit));
    message.maxClientLimit !== undefined && (obj.maxClientLimit = Math.round(message.maxClientLimit));
    message.maxClients !== undefined && (obj.maxClients = Math.round(message.maxClients));
    message.tickInterval !== undefined && (obj.tickInterval = Math.round(message.tickInterval));
    message.hostname !== undefined && (obj.hostname = message.hostname);
    message.savegamename !== undefined && (obj.savegamename = message.savegamename);
    message.s1Mapname !== undefined && (obj.s1Mapname = message.s1Mapname);
    message.gamemode !== undefined && (obj.gamemode = message.gamemode);
    message.serverIpAddress !== undefined && (obj.serverIpAddress = message.serverIpAddress);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    message.isLocalonly !== undefined && (obj.isLocalonly = message.isLocalonly);
    message.noSteamServer !== undefined && (obj.noSteamServer = message.noSteamServer);
    message.isTransition !== undefined && (obj.isTransition = message.isTransition);
    message.previouslevel !== undefined && (obj.previouslevel = message.previouslevel);
    message.landmarkname !== undefined && (obj.landmarkname = message.landmarkname);
    return obj;
  },

  create(base?: DeepPartial<CSVCMsgGameSessionConfiguration>): CSVCMsgGameSessionConfiguration {
    return CSVCMsgGameSessionConfiguration.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CSVCMsgGameSessionConfiguration>): CSVCMsgGameSessionConfiguration {
    const message = createBaseCSVCMsgGameSessionConfiguration();
    message.isMultiplayer = object.isMultiplayer ?? false;
    message.isLoadsavegame = object.isLoadsavegame ?? false;
    message.isBackgroundMap = object.isBackgroundMap ?? false;
    message.isHeadless = object.isHeadless ?? false;
    message.minClientLimit = object.minClientLimit ?? 0;
    message.maxClientLimit = object.maxClientLimit ?? 0;
    message.maxClients = object.maxClients ?? 0;
    message.tickInterval = object.tickInterval ?? 0;
    message.hostname = object.hostname ?? "";
    message.savegamename = object.savegamename ?? "";
    message.s1Mapname = object.s1Mapname ?? "";
    message.gamemode = object.gamemode ?? "";
    message.serverIpAddress = object.serverIpAddress ?? "";
    message.data = object.data ?? Buffer.alloc(0);
    message.isLocalonly = object.isLocalonly ?? false;
    message.noSteamServer = object.noSteamServer ?? false;
    message.isTransition = object.isTransition ?? false;
    message.previouslevel = object.previouslevel ?? "";
    message.landmarkname = object.landmarkname ?? "";
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

  fromJSON(object: any): CNETMsgDebugOverlay {
    return {
      etype: isSet(object.etype) ? Number(object.etype) : 0,
      vectors: Array.isArray(object?.vectors) ? object.vectors.map((e: any) => CMsgVector.fromJSON(e)) : [],
      colors: Array.isArray(object?.colors) ? object.colors.map((e: any) => CMsgRGBA.fromJSON(e)) : [],
      dimensions: Array.isArray(object?.dimensions) ? object.dimensions.map((e: any) => Number(e)) : [],
      times: Array.isArray(object?.times) ? object.times.map((e: any) => Number(e)) : [],
      bools: Array.isArray(object?.bools) ? object.bools.map((e: any) => Boolean(e)) : [],
      uint64s: Array.isArray(object?.uint64s) ? object.uint64s.map((e: any) => String(e)) : [],
      strings: Array.isArray(object?.strings) ? object.strings.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CNETMsgDebugOverlay): unknown {
    const obj: any = {};
    message.etype !== undefined && (obj.etype = Math.round(message.etype));
    if (message.vectors) {
      obj.vectors = message.vectors.map((e) => e ? CMsgVector.toJSON(e) : undefined);
    } else {
      obj.vectors = [];
    }
    if (message.colors) {
      obj.colors = message.colors.map((e) => e ? CMsgRGBA.toJSON(e) : undefined);
    } else {
      obj.colors = [];
    }
    if (message.dimensions) {
      obj.dimensions = message.dimensions.map((e) => e);
    } else {
      obj.dimensions = [];
    }
    if (message.times) {
      obj.times = message.times.map((e) => e);
    } else {
      obj.times = [];
    }
    if (message.bools) {
      obj.bools = message.bools.map((e) => e);
    } else {
      obj.bools = [];
    }
    if (message.uint64s) {
      obj.uint64s = message.uint64s.map((e) => e);
    } else {
      obj.uint64s = [];
    }
    if (message.strings) {
      obj.strings = message.strings.map((e) => e);
    } else {
      obj.strings = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CNETMsgDebugOverlay>): CNETMsgDebugOverlay {
    return CNETMsgDebugOverlay.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CNETMsgDebugOverlay>): CNETMsgDebugOverlay {
    const message = createBaseCNETMsgDebugOverlay();
    message.etype = object.etype ?? 0;
    message.vectors = object.vectors?.map((e) => CMsgVector.fromPartial(e)) || [];
    message.colors = object.colors?.map((e) => CMsgRGBA.fromPartial(e)) || [];
    message.dimensions = object.dimensions?.map((e) => e) || [];
    message.times = object.times?.map((e) => e) || [];
    message.bools = object.bools?.map((e) => e) || [];
    message.uint64s = object.uint64s?.map((e) => e) || [];
    message.strings = object.strings?.map((e) => e) || [];
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
