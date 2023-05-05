/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgBotWorldState } from "./dota_gcmessages_common_bot_script";

export enum MLBotMessageId {
  mlbot_MatchMetadata = 1,
  mlbot_TickBoundary = 2,
  mlbot_TeamState_Radiant = 3,
  mlbot_TeamState_Radiant_Delta = 4,
  mlbot_TeamState_Dire = 5,
  mlbot_TeamState_Dire_Delta = 6,
  mlbot_PlayerCommand = 7,
  mlbot_PlayerOrder = 8,
}

export function mLBotMessageIdFromJSON(object: any): MLBotMessageId {
  switch (object) {
    case 1:
    case "mlbot_MatchMetadata":
      return MLBotMessageId.mlbot_MatchMetadata;
    case 2:
    case "mlbot_TickBoundary":
      return MLBotMessageId.mlbot_TickBoundary;
    case 3:
    case "mlbot_TeamState_Radiant":
      return MLBotMessageId.mlbot_TeamState_Radiant;
    case 4:
    case "mlbot_TeamState_Radiant_Delta":
      return MLBotMessageId.mlbot_TeamState_Radiant_Delta;
    case 5:
    case "mlbot_TeamState_Dire":
      return MLBotMessageId.mlbot_TeamState_Dire;
    case 6:
    case "mlbot_TeamState_Dire_Delta":
      return MLBotMessageId.mlbot_TeamState_Dire_Delta;
    case 7:
    case "mlbot_PlayerCommand":
      return MLBotMessageId.mlbot_PlayerCommand;
    case 8:
    case "mlbot_PlayerOrder":
      return MLBotMessageId.mlbot_PlayerOrder;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum MLBotMessageId");
  }
}

export function mLBotMessageIdToJSON(object: MLBotMessageId): string {
  switch (object) {
    case MLBotMessageId.mlbot_MatchMetadata:
      return "mlbot_MatchMetadata";
    case MLBotMessageId.mlbot_TickBoundary:
      return "mlbot_TickBoundary";
    case MLBotMessageId.mlbot_TeamState_Radiant:
      return "mlbot_TeamState_Radiant";
    case MLBotMessageId.mlbot_TeamState_Radiant_Delta:
      return "mlbot_TeamState_Radiant_Delta";
    case MLBotMessageId.mlbot_TeamState_Dire:
      return "mlbot_TeamState_Dire";
    case MLBotMessageId.mlbot_TeamState_Dire_Delta:
      return "mlbot_TeamState_Dire_Delta";
    case MLBotMessageId.mlbot_PlayerCommand:
      return "mlbot_PlayerCommand";
    case MLBotMessageId.mlbot_PlayerOrder:
      return "mlbot_PlayerOrder";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum MLBotMessageId");
  }
}

export interface CMsgMLBotMatchMetadata {
  matchId: string;
  lobbyId: string;
  lobbyType: number;
  gameMode: number;
  players: CMsgMLBotMatchMetadata_Player[];
}

export interface CMsgMLBotMatchMetadata_Player {
  playerId: number;
  teamId: number;
  heroId: number;
  rank: number;
}

export interface CMsgMLBotTickBoundary {
  tickNumber: number;
}

export interface CMsgMLBotPlayerOrder {
  playerId: number;
  teamId: number;
  orderType: number;
  selectedUnitHandles: number[];
  targetIndex: number;
  targetHandle: number;
  abilityIndex: number;
  abilityHandle: number;
  posX: number;
  posY: number;
  posZ: number;
  queue: boolean;
}

export interface CMsgMLBotTeamInference {
  teamId: number;
  botPlayerIds: number[];
  worldState: CMsgBotWorldState | undefined;
}

export interface CMsgMLBotTeamInferenceResponse {
  orders: CMsgMLBotPlayerOrder[];
}

export interface CMsgMLBotTeamInferenceList {
  messages: CMsgMLBotTeamInference[];
}

function createBaseCMsgMLBotMatchMetadata(): CMsgMLBotMatchMetadata {
  return { matchId: "0", lobbyId: "0", lobbyType: 0, gameMode: 0, players: [] };
}

export const CMsgMLBotMatchMetadata = {
  encode(message: CMsgMLBotMatchMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.lobbyId !== "0") {
      writer.uint32(16).uint64(message.lobbyId);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(24).int32(message.lobbyType);
    }
    if (message.gameMode !== 0) {
      writer.uint32(32).uint32(message.gameMode);
    }
    for (const v of message.players) {
      CMsgMLBotMatchMetadata_Player.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMLBotMatchMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMLBotMatchMetadata();
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

          message.lobbyId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.lobbyType = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.gameMode = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.players.push(CMsgMLBotMatchMetadata_Player.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgMLBotMatchMetadata {
    return {
      matchId: isSet(object.matchId) ? String(object.matchId) : "0",
      lobbyId: isSet(object.lobbyId) ? String(object.lobbyId) : "0",
      lobbyType: isSet(object.lobbyType) ? Number(object.lobbyType) : 0,
      gameMode: isSet(object.gameMode) ? Number(object.gameMode) : 0,
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgMLBotMatchMetadata_Player.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgMLBotMatchMetadata): unknown {
    const obj: any = {};
    message.matchId !== undefined && (obj.matchId = message.matchId);
    message.lobbyId !== undefined && (obj.lobbyId = message.lobbyId);
    message.lobbyType !== undefined && (obj.lobbyType = Math.round(message.lobbyType));
    message.gameMode !== undefined && (obj.gameMode = Math.round(message.gameMode));
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgMLBotMatchMetadata_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    return obj;
  },
};

function createBaseCMsgMLBotMatchMetadata_Player(): CMsgMLBotMatchMetadata_Player {
  return { playerId: 0, teamId: 0, heroId: 0, rank: 0 };
}

export const CMsgMLBotMatchMetadata_Player = {
  encode(message: CMsgMLBotMatchMetadata_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).int32(message.teamId);
    }
    if (message.heroId !== 0) {
      writer.uint32(24).int32(message.heroId);
    }
    if (message.rank !== 0) {
      writer.uint32(32).int32(message.rank);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMLBotMatchMetadata_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMLBotMatchMetadata_Player();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.teamId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.heroId = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.rank = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgMLBotMatchMetadata_Player {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      heroId: isSet(object.heroId) ? Number(object.heroId) : 0,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
    };
  },

  toJSON(message: CMsgMLBotMatchMetadata_Player): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.heroId !== undefined && (obj.heroId = Math.round(message.heroId));
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    return obj;
  },
};

function createBaseCMsgMLBotTickBoundary(): CMsgMLBotTickBoundary {
  return { tickNumber: 0 };
}

export const CMsgMLBotTickBoundary = {
  encode(message: CMsgMLBotTickBoundary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tickNumber !== 0) {
      writer.uint32(8).uint32(message.tickNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMLBotTickBoundary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMLBotTickBoundary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tickNumber = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgMLBotTickBoundary {
    return { tickNumber: isSet(object.tickNumber) ? Number(object.tickNumber) : 0 };
  },

  toJSON(message: CMsgMLBotTickBoundary): unknown {
    const obj: any = {};
    message.tickNumber !== undefined && (obj.tickNumber = Math.round(message.tickNumber));
    return obj;
  },
};

function createBaseCMsgMLBotPlayerOrder(): CMsgMLBotPlayerOrder {
  return {
    playerId: 0,
    teamId: 0,
    orderType: 0,
    selectedUnitHandles: [],
    targetIndex: 0,
    targetHandle: 0,
    abilityIndex: 0,
    abilityHandle: 0,
    posX: 0,
    posY: 0,
    posZ: 0,
    queue: false,
  };
}

export const CMsgMLBotPlayerOrder = {
  encode(message: CMsgMLBotPlayerOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).int32(message.teamId);
    }
    if (message.orderType !== 0) {
      writer.uint32(24).int32(message.orderType);
    }
    writer.uint32(34).fork();
    for (const v of message.selectedUnitHandles) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.targetIndex !== 0) {
      writer.uint32(40).int32(message.targetIndex);
    }
    if (message.targetHandle !== 0) {
      writer.uint32(48).uint32(message.targetHandle);
    }
    if (message.abilityIndex !== 0) {
      writer.uint32(56).int32(message.abilityIndex);
    }
    if (message.abilityHandle !== 0) {
      writer.uint32(64).uint32(message.abilityHandle);
    }
    if (message.posX !== 0) {
      writer.uint32(77).float(message.posX);
    }
    if (message.posY !== 0) {
      writer.uint32(85).float(message.posY);
    }
    if (message.posZ !== 0) {
      writer.uint32(93).float(message.posZ);
    }
    if (message.queue === true) {
      writer.uint32(96).bool(message.queue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMLBotPlayerOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMLBotPlayerOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playerId = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.teamId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.orderType = reader.int32();
          continue;
        case 4:
          if (tag == 32) {
            message.selectedUnitHandles.push(reader.uint32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.selectedUnitHandles.push(reader.uint32());
            }

            continue;
          }

          break;
        case 5:
          if (tag != 40) {
            break;
          }

          message.targetIndex = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.targetHandle = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.abilityIndex = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.abilityHandle = reader.uint32();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.posX = reader.float();
          continue;
        case 10:
          if (tag != 85) {
            break;
          }

          message.posY = reader.float();
          continue;
        case 11:
          if (tag != 93) {
            break;
          }

          message.posZ = reader.float();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.queue = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgMLBotPlayerOrder {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      orderType: isSet(object.orderType) ? Number(object.orderType) : 0,
      selectedUnitHandles: Array.isArray(object?.selectedUnitHandles)
        ? object.selectedUnitHandles.map((e: any) => Number(e))
        : [],
      targetIndex: isSet(object.targetIndex) ? Number(object.targetIndex) : 0,
      targetHandle: isSet(object.targetHandle) ? Number(object.targetHandle) : 0,
      abilityIndex: isSet(object.abilityIndex) ? Number(object.abilityIndex) : 0,
      abilityHandle: isSet(object.abilityHandle) ? Number(object.abilityHandle) : 0,
      posX: isSet(object.posX) ? Number(object.posX) : 0,
      posY: isSet(object.posY) ? Number(object.posY) : 0,
      posZ: isSet(object.posZ) ? Number(object.posZ) : 0,
      queue: isSet(object.queue) ? Boolean(object.queue) : false,
    };
  },

  toJSON(message: CMsgMLBotPlayerOrder): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = Math.round(message.playerId));
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    message.orderType !== undefined && (obj.orderType = Math.round(message.orderType));
    if (message.selectedUnitHandles) {
      obj.selectedUnitHandles = message.selectedUnitHandles.map((e) => Math.round(e));
    } else {
      obj.selectedUnitHandles = [];
    }
    message.targetIndex !== undefined && (obj.targetIndex = Math.round(message.targetIndex));
    message.targetHandle !== undefined && (obj.targetHandle = Math.round(message.targetHandle));
    message.abilityIndex !== undefined && (obj.abilityIndex = Math.round(message.abilityIndex));
    message.abilityHandle !== undefined && (obj.abilityHandle = Math.round(message.abilityHandle));
    message.posX !== undefined && (obj.posX = message.posX);
    message.posY !== undefined && (obj.posY = message.posY);
    message.posZ !== undefined && (obj.posZ = message.posZ);
    message.queue !== undefined && (obj.queue = message.queue);
    return obj;
  },
};

function createBaseCMsgMLBotTeamInference(): CMsgMLBotTeamInference {
  return { teamId: 0, botPlayerIds: [], worldState: undefined };
}

export const CMsgMLBotTeamInference = {
  encode(message: CMsgMLBotTeamInference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).int32(message.teamId);
    }
    writer.uint32(18).fork();
    for (const v of message.botPlayerIds) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.worldState !== undefined) {
      CMsgBotWorldState.encode(message.worldState, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMLBotTeamInference {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMLBotTeamInference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.teamId = reader.int32();
          continue;
        case 2:
          if (tag == 16) {
            message.botPlayerIds.push(reader.int32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.botPlayerIds.push(reader.int32());
            }

            continue;
          }

          break;
        case 3:
          if (tag != 26) {
            break;
          }

          message.worldState = CMsgBotWorldState.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgMLBotTeamInference {
    return {
      teamId: isSet(object.teamId) ? Number(object.teamId) : 0,
      botPlayerIds: Array.isArray(object?.botPlayerIds) ? object.botPlayerIds.map((e: any) => Number(e)) : [],
      worldState: isSet(object.worldState) ? CMsgBotWorldState.fromJSON(object.worldState) : undefined,
    };
  },

  toJSON(message: CMsgMLBotTeamInference): unknown {
    const obj: any = {};
    message.teamId !== undefined && (obj.teamId = Math.round(message.teamId));
    if (message.botPlayerIds) {
      obj.botPlayerIds = message.botPlayerIds.map((e) => Math.round(e));
    } else {
      obj.botPlayerIds = [];
    }
    message.worldState !== undefined &&
      (obj.worldState = message.worldState ? CMsgBotWorldState.toJSON(message.worldState) : undefined);
    return obj;
  },
};

function createBaseCMsgMLBotTeamInferenceResponse(): CMsgMLBotTeamInferenceResponse {
  return { orders: [] };
}

export const CMsgMLBotTeamInferenceResponse = {
  encode(message: CMsgMLBotTeamInferenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      CMsgMLBotPlayerOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMLBotTeamInferenceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMLBotTeamInferenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.orders.push(CMsgMLBotPlayerOrder.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgMLBotTeamInferenceResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => CMsgMLBotPlayerOrder.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgMLBotTeamInferenceResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => e ? CMsgMLBotPlayerOrder.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
};

function createBaseCMsgMLBotTeamInferenceList(): CMsgMLBotTeamInferenceList {
  return { messages: [] };
}

export const CMsgMLBotTeamInferenceList = {
  encode(message: CMsgMLBotTeamInferenceList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      CMsgMLBotTeamInference.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMLBotTeamInferenceList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMLBotTeamInferenceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.messages.push(CMsgMLBotTeamInference.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgMLBotTeamInferenceList {
    return {
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => CMsgMLBotTeamInference.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgMLBotTeamInferenceList): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? CMsgMLBotTeamInference.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
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
