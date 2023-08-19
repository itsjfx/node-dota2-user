/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface CMsgSteamNetworkingIdentityLegacyBinary {
  steamId: string;
  xboxPairwiseId: string;
  genericBytes: Buffer;
  genericString: string;
  ipv6AndPort: Buffer;
}

export interface CMsgSteamDatagramCertificate {
  keyType: CMsgSteamDatagramCertificate_EKeyType;
  keyData: Buffer;
  legacySteamId: string;
  legacyIdentityBinary: CMsgSteamNetworkingIdentityLegacyBinary | undefined;
  identityString: string;
  gameserverDatacenterIds: number[];
  timeCreated: number;
  timeExpiry: number;
  appIds: number[];
  ipAddresses: string[];
}

export enum CMsgSteamDatagramCertificate_EKeyType {
  INVALID = 0,
  ED25519 = 1,
}

export function cMsgSteamDatagramCertificate_EKeyTypeFromJSON(object: any): CMsgSteamDatagramCertificate_EKeyType {
  switch (object) {
    case 0:
    case "INVALID":
      return CMsgSteamDatagramCertificate_EKeyType.INVALID;
    case 1:
    case "ED25519":
      return CMsgSteamDatagramCertificate_EKeyType.ED25519;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramCertificate_EKeyType",
      );
  }
}

export function cMsgSteamDatagramCertificate_EKeyTypeToJSON(object: CMsgSteamDatagramCertificate_EKeyType): string {
  switch (object) {
    case CMsgSteamDatagramCertificate_EKeyType.INVALID:
      return "INVALID";
    case CMsgSteamDatagramCertificate_EKeyType.ED25519:
      return "ED25519";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramCertificate_EKeyType",
      );
  }
}

export interface CMsgSteamDatagramCertificateSigned {
  cert: Buffer;
  caKeyId: string;
  caSignature: Buffer;
  privateKeyData: Buffer;
}

export interface CMsgSteamDatagramCertificateRequest {
  cert: CMsgSteamDatagramCertificate | undefined;
}

function createBaseCMsgSteamNetworkingIdentityLegacyBinary(): CMsgSteamNetworkingIdentityLegacyBinary {
  return {
    steamId: "0",
    xboxPairwiseId: "",
    genericBytes: Buffer.alloc(0),
    genericString: "",
    ipv6AndPort: Buffer.alloc(0),
  };
}

export const CMsgSteamNetworkingIdentityLegacyBinary = {
  encode(message: CMsgSteamNetworkingIdentityLegacyBinary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(129).fixed64(message.steamId);
    }
    if (message.xboxPairwiseId !== "") {
      writer.uint32(138).string(message.xboxPairwiseId);
    }
    if (message.genericBytes.length !== 0) {
      writer.uint32(18).bytes(message.genericBytes);
    }
    if (message.genericString !== "") {
      writer.uint32(26).string(message.genericString);
    }
    if (message.ipv6AndPort.length !== 0) {
      writer.uint32(34).bytes(message.ipv6AndPort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamNetworkingIdentityLegacyBinary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamNetworkingIdentityLegacyBinary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 16:
          if (tag != 129) {
            break;
          }

          message.steamId = longToString(reader.fixed64() as Long);
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.xboxPairwiseId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.genericBytes = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.genericString = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.ipv6AndPort = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamNetworkingIdentityLegacyBinary {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      xboxPairwiseId: isSet(object.xboxPairwiseId) ? String(object.xboxPairwiseId) : "",
      genericBytes: isSet(object.genericBytes) ? Buffer.from(bytesFromBase64(object.genericBytes)) : Buffer.alloc(0),
      genericString: isSet(object.genericString) ? String(object.genericString) : "",
      ipv6AndPort: isSet(object.ipv6AndPort) ? Buffer.from(bytesFromBase64(object.ipv6AndPort)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgSteamNetworkingIdentityLegacyBinary): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.xboxPairwiseId !== undefined && (obj.xboxPairwiseId = message.xboxPairwiseId);
    message.genericBytes !== undefined &&
      (obj.genericBytes = base64FromBytes(message.genericBytes !== undefined ? message.genericBytes : Buffer.alloc(0)));
    message.genericString !== undefined && (obj.genericString = message.genericString);
    message.ipv6AndPort !== undefined &&
      (obj.ipv6AndPort = base64FromBytes(message.ipv6AndPort !== undefined ? message.ipv6AndPort : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamNetworkingIdentityLegacyBinary>): CMsgSteamNetworkingIdentityLegacyBinary {
    return CMsgSteamNetworkingIdentityLegacyBinary.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamNetworkingIdentityLegacyBinary>): CMsgSteamNetworkingIdentityLegacyBinary {
    const message = createBaseCMsgSteamNetworkingIdentityLegacyBinary();
    message.steamId = object.steamId ?? "0";
    message.xboxPairwiseId = object.xboxPairwiseId ?? "";
    message.genericBytes = object.genericBytes ?? Buffer.alloc(0);
    message.genericString = object.genericString ?? "";
    message.ipv6AndPort = object.ipv6AndPort ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgSteamDatagramCertificate(): CMsgSteamDatagramCertificate {
  return {
    keyType: 0,
    keyData: Buffer.alloc(0),
    legacySteamId: "0",
    legacyIdentityBinary: undefined,
    identityString: "",
    gameserverDatacenterIds: [],
    timeCreated: 0,
    timeExpiry: 0,
    appIds: [],
    ipAddresses: [],
  };
}

export const CMsgSteamDatagramCertificate = {
  encode(message: CMsgSteamDatagramCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyType !== 0) {
      writer.uint32(8).int32(message.keyType);
    }
    if (message.keyData.length !== 0) {
      writer.uint32(18).bytes(message.keyData);
    }
    if (message.legacySteamId !== "0") {
      writer.uint32(33).fixed64(message.legacySteamId);
    }
    if (message.legacyIdentityBinary !== undefined) {
      CMsgSteamNetworkingIdentityLegacyBinary.encode(message.legacyIdentityBinary, writer.uint32(90).fork()).ldelim();
    }
    if (message.identityString !== "") {
      writer.uint32(98).string(message.identityString);
    }
    writer.uint32(42).fork();
    for (const v of message.gameserverDatacenterIds) {
      writer.fixed32(v);
    }
    writer.ldelim();
    if (message.timeCreated !== 0) {
      writer.uint32(69).fixed32(message.timeCreated);
    }
    if (message.timeExpiry !== 0) {
      writer.uint32(77).fixed32(message.timeExpiry);
    }
    writer.uint32(82).fork();
    for (const v of message.appIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.ipAddresses) {
      writer.uint32(106).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramCertificate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.keyType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.keyData = reader.bytes() as Buffer;
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.legacySteamId = longToString(reader.fixed64() as Long);
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.legacyIdentityBinary = CMsgSteamNetworkingIdentityLegacyBinary.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.identityString = reader.string();
          continue;
        case 5:
          if (tag == 45) {
            message.gameserverDatacenterIds.push(reader.fixed32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.gameserverDatacenterIds.push(reader.fixed32());
            }

            continue;
          }

          break;
        case 8:
          if (tag != 69) {
            break;
          }

          message.timeCreated = reader.fixed32();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.timeExpiry = reader.fixed32();
          continue;
        case 10:
          if (tag == 80) {
            message.appIds.push(reader.uint32());
            continue;
          }

          if (tag == 82) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.appIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 13:
          if (tag != 106) {
            break;
          }

          message.ipAddresses.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramCertificate {
    return {
      keyType: isSet(object.keyType) ? cMsgSteamDatagramCertificate_EKeyTypeFromJSON(object.keyType) : 0,
      keyData: isSet(object.keyData) ? Buffer.from(bytesFromBase64(object.keyData)) : Buffer.alloc(0),
      legacySteamId: isSet(object.legacySteamId) ? String(object.legacySteamId) : "0",
      legacyIdentityBinary: isSet(object.legacyIdentityBinary)
        ? CMsgSteamNetworkingIdentityLegacyBinary.fromJSON(object.legacyIdentityBinary)
        : undefined,
      identityString: isSet(object.identityString) ? String(object.identityString) : "",
      gameserverDatacenterIds: Array.isArray(object?.gameserverDatacenterIds)
        ? object.gameserverDatacenterIds.map((e: any) => Number(e))
        : [],
      timeCreated: isSet(object.timeCreated) ? Number(object.timeCreated) : 0,
      timeExpiry: isSet(object.timeExpiry) ? Number(object.timeExpiry) : 0,
      appIds: Array.isArray(object?.appIds) ? object.appIds.map((e: any) => Number(e)) : [],
      ipAddresses: Array.isArray(object?.ipAddresses) ? object.ipAddresses.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgSteamDatagramCertificate): unknown {
    const obj: any = {};
    message.keyType !== undefined && (obj.keyType = cMsgSteamDatagramCertificate_EKeyTypeToJSON(message.keyType));
    message.keyData !== undefined &&
      (obj.keyData = base64FromBytes(message.keyData !== undefined ? message.keyData : Buffer.alloc(0)));
    message.legacySteamId !== undefined && (obj.legacySteamId = message.legacySteamId);
    message.legacyIdentityBinary !== undefined && (obj.legacyIdentityBinary = message.legacyIdentityBinary
      ? CMsgSteamNetworkingIdentityLegacyBinary.toJSON(message.legacyIdentityBinary)
      : undefined);
    message.identityString !== undefined && (obj.identityString = message.identityString);
    if (message.gameserverDatacenterIds) {
      obj.gameserverDatacenterIds = message.gameserverDatacenterIds.map((e) => Math.round(e));
    } else {
      obj.gameserverDatacenterIds = [];
    }
    message.timeCreated !== undefined && (obj.timeCreated = Math.round(message.timeCreated));
    message.timeExpiry !== undefined && (obj.timeExpiry = Math.round(message.timeExpiry));
    if (message.appIds) {
      obj.appIds = message.appIds.map((e) => Math.round(e));
    } else {
      obj.appIds = [];
    }
    if (message.ipAddresses) {
      obj.ipAddresses = message.ipAddresses.map((e) => e);
    } else {
      obj.ipAddresses = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramCertificate>): CMsgSteamDatagramCertificate {
    return CMsgSteamDatagramCertificate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramCertificate>): CMsgSteamDatagramCertificate {
    const message = createBaseCMsgSteamDatagramCertificate();
    message.keyType = object.keyType ?? 0;
    message.keyData = object.keyData ?? Buffer.alloc(0);
    message.legacySteamId = object.legacySteamId ?? "0";
    message.legacyIdentityBinary = (object.legacyIdentityBinary !== undefined && object.legacyIdentityBinary !== null)
      ? CMsgSteamNetworkingIdentityLegacyBinary.fromPartial(object.legacyIdentityBinary)
      : undefined;
    message.identityString = object.identityString ?? "";
    message.gameserverDatacenterIds = object.gameserverDatacenterIds?.map((e) => e) || [];
    message.timeCreated = object.timeCreated ?? 0;
    message.timeExpiry = object.timeExpiry ?? 0;
    message.appIds = object.appIds?.map((e) => e) || [];
    message.ipAddresses = object.ipAddresses?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgSteamDatagramCertificateSigned(): CMsgSteamDatagramCertificateSigned {
  return { cert: Buffer.alloc(0), caKeyId: "0", caSignature: Buffer.alloc(0), privateKeyData: Buffer.alloc(0) };
}

export const CMsgSteamDatagramCertificateSigned = {
  encode(message: CMsgSteamDatagramCertificateSigned, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cert.length !== 0) {
      writer.uint32(34).bytes(message.cert);
    }
    if (message.caKeyId !== "0") {
      writer.uint32(41).fixed64(message.caKeyId);
    }
    if (message.caSignature.length !== 0) {
      writer.uint32(50).bytes(message.caSignature);
    }
    if (message.privateKeyData.length !== 0) {
      writer.uint32(10).bytes(message.privateKeyData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramCertificateSigned {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramCertificateSigned();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag != 34) {
            break;
          }

          message.cert = reader.bytes() as Buffer;
          continue;
        case 5:
          if (tag != 41) {
            break;
          }

          message.caKeyId = longToString(reader.fixed64() as Long);
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.caSignature = reader.bytes() as Buffer;
          continue;
        case 1:
          if (tag != 10) {
            break;
          }

          message.privateKeyData = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramCertificateSigned {
    return {
      cert: isSet(object.cert) ? Buffer.from(bytesFromBase64(object.cert)) : Buffer.alloc(0),
      caKeyId: isSet(object.caKeyId) ? String(object.caKeyId) : "0",
      caSignature: isSet(object.caSignature) ? Buffer.from(bytesFromBase64(object.caSignature)) : Buffer.alloc(0),
      privateKeyData: isSet(object.privateKeyData)
        ? Buffer.from(bytesFromBase64(object.privateKeyData))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgSteamDatagramCertificateSigned): unknown {
    const obj: any = {};
    message.cert !== undefined &&
      (obj.cert = base64FromBytes(message.cert !== undefined ? message.cert : Buffer.alloc(0)));
    message.caKeyId !== undefined && (obj.caKeyId = message.caKeyId);
    message.caSignature !== undefined &&
      (obj.caSignature = base64FromBytes(message.caSignature !== undefined ? message.caSignature : Buffer.alloc(0)));
    message.privateKeyData !== undefined &&
      (obj.privateKeyData = base64FromBytes(
        message.privateKeyData !== undefined ? message.privateKeyData : Buffer.alloc(0),
      ));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramCertificateSigned>): CMsgSteamDatagramCertificateSigned {
    return CMsgSteamDatagramCertificateSigned.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramCertificateSigned>): CMsgSteamDatagramCertificateSigned {
    const message = createBaseCMsgSteamDatagramCertificateSigned();
    message.cert = object.cert ?? Buffer.alloc(0);
    message.caKeyId = object.caKeyId ?? "0";
    message.caSignature = object.caSignature ?? Buffer.alloc(0);
    message.privateKeyData = object.privateKeyData ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgSteamDatagramCertificateRequest(): CMsgSteamDatagramCertificateRequest {
  return { cert: undefined };
}

export const CMsgSteamDatagramCertificateRequest = {
  encode(message: CMsgSteamDatagramCertificateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cert !== undefined) {
      CMsgSteamDatagramCertificate.encode(message.cert, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramCertificateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramCertificateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.cert = CMsgSteamDatagramCertificate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramCertificateRequest {
    return { cert: isSet(object.cert) ? CMsgSteamDatagramCertificate.fromJSON(object.cert) : undefined };
  },

  toJSON(message: CMsgSteamDatagramCertificateRequest): unknown {
    const obj: any = {};
    message.cert !== undefined &&
      (obj.cert = message.cert ? CMsgSteamDatagramCertificate.toJSON(message.cert) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramCertificateRequest>): CMsgSteamDatagramCertificateRequest {
    return CMsgSteamDatagramCertificateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramCertificateRequest>): CMsgSteamDatagramCertificateRequest {
    const message = createBaseCMsgSteamDatagramCertificateRequest();
    message.cert = (object.cert !== undefined && object.cert !== null)
      ? CMsgSteamDatagramCertificate.fromPartial(object.cert)
      : undefined;
    return message;
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

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
