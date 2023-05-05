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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
