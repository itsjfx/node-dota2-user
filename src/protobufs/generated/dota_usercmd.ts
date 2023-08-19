/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { CMsgVector } from "./networkbasetypes";
import { CBaseUserCmdPB } from "./usercmd";

export interface CDota2UserCmdPB {
  base: CBaseUserCmdPB | undefined;
  spectatorQueryUnitEntindex: number;
  crosshairtrace: CMsgVector | undefined;
  camerapositionX: number;
  camerapositionY: number;
  clickbehavior: number;
  statspanel: number;
  shoppanel: number;
  statsDropdown: number;
  statsDropdownSort: number;
}

function createBaseCDota2UserCmdPB(): CDota2UserCmdPB {
  return {
    base: undefined,
    spectatorQueryUnitEntindex: 0,
    crosshairtrace: undefined,
    camerapositionX: 0,
    camerapositionY: 0,
    clickbehavior: 0,
    statspanel: 0,
    shoppanel: 0,
    statsDropdown: 0,
    statsDropdownSort: 0,
  };
}

export const CDota2UserCmdPB = {
  encode(message: CDota2UserCmdPB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== undefined) {
      CBaseUserCmdPB.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    if (message.spectatorQueryUnitEntindex !== 0) {
      writer.uint32(16).int32(message.spectatorQueryUnitEntindex);
    }
    if (message.crosshairtrace !== undefined) {
      CMsgVector.encode(message.crosshairtrace, writer.uint32(26).fork()).ldelim();
    }
    if (message.camerapositionX !== 0) {
      writer.uint32(32).int32(message.camerapositionX);
    }
    if (message.camerapositionY !== 0) {
      writer.uint32(40).int32(message.camerapositionY);
    }
    if (message.clickbehavior !== 0) {
      writer.uint32(48).uint32(message.clickbehavior);
    }
    if (message.statspanel !== 0) {
      writer.uint32(56).uint32(message.statspanel);
    }
    if (message.shoppanel !== 0) {
      writer.uint32(64).uint32(message.shoppanel);
    }
    if (message.statsDropdown !== 0) {
      writer.uint32(72).uint32(message.statsDropdown);
    }
    if (message.statsDropdownSort !== 0) {
      writer.uint32(80).uint32(message.statsDropdownSort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDota2UserCmdPB {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDota2UserCmdPB();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.base = CBaseUserCmdPB.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.spectatorQueryUnitEntindex = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.crosshairtrace = CMsgVector.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.camerapositionX = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.camerapositionY = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.clickbehavior = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.statspanel = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.shoppanel = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.statsDropdown = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.statsDropdownSort = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDota2UserCmdPB {
    return {
      base: isSet(object.base) ? CBaseUserCmdPB.fromJSON(object.base) : undefined,
      spectatorQueryUnitEntindex: isSet(object.spectatorQueryUnitEntindex)
        ? Number(object.spectatorQueryUnitEntindex)
        : 0,
      crosshairtrace: isSet(object.crosshairtrace) ? CMsgVector.fromJSON(object.crosshairtrace) : undefined,
      camerapositionX: isSet(object.camerapositionX) ? Number(object.camerapositionX) : 0,
      camerapositionY: isSet(object.camerapositionY) ? Number(object.camerapositionY) : 0,
      clickbehavior: isSet(object.clickbehavior) ? Number(object.clickbehavior) : 0,
      statspanel: isSet(object.statspanel) ? Number(object.statspanel) : 0,
      shoppanel: isSet(object.shoppanel) ? Number(object.shoppanel) : 0,
      statsDropdown: isSet(object.statsDropdown) ? Number(object.statsDropdown) : 0,
      statsDropdownSort: isSet(object.statsDropdownSort) ? Number(object.statsDropdownSort) : 0,
    };
  },

  toJSON(message: CDota2UserCmdPB): unknown {
    const obj: any = {};
    message.base !== undefined && (obj.base = message.base ? CBaseUserCmdPB.toJSON(message.base) : undefined);
    message.spectatorQueryUnitEntindex !== undefined &&
      (obj.spectatorQueryUnitEntindex = Math.round(message.spectatorQueryUnitEntindex));
    message.crosshairtrace !== undefined &&
      (obj.crosshairtrace = message.crosshairtrace ? CMsgVector.toJSON(message.crosshairtrace) : undefined);
    message.camerapositionX !== undefined && (obj.camerapositionX = Math.round(message.camerapositionX));
    message.camerapositionY !== undefined && (obj.camerapositionY = Math.round(message.camerapositionY));
    message.clickbehavior !== undefined && (obj.clickbehavior = Math.round(message.clickbehavior));
    message.statspanel !== undefined && (obj.statspanel = Math.round(message.statspanel));
    message.shoppanel !== undefined && (obj.shoppanel = Math.round(message.shoppanel));
    message.statsDropdown !== undefined && (obj.statsDropdown = Math.round(message.statsDropdown));
    message.statsDropdownSort !== undefined && (obj.statsDropdownSort = Math.round(message.statsDropdownSort));
    return obj;
  },

  create(base?: DeepPartial<CDota2UserCmdPB>): CDota2UserCmdPB {
    return CDota2UserCmdPB.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDota2UserCmdPB>): CDota2UserCmdPB {
    const message = createBaseCDota2UserCmdPB();
    message.base = (object.base !== undefined && object.base !== null)
      ? CBaseUserCmdPB.fromPartial(object.base)
      : undefined;
    message.spectatorQueryUnitEntindex = object.spectatorQueryUnitEntindex ?? 0;
    message.crosshairtrace = (object.crosshairtrace !== undefined && object.crosshairtrace !== null)
      ? CMsgVector.fromPartial(object.crosshairtrace)
      : undefined;
    message.camerapositionX = object.camerapositionX ?? 0;
    message.camerapositionY = object.camerapositionY ?? 0;
    message.clickbehavior = object.clickbehavior ?? 0;
    message.statspanel = object.statspanel ?? 0;
    message.shoppanel = object.shoppanel ?? 0;
    message.statsDropdown = object.statsDropdown ?? 0;
    message.statsDropdownSort = object.statsDropdownSort ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
