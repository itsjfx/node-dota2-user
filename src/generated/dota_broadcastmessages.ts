/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export enum EDotaBroadcastMessages {
  DOTA_BM_LANLobbyRequest = 1,
  DOTA_BM_LANLobbyReply = 2,
}

export function eDotaBroadcastMessagesFromJSON(object: any): EDotaBroadcastMessages {
  switch (object) {
    case 1:
    case "DOTA_BM_LANLobbyRequest":
      return EDotaBroadcastMessages.DOTA_BM_LANLobbyRequest;
    case 2:
    case "DOTA_BM_LANLobbyReply":
      return EDotaBroadcastMessages.DOTA_BM_LANLobbyReply;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDotaBroadcastMessages");
  }
}

export function eDotaBroadcastMessagesToJSON(object: EDotaBroadcastMessages): string {
  switch (object) {
    case EDotaBroadcastMessages.DOTA_BM_LANLobbyRequest:
      return "DOTA_BM_LANLobbyRequest";
    case EDotaBroadcastMessages.DOTA_BM_LANLobbyReply:
      return "DOTA_BM_LANLobbyReply";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum EDotaBroadcastMessages");
  }
}

export interface CDOTABroadcastMsg {
  type: EDotaBroadcastMessages;
  msg: Buffer;
}

export interface CDOTABroadcastMsgLANLobbyRequest {
}

export interface CDOTABroadcastMsgLANLobbyReply {
  id: string;
  tournamentId: number;
  tournamentGameId: number;
  members: CDOTABroadcastMsgLANLobbyReply_CLobbyMember[];
  requiresPassKey: boolean;
  leaderAccountId: number;
  gameMode: number;
  name: string;
  players: number;
}

export interface CDOTABroadcastMsgLANLobbyReply_CLobbyMember {
  accountId: number;
  playerName: string;
}

function createBaseCDOTABroadcastMsg(): CDOTABroadcastMsg {
  return { type: 1, msg: Buffer.alloc(0) };
}

export const CDOTABroadcastMsg = {
  encode(message: CDOTABroadcastMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 1) {
      writer.uint32(8).int32(message.type);
    }
    if (message.msg.length !== 0) {
      writer.uint32(18).bytes(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTABroadcastMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTABroadcastMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.msg = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTABroadcastMsg {
    return {
      type: isSet(object.type) ? eDotaBroadcastMessagesFromJSON(object.type) : 1,
      msg: isSet(object.msg) ? Buffer.from(bytesFromBase64(object.msg)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CDOTABroadcastMsg): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = eDotaBroadcastMessagesToJSON(message.type));
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : Buffer.alloc(0)));
    return obj;
  },
};

function createBaseCDOTABroadcastMsgLANLobbyRequest(): CDOTABroadcastMsgLANLobbyRequest {
  return {};
}

export const CDOTABroadcastMsgLANLobbyRequest = {
  encode(_: CDOTABroadcastMsgLANLobbyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTABroadcastMsgLANLobbyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTABroadcastMsgLANLobbyRequest();
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

  fromJSON(_: any): CDOTABroadcastMsgLANLobbyRequest {
    return {};
  },

  toJSON(_: CDOTABroadcastMsgLANLobbyRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseCDOTABroadcastMsgLANLobbyReply(): CDOTABroadcastMsgLANLobbyReply {
  return {
    id: "0",
    tournamentId: 0,
    tournamentGameId: 0,
    members: [],
    requiresPassKey: false,
    leaderAccountId: 0,
    gameMode: 0,
    name: "",
    players: 0,
  };
}

export const CDOTABroadcastMsgLANLobbyReply = {
  encode(message: CDOTABroadcastMsgLANLobbyReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.tournamentId !== 0) {
      writer.uint32(16).uint32(message.tournamentId);
    }
    if (message.tournamentGameId !== 0) {
      writer.uint32(24).uint32(message.tournamentGameId);
    }
    for (const v of message.members) {
      CDOTABroadcastMsgLANLobbyReply_CLobbyMember.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.requiresPassKey === true) {
      writer.uint32(40).bool(message.requiresPassKey);
    }
    if (message.leaderAccountId !== 0) {
      writer.uint32(48).uint32(message.leaderAccountId);
    }
    if (message.gameMode !== 0) {
      writer.uint32(56).uint32(message.gameMode);
    }
    if (message.name !== "") {
      writer.uint32(66).string(message.name);
    }
    if (message.players !== 0) {
      writer.uint32(72).uint32(message.players);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTABroadcastMsgLANLobbyReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTABroadcastMsgLANLobbyReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.tournamentId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.tournamentGameId = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.members.push(CDOTABroadcastMsgLANLobbyReply_CLobbyMember.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.requiresPassKey = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.leaderAccountId = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.gameMode = reader.uint32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.name = reader.string();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.players = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTABroadcastMsgLANLobbyReply {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
      tournamentId: isSet(object.tournamentId) ? Number(object.tournamentId) : 0,
      tournamentGameId: isSet(object.tournamentGameId) ? Number(object.tournamentGameId) : 0,
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => CDOTABroadcastMsgLANLobbyReply_CLobbyMember.fromJSON(e))
        : [],
      requiresPassKey: isSet(object.requiresPassKey) ? Boolean(object.requiresPassKey) : false,
      leaderAccountId: isSet(object.leaderAccountId) ? Number(object.leaderAccountId) : 0,
      gameMode: isSet(object.gameMode) ? Number(object.gameMode) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      players: isSet(object.players) ? Number(object.players) : 0,
    };
  },

  toJSON(message: CDOTABroadcastMsgLANLobbyReply): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.tournamentId !== undefined && (obj.tournamentId = Math.round(message.tournamentId));
    message.tournamentGameId !== undefined && (obj.tournamentGameId = Math.round(message.tournamentGameId));
    if (message.members) {
      obj.members = message.members.map((e) => e ? CDOTABroadcastMsgLANLobbyReply_CLobbyMember.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.requiresPassKey !== undefined && (obj.requiresPassKey = message.requiresPassKey);
    message.leaderAccountId !== undefined && (obj.leaderAccountId = Math.round(message.leaderAccountId));
    message.gameMode !== undefined && (obj.gameMode = Math.round(message.gameMode));
    message.name !== undefined && (obj.name = message.name);
    message.players !== undefined && (obj.players = Math.round(message.players));
    return obj;
  },
};

function createBaseCDOTABroadcastMsgLANLobbyReply_CLobbyMember(): CDOTABroadcastMsgLANLobbyReply_CLobbyMember {
  return { accountId: 0, playerName: "" };
}

export const CDOTABroadcastMsgLANLobbyReply_CLobbyMember = {
  encode(message: CDOTABroadcastMsgLANLobbyReply_CLobbyMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.playerName !== "") {
      writer.uint32(18).string(message.playerName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDOTABroadcastMsgLANLobbyReply_CLobbyMember {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDOTABroadcastMsgLANLobbyReply_CLobbyMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.playerName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDOTABroadcastMsgLANLobbyReply_CLobbyMember {
    return {
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      playerName: isSet(object.playerName) ? String(object.playerName) : "",
    };
  },

  toJSON(message: CDOTABroadcastMsgLANLobbyReply_CLobbyMember): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.playerName !== undefined && (obj.playerName = message.playerName);
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
