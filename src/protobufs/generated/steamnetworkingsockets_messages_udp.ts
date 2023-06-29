/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  CMsgSteamDatagramConnectionQuality,
  CMsgSteamDatagramSessionCryptInfoSigned,
} from "./steamnetworkingsockets_messages";
import {
  CMsgSteamDatagramCertificateSigned,
  CMsgSteamNetworkingIdentityLegacyBinary,
} from "./steamnetworkingsockets_messages_certs";

export enum ESteamNetworkingUDPMsgID {
  k_ESteamNetworkingUDPMsg_ChallengeRequest = 32,
  k_ESteamNetworkingUDPMsg_ChallengeReply = 33,
  k_ESteamNetworkingUDPMsg_ConnectRequest = 34,
  k_ESteamNetworkingUDPMsg_ConnectOK = 35,
  k_ESteamNetworkingUDPMsg_ConnectionClosed = 36,
  k_ESteamNetworkingUDPMsg_NoConnection = 37,
}

export function eSteamNetworkingUDPMsgIDFromJSON(object: any): ESteamNetworkingUDPMsgID {
  switch (object) {
    case 32:
    case "k_ESteamNetworkingUDPMsg_ChallengeRequest":
      return ESteamNetworkingUDPMsgID.k_ESteamNetworkingUDPMsg_ChallengeRequest;
    case 33:
    case "k_ESteamNetworkingUDPMsg_ChallengeReply":
      return ESteamNetworkingUDPMsgID.k_ESteamNetworkingUDPMsg_ChallengeReply;
    case 34:
    case "k_ESteamNetworkingUDPMsg_ConnectRequest":
      return ESteamNetworkingUDPMsgID.k_ESteamNetworkingUDPMsg_ConnectRequest;
    case 35:
    case "k_ESteamNetworkingUDPMsg_ConnectOK":
      return ESteamNetworkingUDPMsgID.k_ESteamNetworkingUDPMsg_ConnectOK;
    case 36:
    case "k_ESteamNetworkingUDPMsg_ConnectionClosed":
      return ESteamNetworkingUDPMsgID.k_ESteamNetworkingUDPMsg_ConnectionClosed;
    case 37:
    case "k_ESteamNetworkingUDPMsg_NoConnection":
      return ESteamNetworkingUDPMsgID.k_ESteamNetworkingUDPMsg_NoConnection;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESteamNetworkingUDPMsgID");
  }
}

export function eSteamNetworkingUDPMsgIDToJSON(object: ESteamNetworkingUDPMsgID): string {
  switch (object) {
    case ESteamNetworkingUDPMsgID.k_ESteamNetworkingUDPMsg_ChallengeRequest:
      return "k_ESteamNetworkingUDPMsg_ChallengeRequest";
    case ESteamNetworkingUDPMsgID.k_ESteamNetworkingUDPMsg_ChallengeReply:
      return "k_ESteamNetworkingUDPMsg_ChallengeReply";
    case ESteamNetworkingUDPMsgID.k_ESteamNetworkingUDPMsg_ConnectRequest:
      return "k_ESteamNetworkingUDPMsg_ConnectRequest";
    case ESteamNetworkingUDPMsgID.k_ESteamNetworkingUDPMsg_ConnectOK:
      return "k_ESteamNetworkingUDPMsg_ConnectOK";
    case ESteamNetworkingUDPMsgID.k_ESteamNetworkingUDPMsg_ConnectionClosed:
      return "k_ESteamNetworkingUDPMsg_ConnectionClosed";
    case ESteamNetworkingUDPMsgID.k_ESteamNetworkingUDPMsg_NoConnection:
      return "k_ESteamNetworkingUDPMsg_NoConnection";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ESteamNetworkingUDPMsgID");
  }
}

export interface CMsgSteamSocketsUDPChallengeRequest {
  connectionId: number;
  myTimestamp: string;
  protocolVersion: number;
}

export interface CMsgSteamSocketsUDPChallengeReply {
  connectionId: number;
  challenge: string;
  yourTimestamp: string;
  protocolVersion: number;
}

export interface CMsgSteamSocketsUDPConnectRequest {
  clientConnectionId: number;
  challenge: string;
  myTimestamp: string;
  pingEstMs: number;
  crypt: CMsgSteamDatagramSessionCryptInfoSigned | undefined;
  cert: CMsgSteamDatagramCertificateSigned | undefined;
  legacyProtocolVersion: number;
  identityString: string;
  legacyClientSteamId: string;
  legacyIdentityBinary: CMsgSteamNetworkingIdentityLegacyBinary | undefined;
}

export interface CMsgSteamSocketsUDPConnectOK {
  clientConnectionId: number;
  serverConnectionId: number;
  yourTimestamp: string;
  delayTimeUsec: number;
  crypt: CMsgSteamDatagramSessionCryptInfoSigned | undefined;
  cert: CMsgSteamDatagramCertificateSigned | undefined;
  identityString: string;
  legacyServerSteamId: string;
  legacyIdentityBinary: CMsgSteamNetworkingIdentityLegacyBinary | undefined;
}

export interface CMsgSteamSocketsUDPConnectionClosed {
  toConnectionId: number;
  fromConnectionId: number;
  debug: string;
  reasonCode: number;
}

export interface CMsgSteamSocketsUDPNoConnection {
  fromConnectionId: number;
  toConnectionId: number;
}

export interface CMsgSteamSocketsUDPStats {
  stats: CMsgSteamDatagramConnectionQuality | undefined;
  flags: number;
}

export enum CMsgSteamSocketsUDPStats_Flags {
  ACK_REQUEST_E2E = 2,
  ACK_REQUEST_IMMEDIATE = 4,
  NOT_PRIMARY_TRANSPORT_E2E = 16,
}

export function cMsgSteamSocketsUDPStats_FlagsFromJSON(object: any): CMsgSteamSocketsUDPStats_Flags {
  switch (object) {
    case 2:
    case "ACK_REQUEST_E2E":
      return CMsgSteamSocketsUDPStats_Flags.ACK_REQUEST_E2E;
    case 4:
    case "ACK_REQUEST_IMMEDIATE":
      return CMsgSteamSocketsUDPStats_Flags.ACK_REQUEST_IMMEDIATE;
    case 16:
    case "NOT_PRIMARY_TRANSPORT_E2E":
      return CMsgSteamSocketsUDPStats_Flags.NOT_PRIMARY_TRANSPORT_E2E;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamSocketsUDPStats_Flags",
      );
  }
}

export function cMsgSteamSocketsUDPStats_FlagsToJSON(object: CMsgSteamSocketsUDPStats_Flags): string {
  switch (object) {
    case CMsgSteamSocketsUDPStats_Flags.ACK_REQUEST_E2E:
      return "ACK_REQUEST_E2E";
    case CMsgSteamSocketsUDPStats_Flags.ACK_REQUEST_IMMEDIATE:
      return "ACK_REQUEST_IMMEDIATE";
    case CMsgSteamSocketsUDPStats_Flags.NOT_PRIMARY_TRANSPORT_E2E:
      return "NOT_PRIMARY_TRANSPORT_E2E";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum CMsgSteamSocketsUDPStats_Flags",
      );
  }
}

function createBaseCMsgSteamSocketsUDPChallengeRequest(): CMsgSteamSocketsUDPChallengeRequest {
  return { connectionId: 0, myTimestamp: "0", protocolVersion: 0 };
}

export const CMsgSteamSocketsUDPChallengeRequest = {
  encode(message: CMsgSteamSocketsUDPChallengeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(13).fixed32(message.connectionId);
    }
    if (message.myTimestamp !== "0") {
      writer.uint32(25).fixed64(message.myTimestamp);
    }
    if (message.protocolVersion !== 0) {
      writer.uint32(32).uint32(message.protocolVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamSocketsUDPChallengeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamSocketsUDPChallengeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.connectionId = reader.fixed32();
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.myTimestamp = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.protocolVersion = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamSocketsUDPChallengeRequest {
    return {
      connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0,
      myTimestamp: isSet(object.myTimestamp) ? String(object.myTimestamp) : "0",
      protocolVersion: isSet(object.protocolVersion) ? Number(object.protocolVersion) : 0,
    };
  },

  toJSON(message: CMsgSteamSocketsUDPChallengeRequest): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = Math.round(message.connectionId));
    message.myTimestamp !== undefined && (obj.myTimestamp = message.myTimestamp);
    message.protocolVersion !== undefined && (obj.protocolVersion = Math.round(message.protocolVersion));
    return obj;
  },
};

function createBaseCMsgSteamSocketsUDPChallengeReply(): CMsgSteamSocketsUDPChallengeReply {
  return { connectionId: 0, challenge: "0", yourTimestamp: "0", protocolVersion: 0 };
}

export const CMsgSteamSocketsUDPChallengeReply = {
  encode(message: CMsgSteamSocketsUDPChallengeReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== 0) {
      writer.uint32(13).fixed32(message.connectionId);
    }
    if (message.challenge !== "0") {
      writer.uint32(17).fixed64(message.challenge);
    }
    if (message.yourTimestamp !== "0") {
      writer.uint32(25).fixed64(message.yourTimestamp);
    }
    if (message.protocolVersion !== 0) {
      writer.uint32(32).uint32(message.protocolVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamSocketsUDPChallengeReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamSocketsUDPChallengeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.connectionId = reader.fixed32();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.challenge = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.yourTimestamp = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.protocolVersion = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamSocketsUDPChallengeReply {
    return {
      connectionId: isSet(object.connectionId) ? Number(object.connectionId) : 0,
      challenge: isSet(object.challenge) ? String(object.challenge) : "0",
      yourTimestamp: isSet(object.yourTimestamp) ? String(object.yourTimestamp) : "0",
      protocolVersion: isSet(object.protocolVersion) ? Number(object.protocolVersion) : 0,
    };
  },

  toJSON(message: CMsgSteamSocketsUDPChallengeReply): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = Math.round(message.connectionId));
    message.challenge !== undefined && (obj.challenge = message.challenge);
    message.yourTimestamp !== undefined && (obj.yourTimestamp = message.yourTimestamp);
    message.protocolVersion !== undefined && (obj.protocolVersion = Math.round(message.protocolVersion));
    return obj;
  },
};

function createBaseCMsgSteamSocketsUDPConnectRequest(): CMsgSteamSocketsUDPConnectRequest {
  return {
    clientConnectionId: 0,
    challenge: "0",
    myTimestamp: "0",
    pingEstMs: 0,
    crypt: undefined,
    cert: undefined,
    legacyProtocolVersion: 0,
    identityString: "",
    legacyClientSteamId: "0",
    legacyIdentityBinary: undefined,
  };
}

export const CMsgSteamSocketsUDPConnectRequest = {
  encode(message: CMsgSteamSocketsUDPConnectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientConnectionId !== 0) {
      writer.uint32(13).fixed32(message.clientConnectionId);
    }
    if (message.challenge !== "0") {
      writer.uint32(17).fixed64(message.challenge);
    }
    if (message.myTimestamp !== "0") {
      writer.uint32(41).fixed64(message.myTimestamp);
    }
    if (message.pingEstMs !== 0) {
      writer.uint32(48).uint32(message.pingEstMs);
    }
    if (message.crypt !== undefined) {
      CMsgSteamDatagramSessionCryptInfoSigned.encode(message.crypt, writer.uint32(58).fork()).ldelim();
    }
    if (message.cert !== undefined) {
      CMsgSteamDatagramCertificateSigned.encode(message.cert, writer.uint32(34).fork()).ldelim();
    }
    if (message.legacyProtocolVersion !== 0) {
      writer.uint32(64).uint32(message.legacyProtocolVersion);
    }
    if (message.identityString !== "") {
      writer.uint32(82).string(message.identityString);
    }
    if (message.legacyClientSteamId !== "0") {
      writer.uint32(25).fixed64(message.legacyClientSteamId);
    }
    if (message.legacyIdentityBinary !== undefined) {
      CMsgSteamNetworkingIdentityLegacyBinary.encode(message.legacyIdentityBinary, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamSocketsUDPConnectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamSocketsUDPConnectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.clientConnectionId = reader.fixed32();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.challenge = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 41) {
            break;
          }

          message.myTimestamp = longToString(reader.fixed64() as Long);
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.pingEstMs = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.crypt = CMsgSteamDatagramSessionCryptInfoSigned.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.cert = CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.legacyProtocolVersion = reader.uint32();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.identityString = reader.string();
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.legacyClientSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.legacyIdentityBinary = CMsgSteamNetworkingIdentityLegacyBinary.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamSocketsUDPConnectRequest {
    return {
      clientConnectionId: isSet(object.clientConnectionId) ? Number(object.clientConnectionId) : 0,
      challenge: isSet(object.challenge) ? String(object.challenge) : "0",
      myTimestamp: isSet(object.myTimestamp) ? String(object.myTimestamp) : "0",
      pingEstMs: isSet(object.pingEstMs) ? Number(object.pingEstMs) : 0,
      crypt: isSet(object.crypt) ? CMsgSteamDatagramSessionCryptInfoSigned.fromJSON(object.crypt) : undefined,
      cert: isSet(object.cert) ? CMsgSteamDatagramCertificateSigned.fromJSON(object.cert) : undefined,
      legacyProtocolVersion: isSet(object.legacyProtocolVersion) ? Number(object.legacyProtocolVersion) : 0,
      identityString: isSet(object.identityString) ? String(object.identityString) : "",
      legacyClientSteamId: isSet(object.legacyClientSteamId) ? String(object.legacyClientSteamId) : "0",
      legacyIdentityBinary: isSet(object.legacyIdentityBinary)
        ? CMsgSteamNetworkingIdentityLegacyBinary.fromJSON(object.legacyIdentityBinary)
        : undefined,
    };
  },

  toJSON(message: CMsgSteamSocketsUDPConnectRequest): unknown {
    const obj: any = {};
    message.clientConnectionId !== undefined && (obj.clientConnectionId = Math.round(message.clientConnectionId));
    message.challenge !== undefined && (obj.challenge = message.challenge);
    message.myTimestamp !== undefined && (obj.myTimestamp = message.myTimestamp);
    message.pingEstMs !== undefined && (obj.pingEstMs = Math.round(message.pingEstMs));
    message.crypt !== undefined &&
      (obj.crypt = message.crypt ? CMsgSteamDatagramSessionCryptInfoSigned.toJSON(message.crypt) : undefined);
    message.cert !== undefined &&
      (obj.cert = message.cert ? CMsgSteamDatagramCertificateSigned.toJSON(message.cert) : undefined);
    message.legacyProtocolVersion !== undefined &&
      (obj.legacyProtocolVersion = Math.round(message.legacyProtocolVersion));
    message.identityString !== undefined && (obj.identityString = message.identityString);
    message.legacyClientSteamId !== undefined && (obj.legacyClientSteamId = message.legacyClientSteamId);
    message.legacyIdentityBinary !== undefined && (obj.legacyIdentityBinary = message.legacyIdentityBinary
      ? CMsgSteamNetworkingIdentityLegacyBinary.toJSON(message.legacyIdentityBinary)
      : undefined);
    return obj;
  },
};

function createBaseCMsgSteamSocketsUDPConnectOK(): CMsgSteamSocketsUDPConnectOK {
  return {
    clientConnectionId: 0,
    serverConnectionId: 0,
    yourTimestamp: "0",
    delayTimeUsec: 0,
    crypt: undefined,
    cert: undefined,
    identityString: "",
    legacyServerSteamId: "0",
    legacyIdentityBinary: undefined,
  };
}

export const CMsgSteamSocketsUDPConnectOK = {
  encode(message: CMsgSteamSocketsUDPConnectOK, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientConnectionId !== 0) {
      writer.uint32(13).fixed32(message.clientConnectionId);
    }
    if (message.serverConnectionId !== 0) {
      writer.uint32(45).fixed32(message.serverConnectionId);
    }
    if (message.yourTimestamp !== "0") {
      writer.uint32(25).fixed64(message.yourTimestamp);
    }
    if (message.delayTimeUsec !== 0) {
      writer.uint32(32).uint32(message.delayTimeUsec);
    }
    if (message.crypt !== undefined) {
      CMsgSteamDatagramSessionCryptInfoSigned.encode(message.crypt, writer.uint32(58).fork()).ldelim();
    }
    if (message.cert !== undefined) {
      CMsgSteamDatagramCertificateSigned.encode(message.cert, writer.uint32(66).fork()).ldelim();
    }
    if (message.identityString !== "") {
      writer.uint32(90).string(message.identityString);
    }
    if (message.legacyServerSteamId !== "0") {
      writer.uint32(17).fixed64(message.legacyServerSteamId);
    }
    if (message.legacyIdentityBinary !== undefined) {
      CMsgSteamNetworkingIdentityLegacyBinary.encode(message.legacyIdentityBinary, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamSocketsUDPConnectOK {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamSocketsUDPConnectOK();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.clientConnectionId = reader.fixed32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.serverConnectionId = reader.fixed32();
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.yourTimestamp = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.delayTimeUsec = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.crypt = CMsgSteamDatagramSessionCryptInfoSigned.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.cert = CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.identityString = reader.string();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.legacyServerSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.legacyIdentityBinary = CMsgSteamNetworkingIdentityLegacyBinary.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamSocketsUDPConnectOK {
    return {
      clientConnectionId: isSet(object.clientConnectionId) ? Number(object.clientConnectionId) : 0,
      serverConnectionId: isSet(object.serverConnectionId) ? Number(object.serverConnectionId) : 0,
      yourTimestamp: isSet(object.yourTimestamp) ? String(object.yourTimestamp) : "0",
      delayTimeUsec: isSet(object.delayTimeUsec) ? Number(object.delayTimeUsec) : 0,
      crypt: isSet(object.crypt) ? CMsgSteamDatagramSessionCryptInfoSigned.fromJSON(object.crypt) : undefined,
      cert: isSet(object.cert) ? CMsgSteamDatagramCertificateSigned.fromJSON(object.cert) : undefined,
      identityString: isSet(object.identityString) ? String(object.identityString) : "",
      legacyServerSteamId: isSet(object.legacyServerSteamId) ? String(object.legacyServerSteamId) : "0",
      legacyIdentityBinary: isSet(object.legacyIdentityBinary)
        ? CMsgSteamNetworkingIdentityLegacyBinary.fromJSON(object.legacyIdentityBinary)
        : undefined,
    };
  },

  toJSON(message: CMsgSteamSocketsUDPConnectOK): unknown {
    const obj: any = {};
    message.clientConnectionId !== undefined && (obj.clientConnectionId = Math.round(message.clientConnectionId));
    message.serverConnectionId !== undefined && (obj.serverConnectionId = Math.round(message.serverConnectionId));
    message.yourTimestamp !== undefined && (obj.yourTimestamp = message.yourTimestamp);
    message.delayTimeUsec !== undefined && (obj.delayTimeUsec = Math.round(message.delayTimeUsec));
    message.crypt !== undefined &&
      (obj.crypt = message.crypt ? CMsgSteamDatagramSessionCryptInfoSigned.toJSON(message.crypt) : undefined);
    message.cert !== undefined &&
      (obj.cert = message.cert ? CMsgSteamDatagramCertificateSigned.toJSON(message.cert) : undefined);
    message.identityString !== undefined && (obj.identityString = message.identityString);
    message.legacyServerSteamId !== undefined && (obj.legacyServerSteamId = message.legacyServerSteamId);
    message.legacyIdentityBinary !== undefined && (obj.legacyIdentityBinary = message.legacyIdentityBinary
      ? CMsgSteamNetworkingIdentityLegacyBinary.toJSON(message.legacyIdentityBinary)
      : undefined);
    return obj;
  },
};

function createBaseCMsgSteamSocketsUDPConnectionClosed(): CMsgSteamSocketsUDPConnectionClosed {
  return { toConnectionId: 0, fromConnectionId: 0, debug: "", reasonCode: 0 };
}

export const CMsgSteamSocketsUDPConnectionClosed = {
  encode(message: CMsgSteamSocketsUDPConnectionClosed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.toConnectionId !== 0) {
      writer.uint32(37).fixed32(message.toConnectionId);
    }
    if (message.fromConnectionId !== 0) {
      writer.uint32(45).fixed32(message.fromConnectionId);
    }
    if (message.debug !== "") {
      writer.uint32(18).string(message.debug);
    }
    if (message.reasonCode !== 0) {
      writer.uint32(24).uint32(message.reasonCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamSocketsUDPConnectionClosed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamSocketsUDPConnectionClosed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag != 37) {
            break;
          }

          message.toConnectionId = reader.fixed32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.fromConnectionId = reader.fixed32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.debug = reader.string();
          continue;
        case 3:
          if (tag != 24) {
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

  fromJSON(object: any): CMsgSteamSocketsUDPConnectionClosed {
    return {
      toConnectionId: isSet(object.toConnectionId) ? Number(object.toConnectionId) : 0,
      fromConnectionId: isSet(object.fromConnectionId) ? Number(object.fromConnectionId) : 0,
      debug: isSet(object.debug) ? String(object.debug) : "",
      reasonCode: isSet(object.reasonCode) ? Number(object.reasonCode) : 0,
    };
  },

  toJSON(message: CMsgSteamSocketsUDPConnectionClosed): unknown {
    const obj: any = {};
    message.toConnectionId !== undefined && (obj.toConnectionId = Math.round(message.toConnectionId));
    message.fromConnectionId !== undefined && (obj.fromConnectionId = Math.round(message.fromConnectionId));
    message.debug !== undefined && (obj.debug = message.debug);
    message.reasonCode !== undefined && (obj.reasonCode = Math.round(message.reasonCode));
    return obj;
  },
};

function createBaseCMsgSteamSocketsUDPNoConnection(): CMsgSteamSocketsUDPNoConnection {
  return { fromConnectionId: 0, toConnectionId: 0 };
}

export const CMsgSteamSocketsUDPNoConnection = {
  encode(message: CMsgSteamSocketsUDPNoConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromConnectionId !== 0) {
      writer.uint32(21).fixed32(message.fromConnectionId);
    }
    if (message.toConnectionId !== 0) {
      writer.uint32(29).fixed32(message.toConnectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamSocketsUDPNoConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamSocketsUDPNoConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 21) {
            break;
          }

          message.fromConnectionId = reader.fixed32();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.toConnectionId = reader.fixed32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamSocketsUDPNoConnection {
    return {
      fromConnectionId: isSet(object.fromConnectionId) ? Number(object.fromConnectionId) : 0,
      toConnectionId: isSet(object.toConnectionId) ? Number(object.toConnectionId) : 0,
    };
  },

  toJSON(message: CMsgSteamSocketsUDPNoConnection): unknown {
    const obj: any = {};
    message.fromConnectionId !== undefined && (obj.fromConnectionId = Math.round(message.fromConnectionId));
    message.toConnectionId !== undefined && (obj.toConnectionId = Math.round(message.toConnectionId));
    return obj;
  },
};

function createBaseCMsgSteamSocketsUDPStats(): CMsgSteamSocketsUDPStats {
  return { stats: undefined, flags: 0 };
}

export const CMsgSteamSocketsUDPStats = {
  encode(message: CMsgSteamSocketsUDPStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stats !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.stats, writer.uint32(10).fork()).ldelim();
    }
    if (message.flags !== 0) {
      writer.uint32(24).uint32(message.flags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamSocketsUDPStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamSocketsUDPStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.stats = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.flags = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamSocketsUDPStats {
    return {
      stats: isSet(object.stats) ? CMsgSteamDatagramConnectionQuality.fromJSON(object.stats) : undefined,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
    };
  },

  toJSON(message: CMsgSteamSocketsUDPStats): unknown {
    const obj: any = {};
    message.stats !== undefined &&
      (obj.stats = message.stats ? CMsgSteamDatagramConnectionQuality.toJSON(message.stats) : undefined);
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
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
