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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
