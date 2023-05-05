/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgQAngle } from "./networkbasetypes";

export interface CInButtonStatePB {
  buttonstate1: string;
  buttonstate2: string;
  buttonstate3: string;
}

export interface CSubtickMoveStep {
  button: string;
  pressed: boolean;
  when: number;
}

export interface CBaseUserCmdPB {
  commandNumber: number;
  tickCount: number;
  buttonsPb: CInButtonStatePB | undefined;
  viewangles: CMsgQAngle | undefined;
  forwardmove: number;
  leftmove: number;
  upmove: number;
  impulse: number;
  weaponselect: number;
  randomSeed: number;
  mousedx: number;
  mousedy: number;
  hasbeenpredicted: boolean;
  pawnEntityHandle: number;
  subtickMoves: CSubtickMoveStep[];
  moveCrc: Buffer;
  fixangleTick: number;
}

export interface CUserCmdBasePB {
  base: CBaseUserCmdPB | undefined;
}

function createBaseCInButtonStatePB(): CInButtonStatePB {
  return { buttonstate1: "0", buttonstate2: "0", buttonstate3: "0" };
}

export const CInButtonStatePB = {
  encode(message: CInButtonStatePB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buttonstate1 !== "0") {
      writer.uint32(8).uint64(message.buttonstate1);
    }
    if (message.buttonstate2 !== "0") {
      writer.uint32(16).uint64(message.buttonstate2);
    }
    if (message.buttonstate3 !== "0") {
      writer.uint32(24).uint64(message.buttonstate3);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInButtonStatePB {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInButtonStatePB();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.buttonstate1 = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.buttonstate2 = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.buttonstate3 = longToString(reader.uint64() as Long);
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

function createBaseCSubtickMoveStep(): CSubtickMoveStep {
  return { button: "0", pressed: false, when: 0 };
}

export const CSubtickMoveStep = {
  encode(message: CSubtickMoveStep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.button !== "0") {
      writer.uint32(8).uint64(message.button);
    }
    if (message.pressed === true) {
      writer.uint32(16).bool(message.pressed);
    }
    if (message.when !== 0) {
      writer.uint32(29).float(message.when);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSubtickMoveStep {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSubtickMoveStep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.button = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.pressed = reader.bool();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.when = reader.float();
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

function createBaseCBaseUserCmdPB(): CBaseUserCmdPB {
  return {
    commandNumber: 0,
    tickCount: 0,
    buttonsPb: undefined,
    viewangles: undefined,
    forwardmove: 0,
    leftmove: 0,
    upmove: 0,
    impulse: 0,
    weaponselect: 0,
    randomSeed: 0,
    mousedx: 0,
    mousedy: 0,
    hasbeenpredicted: false,
    pawnEntityHandle: 0,
    subtickMoves: [],
    moveCrc: Buffer.alloc(0),
    fixangleTick: 0,
  };
}

export const CBaseUserCmdPB = {
  encode(message: CBaseUserCmdPB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commandNumber !== 0) {
      writer.uint32(8).int32(message.commandNumber);
    }
    if (message.tickCount !== 0) {
      writer.uint32(16).int32(message.tickCount);
    }
    if (message.buttonsPb !== undefined) {
      CInButtonStatePB.encode(message.buttonsPb, writer.uint32(26).fork()).ldelim();
    }
    if (message.viewangles !== undefined) {
      CMsgQAngle.encode(message.viewangles, writer.uint32(34).fork()).ldelim();
    }
    if (message.forwardmove !== 0) {
      writer.uint32(45).float(message.forwardmove);
    }
    if (message.leftmove !== 0) {
      writer.uint32(53).float(message.leftmove);
    }
    if (message.upmove !== 0) {
      writer.uint32(61).float(message.upmove);
    }
    if (message.impulse !== 0) {
      writer.uint32(64).int32(message.impulse);
    }
    if (message.weaponselect !== 0) {
      writer.uint32(72).int32(message.weaponselect);
    }
    if (message.randomSeed !== 0) {
      writer.uint32(80).int32(message.randomSeed);
    }
    if (message.mousedx !== 0) {
      writer.uint32(88).int32(message.mousedx);
    }
    if (message.mousedy !== 0) {
      writer.uint32(96).int32(message.mousedy);
    }
    if (message.hasbeenpredicted === true) {
      writer.uint32(104).bool(message.hasbeenpredicted);
    }
    if (message.pawnEntityHandle !== 0) {
      writer.uint32(112).uint32(message.pawnEntityHandle);
    }
    for (const v of message.subtickMoves) {
      CSubtickMoveStep.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    if (message.moveCrc.length !== 0) {
      writer.uint32(154).bytes(message.moveCrc);
    }
    if (message.fixangleTick !== 0) {
      writer.uint32(160).int32(message.fixangleTick);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBaseUserCmdPB {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBaseUserCmdPB();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.commandNumber = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.tickCount = reader.int32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.buttonsPb = CInButtonStatePB.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.viewangles = CMsgQAngle.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.forwardmove = reader.float();
          continue;
        case 6:
          if (tag != 53) {
            break;
          }

          message.leftmove = reader.float();
          continue;
        case 7:
          if (tag != 61) {
            break;
          }

          message.upmove = reader.float();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.impulse = reader.int32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.weaponselect = reader.int32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.randomSeed = reader.int32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.mousedx = reader.int32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.mousedy = reader.int32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.hasbeenpredicted = reader.bool();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.pawnEntityHandle = reader.uint32();
          continue;
        case 18:
          if (tag != 146) {
            break;
          }

          message.subtickMoves.push(CSubtickMoveStep.decode(reader, reader.uint32()));
          continue;
        case 19:
          if (tag != 154) {
            break;
          }

          message.moveCrc = reader.bytes() as Buffer;
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.fixangleTick = reader.int32();
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

function createBaseCUserCmdBasePB(): CUserCmdBasePB {
  return { base: undefined };
}

export const CUserCmdBasePB = {
  encode(message: CUserCmdBasePB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== undefined) {
      CBaseUserCmdPB.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserCmdBasePB {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserCmdBasePB();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.base = CBaseUserCmdPB.decode(reader, reader.uint32());
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
