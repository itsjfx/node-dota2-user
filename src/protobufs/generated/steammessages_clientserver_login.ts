/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgIPAddress } from "./steammessages_base";

export interface CMsgClientHeartBeat {
}

export interface CMsgClientServerTimestampRequest {
  clientRequestTimestamp: string;
}

export interface CMsgClientServerTimestampResponse {
  clientRequestTimestamp: string;
  serverTimestampMs: string;
}

export interface CMsgClientSecret {
  version: number;
  appid: number;
  deviceid: number;
  nonce: string;
  hmac: Buffer;
}

export interface CMsgClientLogon {
  protocolVersion: number;
  deprecatedObfustucatedPrivateIp: number;
  cellId: number;
  lastSessionId: number;
  clientPackageVersion: number;
  clientLanguage: string;
  clientOsType: number;
  shouldRememberPassword: boolean;
  wineVersion: string;
  deprecated10: number;
  obfuscatedPrivateIp: CMsgIPAddress | undefined;
  deprecatedPublicIp: number;
  qosLevel: number;
  clientSuppliedSteamId: string;
  publicIp: CMsgIPAddress | undefined;
  machineId: Buffer;
  launcherType: number;
  uiMode: number;
  chatMode: number;
  steam2AuthTicket: Buffer;
  emailAddress: string;
  rtime32AccountCreation: number;
  accountName: string;
  password: string;
  gameServerToken: string;
  loginKey: string;
  wasConvertedDeprecatedMsg: boolean;
  anonUserTargetAccountName: string;
  resolvedUserSteamId: string;
  eresultSentryfile: number;
  shaSentryfile: Buffer;
  authCode: string;
  otpType: number;
  otpValue: number;
  otpIdentifier: string;
  steam2TicketRequest: boolean;
  sonyPsnTicket: Buffer;
  sonyPsnServiceId: string;
  createNewPsnLinkedAccountIfNeeded: boolean;
  sonyPsnName: string;
  gameServerAppId: number;
  steamguardDontRememberComputer: boolean;
  machineName: string;
  machineNameUserchosen: string;
  countryOverride: string;
  isSteamBox: boolean;
  clientInstanceId: string;
  twoFactorCode: string;
  supportsRateLimitResponse: boolean;
  webLogonNonce: string;
  priorityReason: number;
  embeddedClientSecret: CMsgClientSecret | undefined;
}

export interface CMsgClientLogonResponse {
  eresult: number;
  outOfGameHeartbeatSeconds: number;
  inGameHeartbeatSeconds: number;
  deprecatedPublicIp: number;
  rtime32ServerTime: number;
  accountFlags: number;
  cellId: number;
  emailDomain: string;
  steam2Ticket: Buffer;
  eresultExtended: number;
  webapiAuthenticateUserNonce: string;
  cellIdPingThreshold: number;
  usePics: boolean;
  vanityUrl: string;
  publicIp: CMsgIPAddress | undefined;
  clientSuppliedSteamid: string;
  ipCountryCode: string;
  parentalSettings: Buffer;
  parentalSettingSignature: Buffer;
  countLoginfailuresToMigrate: number;
  countDisconnectsToMigrate: number;
  ogsDataReportTimeWindow: number;
  clientInstanceId: string;
  forceClientUpdateCheck: boolean;
}

export interface CMsgClientRequestWebAPIAuthenticateUserNonce {
  tokenType: number;
}

export interface CMsgClientRequestWebAPIAuthenticateUserNonceResponse {
  eresult: number;
  webapiAuthenticateUserNonce: string;
  tokenType: number;
}

export interface CMsgClientLogOff {
}

export interface CMsgClientLoggedOff {
  eresult: number;
}

export interface CMsgClientNewLoginKey {
  uniqueId: number;
  loginKey: string;
}

export interface CMsgClientNewLoginKeyAccepted {
  uniqueId: number;
}

export interface CMsgClientAccountInfo {
  personaName: string;
  ipCountry: string;
  countAuthedComputers: number;
  accountFlags: number;
  facebookId: string;
  facebookName: string;
  steamguardNotifyNewmachines: boolean;
  steamguardMachineNameUserChosen: string;
  isPhoneVerified: boolean;
  twoFactorState: number;
  isPhoneIdentifying: boolean;
  isPhoneNeedingReverify: boolean;
}

export interface CMsgClientChallengeRequest {
  steamid: string;
}

export interface CMsgClientChallengeResponse {
  challenge: string;
}

function createBaseCMsgClientHeartBeat(): CMsgClientHeartBeat {
  return {};
}

export const CMsgClientHeartBeat = {
  encode(_: CMsgClientHeartBeat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientHeartBeat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientHeartBeat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CMsgClientHeartBeat {
    return {};
  },

  toJSON(_: CMsgClientHeartBeat): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CMsgClientHeartBeat>): CMsgClientHeartBeat {
    return CMsgClientHeartBeat.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CMsgClientHeartBeat>): CMsgClientHeartBeat {
    const message = createBaseCMsgClientHeartBeat();
    return message;
  },
};

function createBaseCMsgClientServerTimestampRequest(): CMsgClientServerTimestampRequest {
  return { clientRequestTimestamp: "0" };
}

export const CMsgClientServerTimestampRequest = {
  encode(message: CMsgClientServerTimestampRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientRequestTimestamp !== "0") {
      writer.uint32(8).uint64(message.clientRequestTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientServerTimestampRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientServerTimestampRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.clientRequestTimestamp = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientServerTimestampRequest {
    return {
      clientRequestTimestamp: isSet(object.clientRequestTimestamp) ? String(object.clientRequestTimestamp) : "0",
    };
  },

  toJSON(message: CMsgClientServerTimestampRequest): unknown {
    const obj: any = {};
    message.clientRequestTimestamp !== undefined && (obj.clientRequestTimestamp = message.clientRequestTimestamp);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientServerTimestampRequest>): CMsgClientServerTimestampRequest {
    return CMsgClientServerTimestampRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientServerTimestampRequest>): CMsgClientServerTimestampRequest {
    const message = createBaseCMsgClientServerTimestampRequest();
    message.clientRequestTimestamp = object.clientRequestTimestamp ?? "0";
    return message;
  },
};

function createBaseCMsgClientServerTimestampResponse(): CMsgClientServerTimestampResponse {
  return { clientRequestTimestamp: "0", serverTimestampMs: "0" };
}

export const CMsgClientServerTimestampResponse = {
  encode(message: CMsgClientServerTimestampResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientRequestTimestamp !== "0") {
      writer.uint32(8).uint64(message.clientRequestTimestamp);
    }
    if (message.serverTimestampMs !== "0") {
      writer.uint32(16).uint64(message.serverTimestampMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientServerTimestampResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientServerTimestampResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.clientRequestTimestamp = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.serverTimestampMs = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientServerTimestampResponse {
    return {
      clientRequestTimestamp: isSet(object.clientRequestTimestamp) ? String(object.clientRequestTimestamp) : "0",
      serverTimestampMs: isSet(object.serverTimestampMs) ? String(object.serverTimestampMs) : "0",
    };
  },

  toJSON(message: CMsgClientServerTimestampResponse): unknown {
    const obj: any = {};
    message.clientRequestTimestamp !== undefined && (obj.clientRequestTimestamp = message.clientRequestTimestamp);
    message.serverTimestampMs !== undefined && (obj.serverTimestampMs = message.serverTimestampMs);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientServerTimestampResponse>): CMsgClientServerTimestampResponse {
    return CMsgClientServerTimestampResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientServerTimestampResponse>): CMsgClientServerTimestampResponse {
    const message = createBaseCMsgClientServerTimestampResponse();
    message.clientRequestTimestamp = object.clientRequestTimestamp ?? "0";
    message.serverTimestampMs = object.serverTimestampMs ?? "0";
    return message;
  },
};

function createBaseCMsgClientSecret(): CMsgClientSecret {
  return { version: 0, appid: 0, deviceid: 0, nonce: "0", hmac: Buffer.alloc(0) };
}

export const CMsgClientSecret = {
  encode(message: CMsgClientSecret, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.deviceid !== 0) {
      writer.uint32(24).uint32(message.deviceid);
    }
    if (message.nonce !== "0") {
      writer.uint32(33).fixed64(message.nonce);
    }
    if (message.hmac.length !== 0) {
      writer.uint32(42).bytes(message.hmac);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSecret {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSecret();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.version = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.appid = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.deviceid = reader.uint32();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.nonce = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.hmac = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientSecret {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      deviceid: isSet(object.deviceid) ? Number(object.deviceid) : 0,
      nonce: isSet(object.nonce) ? String(object.nonce) : "0",
      hmac: isSet(object.hmac) ? Buffer.from(bytesFromBase64(object.hmac)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientSecret): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.deviceid !== undefined && (obj.deviceid = Math.round(message.deviceid));
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.hmac !== undefined &&
      (obj.hmac = base64FromBytes(message.hmac !== undefined ? message.hmac : Buffer.alloc(0)));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientSecret>): CMsgClientSecret {
    return CMsgClientSecret.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientSecret>): CMsgClientSecret {
    const message = createBaseCMsgClientSecret();
    message.version = object.version ?? 0;
    message.appid = object.appid ?? 0;
    message.deviceid = object.deviceid ?? 0;
    message.nonce = object.nonce ?? "0";
    message.hmac = object.hmac ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientLogon(): CMsgClientLogon {
  return {
    protocolVersion: 0,
    deprecatedObfustucatedPrivateIp: 0,
    cellId: 0,
    lastSessionId: 0,
    clientPackageVersion: 0,
    clientLanguage: "",
    clientOsType: 0,
    shouldRememberPassword: false,
    wineVersion: "",
    deprecated10: 0,
    obfuscatedPrivateIp: undefined,
    deprecatedPublicIp: 0,
    qosLevel: 0,
    clientSuppliedSteamId: "0",
    publicIp: undefined,
    machineId: Buffer.alloc(0),
    launcherType: 0,
    uiMode: 0,
    chatMode: 0,
    steam2AuthTicket: Buffer.alloc(0),
    emailAddress: "",
    rtime32AccountCreation: 0,
    accountName: "",
    password: "",
    gameServerToken: "",
    loginKey: "",
    wasConvertedDeprecatedMsg: false,
    anonUserTargetAccountName: "",
    resolvedUserSteamId: "0",
    eresultSentryfile: 0,
    shaSentryfile: Buffer.alloc(0),
    authCode: "",
    otpType: 0,
    otpValue: 0,
    otpIdentifier: "",
    steam2TicketRequest: false,
    sonyPsnTicket: Buffer.alloc(0),
    sonyPsnServiceId: "",
    createNewPsnLinkedAccountIfNeeded: false,
    sonyPsnName: "",
    gameServerAppId: 0,
    steamguardDontRememberComputer: false,
    machineName: "",
    machineNameUserchosen: "",
    countryOverride: "",
    isSteamBox: false,
    clientInstanceId: "0",
    twoFactorCode: "",
    supportsRateLimitResponse: false,
    webLogonNonce: "",
    priorityReason: 0,
    embeddedClientSecret: undefined,
  };
}

export const CMsgClientLogon = {
  encode(message: CMsgClientLogon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocolVersion !== 0) {
      writer.uint32(8).uint32(message.protocolVersion);
    }
    if (message.deprecatedObfustucatedPrivateIp !== 0) {
      writer.uint32(16).uint32(message.deprecatedObfustucatedPrivateIp);
    }
    if (message.cellId !== 0) {
      writer.uint32(24).uint32(message.cellId);
    }
    if (message.lastSessionId !== 0) {
      writer.uint32(32).uint32(message.lastSessionId);
    }
    if (message.clientPackageVersion !== 0) {
      writer.uint32(40).uint32(message.clientPackageVersion);
    }
    if (message.clientLanguage !== "") {
      writer.uint32(50).string(message.clientLanguage);
    }
    if (message.clientOsType !== 0) {
      writer.uint32(56).uint32(message.clientOsType);
    }
    if (message.shouldRememberPassword === true) {
      writer.uint32(64).bool(message.shouldRememberPassword);
    }
    if (message.wineVersion !== "") {
      writer.uint32(74).string(message.wineVersion);
    }
    if (message.deprecated10 !== 0) {
      writer.uint32(80).uint32(message.deprecated10);
    }
    if (message.obfuscatedPrivateIp !== undefined) {
      CMsgIPAddress.encode(message.obfuscatedPrivateIp, writer.uint32(90).fork()).ldelim();
    }
    if (message.deprecatedPublicIp !== 0) {
      writer.uint32(160).uint32(message.deprecatedPublicIp);
    }
    if (message.qosLevel !== 0) {
      writer.uint32(168).uint32(message.qosLevel);
    }
    if (message.clientSuppliedSteamId !== "0") {
      writer.uint32(177).fixed64(message.clientSuppliedSteamId);
    }
    if (message.publicIp !== undefined) {
      CMsgIPAddress.encode(message.publicIp, writer.uint32(186).fork()).ldelim();
    }
    if (message.machineId.length !== 0) {
      writer.uint32(242).bytes(message.machineId);
    }
    if (message.launcherType !== 0) {
      writer.uint32(248).uint32(message.launcherType);
    }
    if (message.uiMode !== 0) {
      writer.uint32(256).uint32(message.uiMode);
    }
    if (message.chatMode !== 0) {
      writer.uint32(264).uint32(message.chatMode);
    }
    if (message.steam2AuthTicket.length !== 0) {
      writer.uint32(330).bytes(message.steam2AuthTicket);
    }
    if (message.emailAddress !== "") {
      writer.uint32(338).string(message.emailAddress);
    }
    if (message.rtime32AccountCreation !== 0) {
      writer.uint32(349).fixed32(message.rtime32AccountCreation);
    }
    if (message.accountName !== "") {
      writer.uint32(402).string(message.accountName);
    }
    if (message.password !== "") {
      writer.uint32(410).string(message.password);
    }
    if (message.gameServerToken !== "") {
      writer.uint32(418).string(message.gameServerToken);
    }
    if (message.loginKey !== "") {
      writer.uint32(482).string(message.loginKey);
    }
    if (message.wasConvertedDeprecatedMsg === true) {
      writer.uint32(560).bool(message.wasConvertedDeprecatedMsg);
    }
    if (message.anonUserTargetAccountName !== "") {
      writer.uint32(642).string(message.anonUserTargetAccountName);
    }
    if (message.resolvedUserSteamId !== "0") {
      writer.uint32(649).fixed64(message.resolvedUserSteamId);
    }
    if (message.eresultSentryfile !== 0) {
      writer.uint32(656).int32(message.eresultSentryfile);
    }
    if (message.shaSentryfile.length !== 0) {
      writer.uint32(666).bytes(message.shaSentryfile);
    }
    if (message.authCode !== "") {
      writer.uint32(674).string(message.authCode);
    }
    if (message.otpType !== 0) {
      writer.uint32(680).int32(message.otpType);
    }
    if (message.otpValue !== 0) {
      writer.uint32(688).uint32(message.otpValue);
    }
    if (message.otpIdentifier !== "") {
      writer.uint32(698).string(message.otpIdentifier);
    }
    if (message.steam2TicketRequest === true) {
      writer.uint32(704).bool(message.steam2TicketRequest);
    }
    if (message.sonyPsnTicket.length !== 0) {
      writer.uint32(722).bytes(message.sonyPsnTicket);
    }
    if (message.sonyPsnServiceId !== "") {
      writer.uint32(730).string(message.sonyPsnServiceId);
    }
    if (message.createNewPsnLinkedAccountIfNeeded === true) {
      writer.uint32(736).bool(message.createNewPsnLinkedAccountIfNeeded);
    }
    if (message.sonyPsnName !== "") {
      writer.uint32(746).string(message.sonyPsnName);
    }
    if (message.gameServerAppId !== 0) {
      writer.uint32(752).int32(message.gameServerAppId);
    }
    if (message.steamguardDontRememberComputer === true) {
      writer.uint32(760).bool(message.steamguardDontRememberComputer);
    }
    if (message.machineName !== "") {
      writer.uint32(770).string(message.machineName);
    }
    if (message.machineNameUserchosen !== "") {
      writer.uint32(778).string(message.machineNameUserchosen);
    }
    if (message.countryOverride !== "") {
      writer.uint32(786).string(message.countryOverride);
    }
    if (message.isSteamBox === true) {
      writer.uint32(792).bool(message.isSteamBox);
    }
    if (message.clientInstanceId !== "0") {
      writer.uint32(800).uint64(message.clientInstanceId);
    }
    if (message.twoFactorCode !== "") {
      writer.uint32(810).string(message.twoFactorCode);
    }
    if (message.supportsRateLimitResponse === true) {
      writer.uint32(816).bool(message.supportsRateLimitResponse);
    }
    if (message.webLogonNonce !== "") {
      writer.uint32(826).string(message.webLogonNonce);
    }
    if (message.priorityReason !== 0) {
      writer.uint32(832).int32(message.priorityReason);
    }
    if (message.embeddedClientSecret !== undefined) {
      CMsgClientSecret.encode(message.embeddedClientSecret, writer.uint32(842).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLogon {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLogon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.protocolVersion = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.deprecatedObfustucatedPrivateIp = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.cellId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.lastSessionId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.clientPackageVersion = reader.uint32();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.clientLanguage = reader.string();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.clientOsType = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.shouldRememberPassword = reader.bool();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.wineVersion = reader.string();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.deprecated10 = reader.uint32();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.obfuscatedPrivateIp = CMsgIPAddress.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.deprecatedPublicIp = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.qosLevel = reader.uint32();
          continue;
        case 22:
          if (tag != 177) {
            break;
          }

          message.clientSuppliedSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 23:
          if (tag != 186) {
            break;
          }

          message.publicIp = CMsgIPAddress.decode(reader, reader.uint32());
          continue;
        case 30:
          if (tag != 242) {
            break;
          }

          message.machineId = reader.bytes() as Buffer;
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.launcherType = reader.uint32();
          continue;
        case 32:
          if (tag != 256) {
            break;
          }

          message.uiMode = reader.uint32();
          continue;
        case 33:
          if (tag != 264) {
            break;
          }

          message.chatMode = reader.uint32();
          continue;
        case 41:
          if (tag != 330) {
            break;
          }

          message.steam2AuthTicket = reader.bytes() as Buffer;
          continue;
        case 42:
          if (tag != 338) {
            break;
          }

          message.emailAddress = reader.string();
          continue;
        case 43:
          if (tag != 349) {
            break;
          }

          message.rtime32AccountCreation = reader.fixed32();
          continue;
        case 50:
          if (tag != 402) {
            break;
          }

          message.accountName = reader.string();
          continue;
        case 51:
          if (tag != 410) {
            break;
          }

          message.password = reader.string();
          continue;
        case 52:
          if (tag != 418) {
            break;
          }

          message.gameServerToken = reader.string();
          continue;
        case 60:
          if (tag != 482) {
            break;
          }

          message.loginKey = reader.string();
          continue;
        case 70:
          if (tag != 560) {
            break;
          }

          message.wasConvertedDeprecatedMsg = reader.bool();
          continue;
        case 80:
          if (tag != 642) {
            break;
          }

          message.anonUserTargetAccountName = reader.string();
          continue;
        case 81:
          if (tag != 649) {
            break;
          }

          message.resolvedUserSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 82:
          if (tag != 656) {
            break;
          }

          message.eresultSentryfile = reader.int32();
          continue;
        case 83:
          if (tag != 666) {
            break;
          }

          message.shaSentryfile = reader.bytes() as Buffer;
          continue;
        case 84:
          if (tag != 674) {
            break;
          }

          message.authCode = reader.string();
          continue;
        case 85:
          if (tag != 680) {
            break;
          }

          message.otpType = reader.int32();
          continue;
        case 86:
          if (tag != 688) {
            break;
          }

          message.otpValue = reader.uint32();
          continue;
        case 87:
          if (tag != 698) {
            break;
          }

          message.otpIdentifier = reader.string();
          continue;
        case 88:
          if (tag != 704) {
            break;
          }

          message.steam2TicketRequest = reader.bool();
          continue;
        case 90:
          if (tag != 722) {
            break;
          }

          message.sonyPsnTicket = reader.bytes() as Buffer;
          continue;
        case 91:
          if (tag != 730) {
            break;
          }

          message.sonyPsnServiceId = reader.string();
          continue;
        case 92:
          if (tag != 736) {
            break;
          }

          message.createNewPsnLinkedAccountIfNeeded = reader.bool();
          continue;
        case 93:
          if (tag != 746) {
            break;
          }

          message.sonyPsnName = reader.string();
          continue;
        case 94:
          if (tag != 752) {
            break;
          }

          message.gameServerAppId = reader.int32();
          continue;
        case 95:
          if (tag != 760) {
            break;
          }

          message.steamguardDontRememberComputer = reader.bool();
          continue;
        case 96:
          if (tag != 770) {
            break;
          }

          message.machineName = reader.string();
          continue;
        case 97:
          if (tag != 778) {
            break;
          }

          message.machineNameUserchosen = reader.string();
          continue;
        case 98:
          if (tag != 786) {
            break;
          }

          message.countryOverride = reader.string();
          continue;
        case 99:
          if (tag != 792) {
            break;
          }

          message.isSteamBox = reader.bool();
          continue;
        case 100:
          if (tag != 800) {
            break;
          }

          message.clientInstanceId = longToString(reader.uint64() as Long);
          continue;
        case 101:
          if (tag != 810) {
            break;
          }

          message.twoFactorCode = reader.string();
          continue;
        case 102:
          if (tag != 816) {
            break;
          }

          message.supportsRateLimitResponse = reader.bool();
          continue;
        case 103:
          if (tag != 826) {
            break;
          }

          message.webLogonNonce = reader.string();
          continue;
        case 104:
          if (tag != 832) {
            break;
          }

          message.priorityReason = reader.int32();
          continue;
        case 105:
          if (tag != 842) {
            break;
          }

          message.embeddedClientSecret = CMsgClientSecret.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientLogon {
    return {
      protocolVersion: isSet(object.protocolVersion) ? Number(object.protocolVersion) : 0,
      deprecatedObfustucatedPrivateIp: isSet(object.deprecatedObfustucatedPrivateIp)
        ? Number(object.deprecatedObfustucatedPrivateIp)
        : 0,
      cellId: isSet(object.cellId) ? Number(object.cellId) : 0,
      lastSessionId: isSet(object.lastSessionId) ? Number(object.lastSessionId) : 0,
      clientPackageVersion: isSet(object.clientPackageVersion) ? Number(object.clientPackageVersion) : 0,
      clientLanguage: isSet(object.clientLanguage) ? String(object.clientLanguage) : "",
      clientOsType: isSet(object.clientOsType) ? Number(object.clientOsType) : 0,
      shouldRememberPassword: isSet(object.shouldRememberPassword) ? Boolean(object.shouldRememberPassword) : false,
      wineVersion: isSet(object.wineVersion) ? String(object.wineVersion) : "",
      deprecated10: isSet(object.deprecated10) ? Number(object.deprecated10) : 0,
      obfuscatedPrivateIp: isSet(object.obfuscatedPrivateIp)
        ? CMsgIPAddress.fromJSON(object.obfuscatedPrivateIp)
        : undefined,
      deprecatedPublicIp: isSet(object.deprecatedPublicIp) ? Number(object.deprecatedPublicIp) : 0,
      qosLevel: isSet(object.qosLevel) ? Number(object.qosLevel) : 0,
      clientSuppliedSteamId: isSet(object.clientSuppliedSteamId) ? String(object.clientSuppliedSteamId) : "0",
      publicIp: isSet(object.publicIp) ? CMsgIPAddress.fromJSON(object.publicIp) : undefined,
      machineId: isSet(object.machineId) ? Buffer.from(bytesFromBase64(object.machineId)) : Buffer.alloc(0),
      launcherType: isSet(object.launcherType) ? Number(object.launcherType) : 0,
      uiMode: isSet(object.uiMode) ? Number(object.uiMode) : 0,
      chatMode: isSet(object.chatMode) ? Number(object.chatMode) : 0,
      steam2AuthTicket: isSet(object.steam2AuthTicket)
        ? Buffer.from(bytesFromBase64(object.steam2AuthTicket))
        : Buffer.alloc(0),
      emailAddress: isSet(object.emailAddress) ? String(object.emailAddress) : "",
      rtime32AccountCreation: isSet(object.rtime32AccountCreation) ? Number(object.rtime32AccountCreation) : 0,
      accountName: isSet(object.accountName) ? String(object.accountName) : "",
      password: isSet(object.password) ? String(object.password) : "",
      gameServerToken: isSet(object.gameServerToken) ? String(object.gameServerToken) : "",
      loginKey: isSet(object.loginKey) ? String(object.loginKey) : "",
      wasConvertedDeprecatedMsg: isSet(object.wasConvertedDeprecatedMsg)
        ? Boolean(object.wasConvertedDeprecatedMsg)
        : false,
      anonUserTargetAccountName: isSet(object.anonUserTargetAccountName)
        ? String(object.anonUserTargetAccountName)
        : "",
      resolvedUserSteamId: isSet(object.resolvedUserSteamId) ? String(object.resolvedUserSteamId) : "0",
      eresultSentryfile: isSet(object.eresultSentryfile) ? Number(object.eresultSentryfile) : 0,
      shaSentryfile: isSet(object.shaSentryfile) ? Buffer.from(bytesFromBase64(object.shaSentryfile)) : Buffer.alloc(0),
      authCode: isSet(object.authCode) ? String(object.authCode) : "",
      otpType: isSet(object.otpType) ? Number(object.otpType) : 0,
      otpValue: isSet(object.otpValue) ? Number(object.otpValue) : 0,
      otpIdentifier: isSet(object.otpIdentifier) ? String(object.otpIdentifier) : "",
      steam2TicketRequest: isSet(object.steam2TicketRequest) ? Boolean(object.steam2TicketRequest) : false,
      sonyPsnTicket: isSet(object.sonyPsnTicket) ? Buffer.from(bytesFromBase64(object.sonyPsnTicket)) : Buffer.alloc(0),
      sonyPsnServiceId: isSet(object.sonyPsnServiceId) ? String(object.sonyPsnServiceId) : "",
      createNewPsnLinkedAccountIfNeeded: isSet(object.createNewPsnLinkedAccountIfNeeded)
        ? Boolean(object.createNewPsnLinkedAccountIfNeeded)
        : false,
      sonyPsnName: isSet(object.sonyPsnName) ? String(object.sonyPsnName) : "",
      gameServerAppId: isSet(object.gameServerAppId) ? Number(object.gameServerAppId) : 0,
      steamguardDontRememberComputer: isSet(object.steamguardDontRememberComputer)
        ? Boolean(object.steamguardDontRememberComputer)
        : false,
      machineName: isSet(object.machineName) ? String(object.machineName) : "",
      machineNameUserchosen: isSet(object.machineNameUserchosen) ? String(object.machineNameUserchosen) : "",
      countryOverride: isSet(object.countryOverride) ? String(object.countryOverride) : "",
      isSteamBox: isSet(object.isSteamBox) ? Boolean(object.isSteamBox) : false,
      clientInstanceId: isSet(object.clientInstanceId) ? String(object.clientInstanceId) : "0",
      twoFactorCode: isSet(object.twoFactorCode) ? String(object.twoFactorCode) : "",
      supportsRateLimitResponse: isSet(object.supportsRateLimitResponse)
        ? Boolean(object.supportsRateLimitResponse)
        : false,
      webLogonNonce: isSet(object.webLogonNonce) ? String(object.webLogonNonce) : "",
      priorityReason: isSet(object.priorityReason) ? Number(object.priorityReason) : 0,
      embeddedClientSecret: isSet(object.embeddedClientSecret)
        ? CMsgClientSecret.fromJSON(object.embeddedClientSecret)
        : undefined,
    };
  },

  toJSON(message: CMsgClientLogon): unknown {
    const obj: any = {};
    message.protocolVersion !== undefined && (obj.protocolVersion = Math.round(message.protocolVersion));
    message.deprecatedObfustucatedPrivateIp !== undefined &&
      (obj.deprecatedObfustucatedPrivateIp = Math.round(message.deprecatedObfustucatedPrivateIp));
    message.cellId !== undefined && (obj.cellId = Math.round(message.cellId));
    message.lastSessionId !== undefined && (obj.lastSessionId = Math.round(message.lastSessionId));
    message.clientPackageVersion !== undefined && (obj.clientPackageVersion = Math.round(message.clientPackageVersion));
    message.clientLanguage !== undefined && (obj.clientLanguage = message.clientLanguage);
    message.clientOsType !== undefined && (obj.clientOsType = Math.round(message.clientOsType));
    message.shouldRememberPassword !== undefined && (obj.shouldRememberPassword = message.shouldRememberPassword);
    message.wineVersion !== undefined && (obj.wineVersion = message.wineVersion);
    message.deprecated10 !== undefined && (obj.deprecated10 = Math.round(message.deprecated10));
    message.obfuscatedPrivateIp !== undefined && (obj.obfuscatedPrivateIp = message.obfuscatedPrivateIp
      ? CMsgIPAddress.toJSON(message.obfuscatedPrivateIp)
      : undefined);
    message.deprecatedPublicIp !== undefined && (obj.deprecatedPublicIp = Math.round(message.deprecatedPublicIp));
    message.qosLevel !== undefined && (obj.qosLevel = Math.round(message.qosLevel));
    message.clientSuppliedSteamId !== undefined && (obj.clientSuppliedSteamId = message.clientSuppliedSteamId);
    message.publicIp !== undefined &&
      (obj.publicIp = message.publicIp ? CMsgIPAddress.toJSON(message.publicIp) : undefined);
    message.machineId !== undefined &&
      (obj.machineId = base64FromBytes(message.machineId !== undefined ? message.machineId : Buffer.alloc(0)));
    message.launcherType !== undefined && (obj.launcherType = Math.round(message.launcherType));
    message.uiMode !== undefined && (obj.uiMode = Math.round(message.uiMode));
    message.chatMode !== undefined && (obj.chatMode = Math.round(message.chatMode));
    message.steam2AuthTicket !== undefined &&
      (obj.steam2AuthTicket = base64FromBytes(
        message.steam2AuthTicket !== undefined ? message.steam2AuthTicket : Buffer.alloc(0),
      ));
    message.emailAddress !== undefined && (obj.emailAddress = message.emailAddress);
    message.rtime32AccountCreation !== undefined &&
      (obj.rtime32AccountCreation = Math.round(message.rtime32AccountCreation));
    message.accountName !== undefined && (obj.accountName = message.accountName);
    message.password !== undefined && (obj.password = message.password);
    message.gameServerToken !== undefined && (obj.gameServerToken = message.gameServerToken);
    message.loginKey !== undefined && (obj.loginKey = message.loginKey);
    message.wasConvertedDeprecatedMsg !== undefined &&
      (obj.wasConvertedDeprecatedMsg = message.wasConvertedDeprecatedMsg);
    message.anonUserTargetAccountName !== undefined &&
      (obj.anonUserTargetAccountName = message.anonUserTargetAccountName);
    message.resolvedUserSteamId !== undefined && (obj.resolvedUserSteamId = message.resolvedUserSteamId);
    message.eresultSentryfile !== undefined && (obj.eresultSentryfile = Math.round(message.eresultSentryfile));
    message.shaSentryfile !== undefined &&
      (obj.shaSentryfile = base64FromBytes(
        message.shaSentryfile !== undefined ? message.shaSentryfile : Buffer.alloc(0),
      ));
    message.authCode !== undefined && (obj.authCode = message.authCode);
    message.otpType !== undefined && (obj.otpType = Math.round(message.otpType));
    message.otpValue !== undefined && (obj.otpValue = Math.round(message.otpValue));
    message.otpIdentifier !== undefined && (obj.otpIdentifier = message.otpIdentifier);
    message.steam2TicketRequest !== undefined && (obj.steam2TicketRequest = message.steam2TicketRequest);
    message.sonyPsnTicket !== undefined &&
      (obj.sonyPsnTicket = base64FromBytes(
        message.sonyPsnTicket !== undefined ? message.sonyPsnTicket : Buffer.alloc(0),
      ));
    message.sonyPsnServiceId !== undefined && (obj.sonyPsnServiceId = message.sonyPsnServiceId);
    message.createNewPsnLinkedAccountIfNeeded !== undefined &&
      (obj.createNewPsnLinkedAccountIfNeeded = message.createNewPsnLinkedAccountIfNeeded);
    message.sonyPsnName !== undefined && (obj.sonyPsnName = message.sonyPsnName);
    message.gameServerAppId !== undefined && (obj.gameServerAppId = Math.round(message.gameServerAppId));
    message.steamguardDontRememberComputer !== undefined &&
      (obj.steamguardDontRememberComputer = message.steamguardDontRememberComputer);
    message.machineName !== undefined && (obj.machineName = message.machineName);
    message.machineNameUserchosen !== undefined && (obj.machineNameUserchosen = message.machineNameUserchosen);
    message.countryOverride !== undefined && (obj.countryOverride = message.countryOverride);
    message.isSteamBox !== undefined && (obj.isSteamBox = message.isSteamBox);
    message.clientInstanceId !== undefined && (obj.clientInstanceId = message.clientInstanceId);
    message.twoFactorCode !== undefined && (obj.twoFactorCode = message.twoFactorCode);
    message.supportsRateLimitResponse !== undefined &&
      (obj.supportsRateLimitResponse = message.supportsRateLimitResponse);
    message.webLogonNonce !== undefined && (obj.webLogonNonce = message.webLogonNonce);
    message.priorityReason !== undefined && (obj.priorityReason = Math.round(message.priorityReason));
    message.embeddedClientSecret !== undefined && (obj.embeddedClientSecret = message.embeddedClientSecret
      ? CMsgClientSecret.toJSON(message.embeddedClientSecret)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientLogon>): CMsgClientLogon {
    return CMsgClientLogon.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientLogon>): CMsgClientLogon {
    const message = createBaseCMsgClientLogon();
    message.protocolVersion = object.protocolVersion ?? 0;
    message.deprecatedObfustucatedPrivateIp = object.deprecatedObfustucatedPrivateIp ?? 0;
    message.cellId = object.cellId ?? 0;
    message.lastSessionId = object.lastSessionId ?? 0;
    message.clientPackageVersion = object.clientPackageVersion ?? 0;
    message.clientLanguage = object.clientLanguage ?? "";
    message.clientOsType = object.clientOsType ?? 0;
    message.shouldRememberPassword = object.shouldRememberPassword ?? false;
    message.wineVersion = object.wineVersion ?? "";
    message.deprecated10 = object.deprecated10 ?? 0;
    message.obfuscatedPrivateIp = (object.obfuscatedPrivateIp !== undefined && object.obfuscatedPrivateIp !== null)
      ? CMsgIPAddress.fromPartial(object.obfuscatedPrivateIp)
      : undefined;
    message.deprecatedPublicIp = object.deprecatedPublicIp ?? 0;
    message.qosLevel = object.qosLevel ?? 0;
    message.clientSuppliedSteamId = object.clientSuppliedSteamId ?? "0";
    message.publicIp = (object.publicIp !== undefined && object.publicIp !== null)
      ? CMsgIPAddress.fromPartial(object.publicIp)
      : undefined;
    message.machineId = object.machineId ?? Buffer.alloc(0);
    message.launcherType = object.launcherType ?? 0;
    message.uiMode = object.uiMode ?? 0;
    message.chatMode = object.chatMode ?? 0;
    message.steam2AuthTicket = object.steam2AuthTicket ?? Buffer.alloc(0);
    message.emailAddress = object.emailAddress ?? "";
    message.rtime32AccountCreation = object.rtime32AccountCreation ?? 0;
    message.accountName = object.accountName ?? "";
    message.password = object.password ?? "";
    message.gameServerToken = object.gameServerToken ?? "";
    message.loginKey = object.loginKey ?? "";
    message.wasConvertedDeprecatedMsg = object.wasConvertedDeprecatedMsg ?? false;
    message.anonUserTargetAccountName = object.anonUserTargetAccountName ?? "";
    message.resolvedUserSteamId = object.resolvedUserSteamId ?? "0";
    message.eresultSentryfile = object.eresultSentryfile ?? 0;
    message.shaSentryfile = object.shaSentryfile ?? Buffer.alloc(0);
    message.authCode = object.authCode ?? "";
    message.otpType = object.otpType ?? 0;
    message.otpValue = object.otpValue ?? 0;
    message.otpIdentifier = object.otpIdentifier ?? "";
    message.steam2TicketRequest = object.steam2TicketRequest ?? false;
    message.sonyPsnTicket = object.sonyPsnTicket ?? Buffer.alloc(0);
    message.sonyPsnServiceId = object.sonyPsnServiceId ?? "";
    message.createNewPsnLinkedAccountIfNeeded = object.createNewPsnLinkedAccountIfNeeded ?? false;
    message.sonyPsnName = object.sonyPsnName ?? "";
    message.gameServerAppId = object.gameServerAppId ?? 0;
    message.steamguardDontRememberComputer = object.steamguardDontRememberComputer ?? false;
    message.machineName = object.machineName ?? "";
    message.machineNameUserchosen = object.machineNameUserchosen ?? "";
    message.countryOverride = object.countryOverride ?? "";
    message.isSteamBox = object.isSteamBox ?? false;
    message.clientInstanceId = object.clientInstanceId ?? "0";
    message.twoFactorCode = object.twoFactorCode ?? "";
    message.supportsRateLimitResponse = object.supportsRateLimitResponse ?? false;
    message.webLogonNonce = object.webLogonNonce ?? "";
    message.priorityReason = object.priorityReason ?? 0;
    message.embeddedClientSecret = (object.embeddedClientSecret !== undefined && object.embeddedClientSecret !== null)
      ? CMsgClientSecret.fromPartial(object.embeddedClientSecret)
      : undefined;
    return message;
  },
};

function createBaseCMsgClientLogonResponse(): CMsgClientLogonResponse {
  return {
    eresult: 0,
    outOfGameHeartbeatSeconds: 0,
    inGameHeartbeatSeconds: 0,
    deprecatedPublicIp: 0,
    rtime32ServerTime: 0,
    accountFlags: 0,
    cellId: 0,
    emailDomain: "",
    steam2Ticket: Buffer.alloc(0),
    eresultExtended: 0,
    webapiAuthenticateUserNonce: "",
    cellIdPingThreshold: 0,
    usePics: false,
    vanityUrl: "",
    publicIp: undefined,
    clientSuppliedSteamid: "0",
    ipCountryCode: "",
    parentalSettings: Buffer.alloc(0),
    parentalSettingSignature: Buffer.alloc(0),
    countLoginfailuresToMigrate: 0,
    countDisconnectsToMigrate: 0,
    ogsDataReportTimeWindow: 0,
    clientInstanceId: "0",
    forceClientUpdateCheck: false,
  };
}

export const CMsgClientLogonResponse = {
  encode(message: CMsgClientLogonResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.outOfGameHeartbeatSeconds !== 0) {
      writer.uint32(16).int32(message.outOfGameHeartbeatSeconds);
    }
    if (message.inGameHeartbeatSeconds !== 0) {
      writer.uint32(24).int32(message.inGameHeartbeatSeconds);
    }
    if (message.deprecatedPublicIp !== 0) {
      writer.uint32(32).uint32(message.deprecatedPublicIp);
    }
    if (message.rtime32ServerTime !== 0) {
      writer.uint32(45).fixed32(message.rtime32ServerTime);
    }
    if (message.accountFlags !== 0) {
      writer.uint32(48).uint32(message.accountFlags);
    }
    if (message.cellId !== 0) {
      writer.uint32(56).uint32(message.cellId);
    }
    if (message.emailDomain !== "") {
      writer.uint32(66).string(message.emailDomain);
    }
    if (message.steam2Ticket.length !== 0) {
      writer.uint32(74).bytes(message.steam2Ticket);
    }
    if (message.eresultExtended !== 0) {
      writer.uint32(80).int32(message.eresultExtended);
    }
    if (message.webapiAuthenticateUserNonce !== "") {
      writer.uint32(90).string(message.webapiAuthenticateUserNonce);
    }
    if (message.cellIdPingThreshold !== 0) {
      writer.uint32(96).uint32(message.cellIdPingThreshold);
    }
    if (message.usePics === true) {
      writer.uint32(104).bool(message.usePics);
    }
    if (message.vanityUrl !== "") {
      writer.uint32(114).string(message.vanityUrl);
    }
    if (message.publicIp !== undefined) {
      CMsgIPAddress.encode(message.publicIp, writer.uint32(122).fork()).ldelim();
    }
    if (message.clientSuppliedSteamid !== "0") {
      writer.uint32(161).fixed64(message.clientSuppliedSteamid);
    }
    if (message.ipCountryCode !== "") {
      writer.uint32(170).string(message.ipCountryCode);
    }
    if (message.parentalSettings.length !== 0) {
      writer.uint32(178).bytes(message.parentalSettings);
    }
    if (message.parentalSettingSignature.length !== 0) {
      writer.uint32(186).bytes(message.parentalSettingSignature);
    }
    if (message.countLoginfailuresToMigrate !== 0) {
      writer.uint32(192).int32(message.countLoginfailuresToMigrate);
    }
    if (message.countDisconnectsToMigrate !== 0) {
      writer.uint32(200).int32(message.countDisconnectsToMigrate);
    }
    if (message.ogsDataReportTimeWindow !== 0) {
      writer.uint32(208).int32(message.ogsDataReportTimeWindow);
    }
    if (message.clientInstanceId !== "0") {
      writer.uint32(216).uint64(message.clientInstanceId);
    }
    if (message.forceClientUpdateCheck === true) {
      writer.uint32(224).bool(message.forceClientUpdateCheck);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLogonResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLogonResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eresult = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.outOfGameHeartbeatSeconds = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.inGameHeartbeatSeconds = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.deprecatedPublicIp = reader.uint32();
          continue;
        case 5:
          if (tag != 45) {
            break;
          }

          message.rtime32ServerTime = reader.fixed32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.accountFlags = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.cellId = reader.uint32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.emailDomain = reader.string();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.steam2Ticket = reader.bytes() as Buffer;
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.eresultExtended = reader.int32();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.webapiAuthenticateUserNonce = reader.string();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.cellIdPingThreshold = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.usePics = reader.bool();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.vanityUrl = reader.string();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.publicIp = CMsgIPAddress.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag != 161) {
            break;
          }

          message.clientSuppliedSteamid = longToString(reader.fixed64() as Long);
          continue;
        case 21:
          if (tag != 170) {
            break;
          }

          message.ipCountryCode = reader.string();
          continue;
        case 22:
          if (tag != 178) {
            break;
          }

          message.parentalSettings = reader.bytes() as Buffer;
          continue;
        case 23:
          if (tag != 186) {
            break;
          }

          message.parentalSettingSignature = reader.bytes() as Buffer;
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.countLoginfailuresToMigrate = reader.int32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.countDisconnectsToMigrate = reader.int32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.ogsDataReportTimeWindow = reader.int32();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.clientInstanceId = longToString(reader.uint64() as Long);
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.forceClientUpdateCheck = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientLogonResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      outOfGameHeartbeatSeconds: isSet(object.outOfGameHeartbeatSeconds) ? Number(object.outOfGameHeartbeatSeconds) : 0,
      inGameHeartbeatSeconds: isSet(object.inGameHeartbeatSeconds) ? Number(object.inGameHeartbeatSeconds) : 0,
      deprecatedPublicIp: isSet(object.deprecatedPublicIp) ? Number(object.deprecatedPublicIp) : 0,
      rtime32ServerTime: isSet(object.rtime32ServerTime) ? Number(object.rtime32ServerTime) : 0,
      accountFlags: isSet(object.accountFlags) ? Number(object.accountFlags) : 0,
      cellId: isSet(object.cellId) ? Number(object.cellId) : 0,
      emailDomain: isSet(object.emailDomain) ? String(object.emailDomain) : "",
      steam2Ticket: isSet(object.steam2Ticket) ? Buffer.from(bytesFromBase64(object.steam2Ticket)) : Buffer.alloc(0),
      eresultExtended: isSet(object.eresultExtended) ? Number(object.eresultExtended) : 0,
      webapiAuthenticateUserNonce: isSet(object.webapiAuthenticateUserNonce)
        ? String(object.webapiAuthenticateUserNonce)
        : "",
      cellIdPingThreshold: isSet(object.cellIdPingThreshold) ? Number(object.cellIdPingThreshold) : 0,
      usePics: isSet(object.usePics) ? Boolean(object.usePics) : false,
      vanityUrl: isSet(object.vanityUrl) ? String(object.vanityUrl) : "",
      publicIp: isSet(object.publicIp) ? CMsgIPAddress.fromJSON(object.publicIp) : undefined,
      clientSuppliedSteamid: isSet(object.clientSuppliedSteamid) ? String(object.clientSuppliedSteamid) : "0",
      ipCountryCode: isSet(object.ipCountryCode) ? String(object.ipCountryCode) : "",
      parentalSettings: isSet(object.parentalSettings)
        ? Buffer.from(bytesFromBase64(object.parentalSettings))
        : Buffer.alloc(0),
      parentalSettingSignature: isSet(object.parentalSettingSignature)
        ? Buffer.from(bytesFromBase64(object.parentalSettingSignature))
        : Buffer.alloc(0),
      countLoginfailuresToMigrate: isSet(object.countLoginfailuresToMigrate)
        ? Number(object.countLoginfailuresToMigrate)
        : 0,
      countDisconnectsToMigrate: isSet(object.countDisconnectsToMigrate) ? Number(object.countDisconnectsToMigrate) : 0,
      ogsDataReportTimeWindow: isSet(object.ogsDataReportTimeWindow) ? Number(object.ogsDataReportTimeWindow) : 0,
      clientInstanceId: isSet(object.clientInstanceId) ? String(object.clientInstanceId) : "0",
      forceClientUpdateCheck: isSet(object.forceClientUpdateCheck) ? Boolean(object.forceClientUpdateCheck) : false,
    };
  },

  toJSON(message: CMsgClientLogonResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.outOfGameHeartbeatSeconds !== undefined &&
      (obj.outOfGameHeartbeatSeconds = Math.round(message.outOfGameHeartbeatSeconds));
    message.inGameHeartbeatSeconds !== undefined &&
      (obj.inGameHeartbeatSeconds = Math.round(message.inGameHeartbeatSeconds));
    message.deprecatedPublicIp !== undefined && (obj.deprecatedPublicIp = Math.round(message.deprecatedPublicIp));
    message.rtime32ServerTime !== undefined && (obj.rtime32ServerTime = Math.round(message.rtime32ServerTime));
    message.accountFlags !== undefined && (obj.accountFlags = Math.round(message.accountFlags));
    message.cellId !== undefined && (obj.cellId = Math.round(message.cellId));
    message.emailDomain !== undefined && (obj.emailDomain = message.emailDomain);
    message.steam2Ticket !== undefined &&
      (obj.steam2Ticket = base64FromBytes(message.steam2Ticket !== undefined ? message.steam2Ticket : Buffer.alloc(0)));
    message.eresultExtended !== undefined && (obj.eresultExtended = Math.round(message.eresultExtended));
    message.webapiAuthenticateUserNonce !== undefined &&
      (obj.webapiAuthenticateUserNonce = message.webapiAuthenticateUserNonce);
    message.cellIdPingThreshold !== undefined && (obj.cellIdPingThreshold = Math.round(message.cellIdPingThreshold));
    message.usePics !== undefined && (obj.usePics = message.usePics);
    message.vanityUrl !== undefined && (obj.vanityUrl = message.vanityUrl);
    message.publicIp !== undefined &&
      (obj.publicIp = message.publicIp ? CMsgIPAddress.toJSON(message.publicIp) : undefined);
    message.clientSuppliedSteamid !== undefined && (obj.clientSuppliedSteamid = message.clientSuppliedSteamid);
    message.ipCountryCode !== undefined && (obj.ipCountryCode = message.ipCountryCode);
    message.parentalSettings !== undefined &&
      (obj.parentalSettings = base64FromBytes(
        message.parentalSettings !== undefined ? message.parentalSettings : Buffer.alloc(0),
      ));
    message.parentalSettingSignature !== undefined &&
      (obj.parentalSettingSignature = base64FromBytes(
        message.parentalSettingSignature !== undefined ? message.parentalSettingSignature : Buffer.alloc(0),
      ));
    message.countLoginfailuresToMigrate !== undefined &&
      (obj.countLoginfailuresToMigrate = Math.round(message.countLoginfailuresToMigrate));
    message.countDisconnectsToMigrate !== undefined &&
      (obj.countDisconnectsToMigrate = Math.round(message.countDisconnectsToMigrate));
    message.ogsDataReportTimeWindow !== undefined &&
      (obj.ogsDataReportTimeWindow = Math.round(message.ogsDataReportTimeWindow));
    message.clientInstanceId !== undefined && (obj.clientInstanceId = message.clientInstanceId);
    message.forceClientUpdateCheck !== undefined && (obj.forceClientUpdateCheck = message.forceClientUpdateCheck);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientLogonResponse>): CMsgClientLogonResponse {
    return CMsgClientLogonResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientLogonResponse>): CMsgClientLogonResponse {
    const message = createBaseCMsgClientLogonResponse();
    message.eresult = object.eresult ?? 0;
    message.outOfGameHeartbeatSeconds = object.outOfGameHeartbeatSeconds ?? 0;
    message.inGameHeartbeatSeconds = object.inGameHeartbeatSeconds ?? 0;
    message.deprecatedPublicIp = object.deprecatedPublicIp ?? 0;
    message.rtime32ServerTime = object.rtime32ServerTime ?? 0;
    message.accountFlags = object.accountFlags ?? 0;
    message.cellId = object.cellId ?? 0;
    message.emailDomain = object.emailDomain ?? "";
    message.steam2Ticket = object.steam2Ticket ?? Buffer.alloc(0);
    message.eresultExtended = object.eresultExtended ?? 0;
    message.webapiAuthenticateUserNonce = object.webapiAuthenticateUserNonce ?? "";
    message.cellIdPingThreshold = object.cellIdPingThreshold ?? 0;
    message.usePics = object.usePics ?? false;
    message.vanityUrl = object.vanityUrl ?? "";
    message.publicIp = (object.publicIp !== undefined && object.publicIp !== null)
      ? CMsgIPAddress.fromPartial(object.publicIp)
      : undefined;
    message.clientSuppliedSteamid = object.clientSuppliedSteamid ?? "0";
    message.ipCountryCode = object.ipCountryCode ?? "";
    message.parentalSettings = object.parentalSettings ?? Buffer.alloc(0);
    message.parentalSettingSignature = object.parentalSettingSignature ?? Buffer.alloc(0);
    message.countLoginfailuresToMigrate = object.countLoginfailuresToMigrate ?? 0;
    message.countDisconnectsToMigrate = object.countDisconnectsToMigrate ?? 0;
    message.ogsDataReportTimeWindow = object.ogsDataReportTimeWindow ?? 0;
    message.clientInstanceId = object.clientInstanceId ?? "0";
    message.forceClientUpdateCheck = object.forceClientUpdateCheck ?? false;
    return message;
  },
};

function createBaseCMsgClientRequestWebAPIAuthenticateUserNonce(): CMsgClientRequestWebAPIAuthenticateUserNonce {
  return { tokenType: 0 };
}

export const CMsgClientRequestWebAPIAuthenticateUserNonce = {
  encode(message: CMsgClientRequestWebAPIAuthenticateUserNonce, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenType !== 0) {
      writer.uint32(8).int32(message.tokenType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRequestWebAPIAuthenticateUserNonce {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRequestWebAPIAuthenticateUserNonce();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tokenType = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRequestWebAPIAuthenticateUserNonce {
    return { tokenType: isSet(object.tokenType) ? Number(object.tokenType) : 0 };
  },

  toJSON(message: CMsgClientRequestWebAPIAuthenticateUserNonce): unknown {
    const obj: any = {};
    message.tokenType !== undefined && (obj.tokenType = Math.round(message.tokenType));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientRequestWebAPIAuthenticateUserNonce>,
  ): CMsgClientRequestWebAPIAuthenticateUserNonce {
    return CMsgClientRequestWebAPIAuthenticateUserNonce.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientRequestWebAPIAuthenticateUserNonce>,
  ): CMsgClientRequestWebAPIAuthenticateUserNonce {
    const message = createBaseCMsgClientRequestWebAPIAuthenticateUserNonce();
    message.tokenType = object.tokenType ?? 0;
    return message;
  },
};

function createBaseCMsgClientRequestWebAPIAuthenticateUserNonceResponse(): CMsgClientRequestWebAPIAuthenticateUserNonceResponse {
  return { eresult: 0, webapiAuthenticateUserNonce: "", tokenType: 0 };
}

export const CMsgClientRequestWebAPIAuthenticateUserNonceResponse = {
  encode(
    message: CMsgClientRequestWebAPIAuthenticateUserNonceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.webapiAuthenticateUserNonce !== "") {
      writer.uint32(90).string(message.webapiAuthenticateUserNonce);
    }
    if (message.tokenType !== 0) {
      writer.uint32(24).int32(message.tokenType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRequestWebAPIAuthenticateUserNonceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRequestWebAPIAuthenticateUserNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eresult = reader.int32();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.webapiAuthenticateUserNonce = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.tokenType = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRequestWebAPIAuthenticateUserNonceResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      webapiAuthenticateUserNonce: isSet(object.webapiAuthenticateUserNonce)
        ? String(object.webapiAuthenticateUserNonce)
        : "",
      tokenType: isSet(object.tokenType) ? Number(object.tokenType) : 0,
    };
  },

  toJSON(message: CMsgClientRequestWebAPIAuthenticateUserNonceResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.webapiAuthenticateUserNonce !== undefined &&
      (obj.webapiAuthenticateUserNonce = message.webapiAuthenticateUserNonce);
    message.tokenType !== undefined && (obj.tokenType = Math.round(message.tokenType));
    return obj;
  },

  create(
    base?: DeepPartial<CMsgClientRequestWebAPIAuthenticateUserNonceResponse>,
  ): CMsgClientRequestWebAPIAuthenticateUserNonceResponse {
    return CMsgClientRequestWebAPIAuthenticateUserNonceResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CMsgClientRequestWebAPIAuthenticateUserNonceResponse>,
  ): CMsgClientRequestWebAPIAuthenticateUserNonceResponse {
    const message = createBaseCMsgClientRequestWebAPIAuthenticateUserNonceResponse();
    message.eresult = object.eresult ?? 0;
    message.webapiAuthenticateUserNonce = object.webapiAuthenticateUserNonce ?? "";
    message.tokenType = object.tokenType ?? 0;
    return message;
  },
};

function createBaseCMsgClientLogOff(): CMsgClientLogOff {
  return {};
}

export const CMsgClientLogOff = {
  encode(_: CMsgClientLogOff, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLogOff {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLogOff();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CMsgClientLogOff {
    return {};
  },

  toJSON(_: CMsgClientLogOff): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CMsgClientLogOff>): CMsgClientLogOff {
    return CMsgClientLogOff.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CMsgClientLogOff>): CMsgClientLogOff {
    const message = createBaseCMsgClientLogOff();
    return message;
  },
};

function createBaseCMsgClientLoggedOff(): CMsgClientLoggedOff {
  return { eresult: 0 };
}

export const CMsgClientLoggedOff = {
  encode(message: CMsgClientLoggedOff, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLoggedOff {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLoggedOff();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eresult = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientLoggedOff {
    return { eresult: isSet(object.eresult) ? Number(object.eresult) : 0 };
  },

  toJSON(message: CMsgClientLoggedOff): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientLoggedOff>): CMsgClientLoggedOff {
    return CMsgClientLoggedOff.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientLoggedOff>): CMsgClientLoggedOff {
    const message = createBaseCMsgClientLoggedOff();
    message.eresult = object.eresult ?? 0;
    return message;
  },
};

function createBaseCMsgClientNewLoginKey(): CMsgClientNewLoginKey {
  return { uniqueId: 0, loginKey: "" };
}

export const CMsgClientNewLoginKey = {
  encode(message: CMsgClientNewLoginKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uniqueId !== 0) {
      writer.uint32(8).uint32(message.uniqueId);
    }
    if (message.loginKey !== "") {
      writer.uint32(18).string(message.loginKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientNewLoginKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientNewLoginKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.uniqueId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.loginKey = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientNewLoginKey {
    return {
      uniqueId: isSet(object.uniqueId) ? Number(object.uniqueId) : 0,
      loginKey: isSet(object.loginKey) ? String(object.loginKey) : "",
    };
  },

  toJSON(message: CMsgClientNewLoginKey): unknown {
    const obj: any = {};
    message.uniqueId !== undefined && (obj.uniqueId = Math.round(message.uniqueId));
    message.loginKey !== undefined && (obj.loginKey = message.loginKey);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientNewLoginKey>): CMsgClientNewLoginKey {
    return CMsgClientNewLoginKey.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientNewLoginKey>): CMsgClientNewLoginKey {
    const message = createBaseCMsgClientNewLoginKey();
    message.uniqueId = object.uniqueId ?? 0;
    message.loginKey = object.loginKey ?? "";
    return message;
  },
};

function createBaseCMsgClientNewLoginKeyAccepted(): CMsgClientNewLoginKeyAccepted {
  return { uniqueId: 0 };
}

export const CMsgClientNewLoginKeyAccepted = {
  encode(message: CMsgClientNewLoginKeyAccepted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uniqueId !== 0) {
      writer.uint32(8).uint32(message.uniqueId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientNewLoginKeyAccepted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientNewLoginKeyAccepted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.uniqueId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientNewLoginKeyAccepted {
    return { uniqueId: isSet(object.uniqueId) ? Number(object.uniqueId) : 0 };
  },

  toJSON(message: CMsgClientNewLoginKeyAccepted): unknown {
    const obj: any = {};
    message.uniqueId !== undefined && (obj.uniqueId = Math.round(message.uniqueId));
    return obj;
  },

  create(base?: DeepPartial<CMsgClientNewLoginKeyAccepted>): CMsgClientNewLoginKeyAccepted {
    return CMsgClientNewLoginKeyAccepted.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientNewLoginKeyAccepted>): CMsgClientNewLoginKeyAccepted {
    const message = createBaseCMsgClientNewLoginKeyAccepted();
    message.uniqueId = object.uniqueId ?? 0;
    return message;
  },
};

function createBaseCMsgClientAccountInfo(): CMsgClientAccountInfo {
  return {
    personaName: "",
    ipCountry: "",
    countAuthedComputers: 0,
    accountFlags: 0,
    facebookId: "0",
    facebookName: "",
    steamguardNotifyNewmachines: false,
    steamguardMachineNameUserChosen: "",
    isPhoneVerified: false,
    twoFactorState: 0,
    isPhoneIdentifying: false,
    isPhoneNeedingReverify: false,
  };
}

export const CMsgClientAccountInfo = {
  encode(message: CMsgClientAccountInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.personaName !== "") {
      writer.uint32(10).string(message.personaName);
    }
    if (message.ipCountry !== "") {
      writer.uint32(18).string(message.ipCountry);
    }
    if (message.countAuthedComputers !== 0) {
      writer.uint32(40).int32(message.countAuthedComputers);
    }
    if (message.accountFlags !== 0) {
      writer.uint32(56).uint32(message.accountFlags);
    }
    if (message.facebookId !== "0") {
      writer.uint32(64).uint64(message.facebookId);
    }
    if (message.facebookName !== "") {
      writer.uint32(74).string(message.facebookName);
    }
    if (message.steamguardNotifyNewmachines === true) {
      writer.uint32(112).bool(message.steamguardNotifyNewmachines);
    }
    if (message.steamguardMachineNameUserChosen !== "") {
      writer.uint32(122).string(message.steamguardMachineNameUserChosen);
    }
    if (message.isPhoneVerified === true) {
      writer.uint32(128).bool(message.isPhoneVerified);
    }
    if (message.twoFactorState !== 0) {
      writer.uint32(136).uint32(message.twoFactorState);
    }
    if (message.isPhoneIdentifying === true) {
      writer.uint32(144).bool(message.isPhoneIdentifying);
    }
    if (message.isPhoneNeedingReverify === true) {
      writer.uint32(152).bool(message.isPhoneNeedingReverify);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientAccountInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientAccountInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.personaName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.ipCountry = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.countAuthedComputers = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.accountFlags = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.facebookId = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.facebookName = reader.string();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.steamguardNotifyNewmachines = reader.bool();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.steamguardMachineNameUserChosen = reader.string();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.isPhoneVerified = reader.bool();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.twoFactorState = reader.uint32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.isPhoneIdentifying = reader.bool();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.isPhoneNeedingReverify = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientAccountInfo {
    return {
      personaName: isSet(object.personaName) ? String(object.personaName) : "",
      ipCountry: isSet(object.ipCountry) ? String(object.ipCountry) : "",
      countAuthedComputers: isSet(object.countAuthedComputers) ? Number(object.countAuthedComputers) : 0,
      accountFlags: isSet(object.accountFlags) ? Number(object.accountFlags) : 0,
      facebookId: isSet(object.facebookId) ? String(object.facebookId) : "0",
      facebookName: isSet(object.facebookName) ? String(object.facebookName) : "",
      steamguardNotifyNewmachines: isSet(object.steamguardNotifyNewmachines)
        ? Boolean(object.steamguardNotifyNewmachines)
        : false,
      steamguardMachineNameUserChosen: isSet(object.steamguardMachineNameUserChosen)
        ? String(object.steamguardMachineNameUserChosen)
        : "",
      isPhoneVerified: isSet(object.isPhoneVerified) ? Boolean(object.isPhoneVerified) : false,
      twoFactorState: isSet(object.twoFactorState) ? Number(object.twoFactorState) : 0,
      isPhoneIdentifying: isSet(object.isPhoneIdentifying) ? Boolean(object.isPhoneIdentifying) : false,
      isPhoneNeedingReverify: isSet(object.isPhoneNeedingReverify) ? Boolean(object.isPhoneNeedingReverify) : false,
    };
  },

  toJSON(message: CMsgClientAccountInfo): unknown {
    const obj: any = {};
    message.personaName !== undefined && (obj.personaName = message.personaName);
    message.ipCountry !== undefined && (obj.ipCountry = message.ipCountry);
    message.countAuthedComputers !== undefined && (obj.countAuthedComputers = Math.round(message.countAuthedComputers));
    message.accountFlags !== undefined && (obj.accountFlags = Math.round(message.accountFlags));
    message.facebookId !== undefined && (obj.facebookId = message.facebookId);
    message.facebookName !== undefined && (obj.facebookName = message.facebookName);
    message.steamguardNotifyNewmachines !== undefined &&
      (obj.steamguardNotifyNewmachines = message.steamguardNotifyNewmachines);
    message.steamguardMachineNameUserChosen !== undefined &&
      (obj.steamguardMachineNameUserChosen = message.steamguardMachineNameUserChosen);
    message.isPhoneVerified !== undefined && (obj.isPhoneVerified = message.isPhoneVerified);
    message.twoFactorState !== undefined && (obj.twoFactorState = Math.round(message.twoFactorState));
    message.isPhoneIdentifying !== undefined && (obj.isPhoneIdentifying = message.isPhoneIdentifying);
    message.isPhoneNeedingReverify !== undefined && (obj.isPhoneNeedingReverify = message.isPhoneNeedingReverify);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientAccountInfo>): CMsgClientAccountInfo {
    return CMsgClientAccountInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientAccountInfo>): CMsgClientAccountInfo {
    const message = createBaseCMsgClientAccountInfo();
    message.personaName = object.personaName ?? "";
    message.ipCountry = object.ipCountry ?? "";
    message.countAuthedComputers = object.countAuthedComputers ?? 0;
    message.accountFlags = object.accountFlags ?? 0;
    message.facebookId = object.facebookId ?? "0";
    message.facebookName = object.facebookName ?? "";
    message.steamguardNotifyNewmachines = object.steamguardNotifyNewmachines ?? false;
    message.steamguardMachineNameUserChosen = object.steamguardMachineNameUserChosen ?? "";
    message.isPhoneVerified = object.isPhoneVerified ?? false;
    message.twoFactorState = object.twoFactorState ?? 0;
    message.isPhoneIdentifying = object.isPhoneIdentifying ?? false;
    message.isPhoneNeedingReverify = object.isPhoneNeedingReverify ?? false;
    return message;
  },
};

function createBaseCMsgClientChallengeRequest(): CMsgClientChallengeRequest {
  return { steamid: "0" };
}

export const CMsgClientChallengeRequest = {
  encode(message: CMsgClientChallengeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientChallengeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientChallengeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamid = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientChallengeRequest {
    return { steamid: isSet(object.steamid) ? String(object.steamid) : "0" };
  },

  toJSON(message: CMsgClientChallengeRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientChallengeRequest>): CMsgClientChallengeRequest {
    return CMsgClientChallengeRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientChallengeRequest>): CMsgClientChallengeRequest {
    const message = createBaseCMsgClientChallengeRequest();
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCMsgClientChallengeResponse(): CMsgClientChallengeResponse {
  return { challenge: "0" };
}

export const CMsgClientChallengeResponse = {
  encode(message: CMsgClientChallengeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challenge !== "0") {
      writer.uint32(9).fixed64(message.challenge);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientChallengeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientChallengeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.challenge = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMsgClientChallengeResponse {
    return { challenge: isSet(object.challenge) ? String(object.challenge) : "0" };
  },

  toJSON(message: CMsgClientChallengeResponse): unknown {
    const obj: any = {};
    message.challenge !== undefined && (obj.challenge = message.challenge);
    return obj;
  },

  create(base?: DeepPartial<CMsgClientChallengeResponse>): CMsgClientChallengeResponse {
    return CMsgClientChallengeResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CMsgClientChallengeResponse>): CMsgClientChallengeResponse {
    const message = createBaseCMsgClientChallengeResponse();
    message.challenge = object.challenge ?? "0";
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
