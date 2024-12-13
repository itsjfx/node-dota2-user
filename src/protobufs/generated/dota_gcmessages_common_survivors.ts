// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.4.1
//   protoc               v5.28.3
// source: dota_gcmessages_common_survivors.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export interface CMsgSurvivorsUserData {
  attributeLevels: CMsgSurvivorsUserData_AttributeLevelsEntry[];
  unlockedDifficulty: number;
}

export interface CMsgSurvivorsUserData_AttributeLevelsEntry {
  key: number;
  value: number;
}

export interface CMsgClientToGCSurvivorsPowerUpTelemetryData {
  powerupId: number;
  level: number;
  timeReceived: number;
  timeHeld: number;
  totalDamage: string;
  dps: number;
  hasScepter: number;
}

export interface CMsgClientToGCSurvivorsGameTelemetryData {
  timeSurvived: number;
  playerLevel: number;
  gameResult: number;
  goldEarned: number;
  powerups: CMsgClientToGCSurvivorsPowerUpTelemetryData[];
  difficulty: number;
  metaprogressionLevel: number;
}

export interface CMsgClientToGCSurvivorsGameTelemetryDataResponse {
  response: CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse;
}

export enum CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse {
  k_eInternalError = 0,
  k_eSuccess = 1,
  k_eTooBusy = 2,
  k_eDisabled = 3,
  k_eTimeout = 4,
  k_eNotAllowed = 5,
  k_eInvalidItem = 6,
}

export function cMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponseFromJSON(
  object: any,
): CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse {
  switch (object) {
    case 0:
    case "k_eInternalError":
      return CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse.k_eInternalError;
    case 1:
    case "k_eSuccess":
      return CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse.k_eSuccess;
    case 2:
    case "k_eTooBusy":
      return CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse.k_eTooBusy;
    case 3:
    case "k_eDisabled":
      return CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse.k_eDisabled;
    case 4:
    case "k_eTimeout":
      return CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse.k_eTimeout;
    case 5:
    case "k_eNotAllowed":
      return CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse.k_eNotAllowed;
    case 6:
    case "k_eInvalidItem":
      return CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse.k_eInvalidItem;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse",
      );
  }
}

export function cMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponseToJSON(
  object: CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse,
): string {
  switch (object) {
    case CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse.k_eInternalError:
      return "k_eInternalError";
    case CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse.k_eSuccess:
      return "k_eSuccess";
    case CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse.k_eTooBusy:
      return "k_eTooBusy";
    case CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse.k_eDisabled:
      return "k_eDisabled";
    case CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse.k_eTimeout:
      return "k_eTimeout";
    case CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse.k_eNotAllowed:
      return "k_eNotAllowed";
    case CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse.k_eInvalidItem:
      return "k_eInvalidItem";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse",
      );
  }
}

function createBaseCMsgSurvivorsUserData(): CMsgSurvivorsUserData {
  return { attributeLevels: [], unlockedDifficulty: 0 };
}

export const CMsgSurvivorsUserData: MessageFns<CMsgSurvivorsUserData> = {
  encode(message: CMsgSurvivorsUserData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.attributeLevels) {
      CMsgSurvivorsUserData_AttributeLevelsEntry.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.unlockedDifficulty !== 0) {
      writer.uint32(16).uint32(message.unlockedDifficulty);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CMsgSurvivorsUserData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSurvivorsUserData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.attributeLevels.push(CMsgSurvivorsUserData_AttributeLevelsEntry.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.unlockedDifficulty = reader.uint32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSurvivorsUserData {
    return {
      attributeLevels: globalThis.Array.isArray(object?.attributeLevels)
        ? object.attributeLevels.map((e: any) => CMsgSurvivorsUserData_AttributeLevelsEntry.fromJSON(e))
        : [],
      unlockedDifficulty: isSet(object.unlockedDifficulty) ? globalThis.Number(object.unlockedDifficulty) : 0,
    };
  },

  toJSON(message: CMsgSurvivorsUserData): unknown {
    const obj: any = {};
    if (message.attributeLevels?.length) {
      obj.attributeLevels = message.attributeLevels.map((e) => CMsgSurvivorsUserData_AttributeLevelsEntry.toJSON(e));
    }
    if (message.unlockedDifficulty !== 0) {
      obj.unlockedDifficulty = Math.round(message.unlockedDifficulty);
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgSurvivorsUserData>): CMsgSurvivorsUserData {
    return CMsgSurvivorsUserData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CMsgSurvivorsUserData>): CMsgSurvivorsUserData {
    const message = createBaseCMsgSurvivorsUserData();
    message.attributeLevels =
      object.attributeLevels?.map((e) => CMsgSurvivorsUserData_AttributeLevelsEntry.fromPartial(e)) || [];
    message.unlockedDifficulty = object.unlockedDifficulty ?? 0;
    return message;
  },
};

function createBaseCMsgSurvivorsUserData_AttributeLevelsEntry(): CMsgSurvivorsUserData_AttributeLevelsEntry {
  return { key: 0, value: 0 };
}

export const CMsgSurvivorsUserData_AttributeLevelsEntry: MessageFns<CMsgSurvivorsUserData_AttributeLevelsEntry> = {
  encode(message: CMsgSurvivorsUserData_AttributeLevelsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CMsgSurvivorsUserData_AttributeLevelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSurvivorsUserData_AttributeLevelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.uint32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSurvivorsUserData_AttributeLevelsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: CMsgSurvivorsUserData_AttributeLevelsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgSurvivorsUserData_AttributeLevelsEntry>): CMsgSurvivorsUserData_AttributeLevelsEntry {
    return CMsgSurvivorsUserData_AttributeLevelsEntry.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<CMsgSurvivorsUserData_AttributeLevelsEntry>,
  ): CMsgSurvivorsUserData_AttributeLevelsEntry {
    const message = createBaseCMsgSurvivorsUserData_AttributeLevelsEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCSurvivorsPowerUpTelemetryData(): CMsgClientToGCSurvivorsPowerUpTelemetryData {
  return { powerupId: 0, level: 0, timeReceived: 0, timeHeld: 0, totalDamage: "0", dps: 0, hasScepter: 0 };
}

export const CMsgClientToGCSurvivorsPowerUpTelemetryData: MessageFns<CMsgClientToGCSurvivorsPowerUpTelemetryData> = {
  encode(
    message: CMsgClientToGCSurvivorsPowerUpTelemetryData,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.powerupId !== 0) {
      writer.uint32(8).uint32(message.powerupId);
    }
    if (message.level !== 0) {
      writer.uint32(16).uint32(message.level);
    }
    if (message.timeReceived !== 0) {
      writer.uint32(24).uint32(message.timeReceived);
    }
    if (message.timeHeld !== 0) {
      writer.uint32(32).uint32(message.timeHeld);
    }
    if (message.totalDamage !== "0") {
      writer.uint32(40).uint64(message.totalDamage);
    }
    if (message.dps !== 0) {
      writer.uint32(48).uint32(message.dps);
    }
    if (message.hasScepter !== 0) {
      writer.uint32(56).uint32(message.hasScepter);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CMsgClientToGCSurvivorsPowerUpTelemetryData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSurvivorsPowerUpTelemetryData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.powerupId = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.level = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.timeReceived = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.timeHeld = reader.uint32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.totalDamage = reader.uint64().toString();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.dps = reader.uint32();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.hasScepter = reader.uint32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCSurvivorsPowerUpTelemetryData {
    return {
      powerupId: isSet(object.powerupId) ? globalThis.Number(object.powerupId) : 0,
      level: isSet(object.level) ? globalThis.Number(object.level) : 0,
      timeReceived: isSet(object.timeReceived) ? globalThis.Number(object.timeReceived) : 0,
      timeHeld: isSet(object.timeHeld) ? globalThis.Number(object.timeHeld) : 0,
      totalDamage: isSet(object.totalDamage) ? globalThis.String(object.totalDamage) : "0",
      dps: isSet(object.dps) ? globalThis.Number(object.dps) : 0,
      hasScepter: isSet(object.hasScepter) ? globalThis.Number(object.hasScepter) : 0,
    };
  },

  toJSON(message: CMsgClientToGCSurvivorsPowerUpTelemetryData): unknown {
    const obj: any = {};
    if (message.powerupId !== 0) {
      obj.powerupId = Math.round(message.powerupId);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (message.timeReceived !== 0) {
      obj.timeReceived = Math.round(message.timeReceived);
    }
    if (message.timeHeld !== 0) {
      obj.timeHeld = Math.round(message.timeHeld);
    }
    if (message.totalDamage !== "0") {
      obj.totalDamage = message.totalDamage;
    }
    if (message.dps !== 0) {
      obj.dps = Math.round(message.dps);
    }
    if (message.hasScepter !== 0) {
      obj.hasScepter = Math.round(message.hasScepter);
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCSurvivorsPowerUpTelemetryData>): CMsgClientToGCSurvivorsPowerUpTelemetryData {
    return CMsgClientToGCSurvivorsPowerUpTelemetryData.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<CMsgClientToGCSurvivorsPowerUpTelemetryData>,
  ): CMsgClientToGCSurvivorsPowerUpTelemetryData {
    const message = createBaseCMsgClientToGCSurvivorsPowerUpTelemetryData();
    message.powerupId = object.powerupId ?? 0;
    message.level = object.level ?? 0;
    message.timeReceived = object.timeReceived ?? 0;
    message.timeHeld = object.timeHeld ?? 0;
    message.totalDamage = object.totalDamage ?? "0";
    message.dps = object.dps ?? 0;
    message.hasScepter = object.hasScepter ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCSurvivorsGameTelemetryData(): CMsgClientToGCSurvivorsGameTelemetryData {
  return {
    timeSurvived: 0,
    playerLevel: 0,
    gameResult: 0,
    goldEarned: 0,
    powerups: [],
    difficulty: 0,
    metaprogressionLevel: 0,
  };
}

export const CMsgClientToGCSurvivorsGameTelemetryData: MessageFns<CMsgClientToGCSurvivorsGameTelemetryData> = {
  encode(message: CMsgClientToGCSurvivorsGameTelemetryData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.timeSurvived !== 0) {
      writer.uint32(8).uint32(message.timeSurvived);
    }
    if (message.playerLevel !== 0) {
      writer.uint32(16).uint32(message.playerLevel);
    }
    if (message.gameResult !== 0) {
      writer.uint32(24).uint32(message.gameResult);
    }
    if (message.goldEarned !== 0) {
      writer.uint32(32).uint32(message.goldEarned);
    }
    for (const v of message.powerups) {
      CMsgClientToGCSurvivorsPowerUpTelemetryData.encode(v!, writer.uint32(42).fork()).join();
    }
    if (message.difficulty !== 0) {
      writer.uint32(48).uint32(message.difficulty);
    }
    if (message.metaprogressionLevel !== 0) {
      writer.uint32(56).uint32(message.metaprogressionLevel);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CMsgClientToGCSurvivorsGameTelemetryData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSurvivorsGameTelemetryData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.timeSurvived = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.playerLevel = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.gameResult = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.goldEarned = reader.uint32();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.powerups.push(CMsgClientToGCSurvivorsPowerUpTelemetryData.decode(reader, reader.uint32()));
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.difficulty = reader.uint32();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.metaprogressionLevel = reader.uint32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCSurvivorsGameTelemetryData {
    return {
      timeSurvived: isSet(object.timeSurvived) ? globalThis.Number(object.timeSurvived) : 0,
      playerLevel: isSet(object.playerLevel) ? globalThis.Number(object.playerLevel) : 0,
      gameResult: isSet(object.gameResult) ? globalThis.Number(object.gameResult) : 0,
      goldEarned: isSet(object.goldEarned) ? globalThis.Number(object.goldEarned) : 0,
      powerups: globalThis.Array.isArray(object?.powerups)
        ? object.powerups.map((e: any) => CMsgClientToGCSurvivorsPowerUpTelemetryData.fromJSON(e))
        : [],
      difficulty: isSet(object.difficulty) ? globalThis.Number(object.difficulty) : 0,
      metaprogressionLevel: isSet(object.metaprogressionLevel) ? globalThis.Number(object.metaprogressionLevel) : 0,
    };
  },

  toJSON(message: CMsgClientToGCSurvivorsGameTelemetryData): unknown {
    const obj: any = {};
    if (message.timeSurvived !== 0) {
      obj.timeSurvived = Math.round(message.timeSurvived);
    }
    if (message.playerLevel !== 0) {
      obj.playerLevel = Math.round(message.playerLevel);
    }
    if (message.gameResult !== 0) {
      obj.gameResult = Math.round(message.gameResult);
    }
    if (message.goldEarned !== 0) {
      obj.goldEarned = Math.round(message.goldEarned);
    }
    if (message.powerups?.length) {
      obj.powerups = message.powerups.map((e) => CMsgClientToGCSurvivorsPowerUpTelemetryData.toJSON(e));
    }
    if (message.difficulty !== 0) {
      obj.difficulty = Math.round(message.difficulty);
    }
    if (message.metaprogressionLevel !== 0) {
      obj.metaprogressionLevel = Math.round(message.metaprogressionLevel);
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgClientToGCSurvivorsGameTelemetryData>): CMsgClientToGCSurvivorsGameTelemetryData {
    return CMsgClientToGCSurvivorsGameTelemetryData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CMsgClientToGCSurvivorsGameTelemetryData>): CMsgClientToGCSurvivorsGameTelemetryData {
    const message = createBaseCMsgClientToGCSurvivorsGameTelemetryData();
    message.timeSurvived = object.timeSurvived ?? 0;
    message.playerLevel = object.playerLevel ?? 0;
    message.gameResult = object.gameResult ?? 0;
    message.goldEarned = object.goldEarned ?? 0;
    message.powerups = object.powerups?.map((e) => CMsgClientToGCSurvivorsPowerUpTelemetryData.fromPartial(e)) || [];
    message.difficulty = object.difficulty ?? 0;
    message.metaprogressionLevel = object.metaprogressionLevel ?? 0;
    return message;
  },
};

function createBaseCMsgClientToGCSurvivorsGameTelemetryDataResponse(): CMsgClientToGCSurvivorsGameTelemetryDataResponse {
  return { response: 0 };
}

export const CMsgClientToGCSurvivorsGameTelemetryDataResponse: MessageFns<
  CMsgClientToGCSurvivorsGameTelemetryDataResponse
> = {
  encode(
    message: CMsgClientToGCSurvivorsGameTelemetryDataResponse,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CMsgClientToGCSurvivorsGameTelemetryDataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientToGCSurvivorsGameTelemetryDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.response = reader.int32() as any;
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientToGCSurvivorsGameTelemetryDataResponse {
    return {
      response: isSet(object.response)
        ? cMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponseFromJSON(object.response)
        : 0,
    };
  },

  toJSON(message: CMsgClientToGCSurvivorsGameTelemetryDataResponse): unknown {
    const obj: any = {};
    if (message.response !== 0) {
      obj.response = cMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponseToJSON(message.response);
    }
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientToGCSurvivorsGameTelemetryDataResponse>,
  ): CMsgClientToGCSurvivorsGameTelemetryDataResponse {
    return CMsgClientToGCSurvivorsGameTelemetryDataResponse.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<CMsgClientToGCSurvivorsGameTelemetryDataResponse>,
  ): CMsgClientToGCSurvivorsGameTelemetryDataResponse {
    const message = createBaseCMsgClientToGCSurvivorsGameTelemetryDataResponse();
    message.response = object.response ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}