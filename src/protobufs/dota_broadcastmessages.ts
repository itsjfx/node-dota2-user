/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export enum EDotaBroadcastMessages {
  DOTA_BM_LANLobbyRequest = 1,
  DOTA_BM_LANLobbyReply = 2,
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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
