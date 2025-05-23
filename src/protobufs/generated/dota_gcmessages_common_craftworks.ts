// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v6.30.1
// source: dota_gcmessages_common_craftworks.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export enum ECraftworksAuditAction {
  k_eInvalid = 0,
  k_eRecipeCrafted = 1,
  k_eMatchRewards = 2,
  k_eMatchRewardsTurbo = 3,
}

export function eCraftworksAuditActionFromJSON(object: any): ECraftworksAuditAction {
  switch (object) {
    case 0:
    case "k_eInvalid":
      return ECraftworksAuditAction.k_eInvalid;
    case 1:
    case "k_eRecipeCrafted":
      return ECraftworksAuditAction.k_eRecipeCrafted;
    case 2:
    case "k_eMatchRewards":
      return ECraftworksAuditAction.k_eMatchRewards;
    case 3:
    case "k_eMatchRewardsTurbo":
      return ECraftworksAuditAction.k_eMatchRewardsTurbo;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ECraftworksAuditAction");
  }
}

export function eCraftworksAuditActionToJSON(object: ECraftworksAuditAction): string {
  switch (object) {
    case ECraftworksAuditAction.k_eInvalid:
      return "k_eInvalid";
    case ECraftworksAuditAction.k_eRecipeCrafted:
      return "k_eRecipeCrafted";
    case ECraftworksAuditAction.k_eMatchRewards:
      return "k_eMatchRewards";
    case ECraftworksAuditAction.k_eMatchRewardsTurbo:
      return "k_eMatchRewardsTurbo";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ECraftworksAuditAction");
  }
}

export interface CMsgCraftworksComponents {
  componentQuantities: CMsgCraftworksComponents_ComponentQuantitiesEntry[];
}

export interface CMsgCraftworksComponents_ComponentQuantitiesEntry {
  key: number;
  value: number;
}

export interface CMsgCraftworksQuestReward {
  questId: number;
  rewardComponents: CMsgCraftworksComponents | undefined;
  statValue: number;
}

function createBaseCMsgCraftworksComponents(): CMsgCraftworksComponents {
  return { componentQuantities: [] };
}

export const CMsgCraftworksComponents: MessageFns<CMsgCraftworksComponents> = {
  encode(message: CMsgCraftworksComponents, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.componentQuantities) {
      CMsgCraftworksComponents_ComponentQuantitiesEntry.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CMsgCraftworksComponents {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCraftworksComponents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.componentQuantities.push(
            CMsgCraftworksComponents_ComponentQuantitiesEntry.decode(reader, reader.uint32()),
          );
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

  fromJSON(object: any): CMsgCraftworksComponents {
    return {
      componentQuantities: globalThis.Array.isArray(object?.componentQuantities)
        ? object.componentQuantities.map((e: any) => CMsgCraftworksComponents_ComponentQuantitiesEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgCraftworksComponents): unknown {
    const obj: any = {};
    if (message.componentQuantities?.length) {
      obj.componentQuantities = message.componentQuantities.map((e) =>
        CMsgCraftworksComponents_ComponentQuantitiesEntry.toJSON(e)
      );
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgCraftworksComponents>): CMsgCraftworksComponents {
    return CMsgCraftworksComponents.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CMsgCraftworksComponents>): CMsgCraftworksComponents {
    const message = createBaseCMsgCraftworksComponents();
    message.componentQuantities =
      object.componentQuantities?.map((e) => CMsgCraftworksComponents_ComponentQuantitiesEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgCraftworksComponents_ComponentQuantitiesEntry(): CMsgCraftworksComponents_ComponentQuantitiesEntry {
  return { key: 0, value: 0 };
}

export const CMsgCraftworksComponents_ComponentQuantitiesEntry: MessageFns<
  CMsgCraftworksComponents_ComponentQuantitiesEntry
> = {
  encode(
    message: CMsgCraftworksComponents_ComponentQuantitiesEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CMsgCraftworksComponents_ComponentQuantitiesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCraftworksComponents_ComponentQuantitiesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
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

  fromJSON(object: any): CMsgCraftworksComponents_ComponentQuantitiesEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: CMsgCraftworksComponents_ComponentQuantitiesEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create(
    base?: DeepPartial<CMsgCraftworksComponents_ComponentQuantitiesEntry>,
  ): CMsgCraftworksComponents_ComponentQuantitiesEntry {
    return CMsgCraftworksComponents_ComponentQuantitiesEntry.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<CMsgCraftworksComponents_ComponentQuantitiesEntry>,
  ): CMsgCraftworksComponents_ComponentQuantitiesEntry {
    const message = createBaseCMsgCraftworksComponents_ComponentQuantitiesEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseCMsgCraftworksQuestReward(): CMsgCraftworksQuestReward {
  return { questId: 0, rewardComponents: undefined, statValue: 0 };
}

export const CMsgCraftworksQuestReward: MessageFns<CMsgCraftworksQuestReward> = {
  encode(message: CMsgCraftworksQuestReward, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.questId !== 0) {
      writer.uint32(8).uint32(message.questId);
    }
    if (message.rewardComponents !== undefined) {
      CMsgCraftworksComponents.encode(message.rewardComponents, writer.uint32(18).fork()).join();
    }
    if (message.statValue !== 0) {
      writer.uint32(24).uint32(message.statValue);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CMsgCraftworksQuestReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCraftworksQuestReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.questId = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.rewardComponents = CMsgCraftworksComponents.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.statValue = reader.uint32();
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

  fromJSON(object: any): CMsgCraftworksQuestReward {
    return {
      questId: isSet(object.questId) ? globalThis.Number(object.questId) : 0,
      rewardComponents: isSet(object.rewardComponents)
        ? CMsgCraftworksComponents.fromJSON(object.rewardComponents)
        : undefined,
      statValue: isSet(object.statValue) ? globalThis.Number(object.statValue) : 0,
    };
  },

  toJSON(message: CMsgCraftworksQuestReward): unknown {
    const obj: any = {};
    if (message.questId !== 0) {
      obj.questId = Math.round(message.questId);
    }
    if (message.rewardComponents !== undefined) {
      obj.rewardComponents = CMsgCraftworksComponents.toJSON(message.rewardComponents);
    }
    if (message.statValue !== 0) {
      obj.statValue = Math.round(message.statValue);
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgCraftworksQuestReward>): CMsgCraftworksQuestReward {
    return CMsgCraftworksQuestReward.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CMsgCraftworksQuestReward>): CMsgCraftworksQuestReward {
    const message = createBaseCMsgCraftworksQuestReward();
    message.questId = object.questId ?? 0;
    message.rewardComponents = (object.rewardComponents !== undefined && object.rewardComponents !== null)
      ? CMsgCraftworksComponents.fromPartial(object.rewardComponents)
      : undefined;
    message.statValue = object.statValue ?? 0;
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
