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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
