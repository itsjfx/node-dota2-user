/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgSteamDatagramCertificateSigned } from "./steamnetworkingsockets_messages_certs";

export interface CMsgSteamDatagramRelayAuthTicket {
  timeExpiry: number;
  authorizedClientIdentityString: string;
  gameserverIdentityString: string;
  authorizedPublicIp: number;
  gameserverAddress: Buffer;
  appId: number;
  virtualPort: number;
  extraFields: CMsgSteamDatagramRelayAuthTicket_ExtraField[];
  legacyAuthorizedSteamId: string;
  legacyGameserverSteamId: string;
  legacyGameserverPopId: number;
  legacyAuthorizedClientIdentityBinary: Buffer;
  legacyGameserverIdentityBinary: Buffer;
}

export interface CMsgSteamDatagramRelayAuthTicket_ExtraField {
  name: string;
  stringValue: string;
  int64Value: string;
  fixed64Value: string;
}

export interface CMsgSteamDatagramSignedRelayAuthTicket {
  reservedDoNotUse: string;
  ticket: Buffer;
  signature: Buffer;
  keyId: string;
  certs: CMsgSteamDatagramCertificateSigned[];
}

export interface CMsgSteamDatagramCachedCredentialsForApp {
  privateKey: Buffer;
  cert: Buffer;
  relayTickets: Buffer[];
}

export interface CMsgSteamDatagramGameCoordinatorServerLogin {
  timeGenerated: number;
  appid: number;
  routing: Buffer;
  appdata: Buffer;
  legacyIdentityBinary: Buffer;
  identityString: string;
  dummySteamId: string;
}

export interface CMsgSteamDatagramSignedGameCoordinatorServerLogin {
  cert: CMsgSteamDatagramCertificateSigned | undefined;
  login: Buffer;
  signature: Buffer;
}

export interface CMsgSteamDatagramHostedServerAddressPlaintext {
  ipv4: number;
  ipv6: Buffer;
  port: number;
  routingSecret: string;
  protocolVersion: number;
}

function createBaseCMsgSteamDatagramRelayAuthTicket(): CMsgSteamDatagramRelayAuthTicket {
  return {
    timeExpiry: 0,
    authorizedClientIdentityString: "",
    gameserverIdentityString: "",
    authorizedPublicIp: 0,
    gameserverAddress: Buffer.alloc(0),
    appId: 0,
    virtualPort: 0,
    extraFields: [],
    legacyAuthorizedSteamId: "0",
    legacyGameserverSteamId: "0",
    legacyGameserverPopId: 0,
    legacyAuthorizedClientIdentityBinary: Buffer.alloc(0),
    legacyGameserverIdentityBinary: Buffer.alloc(0),
  };
}

export const CMsgSteamDatagramRelayAuthTicket = {
  encode(message: CMsgSteamDatagramRelayAuthTicket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeExpiry !== 0) {
      writer.uint32(13).fixed32(message.timeExpiry);
    }
    if (message.authorizedClientIdentityString !== "") {
      writer.uint32(114).string(message.authorizedClientIdentityString);
    }
    if (message.gameserverIdentityString !== "") {
      writer.uint32(122).string(message.gameserverIdentityString);
    }
    if (message.authorizedPublicIp !== 0) {
      writer.uint32(29).fixed32(message.authorizedPublicIp);
    }
    if (message.gameserverAddress.length !== 0) {
      writer.uint32(90).bytes(message.gameserverAddress);
    }
    if (message.appId !== 0) {
      writer.uint32(56).uint32(message.appId);
    }
    if (message.virtualPort !== 0) {
      writer.uint32(80).uint32(message.virtualPort);
    }
    for (const v of message.extraFields) {
      CMsgSteamDatagramRelayAuthTicket_ExtraField.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.legacyAuthorizedSteamId !== "0") {
      writer.uint32(17).fixed64(message.legacyAuthorizedSteamId);
    }
    if (message.legacyGameserverSteamId !== "0") {
      writer.uint32(33).fixed64(message.legacyGameserverSteamId);
    }
    if (message.legacyGameserverPopId !== 0) {
      writer.uint32(77).fixed32(message.legacyGameserverPopId);
    }
    if (message.legacyAuthorizedClientIdentityBinary.length !== 0) {
      writer.uint32(98).bytes(message.legacyAuthorizedClientIdentityBinary);
    }
    if (message.legacyGameserverIdentityBinary.length !== 0) {
      writer.uint32(106).bytes(message.legacyGameserverIdentityBinary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramRelayAuthTicket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramRelayAuthTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.timeExpiry = reader.fixed32();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.authorizedClientIdentityString = reader.string();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.gameserverIdentityString = reader.string();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.authorizedPublicIp = reader.fixed32();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.gameserverAddress = reader.bytes() as Buffer;
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.appId = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.virtualPort = reader.uint32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.extraFields.push(CMsgSteamDatagramRelayAuthTicket_ExtraField.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.legacyAuthorizedSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.legacyGameserverSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 9:
          if (tag != 77) {
            break;
          }

          message.legacyGameserverPopId = reader.fixed32();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.legacyAuthorizedClientIdentityBinary = reader.bytes() as Buffer;
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.legacyGameserverIdentityBinary = reader.bytes() as Buffer;
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

function createBaseCMsgSteamDatagramRelayAuthTicket_ExtraField(): CMsgSteamDatagramRelayAuthTicket_ExtraField {
  return { name: "", stringValue: "", int64Value: "0", fixed64Value: "0" };
}

export const CMsgSteamDatagramRelayAuthTicket_ExtraField = {
  encode(message: CMsgSteamDatagramRelayAuthTicket_ExtraField, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.stringValue !== "") {
      writer.uint32(18).string(message.stringValue);
    }
    if (message.int64Value !== "0") {
      writer.uint32(24).sint64(message.int64Value);
    }
    if (message.fixed64Value !== "0") {
      writer.uint32(41).fixed64(message.fixed64Value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramRelayAuthTicket_ExtraField {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramRelayAuthTicket_ExtraField();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.stringValue = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.int64Value = longToString(reader.sint64() as Long);
          continue;
        case 5:
          if (tag != 41) {
            break;
          }

          message.fixed64Value = longToString(reader.fixed64() as Long);
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

function createBaseCMsgSteamDatagramSignedRelayAuthTicket(): CMsgSteamDatagramSignedRelayAuthTicket {
  return { reservedDoNotUse: "0", ticket: Buffer.alloc(0), signature: Buffer.alloc(0), keyId: "0", certs: [] };
}

export const CMsgSteamDatagramSignedRelayAuthTicket = {
  encode(message: CMsgSteamDatagramSignedRelayAuthTicket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reservedDoNotUse !== "0") {
      writer.uint32(9).fixed64(message.reservedDoNotUse);
    }
    if (message.ticket.length !== 0) {
      writer.uint32(26).bytes(message.ticket);
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    if (message.keyId !== "0") {
      writer.uint32(17).fixed64(message.keyId);
    }
    for (const v of message.certs) {
      CMsgSteamDatagramCertificateSigned.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramSignedRelayAuthTicket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramSignedRelayAuthTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.reservedDoNotUse = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.ticket = reader.bytes() as Buffer;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.signature = reader.bytes() as Buffer;
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.keyId = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.certs.push(CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32()));
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

function createBaseCMsgSteamDatagramCachedCredentialsForApp(): CMsgSteamDatagramCachedCredentialsForApp {
  return { privateKey: Buffer.alloc(0), cert: Buffer.alloc(0), relayTickets: [] };
}

export const CMsgSteamDatagramCachedCredentialsForApp = {
  encode(message: CMsgSteamDatagramCachedCredentialsForApp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.privateKey.length !== 0) {
      writer.uint32(10).bytes(message.privateKey);
    }
    if (message.cert.length !== 0) {
      writer.uint32(18).bytes(message.cert);
    }
    for (const v of message.relayTickets) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramCachedCredentialsForApp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramCachedCredentialsForApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.privateKey = reader.bytes() as Buffer;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.cert = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.relayTickets.push(reader.bytes() as Buffer);
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

function createBaseCMsgSteamDatagramGameCoordinatorServerLogin(): CMsgSteamDatagramGameCoordinatorServerLogin {
  return {
    timeGenerated: 0,
    appid: 0,
    routing: Buffer.alloc(0),
    appdata: Buffer.alloc(0),
    legacyIdentityBinary: Buffer.alloc(0),
    identityString: "",
    dummySteamId: "0",
  };
}

export const CMsgSteamDatagramGameCoordinatorServerLogin = {
  encode(message: CMsgSteamDatagramGameCoordinatorServerLogin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeGenerated !== 0) {
      writer.uint32(8).uint32(message.timeGenerated);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.routing.length !== 0) {
      writer.uint32(26).bytes(message.routing);
    }
    if (message.appdata.length !== 0) {
      writer.uint32(34).bytes(message.appdata);
    }
    if (message.legacyIdentityBinary.length !== 0) {
      writer.uint32(42).bytes(message.legacyIdentityBinary);
    }
    if (message.identityString !== "") {
      writer.uint32(50).string(message.identityString);
    }
    if (message.dummySteamId !== "0") {
      writer.uint32(793).fixed64(message.dummySteamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramGameCoordinatorServerLogin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramGameCoordinatorServerLogin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.timeGenerated = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.appid = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.routing = reader.bytes() as Buffer;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.appdata = reader.bytes() as Buffer;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.legacyIdentityBinary = reader.bytes() as Buffer;
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.identityString = reader.string();
          continue;
        case 99:
          if (tag != 793) {
            break;
          }

          message.dummySteamId = longToString(reader.fixed64() as Long);
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

function createBaseCMsgSteamDatagramSignedGameCoordinatorServerLogin(): CMsgSteamDatagramSignedGameCoordinatorServerLogin {
  return { cert: undefined, login: Buffer.alloc(0), signature: Buffer.alloc(0) };
}

export const CMsgSteamDatagramSignedGameCoordinatorServerLogin = {
  encode(
    message: CMsgSteamDatagramSignedGameCoordinatorServerLogin,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cert !== undefined) {
      CMsgSteamDatagramCertificateSigned.encode(message.cert, writer.uint32(10).fork()).ldelim();
    }
    if (message.login.length !== 0) {
      writer.uint32(18).bytes(message.login);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramSignedGameCoordinatorServerLogin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramSignedGameCoordinatorServerLogin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.cert = CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.login = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 26) {
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
};

function createBaseCMsgSteamDatagramHostedServerAddressPlaintext(): CMsgSteamDatagramHostedServerAddressPlaintext {
  return { ipv4: 0, ipv6: Buffer.alloc(0), port: 0, routingSecret: "0", protocolVersion: 0 };
}

export const CMsgSteamDatagramHostedServerAddressPlaintext = {
  encode(message: CMsgSteamDatagramHostedServerAddressPlaintext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ipv4 !== 0) {
      writer.uint32(13).fixed32(message.ipv4);
    }
    if (message.ipv6.length !== 0) {
      writer.uint32(18).bytes(message.ipv6);
    }
    if (message.port !== 0) {
      writer.uint32(24).uint32(message.port);
    }
    if (message.routingSecret !== "0") {
      writer.uint32(33).fixed64(message.routingSecret);
    }
    if (message.protocolVersion !== 0) {
      writer.uint32(40).uint32(message.protocolVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramHostedServerAddressPlaintext {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramHostedServerAddressPlaintext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.ipv4 = reader.fixed32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.ipv6 = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.port = reader.uint32();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.routingSecret = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 40) {
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

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
