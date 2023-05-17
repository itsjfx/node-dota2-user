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

  fromJSON(object: any): C2SCONNECTMessage {
    return {
      hostVersion: isSet(object.hostVersion) ? Number(object.hostVersion) : 0,
      authProtocol: isSet(object.authProtocol) ? Number(object.authProtocol) : 0,
      challengeNumber: isSet(object.challengeNumber) ? Number(object.challengeNumber) : 0,
      reservationCookie: isSet(object.reservationCookie) ? String(object.reservationCookie) : "0",
      lowViolence: isSet(object.lowViolence) ? Boolean(object.lowViolence) : false,
      encryptedPassword: isSet(object.encryptedPassword)
        ? Buffer.from(bytesFromBase64(object.encryptedPassword))
        : Buffer.alloc(0),
      splitplayers: Array.isArray(object?.splitplayers)
        ? object.splitplayers.map((e: any) => CCLCMsgSplitPlayerConnect.fromJSON(e))
        : [],
      authSteam: isSet(object.authSteam) ? Buffer.from(bytesFromBase64(object.authSteam)) : Buffer.alloc(0),
      challengeContext: isSet(object.challengeContext) ? String(object.challengeContext) : "",
      useSnp: isSet(object.useSnp) ? Number(object.useSnp) : 0,
    };
  },

  toJSON(message: C2SCONNECTMessage): unknown {
    const obj: any = {};
    message.hostVersion !== undefined && (obj.hostVersion = Math.round(message.hostVersion));
    message.authProtocol !== undefined && (obj.authProtocol = Math.round(message.authProtocol));
    message.challengeNumber !== undefined && (obj.challengeNumber = Math.round(message.challengeNumber));
    message.reservationCookie !== undefined && (obj.reservationCookie = message.reservationCookie);
    message.lowViolence !== undefined && (obj.lowViolence = message.lowViolence);
    message.encryptedPassword !== undefined &&
      (obj.encryptedPassword = base64FromBytes(
        message.encryptedPassword !== undefined ? message.encryptedPassword : Buffer.alloc(0),
      ));
    if (message.splitplayers) {
      obj.splitplayers = message.splitplayers.map((e) => e ? CCLCMsgSplitPlayerConnect.toJSON(e) : undefined);
    } else {
      obj.splitplayers = [];
    }
    message.authSteam !== undefined &&
      (obj.authSteam = base64FromBytes(message.authSteam !== undefined ? message.authSteam : Buffer.alloc(0)));
    message.challengeContext !== undefined && (obj.challengeContext = message.challengeContext);
    message.useSnp !== undefined && (obj.useSnp = Math.round(message.useSnp));
    return obj;
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

  fromJSON(object: any): C2SCONNECTIONMessage {
    return {
      addonName: isSet(object.addonName) ? String(object.addonName) : "",
      useSnp: isSet(object.useSnp) ? Boolean(object.useSnp) : false,
    };
  },

  toJSON(message: C2SCONNECTIONMessage): unknown {
    const obj: any = {};
    message.addonName !== undefined && (obj.addonName = message.addonName);
    message.useSnp !== undefined && (obj.useSnp = message.useSnp);
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
