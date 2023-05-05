/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export enum EGCPlatform {
  k_eGCPlatform_None = 0,
  k_eGCPlatform_PC = 1,
  k_eGCPlatform_Mac = 2,
  k_eGCPlatform_Linux = 3,
  k_eGCPlatform_Android = 4,
  k_eGCPlatform_iOS = 5,
}

export enum GCProtoBufMsgSrc {
  GCProtoBufMsgSrc_Unspecified = 0,
  GCProtoBufMsgSrc_FromSystem = 1,
  GCProtoBufMsgSrc_FromSteamID = 2,
  GCProtoBufMsgSrc_FromGC = 3,
  GCProtoBufMsgSrc_ReplySystem = 4,
  GCProtoBufMsgSrc_SpoofedSteamID = 5,
}

export interface CMsgProtoBufHeader {
  clientSteamId: string;
  clientSessionId: number;
  sourceAppId: number;
  jobIdSource: string;
  jobIdTarget: string;
  targetJobName: string;
  eresult: number;
  errorMessage: string;
  gcMsgSrc: GCProtoBufMsgSrc;
  gcDirIndexSource: number;
}

export interface CGCSystemMsgGetAccountDetails {
  steamid: string;
  appid: number;
}

export interface CGCSystemMsgGetAccountDetailsResponse {
  eresultDeprecated: number;
  accountName: string;
  personaName: string;
  isProfileCreated: boolean;
  isProfilePublic: boolean;
  isInventoryPublic: boolean;
  isVacBanned: boolean;
  isCyberCafe: boolean;
  isSchoolAccount: boolean;
  isLimited: boolean;
  isSubscribed: boolean;
  package: number;
  isFreeTrialAccount: boolean;
  freeTrialExpiration: number;
  isLowViolence: boolean;
  isAccountLockedDown: boolean;
  isCommunityBanned: boolean;
  isTradeBanned: boolean;
  tradeBanExpiration: number;
  accountid: number;
  suspensionEndTime: number;
  currency: string;
  steamLevel: number;
  friendCount: number;
  accountCreationTime: number;
  isSteamguardEnabled: boolean;
  isPhoneVerified: boolean;
  isTwoFactorAuthEnabled: boolean;
  twoFactorEnabledTime: number;
  phoneVerificationTime: number;
  phoneId: string;
  isPhoneIdentifying: boolean;
  rtIdentityLinked: number;
  rtBirthDate: number;
  txnCountryCode: string;
  hasAcceptedChinaSsa: boolean;
  isBannedSteamChina: boolean;
}

export interface CIPLocationInfo {
  ip: number;
  latitude: number;
  longitude: number;
  country: string;
  state: string;
  city: string;
}

export interface CGCMsgGetIPLocationResponse {
  infos: CIPLocationInfo[];
}

function createBaseCMsgProtoBufHeader(): CMsgProtoBufHeader {
  return {
    clientSteamId: "0",
    clientSessionId: 0,
    sourceAppId: 0,
    jobIdSource: "0",
    jobIdTarget: "0",
    targetJobName: "",
    eresult: 0,
    errorMessage: "",
    gcMsgSrc: 0,
    gcDirIndexSource: 0,
  };
}

export const CMsgProtoBufHeader = {
  encode(message: CMsgProtoBufHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientSteamId !== "0") {
      writer.uint32(9).fixed64(message.clientSteamId);
    }
    if (message.clientSessionId !== 0) {
      writer.uint32(16).int32(message.clientSessionId);
    }
    if (message.sourceAppId !== 0) {
      writer.uint32(24).uint32(message.sourceAppId);
    }
    if (message.jobIdSource !== "0") {
      writer.uint32(81).fixed64(message.jobIdSource);
    }
    if (message.jobIdTarget !== "0") {
      writer.uint32(89).fixed64(message.jobIdTarget);
    }
    if (message.targetJobName !== "") {
      writer.uint32(98).string(message.targetJobName);
    }
    if (message.eresult !== 0) {
      writer.uint32(104).int32(message.eresult);
    }
    if (message.errorMessage !== "") {
      writer.uint32(114).string(message.errorMessage);
    }
    if (message.gcMsgSrc !== 0) {
      writer.uint32(1600).int32(message.gcMsgSrc);
    }
    if (message.gcDirIndexSource !== 0) {
      writer.uint32(1608).int32(message.gcDirIndexSource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgProtoBufHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgProtoBufHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.clientSteamId = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.clientSessionId = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.sourceAppId = reader.uint32();
          continue;
        case 10:
          if (tag != 81) {
            break;
          }

          message.jobIdSource = longToString(reader.fixed64() as Long);
          continue;
        case 11:
          if (tag != 89) {
            break;
          }

          message.jobIdTarget = longToString(reader.fixed64() as Long);
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.targetJobName = reader.string();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.eresult = reader.int32();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.errorMessage = reader.string();
          continue;
        case 200:
          if (tag != 1600) {
            break;
          }

          message.gcMsgSrc = reader.int32() as any;
          continue;
        case 201:
          if (tag != 1608) {
            break;
          }

          message.gcDirIndexSource = reader.int32();
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

function createBaseCGCSystemMsgGetAccountDetails(): CGCSystemMsgGetAccountDetails {
  return { steamid: "0", appid: 0 };
}

export const CGCSystemMsgGetAccountDetails = {
  encode(message: CGCSystemMsgGetAccountDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCSystemMsgGetAccountDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCSystemMsgGetAccountDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.steamid = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.appid = reader.uint32();
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

function createBaseCGCSystemMsgGetAccountDetailsResponse(): CGCSystemMsgGetAccountDetailsResponse {
  return {
    eresultDeprecated: 0,
    accountName: "",
    personaName: "",
    isProfileCreated: false,
    isProfilePublic: false,
    isInventoryPublic: false,
    isVacBanned: false,
    isCyberCafe: false,
    isSchoolAccount: false,
    isLimited: false,
    isSubscribed: false,
    package: 0,
    isFreeTrialAccount: false,
    freeTrialExpiration: 0,
    isLowViolence: false,
    isAccountLockedDown: false,
    isCommunityBanned: false,
    isTradeBanned: false,
    tradeBanExpiration: 0,
    accountid: 0,
    suspensionEndTime: 0,
    currency: "",
    steamLevel: 0,
    friendCount: 0,
    accountCreationTime: 0,
    isSteamguardEnabled: false,
    isPhoneVerified: false,
    isTwoFactorAuthEnabled: false,
    twoFactorEnabledTime: 0,
    phoneVerificationTime: 0,
    phoneId: "0",
    isPhoneIdentifying: false,
    rtIdentityLinked: 0,
    rtBirthDate: 0,
    txnCountryCode: "",
    hasAcceptedChinaSsa: false,
    isBannedSteamChina: false,
  };
}

export const CGCSystemMsgGetAccountDetailsResponse = {
  encode(message: CGCSystemMsgGetAccountDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresultDeprecated !== 0) {
      writer.uint32(8).uint32(message.eresultDeprecated);
    }
    if (message.accountName !== "") {
      writer.uint32(18).string(message.accountName);
    }
    if (message.personaName !== "") {
      writer.uint32(26).string(message.personaName);
    }
    if (message.isProfileCreated === true) {
      writer.uint32(208).bool(message.isProfileCreated);
    }
    if (message.isProfilePublic === true) {
      writer.uint32(32).bool(message.isProfilePublic);
    }
    if (message.isInventoryPublic === true) {
      writer.uint32(40).bool(message.isInventoryPublic);
    }
    if (message.isVacBanned === true) {
      writer.uint32(56).bool(message.isVacBanned);
    }
    if (message.isCyberCafe === true) {
      writer.uint32(64).bool(message.isCyberCafe);
    }
    if (message.isSchoolAccount === true) {
      writer.uint32(72).bool(message.isSchoolAccount);
    }
    if (message.isLimited === true) {
      writer.uint32(80).bool(message.isLimited);
    }
    if (message.isSubscribed === true) {
      writer.uint32(88).bool(message.isSubscribed);
    }
    if (message.package !== 0) {
      writer.uint32(96).uint32(message.package);
    }
    if (message.isFreeTrialAccount === true) {
      writer.uint32(104).bool(message.isFreeTrialAccount);
    }
    if (message.freeTrialExpiration !== 0) {
      writer.uint32(112).uint32(message.freeTrialExpiration);
    }
    if (message.isLowViolence === true) {
      writer.uint32(120).bool(message.isLowViolence);
    }
    if (message.isAccountLockedDown === true) {
      writer.uint32(128).bool(message.isAccountLockedDown);
    }
    if (message.isCommunityBanned === true) {
      writer.uint32(136).bool(message.isCommunityBanned);
    }
    if (message.isTradeBanned === true) {
      writer.uint32(144).bool(message.isTradeBanned);
    }
    if (message.tradeBanExpiration !== 0) {
      writer.uint32(152).uint32(message.tradeBanExpiration);
    }
    if (message.accountid !== 0) {
      writer.uint32(160).uint32(message.accountid);
    }
    if (message.suspensionEndTime !== 0) {
      writer.uint32(168).uint32(message.suspensionEndTime);
    }
    if (message.currency !== "") {
      writer.uint32(178).string(message.currency);
    }
    if (message.steamLevel !== 0) {
      writer.uint32(184).uint32(message.steamLevel);
    }
    if (message.friendCount !== 0) {
      writer.uint32(192).uint32(message.friendCount);
    }
    if (message.accountCreationTime !== 0) {
      writer.uint32(200).uint32(message.accountCreationTime);
    }
    if (message.isSteamguardEnabled === true) {
      writer.uint32(216).bool(message.isSteamguardEnabled);
    }
    if (message.isPhoneVerified === true) {
      writer.uint32(224).bool(message.isPhoneVerified);
    }
    if (message.isTwoFactorAuthEnabled === true) {
      writer.uint32(232).bool(message.isTwoFactorAuthEnabled);
    }
    if (message.twoFactorEnabledTime !== 0) {
      writer.uint32(240).uint32(message.twoFactorEnabledTime);
    }
    if (message.phoneVerificationTime !== 0) {
      writer.uint32(248).uint32(message.phoneVerificationTime);
    }
    if (message.phoneId !== "0") {
      writer.uint32(264).uint64(message.phoneId);
    }
    if (message.isPhoneIdentifying === true) {
      writer.uint32(272).bool(message.isPhoneIdentifying);
    }
    if (message.rtIdentityLinked !== 0) {
      writer.uint32(280).uint32(message.rtIdentityLinked);
    }
    if (message.rtBirthDate !== 0) {
      writer.uint32(288).uint32(message.rtBirthDate);
    }
    if (message.txnCountryCode !== "") {
      writer.uint32(298).string(message.txnCountryCode);
    }
    if (message.hasAcceptedChinaSsa === true) {
      writer.uint32(304).bool(message.hasAcceptedChinaSsa);
    }
    if (message.isBannedSteamChina === true) {
      writer.uint32(312).bool(message.isBannedSteamChina);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCSystemMsgGetAccountDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCSystemMsgGetAccountDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eresultDeprecated = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.accountName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.personaName = reader.string();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.isProfileCreated = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.isProfilePublic = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.isInventoryPublic = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.isVacBanned = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.isCyberCafe = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.isSchoolAccount = reader.bool();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.isLimited = reader.bool();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.isSubscribed = reader.bool();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.package = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.isFreeTrialAccount = reader.bool();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.freeTrialExpiration = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.isLowViolence = reader.bool();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.isAccountLockedDown = reader.bool();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.isCommunityBanned = reader.bool();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.isTradeBanned = reader.bool();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.tradeBanExpiration = reader.uint32();
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.accountid = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.suspensionEndTime = reader.uint32();
          continue;
        case 22:
          if (tag != 178) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.steamLevel = reader.uint32();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.friendCount = reader.uint32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.accountCreationTime = reader.uint32();
          continue;
        case 27:
          if (tag != 216) {
            break;
          }

          message.isSteamguardEnabled = reader.bool();
          continue;
        case 28:
          if (tag != 224) {
            break;
          }

          message.isPhoneVerified = reader.bool();
          continue;
        case 29:
          if (tag != 232) {
            break;
          }

          message.isTwoFactorAuthEnabled = reader.bool();
          continue;
        case 30:
          if (tag != 240) {
            break;
          }

          message.twoFactorEnabledTime = reader.uint32();
          continue;
        case 31:
          if (tag != 248) {
            break;
          }

          message.phoneVerificationTime = reader.uint32();
          continue;
        case 33:
          if (tag != 264) {
            break;
          }

          message.phoneId = longToString(reader.uint64() as Long);
          continue;
        case 34:
          if (tag != 272) {
            break;
          }

          message.isPhoneIdentifying = reader.bool();
          continue;
        case 35:
          if (tag != 280) {
            break;
          }

          message.rtIdentityLinked = reader.uint32();
          continue;
        case 36:
          if (tag != 288) {
            break;
          }

          message.rtBirthDate = reader.uint32();
          continue;
        case 37:
          if (tag != 298) {
            break;
          }

          message.txnCountryCode = reader.string();
          continue;
        case 38:
          if (tag != 304) {
            break;
          }

          message.hasAcceptedChinaSsa = reader.bool();
          continue;
        case 39:
          if (tag != 312) {
            break;
          }

          message.isBannedSteamChina = reader.bool();
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

function createBaseCIPLocationInfo(): CIPLocationInfo {
  return { ip: 0, latitude: 0, longitude: 0, country: "", state: "", city: "" };
}

export const CIPLocationInfo = {
  encode(message: CIPLocationInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== 0) {
      writer.uint32(8).uint32(message.ip);
    }
    if (message.latitude !== 0) {
      writer.uint32(21).float(message.latitude);
    }
    if (message.longitude !== 0) {
      writer.uint32(29).float(message.longitude);
    }
    if (message.country !== "") {
      writer.uint32(34).string(message.country);
    }
    if (message.state !== "") {
      writer.uint32(42).string(message.state);
    }
    if (message.city !== "") {
      writer.uint32(50).string(message.city);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CIPLocationInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCIPLocationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.ip = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.latitude = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.longitude = reader.float();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.country = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.state = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.city = reader.string();
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

function createBaseCGCMsgGetIPLocationResponse(): CGCMsgGetIPLocationResponse {
  return { infos: [] };
}

export const CGCMsgGetIPLocationResponse = {
  encode(message: CGCMsgGetIPLocationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      CIPLocationInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGCMsgGetIPLocationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGCMsgGetIPLocationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.infos.push(CIPLocationInfo.decode(reader, reader.uint32()));
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
