/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CCLCMsgSplitPlayerConnect } from "./netmessages";

export interface C2SCONNECTMessage {
  hostVersion: number;
  authProtocol: number;
  challengeNumber: number;
  reservationCookie: string;
  lowViolence: boolean;
  encryptedPassword: Buffer;
  splitplayers: CCLCMsgSplitPlayerConnect[];
  authSteam: Buffer;
  challengeContext: string;
  useSnp: number;
}

export interface C2SCONNECTIONMessage {
  addonName: string;
  useSnp: boolean;
}

function createBaseC2SCONNECTMessage(): C2SCONNECTMessage {
  return {
    hostVersion: 0,
    authProtocol: 0,
    challengeNumber: 0,
    reservationCookie: "0",
    lowViolence: false,
    encryptedPassword: Buffer.alloc(0),
    splitplayers: [],
    authSteam: Buffer.alloc(0),
    challengeContext: "",
    useSnp: 0,
  };
}

export const C2SCONNECTMessage = {
  encode(message: C2SCONNECTMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostVersion !== 0) {
      writer.uint32(8).uint32(message.hostVersion);
    }
    if (message.authProtocol !== 0) {
      writer.uint32(16).uint32(message.authProtocol);
    }
    if (message.challengeNumber !== 0) {
      writer.uint32(24).uint32(message.challengeNumber);
    }
    if (message.reservationCookie !== "0") {
      writer.uint32(33).fixed64(message.reservationCookie);
    }
    if (message.lowViolence === true) {
      writer.uint32(40).bool(message.lowViolence);
    }
    if (message.encryptedPassword.length !== 0) {
      writer.uint32(50).bytes(message.encryptedPassword);
    }
    for (const v of message.splitplayers) {
      CCLCMsgSplitPlayerConnect.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.authSteam.length !== 0) {
      writer.uint32(66).bytes(message.authSteam);
    }
    if (message.challengeContext !== "") {
      writer.uint32(74).string(message.challengeContext);
    }
    if (message.useSnp !== 0) {
      writer.uint32(80).sint32(message.useSnp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SCONNECTMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SCONNECTMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.hostVersion = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.authProtocol = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.challengeNumber = reader.uint32();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.reservationCookie = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.lowViolence = reader.bool();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.encryptedPassword = reader.bytes() as Buffer;
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.splitplayers.push(CCLCMsgSplitPlayerConnect.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.authSteam = reader.bytes() as Buffer;
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.challengeContext = reader.string();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.useSnp = reader.sint32();
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

function createBaseC2SCONNECTIONMessage(): C2SCONNECTIONMessage {
  return { addonName: "", useSnp: false };
}

export const C2SCONNECTIONMessage = {
  encode(message: C2SCONNECTIONMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addonName !== "") {
      writer.uint32(10).string(message.addonName);
    }
    if (message.useSnp === true) {
      writer.uint32(16).bool(message.useSnp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): C2SCONNECTIONMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseC2SCONNECTIONMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.addonName = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.useSnp = reader.bool();
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
