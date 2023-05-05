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
};
