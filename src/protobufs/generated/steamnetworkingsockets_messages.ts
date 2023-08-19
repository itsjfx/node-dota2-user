/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgSteamDatagramCertificateSigned } from "./steamnetworkingsockets_messages_certs";

export enum ESteamNetworkingSocketsCipher {
  k_ESteamNetworkingSocketsCipher_INVALID = 0,
  k_ESteamNetworkingSocketsCipher_NULL = 1,
  k_ESteamNetworkingSocketsCipher_AES_256_GCM = 2,
}

export function eSteamNetworkingSocketsCipherFromJSON(object: any): ESteamNetworkingSocketsCipher {
  switch (object) {
    case 0:
    case "k_ESteamNetworkingSocketsCipher_INVALID":
      return ESteamNetworkingSocketsCipher.k_ESteamNetworkingSocketsCipher_INVALID;
    case 1:
    case "k_ESteamNetworkingSocketsCipher_NULL":
      return ESteamNetworkingSocketsCipher.k_ESteamNetworkingSocketsCipher_NULL;
    case 2:
    case "k_ESteamNetworkingSocketsCipher_AES_256_GCM":
      return ESteamNetworkingSocketsCipher.k_ESteamNetworkingSocketsCipher_AES_256_GCM;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum ESteamNetworkingSocketsCipher",
      );
  }
}

export function eSteamNetworkingSocketsCipherToJSON(object: ESteamNetworkingSocketsCipher): string {
  switch (object) {
    case ESteamNetworkingSocketsCipher.k_ESteamNetworkingSocketsCipher_INVALID:
      return "k_ESteamNetworkingSocketsCipher_INVALID";
    case ESteamNetworkingSocketsCipher.k_ESteamNetworkingSocketsCipher_NULL:
      return "k_ESteamNetworkingSocketsCipher_NULL";
    case ESteamNetworkingSocketsCipher.k_ESteamNetworkingSocketsCipher_AES_256_GCM:
      return "k_ESteamNetworkingSocketsCipher_AES_256_GCM";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum ESteamNetworkingSocketsCipher",
      );
  }
}

export interface CMsgSteamDatagramSessionCryptInfo {
  keyType: CMsgSteamDatagramSessionCryptInfo_EKeyType;
  keyData: Buffer;
  nonce: string;
  protocolVersion: number;
  ciphers: ESteamNetworkingSocketsCipher[];
}

export enum CMsgSteamDatagramSessionCryptInfo_EKeyType {
  INVALID = 0,
  CURVE25519 = 1,
}

export function cMsgSteamDatagramSessionCryptInfo_EKeyTypeFromJSON(
  object: any,
): CMsgSteamDatagramSessionCryptInfo_EKeyType {
  switch (object) {
    case 0:
    case "INVALID":
      return CMsgSteamDatagramSessionCryptInfo_EKeyType.INVALID;
    case 1:
    case "CURVE25519":
      return CMsgSteamDatagramSessionCryptInfo_EKeyType.CURVE25519;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramSessionCryptInfo_EKeyType",
      );
  }
}

export function cMsgSteamDatagramSessionCryptInfo_EKeyTypeToJSON(
  object: CMsgSteamDatagramSessionCryptInfo_EKeyType,
): string {
  switch (object) {
    case CMsgSteamDatagramSessionCryptInfo_EKeyType.INVALID:
      return "INVALID";
    case CMsgSteamDatagramSessionCryptInfo_EKeyType.CURVE25519:
      return "CURVE25519";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamDatagramSessionCryptInfo_EKeyType",
      );
  }
}

export interface CMsgSteamDatagramSessionCryptInfoSigned {
  info: Buffer;
  signature: Buffer;
}

export interface CMsgSteamDatagramDiagnostic {
  severity: number;
  text: string;
}

export interface CMsgSteamDatagramLinkInstantaneousStats {
  outPacketsPerSecX10: number;
  outBytesPerSec: number;
  inPacketsPerSecX10: number;
  inBytesPerSec: number;
  pingMs: number;
  packetsDroppedPct: number;
  packetsWeirdSequencePct: number;
  peakJitterUsec: number;
}

export interface CMsgSteamDatagramLinkLifetimeStats {
  connectedSeconds: number;
  packetsSent: string;
  kbSent: string;
  packetsRecv: string;
  kbRecv: string;
  packetsRecvSequenced: string;
  packetsRecvDropped: string;
  packetsRecvOutOfOrder: string;
  packetsRecvDuplicate: string;
  packetsRecvLurch: string;
  multipathPacketsRecvSequenced: string[];
  multipathPacketsRecvLater: string[];
  multipathSendEnabled: number;
  qualityHistogram100: number;
  qualityHistogram99: number;
  qualityHistogram97: number;
  qualityHistogram95: number;
  qualityHistogram90: number;
  qualityHistogram75: number;
  qualityHistogram50: number;
  qualityHistogram1: number;
  qualityHistogramDead: number;
  qualityNtile2nd: number;
  qualityNtile5th: number;
  qualityNtile25th: number;
  qualityNtile50th: number;
  pingHistogram25: number;
  pingHistogram50: number;
  pingHistogram75: number;
  pingHistogram100: number;
  pingHistogram125: number;
  pingHistogram150: number;
  pingHistogram200: number;
  pingHistogram300: number;
  pingHistogramMax: number;
  pingNtile5th: number;
  pingNtile50th: number;
  pingNtile75th: number;
  pingNtile95th: number;
  pingNtile98th: number;
  jitterHistogramNegligible: number;
  jitterHistogram1: number;
  jitterHistogram2: number;
  jitterHistogram5: number;
  jitterHistogram10: number;
  jitterHistogram20: number;
  txspeedMax: number;
  txspeedHistogram16: number;
  txspeedHistogram32: number;
  txspeedHistogram64: number;
  txspeedHistogram128: number;
  txspeedHistogram256: number;
  txspeedHistogram512: number;
  txspeedHistogram1024: number;
  txspeedHistogramMax: number;
  txspeedNtile5th: number;
  txspeedNtile50th: number;
  txspeedNtile75th: number;
  txspeedNtile95th: number;
  txspeedNtile98th: number;
  rxspeedMax: number;
  rxspeedHistogram16: number;
  rxspeedHistogram32: number;
  rxspeedHistogram64: number;
  rxspeedHistogram128: number;
  rxspeedHistogram256: number;
  rxspeedHistogram512: number;
  rxspeedHistogram1024: number;
  rxspeedHistogramMax: number;
  rxspeedNtile5th: number;
  rxspeedNtile50th: number;
  rxspeedNtile75th: number;
  rxspeedNtile95th: number;
  rxspeedNtile98th: number;
}

export interface CMsgSteamDatagramConnectionQuality {
  instantaneous: CMsgSteamDatagramLinkInstantaneousStats | undefined;
  lifetime: CMsgSteamDatagramLinkLifetimeStats | undefined;
}

export interface CMsgICECandidate {
  candidate: string;
}

export interface CMsgICERendezvous {
  auth: CMsgICERendezvous_Auth | undefined;
  addCandidate: CMsgICECandidate | undefined;
}

export interface CMsgICERendezvous_Auth {
  pwdFrag: string;
}

export interface CMsgSteamNetworkingP2PRendezvous {
  fromIdentity: string;
  fromConnectionId: number;
  toIdentity: string;
  toConnectionId: number;
  sdrRoutes: Buffer;
  ackPeerRoutesRevision: number;
  iceEnabled: boolean;
  hostedServerTicket: Buffer;
  connectRequest: CMsgSteamNetworkingP2PRendezvous_ConnectRequest | undefined;
  connectOk: CMsgSteamNetworkingP2PRendezvous_ConnectOK | undefined;
  connectionClosed: CMsgSteamNetworkingP2PRendezvous_ConnectionClosed | undefined;
  ackReliableMsg: number;
  firstReliableMsg: number;
  reliableMessages: CMsgSteamNetworkingP2PRendezvous_ReliableMessage[];
  applicationMessages: CMsgSteamNetworkingP2PRendezvous_ApplicationMessage[];
}

export interface CMsgSteamNetworkingP2PRendezvous_ConnectRequest {
  crypt: CMsgSteamDatagramSessionCryptInfoSigned | undefined;
  cert: CMsgSteamDatagramCertificateSigned | undefined;
  toVirtualPort: number;
  fromVirtualPort: number;
  fromFakeip: string;
}

export interface CMsgSteamNetworkingP2PRendezvous_ConnectOK {
  crypt: CMsgSteamDatagramSessionCryptInfoSigned | undefined;
  cert: CMsgSteamDatagramCertificateSigned | undefined;
}

export interface CMsgSteamNetworkingP2PRendezvous_ConnectionClosed {
  debug: string;
  reasonCode: number;
}

export interface CMsgSteamNetworkingP2PRendezvous_ReliableMessage {
  ice: CMsgICERendezvous | undefined;
}

export interface CMsgSteamNetworkingP2PRendezvous_ApplicationMessage {
  data: Buffer;
  msgNum: string;
  flags: number;
  laneIdx: number;
}

export interface CMsgSteamNetworkingICESessionSummary {
  failureReasonCode: number;
  localCandidateTypes: number;
  remoteCandidateTypes: number;
  initialRouteKind: number;
  initialPing: number;
  initialScore: number;
  negotiationMs: number;
  bestRouteKind: number;
  bestPing: number;
  bestScore: number;
  bestTime: number;
  selectedSeconds: number;
  userSettings: number;
  iceEnableVar: number;
  localCandidateTypesAllowed: number;
}

function createBaseCMsgSteamDatagramSessionCryptInfo(): CMsgSteamDatagramSessionCryptInfo {
  return { keyType: 0, keyData: Buffer.alloc(0), nonce: "0", protocolVersion: 0, ciphers: [] };
}

export const CMsgSteamDatagramSessionCryptInfo = {
  encode(message: CMsgSteamDatagramSessionCryptInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyType !== 0) {
      writer.uint32(8).int32(message.keyType);
    }
    if (message.keyData.length !== 0) {
      writer.uint32(18).bytes(message.keyData);
    }
    if (message.nonce !== "0") {
      writer.uint32(25).fixed64(message.nonce);
    }
    if (message.protocolVersion !== 0) {
      writer.uint32(32).uint32(message.protocolVersion);
    }
    writer.uint32(42).fork();
    for (const v of message.ciphers) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramSessionCryptInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramSessionCryptInfo();
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
        case 3:
          if (tag != 25) {
            break;
          }

          message.nonce = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.protocolVersion = reader.uint32();
          continue;
        case 5:
          if (tag == 40) {
            message.ciphers.push(reader.int32() as any);
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ciphers.push(reader.int32() as any);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramSessionCryptInfo {
    return {
      keyType: isSet(object.keyType) ? cMsgSteamDatagramSessionCryptInfo_EKeyTypeFromJSON(object.keyType) : 0,
      keyData: isSet(object.keyData) ? Buffer.from(bytesFromBase64(object.keyData)) : Buffer.alloc(0),
      nonce: isSet(object.nonce) ? String(object.nonce) : "0",
      protocolVersion: isSet(object.protocolVersion) ? Number(object.protocolVersion) : 0,
      ciphers: Array.isArray(object?.ciphers)
        ? object.ciphers.map((e: any) => eSteamNetworkingSocketsCipherFromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSteamDatagramSessionCryptInfo): unknown {
    const obj: any = {};
    message.keyType !== undefined && (obj.keyType = cMsgSteamDatagramSessionCryptInfo_EKeyTypeToJSON(message.keyType));
    message.keyData !== undefined &&
      (obj.keyData = base64FromBytes(message.keyData !== undefined ? message.keyData : Buffer.alloc(0)));
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.protocolVersion !== undefined && (obj.protocolVersion = Math.round(message.protocolVersion));
    if (message.ciphers) {
      obj.ciphers = message.ciphers.map((e) => eSteamNetworkingSocketsCipherToJSON(e));
    } else {
      obj.ciphers = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramSessionCryptInfo>): CMsgSteamDatagramSessionCryptInfo {
    return CMsgSteamDatagramSessionCryptInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramSessionCryptInfo>): CMsgSteamDatagramSessionCryptInfo {
    const message = createBaseCMsgSteamDatagramSessionCryptInfo();
    message.keyType = object.keyType ?? 0;
    message.keyData = object.keyData ?? Buffer.alloc(0);
    message.nonce = object.nonce ?? "0";
    message.protocolVersion = object.protocolVersion ?? 0;
    message.ciphers = object.ciphers?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgSteamDatagramSessionCryptInfoSigned(): CMsgSteamDatagramSessionCryptInfoSigned {
  return { info: Buffer.alloc(0), signature: Buffer.alloc(0) };
}

export const CMsgSteamDatagramSessionCryptInfoSigned = {
  encode(message: CMsgSteamDatagramSessionCryptInfoSigned, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info.length !== 0) {
      writer.uint32(10).bytes(message.info);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramSessionCryptInfoSigned {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramSessionCryptInfoSigned();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.info = reader.bytes() as Buffer;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.signature = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramSessionCryptInfoSigned {
    return {
      info: isSet(object.info) ? Buffer.from(bytesFromBase64(object.info)) : Buffer.alloc(0),
      signature: isSet(object.signature) ? Buffer.from(bytesFromBase64(object.signature)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgSteamDatagramSessionCryptInfoSigned): unknown {
    const obj: any = {};
    message.info !== undefined &&
      (obj.info = base64FromBytes(message.info !== undefined ? message.info : Buffer.alloc(0)));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramSessionCryptInfoSigned>): CMsgSteamDatagramSessionCryptInfoSigned {
    return CMsgSteamDatagramSessionCryptInfoSigned.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramSessionCryptInfoSigned>): CMsgSteamDatagramSessionCryptInfoSigned {
    const message = createBaseCMsgSteamDatagramSessionCryptInfoSigned();
    message.info = object.info ?? Buffer.alloc(0);
    message.signature = object.signature ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgSteamDatagramDiagnostic(): CMsgSteamDatagramDiagnostic {
  return { severity: 0, text: "" };
}

export const CMsgSteamDatagramDiagnostic = {
  encode(message: CMsgSteamDatagramDiagnostic, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.severity !== 0) {
      writer.uint32(8).uint32(message.severity);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramDiagnostic {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramDiagnostic();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.severity = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramDiagnostic {
    return {
      severity: isSet(object.severity) ? Number(object.severity) : 0,
      text: isSet(object.text) ? String(object.text) : "",
    };
  },

  toJSON(message: CMsgSteamDatagramDiagnostic): unknown {
    const obj: any = {};
    message.severity !== undefined && (obj.severity = Math.round(message.severity));
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramDiagnostic>): CMsgSteamDatagramDiagnostic {
    return CMsgSteamDatagramDiagnostic.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramDiagnostic>): CMsgSteamDatagramDiagnostic {
    const message = createBaseCMsgSteamDatagramDiagnostic();
    message.severity = object.severity ?? 0;
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseCMsgSteamDatagramLinkInstantaneousStats(): CMsgSteamDatagramLinkInstantaneousStats {
  return {
    outPacketsPerSecX10: 0,
    outBytesPerSec: 0,
    inPacketsPerSecX10: 0,
    inBytesPerSec: 0,
    pingMs: 0,
    packetsDroppedPct: 0,
    packetsWeirdSequencePct: 0,
    peakJitterUsec: 0,
  };
}

export const CMsgSteamDatagramLinkInstantaneousStats = {
  encode(message: CMsgSteamDatagramLinkInstantaneousStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.outPacketsPerSecX10 !== 0) {
      writer.uint32(8).uint32(message.outPacketsPerSecX10);
    }
    if (message.outBytesPerSec !== 0) {
      writer.uint32(16).uint32(message.outBytesPerSec);
    }
    if (message.inPacketsPerSecX10 !== 0) {
      writer.uint32(24).uint32(message.inPacketsPerSecX10);
    }
    if (message.inBytesPerSec !== 0) {
      writer.uint32(32).uint32(message.inBytesPerSec);
    }
    if (message.pingMs !== 0) {
      writer.uint32(40).uint32(message.pingMs);
    }
    if (message.packetsDroppedPct !== 0) {
      writer.uint32(48).uint32(message.packetsDroppedPct);
    }
    if (message.packetsWeirdSequencePct !== 0) {
      writer.uint32(56).uint32(message.packetsWeirdSequencePct);
    }
    if (message.peakJitterUsec !== 0) {
      writer.uint32(64).uint32(message.peakJitterUsec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramLinkInstantaneousStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramLinkInstantaneousStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.outPacketsPerSecX10 = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.outBytesPerSec = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.inPacketsPerSecX10 = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.inBytesPerSec = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.pingMs = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.packetsDroppedPct = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.packetsWeirdSequencePct = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.peakJitterUsec = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramLinkInstantaneousStats {
    return {
      outPacketsPerSecX10: isSet(object.outPacketsPerSecX10) ? Number(object.outPacketsPerSecX10) : 0,
      outBytesPerSec: isSet(object.outBytesPerSec) ? Number(object.outBytesPerSec) : 0,
      inPacketsPerSecX10: isSet(object.inPacketsPerSecX10) ? Number(object.inPacketsPerSecX10) : 0,
      inBytesPerSec: isSet(object.inBytesPerSec) ? Number(object.inBytesPerSec) : 0,
      pingMs: isSet(object.pingMs) ? Number(object.pingMs) : 0,
      packetsDroppedPct: isSet(object.packetsDroppedPct) ? Number(object.packetsDroppedPct) : 0,
      packetsWeirdSequencePct: isSet(object.packetsWeirdSequencePct) ? Number(object.packetsWeirdSequencePct) : 0,
      peakJitterUsec: isSet(object.peakJitterUsec) ? Number(object.peakJitterUsec) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramLinkInstantaneousStats): unknown {
    const obj: any = {};
    message.outPacketsPerSecX10 !== undefined && (obj.outPacketsPerSecX10 = Math.round(message.outPacketsPerSecX10));
    message.outBytesPerSec !== undefined && (obj.outBytesPerSec = Math.round(message.outBytesPerSec));
    message.inPacketsPerSecX10 !== undefined && (obj.inPacketsPerSecX10 = Math.round(message.inPacketsPerSecX10));
    message.inBytesPerSec !== undefined && (obj.inBytesPerSec = Math.round(message.inBytesPerSec));
    message.pingMs !== undefined && (obj.pingMs = Math.round(message.pingMs));
    message.packetsDroppedPct !== undefined && (obj.packetsDroppedPct = Math.round(message.packetsDroppedPct));
    message.packetsWeirdSequencePct !== undefined &&
      (obj.packetsWeirdSequencePct = Math.round(message.packetsWeirdSequencePct));
    message.peakJitterUsec !== undefined && (obj.peakJitterUsec = Math.round(message.peakJitterUsec));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramLinkInstantaneousStats>): CMsgSteamDatagramLinkInstantaneousStats {
    return CMsgSteamDatagramLinkInstantaneousStats.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramLinkInstantaneousStats>): CMsgSteamDatagramLinkInstantaneousStats {
    const message = createBaseCMsgSteamDatagramLinkInstantaneousStats();
    message.outPacketsPerSecX10 = object.outPacketsPerSecX10 ?? 0;
    message.outBytesPerSec = object.outBytesPerSec ?? 0;
    message.inPacketsPerSecX10 = object.inPacketsPerSecX10 ?? 0;
    message.inBytesPerSec = object.inBytesPerSec ?? 0;
    message.pingMs = object.pingMs ?? 0;
    message.packetsDroppedPct = object.packetsDroppedPct ?? 0;
    message.packetsWeirdSequencePct = object.packetsWeirdSequencePct ?? 0;
    message.peakJitterUsec = object.peakJitterUsec ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramLinkLifetimeStats(): CMsgSteamDatagramLinkLifetimeStats {
  return {
    connectedSeconds: 0,
    packetsSent: "0",
    kbSent: "0",
    packetsRecv: "0",
    kbRecv: "0",
    packetsRecvSequenced: "0",
    packetsRecvDropped: "0",
    packetsRecvOutOfOrder: "0",
    packetsRecvDuplicate: "0",
    packetsRecvLurch: "0",
    multipathPacketsRecvSequenced: [],
    multipathPacketsRecvLater: [],
    multipathSendEnabled: 0,
    qualityHistogram100: 0,
    qualityHistogram99: 0,
    qualityHistogram97: 0,
    qualityHistogram95: 0,
    qualityHistogram90: 0,
    qualityHistogram75: 0,
    qualityHistogram50: 0,
    qualityHistogram1: 0,
    qualityHistogramDead: 0,
    qualityNtile2nd: 0,
    qualityNtile5th: 0,
    qualityNtile25th: 0,
    qualityNtile50th: 0,
    pingHistogram25: 0,
    pingHistogram50: 0,
    pingHistogram75: 0,
    pingHistogram100: 0,
    pingHistogram125: 0,
    pingHistogram150: 0,
    pingHistogram200: 0,
    pingHistogram300: 0,
    pingHistogramMax: 0,
    pingNtile5th: 0,
    pingNtile50th: 0,
    pingNtile75th: 0,
    pingNtile95th: 0,
    pingNtile98th: 0,
    jitterHistogramNegligible: 0,
    jitterHistogram1: 0,
    jitterHistogram2: 0,
    jitterHistogram5: 0,
    jitterHistogram10: 0,
    jitterHistogram20: 0,
    txspeedMax: 0,
    txspeedHistogram16: 0,
    txspeedHistogram32: 0,
    txspeedHistogram64: 0,
    txspeedHistogram128: 0,
    txspeedHistogram256: 0,
    txspeedHistogram512: 0,
    txspeedHistogram1024: 0,
    txspeedHistogramMax: 0,
    txspeedNtile5th: 0,
    txspeedNtile50th: 0,
    txspeedNtile75th: 0,
    txspeedNtile95th: 0,
    txspeedNtile98th: 0,
    rxspeedMax: 0,
    rxspeedHistogram16: 0,
    rxspeedHistogram32: 0,
    rxspeedHistogram64: 0,
    rxspeedHistogram128: 0,
    rxspeedHistogram256: 0,
    rxspeedHistogram512: 0,
    rxspeedHistogram1024: 0,
    rxspeedHistogramMax: 0,
    rxspeedNtile5th: 0,
    rxspeedNtile50th: 0,
    rxspeedNtile75th: 0,
    rxspeedNtile95th: 0,
    rxspeedNtile98th: 0,
  };
}

export const CMsgSteamDatagramLinkLifetimeStats = {
  encode(message: CMsgSteamDatagramLinkLifetimeStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectedSeconds !== 0) {
      writer.uint32(16).uint32(message.connectedSeconds);
    }
    if (message.packetsSent !== "0") {
      writer.uint32(24).uint64(message.packetsSent);
    }
    if (message.kbSent !== "0") {
      writer.uint32(32).uint64(message.kbSent);
    }
    if (message.packetsRecv !== "0") {
      writer.uint32(40).uint64(message.packetsRecv);
    }
    if (message.kbRecv !== "0") {
      writer.uint32(48).uint64(message.kbRecv);
    }
    if (message.packetsRecvSequenced !== "0") {
      writer.uint32(56).uint64(message.packetsRecvSequenced);
    }
    if (message.packetsRecvDropped !== "0") {
      writer.uint32(64).uint64(message.packetsRecvDropped);
    }
    if (message.packetsRecvOutOfOrder !== "0") {
      writer.uint32(72).uint64(message.packetsRecvOutOfOrder);
    }
    if (message.packetsRecvDuplicate !== "0") {
      writer.uint32(80).uint64(message.packetsRecvDuplicate);
    }
    if (message.packetsRecvLurch !== "0") {
      writer.uint32(88).uint64(message.packetsRecvLurch);
    }
    writer.uint32(98).fork();
    for (const v of message.multipathPacketsRecvSequenced) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(106).fork();
    for (const v of message.multipathPacketsRecvLater) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.multipathSendEnabled !== 0) {
      writer.uint32(112).uint32(message.multipathSendEnabled);
    }
    if (message.qualityHistogram100 !== 0) {
      writer.uint32(168).uint32(message.qualityHistogram100);
    }
    if (message.qualityHistogram99 !== 0) {
      writer.uint32(176).uint32(message.qualityHistogram99);
    }
    if (message.qualityHistogram97 !== 0) {
      writer.uint32(184).uint32(message.qualityHistogram97);
    }
    if (message.qualityHistogram95 !== 0) {
      writer.uint32(192).uint32(message.qualityHistogram95);
    }
    if (message.qualityHistogram90 !== 0) {
      writer.uint32(200).uint32(message.qualityHistogram90);
    }
    if (message.qualityHistogram75 !== 0) {
      writer.uint32(208).uint32(message.qualityHistogram75);
    }
    if (message.qualityHistogram50 !== 0) {
      writer.uint32(216).uint32(message.qualityHistogram50);
    }
    if (message.qualityHistogram1 !== 0) {
      writer.uint32(224).uint32(message.qualityHistogram1);
    }
    if (message.qualityHistogramDead !== 0) {
      writer.uint32(232).uint32(message.qualityHistogramDead);
    }
    if (message.qualityNtile2nd !== 0) {
      writer.uint32(240).uint32(message.qualityNtile2nd);
    }
    if (message.qualityNtile5th !== 0) {
      writer.uint32(248).uint32(message.qualityNtile5th);
    }
    if (message.qualityNtile25th !== 0) {
      writer.uint32(256).uint32(message.qualityNtile25th);
    }
    if (message.qualityNtile50th !== 0) {
      writer.uint32(264).uint32(message.qualityNtile50th);
    }
    if (message.pingHistogram25 !== 0) {
      writer.uint32(328).uint32(message.pingHistogram25);
    }
    if (message.pingHistogram50 !== 0) {
      writer.uint32(336).uint32(message.pingHistogram50);
    }
    if (message.pingHistogram75 !== 0) {
      writer.uint32(344).uint32(message.pingHistogram75);
    }
    if (message.pingHistogram100 !== 0) {
      writer.uint32(352).uint32(message.pingHistogram100);
    }
    if (message.pingHistogram125 !== 0) {
      writer.uint32(360).uint32(message.pingHistogram125);
    }
    if (message.pingHistogram150 !== 0) {
      writer.uint32(368).uint32(message.pingHistogram150);
    }
    if (message.pingHistogram200 !== 0) {
      writer.uint32(376).uint32(message.pingHistogram200);
    }
    if (message.pingHistogram300 !== 0) {
      writer.uint32(384).uint32(message.pingHistogram300);
    }
    if (message.pingHistogramMax !== 0) {
      writer.uint32(392).uint32(message.pingHistogramMax);
    }
    if (message.pingNtile5th !== 0) {
      writer.uint32(400).uint32(message.pingNtile5th);
    }
    if (message.pingNtile50th !== 0) {
      writer.uint32(408).uint32(message.pingNtile50th);
    }
    if (message.pingNtile75th !== 0) {
      writer.uint32(416).uint32(message.pingNtile75th);
    }
    if (message.pingNtile95th !== 0) {
      writer.uint32(424).uint32(message.pingNtile95th);
    }
    if (message.pingNtile98th !== 0) {
      writer.uint32(432).uint32(message.pingNtile98th);
    }
    if (message.jitterHistogramNegligible !== 0) {
      writer.uint32(488).uint32(message.jitterHistogramNegligible);
    }
    if (message.jitterHistogram1 !== 0) {
      writer.uint32(496).uint32(message.jitterHistogram1);
    }
    if (message.jitterHistogram2 !== 0) {
      writer.uint32(504).uint32(message.jitterHistogram2);
    }
    if (message.jitterHistogram5 !== 0) {
      writer.uint32(512).uint32(message.jitterHistogram5);
    }
    if (message.jitterHistogram10 !== 0) {
      writer.uint32(520).uint32(message.jitterHistogram10);
    }
    if (message.jitterHistogram20 !== 0) {
      writer.uint32(528).uint32(message.jitterHistogram20);
    }
    if (message.txspeedMax !== 0) {
      writer.uint32(536).uint32(message.txspeedMax);
    }
    if (message.txspeedHistogram16 !== 0) {
      writer.uint32(544).uint32(message.txspeedHistogram16);
    }
    if (message.txspeedHistogram32 !== 0) {
      writer.uint32(552).uint32(message.txspeedHistogram32);
    }
    if (message.txspeedHistogram64 !== 0) {
      writer.uint32(560).uint32(message.txspeedHistogram64);
    }
    if (message.txspeedHistogram128 !== 0) {
      writer.uint32(568).uint32(message.txspeedHistogram128);
    }
    if (message.txspeedHistogram256 !== 0) {
      writer.uint32(576).uint32(message.txspeedHistogram256);
    }
    if (message.txspeedHistogram512 !== 0) {
      writer.uint32(584).uint32(message.txspeedHistogram512);
    }
    if (message.txspeedHistogram1024 !== 0) {
      writer.uint32(592).uint32(message.txspeedHistogram1024);
    }
    if (message.txspeedHistogramMax !== 0) {
      writer.uint32(600).uint32(message.txspeedHistogramMax);
    }
    if (message.txspeedNtile5th !== 0) {
      writer.uint32(608).uint32(message.txspeedNtile5th);
    }
    if (message.txspeedNtile50th !== 0) {
      writer.uint32(616).uint32(message.txspeedNtile50th);
    }
    if (message.txspeedNtile75th !== 0) {
      writer.uint32(624).uint32(message.txspeedNtile75th);
    }
    if (message.txspeedNtile95th !== 0) {
      writer.uint32(632).uint32(message.txspeedNtile95th);
    }
    if (message.txspeedNtile98th !== 0) {
      writer.uint32(640).uint32(message.txspeedNtile98th);
    }
    if (message.rxspeedMax !== 0) {
      writer.uint32(648).uint32(message.rxspeedMax);
    }
    if (message.rxspeedHistogram16 !== 0) {
      writer.uint32(656).uint32(message.rxspeedHistogram16);
    }
    if (message.rxspeedHistogram32 !== 0) {
      writer.uint32(664).uint32(message.rxspeedHistogram32);
    }
    if (message.rxspeedHistogram64 !== 0) {
      writer.uint32(672).uint32(message.rxspeedHistogram64);
    }
    if (message.rxspeedHistogram128 !== 0) {
      writer.uint32(680).uint32(message.rxspeedHistogram128);
    }
    if (message.rxspeedHistogram256 !== 0) {
      writer.uint32(688).uint32(message.rxspeedHistogram256);
    }
    if (message.rxspeedHistogram512 !== 0) {
      writer.uint32(696).uint32(message.rxspeedHistogram512);
    }
    if (message.rxspeedHistogram1024 !== 0) {
      writer.uint32(704).uint32(message.rxspeedHistogram1024);
    }
    if (message.rxspeedHistogramMax !== 0) {
      writer.uint32(712).uint32(message.rxspeedHistogramMax);
    }
    if (message.rxspeedNtile5th !== 0) {
      writer.uint32(720).uint32(message.rxspeedNtile5th);
    }
    if (message.rxspeedNtile50th !== 0) {
      writer.uint32(728).uint32(message.rxspeedNtile50th);
    }
    if (message.rxspeedNtile75th !== 0) {
      writer.uint32(736).uint32(message.rxspeedNtile75th);
    }
    if (message.rxspeedNtile95th !== 0) {
      writer.uint32(744).uint32(message.rxspeedNtile95th);
    }
    if (message.rxspeedNtile98th !== 0) {
      writer.uint32(752).uint32(message.rxspeedNtile98th);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramLinkLifetimeStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramLinkLifetimeStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.connectedSeconds = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.packetsSent = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.kbSent = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.packetsRecv = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.kbRecv = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.packetsRecvSequenced = longToString(reader.uint64() as Long);
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.packetsRecvDropped = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.packetsRecvOutOfOrder = longToString(reader.uint64() as Long);
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.packetsRecvDuplicate = longToString(reader.uint64() as Long);
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.packetsRecvLurch = longToString(reader.uint64() as Long);
          continue;
        case 12:
          if (tag == 96) {
            message.multipathPacketsRecvSequenced.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 98) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.multipathPacketsRecvSequenced.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 13:
          if (tag == 104) {
            message.multipathPacketsRecvLater.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 106) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.multipathPacketsRecvLater.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 14:
          if (tag != 112) {
            break;
          }

          message.multipathSendEnabled = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.qualityHistogram100 = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.qualityHistogram99 = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.qualityHistogram97 = reader.uint32();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.qualityHistogram95 = reader.uint32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.qualityHistogram90 = reader.uint32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.qualityHistogram75 = reader.uint32();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.qualityHistogram50 = reader.uint32();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.qualityHistogram1 = reader.uint32();
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.qualityHistogramDead = reader.uint32();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.qualityNtile2nd = reader.uint32();
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.qualityNtile5th = reader.uint32();
          continue;
        case 32:
          if (tag != 256) {
            break;
          }

          message.qualityNtile25th = reader.uint32();
          continue;
        case 33:
          if (tag != 264) {
            break;
          }

          message.qualityNtile50th = reader.uint32();
          continue;
        case 41:
          if (tag != 328) {
            break;
          }

          message.pingHistogram25 = reader.uint32();
          continue;
        case 42:
          if (tag != 336) {
            break;
          }

          message.pingHistogram50 = reader.uint32();
          continue;
        case 43:
          if (tag != 344) {
            break;
          }

          message.pingHistogram75 = reader.uint32();
          continue;
        case 44:
          if (tag != 352) {
            break;
          }

          message.pingHistogram100 = reader.uint32();
          continue;
        case 45:
          if (tag != 360) {
            break;
          }

          message.pingHistogram125 = reader.uint32();
          continue;
        case 46:
          if (tag != 368) {
            break;
          }

          message.pingHistogram150 = reader.uint32();
          continue;
        case 47:
          if (tag != 376) {
            break;
          }

          message.pingHistogram200 = reader.uint32();
          continue;
        case 48:
          if (tag != 384) {
            break;
          }

          message.pingHistogram300 = reader.uint32();
          continue;
        case 49:
          if (tag != 392) {
            break;
          }

          message.pingHistogramMax = reader.uint32();
          continue;
        case 50:
          if (tag != 400) {
            break;
          }

          message.pingNtile5th = reader.uint32();
          continue;
        case 51:
          if (tag != 408) {
            break;
          }

          message.pingNtile50th = reader.uint32();
          continue;
        case 52:
          if (tag != 416) {
            break;
          }

          message.pingNtile75th = reader.uint32();
          continue;
        case 53:
          if (tag != 424) {
            break;
          }

          message.pingNtile95th = reader.uint32();
          continue;
        case 54:
          if (tag != 432) {
            break;
          }

          message.pingNtile98th = reader.uint32();
          continue;
        case 61:
          if (tag != 488) {
            break;
          }

          message.jitterHistogramNegligible = reader.uint32();
          continue;
        case 62:
          if (tag != 496) {
            break;
          }

          message.jitterHistogram1 = reader.uint32();
          continue;
        case 63:
          if (tag != 504) {
            break;
          }

          message.jitterHistogram2 = reader.uint32();
          continue;
        case 64:
          if (tag != 512) {
            break;
          }

          message.jitterHistogram5 = reader.uint32();
          continue;
        case 65:
          if (tag != 520) {
            break;
          }

          message.jitterHistogram10 = reader.uint32();
          continue;
        case 66:
          if (tag != 528) {
            break;
          }

          message.jitterHistogram20 = reader.uint32();
          continue;
        case 67:
          if (tag != 536) {
            break;
          }

          message.txspeedMax = reader.uint32();
          continue;
        case 68:
          if (tag != 544) {
            break;
          }

          message.txspeedHistogram16 = reader.uint32();
          continue;
        case 69:
          if (tag != 552) {
            break;
          }

          message.txspeedHistogram32 = reader.uint32();
          continue;
        case 70:
          if (tag != 560) {
            break;
          }

          message.txspeedHistogram64 = reader.uint32();
          continue;
        case 71:
          if (tag != 568) {
            break;
          }

          message.txspeedHistogram128 = reader.uint32();
          continue;
        case 72:
          if (tag != 576) {
            break;
          }

          message.txspeedHistogram256 = reader.uint32();
          continue;
        case 73:
          if (tag != 584) {
            break;
          }

          message.txspeedHistogram512 = reader.uint32();
          continue;
        case 74:
          if (tag != 592) {
            break;
          }

          message.txspeedHistogram1024 = reader.uint32();
          continue;
        case 75:
          if (tag != 600) {
            break;
          }

          message.txspeedHistogramMax = reader.uint32();
          continue;
        case 76:
          if (tag != 608) {
            break;
          }

          message.txspeedNtile5th = reader.uint32();
          continue;
        case 77:
          if (tag != 616) {
            break;
          }

          message.txspeedNtile50th = reader.uint32();
          continue;
        case 78:
          if (tag != 624) {
            break;
          }

          message.txspeedNtile75th = reader.uint32();
          continue;
        case 79:
          if (tag != 632) {
            break;
          }

          message.txspeedNtile95th = reader.uint32();
          continue;
        case 80:
          if (tag != 640) {
            break;
          }

          message.txspeedNtile98th = reader.uint32();
          continue;
        case 81:
          if (tag != 648) {
            break;
          }

          message.rxspeedMax = reader.uint32();
          continue;
        case 82:
          if (tag != 656) {
            break;
          }

          message.rxspeedHistogram16 = reader.uint32();
          continue;
        case 83:
          if (tag != 664) {
            break;
          }

          message.rxspeedHistogram32 = reader.uint32();
          continue;
        case 84:
          if (tag != 672) {
            break;
          }

          message.rxspeedHistogram64 = reader.uint32();
          continue;
        case 85:
          if (tag != 680) {
            break;
          }

          message.rxspeedHistogram128 = reader.uint32();
          continue;
        case 86:
          if (tag != 688) {
            break;
          }

          message.rxspeedHistogram256 = reader.uint32();
          continue;
        case 87:
          if (tag != 696) {
            break;
          }

          message.rxspeedHistogram512 = reader.uint32();
          continue;
        case 88:
          if (tag != 704) {
            break;
          }

          message.rxspeedHistogram1024 = reader.uint32();
          continue;
        case 89:
          if (tag != 712) {
            break;
          }

          message.rxspeedHistogramMax = reader.uint32();
          continue;
        case 90:
          if (tag != 720) {
            break;
          }

          message.rxspeedNtile5th = reader.uint32();
          continue;
        case 91:
          if (tag != 728) {
            break;
          }

          message.rxspeedNtile50th = reader.uint32();
          continue;
        case 92:
          if (tag != 736) {
            break;
          }

          message.rxspeedNtile75th = reader.uint32();
          continue;
        case 93:
          if (tag != 744) {
            break;
          }

          message.rxspeedNtile95th = reader.uint32();
          continue;
        case 94:
          if (tag != 752) {
            break;
          }

          message.rxspeedNtile98th = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramLinkLifetimeStats {
    return {
      connectedSeconds: isSet(object.connectedSeconds) ? Number(object.connectedSeconds) : 0,
      packetsSent: isSet(object.packetsSent) ? String(object.packetsSent) : "0",
      kbSent: isSet(object.kbSent) ? String(object.kbSent) : "0",
      packetsRecv: isSet(object.packetsRecv) ? String(object.packetsRecv) : "0",
      kbRecv: isSet(object.kbRecv) ? String(object.kbRecv) : "0",
      packetsRecvSequenced: isSet(object.packetsRecvSequenced) ? String(object.packetsRecvSequenced) : "0",
      packetsRecvDropped: isSet(object.packetsRecvDropped) ? String(object.packetsRecvDropped) : "0",
      packetsRecvOutOfOrder: isSet(object.packetsRecvOutOfOrder) ? String(object.packetsRecvOutOfOrder) : "0",
      packetsRecvDuplicate: isSet(object.packetsRecvDuplicate) ? String(object.packetsRecvDuplicate) : "0",
      packetsRecvLurch: isSet(object.packetsRecvLurch) ? String(object.packetsRecvLurch) : "0",
      multipathPacketsRecvSequenced: Array.isArray(object?.multipathPacketsRecvSequenced)
        ? object.multipathPacketsRecvSequenced.map((e: any) => String(e))
        : [],
      multipathPacketsRecvLater: Array.isArray(object?.multipathPacketsRecvLater)
        ? object.multipathPacketsRecvLater.map((e: any) => String(e))
        : [],
      multipathSendEnabled: isSet(object.multipathSendEnabled) ? Number(object.multipathSendEnabled) : 0,
      qualityHistogram100: isSet(object.qualityHistogram100) ? Number(object.qualityHistogram100) : 0,
      qualityHistogram99: isSet(object.qualityHistogram99) ? Number(object.qualityHistogram99) : 0,
      qualityHistogram97: isSet(object.qualityHistogram97) ? Number(object.qualityHistogram97) : 0,
      qualityHistogram95: isSet(object.qualityHistogram95) ? Number(object.qualityHistogram95) : 0,
      qualityHistogram90: isSet(object.qualityHistogram90) ? Number(object.qualityHistogram90) : 0,
      qualityHistogram75: isSet(object.qualityHistogram75) ? Number(object.qualityHistogram75) : 0,
      qualityHistogram50: isSet(object.qualityHistogram50) ? Number(object.qualityHistogram50) : 0,
      qualityHistogram1: isSet(object.qualityHistogram1) ? Number(object.qualityHistogram1) : 0,
      qualityHistogramDead: isSet(object.qualityHistogramDead) ? Number(object.qualityHistogramDead) : 0,
      qualityNtile2nd: isSet(object.qualityNtile2nd) ? Number(object.qualityNtile2nd) : 0,
      qualityNtile5th: isSet(object.qualityNtile5th) ? Number(object.qualityNtile5th) : 0,
      qualityNtile25th: isSet(object.qualityNtile25th) ? Number(object.qualityNtile25th) : 0,
      qualityNtile50th: isSet(object.qualityNtile50th) ? Number(object.qualityNtile50th) : 0,
      pingHistogram25: isSet(object.pingHistogram25) ? Number(object.pingHistogram25) : 0,
      pingHistogram50: isSet(object.pingHistogram50) ? Number(object.pingHistogram50) : 0,
      pingHistogram75: isSet(object.pingHistogram75) ? Number(object.pingHistogram75) : 0,
      pingHistogram100: isSet(object.pingHistogram100) ? Number(object.pingHistogram100) : 0,
      pingHistogram125: isSet(object.pingHistogram125) ? Number(object.pingHistogram125) : 0,
      pingHistogram150: isSet(object.pingHistogram150) ? Number(object.pingHistogram150) : 0,
      pingHistogram200: isSet(object.pingHistogram200) ? Number(object.pingHistogram200) : 0,
      pingHistogram300: isSet(object.pingHistogram300) ? Number(object.pingHistogram300) : 0,
      pingHistogramMax: isSet(object.pingHistogramMax) ? Number(object.pingHistogramMax) : 0,
      pingNtile5th: isSet(object.pingNtile5th) ? Number(object.pingNtile5th) : 0,
      pingNtile50th: isSet(object.pingNtile50th) ? Number(object.pingNtile50th) : 0,
      pingNtile75th: isSet(object.pingNtile75th) ? Number(object.pingNtile75th) : 0,
      pingNtile95th: isSet(object.pingNtile95th) ? Number(object.pingNtile95th) : 0,
      pingNtile98th: isSet(object.pingNtile98th) ? Number(object.pingNtile98th) : 0,
      jitterHistogramNegligible: isSet(object.jitterHistogramNegligible) ? Number(object.jitterHistogramNegligible) : 0,
      jitterHistogram1: isSet(object.jitterHistogram1) ? Number(object.jitterHistogram1) : 0,
      jitterHistogram2: isSet(object.jitterHistogram2) ? Number(object.jitterHistogram2) : 0,
      jitterHistogram5: isSet(object.jitterHistogram5) ? Number(object.jitterHistogram5) : 0,
      jitterHistogram10: isSet(object.jitterHistogram10) ? Number(object.jitterHistogram10) : 0,
      jitterHistogram20: isSet(object.jitterHistogram20) ? Number(object.jitterHistogram20) : 0,
      txspeedMax: isSet(object.txspeedMax) ? Number(object.txspeedMax) : 0,
      txspeedHistogram16: isSet(object.txspeedHistogram16) ? Number(object.txspeedHistogram16) : 0,
      txspeedHistogram32: isSet(object.txspeedHistogram32) ? Number(object.txspeedHistogram32) : 0,
      txspeedHistogram64: isSet(object.txspeedHistogram64) ? Number(object.txspeedHistogram64) : 0,
      txspeedHistogram128: isSet(object.txspeedHistogram128) ? Number(object.txspeedHistogram128) : 0,
      txspeedHistogram256: isSet(object.txspeedHistogram256) ? Number(object.txspeedHistogram256) : 0,
      txspeedHistogram512: isSet(object.txspeedHistogram512) ? Number(object.txspeedHistogram512) : 0,
      txspeedHistogram1024: isSet(object.txspeedHistogram1024) ? Number(object.txspeedHistogram1024) : 0,
      txspeedHistogramMax: isSet(object.txspeedHistogramMax) ? Number(object.txspeedHistogramMax) : 0,
      txspeedNtile5th: isSet(object.txspeedNtile5th) ? Number(object.txspeedNtile5th) : 0,
      txspeedNtile50th: isSet(object.txspeedNtile50th) ? Number(object.txspeedNtile50th) : 0,
      txspeedNtile75th: isSet(object.txspeedNtile75th) ? Number(object.txspeedNtile75th) : 0,
      txspeedNtile95th: isSet(object.txspeedNtile95th) ? Number(object.txspeedNtile95th) : 0,
      txspeedNtile98th: isSet(object.txspeedNtile98th) ? Number(object.txspeedNtile98th) : 0,
      rxspeedMax: isSet(object.rxspeedMax) ? Number(object.rxspeedMax) : 0,
      rxspeedHistogram16: isSet(object.rxspeedHistogram16) ? Number(object.rxspeedHistogram16) : 0,
      rxspeedHistogram32: isSet(object.rxspeedHistogram32) ? Number(object.rxspeedHistogram32) : 0,
      rxspeedHistogram64: isSet(object.rxspeedHistogram64) ? Number(object.rxspeedHistogram64) : 0,
      rxspeedHistogram128: isSet(object.rxspeedHistogram128) ? Number(object.rxspeedHistogram128) : 0,
      rxspeedHistogram256: isSet(object.rxspeedHistogram256) ? Number(object.rxspeedHistogram256) : 0,
      rxspeedHistogram512: isSet(object.rxspeedHistogram512) ? Number(object.rxspeedHistogram512) : 0,
      rxspeedHistogram1024: isSet(object.rxspeedHistogram1024) ? Number(object.rxspeedHistogram1024) : 0,
      rxspeedHistogramMax: isSet(object.rxspeedHistogramMax) ? Number(object.rxspeedHistogramMax) : 0,
      rxspeedNtile5th: isSet(object.rxspeedNtile5th) ? Number(object.rxspeedNtile5th) : 0,
      rxspeedNtile50th: isSet(object.rxspeedNtile50th) ? Number(object.rxspeedNtile50th) : 0,
      rxspeedNtile75th: isSet(object.rxspeedNtile75th) ? Number(object.rxspeedNtile75th) : 0,
      rxspeedNtile95th: isSet(object.rxspeedNtile95th) ? Number(object.rxspeedNtile95th) : 0,
      rxspeedNtile98th: isSet(object.rxspeedNtile98th) ? Number(object.rxspeedNtile98th) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramLinkLifetimeStats): unknown {
    const obj: any = {};
    message.connectedSeconds !== undefined && (obj.connectedSeconds = Math.round(message.connectedSeconds));
    message.packetsSent !== undefined && (obj.packetsSent = message.packetsSent);
    message.kbSent !== undefined && (obj.kbSent = message.kbSent);
    message.packetsRecv !== undefined && (obj.packetsRecv = message.packetsRecv);
    message.kbRecv !== undefined && (obj.kbRecv = message.kbRecv);
    message.packetsRecvSequenced !== undefined && (obj.packetsRecvSequenced = message.packetsRecvSequenced);
    message.packetsRecvDropped !== undefined && (obj.packetsRecvDropped = message.packetsRecvDropped);
    message.packetsRecvOutOfOrder !== undefined && (obj.packetsRecvOutOfOrder = message.packetsRecvOutOfOrder);
    message.packetsRecvDuplicate !== undefined && (obj.packetsRecvDuplicate = message.packetsRecvDuplicate);
    message.packetsRecvLurch !== undefined && (obj.packetsRecvLurch = message.packetsRecvLurch);
    if (message.multipathPacketsRecvSequenced) {
      obj.multipathPacketsRecvSequenced = message.multipathPacketsRecvSequenced.map((e) => e);
    } else {
      obj.multipathPacketsRecvSequenced = [];
    }
    if (message.multipathPacketsRecvLater) {
      obj.multipathPacketsRecvLater = message.multipathPacketsRecvLater.map((e) => e);
    } else {
      obj.multipathPacketsRecvLater = [];
    }
    message.multipathSendEnabled !== undefined && (obj.multipathSendEnabled = Math.round(message.multipathSendEnabled));
    message.qualityHistogram100 !== undefined && (obj.qualityHistogram100 = Math.round(message.qualityHistogram100));
    message.qualityHistogram99 !== undefined && (obj.qualityHistogram99 = Math.round(message.qualityHistogram99));
    message.qualityHistogram97 !== undefined && (obj.qualityHistogram97 = Math.round(message.qualityHistogram97));
    message.qualityHistogram95 !== undefined && (obj.qualityHistogram95 = Math.round(message.qualityHistogram95));
    message.qualityHistogram90 !== undefined && (obj.qualityHistogram90 = Math.round(message.qualityHistogram90));
    message.qualityHistogram75 !== undefined && (obj.qualityHistogram75 = Math.round(message.qualityHistogram75));
    message.qualityHistogram50 !== undefined && (obj.qualityHistogram50 = Math.round(message.qualityHistogram50));
    message.qualityHistogram1 !== undefined && (obj.qualityHistogram1 = Math.round(message.qualityHistogram1));
    message.qualityHistogramDead !== undefined && (obj.qualityHistogramDead = Math.round(message.qualityHistogramDead));
    message.qualityNtile2nd !== undefined && (obj.qualityNtile2nd = Math.round(message.qualityNtile2nd));
    message.qualityNtile5th !== undefined && (obj.qualityNtile5th = Math.round(message.qualityNtile5th));
    message.qualityNtile25th !== undefined && (obj.qualityNtile25th = Math.round(message.qualityNtile25th));
    message.qualityNtile50th !== undefined && (obj.qualityNtile50th = Math.round(message.qualityNtile50th));
    message.pingHistogram25 !== undefined && (obj.pingHistogram25 = Math.round(message.pingHistogram25));
    message.pingHistogram50 !== undefined && (obj.pingHistogram50 = Math.round(message.pingHistogram50));
    message.pingHistogram75 !== undefined && (obj.pingHistogram75 = Math.round(message.pingHistogram75));
    message.pingHistogram100 !== undefined && (obj.pingHistogram100 = Math.round(message.pingHistogram100));
    message.pingHistogram125 !== undefined && (obj.pingHistogram125 = Math.round(message.pingHistogram125));
    message.pingHistogram150 !== undefined && (obj.pingHistogram150 = Math.round(message.pingHistogram150));
    message.pingHistogram200 !== undefined && (obj.pingHistogram200 = Math.round(message.pingHistogram200));
    message.pingHistogram300 !== undefined && (obj.pingHistogram300 = Math.round(message.pingHistogram300));
    message.pingHistogramMax !== undefined && (obj.pingHistogramMax = Math.round(message.pingHistogramMax));
    message.pingNtile5th !== undefined && (obj.pingNtile5th = Math.round(message.pingNtile5th));
    message.pingNtile50th !== undefined && (obj.pingNtile50th = Math.round(message.pingNtile50th));
    message.pingNtile75th !== undefined && (obj.pingNtile75th = Math.round(message.pingNtile75th));
    message.pingNtile95th !== undefined && (obj.pingNtile95th = Math.round(message.pingNtile95th));
    message.pingNtile98th !== undefined && (obj.pingNtile98th = Math.round(message.pingNtile98th));
    message.jitterHistogramNegligible !== undefined &&
      (obj.jitterHistogramNegligible = Math.round(message.jitterHistogramNegligible));
    message.jitterHistogram1 !== undefined && (obj.jitterHistogram1 = Math.round(message.jitterHistogram1));
    message.jitterHistogram2 !== undefined && (obj.jitterHistogram2 = Math.round(message.jitterHistogram2));
    message.jitterHistogram5 !== undefined && (obj.jitterHistogram5 = Math.round(message.jitterHistogram5));
    message.jitterHistogram10 !== undefined && (obj.jitterHistogram10 = Math.round(message.jitterHistogram10));
    message.jitterHistogram20 !== undefined && (obj.jitterHistogram20 = Math.round(message.jitterHistogram20));
    message.txspeedMax !== undefined && (obj.txspeedMax = Math.round(message.txspeedMax));
    message.txspeedHistogram16 !== undefined && (obj.txspeedHistogram16 = Math.round(message.txspeedHistogram16));
    message.txspeedHistogram32 !== undefined && (obj.txspeedHistogram32 = Math.round(message.txspeedHistogram32));
    message.txspeedHistogram64 !== undefined && (obj.txspeedHistogram64 = Math.round(message.txspeedHistogram64));
    message.txspeedHistogram128 !== undefined && (obj.txspeedHistogram128 = Math.round(message.txspeedHistogram128));
    message.txspeedHistogram256 !== undefined && (obj.txspeedHistogram256 = Math.round(message.txspeedHistogram256));
    message.txspeedHistogram512 !== undefined && (obj.txspeedHistogram512 = Math.round(message.txspeedHistogram512));
    message.txspeedHistogram1024 !== undefined && (obj.txspeedHistogram1024 = Math.round(message.txspeedHistogram1024));
    message.txspeedHistogramMax !== undefined && (obj.txspeedHistogramMax = Math.round(message.txspeedHistogramMax));
    message.txspeedNtile5th !== undefined && (obj.txspeedNtile5th = Math.round(message.txspeedNtile5th));
    message.txspeedNtile50th !== undefined && (obj.txspeedNtile50th = Math.round(message.txspeedNtile50th));
    message.txspeedNtile75th !== undefined && (obj.txspeedNtile75th = Math.round(message.txspeedNtile75th));
    message.txspeedNtile95th !== undefined && (obj.txspeedNtile95th = Math.round(message.txspeedNtile95th));
    message.txspeedNtile98th !== undefined && (obj.txspeedNtile98th = Math.round(message.txspeedNtile98th));
    message.rxspeedMax !== undefined && (obj.rxspeedMax = Math.round(message.rxspeedMax));
    message.rxspeedHistogram16 !== undefined && (obj.rxspeedHistogram16 = Math.round(message.rxspeedHistogram16));
    message.rxspeedHistogram32 !== undefined && (obj.rxspeedHistogram32 = Math.round(message.rxspeedHistogram32));
    message.rxspeedHistogram64 !== undefined && (obj.rxspeedHistogram64 = Math.round(message.rxspeedHistogram64));
    message.rxspeedHistogram128 !== undefined && (obj.rxspeedHistogram128 = Math.round(message.rxspeedHistogram128));
    message.rxspeedHistogram256 !== undefined && (obj.rxspeedHistogram256 = Math.round(message.rxspeedHistogram256));
    message.rxspeedHistogram512 !== undefined && (obj.rxspeedHistogram512 = Math.round(message.rxspeedHistogram512));
    message.rxspeedHistogram1024 !== undefined && (obj.rxspeedHistogram1024 = Math.round(message.rxspeedHistogram1024));
    message.rxspeedHistogramMax !== undefined && (obj.rxspeedHistogramMax = Math.round(message.rxspeedHistogramMax));
    message.rxspeedNtile5th !== undefined && (obj.rxspeedNtile5th = Math.round(message.rxspeedNtile5th));
    message.rxspeedNtile50th !== undefined && (obj.rxspeedNtile50th = Math.round(message.rxspeedNtile50th));
    message.rxspeedNtile75th !== undefined && (obj.rxspeedNtile75th = Math.round(message.rxspeedNtile75th));
    message.rxspeedNtile95th !== undefined && (obj.rxspeedNtile95th = Math.round(message.rxspeedNtile95th));
    message.rxspeedNtile98th !== undefined && (obj.rxspeedNtile98th = Math.round(message.rxspeedNtile98th));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramLinkLifetimeStats>): CMsgSteamDatagramLinkLifetimeStats {
    return CMsgSteamDatagramLinkLifetimeStats.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramLinkLifetimeStats>): CMsgSteamDatagramLinkLifetimeStats {
    const message = createBaseCMsgSteamDatagramLinkLifetimeStats();
    message.connectedSeconds = object.connectedSeconds ?? 0;
    message.packetsSent = object.packetsSent ?? "0";
    message.kbSent = object.kbSent ?? "0";
    message.packetsRecv = object.packetsRecv ?? "0";
    message.kbRecv = object.kbRecv ?? "0";
    message.packetsRecvSequenced = object.packetsRecvSequenced ?? "0";
    message.packetsRecvDropped = object.packetsRecvDropped ?? "0";
    message.packetsRecvOutOfOrder = object.packetsRecvOutOfOrder ?? "0";
    message.packetsRecvDuplicate = object.packetsRecvDuplicate ?? "0";
    message.packetsRecvLurch = object.packetsRecvLurch ?? "0";
    message.multipathPacketsRecvSequenced = object.multipathPacketsRecvSequenced?.map((e) => e) || [];
    message.multipathPacketsRecvLater = object.multipathPacketsRecvLater?.map((e) => e) || [];
    message.multipathSendEnabled = object.multipathSendEnabled ?? 0;
    message.qualityHistogram100 = object.qualityHistogram100 ?? 0;
    message.qualityHistogram99 = object.qualityHistogram99 ?? 0;
    message.qualityHistogram97 = object.qualityHistogram97 ?? 0;
    message.qualityHistogram95 = object.qualityHistogram95 ?? 0;
    message.qualityHistogram90 = object.qualityHistogram90 ?? 0;
    message.qualityHistogram75 = object.qualityHistogram75 ?? 0;
    message.qualityHistogram50 = object.qualityHistogram50 ?? 0;
    message.qualityHistogram1 = object.qualityHistogram1 ?? 0;
    message.qualityHistogramDead = object.qualityHistogramDead ?? 0;
    message.qualityNtile2nd = object.qualityNtile2nd ?? 0;
    message.qualityNtile5th = object.qualityNtile5th ?? 0;
    message.qualityNtile25th = object.qualityNtile25th ?? 0;
    message.qualityNtile50th = object.qualityNtile50th ?? 0;
    message.pingHistogram25 = object.pingHistogram25 ?? 0;
    message.pingHistogram50 = object.pingHistogram50 ?? 0;
    message.pingHistogram75 = object.pingHistogram75 ?? 0;
    message.pingHistogram100 = object.pingHistogram100 ?? 0;
    message.pingHistogram125 = object.pingHistogram125 ?? 0;
    message.pingHistogram150 = object.pingHistogram150 ?? 0;
    message.pingHistogram200 = object.pingHistogram200 ?? 0;
    message.pingHistogram300 = object.pingHistogram300 ?? 0;
    message.pingHistogramMax = object.pingHistogramMax ?? 0;
    message.pingNtile5th = object.pingNtile5th ?? 0;
    message.pingNtile50th = object.pingNtile50th ?? 0;
    message.pingNtile75th = object.pingNtile75th ?? 0;
    message.pingNtile95th = object.pingNtile95th ?? 0;
    message.pingNtile98th = object.pingNtile98th ?? 0;
    message.jitterHistogramNegligible = object.jitterHistogramNegligible ?? 0;
    message.jitterHistogram1 = object.jitterHistogram1 ?? 0;
    message.jitterHistogram2 = object.jitterHistogram2 ?? 0;
    message.jitterHistogram5 = object.jitterHistogram5 ?? 0;
    message.jitterHistogram10 = object.jitterHistogram10 ?? 0;
    message.jitterHistogram20 = object.jitterHistogram20 ?? 0;
    message.txspeedMax = object.txspeedMax ?? 0;
    message.txspeedHistogram16 = object.txspeedHistogram16 ?? 0;
    message.txspeedHistogram32 = object.txspeedHistogram32 ?? 0;
    message.txspeedHistogram64 = object.txspeedHistogram64 ?? 0;
    message.txspeedHistogram128 = object.txspeedHistogram128 ?? 0;
    message.txspeedHistogram256 = object.txspeedHistogram256 ?? 0;
    message.txspeedHistogram512 = object.txspeedHistogram512 ?? 0;
    message.txspeedHistogram1024 = object.txspeedHistogram1024 ?? 0;
    message.txspeedHistogramMax = object.txspeedHistogramMax ?? 0;
    message.txspeedNtile5th = object.txspeedNtile5th ?? 0;
    message.txspeedNtile50th = object.txspeedNtile50th ?? 0;
    message.txspeedNtile75th = object.txspeedNtile75th ?? 0;
    message.txspeedNtile95th = object.txspeedNtile95th ?? 0;
    message.txspeedNtile98th = object.txspeedNtile98th ?? 0;
    message.rxspeedMax = object.rxspeedMax ?? 0;
    message.rxspeedHistogram16 = object.rxspeedHistogram16 ?? 0;
    message.rxspeedHistogram32 = object.rxspeedHistogram32 ?? 0;
    message.rxspeedHistogram64 = object.rxspeedHistogram64 ?? 0;
    message.rxspeedHistogram128 = object.rxspeedHistogram128 ?? 0;
    message.rxspeedHistogram256 = object.rxspeedHistogram256 ?? 0;
    message.rxspeedHistogram512 = object.rxspeedHistogram512 ?? 0;
    message.rxspeedHistogram1024 = object.rxspeedHistogram1024 ?? 0;
    message.rxspeedHistogramMax = object.rxspeedHistogramMax ?? 0;
    message.rxspeedNtile5th = object.rxspeedNtile5th ?? 0;
    message.rxspeedNtile50th = object.rxspeedNtile50th ?? 0;
    message.rxspeedNtile75th = object.rxspeedNtile75th ?? 0;
    message.rxspeedNtile95th = object.rxspeedNtile95th ?? 0;
    message.rxspeedNtile98th = object.rxspeedNtile98th ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramConnectionQuality(): CMsgSteamDatagramConnectionQuality {
  return { instantaneous: undefined, lifetime: undefined };
}

export const CMsgSteamDatagramConnectionQuality = {
  encode(message: CMsgSteamDatagramConnectionQuality, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instantaneous !== undefined) {
      CMsgSteamDatagramLinkInstantaneousStats.encode(message.instantaneous, writer.uint32(10).fork()).ldelim();
    }
    if (message.lifetime !== undefined) {
      CMsgSteamDatagramLinkLifetimeStats.encode(message.lifetime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramConnectionQuality {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramConnectionQuality();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.instantaneous = CMsgSteamDatagramLinkInstantaneousStats.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.lifetime = CMsgSteamDatagramLinkLifetimeStats.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramConnectionQuality {
    return {
      instantaneous: isSet(object.instantaneous)
        ? CMsgSteamDatagramLinkInstantaneousStats.fromJSON(object.instantaneous)
        : undefined,
      lifetime: isSet(object.lifetime) ? CMsgSteamDatagramLinkLifetimeStats.fromJSON(object.lifetime) : undefined,
    };
  },

  toJSON(message: CMsgSteamDatagramConnectionQuality): unknown {
    const obj: any = {};
    message.instantaneous !== undefined && (obj.instantaneous = message.instantaneous
      ? CMsgSteamDatagramLinkInstantaneousStats.toJSON(message.instantaneous)
      : undefined);
    message.lifetime !== undefined &&
      (obj.lifetime = message.lifetime ? CMsgSteamDatagramLinkLifetimeStats.toJSON(message.lifetime) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamDatagramConnectionQuality>): CMsgSteamDatagramConnectionQuality {
    return CMsgSteamDatagramConnectionQuality.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamDatagramConnectionQuality>): CMsgSteamDatagramConnectionQuality {
    const message = createBaseCMsgSteamDatagramConnectionQuality();
    message.instantaneous = (object.instantaneous !== undefined && object.instantaneous !== null)
      ? CMsgSteamDatagramLinkInstantaneousStats.fromPartial(object.instantaneous)
      : undefined;
    message.lifetime = (object.lifetime !== undefined && object.lifetime !== null)
      ? CMsgSteamDatagramLinkLifetimeStats.fromPartial(object.lifetime)
      : undefined;
    return message;
  },
};

function createBaseCMsgICECandidate(): CMsgICECandidate {
  return { candidate: "" };
}

export const CMsgICECandidate = {
  encode(message: CMsgICECandidate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.candidate !== "") {
      writer.uint32(26).string(message.candidate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgICECandidate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgICECandidate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag != 26) {
            break;
          }

          message.candidate = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgICECandidate {
    return { candidate: isSet(object.candidate) ? String(object.candidate) : "" };
  },

  toJSON(message: CMsgICECandidate): unknown {
    const obj: any = {};
    message.candidate !== undefined && (obj.candidate = message.candidate);
    return obj;
  },

  create(base?: DeepPartial<CMsgICECandidate>): CMsgICECandidate {
    return CMsgICECandidate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgICECandidate>): CMsgICECandidate {
    const message = createBaseCMsgICECandidate();
    message.candidate = object.candidate ?? "";
    return message;
  },
};

function createBaseCMsgICERendezvous(): CMsgICERendezvous {
  return { auth: undefined, addCandidate: undefined };
}

export const CMsgICERendezvous = {
  encode(message: CMsgICERendezvous, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auth !== undefined) {
      CMsgICERendezvous_Auth.encode(message.auth, writer.uint32(18).fork()).ldelim();
    }
    if (message.addCandidate !== undefined) {
      CMsgICECandidate.encode(message.addCandidate, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgICERendezvous {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgICERendezvous();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.auth = CMsgICERendezvous_Auth.decode(reader, reader.uint32());
          continue;
        case 1:
          if (tag != 10) {
            break;
          }

          message.addCandidate = CMsgICECandidate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgICERendezvous {
    return {
      auth: isSet(object.auth) ? CMsgICERendezvous_Auth.fromJSON(object.auth) : undefined,
      addCandidate: isSet(object.addCandidate) ? CMsgICECandidate.fromJSON(object.addCandidate) : undefined,
    };
  },

  toJSON(message: CMsgICERendezvous): unknown {
    const obj: any = {};
    message.auth !== undefined && (obj.auth = message.auth ? CMsgICERendezvous_Auth.toJSON(message.auth) : undefined);
    message.addCandidate !== undefined &&
      (obj.addCandidate = message.addCandidate ? CMsgICECandidate.toJSON(message.addCandidate) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgICERendezvous>): CMsgICERendezvous {
    return CMsgICERendezvous.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgICERendezvous>): CMsgICERendezvous {
    const message = createBaseCMsgICERendezvous();
    message.auth = (object.auth !== undefined && object.auth !== null)
      ? CMsgICERendezvous_Auth.fromPartial(object.auth)
      : undefined;
    message.addCandidate = (object.addCandidate !== undefined && object.addCandidate !== null)
      ? CMsgICECandidate.fromPartial(object.addCandidate)
      : undefined;
    return message;
  },
};

function createBaseCMsgICERendezvous_Auth(): CMsgICERendezvous_Auth {
  return { pwdFrag: "" };
}

export const CMsgICERendezvous_Auth = {
  encode(message: CMsgICERendezvous_Auth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pwdFrag !== "") {
      writer.uint32(10).string(message.pwdFrag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgICERendezvous_Auth {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgICERendezvous_Auth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pwdFrag = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgICERendezvous_Auth {
    return { pwdFrag: isSet(object.pwdFrag) ? String(object.pwdFrag) : "" };
  },

  toJSON(message: CMsgICERendezvous_Auth): unknown {
    const obj: any = {};
    message.pwdFrag !== undefined && (obj.pwdFrag = message.pwdFrag);
    return obj;
  },

  create(base?: DeepPartial<CMsgICERendezvous_Auth>): CMsgICERendezvous_Auth {
    return CMsgICERendezvous_Auth.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgICERendezvous_Auth>): CMsgICERendezvous_Auth {
    const message = createBaseCMsgICERendezvous_Auth();
    message.pwdFrag = object.pwdFrag ?? "";
    return message;
  },
};

function createBaseCMsgSteamNetworkingP2PRendezvous(): CMsgSteamNetworkingP2PRendezvous {
  return {
    fromIdentity: "",
    fromConnectionId: 0,
    toIdentity: "",
    toConnectionId: 0,
    sdrRoutes: Buffer.alloc(0),
    ackPeerRoutesRevision: 0,
    iceEnabled: false,
    hostedServerTicket: Buffer.alloc(0),
    connectRequest: undefined,
    connectOk: undefined,
    connectionClosed: undefined,
    ackReliableMsg: 0,
    firstReliableMsg: 0,
    reliableMessages: [],
    applicationMessages: [],
  };
}

export const CMsgSteamNetworkingP2PRendezvous = {
  encode(message: CMsgSteamNetworkingP2PRendezvous, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromIdentity !== "") {
      writer.uint32(66).string(message.fromIdentity);
    }
    if (message.fromConnectionId !== 0) {
      writer.uint32(77).fixed32(message.fromConnectionId);
    }
    if (message.toIdentity !== "") {
      writer.uint32(82).string(message.toIdentity);
    }
    if (message.toConnectionId !== 0) {
      writer.uint32(13).fixed32(message.toConnectionId);
    }
    if (message.sdrRoutes.length !== 0) {
      writer.uint32(18).bytes(message.sdrRoutes);
    }
    if (message.ackPeerRoutesRevision !== 0) {
      writer.uint32(24).uint32(message.ackPeerRoutesRevision);
    }
    if (message.iceEnabled === true) {
      writer.uint32(56).bool(message.iceEnabled);
    }
    if (message.hostedServerTicket.length !== 0) {
      writer.uint32(114).bytes(message.hostedServerTicket);
    }
    if (message.connectRequest !== undefined) {
      CMsgSteamNetworkingP2PRendezvous_ConnectRequest.encode(message.connectRequest, writer.uint32(34).fork()).ldelim();
    }
    if (message.connectOk !== undefined) {
      CMsgSteamNetworkingP2PRendezvous_ConnectOK.encode(message.connectOk, writer.uint32(42).fork()).ldelim();
    }
    if (message.connectionClosed !== undefined) {
      CMsgSteamNetworkingP2PRendezvous_ConnectionClosed.encode(message.connectionClosed, writer.uint32(50).fork())
        .ldelim();
    }
    if (message.ackReliableMsg !== 0) {
      writer.uint32(88).uint32(message.ackReliableMsg);
    }
    if (message.firstReliableMsg !== 0) {
      writer.uint32(96).uint32(message.firstReliableMsg);
    }
    for (const v of message.reliableMessages) {
      CMsgSteamNetworkingP2PRendezvous_ReliableMessage.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.applicationMessages) {
      CMsgSteamNetworkingP2PRendezvous_ApplicationMessage.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamNetworkingP2PRendezvous {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamNetworkingP2PRendezvous();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 8:
          if (tag != 66) {
            break;
          }

          message.fromIdentity = reader.string();
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.fromConnectionId = reader.fixed32();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.toIdentity = reader.string();
          continue;
        case 1:
          if (tag != 13) {
            break;
          }

          message.toConnectionId = reader.fixed32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.sdrRoutes = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.ackPeerRoutesRevision = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.iceEnabled = reader.bool();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.hostedServerTicket = reader.bytes() as Buffer;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.connectRequest = CMsgSteamNetworkingP2PRendezvous_ConnectRequest.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.connectOk = CMsgSteamNetworkingP2PRendezvous_ConnectOK.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.connectionClosed = CMsgSteamNetworkingP2PRendezvous_ConnectionClosed.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.ackReliableMsg = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.firstReliableMsg = reader.uint32();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.reliableMessages.push(
            CMsgSteamNetworkingP2PRendezvous_ReliableMessage.decode(reader, reader.uint32()),
          );
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.applicationMessages.push(
            CMsgSteamNetworkingP2PRendezvous_ApplicationMessage.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamNetworkingP2PRendezvous {
    return {
      fromIdentity: isSet(object.fromIdentity) ? String(object.fromIdentity) : "",
      fromConnectionId: isSet(object.fromConnectionId) ? Number(object.fromConnectionId) : 0,
      toIdentity: isSet(object.toIdentity) ? String(object.toIdentity) : "",
      toConnectionId: isSet(object.toConnectionId) ? Number(object.toConnectionId) : 0,
      sdrRoutes: isSet(object.sdrRoutes) ? Buffer.from(bytesFromBase64(object.sdrRoutes)) : Buffer.alloc(0),
      ackPeerRoutesRevision: isSet(object.ackPeerRoutesRevision) ? Number(object.ackPeerRoutesRevision) : 0,
      iceEnabled: isSet(object.iceEnabled) ? Boolean(object.iceEnabled) : false,
      hostedServerTicket: isSet(object.hostedServerTicket)
        ? Buffer.from(bytesFromBase64(object.hostedServerTicket))
        : Buffer.alloc(0),
      connectRequest: isSet(object.connectRequest)
        ? CMsgSteamNetworkingP2PRendezvous_ConnectRequest.fromJSON(object.connectRequest)
        : undefined,
      connectOk: isSet(object.connectOk)
        ? CMsgSteamNetworkingP2PRendezvous_ConnectOK.fromJSON(object.connectOk)
        : undefined,
      connectionClosed: isSet(object.connectionClosed)
        ? CMsgSteamNetworkingP2PRendezvous_ConnectionClosed.fromJSON(object.connectionClosed)
        : undefined,
      ackReliableMsg: isSet(object.ackReliableMsg) ? Number(object.ackReliableMsg) : 0,
      firstReliableMsg: isSet(object.firstReliableMsg) ? Number(object.firstReliableMsg) : 0,
      reliableMessages: Array.isArray(object?.reliableMessages)
        ? object.reliableMessages.map((e: any) => CMsgSteamNetworkingP2PRendezvous_ReliableMessage.fromJSON(e))
        : [],
      applicationMessages: Array.isArray(object?.applicationMessages)
        ? object.applicationMessages.map((e: any) => CMsgSteamNetworkingP2PRendezvous_ApplicationMessage.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSteamNetworkingP2PRendezvous): unknown {
    const obj: any = {};
    message.fromIdentity !== undefined && (obj.fromIdentity = message.fromIdentity);
    message.fromConnectionId !== undefined && (obj.fromConnectionId = Math.round(message.fromConnectionId));
    message.toIdentity !== undefined && (obj.toIdentity = message.toIdentity);
    message.toConnectionId !== undefined && (obj.toConnectionId = Math.round(message.toConnectionId));
    message.sdrRoutes !== undefined &&
      (obj.sdrRoutes = base64FromBytes(message.sdrRoutes !== undefined ? message.sdrRoutes : Buffer.alloc(0)));
    message.ackPeerRoutesRevision !== undefined &&
      (obj.ackPeerRoutesRevision = Math.round(message.ackPeerRoutesRevision));
    message.iceEnabled !== undefined && (obj.iceEnabled = message.iceEnabled);
    message.hostedServerTicket !== undefined &&
      (obj.hostedServerTicket = base64FromBytes(
        message.hostedServerTicket !== undefined ? message.hostedServerTicket : Buffer.alloc(0),
      ));
    message.connectRequest !== undefined && (obj.connectRequest = message.connectRequest
      ? CMsgSteamNetworkingP2PRendezvous_ConnectRequest.toJSON(message.connectRequest)
      : undefined);
    message.connectOk !== undefined && (obj.connectOk = message.connectOk
      ? CMsgSteamNetworkingP2PRendezvous_ConnectOK.toJSON(message.connectOk)
      : undefined);
    message.connectionClosed !== undefined && (obj.connectionClosed = message.connectionClosed
      ? CMsgSteamNetworkingP2PRendezvous_ConnectionClosed.toJSON(message.connectionClosed)
      : undefined);
    message.ackReliableMsg !== undefined && (obj.ackReliableMsg = Math.round(message.ackReliableMsg));
    message.firstReliableMsg !== undefined && (obj.firstReliableMsg = Math.round(message.firstReliableMsg));
    if (message.reliableMessages) {
      obj.reliableMessages = message.reliableMessages.map((e) =>
        e ? CMsgSteamNetworkingP2PRendezvous_ReliableMessage.toJSON(e) : undefined
      );
    } else {
      obj.reliableMessages = [];
    }
    if (message.applicationMessages) {
      obj.applicationMessages = message.applicationMessages.map((e) =>
        e ? CMsgSteamNetworkingP2PRendezvous_ApplicationMessage.toJSON(e) : undefined
      );
    } else {
      obj.applicationMessages = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamNetworkingP2PRendezvous>): CMsgSteamNetworkingP2PRendezvous {
    return CMsgSteamNetworkingP2PRendezvous.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamNetworkingP2PRendezvous>): CMsgSteamNetworkingP2PRendezvous {
    const message = createBaseCMsgSteamNetworkingP2PRendezvous();
    message.fromIdentity = object.fromIdentity ?? "";
    message.fromConnectionId = object.fromConnectionId ?? 0;
    message.toIdentity = object.toIdentity ?? "";
    message.toConnectionId = object.toConnectionId ?? 0;
    message.sdrRoutes = object.sdrRoutes ?? Buffer.alloc(0);
    message.ackPeerRoutesRevision = object.ackPeerRoutesRevision ?? 0;
    message.iceEnabled = object.iceEnabled ?? false;
    message.hostedServerTicket = object.hostedServerTicket ?? Buffer.alloc(0);
    message.connectRequest = (object.connectRequest !== undefined && object.connectRequest !== null)
      ? CMsgSteamNetworkingP2PRendezvous_ConnectRequest.fromPartial(object.connectRequest)
      : undefined;
    message.connectOk = (object.connectOk !== undefined && object.connectOk !== null)
      ? CMsgSteamNetworkingP2PRendezvous_ConnectOK.fromPartial(object.connectOk)
      : undefined;
    message.connectionClosed = (object.connectionClosed !== undefined && object.connectionClosed !== null)
      ? CMsgSteamNetworkingP2PRendezvous_ConnectionClosed.fromPartial(object.connectionClosed)
      : undefined;
    message.ackReliableMsg = object.ackReliableMsg ?? 0;
    message.firstReliableMsg = object.firstReliableMsg ?? 0;
    message.reliableMessages =
      object.reliableMessages?.map((e) => CMsgSteamNetworkingP2PRendezvous_ReliableMessage.fromPartial(e)) || [];
    message.applicationMessages =
      object.applicationMessages?.map((e) => CMsgSteamNetworkingP2PRendezvous_ApplicationMessage.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgSteamNetworkingP2PRendezvous_ConnectRequest(): CMsgSteamNetworkingP2PRendezvous_ConnectRequest {
  return { crypt: undefined, cert: undefined, toVirtualPort: 0, fromVirtualPort: 0, fromFakeip: "" };
}

export const CMsgSteamNetworkingP2PRendezvous_ConnectRequest = {
  encode(
    message: CMsgSteamNetworkingP2PRendezvous_ConnectRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.crypt !== undefined) {
      CMsgSteamDatagramSessionCryptInfoSigned.encode(message.crypt, writer.uint32(50).fork()).ldelim();
    }
    if (message.cert !== undefined) {
      CMsgSteamDatagramCertificateSigned.encode(message.cert, writer.uint32(58).fork()).ldelim();
    }
    if (message.toVirtualPort !== 0) {
      writer.uint32(72).uint32(message.toVirtualPort);
    }
    if (message.fromVirtualPort !== 0) {
      writer.uint32(80).uint32(message.fromVirtualPort);
    }
    if (message.fromFakeip !== "") {
      writer.uint32(90).string(message.fromFakeip);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamNetworkingP2PRendezvous_ConnectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamNetworkingP2PRendezvous_ConnectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag != 50) {
            break;
          }

          message.crypt = CMsgSteamDatagramSessionCryptInfoSigned.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.cert = CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.toVirtualPort = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.fromVirtualPort = reader.uint32();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.fromFakeip = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamNetworkingP2PRendezvous_ConnectRequest {
    return {
      crypt: isSet(object.crypt) ? CMsgSteamDatagramSessionCryptInfoSigned.fromJSON(object.crypt) : undefined,
      cert: isSet(object.cert) ? CMsgSteamDatagramCertificateSigned.fromJSON(object.cert) : undefined,
      toVirtualPort: isSet(object.toVirtualPort) ? Number(object.toVirtualPort) : 0,
      fromVirtualPort: isSet(object.fromVirtualPort) ? Number(object.fromVirtualPort) : 0,
      fromFakeip: isSet(object.fromFakeip) ? String(object.fromFakeip) : "",
    };
  },

  toJSON(message: CMsgSteamNetworkingP2PRendezvous_ConnectRequest): unknown {
    const obj: any = {};
    message.crypt !== undefined &&
      (obj.crypt = message.crypt ? CMsgSteamDatagramSessionCryptInfoSigned.toJSON(message.crypt) : undefined);
    message.cert !== undefined &&
      (obj.cert = message.cert ? CMsgSteamDatagramCertificateSigned.toJSON(message.cert) : undefined);
    message.toVirtualPort !== undefined && (obj.toVirtualPort = Math.round(message.toVirtualPort));
    message.fromVirtualPort !== undefined && (obj.fromVirtualPort = Math.round(message.fromVirtualPort));
    message.fromFakeip !== undefined && (obj.fromFakeip = message.fromFakeip);
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSteamNetworkingP2PRendezvous_ConnectRequest>,
  ): CMsgSteamNetworkingP2PRendezvous_ConnectRequest {
    return CMsgSteamNetworkingP2PRendezvous_ConnectRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamNetworkingP2PRendezvous_ConnectRequest>,
  ): CMsgSteamNetworkingP2PRendezvous_ConnectRequest {
    const message = createBaseCMsgSteamNetworkingP2PRendezvous_ConnectRequest();
    message.crypt = (object.crypt !== undefined && object.crypt !== null)
      ? CMsgSteamDatagramSessionCryptInfoSigned.fromPartial(object.crypt)
      : undefined;
    message.cert = (object.cert !== undefined && object.cert !== null)
      ? CMsgSteamDatagramCertificateSigned.fromPartial(object.cert)
      : undefined;
    message.toVirtualPort = object.toVirtualPort ?? 0;
    message.fromVirtualPort = object.fromVirtualPort ?? 0;
    message.fromFakeip = object.fromFakeip ?? "";
    return message;
  },
};

function createBaseCMsgSteamNetworkingP2PRendezvous_ConnectOK(): CMsgSteamNetworkingP2PRendezvous_ConnectOK {
  return { crypt: undefined, cert: undefined };
}

export const CMsgSteamNetworkingP2PRendezvous_ConnectOK = {
  encode(message: CMsgSteamNetworkingP2PRendezvous_ConnectOK, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.crypt !== undefined) {
      CMsgSteamDatagramSessionCryptInfoSigned.encode(message.crypt, writer.uint32(42).fork()).ldelim();
    }
    if (message.cert !== undefined) {
      CMsgSteamDatagramCertificateSigned.encode(message.cert, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamNetworkingP2PRendezvous_ConnectOK {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamNetworkingP2PRendezvous_ConnectOK();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag != 42) {
            break;
          }

          message.crypt = CMsgSteamDatagramSessionCryptInfoSigned.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.cert = CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamNetworkingP2PRendezvous_ConnectOK {
    return {
      crypt: isSet(object.crypt) ? CMsgSteamDatagramSessionCryptInfoSigned.fromJSON(object.crypt) : undefined,
      cert: isSet(object.cert) ? CMsgSteamDatagramCertificateSigned.fromJSON(object.cert) : undefined,
    };
  },

  toJSON(message: CMsgSteamNetworkingP2PRendezvous_ConnectOK): unknown {
    const obj: any = {};
    message.crypt !== undefined &&
      (obj.crypt = message.crypt ? CMsgSteamDatagramSessionCryptInfoSigned.toJSON(message.crypt) : undefined);
    message.cert !== undefined &&
      (obj.cert = message.cert ? CMsgSteamDatagramCertificateSigned.toJSON(message.cert) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamNetworkingP2PRendezvous_ConnectOK>): CMsgSteamNetworkingP2PRendezvous_ConnectOK {
    return CMsgSteamNetworkingP2PRendezvous_ConnectOK.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamNetworkingP2PRendezvous_ConnectOK>,
  ): CMsgSteamNetworkingP2PRendezvous_ConnectOK {
    const message = createBaseCMsgSteamNetworkingP2PRendezvous_ConnectOK();
    message.crypt = (object.crypt !== undefined && object.crypt !== null)
      ? CMsgSteamDatagramSessionCryptInfoSigned.fromPartial(object.crypt)
      : undefined;
    message.cert = (object.cert !== undefined && object.cert !== null)
      ? CMsgSteamDatagramCertificateSigned.fromPartial(object.cert)
      : undefined;
    return message;
  },
};

function createBaseCMsgSteamNetworkingP2PRendezvous_ConnectionClosed(): CMsgSteamNetworkingP2PRendezvous_ConnectionClosed {
  return { debug: "", reasonCode: 0 };
}

export const CMsgSteamNetworkingP2PRendezvous_ConnectionClosed = {
  encode(
    message: CMsgSteamNetworkingP2PRendezvous_ConnectionClosed,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.debug !== "") {
      writer.uint32(42).string(message.debug);
    }
    if (message.reasonCode !== 0) {
      writer.uint32(48).uint32(message.reasonCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamNetworkingP2PRendezvous_ConnectionClosed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamNetworkingP2PRendezvous_ConnectionClosed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag != 42) {
            break;
          }

          message.debug = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.reasonCode = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamNetworkingP2PRendezvous_ConnectionClosed {
    return {
      debug: isSet(object.debug) ? String(object.debug) : "",
      reasonCode: isSet(object.reasonCode) ? Number(object.reasonCode) : 0,
    };
  },

  toJSON(message: CMsgSteamNetworkingP2PRendezvous_ConnectionClosed): unknown {
    const obj: any = {};
    message.debug !== undefined && (obj.debug = message.debug);
    message.reasonCode !== undefined && (obj.reasonCode = Math.round(message.reasonCode));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSteamNetworkingP2PRendezvous_ConnectionClosed>,
  ): CMsgSteamNetworkingP2PRendezvous_ConnectionClosed {
    return CMsgSteamNetworkingP2PRendezvous_ConnectionClosed.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamNetworkingP2PRendezvous_ConnectionClosed>,
  ): CMsgSteamNetworkingP2PRendezvous_ConnectionClosed {
    const message = createBaseCMsgSteamNetworkingP2PRendezvous_ConnectionClosed();
    message.debug = object.debug ?? "";
    message.reasonCode = object.reasonCode ?? 0;
    return message;
  },
};

function createBaseCMsgSteamNetworkingP2PRendezvous_ReliableMessage(): CMsgSteamNetworkingP2PRendezvous_ReliableMessage {
  return { ice: undefined };
}

export const CMsgSteamNetworkingP2PRendezvous_ReliableMessage = {
  encode(
    message: CMsgSteamNetworkingP2PRendezvous_ReliableMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ice !== undefined) {
      CMsgICERendezvous.encode(message.ice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamNetworkingP2PRendezvous_ReliableMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamNetworkingP2PRendezvous_ReliableMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ice = CMsgICERendezvous.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamNetworkingP2PRendezvous_ReliableMessage {
    return { ice: isSet(object.ice) ? CMsgICERendezvous.fromJSON(object.ice) : undefined };
  },

  toJSON(message: CMsgSteamNetworkingP2PRendezvous_ReliableMessage): unknown {
    const obj: any = {};
    message.ice !== undefined && (obj.ice = message.ice ? CMsgICERendezvous.toJSON(message.ice) : undefined);
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSteamNetworkingP2PRendezvous_ReliableMessage>,
  ): CMsgSteamNetworkingP2PRendezvous_ReliableMessage {
    return CMsgSteamNetworkingP2PRendezvous_ReliableMessage.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamNetworkingP2PRendezvous_ReliableMessage>,
  ): CMsgSteamNetworkingP2PRendezvous_ReliableMessage {
    const message = createBaseCMsgSteamNetworkingP2PRendezvous_ReliableMessage();
    message.ice = (object.ice !== undefined && object.ice !== null)
      ? CMsgICERendezvous.fromPartial(object.ice)
      : undefined;
    return message;
  },
};

function createBaseCMsgSteamNetworkingP2PRendezvous_ApplicationMessage(): CMsgSteamNetworkingP2PRendezvous_ApplicationMessage {
  return { data: Buffer.alloc(0), msgNum: "0", flags: 0, laneIdx: 0 };
}

export const CMsgSteamNetworkingP2PRendezvous_ApplicationMessage = {
  encode(
    message: CMsgSteamNetworkingP2PRendezvous_ApplicationMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.msgNum !== "0") {
      writer.uint32(16).uint64(message.msgNum);
    }
    if (message.flags !== 0) {
      writer.uint32(24).uint32(message.flags);
    }
    if (message.laneIdx !== 0) {
      writer.uint32(32).uint32(message.laneIdx);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamNetworkingP2PRendezvous_ApplicationMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamNetworkingP2PRendezvous_ApplicationMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.data = reader.bytes() as Buffer;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.msgNum = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.laneIdx = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamNetworkingP2PRendezvous_ApplicationMessage {
    return {
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
      msgNum: isSet(object.msgNum) ? String(object.msgNum) : "0",
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      laneIdx: isSet(object.laneIdx) ? Number(object.laneIdx) : 0,
    };
  },

  toJSON(message: CMsgSteamNetworkingP2PRendezvous_ApplicationMessage): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    message.msgNum !== undefined && (obj.msgNum = message.msgNum);
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.laneIdx !== undefined && (obj.laneIdx = Math.round(message.laneIdx));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgSteamNetworkingP2PRendezvous_ApplicationMessage>,
  ): CMsgSteamNetworkingP2PRendezvous_ApplicationMessage {
    return CMsgSteamNetworkingP2PRendezvous_ApplicationMessage.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgSteamNetworkingP2PRendezvous_ApplicationMessage>,
  ): CMsgSteamNetworkingP2PRendezvous_ApplicationMessage {
    const message = createBaseCMsgSteamNetworkingP2PRendezvous_ApplicationMessage();
    message.data = object.data ?? Buffer.alloc(0);
    message.msgNum = object.msgNum ?? "0";
    message.flags = object.flags ?? 0;
    message.laneIdx = object.laneIdx ?? 0;
    return message;
  },
};

function createBaseCMsgSteamNetworkingICESessionSummary(): CMsgSteamNetworkingICESessionSummary {
  return {
    failureReasonCode: 0,
    localCandidateTypes: 0,
    remoteCandidateTypes: 0,
    initialRouteKind: 0,
    initialPing: 0,
    initialScore: 0,
    negotiationMs: 0,
    bestRouteKind: 0,
    bestPing: 0,
    bestScore: 0,
    bestTime: 0,
    selectedSeconds: 0,
    userSettings: 0,
    iceEnableVar: 0,
    localCandidateTypesAllowed: 0,
  };
}

export const CMsgSteamNetworkingICESessionSummary = {
  encode(message: CMsgSteamNetworkingICESessionSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.failureReasonCode !== 0) {
      writer.uint32(56).uint32(message.failureReasonCode);
    }
    if (message.localCandidateTypes !== 0) {
      writer.uint32(8).uint32(message.localCandidateTypes);
    }
    if (message.remoteCandidateTypes !== 0) {
      writer.uint32(16).uint32(message.remoteCandidateTypes);
    }
    if (message.initialRouteKind !== 0) {
      writer.uint32(24).uint32(message.initialRouteKind);
    }
    if (message.initialPing !== 0) {
      writer.uint32(32).uint32(message.initialPing);
    }
    if (message.initialScore !== 0) {
      writer.uint32(48).uint32(message.initialScore);
    }
    if (message.negotiationMs !== 0) {
      writer.uint32(40).uint32(message.negotiationMs);
    }
    if (message.bestRouteKind !== 0) {
      writer.uint32(128).uint32(message.bestRouteKind);
    }
    if (message.bestPing !== 0) {
      writer.uint32(136).uint32(message.bestPing);
    }
    if (message.bestScore !== 0) {
      writer.uint32(144).uint32(message.bestScore);
    }
    if (message.bestTime !== 0) {
      writer.uint32(152).uint32(message.bestTime);
    }
    if (message.selectedSeconds !== 0) {
      writer.uint32(96).uint32(message.selectedSeconds);
    }
    if (message.userSettings !== 0) {
      writer.uint32(104).uint32(message.userSettings);
    }
    if (message.iceEnableVar !== 0) {
      writer.uint32(112).uint32(message.iceEnableVar);
    }
    if (message.localCandidateTypesAllowed !== 0) {
      writer.uint32(120).uint32(message.localCandidateTypesAllowed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamNetworkingICESessionSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamNetworkingICESessionSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 7:
          if (tag != 56) {
            break;
          }

          message.failureReasonCode = reader.uint32();
          continue;
        case 1:
          if (tag != 8) {
            break;
          }

          message.localCandidateTypes = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.remoteCandidateTypes = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.initialRouteKind = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.initialPing = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.initialScore = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.negotiationMs = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.bestRouteKind = reader.uint32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.bestPing = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.bestScore = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.bestTime = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.selectedSeconds = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.userSettings = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.iceEnableVar = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.localCandidateTypesAllowed = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamNetworkingICESessionSummary {
    return {
      failureReasonCode: isSet(object.failureReasonCode) ? Number(object.failureReasonCode) : 0,
      localCandidateTypes: isSet(object.localCandidateTypes) ? Number(object.localCandidateTypes) : 0,
      remoteCandidateTypes: isSet(object.remoteCandidateTypes) ? Number(object.remoteCandidateTypes) : 0,
      initialRouteKind: isSet(object.initialRouteKind) ? Number(object.initialRouteKind) : 0,
      initialPing: isSet(object.initialPing) ? Number(object.initialPing) : 0,
      initialScore: isSet(object.initialScore) ? Number(object.initialScore) : 0,
      negotiationMs: isSet(object.negotiationMs) ? Number(object.negotiationMs) : 0,
      bestRouteKind: isSet(object.bestRouteKind) ? Number(object.bestRouteKind) : 0,
      bestPing: isSet(object.bestPing) ? Number(object.bestPing) : 0,
      bestScore: isSet(object.bestScore) ? Number(object.bestScore) : 0,
      bestTime: isSet(object.bestTime) ? Number(object.bestTime) : 0,
      selectedSeconds: isSet(object.selectedSeconds) ? Number(object.selectedSeconds) : 0,
      userSettings: isSet(object.userSettings) ? Number(object.userSettings) : 0,
      iceEnableVar: isSet(object.iceEnableVar) ? Number(object.iceEnableVar) : 0,
      localCandidateTypesAllowed: isSet(object.localCandidateTypesAllowed)
        ? Number(object.localCandidateTypesAllowed)
        : 0,
    };
  },

  toJSON(message: CMsgSteamNetworkingICESessionSummary): unknown {
    const obj: any = {};
    message.failureReasonCode !== undefined && (obj.failureReasonCode = Math.round(message.failureReasonCode));
    message.localCandidateTypes !== undefined && (obj.localCandidateTypes = Math.round(message.localCandidateTypes));
    message.remoteCandidateTypes !== undefined && (obj.remoteCandidateTypes = Math.round(message.remoteCandidateTypes));
    message.initialRouteKind !== undefined && (obj.initialRouteKind = Math.round(message.initialRouteKind));
    message.initialPing !== undefined && (obj.initialPing = Math.round(message.initialPing));
    message.initialScore !== undefined && (obj.initialScore = Math.round(message.initialScore));
    message.negotiationMs !== undefined && (obj.negotiationMs = Math.round(message.negotiationMs));
    message.bestRouteKind !== undefined && (obj.bestRouteKind = Math.round(message.bestRouteKind));
    message.bestPing !== undefined && (obj.bestPing = Math.round(message.bestPing));
    message.bestScore !== undefined && (obj.bestScore = Math.round(message.bestScore));
    message.bestTime !== undefined && (obj.bestTime = Math.round(message.bestTime));
    message.selectedSeconds !== undefined && (obj.selectedSeconds = Math.round(message.selectedSeconds));
    message.userSettings !== undefined && (obj.userSettings = Math.round(message.userSettings));
    message.iceEnableVar !== undefined && (obj.iceEnableVar = Math.round(message.iceEnableVar));
    message.localCandidateTypesAllowed !== undefined &&
      (obj.localCandidateTypesAllowed = Math.round(message.localCandidateTypesAllowed));
    return obj;
  },

  create(base?: DeepPartial<CMsgSteamNetworkingICESessionSummary>): CMsgSteamNetworkingICESessionSummary {
    return CMsgSteamNetworkingICESessionSummary.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgSteamNetworkingICESessionSummary>): CMsgSteamNetworkingICESessionSummary {
    const message = createBaseCMsgSteamNetworkingICESessionSummary();
    message.failureReasonCode = object.failureReasonCode ?? 0;
    message.localCandidateTypes = object.localCandidateTypes ?? 0;
    message.remoteCandidateTypes = object.remoteCandidateTypes ?? 0;
    message.initialRouteKind = object.initialRouteKind ?? 0;
    message.initialPing = object.initialPing ?? 0;
    message.initialScore = object.initialScore ?? 0;
    message.negotiationMs = object.negotiationMs ?? 0;
    message.bestRouteKind = object.bestRouteKind ?? 0;
    message.bestPing = object.bestPing ?? 0;
    message.bestScore = object.bestScore ?? 0;
    message.bestTime = object.bestTime ?? 0;
    message.selectedSeconds = object.selectedSeconds ?? 0;
    message.userSettings = object.userSettings ?? 0;
    message.iceEnableVar = object.iceEnableVar ?? 0;
    message.localCandidateTypesAllowed = object.localCandidateTypesAllowed ?? 0;
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
